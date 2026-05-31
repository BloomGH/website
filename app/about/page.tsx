import { SeoLandingPage } from "../seo-page";
import { createPageMetadata, SEO_PAGES } from "../seo";

const page = SEO_PAGES.about;

export const metadata = createPageMetadata(page);

export default function AboutPage() {
  return <SeoLandingPage page={page} />;
}
