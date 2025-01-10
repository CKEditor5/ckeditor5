/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=new Locale,n=new ToolbarView(e);Object.values(coreIcons).forEach((e=>{const o=new IconView;o.content=e,o.render(),n.items.add(o)})),n.render(),document.querySelector(".ui-icons").append(n.element)})();
//# sourceMappingURL=snippet.js.map