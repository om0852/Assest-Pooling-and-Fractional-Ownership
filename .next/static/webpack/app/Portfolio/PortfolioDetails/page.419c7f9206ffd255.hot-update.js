"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Portfolio/PortfolioDetails/page",{

/***/ "(app-pages-browser)/./src/app/Portfolio/PortfolioDetails/page.js":
/*!****************************************************!*\
  !*** ./src/app/Portfolio/PortfolioDetails/page.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [portfoliodata, setportfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const fetchdata = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        const res = await fetch(\"http://localhost:3000/api/portfolio/portfoliodetails\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pid: pid\n            })\n        });\n        const response = await res.json();\n        console.log(response);\n        setportfoliodata(response.error.Assests);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen rounded p-2 md:px-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center my-2 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-white text-lg font-bold\",\n                    children: \"Portfolio List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100%] overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-h-[70vh] w-[50rem] md:w-full md:p-3 bg-white rounded  p-4 md:px-2 overflow-y-scroll\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sticky top-0 flex bg-blue-200 rounded items-center border-b border-gray-300 px-5 py-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[75%] \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"Asset Name\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[18%] md:w-32 text-center mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[24%] text-center mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mx-auto font-bold w-16 py-1 px-2\",\n                                        children: \"Assest Type\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[24%] text-center mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mx-auto font-bold w-16 py-1 px-2\",\n                                        children: \"Assest Quantity\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[24%] text-center mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mx-auto font-bold w-16 py-1 px-2\",\n                                        children: \"Assest Description\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[24%] text-center mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mx-auto font-bold w-16 py-1 px-2\",\n                                        children: \"Option\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white  rounded-lg my-2\",\n                            children: [\n                                portfoliodata && portfoliodata.map((data1)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex rounded items-center border-b-2 border-gray-300 px-5 py-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[75%]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-semibold\",\n                                                    children: data1.Assest_Title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[18%] md:w-32 text-center mx-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-bold\",\n                                                    children: data1.price\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[18%] md:w-32 text-center mx-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-bold\",\n                                                    children: data1.AType\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[18%] md:w-32 text-center mx-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-bold\",\n                                                    children: data1.Assest_Quantity\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[18%] md:w-32 text-center mx-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-lg font-bold\",\n                                                    children: data1.Assest_Description\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-[12%] text-center mx-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-red-500 font-bold py-1 px-2\",\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, data1.id, true, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex rounded items-center border-b-2 border-gray-300 px-5 py-5\",\n                                    children: portfoliodata.price\n                                }, data.id, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\PortfolioDetails\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"xvVV73BK705mgXt8STfvm93dLTk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9ydGZvbGlvL1BvcnRmb2xpb0RldGFpbHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDaEI7QUFFYixTQUFTSTs7SUFDdEIsTUFBTUMsU0FBU0wsMERBQVNBO0lBR3hCLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1PLFlBQVk7UUFDaEIsTUFBTUMsY0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBQzFDLE1BQU1DLFlBQVksSUFBSUMsZ0JBQWdCTDtRQUN0QyxJQUFJTSxNQUFNRixVQUFVRyxHQUFHLENBQUMsUUFBUSxTQUFTO1FBRXpDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTyx3REFBdUQ7WUFDOUVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFVCxLQUFLQTtZQUFJO1FBQ2xDO1FBQ0EsTUFBTVUsV0FBVyxNQUFNUixJQUFJUyxJQUFJO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1psQixpQkFBaUJrQixTQUFTSSxLQUFLLENBQUNDLE9BQU87SUFDekM7SUFDQTVCLGdEQUFTQSxDQUFDO1FBQ1JNO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFLRCxXQUFVOzhCQUErQjs7Ozs7Ozs7Ozs7MEJBRWpELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRTt3Q0FBRUYsV0FBVTtrREFBb0I7Ozs7Ozs7Ozs7OzhDQUVuQyw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNFO3dDQUFFRixXQUFVO2tEQUFvQjs7Ozs7Ozs7Ozs7OENBRW5DLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUVGLFdBQVU7a0RBQW1DOzs7Ozs7Ozs7Ozs4Q0FFbEQsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRTt3Q0FBRUYsV0FBVTtrREFBbUM7Ozs7Ozs7Ozs7OzhDQUVsRCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNFO3dDQUFFRixXQUFVO2tEQUFtQzs7Ozs7Ozs7Ozs7OENBR2xELDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUVGLFdBQVU7a0RBQW1DOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHcEQsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FFWDFCLGlCQUFpQkEsY0FBYzZCLEdBQUcsQ0FBQyxDQUFDQztvQ0FDbEMscUJBQ0UsOERBQUNMO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNFO29EQUFFRixXQUFVOzhEQUF5QkksTUFBS0MsWUFBWTs7Ozs7Ozs7Ozs7MERBRXpELDhEQUFDTjtnREFBSUMsV0FBVTswREFDYiw0RUFBQ0U7b0RBQUVGLFdBQVU7OERBQXFCSSxNQUFLRSxLQUFLOzs7Ozs7Ozs7OzswREFFOUMsOERBQUNQO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDRTtvREFBRUYsV0FBVTs4REFBcUJJLE1BQUtHLEtBQUs7Ozs7Ozs7Ozs7OzBEQUc5Qyw4REFBQ1I7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNFO29EQUFFRixXQUFVOzhEQUFxQkksTUFBS0ksZUFBZTs7Ozs7Ozs7Ozs7MERBRXhELDhEQUFDVDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ0U7b0RBQUVGLFdBQVU7OERBQXFCSSxNQUFLSyxrQkFBa0I7Ozs7Ozs7Ozs7OzBEQUUzRCw4REFBQ1Y7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNVO29EQUFPVixXQUFVOzhEQUFtQzs7Ozs7Ozs7Ozs7O3VDQWxCNEJJLE1BQUtPLEVBQUU7Ozs7O2dDQXdCaEc7OENBRUYsOERBQUNaO29DQUFJQyxXQUFVOzhDQUNaMUIsY0FBY2dDLEtBQUs7bUNBRCtERixLQUFLTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXhHO0dBaEd3QnZDOztRQUNQSixzREFBU0E7OztLQURGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BvcnRmb2xpby9Qb3J0Zm9saW9EZXRhaWxzL3BhZ2UuanM/MTBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICBjb25zdCBbcG9ydGZvbGlvZGF0YSwgc2V0cG9ydGZvbGlvZGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBmZXRjaGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgIGxldCBwaWQgPSB1cmxQYXJhbXMuZ2V0KCdwaWQnKTsgLy8gdmFsdWUxXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9ydGZvbGlvL3BvcnRmb2xpb2RldGFpbHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBpZDogcGlkIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIHNldHBvcnRmb2xpb2RhdGEocmVzcG9uc2UuZXJyb3IuQXNzZXN0cyk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaGRhdGEoKTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gcm91bmRlZCBwLTIgbWQ6cHgtMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteS0yIG1iLTRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXCI+UG9ydGZvbGlvIExpc3Q8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEwMCVdIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs3MHZoXSB3LVs1MHJlbV0gbWQ6dy1mdWxsIG1kOnAtMyBiZy13aGl0ZSByb3VuZGVkICBwLTQgbWQ6cHgtMiBvdmVyZmxvdy15LXNjcm9sbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgZmxleCBiZy1ibHVlLTIwMCByb3VuZGVkIGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgcHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNzUlXSBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPkFzc2V0IE5hbWU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE4JV0gbWQ6dy0zMiB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5QcmljZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQlXSB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBmb250LWJvbGQgdy0xNiBweS0xIHB4LTJcIj5Bc3Nlc3QgVHlwZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQlXSB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBmb250LWJvbGQgdy0xNiBweS0xIHB4LTJcIj5Bc3Nlc3QgUXVhbnRpdHk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI0JV0gdGV4dC1jZW50ZXIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LWF1dG8gZm9udC1ib2xkIHctMTYgcHktMSBweC0yXCI+QXNzZXN0IERlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMjQlXSB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBmb250LWJvbGQgdy0xNiBweS0xIHB4LTJcIj5PcHRpb248L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlICByb3VuZGVkLWxnIG15LTJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBvcnRmb2xpb2RhdGEgJiYgcG9ydGZvbGlvZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCByb3VuZGVkIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBweC01IHB5LTVcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNzUlXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e2RhdGEuQXNzZXN0X1RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE4JV0gbWQ6dy0zMiB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntkYXRhLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE4JV0gbWQ6dy0zMiB0ZXh0LWNlbnRlciBteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntkYXRhLkFUeXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxOCVdIG1kOnctMzIgdGV4dC1jZW50ZXIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57ZGF0YS5Bc3Nlc3RfUXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTglXSBtZDp3LTMyIHRleHQtY2VudGVyIG14LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e2RhdGEuQXNzZXN0X0Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzEyJV0gdGV4dC1jZW50ZXIgbXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1ib2xkIHB5LTEgcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcm91bmRlZCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgcHgtNSBweS01XCIga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICB7cG9ydGZvbGlvZGF0YS5wcmljZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2ID5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTWFpbiIsInJvdXRlciIsInBvcnRmb2xpb2RhdGEiLCJzZXRwb3J0Zm9saW9kYXRhIiwiZmV0Y2hkYXRhIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInBpZCIsImdldCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiQXNzZXN0cyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJwIiwibWFwIiwiZGF0YSIsIkFzc2VzdF9UaXRsZSIsInByaWNlIiwiQVR5cGUiLCJBc3Nlc3RfUXVhbnRpdHkiLCJBc3Nlc3RfRGVzY3JpcHRpb24iLCJidXR0b24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Portfolio/PortfolioDetails/page.js\n"));

/***/ })

});