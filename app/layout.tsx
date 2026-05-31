import type { Metadata, Viewport } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./site-nav";
import {
  SiteFooter,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "./components";
import { StructuredData } from "./structured-data";
import { OG_IMAGE } from "./seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Omaya",
    "Omaya Care",
    "postpartum care",
    "postpartum care Ghana",
    "postpartum Ghana",
    "postnatal care Ghana",
    "maternal health",
    "maternal health Ghana",
    "after-discharge follow-up",
    "postpartum recovery",
    "hospital patient check-ins",
    "clinical escalation",
    "SMS health check-ins",
    "maternal continuity of care",
    "maternal health startup Ghana",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GH",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  icons: {
    icon: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e2d42",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <StructuredData />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
