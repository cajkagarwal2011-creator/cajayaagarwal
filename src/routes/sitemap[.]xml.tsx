import { createFileRoute } from "@tanstack/react-router";

const urls = [
  { loc: "https://cajayaagarwal.lovable.app/", priority: "1.0" },
  { loc: "https://cajayaagarwal.lovable.app/services", priority: "0.9" },
  { loc: "https://cajayaagarwal.lovable.app/about", priority: "0.7" },
  { loc: "https://cajayaagarwal.lovable.app/contact", priority: "0.8" },
  { loc: "https://cajayaagarwal.lovable.app/gst-filing-services-delhi", priority: "0.9" },
  { loc: "https://cajayaagarwal.lovable.app/income-tax-return-filing-delhi", priority: "0.9" },
  { loc: "https://cajayaagarwal.lovable.app/tds-return-filing-delhi", priority: "0.9" },
  { loc: "https://cajayaagarwal.lovable.app/accounting-bookkeeping-services", priority: "0.9" },
  { loc: "https://cajayaagarwal.lovable.app/business-compliance-services", priority: "0.9" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
