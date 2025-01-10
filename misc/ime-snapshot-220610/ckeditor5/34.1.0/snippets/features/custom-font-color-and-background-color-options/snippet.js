/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/custom-font-color-and-background-color-options.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/custom-font-color-and-background-color-options.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config */ \"./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n\n\n/* globals ClassicEditor, console, window, document */\nClassicEditor\n\t.create( document.querySelector( '#snippet-custom-font-color-and-background-color-options' ), {\n\t\tcloudServices: _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__.CS_CONFIG,\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading',\n\t\t\t\t'|',\n\t\t\t\t'fontColor',\n\t\t\t\t'fontBackgroundColor',\n\t\t\t\t'|',\n\t\t\t\t'bulletedList',\n\t\t\t\t'numberedList',\n\t\t\t\t'|',\n\t\t\t\t'outdent',\n\t\t\t\t'indent',\n\t\t\t\t'|',\n\t\t\t\t'undo',\n\t\t\t\t'redo'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tfontBackgroundColor: {\n\t\t\tcolors: [\n\t\t\t\t'hsl(0,0%,0%)',\n\t\t\t\t'hsl(0,0%,12.5%)',\n\t\t\t\t'hsl(0,0%,25%)',\n\t\t\t\t'hsl(0,0%,37.5%)',\n\t\t\t\t'hsl(0,0%,50%)',\n\t\t\t\t'hsl(0,0%,62.50%)',\n\t\t\t\t'hsl(0,0%,75%)',\n\t\t\t\t'hsl(0,0%,87.5%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(0,0%,100%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(0,100%,10%)',\n\t\t\t\t'hsl(0,100%,20%)',\n\t\t\t\t'hsl(0,100%,30%)',\n\t\t\t\t'hsl(0,100%,40%)',\n\t\t\t\t'hsl(0,100%,50%)',\n\t\t\t\t'hsl(0,100%,60%)',\n\t\t\t\t'hsl(0,100%,70%)',\n\t\t\t\t'hsl(0,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(0,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(30,100%,10%)',\n\t\t\t\t'hsl(30,100%,20%)',\n\t\t\t\t'hsl(30,100%,30%)',\n\t\t\t\t'hsl(30,100%,40%)',\n\t\t\t\t'hsl(30,100%,50%)',\n\t\t\t\t'hsl(30,100%,60%)',\n\t\t\t\t'hsl(30,100%,70%)',\n\t\t\t\t'hsl(30,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(30,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(60,100%,10%)',\n\t\t\t\t'hsl(60,100%,20%)',\n\t\t\t\t'hsl(60,100%,30%)',\n\t\t\t\t'hsl(60,100%,40%)',\n\t\t\t\t'hsl(60,100%,50%)',\n\t\t\t\t'hsl(60,100%,60%)',\n\t\t\t\t'hsl(60,100%,70%)',\n\t\t\t\t'hsl(60,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(60,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(90,100%,10%)',\n\t\t\t\t'hsl(90,100%,20%)',\n\t\t\t\t'hsl(90,100%,30%)',\n\t\t\t\t'hsl(90,100%,40%)',\n\t\t\t\t'hsl(90,100%,50%)',\n\t\t\t\t'hsl(90,100%,60%)',\n\t\t\t\t'hsl(90,100%,70%)',\n\t\t\t\t'hsl(90,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(90,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(120,100%,10%)',\n\t\t\t\t'hsl(120,100%,20%)',\n\t\t\t\t'hsl(120,100%,30%)',\n\t\t\t\t'hsl(120,100%,40%)',\n\t\t\t\t'hsl(120,100%,50%)',\n\t\t\t\t'hsl(120,100%,60%)',\n\t\t\t\t'hsl(120,100%,70%)',\n\t\t\t\t'hsl(120,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(120,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(150,100%,10%)',\n\t\t\t\t'hsl(150,100%,20%)',\n\t\t\t\t'hsl(150,100%,30%)',\n\t\t\t\t'hsl(150,100%,40%)',\n\t\t\t\t'hsl(150,100%,50%)',\n\t\t\t\t'hsl(150,100%,60%)',\n\t\t\t\t'hsl(150,100%,70%)',\n\t\t\t\t'hsl(150,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(150,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(180,100%,10%)',\n\t\t\t\t'hsl(180,100%,20%)',\n\t\t\t\t'hsl(180,100%,30%)',\n\t\t\t\t'hsl(180,100%,40%)',\n\t\t\t\t'hsl(180,100%,50%)',\n\t\t\t\t'hsl(180,100%,60%)',\n\t\t\t\t'hsl(180,100%,70%)',\n\t\t\t\t'hsl(180,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(180,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(210,100%,10%)',\n\t\t\t\t'hsl(210,100%,20%)',\n\t\t\t\t'hsl(210,100%,30%)',\n\t\t\t\t'hsl(210,100%,40%)',\n\t\t\t\t'hsl(210,100%,50%)',\n\t\t\t\t'hsl(210,100%,60%)',\n\t\t\t\t'hsl(210,100%,70%)',\n\t\t\t\t'hsl(210,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(210,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(240,100%,10%)',\n\t\t\t\t'hsl(240,100%,20%)',\n\t\t\t\t'hsl(240,100%,30%)',\n\t\t\t\t'hsl(240,100%,40%)',\n\t\t\t\t'hsl(240,100%,50%)',\n\t\t\t\t'hsl(240,100%,60%)',\n\t\t\t\t'hsl(240,100%,70%)',\n\t\t\t\t'hsl(240,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(240,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(270,100%,10%)',\n\t\t\t\t'hsl(270,100%,20%)',\n\t\t\t\t'hsl(270,100%,30%)',\n\t\t\t\t'hsl(270,100%,40%)',\n\t\t\t\t'hsl(270,100%,50%)',\n\t\t\t\t'hsl(270,100%,60%)',\n\t\t\t\t'hsl(270,100%,70%)',\n\t\t\t\t'hsl(270,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(270,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(300,100%,10%)',\n\t\t\t\t'hsl(300,100%,20%)',\n\t\t\t\t'hsl(300,100%,30%)',\n\t\t\t\t'hsl(300,100%,40%)',\n\t\t\t\t'hsl(300,100%,50%)',\n\t\t\t\t'hsl(300,100%,60%)',\n\t\t\t\t'hsl(300,100%,70%)',\n\t\t\t\t'hsl(300,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(300,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'hsl(330,100%,10%)',\n\t\t\t\t'hsl(330,100%,20%)',\n\t\t\t\t'hsl(330,100%,30%)',\n\t\t\t\t'hsl(330,100%,40%)',\n\t\t\t\t'hsl(330,100%,50%)',\n\t\t\t\t'hsl(330,100%,60%)',\n\t\t\t\t'hsl(330,100%,70%)',\n\t\t\t\t'hsl(330,100%,80%)',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'hsl(330,100%,90%)',\n\t\t\t\t\thasBorder: true\n\t\t\t\t}\n\t\t\t],\n\t\t\tcolumns: 9,\n\t\t\tdocumentColors: 18\n\t\t},\n\t\tfontColor: {\n\t\t\tcolors: [\n\t\t\t\t'black',\n\t\t\t\t'gray',\n\t\t\t\t'silver',\n\t\t\t\t{\n\t\t\t\t\tcolor: 'white',\n\t\t\t\t\thasBorder: true\n\t\t\t\t},\n\t\t\t\t'maroon',\n\t\t\t\t'red',\n\t\t\t\t'purple',\n\t\t\t\t'fuchsia',\n\t\t\t\t'green',\n\t\t\t\t'lime',\n\t\t\t\t'olive',\n\t\t\t\t'yellow',\n\t\t\t\t'navy',\n\t\t\t\t'blue',\n\t\t\t\t'teal',\n\t\t\t\t'aqua'\n\t\t\t],\n\t\t\tcolumns: 4,\n\t\t\tdocumentColors: 12\n\t\t}\n\t} )\n\t.then( editor => {\n\t\tif ( !window.editors ) {\n\t\t\twindow.editors = {};\n\t\t}\n\t\twindow.editors[ 'custom-font-color-and-background-color-options' ] = editor;\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/custom-font-color-and-background-color-options.js?");

/***/ }),

/***/ "./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js":
/*!*********************************************************************************!*\
  !*** ./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CS_CONFIG\": () => (/* binding */ CS_CONFIG),\n/* harmony export */   \"TOKEN_URL\": () => (/* binding */ TOKEN_URL),\n/* harmony export */   \"UPLOAD_URL\": () => (/* binding */ UPLOAD_URL)\n/* harmony export */ });\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n// WARNING: The URLs below should not be used for any other purpose than Easy Image plugin development.\n// Images uploaded using the testing token service may be deleted automatically at any moment.\n// If you would like to try the Easy Image service, please sign up for a free trial (https://ckeditor.com/ckeditor-cloud-services/).\n// Images uploaded during the free trial will not be deleted for the whole trial period and additionally the trial service can be converted\n// into a subscription at any moment, allowing you to preserve all uploaded images.\n\nconst TOKEN_URL = 'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt';\n\nconst UPLOAD_URL = 'https://33333.cke-cs.com/easyimage/upload/';\n\nconst CS_CONFIG = {\n\ttokenUrl: TOKEN_URL,\n\tuploadUrl: UPLOAD_URL\n};\n\n\n//# sourceURL=webpack://ckeditor5/./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/custom-font-color-and-background-color-options.js");
/******/ 	
/******/ })()
;