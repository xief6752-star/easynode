import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "历史机场推荐与测评档案",
  description: "简单节点历史机场推荐栏目，按时间查看瞬云、寰宇云、筋斗云等机场的公开评级、线路类型、测速参考和测评详情。",
  alternates: { canonical: "/recommendations" },
  openGraph: { title: "历史机场推荐与测评档案 | 简单节点", description: "按时间查看简单节点的机场推荐和测评记录。", url: "/recommendations", type: "website" },
};

const recommendations = [
  { date: "2026.09.08", name: "瞬云", slug: "shunyun", score: 86, note: "中转与专线结合的日常选择", type: "中转 + 专线", speed: "约 200 Mbps" },
  { date: "2026.09.01", name: "寰宇云", slug: "huanyuyun", score: 92, note: "IPLC 专线的均衡方案", type: "IPLC 专线", speed: "约 200 Mbps" },
  { date: "2026.08.25", name: "筋斗云", slug: "jindouyun", score: 92, note: "IEPL/IPLC 高峰线路观察", type: "IEPL / IPLC", speed: "约 200 Mbps" },
];

export default function RecommendationsPage() {
  return <main className="recommendation-shell"><nav className="topbar article-topbar"><a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a><a className="back-link" href="/">返回首页 <span>↗</span></a></nav><header className="recommendation-header"><p className="eyebrow">THE ARCHIVE / WEEKLY PICKS</p><h1>每一次推荐，<br /><em>都有记录。</em></h1><p>按时间查看简单节点的历史推荐。每条记录都链接到对应机场测评页，公开展示数据来源和判断条件。</p></header><section className="recommendation-list">{recommendations.map((item, index) => <a className="recommendation-row" href={`/airports/${item.slug}`} key={item.slug}><span className="recommendation-index">0{index + 1}</span><time>{item.date}</time><div><h2>{item.name}</h2><p>{item.note}</p></div><span className="recommendation-type">{item.type}<small>{item.speed}</small></span><strong className="recommendation-score">{item.score}<small>/ 100</small></strong><span className="arrow">↗</span></a>)}</section><section className="recommendation-note"><p className="eyebrow">EDITORIAL NOTE</p><h2>推荐不是承诺。</h2><p>历史记录用于回看当时的公开资料和测试结论。节点、价格、线路和运营状态会变化，请进入详情页查看当前说明。</p></section><footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自公开资料与独立测试，仅供比较参考。</span><span>© 2026 简单节点</span></footer></main>;
}
