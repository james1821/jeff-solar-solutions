import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
export const metadata: Metadata = { title: "Solar Savings Calculator", description: "Estimate your potential solar savings in three quick steps." };
export default function Page() {
  return (<><div className="bg-sky px-5 py-10 text-center"><h1 className="font-display text-3xl font-bold text-deep">Solar Savings Calculator</h1></div><Calculator /></>);
}
