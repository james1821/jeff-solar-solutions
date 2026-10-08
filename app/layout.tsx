import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { business as b } from "@/config/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
export const metadata: Metadata = {
  metadataBase: new URL(b.siteUrl),
  title: `${b.name} | Solar Panel Installation in the Philippines`,
  description: "Solar consultation, system design and installation for homes and businesses. Estimate your potential savings with our free solar calculator.",
  openGraph: { title: b.name, description: b.tagline, type: "website", locale: "en_PH" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "LocalBusiness", name: b.name, telephone: b.phone, email: b.email, address: b.address, url: b.siteUrl };
  return (
    <html lang="en"><body className={`${inter.variable} ${display.variable} font-sans text-slate-800 antialiased pb-16 md:pb-0`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Header /><main>{children}</main><Footer />
      <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-deep text-white text-sm font-semibold md:hidden">
        <a className="py-4 text-center" href={`tel:${b.mobile}`}>📞 Call</a>
        <a className="py-4 text-center" href={b.messenger}>💬 Message</a>
        <a className="py-4 text-center bg-sun text-deep" href="/solar-calculator">☀️ Calculate</a>
      </nav>
    </body></html>
  );
}
