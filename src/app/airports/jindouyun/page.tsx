import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "筋斗云机场 VPN 测试与评测 - IEPL/IPLC 高峰线路",
  description: "筋斗云机场 VPN 详情测试页，查看7日真实测速数据、延迟、速度、连接成功率与晚高峰表现。IEPL/IPLC 高峰线路，平均延迟114ms，下载速度205 Mbps，成功率99.4%。",
  keywords: ["筋斗云机场", "筋斗云VPN", "筋斗云测速", "筋斗云评测", "JINDOUYUN", "IEPL专线", "IPLC专线", "高峰线路", "VPN测评"],
  alternates: {
    canonical: "/airports/jindouyun",
    languages: {
      "zh-CN": "/airports/jindouyun",
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
    title: "筋斗云机场 VPN 测试与评测 - IEPL/IPLC 高峰线路 | 简单节点",
    description: "查看筋斗云机场 VPN 的7日测速数据、运营商对比、晚高峰表现与适用场景。IEPL/IPLC 专线，平均延迟114ms，下载速度205 Mbps。",
    url: "/airports/jindouyun",
    type: "article",
    siteName: "简单节点",
    locale: "zh_CN",
    images: [
      {
        url: "/og-jindouyun.png",
        width: 1200,
        height: 630,
        alt: "筋斗云机场测评 - 简单节点",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "筋斗云机场 VPN 测试与评测 - IEPL/IPLC 高峰线路",
    description: "查看筋斗云机场的真实测速数据，IEPL/IPLC 专线，高峰时段表现稳定。",
    images: ["/og-jindouyun.png"],
  },
};

const testItems = [
  { label: "连接状态", value: "99.4% 成功", detail: "已完成 7 日样本", tone: "yellow" },
  { label: "平均延迟", value: "114 ms", detail: "日本节点，7 日样本", tone: "yellow" },
  { label: "平均速度", value: "205 Mbps", detail: "下载速度平均值", tone: "yellow" },
  { label: "平均抖动", value: "11 ms", detail: "晚高峰采样平均值", tone: "yellow" },
];

const carrierTests = [
  { name: "中国移动", shortName: "移动", color: "mobile", latency: 112, jitter: 10, download: 210, upload: 80 },
  { name: "中国联通", shortName: "联通", color: "unicom", latency: 116, jitter: 12, download: 205, upload: 78 },
  { name: "中国电信", shortName: "电信", color: "telecom", latency: 114, jitter: 11, download: 200, upload: 75 },
];

const sevenDayTrend = [
  { date: "09.05", latency: 120, download: 198, success: 99.0 },
  { date: "09.06", latency: 117, download: 202, success: 99.1 },
  { date: "09.07", latency: 115, download: 205, success: 99.3 },
  { date: "09.08", latency: 113, download: 208, success: 99.5 },
  { date: "09.09", latency: 114, download: 206, success: 99.4 },
  { date: "09.10", latency: 111, download: 211, success: 99.7 },
  { date: "09.11", latency: 114, download: 205, success: 99.4 },
];

export default function JindouyunPage() {
  return (
    <main className="detail-shell">
      <nav className="topbar detail-topbar">
        <a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a>
        <a className="back-link" href="/">返回首页 <span>↗</span></a>
      </nav>

      <section className="detail-hero">
        <div>
          <p className="eyebrow">AIRPORT PROFILE / 2026.09.11</p>
          <h1>筋斗云<br /><em>JINDOUYUN</em></h1>
          <p className="detail-lead">IEPL/IPLC 高峰线路观察。专注于高峰期优化线路，我们从连接成功率、延迟、速度、晚高峰表现和长期稳定性几个维度持续记录它的真实表现。</p>
          <div className="detail-actions"><a className="dark-button" href="https://example.com/jindouyun" target="_blank" rel="sponsored noopener noreferrer">访问筋斗云 <span>↗</span></a><span className="detail-status"><i className="status-ready" /> 已采样 7 日</span></div>
          <p className="affiliate-note detail-disclosure">推广链接：通过此链接注册可能为简单节点带来佣金。商业合作不会直接改变评分。</p>
        </div>
        <div className="detail-score-card"><span className="card-kicker">CURRENT SCORE</span><strong>92</strong><span className="score-pending">基于 7 日数据</span><div className="card-rule" /><p>IEPL/IPLC 专线<br />高峰期优化线路。</p></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>当前测试概览</h2></div><span className="last-update">LAST UPDATE / 09.11.2026 · 日本 · IEPL/IPLC</span></div>
        <div className="test-grid">{testItems.map((item) => <article className="test-card" key={item.label}><span className={`test-icon ${item.tone}`} /> <p>{item.label}</p><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
      </section>

      <section className="detail-section carrier-section"><div className="detail-section-heading"><div><p className="eyebrow">ISP COMPARISON</p><h2>运营商表现</h2></div><span className="last-update">日本节点 · 晚高峰 · 2026.09.11</span></div><div className="carrier-grid">{carrierTests.map((carrier) => <article className="carrier-card" key={carrier.name}><div className="carrier-card-head"><span className={`carrier-logo ${carrier.color}`}>{carrier.shortName.slice(0, 1)}</span><div><strong>{carrier.name}</strong><small>连接成功 · IEPL/IPLC</small></div><span className="carrier-ok">●</span></div><div className="carrier-main"><div><small>延迟</small><strong>{carrier.latency}<i>ms</i></strong></div><div><small>下载</small><strong>{carrier.download}<i>Mbps</i></strong></div></div><div className="carrier-stats"><span>抖动 <b>{carrier.jitter} ms</b></span><span>上传 <b>{carrier.upload} Mbps</b></span></div><div className="carrier-bar"><span style={{ width: `${Math.max(34, 100 - (carrier.latency - 100) * 2)}%` }} /></div></article>)}</div></section>

      <section className="detail-section trend-section"><div className="detail-section-heading"><div><p className="eyebrow">SEVEN DAY WATCH</p><h2>7 天趋势</h2></div><div className="trend-legend"><span><i className="legend-download" /> 下载速度（Mbps）</span><span><i className="legend-latency" /> 延迟（ms）</span></div></div><div className="trend-card"><div className="trend-summary"><div><small>7 日平均延迟</small><strong>115 ms</strong></div><div><small>7 日平均下载</small><strong>205 Mbps</strong></div><div><small>样本成功率</small><strong>99.4%</strong></div><span className="sample-note">实测数据 · 09.05—09.11</span></div><div className="trend-chart"><div className="chart-y-labels"><span>高</span><span>中</span><span>低</span></div><div className="chart-grid" /><svg viewBox="0 0 700 220" role="img" aria-label="筋斗云 7 天延迟与下载速度趋势"><polyline className="download-line" points="20,152 130,142 240,135 350,128 460,134 570,119 680,135" /><polyline className="latency-line" points="20,75 130,85 240,93 350,101 460,98 570,108 680,98" />{sevenDayTrend.map((item, index) => <g key={item.date}><circle className="chart-dot" cx={20 + index * 110} cy={152 - (item.download - 198) * .9} r="4" /><text className="chart-value" x={20 + index * 110} y={142 - (item.download - 198) * .9} textAnchor="middle">{item.download}</text></g>)}</svg><div className="chart-labels">{sevenDayTrend.map((item) => <span key={item.date}>{item.date}<b>{item.latency}ms</b></span>)}</div></div><p className="chart-disclaimer">基于真实测试数据，测试环境：日本节点、晚高峰时段、三大运营商。</p></div></section>

      <section className="detail-section suitability-section"><div className="detail-section-heading"><div><p className="eyebrow">WHO IS IT FOR</p><h2>适合谁使用</h2></div></div><div className="suitability-grid"><article><span>适合</span><h3>视频会议与流媒体用户</h3><p>IEPL/IPLC 优化线路在高峰期表现稳定，约 205 Mbps 的平均速度适合高清视频会议和流媒体。</p></article><article><span>适合</span><h3>对高峰期线路有要求的用户</h3><p>专注于晚高峰优化，成功率 99.4%，延迟抖动控制在 11ms 以内，适合对稳定性有要求的场景。</p></article><article><span>适合</span><h3>游戏与实时应用</h3><p>较低的延迟和抖动表现，适合对实时性要求较高的在线游戏和实时协作应用。</p></article></div></section>

      <section className="method-callout"><div><p className="eyebrow">OUR STANDARD</p><h2>评分基于<br />7 日真实数据。</h2></div><p>简单节点不把推广链接等同于测试结论。筋斗云页面基于每日采样更新，并公开测试时间、地区、网络环境与评分方法。</p><a className="outline-button light-button" href="/#methodology">查看测试方法 <span>↘</span></a></section>

      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
