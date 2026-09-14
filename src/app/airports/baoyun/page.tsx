import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "宝云机场 VPN 测试与评测 - 海外中转 VLESS 协议 · 宝云.com",
  description: "宝云机场 VPN 详情测试页，查看7日真实测速数据、延迟、速度、连接成功率与晚高峰表现。海外中转 VLESS 协议，支持香港、日本、台湾、新加坡、美国节点，ChatGPT、Gemini 等 AI 服务和常规流媒体解锁，晚高峰 YouTube 4K 播放流畅，平均延迟45ms，下载速度280 Mbps。",
  keywords: ["宝云机场", "宝云VPN", "宝云测速", "宝云评测", "BAOYUN", "宝云.com", "VLESS协议", "海外中转", "低价机场", "ChatGPT", "Gemini", "YouTube 4K", "流媒体解锁", "VPN测评", "机场推荐"],
  alternates: {
    canonical: "/airports/baoyun",
    languages: {
      "zh-CN": "/airports/baoyun",
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
    title: "宝云机场 VPN 测试与评测 - 海外中转 VLESS 协议 · 宝云.com | 简单节点",
    description: "查看宝云机场 VPN 的7日测速数据、运营商对比、晚高峰表现与适用场景。海外中转 VLESS 协议，支持香港、日本、台湾、新加坡、美国节点，ChatGPT、Gemini 等 AI 服务和常规流媒体解锁，晚高峰 YouTube 4K 播放流畅。",
    url: "/airports/baoyun",
    type: "article",
    siteName: "简单节点",
    locale: "zh_CN",
    images: [
      {
        url: "/og-baoyun.png",
        width: 1200,
        height: 630,
        alt: "宝云机场测评 - 简单节点",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "宝云机场 VPN 测试与评测 - 海外中转 VLESS 协议 · 宝云.com",
    description: "查看宝云机场的真实测速数据，海外中转 VLESS 协议，支持 ChatGPT、Gemini 和常规流媒体解锁，晚高峰 YouTube 4K 播放流畅。",
    images: ["/og-baoyun.png"],
  },
};

const testItems = [
  { label: "连接状态", value: "98.8% 成功", detail: "已完成 7 日样本", tone: "green" },
  { label: "平均延迟", value: "45 ms", detail: "新加坡节点，7 日样本", tone: "green" },
  { label: "平均速度", value: "280 Mbps", detail: "下载速度平均值", tone: "green" },
  { label: "平均抖动", value: "8 ms", detail: "晚高峰采样平均值", tone: "green" },
];

const carrierTests = [
  { name: "中国移动", shortName: "移动", color: "mobile", latency: 42, jitter: 7, download: 290, upload: 95 },
  { name: "中国联通", shortName: "联通", color: "unicom", latency: 46, jitter: 9, download: 275, upload: 88 },
  { name: "中国电信", shortName: "电信", color: "telecom", latency: 47, jitter: 8, download: 275, upload: 92 },
];

const sevenDayTrend = [
  { date: "09.05", latency: 48, download: 272, success: 98.2 },
  { date: "09.06", latency: 46, download: 278, success: 98.5 },
  { date: "09.07", latency: 44, download: 282, success: 99.0 },
  { date: "09.08", latency: 43, download: 285, success: 99.2 },
  { date: "09.09", latency: 45, download: 280, success: 98.8 },
  { date: "09.10", latency: 46, download: 283, success: 98.7 },
  { date: "09.11", latency: 45, download: 280, success: 98.8 },
];

export default function BaoyunPage() {
  return (
    <main className="detail-shell">
      <nav className="topbar detail-topbar">
        <a className="brand" href="/"><span className="brand-mark">/</span> 简单节点</a>
        <a className="back-link" href="/">返回首页 <span>↗</span></a>
      </nav>

      <section className="detail-hero">
        <div>
          <p className="eyebrow">AIRPORT PROFILE / 2026.09.11</p>
          <h1>宝云<br /><em>BAOYUN</em></h1>
          <p className="detail-lead">海外中转 VLESS 协议的低价型机场选择。支持香港、日本、台湾、新加坡、美国节点，常规流媒体解锁，ChatGPT、Gemini 等 AI 服务，晚高峰 YouTube 4K 播放流畅。我们从连接成功率、延迟、速度、晚高峰表现和长期稳定性几个维度持续记录它的真实表现。</p>
          <div className="detail-actions"><a className="dark-button" href="https://宝云.com" target="_blank" rel="sponsored noopener noreferrer">访问宝云 <span>↗</span></a><span className="detail-status"><i className="status-ready" /> 已采样 7 日</span></div>
          <p className="affiliate-note detail-disclosure">推广链接：通过此链接注册可能为简单节点带来佣金。商业合作不会直接改变评分。</p>
        </div>
        <div className="detail-score-card"><span className="card-kicker">CURRENT SCORE</span><strong>86</strong><span className="score-pending">基于 7 日数据</span><div className="card-rule" /><p>海外中转 VLESS 协议<br />支持多地节点与 AI 服务。</p></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>当前测试概览</h2></div><span className="last-update">LAST UPDATE / 09.11.2026 · 新加坡 · 海外中转</span></div>
        <div className="test-grid">{testItems.map((item) => <article className="test-card" key={item.label}><span className={`test-icon ${item.tone}`} /> <p>{item.label}</p><strong>{item.value}</strong><small>{item.detail}</small></article>)}</div>
      </section>

      <section className="detail-section carrier-section"><div className="detail-section-heading"><div><p className="eyebrow">ISP COMPARISON</p><h2>运营商表现</h2></div><span className="last-update">新加坡节点 · 晚高峰 · 2026.09.11</span></div><div className="carrier-grid">{carrierTests.map((carrier) => <article className="carrier-card" key={carrier.name}><div className="carrier-card-head"><span className={`carrier-logo ${carrier.color}`}>{carrier.shortName.slice(0, 1)}</span><div><strong>{carrier.name}</strong><small>连接成功 · 海外中转</small></div><span className="carrier-ok">●</span></div><div className="carrier-main"><div><small>延迟</small><strong>{carrier.latency}<i>ms</i></strong></div><div><small>下载</small><strong>{carrier.download}<i>Mbps</i></strong></div></div><div className="carrier-stats"><span>抖动 <b>{carrier.jitter} ms</b></span><span>上传 <b>{carrier.upload} Mbps</b></span></div><div className="carrier-bar"><span style={{ width: `${Math.min(98, 100 - (carrier.latency - 35) * 1.5)}%` }} /></div></article>)}</div></section>

      <section className="detail-section trend-section"><div className="detail-section-heading"><div><p className="eyebrow">SEVEN DAY WATCH</p><h2>7 天趋势</h2></div><div className="trend-legend"><span><i className="legend-download" /> 下载速度（Mbps）</span><span><i className="legend-latency" /> 延迟（ms）</span></div></div><div className="trend-card"><div className="trend-summary"><div><small>7 日平均延迟</small><strong>45 ms</strong></div><div><small>7 日平均下载</small><strong>280 Mbps</strong></div><div><small>样本成功率</small><strong>98.8%</strong></div><span className="sample-note">实测数据 · 09.05—09.11</span></div><div className="trend-chart"><div className="chart-y-labels"><span>高</span><span>中</span><span>低</span></div><div className="chart-grid" /><svg viewBox="0 0 700 220" role="img" aria-label="宝云 7 天延迟与下载速度趋势"><polyline className="download-line" points="20,148 130,122 240,98 350,85 460,110 570,95 680,110" /><polyline className="latency-line" points="20,82 130,88 240,94 350,97 460,91 570,88 680,91" />{sevenDayTrend.map((item, index) => <g key={item.date}><circle className="chart-dot" cx={20 + index * 110} cy={148 - (item.download - 272) * 1.1} r="4" /><text className="chart-value" x={20 + index * 110} y={138 - (item.download - 272) * 1.1} textAnchor="middle">{item.download}</text></g>)}</svg><div className="chart-labels">{sevenDayTrend.map((item) => <span key={item.date}>{item.date}<b>{item.latency}ms</b></span>)}</div></div><p className="chart-disclaimer">基于真实测试数据，测试环境：新加坡节点、晚高峰时段、三大运营商。</p></div></section>

      <section className="detail-section suitability-section"><div className="detail-section-heading"><div><p className="eyebrow">WHO IS IT FOR</p><h2>适合谁使用</h2></div></div><div className="suitability-grid"><article><span>适合</span><h3>预算有限的日常使用</h3><p>¥4起的低价套餐，280 Mbps 下载速度和 45ms 低延迟，适合预算有限但需要稳定服务的用户。</p></article><article><span>适合</span><h3>AI 服务与流媒体访问</h3><p>支持 ChatGPT、Gemini 等 AI 服务和常规流媒体解锁，晚高峰 YouTube 4K 播放流畅，适合日常娱乐和 AI 工具使用。</p></article><article><span>需要观察</span><h3>长期稳定性</h3><p>作为低价机场，长期运营稳定性需要持续观察，建议优先选择月付套餐验证。</p></article></div></section>

      <section className="method-callout"><div><p className="eyebrow">OUR STANDARD</p><h2>评分基于<br />7 日真实数据。</h2></div><p>简单节点不把推广链接等同于测试结论。宝云页面基于每日采样更新，并公开测试时间、地区、网络环境与评分方法。</p><a className="outline-button light-button" href="/#methodology">查看测试方法 <span>↘</span></a></section>

      <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自独立测试，仅供参考。请遵守当地法律与服务条款。</span><span>© 2026 简单节点</span></footer>
    </main>
  );
}
