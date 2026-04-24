import { Link } from "@tanstack/react-router";
import { Calculator, Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "./Navbar";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      {/* CTA strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 md:flex-row md:items-center">
          <p className="text-base font-semibold md:text-lg">
            Get expert tax help today — <span className="text-accent">Contact us.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Talk to a CA Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-whatsapp px-5 text-sm font-medium text-whatsapp-foreground transition-colors hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Calculator className="h-5 w-5 text-accent" />
            Jaya K. Agarwal &amp; Co.
          </div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Chartered Accountants helping businesses, professionals, and individuals
            save tax, stay compliant, and grow with confidence — with clear advice and
            on-time delivery.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/services" className="transition-colors hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>
              <a href="tel:+917667559772" className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 text-accent" /> +91-7667559772
              </a>
            </li>
            <li>
              <a href="mailto:ca.jkagarwal2011@gmail.com" className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                <span>ca.jkagarwal2011@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Chat
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" /> G-4, Malviya Nagar, New Delhi
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Jaya K. Agarwal &amp; Co. All rights reserved.
      </div>
    </footer>
  );
}
