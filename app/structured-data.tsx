import {
  OMAYA_EMAIL,
  OMAYA_PHONE_TEL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./components";
import { FAQS } from "./faq-data";

/**
 * JSON-LD structured data emitted in a single @graph so Google can build
 * rich results and LLMs/answer engines have a machine-readable description
 * of what Omaya is, who it serves, and answers to common questions.
 */
export function StructuredData() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const graph = [
    {
      "@type": ["Organization", "MedicalBusiness"],
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      logo: `${SITE_URL}/assets/logo.svg`,
      image: `${SITE_URL}/assets/call_by_window-omaya.png`,
      email: OMAYA_EMAIL,
      telephone: OMAYA_PHONE_TEL,
      areaServed: { "@type": "Country", name: "Ghana" },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: OMAYA_EMAIL,
        telephone: OMAYA_PHONE_TEL,
        areaServed: "GH",
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      name: "Omaya postpartum follow-up",
      serviceType: "Postpartum maternal care follow-up",
      url: SITE_URL,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Ghana" },
      description:
        "After-discharge follow-up for mothers by phone call and SMS, with clinical escalation to hospital teams. Enroll at discharge, check in by call and SMS, and escalate the few who need care.",
      audience: [
        { "@type": "Audience", audienceType: "Hospitals and maternity teams" },
        { "@type": "Audience", audienceType: "Postpartum mothers" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered static data; safe to stringify directly.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
