webpackHotUpdate_N_E("pages/[lang]/office/courses",{

/***/ "./global/utils.js":
/*!*************************!*\
  !*** ./global/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}

function useWindowDimensions() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions()),
      windowDimensions = _useState[0],
      setWindowDimensions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowDimensions;
}

_s(useWindowDimensions, "XalQq70mIWrnM+6Jr3XornfayDc=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldFdpbmRvd0RpbWVuc2lvbnMiLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1c2VTdGF0ZSIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLQSxTQUFTQSxtQkFBVCxHQUErQjtBQUFBLGdCQUN3QkMsTUFEeEI7QUFBQSxNQUNQQyxLQURPLFdBQ25CQyxVQURtQjtBQUFBLE1BQ2FDLE1BRGIsV0FDQUMsV0FEQTtBQUUzQixTQUFPO0FBQ0xILFNBQUssRUFBTEEsS0FESztBQUVMRSxVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEOztBQUVZLFNBQVNFLG1CQUFULEdBQStCO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUNQLG1CQUFtQixFQUFwQixDQURkO0FBQUEsTUFDbkNRLGdCQURtQztBQUFBLE1BQ2pCQyxtQkFEaUI7O0FBRzFDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTQyxZQUFULEdBQXdCO0FBQ3RCRix5QkFBbUIsQ0FBQ1QsbUJBQW1CLEVBQXBCLENBQW5CO0FBQ0Q7O0FBRURDLFVBQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1WLE1BQU0sQ0FBQ1ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFNBQU9ILGdCQUFQO0FBQ0Q7O0dBYnFCRixtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbGFuZ10vb2ZmaWNlL2NvdXJzZXMuOWFkYzVkYjVlMmI3NjlhZmUyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlU3RhdGUsIHVzZUVmZmVjdFxyXG59IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgcmV0dXJuIHdpbmRvd0RpbWVuc2lvbnM7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=