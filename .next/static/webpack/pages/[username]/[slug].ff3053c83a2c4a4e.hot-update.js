"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]/[slug]",{

/***/ "./pages/[username]/[slug].tsx":
/*!*************************************!*\
  !*** ./pages/[username]/[slug].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_PostPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/PostPage.module.css */ \"./styles/PostPage.module.css\");\n/* harmony import */ var _styles_PostPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_PostPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.ts\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostContent */ \"./components/PostContent.tsx\");\n/* harmony import */ var _components_HeartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeartButton */ \"./components/HeartButton.tsx\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction PostPage(param) {\n    let { path , serverPost  } = param;\n    _s();\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, path);\n    const [realtimePostDoc] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__.useDocument)(postRef);\n    const realtimePost = realtimePostDoc && (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.postToJSON)(realtimePostDoc);\n    const post = realtimePost || serverPost;\n    console.log({\n        postRef\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_PostPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    post: post\n                }, void 0, false, {\n                    fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                post.heartCount || 0,\n                                \" \\uD83E\\uDD0D\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"/enter\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"\\uD83D\\uDC97 Sign Up\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeartButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            postRef: postRef\n                        }, void 0, false, {\n                            fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chendrix/git/nextfire-blog/pages/[username]/[slug].tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(PostPage, \"SR9Ft8fnQyrtfNPpVbdwLu1dXr0=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_1__.useDocument\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUQ7QUFFTztBQUNNO0FBQ2dDO0FBRzVDO0FBQ0E7QUFDSjtBQUN0Qjs7QUE4Q2IsU0FBU1MsU0FBUyxLQUEyQixFQUFFO1FBQTdCLEVBQUVDLEtBQUksRUFBRUMsV0FBVSxFQUFTLEdBQTNCOztJQUMvQixNQUFNQyxVQUFVVix1REFBR0EsQ0FBQ0Msb0RBQVNBLEVBQUVPO0lBQy9CLE1BQU0sQ0FBQ0csZ0JBQWdCLEdBQUdaLDJFQUFXQSxDQUFDVztJQUN0QyxNQUFNRSxlQUFlRCxtQkFBbUJULHlEQUFVQSxDQUFDUztJQUNuRCxNQUFNRSxPQUFPRCxnQkFBZ0JIO0lBRTdCSyxRQUFRQyxHQUFHLENBQUM7UUFBRUw7SUFBUTtJQUN0QixxQkFDRSw4REFBQ007UUFBS0MsV0FBV25CLDhFQUFnQjs7MEJBRS9CLDhEQUFDcUI7MEJBQ0MsNEVBQUNoQiwrREFBV0E7b0JBQUNVLE1BQU1BOzs7Ozs7Ozs7OzswQkFHckIsOERBQUNPO2dCQUFNSCxXQUFVOztrQ0FDZiw4REFBQ0k7a0NBQ0MsNEVBQUNDOztnQ0FBUVQsS0FBS1UsVUFBVSxJQUFJO2dDQUFFOzs7Ozs7Ozs7Ozs7a0NBRWhDLDhEQUFDbEIsNkRBQVNBO3dCQUNSbUIsd0JBQ0UsOERBQUNsQixrREFBSUE7NEJBQUNtQixNQUFLO3NDQUNULDRFQUFDQzswQ0FBTzs7O2tDQUlaLDRFQUFDdEIsK0RBQVdBOzRCQUFDTSxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQS9CdUJIOztRQUVJUix1RUFBV0E7OztLQUZmUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS50c3g/YWY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Qb3N0UGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZURvY3VtZW50IH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZG9jLCBnZXREb2NzLCBjb2xsZWN0aW9uR3JvdXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGdldFVzZXJEb2NCeVVzZXJuYW1lLCBnZXRQb3N0RG9jQnlTbHVnLCBwb3N0VG9KU09OIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJ1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uL2xpYi90eXBlcydcbmltcG9ydCB7IGdldFBhcmFtIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJ1xuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRlbnQnXG5pbXBvcnQgSGVhcnRCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFydEJ1dHRvbidcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRoQ2hlY2snXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gZ2V0UGFyYW0oJ3VzZXJuYW1lJywgcGFyYW1zKVxuICBjb25zdCBzbHVnID0gZ2V0UGFyYW0oJ3NsdWcnLCBwYXJhbXMpXG4gIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXRVc2VyRG9jQnlVc2VybmFtZSh1c2VybmFtZSlcbiAgY29uc3QgcG9zdERvYyA9IHVzZXJEb2MgJiYgYXdhaXQgZ2V0UG9zdERvY0J5U2x1Zyh1c2VyRG9jLnJlZiwgc2x1ZylcblxuICBsZXQgc2VydmVyUG9zdCA9IG51bGxcbiAgbGV0IHBhdGggPSBudWxsXG5cbiAgaWYgKHBvc3REb2MpIHtcbiAgICBzZXJ2ZXJQb3N0ID0gcG9zdFRvSlNPTihwb3N0RG9jKVxuICAgIHBhdGggPSBwb3N0RG9jLnJlZi5wYXRoXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHNlcnZlclBvc3QsIHBhdGggfSxcbiAgICByZXZhbGlkYXRlOiA1MDAwLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIEltcHJvdmUgbXkgdXNpbmcgQWRtaW4gU0RLIHRvIHNlbGVjdCBlbXB0eSBkb2NzXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCAncG9zdHMnKSlcblxuICBjb25zdCBwYXRocyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcbiAgICBjb25zdCB7IHNsdWcsIHVzZXJuYW1lIH0gPSBkb2MuZGF0YSgpXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogeyB1c2VybmFtZSwgc2x1ZyB9LFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC8vIG11c3QgYmUgaW4gdGhpcyBmb3JtYXQ6XG4gICAgLy8gcGF0aHM6IFtcbiAgICAvLyAgIHsgcGFyYW1zOiB7IHVzZXJuYW1lLCBzbHVnIH19XG4gICAgLy8gXSxcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcbiAgfVxufVxuXG50eXBlIFByb3BzID0geyBwYXRoOiBzdHJpbmcsIHNlcnZlclBvc3Q6IFBvc3QgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7IHBhdGgsIHNlcnZlclBvc3QgfTogUHJvcHMpIHtcbiAgY29uc3QgcG9zdFJlZiA9IGRvYyhmaXJlc3RvcmUsIHBhdGgpXG4gIGNvbnN0IFtyZWFsdGltZVBvc3REb2NdID0gdXNlRG9jdW1lbnQocG9zdFJlZilcbiAgY29uc3QgcmVhbHRpbWVQb3N0ID0gcmVhbHRpbWVQb3N0RG9jICYmIHBvc3RUb0pTT04ocmVhbHRpbWVQb3N0RG9jKVxuICBjb25zdCBwb3N0ID0gcmVhbHRpbWVQb3N0IHx8IHNlcnZlclBvc3RcblxuICBjb25zb2xlLmxvZyh7IHBvc3RSZWYgfSlcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFBvc3RDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+e3Bvc3QuaGVhcnRDb3VudCB8fCAwfSDwn6SNPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEF1dGhDaGVja1xuICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7wn5KXIFNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhcnRCdXR0b24gcG9zdFJlZj17cG9zdFJlZn0gLz5cbiAgICAgICAgPC9BdXRoQ2hlY2s+XG4gICAgICA8L2FzaWRlPlxuXG4gICAgPC9tYWluPlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZURvY3VtZW50IiwiZG9jIiwiZmlyZXN0b3JlIiwicG9zdFRvSlNPTiIsIlBvc3RDb250ZW50IiwiSGVhcnRCdXR0b24iLCJBdXRoQ2hlY2siLCJMaW5rIiwiUG9zdFBhZ2UiLCJwYXRoIiwic2VydmVyUG9zdCIsInBvc3RSZWYiLCJyZWFsdGltZVBvc3REb2MiLCJyZWFsdGltZVBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzZWN0aW9uIiwiYXNpZGUiLCJwIiwic3Ryb25nIiwiaGVhcnRDb3VudCIsImZhbGxiYWNrIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].tsx\n"));

/***/ })

});