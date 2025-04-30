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
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "resend":
/*!*************************!*\
  !*** external "resend" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("resend");;

/***/ }),

/***/ "(api)/./src/pages/api/sendEmail.ts":
/*!************************************!*\
  !*** ./src/pages/api/sendEmail.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"resend\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([resend__WEBPACK_IMPORTED_MODULE_0__]);\nresend__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/api/sendEmail.ts\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const { nome, email, socio, telemovel, evento, handicap } = req.body;\n    try {\n        const data = await resend.emails.send({\n            from: \"noreply <onboarding@resend.dev>\",\n            to: \"limitless.golf.pt@gmail.com\",\n            subject: `Nova Inscrição - ${evento}`,\n            html: `\n        <p><strong>Evento:</strong> ${evento}</p>\n        <p><strong>Nome:</strong> ${nome}</p>\n        <p><strong>Email:</strong> ${email}</p>\n        <p><strong>Nº Sócio:</strong> ${socio}</p>\n        <p><strong>Handicap FPG:</strong> ${handicap}</p>\n        <p><strong>Telemóvel:</strong> ${telemovel}</p>\n      `\n        });\n        return res.status(200).json({\n            success: true\n        });\n    } catch (error) {\n        return res.status(500).json({\n            error: \"Erro ao enviar email\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmRFbWFpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHlCQUF5QjtBQUNPO0FBRWhDLE1BQU1DLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUVyQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVEsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFFckQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdWLElBQUlXLElBQUk7SUFFcEUsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTWpCLE9BQU9rQixNQUFNLENBQUNDLElBQUksQ0FBQztZQUNwQ0MsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRVIsT0FBTyxDQUFDO1lBQ3JDUyxNQUFNLENBQUM7b0NBQ3VCLEVBQUVULE9BQU87a0NBQ1gsRUFBRUosS0FBSzttQ0FDTixFQUFFQyxNQUFNO3NDQUNMLEVBQUVDLE1BQU07MENBQ0osRUFBRUcsU0FBUzt1Q0FDZCxFQUFFRixVQUFVO01BQzdDLENBQUM7UUFDSDtRQUVBLE9BQU9QLElBQUlFLE1BQU0sQ0FBQyxLQUFLZ0IsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBSztJQUM5QyxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPcEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtnQixJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF1QjtJQUM5RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmdvbGYtZml4ZWQvLi9zcmMvcGFnZXMvYXBpL3NlbmRFbWFpbC50cz9hMjViIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9zZW5kRW1haWwudHNcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG5cbiAgY29uc3QgeyBub21lLCBlbWFpbCwgc29jaW8sIHRlbGVtb3ZlbCwgZXZlbnRvLCBoYW5kaWNhcCB9ID0gcmVxLmJvZHk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206ICdub3JlcGx5IDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+JyxcbiAgICAgIHRvOiAnbGltaXRsZXNzLmdvbGYucHRAZ21haWwuY29tJyxcbiAgICAgIHN1YmplY3Q6IGBOb3ZhIEluc2NyacOnw6NvIC0gJHtldmVudG99YCxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPHA+PHN0cm9uZz5FdmVudG86PC9zdHJvbmc+ICR7ZXZlbnRvfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5Ob21lOjwvc3Ryb25nPiAke25vbWV9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiAke2VtYWlsfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5OwrogU8OzY2lvOjwvc3Ryb25nPiAke3NvY2lvfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5IYW5kaWNhcCBGUEc6PC9zdHJvbmc+ICR7aGFuZGljYXB9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPlRlbGVtw7N2ZWw6PC9zdHJvbmc+ICR7dGVsZW1vdmVsfTwvcD5cbiAgICAgIGAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJybyBhbyBlbnZpYXIgZW1haWwnIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIlJlc2VuZCIsInJlc2VuZCIsInByb2Nlc3MiLCJlbnYiLCJSRVNFTkRfQVBJX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJub21lIiwiZW1haWwiLCJzb2NpbyIsInRlbGVtb3ZlbCIsImV2ZW50byIsImhhbmRpY2FwIiwiYm9keSIsImRhdGEiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendEmail.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendEmail.ts"));
module.exports = __webpack_exports__;

})();