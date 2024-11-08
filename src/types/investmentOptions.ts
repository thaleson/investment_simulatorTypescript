export interface InvestmentOptions {
    principal: number;      // Valor inicial do investimento
    rate: number;           // Taxa de juros anual em decimal (por exemplo, 0.05 para 5%)
    time: number;           // Tempo em anos
    contributions?: number; // Contribuições anuais adicionais (opcional)
}
