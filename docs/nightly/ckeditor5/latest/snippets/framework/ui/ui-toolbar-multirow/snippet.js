/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale;function t(){const e=new ButtonView;return e.set({label:"Button",withText:!0}),e}const n=new ToolbarLineBreakView(e),o=[t(),n,t()],r=new ToolbarView(e);o.forEach((e=>r.items.add(e))),r.render(),document.querySelector(".ui-toolbar-multirow").append(r.element)})();
//# sourceMappingURL=snippet.js.map