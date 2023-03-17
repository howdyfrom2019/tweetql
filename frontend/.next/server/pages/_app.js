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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./client.ts":
/*!*******************!*\
  !*** ./client.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApolloClient\": () => (/* binding */ initializeApolloClient),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet apolloClient = null;\n\nconst client = () => {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    ssrMode: true,\n    uri: 'http://localhost:4000/',\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n  });\n};\n\nconst initializeApolloClient = initialState => {\n  const _apolloClient = apolloClient ?? client();\n\n  if (initialState) {\n    const cntCache = _apolloClient.extract();\n\n    const data = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(initialState, cntCache);\n\n    _apolloClient.cache.restore(data);\n  }\n\n  if (true) return _apolloClient;\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n};\nfunction useApollo(initialState) {\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => initializeApolloClient(initialState), [initialState]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJSSxZQUF3RCxHQUFHLElBQS9EOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0VBQ25CLE9BQU8sSUFBSUwsd0RBQUosQ0FBaUI7SUFDdEJNLE9BQU8sTUFEZTtJQUV0QkMsR0FBRyxFQUFFLHdCQUZpQjtJQUd0QkMsS0FBSyxFQUFFLElBQUlQLHlEQUFKO0VBSGUsQ0FBakIsQ0FBUDtBQUtELENBTkQ7O0FBUU8sTUFBTVEsc0JBQXNCLEdBQUlDLFlBQUQsSUFBdUI7RUFDM0QsTUFBTUMsYUFBYSxHQUFHUCxZQUFZLElBQUlDLE1BQU0sRUFBNUM7O0VBRUEsSUFBSUssWUFBSixFQUFrQjtJQUNoQixNQUFNRSxRQUFRLEdBQUdELGFBQWEsQ0FBQ0UsT0FBZCxFQUFqQjs7SUFDQSxNQUFNQyxJQUFJLEdBQUdaLG1FQUFTLENBQUNRLFlBQUQsRUFBZUUsUUFBZixDQUF0Qjs7SUFDQUQsYUFBYSxDQUFDSCxLQUFkLENBQW9CTyxPQUFwQixDQUE0QkQsSUFBNUI7RUFDRDs7RUFFRCxJQUFJLE1BQStCLE9BQU9ILGFBQVA7RUFDbkMsSUFBSSxDQUFDUCxZQUFMLEVBQW1CQSxZQUFZLEdBQUdPLGFBQWY7RUFFbkIsT0FBT0EsYUFBUDtBQUNELENBYk07QUFlQSxTQUFTSyxTQUFULENBQW1CTixZQUFuQixFQUFzQztFQUMzQyxPQUFPUCw4Q0FBTyxDQUFDLE1BQU1NLHNCQUFzQixDQUFDQyxZQUFELENBQTdCLEVBQTZDLENBQUNBLFlBQUQsQ0FBN0MsQ0FBZDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9scWwvLi9jbGllbnQudHM/NWI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5jb25zdCBjbGllbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXHJcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY2xpZW50KCk7XHJcblxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IGNudENhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gbWVyZ2VEZWVwKGluaXRpYWxTdGF0ZSwgY250Q2FjaGUpO1xyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlOiBhbnkpIHtcclxuICByZXR1cm4gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIm1lcmdlRGVlcCIsInVzZU1lbW8iLCJhcG9sbG9DbGllbnQiLCJjbGllbnQiLCJzc3JNb2RlIiwidXJpIiwiY2FjaGUiLCJpbml0aWFsaXplQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImNudENhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJyZXN0b3JlIiwidXNlQXBvbGxvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client */ \"./client.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction _app({\n  Component,\n  pageProps\n}) {\n  const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_0__.useApollo)(pageProps.initialApolloState);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n      client: apolloClient,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, { ...pageProps\n      })\n    })\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU0UsSUFBVCxDQUFjO0VBQUVDLFNBQUY7RUFBYUM7QUFBYixDQUFkLEVBQWtEO0VBQ2hELE1BQU1DLFlBQVksR0FBR0wsa0RBQVMsQ0FBQ0ksU0FBUyxDQUFDRSxrQkFBWCxDQUE5QjtFQUNBLG9CQUNFO0lBQUEsdUJBQ0UsdURBQUMsMERBQUQ7TUFBZ0IsTUFBTSxFQUFFRCxZQUF4QjtNQUFBLHVCQUNFLHVEQUFDLFNBQUQsT0FBZUQ7TUFBZjtJQURGO0VBREYsRUFERjtBQU9EOztBQUVELGlFQUFlRixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9scWwvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uL2luZGV4LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBfYXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2FwcDtcclxuIl0sIm5hbWVzIjpbInVzZUFwb2xsbyIsIkFwb2xsb1Byb3ZpZGVyIiwiX2FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxBcG9sbG9TdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();