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

/***/ "./docs/_snippets/assets.js":
/*!**********************************!*\
  !*** ./docs/_snippets/assets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var is_relative_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-relative-url */ \"./node_modules/is-relative-url/index.js\");\n/* harmony import */ var is_relative_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_relative_url__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tour_balloon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tour-balloon.css */ \"./docs/_snippets/tour-balloon.css\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* global console, window, document */\n\n\n\n\n\n/**\n * Attaches a tour balloon with a description to any DOM node element.\n *\n * **Tip**: Use the global `findToolbarItem()` method to easily pick toolbar items.\n *\n * Examples:\n *\n *\t\t// Using a comparison callback to search for an item.\n *\t\twindow.attachTourBalloon( {\n *\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label === 'Insert HTML' ),\n *\t\t\ttext: 'Tour text to help users discover the feature.',\n *\t\t\teditor\n *\t\t} );\n *\n *\t\t// Using a toolbar item index.\n *\t\twindow.attachTourBalloon( {\n *\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar, 5 ),\n *\t\t\ttext: 'Tour text to help users discover the feature.',\n *\t\t\teditor\n *\t\t} );\n *\n *\t\t// Specifying options of tippy.js, e.g. to customize the placement of the balloon.\n *\t\t// See https://atomiks.github.io/tippyjs/v6/all-props/ for all options.\n *\t\twindow.attachTourBalloon( {\n *\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar, 5 ),\n *\t\t\ttext: 'Tour text to help users discover the feature.',\n *\t\t\teditor,\n *\t\t\ttippyOptions: {\n *\t\t\t\tplacement: 'bottom-start'\n *\t\t\t}\n *\t\t} );\n *\n * @param {Object} options Balloon options.\n * @param {HTMLElement} options.target A DOM node the balloon will point to.\n * @param {String} options.text The description to be shown in the tooltip.\n * @param {module:core/editor/editor~Editor} options.editor The editor instance.\n * @param {Object} [options.tippyOptions] Additional [configuration of tippy.js](https://atomiks.github.io/tippyjs/v6/all-props/).\n */\nwindow.attachTourBalloon = function( { target, text, editor, tippyOptions } ) {\n\tif ( !target ) {\n\t\tconsole.warn( '[attachTourBalloon] The target DOM node for the feature tour balloon does not exist.', { text } );\n\n\t\treturn;\n\t}\n\n\tif ( !target.offsetParent ) {\n\t\tconsole.warn( '[attachTourBalloon] The target DOM node is invisible and the balloon could not be attached.', { target, text } );\n\n\t\treturn;\n\t}\n\n\tconst content = `\n\t\t<div class=\"tippy-content__message\">${ text }</div>\n\t\t<button class=\"ck ck-button tippy-content__close-button ck-off\" title=\"Close\"></button>\n\t`;\n\n\tconst options = Object.assign( {}, {\n\t\tplacement: 'bottom',\n\t\ttrigger: 'manual',\n\t\thideOnClick: false,\n\t\tallowHTML: true,\n\t\tmaxWidth: 280,\n\t\tshowOnCreate: true,\n\t\tinteractive: true,\n\t\ttheme: 'light-border',\n\t\tzIndex: 1,\n\t\tappendTo: () => document.body\n\t}, tippyOptions );\n\n\tconst tooltip = window.umberto.createTooltip( target, content, options );\n\n\tfor ( const root of editor.editing.view.document.roots ) {\n\t\troot.once( 'change:isFocused', ( evt, name, isFocused ) => {\n\t\t\tif ( isFocused ) {\n\t\t\t\ttooltip.hide();\n\t\t\t}\n\t\t} );\n\t}\n};\n\n/**\n * Searches for a toolbar item and returns the first one matching the criteria.\n *\n * You can search for toolbar items using a comparison callback:\n *\n *\t\twindow.findToolbarItem( editor.ui.view.toolbar, item => item.label && item.label.startsWith( 'Insert HTML' ) );\n *\n * Or you pick toolbar items by their index:\n *\n *\t\twindow.findToolbarItem( editor.ui.view.toolbar, 3 );\n *\n * @param {module:ui/toolbar/toolbarview~ToolbarView} toolbarView Toolbar instance.\n * @param {Number|Function} indexOrCallback Index of a toolbar item or a callback passed to `ViewCollection#find`.\n * @returns {HTMLElement|undefined} HTML element or undefined\n */\nwindow.findToolbarItem = function( toolbarView, indexOrCallback ) {\n\tconst items = toolbarView.items;\n\tlet item;\n\n\tif ( typeof indexOrCallback === 'function' ) {\n\t\titem = items.find( indexOrCallback );\n\t} else {\n\t\titem = items.get( indexOrCallback );\n\t}\n\n\treturn item ? item.element : undefined;\n};\n\n// Replaces all relative paths inside the content container with absolute URLs\n// to avoid a broken user experience when copying images between editors.\n// It parses all `<img>` elements and `<source>` elements if they belong to the `<picture>` node.\n( () => {\n\t[ ...document.querySelectorAll( '.main__content-inner img' ) ]\n\t\t.filter( img => is_relative_url__WEBPACK_IMPORTED_MODULE_0___default()( img.getAttribute( 'src' ) ) )\n\t\t.forEach( img => {\n\t\t\t// Update `<img src=\"...\">`.\n\t\t\timg.setAttribute( 'src', img.src );\n\n\t\t\t// Update `<img srcset=\"...\">`.\n\t\t\tif ( img.srcset ) {\n\t\t\t\tupdateSrcSetAttribute( img, img.baseURI );\n\t\t\t}\n\n\t\t\t// Update `<source>` elements if grouped in the `<picture>` element.\n\t\t\tif ( img.parentElement instanceof window.HTMLPictureElement ) {\n\t\t\t\t[ ...img.parentElement.querySelectorAll( 'source' ) ]\n\t\t\t\t\t.forEach( source => {\n\t\t\t\t\t\tupdateSrcSetAttribute( source, img.baseURI );\n\t\t\t\t\t} );\n\t\t\t}\n\t\t} );\n\n\tfunction updateSrcSetAttribute( element, baseURI ) {\n\t\tconst srcset = element.srcset.split( ',' )\n\t\t\t.map( item => {\n\t\t\t\tconst [ relativeUrl, ratio ] = item.trim().split( ' ' );\n\n\t\t\t\tif ( !is_relative_url__WEBPACK_IMPORTED_MODULE_0___default()( relativeUrl ) ) {\n\t\t\t\t\treturn item;\n\t\t\t\t}\n\n\t\t\t\tconst absoluteUrl = new window.URL( relativeUrl, baseURI ).toString();\n\n\t\t\t\treturn [ absoluteUrl, ratio ].filter( i => i ).join( ' ' );\n\t\t\t} )\n\t\t\t.join( ', ' );\n\n\t\telement.setAttribute( 'srcset', srcset );\n\t}\n} )();\n\n\n//# sourceURL=webpack://ckeditor5/./docs/_snippets/assets.js?");

/***/ }),

/***/ "./node_modules/is-absolute-url/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-absolute-url/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = url => {\n\tif (typeof url !== 'string') {\n\t\tthrow new TypeError(`Expected a \\`string\\`, got \\`${typeof url}\\``);\n\t}\n\n\t// Don't match Windows paths `c:\\`\n\tif (/^[a-zA-Z]:\\\\/.test(url)) {\n\t\treturn false;\n\t}\n\n\t// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1\n\t// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3\n\treturn /^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url);\n};\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/is-absolute-url/index.js?");

/***/ }),

/***/ "./node_modules/is-relative-url/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-relative-url/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst isAbsoluteUrl = __webpack_require__(/*! is-absolute-url */ \"./node_modules/is-absolute-url/index.js\");\n\nmodule.exports = url => !isAbsoluteUrl(url);\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/is-relative-url/index.js?");

/***/ }),

/***/ "./docs/_snippets/tour-balloon.css":
/*!*****************************************!*\
  !*** ./docs/_snippets/tour-balloon.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ckeditor5/./docs/_snippets/tour-balloon.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./docs/_snippets/assets.js");
/******/ 	
/******/ })()
;