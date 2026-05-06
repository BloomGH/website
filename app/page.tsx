import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <SiteNav />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <BusinessCase />
      <TrustSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

/* -------------------- Navigation -------------------- */

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <BloomMark />
          <span className="font-serif text-xl tracking-tight text-navy">
            Bloom
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#problem" className="hover:text-navy">The problem</a>
          <a href="#how" className="hover:text-navy">How it works</a>
          <a href="#case" className="hover:text-navy">For hospitals</a>
          <a href="#trust" className="hover:text-navy">Safety</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-700"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}

/* -------------------- Hero -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-periwinkle-50" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-plum-50" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-24 md:pb-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-periwinkle bg-periwinkle-50 px-3 py-1 text-xs font-medium tracking-wide text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-plum" />
            Maternal continuity, automated
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-navy md:text-6xl">
            Care that follows<br />
            <span className="text-plum">her home.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Bloom is an AI-assisted maternal continuity platform for private
            maternity hospitals in Ghana. We bridge the silent gap between
            discharge and the 6-week postnatal checkup — so no mother slips
            through, and no protocol is missed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
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
            <Stat value="6 wks" label="Continuous coverage" />
            <Stat value="3 min" label="Discharge onboarding" />
            <Stat value="24h → 1h" label="Manual calls per month" />
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
      <dd className="mt-1 text-xs text-ink-muted">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-50 font-serif text-plum">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Ama · Day 4</p>
            <p className="text-xs text-ink-muted">SMS check-in · 2:14 PM</p>
          </div>
          <span className="ml-auto rounded-full bg-periwinkle-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-navy">
            Stable
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <Bubble side="in">
            Hi Ama, this is Bloom checking in for Ridge Hospital. How are you
            feeling today — sleep, mood, pain (1–10)?
          </Bubble>
          <Bubble side="out">Tired but okay. Pain about 3. Baby feeding well.</Bubble>
          <Bubble side="in">
            Wonderful. Reminder: take your iron tablet with food tonight. Reply
            HELP any time to reach a midwife.
          </Bubble>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-6 hidden w-72 rounded-2xl border border-line bg-white p-5 shadow-lg md:block">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Today&rsquo;s queue
          </p>
          <span className="rounded-full bg-plum px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
            2 escalations
          </span>
        </div>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-center justify-between">
            <span className="text-navy">Akosua O. · Day 6</span>
            <span className="rounded bg-plum-50 px-2 py-0.5 text-[10px] font-medium text-plum">
              Level 3
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-navy">Naa D. · Day 11</span>
            <span className="rounded bg-plum-50 px-2 py-0.5 text-[10px] font-medium text-plum">
              Level 3
            </span>
          </li>
          <li className="flex items-center justify-between text-ink-muted">
            <span>14 mothers stable</span>
            <span className="text-[10px]">Auto-cleared</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  if (side === "in") {
    return (
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-periwinkle-50 px-4 py-2.5 text-sm text-navy">
        {children}
      </div>
    );
  }
  return (
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-navy px-4 py-2.5 text-sm text-white">
      {children}
    </div>
  );
}

/* -------------------- Problem -------------------- */

function ProblemSection() {
  return (
    <section id="problem" className="border-y border-line bg-surface-tinted">
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
            </div>
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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            How Bloom works
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Three components. Zero app friction for mothers.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Bloom slots into your existing discharge workflow — no app downloads,
            no smartphone required. Just a phone number and a midwife.
          </p>
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
}: {
  number: string;
  title: string;
  audience: string;
  body: string;
  bullets: string[];
  featured?: boolean;
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

/* -------------------- Business case -------------------- */

function BusinessCase() {
  return (
    <section id="case" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
              The business case
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Continuity is the competitive moat in private maternity care.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-periwinkle-200">
            One mother retained for her next pregnancy is worth more than the
            entire annual cost of Bloom. We help you protect that revenue while
            reducing risk and freeing your most experienced clinicians from the
            phone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ValueCard
            title="Patient retention & premium differentiation"
            metric="GHS 3.6M"
            metricLabel="protected lifetime value annually"
            body="A proactive, follow-her-home experience that keeps mothers — and their referrals — coming back for the next pregnancy."
          />
          <ValueCard
            title="Risk mitigation"
            metric="Earlier"
            metricLabel="catches on protocol failures"
            body="Surface missed medications, untreated infections, and red-flag symptoms before they become readmissions or liability events."
          />
          <ValueCard
            title="Staff efficiency"
            metric="24h → 1–3h"
            metricLabel="manual follow-up per month"
            body="Replace blanket call lists with a triaged queue. Your midwives spend their hours on the mothers who actually need them."
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
      <p className="font-serif text-3xl text-periwinkle">{metric}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-periwinkle-200">
        {metricLabel}
      </p>
      <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-periwinkle-200">{body}</p>
    </div>
  );
}

/* -------------------- Trust -------------------- */

function TrustSection() {
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              Trust, safety & compliance
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

            <div className="mt-10 rounded-2xl border border-line bg-surface-tinted p-6">
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

/* -------------------- Final CTA -------------------- */

function FinalCta() {
  return (
    <section id="cta" className="bg-periwinkle-50">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl tracking-tight text-navy md:text-5xl">
          Modern maternity care doesn&rsquo;t end at discharge.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Partner with Bloom to give every mother in your care six weeks of
          continuous, clinically-credible support — and give your hospital a
          differentiator competitors can&rsquo;t match.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@teambloom.health?subject=Bloom%20pilot%20enquiry"
            className="inline-flex items-center rounded-full bg-plum px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600"
          >
            Secure your 30-day pilot
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="mailto:hello@teambloom.health?subject=Bloom%20demo%20request"
            className="inline-flex items-center rounded-full border border-navy bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Book a 20-minute demo
          </a>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-muted">
          Currently piloting in Accra & Kumasi
        </p>
      </div>
    </section>
  );
}

/* -------------------- Footer -------------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <BloomMark />
          <span className="font-serif text-lg text-navy">Bloom</span>
          <span className="ml-3 text-xs text-ink-muted">
            Care that follows you home.
          </span>
        </div>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} Team Bloom. Aligned with the Ghana Data
          Protection Act 2012.
        </p>
      </div>
    </footer>
  );
}

/* -------------------- Inline icons & mark -------------------- */

function BloomMark() {
  return (
    <span
      aria-hidden
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M12 3c2.5 2.5 2.5 6.5 0 9-2.5-2.5-2.5-6.5 0-9Z"
          fill="currentColor"
        />
        <path
          d="M3 12c2.5-2.5 6.5-2.5 9 0-2.5 2.5-6.5 2.5-9 0Z"
          fill="#bcd2ee"
        />
        <path
          d="M21 12c-2.5 2.5-6.5 2.5-9 0 2.5-2.5 6.5-2.5 9 0Z"
          fill="#7a2850"
        />
      </svg>
    </span>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
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

function Check({ className = "" }: { className?: string }) {
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

function Cross({ className = "" }: { className?: string }) {
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
