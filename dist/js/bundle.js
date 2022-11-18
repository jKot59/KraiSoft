/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dragItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dragItem */ \"./src/js/modules/dragItem.js\");\n\nvar box = document.querySelector('#box');\nvar field = document.querySelector('#field');\n(0,_modules_dragItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(box, field);\n\n\n//# sourceURL=webpack://uber/./src/js/index.ts?");

/***/ }),

/***/ "./src/js/modules/dragItem.js":
/*!************************************!*\
  !*** ./src/js/modules/dragItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dragItem)\n/* harmony export */ });\nfunction dragItem (item, parent) {\n    let elementX = 0, elementY = 0, cursorX = 0, cursorY = 0\n    const leftLimit = 0\n    const rightLimit = parent.clientWidth - item.clientWidth - 5\n    const topLimit = 0\n    const bottomLimit = parent.clientHeight - item.clientHeight - 5\n\n    item.onmousedown = dragMouseDown;\n    \n    function dragMouseDown(e) {\n        e.preventDefault();\n        // записываем первоначальные координаты курсора\n        cursorX = e.clientX;\n        cursorY = e.clientY;\n        item.style.boxShadow = '2px 2px 13px 1px black'\n        document.onmouseup = closeDragElement;\n        document.onmousemove = elementDrag;\n    }\n    \n    function elementDrag(e) {\n        e.preventDefault();\n        // получаем координаты\n        elementX = cursorX - e.clientX;\n        elementY = cursorY - e.clientY;\n        cursorX = e.clientX;\n        cursorY = e.clientY;\n\n        // ограничиваем перемещение\n        let limitedX = checkLimit(leftLimit, rightLimit, (item.offsetLeft - elementX))\n        let limitedY = checkLimit(topLimit, bottomLimit, (item.offsetTop - elementY))\n        \n        item.style.top = limitedY;\n        item.style.left = limitedX;\n    }\n    \n    function closeDragElement() {\n        item.style.boxShadow = ''\n        document.onmouseup = null;\n        document.onmousemove = null;\n    }\n\n    function checkLimit (minLimit, maxLimit, currentPossition) {\n        let limitedPosition\n        if (currentPossition < maxLimit && currentPossition > minLimit) {\n            limitedPosition = currentPossition + \"px\"\n        } else if (currentPossition > maxLimit) {\n            limitedPosition = maxLimit + \"px\"\n        } else if (currentPossition < minLimit) {\n            limitedPosition = minLimit + \"px\"\n        }\n        return limitedPosition\n    }\n}\n\n//# sourceURL=webpack://uber/./src/js/modules/dragItem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.ts");
/******/ 	
/******/ })()
;