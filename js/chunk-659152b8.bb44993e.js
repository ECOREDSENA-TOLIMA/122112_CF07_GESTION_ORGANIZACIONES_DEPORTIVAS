(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-659152b8","chunk-55d286b8"],{"07ac":function(t,e,a){var s=a("23e7"),i=a("6f53").values;s({target:"Object",stat:!0},{values:function(t){return i(t)}})},"0d26":function(t,e,a){"use strict";e["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(t,e=!1){return t.dialogo?t.dialogo.map((a,s)=>({...a,id:this.uid+s+1,textoIng:e?this.splitPhrase(a.textoIng):a.textoIng,textoEsp:e?this.splitPhrase(a.textoEsp):a.textoEsp,personaje:t.personajes&&t.personajes.find(t=>t.nombre===a.personaje)})):[]},splitPhrase(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},2532:function(t,e,a){"use strict";var s=a("23e7"),i=a("5a34"),n=a("1d80"),o=a("ab13");s({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(n(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"3b23":function(t,e,a){t.exports=a.p+"img/red-x.76179c7f.svg"},"3bff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogo"},[a("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[a("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),a("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),a("div",{staticClass:"px-2 py-3 p-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(e,s){return a("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[a("div",{staticClass:"col-auto dialogo__chat__item__person"},[a("img",{attrs:{src:e.personaje.img}}),a("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),a("div",{staticClass:"col dialogo__chat__item__message__container"},[a("div",{staticClass:"dialogo__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble dialogo__chat__item__message__bubble--tail"},[a("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[a("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(s,i){return["*"===s?a("div",{key:"phrase-"+e.id+"-"+i,ref:"phrase-"+e.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===e.id},on:{drop:function(a){return a.preventDefault(),t.onDrop(e.id)},dragenter:function(a){return a.preventDefault(),t.onDragEnter(e.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[e.id]?a("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+i,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[a("hr",{staticClass:"my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?a("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()]),a("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[a("Audio",{attrs:{audio:e.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),a("div",{staticClass:"d-flex justify-content-end me-3"},[a("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(a){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])]),a("div",{staticClass:"col-1"})])})),0),t._m(0),a("div",{staticClass:"col dialogo__words"},[a("div",{staticClass:"dialogo__words__content"},[a("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?a("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,ref:"word-"+e.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},domProps:{innerHTML:t._s(e.palabra)},on:{touchstart:function(a){return a.preventDefault(),t.onTouchStart(e.id)},touchmove:function(a){return a.preventDefault(),t.onTouchMove(a,e.id)},touchend:function(a){return a.preventDefault(),t.onTouchEnd(a,e.id)},touchcancel:function(a){return a.preventDefault(),t.onTouchCancel(a,e.id)}}})})):t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(e.palabra)},on:{dragstart:function(a){return t.onStartDrag(e.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),a("div",{staticClass:"dialogo__words__footer"},[t.score?a("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?a("div",{staticClass:"dialogo__score p-3 approved"},[a("div",{staticClass:"row align-items-center"},[t._m(1),a("div",{staticClass:"col"},[t._t("feedback-correcto",(function(){return[t._v("¡Muy bien!")]}))],2)])]):t._e(),"disapproved"===t.score?a("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[a("div",{staticClass:"row align-items-center"},[t._m(2),a("div",{staticClass:"col"},[t._t("feedback-incorrecto",(function(){return[t._v("Incorrecto")]}))],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?a("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?a("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?a("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-md-none"},[a("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"dialogo__score__icon"},[s("img",{attrs:{src:a("86bd")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"dialogo__score__icon"},[s("img",{attrs:{src:a("3b23")}})])])}],n=(a("4de4"),a("7db0"),a("caad"),a("d81d"),a("d3b7"),a("07ac"),a("2532"),a("b2ea")),o=a("0d26"),r={name:"DialogoActividad",components:{Audio:n["default"]},mixins:[o["a"]],props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){return this.dialogoMerge(this.dialogo,!0)},words:function(){return this.shuffle(this.dialogoComputed.map((function(t){return{palabra:t.palabra,id:t.id}})).filter((function(t){return t.palabra})))},answerWordsIds:function(){return Object.values(this.answers).map((function(t){return t.dragId}))},wordsToShow:function(){var t=this;return this.words.filter((function(e){return!t.answerWordsIds.includes(e.id)}))}},created:function(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag:function(t){this.dragId=t},onEndDrag:function(){this.dragId=null},onDrop:function(t){var e=this;this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find((function(t){return t.id===e.dragId})).palabra}),this.dropId=null)},onDragEnter:function(t){this.dropId=t},onDragLeave:function(){this.dropId=null},onTouchStart:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.add("touch-drag")},onTouchMove:function(t,e){var a=this.$refs["word-".concat(e)][0],s=a.getBoundingClientRect(),i=t.touches[0];a.style.top="".concat(i.clientY-s.height/2,"px"),a.style.left="".concat(i.clientX-s.width/2,"px")},onTouchEnd:function(t,e){var a=this;if(t.changedTouches.length>1)this.resetDragElm(e);else{var s=this.$refs["chat-".concat(this.uid)],i=s.getBoundingClientRect(),n=t.changedTouches[0],o=n.clientX>i.x&&n.clientX<i.x+i.width,r=n.clientY>i.y&&n.clientY<i.y+i.height;if(o&&r){var d,c=this.words.some((function(t){var e=a.$refs["phrase-".concat(t.id)][0],s=e.getBoundingClientRect(),i=25,o=n.clientX>s.x-i&&n.clientX<s.x+s.width+i,r=n.clientY>s.y-i&&n.clientY<s.y+s.height+i;return o&&r&&(d=t.id),o&&r}));c&&this.$set(this.answers,d,{dragId:e,dropId:d,palabra:this.words.find((function(t){return t.id===e})).palabra}),this.resetDragElm(e)}else this.resetDragElm(e)}},onTouchCancel:function(t){this.resetDragElm(t)},resetDragElm:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.remove("touch-drag")},toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(e){return e!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),s=[t[a],t[e]];t[e]=s[0],t[a]=s[1]}return t}}},d=r,c=a("2877"),l=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=l.exports},"44e7":function(t,e,a){var s=a("861d"),i=a("c6b6"),n=a("b622"),o=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"6f53":function(t,e,a){var s=a("83ab"),i=a("df75"),n=a("fc6a"),o=a("d1e7").f,r=function(t){return function(e){var a,r=n(e),d=i(r),c=d.length,l=0,u=[];while(c>l)a=d[l++],s&&!o.call(r,a)||u.push(t?[a,r[a]]:r[a]);return u}};t.exports={entries:r(!0),values:r(!1)}},"7db0":function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").find,n=a("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},"86bd":function(t,e,a){t.exports=a.p+"img/green-check.f4a3fa01.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},ab13:function(t,e,a){var s=a("b622"),i=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(s){}}return!1}},b2ea:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?s("button",{staticClass:"audio__btn",on:{click:t.play}},[s("img",{attrs:{src:a("5ccd")}})]):s("button",{staticClass:"audio__btn",on:{click:t.pause}},[s("img",{attrs:{src:a("f034")}})]):s("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],n=a("8fb3"),o={name:"Audio",mixins:[n["a"]]},r=o,d=a("2877"),c=Object(d["a"])(r,s,i,!1,null,null,null);e["default"]=c.exports},caad:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").includes,n=a("44d2");s({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,n=a("1dde"),o=n("map");s({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-659152b8.bb44993e.js.map