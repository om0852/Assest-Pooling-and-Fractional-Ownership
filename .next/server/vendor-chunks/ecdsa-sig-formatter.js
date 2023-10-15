"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ecdsa-sig-formatter";
exports.ids = ["vendor-chunks/ecdsa-sig-formatter"];
exports.modules = {

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\nvar MAX_OCTET = 0x80, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 0x20, TAG_SEQ = 0x10, TAG_INT = 0x02, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;\nfunction base64Url(base64) {\n    return base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction signatureAsBuffer(signature) {\n    if (Buffer.isBuffer(signature)) {\n        return signature;\n    } else if (\"string\" === typeof signature) {\n        return Buffer.from(signature, \"base64\");\n    }\n    throw new TypeError(\"ECDSA signature must be a Base64 string or a Buffer\");\n}\nfunction derToJose(signature, alg) {\n    signature = signatureAsBuffer(signature);\n    var paramBytes = getParamBytesForAlg(alg);\n    // the DER encoded param should at most be the param size, plus a padding\n    // zero, since due to being a signed integer\n    var maxEncodedParamLength = paramBytes + 1;\n    var inputLength = signature.length;\n    var offset = 0;\n    if (signature[offset++] !== ENCODED_TAG_SEQ) {\n        throw new Error('Could not find expected \"seq\"');\n    }\n    var seqLength = signature[offset++];\n    if (seqLength === (MAX_OCTET | 1)) {\n        seqLength = signature[offset++];\n    }\n    if (inputLength - offset < seqLength) {\n        throw new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n    }\n    if (signature[offset++] !== ENCODED_TAG_INT) {\n        throw new Error('Could not find expected \"int\" for \"r\"');\n    }\n    var rLength = signature[offset++];\n    if (inputLength - offset - 2 < rLength) {\n        throw new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n    }\n    if (maxEncodedParamLength < rLength) {\n        throw new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n    }\n    var rOffset = offset;\n    offset += rLength;\n    if (signature[offset++] !== ENCODED_TAG_INT) {\n        throw new Error('Could not find expected \"int\" for \"s\"');\n    }\n    var sLength = signature[offset++];\n    if (inputLength - offset !== sLength) {\n        throw new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n    }\n    if (maxEncodedParamLength < sLength) {\n        throw new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n    }\n    var sOffset = offset;\n    offset += sLength;\n    if (offset !== inputLength) {\n        throw new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n    }\n    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;\n    var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n    for(offset = 0; offset < rPadding; ++offset){\n        dst[offset] = 0;\n    }\n    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n    offset = paramBytes;\n    for(var o = offset; offset < o + sPadding; ++offset){\n        dst[offset] = 0;\n    }\n    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n    dst = dst.toString(\"base64\");\n    dst = base64Url(dst);\n    return dst;\n}\nfunction countPadding(buf, start, stop) {\n    var padding = 0;\n    while(start + padding < stop && buf[start + padding] === 0){\n        ++padding;\n    }\n    var needsSign = buf[start + padding] >= MAX_OCTET;\n    if (needsSign) {\n        --padding;\n    }\n    return padding;\n}\nfunction joseToDer(signature, alg) {\n    signature = signatureAsBuffer(signature);\n    var paramBytes = getParamBytesForAlg(alg);\n    var signatureBytes = signature.length;\n    if (signatureBytes !== paramBytes * 2) {\n        throw new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n    }\n    var rPadding = countPadding(signature, 0, paramBytes);\n    var sPadding = countPadding(signature, paramBytes, signature.length);\n    var rLength = paramBytes - rPadding;\n    var sLength = paramBytes - sPadding;\n    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n    var shortLength = rsBytes < MAX_OCTET;\n    var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n    var offset = 0;\n    dst[offset++] = ENCODED_TAG_SEQ;\n    if (shortLength) {\n        // Bit 8 has value \"0\"\n        // bits 7-1 give the length.\n        dst[offset++] = rsBytes;\n    } else {\n        // Bit 8 of first octet has value \"1\"\n        // bits 7-1 give the number of additional length octets.\n        dst[offset++] = MAX_OCTET | 1;\n        // length, base 256\n        dst[offset++] = rsBytes & 0xff;\n    }\n    dst[offset++] = ENCODED_TAG_INT;\n    dst[offset++] = rLength;\n    if (rPadding < 0) {\n        dst[offset++] = 0;\n        offset += signature.copy(dst, offset, 0, paramBytes);\n    } else {\n        offset += signature.copy(dst, offset, rPadding, paramBytes);\n    }\n    dst[offset++] = ENCODED_TAG_INT;\n    dst[offset++] = sLength;\n    if (sPadding < 0) {\n        dst[offset++] = 0;\n        signature.copy(dst, offset, paramBytes);\n    } else {\n        signature.copy(dst, offset, paramBytes + sPadding);\n    }\n    return dst;\n}\nmodule.exports = {\n    derToJose: derToJose,\n    joseToDer: joseToDer\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvZWNkc2Etc2lnLWZvcm1hdHRlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFNBQVNDLDRGQUE2QjtBQUUxQyxJQUFJQyxzQkFBc0JELG1CQUFPQSxDQUFDO0FBRWxDLElBQUlFLFlBQVksTUFDZkMsa0JBQWtCLEdBQ2xCQyxnQkFBZ0IsTUFDaEJDLFVBQVUsTUFDVkMsVUFBVSxNQUNWQyxrQkFBa0IsVUFBV0gsZ0JBQWtCRCxtQkFBbUIsR0FDbEVLLGtCQUFrQkYsVUFBV0gsbUJBQW1CO0FBRWpELFNBQVNNLFVBQVVDLE1BQU07SUFDeEIsT0FBT0EsT0FDTEMsT0FBTyxDQUFDLE1BQU0sSUFDZEEsT0FBTyxDQUFDLE9BQU8sS0FDZkEsT0FBTyxDQUFDLE9BQU87QUFDbEI7QUFFQSxTQUFTQyxrQkFBa0JDLFNBQVM7SUFDbkMsSUFBSWQsT0FBT2UsUUFBUSxDQUFDRCxZQUFZO1FBQy9CLE9BQU9BO0lBQ1IsT0FBTyxJQUFJLGFBQWEsT0FBT0EsV0FBVztRQUN6QyxPQUFPZCxPQUFPZ0IsSUFBSSxDQUFDRixXQUFXO0lBQy9CO0lBRUEsTUFBTSxJQUFJRyxVQUFVO0FBQ3JCO0FBRUEsU0FBU0MsVUFBVUosU0FBUyxFQUFFSyxHQUFHO0lBQ2hDTCxZQUFZRCxrQkFBa0JDO0lBQzlCLElBQUlNLGFBQWFsQixvQkFBb0JpQjtJQUVyQyx5RUFBeUU7SUFDekUsNENBQTRDO0lBQzVDLElBQUlFLHdCQUF3QkQsYUFBYTtJQUV6QyxJQUFJRSxjQUFjUixVQUFVUyxNQUFNO0lBRWxDLElBQUlDLFNBQVM7SUFDYixJQUFJVixTQUFTLENBQUNVLFNBQVMsS0FBS2hCLGlCQUFpQjtRQUM1QyxNQUFNLElBQUlpQixNQUFNO0lBQ2pCO0lBRUEsSUFBSUMsWUFBWVosU0FBUyxDQUFDVSxTQUFTO0lBQ25DLElBQUlFLGNBQWV2QixDQUFBQSxZQUFZLElBQUk7UUFDbEN1QixZQUFZWixTQUFTLENBQUNVLFNBQVM7SUFDaEM7SUFFQSxJQUFJRixjQUFjRSxTQUFTRSxXQUFXO1FBQ3JDLE1BQU0sSUFBSUQsTUFBTSxnQ0FBZ0NDLFlBQVksY0FBZUosQ0FBQUEsY0FBY0UsTUFBSyxJQUFLO0lBQ3BHO0lBRUEsSUFBSVYsU0FBUyxDQUFDVSxTQUFTLEtBQUtmLGlCQUFpQjtRQUM1QyxNQUFNLElBQUlnQixNQUFNO0lBQ2pCO0lBRUEsSUFBSUUsVUFBVWIsU0FBUyxDQUFDVSxTQUFTO0lBRWpDLElBQUlGLGNBQWNFLFNBQVMsSUFBSUcsU0FBUztRQUN2QyxNQUFNLElBQUlGLE1BQU0sOEJBQThCRSxVQUFVLGNBQWVMLENBQUFBLGNBQWNFLFNBQVMsS0FBSztJQUNwRztJQUVBLElBQUlILHdCQUF3Qk0sU0FBUztRQUNwQyxNQUFNLElBQUlGLE1BQU0sOEJBQThCRSxVQUFVLGdCQUFnQk4sd0JBQXdCO0lBQ2pHO0lBRUEsSUFBSU8sVUFBVUo7SUFDZEEsVUFBVUc7SUFFVixJQUFJYixTQUFTLENBQUNVLFNBQVMsS0FBS2YsaUJBQWlCO1FBQzVDLE1BQU0sSUFBSWdCLE1BQU07SUFDakI7SUFFQSxJQUFJSSxVQUFVZixTQUFTLENBQUNVLFNBQVM7SUFFakMsSUFBSUYsY0FBY0UsV0FBV0ssU0FBUztRQUNyQyxNQUFNLElBQUlKLE1BQU0sOEJBQThCSSxVQUFVLGtCQUFtQlAsQ0FBQUEsY0FBY0UsTUFBSyxJQUFLO0lBQ3BHO0lBRUEsSUFBSUgsd0JBQXdCUSxTQUFTO1FBQ3BDLE1BQU0sSUFBSUosTUFBTSw4QkFBOEJJLFVBQVUsZ0JBQWdCUix3QkFBd0I7SUFDakc7SUFFQSxJQUFJUyxVQUFVTjtJQUNkQSxVQUFVSztJQUVWLElBQUlMLFdBQVdGLGFBQWE7UUFDM0IsTUFBTSxJQUFJRyxNQUFNLDZDQUE4Q0gsQ0FBQUEsY0FBY0UsTUFBSyxJQUFLO0lBQ3ZGO0lBRUEsSUFBSU8sV0FBV1gsYUFBYU8sU0FDM0JLLFdBQVdaLGFBQWFTO0lBRXpCLElBQUlJLE1BQU1qQyxPQUFPa0MsV0FBVyxDQUFDSCxXQUFXSixVQUFVSyxXQUFXSDtJQUU3RCxJQUFLTCxTQUFTLEdBQUdBLFNBQVNPLFVBQVUsRUFBRVAsT0FBUTtRQUM3Q1MsR0FBRyxDQUFDVCxPQUFPLEdBQUc7SUFDZjtJQUNBVixVQUFVcUIsSUFBSSxDQUFDRixLQUFLVCxRQUFRSSxVQUFVUSxLQUFLQyxHQUFHLENBQUMsQ0FBQ04sVUFBVSxJQUFJSCxVQUFVRDtJQUV4RUgsU0FBU0o7SUFFVCxJQUFLLElBQUlrQixJQUFJZCxRQUFRQSxTQUFTYyxJQUFJTixVQUFVLEVBQUVSLE9BQVE7UUFDckRTLEdBQUcsQ0FBQ1QsT0FBTyxHQUFHO0lBQ2Y7SUFDQVYsVUFBVXFCLElBQUksQ0FBQ0YsS0FBS1QsUUFBUU0sVUFBVU0sS0FBS0MsR0FBRyxDQUFDLENBQUNMLFVBQVUsSUFBSUYsVUFBVUQ7SUFFeEVJLE1BQU1BLElBQUlNLFFBQVEsQ0FBQztJQUNuQk4sTUFBTXZCLFVBQVV1QjtJQUVoQixPQUFPQTtBQUNSO0FBRUEsU0FBU08sYUFBYUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDckMsSUFBSUMsVUFBVTtJQUNkLE1BQU9GLFFBQVFFLFVBQVVELFFBQVFGLEdBQUcsQ0FBQ0MsUUFBUUUsUUFBUSxLQUFLLEVBQUc7UUFDNUQsRUFBRUE7SUFDSDtJQUVBLElBQUlDLFlBQVlKLEdBQUcsQ0FBQ0MsUUFBUUUsUUFBUSxJQUFJekM7SUFDeEMsSUFBSTBDLFdBQVc7UUFDZCxFQUFFRDtJQUNIO0lBRUEsT0FBT0E7QUFDUjtBQUVBLFNBQVNFLFVBQVVoQyxTQUFTLEVBQUVLLEdBQUc7SUFDaENMLFlBQVlELGtCQUFrQkM7SUFDOUIsSUFBSU0sYUFBYWxCLG9CQUFvQmlCO0lBRXJDLElBQUk0QixpQkFBaUJqQyxVQUFVUyxNQUFNO0lBQ3JDLElBQUl3QixtQkFBbUIzQixhQUFhLEdBQUc7UUFDdEMsTUFBTSxJQUFJSCxVQUFVLE1BQU1FLE1BQU0sMkJBQTJCQyxhQUFhLElBQUksbUJBQW1CMkIsaUJBQWlCO0lBQ2pIO0lBRUEsSUFBSWhCLFdBQVdTLGFBQWExQixXQUFXLEdBQUdNO0lBQzFDLElBQUlZLFdBQVdRLGFBQWExQixXQUFXTSxZQUFZTixVQUFVUyxNQUFNO0lBQ25FLElBQUlJLFVBQVVQLGFBQWFXO0lBQzNCLElBQUlGLFVBQVVULGFBQWFZO0lBRTNCLElBQUlnQixVQUFVLElBQUksSUFBSXJCLFVBQVUsSUFBSSxJQUFJRTtJQUV4QyxJQUFJb0IsY0FBY0QsVUFBVTdDO0lBRTVCLElBQUk4QixNQUFNakMsT0FBT2tDLFdBQVcsQ0FBQyxDQUFDZSxjQUFjLElBQUksS0FBS0Q7SUFFckQsSUFBSXhCLFNBQVM7SUFDYlMsR0FBRyxDQUFDVCxTQUFTLEdBQUdoQjtJQUNoQixJQUFJeUMsYUFBYTtRQUNoQixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCaEIsR0FBRyxDQUFDVCxTQUFTLEdBQUd3QjtJQUNqQixPQUFPO1FBQ04scUNBQXFDO1FBQ3JDLHdEQUF3RDtRQUN4RGYsR0FBRyxDQUFDVCxTQUFTLEdBQUdyQixZQUFZO1FBQzVCLG1CQUFtQjtRQUNuQjhCLEdBQUcsQ0FBQ1QsU0FBUyxHQUFHd0IsVUFBVTtJQUMzQjtJQUNBZixHQUFHLENBQUNULFNBQVMsR0FBR2Y7SUFDaEJ3QixHQUFHLENBQUNULFNBQVMsR0FBR0c7SUFDaEIsSUFBSUksV0FBVyxHQUFHO1FBQ2pCRSxHQUFHLENBQUNULFNBQVMsR0FBRztRQUNoQkEsVUFBVVYsVUFBVXFCLElBQUksQ0FBQ0YsS0FBS1QsUUFBUSxHQUFHSjtJQUMxQyxPQUFPO1FBQ05JLFVBQVVWLFVBQVVxQixJQUFJLENBQUNGLEtBQUtULFFBQVFPLFVBQVVYO0lBQ2pEO0lBQ0FhLEdBQUcsQ0FBQ1QsU0FBUyxHQUFHZjtJQUNoQndCLEdBQUcsQ0FBQ1QsU0FBUyxHQUFHSztJQUNoQixJQUFJRyxXQUFXLEdBQUc7UUFDakJDLEdBQUcsQ0FBQ1QsU0FBUyxHQUFHO1FBQ2hCVixVQUFVcUIsSUFBSSxDQUFDRixLQUFLVCxRQUFRSjtJQUM3QixPQUFPO1FBQ05OLFVBQVVxQixJQUFJLENBQUNGLEtBQUtULFFBQVFKLGFBQWFZO0lBQzFDO0lBRUEsT0FBT0M7QUFDUjtBQUVBaUIsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCakMsV0FBV0E7SUFDWDRCLFdBQVdBO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8uL25vZGVfbW9kdWxlcy9lY2RzYS1zaWctZm9ybWF0dGVyL3NyYy9lY2RzYS1zaWctZm9ybWF0dGVyLmpzP2YzOGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG5cbnZhciBnZXRQYXJhbUJ5dGVzRm9yQWxnID0gcmVxdWlyZSgnLi9wYXJhbS1ieXRlcy1mb3ItYWxnJyk7XG5cbnZhciBNQVhfT0NURVQgPSAweDgwLFxuXHRDTEFTU19VTklWRVJTQUwgPSAwLFxuXHRQUklNSVRJVkVfQklUID0gMHgyMCxcblx0VEFHX1NFUSA9IDB4MTAsXG5cdFRBR19JTlQgPSAweDAyLFxuXHRFTkNPREVEX1RBR19TRVEgPSAoVEFHX1NFUSB8IFBSSU1JVElWRV9CSVQpIHwgKENMQVNTX1VOSVZFUlNBTCA8PCA2KSxcblx0RU5DT0RFRF9UQUdfSU5UID0gVEFHX0lOVCB8IChDTEFTU19VTklWRVJTQUwgPDwgNik7XG5cbmZ1bmN0aW9uIGJhc2U2NFVybChiYXNlNjQpIHtcblx0cmV0dXJuIGJhc2U2NFxuXHRcdC5yZXBsYWNlKC89L2csICcnKVxuXHRcdC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuXHRcdC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gc2lnbmF0dXJlQXNCdWZmZXIoc2lnbmF0dXJlKSB7XG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoc2lnbmF0dXJlKSkge1xuXHRcdHJldHVybiBzaWduYXR1cmU7XG5cdH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzaWduYXR1cmUpIHtcblx0XHRyZXR1cm4gQnVmZmVyLmZyb20oc2lnbmF0dXJlLCAnYmFzZTY0Jyk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFQ0RTQSBzaWduYXR1cmUgbXVzdCBiZSBhIEJhc2U2NCBzdHJpbmcgb3IgYSBCdWZmZXInKTtcbn1cblxuZnVuY3Rpb24gZGVyVG9Kb3NlKHNpZ25hdHVyZSwgYWxnKSB7XG5cdHNpZ25hdHVyZSA9IHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSk7XG5cdHZhciBwYXJhbUJ5dGVzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZyhhbGcpO1xuXG5cdC8vIHRoZSBERVIgZW5jb2RlZCBwYXJhbSBzaG91bGQgYXQgbW9zdCBiZSB0aGUgcGFyYW0gc2l6ZSwgcGx1cyBhIHBhZGRpbmdcblx0Ly8gemVybywgc2luY2UgZHVlIHRvIGJlaW5nIGEgc2lnbmVkIGludGVnZXJcblx0dmFyIG1heEVuY29kZWRQYXJhbUxlbmd0aCA9IHBhcmFtQnl0ZXMgKyAxO1xuXG5cdHZhciBpbnB1dExlbmd0aCA9IHNpZ25hdHVyZS5sZW5ndGg7XG5cblx0dmFyIG9mZnNldCA9IDA7XG5cdGlmIChzaWduYXR1cmVbb2Zmc2V0KytdICE9PSBFTkNPREVEX1RBR19TRVEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGV4cGVjdGVkIFwic2VxXCInKTtcblx0fVxuXG5cdHZhciBzZXFMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXHRpZiAoc2VxTGVuZ3RoID09PSAoTUFYX09DVEVUIHwgMSkpIHtcblx0XHRzZXFMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXHR9XG5cblx0aWYgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0IDwgc2VxTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInNlcVwiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc2VxTGVuZ3RoICsgJ1wiLCBvbmx5IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCkgKyAnXCIgcmVtYWluaW5nJyk7XG5cdH1cblxuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfSU5UKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcImludFwiIGZvciBcInJcIicpO1xuXHR9XG5cblx0dmFyIHJMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCAtIDIgPCByTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInJcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHJMZW5ndGggKyAnXCIsIG9ubHkgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0IC0gMikgKyAnXCIgYXZhaWxhYmxlJyk7XG5cdH1cblxuXHRpZiAobWF4RW5jb2RlZFBhcmFtTGVuZ3RoIDwgckxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJyXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyByTGVuZ3RoICsgJ1wiLCBtYXggb2YgXCInICsgbWF4RW5jb2RlZFBhcmFtTGVuZ3RoICsgJ1wiIGlzIGFjY2VwdGFibGUnKTtcblx0fVxuXG5cdHZhciByT2Zmc2V0ID0gb2Zmc2V0O1xuXHRvZmZzZXQgKz0gckxlbmd0aDtcblxuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfSU5UKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcImludFwiIGZvciBcInNcIicpO1xuXHR9XG5cblx0dmFyIHNMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCAhPT0gc0xlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyBzTGVuZ3RoICsgJ1wiLCBleHBlY3RlZCBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQpICsgJ1wiJyk7XG5cdH1cblxuXHRpZiAobWF4RW5jb2RlZFBhcmFtTGVuZ3RoIDwgc0xlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyBzTGVuZ3RoICsgJ1wiLCBtYXggb2YgXCInICsgbWF4RW5jb2RlZFBhcmFtTGVuZ3RoICsgJ1wiIGlzIGFjY2VwdGFibGUnKTtcblx0fVxuXG5cdHZhciBzT2Zmc2V0ID0gb2Zmc2V0O1xuXHRvZmZzZXQgKz0gc0xlbmd0aDtcblxuXHRpZiAob2Zmc2V0ICE9PSBpbnB1dExlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdG8gY29uc3VtZSBlbnRpcmUgYnVmZmVyLCBidXQgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0KSArICdcIiBieXRlcyByZW1haW4nKTtcblx0fVxuXG5cdHZhciByUGFkZGluZyA9IHBhcmFtQnl0ZXMgLSByTGVuZ3RoLFxuXHRcdHNQYWRkaW5nID0gcGFyYW1CeXRlcyAtIHNMZW5ndGg7XG5cblx0dmFyIGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShyUGFkZGluZyArIHJMZW5ndGggKyBzUGFkZGluZyArIHNMZW5ndGgpO1xuXG5cdGZvciAob2Zmc2V0ID0gMDsgb2Zmc2V0IDwgclBhZGRpbmc7ICsrb2Zmc2V0KSB7XG5cdFx0ZHN0W29mZnNldF0gPSAwO1xuXHR9XG5cdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCByT2Zmc2V0ICsgTWF0aC5tYXgoLXJQYWRkaW5nLCAwKSwgck9mZnNldCArIHJMZW5ndGgpO1xuXG5cdG9mZnNldCA9IHBhcmFtQnl0ZXM7XG5cblx0Zm9yICh2YXIgbyA9IG9mZnNldDsgb2Zmc2V0IDwgbyArIHNQYWRkaW5nOyArK29mZnNldCkge1xuXHRcdGRzdFtvZmZzZXRdID0gMDtcblx0fVxuXHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgc09mZnNldCArIE1hdGgubWF4KC1zUGFkZGluZywgMCksIHNPZmZzZXQgKyBzTGVuZ3RoKTtcblxuXHRkc3QgPSBkc3QudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHRkc3QgPSBiYXNlNjRVcmwoZHN0KTtcblxuXHRyZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBjb3VudFBhZGRpbmcoYnVmLCBzdGFydCwgc3RvcCkge1xuXHR2YXIgcGFkZGluZyA9IDA7XG5cdHdoaWxlIChzdGFydCArIHBhZGRpbmcgPCBzdG9wICYmIGJ1ZltzdGFydCArIHBhZGRpbmddID09PSAwKSB7XG5cdFx0KytwYWRkaW5nO1xuXHR9XG5cblx0dmFyIG5lZWRzU2lnbiA9IGJ1ZltzdGFydCArIHBhZGRpbmddID49IE1BWF9PQ1RFVDtcblx0aWYgKG5lZWRzU2lnbikge1xuXHRcdC0tcGFkZGluZztcblx0fVxuXG5cdHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBqb3NlVG9EZXIoc2lnbmF0dXJlLCBhbGcpIHtcblx0c2lnbmF0dXJlID0gc2lnbmF0dXJlQXNCdWZmZXIoc2lnbmF0dXJlKTtcblx0dmFyIHBhcmFtQnl0ZXMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnKGFsZyk7XG5cblx0dmFyIHNpZ25hdHVyZUJ5dGVzID0gc2lnbmF0dXJlLmxlbmd0aDtcblx0aWYgKHNpZ25hdHVyZUJ5dGVzICE9PSBwYXJhbUJ5dGVzICogMikge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiJyArIGFsZyArICdcIiBzaWduYXR1cmVzIG11c3QgYmUgXCInICsgcGFyYW1CeXRlcyAqIDIgKyAnXCIgYnl0ZXMsIHNhdyBcIicgKyBzaWduYXR1cmVCeXRlcyArICdcIicpO1xuXHR9XG5cblx0dmFyIHJQYWRkaW5nID0gY291bnRQYWRkaW5nKHNpZ25hdHVyZSwgMCwgcGFyYW1CeXRlcyk7XG5cdHZhciBzUGFkZGluZyA9IGNvdW50UGFkZGluZyhzaWduYXR1cmUsIHBhcmFtQnl0ZXMsIHNpZ25hdHVyZS5sZW5ndGgpO1xuXHR2YXIgckxlbmd0aCA9IHBhcmFtQnl0ZXMgLSByUGFkZGluZztcblx0dmFyIHNMZW5ndGggPSBwYXJhbUJ5dGVzIC0gc1BhZGRpbmc7XG5cblx0dmFyIHJzQnl0ZXMgPSAxICsgMSArIHJMZW5ndGggKyAxICsgMSArIHNMZW5ndGg7XG5cblx0dmFyIHNob3J0TGVuZ3RoID0gcnNCeXRlcyA8IE1BWF9PQ1RFVDtcblxuXHR2YXIgZHN0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKChzaG9ydExlbmd0aCA/IDIgOiAzKSArIHJzQnl0ZXMpO1xuXG5cdHZhciBvZmZzZXQgPSAwO1xuXHRkc3Rbb2Zmc2V0KytdID0gRU5DT0RFRF9UQUdfU0VRO1xuXHRpZiAoc2hvcnRMZW5ndGgpIHtcblx0XHQvLyBCaXQgOCBoYXMgdmFsdWUgXCIwXCJcblx0XHQvLyBiaXRzIDctMSBnaXZlIHRoZSBsZW5ndGguXG5cdFx0ZHN0W29mZnNldCsrXSA9IHJzQnl0ZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQml0IDggb2YgZmlyc3Qgb2N0ZXQgaGFzIHZhbHVlIFwiMVwiXG5cdFx0Ly8gYml0cyA3LTEgZ2l2ZSB0aGUgbnVtYmVyIG9mIGFkZGl0aW9uYWwgbGVuZ3RoIG9jdGV0cy5cblx0XHRkc3Rbb2Zmc2V0KytdID0gTUFYX09DVEVUXHR8IDE7XG5cdFx0Ly8gbGVuZ3RoLCBiYXNlIDI1NlxuXHRcdGRzdFtvZmZzZXQrK10gPSByc0J5dGVzICYgMHhmZjtcblx0fVxuXHRkc3Rbb2Zmc2V0KytdID0gRU5DT0RFRF9UQUdfSU5UO1xuXHRkc3Rbb2Zmc2V0KytdID0gckxlbmd0aDtcblx0aWYgKHJQYWRkaW5nIDwgMCkge1xuXHRcdGRzdFtvZmZzZXQrK10gPSAwO1xuXHRcdG9mZnNldCArPSBzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgMCwgcGFyYW1CeXRlcyk7XG5cdH0gZWxzZSB7XG5cdFx0b2Zmc2V0ICs9IHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCByUGFkZGluZywgcGFyYW1CeXRlcyk7XG5cdH1cblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX0lOVDtcblx0ZHN0W29mZnNldCsrXSA9IHNMZW5ndGg7XG5cdGlmIChzUGFkZGluZyA8IDApIHtcblx0XHRkc3Rbb2Zmc2V0KytdID0gMDtcblx0XHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgcGFyYW1CeXRlcyk7XG5cdH0gZWxzZSB7XG5cdFx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHBhcmFtQnl0ZXMgKyBzUGFkZGluZyk7XG5cdH1cblxuXHRyZXR1cm4gZHN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVyVG9Kb3NlOiBkZXJUb0pvc2UsXG5cdGpvc2VUb0Rlcjogam9zZVRvRGVyXG59O1xuIl0sIm5hbWVzIjpbIkJ1ZmZlciIsInJlcXVpcmUiLCJnZXRQYXJhbUJ5dGVzRm9yQWxnIiwiTUFYX09DVEVUIiwiQ0xBU1NfVU5JVkVSU0FMIiwiUFJJTUlUSVZFX0JJVCIsIlRBR19TRVEiLCJUQUdfSU5UIiwiRU5DT0RFRF9UQUdfU0VRIiwiRU5DT0RFRF9UQUdfSU5UIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsInNpZ25hdHVyZUFzQnVmZmVyIiwic2lnbmF0dXJlIiwiaXNCdWZmZXIiLCJmcm9tIiwiVHlwZUVycm9yIiwiZGVyVG9Kb3NlIiwiYWxnIiwicGFyYW1CeXRlcyIsIm1heEVuY29kZWRQYXJhbUxlbmd0aCIsImlucHV0TGVuZ3RoIiwibGVuZ3RoIiwib2Zmc2V0IiwiRXJyb3IiLCJzZXFMZW5ndGgiLCJyTGVuZ3RoIiwick9mZnNldCIsInNMZW5ndGgiLCJzT2Zmc2V0IiwiclBhZGRpbmciLCJzUGFkZGluZyIsImRzdCIsImFsbG9jVW5zYWZlIiwiY29weSIsIk1hdGgiLCJtYXgiLCJvIiwidG9TdHJpbmciLCJjb3VudFBhZGRpbmciLCJidWYiLCJzdGFydCIsInN0b3AiLCJwYWRkaW5nIiwibmVlZHNTaWduIiwiam9zZVRvRGVyIiwic2lnbmF0dXJlQnl0ZXMiLCJyc0J5dGVzIiwic2hvcnRMZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\nfunction getParamSize(keySize) {\n    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);\n    return result;\n}\nvar paramBytesForAlg = {\n    ES256: getParamSize(256),\n    ES384: getParamSize(384),\n    ES512: getParamSize(521)\n};\nfunction getParamBytesForAlg(alg) {\n    var paramBytes = paramBytesForAlg[alg];\n    if (paramBytes) {\n        return paramBytes;\n    }\n    throw new Error('Unknown algorithm \"' + alg + '\"');\n}\nmodule.exports = getParamBytesForAlg;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLGFBQWFDLE9BQU87SUFDNUIsSUFBSUMsU0FBUyxDQUFDLFVBQVcsSUFBSyxLQUFNRCxDQUFBQSxVQUFVLE1BQU0sSUFBSSxJQUFJO0lBQzVELE9BQU9DO0FBQ1I7QUFFQSxJQUFJQyxtQkFBbUI7SUFDdEJDLE9BQU9KLGFBQWE7SUFDcEJLLE9BQU9MLGFBQWE7SUFDcEJNLE9BQU9OLGFBQWE7QUFDckI7QUFFQSxTQUFTTyxvQkFBb0JDLEdBQUc7SUFDL0IsSUFBSUMsYUFBYU4sZ0JBQWdCLENBQUNLLElBQUk7SUFDdEMsSUFBSUMsWUFBWTtRQUNmLE9BQU9BO0lBQ1I7SUFFQSxNQUFNLElBQUlDLE1BQU0sd0JBQXdCRixNQUFNO0FBQy9DO0FBRUFHLE9BQU9DLE9BQU8sR0FBR0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlY2hpcGFydC8uL25vZGVfbW9kdWxlcy9lY2RzYS1zaWctZm9ybWF0dGVyL3NyYy9wYXJhbS1ieXRlcy1mb3ItYWxnLmpzPzc0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRQYXJhbVNpemUoa2V5U2l6ZSkge1xuXHR2YXIgcmVzdWx0ID0gKChrZXlTaXplIC8gOCkgfCAwKSArIChrZXlTaXplICUgOCA9PT0gMCA/IDAgOiAxKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHBhcmFtQnl0ZXNGb3JBbGcgPSB7XG5cdEVTMjU2OiBnZXRQYXJhbVNpemUoMjU2KSxcblx0RVMzODQ6IGdldFBhcmFtU2l6ZSgzODQpLFxuXHRFUzUxMjogZ2V0UGFyYW1TaXplKDUyMSlcbn07XG5cbmZ1bmN0aW9uIGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKSB7XG5cdHZhciBwYXJhbUJ5dGVzID0gcGFyYW1CeXRlc0ZvckFsZ1thbGddO1xuXHRpZiAocGFyYW1CeXRlcykge1xuXHRcdHJldHVybiBwYXJhbUJ5dGVzO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFsZ29yaXRobSBcIicgKyBhbGcgKyAnXCInKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnO1xuIl0sIm5hbWVzIjpbImdldFBhcmFtU2l6ZSIsImtleVNpemUiLCJyZXN1bHQiLCJwYXJhbUJ5dGVzRm9yQWxnIiwiRVMyNTYiLCJFUzM4NCIsIkVTNTEyIiwiZ2V0UGFyYW1CeXRlc0ZvckFsZyIsImFsZyIsInBhcmFtQnl0ZXMiLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\n");

/***/ })

};
;