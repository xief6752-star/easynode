import type { Metadata } from "next";
import { notFound } from "next/navigation";

const articleData = {
  "how-we-test-vpn": { category: "测速方法", title: "机场 VPN 怎么测才不容易被单次速度误导？", intro: "一次测速只能说明某个时间点的状态，不能直接代表一条线路的长期体验。", sections: [{ heading: "先固定测试条件", body: "测试时应记录地区、运营商、设备、协议、节点和时间段。只有条件尽量一致，多个服务之间的横向比较才有意义。" }, { heading: "至少覆盖白天与晚高峰", body: "白天速度好不等于晚高峰稳定。简单节点会把晚高峰作为独立样本，观察延迟上升、下载下降和连接失败是否集中出现。" }, { heading: "用趋势替代单次结论", body: "建议观察 7 天以上的成功率、平均延迟、抖动和速度变化。短期峰值可以作为参考，但不应直接成为推荐理由。" }] },
  "isp-comparison": { category: "运营商观察", title: "移动、联通、电信的机场线路表现有什么差异？", intro: "同一个节点在不同运营商下可能出现不同延迟和速度，运营商是机场测试中不能忽略的变量。", sections: [{ heading: "延迟看路径，不只看距离", body: "延迟受到本地接入、跨网互联和节点路径影响。地理位置相近的节点，也可能因为路由不同而产生明显差异。" }, { heading: "下载速度需要结合抖动", body: "下载峰值高并不代表体验稳定。抖动较大时，网页加载、视频缓冲和实时连接可能仍然不顺畅。" }, { heading: "最好按自己的运营商验证", body: "公开榜单适合初步筛选，最终选择应参考与你相同运营商、相近地区和相近时段的测试记录。" }] },
  "peak-hour-vpn": { category: "选购指南", title: "晚高峰选机场，应该重点看哪些数据？", intro: "晚高峰是观察线路拥堵和真实可用性的关键时间窗口。", sections: [{ heading: "看延迟增幅", body: "不要只看绝对延迟，还要比较白天和晚高峰的变化幅度。延迟突然升高，通常说明线路在高负载时更容易拥堵。" }, { heading: "看速度下降比例", body: "晚高峰下载速度下降比例比白天峰值更有参考价值。连续多天保持稳定，才更接近日常使用体验。" }, { heading: "看失败和重连记录", body: "连接失败、频繁断线和重连时间应单独记录。速度不错但经常掉线的线路，不应只凭峰值速度获得高评价。" }] },
} as const;

const wikiByArticle = { "how-we-test-vpn": "vpn-test-methodology", "isp-comparison": "latency-and-jitter", "peak-hour-vpn": "peak-hour-testing" } as const;

export function generateStaticParams() { return Object.keys(articleData).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleData[slug as keyof typeof articleData];
  if (!article) return {};
  return { title: article.title, description: `${article.intro}${article.sections.map((section) => section.body).join("")}`, alternates: { canonical: `/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}` } };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleData[slug as keyof typeof articleData];
  if (!article) notFound();
  return <main className="article-detail-shell"><nav className="topbar article-topbar"><a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a><a className="back-link" href={`/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}`}>查看百科词条 <span>↗</span></a></nav><article className="article-detail"><p className="eyebrow">{article.category} / 已归档至机场百科</p><h1>{article.title}</h1><p className="article-intro">该测试文章内容已合并到机场百科，以下保留原文供历史链接访问。</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<div className="article-source"><strong>查看新版词条</strong><p><a href={`/wiki/${wikiByArticle[slug as keyof typeof wikiByArticle]}`}>前往机场百科查看完整、持续更新的内容 →</a></p></div></article><footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。</span><span>© 2026 简单节点</span></footer></main>;
}
