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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-styling-colors.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-styling-colors.js ***!
  \*************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, CKEditorPlugins, console, window, document */\n\nconst customColorPalette = [\n\t{\n\t\tcolor: 'hsl(4, 90%, 58%)',\n\t\tlabel: 'Red'\n\t},\n\t{\n\t\tcolor: 'hsl(340, 82%, 52%)',\n\t\tlabel: 'Pink'\n\t},\n\t{\n\t\tcolor: 'hsl(291, 64%, 42%)',\n\t\tlabel: 'Purple'\n\t},\n\t{\n\t\tcolor: 'hsl(262, 52%, 47%)',\n\t\tlabel: 'Deep Purple'\n\t},\n\t{\n\t\tcolor: 'hsl(231, 48%, 48%)',\n\t\tlabel: 'Indigo'\n\t},\n\t{\n\t\tcolor: 'hsl(207, 90%, 54%)',\n\t\tlabel: 'Blue'\n\t},\n\t{\n\t\tcolor: 'hsl(199, 98%, 48%)',\n\t\tlabel: 'Light Blue'\n\t},\n\t{\n\t\tcolor: 'hsl(187, 100%, 42%)',\n\t\tlabel: 'Cyan'\n\t},\n\t{\n\t\tcolor: 'hsl(174, 100%, 29%)',\n\t\tlabel: 'Teal'\n\t},\n\t{\n\t\tcolor: 'hsl(122, 39%, 49%)',\n\t\tlabel: 'Green'\n\t},\n\t{\n\t\tcolor: 'hsl(88, 50%, 53%)',\n\t\tlabel: 'Light Green'\n\t},\n\t{\n\t\tcolor: 'hsl(66, 70%, 54%)',\n\t\tlabel: 'Lime'\n\t},\n\t{\n\t\tcolor: 'hsl(49, 98%, 60%)',\n\t\tlabel: 'Yellow'\n\t},\n\t{\n\t\tcolor: 'hsl(45, 100%, 51%)',\n\t\tlabel: 'Amber'\n\t},\n\t{\n\t\tcolor: 'hsl(36, 100%, 50%)',\n\t\tlabel: 'Orange'\n\t},\n\t{\n\t\tcolor: 'hsl(14, 91%, 54%)',\n\t\tlabel: 'Deep Orange'\n\t},\n\t{\n\t\tcolor: 'hsl(15, 25%, 34%)',\n\t\tlabel: 'Brown'\n\t},\n\t{\n\t\tcolor: 'hsl(0, 0%, 62%)',\n\t\tlabel: 'Grey'\n\t},\n\t{\n\t\tcolor: 'hsl(200, 18%, 46%)',\n\t\tlabel: 'Blue Grey'\n\t},\n\t{\n\t\tcolor: 'hsl(200, 18%, 100%)',\n\t\tlabel: 'White'\n\t}\n];\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-table-styling-colors' ), {\n\t\textraPlugins: [\n\t\t\tCKEditorPlugins.TableProperties,\n\t\t\tCKEditorPlugins.TableCellProperties\n\t\t],\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ],\n\t\t\ttableProperties: {\n\t\t\t\tborderColors: customColorPalette,\n\t\t\t\tbackgroundColors: customColorPalette\n\t\t\t},\n\t\t\ttableCellProperties: {\n\t\t\t\tborderColors: customColorPalette,\n\t\t\t\tbackgroundColors: customColorPalette\n\t\t\t}\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:inline',\n\t\t\t\t'imageStyle:block',\n\t\t\t\t'imageStyle:side',\n\t\t\t\t'|',\n\t\t\t\t'toggleImageCaption',\n\t\t\t\t'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editorStyling = editor;\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-styling-colors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/table-styling-colors.js"]();
/******/ 	
/******/ })()
;