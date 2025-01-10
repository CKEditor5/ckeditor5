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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-nesting.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-nesting.js ***!
  \******************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, CKEditorPlugins, console, window, document */\n\nconst COLOR_PALETTE = [\n\t{\n\t\tcolor: 'hsl(0, 0%, 0%)',\n\t\tlabel: 'Black'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 0%, 30%)',\n\t\tlabel: 'Dim grey'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 0%, 60%)',\n\t\tlabel: 'Grey'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 0%, 90%)',\n\t\tlabel: 'Light grey'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 0%, 100%)',\n\t\tlabel: 'White',\n\t\thasBorder: true\n\t},\n\t{\n\t\tcolor: 'hsl(0, 100%, 89%)',\n\t\tlabel: 'Pink'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 75%, 60%)',\n\t\tlabel: 'Red'\n\t},\n\t{\n\t\tcolor: 'hsl(60, 75%, 60%)',\n\t\tlabel: 'Yellow'\n\t},\n\t{\n\t\tcolor: 'hsl(27, 100%, 85%)',\n\t\tlabel: 'Light Orange'\n\t},\n\t{\n\t\tcolor: 'hsl(30, 75%, 60%)',\n\t\tlabel: 'Orange'\n\t},\n\t{\n\t\tcolor: 'hsl(90, 75%, 60%)',\n\t\tlabel: 'Light green'\n\t},\n\t{\n\t\tcolor: 'hsl(120, 75%, 60%)',\n\t\tlabel: 'Green'\n\t},\n\t{\n\t\tcolor: 'hsl(150, 75%, 60%)',\n\t\tlabel: 'Aquamarine'\n\t},\n\t{\n\t\tcolor: 'hsl(120, 100%, 25%)',\n\t\tlabel: 'Dark green'\n\t},\n\t{\n\t\tcolor: 'hsl(180, 75%, 60%)',\n\t\tlabel: 'Turquoise'\n\t},\n\t{\n\t\tcolor: 'hsl(180, 52%, 58%)',\n\t\tlabel: 'Light Aqua'\n\t},\n\t{\n\t\tcolor: 'hsl(180, 97%, 31%)',\n\t\tlabel: 'Aqua'\n\t},\n\t{\n\t\tcolor: 'hsl(210, 75%, 60%)',\n\t\tlabel: 'Light blue'\n\t},\n\t{\n\t\tcolor: 'hsl(240, 75%, 60%)',\n\t\tlabel: 'Blue'\n\t},\n\t{\n\t\tcolor: 'hsl(270, 75%, 60%)',\n\t\tlabel: 'Purple'\n\t}\n];\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-table-nesting' ), {\n\t\textraPlugins: [\n\t\t\tCKEditorPlugins.TableProperties,\n\t\t\tCKEditorPlugins.TableCellProperties\n\t\t],\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ],\n\t\t\ttableProperties: {\n\t\t\t\tborderColors: COLOR_PALETTE,\n\t\t\t\tbackgroundColors: COLOR_PALETTE\n\t\t\t},\n\t\t\ttableCellProperties: {\n\t\t\t\tborderColors: COLOR_PALETTE,\n\t\t\t\tbackgroundColors: COLOR_PALETTE\n\t\t\t}\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:block',\n\t\t\t\t'imageStyle:side',\n\t\t\t\t'|',\n\t\t\t\t'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editorStyling = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar,\n\t\t\t\titem => item.buttonView && item.buttonView.label && item.buttonView.label === 'Insert table' ),\n\t\t\ttext: 'Click to insert a nested table in a selected table cell.',\n\t\t\teditor,\n\t\t\ttippyOptions: {\n\t\t\t\tplacement: 'bottom-start'\n\t\t\t}\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-nesting.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-nesting.js"]();
/******/ 	
/******/ })()
;