import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Award, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cajaya Agarwal & Co. Chartered Accountants" },
      { name: "description", content: "A modern CA firm helping startups, SMEs and professionals stay compliant and save tax with personalized, on-time service." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-surface-alt border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">About Cajaya Agarwal &amp; Co.</h1>
          <p className="mt-4 text-muted-foreground">A modern Chartered Accountancy firm built around one promise — make tax & compliance simple.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-foreground">
          We're a Chartered Accountancy firm working with startups, SMEs, freelancers and
          e-commerce businesses across India. Our team combines deep tax expertise with
          clear, friendly communication — so you always know what's happening with your
          filings, your books, and your business.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground">
          No jargon. No missed deadlines. No surprise bills. Just dependable CA support
          that helps you stay compliant and save where it counts.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { icon: Award, title: "Expertise", text: "GST, Income Tax, TDS, audit, ROC and advisory — all under one roof." },
            { icon: Users, title: "Personalized Approach", text: "A dedicated CA who understands your business — not a generic helpdesk." },
            { icon: Clock, title: "Reliability", text: "On-time filings and proactive reminders so you never miss a due date." },
            { icon: ShieldCheck, title: "Trust & Transparency", text: "Clear scope, clear pricing, and honest advice — always." },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-5">
              <b.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 font-semibold text-primary">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface-alt p-6">
          <h3 className="font-semibold text-primary">What working with us feels like</h3>
          <ul className="mt-4 space-y-2">
            {[
              "Onboarding call to understand your business and pain points",
              "Custom checklist of compliance, due dates, and quick wins",
              "Monthly updates and proactive reminders — no chasing",
              "One point of contact who actually knows your file",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
