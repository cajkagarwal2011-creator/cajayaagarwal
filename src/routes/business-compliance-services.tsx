import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ServicePageLayout, buildFaqSchema, type ServicePageContent } from "@/components/site/ServicePageLayout";

const faqs = [
  { q: "What ROC filings are mandatory every year?", a: "For most companies: AOC-4 (financials) and MGT-7 (annual return). For LLPs: Form 11 and Form 8. We track these and file before due dates to avoid heavy late fees." },
  { q: "What's the penalty for missing ROC filings?", a: "ROC late fees are ₹100 per day per form, with no upper cap — they can run into lakhs over time. Directors can also be disqualified. We make sure you never reach that point." },
  { q: "Can you help with company incorporation in Delhi?", a: "Yes. We register Private Limited Companies, LLPs, OPCs and Section 8 companies — including DSC, DIN, name approval, MOA/AOA and post-incorporation compliance." },
  { q: "Do you handle director changes and share transfers?", a: "Yes. Appointment, resignation, change in designation, share allotment, transfer, increase in authorised capital — full ROC and MCA paperwork handled end-to-end." },
  { q: "What about strike-off / closure of inactive companies?", a: "Yes. We handle voluntary strike-off (Form STK-2) for inactive companies and LLP closure (Form 24) — including pending compliance to make the company eligible." },
  { q: "Can you do a compliance health check for my company?", a: "Yes. We review the last 3-5 years of MCA filings, identify gaps and pending forms, and give you a clear plan to bring everything up to date." },
];

const content: ServicePageContent = {
  icon: ShieldCheck,
  eyebrow: "Business Compliance (ROC, MCA) in Delhi",
  h1: "Business Compliance Services in Delhi — ROC, MCA & Company Law Made Simple",
  intro:
    "End-to-end ROC and MCA compliance services in Delhi by experienced Chartered Accountants. Annual filings, event-based forms, director changes, incorporation — all handled on time.",
  body: [
    {
      heading: "Compliance is silent — until it's expensive",
      paragraphs: [
        "Running a Private Limited Company or LLP in India means dealing with the Registrar of Companies (ROC) every year, whether you've made profits or not, whether you're active or dormant. Annual returns, financial statements, board meetings, statutory registers, director KYC, DPT-3, MSME-1 — the list is longer than most founders realise.",
        "Miss a filing and the late fee is ₹100 per day per form, with no upper limit. Skip a few years and the cost runs into lakhs — sometimes more than the company's actual revenue. In serious cases, directors get marked as disqualified and DINs deactivated.",
        "The good news: all of this is preventable with a proper monthly and annual compliance calendar. That's exactly what we set up for our clients in Delhi — so MCA work happens quietly in the background and you focus on building the business.",
      ],
    },
    {
      heading: "Full ROC & MCA compliance services we provide",
      paragraphs: [
        "For companies, we handle annual filings — AOC-4 (financial statements), MGT-7/7A (annual return), CFSS, ADT-1 (auditor appointment), DIR-3 KYC for every director, DPT-3 (deposit return), and MSME-1 where applicable. For LLPs, we file Form 11 and Form 8 every year.",
        "Beyond annual work, we handle event-based filings — appointment and resignation of directors (DIR-12), change in registered office (INC-22), share allotment (PAS-3), share transfer, increase in authorised capital (SH-7), charge creation/satisfaction, change of company name, and conversion between entity types.",
        "Need to start a company? We handle full incorporation — name approval (RUN/SPICe+), DSC, DIN, MOA, AOA, GST, PF, ESI, bank account opening, and post-incorporation compliance for the first year. Need to close one? We do voluntary strike-off cleanly.",
      ],
    },
    {
      heading: "Built for founders and SMEs in Delhi NCR",
      paragraphs: [
        "Most of our clients are founders, SMEs and family businesses based in Malviya Nagar, Saket, South Delhi and Delhi NCR. We speak in plain language, share a yearly compliance calendar upfront, and remind you well before each due date — so nothing comes as a surprise.",
        "If your past compliance is messy or pending, we offer a one-time MCA health check — review of all filings over the last 5 years, list of pending items, total late fees if filed today, and a phased plan to bring everything compliant.",
      ],
    },
  ],
  benefits: [
    "Yearly ROC compliance calendar shared upfront",
    "AOC-4, MGT-7, ADT-1, DIR-3 KYC handled",
    "LLP Form 11 & Form 8 filed on time",
    "Event-based forms (director, share, charge) covered",
    "Company & LLP incorporation in Delhi",
    "Strike-off and closure support",
    "MCA compliance health check available",
    "Statutory registers and minutes maintained",
  ],
  process: [
    { title: "Compliance review", text: "We review your MCA records and identify any pending or upcoming filings." },
    { title: "Calendar setup", text: "You get a clear yearly calendar of all required ROC and MCA forms." },
    { title: "On-time filings", text: "We prepare, get sign-off, and file every form well before the due date." },
    { title: "Event handling", text: "Any change — director, shares, address — handled with proper resolutions and forms." },
  ],
  who: [
    "Private Limited Companies in Delhi NCR",
    "LLPs and One Person Companies",
    "Startups raising or planning to raise funding",
    "Family-owned and SME companies",
    "Companies with backlog of MCA filings",
    "Founders planning incorporation or closure",
  ],
  faqs,
};

export const Route = createFileRoute("/business-compliance-services")({
  head: () => ({
    meta: [
      { title: "Business Compliance Services in Delhi | ROC, MCA Filing by CA" },
      { name: "description", content: "ROC and MCA compliance services in Delhi by Chartered Accountants. Annual filings, director changes, incorporation, strike-off. Free consultation." },
      { name: "keywords", content: "ROC Filing Delhi, MCA Compliance Delhi, Company Compliance Services Delhi, LLP Filing Malviya Nagar, Company Registration Delhi" },
      { property: "og:title", content: "Business Compliance Services in Delhi (ROC, MCA)" },
      { property: "og:description", content: "Full ROC and MCA compliance for companies and LLPs across Delhi NCR." },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/business-compliance-services" },
    ],
    links: [{ rel: "canonical", href: "https://cajayaagarwal.lovable.app/business-compliance-services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqSchema(faqs)) }],
  }),
  component: () => <ServicePageLayout content={content} />,
});
