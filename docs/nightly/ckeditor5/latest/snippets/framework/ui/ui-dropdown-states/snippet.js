/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new ButtonView;t.set({label:"Button",withText:!0});const o=[t],n=createDropdown(e);n.buttonView.set({label:"Enabled state",isEnabled:!0,withText:!0}),addToolbarToDropdown(n,o),n.render();const a=createDropdown(e);a.buttonView.set({label:"Disabled state",isEnabled:!1,withText:!0}),a.render();const d=[n,a],r=new ToolbarView(e);d.forEach((e=>r.items.add(e))),r.render(),document.querySelector(".ui-dropdown-states").append(r.element)})();
//# sourceMappingURL=snippet.js.map