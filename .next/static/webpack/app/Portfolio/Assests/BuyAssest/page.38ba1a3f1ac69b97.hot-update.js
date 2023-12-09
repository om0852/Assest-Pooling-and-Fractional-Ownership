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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        useremail: \"\",\n        BuyAmount: \"\",\n        pid: \"\",\n        PortfolioTotalPrice: \"\",\n        Transactionid: \"786387\",\n        Transactionamount: 100\n    });\n    const onchange = (e)=>{\n        let price = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"price\");\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let portfolioid = urlParams.get(\"pid\"); // value1\n        let APFOS_useremail = localStorage.getItem(\"APFOS_useremail\");\n        let val = e.target.value;\n        setdata({\n            ...data,\n            useremail: APFOS_useremail,\n            BuyAmount: val,\n            pid: portfolioid,\n            PortfolioTotalPrice: price\n        });\n    };\n    const handleSubmit = async (e)=>{\n        let APFOS_useremail = localStorage.getItem(\"APFOS_useremail\");\n        let price = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"price\");\n        if (!pid || !APFOS_useremail || !price) {}\n        e.preventDefault();\n        const res = await fetch(\"http://localhost:3000/api/portfolio/Assest/BuyAssest\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        if (response.status === 200) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Wallet Address Add Successfully\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/Portfolio/Assest/BuyAssestList\");\n        } else if (response.error == \"Account Not found\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Account Not found\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/Portfolio/Assest/BuyAssestList\");\n        } else if (response.status === 201) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Invalid Format\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Empty Field\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        setdata({\n            useremail: \"\",\n            walletaddress: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 -2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Art\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: \"Transaction Page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                            children: \"Enter Amount\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: (e)=>onchange(e),\n                                            type: \"text\",\n                                            name: \"BuyAmount\",\n                                            id: \"BuyAmount\",\n                                            className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                            placeholder: \"min:10rs\",\n                                            required: \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"submit\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 124,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"W73Zf5UBtPAt4uFlfD7eedEfHFE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9ydGZvbGlvL0Fzc2VzdHMvQnV5QXNzZXN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ2Y7QUFDVTtBQUNRO0FBQ2Y7QUFFaEMsTUFBTU8sT0FBTzs7SUFFVCxNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO1FBQzdCVSxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxxQkFBcUI7UUFDckJDLGVBQWU7UUFDZkMsbUJBQW1CO0lBRXZCO0lBQ0EsTUFBTUMsV0FBVyxDQUFDQztRQUNkLElBQUlDLFFBQVFiLGlEQUFPQSxDQUFDYyxHQUFHLENBQUM7UUFDeEIsTUFBTUMsY0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBQzFDLE1BQU1DLFlBQVksSUFBSUMsZ0JBQWdCTDtRQUN0QyxJQUFJTSxjQUFjRixVQUFVTCxHQUFHLENBQUMsUUFBUSxTQUFTO1FBRWpELElBQUlRLGtCQUFrQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzNDLElBQUlDLE1BQU1iLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSztRQUN4QnZCLFFBQVE7WUFDSixHQUFHRCxJQUFJO1lBQ1BFLFdBQVdpQjtZQUNYaEIsV0FBV21CO1lBQ1hsQixLQUFLYztZQUNMYixxQkFBcUJLO1FBQ3pCO0lBQ0o7SUFFQSxNQUFNZSxlQUFlLE9BQU9oQjtRQUN4QixJQUFJVSxrQkFBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJWCxRQUFRYixpREFBT0EsQ0FBQ2MsR0FBRyxDQUFDO1FBRXhCLElBQUksQ0FBQ1AsT0FBTyxDQUFDZSxtQkFBbUIsQ0FBQ1QsT0FBTyxDQUV4QztRQUNBRCxFQUFFaUIsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sd0RBQXVEO1lBQzVFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0xDLFFBQVE7Z0JBQ1IsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xDO1FBQ3pCO1FBQ0EsTUFBTW1DLFdBQVcsTUFBTVIsSUFBSVMsSUFBSTtRQUMvQixJQUFJRCxTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN6QnpDLGlEQUFLQSxDQUFDMEMsT0FBTyxDQUFDLG1DQUFtQztnQkFDN0NDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1g7WUFDQWhELE9BQU9pRCxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJYixTQUFTYyxLQUFLLElBQUkscUJBQXFCO1lBQzlDckQsaURBQUtBLENBQUNxRCxLQUFLLENBQUMscUJBQXFCO2dCQUM3QlYsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsY0FBYztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsVUFBVUM7Z0JBQ1ZDLE9BQU87WUFDWDtZQUNBaEQsT0FBT2lELElBQUksQ0FBQztRQUVoQixPQUNLLElBQUliLFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBQzlCekMsaURBQUtBLENBQUNxRCxLQUFLLENBQUMsa0JBQWtCO2dCQUMxQlYsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsY0FBYztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsVUFBVUM7Z0JBQ1ZDLE9BQU87WUFDWDtRQUNKLE9BQ0s7WUFDRG5ELGlEQUFLQSxDQUFDcUQsS0FBSyxDQUFDLGVBQWU7Z0JBQ3ZCVixVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxjQUFjO2dCQUNkQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxVQUFVQztnQkFDVkMsT0FBTztZQUNYO1FBQ0o7UUFDQTlDLFFBQVE7WUFDSkMsV0FBVztZQUNYZ0QsZUFBZTtRQUNuQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUVELFdBQVU7O3NDQUNULDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBaUM7Ozs7Ozt3QkFBZTt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUc3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQTRFOzs7Ozs7c0NBSTFGLDhEQUFDSTs0QkFBS0osV0FBVTs0QkFBeUJ2QixRQUFPOzs4Q0FDNUMsOERBQUNzQjs7c0RBQ0csOERBQUNNOzRDQUNHQyxTQUFROzRDQUNSTixXQUFVO3NEQUNiOzs7Ozs7c0RBR0QsOERBQUNPOzRDQUNHQyxVQUFVLENBQUNuRCxJQUFNRCxTQUFTQzs0Q0FDMUJvRCxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIWCxXQUFVOzRDQUNWWSxhQUFZOzRDQUNaQyxVQUFTOzs7Ozs7Ozs7Ozs7OENBSWpCLDhEQUFDQztvQ0FDR0MsU0FBUzFDO29DQUNUb0MsTUFBSztvQ0FDTFQsV0FBVTs4Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0FsSk10RDs7UUFFYUosc0RBQVNBOzs7QUFrSjVCLCtEQUFlSSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvUG9ydGZvbGlvL0Fzc2VzdHMvQnV5QXNzZXN0L3BhZ2UuanM/ODcwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyZW1haWw6IFwiXCIsXHJcbiAgICAgICAgQnV5QW1vdW50OiBcIlwiLFxyXG4gICAgICAgIHBpZDogXCJcIixcclxuICAgICAgICBQb3J0Zm9saW9Ub3RhbFByaWNlOiBcIlwiLFxyXG4gICAgICAgIFRyYW5zYWN0aW9uaWQ6IFwiNzg2Mzg3XCIsXHJcbiAgICAgICAgVHJhbnNhY3Rpb25hbW91bnQ6IDEwMFxyXG5cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBwcmljZSA9IENvb2tpZXMuZ2V0KFwicHJpY2VcIilcclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgbGV0IHBvcnRmb2xpb2lkID0gdXJsUGFyYW1zLmdldCgncGlkJyk7IC8vIHZhbHVlMVxyXG5cclxuICAgICAgICBsZXQgQVBGT1NfdXNlcmVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUEZPU191c2VyZW1haWxcIik7XHJcbiAgICAgICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldGRhdGEoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICB1c2VyZW1haWw6IEFQRk9TX3VzZXJlbWFpbCxcclxuICAgICAgICAgICAgQnV5QW1vdW50OiB2YWwsXHJcbiAgICAgICAgICAgIHBpZDogcG9ydGZvbGlvaWQsXHJcbiAgICAgICAgICAgIFBvcnRmb2xpb1RvdGFsUHJpY2U6IHByaWNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IEFQRk9TX3VzZXJlbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQVBGT1NfdXNlcmVtYWlsXCIpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IENvb2tpZXMuZ2V0KFwicHJpY2VcIilcclxuXHJcbiAgICAgICAgaWYgKCFwaWQgfHwgIUFQRk9TX3VzZXJlbWFpbCB8fCAhcHJpY2UpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3J0Zm9saW8vQXNzZXN0L0J1eUFzc2VzdGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJXYWxsZXQgQWRkcmVzcyBBZGQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1BvcnRmb2xpby9Bc3Nlc3QvQnV5QXNzZXN0TGlzdFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yID09IFwiQWNjb3VudCBOb3QgZm91bmRcIikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkFjY291bnQgTm90IGZvdW5kXCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvUG9ydGZvbGlvL0Fzc2VzdC9CdXlBc3Nlc3RMaXN0XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJJbnZhbGlkIEZvcm1hdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkVtcHR5IEZpZWxkXCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0ZGF0YSh7XHJcbiAgICAgICAgICAgIHVzZXJlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgd2FsbGV0YWRkcmVzczogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOCBteC1hdXRvIG1kOmgtc2NyZWVuIGxnOnB5LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG1kOm1iLTAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtbC0zIGJnLXJlZC01MDAgdy1hdXRvIGgtYXV0byBweS0xIC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHRleHQtd2hpdGUgcHgtMiBweS0xXCI+Qmx1ZWNoaXA8L3NwYW4+IEFydHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS00IG1kOnNwYWNlLXktNiBzbTpwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlciBBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uY2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQnV5QW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkJ1eUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWluOjEwcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS02MDAgaG92ZXI6YmctcHJpbWFyeS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsInRvYXN0IiwiQ29va2llcyIsInBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwic2V0ZGF0YSIsInVzZXJlbWFpbCIsIkJ1eUFtb3VudCIsInBpZCIsIlBvcnRmb2xpb1RvdGFsUHJpY2UiLCJUcmFuc2FjdGlvbmlkIiwiVHJhbnNhY3Rpb25hbW91bnQiLCJvbmNoYW5nZSIsImUiLCJwcmljZSIsImdldCIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwb3J0Zm9saW9pZCIsIkFQRk9TX3VzZXJlbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJzdGF0dXMiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInRoZW1lIiwicHVzaCIsImVycm9yIiwid2FsbGV0YWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Portfolio/Assests/BuyAssest/page.js\n"));

/***/ })

});