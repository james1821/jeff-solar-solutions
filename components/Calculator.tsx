"use client";
import { useMemo, useState } from "react";
import { calculateSolar, nationalAverageTariff } from "@/lib/solarCalculator";
import { formatPHP, formatNumber, formatPercentage, formatKwh, formatKwp, parseAmount, cleanRate } from "@/lib/formatters";
const offsets = [[0.25, "Start Saving"], [0.5, "Balanced"], [0.75, "Big Savings"], [1, "Maximum Offset"]] as const;
const labels = ["Bill", "Goal", "Rate", "Results"];
const btn = "min-h-12 rounded bg-sun px-6 py-3 font-bold text-deep hover:bg-sun-dark disabled:opacity-40";
export default function Calculator() {
  const [step, setStep] = useState(0);
  const [bill, setBill] = useState(8000);
  const [offset, setOffset] = useState(0.5);
  const [rate, setRate] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);
  const rateNum = rate ? parseFloat(rate) : NaN;
  const rateValid = rate === "" || (rateNum >= 1 && rateNum <= 50);
  const usingAvg = rate === "" || !rateValid;
  const res = useMemo(() => calculateSolar({ monthlyBill: bill, targetOffset: offset, tariffPerKwh: usingAvg ? undefined : rateNum }), [bill, offset, usingAvg, rateNum]);
  const next = () => setStep((s) => s + 1), back = () => setStep((s) => Math.max(0, s - 1));
  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:rapidon123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const field = "min-h-12 w-full rounded border border-slate-300 px-4 text-lg";
  return (
    <div className="mx-auto max-w-xl px-5 py-10">
      <ol className="mb-8 flex justify-between text-xs font-semibold" aria-label="Progress">
        {labels.map((l, i) => (<li key={l} aria-current={i === step ? "step" : undefined} className={`flex-1 border-t-4 pt-2 ${i <= step ? "border-sun text-deep" : "border-slate-200 text-slate-400"}`}>{i + 1}. {l}</li>))}
      </ol>
      <div key={step} className="rise">
        {step === 0 && (<>
          <p className="text-sm text-slate-500">Step 1 of 3</p>
          <h2 className="font-display text-2xl font-bold text-deep"><label htmlFor="bill">What&apos;s your average monthly electricity bill?</label></h2>
          <input id="bill" inputMode="numeric" autoComplete="off" className={`${field} mt-4 text-3xl font-bold`} value={bill ? formatPHP(bill) : ""} placeholder="₱8,000" onChange={(e) => setBill(parseAmount(e.target.value))} />
          <div className="mt-3 flex flex-wrap gap-2">{[3500, 5000, 10000, 25000].map((v) => <button key={v} type="button" onClick={() => setBill(v)} className="min-h-11 rounded-full border border-slate-300 px-4 hover:border-sun">{formatPHP(v)}</button>)}</div>
          <div className="mt-8 text-right"><button className={btn} disabled={bill <= 0} onClick={next}>Continue →</button></div>
        </>)}
        {step === 1 && (<>
          <p className="text-sm text-slate-500">Step 2 of 3</p>
          <h2 className="font-display text-2xl font-bold text-deep">How much of your bill would you like solar to offset?</h2>
          <p className="text-sm text-slate-500">Target electricity offset, not a guarantee.</p>
          <div role="radiogroup" className="mt-4 grid grid-cols-2 gap-3">
            {offsets.map(([v, t]) => (<button key={v} role="radio" aria-checked={offset === v} onClick={() => setOffset(v)} className={`rounded border-2 p-4 text-left ${offset === v ? "border-sun bg-sun/20" : "border-slate-200"}`}><span className="font-display text-2xl font-bold text-deep">{formatPercentage(v)}</span><br /><span className="text-sm">{t}</span></button>))}
          </div>
          <div className="mt-8 flex justify-between"><button className="min-h-12 px-3 font-semibold" onClick={back}>← Back</button><button className={btn} onClick={next}>Continue →</button></div>
        </>)}
        {step === 2 && (<>
          <p className="text-sm text-slate-500">Step 3 of 3</p>
          <h2 className="font-display text-2xl font-bold text-deep"><label htmlFor="rate">What&apos;s your electricity rate per kWh?</label></h2>
          <p className="text-sm text-slate-500">Look for &quot;rate per kWh&quot; on your bill, or divide your total bill by the kWh you used.</p>
          <div className="relative mt-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400" aria-hidden>₱</span>
            <input id="rate" inputMode="decimal" autoComplete="off" className={`${field} pl-10 pr-20 text-3xl font-bold`} value={rate} placeholder={formatNumber(nationalAverageTariff, 2)} onChange={(e) => setRate(cleanRate(e.target.value))} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden>/ kWh</span>
          </div>
          {!rateValid && <p role="alert" className="mt-2 text-sm text-red-600">Enter a rate between ₱1 and ₱50, or use the national average.</p>}
          <button type="button" onClick={() => setRate("")} className="mt-3 min-h-11 rounded-full border border-slate-300 px-4 hover:border-sun">I don&apos;t know, use the national average (₱{formatNumber(nationalAverageTariff, 2)})</button>
          <p className="mt-4 rounded bg-sky p-3 text-sm" aria-live="polite">{usingAvg ? `We'll use the national average of ₱${formatNumber(nationalAverageTariff, 2)}/kWh.` : `We'll use your rate of ₱${formatNumber(rateNum, 2)}/kWh.`}</p>
          <div className="mt-8 flex justify-between"><button className="min-h-12 px-3 font-semibold" onClick={back}>← Back</button><button className={btn} disabled={!rateValid} onClick={next}>See My Estimate →</button></div>
        </>)}
        {step === 3 && (<section aria-live="polite">
          <h2 className="font-display text-2xl font-bold text-deep">Here&apos;s your estimated solar goal.</h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-center">
            {[["Monthly bill", formatPHP(bill)], ["Target offset", formatPercentage(offset)], ["Est. monthly savings", formatPHP(res.estimatedMonthlySavings)], ["Est. annual savings", formatPHP(res.estimatedAnnualSavings)], ["Est. system size", `~${formatKwp(res.estimatedSystemSizeKwp)}`], ["Est. generation / month", `~${formatKwh(res.estimatedMonthlyGenerationKwh)}`]].map(([k, v]) => (<div key={k} className="rounded border border-slate-200 p-3"><dt className="text-xs text-slate-500">{k}</dt><dd className="font-display text-xl font-bold text-deep">{v}</dd></div>))}
          </dl>
          <p className="mt-4 text-xs text-slate-500">These figures are estimates for planning purposes only. Actual system size, savings, equipment, installation cost, and performance depend on your electricity consumption, location, roof conditions, solar resource, equipment selection, and site assessment. Assumptions used: ₱{formatNumber(res.assumptions.tariffPerKwh, 2)}/kWh{usingAvg ? " (national average)" : " (your rate)"}, {res.assumptions.peakSunHours} peak sun hours/day, {formatPercentage(res.assumptions.performanceRatio)} performance ratio.</p>
          <form onSubmit={submit} className="mt-8 rounded bg-deep p-5 text-white">
            <h3 className="font-display text-xl font-bold">Want a more accurate estimate for your home?</h3>
            <p className="mb-3 text-sm text-white/80">This is only an initial estimate. Send us a message for a free solar assessment.</p>
            {sent ? <p className="font-semibold text-sun">Thank you! Your email is ready to send.</p> : <div className="space-y-3 text-deep">
              <input required aria-label="Subject" placeholder="Subject" className={`${field} text-white placeholder:text-white/60`} value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea required aria-label="Body" placeholder="Body" rows={5} className={`${field} py-3 text-white placeholder:text-white/60`} value={body} onChange={(e) => setBody(e.target.value)} />
              <button className={`${btn} w-full`}>Send Email</button>
            </div>}
          </form>
          <button className="mt-4 min-h-12 font-semibold" onClick={() => setStep(0)}>← Start over</button>
        </section>)}
      </div>
    </div>
  );
}
