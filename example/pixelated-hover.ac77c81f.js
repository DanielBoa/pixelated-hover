parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rOVI":[function(require,module,exports) {
var e=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),o=0;for(t=0;t<r;t++)for(var n=arguments[t],d=0,i=n.length;d<i;d++,o++)a[o]=n[d];return a},t=document.createElement("canvas"),r=t.getContext("2d"),a=e(document.querySelectorAll("[data-pixelated-hover]"));function o(e,a){var o,n=+((null===(o=e.dataset)||void 0===o?void 0:o.pixelatedHover)||"20"),d=e.querySelector("img.__pixelated"),i=d||document.createElement("img"),l=Math.floor(a.width/n),c=Math.floor(a.height/n);t.width=l,t.height=c,r.drawImage(a,0,0,l,c),i.src=t.toDataURL(),i.classList.add("__pixelated"),d||e.appendChild(i)}a.forEach(function(e){var t=e.querySelector("img");t&&t.addEventListener("load",function(){return o(e,t)})});
},{}]},{},["rOVI"], null)
//# sourceMappingURL=pixelated-hover.ac77c81f.js.map