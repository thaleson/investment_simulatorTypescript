import { calculateCompoundInterest } from "./src/utils/calculateCompoundInterest";
import { InvestmentOptions } from "./src/types/investmentOptions";

declare global {
  interface Window { calculateInvestment: () => void; }
}

window.calculateInvestment = () => {
  const principal = parseFloat((document.getElementById("principal") as HTMLInputElement).value);
  const rate = parseFloat((document.getElementById("rate") as HTMLInputElement).value) / 100;
  const time = parseInt((document.getElementById("time") as HTMLInputElement).value);
  const contributions = parseFloat((document.getElementById("contributions") as HTMLInputElement).value);

  const options: InvestmentOptions = {
    principal,
    rate,
    time,
    contributions
  };

  const futureValue = calculateCompoundInterest(options);
  const resultDiv = document.getElementById("result");

  if (resultDiv) {
    resultDiv.innerHTML = `💰 O valor futuro do investimento é: <strong>R$${futureValue.toFixed(2)}</strong>`;
  }
};
