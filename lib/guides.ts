// Crossing-specific border guides. Every fact carries a source. Facts that change (tolls, hours, queues) are deliberately not stated.
export type Fact = { k: string; v: string; src?: [string, string] };
export type Guide = {
  slug: string; corridorId: string; signature: "causeway" | "gate" | "post" | "chooser" | "pair" | "desert" | "three";
  a: string; b: string; aId: string; bId: string;
  h1: string; title: string; desc: string; eyebrow: string; lead: string;
  facts: Fact[]; connects: string[];
  steps: { ab: string[]; ba: string[] };
  passenger: string[]; vehicle: string[]; notes: { t: string; d: string }[]; mistakes: string[];
  faqs: { q: string; a: string }[]; sources: [string, string][]; related: string[]; reviewedNote?: string;
};

const SRC = {
  kfca: ["King Fahd Causeway Authority", "https://kfca.sa/en/eservices"] as [string, string],
  mtt: ["Bahrain Ministry of Transportation announcement (Sept 2026)", "https://www.mtt.gov.bh/news/transportation-ministry-announces-licensed-taxis-permitted-transport-passengers-king-fahd"] as [string, string],
  bhNpra: ["Bahrain NPRA", "https://www.npra.gov.bh"] as [string, string],
  saMoi: ["Saudi Ministry of Interior", "https://www.moi.gov.sa"] as [string, string],
  saVisa: ["Saudi visa portal", "https://visa.visitsaudi.com"] as [string, string],
  saExit: ["Saudi exit/re-entry visa service (my.gov.sa)", "https://my.gov.sa/en/services/269423"] as [string, string],
  qaCustoms: ["Qatar General Authority of Customs", "https://www.customs.gov.qa"] as [string, string],
  qaMoi: ["Qatar Ministry of Interior", "https://portal.moi.gov.qa"] as [string, string],
  saudipediaUae: ["Saudipedia: Saudi–UAE land border crossing", "https://saudipedia.com/en/what-is-the-land-border-crossing-between-saudi-arabia-and-the-united-arab-emirates"] as [string, string],
  aeRoad: ["UAE government: travelling by road", "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways"] as [string, string],
  aeIcp: ["UAE ICP", "https://icp.gov.ae"] as [string, string],
  omRop: ["Royal Oman Police", "https://www.rop.gov.om"] as [string, string],
  omTransit: ["Oman land transit visa (gov.om)", "https://gov.om/en/w/get-land-transit-visa"] as [string, string],
  kwMoi: ["Kuwait Ministry of Interior", "https://www.moi.gov.kw"] as [string, string],
  saudipediaOman: ["Saudipedia: Al-Rub' Al-Khali border crossing", "https://saudipedia.com/en/al-rub%22-al-khali-empty-quarter-border-crossing"] as [string, string],
  spaOman: ["Saudi Press Agency: Saudi–Oman highway", "https://www.spa.gov.sa/en/N2147240"] as [string, string],
  joMfa: ["Jordan Ministry of Foreign Affairs", "https://mfa.gov.jo"] as [string, string],
  joDurra: ["Jordan Times: Durra crossing maintenance closure", "https://jordantimes.com/news/local/durra-border-crossing-s-arabia-closed-45-days-maintenance"] as [string, string],
  gcc: ["GCC General Secretariat", "https://www.gcc-sg.org"] as [string, string],
};

const STD_PASSENGER = ["A valid passport, or for eligible GCC citizens a national ID card where the countries accept it", "A visa or entry permission for the destination if your nationality needs one", "Residency documents if you live in one of the countries"];
const STD_VEHICLE = ["Vehicle registration, in the original", "Insurance that is valid in the destination country", "An authorization letter if the vehicle is not registered in the driver's name", "Operator documents and permits for commercial passenger transport"];

export const GUIDES: Guide[] = [
  {
    slug: "saudi-bahrain", corridorId: "sa-bh", signature: "causeway", a: "Saudi Arabia", b: "Bahrain", aId: "saudi-arabia", bId: "bahrain",
    h1: "King Fahd Causeway Border Guide", title: "King Fahd Causeway Border Guide | Saudi Arabia ↔ Bahrain",
    desc: "How the King Fahd Causeway crossing between Saudi Arabia and Bahrain works: the island checkpoint, documents, vehicle insurance and official sources.",
    eyebrow: "Saudi Arabia ↔ Bahrain", lead: "The King Fahd Causeway is the road link between Saudi Arabia and Bahrain. Both countries' passport and customs checks take place on an artificial island in the middle, so the border sits out at sea, not at either shore.",
    facts: [
      { k: "Crossing", v: "King Fahd Causeway, the land connection between Saudi Arabia and Bahrain" },
      { k: "Where the checks are", v: "On an artificial island roughly midway along the causeway", src: SRC.kfca },
      { k: "Operator", v: "King Fahd Causeway Authority (KFCA)", src: SRC.kfca },
      { k: "Digital services", v: "KFCA's Jesr app offers prepaid crossing tickets and vehicle insurance purchase", src: SRC.kfca },
      { k: "Licensed taxis", v: "Bahrain announced that licensed taxis from both countries may carry passengers across, from 6 September 2026, under approved requirements", src: SRC.mtt },
    ],
    connects: ["The Eastern Province of Saudi Arabia (Al Khobar, Dammam, Dhahran) with Bahrain", "Longer Saudi routes, such as from Riyadh or Makkah, that end at the causeway", "Bahrain with the wider GCC, since Bahrain has no other land link"],
    steps: { ab: ["Toll gate on the Saudi approach", "Saudi departure: passport control", "Saudi customs", "Bahrain entry: passport control", "Bahrain customs", "Continue into Bahrain"], ba: ["Toll gate on the Bahrain approach", "Bahrain departure: passport control", "Bahrain customs", "Saudi entry: passport control", "Saudi customs", "Continue into Saudi Arabia"] },
    passenger: [...STD_PASSENGER, "Saudi residents: an exit/re-entry visa to leave and return to Saudi Arabia"],
    vehicle: [...STD_VEHICLE.slice(0, 3), "Insurance for Bahrain: KFCA's Jesr app offers vehicle insurance for the crossing"],
    notes: [
      { t: "Tolls and fees change", d: "Published toll amounts differ between sources and have changed over time. Check the current toll with KFCA rather than relying on a figure you read elsewhere." },
      { t: "Peak days are busy", d: "Weekends and holidays bring heavy traffic in both directions. Plan departure time with that in mind, without expecting a fixed crossing time." },
      { t: "Licensed taxis are a framework, not a guarantee", d: "The 2026 taxi arrangement covers officially licensed taxis that meet technical requirements. It does not mean every car or driver can carry passengers across." },
    ],
    mistakes: ["Assuming Saudi car insurance covers Bahrain", "Leaving Saudi Arabia as a resident without a valid exit/re-entry visa", "Relying on an old toll figure", "Not carrying an authorization letter for a vehicle that is not in your name"],
    faqs: [
      { q: "Where is the border on the King Fahd Causeway?", a: "On an artificial island roughly in the middle of the causeway. Saudi and Bahraini passport and customs checks both take place there." },
      { q: "Do I need special insurance to drive into Bahrain?", a: "You need insurance that is valid in Bahrain. KFCA's Jesr app offers vehicle insurance for the crossing. Check the current options before you travel." },
      { q: "How much is the causeway toll?", a: "Amounts quoted online vary and change. Check the current toll with the King Fahd Causeway Authority before you travel." },
      { q: "Can a taxi take me across the causeway?", a: "Bahrain announced that licensed taxis from both countries may carry passengers across from 6 September 2026, subject to approved requirements. Not every taxi qualifies, so ask the operator." },
      { q: "Do Saudi residents need anything extra?", a: "Residents leaving Saudi Arabia need an exit/re-entry visa to return. It is issued through Saudi government services." },
      { q: "Can GCC Elite Transport arrange a private transfer across the causeway?", a: "Yes, on applicable routes. We confirm the vehicle and driver arrangement before you book." },
    ],
    sources: [SRC.kfca, SRC.mtt, SRC.bhNpra, SRC.saMoi, SRC.saExit], related: ["dammam-to-manama", "makkah-to-manama"],
  },
  {
    slug: "qatar-saudi", corridorId: "qa-sa", signature: "gate", a: "Qatar", b: "Saudi Arabia", aId: "qatar", bId: "saudi-arabia",
    h1: "Abu Samra / Salwa Border Guide", title: "Abu Samra / Salwa Border Guide | Qatar ↔ Saudi Arabia",
    desc: "How the Qatar–Saudi land border at Abu Samra and Salwa works: two sides of one crossing, documents, vehicle pre-registration and official sources.",
    eyebrow: "Qatar ↔ Saudi Arabia", lead: "Qatar has one land border, and it is with Saudi Arabia. The Qatari side is Abu Samra and the Saudi side is Salwa. Every road journey in or out of Qatar passes through it.",
    facts: [
      { k: "Qatari side", v: "Abu Samra, reached by the Salwa road and listed by Qatar Customs as a land customs border", src: SRC.qaCustoms },
      { k: "Saudi side", v: "Salwa, in Saudi Arabia's Eastern Province" },
      { k: "Role", v: "Qatar's only land border" },
      { k: "Pre-registration", v: "Qatar's Ministry of Interior offers Metrash pre-registration for Qatari-registered vehicle owners using the crossing", src: SRC.qaMoi },
    ],
    connects: ["Doha and the rest of Qatar with Saudi Arabia", "Qatar with Bahrain, the UAE, Kuwait and Oman, always through Saudi Arabia"],
    steps: { ab: ["Drive the Salwa road to Abu Samra", "Qatar departure: passport and customs", "Cross to the Saudi side", "Saudi entry at Salwa: passport and customs", "Continue into Saudi Arabia"], ba: ["Saudi departure at Salwa", "Cross to the Qatari side", "Qatar entry at Abu Samra: passport and customs", "Continue to Doha"] },
    passenger: STD_PASSENGER, vehicle: [...STD_VEHICLE, "For Qatari-registered vehicles: Metrash pre-registration may apply"],
    notes: [
      { t: "One crossing, two names", d: "People often say 'the Salwa border' or 'the Abu Samra border'. They mean the same crossing, seen from each side." },
      { t: "Pre-registration is vehicle-specific", d: "Metrash pre-registration is for Qatari-registered vehicles. Whether it applies to your trip depends on the vehicle you travel in." },
      { t: "Onward travel goes through Saudi Arabia", d: "Qatar has no land border with Bahrain or the UAE. A road trip to either crosses Saudi Arabia first." },
    ],
    mistakes: ["Planning a road trip from Qatar to the UAE as if there were a direct border", "Assuming Metrash pre-registration covers any vehicle", "Not checking Saudi entry eligibility before reaching Salwa"],
    faqs: [
      { q: "Are Abu Samra and Salwa the same border?", a: "Yes. Abu Samra is the Qatari side and Salwa is the Saudi side of the one land crossing between the two countries." },
      { q: "Is Abu Samra Qatar's only land border?", a: "Yes. Qatar's only land border is with Saudi Arabia, at Abu Samra." },
      { q: "Can I drive from Qatar to the UAE directly?", a: "No. There is no direct land border. The road journey passes through Saudi Arabia." },
      { q: "What is Metrash pre-registration?", a: "A Qatar Ministry of Interior service for Qatari-registered vehicle owners using the Abu Samra crossing. Check the ministry's current guidance." },
      { q: "Can GCC Elite Transport arrange private transport through Abu Samra?", a: "Yes, on applicable routes. We confirm the vehicle and driver arrangement before booking." },
    ],
    sources: [SRC.qaCustoms, SRC.qaMoi, SRC.saMoi, SRC.saVisa], related: [],
  },
  {
    slug: "uae-saudi", corridorId: "ae-sa", signature: "post", a: "UAE", b: "Saudi Arabia", aId: "uae", bId: "saudi-arabia",
    h1: "Al Ghuwaifat / Al Batha Border Guide", title: "Al Ghuwaifat / Al Batha Border Guide | UAE ↔ Saudi Arabia",
    desc: "The UAE–Saudi land border at Al Ghuwaifat and Al Batha: where it is, why it gets busy, documents, vehicle requirements and official sources.",
    eyebrow: "UAE ↔ Saudi Arabia", lead: "The land crossing between the UAE and Saudi Arabia sits at the far western edge of Abu Dhabi emirate. The UAE side is Al Ghuwaifat and the Saudi side is Al Batha.",
    facts: [
      { k: "Crossing", v: "Al Ghuwaifat (UAE) and Al Batha (Saudi Arabia), described as the land crossing between the two countries", src: SRC.saudipediaUae },
      { k: "UAE side", v: "Al Ghuwaifat, in the far west of Abu Dhabi emirate" },
      { k: "Saudi side", v: "Al Batha, in Saudi Arabia's Eastern Province", src: SRC.saudipediaUae },
      { k: "Official UAE note", v: "UAE roads connect to Saudi Arabia and Oman. Some crossing points are exclusive to GCC citizens.", src: SRC.aeRoad },
    ],
    connects: ["Abu Dhabi, Dubai and the northern Emirates with Saudi Arabia", "Long routes such as Riyadh–Dubai and Makkah–Dubai", "The UAE with Qatar, Bahrain and Kuwait, through Saudi Arabia"],
    steps: { ab: ["Drive west through Abu Dhabi emirate", "UAE departure at Al Ghuwaifat", "Cross to Al Batha", "Saudi entry: passport and customs", "Continue into Saudi Arabia"], ba: ["Saudi departure at Al Batha", "Cross to Al Ghuwaifat", "UAE entry: passport and customs", "Continue into the UAE"] },
    passenger: [...STD_PASSENGER, "Saudi residents: an exit/re-entry visa to leave and return to Saudi Arabia"],
    vehicle: STD_VEHICLE,
    notes: [
      { t: "A busy freight crossing", d: "The crossing carries heavy truck traffic. Queues can vary, so plan with a buffer rather than a fixed time." },
      { t: "Long distances on both sides", d: "The border is far from the big UAE cities and from most Saudi cities. Comfort, rest and fuel matter more than at a short crossing." },
      { t: "Onward to Qatar", d: "The road past Al Batha is also the transit route toward Qatar's Salwa border." },
    ],
    mistakes: ["Planning a meeting time without a border buffer", "Forgetting insurance valid in Saudi Arabia for a UAE vehicle", "Assuming a crossing point is open to every nationality"],
    faqs: [
      { q: "What is the land border between the UAE and Saudi Arabia?", a: "Al Ghuwaifat on the UAE side and Al Batha on the Saudi side, at the western edge of Abu Dhabi emirate." },
      { q: "Is it far from Dubai?", a: "Yes. It is at the far western end of the UAE, so the drive from Dubai or Abu Dhabi to the border is long before the crossing begins." },
      { q: "Why can the crossing be slow?", a: "It is a major freight crossing with heavy truck traffic, and processing depends on traffic and procedures. No crossing time can be promised." },
      { q: "What documents do I need?", a: "A passport, a visa or entry permission if your nationality needs one, residency documents where relevant, and the vehicle's documents and insurance." },
      { q: "Can GCC Elite Transport arrange a private transfer through this border?", a: "Yes, on applicable routes, with the vehicle and driver arrangement confirmed before booking." },
    ],
    sources: [SRC.saudipediaUae, SRC.aeRoad, SRC.aeIcp, SRC.saMoi, SRC.saExit], related: ["riyadh-to-dubai", "makkah-to-dubai"],
  },
  {
    slug: "oman-uae", corridorId: "om-ae", signature: "chooser", a: "Oman", b: "UAE", aId: "oman", bId: "uae",
    h1: "Oman–UAE Border Guide", title: "Oman–UAE Border Crossings Guide | Hatta, Al Ain, Musandam",
    desc: "The Oman–UAE border has several crossings. Which one suits your route, who can use it, and the documents and vehicle insurance to check.",
    eyebrow: "Oman ↔ UAE", lead: "Unlike most GCC borders, the Oman–UAE border has several crossings, on the main border and on the Musandam peninsula. Picking the right one is part of planning the trip, and not every crossing is open to every traveler.",
    facts: [
      { k: "Several crossings", v: "The UAE's roads connect to Oman at several crossing points, and some are exclusive to GCC citizens", src: SRC.aeRoad },
      { k: "Commonly used for Dubai–Muscat", v: "Hatta (UAE) – Al Wajajah (Oman)" },
      { k: "Al Ain area", v: "Crossings toward Al Buraimi, some of which have been restricted to GCC citizens" },
      { k: "Other crossings", v: "Khatmat Malaha near Kalba, and crossings into the Musandam peninsula" },
      { k: "Transit", v: "Oman offers a land transit visa for eligible travelers passing through designated land ports", src: SRC.omTransit },
    ],
    connects: ["Muscat and northern Oman with Dubai, Abu Dhabi and the northern Emirates", "Musandam with Ras Al Khaimah and the east coast", "Oman with Saudi Arabia and the wider GCC, through the UAE"],
    steps: { ab: ["Drive to the crossing chosen for your route", "Oman departure: passport and customs", "UAE entry: passport and customs", "Continue into the UAE"], ba: ["Drive to the crossing chosen for your route", "UAE departure: passport and customs", "Oman entry: passport and customs", "Continue into Oman"] },
    passenger: [...STD_PASSENGER, "A land transit visa if you only pass through Oman and your nationality needs one"],
    vehicle: [...STD_VEHICLE, "Insurance that covers Oman for UAE vehicles, and the reverse"],
    notes: [
      { t: "Access differs by crossing", d: "Some crossings are restricted to GCC citizens. Check which crossings your nationality can use before you choose a route." },
      { t: "Hatta is not the only option", d: "Travelers starting near Al Ain or Kalba may find another crossing more direct. The right one depends on where you start and finish." },
      { t: "Musandam is separate", d: "Musandam is cut off from the rest of Oman by UAE territory, so its crossings serve different trips." },
    ],
    mistakes: ["Heading to a GCC-only crossing as a resident or visitor", "Driving a UAE car without insurance that covers Oman", "Assuming one crossing suits every route"],
    faqs: [
      { q: "How many crossings are there between Oman and the UAE?", a: "Several, on the main border and in Musandam. The UAE government notes that some are exclusive to GCC citizens." },
      { q: "Which crossing is used from Dubai to Muscat?", a: "Hatta–Al Wajajah is commonly used, but the right crossing depends on your route and on which crossings your nationality can use." },
      { q: "Can expatriate residents use every crossing?", a: "No. Some crossings are restricted to GCC citizens. Check current official guidance before you choose." },
      { q: "Do I need insurance for Oman?", a: "If you drive a UAE vehicle into Oman, it needs insurance that covers Oman. Check with your insurer." },
      { q: "Can GCC Elite Transport arrange Oman–UAE transfers?", a: "Yes, on applicable routes. We choose the crossing for your route and confirm the arrangement before booking." },
    ],
    sources: [SRC.aeRoad, SRC.aeIcp, SRC.omRop, SRC.omTransit], related: ["muscat-to-dubai"],
  },
  {
    slug: "kuwait-saudi", corridorId: "kw-sa", signature: "pair", a: "Kuwait", b: "Saudi Arabia", aId: "kuwait", bId: "saudi-arabia",
    h1: "Kuwait–Saudi Border Guide", title: "Kuwait–Saudi Border Guide | Nuwaiseeb–Khafji and Salmi",
    desc: "The two Kuwait–Saudi land crossings, Nuwaiseeb–Khafji on the coast and Salmi inland, how to choose between them, and the documents to check.",
    eyebrow: "Kuwait ↔ Saudi Arabia", lead: "Kuwait's land border with Saudi Arabia has two main crossings: Nuwaiseeb–Khafji near the coast and Salmi inland. Kuwait's Abdali crossing is on the Iraq border and is not part of these journeys.",
    facts: [
      { k: "Coastal crossing", v: "Nuwaiseeb (Kuwait) – Al Khafji (Saudi Arabia)" },
      { k: "Inland crossing", v: "Salmi (Kuwait) – Al Ruqi (Saudi Arabia)" },
      { k: "Not this border", v: "Abdali is Kuwait's crossing with Iraq" },
      { k: "Authorities", v: "Kuwait Ministry of Interior and Saudi Ministry of Interior", src: SRC.kwMoi },
    ],
    connects: ["Kuwait City with the Eastern Province (Al Khafji, Dammam, Al Khobar)", "Kuwait with Riyadh and central Saudi Arabia", "Kuwait with Bahrain, Qatar and the UAE, through Saudi Arabia"],
    steps: { ab: ["Drive south to the chosen crossing", "Kuwait departure: passport and customs", "Saudi entry: passport and customs", "Continue into Saudi Arabia"], ba: ["Drive north to the chosen crossing", "Saudi departure: passport and customs", "Kuwait entry: passport and customs", "Continue into Kuwait"] },
    passenger: [...STD_PASSENGER, "Saudi residents: an exit/re-entry visa to leave and return to Saudi Arabia"],
    vehicle: STD_VEHICLE,
    notes: [
      { t: "Coast or inland", d: "Nuwaiseeb–Khafji suits journeys toward the Eastern Province. Salmi is inland. The right one depends on your pickup and destination." },
      { t: "Two separate crossings", d: "They are different ports with their own procedures, so confirm which one your route uses before you set off." },
    ],
    mistakes: ["Confusing Abdali (Iraq) with the Saudi crossings", "Not checking Saudi entry eligibility before departure", "Forgetting insurance valid in Saudi Arabia for a Kuwaiti vehicle"],
    faqs: [
      { q: "What are the Kuwait–Saudi border crossings?", a: "Nuwaiseeb–Khafji near the coast and Salmi–Al Ruqi inland." },
      { q: "Is Abdali a Saudi border crossing?", a: "No. Abdali is Kuwait's crossing with Iraq." },
      { q: "Which crossing should I use for Dammam?", a: "Nuwaiseeb–Khafji is the coastal route toward the Eastern Province, but confirm the crossing for your exact route." },
      { q: "Can GCC Elite Transport arrange Kuwait–Saudi transfers?", a: "Yes, on applicable routes, with the vehicle and driver arrangement confirmed before booking." },
    ],
    sources: [SRC.kwMoi, SRC.saMoi, SRC.saVisa, SRC.saExit], related: [],
  },
  {
    slug: "oman-saudi", corridorId: "om-sa", signature: "desert", a: "Oman", b: "Saudi Arabia", aId: "oman", bId: "saudi-arabia",
    h1: "Empty Quarter Border Guide", title: "Empty Quarter (Rub' Al-Khali) Border Guide | Oman ↔ Saudi Arabia",
    desc: "The Empty Quarter (Rub' Al-Khali) crossing between Oman and Saudi Arabia: the desert road from Ibri to Al-Ahsa, remote-route planning and documents.",
    eyebrow: "Oman ↔ Saudi Arabia", lead: "Oman and Saudi Arabia are linked by a road across the Empty Quarter, one of the largest sand deserts in the world. The Al-Rub' Al-Khali crossing is the land port that connects the two countries.",
    facts: [
      { k: "Crossing", v: "Al-Rub' Al-Khali (Empty Quarter) border crossing, the crossing that connects Saudi Arabia with Oman", src: SRC.saudipediaOman },
      { k: "Road opened", v: "December 2021", src: SRC.saudipediaOman },
      { k: "Route", v: "From Ibri in Oman's Al Dhahirah governorate to the Al-Ahsa region in eastern Saudi Arabia", src: SRC.saudipediaOman },
      { k: "Character", v: "A long road through open desert", src: SRC.spaOman },
    ],
    connects: ["Ibri and northern Oman with eastern Saudi Arabia", "Muscat with Riyadh and the Eastern Province on longer routes"],
    steps: { ab: ["Leave from Ibri or further east", "Long desert stretch to the border", "Oman departure: passport and customs", "Saudi entry: passport and customs", "Long desert stretch toward Al-Ahsa"], ba: ["Leave from Al-Ahsa or beyond", "Long desert stretch to the border", "Saudi departure: passport and customs", "Oman entry: passport and customs", "Continue toward Ibri"] },
    passenger: [...STD_PASSENGER, "Saudi residents: an exit/re-entry visa to leave and return to Saudi Arabia"],
    vehicle: [...STD_VEHICLE, "A vehicle in good condition for long desert driving"],
    notes: [
      { t: "Plan for remoteness", d: "Services along the route are limited. Fuel, water, rest and the vehicle's condition matter more here than on any other GCC corridor." },
      { t: "Daylight and timing", d: "Plan departure so the longest stretches fall at a sensible time of day, and allow for the border on top." },
      { t: "A newer route", d: "The road opened in 2021, so older guides and maps may not show it. Use current sources." },
    ],
    mistakes: ["Setting off without a fuel and rest plan", "Using an old map that predates the road", "Not checking entry requirements for both countries before a remote crossing"],
    faqs: [
      { q: "Is there a direct road between Oman and Saudi Arabia?", a: "Yes. A road across the Empty Quarter opened in December 2021, linking Ibri in Oman with the Al-Ahsa region in Saudi Arabia." },
      { q: "What is the border crossing called?", a: "The Al-Rub' Al-Khali (Empty Quarter) border crossing." },
      { q: "What should I prepare for this route?", a: "Fuel, water, rest stops and a vehicle in good condition, along with passports, entry permissions and vehicle documents." },
      { q: "Can GCC Elite Transport arrange Oman–Saudi transfers?", a: "On applicable routes, reviewed individually because of the distance. We confirm the arrangement before booking." },
    ],
    sources: [SRC.saudipediaOman, SRC.spaOman, SRC.omRop, SRC.saMoi, SRC.saExit], related: [],
  },
  {
    slug: "jordan-saudi", corridorId: "jo-sa", signature: "three", a: "Jordan", b: "Saudi Arabia", aId: "jordan", bId: "saudi-arabia",
    h1: "Jordan–Saudi Border Guide", title: "Jordan–Saudi Border Guide | Al-Omari, Mudawara, Al-Durra",
    desc: "The three Jordan–Saudi land crossings, Al-Omari, Mudawara and Al-Durra, which side is which, how the route decides, and the documents to check.",
    eyebrow: "Jordan ↔ Saudi Arabia", lead: "Jordan is not a GCC country, but it shares a long land border with Saudi Arabia and three crossings along it. Which one a journey uses depends on where it starts and ends, and on current operations.",
    facts: [
      { k: "Northern crossing", v: "Al-Omari (Jordan) – Al-Haditha (Saudi Arabia)" },
      { k: "Southern crossing", v: "Mudawara (Jordan) – Halat Ammar (Saudi Arabia)" },
      { k: "Aqaba crossing", v: "Al-Durra (Jordan) – Haql (Saudi Arabia)" },
      { k: "Closures happen", v: "Al-Durra has been closed for maintenance before, so current status matters", src: SRC.joDurra },
    ],
    connects: ["Amman and northern Jordan with northern and central Saudi Arabia", "Southern Jordan and Aqaba with north-western Saudi Arabia", "Jordan with the GCC, always through Saudi Arabia"],
    steps: { ab: ["Drive to the crossing chosen for your route", "Jordan departure: passport and customs", "Saudi entry: passport and customs", "Continue into Saudi Arabia"], ba: ["Drive to the crossing chosen for your route", "Saudi departure: passport and customs", "Jordan entry: passport and customs", "Continue into Jordan"] },
    passenger: [...STD_PASSENGER, "Religious travelers: the permits Saudi Arabia requires for Umrah or other pilgrimage travel"],
    vehicle: STD_VEHICLE,
    notes: [
      { t: "The route picks the crossing", d: "A northern start suits Al-Omari for central and eastern Saudi destinations. Southern Jordan and Aqaba sit closer to Mudawara and Al-Durra. Confirm for your exact route." },
      { t: "Status can change", d: "A crossing can be closed for maintenance or other reasons. Check before you travel." },
      { t: "Jordan is regional, not GCC", d: "Jordan sets its own entry rules. Arrangements agreed between GCC member states do not automatically apply to Jordanian entry, so check Jordan's official guidance." },
    ],
    mistakes: ["Assuming one crossing suits every route", "Not checking a crossing's current status", "Treating Jordan as part of GCC arrangements"],
    faqs: [
      { q: "What are the Jordan–Saudi border crossings?", a: "Al-Omari–Al-Haditha in the north, Mudawara–Halat Ammar in the south, and Al-Durra–Haql near Aqaba." },
      { q: "Which crossing should I use from Amman?", a: "Al-Omari is the northern crossing and is often considered from Amman, but the right one depends on your destination and current operations." },
      { q: "Is Jordan part of the GCC?", a: "No. Jordan is a regional neighbor connected to the GCC by road through Saudi Arabia." },
      { q: "Can GCC Elite Transport arrange Jordan–Saudi transfers?", a: "Yes, on selected routes, with the crossing and vehicle arrangement confirmed before booking." },
    ],
    sources: [SRC.joMfa, SRC.joDurra, SRC.saMoi, SRC.saVisa], related: ["amman-to-riyadh"],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const guideForCorridor = (id: string) => GUIDES.find((g) => g.corridorId === id);
