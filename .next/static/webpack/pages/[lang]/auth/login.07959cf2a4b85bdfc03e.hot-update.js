webpackHotUpdate_N_E("pages/[lang]/auth/login",{

/***/ "./views/auth/AuthLoginView.js":
/*!*************************************!*\
  !*** ./views/auth/AuthLoginView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../styles/views/auth-view-styles.module.scss */ "./styles/views/auth-view-styles.module.scss");
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../widgets/form/components/Input */ "./widgets/form/components/Input.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../network */ "./network.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../global/utils */ "./global/utils.js");





var _jsxFileName = "D:\\MotichProduction\\motich\\views\\auth\\AuthLoginView.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var AuthLoginView = function AuthLoginView() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobile = _useState[0],
      setMobile = _useState[1];

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      width = _useWindowDimensions.width;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]); // const mobile = width < 768 ? true : false

  var svgStyle = {
    width: mobile ? '20px' : '45px',
    height: mobile ? '20px' : '25px'
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: '',
    tokenName: 'userToken'
  }),
      data = _useState2[0],
      setData = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      errorsData = _useState3[0],
      setErrorsData = _useState3[1];

  var dataSender = /*#__PURE__*/function () {
    var _ref = Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetch("".concat(_network__WEBPACK_IMPORTED_MODULE_7__["NET"].BACK_URL, "/login"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' // 'Authorization': 'Bearer ' + this.state.clientToken,

                },
                withCredentials: true
              }).then(function (response) {
                if (response.status === 200) {
                  response.json().then(function (data) {
                    react_cookies__WEBPACK_IMPORTED_MODULE_8___default.a.save('userToken', data.token);
                    localStorage.setItem('userToken', data.token);
                    router.push('/ru/office');
                  });
                } else if (response.status === 401) {
                  response.json().then(function (errors) {
                    if (errors.error === 'password') {
                      setErrorsData(_objectSpread(_objectSpread({}, errorsData), {}, {
                        password: 'Пароль введен неверно'
                      }));
                    } else if (errors.error === 'no-user') {
                      setErrorsData(_objectSpread(_objectSpread({}, errorsData), {}, {
                        email: 'Пользователь не зарегестрирован'
                      }));
                    } else {
                      var keys = Object.keys(errors.error);
                      var acc = {};
                      keys.map(function (el) {
                        return acc[el] = errors.error[el];
                      });
                      console.log(keys);
                      setErrorsData(acc);
                    }
                  });
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function dataSender() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper__window,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attribute: "email",
        data: data,
        setData: setData,
        placeholder: "e-mail",
        type: "text",
        svgIcon: "AuthEmail",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attribute: "password",
        data: data,
        setData: setData,
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnSubSub,
        children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: dataSender,
        children: "\u0412\u0445\u043E\u0434"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnSub,
        onClick: function onClick() {
          return router.push('/ru/auth/register');
        },
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, _this);
};

_s(AuthLoginView, "fXfMQR70hLE69ZZL1ds9/tcAPVQ=", false, function () {
  return [_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"], next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = AuthLoginView;
/* harmony default export */ __webpack_exports__["default"] = (AuthLoginView);

var _c;

$RefreshReg$(_c, "AuthLoginView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoTG9naW5WaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhMb2dpblZpZXciLCJ1c2VTdGF0ZSIsIm1vYmlsZSIsInNldE1vYmlsZSIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInVzZUVmZmVjdCIsInN2Z1N0eWxlIiwiaGVpZ2h0IiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuTmFtZSIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJORVQiLCJCQUNLX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJjb29raWUiLCJzYXZlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwia2V5cyIsIk9iamVjdCIsImFjYyIsIm1hcCIsImVsIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ3cmFwcGVyIiwid3JhcHBlcl9fd2luZG93IiwidGl0bGUiLCJidG5TdWJTdWIiLCJidG4iLCJidG5TdWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFBQSw2QkFFTkMsOERBQW1CLEVBRmI7QUFBQSxNQUVoQkMsS0FGZ0Isd0JBRWhCQSxLQUZnQjs7QUFHeEJDLHlEQUFTLENBQUMsWUFB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QUFBO0FBQUE7QUFBQTtBQUFBLGVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtDSCxDQXJHRDs7R0FBTXJDLGE7VUFFZ0JJLHNELEVBbUJIVyxxRDs7O0tBckJiZixhO0FBc0dTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vYXV0aC9sb2dpbi4wNzk1OWNmMmE0Yjg1YmRmYzAzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZSwgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vLi4vLi4vc3R5bGVzL3ZpZXdzL2F1dGgtdmlldy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLy4uLy4uL3dpZGdldHMvZm9ybS9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IHsgTkVUIH0gZnJvbSAnLi8uLi8uLi9uZXR3b3JrJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcblxyXG5jb25zdCBBdXRoTG9naW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vYmlsZSwgc2V0TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpOyAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHNldE1vYmlsZSh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1vYmlsZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbd2lkdGhdKVxyXG4gICAgLy8gY29uc3QgbW9iaWxlID0gd2lkdGggPCA3NjggPyB0cnVlIDogZmFsc2VcclxuXHJcbiAgICBjb25zdCBzdmdTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogbW9iaWxlID8gJzIwcHgnIDogJzQ1cHgnLFxyXG4gICAgICAgIGhlaWdodDogbW9iaWxlID8gJzIwcHgnIDogJzI1cHgnXHJcbiAgICB9XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbk5hbWU6ICd1c2VyVG9rZW4nXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtlcnJvcnNEYXRhLCBzZXRFcnJvcnNEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgZGF0YVNlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtORVQuQkFDS19VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnNhdmUoJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ydS9vZmZpY2UnKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmVycm9yID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAn0J/QsNGA0L7Qu9GMINCy0LLQtdC00LXQvSDQvdC10LLQtdGA0L3QvidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9ycy5lcnJvciA9PT0gJ25vLXVzZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LfQsNGA0LXQs9C10YHRgtGA0LjRgNC+0LLQsNC9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMuZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2MgPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NbZWxdID0gZXJyb3JzLmVycm9yW2VsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnNEYXRhKGFjYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyX193aW5kb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5TdWJTdWJ9PtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RhdGFTZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA+0JLRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blN1Yn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3J1L2F1dGgvcmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTG9naW5WaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==