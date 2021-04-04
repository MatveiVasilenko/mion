webpackHotUpdate_N_E("pages/[lang]/office/courses",{

/***/ "./layouts/office/components/Menu.js":
/*!*******************************************!*\
  !*** ./layouts/office/components/Menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _initData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initData */ "./layouts/office/components/initData.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../styles/layouts/office-layouts-styles.module.scss */ "./styles/layouts/office-layouts-styles.module.scss");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../global/utils */ "./global/utils.js");


var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\office\\components\\Menu.js",
    _this = undefined,
    _s = $RefreshSig$();









var Menu = function Menu() {
  _s();

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      width = _useWindowDimensions.width;

  var mobile = width < 768 ? true : false;
  return !mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: _initData__WEBPACK_IMPORTED_MODULE_2__["configMenu"].map(function (item, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.officeWrapperMenuItem,
        onClick: function onClick() {
          return router.push(item.path);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          styles: {
            fill: 'inherit',
            stroke: 'inherit'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            styles: {
              fill: 'inherit',
              stroke: 'inherit'
            },
            children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(item.svg, {
              width: '55px',
              height: '45px'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)
      }, "itemMenu".concat(idx), false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 19
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMob,
    children: _initData__WEBPACK_IMPORTED_MODULE_2__["configMenu"].map(function (item, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMobSvg,
        onClick: function onClick() {
          return router.push(item.path);
        },
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(item.svg, {
          width: '40px',
          height: '40px'
        })
      }, "itemMenuMob".concat(idx), false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }, _this);
};

_s(Menu, "ryR7mLr8YBgJ6dEcE7angTe4Nyw=", false, function () {
  return [_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9vZmZpY2UvY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJtb2JpbGUiLCJjb25maWdNZW51IiwibWFwIiwiaXRlbSIsImlkeCIsImNsYXNzZXMiLCJvZmZpY2VXcmFwcGVyTWVudUl0ZW0iLCJyb3V0ZXIiLCJwdXNoIiwicGF0aCIsImZpbGwiLCJzdHJva2UiLCJzdmdTcHJpdGUiLCJzdmciLCJoZWlnaHQiLCJ0aXRsZSIsIm1lbnVNb2IiLCJtZW51TW9iU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsNkJBRUdDLDZEQUFtQixFQUZ0QjtBQUFBLE1BRVBDLEtBRk8sd0JBRVBBLEtBRk87O0FBR2YsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLEdBQUcsR0FBUixHQUFjLElBQWQsR0FBcUIsS0FBcEM7QUFFQSxTQUNJLENBQUNDLE1BQUQsZ0JBQVU7QUFBQSxjQUNUQyxvREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsMEJBQ1I7QUFDSSxpQkFBUyxFQUFFQyx3RkFBTyxDQUFDQyxxQkFEdkI7QUFFSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsTUFBTSxDQUFDQyxJQUFQLENBQVlMLElBQUksQ0FBQ00sSUFBakIsQ0FBTjtBQUFBLFNBRmI7QUFBQSwrQkFLSTtBQUNJLGdCQUFNLEVBQUU7QUFDSkMsZ0JBQUksRUFBRSxTQURGO0FBRUpDLGtCQUFNLEVBQUU7QUFGSixXQURaO0FBQUEsa0NBTUk7QUFBSyxrQkFBTSxFQUFFO0FBQ1RELGtCQUFJLEVBQUUsU0FERztBQUVUQyxvQkFBTSxFQUFFO0FBRkMsYUFBYjtBQUFBLHNCQUtLQyxzRUFBUyxDQUFDVCxJQUFJLENBQUNVLEdBQU4sRUFBVztBQUNqQmQsbUJBQUssRUFBRSxNQURVO0FBRWpCZSxvQkFBTSxFQUFFO0FBRlMsYUFBWDtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFpQkk7QUFBQSxzQkFBTVgsSUFBSSxDQUFDWTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLDJCQUdvQlgsR0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBZjtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVixnQkFxREk7QUFBSyxhQUFTLEVBQUVDLHdGQUFPLENBQUNXLE9BQXhCO0FBQUEsY0FDS2Ysb0RBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDBCQUNaO0FBQ0ksaUJBQVMsRUFBRUMsd0ZBQU8sQ0FBQ1ksVUFEdkI7QUFFSSxlQUFPLEVBQUU7QUFBQSxpQkFBTVYsTUFBTSxDQUFDQyxJQUFQLENBQVlMLElBQUksQ0FBQ00sSUFBakIsQ0FBTjtBQUFBLFNBRmI7QUFBQSxrQkFLS0csc0VBQVMsQ0FBQ1QsSUFBSSxDQUFDVSxHQUFOLEVBQVc7QUFDakJkLGVBQUssRUFBRSxNQURVO0FBRWpCZSxnQkFBTSxFQUFFO0FBRlMsU0FBWDtBQUxkLDhCQUd1QlYsR0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F0RFI7QUFzRUgsQ0EzRUQ7O0dBQU1QLEk7VUFFZ0JDLHFEOzs7S0FGaEJELEk7QUE0RVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9vZmZpY2UvY291cnNlcy5lZTdjN2MzYjlhYjFjN2M1MjgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25maWdNZW51IH0gZnJvbSAnLi9pbml0RGF0YSc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9sYXlvdXRzL29mZmljZS1sYXlvdXRzLXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgICAgXHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aWR0aCA8IDc2OCA/IHRydWUgOiBmYWxzZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgIW1vYmlsZSA/IDxkaXY+XHJcbiAgICAgICAge2NvbmZpZ01lbnUubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJNZW51SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGl0ZW1NZW51JHtpZHh9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ2luaGVyaXQnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoaXRlbS5zdmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJNZW51SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvdXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnaW5oZXJpdCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZShpdGVtLnN2Zywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRi9GF0L7QtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+OiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU1vYn0+XHJcbiAgICAgICAgICAgICAgICB7Y29uZmlnTWVudS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TW9iU3ZnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpdGVtTWVudU1vYiR7aWR4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZShpdGVtLnN2Zywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudSJdLCJzb3VyY2VSb290IjoiIn0=