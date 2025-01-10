/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import ArticlePreset from '@ckeditor/ckeditor5-presets/src/article';

try {
	ClassicEditor.create( document.querySelector( '#editor' ), {
		plugins: [
			Autoformat,
			ArticlePreset
		],
		toolbar: [ 'headings', 'bold', 'italic', 'link', 'unlink', 'bulletedList', 'numberedList', 'undo', 'redo' ]
	} ).then( ( editor ) => {
		window.editor = editor;
	} )
	.catch( ( err ) => {
		console.error( err.stack );
	} );
} catch ( err ) {
	showCompatibilityMessage();
}

function showCompatibilityMessage() {
	const editorElement = document.querySelector( '#editor' );
	const message = document.createElement( 'p' );

	message.innerHTML = `
		<h2>That's a shame...</h2>
		<p>We're not proud of this but this early developer preview does not work in your web browser.</p>
		<p>Please consider using <a href="https://www.google.com/chrome/">Google Chrome</a> instead.</p>
		<p>We're terribly sorry.</p>
	`;

	message.classList.add( 'message' );

	editorElement.style.display = 'none';
	editorElement.parentNode.insertBefore( message, editorElement );
}
