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
exports.id = "app/api/sendContactEmail/route";
exports.ids = ["app/api/sendContactEmail/route"];
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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendContactEmail%2Froute&page=%2Fapi%2FsendContactEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendContactEmail%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendContactEmail%2Froute&page=%2Fapi%2FsendContactEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendContactEmail%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var D_Project_Assest_Pooling_and_Fractional_Ownership_src_app_api_sendContactEmail_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/sendContactEmail/route.js */ \"(rsc)/./src/app/api/sendContactEmail/route.js\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/sendContactEmail/route\",\n        pathname: \"/api/sendContactEmail\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendContactEmail/route\"\n    },\n    resolvedPagePath: \"D:\\\\Project\\\\Assest-Pooling-and-Fractional-Ownership\\\\src\\\\app\\\\api\\\\sendContactEmail\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Project_Assest_Pooling_and_Fractional_Ownership_src_app_api_sendContactEmail_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sendContactEmail/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kQ29udGFjdEVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kQ29udGFjdEVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZENvbnRhY3RFbWFpbCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdCU1Q0Fzc2VzdC1Qb29saW5nLWFuZC1GcmFjdGlvbmFsLU93bmVyc2hpcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3QlNUNBc3Nlc3QtUG9vbGluZy1hbmQtRnJhY3Rpb25hbC1Pd25lcnNoaXAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDNEg7QUFDNUgsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8/NDhhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFByb2plY3RcXFxcQXNzZXN0LVBvb2xpbmctYW5kLUZyYWN0aW9uYWwtT3duZXJzaGlwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNlbmRDb250YWN0RW1haWxcXFxccm91dGUuanNcIjtcbmNvbnN0IEFwcFJvdXRlUm91dGVNb2R1bGUgPSBtb2R1bGUuQXBwUm91dGVSb3V0ZU1vZHVsZTtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmRDb250YWN0RW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kQ29udGFjdEVtYWlsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kQ29udGFjdEVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUHJvamVjdFxcXFxBc3Nlc3QtUG9vbGluZy1hbmQtRnJhY3Rpb25hbC1Pd25lcnNoaXBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VuZENvbnRhY3RFbWFpbFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kQ29udGFjdEVtYWlsL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendContactEmail%2Froute&page=%2Fapi%2FsendContactEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendContactEmail%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sendContactEmail/route.js":
/*!***********************************************!*\
  !*** ./src/app/api/sendContactEmail/route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _utils_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/mongoose */ \"(rsc)/./src/utils/mongoose.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"(rsc)/./node_modules/crypto-js/index.js\");\nasync function POST(req, res) {\n    if (req.body) {\n        try {\n            const body = await req.json();\n            console.log(body);\n            const { email, subject, message } = body;\n            if (email && subject && message) {\n                await (0,_utils_mongoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n                    host: \"smtp.gmail.com\",\n                    port: 587,\n                    secure: false,\n                    auth: {\n                        user: \"hrushitech51@gmail.com\",\n                        pass: \"twzv uqed jlct rjsl\"\n                    }\n                });\n                try {\n                    // Send the email\n                    transporter.sendMail({\n                        from: {\n                            email\n                        },\n                        to: \"hrushitech51@gmail.com\",\n                        subject: `hello ${email}`,\n                        text: \"hello\",\n                        html: `<html> <head> <style type=\"text/css\" > .container{display: flex; flex-direction: column; justify-content: center; align-items: center ; padding: 2rem; } img{height: 70px; width: 170px; } </style> </head> <body> <div class='container'> <img src=\"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3d.iconscout.com%2F3d%2Fpremium%2Fthumb%2Fcolor-plate-4034565-3337294%400.png%3Ff%3Dwebp&tbnid=LVafsAHPb3fdXM&vet=12ahUKEwju97CnmrmDAxX6s2MGHVT-AyIQMygQegUIARCWAQ..i&imgrefurl=https%3A%2F%2Ficonscout.com%2F3d-illustrations%2Fcolor-plate&docid=zAOmlA_UILNE8M&w=450&h=450&q=color%20plate&ved=2ahUKEwju97CnmrmDAxX6s2MGHVT-AyIQMygQegUIARCWAQ\" alt=\"bluechipart.com\" /><br> <h1>New Message</h1> <br><div class=\"main\"> <br><h2> Email:<h4>${email} </h4> </h2><h3>Subject:${subject}</h3> <p> <bold>Message</bold>:${message} </p> <p style=\"margin: 0;\">To stop receiving these emails, you can <a href=\"https://sendgrid.com\" target=\"_blank\">unsubscribe</a> at any time.</p> <p style=\"margin: 0;\">Your Regard,</p> <br><p style=\"margin: 0;\">BluechipArt.com</p> </div> </div> </body> </html>`\n                    });\n                    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                        status: 200,\n                        error: \"success\"\n                    });\n                } catch (error) {\n                    console.error(\"Error:\", error);\n                    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                        status: 400,\n                        error: \"failed\"\n                    });\n                }\n            } else {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                    status: 201,\n                    error: \"Please Fill All Fields\"\n                });\n            }\n        } catch (error) {\n            console.log(error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                status: 300,\n                error: \"error\"\n            });\n        }\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n            status: 401,\n            error: \"Enter your email\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kQ29udGFjdEVtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ0k7QUFDUTtBQUNMO0FBQzNDLElBQUlJLFdBQVdDLG1CQUFPQSxDQUFDLDBEQUFXO0FBRzNCLGVBQWVDLEtBQUtDLEdBQUcsRUFBRUMsR0FBRztJQUUvQixJQUFJRCxJQUFJRSxJQUFJLEVBQUU7UUFDVixJQUFJO1lBQ0EsTUFBTUEsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1osTUFBTSxFQUFFSSxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdOO1lBQ3BDLElBQUlJLFNBQVNDLFdBQVdDLFNBQVM7Z0JBQzdCLE1BQU1iLDJEQUFTQTtnQkFFZixNQUFNYyxjQUFjaEIsdURBQTBCLENBQUM7b0JBQzNDa0IsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsTUFBTTt3QkFDRkMsTUFBTTt3QkFDTkMsTUFBTTtvQkFDVjtnQkFDSjtnQkFFQSxJQUFJO29CQUNBLGlCQUFpQjtvQkFDakJQLFlBQVlRLFFBQVEsQ0FBQzt3QkFDakJDLE1BQU07NEJBQUVaO3dCQUFNO3dCQUNkYSxJQUFJO3dCQUNKWixTQUFTLENBQUMsTUFBTSxFQUFFRCxNQUFNLENBQUM7d0JBQ3pCYyxNQUFNO3dCQUNOQyxNQUFNLENBQUMsMHRCQUEwdEIsRUFBRWYsTUFBTSx3QkFBd0IsRUFBRUMsUUFBUSwrQkFBK0IsRUFBRUMsUUFBUSxzUUFBc1EsQ0FBQztvQkFFL2pDO29CQUNBLE9BQU9aLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7d0JBQUVtQixRQUFRO3dCQUFLQyxPQUFPO29CQUFVO2dCQUM3RCxFQUFFLE9BQU9BLE9BQU87b0JBQ1puQixRQUFRbUIsS0FBSyxDQUFDLFVBQVVBO29CQUN4QixPQUFPM0Isa0ZBQVlBLENBQUNPLElBQUksQ0FBQzt3QkFBRW1CLFFBQVE7d0JBQUtDLE9BQU87b0JBQVM7Z0JBQzVEO1lBQ0osT0FBTztnQkFDSCxPQUFPM0Isa0ZBQVlBLENBQUNPLElBQUksQ0FBQztvQkFBRW1CLFFBQVE7b0JBQUtDLE9BQU87Z0JBQXlCO1lBQzVFO1FBQ0osRUFBRSxPQUFPQSxPQUFPO1lBQ1puQixRQUFRQyxHQUFHLENBQUNrQjtZQUNaLE9BQU8zQixrRkFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFbUIsUUFBUTtnQkFBS0MsT0FBTztZQUFRO1FBQzNEO0lBQ0osT0FDSztRQUNELE9BQU8zQixrRkFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVtQixRQUFRO1lBQUtDLE9BQU87UUFBbUI7SUFDdEU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVjaGlwYXJ0Ly4vc3JjL2FwcC9hcGkvc2VuZENvbnRhY3RFbWFpbC9yb3V0ZS5qcz81ZjU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi8uLi91dGlscy9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEsIHJlcykge1xyXG5cclxuICAgIGlmIChyZXEuYm9keSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSB9ID0gYm9keVxyXG4gICAgICAgICAgICBpZiAoZW1haWwgJiYgc3ViamVjdCAmJiBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgICAgICAgICAgICAgICAgICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IDU4NyxcclxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogJ2hydXNoaXRlY2g1MUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzOiAndHd6diB1cWVkIGpsY3QgcmpzbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgdGhlIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB7IGVtYWlsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcImhydXNoaXRlY2g1MUBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogYGhlbGxvICR7ZW1haWx9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJoZWxsb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBgPGh0bWw+IDxoZWFkPiA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgPiAuY29udGFpbmVye2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyIDsgcGFkZGluZzogMnJlbTsgfSBpbWd7aGVpZ2h0OiA3MHB4OyB3aWR0aDogMTcwcHg7IH0gPC9zdHlsZT4gPC9oZWFkPiA8Ym9keT4gPGRpdiBjbGFzcz0nY29udGFpbmVyJz4gPGltZyBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZjZG4zZC5pY29uc2NvdXQuY29tJTJGM2QlMkZwcmVtaXVtJTJGdGh1bWIlMkZjb2xvci1wbGF0ZS00MDM0NTY1LTMzMzcyOTQlNDAwLnBuZyUzRmYlM0R3ZWJwJnRibmlkPUxWYWZzQUhQYjNmZFhNJnZldD0xMmFoVUtFd2p1OTdDbm1ybURBeFg2czJNR0hWVC1BeUlRTXlnUWVnVUlBUkNXQVEuLmkmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGaWNvbnNjb3V0LmNvbSUyRjNkLWlsbHVzdHJhdGlvbnMlMkZjb2xvci1wbGF0ZSZkb2NpZD16QU9tbEFfVUlMTkU4TSZ3PTQ1MCZoPTQ1MCZxPWNvbG9yJTIwcGxhdGUmdmVkPTJhaFVLRXdqdTk3Q25tcm1EQXhYNnMyTUdIVlQtQXlJUU15Z1FlZ1VJQVJDV0FRXCIgYWx0PVwiYmx1ZWNoaXBhcnQuY29tXCIgLz48YnI+IDxoMT5OZXcgTWVzc2FnZTwvaDE+IDxicj48ZGl2IGNsYXNzPVwibWFpblwiPiA8YnI+PGgyPiBFbWFpbDo8aDQ+JHtlbWFpbH0gPC9oND4gPC9oMj48aDM+U3ViamVjdDoke3N1YmplY3R9PC9oMz4gPHA+IDxib2xkPk1lc3NhZ2U8L2JvbGQ+OiR7bWVzc2FnZX0gPC9wPiA8cCBzdHlsZT1cIm1hcmdpbjogMDtcIj5UbyBzdG9wIHJlY2VpdmluZyB0aGVzZSBlbWFpbHMsIHlvdSBjYW4gPGEgaHJlZj1cImh0dHBzOi8vc2VuZGdyaWQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+dW5zdWJzY3JpYmU8L2E+IGF0IGFueSB0aW1lLjwvcD4gPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+WW91ciBSZWdhcmQsPC9wPiA8YnI+PHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+Qmx1ZWNoaXBBcnQuY29tPC9wPiA8L2Rpdj4gPC9kaXY+IDwvYm9keT4gPC9odG1sPmAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogMjAwLCBlcnJvcjogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogNDAwLCBlcnJvcjogXCJmYWlsZWRcIiB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogMjAxLCBlcnJvcjogXCJQbGVhc2UgRmlsbCBBbGwgRmllbGRzXCIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogMzAwLCBlcnJvcjogXCJlcnJvclwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogNDAxLCBlcnJvcjogXCJFbnRlciB5b3VyIGVtYWlsXCIgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibm9kZW1haWxlciIsIlVzZXIiLCJjb25uZWN0REIiLCJOZXh0UmVzcG9uc2UiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJQT1NUIiwicmVxIiwicmVzIiwiYm9keSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInRleHQiLCJodG1sIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sendContactEmail/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/crypto-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendContactEmail%2Froute&page=%2Fapi%2FsendContactEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendContactEmail%2Froute.js&appDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProject%5CAssest-Pooling-and-Fractional-Ownership&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();