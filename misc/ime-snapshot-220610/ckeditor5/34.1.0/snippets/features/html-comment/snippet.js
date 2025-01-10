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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/html-comment.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/html-comment.js ***!
  \*****************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals console, window, document, ClassicEditor, HtmlComment */\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-html-comment' ), {\n\t\textraPlugins: [ HtmlComment ],\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:inline',\n\t\t\t\t'imageStyle:wrapText',\n\t\t\t\t'imageStyle:breakText',\n\t\t\t\t'|',\n\t\t\t\t'toggleImageCaption',\n\t\t\t\t'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor2 = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar,\n\t\t\t\titem => item.label && item.label === 'Source' ),\n\t\t\ttext: 'Switch to the source mode to check out the source of the content and play with it.',\n\t\t\teditor\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/html-comment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/html-comment.js"]();
/******/ 	
/******/ })()
;