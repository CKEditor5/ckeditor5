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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.css?");

/***/ }),

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _source_editing_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source-editing.css */ \"./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.css\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals console, window, document, ClassicEditor */\n\n\n\nClassicEditor\n\t.create( document.querySelector( '#editor' ), {\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading',\n\t\t\t\t'|',\n\t\t\t\t'alignment',\n\t\t\t\t'outdent',\n\t\t\t\t'indent',\n\t\t\t\t'|',\n\t\t\t\t'bold',\n\t\t\t\t'italic',\n\t\t\t\t'underline',\n\t\t\t\t'strikethrough',\n\t\t\t\t'subscript',\n\t\t\t\t'superscript',\n\t\t\t\t'code',\n\t\t\t\t'-',\n\t\t\t\t'codeBlock',\n\t\t\t\t'blockQuote',\n\t\t\t\t'link',\n\t\t\t\t'uploadImage',\n\t\t\t\t'insertTable',\n\t\t\t\t'mediaEmbed',\n\t\t\t\t'|',\n\t\t\t\t'bulletedList',\n\t\t\t\t'numberedList',\n\t\t\t\t'todoList',\n\t\t\t\t'|',\n\t\t\t\t'undo',\n\t\t\t\t'redo',\n\t\t\t\t'|',\n\t\t\t\t'sourceEditing'\n\t\t\t],\n\t\t\tshouldNotGroupWhenFull: true\n\t\t},\n\t\ttable: {\n\t\t\tcontentToolbar: [\n\t\t\t\t'tableColumn', 'tableRow', 'mergeTableCells',\n\t\t\t\t'tableProperties', 'tableCellProperties'\n\t\t\t]\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'linkImage',\n\t\t\t\t'|',\n\t\t\t\t'imageStyle:block',\n\t\t\t\t'imageStyle:side',\n\t\t\t\t'|',\n\t\t\t\t'imageTextAlternative',\n\t\t\t\t'toggleImageCaption'\n\t\t\t]\n\t\t},\n\t\thtmlSupport: {\n\t\t\tallow: [\n\t\t\t\t{\n\t\t\t\t\tname: /.*/,\n\t\t\t\t\tattributes: true,\n\t\t\t\t\tclasses: true,\n\t\t\t\t\tstyles: true\n\t\t\t\t}\n\t\t\t],\n\t\t\tdisallow: [\n\t\t\t\t{\n\t\t\t\t\tattributes: [\n\t\t\t\t\t\t{ key: /^on(.*)/i, value: true },\n\t\t\t\t\t\t{ key: /.*/, value: /(\\b)(on\\S+)(\\s*)=|javascript:|(<\\s*)(\\/*)script/i },\n\t\t\t\t\t\t{ key: /.*/, value: /data:(?!image\\/(png|jpg|jpeg|gif|webp))/i }\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{ name: 'script' }\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar,\n\t\t\t\titem => item.label && item.label === 'Source' ),\n\t\t\ttext: 'Switch to the source mode to edit the HTML source.',\n\t\t\teditor\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/source-editing.js");
/******/ 	
/******/ })()
;