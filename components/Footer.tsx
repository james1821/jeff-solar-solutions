import { business as b } from "@/config/business";
export default function Footer() {
  return (<footer className="bg-deep px-5 py-10 text-center text-sm text-white/80">
    <p className="font-display text-lg font-bold text-white">{b.name}</p>
    <p className="mt-2">{b.address} · {b.phone} · {b.email}</p>
    <p className="mt-4 text-xs">© {new Date().getFullYear()} {b.name}. Solar estimates are for planning only.</p>
  </footer>);
}
