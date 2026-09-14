import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com"),
  title: {
    default: "机场推荐与机场测评 | 机场测速、梯子推荐、魔法推荐、VPN | 简单节点",
    template: "%s | 简单节点",
  },
  description: "简单节点专注机场推荐、机场测评和机场测速，持续记录 VPN 线路延迟、抖动、下载速度、连接成功率与晚高峰表现，并提供梯子推荐、魔法推荐和机场排名参考。我们每天在固定地区运行多轮测试，每周更新机场评测与风险提示，帮助用户比较不同节点的稳定性、速度、线路类型和套餐条件，所有数据均标注测试时间与方法，仅供参考。",
  keywords: ["机场推荐", "机场测评", "机场测速", "梯子推荐", "魔法推荐", "VPN", "机场 VPN", "VPN 测速", "机场排名", "线路稳定性", "晚高峰测速", "IPLC", "IEPL", "专线机场", "中转机场", "云图", "瞬云", "寰宇云", "筋斗云"],
  verification: {
    other: {
      "msvalidate.01": "2543451F9B524E9C88E3D644CF47F577",
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "简单节点",
    title: "机场推荐与机场测评 | 机场测速、梯子推荐、魔法推荐、VPN | 简单节点",
    description: "简单节点专注机场推荐、机场测评和机场测速，持续记录 VPN 线路延迟、抖动、下载速度、连接成功率与晚高峰表现，并提供梯子推荐、魔法推荐和机场排名参考。",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "简单节点 - 机场推荐与测评平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "机场推荐与机场测评 | 机场测速、梯子推荐、魔法推荐、VPN | 简单节点",
    description: "简单节点每日发布机场测速和机场 VPN 状态，覆盖延迟、速度、连接成功率、晚高峰表现和长期稳定性；同时整理机场推荐、机场测评、梯子推荐与魔法推荐内容。",
    images: ["/og-image.png"],
  },
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jiandanjiedian.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "简单节点",
        description: "机场推荐、机场测评与机场测速平台，每日测试 VPN 线路质量，并提供梯子推荐和魔法推荐参考。",
        inLanguage: "zh-CN",
        publisher: {
          "@id": `${siteUrl}/#organization`
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "简单节点",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 512,
          height: 512
        },
        sameAs: []
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "机场推荐与机场测评 | 机场测速、梯子推荐、魔法推荐、VPN | 简单节点",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#organization`
        },
        description: "简单节点专注机场推荐、机场测评和机场测速，持续记录 VPN 线路延迟、抖动、下载速度、连接成功率与晚高峰表现。",
        inLanguage: "zh-CN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首页",
            item: siteUrl
          }
        ]
      }
    ]
  };

  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="CN" />
        <meta name="geo.placename" content="China" />
        <meta name="geo.position" content="35.0;105.0" />
        <meta name="ICBM" content="35.0, 105.0" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" hrefLang="zh-CN" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
