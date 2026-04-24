import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { LeadForm } from "@/components/site/LeadForm";
import { ArrowRight, CheckCircle2, MessageCircle, type LucideIcon } from "lucide-react";

export type ServicePageContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  body: { heading: string; paragraphs: string[] }[];
  benefits: string[];
  process: { title: string; text: string }[];
  who: string[];
  faqs: { q: string; a: string }[];
  icon: LucideIcon;
};

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  const Icon = content.icon;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent">
              <Icon className="h-3.5 w-3.5" /> {content.eyebrow}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">{content.h1}</h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">Get Free Consultation</h2>
            <div className="mt-4 rounded-xl bg-background p-5 text-foreground">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1fr_320px]">
          <article className="prose-content">
            {content.body.map((b) => (
              <div key={b.heading} className="mb-8">
                <h2 className="text-2xl font-bold text-primary md:text-3xl">{b.heading}</h2>
                {b.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 text-base leading-relaxed text-muted-foreground">{p}</p>
                ))}
              </div>
            ))}

            <div className="mt-10 rounded-2xl border border-border bg-surface-alt p-6">
              <h2 className="text-2xl font-bold text-primary">Key benefits</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {content.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary">How we work</h2>
              <ol className="mt-5 space-y-4">
                {content.process.map((p, i) => (
                  <li key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-2xl font-bold text-primary">Who this is for</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {content.who.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {content.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-primary">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
              <h3 className="text-lg font-bold">Need help today?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Talk to a Chartered Accountant in Delhi — free 15-minute consultation.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">Talk to a CA Now</Link>
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface-alt p-6 text-sm">
              <h3 className="font-semibold text-primary">We serve clients across</h3>
              <p className="mt-2 text-muted-foreground">
                Malviya Nagar, Saket, Hauz Khas, South Delhi & all of Delhi NCR.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            Get a clear plan from a trusted Chartered Accountant in Delhi — no obligation.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Talk to a CA Now</Link>
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground hover:opacity-90"
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

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
