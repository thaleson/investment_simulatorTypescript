import { InvestmentOptions } from "../types/investmentOptions";

export function calculateCompoundInterest(options: InvestmentOptions): number {
    const { principal, rate, time, contributions = 0 } = options;
    
    let futureValue = principal * Math.pow((1 + rate), time);

    if (contributions > 0) {
        for (let i = 1; i <= time; i++) {
            futureValue += contributions * Math.pow((1 + rate), time - i);
        }
    }
    
    return futureValue;
}
