// Informational travel guides (AEO cluster). Regulatory statements link to official sources; amounts, fees and times are deliberately left out because they change.
export type Block = { h: string; p?: string[]; list?: string[] };
export type Article = {
  slug: string; widget: "residents" | "compare-status" | "children" | "drive-vs-transfer" | "multi";
  h1: string; title: string; desc: string; eyebrow: string; answer: string; takeaways: string[];
  blocks: Block[]; faqs: { q: string; a: string }[]; sources: [string, string][]; links: [string, string][];
};

const S = {
  exit: ["Saudi exit/re-entry visa service (my.gov.sa)", "https://my.gov.sa/en/services/269423"] as [string, string],
  saMoi: ["Saudi Ministry of Interior", "https://www.moi.gov.sa"] as [string, string],
  saVisa: ["Saudi visa portal", "https://visa.visitsaudi.com"] as [string, string],
  kfca: ["King Fahd Causeway Authority", "https://kfca.sa/en/eservices"] as [string, string],
  aeRoad: ["UAE government: travelling by road", "https://u.ae/en/information-and-services/passports-and-traveling/modes-of-travel/travelling-by-roadways"] as [string, string],
  aeIcp: ["UAE ICP", "https://icp.gov.ae"] as [string, string],
  bhNpra: ["Bahrain NPRA", "https://www.npra.gov.bh"] as [string, string],
  qaMoi: ["Qatar Ministry of Interior", "https://portal.moi.gov.qa"] as [string, string],
  kwMoi: ["Kuwait Ministry of Interior", "https://www.moi.gov.kw"] as [string, string],
  omRop: ["Royal Oman Police", "https://www.rop.gov.om"] as [string, string],
  omTransit: ["Oman land transit visa (gov.om)", "https://gov.om/en/w/get-land-transit-visa"] as [string, string],
  joMfa: ["Jordan Ministry of Foreign Affairs", "https://mfa.gov.jo"] as [string, string],
  gcc: ["GCC General Secretariat", "https://www.gcc-sg.org"] as [string, string],
};

export const ARTICLES: Article[] = [
  {
    slug: "saudi-residents-crossing-by-road", widget: "residents",
    h1: "Saudi Residents Crossing a GCC Border by Road", title: "Saudi Residents (Iqama Holders) Crossing a GCC Border by Road",
    desc: "What Saudi residents should check before leaving Saudi Arabia by road for a GCC country or Jordan, starting with the exit/re-entry visa.",
    eyebrow: "For Iqama holders", answer: "Saudi residents who leave Saudi Arabia and plan to come back need a valid exit/re-entry visa, along with a valid passport and residency permit, and they must meet the entry rules of the country they are driving into. The road crossing does not change these rules.",
    takeaways: ["An exit/re-entry visa is needed to leave temporarily and return", "Your residency permit and passport must be valid for the trip", "The destination country sets its own entry rules for Saudi residents", "Family members each need their own documents"],
    blocks: [
      { h: "Leaving Saudi Arabia: the exit/re-entry visa", p: ["Expatriate residents who leave Saudi Arabia temporarily need an exit/re-entry visa. It is issued through Saudi government digital services, and the official service page describes how it is issued.", "Fees, validity periods and extension rules are set by the Saudi authorities and change from time to time, so check them on the official service before you travel rather than relying on a figure from a blog."] },
      { h: "Your residency permit and passport", p: ["Check that your residency permit (Iqama) and passport are valid for the whole trip, including the return. Problems with either can stop a journey at the border."] },
      { h: "Entering the next country", p: ["Being a Saudi resident does not by itself let you enter another country. Bahrain, the UAE, Qatar, Kuwait, Oman and Jordan each set their own entry rules for residents of other GCC states, and those rules depend on your nationality.", "Check the destination country's official immigration channel for your nationality before you set off."] },
      { h: "Traveling with family", list: ["Each family member needs their own valid passport and residency status", "Each dependent who will return needs their own exit/re-entry visa", "Check the destination's entry rules for every traveler, not just the main resident"] },
      { h: "If you drive your own car", p: ["A Saudi-registered car also needs documents and insurance for the destination country. For Bahrain, the King Fahd Causeway Authority's Jesr app offers vehicle insurance for the crossing. A car that is not in your name needs an authorization from its owner in the form the authorities require."] },
      { h: "If you book a private transfer", p: ["With a private transfer the vehicle documents are the operator's responsibility, but your exit/re-entry visa, passport, residency and entry eligibility remain yours."] },
    ],
    faqs: [
      { q: "Do Saudi residents need an exit/re-entry visa to drive to Bahrain?", a: "Yes, if they plan to return. Expatriate residents need a valid exit/re-entry visa to leave Saudi Arabia temporarily, whether by road or by air." },
      { q: "Where is the exit/re-entry visa issued?", a: "Through Saudi government digital services. The official service page on my.gov.sa describes the process." },
      { q: "Does my Iqama let me enter the UAE or Bahrain?", a: "Not by itself. Each country sets its own entry rules for residents of other GCC states, depending on nationality. Check the destination's official guidance." },
      { q: "Do my children need their own exit/re-entry visas?", a: "Each dependent who will return to Saudi Arabia needs their own valid documents, including an exit/re-entry visa. Check the official service for dependents." },
    ],
    sources: [S.exit, S.saMoi, S.kfca, S.bhNpra, S.aeIcp], links: [["King Fahd Causeway guide", "/border-guides/saudi-bahrain/"], ["Saudi Arabia cross-border transportation", "/saudi-arabia/"], ["All border guides", "/border-guides/"]],
  },
  {
    slug: "gcc-citizens-residents-visitors-land-borders", widget: "compare-status",
    h1: "GCC Citizens, Residents and Visitors at Land Borders", title: "GCC Citizens vs Residents vs Visitors at GCC Land Borders",
    desc: "Why the documents for a GCC land border depend on who you are: a GCC citizen, a resident of a GCC state, or a visitor. What each group should check.",
    eyebrow: "Who you are decides what you carry", answer: "At a GCC land border, citizens of GCC states, expatriate residents and visitors are treated differently. Citizens can generally travel between member states with their national ID card. Residents and visitors travel on passports and need whatever visa or entry permission the destination requires.",
    takeaways: ["GCC citizens can generally use national ID cards between member states", "The ID-card privilege is for citizens, not residents", "Residents and visitors carry passports and check the destination's entry rules", "Jordan is not a GCC state and sets its own rules"],
    blocks: [
      { h: "GCC citizens", p: ["Citizens of GCC states can generally travel between member states using their national ID card instead of a passport. Individual states attach conditions. For example, some require that the citizen also holds a valid passport. Check your own country's current rules."] },
      { h: "Expatriate residents of a GCC state", p: ["Residents travel on their passport. Living in one GCC country does not give automatic entry to another. Check the destination's rules for your nationality and residency.", "Residents of Saudi Arabia also need an exit/re-entry visa to leave and come back."] },
      { h: "Visitors", p: ["Visitors need a valid passport and a visa or entry permission for each country they enter. If you hold a visa, check that it allows entry by land and whether it allows more than one entry, before you plan a route that leaves and comes back."] },
      { h: "Mixed groups", p: ["Families and teams often include people of different status: a GCC citizen, a resident spouse and visiting relatives. Every traveler's documents are checked individually, so plan for the strictest requirement in the group."] },
      { h: "Jordan", p: ["Jordan is not a GCC member. Arrangements between GCC states do not automatically apply to Jordan. Check Jordan's official guidance for entry."] },
    ],
    faqs: [
      { q: "Can GCC citizens cross land borders with an ID card?", a: "Generally yes, between GCC member states, subject to each state's conditions. Check your own country's current rules." },
      { q: "Can GCC residents use their residence card to cross?", a: "No. The ID-card privilege is for citizens. Residents travel on a passport and need any visa or permission the destination requires." },
      { q: "Does a visit visa allow entry by land?", a: "It depends on the visa. Check that yours allows land entry, and multiple entries if you will leave and return." },
      { q: "What if our group has different nationalities?", a: "Each person's documents are checked individually. Plan for every traveler's requirements, not just one." },
    ],
    sources: [S.gcc, S.saMoi, S.aeIcp, S.bhNpra, S.qaMoi, S.kwMoi, S.omRop, S.joMfa], links: [["Saudi residents crossing by road", "/travel-guides/saudi-residents-crossing-by-road/"], ["GCC border crossing guides", "/border-guides/"], ["Cross-border transfers", "/cross-border-transfers/"]],
  },
  {
    slug: "children-across-gcc-land-borders", widget: "children",
    h1: "Traveling With Children Across GCC Land Borders", title: "Traveling With Children Across GCC Land Borders | Practical Guide",
    desc: "For families crossing GCC land borders by road with children: documents for each child, parental consent questions, seats, timing and luggage.",
    eyebrow: "Family road travel", answer: "Every child needs their own valid travel document and any visa or entry permission that applies to them. If a child travels with only one parent or without parents, check whether either country requires consent or other documents. Plan seats, stops and luggage before you leave.",
    takeaways: ["Every child needs their own document", "Check consent rules if a parent is not traveling", "Ask for child seats when you book", "Plan stops and luggage for the longer road legs"],
    blocks: [
      { h: "Documents for each child", p: ["Children are checked like adults. Each needs a valid passport, or for eligible GCC-citizen children an accepted ID, plus any visa, entry permission or residency document that applies to them. Residents' children need their own exit and return documents where the country of residence requires them."] },
      { h: "One parent, or neither", p: ["Some countries ask for proof that a child traveling without one or both parents has permission to travel. Requirements differ by country and change. If a parent is not traveling, check the official guidance of both countries and carry what they ask for."] },
      { h: "Seats and comfort", list: ["Tell your transport provider the ages of the children so suitable seats can be arranged", "Choose a vehicle with space for strollers and bags as well as people", "Plan rest stops on long legs, such as Saudi–UAE or Jordan–Saudi"] },
      { h: "At the border", p: ["Keep every family member's documents together and easy to reach. Border processing time varies and cannot be predicted, so pack snacks, water and something to keep children occupied."] },
    ],
    faqs: [
      { q: "Do babies need their own passport for a GCC road trip?", a: "Children, including babies, need their own valid travel document, unless they are GCC citizens traveling on an accepted national ID. Check the rules for your nationality." },
      { q: "What if a child travels with only one parent?", a: "Some countries may ask for consent from the absent parent or other documents. Check the official guidance of each country before you travel." },
      { q: "Can GCC Elite Transport provide child seats?", a: "Tell us the children's ages when you request a quote so the need is raised before the vehicle is confirmed." },
    ],
    sources: [S.saMoi, S.aeIcp, S.bhNpra, S.qaMoi, S.kwMoi, S.omRop], links: [["Fleet and vehicle categories", "/fleet/"], ["GCC border crossing guides", "/border-guides/"], ["Request a quote", "/contact/"]],
  },
  {
    slug: "driving-your-own-car-vs-private-transfer", widget: "drive-vs-transfer",
    h1: "Driving Your Own Car vs a Private Transfer Across a GCC Border", title: "Drive Your Own Car or Book a Private Transfer Across a GCC Border?",
    desc: "Driving your own car across a GCC border vs booking a private transfer: vehicle documents, insurance, fatigue, cost and who is responsible.",
    eyebrow: "Choosing how to cross", answer: "Driving your own car gives you flexibility but makes you responsible for the vehicle's documents, insurance in the destination country and the whole drive. A private transfer moves the vehicle paperwork and driving to the operator, at a higher cost. Your passport, visa and entry eligibility stay your responsibility either way.",
    takeaways: ["Your own car needs documents and insurance valid in the destination", "A car not in your name needs the owner's authorization", "Rental cars are often restricted to one country", "Passenger documents are always yours, however you travel"],
    blocks: [
      { h: "If you drive your own car", list: ["Carry the original registration and your driving licence", "Get insurance that covers the destination country. For Oman, the UAE government advises carrying original vehicle documents and checking insurance", "For Bahrain, KFCA's Jesr app offers vehicle insurance for the causeway crossing", "A car that is not registered to you needs the owner's authorization in the form the authorities require", "Check the rental agreement: many rental cars may not leave the country"] },
      { h: "If you book a private transfer", p: ["The operator handles the vehicle, its documents and the driving. Whether one vehicle and driver continue across the border depends on the route and the rules that apply, and a good operator tells you before you book."] },
      { h: "Long routes change the answer", p: ["On a short crossing such as Dammam–Bahrain, driving yourself is straightforward for many people. On long routes such as Riyadh–Dubai, Makkah–Dubai or across the Empty Quarter, fatigue and planning weigh more heavily, and a transfer means nobody in your group has to drive."] },
      { h: "Cost", p: ["Driving yourself usually costs less in direct terms: fuel, tolls and insurance. A private transfer costs more, and the price depends on the route, vehicle, passengers, luggage and trip type."] },
    ],
    faqs: [
      { q: "Is my car insurance valid in other GCC countries?", a: "Not automatically. Check that your policy covers the destination, or buy cover that does. For Bahrain, KFCA's Jesr app offers insurance for the causeway crossing." },
      { q: "Can I drive a rental car across a GCC border?", a: "Only if the rental company allows it and the border countries' requirements are met. Many rentals are limited to one country." },
      { q: "Does a private transfer handle my visa?", a: "No. The operator handles the vehicle. Your passport, visa and entry eligibility remain your responsibility." },
    ],
    sources: [S.aeRoad, S.kfca, S.omRop, S.saMoi], links: [["Fleet", "/fleet/"], ["Cross-border transfers", "/cross-border-transfers/"], ["Oman–UAE border guide", "/border-guides/oman-uae/"]],
  },
  {
    slug: "planning-a-multi-country-gcc-road-trip", widget: "multi",
    h1: "Planning a Multi-Country GCC Road Trip", title: "Planning a Multi-Country GCC Road Trip | Borders, Visas, Order",
    desc: "Planning a road trip through several GCC countries: which connect by land, border order, transit visas, insurance per country and time buffers.",
    eyebrow: "More than one border", answer: "Plan a multi-country GCC road trip border by border. Check which countries actually share a land border, put them in an order that works, and confirm passport, visa, transit and insurance requirements for each crossing separately. Saudi Arabia is the land hub for most routes.",
    takeaways: ["Saudi Arabia connects by land to Bahrain, Qatar, Kuwait, the UAE, Oman and Jordan", "Qatar, Bahrain and Kuwait are reached only through Saudi Arabia", "Each border needs its own document and insurance check", "Oman offers a land transit visa for eligible travelers"],
    blocks: [
      { h: "Who borders whom", p: ["Saudi Arabia shares land borders with Bahrain (by causeway), Qatar, Kuwait, the UAE, Oman and Jordan. The UAE also borders Oman. Qatar, Bahrain and Kuwait have no land links with each other or with the UAE, so any trip between them passes through Saudi Arabia."] },
      { h: "Set the order", p: ["Arrange countries so each step crosses a real land border. Kuwait → Saudi Arabia → Bahrain works. Kuwait → Bahrain directly does not. Use the route builder on this page to check a sequence."] },
      { h: "Check each border separately", list: ["Passport validity for the whole trip", "A visa or entry permission for each country, allowing land entry and enough entries", "Exit/re-entry for Saudi residents", "A land transit visa if you only pass through Oman and need one", "Vehicle insurance valid in every country on the route"] },
      { h: "Time buffers", p: ["Every border adds time that cannot be predicted. Plan generous buffers, avoid tight onward connections, and do not stack several crossings into one day if you can avoid it."] },
    ],
    faqs: [
      { q: "Can I drive from Qatar to the UAE?", a: "Only through Saudi Arabia. Qatar's only land border is with Saudi Arabia." },
      { q: "Can I drive from Bahrain to Kuwait?", a: "Only through Saudi Arabia. Bahrain connects by land only to Saudi Arabia, across the King Fahd Causeway." },
      { q: "Do I need a visa for a country I only pass through?", a: "Possibly. Oman, for example, offers a land transit visa for eligible travelers. Check each transit country's rules." },
      { q: "Can one private transfer cover several countries?", a: "Sometimes, but each border is its own arrangement, and a vehicle or driver change may apply. We plan multi-country trips individually." },
    ],
    sources: [S.omTransit, S.saMoi, S.aeRoad, S.kfca, S.gcc], links: [["Border network map", "/border-guides/"], ["Routes explorer", "/routes/"], ["Corporate itineraries", "/corporate/"]],
  },
];
export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
