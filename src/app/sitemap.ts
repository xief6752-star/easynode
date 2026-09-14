import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com";
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // 机场列表 - 用于生成动态sitemap条目
  const airports = [
    "yuntu", "shunyun", "huanyuyun", "jindouyun",
    "jiuyun", "baoyun", "speedworld", "jilianyun",
    "miaomiaoyun", "shanshuiyun", "jinyun", "liyun", "cailuyun"
  ];

  // Wiki文章列表
  const wikiArticles = [
    "what-is-airport-vpn", "iepl-iplc-dedicated-line", "latency-and-jitter",
    "vpn-test-methodology", "peak-hour-testing", "streaming-unlock-testing",
    "monthly-vs-yearly-plan"
  ];

  return [
    // 首页 - 最高优先级，每日更新
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // 核心推荐机场页面 - 高优先级
    ...airports.slice(0, 4).map((slug) => ({
      url: `${baseUrl}/airports/${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    })),

    // 其他机场页面
    ...airports.slice(4).map((slug) => ({
      url: `${baseUrl}/airports/${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.85,
    })),

    // 推荐归档页
    {
      url: `${baseUrl}/recommendations`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // Wiki 主页
    {
      url: `${baseUrl}/wiki`,
      lastModified: lastWeek,
      changeFrequency: "weekly",
      priority: 0.80,
    },

    // Wiki 文章页
    ...wikiArticles.map((slug) => ({
      url: `${baseUrl}/wiki/${slug}`,
      lastModified: lastWeek,
      changeFrequency: "monthly" as const,
      priority: 0.70,
    })),
  ];
}
