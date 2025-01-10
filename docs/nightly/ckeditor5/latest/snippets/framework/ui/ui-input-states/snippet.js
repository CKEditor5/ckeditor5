/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new LabeledFieldView(e,createLabeledInputText);t.set({label:"Enabled state",isEnabled:!0}),t.render();const a=new LabeledFieldView(e,createLabeledInputText);a.set({label:"Disabled state",isEnabled:!1}),a.render();const n=[t,a],l=new ToolbarView(e);n.forEach((e=>l.items.add(e))),l.render(),document.querySelector(".ui-input-states").append(l.element)})();
//# sourceMappingURL=snippet.js.map