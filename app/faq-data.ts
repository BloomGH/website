/**
 * Single source of truth for the FAQ.
 * Rendered on the page (FAQSection) and emitted as FAQPage JSON-LD
 * (structured-data.tsx) so search and answer engines see identical copy.
 */
export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "What is Omaya?",
    answer:
      "Omaya is a postpartum care service that follows mothers home after they leave the hospital. It checks in with mothers by phone call and SMS during recovery, logs how they are doing, and alerts the hospital's clinical team when an answer suggests someone needs attention.",
  },
  {
    question: "Who is Omaya for?",
    answer:
      "Omaya serves two groups at once: hospitals and maternity teams who want to reduce blind spots after discharge, and mothers who want simple check-ins, reminders, and a clear path back to care when recovery does not feel right.",
  },
  {
    question: "Does a mother need a smartphone or an app?",
    answer:
      "No. Omaya works over regular phone calls and SMS, so it reaches mothers on any phone with no app download required.",
  },
  {
    question: "How does escalation work?",
    answer:
      "Omaya asks mothers about pain, bleeding, mood, sleep, feeding, medication, and warning signs. Stable updates are logged automatically. Concerning answers are escalated to the hospital's clinical team with context, so midwives get a short triaged list instead of a manual follow-up burden. The clinical team always stays in control.",
  },
  {
    question: "How long does follow-up last?",
    answer:
      "Omaya is built for continuity, with after-discharge follow-up extending up to one year postpartum.",
  },
  {
    question: "Where is Omaya available?",
    answer:
      "Omaya is currently running focused pilots with maternity teams in Ghana.",
  },
  {
    question: "How does a hospital start a pilot?",
    answer:
      "A pilot starts by mapping your discharge workflow, enrolling a first cohort of mothers, then reviewing alerts, response time, and patient feedback. You can request a pilot, book a walkthrough, or reach the team by email, phone, or WhatsApp from the contact section.",
  },
];
