import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CareTagline,
  Check,
  FlowerMark,
  MediaPlaceholder,
} from "../components";

export const metadata: Metadata = {
  title: "For mothers — Bloom",
  description:
    "What Bloom does for you in the six weeks after you leave the hospital. A warm, private companion that follows you home.",
};

export default function ForMothers() {
  return (
    <>
      <Hero />
      <Pillars />
      <Weeks />
      <Voices />
      <Privacy />
      <ClosingCta />
    </>
  );
}

/* -------------------- Hero -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-periwinkle-50">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-plum-50" />
        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/60" />
        <FlowerMark
          className="absolute top-12 -right-16 h-[26rem] w-[26rem] opacity-[0.06] rotate-12"
          size={416}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:items-center md:pt-24 md:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-periwinkle bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-plum" />
            For mothers
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-navy md:text-6xl">
            Six weeks. <br />
            <span className="text-plum">Always one call away.</span>
          </h1>
          <CareTagline className="mt-6" height={36} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            The day you leave the hospital is not the day care should stop. If
            your hospital uses Bloom, a calm, private companion checks in with
            you for six weeks — in your language, on your phone, with your
            midwives just behind it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#weeks"
              className="inline-flex items-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600"
            >
              See what the six weeks look like
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              For hospitals
            </Link>
          </div>
        </div>

        <MediaPlaceholder
          kind="image"
          ratio="aspect-[4/5]"
          label="Editorial photo: mother holding her newborn at home, soft natural light"
        />
      </div>
    </section>
  );
}

/* -------------------- What Bloom does for you -------------------- */

function Pillars() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            What Bloom does for you
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            A companion you don&rsquo;t have to download.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            No app. No smartphone needed. Just answers when you have a
            question, reminders when something matters, and a midwife on the
            other end whenever a call needs to become a conversation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            eyebrow="A warm voice"
            title="Calls that check in on you, not on you."
            body="Short, friendly voice check-ins on how you&rsquo;re sleeping, healing, feeding, and feeling — adjusted to whether you had a vaginal delivery, a C-section, or a complicated birth."
            mediaLabel="Photo: woman taking a phone call by a window"
          />
          <Pillar
            eyebrow="Your language"
            title="In Twi, Ga, Ewe, or English."
            body="Every call and message meets you in the language you&rsquo;re most comfortable in. No clinical jargon. No translation guessing."
            mediaLabel="Photo: phone screen showing an SMS in Twi"
            featured
          />
          <Pillar
            eyebrow="Real people behind it"
            title="A midwife is always one reply away."
            body="When something doesn&rsquo;t feel right, you reply HELP — and your hospital&rsquo;s clinical team gets the alert with the full context, immediately."
            mediaLabel="Photo: midwife at work in a clinic"
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  eyebrow,
  title,
  body,
  mediaLabel,
  featured,
}: {
  eyebrow: string;
  title: string;
  body: string;
  mediaLabel: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 ${
        featured
          ? "border-plum bg-plum-50"
          : "border-line bg-white"
      }`}
    >
      <MediaPlaceholder
        kind="image"
        ratio="aspect-[5/3]"
        label={mediaLabel}
      />
      <p
        className={`mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] ${
          featured ? "text-plum" : "text-ink-muted"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-xl text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
    </article>
  );
}

/* -------------------- Your six weeks at home -------------------- */

function Weeks() {
  const weeks = [
    {
      label: "Day 1–3",
      title: "The first call home",
      body: "A short voice call to check on bleeding, pain, baby&rsquo;s feeding, and how you&rsquo;re holding up. No paperwork. Just a calm voice.",
    },
    {
      label: "Week 1",
      title: "Healing, gently watched",
      body: "Reminders for your iron tablets, antibiotics, and wound care — and a quiet flag to your hospital if any signs look concerning.",
    },
    {
      label: "Week 2–3",
      title: "How are you, really?",
      body: "Mood check-ins designed by clinicians to spot postpartum depression early — and connect you to support before it grows louder.",
    },
    {
      label: "Week 4–5",
      title: "Feeding, sleep, family",
      body: "Practical guidance on feeding, your own rest, and the little questions you didn&rsquo;t want to call the hospital about.",
    },
    {
      label: "Week 6",
      title: "A warm handover back",
      body: "A reminder to attend your 6-week postnatal checkup, with a summary your midwife already has — so the visit picks up where Bloom left off.",
    },
  ];

  return (
    <section id="weeks" className="bg-surface-tinted">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Your six weeks at home
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            A rhythm, not a checklist.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Bloom doesn&rsquo;t flood your phone. It shows up at the moments
            that matter, and stays quiet when they don&rsquo;t.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-5">
          {weeks.map((w, i) => (
            <li
              key={w.label}
              className="relative flex flex-col rounded-2xl border border-line bg-white p-6"
            >
              <span className="font-serif text-3xl text-plum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {w.label}
              </p>
              <h3 className="mt-2 font-serif text-lg text-navy">{w.title}</h3>
              <p
                className="mt-3 text-sm leading-relaxed text-ink-soft"
                dangerouslySetInnerHTML={{ __html: w.body }}
              />
            </li>
          ))}
        </ol>

        <MediaPlaceholder
          kind="video"
          ratio="aspect-[16/7]"
          label="60-second mother&apos;s journey video — what a typical six weeks feels like"
          className="mt-12"
        />
      </div>
    </section>
  );
}

/* -------------------- Real voices -------------------- */

function Voices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Real voices
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            From mothers in our pilot.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Quote
            mediaLabel="Portrait: pilot mother, Accra"
            quote="The first week, I couldn&rsquo;t tell what was normal and what wasn&rsquo;t. Bloom called and I felt like someone was watching out for me without me having to ask."
            attribution="A.O. — first-time mother, Accra"
          />
          <Quote
            mediaLabel="Portrait: pilot mother, Kumasi"
            quote="My English is okay but I&rsquo;m more honest in Twi. The fact that the call met me in my own language is what made me actually answer it."
            attribution="N.D. — mother of two, Kumasi"
          />
          <Quote
            mediaLabel="Portrait: midwife, pilot hospital"
            quote="When Bloom flagged Akosua&rsquo;s fever on Day 6, we caught the wound infection early. She was treated as an outpatient. That&rsquo;s the difference."
            attribution="Senior midwife, pilot hospital"
          />
        </div>
      </div>
    </section>
  );
}

function Quote({
  mediaLabel,
  quote,
  attribution,
}: {
  mediaLabel: string;
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="flex flex-col rounded-2xl border border-line bg-white p-6">
      <MediaPlaceholder
        kind="image"
        ratio="aspect-square"
        label={mediaLabel}
      />
      <blockquote className="mt-6 font-serif text-lg leading-snug text-navy">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink-muted">
        {attribution}
      </figcaption>
    </figure>
  );
}

/* -------------------- Privacy -------------------- */

function Privacy() {
  return (
    <section id="privacy" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
              Your privacy
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              What you tell Bloom stays with your hospital.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-periwinkle-200">
              Bloom is operated under your hospital&rsquo;s care, in line with
              the Ghana Data Protection Act 2012. Your check-ins, replies, and
              health information are visible only to your hospital&rsquo;s
              clinical team — never sold, never shared with anyone else.
            </p>
          </div>

          <ul className="space-y-3 rounded-2xl border border-navy-700 bg-navy-700/40 p-7">
            <PrivacyItem>
              You only join Bloom if you give consent at discharge.
            </PrivacyItem>
            <PrivacyItem>
              You can ask to stop the calls and messages at any time.
            </PrivacyItem>
            <PrivacyItem>
              Your messages are encrypted and stored securely.
            </PrivacyItem>
            <PrivacyItem>
              Only your hospital&rsquo;s clinical team can see your replies.
            </PrivacyItem>
            <PrivacyItem>
              Bloom does not diagnose. A clinician always decides what happens next.
            </PrivacyItem>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PrivacyItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-periwinkle-200">
      <Check className="mt-1 h-4 w-4 flex-none text-periwinkle" />
      <span>{children}</span>
    </li>
  );
}

/* -------------------- Closing CTA -------------------- */

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-periwinkle-50">
      <FlowerMark
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] opacity-[0.06]"
        size={448}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl tracking-tight text-navy md:text-5xl">
          Ask your hospital about Bloom.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Bloom is offered through partner hospitals — not directly to mothers
          yet. If your hospital is in our pilot, you&rsquo;ll be invited at
          discharge. If not, mention us at your next visit.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#pilot"
            className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            For hospital administrators
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Back to overview
          </Link>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-muted">
          Currently piloting in Accra &amp; Kumasi
        </p>
      </div>
    </section>
  );
}
