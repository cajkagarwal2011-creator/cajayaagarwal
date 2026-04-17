import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Rocket,
  ShoppingBag,
  UserRound,
  MessageCircle,
} from "lucide-react";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cajaya Agarwal & Co. — Chartered Accountants | GST, ITR, TDS, Audit" },
      {
        name: "description",
        content:
          "Trusted CA firm helping businesses stay compliant and stress-free. GST, Income Tax, TDS, audit, accounting & advisory. Book a free consultation today.",
      },
      { property: "og:title", content: "Cajaya Agarwal & Co. — Chartered Accountants" },
      {
        property: "og:description",
        content: "Avoid penalties. Save tax. Stay compliant. Talk to a CA today.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Receipt,
    title: "GST Compliance",
    benefit: "Avoid GST penalties with end-to-end registration, monthly filing, and reconciliation support.",
  },
  {
    icon: FileText,
    title: "Income Tax",
    benefit: "Maximize savings and file ITRs accurately — for individuals, professionals, and companies.",
  },
  {
    icon: Wallet,
    title: "TDS Services",
    benefit: "Stay penalty-free with timely TDS deduction, deposit, return filing, and corrections.",
  },
  {
    icon: ShieldCheck,
    title: "Business Compliance",
    benefit: "ROC, MCA, and statutory filings handled — so you focus on growth, not paperwork.",
  },
  {
    icon: BookOpenCheck,
    title: "Accounting & Bookkeeping",
    benefit: "Clean books every month with reliable accounting that's audit-ready and decision-ready.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    benefit: "Statutory, internal, and tax audits done with accuracy and zero last-minute surprises.",
  },
  {
    icon: Lightbulb,
    title: "Advisory",
    benefit: "Smart tax planning and business advisory to help you save more and scale faster.",
  },
];

const audience = [
  { icon: Rocket, title: "Startups", line: "Get incorporation, tax setup, and compliance — all in one place." },
  { icon: Building2, title: "SMEs", line: "Reliable monthly compliance, audits, and CFO-level advisory." },
  { icon: UserRound, title: "Freelancers & Professionals", line: "Simple ITR filing and tax planning that maximizes take-home." },
  { icon: ShoppingBag, title: "E-commerce Sellers", line: "GST on marketplaces, TCS reconciliation, and accurate books." },
];

const why = [
  { icon: Clock, title: "Timely Compliance", text: "We track every due date so you never miss a deadline." },
  { icon: Users, title: "Personalized Support", text: "A dedicated CA who understands your business, not a ticket." },
  { icon: Award, title: "Experienced Professionals", text: "Years of hands-on work across industries and tax matters." },
  { icon: ShieldCheck, title: "Transparent Process", text: "Clear pricing, clear timelines, clear communication." },
  { icon: Sparkles, title: "Accuracy-Focused", text: "Reviewed work, zero shortcuts — clean filings every time." },
];

const testimonials = [
  {
    quote:
      "They took complete ownership of our GST and TDS filings. We haven't received a single notice in over a year.",
    name: "Rahul M.",
    role: "Founder, D2C Brand",
  },
  {
    quote:
      "Quick, responsive, and genuinely helpful. They saved us a meaningful amount on tax with proactive planning.",
    name: "Priya S.",
    role: "Director, IT Services Pvt. Ltd.",
  },
  {
    quote:
      "Finally a CA firm that explains things in plain language. Books are clean, audit was smooth.",
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
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted Chartered Accountants
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Stop worrying about tax notices, penalties & deadlines.
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              We handle GST, Income Tax, TDS, audits and end-to-end business compliance —
              so you save tax, stay compliant, and focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Book Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 text-sm font-medium text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> 100% confidential</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Reply in 1 business day</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> No obligation</li>
            </ul>
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

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface-alt">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { k: "10+", v: "Years of Experience" },
            { k: "500+", v: "Clients Served" },
            { k: "100%", v: "Timely Compliance" },
            { k: "4.9★", v: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl font-bold text-primary">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
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
              Practical, benefit-driven services designed for Indian businesses and professionals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="group border-border transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who We Serve</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Built for growing businesses</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">About the Firm</p>
            <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
              A modern CA firm that actually picks up the phone
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cajaya Agarwal &amp; Co. is a Chartered Accountancy firm helping startups, SMEs,
              and professionals manage tax and compliance without the usual chaos.
              We combine deep expertise with clear communication and on-time delivery.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Expertise across GST, Income Tax, TDS, audit & advisory",
                "Practical, business-first approach — not just paperwork",
                "On-time filings, transparent pricing, no hidden surprises",
                "Dedicated point of contact for every client",
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
          <div className="rounded-2xl border border-border bg-surface-alt p-8">
            <Quote className="h-8 w-8 text-accent" />
            <p className="mt-4 text-lg font-medium leading-relaxed text-primary">
              “Our goal is simple — make tax and compliance the least stressful part
              of running your business.”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— The Cajaya Agarwal &amp; Co. Team</p>
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
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Need help with taxes or compliance?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Talk to a Chartered Accountant today. Get clear answers, honest pricing, and
            a plan that keeps your business penalty-free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
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
