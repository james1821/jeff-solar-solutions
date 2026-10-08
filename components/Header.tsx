import Link from "next/link";
import { business as b } from "@/config/business";
const links = [["/", "Home"], ["/solar-calculator", "Solar Calculator"], ["/#services", "Services"], ["/projects", "Projects"], ["/about", "About"], ["/#faq", "FAQ"], ["/contact", "Contact"]];
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-deep text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-display text-lg font-bold">☀️ {b.name}</Link>
        <nav aria-label="Main" className="hidden items-center gap-5 text-sm lg:flex">
          {links.map(([h, l]) => <Link key={h} href={h} className="hover:text-sun">{l}</Link>)}
          <Link href="/solar-calculator" className="rounded bg-sun px-4 py-2 font-semibold text-deep hover:bg-sun-dark">Calculate Savings</Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded px-3 py-2 text-2xl" aria-label="Menu">☰</summary>
          <div className="absolute right-0 mt-2 w-56 rounded bg-white p-2 text-deep shadow-lg">
            {links.map(([h, l]) => <Link key={h} href={h} className="block rounded px-3 py-3 hover:bg-sky">{l}</Link>)}
          </div>
        </details>
      </div>
    </header>
  );
}
