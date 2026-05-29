import type { MetadataRoute } from "next";
import { SITE_URL } from "./components";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
