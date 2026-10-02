// Business facts live here. Only publish what the business has confirmed.
export const SITE = {
  name: "GCC Elite Transport",
  url: "https://gccelitetransport.com",
  tagline: "Private GCC Cross-Border Transportation",
  phoneDisplay: "+966 57 580 6733",
  phoneTel: "+966575806733",
  whatsapp: "966575806733",
  email: "", // add when available, e.g. "info@gccelitetransport.com" (footer hides it while empty)
};

export const waLink = (text = "Hello GCC Elite Transport, I would like a cross-border transport quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Cross-Border Transfers", href: "/cross-border-transfers/" },
  { label: "Routes", href: "/routes/" },
  { label: "Fleet", href: "/fleet/" },
  { label: "Corporate Travel", href: "/corporate/" },
  { label: "Border Guides", href: "/border-guides/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const COUNTRIES = [
  { id: "saudi-arabia", name: "Saudi Arabia", href: "/saudi-arabia/", hue: "#1f5d46",
    text: "Private road transfers linking Saudi cities and airports with Bahrain, Qatar, Kuwait, the UAE and Oman, subject to the route." },
  { id: "bahrain", name: "Bahrain", href: "/bahrain/", hue: "#6d1f2f",
    text: "Private road transfers connecting Bahrain with major GCC destinations, including journeys via the King Fahd Causeway where applicable." },
  { id: "uae", name: "United Arab Emirates", href: "/uae/", hue: "#7a2330",
    text: "Pick-ups across the Emirates for road journeys toward Oman and, where the route allows, Saudi Arabia and other GCC markets." },
  { id: "qatar", name: "Qatar", href: "/qatar/", hue: "#5b1a35",
    text: "Private transfers between Doha and the Saudi land border, with onward arrangements confirmed for each journey." },
  { id: "kuwait", name: "Kuwait", href: "/kuwait/", hue: "#1e5a3c",
    text: "Road transfers from Kuwait City and nearby areas toward Saudi Arabia and onward GCC destinations, planned per route." },
  { id: "oman", name: "Oman", href: "/oman/", hue: "#7a2a2a",
    text: "Private journeys connecting Muscat and northern Oman with the UAE, plus longer routes toward Saudi Arabia where available." },
];

export const SERVICES = [
  { title: "Private Cross-Border Transfers", text: "Pre-booked private transportation for individuals, families and groups traveling between GCC countries.", href: "/cross-border-transfers/" },
  { title: "Airport-to-Airport & Airport Transfers", text: "Travel between international airports and destinations across the GCC without arranging separate local transport.", href: "/airport-transfers/" },
  { title: "Corporate & Executive Travel", text: "Professional transportation for executives, companies, consultants and teams traveling across GCC markets.", href: "/corporate/" },
  { title: "Multi-Day & Return Journeys", text: "For business trips, family travel, events and extended GCC road journeys requiring a dedicated vehicle.", href: "/cross-border-transfers/" },
];

export const ROUTES = [
  { from: "Bahrain", to: "Saudi Arabia", corridor: "King Fahd Causeway", vehicles: "Sedan, SUV, Van", trip: "One-way & return" },
  { from: "UAE", to: "Oman", corridor: "UAE–Oman land crossings", vehicles: "Sedan, SUV, Van", trip: "One-way & return" },
  { from: "Kuwait", to: "Saudi Arabia", corridor: "Al Khafji / Al Nuwaiseeb", vehicles: "SUV, Van, Minibus", trip: "One-way & return" },
  { from: "Qatar", to: "Saudi Arabia", corridor: "Salwa / Abu Samra", vehicles: "Sedan, SUV, Van", trip: "One-way & return" },
  { from: "UAE", to: "Saudi Arabia", corridor: "Saudi–UAE land corridors", vehicles: "SUV, Van", trip: "Confirmed per journey" },
  { from: "Oman", to: "Saudi Arabia", corridor: "Saudi–Oman land corridors", vehicles: "SUV, Van", trip: "Confirmed per journey" },
];

export const STEPS = [
  { n: "01", title: "Route Assessment", text: "Pickup, destination, border and vehicle requirements are reviewed before confirmation." },
  { n: "02", title: "Vehicle & Driver", text: "Your vehicle category and driver arrangement are confirmed according to the route." },
  { n: "03", title: "Border Preparation", text: "Passengers receive route-specific information about documents and procedures that may apply." },
  { n: "04", title: "Journey", text: "Travel from the agreed pickup point toward your final destination with support throughout the journey." },
];

export const FLEET = [
  { id: "sedan", name: "Executive Sedan", pax: "1–3 passengers", bags: "Suitcases for a small party", use: "Business travel and solo or couple journeys.", w: 300, h: 74 },
  { id: "suv", name: "Premium SUV", pax: "Capacity varies by model", bags: "Extra luggage space", use: "Families, couples and passengers carrying more luggage.", w: 300, h: 92 },
  { id: "lsuv", name: "Large SUV", pax: "Capacity varies by model", bags: "Generous luggage space", use: "Larger families and premium long-distance journeys.", w: 320, h: 98 },
  { id: "van", name: "Premium Van", pax: "Groups traveling together", bags: "Space for group luggage", use: "Groups, families and teams on one vehicle.", w: 320, h: 108 },
  { id: "bus", name: "Minibus", pax: "Larger groups", bags: "Confirmed per group size", use: "Larger corporate, family or event groups.", w: 360, h: 112 },
];

export const WHY = [
  { title: "Route-Specific Planning", text: "Every cross-border journey is assessed according to its actual origin, destination and border requirements." },
  { title: "Private Transportation", text: "Your vehicle is reserved for your group when you book a private transfer." },
  { title: "Clear Pre-Trip Quote", text: "Receive the agreed transportation price and journey details before the trip." },
  { title: "GCC-Wide Network", text: "One booking point for cross-border transportation across multiple GCC markets." },
  { title: "Support Before Travel", text: "Confirm pickup details, passenger information, luggage and route requirements before departure." },
];

export const CORPORATE_SERVICES = [
  "Executive transfers", "Cross-border employee transportation", "Airport transfers",
  "Business meeting transportation", "Multi-day chauffeur arrangements", "Event transportation", "Recurring corporate routes",
];
export const CORPORATE_FOR = ["Executives", "Consultants", "Companies", "Project teams", "Event teams", "Business travelers", "Employees between GCC offices"];

export const GUIDES = [
  { name: "King Fahd Causeway", countries: "Saudi Arabia ↔ Bahrain", check: "Passenger documents, vehicle eligibility and current causeway procedures." },
  { name: "Salwa / Abu Samra", countries: "Saudi Arabia ↔ Qatar", check: "Entry eligibility, vehicle permissions and crossing conditions." },
  { name: "Al Khafji / Al Nuwaiseeb", countries: "Saudi Arabia ↔ Kuwait", check: "Passenger documents, vehicle requirements and border-side procedures." },
  { name: "Saudi–UAE land corridors", countries: "Saudi Arabia ↔ UAE", check: "Route length, vehicle authorization and entry requirements." },
  { name: "Saudi–Oman land corridors", countries: "Saudi Arabia ↔ Oman", check: "Remote route conditions, vehicle authorization and entry requirements." },
  { name: "UAE–Oman crossings", countries: "UAE ↔ Oman", check: "Which crossing suits your route, plus passenger and vehicle requirements." },
];

export const BOOKING = [
  { n: "01", title: "Send Your Route", text: "Tell us where you're starting, where you're going and when you need to travel." },
  { n: "02", title: "Receive Your Quote", text: "We review the route, passengers, luggage and vehicle requirements." },
  { n: "03", title: "Confirm Your Journey", text: "Once the route and price are confirmed, your booking is scheduled." },
  { n: "04", title: "Travel Across the GCC", text: "Meet your driver at the agreed pickup point and follow the confirmed journey plan." },
];

export const FAQS = [
  { q: "What countries does GCC Elite Transport serve?", a: "We coordinate private road transportation connecting Saudi Arabia, Bahrain, the UAE, Qatar, Kuwait and Oman. Availability depends on the specific route." },
  { q: "Can I book a private transfer between GCC countries?", a: "Yes. Send your pickup, destination, date and passenger details and we will review the route and confirm the available options." },
  { q: "Can I travel one way or book a return journey?", a: "Both are possible. Select the trip type in the quote form and we will confirm the arrangement for your route." },
  { q: "Is the vehicle private?", a: "Private transfers are reserved for your group. You do not share the vehicle with unrelated passengers." },
  { q: "Can families travel with luggage?", a: "Yes. Tell us the number of passengers, children and bags so we can recommend a suitable vehicle category." },
  { q: "Can I request an SUV or van?", a: "Yes. You can state a vehicle preference in the quote form. Final vehicle availability is confirmed for your journey." },
  { q: "Will the same vehicle cross the border?", a: "It depends on the specific route, vehicle authorization and border requirements. We confirm the vehicle arrangement before the journey." },
  { q: "Do I need a visa to cross a GCC border?", a: "Visa and entry requirements depend on your nationality, destination and travel status. Passengers must meet the applicable immigration requirements." },
  { q: "Does GCC Elite Transport arrange border permissions?", a: "Where applicable, vehicle and route arrangements are coordinated according to the requirements of the selected journey. Passenger entry and visa requirements remain subject to the relevant authorities." },
  { q: "How far in advance should I book?", a: "As early as you can. Earlier requests give us more time to review the route and confirm the vehicle. Contact us for short-notice journeys." },
  { q: "Can I book an airport transfer?", a: "Yes. We can arrange airport pickups and drop-offs, including journeys that continue across a border." },
  { q: "Do you provide corporate transportation?", a: "Yes. This covers executive transfers, employee travel, event transportation and recurring routes. Use the corporate request option." },
  { q: "Can I book transportation for a family or group?", a: "Yes. Choose a vehicle based on passenger count, luggage and the requirements of your route." },
  { q: "Can I request a multi-day vehicle with driver?", a: "Yes. Multi-day arrangements are quoted individually based on the itinerary." },
  { q: "How is the price calculated?", a: "Pricing is quoted per journey based on route, distance, vehicle category, passengers, luggage and trip type. You receive the agreed price before the trip." },
];

export const DISCLAIMER =
  "Border, visa, immigration, insurance and vehicle requirements may change. Always verify current requirements with the relevant authorities before travel.";

// Set to a real ISO date (e.g. "2026-10-15") only when the border-guide content has actually been reviewed.
export const BORDER_GUIDES_REVIEWED_ON = "";

// Set to a real date (e.g. "2026-10-15") once the legal pages have been reviewed and approved.
export const LEGAL_UPDATED = "";
