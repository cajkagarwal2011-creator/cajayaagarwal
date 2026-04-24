import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Jaya K. Agarwal & Co. — Chartered Accountants",
  image: "https://cajayaagarwal.lovable.app/og-image.jpg",
  "@id": "https://cajayaagarwal.lovable.app",
  url: "https://cajayaagarwal.lovable.app",
  telephone: "+91-7667559772",
  email: "ca.jkagarwal2011@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-4, Malviya Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110017",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.5355, longitude: 77.2106 },
  areaServed: [
    { "@type": "Place", name: "Malviya Nagar" },
    { "@type": "Place", name: "Saket" },
    { "@type": "Place", name: "Hauz Khas" },
    { "@type": "Place", name: "South Delhi" },
    { "@type": "Place", name: "Delhi NCR" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CA in Malviya Nagar Delhi | GST, ITR & Tax Consultant" },
      {
        name: "description",
        content:
          "Looking for a Chartered Accountant in Delhi? Get expert GST, ITR filing, tax planning & compliance services. Free consultation available.",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Jaya K. Agarwal & Co." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Jaya K. Agarwal & Co." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://cajayaagarwal.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster richColors position="top-center" />
    </>
  );
}
