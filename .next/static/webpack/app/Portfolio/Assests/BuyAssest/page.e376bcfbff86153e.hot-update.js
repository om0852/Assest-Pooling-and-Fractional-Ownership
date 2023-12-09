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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        useremail: \"\",\n        BuyAmount: \"\",\n        pid: \"\",\n        PortfolioTotalPrice: \"\",\n        Transactionid: \"786387\",\n        Transactionamount: 100\n    });\n    const onchange = (e)=>{\n        let price = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"price\");\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let portfolioid = urlParams.get(\"pid\"); // value1\n        let APFOS_useremail = localStorage.getItem(\"APFOS_useremail\");\n        let val = e.target.value;\n        setdata({\n            ...data,\n            useremail: APFOS_useremail,\n            BuyAmount: val,\n            pid: portfolioid,\n            PortfolioTotalPrice: price\n        });\n    };\n    const handleSubmit = async (e)=>{\n        let APFOS_useremail = localStorage.getItem(\"APFOS_useremail\");\n        let price = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"price\");\n        if (!pid || !APFOS_useremail || !price) {}\n        e.preventDefault();\n        const res = await fetch(\"http://localhost:3000/api/portfolio/Assest/BuyAssest\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        if (response.status === 200) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Wallet Address Add Successfully\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/Portfolio/Assest/BuyAssestList\");\n        } else if (response.error == \"Account Not Found\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Account Not Found\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/Login\");\n        } else if (response.status == \"Portfolio Not Found\") {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Portfolio Not Found\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            router.push(\"/\");\n        } else if (response.status === 201) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Invalid Format\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Empty Field\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        setdata({\n            useremail: \"\",\n            walletaddress: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 -2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, undefined),\n                        \" Art\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: \"Transaction Page\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                            children: \"Enter Amount\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: (e)=>onchange(e),\n                                            type: \"text\",\n                                            name: \"BuyAmount\",\n                                            id: \"BuyAmount\",\n                                            className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                            placeholder: \"min:10rs\",\n                                            required: \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                            lineNumber: 146,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"submit\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                            lineNumber: 138,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n                lineNumber: 132,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\Portfolio\\\\Assests\\\\BuyAssest\\\\page.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page, \"W73Zf5UBtPAt4uFlfD7eedEfHFE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9ydGZvbGlvL0Fzc2VzdHMvQnV5QXNzZXN0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ2Y7QUFDVTtBQUNRO0FBQ2Y7QUFFaEMsTUFBTU8sT0FBTzs7SUFFVCxNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO1FBQzdCVSxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxxQkFBcUI7UUFDckJDLGVBQWU7UUFDZkMsbUJBQW1CO0lBRXZCO0lBQ0EsTUFBTUMsV0FBVyxDQUFDQztRQUNkLElBQUlDLFFBQVFiLGlEQUFPQSxDQUFDYyxHQUFHLENBQUM7UUFDeEIsTUFBTUMsY0FBY0MsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1FBQzFDLE1BQU1DLFlBQVksSUFBSUMsZ0JBQWdCTDtRQUN0QyxJQUFJTSxjQUFjRixVQUFVTCxHQUFHLENBQUMsUUFBUSxTQUFTO1FBRWpELElBQUlRLGtCQUFrQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzNDLElBQUlDLE1BQU1iLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSztRQUN4QnZCLFFBQVE7WUFDSixHQUFHRCxJQUFJO1lBQ1BFLFdBQVdpQjtZQUNYaEIsV0FBV21CO1lBQ1hsQixLQUFLYztZQUNMYixxQkFBcUJLO1FBQ3pCO0lBQ0o7SUFFQSxNQUFNZSxlQUFlLE9BQU9oQjtRQUN4QixJQUFJVSxrQkFBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJWCxRQUFRYixpREFBT0EsQ0FBQ2MsR0FBRyxDQUFDO1FBRXhCLElBQUksQ0FBQ1AsT0FBTyxDQUFDZSxtQkFBbUIsQ0FBQ1QsT0FBTyxDQUV4QztRQUNBRCxFQUFFaUIsY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sd0RBQXVEO1lBQzVFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0xDLFFBQVE7Z0JBQ1IsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xDO1FBQ3pCO1FBQ0EsTUFBTW1DLFdBQVcsTUFBTVIsSUFBSVMsSUFBSTtRQUMvQixJQUFJRCxTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN6QnpDLGlEQUFLQSxDQUFDMEMsT0FBTyxDQUFDLG1DQUFtQztnQkFDN0NDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1g7WUFDQWhELE9BQU9pRCxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJYixTQUFTYyxLQUFLLElBQUkscUJBQXFCO1lBQzlDckQsaURBQUtBLENBQUNxRCxLQUFLLENBQUMscUJBQXFCO2dCQUM3QlYsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsY0FBYztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsVUFBVUM7Z0JBQ1ZDLE9BQU87WUFDWDtZQUNBaEQsT0FBT2lELElBQUksQ0FBQztRQUVoQixPQUNLLElBQUliLFNBQVNFLE1BQU0sSUFBSSx1QkFBdUI7WUFDL0N6QyxpREFBS0EsQ0FBQ3FELEtBQUssQ0FBQyx1QkFBdUI7Z0JBQy9CVixVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxjQUFjO2dCQUNkQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxVQUFVQztnQkFDVkMsT0FBTztZQUNYO1lBQ0FoRCxPQUFPaUQsSUFBSSxDQUFDO1FBRWhCLE9BQ0ssSUFBSWIsU0FBU0UsTUFBTSxLQUFLLEtBQUs7WUFDOUJ6QyxpREFBS0EsQ0FBQ3FELEtBQUssQ0FBQyxrQkFBa0I7Z0JBQzFCVixVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxjQUFjO2dCQUNkQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxVQUFVQztnQkFDVkMsT0FBTztZQUNYO1FBQ0osT0FDSztZQUNEbkQsaURBQUtBLENBQUNxRCxLQUFLLENBQUMsZUFBZTtnQkFDdkJWLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1g7UUFDSjtRQUNBOUMsUUFBUTtZQUNKQyxXQUFXO1lBQ1hnRCxlQUFlO1FBQ25CO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBRUQsV0FBVTs7c0NBQ1QsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFpQzs7Ozs7O3dCQUFlO3dCQUFLOzs7Ozs7Ozs7Ozs7MEJBRzdFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBNEU7Ozs7OztzQ0FJMUYsOERBQUNJOzRCQUFLSixXQUFVOzRCQUF5QnZCLFFBQU87OzhDQUM1Qyw4REFBQ3NCOztzREFDRyw4REFBQ007NENBQ0dDLFNBQVE7NENBQ1JOLFdBQVU7c0RBQ2I7Ozs7OztzREFHRCw4REFBQ087NENBQ0dDLFVBQVUsQ0FBQ25ELElBQU1ELFNBQVNDOzRDQUMxQm9ELE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xDLElBQUc7NENBQ0hYLFdBQVU7NENBQ1ZZLGFBQVk7NENBQ1pDLFVBQVM7Ozs7Ozs7Ozs7Ozs4Q0FJakIsOERBQUNDO29DQUNHQyxTQUFTMUM7b0NBQ1RvQyxNQUFLO29DQUNMVCxXQUFVOzhDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QjtHQWhLTXREOztRQUVhSixzREFBU0E7OztBQWdLNUIsK0RBQWVJLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qb3J0Zm9saW8vQXNzZXN0cy9CdXlBc3Nlc3QvcGFnZS5qcz84NzA5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJlbWFpbDogXCJcIixcclxuICAgICAgICBCdXlBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgcGlkOiBcIlwiLFxyXG4gICAgICAgIFBvcnRmb2xpb1RvdGFsUHJpY2U6IFwiXCIsXHJcbiAgICAgICAgVHJhbnNhY3Rpb25pZDogXCI3ODYzODdcIixcclxuICAgICAgICBUcmFuc2FjdGlvbmFtb3VudDogMTAwXHJcblxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbmNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHByaWNlID0gQ29va2llcy5nZXQoXCJwcmljZVwiKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICBsZXQgcG9ydGZvbGlvaWQgPSB1cmxQYXJhbXMuZ2V0KCdwaWQnKTsgLy8gdmFsdWUxXHJcblxyXG4gICAgICAgIGxldCBBUEZPU191c2VyZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFQRk9TX3VzZXJlbWFpbFwiKTtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0ZGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIHVzZXJlbWFpbDogQVBGT1NfdXNlcmVtYWlsLFxyXG4gICAgICAgICAgICBCdXlBbW91bnQ6IHZhbCxcclxuICAgICAgICAgICAgcGlkOiBwb3J0Zm9saW9pZCxcclxuICAgICAgICAgICAgUG9ydGZvbGlvVG90YWxQcmljZTogcHJpY2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBsZXQgQVBGT1NfdXNlcmVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBUEZPU191c2VyZW1haWxcIik7XHJcbiAgICAgICAgbGV0IHByaWNlID0gQ29va2llcy5nZXQoXCJwcmljZVwiKVxyXG5cclxuICAgICAgICBpZiAoIXBpZCB8fCAhQVBGT1NfdXNlcmVtYWlsIHx8ICFwcmljZSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3BvcnRmb2xpby9Bc3Nlc3QvQnV5QXNzZXN0YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIldhbGxldCBBZGRyZXNzIEFkZCBTdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvUG9ydGZvbGlvL0Fzc2VzdC9CdXlBc3Nlc3RMaXN0XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgPT0gXCJBY2NvdW50IE5vdCBGb3VuZFwiKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiQWNjb3VudCBOb3QgRm91bmRcIiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9Mb2dpblwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcIlBvcnRmb2xpbyBOb3QgRm91bmRcIikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIlBvcnRmb2xpbyBOb3QgRm91bmRcIiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkludmFsaWQgRm9ybWF0XCIsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRW1wdHkgRmllbGRcIiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRkYXRhKHtcclxuICAgICAgICAgICAgdXNlcmVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICB3YWxsZXRhZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS04IG14LWF1dG8gbWQ6aC1zY3JlZW4gbGc6cHktMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgbWQ6bWItMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIG1sLTMgYmctcmVkLTUwMCB3LWF1dG8gaC1hdXRvIHB5LTEgLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgYmctYmxhY2sgdGV4dC13aGl0ZSBweC0yIHB5LTFcIj5CbHVlY2hpcDwvc3Bhbj4gQXJ0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgbWQ6bXQtMCBzbTptYXgtdy1tZCB4bDpwLTAgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHNtOnAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbWQ6dGV4dC0yeGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uIFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIEFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25jaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJCdXlBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQnV5QW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtaW46MTByc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMCBob3ZlcjpiZy1wcmltYXJ5LTcwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwidG9hc3QiLCJDb29raWVzIiwicGFnZSIsInJvdXRlciIsImRhdGEiLCJzZXRkYXRhIiwidXNlcmVtYWlsIiwiQnV5QW1vdW50IiwicGlkIiwiUG9ydGZvbGlvVG90YWxQcmljZSIsIlRyYW5zYWN0aW9uaWQiLCJUcmFuc2FjdGlvbmFtb3VudCIsIm9uY2hhbmdlIiwiZSIsInByaWNlIiwiZ2V0IiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInBvcnRmb2xpb2lkIiwiQVBGT1NfdXNlcmVtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInZhbCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwidGhlbWUiLCJwdXNoIiwiZXJyb3IiLCJ3YWxsZXRhZGRyZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJoMSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Portfolio/Assests/BuyAssest/page.js\n"));

/***/ })

});