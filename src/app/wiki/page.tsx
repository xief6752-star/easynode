import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "机场 VPN 百科知识与选购指南 - 线路、测速、套餐全解析",
  description: "简单节点机场百科，解释机场 VPN、IEPL/IPLC 专线、中转线路、延迟、抖动、晚高峰测速、流媒体解锁和套餐选择等常见问题。从基础概念到测试方法，帮助你读懂机场测评数据。",
  keywords: ["机场百科", "VPN知识", "IEPL专线", "IPLC专线", "延迟", "抖动", "晚高峰测速", "流媒体解锁", "机场套餐", "中转线路", "测速方法"],
  alternates: {
    canonical: "/wiki",
    languages: {
      "zh-CN": "/wiki",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "机场 VPN 百科知识与选购指南 - 线路、测速、套餐全解析 | 简单节点",
    description: "读懂机场 VPN 测速指标、线路类型和套餐选择。从 IEPL/IPLC 专线到延迟抖动，全面解析机场选购要点。",
    url: "/wiki",
    type: "website",
    siteName: "简单节点",
    locale: "zh_CN",
    images: [
      {
        url: "/og-wiki.png",
        width: 1200,
        height: 630,
        alt: "机场VPN百科 - 简单节点",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "机场 VPN 百科知识与选购指南",
    description: "从线路类型到测速指标，帮你读懂机场 VPN 的核心概念。",
    images: ["/og-wiki.png"],
  },
};

const entries = [
  { slug: "what-is-airport-vpn", category: "基础概念", title: "机场 VPN 是什么？机场、节点和订阅有什么区别？", excerpt: "理解机场服务、节点线路、订阅链接和客户端之间的关系，先建立正确的基础概念。", date: "2026.09.12" },
  { slug: "iepl-iplc-dedicated-line", category: "线路类型", title: "IEPL 和 IPLC 专线是什么？和普通中转有什么区别？", excerpt: "从线路路径、晚高峰拥堵、价格和适用场景，解释 IEPL/IPLC 专线与普通中转的差异。", date: "2026.09.12" },
  { slug: "latency-and-jitter", category: "测速指标", title: "延迟和抖动怎么看？多少 ms 才算流畅？", excerpt: "延迟、抖动分别代表什么，为什么视频会议和游戏比网页浏览更依赖稳定的低抖动线路。", date: "2026.09.12" },
  { slug: "vpn-test-methodology", category: "测试方法", title: "机场 VPN 怎么测才不容易被单次速度误导？", excerpt: "固定地区、运营商、设备、协议和时间，用连续样本而不是单次峰值建立更可靠的结论。", date: "2026.09.13" },
  { slug: "peak-hour-testing", category: "测试方法", title: "为什么要看晚高峰测速？白天速度快有用吗？", excerpt: "晚高峰是观察线路拥堵的关键时间，了解速度下降比例、延迟变化和断线记录的意义。", date: "2026.09.13" },
  { slug: "streaming-unlock-testing", category: "使用场景", title: "机场的流媒体解锁测试应该怎么看？", excerpt: "Netflix、Disney+、YouTube 和 AI 服务的解锁结果如何记录，解锁成功为什么不等于线路稳定。", date: "2026.09.13" },
  { slug: "monthly-vs-yearly-plan", category: "套餐选择", title: "机场套餐选月付还是年付？如何降低跑路风险？", excerpt: "比较月付、季付和年付的价格与风险，整理购买前应检查的退款、流量和运营信息。", date: "2026.09.14" },
];

export default function WikiPage() {
  return <main className="article-shell"><nav className="topbar article-topbar"><a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a><a className="back-link" href="/">返回首页 <span>↗</span></a></nav><header className="article-header wiki-header"><p className="eyebrow">THE FIELD GUIDE</p><h1>机场百科，<br /><em>先把概念弄懂。</em></h1><p>从线路、测速到套餐选择，整理机场 VPN 使用中最容易混淆的概念。每个词条都尽量给出定义、判断方法和适用场景。</p></header><section className="wiki-grid">{entries.map((entry, index) => <a className="wiki-card" href={`/wiki/${entry.slug}`} key={entry.slug}><span className="article-number">{String(index + 1).padStart(2, "0")}</span><span className="wiki-category">{entry.category}</span><h2>{entry.title}</h2><p>{entry.excerpt}</p><span className="wiki-date">{entry.date}</span><span className="wiki-read">阅读词条 ↗</span></a>)}</section><section className="article-note"><p className="eyebrow">READ WITH TEST DATA</p><h2>概念是起点，<br />实测才是结论。</h2><p>百科内容用于帮助理解测试指标，具体机场表现仍应结合地区、运营商、节点和测试时间判断。</p></section><footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供比较参考。</span><span>© 2026 简单节点</span></footer></main>;
}
