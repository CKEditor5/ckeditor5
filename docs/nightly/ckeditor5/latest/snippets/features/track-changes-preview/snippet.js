/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e=[{id:"user-1",name:"Mex Haddox"},{id:"user-2",name:"Zee Croce"}];const t=new EditorWatchdog(ClassicEditor);window.watchdog=t,t.setCreator(((e,t)=>ClassicEditor.create(e,t).then((e=>{const t=document.querySelector(".live-snippet__container"),i=e.plugins.get("AnnotationsUIs"),n=document.querySelector(".sidebar");function s(){t.offsetWidth<650?(n.classList.remove("narrow"),n.classList.add("hidden"),i.switchTo("inline")):t.offsetWidth<840?(n.classList.remove("hidden"),n.classList.add("narrow"),i.switchTo("narrowSidebar")):(n.classList.remove("hidden","narrow"),i.switchTo("wideSidebar"))}return e.ui.view.listenTo(window,"resize",s),s(),window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.buttonView&&"Track changes"===e.buttonView.label)),text:'Display the preview pressing the "Preview final content" button.',editor:e,tippyOptions:{placement:"bottom-start"}}),e.execute("trackChanges"),e})))),t.create(document.querySelector(".tc-adapter .editor"),{initialData:'<h2>\n\t\tBilingual Personality Disorder\n\t</h2>\n\t<p>\n\t\tThis may be the first time you hear about this\n\t\t<suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>\n\t\t made-up<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>\n\t\tdisorder but it actually isn’t so far from the truth.\n\t\tAs recent studies show, the language you speak has more effects on you than you realize.\n\t\tAccording to the studies, the language a person speaks affects their cognition,\n\t\t<suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>\n\t\tfeelings, <suggestion-end name="deletion:suggestion-2:user-1"></suggestion-end>\n\t\tbehavior, emotions and hence <strong>their personality</strong>.\n\t</p>\n\t<figure class="image image-style-side">\n\t\t<img src="../../../assets/img/collaboration-demo-img.jpg"\n\t\t\tsrcset="../../../assets/img/collaboration-demo-img.jpg, ../../../assets/img/collaboration-demo-img_2x.jpg 2x">\n\t\t<figcaption>\n\t\t\tOne language, one person.\n\t\t</figcaption>\n\t</figure>\n\t<p>\n\t\tThis shouldn’t come as a surprise\n\t\t<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>\n\t\tthat different regions of the brain become more active depending on the activity.\n\t\tThe structure, information and especially\n\t\t<suggestion-start name="attribute:bold|ci1tcnk0lkep:suggestion-3:user-1"></suggestion-start><strong>the\n\t\tculture of languages<suggestion-end name="attribute:bold|ci1tcnk0lkep:suggestion-3:user-1"></strong></suggestion-end>\n\t\tvaries substantially\n\t\tand the language a person speaks is an essential element of daily life.\n\t</p>',extraPlugins:[class{constructor(e){this.editor=e}init(){const t=this.editor.plugins.get("Users"),i=this.editor.plugins.get("TrackChanges");for(const i of e)t.addUser(i);t.defineMe("user-1"),i.adapter={getSuggestion:e=>new Promise((t=>{switch(e){case"suggestion-1":t({id:"suggestion-1",type:"insertion",authorId:"user-2",createdAt:new Date(2019,1,13,11,20,48)});break;case"suggestion-2":t({id:"suggestion-2",type:"deletion",authorId:"user-1",createdAt:new Date(2019,1,14,12,7,20)});break;case"suggestion-3":t({id:"suggestion-3",type:"attribute:bold|ci1tcnk0lkep",authorId:"user-1",createdAt:new Date(2019,2,8,10,2,7),data:{key:"bold",oldValue:null,newValue:!0},attributes:{groupId:"e29adbb2f3963e522da4d2be03bc5345f"}})}})),addSuggestion:e=>Promise.resolve({id:e.id,type:e.type,authorId:t.me.id,createdAt:new Date})}}},TrackChangesPreviewPlugin],trackChanges:{preview:{renderFunction:(e,t)=>{e.classList.add("formatted");for(const i of t)e.appendChild(i)}}},toolbar:{items:["undo","redo","|","trackChanges","comment","commentsArchive","|","heading","|","bold","italic","|","link","insertImage","insertTable","|","bulletedList","numberedList"]},licenseKey:"eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzg0NTQ0MDAsImp0aSI6IjgyYjkwNWU3LTgyMzktNGYxZC04NGU0LTEwZWFhYzU4MTk1NCIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwiMTkyLjE2OC4qLioiLCJja2VkaXRvci5jb20iLCIqLmNrZWRpdG9yLmNvbSIsImNrZWRpdG9yNS5naXRodWIuaW8iXSwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImVkMGEyMjk4In0.zzv6jiWX1Ga6FcEwWavjBeOvcHt3rvqTloTbJ8RQaMHO2vpVmhiQq91nuqSi968PHSMCm0rI6jrYQNG1agJK6g",sidebar:{container:document.querySelector(".tc-adapter .sidebar")},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:wrapText","|","imageTextAlternative","toggleImageCaption","ckboxImageEdit"]},ckbox:{allowExternalImagesEditing:[/^data:/,"origin",/ckbox/],forceDemoLabel:!0},cloudServices:{tokenUrl:"https://33333.cke-cs.com/token/dev/dbIg4Hr2bqf5bSV3wuzN8bW8td7OAStvLjRlJof9ZW13cUXRHRraVJsD8J9J",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/",webSocketUrl:"33333.cke-cs.com/ws"},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},comments:{editorConfig:{extraPlugins:ClassicEditor.builtinPlugins.filter((e=>["Bold","Italic","Underline","List","Autoformat"].includes(e.pluginName)))}},mention:{feeds:[{marker:"@",feed:["@Barney","@Lily","@Marry Ann","@Marshall","@Robin","@Ted"]}]}})})();
//# sourceMappingURL=snippet.js.map