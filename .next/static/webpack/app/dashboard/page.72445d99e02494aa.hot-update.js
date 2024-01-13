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

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Graph; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Graph() {\n    _s();\n    const [showlist, setshowlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [priceData, setpriceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [dateData, setdateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        async function fetchdata() {\n            const queryString = window.location.search;\n            const urlParams = new URLSearchParams(queryString);\n            let pid = urlParams.get(\"pid\"); // value1\n            const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/graphdata\"), {\n                method: \"POST\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    pid: pid\n                })\n            });\n            const response = await res.json();\n            // console.log(response);\n            let arr = [];\n            let date = [];\n            for(let i = 0; i < response.currentYear.length; i++){\n                arr.push(response.currentYear[i].price);\n                date.push(response.currentYear[i].date);\n                setdateData(priceData.push(response.currentYear[i].date));\n            }\n            console.log(arr);\n            // console.log(priceData)\n            var config = {\n                type: \"line\",\n                data: {\n                    labels: dateData,\n                    datasets: [\n                        {\n                            label: new Date().getFullYear(),\n                            backgroundColor: \"#3182ce\",\n                            borderColor: \"#3182ce\",\n                            data: arr,\n                            fill: false\n                        },\n                        {\n                            label: new Date().getFullYear() - 1,\n                            fill: false,\n                            backgroundColor: \"#ed64a6\",\n                            borderColor: \"#ed64a6\",\n                            data: [\n                                40,\n                                68,\n                                86,\n                                74,\n                                56\n                            ]\n                        }\n                    ]\n                },\n                options: {\n                    maintainAspectRatio: false,\n                    responsive: true,\n                    title: {\n                        display: false,\n                        text: \"Sales Charts\",\n                        fontColor: \"white\"\n                    },\n                    legend: {\n                        labels: {\n                            fontColor: \"white\"\n                        },\n                        align: \"end\",\n                        position: \"bottom\"\n                    },\n                    tooltips: {\n                        mode: \"index\",\n                        intersect: false\n                    },\n                    hover: {\n                        mode: \"nearest\",\n                        intersect: true\n                    },\n                    scales: {\n                        xAxes: [\n                            {\n                                ticks: {\n                                    fontColor: \"rgba(255,255,255,.7)\"\n                                },\n                                display: true,\n                                scaleLabel: {\n                                    display: false,\n                                    labelString: \"Month\",\n                                    fontColor: \"white\"\n                                },\n                                gridLines: {\n                                    display: false,\n                                    borderDash: [\n                                        2\n                                    ],\n                                    borderDashOffset: [\n                                        2\n                                    ],\n                                    color: \"rgba(33, 37, 41, 0.3)\",\n                                    zeroLineColor: \"rgba(0, 0, 0, 0)\",\n                                    zeroLineBorderDash: [\n                                        2\n                                    ],\n                                    zeroLineBorderDashOffset: [\n                                        2\n                                    ]\n                                }\n                            }\n                        ],\n                        yAxes: [\n                            {\n                                ticks: {\n                                    fontColor: \"rgba(255,255,255,.7)\"\n                                },\n                                display: true,\n                                scaleLabel: {\n                                    display: false,\n                                    labelString: \"Value\",\n                                    fontColor: \"white\"\n                                },\n                                gridLines: {\n                                    borderDash: [\n                                        3\n                                    ],\n                                    borderDashOffset: [\n                                        3\n                                    ],\n                                    drawBorder: false,\n                                    color: \"rgba(255, 255, 255, 0.15)\",\n                                    zeroLineColor: \"rgba(33, 37, 41, 0)\",\n                                    zeroLineBorderDash: [\n                                        2\n                                    ],\n                                    zeroLineBorderDashOffset: [\n                                        2\n                                    ]\n                                }\n                            }\n                        ]\n                    }\n                }\n            };\n            var ctx = document.getElementById(\"line-chart\").getContext(\"2d\");\n            window.myLine = new (chart_js__WEBPACK_IMPORTED_MODULE_2___default())(ctx, config);\n            if (localStorage.getItem(\"token\")) {\n                let token = localStorage.getItem(\"token\").toString();\n                const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n                console.log(decoded);\n                // Check for expired token\n                var dateNow = new Date() / 1000;\n                if (dateNow > decoded.exp) {\n                    alert(\"Your session has been expired.\");\n                    localStorage.removeItem(\"token\");\n                    router.push(\"/login\");\n                } else {\n                    if (decoded.role == \"admin\") {\n                    // fetchdata();\n                    }\n                    if (decoded.role == \"user\") {\n                        router.push(\"/\");\n                    }\n                }\n            }\n        }\n        fetchdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col break-words w-screen md:w-[70vw] mx-auto mb-4 border-1 shadow-lg rounded bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-t mb-0 px-4 py-3 bg-transparent\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full max-w-full flex-grow flex-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    className: \"uppercase text-white mb-1 text-xs font-semibold\",\n                                    children: \"Overview\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-white text-xl font-semibold\",\n                                    children: \"Asset value\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 174,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 170,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 169,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 168,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 flex flex-col items-center w-[100%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-[60vh] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                id: \"line-chart\",\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 180,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/dashboard/portfolios\",\n                            className: \"w-fit text-purple-800 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm mx-2 px-2 py-2.5 text-center \",\n                            children: \"View Portfolios\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 182,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap align-items-center m-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-semibold text-lg mx-1 px-2 py-2.5 text-center \",\n                                    children: \"Total Assets : 200\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 184,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-semibold text-lg mx-1 px-2 py-2.5 text-center \",\n                                    children: \"Sold : 100\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 185,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-semibold text-lg mx-1 px-2 py-2.5 text-center \",\n                                    children: \"Available : 100\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 186,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 183,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                    lineNumber: 178,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\page.js\",\n            lineNumber: 167,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Graph, \"qTBW5QzgloxnTVxGgcqcX1/s8HU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Graph;\nvar _c;\n$RefreshReg$(_c, \"Graph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNYO0FBQ0E7QUFDVTtBQUNLO0FBSzdCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTVEsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxzREFBZSxDQUFDO1FBQ2QsZUFBZWU7WUFFYixNQUFNQyxjQUFjQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07WUFDMUMsTUFBTUMsWUFBWSxJQUFJQyxnQkFBZ0JMO1lBQ3RDLElBQUlNLE1BQU1GLFVBQVVHLEdBQUcsQ0FBQyxRQUFRLFNBQVM7WUFFekMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUFnQyxPQUE3QkMsd0JBQTRCLEVBQUMsNEJBQ2hDO2dCQUNFRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQQyxRQUFRO29CQUNSLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVosS0FBS0E7Z0JBQUk7WUFDbEM7WUFFRixNQUFNYSxXQUFXLE1BQU1YLElBQUlZLElBQUk7WUFDL0IseUJBQXlCO1lBQ3pCLElBQUlDLE1BQU0sRUFBRTtZQUNaLElBQUlDLE9BQU8sRUFBRTtZQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixTQUFTSyxXQUFXLENBQUNDLE1BQU0sRUFBRUYsSUFBSztnQkFDcERGLElBQUlLLElBQUksQ0FBQ1AsU0FBU0ssV0FBVyxDQUFDRCxFQUFFLENBQUNJLEtBQUs7Z0JBQ3RDTCxLQUFLSSxJQUFJLENBQUNQLFNBQVNLLFdBQVcsQ0FBQ0QsRUFBRSxDQUFDRCxJQUFJO2dCQUN0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RixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ3FGO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUdELFdBQVU7OENBQWtEOzs7Ozs7OENBR2hFLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXZELDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBT0MsSUFBRztnQ0FBYUosV0FBVTs7Ozs7Ozs7Ozs7c0NBRXBDLDhEQUFDbEcsa0RBQUlBOzRCQUFDdUcsTUFBTTs0QkFBeUJMLFdBQVU7c0NBQXVLOzs7Ozs7c0NBQ3ROLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNNO29DQUFLTixXQUFVOzhDQUFpRTs7Ozs7OzhDQUNqRiw4REFBQ007b0NBQUtOLFdBQVU7OENBQWlFOzs7Ozs7OENBQ2pGLDhEQUFDTTtvQ0FBS04sV0FBVTs4Q0FBaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Y7R0FyTHdCL0Y7O1FBRVBELHNEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanM/ZDJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmFwaCgpIHtcclxuICBjb25zdCBbc2hvd2xpc3QsIHNldHNob3dsaXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtwcmljZURhdGEsIHNldHByaWNlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGVEYXRhLCBzZXRkYXRlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaGRhdGEoKSB7XHJcblxyXG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgICBsZXQgcGlkID0gdXJsUGFyYW1zLmdldChcInBpZFwiKTsgLy8gdmFsdWUxXHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWFwaS9wb3J0Zm9saW8vZ3JhcGhkYXRhYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBpZDogcGlkIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgIGxldCBkYXRlID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5jdXJyZW50WWVhci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGFyci5wdXNoKHJlc3BvbnNlLmN1cnJlbnRZZWFyW2ldLnByaWNlKTtcclxuICAgICAgICBkYXRlLnB1c2gocmVzcG9uc2UuY3VycmVudFllYXJbaV0uZGF0ZSlcclxuICAgICAgICBzZXRkYXRlRGF0YShwcmljZURhdGEucHVzaChyZXNwb25zZS5jdXJyZW50WWVhcltpXS5kYXRlKSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocHJpY2VEYXRhKVxyXG4gICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxhYmVsczogZGF0ZURhdGEsXHJcbiAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMxODJjZVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMzMTgyY2VcIixcclxuICAgICAgICAgICAgICBkYXRhOiBhcnIsXHJcbiAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMSxcclxuICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VkNjRhNlwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZDY0YTZcIixcclxuICAgICAgICAgICAgICBkYXRhOiBbNDAsIDY4LCA4NiwgNzQsIDU2XSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgdGV4dDogXCJTYWxlcyBDaGFydHNcIixcclxuICAgICAgICAgICAgZm9udENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGlnbjogXCJlbmRcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgIG1vZGU6IFwiaW5kZXhcIixcclxuICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICBtb2RlOiBcIm5lYXJlc3RcIixcclxuICAgICAgICAgICAgaW50ZXJzZWN0OiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB4QXhlczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC43KVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogXCJNb250aFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsyXSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzJdLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMylcIixcclxuICAgICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXHJcbiAgICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaDogWzJdLFxyXG4gICAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwuNylcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiVmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFszXSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzNdLFxyXG4gICAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiLFxyXG4gICAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMClcIixcclxuICAgICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoOiBbMl0sXHJcbiAgICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lLWNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgd2luZG93Lm15TGluZSA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcblxyXG5cclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dERlY29kZSh0b2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGVjb2RlZCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGV4cGlyZWQgdG9rZW5cclxuICAgICAgICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCkgLyAxMDAwO1xyXG4gICAgICAgIGlmIChkYXRlTm93ID4gZGVjb2RlZC5leHApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91ciBzZXNzaW9uIGhhcyBiZWVuIGV4cGlyZWQuXCIpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGVjb2RlZC5yb2xlID09IFwiYWRtaW5cIikge1xyXG4gICAgICAgICAgICAvLyBmZXRjaGRhdGEoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChkZWNvZGVkLnJvbGUgPT0gXCJ1c2VyXCIpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoZGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJyZWFrLXdvcmRzIHctc2NyZWVuIG1kOnctWzcwdnddIG14LWF1dG8gbWItNCBib3JkZXItMSBzaGFkb3ctbGcgcm91bmRlZCBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNCBweS0zIGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy1mdWxsIGZsZXgtZ3JvdyBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5Bc3NldCB2YWx1ZTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1bMTAwJV1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzYwdmhdIFwiPlxyXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZS1jaGFydFwiIGNsYXNzTmFtZT1cIlwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnL2Rhc2hib2FyZC9wb3J0Zm9saW9zJ30gY2xhc3NOYW1lPVwidy1maXQgdGV4dC1wdXJwbGUtODAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gbXgtMiBweC0yIHB5LTIuNSB0ZXh0LWNlbnRlciBcIj5WaWV3IFBvcnRmb2xpb3M8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBtLTJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgbXgtMSBweC0yIHB5LTIuNSB0ZXh0LWNlbnRlciBcIj5Ub3RhbCBBc3NldHMgOiAyMDA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG14LTEgcHgtMiBweS0yLjUgdGV4dC1jZW50ZXIgXCI+U29sZCA6IDEwMDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgbXgtMSBweC0yIHB5LTIuNSB0ZXh0LWNlbnRlciBcIj5BdmFpbGFibGUgOiAxMDA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGFydCIsIkxpbmsiLCJqd3REZWNvZGUiLCJ1c2VSb3V0ZXIiLCJHcmFwaCIsInNob3dsaXN0Iiwic2V0c2hvd2xpc3QiLCJyb3V0ZXIiLCJwcmljZURhdGEiLCJzZXRwcmljZURhdGEiLCJkYXRlRGF0YSIsInNldGRhdGVEYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2hkYXRhIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInBpZCIsImdldCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJhcnIiLCJkYXRlIiwiaSIsImN1cnJlbnRZZWFyIiwibGVuZ3RoIiwicHVzaCIsInByaWNlIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZmlsbCIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250Q29sb3IiLCJsZWdlbmQiLCJhbGlnbiIsInBvc2l0aW9uIiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJzY2FsZXMiLCJ4QXhlcyIsInRpY2tzIiwic2NhbGVMYWJlbCIsImxhYmVsU3RyaW5nIiwiZ3JpZExpbmVzIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJjb2xvciIsInplcm9MaW5lQ29sb3IiLCJ6ZXJvTGluZUJvcmRlckRhc2giLCJ6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQiLCJ5QXhlcyIsImRyYXdCb3JkZXIiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm15TGluZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsInRvU3RyaW5nIiwiZGVjb2RlZCIsImRhdGVOb3ciLCJleHAiLCJhbGVydCIsInJlbW92ZUl0ZW0iLCJyb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDYiLCJoMiIsImNhbnZhcyIsImlkIiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});