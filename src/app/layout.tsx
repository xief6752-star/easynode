import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com"),
  title: {
    default: "机场 VPN 测试与推荐 | 简单节点",
    template: "%s | 简单节点",
  },
  description: "简单节点是独立的机场 VPN 测试与推荐平台，持续记录线路延迟、抖动、下载速度、上传速度、连接成功率、晚高峰表现和 7 天稳定性趋势。我们每天在固定地区运行多轮公开测试，每周发布基于真实数据的机场评测、综合排名、性价比分析和风险提示，帮助用户了解长期表现与适用场景，所有数据仅供比较参考。",
  keywords: ["机场推荐", "机场 VPN", "机场测评", "VPN 测速", "机场排名", "线路稳定性", "晚高峰测速"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "简单节点",
    title: "机场 VPN 测试与推荐 | 简单节点",
    description: "简单节点是独立的机场 VPN 测试与推荐平台，持续记录线路延迟、抖动、下载速度、上传速度、连接成功率、晚高峰表现和 7 天稳定性趋势。我们每天在固定地区运行多轮公开测试，每周发布基于真实数据的机场评测、综合排名、性价比分析和风险提示，帮助用户了解长期表现与适用场景，所有数据仅供比较参考。",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "机场 VPN 测试与推荐 | 简单节点",
    description: "简单节点每日发布机场 VPN 状态与线路测速，覆盖延迟、速度、连接成功率、晚高峰表现和长期稳定性。每周推荐一个经过重复测试的服务，并公开测试时间、地区、评分方法、适用场景与潜在限制，帮助用户更理性地比较机场服务，不承诺所有用户体验一致，结果会随时间和网络环境变化，请以公开实测为准。",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "简单节点",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com",
          description: "机场 VPN 测试与推荐平台，每日测试线路质量，每周发布独立评测。",
          inLanguage: "zh-CN",
          publisher: { "@type": "Organization", name: "简单节点" },
        }) }} />
      </body>
    </html>
  );
}
