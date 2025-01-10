/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* eslint-env node */

const csConfig = require( '../scripts/presets/production.json' );
const { execSync } = require( 'child_process' );
const path = require( 'path' );
const CKEDITOR5_COMMERCIAL_DIRECTORY = path.join( __dirname, '..' );

module.exports = {
	LICENSE_KEY: generateInternalLicenseKey(),
	CS_CONFIG: {
		tokenUrl: csConfig.CLOUD_SERVICE_TOKEN_URL,
		uploadUrl: csConfig.CLOUD_SERVICE_UPLOAD_URL,
		webSocketUrl: csConfig.CLOUD_SERVICE_WEBSOCKET_URL
	}
};

/**
 * Returns the license key (a string) which can be used to authenticate
 * commercial features used in the docs snippets.
 *
 * @returns {String}
 */
function generateInternalLicenseKey() {
	return execSync(
		'yarn --silent ckeditor5-dev-private-generate-license-key3 ' +
		'--licensedHosts 127.0.0.1 192.168.*.* ckeditor.com *.ckeditor.com ckeditor5.github.io ' +
		'--licenseType production',
		{
			cwd: CKEDITOR5_COMMERCIAL_DIRECTORY,
			encoding: 'utf8'
		}
	).toString().trim();
}
