webpackHotUpdate_N_E("pages/[lang]/office/partners",{

/***/ "./layouts/office/Office.js":
/*!**********************************!*\
  !*** ./layouts/office/Office.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/layouts/office-layouts-styles.module.scss */ "./styles/layouts/office-layouts-styles.module.scss");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu */ "./layouts/office/components/Menu.js");
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../project/data */ "./project/data.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _context_App_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../context/App/actions */ "./context/App/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\office\\Office.js",
    _this = undefined,
    _s = $RefreshSig$();











var Office = function Office(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var outUser = function outUser() {
    localStorage.removeItem('userToken');
    react_cookies__WEBPACK_IMPORTED_MODULE_9___default.a.remove('userToken');
    router.push('/ru/auth/login');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeLogo,
        children: _project_data__WEBPACK_IMPORTED_MODULE_4__["DATA"].name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocial,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Telegram', {
            width: '40px',
            height: '25px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Out', {
            width: '40px',
            height: '25px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperBody,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperContent,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(Office, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Office;
/* harmony default export */ __webpack_exports__["default"] = (Office);

var _c;

$RefreshReg$(_c, "Office");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9vZmZpY2UvT2ZmaWNlLmpzIl0sIm5hbWVzIjpbIk9mZmljZSIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwib3V0VXNlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjb29raWUiLCJyZW1vdmUiLCJwdXNoIiwiY2xhc3NlcyIsIm9mZmljZVdyYXBwZXIiLCJvZmZpY2VXcmFwcGVySGVhZGVyIiwib2ZmaWNlTG9nbyIsIkRBVEEiLCJuYW1lIiwib2ZmaWNlU29jaWFsIiwib2ZmaWNlU29jaWFsSXRlbSIsInN2Z1Nwcml0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2ZmaWNlV3JhcHBlckJvZHkiLCJvZmZpY2VXcmFwcGVyTWVudSIsIm9mZmljZVdyYXBwZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVUO0FBQUE7O0FBQUEsTUFERkMsUUFDRSxRQURGQSxRQUNFO0FBQ0YsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLFdBQXhCO0FBQ0FDLHdEQUFNLENBQUNDLE1BQVAsQ0FBYyxXQUFkO0FBQ0FOLFVBQU0sQ0FBQ08sSUFBUCxDQUFZLGdCQUFaO0FBQ0gsR0FKRDs7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsd0ZBQU8sQ0FBQ0MsYUFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsd0ZBQU8sQ0FBQ0UsbUJBQXhCO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFFRix3RkFBTyxDQUFDRyxVQUF0QjtBQUFBLGtCQUFtQ0Msa0RBQUksQ0FBQ0M7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFTCx3RkFBTyxDQUFDTSxZQUF4QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRU4sd0ZBQU8sQ0FBQ08sZ0JBQXhCO0FBQUEsb0JBQ0tDLHNFQUFTLENBQUMsVUFBRCxFQUFhO0FBQ25CQyxpQkFBSyxFQUFFLE1BRFk7QUFFbkJDLGtCQUFNLEVBQUU7QUFGVyxXQUFiO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JO0FBQUssbUJBQVMsRUFBRVYsd0ZBQU8sQ0FBQ08sZ0JBQXhCO0FBQUEsb0JBQ0tDLHNFQUFTLENBQUMsS0FBRCxFQUFRO0FBQ2RDLGlCQUFLLEVBQUUsTUFETztBQUVkQyxrQkFBTSxFQUFFO0FBRk0sV0FBUjtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFrQkk7QUFBSyxlQUFTLEVBQUVWLHdGQUFPLENBQUNXLGlCQUF4QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRVgsd0ZBQU8sQ0FBQ1ksaUJBQXhCO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBRVosd0ZBQU8sQ0FBQ2Esb0JBQXhCO0FBQUEsa0JBQ0t0QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2QkgsQ0F2Q0Q7O0dBQU1ELE07VUFHYUcscUQ7OztLQUhiSCxNO0FBd0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vb2ZmaWNlL3BhcnRuZXJzLmRmYzdkY2M1ZTZlMWI1NDczOWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZUNvbnRleHRcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvbGF5b3V0cy9vZmZpY2UtbGF5b3V0cy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51J1xyXG5pbXBvcnQgeyBEQVRBIH0gZnJvbSAnLi8uLi8uLi9wcm9qZWN0L2RhdGEnO1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IENvbnRleHRBcHAgZnJvbSAnLi8uLi8uLi9jb250ZXh0L0FwcC9Db250ZXh0QXBwJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcyc7XHJcblxyXG5jb25zdCBPZmZpY2UgPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3Qgb3V0VXNlciA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclRva2VuJylcclxuICAgICAgICBjb29raWUucmVtb3ZlKCd1c2VyVG9rZW4nKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcnUvYXV0aC9sb2dpbicpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VMb2dvfT57REFUQS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlU29jaWFsSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ1RlbGVncmFtJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVNvY2lhbEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdPdXQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJCb2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE9mZmljZSJdLCJzb3VyY2VSb290IjoiIn0=