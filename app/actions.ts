"use server";

export type OmayaContactState =
  | { status: "idle" }
  | { status: "ok"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
      values?: Record<string, string>;
    };

type ContactValues = {
  name: string;
  audience: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const OMAYA_CONTACT_TO = "admin@omayacare.com";
const OMAYA_CONTACT_FROM =
  process.env.OMAYA_CONTACT_FROM ?? "Omaya <onboarding@resend.dev>";

const INTEREST_LABELS: Record<string, string> = {
  request_pilot: "Request a pilot",
  book_call: "Book a call",
  join_waitlist: "Join the waitlist",
};

const AUDIENCE_LABELS: Record<string, string> = {
  hospital: "Hospital or clinic",
  mother: "Mother or family",
  partner: "Partner or employer",
};

export async function submitOmayaContact(
  _prev: OmayaContactState,
  formData: FormData,
): Promise<OmayaContactState> {
  const values: ContactValues = {
    name: String(formData.get("name") ?? "").trim(),
    audience: String(formData.get("audience") ?? "").trim(),
    organization: String(formData.get("organization") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    interest: String(formData.get("interest") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors: Record<string, string> = {};
  if (!values.name) fieldErrors.name = "Required";
  if (!values.audience) fieldErrors.audience = "Choose one";
  if (!values.interest) fieldErrors.interest = "Choose one";

  if (!values.email && !values.phone) {
    fieldErrors.email = "Add email or phone";
    fieldErrors.phone = "Add email or phone";
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Please complete the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const delivered = await deliverContact(values);
  if (!delivered.ok) {
    return {
      status: "error",
      message:
        "We could not send your request right now. Please email admin@omayacare.com or WhatsApp +233 55 962 7280.",
      values,
    };
  }

  return {
    status: "ok",
    message:
      "Thank you. Omaya will follow up through the contact details you shared.",
  };
}

async function deliverContact(
  values: ContactValues,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `New Omaya lead - ${label(
    INTEREST_LABELS,
    values.interest,
  )} - ${values.name}`;
  const text = formatPlainText(values);
  const html = formatHtml(values);

  if (!apiKey) {
    console.info("[omaya] contact request (RESEND_API_KEY not set)", {
      to: OMAYA_CONTACT_TO,
      subject,
      replyTo: values.email || values.phone,
      values,
    });
    return { ok: true };
  }

  try {
    const payload: Record<string, unknown> = {
      from: OMAYA_CONTACT_FROM,
      to: [OMAYA_CONTACT_TO],
      subject,
      text,
      html,
    };

    if (values.email) payload.reply_to = values.email;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[omaya] resend rejected contact request", res.status, body);
      return { ok: false, reason: `resend_${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error("[omaya] resend request threw", err);
    return { ok: false, reason: "network_error" };
  }
}

function formatPlainText(v: ContactValues): string {
  return [
    `New Omaya contact from ${v.name}.`,
    "",
    `Name:         ${v.name}`,
    `Audience:     ${label(AUDIENCE_LABELS, v.audience)}`,
    v.organization ? `Organization: ${v.organization}` : null,
    `Interest:     ${label(INTEREST_LABELS, v.interest)}`,
    v.email ? `Email:        ${v.email}` : null,
    v.phone ? `Phone:        ${v.phone}` : null,
    "",
    v.message ? `Message:\n${v.message}` : "Message: -",
  ]
    .filter(Boolean)
    .join("\n");
}

function formatHtml(v: ContactValues): string {
  const row = (name: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">${name}</td><td style="padding:6px 0;color:#1e2d42;font-size:14px;">${escape(
      value,
    )}</td></tr>`;

  return `<!doctype html><html><body style="font-family:ui-sans-serif,system-ui,sans-serif;background:#f8fafc;padding:24px;color:#1e2d42;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e6ebf2;border-radius:16px;padding:28px;">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#7a2850;">New Omaya contact</p>
      <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:22px;color:#1e2d42;">${escape(
        label(INTEREST_LABELS, v.interest),
      )}</h1>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        ${row("Name", v.name)}
        ${row("Audience", label(AUDIENCE_LABELS, v.audience))}
        ${v.organization ? row("Organization", v.organization) : ""}
        ${row("Interest", label(INTEREST_LABELS, v.interest))}
        ${v.email ? row("Email", v.email) : ""}
        ${v.phone ? row("Phone", v.phone) : ""}
      </table>
      ${
        v.message
          ? `<div style="margin-top:18px;padding-top:18px;border-top:1px solid #e6ebf2;"><p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#6b7280;">Message</p><p style="margin:0;font-size:14px;line-height:1.55;white-space:pre-wrap;">${escape(
              v.message,
            )}</p></div>`
          : ""
      }
    </div>
  </body></html>`;
}

function label(labels: Record<string, string>, value: string): string {
  return labels[value] ?? value;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
