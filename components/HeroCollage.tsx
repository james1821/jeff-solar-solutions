import { heroImages } from "@/data/heroImages";
const heights = ["h-44", "h-60", "h-52", "h-64", "h-48", "h-56"];
const shades = ["#173f7e", "#1d4f9c", "#2a63b8"];
const cols = [{ cls: "col-up", offset: 0 }, { cls: "col-down", offset: 1 }, { cls: "col-up hidden sm:flex", offset: 2 }, { cls: "col-down hidden lg:flex", offset: 3 }];
export default function HeroCollage() {
  const img = (i: number) => heroImages[i % heroImages.length];
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -inset-x-16 -inset-y-32 flex -rotate-6 justify-center gap-4">
        {cols.map(({ cls, offset }) => {
          const tiles = [0, 1, 2, 3].map((n) => ({ src: img(offset + n * cols.length), h: heights[(offset + n * 2) % heights.length], c: shades[(offset + n) % shades.length] }));
          return (
            <div key={offset} className={`${cls} flex w-48 shrink-0 flex-col gap-4 md:w-56`}>
              {[...tiles, ...tiles].map((t, i) => (<div key={i} className={`${t.h} w-full shrink-0 rounded bg-cover bg-center`} style={{ backgroundColor: t.c, backgroundImage: `url(${t.src})` }} />))}
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-deep/85" />
    </div>
  );
}
