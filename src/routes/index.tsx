import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ShieldCheck,
  Receipt,
  FileText,
  Wallet,
  BookOpenCheck,
  ClipboardCheck,
  Lightbulb,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Sparkles,
  Quote,
  Building2,
  ShoppingBag,
  UserRound,
  MessageCircle,
  AlertTriangle,
  PhoneCall,
  Upload,
  HeadphonesIcon,
} from "lucide-react";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { LeadForm } from "@/components/site/LeadForm";

const faqs = [
  {
    q: "Which is the best Chartered Accountant in Malviya Nagar, Delhi?",
    a: "If you're looking for a reliable CA in Malviya Nagar, choose someone who is responsive, experienced, and helps you avoid penalties — not just file returns. We focus on timely filings, tax savings, and clear guidance.",
  },
  {
    q: "What happens if I miss GST or ITR filing deadlines in India?",
    a: "Missing deadlines can lead to penalties, interest, and notices from the department. We help you file pending returns, reduce penalties where possible, and stay compliant going forward.",
  },
  {
    q: "How much does GST or ITR filing cost in Delhi?",
    a: "Costs depend on your case (business, salaried, complexity). We offer affordable pricing with clear communication — no hidden charges.",
  },
  {
    q: "Can a CA help me save more tax legally?",
    a: "Yes. A good Chartered Accountant helps you plan taxes properly, use deductions, and avoid unnecessary tax payments — all within legal limits.",
  },
  {
    q: "Do you provide CA services for freelancers and salaried individuals in Delhi?",
    a: "Yes. We work with business owners, freelancers, and salaried individuals across Delhi, especially in Malviya Nagar, Saket, and South Delhi.",
  },
  {
    q: "My accounts are not updated. Can I still file GST or ITR?",
    a: "Yes. Even if your books are not maintained properly, we can organize your data, update accounts, and file your returns correctly.",
  },
  {
    q: "Do you handle GST or Income Tax notices?",
    a: "Yes. We assist with GST notices, income tax notices, and compliance issues — helping you respond properly and avoid further problems.",
  },
  {
    q: "How quickly can a CA respond to queries?",
    a: "A professional CA should respond quickly and clearly. We typically respond within a few hours during working days.",
  },
  {
    q: "What documents are required for ITR or GST filing?",
    a: "Basic documents include PAN, Aadhaar, bank statements, income details, and GST data (if applicable). We guide you step-by-step.",
  },
  {
    q: "How do I get started with a Chartered Accountant in Delhi?",
    a: "Simply click on \"Talk to a CA\" or message us on WhatsApp. We'll understand your case and guide you from start to finish.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CA in Malviya Nagar Delhi | GST, ITR & Tax Consultant" },
      {
        name: "description",
        content:
          "Looking for a Chartered Accountant in Delhi? Get expert GST, ITR filing, tax planning & compliance services in Malviya Nagar, Saket & South Delhi. Free consultation.",
      },
      {
        name: "keywords",
        content:
          "Chartered Accountant in Malviya Nagar, CA in Delhi, GST Filing Services Delhi, ITR Filing Delhi, TDS Filing, Tax Consultant Delhi, CA in South Delhi",
      },
      { property: "og:title", content: "CA in Malviya Nagar Delhi | GST, ITR & Tax Consultant" },
      {
        property: "og:description",
        content: "Save tax. Avoid penalties. Stay compliant. Talk to a Chartered Accountant in Delhi today.",
      },
      { property: "og:url", content: "https://cajayaagarwal.lovable.app/" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Receipt, title: "GST Filing", benefit: "File GST on time. Avoid penalties and notices.", to: "/gst-filing-services-delhi" as const },
  { icon: FileText, title: "Income Tax Return (ITR)", benefit: "Maximize your tax savings legally — for individuals and businesses.", to: "/income-tax-return-filing-delhi" as const },
  { icon: Wallet, title: "TDS Filing", benefit: "Accurate TDS returns and corrections — no late fees, no notices.", to: "/tds-return-filing-delhi" as const },
  { icon: ShieldCheck, title: "Business Compliance (ROC, MCA)", benefit: "ROC and MCA filings handled — stay compliant, focus on growth.", to: "/business-compliance-services" as const },
  { icon: BookOpenCheck, title: "Accounting & Bookkeeping", benefit: "Clean books every month. No audit stress, no last-minute panic.", to: "/accounting-bookkeeping-services" as const },
  { icon: Lightbulb, title: "Tax Planning & Advisory", benefit: "Practical advice that helps you save more and grow with clarity.", to: "/services" as const },
];

const audience = [
  { icon: Building2, title: "Business Owners", problem: "Confusing compliance, missed deadlines, surprise tax bills.", solve: "Monthly GST, TDS, books and tax planning — all in one place." },
  { icon: UserRound, title: "Freelancers", problem: "Unclear which tax regime to pick, deductions missed.", solve: "Right ITR filing, max deductions, advance tax planning." },
  { icon: Award, title: "Salaried Individuals", problem: "Worried about Form 16, capital gains, notices.", solve: "Quick, accurate ITR filing with maximum legal savings." },
  { icon: ShoppingBag, title: "E-commerce Sellers", problem: "Marketplace TCS, GST reconciliation, returns mismatch.", solve: "Clean reconciliation across Amazon, Flipkart, Meesho, Shopify." },
];

const problems = [
  "GST notices or penalties",
  "Missed deadlines",
  "Confusing tax rules",
  "No response from your current CA",
  "Books not updated",
  "Paying more tax than needed",
];

const process = [
  { icon: PhoneCall, title: "Talk to us", text: "A quick call or WhatsApp chat to understand your need." },
  { icon: Upload, title: "Share documents", text: "Send basics over email or WhatsApp — we keep it simple." },
  { icon: ClipboardCheck, title: "We handle everything", text: "Filings, replies, planning — done on time, done right." },
  { icon: HeadphonesIcon, title: "Ongoing support", text: "A dedicated CA you can call, message, and rely on." },
];

const why = [
  { icon: Clock, title: "No Missed Deadlines", text: "We track every due date so you never miss a filing." },
  { icon: Users, title: "Dedicated CA Support", text: "One CA who knows your business — not a ticket queue." },
  { icon: Sparkles, title: "Clear Communication", text: "Plain English answers. Quick replies on call & WhatsApp." },
  { icon: ShieldCheck, title: "Transparent Pricing", text: "No hidden charges. You always know what you're paying." },
];

const testimonials = [
  {
    quote: "We used to get GST notices every quarter and were always stressed about due dates. Since they took over, it's been over a year — zero notices, zero penalties.",
    name: "Rahul M.",
    role: "Founder, D2C Brand",
  },
  {
    quote: "My old CA never picked up the phone during ITR season. Switched to them and got my return filed in 3 days, with a much better refund than last year.",
    name: "Priya S.",
    role: "Freelance Designer",
  },
  {
    quote: "Our books were a mess. They cleaned up two years of accounting, fixed our GST mismatches, and the audit went through smoothly. Real lifesavers.",
    name: "Arjun K.",
    role: "Co-founder, E-commerce Seller",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent">
              <ShieldCheck className="h-3.5 w-3.5" /> Chartered Accountants • Malviya Nagar, New Delhi
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Chartered Accountant in Malviya Nagar, Delhi —{" "}
              <span className="text-accent">Save Tax & Avoid Penalties Without Stress</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Simple, on-time help with <strong className="text-primary-foreground">GST filing, ITR, TDS and business compliance</strong> —
              for businesses, freelancers, and salaried individuals across Delhi.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-accent" /> Tired of GST notices?</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-accent" /> Late filing penalties piling up?</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-accent" /> No clarity from your current CA?</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Talk to a CA Today <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-xs text-primary-foreground/70">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-xs text-primary-foreground/70">Clients Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">0</div>
                <div className="text-xs text-primary-foreground/70">Missed Deadlines</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <h2 className="text-xl font-semibold">Get Free Consultation</h2>
            <p className="mt-1 text-sm text-primary-foreground/70">Tell us a little about your need.</p>
            <div className="mt-5 rounded-xl bg-background p-5 text-foreground">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
              Everything you need to stay compliant & save tax
            </h2>
            <p className="mt-3 text-muted-foreground">
              Practical, benefit-driven services for businesses and individuals in Delhi.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group">
                <Card className="h-full border-border transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.benefit}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who We Serve</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Solutions built around your situation</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audience.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-primary">{a.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground"><span className="font-medium text-foreground">Problem:</span> {a.problem}</p>
                <p className="mt-2 text-sm text-muted-foreground"><span className="font-medium text-foreground">How we help:</span> {a.solve}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Sound Familiar?</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Facing These Problems?</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <span className="text-sm font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-primary p-8 text-center text-primary-foreground">
            <h3 className="text-2xl font-bold">We fix all this for you.</h3>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              One CA. Clear answers. On-time work. No more chasing, no more surprises.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Talk to a CA Now</Link>
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 text-sm font-medium text-primary-foreground hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Process</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">How working with us looks</h2>
            <p className="mt-3 text-muted-foreground">Simple, transparent, and built around you.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="relative rounded-xl border border-border bg-card p-6">
                <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  Step {i + 1}
                </div>
                <p.icon className="mt-2 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Reasons clients stay with us</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <w.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">What our clients say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground">Quick answers about working with a Chartered Accountant in Delhi.</p>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 rounded-xl border border-border bg-surface-alt p-6 text-center">
            <p className="text-sm text-foreground">
              Still have questions? <Link to="/contact" className="font-semibold text-accent hover:underline">Talk to a Chartered Accountant in Delhi</Link> today.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT mini */}
      <section className="bg-surface-alt">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">About the Firm</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">A trusted CA partner — not just a paperwork desk.</h2>
            <p className="mt-4 text-muted-foreground">
              Based in Malviya Nagar, we serve clients across South Delhi — Saket, Hauz Khas, and beyond.
              No jargon, no chasing for updates. Just clear answers and on-time work.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Expertise across GST, Income Tax, TDS, audit & advisory",
                "On-time filings — we track your deadlines for you",
                "Transparent pricing with no hidden charges",
                "A dedicated CA as your single point of contact",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="Jaya K. Agarwal & Co. — Malviya Nagar, New Delhi"
              src="https://www.google.com/maps?q=Malviya+Nagar+New+Delhi&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 text-sm text-muted-foreground">
              <strong className="text-primary">G-4, Malviya Nagar, New Delhi</strong> — Serving Malviya Nagar, Saket, Hauz Khas & South Delhi.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Still Paying More Tax Than You Should?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Talk to a Chartered Accountant in Delhi and get a clear plan to save tax and stay compliant.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Talk to a CA Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
            >
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
