"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolios/page",{

/***/ "(app-pages-browser)/./src/app/portfolios/page.js":
/*!************************************!*\
  !*** ./src/app/portfolios/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import \"../../../env\"\nconst Page = ()=>{\n    _s();\n    const [term, setterm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"popular\");\n    const [portfoliodata, setportfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (localStorage.getItem(\"token\")) {\n            let token = localStorage.getItem(\"token\").toString();\n            const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n            console.log(decoded);\n            // Check for expired token\n            var dateNow = new Date() / 1000;\n            if (dateNow > decoded.exp) {\n                alert(\"Your session has been expired.\");\n                localStorage.removeItem(\"token\");\n                router.push(\"/login\");\n            } else {\n                if (decoded.role == \"user\") {\n                    allportfoliodata();\n                }\n                if (decoded.role == \"admin\") {\n                    router.push(\"/dashboard\");\n                }\n            }\n        } else {\n            router.push(\"/login\");\n        }\n    }, []);\n    const allportfoliodata = async ()=>{\n        try {\n            console.log(\"http://localhost:3000/\");\n            const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/AllPortfolio\"), {\n                method: \"POST\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const response = await res.json();\n            console.log(\"completed\");\n            setportfoliodata(response.error);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"text-gray-600 body-font min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center w-auto p-4 md:p-10 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap w-full justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center w-full my-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white font-bold text-xl\",\n                                children: \"All Portfolios\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        portfoliodata && portfoliodata.map((elem, index)=>{\n                            if (index < 6) {\n                                console.log(elem);\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white shadow-md rounded-lg max-w-sm m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/Portfolio/portfoliodetails?pid=\".concat(elem._id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"m-2 p-3 font-bold text-blue-600 text-3xl\",\n                                                    children: elem.PortfolioName\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 25\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"m-2 px-4 pb-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-black font-medium text-lg tracking-tight \",\n                                                            children: 'Explore Edward Babcock\\'s board \"Tri color combinations\" on Pinterest. See more ideas about color, color combinations, color inspiration.'\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 27\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-wrap items-center justify-center my-2 mt-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-sm font-bold m-2 px-2 py-2 rounded bg-orange-700 text-white\",\n                                                                children: [\n                                                                    \"Previous:\",\n                                                                    elem.PortfolioPrice && elem.PortfolioPrice[0].Price\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                                lineNumber: 110,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-sm font-bold m-2 px-2 py-2 rounded bg-green-700 text-white\",\n                                                                children: [\n                                                                    \"Current:\",\n                                                                    elem.PortfolioPrice && elem.PortfolioPrice[0].Price\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                                lineNumber: 113,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-sm font-bold m-2 px-2 py-2 rounded bg-pink-700 text-white\",\n                                                                children: [\n                                                                    \"Remaining:\",\n                                                                    Math.round(elem.RemainingPrice)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                                lineNumber: 116,\n                                                                columnNumber: 29\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 27\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        o: ()=>{\n                                                            Cookies.set(\"price\", \"\".concat(elem.Price));\n                                                        },\n                                                        href: \"/Portfolio/assests/buyassest?pid=\" + elem._id,\n                                                        className: \"flex items-center justify-center my-2 mt-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                                            children: \"Buy\"\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                            lineNumber: 122,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                        lineNumber: 120,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, undefined);\n                            }\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\portfolios\\\\page.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"NSExzS20DXeotiT8o2sfDrm7hSs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvcy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3NCO0FBQ1A7QUFDTDtBQUN2Qyx3QkFBd0I7QUFFeEIsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNUyxTQUFTUCwwREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsYUFBYUMsT0FBTyxDQUFDLFVBQVU7WUFDakMsSUFBSUMsUUFBUUYsYUFBYUMsT0FBTyxDQUFDLFNBQVNFLFFBQVE7WUFDbEQsTUFBTUMsVUFBVVgscURBQVNBLENBQUNTO1lBQzFCRyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osMEJBQTBCO1lBQzFCLElBQUlHLFVBQVUsSUFBSUMsU0FBUztZQUMzQixJQUFJRCxVQUFVSCxRQUFRSyxHQUFHLEVBQUU7Z0JBQ3pCQyxNQUFNO2dCQUNOVixhQUFhVyxVQUFVLENBQUM7Z0JBQ3hCWixPQUFPYSxJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMLElBQUlSLFFBQVFTLElBQUksSUFBSSxRQUFRO29CQUMxQkM7Z0JBQ0Y7Z0JBQ0EsSUFBSVYsUUFBUVMsSUFBSSxJQUFJLFNBQVM7b0JBQzNCZCxPQUFPYSxJQUFJLENBQUM7Z0JBQ2Q7WUFDRjtRQUNGLE9BQU87WUFDTGIsT0FBT2EsSUFBSSxDQUFDO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRSxtQkFBbUI7UUFDdkIsSUFBSTtZQUVGVCxRQUFRQyxHQUFHLENBQUNTLHdCQUE0QjtZQUN4QyxNQUFNRyxNQUFNLE1BQU1DLE1BQ2hCLEdBQWdDLE9BQTdCSix3QkFBNEIsRUFBQywrQkFDaEM7Z0JBQ0VLLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLFFBQVE7b0JBQ1IsZ0JBQWdCO2dCQUNsQjtZQUVGO1lBRUYsTUFBTUMsV0FBVyxNQUFNTCxJQUFJTSxJQUFJO1lBQy9CbkIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pSLGlCQUFpQnlCLFNBQVNFLEtBQUs7UUFDakMsRUFDQSxPQUFPQSxPQUFPO1lBQ1pwQixRQUFRQyxHQUFHLENBQUNtQjtRQUNkO0lBQ0Y7SUFJQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQVFDLFdBQVU7c0JBQ2pCLDRFQUFDRjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDRjs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUtELFdBQVU7MENBQStCOzs7Ozs7Ozs7Ozt3QkFJaEQvQixpQkFDQ0EsY0FBY2lDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzs0QkFDdkIsSUFBSUEsUUFBUSxHQUFHO2dDQUNiM0IsUUFBUUMsR0FBRyxDQUFDeUI7Z0NBQ1oscUJBQ0UsOERBQUNMOzhDQVlDLDRFQUFDQTt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUN4QyxrREFBSUE7Z0RBRUg2QyxNQUFNLG1DQUE0QyxPQUFURixLQUFLRyxHQUFHOzBEQUVqRCw0RUFBQ0M7b0RBQUdQLFdBQVU7OERBQ1hHLEtBQUtLLGFBQWE7Ozs7OzsrQ0FKaEJKOzs7OzswREFPUCw4REFBQ047Z0RBQUlFLFdBQVU7O2tFQUNiLDhEQUFDUztrRUFDQyw0RUFBQ1I7NERBQUtELFdBQVU7c0VBQzZDOzs7Ozs7Ozs7OztrRUFPL0QsOERBQUNGO3dEQUFJRSxXQUFVOzswRUFDYiw4REFBQ0M7Z0VBQUtELFdBQVU7O29FQUFtRTtvRUFDdkVHLEtBQUtPLGNBQWMsSUFBSVAsS0FBS08sY0FBYyxDQUFDLEVBQUUsQ0FBQ0MsS0FBSzs7Ozs7OzswRUFFL0QsOERBQUNWO2dFQUFLRCxXQUFVOztvRUFBa0U7b0VBQ3ZFRyxLQUFLTyxjQUFjLElBQUlQLEtBQUtPLGNBQWMsQ0FBQyxFQUFFLENBQUNDLEtBQUs7Ozs7Ozs7MEVBRTlELDhEQUFDVjtnRUFBS0QsV0FBVTs7b0VBQWlFO29FQUNwRVksS0FBS0MsS0FBSyxDQUFDVixLQUFLVyxjQUFjOzs7Ozs7Ozs7Ozs7O2tFQUc3Qyw4REFBQ3RELGtEQUFJQTt3REFBQ3VELEdBQUc7NERBQVFDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTLEdBQWMsT0FBWGQsS0FBS1EsS0FBSzt3REFBSTt3REFBR04sTUFBTSxzQ0FBc0NGLEtBQUtHLEdBQUc7d0RBQUVOLFdBQVU7a0VBRXhILDRFQUFDQzs0REFBS0QsV0FBVTtzRUFBb0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUWhLO3dCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWQ7R0FqSU1sQzs7UUFHV0Ysc0RBQVNBOzs7S0FIcEJFO0FBbUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9ydGZvbGlvcy9wYWdlLmpzPzQ0MjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSBcImp3dC1kZWNvZGVcIjtcbi8vIGltcG9ydCBcIi4uLy4uLy4uL2VudlwiXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZXJtLCBzZXR0ZXJtXSA9IHVzZVN0YXRlKFwicG9wdWxhclwiKTtcbiAgY29uc3QgW3BvcnRmb2xpb2RhdGEsIHNldHBvcnRmb2xpb2RhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XG4gICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKGRlY29kZWQpO1xuICAgICAgLy8gQ2hlY2sgZm9yIGV4cGlyZWQgdG9rZW5cbiAgICAgIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKSAvIDEwMDA7XG4gICAgICBpZiAoZGF0ZU5vdyA+IGRlY29kZWQuZXhwKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBzZXNzaW9uIGhhcyBiZWVuIGV4cGlyZWQuXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkZWNvZGVkLnJvbGUgPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICBhbGxwb3J0Zm9saW9kYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlY29kZWQucm9sZSA9PSBcImFkbWluXCIpIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFsbHBvcnRmb2xpb2RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVClcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWFwaS9wb3J0Zm9saW8vQWxsUG9ydGZvbGlvYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpO1xuICAgICAgc2V0cG9ydGZvbGlvZGF0YShyZXNwb25zZS5lcnJvcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1hdXRvIHAtNCBtZDpwLTEwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgbXktMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgQWxsIFBvcnRmb2xpb3NcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cG9ydGZvbGlvZGF0YSAmJlxuICAgICAgICAgICAgICBwb3J0Zm9saW9kYXRhLm1hcCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCA2KSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIsIGNvbG9yOiBcIndoaXRlXCIsIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvUG9ydGZvbGlvL3BvcnRmb2xpb2RldGFpbHM/cGlkPSR7ZWxlbS5faWR9YH0+e2VsZW0uUG9ydGZvbGlvTmFtZX08L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIG9uQ2xpY2s9eygpID0+IHsgQ29va2llcy5zZXQoXCJwcmljZVwiLCBgJHtlbGVtLlByaWNlfWApIH19IHN0eWxlPXt7IHdpZHRoOiBcIjEwdmhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fSBrZXk9e2luZGV4fSBocmVmPXtgL1BvcnRmb2xpby9Bc3Nlc3RzL0J1eUFzc2VzdD9waWQ9JHtlbGVtLl9pZH1gfT48ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIG1heC13LXNtIG0tMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJ1eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBtYXgtdy1zbSBtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvUG9ydGZvbGlvL3BvcnRmb2xpb2RldGFpbHM/cGlkPSR7ZWxlbS5faWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMiBwLTMgZm9udC1ib2xkIHRleHQtYmx1ZS02MDAgdGV4dC0zeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbS5Qb3J0Zm9saW9OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIgcHgtNCBwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC1sZyB0cmFja2luZy10aWdodCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7KGVsZW0gPyBlbGVtLm92ZXJ2aWV3IDogXCJcIikuc2xpY2UoMCwgMTAwKSArIFwiLi4uXCJ9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwbG9yZSBFZHdhcmQgQmFiY29jaydzIGJvYXJkIFwiVHJpIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5hdGlvbnNcIiBvbiBQaW50ZXJlc3QuIFNlZSBtb3JlIGlkZWFzIGFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciwgY29sb3IgY29tYmluYXRpb25zLCBjb2xvciBpbnNwaXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS0yIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBtLTIgcHgtMiBweS0yIHJvdW5kZWQgYmctb3JhbmdlLTcwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW91czp7ZWxlbS5Qb3J0Zm9saW9QcmljZSAmJiBlbGVtLlBvcnRmb2xpb1ByaWNlWzBdLlByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBtLTIgcHgtMiBweS0yIHJvdW5kZWQgYmctZ3JlZW4tNzAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQ6e2VsZW0uUG9ydGZvbGlvUHJpY2UgJiYgZWxlbS5Qb3J0Zm9saW9QcmljZVswXS5QcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbS0yIHB4LTIgcHktMiByb3VuZGVkIGJnLXBpbmstNzAwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbWFpbmluZzp7TWF0aC5yb3VuZChlbGVtLlJlbWFpbmluZ1ByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBvPXsoKSA9PiB7IENvb2tpZXMuc2V0KFwicHJpY2VcIiwgYCR7ZWxlbS5QcmljZX1gKSB9fSBocmVmPXtcIi9Qb3J0Zm9saW8vYXNzZXN0cy9idXlhc3Nlc3Q/cGlkPVwiICsgZWxlbS5faWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTIgbXQtNFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJyZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiand0RGVjb2RlIiwiUGFnZSIsInRlcm0iLCJzZXR0ZXJtIiwicG9ydGZvbGlvZGF0YSIsInNldHBvcnRmb2xpb2RhdGEiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJ0b1N0cmluZyIsImRlY29kZWQiLCJjb25zb2xlIiwibG9nIiwiZGF0ZU5vdyIsIkRhdGUiLCJleHAiLCJhbGVydCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwicm9sZSIsImFsbHBvcnRmb2xpb2RhdGEiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSE9TVCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNwYW4iLCJtYXAiLCJlbGVtIiwiaW5kZXgiLCJocmVmIiwiX2lkIiwiaDIiLCJQb3J0Zm9saW9OYW1lIiwicCIsIlBvcnRmb2xpb1ByaWNlIiwiUHJpY2UiLCJNYXRoIiwicm91bmQiLCJSZW1haW5pbmdQcmljZSIsIm8iLCJDb29raWVzIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolios/page.js\n"));

/***/ })

});