import Link from "next/link";
import Founder from "@/components/Founder";
import Icon from "@/components/Icons";
import HeroCollage from "@/components/HeroCollage";
import Faq from "@/components/Faq";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactBlock from "@/components/ContactBlock";
import { business as b } from "@/config/business";
const cta = "inline-block rounded bg-sun px-6 py-4 font-bold text-deep hover:bg-sun-dark";
const services = [["panel", "Solar Panel Installation"], ["design", "Solar System Design"], ["chat", "Solar Consultation"], ["battery", "Battery Solutions"], ["upgrade", "Solar Upgrades"], ["wrench", "Maintenance & Support"]];
const stepIcons = ["home", "calc", "search", "sun"];
const steps = [["Tell Us About Your Home", "Share your electricity bill and rate per kWh."], ["Get an Initial Estimate", "Use the calculator to understand your potential solar goal."], ["Get a Site Assessment", "Our team evaluates your actual requirements."], ["Go Solar", "Get a system designed around your needs."]];
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="mb-8 font-display text-3xl font-bold text-deep">{children}</h2>;
export default function Home() {
  return (<>
    <section className="relative z-10 bg-deep text-white"><HeroCollage /><div className="relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-5 pt-14 md:grid-cols-2">
      <div className="rise pb-14"><h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">Save Money<br></br><span className="text-sun"> Go Solar </span></h1>
        <p className="mt-4 max-w-md text-white/80">Solar consultation, system design and installation for Philippine homes and businesses.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="/solar-calculator" className={cta}>Calculate Your Solar Savings</Link><Link href="/contact" className="rounded border border-white/60 px-6 py-4 font-bold hover:bg-white/10">Talk to Us</Link></div></div>
      <Founder /></div></section>
    <section className="bg-sky px-5 py-16"><div className="mx-auto max-w-3xl text-center"><h2 className="font-display text-3xl font-bold text-deep">How much could solar save you?</h2>
      <p className="mt-3">Tell us about your electricity bill and rate. We&apos;ll give you an initial estimate of your potential savings.</p>
      <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3 text-sm font-semibold text-deep sm:grid-cols-4">{["Monthly bill", "Savings goal", "Your rate", "Your estimate"].map((t, i) => <div key={t} className="rounded bg-white p-3">{i + 1}<br />{t}</div>)}</div>
      <Link href="/solar-calculator" className={`${cta} mt-8`}>Calculate My Solar Savings →</Link></div></section>
    <section id="services" className="mx-auto max-w-6xl px-5 py-16"><H2>Why solar, and how we help</H2><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{services.map(([i, s]) => <div key={s} className="flex items-center gap-4 border-l-4 border-sun bg-white p-4 font-semibold text-deep shadow-sm"><span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-deep text-sun"><Icon name={i} /></span>{s}</div>)}</div></section>
    <section className="bg-sky px-5 py-16"><div className="mx-auto max-w-6xl"><H2>How it works</H2><ol className="grid gap-6 md:grid-cols-4">{steps.map(([t, d], i) => <li key={t}><span className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-sun text-deep shadow"><Icon name={stepIcons[i]} className="h-8 w-8" /></span><span className="font-display text-sm font-bold text-sun-dark">STEP 0{i + 1}</span><h3 className="font-bold text-deep">{t}</h3><p className="text-sm">{d}</p></li>)}</ol></div></section>
    <section className="mx-auto max-w-6xl px-5 py-16"><H2>Recent projects</H2><ProjectsGrid limit={3} /><Link href="/projects" className="mt-6 inline-block font-semibold text-deep underline">See all projects →</Link></section>
<section className="bg-sky px-5 py-16">
  <div className="mx-auto max-w-3xl">
    <H2>Meet {b.founder.name}</H2>

    <p className="-mt-5 mb-4 font-bold text-sun-dark">
      {b.founder.title}
    </p>

    <p className="whitespace-pre-line">
      {b.founder.story}
    </p>

    <p className="mt-2">
      Service area: {b.areasServed.join(", ")}
    </p>

    <a
      href={b.mapsUrl}
      className="mt-4 inline-block font-semibold text-deep underline"
    >
      Get directions →
    </a>    
  </div>
</section>
    <section className="mx-auto max-w-3xl px-5 py-16 text-center"><H2>What customers say</H2><blockquote className="italic">&ldquo;Nagdecide ako na magpa-install ng solar panel. Dahil nadin sa tumataas na presyo ng kuryente, at sa Tuwing may brownout di na din kami mamomroblema sa init ng panahon. Goods ang pagkakagawa, napaka bait at pogi rin ng Kuya ko&rdquo;<footer className="mt-2 not-italic font-semibold">- Engr. Jerrick I. Espinosa  </footer></blockquote></section>
    <section id="faq" className="bg-sky px-5 py-16"><H2>Frequently asked questions</H2><Faq /></section>
    <section className="px-5 py-16 text-center"><H2>Get a Free Solar Assessment</H2><ContactBlock /></section>
  </>);
}
