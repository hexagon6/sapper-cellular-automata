(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,c){"use strict";const s="100,50 75,93.33333333333334 25,93.33333333333334 0,50 25,6.666666666666667 75,6.666666666666667",i=t=>t.map(t=>t.join(",")).join(" "),r=t=>t.split(" ").map(t=>t.split(",").map(Number));var n={field:(t,e,c,s)=>(t=>Array.from({length:t}).map((t,e)=>e))(t*e).map(((t,e,c,s)=>i=>({x:i%t,y:Math.floor(i/e),v:s(i,c)}))(t,e,c,s)),scale:(t=1)=>i(r(s).map(e=>e.map(e=>t*e))),serialize:i,deserialize:r,hexagonPoints:s,bigHexagonPoints:"300,150 225,280 75,280 0,150 75,20 225,20"};var o={field:(t,e,c,s)=>Array.from({length:t*e}).map((e,i)=>({x:i%t,y:Math.floor(i/t),v:s(i,c)}))};const a=t=>t>=1;const l=(t,e=0)=>{const c=function*(t=1/0,e=0){for(var c=e;;)yield c++%t}(t.length,e);return{next:()=>t[c.next().value]}},h=[["#ffffff","#efefef"],["#ff6738","#18c8ff","#efaf03","#60f370"]];var b={name:"Game of Life",algorithm:{name:"GoL",run:{rectangular:(t,e)=>c=>{const{moore:s}=p(t,e);return Object.keys(c).map(t=>{const e=y(t)(c,a,s);return{[t]:2===e?c[t]:e>2&&e<4?1:0}}).reduce((t,e)=>Object.assign(t,e),{})},hexagonal:(t,e)=>c=>{const{hex:s}=p(t,e);return Object.keys(c).map(t=>{const e=y(t)(c,a,s);return{[t]:2===e?c[t]:e>2&&e<4?1:0}}).reduce((t,e)=>Object.assign(t,e),{})}}},field:[],fieldtypes:()=>l([{fieldtype:"rectangular"},{fieldtype:"hexagonal"}],0),statecolors:h[0],stati:h};const f=t=>1===t,j=[["#ffffff","#dfdfdf","#efefef"],["#ff6738","#18c8ff","#efaf03","#60f370"]];var O={name:"Waves",algorithm:{name:"Waves",run:{rectangular:(t,e)=>c=>{const{vneumann:s}=p(t,e);return Object.keys(c).map(t=>{const e=y(t)(c,f,s),i=c[t];return{[t]:e>0||i>0?(i+1)%3:i}}).reduce((t,e)=>Object.assign(t,e),{})},hexagonal:(t,e)=>c=>{const{hex:s}=p(t,e);return Object.keys(c).map(t=>{const e=y(t)(c,f,s),i=c[t];return{[t]:e>0||i>0?(i+1)%3:i}}).reduce((t,e)=>Object.assign(t,e),{})}}},field:[],fieldtypes:()=>l([{fieldtype:"rectangular"},{fieldtype:"hexagonal"}],1),statecolors:j[0],stati:j};const d=t=>t.split("x").map(Number),u=t=>t.reduce((t,e)=>Object.assign(t,{[`${e.x}x${e.y}`]:e.v}),{}),g=t=>Object.entries(t).map(([t,e])=>{const[c,s]=d(t);return{x:c,y:s,v:e}}),p=(t,e)=>{if(0===t||0===e)throw Error("choose 1 instead of 0");const c=e=>(e-1+t)%t,s=e=>(e+1)%t,i=t=>(t-1+e)%e,r=t=>(t+1)%e,n=([t,e],[n,o])=>{return[s(t)===n||c(t)===n,r(e)===o||i(e)===o]},o=(t,e)=>c=>{const[s,i]=d(c),[r,o]=n([s,i],[t,e]);return s===t&&o||i===e&&r};return{hex:(t,e)=>n=>{const[a,l]=d(n),h=s(a)===t||c(a)===t,[b,f]=[i(l)===e,r(l)===e],j=o(t,e)(n);return(t%2==0?b:f)&&h||j},moore:(t,e)=>c=>{const[s,i]=d(c),[r,a]=n([s,i],[t,e]);return r&&a||o(t,e)(c)},vneumann:o,left:c,right:s,up:i,down:r}},v=function(t,e,c){if(t.store){const s=t.store.get();e in s&&!s[e]&&t.fire(c)}};c.d(e,"e",function(){return m}),c.d(e,"j",function(){return x}),c.d(e,"c",function(){return y}),c.d(e,"f",function(){return n}),c.d(e,"h",function(){return l}),c.d(e,"k",function(){return v}),c.d(e,"a",function(){return b}),c.d(e,"b",function(){return O}),c.d(e,"g",function(){return u}),c.d(e,"d",function(){return g}),c.d(e,"i",function(){return p});const m=t=>{const e={hexagonal:n.field,rectangular:o.field};return t in e?e[t]:e.rectangular},y=t=>(e,c,s)=>{const[i,r]=d(t),n=!!s&&s(i,r);return Object.entries(e).filter(([e,s])=>e!==t&&!n||n(e)&&c(s)).reduce((t,e)=>t+1,0)},x=(t,e)=>Math.floor(Math.random()*t)%e},function(t,e,c){"use strict";var s=c(0),i=c(2);function r(t,e,c){const s=Object.create(t);return s.key=e[c][0],s.value=e[c][1],s}function n(t,e){var c,i,r,n,o=e.key,a=e.value;return{c(){c=Object(s.l)("li"),i=Object(s.o)(o),r=Object(s.o)(": "),n=Object(s.o)(a),this.h()},l(t){c=Object(s.i)(t,"LI",{class:!0},!1);var e=Object(s.h)(c);i=Object(s.j)(e,o),r=Object(s.j)(e,": "),n=Object(s.j)(e,a),e.forEach(s.q),this.h()},h(){c.className="svelte-944b6p"},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(c,r),Object(s.d)(c,n)},p(t,e){t.els&&o!==(o=e.key)&&Object(s.E)(i,o),t.els&&a!==(a=e.value)&&Object(s.E)(n,a)},d(t){t&&Object(s.q)(c)}}}function o(t){var e;if(Object(s.v)(this,t),this._state=Object(s.e)({els:[]},t.data),this._recompute({elements:1},this._state),this._intro=!0,document.getElementById("svelte-944b6p-style")||((e=Object(s.l)("style")).id="svelte-944b6p-style",e.textContent="ul.svelte-944b6p{list-style:none}li.svelte-944b6p{float:left;padding-right:2em}",Object(s.d)(document.head,e)),this._fragment=function(t,e){for(var c,i=e.els,o=[],a=0;a<i.length;a+=1)o[a]=n(0,r(e,i,a));return{c(){c=Object(s.l)("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){c=Object(s.i)(t,"UL",{class:!0},!1);for(var e=Object(s.h)(c),i=0;i<o.length;i+=1)o[i].l(e);e.forEach(s.q),this.h()},h(){c.className="svelte-944b6p"},m(t,e){Object(s.w)(t,c,e);for(var i=0;i<o.length;i+=1)o[i].m(c,null)},p(t,e){if(t.els){i=e.els;for(var s=0;s<i.length;s+=1){const a=r(e,i,s);o[s]?o[s].p(t,a):(o[s]=n(0,a),o[s].c(),o[s].m(c,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=i.length}},d(t){t&&Object(s.q)(c),Object(s.p)(o,t)}}}(0,this._state),t.target){var c=Object(s.h)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(s.q),this._mount(t.target,t.anchor)}}Object(s.e)(o.prototype,s.z),o.prototype._recompute=function(t,e){t.elements&&this._differs(e.els,e.els=function({elements:t}){return Object.entries(t)}(e))&&(t.els=!0)};var a=o;function l(t,e){return e<t.length?t[e]:t[0]}function h(t){const{component:e,ctx:c}=this._svelte;e.fire("cell",{x:c.f.x,y:c.f.y,s:c.$statecolors.length})}function b(t,e,c){const s=Object.create(t);return s.f=e[c],s.i=c,s}function f(t,e){var c,i,r,n,o,a;return{c(){c=Object(s.n)("g"),i=Object(s.n)("use"),this.h()},l(t){c=Object(s.i)(t,"g",{transform:!0},!0);var e=Object(s.h)(c);i=Object(s.i)(e,"use",{x:!0,y:!0,href:!0,fill:!0},!0),Object(s.h)(i).forEach(s.q),e.forEach(s.q),this.h()},h(){i._svelte={component:t,ctx:e},Object(s.c)(i,"click",h),Object(s.D)(i,"x",r=e.f.x*e.cx*e.$size),Object(s.D)(i,"y",n=e.f.y*e.cy*e.$size),Object(s.D)(i,"href","#rectangle"),Object(s.D)(i,"fill",o=l(e.$statecolors,e.f.v)),Object(s.D)(c,"transform",a="matrix(2,0,0,2,"+e.f.x+","+e.f.y+")")},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i)},p(t,h){e=h,i._svelte.ctx=e,(t.field||t.cx||t.$size)&&r!==(r=e.f.x*e.cx*e.$size)&&Object(s.D)(i,"x",r),(t.field||t.cy||t.$size)&&n!==(n=e.f.y*e.cy*e.$size)&&Object(s.D)(i,"y",n),(t.$statecolors||t.field)&&o!==(o=l(e.$statecolors,e.f.v))&&Object(s.D)(i,"fill",o),t.field&&a!==(a="matrix(2,0,0,2,"+e.f.x+","+e.f.y+")")&&Object(s.D)(c,"transform",a)},d(t){t&&Object(s.q)(c),Object(s.C)(i,"click",h)}}}function j(t){var e;if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["size","x","y","statecolors"]),t.data),this.store._add(this,["size","x","y","statecolors"]),this._recompute({$size:1,$x:1,$y:1},this._state),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-1kbt9hu-style")||((e=Object(s.l)("style")).id="svelte-1kbt9hu-style",e.textContent="svg.svelte-1kbt9hu{width:100%;height:100%;border:1px solid white}",Object(s.d)(document.head,e)),this._fragment=function(t,e){for(var c,i,r,n,o,a,l,h=e.field,j=[],O=0;O<h.length;O+=1)j[O]=f(t,b(e,h,O));return{c(){c=Object(s.n)("svg"),i=Object(s.n)("defs"),r=Object(s.n)("rect"),a=Object(s.n)("g");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l(t){c=Object(s.i)(t,"svg",{width:!0,height:!0,viewBox:!0,class:!0},!0);var e=Object(s.h)(c);i=Object(s.i)(e,"defs",{},!0);var n=Object(s.h)(i);r=Object(s.i)(n,"rect",{id:!0,width:!0,height:!0,"stroke-opacity":!0,stroke:!0},!0),Object(s.h)(r).forEach(s.q),n.forEach(s.q),a=Object(s.i)(e,"g",{},!0);for(var o=Object(s.h)(a),l=0;l<j.length;l+=1)j[l].l(o);o.forEach(s.q),e.forEach(s.q),this.h()},h(){Object(s.D)(r,"id","rectangle"),Object(s.D)(r,"width",n=e.cx*e.$size),Object(s.D)(r,"height",o=e.cy*e.$size),Object(s.D)(r,"stroke-opacity","0.2"),Object(s.D)(r,"stroke","#efefef"),Object(s.D)(c,"width","100%"),Object(s.D)(c,"height","100%"),Object(s.D)(c,"viewBox",l="0 0 "+e.x+" "+e.y),Object(s.D)(c,"class","svelte-1kbt9hu")},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r),Object(s.d)(c,a);for(var n=0;n<j.length;n+=1)j[n].m(a,null)},p(e,i){if((e.cx||e.$size)&&n!==(n=i.cx*i.$size)&&Object(s.D)(r,"width",n),(e.cy||e.$size)&&o!==(o=i.cy*i.$size)&&Object(s.D)(r,"height",o),e.field||e.cx||e.$size||e.cy||e.$statecolors){h=i.field;for(var O=0;O<h.length;O+=1){const c=b(i,h,O);j[O]?j[O].p(e,c):(j[O]=f(t,c),j[O].c(),j[O].m(a,null))}for(;O<j.length;O+=1)j[O].d(1);j.length=h.length}(e.x||e.y)&&l!==(l="0 0 "+i.x+" "+i.y)&&Object(s.D)(c,"viewBox",l)},d(t){t&&Object(s.q)(c),Object(s.p)(j,t)}}}(this,this._state),t.target){var c=Object(s.h)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(s.q),this._mount(t.target,t.anchor)}}Object(s.e)(j.prototype,s.z),j.prototype._recompute=function(t,e){(t.$size||t.$x)&&this._differs(e.x,e.x=function({$size:t,$x:e}){return t*e*100}(e))&&(t.x=!0),(t.$size||t.$y)&&this._differs(e.y,e.y=function({$size:t,$y:e}){return t*e*100}(e))&&(t.y=!0)};var O=j;const{scale:d}=i.f;function u(t,e){return e<t.length?t[e]:t[0]}function g(t){const{component:e,ctx:c}=this._svelte;e.fire("cell",{x:c.f.x,y:c.f.y,s:c.$statecolors.length})}function p(t,e,c){const s=Object.create(t);return s.f=e[c],s.i=c,s}function v(t,e){var c,i,r,n,o;return{c(){c=Object(s.n)("g"),i=Object(s.n)("use"),this.h()},l(t){c=Object(s.i)(t,"g",{transform:!0},!0);var e=Object(s.h)(c);i=Object(s.i)(e,"use",{href:!0,fill:!0,x:!0,y:!0},!0),Object(s.h)(i).forEach(s.q),e.forEach(s.q),this.h()},h(){i._svelte={component:t,ctx:e},Object(s.c)(i,"click",g),Object(s.D)(i,"href","#hexagon"),Object(s.D)(i,"fill",r=u(e.$statecolors,e.f.v)),Object(s.D)(i,"x",0),Object(s.D)(i,"y",n=e.f.x%2==1?6.66*e.$size:50*e.$size),Object(s.D)(c,"transform",o="matrix(1,0,0,1,"+75*e.f.x*e.$size+","+86.66*e.f.y*e.$size+")")},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i)},p(t,a){e=a,i._svelte.ctx=e,(t.$statecolors||t.field)&&r!==(r=u(e.$statecolors,e.f.v))&&Object(s.D)(i,"fill",r),(t.field||t.$size)&&n!==(n=e.f.x%2==1?6.66*e.$size:50*e.$size)&&Object(s.D)(i,"y",n),(t.field||t.$size)&&o!==(o="matrix(1,0,0,1,"+75*e.f.x*e.$size+","+86.66*e.f.y*e.$size+")")&&Object(s.D)(c,"transform",o)},d(t){t&&Object(s.q)(c),Object(s.C)(i,"click",g)}}}function m(t){var e;if(Object(s.v)(this,t),this._state=Object(s.e)(Object(s.e)(this.store._init(["size","x","y","statecolors"]),{field:[],hexagon:d()}),t.data),this.store._add(this,["size","x","y","statecolors"]),this._recompute({$size:1,$x:1,$y:1},this._state),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-1kbt9hu-style")||((e=Object(s.l)("style")).id="svelte-1kbt9hu-style",e.textContent="svg.svelte-1kbt9hu{width:100%;height:100%;border:1px solid white}",Object(s.d)(document.head,e)),this._fragment=function(t,e){for(var c,i,r,n,o,a=e.field,l=[],h=0;h<a.length;h+=1)l[h]=v(t,p(e,a,h));return{c(){c=Object(s.n)("svg"),i=Object(s.n)("defs"),r=Object(s.n)("polygon"),n=Object(s.n)("g");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){c=Object(s.i)(t,"svg",{width:!0,height:!0,viewBox:!0,class:!0},!0);var e=Object(s.h)(c);i=Object(s.i)(e,"defs",{},!0);var o=Object(s.h)(i);r=Object(s.i)(o,"polygon",{id:!0,points:!0,opacity:!0,"stroke-opacity":!0,stroke:!0},!0),Object(s.h)(r).forEach(s.q),o.forEach(s.q),n=Object(s.i)(e,"g",{transform:!0},!0);for(var a=Object(s.h)(n),h=0;h<l.length;h+=1)l[h].l(a);a.forEach(s.q),e.forEach(s.q),this.h()},h(){Object(s.D)(r,"id","hexagon"),Object(s.D)(r,"points",e.hexagon),Object(s.D)(r,"opacity","1"),Object(s.D)(r,"stroke-opacity","0.2"),Object(s.D)(r,"stroke","#efefef"),Object(s.D)(n,"transform","matrix(1.35,0,0,1.195,0,0)"),Object(s.D)(c,"width","100%"),Object(s.D)(c,"height","100%"),Object(s.D)(c,"viewBox",o="0 8 "+e.x+" "+e.y),Object(s.D)(c,"class","svelte-1kbt9hu")},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r),Object(s.d)(c,n);for(var o=0;o<l.length;o+=1)l[o].m(n,null)},p(e,i){if(e.hexagon&&Object(s.D)(r,"points",i.hexagon),e.field||e.$size||e.$statecolors){a=i.field;for(var h=0;h<a.length;h+=1){const c=p(i,a,h);l[h]?l[h].p(e,c):(l[h]=v(t,c),l[h].c(),l[h].m(n,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}(e.x||e.y)&&o!==(o="0 8 "+i.x+" "+i.y)&&Object(s.D)(c,"viewBox",o)},d(t){t&&Object(s.q)(c),Object(s.p)(l,t)}}}(this,this._state),t.target){var c=Object(s.h)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(s.q),this._mount(t.target,t.anchor)}}Object(s.e)(m.prototype,s.z),m.prototype._recompute=function(t,e){t.$size&&this._differs(e.hexagon,e.hexagon=function({$size:t}){return d(t)}(e))&&(t.hexagon=!0),(t.$size||t.$x)&&this._differs(e.x,e.x=function({$size:t,$x:e}){return 100*t*e}(e))&&(t.x=!0),(t.$size||t.$y)&&this._differs(e.y,e.y=function({$size:t,$y:e}){return 100*t*e}(e))&&(t.y=!0)};var y=m,x={cell({x:t,y:e,s:c}){const{field:s}=this.store.get(),r=Object(i.g)(s),n=`${t}x${e}`;r[n]=(r[n]+1)%c,this.store.set({field:Object(i.d)(r)})}};function _(t,e,c){const s=Object.create(t);return s._s=e[c],s}function $(t,e){var c={cx:"86.66",cy:"100",field:e.$field},s=new y({root:t.root,store:t.store,data:c});return s.on("cell",function(e){t.cell(e)}),{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var c={};t.$field&&(c.field=e.$field),s._set(c)},d(t){s.destroy(t)}}}function z(t,e){var c={cx:"50",cy:"50",field:e.$field},s=new O({root:t.root,store:t.store,data:c});return s.on("cell",function(e){t.cell(e)}),{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var c={};t.$field&&(c.field=e.$field),s._set(c)},d(t){s.destroy(t)}}}function k(t,e){for(var c,i=e.$statecolors,r=[],n=0;n<i.length;n+=1)r[n]=w(t,_(e,i,n));return{c(){c=Object(s.l)("ul");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){c=Object(s.i)(t,"UL",{class:!0},!1);for(var e=Object(s.h)(c),i=0;i<r.length;i+=1)r[i].l(e);e.forEach(s.q),this.h()},h(){c.className="svelte-zeaulo"},m(t,e){Object(s.w)(t,c,e);for(var i=0;i<r.length;i+=1)r[i].m(c,null)},p(e,s){if(e.$statecolors){i=s.$statecolors;for(var n=0;n<i.length;n+=1){const o=_(s,i,n);r[n]?r[n].p(e,o):(r[n]=w(t,o),r[n].c(),r[n].m(c,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=i.length}},d(t){t&&Object(s.q)(c),Object(s.p)(r,t)}}}function w(t,e){var c,i,r,n,o,a,l,h=e._s;return{c(){c=Object(s.l)("li"),i=Object(s.l)("span"),r=Object(s.o)("["),n=Object(s.o)(h),o=Object(s.o)("]"),l=Object(s.o)("\n      "),this.h()},l(t){c=Object(s.i)(t,"LI",{class:!0},!1);var e=Object(s.h)(c);i=Object(s.i)(e,"SPAN",{style:!0},!1);var a=Object(s.h)(i);r=Object(s.j)(a,"["),n=Object(s.j)(a,h),o=Object(s.j)(a,"]"),a.forEach(s.q),l=Object(s.j)(e,"\n      "),e.forEach(s.q),this.h()},h(){i.style.cssText=a=`color: ${e._s};`,c.className="svelte-zeaulo"},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r),Object(s.d)(i,n),Object(s.d)(i,o),Object(s.d)(c,l)},p(t,e){t.$statecolors&&h!==(h=e._s)&&Object(s.E)(n,h),t.$statecolors&&a!==(a=`color: ${e._s};`)&&(i.style.cssText=a)},d(t){t&&Object(s.q)(c)}}}function q(t){var e,c,i,r,n,o,l,h,b,f,j,O,d,u;if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["fieldtype","field","x","y","statecolors"]),t.data),this.store._add(this,["fieldtype","field","x","y","statecolors"]),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-zeaulo-style")||((e=Object(s.l)("style")).id="svelte-zeaulo-style",e.textContent="span.overview.svelte-zeaulo{width:10vw;color:violet;font-weight:700;font-size:0.5em}ul.svelte-zeaulo{font-weight:300;font-style:italic;list-style:none}li.svelte-zeaulo{display:block;float:left}.field-container.svelte-zeaulo{padding:0;width:100%;height:98%;overflow:hidden;box-sizing:content-box}",Object(s.d)(document.head,e)),this._fragment=(c=this,i=this._state,f="hexagonal"===i.$fieldtype&&$(c,i),j="rectangular"===i.$fieldtype&&z(c,i),O={elements:{$x:i.$x,$y:i.$y,cells:i.$x*i.$y}},d=new a({root:c.root,store:c.store,data:O}),u=i.$statecolors&&k(c,i),{c(){r=Object(s.l)("div"),f&&f.c(),n=Object(s.o)(" "),j&&j.c(),o=Object(s.o)("\n\n"),l=Object(s.l)("span"),d._fragment.c(),h=Object(s.o)("\n  "),b=Object(s.l)("div"),u&&u.c(),this.h()},l(t){r=Object(s.i)(t,"DIV",{class:!0},!1);var e=Object(s.h)(r);f&&f.l(e),n=Object(s.j)(e," "),j&&j.l(e),e.forEach(s.q),o=Object(s.j)(t,"\n\n"),l=Object(s.i)(t,"SPAN",{class:!0},!1);var c=Object(s.h)(l);d._fragment.l(c),h=Object(s.j)(c,"\n  "),b=Object(s.i)(c,"DIV",{},!1);var i=Object(s.h)(b);u&&u.l(i),i.forEach(s.q),c.forEach(s.q),this.h()},h(){r.className="field-container svelte-zeaulo",l.className="overview svelte-zeaulo"},m(t,e){Object(s.w)(t,r,e),f&&f.m(r,null),Object(s.d)(r,n),j&&j.m(r,null),Object(s.w)(t,o,e),Object(s.w)(t,l,e),d._mount(l,null),Object(s.d)(l,h),Object(s.d)(l,b),u&&u.m(b,null)},p(t,e){"hexagonal"===e.$fieldtype?f?f.p(t,e):((f=$(c,e)).c(),f.m(r,n)):f&&(f.d(1),f=null),"rectangular"===e.$fieldtype?j?j.p(t,e):((j=z(c,e)).c(),j.m(r,null)):j&&(j.d(1),j=null);var s={};(t.$x||t.$y)&&(s.elements={$x:e.$x,$y:e.$y,cells:e.$x*e.$y}),d._set(s),e.$statecolors?u?u.p(t,e):((u=k(c,e)).c(),u.m(b,null)):u&&(u.d(1),u=null)},d(t){t&&Object(s.q)(r),f&&f.d(),j&&j.d(),t&&(Object(s.q)(o),Object(s.q)(l)),d.destroy(),u&&u.d()}}),this.root._oncreate.push(()=>{(function(){this.store.set({field:[],size:.5,x:8,y:8})}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var g=Object(s.h)(t.target);t.hydrate?this._fragment.l(g):this._fragment.c(),g.forEach(s.q),this._mount(t.target,t.anchor),Object(s.s)(this)}}Object(s.e)(q.prototype,s.z),Object(s.e)(q.prototype,x);e.a=q},function(t,e,c){"use strict";var s=c(0),i=c(2),r={toggleFieldResize(){const{fieldsizes:t}=this.store.get(),{x:e,y:c,size:s}=t.next();this.store.set({x:e,y:c,size:s})}};function n(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["x","y"]),t.data),this.store._add(this,["x","y"]),this._intro=!0,this._handlers.destroy=[s.B],this._fragment=function(t,e){var c,i;function r(e){t.toggleFieldResize()}return{c(){c=Object(s.l)("input"),this.h()},l(t){c=Object(s.i)(t,"INPUT",{type:!0,value:!0},!1),Object(s.h)(c).forEach(s.q),this.h()},h(){Object(s.c)(c,"click",r),Object(s.D)(c,"type","button"),c.value=i=`[${e.$x}x${e.$y}]`},m(t,e){Object(s.w)(t,c,e)},p(t,e){(t.$x||t.$y)&&i!==(i=`[${e.$x}x${e.$y}]`)&&(c.value=i)},d(t){t&&Object(s.q)(c),Object(s.C)(c,"click",r)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){const t=Object(i.h)([{x:8,y:8,size:.5},{x:16,y:16,size:.25}],0),{x:e,y:c,size:s}=t.next();this.store.set({x:e,y:c,size:s,fieldsizes:t})}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var e=Object(s.h)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.q),this._mount(t.target,t.anchor),Object(s.s)(this)}}Object(s.e)(n.prototype,s.z),Object(s.e)(n.prototype,r);var o=n,a={toggleFieldType(){const{fieldtypes:t}=this.store.get(),{fieldtype:e}=t.next();this.store.set({fieldtype:e})}};function l(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["fieldtype"]),t.data),this.store._add(this,["fieldtype"]),this._intro=!0,this._handlers.destroy=[s.B],this._fragment=function(t,e){var c;function i(e){t.toggleFieldType()}return{c(){c=Object(s.l)("input"),this.h()},l(t){c=Object(s.i)(t,"INPUT",{type:!0,value:!0},!1),Object(s.h)(c).forEach(s.q),this.h()},h(){Object(s.c)(c,"click",i),Object(s.D)(c,"type","button"),c.value=e.$fieldtype},m(t,e){Object(s.w)(t,c,e)},p(t,e){t.$fieldtype&&(c.value=e.$fieldtype)},d(t){t&&Object(s.q)(c),Object(s.C)(c,"click",i)}}}(this,this._state),t.target){var e=Object(s.h)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.q),this._mount(t.target,t.anchor)}}Object(s.e)(l.prototype,s.z),Object(s.e)(l.prototype,a);var h=l;const b=Object(i.h)([{_id:0,ms:1e3,name:"slow"},{_id:1,ms:500,name:"normal"},{_id:2,ms:250,name:"fast"},{_id:3,ms:100,name:"superfast"}]);let f;var j={toggleInterval(t){console.log("toggleInterval called");const e=b.next();clearInterval(f),f=setInterval(i.k,e.ms,this,"stopped","next"),this.store.set({interval:e})}};function O(){clearInterval(f)}function d(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["interval"]),t.data),this.store._add(this,["interval"]),this._intro=!0,this._handlers.destroy=[O,s.B],this._fragment=function(t,e){var c,i;function r(c){t.toggleInterval(e.$interval)}return{c(){c=Object(s.l)("input"),this.h()},l(t){c=Object(s.i)(t,"INPUT",{type:!0,value:!0},!1),Object(s.h)(c).forEach(s.q),this.h()},h(){Object(s.c)(c,"click",r),Object(s.D)(c,"type","button"),c.value=i=`${e.$interval&&e.$interval.name}`},m(t,e){Object(s.w)(t,c,e)},p(t,s){e=s,t.$interval&&i!==(i=`${e.$interval&&e.$interval.name}`)&&(c.value=i)},d(t){t&&Object(s.q)(c),Object(s.C)(c,"click",r)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){const t=b.next();this.store.set({interval:t});const{stopped:e}=this.store.get();f=setInterval(i.k,t.ms,this,"stopped","next")}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var e=Object(s.h)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.q),this._mount(t.target,t.anchor),Object(s.s)(this)}}Object(s.e)(d.prototype,s.z),Object(s.e)(d.prototype,j);var u=d;function g(t,e){var c,i,r;return{c(){c=Object(s.l)("div"),i=Object(s.l)("span"),r=Object(s.o)("⌛"),this.h()},l(t){c=Object(s.i)(t,"DIV",{style:!0,class:!0},!1);var e=Object(s.h)(c);i=Object(s.i)(e,"SPAN",{},!1);var n=Object(s.h)(i);r=Object(s.j)(n,"⌛"),n.forEach(s.q),e.forEach(s.q),this.h()},h(){Object(s.F)(c,"transform","rotate(180deg)"),c.className="svelte-189pkg1"},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r)},d(t){t&&Object(s.q)(c)}}}function p(t,e){var c,i,r;return{c(){c=Object(s.l)("div"),i=Object(s.l)("span"),r=Object(s.o)("⌛"),this.h()},l(t){c=Object(s.i)(t,"DIV",{class:!0},!1);var e=Object(s.h)(c);i=Object(s.i)(e,"SPAN",{},!1);var n=Object(s.h)(i);r=Object(s.j)(n,"⌛"),n.forEach(s.q),e.forEach(s.q),this.h()},h(){c.className="svelte-189pkg1"},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r)},d(t){t&&Object(s.q)(c)}}}function v(t){var e;if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["stopped"]),t.data),this.store._add(this,["stopped"]),this._intro=!0,this._handlers.destroy=[s.B],this._slotted=t.slots||{},document.getElementById("svelte-189pkg1-style")||((e=Object(s.l)("style")).id="svelte-189pkg1-style",e.textContent='div.svelte-189pkg1 button,\n  input[type="button"]{background-color:lightblue;border-radius:6px;border-color:darkcyan;width:7em;height:100%;font-size:2rem;margin:2px 1px;padding:4px 16px;color:white;text-shadow:0px 0px 4px #efaf03;border-radius:10px}button.svelte-189pkg1:d{background-color:darkviolet}.control-panel.svelte-189pkg1{display:flex;flex-direction:column;justify-content:space-evenly;align-content:center;padding:4px;margin:2px}.wrapper.svelte-189pkg1{display:flex;align-content:flex-start;width:100%;height:100%}.section.svelte-189pkg1{height:100%}@media(max-width: 600px){.control-panel.svelte-189pkg1{flex:auto;flex-direction:row}.wrapper.svelte-189pkg1{display:block !important}div.svelte-189pkg1 button, input[type="button"]{font-size:0.8em;padding:0 1em;height:5em;width:100%}}',Object(s.d)(document.head,e)),this._fragment=function(t,e){var c,i,r,n,a,l,b,f,j,O,d,v,m,y,x,_,$,z,k=t._slotted.default,w=new o({root:t.root,store:t.store});function q(e){t.fire("init")}var D=new h({root:t.root,store:t.store});function E(e){t.fire("next")}function I(t){return t.$stopped?p:g}var N=I(e),B=N(t,e);function C(c){t.store.set({stopped:!e.$stopped})}var T=new u({root:t.root,store:t.store});return T.on("next",function(e){t.fire("next")}),{c(){c=Object(s.l)("div"),i=Object(s.l)("div"),r=Object(s.l)("div"),w._fragment.c(),n=Object(s.o)("\n    "),a=Object(s.l)("div"),l=Object(s.l)("input"),b=Object(s.o)("\n    "),f=Object(s.l)("div"),D._fragment.c(),j=Object(s.o)("\n    "),O=Object(s.l)("div"),d=Object(s.l)("input"),v=Object(s.o)("\n    "),m=Object(s.l)("div"),y=Object(s.l)("button"),B.c(),x=Object(s.o)("\n    "),_=Object(s.l)("div"),T._fragment.c(),$=Object(s.o)("\n  "),this.h()},l(t){c=Object(s.i)(t,"DIV",{class:!0},!1);var e=Object(s.h)(c);i=Object(s.i)(e,"DIV",{class:!0},!1);var o=Object(s.h)(i);r=Object(s.i)(o,"DIV",{class:!0},!1);var h=Object(s.h)(r);w._fragment.l(h),h.forEach(s.q),n=Object(s.j)(o,"\n    "),a=Object(s.i)(o,"DIV",{class:!0},!1);var u=Object(s.h)(a);l=Object(s.i)(u,"INPUT",{type:!0,value:!0},!1),Object(s.h)(l).forEach(s.q),u.forEach(s.q),b=Object(s.j)(o,"\n    "),f=Object(s.i)(o,"DIV",{class:!0},!1);var g=Object(s.h)(f);D._fragment.l(g),g.forEach(s.q),j=Object(s.j)(o,"\n    "),O=Object(s.i)(o,"DIV",{class:!0},!1);var p=Object(s.h)(O);d=Object(s.i)(p,"INPUT",{type:!0,value:!0},!1),Object(s.h)(d).forEach(s.q),p.forEach(s.q),v=Object(s.j)(o,"\n    "),m=Object(s.i)(o,"DIV",{class:!0},!1);var z=Object(s.h)(m);y=Object(s.i)(z,"BUTTON",{class:!0},!1);var k=Object(s.h)(y);B.l(k),k.forEach(s.q),z.forEach(s.q),x=Object(s.j)(o,"\n    "),_=Object(s.i)(o,"DIV",{class:!0},!1);var q=Object(s.h)(_);T._fragment.l(q),q.forEach(s.q),o.forEach(s.q),$=Object(s.j)(e,"\n  "),e.forEach(s.q),this.h()},h(){r.className="section svelte-189pkg1",Object(s.c)(l,"click",q),Object(s.D)(l,"type","button"),l.value="init",a.className="section svelte-189pkg1",f.className="section svelte-189pkg1",Object(s.c)(d,"click",E),Object(s.D)(d,"type","button"),d.value="next",O.className="section svelte-189pkg1",Object(s.c)(y,"click",C),y.className="svelte-189pkg1",m.className="section svelte-189pkg1",_.className="section svelte-189pkg1",i.className="control-panel svelte-189pkg1",c.className="wrapper svelte-189pkg1"},m(t,e){Object(s.w)(t,c,e),Object(s.d)(c,i),Object(s.d)(i,r),w._mount(r,null),Object(s.d)(i,n),Object(s.d)(i,a),Object(s.d)(a,l),Object(s.d)(i,b),Object(s.d)(i,f),D._mount(f,null),Object(s.d)(i,j),Object(s.d)(i,O),Object(s.d)(O,d),Object(s.d)(i,v),Object(s.d)(i,m),Object(s.d)(m,y),B.m(y,null),Object(s.d)(i,x),Object(s.d)(i,_),T._mount(_,null),Object(s.d)(c,$),k&&(Object(s.d)(c,z||(z=Object(s.k)())),Object(s.d)(c,k))},p(c,s){N!==(N=I(e=s))&&(B.d(1),(B=N(t,e)).c(),B.m(y,null))},d(t){t&&Object(s.q)(c),w.destroy(),Object(s.C)(l,"click",q),D.destroy(),Object(s.C)(d,"click",E),B.d(),Object(s.C)(y,"click",C),T.destroy(),k&&Object(s.A)(z,k)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){this.store.set({stopped:!1}),setTimeout(t=>t.fire("init"),200,this)}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var c=Object(s.h)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(s.q),this._mount(t.target,t.anchor),Object(s.s)(this)}}Object(s.e)(v.prototype,s.z);e.a=v}]]);