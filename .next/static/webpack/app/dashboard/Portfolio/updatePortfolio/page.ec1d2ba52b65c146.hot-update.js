"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/Portfolio/updatePortfolio/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/Portfolio/updatePortfolio/page.js":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/Portfolio/updatePortfolio/page.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [active, setactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [portfoliodata, setPortfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [assetData, setAssetData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchdata();\n    }, []);\n    const fetchdata = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/portfoliodetails\"), {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pid: pid\n            })\n        });\n        const response = await res.json();\n        setPortfoliodata(response.error);\n        // Initialize the state with the initial values of assets\n        setAssetData(response.error.Assests.map((asset)=>({\n                name: asset.Assest_Title,\n                price: asset.Assest_Price\n            })));\n    };\n    const handleChange = (index, e)=>{\n        const updatedAssets = [\n            ...assetData\n        ];\n        updatedAssets[index][e.target.name] = e.target.value;\n        setAssetData(updatedAssets);\n    };\n    const handleSubmit = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        let arr = [];\n        for(let i = 0; i < assestData.length; i++){\n            arr.push();\n        }\n        const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/updatePortfolio\"), {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                updatedprice: assetData,\n                id: pid\n            })\n        });\n        const response = await res.json();\n        if (response.status == 200) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Portfolio Updated Successfully\", {\n                position: \"top-center\",\n                autoClose: 1000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(response.message, {\n                position: \"top-center\",\n                autoClose: 1000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        console.log(response);\n    // Add your logic to update the values in the backend\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined),\n                        \" Art\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: portfoliodata && portfoliodata.PortfolioName\n                        }, void 0, false, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                assetData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: data.name,\n                                                className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                children: data.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                                lineNumber: 120,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: data.price,\n                                                onChange: (e)=>handleChange(index, e),\n                                                type: \"text\",\n                                                name: \"price\",\n                                                id: data.name,\n                                                className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                                placeholder: \"Enter price for \".concat(data.name),\n                                                required: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                                lineNumber: 123,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"button\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\bluechipart\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"Jv2CoWyzzvxKw3CedHkY5Nt1DAg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL1BvcnRmb2xpby91cGRhdGVQb3J0Zm9saW8vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ1c7QUFDUjtBQUNSO0FBRXZDLE1BQU1PLE9BQU87O0lBQ1gsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUU3Q0MsZ0RBQVNBLENBQUM7UUFDUmlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsWUFBWTtRQUNoQixNQUFNQyxjQUFjQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDMUMsTUFBTUMsWUFBWSxJQUFJQyxnQkFBZ0JMO1FBQ3RDLElBQUlNLE1BQU1GLFVBQVVHLEdBQUcsQ0FBQyxRQUFRLFNBQVM7UUFFekMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUFnQyxPQUE3QkMsd0JBQTRCLEVBQUMsbUNBQ2hDO1lBQ0VHLFFBQVE7WUFDUkMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWixLQUFLQTtZQUFJO1FBQ2xDO1FBRUYsTUFBTWEsV0FBVyxNQUFNWCxJQUFJWSxJQUFJO1FBQy9CeEIsaUJBQWlCdUIsU0FBU0UsS0FBSztRQUUvQix5REFBeUQ7UUFDekR2QixhQUNFcUIsU0FBU0UsS0FBSyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFXO2dCQUNyQ0MsTUFBTUQsTUFB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OztLQURwQkk7QUF5SU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvUG9ydGZvbGlvL3VwZGF0ZVBvcnRmb2xpby9wYWdlLmpzP2QyYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldGFjdGl2ZV0gPSB1c2VTdGF0ZSgndXNlcicpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwb3J0Zm9saW9kYXRhLCBzZXRQb3J0Zm9saW9kYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthc3NldERhdGEsIHNldEFzc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaGRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgbGV0IHBpZCA9IHVybFBhcmFtcy5nZXQoXCJwaWRcIik7IC8vIHZhbHVlMVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWFwaS9wb3J0Zm9saW8vcG9ydGZvbGlvZGV0YWlsc2AsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGlkOiBwaWQgfSksXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBzZXRQb3J0Zm9saW9kYXRhKHJlc3BvbnNlLmVycm9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSBzdGF0ZSB3aXRoIHRoZSBpbml0aWFsIHZhbHVlcyBvZiBhc3NldHNcclxuICAgIHNldEFzc2V0RGF0YShcclxuICAgICAgcmVzcG9uc2UuZXJyb3IuQXNzZXN0cy5tYXAoKGFzc2V0KSA9PiAoe1xyXG4gICAgICAgIG5hbWU6IGFzc2V0LkFzc2VzdF9UaXRsZSxcclxuICAgICAgICBwcmljZTogYXNzZXQuQXNzZXN0X1ByaWNlLFxyXG4gICAgICB9KSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQXNzZXRzID0gWy4uLmFzc2V0RGF0YV07XHJcbiAgICB1cGRhdGVkQXNzZXRzW2luZGV4XVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0QXNzZXREYXRhKHVwZGF0ZWRBc3NldHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgbGV0IHBpZCA9IHVybFBhcmFtcy5nZXQoXCJwaWRcIik7IC8vIHZhbHVlMVxyXG5sZXQgYXJyPVtdO1xyXG5mb3IobGV0IGk9MDtpPGFzc2VzdERhdGEubGVuZ3RoO2krKyl7XHJcbiAgYXJyLnB1c2goKVxyXG59XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9TVH1hcGkvcG9ydGZvbGlvL3VwZGF0ZVBvcnRmb2xpb2AsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXBkYXRlZHByaWNlOiBhc3NldERhdGEsIGlkOiBwaWQgfSksXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiUG9ydGZvbGlvIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5tZXNzYWdlLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMTAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyBBZGQgeW91ciBsb2dpYyB0byB1cGRhdGUgdGhlIHZhbHVlcyBpbiB0aGUgYmFja2VuZFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOCBteC1hdXRvIG1kOmgtc2NyZWVuIGxnOnB5LTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG1kOm1iLTAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtbC0zIGJnLXJlZC01MDAgdy1hdXRvIGgtYXV0byBweS0xIHByLTInPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScgYmctYmxhY2sgdGV4dC13aGl0ZSBweC0yIHB5LTEnPkJsdWVjaGlwPC9zcGFuPiBBcnRcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBtZDptdC0wIHNtOm1heC13LW1kIHhsOnAtMCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHNtOnAtOFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBtZDp0ZXh0LTJ4bCBcIj5cclxuICAgICAgICAgICAge3BvcnRmb2xpb2RhdGEgJiYgcG9ydGZvbGlvZGF0YS5Qb3J0Zm9saW9OYW1lfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgIHthc3NldERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZGF0YS5uYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRW50ZXIgcHJpY2UgZm9yICR7ZGF0YS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJqd3REZWNvZGUiLCJQYWdlIiwicm91dGVyIiwiYWN0aXZlIiwic2V0YWN0aXZlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3J0Zm9saW9kYXRhIiwic2V0UG9ydGZvbGlvZGF0YSIsImFzc2V0RGF0YSIsInNldEFzc2V0RGF0YSIsImZldGNoZGF0YSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwaWQiLCJnZXQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IT1NUIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJBc3Nlc3RzIiwibWFwIiwiYXNzZXQiLCJuYW1lIiwiQXNzZXN0X1RpdGxlIiwicHJpY2UiLCJBc3Nlc3RfUHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsImUiLCJ1cGRhdGVkQXNzZXRzIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJhcnIiLCJpIiwiYXNzZXN0RGF0YSIsImxlbmd0aCIsInB1c2giLCJ1cGRhdGVkcHJpY2UiLCJpZCIsInN0YXR1cyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwidGhlbWUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiaDEiLCJQb3J0Zm9saW9OYW1lIiwiZm9ybSIsImRhdGEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/Portfolio/updatePortfolio/page.js\n"));

/***/ })

});