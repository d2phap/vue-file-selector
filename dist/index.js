/*!
 * Vue File selector v0.5.0
 * (c) 2019 Duong Dieu Phap
 * https://github.com/d2phap/vue-file-selector
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-file-selector"]=t():e["vue-file-selector"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5).default)("6ea35f6c",r,!1,{})},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.fs-file-selector[data-v-a8ea6a18]{position:relative}.fs-file-selector .fs-loader[data-v-a8ea6a18]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:flex;justify-content:center;align-items:center}.fs-file-selector .fs-droppable[data-v-a8ea6a18]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.fs-file-selector .fs-droppable input[type="file"][data-v-a8ea6a18]{visibility:hidden;position:absolute;width:1px;height:1px}.fs-file-selector.fs-drag-enter .fs-droppable[data-v-a8ea6a18]::before{content:"";position:absolute;top:0;bottom:0;width:100%;height:100%;z-index:9999999}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fs-file-selector",class:{"fs-drag-enter":e.isDragEnter}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"fs-loader"},[e._t("loader",[e._v("\n      Loading...\n    ")])],2),e._v(" "),n("div",{ref:"fsDroppable",staticClass:"fs-droppable",style:{height:e.height+"px"},on:{dragenter:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!0},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragleave:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!1},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.handleDrop(t)}}},[n("input",{ref:"fsFileInput",attrs:{type:"file",tabindex:"-1",multiple:e.multiple,accept:e.acceptExtensions},on:{change:e.handleFilesChange}}),e._v(" "),e._t("top"),e._v(" "),n("div",{staticClass:"fs-btn-select",attrs:{href:"#"},on:{click:function(t){return e.$refs.fsFileInput.click()}}},[e._t("default",[e._v("Select")])],2),e._v(" "),e._t("bottom")],2)])};function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r._withStripped=!0;var o={name:"FileSelector",props:{multiple:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},acceptExtensions:{type:String,default:""},maxFileSize:{type:Number,default:NaN},height:{type:Number,default:NaN},validateFn:{type:Function,default:function(){return!0}}},data:function(){return{isDragEnter:!1}},methods:{handleFilesChange:function(e){this.preprocessFiles(e.target.files)},handleDrop:function(e){this.isDragEnter=!1,this.preprocessFiles(e.dataTransfer.files)},checkFileExtensions:function(e){var t=i(new Set(this.acceptExtensions.toLowerCase().split(",").filter(Boolean)));return-1===Array.from(e).findIndex((function(e){var n=".".concat(e.name.toLowerCase().split(".").pop());return!t.includes(n)}))},checkFileSize:function(e){var t=this;return!!Number.isNaN(this.maxFileSize)||-1===Array.from(e).findIndex((function(e){return e.size>t.maxFileSize}))},validate:function(e){return!this.multiple&&e.length>1?"MULTIFILES_ERROR":this.checkFileExtensions(e)?this.checkFileSize(e)?this.validateFn(e):"FILE_SIZE_ERROR":"EXTENSION_ERROR"},preprocessFiles:function(e){var t=this.validate(e);this.$emit("validated",t,e),!0===t&&this.$emit("changed",e),this.$refs.fsFileInput.value=""}}};n(1);var a=function(e,t,n,r,i,o,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:c}}(o,r,[],!1,null,"a8ea6a18",null);a.options.__file="src/component.vue";var s=a.exports,l={component:s,install:function(e){this.installed||(e.component(s.name,s),this.installed=!0)}};t.default=l},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},f=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,i){c=n,f=i||{};var a=r(e,t);return v(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i];(l=o[s.id]).refs--,n.push(l)}t?v(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(m(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(d){var i=l++;r=s||(s=g()),t=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=g(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function x(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));