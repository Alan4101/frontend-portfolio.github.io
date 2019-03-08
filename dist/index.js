/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_index__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const desktop_btn = document.querySelectorAll('.desktop-i');\r\nconst tablet_btn = document.querySelectorAll('.tablet-i');\r\nconst phone_btn = document.querySelectorAll('.phone-i');\r\nconst d_b = document.querySelectorAll('.desktop');\r\nconst p = document.querySelector('#portfolio');\r\nconst listItems = document.querySelector(\".content-portfolio\");\r\nconst workLists = document.querySelector('.work-content');\r\nconst textLists = document.querySelector('.text-animated');\r\nconst btnDown = document.querySelector('#btnDown');\r\nconst btnUp = document.querySelector('#btnUp');\r\nconst navBtn = document.querySelector('#navBtn');\r\nconst navList = document.querySelectorAll('.wrapp-nav ul li');\r\n//text \"hi i`m andrew\"\r\nlet textShow = ()=>{\r\n    let str = String();\r\n    let block = document.querySelector('.text-show');\r\n\r\n    str = block.textContent;\r\n    block.innerHTML = '';\r\n    let i = 0;\r\n    setInterval(()=>{\r\n        if(i<str.length){\r\n            block.textContent = block.textContent + str[i];\r\n            i++;\r\n        }else { block.classList.remove('after'); }\r\n    },100);\r\n};\r\n//data - attr for desktop item in portfolio section\r\nd_b.forEach((el, i)=>{el.setAttribute('data-number',i)});\r\n//data -attr for select button like: desktop, tablet, phone\r\nfunction setDataNumber(el, el1, el2) {\r\n    el.forEach((el, i)=> el.setAttribute('data-number',i+'d'));\r\n    el1.forEach((el, i)=> el.setAttribute('data-number',i+'t'));\r\n    el2.forEach((el, i)=> el.setAttribute('data-number',i+'p'));\r\n}\r\n//functions for select view in portfolio item\r\nfunction desktop(el) {\r\n    var t = parseInt(el);\r\n    d_b.forEach( w =>{\r\n        if(t == w.getAttribute('data-number')) {\r\n            w.children[1].style.display = 'block';\r\n            w.children[2].style.display = 'block';\r\n            w.children[0].children[0].style.transform = 'rotate(0deg)';\r\n            w.children[0].style.transform = 'rotate(0deg)';\r\n            w.children[0].classList.remove('phone');\r\n            w.children[0].classList.remove('tablet');\r\n        }\r\n\r\n    });\r\n\r\n}\r\n\r\nfunction tablet(el) {\r\n    var t = parseInt(el);\r\n    d_b.forEach( w =>{\r\n        if(t == w.getAttribute('data-number')) {\r\n            w.children[1].style.display = 'none';\r\n            w.children[2].style.display = 'none';\r\n            w.children[0].style.transform = 'rotate(90deg)';\r\n            w.children[0].children[0].style.transform = 'rotate(-90deg)';\r\n            w.children[0].classList.remove('phone');\r\n            w.children[0].classList.add('tablet');\r\n\r\n        }\r\n    });\r\n}\r\n\r\nfunction phone(el) {\r\n    var t = parseInt(el);\r\n    d_b.forEach( w =>{\r\n        if(t == w.getAttribute('data-number')) {\r\n            w.children[1].style.display = 'none';\r\n            w.children[2].style.display = 'none';\r\n            w.children[0].classList.add('phone');\r\n\r\n            if(w.children[0].classList.contains('tablet')){\r\n                w.children[0].style.transform = 'rotate(0deg)';\r\n                w.children[0].children[0].style.transform = 'rotate(0deg)';\r\n            }else {\r\n                w.children[0].classList.remove('tablet');\r\n            }\r\n            w.children[0].classList.remove('tablet');\r\n\r\n\r\n        }\r\n    });\r\n}\r\n\r\np.addEventListener('click', (e)=>{\r\n    var o = e.target.getAttribute('data-number');\r\n\r\n    switch (o.replace(/\\d/g, '')) {\r\n        case 'd': desktop(o); break;\r\n        case 't': tablet(o); break;\r\n        case 'p': phone(o); break;\r\n    }\r\n});\r\n\r\nsetDataNumber(desktop_btn, tablet_btn, phone_btn);\r\n\r\ntextShow();\r\n//swipe slider\r\nlet swiper = new Swiper('.swiper-container', {\r\n    speed: 600,\r\n    parallax: true,\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n    },\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n    },\r\n});\r\n\r\nlet isScrolling = false;\r\nlet flag = true;\r\n//scroll animations\r\nwindow.addEventListener(\"scroll\", throttleScroll, false);\r\n\r\nfunction throttleScroll(e) {\r\n    if (isScrolling == false) {\r\n        window.requestAnimationFrame(function() {\r\n            scrolling(e);\r\n            isScrolling = false;\r\n        });\r\n    }\r\n    isScrolling = true;\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", scrolling, false);\r\n\r\nfunction scrolling() {\r\n    for (let i = 0; i<3; i++) {\r\n        let textL = textLists.children[i];\r\n        if(i&1){\r\n            isPartiallyVisible(textL)?textL.classList.add('slideInLeft'):textL.classList.remove('slideInLeft');\r\n        }else {\r\n            isPartiallyVisible(textL)? textL.classList.add('slideInRight'): textL.classList.remove('slideInRight');\r\n        }\r\n    }\r\n    for (let i = 0; i < 4; i++) {\r\n        let listItem = listItems.children[i];\r\n        let workItem = workLists.children[i];\r\n\r\n        if (isPartiallyVisible(listItem) || isPartiallyVisible(workItem)) {\r\n            listItem.classList.add(\"slideInLeft\");\r\n            workItem.classList.add(\"slideInRight\");\r\n\r\n        } else {\r\n            listItem.classList.remove(\"slideInLeft\");\r\n            workItem.classList.remove(\"slideInRight\");\r\n        }\r\n    }\r\n}\r\n\r\nfunction isPartiallyVisible(el) {\r\n    var elementBoundary = el.getBoundingClientRect();\r\n\r\n    var top = elementBoundary.top;\r\n    var bottom = elementBoundary.bottom;\r\n    var height = elementBoundary.height;\r\n\r\n    return ((top + height >= 0) && (height + window.innerHeight >= bottom));\r\n}\r\n\r\nfunction isFullyVisible(el) {\r\n    var elementBoundary = el.getBoundingClientRect();\r\n\r\n    var top = elementBoundary.top;\r\n    var bottom = elementBoundary.bottom;\r\n\r\n    return ((top >= 0) && (bottom <= window.innerHeight));\r\n}\r\n// scroll at one window\r\nfunction scrollDown() {\r\n    let  windowCoords = document.documentElement.clientHeight;\r\n    (function scroll() {\r\n        if (window.pageYOffset < windowCoords) {\r\n            window.scrollBy(0, 10);\r\n            setTimeout(scroll, 0);\r\n        }\r\n        if (window.pageYOffset > windowCoords) {\r\n            window.scrollTo(0, windowCoords);\r\n        }\r\n    })();\r\n}\r\n//button scroll up\r\nfunction scrollUp() {\r\n    (function scroll () {\r\n        if(window.pageYOffset > 0){\r\n            window.scrollBy(0, -10);\r\n            setTimeout(scroll,0);\r\n        }\r\n    })();\r\n}\r\n\r\nlet showBtnUp = ()=>{\r\n    const wCord = document.documentElement.clientHeight;\r\n    return window.pageYOffset>wCord?btnUp.classList.add('show'):btnUp.classList.remove('show');\r\n};\r\n\r\nwindow.addEventListener('scroll', showBtnUp);\r\n\r\nbtnUp.addEventListener('click',scrollUp);\r\n\r\nbtnDown.addEventListener('click', scrollDown);\r\n//header nav\r\nfunction navListAnimation(f) {\r\n    if(f){\r\n        navList.forEach((el,i)=>{\r\n            setTimeout(()=>{\r\n                el.classList.remove('slideOutLeft');\r\n                el.classList.add('animated','slideInLeft');\r\n            },i*150);\r\n        });\r\n    }else{\r\n        navList.forEach((el,i)=>{\r\n            setTimeout(()=>{\r\n                el.classList.add('animated','slideOutLeft');\r\n                el.classList.remove('slideInLeft');\r\n            },i*50);\r\n        });\r\n    }\r\n\r\n}\r\n\r\nnavBtn.addEventListener('click',()=>{\r\n    let t = navList[0].parentNode;\r\n\r\n    if(flag){\r\n        setTimeout(()=> t.style.opacity = '1' ,800);\r\n        navBtn.classList.add('animationbtn');\r\n       navListAnimation(flag);\r\n\r\n       flag = false;\r\n   }else {\r\n       navBtn.classList.remove('animationbtn');\r\n       navListAnimation(flag);\r\n        flag = true;\r\n        setTimeout(()=> t.style.opacity = '0' ,700);\r\n\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/header.scss?");

/***/ })

/******/ });