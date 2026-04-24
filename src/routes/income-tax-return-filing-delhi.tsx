import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ServicePageLayout, buildFaqSchema, type ServicePageContent } from "@/components/site/ServicePageLayout";

const faqs = [
  { q: "When is the ITR filing due date in India?", a: "For most individuals and non-audit cases, the due date is 31st July. For audit cases and companies, it's 31st October. We track these for you and file well before time." },
  { q: "How much does ITR filing cost in Delhi?", a: "Pricing depends on income type and complexity — salary, business, capital gains, foreign income, etc. We offer clear fixed quotes with no hidden charges." },
  { q: "Can you help me get a bigger refund?", a: "Yes. Many people miss deductions like 80C, 80D, HRA, NPS, home loan interest, and capital gains exemptions. We review everything to maximize your legal refund." },
  { q: "I missed my ITR deadline — can I still file?", a: "Yes. You can file a belated return with a small penalty. We help file it correctly and reduce any further consequences." },
  { q: "Do you file ITR for freelancers and consultants?", a: "Absolutely. We handle ITR-3 and ITR-4 (presumptive scheme) for freelancers, consultants, doctors, designers and professionals across Delhi." },
  { q: "What about capital gains from shares, mutual funds or property?", a: "Yes — short-term and long-term capital gains, LTCG with grandfathering, property sale with indexation, and reinvestment exemptions. We handle all of it." },
];

const content: ServicePageContent = {
  icon: FileText,
  eyebrow: "Income Tax Return Filing in Delhi",
  h1: "Income Tax Return Filing in Delhi — Maximize Your Tax Savings, Legally",
  intro:
    "Accurate ITR filing in Delhi by experienced Chartered Accountants. We claim every deduction you qualify for, file on time, and help you save more — without any stress.",
  body: [
    {
      heading: "Why your ITR filing should not be a last-minute rush",
      paragraphs: [
        "Every year, lakhs of taxpayers in Delhi file their ITR in the last week — and most miss out on legitimate deductions worth thousands of rupees. Wrong tax regime selection, missed 80C investments, ignored HRA exemption, unreported capital gains — small mistakes that cost real money.",
        "On top of that, the Income Tax Department now uses AIS (Annual Information Statement) and TIS to cross-check every transaction — your bank interest, mutual fund dividends, share sales, property registrations, even credit card spends. Mismatches lead to notices.",
        "A proper Chartered Accountant doesn't just fill a form. We review your full picture, pick the right ITR form (ITR-1 / ITR-2 / ITR-3 / ITR-4), choose between old and new tax regimes after a real comparison, and file a clean return that survives scrutiny.",
      ],
    },
    {
      heading: "ITR filing services for every type of taxpayer in Delhi",
      paragraphs: [
        "We file ITRs for salaried employees, freelancers, professionals, business owners, NRIs, and companies. Whether your income is straightforward — just salary and bank interest — or complex with multiple properties, foreign income, or stock trading, we handle it cleanly.",
        "For salaried clients, we focus on Form 16, HRA, home loan interest (Section 24), 80C, 80D, NPS (80CCD), donations (80G), and capital gains. For business owners, we handle profit & loss, balance sheet, presumptive taxation under 44AD/44ADA, and audit cases under 44AB.",
        "If you have stock or crypto trades, we segregate intraday, short-term and long-term gains correctly. If you have foreign assets, we file Schedule FA to stay compliant with the Black Money Act. Nothing falls through the cracks.",
      ],
    },
    {
      heading: "Beyond filing — we help you plan for next year",
      paragraphs: [
        "Real tax savings happen before March 31, not in July. As part of our service, we share a quick tax planning summary every year — what to invest in, how much advance tax to pay, and where you can save more next year.",
        "If you ever get a notice — Section 139(9), 143(1), 143(2), 148 — we handle the response for you. No need to figure out portal screens or technical language. Send us the notice and we take it from there.",
      ],
    },
  ],
  benefits: [
    "Old vs new tax regime comparison done for you",
    "Every legal deduction claimed (80C, 80D, HRA, etc.)",
    "Capital gains, F&O, crypto handled correctly",
    "AIS / 26AS reconciliation before filing",
    "Belated and revised returns supported",
    "ITR notice replies included",
    "Quick refund tracking",
    "Annual tax planning summary",
  ],
  process: [
    { title: "Share basic details", text: "Send Form 16, bank statements, investment proofs — we tell you what's needed." },
    { title: "We review & compute", text: "We pick the right ITR form, regime, and find every deduction you qualify for." },
    { title: "Confirm & file", text: "We share a clear summary; once you approve, we file and get e-verification done." },
    { title: "Refund tracking", text: "We track your refund and help with any post-filing queries or notices." },
  ],
  who: [
    "Salaried individuals across Delhi NCR",
    "Freelancers, consultants and professionals",
    "Business owners (proprietorship, partnership, LLP, company)",
    "NRIs with India income or property",
    "Stock, F&O and crypto traders",
    "Senior citizens and pensioners",
  ],
  faqs,
};

export const Route = createFileRoute("/income-tax-return-filing-delhi")({
  head: () => ({
    meta: [
      { title: "ITR Filing in Delhi | Income Tax Return Filing by CA" },
      { name: "description", content: "Accurate Income Tax Return (ITR) filing in Delhi by experienced Chartered Accountants. Maximize refunds, avoid notices. Free consultation." },
      { name: "keywords", content: "ITR Filing Delhi, Income Tax Return Filing Delhi, CA for ITR Malviya Nagar, Tax Consultant Delhi" },
      { property: "og:title", content: "ITR Filing in Delhi by Chartered Accountants" },
      { property: "og:description", content: "Maximize your tax savings legally. ITR filing for salaried, freelancers and businesses in Delhi." },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/income-tax-return-filing-delhi" },
    ],
    links: [{ rel: "canonical", href: "https://cajayaagarwal.lovable.app/income-tax-return-filing-delhi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqSchema(faqs)) }],
  }),
  component: () => <ServicePageLayout content={content} />,
});
