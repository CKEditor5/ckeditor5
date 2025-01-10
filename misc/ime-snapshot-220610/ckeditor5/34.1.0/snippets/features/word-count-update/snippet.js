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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/word-count-update.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/word-count-update.js ***!
  \**********************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* global window, document, console, BalloonEditor */\n\nconst maxCharacters = 120;\nconst container = document.querySelector( '.demo-update' );\nconst progressCircle = document.querySelector( '.demo-update__chart__circle' );\nconst charactersBox = document.querySelector( '.demo-update__chart__characters' );\nconst wordsBox = document.querySelector( '.demo-update__words' );\nconst circleCircumference = Math.floor( 2 * Math.PI * progressCircle.getAttribute( 'r' ) );\nconst sendButton = document.querySelector( '.demo-update__send' );\n\nsendButton.addEventListener( 'click', () => {\n\twindow.alert( 'Post sent!' ); // eslint-disable-line no-alert\n} );\n\nBalloonEditor\n\t.create( document.querySelector( '#demo-update__editor' ), {\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading',\n\t\t\t\t'|',\n\t\t\t\t'bold',\n\t\t\t\t'italic',\n\t\t\t\t'bulletedList',\n\t\t\t\t'numberedList',\n\t\t\t\t'|',\n\t\t\t\t'outdent',\n\t\t\t\t'indent',\n\t\t\t\t'|',\n\t\t\t\t'blockQuote',\n\t\t\t\t'link',\n\t\t\t\t'|',\n\t\t\t\t'mediaEmbed',\n\t\t\t\t'insertTable',\n\t\t\t\t'|',\n\t\t\t\t'undo',\n\t\t\t\t'redo'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\tplaceholder: 'Text of the post',\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]\n\t\t},\n\t\twordCount: {\n\t\t\tonUpdate: stats => {\n\t\t\t\tconst charactersProgress = stats.characters / maxCharacters * circleCircumference;\n\t\t\t\tconst isLimitExceeded = stats.characters > maxCharacters;\n\t\t\t\tconst isCloseToLimit = !isLimitExceeded && stats.characters > maxCharacters * .8;\n\t\t\t\tconst circleDashArray = Math.min( charactersProgress, circleCircumference );\n\n\t\t\t\t// Set the stroke of the circle to show how many characters were typed.\n\t\t\t\tprogressCircle.setAttribute( 'stroke-dasharray', `${ circleDashArray },${ circleCircumference }` );\n\n\t\t\t\t// Display the number of characters in the progress chart. When the limit is exceeded,\n\t\t\t\t// display how many characters should be removed.\n\t\t\t\tif ( isLimitExceeded ) {\n\t\t\t\t\tcharactersBox.textContent = `-${ stats.characters - maxCharacters }`;\n\t\t\t\t} else {\n\t\t\t\t\tcharactersBox.textContent = stats.characters;\n\t\t\t\t}\n\n\t\t\t\twordsBox.textContent = `Words in the post: ${ stats.words }`;\n\n\t\t\t\t// If the content length is close to the characters limit, add a CSS class to warn the user.\n\t\t\t\tcontainer.classList.toggle( 'demo-update__limit-close', isCloseToLimit );\n\n\t\t\t\t// If the character limit is exceeded, add a CSS class that makes the content's background red.\n\t\t\t\tcontainer.classList.toggle( 'demo-update__limit-exceeded', isLimitExceeded );\n\n\t\t\t\t// If the character limit is exceeded, disable the send button.\n\t\t\t\tsendButton.toggleAttribute( 'disabled', isLimitExceeded );\n\t\t\t}\n\t\t}\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/word-count-update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/word-count-update.js"]();
/******/ 	
/******/ })()
;