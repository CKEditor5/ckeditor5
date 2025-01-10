/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ClassicEditor.create(document.querySelector("#snippet-block-quote")).then((o=>{window.editor=o,window.attachTourBalloon({target:window.findToolbarItem(o.ui.view.toolbar,(o=>o.label&&"Block quote"===o.label)),text:"Click to insert a block quote.",editor:o})})).catch((o=>{console.error(o.stack)}));
//# sourceMappingURL=snippet.js.map