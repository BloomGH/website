"use client";

import { useState } from "react";
import Link from "next/link";
import { OmayaLockup, OMAYA_WHATSAPP } from "./components";

const NAV_LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#audiences", label: "For hospitals & mothers" },
  { href: "/#pilot", label: "Pilot" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Omaya home"
          className="flex items-center"
          onClick={close}
        >
          <OmayaLockup />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={OMAYA_WHATSAPP}
            className="hidden min-h-10 items-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 md:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition hover:border-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 md:hidden"
          >
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
                <path d="M6 6l12 12M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-ink-soft">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-md px-2 py-2 hover:bg-periwinkle-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={OMAYA_WHATSAPP}
              onClick={close}
              className="mt-2 inline-flex min-h-10 items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-white"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
