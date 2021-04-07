module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[lang]/office/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/App/ContextApp.js":
/*!***********************************!*\
  !*** ./context/App/ContextApp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ContextApp = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (ContextApp);

/***/ }),

/***/ "./context/App/actions.js":
/*!********************************!*\
  !*** ./context/App/actions.js ***!
  \********************************/
/*! exports provided: createToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony import */ var _creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creators */ "./context/App/creators.js");

const createToken = user => ({
  type: _creators__WEBPACK_IMPORTED_MODULE_0__["USER_TOKEN"],
  payload: user
});

/***/ }),

/***/ "./context/App/creators.js":
/*!*********************************!*\
  !*** ./context/App/creators.js ***!
  \*********************************/
/*! exports provided: USER_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TOKEN", function() { return USER_TOKEN; });
const USER_TOKEN = 'USER_TOKEN';

/***/ }),

/***/ "./global/decorators/ProtectedOffice.js":
/*!**********************************************!*\
  !*** ./global/decorators/ProtectedOffice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../network */ "./network.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_App_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../context/App/actions */ "./context/App/actions.js");









const ProtectedOffice = ({
  children
}) => {
  const {
    dispatchApp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_App_ContextApp__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const userToken = react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a.load('userToken');
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const dataSender = async () => {
    fetch(`${_network__WEBPACK_IMPORTED_MODULE_3__["NET"].BACK_URL}/profile`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      }
    }).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          setUser(data);
          dispatchApp(Object(_context_App_actions__WEBPACK_IMPORTED_MODULE_6__["createToken"])(data.user));
        });
      } else if (response.status === 401) {
        router.push('/ru/auth/login');
      }
    });
  };

  if (userToken) {
    if (!user) {
      dataSender();
    } else {}
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      router.push('/ru/auth/login');
    }, []);
  }

  console.log(userToken);

  if (!userToken) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedOffice);

/***/ }),

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
    first: 'день',
    second: 'дня',
    third: 'дней'
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

/***/ "./layouts/office/Office.js":
/*!**********************************!*\
  !*** ./layouts/office/Office.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/layouts/office-layouts-styles.module.scss */ "./styles/layouts/office-layouts-styles.module.scss");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu */ "./layouts/office/components/Menu.js");
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../project/data */ "./project/data.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _context_App_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../context/App/actions */ "./context/App/actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\office\\Office.js";










const Office = ({
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  const outUser = () => {
    localStorage.removeItem('userToken');
    react_cookies__WEBPACK_IMPORTED_MODULE_9___default.a.remove('userToken');
    router.push('/ru/auth/login');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeLogo,
        children: _project_data__WEBPACK_IMPORTED_MODULE_4__["DATA"].name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocial,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Telegram', {
            width: '40px',
            height: '25px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeSocialItem,
          onClick: outUser,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_5__["default"])('Out', {
            width: '40px',
            height: '25px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperBody,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.officeWrapperContent,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Office);

/***/ }),

/***/ "./layouts/office/components/Menu.js":
/*!*******************************************!*\
  !*** ./layouts/office/components/Menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _initData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initData */ "./layouts/office/components/initData.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../styles/layouts/office-layouts-styles.module.scss */ "./styles/layouts/office-layouts-styles.module.scss");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../global/utils */ "./global/utils.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\layouts\\office\\components\\Menu.js";








const Menu = () => {
  const {
    width
  } = Object(_global_utils__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const mobile = width < 768 ? true : false;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return !mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: _initData__WEBPACK_IMPORTED_MODULE_2__["configMenu"].map((item, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.officeWrapperMenuItem,
      onClick: () => router.push(item.path),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        styles: {
          fill: 'inherit',
          stroke: 'inherit'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          styles: {
            fill: 'inherit',
            stroke: 'inherit'
          },
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(item.svg, {
            width: '45px',
            height: '40px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, undefined)
    }, `itemMenu${idx}`, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 19
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMob,
    children: _initData__WEBPACK_IMPORTED_MODULE_2__["configMenu"].map((item, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.menuMobSvg,
      onClick: () => router.push(item.path),
      children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_3__["default"])(item.svg, {
        width: '40px',
        height: '40px'
      })
    }, `itemMenuMob${idx}`, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./layouts/office/components/initData.js":
/*!***********************************************!*\
  !*** ./layouts/office/components/initData.js ***!
  \***********************************************/
/*! exports provided: configMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configMenu", function() { return configMenu; });
const configMenu = [{
  title: 'Главная',
  svg: 'Home',
  path: '/ru/office'
}, {
  title: 'Курсы',
  svg: 'Course',
  path: '/ru/office/courses'
}, {
  title: 'Профиль',
  svg: 'Profile',
  path: '/ru/office/profile'
}, {
  title: 'Прибыль',
  svg: 'Money',
  path: '/ru/office/partners'
}, {
  title: 'Управление',
  svg: 'Settings',
  path: '/ru/office'
}];

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

/***/ "./pages/[lang]/office/index.js":
/*!**************************************!*\
  !*** ./pages/[lang]/office/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_office_Office__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../layouts/office/Office */ "./layouts/office/Office.js");
/* harmony import */ var _global_decorators_ProtectedOffice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../global/decorators/ProtectedOffice */ "./global/decorators/ProtectedOffice.js");
/* harmony import */ var _views_office_main_MainView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../views/office/main/MainView */ "./views/office/main/MainView.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\pages\\[lang]\\office\\index.js";





const OfficeMain = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global_decorators_ProtectedOffice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_office_Office__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_views_office_main_MainView__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (OfficeMain);

/***/ }),

/***/ "./project/data.js":
/*!*************************!*\
  !*** ./project/data.js ***!
  \*************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = {
  name: 'Motich Production',
  about: '3 чашки кофе и Ваша жизнь уже не будет прежней!  ',
  about2: 'Максимальный фокус на получение качественных, конкуретно-способных знаний.',
  about3: 'MOTICH PRODUCTION - это 99% практики, которая позволит Вам за несколько месяцев стать востребованным специалистом и попробовать себя на работе мечты! Middle Front-End & Full-stack.',
  about4: 'И это еще не все!',
  whyus: 'Вы хотите обучаться бесплатно и получать пассивный доход?',
  whyus2: 'План действий:',
  whyus3: '1. Оплатить подписку',
  whyus4: '2. Ознакомиться с системой получения прибыли',
  whyus5: '3. Начать зарабатывать',
  prices: {
    standard: {
      name: 'Standard',
      periods: [{
        sale: 99,
        price: 189,
        mounth: 1
      }, {
        sale: 277,
        price: 510,
        mounth: 3
      }, {
        sale: 529,
        price: 1420,
        mounth: 6
      }, {
        sale: 999,
        price: 2240,
        mounth: 12
      }]
    },
    premium: {
      name: 'Premium',
      periods: [{
        sale: 999,
        price: 2240,
        mounth: 12
      }]
    }
  }
};

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

/***/ "./styles/layouts/office-layouts-styles.module.scss":
/*!**********************************************************!*\
  !*** ./styles/layouts/office-layouts-styles.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"officeWrapper": "office-layouts-styles_officeWrapper__26jSr",
	"officeLogo": "office-layouts-styles_officeLogo__31fLH",
	"officeSocial": "office-layouts-styles_officeSocial__qS76U",
	"officeSocialItem": "office-layouts-styles_officeSocialItem__1am6x",
	"officeWrapperHeader": "office-layouts-styles_officeWrapperHeader__7IvRt",
	"officeWrapperBody": "office-layouts-styles_officeWrapperBody__14lYb",
	"officeWrapperMenu": "office-layouts-styles_officeWrapperMenu__7lCqZ",
	"officeWrapperContent": "office-layouts-styles_officeWrapperContent__1gf8k",
	"officeWrapperMenuItem": "office-layouts-styles_officeWrapperMenuItem__Ivf1u",
	"containerOffice": "office-layouts-styles_containerOffice__1sNYz",
	"menuMob": "office-layouts-styles_menuMob__3F_n6",
	"menuMobSvg": "office-layouts-styles_menuMobSvg__2h6_t"
};


/***/ }),

/***/ "./styles/views/main-view-styles.module.scss":
/*!***************************************************!*\
  !*** ./styles/views/main-view-styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"refferalHead": "main-view-styles_refferalHead__2E3U0",
	"refferalHeadItem": "main-view-styles_refferalHeadItem__3pLUk",
	"refferalHeadItemText": "main-view-styles_refferalHeadItemText__274zP",
	"refferalHeadItemNumber": "main-view-styles_refferalHeadItemNumber__3DC6m",
	"headItemLine": "main-view-styles_headItemLine__L4TTU",
	"refferalHeadItemTarif": "main-view-styles_refferalHeadItemTarif__1HjWi",
	"refferalHeadItemNumberDate": "main-view-styles_refferalHeadItemNumberDate__vAiL-",
	"refferalHeadItemNumberTarif": "main-view-styles_refferalHeadItemNumberTarif__3v3_H",
	"refferalHeadMob": "main-view-styles_refferalHeadMob__3mjkf",
	"refferalHeadItemMob": "main-view-styles_refferalHeadItemMob__2d0Rm",
	"refferalHeadItemWrapperMob": "main-view-styles_refferalHeadItemWrapperMob__1urbt",
	"refferalHeadItemSvgMob": "main-view-styles_refferalHeadItemSvgMob__2Bjp_",
	"refferalHeadItemTextMob": "main-view-styles_refferalHeadItemTextMob__1mEl5",
	"refferalHeadItemTextMobSmall": "main-view-styles_refferalHeadItemTextMobSmall__t-kaf",
	"refferalHeadItemNumberMob": "main-view-styles_refferalHeadItemNumberMob__2VYDr",
	"refferalHeadItemNumberMobSmall": "main-view-styles_refferalHeadItemNumberMobSmall__1b33_",
	"mainBody": "main-view-styles_mainBody__yQ7XZ",
	"mainBodyImage": "main-view-styles_mainBodyImage__3z__w",
	"mainBodyContent": "main-view-styles_mainBodyContent__3KIk5",
	"mainAction": "main-view-styles_mainAction__1dCCD",
	"quote": "main-view-styles_quote__2JPuX",
	"btnQuote": "main-view-styles_btnQuote__22sNf",
	"btnQuoteText": "main-view-styles_btnQuoteText__2PlcF",
	"why": "main-view-styles_why__Xdkk8",
	"whyActive": "main-view-styles_whyActive__Cvzve",
	"tarifWrapper": "main-view-styles_tarifWrapper__2aOJj",
	"tarifWrapperInner": "main-view-styles_tarifWrapperInner__3Shkg",
	"tarifWrapperInnerRight": "main-view-styles_tarifWrapperInnerRight__29adg",
	"tarifWrapperBody": "main-view-styles_tarifWrapperBody__2xUyZ",
	"tarifWrapperBodyPremium": "main-view-styles_tarifWrapperBodyPremium__3VuSm",
	"mainTarifCard": "main-view-styles_mainTarifCard__2L36v",
	"mainTarifCardSale": "main-view-styles_mainTarifCardSale__1vney",
	"mainTarifCardMounth": "main-view-styles_mainTarifCardMounth__3bhPs",
	"mainTarifCardPrice": "main-view-styles_mainTarifCardPrice__jm50S",
	"mainTarifBtn": "main-view-styles_mainTarifBtn__1WG_T",
	"tarifTitle": "main-view-styles_tarifTitle__3xJHh",
	"tarifTitlePremium": "main-view-styles_tarifTitlePremium__ErS9A",
	"tarifArrow": "main-view-styles_tarifArrow__2Qxr7",
	"mainTarifCardPremium": "main-view-styles_mainTarifCardPremium__3ranw",
	"mainTarifCardPremiumTitle": "main-view-styles_mainTarifCardPremiumTitle__2L-Yw",
	"mainTarifCardPremiumSubtitle": "main-view-styles_mainTarifCardPremiumSubtitle__2PpC3",
	"mainTextPar": "main-view-styles_mainTextPar__1bQ4r",
	"mainShowWhyText": "main-view-styles_mainShowWhyText__29Mue",
	"mainTarifCardWrapper": "main-view-styles_mainTarifCardWrapper__3-TXE"
};


/***/ }),

/***/ "./styles/widgets/textfield-styles.module.scss":
/*!*****************************************************!*\
  !*** ./styles/widgets/textfield-styles.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "textfield-styles_wrapper__1ABt-"
};


/***/ }),

/***/ "./views/office/main/MainView.js":
/*!***************************************!*\
  !*** ./views/office/main/MainView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/views/main-view-styles.module.scss */ "./styles/views/main-view-styles.module.scss");
/* harmony import */ var _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../styles/layouts/office-layouts-styles.module.scss */ "./styles/layouts/office-layouts-styles.module.scss");
/* harmony import */ var _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _components_MainHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MainHead */ "./views/office/main/components/MainHead.js");
/* harmony import */ var _components_MainBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MainBody */ "./views/office/main/components/MainBody.js");
/* harmony import */ var _components_MainTarif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MainTarif */ "./views/office/main/components/MainTarif.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\MainView.js";









const MainView = ({}) => {
  const {
    stateApp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_App_ContextApp__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const payment = stateApp.user && stateApp.user.status ? stateApp.user.status : '0';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [stateApp, payment]);
  console.log(payment);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_layouts_office_layouts_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.containerOffice,
    children: [payment === '1' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
      classes: _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 32
    }, undefined), payment === '1' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mainAction,
      children: "\u041D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u043A \u0422\u0415\u041C\u0410 \u0443\u0436\u0435 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u201C\u041A\u0443\u0440\u0441\u044B\u201D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
      classes: _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainTarif__WEBPACK_IMPORTED_MODULE_8__["default"], {
      classes: _styles_views_main_view_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "./views/office/main/components/MainBody.js":
/*!**************************************************!*\
  !*** ./views/office/main/components/MainBody.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_ui_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../widgets/ui/TextField */ "./widgets/ui/TextField.js");
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../project/data */ "./project/data.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\components\\MainBody.js";




const MainBody = ({
  classes
}) => {
  const {
    0: showWhy,
    1: setShowWhy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.mainBody,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.mainBodyImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.mainBodyContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_ui_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainTextPar,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].about
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainTextPar,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].about2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainTextPar,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].about3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainTextPar,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].about4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.quote,
        children: "\u041E\u0431\u0443\u0447\u0430\u044F\u0441\u044C - \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => setShowWhy(!showWhy),
        className: classes.btnQuote,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.btnQuoteText,
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043A\u0430\u043A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: showWhy ? [classes.whyActive, classes.why].join(' ') : classes.why,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'text-align': 'center'
          },
          className: classes.mainShowWhyText,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].whyus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainShowWhyText,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].whyus2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainShowWhyText,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].whyus3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.mainShowWhyText,
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].whyus4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: _project_data__WEBPACK_IMPORTED_MODULE_3__["DATA"].whyus5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainBody);

/***/ }),

/***/ "./views/office/main/components/MainHead.js":
/*!**************************************************!*\
  !*** ./views/office/main/components/MainHead.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../widgets/headerOffice/HeaderItem */ "./widgets/headerOffice/HeaderItem.js");
/* harmony import */ var _context_App_ContextApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../context/App/ContextApp */ "./context/App/ContextApp.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../network */ "./network.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../global/utils */ "./global/utils.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\components\\MainHead.js";







const MainHead = ({
  classes
}) => {
  const {
    stateApp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_App_ContextApp__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const user = stateApp.user;
  const {
    width
  } = Object(_global_utils__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const mobile = width < 768 ? true : false;
  const {
    0: userData,
    1: setUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    let cleanupFunction = false;

    if (user) {
      (async () => {
        fetch(`${_network__WEBPACK_IMPORTED_MODULE_4__["NET"].BACK_URL}/refferals/${user.id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' // 'X-Requested-With': 'XMLHttpRequest'
            // 'Authorization': 'Bearer ' + this.state.clientToken,

          },
          withCredentials: true
        }).then(response => {
          if (response.status === 200) {
            response.json().then(data => {
              if (!cleanupFunction) setUserData(data);
            });
          }
        });
      })();
    }

    return () => cleanupFunction = true;
  }, []);
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    all: 0,
    realMoney: 0,
    futureMoney: 0,
    active: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userData) {
      let active = 0;
      let all = 0;
      let realMoney = 0;
      let futureMoney = 0;

      for (let value in userData) {
        if (userData[value]) {
          userData[value].map(el => {
            all++;

            if (el.status === '1') {
              active++;

              if (value === 'first') {
                realMoney = realMoney + 10;
                futureMoney = futureMoney + 10;
              } else if (value === 'second') {
                realMoney = realMoney + 5;
                futureMoney = futureMoney + 5;
              } else if (value === 'third') {
                futureMoney = futureMoney + 3;
              }
            }
          });
        }
      }

      setCounter({
        all,
        active,
        realMoney,
        futureMoney
      });
    }
  }, [userData]);
  return !mobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHead,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: {
        tarif: 'Ваш пакет',
        date: 'действителен до '
      },
      value: {
        tarif: 'Standard',
        date: user ? user.day_end : ''
      },
      type: "tarif"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u0411\u0430\u043B\u0430\u043D\u0441",
      value: user ? user.money + ' y.e' : '0 y.e',
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0434\u043E\u0445\u043E\u0434",
      value: counter.realMoney + ' y.e',
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_widgets_headerOffice_HeaderItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: classes,
      svg: {
        name: '',
        styles: {}
      },
      title: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",
      value: counter.active,
      type: "count"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 19
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHeadMob,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__["default"])('Star', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: "Standard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u0422\u0430\u0440\u0438\u0444"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__["default"])('Clock', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMobSmall,
          children: user.day_end
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u0414\u0435\u0439\u0441\u0442\u0432. \u0434\u043E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            'margin-right': '3px'
          },
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__["default"])('MoneyList', {
            width: '13px',
            height: '13px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMob,
          children: "\u0411\u0430\u043B\u0430\u043D\u0441"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: user && user.money
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__["default"])('Money', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: counter.realMoney
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u0414\u043E\u0445\u043E\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.refferalHeadItemMob,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemWrapperMob,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_6__["default"])('Users', {
            width: '20px',
            height: '20px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemNumberMob,
          children: counter.active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.refferalHeadItemTextMobSmall,
          children: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainHead);

/***/ }),

/***/ "./views/office/main/components/MainTarif.js":
/*!***************************************************!*\
  !*** ./views/office/main/components/MainTarif.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../project/data */ "./project/data.js");
/* harmony import */ var _MainTarifCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainTarifCard */ "./views/office/main/components/MainTarifCard.js");
/* harmony import */ var _project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../project/svg/svgSprite */ "./project/svg/svgSprite.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\components\\MainTarif.js";





const MainTarif = ({
  classes
}) => {
  const standard = _project_data__WEBPACK_IMPORTED_MODULE_2__["DATA"].prices.standard;
  const premium = _project_data__WEBPACK_IMPORTED_MODULE_2__["DATA"].prices.premium;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.tarifWrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.tarifWrapperInner,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.tarifTitle,
          children: standard.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.tarifArrow,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])('ArrowUp', {
            width: '100%',
            height: '33px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.tarifWrapperBody,
        children: standard.periods.map((el, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainTarifCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          premiun: false,
          data: el,
          classes: classes
        }, `card${idx}`, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: [classes.tarifWrapperInner, classes.tarifWrapperInnerRight].join(' '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.tarifTitlePremium,
          children: premium.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.tarifArrow,
          children: Object(_project_svg_svgSprite__WEBPACK_IMPORTED_MODULE_4__["default"])('ArrowUpSmall', {
            width: '100%',
            height: '33px'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.tarifWrapperBodyPremium,
        children: premium.periods.map((el, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainTarifCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          premium: true,
          data: el,
          classes: classes
        }, `card${idx}`, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainTarif);

/***/ }),

/***/ "./views/office/main/components/MainTarifCard.js":
/*!*******************************************************!*\
  !*** ./views/office/main/components/MainTarifCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils */ "./views/office/main/utils.js");

var _jsxFileName = "D:\\MotichProduction\\motich\\views\\office\\main\\components\\MainTarifCard.js";



const MainTarifCard = ({
  premium,
  classes,
  data
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.mainTarifCardWrapper,
    children: [premium ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: [classes.mainTarifCard, classes.mainTarifCardPremium].join(' '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.mainTarifCardPremiumTitle,
        children: "\u0423\u0436\u0435 \u0441\u043A\u043E\u0440\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.mainTarifCardPremiumSubtitle,
        children: "+ \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 24
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.mainTarifCard,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.mainTarifCardPrice,
        children: [data.price, " \u0433\u0440\u043D"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.mainTarifCardSale,
        children: [data.sale, " \u0433\u0440\u043D"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.mainTarifCardMounth,
        children: [data.mounth, " \u043C\u0435\u0441\u044F\u0446", Object(_utils__WEBPACK_IMPORTED_MODULE_2__["transformWordCount"])(data.mounth)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }, undefined), !premium && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.mainTarifBtn,
      children: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainTarifCard);

/***/ }),

/***/ "./views/office/main/utils.js":
/*!************************************!*\
  !*** ./views/office/main/utils.js ***!
  \************************************/
/*! exports provided: transformWordCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformWordCount", function() { return transformWordCount; });
const transformWordCount = (count, lang) => {
  const ender = {
    first: '',
    second: 'а',
    third: 'eв'
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

/***/ "./widgets/headerOffice/HeaderItem.js":
/*!********************************************!*\
  !*** ./widgets/headerOffice/HeaderItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\MotichProduction\\motich\\widgets\\headerOffice\\HeaderItem.js";


const HeaderItem = ({
  classes,
  title,
  value,
  type
}) => {
  return type === 'count' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHeadItem,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemNumber,
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemText,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }, undefined) : type === 'tarif' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.refferalHeadItemTarif,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.headItemLine,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemText,
        children: title.tarif
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemNumberDate,
        children: value.tarif
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.headItemLine,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemText,
        children: title.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.refferalHeadItemNumberTarif,
        children: value.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderItem);

/***/ }),

/***/ "./widgets/ui/TextField.js":
/*!*********************************!*\
  !*** ./widgets/ui/TextField.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_widgets_textfield_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/widgets/textfield-styles.module.scss */ "./styles/widgets/textfield-styles.module.scss");
/* harmony import */ var _styles_widgets_textfield_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_widgets_textfield_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\MotichProduction\\motich\\widgets\\ui\\TextField.js";



const TextField = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_widgets_textfield_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TextField);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BcHAvQ29udGV4dEFwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0FwcC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXBwL2NyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL2dsb2JhbC9kZWNvcmF0b3JzL1Byb3RlY3RlZE9mZmljZS5qcyIsIndlYnBhY2s6Ly8vLi9nbG9iYWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0cy9vZmZpY2UvT2ZmaWNlLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvb2ZmaWNlL2NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL29mZmljZS9jb21wb25lbnRzL2luaXREYXRhLmpzIiwid2VicGFjazovLy8uL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW2xhbmddL29mZmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9sYXlvdXRzL29mZmljZS1sYXlvdXRzLXN0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdmlld3MvbWFpbi12aWV3LXN0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvd2lkZ2V0cy90ZXh0ZmllbGQtc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL29mZmljZS9tYWluL01haW5WaWV3LmpzIiwid2VicGFjazovLy8uL3ZpZXdzL29mZmljZS9tYWluL2NvbXBvbmVudHMvTWFpbkJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvb2ZmaWNlL21haW4vY29tcG9uZW50cy9NYWluSGVhZC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9vZmZpY2UvbWFpbi9jb21wb25lbnRzL01haW5UYXJpZi5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9vZmZpY2UvbWFpbi9jb21wb25lbnRzL01haW5UYXJpZkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvb2ZmaWNlL21haW4vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9oZWFkZXJPZmZpY2UvSGVhZGVySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL3VpL1RleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRleHRBcHAiLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlVG9rZW4iLCJ1c2VyIiwidHlwZSIsIlVTRVJfVE9LRU4iLCJwYXlsb2FkIiwiUHJvdGVjdGVkT2ZmaWNlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaEFwcCIsInVzZUNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyVG9rZW4iLCJjb29raWUiLCJsb2FkIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZGF0YVNlbmRlciIsImZldGNoIiwiTkVUIiwiQkFDS19VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJpbm5lckhlaWdodCIsImhlaWdodCIsIndpbmRvdyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNmb3JtV29yZENvdW50IiwiY291bnQiLCJsYW5nIiwiZW5kZXIiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwidG90YWwiLCJPZmZpY2UiLCJvdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJlbW92ZSIsImNsYXNzZXMiLCJvZmZpY2VXcmFwcGVyIiwib2ZmaWNlV3JhcHBlckhlYWRlciIsIm9mZmljZUxvZ28iLCJEQVRBIiwibmFtZSIsIm9mZmljZVNvY2lhbCIsIm9mZmljZVNvY2lhbEl0ZW0iLCJzdmdTcHJpdGUiLCJvZmZpY2VXcmFwcGVyQm9keSIsIm9mZmljZVdyYXBwZXJNZW51Iiwib2ZmaWNlV3JhcHBlckNvbnRlbnQiLCJNZW51IiwibW9iaWxlIiwiY29uZmlnTWVudSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJvZmZpY2VXcmFwcGVyTWVudUl0ZW0iLCJwYXRoIiwiZmlsbCIsInN0cm9rZSIsInN2ZyIsInRpdGxlIiwibWVudU1vYiIsIm1lbnVNb2JTdmciLCJCQUNLX1VSTF9NT0RVTEUiLCJGUk9OVF9VUkwiLCJPZmZpY2VNYWluIiwiYWJvdXQiLCJhYm91dDIiLCJhYm91dDMiLCJhYm91dDQiLCJ3aHl1cyIsIndoeXVzMiIsIndoeXVzMyIsIndoeXVzNCIsIndoeXVzNSIsInByaWNlcyIsInN0YW5kYXJkIiwicGVyaW9kcyIsInNhbGUiLCJwcmljZSIsIm1vdW50aCIsInByZW1pdW0iLCJzdHlsZXMiLCJNYWluVmlldyIsInN0YXRlQXBwIiwicGF5bWVudCIsInN0eWxlc09mZmljZSIsImNvbnRhaW5lck9mZmljZSIsIm1haW5BY3Rpb24iLCJNYWluQm9keSIsInNob3dXaHkiLCJzZXRTaG93V2h5IiwibWFpbkJvZHkiLCJtYWluQm9keUltYWdlIiwibWFpbkJvZHlDb250ZW50IiwibWFpblRleHRQYXIiLCJxdW90ZSIsImJ0blF1b3RlIiwiYnRuUXVvdGVUZXh0Iiwid2h5QWN0aXZlIiwid2h5Iiwiam9pbiIsIm1haW5TaG93V2h5VGV4dCIsIk1haW5IZWFkIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImNsZWFudXBGdW5jdGlvbiIsImlkIiwid2l0aENyZWRlbnRpYWxzIiwiY291bnRlciIsInNldENvdW50ZXIiLCJhbGwiLCJyZWFsTW9uZXkiLCJmdXR1cmVNb25leSIsImFjdGl2ZSIsInZhbHVlIiwiZWwiLCJyZWZmZXJhbEhlYWQiLCJ0YXJpZiIsImRhdGUiLCJkYXlfZW5kIiwibW9uZXkiLCJyZWZmZXJhbEhlYWRNb2IiLCJyZWZmZXJhbEhlYWRJdGVtTW9iIiwicmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2IiLCJyZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9iIiwicmVmZmVyYWxIZWFkSXRlbVRleHRNb2JTbWFsbCIsInJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2JTbWFsbCIsInJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iIiwiTWFpblRhcmlmIiwidGFyaWZXcmFwcGVyIiwidGFyaWZXcmFwcGVySW5uZXIiLCJ0YXJpZlRpdGxlIiwidGFyaWZBcnJvdyIsInRhcmlmV3JhcHBlckJvZHkiLCJ0YXJpZldyYXBwZXJJbm5lclJpZ2h0IiwidGFyaWZUaXRsZVByZW1pdW0iLCJ0YXJpZldyYXBwZXJCb2R5UHJlbWl1bSIsIk1haW5UYXJpZkNhcmQiLCJtYWluVGFyaWZDYXJkV3JhcHBlciIsIm1haW5UYXJpZkNhcmQiLCJtYWluVGFyaWZDYXJkUHJlbWl1bSIsIm1haW5UYXJpZkNhcmRQcmVtaXVtVGl0bGUiLCJtYWluVGFyaWZDYXJkUHJlbWl1bVN1YnRpdGxlIiwibWFpblRhcmlmQ2FyZFByaWNlIiwibWFpblRhcmlmQ2FyZFNhbGUiLCJtYWluVGFyaWZDYXJkTW91bnRoIiwibWFpblRhcmlmQnRuIiwiSGVhZGVySXRlbSIsInJlZmZlcmFsSGVhZEl0ZW0iLCJyZWZmZXJhbEhlYWRJdGVtTnVtYmVyIiwicmVmZmVyYWxIZWFkSXRlbVRleHQiLCJyZWZmZXJhbEhlYWRJdGVtVGFyaWYiLCJoZWFkSXRlbUxpbmUiLCJyZWZmZXJhbEhlYWRJdGVtTnVtYmVyRGF0ZSIsInJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJUYXJpZiIsIlRleHRGaWVsZCIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUNlRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1FLFdBQVcsR0FBSUMsSUFBRCxLQUFXO0FBQ2xDQyxNQUFJLEVBQUVDLG9EQUQ0QjtBQUVsQ0MsU0FBTyxFQUFFSDtBQUZ5QixDQUFYLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBTyxNQUFNRSxVQUFVLEdBQUcsWUFBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtB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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJO0FBQUssZUFBUyxFQUFFakYsT0FBTyxDQUFDb0gsWUFBeEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVwSCxPQUFPLENBQUNrSCxvQkFBeEI7QUFBQSxrQkFBK0MzRixLQUFLLENBQUMyRDtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFbEYsT0FBTyxDQUFDc0gsMkJBQXhCO0FBQUEsa0JBQXNEeEMsS0FBSyxDQUFDSTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixnQkFXQSx1SkFwQko7QUFzQkgsQ0E1QkQ7O0FBNkJlNkIseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUEsTUFBTVEsU0FBUyxHQUFHLENBQUM7QUFDZnpLO0FBRGUsQ0FBRCxLQUVaO0FBQ0Ysc0JBQ0k7QUFBSyxhQUFTLEVBQUVrRCxtRkFBTyxDQUFDd0gsT0FBeEI7QUFBQSxjQUNLMUs7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQVJEOztBQVNleUssd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNaQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9bbGFuZ10vb2ZmaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bbGFuZ10vb2ZmaWNlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRleHRBcHAgPSBjcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dEFwcCIsImltcG9ydCB7IFVTRVJfVE9LRU4gfSBmcm9tICcuL2NyZWF0b3JzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUb2tlbiA9ICh1c2VyKSA9PiAoe1xyXG4gICAgdHlwZTogVVNFUl9UT0tFTixcclxuICAgIHBheWxvYWQ6IHVzZXJcclxufSkiLCJleHBvcnQgY29uc3QgVVNFUl9UT0tFTiA9ICdVU0VSX1RPS0VOJyIsImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdFxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgeyBORVQgfSBmcm9tICcuLy4uLy4uL25ldHdvcmsnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVRva2VuIH0gZnJvbSAnLi8uLi8uLi9jb250ZXh0L0FwcC9hY3Rpb25zJztcclxuXHJcbmNvbnN0IFByb3RlY3RlZE9mZmljZSA9ICh7XHJcbiAgICBjaGlsZHJlblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCB7ZGlzcGF0Y2hBcHB9ID0gdXNlQ29udGV4dChDb250ZXh0QXBwKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHVzZXJUb2tlbiA9IGNvb2tpZS5sb2FkKCd1c2VyVG9rZW4nKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IGRhdGFTZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7TkVULkJBQ0tfVVJMfS9wcm9maWxlYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt1c2VyVG9rZW59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YSkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQXBwKGNyZWF0ZVRva2VuKGRhdGEudXNlcikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3J1L2F1dGgvbG9naW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICh1c2VyVG9rZW4pIHtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgZGF0YVNlbmRlcigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3J1L2F1dGgvbG9naW4nKVxyXG4gICAgICAgIH0sIFtdKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codXNlclRva2VuKVxyXG4gICAgaWYgKCF1c2VyVG9rZW4pIHsgcmV0dXJuIG51bGwgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkT2ZmaWNlIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VTdGF0ZSwgdXNlRWZmZWN0XHJcbn0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCB0cmFuc2Zvcm1Xb3JkQ291bnQgPSAoY291bnQsIGxhbmcpID0+IHtcclxuICAgIGNvbnN0IGVuZGVyID0ge1xyXG4gICAgICAgIGZpcnN0OiAn0LTQtdC90YwnLFxyXG4gICAgICAgIHNlY29uZDogJ9C00L3RjycsXHJcbiAgICAgICAgdGhpcmQ6ICfQtNC90LXQuSdcclxuICAgIH1cclxuICAgIGxldCB0b3RhbCA9IGNvdW50ICUgMTBcclxuXHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIGNvdW50ID49IDUgJiYgY291bnQgPD0gMjA6XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRlci50aGlyZFxyXG4gICAgICAgIGNhc2UgdG90YWwgPT09IDE6XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRlci5maXJzdFxyXG4gICAgICAgIGNhc2UgdG90YWwgPiAxICYmIHRvdGFsIDwgNTpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLnNlY29uZFxyXG4gICAgICAgIGNhc2UgdG90YWwgPiA0OiBcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLnRoaXJkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLmZpcnN0XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZUNvbnRleHRcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvbGF5b3V0cy9vZmZpY2UtbGF5b3V0cy1zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51J1xyXG5pbXBvcnQgeyBEQVRBIH0gZnJvbSAnLi8uLi8uLi9wcm9qZWN0L2RhdGEnO1xyXG5pbXBvcnQgc3ZnU3ByaXRlIGZyb20gJy4vLi4vLi4vcHJvamVjdC9zdmcvc3ZnU3ByaXRlJztcclxuaW1wb3J0IENvbnRleHRBcHAgZnJvbSAnLi8uLi8uLi9jb250ZXh0L0FwcC9Db250ZXh0QXBwJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcyc7XHJcblxyXG5jb25zdCBPZmZpY2UgPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3Qgb3V0VXNlciA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclRva2VuJylcclxuICAgICAgICBjb29raWUucmVtb3ZlKCd1c2VyVG9rZW4nKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcnUvYXV0aC9sb2dpbicpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VXcmFwcGVySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VMb2dvfT57REFUQS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlU29jaWFsSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ1RlbGVncmFtJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZpY2VTb2NpYWxJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvdXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ091dCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlV3JhcHBlckJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub2ZmaWNlV3JhcHBlck1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgT2ZmaWNlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25maWdNZW51IH0gZnJvbSAnLi9pbml0RGF0YSc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy9sYXlvdXRzL29mZmljZS1sYXlvdXRzLXN0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgICAgXHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aWR0aCA8IDc2OCA/IHRydWUgOiBmYWxzZVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgIW1vYmlsZSA/IDxkaXY+XHJcbiAgICAgICAge2NvbmZpZ01lbnUubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJNZW51SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGl0ZW1NZW51JHtpZHh9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ2luaGVyaXQnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoaXRlbS5zdmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQ1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmljZVdyYXBwZXJNZW51SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvdXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnaW5oZXJpdCdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZShpdGVtLnN2Zywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JLRi9GF0L7QtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+OiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU1vYn0+XHJcbiAgICAgICAgICAgICAgICB7Y29uZmlnTWVudS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51TW9iU3ZnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpdGVtTWVudU1vYiR7aWR4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZShpdGVtLnN2Zywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudSIsImV4cG9ydCBjb25zdCBjb25maWdNZW51ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAn0JPQu9Cw0LLQvdCw0Y8nLFxyXG4gICAgICAgIHN2ZzogJ0hvbWUnLFxyXG4gICAgICAgIHBhdGg6ICcvcnUvb2ZmaWNlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9Ca0YPRgNGB0YsnLFxyXG4gICAgICAgIHN2ZzogJ0NvdXJzZScsXHJcbiAgICAgICAgcGF0aDogJy9ydS9vZmZpY2UvY291cnNlcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQn9GA0L7RhNC40LvRjCcsXHJcbiAgICAgICAgc3ZnOiAnUHJvZmlsZScsXHJcbiAgICAgICAgcGF0aDogJy9ydS9vZmZpY2UvcHJvZmlsZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfQn9GA0LjQsdGL0LvRjCcsXHJcbiAgICAgICAgc3ZnOiAnTW9uZXknLFxyXG4gICAgICAgIHBhdGg6ICcvcnUvb2ZmaWNlL3BhcnRuZXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ9Cj0L/RgNCw0LLQu9C10L3QuNC1JyxcclxuICAgICAgICBzdmc6ICdTZXR0aW5ncycsXHJcbiAgICAgICAgcGF0aDogJy9ydS9vZmZpY2UnXHJcbiAgICB9XHJcbl0iLCJleHBvcnQgY29uc3QgTkVUID0ge1xyXG4gICAgLy8gQkFDS19VUkw6ICdodHRwOi8vMTkyLjE2OC4wLjEwMzo4MDAwL2FwaScsXHJcbiAgICAvLyBCQUNLX1VSTF9NT0RVTEU6ICdodHRwOi8vMTkyLjE2OC4wLjEwMzo4MDAwJyxcclxuICAgIC8vIEZST05UX1VSTDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTA0OjgwMDAnXHJcbiAgICBCQUNLX1VSTDogJ2h0dHBzOi8vd3d3Lm1pb24uY291cnNlcy9hcGknLFxyXG4gICAgQkFDS19VUkxfTU9EVUxFOiAnaHR0cHM6Ly93d3cubWlvbi5jb3Vyc2VzJyxcclxuICAgIEZST05UX1VSTDogJ2h0dHBzOi8vbW90aWNoLm1pb24uY291cnNlcy9ydS9hdXRoL3JlZ2lzdGVyJ1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgT2ZmaWNlIGZyb20gJy4vLi4vLi4vLi4vbGF5b3V0cy9vZmZpY2UvT2ZmaWNlJztcclxuaW1wb3J0IFByb3RlY3RlZE9mZmljZSBmcm9tICcuLy4uLy4uLy4uL2dsb2JhbC9kZWNvcmF0b3JzL1Byb3RlY3RlZE9mZmljZSc7XHJcbmltcG9ydCBNYWluVmlldyBmcm9tICcuLi8uLi8uLi92aWV3cy9vZmZpY2UvbWFpbi9NYWluVmlldyc7XHJcblxyXG5jb25zdCBPZmZpY2VNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdGVjdGVkT2ZmaWNlPlxyXG4gICAgICAgICAgICA8T2ZmaWNlPlxyXG4gICAgICAgICAgICAgICAgPE1haW5WaWV3IC8+XHJcbiAgICAgICAgICAgIDwvT2ZmaWNlPlxyXG4gICAgICAgIDwvUHJvdGVjdGVkT2ZmaWNlPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE9mZmljZU1haW4iLCJleHBvcnQgY29uc3QgREFUQSA9IHtcclxuICAgIG5hbWU6ICdNb3RpY2ggUHJvZHVjdGlvbicsXHJcbiAgICBhYm91dDogJzMg0YfQsNGI0LrQuCDQutC+0YTQtSDQuCDQktCw0YjQsCDQttC40LfQvdGMINGD0LbQtSDQvdC1INCx0YPQtNC10YIg0L/RgNC10LbQvdC10LkhICAnLFxyXG4gICAgYWJvdXQyOiAn0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGE0L7QutGD0YEg0L3QsCDQv9C+0LvRg9GH0LXQvdC40LUg0LrQsNGH0LXRgdGC0LLQtdC90L3Ri9GFLCDQutC+0L3QutGD0YDQtdGC0L3Qvi3RgdC/0L7RgdC+0LHQvdGL0YUg0LfQvdCw0L3QuNC5LicsXHJcbiAgICBhYm91dDM6ICdNT1RJQ0ggUFJPRFVDVElPTiAtINGN0YLQviA5OSUg0L/RgNCw0LrRgtC40LrQuCwg0LrQvtGC0L7RgNCw0Y8g0L/QvtC30LLQvtC70LjRgiDQktCw0Lwg0LfQsCDQvdC10YHQutC+0LvRjNC60L4g0LzQtdGB0Y/RhtC10LIg0YHRgtCw0YLRjCDQstC+0YHRgtGA0LXQsdC+0LLQsNC90L3Ri9C8INGB0L/QtdGG0LjQsNC70LjRgdGC0L7QvCDQuCDQv9C+0L/RgNC+0LHQvtCy0LDRgtGMINGB0LXQsdGPINC90LAg0YDQsNCx0L7RgtC1INC80LXRh9GC0YshIE1pZGRsZSBGcm9udC1FbmQgJiBGdWxsLXN0YWNrLicsXHJcbiAgICBhYm91dDQ6ICfQmCDRjdGC0L4g0LXRidC1INC90LUg0LLRgdC1IScsXHJcbiAgICB3aHl1czogJ9CS0Ysg0YXQvtGC0LjRgtC1INC+0LHRg9GH0LDRgtGM0YHRjyDQsdC10YHQv9C70LDRgtC90L4g0Lgg0L/QvtC70YPRh9Cw0YLRjCDQv9Cw0YHRgdC40LLQvdGL0Lkg0LTQvtGF0L7QtD8nLFxyXG4gICAgd2h5dXMyOiAn0J/Qu9Cw0L0g0LTQtdC50YHRgtCy0LjQuTonLFxyXG4gICAgd2h5dXMzOiAnMS4g0J7Qv9C70LDRgtC40YLRjCDQv9C+0LTQv9C40YHQutGDJyxcclxuICAgIHdoeXVzNDogJzIuINCe0LfQvdCw0LrQvtC80LjRgtGM0YHRjyDRgSDRgdC40YHRgtC10LzQvtC5INC/0L7Qu9GD0YfQtdC90LjRjyDQv9GA0LjQsdGL0LvQuCcsXHJcbiAgICB3aHl1czU6ICczLiDQndCw0YfQsNGC0Ywg0LfQsNGA0LDQsdCw0YLRi9Cy0LDRgtGMJyxcclxuICAgIHByaWNlczoge1xyXG4gICAgICAgIHN0YW5kYXJkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTdGFuZGFyZCcsXHJcbiAgICAgICAgICAgIHBlcmlvZHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYWxlOiA5OSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogMTg5LFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdW50aDogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYWxlOiAyNzcsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDUxMCxcclxuICAgICAgICAgICAgICAgICAgICBtb3VudGg6IDNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZTogNTI5LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAxNDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdW50aDogNlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYWxlOiA5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDIyNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbW91bnRoOiAxMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlbWl1bToge1xyXG4gICAgICAgICAgICBuYW1lOiAnUHJlbWl1bScsXHJcbiAgICAgICAgICAgIHBlcmlvZHM6IFt7XHJcbiAgICAgICAgICAgICAgICBzYWxlOiA5OTksXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjI0MCxcclxuICAgICAgICAgICAgICAgIG1vdW50aDogMTJcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3Qgc3ZnU3ByaXRlID0gKG5hbWUsIHN0eWxlcykgPT4ge1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNDggNDJcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNy42NTk1NCA0MC40MzJINi42NTk1NEM3LjY1OTU0IDQwLjQzMiA3LjY1OTU0IDQwLjQzMTkgNy42NTk1NCA0MC40MzE4VjQwLjQzMTJWNDAuNDI4N1Y0MC40MTg4VjQwLjQxMTRWNDAuNDAyNFY0MC4zOTczVjQwLjM5MThWNDAuMzg1OVY0MC4zNzk2VjQwLjM3MjlWNDAuMzY1OVY0MC4zNTg0VjQwLjM1MDZWNDAuMzMzN1Y0MC4zMTUzVjQwLjMwNTZWNDAuMjk1NFY0MC4yODQ5VjQwLjI3NDFWNDAuMjUxMlY0MC4yMjY4VjQwLjIwMVY0MC4xODc1VjQwLjE3MzdWNDAuMTU5NVY0MC4xNDVWNDAuMTE0OVY0MC4wODMzVjQwLjA2N1Y0MC4wNTA0VjQwLjAzMzRWNDAuMDE2MVYzOS45OTg0VjM5Ljk4MDRWMzkuOTYyVjM5Ljk0MzNWMzkuOTI0M1YzOS45MDQ5VjM5Ljg4NTJWMzkuODY1MVYzOS44MjQxVjM5LjgwMzFWMzkuNzgxN1YzOS43NlYzOS43MzgxVjM5LjcxNTdWMzkuNjkzMVYzOS42NzAyVjM5LjY0NjlWMzkuNjIzM1YzOS41OTk0VjM5LjU3NTJWMzkuNTUwN1YzOS41MjU5VjM5LjUwMDhWMzkuNDQ5NlYzOS40MjM2VjM5LjM5NzNWMzkuMzQzOFYzOS4yODlWMzkuMjMzMlYzOS4xNzYxVjM5LjExOFYzOS4wODg0VjM5LjA1ODdWMzguOTk4M1YzOC45MzY4VjM4LjkwNTZWMzguODc0MlYzOC44NDI1VjM4LjgxMDVWMzguNzQ1OFYzOC43MTNWMzguNjhWMzguNjEzMlYzOC41Nzk1VjM4LjU0NTRWMzguNDc2NlYzOC40MDY4VjM4LjM3MTVWMzguMzM2VjM4LjI2NDJWMzguMjI4VjM4LjE5MTVWMzguMDQzM1YzNy45Njc4VjM3Ljg5MTRWMzcuODE0MVYzNy43MzZWMzcuNjk2NVYzNy42NTY5VjM3LjU3N1YzNy40MTQ4VjM3LjI0OTNWMzcuMTY1NFYzNy4xMjMxVjM3LjA4MDdWMzYuOTk1MlYzNi45MDlWMzYuNTU3VjM2LjUxMjNWMzYuNDY3M1YzNi40MjIyVjM2LjM3NjlWMzYuMTk0MlYzNS40MzkyVjM1LjA0ODdWMzQuOTk5M1YzNC45NDk5VjM0Ljg1MDZWMzQuNjUwN1YzNC4yNDZWMzQuMDQxNFYzMy44MzU1VjMzLjYyODNWMzMuNTI0MlYzMy40NzIxVjMzLjQxOTlWMzMuMjEwNVYzMy4wMDAyVjMyLjg5NDdWMzIuNzg5VjMyLjU3NzFWMzIuMzY0NlYzMi4xNTE1VjMxLjkzOFYzMS43MjQyVjMxLjY3MDdWMzEuNjE3MlYzMS41MTAyVjMxLjI5NjFWMzEuMjQyNlYzMS4xODkxVjMxLjEzNTVWMzEuMDgyVjMxLjAyODVWMzAuOTc1VjMwLjkyMTVWMzAuODY4VjMwLjgxNDVWMzAuNzYxMVYzMC43MDc2VjMwLjY1NDJWMzAuNjAwOFYzMC41NDc0VjMwLjQ5NDFWMzAuNDQwN1YzMC4zODc0VjMwLjMzNDJWMzAuMjgwOVYzMC4yMjc3VjMwLjE3NDVWMzAuMTIxM1YzMC4wNjgyVjMwLjAxNTJWMjkuOTYyMVYyOS45MDkxVjI5Ljg1NjJWMjkuODAzMlYyOS43NTA0VjI5LjY5NzZWMjkuNjQ0OFYyOS41OTIxVjI5LjUzOTRWMjkuNDg2OFYyOS40MzQyVjI5LjM4MTdWMjkuMzI5M1YyOS4yNzY5VjI5LjIyNDZWMjkuMTcyM1YyOS4xMjAxVjI5LjA2OFYyOS4wMTZWMjguOTY0VjI4LjkxMjFWMjguODYwMlYyOC44MDg1VjI4Ljc1NjhWMjguNzA1MlYyOC42NTM2VjI4LjYwMjJWMjguNTUwOFYyOC40OTk1VjI4LjQ0ODNWMjguMzk3MlYyOC4zNDYyVjI4LjI5NTNWMjguMjQ0NVYyOC4xOTM3VjI4LjE0MzFWMjguMDkyNlYyOC4wNDIxVjI3Ljk5MThWMjcuOTQxNVYyNy44OTE0VjI3Ljg0MTRWMjcuNzkxNVYyNy43NDE2VjI3LjY5MlYyNy42NDI0VjI3LjU5MjlWMjcuNTQzNVYyNy40OTQzVjI3LjQ0NTJWMjcuMzk2MlYyNy4zNDczVjI3LjI5ODZWMjcuMjQ5OVYyNy4yMDE0VjI3LjE1MzFWMjcuMTA0OFYyNy4wNTY3VjI3LjAwODhWMjYuOTYwOVYyNi45MTMyVjI2Ljg2NTdWMjYuNzcxVjI2LjU4MzNWMjYuNDkwNFYyNi4zOTgxVjI2LjIxNTNWMjYuMDM1MlYyNS44NTc4VjI1LjY4MzJWMjUuNTExNlYyNS4zNDI5VjI1LjE3NzRWMjUuMDk1OVYyNS4wNTU0VjI1LjAxNTJWMjQuODU2M1YyNC43MDA4VjI0LjQwMDdWMjQuMTE1NlYyMy44NDY0VjIzLjc4MTdWMjMuNzQ5OFYyMy43MTgxVjIzLjU5NFYyMy4zNTkxVjIzLjE0MjZWMjMuMTE2OVYyMy4wOTE0VjIzLjA0MTVWMjIuOTQ1M1YyMi42MjU0TDIzLjk2ODEgOC44ODg0M0wzOS4zMTAxIDIyLjYwNzVWNDAuMTI4MlY0MC4xNTA2TDM5LjMxMDQgNDAuMTU4M0MzOS4zMTA0IDQwLjE1ODUgMzkuMzEwNCA0MC4xNTg2IDM5LjMxMDQgNDAuMTU4OEMzOS4zMTAyIDQwLjE2ODIgMzkuMzA5MiA0MC4xODc5IDM5LjMwNjEgNDAuMjE0MUMzOS4yOTkyIDQwLjI3MTYgMzkuMjg1MSA0MC4zMjk5IDM5LjI2NTIgNDAuMzc0MUMzOS4yNTYyIDQwLjM5NDEgMzkuMjQ4NiA0MC40MDUzIDM5LjI0NDUgNDAuNDEwNUMzOS4yNDI2IDQwLjQxMyAzOS4yNDE1IDQwLjQxNDEgMzkuMjQxMiA0MC40MTQ0TDM5LjI0MDkgNDAuNDE0NkMzOS4yNDA5IDQwLjQxNDYgMzkuMjQwNiA0MC40MTQ4IDM5LjIzOTkgNDAuNDE1MkMzOS4yMzkyIDQwLjQxNTcgMzkuMjM3OSA0MC40MTYzIDM5LjIzNjEgNDAuNDE3MkMzOS4yMzI3IDQwLjQxODggMzkuMjI1OSA0MC40MjE4IDM5LjIxNDUgNDAuNDI1MUMzOS4xOTIyIDQwLjQzMTYgMzkuMTQ2MiA0MC40NDE0IDM5LjA2OCA0MC40NDE0SDM5LjA1ODdIMzkuMDQ5MkgzOS4wMzk1SDM5LjAyOTZIMzkuMDE5NkgzOS4wMDkzSDM4Ljk5ODhIMzguOTg4MkgzOC45Nzc0SDM4Ljk2NjRIMzguOTU1MkgzOC45NDM4SDM4LjkzMjJIMzguOTIwNUgzOC45MDg2SDM4Ljg5NjVIMzguODg0MkgzOC44NzE3SDM4Ljg1OTFIMzguODQ2MkgzOC44MzMySDM4LjgyMDFIMzguODA2N0gzOC43OTMySDM4Ljc3OTVIMzguNzY1NkgzOC43NTE2SDM4LjczNzRIMzguNzIzSDM4LjcwODVIMzguNjkzN0gzOC42Nzg5SDM4LjY2MzhIMzguNjQ4NkgzOC42MzMySDM4LjYxNzdIMzguNjAxOUgzOC41ODYxSDM4LjU3SDM4LjU1MzhIMzguNTM3NUgzOC41MjFIMzguNTA0M0gzOC40ODc1SDM4LjQ3MDVIMzguNDUzM0gzOC40MzZIMzguNDE4NkgzOC40MDFIMzguMzgzMkgzOC4zNjUzSDM4LjM0NzJIMzguMzI5SDM4LjMxMDdIMzguMjkyMUgzOC4yNzM1SDM4LjI1NDdIMzguMjM1N0gzOC4yMTY2SDM4LjE5NzRIMzguMTc4SDM4LjE1ODVIMzguMTM4OEgzOC4xMTlIMzguMDk5SDM4LjA3ODlIMzguMDU4N0gzOC4wMzgzSDM4LjAxNzhIMzcuOTk3MkgzNy45NzY0SDM3Ljk1NTVIMzcuOTM0NUgzNy45MTMzSDM3Ljg5MkgzNy44NzA1SDM3Ljg0OUgzNy44MjczSDM3LjgwNTRIMzcuNzgzNUgzNy43NjE0SDM3LjczOTJIMzcuNzE2OEgzNy42OTQ0SDM3LjY3MThIMzcuNjQ5MUgzNy42MjYySDM3LjYwMzNIMzcuNTgwMkgzNy41NTdIMzcuNTMzN0gzNy41MTAzSDM3LjQ4NjdIMzcuNDYzMUgzNy40MzkzSDM3LjQxNTRIMzcuMzkxNEgzNy4zNjczSDM3LjM0M0gzNy4zMTg3SDM3LjI5NDJIMzcuMjY5N0gzNy4yNDVIMzcuMjIwMkgzNy4xOTUzSDM3LjE3MDNIMzcuMTQ1MkgzNy4xMkgzNy4wOTQ3SDM3LjA2OTNIMzcuMDQzOEgzNy4wMTgySDM2Ljk5MjRIMzYuOTY2NkgzNi45NDA3SDM2LjkxNDdIMzYuODg4NkgzNi44NjI0SDM2LjgzNjFIMzYuODA5N0gzNi43ODMySDM2Ljc1NjZIMzYuNzI5OUgzNi43MDMxSDM2LjY3NjNIMzYuNjQ5M0gzNi42MjIzSDM2LjU5NTFIMzYuNTY3OUgzNi41NDA2SDM2LjUxMzJIMzYuNDg1N0gzNi40NTgySDM2LjQzMDVIMzYuNDAyOEgzNi4zNzVIMzYuMzQ3MUgzNi4zMTkxSDM2LjI5MTFIMzYuMjYzSDM2LjIzNDhIMzYuMjA2NUgzNi4xNzgxSDM2LjE0OTdIMzYuMTIxMkgzNi4wOTI2SDM2LjA2MzlIMzYuMDM1MkgzNi4wMDY0SDM1Ljk3NzZIMzUuOTQ4NkgzNS45MTk2SDM1Ljg5MDVIMzUuODYxNEgzNS44MzIySDM1LjgwMjlIMzUuNzczNkgzNS43NDQySDM1LjcxNDdIMzUuNjg1MkgzNS42NTU2SDM1LjYyNkgzNS41OTYzSDM1LjU2NjVIMzUuNTM2N0gzNS41MDY4SDM1LjQ3NjlIMzUuNDQ2OUgzNS40MTY4SDM1LjM4NjdIMzUuMzU2NkgzNS4zMjY0SDM1LjI5NjFIMzUuMjY1OEgzNS4yMzU1SDM1LjIwNUgzNS4xNzQ2SDM1LjE0NDFIMzUuMTEzNkgzNS4wODNIMzUuMDUyM0gzNS4wMjE2SDM0Ljk5MDlIMzQuOTYwMkgzNC45Mjk0SDM0Ljg5ODVIMzQuODY3NkgzNC44MzY3SDM0LjgwNTdIMzQuNzc0N0gzNC43NDM3SDM0LjcxMjZIMzQuNjgxNUgzNC42NTA0SDM0LjYxOTJIMzQuNTg4SDM0LjU1NjhIMzQuNTI1NUgzNC40OTQySDM0LjQ2MjlIMzQuNDMxNUgzNC40MDAxSDM0LjM2ODdIMzQuMzM3M0gzNC4zMDU4SDM0LjI3NDNIMzQuMjQyOEgzNC4yMTEzSDM0LjE3OTdIMzQuMTQ4MkgzNC4xMTY2SDM0LjA4NUgzNC4wNTMzSDM0LjAyMTdIMzMuOTlIMzMuOTU4M0gzMy45MjY2SDMzLjg5NDlIMzMuODYzMkgzMy44MzE1SDMzLjc5OTdIMzMuNzY4SDMzLjczNjJIMzMuNzA0NEgzMy42NzI2SDMzLjY0MDhIMzMuNjA5SDMzLjU3NzJIMzMuNTQ1NEgzMy41MTM2SDMzLjQ4MThIMzMuNDVIMzMuNDE4MkgzMy4zODYzSDMzLjM1NDVIMzMuMzIyN0gzMy4yOTA5SDMzLjI1OUgzMy4yMjcySDMzLjE5NTRIMzMuMTYzNkgzMy4xMzE4SDMzLjFIMzMuMDY4MkgzMy4wMzY0SDMzLjAwNDdIMzIuOTcyOUgzMi45NDEySDMyLjkwOTRIMzIuODc3N0gzMi44NDZIMzIuODE0M0gzMi43ODI2SDMyLjc1MDlIMzIuNzE5M0gzMi42ODc2SDMyLjY1NkgzMi42MjQ0SDMyLjU5MjhIMzIuNTYxM0gzMi41Mjk3SDMyLjQ5ODJIMzIuNDY2N0gzMi40MzUzSDMyLjQwMzhIMzIuMzcyNEgzMi4zNDFIMzIuMzA5NkgzMi4yNzgzSDMyLjI0N0gzMi4yMTU3SDMyLjE4NDVIMzIuMTUzMkgzMi4xMjJIMzIuMDkwOUgzMi4wNTk4SDMyLjAyODdIMzEuOTk3NkgzMS45NjY2SDMxLjkzNTZIMzEuOTA0N0gzMS44NzM4SDMxLjg0MjlIMzEuODEyMUgzMS43ODEzSDMxLjc1MDZIMzEuNzE5OUgzMS42ODkzSDMxLjY1ODdIMzEuNjI4MUgzMS41OTc2SDMxLjU2NzFIMzEuNTM2N0gzMS41MDYzSDMxLjQ3NkgzMS40NDU3SDMxLjQxNTVIMzEuMzg1M0gzMS4zNTUySDMxLjMyNTFIMzEuMjk1MUgzMS4yNjUySDMxLjIzNTNIMzEuMjA1NEgzMS4xNzU2SDMxLjE0NTlIMzEuMTE2MkgzMS4wODY2SDMxLjA1NzFIMzEuMDI3NkgzMC45OTgySDMwLjk2ODhIMzAuOTM5NUgzMC45MTAzSDMwLjg4MTFIMzAuODUySDMwLjgyM0gzMC43OTQxSDMwLjc2NTJIMzAuNzM2M0gzMC43MDc2SDMwLjY3ODlIMzAuNjUwM0gzMC42MjE4SDMwLjU5MzNIMzAuNTY0OUgzMC41MzY2SDMwLjUwODRIMzAuNDgwMkgzMC40NTIxSDMwLjQyNDFIMzAuMzk2MkgzMC4zNjg0SDMwLjM0MDZIMzAuMzEzSDMwLjI4NTRIMzAuMjU3OUgzMC4yMzA0SDMwLjIwMzFIMzAuMTc1OEgzMC4xNDg3SDMwLjEyMTZIMzAuMDk0NkgzMC4wNjc3SDMwLjA0MDlIMzAuMDE0MkgyOS45ODc2SDI5Ljk2MUgyOS45MzQ2SDI5LjkwODNIMjkuODgySDI5Ljg1NTlIMjkuODI5OEgyOS44MDM5SDI5Ljc3OEgyOS43NTIzSDI5LjcyNjZIMjkuNzAxMUgyOS42NzU2SDI5LjY1MDNIMjkuNjI1SDI5LjU5OTlIMjkuNTc0OEgyOS41NDk5SDI5LjUyNTFIMjkuNTAwNEgyOS40NzU4SDI5LjQ1MTNIMjkuNDI2OUgyOS40MDI2SDI5LjM3ODRIMjkuMzU0NEgyOS4zMzA1SDI5LjMwNjZIMjkuMjgyOUgyOS4yNTkzSDI5LjIzNTlIMjkuMjEyNUgyOS4xODkzSDI5LjE2NjJIMjkuMTQzMkgyOS4xMjAzSDI5LjA5NzVIMjkuMDc0OUgyOS4wNTI0SDI5LjAzSDI5LjAwNzhIMjguOTg1NkgyOC45NjM2SDI4Ljk0MTdIMjguOTJIMjguODk4NEgyOC44NzY5SDI4Ljg1NTVIMjguODM0M0gyOC44MTMySDI4Ljc5MjJIMjguNzcxNEgyOC43NTA3SDI4LjczMDJIMjguNzA5OEgyOC42ODk1SDI4LjY2OTNIMjguNjQ5M0gyOC42Mjk1SDI4LjYwOTdIMjguNTkwMkgyOC41NzA3SDI4LjU1MTRIMjguNTMyM0gyOC41MTMzSDI4LjQ5NDRIMjguNDg4NUwyOC41MDcyIDMxLjc1MDhDMjguNTA3MyAzMS43NDc2IDI4LjUwNzQgMzEuNzQ0MiAyOC41MDc1IDMxLjc0MDhDMjguNTA4MyAzMS43MTU1IDI4LjUwODggMzEuNjgzNyAyOC41MDg0IDMxLjY0NjNDMjguNTA3NiAzMS41NzE4IDI4LjUwMyAzMS40NzI2IDI4LjQ4OTEgMzEuMzU2NEMyOC40NjE4IDMxLjEyODkgMjguMzk1MiAzMC44MDg1IDI4LjIyODYgMzAuNDc1NkMyOC4wNTc5IDMwLjEzNDggMjcuNzgxMSAyOS43ODAyIDI3LjM0ODYgMjkuNTE2OUMyNi45MTczIDI5LjI1NDMgMjYuMzkzIDI5LjEyIDI1Ljc4NTcgMjkuMTJIMjAuODc2NUMyMC4zMDc3IDI5LjEyIDE5LjgwOTQgMjkuMjcwNyAxOS40MDg5IDI5LjU2ODZDMTkuMDE2IDI5Ljg2MDggMTguNzkyNiAzMC4yMzg0IDE4LjY2NzQgMzAuNTY4OUMxOC41NDM4IDMwLjg5NDkgMTguNTA0IDMxLjIwMzkgMTguNDkxOCAzMS40MTg1QzE4LjQ4NTQgMzEuNTI4OSAxOC40ODYgMzEuNjIyNyAxOC40ODg0IDMxLjY5MjRDMTguNDg5NCAzMS43MTk1IDE4LjQ5MDYgMzEuNzQzMiAxOC40OTE5IDMxLjc2MzNMMTguNDc2MyA0MC40NzQxTDE3LjgwMzkgNDAuNDc1TDE0LjAzNTYgNDAuNDc5OEMxMS4yNjU0IDQwLjQ4MzMgOC4zNDA0NiA0MC40ODY3IDcuNjYzMiA0MC40ODY4QzcuNjYyNjMgNDAuNDgzMSA3LjY2MjExIDQwLjQ3OTIgNy42NjE2MyA0MC40NzUzQzcuNjYwMzkgNDAuNDY1MiA3LjY1OTggNDAuNDU3MiA3LjY1OTUyIDQwLjQ1MjNMNy42NTk1NCA0MC40NTE4VjQwLjQzMlpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC4wNDYgMS44MzAyOUw0NS42OTY3IDIxLjU0NjJDNDUuNjY0NSAyMS41NjI3IDQ1LjYzMDggMjEuNTc4MyA0NS41OTU5IDIxLjU5MjhDNDUuMjA1NCAyMS43NTQ3IDQ0LjMwODMgMjEuOTA3NSA0Mi42NjIzIDIwLjcyNzZMMjQuNzI0OSA0LjU1ODE4TDI0LjA3NDUgMy45NzE5MUwyMy40MDc1IDQuNTM5MTdMNC4yMzMxMSAyMC44NDZDMy41MTg3OCAyMS40NTI5IDIuOTcwMjUgMjEuNjk3MSAyLjU4Mzc5IDIxLjc4MDlDMi4yMTE4NSAyMS44NjE2IDEuOTQyODEgMjEuODA0OSAxLjc0MjYgMjEuNzE2MUMxLjcwODMzIDIxLjcwMDkgMS42NzUxNSAyMS42ODQ0IDEuNjQzMDYgMjEuNjY2N0wyNC4wNDYgMS44MzAyOVpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNi40NDggNy40MzExOUwzNi40MzM4IDMuMjU2ODRIMzkuMDU0N1Y5LjY1NDM0TDM2LjQ0OCA3LjQzMTE5WlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0NvdXJzZSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDgwIDgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjAwMDA4IDAuNUgzMEMzMi40ODYzIDAuNSAzNC40OTk5IDIuNTEzNiAzNC41MDAxIDUuMDAwMDhWMzBDMzQuNTAwMSAzMi40ODQyIDMyLjQ4NjIgMzQuNTAwMSAzMCAzNC41MDAxSDUuMDAwMDhDMi41MTM3OSAzNC41MDAxIDAuNSAzMi40ODQgMC41IDMwVjUuMDAwMDhDMC41IDIuNTEzNjIgMi41MTM2MiAwLjUgNS4wMDAwOCAwLjVaTTI4IDMwLjVDMjkuMzgwOCAzMC41IDMwLjUgMjkuMzgwOCAzMC41IDI4LjAwMDFWNy4wMDAwOEMzMC41IDUuNjE5MzcgMjkuMzgwOCA0LjUwMDA4IDI4LjAwMDEgNC41MDAwOEg3LjAwMDA4QzUuNjE5MzcgNC41MDAwOCA0LjUwMDA4IDUuNjE5MzYgNC41MDAwOCA3LjAwMDA4VjI4QzQuNTAwMDggMjkuMzgwOCA1LjYxOTM2IDMwLjUgNy4wMDAwOCAzMC41SDI4WlwiIHN0cm9rZT1cIiMwRTEwM0RcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MCAwLjVINzQuOTk5OUM3Ny40ODQxIDAuNSA3OS41IDIuNTEzNzggNzkuNSA1LjAwMDA4VjMwQzc5LjUgMzIuNDg0IDc3LjQ4MzcgMzQuNTAwMSA3NC45OTk5IDM0LjUwMDFINTBDNDcuNTEzNyAzNC41MDAxIDQ1LjQ5OTkgMzIuNDg0IDQ1LjQ5OTkgMzBWNS4wMDAwOEM0NS40OTk5IDIuNTEzNjMgNDcuNTEzNyAwLjUgNTAgMC41Wk03Mi45OTk5IDMwLjVDNzQuMzgwNiAzMC41IDc1LjQ5OTkgMjkuMzgwOCA3NS40OTk5IDI4LjAwMDFWNy4wMDAwOEM3NS40OTk5IDUuNjE5MzcgNzQuMzgwNyA0LjUwMDA4IDcyLjk5OTkgNC41MDAwOEg1MkM1MC42MTkyIDQuNTAwMDggNDkuNSA1LjYxOTM2IDQ5LjUgNy4wMDAwOFYyOEM0OS41IDI5LjM4MDggNTAuNjE5MiAzMC41IDUyIDMwLjVINzIuOTk5OVpcIiBzdHJva2U9XCIjMEUxMDNEXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAgNDUuNUg3NC45OTk5Qzc3LjQ4NDEgNDUuNSA3OS41IDQ3LjUxNCA3OS41IDUwLjAwMDFWNzVDNzkuNSA3Ny40ODYzIDc3LjQ4MzkgNzkuNTAwMSA3NC45OTk5IDc5LjUwMDFINTBDNDcuNTEzNSA3OS41MDAxIDQ1LjQ5OTkgNzcuNDg2MyA0NS40OTk5IDc1VjUwLjAwMDFDNDUuNDk5OSA0Ny41MTYgNDcuNTEzOSA0NS41IDUwIDQ1LjVaTTcyLjk5OTkgNzUuNUM3NC4zODA3IDc1LjUgNzUuNDk5OSA3NC4zODA4IDc1LjQ5OTkgNzNWNTIuMDAwMUM3NS40OTk5IDUwLjYxOTQgNzQuMzgwNyA0OS41MDAxIDcyLjk5OTkgNDkuNTAwMUg1MkM1MC42MTkyIDQ5LjUwMDEgNDkuNSA1MC42MTk0IDQ5LjUgNTIuMDAwMVY3M0M0OS41IDc0LjM4MDggNTAuNjE5MiA3NS41IDUyIDc1LjVINzIuOTk5OVpcIiBzdHJva2U9XCIjMEUxMDNEXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS4wMDAwOCA0NS41SDMwQzMyLjQ4NjMgNDUuNSAzNC40OTk5IDQ3LjUxMzggMzQuNTAwMSA1MC4wMDAxVjc1QzM0LjUwMDEgNzcuNDg2NSAzMi40ODYzIDc5LjUwMDEgMzAgNzkuNTAwMUg1LjAwMDA4QzIuNTEzNjMgNzkuNTAwMSAwLjUgNzcuNDg2MyAwLjUgNzVWNTAuMDAwMUMwLjUgNDcuNTE2MSAyLjUxMzc5IDQ1LjUgNS4wMDAwOCA0NS41Wk0yOCA3NS41QzI5LjM4MDggNzUuNSAzMC41IDc0LjM4MDcgMzAuNSA3M1Y1Mi4wMDAxQzMwLjUgNTAuNjE5NCAyOS4zODA4IDQ5LjUwMDEgMjguMDAwMSA0OS41MDAxSDcuMDAwMDhDNS42MTkzNyA0OS41MDAxIDQuNTAwMDggNTAuNjE5NCA0LjUwMDA4IDUyLjAwMDFWNzNDNC41MDAwOCA3NC4zODA4IDUuNjE5MzYgNzUuNSA3LjAwMDA4IDc1LjVIMjhaXCIgc3Ryb2tlPVwiIzBFMTAzRFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1Byb2ZpbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDgwIDcyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02LjUwODc0IDQ5LjEyNTZDMTAuNjc2MiA0NS44NDM3IDE2LjMyODUgNDQgMjIuMjIyMiA0NEg1Ny43Nzc4QzYzLjY3MTUgNDQgNjkuMzIzOCA0NS44NDM3IDczLjQ5MTMgNDkuMTI1NkM3Ny42NTg3IDUyLjQwNzUgODAgNTYuODU4NyA4MCA2MS41VjY4LjVDODAgNzAuNDMzIDc5Ljk1NDYgNzIgNzcuNSA3MkM3NS4wNDU0IDcyIDc1IDcwLjQzMyA3NSA2OC41VjYxLjVDNzUgNTguNzE1MiA3Mi41MDA1IDU0LjQ2OTEgNzAgNTIuNUM2Ny40OTk1IDUwLjUzMDkgNjEuMzE0IDQ4IDU3Ljc3NzggNDhIMjIuMjIyMkMxOC42ODYgNDggMTEuNTAwNSA1MC41MzA5IDkgNTIuNUM2LjQ5OTUxIDU0LjQ2OTEgNC41IDU4LjcxNTIgNC41IDYxLjVWNjguNUM0LjUgNzAuNDMzIDQuOTU0NiA3MiAyLjUgNzJDMC4wNDU0MDA5IDcyIDAgNzAuNDMzIDAgNjguNVY2MS41QzAgNTYuODU4NyAyLjM0MTI2IDUyLjQwNzUgNi41MDg3NCA0OS4xMjU2WlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzkgMy41MDA0OUMyOC45OTI3IDQuMDAwNDkgMjMgOS41IDIzIDE5LjVDMjIgMjYgMjcuNSAzNiAzOSAzNkM1MC41IDM2IDU2IDI4LjUwMDUgNTYgMTkuNTAwNUM1NiAxMC41MDA1IDQ5LjQ3OTYgMi45NzY4OSAzOSAzLjUwMDQ5Wk0xOS41IDE5LjUwMDVDMTkuNSA3LjYyNjM3IDI2Ljk5MjcgMC41MDA0ODggMzkgMC4wMDA0ODgyODFDNTEuNDkyNyAwLjAwMDczNzQ4OCA1OS41IDcuNjI2MzcgNTkuNSAxOS41MDA1QzU5LjUgMzIuNTAwNSA1MC44NzQxIDM5LjAwMDUgMzkgMzkuMDAwNUMyNy4xMjU5IDM5LjAwMDUgMTkuNSAzMS4zNzQ2IDE5LjUgMTkuNTAwNVpcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdNb25leSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDQyIDQ3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy45MTY3IDExLjA3ODRMMjMuOTE1IDExLjA3NzdIMjMuOTA0NUwyMy44OTMyIDExLjA3N0gyMy44OTIzTDIzLjg3OTIgMTEuMDc2M0wyMy44NzIyIDExLjA3NTZIMjMuODY3TDIzLjgxNTUgMTEuMDc0OUgxNy4yMDY3TDE3LjE1NTIgMTEuMDc1NkgxNy4xNTA5TDE3LjE0MyAxMS4wNzYzTDE3LjEyOTkgMTEuMDc3TDE3LjExNzcgMTEuMDc3N0gxNy4xMDgxTDE3LjEwNDYgMTEuMDc4NEMxNi44NyAxMS4wOTg2IDE2LjY1OCAxMS4xODU1IDE2LjUwMDEgMTEuMzEzNUwxNi40OTU3IDExLjMxNzFDMTYuMzE3OCAxMS40NjY2IDE2LjIwNjEgMTEuNjcyOSAxNi4yMDYxIDExLjg5ODVDMTYuMjA2MSAxMi4xMjQ5IDE2LjMxNzggMTIuMzMxMiAxNi40OTU3IDEyLjQ4TDE2LjUwMDEgMTIuNDgzNkMxNi42NTg5IDEyLjYxMjMgMTYuODcgMTIuNjk5MiAxNy4xMDQ2IDEyLjcxODZMMTcuMTA4MSAxMi43MTk0SDE3LjExNzdMMTcuMTI5OSAxMi43MjAxTDE3LjE0MyAxMi43MjA4TDE3LjE1MDkgMTIuNzIxNUgxNy4xNTUyTDE3LjIwNjcgMTIuNzIyMkgyMy44MTU1TDIzLjg2NyAxMi43MjE1SDIzLjg3MjJMMjMuODc5MiAxMi43MjA4TDIzLjg5MjMgMTIuNzIwMUgyMy44OTMyTDIzLjkwNDUgMTIuNzE5NEgyMy45MTVMMjMuOTE2NyAxMi43MTg2QzI0LjE1MTQgMTIuNjk4NSAyNC4zNjI1IDEyLjYxMyAyNC41MjEzIDEyLjQ4MzZMMjQuNTI1NiAxMi40OEMyNC43MDM2IDEyLjMzMDUgMjQuODE1MiAxMi4xMjQyIDI0LjgxNTIgMTEuODk4NUMyNC44MTUyIDExLjY3MjEgMjQuNzAzNiAxMS40NjU5IDI0LjUyNTYgMTEuMzE3MUwyNC41MjEzIDExLjMxMzVDMjQuMzYyNSAxMS4xODQ4IDI0LjE1MTQgMTEuMDk3OSAyMy45MTY3IDExLjA3ODRaTTE5LjY0MzEgMTguODI3M0MxOS42NDMxIDE4LjQzMjcgMjAuMDMyMiAxOC4xMTIxIDIwLjUxMTEgMTguMTEyMUMyMC45OSAxOC4xMTIxIDIxLjM3OTEgMTguNDMyNyAyMS4zNzkxIDE4LjgyNzNWMjAuODUyN0MyMi4xNzY0IDIwLjg4NzkgMjIuOTcxMSAyMC45OTcyIDIzLjcyODMgMjEuMTg0MUMyNi4yMTU0IDIxLjc5OTMgMjguMzA1NSAyMy4yNDYyIDI4Ljg5MzQgMjUuNjcxMkMyOC45ODY4IDI2LjA1NzkgMjguNjgxNSAyNi40MzQ1IDI4LjIxMjEgMjYuNTExNEMyNy43NDI4IDI2LjU4ODQgMjcuMjg1NyAyNi4zMzY4IDI3LjE5MjQgMjUuOTUwMUMyNi43NDkyIDI0LjEyMyAyNS4xNDU5IDIzLjAyNDggMjMuMjM0NiAyMi41NTI2QzIyLjYzODggMjIuNDA1OSAyMi4wMTMzIDIyLjMxNjggMjEuMzggMjIuMjgzOFYyOS4xMjYzQzIyLjI1NTggMjkuMTMwNiAyMy4xNTc4IDI5LjE4NDUgMjQuMTUyMyAyOS40MzM5QzI1LjI0NzEgMjkuNzA3NyAyNi4zNTA2IDMwLjIwMjIgMjcuMTI4NyAzMS4wNjU0QzI3Ljc1NDIgMzEuNzYwNSAyOC4xNTgxIDMyLjY3NTQgMjguMTU4MSAzMy44NzcyQzI4LjE1ODEgMzUuNzU1MyAyNi43NDc1IDM3LjE2NDggMjQuNzQ3MiAzNy45OTc4QzIzLjczOTcgMzguNDE2OCAyMi41Nzc3IDM4LjY4OTkgMjEuMzgwOCAzOC43OTU2VjQwLjg4MjFDMjEuMzgwOCA0MS4yNzY3IDIwLjk5MTggNDEuNTk3MyAyMC41MTI5IDQxLjU5NzNDMjAuMDM0IDQxLjU5NzMgMTkuNjQ0OSA0MS4yNzY3IDE5LjY0NDkgNDAuODgyMVYzOC44MzM3QzE4Ljg0NzYgMzguNzk4NSAxOC4wNTI5IDM4LjY4OTkgMTcuMjk1NyAzOC41MDM4QzE0LjgwOTUgMzcuODg4NSAxMi43MTk0IDM2LjQ0MSAxMi4xMzA1IDM0LjAxNjZDMTIuMDM3MiAzMy42Mjk5IDEyLjM0MjUgMzMuMjUzMyAxMi44MTE4IDMzLjE3NjRDMTMuMjgxMiAzMy4wOTk1IDEzLjczODMgMzMuMzUxMSAxMy44MzE2IDMzLjczNzhDMTQuMjc2NSAzNS41NjQ4IDE1Ljg3ODEgMzYuNjYzMSAxNy43ODk0IDM3LjEzNTNDMTguMzg1MiAzNy4yODEyIDE5LjAxMDcgMzcuMzcxIDE5LjY0NCAzNy40MDQxVjMwLjU2MzhDMTguNzY4MiAzMC41NTg3IDE3Ljg2NjIgMzAuNTA0OCAxNi44NzE3IDMwLjI1NDdDMTQuODcwNiAyOS43NTE2IDEyLjg2NjggMjguNTU5OSAxMi44NjY4IDI1LjgxMTRDMTIuODY2OCAyMy45MzI2IDE0LjI3NzQgMjIuNTIzOCAxNi4yNzg1IDIxLjY5MDhDMTcuMjg1MiAyMS4yNzE4IDE4LjQ0NzIgMjAuOTk3MiAxOS42NDQgMjAuODkyM1YxOC44Mjg3TDE5LjY0MzEgMTguODI3M1pNMjEuMzc5MSAzMC41NTAxVjM3LjM1NjdDMjIuMzA5IDM3LjI1ODkgMjMuMTk3OSAzNy4wNDMzIDIzLjk2NjUgMzYuNzIzNEMyNS40MDUgMzYuMTI0IDI2LjQyMDQgMzUuMTQ1MSAyNi40MjA0IDMzLjg3NThDMjYuNDIwNCAzMy4wMDk3IDI2LjE1MjUgMzIuMzc0MyAyNS43MzgyIDMxLjkxMzZDMjUuMjE2NSAzMS4zMzQzIDI0LjQzNTggMzAuOTkyMSAyMy42NDk4IDMwLjc5NTlDMjIuODc2IDMwLjYwMTkgMjIuMTI0MSAzMC41NTUxIDIxLjM4IDMwLjU1MDFIMjEuMzc5MVpNMTkuNjQzMSAyOS4xMzc4VjIyLjMzMDVDMTguNzE1IDIyLjQyODIgMTcuODI1MiAyMi42NDM5IDE3LjA1NjcgMjIuOTYzN0MxNS42MTY0IDIzLjU2MzEgMTQuNjAxOSAyNC41NDE0IDE0LjYwMTkgMjUuODExNEMxNC42MDE5IDI3LjcxNzUgMTUuOTg4OSAyOC41NDQxIDE3LjM3MzMgMjguODkxOUMxOC4xNDggMjkuMDg2IDE4Ljg5OSAyOS4xMzI3IDE5LjY0MzEgMjkuMTM4NVYyOS4xMzc4Wk0yMy4xNDM4IDkuNjQzODJDMjMuMTYzOSA5LjU5NjM4IDIzLjE5MDEgOS41NTE4MiAyMy4yMjE1IDkuNTA5NDFMMjYuODU0OCAzLjUyNDM4QzI1LjQyMDcgMy45MDQ2IDIzLjYwNjIgNC4zMDIwNyAyMi42MzI3IDIuODk2OTFDMjEuNzM1OSAxLjYwMzE2IDIwLjUxNDYgMS42MDI0NSAyMC41MTExIDEuNjAyNDVDMjAuNTA3NiAxLjYwMjQ1IDE5LjI4NjQgMS42MDMxNiAxOC4zODk2IDIuODk2OTFDMTcuNDE2MSA0LjMwMjA3IDE1LjYwMDcgMy45MDQ2IDE0LjE2NzUgMy41MjQzOEwxNy44MzU3IDkuNTY3NjNMMTcuODc1OCA5LjY0MzgySDIzLjE0NDdIMjMuMTQzOFpNMTYuMDczNSA5Ljg0Nzk1TDEyLjAxMjggMy4xNTg1NEMxMS45MzA4IDMuMDQ4NTcgMTEuODgyOCAyLjkxOTkxIDExLjg4MjggMi43ODE5MUMxMS44ODI4IDIuMDkyNjMgMTIuMzIxNiAxLjgzNDYgMTMuMDcwOSAxLjgzNDZDMTMuNDY1MiAxLjgzNDYgMTMuOTMwMiAxLjk2MDM4IDE0LjQ2NTggMi4xMDM0MUMxNS4zNTkxIDIuMzQzNDggMTYuNTU4NSAyLjY2NDc2IDE2Ljg4NTcgMi4xOTMyNkMxOC4yODU4IDAuMTczNTcgMjAuNTA1IDAuMTcyODUyIDIwLjUxMiAwLjE3Mjg1MkMyMC41MTgxIDAuMTcyODUyIDIyLjczODIgMC4xNzM1NyAyNC4xMzgzIDIuMTkzMjZDMjQuNDY1NCAyLjY2NTQ4IDI1LjY2NCAyLjM0MzQ4IDI2LjU1ODIgMi4xMDM0MUMyNy4wOTI5IDEuOTYwMzggMjcuNTU5NiAxLjgzNDYgMjcuOTUzMSAxLjgzNDZDMjguNzAyNCAxLjgzNDYgMjkuMTQxMiAyLjA5MjYzIDI5LjE0MTIgMi43ODE5MUgyOS4xMzY4QzI5LjEzNjggMi44ODkwMSAyOS4xMDggMi45OTgyNiAyOS4wNDUyIDMuMTAwMzJMMjQuOTQ5NiA5Ljg0Nzk1QzI1LjI0NzEgOS45NjA3OSAyNS41MTY2IDEwLjExNjggMjUuNzQ2IDEwLjMwNTFMMjUuNzUwNCAxMC4zMDg3TDI1Ljc3MzEgMTAuMzI4MUwyNS43Nzc0IDEwLjMzMTdDMjYuMjU2NCAxMC43Mzg1IDI2LjU1MyAxMS4yOTEyIDI2LjU1MyAxMS44OTg1QzI2LjU1MyAxMi41MTU5IDI2LjI0NDEgMTMuMDgwMiAyNS43NTA0IDEzLjQ4ODRMMjUuNzQ2IDEzLjQ5MkwyNS43MjI1IDEzLjUxMDdMMjUuNzE4MSAxMy41MTQzQzI1LjY1ODggMTMuNTYxNyAyNS41OTUxIDEzLjYwNyAyNS41MzE0IDEzLjY1MDFDMzAuMjAyIDE2LjE5NDUgNDcuMzczMSAyNi43MTEzIDM4LjUwODQgMzkuNjAxM0MzNi43ODcyIDQyLjEwMzMgMzQuMTcyIDQzLjczNzcgMzEuMDA3MSA0NC43MTY3QzI3LjkxOTkgNDUuNjczMyAyNC4zMTE5IDQ2LjAwMDQgMjAuNTEyIDQ1LjkxMjdDMTYuNzEyMSA0Ni4wMDA0IDEzLjEwMzIgNDUuNjc0IDEwLjAxNjkgNDQuNzE2N0M2Ljg1MjAxIDQzLjczNzcgNC4yMzY3NCA0Mi4xMDMzIDIuNTE1NjEgMzkuNjAxM0MtNi4zNDgyNCAyNi43MTEzIDEwLjgyMDMgMTYuMTk0NSAxNS40OTA4IDEzLjY1MDFDMTUuNDE1OCAxMy42MDA1IDE1LjM0NDIgMTMuNTQ4MSAxNS4yNzYyIDEzLjQ5MkwxNS4yNzE4IDEzLjQ4ODRMMTUuMjQ5MiAxMy40NjlMMTUuMjQ0OCAxMy40NjU0QzE0Ljc2NTkgMTMuMDU4NiAxNC40NjkzIDEyLjUwNDQgMTQuNDY5MyAxMS44OTg1QzE0LjQ2OTMgMTEuMjc5NyAxNC43NzgxIDEwLjcxNjkgMTUuMjcxOCAxMC4zMDg3TDE1LjI3NjIgMTAuMzA1MUwxNS4yOTk4IDEwLjI4NjRMMTUuMzA0MSAxMC4yODI4QzE1LjUyNzQgMTAuMTAzOCAxNS43ODgzIDkuOTU1NzYgMTYuMDczNSA5Ljg0Nzk1Wk0yMy4zMTc0IDE0LjE1MjVIMTcuNzA2NUMxNy42MzUgMTQuMjE4NyAxNy41NDk1IDE0LjI3MjYgMTcuNDUzNiAxNC4zMTIxQzE2LjMxNjkgMTQuODcxMyAtNS4wOTQ2OSAyNS42NDE4IDQuMDE5NTMgMzguODk2MkM1LjUyMjU3IDQxLjA4MjcgNy44MjkwNCA0Mi41MTU5IDEwLjYyNjYgNDMuMzgxOUMxMy40OTQ5IDQ0LjI3MDMgMTYuODkwOSA0NC41NzI5IDIwLjQ4NzYgNDQuNDg3NEgyMC41MzQ3QzI0LjEzMjIgNDQuNTcyOSAyNy41Mjc0IDQ0LjI3MDMgMzAuMzk1NiA0My4zODE5QzMzLjE5MzIgNDIuNTE2NiAzNS40OTk3IDQxLjA4MjcgMzcuMDAyNyAzOC44OTYyQzQ2LjM1MTYgMjUuMzAyNSAyMy41ODM1IDE0LjMxOTMgMjMuNTE5IDE0LjI4NzdDMjMuNDQyMiAxNC4yNTAzIDIzLjM3NDEgMTQuMjA0MyAyMy4zMTc0IDE0LjE1MjVaXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnTW9uZXlMaXN0JzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMjI4NiAzLjg2MTM4VjMuODYyMTdDMTIuMzE0MyAzLjY4MTI5IDEyLjM2NDMgMy40OTI0MyAxMi4zNjQzIDMuMjk4ODNWMi40ODYzM0MxMi4zNjQzIDEuMTQwNjIgMTAuMTgxNSAwLjA0ODgyODEgNy40ODkyNiAwLjA0ODgyODFDNC43OTcwNiAwLjA0ODgyODEgMi42MTQyNiAxLjE0MDYyIDIuNjE0MjYgMi40ODYzM0MyLjYxNDI2IDIuNDE5NjggMi42MjM3OCAyLjM1NDYgMi42MzQwOSAyLjI4OTU1QzEuNjI3MiAyLjczNTQ5IDAuOTg5MjU4IDMuMzg2MTIgMC45ODkyNTggNC4xMTEzM1Y0LjkyMzgzQzAuOTg5MjU4IDUuNjc3NjMgMS42NzQ4IDYuMzUxMjYgMi43NDk5NSA2Ljc5Nzk2QzIuNjY0MjUgNi45Nzg4OSAyLjYxNDI2IDcuMTY3NzIgMi42MTQyNiA3LjM2MTMzVjguMTczODNDMi42MTQyNiA4LjQ1OTQ3IDIuNzE3NDIgOC43MzE2NCAyLjg5ODMzIDguOTg2MzNDMi43MTc0MiA5LjI0MTAyIDIuNjE0MjYgOS41MTMxOCAyLjYxNDI2IDkuNzk4ODNWMTAuNjExM0MyLjYxNDI2IDExLjk1NyA0Ljc5NzA2IDEzLjA0ODggNy40ODkyNiAxMy4wNDg4QzEwLjE4MTUgMTMuMDQ4OCAxMi4zNjQzIDExLjk1NyAxMi4zNjQzIDEwLjYxMTNWOS43OTg4M0MxMi4zNjQzIDkuNTA4NDEgMTIuMjU3MSA5LjIzMTUgMTIuMDcxNSA4Ljk3MzYzQzEyLjA2OTkgOC45NzUyMSAxMi4wNjgzIDguOTc3NTkgMTIuMDY2NyA4Ljk3OTE5QzEyLjIwMzIgOC43ODU1OSAxMi4zMTAzIDguNTg0MDYgMTIuMzQ0NCA4LjM3MDYxQzEzLjM1MTMgNy45MjM4OCAxMy45ODkzIDcuMjc0MDMgMTMuOTg5MyA2LjU0ODgzVjUuNzM2MzNDMTMuOTg5MyA0Ljk4MjU2IDEzLjMwMzcgNC4zMDgxMSAxMi4yMjg2IDMuODYxMzhaTTcuNDg5MjYgMC40NTUwNzhDMTAuMTIyNyAwLjQ1NTA3OCAxMS45NTggMS41MjU0NSAxMS45NTggMi40ODYzM0MxMS45NTggMy40NDY0MiAxMC4xMjI3IDQuNTE3NTggNy40ODkyNiA0LjUxNzU4QzQuODU1NzcgNC41MTc1OCAzLjAyMDUxIDMuNDQ2NDIgMy4wMjA1MSAyLjQ4NjMzQzMuMDIwNTEgMS41MjU0NSA0Ljg1NTc3IDAuNDU1MDc4IDcuNDg5MjYgMC40NTUwNzhaTTEuMzk1NTEgNC4xMTEzM0MxLjM5NTUxIDMuNjM2ODMgMS44NDU0IDMuMTM3NzUgMi42MTQyNiAyLjc1MjE0VjMuMjk4ODNDMi42MTQyNiA0LjY0NDUzIDQuNzk3MDYgNS43MzYzMyA3LjQ4OTI2IDUuNzM2MzNDNy44OTE1NSA1LjczNjMzIDguMjgwMzMgNS43MDkzNCA4LjY1NDA1IDUuNjYzMzNDNy45MDg5OSA1Ljk0OTc2IDYuOTYyNCA2LjE0MjU4IDUuODY0MjYgNi4xNDI1OEMzLjIzMDc3IDYuMTQyNTggMS4zOTU1MSA1LjA3MTQyIDEuMzk1NTEgNC4xMTEzM1pNMTEuOTU4IDkuNzk4ODNDMTEuOTU4IDEwLjc1ODkgMTAuMTIyNyAxMS44MzAxIDcuNDg5MjYgMTEuODMwMUM0Ljg1NTc3IDExLjgzMDEgMy4wMjA1MSAxMC43NTg5IDMuMDIwNTEgOS43OTg4M0MzLjAyMDUxIDkuNjM5MzUgMy4wODg3NiA5LjQ3NzQ4IDMuMTg0NzYgOS4zMTcxOUMzLjE4Mzk3IDkuMzE2NDEgMy4xODIzNyA5LjMxNDgxIDMuMTgxNTkgOS4zMTMyM0MzLjk5OTY1IDEwLjA4NTMgNS42MjE0NyAxMC42MTEzIDcuNDg5MjYgMTAuNjExM0M5LjM1OTQzIDEwLjYxMTMgMTAuOTczMyAxMC4wODEzIDExLjc4OTggOS4zMDc2N0MxMS43ODkgOS4zMDg0NiAxMS43ODkgOS4zMDg0NiAxMS43ODgyIDkuMzA5MjVDMTEuODg4MiA5LjQ3MTkyIDExLjk1OCA5LjYzNjE4IDExLjk1OCA5Ljc5ODgzWk0xMC4yODA3IDguOTEzMzNDOS41MzQ3OCA5LjIwMDU3IDguNTg4MTkgOS4zOTI1OCA3LjQ4OTI2IDkuMzkyNThDNC44NTU3NyA5LjM5MjU4IDMuMDIwNTEgOC4zMjE0IDMuMDIwNTEgNy4zNjEzM0MzLjAyMDUxIDcuMjIzMjUgMy4wNjgxMiA3LjA4MzYxIDMuMTQwMzMgNi45NDU1NkMzLjUzODY1IDcuMDc5NjQgMy45NzkgNy4xODUxOSA0LjQ0OTU0IDcuMjU1OEM1LjA1NTcyIDguMjU3MTMgNi45MTQwMSA4Ljk4NjMzIDkuMTE0MjYgOC45ODYzM0M5LjUxODEyIDguOTg2MzMgOS45MDg1IDguOTU5MzYgMTAuMjgzOCA4LjkxMjU0QzEwLjI4MyA4LjkxMjU0IDEwLjI4MjIgOC45MTMzMyAxMC4yODA3IDguOTEzMzNaTTkuMTE0MjYgNy43Njc1OEM4LjA3MTY3IDcuNzY3NTggNy4xNjIzNSA3LjU5NjE5IDYuNDMzOTUgNy4zMzM1NUM4LjcyNDY2IDcuMTk4NjUgMTAuNTMzNyA2LjI3OTA1IDEwLjcxOTQgNS4xMjA2MUMxMS4yNzI0IDQuODc1NDMgMTEuNzE1MiA0LjU2OTkzIDEyLjAwMDEgNC4yMjI0MUMxMS45OTkzIDQuMjIyNDEgMTEuOTk5MyA0LjIyMjQxIDExLjk5OTMgNC4yMjI0MUMxMi45ODMyIDQuNjIyMzEgMTMuNTgzIDUuMTkzNiAxMy41ODMgNS43MzYzM0MxMy41ODMgNi42OTY0IDExLjc0NzcgNy43Njc1OCA5LjExNDI2IDcuNzY3NThaTTguMzU3MzEgMy4wNzgyNkM4LjM1NzMxIDIuOTkyNTcgOC4yODkwNiAyLjkyNjcgOC4xNTI2MSAyLjg4MzA2QzguMDE2MTQgMi44Mzg2MiA3LjcxMjI0IDIuNzgxNDkgNy4yNDE3MiAyLjcxMzI0QzYuODE4ODIgMi42NTM3MyA2LjQ4NzkzIDIuNTk0MjEgNi4yNDk4OSAyLjUzNTUxQzYuMDExODUgMi40NzY4MSA1LjgxODI1IDIuMzk0MjYgNS42Njk4NyAyLjI4OTUzQzUuNTIxNDggMi4xODMxOSA1LjQ0NjkxIDIuMDU5NDEgNS40NDY5MSAxLjkxOTc2QzUuNDQ2OTEgMS43MzU2OCA1LjU4MDIxIDEuNTY5MDQgNS44NDUyNCAxLjQyMTQ3QzYuMTEwMjcgMS4yNzQ2OSA2LjUyNzYxIDEuMTg1MDEgNy4wOTczMyAxLjE1MTdWMC44NjEzMjhINy44NjY5OVYxLjE1MTc1QzguNzI3MSAxLjE5NDYxIDkuMjg0MTIgMS4zOTI5NiA5LjUzNzIxIDEuNzUwMDNMOC40NzcxNiAxLjkyNzc2QzguMjcwMDcgMS42ODMzOCA3Ljk1MTA2IDEuNTYxMTcgNy41MTc4NyAxLjU2MTE3QzcuMzAwNDUgMS41NjExNyA3LjEyNTg5IDEuNTg4MTYgNi45OTQ5OCAxLjY0MzY5QzYuODYzMjUgMS42OTc2NCA2Ljc5NzQxIDEuNzY0MjkgNi43OTc0MSAxLjg0MjA3QzYuNzk3NDEgMS45MjE0MSA2Ljg2MDg5IDEuOTgxNzEgNi45ODc4NCAyLjAyNDU3QzcuMTE0MDEgMi4wNjY2MiA3LjM4NjE3IDIuMTE4MjEgNy44MDE5NCAyLjE4MTY5QzguMjU4OTcgMi4yNDk5NCA4LjYxNzYyIDIuMzE0MjEgOC44NzcwOCAyLjM3NTI5QzkuMTM3MzQgMi40MzU2IDkuMzQ0NDIgMi41MTk3MiA5LjQ5OTk0IDIuNjI2ODFDOS42NTQ2NyAyLjczMzk0IDkuNzMyMzkgMi44NTkyOSA5LjczMjM5IDMuMDAyMTFDOS43MzIzOSAzLjIyMjcxIDkuNTcyMTMgMy40MDUxOSA5LjI1MjM4IDMuNTUxOTdDOC45MzI2MSAzLjY5ODc2IDguNDcwODMgMy43ODUyNiA3Ljg2Njk5IDMuODExNDRWNC4xODc1SDcuMDk3MzNWMy44MTI5OUM2LjA5MDQ0IDMuNzcwOTQgNS40Njc1NiAzLjUzMDUyIDUuMjI3MTYgMy4wOTQxTDYuNDE3MzQgMi45NjcxNUM2LjUyNzY0IDMuMjQxNyA2Ljg5MjYzIDMuMzc4OTYgNy41MTIzMSAzLjM3ODk2QzcuODAxODkgMy4zNzg5NiA4LjAxNjE2IDMuMzQ5NjEgOC4xNTI2NCAzLjI5MDg4QzguMjg5MTEgMy4yMzIxNSA4LjM1NzMxIDMuMTYxNTcgOC4zNTczMSAzLjA3ODI2WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnU2V0dGluZ3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDQ1IDQ1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00Mi42MjY3IDE3LjE1OTlIMzguNTEwMkMzNy44NDg2IDE3LjE1OTkgMzcuMzAzNSAxNi43OTU3IDM3LjA1MDEgMTYuMTg0NkMzNi43OTY3IDE1LjU3MzUgMzYuOTI1NCAxNC45Mjk4IDM3LjM5MjMgMTQuNDYyMUw0MC4zMDI4IDExLjU1MjRDNDAuNzMwNiAxMS4xMjQ2IDQwLjk2NjEgMTAuNTU1IDQwLjk2NjEgOS45NTA0NkM0MC45NjYxIDkuMzQ1MDUgNDAuNzMwNiA4Ljc3NjMxIDQwLjMwMjggOC4zNDc3MkwzNi41OTMgNC42Mzc4N0MzNS43Mzc0IDMuNzgyMzEgMzQuMjQ1NSAzLjc4MDY4IDMzLjM4ODMgNC42Mzc4N0wzMC40Nzg2IDcuNTQ3NTdDMzAuMDEwOSA4LjAxNDQ2IDI5LjM2NTUgOC4xNDQ4MyAyOC43NTYxIDcuODkwNjFDMjguMTQ1IDcuNjM3MiAyNy43ODA3IDcuMDkyMDkgMjcuNzgwNyA2LjQzMDQ2VjIuMzE0MDFDMjcuNzgwNyAxLjA2NDkgMjYuNzY0NyAwLjA0ODgyODEgMjUuNTE1NSAwLjA0ODgyODFIMjAuMjY4MUMxOS4wMTkgMC4wNDg4MjgxIDE4LjAwMyAxLjA2NDkgMTguMDAzIDIuMzE0MDFWNi40MzA0NkMxOC4wMDMgNy4wOTIwOSAxNy42Mzg3IDcuNjM3MiAxNy4wMjc2IDcuODkwNjFDMTYuNDE4MSA4LjE0NTY0IDE1Ljc3MjggOC4wMTQ0NiAxNS4zMDUxIDcuNTQ3NTdMMTIuMzk1NCA0LjYzNzg3QzExLjUzODIgMy43ODA2OCAxMC4wNDYzIDMuNzgyMzEgOS4xOTA3MyA0LjYzNzg3TDUuNDgwODggOC4zNDc3MkM1LjA1MzEgOC43NzU1IDQuODE3NjIgOS4zNDUwNSA0LjgxNzYyIDkuOTUwNDZDNC44MTc2MiAxMC41NTUgNS4wNTMxIDExLjEyMzggNS40ODA4OCAxMS41NTI0TDguMzkxNCAxNC40NjIxQzguODU4MjkgMTQuOTI5OCA4Ljk4NjIyIDE1LjU3MzUgOC43MzM2MiAxNi4xODQ2QzguNDgxMDMgMTYuNzk1NyA3LjkzNTEgMTcuMTU5OSA3LjI3MzQ4IDE3LjE1OTlIMy4xNTcwM0MxLjkwNzkyIDE3LjE1OTkgMC44OTE4NDYgMTguMTc2IDAuODkxODQ2IDE5LjQyNTFWMjQuNjcxN0MwLjg5MTg0NiAyNS45MjE2IDEuOTA3OTIgMjYuOTM3NyAzLjE1NzAzIDI2LjkzNzdINy4yNzM0OEM3LjkzNTEgMjYuOTM3NyA4LjQ4MDIyIDI3LjMwMTkgOC43MzM2MiAyNy45MTNDOC45ODcwMyAyOC41MjQyIDguODU4MjkgMjkuMTY3OSA4LjM5MTQgMjkuNjM1Nkw1LjQ4MDg4IDMyLjU0NTNDNS4wNTMxIDMyLjk3MyA0LjgxNzYyIDMzLjU0MjYgNC44MTc2MiAzNC4xNDcyQzQuODE3NjIgMzQuNzUyNiA1LjA1MzEgMzUuMzIxMyA1LjQ4MDg4IDM1Ljc0OTlMOS4xOTA3MyAzOS40NTk4QzEwLjA0NzEgNDAuMzE2MiAxMS41MzgyIDQwLjMxNzggMTIuMzk1NCAzOS40NTk4TDE1LjMwNTEgMzYuNTQ5M0MxNS43NzI4IDM2LjA4MjQgMTYuNDE1NyAzNS45NTM2IDE3LjAyNzYgMzYuMjA3MUMxNy42Mzg3IDM2LjQ2MDUgMTguMDAzIDM3LjAwNTYgMTguMDAzIDM3LjY2NzJWNDEuNzgzNkMxOC4wMDMgNDMuMDMyOCAxOS4wMTkgNDQuMDQ4OCAyMC4yNjgxIDQ0LjA0ODhIMjUuNTE0N0MyNi43NjM4IDQ0LjA0ODggMjcuNzc5OSA0My4wMzI4IDI3Ljc3OTkgNDEuNzgzNlYzNy42NjcyQzI3Ljc3OTkgMzcuMDA1NiAyOC4xNDQxIDM2LjQ2MDUgMjguNzU1MyAzNi4yMDcxQzI5LjM2NzIgMzUuOTUyOCAzMC4wMTAxIDM2LjA4MjQgMzAuNDc3OCAzNi41NDkzTDMzLjM4NzUgMzkuNDU5OEMzNC4yNDQ3IDQwLjMxNyAzNS43MzY2IDQwLjMxNTMgMzYuNTkyMSAzOS40NTk4TDQwLjMwMiAzNS43NDk5QzQwLjcyOTggMzUuMzIyMiA0MC45NjUzIDM0Ljc1MjYgNDAuOTY1MyAzNC4xNDcyQzQwLjk2NTMgMzMuNTQyNiA0MC43Mjk4IDMyLjk3MzkgNDAuMzAyIDMyLjU0NTNMMzcuMzkxNSAyOS42MzU2QzM2LjkyNDYgMjkuMTY3OSAzNi43OTY3IDI4LjUyNDIgMzcuMDQ5MyAyNy45MTNDMzcuMzAxOCAyNy4zMDE5IDM3Ljg0ODYgMjYuOTM3NyAzOC41MTAyIDI2LjkzNzdINDIuNjI2N0M0My44NzU4IDI2LjkzNzcgNDQuODkxOCAyNS45MjE2IDQ0Ljg5MTggMjQuNjcyNVYxOS40MjUxQzQ0Ljg5MTggMTguMTc2IDQzLjg3NTggMTcuMTU5OSA0Mi42MjY3IDE3LjE1OTlaTTQzLjI2MjIgMjQuNjcyNUM0My4yNjIyIDI1LjAyMjkgNDIuOTc3IDI1LjMwODEgNDIuNjI2NyAyNS4zMDgxSDM4LjUxMDJDMzcuMTg3IDI1LjMwODEgMzYuMDUwMyAyNi4wNjc1IDM1LjU0NDMgMjcuMjg5N0MzNS4wMzc1IDI4LjUxMTkgMzUuMzAzOSAyOS44NTMxIDM2LjI0MDEgMzAuNzg4NUwzOS4xNTA3IDMzLjY5ODJDMzkuMzk5MiAzMy45NDY4IDM5LjM5OTIgMzQuMzUwMSAzOS4xNTA3IDM0LjU5NzhMMzUuNDQwOCAzOC4zMDc2QzM1LjE5MzEgMzguNTU1MyAzNC43ODk4IDM4LjU1NyAzNC41NDEzIDM4LjMwNzZMMzEuNjMxNSAzNS4zOTcxQzMwLjY5NTMgMzQuNDYwOSAyOS4zNTUgMzQuMTk2MSAyOC4xMzI3IDM0LjcwMTNDMjYuOTEwNSAzNS4yMDczIDI2LjE1MTEgMzYuMzQzOSAyNi4xNTExIDM3LjY2NzJWNDEuNzgzNkMyNi4xNTExIDQyLjEzNCAyNS44NjU5IDQyLjQxOTIgMjUuNTE1NSA0Mi40MTkySDIwLjI2ODFDMTkuOTE3OCA0Mi40MTkyIDE5LjYzMjYgNDIuMTM0IDE5LjYzMjYgNDEuNzgzNlYzNy42NjcyQzE5LjYzMjYgMzYuMzQzOSAxOC44NzMyIDM1LjIwNzMgMTcuNjUxIDM0LjcwMTNDMTcuMjQxMSAzNC41MzEgMTYuODE5IDM0LjQ0NzkgMTYuNDAxOCAzNC40NDc5QzE1LjU3NTYgMzQuNDQ3OSAxNC43NzQ3IDM0Ljc3MzggMTQuMTUyMSAzNS4zOTYzTDExLjI0MjQgMzguMzA2OEMxMC45OTMxIDM4LjU1NjIgMTAuNTg5OCAzOC41NTQ1IDEwLjM0MjkgMzguMzA2OEw2LjYzMzAzIDM0LjU5N0M2LjM4NDUxIDM0LjM0ODUgNi4zODQ1MSAzMy45NDUxIDYuNjMzMDMgMzMuNjk3NEw5LjU0MzU1IDMwLjc4NzdDMTAuNDc5IDI5Ljg1MjMgMTAuNzQ2MiAyOC41MTExIDEwLjIzOTQgMjcuMjg4OUM5LjczMzQgMjYuMDY3NSA4LjU5NjczIDI1LjMwODEgNy4yNzM0OCAyNS4zMDgxSDMuMTU3MDNDMi44MDY2NiAyNS4zMDgxIDIuNTIxNDggMjUuMDIyOSAyLjUyMTQ4IDI0LjY3MjVWMTkuNDI1MUMyLjUyMTQ4IDE5LjA3NDggMi44MDY2NiAxOC43ODk2IDMuMTU3MDMgMTguNzg5Nkg3LjI3MzQ4QzguNTk2NzMgMTguNzg5NiA5LjczMzQgMTguMDMwMiAxMC4yMzk0IDE2LjgwNzlDMTAuNzQ2MiAxNS41ODU3IDEwLjQ3OTggMTQuMjQ0NSA5LjU0MzU1IDEzLjMwOTFMNi42MzMwMyAxMC4zOTk0QzYuMzg0NTEgMTAuMTUwOSA2LjM4NDUxIDkuNzQ3NTcgNi42MzMwMyA5LjQ5OTg2TDEwLjM0MjkgNS43OTAwMUMxMC41OTA2IDUuNTQxNDkgMTAuOTkzOSA1LjU0MTQ5IDExLjI0MjQgNS43OTAwMUwxNC4xNTIxIDguNjk5NzJDMTUuMDg2NyA5LjYzNDMxIDE2LjQyNzEgOS45MDIzOCAxNy42NTEgOS4zOTU1N0MxOC44NzMyIDguODkwMzggMTkuNjMyNiA3Ljc1MzcyIDE5LjYzMjYgNi40MzA0NlYyLjMxNDAxQzE5LjYzMjYgMS45NjM2NCAxOS45MTc4IDEuNjc4NDYgMjAuMjY4MSAxLjY3ODQ2SDI1LjUxNDdDMjUuODY1OSAxLjY3ODQ2IDI2LjE1MTEgMS45NjM2NCAyNi4xNTExIDIuMzE0MDFWNi40MzA0NkMyNi4xNTExIDcuNzUzNzIgMjYuOTEwNSA4Ljg5MDM4IDI4LjEzMjcgOS4zOTYzOEMyOS4zNTY2IDkuOTAzMiAzMC42OTYxIDkuNjM1OTQgMzEuNjMxNSA4LjcwMDUzTDM0LjU0MTMgNS43OTA4M0MzNC43OTA2IDUuNTQyMzEgMzUuMTkzOSA1LjU0MjMxIDM1LjQ0MDggNS43OTA4M0wzOS4xNTA3IDkuNTAwNjhDMzkuMzk5MiA5Ljc0OTIgMzkuMzk5MiAxMC4xNTI1IDM5LjE1MDcgMTAuNDAwMkwzNi4yNDAxIDEzLjMwOTlDMzUuMzA0NyAxNC4yNDUzIDM1LjAzNzUgMTUuNTg2NSAzNS41NDQzIDE2LjgwODhDMzYuMDUwMyAxOC4wMzEgMzcuMTg3IDE4Ljc5MDQgMzguNTEwMiAxOC43OTA0SDQyLjYyNjdDNDIuOTc3IDE4Ljc4OTYgNDMuMjYyMiAxOS4wNzQ4IDQzLjI2MjIgMTkuNDI1MVYyNC42NzI1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjg5MTkgMTQuNzE1OEMxOC44NDggMTQuNzE1OCAxNS41NTg2IDE4LjAwNTIgMTUuNTU4NiAyMi4wNDkyQzE1LjU1ODYgMjYuMDkzMSAxOC44NDggMjkuMzgyNSAyMi44OTE5IDI5LjM4MjVDMjYuOTM1OSAyOS4zODI1IDMwLjIyNTMgMjYuMDkzMSAzMC4yMjUzIDIyLjA0OTJDMzAuMjI1MyAxOC4wMDUyIDI2LjkzNTkgMTQuNzE1OCAyMi44OTE5IDE0LjcxNThaTTIyLjg5MTkgMjcuNzUyOUMxOS43NDc2IDI3Ljc1MjkgMTcuMTg4MiAyNS4xOTM1IDE3LjE4ODIgMjIuMDQ5MkMxNy4xODgyIDE4LjkwNDggMTkuNzQ3NiAxNi4zNDU0IDIyLjg5MTkgMTYuMzQ1NEMyNi4wMzYzIDE2LjM0NTQgMjguNTk1NiAxOC45MDQ4IDI4LjU5NTYgMjIuMDQ5MkMyOC41OTU2IDI1LjE5MzUgMjYuMDM2MyAyNy43NTI5IDIyLjg5MTkgMjcuNzUyOVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBjYXNlICdUZWxlZ3JhbSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNjUgNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYwLjAxOTQgMS41NjgzTDYwLjAxOTUgMS41NjgzN0w2MC4wMzA1IDEuNTY0ODFDNjEuMDQzOCAxLjIzNzY3IDYxLjg0MjQgMS4xMDcyMyA2Mi40NDQ4IDEuMTE2MTVDNjMuMDQ0OSAxLjEyNTAzIDYzLjM4NjQgMS4yNjk2NCA2My41Nzg5IDEuNDI1OTZDNjMuOTIgMS43MDI5MiA2NC4yMzQ4IDIuNDQ3MDYgNjMuNzYwNSA0LjE4NDYxTDYzLjc2MDQgNC4xODQ2TDYzLjc1OCA0LjE5Mzk1TDU0LjIyMzEgNDAuNDk5NUw1NC4yMjEyIDQwLjUwNjhMNTQuMjE5NCA0MC41MTQxQzUzLjg4ODIgNDEuODU3MSA1My4zNjk5IDQyLjQ4ODUgNTIuODEyMiA0Mi43MzMzQzUyLjI0MDYgNDIuOTg0MSA1MS4yODYxIDQyLjk4MjYgNDkuNzIzNiA0Mi4yNDdMMzUuMjI5NiAzMy41MTk0TDM0LjY0ODIgMzMuMTY5M0wzNC4xMDgyIDMzLjU4MDJMMjUuNjM5MSA0MC4wMjQyQzI1LjAzNjIgNDAuNDM0MyAyNC4yMjkxIDQwLjQzNTggMjMuNjg5NSAzOS44MTgyTDI0LjU2OTYgMzEuMTg2TDU0Ljg4IDkuMTE3MjRDNTQuODgxMyA5LjExNjI3IDU0Ljg4MjcgOS4xMTUzMSA1NC44ODQgOS4xMTQzNEM1NS4xMzYxIDguOTM0MTYgNTUuMzU5NyA4Ljc0MzYzIDU1LjUzNDggOC41NDAwM0M1NS42OTkgOC4zNDkxMyA1NS44OTM0IDguMDYyOTkgNTUuOTQxNSA3LjY5NTI4QzU1Ljk5OTMgNy4yNTM5NyA1NS44MjYxIDYuODQ5MjMgNTUuNTEzNSA2LjU4MTYzQzU1LjI1MTEgNi4zNTcwNiA1NC45NDQ5IDYuMjcxNjIgNTQuNzI1MSA2LjIzNDlDNTQuMjcyMSA2LjE1OTI0IDUzLjc0MjcgNi4yMTg5IDUzLjIzODEgNi4zNDYyN0M1Mi43MjI1IDYuNDc2NDMgNTIuMTU3MiA2LjY5NjM0IDUxLjYwMDIgNy4wMTE0N0wxNi4yMzc0IDI0LjU4NThMMS44NzAxIDIwLjkxNDNDMS4zNTA5MiAyMC43MjQ0IDEuMTE4ODkgMjAuNTM3IDEuMDMyOTYgMjAuNDM0MkMxLjAxNzQ3IDIwLjQxNTcgMS4wMDgzMSAyMC40MDE5IDEuMDAzMSAyMC4zOTI5QzEuMDE4MjkgMjAuMzQ3NyAxLjA4ODgxIDIwLjIwNTkgMS4zMzc3NiAyMC4wMDcxQzEuNTg4NDIgMTkuODA2OSAxLjk2MTU0IDE5LjU5NzcgMi40NTQyMSAxOS40MTg5TDYwLjAxOTQgMS41NjgzWk0wLjk5NjkyIDIwLjM4MDRDMC45OTY5NDQgMjAuMzgwNCAwLjk5NzEyOCAyMC4zODA4IDAuOTk3NDA2IDIwLjM4MTdMMC45OTY5MiAyMC4zODA0WlwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ091dCc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMjUgMjZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExLjYzNTggMTguMjQyOUMxMS40NDAzIDE4LjQyNDQgMTEuNDQwMyAxOC43MTc4IDExLjYzNTggMTguODk5NEMxMS43MzMzIDE4Ljk4OTkgMTEuODYxMyAxOS4wMzU0IDExLjk4OTMgMTkuMDM1NEMxMi4xMTczIDE5LjAzNTQgMTIuMjQ1MyAxOC45ODk5IDEyLjM0MjggMTguODk5NEwxOC4zNDIzIDEzLjMyODRDMTguMzg4OCAxMy4yODU3IDE4LjQyNTMgMTMuMjM0MiAxOC40NTA4IDEzLjE3NzFDMTguNTAxMyAxMy4wNjM4IDE4LjUwMTMgMTIuOTM2MSAxOC40NTA4IDEyLjgyMjNDMTguNDI1MyAxMi43NjUyIDE4LjM4ODMgMTIuNzEzNyAxOC4zNDIzIDEyLjY3MDVMMTIuMzQyOCA3LjEwMDAyQzEyLjE0NzMgNi45MTg0OCAxMS44MzEzIDYuOTE4NDggMTEuNjM1OCA3LjEwMDAyQzExLjQ0MDMgNy4yODE1NSAxMS40NDAzIDcuNTc0OTggMTEuNjM1OCA3Ljc1NjUyTDE2Ljc4MjMgMTIuNTM1NEgxLjQ4OTI2QzEuMjEyNzYgMTIuNTM1NCAwLjk4OTI1OCAxMi43NDI5IDAuOTg5MjU4IDEyLjk5OTdDMC45ODkyNTggMTMuMjU2NCAxLjIxMjc2IDEzLjQ2NCAxLjQ4OTI2IDEzLjQ2NEgxNi43ODIzTDExLjYzNTggMTguMjQyOVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNC40ODkzIDBINS45ODkyNkM1LjcxMjc2IDAgNS40ODkyNiAwLjIwNzUzNiA1LjQ4OTI2IDAuNDY0Mjg2VjEwLjIxNDNDNS40ODkyNiAxMC40NzEgNS43MTI3NiAxMC42Nzg2IDUuOTg5MjYgMTAuNjc4NkM2LjI2NTc2IDEwLjY3ODYgNi40ODkyNiAxMC40NzEgNi40ODkyNiAxMC4yMTQzVjAuOTI4NTcxSDIzLjk4OTNWMjUuMDcxNEg2LjQ4OTI2VjE1Ljc4NTdDNi40ODkyNiAxNS41MjkgNi4yNjU3NiAxNS4zMjE0IDUuOTg5MjYgMTUuMzIxNEM1LjcxMjc2IDE1LjMyMTQgNS40ODkyNiAxNS41MjkgNS40ODkyNiAxNS43ODU3VjI1LjUzNTdDNS40ODkyNiAyNS43OTI1IDUuNzEyNzYgMjYgNS45ODkyNiAyNkgyNC40ODkzQzI0Ljc2NTggMjYgMjQuOTg5MyAyNS43OTI1IDI0Ljk4OTMgMjUuNTM1N1YwLjQ2NDI4NkMyNC45ODkzIDAuMjA3NTM2IDI0Ljc2NTggMCAyNC40ODkzIDBaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBjYXNlICdIb21lT2ZmaWNlU3ZnJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjcwXCIgdmlld0JveD1cIjAgMCA4MCA3MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuNTAwNCA2Ny43MjQ3SDExLjAwMDRDMTIuNTAwNCA2Ny43MjQ3IDEyLjUwMDQgNjcuNzI0NSAxMi41MDA0IDY3LjcyNDNWNjcuNzIzMlY2Ny43MTlWNjcuNzEyVjY3LjcwNzRWNjcuNzAyMlY2Ny42OTYzVjY3LjY4OTdWNjcuNjc0NFY2Ny42NjU4VjY3LjY1NjRWNjcuNjM1OFY2Ny42MjQ1VjY3LjYxMjVWNjcuNTg2NVY2Ny41NThWNjcuNTQyN1Y2Ny41MjY4VjY3LjUxMDNWNjcuNDkzMVY2Ny40NzUzVjY3LjQ1NjhWNjcuNDM3OFY2Ny40MThWNjcuMzk3N1Y2Ny4zNzY3VjY3LjM1NTJWNjcuMzMzVjY3LjMxMDJWNjcuMjg2N1Y2Ny4yNjI3VjY3LjIzODFWNjcuMjEyOFY2Ny4xODdWNjcuMTYwNVY2Ny4xMzM1VjY3LjEwNThWNjcuMDc3NlY2Ny4wNDg4VjY3LjAxOTRWNjYuOTg5NFY2Ni45NTg5VjY2LjkyNzhWNjYuODk2VjY2LjgzMDlWNjYuNzk3NVY2Ni43NjM2VjY2LjY5MzlWNjYuNjU4M1Y2Ni42MjIxVjY2LjU4NTRWNjYuNTQ4MVY2Ni41MTAzVjY2LjQ3MTlWNjYuNDMzVjY2LjM5MzVWNjYuMzUzNlY2Ni4zMTMxVjY2LjI3MlY2Ni4yMzA1VjY2LjE0NThWNjYuMTAyN1Y2Ni4wNTkxVjY2LjAxNVY2NS45NzA0VjY1LjkyNTJWNjUuODc5NlY2NS43ODY4VjY1LjczOTdWNjUuNjkyMVY2NS42NDRWNjUuNTk1NFY2NS41NDYzVjY1LjQ5NjhWNjUuNDQ2N1Y2NS4zOTYyVjY1LjI5MzhWNjUuMjQxOVY2NS4xODk1VjY1LjEzNjdWNjUuMDgzNFY2NS4wMjk3VjY0Ljk3NTVWNjQuODY1OFY2NC44MTAzVjY0Ljc1NDNWNjQuNjQxMVY2NC41MjYxVjY0LjQwOTRWNjQuMjkxVjY0LjE3MVY2NC4xMTA0VjY0LjA0OTRWNjMuOTg3OVY2My45MjYxVjYzLjY3NDhWNjMuNjEwOVY2My41NDY3VjYzLjQxNzJWNjMuMjg2MlY2My4xNTM3VjYzLjAxOTdWNjIuODg0M1Y2Mi44MTZWNjIuNzQ3NFY2Mi42Nzg1VjYyLjYwOTJWNjIuNDY5NlY2Mi4zMjg2VjYyLjE4NjNWNjIuMTE0N1Y2Mi4wNDI3VjYxLjk3MDRWNjEuODk3OFY2MS43NTE3VjYxLjQ1NTdWNjEuMzgwOVY2MS4zMDU5VjYxLjIzMDVWNjEuMTU0OVY2MC41Mzk3VjYwLjM4MzJWNjAuMjI1NlY2MC4xNDY1VjYwLjA2N1Y1OS45ODc0VjU5LjkwNzVWNTkuMjU5NlY1OS4wOTU0VjU5LjAxM1Y1OC45MzAzVjU4Ljc2NDRWNTguNjgxMVY1OC41OTc2VjU3LjkyMjlWNTcuNTgxMVY1Ny40MDkyVjU3LjIzNjdWNTcuMTUwMlY1Ny4wNjM2VjU2Ljg4OTlWNTYuNTQwN1Y1Ni4xODk0VjU1LjgzNjFWNTUuNjU4OFY1NS41N1Y1NS40ODExVjU1LjEyNDVWNTQuOTQ1NlY1NC43NjY1VjU0LjU4N1Y1NC40OTcxVjU0LjQwNzJWNTQuMDQ2OFY1My44NjYzVjUzLjc3NlY1My42ODU2VjUzLjMyMzdWNTIuOTYxMlY1Mi44NzA1VjUyLjc3OThWNTIuNTk4NFY1Mi41MDc2VjUyLjQxNjlWNTIuMjM1NFY1Mi4xNDQ2VjUyLjA1MzlWNTEuOTYzMVY1MS44NzI0VjUxLjc4MTdWNTEuNjkwOVY1MS42MDAyVjUxLjUwOTZWNTEuNDE4OVY1MS4zMjgzVjUxLjIzNzdWNTEuMTQ3MVY1MS4wNTY2VjUwLjk2NlY1MC44NzU2VjUwLjc4NTJWNTAuNjk0OFY1MC42MDQ0VjUwLjUxNDJWNTAuNDIzOVY1MC4zMzM4VjUwLjI0MzZWNTAuMTUzNlY1MC4wNjM2VjQ5Ljk3MzdWNDkuODgzOFY0OS43OTRWNDkuNzA0M1Y0OS42MTQ3VjQ5LjUyNTFWNDkuNDM1N1Y0OS4zNDYzVjQ5LjI1N1Y0OS4xNjc4VjQ5LjA3ODdWNDguOTg5N1Y0OC45MDA3VjQ4LjgxMTlWNDguNzIzMlY0OC42MzQ2VjQ4LjU0NjFWNDguNDU3OFY0OC4zNjk1VjQ4LjI4MTRWNDguMTkzNFY0OC4xMDU1VjQ4LjAxNzdWNDcuOTMwMVY0Ny44NDI2VjQ3Ljc1NTJWNDcuNjY4VjQ3LjU4MDlWNDcuNDk0VjQ3LjQwNzJWNDcuMzIwNVY0Ny4yMzRWNDcuMTQ3N1Y0Ny4wNjE1VjQ2Ljk3NTVWNDYuODg5NlY0Ni44MDRWNDYuNzE4NFY0Ni42MzMxVjQ2LjU0NzlWNDYuNDYyOVY0Ni4zNzgxVjQ2LjI5MzVWNDYuMjA5VjQ2LjEyNDhWNDYuMDQwN1Y0NS45NTY4VjQ1Ljg3MzFWNDUuNzg5N1Y0NS43MDY0VjQ1LjYyMzNWNDUuNTQwNVY0NS40NTc4VjQ1LjM3NTRWNDUuMjkzMVY0NS4yMTExVjQ1LjEyOTRWNDUuMDQ3OFY0NC45NjY1VjQ0Ljg4NTRWNDQuODA0NVY0NC43MjM5VjQ0LjU2MzNWNDQuMjQ1MlY0NC4wODc2VjQzLjkzMTFWNDMuNjIxM1Y0My4zMTU5VjQzLjAxNTFWNDIuNzE5MVY0Mi40MjgxVjQyLjE0MjJWNDEuODYxNlY0MS41ODY1VjQxLjMxNzFWNDEuMjUwN1Y0MS4xODQ2VjQxLjA1MzVWNDAuOTI0VjQwLjc5NlY0MC41NDQ3VjQwLjA2MTRWMzkuOTQ0N1YzOS44ODdWMzkuODI5N1YzOS42MDVWMzkuMTc3VjM5LjA3NDVWMzkuMDI0VjM4Ljk3NFYzOC43Nzg3VjM4LjU5MTJWMzguNTAwNFYzOC40NTU4VjM4LjQxMTdWMzguMDc3MlYzNy40NDU5TDQwLjQ4MjkgMTMuOTgyMUw2Ni44MTEgMzcuNDE5MVY2Ny4yMDk1VjY3LjI0MzNMNjYuODExNyA2Ny4yNThDNjYuODExNyA2Ny4yNjAyIDY2LjgxMTYgNjcuMjYzIDY2LjgxMTUgNjcuMjY2M0M2Ni44MTEgNjcuMjg3MyA2Ni44MDkxIDY3LjMyNjcgNjYuODAyOSA2Ny4zNzc2QzY2Ljc4OTcgNjcuNDg3NSA2Ni43NjIgNjcuNjA2NSA2Ni43MTc3IDY3LjcwNDRDNjYuNjc2NSA2Ny43OTU1IDY2LjYzNzMgNjcuODM0IDY2LjYwODUgNjcuODUzOUM2Ni41ODkgNjcuODY3NCA2Ni40ODY2IDY3LjkzNiA2Ni4xOTU3IDY3LjkzNkg2Ni4xNzk4SDY2LjE2MzZINjYuMTQ3MUg2Ni4xMzAzSDY2LjExMzFINjYuMDk1Nkg2Ni4wNzc5SDY2LjA1OTdINjYuMDQxM0g2Ni4wMjI2SDY2LjAwMzVINjUuOTg0MUg2NS45NjQ0SDY1Ljk0NDRINjUuOTI0MUg2NS45MDM1SDY1Ljg4MjZINjUuODYxM0g2NS44Mzk4SDY1LjgxOEg2NS43OTU4SDY1Ljc3MzRINjUuNzUwN0g2NS43Mjc2SDY1LjcwNDNINjUuNjgwN0g2NS42NTY4SDY1LjYzMjZINjUuNjA4MUg2NS41ODMzSDY1LjU1ODJINjUuNTMyOUg2NS41MDczSDY1LjQ4MTNINjUuNDU1MUg2NS40Mjg3SDY1LjQwMTlINjUuMzc0OUg2NS4zNDc2SDY1LjMySDY1LjI5MjFINjUuMjY0SDY1LjIzNTZINjUuMjA2OUg2NS4xNzhINjUuMTQ4OEg2NS4xMTkzSDY1LjA4OTZINjUuMDU5Nkg2NS4wMjk0SDY0Ljk5ODlINjQuOTY4MUg2NC45MzcxSDY0LjkwNThINjQuODc0M0g2NC44NDI1SDY0LjgxMDVINjQuNzc4Mkg2NC43NDU3SDY0LjcxMjlINjQuNjc5OUg2NC42NDY2SDY0LjYxMzFINjQuNTc5NEg2NC41NDU0SDY0LjUxMTJINjQuNDc2N0g2NC40NDJINjQuNDA3MUg2NC4zNzE5SDY0LjMzNjZINjQuMzAwOUg2NC4yNjUxSDY0LjIyOUg2NC4xOTI3SDY0LjE1NjJINjQuMTE5NUg2NC4wODI1SDY0LjA0NTNINjQuMDA3OUg2My45NzAzSDYzLjkzMjVINjMuODk0NUg2My44NTYySDYzLjgxNzdINjMuNzc5MUg2My43NDAySDYzLjcwMTFINjMuNjYxOEg2My42MjIzSDYzLjU4MjZINjMuNTQyN0g2My41MDI2SDYzLjQ2MjNINjMuNDIxOEg2My4zODExSDYzLjM0MDJINjMuMjk5MUg2My4yNTc4SDYzLjIxNjRINjMuMTc0N0g2My4xMzI5SDYzLjA5MDlINjMuMDQ4N0g2My4wMDYzSDYyLjk2MzdINjIuOTIwOUg2Mi44NzhINjIuODM0OUg2Mi43OTE2SDYyLjc0ODJINjIuNzA0NUg2Mi42NjA3SDYyLjYxNjhINjIuNTcyNkg2Mi41MjgzSDYyLjQ4MzhINjIuNDM5Mkg2Mi4zOTQ0SDYyLjM0OTRINjIuMzA0M0g2Mi4yNTlINjIuMjEzNkg2Mi4xNjhINjIuMTIyMkg2Mi4wNzYzSDYyLjAzMDNINjEuOTg0MUg2MS45Mzc3SDYxLjg5MTJINjEuODQ0Nkg2MS43OTc4SDYxLjc1MDhINjEuNzAzN0g2MS42NTY1SDYxLjYwOTJINjEuNTYxN0g2MS41MTRINjEuNDY2M0g2MS40MTgzSDYxLjM3MDNINjEuMzIyMUg2MS4yNzM4SDYxLjIyNTRINjEuMTc2OUg2MS4xMjgySDYxLjA3OTRINjEuMDMwNUg2MC45ODE0SDYwLjkzMjNINjAuODgzSDYwLjgzMzZINjAuNzg0MUg2MC43MzQ0SDYwLjY4NDdINjAuNjM0OEg2MC41ODQ5SDYwLjUzNDhINjAuNDg0Nkg2MC40MzQzSDYwLjM4NEg2MC4zMzM1SDYwLjI4MjlINjAuMjMyMkg2MC4xODE0SDYwLjEzMDVINjAuMDc5NUg2MC4wMjg1SDU5Ljk3NzNINTkuOTI2SDU5Ljg3NDdINTkuODIzMkg1OS43NzE3SDU5LjcyMDFINTkuNjY4NEg1OS42MTY2SDU5LjU2NDdINTkuNTEyOEg1OS40NjA4SDU5LjQwODdINTkuMzU2NUg1OS4zMDQzSDU5LjI1MTlINTkuMTk5NUg1OS4xNDcxSDU5LjA5NDVINTkuMDQxOUg1OC45ODkzSDU4LjkzNjVINTguODgzN0g1OC44MzA5SDU4Ljc3NzlINTguNzI1SDU4LjY3MTlINTguNjE4OEg1OC41NjU3SDU4LjUxMjVINTguNDU5Mkg1OC40MDU5SDU4LjM1MjZINTguMjk5Mkg1OC4yNDU3SDU4LjE5MjJINTguMTM4N0g1OC4wODUxSDU4LjAzMTVINTcuOTc3OEg1Ny45MjQxSDU3Ljg3MDRINTcuODE2Nkg1Ny43NjI4SDU3LjcwOUg1Ny42NTUxSDU3LjYwMTJINTcuNTQ3M0g1Ny40OTMzSDU3LjQzOTNINTcuMzg1M0g1Ny4zMzEzSDU3LjI3NzNINTcuMjIzMkg1Ny4xNjkxSDU3LjExNUg1Ny4wNjA5SDU3LjAwNjdINTYuOTUyNkg1Ni44OTg0SDU2Ljg0NDNINTYuNzkwMUg1Ni43MzU5SDU2LjY4MTdINTYuNjI3NUg1Ni41NzMzSDU2LjUxOTFINTYuNDY0OUg1Ni40MTA3SDU2LjM1NjVINTYuMzAyM0g1Ni4yNDgySDU2LjE5NEg1Ni4xMzk4SDU2LjA4NTZINTYuMDMxNUg1NS45NzczSDU1LjkyMzJINTUuODY5MUg1NS44MTVINTUuNzYwOUg1NS43MDY5SDU1LjY1MjlINTUuNTk4OEg1NS41NDQ5SDU1LjQ5MDlINTUuNDM3SDU1LjM4M0g1NS4zMjkySDU1LjI3NTNINTUuMjIxNUg1NS4xNjc3SDU1LjExNEg1NS4wNjAySDU1LjAwNjZINTQuOTUyOUg1NC44OTkzSDU0Ljg0NThINTQuNzkyM0g1NC43Mzg4SDU0LjY4NTRINTQuNjMySDU0LjU3ODdINTQuNTI1NEg1NC40NzIySDU0LjQxOUg1NC4zNjU5SDU0LjMxMjlINTQuMjU5OUg1NC4yMDY5SDU0LjE1NEg1NC4xMDEySDU0LjA0ODVINTMuOTk1OEg1My45NDMxSDUzLjg5MDZINTMuODM4MUg1My43ODU3SDUzLjczMzNINTMuNjgxSDUzLjYyODhINTMuNTc2N0g1My41MjQ2SDUzLjQ3MjdINTMuNDIwOEg1My4zNjlINTMuMzE3Mkg1My4yNjU2SDUzLjIxNEg1My4xNjI2SDUzLjExMTJINTMuMDU5OUg1My4wMDg3SDUyLjk1NzZINTIuOTA2Nkg1Mi44NTU2SDUyLjgwNDhINTIuNzU0MUg1Mi43MDM0SDUyLjY1MjlINTIuNjAyNUg1Mi41NTIySDUyLjUwMkg1Mi40NTE5SDUyLjQwMThINTIuMzUySDUyLjMwMjJINTIuMjUyNUg1Mi4yMDI5SDUyLjE1MzVINTIuMTA0Mkg1Mi4wNTVINTIuMDA1OUg1MS45NTY5SDUxLjkwODFINTEuODU5M0g1MS44MTA4SDUxLjc2MjNINTEuNzEzOUg1MS42NjU3SDUxLjYxNzZINTEuNTY5N0g1MS41MjE5SDUxLjQ3NDJINTEuNDI2Nkg1MS4zNzkySDUxLjMzMTlINTEuMjg0OEg1MS4yMzc4SDUxLjE5MUg1MS4xNDQzSDUxLjA5NzdINTEuMDUxM0g1MS4wMDVINTAuOTU4OUg1MC45MTNINTAuODY3Mkg1MC44MjE1SDUwLjc3Nkg1MC43MzA3SDUwLjY4NTVINTAuNjQwNUg1MC41OTU2SDUwLjU1MDlINTAuNTA2NEg1MC40NjJINTAuNDE3OEg1MC4zNzM4SDUwLjMyOTlINTAuMjg2Mkg1MC4yNDI3SDUwLjE5OTNINTAuMTU2Mkg1MC4xMTMySDUwLjA3MDRINTAuMDI3N0g0OS45ODUzSDQ5Ljk0M0g0OS45MDA5SDQ5Ljg1OUg0OS44MTczSDQ5Ljc3NTdINDkuNzM0NEg0OS42OTMySDQ5LjY1MjNINDkuNjExNUg0OS41NzFINDkuNTMwNkg0OS40OTA0SDQ5LjQ1MDRINDkuNDEwN0g0OS4zNzExSDQ5LjMzMTdINDkuMjkyNUg0OS4yNTM2SDQ5LjIxNDhINDkuMTc2M0g0OS4xMzhINDkuMDk5OEg0OS4wNjE5SDQ5LjAyNDJINDguOTg2OEg0OC45NDk1SDQ4LjkxMjVINDguODc1Nkg0OC44MzlINDguODAyN0g0OC43NjY1SDQ4LjczMDZINDguNjk0OUg0OC42NTk0SDQ4LjYyNDJINDguNTg5Mkg0OC41NTQ0SDQ4LjUxOTlINDguNDg1NUg0OC40NTE1SDQ4LjQxNzdINDguMzg0MUg0OC4zNTA3SDQ4LjMxNzZINDguMjg0N0g0OC4yNTIxSDQ4LjIxOThINDguMTg3Nkg0OC4xNTU4SDQ4LjEyNDJINDguMDkyOEg0OC4wNjE3SDQ4LjAzMDhINDguMDAwMkg0Ny45NzRMNDguMDA2MiA1My4wMDI0QzQ4LjAwNjUgNTIuOTk2MyA0OC4wMDY3IDUyLjk4OTkgNDguMDA2OSA1Mi45ODMyQzQ4LjAwODIgNTIuOTQyOSA0OC4wMDkxIDUyLjg5MTggNDguMDA4NCA1Mi44MzEyQzQ4LjAwNyA1Mi43MTA2IDQ3Ljk5OTYgNTIuNTQ5MyA0Ny45NzY4IDUyLjM2MDFDNDcuOTMyIDUxLjk4ODggNDcuODIzMSA1MS40Njg0IDQ3LjU1MiA1MC45MjkzQzQ3LjI3NDkgNTAuMzc4MiA0Ni44MjY5IDQ5LjgwNzggNDYuMTI4IDQ5LjM4NDJDNDUuNDMxMyA0OC45NjE4IDQ0LjU3NzMgNDguNzQxMyA0My41NzQ0IDQ4Ljc0MTNIMzUuMjEzNEMzNC4yODMxIDQ4Ljc0MTMgMzMuNDc5NiA0OC45ODYyIDMyLjgzNzggNDkuNDYxNEMzMi4yMDcgNDkuOTI4NCAzMS44NDU4IDUwLjUzMzcgMzEuNjQxOCA1MS4wNjk2QzMxLjQ0MDUgNTEuNTk4NSAzMS4zNzUgNTIuMTAxOSAzMS4zNTQ4IDUyLjQ1MzdDMzEuMzQ0NCA1Mi42MzQyIDMxLjM0NTMgNTIuNzg3MyAzMS4zNDkzIDUyLjkwMDZDMzEuMzUwOSA1Mi45NDc1IDMxLjM1MzEgNTIuOTg4IDMxLjM1NTMgNTMuMDIxNUwzMS4zMjg1IDY3Ljk5MTJMMjkuOTgwNyA2Ny45OTNMMjMuNTYyOSA2OC4wMDExQzE4Ljc5NTkgNjguMDA3IDEzLjc1OTUgNjguMDEzIDEyLjY3NSA2OC4wMTNDMTIuNjE1OCA2OC4wMTMgMTIuNTc1OSA2OC4wMDgyIDEyLjU1MTEgNjguMDAzNEMxMi41MzA4IDY3Ljk1NzQgMTIuNTE0IDY3Ljg5MTEgMTIuNTA1NCA2Ny44MjFDMTIuNTAxOSA2Ny43OTI1IDEyLjUwMDYgNjcuNzcwOCAxMi41MDAyIDY3Ljc1OTdMMTIuNTAwNCA2Ny43NTQ0VjY3LjcyNDdaTTEyLjUxNzMgNjcuOTkzOEMxMi41MTc0IDY3Ljk5MzcgMTIuNTE5NyA2Ny45OTQ1IDEyLjUyMzggNjcuOTk2NkMxMi41MTkyIDY3Ljk5NSAxMi41MTcxIDY3Ljk5NCAxMi41MTczIDY3Ljk5MzhaXCIgZmlsbD1cIiMwRTEwM0RcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MC42MTY5IDEuNDc1MzlMNzguNDM5IDM1Ljc2MjFDNzguMjEyNiAzNS45Njk4IDc3LjkxNjggMzYuMTgwOSA3Ny41NDU2IDM2LjMzNEM3Ni42MjU2IDM2LjcxMzYgNzQuODY3OSAzNi44ODE1IDcxLjkzNiAzNC43ODA0TDQxLjM2MTkgNy4zNDQxNUw0MC42NDgyIDYuNzAzNzZMMzkuOTE2NCA3LjMyMzMxTDcuMjYwMDYgMzQuOTcwNkM3LjI1OTkyIDM0Ljk3MDggNy4yNTk3OCAzNC45NzA5IDcuMjU5NjUgMzQuOTcxQzQuNzUyMjcgMzcuMDkxNSAzLjIwMDkzIDM2Ljg5OTQgMi4zODAwMSAzNi41MzczQzIuMDI4NjcgMzYuMzgyMyAxLjczNzc0IDM2LjE2NDggMS41MDg3NyAzNS45NDdMNDAuNjE2OSAxLjQ3NTM5Wk0wLjk2MjgxNyAzNS4yNzg2QzAuOTYyMzk1IDM1LjI3NzggMC45NjI1MzQgMzUuMjc4MSAwLjk2MzIzMSAzNS4yNzkzTDAuOTYyODE3IDM1LjI3ODZaXCIgZmlsbD1cIiMwRTEwM0RcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYxLjAzMSAxMi4wOTMyTDYxLjAwMzQgNEg2Ni44NzU3VjE3LjA1NTRMNjEuMDMxIDEyLjA5MzJaXCIgZmlsbD1cIiMwRTEwM0RcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdVc2Vycyc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgMjIgMjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjkzMDkgMTYuMzU0TDE2LjUxMDQgMTQuODcyNUMxNi40Mjk5IDE0LjgzMjIgMTYuMzQwNiAxNC43MzM5IDE2LjI2NCAxNC42MDI2TDE4LjU0NzcgMTQuNjAwOUMxOC41ODc2IDE0LjYwNDcgMTkuNTI5MiAxNC42OTA4IDIwLjI4NDEgMTQuMzY2NEMyMC41NyAxNC4yNDMyIDIwLjc4MjkgMTMuOTk5OSAyMC44NjgyIDEzLjY5ODlDMjAuOTU0MyAxMy4zOTUxIDIwLjg5OTcgMTMuMDczNSAyMC43MTkyIDEyLjgxNTlDMjAuMDY2NCAxMS44ODcgMTguNTQyOSA5LjQ1OTcyIDE4LjQ5NTMgNi45OTc4MkMxOC40OTQyIDYuOTU1NDcgMTguMzU2MyAyLjc2ODc3IDE0LjIyMTggMi43MzQ4MkMxMy42MTMxIDIuNzM5NzIgMTMuMDUwMyAyLjg0Mjk3IDEyLjUzODIgMy4wMzMzN0MxMi40MjY2IDIuNzQ4ODIgMTIuMjYyMSAyLjQ1MjAyIDEyLjAxNzUgMi4xNzI3MkMxMS4yOTg5IDEuMzUyMzIgMTAuMTMyMyAwLjkzNjUyMyA4LjU1IDAuOTM2NTIzQzYuOTY3NjUgMC45MzY1MjMgNS44MDExIDEuMzUyMzIgNS4wODIyIDIuMTcyMDJDNC4yNTM0IDMuMTE3MzcgNC4zMzA0IDQuMjYzNjIgNC4zNSA0LjQ1NTc3VjYuMzE3NDJDNC4xMjYgNi41NzI1NyA0IDYuODk5MTIgNCA3LjIzNjE3VjguNjM2MTdDNCA5LjA2MjEyIDQuMTkzNTUgOS40NTkzNyA0LjUyMzk1IDkuNzI0MzJDNC44NDQ1NSAxMC45OTM4IDUuNTE1NSAxMS45NTAzIDUuNzUgMTIuMjU3M1YxMy40MTU0QzUuNzUgMTMuNzU0MiA1LjU2NTIgMTQuMDY1IDUuMjY4MDUgMTQuMjI3NEwyLjE0NTcgMTUuOTMwNUMxLjEzMDM1IDE2LjQ4NDkgMC41IDE3LjU0NjggMC41IDE4LjcwMzJWMjAuMTg2NUgxNS45SDE2LjZIMjEuNVYxOC44OTI2QzIxLjUgMTcuODEwNCAyMC44OTg3IDE2LjgzODEgMTkuOTMwOSAxNi4zNTRaTTE1LjkgMTkuNDg2NUgxLjJWMTguNzAzMkMxLjIgMTcuODAzNCAxLjY5MDcgMTYuOTc2MyAyLjQ4MDY1IDE2LjU0NThMNS42MDMgMTQuODQyN0M2LjEyNTU1IDE0LjU1NzUgNi40NSAxNC4wMTA0IDYuNDUgMTMuNDE1OFYxMi4wMDkxTDYuMzY4NDUgMTEuOTExOEM2LjM2MDA1IDExLjkwMTcgNS41MDIyIDEwLjg2MzkgNS4xNzQ5NSA5LjQzOTA3TDUuMTQzMSA5LjMwMDQ3TDUuMDIzNzUgOS4yMjM0N0M0LjgyMTEgOS4wOTI1NyA0LjcgOC44NzMxMiA0LjcgOC42MzY1MlY3LjIzNjUyQzQuNyA3LjA0MDE3IDQuNzgzMyA2Ljg1NzEyIDQuOTM0NSA2LjcyMDI3TDUuMDUgNi42MTYzMlY0LjQzNjUyTDUuMDQ2ODUgNC4zOTA2N0M1LjA0NTggNC4zODEyMiA0LjkyNjggMy40MTEwMiA1LjYwODYgMi42MzMzMkM2LjE4ODU1IDEuOTcxODIgNy4xNzgzNSAxLjYzNjUyIDguNTUgMS42MzY1MkM5LjkxNjc1IDEuNjM2NTIgMTAuOTA0NCAxLjk2OTM3IDExLjQ4NTEgMi42MjYzMkMxMS43NzM4IDIuOTUyNTIgMTEuOTE5MSAzLjMxNjg3IDExLjk5MTUgMy42Mjk3N0MxMS45OTcxIDMuNjU0MjcgMTIuMDAyNCAzLjY3ODQyIDEyLjAwNzMgMy43MDI1N0MxMi4wMTIyIDMuNzI3NDIgMTIuMDE3NCAzLjc1MjI3IDEyLjAyMTMgMy43NzYwN0MxMi4wMjU4IDMuODAzMzcgMTIuMDI5NyAzLjgyOTI3IDEyLjAzMzUgMy44NTUxN0MxMi4wMzYzIDMuODczNzIgMTIuMDM5MSAzLjg5MjYyIDEyLjA0MTIgMy45MTA0N0MxMi4wNDY1IDMuOTUzODcgMTIuMDUwNyAzLjk5NTg3IDEyLjA1MzUgNC4wMzQ3MkMxMi4wNTM4IDQuMDM3ODcgMTIuMDUzOSA0LjA0MDY3IDEyLjA1MzkgNC4wNDM4MkMxMi4wNTYzIDQuMDgxNjIgMTIuMDU4MSA0LjExNzMyIDEyLjA1OTEgNC4xNDk4N0MxMi4wNTkxIDQuMTU2MTcgMTIuMDU5MSA0LjE2MTQyIDEyLjA1OTUgNC4xNjc3MkMxMi4wNjAyIDQuMTk2NzcgMTIuMDYwMiA0LjIyNDQyIDEyLjA1OTggNC4yNDg1N0MxMi4wNTk4IDQuMjUyMDcgMTIuMDU5OCA0LjI1NTU3IDEyLjA1OTggNC4yNTkwN0MxMi4wNTg0IDQuMzQxMzIgMTIuMDUyOCA0LjM5MDMyIDEyLjA1MjggNC4zOTEzN0wxMi4wNSA2LjYxNjMyTDEyLjE2NTUgNi43MjA2MkMxMi4zMTY3IDYuODU3MTIgMTIuNCA3LjA0MDE3IDEyLjQgNy4yMzY1MlY4LjYzNjUyQzEyLjQgOC45NDIwNyAxMi4xOTk4IDkuMjA5NDcgMTEuOTAyMyA5LjMwMTE3TDExLjcyOCA5LjM1NDcyTDExLjY3MiA5LjUyNzk3QzExLjQzNzggMTAuMjU2MyAxMS4xMDQzIDEwLjkyOSAxMC42ODAxIDExLjUyNzVDMTAuNTc2MSAxMS42NzQ5IDEwLjQ3NSAxMS44MDU0IDEwLjM4NzEgMTEuOTA1MkwxMC4zIDEyLjAwNDZWMTMuNDQ4M0MxMC4zIDEzLjUzNjkgMTAuMzA4NyAxMy42MjM3IDEwLjMyMjQgMTMuNzA5MUMxMC4zMjUyIDEzLjcyNzMgMTAuMzMwMSAxMy43NDQ4IDEwLjMzMzYgMTMuNzYzQzEwLjM0NzIgMTMuODMzMyAxMC4zNjU0IDEzLjkwMjMgMTAuMzg3OCAxMy45Njk1QzEwLjM5MzEgMTMuOTg1MiAxMC4zOTg3IDE0LjAwMDMgMTAuNDA0NiAxNC4wMTZDMTAuNDMxOSAxNC4wODkyIDEwLjQ2MzggMTQuMTU5OSAxMC41MDA5IDE0LjIyNzhDMTAuNTA1MSAxNC4yMzU1IDEwLjUwODkgMTQuMjQzNSAxMC41MTMxIDE0LjI1MTJDMTAuNTYzOSAxNC4zNDA4IDEwLjYyMjMgMTQuNDI1OSAxMC42ODk2IDE0LjUwNDNMMTAuNzY5NCAxNC42MDI2SDEwLjc4M0MxMC45MDMgMTQuNzIwOSAxMS4wNDA5IDE0LjgyMzggMTEuMTk3OCAxNC45MDIyTDE0LjU0MTMgMTYuNTczOEMxNS4zNzk1IDE2Ljk5MjQgMTUuOSAxNy44MzQ1IDE1LjkgMTguNzcxNVYxOS40ODY1Wk0yMC44IDE5LjQ4NjVIMTYuNlYxOC43NzE1QzE2LjYgMTcuNTY3OCAxNS45MzExIDE2LjQ4NiAxNC44NTQ5IDE1Ljk0NzdMMTIuNDU0NiAxNC43NDcyQzEyLjUxMzcgMTQuNjEyMSAxMi41MjE1IDE0LjQ1NzQgMTIuNDY5NyAxNC4zMDgzQzEyLjM4MzkgMTQuMDYxNSAxMi4xNTk5IDEzLjkwMjMgMTEuODk5MSAxMy45MDIzSDExLjEyMzJDMTEuMTA3MSAxMy44NzM5IDExLjA5NjYgMTMuODQyOCAxMS4wODM2IDEzLjgxMjdDMTEuMDY2MSAxMy43NzI0IDExLjA0NTUgMTMuNzMyOSAxMS4wMzM5IDEzLjY5MDVDMTEuMDEyNiAxMy42MTI4IDExIDEzLjUzMTYgMTEgMTMuNDQ4M1YxMi4yNjVDMTEuMDgwMSAxMi4xNjcgMTEuMTY0NSAxMi4wNTUzIDExLjI1MTYgMTEuOTMyMUMxMS42ODUzIDExLjMxOTYgMTIuMDMyOSAxMC42Mzc4IDEyLjI4NTYgOS45MDI0N0MxMi43Nzk0IDkuNjc2MDIgMTMuMSA5LjE4Nzc3IDEzLjEgOC42MzY1MlY3LjIzNjUyQzEzLjEgNi44OTk0NyAxMi45NzQgNi41NzI5MiAxMi43NSA2LjMxNzc3VjQuNDU2MTJDMTIuNzU5MSA0LjM2ODYyIDEyLjc3ODcgNC4wODE5NyAxMi43MjA2IDMuNzA3NDdDMTMuMTcxNCAzLjUzMDM3IDEzLjY3NjQgMy40MzkwMiAxNC4yMjIxIDMuNDM0NDdDMTcuNjY2NSAzLjQ2MjgyIDE3Ljc5MjEgNi44NjgzMiAxNy43OTU2IDcuMDExODJDMTcuODQ3IDkuNjY1ODcgMTkuNDU2NyAxMi4yMzYzIDIwLjE0NjUgMTMuMjE4QzIwLjIwNTcgMTMuMzAyIDIwLjIyMzUgMTMuNDA3NyAyMC4xOTUyIDEzLjUwNzVDMjAuMTc5MSAxMy41NjQ5IDIwLjEzMjkgMTMuNjY5MiAyMC4wMDc5IDEzLjcyMjdDMTkuNDE5OSAxMy45NzU4IDE4LjYyMjMgMTMuOTA0IDE4LjU4MTQgMTMuOTAyM0gxNi4xNzIzQzE1Ljk0NzIgMTMuOTAyMyAxNS43NDIxIDE0LjAxNjcgMTUuNjIzNSAxNC4yMDgyQzE1LjUwNTIgMTQuMzk4OSAxNS40OTQgMTQuNjMyIDE1LjU5MzQgMTQuODMyMkMxNS43MDI5IDE1LjA1MzEgMTUuODk2NSAxNS4zNDgxIDE2LjIxNDYgMTUuNTA2N0wxOS42MjYxIDE2Ljk4NDRDMjAuMzUwMyAxNy4zNTAxIDIwLjggMTguMDgwMiAyMC44IDE4Ljg5MjZWMTkuNDg2NVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdDbG9jayc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDIzIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS42ODY0IDBDNS42MjEgMCAwLjY4NjQwMSA0LjQ4NiAwLjY4NjQwMSAxMEMwLjY4NjQwMSAxNS41MTQgNS42MjEgMjAgMTEuNjg2NCAyMEMxNy43NTE4IDIwIDIyLjY4NjQgMTUuNTE0IDIyLjY4NjQgMTBDMjIuNjg2NCA0LjQ4NiAxNy43NTE4IDAgMTEuNjg2NCAwWk0xMS42ODY0IDE5LjMzMzNDNi4wMjU0MyAxOS4zMzMzIDEuNDE5NzMgMTUuMTQ2MyAxLjQxOTczIDEwQzEuNDE5NzMgNC44NTM2NyA2LjAyNTQzIDAuNjY2NjY3IDExLjY4NjQgMC42NjY2NjdDMTcuMzQ3NCAwLjY2NjY2NyAyMS45NTMxIDQuODUzNjcgMjEuOTUzMSAxMEMyMS45NTMxIDE1LjE0NjMgMTcuMzQ3NCAxOS4zMzMzIDExLjY4NjQgMTkuMzMzM1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS42ODY1IDJDMTEuNDg0MSAyIDExLjMxOTggMi4xNDkgMTEuMzE5OCAyLjMzMzMzVjEwSDUuODE5NzlDNS42MTczOSAxMCA1LjQ1MzEyIDEwLjE0OSA1LjQ1MzEyIDEwLjMzMzNDNS40NTMxMiAxMC41MTc3IDUuNjE3MzkgMTAuNjY2NyA1LjgxOTc5IDEwLjY2NjdIMTEuNjg2NUMxMS44ODg5IDEwLjY2NjcgMTIuMDUzMSAxMC41MTc3IDEyLjA1MzEgMTAuMzMzM1YyLjMzMzMzQzEyLjA1MzEgMi4xNDkgMTEuODg4OSAyIDExLjY4NjUgMlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdTdGFyJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAyMyAyMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuMzQzOCA5LjUxMzI4QzIyLjc3NjggOS4xMTIzNSAyMi45Mjk3IDguNTIzOTQgMjIuNzQyOSA3Ljk3Njk2QzIyLjU1NTcgNy40Mjk5OCAyMi4wNjggNy4wMzk1MSAyMS40Njg5IDYuOTU2NjVMMTYuMTQyIDYuMjIxMzRDMTUuOTE1MiA2LjE4OTk1IDE1LjcxOTEgNi4wNTQ3OCAxNS42MTc4IDUuODU5MzRMMTMuMjM2MyAxLjI3MzgxQzEyLjk2ODkgMC43NTg2MzEgMTIuNDI2MiAwLjQzODQ3NyAxMS44MjEzIDAuNDM4NDc3QzExLjIxNjkgMC40Mzg0NzcgMTAuNjc0MiAwLjc1ODYzMSAxMC40MDY4IDEuMjczODFMOC4wMjQ4NCA1Ljg1OTM0QzcuOTIzNTIgNi4wNTQ3OCA3LjcyNzA1IDYuMTg5OTUgNy41MDAxNyA2LjIyMTM0TDIuMTczMyA2Ljk1NzA3QzEuNTc0NjIgNy4wMzk1MSAxLjA4Njk2IDcuNDI5OTggMC44OTk3MzQgNy45NzY5NkMwLjcxMjk1IDguNTIzOTQgMC44NjU4MTMgOS4xMTIzNSAxLjI5ODg1IDkuNTEzMjhMNS4xNTMwNCAxMy4wODIzQzUuMzE3MzYgMTMuMjM0NiA1LjM5MjY5IDEzLjQ1MzkgNS4zNTM5MiAxMy42NjgyTDQuNDQ0MjMgMTguNzA4MkM0LjM0MjAyIDE5LjI3NDQgNC41ODIxMSAxOS44MzU2IDUuMDcxNTQgMjAuMTczOEM1LjU2MDUzIDIwLjUxMjQgNi4xOTcwOSAyMC41NTYzIDYuNzMzMjEgMjAuMjg4TDExLjQ5NzEgMTcuOTA4NEMxMS43MDAyIDE3LjgwNzIgMTEuOTQyNSAxNy44MDcyIDEyLjE0NTUgMTcuOTA4NEwxNi45MDk5IDIwLjI4OEMxNy4xNDI1IDIwLjQwNDQgMTcuMzk0NCAyMC40NjE3IDE3LjY0NTEgMjAuNDYxN0MxNy45NzA3IDIwLjQ2MTcgMTguMjk0OSAyMC4zNjUgMTguNTcxNSAyMC4xNzM4QzE5LjA2MSAxOS44MzU2IDE5LjMwMTEgMTkuMjc0NCAxOS4xOTg5IDE4LjcwODJMMTguMjg4NyAxMy42Njg2QzE4LjI1IDEzLjQ1MzkgMTguMzI1MyAxMy4yMzUgMTguNDg5NiAxMy4wODI3TDIyLjM0MzggOS41MTMyOFpNMTcuNDIwOSAxMy44MUwxOC4zMzA2IDE4Ljg0OTZDMTguMzc2NCAxOS4xMDMzIDE4LjI3MjkgMTkuMzQ1NiAxOC4wNTM1IDE5LjQ5NzFDMTcuODMzNyAxOS42NDgxIDE3LjU2MDEgMTkuNjY2NiAxNy4zMiAxOS41NDc3TDEyLjU1NTcgMTcuMTY3N0MxMi4zMjYyIDE3LjA1MzQgMTIuMDczMyAxNi45OTU3IDExLjgyMTMgMTYuOTk1N0MxMS41NjkzIDE2Ljk5NTcgMTEuMzE2OSAxNy4wNTM0IDExLjA4NyAxNy4xNjgxTDYuMzIzNTIgMTkuNTQ3N0M2LjA4MjU1IDE5LjY2NjYgNS44MDg5OSAxOS42NDgxIDUuNTg5NiAxOS40OTcxQzUuMzcwMjIgMTkuMzQ1NiA1LjI2NzE0IDE5LjEwMzcgNS4zMTI1MSAxOC44NDk2TDYuMjIyMiAxMy44MUM2LjMwOTg3IDEzLjMyMzcgNi4xNDAyNiAxMi44Mjc0IDUuNzY4NDYgMTIuNDgzNEwxLjkxMzgzIDguOTEzOThDMS43MTk1NiA4LjczNDAzIDEuNjUzNDggOC40ODA0MiAxLjczNzYyIDguMjM1NTlDMS44MjEzMiA3Ljk5MDM1IDIuMDMxNDUgNy44MjIxMSAyLjI5OTczIDcuNzg0ODZMNy42MjYxNyA3LjA0OTU2QzguMTQwMjYgNi45Nzg4MyA4LjU4NDc2IDYuNjcyNDkgOC44MTQyNyA2LjIyOTcxTDExLjE5NjIgMS42NDQxOEMxMS4zMTYgMS40MTMxNyAxMS41NSAxLjI3NTQ4IDExLjgyMDkgMS4yNzU0OEMxMi4wOTIyIDEuMjc1NDggMTIuMzI1NyAxLjQxMzE3IDEyLjQ0NiAxLjY0NDE4TDE0LjgyNzkgNi4yMjk3MUMxNS4wNTc0IDYuNjcyNDkgMTUuNTAxNSA2Ljk3ODgzIDE2LjAxNTYgNy4wNDk1NkwyMS4zNDI1IDcuNzg0ODZDMjEuNjEwOCA3LjgyMjExIDIxLjgyMDkgNy45OTAzNSAyMS45MDQ2IDguMjM1NTlDMjEuOTg4MyA4LjQ4MDQyIDIxLjkyMjYgOC43MzQwMyAyMS43Mjg0IDguOTEzOThMMTcuODc0MiAxMi40ODNDMTcuNTAyNCAxMi44Mjc0IDE3LjMzMjggMTMuMzIzMyAxNy40MjA5IDEzLjgxWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIC8vQVVUSFxyXG4gICAgICAgIGNhc2UgJ0F1dGhQcm9maWxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA2MCA1NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTUuNTE3IDQ0LjU1TDQ1Ljc0NCA0MC4zMTdDNDUuNTE0IDQwLjIwMiA0NS4yNTkgMzkuOTIxIDQ1LjA0IDM5LjU0Nkw1MS41NjUgMzkuNTQxQzUxLjY3OSAzOS41NTIgNTQuMzY5IDM5Ljc5OCA1Ni41MjYgMzguODcxQzU3LjM0MyAzOC41MTkgNTcuOTUxIDM3LjgyNCA1OC4xOTUgMzYuOTY0QzU4LjQ0MSAzNi4wOTYgNTguMjg1IDM1LjE3NyA1Ny43NjkgMzQuNDQxQzU1LjkwNCAzMS43ODcgNTEuNTUxIDI0Ljg1MiA1MS40MTUgMTcuODE4QzUxLjQxMiAxNy42OTcgNTEuMDE4IDUuNzM1IDM5LjIwNSA1LjYzOEMzNy40NjYgNS42NTIgMzUuODU4IDUuOTQ3IDM0LjM5NSA2LjQ5MUMzNC4wNzYgNS42NzggMzMuNjA2IDQuODMgMzIuOTA3IDQuMDMyQzMwLjg1NCAxLjY4OCAyNy41MjEgMC41IDIzIDAuNUMxOC40NzkgMC41IDE1LjE0NiAxLjY4OCAxMy4wOTIgNC4wM0MxMC43MjQgNi43MzEgMTAuOTQ0IDEwLjAwNiAxMSAxMC41NTVWMTUuODc0QzEwLjM2IDE2LjYwMyAxMCAxNy41MzYgMTAgMTguNDk5VjIyLjQ5OUMxMCAyMy43MTYgMTAuNTUzIDI0Ljg1MSAxMS40OTcgMjUuNjA4QzEyLjQxMyAyOS4yMzUgMTQuMzMgMzEuOTY4IDE1IDMyLjg0NVYzNi4xNTRDMTUgMzcuMTIyIDE0LjQ3MiAzOC4wMSAxMy42MjMgMzguNDc0TDQuNzAyIDQzLjM0QzEuODAxIDQ0LjkyNCAwIDQ3Ljk1OCAwIDUxLjI2MlY1NS41SDQ0SDQ2SDYwVjUxLjgwM0M2MCA0OC43MTEgNTguMjgyIDQ1LjkzMyA1NS41MTcgNDQuNTVaTTQ0IDUzLjVIMlY1MS4yNjJDMiA0OC42OTEgMy40MDIgNDYuMzI4IDUuNjU5IDQ1LjA5OEwxNC41OCA0MC4yMzJDMTYuMDczIDM5LjQxNyAxNyAzNy44NTQgMTcgMzYuMTU1VjMyLjEzNkwxNi43NjcgMzEuODU4QzE2Ljc0MyAzMS44MjkgMTQuMjkyIDI4Ljg2NCAxMy4zNTcgMjQuNzkzTDEzLjI2NiAyNC4zOTdMMTIuOTI1IDI0LjE3N0MxMi4zNDYgMjMuODAzIDEyIDIzLjE3NiAxMiAyMi41VjE4LjVDMTIgMTcuOTM5IDEyLjIzOCAxNy40MTYgMTIuNjcgMTcuMDI1TDEzIDE2LjcyOFYxMC41TDEyLjk5MSAxMC4zNjlDMTIuOTg4IDEwLjM0MiAxMi42NDggNy41NyAxNC41OTYgNS4zNDhDMTYuMjUzIDMuNDU4IDE5LjA4MSAyLjUgMjMgMi41QzI2LjkwNSAyLjUgMjkuNzI3IDMuNDUxIDMxLjM4NiA1LjMyOEMzMi4yMTEgNi4yNiAzMi42MjYgNy4zMDEgMzIuODMzIDguMTk1QzMyLjg0OSA4LjI2NSAzMi44NjQgOC4zMzQgMzIuODc4IDguNDAzQzMyLjg5MiA4LjQ3NCAzMi45MDcgOC41NDUgMzIuOTE4IDguNjEzQzMyLjkzMSA4LjY5MSAzMi45NDIgOC43NjUgMzIuOTUzIDguODM5QzMyLjk2MSA4Ljg5MiAzMi45NjkgOC45NDYgMzIuOTc1IDguOTk3QzMyLjk5IDkuMTIxIDMzLjAwMiA5LjI0MSAzMy4wMSA5LjM1MkMzMy4wMTEgOS4zNjEgMzMuMDExIDkuMzY5IDMzLjAxMSA5LjM3OEMzMy4wMTggOS40ODYgMzMuMDIzIDkuNTg4IDMzLjAyNiA5LjY4MUMzMy4wMjYgOS42OTkgMzMuMDI2IDkuNzE0IDMzLjAyNyA5LjczMkMzMy4wMjkgOS44MTUgMzMuMDI5IDkuODk0IDMzLjAyOCA5Ljk2M0MzMy4wMjggOS45NzMgMzMuMDI4IDkuOTgzIDMzLjAyOCA5Ljk5M0MzMy4wMjQgMTAuMjI4IDMzLjAwOCAxMC4zNjggMzMuMDA4IDEwLjM3MUwzMyAxNi43MjhMMzMuMzMgMTcuMDI2QzMzLjc2MiAxNy40MTYgMzQgMTcuOTM5IDM0IDE4LjVWMjIuNUMzNCAyMy4zNzMgMzMuNDI4IDI0LjEzNyAzMi41NzggMjQuMzk5TDMyLjA4IDI0LjU1MkwzMS45MiAyNS4wNDdDMzEuMjUxIDI3LjEyOCAzMC4yOTggMjkuMDUgMjkuMDg2IDMwLjc2QzI4Ljc4OSAzMS4xODEgMjguNSAzMS41NTQgMjguMjQ5IDMxLjgzOUwyOCAzMi4xMjNWMzYuMjQ4QzI4IDM2LjUwMSAyOC4wMjUgMzYuNzQ5IDI4LjA2NCAzNi45OTNDMjguMDcyIDM3LjA0NSAyOC4wODYgMzcuMDk1IDI4LjA5NiAzNy4xNDdDMjguMTM1IDM3LjM0OCAyOC4xODcgMzcuNTQ1IDI4LjI1MSAzNy43MzdDMjguMjY2IDM3Ljc4MiAyOC4yODIgMzcuODI1IDI4LjI5OSAzNy44N0MyOC4zNzcgMzguMDc5IDI4LjQ2OCAzOC4yODEgMjguNTc0IDM4LjQ3NUMyOC41ODYgMzguNDk3IDI4LjU5NyAzOC41MiAyOC42MDkgMzguNTQyQzI4Ljc1NCAzOC43OTggMjguOTIxIDM5LjA0MSAyOS4xMTMgMzkuMjY1TDI5LjM0MSAzOS41NDZIMjkuMzhDMjkuNzIzIDM5Ljg4NCAzMC4xMTcgNDAuMTc4IDMwLjU2NSA0MC40MDJMNDAuMTE4IDQ1LjE3OEM0Mi41MTMgNDYuMzc0IDQ0IDQ4Ljc4IDQ0IDUxLjQ1N1Y1My41Wk01OCA1My41SDQ2VjUxLjQ1N0M0NiA0OC4wMTggNDQuMDg5IDQ0LjkyNyA0MS4wMTQgNDMuMzg5TDM0LjE1NiAzOS45NTlDMzQuMzI1IDM5LjU3MyAzNC4zNDcgMzkuMTMxIDM0LjE5OSAzOC43MDVDMzMuOTU0IDM4IDMzLjMxNCAzNy41NDUgMzIuNTY5IDM3LjU0NUgzMC4zNTJDMzAuMzA2IDM3LjQ2NCAzMC4yNzYgMzcuMzc1IDMwLjIzOSAzNy4yODlDMzAuMTg5IDM3LjE3NCAzMC4xMyAzNy4wNjEgMzAuMDk3IDM2Ljk0QzMwLjAzNiAzNi43MTggMzAgMzYuNDg2IDMwIDM2LjI0OFYzMi44NjdDMzAuMjI5IDMyLjU4NyAzMC40NyAzMi4yNjggMzAuNzE5IDMxLjkxNkMzMS45NTggMzAuMTY2IDMyLjk1MSAyOC4yMTggMzMuNjczIDI2LjExN0MzNS4wODQgMjUuNDcgMzYgMjQuMDc1IDM2IDIyLjVWMTguNUMzNiAxNy41MzcgMzUuNjQgMTYuNjA0IDM1IDE1Ljg3NVYxMC41NTZDMzUuMDI2IDEwLjMwNiAzNS4wODIgOS40ODcgMzQuOTE2IDguNDE3QzM2LjIwNCA3LjkxMSAzNy42NDcgNy42NSAzOS4yMDYgNy42MzdDNDkuMDQ3IDcuNzE4IDQ5LjQwNiAxNy40NDggNDkuNDE2IDE3Ljg1OEM0OS41NjMgMjUuNDQxIDU0LjE2MiAzMi43ODUgNTYuMTMzIDM1LjU5QzU2LjMwMiAzNS44MyA1Ni4zNTMgMzYuMTMyIDU2LjI3MiAzNi40MTdDNTYuMjI2IDM2LjU4MSA1Ni4wOTQgMzYuODc5IDU1LjczNyAzNy4wMzJDNTQuMDU3IDM3Ljc1NSA1MS43NzggMzcuNTUgNTEuNjYxIDM3LjU0NUg0NC43NzhDNDQuMTM1IDM3LjU0NSA0My41NDkgMzcuODcyIDQzLjIxIDM4LjQxOUM0Mi44NzIgMzguOTY0IDQyLjg0IDM5LjYzIDQzLjEyNCA0MC4yMDJDNDMuNDM3IDQwLjgzMyA0My45OSA0MS42NzYgNDQuODk5IDQyLjEyOUw1NC42NDYgNDYuMzUxQzU2LjcxNSA0Ny4zOTYgNTggNDkuNDgyIDU4IDUxLjgwM1Y1My41WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdBdXRoUGhvbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDM0IDYwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOS41OTUgMEg0LjQwNUMxLjk3NyAwIDAgMS45NzcgMCA0LjQwNVY1NS41OTRDMCA1OC4wMjMgMS45NzcgNjAgNC40MDUgNjBIMjkuNTk0QzMyLjAyMyA2MCAzNCA1OC4wMjMgMzQgNTUuNTk1VjQuNDA1QzM0IDEuOTc3IDMyLjAyMyAwIDI5LjU5NSAwWk0yIDhIMzJWNDZIMlY4Wk00LjQwNSAySDI5LjU5NEMzMC45MjEgMiAzMiAzLjA3OSAzMiA0LjQwNVY2SDJWNC40MDVDMiAzLjA3OSAzLjA3OSAyIDQuNDA1IDJaTTI5LjU5NSA1OEg0LjQwNUMzLjA3OSA1OCAyIDU2LjkyMSAyIDU1LjU5NVY0OEgzMlY1NS41OTVDMzIgNTYuOTIxIDMwLjkyMSA1OCAyOS41OTUgNThaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcgNDlDMTQuNzk0IDQ5IDEzIDUwLjc5NCAxMyA1M0MxMyA1NS4yMDYgMTQuNzk0IDU3IDE3IDU3QzE5LjIwNiA1NyAyMSA1NS4yMDYgMjEgNTNDMjEgNTAuNzk0IDE5LjIwNiA0OSAxNyA0OVpNMTcgNTVDMTUuODk3IDU1IDE1IDU0LjEwMyAxNSA1M0MxNSA1MS44OTcgMTUuODk3IDUxIDE3IDUxQzE4LjEwMyA1MSAxOSA1MS44OTcgMTkgNTNDMTkgNTQuMTAzIDE4LjEwMyA1NSAxNyA1NVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMyA1SDE3QzE3LjU1MyA1IDE4IDQuNTUzIDE4IDRDMTggMy40NDcgMTcuNTUzIDMgMTcgM0gxM0MxMi40NDcgMyAxMiAzLjQ0NyAxMiA0QzEyIDQuNTUzIDEyLjQ0NyA1IDEzIDVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgNUgyMUMyMS41NTMgNSAyMiA0LjU1MyAyMiA0QzIyIDMuNDQ3IDIxLjU1MyAzIDIxIDNIMjBDMTkuNDQ3IDMgMTkgMy40NDcgMTkgNEMxOSA0LjU1MyAxOS40NDcgNSAyMCA1WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0F1dGhFbWFpbCc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNTAgNDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ1LjI1NjMgNDIuMzM1NEM0Mi42NDg3IDQzLjg1ODggMzkuODM3NyA0NS4wMDE0IDM2LjgyMjUgNDUuNzYzMUMzMy44MDcyIDQ2LjUyNDggMzAuNTE5NSA0Ni45MDU3IDI2Ljk2MDUgNDYuOTA1N0MyMy40MDA5IDQ2LjkwNTcgMjAuMDU3MiA0Ni40MTA4IDE2LjkyODUgNDUuNDIyQzEzLjc5OTggNDQuNDMyMyAxMS4wNjc0IDQyLjk3MzQgOC43MzI5IDQxLjA0NDVDNi4zOTc3NSAzOS4xMTU0IDQuNTU1NDEgMzYuNzM2NSAzLjIwNjgxIDMzLjkwNzFDMS44NTc1OCAzMS4wNzc3IDEuMTgzNDQgMjcuODEzNCAxLjE4MzQ0IDI0LjExMzRDMS4xODM0NCAyMC43NSAxLjg0MDkzIDE3LjY1ODUgMy4xNTU5IDE0LjgzOTFDNC40NzA1NSAxMi4wMTk3IDYuMjU2MDEgOS41OTYyNSA4LjUxMTk1IDcuNTY3OTZDMTAuNzY3NiA1LjUzOTk2IDEzLjM5MTkgMy45NjE5NyAxNi4zODQ1IDIuODM0MjVDMTkuMzc3MSAxLjcwNjgyIDIyLjU2MjEgMS4xNDI4MiAyNS45NDA0IDEuMTQyODJDMjcuOTEyOCAxLjE0MjgyIDI5LjgzNCAxLjMxNjI1IDMxLjcwNDMgMS42NjIyNUMzMy41NzUgMi4wMDg4MiAzNS4zNDMyIDIuNTIyODIgMzcuMDA5NSAzLjIwNTY4QzM4LjY3NTggMy44ODgyNSA0MC4yMTE0IDQuNzQ4ODIgNDEuNjE3NSA1Ljc4NzY4QzQzLjAyMyA2LjgyNjU0IDQ0LjIzMDIgOC4wNDgyNSA0NS4yMzk0IDkuNDUyODJDNDYuMjQ3NiAxMC44NTggNDcuMDM1NSAxMi40NDA1IDQ3LjYwMjUgMTQuMjAxNEM0OC4xNjkxIDE1Ljk2MjggNDguNDUyOSAxNy45MDE0IDQ4LjQ1MjkgMjAuMDE4MkM0OC40NTI5IDIyLjE5NDggNDguMTM0OSAyNC4xNTgzIDQ3LjUwMSAyNS45MDkxQzQ2Ljg2NTggMjcuNjYgNDYuMDA0NyAyOS4xNTQzIDQ0LjkxNjMgMzAuMzkwNUM0My44MjgyIDMxLjYyNzEgNDIuNTY0MiAzMi41ODIgNDEuMTI0NCAzMy4yNTQ1QzM5LjY4NDcgMzMuOTI3NCAzOC4xNjA0IDM0LjI2MzQgMzYuNTUwNiAzNC4yNjM0QzM1LjM3MTQgMzQuMjYzNCAzNC4zODU1IDM0LjEwMDMgMzMuNTkyMyAzMy43NzRDMzIuNzk4NCAzMy40NDc0IDMyLjE4MDggMzIuOTg3NCAzMS43Mzg5IDMyLjM5MzdDMzEuMjk2NyAzMS44MDAzIDMxLjAxODkgMzEuMDg4IDMwLjkwNTQgMzAuMjU2OEMzMC43OTE3IDI5LjQyNiAzMC44Mzc5IDI4LjMzMjggMzAuOTk2OSAyNy4zMjM0QzI5Ljg0MDYgMjkuNTk4OCAyOC4zODMzIDMxLjQzOTEgMjYuNjcxNyAzMi40OTc0QzI0Ljk1OTUgMzMuNTU2IDIzLjA4MzggMzQuMDg1MSAyMS4wNDM1IDM0LjA4NTFDMTkuODQxNiAzNC4wODUxIDE4LjgxMDIgMzMuOTAyNSAxNy45NDg3IDMzLjUzNjNDMTcuMDg2OSAzMy4xNzAzIDE2LjM2NzIgMzIuNjc1NCAxNS43ODkyIDMyLjA1MjNDMTUuMjExIDMxLjQyOTEgMTQuNzg2IDMwLjY5NzcgMTQuNTEzOSAyOS44NTYzQzE0LjI0MTcgMjkuMDE1NyAxNC4xMDU2IDI4LjExMDMgMTQuMTA1NiAyNy4xNDA4QzE0LjEwNTYgMjYuMDMyOCAxNC4yNjk3IDI0LjkxMDMgMTQuNTk4NyAyMy43NzIzQzE0LjkyNzIgMjIuNjM0OCAxNS40MDkgMjEuNTQ2NSAxNi4wNDQxIDIwLjUwNzdDMTYuNjc4NyAxOS40Njg4IDE3LjQ2MDYgMTguNDk0OCAxOC4zOTA2IDE3LjU4NDVDMTkuMzE5OSAxNi42NzQ1IDIwLjM3NCAxNS44ODgzIDIxLjU1MzIgMTUuMjI1MUMyMi43MzE4IDE0LjU2MjUgMjQuMDM1OCAxNC4wMzggMjUuNDY0MiAxMy42NTIzQzI2Ljg5MjMgMTMuMjY2NSAyOC40MzM5IDEzLjA3MzQgMzAuMDg5MiAxMy4wNzM0QzMxLjAxODkgMTMuMDczNCAzMS45NjUyIDEzLjE0NzcgMzIuOTI4OCAxMy4yOTZDMzMuODkyNCAxMy40NDQzIDM0LjcxNDMgMTMuNjY2OCAzNS4zOTQxIDEzLjk2MzdMMzAuOTk2OSAyNy4zMjM0XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXV0aFBhc3N3b3JkJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNDQgNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM4IDIwLjExM1YxNC41QzM4IDYuNTA1IDMwLjgyMiAwIDIyIDBDMTMuMTc4IDAgNiA2LjUwNSA2IDE0LjVDNiAxNS4wNTMgNi40NDcgMTUuNSA3IDE1LjVDNy41NTMgMTUuNSA4IDE1LjA1MyA4IDE0LjVDOCA3LjYwNyAxNC4yOCAyIDIyIDJDMjkuNzIgMiAzNiA3LjYwNyAzNiAxNC41VjIwSDcuMjI5QzMuMjQzIDIwIDAgMjMuMjQzIDAgMjcuMjI5VjQ2Ljc3MUMwIDUwLjc1NyAzLjI0MyA1NCA3LjIyOSA1NEgzNi43NzFDNDAuNzU3IDU0IDQ0IDUwLjc1NyA0NCA0Ni43NzFWMjcuMjI5QzQ0IDIzLjY2MyA0MS40MDEgMjAuNjk5IDM4IDIwLjExM1pNNDIgNDYuNzcxQzQyIDQ5LjY1NCAzOS42NTQgNTIgMzYuNzcxIDUySDcuMjI5QzQuMzQ2IDUyIDIgNDkuNjU0IDIgNDYuNzcxVjI3LjIyOUMyIDI0LjM0NiA0LjM0NiAyMiA3LjIyOSAyMkgzNi43NzFDMzkuNjU0IDIyIDQyIDI0LjM0NiA0MiAyNy4yMjlWNDYuNzcxWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDI4QzE5Ljc5NCAyOCAxOCAyOS43OTQgMTggMzJWMzhDMTggNDAuMjA2IDE5Ljc5NCA0MiAyMiA0MkMyNC4yMDYgNDIgMjYgNDAuMjA2IDI2IDM4VjMyQzI2IDI5Ljc5NCAyNC4yMDYgMjggMjIgMjhaTTI0IDM4QzI0IDM5LjEwMyAyMy4xMDMgNDAgMjIgNDBDMjAuODk3IDQwIDIwIDM5LjEwMyAyMCAzOFYzMkMyMCAzMC44OTcgMjAuODk3IDMwIDIyIDMwQzIzLjEwMyAzMCAyNCAzMC44OTcgMjQgMzJWMzhaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnT3BlbkV5ZSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDYwIDM1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MS4wNjIgOS41NjEwNEMzOS4xNzMgLTIuMzI3OTYgMTkuODMgLTIuMzI3OTYgNy45NDEgOS41NjEwNEwwIDE3LjUwMUw4LjEzOCAyNS42MzlDMTQuMDgyIDMxLjU4MyAyMS44OSAzNC41NTYgMjkuNjk5IDM0LjU1NkMzNy41MDggMzQuNTU2IDQ1LjMxNSAzMS41ODQgNTEuMjYgMjUuNjM5TDU5LjIwMSAxNy42OThMNTEuMDYyIDkuNTYxMDRaTTQ5Ljg0NSAyNC4yMjVDMzguNzM2IDM1LjMzMyAyMC42NjEgMzUuMzMzIDkuNTUyIDI0LjIyNUwyLjgyOCAxNy41MDFMOS4zNTUgMTAuOTc0QzIwLjQ2NCAtMC4xMzM5NjMgMzguNTM5IC0wLjEzMzk2MyA0OS42NDggMTAuOTc0TDU2LjM3MiAxNy42OThMNDkuODQ1IDI0LjIyNVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOC41NzIgOS41NzAwN0MyNC43MTIgOS41NzAwNyAyMS41NzIgMTIuNzEwMSAyMS41NzIgMTYuNTcwMUMyMS41NzIgMTcuMTIyMSAyMi4wMiAxNy41NzAxIDIyLjU3MiAxNy41NzAxQzIzLjEyNCAxNy41NzAxIDIzLjU3MiAxNy4xMjIxIDIzLjU3MiAxNi41NzAxQzIzLjU3MiAxMy44MTMxIDI1LjgxNSAxMS41NzAxIDI4LjU3MiAxMS41NzAxQzI5LjEyNCAxMS41NzAxIDI5LjU3MiAxMS4xMjIxIDI5LjU3MiAxMC41NzAxQzI5LjU3MiAxMC4wMTgxIDI5LjEyNSA5LjU3MDA3IDI4LjU3MiA5LjU3MDA3WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI5LjU3MiA0LjU3MDA3QzIyLjQwNCA0LjU3MDA3IDE2LjU3MiAxMC40MDIxIDE2LjU3MiAxNy41NzAxQzE2LjU3MiAyNC43MzgxIDIyLjQwNCAzMC41NzAxIDI5LjU3MiAzMC41NzAxQzM2Ljc0IDMwLjU3MDEgNDIuNTcyIDI0LjczODEgNDIuNTcyIDE3LjU3MDFDNDIuNTcyIDEwLjQwMjEgMzYuNzQxIDQuNTcwMDcgMjkuNTcyIDQuNTcwMDdaTTI5LjU3MiAyOC41NzAxQzIzLjUwNyAyOC41NzAxIDE4LjU3MiAyMy42MzUxIDE4LjU3MiAxNy41NzAxQzE4LjU3MiAxMS41MDUxIDIzLjUwNyA2LjU3MDA3IDI5LjU3MiA2LjU3MDA3QzM1LjYzNyA2LjU3MDA3IDQwLjU3MiAxMS41MDUxIDQwLjU3MiAxNy41NzAxQzQwLjU3MiAyMy42MzUxIDM1LjYzOCAyOC41NzAxIDI5LjU3MiAyOC41NzAxWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0Nsb3NlRXllJzogXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNjAgNDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExLjI4NSAzNi4zOUMxMS40NjkgMzYuNTM2IDExLjY4OSAzNi42MDggMTEuOTA4IDM2LjYwOEMxMi4yMDIgMzYuNjA4IDEyLjQ5MyAzNi40NzkgMTIuNjkxIDM2LjIzMUMxMy4wMzUgMzUuNzk5IDEyLjk2NCAzNS4xNyAxMi41MzIgMzQuODI2QzExLjczMSAzNC4xODggMTAuOTU1IDMzLjQ5NSAxMC4yMjcgMzIuNzY2TDIuODI5IDI1LjM2OEwxMC40NTggMTcuNzM5QzE3Ljc5MiAxMC40MDYgMjguNDYxIDcuOTAzMDQgMzguMjk3IDExLjIwNUMzOC44MiAxMS4zNzggMzkuMzg3IDExLjA5OCAzOS41NjQgMTAuNTc1QzM5LjczOSAxMC4wNTIgMzkuNDU4IDkuNDg0MDQgMzguOTM0IDkuMzA4MDRDMjguMzcyIDUuNzYzMDQgMTYuOTE4IDguNDUxMDQgOS4wNDQgMTYuMzI0TDAgMjUuMzY4TDguODEyIDM0LjE4QzkuNTkzIDM0Ljk2MiAxMC40MjYgMzUuNzA1IDExLjI4NSAzNi4zOVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MC4yMzcgMTYuMzI1MUM0OC44ODkgMTQuOTc3MSA0Ny40MTEgMTMuNzYxMSA0NS44NDMgMTIuNzA5MUM0NS4zODUgMTIuNDAyMSA0NC43NjIgMTIuNTI0MSA0NC40NTUgMTIuOTgyMUM0NC4xNDcgMTMuNDQwMSA0NC4yNyAxNC4wNjIxIDQ0LjcyOCAxNC4zNzAxQzQ2LjE4OCAxNS4zNDkxIDQ3LjU2NiAxNi40ODMxIDQ4LjgyMiAxNy43MzkxTDU2LjIyIDI1LjEzNzFMNDguNTkxIDMyLjc2NjFDNDEuMjA2IDQwLjE1MTEgMzAuMDc4IDQyLjY0ODEgMjAuMjM5IDM5LjEyMjFDMTkuNzE5IDM4LjkzNTEgMTkuMTQ2IDM5LjIwNjEgMTguOTYgMzkuNzI2MUMxOC43NzQgNDAuMjQ2MSAxOS4wNDQgNDAuODE4MSAxOS41NjQgNDEuMDA1MUMyMi43NDYgNDIuMTQ1MSAyNi4wNTQgNDIuNjk4MSAyOS4zNCA0Mi42OTgxQzM2Ljk2MSA0Mi42OTgxIDQ0LjQ2NCAzOS43MjExIDUwLjAwNSAzNC4xODAxTDU5LjA0OCAyNS4xMzcxTDUwLjIzNyAxNi4zMjUxWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwLjUzOSAzNi43NzQxQzI4LjM4NiAzNi43NzQxIDI2LjI4OCAzNi4xNzYxIDI0LjQ2OSAzNS4wNDQxQzI0LjAwMiAzNC43NTQxIDIzLjM4NSAzNC44OTYxIDIzLjA5MiAzNS4zNjUxQzIyLjggMzUuODM0MSAyMi45NDQgMzYuNDUwMSAyMy40MTMgMzYuNzQyMUMyNS41NDggMzguMDcyMSAyOC4wMTMgMzguNzc0MSAzMC41MzkgMzguNzc0MUMzNy45ODMgMzguNzc0MSA0NC4wMzkgMzIuNzE4MSA0NC4wMzkgMjUuMjc0MUM0NC4wMzkgMjIuNTg5MSA0My4yNTIgMTkuOTk1MSA0MS43NjQgMTcuNzcyMUM0MS40NTYgMTcuMzEzMSA0MC44MzQgMTcuMTkwMSA0MC4zNzcgMTcuNDk3MUMzOS45MTggMTcuODA1MSAzOS43OTUgMTguNDI2MSA0MC4xMDIgMTguODg0MUM0MS4zNjkgMjAuNzc3MSA0Mi4wMzkgMjIuOTg2MSA0Mi4wMzkgMjUuMjc0MUM0Mi4wMzkgMzEuNjE2MSAzNi44OCAzNi43NzQxIDMwLjUzOSAzNi43NzQxWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwLjUzOSAxMy43NzRDMzIuNjA0IDEzLjc3NCAzNC42MjggMTQuMzI3IDM2LjM5NCAxNS4zNzRDMzYuODY4IDE1LjY1NSAzNy40ODIgMTUuNDk5IDM3Ljc2NCAxNS4wMjNDMzguMDQ1IDE0LjU0OCAzNy44ODkgMTMuOTM1IDM3LjQxMyAxMy42NTNDMzUuMzM5IDEyLjQyNCAzMi45NjIgMTEuNzc0IDMwLjUzOCAxMS43NzRDMjMuMDk0IDExLjc3NCAxNy4wMzggMTcuODMgMTcuMDM4IDI1LjI3NEMxNy4wMzggMjcuMzU4IDE3LjUgMjkuMzU3IDE4LjQxMiAzMS4yMTVDMTguNTg2IDMxLjU2OSAxOC45NDEgMzEuNzc1IDE5LjMxMSAzMS43NzVDMTkuNDU4IDMxLjc3NSAxOS42MDkgMzEuNzQyIDE5Ljc1IDMxLjY3M0MyMC4yNDYgMzEuNDI5IDIwLjQ1MSAzMC44MyAyMC4yMDggMzAuMzM1QzE5LjQzMiAyOC43NTMgMTkuMDM4IDI3LjA1MSAxOS4wMzggMjUuMjc1QzE5LjAzOSAxOC45MzMgMjQuMTk4IDEzLjc3NCAzMC41MzkgMTMuNzc0WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU0LjYyMDkgMC41NjcwNTRDNTQuMjI5OSAwLjE3NjA1NCA1My41OTc5IDAuMTc2MDU0IDUzLjIwNjkgMC41NjcwNTRMNi43MDY5NSA0Ny4wNjcxQzYuMzE1OTUgNDcuNDU4MSA2LjMxNTk1IDQ4LjA5MDEgNi43MDY5NSA0OC40ODExQzYuOTAxOTUgNDguNjc2MSA3LjE1Nzk1IDQ4Ljc3NDEgNy40MTM5NSA0OC43NzQxQzcuNjY5OTUgNDguNzc0MSA3LjkyNTk1IDQ4LjY3NjEgOC4xMjA5NSA0OC40ODExTDU0LjYyMDkgMS45ODEwNUM1NS4wMTE5IDEuNTkxMDUgNTUuMDExOSAwLjk1ODA1NCA1NC42MjA5IDAuNTY3MDU0WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0F1dGhGb3JtJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA1NSA3NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAuODc1IDQuOTMyMTRIMzQuMzc1TDM2Ljg1IDEuOTcyMDlDMzcuMzA2NSAxLjQyODE4IDM3LjE4MjcgMC42NTQ4NyAzNi41NzUgMC4yNDY2M0MzNS45Njg2IC0wLjE2MTYxMSAzNS4xMDY1IC0wLjA1MTg0MjEgMzQuNjUxNCAwLjQ5MzMwMUwzMC45Mzc1IDQuOTMyMTRIMjQuMjI0OEwyMS44NTQyIDAuNjgwNzcxQzIxLjUxMzIgMC4wNzE0OTM0IDIwLjY4ODIgLTAuMTcyNzExIDIwLjAwOSAwLjEyOTQ2MUMxOS4zMjk4IDAuNDM0MSAxOS4wNTQ3IDEuMTc1MzUgMTkuMzk0NCAxLjc4NDYyTDIxLjE1MDIgNC45MzIxNEg0LjEyNUMxLjg1MDc1IDQuOTMyMTQgMCA2LjU5MjI0IDAgOC42MzIyMVY3MC4yOTk5QzAgNzIuMzM5OSAxLjg1MDc1IDc0IDQuMTI1IDc0SDUwLjg3NUM1My4xNDkzIDc0IDU1IDcyLjMzOTkgNTUgNzAuMjk5OVY4LjYzMjIxQzU1IDYuNTkyMjQgNTMuMTQ5MyA0LjkzMjE0IDUwLjg3NSA0LjkzMjE0Wk01Mi4yNSA3MC4yOTk5QzUyLjI1IDcwLjk4MDcgNTEuNjM0IDcxLjUzMzMgNTAuODc1IDcxLjUzMzNINC4xMjVDMy4zNjYgNzEuNTMzMyAyLjc1IDcwLjk4MDcgMi43NSA3MC4yOTk5VjguNjMyMjFDMi43NSA3Ljk1MTQgMy4zNjYgNy4zOTg4NSA0LjEyNSA3LjM5ODg1SDIyLjUyNTJMMjMuOTAwMiA5Ljg2NTU2QzIyLjc0NTMgMTAuNzcwOCAyMiAxMi4wODQ0IDIyIDEzLjU2NTZDMjIgMTYuMjg2NCAyNC40NjY3IDE4LjQ5OSAyNy41IDE4LjQ5OUMzMC41MzMzIDE4LjQ5OSAzMyAxNi4yODY0IDMzIDEzLjU2NTZDMzMgMTAuODQ0OCAzMC41MzMzIDguNjMyMjEgMjcuNSA4LjYzMjIxQzI3LjEwNTQgOC42MzIyMSAyNi43MjE4IDguNjcyOTEgMjYuMzUwNSA4Ljc0NDQ0TDI1LjU5OTggNy4zOTg4NUg1MC44NzVDNTEuNjM0IDcuMzk4ODUgNTIuMjUgNy45NTE0IDUyLjI1IDguNjMyMjFWNzAuMjk5OVpNMjUuMjA2NSAxMi4yMTAyTDI2LjI2OTQgMTQuMTE2OUMyNi41MTE0IDE0LjU0OTggMjYuOTk2NyAxNC43OTkgMjcuNTAxNCAxNC43OTlDMjcuNzA3NiAxNC43OTkgMjcuOTE4IDE0Ljc1NyAyOC4xMTQ2IDE0LjY2OTVDMjguNzkzOSAxNC4zNjQ4IDI5LjA2ODkgMTMuNjIzNiAyOC43MjkyIDEzLjAxNDNMMjcuNjcwNSAxMS4xMTQ5QzI5LjEwNiAxMS4xOTUxIDMwLjI1IDEyLjI1ODMgMzAuMjUgMTMuNTY1NkMzMC4yNSAxNC45MjYgMjkuMDE2NiAxNi4wMzIzIDI3LjUgMTYuMDMyM0MyNS45ODM0IDE2LjAzMjMgMjQuNzUgMTQuOTI2IDI0Ljc1IDEzLjU2NTZDMjQuNzUgMTMuMDY0OSAyNC45MTkxIDEyLjU5OTkgMjUuMjA2NSAxMi4yMTAyWlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjI1IDUwLjU2NjNIMTMuNzVDMTIuOTg5NiA1MC41NjYzIDEyLjM3NSA1MS4xMTc2IDEyLjM3NSA1MS43OTk2QzEyLjM3NSA1Mi40ODE3IDEyLjk4OTYgNTMuMDMzIDEzLjc1IDUzLjAzM0g0MS4yNUM0Mi4wMTA0IDUzLjAzMyA0Mi42MjUgNTIuNDgxNyA0Mi42MjUgNTEuNzk5NkM0Mi42MjUgNTEuMTE3NiA0Mi4wMTA0IDUwLjU2NjMgNDEuMjUgNTAuNTY2M1pcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MS4yNSA1Ni43MzMySDEzLjc1QzEyLjk4OTYgNTYuNzMzMiAxMi4zNzUgNTcuMjg0NSAxMi4zNzUgNTcuOTY2NUMxMi4zNzUgNTguNjQ4NiAxMi45ODk2IDU5LjE5OTkgMTMuNzUgNTkuMTk5OUg0MS4yNUM0Mi4wMTA0IDU5LjE5OTkgNDIuNjI1IDU4LjY0ODYgNDIuNjI1IDU3Ljk2NjVDNDIuNjI1IDU3LjI4NDUgNDIuMDEwNCA1Ni43MzMyIDQxLjI1IDU2LjczMzJaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDEuMjUgNjIuODk5OUgxMy43NUMxMi45ODk2IDYyLjg5OTkgMTIuMzc1IDYzLjQ1MTIgMTIuMzc1IDY0LjEzMzNDMTIuMzc1IDY0LjgxNTMgMTIuOTg5NiA2NS4zNjY2IDEzLjc1IDY1LjM2NjZINDEuMjVDNDIuMDEwNCA2NS4zNjY2IDQyLjYyNSA2NC44MTUzIDQyLjYyNSA2NC4xMzMzQzQyLjYyNSA2My40NTEyIDQyLjAxMDQgNjIuODk5OSA0MS4yNSA2Mi44OTk5WlwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM1Ljc1IDQ1LjYzMjlINDEuMjVWMjAuOTY1OEgxMy43NVY0NS42MzI5SDE5LjI1SDM1Ljc1Wk0yMiA0My4xNjYyQzIyIDQwLjQ0NTQgMjQuNDY2OCAzOC4yMzI4IDI3LjUgMzguMjMyOEMzMC41MzMzIDM4LjIzMjggMzMgNDAuNDQ1NCAzMyA0My4xNjYySDIyWk0yMy4zNzUgMzIuMDY2QzIzLjM3NSAzMC4wMjYgMjUuMjI1NyAyOC4zNjU5IDI3LjUgMjguMzY1OUMyOS43NzQzIDI4LjM2NTkgMzEuNjI1IDMwLjAyNiAzMS42MjUgMzIuMDY2QzMxLjYyNSAzNC4xMDYgMjkuNzc0MyAzNS43NjYxIDI3LjUgMzUuNzY2MUMyNS4yMjU3IDM1Ljc2NjEgMjMuMzc1IDM0LjEwNiAyMy4zNzUgMzIuMDY2Wk0xNi41IDQzLjE2NjJWMjMuNDMyNUgzOC41VjQzLjE2NjJIMzUuNzVDMzUuNzUgNDAuNDkyMyAzNC4xNTY0IDM4LjE1MjYgMzEuNzgwNCAzNi44NTI3QzMzLjM0OTIgMzUuNzIwNCAzNC4zNzUgMzQuMDA3MyAzNC4zNzUgMzIuMDY2QzM0LjM3NSAyOC42NjU3IDMxLjI5MDkgMjUuODk5MiAyNy41IDI1Ljg5OTJDMjMuNzA5MSAyNS44OTkyIDIwLjYyNSAyOC42NjU3IDIwLjYyNSAzMi4wNjZDMjAuNjI1IDM0LjAwNzMgMjEuNjUwNyAzNS43MjE3IDIzLjIxOTYgMzYuODUyN0MyMC44NDM2IDM4LjE1MjYgMTkuMjUgNDAuNDkyMyAxOS4yNSA0My4xNjYySDE2LjVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXV0aENoZWNrVHJ1ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHsuLi5zdHlsZXN9IHZpZXdCb3g9XCIwIDAgNTYgNTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ5LjM1NTkgMTcuOTMyMkM0OC44MzExIDE3LjkzMjIgNDguNDA2OCAxOC4zNTY0IDQ4LjQwNjggMTguODgxM1Y0OS4yNTQySDEuODk4MzFWMi43NDU3Mkg0OC40MDY4VjMuNjk0ODdDNDguNDA2OCA0LjIxOTc1IDQ4LjgzMTEgNC42NDQwMiA0OS4zNTU5IDQuNjQ0MDJDNDkuODgwOCA0LjY0NDAyIDUwLjMwNTEgNC4yMTk3NSA1MC4zMDUxIDMuNjk0ODdWMC44NDc0MTJIMFY1MS4xNTI1SDUwLjMwNTFWMTguODgxM0M1MC4zMDUxIDE4LjM1NjQgNDkuODgwOCAxNy45MzIyIDQ5LjM1NTkgMTcuOTMyMlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NS43MjE5IDQuOTIyMTRDNTUuMzUwOCA0LjU1MTAyIDU0Ljc1MDkgNC41NTEwMiA1NC4zNzk4IDQuOTIyMTRMMjUuNjI3MSAzMy42NzQ4TDEzLjIyMTcgMjEuMjY5NEMxMi44NTA2IDIwLjg5ODMgMTIuMjUwNyAyMC44OTgzIDExLjg3OTYgMjEuMjY5NEMxMS41MDg1IDIxLjY0MDUgMTEuNTA4NSAyMi4yNDA0IDExLjg3OTYgMjIuNjExNUwyNC45NTYxIDM1LjY4OEMyNS4xNDEyIDM1Ljg3MzEgMjUuMzg0MSAzNS45NjYxIDI1LjYyNzEgMzUuOTY2MUMyNS44NzAxIDM1Ljk2NjEgMjYuMTEzMSAzNS44NzMxIDI2LjI5ODIgMzUuNjg4TDU1LjcyMTkgNi4yNjQyNEM1Ni4wOTMgNS44OTMxMiA1Ni4wOTMgNS4yOTMyNiA1NS43MjE5IDQuOTIyMTRaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXV0aENoZWNrRmFsc2UnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDUxIDUyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ5LjM1NTkgMTcuOTMyMkM0OC44MzExIDE3LjkzMjIgNDguNDA2OCAxOC4zNTY0IDQ4LjQwNjggMTguODgxM1Y0OS4yNTQySDEuODk4MzFWMi43NDU3Mkg0OC40MDY4VjMuNjk0ODdDNDguNDA2OCA0LjIxOTc1IDQ4LjgzMTEgNC42NDQwMiA0OS4zNTU5IDQuNjQ0MDJDNDkuODgwOCA0LjY0NDAyIDUwLjMwNTEgNC4yMTk3NSA1MC4zMDUxIDMuNjk0ODdWMC44NDc0MTJIMFY1MS4xNTI1SDUwLjMwNTFWMTguODgxM0M1MC4zMDUxIDE4LjM1NjQgNDkuODgwOCAxNy45MzIyIDQ5LjM1NTkgMTcuOTMyMlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjQ5LjRcIiB5MT1cIjRcIiB4Mj1cIjQ5LjRcIiB5Mj1cIjE5XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy9WSURFTyBDT05UUk9MU1xyXG4gICAgICAgIGNhc2UgJ1BsYXknOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAxMzEgMTYyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjAuNjE5IDY2LjM3NzhMMTIwLjYxOSA2Ni4zNzc4QzEyNi43MSA3MC4yODE1IDEyOS45NjMgNzUuNDc5NyAxMjkuOTYyIDgwLjk5MjdDMTI5Ljk2MiA4Ni41MDgyIDEyNi42NzEgOTEuNzA4MyAxMjAuNTg1IDk1LjYxNDVMMjQuNDQ2IDE1Ny4yMTZMMjQuNDQ1NiAxNTcuMjE2QzIwLjA0ODQgMTYwLjAzOSAxNS43NDE4IDE2MS41IDEyLjE0NTggMTYxLjVDOC42OTgwOSAxNjEuNSA1Ljk0NDUyIDE2MC4yMSA0LjA0MjE5IDE1Ny44NjJDMi4xMjk1OCAxNTUuNTAxIDEuMDM3OTkgMTUyLjAyIDEuMDM3OTkgMTQ3LjU4MlYxNC40MzkzQzEuMDM3OTkgOS45OTU0NyAyLjEzMDk4IDYuNTA5NTEgNC4wNDcwNyA0LjE0NDczQzUuOTUyODcgMS43OTI2NSA4LjcxMjAzIDAuNSAxMi4xNjgyIDAuNUMxNS43NjAzIDAuNSAyMC4xMzg2IDEuOTYxMDkgMjQuNTI0MiA0Ljc3NDUyTDI0LjUyNDMgNC43NzQ2MUwxMjAuNjE5IDY2LjM3NzhaXCIgZmlsbD1cIiM4QzA4MjFcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1BhdXNlJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA5NiAxNjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNTYuNVwiIHk9XCIwLjVcIiB3aWR0aD1cIjM5XCIgaGVpZ2h0PVwiMTYxXCIgcng9XCIxMS41XCIgZmlsbD1cIiM4QzA4MjFcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMC41XCIgeT1cIjAuNVwiIHdpZHRoPVwiMzlcIiBoZWlnaHQ9XCIxNjFcIiByeD1cIjExLjVcIiBmaWxsPVwiIzhDMDgyMVwiIHN0cm9rZT1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1ZvbHVtZSc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDUzIDUzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yOC40MDQgMy40MTI4MUMyNy40MjggMi44NjA4MSAyNi4yNzMgMi44Nzg4MSAyNS4zMTQgMy40NTY4MUMyNS4yNjggMy40ODM4MSAyNS4yMjQgMy41MTU4MSAyNS4xODQgMy41NDk4MUwxMS42MzQgMTUuMDEyOEgxQzAuNDQ3IDE1LjAxMjggMCAxNS40NTk4IDAgMTYuMDEyOFYzNS4wMTI4QzAgMzUuMjc4OCAwLjEwNSAzNS41MzI4IDAuMjkzIDM1LjcxOThDMC40ODEgMzUuOTA2OCAwLjczNCAzNi4wMTI4IDEgMzYuMDEyOEwxMS42MSAzNi4wMDc4TDI1LjE1MyA0OC40NDc4QzI1LjIwMyA0OC40OTM4IDI1LjI1NyA0OC41MzM4IDI1LjMxNCA0OC41Njc4QzI1LjgwNiA0OC44NjQ4IDI2LjM1MSA0OS4wMTM4IDI2Ljg5NiA0OS4wMTM4QzI3LjQxMyA0OS4wMTI4IDI3LjkyOSA0OC44Nzk4IDI4LjQwNCA0OC42MTE4QzI5LjQwMyA0OC4wNDc4IDMwIDQ3LjAxNzggMzAgNDUuODU2OFY2LjE2ODgxQzMwIDUuMDA3ODEgMjkuNDAzIDMuOTc3ODEgMjguNDA0IDMuNDEyODFaTTI4IDQ1Ljg1NjhDMjggNDYuMjg3OCAyNy43ODMgNDYuNjY2OCAyNy40MjEgNDYuODcxOEMyNy4yNjYgNDYuOTU4OCAyNi44NzMgNDcuMTI2OCAyNi40MjEgNDYuODk3OEwxMyAzNC41Njg4VjMwLjAxMjhDMTMgMjkuNDU5OCAxMi41NTMgMjkuMDEyOCAxMiAyOS4wMTI4QzExLjQ0NyAyOS4wMTI4IDExIDI5LjQ1OTggMTEgMzAuMDEyOFYzNC4wMDg4TDIgMzQuMDEyOFYxNy4wMTI4SDExVjIxLjAxMjhDMTEgMjEuNTY1OCAxMS40NDcgMjIuMDEyOCAxMiAyMi4wMTI4QzEyLjU1MyAyMi4wMTI4IDEzIDIxLjU2NTggMTMgMjEuMDEyOFYxNi40NzY4TDI2LjQwNSA1LjEzNjgxQzI2Ljg2NiA0Ljg5NDgxIDI3LjI2NSA1LjA2NjgxIDI3LjQyMSA1LjE1NDgxQzI3Ljc4MyA1LjM1OTgxIDI4IDUuNzM4ODEgMjggNi4xNjg4MVY0NS44NTY4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM4Ljc5NyA3LjA2NTc4QzM4LjI3NCA2Ljg4ODc4IDM3LjcwNiA3LjE2ODc4IDM3LjUyOCA3LjY5MTc4QzM3LjM1MSA4LjIxMzc4IDM3LjYzMSA4Ljc4Mjc4IDM4LjE1NCA4Ljk2MDc4QzQ1LjI1NSAxMS4zNzE4IDUwLjAyNiAxOC4wMjM4IDUwLjAyNiAyNS41MTM4QzUwLjAyNiAzMi45OTY4IDQ1LjI2NCAzOS42NDk4IDM4LjE3NyA0Mi4wNjc4QzM3LjY1NSA0Mi4yNDU4IDM3LjM3NSA0Mi44MTM4IDM3LjU1NCA0My4zMzc4QzM3LjY5NiA0My43NTI4IDM4LjA4NCA0NC4wMTQ4IDM4LjUgNDQuMDE0OEMzOC42MDcgNDQuMDE0OCAzOC43MTYgNDMuOTk3OCAzOC44MjMgNDMuOTYwOEM0Ni43MTkgNDEuMjY3OCA1Mi4wMjUgMzMuODU0OCA1Mi4wMjUgMjUuNTE0OEM1Mi4wMjYgMTcuMTY1OCA0Ni43MSA5Ljc1Mjc4IDM4Ljc5NyA3LjA2NTc4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQzLjAyNiAyNS41MTNDNDMuMDI2IDE5LjU0MSAzOS4wMTcgMTQuMjExIDMzLjI3NyAxMi41NTFDMzIuNzQ0IDEyLjQgMzIuMTkzIDEyLjcwMyAzMi4wMzkgMTMuMjM1QzMxLjg4NiAxMy43NjUgMzIuMTkxIDE0LjMyIDMyLjcyMyAxNC40NzNDMzcuNjEyIDE1Ljg4NiA0MS4wMjcgMjAuNDI2IDQxLjAyNyAyNS41MTNDNDEuMDI3IDMwLjYgMzcuNjEyIDM1LjE0IDMyLjcyMyAzNi41NTNDMzIuMTkyIDM2LjcwNiAzMS44ODYgMzcuMjYxIDMyLjAzOSAzNy43OTFDMzIuMTY2IDM4LjIyOSAzMi41NjUgMzguNTE0IDMzIDM4LjUxNEMzMy4wOTIgMzguNTE0IDMzLjE4NSAzOC41MDEgMzMuMjc3IDM4LjQ3NUMzOS4wMTggMzYuODE1IDQzLjAyNiAzMS40ODUgNDMuMDI2IDI1LjUxM1pcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdGdWxsU2NyZWVuJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA0NiA0NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzMuNSAySDQ0VjEyLjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ0IDMzLjVWNDRIMzMuNVwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMi41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuNSA0NEgyVjMzLjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIgMTIuNVYySDEyLjVcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1JpbTMnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCA1MSAzOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuMDkyIDM5SDAuMTZWMzYuMTkyTDQuNjk2IDM1LjE2NlY0LjMzMkwwLjE2IDMuMjUyVjAuNDQzOTk4SDE0LjA5MlYzLjI1Mkw5LjU1NiA0LjMzMlYzNS4xNjZMMTQuMDkyIDM2LjE5MlYzOVpNMzIuMzkwOCAzOUgxOC40NTg4VjM2LjE5MkwyMi45OTQ4IDM1LjE2NlY0LjMzMkwxOC40NTg4IDMuMjUyVjAuNDQzOTk4SDMyLjM5MDhWMy4yNTJMMjcuODU0OCA0LjMzMlYzNS4xNjZMMzIuMzkwOCAzNi4xOTJWMzlaTTUwLjY4OTcgMzlIMzYuNzU3N1YzNi4xOTJMNDEuMjkzNyAzNS4xNjZWNC4zMzJMMzYuNzU3NyAzLjI1MlYwLjQ0Mzk5OEg1MC42ODk3VjMuMjUyTDQ2LjE1MzcgNC4zMzJWMzUuMTY2TDUwLjY4OTcgMzYuMTkyVjM5WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1JpbTInOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAzMyAzOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuMDkyIDM5SDAuMTZWMzYuMTkyTDQuNjk2IDM1LjE2NlY0LjMzMkwwLjE2IDMuMjUyVjAuNDQzOTk4SDE0LjA5MlYzLjI1Mkw5LjU1NiA0LjMzMlYzNS4xNjZMMTQuMDkyIDM2LjE5MlYzOVpNMzIuMzkwOCAzOUgxOC40NTg4VjM2LjE5MkwyMi45OTQ4IDM1LjE2NlY0LjMzMkwxOC40NTg4IDMuMjUyVjAuNDQzOTk4SDMyLjM5MDhWMy4yNTJMMjcuODU0OCA0LjMzMlYzNS4xNjZMMzIuMzkwOCAzNi4xOTJWMzlaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ1JpbTEnOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAxNSAzOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuMDkyIDM5SDAuMTZWMzYuMTkyTDQuNjk2IDM1LjE2NlY0LjMzMkwwLjE2IDMuMjUyVjAuNDQzOTk4SDE0LjA5MlYzLjI1Mkw5LjU1NiA0LjMzMlYzNS4xNjZMMTQuMDkyIDM2LjE5MlYzOVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHN2ZyB7Li4uc3R5bGVzfSB2aWV3Qm94PVwiMCAwIDEyOTkgMzNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyOTcuNDIgMzEuNjY2N0MxMjk3LjQyIDI1LjcwODMgMTI2NS4wMiAxNi43NzA4IDExMzUuNDQgMTYuNzcwOEMxMDA1Ljg1IDE2Ljc3MDggOTQxLjA2MiAxNi43NzA4IDg0My44NzUgMTYuNzcwOEM3NDYuNjg3IDE2Ljc3MDggNjU3IDEuNSA2NTcgMS41QzY1NyAxLjUgNTgyLjY4OCAxNi43NzA4IDQ4NS41IDE2Ljc3MDhDMzc0LjUgMTYuNzcwOCAyOTMuMTQ1IDE2Ljc3MDggMTYzLjU2MiAxNi43NzA4QzMzLjk3ODcgMTYuNzcwOCAxLjU4Mjc2IDI1LjcwODMgMS41ODI3NiAzMS42NjY3XCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dVcFNtYWxsJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAyNTIgMzNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1MC4xNjcgMzEuNjY2N0MyNTAuMTY3IDI1LjcwODMgMjQzLjk1OCAxNi43NzA4IDIxOS4xMjUgMTYuNzcwOEMxOTQuMjkyIDE2Ljc3MDggMTgxLjg3NSAxNi43NzA4IDE2My4yNSAxNi43NzA4QzE0NC42MjUgMTYuNzcwOCAxMzIuMjA4IDEuODc1IDEzMi4yMDggMS44NzVDMTMyLjIwOCAxLjg3NSAxMTkuNzkyIDE2Ljc3MDggMTAxLjE2NyAxNi43NzA4QzgyLjU0MTcgMTYuNzcwOCA1Ny43MDg0IDE2Ljc3MDggMzIuODc1IDE2Ljc3MDhDOC4wNDE3MSAxNi43NzA4IDEuODMzMzcgMjUuNzA4MyAxLjgzMzM3IDMxLjY2NjdcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ0luZm8nOiBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzdmcgey4uLnN0eWxlc30gdmlld0JveD1cIjAgMCAxOSA0NVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4wNDczNiA0NC4zMTc0TDcuMDMwMjcgNDAuNDEzNkw1Ljk1MTE3IDE4LjUxNDJMMC4wNzk1ODk4IDE0LjY3MzhMMTMuNzI3MSAxMi4zNTY5TDExLjI4MzIgMzcuODExTDE4LjEwNjkgNDIuMDY0TDIuMDQ3MzYgNDQuMzE3NFpNMTQuMDc2MiA0LjY3NjI3QzE0LjA3NjIgNS4zMTEwNCAxMy45NDkyIDUuOTE0MDYgMTMuNjk1MyA2LjQ4NTM1QzEzLjQ0MTQgNy4wMzU0OCAxMy4wOTIzIDcuNTMyNzEgMTIuNjQ3OSA3Ljk3NzA1QzEyLjIwMzYgOC40MDAyMyAxMS42OTU4IDguNzM4NzcgMTEuMTI0NSA4Ljk5MjY4QzEwLjU1MzIgOS4yMjU0MiA5Ljk1MDIgOS4zNDE4IDkuMzE1NDMgOS4zNDE4QzguNjM4MzUgOS4zNDE4IDguMDAzNTggOS4yMjU0MiA3LjQxMTEzIDguOTkyNjhDNi44Mzk4NCA4LjczODc3IDYuMzQyNjEgOC40MDAyMyA1LjkxOTQzIDcuOTc3MDVDNS40OTYyNiA3LjUzMjcxIDUuMTU3NzEgNy4wMzU0OCA0LjkwMzgxIDYuNDg1MzVDNC42NDk5IDUuOTE0MDYgNC41MjI5NSA1LjMxMTA0IDQuNTIyOTUgNC42NzYyN0M0LjUyMjk1IDQuMDIwMzUgNC42NDk5IDMuNDE3MzIgNC45MDM4MSAyLjg2NzE5QzUuMTU3NzEgMi4yOTU5IDUuNDk2MjYgMS43OTg2NyA1LjkxOTQzIDEuMzc1NDlDNi4zNDI2MSAwLjk1MjMxMSA2LjgzOTg0IDAuNjI0MzQ5IDcuNDExMTMgMC4zOTE2MDJDOC4wMDM1OCAwLjEzNzY5NSA4LjYzODM1IDAuMDEwNzQyMiA5LjMxNTQzIDAuMDEwNzQyMkM5Ljk1MDIgMC4wMTA3NDIyIDEwLjU1MzIgMC4xMzc2OTUgMTEuMTI0NSAwLjM5MTYwMkMxMS42OTU4IDAuNjI0MzQ5IDEyLjIwMzYgMC45NTIzMTEgMTIuNjQ3OSAxLjM3NTQ5QzEzLjA5MjMgMS43OTg2NyAxMy40NDE0IDIuMjk1OSAxMy42OTUzIDIuODY3MTlDMTMuOTQ5MiAzLjQxNzMyIDE0LjA3NjIgNC4wMjAzNSAxNC4wNzYyIDQuNjc2MjdaXCIgZmlsbD1cIiMyOTE3NTBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+SW1nPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzdmdTcHJpdGUiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvZmZpY2VXcmFwcGVyXCI6IFwib2ZmaWNlLWxheW91dHMtc3R5bGVzX29mZmljZVdyYXBwZXJfXzI2alNyXCIsXG5cdFwib2ZmaWNlTG9nb1wiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VMb2dvX18zMWZMSFwiLFxuXHRcIm9mZmljZVNvY2lhbFwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VTb2NpYWxfX3FTNzZVXCIsXG5cdFwib2ZmaWNlU29jaWFsSXRlbVwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VTb2NpYWxJdGVtX18xYW02eFwiLFxuXHRcIm9mZmljZVdyYXBwZXJIZWFkZXJcIjogXCJvZmZpY2UtbGF5b3V0cy1zdHlsZXNfb2ZmaWNlV3JhcHBlckhlYWRlcl9fN0l2UnRcIixcblx0XCJvZmZpY2VXcmFwcGVyQm9keVwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VXcmFwcGVyQm9keV9fMTRsWWJcIixcblx0XCJvZmZpY2VXcmFwcGVyTWVudVwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VXcmFwcGVyTWVudV9fN2xDcVpcIixcblx0XCJvZmZpY2VXcmFwcGVyQ29udGVudFwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19vZmZpY2VXcmFwcGVyQ29udGVudF9fMWdmOGtcIixcblx0XCJvZmZpY2VXcmFwcGVyTWVudUl0ZW1cIjogXCJvZmZpY2UtbGF5b3V0cy1zdHlsZXNfb2ZmaWNlV3JhcHBlck1lbnVJdGVtX19JdmYxdVwiLFxuXHRcImNvbnRhaW5lck9mZmljZVwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19jb250YWluZXJPZmZpY2VfXzFzTll6XCIsXG5cdFwibWVudU1vYlwiOiBcIm9mZmljZS1sYXlvdXRzLXN0eWxlc19tZW51TW9iX18zRl9uNlwiLFxuXHRcIm1lbnVNb2JTdmdcIjogXCJvZmZpY2UtbGF5b3V0cy1zdHlsZXNfbWVudU1vYlN2Z19fMmg2X3RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlZmZlcmFsSGVhZFwiOiBcIm1haW4tdmlldy1zdHlsZXNfcmVmZmVyYWxIZWFkX18yRTNVMFwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1cIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1fXzNwTFVrXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbVRleHRcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1UZXh0X18yNzR6UFwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1OdW1iZXJfXzNEQzZtXCIsXG5cdFwiaGVhZEl0ZW1MaW5lXCI6IFwibWFpbi12aWV3LXN0eWxlc19oZWFkSXRlbUxpbmVfX0w0VFRVXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbVRhcmlmXCI6IFwibWFpbi12aWV3LXN0eWxlc19yZWZmZXJhbEhlYWRJdGVtVGFyaWZfXzFIaldpXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbU51bWJlckRhdGVcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1OdW1iZXJEYXRlX192QWlMLVwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJUYXJpZlwiOiBcIm1haW4tdmlldy1zdHlsZXNfcmVmZmVyYWxIZWFkSXRlbU51bWJlclRhcmlmX18zdjNfSFwiLFxuXHRcInJlZmZlcmFsSGVhZE1vYlwiOiBcIm1haW4tdmlldy1zdHlsZXNfcmVmZmVyYWxIZWFkTW9iX18zbWprZlwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1Nb2JcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1Nb2JfXzJkMFJtXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2JcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1XcmFwcGVyTW9iX18xdXJidFwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1TdmdNb2JcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1TdmdNb2JfXzJCanBfXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbVRleHRNb2JcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iX18xbUVsNVwiLFxuXHRcInJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGxcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGxfX3Qta2FmXCIsXG5cdFwicmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYlwiOiBcIm1haW4tdmlldy1zdHlsZXNfcmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYl9fMlZZRHJcIixcblx0XCJyZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9iU21hbGxcIjogXCJtYWluLXZpZXctc3R5bGVzX3JlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2JTbWFsbF9fMWIzM19cIixcblx0XCJtYWluQm9keVwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpbkJvZHlfX3lRN1haXCIsXG5cdFwibWFpbkJvZHlJbWFnZVwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpbkJvZHlJbWFnZV9fM3pfX3dcIixcblx0XCJtYWluQm9keUNvbnRlbnRcIjogXCJtYWluLXZpZXctc3R5bGVzX21haW5Cb2R5Q29udGVudF9fM0tJazVcIixcblx0XCJtYWluQWN0aW9uXCI6IFwibWFpbi12aWV3LXN0eWxlc19tYWluQWN0aW9uX18xZENDRFwiLFxuXHRcInF1b3RlXCI6IFwibWFpbi12aWV3LXN0eWxlc19xdW90ZV9fMkpQdVhcIixcblx0XCJidG5RdW90ZVwiOiBcIm1haW4tdmlldy1zdHlsZXNfYnRuUXVvdGVfXzIyc05mXCIsXG5cdFwiYnRuUXVvdGVUZXh0XCI6IFwibWFpbi12aWV3LXN0eWxlc19idG5RdW90ZVRleHRfXzJQbGNGXCIsXG5cdFwid2h5XCI6IFwibWFpbi12aWV3LXN0eWxlc193aHlfX1hka2s4XCIsXG5cdFwid2h5QWN0aXZlXCI6IFwibWFpbi12aWV3LXN0eWxlc193aHlBY3RpdmVfX0N2enZlXCIsXG5cdFwidGFyaWZXcmFwcGVyXCI6IFwibWFpbi12aWV3LXN0eWxlc190YXJpZldyYXBwZXJfXzJhT0pqXCIsXG5cdFwidGFyaWZXcmFwcGVySW5uZXJcIjogXCJtYWluLXZpZXctc3R5bGVzX3RhcmlmV3JhcHBlcklubmVyX18zU2hrZ1wiLFxuXHRcInRhcmlmV3JhcHBlcklubmVyUmlnaHRcIjogXCJtYWluLXZpZXctc3R5bGVzX3RhcmlmV3JhcHBlcklubmVyUmlnaHRfXzI5YWRnXCIsXG5cdFwidGFyaWZXcmFwcGVyQm9keVwiOiBcIm1haW4tdmlldy1zdHlsZXNfdGFyaWZXcmFwcGVyQm9keV9fMnhVeVpcIixcblx0XCJ0YXJpZldyYXBwZXJCb2R5UHJlbWl1bVwiOiBcIm1haW4tdmlldy1zdHlsZXNfdGFyaWZXcmFwcGVyQm9keVByZW1pdW1fXzNWdVNtXCIsXG5cdFwibWFpblRhcmlmQ2FyZFwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpblRhcmlmQ2FyZF9fMkwzNnZcIixcblx0XCJtYWluVGFyaWZDYXJkU2FsZVwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpblRhcmlmQ2FyZFNhbGVfXzF2bmV5XCIsXG5cdFwibWFpblRhcmlmQ2FyZE1vdW50aFwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpblRhcmlmQ2FyZE1vdW50aF9fM2JoUHNcIixcblx0XCJtYWluVGFyaWZDYXJkUHJpY2VcIjogXCJtYWluLXZpZXctc3R5bGVzX21haW5UYXJpZkNhcmRQcmljZV9fam01MFNcIixcblx0XCJtYWluVGFyaWZCdG5cIjogXCJtYWluLXZpZXctc3R5bGVzX21haW5UYXJpZkJ0bl9fMVdHX1RcIixcblx0XCJ0YXJpZlRpdGxlXCI6IFwibWFpbi12aWV3LXN0eWxlc190YXJpZlRpdGxlX18zeEpIaFwiLFxuXHRcInRhcmlmVGl0bGVQcmVtaXVtXCI6IFwibWFpbi12aWV3LXN0eWxlc190YXJpZlRpdGxlUHJlbWl1bV9fRXJTOUFcIixcblx0XCJ0YXJpZkFycm93XCI6IFwibWFpbi12aWV3LXN0eWxlc190YXJpZkFycm93X18yUXhyN1wiLFxuXHRcIm1haW5UYXJpZkNhcmRQcmVtaXVtXCI6IFwibWFpbi12aWV3LXN0eWxlc19tYWluVGFyaWZDYXJkUHJlbWl1bV9fM3JhbndcIixcblx0XCJtYWluVGFyaWZDYXJkUHJlbWl1bVRpdGxlXCI6IFwibWFpbi12aWV3LXN0eWxlc19tYWluVGFyaWZDYXJkUHJlbWl1bVRpdGxlX18yTC1Zd1wiLFxuXHRcIm1haW5UYXJpZkNhcmRQcmVtaXVtU3VidGl0bGVcIjogXCJtYWluLXZpZXctc3R5bGVzX21haW5UYXJpZkNhcmRQcmVtaXVtU3VidGl0bGVfXzJQcEMzXCIsXG5cdFwibWFpblRleHRQYXJcIjogXCJtYWluLXZpZXctc3R5bGVzX21haW5UZXh0UGFyX18xYlE0clwiLFxuXHRcIm1haW5TaG93V2h5VGV4dFwiOiBcIm1haW4tdmlldy1zdHlsZXNfbWFpblNob3dXaHlUZXh0X18yOU11ZVwiLFxuXHRcIm1haW5UYXJpZkNhcmRXcmFwcGVyXCI6IFwibWFpbi12aWV3LXN0eWxlc19tYWluVGFyaWZDYXJkV3JhcHBlcl9fMy1UWEVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJ0ZXh0ZmllbGQtc3R5bGVzX3dyYXBwZXJfXzFBQnQtXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3RcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uLy4uL3N0eWxlcy92aWV3cy9tYWluLXZpZXctc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3R5bGVzT2ZmaWNlIGZyb20gJy4vLi4vLi4vLi4vc3R5bGVzL2xheW91dHMvb2ZmaWNlLWxheW91dHMtc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgTWFpbkhlYWQgZnJvbSAnLi9jb21wb25lbnRzL01haW5IZWFkJztcclxuaW1wb3J0IE1haW5Cb2R5IGZyb20gJy4vY29tcG9uZW50cy9NYWluQm9keSc7XHJcbmltcG9ydCBNYWluVGFyaWYgZnJvbSAnLi9jb21wb25lbnRzL01haW5UYXJpZic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9ICh7XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCB7c3RhdGVBcHB9ID0gdXNlQ29udGV4dChDb250ZXh0QXBwKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHBheW1lbnQgPSBzdGF0ZUFwcC51c2VyICYmICBzdGF0ZUFwcC51c2VyLnN0YXR1cyA/IHN0YXRlQXBwLnVzZXIuc3RhdHVzIDogJzAnXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSwgW3N0YXRlQXBwLCBwYXltZW50XSlcclxuICAgIGNvbnNvbGUubG9nKHBheW1lbnQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNPZmZpY2UuY29udGFpbmVyT2ZmaWNlfT5cclxuICAgICAgICAgICAge3BheW1lbnQgPT09ICcxJyAmJjxNYWluSGVhZCBcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICB7cGF5bWVudCA9PT0gJzEnICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5BY3Rpb259PtCd0L7QstGL0Lkg0YPRgNC+0Log0KLQldCc0JAg0YPQttC1INCy0L4g0LLQutC70LDQtNC60LUg4oCc0JrRg9GA0YHRi+KAnTwvZGl2Pn1cclxuICAgICAgICAgICAgPE1haW5Cb2R5IFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1haW5UYXJpZiBjbGFzc2VzPXtjbGFzc2VzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpblZpZXciLCJpbXBvcnQgUmVhY3QsIHtcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi8uLi8uLi8uLi8uLi93aWRnZXRzL3VpL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IERBVEEgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3Byb2plY3QvZGF0YSc7XHJcblxyXG5jb25zdCBNYWluQm9keSA9ICh7XHJcbiAgICBjbGFzc2VzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93V2h5LCBzZXRTaG93V2h5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQm9keX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Cb2R5SW1hZ2V9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQm9keUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluVGV4dFBhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEQVRBLmFib3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5UZXh0UGFyfT57REFUQS5hYm91dDJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblRleHRQYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7REFUQS5hYm91dDN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblRleHRQYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7REFUQS5hYm91dDR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnF1b3RlfT7QntCx0YPRh9Cw0Y/RgdGMIC0g0LfQsNGA0LDQsdCw0YLRi9Cy0LDQuSE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1doeSghc2hvd1doeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blF1b3RlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5RdW90ZVRleHR9PtCj0LfQvdCw0YLRjCDQutCw0Lo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dXaHkgPyBbY2xhc3Nlcy53aHlBY3RpdmUsIGNsYXNzZXMud2h5XS5qb2luKCcgJykgOiBjbGFzc2VzLndoeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyd0ZXh0LWFsaWduJzogJ2NlbnRlcid9fSBjbGFzc05hbWU9e2NsYXNzZXMubWFpblNob3dXaHlUZXh0fT57REFUQS53aHl1c308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2hvd1doeVRleHR9PntEQVRBLndoeXVzMn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2hvd1doeVRleHR9PntEQVRBLndoeXVzM308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluU2hvd1doeVRleHR9PntEQVRBLndoeXVzNH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntEQVRBLndoeXVzNX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluQm9keSIsImltcG9ydCBSZWFjdCwge1xyXG4gICAgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZVxyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVySXRlbSBmcm9tICcuLi8uLi8uLi8uLi93aWRnZXRzL2hlYWRlck9mZmljZS9IZWFkZXJJdGVtJ1xyXG5pbXBvcnQgQ29udGV4dEFwcCBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbnRleHQvQXBwL0NvbnRleHRBcHAnO1xyXG5pbXBvcnQgeyBORVQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL25ldHdvcmsnO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLy4uLy4uLy4uLy4uL2dsb2JhbC91dGlscyc7XHJcbmltcG9ydCBzdmdTcHJpdGUgZnJvbSAnLi8uLi8uLi8uLi8uLi9wcm9qZWN0L3N2Zy9zdmdTcHJpdGUnO1xyXG5cclxuY29uc3QgTWFpbkhlYWQgPSAoe1xyXG4gICAgY2xhc3Nlc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCB7c3RhdGVBcHB9ID0gdXNlQ29udGV4dChDb250ZXh0QXBwKVxyXG4gICAgY29uc3QgdXNlciA9IHN0YXRlQXBwLnVzZXJcclxuXHJcbiAgICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7ICAgIFxyXG4gICAgY29uc3QgbW9iaWxlID0gd2lkdGggPCA3NjggPyB0cnVlIDogZmFsc2VcclxuICAgIFxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW51cEZ1bmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoKGAke05FVC5CQUNLX1VSTH0vcmVmZmVyYWxzLyR7dXNlci5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuc3RhdGUuY2xpZW50VG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWNsZWFudXBGdW5jdGlvbikgc2V0VXNlckRhdGEoZGF0YSkgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFudXBGdW5jdGlvbiA9IHRydWVcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhbGw6IDAsXHJcbiAgICAgICAgcmVhbE1vbmV5OiAwLFxyXG4gICAgICAgIGZ1dHVyZU1vbmV5OiAwLFxyXG4gICAgICAgIGFjdGl2ZTogMFxyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSAwXHJcbiAgICAgICAgICAgIGxldCBhbGwgPSAwXHJcbiAgICAgICAgICAgIGxldCByZWFsTW9uZXkgPSAwXHJcbiAgICAgICAgICAgIGxldCBmdXR1cmVNb25leSA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgaW4gdXNlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyRGF0YVt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YVt2YWx1ZV0ubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGwrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuc3RhdHVzID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTW9uZXkgPSByZWFsTW9uZXkgKyAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZU1vbmV5ID0gZnV0dXJlTW9uZXkgKyAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3NlY29uZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTW9uZXkgPSByZWFsTW9uZXkgKyA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnV0dXJlTW9uZXkgPSBmdXR1cmVNb25leSArIDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0aGlyZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdXR1cmVNb25leSA9IGZ1dHVyZU1vbmV5ICsgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDb3VudGVyKHthbGwsIGFjdGl2ZSwgcmVhbE1vbmV5LCBmdXR1cmVNb25leX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJEYXRhXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgIW1vYmlsZSA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmlmOiAn0JLQsNGIINC/0LDQutC10YInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICfQtNC10LnRgdGC0LLQuNGC0LXQu9C10L0g0LTQviAnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0YXJpZjogJ1N0YW5kYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1c2VyID8gdXNlci5kYXlfZW5kIDogJydcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGFyaWZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SGVhZGVySXRlbSBcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICBzdmc9e3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHt9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLQkdCw0LvQsNC90YFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIgPyB1c2VyLm1vbmV5ICsgJyB5LmUnIDogJzAgeS5lJ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb3VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCg0LDRgdGH0LXRgtC90YvQuSDQtNC+0YXQvtC0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudGVyLnJlYWxNb25leSArICcgeS5lJ31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjb3VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXJJdGVtIFxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIHN2Zz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczoge31cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCf0LDRgNGC0L3QtdGA0YtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50ZXIuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNvdW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkTW9ifT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTW9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ZnU3ByaXRlKCdTdGFyJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+U3RhbmRhcmQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtVGV4dE1vYlNtYWxsfT7QotCw0YDQuNGEPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ0Nsb2NrJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYlNtYWxsfT57dXNlci5kYXlfZW5kfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCU0LXQudGB0YLQsi4g0LTQvjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTW9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVdyYXBwZXJNb2J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eydtYXJnaW4tcmlnaHQnOiAnM3B4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ01vbmV5TGlzdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTNweCdcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVRleHRNb2J9PtCR0LDQu9Cw0L3RgTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1OdW1iZXJNb2J9Pnt1c2VyICYmIHVzZXIubW9uZXl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1Nb2J9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtV3JhcHBlck1vYn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdmdTcHJpdGUoJ01vbmV5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlck1vYn0+e2NvdW50ZXIucmVhbE1vbmV5fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0TW9iU21hbGx9PtCU0L7RhdC+0LQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU1vYn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1XcmFwcGVyTW9ifT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3N2Z1Nwcml0ZSgnVXNlcnMnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTnVtYmVyTW9ifT57Y291bnRlci5hY3RpdmV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVRleHRNb2JTbWFsbH0+0J/QsNGA0YLQvdC10YDRizwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgIDwvZGl2PiBcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgREFUQSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vcHJvamVjdC9kYXRhJztcclxuaW1wb3J0IE1haW5UYXJpZkNhcmQgZnJvbSAnLi9NYWluVGFyaWZDYXJkJztcclxuaW1wb3J0IHN2Z1Nwcml0ZSBmcm9tICcuLy4uLy4uLy4uLy4uL3Byb2plY3Qvc3ZnL3N2Z1Nwcml0ZSc7XHJcblxyXG5jb25zdCBNYWluVGFyaWYgPSAoe1xyXG4gICAgY2xhc3Nlc1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBzdGFuZGFyZCA9IERBVEEucHJpY2VzLnN0YW5kYXJkXHJcbiAgICBjb25zdCBwcmVtaXVtID0gREFUQS5wcmljZXMucHJlbWl1bVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YXJpZldyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YXJpZldyYXBwZXJJbm5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhcmlmVGl0bGV9PntzdGFuZGFyZC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhcmlmQXJyb3d9PntzdmdTcHJpdGUoJ0Fycm93VXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMzcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhcmlmV3JhcHBlckJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmQucGVyaW9kcy5tYXAoKGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGFyaWZDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pdW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY2FyZCR7aWR4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy50YXJpZldyYXBwZXJJbm5lciwgY2xhc3Nlcy50YXJpZldyYXBwZXJJbm5lclJpZ2h0XS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YXJpZlRpdGxlUHJlbWl1bX0+e3ByZW1pdW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YXJpZkFycm93fT57c3ZnU3ByaXRlKCdBcnJvd1VwU21hbGwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMzcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhcmlmV3JhcHBlckJvZHlQcmVtaXVtfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pdW0ucGVyaW9kcy5tYXAoKGVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGFyaWZDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pdW09e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjYXJkJHtpZHh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluVGFyaWYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHRyYW5zZm9ybVdvcmRDb3VudCB9IGZyb20gJy4vLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgTWFpblRhcmlmQ2FyZCA9ICh7XHJcbiAgICBwcmVtaXVtLFxyXG4gICAgY2xhc3NlcyxcclxuICAgIGRhdGFcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluVGFyaWZDYXJkV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHtwcmVtaXVtID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLm1haW5UYXJpZkNhcmQsIGNsYXNzZXMubWFpblRhcmlmQ2FyZFByZW1pdW1dLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluVGFyaWZDYXJkUHJlbWl1bVRpdGxlfT7Qo9C20LUg0YHQutC+0YDQvjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblRhcmlmQ2FyZFByZW1pdW1TdWJ0aXRsZX0+KyDQuNC90LTQuNCy0LjQtNGD0LDQu9GM0L3Ri9C1INC60L7QvdGB0YPQu9GM0YLQsNGG0LjQuDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluVGFyaWZDYXJkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5UYXJpZkNhcmRQcmljZX0+e2RhdGEucHJpY2V9INCz0YDQvTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblRhcmlmQ2FyZFNhbGV9PntkYXRhLnNhbGV9INCz0YDQvTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpblRhcmlmQ2FyZE1vdW50aH0+e2RhdGEubW91bnRofSDQvNC10YHRj9GGe3RyYW5zZm9ybVdvcmRDb3VudChkYXRhLm1vdW50aCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgeyFwcmVtaXVtICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5UYXJpZkJ0bn0+0J7Qv9C70LDRgtC40YLRjDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluVGFyaWZDYXJkIiwiZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVdvcmRDb3VudCA9IChjb3VudCwgbGFuZykgPT4ge1xyXG4gICAgY29uc3QgZW5kZXIgPSB7XHJcbiAgICAgICAgZmlyc3Q6ICcnLFxyXG4gICAgICAgIHNlY29uZDogJ9CwJyxcclxuICAgICAgICB0aGlyZDogJ2XQsidcclxuICAgIH1cclxuICAgIGxldCB0b3RhbCA9IGNvdW50ICUgMTBcclxuXHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIGNvdW50ID49IDUgJiYgY291bnQgPD0gMjA6XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRlci50aGlyZFxyXG4gICAgICAgIGNhc2UgdG90YWwgPT09IDE6XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRlci5maXJzdFxyXG4gICAgICAgIGNhc2UgdG90YWwgPiAxICYmIHRvdGFsIDwgNTpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLnNlY29uZFxyXG4gICAgICAgIGNhc2UgdG90YWwgPiA0OiBcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLnRoaXJkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGVuZGVyLmZpcnN0XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBIZWFkZXJJdGVtID0gKHtcclxuICAgIGNsYXNzZXMsXHJcbiAgICB0aXRsZSxcclxuICAgIHZhbHVlLFxyXG4gICAgdHlwZVxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHR5cGUgPT09ICdjb3VudCcgPyBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtTnVtYmVyfT57dmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbVRleHR9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgdHlwZSA9PT0gJ3RhcmlmJyA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UYXJpZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkSXRlbUxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZmZlcmFsSGVhZEl0ZW1UZXh0fT57dGl0bGUudGFyaWZ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlckRhdGV9Pnt2YWx1ZS50YXJpZn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZEl0ZW1MaW5lfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWZmZXJhbEhlYWRJdGVtVGV4dH0+e3RpdGxlLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVmZmVyYWxIZWFkSXRlbU51bWJlclRhcmlmfT57dmFsdWUuZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgPD48Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJJdGVtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy93aWRnZXRzL3RleHRmaWVsZC1zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBUZXh0RmllbGQgPSAoe1xyXG4gICAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRleHRGaWVsZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=