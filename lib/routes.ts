// Curated cross-border route inventory.
// RULES: international routes only (never same-country), each route needs unique hand-written content,
// and `published` must stay false until the business confirms it can actually serve the route.
export type City = { city: string; country: string; id: string; ll: [number, number] };
export type Variant = "desert-city" | "causeway" | "capital" | "gateway" | "regional";
export type Section = "summary" | "whyIntl" | "overview" | "timeline" | "usecases" | "border" | "docs" | "driver" | "vehicles" | "luggage" | "return" | "tips" | "multi" | "faq" | "sources" | "related";
export type Route = {
  slug: string; published: boolean; variant: Variant;
  from: City; to: City; corridorId: string; borderLabel: string; borderNode: [number, number];
  eyebrow: string; h1: string; metaTitle: string; metaDesc: string; hero: string; angle: string;
  intro: string[]; whyIntl: string; overview: string[];
  timeline: { t: string; d: string }[]; border: string[]; docsRoute: string[]; driver: string;
  vehicleNotes: Record<"sedan" | "suv" | "psuv" | "van" | "group", string>;
  useCases: { t: string; d: string }[]; tips: string[]; multi?: string;
  faqs: { q: string; a: string }[]; related: string[]; sources: [string, string][];
  order: Section[]; tags: ("Family" | "Business" | "Group" | "Religious")[]; guideHref: string;
};

const C = {
  makkah: { city: "Makkah", country: "Saudi Arabia", id: "saudi-arabia", ll: [39.83, 21.42] },
  riyadh: { city: "Riyadh", country: "Saudi Arabia", id: "saudi-arabia", ll: [46.72, 24.71] },
  dammam: { city: "Dammam", country: "Saudi Arabia", id: "saudi-arabia", ll: [50.1, 26.43] },
  dubai: { city: "Dubai", country: "United Arab Emirates", id: "uae", ll: [55.27, 25.2] },
  manama: { city: "Manama", country: "Bahrain", id: "bahrain", ll: [50.58, 26.23] },
  muscat: { city: "Muscat", country: "Oman", id: "oman", ll: [58.41, 23.59] },
  amman: { city: "Amman", country: "Jordan", id: "jordan", ll: [35.93, 31.95] },
} satisfies Record<string, City>;

const S = {
  saMoi: ["Saudi Ministry of Interior", "https://www.moi.gov.sa"] as [string, string],
  saVisa: ["Saudi visa portal", "https://visa.visitsaudi.com"] as [string, string],
  saTga: ["Saudi Transport General Authority", "https://www.tga.gov.sa"] as [string, string],
  aeRoad: ["UAE: travelling by road", "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways"] as [string, string],
  aeIcp: ["UAE ICP", "https://icp.gov.ae"] as [string, string],
  bhMtt: ["Bahrain Ministry of Transportation", "https://www.mtt.gov.bh"] as [string, string],
  bhNpra: ["Bahrain NPRA", "https://www.npra.gov.bh"] as [string, string],
  omRop: ["Royal Oman Police", "https://www.rop.gov.om"] as [string, string],
  omTransit: ["Oman land transit visa", "https://gov.om/en/w/get-land-transit-visa"] as [string, string],
  joMfa: ["Jordan Ministry of Foreign Affairs", "https://mfa.gov.jo"] as [string, string],
  gcc: ["GCC General Secretariat", "https://www.gcc-sg.org"] as [string, string],
};

export const ROUTES: Route[] = [
  /* ---------------- Makkah → Dubai ---------------- */
  {
    slug: "makkah-to-dubai", published: true, variant: "desert-city",
    from: C.makkah, to: C.dubai, corridorId: "ae-sa", borderLabel: "Saudi Arabia ↔ UAE", borderNode: [51.6, 24.3],
    eyebrow: "Saudi Arabia → UAE", h1: "Makkah to Dubai Cross-Border Transportation",
    metaTitle: "Makkah to Dubai Cross-Border Transport | GCC Elite Transport",
    metaDesc: "Private cross-border transportation from Makkah to Dubai, with route planning, vehicle options, border considerations and one-way or return journeys.",
    hero: "Private international road transportation from Makkah to Dubai, with route-specific planning for passengers, luggage, vehicle requirements and border procedures.",
    angle: "Saudi Arabia to UAE long-distance international road journey",
    intro: [
      "Makkah is in the west of Saudi Arabia, close to the Red Sea. Dubai is on the Gulf coast in the east of the UAE. Between them lies the full width of the Arabian Peninsula, so a road journey from one to the other is a long one, and it ends with a land border.",
      "That combination is why we plan this route as an international road journey rather than a long taxi ride. The Saudi–UAE land corridor, the vehicle arrangement, the passengers' documents and the hours behind the wheel all need to be settled before the car leaves Makkah.",
    ],
    whyIntl: "Makkah and Dubai are in different countries, so the journey leaves Saudi Arabia and enters the UAE through a land border. Passengers go through Saudi departure procedures and UAE entry procedures, and the vehicle arrangement has to suit the crossing.",
    overview: [
      "Road travel between Saudi Arabia and the UAE uses the land corridor in the south-east of the Saudi territory, toward the UAE's western edge. Which exact crossing applies, and the road leading to it, is confirmed for your booking, because it depends on your pickup, the vehicle and current operating conditions.",
      "Approximate road distance varies depending on the selected route and border crossing, and travel time varies with route, traffic, border procedures, stops and current conditions. We do not quote a duration in advance. For how this corridor works in general, see our UAE–Saudi border information in the border guides.",
    ],
    timeline: [
      { t: "Pickup in Makkah", d: "The driver meets the group at the confirmed Makkah pickup point, with luggage loaded and the plan for the day agreed." },
      { t: "The long Saudi road journey", d: "The first and longest part of the trip crosses Saudi Arabia from west to east. Seating, stops and departure timing matter most here." },
      { t: "Border approach", d: "The vehicle heads for the Saudi–UAE crossing selected for the route, and passengers get their documents ready." },
      { t: "Border procedures", d: "Saudi departure and UAE entry procedures apply. Passengers follow the instructions of the border authorities." },
      { t: "UAE entry", d: "Once procedures are complete, the journey continues into the UAE under the vehicle and driver arrangement confirmed beforehand." },
      { t: "Continue to Dubai", d: "The final stretch runs to the confirmed Dubai drop-off, a hotel, residence or other address." },
    ],
    border: [
      "The relevant corridor is the Saudi–UAE land crossing. We confirm which one applies for your pickup and vehicle before you book.",
      "Departure procedures happen on the Saudi side and entry procedures on the UAE side, each with its own requirements.",
      "Crossing time is never promised. It depends on traffic, passenger requirements and current procedures.",
    ],
    docsRoute: ["Passport valid for the trip, and a UAE visa or entry permission if your nationality needs one", "Residency documents if you hold residency in Saudi Arabia or another GCC state", "Any documents related to the vehicle that the Saudi–UAE crossing requires"],
    driver: "Whether the same vehicle can continue from Saudi Arabia into the UAE depends on vehicle registration, operator requirements, authorization, insurance and applicable border rules. Driver arrangements depend on route, licensing, operator requirements and border procedures. On a long route like this we confirm the vehicle and driver plan, including any change at the border, before the booking is confirmed.",
    vehicleNotes: {
      sedan: "For one to three travelers with light bags. A long drive, so confirm seat comfort and bag space first.",
      suv: "The usual choice for families and for more luggage on a day-long journey.",
      psuv: "For travelers who want extra comfort on the full-width Saudi leg.",
      van: "For larger families or a group traveling together, such as a group returning from a religious visit.",
      group: "For bigger groups, where available and eligible for the route.",
    },
    useCases: [
      { t: "Family and religious travel", d: "Families and groups returning to the UAE after time in Makkah often travel with children, older relatives and a lot of luggage. We plan seating, stops and bag space around them." },
      { t: "Business travel", d: "A traveler who needs to reach Dubai by road for a meeting can request a scheduled private vehicle with the return agreed in advance." },
      { t: "Group travel", d: "A group with several large suitcases is matched to a van or large SUV instead of being split across cars." },
    ],
    tips: ["Leave early and agree stops before you set off, because the Saudi leg is the longest part.", "Check every traveler's UAE entry requirements before departure, not at the border.", "Tell us about child seats, older passengers and special luggage when you ask for a quote.", "Agree the return date and pickup point now if you plan to come back."],
    multi: "Some travelers continue beyond Dubai or stop in another GCC country on the way. Each additional border is a separate arrangement, so tell us the full itinerary.",
    faqs: [
      { q: "How do I travel from Makkah to Dubai by road?", a: "By private road transfer through the Saudi–UAE land corridor. We plan the pickup, vehicle, driver arrangement and crossing for your booking. Send your Makkah pickup, Dubai drop-off, date, passengers and luggage for a route-specific quote." },
      { q: "Is Makkah to Dubai a cross-border journey?", a: "Yes. Makkah is in Saudi Arabia and Dubai is in the UAE, so the trip includes Saudi departure and UAE entry procedures at a land border." },
      { q: "Which border does the Makkah to Dubai road journey use?", a: "It uses the Saudi–UAE land crossing. The exact crossing depends on your pickup, vehicle and current operating conditions, so we confirm it for your booking." },
      { q: "Can I travel from Makkah to Dubai in a private vehicle?", a: "Yes, on applicable routes. The vehicle arrangement depends on eligibility and border requirements, and we confirm it before you book." },
      { q: "Can the same vehicle cross from Saudi Arabia into the UAE?", a: "It depends on the vehicle's registration, authorization, insurance, operator requirements and border rules. Some journeys keep one vehicle, others change. We confirm the plan beforehand." },
      { q: "Can the same driver continue into the UAE?", a: "That depends on route, licensing, operator requirements and border procedures. Where a driver change applies, we explain it before you confirm." },
      { q: "What documents are required?", a: "Usually a passport, a UAE visa or entry permission if you need one, and residency documents where relevant. Requirements vary by nationality and residency, so verify them with the relevant authorities." },
      { q: "Can families travel from Makkah to Dubai by private vehicle?", a: "Yes, subject to availability. Tell us the number of children, older passengers and bags so we can recommend a suitable vehicle." },
      { q: "Can I book a return journey?", a: "Yes. Give us the return date and the Dubai pickup point, and we plan both legs together." },
      { q: "How much luggage can I take?", a: "It depends on the vehicle and the number of passengers. Tell us your large bags, cabin bags and special items, and we confirm what fits before booking." },
    ],
    related: ["riyadh-to-dubai", "makkah-to-manama"], sources: [S.saMoi, S.saVisa, S.aeRoad, S.aeIcp],
    order: ["summary", "whyIntl", "overview", "timeline", "usecases", "border", "docs", "driver", "vehicles", "luggage", "return", "tips", "multi", "faq", "sources", "related"],
    tags: ["Family", "Religious", "Group", "Business"], guideHref: "/border-guides/uae-saudi/",
  },

  /* ---------------- Makkah → Manama ---------------- */
  {
    slug: "makkah-to-manama", published: true, variant: "causeway",
    from: C.makkah, to: C.manama, corridorId: "sa-bh", borderLabel: "Saudi Arabia ↔ Bahrain", borderNode: [50.4, 26.15],
    eyebrow: "Saudi Arabia → Bahrain", h1: "Makkah to Manama Cross-Border Transportation",
    metaTitle: "Makkah to Manama Cross-Border Transportation | GCC Elite",
    metaDesc: "Private transportation from Makkah to Manama via the Saudi–Bahrain road corridor, with route-specific planning for passengers, luggage and border procedures.",
    hero: "Private international road transportation from Makkah to Manama through the Saudi–Bahrain road corridor, planned around passengers, luggage and the King Fahd Causeway.",
    angle: "Makkah to Bahrain via the Saudi–Bahrain road corridor",
    intro: [
      "This route is a trip of two halves. The first is a long drive from Makkah in western Saudi Arabia toward the Eastern Province. The second is the crossing to Bahrain over the King Fahd Causeway, which is the land connection between Saudi Arabia and Bahrain.",
      "We plan both halves together. The long Saudi leg decides how comfortable the journey is, and the causeway decides what documents and vehicle arrangement are needed at the end of it.",
    ],
    whyIntl: "Makkah is in Saudi Arabia and Manama is in Bahrain. The journey ends at the causeway crossing, where Saudi departure procedures and Bahrain entry procedures apply.",
    overview: [
      "The crossing for this route is the King Fahd Causeway. The long run from Makkah to the causeway is domestic travel inside Saudi Arabia, and we only plan it as part of the international journey to Manama.",
      "Bahrain's transport ministry regulates which vehicles may carry passengers across the causeway, so the vehicle arrangement is confirmed with you before you book. Border processing time can vary depending on traffic, passenger requirements and current procedures. See the Bahrain page for more on the crossing itself.",
    ],
    timeline: [
      { t: "Pickup in Makkah", d: "Passengers and luggage are collected at the confirmed Makkah address." },
      { t: "Across Saudi Arabia to the east", d: "A long drive toward the Eastern Province, planned for comfort and timing." },
      { t: "Causeway approach", d: "The vehicle heads for the King Fahd Causeway and passengers prepare documents." },
      { t: "Border procedures", d: "Saudi departure and Bahrain entry procedures apply at the crossing." },
      { t: "Bahrain entry", d: "After procedures, the journey continues under the confirmed vehicle and driver arrangement." },
      { t: "Continue to Manama", d: "The final stretch runs to your Manama hotel, residence or other address." },
    ],
    border: ["The King Fahd Causeway is the Saudi–Bahrain land crossing.", "The vehicle arrangement depends on what is permitted on the causeway for your journey, confirmed before booking.", "We do not guarantee crossing times or border clearance."],
    docsRoute: ["Passport, and Bahrain visa or entry permission if your nationality needs one", "Residency documents where relevant", "Vehicle documents the causeway arrangement requires"],
    driver: "Whether the same vehicle crosses the causeway depends on the vehicle's authorization and the confirmed route arrangement. Bahrain's rules on which vehicles carry passengers across are set by its authorities and are not a statement about our own permissions. Driver arrangements depend on route, licensing, operator requirements and border procedures, so we explain any change before you confirm.",
    vehicleNotes: {
      sedan: "For a small party with light luggage. Check comfort for the long Saudi leg.",
      suv: "A common choice for families heading east from Makkah with luggage.",
      psuv: "For travelers who want extra comfort across the long first half.",
      van: "For a group or a large family traveling together.",
      group: "For larger groups, where available and eligible for the crossing.",
    },
    useCases: [
      { t: "Family and religious travel", d: "Families heading to Bahrain after a stay in Makkah travel with children and luggage. We plan seating and stops for the long first half." },
      { t: "Business travel", d: "A traveler with a meeting in Manama can request a scheduled private vehicle and an agreed return." },
      { t: "Airport-connected travel", d: "Where a flight connects in Bahrain, we can plan the road journey to Manama or the airport as one trip, if the route is confirmed." },
    ],
    tips: ["Treat this as two journeys: a long drive, then a border. Plan rest for the first and documents for the second.", "Ask us how the vehicle arrangement works on the causeway before you book.", "Agree your Manama drop-off address in advance.", "If you plan a return, agree its date now."],
    faqs: [
      { q: "How do I travel from Makkah to Manama by road?", a: "By private road transfer from Makkah across Saudi Arabia and over the King Fahd Causeway to Manama. We plan the vehicle, driver arrangement and crossing. Send your pickup, drop-off, date, passengers and luggage for a quote." },
      { q: "Is Makkah to Manama a cross-border journey?", a: "Yes. Makkah is in Saudi Arabia and Manama is in Bahrain, so the trip includes departure and entry procedures at the causeway." },
      { q: "Which border does the Makkah to Manama road journey use?", a: "The King Fahd Causeway, which is the land crossing between Saudi Arabia and Bahrain." },
      { q: "Can a private vehicle cross the King Fahd Causeway?", a: "That depends on the vehicle's authorization and what the authorities permit for the arrangement. We confirm it for your journey before you book." },
      { q: "Will the same vehicle cross the causeway?", a: "It depends on the vehicle's authorization and the confirmed route arrangement. We do not promise one vehicle for every journey." },
      { q: "Will the same driver continue to Manama?", a: "That depends on route, licensing and operator requirements. We explain any driver change before you confirm." },
      { q: "What documents are required?", a: "Typically a passport and any Bahrain visa or entry permission that applies to you, plus residency documents where relevant. Verify with the relevant authorities." },
      { q: "Can families travel from Makkah to Manama by private vehicle?", a: "Yes, subject to availability. Tell us about children and bags so we can recommend a vehicle." },
      { q: "Can I book a return journey?", a: "Yes. Give us the return date and pickup point and we plan both legs." },
    ],
    related: ["dammam-to-manama", "makkah-to-dubai"], sources: [S.saMoi, S.bhMtt, S.bhNpra, S.gcc],
    order: ["summary", "whyIntl", "overview", "timeline", "border", "docs", "driver", "usecases", "vehicles", "luggage", "return", "tips", "faq", "sources", "related"],
    tags: ["Family", "Religious", "Business", "Group"], guideHref: "/border-guides/saudi-bahrain/",
  },

  /* ---------------- Riyadh → Dubai ---------------- */
  {
    slug: "riyadh-to-dubai", published: true, variant: "capital",
    from: C.riyadh, to: C.dubai, corridorId: "ae-sa", borderLabel: "Saudi Arabia ↔ UAE", borderNode: [51.6, 24.3],
    eyebrow: "Saudi Arabia → UAE", h1: "Riyadh to Dubai Cross-Border Transportation",
    metaTitle: "Riyadh to Dubai Private Cross-Border Transfer | GCC Elite",
    metaDesc: "Private cross-border transfer from Riyadh to Dubai with premium vehicle options, route planning, border considerations and one-way or return journeys.",
    hero: "Private international road transportation from Riyadh to Dubai for business and family travelers, planned around the vehicle, the border and your schedule.",
    angle: "The Saudi capital to Dubai by private international road",
    intro: [
      "Riyadh is Saudi Arabia's capital and its main business center, and Dubai is one of the UAE's. Executives and companies move between them often. Most go by air. A private road journey suits travelers who want to arrive with their own vehicle plan, carry more than a flight allows or travel as a team.",
      "It is still an international trip, with a Saudi–UAE land border in the middle. We plan it as one journey from the Riyadh pickup to the Dubai address.",
    ],
    whyIntl: "Riyadh is in Saudi Arabia and Dubai is in the UAE, so the journey passes Saudi departure and UAE entry procedures at a land border.",
    overview: [
      "From Riyadh, the road runs east and then south-east across Saudi Arabia toward the Saudi–UAE land corridor. The crossing itself is confirmed for your booking, depending on your pickup, the vehicle and current operating conditions.",
      "Approximate road distance varies depending on the selected route and border crossing, and travel time varies with traffic, border procedures, stops and current conditions. We do not promise arrival times, which matters if you have a meeting. Build a buffer around the crossing.",
    ],
    timeline: [
      { t: "Pickup in Riyadh", d: "The vehicle collects the passenger or team at the office, hotel or home." },
      { t: "Saudi road journey", d: "A long drive across Saudi Arabia toward the south-east." },
      { t: "Border approach", d: "The vehicle approaches the Saudi–UAE crossing selected for the route." },
      { t: "Border procedures", d: "Saudi departure and UAE entry procedures. Allow time, because we cannot predict it." },
      { t: "UAE entry", d: "The journey continues into the UAE under the confirmed vehicle and driver plan." },
      { t: "Continue to Dubai", d: "Drop-off at the Dubai office, hotel or residence." },
    ],
    border: ["The relevant corridor is the Saudi–UAE land crossing, confirmed per booking.", "Business travelers should keep documents together and accessible for both sides of the crossing.", "No guaranteed crossing time, so schedule meetings with a buffer."],
    docsRoute: ["Passport, and a UAE visa or entry permission if required for your nationality", "Residency documents where relevant, particularly for residents of Saudi Arabia", "Company or authorization letters only if the vehicle arrangement needs them"],
    driver: "Whether the same vehicle continues from Saudi Arabia into the UAE depends on vehicle registration, operator requirements, authorization, insurance and border rules. Driver arrangements depend on route, licensing, operator requirements and border procedures. For business trips we confirm the vehicle and driver plan, and any change at the border, before the booking is confirmed.",
    vehicleNotes: {
      sedan: "Executive travel for one to three people with business luggage.",
      suv: "A comfortable choice for a small team or a family with bags.",
      psuv: "The usual executive option for a long road day.",
      van: "For a project team or a group that travels together.",
      group: "For larger delegations, where available and eligible.",
    },
    useCases: [
      { t: "Executive and business travel", d: "A scheduled private vehicle for a meeting in Dubai, with the return agreed in advance and room for business luggage." },
      { t: "Company teams", d: "A project team travels together in one vehicle, with a single pickup and a single border plan." },
      { t: "Family travel", d: "Families moving between the two countries can use the same planning, with extra attention to children and bags." },
    ],
    tips: ["Treat departure time as the thing you control and arrival time as the thing you do not.", "Keep every traveler's documents together, in order, for both borders' procedures.", "Name a single contact for the group so we can coordinate pickup details.", "Agree the return date now if the trip is round-trip."],
    multi: "Some itineraries add a stop in another GCC country. Each extra border is its own arrangement. Tell us the full route.",
    faqs: [
      { q: "How do I travel from Riyadh to Dubai by road?", a: "By private road transfer through the Saudi–UAE land corridor. We plan the vehicle, driver arrangement and crossing for your booking. Send your Riyadh pickup, Dubai drop-off, date, passengers and luggage." },
      { q: "Is Riyadh to Dubai a cross-border journey?", a: "Yes. Riyadh is in Saudi Arabia and Dubai is in the UAE, so you pass a land border with departure and entry procedures." },
      { q: "Which border does the Riyadh to Dubai road journey use?", a: "The Saudi–UAE land crossing. The exact crossing is confirmed for your booking, because it depends on your route and current conditions." },
      { q: "Can I travel from Riyadh to Dubai in a private vehicle?", a: "Yes, on applicable routes, subject to the vehicle's eligibility and border requirements. We confirm the arrangement before you book." },
      { q: "Can the same vehicle cross from Saudi Arabia into the UAE?", a: "It depends on registration, authorization, insurance, operator requirements and border rules. We confirm the plan beforehand." },
      { q: "Can the same driver continue into the UAE?", a: "That depends on licensing, operator requirements and border procedures. Any change is explained before you confirm." },
      { q: "What documents are required?", a: "Usually a passport, a UAE visa or entry permission if you need one, and residency documents where relevant. Verify requirements with the relevant authorities." },
      { q: "Can I book a return journey?", a: "Yes. Give us both dates and pickup points so the return is planned with the outbound trip." },
      { q: "How much luggage can I take?", a: "It depends on the vehicle and passenger count. Tell us your large bags, cabin bags and equipment, and we confirm before booking." },
    ],
    related: ["makkah-to-dubai", "muscat-to-dubai"], sources: [S.saMoi, S.saVisa, S.aeRoad, S.aeIcp],
    order: ["summary", "usecases", "whyIntl", "overview", "vehicles", "timeline", "border", "docs", "driver", "luggage", "return", "tips", "multi", "faq", "sources", "related"],
    tags: ["Business", "Group", "Family"], guideHref: "/border-guides/uae-saudi/",
  },

  /* ---------------- Dammam → Manama ---------------- */
  {
    slug: "dammam-to-manama", published: true, variant: "causeway",
    from: C.dammam, to: C.manama, corridorId: "sa-bh", borderLabel: "Saudi Arabia ↔ Bahrain", borderNode: [50.4, 26.15],
    eyebrow: "Saudi Arabia → Bahrain", h1: "Dammam to Manama Cross-Border Transportation",
    metaTitle: "Dammam to Manama Cross-Border Transport | GCC Elite",
    metaDesc: "Private transfer from Dammam to Manama across the King Fahd Causeway, with route-specific planning for passengers, luggage, vehicles and border procedures.",
    hero: "Private international road transportation from Dammam to Manama across the King Fahd Causeway, a short international journey planned around the border.",
    angle: "Eastern Saudi Arabia to Bahrain across the King Fahd Causeway",
    intro: [
      "Dammam is in Saudi Arabia's Eastern Province, and Manama is across the water in Bahrain. They are among the closest pairs of major cities on either side of a GCC border, joined by the King Fahd Causeway.",
      "That makes this a short international journey, and short does not mean simple. The time that matters is the time at the border, not the drive, so the planning is about documents and the vehicle arrangement more than about distance.",
    ],
    whyIntl: "Dammam is in Saudi Arabia and Manama is in Bahrain. The route crosses the causeway, where Saudi departure and Bahrain entry procedures apply.",
    overview: [
      "The drive to the causeway is short from the Eastern Province, so most of the journey's variability sits at the crossing. Border processing time can vary depending on traffic, passenger requirements and current procedures, and we never quote it.",
      "Because the route is short, return trips on the same day are common requests. They need an agreed pickup time on the Bahrain side and enough time for both crossings. Bahrain's transport ministry regulates which vehicles may carry passengers across the causeway, so the vehicle arrangement is confirmed first.",
    ],
    timeline: [
      { t: "Pickup in Dammam", d: "Collection at your Dammam address, with documents ready." },
      { t: "Short drive to the causeway", d: "A brief run through the Eastern Province to the King Fahd Causeway." },
      { t: "Saudi departure procedures", d: "Departure procedures on the Saudi side of the crossing." },
      { t: "Across the causeway", d: "The vehicle crosses under the arrangement confirmed beforehand." },
      { t: "Bahrain entry procedures", d: "Entry procedures on the Bahrain side." },
      { t: "Continue to Manama", d: "Drop-off at your Manama destination." },
    ],
    border: ["The King Fahd Causeway is the crossing.", "Allow time for both departure and entry procedures, even on a short trip.", "We never guarantee crossing times."],
    docsRoute: ["Passport, and Bahrain visa or entry permission if required", "Residency documents where relevant", "Vehicle documents the causeway arrangement requires"],
    driver: "Whether the same vehicle crosses depends on the vehicle's authorization and the confirmed route arrangement. Driver arrangements depend on route, licensing, operator requirements and border procedures. On a short route we still confirm both in advance.",
    vehicleNotes: {
      sedan: "Suits one to three travelers with light bags on a short crossing.",
      suv: "For families and for extra luggage.",
      psuv: "For executive travel between the two cities.",
      van: "For a group or a larger family.",
      group: "For bigger groups, where available.",
    },
    useCases: [
      { t: "Business travel", d: "Day trips between the two cities with an agreed pickup time on each side." },
      { t: "Family visits", d: "Families crossing for a visit travel with children and luggage, with the return agreed in advance." },
      { t: "Airport-connected travel", d: "Where a flight is involved, we can plan the road leg to or from Bahrain's side as part of one journey, if the route is confirmed." },
    ],
    tips: ["Plan the border, not the drive, because that is where time is lost.", "Agree your Bahrain pickup time for a return before you leave.", "Keep passports within reach for both sets of procedures.", "If you change plans, tell us early."],
    faqs: [
      { q: "How do I travel from Dammam to Manama by road?", a: "By private road transfer across the King Fahd Causeway. We plan the pickup, vehicle, driver arrangement and crossing. Send your pickup, drop-off and date for a quote." },
      { q: "Is Dammam to Manama a cross-border journey?", a: "Yes. Dammam is in Saudi Arabia and Manama is in Bahrain, so you pass departure and entry procedures at the causeway." },
      { q: "Which border does the Dammam to Manama road journey use?", a: "The King Fahd Causeway." },
      { q: "Can a private vehicle cross the causeway?", a: "It depends on the vehicle's authorization and what the authorities permit for the arrangement. We confirm it before you book." },
      { q: "Will the same vehicle and driver continue?", a: "That depends on authorization, licensing and the confirmed arrangement. We tell you before you confirm." },
      { q: "What documents are required?", a: "Typically a passport and any Bahrain visa or entry permission that applies to you. Verify with the relevant authorities." },
      { q: "Can I book a same-day return?", a: "A return can be planned with the outbound trip. Agree the pickup time and allow for both crossings." },
      { q: "Can families travel by private vehicle?", a: "Yes, subject to availability. Tell us about children and luggage." },
    ],
    related: ["makkah-to-manama", "riyadh-to-dubai"], sources: [S.saMoi, S.bhMtt, S.bhNpra],
    order: ["summary", "whyIntl", "overview", "border", "timeline", "docs", "driver", "return", "usecases", "vehicles", "luggage", "tips", "faq", "sources", "related"],
    tags: ["Business", "Family"], guideHref: "/border-guides/saudi-bahrain/",
  },

  /* ---------------- Muscat → Dubai ---------------- */
  {
    slug: "muscat-to-dubai", published: true, variant: "gateway",
    from: C.muscat, to: C.dubai, corridorId: "om-ae", borderLabel: "Oman ↔ UAE", borderNode: [55.9, 24.4],
    eyebrow: "Oman → UAE", h1: "Muscat to Dubai Cross-Border Transportation",
    metaTitle: "Muscat to Dubai Cross-Border Transport | GCC Elite Transport",
    metaDesc: "Private cross-border transportation from Muscat to Dubai across the Oman–UAE border, with route planning, vehicle and document considerations.",
    hero: "Private international road transportation from Muscat to Dubai across the Oman–UAE border, with route-specific planning for passengers, vehicles and documents.",
    angle: "Oman to UAE international road journey",
    intro: [
      "Muscat is Oman's capital and sits on the Gulf of Oman. Dubai lies to the north-west, past the Oman–UAE border. Unlike many GCC routes, this border has more than one crossing, so choosing the right one is part of the plan.",
      "We treat the trip as a single international road journey: an Omani pickup, the border, and a UAE drop-off, with the vehicle and documents settled in advance.",
    ],
    whyIntl: "Muscat is in Oman and Dubai is in the UAE, so the journey passes Oman departure and UAE entry procedures at a land border.",
    overview: [
      "The Oman–UAE border can be crossed in more than one place, and the right crossing depends on your pickup, your destination and current operating conditions. We confirm it per booking and do not assume one. Muscat to Dubai also touches northern Oman, which sits close to the UAE.",
      "Vehicle eligibility matters on this route, and so do foreign-vehicle rules. Oman regulates foreign land-transport vehicles, so we do not assume any vehicle can enter. Approximate road distance varies depending on the selected route and border crossing, and travel time varies with traffic, procedures, stops and current conditions.",
    ],
    timeline: [
      { t: "Pickup in Muscat", d: "Collection at the confirmed Muscat address." },
      { t: "Road journey toward the UAE", d: "The drive heads north-west toward the border." },
      { t: "Oman departure procedures", d: "Departure procedures on the Omani side." },
      { t: "Border crossing", d: "The vehicle and passengers pass the crossing selected for the route." },
      { t: "UAE entry procedures", d: "Entry procedures on the UAE side." },
      { t: "Continue to Dubai", d: "Drop-off at the Dubai address." },
    ],
    border: ["More than one crossing exists, so the choice is route-dependent.", "Oman's rules on foreign vehicles may apply to the arrangement.", "Crossing time is never guaranteed."],
    docsRoute: ["Passport, and a UAE visa or entry permission if you need one", "Omani residency or visa documents where relevant", "Vehicle documents, including insurance, as the route requires"],
    driver: "Whether the same vehicle can enter the UAE from Oman, or the reverse, depends on vehicle registration, authorization, operator requirements and the rules of both countries. Oman regulates foreign transport vehicles and requirements may apply. Driver arrangements depend on route, licensing and border procedures, so we confirm both before you book.",
    vehicleNotes: {
      sedan: "For a small party with light luggage.",
      suv: "A common choice for families with bags.",
      psuv: "For executive travel between the two countries.",
      van: "For a group traveling together.",
      group: "For larger groups, where available and eligible.",
    },
    useCases: [
      { t: "Business travel", d: "A scheduled private vehicle for a meeting, with the return agreed beforehand." },
      { t: "Family travel", d: "Families crossing with children and luggage, with extra attention to documents and the crossing choice." },
      { t: "Multi-country itineraries", d: "Travelers continuing beyond Dubai, toward Saudi Arabia, plan each border as its own arrangement." },
    ],
    tips: ["Ask us which crossing suits your pickup before you book.", "Confirm insurance and vehicle documents for the route.", "Keep passports and visa papers together.", "Agree a return date if you need one."],
    multi: "From Dubai, a journey can continue toward Saudi Arabia and onward. These are separate borders with their own arrangements.",
    faqs: [
      { q: "How do I travel from Muscat to Dubai by road?", a: "By private road transfer across the Oman–UAE border. We plan the vehicle, driver arrangement and crossing. Send your Muscat pickup, Dubai drop-off, date, passengers and luggage." },
      { q: "Is Muscat to Dubai a cross-border journey?", a: "Yes. Muscat is in Oman and Dubai is in the UAE, so you pass departure and entry procedures at a land border." },
      { q: "Which border does the Muscat to Dubai road journey use?", a: "The Oman–UAE land border, which has more than one crossing. The right one depends on your route, and we confirm it per booking." },
      { q: "Can a private vehicle cross from Oman into the UAE?", a: "Often, subject to the vehicle's eligibility and the rules of both countries. Oman regulates foreign land-transport vehicles, so we confirm the arrangement before booking." },
      { q: "Can the same vehicle and driver continue?", a: "It depends on authorization, operator requirements, licensing and border rules. We explain any change before you confirm." },
      { q: "What documents are required?", a: "Typically a passport and any UAE visa or entry permission, plus residency documents and vehicle documents where relevant. Verify with the relevant authorities." },
      { q: "Can families travel by private vehicle?", a: "Yes, subject to availability. Tell us about children and luggage." },
      { q: "Can I book a return journey?", a: "Yes. Give us both dates and pickup points." },
    ],
    related: ["riyadh-to-dubai", "amman-to-riyadh"], sources: [S.omRop, S.omTransit, S.aeRoad, S.aeIcp],
    order: ["summary", "whyIntl", "border", "overview", "timeline", "docs", "driver", "vehicles", "luggage", "return", "usecases", "tips", "multi", "faq", "sources", "related"],
    tags: ["Business", "Family"], guideHref: "/border-guides/oman-uae/",
  },

  /* ---------------- Amman → Riyadh ---------------- */
  {
    slug: "amman-to-riyadh", published: true, variant: "regional",
    from: C.amman, to: C.riyadh, corridorId: "jo-sa", borderLabel: "Jordan ↔ Saudi Arabia", borderNode: [37.0, 29.9],
    eyebrow: "Jordan → Saudi Arabia", h1: "Amman to Riyadh Cross-Border Transportation",
    metaTitle: "Amman to Riyadh Cross-Border Transport | GCC Elite Transport",
    metaDesc: "Private cross-border transportation from Amman to Riyadh across the Jordan–Saudi border, with route planning, vehicle options and document considerations.",
    hero: "Private international road transportation from Amman to Riyadh, a long regional journey across the Jordan–Saudi border, planned around the crossing, the vehicle and the distance.",
    angle: "Jordan–Saudi regional corridor, Amman to Riyadh",
    intro: [
      "Jordan is not a GCC country, and this route is one of the regional links that connects it to the Gulf. It starts in Amman, crosses a Jordan–Saudi land border and then continues deep into Saudi Arabia to reach Riyadh.",
      "It is a long journey with a border in the middle of it, so we plan the crossing, the vehicle, the driver arrangement and the passengers' comfort together.",
    ],
    whyIntl: "Amman is in Jordan and Riyadh is in Saudi Arabia, so the journey passes Jordan departure procedures and Saudi entry procedures at a land border.",
    overview: [
      "Jordan and Saudi Arabia share more than one land crossing, commonly known as Al-Omari, Mudawara and Al-Durra on the Jordanian side. The applicable border depends on the origin, destination, vehicle arrangement and current operating conditions. For Amman to Riyadh it is confirmed per booking, and a crossing can be updated or paused, so we never assume one.",
      "Approximate road distance varies depending on the selected route and border crossing, and travel time varies with traffic, border procedures, stops and current conditions. We do not quote duration. See the Jordan–Saudi information on our Jordan page.",
    ],
    timeline: [
      { t: "Pickup in Amman", d: "Collection at the confirmed Amman address." },
      { t: "Road journey to the border", d: "The drive runs south-east toward the Jordan–Saudi crossing selected for the route." },
      { t: "Jordan departure procedures", d: "Departure procedures on the Jordanian side." },
      { t: "Border crossing", d: "Passengers and vehicle pass the crossing." },
      { t: "Saudi entry procedures", d: "Entry procedures on the Saudi side." },
      { t: "Long drive to Riyadh", d: "The final and longest stretch crosses Saudi Arabia to the Riyadh drop-off." },
    ],
    border: ["Several Jordan–Saudi crossings exist. The applicable one is route-dependent.", "Entry eligibility is decided by the authorities, and travelers must meet applicable entry requirements.", "No guaranteed crossing time or clearance."],
    docsRoute: ["Passport, and a Saudi visa or entry permission as required for your nationality and purpose", "Residency documents where relevant", "Vehicle documents, including insurance, as the route requires"],
    driver: "Whether the same vehicle continues from Jordan into Saudi Arabia depends on vehicle registration, authorization, operator requirements and applicable border rules. Driver arrangements depend on route, licensing and border procedures. On a route this long we confirm the vehicle and driver plan, including any change at the border, before you book.",
    vehicleNotes: {
      sedan: "For one to three travelers with light bags, with comfort checked for the long second half.",
      suv: "The usual choice for families on this route.",
      psuv: "For executive travelers who want extra comfort.",
      van: "For a group or large family.",
      group: "For bigger groups, where available.",
    },
    useCases: [
      { t: "Business travel", d: "Regional business trips from Amman to Riyadh, with a scheduled pickup and an agreed return." },
      { t: "Family travel", d: "Families with children and luggage planning a long trip with a border in the middle." },
      { t: "Multi-country travel", d: "A traveler continuing beyond Riyadh toward the Gulf plans each additional border separately." },
    ],
    tips: ["Ask us which crossing applies before you set off.", "Check Saudi entry requirements for your nationality ahead of time.", "Plan the long Saudi leg for rest and comfort.", "Agree the return date now if you need one."],
    multi: "From Riyadh, journeys can continue to other GCC countries. Each border is its own arrangement.",
    faqs: [
      { q: "How do I travel from Amman to Riyadh by road?", a: "By private road transfer across the Jordan–Saudi border. We plan the vehicle, driver arrangement and crossing. Send your Amman pickup, Riyadh drop-off, date, passengers and luggage for a quote." },
      { q: "Is Amman to Riyadh a cross-border journey?", a: "Yes. Amman is in Jordan and Riyadh is in Saudi Arabia, so you pass a land border with departure and entry procedures." },
      { q: "Which border does the Amman to Riyadh road journey use?", a: "A Jordan–Saudi land crossing, commonly Al-Omari, Mudawara or Al-Durra on the Jordanian side. Which one applies depends on your route and current conditions, and we confirm it per booking." },
      { q: "Can a private vehicle cross from Jordan into Saudi Arabia?", a: "Often, subject to the vehicle's eligibility and border requirements. We confirm the arrangement before you book." },
      { q: "Can the same vehicle and driver continue into Saudi Arabia?", a: "It depends on authorization, licensing, operator requirements and border procedures. We explain any change before you confirm." },
      { q: "Do I need a Saudi visa?", a: "It depends on your nationality, residency, purpose of travel and current Saudi entry rules. Check the official Saudi visa portal for your case." },
      { q: "What documents are required?", a: "Typically a passport, any Saudi visa or entry permission that applies, and residency documents where relevant. Verify with the relevant authorities." },
      { q: "Can I book a return journey?", a: "Yes. Give us both dates and pickup points and we plan both legs." },
    ],
    related: ["riyadh-to-dubai", "makkah-to-dubai"], sources: [S.joMfa, S.saVisa, S.saMoi, S.gcc],
    order: ["summary", "whyIntl", "overview", "border", "timeline", "docs", "driver", "usecases", "vehicles", "luggage", "return", "tips", "multi", "faq", "sources", "related"],
    tags: ["Business", "Family", "Group"], guideHref: "/border-guides/jordan-saudi/",
  },
];

export const publishedRoutes = () => ROUTES.filter((r) => r.published && r.from.country !== r.to.country);
export const getRoute = (slug: string) => publishedRoutes().find((r) => r.slug === slug);
