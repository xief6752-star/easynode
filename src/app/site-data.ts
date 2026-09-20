export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com";
export const DATA_UPDATED_AT = "2026-09-20";
export const DATA_UPDATED_LABEL = "2026.09.20";

export const AIRPORT_SLUGS = [
  "yuntu",
  "shunyun",
  "huanyuyun",
  "jindouyun",
  "jiuyun",
  "baoyun",
  "speedworld",
  "jilianyun",
  "miaomiaoyun",
  "shanshuiyun",
  "jinyun",
  "liyun",
  "xiongmaocloud",
] as const;

export const WIKI_SLUGS = [
  "what-is-airport-vpn",
  "iepl-iplc-dedicated-line",
  "latency-and-jitter",
  "vpn-test-methodology",
  "peak-hour-testing",
  "streaming-unlock-testing",
  "monthly-vs-yearly-plan",
  "traffic-multiplier-rules",
  "client-selection-guide",
  "bgp-vs-cn2-gia",
  "airport-security-risks",
] as const;

export const ARTICLE_SLUGS = [
  "how-we-test-vpn",
  "isp-comparison",
  "peak-hour-vpn",
] as const;
