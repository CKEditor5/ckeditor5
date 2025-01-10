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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-heading-interactive.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-heading-interactive.js ***!
  \****************************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals DecoupledEditor, MiniCKEditorInspector, Essentials, console, window, document */\n\nfunction CustomHeading( editor ) {\n\teditor.model.schema.register( 'heading', {\n\t\tallowAttributes: [ 'level' ],\n\t\tinheritAllFrom: '$block'\n\t} );\n\n\teditor.conversion.for( 'upcast' ).elementToElement( {\n\t\tview: 'h1',\n\t\tmodel: ( viewElement, { writer } ) => {\n\t\t\treturn writer.createElement( 'heading', { level: '1' } );\n\t\t}\n\t} );\n\n\teditor.conversion.for( 'downcast' ).elementToElement( {\n\t\tmodel: {\n\t\t\tname: 'heading',\n\t\t\tattributes: [ 'level' ]\n\t\t},\n\t\tview: ( modelElement, { writer } ) => {\n\t\t\treturn writer.createContainerElement(\n\t\t\t\t'h' + modelElement.getAttribute( 'level' )\n\t\t\t);\n\t\t}\n\t} );\n\n\tconst dropdown = document.getElementById(\n\t\t'mini-inspector-heading-interactive-dropdown'\n\t);\n\n\tdropdown.addEventListener( 'change', event => {\n\t\teditor.model.change( writer => {\n\t\t\twriter.setAttribute(\n\t\t\t\t'level',\n\t\t\t\tevent.target.value,\n\t\t\t\teditor.model.document.getRoot().getChild( 0 )\n\t\t\t);\n\t\t} );\n\t} );\n}\n\nDecoupledEditor.create( document.querySelector( '#mini-inspector-heading-interactive' ), {\n\tplugins: [ Essentials, CustomHeading ]\n} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\tMiniCKEditorInspector.attach(\n\t\t\teditor,\n\t\t\tdocument.querySelector( '#mini-inspector-heading-interactive-container' )\n\t\t);\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-heading-interactive.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-heading-interactive.js"]();
/******/ 	
/******/ })()
;