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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/toolbar-breakpoint.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/toolbar-breakpoint.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config */ \"./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, console, window, document */\n\n\n\nClassicEditor\n\t.create( document.querySelector( '#toolbar-breakpoint' ), {\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading', '|',\n\t\t\t\t'alignment', '|',\n\t\t\t\t'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',\n\t\t\t\t'link', '|',\n\t\t\t\t'bulletedList', 'numberedList', 'todoList', '-',\n\t\t\t\t'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',\n\t\t\t\t'code', 'codeBlock', '|',\n\t\t\t\t'insertTable', '|',\n\t\t\t\t'outdent', 'indent', '|',\n\t\t\t\t'uploadImage', 'blockQuote', '|',\n\t\t\t\t'undo', 'redo'\n\t\t\t],\n\t\t\tshouldNotGroupWhenFull: true\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [ 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative' ]\n\t\t},\n\t\tcodeBlock: {\n\t\t\tlanguages: [\n\t\t\t\t{ language: 'css', label: 'CSS' },\n\t\t\t\t{ language: 'html', label: 'HTML' },\n\t\t\t\t{ language: 'javascript', label: 'JavaScript' },\n\t\t\t\t{ language: 'php', label: 'PHP' }\n\t\t\t]\n\t\t},\n\t\tfontFamily: {\n\t\t\tsupportAllValues: true\n\t\t},\n\t\tfontSize: {\n\t\t\toptions: [ 9, 10, 11, 12, 'default', 14, 15 ],\n\t\t\tsupportAllValues: true\n\t\t},\n\t\theading: {\n\t\t\toptions: [\n\t\t\t\t{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },\n\t\t\t\t{ model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },\n\t\t\t\t{ model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },\n\t\t\t\t{ model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' },\n\t\t\t\t{ model: 'heading4', view: 'h5', title: 'Heading 4', class: 'ck-heading_heading4' }\n\t\t\t]\n\t\t},\n\t\tcloudServices: _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__.CS_CONFIG\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/toolbar-breakpoint.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/toolbar-breakpoint.js");
/******/ 	
/******/ })()
;