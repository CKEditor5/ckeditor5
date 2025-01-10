/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyimagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import uid from '@ckeditor/ckeditor5-utils/src/uid';

getToken()
	.then( token => {
		ClassicEditor
			.create( document.querySelector( '#editor' ), {
				plugins: [
					EssentialsPlugin,
					AutoformatPlugin,
					BoldPlugin,
					ItalicPlugin,
					BlockquotePlugin,
					EasyimagePlugin,
					HeadingPlugin,
					ImagePlugin,
					ImagecaptionPlugin,
					ImagestylePlugin,
					ImagetoolbarPlugin,
					LinkPlugin,
					ListPlugin,
					ParagraphPlugin
				],
				toolbar: {
					items: [
						'headings',
						'bold',
						'italic',
						'link',
						'bulletedList',
						'numberedList',
						'blockQuote',
						'undo',
						'redo'
					]
				},
				image: {
					toolbar: [
						'imageStyleFull',
						'imageStyleSide',
						'|',
						'imageTextAlternative'
					]
				},
				cloudServices: { token }
			} )
			.then( ( editor ) => {
				window.editor = editor;
			} );
	} )
	.catch( ( err ) => {
		console.error( err.stack );
		showCompatibilityMessage();
	} );


function showCompatibilityMessage() {
	const editorElement = document.querySelector( '#editor' );
	const message = document.createElement( 'p' );

	message.innerHTML = `
		<h2>That's a shame...</h2>
		<p>We're not proud of this but this developer preview does not work in your web browser.</p>
		<p>If you think that this is inacceptable, please <a href="https://github.com/ckeditor/ckeditor5/issues/new">report this to us</a>.</p>
	`;

	message.classList.add( 'message' );

	editorElement.style.display = 'none';
	editorElement.parentNode.insertBefore( message, editorElement );
}

function getToken() {
	// WARNING: The URL below should not be used for any other purpose than Easy Image plugin development.
	// Images uploaded using the testing token service may be deleted automatically at any moment.
	// If you would like to try the Easy Image service, please wait until the official launch of Easy Image and sign up for a free trial.
	// Images uploaded during the free trial will not be deleted for the whole trial period and additionally the trial service can be converted
	// into a subscription at any moment, allowing you to preserve all uploaded images.
	const CLOUD_SERVICES_TOKEN_URL = 'https://j2sns7jmy0.execute-api.eu-central-1.amazonaws.com/prod/token';

	return new Promise( ( resolve, reject ) => {
		const xhr = new XMLHttpRequest();
		const userId = uid();

		xhr.open( 'GET', `${ CLOUD_SERVICES_TOKEN_URL }?user.id=${ userId }` );

		xhr.onload = () => {
			if ( xhr.status >= 200 && xhr.status < 300 ) {
				const response = JSON.parse( xhr.responseText );

				resolve( response.token );
			} else {
				reject( new Error( `XHR status: ${ xhr.status }` ) );
			}
		};

		xhr.onerror = err => {
			reject( err );
		};

		xhr.send( null );
	} );
}
