webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/airbnb-home.jpg */ "./public/airbnb-home.jpg");
/* harmony import */ var _public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderButton */ "./components/HeaderButton.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var stagger = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  };
  var fadeUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 30
    }
  };
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].header, {
    initial: "initial",
    animate: "animate",
    style: {
      backgroundImage: "url(".concat(_public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, ")")
    },
    className: "relative bg-cover bg-no-repeat bg-top-right lg:bg-center p-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      height: 32,
      width: 32,
      display: 'block',
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: stagger,
    className: "max-w-5xl mx-auto py-4 lg:py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h2, {
    variants: fadeUp,
    className: "text-white text-4xl lg:text-5xl font-semibold leading-relaxing mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Book a trip. Host travels. All on Airbnb"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: fadeUp,
    className: "flex items-center flex-wrap justify-start max-w-2xl lg:mx-0 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "white",
    description: "Find a place to stay and things to do",
    name: "Explore",
    borderColor: "transparent",
    fontColor: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "transparent",
    description: "Earn money from your extra space",
    name: "Host",
    borderColor: "white",
    fontColor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.e0c125e1d66c6fd5f1d4.hot-update.js.map