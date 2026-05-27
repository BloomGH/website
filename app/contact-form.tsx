"use client";

import { useActionState } from "react";
import { submitOmayaContact, type OmayaContactState } from "./actions";
import { ArrowRight, Check } from "./components";

const initialState: OmayaContactState = { status: "idle" };

const INTERESTS = [
  {
    value: "request_pilot",
    title: "Request a pilot",
    body: "For hospitals ready to test Omaya with a small cohort.",
  },
  {
    value: "book_call",
    title: "Book a call",
    body: "For partners who want a quick walkthrough first.",
  },
  {
    value: "join_waitlist",
    title: "Join the waitlist",
    body: "For mothers and families who want early access.",
  },
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitOmayaContact,
    initialState,
  );

  if (state.status === "ok") {
    return (
      <div className="rounded-lg border border-line bg-white p-7 text-left shadow-sm">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-50 text-plum">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-navy">Message received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {state.message}
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Pilot conversations are open in Ghana.
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
      className="rounded-lg border border-line bg-white p-5 text-left shadow-sm sm:p-7"
      noValidate
    >
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
          What do you need?
        </legend>
        <div className="mt-3 grid gap-3">
          {INTERESTS.map((interest) => (
            <label
              key={interest.value}
              className={`flex cursor-pointer gap-3 rounded-lg border p-3 text-sm transition focus-within:ring-2 focus-within:ring-periwinkle ${
                values.interest === interest.value
                  ? "border-plum bg-plum-50"
                  : "border-line bg-white hover:border-navy"
              }`}
            >
              <input
                type="radio"
                name="interest"
                value={interest.value}
                defaultChecked={
                  values.interest
                    ? values.interest === interest.value
                    : interest.value === "request_pilot"
                }
                className="mt-1 h-4 w-4 accent-plum"
              />
              <span>
                <span className="block font-semibold text-navy">
                  {interest.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                  {interest.body}
                </span>
              </span>
            </label>
          ))}
        </div>
        {fieldErrors.interest && (
          <p className="mt-2 text-xs text-plum">{fieldErrors.interest}</p>
        )}
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          name="name"
          label="Your name"
          defaultValue={values.name}
          error={fieldErrors.name}
          autoComplete="name"
          required
        />
        <SelectField
          name="audience"
          label="You are"
          defaultValue={values.audience}
          error={fieldErrors.audience}
          required
          options={[
            ["", "Choose one"],
            ["hospital", "Hospital or clinic"],
            ["mother", "Mother or family"],
            ["partner", "Partner or employer"],
          ]}
        />
        <Field
          name="organization"
          label="Organization"
          placeholder="Optional"
          defaultValue={values.organization}
          error={fieldErrors.organization}
          autoComplete="organization"
          className="sm:col-span-2"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          defaultValue={values.email}
          error={fieldErrors.email}
          autoComplete="email"
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          defaultValue={values.phone}
          error={fieldErrors.phone}
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="field-message"
            className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
          >
            Message
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            defaultValue={values.message}
            placeholder="Tell us the hospital, city, or support you need."
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-periwinkle"
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

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-muted">
          Add email or phone so we can reply. No spam.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send message"}
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
        className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-periwinkle ${
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

function SelectField({
  name,
  label,
  defaultValue,
  error,
  required,
  options,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  options: [string, string][];
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
      >
        {label}
        {required && <span className="ml-1 text-plum">*</span>}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue ?? ""}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-periwinkle ${
          error
            ? "border-plum focus:border-plum"
            : "border-line focus:border-navy"
        }`}
      >
        {options.map(([value, labelText]) => (
          <option key={value} value={value}>
            {labelText}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-plum">
          {error}
        </p>
      )}
    </div>
  );
}
