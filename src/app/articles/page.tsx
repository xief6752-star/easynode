import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "机场 VPN 测试文章与选购指南",
  description: "简单节点机场 VPN 测试文章栏目，提供测速方法、运营商差异、晚高峰表现、稳定性判断和机场选择指南。",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "机场 VPN 测试文章与选购指南 | 简单节点",
    description: "从真实测速和长期观察出发，了解机场 VPN 的延迟、速度、稳定性和选择方法。",
    url: "/articles",
    type: "website",
  },
};

const articles = [
  { category: "测速方法", date: "2026.09.11", title: "机场 VPN 怎么测才不容易被单次速度误导？", excerpt: "为什么一次测速不能代表长期体验，以及简单节点如何用多地区、多时段和晚高峰复测建立更可靠的结论。", href: "/articles/how-we-test-vpn" },
  { category: "运营商观察", date: "2026.09.11", title: "移动、联通、电信的机场线路表现有什么差异？", excerpt: "从延迟、抖动、下载速度和连接成功率四个维度，理解同一节点在不同网络运营商下的表现变化。", href: "/articles/isp-comparison" },
  { category: "选购指南", date: "2026.09.11", title: "晚高峰选机场，应该重点看哪些数据？", excerpt: "晚高峰是判断线路拥堵和稳定性的关键窗口。看懂延迟、速度下降比例和断线记录，避免只看白天峰值。", href: "/articles/peak-hour-vpn" },
];

export default function ArticlesPage() {
  return (
    <main className="article-shell">
      <nav className="topbar article-topbar"><a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a><a className="back-link" href="/">返回首页 <span>↗</span></a></nav>
      <header className="article-header"><p className="eyebrow">THE NOTEBOOK</p><h1>节点选择，<br /><em>先读数据。</em></h1><p>持续更新的机场 VPN 测试笔记、测速方法和选购参考。每篇文章都尽量把结论放回测试条件里。</p></header>
      <section className="article-grid">{articles.map((article, index) => <article className="article-card" key={article.href}><div className="article-number">0{index + 1}</div><div className="article-meta"><span>{article.category}</span><time>{article.date}</time></div><h2>{article.title}</h2><p>{article.excerpt}</p><a href={article.href}>阅读文章 <span>↗</span></a></article>)}</section>
      <section className="article-note"><p className="eyebrow">EDITORIAL POLICY</p><h2>数据先于结论。</h2><p>本站内容基于公开测试记录和明确的测试条件。推广链接会单独披露，不等同于推荐评分；测速结果会随地区、运营商和时间变化。</p></section>
      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
