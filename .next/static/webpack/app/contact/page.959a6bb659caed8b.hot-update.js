"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./src/app/contact/page.js":
/*!*********************************!*\
  !*** ./src/app/contact/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [contactdata, setcontactdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        subject: \"\",\n        message: \"\"\n    });\n    const onChange = (e)=>{\n        e.preventDefault();\n        let name = e.target.name;\n        let val = e.target.value;\n        setcontactdata({\n            ...contactdata,\n            [name]: val\n        });\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (contactdata.email && contactdata.subject && contactdata.message) {\n            const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/sendContactEmail\"), {\n                method: \"POST\",\n                headers: {\n                    Accept: \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(contactdata)\n            });\n            const response = await res.json();\n            console.log(response);\n            if (response.status === 200) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Message sent succesfully\", {\n                    position: \"top-center\",\n                    autoClose: 3000,\n                    hideProgressBar: false,\n                    closeOnClick: false,\n                    pauseOnHover: true,\n                    draggable: true,\n                    progress: undefined,\n                    theme: \"colored\"\n                });\n                setcontactdata({\n                    email: \"\",\n                    subject: \"\",\n                    message: \"\"\n                });\n            } else {\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error. Try Again\", {\n                    position: \"top-center\",\n                    autoClose: 3000,\n                    hideProgressBar: false,\n                    closeOnClick: false,\n                    pauseOnHover: true,\n                    draggable: true,\n                    progress: undefined,\n                    theme: \"colored\"\n                });\n            }\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Fill All the Fields\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-5 md:p-12 mx-auto w-full md:w-[50%] m-5 bg-white  rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 \",\n                    children: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl\",\n                    children: \"Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"#\",\n                    className: \"space-y-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>onChange(e),\n                                    value: contactdata.email,\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    className: \"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 \",\n                                    placeholder: \"name@flowbite.com\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>onChange(e),\n                                    value: contactdata.subject,\n                                    name: \"subject\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    className: \"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  \",\n                                    placeholder: \"Let us know how we can help you\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sm:col-span-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                    children: \"Your message\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    onChange: (e)=>onChange(e),\n                                    value: contactdata.message,\n                                    name: \"message\",\n                                    id: \"message\",\n                                    rows: \"6\",\n                                    className: \"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 \",\n                                    placeholder: \"Leave a comment...\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleSubmit(e),\n                            type: \"submit\",\n                            className: \"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300\",\n                            children: \"Send message\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\contact\\\\page.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"VO7yO8ePe5+HO2hFqi1DmIXl8tc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VDO0FBQ2dCO0FBQ1I7QUFFL0MsTUFBTUksT0FBTzs7SUFFVCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7UUFDM0NNLE9BQU87UUFDUEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFHQSxNQUFNQyxXQUFXLENBQUNDO1FBQ2RBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDRCxJQUFJO1FBQ3hCLElBQUlFLE1BQU1KLEVBQUVHLE1BQU0sQ0FBQ0UsS0FBSztRQUN4QlYsZUFBZTtZQUFFLEdBQUdELFdBQVc7WUFBRSxDQUFDUSxLQUFLLEVBQUVFO1FBQUk7SUFDakQ7SUFFQSxNQUFNRSxlQUFlLE9BQU9DO1FBQ3hCQSxNQUFNTixjQUFjO1FBQ3BCLElBQUlQLFlBQVlFLEtBQUssSUFBSUYsWUFBWUcsT0FBTyxJQUFJSCxZQUFZSSxPQUFPLEVBQUU7WUFDakUsTUFBTVUsTUFBTSxNQUFNQyxNQUFNLEdBQWdDLE9BQTdCQyx3QkFBNEIsRUFBQyx5QkFBdUI7Z0JBQzNFRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMQyxRQUFRO29CQUNSLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3hCO1lBQ3pCO1lBQ0EsTUFBTXlCLFdBQVcsTUFBTVgsSUFBSVksSUFBSTtZQUMvQkMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaLElBQUlBLFNBQVNJLE1BQU0sS0FBSyxLQUFLO2dCQUN6Qi9CLGlEQUFLQSxDQUFDZ0MsT0FBTyxDQUFDLDRCQUE0QjtvQkFDdENDLFVBQVU7b0JBQ1ZDLFdBQVc7b0JBQ1hDLGlCQUFpQjtvQkFDakJDLGNBQWM7b0JBQ2RDLGNBQWM7b0JBQ2RDLFdBQVc7b0JBQ1hDLFVBQVVDO29CQUNWQyxPQUFPO2dCQUNYO2dCQUNBdEMsZUFBZTtvQkFDWEMsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsU0FBUztnQkFDYjtZQUNKLE9BQU87Z0JBQ0hOLGlEQUFLQSxDQUFDMEMsS0FBSyxDQUFDLG9CQUFvQjtvQkFDNUJULFVBQVU7b0JBQ1ZDLFdBQVc7b0JBQ1hDLGlCQUFpQjtvQkFDakJDLGNBQWM7b0JBQ2RDLGNBQWM7b0JBQ2RDLFdBQVc7b0JBQ1hDLFVBQVVDO29CQUNWQyxPQUFPO2dCQUNYO1lBQ0o7UUFDSixPQUFPO1lBQ0h6QyxpREFBS0EsQ0FBQzBDLEtBQUssQ0FBQyx1QkFBdUI7Z0JBQy9CVCxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxjQUFjO2dCQUNkQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxVQUFVQztnQkFDVkMsT0FBTztZQUNYO1FBQ0o7SUFDSjtJQUNBLHFCQUNJLDhEQUFDRTtrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF5RTs7Ozs7OzhCQUN2Riw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQTBFOzs7Ozs7OEJBQ3ZGLDhEQUFDRztvQkFBS0MsUUFBTztvQkFBSUosV0FBVTs7c0NBQ3ZCLDhEQUFDRDs7OENBQ0csOERBQUNNO29DQUFNQyxTQUFRO29DQUFRTixXQUFVOzhDQUFnRDs7Ozs7OzhDQUNqRiw4REFBQ087b0NBQU01QyxVQUFVLENBQUNDLElBQU1ELFNBQVNDO29DQUFJSyxPQUFPWCxZQUFZRSxLQUFLO29DQUFFTSxNQUFLO29DQUFRMEMsTUFBSztvQ0FBUUMsSUFBRztvQ0FBUVQsV0FBVTtvQ0FBbUpVLGFBQVk7b0NBQW9CQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBRTdTLDhEQUFDWjs7OENBQ0csOERBQUNNO29DQUFNQyxTQUFRO29DQUFVTixXQUFVOzhDQUFnRDs7Ozs7OzhDQUNuRiw4REFBQ087b0NBQU01QyxVQUFVLENBQUNDLElBQU1ELFNBQVNDO29DQUFJSyxPQUFPWCxZQUFZRyxPQUFPO29DQUFFSyxNQUFLO29DQUFVMEMsTUFBSztvQ0FBT0MsSUFBRztvQ0FBVVQsV0FBVTtvQ0FBa0pVLGFBQVk7b0NBQWtDQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBRS9ULDhEQUFDWjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNQyxTQUFRO29DQUFVTixXQUFVOzhDQUFnRDs7Ozs7OzhDQUNuRiw4REFBQ1k7b0NBQVNqRCxVQUFVLENBQUNDLElBQU1ELFNBQVNDO29DQUFJSyxPQUFPWCxZQUFZSSxPQUFPO29DQUFFSSxNQUFLO29DQUFVMkMsSUFBRztvQ0FBVUksTUFBSztvQ0FBSWIsV0FBVTtvQ0FBbUpVLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FFdFIsOERBQUNJOzRCQUFPQyxTQUFTLENBQUNuRCxJQUFNTSxhQUFhTjs0QkFBSTRDLE1BQUs7NEJBQVNSLFdBQVU7c0NBQWdLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyUDtHQTVGTTNDO0tBQUFBO0FBOEZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGFjdC9wYWdlLmpzPzBkNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29udGFjdGRhdGEsIHNldGNvbnRhY3RkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Y29udGFjdGRhdGEoeyAuLi5jb250YWN0ZGF0YSwgW25hbWVdOiB2YWwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY29udGFjdGRhdGEuZW1haWwgJiYgY29udGFjdGRhdGEuc3ViamVjdCAmJiBjb250YWN0ZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9YXBpL3NlbmRDb250YWN0RW1haWxgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdGRhdGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIk1lc3NhZ2Ugc2VudCBzdWNjZXNmdWxseVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Y29udGFjdGRhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvci4gVHJ5IEFnYWluXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIkZpbGwgQWxsIHRoZSBGaWVsZHNcIiwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG1kOnAtMTIgbXgtYXV0byB3LWZ1bGwgbWQ6dy1bNTAlXSBtLTUgYmctd2hpdGUgIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS05MDAgXCI+Q29udGFjdCBVczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04IGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgc206dGV4dC14bFwiPkdvdCBhIHRlY2huaWNhbCBpc3N1ZT8gV2FudCB0byBzZW5kIGZlZWRiYWNrIGFib3V0IGEgYmV0YSBmZWF0dXJlPyBOZWVkIGRldGFpbHMgYWJvdXQgb3VyIEJ1c2luZXNzIHBsYW4/IExldCB1cyBrbm93LjwvcD5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgXCI+WW91ciBlbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Y29udGFjdGRhdGEuZW1haWx9IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzc05hbWU9XCJzaGFkb3ctc20gYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS01MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBcIiBwbGFjZWhvbGRlcj1cIm5hbWVAZmxvd2JpdGUuY29tXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmplY3RcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIj5TdWJqZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtjb250YWN0ZGF0YS5zdWJqZWN0fSBuYW1lPVwic3ViamVjdFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdWJqZWN0XCIgY2xhc3NOYW1lPVwiYmxvY2sgcC0zIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIGZvY3VzOnJpbmctcHJpbWFyeS01MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNTAwICBcIiBwbGFjZWhvbGRlcj1cIkxldCB1cyBrbm93IGhvdyB3ZSBjYW4gaGVscCB5b3VcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIj5Zb3VyIG1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gdmFsdWU9e2NvbnRhY3RkYXRhLm1lc3NhZ2V9IG5hbWU9J21lc3NhZ2UnIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI2XCIgY2xhc3NOYW1lPVwiYmxvY2sgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LXNtIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1wcmltYXJ5LTUwMCBmb2N1czpib3JkZXItcHJpbWFyeS01MDAgXCIgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIGNvbW1lbnQuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB5LTMgcHgtNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgcm91bmRlZC1sZyBiZy1ibHVlLTcwMCBzbTp3LWZpdCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcHJpbWFyeS0zMDBcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbInJlYWN0IiwidXNlU3RhdGUiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiUGFnZSIsImNvbnRhY3RkYXRhIiwic2V0Y29udGFjdGRhdGEiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwidmFsIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPU1QiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0aGVtZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contact/page.js\n"));

/***/ })

});