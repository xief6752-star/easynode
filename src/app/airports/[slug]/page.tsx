import type { Metadata } from "next";
import { notFound } from "next/navigation";

const airports = {
  shunyun: { name: "瞬云", english: "SHUNYUN", price: "¥16 起/月", route: "中转 + 专线", rating: "B+", score: 86, latency: 110, speed: "198", color: "coral", summary: "中转与专线结合的日常型机场，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "日常浏览、高清视频和希望兼顾线路选择的用户", watch: "当前评分和指标属于阶段性展示结果，仍需持续导入更多独立样本。", link: "https://ccc.jichang.best/#/register?code=MhKYAnsG" },
  huanyuyun: { name: "寰宇云", english: "HUANYUYUN", price: "¥14 起/月", route: "IPLC 专线", rating: "A", score: 92, latency: 112, speed: "210", color: "teal", summary: "以 IPLC 专线为主要卖点的机场，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "重视晚高峰稳定性、视频流媒体和跨境服务访问的用户", watch: "专线表现需要按地区、运营商和具体节点分别验证，当前评级不等于完整长期评分。", link: "https://hyy.52kok.cn/#/register?code=CPBmzXgk" },
  jindouyun: { name: "筋斗云", english: "JINDOUYUN", price: "¥16 起/月", route: "IEPL / IPLC 专线", rating: "A", score: 92, latency: 114, speed: "205", color: "yellow", summary: "以 IEPL/IPLC 优化线路为特色，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "视频会议、流媒体和对高峰期线路有要求的用户", watch: "专线节点的真实表现会随入口、运营商和使用时间变化，建议先月付验证。", link: "https://jdy.52kok.cn/#/register?code=wUKiwosG" },
  jiuyun: { name: "九云", english: "JIUYUN", price: "¥6 起/月", route: "VLESS 海外中转", rating: "B+", score: 86, latency: 116, speed: "192", color: "blue", summary: "价格门槛较低的海外中转方案，本页按当前阶段测试样本展示约 200 Mbps 下载速度。", goodFor: "预算有限、需要低成本备用线路或轻量日常使用的用户", watch: "低价方案更需要关注长期稳定性、流量规则、退款政策和运营持续性。", link: "https://888.jiuyundl.com/#/register?code=SDsIO7kq" },
  baoyun: { name: "宝云", english: "BAOYUN", price: "¥4 起/月", route: "VLESS 海外中转", rating: "B+", score: 86, latency: 45, speed: "280", color: "green", summary: "面向轻量使用的海外 VLESS 中转方案，本页按本地评测资料展示约 280 Mbps 下载速度。", goodFor: "预算有限、日常浏览和需要备用线路的用户", watch: "低价中转方案的晚高峰表现、流量规则和长期运营情况仍需持续观察。", link: "https://888by.baoyundl.com/#/register?code=089ta958" },
  speedworld: { name: "速界", english: "SPEEDWORLD", price: "¥6 起/月", route: "IEPL 专线", rating: "A-", score: 91, latency: 12, speed: "700+", color: "purple", summary: "采用 IEPL 专线与企业级加密方案，本页按本地评测资料展示晚高峰约 700 Mbps 下载速度。", goodFor: "重视晚高峰速度、办公连接和专线稳定性的用户", watch: "专线名称和峰值带宽来自公开评测资料，仍需结合自己的地区和运营商复测。", link: "https://momlise.szjtfp.xyz/#/?code=GPjugEyt" },
  jilianyun: { name: "极连云", english: "JILIANYUN", price: "¥18 起/月", route: "全 IPLC 专线", rating: "A", score: 92, latency: 20, speed: "600+", color: "violet", summary: "以全 IPLC 专线和原生 IP 解锁为特色，本页按本地评测资料展示晚高峰约 600 Mbps 下载速度。", goodFor: "需要稳定专线、流媒体解锁和晚高峰持续性的用户", watch: "原生 IP 与专线表现会随节点和时间变化，建议先按月验证实际体验。", link: "https://haozevpn.jlyvipaff.com/#/?code=KUKfOY13" },
  miaomiaoyun: { name: "秒秒云", english: "MIAOMIAOYUN", price: "¥14 起/月", route: "VLESS 海外中转", rating: "B", score: 82, latency: 26, speed: "300+", color: "pink", summary: "面向日常使用的海外中转方案，本页按本地评测资料展示晚高峰约 300 Mbps 下载速度。", goodFor: "需要常规流媒体、网页浏览和中等流量套餐的用户", watch: "中转线路晚高峰可能存在波动，购买前应确认流量、退款和节点规则。", link: "https://m2.mouhiojl.com:8888/#/register?code=6u2dHtD4" },
  shanshuiyun: { name: "山水云", english: "SHANSHUIYUN", price: "¥15 起/月", route: "优质中转", rating: "B+", score: 84, latency: 24, speed: "320+", color: "green", summary: "以优质中转和不限时套餐为卖点，本页按本地评测资料展示晚高峰约 320 Mbps 下载速度。", goodFor: "希望灵活使用、偶尔备用并关注套餐周期的用户", watch: "不限时套餐的实际价值取决于流量和节点限制，购买前请核对当前条款。", link: "https://sldm1.ssyylf.com/#/register?code=4WTXbMwy" },
  jinyun: { name: "锦云", english: "JINYUN", price: "¥6 起/月", route: "海外中转", rating: "B", score: 81, latency: 30, speed: "260+", color: "pink", summary: "主打小流量与低价套餐的海外中转服务，本页按本地评测资料展示晚高峰约 260 Mbps 下载速度。", goodFor: "轻度使用、预算有限或需要备用机场的用户", watch: "低价小流量套餐要重点确认额度、重置周期和超额规则。", link: "https://jybdw1.wanhlj.com:8888/#/register?code=0xeLRRWB" },
  liyun: { name: "鲤云", english: "LIYUN", price: "¥7 起/月", route: "海外中转", rating: "B", score: 82, latency: 28, speed: "280+", color: "teal", summary: "提供小流量灵活套餐的海外中转服务，本页按本地评测资料展示晚高峰约 280 Mbps 下载速度。", goodFor: "轻量浏览、备用线路和想控制月度开支的用户", watch: "小流量套餐适合按需使用，长期订阅前请确认套餐有效期和流量规则。", link: "https://ly888.liydl.com:8888/#/register?code=ihbhLNee" },
  xiongmaocloud: { name: "熊猫cloud", english: "XIONGMAOCLOUD", price: "¥7 起/月", route: "按需计费中转", rating: "B", score: 81, latency: 29, speed: "270+", color: "yellow", summary: "主打按需计费与小流量套餐，本页按本地评测资料展示晚高峰约 270 Mbps 下载速度。", goodFor: "轻度用户、临时备用和希望按实际用量付费的用户", watch: "按需计费方案需要关注流量价格、有效期和长期运营情况。", link: "https://cl888.cailudl.com:9999/#/register?code=d4UTPba8" },
  yuntu: { name: "云图", english: "YUNTU", price: "¥12 起/月", route: "中转 + 专线", rating: "A-", score: 91, latency: 105, speed: "220+", color: "blue", summary: "中转与专线结合的均衡方案，本页按当前阶段测试样本展示约 220 Mbps 下载速度。", goodFor: "希望快速开始体验机场线路，重视性价比的用户", watch: "本周推荐服务，正式评分将根据每日测速和长期稳定性数据持续更新。", link: "https://vip.ytjcok.org/#/register?code=iV8ahCNE" },
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
    title: `${airport.name}机场 VPN 测试与评测 - ${airport.route}线路真实测速`,
    description: `${airport.name}(${airport.english})机场 VPN 详细评测：${airport.route}线路，平均延迟${airport.latency}ms，下载速度${airport.speed} Mbps，${airport.price}。${airport.summary}`,
    keywords: [`${airport.name}机场`, `${airport.name}VPN`, `${airport.name}测速`, `${airport.name}评测`, airport.english, airport.route, "机场测速", "VPN测评", "晚高峰测速", "机场推荐"],
    alternates: {
      canonical: `/airports/${slug}`,
      languages: {
        "zh-CN": `/airports/${slug}`,
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
      title: `${airport.name}机场 VPN 测试与评测 | 简单节点`,
      description: `${airport.summary} ${airport.route}线路，延迟${airport.latency}ms，速度${airport.speed} Mbps。`,
      url: `/airports/${slug}`,
      type: "article",
      siteName: "简单节点",
      locale: "zh_CN",
      images: [
        {
          url: `/og-airport-${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${airport.name}机场测评 - 简单节点`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${airport.name}机场 VPN 测试与评测`,
      description: `${airport.route}线路 | 延迟${airport.latency}ms | 速度${airport.speed} Mbps | ${airport.price}`,
      images: [`/og-airport-${slug}.png`],
    },
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
  <section className="detail-hero airport-review-hero"><div><p className="eyebrow">AIRPORT REVIEW / 2026.09.11</p><h1>{data.name}<br /><em>{data.english}</em></h1><p className="detail-lead">{data.summary}本页根据当前阶段的公开信息与测试样本整理，延迟约为 110ms 区间展示值，正式结论以持续测试数据为准。</p><div className="detail-actions">{data.link ? <a className="dark-button" href={data.link} target="_blank" rel="sponsored noopener noreferrer">访问机场 <span>↗</span></a> : <a className="dark-button" href="/articles/how-we-test-vpn">查看测试方法 <span>↗</span></a>}<span className="detail-status"><i /> 阶段数据已整理</span></div><p className="affiliate-note detail-disclosure">本站会持续补充测试记录，公开说明测试条件，评分与推广链接分开处理。</p></div><div className="detail-score-card"><span className="card-kicker">CURRENT RATING</span><strong>{data.rating}</strong><span className="score-pending">界面换算分 {data.score} / 100</span><div className="card-rule" /><p>当前阶段参考评级：{data.rating}<br />不是长期稳定性承诺。</p></div></section>
  <section className="detail-section"><div className="detail-section-heading"><div><p className="eyebrow">TEST SNAPSHOT</p><h2>核心指标</h2></div><span className="last-update">CURRENT SAMPLE / 2026.09.11</span></div><div className="test-grid"><Metric label="参考延迟" value={`${data.latency} ms`} detail="约 110ms 区间展示值" /><Metric label="阶段速度" value={`${data.speed} Mbps`} detail="当前样本展示值" /><Metric label="线路类型" value={data.route} detail="页面资料整理" /><Metric label="起步价格" value={data.price} detail="以实际套餐页面为准" /></div></section>
  <section className="detail-section review-facts"><div className="detail-section-heading"><div><p className="eyebrow">REVIEW NOTES</p><h2>怎么理解这份测评</h2></div></div><div className="suitability-grid"><article><span>适合人群</span><h3>{data.goodFor}</h3><p>先按自己的地区和运营商进行小额、短周期验证，再决定是否长期使用。</p></article><article><span>线路观察</span><h3>{data.route}</h3><p>线路名称来自公开资料，实际节点路径、协议和入口可能随套餐与时间变化。</p></article><article><span>需要注意</span><h3>不要只看峰值速度</h3><p>{data.watch}</p></article></div></section>
  <section className="method-callout"><div><p className="eyebrow">NEXT STEP</p><h2>先看条件，<br />再做选择。</h2></div><p>简单节点会继续补充真实测试记录。你可以提交 CSV 数据，我们会更新延迟、运营商、晚高峰和 7 天趋势。</p><a className="outline-button light-button" href="/articles">查看测评文章 <span>↗</span></a></section>
  <footer><span className="brand"><span className="brand-mark">/</span> 简单节点</span><span>数据来自公开资料与独立测试，仅供比较参考。</span><span>© 2026 简单节点</span></footer></main>;
}
