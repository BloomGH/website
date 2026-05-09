"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BloomLockup } from "./components";

const HOSPITAL_LINKS = [
  { href: "/#problem", label: "The problem" },
  { href: "/#how", label: "How it works" },
  { href: "/#hospitals", label: "Why hospitals" },
  { href: "/#trust", label: "Safety" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onMothersPage = pathname?.startsWith("/for-mothers");

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Bloom home"
          className="flex items-center"
          onClick={close}
        >
          <BloomLockup height={28} />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {!onMothersPage &&
            HOSPITAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-navy">
                {l.label}
              </Link>
            ))}
          <Link
            href={onMothersPage ? "/" : "/for-mothers"}
            className={`hover:text-navy ${
              onMothersPage ? "text-navy font-medium" : ""
            }`}
          >
            {onMothersPage ? "For hospitals" : "For mothers"}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#pilot"
            className="hidden md:inline-flex items-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-700"
          >
            Request a pilot
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-ink-soft">
            {!onMothersPage &&
              HOSPITAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-md px-2 py-2 hover:bg-periwinkle-50 hover:text-navy"
                >
                  {l.label}
                </Link>
              ))}
            <Link
              href={onMothersPage ? "/" : "/for-mothers"}
              onClick={close}
              className="rounded-md px-2 py-2 hover:bg-periwinkle-50 hover:text-navy"
            >
              {onMothersPage ? "For hospitals" : "For mothers"}
            </Link>
            <Link
              href="/#pilot"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-white"
            >
              Request a pilot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
