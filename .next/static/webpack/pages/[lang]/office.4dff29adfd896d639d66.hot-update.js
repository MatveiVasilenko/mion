webpackHotUpdate_N_E("pages/[lang]/office",{

/***/ "./views/office/main/components/MainHead.js":
/*!**************************************************!*\
  !*** ./views/office/main/components/MainHead.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/headerOffice/HeaderItem */ "./widgets/headerOffice/HeaderItem.js");
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../network */ "./network.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../global/utils */ "./global/utils.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");




var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\components\\MainHead.js",
    _this = undefined,
    _s = $RefreshSig$();








var MainHead = function MainHead(_ref) {
  _s();

  var classes = _ref.classes;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_App_ContextApp__WEBPACK_IMPORTED_MODULE_5__["default"]),
      stateApp = _useContext.stateApp;

  var user = stateApp.user;

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      width = _useWindowDimensions.width;

  var mobile = width < 768 ? true : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      userData = _useState[0],
      setUserData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var cleanupFunction;
    return D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cleanupFunction = false;

            if (user) {
              Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                return D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        fetch("".concat(_network__WEBPACK_IMPORTED_MODULE_6__["NET"].BACK_URL, "/refferals/").concat(user.id), {
                          method: 'GET',
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json' // 'X-Requested-With': 'XMLHttpRequest'
                            // 'Authorization': 'Bearer ' + this.state.clientToken,

                          },
                          withCredentials: true
                        }).then(function (response) {
                          if (response.status === 200) {
                            response.json().then(function (data) {
                              if (!cleanupFunction) setUserData(data);
                            });
                          }
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
            }

            return _context2.abrupt("return", function () {
              return cleanupFunction = true;
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    all: 0,
    realMoney: 0,
    futureMoney: 0,
    active: 0
  }),
      counter = _useState2[0],
      setCounter = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (userData) {
      (function () {
        var active = 0;
        var all = 0;
        var realMoney = 0;
        var futureMoney = 0;

        var _loop = function _loop(value) {
          if (userData[value]) {
            userData[value].map(function (el) {
              all++;

              if (el.status === '1') {
                active++;

                if (value === 'first') {
                  realMoney = realMoney + 10;
                  futureMoney = futureMoney + 10;
                } else if (value === 'second') {
                  realMoney = realMoney + 5;
                  futureMoney = futureMoney + 5;
                } else if (value === 'third') {
                  futureMoney = futureMoney + 3;
                }
              }
            });
          }
        };

        for (var value in userData) {
          _loop(value);
        }

        setCounter({
          all: all,
          active: active,
          realMoney: realMoney,
          futureMoney: futureMoney
        });
      })();
    }
  }, [userData]);
  return !mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHead,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: {
        tarif: 'Ваш пакет',
        date: 'действителен до '
      },
      value: {
        tarif: 'Standard',
        date: user ? user.day_end : ''
      },
      type: "tarif"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u0411\u0430\u043B\u0430\u043D\u0441",
      value: user ? user.money + ' y.e' : '0 y.e',
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0434\u043E\u0445\u043E\u0434",
      value: counter.realMoney + ' y.e',
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",
      value: counter.active,
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 19
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHeadMob,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-right': '3px'
          },
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__["default"])('MoneyList', {
            width: '13px',
            height: '13px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMob,
          children: "\u0411\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: user && user.money
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__["default"])('Money', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: user.end_day
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u0414\u043E\u0445\u043E\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-right': '3px'
          },
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__["default"])('MoneyList', {
            width: '13px',
            height: '13px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMob,
          children: "\u0411\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: user && user.money
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__["default"])('Money', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: counter.realMoney
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u0414\u043E\u0445\u043E\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_8__["default"])('Users', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: counter.active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 9
  }, _this);
};

_s(MainHead, "cbsDy8LOe6u8dv/bk0XdW69ovfQ=", false, function () {
  return [_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = MainHead;
/* harmony default export */ __webpack_exports__["default"] = (MainHead);

var _c;

$RefreshReg$(_c, "MainHead");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3Mvb2ZmaWNlL21haW4vY29tcG9uZW50cy9NYWluSGVhZC5qcyJdLCJuYW1lcyI6WyJNYWluSGVhZCIsImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dEFwcCIsInN0YXRlQXBwIiwidXNlciIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsIm1vYmlsZSIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZUVmZmVjdCIsImNsZWFudXBGdW5jdGlvbiIsImZldGNoIiwiTkVUIiwiQkFDS19VUkwiLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImFsbCIsInJlYWxNb25leSIsImZ1dHVyZU1vbmV5IiwiYWN0aXZlIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ2YWx1ZSIsIm1hcCIsImVsIiwicmVmZmVyYWxIZWFkIiwibmFtZSIsInN0eWxlcyIsInRhcmlmIiwiZGF0ZSIsImRheV9lbmQiLCJtb25leSIsInJlZmZlcmFsSGVhZE1vYiIsInJlZmZlcmFsSGVhZEl0ZW1Nb2IiLCJyZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYiIsInN2Z1Nwcml0ZSIsImhlaWdodCIsInJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iIiwicmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYiIsImVuZF9kYXkiLCJyZWZmZXJhbEhlYWRJdGVtVGV4dE1vYlNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BRVg7QUFBQTs7QUFBQSxNQURGQyxPQUNFLFFBREZBLE9BQ0U7O0FBQUEsb0JBQ2lCQyx3REFBVSxDQUFDQywrREFBRCxDQUQzQjtBQUFBLE1BQ0tDLFFB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RUFBRSxNQURTO0FBRWhCdUMsa0JBQU0sRUFBRTtBQUZRLFdBQVY7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBU0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUU3QyxPQUFPLENBQUMrQyx5QkFBeEI7QUFBQSxvQkFBb0RsQixPQUFPLENBQUNEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFZSTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRTVCLE9BQU8sQ0FBQ2lELDRCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBakRKO0FBZ0lILENBck1EOztHQUFNbEQsUTtVQU1nQk0scUQ7OztLQU5oQk4sUTtBQXNNU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddL29mZmljZS40ZGZmMjlhZGZkODk2ZDYzOWQ2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXJJdGVtIGZyb20gJy4uLy4uLy4uLy4uL3dpZGdldHMvaGVhZGVyT2ZmaWNlL0hlYWRlckl0ZW0nXHJcbmltcG9ydCBDb250ZXh0QXBwIGZyb20gJy4vLi4vLi4vLi4vLi4vY29udGV4dC9BcHAvQ29udGV4dEFwcCc7XHJcbmltcG9ydCB7IE5FVCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vbmV0d29yayc7XHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4vLi4vLi4vLi4vLi4vZ2xvYmFsL3V0aWxzJztcclxuaW1wb3J0IHN2Z1Nwcml0ZSBmcm9tICcuLy4uLy4uLy4uLy4uL3Byb2plY3Qvc3ZnL3N2Z1Nwcml0ZSc7XHJcblxyXG5jb25zdCBNYWluSGVhZCA9ICh7XHJcbiAgICBjbGFzc2VzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHtzdGF0ZUFwcH0gPSB1c2VDb250ZXh0KENvbnRleHRBcHApXHJcbiAgICBjb25zdCB1c2VyID0gc3RhdGVBcHAudXNlclxyXG5cclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgICAgXHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aWR0aCA8IDc2OCA/IHRydWUgOiBmYWxzZVxyXG4gICAgXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbnVwRnVuY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goYCR7TkVULkJBQ0tfVVJMfS9yZWZmZXJhbHMvJHt1c2VyLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5zdGF0ZS5jbGllbnRUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighY2xlYW51cEZ1bmN0aW9uKSBzZXRVc2VyRGF0YShkYXRhKSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkoKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYW51cEZ1bmN0aW9uID0gdHJ1ZVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGFsbDogMCxcclxuICAgICAgICByZWFsTW9uZXk6IDAsXHJcbiAgICAgICAgZnV0dXJlTW9uZXk6IDAsXHJcbiAgICAgICAgYWN0aXZlOiAwXHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IDBcclxuICAgICAgICAgICAgbGV0IGFsbCA9IDBcclxuICAgICAgICAgICAgbGV0IHJlYWxNb25leSA9IDBcclxuICAgICAgICAgICAgbGV0IGZ1dHVyZU1vbmV5ID0gMFxyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBpbiB1c2VyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJEYXRhW3ZhbHVlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhW3ZhbHVlXS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5zdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxNb25leSA9IHJlYWxNb25leSArIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnV0dXJlTW9uZXkgPSBmdXR1cmVNb25leSArIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnc2Vjb25kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxNb25leSA9IHJlYWxNb25leSArIDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdXR1cmVNb25leSA9IGZ1dHVyZU1vbmV5ICsgNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RoaXJkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZU1vbmV5ID0gZnV0dXJlTW9uZXkgKyAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoe2FsbCwgYWN0aXZlLCByZWFsTW9uZXksIGZ1dHVyZU1vbmV5fSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlckRhdGFdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAhbW9iaWxlID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkfT5cclxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgc3ZnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyaWY6ICfQktCw0Ygg0L/QsNC60LXRgicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJ9C00LXQudGB0YLQstC40YLQtdC70LXQvSDQtNC+ICdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmlmOiAnU3RhbmRhcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHVzZXIgPyB1c2VyLmRheV9lbmQgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0YXJpZlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCR0LDQu9Cw0L3RgVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlciA/IHVzZXIubW9uZXkgKyAnIHkuZScgOiAnMCB5LmUnfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNvdW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgc3ZnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi0KDQsNGB0YfQtdGC0L3Ri9C5INC00L7RhdC+0LRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50ZXIucmVhbE1vbmV5ICsgJyB5LmUnfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNvdW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEhlYWRlckl0ZW0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgc3ZnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7fVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi0J/QsNGA0YLQvdC10YDRi1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnRlci5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY291bnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRNb2J9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7J21hcmdpbi1yaWdodCc6ICczcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZSgnTW9uZXlMaXN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxM3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtVGV4dE1vYn0+0JHQsNC70LDQvdGBPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+e3VzZXIgJiYgdXNlci5tb25leX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU1vYn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1XcmFwcGVyTW9ifT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZSgnTW9uZXknLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9ifT57dXNlci5lbmRfZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCU0L7RhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU1vYn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1XcmFwcGVyTW9ifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3snbWFyZ2luLXJpZ2h0JzogJzNweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdNb25leUxpc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9ifT7QkdCw0LvQsNC90YE8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9ifT57dXNlciAmJiB1c2VyLm1vbmV5fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTW9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdNb25leScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCdcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2J9Pntjb3VudGVyLnJlYWxNb25leX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtVGV4dE1vYlNtYWxsfT7QlNC+0YXQvtC0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ1VzZXJzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+e2NvdW50ZXIuYWN0aXZlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCf0LDRgNGC0L3QtdGA0Ys8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWQiXSwic291cmNlUm9vdCI6IiJ9