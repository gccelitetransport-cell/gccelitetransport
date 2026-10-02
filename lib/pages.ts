// Landing pages linked from the homepage. Replace the intro with full content as each page is built.
export type PageDef = { slug: string; title: string; intro: string; description: string; legal?: boolean };

const country = (slug: string, name: string, intro: string): PageDef => ({
  slug, title: `${name} Cross-Border Transport`, intro, description: `Private road transportation to and from ${name} across the GCC. Routes are confirmed individually.`,
});

export const PAGES: PageDef[] = [
  { slug: "cross-border-transfers", title: "Private Cross-Border Transfers", description: "Pre-booked private road transfers between GCC countries.", intro: "Pre-booked private transportation for individuals, families and groups traveling between GCC countries. Send your route and we will confirm the vehicle arrangement and price before you travel." },
  { slug: "routes", title: "GCC Cross-Border Routes", description: "Cross-border corridors we plan private transfers on across the GCC.", intro: "We plan journeys between Bahrain, Saudi Arabia, the UAE, Oman, Qatar and Kuwait where a practical land route exists. Full route pages are published only for routes we actively service." },
  { slug: "fleet", title: "Fleet", description: "Executive sedans, SUVs, vans and minibuses for GCC road journeys.", intro: "From executive sedans to minibuses, choose a vehicle category by passenger count and luggage. Final vehicle availability is confirmed for your route." },
  { slug: "corporate", title: "Corporate GCC Transportation", description: "Executive and corporate transportation across GCC markets.", intro: "Executive transfers, cross-border employee transportation, airport transfers, multi-day chauffeur arrangements and recurring corporate routes. Tell us about your requirements and we will respond with options." },
  { slug: "airport-transfers", title: "GCC Airport Transfers", description: "Private airport transfers, including cross-border airport journeys.", intro: "Airport to hotel, hotel to airport, airport-to-airport connections and cross-border airport journeys for families and companies." },
  { slug: "border-guides", title: "GCC Border Crossing Guides", description: "Practical points to check before a GCC border crossing.", intro: "Border requirements can vary by country, vehicle type, nationality and travel purpose. Guides will cover the practical details passengers should check before booking." },
  { slug: "about", title: "About GCC Elite Transport", description: "A regional GCC cross-border transportation company.", intro: "GCC Elite Transport coordinates private road transportation between GCC countries, planning each journey around its specific route." },
  { slug: "contact", title: "Contact", description: "Contact GCC Elite Transport on WhatsApp or phone.", intro: "Message us on WhatsApp or call to request a quote. Share your pickup location, destination, date and passenger count." },
  country("saudi-arabia", "Saudi Arabia", "Private road transfers linking Saudi cities and airports with Bahrain, Qatar, Kuwait, the UAE and Oman, subject to the route."),
  country("bahrain", "Bahrain", "Private road transfers connecting Bahrain with major GCC destinations, including journeys via the King Fahd Causeway where applicable."),
  country("uae", "United Arab Emirates", "Pick-ups across the Emirates for road journeys toward Oman and, where the route allows, Saudi Arabia and other GCC markets."),
  country("qatar", "Qatar", "Private transfers between Doha and the Saudi land border, with onward arrangements confirmed for each journey."),
  country("kuwait", "Kuwait", "Road transfers from Kuwait City and nearby areas toward Saudi Arabia and onward GCC destinations, planned per route."),
  country("oman", "Oman", "Private journeys connecting Muscat and northern Oman with the UAE, plus longer routes toward Saudi Arabia where available."),
  { slug: "privacy-policy", title: "Privacy Policy", legal: true, description: "How GCC Elite Transport handles your information.", intro: "We use the details you submit in a quote request only to review and arrange your journey. This page will be expanded with the full privacy policy." },
  { slug: "terms", title: "Terms & Conditions", legal: true, description: "Terms for GCC Elite Transport services.", intro: "Journeys are confirmed individually. Border, visa, immigration and vehicle requirements remain subject to the relevant authorities. Full terms will be published here." },
  { slug: "cookie-policy", title: "Cookie Policy", legal: true, description: "Cookie information for gccelitetransport.com.", intro: "This website does not currently set advertising cookies. This page will be updated if that changes." },
];
