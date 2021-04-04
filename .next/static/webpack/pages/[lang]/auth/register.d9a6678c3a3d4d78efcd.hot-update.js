webpackHotUpdate_N_E("pages/[lang]/auth/register",{

/***/ "./views/auth/AuthRegisterView.js":
/*!****************************************!*\
  !*** ./views/auth/AuthRegisterView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../styles/views/auth-view-styles.module.scss */ "./styles/views/auth-view-styles.module.scss");
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../network */ "./network.js");
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../widgets/form/components/Input */ "./widgets/form/components/Input.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_App_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../context/App/actions */ "./context/App/actions.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "D:\\MotichProduction\\motich\\views\\auth\\AuthRegisterView.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var AuthRegisterView = function AuthRegisterView() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_App_ContextApp__WEBPACK_IMPORTED_MODULE_7__["default"]),
      dispatchApp = _useContext.dispatchApp;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  console.log(router.query.refferal);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    surname: '',
    password: '',
    email: '',
    phone: '',
    tokenName: 'userToken',
    politic: false
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      errorsData = _useState2[0],
      setErrorsData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setData(_objectSpread(_objectSpread({}, data), {}, {
      refferal_key: router.query.refferal ? router.query.refferal : null
    }));
  }, [router]);

  var dataSender = /*#__PURE__*/function () {
    var _ref = Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return D_MotichProduction_motich_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetch("".concat(_network__WEBPACK_IMPORTED_MODULE_6__["NET"].BACK_URL, "/register"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' // 'X-Requested-With': 'XMLHttpRequest'
                  // 'Authorization': 'Bearer ' + this.state.clientToken,

                },
                withCredentials: true
              }).then(function (response) {
                if (response.status === 200) {
                  response.json().then(function (data) {
                    console.log(data.token); // dispatchApp(createToken(data.token))

                    localStorage.setItem('userToken', data.token);
                    react_cookies__WEBPACK_IMPORTED_MODULE_12___default.a.save('userToken', data.token);
                    router.push('/ru/office');
                  });
                } else if (response.status === 401) {
                  response.json().then(function (errors) {
                    // if (errors.error === 'password') {
                    //     setErrorsData({
                    //         ...errorsData,
                    //         password: 'Пароль введен неверно'
                    //     })
                    // } else if (errors.error === 'no-user') {
                    //     setErrorsData({
                    //         ...errorsData,
                    //         email: 'Пользователь не зарегестрирован'
                    //     })
                    // } else {
                    var keys = Object.keys(errors.error);
                    var acc = {};
                    keys.map(function (el) {
                      console.log(errors.error[el]);

                      if (errors.error[el][0] === 'The email has already been taken.') {
                        return acc[el] = 'Пользователь уже зарегистрирован.';
                      } else {
                        return acc[el] = errors.error[el];
                      }
                    });
                    setErrorsData(acc); // }
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
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper__icon,
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_9__["default"])('AuthForm', {
          width: '40px'
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "name",
        data: data,
        setData: setData,
        placeholder: "\u0418\u043C\u044F",
        type: "text",
        svgIcon: "AuthProfile",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "surname",
        data: data,
        setData: setData,
        placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        type: "text",
        svgIcon: "AuthProfile",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "email",
        data: data,
        setData: setData,
        placeholder: "e-mail",
        type: "email",
        svgIcon: "AuthEmail",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "phone",
        data: data,
        setData: setData,
        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
        type: "tel",
        svgIcon: "AuthPhone",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "password",
        data: data,
        setData: setData,
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "repeatPassword",
        data: data,
        setData: setData,
        placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.politic,
        onClick: function onClick() {
          return setData(_objectSpread(_objectSpread({}, data), {}, {
            politic: !data.politic
          }));
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_9__["default"])(data.politic ? 'AuthCheckFalse' : 'AuthCheckTrue', {
            width: data.politic ? '40px' : '45px',
            height: '45px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-left': data.politic ? '4px' : 0
          },
          children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: dataSender,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }, _this);
};

_s(AuthRegisterView, "LcLcRgKcIcxH5GqpbkCeab76L84=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = AuthRegisterView;
/* harmony default export */ __webpack_exports__["default"] = (AuthRegisterView);

var _c;

$RefreshReg$(_c, "AuthRegisterView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoUmVnaXN0ZXJWaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhSZWdpc3RlclZpZXciLCJ1c2VDb250ZXh0IiwiQ29udGV4dEFwcCIsImRpc3BhdGNoQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVmZmVyYWwiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInBob25lIiwidG9rZW5OYW1lIiwicG9saXRpYyIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJ1c2VFZmZlY3QiLCJyZWZmZXJhbF9rZXkiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJORVQiLCJCQUNLX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb29raWUiLCJzYXZlIiwicHVzaCIsImVycm9ycyIsImtleXMiLCJPYmplY3QiLCJlcnJvciIsImFjYyIsIm1hcCIsImVsIiwiY2xhc3NlcyIsIndyYXBwZXIiLCJ3cmFwcGVyX193aW5kb3ciLCJ3cmFwcGVyX19pY29uIiwic3ZnU3ByaXRlIiwid2lkdGgiLCJ0aXRsZSIsImhlaWdodCIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxvQkFDTEMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FETDtBQUFBLE1BQ3BCQyxXQURvQixlQUNwQkEsV0FE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Q0QsT0FBTCxHQUFlLGdCQUFmLEdBQWtDLGVBQW5DLEVBQW9EO0FBQzFEdUMsaUJBQUssRUFBRXRDLElBQUksQ0FBQ0QsT0FBTCxHQUFlLE1BQWYsR0FBd0IsTUFEMkI7QUFFMUR5QyxrQkFBTSxFQUFFO0FBRmtELFdBQXBEO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQWFJO0FBQUssZUFBSyxFQUFFO0FBQ1IsMkJBQWV4QyxJQUFJLENBQUNELE9BQUwsR0FBZSxLQUFmLEdBQXVCO0FBRDlCLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0RKLGVBa0ZJO0FBQ0ksaUJBQVMsRUFBRWtDLGlGQUFPLENBQUNRLEdBRHZCO0FBRUksZUFBTyxFQUFFbkMsVUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyRkgsQ0FqS0Q7O0dBQU14QixnQjtVQUVhSyxzRDs7O0tBRmJMLGdCO0FBa0tTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vYXV0aC9yZWdpc3Rlci5kOWE2Njc4YzNhM2Q0ZDc4ZWZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vLi4vLi4vc3R5bGVzL3ZpZXdzL2F1dGgtdmlldy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IE5FVCB9IGZyb20gJy4vLi4vLi4vbmV0d29yayc7XHJcbmltcG9ydCBDb250ZXh0QXBwIGZyb20gJy4vLi4vLi4vY29udGV4dC9BcHAvQ29udGV4dEFwcCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLy4uLy4uL3dpZGdldHMvZm9ybS9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IHN2Z1Nwcml0ZSBmcm9tICcuLy4uLy4uL3Byb2plY3Qvc3ZnL3N2Z1Nwcml0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL2FjdGlvbnMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnXHJcblxyXG5jb25zdCBBdXRoUmVnaXN0ZXJWaWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2Rpc3BhdGNoQXBwfSA9IHVzZUNvbnRleHQoQ29udGV4dEFwcClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkucmVmZmVyYWwpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgc3VybmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgdG9rZW5OYW1lOiAndXNlclRva2VuJyxcclxuICAgICAgICBwb2xpdGljOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFtlcnJvcnNEYXRhLCBzZXRFcnJvcnNEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIHJlZmZlcmFsX2tleTogcm91dGVyLnF1ZXJ5LnJlZmZlcmFsID8gcm91dGVyLnF1ZXJ5LnJlZmZlcmFsIDogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbcm91dGVyXSlcclxuICAgIGNvbnN0IGRhdGFTZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7TkVULkJBQ0tfVVJMfS9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIC8vICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgLy8gJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnN0YXRlLmNsaWVudFRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2hBcHAoY3JlYXRlVG9rZW4oZGF0YS50b2tlbikpXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnNhdmUoJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ydS9vZmZpY2UnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGVycm9ycykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChlcnJvcnMuZXJyb3IgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2V0RXJyb3JzRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5lcnJvcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFzc3dvcmQ6ICfQn9Cw0YDQvtC70Ywg0LLQstC10LTQtdC9INC90LXQstC10YDQvdC+J1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoZXJyb3JzLmVycm9yID09PSAnbm8tdXNlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2V0RXJyb3JzRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5lcnJvcnNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZW1haWw6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQt9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0L0nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVycm9ycy5lcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjYyA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLmVycm9yW2VsXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuZXJyb3JbZWxdWzBdID09PSAnVGhlIGVtYWlsIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NbZWxdID0gJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9LidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY1tlbF0gPSBlcnJvcnMuZXJyb3JbZWxdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoYWNjKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcl9fd2luZG93fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJfX2ljb259PntzdmdTcHJpdGUoJ0F1dGhGb3JtJywge3dpZHRoOiAnNDBweCd9KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc0RhdGF9XHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJzdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQpNCw0LzQuNC70LjRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aEVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc0RhdGF9XHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KLQtdC70LXRhNC+0L1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwicmVwZWF0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QstGC0L7RgNC40YLQtSDQv9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb2xpdGljfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2xpdGljOiAhZGF0YS5wb2xpdGljXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoZGF0YS5wb2xpdGljID8gJ0F1dGhDaGVja0ZhbHNlJyA6ICdBdXRoQ2hlY2tUcnVlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRhdGEucG9saXRpYyA/ICc0MHB4JyA6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQ1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogZGF0YS5wb2xpdGljID8gJzRweCcgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCvINGB0L7Qs9C70LDRgdC10L0g0YEg0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkYXRhU2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFJlZ2lzdGVyVmlldyJdLCJzb3VyY2VSb290IjoiIn0=