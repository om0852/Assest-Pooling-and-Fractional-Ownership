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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [active, setactive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [portfoliodata, setPortfoliodata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [assetData, setAssetData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchdata();\n    }, []);\n    const fetchdata = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/portfoliodetails\"), {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                pid: pid\n            })\n        });\n        const response = await res.json();\n        setPortfoliodata(response.error);\n        // Initialize the state with the initial values of assets\n        setAssetData(response.error.Assests.map((asset)=>({\n                name: asset.Assest_Title,\n                price: asset.Assest_Price\n            })));\n    };\n    const handleChange = (index, e)=>{\n        const updatedAssets = [\n            ...assetData\n        ];\n        updatedAssets[index][e.target.name] = e.target.value;\n        setAssetData(updatedAssets); // Fix the typo here\n    };\n    const handleSubmit = async ()=>{\n        const queryString = window.location.search;\n        const urlParams = new URLSearchParams(queryString);\n        let pid = urlParams.get(\"pid\"); // value1\n        let arr = [];\n        for(let i = 0; i < assetData.length; i++){\n            arr.push(parseFloat(assetData[i].price));\n        }\n        console.log(arr);\n        const res = await fetch(\"\".concat(\"http://localhost:3000/\", \"api/portfolio/updatePortfolio\"), {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                updatedprice: arr,\n                id: pid\n            })\n        });\n        const response = await res.json();\n        if (response.status == 200) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Portfolio Updated Successfully\", {\n                position: \"top-center\",\n                autoClose: 1000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(response.message, {\n                position: \"top-center\",\n                autoClose: 1000,\n                hideProgressBar: false,\n                closeOnClick: false,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"colored\"\n            });\n        }\n        console.log(response);\n    // Add your logic to update the values in the backend\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 md:mb-0 flex flex-row justify-center my-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl text-center text-white font-bold ml-3 bg-red-500 w-auto h-auto py-1 pr-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" bg-black text-white px-2 py-1\",\n                            children: \"Bluechip\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        \" Art\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                            children: portfoliodata && portfoliodata.PortfolioName\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"(portfolu)\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            method: \"POST\",\n                            children: [\n                                assetData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: data.name,\n                                                className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                children: data.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                                lineNumber: 123,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                value: data.price,\n                                                onChange: (e)=>handleChange(index, e),\n                                                type: \"text\",\n                                                name: \"price\",\n                                                id: data.name,\n                                                className: \"bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5\",\n                                                placeholder: \"Enter price for \".concat(data.name),\n                                                required: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    type: \"button\",\n                                    className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center \",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\dashboard\\\\Portfolio\\\\updatePortfolio\\\\page.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"Jv2CoWyzzvxKw3CedHkY5Nt1DAg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL1BvcnRmb2xpby91cGRhdGVQb3J0Zm9saW8vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ1c7QUFDUjtBQUNSO0FBRXZDLE1BQU1PLE9BQU87O0lBQ1gsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7UUFDdkNZLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0IsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUU3Q0MsZ0RBQVNBLENBQUM7UUFDUmlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsWUFBWTtRQUNoQixNQUFNQyxjQUFjQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDMUMsTUFBTUMsWUFBWSxJQUFJQyxnQkFBZ0JMO1FBQ3RDLElBQUlNLE1BQU1GLFVBQVVHLEdBQUcsQ0FBQyxRQUFRLFNBQVM7UUFFekMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUFnQyxPQUE3QkMsd0JBQTRCLEVBQUMsbUNBQ2hDO1lBQ0VHLFFBQVE7WUFDUkMsU0FBUztnQkFDUEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWixLQUFLQTtZQUFJO1FBQ2xDO1FBRUYsTUFBTWEsV0FBVyxNQUFNWCxJQUFJWSxJQUFJO1FBQy9CeEIsaUJBQWlCdUIsU0FBU0UsS0FBSztRQUUvQix5REFBeUQ7UUFDekR2QixhQUNFcUIsU0FBU0UsS0FBSyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFXO2dCQUNyQ0MsTUFBTUQsTUFB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QztvQ0FBT0MsU0FBU3RDO29DQUFja0MsTUFBSztvQ0FBU1gsV0FBVTs4Q0FBb0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZPO0dBMUlNdkU7O1FBQ1dKLHNEQUFTQTs7O0tBRHBCSTtBQTRJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9Qb3J0Zm9saW8vdXBkYXRlUG9ydGZvbGlvL3BhZ2UuanM/ZDJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0YWN0aXZlXSA9IHVzZVN0YXRlKCd1c2VyJyk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgfSk7XHJcbiAgY29uc3QgW3BvcnRmb2xpb2RhdGEsIHNldFBvcnRmb2xpb2RhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Fzc2V0RGF0YSwgc2V0QXNzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoZGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICBsZXQgcGlkID0gdXJsUGFyYW1zLmdldChcInBpZFwiKTsgLy8gdmFsdWUxXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPU1R9YXBpL3BvcnRmb2xpby9wb3J0Zm9saW9kZXRhaWxzYCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwaWQ6IHBpZCB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHNldFBvcnRmb2xpb2RhdGEocmVzcG9uc2UuZXJyb3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIHN0YXRlIHdpdGggdGhlIGluaXRpYWwgdmFsdWVzIG9mIGFzc2V0c1xyXG4gICAgc2V0QXNzZXREYXRhKFxyXG4gICAgICByZXNwb25zZS5lcnJvci5Bc3Nlc3RzLm1hcCgoYXNzZXQpID0+ICh7XHJcbiAgICAgICAgbmFtZTogYXNzZXQuQXNzZXN0X1RpdGxlLFxyXG4gICAgICAgIHByaWNlOiBhc3NldC5Bc3Nlc3RfUHJpY2UsXHJcbiAgICAgIH0pKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5kZXgsIGUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRBc3NldHMgPSBbLi4uYXNzZXREYXRhXTtcclxuICAgIHVwZGF0ZWRBc3NldHNbaW5kZXhdW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRBc3NldERhdGEodXBkYXRlZEFzc2V0cyk7IC8vIEZpeCB0aGUgdHlwbyBoZXJlXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgbGV0IHBpZCA9IHVybFBhcmFtcy5nZXQoXCJwaWRcIik7IC8vIHZhbHVlMVxyXG4gICAgbGV0IGFyciA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnIucHVzaChwYXJzZUZsb2F0KGFzc2V0RGF0YVtpXS5wcmljZSkpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYXJyKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT1NUfWFwaS9wb3J0Zm9saW8vdXBkYXRlUG9ydGZvbGlvYCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cGRhdGVkcHJpY2U6IGFyciwgaWQ6IHBpZCB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQb3J0Zm9saW8gVXBkYXRlZCBTdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDEwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcclxuICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwiY29sb3JlZFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIEFkZCB5b3VyIGxvZ2ljIHRvIHVwZGF0ZSB0aGUgdmFsdWVzIGluIHRoZSBiYWNrZW5kXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS04IG14LWF1dG8gbWQ6aC1zY3JlZW4gbGc6cHktMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgbWQ6bWItMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG15LTJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIG1sLTMgYmctcmVkLTUwMCB3LWF1dG8gaC1hdXRvIHB5LTEgcHItMic+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyBiZy1ibGFjayB0ZXh0LXdoaXRlIHB4LTIgcHktMSc+Qmx1ZWNoaXA8L3NwYW4+IEFydFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIFwiPlxyXG4gICAgICAgICAgICB7cG9ydGZvbGlvZGF0YSAmJiBwb3J0Zm9saW9kYXRhLlBvcnRmb2xpb05hbWV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHA+KHBvcnRmb2x1KTwvcD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgIHthc3NldERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZGF0YS5uYW1lfSBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD17ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgc206dGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRW50ZXIgcHJpY2UgZm9yICR7ZGF0YS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJqd3REZWNvZGUiLCJQYWdlIiwicm91dGVyIiwiYWN0aXZlIiwic2V0YWN0aXZlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3J0Zm9saW9kYXRhIiwic2V0UG9ydGZvbGlvZGF0YSIsImFzc2V0RGF0YSIsInNldEFzc2V0RGF0YSIsImZldGNoZGF0YSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwaWQiLCJnZXQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IT1NUIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJBc3Nlc3RzIiwibWFwIiwiYXNzZXQiLCJuYW1lIiwiQXNzZXN0X1RpdGxlIiwicHJpY2UiLCJBc3Nlc3RfUHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsImUiLCJ1cGRhdGVkQXNzZXRzIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJhcnIiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhcnNlRmxvYXQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZHByaWNlIiwiaWQiLCJzdGF0dXMiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInRoZW1lIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwiaDEiLCJQb3J0Zm9saW9OYW1lIiwiZm9ybSIsImRhdGEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/Portfolio/updatePortfolio/page.js\n"));

/***/ })

});