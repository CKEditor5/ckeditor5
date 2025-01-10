/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */DecoupledEditor.create(document.querySelector("#mini-inspector-heading"),{plugins:[Essentials,function(e){e.model.schema.register("heading",{allowAttributes:["level"],inheritAllFrom:"$block"}),e.conversion.elementToElement({model:"heading",view:"h1"})}],toolbar:[],licenseKey:"GPL"}).then((e=>{window.editor=e,MiniCKEditorInspector.attach(e,document.querySelector("#mini-inspector-heading-container"))})).catch((e=>{console.error(e.stack)}));
//# sourceMappingURL=snippet.js.map