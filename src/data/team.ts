export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: "Medical" | "Clinical" | "Operations" | "Case Management" | "Support" | "Behavioral Health";
  license?: {
    type: string;
    number: string;
    board: string;
    expires?: string;
    degree: string;
    supervision?: string;
  };
  summary: string;
};

export const team: TeamMember[] = [
  {
    slug: "rafael-penunuri",
    name: "Rafael Penunuri, MD",
    role: "Medical Director",
    department: "Medical",
    license: {
      type: "Physician and Surgeon (Medical Doctor), California",
      number: "G50737",
      board: "Medical Board of California",
      expires: "November 30, 2026",
      degree: "MD (Doctor of Medicine)",
    },
    summary:
      "Oversees medical care on campus, including withdrawal management protocols, medication decisions, and coordination with nursing. California physician license G50737.",
  },
  {
    slug: "jamequa-braddy",
    name: "Jamequa Braddy, LVN",
    role: "Nurse",
    department: "Medical",
    license: {
      type: "Licensed Vocational Nurse (LVN), California",
      number: "VN707693",
      board: "California Board of Vocational Nursing and Psychiatric Technicians",
      expires: "October 31, 2027",
      degree: "Vocational nursing program graduate",
    },
    summary:
      "Provides nursing care during detox and residential treatment, including vitals monitoring and withdrawal-scale assessments. California LVN license VN707693.",
  },
  {
    slug: "hannah-townsend",
    name: "Hannah Townsend",
    role: "CNA",
    department: "Medical",
    summary:
      "Certified nursing assistant supporting daily medical observation, comfort care, and client safety during withdrawal and early residential days.",
  },
  {
    slug: "jennifer-yost",
    name: "Jennifer Yost",
    role: "CNA",
    department: "Medical",
    summary:
      "Certified nursing assistant on the medical team, helping clients through the practical, around-the-clock work of early stabilization.",
  },
  {
    slug: "lizabeth-schroeder",
    name: "Lizabeth Schroeder, LCSW",
    role: "Clinical Supervisor",
    department: "Clinical",
    license: {
      type: "Licensed Clinical Social Worker (LCSW), California",
      number: "LCS19418",
      board: "California Board of Behavioral Sciences",
      expires: "October 31, 2026",
      degree: "MSW (Master of Social Work)",
    },
    summary:
      "Directs clinical supervision for the counseling team. California LCSW license LCS19418. Supervises associate-level clinicians on campus.",
  },
  {
    slug: "courtney-rolle",
    name: "Courtney Rolle, APCC",
    role: "Program Director",
    department: "Clinical",
    license: {
      type: "Associate Professional Clinical Counselor (APCC), California",
      number: "21464",
      board: "California Board of Behavioral Sciences",
      degree: "Master's degree (clinical counseling)",
      supervision: "Practices under clinical supervision per California law. Clinical supervision: Lizabeth Schroeder, LCSW (LCS19418).",
    },
    summary:
      "Leads day-to-day clinical programming. California APCC registration 21464, practicing under licensed clinical supervision.",
  },
  {
    slug: "kara-mullins",
    name: "Kara Mullins",
    role: "Operations Manager",
    department: "Operations",
    summary:
      "Keeps the campus running — staffing, environment of care, and the operational details that let clinical work happen without interruption.",
  },
  {
    slug: "madison-triska",
    name: "Madison Triska",
    role: "Intake Coordinator",
    department: "Operations",
    summary:
      "First clinical-administrative contact for many families. Coordinates insurance verification, arrival logistics, and the handoff from the first call to campus.",
  },
  {
    slug: "raymond-drake",
    name: "Raymond Drake",
    role: "Lead Case Manager",
    department: "Case Management",
    summary:
      "Leads case management: aftercare planning, family communication, and the practical steps that have to be in place before discharge.",
  },
  {
    slug: "savannah-grey",
    name: "Savannah Grey",
    role: "Operations Program Assistant",
    department: "Operations",
    summary:
      "Supports program operations and the daily schedule so clients and clinicians can stay focused on treatment.",
  },
  {
    slug: "adrian-avila",
    name: "Adrian Avila",
    role: "Case Manager",
    department: "Case Management",
    summary:
      "Works with clients on discharge resources, continuing care, and the logistics of returning to work, family, and outpatient support.",
  },
  {
    slug: "lakeya-lewis",
    name: "Lakeya Lewis",
    role: "Chef",
    department: "Support",
    summary:
      "Runs the kitchen. Regular meals are part of medical and clinical stabilization — not an amenity add-on.",
  },
  {
    slug: "frank-johnson",
    name: "Frank Johnson",
    role: "IT",
    department: "Support",
    summary:
      "Supports campus technology, records systems, and the infrastructure that keeps documentation and communications reliable.",
  },
  {
    slug: "danielle-switch",
    name: "Danielle Switch",
    role: "Lead BHT (RADT)",
    department: "Behavioral Health",
    summary:
      "Lead behavioral health technician and registered alcohol and drug technician. Coordinates floor support and the residential milieu.",
  },
  {
    slug: "demitrius-lewis",
    name: "Demitrius Lewis",
    role: "BHT",
    department: "Behavioral Health",
    summary:
      "Behavioral health technician supporting the residential community, safety, and day-to-day structure.",
  },
  {
    slug: "jorden-cantor",
    name: "Jorden Cantor",
    role: "BHT (RADT)",
    department: "Behavioral Health",
    summary:
      "Registered alcohol and drug technician providing behavioral health support on the residential floor.",
  },
  {
    slug: "michael-aguilar",
    name: "Michael Aguilar",
    role: "BHT (RADT)",
    department: "Behavioral Health",
    summary:
      "Registered alcohol and drug technician on the behavioral health team.",
  },
  {
    slug: "sopavy-seng",
    name: "Sopavy Seng",
    role: "BHT (RADT)",
    department: "Behavioral Health",
    summary:
      "Registered alcohol and drug technician supporting clients through the structured residential day.",
  },
];

export const departments = [
  "Medical",
  "Clinical",
  "Operations",
  "Case Management",
  "Behavioral Health",
  "Support",
] as const;
