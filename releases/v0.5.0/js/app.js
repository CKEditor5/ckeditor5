/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

// Impromptu namespace for the sample.
var _ = {
	showCompatibilityMessage: function() {
		var editorElement = document.querySelector( '#editor' );
		var message = document.createElement( 'p' );

		message.innerHTML = '\
			<h2>That\'s a shame...</h2>\
			<p>We\'re not proud of this but this early developer preview does not work in your web browser.</p>\
			<p>Please consider using <a href="https://www.google.com/chrome/">Google Chrome</a> instead.</p>\
			<p>We\'re terribly sorry.</p>\
		';

		message.classList.add( 'message' );

		editorElement.style.display = 'none';
		editorElement.parentNode.insertBefore( message, editorElement );
	}
};