module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[lang]/auth/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global/utils.js":
/*!*************************!*\
  !*** ./global/utils.js ***!
  \*************************/
/*! exports provided: default, transformWordCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformWordCount", function() { return transformWordCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
const transformWordCount = (count, lang) => {
  const ender = {
    first: '????????',
    second: '??????',
    third: '????????'
  };
  let total = count % 10;

  switch (true) {
    case count >= 5 && count <= 20:
      return ender.third;

    case total === 1:
      return ender.first;

    case total > 1 && total < 5:
      return ender.second;

    case total > 4:
      return ender.third;

    default:
      return ender.first;
  }
};

/***/ }),

/***/ "./layouts/auth/Auth.js":
/*!******************************!*\
  !*** ./layouts/auth/Auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\auth\\Auth.js";


const Auth = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./network.js":
/*!********************!*\
  !*** ./network.js ***!
  \********************/
/*! exports provided: NET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NET", function() { return NET; });
const NET = {
  // BACK_URL: 'http://192.168.0.103:8000/api',
  // BACK_URL_MODULE: 'http://192.168.0.103:8000',
  // FRONT_URL: 'http://192.168.0.104:8000'
  BACK_URL: 'https://www.mion.courses/api',
  BACK_URL_MODULE: 'https://www.mion.courses',
  FRONT_URL: 'https://motich.mion.courses/ru/auth/register'
};

/***/ }),

/***/ "./pages/[lang]/auth/login.js":
/*!************************************!*\
  !*** ./pages/[lang]/auth/login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_auth_AuthLoginView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../views/auth/AuthLoginView */ "./views/auth/AuthLoginView.js");
/* harmony import */ var _layouts_auth_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../layouts/auth/Auth */ "./layouts/auth/Auth.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\pages\\[lang]\\auth\\login.js";




const Login = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_auth_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_views_auth_AuthLoginView__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./project/svg/svgSprite.js":
/*!**********************************!*\
  !*** ./project/svg/svgSprite.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\MotichProduction\\motich\\project\\svg\\svgSprite.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const svgSprite = (name, styles) => {
  switch (name) {
    case 'Home':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 48 42",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M7.65954 40.432H6.65954C7.65954 40.432 7.65954 40.4319 7.65954 40.4318V40.4312V40.4287V40.4188V40.4114V40.4024V40.3973V40.3918V40.3859V40.3796V40.3729V40.3659V40.3584V40.3506V40.3337V40.3153V40.3056V40.2954V40.2849V40.2741V40.2512V40.2268V40.201V40.1875V40.1737V40.1595V40.145V40.1149V40.0833V40.067V40.0504V40.0334V40.0161V39.9984V39.9804V39.962V39.9433V39.9243V39.9049V39.8852V39.8651V39.8241V39.8031V39.7817V39.76V39.7381V39.7157V39.6931V39.6702V39.6469V39.6233V39.5994V39.5752V39.5507V39.5259V39.5008V39.4496V39.4236V39.3973V39.3438V39.289V39.2332V39.1761V39.118V39.0884V39.0587V38.9983V38.9368V38.9056V38.8742V38.8425V38.8105V38.7458V38.713V38.68V38.6132V38.5795V38.5454V38.4766V38.4068V38.3715V38.336V38.2642V38.228V38.1915V38.0433V37.9678V37.8914V37.8141V37.736V37.6965V37.6569V37.577V37.4148V37.2493V37.1654V37.1231V37.0807V36.9952V36.909V36.557V36.5123V36.4673V36.4222V36.3769V36.1942V35.4392V35.0487V34.9993V34.9499V34.8506V34.6507V34.246V34.0414V33.8355V33.6283V33.5242V33.4721V33.4199V33.2105V33.0002V32.8947V32.789V32.5771V32.3646V32.1515V31.938V31.7242V31.6707V31.6172V31.5102V31.2961V31.2426V31.1891V31.1355V31.082V31.0285V30.975V30.9215V30.868V30.8145V30.7611V30.7076V30.6542V30.6008V30.5474V30.4941V30.4407V30.3874V30.3342V30.2809V30.2277V30.1745V30.1213V30.0682V30.0152V29.9621V29.9091V29.8562V29.8032V29.7504V29.6976V29.6448V29.5921V29.5394V29.4868V29.4342V29.3817V29.3293V29.2769V29.2246V29.1723V29.1201V29.068V29.016V28.964V28.9121V28.8602V28.8085V28.7568V28.7052V28.6536V28.6022V28.5508V28.4995V28.4483V28.3972V28.3462V28.2953V28.2445V28.1937V28.1431V28.0926V28.0421V27.9918V27.9415V27.8914V27.8414V27.7915V27.7416V27.692V27.6424V27.5929V27.5435V27.4943V27.4452V27.3962V27.3473V27.2986V27.2499V27.2014V27.1531V27.1048V27.0567V27.0088V26.9609V26.9132V26.8657V26.771V26.5833V26.4904V26.3981V26.2153V26.0352V25.8578V25.6832V25.5116V25.3429V25.1774V25.0959V25.0554V25.0152V24.8563V24.7008V24.4007V24.1156V23.8464V23.7817V23.7498V23.7181V23.594V23.3591V23.1426V23.1169V23.0914V23.0415V22.9453V22.6254L23.9681 8.88843L39.3101 22.6075V40.1282V40.1506L39.3104 40.1583C39.3104 40.1585 39.3104 40.1586 39.3104 40.1588C39.3102 40.1682 39.3092 40.1879 39.3061 40.2141C39.2992 40.2716 39.2851 40.3299 39.2652 40.3741C39.2562 40.3941 39.2486 40.4053 39.2445 40.4105C39.2426 40.413 39.2415 40.4141 39.2412 40.4144L39.2409 40.4146C39.2409 40.4146 39.2406 40.4148 39.2399 40.4152C39.2392 40.4157 39.2379 40.4163 39.2361 40.4172C39.2327 40.4188 39.2259 40.4218 39.2145 40.4251C39.1922 40.4316 39.1462 40.4414 39.068 40.4414H39.0587H39.0492H39.0395H39.0296H39.0196H39.0093H38.9988H38.9882H38.9774H38.9664H38.9552H38.9438H38.9322H38.9205H38.9086H38.8965H38.8842H38.8717H38.8591H38.8462H38.8332H38.8201H38.8067H38.7932H38.7795H38.7656H38.7516H38.7374H38.723H38.7085H38.6937H38.6789H38.6638H38.6486H38.6332H38.6177H38.6019H38.5861H38.57H38.5538H38.5375H38.521H38.5043H38.4875H38.4705H38.4533H38.436H38.4186H38.401H38.3832H38.3653H38.3472H38.329H38.3107H38.2921H38.2735H38.2547H38.2357H38.2166H38.1974H38.178H38.1585H38.1388H38.119H38.099H38.0789H38.0587H38.0383H38.0178H37.9972H37.9764H37.9555H37.9345H37.9133H37.892H37.8705H37.849H37.8273H37.8054H37.7835H37.7614H37.7392H37.7168H37.6944H37.6718H37.6491H37.6262H37.6033H37.5802H37.557H37.5337H37.5103H37.4867H37.4631H37.4393H37.4154H37.3914H37.3673H37.343H37.3187H37.2942H37.2697H37.245H37.2202H37.1953H37.1703H37.1452H37.12H37.0947H37.0693H37.0438H37.0182H36.9924H36.9666H36.9407H36.9147H36.8886H36.8624H36.8361H36.8097H36.7832H36.7566H36.7299H36.7031H36.6763H36.6493H36.6223H36.5951H36.5679H36.5406H36.5132H36.4857H36.4582H36.4305H36.4028H36.375H36.3471H36.3191H36.2911H36.263H36.2348H36.2065H36.1781H36.1497H36.1212H36.0926H36.0639H36.0352H36.0064H35.9776H35.9486H35.9196H35.8905H35.8614H35.8322H35.8029H35.7736H35.7442H35.7147H35.6852H35.6556H35.626H35.5963H35.5665H35.5367H35.5068H35.4769H35.4469H35.4168H35.3867H35.3566H35.3264H35.2961H35.2658H35.2355H35.205H35.1746H35.1441H35.1136H35.083H35.0523H35.0216H34.9909H34.9602H34.9294H34.8985H34.8676H34.8367H34.8057H34.7747H34.7437H34.7126H34.6815H34.6504H34.6192H34.588H34.5568H34.5255H34.4942H34.4629H34.4315H34.4001H34.3687H34.3373H34.3058H34.2743H34.2428H34.2113H34.1797H34.1482H34.1166H34.085H34.0533H34.0217H33.99H33.9583H33.9266H33.8949H33.8632H33.8315H33.7997H33.768H33.7362H33.7044H33.6726H33.6408H33.609H33.5772H33.5454H33.5136H33.4818H33.45H33.4182H33.3863H33.3545H33.3227H33.2909H33.259H33.2272H33.1954H33.1636H33.1318H33.1H33.0682H33.0364H33.0047H32.9729H32.9412H32.9094H32.8777H32.846H32.8143H32.7826H32.7509H32.7193H32.6876H32.656H32.6244H32.5928H32.5613H32.5297H32.4982H32.4667H32.4353H32.4038H32.3724H32.341H32.3096H32.2783H32.247H32.2157H32.1845H32.1532H32.122H32.0909H32.0598H32.0287H31.9976H31.9666H31.9356H31.9047H31.8738H31.8429H31.8121H31.7813H31.7506H31.7199H31.6893H31.6587H31.6281H31.5976H31.5671H31.5367H31.5063H31.476H31.4457H31.4155H31.3853H31.3552H31.3251H31.2951H31.2652H31.2353H31.2054H31.1756H31.1459H31.1162H31.0866H31.0571H31.0276H30.9982H30.9688H30.9395H30.9103H30.8811H30.852H30.823H30.7941H30.7652H30.7363H30.7076H30.6789H30.6503H30.6218H30.5933H30.5649H30.5366H30.5084H30.4802H30.4521H30.4241H30.3962H30.3684H30.3406H30.313H30.2854H30.2579H30.2304H30.2031H30.1758H30.1487H30.1216H30.0946H30.0677H30.0409H30.0142H29.9876H29.961H29.9346H29.9083H29.882H29.8559H29.8298H29.8039H29.778H29.7523H29.7266H29.7011H29.6756H29.6503H29.625H29.5999H29.5748H29.5499H29.5251H29.5004H29.4758H29.4513H29.4269H29.4026H29.3784H29.3544H29.3305H29.3066H29.2829H29.2593H29.2359H29.2125H29.1893H29.1662H29.1432H29.1203H29.0975H29.0749H29.0524H29.03H29.0078H28.9856H28.9636H28.9417H28.92H28.8984H28.8769H28.8555H28.8343H28.8132H28.7922H28.7714H28.7507H28.7302H28.7098H28.6895H28.6693H28.6493H28.6295H28.6097H28.5902H28.5707H28.5514H28.5323H28.5133H28.4944H28.4885L28.5072 31.7508C28.5073 31.7476 28.5074 31.7442 28.5075 31.7408C28.5083 31.7155 28.5088 31.6837 28.5084 31.6463C28.5076 31.5718 28.503 31.4726 28.4891 31.3564C28.4618 31.1289 28.3952 30.8085 28.2286 30.4756C28.0579 30.1348 27.7811 29.7802 27.3486 29.5169C26.9173 29.2543 26.393 29.12 25.7857 29.12H20.8765C20.3077 29.12 19.8094 29.2707 19.4089 29.5686C19.016 29.8608 18.7926 30.2384 18.6674 30.5689C18.5438 30.8949 18.504 31.2039 18.4918 31.4185C18.4854 31.5289 18.486 31.6227 18.4884 31.6924C18.4894 31.7195 18.4906 31.7432 18.4919 31.7633L18.4763 40.4741L17.8039 40.475L14.0356 40.4798C11.2654 40.4833 8.34046 40.4867 7.6632 40.4868C7.66263 40.4831 7.66211 40.4792 7.66163 40.4753C7.66039 40.4652 7.6598 40.4572 7.65952 40.4523L7.65954 40.4518V40.432Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M24.046 1.83029L45.6967 21.5462C45.6645 21.5627 45.6308 21.5783 45.5959 21.5928C45.2054 21.7547 44.3083 21.9075 42.6623 20.7276L24.7249 4.55818L24.0745 3.97191L23.4075 4.53917L4.23311 20.846C3.51878 21.4529 2.97025 21.6971 2.58379 21.7809C2.21185 21.8616 1.94281 21.8049 1.7426 21.7161C1.70833 21.7009 1.67515 21.6844 1.64306 21.6667L24.046 1.83029Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M36.448 7.43119L36.4338 3.25684H39.0547V9.65434L36.448 7.43119Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined);

    case 'Course':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 80 80",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M5.00008 0.5H30C32.4863 0.5 34.4999 2.5136 34.5001 5.00008V30C34.5001 32.4842 32.4862 34.5001 30 34.5001H5.00008C2.51379 34.5001 0.5 32.484 0.5 30V5.00008C0.5 2.51362 2.51362 0.5 5.00008 0.5ZM28 30.5C29.3808 30.5 30.5 29.3808 30.5 28.0001V7.00008C30.5 5.61937 29.3808 4.50008 28.0001 4.50008H7.00008C5.61937 4.50008 4.50008 5.61936 4.50008 7.00008V28C4.50008 29.3808 5.61936 30.5 7.00008 30.5H28Z",
          stroke: "#0E103D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M50 0.5H74.9999C77.4841 0.5 79.5 2.51378 79.5 5.00008V30C79.5 32.484 77.4837 34.5001 74.9999 34.5001H50C47.5137 34.5001 45.4999 32.484 45.4999 30V5.00008C45.4999 2.51363 47.5137 0.5 50 0.5ZM72.9999 30.5C74.3806 30.5 75.4999 29.3808 75.4999 28.0001V7.00008C75.4999 5.61937 74.3807 4.50008 72.9999 4.50008H52C50.6192 4.50008 49.5 5.61936 49.5 7.00008V28C49.5 29.3808 50.6192 30.5 52 30.5H72.9999Z",
          stroke: "#0E103D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M50 45.5H74.9999C77.4841 45.5 79.5 47.514 79.5 50.0001V75C79.5 77.4863 77.4839 79.5001 74.9999 79.5001H50C47.5135 79.5001 45.4999 77.4863 45.4999 75V50.0001C45.4999 47.516 47.5139 45.5 50 45.5ZM72.9999 75.5C74.3807 75.5 75.4999 74.3808 75.4999 73V52.0001C75.4999 50.6194 74.3807 49.5001 72.9999 49.5001H52C50.6192 49.5001 49.5 50.6194 49.5 52.0001V73C49.5 74.3808 50.6192 75.5 52 75.5H72.9999Z",
          stroke: "#0E103D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M5.00008 45.5H30C32.4863 45.5 34.4999 47.5138 34.5001 50.0001V75C34.5001 77.4865 32.4863 79.5001 30 79.5001H5.00008C2.51363 79.5001 0.5 77.4863 0.5 75V50.0001C0.5 47.5161 2.51379 45.5 5.00008 45.5ZM28 75.5C29.3808 75.5 30.5 74.3807 30.5 73V52.0001C30.5 50.6194 29.3808 49.5001 28.0001 49.5001H7.00008C5.61937 49.5001 4.50008 50.6194 4.50008 52.0001V73C4.50008 74.3808 5.61936 75.5 7.00008 75.5H28Z",
          stroke: "#0E103D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined);

    case 'Profile':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 80 72",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M6.50874 49.1256C10.6762 45.8437 16.3285 44 22.2222 44H57.7778C63.6715 44 69.3238 45.8437 73.4913 49.1256C77.6587 52.4075 80 56.8587 80 61.5V68.5C80 70.433 79.9546 72 77.5 72C75.0454 72 75 70.433 75 68.5V61.5C75 58.7152 72.5005 54.4691 70 52.5C67.4995 50.5309 61.314 48 57.7778 48H22.2222C18.686 48 11.5005 50.5309 9 52.5C6.49951 54.4691 4.5 58.7152 4.5 61.5V68.5C4.5 70.433 4.9546 72 2.5 72C0.0454009 72 0 70.433 0 68.5V61.5C0 56.8587 2.34126 52.4075 6.50874 49.1256Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M39 3.50049C28.9927 4.00049 23 9.5 23 19.5C22 26 27.5 36 39 36C50.5 36 56 28.5005 56 19.5005C56 10.5005 49.4796 2.97689 39 3.50049ZM19.5 19.5005C19.5 7.62637 26.9927 0.500488 39 0.000488281C51.4927 0.000737488 59.5 7.62637 59.5 19.5005C59.5 32.5005 50.8741 39.0005 39 39.0005C27.1259 39.0005 19.5 31.3746 19.5 19.5005Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined);

    case 'Money':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 42 47",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M23.9167 11.0784L23.915 11.0777H23.9045L23.8932 11.077H23.8923L23.8792 11.0763L23.8722 11.0756H23.867L23.8155 11.0749H17.2067L17.1552 11.0756H17.1509L17.143 11.0763L17.1299 11.077L17.1177 11.0777H17.1081L17.1046 11.0784C16.87 11.0986 16.658 11.1855 16.5001 11.3135L16.4957 11.3171C16.3178 11.4666 16.2061 11.6729 16.2061 11.8985C16.2061 12.1249 16.3178 12.3312 16.4957 12.48L16.5001 12.4836C16.6589 12.6123 16.87 12.6992 17.1046 12.7186L17.1081 12.7194H17.1177L17.1299 12.7201L17.143 12.7208L17.1509 12.7215H17.1552L17.2067 12.7222H23.8155L23.867 12.7215H23.8722L23.8792 12.7208L23.8923 12.7201H23.8932L23.9045 12.7194H23.915L23.9167 12.7186C24.1514 12.6985 24.3625 12.613 24.5213 12.4836L24.5256 12.48C24.7036 12.3305 24.8152 12.1242 24.8152 11.8985C24.8152 11.6721 24.7036 11.4659 24.5256 11.3171L24.5213 11.3135C24.3625 11.1848 24.1514 11.0979 23.9167 11.0784ZM19.6431 18.8273C19.6431 18.4327 20.0322 18.1121 20.5111 18.1121C20.99 18.1121 21.3791 18.4327 21.3791 18.8273V20.8527C22.1764 20.8879 22.9711 20.9972 23.7283 21.1841C26.2154 21.7993 28.3055 23.2462 28.8934 25.6712C28.9868 26.0579 28.6815 26.4345 28.2121 26.5114C27.7428 26.5884 27.2857 26.3368 27.1924 25.9501C26.7492 24.123 25.1459 23.0248 23.2346 22.5526C22.6388 22.4059 22.0133 22.3168 21.38 22.2838V29.1263C22.2558 29.1306 23.1578 29.1845 24.1523 29.4339C25.2471 29.7077 26.3506 30.2022 27.1287 31.0654C27.7542 31.7605 28.1581 32.6754 28.1581 33.8772C28.1581 35.7553 26.7475 37.1648 24.7472 37.9978C23.7397 38.4168 22.5777 38.6899 21.3808 38.7956V40.8821C21.3808 41.2767 20.9918 41.5973 20.5129 41.5973C20.034 41.5973 19.6449 41.2767 19.6449 40.8821V38.8337C18.8476 38.7985 18.0529 38.6899 17.2957 38.5038C14.8095 37.8885 12.7194 36.441 12.1305 34.0166C12.0372 33.6299 12.3425 33.2533 12.8118 33.1764C13.2812 33.0995 13.7383 33.3511 13.8316 33.7378C14.2765 35.5648 15.8781 36.6631 17.7894 37.1353C18.3852 37.2812 19.0107 37.371 19.644 37.4041V30.5638C18.7682 30.5587 17.8662 30.5048 16.8717 30.2547C14.8706 29.7516 12.8668 28.5599 12.8668 25.8114C12.8668 23.9326 14.2774 22.5238 16.2785 21.6908C17.2852 21.2718 18.4472 20.9972 19.644 20.8923V18.8287L19.6431 18.8273ZM21.3791 30.5501V37.3567C22.309 37.2589 23.1979 37.0433 23.9665 36.7234C25.405 36.124 26.4204 35.1451 26.4204 33.8758C26.4204 33.0097 26.1525 32.3743 25.7382 31.9136C25.2165 31.3343 24.4358 30.9921 23.6498 30.7959C22.876 30.6019 22.1241 30.5551 21.38 30.5501H21.3791ZM19.6431 29.1378V22.3305C18.715 22.4282 17.8252 22.6439 17.0567 22.9637C15.6164 23.5631 14.6019 24.5414 14.6019 25.8114C14.6019 27.7175 15.9889 28.5441 17.3733 28.8919C18.148 29.086 18.899 29.1327 19.6431 29.1385V29.1378ZM23.1438 9.64382C23.1639 9.59638 23.1901 9.55182 23.2215 9.50941L26.8548 3.52438C25.4207 3.9046 23.6062 4.30207 22.6327 2.89691C21.7359 1.60316 20.5146 1.60245 20.5111 1.60245C20.5076 1.60245 19.2864 1.60316 18.3896 2.89691C17.4161 4.30207 15.6007 3.9046 14.1675 3.52438L17.8357 9.56763L17.8758 9.64382H23.1447H23.1438ZM16.0735 9.84795L12.0128 3.15854C11.9308 3.04857 11.8828 2.91991 11.8828 2.78191C11.8828 2.09263 12.3216 1.8346 13.0709 1.8346C13.4652 1.8346 13.9302 1.96038 14.4658 2.10341C15.3591 2.34348 16.5585 2.66476 16.8857 2.19326C18.2858 0.17357 20.505 0.172852 20.512 0.172852C20.5181 0.172852 22.7382 0.17357 24.1383 2.19326C24.4654 2.66548 25.664 2.34348 26.5582 2.10341C27.0929 1.96038 27.5596 1.8346 27.9531 1.8346C28.7024 1.8346 29.1412 2.09263 29.1412 2.78191H29.1368C29.1368 2.88901 29.108 2.99826 29.0452 3.10032L24.9496 9.84795C25.2471 9.96079 25.5166 10.1168 25.746 10.3051L25.7504 10.3087L25.7731 10.3281L25.7774 10.3317C26.2564 10.7385 26.553 11.2912 26.553 11.8985C26.553 12.5159 26.2441 13.0802 25.7504 13.4884L25.746 13.492L25.7225 13.5107L25.7181 13.5143C25.6588 13.5617 25.5951 13.607 25.5314 13.6501C30.202 16.1945 47.3731 26.7113 38.5084 39.6013C36.7872 42.1033 34.172 43.7377 31.0071 44.7167C27.9199 45.6733 24.3119 46.0004 20.512 45.9127C16.7121 46.0004 13.1032 45.674 10.0169 44.7167C6.85201 43.7377 4.23674 42.1033 2.51561 39.6013C-6.34824 26.7113 10.8203 16.1945 15.4908 13.6501C15.4158 13.6005 15.3442 13.5481 15.2762 13.492L15.2718 13.4884L15.2492 13.469L15.2448 13.4654C14.7659 13.0586 14.4693 12.5044 14.4693 11.8985C14.4693 11.2797 14.7781 10.7169 15.2718 10.3087L15.2762 10.3051L15.2998 10.2864L15.3041 10.2828C15.5274 10.1038 15.7883 9.95576 16.0735 9.84795ZM23.3174 14.1525H17.7065C17.635 14.2187 17.5495 14.2726 17.4536 14.3121C16.3169 14.8713 -5.09469 25.6418 4.01953 38.8962C5.52257 41.0827 7.82904 42.5159 10.6266 43.3819C13.4949 44.2703 16.8909 44.5729 20.4876 44.4874H20.5347C24.1322 44.5729 27.5274 44.2703 30.3956 43.3819C33.1932 42.5166 35.4997 41.0827 37.0027 38.8962C46.3516 25.3025 23.5835 14.3193 23.519 14.2877C23.4422 14.2503 23.3741 14.2043 23.3174 14.1525Z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined);

    case 'MoneyList':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12.2286 3.86138V3.86217C12.3143 3.68129 12.3643 3.49243 12.3643 3.29883V2.48633C12.3643 1.14062 10.1815 0.0488281 7.48926 0.0488281C4.79706 0.0488281 2.61426 1.14062 2.61426 2.48633C2.61426 2.41968 2.62378 2.3546 2.63409 2.28955C1.6272 2.73549 0.989258 3.38612 0.989258 4.11133V4.92383C0.989258 5.67763 1.6748 6.35126 2.74995 6.79796C2.66425 6.97889 2.61426 7.16772 2.61426 7.36133V8.17383C2.61426 8.45947 2.71742 8.73164 2.89833 8.98633C2.71742 9.24102 2.61426 9.51318 2.61426 9.79883V10.6113C2.61426 11.957 4.79706 13.0488 7.48926 13.0488C10.1815 13.0488 12.3643 11.957 12.3643 10.6113V9.79883C12.3643 9.50841 12.2571 9.2315 12.0715 8.97363C12.0699 8.97521 12.0683 8.97759 12.0667 8.97919C12.2032 8.78559 12.3103 8.58406 12.3444 8.37061C13.3513 7.92388 13.9893 7.27403 13.9893 6.54883V5.73633C13.9893 4.98256 13.3037 4.30811 12.2286 3.86138ZM7.48926 0.455078C10.1227 0.455078 11.958 1.52545 11.958 2.48633C11.958 3.44642 10.1227 4.51758 7.48926 4.51758C4.85577 4.51758 3.02051 3.44642 3.02051 2.48633C3.02051 1.52545 4.85577 0.455078 7.48926 0.455078ZM1.39551 4.11133C1.39551 3.63683 1.8454 3.13775 2.61426 2.75214V3.29883C2.61426 4.64453 4.79706 5.73633 7.48926 5.73633C7.89155 5.73633 8.28033 5.70934 8.65405 5.66333C7.90899 5.94976 6.9624 6.14258 5.86426 6.14258C3.23077 6.14258 1.39551 5.07142 1.39551 4.11133ZM11.958 9.79883C11.958 10.7589 10.1227 11.8301 7.48926 11.8301C4.85577 11.8301 3.02051 10.7589 3.02051 9.79883C3.02051 9.63935 3.08876 9.47748 3.18476 9.31719C3.18397 9.31641 3.18237 9.31481 3.18159 9.31323C3.99965 10.0853 5.62147 10.6113 7.48926 10.6113C9.35943 10.6113 10.9733 10.0813 11.7898 9.30767C11.789 9.30846 11.789 9.30846 11.7882 9.30925C11.8882 9.47192 11.958 9.63618 11.958 9.79883ZM10.2807 8.91333C9.53478 9.20057 8.58819 9.39258 7.48926 9.39258C4.85577 9.39258 3.02051 8.3214 3.02051 7.36133C3.02051 7.22325 3.06812 7.08361 3.14033 6.94556C3.53865 7.07964 3.979 7.18519 4.44954 7.2558C5.05572 8.25713 6.91401 8.98633 9.11426 8.98633C9.51812 8.98633 9.9085 8.95936 10.2838 8.91254C10.283 8.91254 10.2822 8.91333 10.2807 8.91333ZM9.11426 7.76758C8.07167 7.76758 7.16235 7.59619 6.43395 7.33355C8.72466 7.19865 10.5337 6.27905 10.7194 5.12061C11.2724 4.87543 11.7152 4.56993 12.0001 4.22241C11.9993 4.22241 11.9993 4.22241 11.9993 4.22241C12.9832 4.62231 13.583 5.1936 13.583 5.73633C13.583 6.6964 11.7477 7.76758 9.11426 7.76758ZM8.35731 3.07826C8.35731 2.99257 8.28906 2.9267 8.15261 2.88306C8.01614 2.83862 7.71224 2.78149 7.24172 2.71324C6.81882 2.65373 6.48793 2.59421 6.24989 2.53551C6.01185 2.47681 5.81825 2.39426 5.66987 2.28953C5.52148 2.18319 5.44691 2.05941 5.44691 1.91976C5.44691 1.73568 5.58021 1.56904 5.84524 1.42147C6.11027 1.27469 6.52761 1.18501 7.09733 1.1517V0.861328H7.86699V1.15175C8.7271 1.19461 9.28412 1.39296 9.53721 1.75003L8.47716 1.92776C8.27007 1.68338 7.95106 1.56117 7.51787 1.56117C7.30045 1.56117 7.12589 1.58816 6.99498 1.64369C6.86325 1.69764 6.79741 1.76429 6.79741 1.84207C6.79741 1.92141 6.86089 1.98171 6.98784 2.02457C7.11401 2.06662 7.38617 2.11821 7.80194 2.18169C8.25897 2.24994 8.61762 2.31421 8.87708 2.37529C9.13734 2.4356 9.34442 2.51972 9.49994 2.62681C9.65467 2.73394 9.73239 2.85929 9.73239 3.00211C9.73239 3.22271 9.57213 3.40519 9.25238 3.55197C8.93261 3.69876 8.47083 3.78526 7.86699 3.81144V4.1875H7.09733V3.81299C6.09044 3.77094 5.46756 3.53052 5.22716 3.0941L6.41734 2.96715C6.52764 3.2417 6.89263 3.37896 7.51231 3.37896C7.80189 3.37896 8.01616 3.34961 8.15264 3.29088C8.28911 3.23215 8.35731 3.16157 8.35731 3.07826Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined);

    case 'Settings':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 45 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M42.6267 17.1599H38.5102C37.8486 17.1599 37.3035 16.7957 37.0501 16.1846C36.7967 15.5735 36.9254 14.9298 37.3923 14.4621L40.3028 11.5524C40.7306 11.1246 40.9661 10.555 40.9661 9.95046C40.9661 9.34505 40.7306 8.77631 40.3028 8.34772L36.593 4.63787C35.7374 3.78231 34.2455 3.78068 33.3883 4.63787L30.4786 7.54757C30.0109 8.01446 29.3655 8.14483 28.7561 7.89061C28.145 7.6372 27.7807 7.09209 27.7807 6.43046V2.31401C27.7807 1.0649 26.7647 0.0488281 25.5155 0.0488281H20.2681C19.019 0.0488281 18.003 1.0649 18.003 2.31401V6.43046C18.003 7.09209 17.6387 7.6372 17.0276 7.89061C16.4181 8.14564 15.7728 8.01446 15.3051 7.54757L12.3954 4.63787C11.5382 3.78068 10.0463 3.78231 9.19073 4.63787L5.48088 8.34772C5.0531 8.7755 4.81762 9.34505 4.81762 9.95046C4.81762 10.555 5.0531 11.1238 5.48088 11.5524L8.3914 14.4621C8.85829 14.9298 8.98622 15.5735 8.73362 16.1846C8.48103 16.7957 7.9351 17.1599 7.27348 17.1599H3.15703C1.90792 17.1599 0.891846 18.176 0.891846 19.4251V24.6717C0.891846 25.9216 1.90792 26.9377 3.15703 26.9377H7.27348C7.9351 26.9377 8.48022 27.3019 8.73362 27.913C8.98703 28.5242 8.85829 29.1679 8.3914 29.6356L5.48088 32.5453C5.0531 32.973 4.81762 33.5426 4.81762 34.1472C4.81762 34.7526 5.0531 35.3213 5.48088 35.7499L9.19073 39.4598C10.0471 40.3162 11.5382 40.3178 12.3954 39.4598L15.3051 36.5493C15.7728 36.0824 16.4157 35.9536 17.0276 36.2071C17.6387 36.4605 18.003 37.0056 18.003 37.6672V41.7836C18.003 43.0328 19.019 44.0488 20.2681 44.0488H25.5147C26.7638 44.0488 27.7799 43.0328 27.7799 41.7836V37.6672C27.7799 37.0056 28.1441 36.4605 28.7553 36.2071C29.3672 35.9528 30.0101 36.0824 30.4778 36.5493L33.3875 39.4598C34.2447 40.317 35.7366 40.3153 36.5921 39.4598L40.302 35.7499C40.7298 35.3222 40.9653 34.7526 40.9653 34.1472C40.9653 33.5426 40.7298 32.9739 40.302 32.5453L37.3915 29.6356C36.9246 29.1679 36.7967 28.5242 37.0493 27.913C37.3018 27.3019 37.8486 26.9377 38.5102 26.9377H42.6267C43.8758 26.9377 44.8918 25.9216 44.8918 24.6725V19.4251C44.8918 18.176 43.8758 17.1599 42.6267 17.1599ZM43.2622 24.6725C43.2622 25.0229 42.977 25.3081 42.6267 25.3081H38.5102C37.187 25.3081 36.0503 26.0675 35.5443 27.2897C35.0375 28.5119 35.3039 29.8531 36.2401 30.7885L39.1507 33.6982C39.3992 33.9468 39.3992 34.3501 39.1507 34.5978L35.4408 38.3076C35.1931 38.5553 34.7898 38.557 34.5413 38.3076L31.6315 35.3971C30.6953 34.4609 29.355 34.1961 28.1327 34.7013C26.9105 35.2073 26.1511 36.3439 26.1511 37.6672V41.7836C26.1511 42.134 25.8659 42.4192 25.5155 42.4192H20.2681C19.9178 42.4192 19.6326 42.134 19.6326 41.7836V37.6672C19.6326 36.3439 18.8732 35.2073 17.651 34.7013C17.2411 34.531 16.819 34.4479 16.4018 34.4479C15.5756 34.4479 14.7747 34.7738 14.1521 35.3963L11.2424 38.3068C10.9931 38.5562 10.5898 38.5545 10.3429 38.3068L6.63303 34.597C6.38451 34.3485 6.38451 33.9451 6.63303 33.6974L9.54355 30.7877C10.479 29.8523 10.7462 28.5111 10.2394 27.2889C9.7334 26.0675 8.59673 25.3081 7.27348 25.3081H3.15703C2.80666 25.3081 2.52148 25.0229 2.52148 24.6725V19.4251C2.52148 19.0748 2.80666 18.7896 3.15703 18.7896H7.27348C8.59673 18.7896 9.7334 18.0302 10.2394 16.8079C10.7462 15.5857 10.4798 14.2445 9.54355 13.3091L6.63303 10.3994C6.38451 10.1509 6.38451 9.74757 6.63303 9.49986L10.3429 5.79001C10.5906 5.54149 10.9939 5.54149 11.2424 5.79001L14.1521 8.69972C15.0867 9.63431 16.4271 9.90238 17.651 9.39557C18.8732 8.89038 19.6326 7.75372 19.6326 6.43046V2.31401C19.6326 1.96364 19.9178 1.67846 20.2681 1.67846H25.5147C25.8659 1.67846 26.1511 1.96364 26.1511 2.31401V6.43046C26.1511 7.75372 26.9105 8.89038 28.1327 9.39638C29.3566 9.9032 30.6961 9.63594 31.6315 8.70053L34.5413 5.79083C34.7906 5.54231 35.1939 5.54231 35.4408 5.79083L39.1507 9.50068C39.3992 9.7492 39.3992 10.1525 39.1507 10.4002L36.2401 13.3099C35.3047 14.2453 35.0375 15.5865 35.5443 16.8088C36.0503 18.031 37.187 18.7904 38.5102 18.7904H42.6267C42.977 18.7896 43.2622 19.0748 43.2622 19.4251V24.6725Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M22.8919 14.7158C18.848 14.7158 15.5586 18.0052 15.5586 22.0492C15.5586 26.0931 18.848 29.3825 22.8919 29.3825C26.9359 29.3825 30.2253 26.0931 30.2253 22.0492C30.2253 18.0052 26.9359 14.7158 22.8919 14.7158ZM22.8919 27.7529C19.7476 27.7529 17.1882 25.1935 17.1882 22.0492C17.1882 18.9048 19.7476 16.3454 22.8919 16.3454C26.0363 16.3454 28.5956 18.9048 28.5956 22.0492C28.5956 25.1935 26.0363 27.7529 22.8919 27.7529Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined);

    case 'Telegram':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 65 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M60.0194 1.5683L60.0195 1.56837L60.0305 1.56481C61.0438 1.23767 61.8424 1.10723 62.4448 1.11615C63.0449 1.12503 63.3864 1.26964 63.5789 1.42596C63.92 1.70292 64.2348 2.44706 63.7605 4.18461L63.7604 4.1846L63.758 4.19395L54.2231 40.4995L54.2212 40.5068L54.2194 40.5141C53.8882 41.8571 53.3699 42.4885 52.8122 42.7333C52.2406 42.9841 51.2861 42.9826 49.7236 42.247L35.2296 33.5194L34.6482 33.1693L34.1082 33.5802L25.6391 40.0242C25.0362 40.4343 24.2291 40.4358 23.6895 39.8182L24.5696 31.186L54.88 9.11724C54.8813 9.11627 54.8827 9.11531 54.884 9.11434C55.1361 8.93416 55.3597 8.74363 55.5348 8.54003C55.699 8.34913 55.8934 8.06299 55.9415 7.69528C55.9993 7.25397 55.8261 6.84923 55.5135 6.58163C55.2511 6.35706 54.9449 6.27162 54.7251 6.2349C54.2721 6.15924 53.7427 6.2189 53.2381 6.34627C52.7225 6.47643 52.1572 6.69634 51.6002 7.01147L16.2374 24.5858L1.8701 20.9143C1.35092 20.7244 1.11889 20.537 1.03296 20.4342C1.01747 20.4157 1.00831 20.4019 1.0031 20.3929C1.01829 20.3477 1.08881 20.2059 1.33776 20.0071C1.58842 19.8069 1.96154 19.5977 2.45421 19.4189L60.0194 1.5683ZM0.99692 20.3804C0.996944 20.3804 0.997128 20.3808 0.997406 20.3817L0.99692 20.3804Z",
          stroke: "white",
          "stroke-width": "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined);

    case 'Out':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 25 26",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M11.6358 18.2429C11.4403 18.4244 11.4403 18.7178 11.6358 18.8994C11.7333 18.9899 11.8613 19.0354 11.9893 19.0354C12.1173 19.0354 12.2453 18.9899 12.3428 18.8994L18.3423 13.3284C18.3888 13.2857 18.4253 13.2342 18.4508 13.1771C18.5013 13.0638 18.5013 12.9361 18.4508 12.8223C18.4253 12.7652 18.3883 12.7137 18.3423 12.6705L12.3428 7.10002C12.1473 6.91848 11.8313 6.91848 11.6358 7.10002C11.4403 7.28155 11.4403 7.57498 11.6358 7.75652L16.7823 12.5354H1.48926C1.21276 12.5354 0.989258 12.7429 0.989258 12.9997C0.989258 13.2564 1.21276 13.464 1.48926 13.464H16.7823L11.6358 18.2429Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M24.4893 0H5.98926C5.71276 0 5.48926 0.207536 5.48926 0.464286V10.2143C5.48926 10.471 5.71276 10.6786 5.98926 10.6786C6.26576 10.6786 6.48926 10.471 6.48926 10.2143V0.928571H23.9893V25.0714H6.48926V15.7857C6.48926 15.529 6.26576 15.3214 5.98926 15.3214C5.71276 15.3214 5.48926 15.529 5.48926 15.7857V25.5357C5.48926 25.7925 5.71276 26 5.98926 26H24.4893C24.7658 26 24.9893 25.7925 24.9893 25.5357V0.464286C24.9893 0.207536 24.7658 0 24.4893 0Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined);

    case 'HomeOfficeSvg':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "80",
        height: "70",
        viewBox: "0 0 80 70",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12.5004 67.7247H11.0004C12.5004 67.7247 12.5004 67.7245 12.5004 67.7243V67.7232V67.719V67.712V67.7074V67.7022V67.6963V67.6897V67.6744V67.6658V67.6564V67.6358V67.6245V67.6125V67.5865V67.558V67.5427V67.5268V67.5103V67.4931V67.4753V67.4568V67.4378V67.418V67.3977V67.3767V67.3552V67.333V67.3102V67.2867V67.2627V67.2381V67.2128V67.187V67.1605V67.1335V67.1058V67.0776V67.0488V67.0194V66.9894V66.9589V66.9278V66.896V66.8309V66.7975V66.7636V66.6939V66.6583V66.6221V66.5854V66.5481V66.5103V66.4719V66.433V66.3935V66.3536V66.3131V66.272V66.2305V66.1458V66.1027V66.0591V66.015V65.9704V65.9252V65.8796V65.7868V65.7397V65.6921V65.644V65.5954V65.5463V65.4968V65.4467V65.3962V65.2938V65.2419V65.1895V65.1367V65.0834V65.0297V64.9755V64.8658V64.8103V64.7543V64.6411V64.5261V64.4094V64.291V64.171V64.1104V64.0494V63.9879V63.9261V63.6748V63.6109V63.5467V63.4172V63.2862V63.1537V63.0197V62.8843V62.816V62.7474V62.6785V62.6092V62.4696V62.3286V62.1863V62.1147V62.0427V61.9704V61.8978V61.7517V61.4557V61.3809V61.3059V61.2305V61.1549V60.5397V60.3832V60.2256V60.1465V60.067V59.9874V59.9075V59.2596V59.0954V59.013V58.9303V58.7644V58.6811V58.5976V57.9229V57.5811V57.4092V57.2367V57.1502V57.0636V56.8899V56.5407V56.1894V55.8361V55.6588V55.57V55.4811V55.1245V54.9456V54.7665V54.587V54.4971V54.4072V54.0468V53.8663V53.776V53.6856V53.3237V52.9612V52.8705V52.7798V52.5984V52.5076V52.4169V52.2354V52.1446V52.0539V51.9631V51.8724V51.7817V51.6909V51.6002V51.5096V51.4189V51.3283V51.2377V51.1471V51.0566V50.966V50.8756V50.7852V50.6948V50.6044V50.5142V50.4239V50.3338V50.2436V50.1536V50.0636V49.9737V49.8838V49.794V49.7043V49.6147V49.5251V49.4357V49.3463V49.257V49.1678V49.0787V48.9897V48.9007V48.8119V48.7232V48.6346V48.5461V48.4578V48.3695V48.2814V48.1934V48.1055V48.0177V47.9301V47.8426V47.7552V47.668V47.5809V47.494V47.4072V47.3205V47.234V47.1477V47.0615V46.9755V46.8896V46.804V46.7184V46.6331V46.5479V46.4629V46.3781V46.2935V46.209V46.1248V46.0407V45.9568V45.8731V45.7897V45.7064V45.6233V45.5405V45.4578V45.3754V45.2931V45.2111V45.1294V45.0478V44.9665V44.8854V44.8045V44.7239V44.5633V44.2452V44.0876V43.9311V43.6213V43.3159V43.0151V42.7191V42.4281V42.1422V41.8616V41.5865V41.3171V41.2507V41.1846V41.0535V40.924V40.796V40.5447V40.0614V39.9447V39.887V39.8297V39.605V39.177V39.0745V39.024V38.974V38.7787V38.5912V38.5004V38.4558V38.4117V38.0772V37.4459L40.4829 13.9821L66.811 37.4191V67.2095V67.2433L66.8117 67.258C66.8117 67.2602 66.8116 67.263 66.8115 67.2663C66.811 67.2873 66.8091 67.3267 66.8029 67.3776C66.7897 67.4875 66.762 67.6065 66.7177 67.7044C66.6765 67.7955 66.6373 67.834 66.6085 67.8539C66.589 67.8674 66.4866 67.936 66.1957 67.936H66.1798H66.1636H66.1471H66.1303H66.1131H66.0956H66.0779H66.0597H66.0413H66.0226H66.0035H65.9841H65.9644H65.9444H65.9241H65.9035H65.8826H65.8613H65.8398H65.818H65.7958H65.7734H65.7507H65.7276H65.7043H65.6807H65.6568H65.6326H65.6081H65.5833H65.5582H65.5329H65.5073H65.4813H65.4551H65.4287H65.4019H65.3749H65.3476H65.32H65.2921H65.264H65.2356H65.2069H65.178H65.1488H65.1193H65.0896H65.0596H65.0294H64.9989H64.9681H64.9371H64.9058H64.8743H64.8425H64.8105H64.7782H64.7457H64.7129H64.6799H64.6466H64.6131H64.5794H64.5454H64.5112H64.4767H64.442H64.4071H64.3719H64.3366H64.3009H64.2651H64.229H64.1927H64.1562H64.1195H64.0825H64.0453H64.0079H63.9703H63.9325H63.8945H63.8562H63.8177H63.7791H63.7402H63.7011H63.6618H63.6223H63.5826H63.5427H63.5026H63.4623H63.4218H63.3811H63.3402H63.2991H63.2578H63.2164H63.1747H63.1329H63.0909H63.0487H63.0063H62.9637H62.9209H62.878H62.8349H62.7916H62.7482H62.7045H62.6607H62.6168H62.5726H62.5283H62.4838H62.4392H62.3944H62.3494H62.3043H62.259H62.2136H62.168H62.1222H62.0763H62.0303H61.9841H61.9377H61.8912H61.8446H61.7978H61.7508H61.7037H61.6565H61.6092H61.5617H61.514H61.4663H61.4183H61.3703H61.3221H61.2738H61.2254H61.1769H61.1282H61.0794H61.0305H60.9814H60.9323H60.883H60.8336H60.7841H60.7344H60.6847H60.6348H60.5849H60.5348H60.4846H60.4343H60.384H60.3335H60.2829H60.2322H60.1814H60.1305H60.0795H60.0285H59.9773H59.926H59.8747H59.8232H59.7717H59.7201H59.6684H59.6166H59.5647H59.5128H59.4608H59.4087H59.3565H59.3043H59.2519H59.1995H59.1471H59.0945H59.0419H58.9893H58.9365H58.8837H58.8309H58.7779H58.725H58.6719H58.6188H58.5657H58.5125H58.4592H58.4059H58.3526H58.2992H58.2457H58.1922H58.1387H58.0851H58.0315H57.9778H57.9241H57.8704H57.8166H57.7628H57.709H57.6551H57.6012H57.5473H57.4933H57.4393H57.3853H57.3313H57.2773H57.2232H57.1691H57.115H57.0609H57.0067H56.9526H56.8984H56.8443H56.7901H56.7359H56.6817H56.6275H56.5733H56.5191H56.4649H56.4107H56.3565H56.3023H56.2482H56.194H56.1398H56.0856H56.0315H55.9773H55.9232H55.8691H55.815H55.7609H55.7069H55.6529H55.5988H55.5449H55.4909H55.437H55.383H55.3292H55.2753H55.2215H55.1677H55.114H55.0602H55.0066H54.9529H54.8993H54.8458H54.7923H54.7388H54.6854H54.632H54.5787H54.5254H54.4722H54.419H54.3659H54.3129H54.2599H54.2069H54.154H54.1012H54.0485H53.9958H53.9431H53.8906H53.8381H53.7857H53.7333H53.681H53.6288H53.5767H53.5246H53.4727H53.4208H53.369H53.3172H53.2656H53.214H53.1626H53.1112H53.0599H53.0087H52.9576H52.9066H52.8556H52.8048H52.7541H52.7034H52.6529H52.6025H52.5522H52.502H52.4519H52.4018H52.352H52.3022H52.2525H52.2029H52.1535H52.1042H52.055H52.0059H51.9569H51.9081H51.8593H51.8108H51.7623H51.7139H51.6657H51.6176H51.5697H51.5219H51.4742H51.4266H51.3792H51.3319H51.2848H51.2378H51.191H51.1443H51.0977H51.0513H51.005H50.9589H50.913H50.8672H50.8215H50.776H50.7307H50.6855H50.6405H50.5956H50.5509H50.5064H50.462H50.4178H50.3738H50.3299H50.2862H50.2427H50.1993H50.1562H50.1132H50.0704H50.0277H49.9853H49.943H49.9009H49.859H49.8173H49.7757H49.7344H49.6932H49.6523H49.6115H49.571H49.5306H49.4904H49.4504H49.4107H49.3711H49.3317H49.2925H49.2536H49.2148H49.1763H49.138H49.0998H49.0619H49.0242H48.9868H48.9495H48.9125H48.8756H48.839H48.8027H48.7665H48.7306H48.6949H48.6594H48.6242H48.5892H48.5544H48.5199H48.4855H48.4515H48.4177H48.3841H48.3507H48.3176H48.2847H48.2521H48.2198H48.1876H48.1558H48.1242H48.0928H48.0617H48.0308H48.0002H47.974L48.0062 53.0024C48.0065 52.9963 48.0067 52.9899 48.0069 52.9832C48.0082 52.9429 48.0091 52.8918 48.0084 52.8312C48.007 52.7106 47.9996 52.5493 47.9768 52.3601C47.932 51.9888 47.8231 51.4684 47.552 50.9293C47.2749 50.3782 46.8269 49.8078 46.128 49.3842C45.4313 48.9618 44.5773 48.7413 43.5744 48.7413H35.2134C34.2831 48.7413 33.4796 48.9862 32.8378 49.4614C32.207 49.9284 31.8458 50.5337 31.6418 51.0696C31.4405 51.5985 31.375 52.1019 31.3548 52.4537C31.3444 52.6342 31.3453 52.7873 31.3493 52.9006C31.3509 52.9475 31.3531 52.988 31.3553 53.0215L31.3285 67.9912L29.9807 67.993L23.5629 68.0011C18.7959 68.007 13.7595 68.013 12.675 68.013C12.6158 68.013 12.5759 68.0082 12.5511 68.0034C12.5308 67.9574 12.514 67.8911 12.5054 67.821C12.5019 67.7925 12.5006 67.7708 12.5002 67.7597L12.5004 67.7544V67.7247ZM12.5173 67.9938C12.5174 67.9937 12.5197 67.9945 12.5238 67.9966C12.5192 67.995 12.5171 67.994 12.5173 67.9938Z",
          fill: "#0E103D",
          stroke: "white",
          "stroke-width": "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M40.6169 1.47539L78.439 35.7621C78.2126 35.9698 77.9168 36.1809 77.5456 36.334C76.6256 36.7136 74.8679 36.8815 71.936 34.7804L41.3619 7.34415L40.6482 6.70376L39.9164 7.32331L7.26006 34.9706C7.25992 34.9708 7.25978 34.9709 7.25965 34.971C4.75227 37.0915 3.20093 36.8994 2.38001 36.5373C2.02867 36.3823 1.73774 36.1648 1.50877 35.947L40.6169 1.47539ZM0.962817 35.2786C0.962395 35.2778 0.962534 35.2781 0.963231 35.2793L0.962817 35.2786Z",
          fill: "#0E103D",
          stroke: "white",
          "stroke-width": "2.2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M61.031 12.0932L61.0034 4H66.8757V17.0554L61.031 12.0932Z",
          fill: "#0E103D",
          stroke: "white",
          "stroke-width": "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined);

    case 'Users':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 22 21",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M19.9309 16.354L16.5104 14.8725C16.4299 14.8322 16.3406 14.7339 16.264 14.6026L18.5477 14.6009C18.5876 14.6047 19.5292 14.6908 20.2841 14.3664C20.57 14.2432 20.7829 13.9999 20.8682 13.6989C20.9543 13.3951 20.8997 13.0735 20.7192 12.8159C20.0664 11.887 18.5429 9.45972 18.4953 6.99782C18.4942 6.95547 18.3563 2.76877 14.2218 2.73482C13.6131 2.73972 13.0503 2.84297 12.5382 3.03337C12.4266 2.74882 12.2621 2.45202 12.0175 2.17272C11.2989 1.35232 10.1323 0.936523 8.55 0.936523C6.96765 0.936523 5.8011 1.35232 5.0822 2.17202C4.2534 3.11737 4.3304 4.26362 4.35 4.45577V6.31742C4.126 6.57257 4 6.89912 4 7.23617V8.63617C4 9.06212 4.19355 9.45937 4.52395 9.72432C4.84455 10.9938 5.5155 11.9503 5.75 12.2573V13.4154C5.75 13.7542 5.5652 14.065 5.26805 14.2274L2.1457 15.9305C1.13035 16.4849 0.5 17.5468 0.5 18.7032V20.1865H15.9H16.6H21.5V18.8926C21.5 17.8104 20.8987 16.8381 19.9309 16.354ZM15.9 19.4865H1.2V18.7032C1.2 17.8034 1.6907 16.9763 2.48065 16.5458L5.603 14.8427C6.12555 14.5575 6.45 14.0104 6.45 13.4158V12.0091L6.36845 11.9118C6.36005 11.9017 5.5022 10.8639 5.17495 9.43907L5.1431 9.30047L5.02375 9.22347C4.8211 9.09257 4.7 8.87312 4.7 8.63652V7.23652C4.7 7.04017 4.7833 6.85712 4.9345 6.72027L5.05 6.61632V4.43652L5.04685 4.39067C5.0458 4.38122 4.9268 3.41102 5.6086 2.63332C6.18855 1.97182 7.17835 1.63652 8.55 1.63652C9.91675 1.63652 10.9044 1.96937 11.4851 2.62632C11.7738 2.95252 11.9191 3.31687 11.9915 3.62977C11.9971 3.65427 12.0024 3.67842 12.0073 3.70257C12.0122 3.72742 12.0174 3.75227 12.0213 3.77607C12.0258 3.80337 12.0297 3.82927 12.0335 3.85517C12.0363 3.87372 12.0391 3.89262 12.0412 3.91047C12.0465 3.95387 12.0507 3.99587 12.0535 4.03472C12.0538 4.03787 12.0539 4.04067 12.0539 4.04382C12.0563 4.08162 12.0581 4.11732 12.0591 4.14987C12.0591 4.15617 12.0591 4.16142 12.0595 4.16772C12.0602 4.19677 12.0602 4.22442 12.0598 4.24857C12.0598 4.25207 12.0598 4.25557 12.0598 4.25907C12.0584 4.34132 12.0528 4.39032 12.0528 4.39137L12.05 6.61632L12.1655 6.72062C12.3167 6.85712 12.4 7.04017 12.4 7.23652V8.63652C12.4 8.94207 12.1998 9.20947 11.9023 9.30117L11.728 9.35472L11.672 9.52797C11.4378 10.2563 11.1043 10.929 10.6801 11.5275C10.5761 11.6749 10.475 11.8054 10.3871 11.9052L10.3 12.0046V13.4483C10.3 13.5369 10.3087 13.6237 10.3224 13.7091C10.3252 13.7273 10.3301 13.7448 10.3336 13.763C10.3472 13.8333 10.3654 13.9023 10.3878 13.9695C10.3931 13.9852 10.3987 14.0003 10.4046 14.016C10.4319 14.0892 10.4638 14.1599 10.5009 14.2278C10.5051 14.2355 10.5089 14.2435 10.5131 14.2512C10.5639 14.3408 10.6223 14.4259 10.6896 14.5043L10.7694 14.6026H10.783C10.903 14.7209 11.0409 14.8238 11.1978 14.9022L14.5413 16.5738C15.3795 16.9924 15.9 17.8345 15.9 18.7715V19.4865ZM20.8 19.4865H16.6V18.7715C16.6 17.5678 15.9311 16.486 14.8549 15.9477L12.4546 14.7472C12.5137 14.6121 12.5215 14.4574 12.4697 14.3083C12.3839 14.0615 12.1599 13.9023 11.8991 13.9023H11.1232C11.1071 13.8739 11.0966 13.8428 11.0836 13.8127C11.0661 13.7724 11.0455 13.7329 11.0339 13.6905C11.0126 13.6128 11 13.5316 11 13.4483V12.265C11.0801 12.167 11.1645 12.0553 11.2516 11.9321C11.6853 11.3196 12.0329 10.6378 12.2856 9.90247C12.7794 9.67602 13.1 9.18777 13.1 8.63652V7.23652C13.1 6.89947 12.974 6.57292 12.75 6.31777V4.45612C12.7591 4.36862 12.7787 4.08197 12.7206 3.70747C13.1714 3.53037 13.6764 3.43902 14.2221 3.43447C17.6665 3.46282 17.7921 6.86832 17.7956 7.01182C17.847 9.66587 19.4567 12.2363 20.1465 13.218C20.2057 13.302 20.2235 13.4077 20.1952 13.5075C20.1791 13.5649 20.1329 13.6692 20.0079 13.7227C19.4199 13.9758 18.6223 13.904 18.5814 13.9023H16.1723C15.9472 13.9023 15.7421 14.0167 15.6235 14.2082C15.5052 14.3989 15.494 14.632 15.5934 14.8322C15.7029 15.0531 15.8965 15.3481 16.2146 15.5067L19.6261 16.9844C20.3503 17.3501 20.8 18.0802 20.8 18.8926V19.4865Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined);

    case 'Clock':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 23 20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M11.6864 0C5.621 0 0.686401 4.486 0.686401 10C0.686401 15.514 5.621 20 11.6864 20C17.7518 20 22.6864 15.514 22.6864 10C22.6864 4.486 17.7518 0 11.6864 0ZM11.6864 19.3333C6.02543 19.3333 1.41973 15.1463 1.41973 10C1.41973 4.85367 6.02543 0.666667 11.6864 0.666667C17.3474 0.666667 21.9531 4.85367 21.9531 10C21.9531 15.1463 17.3474 19.3333 11.6864 19.3333Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M11.6865 2C11.4841 2 11.3198 2.149 11.3198 2.33333V10H5.81979C5.61739 10 5.45312 10.149 5.45312 10.3333C5.45312 10.5177 5.61739 10.6667 5.81979 10.6667H11.6865C11.8889 10.6667 12.0531 10.5177 12.0531 10.3333V2.33333C12.0531 2.149 11.8889 2 11.6865 2Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined);

    case 'Star':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 23 21",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M22.3438 9.51328C22.7768 9.11235 22.9297 8.52394 22.7429 7.97696C22.5557 7.42998 22.068 7.03951 21.4689 6.95665L16.142 6.22134C15.9152 6.18995 15.7191 6.05478 15.6178 5.85934L13.2363 1.27381C12.9689 0.758631 12.4262 0.438477 11.8213 0.438477C11.2169 0.438477 10.6742 0.758631 10.4068 1.27381L8.02484 5.85934C7.92352 6.05478 7.72705 6.18995 7.50017 6.22134L2.1733 6.95707C1.57462 7.03951 1.08696 7.42998 0.899734 7.97696C0.71295 8.52394 0.865813 9.11235 1.29885 9.51328L5.15304 13.0823C5.31736 13.2346 5.39269 13.4539 5.35392 13.6682L4.44423 18.7082C4.34202 19.2744 4.58211 19.8356 5.07154 20.1738C5.56053 20.5124 6.19709 20.5563 6.73321 20.288L11.4971 17.9084C11.7002 17.8072 11.9425 17.8072 12.1455 17.9084L16.9099 20.288C17.1425 20.4044 17.3944 20.4617 17.6451 20.4617C17.9707 20.4617 18.2949 20.365 18.5715 20.1738C19.061 19.8356 19.3011 19.2744 19.1989 18.7082L18.2887 13.6686C18.25 13.4539 18.3253 13.235 18.4896 13.0827L22.3438 9.51328ZM17.4209 13.81L18.3306 18.8496C18.3764 19.1033 18.2729 19.3456 18.0535 19.4971C17.8337 19.6481 17.5601 19.6666 17.32 19.5477L12.5557 17.1677C12.3262 17.0534 12.0733 16.9957 11.8213 16.9957C11.5693 16.9957 11.3169 17.0534 11.087 17.1681L6.32352 19.5477C6.08255 19.6666 5.80899 19.6481 5.5896 19.4971C5.37022 19.3456 5.26714 19.1037 5.31251 18.8496L6.2222 13.81C6.30987 13.3237 6.14026 12.8274 5.76846 12.4834L1.91383 8.91398C1.71956 8.73403 1.65348 8.48042 1.73762 8.23559C1.82132 7.99035 2.03145 7.82211 2.29973 7.78486L7.62617 7.04956C8.14026 6.97883 8.58476 6.67249 8.81427 6.22971L11.1962 1.64418C11.316 1.41317 11.55 1.27548 11.8209 1.27548C12.0922 1.27548 12.3257 1.41317 12.446 1.64418L14.8279 6.22971C15.0574 6.67249 15.5015 6.97883 16.0156 7.04956L21.3425 7.78486C21.6108 7.82211 21.8209 7.99035 21.9046 8.23559C21.9883 8.48042 21.9226 8.73403 21.7284 8.91398L17.8742 12.483C17.5024 12.8274 17.3328 13.3233 17.4209 13.81Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined);
    //AUTH

    case 'AuthProfile':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 60 56",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M55.517 44.55L45.744 40.317C45.514 40.202 45.259 39.921 45.04 39.546L51.565 39.541C51.679 39.552 54.369 39.798 56.526 38.871C57.343 38.519 57.951 37.824 58.195 36.964C58.441 36.096 58.285 35.177 57.769 34.441C55.904 31.787 51.551 24.852 51.415 17.818C51.412 17.697 51.018 5.735 39.205 5.638C37.466 5.652 35.858 5.947 34.395 6.491C34.076 5.678 33.606 4.83 32.907 4.032C30.854 1.688 27.521 0.5 23 0.5C18.479 0.5 15.146 1.688 13.092 4.03C10.724 6.731 10.944 10.006 11 10.555V15.874C10.36 16.603 10 17.536 10 18.499V22.499C10 23.716 10.553 24.851 11.497 25.608C12.413 29.235 14.33 31.968 15 32.845V36.154C15 37.122 14.472 38.01 13.623 38.474L4.702 43.34C1.801 44.924 0 47.958 0 51.262V55.5H44H46H60V51.803C60 48.711 58.282 45.933 55.517 44.55ZM44 53.5H2V51.262C2 48.691 3.402 46.328 5.659 45.098L14.58 40.232C16.073 39.417 17 37.854 17 36.155V32.136L16.767 31.858C16.743 31.829 14.292 28.864 13.357 24.793L13.266 24.397L12.925 24.177C12.346 23.803 12 23.176 12 22.5V18.5C12 17.939 12.238 17.416 12.67 17.025L13 16.728V10.5L12.991 10.369C12.988 10.342 12.648 7.57 14.596 5.348C16.253 3.458 19.081 2.5 23 2.5C26.905 2.5 29.727 3.451 31.386 5.328C32.211 6.26 32.626 7.301 32.833 8.195C32.849 8.265 32.864 8.334 32.878 8.403C32.892 8.474 32.907 8.545 32.918 8.613C32.931 8.691 32.942 8.765 32.953 8.839C32.961 8.892 32.969 8.946 32.975 8.997C32.99 9.121 33.002 9.241 33.01 9.352C33.011 9.361 33.011 9.369 33.011 9.378C33.018 9.486 33.023 9.588 33.026 9.681C33.026 9.699 33.026 9.714 33.027 9.732C33.029 9.815 33.029 9.894 33.028 9.963C33.028 9.973 33.028 9.983 33.028 9.993C33.024 10.228 33.008 10.368 33.008 10.371L33 16.728L33.33 17.026C33.762 17.416 34 17.939 34 18.5V22.5C34 23.373 33.428 24.137 32.578 24.399L32.08 24.552L31.92 25.047C31.251 27.128 30.298 29.05 29.086 30.76C28.789 31.181 28.5 31.554 28.249 31.839L28 32.123V36.248C28 36.501 28.025 36.749 28.064 36.993C28.072 37.045 28.086 37.095 28.096 37.147C28.135 37.348 28.187 37.545 28.251 37.737C28.266 37.782 28.282 37.825 28.299 37.87C28.377 38.079 28.468 38.281 28.574 38.475C28.586 38.497 28.597 38.52 28.609 38.542C28.754 38.798 28.921 39.041 29.113 39.265L29.341 39.546H29.38C29.723 39.884 30.117 40.178 30.565 40.402L40.118 45.178C42.513 46.374 44 48.78 44 51.457V53.5ZM58 53.5H46V51.457C46 48.018 44.089 44.927 41.014 43.389L34.156 39.959C34.325 39.573 34.347 39.131 34.199 38.705C33.954 38 33.314 37.545 32.569 37.545H30.352C30.306 37.464 30.276 37.375 30.239 37.289C30.189 37.174 30.13 37.061 30.097 36.94C30.036 36.718 30 36.486 30 36.248V32.867C30.229 32.587 30.47 32.268 30.719 31.916C31.958 30.166 32.951 28.218 33.673 26.117C35.084 25.47 36 24.075 36 22.5V18.5C36 17.537 35.64 16.604 35 15.875V10.556C35.026 10.306 35.082 9.487 34.916 8.417C36.204 7.911 37.647 7.65 39.206 7.637C49.047 7.718 49.406 17.448 49.416 17.858C49.563 25.441 54.162 32.785 56.133 35.59C56.302 35.83 56.353 36.132 56.272 36.417C56.226 36.581 56.094 36.879 55.737 37.032C54.057 37.755 51.778 37.55 51.661 37.545H44.778C44.135 37.545 43.549 37.872 43.21 38.419C42.872 38.964 42.84 39.63 43.124 40.202C43.437 40.833 43.99 41.676 44.899 42.129L54.646 46.351C56.715 47.396 58 49.482 58 51.803V53.5Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined);

    case 'AuthPhone':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 34 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M29.595 0H4.405C1.977 0 0 1.977 0 4.405V55.594C0 58.023 1.977 60 4.405 60H29.594C32.023 60 34 58.023 34 55.595V4.405C34 1.977 32.023 0 29.595 0ZM2 8H32V46H2V8ZM4.405 2H29.594C30.921 2 32 3.079 32 4.405V6H2V4.405C2 3.079 3.079 2 4.405 2ZM29.595 58H4.405C3.079 58 2 56.921 2 55.595V48H32V55.595C32 56.921 30.921 58 29.595 58Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M17 49C14.794 49 13 50.794 13 53C13 55.206 14.794 57 17 57C19.206 57 21 55.206 21 53C21 50.794 19.206 49 17 49ZM17 55C15.897 55 15 54.103 15 53C15 51.897 15.897 51 17 51C18.103 51 19 51.897 19 53C19 54.103 18.103 55 17 55Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M13 5H17C17.553 5 18 4.553 18 4C18 3.447 17.553 3 17 3H13C12.447 3 12 3.447 12 4C12 4.553 12.447 5 13 5Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M20 5H21C21.553 5 22 4.553 22 4C22 3.447 21.553 3 21 3H20C19.447 3 19 3.447 19 4C19 4.553 19.447 5 20 5Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, undefined);

    case 'AuthEmail':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 50 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M45.2563 42.3354C42.6487 43.8588 39.8377 45.0014 36.8225 45.7631C33.8072 46.5248 30.5195 46.9057 26.9605 46.9057C23.4009 46.9057 20.0572 46.4108 16.9285 45.422C13.7998 44.4323 11.0674 42.9734 8.7329 41.0445C6.39775 39.1154 4.55541 36.7365 3.20681 33.9071C1.85758 31.0777 1.18344 27.8134 1.18344 24.1134C1.18344 20.75 1.84093 17.6585 3.1559 14.8391C4.47055 12.0197 6.25601 9.59625 8.51195 7.56796C10.7676 5.53996 13.3919 3.96197 16.3845 2.83425C19.3771 1.70682 22.5621 1.14282 25.9404 1.14282C27.9128 1.14282 29.834 1.31625 31.7043 1.66225C33.575 2.00882 35.3432 2.52282 37.0095 3.20568C38.6758 3.88825 40.2114 4.74882 41.6175 5.78768C43.023 6.82654 44.2302 8.04825 45.2394 9.45282C46.2476 10.858 47.0355 12.4405 47.6025 14.2014C48.1691 15.9628 48.4529 17.9014 48.4529 20.0182C48.4529 22.1948 48.1349 24.1583 47.501 25.9091C46.8658 27.66 46.0047 29.1543 44.9163 30.3905C43.8282 31.6271 42.5642 32.582 41.1244 33.2545C39.6847 33.9274 38.1604 34.2634 36.5506 34.2634C35.3714 34.2634 34.3855 34.1003 33.5923 33.774C32.7984 33.4474 32.1808 32.9874 31.7389 32.3937C31.2967 31.8003 31.0189 31.088 30.9054 30.2568C30.7917 29.426 30.8379 28.3328 30.9969 27.3234C29.8406 29.5988 28.3833 31.4391 26.6717 32.4974C24.9595 33.556 23.0838 34.0851 21.0435 34.0851C19.8416 34.0851 18.8102 33.9025 17.9487 33.5363C17.0869 33.1703 16.3672 32.6754 15.7892 32.0523C15.211 31.4291 14.786 30.6977 14.5139 29.8563C14.2417 29.0157 14.1056 28.1103 14.1056 27.1408C14.1056 26.0328 14.2697 24.9103 14.5987 23.7723C14.9272 22.6348 15.409 21.5465 16.0441 20.5077C16.6787 19.4688 17.4606 18.4948 18.3906 17.5845C19.3199 16.6745 20.374 15.8883 21.5532 15.2251C22.7318 14.5625 24.0358 14.038 25.4642 13.6523C26.8923 13.2665 28.4339 13.0734 30.0892 13.0734C31.0189 13.0734 31.9652 13.1477 32.9288 13.296C33.8924 13.4443 34.7143 13.6668 35.3941 13.9637L30.9969 27.3234",
          stroke: "black",
          "stroke-width": "2",
          "stroke-miterlimit": "1",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined);

    case 'AuthPassword':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 44 54",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M38 20.113V14.5C38 6.505 30.822 0 22 0C13.178 0 6 6.505 6 14.5C6 15.053 6.447 15.5 7 15.5C7.553 15.5 8 15.053 8 14.5C8 7.607 14.28 2 22 2C29.72 2 36 7.607 36 14.5V20H7.229C3.243 20 0 23.243 0 27.229V46.771C0 50.757 3.243 54 7.229 54H36.771C40.757 54 44 50.757 44 46.771V27.229C44 23.663 41.401 20.699 38 20.113ZM42 46.771C42 49.654 39.654 52 36.771 52H7.229C4.346 52 2 49.654 2 46.771V27.229C2 24.346 4.346 22 7.229 22H36.771C39.654 22 42 24.346 42 27.229V46.771Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M22 28C19.794 28 18 29.794 18 32V38C18 40.206 19.794 42 22 42C24.206 42 26 40.206 26 38V32C26 29.794 24.206 28 22 28ZM24 38C24 39.103 23.103 40 22 40C20.897 40 20 39.103 20 38V32C20 30.897 20.897 30 22 30C23.103 30 24 30.897 24 32V38Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, undefined);

    case 'OpenEye':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 60 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M51.062 9.56104C39.173 -2.32796 19.83 -2.32796 7.941 9.56104L0 17.501L8.138 25.639C14.082 31.583 21.89 34.556 29.699 34.556C37.508 34.556 45.315 31.584 51.26 25.639L59.201 17.698L51.062 9.56104ZM49.845 24.225C38.736 35.333 20.661 35.333 9.552 24.225L2.828 17.501L9.355 10.974C20.464 -0.133963 38.539 -0.133963 49.648 10.974L56.372 17.698L49.845 24.225Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M28.572 9.57007C24.712 9.57007 21.572 12.7101 21.572 16.5701C21.572 17.1221 22.02 17.5701 22.572 17.5701C23.124 17.5701 23.572 17.1221 23.572 16.5701C23.572 13.8131 25.815 11.5701 28.572 11.5701C29.124 11.5701 29.572 11.1221 29.572 10.5701C29.572 10.0181 29.125 9.57007 28.572 9.57007Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M29.572 4.57007C22.404 4.57007 16.572 10.4021 16.572 17.5701C16.572 24.7381 22.404 30.5701 29.572 30.5701C36.74 30.5701 42.572 24.7381 42.572 17.5701C42.572 10.4021 36.741 4.57007 29.572 4.57007ZM29.572 28.5701C23.507 28.5701 18.572 23.6351 18.572 17.5701C18.572 11.5051 23.507 6.57007 29.572 6.57007C35.637 6.57007 40.572 11.5051 40.572 17.5701C40.572 23.6351 35.638 28.5701 29.572 28.5701Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined);

    case 'CloseEye':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 60 49",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M11.285 36.39C11.469 36.536 11.689 36.608 11.908 36.608C12.202 36.608 12.493 36.479 12.691 36.231C13.035 35.799 12.964 35.17 12.532 34.826C11.731 34.188 10.955 33.495 10.227 32.766L2.829 25.368L10.458 17.739C17.792 10.406 28.461 7.90304 38.297 11.205C38.82 11.378 39.387 11.098 39.564 10.575C39.739 10.052 39.458 9.48404 38.934 9.30804C28.372 5.76304 16.918 8.45104 9.044 16.324L0 25.368L8.812 34.18C9.593 34.962 10.426 35.705 11.285 36.39Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M50.237 16.3251C48.889 14.9771 47.411 13.7611 45.843 12.7091C45.385 12.4021 44.762 12.5241 44.455 12.9821C44.147 13.4401 44.27 14.0621 44.728 14.3701C46.188 15.3491 47.566 16.4831 48.822 17.7391L56.22 25.1371L48.591 32.7661C41.206 40.1511 30.078 42.6481 20.239 39.1221C19.719 38.9351 19.146 39.2061 18.96 39.7261C18.774 40.2461 19.044 40.8181 19.564 41.0051C22.746 42.1451 26.054 42.6981 29.34 42.6981C36.961 42.6981 44.464 39.7211 50.005 34.1801L59.048 25.1371L50.237 16.3251Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M30.539 36.7741C28.386 36.7741 26.288 36.1761 24.469 35.0441C24.002 34.7541 23.385 34.8961 23.092 35.3651C22.8 35.8341 22.944 36.4501 23.413 36.7421C25.548 38.0721 28.013 38.7741 30.539 38.7741C37.983 38.7741 44.039 32.7181 44.039 25.2741C44.039 22.5891 43.252 19.9951 41.764 17.7721C41.456 17.3131 40.834 17.1901 40.377 17.4971C39.918 17.8051 39.795 18.4261 40.102 18.8841C41.369 20.7771 42.039 22.9861 42.039 25.2741C42.039 31.6161 36.88 36.7741 30.539 36.7741Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M30.539 13.774C32.604 13.774 34.628 14.327 36.394 15.374C36.868 15.655 37.482 15.499 37.764 15.023C38.045 14.548 37.889 13.935 37.413 13.653C35.339 12.424 32.962 11.774 30.538 11.774C23.094 11.774 17.038 17.83 17.038 25.274C17.038 27.358 17.5 29.357 18.412 31.215C18.586 31.569 18.941 31.775 19.311 31.775C19.458 31.775 19.609 31.742 19.75 31.673C20.246 31.429 20.451 30.83 20.208 30.335C19.432 28.753 19.038 27.051 19.038 25.275C19.039 18.933 24.198 13.774 30.539 13.774Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M54.6209 0.567054C54.2299 0.176054 53.5979 0.176054 53.2069 0.567054L6.70695 47.0671C6.31595 47.4581 6.31595 48.0901 6.70695 48.4811C6.90195 48.6761 7.15795 48.7741 7.41395 48.7741C7.66995 48.7741 7.92595 48.6761 8.12095 48.4811L54.6209 1.98105C55.0119 1.59105 55.0119 0.958054 54.6209 0.567054Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, undefined);

    case 'AuthForm':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 55 74",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M50.875 4.93214H34.375L36.85 1.97209C37.3065 1.42818 37.1827 0.65487 36.575 0.24663C35.9686 -0.161611 35.1065 -0.0518421 34.6514 0.493301L30.9375 4.93214H24.2248L21.8542 0.680771C21.5132 0.0714934 20.6882 -0.172711 20.009 0.129461C19.3298 0.4341 19.0547 1.17535 19.3944 1.78462L21.1502 4.93214H4.125C1.85075 4.93214 0 6.59224 0 8.63221V70.2999C0 72.3399 1.85075 74 4.125 74H50.875C53.1493 74 55 72.3399 55 70.2999V8.63221C55 6.59224 53.1493 4.93214 50.875 4.93214ZM52.25 70.2999C52.25 70.9807 51.634 71.5333 50.875 71.5333H4.125C3.366 71.5333 2.75 70.9807 2.75 70.2999V8.63221C2.75 7.9514 3.366 7.39885 4.125 7.39885H22.5252L23.9002 9.86556C22.7453 10.7708 22 12.0844 22 13.5656C22 16.2864 24.4667 18.499 27.5 18.499C30.5333 18.499 33 16.2864 33 13.5656C33 10.8448 30.5333 8.63221 27.5 8.63221C27.1054 8.63221 26.7218 8.67291 26.3505 8.74444L25.5998 7.39885H50.875C51.634 7.39885 52.25 7.9514 52.25 8.63221V70.2999ZM25.2065 12.2102L26.2694 14.1169C26.5114 14.5498 26.9967 14.799 27.5014 14.799C27.7076 14.799 27.918 14.757 28.1146 14.6695C28.7939 14.3648 29.0689 13.6236 28.7292 13.0143L27.6705 11.1149C29.106 11.1951 30.25 12.2583 30.25 13.5656C30.25 14.926 29.0166 16.0323 27.5 16.0323C25.9834 16.0323 24.75 14.926 24.75 13.5656C24.75 13.0649 24.9191 12.5999 25.2065 12.2102Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M41.25 50.5663H13.75C12.9896 50.5663 12.375 51.1176 12.375 51.7996C12.375 52.4817 12.9896 53.033 13.75 53.033H41.25C42.0104 53.033 42.625 52.4817 42.625 51.7996C42.625 51.1176 42.0104 50.5663 41.25 50.5663Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M41.25 56.7332H13.75C12.9896 56.7332 12.375 57.2845 12.375 57.9665C12.375 58.6486 12.9896 59.1999 13.75 59.1999H41.25C42.0104 59.1999 42.625 58.6486 42.625 57.9665C42.625 57.2845 42.0104 56.7332 41.25 56.7332Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M41.25 62.8999H13.75C12.9896 62.8999 12.375 63.4512 12.375 64.1333C12.375 64.8153 12.9896 65.3666 13.75 65.3666H41.25C42.0104 65.3666 42.625 64.8153 42.625 64.1333C42.625 63.4512 42.0104 62.8999 41.25 62.8999Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M35.75 45.6329H41.25V20.9658H13.75V45.6329H19.25H35.75ZM22 43.1662C22 40.4454 24.4668 38.2328 27.5 38.2328C30.5333 38.2328 33 40.4454 33 43.1662H22ZM23.375 32.066C23.375 30.026 25.2257 28.3659 27.5 28.3659C29.7743 28.3659 31.625 30.026 31.625 32.066C31.625 34.106 29.7743 35.7661 27.5 35.7661C25.2257 35.7661 23.375 34.106 23.375 32.066ZM16.5 43.1662V23.4325H38.5V43.1662H35.75C35.75 40.4923 34.1564 38.1526 31.7804 36.8527C33.3492 35.7204 34.375 34.0073 34.375 32.066C34.375 28.6657 31.2909 25.8992 27.5 25.8992C23.7091 25.8992 20.625 28.6657 20.625 32.066C20.625 34.0073 21.6507 35.7217 23.2196 36.8527C20.8436 38.1526 19.25 40.4923 19.25 43.1662H16.5Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, undefined);

    case 'AuthCheckTrue':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 56 52",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M49.3559 17.9322C48.8311 17.9322 48.4068 18.3564 48.4068 18.8813V49.2542H1.89831V2.74572H48.4068V3.69487C48.4068 4.21975 48.8311 4.64402 49.3559 4.64402C49.8808 4.64402 50.3051 4.21975 50.3051 3.69487V0.847412H0V51.1525H50.3051V18.8813C50.3051 18.3564 49.8808 17.9322 49.3559 17.9322Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M55.7219 4.92214C55.3508 4.55102 54.7509 4.55102 54.3798 4.92214L25.6271 33.6748L13.2217 21.2694C12.8506 20.8983 12.2507 20.8983 11.8796 21.2694C11.5085 21.6405 11.5085 22.2404 11.8796 22.6115L24.9561 35.688C25.1412 35.8731 25.3841 35.9661 25.6271 35.9661C25.8701 35.9661 26.1131 35.8731 26.2982 35.688L55.7219 6.26424C56.093 5.89312 56.093 5.29326 55.7219 4.92214Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, undefined);

    case 'AuthCheckFalse':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 51 52",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M49.3559 17.9322C48.8311 17.9322 48.4068 18.3564 48.4068 18.8813V49.2542H1.89831V2.74572H48.4068V3.69487C48.4068 4.21975 48.8311 4.64402 49.3559 4.64402C49.8808 4.64402 50.3051 4.21975 50.3051 3.69487V0.847412H0V51.1525H50.3051V18.8813C50.3051 18.3564 49.8808 17.9322 49.3559 17.9322Z",
          fill: "black"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
          x1: "49.4",
          y1: "4",
          x2: "49.4",
          y2: "19",
          stroke: "black",
          "stroke-width": "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, undefined);
    //VIDEO CONTROLS

    case 'Play':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 131 162",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M120.619 66.3778L120.619 66.3778C126.71 70.2815 129.963 75.4797 129.962 80.9927C129.962 86.5082 126.671 91.7083 120.585 95.6145L24.446 157.216L24.4456 157.216C20.0484 160.039 15.7418 161.5 12.1458 161.5C8.69809 161.5 5.94452 160.21 4.04219 157.862C2.12958 155.501 1.03799 152.02 1.03799 147.582V14.4393C1.03799 9.99547 2.13098 6.50951 4.04707 4.14473C5.95287 1.79265 8.71203 0.5 12.1682 0.5C15.7603 0.5 20.1386 1.96109 24.5242 4.77452L24.5243 4.77461L120.619 66.3778Z",
          fill: "#8C0821",
          stroke: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined);

    case 'Pause':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 96 162",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: "56.5",
          y: "0.5",
          width: "39",
          height: "161",
          rx: "11.5",
          fill: "#8C0821",
          stroke: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
          x: "0.5",
          y: "0.5",
          width: "39",
          height: "161",
          rx: "11.5",
          fill: "#8C0821",
          stroke: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, undefined);

    case 'Volume':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 53 53",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M28.404 3.41281C27.428 2.86081 26.273 2.87881 25.314 3.45681C25.268 3.48381 25.224 3.51581 25.184 3.54981L11.634 15.0128H1C0.447 15.0128 0 15.4598 0 16.0128V35.0128C0 35.2788 0.105 35.5328 0.293 35.7198C0.481 35.9068 0.734 36.0128 1 36.0128L11.61 36.0078L25.153 48.4478C25.203 48.4938 25.257 48.5338 25.314 48.5678C25.806 48.8648 26.351 49.0138 26.896 49.0138C27.413 49.0128 27.929 48.8798 28.404 48.6118C29.403 48.0478 30 47.0178 30 45.8568V6.16881C30 5.00781 29.403 3.97781 28.404 3.41281ZM28 45.8568C28 46.2878 27.783 46.6668 27.421 46.8718C27.266 46.9588 26.873 47.1268 26.421 46.8978L13 34.5688V30.0128C13 29.4598 12.553 29.0128 12 29.0128C11.447 29.0128 11 29.4598 11 30.0128V34.0088L2 34.0128V17.0128H11V21.0128C11 21.5658 11.447 22.0128 12 22.0128C12.553 22.0128 13 21.5658 13 21.0128V16.4768L26.405 5.13681C26.866 4.89481 27.265 5.06681 27.421 5.15481C27.783 5.35981 28 5.73881 28 6.16881V45.8568Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M38.797 7.06578C38.274 6.88878 37.706 7.16878 37.528 7.69178C37.351 8.21378 37.631 8.78278 38.154 8.96078C45.255 11.3718 50.026 18.0238 50.026 25.5138C50.026 32.9968 45.264 39.6498 38.177 42.0678C37.655 42.2458 37.375 42.8138 37.554 43.3378C37.696 43.7528 38.084 44.0148 38.5 44.0148C38.607 44.0148 38.716 43.9978 38.823 43.9608C46.719 41.2678 52.025 33.8548 52.025 25.5148C52.026 17.1658 46.71 9.75278 38.797 7.06578Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M43.026 25.513C43.026 19.541 39.017 14.211 33.277 12.551C32.744 12.4 32.193 12.703 32.039 13.235C31.886 13.765 32.191 14.32 32.723 14.473C37.612 15.886 41.027 20.426 41.027 25.513C41.027 30.6 37.612 35.14 32.723 36.553C32.192 36.706 31.886 37.261 32.039 37.791C32.166 38.229 32.565 38.514 33 38.514C33.092 38.514 33.185 38.501 33.277 38.475C39.018 36.815 43.026 31.485 43.026 25.513Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, undefined);

    case 'FullScreen':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 46 46",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M33.5 2H44V12.5",
          stroke: "white",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M44 33.5V44H33.5",
          stroke: "white",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M12.5 44H2V33.5",
          stroke: "white",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M2 12.5V2H12.5",
          stroke: "white",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, undefined)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, undefined);

    case 'Rim3':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 51 39",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M14.092 39H0.16V36.192L4.696 35.166V4.332L0.16 3.252V0.443998H14.092V3.252L9.556 4.332V35.166L14.092 36.192V39ZM32.3908 39H18.4588V36.192L22.9948 35.166V4.332L18.4588 3.252V0.443998H32.3908V3.252L27.8548 4.332V35.166L32.3908 36.192V39ZM50.6897 39H36.7577V36.192L41.2937 35.166V4.332L36.7577 3.252V0.443998H50.6897V3.252L46.1537 4.332V35.166L50.6897 36.192V39Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, undefined);

    case 'Rim2':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 33 39",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M14.092 39H0.16V36.192L4.696 35.166V4.332L0.16 3.252V0.443998H14.092V3.252L9.556 4.332V35.166L14.092 36.192V39ZM32.3908 39H18.4588V36.192L22.9948 35.166V4.332L18.4588 3.252V0.443998H32.3908V3.252L27.8548 4.332V35.166L32.3908 36.192V39Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, undefined);

    case 'Rim1':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 15 39",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M14.092 39H0.16V36.192L4.696 35.166V4.332L0.16 3.252V0.443998H14.092V3.252L9.556 4.332V35.166L14.092 36.192V39Z",
          fill: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, undefined);

    case 'ArrowUp':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 1299 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M1297.42 31.6667C1297.42 25.7083 1265.02 16.7708 1135.44 16.7708C1005.85 16.7708 941.062 16.7708 843.875 16.7708C746.687 16.7708 657 1.5 657 1.5C657 1.5 582.688 16.7708 485.5 16.7708C374.5 16.7708 293.145 16.7708 163.562 16.7708C33.9787 16.7708 1.58276 25.7083 1.58276 31.6667",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, undefined);

    case 'ArrowUpSmall':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 252 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M250.167 31.6667C250.167 25.7083 243.958 16.7708 219.125 16.7708C194.292 16.7708 181.875 16.7708 163.25 16.7708C144.625 16.7708 132.208 1.875 132.208 1.875C132.208 1.875 119.792 16.7708 101.167 16.7708C82.5417 16.7708 57.7084 16.7708 32.875 16.7708C8.04171 16.7708 1.83337 25.7083 1.83337 31.6667",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, undefined);

    case 'Info':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, styles), {}, {
        viewBox: "0 0 19 45",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M2.04736 44.3174L7.03027 40.4136L5.95117 18.5142L0.0795898 14.6738L13.7271 12.3569L11.2832 37.811L18.1069 42.064L2.04736 44.3174ZM14.0762 4.67627C14.0762 5.31104 13.9492 5.91406 13.6953 6.48535C13.4414 7.03548 13.0923 7.53271 12.6479 7.97705C12.2036 8.40023 11.6958 8.73877 11.1245 8.99268C10.5532 9.22542 9.9502 9.3418 9.31543 9.3418C8.63835 9.3418 8.00358 9.22542 7.41113 8.99268C6.83984 8.73877 6.34261 8.40023 5.91943 7.97705C5.49626 7.53271 5.15771 7.03548 4.90381 6.48535C4.6499 5.91406 4.52295 5.31104 4.52295 4.67627C4.52295 4.02035 4.6499 3.41732 4.90381 2.86719C5.15771 2.2959 5.49626 1.79867 5.91943 1.37549C6.34261 0.952311 6.83984 0.624349 7.41113 0.391602C8.00358 0.137695 8.63835 0.0107422 9.31543 0.0107422C9.9502 0.0107422 10.5532 0.137695 11.1245 0.391602C11.6958 0.624349 12.2036 0.952311 12.6479 1.37549C13.0923 1.79867 13.4414 2.2959 13.6953 2.86719C13.9492 3.41732 14.0762 4.02035 14.0762 4.67627Z",
          fill: "#291750"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }, undefined);

    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (svgSprite);

/***/ }),

/***/ "./styles/views/auth-view-styles.module.scss":
/*!***************************************************!*\
  !*** ./styles/views/auth-view-styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "auth-view-styles_wrapper__3q8I2",
	"wrapper__window": "auth-view-styles_wrapper__window__AyllT",
	"wrapper__icon": "auth-view-styles_wrapper__icon__3duji",
	"inputWrapper": "auth-view-styles_inputWrapper__1XMD2",
	"input": "auth-view-styles_input__EpupY",
	"title": "auth-view-styles_title__1mx_o",
	"btn": "auth-view-styles_btn__2lSSL",
	"btnSubSub": "auth-view-styles_btnSubSub__1tTXx",
	"btnSub": "auth-view-styles_btnSub__2Y2bG",
	"politic": "auth-view-styles_politic__2_f9m",
	"politicLink": "auth-view-styles_politicLink__YMN9l",
	"politicError": "auth-view-styles_politicError__121MX"
};


/***/ }),

/***/ "./styles/widgets/form-styles.module.scss":
/*!************************************************!*\
  !*** ./styles/widgets/form-styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputWrapper": "form-styles_inputWrapper__ZKHd6",
	"input": "form-styles_input__RtzQ3",
	"inputError": "form-styles_inputError__3wGFV",
	"fieldError": "form-styles_fieldError__15C2i",
	"inputIcon": "form-styles_inputIcon__3xja8",
	"svgInput": "form-styles_svgInput__3qTQD",
	"inputIconPassword": "form-styles_inputIconPassword__3vkhq"
};


/***/ }),

/***/ "./views/auth/AuthLoginView.js":
/*!*************************************!*\
  !*** ./views/auth/AuthLoginView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/views/auth-view-styles.module.scss */ "./styles/views/auth-view-styles.module.scss");
/* harmony import */ var _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../widgets/form/components/Input */ "./widgets/form/components/Input.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../network */ "./network.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../global/utils */ "./global/utils.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\auth\\AuthLoginView.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const AuthLoginView = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: '',
    tokenName: 'userToken'
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: errorsData,
    1: setErrorsData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});

  const dataSender = async () => {
    fetch(`${_network__WEBPACK_IMPORTED_MODULE_4__["NET"].BACK_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' // 'Authorization': 'Bearer ' + this.state.clientToken,

      },
      withCredentials: true
    }).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          react_cookies__WEBPACK_IMPORTED_MODULE_5___default.a.save('userToken', data.token);
          localStorage.setItem('userToken', data.token);
          router.push('/ru/office');
        });
      } else if (response.status === 401) {
        response.json().then(errors => {
          if (errors.error === 'password') {
            setErrorsData(_objectSpread(_objectSpread({}, errorsData), {}, {
              password: '???????????? ???????????? ??????????????'
            }));
          } else if (errors.error === 'no-user') {
            setErrorsData(_objectSpread(_objectSpread({}, errorsData), {}, {
              email: '???????????????????????? ???? ??????????????????????????????'
            }));
          } else {
            const keys = Object.keys(errors.error);
            let acc = {};
            keys.map(el => {
              return acc[el] = errors.error[el];
            });
            console.log(keys);
            setErrorsData(acc);
          }
        });
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper__window,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attribute: "email",
        data: data,
        setData: setData,
        placeholder: "e-mail",
        type: "text",
        svgIcon: "AuthEmail",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_form_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attribute: "password",
        data: data,
        setData: setData,
        placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        svgIcon: "AuthPassword",
        errors: errorsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnSubSub,
        children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onClick: dataSender,
        children: "\u0412\u0445\u043E\u0434"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_views_auth_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnSub,
        onClick: () => router.push('/ru/auth/register'),
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthLoginView);

/***/ }),

/***/ "./widgets/form/components/FieldError.js":
/*!***********************************************!*\
  !*** ./widgets/form/components/FieldError.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\MotichProduction\\motich\\widgets\\form\\components\\FieldError.js";


const FieldError = ({
  classes,
  textError
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.fieldError,
    children: textError
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FieldError);

/***/ }),

/***/ "./widgets/form/components/Input.js":
/*!******************************************!*\
  !*** ./widgets/form/components/Input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../styles/widgets/form-styles.module.scss */ "./styles/widgets/form-styles.module.scss");
/* harmony import */ var _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldError */ "./widgets/form/components/FieldError.js");


var _jsxFileName = "D:\\MotichProduction\\motich\\widgets\\form\\components\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Input = ({
  attribute,
  data,
  setData,
  placeholder,
  type,
  svgIcon,
  errors
}) => {
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const error = errors[attribute];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: error ? [_styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input, _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputError].join(' ') : _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input,
        value: data[attribute],
        placeholder: placeholder,
        type: !showPassword ? type : 'text',
        onChange: e => {
          setData(_objectSpread(_objectSpread({}, data), {}, {
            [attribute]: e.target.value
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), svgIcon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputIcon,
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(svgIcon, {
          className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.svgInput
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 30
      }, undefined), type === 'password' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputIconPassword,
        onClick: () => setShowPassword(!showPassword),
        children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(!showPassword ? 'OpenEye' : 'CloseEye', {
          className: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.svgInput
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 42
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FieldError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: _styles_widgets_form_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a,
      textError: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFsL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvYXV0aC9BdXRoLmpzIiwid2VicGFjazovLy8uL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW2xhbmddL2F1dGgvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy92aWV3cy9hdXRoLXZpZXctc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy93aWRnZXRzL2Zvcm0tc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL2F1dGgvQXV0aExvZ2luVmlldy5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL2Zvcm0vY29tcG9uZW50cy9GaWVsZEVycm9yLmpzIiwid2VicGFjazovLy8uL3dpZGdldHMvZm9ybS9jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0V2luZG93RGltZW5zaW9ucyIsImlubmVyV2lkdGgiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93IiwidXNlV2luZG93RGltZW5zaW9ucyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyYW5zZm9ybVdvcmRDb3VudCIsImNvdW50IiwibGFuZyIsImVuZGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsInRvdGFsIiwiQXV0aCIsImNoaWxkcmVuIiwiTkVUIiwiQkFDS19VUkwiLCJCQUNLX1VSTF9NT0RVTEUiLCJGUk9OVF9VUkwiLCJMb2dpbiIsInN2Z1Nwcml0ZSIsIm5hbWUiLCJzdHlsZXMiLCJBdXRoTG9naW5WaWV3IiwiZGF0YSIsInNldERhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW5OYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXJyb3JzRGF0YSIsInNldEVycm9yc0RhdGEiLCJkYXRhU2VuZGVyIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY29va2llIiwic2F2ZSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvcnMiLCJlcnJvciIsImtleXMiLCJPYmplY3QiLCJhY2MiLCJtYXAiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwid3JhcHBlciIsIndyYXBwZXJfX3dpbmRvdyIsInRpdGxlIiwiYnRuU3ViU3ViIiwiYnRuIiwiYnRuU3ViIiwiRmllbGRFcnJvciIsInRleHRFcnJvciIsImZpZWxkRXJyb3IiLCJJbnB1dCIsImF0dHJpYnV0ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInN2Z0ljb24iLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJpbnB1dFdyYXBwZXIiLCJpbnB1dCIsImlucHV0RXJyb3IiLCJqb2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRJY29uIiwiY2xhc3NOYW1lIiwic3ZnSW5wdXQiLCJpbnB1dEljb25QYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUE7QUFBQSxtQkFaakIsRUFpQktiLElBQUksS0FBSyxVQUFULGlCQUF3QjtBQUNyQixpQkFBUyxFQUFFYiw4RUFBTyxDQUFDMkIsaUJBREU7QUFFckIsZUFBTyxFQUFFLE1BQU1YLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBRlQ7QUFBQSxrQkFJcEJ2RCxzRUFBUyxDQUFDLENBQUN1RCxZQUFELEdBQWdCLFNBQWhCLEdBQTRCLFVBQTdCLEVBQXlDO0FBQy9DVSxtQkFBUyxFQUFFekIsOEVBQU8sQ0FBQzBCO0FBRDRCLFNBQXpDO0FBSlc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQTZCUyxDQUFDLENBQUNsQyxLQUFGLGlCQUFXLHFFQUFDLG1EQUFEO0FBQ1IsYUFBTyxFQUFFUSw4RUFERDtBQUVSLGVBQVMsRUFBRVI7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCcEI7QUFBQSxrQkFESjtBQW9DSCxDQS9DRDs7QUFnRGVrQixvRUFBZixFOzs7Ozs7Ozs7OztBQ3ZEQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bbGFuZ10vYXV0aC9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW2xhbmddL2F1dGgvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlLCB1c2VFZmZlY3RcclxufSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xyXG4gICAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVdvcmRDb3VudCA9IChjb3VudCwgbGFuZykgPT4ge1xyXG4gICAgY29uc3QgZW5kZXIgPSB7XHJcbiAgICAgICAgZmlyc3Q6ICfQtNC10L3RjCcsXHJcbiAgICAgICAgc2Vjb25kOiAn0LTQvdGPJyxcclxuICAgICAgICB0aGlyZDogJ9C00L3QtdC5J1xyXG4gICAgfVxyXG4gICAgbGV0IHRvdGFsID0gY291bnQgJSAxMFxyXG5cclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgY291bnQgPj0gNSAmJiBjb3VudCA8PSAyMDpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLnRoaXJkXHJcbiAgICAgICAgY2FzZSB0b3RhbCA9PT0gMTpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLmZpcnN0XHJcbiAgICAgICAgY2FzZSB0b3RhbCA+IDEgJiYgdG90YWwgPCA1OlxyXG4gICAgICAgICAgICByZXR1cm4gZW5kZXIuc2Vjb25kXHJcbiAgICAgICAgY2FzZSB0b3RhbCA+IDQ6IFxyXG4gICAgICAgICAgICByZXR1cm4gZW5kZXIudGhpcmRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZW5kZXIuZmlyc3RcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF1dGggPSAoe1xyXG4gICAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0aCIsImV4cG9ydCBjb25zdCBORVQgPSB7XHJcbiAgICAvLyBCQUNLX1VSTDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTAzOjgwMDAvYXBpJyxcclxuICAgIC8vIEJBQ0tfVVJMX01PRFVMRTogJ2h0dHA6Ly8xOTIuMTY4LjAuMTAzOjgwMDAnLFxyXG4gICAgLy8gRlJPTlRfVVJMOiAnaHR0cDovLzE5Mi4xNjguMC4xMDQ6ODAwMCdcclxuICAgIEJBQ0tfVVJMOiAnaHR0cHM6Ly93d3cubWlvbi5jb3Vyc2VzL2FwaScsXHJcbiAgICBCQUNLX1VSTF9NT0RVTEU6ICdodHRwczovL3d3dy5taW9uLmNvdXJzZXMnLFxyXG4gICAgRlJPTlRfVVJMOiAnaHR0cHM6Ly9tb3RpY2gubWlvbi5jb3Vyc2VzL3J1L2F1dGgvcmVnaXN0ZXInXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnIFxyXG5pbXBvcnQgQXV0aExvZ2luVmlldyBmcm9tICcuLy4uLy4uLy4uL3ZpZXdzL2F1dGgvQXV0aExvZ2luVmlldyc7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4vLi4vLi4vLi4vbGF5b3V0cy9hdXRoL0F1dGgnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoPlxyXG4gICAgICAgICAgICA8QXV0aExvZ2luVmlldyAvPlxyXG4gICAgICAgIDwvQXV0aD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHN2Z1Nwcml0ZSA9IChuYW1lLCBzdHlsZXMpID0+IHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDQ4IDQyXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcuNjU5NTQgNDAuNDMySDYuNjU5NTRDNy42NTk1NCA0MC40MzIgNy42NTk1NCA0MC40MzE5IDcuNjU5NTQgNDAuNDMxOFY0MC40MzEyVjQwLjQyODdWNDAuNDE4OFY0MC40MTE0VjQwLjQwMjRWNDAuMzk3M1Y0MC4zOTE4VjQwLjM4NTlWNDAuMzc5NlY0MC4zNzI5VjQwLjM2NTlWNDAuMzU4NFY0MC4zNTA2VjQwLjMzMzdWNDAuMzE1M1Y0MC4zMDU2VjQwLjI5NTRWNDAuMjg0OVY0MC4yNzQxVjQwLjI1MTJWNDAuMjI2OFY0MC4yMDFWNDAuMTg3NVY0MC4xNzM3VjQwLjE1OTVWNDAuMTQ1VjQwLjExNDlWNDAuMDgzM1Y0MC4wNjdWNDAuMDUwNFY0MC4wMzM0VjQwLjAxNjFWMzkuOTk4NFYzOS45ODA0VjM5Ljk2MlYzOS45NDMzVjM5LjkyNDNWMzkuOTA0OVYzOS44ODUyVjM5Ljg2NTFWMzkuODI0MVYzOS44MDMxVjM5Ljc4MTdWMzkuNzZWMzkuNzM4MVYzOS43MTU3VjM5LjY5MzFWMzkuNjcwMlYzOS42NDY5VjM5LjYyMzNWMzkuNTk5NFYzOS41NzUyVjM5LjU1MDdWMzkuNTI1OVYzOS41MDA4VjM5LjQ0OTZWMzkuNDIzNlYzOS4zOTczVjM5LjM0MzhWMzkuMjg5VjM5LjIzMzJWMzkuMTc2MVYzOS4xMThWMzkuMDg4NFYzOS4wNTg3VjM4Ljk5ODNWMzguOTM2OFYzOC45MDU2VjM4Ljg3NDJWMzguODQyNVYzOC44MTA1VjM4Ljc0NThWMzguNzEzVjM4LjY4VjM4LjYxMzJWMzguNTc5NVYzOC41NDU0VjM4LjQ3NjZWMzguNDA2OFYzOC4zNzE1VjM4LjMzNlYzOC4yNjQyVjM4LjIyOFYzOC4xOTE1VjM4LjA0MzNWMzcuOTY3OFYzNy44OTE0VjM3LjgxNDFWMzcuNzM2VjM3LjY5NjVWMzcuNjU2OVYzNy41NzdWMzcuNDE0OFYzNy4yNDkzVjM3LjE2NTRWMzcuMTIzMVYzNy4wODA3VjM2Ljk5NTJWMzYuOTA5VjM2LjU1N1YzNi41MTIzVjM2LjQ2NzNWMzYuNDIyMlYzNi4zNzY5VjM2LjE5NDJWMzUuNDM5MlYzNS4wNDg3VjM0Ljk5OTNWMzQuOTQ5OVYzNC44NTA2VjM0LjY1MDdWMzQuMjQ2VjM0LjA0MTRWMzMuODM1NVYzMy42MjgzVjMzLjUyNDJWMzMuNDcyMVYzMy40MTk5VjMzLjIxMDVWMzMuMDAwMlYzMi44OTQ3VjMyLjc4OVYzMi41NzcxVjMyLjM2NDZWMzIuMTUxNVYzMS45MzhWMzEuNzI0MlYzMS42NzA3VjMxLjYxNzJWMzEuNTEwMlYzMS4yOTYxVjMxLjI0MjZWMzEuMTg5MVYzMS4xMzU1VjMxLjA4MlYzMS4wMjg1VjMwLjk3NVYzMC45MjE1VjMwLjg2OFYzMC44MTQ1VjMwLjc2MTFWMzAuNzA3NlYzMC42NTQyVjMwLjYwMDhWMzAuNTQ3NFYzMC40OTQxVjMwLjQ0MDdWMzAuMzg3NFYzMC4zMzQyVjMwLjI4MDlWMzAuMjI3N1YzMC4xNzQ1VjMwLjEyMTNWMzAuMDY4MlYzMC4wMTUyVjI5Ljk2MjFWMjkuOTA5MVYyOS44NTYyVjI5LjgwMzJWMjkuNzUwNFYyOS42OTc2VjI5LjY0NDhWMjkuNTkyMVYyOS41Mzk0VjI5LjQ4NjhWMjkuNDM0MlYyOS4zODE3VjI5LjMyOTNWMjkuMjc2OVYyOS4yMjQ2VjI5LjE3MjNWMjkuMTIwMVYyOS4wNjhWMjkuMDE2VjI4Ljk2NFYyOC45MTIxVjI4Ljg2MDJWMjguODA4NVYyOC43NTY4VjI4LjcwNTJWMjguNjUzNlYyOC42MDIyVjI4LjU1MDhWMjguNDk5NVYyOC40NDgzVjI4LjM5NzJWMjguMzQ2MlYyOC4yOTUzVjI4LjI0NDVWMjguMTkzN1YyOC4xNDMxVjI4LjA5MjZWMjguMDQyMVYyNy45OTE4VjI3Ljk0MTVWMjcuODkxNFYyNy44NDE0VjI3Ljc5MTVWMjcuNzQxNlYyNy42OTJWMjcuNjQyNFYyNy41OTI5VjI3LjU0MzVWMjcuNDk0M1YyNy40NDUyVjI3LjM5NjJWMjcuMzQ3M1YyNy4yOTg2VjI3LjI0OTlWMjcuMjAxNFYyNy4xNTMxVjI3LjEwNDhWMjcuMDU2N1YyNy4wMDg4VjI2Ljk2MDlWMjYuOTEzMlYyNi44NjU3VjI2Ljc3MVYyNi41ODMzVjI2LjQ5MDRWMjYuMzk4MVYyNi4yMTUzVjI2LjAzNTJWMjUuODU3OFYyNS42ODMyVjI1LjUxMTZWMjUuMzQyOVYyNS4xNzc0VjI1LjA5NTlWMjUuMDU1NFYyNS4wMTUyVjI0Ljg1NjNWMjQuNzAwOFYyNC40MDA3VjI0LjExNTZWMjMuODQ2NFYyMy43ODE3VjIzLjc0OThWMjMuNzE4MVYyMy41OTRWMjMuMzU5MVYyMy4xNDI2VjIzLjExNjlWMjMuMDkxNFYyMy4wNDE1VjIyLjk0NTNWMjIuNjI1NEwyMy45NjgxIDguODg4NDNMMzkuMzEwMSAyMi42MDc1VjQwLjEyODJWNDAuMTUwNkwzOS4zMTA0IDQwLjE1ODNDMzkuMzEwNCA0MC4xNTg1IDM5LjMxMDQgNDAuMTU4NiAzOS4zMTA0IDQwLjE1ODhDMzkuMzEwMiA0MC4xNjgyIDM5LjMwOTIgNDAuMTg3OSAzOS4zMDYxIDQwLjIxNDFDMzkuMjk5MiA0MC4yNzE2IDM5LjI4NTEgNDAuMzI5OSAzOS4yNjUyIDQwLjM3NDFDMzkuMjU2MiA0MC4zOTQxIDM5LjI0ODYgNDAuNDA1MyAzOS4yNDQ1IDQwLjQxMDVDMzkuMjQyNiA0MC40MTMgMzkuMjQxNSA0MC40MTQxIDM5LjI0MTIgNDAuNDE0NEwzOS4yNDA5IDQwLjQxNDZDMzkuMjQwOSA0MC40MTQ2IDM5LjI0MDYgNDAuNDE0OCAzOS4yMzk5IDQwLjQxNTJDMzkuMjM5MiA0MC40MTU3IDM5LjIzNzkgNDAuNDE2MyAzOS4yMzYxIDQwLjQxNzJDMzkuMjMyNyA0MC40MTg4IDM5LjIyNTkgNDAuNDIxOCAzOS4yMTQ1IDQwLjQyNTFDMzkuMTkyMiA0MC40MzE2IDM5LjE0NjIgNDAuNDQxNCAzOS4wNjggNDAuNDQxNEgzOS4wNTg3SDM5LjA0OTJIMzkuMDM5NUgzOS4wMjk2SDM5LjAxOTZIMzkuMDA5M0gzOC45OTg4SDM4Ljk4ODJIMzguOTc3NEgzOC45NjY0SDM4Ljk1NTJIMzguOTQzOEgzOC45MzIySDM4LjkyMDVIMzguOTA4NkgzOC44OTY1SDM4Ljg4NDJIMzguODcxN0gzOC44NTkxSDM4Ljg0NjJIMzguODMzMkgzOC44MjAxSDM4LjgwNjdIMzguNzkzMkgzOC43Nzk1SDM4Ljc2NTZIMzguNzUxNkgzOC43Mzc0SDM4LjcyM0gzOC43MDg1SDM4LjY5MzdIMzguNjc4OUgzOC42NjM4SDM4LjY0ODZIMzguNjMzMkgzOC42MTc3SDM4LjYwMTlIMzguNTg2MUgzOC41N0gzOC41NTM4SDM4LjUzNzVIMzguNTIxSDM4LjUwNDNIMzguNDg3NUgzOC40NzA1SDM4LjQ1MzNIMzguNDM2SDM4LjQxODZIMzguNDAxSDM4LjM4MzJIMzguMzY1M0gzOC4zNDcySDM4LjMyOUgzOC4zMTA3SDM4LjI5MjFIMzguMjczNUgzOC4yNTQ3SDM4LjIzNTdIMzguMjE2NkgzOC4xOTc0SDM4LjE3OEgzOC4xNTg1SDM4LjEzODhIMzguMTE5SDM4LjA5OUgzOC4wNzg5SDM4LjA1ODdIMzguMDM4M0gzOC4wMTc4SDM3Ljk5NzJIMzcuOTc2NEgzNy45NTU1SDM3LjkzNDVIMzcuOTEzM0gzNy44OTJIMzcuODcwNUgzNy44NDlIMzcuODI3M0gzNy44MDU0SDM3Ljc4MzVIMzcuNzYxNEgzNy43MzkySDM3LjcxNjhIMzcuNjk0NEgzNy42NzE4SDM3LjY0OTFIMzcuNjI2MkgzNy42MDMzSDM3LjU4MDJIMzcuNTU3SDM3LjUzMzdIMzcuNTEwM0gzNy40ODY3SDM3LjQ2MzFIMzcuNDM5M0gzNy40MTU0SDM3LjM5MTRIMzcuMzY3M0gzNy4zNDNIMzcuMzE4N0gzNy4yOTQySDM3LjI2OTdIMzcuMjQ1SDM3LjIyMDJIMzcuMTk1M0gzNy4xNzAzSDM3LjE0NTJIMzcuMTJIMzcuMDk0N0gzNy4wNjkzSDM3LjA0MzhIMzcuMDE4MkgzNi45OTI0SDM2Ljk2NjZIMzYuOTQwN0gzNi45MTQ3SDM2Ljg4ODZIMzYuODYyNEgzNi44MzYxSDM2LjgwOTdIMzYuNzgzMkgzNi43NTY2SDM2LjcyOTlIMzYuNzAzMUgzNi42NzYzSDM2LjY0OTNIMzYuNjIyM0gzNi41OTUxSDM2LjU2NzlIMzYuNTQwNkgzNi41MTMySDM2LjQ4NTdIMzYuNDU4MkgzNi40MzA1SDM2LjQwMjhIMzYuMzc1SDM2LjM0NzFIMzYuMzE5MUgzNi4yOTExSDM2LjI2M0gzNi4yMzQ4SDM2LjIwNjVIMzYuMTc4MUgzNi4xNDk3SDM2LjEyMTJIMzYuMDkyNkgzNi4wNjM5SDM2LjAzNTJIMzYuMDA2NEgzNS45Nzc2SDM1Ljk0ODZIMzUuOTE5NkgzNS44OTA1SDM1Ljg2MTRIMzUuODMyMkgzNS44MDI5SDM1Ljc3MzZIMzUuNzQ0MkgzNS43MTQ3SDM1LjY4NTJIMzUuNjU1NkgzNS42MjZIMzUuNTk2M0gzNS41NjY1SDM1LjUzNjdIMzUuNTA2OEgzNS40NzY5SDM1LjQ0NjlIMzUuNDE2OEgzNS4zODY3SDM1LjM1NjZIMzUuMzI2NEgzNS4yOTYxSDM1LjI2NThIMzUuMjM1NUgzNS4yMDVIMzUuMTc0NkgzNS4xNDQxSDM1LjExMzZIMzUuMDgzSDM1LjA1MjNIMzUuMDIxNkgzNC45OTA5SDM0Ljk2MDJIMzQuOTI5NEgzNC44OTg1SDM0Ljg2NzZIMzQuODM2N0gzNC44MDU3SDM0Ljc3NDdIMzQuNzQzN0gzNC43MTI2SDM0LjY4MTVIMzQuNjUwNEgzNC42MTkySDM0LjU4OEgzNC41NTY4SDM0LjUyNTVIMzQuNDk0MkgzNC40NjI5SDM0LjQzMTVIMzQuNDAwMUgzNC4zNjg3SDM0LjMzNzNIMzQuMzA1OEgzNC4yNzQzSDM0LjI0MjhIMzQuMjExM0gzNC4xNzk3SDM0LjE0ODJIMzQuMTE2NkgzNC4wODVIMzQuMDUzM0gzNC4wMjE3SDMzLjk5SDMzLjk1ODNIMzMuOTI2NkgzMy44OTQ5SDMzLjg2MzJIMzMuODMxNUgzMy43OTk3SDMzLjc2OEgzMy43MzYySDMzLjcwNDRIMzMuNjcyNkgzMy42NDA4SDMzLjYwOUgzMy41NzcySDMzLjU0NTRIMzMuNTEzNkgzMy40ODE4SDMzLjQ1SDMzLjQxODJIMzMuMzg2M0gzMy4zNTQ1SDMzLjMyMjdIMzMuMjkwOUgzMy4yNTlIMzMuMjI3MkgzMy4xOTU0SDMzLjE2MzZIMzMuMTMxOEgzMy4xSDMzLjA2ODJIMzMuMDM2NEgzMy4wMDQ3SDMyLjk3MjlIMzIuOTQxMkgzMi45MDk0SDMyLjg3NzdIMzIuODQ2SDMyLjgxNDNIMzIuNzgyNkgzMi43NTA5SDMyLjcxOTNIMzIuNjg3NkgzMi42NTZIMzIuNjI0NEgzMi41OTI4SDMyLjU2MTNIMzIuNTI5N0gzMi40OTgySDMyLjQ2NjdIMzIuNDM1M0gzMi40MDM4SDMyLjM3MjRIMzIuMzQxSDMyLjMwOTZIMzIuMjc4M0gzMi4yNDdIMzIuMjE1N0gzMi4xODQ1SDMyLjE1MzJIMzIuMTIySDMyLjA5MDlIMzIuMDU5OEgzMi4wMjg3SDMxLjk5NzZIMzEuOTY2NkgzMS45MzU2SDMxLjkwNDdIMzEuODczOEgzMS44NDI5SDMxLjgxMjFIMzEuNzgxM0gzMS43NTA2SDMxLjcxOTlIMzEuNjg5M0gzMS42NTg3SDMxLjYyODFIMzEuNTk3NkgzMS41NjcxSDMxLjUzNjdIMzEuNTA2M0gzMS40NzZIMzEuNDQ1N0gzMS40MTU1SDMxLjM4NTNIMzEuMzU1MkgzMS4zMjUxSDMxLjI5NTFIMzEuMjY1MkgzMS4yMzUzSDMxLjIwNTRIMzEuMTc1NkgzMS4xNDU5SDMxLjExNjJIMzEuMDg2NkgzMS4wNTcxSDMxLjAyNzZIMzAuOTk4MkgzMC45Njg4SDMwLjkzOTVIMzAuOTEwM0gzMC44ODExSDMwLjg1MkgzMC44MjNIMzAuNzk0MUgzMC43NjUySDMwLjczNjNIMzAuNzA3NkgzMC42Nzg5SDMwLjY1MDNIMzAuNjIxOEgzMC41OTMzSDMwLjU2NDlIMzAuNTM2NkgzMC41MDg0SDMwLjQ4MDJIMzAuNDUyMUgzMC40MjQxSDMwLjM5NjJIMzAuMzY4NEgzMC4zNDA2SDMwLjMxM0gzMC4yODU0SDMwLjI1NzlIMzAuMjMwNEgzMC4yMDMxSDMwLjE3NThIMzAuMTQ4N0gzMC4xMjE2SDMwLjA5NDZIMzAuMDY3N0gzMC4wNDA5SDMwLjAxNDJIMjkuOTg3NkgyOS45NjFIMjkuOTM0NkgyOS45MDgzSDI5Ljg4MkgyOS44NTU5SDI5LjgyOThIMjkuODAzOUgyOS43NzhIMjkuNzUyM0gyOS43MjY2SDI5LjcwMTFIMjkuNjc1NkgyOS42NTAzSDI5LjYyNUgyOS41OTk5SDI5LjU3NDhIMjkuNTQ5OUgyOS41MjUxSDI5LjUwMDRIMjkuNDc1OEgyOS40NTEzSDI5LjQyNjlIMjkuNDAyNkgyOS4zNzg0SDI5LjM1NDRIMjkuMzMwNUgyOS4zMDY2SDI5LjI4MjlIMjkuMjU5M0gyOS4yMzU5SDI5LjIxMjVIMjkuMTg5M0gyOS4xNjYySDI5LjE0MzJIMjkuMTIwM0gyOS4wOTc1SDI5LjA3NDlIMjkuMDUyNEgyOS4wM0gyOS4wMDc4SDI4Ljk4NTZIMjguOTYzNkgyOC45NDE3SDI4LjkySDI4Ljg5ODRIMjguODc2OUgyOC44NTU1SDI4LjgzNDNIMjguODEzMkgyOC43OTIySDI4Ljc3MTRIMjguNzUwN0gyOC43MzAySDI4LjcwOThIMjguNjg5NUgyOC42NjkzSDI4LjY0OTNIMjguNjI5NUgyOC42MDk3SDI4LjU5MDJIMjguNTcwN0gyOC41NTE0SDI4LjUzMjNIMjguNTEzM0gyOC40OTQ0SDI4LjQ4ODVMMjguNTA3MiAzMS43NTA4QzI4LjUwNzMgMzEuNzQ3NiAyOC41MDc0IDMxLjc0NDIgMjguNTA3NSAzMS43NDA4QzI4LjUwODMgMzEuNzE1NSAyOC41MDg4IDMxLjY4MzcgMjguNTA4NCAzMS42NDYzQzI4LjUwNzYgMzEuNTcxOCAyOC41MDMgMzEuNDcyNiAyOC40ODkxIDMxLjM1NjRDMjguNDYxOCAzMS4xMjg5IDI4LjM5NTIgMzAuODA4NSAyOC4yMjg2IDMwLjQ3NTZDMjguMDU3OSAzMC4xMzQ4IDI3Ljc4MTEgMjkuNzgwMiAyNy4zNDg2IDI5LjUxNjlDMjYuOTE3MyAyOS4yNTQzIDI2LjM5MyAyOS4xMiAyNS43ODU3IDI5LjEySDIwLjg3NjVDMjAuMzA3NyAyOS4xMiAxOS44MDk0IDI5LjI3MDcgMTkuNDA4OSAyOS41Njg2QzE5LjAxNiAyOS44NjA4IDE4Ljc5MjYgMzAuMjM4NCAxOC42Njc0IDMwLjU2ODlDMTguNTQzOCAzMC44OTQ5IDE4LjUwNCAzMS4yMDM5IDE4LjQ5MTggMzEuNDE4NUMxOC40ODU0IDMxLjUyODkgMTguNDg2IDMxLjYyMjcgMTguNDg4NCAzMS42OTI0QzE4LjQ4OTQgMzEuNzE5NSAxOC40OTA2IDMxLjc0MzIgMTguNDkxOSAzMS43NjMzTDE4LjQ3NjMgNDAuNDc0MUwxNy44MDM5IDQwLjQ3NUwxNC4wMzU2IDQwLjQ3OThDMTEuMjY1NCA0MC40ODMzIDguMzQwNDYgNDAuNDg2NyA3LjY2MzIgNDAuNDg2OEM3LjY2MjYzIDQwLjQ4MzEgNy42NjIxMSA0MC40NzkyIDcuNjYxNjMgNDAuNDc1M0M3LjY2MDM5IDQwLjQ2NTIgNy42NTk4IDQwLjQ1NzIgNy42NTk1MiA0MC40NTIzTDcuNjU5NTQgNDAuNDUxOFY0MC40MzJaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuMDQ2IDEuODMwMjlMNDUuNjk2NyAyMS41NDYyQzQ1LjY2NDUgMjEuNTYyNyA0NS42MzA4IDIxLjU3ODMgNDUuNTk1OSAyMS41OTI4QzQ1LjIwNTQgMjEuNzU0NyA0NC4zMDgzIDIxLjkwNzUgNDIuNjYyMyAyMC43Mjc2TDI0LjcyNDkgNC41NTgxOEwyNC4wNzQ1IDMuOTcxOTFMMjMuNDA3NSA0LjUzOTE3TDQuMjMzMTEgMjAuODQ2QzMuNTE4NzggMjEuNDUyOSAyLjk3MDI1IDIxLjY5NzEgMi41ODM3OSAyMS43ODA5QzIuMjExODUgMjEuODYxNiAxLjk0MjgxIDIxLjgwNDkgMS43NDI2IDIxLjcxNjFDMS43MDgzMyAyMS43MDA5IDEuNjc1MTUgMjEuNjg0NCAxLjY0MzA2IDIxLjY2NjdMMjQuMDQ2IDEuODMwMjlaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzYuNDQ4IDcuNDMxMTlMMzYuNDMzOCAzLjI1Njg0SDM5LjA1NDdWOS42NTQzNEwzNi40NDggNy40MzExOVpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdDb3Vyc2UnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA4MCA4MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS4wMDAwOCAwLjVIMzBDMzIuNDg2MyAwLjUgMzQuNDk5OSAyLjUxMzYgMzQuNTAwMSA1LjAwMDA4VjMwQzM0LjUwMDEgMzIuNDg0MiAzMi40ODYyIDM0LjUwMDEgMzAgMzQuNTAwMUg1LjAwMDA4QzIuNTEzNzkgMzQuNTAwMSAwLjUgMzIuNDg0IDAuNSAzMFY1LjAwMDA4QzAuNSAyLjUxMzYyIDIuNTEzNjIgMC41IDUuMDAwMDggMC41Wk0yOCAzMC41QzI5LjM4MDggMzAuNSAzMC41IDI5LjM4MDggMzAuNSAyOC4wMDAxVjcuMDAwMDhDMzAuNSA1LjYxOTM3IDI5LjM4MDggNC41MDAwOCAyOC4wMDAxIDQuNTAwMDhINy4wMDAwOEM1LjYxOTM3IDQuNTAwMDggNC41MDAwOCA1LjYxOTM2IDQuNTAwMDggNy4wMDAwOFYyOEM0LjUwMDA4IDI5LjM4MDggNS42MTkzNiAzMC41IDcuMDAwMDggMzAuNUgyOFpcIiBzdHJva2U9XCIjMEUxMDNEXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAgMC41SDc0Ljk5OTlDNzcuNDg0MSAwLjUgNzkuNSAyLjUxMzc4IDc5LjUgNS4wMDAwOFYzMEM3OS41IDMyLjQ4NCA3Ny40ODM3IDM0LjUwMDEgNzQuOTk5OSAzNC41MDAxSDUwQzQ3LjUxMzcgMzQuNTAwMSA0NS40OTk5IDMyLjQ4NCA0NS40OTk5IDMwVjUuMDAwMDhDNDUuNDk5OSAyLjUxMzYzIDQ3LjUxMzcgMC41IDUwIDAuNVpNNzIuOTk5OSAzMC41Qzc0LjM4MDYgMzAuNSA3NS40OTk5IDI5LjM4MDggNzUuNDk5OSAyOC4wMDAxVjcuMDAwMDhDNzUuNDk5OSA1LjYxOTM3IDc0LjM4MDcgNC41MDAwOCA3Mi45OTk5IDQuNTAwMDhINTJDNTAuNjE5MiA0LjUwMDA4IDQ5LjUgNS42MTkzNiA0OS41IDcuMDAwMDhWMjhDNDkuNSAyOS4zODA4IDUwLjYxOTIgMzAuNSA1MiAzMC41SDcyLjk5OTlaXCIgc3Ryb2tlPVwiIzBFMTAzRFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwIDQ1LjVINzQuOTk5OUM3Ny40ODQxIDQ1LjUgNzkuNSA0Ny41MTQgNzkuNSA1MC4wMDAxVjc1Qzc5LjUgNzcuNDg2MyA3Ny40ODM5IDc5LjUwMDEgNzQuOTk5OSA3OS41MDAxSDUwQzQ3LjUxMzUgNzkuNTAwMSA0NS40OTk5IDc3LjQ4NjMgNDUuNDk5OSA3NVY1MC4wMDAxQzQ1LjQ5OTkgNDcuNTE2IDQ3LjUxMzkgNDUuNSA1MCA0NS41Wk03Mi45OTk5IDc1LjVDNzQuMzgwNyA3NS41IDc1LjQ5OTkgNzQuMzgwOCA3NS40OTk5IDczVjUyLjAwMDFDNzUuNDk5OSA1MC42MTk0IDc0LjM4MDcgNDkuNTAwMSA3Mi45OTk5IDQ5LjUwMDFINTJDNTAuNjE5MiA0OS41MDAxIDQ5LjUgNTAuNjE5NCA0OS41IDUyLjAwMDFWNzNDNDkuNSA3NC4zODA4IDUwLjYxOTIgNzUuNSA1MiA3NS41SDcyLjk5OTlaXCIgc3Ryb2tlPVwiIzBFMTAzRFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuMDAwMDggNDUuNUgzMEMzMi40ODYzIDQ1LjUgMzQuNDk5OSA0Ny41MTM4IDM0LjUwMDEgNTAuMDAwMVY3NUMzNC41MDAxIDc3LjQ4NjUgMzIuNDg2MyA3OS41MDAxIDMwIDc5LjUwMDFINS4wMDAwOEMyLjUxMzYzIDc5LjUwMDEgMC41IDc3LjQ4NjMgMC41IDc1VjUwLjAwMDFDMC41IDQ3LjUxNjEgMi41MTM3OSA0NS41IDUuMDAwMDggNDUuNVpNMjggNzUuNUMyOS4zODA4IDc1LjUgMzAuNSA3NC4zODA3IDMwLjUgNzNWNTIuMDAwMUMzMC41IDUwLjYxOTQgMjkuMzgwOCA0OS41MDAxIDI4LjAwMDEgNDkuNTAwMUg3LjAwMDA4QzUuNjE5MzcgNDkuNTAwMSA0LjUwMDA4IDUwLjYxOTQgNC41MDAwOCA1Mi4wMDAxVjczQzQuNTAwMDggNzQuMzgwOCA1LjYxOTM2IDc1LjUgNy4wMDAwOCA3NS41SDI4WlwiIHN0cm9rZT1cIiMwRTEwM0RcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdQcm9maWxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA4MCA3MlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi41MDg3NCA0OS4xMjU2QzEwLjY3NjIgNDUuODQzNyAxNi4zMjg1IDQ0IDIyLjIyMjIgNDRINTcuNzc3OEM2My42NzE1IDQ0IDY5LjMyMzggNDUuODQzNyA3My40OTEzIDQ5LjEyNTZDNzcuNjU4NyA1Mi40MDc1IDgwIDU2Ljg1ODcgODAgNjEuNVY2OC41QzgwIDcwLjQzMyA3OS45NTQ2IDcyIDc3LjUgNzJDNzUuMDQ1NCA3MiA3NSA3MC40MzMgNzUgNjguNVY2MS41Qzc1IDU4LjcxNTIgNzIuNTAwNSA1NC40NjkxIDcwIDUyLjVDNjcuNDk5NSA1MC41MzA5IDYxLjMxNCA0OCA1Ny43Nzc4IDQ4SDIyLjIyMjJDMTguNjg2IDQ4IDExLjUwMDUgNTAuNTMwOSA5IDUyLjVDNi40OTk1MSA1NC40NjkxIDQuNSA1OC43MTUyIDQuNSA2MS41VjY4LjVDNC41IDcwLjQzMyA0Ljk1NDYgNzIgMi41IDcyQzAuMDQ1NDAwOSA3MiAwIDcwLjQzMyAwIDY4LjVWNjEuNUMwIDU2Ljg1ODcgMi4zNDEyNiA1Mi40MDc1IDYuNTA4NzQgNDkuMTI1NlpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTM5IDMuNTAwNDlDMjguOTkyNyA0LjAwMDQ5IDIzIDkuNSAyMyAxOS41QzIyIDI2IDI3LjUgMzYgMzkgMzZDNTAuNSAzNiA1NiAyOC41MDA1IDU2IDE5LjUwMDVDNTYgMTAuNTAwNSA0OS40Nzk2IDIuOTc2ODkgMzkgMy41MDA0OVpNMTkuNSAxOS41MDA1QzE5LjUgNy42MjYzNyAyNi45OTI3IDAuNTAwNDg4IDM5IDAuMDAwNDg4MjgxQzUxLjQ5MjcgMC4wMDA3Mzc0ODggNTkuNSA3LjYyNjM3IDU5LjUgMTkuNTAwNUM1OS41IDMyLjUwMDUgNTAuODc0MSAzOS4wMDA1IDM5IDM5LjAwMDVDMjcuMTI1OSAzOS4wMDA1IDE5LjUgMzEuMzc0NiAxOS41IDE5LjUwMDVaXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnTW9uZXknOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA0MiA0N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuOTE2NyAxMS4wNzg0TDIzLjkxNSAxMS4wNzc3SDIzLjkwNDVMMjMuODkzMiAxMS4wNzdIMjMuODkyM0wyMy44NzkyIDExLjA3NjNMMjMuODcyMiAxMS4wNzU2SDIzLjg2N0wyMy44MTU1IDExLjA3NDlIMTcuMjA2N0wxNy4xNTUyIDExLjA3NTZIMTcuMTUwOUwxNy4xNDMgMTEuMDc2M0wxNy4xMjk5IDExLjA3N0wxNy4xMTc3IDExLjA3NzdIMTcuMTA4MUwxNy4xMDQ2IDExLjA3ODRDMTYuODcgMTEuMDk4NiAxNi42NTggMTEuMTg1NSAxNi41MDAxIDExLjMxMzVMMTYuNDk1NyAxMS4zMTcxQzE2LjMxNzggMTEuNDY2NiAxNi4yMDYxIDExLjY3MjkgMTYuMjA2MSAxMS44OTg1QzE2LjIwNjEgMTIuMTI0OSAxNi4zMTc4IDEyLjMzMTIgMTYuNDk1NyAxMi40OEwxNi41MDAxIDEyLjQ4MzZDMTYuNjU4OSAxMi42MTIzIDE2Ljg3IDEyLjY5OTIgMTcuMTA0NiAxMi43MTg2TDE3LjEwODEgMTIuNzE5NEgxNy4xMTc3TDE3LjEyOTkgMTIuNzIwMUwxNy4xNDMgMTIuNzIwOEwxNy4xNTA5IDEyLjcyMTVIMTcuMTU1MkwxNy4yMDY3IDEyLjcyMjJIMjMuODE1NUwyMy44NjcgMTIuNzIxNUgyMy44NzIyTDIzLjg3OTIgMTIuNzIwOEwyMy44OTIzIDEyLjcyMDFIMjMuODkzMkwyMy45MDQ1IDEyLjcxOTRIMjMuOTE1TDIzLjkxNjcgMTIuNzE4NkMyNC4xNTE0IDEyLjY5ODUgMjQuMzYyNSAxMi42MTMgMjQuNTIxMyAxMi40ODM2TDI0LjUyNTYgMTIuNDhDMjQuNzAzNiAxMi4zMzA1IDI0LjgxNTIgMTIuMTI0MiAyNC44MTUyIDExLjg5ODVDMjQuODE1MiAxMS42NzIxIDI0LjcwMzYgMTEuNDY1OSAyNC41MjU2IDExLjMxNzFMMjQuNTIxMyAxMS4zMTM1QzI0LjM2MjUgMTEuMTg0OCAyNC4xNTE0IDExLjA5NzkgMjMuOTE2NyAxMS4wNzg0Wk0xOS42NDMxIDE4LjgyNzNDMTkuNjQzMSAxOC40MzI3IDIwLjAzMjIgMTguMTEyMSAyMC41MTExIDE4LjExMjFDMjAuOTkgMTguMTEyMSAyMS4zNzkxIDE4LjQzMjcgMjEuMzc5MSAxOC44MjczVjIwLjg1MjdDMjIuMTc2NCAyMC44ODc5IDIyLjk3MTEgMjAuOTk3MiAyMy43MjgzIDIxLjE4NDFDMjYuMjE1NCAyMS43OTkzIDI4LjMwNTUgMjMuMjQ2MiAyOC44OTM0IDI1LjY3MTJDMjguOTg2OCAyNi4wNTc5IDI4LjY4MTUgMjYuNDM0NSAyOC4yMTIxIDI2LjUxMTRDMjcuNzQyOCAyNi41ODg0IDI3LjI4NTcgMjYuMzM2OCAyNy4xOTI0IDI1Ljk1MDFDMjYuNzQ5MiAyNC4xMjMgMjUuMTQ1OSAyMy4wMjQ4IDIzLjIzNDYgMjIuNTUyNkMyMi42Mzg4IDIyLjQwNTkgMjIuMDEzMyAyMi4zMTY4IDIxLjM4IDIyLjI4MzhWMjkuMTI2M0MyMi4yNTU4IDI5LjEzMDYgMjMuMTU3OCAyOS4xODQ1IDI0LjE1MjMgMjkuNDMzOUMyNS4yNDcxIDI5LjcwNzcgMjYuMzUwNiAzMC4yMDIyIDI3LjEyODcgMzEuMDY1NEMyNy43NTQyIDMxLjc2MDUgMjguMTU4MSAzMi42NzU0IDI4LjE1ODEgMzMuODc3MkMyOC4xNTgxIDM1Ljc1NTMgMjYuNzQ3NSAzNy4xNjQ4IDI0Ljc0NzIgMzcuOTk3OEMyMy43Mzk3IDM4LjQxNjggMjIuNTc3NyAzOC42ODk5IDIxLjM4MDggMzguNzk1NlY0MC44ODIxQzIxLjM4MDggNDEuMjc2NyAyMC45OTE4IDQxLjU5NzMgMjAuNTEyOSA0MS41OTczQzIwLjAzNCA0MS41OTczIDE5LjY0NDkgNDEuMjc2NyAxOS42NDQ5IDQwLjg4MjFWMzguODMzN0MxOC44NDc2IDM4Ljc5ODUgMTguMDUyOSAzOC42ODk5IDE3LjI5NTcgMzguNTAzOEMxNC44MDk1IDM3Ljg4ODUgMTIuNzE5NCAzNi40NDEgMTIuMTMwNSAzNC4wMTY2QzEyLjAzNzIgMzMuNjI5OSAxMi4zNDI1IDMzLjI1MzMgMTIuODExOCAzMy4xNzY0QzEzLjI4MTIgMzMuMDk5NSAxMy43MzgzIDMzLjM1MTEgMTMuODMxNiAzMy43Mzc4QzE0LjI3NjUgMzUuNTY0OCAxNS44NzgxIDM2LjY2MzEgMTcuNzg5NCAzNy4xMzUzQzE4LjM4NTIgMzcuMjgxMiAxOS4wMTA3IDM3LjM3MSAxOS42NDQgMzcuNDA0MVYzMC41NjM4QzE4Ljc2ODIgMzAuNTU4NyAxNy44NjYyIDMwLjUwNDggMTYuODcxNyAzMC4yNTQ3QzE0Ljg3MDYgMjkuNzUxNiAxMi44NjY4IDI4LjU1OTkgMTIuODY2OCAyNS44MTE0QzEyLjg2NjggMjMuOTMyNiAxNC4yNzc0IDIyLjUyMzggMTYuMjc4NSAyMS42OTA4QzE3LjI4NTIgMjEuMjcxOCAxOC40NDcyIDIwLjk5NzIgMTkuNjQ0IDIwLjg5MjNWMTguODI4N0wxOS42NDMxIDE4LjgyNzNaTTIxLjM3OTEgMzAuNTUwMVYzNy4zNTY3QzIyLjMwOSAzNy4yNTg5IDIzLjE5NzkgMzcuMDQzMyAyMy45NjY1IDM2LjcyMzRDMjUuNDA1IDM2LjEyNCAyNi40MjA0IDM1LjE0NTEgMjYuNDIwNCAzMy44NzU4QzI2LjQyMDQgMzMuMDA5NyAyNi4xNTI1IDMyLjM3NDMgMjUuNzM4MiAzMS45MTM2QzI1LjIxNjUgMzEuMzM0MyAyNC40MzU4IDMwLjk5MjEgMjMuNjQ5OCAzMC43OTU5QzIyLjg3NiAzMC42MDE5IDIyLjEyNDEgMzAuNTU1MSAyMS4zOCAzMC41NTAxSDIxLjM3OTFaTTE5LjY0MzEgMjkuMTM3OFYyMi4zMzA1QzE4LjcxNSAyMi40MjgyIDE3LjgyNTIgMjIuNjQzOSAxNy4wNTY3IDIyLjk2MzdDMTUuNjE2NCAyMy41NjMxIDE0LjYwMTkgMjQuNTQxNCAxNC42MDE5IDI1LjgxMTRDMTQuNjAxOSAyNy43MTc1IDE1Ljk4ODkgMjguNTQ0MSAxNy4zNzMzIDI4Ljg5MTlDMTguMTQ4IDI5LjA4NiAxOC44OTkgMjkuMTMyNyAxOS42NDMxIDI5LjEzODVWMjkuMTM3OFpNMjMuMTQzOCA5LjY0MzgyQzIzLjE2MzkgOS41OTYzOCAyMy4xOTAxIDkuNTUxODIgMjMuMjIxNSA5LjUwOTQxTDI2Ljg1NDggMy41MjQzOEMyNS40MjA3IDMuOTA0NiAyMy42MDYyIDQuMzAyMDcgMjIuNjMyNyAyLjg5NjkxQzIxLjczNTkgMS42MDMxNiAyMC41MTQ2IDEuNjAyNDUgMjAuNTExMSAxLjYwMjQ1QzIwLjUwNzYgMS42MDI0NSAxOS4yODY0IDEuNjAzMTYgMTguMzg5NiAyLjg5NjkxQzE3LjQxNjEgNC4zMDIwNyAxNS42MDA3IDMuOTA0NiAxNC4xNjc1IDMuNTI0MzhMMTcuODM1NyA5LjU2NzYzTDE3Ljg3NTggOS42NDM4MkgyMy4xNDQ3SDIzLjE0MzhaTTE2LjA3MzUgOS44NDc5NUwxMi4wMTI4IDMuMTU4NTRDMTEuOTMwOCAzLjA0ODU3IDExLjg4MjggMi45MTk5MSAxMS44ODI4IDIuNzgxOTFDMTEuODgyOCAyLjA5MjYzIDEyLjMyMTYgMS44MzQ2IDEzLjA3MDkgMS44MzQ2QzEzLjQ2NTIgMS44MzQ2IDEzLjkzMDIgMS45NjAzOCAxNC40NjU4IDIuMTAzNDFDMTUuMzU5MSAyLjM0MzQ4IDE2LjU1ODUgMi42NjQ3NiAxNi44ODU3IDIuMTkzMjZDMTguMjg1OCAwLjE3MzU3IDIwLjUwNSAwLjE3Mjg1MiAyMC41MTIgMC4xNzI4NTJDMjAuNTE4MSAwLjE3Mjg1MiAyMi43MzgyIDAuMTczNTcgMjQuMTM4MyAyLjE5MzI2QzI0LjQ2NTQgMi42NjU0OCAyNS42NjQgMi4zNDM0OCAyNi41NTgyIDIuMTAzNDFDMjcuMDkyOSAxLjk2MDM4IDI3LjU1OTYgMS44MzQ2IDI3Ljk1MzEgMS44MzQ2QzI4LjcwMjQgMS44MzQ2IDI5LjE0MTIgMi4wOTI2MyAyOS4xNDEyIDIuNzgxOTFIMjkuMTM2OEMyOS4xMzY4IDIuODg5MDEgMjkuMTA4IDIuOTk4MjYgMjkuMDQ1MiAzLjEwMDMyTDI0Ljk0OTYgOS44NDc5NUMyNS4yNDcxIDkuOTYwNzkgMjUuNTE2NiAxMC4xMTY4IDI1Ljc0NiAxMC4zMDUxTDI1Ljc1MDQgMTAuMzA4N0wyNS43NzMxIDEwLjMyODFMMjUuNzc3NCAxMC4zMzE3QzI2LjI1NjQgMTAuNzM4NSAyNi41NTMgMTEuMjkxMiAyNi41NTMgMTEuODk4NUMyNi41NTMgMTIuNTE1OSAyNi4yNDQxIDEzLjA4MDIgMjUuNzUwNCAxMy40ODg0TDI1Ljc0NiAxMy40OTJMMjUuNzIyNSAxMy41MTA3TDI1LjcxODEgMTMuNTE0M0MyNS42NTg4IDEzLjU2MTcgMjUuNTk1MSAxMy42MDcgMjUuNTMxNCAxMy42NTAxQzMwLjIwMiAxNi4xOTQ1IDQ3LjM3MzEgMjYuNzExMyAzOC41MDg0IDM5LjYwMTNDMzYuNzg3MiA0Mi4xMDMzIDM0LjE3MiA0My43Mzc3IDMxLjAwNzEgNDQuNzE2N0MyNy45MTk5IDQ1LjY3MzMgMjQuMzExOSA0Ni4wMDA0IDIwLjUxMiA0NS45MTI3QzE2LjcxMjEgNDYuMDAwNCAxMy4xMDMyIDQ1LjY3NCAxMC4wMTY5IDQ0LjcxNjdDNi44NTIwMSA0My43Mzc3IDQuMjM2NzQgNDIuMTAzMyAyLjUxNTYxIDM5LjYwMTNDLTYuMzQ4MjQgMjYuNzExMyAxMC44MjAzIDE2LjE5NDUgMTUuNDkwOCAxMy42NTAxQzE1LjQxNTggMTMuNjAwNSAxNS4zNDQyIDEzLjU0ODEgMTUuMjc2MiAxMy40OTJMMTUuMjcxOCAxMy40ODg0TDE1LjI0OTIgMTMuNDY5TDE1LjI0NDggMTMuNDY1NEMxNC43NjU5IDEzLjA1ODYgMTQuNDY5MyAxMi41MDQ0IDE0LjQ2OTMgMTEuODk4NUMxNC40NjkzIDExLjI3OTcgMTQuNzc4MSAxMC43MTY5IDE1LjI3MTggMTAuMzA4N0wxNS4yNzYyIDEwLjMwNTFMMTUuMjk5OCAxMC4yODY0TDE1LjMwNDEgMTAuMjgyOEMxNS41Mjc0IDEwLjEwMzggMTUuNzg4MyA5Ljk1NTc2IDE2LjA3MzUgOS44NDc5NVpNMjMuMzE3NCAxNC4xNTI1SDE3LjcwNjVDMTcuNjM1IDE0LjIxODcgMTcuNTQ5NSAxNC4yNzI2IDE3LjQ1MzYgMTQuMzEyMUMxNi4zMTY5IDE0Ljg3MTMgLTUuMDk0NjkgMjUuNjQxOCA0LjAxOTUzIDM4Ljg5NjJDNS41MjI1NyA0MS4wODI3IDcuODI5MDQgNDIuNTE1OSAxMC42MjY2IDQzLjM4MTlDMTMuNDk0OSA0NC4yNzAzIDE2Ljg5MDkgNDQuNTcyOSAyMC40ODc2IDQ0LjQ4NzRIMjAuNTM0N0MyNC4xMzIyIDQ0LjU3MjkgMjcuNTI3NCA0NC4yNzAzIDMwLjM5NTYgNDMuMzgxOUMzMy4xOTMyIDQyLjUxNjYgMzUuNDk5NyA0MS4wODI3IDM3LjAwMjcgMzguODk2MkM0Ni4zNTE2IDI1LjMwMjUgMjMuNTgzNSAxNC4zMTkzIDIzLjUxOSAxNC4yODc3QzIzLjQ0MjIgMTQuMjUwMyAyMy4zNzQxIDE0LjIwNDMgMjMuMzE3NCAxNC4xNTI1WlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ01vbmV5TGlzdCc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjIyODYgMy44NjEzOFYzLjg2MjE3QzEyLjMxNDMgMy42ODEyOSAxMi4zNjQzIDMuNDkyNDMgMTIuMzY0MyAzLjI5ODgzVjIuNDg2MzNDMTIuMzY0MyAxLjE0MDYyIDEwLjE4MTUgMC4wNDg4MjgxIDcuNDg5MjYgMC4wNDg4MjgxQzQuNzk3MDYgMC4wNDg4MjgxIDIuNjE0MjYgMS4xNDA2MiAyLjYxNDI2IDIuNDg2MzNDMi42MTQyNiAyLjQxOTY4IDIuNjIzNzggMi4zNTQ2IDIuNjM0MDkgMi4yODk1NUMxLjYyNzIgMi43MzU0OSAwLjk4OTI1OCAzLjM4NjEyIDAuOTg5MjU4IDQuMTExMzNWNC45MjM4M0MwLjk4OTI1OCA1LjY3NzYzIDEuNjc0OCA2LjM1MTI2IDIuNzQ5OTUgNi43OTc5NkMyLjY2NDI1IDYuOTc4ODkgMi42MTQyNiA3LjE2NzcyIDIuNjE0MjYgNy4zNjEzM1Y4LjE3MzgzQzIuNjE0MjYgOC40NTk0NyAyLjcxNzQyIDguNzMxNjQgMi44OTgzMyA4Ljk4NjMzQzIuNzE3NDIgOS4yNDEwMiAyLjYxNDI2IDkuNTEzMTggMi42MTQyNiA5Ljc5ODgzVjEwLjYxMTNDMi42MTQyNiAxMS45NTcgNC43OTcwNiAxMy4wNDg4IDcuNDg5MjYgMTMuMDQ4OEMxMC4xODE1IDEzLjA0ODggMTIuMzY0MyAxMS45NTcgMTIuMzY0MyAxMC42MTEzVjkuNzk4ODNDMTIuMzY0MyA5LjUwODQxIDEyLjI1NzEgOS4yMzE1IDEyLjA3MTUgOC45NzM2M0MxMi4wNjk5IDguOTc1MjEgMTIuMDY4MyA4Ljk3NzU5IDEyLjA2NjcgOC45NzkxOUMxMi4yMDMyIDguNzg1NTkgMTIuMzEwMyA4LjU4NDA2IDEyLjM0NDQgOC4zNzA2MUMxMy4zNTEzIDcuOTIzODggMTMuOTg5MyA3LjI3NDAzIDEzLjk4OTMgNi41NDg4M1Y1LjczNjMzQzEzLjk4OTMgNC45ODI1NiAxMy4zMDM3IDQuMzA4MTEgMTIuMjI4NiAzLjg2MTM4Wk03LjQ4OTI2IDAuNDU1MDc4QzEwLjEyMjcgMC40NTUwNzggMTEuOTU4IDEuNTI1NDUgMTEuOTU4IDIuNDg2MzNDMTEuOTU4IDMuNDQ2NDIgMTAuMTIyNyA0LjUxNzU4IDcuNDg5MjYgNC41MTc1OEM0Ljg1NTc3IDQuNTE3NTggMy4wMjA1MSAzLjQ0NjQyIDMuMDIwNTEgMi40ODYzM0MzLjAyMDUxIDEuNTI1NDUgNC44NTU3NyAwLjQ1NTA3OCA3LjQ4OTI2IDAuNDU1MDc4Wk0xLjM5NTUxIDQuMTExMzNDMS4zOTU1MSAzLjYzNjgzIDEuODQ1NCAzLjEzNzc1IDIuNjE0MjYgMi43NTIxNFYzLjI5ODgzQzIuNjE0MjYgNC42NDQ1MyA0Ljc5NzA2IDUuNzM2MzMgNy40ODkyNiA1LjczNjMzQzcuODkxNTUgNS43MzYzMyA4LjI4MDMzIDUuNzA5MzQgOC42NTQwNSA1LjY2MzMzQzcuOTA4OTkgNS45NDk3NiA2Ljk2MjQgNi4xNDI1OCA1Ljg2NDI2IDYuMTQyNThDMy4yMzA3NyA2LjE0MjU4IDEuMzk1NTEgNS4wNzE0MiAxLjM5NTUxIDQuMTExMzNaTTExLjk1OCA5Ljc5ODgzQzExLjk1OCAxMC43NTg5IDEwLjEyMjcgMTEuODMwMSA3LjQ4OTI2IDExLjgzMDFDNC44NTU3NyAxMS44MzAxIDMuMDIwNTEgMTAuNzU4OSAzLjAyMDUxIDkuNzk4ODNDMy4wMjA1MSA5LjYzOTM1IDMuMDg4NzYgOS40Nzc0OCAzLjE4NDc2IDkuMzE3MTlDMy4xODM5NyA5LjMxNjQxIDMuMTgyMzcgOS4zMTQ4MSAzLjE4MTU5IDkuMzEzMjNDMy45OTk2NSAxMC4wODUzIDUuNjIxNDcgMTAuNjExMyA3LjQ4OTI2IDEwLjYxMTNDOS4zNTk0MyAxMC42MTEzIDEwLjk3MzMgMTAuMDgxMyAxMS43ODk4IDkuMzA3NjdDMTEuNzg5IDkuMzA4NDYgMTEuNzg5IDkuMzA4NDYgMTEuNzg4MiA5LjMwOTI1QzExLjg4ODIgOS40NzE5MiAxMS45NTggOS42MzYxOCAxMS45NTggOS43OTg4M1pNMTAuMjgwNyA4LjkxMzMzQzkuNTM0NzggOS4yMDA1NyA4LjU4ODE5IDkuMzkyNTggNy40ODkyNiA5LjM5MjU4QzQuODU1NzcgOS4zOTI1OCAzLjAyMDUxIDguMzIxNCAzLjAyMDUxIDcuMzYxMzNDMy4wMjA1MSA3LjIyMzI1IDMuMDY4MTIgNy4wODM2MSAzLjE0MDMzIDYuOTQ1NTZDMy41Mzg2NSA3LjA3OTY0IDMuOTc5IDcuMTg1MTkgNC40NDk1NCA3LjI1NThDNS4wNTU3MiA4LjI1NzEzIDYuOTE0MDEgOC45ODYzMyA5LjExNDI2IDguOTg2MzNDOS41MTgxMiA4Ljk4NjMzIDkuOTA4NSA4Ljk1OTM2IDEwLjI4MzggOC45MTI1NEMxMC4yODMgOC45MTI1NCAxMC4yODIyIDguOTEzMzMgMTAuMjgwNyA4LjkxMzMzWk05LjExNDI2IDcuNzY3NThDOC4wNzE2NyA3Ljc2NzU4IDcuMTYyMzUgNy41OTYxOSA2LjQzMzk1IDcuMzMzNTVDOC43MjQ2NiA3LjE5ODY1IDEwLjUzMzcgNi4yNzkwNSAxMC43MTk0IDUuMTIwNjFDMTEuMjcyNCA0Ljg3NTQzIDExLjcxNTIgNC41Njk5MyAxMi4wMDAxIDQuMjIyNDFDMTEuOTk5MyA0LjIyMjQxIDExLjk5OTMgNC4yMjI0MSAxMS45OTkzIDQuMjIyNDFDMTIuOTgzMiA0LjYyMjMxIDEzLjU4MyA1LjE5MzYgMTMuNTgzIDUuNzM2MzNDMTMuNTgzIDYuNjk2NCAxMS43NDc3IDcuNzY3NTggOS4xMTQyNiA3Ljc2NzU4Wk04LjM1NzMxIDMuMDc4MjZDOC4zNTczMSAyLjk5MjU3IDguMjg5MDYgMi45MjY3IDguMTUyNjEgMi44ODMwNkM4LjAxNjE0IDIuODM4NjIgNy43MTIyNCAyLjc4MTQ5IDcuMjQxNzIgMi43MTMyNEM2LjgxODgyIDIuNjUzNzMgNi40ODc5MyAyLjU5NDIxIDYuMjQ5ODkgMi41MzU1MUM2LjAxMTg1IDIuNDc2ODEgNS44MTgyNSAyLjM5NDI2IDUuNjY5ODcgMi4yODk1M0M1LjUyMTQ4IDIuMTgzMTkgNS40NDY5MSAyLjA1OTQxIDUuNDQ2OTEgMS45MTk3NkM1LjQ0NjkxIDEuNzM1NjggNS41ODAyMSAxLjU2OTA0IDUuODQ1MjQgMS40MjE0N0M2LjExMDI3IDEuMjc0NjkgNi41Mjc2MSAxLjE4NTAxIDcuMDk3MzMgMS4xNTE3VjAuODYxMzI4SDcuODY2OTlWMS4xNTE3NUM4LjcyNzEgMS4xOTQ2MSA5LjI4NDEyIDEuMzkyOTYgOS41MzcyMSAxLjc1MDAzTDguNDc3MTYgMS45Mjc3NkM4LjI3MDA3IDEuNjgzMzggNy45NTEwNiAxLjU2MTE3IDcuNTE3ODcgMS41NjExN0M3LjMwMDQ1IDEuNTYxMTcgNy4xMjU4OSAxLjU4ODE2IDYuOTk0OTggMS42NDM2OUM2Ljg2MzI1IDEuNjk3NjQgNi43OTc0MSAxLjc2NDI5IDYuNzk3NDEgMS44NDIwN0M2Ljc5NzQxIDEuOTIxNDEgNi44NjA4OSAxLjk4MTcxIDYuOTg3ODQgMi4wMjQ1N0M3LjExNDAxIDIuMDY2NjIgNy4zODYxNyAyLjExODIxIDcuODAxOTQgMi4xODE2OUM4LjI1ODk3IDIuMjQ5OTQgOC42MTc2MiAyLjMxNDIxIDguODc3MDggMi4zNzUyOUM5LjEzNzM0IDIuNDM1NiA5LjM0NDQyIDIuNTE5NzIgOS40OTk5NCAyLjYyNjgxQzkuNjU0NjcgMi43MzM5NCA5LjczMjM5IDIuODU5MjkgOS43MzIzOSAzLjAwMjExQzkuNzMyMzkgMy4yMjI3MSA5LjU3MjEzIDMuNDA1MTkgOS4yNTIzOCAzLjU1MTk3QzguOTMyNjEgMy42OTg3NiA4LjQ3MDgzIDMuNzg1MjYgNy44NjY5OSAzLjgxMTQ0VjQuMTg3NUg3LjA5NzMzVjMuODEyOTlDNi4wOTA0NCAzLjc3MDk0IDUuNDY3NTYgMy41MzA1MiA1LjIyNzE2IDMuMDk0MUw2LjQxNzM0IDIuOTY3MTVDNi41Mjc2NCAzLjI0MTcgNi44OTI2MyAzLjM3ODk2IDcuNTEyMzEgMy4zNzg5NkM3LjgwMTg5IDMuMzc4OTYgOC4wMTYxNiAzLjM0OTYxIDguMTUyNjQgMy4yOTA4OEM4LjI4OTExIDMuMjMyMTUgOC4zNTczMSAzLjE2MTU3IDguMzU3MzEgMy4wNzgyNlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1NldHRpbmdzJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA0NSA0NVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIuNjI2NyAxNy4xNTk5SDM4LjUxMDJDMzcuODQ4NiAxNy4xNTk5IDM3LjMwMzUgMTYuNzk1NyAzNy4wNTAxIDE2LjE4NDZDMzYuNzk2NyAxNS41NzM1IDM2LjkyNTQgMTQuOTI5OCAzNy4zOTIzIDE0LjQ2MjFMNDAuMzAyOCAxMS41NTI0QzQwLjczMDYgMTEuMTI0NiA0MC45NjYxIDEwLjU1NSA0MC45NjYxIDkuOTUwNDZDNDAuOTY2MSA5LjM0NTA1IDQwLjczMDYgOC43NzYzMSA0MC4zMDI4IDguMzQ3NzJMMzYuNTkzIDQuNjM3ODdDMzUuNzM3NCAzLjc4MjMxIDM0LjI0NTUgMy43ODA2OCAzMy4zODgzIDQuNjM3ODdMMzAuNDc4NiA3LjU0NzU3QzMwLjAxMDkgOC4wMTQ0NiAyOS4zNjU1IDguMTQ0ODMgMjguNzU2MSA3Ljg5MDYxQzI4LjE0NSA3LjYzNzIgMjcuNzgwNyA3LjA5MjA5IDI3Ljc4MDcgNi40MzA0NlYyLjMxNDAxQzI3Ljc4MDcgMS4wNjQ5IDI2Ljc2NDcgMC4wNDg4MjgxIDI1LjUxNTUgMC4wNDg4MjgxSDIwLjI2ODFDMTkuMDE5IDAuMDQ4ODI4MSAxOC4wMDMgMS4wNjQ5IDE4LjAwMyAyLjMxNDAxVjYuNDMwNDZDMTguMDAzIDcuMDkyMDkgMTcuNjM4NyA3LjYzNzIgMTcuMDI3NiA3Ljg5MDYxQzE2LjQxODEgOC4xNDU2NCAxNS43NzI4IDguMDE0NDYgMTUuMzA1MSA3LjU0NzU3TDEyLjM5NTQgNC42Mzc4N0MxMS41MzgyIDMuNzgwNjggMTAuMDQ2MyAzLjc4MjMxIDkuMTkwNzMgNC42Mzc4N0w1LjQ4MDg4IDguMzQ3NzJDNS4wNTMxIDguNzc1NSA0LjgxNzYyIDkuMzQ1MDUgNC44MTc2MiA5Ljk1MDQ2QzQuODE3NjIgMTAuNTU1IDUuMDUzMSAxMS4xMjM4IDUuNDgwODggMTEuNTUyNEw4LjM5MTQgMTQuNDYyMUM4Ljg1ODI5IDE0LjkyOTggOC45ODYyMiAxNS41NzM1IDguNzMzNjIgMTYuMTg0NkM4LjQ4MTAzIDE2Ljc5NTcgNy45MzUxIDE3LjE1OTkgNy4yNzM0OCAxNy4xNTk5SDMuMTU3MDNDMS45MDc5MiAxNy4xNTk5IDAuODkxODQ2IDE4LjE3NiAwLjg5MTg0NiAxOS40MjUxVjI0LjY3MTdDMC44OTE4NDYgMjUuOTIxNiAxLjkwNzkyIDI2LjkzNzcgMy4xNTcwMyAyNi45Mzc3SDcuMjczNDhDNy45MzUxIDI2LjkzNzcgOC40ODAyMiAyNy4zMDE5IDguNzMzNjIgMjcuOTEzQzguOTg3MDMgMjguNTI0MiA4Ljg1ODI5IDI5LjE2NzkgOC4zOTE0IDI5LjYzNTZMNS40ODA4OCAzMi41NDUzQzUuMDUzMSAzMi45NzMgNC44MTc2MiAzMy41NDI2IDQuODE3NjIgMzQuMTQ3MkM0LjgxNzYyIDM0Ljc1MjYgNS4wNTMxIDM1LjMyMTMgNS40ODA4OCAzNS43NDk5TDkuMTkwNzMgMzkuNDU5OEMxMC4wNDcxIDQwLjMxNjIgMTEuNTM4MiA0MC4zMTc4IDEyLjM5NTQgMzkuNDU5OEwxNS4zMDUxIDM2LjU0OTNDMTUuNzcyOCAzNi4wODI0IDE2LjQxNTcgMzUuOTUzNiAxNy4wMjc2IDM2LjIwNzFDMTcuNjM4NyAzNi40NjA1IDE4LjAwMyAzNy4wMDU2IDE4LjAwMyAzNy42NjcyVjQxLjc4MzZDMTguMDAzIDQzLjAzMjggMTkuMDE5IDQ0LjA0ODggMjAuMjY4MSA0NC4wNDg4SDI1LjUxNDdDMjYuNzYzOCA0NC4wNDg4IDI3Ljc3OTkgNDMuMDMyOCAyNy43Nzk5IDQxLjc4MzZWMzcuNjY3MkMyNy43Nzk5IDM3LjAwNTYgMjguMTQ0MSAzNi40NjA1IDI4Ljc1NTMgMzYuMjA3MUMyOS4zNjcyIDM1Ljk1MjggMzAuMDEwMSAzNi4wODI0IDMwLjQ3NzggMzYuNTQ5M0wzMy4zODc1IDM5LjQ1OThDMzQuMjQ0NyA0MC4zMTcgMzUuNzM2NiA0MC4zMTUzIDM2LjU5MjEgMzkuNDU5OEw0MC4zMDIgMzUuNzQ5OUM0MC43Mjk4IDM1LjMyMjIgNDAuOTY1MyAzNC43NTI2IDQwLjk2NTMgMzQuMTQ3MkM0MC45NjUzIDMzLjU0MjYgNDAuNzI5OCAzMi45NzM5IDQwLjMwMiAzMi41NDUzTDM3LjM5MTUgMjkuNjM1NkMzNi45MjQ2IDI5LjE2NzkgMzYuNzk2NyAyOC41MjQyIDM3LjA0OTMgMjcuOTEzQzM3LjMwMTggMjcuMzAxOSAzNy44NDg2IDI2LjkzNzcgMzguNTEwMiAyNi45Mzc3SDQyLjYyNjdDNDMuODc1OCAyNi45Mzc3IDQ0Ljg5MTggMjUuOTIxNiA0NC44OTE4IDI0LjY3MjVWMTkuNDI1MUM0NC44OTE4IDE4LjE3NiA0My44NzU4IDE3LjE1OTkgNDIuNjI2NyAxNy4xNTk5Wk00My4yNjIyIDI0LjY3MjVDNDMuMjYyMiAyNS4wMjI5IDQyLjk3NyAyNS4zMDgxIDQyLjYyNjcgMjUuMzA4MUgzOC41MTAyQzM3LjE4NyAyNS4zMDgxIDM2LjA1MDMgMjYuMDY3NSAzNS41NDQzIDI3LjI4OTdDMzUuMDM3NSAyOC41MTE5IDM1LjMwMzkgMjkuODUzMSAzNi4yNDAxIDMwLjc4ODVMMzkuMTUwNyAzMy42OTgyQzM5LjM5OTIgMzMuOTQ2OCAzOS4zOTkyIDM0LjM1MDEgMzkuMTUwNyAzNC41OTc4TDM1LjQ0MDggMzguMzA3NkMzNS4xOTMxIDM4LjU1NTMgMzQuNzg5OCAzOC41NTcgMzQuNTQxMyAzOC4zMDc2TDMxLjYzMTUgMzUuMzk3MUMzMC42OTUzIDM0LjQ2MDkgMjkuMzU1IDM0LjE5NjEgMjguMTMyNyAzNC43MDEzQzI2LjkxMDUgMzUuMjA3MyAyNi4xNTExIDM2LjM0MzkgMjYuMTUxMSAzNy42NjcyVjQxLjc4MzZDMjYuMTUxMSA0Mi4xMzQgMjUuODY1OSA0Mi40MTkyIDI1LjUxNTUgNDIuNDE5MkgyMC4yNjgxQzE5LjkxNzggNDIuNDE5MiAxOS42MzI2IDQyLjEzNCAxOS42MzI2IDQxLjc4MzZWMzcuNjY3MkMxOS42MzI2IDM2LjM0MzkgMTguODczMiAzNS4yMDczIDE3LjY1MSAzNC43MDEzQzE3LjI0MTEgMzQuNTMxIDE2LjgxOSAzNC40NDc5IDE2LjQwMTggMzQuNDQ3OUMxNS41NzU2IDM0LjQ0NzkgMTQuNzc0NyAzNC43NzM4IDE0LjE1MjEgMzUuMzk2M0wxMS4yNDI0IDM4LjMwNjhDMTAuOTkzMSAzOC41NTYyIDEwLjU4OTggMzguNTU0NSAxMC4zNDI5IDM4LjMwNjhMNi42MzMwMyAzNC41OTdDNi4zODQ1MSAzNC4zNDg1IDYuMzg0NTEgMzMuOTQ1MSA2LjYzMzAzIDMzLjY5NzRMOS41NDM1NSAzMC43ODc3QzEwLjQ3OSAyOS44NTIzIDEwLjc0NjIgMjguNTExMSAxMC4yMzk0IDI3LjI4ODlDOS43MzM0IDI2LjA2NzUgOC41OTY3MyAyNS4zMDgxIDcuMjczNDggMjUuMzA4MUgzLjE1NzAzQzIuODA2NjYgMjUuMzA4MSAyLjUyMTQ4IDI1LjAyMjkgMi41MjE0OCAyNC42NzI1VjE5LjQyNTFDMi41MjE0OCAxOS4wNzQ4IDIuODA2NjYgMTguNzg5NiAzLjE1NzAzIDE4Ljc4OTZINy4yNzM0OEM4LjU5NjczIDE4Ljc4OTYgOS43MzM0IDE4LjAzMDIgMTAuMjM5NCAxNi44MDc5QzEwLjc0NjIgMTUuNTg1NyAxMC40Nzk4IDE0LjI0NDUgOS41NDM1NSAxMy4zMDkxTDYuNjMzMDMgMTAuMzk5NEM2LjM4NDUxIDEwLjE1MDkgNi4zODQ1MSA5Ljc0NzU3IDYuNjMzMDMgOS40OTk4NkwxMC4zNDI5IDUuNzkwMDFDMTAuNTkwNiA1LjU0MTQ5IDEwLjk5MzkgNS41NDE0OSAxMS4yNDI0IDUuNzkwMDFMMTQuMTUyMSA4LjY5OTcyQzE1LjA4NjcgOS42MzQzMSAxNi40MjcxIDkuOTAyMzggMTcuNjUxIDkuMzk1NTdDMTguODczMiA4Ljg5MDM4IDE5LjYzMjYgNy43NTM3MiAxOS42MzI2IDYuNDMwNDZWMi4zMTQwMUMxOS42MzI2IDEuOTYzNjQgMTkuOTE3OCAxLjY3ODQ2IDIwLjI2ODEgMS42Nzg0NkgyNS41MTQ3QzI1Ljg2NTkgMS42Nzg0NiAyNi4xNTExIDEuOTYzNjQgMjYuMTUxMSAyLjMxNDAxVjYuNDMwNDZDMjYuMTUxMSA3Ljc1MzcyIDI2LjkxMDUgOC44OTAzOCAyOC4xMzI3IDkuMzk2MzhDMjkuMzU2NiA5LjkwMzIgMzAuNjk2MSA5LjYzNTk0IDMxLjYzMTUgOC43MDA1M0wzNC41NDEzIDUuNzkwODNDMzQuNzkwNiA1LjU0MjMxIDM1LjE5MzkgNS41NDIzMSAzNS40NDA4IDUuNzkwODNMMzkuMTUwNyA5LjUwMDY4QzM5LjM5OTIgOS43NDkyIDM5LjM5OTIgMTAuMTUyNSAzOS4xNTA3IDEwLjQwMDJMMzYuMjQwMSAxMy4zMDk5QzM1LjMwNDcgMTQuMjQ1MyAzNS4wMzc1IDE1LjU4NjUgMzUuNTQ0MyAxNi44MDg4QzM2LjA1MDMgMTguMDMxIDM3LjE4NyAxOC43OTA0IDM4LjUxMDIgMTguNzkwNEg0Mi42MjY3QzQyLjk3NyAxOC43ODk2IDQzLjI2MjIgMTkuMDc0OCA0My4yNjIyIDE5LjQyNTFWMjQuNjcyNVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMi44OTE5IDE0LjcxNThDMTguODQ4IDE0LjcxNTggMTUuNTU4NiAxOC4wMDUyIDE1LjU1ODYgMjIuMDQ5MkMxNS41NTg2IDI2LjA5MzEgMTguODQ4IDI5LjM4MjUgMjIuODkxOSAyOS4zODI1QzI2LjkzNTkgMjkuMzgyNSAzMC4yMjUzIDI2LjA5MzEgMzAuMjI1MyAyMi4wNDkyQzMwLjIyNTMgMTguMDA1MiAyNi45MzU5IDE0LjcxNTggMjIuODkxOSAxNC43MTU4Wk0yMi44OTE5IDI3Ljc1MjlDMTkuNzQ3NiAyNy43NTI5IDE3LjE4ODIgMjUuMTkzNSAxNy4xODgyIDIyLjA0OTJDMTcuMTg4MiAxOC45MDQ4IDE5Ljc0NzYgMTYuMzQ1NCAyMi44OTE5IDE2LjM0NTRDMjYuMDM2MyAxNi4zNDU0IDI4LjU5NTYgMTguOTA0OCAyOC41OTU2IDIyLjA0OTJDMjguNTk1NiAyNS4xOTM1IDI2LjAzNjMgMjcuNzUyOSAyMi44OTE5IDI3Ljc1MjlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgY2FzZSAnVGVsZWdyYW0nOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDY1IDQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MC4wMTk0IDEuNTY4M0w2MC4wMTk1IDEuNTY4MzdMNjAuMDMwNSAxLjU2NDgxQzYxLjA0MzggMS4yMzc2NyA2MS44NDI0IDEuMTA3MjMgNjIuNDQ0OCAxLjExNjE1QzYzLjA0NDkgMS4xMjUwMyA2My4zODY0IDEuMjY5NjQgNjMuNTc4OSAxLjQyNTk2QzYzLjkyIDEuNzAyOTIgNjQuMjM0OCAyLjQ0NzA2IDYzLjc2MDUgNC4xODQ2MUw2My43NjA0IDQuMTg0Nkw2My43NTggNC4xOTM5NUw1NC4yMjMxIDQwLjQ5OTVMNTQuMjIxMiA0MC41MDY4TDU0LjIxOTQgNDAuNTE0MUM1My44ODgyIDQxLjg1NzEgNTMuMzY5OSA0Mi40ODg1IDUyLjgxMjIgNDIuNzMzM0M1Mi4yNDA2IDQyLjk4NDEgNTEuMjg2MSA0Mi45ODI2IDQ5LjcyMzYgNDIuMjQ3TDM1LjIyOTYgMzMuNTE5NEwzNC42NDgyIDMzLjE2OTNMMzQuMTA4MiAzMy41ODAyTDI1LjYzOTEgNDAuMDI0MkMyNS4wMzYyIDQwLjQzNDMgMjQuMjI5MSA0MC40MzU4IDIzLjY4OTUgMzkuODE4MkwyNC41Njk2IDMxLjE4Nkw1NC44OCA5LjExNzI0QzU0Ljg4MTMgOS4xMTYyNyA1NC44ODI3IDkuMTE1MzEgNTQuODg0IDkuMTE0MzRDNTUuMTM2MSA4LjkzNDE2IDU1LjM1OTcgOC43NDM2MyA1NS41MzQ4IDguNTQwMDNDNTUuNjk5IDguMzQ5MTMgNTUuODkzNCA4LjA2Mjk5IDU1Ljk0MTUgNy42OTUyOEM1NS45OTkzIDcuMjUzOTcgNTUuODI2MSA2Ljg0OTIzIDU1LjUxMzUgNi41ODE2M0M1NS4yNTExIDYuMzU3MDYgNTQuOTQ0OSA2LjI3MTYyIDU0LjcyNTEgNi4yMzQ5QzU0LjI3MjEgNi4xNTkyNCA1My43NDI3IDYuMjE4OSA1My4yMzgxIDYuMzQ2MjdDNTIuNzIyNSA2LjQ3NjQzIDUyLjE1NzIgNi42OTYzNCA1MS42MDAyIDcuMDExNDdMMTYuMjM3NCAyNC41ODU4TDEuODcwMSAyMC45MTQzQzEuMzUwOTIgMjAuNzI0NCAxLjExODg5IDIwLjUzNyAxLjAzMjk2IDIwLjQzNDJDMS4wMTc0NyAyMC40MTU3IDEuMDA4MzEgMjAuNDAxOSAxLjAwMzEgMjAuMzkyOUMxLjAxODI5IDIwLjM0NzcgMS4wODg4MSAyMC4yMDU5IDEuMzM3NzYgMjAuMDA3MUMxLjU4ODQyIDE5LjgwNjkgMS45NjE1NCAxOS41OTc3IDIuNDU0MjEgMTkuNDE4OUw2MC4wMTk0IDEuNTY4M1pNMC45OTY5MiAyMC4zODA0QzAuOTk2OTQ0IDIwLjM4MDQgMC45OTcxMjggMjAuMzgwOCAwLjk5NzQwNiAyMC4zODE3TDAuOTk2OTIgMjAuMzgwNFpcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdPdXQnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDI1IDI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS42MzU4IDE4LjI0MjlDMTEuNDQwMyAxOC40MjQ0IDExLjQ0MDMgMTguNzE3OCAxMS42MzU4IDE4Ljg5OTRDMTEuNzMzMyAxOC45ODk5IDExLjg2MTMgMTkuMDM1NCAxMS45ODkzIDE5LjAzNTRDMTIuMTE3MyAxOS4wMzU0IDEyLjI0NTMgMTguOTg5OSAxMi4zNDI4IDE4Ljg5OTRMMTguMzQyMyAxMy4zMjg0QzE4LjM4ODggMTMuMjg1NyAxOC40MjUzIDEzLjIzNDIgMTguNDUwOCAxMy4xNzcxQzE4LjUwMTMgMTMuMDYzOCAxOC41MDEzIDEyLjkzNjEgMTguNDUwOCAxMi44MjIzQzE4LjQyNTMgMTIuNzY1MiAxOC4zODgzIDEyLjcxMzcgMTguMzQyMyAxMi42NzA1TDEyLjM0MjggNy4xMDAwMkMxMi4xNDczIDYuOTE4NDggMTEuODMxMyA2LjkxODQ4IDExLjYzNTggNy4xMDAwMkMxMS40NDAzIDcuMjgxNTUgMTEuNDQwMyA3LjU3NDk4IDExLjYzNTggNy43NTY1MkwxNi43ODIzIDEyLjUzNTRIMS40ODkyNkMxLjIxMjc2IDEyLjUzNTQgMC45ODkyNTggMTIuNzQyOSAwLjk4OTI1OCAxMi45OTk3QzAuOTg5MjU4IDEzLjI1NjQgMS4yMTI3NiAxMy40NjQgMS40ODkyNiAxMy40NjRIMTYuNzgyM0wxMS42MzU4IDE4LjI0MjlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuNDg5MyAwSDUuOTg5MjZDNS43MTI3NiAwIDUuNDg5MjYgMC4yMDc1MzYgNS40ODkyNiAwLjQ2NDI4NlYxMC4yMTQzQzUuNDg5MjYgMTAuNDcxIDUuNzEyNzYgMTAuNjc4NiA1Ljk4OTI2IDEwLjY3ODZDNi4yNjU3NiAxMC42Nzg2IDYuNDg5MjYgMTAuNDcxIDYuNDg5MjYgMTAuMjE0M1YwLjkyODU3MUgyMy45ODkzVjI1LjA3MTRINi40ODkyNlYxNS43ODU3QzYuNDg5MjYgMTUuNTI5IDYuMjY1NzYgMTUuMzIxNCA1Ljk4OTI2IDE1LjMyMTRDNS43MTI3NiAxNS4zMjE0IDUuNDg5MjYgMTUuNTI5IDUuNDg5MjYgMTUuNzg1N1YyNS41MzU3QzUuNDg5MjYgMjUuNzkyNSA1LjcxMjc2IDI2IDUuOTg5MjYgMjZIMjQuNDg5M0MyNC43NjU4IDI2IDI0Ljk4OTMgMjUuNzkyNSAyNC45ODkzIDI1LjUzNTdWMC40NjQyODZDMjQuOTg5MyAwLjIwNzUzNiAyNC43NjU4IDAgMjQuNDg5MyAwWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgY2FzZSAnSG9tZU9mZmljZVN2Zyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI3MFwiIHZpZXdCb3g9XCIwIDAgODAgNzBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjUwMDQgNjcuNzI0N0gxMS4wMDA0QzEyLjUwMDQgNjcuNzI0NyAxMi41MDA0IDY3LjcyNDUgMTIuNTAwNCA2Ny43MjQzVjY3LjcyMzJWNjcuNzE5VjY3LjcxMlY2Ny43MDc0VjY3LjcwMjJWNjcuNjk2M1Y2Ny42ODk3VjY3LjY3NDRWNjcuNjY1OFY2Ny42NTY0VjY3LjYzNThWNjcuNjI0NVY2Ny42MTI1VjY3LjU4NjVWNjcuNTU4VjY3LjU0MjdWNjcuNTI2OFY2Ny41MTAzVjY3LjQ5MzFWNjcuNDc1M1Y2Ny40NTY4VjY3LjQzNzhWNjcuNDE4VjY3LjM5NzdWNjcuMzc2N1Y2Ny4zNTUyVjY3LjMzM1Y2Ny4zMTAyVjY3LjI4NjdWNjcuMjYyN1Y2Ny4yMzgxVjY3LjIxMjhWNjcuMTg3VjY3LjE2MDVWNjcuMTMzNVY2Ny4xMDU4VjY3LjA3NzZWNjcuMDQ4OFY2Ny4wMTk0VjY2Ljk4OTRWNjYuOTU4OVY2Ni45Mjc4VjY2Ljg5NlY2Ni44MzA5VjY2Ljc5NzVWNjYuNzYzNlY2Ni42OTM5VjY2LjY1ODNWNjYuNjIyMVY2Ni41ODU0VjY2LjU0ODFWNjYuNTEwM1Y2Ni40NzE5VjY2LjQzM1Y2Ni4zOTM1VjY2LjM1MzZWNjYuMzEzMVY2Ni4yNzJWNjYuMjMwNVY2Ni4xNDU4VjY2LjEwMjdWNjYuMDU5MVY2Ni4wMTVWNjUuOTcwNFY2NS45MjUyVjY1Ljg3OTZWNjUuNzg2OFY2NS43Mzk3VjY1LjY5MjFWNjUuNjQ0VjY1LjU5NTRWNjUuNTQ2M1Y2NS40OTY4VjY1LjQ0NjdWNjUuMzk2MlY2NS4yOTM4VjY1LjI0MTlWNjUuMTg5NVY2NS4xMzY3VjY1LjA4MzRWNjUuMDI5N1Y2NC45NzU1VjY0Ljg2NThWNjQuODEwM1Y2NC43NTQzVjY0LjY0MTFWNjQuNTI2MVY2NC40MDk0VjY0LjI5MVY2NC4xNzFWNjQuMTEwNFY2NC4wNDk0VjYzLjk4NzlWNjMuOTI2MVY2My42NzQ4VjYzLjYxMDlWNjMuNTQ2N1Y2My40MTcyVjYzLjI4NjJWNjMuMTUzN1Y2My4wMTk3VjYyLjg4NDNWNjIuODE2VjYyLjc0NzRWNjIuNjc4NVY2Mi42MDkyVjYyLjQ2OTZWNjIuMzI4NlY2Mi4xODYzVjYyLjExNDdWNjIuMDQyN1Y2MS45NzA0VjYxLjg5NzhWNjEuNzUxN1Y2MS40NTU3VjYxLjM4MDlWNjEuMzA1OVY2MS4yMzA1VjYxLjE1NDlWNjAuNTM5N1Y2MC4zODMyVjYwLjIyNTZWNjAuMTQ2NVY2MC4wNjdWNTkuOTg3NFY1OS45MDc1VjU5LjI1OTZWNTkuMDk1NFY1OS4wMTNWNTguOTMwM1Y1OC43NjQ0VjU4LjY4MTFWNTguNTk3NlY1Ny45MjI5VjU3LjU4MTFWNTcuNDA5MlY1Ny4yMzY3VjU3LjE1MDJWNTcuMDYzNlY1Ni44ODk5VjU2LjU0MDdWNTYuMTg5NFY1NS44MzYxVjU1LjY1ODhWNTUuNTdWNTUuNDgxMVY1NS4xMjQ1VjU0Ljk0NTZWNTQuNzY2NVY1NC41ODdWNTQuNDk3MVY1NC40MDcyVjU0LjA0NjhWNTMuODY2M1Y1My43NzZWNTMuNjg1NlY1My4zMjM3VjUyLjk2MTJWNTIuODcwNVY1Mi43Nzk4VjUyLjU5ODRWNTIuNTA3NlY1Mi40MTY5VjUyLjIzNTRWNTIuMTQ0NlY1Mi4wNTM5VjUxLjk2MzFWNTEuODcyNFY1MS43ODE3VjUxLjY5MDlWNTEuNjAwMlY1MS41MDk2VjUxLjQxODlWNTEuMzI4M1Y1MS4yMzc3VjUxLjE0NzFWNTEuMDU2NlY1MC45NjZWNTAuODc1NlY1MC43ODUyVjUwLjY5NDhWNTAuNjA0NFY1MC41MTQyVjUwLjQyMzlWNTAuMzMzOFY1MC4yNDM2VjUwLjE1MzZWNTAuMDYzNlY0OS45NzM3VjQ5Ljg4MzhWNDkuNzk0VjQ5LjcwNDNWNDkuNjE0N1Y0OS41MjUxVjQ5LjQzNTdWNDkuMzQ2M1Y0OS4yNTdWNDkuMTY3OFY0OS4wNzg3VjQ4Ljk4OTdWNDguOTAwN1Y0OC44MTE5VjQ4LjcyMzJWNDguNjM0NlY0OC41NDYxVjQ4LjQ1NzhWNDguMzY5NVY0OC4yODE0VjQ4LjE5MzRWNDguMTA1NVY0OC4wMTc3VjQ3LjkzMDFWNDcuODQyNlY0Ny43NTUyVjQ3LjY2OFY0Ny41ODA5VjQ3LjQ5NFY0Ny40MDcyVjQ3LjMyMDVWNDcuMjM0VjQ3LjE0NzdWNDcuMDYxNVY0Ni45NzU1VjQ2Ljg4OTZWNDYuODA0VjQ2LjcxODRWNDYuNjMzMVY0Ni41NDc5VjQ2LjQ2MjlWNDYuMzc4MVY0Ni4yOTM1VjQ2LjIwOVY0Ni4xMjQ4VjQ2LjA0MDdWNDUuOTU2OFY0NS44NzMxVjQ1Ljc4OTdWNDUuNzA2NFY0NS42MjMzVjQ1LjU0MDVWNDUuNDU3OFY0NS4zNzU0VjQ1LjI5MzFWNDUuMjExMVY0NS4xMjk0VjQ1LjA0NzhWNDQuOTY2NVY0NC44ODU0VjQ0LjgwNDVWNDQuNzIzOVY0NC41NjMzVjQ0LjI0NTJWNDQuMDg3NlY0My45MzExVjQzLjYyMTNWNDMuMzE1OVY0My4wMTUxVjQyLjcxOTFWNDIuNDI4MVY0Mi4xNDIyVjQxLjg2MTZWNDEuNTg2NVY0MS4zMTcxVjQxLjI1MDdWNDEuMTg0NlY0MS4wNTM1VjQwLjkyNFY0MC43OTZWNDAuNTQ0N1Y0MC4wNjE0VjM5Ljk0NDdWMzkuODg3VjM5LjgyOTdWMzkuNjA1VjM5LjE3N1YzOS4wNzQ1VjM5LjAyNFYzOC45NzRWMzguNzc4N1YzOC41OTEyVjM4LjUwMDRWMzguNDU1OFYzOC40MTE3VjM4LjA3NzJWMzcuNDQ1OUw0MC40ODI5IDEzLjk4MjFMNjYuODExIDM3LjQxOTFWNjcuMjA5NVY2Ny4yNDMzTDY2LjgxMTcgNjcuMjU4QzY2LjgxMTcgNjcuMjYwMiA2Ni44MTE2IDY3LjI2MyA2Ni44MTE1IDY3LjI2NjNDNjYuODExIDY3LjI4NzMgNjYuODA5MSA2Ny4zMjY3IDY2LjgwMjkgNjcuMzc3NkM2Ni43ODk3IDY3LjQ4NzUgNjYuNzYyIDY3LjYwNjUgNjYuNzE3NyA2Ny43MDQ0QzY2LjY3NjUgNjcuNzk1NSA2Ni42MzczIDY3LjgzNCA2Ni42MDg1IDY3Ljg1MzlDNjYuNTg5IDY3Ljg2NzQgNjYuNDg2NiA2Ny45MzYgNjYuMTk1NyA2Ny45MzZINjYuMTc5OEg2Ni4xNjM2SDY2LjE0NzFINjYuMTMwM0g2Ni4xMTMxSDY2LjA5NTZINjYuMDc3OUg2Ni4wNTk3SDY2LjA0MTNINjYuMDIyNkg2Ni4wMDM1SDY1Ljk4NDFINjUuOTY0NEg2NS45NDQ0SDY1LjkyNDFINjUuOTAzNUg2NS44ODI2SDY1Ljg2MTNINjUuODM5OEg2NS44MThINjUuNzk1OEg2NS43NzM0SDY1Ljc1MDdINjUuNzI3Nkg2NS43MDQzSDY1LjY4MDdINjUuNjU2OEg2NS42MzI2SDY1LjYwODFINjUuNTgzM0g2NS41NTgySDY1LjUzMjlINjUuNTA3M0g2NS40ODEzSDY1LjQ1NTFINjUuNDI4N0g2NS40MDE5SDY1LjM3NDlINjUuMzQ3Nkg2NS4zMkg2NS4yOTIxSDY1LjI2NEg2NS4yMzU2SDY1LjIwNjlINjUuMTc4SDY1LjE0ODhINjUuMTE5M0g2NS4wODk2SDY1LjA1OTZINjUuMDI5NEg2NC45OTg5SDY0Ljk2ODFINjQuOTM3MUg2NC45MDU4SDY0Ljg3NDNINjQuODQyNUg2NC44MTA1SDY0Ljc3ODJINjQuNzQ1N0g2NC43MTI5SDY0LjY3OTlINjQuNjQ2Nkg2NC42MTMxSDY0LjU3OTRINjQuNTQ1NEg2NC41MTEySDY0LjQ3NjdINjQuNDQySDY0LjQwNzFINjQuMzcxOUg2NC4zMzY2SDY0LjMwMDlINjQuMjY1MUg2NC4yMjlINjQuMTkyN0g2NC4xNTYySDY0LjExOTVINjQuMDgyNUg2NC4wNDUzSDY0LjAwNzlINjMuOTcwM0g2My45MzI1SDYzLjg5NDVINjMuODU2Mkg2My44MTc3SDYzLjc3OTFINjMuNzQwMkg2My43MDExSDYzLjY2MThINjMuNjIyM0g2My41ODI2SDYzLjU0MjdINjMuNTAyNkg2My40NjIzSDYzLjQyMThINjMuMzgxMUg2My4zNDAySDYzLjI5OTFINjMuMjU3OEg2My4yMTY0SDYzLjE3NDdINjMuMTMyOUg2My4wOTA5SDYzLjA0ODdINjMuMDA2M0g2Mi45NjM3SDYyLjkyMDlINjIuODc4SDYyLjgzNDlINjIuNzkxNkg2Mi43NDgySDYyLjcwNDVINjIuNjYwN0g2Mi42MTY4SDYyLjU3MjZINjIuNTI4M0g2Mi40ODM4SDYyLjQzOTJINjIuMzk0NEg2Mi4zNDk0SDYyLjMwNDNINjIuMjU5SDYyLjIxMzZINjIuMTY4SDYyLjEyMjJINjIuMDc2M0g2Mi4wMzAzSDYxLjk4NDFINjEuOTM3N0g2MS44OTEySDYxLjg0NDZINjEuNzk3OEg2MS43NTA4SDYxLjcwMzdINjEuNjU2NUg2MS42MDkySDYxLjU2MTdINjEuNTE0SDYxLjQ2NjNINjEuNDE4M0g2MS4zNzAzSDYxLjMyMjFINjEuMjczOEg2MS4yMjU0SDYxLjE3NjlINjEuMTI4Mkg2MS4wNzk0SDYxLjAzMDVINjAuOTgxNEg2MC45MzIzSDYwLjg4M0g2MC44MzM2SDYwLjc4NDFINjAuNzM0NEg2MC42ODQ3SDYwLjYzNDhINjAuNTg0OUg2MC41MzQ4SDYwLjQ4NDZINjAuNDM0M0g2MC4zODRINjAuMzMzNUg2MC4yODI5SDYwLjIzMjJINjAuMTgxNEg2MC4xMzA1SDYwLjA3OTVINjAuMDI4NUg1OS45NzczSDU5LjkyNkg1OS44NzQ3SDU5LjgyMzJINTkuNzcxN0g1OS43MjAxSDU5LjY2ODRINTkuNjE2Nkg1OS41NjQ3SDU5LjUxMjhINTkuNDYwOEg1OS40MDg3SDU5LjM1NjVINTkuMzA0M0g1OS4yNTE5SDU5LjE5OTVINTkuMTQ3MUg1OS4wOTQ1SDU5LjA0MTlINTguOTg5M0g1OC45MzY1SDU4Ljg4MzdINTguODMwOUg1OC43Nzc5SDU4LjcyNUg1OC42NzE5SDU4LjYxODhINTguNTY1N0g1OC41MTI1SDU4LjQ1OTJINTguNDA1OUg1OC4zNTI2SDU4LjI5OTJINTguMjQ1N0g1OC4xOTIySDU4LjEzODdINTguMDg1MUg1OC4wMzE1SDU3Ljk3NzhINTcuOTI0MUg1Ny44NzA0SDU3LjgxNjZINTcuNzYyOEg1Ny43MDlINTcuNjU1MUg1Ny42MDEySDU3LjU0NzNINTcuNDkzM0g1Ny40MzkzSDU3LjM4NTNINTcuMzMxM0g1Ny4yNzczSDU3LjIyMzJINTcuMTY5MUg1Ny4xMTVINTcuMDYwOUg1Ny4wMDY3SDU2Ljk1MjZINTYuODk4NEg1Ni44NDQzSDU2Ljc5MDFINTYuNzM1OUg1Ni42ODE3SDU2LjYyNzVINTYuNTczM0g1Ni41MTkxSDU2LjQ2NDlINTYuNDEwN0g1Ni4zNTY1SDU2LjMwMjNINTYuMjQ4Mkg1Ni4xOTRINTYuMTM5OEg1Ni4wODU2SDU2LjAzMTVINTUuOTc3M0g1NS45MjMySDU1Ljg2OTFINTUuODE1SDU1Ljc2MDlINTUuNzA2OUg1NS42NTI5SDU1LjU5ODhINTUuNTQ0OUg1NS40OTA5SDU1LjQzN0g1NS4zODNINTUuMzI5Mkg1NS4yNzUzSDU1LjIyMTVINTUuMTY3N0g1NS4xMTRINTUuMDYwMkg1NS4wMDY2SDU0Ljk1MjlINTQuODk5M0g1NC44NDU4SDU0Ljc5MjNINTQuNzM4OEg1NC42ODU0SDU0LjYzMkg1NC41Nzg3SDU0LjUyNTRINTQuNDcyMkg1NC40MTlINTQuMzY1OUg1NC4zMTI5SDU0LjI1OTlINTQuMjA2OUg1NC4xNTRINTQuMTAxMkg1NC4wNDg1SDUzLjk5NThINTMuOTQzMUg1My44OTA2SDUzLjgzODFINTMuNzg1N0g1My43MzMzSDUzLjY4MUg1My42Mjg4SDUzLjU3NjdINTMuNTI0Nkg1My40NzI3SDUzLjQyMDhINTMuMzY5SDUzLjMxNzJINTMuMjY1Nkg1My4yMTRINTMuMTYyNkg1My4xMTEySDUzLjA1OTlINTMuMDA4N0g1Mi45NTc2SDUyLjkwNjZINTIuODU1Nkg1Mi44MDQ4SDUyLjc1NDFINTIuNzAzNEg1Mi42NTI5SDUyLjYwMjVINTIuNTUyMkg1Mi41MDJINTIuNDUxOUg1Mi40MDE4SDUyLjM1Mkg1Mi4zMDIySDUyLjI1MjVINTIuMjAyOUg1Mi4xNTM1SDUyLjEwNDJINTIuMDU1SDUyLjAwNTlINTEuOTU2OUg1MS45MDgxSDUxLjg1OTNINTEuODEwOEg1MS43NjIzSDUxLjcxMzlINTEuNjY1N0g1MS42MTc2SDUxLjU2OTdINTEuNTIxOUg1MS40NzQySDUxLjQyNjZINTEuMzc5Mkg1MS4zMzE5SDUxLjI4NDhINTEuMjM3OEg1MS4xOTFINTEuMTQ0M0g1MS4wOTc3SDUxLjA1MTNINTEuMDA1SDUwLjk1ODlINTAuOTEzSDUwLjg2NzJINTAuODIxNUg1MC43NzZINTAuNzMwN0g1MC42ODU1SDUwLjY0MDVINTAuNTk1Nkg1MC41NTA5SDUwLjUwNjRINTAuNDYySDUwLjQxNzhINTAuMzczOEg1MC4zMjk5SDUwLjI4NjJINTAuMjQyN0g1MC4xOTkzSDUwLjE1NjJINTAuMTEzMkg1MC4wNzA0SDUwLjAyNzdINDkuOTg1M0g0OS45NDNINDkuOTAwOUg0OS44NTlINDkuODE3M0g0OS43NzU3SDQ5LjczNDRINDkuNjkzMkg0OS42NTIzSDQ5LjYxMTVINDkuNTcxSDQ5LjUzMDZINDkuNDkwNEg0OS40NTA0SDQ5LjQxMDdINDkuMzcxMUg0OS4zMzE3SDQ5LjI5MjVINDkuMjUzNkg0OS4yMTQ4SDQ5LjE3NjNINDkuMTM4SDQ5LjA5OThINDkuMDYxOUg0OS4wMjQySDQ4Ljk4NjhINDguOTQ5NUg0OC45MTI1SDQ4Ljg3NTZINDguODM5SDQ4LjgwMjdINDguNzY2NUg0OC43MzA2SDQ4LjY5NDlINDguNjU5NEg0OC42MjQySDQ4LjU4OTJINDguNTU0NEg0OC41MTk5SDQ4LjQ4NTVINDguNDUxNUg0OC40MTc3SDQ4LjM4NDFINDguMzUwN0g0OC4zMTc2SDQ4LjI4NDdINDguMjUyMUg0OC4yMTk4SDQ4LjE4NzZINDguMTU1OEg0OC4xMjQySDQ4LjA5MjhINDguMDYxN0g0OC4wMzA4SDQ4LjAwMDJINDcuOTc0TDQ4LjAwNjIgNTMuMDAyNEM0OC4wMDY1IDUyLjk5NjMgNDguMDA2NyA1Mi45ODk5IDQ4LjAwNjkgNTIuOTgzMkM0OC4wMDgyIDUyLjk0MjkgNDguMDA5MSA1Mi44OTE4IDQ4LjAwODQgNTIuODMxMkM0OC4wMDcgNTIuNzEwNiA0Ny45OTk2IDUyLjU0OTMgNDcuOTc2OCA1Mi4zNjAxQzQ3LjkzMiA1MS45ODg4IDQ3LjgyMzEgNTEuNDY4NCA0Ny41NTIgNTAuOTI5M0M0Ny4yNzQ5IDUwLjM3ODIgNDYuODI2OSA0OS44MDc4IDQ2LjEyOCA0OS4zODQyQzQ1LjQzMTMgNDguOTYxOCA0NC41NzczIDQ4Ljc0MTMgNDMuNTc0NCA0OC43NDEzSDM1LjIxMzRDMzQuMjgzMSA0OC43NDEzIDMzLjQ3OTYgNDguOTg2MiAzMi44Mzc4IDQ5LjQ2MTRDMzIuMjA3IDQ5LjkyODQgMzEuODQ1OCA1MC41MzM3IDMxLjY0MTggNTEuMDY5NkMzMS40NDA1IDUxLjU5ODUgMzEuMzc1IDUyLjEwMTkgMzEuMzU0OCA1Mi40NTM3QzMxLjM0NDQgNTIuNjM0MiAzMS4zNDUzIDUyLjc4NzMgMzEuMzQ5MyA1Mi45MDA2QzMxLjM1MDkgNTIuOTQ3NSAzMS4zNTMxIDUyLjk4OCAzMS4zNTUzIDUzLjAyMTVMMzEuMzI4NSA2Ny45OTEyTDI5Ljk4MDcgNjcuOTkzTDIzLjU2MjkgNjguMDAxMUMxOC43OTU5IDY4LjAwNyAxMy43NTk1IDY4LjAxMyAxMi42NzUgNjguMDEzQzEyLjYxNTggNjguMDEzIDEyLjU3NTkgNjguMDA4MiAxMi41NTExIDY4LjAwMzRDMTIuNTMwOCA2Ny45NTc0IDEyLjUxNCA2Ny44OTExIDEyLjUwNTQgNjcuODIxQzEyLjUwMTkgNjcuNzkyNSAxMi41MDA2IDY3Ljc3MDggMTIuNTAwMiA2Ny43NTk3TDEyLjUwMDQgNjcuNzU0NFY2Ny43MjQ3Wk0xMi41MTczIDY3Ljk5MzhDMTIuNTE3NCA2Ny45OTM3IDEyLjUxOTcgNjcuOTk0NSAxMi41MjM4IDY3Ljk5NjZDMTIuNTE5MiA2Ny45OTUgMTIuNTE3MSA2Ny45OTQgMTIuNTE3MyA2Ny45OTM4WlwiIGZpbGw9XCIjMEUxMDNEXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDAuNjE2OSAxLjQ3NTM5TDc4LjQzOSAzNS43NjIxQzc4LjIxMjYgMzUuOTY5OCA3Ny45MTY4IDM2LjE4MDkgNzcuNTQ1NiAzNi4zMzRDNzYuNjI1NiAzNi43MTM2IDc0Ljg2NzkgMzYuODgxNSA3MS45MzYgMzQuNzgwNEw0MS4zNjE5IDcuMzQ0MTVMNDAuNjQ4MiA2LjcwMzc2TDM5LjkxNjQgNy4zMjMzMUw3LjI2MDA2IDM0Ljk3MDZDNy4yNTk5MiAzNC45NzA4IDcuMjU5NzggMzQuOTcwOSA3LjI1OTY1IDM0Ljk3MUM0Ljc1MjI3IDM3LjA5MTUgMy4yMDA5MyAzNi44OTk0IDIuMzgwMDEgMzYuNTM3M0MyLjAyODY3IDM2LjM4MjMgMS43Mzc3NCAzNi4xNjQ4IDEuNTA4NzcgMzUuOTQ3TDQwLjYxNjkgMS40NzUzOVpNMC45NjI4MTcgMzUuMjc4NkMwLjk2MjM5NSAzNS4yNzc4IDAuOTYyNTM0IDM1LjI3ODEgMC45NjMyMzEgMzUuMjc5M0wwLjk2MjgxNyAzNS4yNzg2WlwiIGZpbGw9XCIjMEUxMDNEXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyLjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MS4wMzEgMTIuMDkzMkw2MS4wMDM0IDRINjYuODc1N1YxNy4wNTU0TDYxLjAzMSAxMi4wOTMyWlwiIGZpbGw9XCIjMEUxMDNEXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnVXNlcnMnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDIyIDIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS45MzA5IDE2LjM1NEwxNi41MTA0IDE0Ljg3MjVDMTYuNDI5OSAxNC44MzIyIDE2LjM0MDYgMTQuNzMzOSAxNi4yNjQgMTQuNjAyNkwxOC41NDc3IDE0LjYwMDlDMTguNTg3NiAxNC42MDQ3IDE5LjUyOTIgMTQuNjkwOCAyMC4yODQxIDE0LjM2NjRDMjAuNTcgMTQuMjQzMiAyMC43ODI5IDEzLjk5OTkgMjAuODY4MiAxMy42OTg5QzIwLjk1NDMgMTMuMzk1MSAyMC44OTk3IDEzLjA3MzUgMjAuNzE5MiAxMi44MTU5QzIwLjA2NjQgMTEuODg3IDE4LjU0MjkgOS40NTk3MiAxOC40OTUzIDYuOTk3ODJDMTguNDk0MiA2Ljk1NTQ3IDE4LjM1NjMgMi43Njg3NyAxNC4yMjE4IDIuNzM0ODJDMTMuNjEzMSAyLjczOTcyIDEzLjA1MDMgMi44NDI5NyAxMi41MzgyIDMuMDMzMzdDMTIuNDI2NiAyLjc0ODgyIDEyLjI2MjEgMi40NTIwMiAxMi4wMTc1IDIuMTcyNzJDMTEuMjk4OSAxLjM1MjMyIDEwLjEzMjMgMC45MzY1MjMgOC41NSAwLjkzNjUyM0M2Ljk2NzY1IDAuOTM2NTIzIDUuODAxMSAxLjM1MjMyIDUuMDgyMiAyLjE3MjAyQzQuMjUzNCAzLjExNzM3IDQuMzMwNCA0LjI2MzYyIDQuMzUgNC40NTU3N1Y2LjMxNzQyQzQuMTI2IDYuNTcyNTcgNCA2Ljg5OTEyIDQgNy4yMzYxN1Y4LjYzNjE3QzQgOS4wNjIxMiA0LjE5MzU1IDkuNDU5MzcgNC41MjM5NSA5LjcyNDMyQzQuODQ0NTUgMTAuOTkzOCA1LjUxNTUgMTEuOTUwMyA1Ljc1IDEyLjI1NzNWMTMuNDE1NEM1Ljc1IDEzLjc1NDIgNS41NjUyIDE0LjA2NSA1LjI2ODA1IDE0LjIyNzRMMi4xNDU3IDE1LjkzMDVDMS4xMzAzNSAxNi40ODQ5IDAuNSAxNy41NDY4IDAuNSAxOC43MDMyVjIwLjE4NjVIMTUuOUgxNi42SDIxLjVWMTguODkyNkMyMS41IDE3LjgxMDQgMjAuODk4NyAxNi44MzgxIDE5LjkzMDkgMTYuMzU0Wk0xNS45IDE5LjQ4NjVIMS4yVjE4LjcwMzJDMS4yIDE3LjgwMzQgMS42OTA3IDE2Ljk3NjMgMi40ODA2NSAxNi41NDU4TDUuNjAzIDE0Ljg0MjdDNi4xMjU1NSAxNC41NTc1IDYuNDUgMTQuMDEwNCA2LjQ1IDEzLjQxNThWMTIuMDA5MUw2LjM2ODQ1IDExLjkxMThDNi4zNjAwNSAxMS45MDE3IDUuNTAyMiAxMC44NjM5IDUuMTc0OTUgOS40MzkwN0w1LjE0MzEgOS4zMDA0N0w1LjAyMzc1IDkuMjIzNDdDNC44MjExIDkuMDkyNTcgNC43IDguODczMTIgNC43IDguNjM2NTJWNy4yMzY1MkM0LjcgNy4wNDAxNyA0Ljc4MzMgNi44NTcxMiA0LjkzNDUgNi43MjAyN0w1LjA1IDYuNjE2MzJWNC40MzY1Mkw1LjA0Njg1IDQuMzkwNjdDNS4wNDU4IDQuMzgxMjIgNC45MjY4IDMuNDExMDIgNS42MDg2IDIuNjMzMzJDNi4xODg1NSAxLjk3MTgyIDcuMTc4MzUgMS42MzY1MiA4LjU1IDEuNjM2NTJDOS45MTY3NSAxLjYzNjUyIDEwLjkwNDQgMS45NjkzNyAxMS40ODUxIDIuNjI2MzJDMTEuNzczOCAyLjk1MjUyIDExLjkxOTEgMy4zMTY4NyAxMS45OTE1IDMuNjI5NzdDMTEuOTk3MSAzLjY1NDI3IDEyLjAwMjQgMy42Nzg0MiAxMi4wMDczIDMuNzAyNTdDMTIuMDEyMiAzLjcyNzQyIDEyLjAxNzQgMy43NTIyNyAxMi4wMjEzIDMuNzc2MDdDMTIuMDI1OCAzLjgwMzM3IDEyLjAyOTcgMy44MjkyNyAxMi4wMzM1IDMuODU1MTdDMTIuMDM2MyAzLjg3MzcyIDEyLjAzOTEgMy44OTI2MiAxMi4wNDEyIDMuOTEwNDdDMTIuMDQ2NSAzLjk1Mzg3IDEyLjA1MDcgMy45OTU4NyAxMi4wNTM1IDQuMDM0NzJDMTIuMDUzOCA0LjAzNzg3IDEyLjA1MzkgNC4wNDA2NyAxMi4wNTM5IDQuMDQzODJDMTIuMDU2MyA0LjA4MTYyIDEyLjA1ODEgNC4xMTczMiAxMi4wNTkxIDQuMTQ5ODdDMTIuMDU5MSA0LjE1NjE3IDEyLjA1OTEgNC4xNjE0MiAxMi4wNTk1IDQuMTY3NzJDMTIuMDYwMiA0LjE5Njc3IDEyLjA2MDIgNC4yMjQ0MiAxMi4wNTk4IDQuMjQ4NTdDMTIuMDU5OCA0LjI1MjA3IDEyLjA1OTggNC4yNTU1NyAxMi4wNTk4IDQuMjU5MDdDMTIuMDU4NCA0LjM0MTMyIDEyLjA1MjggNC4zOTAzMiAxMi4wNTI4IDQuMzkxMzdMMTIuMDUgNi42MTYzMkwxMi4xNjU1IDYuNzIwNjJDMTIuMzE2NyA2Ljg1NzEyIDEyLjQgNy4wNDAxNyAxMi40IDcuMjM2NTJWOC42MzY1MkMxMi40IDguOTQyMDcgMTIuMTk5OCA5LjIwOTQ3IDExLjkwMjMgOS4zMDExN0wxMS43MjggOS4zNTQ3MkwxMS42NzIgOS41Mjc5N0MxMS40Mzc4IDEwLjI1NjMgMTEuMTA0MyAxMC45MjkgMTAuNjgwMSAxMS41Mjc1QzEwLjU3NjEgMTEuNjc0OSAxMC40NzUgMTEuODA1NCAxMC4zODcxIDExLjkwNTJMMTAuMyAxMi4wMDQ2VjEzLjQ0ODNDMTAuMyAxMy41MzY5IDEwLjMwODcgMTMuNjIzNyAxMC4zMjI0IDEzLjcwOTFDMTAuMzI1MiAxMy43MjczIDEwLjMzMDEgMTMuNzQ0OCAxMC4zMzM2IDEzLjc2M0MxMC4zNDcyIDEzLjgzMzMgMTAuMzY1NCAxMy45MDIzIDEwLjM4NzggMTMuOTY5NUMxMC4zOTMxIDEzLjk4NTIgMTAuMzk4NyAxNC4wMDAzIDEwLjQwNDYgMTQuMDE2QzEwLjQzMTkgMTQuMDg5MiAxMC40NjM4IDE0LjE1OTkgMTAuNTAwOSAxNC4yMjc4QzEwLjUwNTEgMTQuMjM1NSAxMC41MDg5IDE0LjI0MzUgMTAuNTEzMSAxNC4yNTEyQzEwLjU2MzkgMTQuMzQwOCAxMC42MjIzIDE0LjQyNTkgMTAuNjg5NiAxNC41MDQzTDEwLjc2OTQgMTQuNjAyNkgxMC43ODNDMTAuOTAzIDE0LjcyMDkgMTEuMDQwOSAxNC44MjM4IDExLjE5NzggMTQuOTAyMkwxNC41NDEzIDE2LjU3MzhDMTUuMzc5NSAxNi45OTI0IDE1LjkgMTcuODM0NSAxNS45IDE4Ljc3MTVWMTkuNDg2NVpNMjAuOCAxOS40ODY1SDE2LjZWMTguNzcxNUMxNi42IDE3LjU2NzggMTUuOTMxMSAxNi40ODYgMTQuODU0OSAxNS45NDc3TDEyLjQ1NDYgMTQuNzQ3MkMxMi41MTM3IDE0LjYxMjEgMTIuNTIxNSAxNC40NTc0IDEyLjQ2OTcgMTQuMzA4M0MxMi4zODM5IDE0LjA2MTUgMTIuMTU5OSAxMy45MDIzIDExLjg5OTEgMTMuOTAyM0gxMS4xMjMyQzExLjEwNzEgMTMuODczOSAxMS4wOTY2IDEzLjg0MjggMTEuMDgzNiAxMy44MTI3QzExLjA2NjEgMTMuNzcyNCAxMS4wNDU1IDEzLjczMjkgMTEuMDMzOSAxMy42OTA1QzExLjAxMjYgMTMuNjEyOCAxMSAxMy41MzE2IDExIDEzLjQ0ODNWMTIuMjY1QzExLjA4MDEgMTIuMTY3IDExLjE2NDUgMTIuMDU1MyAxMS4yNTE2IDExLjkzMjFDMTEuNjg1MyAxMS4zMTk2IDEyLjAzMjkgMTAuNjM3OCAxMi4yODU2IDkuOTAyNDdDMTIuNzc5NCA5LjY3NjAyIDEzLjEgOS4xODc3NyAxMy4xIDguNjM2NTJWNy4yMzY1MkMxMy4xIDYuODk5NDcgMTIuOTc0IDYuNTcyOTIgMTIuNzUgNi4zMTc3N1Y0LjQ1NjEyQzEyLjc1OTEgNC4zNjg2MiAxMi43Nzg3IDQuMDgxOTcgMTIuNzIwNiAzLjcwNzQ3QzEzLjE3MTQgMy41MzAzNyAxMy42NzY0IDMuNDM5MDIgMTQuMjIyMSAzLjQzNDQ3QzE3LjY2NjUgMy40NjI4MiAxNy43OTIxIDYuODY4MzIgMTcuNzk1NiA3LjAxMTgyQzE3Ljg0NyA5LjY2NTg3IDE5LjQ1NjcgMTIuMjM2MyAyMC4xNDY1IDEzLjIxOEMyMC4yMDU3IDEzLjMwMiAyMC4yMjM1IDEzLjQwNzcgMjAuMTk1MiAxMy41MDc1QzIwLjE3OTEgMTMuNTY0OSAyMC4xMzI5IDEzLjY2OTIgMjAuMDA3OSAxMy43MjI3QzE5LjQxOTkgMTMuOTc1OCAxOC42MjIzIDEzLjkwNCAxOC41ODE0IDEzLjkwMjNIMTYuMTcyM0MxNS45NDcyIDEzLjkwMjMgMTUuNzQyMSAxNC4wMTY3IDE1LjYyMzUgMTQuMjA4MkMxNS41MDUyIDE0LjM5ODkgMTUuNDk0IDE0LjYzMiAxNS41OTM0IDE0LjgzMjJDMTUuNzAyOSAxNS4wNTMxIDE1Ljg5NjUgMTUuMzQ4MSAxNi4yMTQ2IDE1LjUwNjdMMTkuNjI2MSAxNi45ODQ0QzIwLjM1MDMgMTcuMzUwMSAyMC44IDE4LjA4MDIgMjAuOCAxOC44OTI2VjE5LjQ4NjVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQ2xvY2snOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAyMyAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEuNjg2NCAwQzUuNjIxIDAgMC42ODY0MDEgNC40ODYgMC42ODY0MDEgMTBDMC42ODY0MDEgMTUuNTE0IDUuNjIxIDIwIDExLjY4NjQgMjBDMTcuNzUxOCAyMCAyMi42ODY0IDE1LjUxNCAyMi42ODY0IDEwQzIyLjY4NjQgNC40ODYgMTcuNzUxOCAwIDExLjY4NjQgMFpNMTEuNjg2NCAxOS4zMzMzQzYuMDI1NDMgMTkuMzMzMyAxLjQxOTczIDE1LjE0NjMgMS40MTk3MyAxMEMxLjQxOTczIDQuODUzNjcgNi4wMjU0MyAwLjY2NjY2NyAxMS42ODY0IDAuNjY2NjY3QzE3LjM0NzQgMC42NjY2NjcgMjEuOTUzMSA0Ljg1MzY3IDIxLjk1MzEgMTBDMjEuOTUzMSAxNS4xNDYzIDE3LjM0NzQgMTkuMzMzMyAxMS42ODY0IDE5LjMzMzNaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEuNjg2NSAyQzExLjQ4NDEgMiAxMS4zMTk4IDIuMTQ5IDExLjMxOTggMi4zMzMzM1YxMEg1LjgxOTc5QzUuNjE3MzkgMTAgNS40NTMxMiAxMC4xNDkgNS40NTMxMiAxMC4zMzMzQzUuNDUzMTIgMTAuNTE3NyA1LjYxNzM5IDEwLjY2NjcgNS44MTk3OSAxMC42NjY3SDExLjY4NjVDMTEuODg4OSAxMC42NjY3IDEyLjA1MzEgMTAuNTE3NyAxMi4wNTMxIDEwLjMzMzNWMi4zMzMzM0MxMi4wNTMxIDIuMTQ5IDExLjg4ODkgMiAxMS42ODY1IDJaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnU3Rhcic6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMjMgMjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjM0MzggOS41MTMyOEMyMi43NzY4IDkuMTEyMzUgMjIuOTI5NyA4LjUyMzk0IDIyLjc0MjkgNy45NzY5NkMyMi41NTU3IDcuNDI5OTggMjIuMDY4IDcuMDM5NTEgMjEuNDY4OSA2Ljk1NjY1TDE2LjE0MiA2LjIyMTM0QzE1LjkxNTIgNi4xODk5NSAxNS43MTkxIDYuMDU0NzggMTUuNjE3OCA1Ljg1OTM0TDEzLjIzNjMgMS4yNzM4MUMxMi45Njg5IDAuNzU4NjMxIDEyLjQyNjIgMC40Mzg0NzcgMTEuODIxMyAwLjQzODQ3N0MxMS4yMTY5IDAuNDM4NDc3IDEwLjY3NDIgMC43NTg2MzEgMTAuNDA2OCAxLjI3MzgxTDguMDI0ODQgNS44NTkzNEM3LjkyMzUyIDYuMDU0NzggNy43MjcwNSA2LjE4OTk1IDcuNTAwMTcgNi4yMjEzNEwyLjE3MzMgNi45NTcwN0MxLjU3NDYyIDcuMDM5NTEgMS4wODY5NiA3LjQyOTk4IDAuODk5NzM0IDcuOTc2OTZDMC43MTI5NSA4LjUyMzk0IDAuODY1ODEzIDkuMTEyMzUgMS4yOTg4NSA5LjUxMzI4TDUuMTUzMDQgMTMuMDgyM0M1LjMxNzM2IDEzLjIzNDYgNS4zOTI2OSAxMy40NTM5IDUuMzUzOTIgMTMuNjY4Mkw0LjQ0NDIzIDE4LjcwODJDNC4zNDIwMiAxOS4yNzQ0IDQuNTgyMTEgMTkuODM1NiA1LjA3MTU0IDIwLjE3MzhDNS41NjA1MyAyMC41MTI0IDYuMTk3MDkgMjAuNTU2MyA2LjczMzIxIDIwLjI4OEwxMS40OTcxIDE3LjkwODRDMTEuNzAwMiAxNy44MDcyIDExLjk0MjUgMTcuODA3MiAxMi4xNDU1IDE3LjkwODRMMTYuOTA5OSAyMC4yODhDMTcuMTQyNSAyMC40MDQ0IDE3LjM5NDQgMjAuNDYxNyAxNy42NDUxIDIwLjQ2MTdDMTcuOTcwNyAyMC40NjE3IDE4LjI5NDkgMjAuMzY1IDE4LjU3MTUgMjAuMTczOEMxOS4wNjEgMTkuODM1NiAxOS4zMDExIDE5LjI3NDQgMTkuMTk4OSAxOC43MDgyTDE4LjI4ODcgMTMuNjY4NkMxOC4yNSAxMy40NTM5IDE4LjMyNTMgMTMuMjM1IDE4LjQ4OTYgMTMuMDgyN0wyMi4zNDM4IDkuNTEzMjhaTTE3LjQyMDkgMTMuODFMMTguMzMwNiAxOC44NDk2QzE4LjM3NjQgMTkuMTAzMyAxOC4yNzI5IDE5LjM0NTYgMTguMDUzNSAxOS40OTcxQzE3LjgzMzcgMTkuNjQ4MSAxNy41NjAxIDE5LjY2NjYgMTcuMzIgMTkuNTQ3N0wxMi41NTU3IDE3LjE2NzdDMTIuMzI2MiAxNy4wNTM0IDEyLjA3MzMgMTYuOTk1NyAxMS44MjEzIDE2Ljk5NTdDMTEuNTY5MyAxNi45OTU3IDExLjMxNjkgMTcuMDUzNCAxMS4wODcgMTcuMTY4MUw2LjMyMzUyIDE5LjU0NzdDNi4wODI1NSAxOS42NjY2IDUuODA4OTkgMTkuNjQ4MSA1LjU4OTYgMTkuNDk3MUM1LjM3MDIyIDE5LjM0NTYgNS4yNjcxNCAxOS4xMDM3IDUuMzEyNTEgMTguODQ5Nkw2LjIyMjIgMTMuODFDNi4zMDk4NyAxMy4zMjM3IDYuMTQwMjYgMTIuODI3NCA1Ljc2ODQ2IDEyLjQ4MzRMMS45MTM4MyA4LjkxMzk4QzEuNzE5NTYgOC43MzQwMyAxLjY1MzQ4IDguNDgwNDIgMS43Mzc2MiA4LjIzNTU5QzEuODIxMzIgNy45OTAzNSAyLjAzMTQ1IDcuODIyMTEgMi4yOTk3MyA3Ljc4NDg2TDcuNjI2MTcgNy4wNDk1NkM4LjE0MDI2IDYuOTc4ODMgOC41ODQ3NiA2LjY3MjQ5IDguODE0MjcgNi4yMjk3MUwxMS4xOTYyIDEuNjQ0MThDMTEuMzE2IDEuNDEzMTcgMTEuNTUgMS4yNzU0OCAxMS44MjA5IDEuMjc1NDhDMTIuMDkyMiAxLjI3NTQ4IDEyLjMyNTcgMS40MTMxNyAxMi40NDYgMS42NDQxOEwxNC44Mjc5IDYuMjI5NzFDMTUuMDU3NCA2LjY3MjQ5IDE1LjUwMTUgNi45Nzg4MyAxNi4wMTU2IDcuMDQ5NTZMMjEuMzQyNSA3Ljc4NDg2QzIxLjYxMDggNy44MjIxMSAyMS44MjA5IDcuOTkwMzUgMjEuOTA0NiA4LjIzNTU5QzIxLjk4ODMgOC40ODA0MiAyMS45MjI2IDguNzM0MDMgMjEuNzI4NCA4LjkxMzk4TDE3Ljg3NDIgMTIuNDgzQzE3LjUwMjQgMTIuODI3NCAxNy4zMzI4IDEzLjMyMzMgMTcuNDIwOSAxMy44MVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAvL0FVVEhcclxuICAgICAgICBjYXNlICdBdXRoUHJvZmlsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNjAgNTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU1LjUxNyA0NC41NUw0NS43NDQgNDAuMzE3QzQ1LjUxNCA0MC4yMDIgNDUuMjU5IDM5LjkyMSA0NS4wNCAzOS41NDZMNTEuNTY1IDM5LjU0MUM1MS42NzkgMzkuNTUyIDU0LjM2OSAzOS43OTggNTYuNTI2IDM4Ljg3MUM1Ny4zNDMgMzguNTE5IDU3Ljk1MSAzNy44MjQgNTguMTk1IDM2Ljk2NEM1OC40NDEgMzYuMDk2IDU4LjI4NSAzNS4xNzcgNTcuNzY5IDM0LjQ0MUM1NS45MDQgMzEuNzg3IDUxLjU1MSAyNC44NTIgNTEuNDE1IDE3LjgxOEM1MS40MTIgMTcuNjk3IDUxLjAxOCA1LjczNSAzOS4yMDUgNS42MzhDMzcuNDY2IDUuNjUyIDM1Ljg1OCA1Ljk0NyAzNC4zOTUgNi40OTFDMzQuMDc2IDUuNjc4IDMzLjYwNiA0LjgzIDMyLjkwNyA0LjAzMkMzMC44NTQgMS42ODggMjcuNTIxIDAuNSAyMyAwLjVDMTguNDc5IDAuNSAxNS4xNDYgMS42ODggMTMuMDkyIDQuMDNDMTAuNzI0IDYuNzMxIDEwLjk0NCAxMC4wMDYgMTEgMTAuNTU1VjE1Ljg3NEMxMC4zNiAxNi42MDMgMTAgMTcuNTM2IDEwIDE4LjQ5OVYyMi40OTlDMTAgMjMuNzE2IDEwLjU1MyAyNC44NTEgMTEuNDk3IDI1LjYwOEMxMi40MTMgMjkuMjM1IDE0LjMzIDMxLjk2OCAxNSAzMi44NDVWMzYuMTU0QzE1IDM3LjEyMiAxNC40NzIgMzguMDEgMTMuNjIzIDM4LjQ3NEw0LjcwMiA0My4zNEMxLjgwMSA0NC45MjQgMCA0Ny45NTggMCA1MS4yNjJWNTUuNUg0NEg0Nkg2MFY1MS44MDNDNjAgNDguNzExIDU4LjI4MiA0NS45MzMgNTUuNTE3IDQ0LjU1Wk00NCA1My41SDJWNTEuMjYyQzIgNDguNjkxIDMuNDAyIDQ2LjMyOCA1LjY1OSA0NS4wOThMMTQuNTggNDAuMjMyQzE2LjA3MyAzOS40MTcgMTcgMzcuODU0IDE3IDM2LjE1NVYzMi4xMzZMMTYuNzY3IDMxLjg1OEMxNi43NDMgMzEuODI5IDE0LjI5MiAyOC44NjQgMTMuMzU3IDI0Ljc5M0wxMy4yNjYgMjQuMzk3TDEyLjkyNSAyNC4xNzdDMTIuMzQ2IDIzLjgwMyAxMiAyMy4xNzYgMTIgMjIuNVYxOC41QzEyIDE3LjkzOSAxMi4yMzggMTcuNDE2IDEyLjY3IDE3LjAyNUwxMyAxNi43MjhWMTAuNUwxMi45OTEgMTAuMzY5QzEyLjk4OCAxMC4zNDIgMTIuNjQ4IDcuNTcgMTQuNTk2IDUuMzQ4QzE2LjI1MyAzLjQ1OCAxOS4wODEgMi41IDIzIDIuNUMyNi45MDUgMi41IDI5LjcyNyAzLjQ1MSAzMS4zODYgNS4zMjhDMzIuMjExIDYuMjYgMzIuNjI2IDcuMzAxIDMyLjgzMyA4LjE5NUMzMi44NDkgOC4yNjUgMzIuODY0IDguMzM0IDMyLjg3OCA4LjQwM0MzMi44OTIgOC40NzQgMzIuOTA3IDguNTQ1IDMyLjkxOCA4LjYxM0MzMi45MzEgOC42OTEgMzIuOTQyIDguNzY1IDMyLjk1MyA4LjgzOUMzMi45NjEgOC44OTIgMzIuOTY5IDguOTQ2IDMyLjk3NSA4Ljk5N0MzMi45OSA5LjEyMSAzMy4wMDIgOS4yNDEgMzMuMDEgOS4zNTJDMzMuMDExIDkuMzYxIDMzLjAxMSA5LjM2OSAzMy4wMTEgOS4zNzhDMzMuMDE4IDkuNDg2IDMzLjAyMyA5LjU4OCAzMy4wMjYgOS42ODFDMzMuMDI2IDkuNjk5IDMzLjAyNiA5LjcxNCAzMy4wMjcgOS43MzJDMzMuMDI5IDkuODE1IDMzLjAyOSA5Ljg5NCAzMy4wMjggOS45NjNDMzMuMDI4IDkuOTczIDMzLjAyOCA5Ljk4MyAzMy4wMjggOS45OTNDMzMuMDI0IDEwLjIyOCAzMy4wMDggMTAuMzY4IDMzLjAwOCAxMC4zNzFMMzMgMTYuNzI4TDMzLjMzIDE3LjAyNkMzMy43NjIgMTcuNDE2IDM0IDE3LjkzOSAzNCAxOC41VjIyLjVDMzQgMjMuMzczIDMzLjQyOCAyNC4xMzcgMzIuNTc4IDI0LjM5OUwzMi4wOCAyNC41NTJMMzEuOTIgMjUuMDQ3QzMxLjI1MSAyNy4xMjggMzAuMjk4IDI5LjA1IDI5LjA4NiAzMC43NkMyOC43ODkgMzEuMTgxIDI4LjUgMzEuNTU0IDI4LjI0OSAzMS44MzlMMjggMzIuMTIzVjM2LjI0OEMyOCAzNi41MDEgMjguMDI1IDM2Ljc0OSAyOC4wNjQgMzYuOTkzQzI4LjA3MiAzNy4wNDUgMjguMDg2IDM3LjA5NSAyOC4wOTYgMzcuMTQ3QzI4LjEzNSAzNy4zNDggMjguMTg3IDM3LjU0NSAyOC4yNTEgMzcuNzM3QzI4LjI2NiAzNy43ODIgMjguMjgyIDM3LjgyNSAyOC4yOTkgMzcuODdDMjguMzc3IDM4LjA3OSAyOC40NjggMzguMjgxIDI4LjU3NCAzOC40NzVDMjguNTg2IDM4LjQ5NyAyOC41OTcgMzguNTIgMjguNjA5IDM4LjU0MkMyOC43NTQgMzguNzk4IDI4LjkyMSAzOS4wNDEgMjkuMTEzIDM5LjI2NUwyOS4zNDEgMzkuNTQ2SDI5LjM4QzI5LjcyMyAzOS44ODQgMzAuMTE3IDQwLjE3OCAzMC41NjUgNDAuNDAyTDQwLjExOCA0NS4xNzhDNDIuNTEzIDQ2LjM3NCA0NCA0OC43OCA0NCA1MS40NTdWNTMuNVpNNTggNTMuNUg0NlY1MS40NTdDNDYgNDguMDE4IDQ0LjA4OSA0NC45MjcgNDEuMDE0IDQzLjM4OUwzNC4xNTYgMzkuOTU5QzM0LjMyNSAzOS41NzMgMzQuMzQ3IDM5LjEzMSAzNC4xOTkgMzguNzA1QzMzLjk1NCAzOCAzMy4zMTQgMzcuNTQ1IDMyLjU2OSAzNy41NDVIMzAuMzUyQzMwLjMwNiAzNy40NjQgMzAuMjc2IDM3LjM3NSAzMC4yMzkgMzcuMjg5QzMwLjE4OSAzNy4xNzQgMzAuMTMgMzcuMDYxIDMwLjA5NyAzNi45NEMzMC4wMzYgMzYuNzE4IDMwIDM2LjQ4NiAzMCAzNi4yNDhWMzIuODY3QzMwLjIyOSAzMi41ODcgMzAuNDcgMzIuMjY4IDMwLjcxOSAzMS45MTZDMzEuOTU4IDMwLjE2NiAzMi45NTEgMjguMjE4IDMzLjY3MyAyNi4xMTdDMzUuMDg0IDI1LjQ3IDM2IDI0LjA3NSAzNiAyMi41VjE4LjVDMzYgMTcuNTM3IDM1LjY0IDE2LjYwNCAzNSAxNS44NzVWMTAuNTU2QzM1LjAyNiAxMC4zMDYgMzUuMDgyIDkuNDg3IDM0LjkxNiA4LjQxN0MzNi4yMDQgNy45MTEgMzcuNjQ3IDcuNjUgMzkuMjA2IDcuNjM3QzQ5LjA0NyA3LjcxOCA0OS40MDYgMTcuNDQ4IDQ5LjQxNiAxNy44NThDNDkuNTYzIDI1LjQ0MSA1NC4xNjIgMzIuNzg1IDU2LjEzMyAzNS41OUM1Ni4zMDIgMzUuODMgNTYuMzUzIDM2LjEzMiA1Ni4yNzIgMzYuNDE3QzU2LjIyNiAzNi41ODEgNTYuMDk0IDM2Ljg3OSA1NS43MzcgMzcuMDMyQzU0LjA1NyAzNy43NTUgNTEuNzc4IDM3LjU1IDUxLjY2MSAzNy41NDVINDQuNzc4QzQ0LjEzNSAzNy41NDUgNDMuNTQ5IDM3Ljg3MiA0My4yMSAzOC40MTlDNDIuODcyIDM4Ljk2NCA0Mi44NCAzOS42MyA0My4xMjQgNDAuMjAyQzQzLjQzNyA0MC44MzMgNDMuOTkgNDEuNjc2IDQ0Ljg5OSA0Mi4xMjlMNTQuNjQ2IDQ2LjM1MUM1Ni43MTUgNDcuMzk2IDU4IDQ5LjQ4MiA1OCA1MS44MDNWNTMuNVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXV0aFBob25lJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAzNCA2MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjkuNTk1IDBINC40MDVDMS45NzcgMCAwIDEuOTc3IDAgNC40MDVWNTUuNTk0QzAgNTguMDIzIDEuOTc3IDYwIDQuNDA1IDYwSDI5LjU5NEMzMi4wMjMgNjAgMzQgNTguMDIzIDM0IDU1LjU5NVY0LjQwNUMzNCAxLjk3NyAzMi4wMjMgMCAyOS41OTUgMFpNMiA4SDMyVjQ2SDJWOFpNNC40MDUgMkgyOS41OTRDMzAuOTIxIDIgMzIgMy4wNzkgMzIgNC40MDVWNkgyVjQuNDA1QzIgMy4wNzkgMy4wNzkgMiA0LjQwNSAyWk0yOS41OTUgNThINC40MDVDMy4wNzkgNTggMiA1Ni45MjEgMiA1NS41OTVWNDhIMzJWNTUuNTk1QzMyIDU2LjkyMSAzMC45MjEgNTggMjkuNTk1IDU4WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3IDQ5QzE0Ljc5NCA0OSAxMyA1MC43OTQgMTMgNTNDMTMgNTUuMjA2IDE0Ljc5NCA1NyAxNyA1N0MxOS4yMDYgNTcgMjEgNTUuMjA2IDIxIDUzQzIxIDUwLjc5NCAxOS4yMDYgNDkgMTcgNDlaTTE3IDU1QzE1Ljg5NyA1NSAxNSA1NC4xMDMgMTUgNTNDMTUgNTEuODk3IDE1Ljg5NyA1MSAxNyA1MUMxOC4xMDMgNTEgMTkgNTEuODk3IDE5IDUzQzE5IDU0LjEwMyAxOC4xMDMgNTUgMTcgNTVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgNUgxN0MxNy41NTMgNSAxOCA0LjU1MyAxOCA0QzE4IDMuNDQ3IDE3LjU1MyAzIDE3IDNIMTNDMTIuNDQ3IDMgMTIgMy40NDcgMTIgNEMxMiA0LjU1MyAxMi40NDcgNSAxMyA1WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDVIMjFDMjEuNTUzIDUgMjIgNC41NTMgMjIgNEMyMiAzLjQ0NyAyMS41NTMgMyAyMSAzSDIwQzE5LjQ0NyAzIDE5IDMuNDQ3IDE5IDRDMTkgNC41NTMgMTkuNDQ3IDUgMjAgNVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdBdXRoRW1haWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDUwIDQ4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NS4yNTYzIDQyLjMzNTRDNDIuNjQ4NyA0My44NTg4IDM5LjgzNzcgNDUuMDAxNCAzNi44MjI1IDQ1Ljc2MzFDMzMuODA3MiA0Ni41MjQ4IDMwLjUxOTUgNDYuOTA1NyAyNi45NjA1IDQ2LjkwNTdDMjMuNDAwOSA0Ni45MDU3IDIwLjA1NzIgNDYuNDEwOCAxNi45Mjg1IDQ1LjQyMkMxMy43OTk4IDQ0LjQzMjMgMTEuMDY3NCA0Mi45NzM0IDguNzMyOSA0MS4wNDQ1QzYuMzk3NzUgMzkuMTE1NCA0LjU1NTQxIDM2LjczNjUgMy4yMDY4MSAzMy45MDcxQzEuODU3NTggMzEuMDc3NyAxLjE4MzQ0IDI3LjgxMzQgMS4xODM0NCAyNC4xMTM0QzEuMTgzNDQgMjAuNzUgMS44NDA5MyAxNy42NTg1IDMuMTU1OSAxNC44MzkxQzQuNDcwNTUgMTIuMDE5NyA2LjI1NjAxIDkuNTk2MjUgOC41MTE5NSA3LjU2Nzk2QzEwLjc2NzYgNS41Mzk5NiAxMy4zOTE5IDMuOTYxOTcgMTYuMzg0NSAyLjgzNDI1QzE5LjM3NzEgMS43MDY4MiAyMi41NjIxIDEuMTQyODIgMjUuOTQwNCAxLjE0MjgyQzI3LjkxMjggMS4xNDI4MiAyOS44MzQgMS4zMTYyNSAzMS43MDQzIDEuNjYyMjVDMzMuNTc1IDIuMDA4ODIgMzUuMzQzMiAyLjUyMjgyIDM3LjAwOTUgMy4yMDU2OEMzOC42NzU4IDMuODg4MjUgNDAuMjExNCA0Ljc0ODgyIDQxLjYxNzUgNS43ODc2OEM0My4wMjMgNi44MjY1NCA0NC4yMzAyIDguMDQ4MjUgNDUuMjM5NCA5LjQ1MjgyQzQ2LjI0NzYgMTAuODU4IDQ3LjAzNTUgMTIuNDQwNSA0Ny42MDI1IDE0LjIwMTRDNDguMTY5MSAxNS45NjI4IDQ4LjQ1MjkgMTcuOTAxNCA0OC40NTI5IDIwLjAxODJDNDguNDUyOSAyMi4xOTQ4IDQ4LjEzNDkgMjQuMTU4MyA0Ny41MDEgMjUuOTA5MUM0Ni44NjU4IDI3LjY2IDQ2LjAwNDcgMjkuMTU0MyA0NC45MTYzIDMwLjM5MDVDNDMuODI4MiAzMS42MjcxIDQyLjU2NDIgMzIuNTgyIDQxLjEyNDQgMzMuMjU0NUMzOS42ODQ3IDMzLjkyNzQgMzguMTYwNCAzNC4yNjM0IDM2LjU1MDYgMzQuMjYzNEMzNS4zNzE0IDM0LjI2MzQgMzQuMzg1NSAzNC4xMDAzIDMzLjU5MjMgMzMuNzc0QzMyLjc5ODQgMzMuNDQ3NCAzMi4xODA4IDMyLjk4NzQgMzEuNzM4OSAzMi4zOTM3QzMxLjI5NjcgMzEuODAwMyAzMS4wMTg5IDMxLjA4OCAzMC45MDU0IDMwLjI1NjhDMzAuNzkxNyAyOS40MjYgMzAuODM3OSAyOC4zMzI4IDMwLjk5NjkgMjcuMzIzNEMyOS44NDA2IDI5LjU5ODggMjguMzgzMyAzMS40MzkxIDI2LjY3MTcgMzIuNDk3NEMyNC45NTk1IDMzLjU1NiAyMy4wODM4IDM0LjA4NTEgMjEuMDQzNSAzNC4wODUxQzE5Ljg0MTYgMzQuMDg1MSAxOC44MTAyIDMzLjkwMjUgMTcuOTQ4NyAzMy41MzYzQzE3LjA4NjkgMzMuMTcwMyAxNi4zNjcyIDMyLjY3NTQgMTUuNzg5MiAzMi4wNTIzQzE1LjIxMSAzMS40MjkxIDE0Ljc4NiAzMC42OTc3IDE0LjUxMzkgMjkuODU2M0MxNC4yNDE3IDI5LjAxNTcgMTQuMTA1NiAyOC4xMTAzIDE0LjEwNTYgMjcuMTQwOEMxNC4xMDU2IDI2LjAzMjggMTQuMjY5NyAyNC45MTAzIDE0LjU5ODcgMjMuNzcyM0MxNC45MjcyIDIyLjYzNDggMTUuNDA5IDIxLjU0NjUgMTYuMDQ0MSAyMC41MDc3QzE2LjY3ODcgMTkuNDY4OCAxNy40NjA2IDE4LjQ5NDggMTguMzkwNiAxNy41ODQ1QzE5LjMxOTkgMTYuNjc0NSAyMC4zNzQgMTUuODg4MyAyMS41NTMyIDE1LjIyNTFDMjIuNzMxOCAxNC41NjI1IDI0LjAzNTggMTQuMDM4IDI1LjQ2NDIgMTMuNjUyM0MyNi44OTIzIDEzLjI2NjUgMjguNDMzOSAxMy4wNzM0IDMwLjA4OTIgMTMuMDczNEMzMS4wMTg5IDEzLjA3MzQgMzEuOTY1MiAxMy4xNDc3IDMyLjkyODggMTMuMjk2QzMzLjg5MjQgMTMuNDQ0MyAzNC43MTQzIDEzLjY2NjggMzUuMzk0MSAxMy45NjM3TDMwLjk5NjkgMjcuMzIzNFwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0F1dGhQYXNzd29yZCc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDQ0IDU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zOCAyMC4xMTNWMTQuNUMzOCA2LjUwNSAzMC44MjIgMCAyMiAwQzEzLjE3OCAwIDYgNi41MDUgNiAxNC41QzYgMTUuMDUzIDYuNDQ3IDE1LjUgNyAxNS41QzcuNTUzIDE1LjUgOCAxNS4wNTMgOCAxNC41QzggNy42MDcgMTQuMjggMiAyMiAyQzI5LjcyIDIgMzYgNy42MDcgMzYgMTQuNVYyMEg3LjIyOUMzLjI0MyAyMCAwIDIzLjI0MyAwIDI3LjIyOVY0Ni43NzFDMCA1MC43NTcgMy4yNDMgNTQgNy4yMjkgNTRIMzYuNzcxQzQwLjc1NyA1NCA0NCA1MC43NTcgNDQgNDYuNzcxVjI3LjIyOUM0NCAyMy42NjMgNDEuNDAxIDIwLjY5OSAzOCAyMC4xMTNaTTQyIDQ2Ljc3MUM0MiA0OS42NTQgMzkuNjU0IDUyIDM2Ljc3MSA1Mkg3LjIyOUM0LjM0NiA1MiAyIDQ5LjY1NCAyIDQ2Ljc3MVYyNy4yMjlDMiAyNC4zNDYgNC4zNDYgMjIgNy4yMjkgMjJIMzYuNzcxQzM5LjY1NCAyMiA0MiAyNC4zNDYgNDIgMjcuMjI5VjQ2Ljc3MVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMiAyOEMxOS43OTQgMjggMTggMjkuNzk0IDE4IDMyVjM4QzE4IDQwLjIwNiAxOS43OTQgNDIgMjIgNDJDMjQuMjA2IDQyIDI2IDQwLjIwNiAyNiAzOFYzMkMyNiAyOS43OTQgMjQuMjA2IDI4IDIyIDI4Wk0yNCAzOEMyNCAzOS4xMDMgMjMuMTAzIDQwIDIyIDQwQzIwLjg5NyA0MCAyMCAzOS4xMDMgMjAgMzhWMzJDMjAgMzAuODk3IDIwLjg5NyAzMCAyMiAzMEMyMy4xMDMgMzAgMjQgMzAuODk3IDI0IDMyVjM4WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ09wZW5FeWUnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA2MCAzNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEuMDYyIDkuNTYxMDRDMzkuMTczIC0yLjMyNzk2IDE5LjgzIC0yLjMyNzk2IDcuOTQxIDkuNTYxMDRMMCAxNy41MDFMOC4xMzggMjUuNjM5QzE0LjA4MiAzMS41ODMgMjEuODkgMzQuNTU2IDI5LjY5OSAzNC41NTZDMzcuNTA4IDM0LjU1NiA0NS4zMTUgMzEuNTg0IDUxLjI2IDI1LjYzOUw1OS4yMDEgMTcuNjk4TDUxLjA2MiA5LjU2MTA0Wk00OS44NDUgMjQuMjI1QzM4LjczNiAzNS4zMzMgMjAuNjYxIDM1LjMzMyA5LjU1MiAyNC4yMjVMMi44MjggMTcuNTAxTDkuMzU1IDEwLjk3NEMyMC40NjQgLTAuMTMzOTYzIDM4LjUzOSAtMC4xMzM5NjMgNDkuNjQ4IDEwLjk3NEw1Ni4zNzIgMTcuNjk4TDQ5Ljg0NSAyNC4yMjVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjguNTcyIDkuNTcwMDdDMjQuNzEyIDkuNTcwMDcgMjEuNTcyIDEyLjcxMDEgMjEuNTcyIDE2LjU3MDFDMjEuNTcyIDE3LjEyMjEgMjIuMDIgMTcuNTcwMSAyMi41NzIgMTcuNTcwMUMyMy4xMjQgMTcuNTcwMSAyMy41NzIgMTcuMTIyMSAyMy41NzIgMTYuNTcwMUMyMy41NzIgMTMuODEzMSAyNS44MTUgMTEuNTcwMSAyOC41NzIgMTEuNTcwMUMyOS4xMjQgMTEuNTcwMSAyOS41NzIgMTEuMTIyMSAyOS41NzIgMTAuNTcwMUMyOS41NzIgMTAuMDE4MSAyOS4xMjUgOS41NzAwNyAyOC41NzIgOS41NzAwN1pcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOS41NzIgNC41NzAwN0MyMi40MDQgNC41NzAwNyAxNi41NzIgMTAuNDAyMSAxNi41NzIgMTcuNTcwMUMxNi41NzIgMjQuNzM4MSAyMi40MDQgMzAuNTcwMSAyOS41NzIgMzAuNTcwMUMzNi43NCAzMC41NzAxIDQyLjU3MiAyNC43MzgxIDQyLjU3MiAxNy41NzAxQzQyLjU3MiAxMC40MDIxIDM2Ljc0MSA0LjU3MDA3IDI5LjU3MiA0LjU3MDA3Wk0yOS41NzIgMjguNTcwMUMyMy41MDcgMjguNTcwMSAxOC41NzIgMjMuNjM1MSAxOC41NzIgMTcuNTcwMUMxOC41NzIgMTEuNTA1MSAyMy41MDcgNi41NzAwNyAyOS41NzIgNi41NzAwN0MzNS42MzcgNi41NzAwNyA0MC41NzIgMTEuNTA1MSA0MC41NzIgMTcuNTcwMUM0MC41NzIgMjMuNjM1MSAzNS42MzggMjguNTcwMSAyOS41NzIgMjguNTcwMVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdDbG9zZUV5ZSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDYwIDQ5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS4yODUgMzYuMzlDMTEuNDY5IDM2LjUzNiAxMS42ODkgMzYuNjA4IDExLjkwOCAzNi42MDhDMTIuMjAyIDM2LjYwOCAxMi40OTMgMzYuNDc5IDEyLjY5MSAzNi4yMzFDMTMuMDM1IDM1Ljc5OSAxMi45NjQgMzUuMTcgMTIuNTMyIDM0LjgyNkMxMS43MzEgMzQuMTg4IDEwLjk1NSAzMy40OTUgMTAuMjI3IDMyLjc2NkwyLjgyOSAyNS4zNjhMMTAuNDU4IDE3LjczOUMxNy43OTIgMTAuNDA2IDI4LjQ2MSA3LjkwMzA0IDM4LjI5NyAxMS4yMDVDMzguODIgMTEuMzc4IDM5LjM4NyAxMS4wOTggMzkuNTY0IDEwLjU3NUMzOS43MzkgMTAuMDUyIDM5LjQ1OCA5LjQ4NDA0IDM4LjkzNCA5LjMwODA0QzI4LjM3MiA1Ljc2MzA0IDE2LjkxOCA4LjQ1MTA0IDkuMDQ0IDE2LjMyNEwwIDI1LjM2OEw4LjgxMiAzNC4xOEM5LjU5MyAzNC45NjIgMTAuNDI2IDM1LjcwNSAxMS4yODUgMzYuMzlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAuMjM3IDE2LjMyNTFDNDguODg5IDE0Ljk3NzEgNDcuNDExIDEzLjc2MTEgNDUuODQzIDEyLjcwOTFDNDUuMzg1IDEyLjQwMjEgNDQuNzYyIDEyLjUyNDEgNDQuNDU1IDEyLjk4MjFDNDQuMTQ3IDEzLjQ0MDEgNDQuMjcgMTQuMDYyMSA0NC43MjggMTQuMzcwMUM0Ni4xODggMTUuMzQ5MSA0Ny41NjYgMTYuNDgzMSA0OC44MjIgMTcuNzM5MUw1Ni4yMiAyNS4xMzcxTDQ4LjU5MSAzMi43NjYxQzQxLjIwNiA0MC4xNTExIDMwLjA3OCA0Mi42NDgxIDIwLjIzOSAzOS4xMjIxQzE5LjcxOSAzOC45MzUxIDE5LjE0NiAzOS4yMDYxIDE4Ljk2IDM5LjcyNjFDMTguNzc0IDQwLjI0NjEgMTkuMDQ0IDQwLjgxODEgMTkuNTY0IDQxLjAwNTFDMjIuNzQ2IDQyLjE0NTEgMjYuMDU0IDQyLjY5ODEgMjkuMzQgNDIuNjk4MUMzNi45NjEgNDIuNjk4MSA0NC40NjQgMzkuNzIxMSA1MC4wMDUgMzQuMTgwMUw1OS4wNDggMjUuMTM3MUw1MC4yMzcgMTYuMzI1MVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMC41MzkgMzYuNzc0MUMyOC4zODYgMzYuNzc0MSAyNi4yODggMzYuMTc2MSAyNC40NjkgMzUuMDQ0MUMyNC4wMDIgMzQuNzU0MSAyMy4zODUgMzQuODk2MSAyMy4wOTIgMzUuMzY1MUMyMi44IDM1LjgzNDEgMjIuOTQ0IDM2LjQ1MDEgMjMuNDEzIDM2Ljc0MjFDMjUuNTQ4IDM4LjA3MjEgMjguMDEzIDM4Ljc3NDEgMzAuNTM5IDM4Ljc3NDFDMzcuOTgzIDM4Ljc3NDEgNDQuMDM5IDMyLjcxODEgNDQuMDM5IDI1LjI3NDFDNDQuMDM5IDIyLjU4OTEgNDMuMjUyIDE5Ljk5NTEgNDEuNzY0IDE3Ljc3MjFDNDEuNDU2IDE3LjMxMzEgNDAuODM0IDE3LjE5MDEgNDAuMzc3IDE3LjQ5NzFDMzkuOTE4IDE3LjgwNTEgMzkuNzk1IDE4LjQyNjEgNDAuMTAyIDE4Ljg4NDFDNDEuMzY5IDIwLjc3NzEgNDIuMDM5IDIyLjk4NjEgNDIuMDM5IDI1LjI3NDFDNDIuMDM5IDMxLjYxNjEgMzYuODggMzYuNzc0MSAzMC41MzkgMzYuNzc0MVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMC41MzkgMTMuNzc0QzMyLjYwNCAxMy43NzQgMzQuNjI4IDE0LjMyNyAzNi4zOTQgMTUuMzc0QzM2Ljg2OCAxNS42NTUgMzcuNDgyIDE1LjQ5OSAzNy43NjQgMTUuMDIzQzM4LjA0NSAxNC41NDggMzcuODg5IDEzLjkzNSAzNy40MTMgMTMuNjUzQzM1LjMzOSAxMi40MjQgMzIuOTYyIDExLjc3NCAzMC41MzggMTEuNzc0QzIzLjA5NCAxMS43NzQgMTcuMDM4IDE3LjgzIDE3LjAzOCAyNS4yNzRDMTcuMDM4IDI3LjM1OCAxNy41IDI5LjM1NyAxOC40MTIgMzEuMjE1QzE4LjU4NiAzMS41NjkgMTguOTQxIDMxLjc3NSAxOS4zMTEgMzEuNzc1QzE5LjQ1OCAzMS43NzUgMTkuNjA5IDMxLjc0MiAxOS43NSAzMS42NzNDMjAuMjQ2IDMxLjQyOSAyMC40NTEgMzAuODMgMjAuMjA4IDMwLjMzNUMxOS40MzIgMjguNzUzIDE5LjAzOCAyNy4wNTEgMTkuMDM4IDI1LjI3NUMxOS4wMzkgMTguOTMzIDI0LjE5OCAxMy43NzQgMzAuNTM5IDEzLjc3NFpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NC42MjA5IDAuNTY3MDU0QzU0LjIyOTkgMC4xNzYwNTQgNTMuNTk3OSAwLjE3NjA1NCA1My4yMDY5IDAuNTY3MDU0TDYuNzA2OTUgNDcuMDY3MUM2LjMxNTk1IDQ3LjQ1ODEgNi4zMTU5NSA0OC4wOTAxIDYuNzA2OTUgNDguNDgxMUM2LjkwMTk1IDQ4LjY3NjEgNy4xNTc5NSA0OC43NzQxIDcuNDEzOTUgNDguNzc0MUM3LjY2OTk1IDQ4Ljc3NDEgNy45MjU5NSA0OC42NzYxIDguMTIwOTUgNDguNDgxMUw1NC42MjA5IDEuOTgxMDVDNTUuMDExOSAxLjU5MTA1IDU1LjAxMTkgMC45NTgwNTQgNTQuNjIwOSAwLjU2NzA1NFpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdBdXRoRm9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNTUgNzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwLjg3NSA0LjkzMjE0SDM0LjM3NUwzNi44NSAxLjk3MjA5QzM3LjMwNjUgMS40MjgxOCAzNy4xODI3IDAuNjU0ODcgMzYuNTc1IDAuMjQ2NjNDMzUuOTY4NiAtMC4xNjE2MTEgMzUuMTA2NSAtMC4wNTE4NDIxIDM0LjY1MTQgMC40OTMzMDFMMzAuOTM3NSA0LjkzMjE0SDI0LjIyNDhMMjEuODU0MiAwLjY4MDc3MUMyMS41MTMyIDAuMDcxNDkzNCAyMC42ODgyIC0wLjE3MjcxMSAyMC4wMDkgMC4xMjk0NjFDMTkuMzI5OCAwLjQzNDEgMTkuMDU0NyAxLjE3NTM1IDE5LjM5NDQgMS43ODQ2MkwyMS4xNTAyIDQuOTMyMTRINC4xMjVDMS44NTA3NSA0LjkzMjE0IDAgNi41OTIyNCAwIDguNjMyMjFWNzAuMjk5OUMwIDcyLjMzOTkgMS44NTA3NSA3NCA0LjEyNSA3NEg1MC44NzVDNTMuMTQ5MyA3NCA1NSA3Mi4zMzk5IDU1IDcwLjI5OTlWOC42MzIyMUM1NSA2LjU5MjI0IDUzLjE0OTMgNC45MzIxNCA1MC44NzUgNC45MzIxNFpNNTIuMjUgNzAuMjk5OUM1Mi4yNSA3MC45ODA3IDUxLjYzNCA3MS41MzMzIDUwLjg3NSA3MS41MzMzSDQuMTI1QzMuMzY2IDcxLjUzMzMgMi43NSA3MC45ODA3IDIuNzUgNzAuMjk5OVY4LjYzMjIxQzIuNzUgNy45NTE0IDMuMzY2IDcuMzk4ODUgNC4xMjUgNy4zOTg4NUgyMi41MjUyTDIzLjkwMDIgOS44NjU1NkMyMi43NDUzIDEwLjc3MDggMjIgMTIuMDg0NCAyMiAxMy41NjU2QzIyIDE2LjI4NjQgMjQuNDY2NyAxOC40OTkgMjcuNSAxOC40OTlDMzAuNTMzMyAxOC40OTkgMzMgMTYuMjg2NCAzMyAxMy41NjU2QzMzIDEwLjg0NDggMzAuNTMzMyA4LjYzMjIxIDI3LjUgOC42MzIyMUMyNy4xMDU0IDguNjMyMjEgMjYuNzIxOCA4LjY3MjkxIDI2LjM1MDUgOC43NDQ0NEwyNS41OTk4IDcuMzk4ODVINTAuODc1QzUxLjYzNCA3LjM5ODg1IDUyLjI1IDcuOTUxNCA1Mi4yNSA4LjYzMjIxVjcwLjI5OTlaTTI1LjIwNjUgMTIuMjEwMkwyNi4yNjk0IDE0LjExNjlDMjYuNTExNCAxNC41NDk4IDI2Ljk5NjcgMTQuNzk5IDI3LjUwMTQgMTQuNzk5QzI3LjcwNzYgMTQuNzk5IDI3LjkxOCAxNC43NTcgMjguMTE0NiAxNC42Njk1QzI4Ljc5MzkgMTQuMzY0OCAyOS4wNjg5IDEzLjYyMzYgMjguNzI5MiAxMy4wMTQzTDI3LjY3MDUgMTEuMTE0OUMyOS4xMDYgMTEuMTk1MSAzMC4yNSAxMi4yNTgzIDMwLjI1IDEzLjU2NTZDMzAuMjUgMTQuOTI2IDI5LjAxNjYgMTYuMDMyMyAyNy41IDE2LjAzMjNDMjUuOTgzNCAxNi4wMzIzIDI0Ljc1IDE0LjkyNiAyNC43NSAxMy41NjU2QzI0Ljc1IDEzLjA2NDkgMjQuOTE5MSAxMi41OTk5IDI1LjIwNjUgMTIuMjEwMlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MS4yNSA1MC41NjYzSDEzLjc1QzEyLjk4OTYgNTAuNTY2MyAxMi4zNzUgNTEuMTE3NiAxMi4zNzUgNTEuNzk5NkMxMi4zNzUgNTIuNDgxNyAxMi45ODk2IDUzLjAzMyAxMy43NSA1My4wMzNINDEuMjVDNDIuMDEwNCA1My4wMzMgNDIuNjI1IDUyLjQ4MTcgNDIuNjI1IDUxLjc5OTZDNDIuNjI1IDUxLjExNzYgNDIuMDEwNCA1MC41NjYzIDQxLjI1IDUwLjU2NjNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDEuMjUgNTYuNzMzMkgxMy43NUMxMi45ODk2IDU2LjczMzIgMTIuMzc1IDU3LjI4NDUgMTIuMzc1IDU3Ljk2NjVDMTIuMzc1IDU4LjY0ODYgMTIuOTg5NiA1OS4xOTk5IDEzLjc1IDU5LjE5OTlINDEuMjVDNDIuMDEwNCA1OS4xOTk5IDQyLjYyNSA1OC42NDg2IDQyLjYyNSA1Ny45NjY1QzQyLjYyNSA1Ny4yODQ1IDQyLjAxMDQgNTYuNzMzMiA0MS4yNSA1Ni43MzMyWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjI1IDYyLjg5OTlIMTMuNzVDMTIuOTg5NiA2Mi44OTk5IDEyLjM3NSA2My40NTEyIDEyLjM3NSA2NC4xMzMzQzEyLjM3NSA2NC44MTUzIDEyLjk4OTYgNjUuMzY2NiAxMy43NSA2NS4zNjY2SDQxLjI1QzQyLjAxMDQgNjUuMzY2NiA0Mi42MjUgNjQuODE1MyA0Mi42MjUgNjQuMTMzM0M0Mi42MjUgNjMuNDUxMiA0Mi4wMTA0IDYyLjg5OTkgNDEuMjUgNjIuODk5OVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNS43NSA0NS42MzI5SDQxLjI1VjIwLjk2NThIMTMuNzVWNDUuNjMyOUgxOS4yNUgzNS43NVpNMjIgNDMuMTY2MkMyMiA0MC40NDU0IDI0LjQ2NjggMzguMjMyOCAyNy41IDM4LjIzMjhDMzAuNTMzMyAzOC4yMzI4IDMzIDQwLjQ0NTQgMzMgNDMuMTY2MkgyMlpNMjMuMzc1IDMyLjA2NkMyMy4zNzUgMzAuMDI2IDI1LjIyNTcgMjguMzY1OSAyNy41IDI4LjM2NTlDMjkuNzc0MyAyOC4zNjU5IDMxLjYyNSAzMC4wMjYgMzEuNjI1IDMyLjA2NkMzMS42MjUgMzQuMTA2IDI5Ljc3NDMgMzUuNzY2MSAyNy41IDM1Ljc2NjFDMjUuMjI1NyAzNS43NjYxIDIzLjM3NSAzNC4xMDYgMjMuMzc1IDMyLjA2NlpNMTYuNSA0My4xNjYyVjIzLjQzMjVIMzguNVY0My4xNjYySDM1Ljc1QzM1Ljc1IDQwLjQ5MjMgMzQuMTU2NCAzOC4xNTI2IDMxLjc4MDQgMzYuODUyN0MzMy4zNDkyIDM1LjcyMDQgMzQuMzc1IDM0LjAwNzMgMzQuMzc1IDMyLjA2NkMzNC4zNzUgMjguNjY1NyAzMS4yOTA5IDI1Ljg5OTIgMjcuNSAyNS44OTkyQzIzLjcwOTEgMjUuODk5MiAyMC42MjUgMjguNjY1NyAyMC42MjUgMzIuMDY2QzIwLjYyNSAzNC4wMDczIDIxLjY1MDcgMzUuNzIxNyAyMy4yMTk2IDM2Ljg1MjdDMjAuODQzNiAzOC4xNTI2IDE5LjI1IDQwLjQ5MjMgMTkuMjUgNDMuMTY2MkgxNi41WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0F1dGhDaGVja1RydWUnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDU2IDUyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00OS4zNTU5IDE3LjkzMjJDNDguODMxMSAxNy45MzIyIDQ4LjQwNjggMTguMzU2NCA0OC40MDY4IDE4Ljg4MTNWNDkuMjU0MkgxLjg5ODMxVjIuNzQ1NzJINDguNDA2OFYzLjY5NDg3QzQ4LjQwNjggNC4yMTk3NSA0OC44MzExIDQuNjQ0MDIgNDkuMzU1OSA0LjY0NDAyQzQ5Ljg4MDggNC42NDQwMiA1MC4zMDUxIDQuMjE5NzUgNTAuMzA1MSAzLjY5NDg3VjAuODQ3NDEySDBWNTEuMTUyNUg1MC4zMDUxVjE4Ljg4MTNDNTAuMzA1MSAxOC4zNTY0IDQ5Ljg4MDggMTcuOTMyMiA0OS4zNTU5IDE3LjkzMjJaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTUuNzIxOSA0LjkyMjE0QzU1LjM1MDggNC41NTEwMiA1NC43NTA5IDQuNTUxMDIgNTQuMzc5OCA0LjkyMjE0TDI1LjYyNzEgMzMuNjc0OEwxMy4yMjE3IDIxLjI2OTRDMTIuODUwNiAyMC44OTgzIDEyLjI1MDcgMjAuODk4MyAxMS44Nzk2IDIxLjI2OTRDMTEuNTA4NSAyMS42NDA1IDExLjUwODUgMjIuMjQwNCAxMS44Nzk2IDIyLjYxMTVMMjQuOTU2MSAzNS42ODhDMjUuMTQxMiAzNS44NzMxIDI1LjM4NDEgMzUuOTY2MSAyNS42MjcxIDM1Ljk2NjFDMjUuODcwMSAzNS45NjYxIDI2LjExMzEgMzUuODczMSAyNi4yOTgyIDM1LjY4OEw1NS43MjE5IDYuMjY0MjRDNTYuMDkzIDUuODkzMTIgNTYuMDkzIDUuMjkzMjYgNTUuNzIxOSA0LjkyMjE0WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0F1dGhDaGVja0ZhbHNlJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA1MSA1MlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00OS4zNTU5IDE3LjkzMjJDNDguODMxMSAxNy45MzIyIDQ4LjQwNjggMTguMzU2NCA0OC40MDY4IDE4Ljg4MTNWNDkuMjU0MkgxLjg5ODMxVjIuNzQ1NzJINDguNDA2OFYzLjY5NDg3QzQ4LjQwNjggNC4yMTk3NSA0OC44MzExIDQuNjQ0MDIgNDkuMzU1OSA0LjY0NDAyQzQ5Ljg4MDggNC42NDQwMiA1MC4zMDUxIDQuMjE5NzUgNTAuMzA1MSAzLjY5NDg3VjAuODQ3NDEySDBWNTEuMTUyNUg1MC4zMDUxVjE4Ljg4MTNDNTAuMzA1MSAxOC4zNTY0IDQ5Ljg4MDggMTcuOTMyMiA0OS4zNTU5IDE3LjkzMjJaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCI0OS40XCIgeTE9XCI0XCIgeDI9XCI0OS40XCIgeTI9XCIxOVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIC8vVklERU8gQ09OVFJPTFNcclxuICAgICAgICBjYXNlICdQbGF5JzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMTMxIDE2MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIwLjYxOSA2Ni4zNzc4TDEyMC42MTkgNjYuMzc3OEMxMjYuNzEgNzAuMjgxNSAxMjkuOTYzIDc1LjQ3OTcgMTI5Ljk2MiA4MC45OTI3QzEyOS45NjIgODYuNTA4MiAxMjYuNjcxIDkxLjcwODMgMTIwLjU4NSA5NS42MTQ1TDI0LjQ0NiAxNTcuMjE2TDI0LjQ0NTYgMTU3LjIxNkMyMC4wNDg0IDE2MC4wMzkgMTUuNzQxOCAxNjEuNSAxMi4xNDU4IDE2MS41QzguNjk4MDkgMTYxLjUgNS45NDQ1MiAxNjAuMjEgNC4wNDIxOSAxNTcuODYyQzIuMTI5NTggMTU1LjUwMSAxLjAzNzk5IDE1Mi4wMiAxLjAzNzk5IDE0Ny41ODJWMTQuNDM5M0MxLjAzNzk5IDkuOTk1NDcgMi4xMzA5OCA2LjUwOTUxIDQuMDQ3MDcgNC4xNDQ3M0M1Ljk1Mjg3IDEuNzkyNjUgOC43MTIwMyAwLjUgMTIuMTY4MiAwLjVDMTUuNzYwMyAwLjUgMjAuMTM4NiAxLjk2MTA5IDI0LjUyNDIgNC43NzQ1MkwyNC41MjQzIDQuNzc0NjFMMTIwLjYxOSA2Ni4zNzc4WlwiIGZpbGw9XCIjOEMwODIxXCIgc3Ryb2tlPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdQYXVzZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgOTYgMTYyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjU2LjVcIiB5PVwiMC41XCIgd2lkdGg9XCIzOVwiIGhlaWdodD1cIjE2MVwiIHJ4PVwiMTEuNVwiIGZpbGw9XCIjOEMwODIxXCIgc3Ryb2tlPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjAuNVwiIHk9XCIwLjVcIiB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMTYxXCIgcng9XCIxMS41XCIgZmlsbD1cIiM4QzA4MjFcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdWb2x1bWUnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA1MyA1M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjguNDA0IDMuNDEyODFDMjcuNDI4IDIuODYwODEgMjYuMjczIDIuODc4ODEgMjUuMzE0IDMuNDU2ODFDMjUuMjY4IDMuNDgzODEgMjUuMjI0IDMuNTE1ODEgMjUuMTg0IDMuNTQ5ODFMMTEuNjM0IDE1LjAxMjhIMUMwLjQ0NyAxNS4wMTI4IDAgMTUuNDU5OCAwIDE2LjAxMjhWMzUuMDEyOEMwIDM1LjI3ODggMC4xMDUgMzUuNTMyOCAwLjI5MyAzNS43MTk4QzAuNDgxIDM1LjkwNjggMC43MzQgMzYuMDEyOCAxIDM2LjAxMjhMMTEuNjEgMzYuMDA3OEwyNS4xNTMgNDguNDQ3OEMyNS4yMDMgNDguNDkzOCAyNS4yNTcgNDguNTMzOCAyNS4zMTQgNDguNTY3OEMyNS44MDYgNDguODY0OCAyNi4zNTEgNDkuMDEzOCAyNi44OTYgNDkuMDEzOEMyNy40MTMgNDkuMDEyOCAyNy45MjkgNDguODc5OCAyOC40MDQgNDguNjExOEMyOS40MDMgNDguMDQ3OCAzMCA0Ny4wMTc4IDMwIDQ1Ljg1NjhWNi4xNjg4MUMzMCA1LjAwNzgxIDI5LjQwMyAzLjk3NzgxIDI4LjQwNCAzLjQxMjgxWk0yOCA0NS44NTY4QzI4IDQ2LjI4NzggMjcuNzgzIDQ2LjY2NjggMjcuNDIxIDQ2Ljg3MThDMjcuMjY2IDQ2Ljk1ODggMjYuODczIDQ3LjEyNjggMjYuNDIxIDQ2Ljg5NzhMMTMgMzQuNTY4OFYzMC4wMTI4QzEzIDI5LjQ1OTggMTIuNTUzIDI5LjAxMjggMTIgMjkuMDEyOEMxMS40NDcgMjkuMDEyOCAxMSAyOS40NTk4IDExIDMwLjAxMjhWMzQuMDA4OEwyIDM0LjAxMjhWMTcuMDEyOEgxMVYyMS4wMTI4QzExIDIxLjU2NTggMTEuNDQ3IDIyLjAxMjggMTIgMjIuMDEyOEMxMi41NTMgMjIuMDEyOCAxMyAyMS41NjU4IDEzIDIxLjAxMjhWMTYuNDc2OEwyNi40MDUgNS4xMzY4MUMyNi44NjYgNC44OTQ4MSAyNy4yNjUgNS4wNjY4MSAyNy40MjEgNS4xNTQ4MUMyNy43ODMgNS4zNTk4MSAyOCA1LjczODgxIDI4IDYuMTY4ODFWNDUuODU2OFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zOC43OTcgNy4wNjU3OEMzOC4yNzQgNi44ODg3OCAzNy43MDYgNy4xNjg3OCAzNy41MjggNy42OTE3OEMzNy4zNTEgOC4yMTM3OCAzNy42MzEgOC43ODI3OCAzOC4xNTQgOC45NjA3OEM0NS4yNTUgMTEuMzcxOCA1MC4wMjYgMTguMDIzOCA1MC4wMjYgMjUuNTEzOEM1MC4wMjYgMzIuOTk2OCA0NS4yNjQgMzkuNjQ5OCAzOC4xNzcgNDIuMDY3OEMzNy42NTUgNDIuMjQ1OCAzNy4zNzUgNDIuODEzOCAzNy41NTQgNDMuMzM3OEMzNy42OTYgNDMuNzUyOCAzOC4wODQgNDQuMDE0OCAzOC41IDQ0LjAxNDhDMzguNjA3IDQ0LjAxNDggMzguNzE2IDQzLjk5NzggMzguODIzIDQzLjk2MDhDNDYuNzE5IDQxLjI2NzggNTIuMDI1IDMzLjg1NDggNTIuMDI1IDI1LjUxNDhDNTIuMDI2IDE3LjE2NTggNDYuNzEgOS43NTI3OCAzOC43OTcgNy4wNjU3OFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00My4wMjYgMjUuNTEzQzQzLjAyNiAxOS41NDEgMzkuMDE3IDE0LjIxMSAzMy4yNzcgMTIuNTUxQzMyLjc0NCAxMi40IDMyLjE5MyAxMi43MDMgMzIuMDM5IDEzLjIzNUMzMS44ODYgMTMuNzY1IDMyLjE5MSAxNC4zMiAzMi43MjMgMTQuNDczQzM3LjYxMiAxNS44ODYgNDEuMDI3IDIwLjQyNiA0MS4wMjcgMjUuNTEzQzQxLjAyNyAzMC42IDM3LjYxMiAzNS4xNCAzMi43MjMgMzYuNTUzQzMyLjE5MiAzNi43MDYgMzEuODg2IDM3LjI2MSAzMi4wMzkgMzcuNzkxQzMyLjE2NiAzOC4yMjkgMzIuNTY1IDM4LjUxNCAzMyAzOC41MTRDMzMuMDkyIDM4LjUxNCAzMy4xODUgMzguNTAxIDMzLjI3NyAzOC40NzVDMzkuMDE4IDM2LjgxNSA0My4wMjYgMzEuNDg1IDQzLjAyNiAyNS41MTNaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnRnVsbFNjcmVlbic6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNDYgNDZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMzLjUgMkg0NFYxMi41XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NCAzMy41VjQ0SDMzLjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjUgNDRIMlYzMy41XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yIDEyLjVWMkgxMi41XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdSaW0zJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNTEgMzlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjA5MiAzOUgwLjE2VjM2LjE5Mkw0LjY5NiAzNS4xNjZWNC4zMzJMMC4xNiAzLjI1MlYwLjQ0Mzk5OEgxNC4wOTJWMy4yNTJMOS41NTYgNC4zMzJWMzUuMTY2TDE0LjA5MiAzNi4xOTJWMzlaTTMyLjM5MDggMzlIMTguNDU4OFYzNi4xOTJMMjIuOTk0OCAzNS4xNjZWNC4zMzJMMTguNDU4OCAzLjI1MlYwLjQ0Mzk5OEgzMi4zOTA4VjMuMjUyTDI3Ljg1NDggNC4zMzJWMzUuMTY2TDMyLjM5MDggMzYuMTkyVjM5Wk01MC42ODk3IDM5SDM2Ljc1NzdWMzYuMTkyTDQxLjI5MzcgMzUuMTY2VjQuMzMyTDM2Ljc1NzcgMy4yNTJWMC40NDM5OThINTAuNjg5N1YzLjI1Mkw0Ni4xNTM3IDQuMzMyVjM1LjE2Nkw1MC42ODk3IDM2LjE5MlYzOVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdSaW0yJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMzMgMzlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjA5MiAzOUgwLjE2VjM2LjE5Mkw0LjY5NiAzNS4xNjZWNC4zMzJMMC4xNiAzLjI1MlYwLjQ0Mzk5OEgxNC4wOTJWMy4yNTJMOS41NTYgNC4zMzJWMzUuMTY2TDE0LjA5MiAzNi4xOTJWMzlaTTMyLjM5MDggMzlIMTguNDU4OFYzNi4xOTJMMjIuOTk0OCAzNS4xNjZWNC4zMzJMMTguNDU4OCAzLjI1MlYwLjQ0Mzk5OEgzMi4zOTA4VjMuMjUyTDI3Ljg1NDggNC4zMzJWMzUuMTY2TDMyLjM5MDggMzYuMTkyVjM5WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdSaW0xJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMTUgMzlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjA5MiAzOUgwLjE2VjM2LjE5Mkw0LjY5NiAzNS4xNjZWNC4zMzJMMC4xNiAzLjI1MlYwLjQ0Mzk5OEgxNC4wOTJWMy4yNTJMOS41NTYgNC4zMzJWMzUuMTY2TDE0LjA5MiAzNi4xOTJWMzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAxMjk5IDMzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjk3LjQyIDMxLjY2NjdDMTI5Ny40MiAyNS43MDgzIDEyNjUuMDIgMTYuNzcwOCAxMTM1LjQ0IDE2Ljc3MDhDMTAwNS44NSAxNi43NzA4IDk0MS4wNjIgMTYuNzcwOCA4NDMuODc1IDE2Ljc3MDhDNzQ2LjY4NyAxNi43NzA4IDY1NyAxLjUgNjU3IDEuNUM2NTcgMS41IDU4Mi42ODggMTYuNzcwOCA0ODUuNSAxNi43NzA4QzM3NC41IDE2Ljc3MDggMjkzLjE0NSAxNi43NzA4IDE2My41NjIgMTYuNzcwOEMzMy45Nzg3IDE2Ljc3MDggMS41ODI3NiAyNS43MDgzIDEuNTgyNzYgMzEuNjY2N1wiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93VXBTbWFsbCc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMjUyIDMzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNTAuMTY3IDMxLjY2NjdDMjUwLjE2NyAyNS43MDgzIDI0My45NTggMTYuNzcwOCAyMTkuMTI1IDE2Ljc3MDhDMTk0LjI5MiAxNi43NzA4IDE4MS44NzUgMTYuNzcwOCAxNjMuMjUgMTYuNzcwOEMxNDQuNjI1IDE2Ljc3MDggMTMyLjIwOCAxLjg3NSAxMzIuMjA4IDEuODc1QzEzMi4yMDggMS44NzUgMTE5Ljc5MiAxNi43NzA4IDEwMS4xNjcgMTYuNzcwOEM4Mi41NDE3IDE2Ljc3MDggNTcuNzA4NCAxNi43NzA4IDMyLjg3NSAxNi43NzA4QzguMDQxNzEgMTYuNzcwOCAxLjgzMzM3IDI1LjcwODMgMS44MzMzNyAzMS42NjY3XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdJbmZvJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMTkgNDVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMDQ3MzYgNDQuMzE3NEw3LjAzMDI3IDQwLjQxMzZMNS45NTExNyAxOC41MTQyTDAuMDc5NTg5OCAxNC42NzM4TDEzLjcyNzEgMTIuMzU2OUwxMS4yODMyIDM3LjgxMUwxOC4xMDY5IDQyLjA2NEwyLjA0NzM2IDQ0LjMxNzRaTTE0LjA3NjIgNC42NzYyN0MxNC4wNzYyIDUuMzExMDQgMTMuOTQ5MiA1LjkxNDA2IDEzLjY5NTMgNi40ODUzNUMxMy40NDE0IDcuMDM1NDggMTMuMDkyMyA3LjUzMjcxIDEyLjY0NzkgNy45NzcwNUMxMi4yMDM2IDguNDAwMjMgMTEuNjk1OCA4LjczODc3IDExLjEyNDUgOC45OTI2OEMxMC41NTMyIDkuMjI1NDIgOS45NTAyIDkuMzQxOCA5LjMxNTQzIDkuMzQxOEM4LjYzODM1IDkuMzQxOCA4LjAwMzU4IDkuMjI1NDIgNy40MTExMyA4Ljk5MjY4QzYuODM5ODQgOC43Mzg3NyA2LjM0MjYxIDguNDAwMjMgNS45MTk0MyA3Ljk3NzA1QzUuNDk2MjYgNy41MzI3MSA1LjE1NzcxIDcuMDM1NDggNC45MDM4MSA2LjQ4NTM1QzQuNjQ5OSA1LjkxNDA2IDQuNTIyOTUgNS4zMTEwNCA0LjUyMjk1IDQuNjc2MjdDNC41MjI5NSA0LjAyMDM1IDQuNjQ5OSAzLjQxNzMyIDQuOTAzODEgMi44NjcxOUM1LjE1NzcxIDIuMjk1OSA1LjQ5NjI2IDEuNzk4NjcgNS45MTk0MyAxLjM3NTQ5QzYuMzQyNjEgMC45NTIzMTEgNi44Mzk4NCAwLjYyNDM0OSA3LjQxMTEzIDAuMzkxNjAyQzguMDAzNTggMC4xMzc2OTUgOC42MzgzNSAwLjAxMDc0MjIgOS4zMTU0MyAwLjAxMDc0MjJDOS45NTAyIDAuMDEwNzQyMiAxMC41NTMyIDAuMTM3Njk1IDExLjEyNDUgMC4zOTE2MDJDMTEuNjk1OCAwLjYyNDM0OSAxMi4yMDM2IDAuOTUyMzExIDEyLjY0NzkgMS4zNzU0OUMxMy4wOTIzIDEuNzk4NjcgMTMuNDQxNCAyLjI5NTkgMTMuNjk1MyAyLjg2NzE5QzEzLjk0OTIgMy40MTczMiAxNC4wNzYyIDQuMDIwMzUgMTQuMDc2MiA0LjY3NjI3WlwiIGZpbGw9XCIjMjkxNzUwXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PkltZzwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc3ZnU3ByaXRlIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImF1dGgtdmlldy1zdHlsZXNfd3JhcHBlcl9fM3E4STJcIixcblx0XCJ3cmFwcGVyX193aW5kb3dcIjogXCJhdXRoLXZpZXctc3R5bGVzX3dyYXBwZXJfX3dpbmRvd19fQXlsbFRcIixcblx0XCJ3cmFwcGVyX19pY29uXCI6IFwiYXV0aC12aWV3LXN0eWxlc193cmFwcGVyX19pY29uX18zZHVqaVwiLFxuXHRcImlucHV0V3JhcHBlclwiOiBcImF1dGgtdmlldy1zdHlsZXNfaW5wdXRXcmFwcGVyX18xWE1EMlwiLFxuXHRcImlucHV0XCI6IFwiYXV0aC12aWV3LXN0eWxlc19pbnB1dF9fRXB1cFlcIixcblx0XCJ0aXRsZVwiOiBcImF1dGgtdmlldy1zdHlsZXNfdGl0bGVfXzFteF9vXCIsXG5cdFwiYnRuXCI6IFwiYXV0aC12aWV3LXN0eWxlc19idG5fXzJsU1NMXCIsXG5cdFwiYnRuU3ViU3ViXCI6IFwiYXV0aC12aWV3LXN0eWxlc19idG5TdWJTdWJfXzF0VFh4XCIsXG5cdFwiYnRuU3ViXCI6IFwiYXV0aC12aWV3LXN0eWxlc19idG5TdWJfXzJZMmJHXCIsXG5cdFwicG9saXRpY1wiOiBcImF1dGgtdmlldy1zdHlsZXNfcG9saXRpY19fMl9mOW1cIixcblx0XCJwb2xpdGljTGlua1wiOiBcImF1dGgtdmlldy1zdHlsZXNfcG9saXRpY0xpbmtfX1lNTjlsXCIsXG5cdFwicG9saXRpY0Vycm9yXCI6IFwiYXV0aC12aWV3LXN0eWxlc19wb2xpdGljRXJyb3JfXzEyMU1YXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dFdyYXBwZXJcIjogXCJmb3JtLXN0eWxlc19pbnB1dFdyYXBwZXJfX1pLSGQ2XCIsXG5cdFwiaW5wdXRcIjogXCJmb3JtLXN0eWxlc19pbnB1dF9fUnR6UTNcIixcblx0XCJpbnB1dEVycm9yXCI6IFwiZm9ybS1zdHlsZXNfaW5wdXRFcnJvcl9fM3dHRlZcIixcblx0XCJmaWVsZEVycm9yXCI6IFwiZm9ybS1zdHlsZXNfZmllbGRFcnJvcl9fMTVDMmlcIixcblx0XCJpbnB1dEljb25cIjogXCJmb3JtLXN0eWxlc19pbnB1dEljb25fXzN4amE4XCIsXG5cdFwic3ZnSW5wdXRcIjogXCJmb3JtLXN0eWxlc19zdmdJbnB1dF9fM3FUUURcIixcblx0XCJpbnB1dEljb25QYXNzd29yZFwiOiBcImZvcm0tc3R5bGVzX2lucHV0SWNvblBhc3N3b3JkX18zdmtocVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZSwgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vLi4vLi4vc3R5bGVzL3ZpZXdzL2F1dGgtdmlldy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLy4uLy4uL3dpZGdldHMvZm9ybS9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IHsgTkVUIH0gZnJvbSAnLi8uLi8uLi9uZXR3b3JrJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcblxyXG5jb25zdCBBdXRoTG9naW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICB0b2tlbk5hbWU6ICd1c2VyVG9rZW4nXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtlcnJvcnNEYXRhLCBzZXRFcnJvcnNEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgZGF0YVNlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtORVQuQkFDS19VUkx9L2xvZ2luYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnNhdmUoJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ydS9vZmZpY2UnKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmVycm9yID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAn0J/QsNGA0L7Qu9GMINCy0LLQtdC00LXQvSDQvdC10LLQtdGA0L3QvidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9ycy5lcnJvciA9PT0gJ25vLXVzZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yc0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXJyb3JzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LfQsNGA0LXQs9C10YHRgtGA0LjRgNC+0LLQsNC9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMuZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2MgPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NbZWxdID0gZXJyb3JzLmVycm9yW2VsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnNEYXRhKGFjYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyX193aW5kb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbj1cIkF1dGhFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb249XCJBdXRoUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5TdWJTdWJ9PtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RhdGFTZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA+0JLRhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blN1Yn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3J1L2F1dGgvcmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTG9naW5WaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRmllbGRFcnJvciA9ICh7XHJcbiAgICBjbGFzc2VzLFxyXG4gICAgdGV4dEVycm9yXHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGRFcnJvcn0+e3RleHRFcnJvcn08L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZEVycm9yIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy93aWRnZXRzL2Zvcm0tc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IEZpZWxkRXJyb3IgZnJvbSAnLi9GaWVsZEVycm9yJztcclxuXHJcbmNvbnN0IElucHV0ID0gKHtcclxuICAgIGF0dHJpYnV0ZSxcclxuICAgIGRhdGEsXHJcbiAgICBzZXREYXRhLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICB0eXBlLFxyXG4gICAgc3ZnSWNvbixcclxuICAgIGVycm9yc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBlcnJvciA9IGVycm9yc1thdHRyaWJ1dGVdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9yID8gW2NsYXNzZXMuaW5wdXQsIGNsYXNzZXMuaW5wdXRFcnJvcl0uam9pbignICcpIDogY2xhc3Nlcy5pbnB1dH0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVthdHRyaWJ1dGVdfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9eyFzaG93UGFzc3dvcmQgPyB0eXBlIDogJ3RleHQnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICB7c3ZnSWNvbiAmJiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKHN2Z0ljb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnN2Z0lucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAge3R5cGUgPT09ICdwYXNzd29yZCcgJiYgKDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0SWNvblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZSghc2hvd1Bhc3N3b3JkID8gJ09wZW5FeWUnIDogJ0Nsb3NlRXllJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3ZnSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7ISFlcnJvciAmJiA8RmllbGRFcnJvciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRFcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=