/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new ButtonView;t.set({label:"Enabled state",withText:!0,isEnabled:!0}),t.render();const n=new ButtonView;n.set({label:"Disabled state",withText:!0,isEnabled:!1}),n.render();const s=new ButtonView;s.set({label:"On state",withText:!0,isOn:!0}),s.render();const a=[t,n,s],l=new ToolbarView(e);a.forEach((e=>l.items.add(e))),l.render(),document.querySelector(".ui-button-states").append(l.element)})();
//# sourceMappingURL=snippet.js.map