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
                      if (errors.error[el] === 'The email has already been taken.') {
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
        lineNumber: 85,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
        lineNumber: 87,
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
        lineNumber: 97,
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
        lineNumber: 107,
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
        lineNumber: 117,
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
        lineNumber: 127,
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
        lineNumber: 137,
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
          lineNumber: 154,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-left': data.politic ? '4px' : 0
          },
          children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: dataSender,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoUmVnaXN0ZXJWaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhSZWdpc3RlclZpZXciLCJ1c2VDb250ZXh0IiwiQ29udGV4dEFwcCIsImRpc3BhdGNoQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVmZmVyYWwiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInBob25lIiwidG9rZW5OYW1lIiwicG9saXRpYyIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJ1c2VFZmZlY3QiLCJyZWZmZXJhbF9rZXkiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJORVQiLCJCQUNLX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb29raWUiLCJzYXZlIiwicHVzaCIsImVycm9ycyIsImtleXMiLCJPYmplY3QiLCJlcnJvciIsImFjYyIsIm1hcCIsImVsIiwiY2xhc3NlcyIsIndyYXBwZXIiLCJ3cmFwcGVyX193aW5kb3ciLCJ3cmFwcGVyX19pY29uIiwic3ZnU3ByaXRlIiwid2lkdGgiLCJ0aXRsZSIsImhlaWdodCIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxvQkFDTEMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FETDtBQUFBLE1BQ3BCQyxXQURvQixlQUNwQkEsV0FEb0I7O0FBRTNCLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxRQUF6Qjs7QUFIMkIsa0JBSUhDLHNEQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsV0FBTyxFQUFFLEVBRm9CO0FBRzdCQyxZQUFRLEVBQUUsRUFIbUI7QUFJN0JDLFNBQUssRUFBRSxFQUpzQjtBQUs3QkMsU0FBSyxFQUFFLEVBTHNCO0FBTTdCQyxhQUFTLEVBQUUsV0FOa0I7QUFPN0JDLFdBQU8sRUFBRTtBQVBvQixHQUFELENBSkw7QUFBQSxNQUlwQkMsSUFKb0I7QUFBQSxNQUlkQyxPQUpjOztBQUFBLG1CQWFTVCxzREFBUSxDQUFDLEVBQUQsQ0FiakI7QUFBQSxNQWFwQlUsVUFib0I7QUFBQSxNQWFSQyxhQWJROztBQWUzQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pILFdBQU8saUNBQ0FELElBREE7QUFFSEssa0JBQVksRUFBRW5CLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxRQUFiLEdBQXdCTCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsUUFBckMsR0FBZ0Q7QUFGM0QsT0FBUDtBQUlILEdBTFEsRUFLTixDQUFDTCxNQUFELENBTE0sQ0FBVDs7QUFNQSxNQUFNb0IsVUFBVTtBQUFBLDRRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsbUJBQUssV0FBSUMsNENBQUcsQ0FBQ0MsUUFBUixnQkFBNkI7QUFDOUJDLHNCQUFNLEVBQUUsTUFEc0I7QUFFOUJDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlYixJQUFmLENBRndCO0FBRzlCYyx1QkFBTyxFQUFFO0FBQ0wsNEJBQVUsa0JBREw7QUFFTCxrQ0FBZ0Isa0JBRlgsQ0FHTDtBQUNBOztBQUpLLGlCQUhxQjtBQVM5QkMsK0JBQWUsRUFBRTtBQVRhLGVBQTdCLENBQUwsQ0FVR0MsSUFWSCxDQVVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixvQkFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCRCwwQkFBUSxDQUFDRSxJQUFULEdBQWdCSCxJQUFoQixDQUFxQixVQUFDaEIsSUFBRCxFQUFVO0FBQzNCWiwyQkFBTyxDQUFDQyxHQUFSLENBQVlXLElBQUksQ0FBQ29CLEtBQWpCLEVBRDJCLENBRTNCOztBQUNBQyxnQ0FBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDdEIsSUFBSSxDQUFDb0IsS0FBdkM7QUFDQUcseUVBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVosRUFBeUJ4QixJQUFJLENBQUNvQixLQUE5QjtBQUNBbEMsMEJBQU0sQ0FBQ3VDLElBQVAsQ0FBWSxZQUFaO0FBQ0gsbUJBTkQ7QUFPSCxpQkFSRCxNQVFPLElBQUlSLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUNoQ0QsMEJBQVEsQ0FBQ0UsSUFBVCxHQUFnQkgsSUFBaEIsQ0FBcUIsVUFBQ1UsTUFBRCxFQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSx3QkFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUQsTUFBTSxDQUFDRyxLQUFuQixDQUFiO0FBQ0Esd0JBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0FILHdCQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxFQUFELEVBQVE7QUFDYiwwQkFBSU4sTUFBTSxDQUFDRyxLQUFQLENBQWFHLEVBQWIsTUFBcUIsbUNBQXpCLEVBQThEO0FBQzFELCtCQUFPRixHQUFHLENBQUNFLEVBQUQsQ0FBSCxHQUFVLG1DQUFqQjtBQUNILHVCQUZELE1BRU87QUFDSCwrQkFBT0YsR0FBRyxDQUFDRSxFQUFELENBQUgsR0FBVU4sTUFBTSxDQUFDRyxLQUFQLENBQWFHLEVBQWIsQ0FBakI7QUFDSDtBQUNKLHFCQU5EO0FBT0E3QixpQ0FBYSxDQUFDMkIsR0FBRCxDQUFiLENBckJ5QixDQXNCN0I7QUFDSCxtQkF2QkQ7QUF3Qkg7QUFDSixlQTdDRDs7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWeEIsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFnREEsc0JBQ0k7QUFBSyxhQUFTLEVBQUUyQixpRkFBTyxDQUFDQyxPQUF4QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFRCxpRkFBTyxDQUFDRSxlQUF4QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUYsaUZBQU8sQ0FBQ0csYUFBeEI7QUFBQSxrQkFBd0NDLHNFQUFTLENBQUMsVUFBRCxFQUFhO0FBQUNDLGVBQUssRUFBRTtBQUFSLFNBQWI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFTCxpRkFBTyxDQUFDTSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsc0VBQUQ7QUFDSSxpQkFBUyxFQUFDLE1BRGQ7QUFFSSxZQUFJLEVBQUV2QyxJQUZWO0FBR0ksZUFBTyxFQUFFQyxPQUhiO0FBSUksbUJBQVcsRUFBQyxvQkFKaEI7QUFLSSxZQUFJLEVBQUMsTUFMVDtBQU1JLGVBQU8sRUFBQyxhQU5aO0FBT0ksY0FBTSxFQUFFQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQWFJLHFFQUFDLHNFQUFEO0FBQ0ksaUJBQVMsRUFBQyxTQURkO0FBRUksWUFBSSxFQUFFRixJQUZWO0FBR0ksZUFBTyxFQUFFQyxPQUhiO0FBSUksbUJBQVcsRUFBQyw0Q0FKaEI7QUFLSSxZQUFJLEVBQUMsTUFMVDtBQU1JLGVBQU8sRUFBQyxhQU5aO0FBT0ksY0FBTSxFQUFFQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixlQXVCSSxxRUFBQyxzRUFBRDtBQUNJLGlCQUFTLEVBQUMsT0FEZDtBQUVJLFlBQUksRUFBRUYsSUFGVjtBQUdJLGVBQU8sRUFBRUMsT0FIYjtBQUlJLG1CQUFXLEVBQUMsUUFKaEI7QUFLSSxZQUFJLEVBQUMsT0FMVDtBQU1JLGVBQU8sRUFBQyxXQU5aO0FBT0ksY0FBTSxFQUFFQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUFpQ0kscUVBQUMsc0VBQUQ7QUFDSSxpQkFBUyxFQUFDLE9BRGQ7QUFFSSxZQUFJLEVBQUVGLElBRlY7QUFHSSxlQUFPLEVBQUVDLE9BSGI7QUFJSSxtQkFBVyxFQUFDLDRDQUpoQjtBQUtJLFlBQUksRUFBQyxLQUxUO0FBTUksZUFBTyxFQUFDLFdBTlo7QUFPSSxjQUFNLEVBQUVDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDSixlQTJDSSxxRUFBQyxzRUFBRDtBQUNJLGlCQUFTLEVBQUMsVUFEZDtBQUVJLFlBQUksRUFBRUYsSUFGVjtBQUdJLGVBQU8sRUFBRUMsT0FIYjtBQUlJLG1CQUFXLEVBQUMsc0NBSmhCO0FBS0ksWUFBSSxFQUFDLFVBTFQ7QUFNSSxlQUFPLEVBQUMsY0FOWjtBQU9JLGNBQU0sRUFBRUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NKLGVBcURJLHFFQUFDLHNFQUFEO0FBQ0ksaUJBQVMsRUFBQyxnQkFEZDtBQUVJLFlBQUksRUFBRUYsSUFGVjtBQUdJLGVBQU8sRUFBRUMsT0FIYjtBQUlJLG1CQUFXLEVBQUMsNkZBSmhCO0FBS0ksWUFBSSxFQUFDLFVBTFQ7QUFNSSxlQUFPLEVBQUMsY0FOWjtBQU9JLGNBQU0sRUFBRUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckRKLGVBK0RJO0FBQ0ksaUJBQVMsRUFBRStCLGlGQUFPLENBQUNsQyxPQUR2QjtBQUVJLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxPQUFPLGlDQUNmRCxJQURlO0FBRWxCRCxtQkFBTyxFQUFFLENBQUNDLElBQUksQ0FBQ0Q7QUFGRyxhQUFiO0FBQUEsU0FGYjtBQUFBLGdDQU9JO0FBQUEsb0JBQ0tzQyxzRUFBUyxDQUFDckMsSUFBSSxDQUFDRCxPQUFMLEdBQWUsZ0JBQWYsR0FBa0MsZUFBbkMsRUFBb0Q7QUFDMUR1QyxpQkFBSyxFQUFFdEMsSUFBSSxDQUFDRCxPQUFMLEdBQWUsTUFBZixHQUF3QixNQUQyQjtBQUUxRHlDLGtCQUFNLEVBQUU7QUFGa0QsV0FBcEQ7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBYUk7QUFBSyxlQUFLLEVBQUU7QUFDUiwyQkFBZXhDLElBQUksQ0FBQ0QsT0FBTCxHQUFlLEtBQWYsR0FBdUI7QUFEOUIsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvREosZUFrRkk7QUFDSSxpQkFBUyxFQUFFa0MsaUZBQU8sQ0FBQ1EsR0FEdkI7QUFFSSxlQUFPLEVBQUVuQyxVQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJGSCxDQWhLRDs7R0FBTXhCLGdCO1VBRWFLLHNEOzs7S0FGYkwsZ0I7QUFpS1NBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9hdXRoL3JlZ2lzdGVyLmIxNDk0ZjY3ZDI4YzY2NDU4MmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3RcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvdmlld3MvYXV0aC12aWV3LXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTkVUIH0gZnJvbSAnLi8uLi8uLi9uZXR3b3JrJztcclxuaW1wb3J0IENvbnRleHRBcHAgZnJvbSAnLi8uLi8uLi9jb250ZXh0L0FwcC9Db250ZXh0QXBwJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vLi4vLi4vd2lkZ2V0cy9mb3JtL2NvbXBvbmVudHMvSW5wdXQnO1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2tlbiB9IGZyb20gJy4vLi4vLi4vY29udGV4dC9BcHAvYWN0aW9ucyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcydcclxuXHJcbmNvbnN0IEF1dGhSZWdpc3RlclZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGlzcGF0Y2hBcHB9ID0gdXNlQ29udGV4dChDb250ZXh0QXBwKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5yZWZmZXJhbClcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBzdXJuYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICB0b2tlbk5hbWU6ICd1c2VyVG9rZW4nLFxyXG4gICAgICAgIHBvbGl0aWM6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Vycm9yc0RhdGEsIHNldEVycm9yc0RhdGFdID0gdXNlU3RhdGUoe30pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgcmVmZmVyYWxfa2V5OiByb3V0ZXIucXVlcnkucmVmZmVyYWwgPyByb3V0ZXIucXVlcnkucmVmZmVyYWwgOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtyb3V0ZXJdKVxyXG4gICAgY29uc3QgZGF0YVNlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtORVQuQkFDS19VUkx9L3JlZ2lzdGVyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaEFwcChjcmVhdGVUb2tlbihkYXRhLnRva2VuKSlcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRva2VuJywgZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUuc2F2ZSgndXNlclRva2VuJywgZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3J1L29mZmljZScpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGVycm9ycy5lcnJvciA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZXRFcnJvcnNEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLmVycm9yc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDogJ9Cf0LDRgNC+0LvRjCDQstCy0LXQtNC10L0g0L3QtdCy0LXRgNC90L4nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChlcnJvcnMuZXJyb3IgPT09ICduby11c2VyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZXRFcnJvcnNEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLmVycm9yc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbWFpbDogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdC1INC30LDRgNC10LPQtdGB0YLRgNC40YDQvtCy0LDQvSdcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXJyb3JzLmVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWNjID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmVycm9yW2VsXSA9PT0gJ1RoZSBlbWFpbCBoYXMgYWxyZWFkeSBiZWVuIHRha2VuLicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjW2VsXSA9ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvS4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NbZWxdID0gZXJyb3JzLmVycm9yW2VsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnNEYXRhKGFjYylcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJfX3dpbmRvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyX19pY29ufT57c3ZnU3ByaXRlKCdBdXRoRm9ybScsIHt3aWR0aDogJzQwcHgnfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KTQsNC80LjQu9C40Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aFByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aFBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc0RhdGF9XHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInJlcGVhdFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGE9e3NldERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LLRgtC+0YDQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9saXRpY31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9saXRpYzogIWRhdGEucG9saXRpY1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKGRhdGEucG9saXRpYyA/ICdBdXRoQ2hlY2tGYWxzZScgOiAnQXV0aENoZWNrVHJ1ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkYXRhLnBvbGl0aWMgPyAnNDBweCcgOiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6IGRhdGEucG9saXRpYyA/ICc0cHgnIDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQryDRgdC+0LPQu9Cw0YHQtdC9INGBINC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0LhcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGF0YVNlbmRlcn1cclxuICAgICAgICAgICAgICAgID7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZWdpc3RlclZpZXciXSwic291cmNlUm9vdCI6IiJ9