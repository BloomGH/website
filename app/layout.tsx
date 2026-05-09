import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom — Care that follows her home",
  description:
    "AI-assisted maternal continuity for private maternity hospitals in Ghana. Bridge the gap between discharge and the 6-week checkup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
