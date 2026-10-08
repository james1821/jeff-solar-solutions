import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.slice(0, limit).map((p) => (
        <article key={p.title} className="overflow-hidden rounded border border-slate-200">
          <div className="relative grid h-48 place-items-center bg-sky text-sm text-deep/60">
            {p.image ? <Image src={p.image} alt={`${p.title}, ${p.location}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /> : "Photo placeholder"}
          </div>
          <div className="p-4">
            <p className="text-xs font-semibold uppercase text-sun-dark">{p.type}{p.sizeKwp ? ` · ${p.sizeKwp}` : ""}</p>
            <h3 className="font-display text-lg font-bold text-deep">{p.title}</h3>
            <p className="text-sm text-slate-500">{p.location}</p>
            <p className="mt-2 text-sm">{p.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}