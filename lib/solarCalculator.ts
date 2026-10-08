/** National average residential rate, ₱/kWh. Source: DOE, June 2026 (₱12.43). Update periodically. */
export const nationalAverageTariff = 12.43;

export type SolarAssumptions = {
  /** ₱/kWh actually used: the customer's own rate, or the national average. */
  tariffPerKwh: number;
  /** PLACEHOLDER: average peak sun hours per day. */
  peakSunHours: number;
  /** System losses (inverter, wiring, heat, dust). */
  performanceRatio: number;
  daysPerMonth: number;
};
export const defaultAssumptions: SolarAssumptions = { tariffPerKwh: nationalAverageTariff, peakSunHours: 4.5, performanceRatio: 0.8, daysPerMonth: 30 };

export type SolarCalculatorInput = { monthlyBill: number; targetOffset: number; /** Customer's ₱/kWh; omit to use the national average. */ tariffPerKwh?: number };
export type SolarCalculatorResult = {
  estimatedMonthlySavings: number; estimatedAnnualSavings: number;
  estimatedSystemSizeKwp: number; estimatedMonthlyGenerationKwh: number; assumptions: SolarAssumptions;
};

export function calculateSolar(input: SolarCalculatorInput, base: SolarAssumptions = defaultAssumptions): SolarCalculatorResult {
  const rate = input.tariffPerKwh && Number.isFinite(input.tariffPerKwh) && input.tariffPerKwh > 0 ? input.tariffPerKwh : base.tariffPerKwh;
  const a = { ...base, tariffPerKwh: rate };
  const bill = Number.isFinite(input.monthlyBill) ? Math.max(0, input.monthlyBill) : 0;
  const offset = Math.min(1, Math.max(0, input.targetOffset));
  const savings = bill * offset;
  const kwhPerKwpMonth = a.peakSunHours * a.daysPerMonth * a.performanceRatio;
  const kwp = kwhPerKwpMonth > 0 ? savings / rate / kwhPerKwpMonth : 0;
  return { estimatedMonthlySavings: savings, estimatedAnnualSavings: savings * 12, estimatedSystemSizeKwp: kwp, estimatedMonthlyGenerationKwh: kwp * kwhPerKwpMonth, assumptions: a };
}
