"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/Portfolio/userList/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/Portfolio/userList/page.js":
/*!******************************************************!*\
  !*** ./src/app/dashboard/Portfolio/userList/page.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_EThconvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/EThconvert */ \"(app-pages-browser)/./src/app/EThconvert.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [dollarPrice, setDollarPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [portfoliodata, setportfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    let total = 0;\n    const fetchdata = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/UserList\"), {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pid: pid\n            })\n        });\n        const response = await res.json();\n        setportfoliodata(response.error);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_app_EThconvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        async function dollarconverter() {\n            let Dollarprice = await fetch(\"https://api.exchangerate-api.com/v4/latest/USD\");\n            let price = await Dollarprice.json();\n            setDollarPrice(price.rates[\"INR\"]);\n        }\n        dollarconverter();\n        fetchdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto m-4 md:m-8 md:px-16 px-2 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mx-auto bg-white p-2 rounded w-fit text-3xl font-semibold mb-4\",\n                children: \"All Assets\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-white shadow-md rounded-lg md:overflow-hidden overflow-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative overflow-x-auto overflow-y-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full px-4 text-md text-left  text-black \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"text-md text-white uppercase bg-blue-400 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Asset Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Invest Amount\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            className: \"px-6 py-3\",\n                                            children: \"Current Price                \"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    portfoliodata && portfoliodata.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"bg-white border-b \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"row\",\n                                                    className: \"px-6 py-4  text-gray-900 whitespace-nowrap \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-lg font-semibold\",\n                                                            children: data.AssestTitle\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-gray-500\"\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"px-6 py-4\",\n                                                    children: [\n                                                        \"₹\",\n                                                        data.OrginalBuyPrice,\n                                                        \"|\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"px-6 py-4\",\n                                                    children: data.AssestBuyPrice\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, data._id, true, {\n                                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"bg-white border-b \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-6 py-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-semibold\",\n                                                    children: [\n                                                        \"Assets:\",\n                                                        portfoliodata && portfoliodata.length\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-6 py-4\",\n                                                children: [\n                                                    portfoliodata && portfoliodata.forEach((element)=>{\n                                                        total += parseFloat(element.OrginalBuyPrice);\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-lg font-semibold\",\n                                                        children: [\n                                                            \"Total Assets Sell Price:\",\n                                                            total\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-6 py-4\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\userList\\\\page.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"iNo6IlptI8wQC4fzTo9OKntqQio=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL1BvcnRmb2xpby91c2VyTGlzdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUc0QztBQUNBO0FBQ0E7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkQsSUFBSVEsUUFBUTtJQUNaLE1BQU1DLFlBQVk7UUFDaEIsTUFBTUMsY0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBQzFDLE1BQU1DLFlBQVksSUFBSUMsZ0JBQWdCTDtRQUN0QyxJQUFJTSxNQUFNRixVQUFVRyxHQUFHLENBQUMsUUFBUSxTQUFTO1FBRXpDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxHQUFnQyxPQUE3QkMsd0JBQTRCLEVBQUMsMkJBQXlCO1lBQy9FRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1BDLFFBQVE7Z0JBQ1IsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVosS0FBS0E7WUFBSTtRQUNsQztRQUNBLE1BQU1hLFdBQVcsTUFBTVgsSUFBSVksSUFBSTtRQUMvQnZCLGlCQUFpQnNCLFNBQVNFLEtBQUs7SUFDakM7SUFFQTlCLGdEQUFTQSxDQUFDO1FBQ1JILDJEQUFZQTtRQUNaLGVBQWVrQztZQUNiLElBQUlDLGNBQWUsTUFBTWQsTUFBTTtZQUMvQixJQUFJZSxRQUFRLE1BQU1ELFlBQVlILElBQUk7WUFDbEN6QixlQUFlNkIsTUFBTUMsS0FBSyxDQUFDLE1BQU07UUFDbkM7UUFDQUg7UUFDQXZCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWlFOzs7Ozs7MEJBRy9FLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFNRixXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1ILFdBQVU7MENBQ2YsNEVBQUNJO29DQUFHSixXQUFVOztzREFDWiw4REFBQ0s7NENBQUdDLE9BQU07NENBQU1OLFdBQVU7c0RBQVk7Ozs7OztzREFHdEMsOERBQUNLOzRDQUFHQyxPQUFNOzRDQUFNTixXQUFVO3NEQUFZOzs7Ozs7c0RBR3RDLDhEQUFDSzs0Q0FBR0MsT0FBTTs0Q0FBTU4sV0FBVTtzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSzFDLDhEQUFDTzs7b0NBQ0V0QyxpQkFDQ0EsY0FBY3VDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDakIsOERBQUNMOzRDQUFrQkosV0FBVTs7OERBQzNCLDhEQUFDVTtvREFDQ0osT0FBTTtvREFDTk4sV0FBVTs7c0VBR1YsOERBQUNXOzREQUFFWCxXQUFVO3NFQUNWUyxLQUFLRyxXQUFXOzs7Ozs7c0VBRW5CLDhEQUFDRDs0REFBRVgsV0FBVTs7Ozs7Ozs7Ozs7OzhEQUlmLDhEQUFDVTtvREFBR1YsV0FBVTs7d0RBQVk7d0RBQUVTLEtBQUtJLGVBQWU7d0RBQUM7Ozs7Ozs7OERBQ2pELDhEQUFDSDtvREFBR1YsV0FBVTs4REFDWFMsS0FBS0ssY0FBYzs7Ozs7OzsyQ0FmZkwsS0FBS00sR0FBRzs7Ozs7a0RBcUJyQiw4REFBQ1g7d0NBQUdKLFdBQVU7OzBEQUNaLDhEQUFDVTtnREFBR1YsV0FBVTswREFDWiw0RUFBQ1c7b0RBQUVYLFdBQVU7O3dEQUF3Qjt3REFDM0IvQixpQkFBaUJBLGNBQWMrQyxNQUFNOzs7Ozs7Ozs7Ozs7MERBR2pELDhEQUFDTjtnREFBR1YsV0FBVTs7b0RBQ1gvQixpQkFBaUJBLGNBQWNnRCxPQUFPLENBQUNDLENBQUFBO3dEQUN0Qy9DLFNBQVNnRCxXQUFXRCxRQUFRTCxlQUFlO29EQUM3QztrRUFDQSw4REFBQ0Y7d0RBQUVYLFdBQVU7OzREQUF3Qjs0REFBeUI3Qjs7Ozs7Ozs7Ozs7OzswREFHaEUsOERBQUN1QztnREFBR1YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QjtHQW5Hd0JuQzs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvUG9ydGZvbGlvL3VzZXJMaXN0L3BhZ2UuanM/MmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgRXRoY29udmVydGVyIGZyb20gXCJAL2FwcC9FVGhjb252ZXJ0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZG9sbGFyUHJpY2UsIHNldERvbGxhclByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbcG9ydGZvbGlvZGF0YSwgc2V0cG9ydGZvbGlvZGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBsZXQgdG90YWwgPSAwO1xyXG4gIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgbGV0IHBpZCA9IHVybFBhcmFtcy5nZXQoJ3BpZCcpOyAvLyB2YWx1ZTFcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWFwaS9wb3J0Zm9saW8vVXNlckxpc3RgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBpZDogcGlkIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBzZXRwb3J0Zm9saW9kYXRhKHJlc3BvbnNlLmVycm9yKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgRXRoY29udmVydGVyKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb2xsYXJjb252ZXJ0ZXIoKSB7XHJcbiAgICAgIGxldCBEb2xsYXJwcmljZSA9IChhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZS1hcGkuY29tL3Y0L2xhdGVzdC9VU0RcIikpO1xyXG4gICAgICBsZXQgcHJpY2UgPSBhd2FpdCBEb2xsYXJwcmljZS5qc29uKClcclxuICAgICAgc2V0RG9sbGFyUHJpY2UocHJpY2UucmF0ZXNbXCJJTlJcIl0pXHJcbiAgICB9XHJcbiAgICBkb2xsYXJjb252ZXJ0ZXIoKVxyXG4gICAgZmV0Y2hkYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbS00IG1kOm0tOCBtZDpweC0xNiBweC0yIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteC1hdXRvIGJnLXdoaXRlIHAtMiByb3VuZGVkIHctZml0IHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxyXG4gICAgICAgIEFsbCBBc3NldHNcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgbWQ6b3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LXNjcm9sbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIG92ZXJmbG93LXktaGlkZGVuXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgdGV4dC1tZCB0ZXh0LWxlZnQgIHRleHQtYmxhY2sgXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtd2hpdGUgdXBwZXJjYXNlIGJnLWJsdWUtNDAwIFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBc3NldCBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEludmVzdCBBbW91bnRcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgQ3VycmVudCBQcmljZSAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3BvcnRmb2xpb2RhdGEgJiZcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb2RhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2RhdGEuX2lkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCAgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuQXNzZXN0VGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPuKCuXtkYXRhLk9yZ2luYWxCdXlQcmljZX18PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5Bc3Nlc3RCdXlQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2V0czp7cG9ydGZvbGlvZGF0YSAmJiBwb3J0Zm9saW9kYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAge3BvcnRmb2xpb2RhdGEgJiYgcG9ydGZvbGlvZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlRmxvYXQoZWxlbWVudC5PcmdpbmFsQnV5UHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+VG90YWwgQXNzZXRzIFNlbGwgUHJpY2U6e3RvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRXRoY29udmVydGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYWluIiwicm91dGVyIiwiZG9sbGFyUHJpY2UiLCJzZXREb2xsYXJQcmljZSIsInBvcnRmb2xpb2RhdGEiLCJzZXRwb3J0Zm9saW9kYXRhIiwidG90YWwiLCJmZXRjaGRhdGEiLCJxdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicGlkIiwiZ2V0IiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSE9TVCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiZG9sbGFyY29udmVydGVyIiwiRG9sbGFycHJpY2UiLCJwcmljZSIsInJhdGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJkYXRhIiwidGQiLCJwIiwiQXNzZXN0VGl0bGUiLCJPcmdpbmFsQnV5UHJpY2UiLCJBc3Nlc3RCdXlQcmljZSIsIl9pZCIsImxlbmd0aCIsImZvckVhY2giLCJlbGVtZW50IiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/Portfolio/userList/page.js\n"));

/***/ })

});