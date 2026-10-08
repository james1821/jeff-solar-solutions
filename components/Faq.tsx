import { faqs } from "@/data/faqs";
export default function Faq() {
  return (<div className="mx-auto max-w-3xl divide-y divide-slate-200">
    {faqs.map(([q, a]) => (<details key={q} className="group py-4"><summary className="cursor-pointer font-semibold text-deep">{q}</summary><p className="mt-2 text-slate-600">{a}</p></details>))}
  </div>);
}
