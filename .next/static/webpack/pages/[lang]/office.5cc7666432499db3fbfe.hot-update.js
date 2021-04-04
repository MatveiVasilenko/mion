webpackHotUpdate_N_E("pages/[lang]/office",{

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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

_s(Menu, "4txLy89PLdwLu9dx3lje+ddJwjQ=", false, function () {
  return [_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9vZmZpY2UvY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJtb2JpbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25maWdNZW51IiwibWFwIiwiaXRlbSIsImlkeCIsImNsYXNzZXMiLCJvZmZpY2VXcmFwcGVyTWVudUl0ZW0iLCJwdXNoIiwicGF0aCIsImZpbGwiLCJzdHJva2UiLCJzdmdTcHJpdGUiLCJzdmciLCJoZWlnaHQiLCJ0aXRsZSIsIm1lbnVNb2IiLCJtZW51TW9iU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsNkJBRUdDLDZEQUFtQixFQUZ0QjtBQUFBLE1BRVBDLEtBRk8sd0JBRVBBLEtBRk87O0FBR2YsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLEdBQUcsR0FBUixHQUFjLElBQWQsR0FBcUIsS0FBcEM7QUFDQSxNQUFNRSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDSSxDQUFDRixNQUFELGdCQUFVO0FBQUEsY0FDVEcsb0RBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDBCQUNSO0FBQ0ksaUJBQVMsRUFBRUMsd0ZBQU8sQ0FBQ0MscUJBRHZCO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1QLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSixJQUFJLENBQUNLLElBQWpCLENBQU47QUFBQSxTQUZiO0FBQUEsK0JBS0k7QUFDSSxnQkFBTSxFQUFFO0FBQ0pDLGdCQUFJLEVBQUUsU0FERjtBQUVKQyxrQkFBTSxFQUFFO0FBRkosV0FEWjtBQUFBLGtDQU1JO0FBQUssa0JBQU0sRUFBRTtBQUNURCxrQkFBSSxFQUFFLFNBREc7QUFFVEMsb0JBQU0sRUFBRTtBQUZDLGFBQWI7QUFBQSxzQkFLS0Msc0VBQVMsQ0FBQ1IsSUFBSSxDQUFDUyxHQUFOLEVBQVc7QUFDakJmLG1CQUFLLEVBQUUsTUFEVTtBQUVqQmdCLG9CQUFNLEVBQUU7QUFGUyxhQUFYO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQWlCSTtBQUFBLHNCQUFNVixJQUFJLENBQUNXO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEosMkJBR29CVixHQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFmO0FBRFM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFWLGdCQXFESTtBQUFLLGFBQVMsRUFBRUMsd0ZBQU8sQ0FBQ1UsT0FBeEI7QUFBQSxjQUNLZCxvREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsMEJBQ1o7QUFDSSxpQkFBUyxFQUFFQyx3RkFBTyxDQUFDVyxVQUR2QjtBQUVJLGVBQU8sRUFBRTtBQUFBLGlCQUFNakIsTUFBTSxDQUFDUSxJQUFQLENBQVlKLElBQUksQ0FBQ0ssSUFBakIsQ0FBTjtBQUFBLFNBRmI7QUFBQSxrQkFLS0csc0VBQVMsQ0FBQ1IsSUFBSSxDQUFDUyxHQUFOLEVBQVc7QUFDakJmLGVBQUssRUFBRSxNQURVO0FBRWpCZ0IsZ0JBQU0sRUFBRTtBQUZTLFNBQVg7QUFMZCw4QkFHdUJULEdBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdERSO0FBc0VILENBM0VEOztHQUFNVCxJO1VBRWdCQyxxRCxFQUVISSxxRDs7O0tBSmJMLEk7QUE0RVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9vZmZpY2UuNWNjNzY2NjQzMjQ5OWRiM2ZiZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29uZmlnTWVudSB9IGZyb20gJy4vaW5pdERhdGEnO1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi8uLi8uLi8uLi9zdHlsZXMvbGF5b3V0cy9vZmZpY2UtbGF5b3V0cy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJztcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi8uLi8uLi8uLi9nbG9iYWwvdXRpbHMnO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7ICAgIFxyXG4gICAgY29uc3QgbW9iaWxlID0gd2lkdGggPCA3NjggPyB0cnVlIDogZmFsc2VcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICFtb2JpbGUgPyA8ZGl2PlxyXG4gICAgICAgIHtjb25maWdNZW51Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVyTWVudUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goaXRlbS5wYXRoKX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BpdGVtTWVudSR7aWR4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnaW5oZXJpdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICdpbmhlcml0J1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKGl0ZW0uc3ZnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVyTWVudUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3V0VXNlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ2luaGVyaXQnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoaXRlbS5zdmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCS0YvRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PjogXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVNb2J9PlxyXG4gICAgICAgICAgICAgICAge2NvbmZpZ01lbnUubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudU1vYlN2Z31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goaXRlbS5wYXRoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgaXRlbU1lbnVNb2Ike2lkeH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoaXRlbS5zdmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnUiXSwic291cmNlUm9vdCI6IiJ9