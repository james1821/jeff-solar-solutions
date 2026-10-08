const nf = (d: number) => new Intl.NumberFormat("en-PH", { maximumFractionDigits: d });
export const formatNumber = (n: number, d = 0) => (Number.isFinite(n) ? nf(d).format(n) : "—");
export const formatPHP = (n: number) => (Number.isFinite(n) ? `₱${formatNumber(Math.round(n))}` : "—");
export const formatPercentage = (fraction: number) => (Number.isFinite(fraction) ? `${Math.round(fraction * 100)}%` : "—");
export const formatKwh = (n: number) => `${formatNumber(n)} kWh`;
export const formatKwp = (n: number) => `${formatNumber(n, 1)} kWp`;
/** Keeps digits only; returns a safe non-negative integer. */
export function parseAmount(raw: string, max = 10_000_000): number {
  const n = parseInt(raw.replace(/\D/g, "") || "0", 10);
  return Number.isFinite(n) ? Math.min(n, max) : 0;
}
/** Sanitises a ₱/kWh input: digits and one decimal point, max 2 decimals. */
export function cleanRate(raw: string): string {
  const [i, ...r] = raw.replace(/[^\d.]/g, "").split(".");
  return r.length ? `${i.slice(0, 3)}.${r.join("").slice(0, 2)}` : i.slice(0, 3);
}
