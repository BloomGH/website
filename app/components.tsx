import Link from "next/link";

export const OMAYA_EMAIL = "admin@omayacare.com";
export const OMAYA_PHONE_DISPLAY = "+233 55 962 7280";
export const OMAYA_PHONE_TEL = "+233559627280";
export const OMAYA_WHATSAPP =
  "https://wa.me/233559627280?text=Hi%20Omaya%2C%20I%27d%20like%20to%20book%20a%20call.";

/* -------------------- Brand -------------------- */

export function OmayaMark({
  className = "",
  "aria-hidden": ariaHidden,
}: {
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <span
      aria-hidden={ariaHidden ?? true}
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: "url('/assets/logo.svg')",
        maskImage: "url('/assets/logo.svg')",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function OmayaLockup({
  className = "",
  markClassName = "",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-navy ${className}`}
      aria-label="Omaya"
    >
      <OmayaMark className={`h-7 w-7 ${markClassName}`} />
      <span className="font-serif text-2xl font-semibold tracking-tight">
        Omaya
      </span>
    </span>
  );
}

/* -------------------- Icons -------------------- */

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------- Footer -------------------- */

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Omaya home" className="inline-flex">
            <OmayaLockup />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Maternal continuity for hospitals and mothers after discharge.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Landing page
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/#product" className="hover:text-navy">
                Product
              </Link>
            </li>
            <li>
              <Link href="/#audiences" className="hover:text-navy">
                Who it helps
              </Link>
            </li>
            <li>
              <Link href="/#pilot" className="hover:text-navy">
                Pilot
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a href={`mailto:${OMAYA_EMAIL}`} className="hover:text-navy">
                {OMAYA_EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${OMAYA_PHONE_TEL}`} className="hover:text-navy">
                {OMAYA_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={OMAYA_WHATSAPP} className="hover:text-navy">
                WhatsApp Omaya
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Omaya. All rights reserved.</p>
          <p>Built for pilot partners in Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
