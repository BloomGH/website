import Image from "next/image";
import heroImage from "../public/assets/call_by_window-omaya.png";
import {
  ArrowRight,
  Check,
  OMAYA_EMAIL,
  OMAYA_PHONE_DISPLAY,
  OMAYA_PHONE_TEL,
  OMAYA_WHATSAPP,
  OmayaMark,
} from "./components";
import { ContactForm } from "./contact-form";
import {
  FadeUp,
  HeroParallax,
  Stagger,
  StaggerItem,
} from "./animations";
import { FAQS } from "./faq-data";

const PRODUCT_STEPS = [
  {
    title: "Enroll at discharge",
    body: "A nurse adds the mother, delivery notes, language, and next check-in before she leaves.",
  },
  {
    title: "Check in by call and SMS",
    body: "Omaya asks about pain, bleeding, mood, sleep, feeding, medication, and warning signs.",
  },
  {
    title: "Escalate the few who need care",
    body: "Stable updates are logged. Concerning answers go to the clinical team with context.",
  },
];

const PILOT_STEPS = [
  "Map your discharge workflow.",
  "Enroll a first cohort of mothers.",
  "Review alerts, response time, and patient feedback.",
];

export default function Home() {
  return (
    <>
      <Hero />
      <SignalStrip />
      <ProductSection />
      <AudienceSection />
      <PilotSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-navy text-white">
      <HeroParallax className="absolute inset-0 -z-20">
        <Image
          src={heroImage}
          alt="A mother taking an Omaya care call at home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </HeroParallax>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(30,45,66,0.94)_0%,rgba(30,45,66,0.78)_42%,rgba(30,45,66,0.28)_100%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:min-h-[78svh] md:pb-20">
        <Stagger className="max-w-xs sm:max-w-2xl" interval={0.15}>
          <StaggerItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-periwinkle" />
              <span className="sm:hidden">Pilot in Ghana</span>
              <span className="hidden sm:inline">
                Piloting maternal continuity in Ghana
              </span>
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Omaya
              <span className="sr-only">
                {" "}
                — postpartum care that follows mothers home
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/[0.86] sm:text-xl md:text-2xl">
              Check-ins for mothers. Escalation alerts for hospitals.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#contact"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                Request a pilot
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={OMAYA_WHATSAPP}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                Book a call
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
              >
                Join waitlist
              </a>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeUp delay={0.7}>
          <dl className="mt-14 grid max-w-3xl gap-5 border-t border-white/20 pt-6 text-white/90 sm:grid-cols-3">
            <HeroStat value="1 year" label="after-discharge follow-up" />
            <HeroStat value="No app" label="calls and SMS work on any phone" />
            <HeroStat value="Human-led" label="clinical team stays in control" />
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-2xl text-white">{value}</dt>
      <dd className="mt-1 text-sm leading-snug text-white/70">{label}</dd>
    </div>
  );
}

function SignalStrip() {
  return (
    <section className="border-y border-line bg-white">
      <Stagger className="mx-auto grid max-w-6xl gap-6 px-6 py-8 md:grid-cols-3">
        <StaggerItem>
          <Signal label="For hospitals" value="A triaged queue, not a call list." />
        </StaggerItem>
        <StaggerItem>
          <Signal label="For mothers" value="Support that follows her home." />
        </StaggerItem>
        <StaggerItem>
          <Signal label="For pilot teams" value="Fast setup, clear review." />
        </StaggerItem>
      </Stagger>
    </section>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl leading-tight text-navy">{value}</p>
    </div>
  );
}

function ProductSection() {
  return (
    <section id="product" className="bg-surface-tinted">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
              Product
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
              Know who needs help after discharge.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Omaya follows up with mothers after birth, records what changed, and
              gives hospital teams the short list that needs attention.
            </p>
          </FadeUp>

          <Stagger className="mt-8 grid gap-4">
            {PRODUCT_STEPS.map((step, index) => (
              <StaggerItem key={step.title}>
                <ProductStep index={index + 1} {...step} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeUp delay={0.3}>
          <ProductMock />
        </FadeUp>
      </div>
    </section>
  );
}

function ProductStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-lg border border-line bg-white p-5">
      <div className="flex gap-4">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-plum text-sm font-semibold text-white">
          {index}
        </span>
        <div>
          <h3 className="font-semibold text-navy">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
      </div>
    </article>
  );
}

function ProductMock() {
  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-50 text-plum">
            <OmayaMark className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Omaya care queue
            </p>
            <p className="font-serif text-xl text-navy">Today</p>
          </div>
        </div>
        <span className="rounded-full bg-plum px-3 py-1 text-xs font-semibold text-white">
          2 escalations
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        <QueueRow
          name="Akosua O."
          detail="Day 6 after C-section"
          status="Escalate"
          note="Fever and wound tenderness reported."
        />
        <QueueRow
          name="Naa D."
          detail="Day 11 after birth"
          status="Escalate"
          note="Low mood and poor sleep for three days."
        />
        <QueueRow
          name="Ama M."
          detail="Day 4 after birth"
          status="Stable"
          note="Pain improving. Feeding going well."
        />
      </div>

      <div className="mt-5 rounded-lg bg-surface-tinted p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">
          SMS summary
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Hi Ama, Omaya will check in again on Friday. Reply anytime if pain,
          bleeding, mood, or feeding changes.
        </p>
      </div>
    </div>
  );
}

function QueueRow({
  name,
  detail,
  status,
  note,
}: {
  name: string;
  detail: string;
  status: "Escalate" | "Stable";
  note: string;
}) {
  const urgent = status === "Escalate";
  return (
    <div className="rounded-lg border border-line p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-navy">{name}</p>
          <p className="mt-1 text-xs text-ink-muted">{detail}</p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${urgent ? "bg-plum-50 text-plum" : "bg-periwinkle-50 text-navy"
            }`}
        >
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{note}</p>
    </div>
  );
}

function AudienceSection() {
  return (
    <section id="audiences" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeUp className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Who it helps
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            One care loop, two clear experiences.
          </h2>
        </FadeUp>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2" interval={0.15}>
          <StaggerItem>
            <AudienceCard
              title="For hospitals"
              body="Reduce blind spots after discharge. Give midwives a focused queue, not a manual follow-up burden."
              bullets={[
                "3-minute enrollment",
                "Triage by severity",
                "Audit trail for each mother",
              ]}
              href="#contact"
              cta="Request a pilot"
            />
          </StaggerItem>
          <StaggerItem>
            <AudienceCard
              title="For mothers"
              body="Get simple check-ins, reminders, and a path back to care when recovery does not feel right."
              bullets={[
                "No app download",
                "Call and SMS support",
                "Early access waitlist",
              ]}
              href="#contact"
              cta="Join waitlist"
              muted
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function AudienceCard({
  title,
  body,
  bullets,
  href,
  cta,
  muted,
}: {
  title: string;
  body: string;
  bullets: string[];
  href: string;
  cta: string;
  muted?: boolean;
}) {
  return (
    <article
      className={`rounded-lg border p-6 ${muted ? "border-line bg-surface-tinted" : "border-navy bg-navy text-white"
        }`}
    >
      <h3 className="font-serif text-3xl">{title}</h3>
      <p
        className={`mt-4 text-sm leading-relaxed ${muted ? "text-ink-soft" : "text-periwinkle-200"
          }`}
      >
        {body}
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <Check
              className={`mt-1 h-3.5 w-3.5 flex-none ${muted ? "text-plum" : "text-periwinkle"
                }`}
            />
            <span className={muted ? "text-ink-soft" : "text-white"}>
              {bullet}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`mt-7 inline-flex min-h-10 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${muted
          ? "border border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-plum"
          : "bg-white text-navy hover:bg-periwinkle-50 focus-visible:ring-white focus-visible:ring-offset-navy"
          }`}
      >
        {cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </article>
  );
}

function PilotSection() {
  return (
    <section id="pilot" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle">
            Pilot model
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Start small. Learn fast. Decide with evidence.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-periwinkle-200">
            Omaya is currently set up for focused pilots with maternity teams in
            Ghana.
          </p>
        </FadeUp>

        <Stagger className="grid gap-4" interval={0.12}>
          {PILOT_STEPS.map((step, index) => (
            <StaggerItem key={step}>
              <div className="rounded-lg border border-white/15 bg-white/[0.08] p-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-periwinkle text-sm font-semibold text-navy">
                    {index + 1}
                  </span>
                  <p className="font-serif text-2xl leading-tight">{step}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${OMAYA_EMAIL}`}
                className="inline-flex min-h-10 items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-periwinkle-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Email Omaya
              </a>
              <a
                href={`tel:${OMAYA_PHONE_TEL}`}
                className="inline-flex min-h-10 items-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {OMAYA_PHONE_DISPLAY}
              </a>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeUp className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Questions about Omaya, answered.
          </h2>
        </FadeUp>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2" interval={0.1}>
          {FAQS.map((faq) => (
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

function ContactSection() {
  return (
    <section id="contact" className="bg-periwinkle-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Tell us where Omaya should begin.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Request a hospital pilot, book a walkthrough, or join the early
            access list for mothers.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink-soft">
            <ContactLine
              label="Email"
              value={OMAYA_EMAIL}
              href={`mailto:${OMAYA_EMAIL}`}
            />
            <ContactLine
              label="Phone"
              value={OMAYA_PHONE_DISPLAY}
              href={`tel:${OMAYA_PHONE_TEL}`}
            />
            <ContactLine
              label="WhatsApp"
              value="Message Omaya"
              href={OMAYA_WHATSAPP}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <p>
      <span className="font-semibold text-navy">{label}: </span>
      <a href={href} className="text-plum hover:text-plum-600 hover:underline">
        {value}
      </a>
    </p>
  );
}
