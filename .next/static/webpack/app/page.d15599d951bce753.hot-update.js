"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Home.js":
/*!************************************!*\
  !*** ./src/app/components/Home.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ \"(app-pages-browser)/./src/app/components/Slider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [portfoliodata, setportfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        allportfoliodata();\n    }, []);\n    const allportfoliodata = async ()=>{\n        // alert(\"calling \")\n        const res = await fetch(\"http://localhost:3000//api/portfolio/AllPortfolio\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: \"\"\n        });\n        const response = await res.json();\n        console.log(\"completed\");\n        setportfoliodata(response.error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center w-auto p-4 md:p-10 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto w-full md:w-[60vw] h-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap w-full justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center w-full my-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white font-bold text-xl\",\n                            children: \"Latest\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    portfoliodata && portfoliodata.map((elem, index)=>{\n                        console.log(elem);\n                        if (index < 6) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card\",\n                                    style: {\n                                        width: \"18rem\",\n                                        color: \"white\",\n                                        border: \"1px solid red\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-body\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    className: \"card-title\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                        href: \"/Portfolio/PortfolioDetails?pid=\".concat(elem._id),\n                                                        children: elem.PortfolioName\n                                                    }, index, false, {\n                                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 38\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    onClick: ()=>{\n                                                        (0,js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"hello\");\n                                                    },\n                                                    style: {\n                                                        width: \"10vh\",\n                                                        color: \"black\"\n                                                    },\n                                                    href: \"/Portfolio/Assests/BuyAssest?pid=\".concat(elem._id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-white shadow-md rounded-lg max-w-sm m-2\",\n                                                        children: \"buy\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 162\n                                                    }, undefined)\n                                                }, index, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 10\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-group list-group-flush\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: \"An item\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: \"A second item\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"list-group-item\",\n                                                    children: \"A third item\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 10\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card-body\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"card-link\",\n                                                    children: \"Card link\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"card-link\",\n                                                    children: \"Another link\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 40,\n                                columnNumber: 8\n                            }, undefined);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\components\\\\Home.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"WomGbu9buXAlqRnxddZoK3958P4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDa0Q7QUFDcEI7QUFDRDtBQUNHO0FBR2hDLE1BQU1NLE9BQU87O0lBQ1osTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyREMsZ0RBQVNBLENBQUM7UUFDVE87SUFDRCxHQUFHLEVBQUU7SUFDTCxNQUFNQSxtQkFBbUI7UUFDeEIsb0JBQW9CO1FBQ3BCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTyxxREFBb0Q7WUFDNUVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUkMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDakI7WUFDQUMsTUFBTTtRQUNQO1FBQ0EsTUFBTUMsV0FBVyxNQUFNTixJQUFJTyxJQUFJO1FBQy9CQyxRQUFRQyxHQUFHLENBQUM7UUFDWlgsaUJBQWlCUSxTQUFTSSxLQUFLO0lBQ2hDO0lBQ0EscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ25CLCtDQUFNQTs7Ozs7Ozs7OzswQkFFUiw4REFBQ2tCO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2QsNEVBQUNDOzRCQUFLRCxXQUFVO3NDQUErQjs7Ozs7Ozs7Ozs7b0JBRS9DZixpQkFBaUJBLGNBQWNpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7d0JBQzFDUixRQUFRQyxHQUFHLENBQUNNO3dCQUNaLElBQUlDLFFBQVEsR0FBRzs0QkFDZCxxQkFDQyw4REFBQ0w7MENBQ0EsNEVBQUNBO29DQUFJQyxXQUFVO29DQUFPSyxPQUFPO3dDQUFFQyxPQUFPO3dDQUFTQyxPQUFPO3dDQUFTQyxRQUFRO29DQUFnQjs7c0RBQ3RGLDhEQUFDVDs0Q0FBSUMsV0FBVTs7OERBQ2QsOERBQUNTO29EQUFHVCxXQUFVOzhEQUFhLDRFQUFDbEIsa0RBQUlBO3dEQUFhNEIsTUFBTSxtQ0FBNEMsT0FBVFAsS0FBS1EsR0FBRztrRUFBS1IsS0FBS1MsYUFBYTt1REFBL0VSOzs7Ozs7Ozs7OzhEQUV0Qyw4REFBQ3RCLGtEQUFJQTtvREFBQytCLFNBQVM7d0RBQVE5QixxREFBT0EsQ0FBQztvREFBUztvREFBR3NCLE9BQU87d0RBQUVDLE9BQU87d0RBQVFDLE9BQU87b0RBQVE7b0RBQWVHLE1BQU0sb0NBQTZDLE9BQVRQLEtBQUtRLEdBQUc7OERBQUksNEVBQUNaO3dEQUFJQyxXQUFVO2tFQUE2Qzs7Ozs7O21EQUF6SEk7Ozs7Ozs7Ozs7O3NEQUszRiw4REFBQ1U7NENBQUdkLFdBQVU7OzhEQUNiLDhEQUFDZTtvREFBR2YsV0FBVTs4REFBa0I7Ozs7Ozs4REFDaEMsOERBQUNlO29EQUFHZixXQUFVOzhEQUFrQjs7Ozs7OzhEQUNoQyw4REFBQ2U7b0RBQUdmLFdBQVU7OERBQWtCOzs7Ozs7Ozs7Ozs7c0RBRWpDLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2QsOERBQUNnQjtvREFBRU4sTUFBSztvREFBSVYsV0FBVTs4REFBWTs7Ozs7OzhEQUNsQyw4REFBQ2dCO29EQUFFTixNQUFLO29EQUFJVixXQUFVOzhEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNdkM7b0JBQ0Q7Ozs7Ozs7Ozs7Ozs7QUFPSjtHQS9ETWhCO0tBQUFBO0FBaUVOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib21lLmpzP2E2ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3BvcnRmb2xpb2RhdGEsIHNldHBvcnRmb2xpb2RhdGFdID0gdXNlU3RhdGUoW10pXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFsbHBvcnRmb2xpb2RhdGEoKVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IGFsbHBvcnRmb2xpb2RhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHQvLyBhbGVydChcImNhbGxpbmcgXCIpXHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwLy9hcGkvcG9ydGZvbGlvL0FsbFBvcnRmb2xpb2AsIHtcclxuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHk6IFwiXCIsXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpXHJcblx0XHRzZXRwb3J0Zm9saW9kYXRhKHJlc3BvbnNlLmVycm9yKTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWF1dG8gcC00IG1kOnAtMTAgb3ZlcmZsb3ctaGlkZGVuJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J214LWF1dG8gdy1mdWxsIG1kOnctWzYwdnddIGgtYXV0byc+XHJcblx0XHRcdFx0PFNsaWRlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIG15LTJcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14bCc+TGF0ZXN0PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtwb3J0Zm9saW9kYXRhICYmIHBvcnRmb2xpb2RhdGEubWFwKChlbGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZWxlbSlcclxuXHRcdFx0XHRcdGlmIChpbmRleCA8IDYpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMThyZW1cIiwgY29sb3I6IFwid2hpdGVcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxMaW5rIGtleT17aW5kZXh9IGhyZWY9e2AvUG9ydGZvbGlvL1BvcnRmb2xpb0RldGFpbHM/cGlkPSR7ZWxlbS5faWR9YH0+e2VsZW0uUG9ydGZvbGlvTmFtZX08L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBvbkNsaWNrPXsoKSA9PiB7IENvb2tpZXMoXCJoZWxsb1wiKSB9fSBzdHlsZT17eyB3aWR0aDogXCIxMHZoXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0ga2V5PXtpbmRleH0gaHJlZj17YC9Qb3J0Zm9saW8vQXNzZXN0cy9CdXlBc3Nlc3Q/cGlkPSR7ZWxlbS5faWR9YH0+PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBtYXgtdy1zbSBtLTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJ1eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+QW4gaXRlbTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkEgc2Vjb25kIGl0ZW08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BIHRoaXJkIGl0ZW08L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+Q2FyZCBsaW5rPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+QW5vdGhlciBsaW5rPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2RpdiA+XHJcblxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwibmFtZXMiOlsicmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNsaWRlciIsIkxpbmsiLCJDb29raWVzIiwiSG9tZSIsInBvcnRmb2xpb2RhdGEiLCJzZXRwb3J0Zm9saW9kYXRhIiwiYWxscG9ydGZvbGlvZGF0YSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibWFwIiwiZWxlbSIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyIiwiaDUiLCJocmVmIiwiX2lkIiwiUG9ydGZvbGlvTmFtZSIsIm9uQ2xpY2siLCJ1bCIsImxpIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Home.js\n"));

/***/ })

});