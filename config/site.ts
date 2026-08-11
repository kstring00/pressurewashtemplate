export const site = {
  previewMode: true,
  businessName: "LC Pressure Washing",
  legalDisplayName: "LC Pressure Washing: Commercial and Residential",
  shortName: "LC",
  tagline: "Make the outside look cared for again.",
  description:
    "Residential and commercial pressure washing in League City and Galveston County, with exterior cleaning for homes, concrete, patios, gutters, and commercial properties.",
  phone: "+1 (832) 439-8037",
  smsNumber: "+1 (832) 439-8037",
  baseCity: "League City",
  state: "TX",
  postalCode: "77573",
  regionLine: "League City + Galveston County",
  hours: "9:00 AM–9:00 PM daily",
  rating: 4.9,
  reviewCount: 50,
  appointmentRequired: true,
  brand: {
    background: "#f6f8f9",
    surface: "#071b33",
    ink: "#0b1826",
    muted: "#647381",
    primary: "#0b5cff",
    fresh: "#20b26b",
    concrete: "#e8edf2"
  }
} as const;

export const services = [
  {
    name: "House + Exterior Washing",
    description: "Exterior cleaning for siding, garages, and the visible surfaces that shape a home's curb appeal.",
    eyebrow: "RESIDENTIAL"
  },
  {
    name: "Driveways + Sidewalks",
    description: "Pressure washing for concrete driveways, sidewalks, curbs, and high-traffic hardscape.",
    eyebrow: "CONCRETE"
  },
  {
    name: "Patios + Outdoor Areas",
    description: "Cleaning for patios, outdoor walkways, and textured surfaces that collect weathering and buildup.",
    eyebrow: "OUTDOOR LIVING"
  },
  {
    name: "Gutter Cleaning",
    description: "Gutter cleaning is listed as an available service alongside exterior pressure washing.",
    eyebrow: "MAINTENANCE"
  },
  {
    name: "Commercial Exterior Cleaning",
    description: "Exterior cleaning for commercial properties, buildings, parking areas, and presentation-focused upkeep.",
    eyebrow: "COMMERCIAL"
  },
  {
    name: "Listing + Property Refresh",
    description: "A practical curb-appeal reset for real estate listings and properties that need to show well quickly.",
    eyebrow: "PROPERTY PREP"
  }
] as const;

export const reviewThemes = [
  "Professional + punctual",
  "Fair pricing",
  "Easy scheduling",
  "Noticeable before/after results",
  "Responsive communication",
  "Thorough work"
] as const;

export const faqs = [
  {
    question: "Do you work on both homes and commercial properties?",
    answer: "Yes. LC Pressure Washing is publicly listed for both residential and commercial pressure washing."
  },
  {
    question: "What areas do you clean?",
    answer: "Public listings describe work on house exteriors, garages, driveways, sidewalks, curbs, patios, parking areas, and buildings."
  },
  {
    question: "Do you clean gutters?",
    answer: "Yes. Gutter cleaning is included in LC Pressure Washing's public business categories."
  },
  {
    question: "Can I get multiple areas cleaned in one visit?",
    answer: "Customer feedback frequently mentions multiple areas being handled in one project. Text the scope you have in mind and LC can confirm what fits the appointment."
  },
  {
    question: "How do I get started?",
    answer: "Send a quick estimate request with the property type, the surfaces you want cleaned, and your ZIP code. LC can then confirm scope and scheduling."
  },
  {
    question: "What are your hours?",
    answer: "Current public business hours are listed as 9:00 AM to 9:00 PM every day. Confirm timing when scheduling your appointment."
  }
] as const;

export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
export const smsHref = `sms:${site.smsNumber.replace(/[^+\d]/g, "")}`;

export function smsWithMessage(message: string) {
  return `${smsHref}?body=${encodeURIComponent(message)}`;
}
