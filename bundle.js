/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={218:(e,t,n)=>{function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>s(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),h=u("string"),p=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==s(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},v=c("Date"),b=c("File"),w=c("Blob"),E=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,A=e=>!f(e)&&e!==x,T=(L="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>L&&e instanceof L);var L;const j=c("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=c("RegExp"),_=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)};var C={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||o.call(e)===t||p(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:h,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isUndefined:f,isDate:v,isFile:b,isBlob:w,isRegExp:P,isFunction:p,isStream:e=>y(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:T,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,o)=>{const i=t&&R(n,o)||o;g(n[i])&&g(r)?n[i]=e(n[i],r):g(r)?n[i]=e({},r):l(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&p(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:j,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:_,freezeMethods:e=>{_(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:x,isContextDefined:A,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return S(e,((e,t)=>{const i=n(e,r+1);!f(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)}};function F(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=F.prototype,k={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{k[e]={value:e}})),Object.defineProperties(F,k),Object.defineProperty(U,"isAxiosError",{value:!0}),F.from=(e,t,n,r,o,i)=>{const s=Object.create(U);return C.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var B="object"==typeof self?self.FormData:window.FormData;function D(e){return C.isPlainObject(e)||C.isArray(e)}function q(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function I(e,t,n){return e?e.concat(t).map((function(e,t){return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const M=C.toFlatObject(C,{},null,(function(e){return/^is[A-Z]/.test(e)}));function z(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new(B||FormData);const r=(n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!C.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&C.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(C.isDate(e))return e.toISOString();if(!a&&C.isBlob(e))throw new F("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(e)||C.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(C.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(C.isArray(e)&&function(e){return C.isArray(e)&&!e.some(D)}(e)||C.isFileList(e)||C.endsWith(n,"[]")&&(a=C.toArray(e)))return n=q(n),a.forEach((function(e,r){!C.isUndefined(e)&&null!==e&&t.append(!0===s?I([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!D(e)||(t.append(I(o,n,i),u(e)),!1)}const f=[],d=Object.assign(M,{defaultVisitor:l,convertValue:u,isVisitable:D});if(!C.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!C.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),C.forEach(n,(function(n,i){!0===(!(C.isUndefined(n)||null===n)&&o.call(t,n,C.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),f.pop()}}(e),t}function H(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function J(e,t){this._pairs=[],e&&z(e,this,t)}const K=J.prototype;function V(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W(e,t,n){if(!t)return e;const r=n&&n.encode||V,o=n&&n.serialize;let i;if(i=o?o(t,n):C.isURLSearchParams(t)?t.toString():new J(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,H)}:H;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var G=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){C.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},$={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},X="undefined"!=typeof URLSearchParams?URLSearchParams:J,Q=FormData;const Y=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),Z="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var ee={isBrowser:!0,classes:{URLSearchParams:X,FormData:Q,Blob},isStandardBrowserEnv:Y,isStandardBrowserWebWorkerEnv:Z,protocols:["http","https","file","blob","url","data"]};function te(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&C.isArray(r)?r.length:i,a?(C.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&C.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&C.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,((e,r)=>{t(function(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ne={"Content-Type":void 0},re={transitional:$,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=C.isObject(e);if(o&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return r&&r?JSON.stringify(te(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return z(e,new ee.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ee.isNode&&C.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=C.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return z(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(C.isString(e))try{return(0,JSON.parse)(e),C.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||re.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&C.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw F.from(e,F.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee.classes.FormData,Blob:ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),C.forEach(["post","put","patch"],(function(e){re.headers[e]=C.merge(ne)}));var oe=re;const ie=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals");function ae(e){return e&&String(e).trim().toLowerCase()}function ce(e){return!1===e||null==e?e:C.isArray(e)?e.map(ce):String(e)}function ue(e,t,n,r){return C.isFunction(r)?r.call(this,t,n):C.isString(t)?C.isString(r)?-1!==t.indexOf(r):C.isRegExp(r)?r.test(t):void 0:void 0}class le{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ae(t);if(!o)throw new Error("header name must be a non-empty string");const i=C.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=ce(e))}const i=(e,t)=>C.forEach(e,((e,n)=>o(e,n,t)));return C.isPlainObject(e)||e instanceof this.constructor?i(e,t):C.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ie[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ae(e)){const n=C.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(C.isFunction(t))return t.call(this,e,n);if(C.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ae(e)){const n=C.findKey(this,e);return!(!n||t&&!ue(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ae(e)){const o=C.findKey(n,e);!o||t&&!ue(0,n[o],o,t)||(delete n[o],r=!0)}}return C.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return C.forEach(this,((r,o)=>{const i=C.findKey(n,o);if(i)return t[i]=ce(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ce(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return C.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&C.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ae(e);t[r]||(function(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return C.isArray(e)?e.forEach(r):r(e),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),C.freezeMethods(le.prototype),C.freezeMethods(le);var fe=le;function de(e,t){const n=this||oe,r=t||n,o=fe.from(r.headers);let i=r.data;return C.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function he(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){F.call(this,null==e?"canceled":e,F.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(pe,F,{__CANCEL__:!0});var me=ee.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ye(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var ge=ee.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=C.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ve(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=fe.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}C.isFormData(r)&&(ee.isStandardBrowserEnv||ee.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=ye(e.baseURL,e.url);function l(){if(!c)return;const r=fe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),W(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new F("Request aborted",F.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new F("Network Error",F.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||$;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new F(t,r.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,c)),c=null},ee.isStandardBrowserEnv){const t=(e.withCredentials||ge(u))&&e.xsrfCookieName&&me.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&C.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ve(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new pe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===ee.protocols.indexOf(f)?n(new F("Unsupported protocol "+f+":",F.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};C.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pe(null,e)}function Ee(e){return we(e),e.headers=fe.from(e.headers),e.data=de.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=C.isString(n)?be[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new F(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(C.hasOwnProp(be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!C.isFunction(r))throw new TypeError("adapter is not a function");return r})(e.adapter||oe.adapter)(e).then((function(t){return we(e),t.data=de.call(e,e.transformResponse,t),t.headers=fe.from(t.headers),t}),(function(t){return he(t)||(we(e),t&&t.response&&(t.response.data=de.call(e,e.transformResponse,t.response),t.response.headers=fe.from(t.response.headers))),Promise.reject(t)}))}const Oe=e=>e instanceof fe?e.toJSON():e;function Se(e,t){t=t||{};const n={};function r(e,t,n){return C.isPlainObject(e)&&C.isPlainObject(t)?C.merge.call({caseless:n},e,t):C.isPlainObject(t)?C.merge({},t):C.isArray(t)?t.slice():t}function o(e,t,n){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!C.isUndefined(t))return r(void 0,t)}function s(e,t){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Oe(e),Oe(t),!0)};return C.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);C.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Re={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Re[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const xe={};Re.transitional=function(e,t,n){function r(e,t){return"[Axios v1.2.3] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new F(r(o," has been removed"+(t?" in "+t:"")),F.ERR_DEPRECATED);return t&&!xe[o]&&(xe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Ae={assertOptions:function(e,t,n){if("object"!=typeof e)throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new F("option "+i+" must be "+n,F.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new F("Unknown option "+i,F.ERR_BAD_OPTION)}},validators:Re};const Te=Ae.validators;class Le{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Se(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Ae.assertOptions(n,{silentJSONParsing:Te.transitional(Te.boolean),forcedJSONParsing:Te.transitional(Te.boolean),clarifyTimeoutError:Te.transitional(Te.boolean)},!1),void 0!==r&&Ae.assertOptions(r,{encode:Te.function,serialize:Te.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&C.merge(o.common,o[t.method]),i&&C.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=fe.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ee.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;for(f=0;f<l;){const e=s[f++],t=s[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ee.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return W(ye((e=Se(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}C.forEach(["delete","get","head","options"],(function(e){Le.prototype[e]=function(t,n){return this.request(Se(n||{},{method:e,url:t,data:(n||{}).data}))}})),C.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Se(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Le.prototype[e]=t(),Le.prototype[e+"Form"]=t(!0)}));var je=Le;class Ne{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new pe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ne((function(t){e=t})),cancel:e}}}var Pe=Ne;const _e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_e).forEach((([e,t])=>{_e[t]=e}));var Ce=_e;const Fe=function e(t){const n=new je(t),o=r(je.prototype.request,n);return C.extend(o,je.prototype,n,{allOwnKeys:!0}),C.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Se(t,n))},o}(oe);Fe.Axios=je,Fe.CanceledError=pe,Fe.CancelToken=Pe,Fe.isCancel=he,Fe.VERSION="1.2.3",Fe.toFormData=z,Fe.AxiosError=F,Fe.Cancel=Fe.CanceledError,Fe.all=function(e){return Promise.all(e)},Fe.spread=function(e){return function(t){return e.apply(null,t)}},Fe.isAxiosError=function(e){return C.isObject(e)&&!0===e.isAxiosError},Fe.mergeConfig=Se,Fe.AxiosHeaders=fe,Fe.formToJSON=e=>te(C.isHTMLForm(e)?new FormData(e):e),Fe.HttpStatusCode=Ce,Fe.default=Fe,e.exports=Fe}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){t=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,s=Object.create(o.prototype),a=new T(r||[]);return i(s,"_invoke",{value:S(e,n,a)}),s}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var h={};function p(){}function m(){}function y(){}var g={};l(g,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(L([])));b&&b!==r&&o.call(b,a)&&(g=b);var w=y.prototype=p.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,n){function r(i,s,a,c){var u=d(t[i],t,s);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):n.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var s;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o)}))}return s=s?s.then(o,o):o()}})}function S(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=R(s,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function R(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,R(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},n.awrap=function(e){return{__await:e}},E(O.prototype),l(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var s=new O(f(e,t,r,o),i);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}var i=n(218),s="https://api.github.com/users/guimrl",a=document.getElementById("imagem"),c=document.getElementById("nome");function u(){return(u=o(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.get(s).then((function(e){l(e),f(e)})).catch((function(e){404===e.request.status?console.log("Erro 404"):console.log(e)})).finally((function(e){console.log("Página carregada!")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){var t=e.data.avatar_url,n=e.data.name,r='\n    <img src="'.concat(t,'" class="imagem" alt="foto de ').concat(n,'\n    vestindo camiseta preta, de barba, cabelo baixo e com o fundo laranja e branco.">\n    ');a.innerHTML=r}function f(e){var t="\n    <h2>".concat(e.data.name,"</h2>\n    ");c.innerHTML=t}var d,h,p,m,y,g,v,b,w,E=document.querySelector("#digit");w=document.title,window.addEventListener("blur",(function(){document.title="Volta aqui! :("})),window.addEventListener("focus",(function(){document.title=w})),function(){u.apply(this,arguments)}(),d=document.querySelectorAll('.navegacao a[href^="#"]'),h=document.querySelector(".open-btn"),p=document.querySelector(".close-btn"),m=document.querySelector(".nav"),h.addEventListener("click",(function(){m.classList.add("visivel")})),p.addEventListener("click",(function(){m.classList.remove("visivel")})),d.forEach((function(e){e.addEventListener("click",(function(){return m.classList.remove("visivel")}))})),function(){function e(e){var t,n;e.preventDefault(),t=e.target.getAttribute("href"),n=document.querySelector(t).offsetTop-0,window.scroll({top:n,behavior:"smooth"})}document.querySelectorAll('.navegacao a[href^="#"]').forEach((function(t){t.addEventListener("click",e)}))}(),function(e,t,n){var r="Desenvolvedor Full Stack.".split("").reverse(),o=setInterval((function(){if(!r.length)return clearInterval(o);var t=r.pop();e.innerHTML+=t}),100)}(E),function(){var e=document.querySelector("#theme"),t=document.documentElement,n={"--main-color":"#0b5ed7","--main-text-color":"#333333","--main-bg-color":"#eeeeee","--bg-color":"#FFFFFF"},r={"--main-color":"#F39C12","--main-text-color":"#EEEEEE","--main-bg-color":"#333333","--bg-color":"#262626"};function o(e){for(var n in e)r=n,o=e[n],t.style.setProperty(r,o);var r,o}e.addEventListener("change",(function(){var t;e.checked?(t="DARK",o(r)):(t="LIGHT",o(n)),localStorage.setItem("PageTheme",JSON.stringify(t))})),"DARK"===JSON.parse(localStorage.getItem("PageTheme"))&&o(r)}(),y=document.querySelector("#abrir-modal"),g=document.querySelector("#fechar-modal"),v=document.querySelector("#modal"),b=document.querySelector("#fade"),[y,g,b].forEach((function(e){e.addEventListener("click",(function(){[v,b].forEach((function(e){return e.classList.toggle("hide")}))}))}))})()})();