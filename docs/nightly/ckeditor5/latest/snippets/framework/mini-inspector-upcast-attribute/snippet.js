/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */DecoupledEditor.create(document.querySelector("#mini-inspector-upcast-attribute"),{plugins:[Essentials,function(e){e.model.schema.register("image",{inheritAllFrom:"$block",allowAttributes:["source"]}),e.conversion.elementToElement({view:"img",model:"image"}),e.conversion.attributeToAttribute({view:{name:"img",key:"src"},model:"source"})}],toolbar:[],licenseKey:"GPL"}).then((e=>{MiniCKEditorInspector.attach(e,document.querySelector("#mini-inspector-upcast-attribute-container"))})).catch((e=>{console.error(e.stack)}));
//# sourceMappingURL=snippet.js.map