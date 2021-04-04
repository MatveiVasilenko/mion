webpackHotUpdate_N_E("pages/[lang]/office",{

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
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../global/utils */ "./global/utils.js");


var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\office\\Office.js",
    _this = undefined,
    _s = $RefreshSig$();












var Office = function Office(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      width = _useWindowDimensions.width;

  var mobile = width < 768 ? true : false;
  var svgStyle = {
    width: mobile ? '20px' : '40px',
    height: mobile ? '13px' : '25px'
  };

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
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocial,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Telegram', svgStyle)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          onClick: outUser,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Out', svgStyle)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperBody,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperContent,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(Office, "aDkw5pcePJ/k5V3EIfIzFk8oDFM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], _global_utils__WEBPACK_IMPORTED_MODULE_10__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9vZmZpY2UvT2ZmaWNlLmpzIl0sIm5hbWVzIjpbIk9mZmljZSIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpZHRoIiwibW9iaWxlIiwic3ZnU3R5bGUiLCJoZWlnaHQiLCJvdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNvb2tpZSIsInJlbW92ZSIsInB1c2giLCJjbGFzc2VzIiwib2ZmaWNlV3JhcHBlciIsIm9mZmljZVdyYXBwZXJIZWFkZXIiLCJvZmZpY2VMb2dvIiwiREFUQSIsIm5hbWUiLCJvZmZpY2VTb2NpYWwiLCJvZmZpY2VTb2NpYWxJdGVtIiwic3ZnU3ByaXRlIiwib2ZmaWNlV3JhcHBlckJvZHkiLCJvZmZpY2VXcmFwcGVyTWVudSIsIm9mZmljZVdyYXBwZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVUO0FBQUE7O0FBQUEsTUFERkMsUUFDRSxRQURGQSxRQUNFO0FBQ0YsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFERSw2QkFFZ0JDLDhEQUFtQixFQUZuQztBQUFBLE1BRU1DLEtBRk4sd0JBRU1BLEtBRk47O0FBR0YsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLEdBQUcsR0FBUixHQUFjLElBQWQsR0FBcUIsS0FBcEM7QUFFQSxNQUFNRSxRQUFRLEdBQUc7QUFDYkYsU0FBSyxFQUFFQyxNQUFNLEdBQUcsTUFBSCxHQUFZLE1BRFo7QUFFYkUsVUFBTSxFQUFFRixNQUFNLEdBQUcsTUFBSCxHQUFZO0FBRmIsR0FBakI7O0FBSUEsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixXQUF4QjtBQUNBQyx3REFBTSxDQUFDQyxNQUFQLENBQWMsV0FBZDtBQUNBWCxVQUFNLENBQUNZLElBQVAsQ0FBWSxnQkFBWjtBQUNILEdBSkQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLHdGQUFPLENBQUNDLGFBQXhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELHdGQUFPLENBQUNFLG1CQUF4QjtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBRUYsd0ZBQU8sQ0FBQ0csVUFBdEI7QUFBQSxrQkFBbUNDLGtEQUFJLENBQUNDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBRUwsd0ZBQU8sQ0FBQ00sWUFBeEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVOLHdGQUFPLENBQUNPLGdCQUF4QjtBQUFBLG9CQUNLQyxzRUFBUyxDQUFDLFVBQUQsRUFBYWhCLFFBQWI7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFDSSxtQkFBUyxFQUFFUSx3RkFBTyxDQUFDTyxnQkFEdkI7QUFFSSxpQkFBTyxFQUFFYixPQUZiO0FBQUEsb0JBSUtjLHNFQUFTLENBQUMsS0FBRCxFQUFRaEIsUUFBUjtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFlSTtBQUFLLGVBQVMsRUFBRVEsd0ZBQU8sQ0FBQ1MsaUJBQXhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFVCx3RkFBTyxDQUFDVSxpQkFBeEI7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFVix3RkFBTyxDQUFDVyxvQkFBeEI7QUFBQSxrQkFDS3pCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBMUNEOztHQUFNRCxNO1VBR2FHLHFELEVBQ0dDLHNEOzs7S0FKaEJKLE07QUEyQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9vZmZpY2UuZTExNjQ1ZTI3OWFiNzEwYzNlMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlQ29udGV4dFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy9sYXlvdXRzL29mZmljZS1sYXlvdXRzLXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL01lbnUnXHJcbmltcG9ydCB7IERBVEEgfSBmcm9tICcuLy4uLy4uL3Byb2plY3QvZGF0YSc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2tlbiB9IGZyb20gJy4vLi4vLi4vY29udGV4dC9BcHAvYWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJztcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi8uLi8uLi9nbG9iYWwvdXRpbHMnO1xyXG5cclxuY29uc3QgT2ZmaWNlID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpOyAgICBcclxuICAgIGNvbnN0IG1vYmlsZSA9IHdpZHRoIDwgNzY4ID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG4gICAgY29uc3Qgc3ZnU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6IG1vYmlsZSA/ICcyMHB4JyA6ICc0MHB4JyxcclxuICAgICAgICBoZWlnaHQ6IG1vYmlsZSA/ICcxM3B4JyA6ICcyNXB4J1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3V0VXNlciA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclRva2VuJylcclxuICAgICAgICBjb29raWUucmVtb3ZlKCd1c2VyVG9rZW4nKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcnUvYXV0aC9sb2dpbicpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VMb2dvfT57REFUQS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlU29jaWFsSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ1RlbGVncmFtJywgc3ZnU3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VTb2NpYWxJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvdXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ091dCcsIHN2Z1N0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlV3JhcHBlckJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlV3JhcHBlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgT2ZmaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==