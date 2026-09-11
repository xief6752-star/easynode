import type { Metadata } from "next";
import { notFound } from "next/navigation";

const airports = {
  shunyun: { name: "瞬云", english: "SHUNYUN", price: "¥16 起/月", route: "中转 + 专线", rating: "B+", score: 86, latency: 110, speed: "198", color: "coral", summary: "中转与专线结合的日常型机场，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "日常浏览、高清视频和希望兼顾线路选择的用户", watch: "当前评分和指标属于阶段性展示结果，仍需持续导入更多独立样本。" },
  huanyuyun: { name: "寰宇云", english: "HUANYUYUN", price: "¥14 起/月", route: "IPLC 专线", rating: "A", score: 92, latency: 112, speed: "210", color: "teal", summary: "以 IPLC 专线为主要卖点的机场，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "重视晚高峰稳定性、视频流媒体和跨境服务访问的用户", watch: "专线表现需要按地区、运营商和具体节点分别验证，当前评级不等于完整长期评分。" },
  jindouyun: { name: "筋斗云", english: "JINDOUYUN", price: "¥16 起/月", route: "IEPL / IPLC 专线", rating: "A", score: 92, latency: 114, speed: "205", color: "yellow", summary: "以 IEPL/IPLC 优化线路为特色，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "视频会议、流媒体和对高峰期线路有要求的用户", watch: "专线节点的真实表现会随入口、运营商和使用时间变化，建议先月付验证。" },
  jiuyun: { name: "九云", english: "JIUYUN", price: "¥6 起/月", route: "VLESS 海外中转", rating: "B+", score: 86, latency: 116, speed: "192", color: "blue", summary: "价格门槛较低的海外中转方案，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "预算有限、需要低成本备用线路或轻量日常使用的用户", watch: "低价方案更需要关注长期稳定性、流量规则、退款政策和运营持续性。" },
} as const;

type Airport = (typeof airports)[keyof typeof airports];

export function generateStaticParams() {
  return Object.keys(airports).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const airport = airports[slug as keyof typeof airports];
  if (!airport) return {};
  return {
    title: `${airport.name}机场 VPN 测试与评测`,
    description: `查看${airport.name}机场 VPN 的线路类型、晚高峰速度、延迟、公开评级、适用人群和风险提示。简单节点整理公开资料，并持续补充独立测试数据。`,
    alternates: { canonical: `/airports/${slug}` },
    openGraph: { title: `${airport.name}机场 VPN 测试与评测 | 简单节点`, description: airport.summary, url: `/airports/${slug}`, type: "article" },
  };
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <article className="test-card"><span className="test-icon blue" /><p>{label}</p><strong>{value}</strong><small>{detail}</small></article>;
}

export default async function AirportReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const airport = airports[slug as keyof typeof airports];
  if (!airport) notFound();
  const data = airport as Airport;

  return <main className="detail-shell"><nav className="topbar detail-topbar"><a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a><a className="back-link" href="/">返回首页 <span>↗</span></a></nav>
  <section className="detail-hero airport-review-hero"><div><p className="eyebrow">AIRPORT REVIEW / 2026.09.11</p><h1>{data.name}<br /><em>{data.english}</em></h1><p className="detail-lead">{data.summary}本页根据当前阶段的公开信息与测试样本整理，延迟约为 110ms 区间展示值，正式结论以持续测试数据为准。</p><div className="detail-actions"><a className="dark-button" href="/articles/how-we-test-vpn">查看测试方法 <span>↗</span></a><span className="detail-status"><i /> 阶段数据已整理</span></div><p className="affiliate-note detail-disclosure">本站会持续补充测试记录，公开说明测试条件，评分与推广链接分开处理。</p></div><div className="detail-score-card"><span className="card-kicker">CURRENT RATING</span><strong>{data.rating}</strong><span className="score-pending">界面换算分 {data.score} / 100</span><div className="card-rule" /><p>当前阶段参考评级：{data.rating}<br />不是长期稳定性承诺。</p></div></section>
  <section className="detail-section"><div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>核心指标</h2></div><span className="last-update">CURRENT SAMPLE / 2026.09.11</span></div><div className="test-grid"><Metric label="参考延迟" value={`${data.latency} ms`} detail="约 110ms 区间展示值" /><Metric label="阶段速度" value={`${data.speed} Mbps`} detail="当前样本展示值" /><Metric label="线路类型" value={data.route} detail="页面资料整理" /><Metric label="起步价格" value={data.price} detail="以实际套餐页面为准" /></div></section>
  <section className="detail-section review-facts"><div className="detail-section-heading"><div><p className="eyebrow">REVIEW NOTES</p><h2>怎么理解这份测评</h2></div></div><div className="suitability-grid"><article><span>适合人群</span><h3>{data.goodFor}</h3><p>先按自己的地区和运营商进行小额、短周期验证，再决定是否长期使用。</p></article><article><span>线路观察</span><h3>{data.route}</h3><p>线路名称来自公开资料，实际节点路径、协议和入口可能随套餐与时间变化。</p></article><article><span>需要注意</span><h3>不要只看峰值速度</h3><p>{data.watch}</p></article></div></section>
  <section className="method-callout"><div><p className="eyebrow">NEXT STEP</p><h2>先看条件，<br />再做选择。</h2></div><p>简单节点会继续补充真实测试记录。你可以提交 CSV 数据，我们会更新延迟、运营商、晚高峰和 7 天趋势。</p><a className="outline-button light-button" href="/articles">查看测评文章 <span>↗</span></a></section>
  <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自公开资料与独立测试，仅供比较参考。</span><span>© 2026 简单节点</span></footer></main>;
}
