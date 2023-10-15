"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwa";
exports.ids = ["vendor-chunks/jwa"];
exports.modules = {

/***/ "(rsc)/./node_modules/jwa/index.js":
/*!***********************************!*\
  !*** ./node_modules/jwa/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar bufferEqual = __webpack_require__(/*! buffer-equal-constant-time */ \"(rsc)/./node_modules/buffer-equal-constant-time/index.js\");\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\nvar formatEcdsa = __webpack_require__(/*! ecdsa-sig-formatter */ \"(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar MSG_INVALID_ALGORITHM = '\"%s\" is not a valid algorithm.\\n  Supported algorithms are:\\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".';\nvar MSG_INVALID_SECRET = \"secret must be a string or buffer\";\nvar MSG_INVALID_VERIFIER_KEY = \"key must be a string or a buffer\";\nvar MSG_INVALID_SIGNER_KEY = \"key must be a string, a buffer or an object\";\nvar supportsKeyObjects = typeof crypto.createPublicKey === \"function\";\nif (supportsKeyObjects) {\n    MSG_INVALID_VERIFIER_KEY += \" or a KeyObject\";\n    MSG_INVALID_SECRET += \"or a KeyObject\";\n}\nfunction checkIsPublicKey(key) {\n    if (Buffer.isBuffer(key)) {\n        return;\n    }\n    if (typeof key === \"string\") {\n        return;\n    }\n    if (!supportsKeyObjects) {\n        throw typeError(MSG_INVALID_VERIFIER_KEY);\n    }\n    if (typeof key !== \"object\") {\n        throw typeError(MSG_INVALID_VERIFIER_KEY);\n    }\n    if (typeof key.type !== \"string\") {\n        throw typeError(MSG_INVALID_VERIFIER_KEY);\n    }\n    if (typeof key.asymmetricKeyType !== \"string\") {\n        throw typeError(MSG_INVALID_VERIFIER_KEY);\n    }\n    if (typeof key.export !== \"function\") {\n        throw typeError(MSG_INVALID_VERIFIER_KEY);\n    }\n}\n;\nfunction checkIsPrivateKey(key) {\n    if (Buffer.isBuffer(key)) {\n        return;\n    }\n    if (typeof key === \"string\") {\n        return;\n    }\n    if (typeof key === \"object\") {\n        return;\n    }\n    throw typeError(MSG_INVALID_SIGNER_KEY);\n}\n;\nfunction checkIsSecretKey(key) {\n    if (Buffer.isBuffer(key)) {\n        return;\n    }\n    if (typeof key === \"string\") {\n        return key;\n    }\n    if (!supportsKeyObjects) {\n        throw typeError(MSG_INVALID_SECRET);\n    }\n    if (typeof key !== \"object\") {\n        throw typeError(MSG_INVALID_SECRET);\n    }\n    if (key.type !== \"secret\") {\n        throw typeError(MSG_INVALID_SECRET);\n    }\n    if (typeof key.export !== \"function\") {\n        throw typeError(MSG_INVALID_SECRET);\n    }\n}\nfunction fromBase64(base64) {\n    return base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction toBase64(base64url) {\n    base64url = base64url.toString();\n    var padding = 4 - base64url.length % 4;\n    if (padding !== 4) {\n        for(var i = 0; i < padding; ++i){\n            base64url += \"=\";\n        }\n    }\n    return base64url.replace(/\\-/g, \"+\").replace(/_/g, \"/\");\n}\nfunction typeError(template) {\n    var args = [].slice.call(arguments, 1);\n    var errMsg = util.format.bind(util, template).apply(null, args);\n    return new TypeError(errMsg);\n}\nfunction bufferOrString(obj) {\n    return Buffer.isBuffer(obj) || typeof obj === \"string\";\n}\nfunction normalizeInput(thing) {\n    if (!bufferOrString(thing)) thing = JSON.stringify(thing);\n    return thing;\n}\nfunction createHmacSigner(bits) {\n    return function sign(thing, secret) {\n        checkIsSecretKey(secret);\n        thing = normalizeInput(thing);\n        var hmac = crypto.createHmac(\"sha\" + bits, secret);\n        var sig = (hmac.update(thing), hmac.digest(\"base64\"));\n        return fromBase64(sig);\n    };\n}\nfunction createHmacVerifier(bits) {\n    return function verify(thing, signature, secret) {\n        var computedSig = createHmacSigner(bits)(thing, secret);\n        return bufferEqual(Buffer.from(signature), Buffer.from(computedSig));\n    };\n}\nfunction createKeySigner(bits) {\n    return function sign(thing, privateKey) {\n        checkIsPrivateKey(privateKey);\n        thing = normalizeInput(thing);\n        // Even though we are specifying \"RSA\" here, this works with ECDSA\n        // keys as well.\n        var signer = crypto.createSign(\"RSA-SHA\" + bits);\n        var sig = (signer.update(thing), signer.sign(privateKey, \"base64\"));\n        return fromBase64(sig);\n    };\n}\nfunction createKeyVerifier(bits) {\n    return function verify(thing, signature, publicKey) {\n        checkIsPublicKey(publicKey);\n        thing = normalizeInput(thing);\n        signature = toBase64(signature);\n        var verifier = crypto.createVerify(\"RSA-SHA\" + bits);\n        verifier.update(thing);\n        return verifier.verify(publicKey, signature, \"base64\");\n    };\n}\nfunction createPSSKeySigner(bits) {\n    return function sign(thing, privateKey) {\n        checkIsPrivateKey(privateKey);\n        thing = normalizeInput(thing);\n        var signer = crypto.createSign(\"RSA-SHA\" + bits);\n        var sig = (signer.update(thing), signer.sign({\n            key: privateKey,\n            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,\n            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST\n        }, \"base64\"));\n        return fromBase64(sig);\n    };\n}\nfunction createPSSKeyVerifier(bits) {\n    return function verify(thing, signature, publicKey) {\n        checkIsPublicKey(publicKey);\n        thing = normalizeInput(thing);\n        signature = toBase64(signature);\n        var verifier = crypto.createVerify(\"RSA-SHA\" + bits);\n        verifier.update(thing);\n        return verifier.verify({\n            key: publicKey,\n            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,\n            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST\n        }, signature, \"base64\");\n    };\n}\nfunction createECDSASigner(bits) {\n    var inner = createKeySigner(bits);\n    return function sign() {\n        var signature = inner.apply(null, arguments);\n        signature = formatEcdsa.derToJose(signature, \"ES\" + bits);\n        return signature;\n    };\n}\nfunction createECDSAVerifer(bits) {\n    var inner = createKeyVerifier(bits);\n    return function verify(thing, signature, publicKey) {\n        signature = formatEcdsa.joseToDer(signature, \"ES\" + bits).toString(\"base64\");\n        var result = inner(thing, signature, publicKey);\n        return result;\n    };\n}\nfunction createNoneSigner() {\n    return function sign() {\n        return \"\";\n    };\n}\nfunction createNoneVerifier() {\n    return function verify(thing, signature) {\n        return signature === \"\";\n    };\n}\nmodule.exports = function jwa(algorithm) {\n    var signerFactories = {\n        hs: createHmacSigner,\n        rs: createKeySigner,\n        ps: createPSSKeySigner,\n        es: createECDSASigner,\n        none: createNoneSigner\n    };\n    var verifierFactories = {\n        hs: createHmacVerifier,\n        rs: createKeyVerifier,\n        ps: createPSSKeyVerifier,\n        es: createECDSAVerifer,\n        none: createNoneVerifier\n    };\n    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);\n    if (!match) throw typeError(MSG_INVALID_ALGORITHM, algorithm);\n    var algo = (match[1] || match[3]).toLowerCase();\n    var bits = match[2];\n    return {\n        sign: signerFactories[algo](bits),\n        verify: verifierFactories[algo](bits)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUEsS0FBSyxDQUFDLEVBQUUsRUFBRUUsV0FBVztJQUM3QyxJQUFJaEQsT0FBTzhDLEtBQUssQ0FBQyxFQUFFO0lBRW5CLE9BQU87UUFDTDdDLE1BQU1zQyxlQUFlLENBQUNRLEtBQUssQ0FBQy9DO1FBQzVCUyxRQUFRb0MsaUJBQWlCLENBQUNFLEtBQUssQ0FBQy9DO0lBQ2xDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8uL25vZGVfbW9kdWxlcy9qd2EvaW5kZXguanM/YzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYnVmZmVyRXF1YWwgPSByZXF1aXJlKCdidWZmZXItZXF1YWwtY29uc3RhbnQtdGltZScpO1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xudmFyIGZvcm1hdEVjZHNhID0gcmVxdWlyZSgnZWNkc2Etc2lnLWZvcm1hdHRlcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBNU0dfSU5WQUxJRF9BTEdPUklUSE0gPSAnXCIlc1wiIGlzIG5vdCBhIHZhbGlkIGFsZ29yaXRobS5cXG4gIFN1cHBvcnRlZCBhbGdvcml0aG1zIGFyZTpcXG4gIFwiSFMyNTZcIiwgXCJIUzM4NFwiLCBcIkhTNTEyXCIsIFwiUlMyNTZcIiwgXCJSUzM4NFwiLCBcIlJTNTEyXCIsIFwiUFMyNTZcIiwgXCJQUzM4NFwiLCBcIlBTNTEyXCIsIFwiRVMyNTZcIiwgXCJFUzM4NFwiLCBcIkVTNTEyXCIgYW5kIFwibm9uZVwiLidcbnZhciBNU0dfSU5WQUxJRF9TRUNSRVQgPSAnc2VjcmV0IG11c3QgYmUgYSBzdHJpbmcgb3IgYnVmZmVyJztcbnZhciBNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkgPSAna2V5IG11c3QgYmUgYSBzdHJpbmcgb3IgYSBidWZmZXInO1xudmFyIE1TR19JTlZBTElEX1NJR05FUl9LRVkgPSAna2V5IG11c3QgYmUgYSBzdHJpbmcsIGEgYnVmZmVyIG9yIGFuIG9iamVjdCc7XG5cbnZhciBzdXBwb3J0c0tleU9iamVjdHMgPSB0eXBlb2YgY3J5cHRvLmNyZWF0ZVB1YmxpY0tleSA9PT0gJ2Z1bmN0aW9uJztcbmlmIChzdXBwb3J0c0tleU9iamVjdHMpIHtcbiAgTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZICs9ICcgb3IgYSBLZXlPYmplY3QnO1xuICBNU0dfSU5WQUxJRF9TRUNSRVQgKz0gJ29yIGEgS2V5T2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gY2hlY2tJc1B1YmxpY0tleShrZXkpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzdXBwb3J0c0tleU9iamVjdHMpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkudHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5LmFzeW1tZXRyaWNLZXlUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkuZXhwb3J0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNoZWNrSXNQcml2YXRlS2V5KGtleSkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfU0lHTkVSX0tFWSk7XG59O1xuXG5mdW5jdGlvbiBjaGVja0lzU2VjcmV0S2V5KGtleSkge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaWYgKCFzdXBwb3J0c0tleU9iamVjdHMpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfU0VDUkVUKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9TRUNSRVQpO1xuICB9XG5cbiAgaWYgKGtleS50eXBlICE9PSAnc2VjcmV0Jykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9TRUNSRVQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkuZXhwb3J0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1NFQ1JFVCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgcmV0dXJuIGJhc2U2NFxuICAgIC5yZXBsYWNlKC89L2csICcnKVxuICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gdG9CYXNlNjQoYmFzZTY0dXJsKSB7XG4gIGJhc2U2NHVybCA9IGJhc2U2NHVybC50b1N0cmluZygpO1xuXG4gIHZhciBwYWRkaW5nID0gNCAtIGJhc2U2NHVybC5sZW5ndGggJSA0O1xuICBpZiAocGFkZGluZyAhPT0gNCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkZGluZzsgKytpKSB7XG4gICAgICBiYXNlNjR1cmwgKz0gJz0nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiYXNlNjR1cmxcbiAgICAucmVwbGFjZSgvXFwtL2csICcrJylcbiAgICAucmVwbGFjZSgvXy9nLCAnLycpO1xufVxuXG5mdW5jdGlvbiB0eXBlRXJyb3IodGVtcGxhdGUpIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBlcnJNc2cgPSB1dGlsLmZvcm1hdC5iaW5kKHV0aWwsIHRlbXBsYXRlKS5hcHBseShudWxsLCBhcmdzKTtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoZXJyTXNnKTtcbn1cblxuZnVuY3Rpb24gYnVmZmVyT3JTdHJpbmcob2JqKSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIob2JqKSB8fCB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSW5wdXQodGhpbmcpIHtcbiAgaWYgKCFidWZmZXJPclN0cmluZyh0aGluZykpXG4gICAgdGhpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGluZyk7XG4gIHJldHVybiB0aGluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG1hY1NpZ25lcihiaXRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzaWduKHRoaW5nLCBzZWNyZXQpIHtcbiAgICBjaGVja0lzU2VjcmV0S2V5KHNlY3JldCk7XG4gICAgdGhpbmcgPSBub3JtYWxpemVJbnB1dCh0aGluZyk7XG4gICAgdmFyIGhtYWMgPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhJyArIGJpdHMsIHNlY3JldCk7XG4gICAgdmFyIHNpZyA9IChobWFjLnVwZGF0ZSh0aGluZyksIGhtYWMuZGlnZXN0KCdiYXNlNjQnKSlcbiAgICByZXR1cm4gZnJvbUJhc2U2NChzaWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhtYWNWZXJpZmllcihiaXRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2ZXJpZnkodGhpbmcsIHNpZ25hdHVyZSwgc2VjcmV0KSB7XG4gICAgdmFyIGNvbXB1dGVkU2lnID0gY3JlYXRlSG1hY1NpZ25lcihiaXRzKSh0aGluZywgc2VjcmV0KTtcbiAgICByZXR1cm4gYnVmZmVyRXF1YWwoQnVmZmVyLmZyb20oc2lnbmF0dXJlKSwgQnVmZmVyLmZyb20oY29tcHV0ZWRTaWcpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlTaWduZXIoYml0cykge1xuIHJldHVybiBmdW5jdGlvbiBzaWduKHRoaW5nLCBwcml2YXRlS2V5KSB7XG4gICAgY2hlY2tJc1ByaXZhdGVLZXkocHJpdmF0ZUtleSk7XG4gICAgdGhpbmcgPSBub3JtYWxpemVJbnB1dCh0aGluZyk7XG4gICAgLy8gRXZlbiB0aG91Z2ggd2UgYXJlIHNwZWNpZnlpbmcgXCJSU0FcIiBoZXJlLCB0aGlzIHdvcmtzIHdpdGggRUNEU0FcbiAgICAvLyBrZXlzIGFzIHdlbGwuXG4gICAgdmFyIHNpZ25lciA9IGNyeXB0by5jcmVhdGVTaWduKCdSU0EtU0hBJyArIGJpdHMpO1xuICAgIHZhciBzaWcgPSAoc2lnbmVyLnVwZGF0ZSh0aGluZyksIHNpZ25lci5zaWduKHByaXZhdGVLZXksICdiYXNlNjQnKSk7XG4gICAgcmV0dXJuIGZyb21CYXNlNjQoc2lnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlWZXJpZmllcihiaXRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2ZXJpZnkodGhpbmcsIHNpZ25hdHVyZSwgcHVibGljS2V5KSB7XG4gICAgY2hlY2tJc1B1YmxpY0tleShwdWJsaWNLZXkpO1xuICAgIHRoaW5nID0gbm9ybWFsaXplSW5wdXQodGhpbmcpO1xuICAgIHNpZ25hdHVyZSA9IHRvQmFzZTY0KHNpZ25hdHVyZSk7XG4gICAgdmFyIHZlcmlmaWVyID0gY3J5cHRvLmNyZWF0ZVZlcmlmeSgnUlNBLVNIQScgKyBiaXRzKTtcbiAgICB2ZXJpZmllci51cGRhdGUodGhpbmcpO1xuICAgIHJldHVybiB2ZXJpZmllci52ZXJpZnkocHVibGljS2V5LCBzaWduYXR1cmUsICdiYXNlNjQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQU1NLZXlTaWduZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gc2lnbih0aGluZywgcHJpdmF0ZUtleSkge1xuICAgIGNoZWNrSXNQcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgIHRoaW5nID0gbm9ybWFsaXplSW5wdXQodGhpbmcpO1xuICAgIHZhciBzaWduZXIgPSBjcnlwdG8uY3JlYXRlU2lnbignUlNBLVNIQScgKyBiaXRzKTtcbiAgICB2YXIgc2lnID0gKHNpZ25lci51cGRhdGUodGhpbmcpLCBzaWduZXIuc2lnbih7XG4gICAgICBrZXk6IHByaXZhdGVLZXksXG4gICAgICBwYWRkaW5nOiBjcnlwdG8uY29uc3RhbnRzLlJTQV9QS0NTMV9QU1NfUEFERElORyxcbiAgICAgIHNhbHRMZW5ndGg6IGNyeXB0by5jb25zdGFudHMuUlNBX1BTU19TQUxUTEVOX0RJR0VTVFxuICAgIH0sICdiYXNlNjQnKSk7XG4gICAgcmV0dXJuIGZyb21CYXNlNjQoc2lnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQU1NLZXlWZXJpZmllcihiaXRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiB2ZXJpZnkodGhpbmcsIHNpZ25hdHVyZSwgcHVibGljS2V5KSB7XG4gICAgY2hlY2tJc1B1YmxpY0tleShwdWJsaWNLZXkpO1xuICAgIHRoaW5nID0gbm9ybWFsaXplSW5wdXQodGhpbmcpO1xuICAgIHNpZ25hdHVyZSA9IHRvQmFzZTY0KHNpZ25hdHVyZSk7XG4gICAgdmFyIHZlcmlmaWVyID0gY3J5cHRvLmNyZWF0ZVZlcmlmeSgnUlNBLVNIQScgKyBiaXRzKTtcbiAgICB2ZXJpZmllci51cGRhdGUodGhpbmcpO1xuICAgIHJldHVybiB2ZXJpZmllci52ZXJpZnkoe1xuICAgICAga2V5OiBwdWJsaWNLZXksXG4gICAgICBwYWRkaW5nOiBjcnlwdG8uY29uc3RhbnRzLlJTQV9QS0NTMV9QU1NfUEFERElORyxcbiAgICAgIHNhbHRMZW5ndGg6IGNyeXB0by5jb25zdGFudHMuUlNBX1BTU19TQUxUTEVOX0RJR0VTVFxuICAgIH0sIHNpZ25hdHVyZSwgJ2Jhc2U2NCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVDRFNBU2lnbmVyKGJpdHMpIHtcbiAgdmFyIGlubmVyID0gY3JlYXRlS2V5U2lnbmVyKGJpdHMpO1xuICByZXR1cm4gZnVuY3Rpb24gc2lnbigpIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gaW5uZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBzaWduYXR1cmUgPSBmb3JtYXRFY2RzYS5kZXJUb0pvc2Uoc2lnbmF0dXJlLCAnRVMnICsgYml0cyk7XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRUNEU0FWZXJpZmVyKGJpdHMpIHtcbiAgdmFyIGlubmVyID0gY3JlYXRlS2V5VmVyaWZpZXIoYml0cyk7XG4gIHJldHVybiBmdW5jdGlvbiB2ZXJpZnkodGhpbmcsIHNpZ25hdHVyZSwgcHVibGljS2V5KSB7XG4gICAgc2lnbmF0dXJlID0gZm9ybWF0RWNkc2Euam9zZVRvRGVyKHNpZ25hdHVyZSwgJ0VTJyArIGJpdHMpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB2YXIgcmVzdWx0ID0gaW5uZXIodGhpbmcsIHNpZ25hdHVyZSwgcHVibGljS2V5KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb25lU2lnbmVyKCkge1xuICByZXR1cm4gZnVuY3Rpb24gc2lnbigpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9uZVZlcmlmaWVyKCkge1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlID09PSAnJztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGp3YShhbGdvcml0aG0pIHtcbiAgdmFyIHNpZ25lckZhY3RvcmllcyA9IHtcbiAgICBoczogY3JlYXRlSG1hY1NpZ25lcixcbiAgICByczogY3JlYXRlS2V5U2lnbmVyLFxuICAgIHBzOiBjcmVhdGVQU1NLZXlTaWduZXIsXG4gICAgZXM6IGNyZWF0ZUVDRFNBU2lnbmVyLFxuICAgIG5vbmU6IGNyZWF0ZU5vbmVTaWduZXIsXG4gIH1cbiAgdmFyIHZlcmlmaWVyRmFjdG9yaWVzID0ge1xuICAgIGhzOiBjcmVhdGVIbWFjVmVyaWZpZXIsXG4gICAgcnM6IGNyZWF0ZUtleVZlcmlmaWVyLFxuICAgIHBzOiBjcmVhdGVQU1NLZXlWZXJpZmllcixcbiAgICBlczogY3JlYXRlRUNEU0FWZXJpZmVyLFxuICAgIG5vbmU6IGNyZWF0ZU5vbmVWZXJpZmllcixcbiAgfVxuICB2YXIgbWF0Y2ggPSBhbGdvcml0aG0ubWF0Y2goL14oUlN8UFN8RVN8SFMpKDI1NnwzODR8NTEyKSR8Xihub25lKSQvaSk7XG4gIGlmICghbWF0Y2gpXG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX0FMR09SSVRITSwgYWxnb3JpdGhtKTtcbiAgdmFyIGFsZ28gPSAobWF0Y2hbMV0gfHwgbWF0Y2hbM10pLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBiaXRzID0gbWF0Y2hbMl07XG5cbiAgcmV0dXJuIHtcbiAgICBzaWduOiBzaWduZXJGYWN0b3JpZXNbYWxnb10oYml0cyksXG4gICAgdmVyaWZ5OiB2ZXJpZmllckZhY3Rvcmllc1thbGdvXShiaXRzKSxcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJidWZmZXJFcXVhbCIsInJlcXVpcmUiLCJCdWZmZXIiLCJjcnlwdG8iLCJmb3JtYXRFY2RzYSIsInV0aWwiLCJNU0dfSU5WQUxJRF9BTEdPUklUSE0iLCJNU0dfSU5WQUxJRF9TRUNSRVQiLCJNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkiLCJNU0dfSU5WQUxJRF9TSUdORVJfS0VZIiwic3VwcG9ydHNLZXlPYmplY3RzIiwiY3JlYXRlUHVibGljS2V5IiwiY2hlY2tJc1B1YmxpY0tleSIsImtleSIsImlzQnVmZmVyIiwidHlwZUVycm9yIiwidHlwZSIsImFzeW1tZXRyaWNLZXlUeXBlIiwiZXhwb3J0IiwiY2hlY2tJc1ByaXZhdGVLZXkiLCJjaGVja0lzU2VjcmV0S2V5IiwiZnJvbUJhc2U2NCIsImJhc2U2NCIsInJlcGxhY2UiLCJ0b0Jhc2U2NCIsImJhc2U2NHVybCIsInRvU3RyaW5nIiwicGFkZGluZyIsImxlbmd0aCIsImkiLCJ0ZW1wbGF0ZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJlcnJNc2ciLCJmb3JtYXQiLCJiaW5kIiwiYXBwbHkiLCJUeXBlRXJyb3IiLCJidWZmZXJPclN0cmluZyIsIm9iaiIsIm5vcm1hbGl6ZUlucHV0IiwidGhpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlSG1hY1NpZ25lciIsImJpdHMiLCJzaWduIiwic2VjcmV0IiwiaG1hYyIsImNyZWF0ZUhtYWMiLCJzaWciLCJ1cGRhdGUiLCJkaWdlc3QiLCJjcmVhdGVIbWFjVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzaWduYXR1cmUiLCJjb21wdXRlZFNpZyIsImZyb20iLCJjcmVhdGVLZXlTaWduZXIiLCJwcml2YXRlS2V5Iiwic2lnbmVyIiwiY3JlYXRlU2lnbiIsImNyZWF0ZUtleVZlcmlmaWVyIiwicHVibGljS2V5IiwidmVyaWZpZXIiLCJjcmVhdGVWZXJpZnkiLCJjcmVhdGVQU1NLZXlTaWduZXIiLCJjb25zdGFudHMiLCJSU0FfUEtDUzFfUFNTX1BBRERJTkciLCJzYWx0TGVuZ3RoIiwiUlNBX1BTU19TQUxUTEVOX0RJR0VTVCIsImNyZWF0ZVBTU0tleVZlcmlmaWVyIiwiY3JlYXRlRUNEU0FTaWduZXIiLCJpbm5lciIsImRlclRvSm9zZSIsImNyZWF0ZUVDRFNBVmVyaWZlciIsImpvc2VUb0RlciIsInJlc3VsdCIsImNyZWF0ZU5vbmVTaWduZXIiLCJjcmVhdGVOb25lVmVyaWZpZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiandhIiwiYWxnb3JpdGhtIiwic2lnbmVyRmFjdG9yaWVzIiwiaHMiLCJycyIsInBzIiwiZXMiLCJub25lIiwidmVyaWZpZXJGYWN0b3JpZXMiLCJtYXRjaCIsImFsZ28iLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jwa/index.js\n");

/***/ })

};
;