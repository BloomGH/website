import { SeoLandingPage } from "../seo-page";
import { createPageMetadata, SEO_PAGES } from "../seo";

const page = SEO_PAGES.forHospitals;

export const metadata = createPageMetadata(page);

export default function ForHospitalsPage() {
  return <SeoLandingPage page={page} />;
}
