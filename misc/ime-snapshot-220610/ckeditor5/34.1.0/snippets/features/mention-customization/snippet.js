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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/mention-customization.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/mention-customization.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config */ \"./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals ClassicEditor, console, window, document, setTimeout */\n\n\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-mention-customization' ), {\n\t\tcloudServices: _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config__WEBPACK_IMPORTED_MODULE_0__.CS_CONFIG,\n\t\textraPlugins: [ MentionCustomization ],\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading', '|', 'bold', 'italic', '|', 'undo', 'redo'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tmention: {\n\t\t\tdropdownLimit: 4,\n\t\t\tfeeds: [\n\t\t\t\t{\n\t\t\t\t\tmarker: '@',\n\t\t\t\t\tfeed: getFeedItems,\n\t\t\t\t\titemRenderer: customItemRenderer\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\nfunction MentionCustomization( editor ) {\n\t// The upcast converter will convert view <a class=\"mention\" href=\"\" data-user-id=\"\">\n\t// elements to the model 'mention' text attribute.\n\teditor.conversion.for( 'upcast' ).elementToAttribute( {\n\t\tview: {\n\t\t\tname: 'a',\n\t\t\tkey: 'data-mention',\n\t\t\tclasses: 'mention',\n\t\t\tattributes: {\n\t\t\t\thref: true,\n\t\t\t\t'data-user-id': true\n\t\t\t}\n\t\t},\n\t\tmodel: {\n\t\t\tkey: 'mention',\n\t\t\tvalue: viewItem => {\n\t\t\t\t// The mention feature expects that the mention attribute value\n\t\t\t\t// in the model is a plain object with a set of additional attributes.\n\t\t\t\t// In order to create a proper object use the toMentionAttribute() helper method:\n\t\t\t\tconst mentionAttribute = editor.plugins.get( 'Mention' ).toMentionAttribute( viewItem, {\n\t\t\t\t\t// Add any other properties that you need.\n\t\t\t\t\tlink: viewItem.getAttribute( 'href' ),\n\t\t\t\t\tuserId: viewItem.getAttribute( 'data-user-id' )\n\t\t\t\t} );\n\n\t\t\t\treturn mentionAttribute;\n\t\t\t}\n\t\t},\n\t\tconverterPriority: 'high'\n\t} );\n\n\t// Downcast the model 'mention' text attribute to a view <a> element.\n\teditor.conversion.for( 'downcast' ).attributeToElement( {\n\t\tmodel: 'mention',\n\t\tview: ( modelAttributeValue, { writer } ) => {\n\t\t\t// Do not convert empty attributes (lack of value means no mention).\n\t\t\tif ( !modelAttributeValue ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\treturn writer.createAttributeElement( 'a', {\n\t\t\t\tclass: 'mention',\n\t\t\t\t'data-mention': modelAttributeValue.id,\n\t\t\t\t'data-user-id': modelAttributeValue.userId,\n\t\t\t\t'href': modelAttributeValue.link\n\t\t\t}, {\n\t\t\t\t// Make mention attribute to be wrapped by other attribute elements.\n\t\t\t\tpriority: 20,\n\t\t\t\t// Prevent merging mentions together.\n\t\t\t\tid: modelAttributeValue.uid\n\t\t\t} );\n\t\t},\n\t\tconverterPriority: 'high'\n\t} );\n}\n\nconst items = [\n\t{ id: '@swarley', userId: '1', name: 'Barney Stinson', link: 'https://www.imdb.com/title/tt0460649/characters/nm0000439' },\n\t{ id: '@lilypad', userId: '2', name: 'Lily Aldrin', link: 'https://www.imdb.com/title/tt0460649/characters/nm0004989' },\n\t{ id: '@marry', userId: '3', name: 'Marry Ann Lewis', link: 'https://www.imdb.com/title/tt0460649/characters/nm1130627' },\n\t{ id: '@marshmallow', userId: '4', name: 'Marshall Eriksen', link: 'https://www.imdb.com/title/tt0460649/characters/nm0781981' },\n\t{ id: '@rsparkles', userId: '5', name: 'Robin Scherbatsky', link: 'https://www.imdb.com/title/tt0460649/characters/nm1130627' },\n\t{ id: '@tdog', userId: '6', name: 'Ted Mosby', link: 'https://www.imdb.com/title/tt0460649/characters/nm1102140' }\n];\n\nfunction getFeedItems( queryText ) {\n\t// As an example of an asynchronous action, return a promise\n\t// that resolves after a 100ms timeout.\n\t// This can be a server request or any sort of delayed action.\n\treturn new Promise( resolve => {\n\t\tsetTimeout( () => {\n\t\t\tconst itemsToDisplay = items\n\t\t\t\t// Filter out the full list of all items to only those matching the query text.\n\t\t\t\t.filter( isItemMatching )\n\t\t\t\t// Return 10 items max - needed for generic queries when the list may contain hundreds of elements.\n\t\t\t\t.slice( 0, 10 );\n\n\t\t\tresolve( itemsToDisplay );\n\t\t}, 100 );\n\t} );\n\n\t// Filtering function - it uses the `name` and `username` properties of an item to find a match.\n\tfunction isItemMatching( item ) {\n\t\t// Make the search case-insensitive.\n\t\tconst searchString = queryText.toLowerCase();\n\n\t\t// Include an item in the search results if the name or username includes the current user input.\n\t\treturn (\n\t\t\titem.name.toLowerCase().includes( searchString ) ||\n\t\t\titem.id.toLowerCase().includes( searchString )\n\t\t);\n\t}\n}\n\nfunction customItemRenderer( item ) {\n\tconst itemElement = document.createElement( 'span' );\n\n\titemElement.classList.add( 'custom-item' );\n\titemElement.id = `mention-list-item-id-${ item.userId }`;\n\titemElement.textContent = `${ item.name } `;\n\n\tconst usernameElement = document.createElement( 'span' );\n\n\tusernameElement.classList.add( 'custom-item-username' );\n\tusernameElement.textContent = item.id;\n\n\titemElement.appendChild( usernameElement );\n\n\treturn itemElement;\n}\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/mention-customization.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/mention-customization.js");
/******/ 	
/******/ })()
;