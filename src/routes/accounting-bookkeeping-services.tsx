import { createFileRoute } from "@tanstack/react-router";
import { BookOpenCheck } from "lucide-react";
import { ServicePageLayout, buildFaqSchema, type ServicePageContent } from "@/components/site/ServicePageLayout";

const faqs = [
  { q: "Do you use Tally, Zoho Books or QuickBooks?", a: "Yes. We work with Tally Prime, Zoho Books, QuickBooks and Excel — whichever fits your business. If you're starting fresh, we recommend the best fit and set it up for you." },
  { q: "How much do bookkeeping services cost in Delhi?", a: "Monthly packages depend on transaction volume — number of invoices, bank entries, and complexity. We share fixed monthly pricing with no surprise charges." },
  { q: "My books are 1-2 years behind. Can you catch up?", a: "Yes, we regularly handle backlog clean-ups — recreating books from bank statements, invoices and receipts. After cleanup, ongoing monthly bookkeeping becomes simple." },
  { q: "Will I get monthly reports?", a: "Yes. Every month you receive a P&L, balance sheet snapshot, cash position and key ratios — explained in plain English so you actually know how your business is doing." },
  { q: "Do you handle bank reconciliation?", a: "Yes. Every bank account is reconciled monthly so your books match your bank — essential for accurate GST, TDS and ITR." },
  { q: "Can you also handle payroll?", a: "Yes. We process monthly payroll, payslips, PF, ESI, Professional Tax and TDS on salary — fully integrated with your books." },
];

const content: ServicePageContent = {
  icon: BookOpenCheck,
  eyebrow: "Accounting & Bookkeeping in Delhi",
  h1: "Accounting & Bookkeeping Services in Delhi — Clean Books, Zero Audit Stress",
  intro:
    "Reliable monthly accounting and bookkeeping services in Delhi by experienced Chartered Accountants. Accurate numbers, monthly reports, and books that are always audit-ready.",
  body: [
    {
      heading: "Bookkeeping is boring — until it isn't",
      paragraphs: [
        "Most Delhi business owners ignore bookkeeping until something forces them to look — a bank loan, a GST notice, an investor question, year-end ITR, or worse, an audit. Then, suddenly, two years of unsorted invoices and bank statements need to become a clean balance sheet in two weeks.",
        "By that time, the cost of cleanup is much higher than what proper monthly bookkeeping would have cost in the first place. Worse, decisions you made during those years were probably based on guesses, not real numbers.",
        "Good bookkeeping is not about ticking a compliance box. It's about knowing — every month — how much you actually earned, how much you owe, who owes you, and whether you're growing or just busy. That's the clarity we give our clients.",
      ],
    },
    {
      heading: "Full-stack accounting services for Delhi businesses",
      paragraphs: [
        "We handle complete monthly accounting in Tally, Zoho Books or QuickBooks — your choice. Sales invoices, purchase bills, expense vouchers, bank entries, journal entries, debit/credit notes — everything posted accurately and on time.",
        "We do monthly bank reconciliation for every account, vendor and customer ledger reconciliations, GST and TDS ledger matching, and inventory tracking where needed. By the 7th–10th of each month, your previous month is fully closed and reports are in your inbox.",
        "Beyond bookkeeping, we manage your accounts payable and receivable cycles, payroll processing, PF/ESI compliance, fixed asset registers and depreciation, and prepare year-end financial statements ready for ITR and audit.",
      ],
    },
    {
      heading: "What you get every month",
      paragraphs: [
        "A clean P&L showing real profit. A balance sheet snapshot showing what you own and owe. A cash flow view so you don't run dry between invoices and payments. Outstanding receivables sorted by ageing — so you know who to chase. And a short note in plain English on what changed and what to watch.",
        "We also keep your books permanently audit-ready. When statutory audit, GST audit, bank audit or due diligence comes around, there is no panic — every entry is documented, supported and reconciled.",
      ],
    },
  ],
  benefits: [
    "Monthly books closed by 10th, every month",
    "Tally / Zoho / QuickBooks — your choice",
    "Bank, vendor & customer reconciliations",
    "Monthly P&L, balance sheet and cash report",
    "Audit-ready books year-round",
    "Backlog cleanup for past years",
    "Payroll, PF, ESI handled",
    "GST & TDS ledgers tied to filings",
  ],
  process: [
    { title: "Discovery call", text: "We understand your business, software preference and current state." },
    { title: "Setup or cleanup", text: "We onboard your data, fix backlog, and define a clean monthly workflow." },
    { title: "Monthly bookkeeping", text: "All entries, reconciliations and reports done by the 10th of each month." },
    { title: "Reports & advisory", text: "Monthly summary plus quarterly review calls to discuss what the numbers mean." },
  ],
  who: [
    "Startups & small businesses in Delhi",
    "Service businesses, agencies and consultants",
    "Retailers and traders in Malviya Nagar, Saket area",
    "Manufacturers needing inventory tracking",
    "Companies preparing for funding or audit",
    "Founders tired of doing books in Excel",
  ],
  faqs,
};

export const Route = createFileRoute("/accounting-bookkeeping-services")({
  head: () => ({
    meta: [
      { title: "Accounting & Bookkeeping Services in Delhi | CA Firm" },
      { name: "description", content: "Monthly accounting & bookkeeping services in Delhi by CAs. Tally, Zoho, QuickBooks. Audit-ready books, P&L, payroll. Free consultation." },
      { name: "keywords", content: "Accounting Services Delhi, Bookkeeping Services Delhi, Tally Accounting Malviya Nagar, Outsourced Accounting Delhi" },
      { property: "og:title", content: "Accounting & Bookkeeping Services in Delhi" },
      { property: "og:description", content: "Clean monthly books, accurate reports, no audit stress." },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/accounting-bookkeeping-services" },
    ],
    links: [{ rel: "canonical", href: "https://cajayaagarwal.lovable.app/accounting-bookkeeping-services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqSchema(faqs)) }],
  }),
  component: () => <ServicePageLayout content={content} />,
});
