// Simplified geography (approximate lon/lat) for a schematic map. Not survey-accurate.
export const K = 26, LON0 = 34, LAT0 = 33.6;
export const px = (lon: number, lat: number): [number, number] => [(lon - LON0) * K + 10, (LAT0 - lat) * K + 10];
const poly = (pts: [number, number][]) => "M" + pts.map(([lo, la]) => px(lo, la).map((v) => v.toFixed(1)).join(" ")).join("L") + "Z";

export const SHAPES: Record<string, string> = {
  "Saudi Arabia": poly([[34.9, 29.4], [36.0, 29.2], [37.0, 29.9], [37.5, 30.0], [38.0, 30.5], [39.2, 32.1], [42.0, 31.1], [44.7, 29.2], [46.55, 29.1], [47.5, 28.5], [48.4, 28.5], [49.5, 27.2], [50.2, 26.3], [50.8, 24.75], [51.6, 24.3], [55.2, 22.7], [55.67, 22.0], [55.0, 20.0], [52.0, 19.0], [48.0, 18.2], [43.2, 17.4], [42.7, 16.4], [41.0, 19.5], [39.0, 22.0], [37.0, 25.5], [35.5, 28.0]]),
  "Jordan": poly([[34.95, 29.5], [36.0, 29.2], [37.0, 29.9], [37.5, 30.0], [38.0, 30.5], [39.2, 32.1], [38.8, 33.4], [36.8, 32.3], [35.5, 32.4], [35.4, 31.4]]),
  "Kuwait": poly([[46.55, 29.1], [47.0, 29.95], [48.0, 30.0], [48.4, 29.4], [48.0, 28.6], [47.5, 28.5]]),
  "Qatar": poly([[50.8, 24.75], [51.0, 26.15], [51.6, 25.9], [51.5, 24.6], [51.25, 24.3]]),
  "UAE": poly([[51.6, 24.3], [52.5, 24.2], [54.0, 24.1], [55.3, 25.3], [56.3, 26.1], [56.1, 24.9], [55.8, 24.2], [55.9, 23.0], [55.7, 22.6], [55.2, 22.7]]),
  "Oman": poly([[56.1, 24.9], [57.5, 23.8], [59.8, 22.5], [58.5, 20.4], [57.7, 19.0], [55.2, 17.2], [52.0, 19.0], [55.0, 20.0], [55.67, 22.0], [55.7, 22.6], [55.9, 23.0], [55.8, 24.2]]),
};
export const BAHRAIN: [number, number] = px(50.55, 26.05);
export const LABELS: Record<string, [number, number]> = {
  "Saudi Arabia": px(43.5, 24.5), "Jordan": px(36.6, 31.3), "Kuwait": px(46.8, 29.5), "Bahrain": px(50.4, 26.7), "Qatar": px(51.35, 25.2), "UAE": px(53.2, 24.4), "Oman": px(57.2, 21.2),
};

export type Corridor = { id: string; a: string; b: string; name: string; crossing: string; summary: string; href: string; node: [number, number]; needs: string[] };
export const CORRIDORS: Corridor[] = [
  { id: "sa-bh", a: "Saudi Arabia", b: "Bahrain", name: "Saudi Arabia ↔ Bahrain", crossing: "King Fahd Causeway", summary: "Cross-border road travel between Saudi Arabia and Bahrain via the King Fahd Causeway.", href: "/bahrain/", node: px(50.4, 26.15), needs: ["Documents", "Vehicle requirements", "Border process", "Family travel", "Business travel"] },
  { id: "qa-sa", a: "Qatar", b: "Saudi Arabia", name: "Qatar ↔ Saudi Arabia", crossing: "Abu Samra / Salwa", summary: "Practical information for road travel between Qatar and Saudi Arabia through the principal land gateway.", href: "/qatar/", node: px(50.85, 24.7), needs: ["Documents", "Border process", "Family travel", "Group travel"] },
  { id: "ae-sa", a: "UAE", b: "Saudi Arabia", name: "UAE ↔ Saudi Arabia", crossing: "Al Ghuwaifat / Al Batha", summary: "Planning international road travel between the UAE and Saudi Arabia.", href: "/uae/", node: px(51.6, 24.3), needs: ["Documents", "Vehicle requirements", "Business travel", "Multi-country road travel"] },
  { id: "om-ae", a: "Oman", b: "UAE", name: "Oman ↔ UAE", crossing: "Several land crossings", summary: "Cross-border road planning between Oman and the UAE, including route selection and vehicle considerations.", href: "/oman/", node: px(55.9, 24.4), needs: ["Documents", "Vehicle requirements", "Family travel", "Multi-country road travel"] },
  { id: "kw-sa", a: "Kuwait", b: "Saudi Arabia", name: "Kuwait ↔ Saudi Arabia", crossing: "Nuwaiseeb–Khafji / Salmi", summary: "International road travel between Kuwait and Saudi Arabia, including border preparation and route planning.", href: "/kuwait/", node: px(48.2, 28.55), needs: ["Documents", "Border process", "Family travel", "Group travel"] },
  { id: "om-sa", a: "Oman", b: "Saudi Arabia", name: "Oman ↔ Saudi Arabia", crossing: "Long-distance desert corridor", summary: "Long-distance international road travel between Oman and Saudi Arabia.", href: "/oman/", node: px(55.3, 21.5), needs: ["Vehicle requirements", "Group travel", "Multi-country road travel"] },
  { id: "jo-sa", a: "Jordan", b: "Saudi Arabia", name: "Jordan ↔ Saudi Arabia", crossing: "Al-Omari / Mudawara / Al-Durra", summary: "Regional cross-border road travel between Jordan and Saudi Arabia.", href: "/jordan/", node: px(37.0, 29.9), needs: ["Documents", "Border process", "Family travel", "Business travel"] },
];

export const COUNTRIES = ["Saudi Arabia", "UAE", "Bahrain", "Qatar", "Kuwait", "Oman", "Jordan"];

export type Pair = { kind: "same" } | { kind: "direct"; c: Corridor } | { kind: "via"; via: string };
export function pairInfo(a: string, b: string): Pair {
  if (!a || !b || a === b) return { kind: "same" };
  const c = CORRIDORS.find((x) => (x.a === a && x.b === b) || (x.a === b && x.b === a));
  if (c) return { kind: "direct", c };
  return { kind: "via", via: a === "Oman" || b === "Oman" ? "the UAE and/or Saudi Arabia" : "Saudi Arabia" };
}
