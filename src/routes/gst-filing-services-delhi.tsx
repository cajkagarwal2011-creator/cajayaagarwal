import { createFileRoute } from "@tanstack/react-router";
import { Receipt } from "lucide-react";
import { ServicePageLayout, buildFaqSchema, type ServicePageContent } from "@/components/site/ServicePageLayout";

const faqs = [
  { q: "How much does GST filing cost in Delhi?", a: "Pricing depends on your business size and number of transactions. Monthly packages start affordable for small businesses, with no hidden charges. We share a clear quote upfront." },
  { q: "What if I missed previous GST returns?", a: "We help you file pending GSTR-1, GSTR-3B and other returns, calculate late fees and interest correctly, and bring you back to a clean compliant state." },
  { q: "Do you handle GST notices in Delhi?", a: "Yes. We respond to GST notices, scrutiny letters and audit queries — drafting proper replies and representing you before the department where needed." },
  { q: "Will you reconcile GSTR-2B with my purchase data?", a: "Yes. Every month we match your books with GSTR-2B so you claim correct ITC and avoid future mismatches or notices." },
  { q: "Can you help with GST registration in Malviya Nagar?", a: "Absolutely. We handle new GST registrations, amendments and additional places of business across Delhi NCR — usually within a few working days." },
  { q: "Do you serve e-commerce sellers (Amazon, Flipkart, Meesho)?", a: "Yes. We specialize in marketplace sellers — handling TCS reconciliation, returns, and GST filing across multiple platforms." },
];

const content: ServicePageContent = {
  icon: Receipt,
  eyebrow: "GST Filing Services in Delhi",
  h1: "GST Filing Services in Delhi — File On Time, Avoid Penalties",
  intro:
    "Stress-free monthly GST filing in Delhi by experienced Chartered Accountants. Accurate returns, full ITC, no missed deadlines, no surprise notices.",
  body: [
    {
      heading: "Why GST filing matters more than ever",
      paragraphs: [
        "GST in India looks simple from the outside, but the rules change often. New return formats, e-invoicing limits, ITC restrictions, GSTR-2B matching — there is always something new to track. Miss one filing and you get late fees, interest, and sometimes a notice. Claim wrong ITC and you may face a reversal months later.",
        "Most small businesses in Delhi don't have a full-time finance team. The owner ends up doing GST work between deliveries, sales calls and customer issues. That is exactly when mistakes happen — and exactly why a dedicated CA makes a huge difference.",
        "At Jaya K. Agarwal & Co., GST filing is not a side job. It is something we do every single day for clients across Malviya Nagar, Saket, Hauz Khas and South Delhi. We handle the dates, the rules and the reconciliations — so you focus on running your business.",
      ],
    },
    {
      heading: "Our GST filing services in Delhi cover everything",
      paragraphs: [
        "We offer end-to-end GST support — not just one return. New to GST? We handle your registration, choose the right scheme (regular vs composition), and set up your invoice template properly from day one.",
        "Already registered? We take over your monthly and quarterly returns — GSTR-1, GSTR-3B, IFF, CMP-08 — and your annual returns like GSTR-9 and GSTR-9C. We also handle e-way bills, e-invoicing setup, LUT for exporters, refund applications, and replies to GST notices.",
        "If your past filings are messy, we'll do a full review — fix wrong ITC, identify missed sales, file pending returns, and bring you back to a clean state. After that, monthly compliance becomes simple and predictable.",
      ],
    },
    {
      heading: "Built for Delhi businesses — local, responsive, reliable",
      paragraphs: [
        "We are based in Malviya Nagar, New Delhi. That means you can reach us on call, WhatsApp, or in person — not a generic helpdesk thousands of kilometres away. Our clients include retailers, wholesalers, exporters, freelancers, agencies, restaurants and e-commerce sellers across Delhi.",
        "Every client gets a dedicated CA as their single point of contact. No bouncing between executives, no repeating yourself. One person who knows your business, your products, and your filings.",
      ],
    },
  ],
  benefits: [
    "Zero missed GSTR-1 / GSTR-3B deadlines",
    "Full ITC claimed correctly via GSTR-2B reconciliation",
    "Quick replies to GST notices and queries",
    "Clear monthly summary in plain English",
    "Transparent fixed monthly pricing",
    "Help with e-invoicing and e-way bills",
    "Annual returns (GSTR-9, GSTR-9C) handled",
    "GST registration & amendments included",
  ],
  process: [
    { title: "Free consultation", text: "We understand your business, current GST status and pain points." },
    { title: "Onboarding & cleanup", text: "We fix any backlog, set up clean records and align your invoices to GST rules." },
    { title: "Monthly filing", text: "We collect data, reconcile with GSTR-2B, and file GSTR-1, GSTR-3B on time." },
    { title: "Ongoing support", text: "WhatsApp/call access for queries, notices, vendor issues — anytime." },
  ],
  who: [
    "Small & medium businesses across Delhi NCR",
    "Traders, wholesalers and retailers in Malviya Nagar, Saket, South Delhi",
    "Service providers, agencies and consultants",
    "E-commerce sellers (Amazon, Flipkart, Meesho, Shopify)",
    "Exporters needing LUT and refund support",
    "Freelancers crossing the GST threshold",
  ],
  faqs,
};

export const Route = createFileRoute("/gst-filing-services-delhi")({
  head: () => ({
    meta: [
      { title: "GST Filing Services in Delhi | Best CA for GST Returns" },
      { name: "description", content: "Reliable GST filing services in Delhi by experienced Chartered Accountants. Monthly returns, ITC reconciliation, GST notices & registration. Free consultation." },
      { name: "keywords", content: "GST Filing Services Delhi, GST Return Filing Delhi, GST Consultant Malviya Nagar, GST CA in Delhi" },
      { property: "og:title", content: "GST Filing Services in Delhi | CA in Malviya Nagar" },
      { property: "og:description", content: "Stress-free monthly GST filing by experienced CAs in Delhi. Avoid penalties and notices." },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/gst-filing-services-delhi" },
    ],
    links: [{ rel: "canonical", href: "https://cajayaagarwal.lovable.app/gst-filing-services-delhi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqSchema(faqs)) }],
  }),
  component: () => <ServicePageLayout content={content} />,
});
