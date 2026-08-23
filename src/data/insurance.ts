export type InsurancePlan = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  planTypes: string[];
  searchPhrases: string[];
  faqs: { q: string; a: string }[];
  body: { heading: string; html: string }[];
};

export const insurancePlans: InsurancePlan[] = [
  {
    slug: "anthem",
    name: "Anthem",
    short: "Anthem Blue Cross",
    title: "Anthem In-Network Rehab in Orange County | Experience Recovery",
    description:
      "In-network Anthem Blue Cross and Anthem PPO drug and alcohol rehab in Santa Ana, Orange County. Verify Anthem benefits for detox and residential treatment in Southern California.",
    keywords:
      "Anthem in network rehab Orange County, Anthem Blue Cross drug rehab Santa Ana, Anthem PPO alcohol treatment Southern California, Anthem detox Orange County",
    intro:
      "Experience Recovery is in-network with Anthem, including Anthem Blue Cross plans commonly held by people who live and work across Orange County, Los Angeles County, and the Inland Empire. If your card says Anthem or Anthem Blue Cross, call admissions. We verify benefits before you travel to campus.",
    planTypes: [
      "Anthem PPO",
      "Anthem Blue Cross PPO",
      "Anthem EPO (when behavioral health is included)",
      "Employer-sponsored Anthem commercial plans",
    ],
    searchPhrases: [
      "Anthem in network rehab near me",
      "Anthem PPO drug rehab Orange County",
      "Anthem Blue Cross detox Santa Ana",
      "Does Anthem cover residential treatment in California",
    ],
    faqs: [
      {
        q: "Is Experience Recovery in-network with Anthem?",
        a: "Yes. We are in-network with Anthem, including Anthem Blue Cross commercial plans used throughout Southern California. Your exact benefits, deductible, and authorization rules still depend on the specific plan printed on your card. We verify that on the first call.",
      },
      {
        q: "Does Anthem PPO cover drug and alcohol detox in Orange County?",
        a: "Most Anthem PPO plans include benefits for medically necessary substance use disorder treatment, including withdrawal management and residential care. Anthem typically requires clinical documentation and, for residential stays, utilization review. We handle the verification and the clinical information Anthem asks for.",
      },
      {
        q: "Can I use Anthem from Los Angeles or San Diego at your Santa Ana campus?",
        a: "Yes. In-network status is tied to the facility and the plan, not to your home ZIP code. People regularly come from Los Angeles, Long Beach, the South Bay, the Inland Empire, and San Diego County. If your Anthem plan includes out-of-area or California-wide behavioral health benefits, we confirm that before admission.",
      },
    ],
    body: [
      {
        heading: "Anthem PPO and commercial plans we see most often",
        html: `<p>In Southern California, Anthem and Anthem Blue Cross show up on a large share of employer PPO cards — aerospace, healthcare systems, school districts, municipal jobs, and mid-size companies that carved behavioral health through Anthem. The card may say Anthem, Anthem Blue Cross, or Blue Cross of California depending on the year the plan was issued.</p><p>PPO plans are usually the most straightforward path into residential treatment: you can come to an in-network facility without a primary-care referral, and we bill Anthem directly after we verify benefits and medical necessity.</p>`,
      },
      {
        heading: "What Anthem usually wants before authorizing residential care",
        html: `<p>Anthem’s behavioral health review looks at ASAM-aligned criteria: recent use, withdrawal risk, failed outpatient attempts when relevant, medical comorbidity, and whether a less intensive setting would be unsafe. That is why the first call matters. We collect the clinical history Anthem reviewers actually use, then we request authorization for detox and, when indicated, a residential continuation stay.</p><p>Authorization is not the same thing as a guarantee of a set number of days. Length of stay is clinical, and Anthem may concurrent-review as treatment proceeds. We keep families informed as reviews happen.</p>`,
      },
    ],
  },
  {
    slug: "blue-shield",
    name: "Blue Shield of California",
    short: "Blue Shield",
    title: "Blue Shield of California In-Network Rehab | Orange County",
    description:
      "In-network Blue Shield of California PPO rehab in Santa Ana. Verify Blue Shield benefits for detox and residential addiction treatment serving Southern California.",
    keywords:
      "Blue Shield in network rehab Orange County, Blue Shield of California PPO drug rehab, Blue Shield detox Santa Ana, Blue Shield alcohol treatment Southern California",
    intro:
      "Blue Shield of California is one of the plans we are in-network with. If you have a Blue Shield PPO — or another Blue Shield commercial plan with behavioral health benefits — we can verify coverage for medically supervised detox and residential treatment at our Santa Ana campus.",
    planTypes: [
      "Blue Shield of California PPO",
      "Blue Shield Trio / Access+ (when SUD benefits apply)",
      "Employer Blue Shield commercial plans",
      "BlueCard members visiting California (verified case by case)",
    ],
    searchPhrases: [
      "Blue Shield in network rehab Orange County",
      "Blue Shield PPO alcohol rehab near me",
      "Blue Shield of California detox",
      "Does Blue Shield cover inpatient rehab in Santa Ana",
    ],
    faqs: [
      {
        q: "Are you in-network with Blue Shield of California?",
        a: "Yes. Experience Recovery is in-network with Blue Shield of California. Individual benefits still vary by group number, deductible, and whether substance use treatment requires prior authorization. We check that before you commit to coming in.",
      },
      {
        q: "Does Blue Shield cover residential rehab or only outpatient?",
        a: "Blue Shield commercial plans generally include a substance use disorder benefit that can cover medically necessary residential treatment and withdrawal management. HMO-style products may have tighter network or referral rules than PPO. Tell us the three-letter prefix and group number on the card and we will read the actual benefit, not a generic summary.",
      },
      {
        q: "I have Blue Shield through a California employer but I live in Riverside / LA. Can I come?",
        a: "Yes. Treatment is delivered in Santa Ana. People drive from Riverside, Corona, Pasadena, the Westside, and south Orange County every week. In-network benefits travel with the plan.",
      },
    ],
    body: [
      {
        heading: "Blue Shield PPO in Southern California",
        html: `<p>Blue Shield of California PPO is common among professionals, unions, and families who specifically chose a PPO so they would not be locked to a small HMO panel when they needed specialty care. Addiction treatment is one of the times that choice matters. An in-network residential facility in Orange County can be used by a subscriber who lives in Los Angeles, San Bernardino, or San Diego County as long as the plan’s behavioral health benefit allows it — which we confirm on the verification call.</p>`,
      },
      {
        heading: "How we verify a Blue Shield card",
        html: `<p>We collect the member ID, group number, and date of birth, then we check eligibility, in-network status for this facility, deductible remaining, out-of-pocket maximum, and whether detox or residential needs a pre-authorization. If Magellan, Blue Shield Behavioral Health, or another carve-out manages the SUD benefit, we call that vendor — not just the medical line on the back of the card.</p>`,
      },
    ],
  },
  {
    slug: "united-healthcare",
    name: "UnitedHealthcare",
    short: "United",
    title: "UnitedHealthcare In-Network Rehab Orange County | UHC & Optum",
    description:
      "In-network UnitedHealthcare, Optum, and UMR rehab in Santa Ana. Verify UHC PPO benefits for detox and residential treatment in Southern California.",
    keywords:
      "UnitedHealthcare in network rehab Orange County, UHC PPO drug rehab Santa Ana, Optum residential treatment California, UMR detox Orange County, United insurance rehab Southern California",
    intro:
      "We are in-network with UnitedHealthcare. That includes many commercial UHC PPO plans and the behavioral health benefits that Optum or UMR administers for United groups. If your card says UnitedHealthcare, UHC, Optum, or UMR, start with a verification call.",
    planTypes: [
      "UnitedHealthcare PPO",
      "UHC Choice / Choice Plus",
      "Optum behavioral health (UHC carve-out)",
      "UMR (United-administered plans)",
    ],
    searchPhrases: [
      "UnitedHealthcare in network rehab near me",
      "UHC PPO detox Orange County",
      "Optum residential treatment Santa Ana",
      "UMR drug rehab Southern California",
    ],
    faqs: [
      {
        q: "Is Experience Recovery in-network with UnitedHealthcare?",
        a: "Yes. We are in-network with UnitedHealthcare. Many UHC groups carve behavioral health to Optum; some employer plans are administered by UMR. We verify the actual payer on your card so we call the right utilization-management line.",
      },
      {
        q: "Does UnitedHealthcare PPO cover alcohol and drug residential treatment?",
        a: "Most commercial UHC PPO plans include substance use disorder benefits for medically necessary detox and residential care. UHC/Optum typically requires clinical review. We submit the ASAM-aligned information they request and keep you updated on authorized days.",
      },
      {
        q: "My card says Optum or UMR, not United. Does that still count?",
        a: "Often yes. Optum is United’s behavioral health manager for many groups. UMR administers a large book of employer plans that still use United’s network. Bring the card — the logo on the front is less important than the payer ID we pull during verification.",
      },
    ],
    body: [
      {
        heading: "United, Optum, and UMR — why the card can look different",
        html: `<p>Southern California employers use UnitedHealthcare widely: hospitals, logistics, tech, and national companies with California offices. The medical logo might say UnitedHealthcare while the behavioral health number on the back routes to Optum. Other groups use UMR for claims and still sit on a United network. Families lose days when someone only calls the medical customer-service line. We call the SUD/behavioral health reviewer who actually authorizes residential treatment.</p>`,
      },
      {
        heading: "What a UHC verification call covers",
        html: `<p>Eligibility, in-network facility status, remaining deductible, coinsurance, whether a referral is required (rare on PPO, more common on some gated products), and the precertification phone number for detox versus residential. If you are traveling from elsewhere in Southern California, we also confirm there is no geographic restriction on using a Santa Ana facility.</p>`,
      },
    ],
  },
  {
    slug: "aetna",
    name: "Aetna",
    short: "Aetna",
    title: "Aetna In-Network Rehab in Orange County | PPO Detox & Residential",
    description:
      "In-network Aetna PPO drug and alcohol rehab in Santa Ana, Orange County. Verify Aetna benefits for detox and residential treatment across Southern California.",
    keywords:
      "Aetna in network rehab Orange County, Aetna PPO drug rehab Santa Ana, Aetna alcohol treatment Southern California, Aetna detox Orange County California",
    intro:
      "Experience Recovery is in-network with Aetna. If you have an Aetna PPO or another Aetna commercial plan with a substance use benefit, we can verify coverage for medically supervised detox and residential treatment before you leave home.",
    planTypes: [
      "Aetna PPO",
      "Aetna Choice POS II",
      "Aetna Open Access / Managed Choice (verified by plan)",
      "Employer-sponsored Aetna commercial plans",
    ],
    searchPhrases: [
      "Aetna in network rehab Orange County",
      "Aetna PPO residential treatment California",
      "Aetna detox near me Santa Ana",
      "Does Aetna cover inpatient drug rehab",
    ],
    faqs: [
      {
        q: "Are you in-network with Aetna?",
        a: "Yes. We are in-network with Aetna. Benefits, copays, and authorization rules vary by employer group. We verify your specific member ID before admission.",
      },
      {
        q: "Will Aetna pay for detox and then residential, or only one level of care?",
        a: "When both are medically necessary, Aetna commercial plans often authorize withdrawal management and then a step to residential treatment. Those are usually two clinical reviews, not one blanket approval. We request both when the assessment supports it.",
      },
      {
        q: "I have Aetna through a national employer and I live in Irvine / LA. Can I use this facility?",
        a: "Usually yes on a PPO. National Aetna PPO plans are built for members to use in-network facilities in the state where they need care. We confirm there is no exclusion for California residential SUD treatment on your group.",
      },
    ],
    body: [
      {
        heading: "Aetna PPO for Southern California families",
        html: `<p>Aetna PPO is common among people who work for national firms with Orange County or Los Angeles offices — and among families who kept a PPO specifically so specialty care would not require a gatekeeper. For addiction treatment, that usually means you can come directly to an in-network residential program after we verify benefits and complete a clinical assessment.</p>`,
      },
      {
        heading: "Aetna authorization, in plain language",
        html: `<p>Aetna looks at medical necessity: withdrawal risk, use pattern, prior treatment, psychiatric comorbidity, and why a lower level of care is not safe or sufficient. We document that using the same clinical language reviewers expect. If Aetna asks for concurrent review after a few days, our team handles it so the family is not stuck on hold.</p>`,
      },
    ],
  },
  {
    slug: "cigna",
    name: "Cigna",
    short: "Cigna",
    title: "Cigna In-Network Rehab Orange County | Cigna PPO Treatment",
    description:
      "In-network Cigna PPO rehab in Santa Ana, Orange County. Verify Cigna and Evernorth benefits for detox and residential addiction treatment in Southern California.",
    keywords:
      "Cigna in network rehab Orange County, Cigna PPO drug rehab Santa Ana, Cigna alcohol detox Southern California, Evernorth residential treatment California",
    intro:
      "We are in-network with Cigna. Many Cigna cards now also mention Evernorth for behavioral health. If you have a Cigna PPO or another Cigna commercial plan, we verify the substance use benefit for our Santa Ana detox and residential program.",
    planTypes: [
      "Cigna PPO",
      "Cigna Open Access Plus (OAP)",
      "Evernorth behavioral health (Cigna)",
      "Employer-sponsored Cigna commercial plans",
    ],
    searchPhrases: [
      "Cigna in network rehab near me",
      "Cigna PPO detox Orange County",
      "Evernorth drug rehab Santa Ana",
      "Does Cigna cover residential rehab in California",
    ],
    faqs: [
      {
        q: "Is Experience Recovery in-network with Cigna?",
        a: "Yes. We are in-network with Cigna. If behavioral health is managed by Evernorth, we verify through that channel. The logo on the card is a starting point; the payer ID tells us who authorizes treatment.",
      },
      {
        q: "Does Cigna PPO cover medically supervised alcohol or opioid detox?",
        a: "Most Cigna commercial PPO and OAP plans include benefits for medically necessary withdrawal management. Alcohol and benzodiazepine withdrawal in particular are treated as medical, not optional. We document CIWA/COWS findings and the rest of the clinical picture Cigna’s reviewers use.",
      },
      {
        q: "Can someone from Los Angeles or San Diego use Cigna at your Orange County campus?",
        a: "Yes, when the plan allows in-network California residential SUD treatment — which we confirm during verification. Distance from home is not a disqualifier on a PPO.",
      },
    ],
    body: [
      {
        heading: "Cigna and Evernorth in Southern California",
        html: `<p>Cigna is widely held by people in entertainment-adjacent companies, healthcare, and national employers with Southern California staff. Evernorth is Cigna’s health-services brand; families sometimes think they have a different insurer. If the card has a Cigna or Evernorth mark, we treat it as a Cigna-family verification until the payer ID says otherwise.</p>`,
      },
      {
        heading: "What we tell Cigna reviewers",
        html: `<p>Recent substances and last use, withdrawal history, seizures or DTs if any, medical conditions, psychiatric symptoms, and why outpatient or a hotel-with-meds plan is not safe. That is the difference between a vague “they need rehab” call and a verification that actually results in an authorization request Cigna can act on.</p>`,
      },
    ],
  },
  {
    slug: "humana",
    name: "Humana",
    short: "Humana",
    title: "Humana In-Network Rehab in Orange County | Humana PPO",
    description:
      "In-network Humana PPO drug and alcohol rehab in Santa Ana. Verify Humana commercial and employer-plan benefits for detox and residential treatment in Southern California.",
    keywords:
      "Humana in network rehab Orange County, Humana PPO drug rehab Santa Ana, Humana alcohol treatment Southern California, Humana detox California",
    intro:
      "Experience Recovery is in-network with Humana. If you have a Humana commercial or employer PPO plan with a substance use benefit, we verify coverage for detox and residential treatment at our Santa Ana campus.",
    planTypes: [
      "Humana PPO",
      "Humana employer commercial plans",
      "Humana behavioral health (when carved to a partner — we verify)",
    ],
    searchPhrases: [
      "Humana in network rehab Orange County",
      "Humana PPO residential treatment California",
      "Humana drug detox Santa Ana",
      "Does Humana cover inpatient rehab Southern California",
    ],
    faqs: [
      {
        q: "Are you in-network with Humana?",
        a: "Yes. We are in-network with Humana. Commercial and employer plans are the ones we verify most often for residential treatment. We still read the specific group benefits — Medicare Advantage and some individual products have different rules than a workplace PPO.",
      },
      {
        q: "Does Humana cover residential addiction treatment in California?",
        a: "Humana commercial plans commonly include a substance use disorder benefit that can cover medically necessary residential treatment and withdrawal management. Prior authorization is typical. We complete that process before you arrive whenever the plan requires it.",
      },
      {
        q: "I have Humana and I live outside Orange County. Can I still come?",
        a: "If the plan allows in-network California SUD residential care, yes. We confirm geography and network status on the verification call so you are not guessing from a website directory.",
      },
    ],
    body: [
      {
        heading: "Humana PPO versus other Humana products",
        html: `<p>Humana issues more than one kind of card. A workplace PPO is not the same product as a Medicare Advantage plan. For adult residential treatment, the cleanest path is usually a commercial PPO or employer plan with a behavioral health benefit. Tell us which product you have; we will not pretend every Humana card works the same way.</p>`,
      },
      {
        heading: "Verification, then a clinical plan",
        html: `<p>Insurance tells us what the plan will consider paying. It does not decide the medical starting point. After we verify Humana benefits, a clinician still assesses substances, last use, withdrawal risk, and whether detox should begin the same day you arrive.</p>`,
      },
    ],
  },
  {
    slug: "tricare",
    name: "TRICARE",
    short: "TRICARE",
    title: "TRICARE In-Network Rehab in California | Military & Veteran Families",
    description:
      "In-network TRICARE drug and alcohol rehab in Santa Ana, Orange County. Verify TRICARE benefits for detox and residential treatment for service members, retirees, and families in Southern California.",
    keywords:
      "TRICARE in network rehab California, TRICARE drug rehab Orange County, TRICARE alcohol treatment Santa Ana, TRICARE residential treatment Southern California, military rehab Orange County",
    intro:
      "We are in-network with TRICARE. If you are an active-duty service member, a retiree, a National Guard or Reserve member with TRICARE, or a covered family member in Southern California, we verify TRICARE benefits for medically supervised detox and residential treatment.",
    planTypes: [
      "TRICARE Prime (referral/authorization rules apply)",
      "TRICARE Select",
      "TRICARE for Life (coordination with Medicare, verified case by case)",
      "USFHP / regional TRICARE products (verified by ID card)",
    ],
    searchPhrases: [
      "TRICARE in network rehab California",
      "TRICARE detox Orange County",
      "TRICARE residential treatment near Camp Pendleton",
      "military drug rehab Southern California",
    ],
    faqs: [
      {
        q: "Is Experience Recovery in-network with TRICARE?",
        a: "Yes. We are in-network with TRICARE. Active-duty members usually need command and TRICARE authorization before a residential admission. Retirees and family members on Select often have a more direct civilian-facility path. We tell you which process applies to the card you hold.",
      },
      {
        q: "Can someone stationed at Camp Pendleton, Pendleton-area, or a SoCal installation use this program?",
        a: "Geography is workable — Santa Ana is a reasonable transfer from much of coastal Southern California. The gating item is usually authorization and, for active duty, command/medical channels. Call us with the TRICARE region and sponsor status and we will map the next step.",
      },
      {
        q: "Does TRICARE cover alcohol detox and residential treatment?",
        a: "TRICARE includes substance use disorder benefits when treatment is medically necessary. Detox and residential care generally require authorization. We work the clinical documentation TRICARE reviewers expect.",
      },
    ],
    body: [
      {
        heading: "TRICARE in Southern California",
        html: `<p>Southern California has a dense military footprint: Camp Pendleton, Navy and Marine installations, Space Force and Air Force communities, and a large retiree and dependent population from San Diego through Orange County into Los Angeles. People search for “TRICARE rehab near me” and get directories that do not say whether the facility will actually complete a TRICARE authorization. We will.</p>`,
      },
      {
        heading: "Active duty versus retiree or family member",
        html: `<p>Those are different processes. Active-duty admissions typically involve military medical and command notification in addition to TRICARE authorization. Retirees and adult dependents on TRICARE Select are often closer to a civilian PPO workflow. We do not give you a single script that ignores that difference.</p>`,
      },
    ],
  },
  {
    slug: "ppo",
    name: "PPO and commercial plans",
    short: "PPO",
    title: "PPO In-Network Rehab in Orange County | Commercial Insurance",
    description:
      "In-network PPO drug and alcohol rehab in Santa Ana for Anthem, Blue Shield, UnitedHealthcare, Aetna, Cigna, Humana, and similar commercial plans. Verify PPO benefits for Southern California residential treatment.",
    keywords:
      "PPO in network rehab Orange County, PPO drug rehab Santa Ana, commercial insurance residential treatment Southern California, in network PPO detox California",
    intro:
      "Most people who come to Experience Recovery have a PPO or another commercial plan that works like a PPO: you can use an in-network specialty facility without going through a primary-care gatekeeper. We are in-network with Anthem, Blue Shield of California, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE.",
    planTypes: [
      "Employer PPO plans",
      "Anthem / Blue Shield / UHC / Aetna / Cigna / Humana PPO",
      "Open Access and Choice Plus products",
      "TRICARE Select (PPO-like civilian access)",
    ],
    searchPhrases: [
      "PPO in network rehab Orange County",
      "in network PPO detox Southern California",
      "commercial insurance residential treatment Santa Ana",
      "does my PPO cover inpatient rehab California",
    ],
    faqs: [
      {
        q: "What does in-network PPO rehab actually mean?",
        a: "It means this facility is contracted with your insurer, so claims bill at the in-network rate. You may still have a deductible, coinsurance, and a prior-authorization requirement. In-network is about the contracted rate and the network status — not a promise that the plan pays 100% or authorizes a set length of stay.",
      },
      {
        q: "Is a PPO better than an HMO for rehab?",
        a: "Usually yes for residential treatment, because PPO plans typically allow you to come to an in-network facility without a referral. Some HMO and EPO products can still cover treatment but may require a behavioral-health gatekeeper. We read the plan you actually have.",
      },
      {
        q: "Which PPO insurers are you in-network with?",
        a: "Anthem, Blue Shield of California, UnitedHealthcare (including many Optum and UMR arrangements), Aetna, Cigna, Humana, and TRICARE. If your card lists a different administrator, call anyway — the network may still route through one of those payers.",
      },
    ],
    body: [
      {
        heading: "Why PPO plans show up so often in Orange County searches",
        html: `<p>People type “PPO rehab near me” or “in-network PPO detox Southern California” because they already know their plan will punish an out-of-network residential stay. Deductibles and coinsurance are one issue; balance billing is another. An in-network facility in Santa Ana is the difference between a verifiable benefit and an open-ended private-pay bill.</p>`,
      },
      {
        heading: "What we verify on every PPO card",
        html: `<p>Member eligibility, in-network status for this NPI/facility, remaining deductible, coinsurance, out-of-pocket maximum, whether SUD is carved out to a behavioral-health vendor, precertification requirements, and any exclusion for residential treatment. You get that picture before you drive to campus.</p>`,
      },
    ],
  },
];

export function getInsurance(slug: string) {
  return insurancePlans.find((p) => p.slug === slug);
}
