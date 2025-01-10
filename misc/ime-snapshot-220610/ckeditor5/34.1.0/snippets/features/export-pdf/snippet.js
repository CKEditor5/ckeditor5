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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/export-pdf.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/export-pdf.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js */ \"./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals window, document, console, DecoupledEditor */\n\n\n\nDecoupledEditor\n\t.create( document.querySelector( '#editor' ), {\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'exportPdf', '|',\n\t\t\t\t'heading', '|',\n\t\t\t\t'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',\n\t\t\t\t'pageBreak', 'codeBlock', '-',\n\t\t\t\t'bold', 'italic', 'underline',\n\t\t\t\t'strikethrough', 'subscript', 'superscript', '|',\n\t\t\t\t'link', 'blockQuote', 'insertTable', 'uploadImage', 'specialCharacters', '|',\n\t\t\t\t'indent', 'outdent', '|',\n\t\t\t\t'alignment', '|',\n\t\t\t\t'undo', 'redo'\n\t\t\t],\n\t\t\tshouldNotGroupWhenFull: true\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText',\n\t\t\t\t'|', 'toggleImageCaption', 'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ]\n\t\t},\n\t\tfontFamily: {\n\t\t\tsupportAllValues: true\n\t\t},\n\t\tfontSize: {\n\t\t\toptions: [ 9, 10, 11, 12, 'default', 14, 15 ],\n\t\t\tsupportAllValues: true\n\t\t},\n\t\texportPdf: {\n\t\t\tstylesheets: [\n\t\t\t\t'../assets/fonts.css',\n\t\t\t\t'EDITOR_STYLES',\n\t\t\t\t'../snippets/features/export-pdf/snippet.css',\n\t\t\t\t'../assets/export-pdf.css'\n\t\t\t],\n\t\t\tfileName: 'export-pdf-demo.pdf',\n\t\t\tappID: 'cke5-docs',\n\t\t\tconverterOptions: {\n\t\t\t\tformat: 'A4',\n\t\t\t\tmargin_top: '20mm',\n\t\t\t\tmargin_bottom: '20mm',\n\t\t\t\tmargin_right: '12mm',\n\t\t\t\tmargin_left: '12mm',\n\t\t\t\tpage_orientation: 'portrait'\n\t\t\t},\n\t\t\ttokenUrl: false\n\t\t},\n\t\tcloudServices: _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config_js__WEBPACK_IMPORTED_MODULE_0__.CS_CONFIG,\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\tconst toolbarContainer = document.querySelector( '#toolbar-container' );\n\t\ttoolbarContainer.appendChild( editor.ui.view.toolbar.element );\n\n\t\t// Prevent showing a warning notification when user is pasting a content from MS Word or Google Docs.\n\t\twindow.preventPasteFromOfficeNotification = true;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label === 'Export to PDF' ),\n\t\t\ttext: 'Click to print your content to a PDF file.',\n\t\t\teditor,\n\t\t\ttippyOptions: {\n\t\t\t\tplacement: 'bottom-start'\n\t\t\t}\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n// Demo styles.\nconst link = document.createElement( 'link' );\nlink.rel = 'stylesheet';\nlink.href = '../assets/export-pdf.css';\n\ndocument.head.appendChild( link );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/export-pdf.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/export-pdf.js");
/******/ 	
/******/ })()
;