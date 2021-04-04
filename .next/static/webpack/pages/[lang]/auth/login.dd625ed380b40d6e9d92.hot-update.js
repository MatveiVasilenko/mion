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
        lineNumber: 22,
        columnNumber: 17
      }, _this), svgIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIcon,
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(svgIcon, {
          className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.svgInput
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 30
      }, _this), type === 'password' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIconPassword,
        onClick: function onClick() {
          return setShowPassword(!showPassword);
        },
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(!showPassword ? 'OpenEye' : 'CloseEye', {
          width: '45px'
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 42
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FieldError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a,
      textError: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2lkZ2V0cy9mb3JtL2NvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXQiLCJhdHRyaWJ1dGUiLCJkYXRhIiwic2V0RGF0YSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN2Z0ljb24iLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yIiwiY2xhc3NlcyIsImlucHV0V3JhcHBlciIsImlucHV0IiwiaW5wdXRFcnJvciIsImpvaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dEljb24iLCJzdmdTcHJpdGUiLCJjbGFzc05hbWUiLCJzdmdJbnB1dCIsImlucHV0SWNvblBhc3N3b3JkIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FRUjtBQUFBOztBQUFBLE1BUEZDLFNBT0UsUUFQRkEsU0FPRTtBQUFBLE1BTkZDLElBTUUsUUFORkEsSUFNRTtBQUFBLE1BTEZDLE9BS0UsUUFMRkEsT0FLRTtBQUFBLE1BSkZDLFdBSUUsUUFKRkEsV0FJRTtBQUFBLE1BSEZDLElBR0UsUUFIRkEsSUFHRTtBQUFBLE1BRkZDLE9BRUUsUUFGRkEsT0FFRTtBQUFBLE1BREZDLE1BQ0UsUUFERkEsTUFDRTs7QUFBQSxrQkFDc0NDLHNEQUFRLENBQUMsS0FBRCxDQUQ5QztBQUFBLE1BQ0tDLFlBREw7QUFBQSxNQUNtQkMsZUFEbkI7O0FBRUYsTUFBTUMsS0FBSyxHQUFHSixNQUFNLENBQUNOLFNBQUQsQ0FBcEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFVyw4RUFBTyxDQUFDQyxZQUF4QjtBQUFBLDhCQUNJO0FBQ0EsaUJBQVMsRUFBRUYsS0FBSyxHQUFHLENBQUNDLDhFQUFPLENBQUNFLEtBQVQsRUFBZ0JGLDhFQUFPLENBQUNHLFVBQXhCLEVBQW9DQyxJQUFwQyxDQUF5QyxHQUF6QyxDQUFILEdBQW1ESiw4RUFBTyxDQUFDRSxLQUQzRTtBQUVBLGFBQUssRUFBRVosSUFBSSxDQUFDRCxTQUFELENBRlg7QUFHQSxtQkFBVyxFQUFFRyxXQUhiO0FBSUEsWUFBSSxFQUFFLENBQUNLLFlBQUQsR0FBZ0JKLElBQWhCLEdBQXVCLE1BSjdCO0FBS0EsZ0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQ2JkLGlCQUFPLGlDQUNBRCxJQURBLDJJQUVGRCxTQUZFLEVBRVVnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FGbkIsR0FBUDtBQUlIO0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBWUtiLE9BQU8saUJBQUs7QUFBSyxpQkFBUyxFQUFFTSw4RUFBTyxDQUFDUSxTQUF4QjtBQUFBLGtCQUNSQyxzRUFBUyxDQUFDZixPQUFELEVBQVU7QUFDaEJnQixtQkFBUyxFQUFFViw4RUFBTyxDQUFDVztBQURILFNBQVY7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWmpCLEVBaUJLbEIsSUFBSSxLQUFLLFVBQVQsaUJBQXdCO0FBQ3JCLGlCQUFTLEVBQUVPLDhFQUFPLENBQUNZLGlCQURFO0FBRXJCLGVBQU8sRUFBRTtBQUFBLGlCQUFNZCxlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBLFNBRlk7QUFBQSxrQkFJcEJZLHNFQUFTLENBQUMsQ0FBQ1osWUFBRCxHQUFnQixTQUFoQixHQUE0QixVQUE3QixFQUF5QztBQUMvQ2dCLGVBQUssRUFBRTtBQUR3QyxTQUF6QztBQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBNkJTLENBQUMsQ0FBQ2QsS0FBRixpQkFBVyxxRUFBQyxtREFBRDtBQUNSLGFBQU8sRUFBRUMsOEVBREQ7QUFFUixlQUFTLEVBQUVEO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCcEI7QUFBQSxrQkFESjtBQW9DSCxDQS9DRDs7R0FBTVgsSzs7S0FBQUEsSztBQWdEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddL2F1dGgvbG9naW4uZGQ2MjVlZDM4MGI0MGQ2ZTlkOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGVcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi8uLi8uLi8uLi9zdHlsZXMvd2lkZ2V0cy9mb3JtLXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHN2Z1Nwcml0ZSBmcm9tICcuLy4uLy4uLy4uL3Byb2plY3Qvc3ZnL3N2Z1Nwcml0ZSc7XHJcbmltcG9ydCBGaWVsZEVycm9yIGZyb20gJy4vRmllbGRFcnJvcic7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7XHJcbiAgICBhdHRyaWJ1dGUsXHJcbiAgICBkYXRhLFxyXG4gICAgc2V0RGF0YSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgdHlwZSxcclxuICAgIHN2Z0ljb24sXHJcbiAgICBlcnJvcnNcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgZXJyb3IgPSBlcnJvcnNbYXR0cmlidXRlXVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvciA/IFtjbGFzc2VzLmlucHV0LCBjbGFzc2VzLmlucHV0RXJyb3JdLmpvaW4oJyAnKSA6IGNsYXNzZXMuaW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFbYXR0cmlidXRlXX0gXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXshc2hvd1Bhc3N3b3JkID8gdHlwZSA6ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAge3N2Z0ljb24gJiYgKDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0SWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZShzdmdJY29uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5zdmdJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgIHt0eXBlID09PSAncGFzc3dvcmQnICYmICg8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEljb25QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoIXNob3dQYXNzd29yZCA/ICdPcGVuRXllJyA6ICdDbG9zZUV5ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0NXB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7ISFlcnJvciAmJiA8RmllbGRFcnJvciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRFcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=