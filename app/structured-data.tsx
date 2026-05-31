import {
  OMAYA_EMAIL,
  OMAYA_PHONE_TEL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./components";
import { absoluteUrl, type SeoFaq, type SeoPage, SITE_ALTERNATE_NAME } from "./seo";

/**
 * Site-level JSON-LD emitted globally so search and answer engines can
 * distinguish Omaya from other brands with the same name.
 */
export function StructuredData() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const graph = [
    {
      "@type": ["Organization", "MedicalBusiness"],
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: [SITE_ALTERNATE_NAME],
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      slogan: "Postpartum care that follows mothers home",
      logo: `${SITE_URL}/assets/logo.svg`,
      image: `${SITE_URL}/assets/call_by_window-omaya.png`,
      email: OMAYA_EMAIL,
      telephone: OMAYA_PHONE_TEL,
      areaServed: { "@type": "Country", name: "Ghana" },
      knowsAbout: [
        "Postpartum care",
        "Maternal health in Ghana",
        "Postnatal care",
        "After-discharge follow-up",
        "Hospital maternal health escalation",
      ],
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
      alternateName: [SITE_ALTERNATE_NAME],
      description: SITE_DESCRIPTION,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ];

  return <JsonLd graph={graph} />;
}

export function PageStructuredData({
  page,
  faqs,
}: {
  page: SeoPage;
  faqs?: readonly SeoFaq[];
}) {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const pageUrl = absoluteUrl(page.path);
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;

  const breadcrumbItems =
    page.path === "/"
      ? [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
        ]
      : [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.label,
            item: pageUrl,
          },
        ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: page.metadataTitle,
      description: page.description,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      about: page.service ? { "@id": serviceId } : { "@id": organizationId },
      inLanguage: "en-GH",
      dateModified: page.lastModified,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (page.service) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: page.service.name,
      serviceType: page.service.serviceType,
      url: pageUrl,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Ghana" },
      description: page.description,
      audience: page.service.audience.map((audienceType) => ({
        "@type": "Audience",
        audienceType,
      })),
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return <JsonLd graph={graph} />;
}

function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered static data; safe to stringify directly.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
