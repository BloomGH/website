import Link from "next/link";

import {
  ArrowRight,
  Check,
  OMAYA_EMAIL,
  OMAYA_PHONE_DISPLAY,
  OMAYA_PHONE_TEL,
  OMAYA_WHATSAPP,
} from "./components";
import { FadeUp, Stagger, StaggerItem } from "./animations";
import type { SeoPage } from "./seo";
import { PageStructuredData } from "./structured-data";

export function SeoLandingPage({ page }: { page: SeoPage }) {
  return (
    <>
      <PageStructuredData page={page} faqs={page.faqs} />
      <SeoHero page={page} />
      <SeoIntro page={page} />
      <SeoSections page={page} />
      {page.faqs && <SeoFaqs page={page} />}
      <SeoRelated page={page} />
      <SeoCta />
    </>
  );
}

function SeoHero({ page }: { page: SeoPage }) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-end md:py-24">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
            {page.heroEyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">
            {page.heroTitle}
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="max-w-xl text-lg leading-relaxed text-periwinkle-200 md:text-xl">
            {page.heroBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Request a pilot
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={OMAYA_WHATSAPP}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Book a call
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function SeoIntro({ page }: { page: SeoPage }) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Overview
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            {page.introTitle}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            {page.introBody}
          </p>
        </FadeUp>

        <Stagger className="grid gap-3" interval={0.12}>
          {page.highlights.map((highlight) => (
            <StaggerItem key={highlight}>
              <div className="flex gap-3 rounded-lg border border-line bg-surface-tinted p-4">
                <Check className="mt-1 h-4 w-4 flex-none text-plum" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  {highlight}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SeoSections({ page }: { page: SeoPage }) {
  if (!page.sections.length) return null;

  return (
    <section className="bg-surface-tinted">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
        {page.sections.map((section) => (
          <FadeUp key={section.title}>
            <article className="h-full rounded-lg border border-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-navy">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {section.body}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 flex-none text-plum" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function SeoFaqs({ page }: { page: SeoPage }) {
  if (!page.faqs?.length) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <FadeUp className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            {page.faqHeading ?? `Questions about ${page.label.toLowerCase()}.`}
          </h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3" interval={0.1}>
          {page.faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <article className="h-full rounded-lg border border-line bg-surface-tinted p-6">
                <h3 className="font-serif text-xl leading-snug text-navy">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SeoRelated({ page }: { page: SeoPage }) {
  return (
    <section className="bg-periwinkle-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <FadeUp className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Explore Omaya
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Related maternal health pages.
          </h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3" interval={0.1}>
          {page.related.map((link) => (
            <StaggerItem key={link.href}>
              <Link
                href={link.href}
                className="block h-full rounded-lg border border-line bg-white p-6 transition hover:border-navy"
              >
                <h3 className="font-serif text-2xl text-navy">{link.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-plum">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SeoCta() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_0.8fr] md:items-center">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
            Start a conversation
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Bring postpartum follow-up into your Ghana pilot.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-periwinkle-200">
            Contact Omaya to request a hospital pilot, ask about early access,
            or discuss maternal health partnerships.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="rounded-lg border border-white/15 bg-white/[0.08] p-6">
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-white">Email: </span>
                <a
                  href={`mailto:${OMAYA_EMAIL}`}
                  className="text-periwinkle hover:text-white hover:underline"
                >
                  {OMAYA_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone: </span>
                <a
                  href={`tel:${OMAYA_PHONE_TEL}`}
                  className="text-periwinkle hover:text-white hover:underline"
                >
                  {OMAYA_PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-periwinkle-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Contact Omaya
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
