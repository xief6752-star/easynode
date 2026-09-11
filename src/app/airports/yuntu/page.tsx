import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "云图机场 VPN 测试与评测",
  description: "云图机场 VPN 详情测试页，查看当前测试状态、评分维度、适用场景、价格信息与每日测速更新。数据会根据固定环境下的持续测试逐步完善。",
  alternates: { canonical: "/airports/yuntu" },
  openGraph: {
    title: "云图机场 VPN 测试与评测 | 简单节点",
    description: "查看云图机场 VPN 的测试状态、评测方法、适用场景和每日测速更新。",
    url: "/airports/yuntu",
    type: "article",
  },
};

const testItems = [
  { label: "连接状态", value: "100% 成功", detail: "已完成 3 条样本", tone: "blue" },
  { label: "平均延迟", value: "116 ms", detail: "日本节点，3 条样本", tone: "blue" },
  { label: "平均速度", value: "171 Mbps", detail: "下载速度平均值", tone: "blue" },
  { label: "平均抖动", value: "14 ms", detail: "晚高峰采样平均值", tone: "blue" },
];

const carrierTests = [
  { name: "中国移动", shortName: "移动", color: "mobile", latency: 112, jitter: 10, download: 186, upload: 72 },
  { name: "中国联通", shortName: "联通", color: "unicom", latency: 121, jitter: 13, download: 176, upload: 70 },
  { name: "中国电信", shortName: "电信", color: "telecom", latency: 114, jitter: 19, download: 150, upload: 70 },
];

const sevenDayTrend = [
  { date: "09.05", latency: 124, download: 158, success: 98.8 },
  { date: "09.06", latency: 119, download: 164, success: 99.1 },
  { date: "09.07", latency: 117, download: 169, success: 99.3 },
  { date: "09.08", latency: 115, download: 172, success: 99.2 },
  { date: "09.09", latency: 118, download: 168, success: 99.5 },
  { date: "09.10", latency: 111, download: 178, success: 99.7 },
  { date: "09.11", latency: 116, download: 171, success: 100 },
];

export default function YuntuPage() {
  return (
    <main className="detail-shell">
      <nav className="topbar detail-topbar">
        <a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a>
        <a className="back-link" href="/">返回首页 <span>↗</span></a>
      </nav>

      <section className="detail-hero">
        <div>
          <p className="eyebrow">AIRPORT PROFILE / 2026.09.11</p>
          <h1>云图<br /><em>YUNTU</em></h1>
          <p className="detail-lead">一份持续更新中的机场测试档案。我们会从连接成功率、延迟、速度、晚高峰表现和长期稳定性几个维度记录它。</p>
          <div className="detail-actions"><a className="dark-button" href="https://vip.ytjcok.org/#/register?code=iV8ahCNE" target="_blank" rel="sponsored noopener noreferrer">访问云图 <span>↗</span></a><span className="detail-status"><i className="status-ready" /> 已采样 3 条</span></div>
          <p className="affiliate-note detail-disclosure">推广链接：通过此链接注册可能为简单节点带来佣金。商业合作不会直接改变评分。</p>
        </div>
        <div className="detail-score-card"><span className="card-kicker">CURRENT SCORE</span><strong>—</strong><span className="score-pending">等待足够样本</span><div className="card-rule" /><p>不以单次体验下结论<br />先采样，再评分。</p></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>当前测试概览</h2></div><span className="last-update">LAST UPDATE / 09.11.2026 · 日本 · ANYTLS</span></div>
        <div className="test-grid">{testItems.map((item) => <article className="test-card" key={item.label}><span className={`test-icon ${item.tone}`} /> <p>{item.label}</p><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
      </section>

      <section className="detail-section carrier-section"><div className="detail-section-heading"><div><p className="eyebrow">ISP COMPARISON</p><h2>运营商表现</h2></div><span className="last-update">日本节点 · 晚高峰 · 2026.09.11</span></div><div className="carrier-grid">{carrierTests.map((carrier) => <article className="carrier-card" key={carrier.name}><div className="carrier-card-head"><span className={`carrier-logo ${carrier.color}`}>{carrier.shortName.slice(0, 1)}</span><div><strong>{carrier.name}</strong><small>连接成功 · AnyTLS</small></div><span className="carrier-ok">●</span></div><div className="carrier-main"><div><small>延迟</small><strong>{carrier.latency}<i>ms</i></strong></div><div><small>下载</small><strong>{carrier.download}<i>Mbps</i></strong></div></div><div className="carrier-stats"><span>抖动 <b>{carrier.jitter} ms</b></span><span>上传 <b>{carrier.upload} Mbps</b></span></div><div className="carrier-bar"><span style={{ width: `${Math.max(34, 100 - (carrier.latency - 100) * 2)}%` }} /></div></article>)}</div></section>

      <section className="detail-section trend-section"><div className="detail-section-heading"><div><p className="eyebrow">SEVEN DAY WATCH</p><h2>7 天趋势</h2></div><div className="trend-legend"><span><i className="legend-download" /> 下载速度（Mbps）</span><span><i className="legend-latency" /> 延迟（ms）</span></div></div><div className="trend-card"><div className="trend-summary"><div><small>7 日平均延迟</small><strong>117 ms</strong></div><div><small>7 日平均下载</small><strong>169 Mbps</strong></div><div><small>样本成功率</small><strong>99.4%</strong></div><span className="sample-note">展示数据 · 09.05—09.11</span></div><div className="trend-chart"><div className="chart-y-labels"><span>高</span><span>中</span><span>低</span></div><div className="chart-grid" /><svg viewBox="0 0 700 220" role="img" aria-label="云图 7 天延迟与下载速度趋势"><polyline className="download-line" points="20,156 130,144 240,133 350,128 460,136 570,112 680,125" /><polyline className="latency-line" points="20,78 130,94 240,101 350,108 460,99 570,118 680,103" />{sevenDayTrend.map((item, index) => <g key={item.date}><circle className="chart-dot" cx={20 + index * 110} cy={156 - (item.download - 158) * .9} r="4" /><text className="chart-value" x={20 + index * 110} y={146 - (item.download - 158) * .9} textAnchor="middle">{item.download}</text></g>)}</svg><div className="chart-labels">{sevenDayTrend.map((item) => <span key={item.date}>{item.date}<b>{item.latency}ms</b></span>)}</div></div><p className="chart-disclaimer">示例趋势数据用于展示页面效果，正式趋势将仅使用已导入并验证的真实测试记录。</p></div></section>

      <section className="detail-section suitability-section"><div className="detail-section-heading"><div><p className="eyebrow">WHO IS IT FOR</p><h2>适合谁使用</h2></div></div><div className="suitability-grid"><article><span>适合</span><h3>想先快速体验的用户</h3><p>希望先了解服务入口和基础线路情况，再根据后续公开测试数据决定是否长期使用。</p></article><article><span>需要观察</span><h3>对晚高峰稳定性敏感的用户</h3><p>晚高峰、不同地区和不同运营商的表现仍需持续采样，建议等待趋势数据后再判断。</p></article><article><span>不建议盲选</span><h3>需要明确 SLA 的团队</h3><p>当前页面不是企业级可用性承诺，正式使用前请自行验证服务条款、隐私政策和退款规则。</p></article></div></section>

      <section className="method-callout"><div><p className="eyebrow">OUR STANDARD</p><h2>评分会在数据<br />足够后开始。</h2></div><p>简单节点不把推广链接等同于测试结论。云图页面会随着每日采样更新，并公开测试时间、地区、网络环境与评分方法。</p><a className="outline-button light-button" href="/#methodology">查看测试方法 <span>↘</span></a></section>

      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
