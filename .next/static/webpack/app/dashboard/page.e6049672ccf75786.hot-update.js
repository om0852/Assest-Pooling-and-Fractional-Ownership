"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/EThconvert.js":
/*!*******************************!*\
  !*** ./src/app/EThconvert.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ethconverter; }\n/* harmony export */ });\nasync function Ethconverter() {\n    let eth = await fetchEthereumPrice();\n    window.addEventListener(\"keyup\", async function(event) {\n        // Check if Ctrl key and T key are pressed\n        // Regular expression for checking the format ₹100 or $100\n        if (event.ctrlKey && event.key === \"q\") {\n            // Get the selected text\n            console.log(i);\n            var selectedText = getSelectedText();\n            if ((selectedText[0] == \"$\" || selectedText[0] == \"₹\") && selectedText.length > 0) {\n                var amount = selectedText.slice(1); // Using slice to remove the dollar or rupees sign\n                if (selectedText[0] == \"$\") {\n                    let dollar = await dollarconverter();\n                    alert(\"Eth:-  \" + (amount * dollar / eth).toFixed(6));\n                } else if (selectedText[0] == \"₹\") {\n                    alert(\"Eth:-  \" + (amount / eth).toFixed(6));\n                } else {}\n            } else {}\n        }\n    });\n}\n_c = Ethconverter;\nfunction getSelectedText() {\n    // Get the selected text\n    var selectedText = \"\";\n    if (window.getSelection) {\n        selectedText = window.getSelection().toString();\n    } else if (document.selection && document.selection.type != \"Control\") {\n        selectedText = document.selection.createRange().text;\n    }\n    return selectedText;\n}\nconst fetchEthereumPrice = async ()=>{\n    try {\n        const response = await fetch(\"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr\");\n        const data = await response.json();\n        return data.ethereum.inr;\n    // setEthPriceInINR(data.ethereum.inr);\n    } catch (error) {\n        console.error(\"Error fetching Ethereum price:\", error);\n    }\n};\nasync function dollarconverter() {\n    let Dollarprice = await fetch(\"https://api.exchangerate-api.com/v4/latest/USD\");\n    let price = await Dollarprice.json();\n    return price.rates[\"INR\"];\n}\nvar _c;\n$RefreshReg$(_c, \"Ethconverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRVRoY29udmVydC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUE7SUFDMUIsSUFBSUMsTUFBTSxNQUFNQztJQUNoQkMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxlQUFnQkMsS0FBSztRQUNsRCwwQ0FBMEM7UUFDMUMsMERBQTBEO1FBQzFELElBQUlBLE1BQU1DLE9BQU8sSUFBSUQsTUFBTUUsR0FBRyxLQUFLLEtBQUs7WUFDcEMsd0JBQXdCO1lBQ3hCQyxRQUFRQyxHQUFHLENBQUNDO1lBQ1osSUFBSUMsZUFBZUM7WUFDbkIsSUFBSSxDQUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLE9BQU9BLFlBQVksQ0FBQyxFQUFFLElBQUksR0FBRSxLQUFNQSxhQUFhRSxNQUFNLEdBQUcsR0FBRztnQkFDL0UsSUFBSUMsU0FBU0gsYUFBYUksS0FBSyxDQUFDLElBQUksa0RBQWtEO2dCQUV0RixJQUFJSixZQUFZLENBQUMsRUFBRSxJQUFJLEtBQUs7b0JBQ3hCLElBQUlLLFNBQVMsTUFBTUM7b0JBQ25CQyxNQUFNLFlBQVksQ0FBQyxTQUFVRixTQUFVZixHQUFFLEVBQUdrQixPQUFPLENBQUM7Z0JBRXhELE9BQ0ssSUFBSVIsWUFBWSxDQUFDLEVBQUUsSUFBSSxLQUFLO29CQUM3Qk8sTUFBTSxZQUFZLENBQUMsU0FBV2pCLEdBQUUsRUFBR2tCLE9BQU8sQ0FBQztnQkFDL0MsT0FDSyxDQUNMO1lBQ0osT0FDSyxDQUNMO1FBRUo7SUFDSjtBQUVKO0tBN0I4Qm5CO0FBOEI5QixTQUFTWTtJQUNMLHdCQUF3QjtJQUN4QixJQUFJRCxlQUFlO0lBQ25CLElBQUlSLE9BQU9pQixZQUFZLEVBQUU7UUFDckJULGVBQWVSLE9BQU9pQixZQUFZLEdBQUdDLFFBQVE7SUFDakQsT0FBTyxJQUFJQyxTQUFTQyxTQUFTLElBQUlELFNBQVNDLFNBQVMsQ0FBQ0MsSUFBSSxJQUFJLFdBQVc7UUFDbkViLGVBQWVXLFNBQVNDLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHQyxJQUFJO0lBQ3hEO0lBQ0EsT0FBT2Y7QUFDWDtBQUNBLE1BQU1ULHFCQUFxQjtJQUN2QixJQUFJO1FBQ0EsTUFBTXlCLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaEMsT0FBUUQsS0FBS0UsUUFBUSxDQUFDQyxHQUFHO0lBQ3pCLHVDQUF1QztJQUMzQyxFQUFFLE9BQU9DLE9BQU87UUFDWnpCLFFBQVF5QixLQUFLLENBQUMsa0NBQWtDQTtJQUNwRDtBQUNKO0FBQ0EsZUFBZWhCO0lBQ1gsSUFBSWlCLGNBQWUsTUFBTU4sTUFBTTtJQUMvQixJQUFJTyxRQUFRLE1BQU1ELFlBQVlKLElBQUk7SUFDbEMsT0FBUUssTUFBTUMsS0FBSyxDQUFDLE1BQU07QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9FVGhjb252ZXJ0LmpzPzk0ODAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gRXRoY29udmVydGVyKCkge1xyXG4gICAgbGV0IGV0aCA9IGF3YWl0IGZldGNoRXRoZXJldW1QcmljZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgQ3RybCBrZXkgYW5kIFQga2V5IGFyZSBwcmVzc2VkXHJcbiAgICAgICAgLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBjaGVja2luZyB0aGUgZm9ybWF0IOKCuTEwMCBvciAkMTAwXHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAncScpIHtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzZWxlY3RlZCB0ZXh0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRleHQgPSBnZXRTZWxlY3RlZFRleHQoKTtcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RlZFRleHRbMF0gPT0gXCIkXCIgfHwgc2VsZWN0ZWRUZXh0WzBdID09IFwi4oK5XCIpICYmIHNlbGVjdGVkVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW1vdW50ID0gc2VsZWN0ZWRUZXh0LnNsaWNlKDEpOyAvLyBVc2luZyBzbGljZSB0byByZW1vdmUgdGhlIGRvbGxhciBvciBydXBlZXMgc2lnblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRleHRbMF0gPT0gXCIkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZG9sbGFyID0gYXdhaXQgZG9sbGFyY29udmVydGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFdGg6LSAgXCIgKyAoKGFtb3VudCAqIGRvbGxhcikgLyBldGgpLnRvRml4ZWQoNikpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkVGV4dFswXSA9PSBcIuKCuVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFdGg6LSAgXCIgKyAoKGFtb3VudCkgLyBldGgpLnRvRml4ZWQoNikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGdldFNlbGVjdGVkVGV4dCgpIHtcclxuICAgIC8vIEdldCB0aGUgc2VsZWN0ZWQgdGV4dFxyXG4gICAgdmFyIHNlbGVjdGVkVGV4dCA9ICcnO1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICBzZWxlY3RlZFRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi50eXBlICE9ICdDb250cm9sJykge1xyXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xyXG59XHJcbmNvbnN0IGZldGNoRXRoZXJldW1QcmljZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvc2ltcGxlL3ByaWNlP2lkcz1ldGhlcmV1bSZ2c19jdXJyZW5jaWVzPWlucicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIChkYXRhLmV0aGVyZXVtLmlucik7XHJcbiAgICAgICAgLy8gc2V0RXRoUHJpY2VJbklOUihkYXRhLmV0aGVyZXVtLmlucik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIEV0aGVyZXVtIHByaWNlOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBkb2xsYXJjb252ZXJ0ZXIoKSB7XHJcbiAgICBsZXQgRG9sbGFycHJpY2UgPSAoYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5leGNoYW5nZXJhdGUtYXBpLmNvbS92NC9sYXRlc3QvVVNEXCIpKTtcclxuICAgIGxldCBwcmljZSA9IGF3YWl0IERvbGxhcnByaWNlLmpzb24oKVxyXG4gICAgcmV0dXJuIChwcmljZS5yYXRlc1tcIklOUlwiXSlcclxufSJdLCJuYW1lcyI6WyJFdGhjb252ZXJ0ZXIiLCJldGgiLCJmZXRjaEV0aGVyZXVtUHJpY2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5Iiwia2V5IiwiY29uc29sZSIsImxvZyIsImkiLCJzZWxlY3RlZFRleHQiLCJnZXRTZWxlY3RlZFRleHQiLCJsZW5ndGgiLCJhbW91bnQiLCJzbGljZSIsImRvbGxhciIsImRvbGxhcmNvbnZlcnRlciIsImFsZXJ0IiwidG9GaXhlZCIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJ0eXBlIiwiY3JlYXRlUmFuZ2UiLCJ0ZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXRoZXJldW0iLCJpbnIiLCJlcnJvciIsIkRvbGxhcnByaWNlIiwicHJpY2UiLCJyYXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/EThconvert.js\n"));

/***/ })

});