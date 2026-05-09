"use server";

export type PilotRequestState =
  | { status: "idle" }
  | { status: "ok"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string>;
      values?: Record<string, string>;
    };

const REQUIRED_FIELDS = ["name", "hospital", "role", "email"] as const;

const PILOT_REQUEST_TO = "frederick.obeng-nyarko@meltwater.org";
const PILOT_REQUEST_CC = ["joy.tari-bagshaw@meltwater.org"];
const PILOT_REQUEST_FROM =
  process.env.PILOT_REQUEST_FROM ?? "Bloom <onboarding@resend.dev>";

type PilotValues = {
  name: string;
  hospital: string;
  role: string;
  email: string;
  phone: string;
  notes: string;
};

export async function submitPilotRequest(
  _prev: PilotRequestState,
  formData: FormData,
): Promise<PilotRequestState> {
  const values: PilotValues = {
    name: String(formData.get("name") ?? "").trim(),
    hospital: String(formData.get("hospital") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
  };

  const fieldErrors: Record<string, string> = {};
  for (const f of REQUIRED_FIELDS) {
    if (!values[f]) fieldErrors[f] = "Required";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Please complete the required fields.",
      fieldErrors,
      values,
    };
  }

  const delivered = await deliverPilotRequest(values);
  if (!delivered.ok) {
    return {
      status: "error",
      message:
        "We couldn't send your request right now. Please try again, or email us at " +
        PILOT_REQUEST_TO +
        ".",
      values,
    };
  }

  return {
    status: "ok",
    message:
      "Thank you. A member of the Bloom team will be in touch within one working day.",
  };
}

async function deliverPilotRequest(
  values: PilotValues,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `New Bloom pilot request — ${values.hospital}`;
  const text = formatPlainText(values);
  const html = formatHtml(values);

  // Without an email provider configured, we still want the form to behave
  // correctly in development. Log the routing target and return ok.
  if (!apiKey) {
    console.info("[bloom] pilot request (RESEND_API_KEY not set — logging only)", {
      to: PILOT_REQUEST_TO,
      cc: PILOT_REQUEST_CC,
      subject,
      from: values.email,
      values,
    });
    return { ok: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: PILOT_REQUEST_FROM,
        to: [PILOT_REQUEST_TO],
        cc: PILOT_REQUEST_CC,
        reply_to: values.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[bloom] resend rejected pilot request", res.status, body);
      return { ok: false, reason: `resend_${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    console.error("[bloom] resend request threw", err);
    return { ok: false, reason: "network_error" };
  }
}

function formatPlainText(v: PilotValues): string {
  return [
    `New pilot request from ${v.name} (${v.hospital}).`,
    "",
    `Name:     ${v.name}`,
    `Hospital: ${v.hospital}`,
    `Role:     ${v.role}`,
    `Email:    ${v.email}`,
    v.phone ? `Phone:    ${v.phone}` : null,
    "",
    v.notes ? `Notes:\n${v.notes}` : "Notes: —",
  ]
    .filter(Boolean)
    .join("\n");
}

function formatHtml(v: PilotValues): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">${label}</td><td style="padding:6px 0;color:#1e2d42;font-size:14px;">${escape(
      value,
    )}</td></tr>`;
  return `<!doctype html><html><body style="font-family:ui-sans-serif,system-ui,sans-serif;background:#f8fafc;padding:24px;color:#1e2d42;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e6ebf2;border-radius:16px;padding:28px;">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#7a2850;">New pilot request</p>
      <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:22px;color:#1e2d42;">${escape(
        v.hospital,
      )}</h1>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        ${row("Name", v.name)}
        ${row("Role", v.role)}
        ${row("Email", v.email)}
        ${v.phone ? row("Phone", v.phone) : ""}
      </table>
      ${
        v.notes
          ? `<div style="margin-top:18px;padding-top:18px;border-top:1px solid #e6ebf2;"><p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#6b7280;">Notes</p><p style="margin:0;font-size:14px;line-height:1.55;white-space:pre-wrap;">${escape(
              v.notes,
            )}</p></div>`
          : ""
      }
    </div>
  </body></html>`;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
