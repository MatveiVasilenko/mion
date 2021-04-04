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
          children: counter.realMoney
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3Mvb2ZmaWNlL21haW4vY29tcG9uZW50cy9NYWluSGVhZC5qcyJdLCJuYW1lcyI6WyJNYWluSGVhZCIsImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiQ29udGV4dEFwcCIsInN0YXRlQXBwIiwidXNlciIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsIm1vYmlsZSIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZUVmZmVjdCIsImNsZWFudXBGdW5jdGlvbiIsImZldGNoIiwiTkVUIiwiQkFDS19VUkwiLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImFsbCIsInJlYWxNb25leSIsImZ1dHVyZU1vbmV5IiwiYWN0aXZlIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ2YWx1ZSIsIm1hcCIsImVsIiwicmVmZmVyYWxIZWFkIiwibmFtZSIsInN0eWxlcyIsInRhcmlmIiwiZGF0ZSIsImRheV9lbmQiLCJtb25leSIsInJlZmZlcmFsSGVhZE1vYiIsInJlZmZlcmFsSGVhZEl0ZW1Nb2IiLCJyZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYiIsInN2Z1Nwcml0ZSIsImhlaWdodCIsInJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iIiwicmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYiIsInJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FFWDtBQUFBOztBQUFBLE1BREZDLE9BQ0UsUUFERkEsT0FDRTs7QUFBQSxvQkFDaUJDLHdEQUFVLENBQUNDLCtEQUFELENBRDNCO0FBQUEsTUFDS0MsUUFETCxlQUNLQSxR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QUVoQnVDLGtCQUFNLEVBQUU7QUFGUSxXQUFWO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVNJO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFFN0MsT0FBTyxDQUFDK0MseUJBQXhCO0FBQUEsb0JBQW9EbEIsT0FBTyxDQUFDRDtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBWUk7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUU1QixPQUFPLENBQUNnRCw0QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWpESjtBQWdJSCxDQXJNRDs7R0FBTWpELFE7VUFNZ0JNLHFEOzs7S0FOaEJOLFE7QUFzTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9vZmZpY2UuYjY4ZjQxNDFkZjA0MmZiYjU2ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVySXRlbSBmcm9tICcuLi8uLi8uLi8uLi93aWRnZXRzL2hlYWRlck9mZmljZS9IZWFkZXJJdGVtJ1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgeyBORVQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL25ldHdvcmsnO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5cclxuY29uc3QgTWFpbkhlYWQgPSAoe1xyXG4gICAgY2xhc3Nlc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCB7c3RhdGVBcHB9ID0gdXNlQ29udGV4dChDb250ZXh0QXBwKVxyXG4gICAgY29uc3QgdXNlciA9IHN0YXRlQXBwLnVzZXJcclxuXHJcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7ICAgIFxyXG4gICAgY29uc3QgbW9iaWxlID0gd2lkdGggPCA3NjggPyB0cnVlIDogZmFsc2VcclxuICAgIFxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW51cEZ1bmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoKGAke05FVC5CQUNLX1VSTH0vcmVmZmVyYWxzLyR7dXNlci5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWNsZWFudXBGdW5jdGlvbikgc2V0VXNlckRhdGEoZGF0YSkgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFudXBGdW5jdGlvbiA9IHRydWVcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhbGw6IDAsXHJcbiAgICAgICAgcmVhbE1vbmV5OiAwLFxyXG4gICAgICAgIGZ1dHVyZU1vbmV5OiAwLFxyXG4gICAgICAgIGFjdGl2ZTogMFxyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSAwXHJcbiAgICAgICAgICAgIGxldCBhbGwgPSAwXHJcbiAgICAgICAgICAgIGxldCByZWFsTW9uZXkgPSAwXHJcbiAgICAgICAgICAgIGxldCBmdXR1cmVNb25leSA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgaW4gdXNlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyRGF0YVt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YVt2YWx1ZV0ubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGwrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuc3RhdHVzID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTW9uZXkgPSByZWFsTW9uZXkgKyAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZU1vbmV5ID0gZnV0dXJlTW9uZXkgKyAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3NlY29uZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTW9uZXkgPSByZWFsTW9uZXkgKyA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnV0dXJlTW9uZXkgPSBmdXR1cmVNb25leSArIDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0aGlyZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdXR1cmVNb25leSA9IGZ1dHVyZU1vbmV5ICsgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDb3VudGVyKHthbGwsIGFjdGl2ZSwgcmVhbE1vbmV5LCBmdXR1cmVNb25leX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJEYXRhXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgIW1vYmlsZSA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmlmOiAn0JLQsNGIINC/0LDQutC10YInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICfQtNC10LnRgdGC0LLQuNGC0LXQu9C10L0g0LTQviAnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0YXJpZjogJ1N0YW5kYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1c2VyID8gdXNlci5kYXlfZW5kIDogJydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGFyaWZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SGVhZGVySXRlbSBcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICBzdmc9e3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHt9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLQkdCw0LvQsNC90YFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIgPyB1c2VyLm1vbmV5ICsgJyB5LmUnIDogJzAgeS5lJ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb3VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCg0LDRgdGH0LXRgtC90YvQuSDQtNC+0YXQvtC0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudGVyLnJlYWxNb25leSArICcgeS5lJ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb3VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCf0LDRgNGC0L3QtdGA0YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50ZXIuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNvdW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkTW9ifT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTW9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ01vbmV5TGlzdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTNweCdcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVRleHRNb2J9PtCR0LDQu9Cw0L3RgTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2J9Pnt1c2VyICYmIHVzZXIubW9uZXl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ01vbmV5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+e2NvdW50ZXIucmVhbE1vbmV5fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCU0L7RhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU1vYn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1XcmFwcGVyTW9ifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3snbWFyZ2luLXJpZ2h0JzogJzNweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdNb25leUxpc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEzcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9ifT7QkdCw0LvQsNC90YE8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9ifT57dXNlciAmJiB1c2VyLm1vbmV5fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTW9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdNb25leScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCdcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2J9Pntjb3VudGVyLnJlYWxNb25leX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtVGV4dE1vYlNtYWxsfT7QlNC+0YXQvtC0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ1VzZXJzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+e2NvdW50ZXIuYWN0aXZlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCf0LDRgNGC0L3QtdGA0Ys8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWQiXSwic291cmNlUm9vdCI6IiJ9