/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/calculateCompoundInterest.ts":
/*!************************************************!*\
  !*** ./src/utils/calculateCompoundInterest.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateCompoundInterest = calculateCompoundInterest;
function calculateCompoundInterest(options) {
    const { principal, rate, time, contributions = 0 } = options;
    let futureValue = principal * Math.pow((1 + rate), time);
    if (contributions > 0) {
        for (let i = 1; i <= time; i++) {
            futureValue += contributions * Math.pow((1 + rate), time - i);
        }
    }
    return futureValue;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const calculateCompoundInterest_1 = __webpack_require__(/*! ./src/utils/calculateCompoundInterest */ "./src/utils/calculateCompoundInterest.ts");
window.calculateInvestment = () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const time = parseInt(document.getElementById("time").value);
    const contributions = parseFloat(document.getElementById("contributions").value);
    const options = {
        principal,
        rate,
        time,
        contributions
    };
    const futureValue = (0, calculateCompoundInterest_1.calculateCompoundInterest)(options);
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = `💰 O valor futuro do investimento é: <strong>R$${futureValue.toFixed(2)}</strong>`;
    }
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map