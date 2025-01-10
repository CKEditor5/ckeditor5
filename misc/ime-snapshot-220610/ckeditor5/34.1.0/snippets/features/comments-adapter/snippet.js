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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-adapter.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-adapter.js ***!
  \*********************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md.\n */\n\n/* globals setTimeout, window, document, EditorWatchdog, ClassicEditor, LICENSE_KEY */\n\n// Application data will be available under a global variable `appData`.\nconst appData = {\n\t// Users data.\n\tusers: [\n\t\t{\n\t\t\tid: 'user-1',\n\t\t\tname: 'Joe Doe',\n\t\t\tavatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'\n\t\t},\n\t\t{\n\t\t\tid: 'user-2',\n\t\t\tname: 'Ella Harper',\n\t\t\tavatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'\n\t\t}\n\t],\n\n\t// The ID of the current user.\n\tuserId: 'user-1'\n};\n\nclass CommentsAdapter {\n\tconstructor( editor ) {\n\t\tthis.editor = editor;\n\t}\n\n\tinit() {\n\t\tconst usersPlugin = this.editor.plugins.get( 'Users' );\n\t\tconst commentsRepositoryPlugin = this.editor.plugins.get( 'CommentsRepository' );\n\n\t\t// Load the users data.\n\t\tfor ( const user of appData.users ) {\n\t\t\tusersPlugin.addUser( user );\n\t\t}\n\n\t\t// Set the current user.\n\t\tusersPlugin.defineMe( 'user-1' );\n\n\t\tcommentsRepositoryPlugin.adapter = {\n\t\t\taddComment: data => showPending( 'addComment()', data ),\n\t\t\tupdateComment: data => showPending( 'updateComment()', data ),\n\t\t\tremoveComment: data => showPending( 'removeComment()', data ),\n\n\t\t\tgetCommentThread( data ) {\n\t\t\t\tconst initialCommentThreadData = {\n\t\t\t\t\tthreadId: data.threadId,\n\t\t\t\t\tcomments: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcommentId: 'comment-1',\n\t\t\t\t\t\t\tauthorId: 'user-2',\n\t\t\t\t\t\t\tcontent: '<p>Are we sure we want to use a made-up disorder name?</p>',\n\t\t\t\t\t\t\tcreatedAt: new Date(),\n\t\t\t\t\t\t\tattributes: {}\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\tisFromAdapter: true\n\t\t\t\t};\n\n\t\t\t\treturn showPending( 'getCommentThread()', data ).then( () => initialCommentThreadData );\n\t\t\t}\n\t\t};\n\t}\n}\n\nconst barEl = document.getElementById( 'comments-adapter-console' );\nlet consoleUpdates = 0;\n\nfunction showPending( methodName, data ) {\n\tconst actionNameEl = document.createElement( 'div' );\n\tconst dataEl = document.createElement( 'div' );\n\n\tconsoleUpdates++;\n\tbarEl.classList.add( 'updated' );\n\n\tactionNameEl.className = 'comments-adapter-console__action';\n\tactionNameEl.textContent = methodName;\n\n\tdataEl.className = 'comments-adapter-console__data';\n\tdataEl.textContent = JSON.stringify( data );\n\n\tbarEl.innerHTML = '';\n\n\tbarEl.appendChild( actionNameEl );\n\tbarEl.appendChild( dataEl );\n\n\tsetTimeout( () => {\n\t\tif ( --consoleUpdates == 0 ) {\n\t\t\tbarEl.classList.remove( 'updated' );\n\t\t}\n\t}, 500 );\n\n\treturn Promise.resolve();\n}\n\nconst initialData =\n\t`<h2>\n\t\t<comment-start name=\"thread-1\"></comment-start>\n\t\tBilingual Personality Disorder\n\t\t<comment-end name=\"thread-1\"></comment-end>\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.\n\t\tAs recent studies show, the language you speak has more effects on you than you realize.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\tbehavior, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class=\"image image-style-side\">\n\t\t<img src=\"../../../assets/img/collaboration-demo-img.jpg\"\n\t\t\tsrcset=\"../../../assets/img/collaboration-demo-img.jpg, ../../../assets/img/collaboration-demo-img_2x.jpg 2x\">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href=\"https://en.wikipedia.org/wiki/Lateralization_of_brain_function\">since we already know</a>\n\t\tthat different regions of the brain become more active depending on the activity.\n\t\tThe structure, information and especially <strong>the culture</strong> of languages varies substantially\n\t\tand the language a person speaks is an essential element of daily life.\n\t</p>`;\n\nconst watchdog = new EditorWatchdog( ClassicEditor );\nwindow.watchdog = watchdog;\n\nwatchdog.create( document.querySelector( '.comments-adapter .editor' ), {\n\tinitialData,\n\tplugins: [\n\t\t'Essentials', 'Paragraph', 'Bold', 'Italic', 'Heading', 'Link', 'Image',\n\t\t'ImageToolbar', 'ImageCaption', 'ImageStyle', 'Comments', CommentsAdapter\n\t],\n\ttoolbar: [ 'heading', '|', 'bold', 'italic', 'link', '|', 'comment' ],\n\tlicenseKey: \"6JrRJYbd2abuLkZ3Rjc08fxjorgrqvjIZRrcDfbMRM0+xP4QqQK9XbgajZNcenYANd/wR2f7ukc=\",\n\tsidebar: {\n\t\tcontainer: document.querySelector( '.comments-adapter .sidebar' )\n\t},\n\timage: {\n\t\ttoolbar: [\n\t\t\t'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|',\n\t\t\t'toggleImageCaption', 'imageTextAlternative', '|',\n\t\t\t'comment'\n\t\t]\n\t},\n\tui: {\n\t\tviewportOffset: {\n\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t}\n\t},\n\tcomments: {\n\t\teditorConfig: {\n\t\t\textraPlugins: ClassicEditor.builtinPlugins.filter( plugin => {\n\t\t\t\treturn [ 'Bold', 'Italic', 'Underline', 'List', 'Autoformat' ].includes( plugin.pluginName );\n\t\t\t} )\n\t\t}\n\t}\n} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-adapter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-adapter.js"]();
/******/ 	
/******/ })()
;