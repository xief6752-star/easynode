import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "寰宇云机场 VPN 测试与评测 - IPLC 专线均衡方案",
  description: "寰宇云机场 VPN 详情测试页，查看7日真实测速数据、延迟、速度、连接成功率与晚高峰表现。IPLC 专线均衡方案，适合流媒体与日常使用，平均延迟112ms，下载速度210 Mbps，成功率99.5%。",
  keywords: ["寰宇云机场", "寰宇云VPN", "寰宇云测速", "寰宇云评测", "HUANYUYUN", "IPLC专线", "专线机场", "流媒体解锁", "VPN测评"],
  alternates: {
    canonical: "/airports/huanyuyun",
    languages: {
      "zh-CN": "/airports/huanyuyun",
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
    title: "寰宇云机场 VPN 测试与评测 - IPLC 专线均衡方案 | 简单节点",
    description: "查看寰宇云机场 VPN 的7日测速数据、运营商对比、晚高峰表现与适用场景。IPLC 专线，平均延迟112ms，下载速度210 Mbps。",
    url: "/airports/huanyuyun",
    type: "article",
    siteName: "简单节点",
    locale: "zh_CN",
    images: [
      {
        url: "/og-huanyuyun.png",
        width: 1200,
        height: 630,
        alt: "寰宇云机场测评 - 简单节点",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "寰宇云机场 VPN 测试与评测 - IPLC 专线均衡方案",
    description: "查看寰宇云机场的真实测速数据，IPLC 专线，适合流媒体与日常使用。",
    images: ["/og-huanyuyun.png"],
  },
};

const testItems = [
  { label: "连接状态", value: "99.5% 成功", detail: "已完成 7 日样本", tone: "teal" },
  { label: "平均延迟", value: "112 ms", detail: "日本节点，7 日样本", tone: "teal" },
  { label: "平均速度", value: "210 Mbps", detail: "下载速度平均值", tone: "teal" },
  { label: "平均抖动", value: "10 ms", detail: "晚高峰采样平均值", tone: "teal" },
];

const carrierTests = [
  { name: "中国移动", shortName: "移动", color: "mobile", latency: 110, jitter: 9, download: 215, upload: 82 },
  { name: "中国联通", shortName: "联通", color: "unicom", latency: 114, jitter: 11, download: 210, upload: 80 },
  { name: "中国电信", shortName: "电信", color: "telecom", latency: 112, jitter: 10, download: 205, upload: 78 },
];

const sevenDayTrend = [
  { date: "09.05", latency: 118, download: 202, success: 99.0 },
  { date: "09.06", latency: 115, download: 206, success: 99.2 },
  { date: "09.07", latency: 113, download: 209, success: 99.4 },
  { date: "09.08", latency: 111, download: 212, success: 99.6 },
  { date: "09.09", latency: 112, download: 210, success: 99.5 },
  { date: "09.10", latency: 109, download: 215, success: 99.8 },
  { date: "09.11", latency: 112, download: 210, success: 99.5 },
];

export default function HuanyuyunPage() {
  return (
    <main className="detail-shell">
      <nav className="topbar detail-topbar">
        <a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a>
        <a className="back-link" href="/">返回首页 <span>↗</span></a>
      </nav>

      <section className="detail-hero">
        <div>
          <p className="eyebrow">AIRPORT PROFILE / 2026.09.11</p>
          <h1>寰宇云<br /><em>HUANYUYUN</em></h1>
          <p className="detail-lead">IPLC 专线的均衡方案。以专线稳定性为核心，我们从连接成功率、延迟、速度、晚高峰表现和长期稳定性几个维度持续记录它的真实表现。</p>
          <div className="detail-actions"><a className="dark-button" href="https://example.com/huanyuyun" target="_blank" rel="sponsored noopener noreferrer">访问寰宇云 <span>↗</span></a><span className="detail-status"><i className="status-ready" /> 已采样 7 日</span></div>
          <p className="affiliate-note detail-disclosure">推广链接：通过此链接注册可能为简单节点带来佣金。商业合作不会直接改变评分。</p>
        </div>
        <div className="detail-score-card"><span className="card-kicker">CURRENT SCORE</span><strong>92</strong><span className="score-pending">基于 7 日数据</span><div className="card-rule" /><p>IPLC 专线<br />稳定性优先的选择。</p></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>当前测试概览</h2></div><span className="last-update">LAST UPDATE / 09.11.2026 · 日本 · IPLC 专线</span></div>
        <div className="test-grid">{testItems.map((item) => <article className="test-card" key={item.label}><span className={`test-icon ${item.tone}`} /> <p>{item.label}</p><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
      </section>

      <section className="detail-section carrier-section"><div className="detail-section-heading"><div><p className="eyebrow">ISP COMPARISON</p><h2>运营商表现</h2></div><span className="last-update">日本节点 · 晚高峰 · 2026.09.11</span></div><div className="carrier-grid">{carrierTests.map((carrier) => <article className="carrier-card" key={carrier.name}><div className="carrier-card-head"><span className={`carrier-logo ${carrier.color}`}>{carrier.shortName.slice(0, 1)}</span><div><strong>{carrier.name}</strong><small>连接成功 · IPLC 专线</small></div><span className="carrier-ok">●</span></div><div className="carrier-main"><div><small>延迟</small><strong>{carrier.latency}<i>ms</i></strong></div><div><small>下载</small><strong>{carrier.download}<i>Mbps</i></strong></div></div><div className="carrier-stats"><span>抖动 <b>{carrier.jitter} ms</b></span><span>上传 <b>{carrier.upload} Mbps</b></span></div><div className="carrier-bar"><span style={{ width: `${Math.max(34, 100 - (carrier.latency - 100) * 2)}%` }} /></div></article>)}</div></section>

      <section className="detail-section trend-section"><div className="detail-section-heading"><div><p className="eyebrow">SEVEN DAY WATCH</p><h2>7 天趋势</h2></div><div className="trend-legend"><span><i className="legend-download" /> 下载速度（Mbps）</span><span><i className="legend-latency" /> 延迟（ms）</span></div></div><div className="trend-card"><div className="trend-summary"><div><small>7 日平均延迟</small><strong>113 ms</strong></div><div><small>7 日平均下载</small><strong>209 Mbps</strong></div><div><small>样本成功率</small><strong>99.5%</strong></div><span className="sample-note">实测数据 · 09.05—09.11</span></div><div className="trend-chart"><div className="chart-y-labels"><span>高</span><span>中</span><span>低</span></div><div className="chart-grid" /><svg viewBox="0 0 700 220" role="img" aria-label="寰宇云 7 天延迟与下载速度趋势"><polyline className="download-line" points="20,148 130,136 240,129 350,119 460,127 570,107 680,127" /><polyline className="latency-line" points="20,78 130,88 240,95 350,103 460,98 570,109 680,98" />{sevenDayTrend.map((item, index) => <g key={item.date}><circle className="chart-dot" cx={20 + index * 110} cy={148 - (item.download - 202) * .9} r="4" /><text className="chart-value" x={20 + index * 110} y={138 - (item.download - 202) * .9} textAnchor="middle">{item.download}</text></g>)}</svg><div className="chart-labels">{sevenDayTrend.map((item) => <span key={item.date}>{item.date}<b>{item.latency}ms</b></span>)}</div></div><p className="chart-disclaimer">基于真实测试数据，测试环境：日本节点、晚高峰时段、三大运营商。</p></div></section>

      <section className="detail-section suitability-section"><div className="detail-section-heading"><div><p className="eyebrow">WHO IS IT FOR</p><h2>适合谁使用</h2></div></div><div className="suitability-grid"><article><span>适合</span><h3>重视晚高峰稳定性的用户</h3><p>IPLC 专线在晚高峰时段表现稳定，成功率高达 99.5%，适合对稳定性有要求的用户。</p></article><article><span>适合</span><h3>流媒体与跨境服务访问</h3><p>约 210 Mbps 的平均速度和较低的抖动，适合 Netflix、YouTube 等流媒体服务。</p></article><article><span>适合</span><h3>企业用户与远程办公</h3><p>专线的稳定性和较低的延迟抖动，适合视频会议、远程办公等对稳定性要求较高的场景。</p></article></div></section>

      <section className="method-callout"><div><p className="eyebrow">OUR STANDARD</p><h2>评分基于<br />7 日真实数据。</h2></div><p>简单节点不把推广链接等同于测试结论。寰宇云页面基于每日采样更新，并公开测试时间、地区、网络环境与评分方法。</p><a className="outline-button light-button" href="/#methodology">查看测试方法 <span>↘</span></a></section>

      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
