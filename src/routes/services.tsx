import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Receipt, FileText, Wallet, ShieldCheck, BookOpenCheck,
  ClipboardCheck, Lightbulb, MessageCircle, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GST, Income Tax, TDS, Audit & Advisory | Cajaya Agarwal & Co." },
      { name: "description", content: "End-to-end CA services: GST, Income Tax, TDS, business compliance, accounting, audit and advisory for Indian businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Receipt, title: "GST Compliance", benefit: "Avoid GST penalties with complete registration, monthly filing, reconciliation, and notice handling.", points: ["GST registration", "Monthly/quarterly returns", "GSTR reconciliation", "Notice & refund handling"] },
  { icon: FileText, title: "Income Tax", benefit: "Accurate ITRs and proactive planning to save tax for individuals, professionals, and companies.", points: ["ITR filing (all forms)", "Tax planning", "Capital gains advisory", "Notice / scrutiny support"] },
  { icon: Wallet, title: "TDS Services", benefit: "Stay penalty-free with timely TDS deduction, deposit, returns, and corrections.", points: ["TDS computation & payment", "Quarterly returns", "Form 16 / 16A", "Default & correction filing"] },
  { icon: ShieldCheck, title: "Business Compliance", benefit: "ROC, MCA and statutory filings handled — so you focus on growth, not paperwork.", points: ["Company / LLP incorporation", "ROC & annual filings", "Director KYC", "Secretarial compliance"] },
  { icon: BookOpenCheck, title: "Accounting & Bookkeeping", benefit: "Clean monthly books that are audit-ready and decision-ready.", points: ["Monthly bookkeeping", "Bank reconciliation", "MIS reporting", "Payroll support"] },
  { icon: ClipboardCheck, title: "Audit & Assurance", benefit: "Statutory, internal, and tax audits done with accuracy and zero last-minute surprises.", points: ["Statutory audit", "Tax audit", "Internal audit", "Stock & process audit"] },
  { icon: Lightbulb, title: "Advisory", benefit: "Tax planning and business advisory to help you save more and scale faster.", points: ["Tax structuring", "Business setup advisory", "CFO services", "Investor / due-diligence support"] },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-surface-alt border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Services that keep you compliant & stress-free</h1>
          <p className="mt-4 text-muted-foreground">From GST to audits — practical, on-time CA services for Indian businesses and professionals.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="border-border">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.benefit}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Not sure which service you need?</h2>
          <p className="mt-3 text-primary-foreground/80">Talk to a CA — we'll guide you in plain language.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
