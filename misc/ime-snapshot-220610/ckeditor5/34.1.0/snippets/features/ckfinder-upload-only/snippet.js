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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/ckfinder-upload-only.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/ckfinder-upload-only.js ***!
  \*************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, console, window, document */\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-ckfinder-upload-only' ), {\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'uploadImage'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tckfinder: {\n\t\t\t// eslint-disable-next-line max-len\n\t\t\tuploadUrl: 'https://ckeditor.com/apps/ckfinder/3.5.0/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar,\n\t\t\t\titem => item.buttonView && item.buttonView.label && item.buttonView.label === 'Insert image' ),\n\t\t\ttext: 'Click to insert an image.',\n\t\t\teditor\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/ckfinder-upload-only.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/ckfinder-upload-only.js"]();
/******/ 	
/******/ })()
;