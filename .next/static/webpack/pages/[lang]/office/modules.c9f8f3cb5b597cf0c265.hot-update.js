webpackHotUpdate_N_E("pages/[lang]/office/modules",{

/***/ "./views/office/modules/components/Video.js":
/*!**************************************************!*\
  !*** ./views/office/modules/components/Video.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widgets_ui_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../widgets/ui/TextField */ "./widgets/ui/TextField.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../network */ "./network.js");
/* harmony import */ var _styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../styles/views/module-view-styles.module.scss */ "./styles/views/module-view-styles.module.scss");
/* harmony import */ var _styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ControlsVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ControlsVideo */ "./views/office/modules/components/ControlsVideo.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\modules\\components\\Video.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MotichProduction_motich_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Video = function Video(_ref) {
  _s();

  var path = _ref.path,
      description = _ref.description;

  //Controls block state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showControls = _useState[0],
      setShowControls = _useState[1]; // const [showPlay, setShowPlay] = useState(false)


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      volume = _useState2[0],
      setVolume = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    playing: true
  }),
      state = _useState3[0],
      setState = _useState3[1];

  var playing = state.playing;
  var refPlayer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var refPlayerContainer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null); //FunctionControls

  var playVideo = function playVideo() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      playing: !playing
    }));
    setTimeout(function () {
      setShowControls(false);
    }, 3000);
  };

  var toggleFullScreen = function toggleFullScreen() {
    screenfull__WEBPACK_IMPORTED_MODULE_8___default.a.toggle(refPlayerContainer.current);
  };

  var changeVolume = function changeVolume(v) {
    setVolume(Number(v));
  };

  var progressVideo = function progressVideo(changeData) {
    setState(_objectSpread(_objectSpread({}, state), changeData));
  };

  var progressVideoContols = function progressVideoContols(e) {
    console.log(e); // console.log(parseFloat(e))

    setState(_objectSpread(_objectSpread({}, state), {}, {
      played: Number(e)
    }));
    refPlayer.current.seekTo(Number(e));
  };

  var durationVideo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {// setProgress({
    //     ...progress,
    //     end: e
    // })
  }, []);

  var handleFastwind = function handleFastwind() {
    refPlayer.current.seekTo(refPlayer.current.getCurrentTime() + 10);
  };

  console.log("".concat(_network__WEBPACK_IMPORTED_MODULE_5__["NET"].BACK_URL_MODULE).concat(path));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
    onClick: function onClick() {
      return setShowControls(true);
    },
    onMouseEnter: function onMouseEnter() {
      return setShowControls(true);
    },
    onMouseLeave: function onMouseLeave() {
      setTimeout(function () {
        setShowControls(false);
      }, 3000);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: refPlayerContainer,
      className: _styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.videoWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
        url: "".concat(_network__WEBPACK_IMPORTED_MODULE_5__["NET"].BACK_URL_MODULE).concat(path),
        playing: playing,
        volume: volume,
        onProgress: progressVideo,
        onDuration: function onDuration(e) {
          return durationVideo(e);
        },
        ref: refPlayer,
        width: "100%",
        height: "auto",
        onSeek: function onSeek(e) {
          return console.log(e);
        },
        seeking: false,
        pip: false,
        light: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ControlsVideo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        showControls: showControls,
        classes: _styles_views_module_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a,
        playing: playing,
        volume: volume,
        progress: state,
        funcs: {
          play: playVideo,
          volume: changeVolume,
          progress: progressVideoContols,
          full: toggleFullScreen
        },
        onFastwind: handleFastwind
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_ui_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(Video, "TbpX8VYUy8q6SwtA5Fr1kP4j49g=");

_c = Video;
/* harmony default export */ __webpack_exports__["default"] = (Video);

var _c;

$RefreshReg$(_c, "Video");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3Mvb2ZmaWNlL21vZHVsZXMvY29tcG9uZW50cy9WaWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyIsInBhdGgiLCJkZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwic2hvd0NvbnRyb2xzIiwic2V0U2hvd0NvbnRyb2xzIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwicGxheWluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZWZQbGF5ZXIiLCJSZWFjdCIsInVzZVJlZiIsInJlZlBsYXllckNvbnRhaW5lciIsInBsYXlWaWRlbyIsInNldFRpbWVvdXQiLCJ0b2dnbGVGdWxsU2NyZWVuIiwic2NyZWVuZnVsbCIsInRvZ2dsZSIsImN1cnJlbnQiLCJjaGFuZ2VWb2x1bWUiLCJ2IiwiTnVtYmVyIiwicHJvZ3Jlc3NWaWRlbyIsImNoYW5nZURhdGEiLCJwcm9ncmVzc1ZpZGVvQ29udG9scyIsImUiLCJjb25zb2xlIiwibG9nIiwicGxheWVkIiwic2Vla1RvIiwiZHVyYXRpb25WaWRlbyIsInVzZUNhbGxiYWNrIiwiaGFuZGxlRmFzdHdpbmQiLCJnZXRDdXJyZW50VGltZSIsIk5FVCIsIkJBQ0tfVVJMX01PRFVMRSIsImNsYXNzZXMiLCJ3cmFwcGVyIiwidmlkZW9XcmFwcGVyIiwicGxheSIsInByb2dyZXNzIiwiZnVsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHUjtBQUFBOztBQUFBLE1BRkZDLElBRUUsUUFGRkEsSUFFRTtBQUFBLE1BREZDLFdBQ0UsUUFERkEsV0FDRTs7QUFDRjtBQURFLGtCQUVzQ0Msc0RBQVEsQ0FBQyxLQUFELENBRjlDO0FBQUEsTUFFS0MsWUFGTDtBQUFBLE1BRW1CQyxlQUZuQixpQkFHRjs7O0FBSEUsbUJBSTBCRixzREFBUSxDQUFDLENBQUQsQ0FKbEM7QUFBQSxNQUlLRyxNQUpMO0FBQUEsTUFJYUMsU0FKYjs7QUFBQSxtQkFLd0JKLHNEQUFRLENBQUM7QUFDL0JLLFdBQU8sRUFBRTtBQURzQixHQUFELENBTGhDO0FBQUEsTUFLS0MsS0FMTDtBQUFBLE1BS1lDLFFBTFo7O0FBQUEsTUFVRUYsT0FWRixHQVdFQyxLQVhGLENBVUVELE9BVkY7QUFZRixNQUFNRyxTQUFTLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQTNCLENBYkUsQ0FlRjs7QUFDQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCTCxZQUFRLGlDQUFLRCxLQUFMO0FBQVlELGFBQU8sRUFBRSxDQUFDQTtBQUF0QixPQUFSO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2JYLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBTEQ7O0FBTUEsTUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCQyxxREFBVSxDQUFDQyxNQUFYLENBQWtCTCxrQkFBa0IsQ0FBQ00sT0FBckM7QUFDSCxHQUZEOztBQUdBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QmYsYUFBUyxDQUFDZ0IsTUFBTSxDQUFDRCxDQUFELENBQVAsQ0FBVDtBQUNILEdBRkQ7O0FBR0EsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQWdCO0FBQ2xDZixZQUFRLGlDQUFLRCxLQUFMLEdBQWVnQixVQUFmLEVBQVI7QUFDSCxHQUZEOztBQUdBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixFQURnQyxDQUVoQzs7QUFDQWpCLFlBQVEsaUNBQU1ELEtBQU47QUFBYXFCLFlBQU0sRUFBRVAsTUFBTSxDQUFDSSxDQUFEO0FBQTNCLE9BQVI7QUFDQWhCLGFBQVMsQ0FBQ1MsT0FBVixDQUFrQlcsTUFBbEIsQ0FBeUJSLE1BQU0sQ0FBQ0ksQ0FBRCxDQUEvQjtBQUNILEdBTEQ7O0FBTUEsTUFBTUssYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUNOLENBQUQsRUFBTyxDQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNILEdBTGdDLEVBSzlCLEVBTDhCLENBQWpDOztBQU1BLE1BQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QnZCLGFBQVMsQ0FBQ1MsT0FBVixDQUFrQlcsTUFBbEIsQ0FBeUJwQixTQUFTLENBQUNTLE9BQVYsQ0FBa0JlLGNBQWxCLEtBQXFDLEVBQTlEO0FBQ0gsR0FGRDs7QUFHQVAsU0FBTyxDQUFDQyxHQUFSLFdBQWVPLDRDQUFHLENBQUNDLGVBQW5CLFNBQXFDcEMsSUFBckM7QUFDQSxzQkFDSTtBQUNJLGFBQVMsRUFBRXFDLG1GQUFPLENBQUNDLE9BRHZCO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTWxDLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsS0FGYjtBQUdJLGdCQUFZLEVBQUU7QUFBQSxhQUFNQSxlQUFlLENBQUMsSUFBRCxDQUFyQjtBQUFBLEtBSGxCO0FBSUksZ0JBQVksRUFBRSx3QkFBTTtBQUNoQlcsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JYLHVCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBUkw7QUFBQSw0QkFVSTtBQUFLLFNBQUcsRUFBRVMsa0JBQVY7QUFBOEIsZUFBUyxFQUFFd0IsbUZBQU8sQ0FBQ0UsWUFBakQ7QUFBQSw4QkFDSSxxRUFBQyxtREFBRDtBQUNJLFdBQUcsWUFBS0osNENBQUcsQ0FBQ0MsZUFBVCxTQUEyQnBDLElBQTNCLENBRFA7QUFFSSxlQUFPLEVBQUVPLE9BRmI7QUFHSSxjQUFNLEVBQUVGLE1BSFo7QUFJSSxrQkFBVSxFQUFFa0IsYUFKaEI7QUFLSSxrQkFBVSxFQUFFLG9CQUFDRyxDQUFEO0FBQUEsaUJBQU9LLGFBQWEsQ0FBQ0wsQ0FBRCxDQUFwQjtBQUFBLFNBTGhCO0FBTUksV0FBRyxFQUFFaEIsU0FOVDtBQU9JLGFBQUssRUFBQyxNQVBWO0FBUUksY0FBTSxFQUFDLE1BUlg7QUFTSSxjQUFNLEVBQUUsZ0JBQUNnQixDQUFEO0FBQUEsaUJBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQVA7QUFBQSxTQVRaO0FBVUksZUFBTyxFQUFFLEtBVmI7QUFXSSxXQUFHLEVBQUUsS0FYVDtBQVlJLGFBQUssRUFBRTtBQVpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWVJLHFFQUFDLHNEQUFEO0FBQ0ksb0JBQVksRUFBRXZCLFlBRGxCO0FBRUksZUFBTyxFQUFFa0MsbUZBRmI7QUFHSSxlQUFPLEVBQUU5QixPQUhiO0FBSUksY0FBTSxFQUFFRixNQUpaO0FBS0ksZ0JBQVEsRUFBRUcsS0FMZDtBQU1JLGFBQUssRUFBRTtBQUNIZ0MsY0FBSSxFQUFFMUIsU0FESDtBQUVIVCxnQkFBTSxFQUFFZSxZQUZMO0FBR0hxQixrQkFBUSxFQUFFaEIsb0JBSFA7QUFJSGlCLGNBQUksRUFBRTFCO0FBSkgsU0FOWDtBQVlJLGtCQUFVLEVBQUVpQjtBQVpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkosZUF3Q0kscUVBQUMsNkRBQUQ7QUFBQSxnQkFDS2hDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStDSCxDQWpHRDs7R0FBTUYsSzs7S0FBQUEsSztBQWtHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddL29mZmljZS9tb2R1bGVzLmM5ZjhmM2NiNWI1OTdjZjBjMjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlUmVmXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi4vLi4vLi4vLi4vd2lkZ2V0cy91aS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBORVQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL25ldHdvcmsnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uLy4uL3N0eWxlcy92aWV3cy9tb2R1bGUtdmlldy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBDb250cm9sc1ZpZGVvIGZyb20gJy4vQ29udHJvbHNWaWRlbyc7XHJcbmltcG9ydCBzY3JlZW5mdWxsIGZyb20gJ3NjcmVlbmZ1bGwnXHJcblxyXG5jb25zdCBWaWRlbyA9ICh7XHJcbiAgICBwYXRoLFxyXG4gICAgZGVzY3JpcHRpb25cclxufSkgPT4ge1xyXG4gICAgLy9Db250cm9scyBibG9jayBzdGF0ZVxyXG4gICAgY29uc3QgW3Nob3dDb250cm9scywgc2V0U2hvd0NvbnRyb2xzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc3QgW3Nob3dQbGF5LCBzZXRTaG93UGxheV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGxheWluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcGxheWluZ1xyXG4gICAgfSA9IHN0YXRlXHJcbiAgICBjb25zdCByZWZQbGF5ZXIgPSBSZWFjdC51c2VSZWYobnVsbClcclxuICAgIGNvbnN0IHJlZlBsYXllckNvbnRhaW5lciA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgXHJcbiAgICAvL0Z1bmN0aW9uQ29udHJvbHNcclxuICAgIGNvbnN0IHBsYXlWaWRlbyA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHBsYXlpbmc6ICFwbGF5aW5nfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2hvd0NvbnRyb2xzKGZhbHNlKVxyXG4gICAgICAgIH0sIDMwMDApXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKHJlZlBsYXllckNvbnRhaW5lci5jdXJyZW50KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVm9sdW1lID0gKHYpID0+IHtcclxuICAgICAgICBzZXRWb2x1bWUoTnVtYmVyKHYpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvZ3Jlc3NWaWRlbyA9IChjaGFuZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCAuLi5jaGFuZ2VEYXRhfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2dyZXNzVmlkZW9Db250b2xzID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRmxvYXQoZSkpXHJcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgcGxheWVkOiBOdW1iZXIoZSkgfSk7XHJcbiAgICAgICAgcmVmUGxheWVyLmN1cnJlbnQuc2Vla1RvKE51bWJlcihlKSlcclxuICAgIH1cclxuICAgIGNvbnN0IGR1cmF0aW9uVmlkZW8gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNldFByb2dyZXNzKHtcclxuICAgICAgICAvLyAgICAgLi4ucHJvZ3Jlc3MsXHJcbiAgICAgICAgLy8gICAgIGVuZDogZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGhhbmRsZUZhc3R3aW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHJlZlBsYXllci5jdXJyZW50LnNlZWtUbyhyZWZQbGF5ZXIuY3VycmVudC5nZXRDdXJyZW50VGltZSgpICsgMTApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJHtORVQuQkFDS19VUkxfTU9EVUxFfSR7cGF0aH1gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvbnRyb2xzKHRydWUpfVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dDb250cm9scyh0cnVlKX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93Q29udHJvbHMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiByZWY9e3JlZlBsYXllckNvbnRhaW5lcn0gY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtgJHtORVQuQkFDS19VUkxfTU9EVUxFfSR7cGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17cHJvZ3Jlc3NWaWRlb31cclxuICAgICAgICAgICAgICAgICAgICBvbkR1cmF0aW9uPXsoZSkgPT4gZHVyYXRpb25WaWRlbyhlKX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZlBsYXllcn1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2Vlaz17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlZWtpbmc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBpcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb250cm9sc1ZpZGVvIFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb250cm9scz17c2hvd0NvbnRyb2xzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWluZz17cGxheWluZ31cclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e3ZvbHVtZX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17c3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheTogcGxheVZpZGVvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IGNoYW5nZVZvbHVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzVmlkZW9Db250b2xzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsOiB0b2dnbGVGdWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZhc3R3aW5kPXtoYW5kbGVGYXN0d2luZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW8iXSwic291cmNlUm9vdCI6IiJ9