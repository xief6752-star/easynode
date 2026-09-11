"use client";

import { useState } from "react";

const providers = [
  { slug: "shunyun", name: "瞬云", tag: "约 200 Mbps · B+级", category: "中转", score: 86, latency: 110, speed: 198, unlock: "Netflix / ChatGPT", price: "¥16起", color: "coral" },
  { slug: "huanyuyun", name: "寰宇云", tag: "IPLC 专线 · A级", category: "专线", score: 92, latency: 112, speed: 210, unlock: "Netflix / ChatGPT", price: "¥14起", color: "teal" },
  { slug: "jindouyun", name: "筋斗云", tag: "IEPL/IPLC · A级", category: "专线", score: 92, latency: 114, speed: 205, unlock: "Netflix / ChatGPT", price: "¥16起", color: "yellow" },
  { slug: "jiuyun", name: "九云", tag: "约 200 Mbps · B+级", category: "低价", score: 86, latency: 116, speed: 192, unlock: "Netflix / ChatGPT", price: "¥6起", color: "blue" },
];

const history = [
  { date: "09.08", name: "LANTERN", note: "晚高峰依然稳定", score: 94 },
  { date: "09.01", name: "MISTY ROUTE", note: "速度最快的轻量方案", score: 91 },
  { date: "08.25", name: "NORTHSTAR", note: "预算友好的日常选择", score: 88 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("全部");
  const filtered = activeTab === "全部" ? providers : providers.filter((provider) => provider.category === activeTab);

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">/</span> 简单节点</a>
        <div className="nav-links"><a href="#ranking">实时排名</a><a href="#reviews">每周评测</a><a href="/wiki">机场百科</a><a href="#articles">测试文章</a><a href="#archive">历史档案</a></div>
        <button className="status-pill"><span className="live-dot" /> 系统正常</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">INDEPENDENT VPN TEST LAB · 2026</p>
          <h1>不靠感觉，<br /><em>只看数据。</em></h1>
          <p className="hero-text">每天测试线路质量，每周给出一个<br />值得信任的选择。</p>
          <a className="outline-button" href="#ranking">查看本周结果 <span>↘</span></a>
        </div>
        <div className="hero-visual" aria-label="线路监测可视化">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="signal-card"><span>LIVE MONITORING</span><strong>1,284</strong><small>次测试今日完成</small></div>
          <div className="node node-a">JP <b>32ms</b></div><div className="node node-b">SG <b>48ms</b></div><div className="node node-c">US <b>81ms</b></div>
          <div className="crosshair">+</div>
        </div>
      </section>

      <section className="ticker"><div><span className="ticker-label">TODAY&apos;S SNAPSHOT</span><span>平均延迟 <b>113ms</b></span><span>平均下载 <b>201 Mbps</b></span><span>收录机场 <b>4</b></span></div><span className="updated">SOURCE · YONGJICHANG.COM</span></section>

      <section className="review-band" id="reviews"><div className="review-intro"><p className="eyebrow">WEEKLY FEATURE / 09.11.2026</p><h2>本周推荐<br /><em>云图</em></h2><p>云图作为本周推荐服务，适合希望快速开始体验机场线路的用户。正式评分将根据每日测速和长期稳定性数据持续更新。</p><p className="affiliate-note">推广链接 · 通过此链接注册可能为简单节点带来佣金，不影响公开评分。</p><a className="dark-button" href="/airports/yuntu">查看云图详情 <span>↗</span></a></div><div className="score-panel"><div className="score-ring"><strong>—</strong><span>/ 待测试</span></div><div className="score-lines"><div><span>稳定性</span><b style={{ width: "18%" }} /></div><div><span>速度表现</span><b style={{ width: "18%" }} /></div><div><span>性价比</span><b style={{ width: "18%" }} /></div></div><span className="verdict">持续测试中</span></div></section>

      <section className="content-section" id="ranking">
        <div className="section-heading"><div><p className="eyebrow">DAILY SIGNAL</p><h2>今日线路表现</h2></div><div className="tabs">{["全部", "专线", "中转", "低价"].map((tab) => <button className={activeTab === tab ? "tab active" : "tab"} key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div></div>
        <div className="table-wrap"><div className="table-header"><span>排名 / 服务</span><span>延迟</span><span>晚高峰速度</span><span>解锁</span><span>评级</span></div>{filtered.map((provider, index) => <div className="provider-row" key={provider.name}><div className="provider-name"><span className={`rank rank-${index + 1}`}>{String(index + 1).padStart(2, "0")}</span><span className={`provider-logo ${provider.color}`}>{provider.name.slice(0, 1)}</span><div><a className="provider-detail-link" href={`/airports/${provider.slug}`}>{provider.name}</a><small>{provider.tag} · {provider.price}/月</small></div></div><span className="metric">{provider.latency}<small> ms</small></span><span className="metric">{provider.speed}<small> Mbps</small></span><span className="metric unlock-metric">✓<small>{provider.unlock}</small></span><span className="score">{provider.score}</span></div>)}</div>
      </section>

      <section className="method-section" id="methodology">
        <div className="section-heading"><div><p className="eyebrow">HOW WE TEST</p><h2>每个分数，<br />都有来源。</h2></div><p className="method-lead">我们不接受单次测速作为结论。每个推荐都经过多地区、多时段的重复测试。</p></div>
        <div className="method-grid"><article><span className="method-number">01</span><h3>每日采样</h3><p>固定测试节点每天运行多轮连接、延迟、下载和上传测试，记录成功率与异常原因。</p></article><article><span className="method-number">02</span><h3>晚高峰复测</h3><p>重点观察 20:00 至 24:00 的拥堵情况，避免白天的漂亮数据掩盖真实体验。</p></article><article><span className="method-number">03</span><h3>长期观察</h3><p>推荐结论结合 7 天趋势，而不是一次性排名。数据会标注测试时间、地区和网络环境。</p></article></div>
      </section>

      <section className="faq-section" id="faq">
        <div><p className="eyebrow">FAQ</p><h2>你可能想知道</h2></div>
        <div className="faq-list"><details><summary>简单节点的测速结果可靠吗？</summary><p>结果反映固定测试节点、地区、运营商和测试时间下的表现，适合横向比较，不代表所有用户都能获得完全相同的速度。</p></details><details><summary>你们如何给出综合评分？</summary><p>评分由稳定性、晚高峰速度、连接成功率、延迟与抖动、价格和客户端体验组成，并在评测页公开各项权重。</p></details><details><summary>推荐是否包含商业合作？</summary><p>商业合作和推荐评分分开处理。任何赞助、联盟链接或利益关系都应明确披露，不以付费改变测试结果。</p></details></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "简单节点的测速结果可靠吗？", acceptedAnswer: { "@type": "Answer", text: "结果反映固定测试节点、地区、运营商和测试时间下的表现，适合横向比较，不代表所有用户都能获得完全相同的速度。" } }, { "@type": "Question", name: "你们如何给出综合评分？", acceptedAnswer: { "@type": "Answer", text: "评分由稳定性、晚高峰速度、连接成功率、延迟与抖动、价格和客户端体验组成，并在评测页公开各项权重。" } }, { "@type": "Question", name: "推荐是否包含商业合作？", acceptedAnswer: { "@type": "Answer", text: "商业合作和推荐评分分开处理，赞助、联盟链接或利益关系会明确披露。" } }] }) }} />
      </section>

      <section className="home-articles" id="articles"><div className="section-heading"><div><p className="eyebrow">THE NOTEBOOK</p><h2>测试文章</h2></div><a className="text-link" href="/articles">进入文章栏目 ↗</a></div><div className="home-article-grid"><a href="/articles/how-we-test-vpn"><span>01 / 测速方法</span><strong>机场 VPN 怎么测才不容易被单次速度误导？</strong><small>多地区、多时段与 7 天趋势的测试方法。</small></a><a href="/articles/isp-comparison"><span>02 / 运营商观察</span><strong>移动、联通、电信的机场线路表现有什么差异？</strong><small>理解同一节点在不同网络下的变化。</small></a><a href="/articles/peak-hour-vpn"><span>03 / 选购指南</span><strong>晚高峰选机场，应该重点看哪些数据？</strong><small>从延迟增幅、速度下降和断线记录判断。</small></a></div></section>

      <section className="archive-section" id="archive"><div className="section-heading"><div><p className="eyebrow">THE ARCHIVE</p><h2>过往推荐</h2></div><a className="text-link" href="#archive">查看全部 ↗</a></div><div className="archive-list">{history.map((item) => <article className="archive-item" key={item.date}><span className="archive-date">{item.date}<small> / 2026</small></span><div><strong>{item.name}</strong><p>{item.note}</p></div><span className="archive-score">{item.score}<small> / 100</small></span><span className="arrow">↗</span></article>)}</div></section>

      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
