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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/heading-buttons.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/heading-buttons.js ***!
  \********************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, console, document, window */\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-heading-buttons' ), {\n\t\ttoolbar: [ 'paragraph', 'heading1', 'heading2', 'heading3', '|', 'undo', 'redo' ],\n\t\theading: {\n\t\t\toptions: [\n\t\t\t\t{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },\n\t\t\t\t{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },\n\t\t\t\t{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },\n\t\t\t\t{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem(\n\t\t\t\teditor.ui.view.toolbar, item => item.label && item.label === 'Heading 1'\n\t\t\t),\n\t\t\ttext: 'Click to choose heading level.',\n\t\t\teditor,\n\t\t\ttippyOptions: {\n\t\t\t\tplacement: 'bottom-start'\n\t\t\t}\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/heading-buttons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/heading-buttons.js"]();
/******/ 	
/******/ })()
;