const host = "jiandanjiedian.com";
const key = "2543451F9B524E9C88E3D644CF47F577";
const keyLocation = `https://${host}/${key}.txt`;
const urls = [
  "",
  "airports/yuntu",
  "airports/shunyun",
  "airports/huanyuyun",
  "airports/jindouyun",
  "airports/jiuyun",
  "recommendations",
  "wiki",
  "wiki/what-is-airport-vpn",
  "wiki/iepl-iplc-dedicated-line",
  "wiki/latency-and-jitter",
  "wiki/vpn-test-methodology",
  "wiki/peak-hour-testing",
  "wiki/streaming-unlock-testing",
  "wiki/monthly-vs-yearly-plan",
  "wiki/traffic-multiplier-rules",
  "wiki/client-selection-guide",
  "wiki/bgp-vs-cn2-gia",
  "wiki/airport-security-risks",
  "wiki/vpn-speed-test-report",
  "wiki/packet-loss-and-reconnect",
  "wiki/airport-test-location-guide",
  "wiki/subscription-error-fixes",
].map((path) => `https://${host}/${path}`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList: urls }),
});

const body = await response.text();
console.log(`IndexNow response: ${response.status} ${response.statusText}`);
if (body) console.log(body);
if (!response.ok && response.status !== 202) process.exitCode = 1;
