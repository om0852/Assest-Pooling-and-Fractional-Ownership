"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var D_Project_Assest_Pooling_and_Fractional_Ownership_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/login/route.js */ \"(rsc)/./src/app/api/login/route.js\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Project_Assest_Pooling_and_Fractional_Ownership_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/login/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdCU1Q0Fzc2VzdC1Qb29saW5nLWFuZC1GcmFjdGlvbmFsLU93bmVyc2hpcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3QlNUNBc3Nlc3QtUG9vbGluZy1hbmQtRnJhY3Rpb25hbC1Pd25lcnNoaXAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDaUg7QUFDakgsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8/ZjljOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFByb2plY3RcXFxcQXNzZXN0LVBvb2xpbmctYW5kLUZyYWN0aW9uYWwtT3duZXJzaGlwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCI7XG5jb25zdCBBcHBSb3V0ZVJvdXRlTW9kdWxlID0gbW9kdWxlLkFwcFJvdXRlUm91dGVNb2R1bGU7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFByb2plY3RcXFxcQXNzZXN0LVBvb2xpbmctYW5kLUZyYWN0aW9uYWwtT3duZXJzaGlwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xvZ2luL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/login/route.js":
/*!************************************!*\
  !*** ./src/app/api/login/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/mongoose */ \"(rsc)/./src/utils/mongoose.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/headers.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"(rsc)/./node_modules/crypto-js/index.js\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n\nasync function POST(req, res) {\n    try {\n        const body = await req.json();\n        if (body.email != \"\" || body.password != \"\") {\n            await (0,_utils_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                email: body.email\n            });\n            if (user) {\n                var role = user.role;\n                const bytes = CryptoJS.AES.decrypt(user.password, \"secretkey123\");\n                const decryptpass = bytes.toString(CryptoJS.enc.Utf8);\n                if (body.email === user.email && decryptpass === body.password) {\n                    var token = jwt.sign({\n                        name: user.name,\n                        email: user.email,\n                        address: user.address,\n                        pincode: user.pincode,\n                        phone: user.phone,\n                        role: user.role\n                    }, \"jwttoken\", {\n                        expiresIn: \"2days\"\n                    });\n                    (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)().set(\"role\", role);\n                    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                        status: 200,\n                        token,\n                        metamaskaddress: user.metamaskaddress,\n                        message: \"success\"\n                    });\n                } else {\n                    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                        status: 201\n                    }, {\n                        message: \"Invalid Credentials\"\n                    });\n                }\n            } else {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                    status: 400\n                }, {\n                    message: \"User not found\"\n                });\n            }\n        } else {\n            throw new Error(\"Enter All Fields\");\n        }\n    } catch (error) {\n        console.log(error.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 300,\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUNMO0FBQzNDLElBQUlHLFdBQVdDLG1CQUFPQSxDQUFDLDBEQUFXO0FBQ2xDLElBQUlDLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ2tCO0FBRTdCLGVBQWVHLEtBQUtDLEdBQUcsRUFBRUMsR0FBRztJQUNqQyxJQUFJO1FBRUYsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCLElBQUdELEtBQUtFLEtBQUssSUFBRSxNQUFJRixLQUFLRyxRQUFRLElBQUUsSUFDbEM7WUFDRSxNQUFNWiwyREFBU0E7WUFDakIsTUFBTWEsT0FBTyxNQUFNZCxvREFBSUEsQ0FBQ2UsT0FBTyxDQUFDO2dCQUFFSCxPQUFPRixLQUFLRSxLQUFLO1lBQUM7WUFDcEQsSUFBSUUsTUFBTTtnQkFDUixJQUFJRSxPQUFLRixLQUFLRSxJQUFJO2dCQUNsQixNQUFNQyxRQUFRZCxTQUFTZSxHQUFHLENBQUNDLE9BQU8sQ0FBQ0wsS0FBS0QsUUFBUSxFQUFFO2dCQUNsRCxNQUFNTyxjQUFjSCxNQUFNSSxRQUFRLENBQUNsQixTQUFTbUIsR0FBRyxDQUFDQyxJQUFJO2dCQUNwRCxJQUFJYixLQUFLRSxLQUFLLEtBQUdFLEtBQUtGLEtBQUssSUFBSVEsZ0JBQWdCVixLQUFLRyxRQUFRLEVBQUU7b0JBQzVELElBQUlXLFFBQVFuQixJQUFJb0IsSUFBSSxDQUFDO3dCQUFFQyxNQUFLWixLQUFLWSxJQUFJO3dCQUFDZCxPQUFNRSxLQUFLRixLQUFLO3dCQUFDZSxTQUFRYixLQUFLYSxPQUFPO3dCQUFDQyxTQUFRZCxLQUFLYyxPQUFPO3dCQUFDQyxPQUFNZixLQUFLZSxLQUFLO3dCQUFDYixNQUFLRixLQUFLRSxJQUFJO29CQUFDLEdBQUcsWUFBVzt3QkFBQ2MsV0FBVztvQkFBTztvQkFDbEt4QixxREFBT0EsR0FBR3lCLEdBQUcsQ0FBQyxRQUFPZjtvQkFDckIsT0FBT2Qsa0ZBQVlBLENBQUNTLElBQUksQ0FBQzt3QkFBRXFCLFFBQVE7d0JBQUlSO3dCQUFPUyxpQkFBZ0JuQixLQUFLbUIsZUFBZTt3QkFBRUMsU0FBUztvQkFBUztnQkFDeEcsT0FBTztvQkFDTCxPQUFPaEMsa0ZBQVlBLENBQUNTLElBQUksQ0FDdEI7d0JBQUVxQixRQUFRO29CQUFJLEdBQ2Q7d0JBQUVFLFNBQVM7b0JBQXNCO2dCQUVyQztZQUNGLE9BQU87Z0JBQ0wsT0FBT2hDLGtGQUFZQSxDQUFDUyxJQUFJLENBQUM7b0JBQUVxQixRQUFRO2dCQUFJLEdBQUc7b0JBQUVFLFNBQVM7Z0JBQWlCO1lBQ3hFO1FBQUMsT0FDRztZQUNGLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1GLE9BQU87UUFDekIsT0FBT2hDLGtGQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRXFCLFFBQVE7WUFBT0UsU0FBU0UsTUFBTUYsT0FBTztRQUFDO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8uL3NyYy9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzP2RiNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xyXG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmltcG9ydCB7Y29va2llc30gZnJvbSAnbmV4dC9oZWFkZXJzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGlmKGJvZHkuZW1haWwhPVwiXCJ8fGJvZHkucGFzc3dvcmQhPVwiXCIpXHJcbiAgICB7XHJcbiAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBib2R5LmVtYWlsIH0pO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgdmFyIHJvbGU9dXNlci5yb2xlXHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodXNlci5wYXNzd29yZCwgXCJzZWNyZXRrZXkxMjNcIik7XHJcbiAgICAgIGNvbnN0IGRlY3J5cHRwYXNzID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xyXG4gICAgICBpZiAoYm9keS5lbWFpbD09PXVzZXIuZW1haWwgJiYgZGVjcnlwdHBhc3MgPT09IGJvZHkucGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IG5hbWU6dXNlci5uYW1lLGVtYWlsOnVzZXIuZW1haWwsYWRkcmVzczp1c2VyLmFkZHJlc3MscGluY29kZTp1c2VyLnBpbmNvZGUscGhvbmU6dXNlci5waG9uZSxyb2xlOnVzZXIucm9sZSB9LCAnand0dG9rZW4nLHtleHBpcmVzSW46ICcyZGF5cyd9KTtcclxuICAgICAgICBjb29raWVzKCkuc2V0KFwicm9sZVwiLHJvbGUpXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiAyMDAsdG9rZW4gLG1ldGFtYXNrYWRkcmVzczp1c2VyLm1ldGFtYXNrYWRkcmVzcywgbWVzc2FnZTogXCJzdWNjZXNzXCJ9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICB7IHN0YXR1czogMjAxIH0sXHJcbiAgICAgICAgICB7IG1lc3NhZ2U6IFwiSW52YWxpZCBDcmVkZW50aWFsc1wiIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IDQwMCB9LCB7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmRcIiB9KTtcclxuICAgIH19XHJcbiAgICBlbHNle1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRlciBBbGwgRmllbGRzXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiAzMDAgICwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlVzZXIiLCJjb25uZWN0REIiLCJOZXh0UmVzcG9uc2UiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJqd3QiLCJjb29raWVzIiwiUE9TVCIsInJlcSIsInJlcyIsImJvZHkiLCJqc29uIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kT25lIiwicm9sZSIsImJ5dGVzIiwiQUVTIiwiZGVjcnlwdCIsImRlY3J5cHRwYXNzIiwidG9TdHJpbmciLCJlbmMiLCJVdGY4IiwidG9rZW4iLCJzaWduIiwibmFtZSIsImFkZHJlc3MiLCJwaW5jb2RlIiwicGhvbmUiLCJleHBpcmVzSW4iLCJzZXQiLCJzdGF0dXMiLCJtZXRhbWFza2FkZHJlc3MiLCJtZXNzYWdlIiwiRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/login/route.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        reqired: true\n    },\n    email: {\n        type: String,\n        reqired: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        reqired: true\n    },\n    address: {\n        type: String,\n        default: \"\"\n    },\n    organization: {\n        type: String,\n        default: \"\"\n    },\n    metamaskaddress: {\n        type: String,\n        default: \"\"\n    },\n    phone: {\n        type: String,\n        default: \"\"\n    },\n    pincode: {\n        type: Number\n    },\n    pic: {\n        type: String\n    },\n    role: {\n        type: String,\n        default: \"admin\"\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBR3pCLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ25DQyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFNBQVM7SUFBSztJQUNwQ0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxTQUFTO1FBQU1FLFFBQVE7SUFBSztJQUNuREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxTQUFTO0lBQUs7SUFDeENJLFNBQVM7UUFBRU4sTUFBTUM7UUFBUU0sU0FBUztJQUFHO0lBQ3JDQyxjQUFjO1FBQUVSLE1BQU1DO1FBQVFNLFNBQVM7SUFBRztJQUMxQ0UsaUJBQWlCO1FBQUVULE1BQU1DO1FBQVFNLFNBQVM7SUFBRztJQUM3Q0csT0FBTztRQUFFVixNQUFNQztRQUFRTSxTQUFTO0lBQUc7SUFDbkNJLFNBQVM7UUFBRVgsTUFBTVk7SUFBTztJQUN4QkMsS0FBSztRQUFFYixNQUFNQztJQUFPO0lBQ3BCYSxNQUFNO1FBQUVkLE1BQU1DO1FBQVFNLFNBQVM7SUFBUTtBQUMzQyxHQUFHO0lBQUVRLFlBQVk7QUFBSztBQUV0QnBCLFNBQVNxQixNQUFNLEdBQUcsQ0FBQztBQUNuQixpRUFBZXJCLFNBQVNzQixLQUFLLENBQUMsUUFBUXBCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8uL3NyYy9tb2RlbHMvVXNlci5qcz83ZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXFpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXFpcmVkOiB0cnVlIH0sXHJcbiAgICBhZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgb3JnYW5pemF0aW9uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgbWV0YW1hc2thZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgcGhvbmU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXHJcbiAgICBwaW5jb2RlOiB7IHR5cGU6IE51bWJlciB9LFxyXG4gICAgcGljOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiYWRtaW5cIiB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSlcclxuXHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxaXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhZGRyZXNzIiwiZGVmYXVsdCIsIm9yZ2FuaXphdGlvbiIsIm1ldGFtYXNrYWRkcmVzcyIsInBob25lIiwicGluY29kZSIsIk51bWJlciIsInBpYyIsInJvbGUiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/mongoose.js":
/*!*******************************!*\
  !*** ./src/utils/mongoose.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const MONGODB_URI = \"mongodb+srv://hrushitech51:gJhfiZl1up3KHwHz@cluster0.rtla2uf.mongodb.net/APFOS\";\n// const MONGODB_URI = \"mongodb://127.0.0.1:27017/AssestPooling\";\nconst MONGODB_URI = \"mongodb://APFOS35:UKV8CAgcn9q6Q6dM@ac-7uxgfia-shard-00-00.xiofc4d.mongodb.net:27017,ac-7uxgfia-shard-00-01.xiofc4d.mongodb.net:27017,ac-7uxgfia-shard-00-02.xiofc4d.mongodb.net:27017/?replicaSet=atlas-zqazy8-shard-0&ssl=true&authSource=admin\";\nif (!MONGODB_URI) {\n    throw new Error(\"please define evn variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        con: null,\n        promise: null\n    };\n}\nconst dbconnect = async ()=>{\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbconnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLHdHQUF3RztBQUN4RyxpRUFBaUU7QUFDakUsTUFBTUMsY0FBYztBQUVwQixJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT0osUUFBUTtBQUU1QixJQUFJLENBQUNHLFFBQVE7SUFDWEEsU0FBU0MsT0FBT0osUUFBUSxHQUFHO1FBQUVLLEtBQUs7UUFBTUMsU0FBUztJQUFLO0FBQ3hEO0FBRUEsTUFBTUMsWUFBWTtJQUNoQixJQUFJSixPQUFPSyxJQUFJLEVBQUU7UUFDZixPQUFPTCxPQUFPSyxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDTCxPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUcsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFFQVAsT0FBT0csT0FBTyxHQUFHTix1REFBZ0IsQ0FBQ0MsYUFBYVEsTUFBTUcsSUFBSSxDQUFDLENBQUNaO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkcsT0FBT0ssSUFBSSxHQUFHLE1BQU1MLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTyxHQUFHO1FBQ1ZWLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTztJQUNSO0lBRUEsT0FBT1YsT0FBT0ssSUFBSTtBQUNwQjtBQUVBLGlFQUFlRCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmx1ZWNoaXBhcnQvLi9zcmMvdXRpbHMvbW9uZ29vc2UuanM/NGM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG4vLyBjb25zdCBNT05HT0RCX1VSSSA9IFwibW9uZ29kYitzcnY6Ly9ocnVzaGl0ZWNoNTE6Z0poZmlabDF1cDNLSHdIekBjbHVzdGVyMC5ydGxhMnVmLm1vbmdvZGIubmV0L0FQRk9TXCI7XHJcbi8vIGNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L0Fzc2VzdFBvb2xpbmdcIjtcclxuY29uc3QgTU9OR09EQl9VUkkgPSBcIm1vbmdvZGI6Ly9BUEZPUzM1OlVLVjhDQWdjbjlxNlE2ZE1AYWMtN3V4Z2ZpYS1zaGFyZC0wMC0wMC54aW9mYzRkLm1vbmdvZGIubmV0OjI3MDE3LGFjLTd1eGdmaWEtc2hhcmQtMDAtMDEueGlvZmM0ZC5tb25nb2RiLm5ldDoyNzAxNyxhYy03dXhnZmlhLXNoYXJkLTAwLTAyLnhpb2ZjNGQubW9uZ29kYi5uZXQ6MjcwMTcvP3JlcGxpY2FTZXQ9YXRsYXMtenFhenk4LXNoYXJkLTAmc3NsPXRydWUmYXV0aFNvdXJjZT1hZG1pblwiO1xyXG5cclxuaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcInBsZWFzZSBkZWZpbmUgZXZuIHZhcmlhYmxlXCIpO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5jb25zdCBkYmNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJjb25uZWN0O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29uIiwicHJvbWlzZSIsImRiY29ubmVjdCIsImNvbm4iLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/crypto-js","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/yallist","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lru-cache","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();