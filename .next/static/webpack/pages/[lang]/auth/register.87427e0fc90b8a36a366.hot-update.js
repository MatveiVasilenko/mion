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
                  response.json().then(function (errors) {// if (errors.error === 'password') {
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
                    //     const keys = Object.keys(errors.error)
                    //     let acc = {}
                    //     keys.map((el) => {
                    //         return acc[el] = errors.error[el]
                    //     })
                    //     console.log(keys)
                    //     setErrorsData(acc)
                    // }
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
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "name",
        data: data,
        setData: setData,
        placeholder: "\u0418\u043C\u044F",
        type: "text",
        svgIcon: "AuthProfile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "surname",
        data: data,
        setData: setData,
        placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        type: "text",
        svgIcon: "AuthProfile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "email",
        data: data,
        setData: setData,
        placeholder: "e-mail",
        type: "email",
        svgIcon: "AuthEmail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "phone",
        data: data,
        setData: setData,
        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
        type: "tel",
        svgIcon: "AuthPhone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "password",
        data: data,
        setData: setData,
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attribute: "repeatPassword",
        data: data,
        setData: setData,
        placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 137,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-left': data.politic ? '4px' : 0
          },
          children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
        onClick: dataSender,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, _this);
};

_s(AuthRegisterView, "IUZL4RKdWkyy78fPgXxePxIOFxQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYXV0aC9BdXRoUmVnaXN0ZXJWaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGhSZWdpc3RlclZpZXciLCJ1c2VDb250ZXh0IiwiQ29udGV4dEFwcCIsImRpc3BhdGNoQXBwIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVmZmVyYWwiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzdXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsInBob25lIiwidG9rZW5OYW1lIiwicG9saXRpYyIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwicmVmZmVyYWxfa2V5IiwiZGF0YVNlbmRlciIsImZldGNoIiwiTkVUIiwiQkFDS19VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29va2llIiwic2F2ZSIsInB1c2giLCJlcnJvcnMiLCJjbGFzc2VzIiwid3JhcHBlciIsIndyYXBwZXJfX3dpbmRvdyIsIndyYXBwZXJfX2ljb24iLCJzdmdTcHJpdGUiLCJ3aWR0aCIsInRpdGxlIiwiaGVpZ2h0IiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUFBLG9CQUNMQyx3REFBVSxDQUFDQywrREFBRCxDQURMO0FBQUEsTUFDcEJDLFdBRG9CLGVBQ3BCQSxXQURvQjs7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFB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QUFBQTtBQUFBO0FBQUEsZUEzQ0osZUFtREk7QUFDSSxpQkFBUyxFQUFFd0IsaUZBQU8sQ0FBQzFCLE9BRHZCO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1FLE9BQU8saUNBQ2ZELElBRGU7QUFFbEJELG1CQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDRDtBQUZHLGFBQWI7QUFBQSxTQUZiO0FBQUEsZ0NBT0k7QUFBQSxvQkFDSzhCLHNFQUFTLENBQUM3QixJQUFJLENBQUNELE9BQUwsR0FBZSxnQkFBZixHQUFrQyxlQUFuQyxFQUFvRDtBQUMxRCtCLGlCQUFLLEVBQUU5QixJQUFJLENBQUNELE9BQUwsR0FBZSxNQUFmLEdBQXdCLE1BRDJCO0FBRTFEaUMsa0JBQU0sRUFBRTtBQUZrRCxXQUFwRDtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFhSTtBQUFLLGVBQUssRUFBRTtBQUNSLDJCQUFlaEMsSUFBSSxDQUFDRCxPQUFMLEdBQWUsS0FBZixHQUF1QjtBQUQ5QixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5ESixlQXNFSTtBQUNJLGlCQUFTLEVBQUUwQixpRkFBTyxDQUFDUSxHQUR2QjtBQUVJLGVBQU8sRUFBRTdCLFVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0VILENBL0lEOztHQUFNdEIsZ0I7VUFFYUssc0Q7OztLQUZiTCxnQjtBQWdKU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddL2F1dGgvcmVnaXN0ZXIuODc0MjdlMGZjOTBiOGEzNmEzNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy92aWV3cy9hdXRoLXZpZXctc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBORVQgfSBmcm9tICcuLy4uLy4uL25ldHdvcmsnO1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi8uLi8uLi93aWRnZXRzL2Zvcm0vY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVRva2VuIH0gZnJvbSAnLi8uLi8uLi9jb250ZXh0L0FwcC9hY3Rpb25zJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJ1xyXG5cclxuY29uc3QgQXV0aFJlZ2lzdGVyVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkaXNwYXRjaEFwcH0gPSB1c2VDb250ZXh0KENvbnRleHRBcHApXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnJlZmZlcmFsKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHN1cm5hbWU6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgIHRva2VuTmFtZTogJ3VzZXJUb2tlbicsXHJcbiAgICAgICAgcG9saXRpYzogZmFsc2VcclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICByZWZmZXJhbF9rZXk6IHJvdXRlci5xdWVyeS5yZWZmZXJhbCA/IHJvdXRlci5xdWVyeS5yZWZmZXJhbCA6IG51bGxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW3JvdXRlcl0pXHJcbiAgICBjb25zdCBkYXRhU2VuZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke05FVC5CQUNLX1VSTH0vcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAvLyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgIC8vICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5zdGF0ZS5jbGllbnRUb2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoQXBwKGNyZWF0ZVRva2VuKGRhdGEudG9rZW4pKVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyVG9rZW4nLCBkYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5zYXZlKCd1c2VyVG9rZW4nLCBkYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcnUvb2ZmaWNlJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZXJyb3JzLmVycm9yID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBhc3N3b3JkOiAn0J/QsNGA0L7Qu9GMINCy0LLQtdC00LXQvSDQvdC10LLQtdGA0L3QvidcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGVycm9ycy5lcnJvciA9PT0gJ25vLXVzZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGVtYWlsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LfQsNGA0LXQs9C10YHRgtGA0LjRgNC+0LLQsNC9J1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMuZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBhY2MgPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBrZXlzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBhY2NbZWxdID0gZXJyb3JzLmVycm9yW2VsXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZXRFcnJvcnNEYXRhKGFjYylcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJfX3dpbmRvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyX19pY29ufT57c3ZnU3ByaXRlKCdBdXRoRm9ybScsIHt3aWR0aDogJzQwcHgnfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCk0LDQvNC40LvQuNGPXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQcm9maWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aEVtYWlsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCi0LXQu9C10YTQvtC9XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aFBob25lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uPVwiQXV0aFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlPVwicmVwZWF0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QstGC0L7RgNC40YLQtSDQv9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9saXRpY31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9saXRpYzogIWRhdGEucG9saXRpY1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKGRhdGEucG9saXRpYyA/ICdBdXRoQ2hlY2tGYWxzZScgOiAnQXV0aENoZWNrVHJ1ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkYXRhLnBvbGl0aWMgPyAnNDBweCcgOiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0NXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6IGRhdGEucG9saXRpYyA/ICc0cHgnIDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQryDRgdC+0LPQu9Cw0YHQtdC9INGBINC/0L7Qu9C40YLQuNC60L7QuSDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90L7RgdGC0LhcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGF0YVNlbmRlcn1cclxuICAgICAgICAgICAgICAgID7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZWdpc3RlclZpZXciXSwic291cmNlUm9vdCI6IiJ9