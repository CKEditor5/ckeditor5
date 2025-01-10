/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale;function t(){const e=new ButtonView;return e.set({label:"Button",withText:!0}),e}const n=[t(),t(),t()],o=new ToolbarView(e);n.forEach((e=>o.items.add(e))),o.render(),o.element.style.width="175px",document.querySelector(".ui-toolbar-wrap").append(o.element)})();
//# sourceMappingURL=snippet.js.map