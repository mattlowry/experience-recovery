export type LocationPage = {
  slug: string;
  name: string;
  county: string;
  drive: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  local: string;
  faqs: { q: string; a: string }[];
};

export const locations: LocationPage[] = [
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    drive: "On campus — 3919 W. Hazard Ave.",
    title: "Santa Ana Drug & Alcohol Rehab | In-Network Treatment",
    description:
      "In-network drug and alcohol rehab in Santa Ana, California. Medically supervised detox and residential treatment at 3919 W. Hazard Ave. Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Santa Ana rehab, Santa Ana drug rehab, Santa Ana alcohol detox, in network rehab Santa Ana CA, Hazard Avenue treatment center",
    intro:
      "Experience Recovery’s treatment campus is in Santa Ana, at 3919 W. Hazard Ave. If you are searching for drug or alcohol rehab in Santa Ana — or in-network detox near downtown Santa Ana, South Coast Plaza, or the 55/22 corridor — this is the facility, not a satellite office.",
    local:
      "Hazard Avenue sits on the west side of Santa Ana, with freeway access to the 55, 22, and 405. Families coming from John Wayne Airport (SNA) are typically 15–20 minutes from campus in light traffic. Treatment is delivered here unless a page says otherwise.",
    faqs: [
      {
        q: "Where is Experience Recovery in Santa Ana?",
        a: "3919 W. Hazard Ave., Santa Ana, CA 92703. The DHCS license also lists 3921 W. Hazard Ave. Admissions: (866) 514-7282.",
      },
      {
        q: "Do you take Anthem, Blue Shield, and other PPO plans in Santa Ana?",
        a: "Yes. We are in-network with Anthem, Blue Shield of California, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE. We verify the specific plan before admission.",
      },
    ],
  },
  {
    slug: "orange-county",
    name: "Orange County",
    county: "Orange County",
    drive: "Campus is in Santa Ana, central OC",
    title: "Orange County Rehab | In-Network Detox & Residential",
    description:
      "Orange County drug and alcohol rehab in Santa Ana. In-network detox and residential treatment for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE PPO-style plans.",
    keywords:
      "Orange County rehab, Orange County drug rehab, OC alcohol detox, in network rehab Orange County CA, residential treatment Orange County",
    intro:
      "Experience Recovery is an Orange County treatment program — licensed in Santa Ana, used by people from every OC city and by families elsewhere in Southern California who need an in-network residential bed.",
    local:
      "Orange County searches are crowded with directories that list the same five luxury brand names. We are a Joint Commission–accredited, DHCS-licensed detox and residential program that bills in-network for the commercial plans people here actually carry.",
    faqs: [
      {
        q: "Is there an in-network rehab in Orange County for PPO insurance?",
        a: "Yes. Experience Recovery in Santa Ana is in-network with Anthem, Blue Shield of California, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE. Call (866) 514-7282 to verify your card.",
      },
      {
        q: "Do you offer both detox and residential treatment in OC?",
        a: "Yes. Medically supervised withdrawal management and residential treatment are both delivered on the Santa Ana campus, by one team.",
      },
    ],
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    drive: "About 15–25 minutes via the 405 or 5",
    title: "Irvine Drug & Alcohol Rehab | In-Network Care in OC",
    description:
      "In-network rehab for Irvine residents. Detox and residential treatment in nearby Santa Ana. Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE PPO plans.",
    keywords:
      "Irvine rehab, Irvine drug rehab, Irvine alcohol treatment, in network rehab Irvine CA, PPO detox near Irvine",
    intro:
      "If you live or work in Irvine and you need medically supervised detox or residential treatment, Experience Recovery is the in-network Orange County campus most Irvine PPO cards can actually use. Treatment is in Santa Ana, a short drive up the 405 or 5.",
    local:
      "Irvine searches often mix sober-living listings with licensed residential programs. We are a DHCS-licensed detox and residential facility, not a house with a workbook. Many Irvine employer plans — tech, biomedical, UC-adjacent groups — are Anthem, UHC, or Cigna PPOs. We verify those daily.",
    faqs: [
      {
        q: "Is there an in-network drug rehab near Irvine?",
        a: "Experience Recovery in Santa Ana is in-network with Anthem, Blue Shield, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE. Drive time from Irvine is typically 15–25 minutes.",
      },
      {
        q: "Can I start detox the same day from Irvine?",
        a: "When a bed is available and the clinical picture supports it, yes. Call admissions so we can verify insurance and time arrival.",
      },
    ],
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    drive: "About 15–20 minutes via the 5 or 57",
    title: "Anaheim Rehab | In-Network Detox & Residential Nearby",
    description:
      "In-network rehab serving Anaheim. Medically supervised detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
    keywords:
      "Anaheim rehab, Anaheim drug rehab, Anaheim alcohol detox, in network treatment Anaheim CA, PPO rehab near Disneyland",
    intro:
      "Anaheim families looking for licensed detox or residential treatment do not have to leave Orange County or go out of network. Experience Recovery’s Santa Ana campus is a short drive south of Anaheim via the 5 or 57.",
    local:
      "Anaheim, Anaheim Hills, and the resort-area workforce carry a mix of union, hospitality, and municipal plans — Anthem Blue Cross and Blue Shield show up constantly. We verify those plans before anyone drives down Harbor or the 5.",
    faqs: [
      {
        q: "Do you take Anthem or Blue Shield from Anaheim?",
        a: "Yes. We are in-network with both, plus UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE. Verification happens before admission.",
      },
      {
        q: "Is this closer than going to LA for inpatient rehab?",
        a: "For most Anaheim addresses, yes. Campus is in Santa Ana, still inside Orange County.",
      },
    ],
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    drive: "About 15–25 minutes via the 405 or Beach Blvd",
    title: "Huntington Beach Rehab | In-Network OC Treatment",
    description:
      "In-network drug and alcohol rehab for Huntington Beach. Detox and residential care in Santa Ana. PPO plans including Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Huntington Beach rehab, Huntington Beach drug rehab, HB alcohol treatment, in network rehab Huntington Beach CA",
    intro:
      "Huntington Beach residents searching for in-network detox or residential treatment can use Experience Recovery in Santa Ana. It is the licensed campus — not a beach sober home — and it bills the PPO plans coastal OC families actually have.",
    local:
      "From Huntington Beach, the 405 east or Beach Boulevard north gets you to Hazard Avenue without leaving the county. We see HB, Fountain Valley, and Westminster addresses on the same insurance mix: Anthem, UHC, Aetna, and Blue Shield PPOs.",
    faqs: [
      {
        q: "Is there an in-network alcohol rehab near Huntington Beach?",
        a: "Yes. Experience Recovery in Santa Ana is in-network with major PPO plans and provides medically supervised alcohol detox and residential treatment.",
      },
      {
        q: "Do you treat working professionals from the coast?",
        a: "Yes. Admission is based on clinical need and benefits, not on a luxury-program brand. Calls are confidential.",
      },
    ],
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    county: "Orange County",
    drive: "About 20–30 minutes via the 55 or 405",
    title: "Newport Beach Rehab | In-Network Alternative in Santa Ana",
    description:
      "In-network rehab for Newport Beach and Newport Coast. Licensed detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
    keywords:
      "Newport Beach rehab, Newport Beach drug rehab in network, PPO rehab near Newport Beach, Orange County in network detox",
    intro:
      "Newport Beach has no shortage of treatment advertising. What it has less of is a straight answer about in-network PPO billing. Experience Recovery is a DHCS-licensed, Joint Commission–accredited program in Santa Ana that is in-network with Anthem, Blue Shield, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE.",
    local:
      "From Newport, the 55 north is the usual route. If a Newport or Costa Mesa broker is steering you to an out-of-network program, ask them to put the patient-responsibility estimate in writing — then call us for a real verification.",
    faqs: [
      {
        q: "Are you in-network, or a Newport-style out-of-network luxury program?",
        a: "We are in-network with the major commercial plans listed on this site. We do not sell out-of-network surprise bills as a feature.",
      },
      {
        q: "Can Newport Beach families visit campus?",
        a: "Family involvement is part of residential treatment when it is clinically appropriate. Visiting guidelines are explained at admission.",
      },
    ],
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    drive: "About 10–20 minutes via the 55 or 405",
    title: "Costa Mesa Rehab | In-Network Detox Nearby",
    description:
      "In-network rehab serving Costa Mesa. Detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE PPO plans.",
    keywords:
      "Costa Mesa rehab, Costa Mesa drug rehab, South Coast Plaza area detox, in network rehab Costa Mesa CA",
    intro:
      "Costa Mesa is close enough that people sometimes assume treatment has to be farther away to “count.” It does not. Experience Recovery is in Santa Ana, a short drive from South Coast Plaza, the 55, and the Costa Mesa / Newport corridor.",
    local:
      "A large share of Costa Mesa and South Coast Metro employer plans are Cigna, United, or Anthem PPOs. We verify those before you take the 55 north.",
    faqs: [
      {
        q: "How far is Experience Recovery from Costa Mesa?",
        a: "Typically 10–20 minutes depending on the 55 and 405. Campus address: 3919 W. Hazard Ave., Santa Ana.",
      },
      {
        q: "Do you accept Cigna and United from Costa Mesa employers?",
        a: "Yes. We are in-network with Cigna and UnitedHealthcare, including many Optum-managed behavioral health benefits.",
      },
    ],
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    drive: "About 10–15 minutes via the 55 or Chapman",
    title: "Orange CA Rehab | In-Network Treatment in Santa Ana",
    description:
      "In-network rehab for the City of Orange. Detox and residential care minutes away in Santa Ana. Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Orange CA rehab, rehab in Orange California, in network detox Orange CA, Chapman University area treatment",
    intro:
      "If you are in the City of Orange — Old Towne, the hospital corridor, or East Orange — Experience Recovery is the nearby in-network residential option. Campus is in Santa Ana, generally 10–15 minutes without leaving central OC.",
    local:
      "The City of Orange sits against a dense hospital and municipal-employer belt. Anthem Blue Cross and Blue Shield of California cards are common. We verify them the same day you call.",
    faqs: [
      {
        q: "Is there a licensed residential rehab near Orange, CA?",
        a: "Experience Recovery in Santa Ana provides DHCS-licensed detox and residential treatment and is a short drive from the City of Orange.",
      },
      {
        q: "Do you take Blue Shield of California?",
        a: "Yes. We are in-network with Blue Shield of California. Benefits are verified before admission.",
      },
    ],
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    drive: "About 10–15 minutes via the 55 or 5",
    title: "Tustin Rehab | In-Network Drug & Alcohol Treatment",
    description:
      "In-network rehab for Tustin and Tustin Ranch. Detox and residential treatment in Santa Ana. Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Tustin rehab, Tustin drug rehab, Tustin alcohol treatment, in network rehab Tustin CA",
    intro:
      "Tustin and Tustin Ranch residents can reach Experience Recovery in minutes. The program is licensed residential and detox care — in-network with the PPO plans Tustin families typically carry.",
    local:
      "From Tustin, the 55 or the 5 puts Hazard Avenue close. We regularly verify Anthem, UHC, and Aetna plans for Tustin Unified, county, and private-employer households.",
    faqs: [
      {
        q: "How close is campus to Tustin?",
        a: "About 10–15 minutes in normal traffic. Address: 3919 W. Hazard Ave., Santa Ana, CA 92703.",
      },
      {
        q: "Can you verify Aetna or United the same day?",
        a: "Yes. Have the member ID and date of birth ready when you call (866) 514-7282.",
      },
    ],
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    drive: "About 10–15 minutes via the 22 or Harbor",
    title: "Garden Grove Rehab | In-Network OC Detox & Residential",
    description:
      "In-network rehab serving Garden Grove. Santa Ana detox and residential treatment for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
    keywords:
      "Garden Grove rehab, Garden Grove drug rehab, in network treatment Garden Grove CA",
    intro:
      "Garden Grove is next door. Experience Recovery’s Santa Ana campus is the in-network detox and residential program for people who do not want to leave the county or go out of network.",
    local:
      "Harbor Boulevard and the 22 are the usual routes. Garden Grove, Westminster, and Stanton share a similar insurance mix — Anthem, Blue Shield, and employer PPOs. We verify in the language on the card, including Spanish-speaking family members on the call when that helps.",
    faqs: [
      {
        q: "Do you serve Garden Grove with in-network insurance?",
        a: "Yes. We are in-network with Anthem, Blue Shield of California, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE.",
      },
      {
        q: "Can a family member call for someone in Garden Grove?",
        a: "Yes. The first call is often a partner or parent. Calls are confidential. We will tell you what we can do without the person on the line, and what we need them for.",
      },
    ],
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    drive: "About 20–30 minutes via the 57 or 5",
    title: "Fullerton Rehab | In-Network Treatment in Orange County",
    description:
      "In-network rehab for Fullerton and north Orange County. Detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Fullerton rehab, Fullerton drug rehab, north Orange County in network detox",
    intro:
      "North Orange County — Fullerton, Brea, La Habra, Placentia — can use Experience Recovery without going into Los Angeles County. Campus is in Santa Ana, typically 20–30 minutes on the 57 or 5.",
    local:
      "Cal State Fullerton–area employers and north-county school districts often issue Anthem or Blue Shield PPO cards. We verify those plans for residential medical necessity, not just “do you take insurance.”",
    faqs: [
      {
        q: "Is there an in-network residential program for Fullerton?",
        a: "Experience Recovery in Santa Ana is in-network with major commercial PPO plans and TRICARE. Drive time from Fullerton is usually under half an hour.",
      },
      {
        q: "Do you treat college-age adults?",
        a: "We treat adults. Admissions will confirm age and clinical fit on the first call.",
      },
    ],
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    drive: "About 25–40 minutes via the 5",
    title: "Mission Viejo Rehab | South County In-Network Care",
    description:
      "In-network rehab for Mission Viejo, Lake Forest, and south Orange County. Detox and residential treatment in Santa Ana. Anthem, Blue Shield, United, Aetna, Cigna, Humana, TRICARE.",
    keywords:
      "Mission Viejo rehab, south Orange County drug rehab, Lake Forest alcohol treatment in network",
    intro:
      "South County families in Mission Viejo, Lake Forest, and Rancho Santa Margarita often get steered to out-of-network coastal programs. Experience Recovery is in-network, licensed, and still inside Orange County — up the 5 in Santa Ana.",
    local:
      "The 5 north is the straight shot. South County employer and Saddleback-area plans are frequently United, Cigna, or Anthem. We verify them before you sit in 5-freeway traffic.",
    faqs: [
      {
        q: "How far is Santa Ana campus from Mission Viejo?",
        a: "Typically 25–40 minutes on the 5, depending on time of day.",
      },
      {
        q: "Do you take UnitedHealthcare from south OC employers?",
        a: "Yes. We are in-network with UnitedHealthcare, including many Optum and UMR arrangements.",
      },
    ],
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    drive: "About 25–40 minutes via the 405 or 22",
    title: "Long Beach Rehab | In-Network Treatment in Nearby OC",
    description:
      "In-network rehab for Long Beach residents. Orange County detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
    keywords:
      "Long Beach rehab, Long Beach drug rehab in network, PPO rehab near Long Beach CA, Signal Hill alcohol treatment",
    intro:
      "Long Beach sits on the county line. People there often get Los Angeles listings that are out of network or waitlisted. Experience Recovery in Santa Ana is a short 405/22 drive and in-network with the PPO plans Long Beach and Signal Hill families actually have.",
    local:
      "Port, city, healthcare, and school-district plans in Long Beach are heavily Anthem, Blue Shield, and UHC. You do not have to stay inside LA County for those benefits to work at an in-network California facility.",
    faqs: [
      {
        q: "Can Long Beach residents use an Orange County in-network rehab?",
        a: "Yes. In-network status follows the plan and the facility, not the county line. We verify Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
      },
      {
        q: "How do I get there from Long Beach?",
        a: "The 405 south to the 22 east, or the 22 all the way, is the usual route to west Santa Ana. Admissions will send arrival instructions after verification.",
      },
    ],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    drive: "About 35–75 minutes depending on starting point and traffic",
    title: "Los Angeles In-Network Rehab | Orange County Campus",
    description:
      "In-network rehab for Los Angeles residents who want Orange County detox and residential treatment. Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE PPO plans.",
    keywords:
      "Los Angeles in network rehab, LA PPO drug rehab, in network residential treatment Los Angeles County, Anthem rehab near Los Angeles",
    intro:
      "Los Angeles has hundreds of treatment listings and a smaller number of programs that are both licensed for residential detox and in-network with the major PPOs. Experience Recovery is in Santa Ana — used by people from the Westside, the Valley, Pasadena, and the South Bay who want a verifiable in-network admission rather than an out-of-network LA package.",
    local:
      "From LA, John Wayne Airport is the closest airfield; LAX is workable if someone is flying in. Driving time depends entirely on the 405 and 5. We time arrivals after benefits are verified so you are not sitting in traffic with an unconfirmed authorization.",
    faqs: [
      {
        q: "Can I use my Los Angeles Anthem or United PPO at a Santa Ana rehab?",
        a: "Usually yes on a commercial PPO. We verify that your group allows in-network California residential SUD treatment at this facility before you drive south.",
      },
      {
        q: "Why would someone in LA come to Orange County?",
        a: "In-network access, a single licensed campus for detox and residential, and distance from the same neighborhood triggers. Those are clinical and financial reasons, not a lifestyle pitch.",
      },
    ],
  },
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    drive: "About 40–60 minutes via the 91 or 91/55",
    title: "Riverside Rehab | In-Network Treatment in Orange County",
    description:
      "In-network rehab for Riverside and the Inland Empire. Detox and residential treatment in Santa Ana for Anthem, Blue Shield, United, Aetna, Cigna, Humana, and TRICARE.",
    keywords:
      "Riverside rehab, Inland Empire in network rehab, Riverside CA drug rehab PPO, Corona alcohol treatment in network",
    intro:
      "Inland Empire families in Riverside and Corona often face a thin in-network residential market. Experience Recovery in Santa Ana is an in-network option down the 91 — licensed detox and residential, not a distant luxury brand.",
    local:
      "The 91 west to the 55 south is the usual path. Riverside County employer and school-district plans are frequently Anthem or Blue Shield. We verify IE cards every week.",
    faqs: [
      {
        q: "Do you take Inland Empire Anthem and Blue Shield plans?",
        a: "Yes. We are in-network with Anthem and Blue Shield of California. We confirm the specific group before admission.",
      },
      {
        q: "Is Santa Ana realistic from Riverside for family visits?",
        a: "Drive time is typically 40–60 minutes. Family programming is scheduled; we will tell you what visiting looks like before you commit.",
      },
    ],
  },
  {
    slug: "san-diego",
    name: "San Diego",
    county: "San Diego County",
    drive: "About 75–120 minutes via the 5, depending on starting point",
    title: "San Diego In-Network Rehab | Orange County TRICARE & PPO",
    description:
      "In-network rehab for San Diego County residents, including TRICARE and commercial PPO plans. Detox and residential treatment in Santa Ana, Orange County.",
    keywords:
      "San Diego in network rehab, TRICARE rehab near San Diego, PPO residential treatment San Diego County, Camp Pendleton rehab Orange County",
    intro:
      "San Diego County has its own treatment market. People still come north when they need a specific in-network bed, a TRICARE-capable admission, or distance from San Diego neighborhood triggers. Experience Recovery is in Santa Ana, on the 5 corridor between OC and San Diego County.",
    local:
      "From San Diego, Oceanside, or the Pendleton area, the 5 north is the route. TRICARE is a common reason San Diego–area families call. Commercial PPO holders (UHC, Cigna, Aetna, Anthem) are the rest. We verify before anyone makes that drive.",
    faqs: [
      {
        q: "Do you accept TRICARE from the San Diego / Pendleton area?",
        a: "Yes. We are in-network with TRICARE. Active-duty admissions have additional authorization steps; retirees and family members are verified by the card they hold.",
      },
      {
        q: "Is it worth driving from San Diego for in-network PPO rehab?",
        a: "If your local options are out of network or full, yes — but only after we verify benefits and a bed. Call first. Do not drive unconfirmed.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
