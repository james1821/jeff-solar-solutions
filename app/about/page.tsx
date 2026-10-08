import { business as b } from "@/config/business";
export const metadata = { title: "About" };
export default function Page() {
  return (<section className="mx-auto max-w-3xl px-5 py-14"><h1 className="font-display text-3xl font-bold text-deep">Meet {b.founder.name}</h1>
    <p className="mt-1 font-bold text-sun-dark">{b.founder.title}</p>
    <p className="mt-4">{b.founder.story}</p><p className="mt-2">{b.founder.experience}</p><p className="mt-2">Service area: {b.areasServed.join(", ")}</p></section>);
}
