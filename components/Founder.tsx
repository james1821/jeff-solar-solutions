import { business as b } from "@/config/business";

export default function Founder() {
  const { name, title } = b.founder;
  return (
    <div className="rise mx-auto w-full max-w-sm md:mx-0 md:ml-auto md:self-center md:pb-14">
      <div className="bg-sun px-6 py-5 text-deep shadow-xl text-center">
        <p className="font-display text-3xl font-bold leading-tight md:text-4xl">{name}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide md:text-sm">{title}</p>
      </div>
    </div>
  );
}
