// Generates 1200x630 JPG share images into public/og/.
// Run locally when titles or routes change:  NODE_PATH=$(npm root -g) node scripts/og.mjs
// (needs Playwright + Chromium; set CHROMIUM_PATH if it is not on the default path)
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { readFileSync } from "fs";
const font = (w) => readFileSync(new URL(`./fonts/poppins-${w}.woff2`, import.meta.url)).toString("base64");
const FONTS = `@font-face{font-family:Poppins;font-weight:500;src:url(data:font/woff2;base64,${font(500)}) format("woff2")}@font-face{font-family:Poppins;font-weight:700;src:url(data:font/woff2;base64,${font(700)}) format("woff2")}`;
const { chromium } = require("playwright");

const CARDS = [
  ["home", "GCC ELITE TRANSPORT", "Private Cross-Border Road Travel", "Saudi Arabia · UAE · Bahrain · Qatar · Kuwait · Oman · Jordan"],
  ["cross-border-transfers", "CROSS-BORDER TRANSFERS", "Private Cross-Border Transportation Across the GCC", "Route-specific vehicles, drivers and border planning"],
  ["border-guides", "BORDER GUIDES", "GCC Border Crossing Guides", "Documents, vehicle rules and route planning"],
  ["routes", "ROUTE EXPLORER", "GCC Cross-Border Routes", "City-to-city private road journeys across borders"],
  ["saudi-arabia", "SAUDI ARABIA", "Saudi Arabia Cross-Border Transportation", "Bahrain · UAE · Qatar · Kuwait · Oman · Jordan"],
  ["bahrain", "BAHRAIN ↔ SAUDI ARABIA", "Bahrain Cross-Border Transportation", "Via the King Fahd Causeway"],
  ["uae", "UAE ↔ SAUDI ARABIA / OMAN", "UAE Cross-Border Transportation", "Saudi Arabia and Oman road corridors"],
  ["qatar", "QATAR ↔ SAUDI ARABIA", "Qatar Cross-Border Transportation", "Through Abu Samra and Salwa"],
  ["kuwait", "KUWAIT ↔ SAUDI ARABIA", "Kuwait Cross-Border Transportation", "The southern road corridor"],
  ["oman", "OMAN ↔ UAE / SAUDI ARABIA", "Oman Cross-Border Transportation", "Three road corridors from Oman"],
  ["jordan", "JORDAN ↔ SAUDI ARABIA", "Jordan Cross-Border Transportation", "A regional road corridor into the GCC"],
  ["fleet", "FLEET", "Vehicles for Cross-Border Journeys", "Sedan · SUV · Large SUV · Van · Minibus"],
  ["corporate", "CORPORATE", "Corporate Cross-Border Transportation", "Executive and team travel across GCC borders"],
  ["airport-transfers", "AIRPORT-CONNECTED JOURNEYS", "Arrive Here. Continue Across the Border.", "Road journeys that start or end at an airport"],
  ["about", "ABOUT", "Roads That Cross Borders", "Private international road transportation"],
  ["contact", "CONTACT", "Request a Cross-Border Quote", "WhatsApp +966 57 580 6733"],
  ["legal", "GCC ELITE TRANSPORT", "Policies and Terms", "gccelitetransport.com"],
  ["route-makkah-to-dubai", "SAUDI ARABIA → UAE", "Makkah to Dubai", "Private cross-border road journey"],
  ["route-makkah-to-manama", "SAUDI ARABIA → BAHRAIN", "Makkah to Manama", "Via the King Fahd Causeway"],
  ["route-riyadh-to-dubai", "SAUDI ARABIA → UAE", "Riyadh to Dubai", "Private cross-border road journey"],
  ["route-dammam-to-manama", "SAUDI ARABIA → BAHRAIN", "Dammam to Manama", "Across the King Fahd Causeway"],
  ["route-muscat-to-dubai", "OMAN → UAE", "Muscat to Dubai", "Across the Oman–UAE border"],
  ["route-amman-to-riyadh", "JORDAN → SAUDI ARABIA", "Amman to Riyadh", "A regional cross-border road journey"],
  ["guide-saudi-bahrain", "BORDER GUIDE · SAUDI ARABIA ↔ BAHRAIN", "King Fahd Causeway", "Documents, insurance and the island checkpoint"],
  ["guide-qatar-saudi", "BORDER GUIDE · QATAR ↔ SAUDI ARABIA", "Abu Samra / Salwa", "Qatar's only land border"],
  ["guide-uae-saudi", "BORDER GUIDE · UAE ↔ SAUDI ARABIA", "Al Ghuwaifat / Al Batha", "The UAE–Saudi land crossing"],
  ["guide-oman-uae", "BORDER GUIDE · OMAN ↔ UAE", "Oman–UAE Border Crossings", "Hatta, Al Ain, Khatmat Malaha, Musandam"],
  ["guide-kuwait-saudi", "BORDER GUIDE · KUWAIT ↔ SAUDI ARABIA", "Nuwaiseeb–Khafji and Salmi", "The two Kuwait–Saudi crossings"],
  ["guide-oman-saudi", "BORDER GUIDE · OMAN ↔ SAUDI ARABIA", "The Empty Quarter Crossing", "Al-Rub' Al-Khali: Ibri to Al-Ahsa"],
  ["guide-jordan-saudi", "BORDER GUIDE · JORDAN ↔ SAUDI ARABIA", "Al-Omari, Mudawara, Al-Durra", "Three crossings, one border"],
  ["travel-guides", "TRAVEL GUIDES", "GCC Road Travel Guides", "Answers before you cross a border"],
  ["article-saudi-residents-crossing-by-road", "TRAVEL GUIDE", "Saudi Residents Crossing a GCC Border by Road", "Exit/re-entry, residency and entry rules"],
  ["article-gcc-citizens-residents-visitors-land-borders", "TRAVEL GUIDE", "Citizens, Residents and Visitors at GCC Borders", "Who you are decides what you carry"],
  ["article-children-across-gcc-land-borders", "TRAVEL GUIDE", "Traveling With Children Across GCC Borders", "Documents, consent, seats and timing"],
  ["article-driving-your-own-car-vs-private-transfer", "TRAVEL GUIDE", "Drive Yourself or Book a Private Transfer?", "Crossing a GCC border by road"],
  ["article-planning-a-multi-country-gcc-road-trip", "TRAVEL GUIDE", "Planning a Multi-Country GCC Road Trip", "Borders, visas, order and buffers"],
];

const html = (eyebrow, title, sub) => `<!doctype html><html><head><meta charset="utf-8">
<style>${FONTS}*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;font-family:Poppins,Arial,sans-serif;background:#0B1F33;color:#fff;position:relative;overflow:hidden}
.glow{position:absolute;right:-120px;bottom:-220px;width:720px;height:720px;border-radius:50%;background:radial-gradient(circle,rgba(201,161,74,.45),rgba(201,161,74,0) 65%)}
.road{position:absolute;left:0;bottom:0;width:1200px;height:630px}
.wrap{position:absolute;inset:0;padding:64px 80px 96px;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:16px}.logo b{font-size:28px}.logo span{display:block;font-size:13px;letter-spacing:.3em;color:#C9A14A}
.eyebrow{margin-top:auto;font-size:22px;letter-spacing:.18em;color:#C9A14A;font-weight:500}
h1{margin-top:14px;font-size:${title.length > 34 ? 58 : 72}px;line-height:1.08;font-weight:700;max-width:960px}
p{margin-top:18px;font-size:28px;color:rgba(255,255,255,.78)}</style></head><body>
<div class="glow"></div>
<svg class="road" viewBox="0 0 1200 630"><path d="M-20 612 C 300 612 460 572 760 584 S 1060 610 1220 566" fill="none" stroke="#C9A14A" stroke-width="4" stroke-dasharray="14 14" opacity=".7"/><circle cx="760" cy="584" r="9" fill="#C9A14A"/></svg>
<div class="wrap"><div class="logo"><svg width="60" height="60" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#123B5D"/><path d="M8 27c4-9 8-13 12-13s8 4 12 13" fill="none" stroke="#C9A14A" stroke-width="2.4" stroke-linecap="round"/><path d="M13 29h14" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg><div><b>GCC Elite</b><span>TRANSPORT</span></div></div>
<div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${sub}</p></div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [slug, e, t, s] of CARDS) {
  await page.setContent(html(e, t, s), { waitUntil: "networkidle" });
  await page.screenshot({ path: `public/og/${slug}.jpg`, type: "jpeg", quality: 82 });
}
await browser.close();
console.log(`wrote ${CARDS.length} images`);
