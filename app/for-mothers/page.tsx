import { SeoLandingPage } from "../seo-page";
import { createPageMetadata, SEO_PAGES } from "../seo";

const page = SEO_PAGES.forMothers;

export const metadata = createPageMetadata(page);

export default function ForMothersPage() {
  return <SeoLandingPage page={page} />;
}
