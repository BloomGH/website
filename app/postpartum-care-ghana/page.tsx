import { SeoLandingPage } from "../seo-page";
import { createPageMetadata, SEO_PAGES } from "../seo";

const page = SEO_PAGES.postpartumCareGhana;

export const metadata = createPageMetadata(page);

export default function PostpartumCareGhanaPage() {
  return <SeoLandingPage page={page} />;
}
