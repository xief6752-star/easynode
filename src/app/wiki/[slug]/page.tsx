import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/json-ld";
import { DATA_UPDATED_AT, SITE_URL } from "../../site-data";

const wiki = {
  "what-is-airport-vpn": { category: "基础概念", title: "机场 VPN 是什么？机场、节点和订阅有什么区别？", intro: "机场通常指提供代理节点订阅服务的平台，用户通过客户端导入订阅后，可以选择不同地区的线路进行连接。", date: "2026.09.12", sections: [{ h: "机场是什么？", p: "机场是对代理节点订阅服务的俗称。它通常提供多个地区的节点、流量套餐、订阅地址和使用说明，用户再通过 Clash、Shadowrocket、sing-box 等客户端连接。" }, { h: "节点和线路有什么区别？", p: "节点是客户端里可以选择的具体入口，线路则描述数据经过的网络路径。同一机场可能同时提供普通中转、专线和不同地区的节点。" }, { h: "订阅链接是什么？", p: "订阅链接通常包含节点配置，客户端可以通过它获取或更新节点列表。订阅链接属于敏感信息，不应公开分享，也不应放入公开测速数据。" }] },
  "iepl-iplc-dedicated-line": { category: "线路类型", title: "IEPL 和 IPLC 专线是什么？和普通中转有什么区别？", intro: "IEPL 和 IPLC 常被用于描述跨境专线类型，通常强调更稳定的网络路径和更好的高峰期表现。", date: "2026.09.12", sections: [{ h: "专线通常解决什么问题？", p: "专线的核心价值通常是减少公共网络路径上的拥堵和波动，但实际效果取决于入口、出口、地区、运营商和服务商容量。" }, { h: "专线一定更快吗？", p: "不一定。专线可能带来更低的抖动和更稳定的高峰体验，但最终仍需看同一时间、同一地区下的实测数据，不能只根据线路名称判断。" }, { h: "普通中转适合谁？", p: "普通中转价格通常更低，适合网页浏览、轻量视频和备用线路。对稳定性要求较高的用户，可以把专线和中转组合比较。" }] },
  "latency-and-jitter": { category: "测速指标", title: "延迟和抖动怎么看？多少 ms 才算流畅？", intro: "延迟反映数据往返所需时间，抖动反映延迟变化幅度。两个指标都不能脱离使用场景单独判断。", date: "2026.09.12", sections: [{ h: "延迟是什么？", p: "延迟通常以 ms 表示，数值越低，交互响应越快。网页浏览对延迟有一定容忍度，实时语音、视频会议和游戏会更依赖低延迟。" }, { h: "抖动为什么重要？", p: "抖动较大时，连接响应会忽快忽慢，可能导致语音断续、画面卡顿或实时操作不稳定。观察平均值之外，也应关注高峰时段的波动。" }, { h: "如何比较？", p: "建议在相同地区、运营商、节点和时间段测试，记录平均延迟、最大延迟、抖动和失败次数，而不是只截取一次 ping 结果。" }] },
  "vpn-test-methodology": { category: "测试方法", title: "机场 VPN 怎么测才不容易被单次速度误导？", intro: "一次测速只能说明某个时间点的状态，不能直接代表一条线路的长期体验。", date: "2026.09.13", sections: [{ h: "先固定测试条件", p: "测试时应记录地区、运营商、设备、协议、节点和时间段。只有条件尽量一致，多个服务之间的横向比较才有意义。" }, { h: "至少覆盖白天与晚高峰", p: "白天速度好不等于晚高峰稳定。应把晚高峰作为独立样本，观察延迟上升、下载下降和连接失败是否集中出现。" }, { h: "用趋势替代单次结论", p: "建议观察 7 天以上的成功率、平均延迟、抖动和速度变化。短期峰值可以作为参考，但不应直接成为推荐理由。" }, { h: "按自己的运营商验证", p: "同一个节点在移动、联通和电信下可能出现不同表现。公开榜单适合初步筛选，最终选择应参考与你相同运营商、相近地区和相近时段的记录。" }] },
  "peak-hour-testing": { category: "测试方法", title: "为什么要看晚高峰测速？白天速度快有用吗？", intro: "晚高峰通常是网络负载较高的时段，更容易暴露线路的拥堵、降速和断线问题。一次测速只能说明某个时间点，不能直接代表长期体验。", date: "2026.09.13", sections: [{ h: "先固定测试条件", p: "测试时应记录地区、运营商、设备、协议、节点和时间段。只有条件尽量一致，多个服务之间的横向比较才有意义。" }, { h: "什么时间算晚高峰？", p: "不同地区时间可能不同，常见观察窗口是本地时间 20:00 到 24:00。测试报告应标注具体日期和时间，而不是笼统写成高峰期。" }, { h: "重点看哪些变化？", p: "比较白天与晚高峰的延迟、下载速度、抖动、连接成功率和重连时间。速度下降比例和失败记录往往比单次最高速度更有参考价值。" }, { h: "为什么要连续测试？", p: "一天的异常可能来自本地网络、服务维护或临时拥堵。连续 7 天采样可以减少偶然性，更接近日常使用中的真实表现。" }] },
  "streaming-unlock-testing": { category: "使用场景", title: "机场的流媒体解锁测试应该怎么看？", intro: "流媒体解锁测试回答的是某个节点能否访问特定服务，不等于这个节点在所有时段都稳定或速度足够。", date: "2026.09.13", sections: [{ h: "解锁测试记录什么？", p: "应记录测试日期、节点地区、服务名称、账号地区和测试结果。Netflix、Disney+、YouTube Premium 以及 AI 服务的判断条件可能不同。" }, { h: "解锁成功就够了吗？", p: "不够。还需要结合晚高峰速度、缓冲情况、画质、延迟和连续播放稳定性。一个能打开页面但经常缓冲的节点，不能算完整的优质体验。" }, { h: "为什么结果会变化？", p: "平台策略、节点 IP、出口地址和服务商线路都可能变化，所以解锁结果应标注测试日期，不能永久承诺。" }] },
  "monthly-vs-yearly-plan": { category: "套餐选择", title: "机场套餐选月付还是年付？如何降低跑路风险？", intro: "套餐周期越长，单价可能越低，但预付风险也越高。选择时应在价格和可控风险之间取平衡。", date: "2026.09.14", sections: [{ h: "月付有什么优点？", p: "月付成本较低，适合新机场试用和需要观察稳定性的用户。先用短周期验证节点、流量规则、客服和退款政策，再决定是否续费。" }, { h: "年付一定划算吗？", p: "年付只有在服务长期稳定、退款规则清晰且用户确定长期使用时才可能划算。低价不应成为一次性大额充值的唯一理由。" }, { h: "购买前检查什么？", p: "建议检查运营时间、套餐流量、设备数量、超量规则、退款条件、客服渠道和服务条款，并保留付款凭证。" }] },
  "traffic-multiplier-rules": { category: "套餐选择", title: "机场的流量倍率规则是什么？如何避免超量？", intro: "部分机场会对高带宽节点设置流量倍率，即使用这些节点时，消耗的流量会按倍数计算。不了解规则可能导致流量快速耗尽。", date: "2026.09.14", sections: [{ h: "流量倍率是什么？", p: "流量倍率是指某些节点在使用时，实际消耗的流量会是传输流量的数倍。例如 2 倍率节点下载 1GB 文件，套餐流量会扣除 2GB。常见于 IPLC、IEPL 专线或高负载地区节点。" }, { h: "如何查看倍率规则？", p: "正规机场通常会在节点名称、官网套餐说明或客户端备注中标注倍率。购买前应明确哪些节点有倍率、具体数值多少，以及是否提供无倍率的备用节点。" }, { h: "如何避免超量？", p: "优先使用 1 倍率或无倍率节点，仅在需要稳定性时切换到高倍率专线。避免在高倍率节点下下载大文件或长时间播放 4K 视频。定期检查套餐余量，接近用完时及时调整使用策略。" }] },
  "client-selection-guide": { category: "基础概念", title: "Clash、Shadowrocket、sing-box 客户端怎么选？", intro: "不同客户端在平台支持、协议兼容性、配置方式和更新频率上有差异。选择时应结合设备平台、使用场景和机场支持的协议。", date: "2026.09.14", sections: [{ h: "Clash 系列适合谁？", p: "Clash for Windows（已停更）、ClashX（macOS）、Clash Verge（跨平台）等 Clash 内核客户端，支持规则分流、策略组和图形界面，适合需要精细控制的用户。部分机场提供 Clash 订阅转换，但需注意内核版本与协议兼容性。" }, { h: "Shadowrocket 和 Quantumult X 有什么区别？", p: "两者都是 iOS 平台的付费客户端。Shadowrocket 界面简洁、上手快，适合大部分用户；Quantumult X 功能更复杂，支持脚本和高级分流规则，适合进阶用户。两者都支持主流协议，购买前需确认 App Store 区域。" }, { h: "sing-box 和 v2rayN 怎么选？", p: "sing-box 是新一代代理内核，协议支持全面、性能较好，但生态较新，部分机场可能未提供专用订阅。v2rayN（Windows）是老牌客户端，兼容性好、社区成熟，适合需要稳定工具的用户。选择时应先确认机场是否提供对应格式的订阅或转换服务。" }] },
  "bgp-vs-cn2-gia": { category: "线路类型", title: "BGP、CN2 GIA 和 AS4809 是什么？影响速度吗？", intro: "BGP、CN2 GIA、AS4809 等术语常出现在机场宣传中，它们描述的是网络路径的路由方式或运营商编号。理解这些概念有助于判断线路类型，但实际速度仍需结合测试数据。", date: "2026.09.14", sections: [{ h: "BGP 是什么？", p: "BGP（Border Gateway Protocol，边界网关协议）是互联网路由协议，机场语境中的 BGP 通常指多线 BGP，即服务器接入了多个运营商线路，可以根据用户网络自动选择最优路径。本质上不是一种线路类型，而是路由策略。" }, { h: "CN2 GIA 和 163 骨干网有什么区别？", p: "CN2 GIA 是中国电信的高等级国际线路，拥堵较少、延迟较低，适合对稳定性有要求的用户。163 骨干网是电信的普通国际出口，高峰期容易拥堵。两者差异主要体现在晚高峰表现，但 CN2 GIA 也不等于绝对稳定，需看服务商的带宽分配和超售比例。" }, { h: "AS4809 是什么？", p: "AS4809 是中国电信 CN2 网络的自治系统编号（AS Number）。机场提到 AS4809 通常表示线路经过 CN2 网络。可以通过 traceroute 或 IP 查询工具验证路径中是否包含该 AS，但编号本身不直接决定速度，仍需结合延迟、带宽和实际测速判断。" }] },
  "airport-security-risks": { category: "风险提示", title: "使用机场 VPN 有哪些安全风险？如何降低？", intro: "代理服务可以帮助访问被限制的内容，但同时也引入了流量可见性、日志记录和服务商跑路等风险。了解这些风险并采取相应措施，可以在便利性和安全性之间取得平衡。", date: "2026.09.14", sections: [{ h: "流量可见性风险", p: "使用机场服务时，你的网络流量会经过服务商的服务器，这意味着服务商理论上可以看到你的访问目标和传输内容（HTTPS 可以保护内容，但域名和 IP 仍可见）。应避免在代理下登录敏感账号、输入密码或传输私人文件。" }, { h: "日志记录与隐私", p: "部分机场会记录连接日志、流量使用和访问记录，用于故障排查、流量统计或应对法律请求。购买前应阅读隐私政策，了解服务商是否记录日志、保存时长和使用目的。无日志声明不等于真正无日志，需结合服务商的透明度和历史记录判断可信度。" }, { h: "跑路风险与预付策略", p: "机场服务的运营风险较高，服务商可能因政策、成本或其他原因突然停止服务，已购买的长周期套餐可能无法退款。降低风险的方法包括：优先选择月付或季付套餐、分散购买多个服务作为备选、保留付款凭证和服务条款、关注社区反馈和运营动态。" }] },
} as const;

export function generateStaticParams() { return Object.keys(wiki).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = wiki[slug as keyof typeof wiki];
  if (!item) return {};

  return {
    title: `${item.title} - 机场百科`,
    description: `${item.intro} ${item.sections.map((section) => section.p).join(" ").slice(0, 150)}...`,
    keywords: [item.category, "机场百科", "VPN知识", item.title.split("？")[0], "机场选购", "测速方法"],
    alternates: {
      canonical: `/wiki/${slug}`,
      languages: {
        "zh-CN": `/wiki/${slug}`,
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
      title: `${item.title} - 机场百科 | 简单节点`,
      description: item.intro,
      url: `/wiki/${slug}`,
      type: "article",
      siteName: "简单节点",
      locale: "zh_CN",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${item.title} - 简单节点`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} - 机场百科`,
      description: item.intro,
      images: ["/og-image.svg"],
    },
  };
}

export default async function WikiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = wiki[slug as keyof typeof wiki];
  if (!item) notFound();

  const pageUrl = `${SITE_URL}/wiki/${slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    url: pageUrl,
    headline: item.title,
    description: item.intro,
    articleSection: item.category,
    datePublished: item.date.replaceAll(".", "-"),
    dateModified: DATA_UPDATED_AT,
    inLanguage: "zh-CN",
    author: { "@type": "Organization", name: "简单节点", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return <main className="article-detail-shell"><nav className="topbar article-topbar"><Link className="brand" href="/"><span className="brand-mark">/</span> 简单节点</Link><Link className="back-link" href="/wiki">返回机场百科 <span>↗</span></Link></nav><article className="article-detail wiki-detail"><p className="eyebrow">{item.category} / {item.date}</p><h1>{item.title}</h1><p className="article-intro">{item.intro}</p>{item.sections.map((section) => <section key={section.h}><h2>{section.h}</h2><p>{section.p}</p></section>)}<div className="article-source"><strong>内容声明</strong><p>本文用于解释机场 VPN 相关概念，不构成对任何服务商的稳定性承诺。具体体验请结合公开测试条件和实际使用环境判断。</p></div></article><footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自公开资料与独立测试，仅供比较参考。</span><span>© 2026 简单节点</span></footer><JsonLd data={structuredData} /></main>;
}
