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

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      width = _useWindowDimensions.width;

  var mobile = width < 768 ? true : false;
  var svgStyle = {
    width: mobile ? '20px' : '45px',
    height: mobile ? '20px' : '25px'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: '',
    tokenName: 'userToken'
  }),
      data = _useState[0],
      setData = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      errorsData = _useState2[0],
      setErrorsData = _useState2[1];

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
        lineNumber: 73,
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
        lineNumber: 74,
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
        lineNumber: 83,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnSubSub,
        children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: dataSender,
        children: "\u0412\u0445\u043E\u0434"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnSub,
        onClick: function onClick() {
          return router.push('/ru/auth/register');
        },
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);
};

_s(AuthLoginView, "IXuZNejH82Z1Myu+mjCB/AOtzH4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoTG9naW5WaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhMb2dpblZpZXciLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJtb2JpbGUiLCJzdmdTdHlsZSIsImhlaWdodCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuTmFtZSIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJORVQiLCJCQUNLX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJjb29raWUiLCJzYXZlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwia2V5cyIsIk9iamVjdCIsImFjYyIsIm1hcCIsImVsIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ3cmFwcGVyIiwid3JhcHBlcl9fd2luZG93IiwidGl0bGUiLCJidG5TdWJTdWIiLCJidG4iLCJidG5TdWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsNkJBQ05DLDhEQUFtQixFQURiO0FBQUEsTUFDaEJDLEtBRGdCLHdCQUNoQkEsS0FEZ0I7O0FBRXhCLE1BQU1DLE1BQU0sR0FBR0QsS0FBSyxHQUFHLEdBQVIsR0FBYyxJQUFkLEdBQXFCLEtBQXBDO0FBRUEsTUFBTUUsUUFBUSxHQUFHO0FBQ2JGLFNBQUssRUFBRUMsTUFBTSxHQUFHLE1BQUgs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RUkscUVBQUMsc0VBQUQ7QUFDSSxpQkFBUyxFQUFDLE9BRGQ7QUFFSSxZQUFJLEVBQUV0QyxJQUZWO0FBR0ksZUFBTyxFQUFFQyxPQUhiO0FBSUksbUJBQVcsRUFBQyxRQUpoQjtBQUtJLFlBQUksRUFBQyxNQUxUO0FBTUksZUFBTyxFQUFDLFdBTlo7QUFPSSxjQUFNLEVBQUVHO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBV0kscUVBQUMsc0VBQUQ7QUFDSSxpQkFBUyxFQUFDLFVBRGQ7QUFFSSxZQUFJLEVBQUVKLElBRlY7QUFHSSxlQUFPLEVBQUVDLE9BSGI7QUFJSSxtQkFBVyxFQUFDLHNDQUpoQjtBQUtJLFlBQUksRUFBQyxVQUxUO0FBTUksZUFBTyxFQUFDLGNBTlo7QUFPSSxjQUFNLEVBQUVHO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBb0JJO0FBQUssaUJBQVMsRUFBRStCLGlGQUFPLENBQUNJLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKLGVBcUJJO0FBQ0ksaUJBQVMsRUFBRUosaUZBQU8sQ0FBQ0ssR0FEdkI7QUFFSSxlQUFPLEVBQUVsQyxVQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJKLGVBeUJJO0FBQ0ksaUJBQVMsRUFBRTZCLGlGQUFPLENBQUNNLE1BRHZCO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU12QyxNQUFNLENBQUN1QixJQUFQLENBQVksbUJBQVosQ0FBTjtBQUFBLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBN0ZEOztHQUFNbkMsYTtVQUNnQkMsc0QsRUFZSFkscUQ7OztLQWJiYixhO0FBOEZTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vYXV0aC9sb2dpbi41MDk0NGQ5NTIzN2Q2ZGMyMzYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy92aWV3cy9hdXRoLXZpZXctc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi8uLi8uLi93aWRnZXRzL2Zvcm0vY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCB7IE5FVCB9IGZyb20gJy4vLi4vLi4vbmV0d29yayc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi8uLi8uLi9nbG9iYWwvdXRpbHMnO1xyXG5cclxuY29uc3QgQXV0aExvZ2luVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgICAgXHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aWR0aCA8IDc2OCA/IHRydWUgOiBmYWxzZVxyXG5cclxuICAgIGNvbnN0IHN2Z1N0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiBtb2JpbGUgPyAnMjBweCcgOiAnNDVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiBtb2JpbGUgPyAnMjBweCcgOiAnMjVweCdcclxuICAgIH1cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHRva2VuTmFtZTogJ3VzZXJUb2tlbidcclxuICAgIH0pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2Vycm9yc0RhdGEsIHNldEVycm9yc0RhdGFdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBkYXRhU2VuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke05FVC5CQUNLX1VSTH0vbG9naW5gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIC8vICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5zdGF0ZS5jbGllbnRUb2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUuc2F2ZSgndXNlclRva2VuJywgZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRva2VuJywgZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3J1L29mZmljZScpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGVycm9ycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuZXJyb3IgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcnJvcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICfQn9Cw0YDQvtC70Ywg0LLQstC10LTQtdC9INC90LXQstC10YDQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3JzLmVycm9yID09PSAnbm8tdXNlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5lcnJvcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQt9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0L0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVycm9ycy5lcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjYyA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY1tlbF0gPSBlcnJvcnMuZXJyb3JbZWxdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoYWNjKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJfX3dpbmRvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc0RhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blN1YlN1Yn0+0JfQsNCx0YvQu9C4INC/0LDRgNC+0LvRjDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGF0YVNlbmRlcn1cclxuICAgICAgICAgICAgICAgID7QktGF0L7QtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRuU3VifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcnUvYXV0aC9yZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgID7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhMb2dpblZpZXciXSwic291cmNlUm9vdCI6IiJ9