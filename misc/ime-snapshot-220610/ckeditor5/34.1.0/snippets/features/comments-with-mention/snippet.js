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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-with-mention.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-with-mention.js ***!
  \**************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md.\n */\n\n/* globals window, document, CS_CONFIG, EditorWatchdog, ClassicEditor, LICENSE_KEY */\n\n// Application data will be available under a global variable `appData`.\nconst appData = {\n\t// Users data.\n\tusers: [\n\t\t{\n\t\t\tid: 'user-1',\n\t\t\tname: 'Joe Doe',\n\t\t\tavatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'\n\t\t},\n\t\t{\n\t\t\tid: 'user-2',\n\t\t\tname: 'Ella Harper',\n\t\t\tavatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'\n\t\t}\n\t],\n\n\t// The ID of the current user.\n\tuserId: 'user-1'\n};\n\nclass CommentsAdapter {\n\tconstructor( editor ) {\n\t\tthis.editor = editor;\n\t}\n\n\tstatic get requires() {\n\t\treturn [ 'CommentsRepository' ];\n\t}\n\n\tinit() {\n\t\tconst usersPlugin = this.editor.plugins.get( 'Users' );\n\t\tconst commentsRepositoryPlugin = this.editor.plugins.get( 'CommentsRepository' );\n\n\t\t// Load the users data.\n\t\tfor ( const user of appData.users ) {\n\t\t\tusersPlugin.addUser( user );\n\t\t}\n\n\t\t// Set the current user.\n\t\tusersPlugin.defineMe( 'user-1' );\n\n\t\tcommentsRepositoryPlugin.adapter = {\n\t\t\taddComment: () => Promise.resolve(),\n\t\t\tupdateComment: () => Promise.resolve(),\n\t\t\tremoveComment: () => Promise.resolve(),\n\n\t\t\tgetCommentThread() {\n\t\t\t\tconst initialCommentThreadData = {\n\t\t\t\t\tthreadId: 'thread-1',\n\t\t\t\t\tcomments: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcommentId: 'comment-1',\n\t\t\t\t\t\t\tauthorId: 'user-2',\n\t\t\t\t\t\t\tcontent: '<p>Are we sure we want to use a made-up disorder name?</p>',\n\t\t\t\t\t\t\tcreatedAt: new Date()\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcommentId: 'comment-2',\n\t\t\t\t\t\t\tauthorId: 'user-2',\n\t\t\t\t\t\t\tcontent: '<p>I believe <span class=\"mention\" data-mention=\"@Ted\">@Ted</span> wants...</p>',\n\t\t\t\t\t\t\tcreatedAt: new Date()\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t};\n\n\t\t\t\treturn Promise.resolve( initialCommentThreadData );\n\t\t\t}\n\t\t};\n\t}\n}\n\nconst initialData =\n\t`<h2>\n\t\t<comment-start name=\"thread-1\"></comment-start>\n\t\tBilingual Personality Disorder\n\t\t<comment-end name=\"thread-1\"></comment-end>\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.\n\t\tAs recent studies show, the language you speak has more effects on you than you realize.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\tbehavior, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class=\"image image-style-side\">\n\t\t<img src=\"../../../assets/img/collaboration-demo-img.jpg\">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href=\"https://en.wikipedia.org/wiki/Lateralization_of_brain_function\">since we already know</a>\n\t\tthat different regions of the brain become more active depending on the activity.\n\t\tThe structure, information and especially <strong>the culture</strong> of languages varies substantially\n\t\tand the language a person speaks is an essential element of daily life.\n\t</p>`;\n\nconst watchdog = new EditorWatchdog( ClassicEditor );\nwindow.watchdog = watchdog;\n\nwatchdog.create( document.querySelector( '.comments-mention .editor' ), {\n\tinitialData,\n\tplugins: [\n\t\t'Essentials', 'Autoformat', 'Heading', 'Bold', 'Italic', 'Link', 'List', 'EasyImage', 'Image', 'BlockQuote',\n\t\t'Table', 'TableToolbar', 'MediaEmbed', 'ImageToolbar', 'ImageStyle', 'Comments', CommentsAdapter\n\t],\n\ttoolbar: {\n\t\titems: [\n\t\t\t'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'uploadImage', 'blockquote', '|',\n\t\t\t'undo', 'redo', '|', 'insertTable', 'mediaEmbed', '|', 'comment'\n\t\t]\n\t},\n\tlicenseKey: \"6JrRJYbd2abuLkZ3Rjc08fxjorgrqvjIZRrcDfbMRM0+xP4QqQK9XbgajZNcenYANd/wR2f7ukc=\",\n\tsidebar: {\n\t\tcontainer: document.querySelector( '.comments-mention .sidebar' )\n\t},\n\timage: {\n\t\ttoolbar: [\n\t\t\t'imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|',\n\t\t\t'imageTextAlternative', '|', 'comment'\n\t\t]\n\t},\n\tcomments: {\n\t\teditorConfig: {\n\t\t\textraPlugins: [ window.MentionPlugin ],\n\t\t\tmention: {\n\t\t\t\tfeeds: [\n\t\t\t\t\t{\n\t\t\t\t\t\tmarker: '@',\n\t\t\t\t\t\tfeed: [ '@Barney', '@Lily', '@Marshall', '@Robin', '@Ted' ],\n\t\t\t\t\t\tminimumCharacters: 1\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t},\n\tcloudServices: {\"tokenUrl\":\"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J\",\"uploadUrl\":\"https://33333.cke-cs.com/easyimage/upload/\",\"webSocketUrl\":\"33333.cke-cs.com/ws\"},\n\tui: {\n\t\tviewportOffset: {\n\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t}\n\t}\n} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-with-mention.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/comments-with-mention.js"]();
/******/ 	
/******/ })()
;