webpackHotUpdate_N_E("pages/[lang]/auth/login",{

/***/ "./widgets/form/components/Input.js":
/*!******************************************!*\
  !*** ./widgets/form/components/Input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/widgets/form-styles.module.scss */ "./styles/widgets/form-styles.module.scss");
/* harmony import */ var _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldError */ "./widgets/form/components/FieldError.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../global/utils */ "./global/utils.js");




var _jsxFileName = "D:\\MotichProduction\\motich\\widgets\\form\\components\\Input.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Input = function Input(_ref) {
  _s();

  var attribute = _ref.attribute,
      data = _ref.data,
      setData = _ref.setData,
      placeholder = _ref.placeholder,
      type = _ref.type,
      svgIcon = _ref.svgIcon,
      errors = _ref.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showPassword = _useState[0],
      setShowPassword = _useState[1];

  var error = errors[attribute];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: error ? [_styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input, _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputError].join(' ') : _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
        value: data[attribute],
        placeholder: placeholder,
        type: !showPassword ? type : 'text',
        onChange: function onChange(e) {
          setData(_objectSpread(_objectSpread({}, data), {}, Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attribute, e.target.value)));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), svgIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIcon,
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(svgIcon, svgStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 30
      }, _this), type === 'password' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIconPassword,
        onClick: function onClick() {
          return setShowPassword(!showPassword);
        },
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(!showPassword ? 'OpenEye' : 'CloseEye', svgStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 42
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FieldError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a,
      textError: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }, _this)]
  }, void 0, true);
};

_s(Input, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");

_c = Input;
/* harmony default export */ __webpack_exports__["default"] = (Input);

var _c;

$RefreshReg$(_c, "Input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2lkZ2V0cy9mb3JtL2NvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXQiLCJhdHRyaWJ1dGUiLCJkYXRhIiwic2V0RGF0YSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN2Z0ljb24iLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yIiwiY2xhc3NlcyIsImlucHV0V3JhcHBlciIsImlucHV0IiwiaW5wdXRFcnJvciIsImpvaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dEljb24iLCJzdmdTcHJpdGUiLCJzdmdTdHlsZSIsImlucHV0SWNvblBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BUVI7QUFBQTs7QUFBQSxNQVBGQyxTQU9FLFFBUEZBLFNBT0U7QUFBQSxNQU5GQyxJQU1FLFFBTkZBLElBTUU7QUFBQSxNQUxGQyxPQUtFLFFBTEZBLE9BS0U7QUFBQSxNQUpGQyxXQUlFLFFBSkZBLFdBSUU7QUFBQSxNQUhGQyxJQUdFLFFBSEZBLElBR0U7QUFBQSxNQUZGQyxPQUVFLFFBRkZBLE9BRUU7QUFBQSxNQURGQyxNQUNFLFFBREZBLE1BQ0U7O0FBQUEsa0JBQ3NDQyxzREFBUSxDQUFDLEtBQUQsQ0FEOUM7QUFBQSxNQUNLQyxZQURMO0FBQUEsTUFDbUJDLGVBRG5COztBQUVGLE1BQU1DLEtBQUssR0FBR0osTUFBTSxDQUFDTixTQUFELENBQXBCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRVcsOEVBQU8sQ0FBQ0MsWUFBeEI7QUFBQSw4QkFDSTtBQUNBLGlCQUFTLEVBQUVGLEtBQUssR0FBRyxDQUFDQyw4RUFBTyxDQUFDRSxLQUFULEVBQWdCRiw4RUFBTyxDQUFDRyxVQUF4QixFQUFvQ0MsSUFBcEMsQ0FBeUMsR0FBekMsQ0FBSCxHQUFtREosOEVBQU8sQ0FBQ0UsS0FEM0U7QUFFQSxhQUFLLEVBQUVaLElBQUksQ0FBQ0QsU0FBRCxDQUZYO0FBR0EsbUJBQVcsRUFBRUcsV0FIYjtBQUlBLFlBQUksRUFBRSxDQUFDSyxZQUFELEdBQWdCSixJQUFoQixHQUF1QixNQUo3QjtBQUtBLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQsRUFBTztBQUNiZCxpQkFBTyxpQ0FDQUQsSUFEQSwySUFFRkQsU0FGRSxFQUVVZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRm5CLEdBQVA7QUFJSDtBQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQVlLYixPQUFPLGlCQUFLO0FBQUssaUJBQVMsRUFBRU0sOEVBQU8sQ0FBQ1EsU0FBeEI7QUFBQSxrQkFDUkMsc0VBQVMsQ0FBQ2YsT0FBRCxFQUFVZ0IsUUFBVjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaakIsRUFlS2pCLElBQUksS0FBSyxVQUFULGlCQUF3QjtBQUNyQixpQkFBUyxFQUFFTyw4RUFBTyxDQUFDVyxpQkFERTtBQUVyQixlQUFPLEVBQUU7QUFBQSxpQkFBTWIsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxTQUZZO0FBQUEsa0JBSXBCWSxzRUFBUyxDQUFDLENBQUNaLFlBQUQsR0FBZ0IsU0FBaEIsR0FBNEIsVUFBN0IsRUFBeUNhLFFBQXpDO0FBSlc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQXlCUyxDQUFDLENBQUNYLEtBQUYsaUJBQVcscUVBQUMsbURBQUQ7QUFDUixhQUFPLEVBQUVDLDhFQUREO0FBRVIsZUFBUyxFQUFFRDtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QnBCO0FBQUEsa0JBREo7QUFnQ0gsQ0E1Q0Q7O0dBQU1YLEs7O0tBQUFBLEs7QUE2Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS9hdXRoL2xvZ2luLmY0MzdlNDRkOWU3NjVmMDhlMGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL3dpZGdldHMvZm9ybS1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5pbXBvcnQgRmllbGRFcnJvciBmcm9tICcuL0ZpZWxkRXJyb3InO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7XHJcbiAgICBhdHRyaWJ1dGUsXHJcbiAgICBkYXRhLFxyXG4gICAgc2V0RGF0YSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgdHlwZSxcclxuICAgIHN2Z0ljb24sXHJcbiAgICBlcnJvcnNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgZXJyb3IgPSBlcnJvcnNbYXR0cmlidXRlXVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yID8gW2NsYXNzZXMuaW5wdXQsIGNsYXNzZXMuaW5wdXRFcnJvcl0uam9pbignICcpIDogY2xhc3Nlcy5pbnB1dH0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVthdHRyaWJ1dGVdfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9eyFzaG93UGFzc3dvcmQgPyB0eXBlIDogJ3RleHQnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICB7c3ZnSWNvbiAmJiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKHN2Z0ljb24sIHN2Z1N0eWxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiAoPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29uUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCFzaG93UGFzc3dvcmQgPyAnT3BlbkV5ZScgOiAnQ2xvc2VFeWUnLCBzdmdTdHlsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgeyEhZXJyb3IgJiYgPEZpZWxkRXJyb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RXJyb3I9e2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9