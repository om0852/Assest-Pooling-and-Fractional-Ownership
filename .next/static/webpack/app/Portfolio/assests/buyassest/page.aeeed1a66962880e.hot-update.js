"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Portfolio/assests/buyassest/page",{

/***/ "(app-pages-browser)/./src/app/EThconvert.js":
/*!*******************************!*\
  !*** ./src/app/EThconvert.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ethconverter; }\n/* harmony export */ });\nasync function Ethconverter() {\n    let eth = await fetchEthereumPrice();\n    window.addEventListener(\"keyup\", async function(event) {\n        // Check if Ctrl key and T key are pressed\n        // Regular expression for checking the format ₹100 or $100\n        if (event.ctrlKey && event.key === \"q\") {\n            // Get the selected text\n            var selectedText = getSelectedText();\n            if ((selectedText[0] == \"$\" || selectedText[0] == \"₹\") && selectedText.length > 0) {\n                var amount = selectedText.slice(1); // Using slice to remove the dollar or rupees sign\n                if (selectedText[0] == \"$\") {\n                    let dollar = await dollarconverter();\n                    return alert(\"Eth:-  \" + (amount * dollar / eth).toFixed(6));\n                } else if (selectedText[0] == \"₹\") {\n                    return alert(\"Eth:-  \" + (amount / eth).toFixed(6));\n                } else {}\n            } else {}\n        }\n    });\n}\n_c = Ethconverter;\nfunction getSelectedText() {\n    // Get the selected text\n    var selectedText = \"\";\n    if (window.getSelection) {\n        selectedText = window.getSelection().toString();\n    } else if (document.selection && document.selection.type != \"Control\") {\n        selectedText = document.selection.createRange().text;\n    }\n    return selectedText;\n}\nconst fetchEthereumPrice = async ()=>{\n    try {\n        const response = await fetch(\"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr\");\n        const data = await response.json();\n        return data.ethereum.inr;\n    // setEthPriceInINR(data.ethereum.inr);\n    } catch (error) {\n        console.error(\"Error fetching Ethereum price:\", error);\n    }\n};\nasync function dollarconverter() {\n    let Dollarprice = await fetch(\"https://api.exchangerate-api.com/v4/latest/USD\");\n    let price = await Dollarprice.json();\n    return price.rates[\"INR\"];\n}\nvar _c;\n$RefreshReg$(_c, \"Ethconverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRVRoY29udmVydC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUE7SUFDMUIsSUFBSUMsTUFBTSxNQUFNQztJQUNoQkMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxlQUFnQkMsS0FBSztRQUNsRCwwQ0FBMEM7UUFDMUMsMERBQTBEO1FBQzFELElBQUlBLE1BQU1DLE9BQU8sSUFBSUQsTUFBTUUsR0FBRyxLQUFLLEtBQUs7WUFDcEMsd0JBQXdCO1lBQ3hCLElBQUlDLGVBQWVDO1lBQ25CLElBQUksQ0FBQ0QsWUFBWSxDQUFDLEVBQUUsSUFBSSxPQUFPQSxZQUFZLENBQUMsRUFBRSxJQUFJLEdBQUUsS0FBTUEsYUFBYUUsTUFBTSxHQUFHLEdBQUc7Z0JBQy9FLElBQUlDLFNBQVNILGFBQWFJLEtBQUssQ0FBQyxJQUFJLGtEQUFrRDtnQkFFdEYsSUFBSUosWUFBWSxDQUFDLEVBQUUsSUFBSSxLQUFLO29CQUN4QixJQUFJSyxTQUFTLE1BQU1DO29CQUNwQixPQUFPQyxNQUFNLFlBQVksQ0FBQyxTQUFVRixTQUFVWixHQUFFLEVBQUdlLE9BQU8sQ0FBQztnQkFFOUQsT0FDSyxJQUFJUixZQUFZLENBQUMsRUFBRSxJQUFJLEtBQUs7b0JBQzlCLE9BQU9PLE1BQU0sWUFBWSxDQUFDLFNBQVdkLEdBQUUsRUFBR2UsT0FBTyxDQUFDO2dCQUNyRCxPQUNLLENBQ0w7WUFDSixPQUNLLENBQ0w7UUFFSjtJQUNKO0FBRUo7S0E1QjhCaEI7QUE2QjlCLFNBQVNTO0lBQ0wsd0JBQXdCO0lBQ3hCLElBQUlELGVBQWU7SUFDbkIsSUFBSUwsT0FBT2MsWUFBWSxFQUFFO1FBQ3JCVCxlQUFlTCxPQUFPYyxZQUFZLEdBQUdDLFFBQVE7SUFDakQsT0FBTyxJQUFJQyxTQUFTQyxTQUFTLElBQUlELFNBQVNDLFNBQVMsQ0FBQ0MsSUFBSSxJQUFJLFdBQVc7UUFDbkViLGVBQWVXLFNBQVNDLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHQyxJQUFJO0lBQ3hEO0lBQ0EsT0FBT2Y7QUFDWDtBQUNBLE1BQU1OLHFCQUFxQjtJQUN2QixJQUFJO1FBQ0EsTUFBTXNCLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaEMsT0FBUUQsS0FBS0UsUUFBUSxDQUFDQyxHQUFHO0lBQ3pCLHVDQUF1QztJQUMzQyxFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7SUFDcEQ7QUFDSjtBQUNBLGVBQWVoQjtJQUNYLElBQUlrQixjQUFlLE1BQU1QLE1BQU07SUFDL0IsSUFBSVEsUUFBUSxNQUFNRCxZQUFZTCxJQUFJO0lBQ2xDLE9BQVFNLE1BQU1DLEtBQUssQ0FBQyxNQUFNO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvRVRoY29udmVydC5qcz85NDgwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEV0aGNvbnZlcnRlcigpIHtcclxuICAgIGxldCBldGggPSBhd2FpdCBmZXRjaEV0aGVyZXVtUHJpY2UoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIEN0cmwga2V5IGFuZCBUIGtleSBhcmUgcHJlc3NlZFxyXG4gICAgICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgY2hlY2tpbmcgdGhlIGZvcm1hdCDigrkxMDAgb3IgJDEwMFxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ3EnKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgc2VsZWN0ZWQgdGV4dFxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRUZXh0ID0gZ2V0U2VsZWN0ZWRUZXh0KCk7XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0ZWRUZXh0WzBdID09IFwiJFwiIHx8IHNlbGVjdGVkVGV4dFswXSA9PSBcIuKCuVwiKSAmJiBzZWxlY3RlZFRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IHNlbGVjdGVkVGV4dC5zbGljZSgxKTsgLy8gVXNpbmcgc2xpY2UgdG8gcmVtb3ZlIHRoZSBkb2xsYXIgb3IgcnVwZWVzIHNpZ25cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXh0WzBdID09IFwiJFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbGxhciA9IGF3YWl0IGRvbGxhcmNvbnZlcnRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRXRoOi0gIFwiICsgKChhbW91bnQgKiBkb2xsYXIpIC8gZXRoKS50b0ZpeGVkKDYpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RlZFRleHRbMF0gPT0gXCLigrlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRXRoOi0gIFwiICsgKChhbW91bnQpIC8gZXRoKS50b0ZpeGVkKDYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFRleHQoKSB7XHJcbiAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIHRleHRcclxuICAgIHZhciBzZWxlY3RlZFRleHQgPSAnJztcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24udHlwZSAhPSAnQ29udHJvbCcpIHtcclxuICAgICAgICBzZWxlY3RlZFRleHQgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcclxufVxyXG5jb25zdCBmZXRjaEV0aGVyZXVtUHJpY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL3NpbXBsZS9wcmljZT9pZHM9ZXRoZXJldW0mdnNfY3VycmVuY2llcz1pbnInKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiAoZGF0YS5ldGhlcmV1bS5pbnIpO1xyXG4gICAgICAgIC8vIHNldEV0aFByaWNlSW5JTlIoZGF0YS5ldGhlcmV1bS5pbnIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBFdGhlcmV1bSBwcmljZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZG9sbGFyY29udmVydGVyKCkge1xyXG4gICAgbGV0IERvbGxhcnByaWNlID0gKGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlLWFwaS5jb20vdjQvbGF0ZXN0L1VTRFwiKSk7XHJcbiAgICBsZXQgcHJpY2UgPSBhd2FpdCBEb2xsYXJwcmljZS5qc29uKClcclxuICAgIHJldHVybiAocHJpY2UucmF0ZXNbXCJJTlJcIl0pXHJcbn0iXSwibmFtZXMiOlsiRXRoY29udmVydGVyIiwiZXRoIiwiZmV0Y2hFdGhlcmV1bVByaWNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3RybEtleSIsImtleSIsInNlbGVjdGVkVGV4dCIsImdldFNlbGVjdGVkVGV4dCIsImxlbmd0aCIsImFtb3VudCIsInNsaWNlIiwiZG9sbGFyIiwiZG9sbGFyY29udmVydGVyIiwiYWxlcnQiLCJ0b0ZpeGVkIiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJkb2N1bWVudCIsInNlbGVjdGlvbiIsInR5cGUiLCJjcmVhdGVSYW5nZSIsInRleHQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJldGhlcmV1bSIsImluciIsImVycm9yIiwiY29uc29sZSIsIkRvbGxhcnByaWNlIiwicHJpY2UiLCJyYXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/EThconvert.js\n"));

/***/ })

});