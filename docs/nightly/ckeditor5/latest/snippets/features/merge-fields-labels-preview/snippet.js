/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */window.ClassicEditor.create(document.querySelector("#snippet-merge-fields-labels"),{mergeFields:{...window.ClassicEditor.defaultConfig.mergeFields,previewModes:["$labels"]},toolbar:{items:["insertMergeField"].concat(window.ClassicEditor.defaultConfig.toolbar.items),shouldNotGroupWhenFull:!0}}).then((e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.buttonView&&"Insert merge field"===e.buttonView.label)),text:"Click to add a merge field.",editor:e,tippyOptions:{placement:"bottom-start"}})})).catch((e=>{console.error(e.stack)}));
//# sourceMappingURL=snippet.js.map