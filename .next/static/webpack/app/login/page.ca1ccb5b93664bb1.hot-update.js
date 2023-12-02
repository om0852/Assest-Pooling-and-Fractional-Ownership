"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.js":
/*!*******************************!*\
  !*** ./src/app/login/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [active, setactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\");\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const onchange = (e)=>{\n        let name = e.target.name;\n        let val = e.target.value;\n        setdata({\n            ...data,\n            [name]: val\n        });\n        console.log(val);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        alert(data.email);\n        const res = await fetch(\"http://19:3000/api/login\", {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        if (response.status === 200) {\n            localStorage.setItem(\"token\", response.token);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Login Successful\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n            localStorage.setItem(\"APFOS_useremail\", data.email);\n            console.log(response);\n            if (response.metamaskaddress == \"\") {\n                router.push(\"/addwalletdetails\");\n            } else {\n                router.push(\"/\");\n            }\n        } else if (response.status === 201) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Invalid Credentials,Try Again..\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else if (response.status === 400) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"User not found.Please Register\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Failed to register.Try Again\", {\n                position: \"top-center\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        setdata({\n            email: \"\",\n            password: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 98,\n                            columnNumber: 106\n                        }, undefined),\n                        \" Art \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: \"Login to User account\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex  w-[100%]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/login\",\n                                    className: \"w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center \",\n                                    children: \"User\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/orglogin\",\n                                    className: \"w-[50%] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-3 py-2.5 text-center \",\n                                    children: \"Organization\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            for: \"email\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                            children: \"Your email\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: (e)=>onchange(e),\n                                            type: \"email\",\n                                            name: \"email\",\n                                            id: \"email\",\n                                            className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                            placeholder: \"name@company.com\",\n                                            required: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            for: \"password\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: (e)=>onchange(e),\n                                            type: \"password\",\n                                            name: \"password\",\n                                            id: \"password\",\n                                            placeholder: \"••••••••\",\n                                            className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                            required: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/forgetpassword\",\n                                        className: \"text-sm font-medium text-primary-600 hover:underline\",\n                                        children: \"Forgot password?\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"submit\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-light text-gray-500 \",\n                                    children: [\n                                        \"Don't have an account yet? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/signup\",\n                                            className: \"font-medium text-primary-600 hover:underline\",\n                                            children: \"Sign up\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 42\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Assest-Pooling-and-Fractional-Ownershi\\\\src\\\\app\\\\login\\\\page.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"ha4ZH+Tl6o5lB9rJSJ4M0PB4Yx4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUDtBQUNmO0FBQzBCO0FBQ1I7QUFFL0MsTUFBTU8sT0FBTzs7SUFDWCxNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUMvQlksT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFFQSxNQUFNQyxXQUFXLENBQUNDO1FBQ2hCLElBQUlDLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0QsSUFBSTtRQUN4QixJQUFJRSxNQUFNSCxFQUFFRSxNQUFNLENBQUNFLEtBQUs7UUFDeEJSLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ00sS0FBSyxFQUFFRTtRQUFJO1FBQy9CRSxRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7SUFFQSxNQUFNSSxlQUFlLE9BQU9QO1FBQzFCQSxFQUFFUSxjQUFjO1FBQ2hCQyxNQUFNZCxLQUFLRSxLQUFLO1FBQ2hCLE1BQU1hLE1BQU0sTUFBTUMsTUFBTyw0QkFBMkI7WUFDbERDLFFBQVE7WUFDUkMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDdEI7UUFDdkI7UUFDQSxNQUFNdUIsV0FBVyxNQUFNUixJQUFJUyxJQUFJO1FBQy9CLElBQUlELFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBQzNCQyxhQUFhQyxPQUFPLENBQUMsU0FBU0osU0FBU0ssS0FBSztZQUM1Q2pDLGlEQUFLQSxDQUFDa0MsT0FBTyxDQUFDLG9CQUFvQjtnQkFDaENDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFP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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpIO0dBM0hNL0M7O1FBQ1dKLHNEQUFTQTs7O0FBNEgxQiwrREFBZUksSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanM/NDhiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRhY3RpdmVdID0gdXNlU3RhdGUoJ3VzZXInKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCJcclxuICB9KVxyXG5cclxuICBjb25zdCBvbmNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRkYXRhKHsgLi4uZGF0YSwgW25hbWVdOiB2YWwgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbGVydChkYXRhLmVtYWlsKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xOTozMDAwL2FwaS9sb2dpbmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UudG9rZW4pXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dpbiBTdWNjZXNzZnVsXCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBUEZPU191c2VyZW1haWxcIiwgZGF0YS5lbWFpbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm1ldGFtYXNrYWRkcmVzcyA9PSBcIlwiKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYWRkd2FsbGV0ZGV0YWlsc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkludmFsaWQgQ3JlZGVudGlhbHMsVHJ5IEFnYWluLi5cIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlVzZXIgbm90IGZvdW5kLlBsZWFzZSBSZWdpc3RlclwiLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byByZWdpc3Rlci5UcnkgQWdhaW5cIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRkYXRhKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pXHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOCBteC1hdXRvIG1kOmgtc2NyZWVuIGxnOnB5LTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG1kOm1iLTAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtbC0zIGJnLXJlZC01MDAgdy1hdXRvIGgtYXV0byBweS0xIHByLTInPjxzcGFuIGNsYXNzTmFtZT0nIGJnLWJsYWNrIHRleHQtd2hpdGUgcHgtMiBweS0xJz5CbHVlY2hpcDwvc3Bhbj4gQXJ0IDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIFwiPlxyXG4gICAgICAgICAgICBMb2dpbiB0byBVc2VyIGFjY291bnRcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCAgdy1bMTAwJV0nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2xvZ2luJ30gY2xhc3NOYW1lPVwidy1bNTAlXSB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gbS0yIHB4LTMgcHktMi41IHRleHQtY2VudGVyIFwiPlVzZXI8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvb3JnbG9naW4nfSBjbGFzc05hbWU9XCJ3LVs1MCVdIHRleHQtd2hpdGUgYmctYmx1ZS02MDAgaG92ZXI6YmctcHJpbWFyeS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBtLTIgcHgtMyBweS0yLjUgdGV4dC1jZW50ZXIgXCI+T3JnYW5pemF0aW9uPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIFwiPllvdXIgZW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IG9uY2hhbmdlKGUpfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjVcIiBwbGFjZWhvbGRlcj1cIm5hbWVAY29tcGFueS5jb21cIiByZXF1aXJlZD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBvbmNoYW5nZShlKX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjVcIiByZXF1aXJlZD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZm9yZ2V0cGFzc3dvcmQnfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS02MDAgaG92ZXI6dW5kZXJsaW5lXCI+Rm9yZ290IHBhc3N3b3JkPzwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS02MDAgaG92ZXI6YmctcHJpbWFyeS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBcIj5cclxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyA8TGluayBocmVmPXtcIi9zaWdudXBcIn0gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5TaWduIHVwPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwicGFnZSIsInJvdXRlciIsImFjdGl2ZSIsInNldGFjdGl2ZSIsImRhdGEiLCJzZXRkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsIm9uY2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInRoZW1lIiwibWV0YW1hc2thZGRyZXNzIiwicHVzaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJoMSIsImhyZWYiLCJmb3JtIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});