import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "./components";

export const SITE_ALTERNATE_NAME = "Omaya Care";
export const CONTENT_LAST_MODIFIED = "2026-05-31";

export const OG_IMAGE = {
  url: "/assets/call_by_window-omaya.png",
  width: 1448,
  height: 1086,
  alt: "A mother taking an Omaya care call at home",
};

const BASE_KEYWORDS = [
  "Omaya",
  "Omaya Care",
  "postpartum care",
  "postpartum care Ghana",
  "postnatal care Ghana",
  "maternal health Ghana",
  "maternal health",
  "after-discharge follow-up",
  "hospital discharge follow-up",
  "SMS health check-ins",
  "clinical escalation",
  "maternal continuity of care",
];

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoPage = {
  path: string;
  label: string;
  metadataTitle: string;
  description: string;
  keywords: readonly string[];
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  introTitle: string;
  introBody: string;
  highlights: readonly string[];
  sections: readonly {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  }[];
  faqHeading?: string;
  faqs?: readonly SeoFaq[];
  service?: {
    name: string;
    serviceType: string;
    audience: readonly string[];
  };
  related: readonly {
    href: string;
    label: string;
    description: string;
  }[];
};

export const SEO_PAGES = {
  home: {
    path: "/",
    label: "Home",
    metadataTitle:
      "Omaya | Postpartum Care and Maternal Health Follow-Up in Ghana",
    description:
      "Omaya provides postpartum care and maternal health follow-up in Ghana through phone calls, SMS check-ins, and hospital escalation after discharge.",
    keywords: [
      "Omaya maternal health",
      "Omaya postpartum care",
      "maternal health startup Ghana",
      "postpartum follow-up Ghana",
      "mother check-ins Ghana",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 1,
    heroEyebrow: "Postpartum care in Ghana",
    heroTitle: "Omaya",
    heroBody:
      "Postpartum care and maternal health follow-up in Ghana through calls, SMS, and hospital escalation.",
    introTitle: "Postpartum care that follows mothers home.",
    introBody:
      "Omaya helps hospitals continue maternal care after discharge with simple check-ins, clear recovery prompts, and escalation context when a mother may need attention.",
    highlights: [
      "Phone calls and SMS work on any phone.",
      "Maternity teams keep clinical control.",
      "Built for focused pilots with partners in Ghana.",
    ],
    sections: [],
    service: {
      name: "Omaya postpartum follow-up",
      serviceType: "Postpartum maternal care follow-up",
      audience: ["Hospitals and maternity teams", "Postpartum mothers"],
    },
    related: [
      {
        href: "/postpartum-care-ghana",
        label: "Postpartum care in Ghana",
        description: "How Omaya supports mothers after birth and discharge.",
      },
      {
        href: "/maternal-health-ghana",
        label: "Maternal health in Ghana",
        description: "How follow-up strengthens continuity after delivery.",
      },
      {
        href: "/for-hospitals",
        label: "For hospitals",
        description: "A focused follow-up workflow for maternity teams.",
      },
    ],
  },
  postpartumCareGhana: {
    path: "/postpartum-care-ghana",
    label: "Postpartum care Ghana",
    metadataTitle: "Postpartum Care in Ghana | Omaya",
    description:
      "Learn how Omaya supports postpartum care in Ghana with call and SMS check-ins, recovery prompts, and escalation to hospital teams after discharge.",
    keywords: [
      "postpartum care Ghana",
      "postpartum support Ghana",
      "postnatal care Ghana",
      "after birth support Ghana",
      "postpartum follow-up Ghana",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.9,
    heroEyebrow: "Postpartum care Ghana",
    heroTitle: "Postpartum care that continues after discharge.",
    heroBody:
      "Omaya helps mothers in Ghana receive structured postpartum check-ins by call and SMS, with hospital escalation when recovery answers need attention.",
    introTitle: "A practical follow-up layer for the weeks after birth.",
    introBody:
      "Many postpartum concerns appear after a mother has already left the facility. Omaya gives hospitals a simple way to keep listening without asking every mother to install an app or travel back for every question.",
    highlights: [
      "Check-ins can ask about pain, bleeding, mood, sleep, feeding, medication, and warning signs.",
      "Stable updates are recorded so teams can review recovery over time.",
      "Concerning answers are surfaced with context for the hospital team.",
    ],
    sections: [
      {
        eyebrow: "For mothers",
        title: "Support that meets her at home.",
        body: "Omaya is designed for everyday phones, so postpartum support can continue through regular calls and SMS.",
        items: [
          "No smartphone or app download required.",
          "Plain-language prompts about common recovery changes.",
          "A clearer route back to care when something does not feel right.",
        ],
      },
      {
        eyebrow: "For hospitals",
        title: "A queue instead of a manual call list.",
        body: "Maternity teams can focus attention on the few mothers whose answers suggest follow-up may be needed.",
        items: [
          "Enroll a mother before discharge.",
          "Review check-in summaries and escalation context.",
          "Keep clinical decisions with the hospital team.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is postpartum care in Ghana?",
        answer:
          "Postpartum care is the support a mother receives after birth, including recovery guidance, follow-up, and a pathway back to care when symptoms or concerns appear after discharge.",
      },
      {
        question: "How does Omaya support postpartum care?",
        answer:
          "Omaya checks in with mothers by phone call and SMS, records recovery updates, and alerts the hospital team when answers suggest a mother may need attention.",
      },
      {
        question: "Does Omaya replace hospital care?",
        answer:
          "No. Omaya is a follow-up and escalation service. Care decisions remain with qualified clinical teams.",
      },
    ],
    faqHeading: "Questions about postpartum care in Ghana.",
    service: {
      name: "Postpartum care follow-up in Ghana",
      serviceType: "Postpartum care follow-up",
      audience: ["Postpartum mothers", "Maternity teams in Ghana"],
    },
    related: [
      {
        href: "/for-mothers",
        label: "For mothers",
        description: "How call and SMS support works for postpartum mothers.",
      },
      {
        href: "/for-hospitals",
        label: "For hospitals",
        description: "How hospitals can use Omaya after discharge.",
      },
      {
        href: "/maternal-health-ghana",
        label: "Maternal health in Ghana",
        description: "Why continuity matters after delivery.",
      },
    ],
  },
  maternalHealthGhana: {
    path: "/maternal-health-ghana",
    label: "Maternal health Ghana",
    metadataTitle: "Maternal Health in Ghana | Omaya",
    description:
      "Omaya supports maternal health in Ghana by helping maternity teams follow mothers after discharge with simple check-ins and escalation pathways.",
    keywords: [
      "maternal health Ghana",
      "maternal care Ghana",
      "maternity care Ghana",
      "maternal continuity of care Ghana",
      "digital maternal health Ghana",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.88,
    heroEyebrow: "Maternal health Ghana",
    heroTitle: "Maternal health needs continuity beyond the ward.",
    heroBody:
      "Omaya helps maternity teams in Ghana continue the care conversation after discharge through simple check-ins and clear escalation paths.",
    introTitle: "A Ghana-focused maternal health follow-up service.",
    introBody:
      "Omaya is built around the gap between hospital discharge and everyday recovery at home. It gives mothers an easy channel for check-ins and gives hospitals a clearer view of who may need follow-up.",
    highlights: [
      "Designed around postpartum recovery and after-discharge continuity.",
      "Works through calls and SMS to reduce access barriers.",
      "Supports pilots with hospitals, clinics, and maternal health partners.",
    ],
    sections: [
      {
        eyebrow: "Continuity",
        title: "Keep maternal health visible after discharge.",
        body: "After birth, a mother's condition can change quickly. Omaya creates a lightweight care loop between the mother and the team that discharged her.",
        items: [
          "Schedule follow-up touchpoints after enrollment.",
          "Capture changes in recovery, mood, feeding, medication, and warning signs.",
          "Escalate concerning answers with the context teams need.",
        ],
      },
      {
        eyebrow: "Access",
        title: "Use channels mothers already have.",
        body: "The service is built for phone calls and SMS, which helps teams reach mothers without assuming smartphone access or app adoption.",
        items: [
          "No app download required.",
          "Supports mother-facing reminders and check-ins.",
          "Keeps the clinical team in control of next steps.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does Omaya fit into maternal health in Ghana?",
        answer:
          "Omaya focuses on the period after delivery, helping hospitals and maternity teams continue structured follow-up once a mother has gone home.",
      },
      {
        question: "Who can use Omaya?",
        answer:
          "Omaya is currently positioned for focused pilots with hospitals, clinics, and maternal health partners in Ghana.",
      },
      {
        question: "Is Omaya a medical advice service?",
        answer:
          "No. Omaya supports check-ins, reminders, and escalation. Medical advice and care decisions remain with qualified health professionals.",
      },
    ],
    faqHeading: "Questions about maternal health in Ghana.",
    service: {
      name: "Maternal health follow-up in Ghana",
      serviceType: "Maternal health continuity service",
      audience: ["Hospitals", "Maternity teams", "Postpartum mothers"],
    },
    related: [
      {
        href: "/postpartum-care-ghana",
        label: "Postpartum care in Ghana",
        description: "A closer look at Omaya's postpartum follow-up model.",
      },
      {
        href: "/for-hospitals",
        label: "For hospitals",
        description: "How maternity teams can start a focused pilot.",
      },
      {
        href: "/about",
        label: "About Omaya",
        description: "Who Omaya is and why it exists.",
      },
    ],
  },
  forHospitals: {
    path: "/for-hospitals",
    label: "For hospitals",
    metadataTitle: "Hospital Postpartum Follow-Up | Omaya",
    description:
      "Omaya helps hospitals in Ghana replace manual postpartum call lists with enrollment, SMS and call check-ins, triage, and escalation context.",
    keywords: [
      "hospital postpartum follow-up",
      "maternity discharge workflow Ghana",
      "postpartum escalation",
      "maternal health hospital Ghana",
      "clinical escalation maternal care",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.86,
    heroEyebrow: "For hospitals",
    heroTitle: "A postpartum follow-up workflow your team can pilot.",
    heroBody:
      "Omaya helps hospitals and maternity teams in Ghana enroll mothers at discharge, run call and SMS check-ins, and review escalations with context.",
    introTitle: "Reduce blind spots without adding a heavy app workflow.",
    introBody:
      "Omaya is designed as a focused layer around discharge. It helps teams move from scattered manual follow-up to a triaged queue of mothers who may need attention.",
    highlights: [
      "Enroll mothers at discharge with delivery notes and language preferences.",
      "Run structured check-ins after the mother returns home.",
      "Review stable updates and prioritized escalation signals.",
    ],
    sections: [
      {
        eyebrow: "Pilot setup",
        title: "Start with a first cohort.",
        body: "A pilot can begin with one facility, one team, and a defined group of mothers so the workflow is easy to review.",
        items: [
          "Map the current discharge and follow-up process.",
          "Enroll a first cohort before mothers leave the facility.",
          "Review alerts, response time, and feedback with the team.",
        ],
      },
      {
        eyebrow: "Team workflow",
        title: "Keep clinical escalation clear.",
        body: "Omaya does not replace clinical judgment. It organizes mother-reported updates so qualified teams can decide what happens next.",
        items: [
          "Separate stable updates from concerns that need attention.",
          "Keep an audit trail for each enrolled mother.",
          "Use phone and SMS so follow-up works across more households.",
        ],
      },
    ],
    faqs: [
      {
        question: "How can a hospital start with Omaya?",
        answer:
          "A hospital can begin with a focused pilot: map the discharge workflow, enroll a small cohort, then review escalations, response time, and patient feedback.",
      },
      {
        question: "Does Omaya require mothers to install an app?",
        answer:
          "No. Omaya reaches mothers through regular phone calls and SMS.",
      },
      {
        question: "Who handles clinical decisions?",
        answer:
          "The hospital or maternity team's qualified clinicians remain responsible for medical decisions and follow-up care.",
      },
    ],
    faqHeading: "Questions about hospital postpartum follow-up.",
    service: {
      name: "Hospital postpartum follow-up workflow",
      serviceType: "Maternal health discharge follow-up",
      audience: ["Hospitals", "Clinics", "Maternity teams"],
    },
    related: [
      {
        href: "/postpartum-care-ghana",
        label: "Postpartum care in Ghana",
        description: "The mother-facing need behind the workflow.",
      },
      {
        href: "/maternal-health-ghana",
        label: "Maternal health in Ghana",
        description: "The broader continuity-of-care context.",
      },
      {
        href: "/#contact",
        label: "Request a pilot",
        description: "Start a conversation with the Omaya team.",
      },
    ],
  },
  forMothers: {
    path: "/for-mothers",
    label: "For mothers",
    metadataTitle: "Postpartum Support for Mothers in Ghana | Omaya",
    description:
      "Omaya gives mothers in Ghana simple postpartum check-ins by call and SMS, reminders, and a route back to care when recovery changes.",
    keywords: [
      "postpartum support Ghana",
      "postpartum mothers Ghana",
      "postnatal support Ghana",
      "after birth check-ins",
      "SMS postpartum support",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.84,
    heroEyebrow: "For mothers",
    heroTitle: "Simple postpartum check-ins after you go home.",
    heroBody:
      "Omaya supports mothers in Ghana with phone and SMS check-ins after birth, helping surface recovery changes that may need a hospital team's attention.",
    introTitle: "No app. No complicated portal. Just follow-up.",
    introBody:
      "Omaya is made for the period after discharge, when questions about recovery, feeding, mood, medication, and warning signs can come up at home.",
    highlights: [
      "Works on any phone that can receive calls or SMS.",
      "Asks simple questions about how recovery is changing.",
      "Creates a clearer pathway back to care when help may be needed.",
    ],
    sections: [
      {
        eyebrow: "How it feels",
        title: "A check-in that follows your recovery.",
        body: "Omaya prompts can help mothers notice changes and share updates without needing to travel for every question.",
        items: [
          "Receive scheduled check-ins after discharge.",
          "Share changes in pain, bleeding, mood, sleep, feeding, or medication.",
          "Get routed back to the care team when answers need attention.",
        ],
      },
      {
        eyebrow: "What to know",
        title: "Omaya works alongside your hospital team.",
        body: "The service is not a replacement for urgent care or professional medical advice. It helps create a follow-up pathway with qualified care teams.",
        items: [
          "Emergency symptoms should be handled through urgent care channels.",
          "Clinical decisions remain with trained health professionals.",
          "Early access is currently focused on Ghana pilots.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can mothers use Omaya without a smartphone?",
        answer:
          "Yes. Omaya is designed around regular phone calls and SMS, so a smartphone or app download is not required.",
      },
      {
        question: "What kinds of questions can Omaya ask?",
        answer:
          "Check-ins can ask about recovery changes such as pain, bleeding, mood, sleep, feeding, medication, and warning signs.",
      },
      {
        question: "Is Omaya available to every mother in Ghana now?",
        answer:
          "Omaya is currently focused on pilots and early access conversations in Ghana.",
      },
    ],
    faqHeading: "Questions about postpartum support for mothers.",
    service: {
      name: "Postpartum support for mothers in Ghana",
      serviceType: "Postpartum check-in service",
      audience: ["Postpartum mothers", "Families"],
    },
    related: [
      {
        href: "/postpartum-care-ghana",
        label: "Postpartum care in Ghana",
        description: "Learn more about postpartum follow-up after discharge.",
      },
      {
        href: "/maternal-health-ghana",
        label: "Maternal health in Ghana",
        description: "How Omaya fits the broader maternal health journey.",
      },
      {
        href: "/#contact",
        label: "Join waitlist",
        description: "Share your interest in early access.",
      },
    ],
  },
  about: {
    path: "/about",
    label: "About Omaya",
    metadataTitle: "About Omaya | Postpartum Care in Ghana",
    description:
      "Omaya is a Ghana-focused postpartum care and maternal health follow-up service, also known as Omaya Care, for hospitals and mothers.",
    keywords: [
      "Omaya",
      "Omaya Care",
      "about Omaya",
      "postpartum care service Ghana",
      "maternal health startup Ghana",
    ],
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.82,
    heroEyebrow: "About Omaya",
    heroTitle: "Omaya is maternal continuity for the days after discharge.",
    heroBody:
      "Omaya, also known as Omaya Care, is a Ghana-focused postpartum care and maternal health follow-up service for hospitals and mothers.",
    introTitle: "A clearer identity for search, partners, and families.",
    introBody:
      "Omaya exists to help maternity teams keep mothers visible after they leave the hospital. The service uses calls, SMS, and escalation workflows so follow-up can work on everyday phones.",
    highlights: [
      "Public brand: Omaya.",
      "Alternate name: Omaya Care.",
      "Focus: postpartum care, maternal health, and after-discharge follow-up in Ghana.",
    ],
    sections: [
      {
        eyebrow: "Purpose",
        title: "Help hospitals and mothers stay connected.",
        body: "The care gap after discharge can be difficult for both families and clinical teams. Omaya gives that period a practical follow-up workflow.",
        items: [
          "Hospitals get a triaged view of mother-reported updates.",
          "Mothers get simple check-ins and reminders.",
          "Partners get a focused pilot model that can be reviewed with evidence.",
        ],
      },
      {
        eyebrow: "Service model",
        title: "Human-led, phone-first, Ghana-focused.",
        body: "Omaya is not a generic wellness app. It is a phone-first maternal health follow-up service built for pilots with Ghanaian maternity teams.",
        items: [
          "Calls and SMS reduce dependence on smartphone adoption.",
          "Escalation keeps qualified teams in control of care decisions.",
          "Content and workflows stay focused on postpartum recovery.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the brand Omaya or Omaya Care?",
        answer:
          "The public brand is Omaya. Omaya Care is used as an alternate name to help people and search engines understand the healthcare focus.",
      },
      {
        question: "Where does Omaya operate?",
        answer:
          "Omaya is focused on Ghana and is currently positioned for pilots with maternity teams and maternal health partners.",
      },
      {
        question: "What problem does Omaya solve?",
        answer:
          "Omaya helps hospitals follow up with mothers after discharge and helps mothers share recovery updates through simple calls and SMS.",
      },
    ],
    faqHeading: "Questions about Omaya.",
    service: {
      name: "Omaya maternal health follow-up",
      serviceType: "Postpartum care and maternal health follow-up",
      audience: ["Hospitals", "Maternity teams", "Postpartum mothers"],
    },
    related: [
      {
        href: "/for-hospitals",
        label: "For hospitals",
        description: "How Omaya fits maternity team workflows.",
      },
      {
        href: "/for-mothers",
        label: "For mothers",
        description: "How mothers can receive simple follow-up.",
      },
      {
        href: "/postpartum-care-ghana",
        label: "Postpartum care in Ghana",
        description: "The core service area Omaya supports.",
      },
    ],
  },
} satisfies Record<string, SeoPage>;

export const INDEXABLE_PAGES = [
  SEO_PAGES.home,
  SEO_PAGES.postpartumCareGhana,
  SEO_PAGES.maternalHealthGhana,
  SEO_PAGES.forHospitals,
  SEO_PAGES.forMothers,
  SEO_PAGES.about,
];

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata(page: SeoPage): Metadata {
  return {
    title: {
      absolute: page.metadataTitle,
    },
    description: page.description,
    applicationName: SITE_NAME,
    keywords: [...BASE_KEYWORDS, ...page.keywords],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GH",
      url: page.path,
      title: page.metadataTitle,
      description: page.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadataTitle,
      description: page.description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
