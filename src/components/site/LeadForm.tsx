import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { WHATSAPP_URL } from "./Navbar";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().max(1000).optional(),
});

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll reach out within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91 ..." required />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="message">How can we help? (optional)</Label>
          <Textarea id="message" name="message" placeholder="GST, ITR, audit, advisory..." rows={4} />
        </div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "Sending..." : "Get Free Consultation"}
        </Button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-md bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
        >
          Chat on WhatsApp
        </a>
      </div>
      <p className="text-xs text-muted-foreground">No spam. Your details stay private.</p>
    </form>
  );
}
