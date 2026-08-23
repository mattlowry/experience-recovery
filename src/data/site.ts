export const site = {
  name: "Experience Recovery",
  legalName: "Experience Recovery Detox & Residential, LLC",
  tagline: "In-network drug and alcohol treatment in Orange County",
  url: "https://experiencerecovery.com",
  phone: "(866) 514-7282",
  phoneHref: "tel:+18665147282",
  email: "info@experiencerecovery.com",
  street: "3919 W. Hazard Ave.",
  additionalStreet: "3921 W. Hazard Ave.",
  city: "Santa Ana",
  state: "CA",
  zip: "92703",
  region: "Orange County, California",
  hours: "Admissions available 24/7",
  dhcsLicense: "300011GP",
  dhcsExpires: "03/31/2027",
  dhcsVerify:
    "https://gis.dhcs.ca.gov/datasets/CADHCS::sud-recovery-treatment-facilities/explore",
  jointCommissionHco: "610069",
  latitude: 33.7455,
  longitude: -117.917,
  sameAs: [] as string[],
};

export const addressLine = `${site.street}, ${site.city}, ${site.state} ${site.zip}`;

export const carriers = [
  { slug: "anthem", name: "Anthem", short: "Anthem Blue Cross" },
  { slug: "blue-shield", name: "Blue Shield of California", short: "Blue Shield" },
  { slug: "united-healthcare", name: "UnitedHealthcare", short: "United" },
  { slug: "aetna", name: "Aetna", short: "Aetna" },
  { slug: "cigna", name: "Cigna", short: "Cigna" },
  { slug: "humana", name: "Humana", short: "Humana" },
  { slug: "tricare", name: "TRICARE", short: "TRICARE" },
] as const;

export const campusPhotos = [
  {
    src: "/images/campus/experience-recovery-frontdoors1.jpg",
    alt: "Front entrance of Experience Recovery’s Santa Ana campus, with French doors, stucco exterior, and paved courtyard",
    caption: "Campus entrance — Santa Ana, California",
  },
  {
    src: "/images/campus/3R8A3678.jpg",
    alt: "Group living room at Experience Recovery with leather sectional, therapy chairs, and natural light",
    caption: "Main living room",
  },
  {
    src: "/images/campus/3R8A3704-1.jpg",
    alt: "Courtyard fountain and garden at Experience Recovery in Santa Ana",
    caption: "Courtyard and fountain",
  },
  {
    src: "/images/campus/experience-recovery-living-room.jpg",
    alt: "Open residential lounge with leather sofas and large windows at Experience Recovery",
    caption: "Residential lounge",
  },
  {
    src: "/images/campus/experience-recovery-yard-and-garden.jpg",
    alt: "Landscaped yard and garden at the Experience Recovery campus",
    caption: "Yard and garden",
  },
  {
    src: "/images/campus/experience-recovery-outdoor-driveway.jpg",
    alt: "Paved outdoor driveway and campus approach at Experience Recovery",
    caption: "Campus approach",
  },
  {
    src: "/images/campus/experience-recovery-fountain1.jpg",
    alt: "Stone fountain against a privacy fence in the Experience Recovery courtyard",
    caption: "Courtyard fountain",
  },
  {
    src: "/images/campus/3R8A3654.jpg",
    alt: "Interior common space at Experience Recovery’s Orange County treatment campus",
    caption: "Common space",
  },
  {
    src: "/images/campus/3R8A36831.jpg",
    alt: "Residential treatment interior at Experience Recovery in Santa Ana",
    caption: "Residential interior",
  },
  {
    src: "/images/campus/3R8A38131.jpg",
    alt: "Campus details at Experience Recovery Detox & Residential",
    caption: "Campus detail",
  },
  {
    src: "/images/campus/3R8A2837.jpg",
    alt: "Treatment environment at Experience Recovery in Orange County",
    caption: "Treatment environment",
  },
  {
    src: "/images/campus/3R8A3827-1.jpg",
    alt: "Another view of the Experience Recovery Santa Ana campus",
    caption: "Campus view",
  },
] as const;

export const insuranceDisclaimer =
  "We are in-network with Anthem, Blue Shield of California, UnitedHealthcare, Aetna, Cigna, Humana, and TRICARE. Coverage still depends on your specific plan, employer group, medical necessity, and authorization. We verify benefits before admission so you know what is — and is not — covered. Website content is not a guarantee of payment.";
