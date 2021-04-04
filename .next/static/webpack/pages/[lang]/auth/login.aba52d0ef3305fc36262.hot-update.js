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

  var _useWindowDimensions = Object(_global_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      width = _useWindowDimensions.width;

  var mobile = width < 768 ? true : false;
  var svgStyle = {
    width: mobile ? '20px' : '45px',
    height: mobile ? '20px' : '25px'
  };
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
        lineNumber: 30,
        columnNumber: 17
      }, _this), svgIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIcon,
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(svgIcon, svgStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 30
      }, _this), type === 'password' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputIconPassword,
        onClick: function onClick() {
          return setShowPassword(!showPassword);
        },
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])(!showPassword ? 'OpenEye' : 'CloseEye', svgStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 42
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FieldError__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a,
      textError: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }, _this)]
  }, void 0, true);
};

_s(Input, "sBqtPA1bwIE+oybJIKFEO0wmVO8=", false, function () {
  return [_global_utils__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2lkZ2V0cy9mb3JtL2NvbXBvbmVudHMvSW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXQiLCJhdHRyaWJ1dGUiLCJkYXRhIiwic2V0RGF0YSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN2Z0ljb24iLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yIiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpZHRoIiwibW9iaWxlIiwic3ZnU3R5bGUiLCJoZWlnaHQiLCJjbGFzc2VzIiwiaW5wdXRXcmFwcGVyIiwiaW5wdXQiLCJpbnB1dEVycm9yIiwiam9pbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0SWNvbiIsInN2Z1Nwcml0ZSIsImlucHV0SWNvblBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BUVI7QUFBQTs7QUFBQSxNQVBGQyxTQU9FLFFBUEZBLFNBT0U7QUFBQSxNQU5GQyxJQU1FLFFBTkZBLElBTUU7QUFBQSxNQUxGQyxPQUtFLFFBTEZBLE9BS0U7QUFBQSxNQUpGQyxXQUlFLFFBSkZBLFdBSUU7QUFBQSxNQUhGQyxJQUdFLFFBSEZBLElBR0U7QUFBQSxNQUZGQyxPQUVFLFFBRkZBLE9BRUU7QUFBQSxNQURGQyxNQUNFLFFBREZBLE1BQ0U7O0FBQUEsa0JBQ3NDQyxzREFBUSxDQUFDLEtBQUQsQ0FEOUM7QUFBQSxNQUNLQyxZQURMO0FBQUEsTUFDbUJDLGVBRG5COztBQUVGLE1BQU1DLEtBQUssR0FBR0osTUFBTSxDQUFDTixTQUFELENBQXBCOztBQUZFLDZCQUdnQlcsNkRBQW1CLEVBSG5DO0FBQUEsTUFHTUMsS0FITix3QkFHTUEsS0FITjs7QUFJRixNQUFNQyxNQUFNLEdBQUdELEtBQUssR0FBRyxHQUFSLEdBQWMsSUFBZCxHQUFxQixLQUFwQztBQUVBLE1BQU1FLFFBQVEsR0FBRztBQUNiRixTQUFLLEVBQUVDLE1BQU0sR0FBRyxNQUFILEdBQVksTUFEWjtBQUViRSxVQUFNLEVBQUVGLE1BQU0sR0FBRyxNQUFILEdBQVk7QUFGYixHQUFqQjtBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVHLDhFQUFPLENBQUNDLFlBQXhCO0FBQUEsOEJBQ0k7QUFDQSxpQkFBUyxFQUFFUCxLQUFLLEdBQUcsQ0FBQ00sOEVBQU8sQ0FBQ0UsS0FBVCxFQUFnQkYsOEVBQU8sQ0FBQ0csVUFBeEIsRUFBb0NDLElBQXBDLENBQXlDLEdBQXpDLENBQUgsR0FBbURKLDhFQUFPLENBQUNFLEtBRDNFO0FBRUEsYUFBSyxFQUFFakIsSUFBSSxDQUFDRCxTQUFELENBRlg7QUFHQSxtQkFBVyxFQUFFRyxXQUhiO0FBSUEsWUFBSSxFQUFFLENBQUNLLFlBQUQsR0FBZ0JKLElBQWhCLEdBQXVCLE1BSjdCO0FBS0EsZ0JBQVEsRUFBRSxrQkFBQ2lCLENBQUQsRUFBTztBQUNibkIsaUJBQU8saUNBQ0FELElBREEsMklBRUZELFNBRkUsRUFFVXFCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUZuQixHQUFQO0FBSUg7QUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFZS2xCLE9BQU8saUJBQUs7QUFBSyxpQkFBUyxFQUFFVyw4RUFBTyxDQUFDUSxTQUF4QjtBQUFBLGtCQUNSQyxzRUFBUyxDQUFDcEIsT0FBRCxFQUFVUyxRQUFWO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpqQixFQWVLVixJQUFJLEtBQUssVUFBVCxpQkFBd0I7QUFDckIsaUJBQVMsRUFBRVksOEVBQU8sQ0FBQ1UsaUJBREU7QUFFckIsZUFBTyxFQUFFO0FBQUEsaUJBQU1qQixlQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFyQjtBQUFBLFNBRlk7QUFBQSxrQkFJcEJpQixzRUFBUyxDQUFDLENBQUNqQixZQUFELEdBQWdCLFNBQWhCLEdBQTRCLFVBQTdCLEVBQXlDTSxRQUF6QztBQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUF5QlMsQ0FBQyxDQUFDSixLQUFGLGlCQUFXLHFFQUFDLG1EQUFEO0FBQ1IsYUFBTyxFQUFFTSw4RUFERDtBQUVSLGVBQVMsRUFBRU47QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJwQjtBQUFBLGtCQURKO0FBZ0NILENBbEREOztHQUFNWCxLO1VBV2dCWSxxRDs7O0tBWGhCWixLO0FBbURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vYXV0aC9sb2dpbi5hYmE1MmQwZWYzMzA1ZmMzNjI2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy93aWRnZXRzL2Zvcm0tc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IEZpZWxkRXJyb3IgZnJvbSAnLi9GaWVsZEVycm9yJztcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi8uLi8uLi8uLi9nbG9iYWwvdXRpbHMnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe1xyXG4gICAgYXR0cmlidXRlLFxyXG4gICAgZGF0YSxcclxuICAgIHNldERhdGEsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIHR5cGUsXHJcbiAgICBzdmdJY29uLFxyXG4gICAgZXJyb3JzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGVycm9yID0gZXJyb3JzW2F0dHJpYnV0ZV1cclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgICAgXHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aWR0aCA8IDc2OCA/IHRydWUgOiBmYWxzZVxyXG5cclxuICAgIGNvbnN0IHN2Z1N0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiBtb2JpbGUgPyAnMjBweCcgOiAnNDVweCcsXHJcbiAgICAgICAgaGVpZ2h0OiBtb2JpbGUgPyAnMjBweCcgOiAnMjVweCdcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3IgPyBbY2xhc3Nlcy5pbnB1dCwgY2xhc3Nlcy5pbnB1dEVycm9yXS5qb2luKCcgJykgOiBjbGFzc2VzLmlucHV0fSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhW2F0dHJpYnV0ZV19IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17IXNob3dQYXNzd29yZCA/IHR5cGUgOiAndGV4dCd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIHtzdmdJY29uICYmICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoc3ZnSWNvbiwgc3ZnU3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgIHt0eXBlID09PSAncGFzc3dvcmQnICYmICg8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEljb25QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoIXNob3dQYXNzd29yZCA/ICdPcGVuRXllJyA6ICdDbG9zZUV5ZScsIHN2Z1N0eWxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7ISFlcnJvciAmJiA8RmllbGRFcnJvciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRFcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=