import Image from "next/image";
import Link from "next/link";
import flowerLockup from "../public/assets/flower_with_text.png";
import flowerMark from "../public/assets/flower.png";
import careTagline from "../public/assets/care_that_follows.png";

/* -------------------- Brand lockups -------------------- */

export function BloomLockup({
  className = "",
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  // Lockup intrinsic ratio is ~4.28:1 (1228×287). Width derived from height.
  const width = Math.round((height * 1228) / 287);
  return (
    <Image
      src={flowerLockup}
      alt="Bloom"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}

export function FlowerMark({
  className = "",
  size = 32,
  alt = "",
}: {
  className?: string;
  size?: number;
  alt?: string;
}) {
  return (
    <Image
      src={flowerMark}
      alt={alt}
      width={size}
      height={size}
      aria-hidden={alt === ""}
      className={className}
    />
  );
}

export function CareTagline({
  className = "",
  height = 36,
}: {
  className?: string;
  height?: number;
}) {
  // Script tagline intrinsic ratio is ~6.18:1 (964×156).
  const width = Math.round((height * 964) / 156);
  return (
    <Image
      src={careTagline}
      alt="care that follows you home"
      width={width}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
    />
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
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M8 5v14l11-7-11-7Z" fill="currentColor" />
    </svg>
  );
}

export function ImageIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9" cy="11" r="1.6" fill="currentColor" />
      <path
        d="m4 17 5-5 4 4 3-3 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------- Media placeholder -------------------- */

export function MediaPlaceholder({
  label,
  kind = "image",
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  kind?: "image" | "video";
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl border border-line bg-periwinkle-50 ${className}`}
      role="img"
      aria-label={`${kind} placeholder: ${label}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, var(--color-periwinkle-200) 0, transparent 55%), radial-gradient(circle at 80% 80%, var(--color-plum-50) 0, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49%, rgba(30,45,66,0.06) 49%, rgba(30,45,66,0.06) 51%, transparent 51%)",
          backgroundSize: "18px 18px",
        }}
      />
      <FlowerMark
        className="absolute -bottom-6 -right-4 h-40 w-40 opacity-[0.08] -rotate-12"
        size={160}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
          {kind === "video" ? (
            <PlayIcon className="h-4 w-4" />
          ) : (
            <ImageIcon className="h-4 w-4" />
          )}
        </span>
        <span className="rounded-full border border-line bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted backdrop-blur">
          {kind === "video" ? "Video" : "Image"} · placeholder
        </span>
        <p className="font-serif text-sm leading-snug text-navy/80 max-w-[22ch]">
          {label}
        </p>
      </div>
    </div>
  );
}

/* -------------------- Audio sample -------------------- */

export function AudioSample({
  label,
  src,
  caption,
  variant = "light",
  className = "",
}: {
  label: string;
  src: string;
  caption?: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`rounded-xl border p-4 ${
        isDark ? "border-navy-700 bg-navy-700/40" : "border-line bg-white"
      } ${className}`}
    >
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-periwinkle" : "text-plum"
        }`}
      >
        {label}
      </p>
      <audio
        controls
        preload="none"
        className="mt-3 w-full"
        aria-label={label}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
      {caption && (
        <p
          className={`mt-2 text-[11px] ${
            isDark ? "text-periwinkle-200" : "text-ink-muted"
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

/* -------------------- Footer -------------------- */

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Bloom home" className="inline-flex">
            <BloomLockup height={28} />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            A maternal continuity layer for private maternity hospitals in
            Ghana.
          </p>
          <CareTagline className="mt-6" height={28} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            For hospitals
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/#how" className="hover:text-navy">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/#hospitals" className="hover:text-navy">
                Why hospitals choose Bloom
              </Link>
            </li>
            <li>
              <Link href="/#trust" className="hover:text-navy">
                Safety &amp; compliance
              </Link>
            </li>
            <li>
              <Link href="/#pilot" className="hover:text-navy">
                Request a pilot
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            For mothers
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/for-mothers" className="hover:text-navy">
                What Bloom does for you
              </Link>
            </li>
            <li>
              <Link href="/for-mothers#weeks" className="hover:text-navy">
                Your six weeks at home
              </Link>
            </li>
            <li>
              <Link href="/for-mothers#privacy" className="hover:text-navy">
                Your privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Team Bloom. All rights reserved.</p>
          <p>
            Direct:{" "}
            <a
              href="mailto:[ pilot@teambloom.health ]"
              className="text-navy hover:underline"
            >
              [ pilot@teambloom.health ]
            </a>
            {" · "}
            Aligned with the Ghana Data Protection Act 2012.
          </p>
        </div>
      </div>
    </footer>
  );
}
