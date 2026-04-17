import { Link } from "@tanstack/react-router";
import { Calculator, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Calculator className="h-5 w-5 text-accent" />
            Cajaya Agarwal &amp; Co.
          </div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Chartered Accountants helping businesses stay compliant, save tax, and
            grow with confidence.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@cajaya.in</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Cajaya Agarwal &amp; Co. All rights reserved.
      </div>
    </footer>
  );
}
