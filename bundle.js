!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){const r=n(1),o=n(9),i=n(11),s=n(12),u=n(13),c=n(15),a=n(16),l=n(17),f=n(19);class p{constructor(e){e&&r.equal(typeof e,"object","Tram-One: options should be an object"),e=e||{},this.defaultRoute=e.defaultRoute||"/404",this.webStorage=e.webStorage,this.router=c(),this.internalRouter={},this.engine=new s}addActions(e){return r.equal(typeof e,"object","Tram-One: ActionGroups should be { store-key: { action-name: action-function } }"),this.engine.addActions(e),this}addListener(e){return r.equal(typeof e,"function","Tram-One: Listener should be a function"),this.engine.addListener(e),this}addRoute(e,t,n){return r.equal(typeof e,"string","Tram-One: path should be a string"),r.equal(typeof t,"function","Tram-One: page should be a function"),n&&n.forEach(n=>{r.equal(typeof n,"object","Tram-One: subroute should be an object, use Tram.route to make subroutes");const o=(e+n.path).split("//").join("/");this.addRoute(o,(e,r,o,i)=>{const s=n.component(e,r,o,i);return t(e,r,o,s)},n.subroutes)}),this.internalRouter[e]=(e=>(n,r)=>t(n,r,e)),this.router=c(this.internalRouter[this.defaultRoute],this.internalRouter),this}start(e,t){return this.engine.addListener((n,r)=>{this.mount(e,t,n,r)}),this.webStorage&&(this.engine.addActions(i(this.webStorage).actions),this.engine.addListener(i(this.webStorage).listener)),f(()=>{this.mount(e,t)}),this.mount(e,t),this}mount(e,t,n,o){r.ok(void 0!==e,"Tram-One: selector should be a DOM element or CSS selection string");const i="string"==typeof e?document.querySelector(e):e;if(null===i&&console.warn("Tram-One: could not find target, is the element on the page yet?"),!i.firstElementChild){const e=document.createElement("div");i.appendChild(e)}const s=i.firstElementChild,c=t||window.location.href.replace(window.location.origin,"");return u(s,this.toNode(c,n,o),(e,t)=>[].concat(e.events).concat(t.events)),this}toNode(e,t,n){return r.equal(typeof e,"string","Tram-One: pathName should be a string"),this.router(e)(t||this.engine.store,n||this.engine.actions)}toString(e,t){return this.toNode(e,t).outerHTML}static dom(e,t){return t&&(r.equal(typeof t,"object","Tram-One: registry should be an object"),r.ok(!Array.isArray(t),"Tram-One: registry should be an object")),a(l,o(e),t||{})}static html(e){return p.dom(null,e)}static svg(e){return p.dom("http://www.w3.org/2000/svg",e)}static route(){return(e,t,n)=>({path:e,component:t,subroutes:n})}}e.exports=p},function(e,t,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n(5),s=Object.prototype.hasOwnProperty,u=Array.prototype.slice,c="foo"===function(){}.name;function a(e){return Object.prototype.toString.call(e)}function l(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=m,p=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(i.isFunction(e)){if(c)return e.name;var t=e.toString().match(p);return t&&t[1]}}function d(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(c||!i.isFunction(e))return i.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function y(e,t,n,r,o){throw new f.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function m(e,t){e||y(e,!0,t,"==",f.ok)}function b(e,t,n,s){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(l(e)&&l(t)&&a(e)===a(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var c=(s=s||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===s.expected.indexOf(t)||(s.actual.push(e),s.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=v(e),s=v(t);if(o&&!s||!o&&s)return!1;if(o)return e=u.call(e),t=u.call(t),b(e,t,n);var c,a,l=S(e),f=S(t);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),a=l.length-1;a>=0;a--)if(l[a]!==f[a])return!1;for(a=l.length-1;a>=0;a--)if(c=l[a],!b(e[c],t[c],n,r))return!1;return!0}(e,t,n,s))}return n?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function O(e,t,n,r){var o;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&y(o,n,"Missing expected exception"+r);var s="string"==typeof r,u=!e&&i.isError(o),c=!e&&o&&!n;if((u&&s&&w(o,n)||c)&&y(o,n,"Got unwanted exception"+r),e&&o&&n&&!w(o,n)||!e&&o)throw o}f.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return d(g(e.actual),128)+" "+e.operator+" "+d(g(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,o=h(t),i=r.indexOf("\n"+o);if(i>=0){var s=r.indexOf("\n",i+1);r=r.substring(s+1)}this.stack=r}}},i.inherits(f.AssertionError,Error),f.fail=y,f.ok=m,f.equal=function(e,t,n){e!=t&&y(e,t,n,"==",f.equal)},f.notEqual=function(e,t,n){e==t&&y(e,t,n,"!=",f.notEqual)},f.deepEqual=function(e,t,n){b(e,t,!1)||y(e,t,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,n){b(e,t,!0)||y(e,t,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,n){b(e,t,!1)&&y(e,t,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(t,n,r){b(t,n,!0)&&y(t,n,r,"notDeepStrictEqual",e)},f.strictEqual=function(e,t,n){e!==t&&y(e,t,n,"===",f.strictEqual)},f.notStrictEqual=function(e,t,n){e===t&&y(e,t,n,"!==",f.notStrictEqual)},f.throws=function(e,t,n){O(!0,e,t,n)},f.doesNotThrow=function(e,t,n){O(!1,e,t,n)},f.ifError=function(e){if(e)throw e};var S=Object.keys||function(e){var t=[];for(var n in e)s.call(e,n)&&t.push(n);return t}}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=domino},function(e,t,n){const r=new(n(0));r.addRoute("/",n(20)),r.addRoute("/404",n(23)),r.addActions({color:n(24)}),window.engine={store:r.engine.store,actions:r.engine.actions},r.addListener((e,t)=>{window.engine={store:e,actions:t}}),r.start(".main")},function(e,t,n){(function(e,r){var o=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(u(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),c=r[n];n<i;c=r[++n])g(c)||!w(c)?s+=" "+c:s+=" "+u(c);return s},t.deprecate=function(n,o){if(b(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,s={};function u(e,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),l(r,e,r.depth)}function c(e,t){var n=u.styles[t];return n?"["+u.colors[n][0]+"m"+e+"["+u.colors[n][1]+"m":e}function a(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return m(o)||(o=l(e,o,r)),o}var i=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(m(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(i)return i;var s=Object.keys(n),u=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),S(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(x(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(S(n))return f(n)}var a,w="",j=!1,E=["{","}"];(h(n)&&(j=!0,E=["[","]"]),x(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),S(n)&&(w=" "+f(n)),0!==s.length||j&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),a=j?function(e,t,n,r,o){for(var i=[],s=0,u=t.length;s<u;++s)k(t,String(s))?i.push(p(e,t,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}(e,n,r,u,s):s.map(function(t){return p(e,n,r,u,t,j)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(a,w,E)):E[0]+w+E[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var s,u,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),u||(e.seen.indexOf(c.value)<0?(u=g(n)?l(e,c.value,null):l(e,c.value,n-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n")):u=e.stylize("[Circular]","special")),b(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function h(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function y(e){return"number"==typeof e}function m(e){return"string"==typeof e}function b(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===j(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===j(e)}function S(e){return w(e)&&("[object Error]"===j(e)||e instanceof Error)}function x(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(b(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;s[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else s[e]=function(){};return s[e]},t.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=b,t.isRegExp=v,t.isObject=w,t.isDate=O,t.isError=S,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(7);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(8),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(2),n(6))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,a=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=a.length;t;){for(c=a,a=[];++f<t;)c&&c[f].run();f=-1,t=a.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||l||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){const r="undefined"!=typeof window?window.document:n(3).createWindow().document,o=n(10),i=e=>!/^xmlns($|:)/i.test(e),s=e=>"classname"===e.key.toLowerCase()?{key:"class",value:e.value}:e,u=e=>"htmlFor"===e.key?{key:"for",value:e.value}:e,c=e=>(t,n,c)=>{if("!--"===t)return r.createComment(n.comment);const a=e?r.createElementNS(e,t):r.createElement(t);return Object.keys(n).filter(i).filter((e=>t=>Object.prototype.hasOwnProperty.call(e,t))(n)).map((e=>t=>({key:t,value:e[t]}))(n)).map(s).map(u).filter((e=>t=>"on"!==t.key.slice(0,2)||((e,t,n)=>{e[t]=n,e.events=e.events?e.events.concat(t):[t]})(e,t.key,t.value))(a)).filter((e=>t=>e.setAttributeNS(null,t.key,t.value))(a)),o(a,c),a};e.exports=c,e.exports.html=c(),e.exports.svg=c("http://www.w3.org/2000/svg")},function(e,t,n){const r="undefined"!=typeof window?window.document:n(3).createWindow().document,o=e=>"number"==typeof e||"boolean"==typeof e||"function"==typeof e||e instanceof Date||e instanceof RegExp?e.toString():e,i=e=>!("string"==typeof e&&/^[\n\r\s]+$/.test(e)),s=(e,t)=>{Array.isArray(t)&&t.map(o).filter(i).forEach(t=>{if(Array.isArray(t))s(e,t);else{if("string"==typeof t){if(e.lastChild&&"#text"===e.lastChild.nodeName)return void(e.lastChild.nodeValue+=t);t=r.createTextNode(t)}t&&t.nodeType&&e.appendChild(t)}})};e.exports=s},function(e,t){const n=e=>(t,n)=>{const r=void 0===e.getItem?e[n]:e.getItem(n);return Object.assign({},t,((e,t)=>t?{[e]:{init:()=>t}}:{})(n,(e=>{try{return JSON.parse(e)}catch(t){console.warn(`hover-battery could not parse ${e}`)}})(r)))};e.exports=(e=>({listener:t=>{Object.keys(t).forEach(n=>{void 0===e.setItem?e[n]=JSON.stringify(t[n]):e.setItem(n,JSON.stringify(t[n]))})},actions:Object.keys(e).reduce(n(e),{})}))},function(e,t){const n=e=>Object.keys(e).map(t=>e[t]),r=(e,t)=>e.concat(t);e.exports=class{constructor(){this.engine={},this.store={},this.actionQueue=[],this.listeners=[],this.actions={}}addActions(e){const t=(e,t)=>{const n=t.name in e?e[t.name].concat(t):[t];return Object.assign({},e,{[t.name]:n})};this.engine=Object.keys(e).map((e=>t=>n(e[t]).map(e=>(e._storeKey=t,e)))(e)).reduce((e,r)=>n(r).reduce(t,e),this.engine),this.store=Object.keys(e).map(t=>({key:t,init:e[t].init})).reduce((e,t)=>Object.assign({},e,{[t.key]:t.init()}),this.store);const o=(e,t)=>{const n=e=>(t,n)=>Object.assign({},t,{[n._storeKey]:n(t[n._storeKey],e.args,this.actions)}),r=0===this.actionQueue.length;for(this.actionQueue.push({actions:this.engine[e],args:t});r&&this.actionQueue.length>0;){const r=this.actionQueue[0],o=n(r);this.store=r.actions.reduce(o,this.store),this.actionQueue.shift(),this.notifyListeners(e,t)}};return this.actions=n(e).map(e=>Object.keys(e)).reduce(r,[]).reduce((e,t)=>Object.assign({},e,{[t]:e=>o(t,e)}),this.actions),this}addListener(e){return this.listeners.push(e),this}notifyListeners(e,t){return this.listeners.forEach(n=>n(this.store,this.actions,e,t)),this}}},function(e,t,n){const r=n(1),o=n(14);e.exports=((e,t,n)=>{return r.equal(typeof e,"object","nanomorph: oldTree should be an object"),r.equal(typeof t,"object","nanomorph: newTree should be an object"),i(t,e,n)});const i=(e,t,n)=>t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(o(e,t,n),s(e,t,n),t):null:e,s=(e,t,n)=>{let r,o=0;for(var s=0;;s++){const c=t.childNodes[s],a=e.childNodes[s-o];if(!c&&!a)break;if(a)if(c)if(u(a,c))(r=i(a,c,n))!==c&&(t.replaceChild(r,c),o++);else{const e=Array.from(t.children).slice(s).find(e=>u(e,a));e?((r=i(a,e,n))!==e&&o++,t.insertBefore(r,c)):a.id||c.id?(t.insertBefore(a,c),o++):(r=i(a,c,n))!==c&&(t.replaceChild(r,c),o++)}else t.appendChild(a),o++;else t.removeChild(c),s--}},u=(e,t)=>e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(3===e.type&&e.nodeValue===t.nodeValue)},function(e,t){e.exports=((e,t,i)=>{const s=e.nodeType,u=e.nodeName;switch(s){case 1:n(e,t),r(e,t,i),"INPUT"===u&&o(e,t);break;case 3:case 8:t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue)}});const n=(e,t)=>{const n=t.attributes,r=e.attributes;Array.from(r).forEach(e=>{const n=e.localName,r=e.namespaceURI,o=e.value;if(t.hasAttributeNS(r,n)){if(t.getAttributeNS(r,n)===o)return null;"null"===o||"undefined"===o?t.removeAttributeNS(r,n):t.setAttributeNS(r,n,o)}else t.setAttributeNS(r,n,o)}),Array.from(n).forEach(n=>{const r=n.localName,o=n.namespaceURI;e.hasAttributeNS(o,r)||t.removeAttributeNS(o,r)})},r=(e,t,n)=>{if(!n)return!1;n(e,t).forEach(n=>{e[n]?t[n]=e[n]:t[n]&&(t[n]=void 0)})},o=(e,t)=>{const n=e.value,r=t.value;i(e,t,"checked"),i(e,t,"disabled"),n!==r&&(t.setAttributeNS(null,"value",n),t.value=n),"null"===n&&(t.value="",t.removeAttributeNS(null,"value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttributeNS(null,"value")},i=(e,t,n)=>{e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttributeNS(null,n,""):t.removeAttributeNS(null,n))}},function(e,t){!function(t,n){var r=t&&t.define;r&&r.amd?r("rlite",[],n):void 0!==e&&e.exports?e.exports=n():t.Rlite=n()}(this,function(){return function(e,t){var n={},r=decodeURIComponent;return function(){for(var e in t)u(e,t[e])}(),function(t,s){var u=function(e){var t=function(e){return~e.indexOf("/?")&&(e=e.replace("/?","?")),"/"==e[0]&&(e=e.slice(1)),"/"==e[e.length-1]&&(e=e.slice(0,-1)),e}(e).split("?"),s=~e.indexOf("%")?r:o;return function(e,t,n){if(e&&t.cb)for(var r=e.indexOf("#"),o=(r<0?e:e.slice(0,r)).split("&"),i=0;i<o.length;++i){var s=o[i].split("=");t.params[s[0]]=n(s[1])}return t}(t[1],i(t[0].split("/"),s,0,n,[])||{},s)}(t);return(u.cb||e)(u.params,s,t)};function o(e){return e}function i(e,t,n,r,o){if(r){if(n>=e.length){var u=r["@"];return u&&{cb:u,params:o.reduce(function(e,t){return e[t[0]]=t[1],e},{})}}var c=t(e[n]),a=o.length;return i(e,t,n+1,r[c.toLowerCase()],o)||s(e,t,n+1,r,":",c,o,a)||s(e,t,e.length,r,"*",e.slice(n).join("/"),o,a)}}function s(e,t,n,r,o,s,u,c){u.length=c;var a=r[o];return a&&u.push([a["~"],s]),i(e,t,n,a,u)}function u(e,t){for(var r=e.split("/"),o=n,i=+("/"===e[0]);i<r.length;++i){var s=r[i],u=":"==s[0]?":":"*"==s[0]?"*":s.toLowerCase();o=o[u]||(o[u]={}),(":"==u||"*"==u)&&(o["~"]=s.slice(1))}o["@"]=t}}})},function(e,t){e.exports=function(e,t,n){const r=function(e,r,o){const i=n[e];return i?i(r,o):t(e,r,o)},o=e(r);return o.h=r,o}},function(e,t,n){const r=n(18),o=1,i=2,s=3,u=4,c=5,a=6,l=7,f=8,p=9,h=10,d=11,g=12,y=13,m=14;e.exports=function(e,t){t||(t={comments:!0});const n=t.concat||function(e,t){return String(e)+String(t)},v=e=>{switch(typeof e){case"function":case"string":case"object":case"undefined":return e;default:return n("",e)}};return!1!==t.attrToProp&&(e=r(e)),function(r){for(var w=o,O="",S=arguments.length,x=[],j=0;j<r.length;j++)if(j<S-1){var E=arguments[j+1],A=P(r[j]),k=w;switch(k){case y:O+=E,E="";case h:case p:case l:k=f;break;case u:k=c}A.push([0,k,E]),x.push.apply(x,A)}else x.push.apply(x,P(r[j]));var N=[null,{},[]],T=[[N,-1]];for(j=0;j<x.length;j++){var q=T[T.length-1][0],$=(A=x[j])[0];if($===i&&/^\//.test(A[1])){var C=T[T.length-1][1];T.length>1&&(T.pop(),T[T.length-1][0][2][C]=e(q[0],q[1],q[2].length?q[2]:void 0))}else if($===i){var R=[A[1],{},[]];q[2].push(R),T.push([R,q[2].length-1])}else if($===c||0===$&&A[1]===c){for(var z,D="";j<x.length;j++)if(x[j][0]===c)D=n(D,x[j][1]);else{if(0!==x[j][0]||x[j][1]!==c)break;if("object"!=typeof x[j][2]||D)D=n(D,x[j][2]);else for(z in x[j][2])x[j][2].hasOwnProperty(z)&&!q[1][z]&&(q[1][z]=x[j][2][z])}x[j][0]===d&&j++;for(var L=j;j<x.length;j++)if(x[j][0]===f||x[j][0]===c)q[1][D]?""===x[j][1]||(q[1][D]=n(q[1][D],x[j][1])):q[1][D]=v(x[j][1]);else{if(0!==x[j][0]||x[j][1]!==f&&x[j][1]!==c){!D.length||q[1][D]||j!==L||x[j][0]!==s&&x[j][0]!==g||(q[1][D]=D.toLowerCase()),x[j][0]===s&&j--;break}q[1][D]?""===x[j][2]||(q[1][D]=n(q[1][D],x[j][2])):q[1][D]=v(x[j][2])}}else if($===m){C=T[T.length-1][1];T.pop(),T[T.length-1][0][2][C]=e(q[0],q[1],q[2].length?q[2]:void 0)}else if(0===$&&A[1]===o)void 0===A[2]||null===A[2]?A[2]="":A[2]||(A[2]=n("",A[2])),Array.isArray(A[2][0])?q[2].push.apply(q[2],A[2]):q[2].push(A[2]);else if($===o)q[2].push(A[1]);else if($!==d&&$!==g&&$!==s)throw new Error("unhandled: "+$)}if(N[2].length>1&&/^\s*$/.test(N[2][0])&&N[2].shift(),N[2].length>2||2===N[2].length&&/\S/.test(N[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(N[2][0])&&"string"==typeof N[2][0][0]&&Array.isArray(N[2][0][2])&&(N[2][0]=e(N[2][0][0],N[2][0][1],N[2][0][2])),N[2][0];function P(e){var n=[];w===l&&(w=u);for(var r=0;r<e.length;r++){var v=e.charAt(r);if(w===y){if(!/-$/.test(O)||"-"!==v){O+=v;continue}t.comments&&n.push([f,O.substr(0,O.length-1)],[s]),O="",w=o}w===o&&"<"===v?(O.length&&n.push([o,O]),O="",w=i):">"===v&&"/"===e.charAt(r-1)?(n.push([m]),O="",w=o):">"===v&&"-"===e.charAt(r-1)&&"-"===e.charAt(r-2)?(n.push([m]),O="",w=o):">"!==v||b(w)||w===y?w===i&&/^!--$/.test(O)?(t.comments&&n.push([i,O],[c,"comment"],[d]),O=v,w=y):w===o?O+=v:w===i&&"/"===v&&O.length?(n.push([i,O]),O="",w=o):w===i&&/\s/.test(v)?(n.push([i,O]),O="",w=u):w===i?O+=v:w===u&&/[^\s"'=/]/.test(v)?(w=c,O=v):w===u&&/\s/.test(v)?(O.length&&n.push([c,O]),n.push([g])):w===c&&/\s/.test(v)?(n.push([c,O]),O="",w=a):w===c&&"="===v?(n.push([c,O],[d]),O="",w=l):w===c?O+=v:w!==a&&w!==u||"="!==v?w!==a&&w!==u||/\s/.test(v)?w===l&&'"'===v?w=h:w===l&&"'"===v?w=p:w===h&&'"'===v?(n.push([f,O],[g]),O="",w=u):w===p&&"'"===v?(n.push([f,O],[g]),O="",w=u):w!==l||/\s/.test(v)?w===f&&/\s/.test(v)?(n.push([f,O],[g]),O="",w=u):w!==f&&w!==p&&w!==h||(O+=v):(w=f,r--):(n.push([g]),/[\w-]/.test(v)?(O+=v,w=c):w=u):(n.push([d]),w=l):(w===i?n.push([i,O]):w===c?n.push([c,O]):w===f&&O.length&&n.push([f,O]),n.push([s]),O="",w=o)}if(O.length)switch(w){case o:n.push([o,O]),O="";break;case f:case h:case p:n.push([f,O]),O=""}return w===c&&(n.push([c,O]),O=""),n}}};const b=e=>e===p||e===h},function(e,t){e.exports=function(e){return function(t,r,o){for(var i in r)i in n&&(r[n[i]]=r[i],delete r[i]);return e(t,r,o)}};var n={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}},function(e,t){e.exports=(e=>{window.addEventListener("hashchange",e,!1),window.addEventListener("popstate",e,!1);const t=window.history.pushState;window.history.pushState=((n,...r)=>{const o=t.apply(history,[n].concat(r));return e({state:n}),o})})},function(e,t,n){const r=n(0).html({"color-slider":n(21),"color-preview":n(22)});e.exports=(e=>{const t=`rgb(${e.color.red}, ${e.color.green}, ${e.color.blue})`;return r`
    <div style="zoom: 2; text-align: center;">
      <color-slider color='red' />
      <color-slider color='green' />
      <color-slider color='blue' />
      <color-preview size='2em' color=${t} />
      <div>${t}</div>
    </div>
  `})},function(e,t,n){const r=n(0).html();e.exports=(e=>{const{color:t}=window.engine.store,{actions:n}=window.engine,o=n=>{return`rgb(${"red"===e.color?n:t.red}, ${"green"===e.color?n:t.green}, ${"blue"===e.color?n:t.blue})`},i=`\n    -webkit-appearance: none;\n    height: 1em;\n    background: linear-gradient(to right, ${o(0)}, ${o(255)});\n    outline: none;\n  `;return r`
    <div>
      ${r`
  <style>
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1em;
      height: 1em;
      border: solid black;
      cursor: pointer;
    }

    input[type=range]:focus::-webkit-slider-thumb {
      border: solid white;
    }
  </style>
  `}
      ${e.color.slice(0,1)[0].toUpperCase()} <input
        style=${i} type="range"
        min="0" max="255" value=${t[e.color]}
        onchange=${t=>{n.setColorValue({color:e.color,value:t.currentTarget.value})}} />
    </div>
  `})},function(e,t,n){const r=n(0).html();e.exports=(e=>{return r`
    <div style=${`\n    width: ${e.size};\n    height: ${e.size};\n    background: ${e.color};\n    margin: 0.4em auto;\n  `} />
  `})},function(e,t,n){const r=n(0).html();e.exports=(()=>r`
    <div>
      <h1>404</h1>
      <code>No route ${window.location.pathname}</code><br />
      Check <code>tram-color-picker/main.js</code> to see all the available routes.
    </div>
  `)},function(e,t){e.exports={init:()=>({red:100,green:100,blue:100}),setColorValue:(e,{color:t,value:n})=>Object.assign({},e,{[t]:n})}}]);