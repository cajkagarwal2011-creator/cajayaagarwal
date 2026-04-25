import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ShieldCheck, Clock } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./Navbar";
import { supabase } from "@/integrations/supabase/client";

const SERVICES = [
  "GST Filing",
  "Income Tax Return (ITR)",
  "TDS Filing",
  "Business Compliance (ROC, MCA)",
  "Accounting & Bookkeeping",
  "Tax Planning & Advisory",
  "Other / Not sure",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  service: z.string().trim().min(1, "Please select a service"),
  email: z
    .string()
    .trim()
    .max(255)
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
});

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      service: fd.get("service") ?? "",
      email: fd.get("email") ?? "",
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      service: parsed.data.service,
      message: parsed.data.message || null,
      source: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send. Please try WhatsApp or call us.");
      return;
    }
    toast.success("Thanks! We'll reach out within 1 business day.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          autoComplete="name"
          required
          className="h-11"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="+91 ..."
          autoComplete="tel"
          required
          className="h-11"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="service">Service required</Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      {!compact && (
        <>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="flex items-center justify-between">
              <span>Email</span>
              <span className="text-xs font-normal text-muted-foreground">Optional</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">How can we help? (optional)</Label>
            <Textarea id="message" name="message" placeholder="GST, ITR, audit, advisory..." rows={4} />
          </div>
        </>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
          {loading ? "Sending..." : "Talk to a CA Now"}
        </Button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
      <div className="space-y-1.5 pt-1">
        <p className="flex items-center gap-1.5 text-xs font-medium text-accent">
          <Clock className="h-3.5 w-3.5" /> Get a response within 1 business day
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" /> 100% confidential · No spam · No obligation
        </p>
      </div>
    </form>
  );
}
