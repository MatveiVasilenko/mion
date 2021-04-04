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
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var AuthLoginView = function AuthLoginView() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      mobile = _useState[0],
      setMobile = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(_s(function () {
    _s();

    var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        width = _useWindowDimensions.width;

    if (width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, "ryR7mLr8YBgJ6dEcE7angTe4Nyw=", false, function () {
    return [_global_utils__WEBPACK_IMPORTED_MODULE_10__["default"]];
  }), []); // const mobile = width < 768 ? true : false

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

_s2(AuthLoginView, "nnP3Kuq/H6MKVo/4wUGg44Xl5NQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoTG9naW5WaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhMb2dpblZpZXciLCJ1c2VTdGF0ZSIsIm1vYmlsZSIsInNldE1vYmlsZSIsInVzZUVmZmVjdCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsInN2Z1N0eWxlIiwiaGVpZ2h0IiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuTmFtZSIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJORVQiLCJCQUNLX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJjb29raWUiLCJzYXZlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwia2V5cyIsIk9iamVjdCIsImFjYyIsIm1hcCIsImVsIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ3cmFwcGVyIiwid3JhcHBlcl9fd2luZG93IiwidGl0bGUiLCJidG5TdWJTdWIiLCJidG4iLCJidG5TdWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFFeEJDLHlEQUFTLElBQUMsWUFBTTtBQUFBOztBQUFBLCtCQUNNQyw4REFBbUIsRUFEekI7QUFBQSxRQUNKQyxLQURJLHdC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QUFBLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBckdEOztJQUFNckMsYTtVQXFCYWUscUQ7OztLQXJCYmYsYTtBQXNHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddL2F1dGgvbG9naW4uYTE3MWNlM2YxODQ3MTcwMDlhMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGUsIHVzZUVmZmVjdFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy92aWV3cy9hdXRoLXZpZXctc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi8uLi8uLi93aWRnZXRzL2Zvcm0vY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCB7IE5FVCB9IGZyb20gJy4vLi4vLi4vbmV0d29yayc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi8uLi8uLi9nbG9iYWwvdXRpbHMnO1xyXG5cclxuY29uc3QgQXV0aExvZ2luVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb2JpbGUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpOyAgICBcclxuICAgICAgICBpZiAod2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgICAgc2V0TW9iaWxlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TW9iaWxlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgLy8gY29uc3QgbW9iaWxlID0gd2lkdGggPCA3NjggPyB0cnVlIDogZmFsc2VcclxuXHJcbiAgICBjb25zdCBzdmdTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogbW9iaWxlID8gJzIwcHgnIDogJzQ1cHgnLFxyXG4gICAgICAgIGhlaWdodDogbW9iaWxlID8gJzIwcHgnIDogJzI1cHgnXHJcbiAgICB9XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbk5hbWU6ICd1c2VyVG9rZW4nXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtlcnJvcnNEYXRhLCBzZXRFcnJvcnNEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgZGF0YVNlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtORVQuQkFDS19VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnNhdmUoJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ydS9vZmZpY2UnKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmVycm9yID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAn0J/QsNGA0L7Qu9GMINCy0LLQtdC00LXQvSDQvdC10LLQtdGA0L3QvidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9ycy5lcnJvciA9PT0gJ25vLXVzZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LfQsNGA0LXQs9C10YHRgtGA0LjRgNC+0LLQsNC9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMuZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2MgPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NbZWxdID0gZXJyb3JzLmVycm9yW2VsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnNEYXRhKGFjYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyX193aW5kb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5TdWJTdWJ9PtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RhdGFTZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA+0JLRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blN1Yn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3J1L2F1dGgvcmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTG9naW5WaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==