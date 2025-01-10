/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,t=new SwitchButtonView;t.set({label:"Switch button",isEnbaled:!0,withText:!0}),t.on("execute",(()=>t.isOn=!t.isOn));const n=new ToolbarView(e);n.items.add(t),n.render(),document.querySelector(".ui-switch").append(n.element)})();
//# sourceMappingURL=snippet.js.map