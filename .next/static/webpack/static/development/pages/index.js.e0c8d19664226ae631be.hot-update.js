webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Review.js":
/*!******************************!*\
  !*** ./components/Review.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Review.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var img = _ref.img,
      stars = _ref.stars,
      description = _ref.description,
      avatar = _ref.avatar,
      hostName = _ref.hostName,
      hostCountry = _ref.hostCountry;

  var starArray = [],
      i = 0,
      len = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(stars);

  while (++i <= len) {
    starArray.push(i);
  }

  return __jsx("div", {
    "class": "w-full lg:w-1/3 px-1 my-5 bg-blue-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    "class": "bg-no-repeat bg-cover rounded w-full",
    src: img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    "class": "flex items-start justify-start flex-wrap py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, starArray.map(function (i) {
    return __jsx("svg", {
      key: i,
      "class": "fill-current w-4 h-4 text-cyan mr-1",
      viewBox: "0 0 1000 1000",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("path", {
      d: "M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  })), __jsx("p", {
    "class": "text-gray-600 font-thin leading-snug text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, description), __jsx("div", {
    "class": "flex items-center justify-start flex-wrap mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    "class": "rounded-full w-12 h-12",
    src: avatar,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    "class": "pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    "class": "text-sm font-semibold text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, hostName), __jsx("p", {
    "class": "text-sm text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, hostCountry))));
});

/***/ })

})
//# sourceMappingURL=index.js.e0c8d19664226ae631be.hot-update.js.map