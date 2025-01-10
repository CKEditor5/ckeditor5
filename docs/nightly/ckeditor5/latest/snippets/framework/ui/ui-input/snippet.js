/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new LabeledFieldView(e,createLabeledInputText);t.set({label:"Text input",value:"Value of the input"}),t.render();const n=new LabeledFieldView(e,createLabeledInputNumber);n.set({label:"Number input",value:"Value of the input"}),n.render();const l=[t,n],a=new ToolbarView(e);l.forEach((e=>a.items.add(e))),a.render(),document.querySelector(".ui-input").append(a.element)})();
//# sourceMappingURL=snippet.js.map