"use client";

import { useActionState } from "react";
import { submitPilotRequest, type PilotRequestState } from "./actions";
import { ArrowRight, Check } from "./components";

const initialState: PilotRequestState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitPilotRequest,
    initialState,
  );

  if (state.status === "ok") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-left shadow-sm">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-50 text-plum">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-navy">Request received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {state.message}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-muted">
          Currently piloting in Accra &amp; Kumasi
        </p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};
  const values = state.status === "error" ? state.values ?? {} : {};

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-line bg-white p-7 text-left shadow-sm"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          name="name"
          label="Your name"
          defaultValue={values.name}
          error={fieldErrors.name}
          required
          autoComplete="name"
        />
        <Field
          name="hospital"
          label="Hospital"
          defaultValue={values.hospital}
          error={fieldErrors.hospital}
          required
          autoComplete="organization"
        />
        <Field
          name="role"
          label="Your role"
          placeholder="e.g. Medical Director"
          defaultValue={values.role}
          error={fieldErrors.role}
          required
        />
        <Field
          name="email"
          label="Work email"
          type="email"
          defaultValue={values.email}
          error={fieldErrors.email}
          required
          autoComplete="email"
        />
        <Field
          name="phone"
          label="Phone (optional)"
          type="tel"
          defaultValue={values.phone}
          error={fieldErrors.phone}
          autoComplete="tel"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="notes"
            className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
          >
            Anything we should know? (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            defaultValue={values.notes}
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-periwinkle"
          />
        </div>
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-plum/30 bg-plum-50 px-4 py-2.5 text-sm text-plum"
        >
          {state.message}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-muted">
          We respond within one working day. No mailing list, no spam.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending…" : "Request a pilot"}
          {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  defaultValue,
  error,
  required,
  autoComplete,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
      >
        {label}
        {required && <span className="ml-1 text-plum">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-periwinkle ${
          error
            ? "border-plum focus:border-plum"
            : "border-line focus:border-navy"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-plum">
          {error}
        </p>
      )}
    </div>
  );
}
