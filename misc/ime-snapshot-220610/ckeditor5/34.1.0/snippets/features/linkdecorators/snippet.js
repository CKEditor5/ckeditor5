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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/linkdecorators.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/linkdecorators.js ***!
  \*******************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals console, window, document, ClassicEditor, CS_CONFIG */\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-link-decorators' ), {\n\t\tcloudServices: {\"tokenUrl\":\"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J\",\"uploadUrl\":\"https://33333.cke-cs.com/easyimage/upload/\",\"webSocketUrl\":\"33333.cke-cs.com/ws\"},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tlink: {\n\t\t\taddTargetToExternalLinks: true,\n\t\t\tdecorators: [\n\t\t\t\t{\n\t\t\t\t\tmode: 'manual',\n\t\t\t\t\tlabel: 'Downloadable',\n\t\t\t\t\tattributes: {\n\t\t\t\t\t\tdownload: 'download'\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t} )\n\t.then( editor => {\n\t\tif ( !window.editors ) {\n\t\t\twindow.editors = {};\n\t\t}\n\t\twindow.editors.decorators = editor;\n\n\t\tconst outputElement = document.querySelector( '#output-link-decorators' );\n\n\t\toutputElement.innerHTML = window.Prism.highlight( editor.getData(), window.Prism.languages.html, 'html' );\n\n\t\teditor.model.document.on( 'change', () => {\n\t\t\toutputElement.innerHTML = window.Prism.highlight( editor.getData(), window.Prism.languages.html, 'html' );\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/linkdecorators.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/linkdecorators.js"]();
/******/ 	
/******/ })()
;