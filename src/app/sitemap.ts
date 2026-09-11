import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const updatedAt = new Date();

  return [
    { url: baseUrl, lastModified: updatedAt, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/airports/yuntu`, lastModified: updatedAt, changeFrequency: "daily", priority: 0.9 },
    ...["shunyun", "huanyuyun", "jindouyun", "jiuyun"].map((slug) => ({ url: `${baseUrl}/airports/${slug}`, lastModified: updatedAt, changeFrequency: "daily" as const, priority: 0.8 })),
    { url: `${baseUrl}/articles`, lastModified: updatedAt, changeFrequency: "weekly", priority: 0.8 },
    ...["how-we-test-vpn", "isp-comparison", "peak-hour-vpn"].map((slug) => ({ url: `${baseUrl}/articles/${slug}`, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${baseUrl}/wiki`, lastModified: updatedAt, changeFrequency: "weekly", priority: 0.8 },
    ...["what-is-airport-vpn", "iepl-iplc-dedicated-line", "latency-and-jitter", "peak-hour-testing", "streaming-unlock-testing", "monthly-vs-yearly-plan"].map((slug) => ({ url: `${baseUrl}/wiki/${slug}`, lastModified: updatedAt, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
