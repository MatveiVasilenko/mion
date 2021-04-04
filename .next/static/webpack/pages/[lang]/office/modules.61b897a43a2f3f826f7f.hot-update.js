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
        lineNumber: 72,
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
        lineNumber: 86,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_ui_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3Mvb2ZmaWNlL21vZHVsZXMvY29tcG9uZW50cy9WaWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyIsInBhdGgiLCJkZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwic2hvd0NvbnRyb2xzIiwic2V0U2hvd0NvbnRyb2xzIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwicGxheWluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZWZQbGF5ZXIiLCJSZWFjdCIsInVzZVJlZiIsInJlZlBsYXllckNvbnRhaW5lciIsInBsYXlWaWRlbyIsInNldFRpbWVvdXQiLCJ0b2dnbGVGdWxsU2NyZWVuIiwic2NyZWVuZnVsbCIsInRvZ2dsZSIsImN1cnJlbnQiLCJjaGFuZ2VWb2x1bWUiLCJ2IiwiTnVtYmVyIiwicHJvZ3Jlc3NWaWRlbyIsImNoYW5nZURhdGEiLCJwcm9ncmVzc1ZpZGVvQ29udG9scyIsImUiLCJjb25zb2xlIiwibG9nIiwicGxheWVkIiwic2Vla1RvIiwiZHVyYXRpb25WaWRlbyIsInVzZUNhbGxiYWNrIiwiaGFuZGxlRmFzdHdpbmQiLCJnZXRDdXJyZW50VGltZSIsImNsYXNzZXMiLCJ3cmFwcGVyIiwidmlkZW9XcmFwcGVyIiwiTkVUIiwiQkFDS19VUkxfTU9EVUxFIiwicGxheSIsInByb2dyZXNzIiwiZnVsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHUjtBQUFBOztBQUFBLE1BRkZDLElBRUUsUUFGRkEsSUFFRTtBQUFBLE1BREZDLFdBQ0UsUUFERkEsV0FDRTs7QUFDRjtBQURFLGtCQUVzQ0Msc0RBQVEsQ0FBQyxLQUFELENBRjlDO0FBQUEsTUFFS0MsWUFGTDtBQUFBLE1BRW1CQyxlQUZuQixpQkFHRjs7O0FBSEUsbUJBSTBCRixzREFBUSxDQUFDLENB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QXBCO0FBQUEsU0FMaEI7QUFNSSxXQUFHLEVBQUVoQixTQU5UO0FBT0ksYUFBSyxFQUFDLE1BUFY7QUFRSSxjQUFNLEVBQUMsTUFSWDtBQVNJLGNBQU0sRUFBRSxnQkFBQ2dCLENBQUQ7QUFBQSxpQkFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBUDtBQUFBLFNBVFo7QUFVSSxlQUFPLEVBQUUsS0FWYjtBQVdJLFdBQUcsRUFBRSxLQVhUO0FBWUksYUFBSyxFQUFFO0FBWlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZUkscUVBQUMsc0RBQUQ7QUFDSSxvQkFBWSxFQUFFdkIsWUFEbEI7QUFFSSxlQUFPLEVBQUVnQyxtRkFGYjtBQUdJLGVBQU8sRUFBRTVCLE9BSGI7QUFJSSxjQUFNLEVBQUVGLE1BSlo7QUFLSSxnQkFBUSxFQUFFRyxLQUxkO0FBTUksYUFBSyxFQUFFO0FBQ0hnQyxjQUFJLEVBQUUxQixTQURIO0FBRUhULGdCQUFNLEVBQUVlLFlBRkw7QUFHSHFCLGtCQUFRLEVBQUVoQixvQkFIUDtBQUlIaUIsY0FBSSxFQUFFMUI7QUFKSCxTQU5YO0FBWUksa0JBQVUsRUFBRWlCO0FBWmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSixlQXdDSSxxRUFBQyw2REFBRDtBQUFBLGdCQUNLaEM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0NILENBaEdEOztHQUFNRixLOztLQUFBQSxLO0FBaUdTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vb2ZmaWNlL21vZHVsZXMuNjFiODk3YTQzYTJmM2Y4MjZmN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VSZWZcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuLi8uLi8uLi8uLi93aWRnZXRzL3VpL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IE5FVCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vbmV0d29yayc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZpZXdzL21vZHVsZS12aWV3LXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IENvbnRyb2xzVmlkZW8gZnJvbSAnLi9Db250cm9sc1ZpZGVvJztcclxuaW1wb3J0IHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbCdcclxuXHJcbmNvbnN0IFZpZGVvID0gKHtcclxuICAgIHBhdGgsXHJcbiAgICBkZXNjcmlwdGlvblxyXG59KSA9PiB7XHJcbiAgICAvL0NvbnRyb2xzIGJsb2NrIHN0YXRlXHJcbiAgICBjb25zdCBbc2hvd0NvbnRyb2xzLCBzZXRTaG93Q29udHJvbHNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbc2hvd1BsYXksIHNldFNob3dQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwbGF5aW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBwbGF5aW5nXHJcbiAgICB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHJlZlBsYXllciA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgcmVmUGxheWVyQ29udGFpbmVyID0gUmVhY3QudXNlUmVmKG51bGwpXHJcbiAgICBcclxuICAgIC8vRnVuY3Rpb25Db250cm9sc1xyXG4gICAgY29uc3QgcGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgcGxheWluZzogIXBsYXlpbmd9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93Q29udHJvbHMoZmFsc2UpXHJcbiAgICAgICAgfSwgMzAwMClcclxuICAgIH1cclxuICAgIGNvbnN0IHRvZ2dsZUZ1bGxTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyZWVuZnVsbC50b2dnbGUocmVmUGxheWVyQ29udGFpbmVyLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VWb2x1bWUgPSAodikgPT4ge1xyXG4gICAgICAgIHNldFZvbHVtZShOdW1iZXIodikpXHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9ncmVzc1ZpZGVvID0gKGNoYW5nZURhdGEpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIC4uLmNoYW5nZURhdGF9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvZ3Jlc3NWaWRlb0NvbnRvbHMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2VGbG9hdChlKSlcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBwbGF5ZWQ6IE51bWJlcihlKSB9KTtcclxuICAgICAgICByZWZQbGF5ZXIuY3VycmVudC5zZWVrVG8oTnVtYmVyKGUpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHVyYXRpb25WaWRlbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0UHJvZ3Jlc3Moe1xyXG4gICAgICAgIC8vICAgICAuLi5wcm9ncmVzcyxcclxuICAgICAgICAvLyAgICAgZW5kOiBlXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgaGFuZGxlRmFzdHdpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVmUGxheWVyLmN1cnJlbnQuc2Vla1RvKHJlZlBsYXllci5jdXJyZW50LmdldEN1cnJlbnRUaW1lKCkgKyAxMClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb250cm9scyh0cnVlKX1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93Q29udHJvbHModHJ1ZSl9XHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0NvbnRyb2xzKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZQbGF5ZXJDb250YWluZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHVybD17YCR7TkVULkJBQ0tfVVJMX01PRFVMRX0ke3BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZT17dm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M9e3Byb2dyZXNzVmlkZW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25EdXJhdGlvbj17KGUpID0+IGR1cmF0aW9uVmlkZW8oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZQbGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBvblNlZWs9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cclxuICAgICAgICAgICAgICAgICAgICBzZWVraW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBwaXA9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udHJvbHNWaWRlbyBcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29udHJvbHM9e3Nob3dDb250cm9sc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXk6IHBsYXlWaWRlbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiBjaGFuZ2VWb2x1bWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1ZpZGVvQ29udG9scyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbDogdG9nZ2xlRnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYXN0d2luZD17aGFuZGxlRmFzdHdpbmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==