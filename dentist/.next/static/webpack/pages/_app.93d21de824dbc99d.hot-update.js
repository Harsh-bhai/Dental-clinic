/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar ref, ref1;\nmodule.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! ../../compiled/process */ \"./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5QkFBeUIscUJBQU0seURBQXlELHFCQUFNLHNEQUFzRCxxQkFBTSxXQUFXLG1CQUFPLENBQUMsb0ZBQXdCOztBQUVyTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9wcm9jZXNzLmpzP2NhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcmVmLCByZWYxO1xubW9kdWxlLmV4cG9ydHMgPSAoKHJlZiA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLmVudikgJiYgdHlwZW9mICgocmVmMSA9IGdsb2JhbC5wcm9jZXNzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmMS5lbnYpID09PSBcIm9iamVjdFwiID8gZ2xvYmFsLnByb2Nlc3MgOiByZXF1aXJlKFwiLi4vLi4vY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _this = undefined;\n\n// yarn add react-icons --save\n// yarn add hamburger-react\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var toggle = function() {\n        if (ref.current.classList.contains(\"-translate-x-full\")) {\n            ref.current.classList.remove(\"-translate-x-full\");\n            ref.current.classList.add(\"translate-x-0\");\n        } else if (ref.current.classList.contains(\"translate-x-0\")) {\n            ref.current.classList.remove(\"translate-x-0\");\n            ref.current.classList.add(\"-translate-x-full\");\n        }\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"navbar flex flex-col md:flex-row items-center bg-white md:p-2 shadow-lg py-4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiHamburgerMenu, {\n                            onClick: toggle\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 88\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 6\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-3 text-xl\",\n                            children: \"Dr.Bhaskar\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 26\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    className: \"navitems flex flex-col md:flex-row md:items-center md:bg-inherit bg-white px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0 md:transition-none ease-in-out z-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute top-8 left-8 \",\n                            onClick: toggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {\n                                className: \"text-4xl font-extralight md:hidden\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 30\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row md:items-center md:space-x-8 mainitems my-24 md:my-4 space-y-6 md:space-y-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/about\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: toggle,\n                                        className: \"hover:text-yellow-600 text-gray-700 cursor-pointer\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 36\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/services\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: toggle,\n                                        className: \"hover:text-yellow-600 text-gray-700 cursor-pointer\",\n                                        children: \"Services\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 39\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/book\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: toggle,\n                                        className: \"hover:text-yellow-600 text-gray-700 cursor-pointer\",\n                                        children: \"Book Appointment\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 35\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/doctor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: toggle,\n                                        className: \"hover:text-yellow-600 text-gray-700 cursor-pointer\",\n                                        children: \"Doctors\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 37\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"\".concat(process.env.NEXT_PUBLIC_BHOST, \"/admin/content-manager/collectionType/api::patient.patient?page=1&pageSize=10&sort=name:ASC\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        target: \"_blank\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: toggle,\n                                            className: \"hover:text-yellow-600 text-gray-700 cursor-pointer\",\n                                            children: \"Admin\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 174\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 153\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" text-white bg-red-500 md:py-2 md:px-6 focus:outline-none hover:bg-red-700 rounded-lg md:text-base absolute top-2 md:mt-5 md:m-4 my-6 mx-4 text-xs md:top-[-5px] right-0 p-2 md:p-6 cursor-pointer z-20\",\n                    children: \"Emergency\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Harsh\\\\vscodes\\\\nextjs\\\\Dental clinic\\\\dentist\\\\components\\\\navbar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBQyxDQUFnQyxNQUEyRixDQUF6SEUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQixFQUFDLDZGQUEyRixDQUFDOzhDQUFFLDRFQUFDQyxHQUFDO3dDQUFDQyxNQUFNLEVBQUUsUUFBUTtrREFBRSw0RUFBQ1QsS0FBRzs0Q0FBQ0UsT0FBTyxFQUFFVCxNQUFNOzRDQUFFUSxTQUFTLEVBQUMsb0RBQW9EO3NEQUFDLE9BQUs7Ozs7O2lEQUFNOzs7Ozs2Q0FBSTs7Ozs7eUNBQU87Ozs7OztpQ0FDeFE7Ozs7Ozt5QkFDRjs4QkFDTiw4REFBQ1MsUUFBTTtvQkFBQ1QsU0FBUyxFQUFDLHlNQUEyTTs4QkFBQyxXQUFTOzs7Ozt5QkFBUzs7Ozs7O2lCQUk1Tzs7Ozs7YUFDRixDQUVQO0NBQ0Y7R0F4Q0tULE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQTBDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHlhcm4gYWRkIHJlYWN0LWljb25zIC0tc2F2ZVxyXG4vLyB5YXJuIGFkZCBoYW1idXJnZXItcmVhY3RcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZEFjY291bnRDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IHsgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoKHJlZi5jdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIi10cmFuc2xhdGUteC1mdWxsXCIpKSkge1xyXG4gICAgICByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS14LWZ1bGxcIilcclxuICAgICAgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInRyYW5zbGF0ZS14LTBcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChyZWYuY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmFuc2xhdGUteC0wXCIpKSkge1xyXG4gICAgICByZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNsYXRlLXgtMFwiKVxyXG4gICAgICByZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS14LWZ1bGxcIilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgYmctd2hpdGUgbWQ6cC0yIHNoYWRvdy1sZyBweS00IFwiPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPScgdG9wLTAgbGVmdC0wIGFic29sdXRlIG0tNyBtZDptLTEwIHRleHQtM3hsIGZvbnQtdGhpbiBtZDpoaWRkZW4nPiA8R2lIYW1idXJnZXJNZW51IG9uQ2xpY2s9e3RvZ2dsZX0gIC8+PC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxkaXYgY2xhc3NOYW1lPVwiZmxleCB0aXRsZS1mb250IGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS05MDAgbWQ6ei0xMCBteS00IG1kOm15LTAgbXgtMTAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIC8+ICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsXCIgID5Eci5CaGFza2FyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PjwvTGluaz5cclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJuYXZpdGVtcyBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpiZy1pbmhlcml0IGJnLXdoaXRlIHB4LTEwIHB5LTQgbWQ6cHktMCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIC10cmFuc2xhdGUteC1mdWxsIGgtZnVsbCBtZDpoLWF1dG8gbWQ6dy1mdWxsIHctMi8zIG1kOnN0YXRpYyBtZDp0cmFuc2xhdGUteC0wICBtZDp0cmFuc2l0aW9uLW5vbmUgZWFzZS1pbi1vdXQgei0yMFwiID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTggbGVmdC04XHJcbiAgICAgICAgICAnb25DbGljaz17dG9nZ2xlfSA+PEFpRmlsbENsb3NlQ2lyY2xlIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1leHRyYWxpZ2h0IG1kOmhpZGRlbicgLz48L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtOCAgbWFpbml0ZW1zIG15LTI0IG1kOm15LTQgc3BhY2UteS02IG1kOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICA8TGluayAgaHJlZj17XCIvYWJvdXRcIn0+PGRpdiBvbkNsaWNrPXt0b2dnbGV9IGNsYXNzTmFtZT0naG92ZXI6dGV4dC15ZWxsb3ctNjAwIHRleHQtZ3JheS03MDAgY3Vyc29yLXBvaW50ZXInPkFib3V0PC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgIGhyZWY9e1wiL3NlcnZpY2VzXCJ9PjxkaXYgb25DbGljaz17dG9nZ2xlfSBjbGFzc05hbWU9J2hvdmVyOnRleHQteWVsbG93LTYwMCB0ZXh0LWdyYXktNzAwIGN1cnNvci1wb2ludGVyJz5TZXJ2aWNlczwvZGl2PjwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIDxMaW5rICBocmVmPXtcIi9zZXJ2aWNlc1wifT48ZGl2IG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPSAnaG92ZXI6dGV4dC15ZWxsb3ctNjAwIHRleHQtZ3JheS03MDAgY3Vyc29yLXBvaW50ZXInPlNlcnZpY2VzPC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayAgaHJlZj17XCIvYm9va1wifT48ZGl2IG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy02MDAgdGV4dC1ncmF5LTcwMCBjdXJzb3ItcG9pbnRlcic+Qm9vayBBcHBvaW50bWVudDwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgIGhyZWY9e1wiL2RvY3RvclwifT48ZGl2IG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy02MDAgdGV4dC1ncmF5LTcwMCBjdXJzb3ItcG9pbnRlcic+RG9jdG9yczwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgIGhyZWY9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JIT1NUfS9hZG1pbi9jb250ZW50LW1hbmFnZXIvY29sbGVjdGlvblR5cGUvYXBpOjpwYXRpZW50LnBhdGllbnQ/cGFnZT0xJnBhZ2VTaXplPTEwJnNvcnQ9bmFtZTpBU0NgfT48YSB0YXJnZXQ9eydfYmxhbmsnfT48ZGl2IG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXllbGxvdy02MDAgdGV4dC1ncmF5LTcwMCBjdXJzb3ItcG9pbnRlcic+QWRtaW48L2Rpdj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBiZy1yZWQtNTAwIG1kOnB5LTIgbWQ6cHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcmVkLTcwMCByb3VuZGVkLWxnIG1kOnRleHQtYmFzZSBhYnNvbHV0ZSB0b3AtMiBtZDptdC01IG1kOm0tNCBteS02IG14LTQgdGV4dC14cyAgbWQ6dG9wLVstNXB4XSByaWdodC0wICBwLTIgbWQ6cC02IGN1cnNvci1wb2ludGVyIHotMjBcIj5FbWVyZ2VuY3k8L2J1dHRvbj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgYWNjb3VudCBhYnNvbHV0ZSB0b3AtMSAgbWQ6dG9wLVstNXB4XSByaWdodC0wIHRleHQtNHhsIHAtNiBjdXJzb3ItcG9pbnRlciBcIj5cclxuICAgICAgICAgIDxNZEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTWRBY2NvdW50Q2lyY2xlIiwiR2lIYW1idXJnZXJNZW51IiwiQWlGaWxsQ2xvc2VDaXJjbGUiLCJMaW5rIiwiTmF2YmFyIiwidG9nZ2xlIiwicmVmIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImhyZWYiLCJzcGFuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JIT1NUIiwiYSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={308:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(308);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsWUFBWSxPQUFPLGdCQUFnQixtQkFBbUIsTUFBTSxNQUFNLDRCQUE0QixtREFBbUQsK0JBQStCLHFEQUFxRCxZQUFZLElBQUksbUNBQW1DLGFBQWEsS0FBSyxvQkFBb0IsU0FBUyxtQkFBbUIsSUFBSSxxQ0FBcUMsZUFBZSxLQUFLLHVCQUF1QixTQUFTLHVCQUF1QixJQUFJLHVCQUF1QixtQkFBbUIsdUJBQXVCLDJDQUEyQyxhQUFhLHVCQUF1QixJQUFJLGNBQWMsU0FBUyxJQUFJLHdCQUF3QixTQUFTLDBCQUEwQiw0QkFBNEIscUJBQXFCLHVCQUF1QixnREFBZ0QsZUFBZSx1QkFBdUIsSUFBSSxZQUFZLFNBQVMsSUFBSSxzQkFBc0IsU0FBUyx3QkFBd0IsU0FBUyxZQUFZLE1BQU0sU0FBUywyQkFBMkIsV0FBVyxPQUFPLFFBQVEsYUFBYSxjQUFjLEtBQUssS0FBSyxhQUFhLGNBQWMsc0JBQXNCLE1BQU0sT0FBTyxrQ0FBa0MsT0FBTyxlQUFlLFNBQVMsSUFBSSxLQUFLLGFBQWEsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLFFBQVEsbUJBQW1CLHVCQUF1QixvQ0FBb0MsdUJBQXVCLFlBQVksbUJBQW1CLEtBQUsscUJBQXFCLHNCQUFzQixxQkFBcUIseUJBQXlCLG1CQUFtQixXQUFXLGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsZUFBZSxTQUFTLFVBQVUsYUFBYSxjQUFjLGlCQUFpQixVQUFVLG1CQUFtQixZQUFZLFdBQVcsc0JBQXNCLDBCQUEwQixZQUFZLHVCQUF1QiwyQkFBMkIsd0JBQXdCLFVBQVUsc0JBQXNCLHFEQUFxRCxpQkFBaUIsV0FBVyxvQkFBb0IsbURBQW1ELG1CQUFtQixZQUFZLFNBQVMsZ0NBQWdDLFdBQVcsa0JBQWtCLGlCQUFpQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixtRUFBbUUsU0FBUyxLQUFLLCtCQUErQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wcm9jZXNzL2Jyb3dzZXIuanM/MWIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXt2YXIgZT17MzA4OmZ1bmN0aW9uKGUpe3ZhciB0PWUuZXhwb3J0cz17fTt2YXIgcjt2YXIgbjtmdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0KCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfShmdW5jdGlvbigpe3RyeXtpZih0eXBlb2Ygc2V0VGltZW91dD09PVwiZnVuY3Rpb25cIil7cj1zZXRUaW1lb3V0fWVsc2V7cj1kZWZhdWx0U2V0VGltb3V0fX1jYXRjaChlKXtyPWRlZmF1bHRTZXRUaW1vdXR9dHJ5e2lmKHR5cGVvZiBjbGVhclRpbWVvdXQ9PT1cImZ1bmN0aW9uXCIpe249Y2xlYXJUaW1lb3V0fWVsc2V7bj1kZWZhdWx0Q2xlYXJUaW1lb3V0fX1jYXRjaChlKXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fSkoKTtmdW5jdGlvbiBydW5UaW1lb3V0KGUpe2lmKHI9PT1zZXRUaW1lb3V0KXtyZXR1cm4gc2V0VGltZW91dChlLDApfWlmKChyPT09ZGVmYXVsdFNldFRpbW91dHx8IXIpJiZzZXRUaW1lb3V0KXtyPXNldFRpbWVvdXQ7cmV0dXJuIHNldFRpbWVvdXQoZSwwKX10cnl7cmV0dXJuIHIoZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIHIuY2FsbCh0aGlzLGUsMCl9fX1mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQoZSl7aWYobj09PWNsZWFyVGltZW91dCl7cmV0dXJuIGNsZWFyVGltZW91dChlKX1pZigobj09PWRlZmF1bHRDbGVhclRpbWVvdXR8fCFuKSYmY2xlYXJUaW1lb3V0KXtuPWNsZWFyVGltZW91dDtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfXRyeXtyZXR1cm4gbihlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlKX19fXZhciBpPVtdO3ZhciBvPWZhbHNlO3ZhciB1O3ZhciBhPS0xO2Z1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpe2lmKCFvfHwhdSl7cmV0dXJufW89ZmFsc2U7aWYodS5sZW5ndGgpe2k9dS5jb25jYXQoaSl9ZWxzZXthPS0xfWlmKGkubGVuZ3RoKXtkcmFpblF1ZXVlKCl9fWZ1bmN0aW9uIGRyYWluUXVldWUoKXtpZihvKXtyZXR1cm59dmFyIGU9cnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO289dHJ1ZTt2YXIgdD1pLmxlbmd0aDt3aGlsZSh0KXt1PWk7aT1bXTt3aGlsZSgrK2E8dCl7aWYodSl7dVthXS5ydW4oKX19YT0tMTt0PWkubGVuZ3RofXU9bnVsbDtvPWZhbHNlO3J1bkNsZWFyVGltZW91dChlKX10Lm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7Zm9yKHZhciByPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dFtyLTFdPWFyZ3VtZW50c1tyXX19aS5wdXNoKG5ldyBJdGVtKGUsdCkpO2lmKGkubGVuZ3RoPT09MSYmIW8pe3J1blRpbWVvdXQoZHJhaW5RdWV1ZSl9fTtmdW5jdGlvbiBJdGVtKGUsdCl7dGhpcy5mdW49ZTt0aGlzLmFycmF5PXR9SXRlbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX07dC50aXRsZT1cImJyb3dzZXJcIjt0LmJyb3dzZXI9dHJ1ZTt0LmVudj17fTt0LmFyZ3Y9W107dC52ZXJzaW9uPVwiXCI7dC52ZXJzaW9ucz17fTtmdW5jdGlvbiBub29wKCl7fXQub249bm9vcDt0LmFkZExpc3RlbmVyPW5vb3A7dC5vbmNlPW5vb3A7dC5vZmY9bm9vcDt0LnJlbW92ZUxpc3RlbmVyPW5vb3A7dC5yZW1vdmVBbGxMaXN0ZW5lcnM9bm9vcDt0LmVtaXQ9bm9vcDt0LnByZXBlbmRMaXN0ZW5lcj1ub29wO3QucHJlcGVuZE9uY2VMaXN0ZW5lcj1ub29wO3QubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfTt0LmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9O3QuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfTt0LnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXt2YXIgbj10W3JdO2lmKG4hPT11bmRlZmluZWQpe3JldHVybiBuLmV4cG9ydHN9dmFyIGk9dFtyXT17ZXhwb3J0czp7fX07dmFyIG89dHJ1ZTt0cnl7ZVtyXShpLGkuZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtvPWZhbHNlfWZpbmFsbHl7aWYobylkZWxldGUgdFtyXX1yZXR1cm4gaS5leHBvcnRzfWlmKHR5cGVvZiBfX25jY3dwY2tfcmVxdWlyZV9fIT09XCJ1bmRlZmluZWRcIilfX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjt2YXIgcj1fX25jY3dwY2tfcmVxdWlyZV9fKDMwOCk7bW9kdWxlLmV4cG9ydHM9cn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ })

});