import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const articleData = {
  "how-we-test-vpn": { category: "测速方法", title: "机场 VPN 怎么测才不容易被单次速度误导？", intro: "一次测速只能说明某个时间点的状态，不能直接代表一条线路的长期体验。", sections: [{ heading: "先固定测试条件", body: "测试时应记录地区、运营商、设备、协议、节点和时间段。只有条件尽量一致，多个服务之间的横向比较才有意义。" }, { heading: "至少覆盖白天与晚高峰", body: "白天速度好不等于晚高峰稳定。简单节点会把晚高峰作为独立样本，观察延迟上升、下载下降和连接失败是否集中出现。" }, { heading: "用趋势替代单次结论", body: "建议观察 7 天以上的成功率、平均延迟、抖动和速度变化。短期峰值可以作为参考，但不应直接成为推荐理由。" }] },
  "isp-comparison": { category: "运营商观察", title: "移动、联通、电信的机场线路表现有什么差异？", intro: "同一个节点在不同运营商下可能出现不同延迟和速度，运营商是机场测试中不能忽略的变量。", sections: [{ heading: "延迟看路径，不只看距离", body: "延迟受到本地接入、跨网互联和节点路径影响。地理位置相近的节点，也可能因为路由不同而产生明显差异。" }, { heading: "下载速度需要结合抖动", body: "下载峰值高并不代表体验稳定。抖动较大时，网页加载、视频缓冲和实时连接可能仍然不顺畅。" }, { heading: "最好按自己的运营商验证", body: "公开榜单适合初步筛选，最终选择应参考与你相同运营商、相近地区和相近时段的测试记录。" }] },
  "peak-hour-vpn": { category: "选购指南", title: "晚高峰选机场，应该重点看哪些数据？", intro: "晚高峰是观察线路拥堵和真实可用性的关键时间窗口。", sections: [{ heading: "看延迟增幅", body: "不要只看绝对延迟，还要比较白天和晚高峰的变化幅度。延迟突然升高，通常说明线路在高负载时更容易拥堵。" }, { heading: "看速度下降比例", body: "晚高峰下载速度下降比例比白天峰值更有参考价值。连续多天保持稳定，才更接近日常使用体验。" }, { heading: "看失败和重连记录", body: "连接失败、频繁断线和重连时间应单独记录。速度不错但经常掉线的线路，不应只凭峰值速度获得高评价。" }] },
  "specialist-vs-relay": { category: "线路对比", title: "IEPL/IPLC 专线机场和中转机场应该怎么选？", intro: "专线和中转是两条不同的技术路线，各有优劣。选择时应根据预算、延迟要求和高峰稳定性来判断。", sections: [{ heading: "什么是中转和专线？", body: "中转是指流量经过海外服务器进行中继，成本低但容易受公网拥堵影响。专线（IEPL/IPLC）则是服务商租赁的独占链路，拥堵情况相对独立，但成本更高。" }, { heading: "专线是否一定比中转快？", body: "专线通常在晚高峰表现更稳定，但日常速度不一定比中转快。实际对比需要看相同地区、相同运营商和相同时间的测试数据，而不是只凭线路名称判断。" }, { heading: "预算有限怎么选？", body: "月预算 ¥6-10 可以选平价中转或低端专线试用；¥10-15 可以尝试主流中专结合方案；¥15+ 可以考虑纯专线。建议先用月付小额验证 1-2 周，再决定是否长期使用。" }, { heading: "晚高峰哪个更稳定？", body: "从实测看，IPLC 专线在晚高峰的连接稳定性和延迟抖动通常更好。但这取决于服务商的带宽分配和超售比例，不能只根据线路类型承诺。应对比同一时间窗口的成功率和重连次数。" }] },
  "iepl-vs-iplc": { category: "线路对比", title: "IEPL 和 IPLC 专线有什么区别？哪个更好？", intro: "IEPL 和 IPLC 都是专线类型，但适用场景、成本和性能特征不同。对大多数用户来说，这两者的实际区别可能没有营销宣传的那么大。", sections: [{ heading: "IEPL 和 IPLC 分别是什么？", body: "IEPL（International Ethernet Private Line）是国际以太网专线，强调点对点的专享链路。IPLC（International Private Leased Circuit）是国际私租线路，通常特指电信级别的专线。两者都承诺流量隔离和QoS保障，但具体实现可能有差异。" }, { heading: "实际使用有明显区别吗？", body: "对普通用户来说，区别可能不大。关键指标是延迟、抖动、连接成功率和晚高峰稳定性，而不是线路的学名。广告中的 IEPL 和 IPLC 承诺需要用实测数据验证，不能无保留相信。" }, { heading: "应该优先选哪个？", body: "建议优先看价格和测试口碑，再看具体线路类型。如果两个机场的 IEPL 和 IPLC 价格接近，应对比 7-14 天的真实晚高峰数据，看连接成功率、延迟抖动和重连情况，而不是纠结缩写。" }, { heading: "怎样判断宣传是否真实？", body: "真实的 IEPL/IPLC 线路应该在测试报告中体现为：①连接成功率 > 99%，②晚高峰延迟抖动 < 20%，③连续 7 天无明显掉线。如果广告承诺专线但实测数据不支持，应保持怀疑。" }] },
  "budget-vs-premium": { category: "套餐对比", title: "¥6 平价机场和 ¥15 高端机场，差别到底在哪？", intro: "价格差异通常反映线路类型、节点数量和服务质量的区别。但这不代表便宜机场不能用，关键是了解限制条件。", sections: [{ heading: "价格差异来自哪些方面？", body: "¥6 左右的机场多数采用海外中转，节点数量有限，可能限制设备数或有流量倍率；¥15+ 通常使用 IPLC/IEPL 专线，节点覆盖更广，设备数和流量倍率也更宽松。但也有例外，部分平价机场的测试表现意外稳定。" }, { heading: "平价机场能不能用？", body: "平价机场适合轻度使用、备用线路或初期试用。如果用于看视频、文件同步或网页浏览，¥6 左右的机场通常足够。但如果需要长时间稳定连接、视频会议或高峰期使用，应选择更稳定的方案。" }, { heading: "高端机场是不是更稳定？", body: "高端机场通常在晚高峰表现和连接稳定性上更有保障，但也不是绝对稳定。关键看实测数据。有些 ¥12-14 的中端方案在实际使用中表现不亚于 ¥18+ 的机场。" }, { heading: "怎样选最适合的价位？", body: "建议按使用场景反推：日常浏览 ¥6-10；视频和下载 ¥10-15；持续稳定需求 ¥15+。购买前先按月付小额试用，确认实际表现是否符合预期，再考虑长期套餐。" }] },
  "peak-hour-stable": { category: "选购指南", title: "晚高峰最稳定的机场怎么选？看哪些指标？", intro: "晚高峰稳定性取决于线路拥堵、服务商的容量分配和网络优化水平。不是单一指标能决定的。", sections: [{ heading: "什么时间是真正的晚高峰？", body: "不同地区、不同运营商的高峰时间可能不同。常见窗口是当地时间 20:00-24:00，但建议看具体报告中标注的测试时间，不要用固定数字判断。" }, { heading: "看哪个指标最重要？", body: "对晚高峰稳定性来说，①连接成功率和重连次数最关键，②其次看延迟抖动，③再次看速度下降比例。单次最高速度反而不重要，因为高峰期需要的是持续可用，而不是短时峰值。" }, { heading: "怎样对比不同机场的晚高峰数据？", body: "使用相同的测试地区、运营商、时间窗口和测试工具。对比 7-14 天的连续记录，看平均成功率、失败分布是否集中在特定时段、重连时间长度。避免拿某一天的数据单独比较。" }, { heading: "好的晚高峰表现是什么样的？", body: "连接成功率 > 99%，平均延迟不突然增加超过 20ms，速度下降幅度 < 50%，每小时失败次数 < 3 次。但标准不是固定的，应根据自己的网络环境调整容忍度。" }] },
  "client-comparison": { category: "工具选择", title: "Clash、Shadowrocket、sing-box 客户端怎样选最合适？", intro: "不同客户端在平台支持、协议兼容性和易用性上差异很大。选择时应结合你的设备和使用习惯。", sections: [{ heading: "Windows 用户应该选哪个？", body: "Clash Verge（推荐，功能完整）、v2rayN（传统稳定）或 sing-box GUI（新兴但可能不稳定）。Clash for Windows 已停更，不建议使用。优先考虑能读取机场订阅、支持规则分流和有活跃社区的工具。" }, { heading: "Mac 用户有什么选择？", body: "ClashX Pro（稳定、功能完整）或 sing-box GUI 测试版。ClashX 免费版功能已足够日常使用，Pro 版添加了增强功能但不是必需。避免使用长期未更新的版本。" }, { heading: "iOS 系统怎么选？", body: "付费选项：Shadowrocket（简洁）或 Quantumult X（功能强）。免费选项有限，某些区域 App Store 不可用。建议用相同机场的订阅在多个客户端测试，选择最稳定的组合。" }, { heading: "Android 用户呢？", body: "Clash for Android（简洁稳定）、Sing-box（新生代）或 v2ray（传统）。避免下载来源不明的客户端。优先使用机场官方推荐的版本，和其他用户反馈多的工具。" }, { heading: "怎样避免客户端不兼容？", body: "购买机场前，先确认是否提供你常用客户端的订阅格式（Clash、sing-box、通用 URI 等）。不要强行把一种格式导入不兼容的客户端。如果机场只提供单一格式，可尝试在线转换工具，但要谨慎第三方安全性。" }] },
} as const;

const wikiByArticle = { "how-we-test-vpn": "vpn-test-methodology", "isp-comparison": "latency-and-jitter", "peak-hour-vpn": "peak-hour-testing", "specialist-vs-relay": "iepl-iplc-dedicated-line", "iepl-vs-iplc": "bgp-vs-cn2-gia", "budget-vs-premium": "monthly-vs-yearly-plan", "peak-hour-stable": "peak-hour-testing", "client-comparison": "client-selection-guide" } as const;

export function generateStaticParams() { return Object.keys(articleData).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleData[slug as keyof typeof articleData];
  if (!article) return {};
  return {
    title: article.title,
    description: `${article.intro}${article.sections.map((section) => section.body).join("")}`,
    alternates: { canonical: `/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}` },
    robots: { index: false, follow: true },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleData[slug as keyof typeof articleData];
  if (!article) notFound();
  return <main className="article-detail-shell"><nav className="topbar article-topbar"><Link className="brand" href="/"><span className="brand-mark">/</span> 简单节点</Link><Link className="back-link" href={`/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}`}>查看百科词条 <span>↗</span></Link></nav><article className="article-detail"><p className="eyebrow">{article.category} / 已归档至机场百科</p><h1>{article.title}</h1><p className="article-intro">该测试文章内容已合并到机场百科，以下保留原文供历史链接访问。</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-source"><strong>查看新版词条</strong><p><Link href={`/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}`}>前往机场百科查看完整、持续更新的内容 →</Link></p></div></article><footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。</span><span>© 2026 简单节点</span></footer></main>;
}
