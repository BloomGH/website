import Link from "next/link";
import {
  ArrowRight,
  AudioSample,
  CareTagline,
  Check,
  Cross,
  FlowerMark,
  MediaPlaceholder,
} from "./components";
import { ContactForm } from "./contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <TrustSection />
      <BusinessCase />
      <Founders />
      <ForMothersTeaser />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}

/* -------------------- Hero -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-periwinkle-50" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-plum-50" />
        <FlowerMark
          className="absolute -bottom-24 -left-20 h-[28rem] w-[28rem] opacity-[0.05] -rotate-12"
          size={448}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-24 md:grid-cols-[1.05fr_1fr] md:items-center md:pt-24 md:pb-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-periwinkle bg-periwinkle-50 px-3 py-1 text-xs font-medium tracking-wide text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-plum" />
            For private maternity hospitals in Ghana
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-navy md:text-6xl">
            Stop the postpartum <br />
            <span className="text-plum">drop-off.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Bloom is the AI continuity layer that follows her home — checking on
            every mother in your care for six weeks, surfacing red flags to your
            clinical team, and giving your hospital a standard of follow-up
            competitors can&rsquo;t match.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pilot"
              className="inline-flex items-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600"
            >
              Request a pilot
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy"
            >
              See how it works
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <Stat value="6 weeks" label="of post-discharge cover, per mother" />
            <Stat value="3 minutes" label="to onboard a mother at discharge" />
            <Stat value="5–7" label="scheduled touchpoints per mother" />
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-2xl text-navy">{value}</dt>
      <dd className="mt-1 text-xs leading-snug text-ink-muted">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Primary: clinician dashboard mock */}
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-plum" />
        [ Product preview · in pilot ]
      </p>
      <div className="relative rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Ridge Hospital · Today
            </p>
            <p className="mt-1 font-serif text-lg text-navy">
              Postnatal queue
            </p>
          </div>
          <span className="rounded-full bg-plum px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            2 escalations
          </span>
        </div>

        <ul className="mt-5 divide-y divide-line text-sm">
          <QueueRow
            initials="AO"
            name="Akosua O."
            day="Day 6 · C-section"
            tag="Level 3"
            tagTone="plum"
            note="Reports fever 38.4°C · wound site tender"
          />
          <QueueRow
            initials="ND"
            name="Naa D."
            day="Day 11 · vaginal"
            tag="Level 3"
            tagTone="plum"
            note="PHQ-2 elevated · two missed iron doses"
          />
          <QueueRow
            initials="AM"
            name="Ama M."
            day="Day 4 · vaginal"
            tag="Stable"
            tagTone="periwinkle"
            note="Pain 3/10 · feeding well · reassured"
          />
        </ul>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-surface-tinted px-4 py-3">
          <p className="text-xs text-ink-soft">
            <span className="font-semibold text-navy">14 mothers</span> stable —
            auto-cleared
          </p>
          <span className="text-[10px] uppercase tracking-wide text-ink-muted">
            Updated 2:14 PM
          </span>
        </div>
      </div>

      {/* Secondary: SMS bubble peek */}
      <div className="mt-4 md:mt-0 md:absolute md:-bottom-10 md:-right-6 md:w-72 rounded-2xl border border-line bg-white p-5 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-plum-50 font-serif text-plum">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Ama · Day 4</p>
            <p className="text-[11px] text-ink-muted">SMS check-in</p>
          </div>
          <span className="ml-auto rounded-full bg-periwinkle-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-navy">
            Stable
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <Bubble side="in">How are you feeling — sleep, mood, pain?</Bubble>
          <Bubble side="out">Tired but okay. Pain about 3.</Bubble>
        </div>
      </div>
    </div>
  );
}

function QueueRow({
  initials,
  name,
  day,
  tag,
  tagTone,
  note,
}: {
  initials: string;
  name: string;
  day: string;
  tag: string;
  tagTone: "plum" | "periwinkle";
  note: string;
}) {
  const tagClass =
    tagTone === "plum"
      ? "bg-plum-50 text-plum"
      : "bg-periwinkle-50 text-navy";
  return (
    <li className="flex items-start gap-3 py-3">
      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-periwinkle-50 font-serif text-xs text-navy">
        {initials}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium text-navy truncate">{name}</p>
          <span
            className={`rounded px-2 py-0.5 text-[10px] font-medium ${tagClass}`}
          >
            {tag}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-ink-soft truncate">{day}</p>
        <p className="mt-1 text-xs text-ink-muted">{note}</p>
      </div>
    </li>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "in" | "out";
  children: React.ReactNode;
}) {
  if (side === "in") {
    return (
      <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-periwinkle-50 px-3.5 py-2 text-xs text-navy">
        {children}
      </div>
    );
  }
  return (
    <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-navy px-3.5 py-2 text-xs text-white">
      {children}
    </div>
  );
}

/* -------------------- Social proof -------------------- */

function SocialProof() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
            In pilot
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-navy">
            In active pilot conversations with leading private maternity
            hospitals in <strong className="font-semibold">Accra</strong> and{" "}
            <strong className="font-semibold">Kumasi</strong>. Clinical
            protocols designed with senior Ghanaian midwives and obstetricians.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-tinted p-4 md:max-w-sm">
          <MediaPlaceholder
            kind="image"
            ratio="aspect-square"
            label="Photo"
            className="h-16 w-16 flex-none"
          />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Clinical advisor
            </p>
            <p className="mt-1 font-serif text-base text-navy truncate">
              [ Dr. Advisor Name ]
            </p>
            <p className="mt-0.5 text-xs text-ink-soft truncate">
              [ FWACS · Affiliation ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Problem -------------------- */

function ProblemSection() {
  return (
    <section id="problem" className="bg-surface-tinted">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              The Postpartum Cliff
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
              Maternal care stops at the hospital doors.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              The most dangerous weeks of a mother&rsquo;s recovery happen after
              discharge — far from the clinicians trained to spot trouble.
              Overworked midwives can&rsquo;t manually call every mother. Warning
              signs go unseen. And mothers who feel forgotten quietly switch
              hospitals for their next pregnancy.
            </p>

            <div className="mt-10 rounded-2xl border border-line bg-white p-6">
              <p className="font-serif text-4xl text-plum">71.8%</p>
              <p className="mt-2 text-sm text-ink-soft">
                of Ghanaian mothers complete the full maternal care continuum.
                The other 28% are lost — to complications, depression, or
                another hospital.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                Source: [ Ghana Maternal Health Survey · year ]
              </p>
            </div>

            <MediaPlaceholder
              kind="image"
              ratio="aspect-[16/9]"
              label="Editorial photo: mother and newborn at home, week three"
              className="mt-6"
            />
          </div>

          <ul className="space-y-4">
            <ProblemCard
              title="Protocol failures"
              body="Forgotten antibiotics, missed iron supplementation, skipped wound care — silent breakdowns no one catches until a readmission."
            />
            <ProblemCard
              title="Missed warning signs"
              body="Preeclampsia, postpartum haemorrhage, and postpartum depression often present in the first 14 days at home, when no one is watching."
            />
            <ProblemCard
              title="Lost retention"
              body="A mother who feels abandoned doesn't write a complaint. She just delivers her next baby — and refers her sisters — somewhere else."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-2xl border border-line bg-white p-6">
      <div className="flex items-start gap-4">
        <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-plum-50 text-plum">
          <Cross className="h-4 w-4" />
        </span>
        <div>
          <h3 className="font-serif text-xl text-navy">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
      </div>
    </li>
  );
}

/* -------------------- How it works -------------------- */

function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              How Bloom works
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
              Three components. Zero app friction for mothers.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Bloom slots into your existing discharge workflow — no app
              downloads, no smartphone required. Just a phone number and a
              midwife.
            </p>
          </div>
          <MediaPlaceholder
            kind="video"
            ratio="aspect-[16/10]"
            label="90-second product walkthrough — Hospital portal &amp; AI call demo"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Component
            number="01"
            title="The Hospital Portal"
            audience="For your team"
            body="A 3-minute discharge onboarding form and a lightweight clinical dashboard. No bloat, no retraining — designed to live alongside the workflows your midwives already use."
            bullets={[
              "Mother profile in under 3 minutes",
              "Triaged escalation queue",
              "Audit trail per patient",
            ]}
            media={
              <MediaPlaceholder
                kind="image"
                ratio="aspect-[5/3]"
                label="Screenshot · clinician dashboard"
                className="mt-5"
              />
            }
          />
          <Component
            number="02"
            title="The Proactive AI Call"
            audience="For the mother"
            body="Scheduled outbound voice check-ins on mood, sleep, pain, and feeding — in her language, tailored to her delivery type (vaginal, C-section, complicated)."
            bullets={[
              "Delivery-specific question sets",
              "Local language support",
              "No app, no smartphone needed",
            ]}
            featured
            media={
              <AudioSample
                variant="dark"
                label="Listen · postnatal check-in (Twi)"
                src="/assets/sample-call.mp3"
                caption="[ Drop sample MP3 at /public/assets/sample-call.mp3 ]"
                className="mt-5"
              />
            }
          />
          <Component
            number="03"
            title="The SMS Companion"
            audience="For the mother"
            body="Plain-text follow-ups with actionable summaries — &lsquo;take your antibiotics tonight&rsquo; — and a two-way channel that escalates straight to your clinical team."
            bullets={[
              "Medication and care reminders",
              "Two-way reply for concerns",
              "Auto-escalation to staff",
            ]}
            media={
              <MediaPlaceholder
                kind="image"
                ratio="aspect-[5/3]"
                label="Screenshot · SMS thread"
                className="mt-5"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

function Component({
  number,
  title,
  audience,
  body,
  bullets,
  featured,
  media,
}: {
  number: string;
  title: string;
  audience: string;
  body: string;
  bullets: string[];
  featured?: boolean;
  media: React.ReactNode;
}) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-7 ${
        featured
          ? "border-navy bg-navy text-white"
          : "border-line bg-white text-navy"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-serif text-2xl ${
            featured ? "text-periwinkle" : "text-plum"
          }`}
        >
          {number}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
            featured ? "text-periwinkle-200" : "text-ink-muted"
          }`}
        >
          {audience}
        </span>
      </div>

      {media}

      <h3 className="mt-6 font-serif text-2xl">{title}</h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          featured ? "text-periwinkle-200" : "text-ink-soft"
        }`}
      >
        {body}
      </p>
      <ul
        className={`mt-6 space-y-2 border-t pt-5 text-sm ${
          featured ? "border-navy-700" : "border-line"
        }`}
      >
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check
              className={`mt-1 h-3.5 w-3.5 flex-none ${
                featured ? "text-periwinkle" : "text-plum"
              }`}
            />
            <span className={featured ? "text-white" : "text-ink-soft"}>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* -------------------- Trust -------------------- */

function TrustSection() {
  return (
    <section id="trust" className="bg-surface-tinted">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              Trust, safety &amp; compliance
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
              Bloom screens. Bloom flags. Your clinicians decide.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Bloom is not a diagnostic tool. It is a triage and continuity
              layer that surfaces concerning signals to a human-in-the-loop —
              your hospital&rsquo;s clinical staff. Every alert ends with a
              qualified person.
            </p>

            <div className="mt-10 rounded-2xl border border-line bg-white p-6">
              <h3 className="font-serif text-xl text-navy">
                Built for Ghanaian healthcare
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Aligned with the Ghana Data Protection Act 2012. Designed as a
                secure digital parallel to the physical Ghana Health Service
                book — not a replacement for it.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <ListCheck>Encrypted data at rest and in transit</ListCheck>
                <ListCheck>Hospital-controlled access and roles</ListCheck>
                <ListCheck>Patient-consented enrollment at discharge</ListCheck>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7 shadow-sm">
            <h3 className="font-serif text-2xl text-navy">
              The 4-Level Severity Framework
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Every check-in is classified. Levels 3 and 4 escalate immediately
              to your clinical team.
            </p>
            <ol className="mt-6 space-y-4">
              <SeverityRow
                level="1"
                tone="periwinkle"
                title="Routine"
                body="Mother is stable. Logged for the audit trail; no action required."
              />
              <SeverityRow
                level="2"
                tone="periwinkle"
                title="Watch"
                body="Mild discomfort or non-urgent question. Bloom provides reassurance and notes for the next check-in."
              />
              <SeverityRow
                level="3"
                tone="plum"
                title="Elevated"
                body="Concerning symptom or protocol failure. Auto-escalates to the clinician dashboard within minutes."
                escalate
              />
              <SeverityRow
                level="4"
                tone="plum"
                title="Crisis"
                body="Red-flag emergency signal. Immediate alert to on-call clinical staff with full context."
                escalate
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeverityRow({
  level,
  tone,
  title,
  body,
  escalate,
}: {
  level: string;
  tone: "periwinkle" | "plum";
  title: string;
  body: string;
  escalate?: boolean;
}) {
  const badge =
    tone === "plum" ? "bg-plum text-white" : "bg-periwinkle text-navy";
  return (
    <li className="flex gap-4">
      <span
        className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-serif text-sm ${badge}`}
      >
        {level}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-navy">{title}</h4>
          {escalate && (
            <span className="rounded-full bg-plum-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-plum">
              Human escalation
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-ink-soft">{body}</p>
      </div>
    </li>
  );
}

function ListCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-1 h-3.5 w-3.5 flex-none text-plum" />
      <span>{children}</span>
    </li>
  );
}

/* -------------------- Why hospitals (formerly business case) -------------------- */

function BusinessCase() {
  return (
    <section id="hospitals" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
              Why hospitals choose Bloom
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Continuity is the standard your patients are quietly waiting for.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-periwinkle-200">
            Modern mothers compare hospitals the way they compare anything else
            — on the experience. Bloom gives you a credible, clinically-led
            answer to the question every administrator gets: &ldquo;what
            happens after I go home?&rdquo;
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ValueCard
            title="The retention story"
            metric="She comes back"
            metricLabel="for her next pregnancy"
            body="A proactive, follow-her-home experience that keeps mothers — and the sisters and friends they refer — returning to your hospital."
          />
          <ValueCard
            title="Earlier catches"
            metric="Days, not weeks"
            metricLabel="to surface protocol failures"
            body="Surface missed medications, untreated infections, and red-flag symptoms before they become readmissions or liability events."
          />
          <ValueCard
            title="Staff capacity"
            metric="A triaged queue"
            metricLabel="instead of a blanket call list"
            body="Your midwives stop chasing every mother and start spending their hours on the few who actually need attention today."
          />
        </div>

        <div className="mt-12">
          <MediaPlaceholder
            kind="image"
            ratio="aspect-[16/6]"
            label="Photo: midwives reviewing the Bloom dashboard at the nurses' station"
            className="border-navy-700 bg-navy-700/40"
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  title,
  metric,
  metricLabel,
  body,
}: {
  title: string;
  metric: string;
  metricLabel: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-700 bg-navy-700/40 p-7">
      <p className="font-serif text-2xl text-periwinkle">{metric}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-periwinkle-200">
        {metricLabel}
      </p>
      <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-periwinkle-200">{body}</p>
    </div>
  );
}

/* -------------------- Founders -------------------- */

function Founders() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            The team behind Bloom
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Built by clinicians and engineers who&rsquo;ve worked maternity in
            Ghana.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            We&rsquo;re a small team that&rsquo;s spent the last [ N ] months
            inside private maternity wards in Accra and Kumasi — listening to
            midwives, sitting in on discharge briefings, and shadowing the
            calls that already happen on personal phones at midnight.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FounderCard
            name="[ Co-founder name ]"
            role="[ Co-founder · CEO ]"
            bio="[ One-line bio: clinical/operational background, what they bring to Bloom. ]"
            linkedin="#"
          />
          <FounderCard
            name="[ Co-founder name ]"
            role="[ Co-founder · CTO ]"
            bio="[ One-line bio: engineering background, what they&rsquo;ve shipped before, why this. ]"
            linkedin="#"
          />
          <FounderCard
            name="[ Co-founder / Clinical lead ]"
            role="[ Co-founder · Clinical Lead ]"
            bio="[ One-line bio: clinical credentials and the protocols they&rsquo;ve led. ]"
            linkedin="#"
          />
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  name,
  role,
  bio,
  linkedin,
}: {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6">
      <MediaPlaceholder
        kind="image"
        ratio="aspect-square"
        label={`Portrait · ${name}`}
      />
      <h3 className="mt-6 font-serif text-xl text-navy">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{bio}</p>
      <a
        href={linkedin}
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-plum hover:text-plum-600"
      >
        LinkedIn
        <ArrowRight className="h-3 w-3" />
      </a>
    </article>
  );
}

/* -------------------- For mothers teaser -------------------- */

function ForMothersTeaser() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-surface-tinted p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              The other side of Bloom
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl">
              See what your patients experience.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Bloom isn&rsquo;t just a dashboard for your team — it&rsquo;s a
              warm, six-week companion for every mother in your care. See the
              calls, messages, and reassurance she receives from the moment she
              leaves your ward.
            </p>
            <Link
              href="/for-mothers"
              className="mt-7 inline-flex items-center rounded-full border border-navy bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              See the mother&rsquo;s experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <MediaPlaceholder
            kind="image"
            ratio="aspect-[5/4]"
            label="Editorial photo: mother on her phone, baby asleep beside her"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- Pricing -------------------- */

function Pricing() {
  return (
    <section id="pricing" className="bg-surface-tinted">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Pricing that scales with your hospital.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            We don&rsquo;t believe in surprise bills. The 30-day pilot is a
            flat rate. Ongoing pricing scales with the midwives and active
            mothers your hospital actually uses — never with what you might
            use.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PriceCard
            eyebrow="30-day pilot"
            headline="From [ GHS X,XXX ]"
            sub="flat rate · all-inclusive"
            featured
            includes={[
              "Up to [ N ] mothers enrolled",
              "Hospital portal + clinician dashboard",
              "AI voice + SMS check-ins, in [ language list ]",
              "White-glove onboarding for your midwives",
              "Weekly review with the Bloom team",
              "Clear go / no-go decision at day 30",
            ]}
          />
          <PriceCard
            eyebrow="Ongoing partnership"
            headline="Tailored to your hospital"
            sub="typical hospitals: [ GHS X ]–[ GHS Y ] / month"
            includes={[
              "Per active midwife seat",
              "Per actively enrolled mother",
              "Fixed support tier (standard / priority)",
              "Annual or month-to-month contract",
              "30-day notice exit, anytime",
              "You own all patient data, end-to-end",
            ]}
          />
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ink-muted">
          Final pricing depends on hospital size, patient volume, and language
          coverage. Request a pilot for a tailored quote.
        </p>
      </div>
    </section>
  );
}

function PriceCard({
  eyebrow,
  headline,
  sub,
  includes,
  featured,
}: {
  eyebrow: string;
  headline: string;
  sub: string;
  includes: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-7 ${
        featured
          ? "border-navy bg-white shadow-sm"
          : "border-line bg-white"
      }`}
    >
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
          featured ? "text-plum" : "text-ink-muted"
        }`}
      >
        {eyebrow}
      </p>
      <p className="mt-4 font-serif text-3xl text-navy">{headline}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
        {sub}
      </p>
      <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
        {includes.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <Check className="mt-1 h-3.5 w-3.5 flex-none text-plum" />
            <span className="text-ink-soft">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* -------------------- FAQ -------------------- */

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do mothers need a smartphone?",
    a: "No. Bloom works on any phone that can take a call or receive an SMS. The whole point is that there is no app to download, no account to create, and no smartphone required.",
  },
  {
    q: "What languages are supported?",
    a: "[ English, Twi, and Ga at launch — more on the roadmap. ] Each mother is checked in in the language she chooses at discharge.",
  },
  {
    q: "Does Bloom integrate with our existing systems?",
    a: "[ Today Bloom runs alongside your existing EMR / patient registry — no integration is required to start. EMR integrations (e.g. [ system names ]) are on the roadmap and prioritised by hospital demand. ]",
  },
  {
    q: "Who owns the patient data?",
    a: "Your hospital does. Bloom is operated under your hospital&rsquo;s care, in line with the Ghana Data Protection Act 2012. Data is encrypted at rest and in transit, hospital-controlled access and roles, [ hosted in / region — confirm ]. On exit, you receive a full export and we delete our copy on a defined schedule.",
  },
  {
    q: "How long does implementation take?",
    a: "[ Typical setup is 2–3 weeks: kickoff call, midwife training, discharge workflow integration, and a soft launch with a small first cohort. First mother is usually enrolled within a month of contract signature. ]",
  },
  {
    q: "What happens if a mother wants to opt out?",
    a: "She can stop the calls and messages at any time, by reply or by asking your clinical team. Her enrollment is paused immediately and her data handling follows the same hospital-controlled rules as the rest of her record.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Questions admins ask
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Before you talk to us.
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left list-none">
                  <h3 className="font-serif text-lg text-navy">{item.q}</h3>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-navy transition group-open:rotate-45 group-open:bg-plum group-open:text-white group-open:border-plum"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p
                  className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------- Final CTA / form -------------------- */

function FinalCta() {
  return (
    <section id="pilot" className="relative overflow-hidden bg-periwinkle-50">
      <FlowerMark
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-20 h-96 w-96 opacity-[0.06]"
        size={384}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Request a pilot
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Modern maternity care doesn&rsquo;t end at discharge.
          </h2>
          <CareTagline className="mt-5" height={32} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Tell us about your hospital and we&rsquo;ll set up a 30-minute call
            to walk through the dashboard, discuss your discharge workflow, and
            outline a 30-day pilot.
          </p>

          <div className="mt-8 rounded-2xl border border-white bg-white/70 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
              After you submit
            </p>
            <ol className="mt-4 space-y-4 text-sm text-ink-soft">
              <NextStep
                index="1"
                title="A calendar link, within one working day"
                body="From a real human on our team — usually [ Frederick / Joy ] — with two or three time options."
              />
              <NextStep
                index="2"
                title="A 30-minute walkthrough call"
                body="We show the live dashboard, talk through your discharge workflow, and answer the questions your medical director will ask."
              />
              <NextStep
                index="3"
                title="A tailored 30-day pilot proposal"
                body="Scope, pricing, language coverage, and timelines — written down, with a clear go / no-go date."
              />
            </ol>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <ListCheck>30-day pilot, with a clear go/no-go review</ListCheck>
            <ListCheck>White-glove onboarding for your midwives</ListCheck>
            <ListCheck>You own all patient data, end-to-end</ListCheck>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function NextStep({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-plum font-serif text-sm text-white">
        {index}
      </span>
      <div>
        <p className="font-semibold text-navy">{title}</p>
        <p className="mt-1 leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
