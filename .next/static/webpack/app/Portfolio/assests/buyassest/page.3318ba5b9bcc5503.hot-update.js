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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ethconverter; }\n/* harmony export */ });\nasync function Ethconverter() {\n    let eth = await fetchEthereumPrice();\n    window.addEventListener(\"keyup\", async function(event) {\n        // Check if Ctrl key and T key are pressed\n        // Regular expression for checking the format ₹100 or $100\n        if (event.ctrlKey && event.key === \"q\") {\n            // Get the selected text\n            var selectedText = getSelectedText();\n            if ((selectedText[0] == \"$\" || selectedText[0] == \"₹\") && selectedText.length > 0) {\n                var amount = selectedText.slice(1); // Using slice to remove the dollar or rupees sign\n                if (selectedText[0] == \"$\") {\n                    let dollar = await dollarconverter();\n                    return alert(\"Eth:-  \" + (amount * dollar / eth).toFixed(6));\n                } else if (selectedText[0] == \"₹\") {\n                    return alert(\"Eth:-  \" + (amount / eth).toFixed(6));\n                } else {\n                    return;\n                }\n            } else {}\n        }\n    });\n}\n_c = Ethconverter;\nfunction getSelectedText() {\n    // Get the selected text\n    var selectedText = \"\";\n    if (window.getSelection) {\n        selectedText = window.getSelection().toString();\n    } else if (document.selection && document.selection.type != \"Control\") {\n        selectedText = document.selection.createRange().text;\n    }\n    return selectedText;\n}\nconst fetchEthereumPrice = async ()=>{\n    try {\n        const response = await fetch(\"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr\");\n        const data = await response.json();\n        return data.ethereum.inr;\n    // setEthPriceInINR(data.ethereum.inr);\n    } catch (error) {\n        console.error(\"Error fetching Ethereum price:\", error);\n    }\n};\nasync function dollarconverter() {\n    let Dollarprice = await fetch(\"https://api.exchangerate-api.com/v4/latest/USD\");\n    let price = await Dollarprice.json();\n    return price.rates[\"INR\"];\n}\nvar _c;\n$RefreshReg$(_c, \"Ethconverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRVRoY29udmVydC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUE7SUFDMUIsSUFBSUMsTUFBTSxNQUFNQztJQUNoQkMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxlQUFnQkMsS0FBSztRQUNsRCwwQ0FBMEM7UUFDMUMsMERBQTBEO1FBQzFELElBQUlBLE1BQU1DLE9BQU8sSUFBSUQsTUFBTUUsR0FBRyxLQUFLLEtBQUs7WUFDcEMsd0JBQXdCO1lBQ3hCLElBQUlDLGVBQWVDO1lBQ25CLElBQUksQ0FBQ0QsWUFBWSxDQUFDLEVBQUUsSUFBSSxPQUFPQSxZQUFZLENBQUMsRUFBRSxJQUFJLEdBQUUsS0FBTUEsYUFBYUUsTUFBTSxHQUFHLEdBQUc7Z0JBQy9FLElBQUlDLFNBQVNILGFBQWFJLEtBQUssQ0FBQyxJQUFJLGtEQUFrRDtnQkFFdEYsSUFBSUosWUFBWSxDQUFDLEVBQUUsSUFBSSxLQUFLO29CQUN4QixJQUFJSyxTQUFTLE1BQU1DO29CQUNuQixPQUFPQyxNQUFNLFlBQVksQ0FBQyxTQUFVRixTQUFVWixHQUFFLEVBQUdlLE9BQU8sQ0FBQztnQkFFL0QsT0FDSyxJQUFJUixZQUFZLENBQUMsRUFBRSxJQUFJLEtBQUs7b0JBQzdCLE9BQU9PLE1BQU0sWUFBWSxDQUFDLFNBQVdkLEdBQUUsRUFBR2UsT0FBTyxDQUFDO2dCQUN0RCxPQUNLO29CQUNEO2dCQUNKO1lBQ0osT0FDSyxDQUNMO1FBRUo7SUFDSjtBQUVKO0tBN0I4QmhCO0FBOEI5QixTQUFTUztJQUNMLHdCQUF3QjtJQUN4QixJQUFJRCxlQUFlO0lBQ25CLElBQUlMLE9BQU9jLFlBQVksRUFBRTtRQUNyQlQsZUFBZUwsT0FBT2MsWUFBWSxHQUFHQyxRQUFRO0lBQ2pELE9BQU8sSUFBSUMsU0FBU0MsU0FBUyxJQUFJRCxTQUFTQyxTQUFTLENBQUNDLElBQUksSUFBSSxXQUFXO1FBQ25FYixlQUFlVyxTQUFTQyxTQUFTLENBQUNFLFdBQVcsR0FBR0MsSUFBSTtJQUN4RDtJQUNBLE9BQU9mO0FBQ1g7QUFDQSxNQUFNTixxQkFBcUI7SUFDdkIsSUFBSTtRQUNBLE1BQU1zQixXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDLE9BQVFELEtBQUtFLFFBQVEsQ0FBQ0MsR0FBRztJQUN6Qix1Q0FBdUM7SUFDM0MsRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO0lBQ3BEO0FBQ0o7QUFDQSxlQUFlaEI7SUFDWCxJQUFJa0IsY0FBZSxNQUFNUCxNQUFNO0lBQy9CLElBQUlRLFFBQVEsTUFBTUQsWUFBWUwsSUFBSTtJQUNsQyxPQUFRTSxNQUFNQyxLQUFLLENBQUMsTUFBTTtBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0VUaGNvbnZlcnQuanM/OTQ4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBFdGhjb252ZXJ0ZXIoKSB7XHJcbiAgICBsZXQgZXRoID0gYXdhaXQgZmV0Y2hFdGhlcmV1bVByaWNlKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBDdHJsIGtleSBhbmQgVCBrZXkgYXJlIHByZXNzZWRcclxuICAgICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIGNoZWNraW5nIHRoZSBmb3JtYXQg4oK5MTAwIG9yICQxMDBcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5rZXkgPT09ICdxJykge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIHRleHRcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGV4dCA9IGdldFNlbGVjdGVkVGV4dCgpO1xyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdGVkVGV4dFswXSA9PSBcIiRcIiB8fCBzZWxlY3RlZFRleHRbMF0gPT0gXCLigrlcIikgJiYgc2VsZWN0ZWRUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbW91bnQgPSBzZWxlY3RlZFRleHQuc2xpY2UoMSk7IC8vIFVzaW5nIHNsaWNlIHRvIHJlbW92ZSB0aGUgZG9sbGFyIG9yIHJ1cGVlcyBzaWduXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGV4dFswXSA9PSBcIiRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb2xsYXIgPSBhd2FpdCBkb2xsYXJjb252ZXJ0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJFdGg6LSAgXCIgKyAoKGFtb3VudCAqIGRvbGxhcikgLyBldGgpLnRvRml4ZWQoNikpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkVGV4dFswXSA9PSBcIuKCuVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRXRoOi0gIFwiICsgKChhbW91bnQpIC8gZXRoKS50b0ZpeGVkKDYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUZXh0KCkge1xyXG4gICAgLy8gR2V0IHRoZSBzZWxlY3RlZCB0ZXh0XHJcbiAgICB2YXIgc2VsZWN0ZWRUZXh0ID0gJyc7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLnR5cGUgIT0gJ0NvbnRyb2wnKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XHJcbn1cclxuY29uc3QgZmV0Y2hFdGhlcmV1bVByaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPWV0aGVyZXVtJnZzX2N1cnJlbmNpZXM9aW5yJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gKGRhdGEuZXRoZXJldW0uaW5yKTtcclxuICAgICAgICAvLyBzZXRFdGhQcmljZUluSU5SKGRhdGEuZXRoZXJldW0uaW5yKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgRXRoZXJldW0gcHJpY2U6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGRvbGxhcmNvbnZlcnRlcigpIHtcclxuICAgIGxldCBEb2xsYXJwcmljZSA9IChhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZS1hcGkuY29tL3Y0L2xhdGVzdC9VU0RcIikpO1xyXG4gICAgbGV0IHByaWNlID0gYXdhaXQgRG9sbGFycHJpY2UuanNvbigpXHJcbiAgICByZXR1cm4gKHByaWNlLnJhdGVzW1wiSU5SXCJdKVxyXG59Il0sIm5hbWVzIjpbIkV0aGNvbnZlcnRlciIsImV0aCIsImZldGNoRXRoZXJldW1QcmljZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN0cmxLZXkiLCJrZXkiLCJzZWxlY3RlZFRleHQiLCJnZXRTZWxlY3RlZFRleHQiLCJsZW5ndGgiLCJhbW91bnQiLCJzbGljZSIsImRvbGxhciIsImRvbGxhcmNvbnZlcnRlciIsImFsZXJ0IiwidG9GaXhlZCIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJ0eXBlIiwiY3JlYXRlUmFuZ2UiLCJ0ZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXRoZXJldW0iLCJpbnIiLCJlcnJvciIsImNvbnNvbGUiLCJEb2xsYXJwcmljZSIsInByaWNlIiwicmF0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/EThconvert.js\n"));

/***/ })

});