import type { MetadataRoute } from "next";
import {
  AIRPORT_SLUGS,
  DATA_UPDATED_AT,
  SITE_URL,
  WIKI_SLUGS,
} from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date(`${DATA_UPDATED_AT}T00:00:00+08:00`);

  return [
    {
      url: SITE_URL,
      lastModified: updatedAt,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...AIRPORT_SLUGS.map((slug, index) => ({
      url: `${SITE_URL}/airports/${slug}`,
      lastModified: updatedAt,
      changeFrequency: "daily" as const,
      priority: index < 4 ? 0.95 : 0.85,
    })),
    {
      url: `${SITE_URL}/recommendations`,
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/wiki`,
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 0.80,
    },
    ...WIKI_SLUGS.map((slug) => ({
      url: `${SITE_URL}/wiki/${slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.70,
    })),
  ];
}
