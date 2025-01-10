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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-default-properties.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-default-properties.js ***!
  \*****************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, CKEditorPlugins, console, window, document */\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-table-default-properties' ), {\n\t\textraPlugins: [\n\t\t\tCKEditorPlugins.TableProperties,\n\t\t\tCKEditorPlugins.TableCellProperties\n\t\t],\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ],\n\t\t\ttableProperties: {\n\t\t\t\tdefaultProperties: {\n\t\t\t\t\tborderStyle: 'dashed',\n\t\t\t\t\tborderColor: 'hsl(90, 75%, 60%)',\n\t\t\t\t\tborderWidth: '3px',\n\t\t\t\t\talignment: 'left',\n\t\t\t\t\twidth: '550px',\n\t\t\t\t\theight: '450px'\n\t\t\t\t}\n\t\t\t},\n\t\t\ttableCellProperties: {\n\t\t\t\tdefaultProperties: {\n\t\t\t\t\thorizontalAlignment: 'center',\n\t\t\t\t\tverticalAlignment: 'bottom',\n\t\t\t\t\tpadding: '10px'\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:block',\n\t\t\t\t'imageStyle:side',\n\t\t\t\t'|',\n\t\t\t\t'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tplaceholder: 'Insert the new table with the default styles applied.'\n\t} )\n\t.then( editor => {\n\t\twindow.editorDefaultStyles = editor;\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-default-properties.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-default-properties.js"]();
/******/ 	
/******/ })()
;