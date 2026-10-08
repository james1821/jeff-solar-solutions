const paths: Record<string, string> = {
  home: "M3 11l9-8 9 8v10H15v-6H9v6H3z",
  calc: "M6 3h12v18H6zM9 7h6M9 11h1M12 11h1M15 11h0M9 15h1M12 15h1M15 15h0",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2",
  panel: "M3 6l3-2h15l-3 14H4zM8 4l-2 14M13 4l-1 14M18 4l-1 14M4 11h16",
  design: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3",
  chat: "M4 5h16v11H9l-5 4z",
  battery: "M3 8h16v8H3zM19 10h2v4h-2zM8 10l-2 2h3l-2 2",
  upgrade: "M12 20V6M6 12l6-6 6 6M5 20h14",
  wrench: "M14 6a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 0-2-2z",
};
export default function Icon({ name, className = "h-7 w-7" }: { name: keyof typeof paths | string; className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d={paths[name] ?? paths.sun} /></svg>);
}
