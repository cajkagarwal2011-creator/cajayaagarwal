import { createFileRoute } from "@tanstack/react-router";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { LeadForm } from "@/components/site/LeadForm";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Consultation | Cajaya Agarwal & Co." },
      { name: "description", content: "Talk to a Chartered Accountant. Book a free consultation or chat with us on WhatsApp for GST, ITR, TDS, audit and advisory." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-surface-alt border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Get Free Consultation</h1>
          <p className="mt-4 text-muted-foreground">Tell us a bit about your need — a CA will get back within 1 business day.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <LeadForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface-alt p-6">
            <h2 className="text-lg font-semibold text-primary">Reach us directly</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@cajaya.in</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> India</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Mon–Sat, 10am–7pm IST</li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-medium text-whatsapp-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
            <h3 className="font-semibold">What happens next?</h3>
            <ol className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li>1. We review your details within 1 business day.</li>
              <li>2. A Chartered Accountant calls to understand your need.</li>
              <li>3. You get a clear plan, scope, and pricing — no obligation.</li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
