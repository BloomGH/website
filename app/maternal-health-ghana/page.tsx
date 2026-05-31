import { SeoLandingPage } from "../seo-page";
import { createPageMetadata, SEO_PAGES } from "../seo";

const page = SEO_PAGES.maternalHealthGhana;

export const metadata = createPageMetadata(page);

export default function MaternalHealthGhanaPage() {
  return <SeoLandingPage page={page} />;
}
