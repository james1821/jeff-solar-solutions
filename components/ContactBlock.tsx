import { business as b } from "@/config/business";
export default function ContactBlock() {
  const rows = [["Phone", b.mobile, `tel:${b.mobile}`], ["Email", b.email, `mailto:${b.email}`], ["Facebook", "Our page", b.facebook], ["Messenger", "Message us", b.messenger], ["Directions", b.address, b.mapsUrl]];
  return (<><p className="mb-4 text-center text-slate-600">Talk directly with <strong className="text-deep">{b.founder.name}</strong>, {b.founder.title}.</p><ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
    {rows.map(([l, v, h]) => (<li key={l}><a href={h} className="block rounded border border-slate-200 bg-white p-4 hover:border-sun"><span className="text-xs font-semibold uppercase text-sun-dark">{l}</span><br /><span className="font-semibold text-deep">{v}</span></a></li>))}
  </ul></>);
}
