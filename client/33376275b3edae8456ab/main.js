!function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=0,u=[];s<i.length;s++)o=i[s],n[o]&&u.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);u.length;)u.shift()()}var r={},n={7:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,o){r=n[e]=[t,o]});t.push(r[2]=i);var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"33376275b3edae8456ab/"+({0:"gameoflife~waves",1:"waves",2:"about",3:"gameoflife",4:"_",5:"_5xx",6:"_4xx"}[e]||e)+"."+e+".js"}(e);var c=setTimeout(function(){u({type:"timeout",target:s})},12e4);function u(t){s.onerror=s.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,r[1](a)}n[e]=void 0}}s.onerror=s.onload=u,a.appendChild(s)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="client/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;o(o.s=1)}([function(e,t,r){"use strict";function n(){}function o(e,t){for(var r in t)e[r]=t[r];return e}function i(e,t){for(var r in t)e[r]=1;return e}function a(e,t){t.appendChild(e)}function s(e,t,r){t.insertBefore(e,r)}function c(e){e.parentNode.removeChild(e)}function u(e,t,r){for(;e.nextSibling&&e.nextSibling!==t;)r.appendChild(e.parentNode.removeChild(e.nextSibling))}function l(e,t){for(var r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function f(){return document.createDocumentFragment()}function d(e){return document.createElement(e)}function h(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function m(){return document.createComment("")}function b(e,t,r){e.addEventListener(t,r,!1)}function v(e,t,r){e.removeEventListener(t,r,!1)}function g(e,t,r){e.setAttribute(t,r)}function _(e){return Array.from(e.childNodes)}function j(e,t,r,n){for(var o=0;o<e.length;o+=1){var i=e[o];if(i.nodeName===t){for(var a=0;a<i.attributes.length;a+=1){var s=i.attributes[a];r[s.name]||i.removeAttribute(s.name)}return e.splice(o,1)[0]}}return n?h(t):d(t)}function O(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(3===n.nodeType)return n.data=t,e.splice(r,1)[0]}return p(t)}function w(e,t,r){e.style.setProperty(t,r)}r.d(t,"g",function(){return x}),r.d(t,"a",function(){return P}),r.d(t,"b",function(){return N}),r.d(t,"s",function(){return k}),r.d(t,"t",function(){return C}),r.d(t,"v",function(){return S}),r.d(t,"y",function(){return L}),r.d(t,"h",function(){return U}),r.d(t,"B",function(){return T}),r.d(t,"z",function(){return $}),r.d(t,"d",function(){return a}),r.d(t,"w",function(){return s}),r.d(t,"r",function(){return c}),r.d(t,"A",function(){return u}),r.d(t,"q",function(){return l}),r.d(t,"n",function(){return f}),r.d(t,"m",function(){return d}),r.d(t,"o",function(){return h}),r.d(t,"p",function(){return p}),r.d(t,"l",function(){return m}),r.d(t,"c",function(){return b}),r.d(t,"C",function(){return v}),r.d(t,"D",function(){return g}),r.d(t,"i",function(){return _}),r.d(t,"j",function(){return j}),r.d(t,"k",function(){return O}),r.d(t,"E",function(){return w}),r.d(t,"u",function(){return y}),r.d(t,"x",function(){return n}),r.d(t,"e",function(){return o}),r.d(t,"f",function(){return i});function y(e,t){for(var r={},n={},o={},i=e.length;i--;){var a=e[i],s=t[i];if(s){for(var c in a)c in s||(n[c]=1);for(var c in s)o[c]||(r[c]=s[c],o[c]=1);e[i]=s}else for(var c in a)o[c]=1}for(var c in n)c in r||(r[c]=void 0);return r}function x(){return Object.create(null)}function E(e){this.destroy=n,this.fire("destroy"),this.set=n,this._fragment.d(!1!==e),this._fragment=null,this._state={}}function P(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function N(e,t){return e!=e?t==t:e!==t}function k(e,t){var r=e in this._handlers&&this._handlers[e].slice();if(r)for(var n=0;n<r.length;n+=1){var o=r[n];o.__calling||(o.__calling=!0,o.call(this,t),o.__calling=!1)}}function C(){return this._state}function S(e,t){e._handlers=x(),e._bind=t._bind,e.options=t,e.root=t.root||e,e.store=e.root.store||t.store}function L(e,t){var r=this._handlers[e]||(this._handlers[e]=[]);return r.push(t),{cancel:function(){var e=r.indexOf(t);~e&&r.splice(e,1)}}}function A(e){this._set(o({},e)),this.root._lock||(this.root._lock=!0,U(this.root._beforecreate),U(this.root._oncreate),U(this.root._aftercreate),this.root._lock=!1)}function R(e){var t=this._state,r={},n=!1;for(var i in e)this._differs(e[i],t[i])&&(r[i]=n=!0);n&&(this._state=o(o({},t),e),this._recompute(r,this._state),this._bind&&this._bind(r,this._state),this._fragment&&(this.fire("state",{changed:r,current:this._state,previous:t}),this._fragment.p(r,this._state),this.fire("update",{changed:r,current:this._state,previous:t})))}function U(e){for(;e&&e.length;)e.shift()()}function I(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)}function T(){this.store._remove(this)}var $={destroy:E,get:C,fire:k,on:L,set:A,_recompute:n,_set:R,_mount:I,_differs:P}},function(e,t,r){"use strict";function n(e){e.parentNode.removeChild(e)}function o(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function i(){return{x:window.scrollX,y:window.scrollY}}r.r(t);var a,s,c,u,l,f,d,h,p="undefined"!=typeof window&&window.__SAPPER__,m="undefined"!=typeof window?window.history:{pushState:function(e,t,r){},replaceState:function(e,t,r){},scrollRestoration:""},b={},v=1;function g(e){if(e.origin!==window.location.origin)return null;if(!e.pathname.startsWith(p.baseUrl))return null;for(var t=e.pathname.slice(p.baseUrl.length),r=function(r){var n=r.pattern.exec(t);if(n){if(r.ignore)return{value:null};var o=r.params(n),i={};return e.search.length>0&&e.search.slice(1).split("&").forEach(function(e){var t=/([^=]+)=(.*)/.exec(e),r=t[1],n=t[2];i[r]=n||!0}),{value:{url:e,route:r,props:{params:o,query:i,path:t}}}}},n=0,o=l;n<o.length;n++){var i=r(o[n]);if("object"==typeof i)return i.value}}function _(e,t){var r=null,n=null;return e.preload?!s&&p.preloaded?{Page:e,props:Object.assign(t,p.preloaded),redirect:r,error:n}:(s&&s.set({preloading:!0}),Promise.resolve(e.preload.call({store:u,fetch:function(e,t){return window.fetch(e,t)},redirect:function(e,t){r={statusCode:e,location:t}},error:function(e,t){n={statusCode:e,message:t}}},t)).catch(function(e){n={statusCode:500,message:e}}).then(function(o){return n?(n.statusCode>=400&&n.statusCode<500?f["4xx"]:f["5xx"]).load().then(function(e){var r=e.default,o=n.message instanceof Error?n.message:new Error(n.message);return Object.assign(t,{status:n.statusCode,error:o}),{Page:r,props:t,redirect:null}}):(Object.assign(t,o),{Page:e,props:t,redirect:r})})):{Page:e,props:t,redirect:r,error:n}}function j(e,t){t?d=t:(b[d]=i(),t=d=++v,b[d]={x:0,y:0}),d=t;var r=E&&E.href===e.url.href?E.promise:e.route.load().then(function(t){return _(t.default,e.props)});E=null;var o=h={};return r.then(function(e){var r=e.Page,i=e.props,l=e.redirect;if(l)return function(e,t){void 0===t&&(t={replaceState:!1});var r=g(new URL(e,document.baseURI));r?(j(r,null),m&&m[t.replaceState?"replaceState":"pushState"]({id:d},"",e)):window.location.href=e}(l.location,{replaceState:!0});!function(e,t,r,o){if(h===o){var i={Page:e,props:t,preloading:!1};if(s)s.set(i);else{var l=document.querySelector("#sapper-head-start"),f=document.querySelector("#sapper-head-end");if(l&&f){for(;l.nextSibling!==f;)n(l.nextSibling);n(l),n(f)}s=new a({target:c,data:i,store:u,hydrate:!0})}r&&window.scrollTo(r.x,r.y)}}(r,i,b[t],o)})}function O(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=o(e.target);if(t){var r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n!==window.location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(r?!t.target.baseVal:!t.target)){var i=new URL(n);if(i.pathname!==window.location.pathname||i.search!==window.location.search){var a=g(i);a&&(j(a,null),e.preventDefault(),m.pushState({id:d},"",i.href))}}}else e.preventDefault()}}}function w(e){(b[d]=i(),e.state)?j(g(new URL(window.location.href)),e.state.id):(d=++v,m.replaceState({id:d},"",window.location.href))}"scrollRestoration"in m&&(m.scrollRestoration="manual");var y,x,E=null;function P(e){clearTimeout(y),y=setTimeout(function(){N(e)},20)}function N(e){var t,r,n=o(e.target);n&&"prefetch"===n.rel&&(t=n.href,!(r=g(new URL(t,document.baseURI)))||E&&t===E.href||(E={href:t,promise:r.route.load().then(function(e){return _(e.default,r.props)})}))}var k=r(0);function C(e,t){this._handlers={},this._dependents=[],this._computed=Object(k.g)(),this._sortedComputedProperties=[],this._state=Object(k.e)({},e),this._differs=t&&t.immutable?k.b:k.a}Object(k.e)(C.prototype,{_add(e,t){this._dependents.push({component:e,props:t})},_init(e){const t={};for(let r=0;r<e.length;r+=1){const n=e[r];t["$"+n]=this._state[n]}return t},_remove(e){let t=this._dependents.length;for(;t--;)if(this._dependents[t].component===e)return void this._dependents.splice(t,1)},_set(e,t){const r=this._state;this._state=Object(k.e)(Object(k.e)({},r),e);for(let e=0;e<this._sortedComputedProperties.length;e+=1)this._sortedComputedProperties[e].update(this._state,t);this.fire("state",{changed:t,previous:r,current:this._state});const n=this._dependents.slice();for(let e=0;e<n.length;e+=1){const r=n[e],o={};let i=!1;for(let e=0;e<r.props.length;e+=1){const n=r.props[e];n in t&&(o["$"+n]=this._state[n],i=!0)}i&&r.component.set(o)}this.fire("update",{changed:t,previous:r,current:this._state})},_sortComputedProperties(){const e=this._computed,t=this._sortedComputedProperties=[],r=Object(k.g)();let n;function o(i){const a=e[i];a&&(a.deps.forEach(e=>{if(e===n)throw new Error(`Cyclical dependency detected between ${e} <-> ${i}`);o(e)}),r[i]||(r[i]=!0,t.push(a)))}for(const e in this._computed)o(n=e)},compute(e,t,r){let n;const o={deps:t,update:(o,i,a)=>{const s=t.map(e=>(e in i&&(a=!0),o[e]));if(a){const t=r.apply(null,s);this._differs(t,n)&&(n=t,i[e]=!0,o[e]=n)}}};this._computed[e]=o,this._sortComputedProperties();const i=Object(k.e)({},this._state),a={};o.update(i,a,!0),this._set(i,a)},fire:k.s,get:k.t,on:k.y,set(e){const t=this._state,r=this._changed={};let n=!1;for(const o in e){if(this._computed[o])throw new Error(`'${o}' is a read-only property`);this._differs(e[o],t[o])&&(r[o]=n=!0)}n&&this._set(e,r)}});const S=[{error:"4xx",load:()=>r.e(6).then(r.bind(null,10))},{error:"5xx",load:()=>r.e(5).then(r.bind(null,9))},{pattern:/^\/?$/,params:()=>({}),load:()=>r.e(4).then(r.bind(null,8))},{pattern:/^\/gameoflife\/?$/,params:()=>({}),load:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,7))},{pattern:/^\/about\/?$/,params:()=>({}),load:()=>r.e(2).then(r.bind(null,6))},{pattern:/^\/waves\/?$/,params:()=>({}),load:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,5))}];function L(e){var t,r,n,o,i,a,s,c,u,l,f,d,h,p,m,b,v,g,_,j;if(Object(k.v)(this,e),this._state=Object(k.e)({},e.data),this._intro=!0,document.getElementById("svelte-18u57i1-style")||((t=Object(k.m)("style")).id="svelte-18u57i1-style",t.textContent="nav.svelte-18u57i1{border-bottom:1px solid rgba(170,30,30,0.1);font-weight:300;padding:0 1em}ul.svelte-18u57i1{margin:0;padding:0}ul.svelte-18u57i1::after{content:'';display:block;clear:both}li.svelte-18u57i1{display:block;float:left}.selected.svelte-18u57i1{position:relative;display:inline-block}.selected.svelte-18u57i1::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(170,30,30);display:block;bottom:-1px}a.svelte-18u57i1{text-decoration:none;padding:1em 0.5em;display:block}",Object(k.d)(t,document.head)),this._fragment=(r=this._state,{c(){n=Object(k.m)("nav"),o=Object(k.m)("ul"),i=Object(k.m)("li"),a=Object(k.m)("a"),s=Object(k.p)("home"),u=Object(k.m)("li"),l=Object(k.m)("a"),f=Object(k.p)("about"),h=Object(k.m)("li"),p=Object(k.m)("a"),m=Object(k.p)("Game of Life"),v=Object(k.m)("li"),g=Object(k.m)("a"),_=Object(k.p)("Waves"),this.h()},l(e){n=Object(k.j)(e,"NAV",{class:!0},!1);var t=Object(k.i)(n);o=Object(k.j)(t,"UL",{class:!0},!1);var r=Object(k.i)(o);i=Object(k.j)(r,"LI",{class:!0},!1);var c=Object(k.i)(i);a=Object(k.j)(c,"A",{class:!0,href:!0},!1);var d=Object(k.i)(a);s=Object(k.k)(d,"home"),d.forEach(k.r),c.forEach(k.r),u=Object(k.j)(r,"LI",{class:!0},!1);var b=Object(k.i)(u);l=Object(k.j)(b,"A",{class:!0,href:!0},!1);var j=Object(k.i)(l);f=Object(k.k)(j,"about"),j.forEach(k.r),b.forEach(k.r),h=Object(k.j)(r,"LI",{class:!0},!1);var O=Object(k.i)(h);p=Object(k.j)(O,"A",{rel:!0,class:!0,href:!0},!1);var w=Object(k.i)(p);m=Object(k.k)(w,"Game of Life"),w.forEach(k.r),O.forEach(k.r),v=Object(k.j)(r,"LI",{class:!0},!1);var y=Object(k.i)(v);g=Object(k.j)(y,"A",{rel:!0,class:!0,href:!0},!1);var x=Object(k.i)(g);_=Object(k.k)(x,"Waves"),x.forEach(k.r),y.forEach(k.r),r.forEach(k.r),t.forEach(k.r),this.h()},h(){a.className=c=("home"===r.page&&"selected")+" svelte-18u57i1",a.href=".",i.className="svelte-18u57i1",l.className=d=("about"===r.page&&"selected")+" svelte-18u57i1",l.href="about",u.className="svelte-18u57i1",p.rel="prefetch",p.className=b=("gameoflife"===r.page&&"selected")+" svelte-18u57i1",p.href="gameoflife",h.className="svelte-18u57i1",g.rel="prefetch",g.className=j=("waves"===r.page&&"selected")+" svelte-18u57i1",g.href="waves",v.className="svelte-18u57i1",o.className="svelte-18u57i1",n.className="svelte-18u57i1"},m(e,t){Object(k.w)(n,e,t),Object(k.d)(o,n),Object(k.d)(i,o),Object(k.d)(a,i),Object(k.d)(s,a),Object(k.d)(u,o),Object(k.d)(l,u),Object(k.d)(f,l),Object(k.d)(h,o),Object(k.d)(p,h),Object(k.d)(m,p),Object(k.d)(v,o),Object(k.d)(g,v),Object(k.d)(_,g)},p(e,t){e.page&&c!==(c=("home"===t.page&&"selected")+" svelte-18u57i1")&&(a.className=c),e.page&&d!==(d=("about"===t.page&&"selected")+" svelte-18u57i1")&&(l.className=d),e.page&&b!==(b=("gameoflife"===t.page&&"selected")+" svelte-18u57i1")&&(p.className=b),e.page&&j!==(j=("waves"===t.page&&"selected")+" svelte-18u57i1")&&(g.className=j)},d(e){e&&Object(k.r)(n)}}),e.target){var O=Object(k.i)(e.target);e.hydrate?this._fragment.l(O):this._fragment.c(),O.forEach(k.r),this._mount(e.target,e.anchor)}}Object(k.e)(L.prototype,k.z);var A=L;function R(e){var t;if(Object(k.v)(this,e),this._state=Object(k.e)({},e.data),this._intro=!0,document.getElementById("svelte-dk9c5n-style")||((t=Object(k.m)("style")).id="svelte-dk9c5n-style",t.textContent="main.svelte-dk9c5n{position:relative;max-width:56em;background-color:white;padding:1em;margin:0 auto;box-sizing:border-box}",Object(k.d)(t,document.head)),e.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(e,t){var r,n,o={page:"/"===t.props.path?"home":"/gameoflife"===t.props.path?"gameoflife":"/waves"===t.props.path?"waves":"/about"===t.props.path?"about":null},i=new A({root:e.root,data:o}),a=[t.props],s=t.Page;function c(t){for(var r={},n=0;n<a.length;n+=1)r=Object(k.e)(r,a[n]);return{root:e.root,data:r}}if(s)var u=new s(c());return{c(){i._fragment.c(),r=Object(k.p)("\n\n"),n=Object(k.m)("main"),u&&u._fragment.c(),this.h()},l(e){i._fragment.l(e),r=Object(k.k)(e,"\n\n"),n=Object(k.j)(e,"MAIN",{class:!0},!1);var t=Object(k.i)(n);u&&u._fragment.l(t),t.forEach(k.r),this.h()},h(){n.className="svelte-dk9c5n"},m(e,t){i._mount(e,t),Object(k.w)(r,e,t),Object(k.w)(n,e,t),u&&u._mount(n,null)},p(e,t){var r={};e.props&&(r.page="/"===t.props.path?"home":"/gameoflife"===t.props.path?"gameoflife":"/waves"===t.props.path?"waves":"/about"===t.props.path?"about":null),i._set(r);var o=e.props?Object(k.u)(a,[t.props]):{};s!==(s=t.Page)?(u&&u.destroy(),s&&((u=new s(c()))._fragment.c(),u._mount(n,null))):s&&u._set(o)},d(e){i.destroy(e),e&&(Object(k.r)(r),Object(k.r)(n)),u&&u.destroy()}}}(this,this._state),e.target){var r=Object(k.i)(e.target);e.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(k.r),this._mount(e.target,e.anchor),this._lock=!0,Object(k.h)(this._beforecreate),Object(k.h)(this._oncreate),Object(k.h)(this._aftercreate),this._lock=!1}}Object(k.e)(R.prototype,k.z);var U=R;!function(e){if(e instanceof HTMLElement)throw new Error("The signature of init(...) has changed — see https://sapper.svelte.technology/guide#0-11-to-0-12 for more information");a=e.App,c=e.target,l=e.routes.filter(function(e){return!e.error}),f={"4xx":e.routes.find(function(e){return"4xx"===e.error}),"5xx":e.routes.find(function(e){return"5xx"===e.error})},e&&e.store&&(u=e.store(p.store)),x||(window.addEventListener("click",O),window.addEventListener("popstate",w),window.addEventListener("touchstart",N),window.addEventListener("mousemove",P),x=!0),Promise.resolve().then(function(){var e=window.location,t=e.hash,r=e.href,n=t&&document.getElementById(t.slice(1));return b[v]=n?{x:0,y:n.getBoundingClientRect().top}:i(),m.replaceState({id:v},"",r),j(g(new URL(window.location.href)),v)})}({target:document.querySelector("#sapper"),routes:S,App:U,store:e=>new C(e)})}]);