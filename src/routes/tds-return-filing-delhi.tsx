import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { ServicePageLayout, buildFaqSchema, type ServicePageContent } from "@/components/site/ServicePageLayout";

const faqs = [
  { q: "What are the TDS return due dates?", a: "TDS returns are filed quarterly: 31st July (Q1), 31st October (Q2), 31st January (Q3) and 31st May (Q4). We track these and file well before the due date for every client." },
  { q: "What is the penalty for late TDS filing?", a: "Late filing fee is ₹200 per day under Section 234E and additional penalty under Section 271H. More importantly, your deductees can't claim TDS credit on time, which damages relationships." },
  { q: "Do you handle TDS on property purchase (26QB)?", a: "Yes. For property above ₹50 lakhs, TDS at 1% is mandatory. We file Form 26QB and issue Form 16B to the seller — usually within a couple of working days." },
  { q: "Can you fix wrong TDS returns I filed earlier?", a: "Yes. We handle TDS revisions and corrections — wrong PAN, wrong amount, wrong section, missing deductees. We file the corrected return and get the records updated." },
  { q: "Do you also handle TCS returns?", a: "Yes. We file TCS returns (Form 27EQ) for businesses collecting tax on scrap, motor vehicles, foreign remittances, or e-commerce transactions." },
  { q: "We are an e-commerce platform — do you handle TDS under 194-O?", a: "Yes. We handle Section 194-O TDS for e-commerce operators and the deductee-side compliance for sellers on Amazon, Flipkart and similar platforms." },
];

const content: ServicePageContent = {
  icon: Wallet,
  eyebrow: "TDS Return Filing in Delhi",
  h1: "TDS Return Filing in Delhi — Accurate, On-Time, Penalty-Free",
  intro:
    "Quarterly TDS return filing in Delhi by experienced Chartered Accountants. Correct PAN, correct sections, on-time filing, and quick corrections — no late fees, no notices.",
  body: [
    {
      heading: "Why TDS compliance trips up most businesses",
      paragraphs: [
        "TDS sounds simple — deduct tax, deposit it, file a quarterly return. In practice, it is one of the most error-prone areas of Indian tax. Wrong section selected, PAN mismatch, late deposit, wrong challan reference — each mistake creates penalties, defaults, and unhappy vendors who can't see TDS credit in their 26AS.",
        "And TDS errors don't stay hidden. Once your deductees raise the issue, or once a default notice from CPC-TDS arrives, it becomes a cleanup project — revising returns, correcting challans, sometimes paying interest going back months.",
        "We've seen this enough times to know: doing TDS right the first time is far cheaper than fixing it later. That's why our clients in Delhi outsource TDS to us and stop worrying about it.",
      ],
    },
    {
      heading: "Our TDS services cover deduction, deposit, returns and corrections",
      paragraphs: [
        "We handle the full TDS cycle. First, we review your transactions and identify what attracts TDS — salaries (192), professional fees (194J), contractor payments (194C), rent (194I), commission, interest, dividends, online sellers (194-O), and more. We confirm the right rate and section for each.",
        "Next, we generate challans and ensure timely deposit before the 7th of the next month. After quarter-end, we prepare and file the relevant return — Form 24Q (salaries), 26Q (other payments), 27Q (non-residents), 27EQ (TCS) — using verified PANs to avoid defaults.",
        "Once filed, we issue Form 16 (employees) and Form 16A (others) so your deductees can claim credit on time. If you have past defaults or wrong filings, we handle revisions and correction statements end-to-end.",
      ],
    },
    {
      heading: "Special TDS situations we handle",
      paragraphs: [
        "Buying property above ₹50 lakhs in Delhi? We file Form 26QB and Form 16B. Paying rent above ₹50,000 per month as an individual? We handle Section 194-IB. Paying NRIs? We deal with Section 195, certificates under 197, and DTAA benefits.",
        "Got a notice from CPC-TDS — short deduction, late payment, PAN error, late filing fee? Send it to us. We analyse the default, file corrections where needed, pay any genuine demand, and contest the rest.",
      ],
    },
  ],
  benefits: [
    "100% on-time quarterly TDS filing",
    "Correct section, rate and PAN selection",
    "Form 16 and 16A issued promptly",
    "Challan corrections and OLTAS handled",
    "TDS revision returns filed cleanly",
    "Replies to CPC-TDS default notices",
    "TDS on property (26QB), rent (194-IB)",
    "Section 195 and lower deduction certificates",
  ],
  process: [
    { title: "Review your TDS workflow", text: "We map your payments to correct TDS sections and rates." },
    { title: "Monthly deposit", text: "Challans generated and tax deposited before the 7th every month." },
    { title: "Quarterly return filing", text: "24Q / 26Q / 27Q / 27EQ filed before the due date with verified PANs." },
    { title: "Form 16 / 16A & corrections", text: "Certificates issued; any defaults or corrections handled promptly." },
  ],
  who: [
    "Companies and LLPs with employees",
    "Businesses paying rent, contractor and professional fees",
    "Property buyers (above ₹50 lakhs)",
    "E-commerce operators (Section 194-O)",
    "Businesses paying NRIs (Section 195)",
    "Anyone who has received a TDS default notice",
  ],
  faqs,
};

export const Route = createFileRoute("/tds-return-filing-delhi")({
  head: () => ({
    meta: [
      { title: "TDS Return Filing in Delhi | Quarterly TDS by CA" },
      { name: "description", content: "Accurate TDS return filing in Delhi by experienced CAs. Quarterly 24Q/26Q/27Q, corrections, Form 16/16A, default notices. Free consultation." },
      { name: "keywords", content: "TDS Return Filing Delhi, TDS Filing CA Delhi, 26Q 24Q Filing, TDS Consultant Malviya Nagar" },
      { property: "og:title", content: "TDS Return Filing in Delhi by Chartered Accountants" },
      { property: "og:description", content: "Quarterly TDS filing, corrections and notice replies — penalty free." },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/tds-return-filing-delhi" },
    ],
    links: [{ rel: "canonical", href: "https://cajayaagarwal.lovable.app/tds-return-filing-delhi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqSchema(faqs)) }],
  }),
  component: () => <ServicePageLayout content={content} />,
});
