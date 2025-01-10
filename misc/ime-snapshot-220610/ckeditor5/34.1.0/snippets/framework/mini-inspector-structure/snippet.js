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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-structure.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-structure.js ***!
  \******************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals DecoupledEditor, MiniCKEditorInspector, Essentials, Paragraph, console, window, document */\n\nfunction Structure( editor ) {\n\teditor.model.schema.register( 'myElement', {\n\t\tallowWhere: '$block',\n\t\tisObject: true,\n\t\tisBlock: true,\n\t\tallowContentOf: '$root'\n\t} );\n\n\teditor.conversion.for( 'downcast' ).elementToStructure( {\n\t\tmodel: 'myElement',\n\t\tview: ( modelElement, { writer } ) => {\n\t\t\treturn writer.createContainerElement( 'div', { class: 'wrapper' }, [\n\t\t\t\twriter.createContainerElement( 'div', { class: 'inner-wrapper' }, [\n\t\t\t\t\twriter.createSlot()\n\t\t\t\t] )\n\t\t\t] );\n\t\t}\n\t} );\n\n\teditor.conversion.for( 'upcast' ).add( dispatcher => {\n\t\t// Look for every view div element.\n\t\tdispatcher.on( 'element:div', ( evt, data, conversionApi ) => {\n\t\t\t// Get all the necessary items from the conversion API object.\n\t\t\tconst {\n\t\t\t\tconsumable,\n\t\t\t\twriter,\n\t\t\t\tsafeInsert,\n\t\t\t\tconvertChildren,\n\t\t\t\tupdateConversionResult\n\t\t\t} = conversionApi;\n\n\t\t\t// Get view item from data object.\n\t\t\tconst { viewItem } = data;\n\n\t\t\t// Define elements consumables.\n\t\t\tconst wrapper = { name: true, classes: 'wrapper' };\n\t\t\tconst innerWrapper = { name: true, classes: 'inner-wrapper' };\n\n\t\t\t// Tests if the view element can be consumed.\n\t\t\tif ( !consumable.test( viewItem, wrapper ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Check if there is only one child.\n\t\t\tif ( viewItem.childCount !== 1 ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Get the first child element.\n\t\t\tconst firstChildItem = viewItem.getChild( 0 );\n\n\t\t\t// Check if the first element is a div.\n\t\t\tif ( !firstChildItem.is( 'element', 'div' ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Tests if the first child element can be consumed.\n\t\t\tif ( !consumable.test( firstChildItem, innerWrapper ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Create model element.\n\t\t\tconst modelElement = writer.createElement( 'myElement' );\n\n\t\t\t// Insert element on a current cursor location.\n\t\t\tif ( !safeInsert( modelElement, data.modelCursor ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Consume the main outer wrapper element.\n\t\t\tconsumable.consume( viewItem, wrapper );\n\t\t\t// Consume the inner wrapper element.\n\t\t\tconsumable.consume( firstChildItem, innerWrapper );\n\n\t\t\t// Handle children conversion inside inner wrapper element.\n\t\t\tconvertChildren( firstChildItem, modelElement );\n\n\t\t\t// Necessary function call to help setting model range and cursor\n\t\t\t// for some specific cases when elements being split.\n\t\t\tupdateConversionResult( modelElement, data );\n\t\t} );\n\t} );\n}\n\nDecoupledEditor.create( document.querySelector( '#mini-inspector-structure' ), {\n\tplugins: [ Essentials, Paragraph, Structure ]\n} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\tMiniCKEditorInspector.attach(\n\t\t\teditor,\n\t\t\tdocument.querySelector( '#mini-inspector-structure-container' )\n\t\t);\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-structure.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-structure.js"]();
/******/ 	
/******/ })()
;