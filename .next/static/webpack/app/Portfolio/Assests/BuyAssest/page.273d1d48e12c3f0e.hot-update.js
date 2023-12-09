"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Portfolio/Assests/BuyAssest/page",{

/***/ "(app-pages-browser)/./src/app/Portfolio/Assests/BuyAssest/page.js":
/*!*****************************************************!*\
  !*** ./src/app/Portfolio/Assests/BuyAssest/page.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        useremail: \"\",\n        BuyAmount: \"\",\n        pid: \"\",\n        Transactionid: \"786387\",\n        Transactionamount: 100\n    });\n    const onchange = (e)=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let portfolioid = urlParams.get(\"pid\"); // value1\n        let APFOS_useremail = localStorage.getItem(\"APFOS_useremail\");\n        let val = e.target.value;\n        setdata({\n            ...data,\n            useremail: APFOS_useremail,\n            BuyAmount: val,\n            pid: portfolioid\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await fetch(\"http://localhost:3000/api/portfolio/Assest/BuyAssest\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        if (response.status === 200) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Wallet Address Add Successfully\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/login\");\n        } else if (response.status === 201) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Invalid Format\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Empty Field\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        setdata({\n            useremail: \"\",\n            walletaddress: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 -2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Art\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: \"Transaction Page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                            children: \"Enter Amount\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: (e)=>onchange(e),\n                                            type: \"text\",\n                                            name: \"BuyAmount\",\n                                            id: \"BuyAmount\",\n                                            className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                            placeholder: \"min:10rs\",\n                                            required: \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"submit\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"CcXnrKORYR90J7w1AdH1npdJxG4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9ydGZvbGlvL0Fzc2VzdHMvQnV5QXNzZXN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1A7QUFDZjtBQUNVO0FBQ1E7QUFFL0MsTUFBTU0sT0FBTzs7SUFFVCxNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO1FBQzdCUyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxlQUFlO1FBQ2ZDLG1CQUFtQjtJQUV2QjtJQUNBLE1BQU1DLFdBQVcsQ0FBQ0M7UUFDZCxNQUFNQyxjQUFjQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDMUMsTUFBTUMsWUFBWSxJQUFJQyxnQkFBZ0JMO1FBQ3RDLElBQUlNLGNBQWNGLFVBQVVHLEdBQUcsQ0FBQyxRQUFRLFNBQVM7UUFFakQsSUFBSUMsa0JBQWtCQyxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSUMsTUFBTVosRUFBRWEsTUFBTSxDQUFDQyxLQUFLO1FBQ3hCckIsUUFBUTtZQUNKLEdBQUdELElBQUk7WUFDUEUsV0FBV2U7WUFDWGQsV0FBV2lCO1lBQ1hoQixLQUFLVztRQUNUO0lBQ0o7SUFFQSxNQUFNUSxlQUFlLE9BQU9mO1FBQ3hCQSxFQUFFZ0IsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sd0RBQXVEO1lBQzVFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0xDLFFBQVE7Z0JBQ1IsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2hDO1FBQ3pCO1FBQ0EsTUFBTWlDLFdBQVcsTUFBTVIsSUFBSVMsSUFBSTtRQUMvQixJQUFJRCxTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN6QnRDLGlEQUFLQSxDQUFDdUMsT0FBTyxDQUFDLG1DQUFtQztnQkFDN0NDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1g7WUFDQTlDLE9BQU8rQyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJYixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUNoQ3RDLGlEQUFLQSxDQUFDa0QsS0FBSyxDQUFDLGtCQUFrQjtnQkFDMUJWLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1g7UUFDSixPQUFPO1lBQ0hoRCxpREFBS0EsQ0FBQ2tELEtBQUssQ0FBQyxlQUFlO2dCQUN2QlYsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsY0FBYztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsVUFBVUM7Z0JBQ1ZDLE9BQU87WUFDWDtRQUNKO1FBQ0E1QyxRQUFRO1lBQ0pDLFdBQVc7WUFDWDhDLGVBQWU7UUFDbkI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFFRCxXQUFVOztzQ0FDVCw4REFBQ0U7NEJBQUtGLFdBQVU7c0NBQWlDOzs7Ozs7d0JBQWU7d0JBQUs7Ozs7Ozs7Ozs7OzswQkFHN0UsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUE0RTs7Ozs7O3NDQUkxRiw4REFBQ0k7NEJBQUtKLFdBQVU7NEJBQXlCdkIsUUFBTzs7OENBQzVDLDhEQUFDc0I7O3NEQUNHLDhEQUFDTTs0Q0FDR0MsU0FBUTs0Q0FDUk4sV0FBVTtzREFDYjs7Ozs7O3NEQUdELDhEQUFDTzs0Q0FDR0MsVUFBVSxDQUFDbEQsSUFBTUQsU0FBU0M7NENBQzFCbUQsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsSUFBRzs0Q0FDSFgsV0FBVTs0Q0FDVlksYUFBWTs0Q0FDWkMsVUFBUzs7Ozs7Ozs7Ozs7OzhDQUlqQiw4REFBQ0M7b0NBQ0dDLFNBQVMxQztvQ0FDVG9DLE1BQUs7b0NBQ0xULFdBQVU7OENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0dBMUhNcEQ7O1FBRWFILHNEQUFTQTs7O0FBMEg1QiwrREFBZUcsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BvcnRmb2xpby9Bc3Nlc3RzL0J1eUFzc2VzdC9wYWdlLmpzPzg3MDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJlbWFpbDogXCJcIixcclxuICAgICAgICBCdXlBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgcGlkOiBcIlwiLFxyXG4gICAgICAgIFRyYW5zYWN0aW9uaWQ6IFwiNzg2Mzg3XCIsXHJcbiAgICAgICAgVHJhbnNhY3Rpb25hbW91bnQ6IDEwMFxyXG5cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICBsZXQgcG9ydGZvbGlvaWQgPSB1cmxQYXJhbXMuZ2V0KCdwaWQnKTsgLy8gdmFsdWUxXHJcblxyXG4gICAgICAgIGxldCBBUEZPU191c2VyZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFQRk9TX3VzZXJlbWFpbFwiKTtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0ZGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIHVzZXJlbWFpbDogQVBGT1NfdXNlcmVtYWlsLFxyXG4gICAgICAgICAgICBCdXlBbW91bnQ6IHZhbCxcclxuICAgICAgICAgICAgcGlkOiBwb3J0Zm9saW9pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3J0Zm9saW8vQXNzZXN0L0J1eUFzc2VzdGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJXYWxsZXQgQWRkcmVzcyBBZGQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJJbnZhbGlkIEZvcm1hdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFbXB0eSBGaWVsZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldGRhdGEoe1xyXG4gICAgICAgICAgICB1c2VyZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHdhbGxldGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTggbXgtYXV0byBtZDpoLXNjcmVlbiBsZzpweS0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBtZDptYi0wIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgbWwtMyBiZy1yZWQtNTAwIHctYXV0byBoLWF1dG8gcHktMSAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBiZy1ibGFjayB0ZXh0LXdoaXRlIHB4LTIgcHktMVwiPkJsdWVjaGlwPC9zcGFuPiBBcnR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBtZDptdC0wIHNtOm1heC13LW1kIHhsOnAtMCBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBtZDp0ZXh0LTJ4bCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIgQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbmNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkJ1eUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJCdXlBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1wcmltYXJ5LTYwMCBmb2N1czpib3JkZXItcHJpbWFyeS02MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1pbjoxMHJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJ0b2FzdCIsInBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwic2V0ZGF0YSIsInVzZXJlbWFpbCIsIkJ1eUFtb3VudCIsInBpZCIsIlRyYW5zYWN0aW9uaWQiLCJUcmFuc2FjdGlvbmFtb3VudCIsIm9uY2hhbmdlIiwiZSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwb3J0Zm9saW9pZCIsImdldCIsIkFQRk9TX3VzZXJlbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJzdGF0dXMiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInRoZW1lIiwicHVzaCIsImVycm9yIiwid2FsbGV0YWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Portfolio/Assests/BuyAssest/page.js\n"));

/***/ })

});