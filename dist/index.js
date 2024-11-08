"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCompoundInterest_1 = require("../src/utils/calculateCompoundInterest");
const options = {
    principal: 10000,
    rate: 0.07,
    time: 10,
    contributions: 1200
};
const futureValue = (0, calculateCompoundInterest_1.calculateCompoundInterest)(options);
console.log(`💰 O valor futuro do investimento é: R$${futureValue.toFixed(2)}`);
