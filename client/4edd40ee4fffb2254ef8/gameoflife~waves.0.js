(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,c){"use strict";const s="100,50 75,93.33333333333334 25,93.33333333333334 0,50 25,6.666666666666667 75,6.666666666666667",r=t=>t.map(t=>t.join(",")).join(" "),i=t=>t.split(" ").map(t=>t.split(",").map(Number));var a={field:(t,e,c,s)=>(t=>Array.from({length:t}).map((t,e)=>e))(t*e).map(((t,e,c,s)=>r=>({x:r%t,y:Math.floor(r/e),v:s(r,c)}))(t,e,c,s)),scale:(t=1)=>r(i(s).map(e=>e.map(e=>t*e))),serialize:r,deserialize:i,hexagonPoints:s,bigHexagonPoints:"300,150 225,280 75,280 0,150 75,20 225,20"};var n={field:(t,e,c,s)=>Array.from({length:t*e}).map((e,r)=>({x:r%t,y:Math.floor(r/t),v:s(r,c)}))};const o=t=>t>=1,l=["hexagonal","rectangular"],j=[["#ff6738","#18c8ff","#efaf03","#60f370"],["#ffffff","#efefef"]];var b={name:"Game of Life",algorithm:{name:"GoL",run:{rectangular:(t,e)=>c=>{const{moore:s}=m(t,e);return Object.keys(c).map(t=>{const e=g(t)(c,o,s);return{[t]:2===e?c[t]:e>2&&e<4?1:0}}).reduce((t,e)=>Object.assign(t,e),{})},hexagonal:(t,e)=>c=>{const{hex:s}=m(t,e);return Object.keys(c).map(t=>{const e=g(t)(c,o,s);return{[t]:2===e?c[t]:e>2&&e<4?1:0}}).reduce((t,e)=>Object.assign(t,e),{})}}},field:[],fieldtype:l[1],fieldtypes:l,statecolors:j[1],stati:j};const O=t=>1===t,h=["hexagonal","rectangular"],f=[["#ffffff","#dfdfdf","#efefef"],["#ff6738","#18c8ff","#efaf03","#60f370"]];var d={name:"Waves",algorithm:{name:"Waves",run:{rectangular:(t,e)=>c=>{const{vneumann:s}=m(t,e);return Object.keys(c).map(t=>{const e=g(t)(c,O,s),r=c[t];return{[t]:e>0||r>0?(r+1)%3:r}}).reduce((t,e)=>Object.assign(t,e),{})},hexagonal:(t,e)=>c=>{const{hex:s}=m(t,e);return Object.keys(c).map(t=>{const e=g(t)(c,alive,s);return{[t]:2===e?c[t]:e>2&&e<4?1:0}}).reduce((t,e)=>Object.assign(t,e),{})}}},field:[],fieldtype:h[1],fieldtypes:h,statecolors:f[0],stati:f};const u=t=>t.split("x").map(Number),p=t=>t.reduce((t,e)=>Object.assign(t,{[`${e.x}x${e.y}`]:e.v}),{}),v=t=>Object.entries(t).map(([t,e])=>{const[c,s]=u(t);return{x:c,y:s,v:e}}),m=(t,e)=>{if(0===t||0===e)throw Error("choose 1 instead of 0");const c=e=>(e-1+t)%t,s=e=>(e+1)%t,r=t=>(t-1+e)%e,i=t=>(t+1)%e,a=([t,e],[a,n])=>{return[s(t)===a||c(t)===a,i(e)===n||r(e)===n]},n=(t,e)=>c=>{const[s,r]=u(c),[i,n]=a([s,r],[t,e]);return s===t&&n||r===e&&i};return{hex:(t,e)=>a=>{const[o,l]=u(a),j=s(o)===t||c(o)===t,[b,O]=[r(l)===e,i(l)===e],h=n(t,e)(a);return(t%2==0?b:O)&&j||h},moore:(t,e)=>c=>{const[s,r]=u(c),[i,o]=a([s,r],[t,e]);return i&&o||n(t,e)(c)},vneumann:n,left:c,right:s,up:r,down:i}};c.d(e,"e",function(){return y}),c.d(e,"i",function(){return x}),c.d(e,"c",function(){return g}),c.d(e,"f",function(){return a}),c.d(e,!1,function(){return n}),c.d(e,"a",function(){return b}),c.d(e,"b",function(){return d}),c.d(e,"g",function(){return p}),c.d(e,"d",function(){return v}),c.d(e,"h",function(){return m});const y=t=>{const e={hexagonal:a.field,rectangular:n.field};return t in e?e[t]:e.rectangular},g=t=>(e,c,s)=>{const[r,i]=u(t),a=!!s&&s(r,i);return Object.entries(e).filter(([e,s])=>e!==t&&!a||a(e)&&c(s)).reduce((t,e)=>t+1,0)},x=(t,e)=>Math.floor(Math.random()*t)%e},function(t,e,c){"use strict";var s=c(0);function r(t,e){var c,r,i,a,n=e.key,o=e.value;return{c(){c=Object(s.m)("li"),r=Object(s.p)(n),i=Object(s.p)(": "),a=Object(s.p)(o),this.h()},l(t){c=Object(s.j)(t,"LI",{class:!0},!1);var e=Object(s.i)(c);r=Object(s.k)(e,n),i=Object(s.k)(e,": "),a=Object(s.k)(e,o),e.forEach(s.r),this.h()},h(){c.className="svelte-e73a0l"},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,c),Object(s.d)(a,c)},p(t,e){t.els&&n!==(n=e.key)&&(r.data=n),t.els&&o!==(o=e.value)&&(a.data=o)},d(t){t&&Object(s.r)(c)}}}function i(t,e,c){const s=Object.create(t);return s.key=e[c][0],s.value=e[c][1],s.each_value=e,s.each_index=c,s}function a(t){if(Object(s.v)(this,t),this._state=Object(s.e)({els:[]},t.data),this._recompute({elements:1},this._state),this._intro=!0,document.getElementById("svelte-e73a0l-style")||function(){var t=Object(s.m)("style");t.id="svelte-e73a0l-style",t.textContent="ul.svelte-e73a0l{list-style:none}li.svelte-e73a0l{float:left;padding-right:2em}",Object(s.d)(t,document.head)}(),this._fragment=function(t,e){for(var c,a=e.els,n=[],o=0;o<a.length;o+=1)n[o]=r(0,i(e,a,o));return{c(){c=Object(s.m)("ul");for(var t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){c=Object(s.j)(t,"UL",{class:!0},!1);for(var e=Object(s.i)(c),r=0;r<n.length;r+=1)n[r].l(e);e.forEach(s.r),this.h()},h(){c.className="svelte-e73a0l"},m(t,e){Object(s.w)(c,t,e);for(var r=0;r<n.length;r+=1)n[r].m(c,null)},p(t,e){if(t.els){a=e.els;for(var s=0;s<a.length;s+=1){const o=i(e,a,s);n[s]?n[s].p(t,o):(n[s]=r(0,o),n[s].c(),n[s].m(c,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=a.length}},d(t){t&&Object(s.r)(c),Object(s.q)(n,t)}}}(0,this._state),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor)}}Object(s.e)(a.prototype,s.z),a.prototype._recompute=function(t,e){t.elements&&this._differs(e.els,e.els=function({elements:t}){return Object.entries(t)}(e))&&(t.els=!0)};var n=a;function o(t,e){return e<t.length?t[e]:t[0]}function l(t,e){var c,r,i,a,n,l;return{c(){c=Object(s.o)("g"),r=Object(s.o)("use"),this.h()},l(t){c=Object(s.j)(t,"g",{transform:!0},!0);var e=Object(s.i)(c);r=Object(s.j)(e,"use",{x:!0,y:!0,href:!0,fill:!0},!0),Object(s.i)(r).forEach(s.r),e.forEach(s.r),this.h()},h(){r._svelte={component:t,ctx:e},Object(s.c)(r,"click",b),Object(s.D)(r,"x",i=e.f.x*e.cx*e.$size),Object(s.D)(r,"y",a=e.f.y*e.cy*e.$size),Object(s.D)(r,"href","#rectangle"),Object(s.D)(r,"fill",n=o(e.$statecolors,e.f.v)),Object(s.D)(c,"transform",l="matrix(2,0,0,2,"+e.f.x+","+e.f.y+")")},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c)},p(t,e){r._svelte.ctx=e,(t.field||t.cx||t.$size)&&i!==(i=e.f.x*e.cx*e.$size)&&Object(s.D)(r,"x",i),(t.field||t.cy||t.$size)&&a!==(a=e.f.y*e.cy*e.$size)&&Object(s.D)(r,"y",a),(t.$statecolors||t.field)&&n!==(n=o(e.$statecolors,e.f.v))&&Object(s.D)(r,"fill",n),t.field&&l!==(l="matrix(2,0,0,2,"+e.f.x+","+e.f.y+")")&&Object(s.D)(c,"transform",l)},d(t){t&&Object(s.r)(c),Object(s.C)(r,"click",b)}}}function j(t,e,c){const s=Object.create(t);return s.f=e[c],s.each_value=e,s.i=c,s}function b(t){const{component:e,ctx:c}=this._svelte;e.fire("cell",{x:c.f.x,y:c.f.y,s:c.$statecolors.length})}function O(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["size","x","y","statecolors"]),t.data),this.store._add(this,["size","x","y","statecolors"]),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-kox9bz-style")||function(){var t=Object(s.m)("style");t.id="svelte-kox9bz-style",t.textContent="svg.svelte-kox9bz{width:100%;height:500px;border:1px solid white}",Object(s.d)(t,document.head)}(),this._fragment=function(t,e){for(var c,r,i,a,n,o,b,O,h,f=e.field,d=[],u=0;u<f.length;u+=1)d[u]=l(t,j(e,f,u));return{c(){c=Object(s.o)("svg"),r=Object(s.o)("rect"),i=Object(s.o)("defs"),a=Object(s.o)("rect"),b=Object(s.o)("g");for(var t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){c=Object(s.j)(t,"svg",{width:!0,height:!0,class:!0},!0);var e=Object(s.i)(c);r=Object(s.j)(e,"rect",{width:!0,height:!0,fill:!0,"stroke-width":!0},!0),Object(s.i)(r).forEach(s.r),i=Object(s.j)(e,"defs",{},!0);var n=Object(s.i)(i);a=Object(s.j)(n,"rect",{id:!0,width:!0,height:!0,"stroke-opacity":!0,stroke:!0},!0),Object(s.i)(a).forEach(s.r),n.forEach(s.r),b=Object(s.j)(e,"g",{},!0);for(var o=Object(s.i)(b),l=0;l<d.length;l+=1)d[l].l(o);o.forEach(s.r),e.forEach(s.r),this.h()},h(){Object(s.D)(r,"width","100%"),Object(s.D)(r,"height","100%"),Object(s.D)(r,"fill","seashell"),Object(s.D)(r,"stroke-width","0px"),Object(s.D)(a,"id","rectangle"),Object(s.D)(a,"width",n=e.cx*e.$size),Object(s.D)(a,"height",o=e.cy*e.$size),Object(s.D)(a,"stroke-opacity","0.2"),Object(s.D)(a,"stroke","#efefef"),Object(s.D)(c,"width",O=e.$size*e.$x*100),Object(s.D)(c,"height",h=e.$size*e.$y*100),Object(s.D)(c,"class","svelte-kox9bz")},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,c),Object(s.d)(a,i),Object(s.d)(b,c);for(var n=0;n<d.length;n+=1)d[n].m(b,null)},p(e,r){if((e.cx||e.$size)&&n!==(n=r.cx*r.$size)&&Object(s.D)(a,"width",n),(e.cy||e.$size)&&o!==(o=r.cy*r.$size)&&Object(s.D)(a,"height",o),e.field||e.cx||e.$size||e.cy||e.$statecolors){f=r.field;for(var i=0;i<f.length;i+=1){const c=j(r,f,i);d[i]?d[i].p(e,c):(d[i]=l(t,c),d[i].c(),d[i].m(b,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=f.length}(e.$size||e.$x)&&O!==(O=r.$size*r.$x*100)&&Object(s.D)(c,"width",O),(e.$size||e.$y)&&h!==(h=r.$size*r.$y*100)&&Object(s.D)(c,"height",h)},d(t){t&&Object(s.r)(c),Object(s.q)(d,t)}}}(this,this._state),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor)}}Object(s.e)(O.prototype,s.z);var h=O,f=c(2);const{scale:d}=f.f;function u(t,e){return e<t.length?t[e]:t[0]}function p(t,e){var c,r,i,a,n;return{c(){c=Object(s.o)("g"),r=Object(s.o)("use"),this.h()},l(t){c=Object(s.j)(t,"g",{transform:!0},!0);var e=Object(s.i)(c);r=Object(s.j)(e,"use",{href:!0,fill:!0,x:!0,y:!0},!0),Object(s.i)(r).forEach(s.r),e.forEach(s.r),this.h()},h(){r._svelte={component:t,ctx:e},Object(s.c)(r,"click",m),Object(s.D)(r,"href","#hexagon"),Object(s.D)(r,"fill",i=u(e.$statecolors,e.f.v)),Object(s.D)(r,"x",0),Object(s.D)(r,"y",a=e.f.x%2==1?6.66*e.$size:50*e.$size),Object(s.D)(c,"transform",n="matrix(1,0,0,1,"+75*e.f.x*e.$size+","+86.66*e.f.y*e.$size+")")},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c)},p(t,e){r._svelte.ctx=e,(t.$statecolors||t.field)&&i!==(i=u(e.$statecolors,e.f.v))&&Object(s.D)(r,"fill",i),(t.field||t.$size)&&a!==(a=e.f.x%2==1?6.66*e.$size:50*e.$size)&&Object(s.D)(r,"y",a),(t.field||t.$size)&&n!==(n="matrix(1,0,0,1,"+75*e.f.x*e.$size+","+86.66*e.f.y*e.$size+")")&&Object(s.D)(c,"transform",n)},d(t){t&&Object(s.r)(c),Object(s.C)(r,"click",m)}}}function v(t,e,c){const s=Object.create(t);return s.f=e[c],s.each_value=e,s.i=c,s}function m(t){const{component:e,ctx:c}=this._svelte;e.fire("cell",{x:c.f.x,y:c.f.y,s:c.$statecolors.length})}function y(t){if(Object(s.v)(this,t),this._state=Object(s.e)(Object(s.e)(this.store._init(["size","x","y","statecolors"]),{field:[],hexagon:d()}),t.data),this.store._add(this,["size","x","y","statecolors"]),this._recompute({$size:1},this._state),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-kox9bz-style")||function(){var t=Object(s.m)("style");t.id="svelte-kox9bz-style",t.textContent="svg.svelte-kox9bz{width:100%;height:500px;border:1px solid white}",Object(s.d)(t,document.head)}(),this._fragment=function(t,e){for(var c,r,i,a,n,o,l,j=e.field,b=[],O=0;O<j.length;O+=1)b[O]=p(t,v(e,j,O));return{c(){c=Object(s.o)("svg"),r=Object(s.o)("rect"),i=Object(s.o)("defs"),a=Object(s.o)("polygon"),n=Object(s.o)("g");for(var t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){c=Object(s.j)(t,"svg",{width:!0,height:!0,class:!0},!0);var e=Object(s.i)(c);r=Object(s.j)(e,"rect",{width:!0,height:!0,fill:!0,"stroke-width":!0},!0),Object(s.i)(r).forEach(s.r),i=Object(s.j)(e,"defs",{},!0);var o=Object(s.i)(i);a=Object(s.j)(o,"polygon",{id:!0,points:!0,opacity:!0,"stroke-opacity":!0,stroke:!0},!0),Object(s.i)(a).forEach(s.r),o.forEach(s.r),n=Object(s.j)(e,"g",{transform:!0},!0);for(var l=Object(s.i)(n),j=0;j<b.length;j+=1)b[j].l(l);l.forEach(s.r),e.forEach(s.r),this.h()},h(){Object(s.D)(r,"width","100%"),Object(s.D)(r,"height","100%"),Object(s.D)(r,"fill","seashell"),Object(s.D)(r,"stroke-width","0px"),Object(s.D)(a,"id","hexagon"),Object(s.D)(a,"points",e.hexagon),Object(s.D)(a,"opacity","1"),Object(s.D)(a,"stroke-opacity","0.2"),Object(s.D)(a,"stroke","#efefef"),Object(s.D)(n,"transform","matrix(1.35,0,0,1.195,0,0)"),Object(s.D)(c,"width",o=e.$size*e.$x*100),Object(s.D)(c,"height",l=e.$size*e.$y*100),Object(s.D)(c,"class","svelte-kox9bz")},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,c),Object(s.d)(a,i),Object(s.d)(n,c);for(var o=0;o<b.length;o+=1)b[o].m(n,null)},p(e,r){if(e.hexagon&&Object(s.D)(a,"points",r.hexagon),e.field||e.$size||e.$statecolors){j=r.field;for(var i=0;i<j.length;i+=1){const c=v(r,j,i);b[i]?b[i].p(e,c):(b[i]=p(t,c),b[i].c(),b[i].m(n,null))}for(;i<b.length;i+=1)b[i].d(1);b.length=j.length}(e.$size||e.$x)&&o!==(o=r.$size*r.$x*100)&&Object(s.D)(c,"width",o),(e.$size||e.$y)&&l!==(l=r.$size*r.$y*100)&&Object(s.D)(c,"height",l)},d(t){t&&Object(s.r)(c),Object(s.q)(b,t)}}}(this,this._state),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor)}}Object(s.e)(y.prototype,s.z),y.prototype._recompute=function(t,e){t.$size&&this._differs(e.hexagon,e.hexagon=function({$size:t}){return d(t)}(e))&&(t.hexagon=!0)};var g=y,x={cell({x:t,y:e,s:c}){const{field:s}=this.store.get(),r=Object(f.g)(s),i=`${t}x${e}`;r[i]=(r[i]+1)%c,this.store.set({field:Object(f.d)(r)})}};function $(t,e){var c={cx:"86.66",cy:"100",field:e.$field},s=new g({root:t.root,store:t.store,data:c});return s.on("cell",function(e){t.cell(e)}),{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var c={};t.$field&&(c.field=e.$field),s._set(c)},d(t){s.destroy(t)}}}function _(t,e){var c={cx:"50",cy:"50",field:e.$field},s=new h({root:t.root,store:t.store,data:c});return s.on("cell",function(e){t.cell(e)}),{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var c={};t.$field&&(c.field=e.$field),s._set(c)},d(t){s.destroy(t)}}}function k(t,e){var c,r,i,a,n,o,l=e._s;return{c(){c=Object(s.m)("li"),r=Object(s.m)("span"),i=Object(s.p)("["),a=Object(s.p)(l),n=Object(s.p)("]"),this.h()},l(t){c=Object(s.j)(t,"LI",{class:!0},!1);var e=Object(s.i)(c);r=Object(s.j)(e,"SPAN",{style:!0},!1);var o=Object(s.i)(r);i=Object(s.k)(o,"["),a=Object(s.k)(o,l),n=Object(s.k)(o,"]"),o.forEach(s.r),e.forEach(s.r),this.h()},h(){r.style.cssText=o=`color: ${e._s};`,c.className="svelte-1ouiy65"},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,r),Object(s.d)(a,r),Object(s.d)(n,r)},p(t,e){t.$statecolors&&l!==(l=e._s)&&(a.data=l),t.$statecolors&&o!==(o=`color: ${e._s};`)&&(r.style.cssText=o)},d(t){t&&Object(s.r)(c)}}}function z(t,e){for(var c,r=e.$statecolors,i=[],a=0;a<r.length;a+=1)i[a]=k(0,D(e,r,a));return{c(){c=Object(s.m)("ul");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){c=Object(s.j)(t,"UL",{class:!0},!1);for(var e=Object(s.i)(c),r=0;r<i.length;r+=1)i[r].l(e);e.forEach(s.r),this.h()},h(){c.className="svelte-1ouiy65"},m(t,e){Object(s.w)(c,t,e);for(var r=0;r<i.length;r+=1)i[r].m(c,null)},p(t,e){if(t.$statecolors){r=e.$statecolors;for(var s=0;s<r.length;s+=1){const a=D(e,r,s);i[s]?i[s].p(t,a):(i[s]=k(0,a),i[s].c(),i[s].m(c,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=r.length}},d(t){t&&Object(s.r)(c),Object(s.q)(i,t)}}}function D(t,e,c){const s=Object.create(t);return s._s=e[c],s.each_value=e,s._s_index=c,s}function w(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["fieldtype","field","x","y","statecolors"]),t.data),this.store._add(this,["fieldtype","field","x","y","statecolors"]),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-1ouiy65-style")||function(){var t=Object(s.m)("style");t.id="svelte-1ouiy65-style",t.textContent="span.overview.svelte-1ouiy65{width:10vw;color:violet;font-weight:700;font-size:0.5em}ul.svelte-1ouiy65{font-weight:300;font-style:italic;list-style:none}li.svelte-1ouiy65{display:block;float:left}.field-container.svelte-1ouiy65{padding:0;width:100%;height:auto;overflow:hidden;box-sizing:content-box}",Object(s.d)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,r,i,a,o,l,j="hexagonal"===e.$fieldtype&&$(t,e),b="rectangular"===e.$fieldtype&&_(t,e),O={elements:{$x:e.$x,$y:e.$y,cells:e.$x*e.$y}},h=new n({root:t.root,store:t.store,data:O}),f=e.$statecolors&&z(0,e);return{c(){c=Object(s.m)("div"),j&&j.c(),r=Object(s.p)(" "),b&&b.c(),i=Object(s.p)("\n\n"),a=Object(s.m)("span"),h._fragment.c(),o=Object(s.p)("\n  "),l=Object(s.m)("div"),f&&f.c(),this.h()},l(t){c=Object(s.j)(t,"DIV",{class:!0},!1);var e=Object(s.i)(c);j&&j.l(e),r=Object(s.k)(e," "),b&&b.l(e),e.forEach(s.r),i=Object(s.k)(t,"\n\n"),a=Object(s.j)(t,"SPAN",{class:!0},!1);var n=Object(s.i)(a);h._fragment.l(n),o=Object(s.k)(n,"\n  "),l=Object(s.j)(n,"DIV",{},!1);var O=Object(s.i)(l);f&&f.l(O),O.forEach(s.r),n.forEach(s.r),this.h()},h(){c.className="field-container svelte-1ouiy65",a.className="overview svelte-1ouiy65"},m(t,e){Object(s.w)(c,t,e),j&&j.m(c,null),Object(s.d)(r,c),b&&b.m(c,null),Object(s.w)(i,t,e),Object(s.w)(a,t,e),h._mount(a,null),Object(s.d)(o,a),Object(s.d)(l,a),f&&f.m(l,null)},p(e,s){"hexagonal"===s.$fieldtype?j?j.p(e,s):((j=$(t,s)).c(),j.m(c,r)):j&&(j.d(1),j=null),"rectangular"===s.$fieldtype?b?b.p(e,s):((b=_(t,s)).c(),b.m(c,null)):b&&(b.d(1),b=null);var i={};(e.$x||e.$y)&&(i.elements={$x:s.$x,$y:s.$y,cells:s.$x*s.$y}),h._set(i),s.$statecolors?f?f.p(e,s):((f=z(0,s)).c(),f.m(l,null)):f&&(f.d(1),f=null)},d(t){t&&Object(s.r)(c),j&&j.d(),b&&b.d(),t&&(Object(s.r)(i),Object(s.r)(a)),h.destroy(),f&&f.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){this.store.set({field:[],size:.5,x:8,y:8})}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor),this._lock=!0,Object(s.h)(this._beforecreate),Object(s.h)(this._oncreate),Object(s.h)(this._aftercreate),this._lock=!1}}Object(s.e)(w.prototype,s.z),Object(s.e)(w.prototype,x);var E=w;function N(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["name","fieldtype","x","y","size"]),t.data),this.store._add(this,["name","fieldtype","x","y","size"]),this._intro=!0,this._handlers.destroy=[s.B],document.getElementById("svelte-1kshz2b-style")||function(){var t=Object(s.m)("style");t.id="svelte-1kshz2b-style",t.textContent=".container.svelte-1kshz2b{border:1px solid orange;background-color:#5f5f7f;color:white}",Object(s.d)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,r,i,a,n,o,l,j,b,O,h,f,d,u,p,v,m,y,g=new E({root:t.root,store:t.store});return{c(){c=Object(s.m)("div"),r=Object(s.m)("span"),i=Object(s.p)("["),a=Object(s.p)(e.id),n=Object(s.p)(" - "),o=Object(s.p)(e.$name),l=Object(s.p)("] "),j=Object(s.p)(e.$fieldtype),b=Object(s.p)(' CA of type: "'),O=Object(s.p)(e.type),h=Object(s.p)(", ["),f=Object(s.p)(e.$x),d=Object(s.p)("x"),u=Object(s.p)(e.$y),p=Object(s.p)("] "),v=Object(s.p)(e.$size),m=Object(s.p)('x"'),y=Object(s.p)("\n  "),g._fragment.c(),this.h()},l(t){c=Object(s.j)(t,"DIV",{class:!0},!1);var x=Object(s.i)(c);r=Object(s.j)(x,"SPAN",{},!1);var $=Object(s.i)(r);i=Object(s.k)($,"["),a=Object(s.k)($,e.id),n=Object(s.k)($," - "),o=Object(s.k)($,e.$name),l=Object(s.k)($,"] "),j=Object(s.k)($,e.$fieldtype),b=Object(s.k)($,' CA of type: "'),O=Object(s.k)($,e.type),h=Object(s.k)($,", ["),f=Object(s.k)($,e.$x),d=Object(s.k)($,"x"),u=Object(s.k)($,e.$y),p=Object(s.k)($,"] "),v=Object(s.k)($,e.$size),m=Object(s.k)($,'x"'),$.forEach(s.r),y=Object(s.k)(x,"\n  "),g._fragment.l(x),x.forEach(s.r),this.h()},h(){c.className="container svelte-1kshz2b"},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,r),Object(s.d)(a,r),Object(s.d)(n,r),Object(s.d)(o,r),Object(s.d)(l,r),Object(s.d)(j,r),Object(s.d)(b,r),Object(s.d)(O,r),Object(s.d)(h,r),Object(s.d)(f,r),Object(s.d)(d,r),Object(s.d)(u,r),Object(s.d)(p,r),Object(s.d)(v,r),Object(s.d)(m,r),Object(s.d)(y,c),g._mount(c,null)},p(t,e){t.id&&(a.data=e.id),t.$name&&(o.data=e.$name),t.$fieldtype&&(j.data=e.$fieldtype),t.type&&(O.data=e.type),t.$x&&(f.data=e.$x),t.$y&&(u.data=e.$y),t.$size&&(v.data=e.$size)},d(t){t&&Object(s.r)(c),g.destroy()}}}(this,this._state),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor),this._lock=!0,Object(s.h)(this._beforecreate),Object(s.h)(this._oncreate),Object(s.h)(this._aftercreate),this._lock=!1}}Object(s.e)(N.prototype,s.z);e.a=N},function(t,e,c){"use strict";var s=c(0);let r;const i=function(t){if(t.store){const{stopped:e}=t.store.get();e||t.fire("next")}},a={ms:1e3,name:"slow"},n={ms:25,name:"fast"};var o={toggleInterval(t){const e=t.ms===a.ms?n:a;this.store.set({interval:e}),clearInterval(r),r=setInterval(i,e.ms,this)}};function l(){clearInterval(r)}function j(t,e){var c,r,i;return{c(){c=Object(s.m)("div"),r=Object(s.m)("span"),i=Object(s.p)("⌛")},l(t){c=Object(s.j)(t,"DIV",{},!1);var e=Object(s.i)(c);r=Object(s.j)(e,"SPAN",{},!1);var a=Object(s.i)(r);i=Object(s.k)(a,"⌛"),a.forEach(s.r),e.forEach(s.r)},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,r)},d(t){t&&Object(s.r)(c)}}}function b(t,e){var c,r,i;return{c(){c=Object(s.m)("div"),r=Object(s.m)("span"),i=Object(s.p)("⌛"),this.h()},l(t){c=Object(s.j)(t,"DIV",{style:!0},!1);var e=Object(s.i)(c);r=Object(s.j)(e,"SPAN",{},!1);var a=Object(s.i)(r);i=Object(s.k)(a,"⌛"),a.forEach(s.r),e.forEach(s.r),this.h()},h(){Object(s.E)(c,"transform","rotate(180deg)")},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,r)},d(t){t&&Object(s.r)(c)}}}function O(t){if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["stopped","interval","fieldtype","x","y","size"]),t.data),this.store._add(this,["stopped","interval","fieldtype","x","y","size"]),this._intro=!0,this._handlers.destroy=[l,s.B],this._slotted=t.slots||{},document.getElementById("svelte-6k1pyx-style")||function(){var t=Object(s.m)("style");t.id="svelte-6k1pyx-style",t.textContent='button.svelte-6k1pyx,input[type="button"].svelte-6k1pyx{background-color:lightblue;border-radius:6px;border-color:darkcyan}button.svelte-6k1pyx:d{background-color:darkviolet}.control-panel.svelte-6k1pyx{display:flex;justify-items:center;justify-content:flex-start;background:seashell;padding:4px;margin:2px}.section.svelte-6k1pyx{border-left:1px solid greenyellow}.min-width.svelte-6k1pyx{width:100px}',Object(s.d)(t,document.head)}(),t.root||(this._oncreate=[]),this.slots={},this._fragment=function(t,e){var c,r,i,a,n,o,l,O,h,f,d,u,p,v,m,y,g,x,$,_,k,z,D,w,E,N,I,C=t._slotted.default;function P(e){t.fire("init")}function V(e){t.fire("next")}function B(t){return t.$stopped?j:b}var T=B(e),A=T(t,e);function U(c){t.store.set({stopped:!e.$stopped})}function L(c){t.toggleInterval(e.$interval)}function S(c){t.store.set({fieldtype:"rectangular"===e.$fieldtype?"hexagonal":"rectangular"})}function q(c){t.store.set({x:8===e.$x?16:8,y:8===e.$y?16:8})}function M(c){t.store.set({size:.5===e.$size?.25:.5})}return{c(){c=Object(s.m)("div"),r=Object(s.m)("div"),i=Object(s.m)("input"),a=Object(s.p)("\n  "),n=Object(s.m)("div"),o=Object(s.m)("input"),l=Object(s.p)("\n  "),O=Object(s.m)("div"),h=Object(s.m)("button"),A.c(),f=Object(s.p)("\n  "),d=Object(s.m)("div"),u=Object(s.m)("input"),v=Object(s.p)("\n  "),m=Object(s.m)("div"),y=Object(s.m)("input"),g=Object(s.p)("\n  \n  "),x=Object(s.m)("div"),$=Object(s.m)("input"),k=Object(s.p)("\n  "),z=Object(s.m)("div"),D=Object(s.m)("input"),E=Object(s.p)("\n"),this.h()},l(t){c=Object(s.j)(t,"DIV",{class:!0},!1);var e=Object(s.i)(c);r=Object(s.j)(e,"DIV",{class:!0},!1);var j=Object(s.i)(r);i=Object(s.j)(j,"INPUT",{type:!0,value:!0,class:!0},!1),Object(s.i)(i).forEach(s.r),j.forEach(s.r),a=Object(s.k)(e,"\n  "),n=Object(s.j)(e,"DIV",{class:!0},!1);var b=Object(s.i)(n);o=Object(s.j)(b,"INPUT",{type:!0,value:!0,class:!0},!1),Object(s.i)(o).forEach(s.r),b.forEach(s.r),l=Object(s.k)(e,"\n  "),O=Object(s.j)(e,"DIV",{class:!0},!1);var p=Object(s.i)(O);h=Object(s.j)(p,"BUTTON",{class:!0},!1);var _=Object(s.i)(h);A.l(_),_.forEach(s.r),p.forEach(s.r),f=Object(s.k)(e,"\n  "),d=Object(s.j)(e,"DIV",{class:!0},!1);var w=Object(s.i)(d);u=Object(s.j)(w,"INPUT",{class:!0,type:!0,value:!0},!1),Object(s.i)(u).forEach(s.r),w.forEach(s.r),v=Object(s.k)(e,"\n  "),m=Object(s.j)(e,"DIV",{class:!0},!1);var N=Object(s.i)(m);y=Object(s.j)(N,"INPUT",{class:!0,type:!0,value:!0},!1),Object(s.i)(y).forEach(s.r),N.forEach(s.r),g=Object(s.k)(e,"\n  \n  "),x=Object(s.j)(e,"DIV",{class:!0},!1);var I=Object(s.i)(x);$=Object(s.j)(I,"INPUT",{type:!0,value:!0,class:!0},!1),Object(s.i)($).forEach(s.r),I.forEach(s.r),k=Object(s.k)(e,"\n  "),z=Object(s.j)(e,"DIV",{class:!0},!1);var C=Object(s.i)(z);D=Object(s.j)(C,"INPUT",{type:!0,value:!0,class:!0},!1),Object(s.i)(D).forEach(s.r),C.forEach(s.r),e.forEach(s.r),E=Object(s.k)(t,"\n"),this.h()},h(){Object(s.c)(i,"click",P),Object(s.D)(i,"type","button"),i.value="init",i.className="svelte-6k1pyx",r.className="section svelte-6k1pyx",Object(s.c)(o,"click",V),Object(s.D)(o,"type","button"),o.value="next",o.className="svelte-6k1pyx",n.className="section svelte-6k1pyx",Object(s.c)(h,"click",U),h.className="svelte-6k1pyx",O.className="section svelte-6k1pyx",Object(s.c)(u,"click",L),u.className="min-width svelte-6k1pyx",Object(s.D)(u,"type","button"),u.value=p=`${e.$interval&&e.$interval.name}`,d.className="section svelte-6k1pyx",Object(s.c)(y,"click",S),y.className="min-width svelte-6k1pyx",Object(s.D)(y,"type","button"),y.value=e.$fieldtype,m.className="section svelte-6k1pyx",Object(s.c)($,"click",q),Object(s.D)($,"type","button"),$.value=_=`[${e.$x}x${e.$y}]`,$.className="svelte-6k1pyx",x.className="section svelte-6k1pyx",Object(s.c)(D,"click",M),Object(s.D)(D,"type","button"),D.value=w="size: "+e.$size,D.className="svelte-6k1pyx",z.className="section svelte-6k1pyx",c.className="control-panel svelte-6k1pyx"},m(t,e){Object(s.w)(c,t,e),Object(s.d)(r,c),Object(s.d)(i,r),Object(s.d)(a,c),Object(s.d)(n,c),Object(s.d)(o,n),Object(s.d)(l,c),Object(s.d)(O,c),Object(s.d)(h,O),A.m(h,null),Object(s.d)(f,c),Object(s.d)(d,c),Object(s.d)(u,d),Object(s.d)(v,c),Object(s.d)(m,c),Object(s.d)(y,m),Object(s.d)(g,c),Object(s.d)(x,c),Object(s.d)($,x),Object(s.d)(k,c),Object(s.d)(z,c),Object(s.d)(D,z),Object(s.w)(E,t,e),C&&(Object(s.w)(N||(N=Object(s.l)()),t,e),Object(s.w)(C,t,e),Object(s.w)(I||(I=Object(s.l)()),t,e))},p(c,s){T!==(T=B(e=s))&&(A.d(1),(A=T(t,e)).c(),A.m(h,null)),c.$interval&&p!==(p=`${e.$interval&&e.$interval.name}`)&&(u.value=p),c.$fieldtype&&(y.value=e.$fieldtype),(c.$x||c.$y)&&_!==(_=`[${e.$x}x${e.$y}]`)&&($.value=_),c.$size&&w!==(w="size: "+e.$size)&&(D.value=w)},d(t){t&&Object(s.r)(c),Object(s.C)(i,"click",P),Object(s.C)(o,"click",V),A.d(),Object(s.C)(h,"click",U),Object(s.C)(u,"click",L),Object(s.C)(y,"click",S),Object(s.C)($,"click",q),Object(s.C)(D,"click",M),t&&Object(s.r)(E),C&&(Object(s.A)(N,I,C),Object(s.r)(N),Object(s.r)(I))}}}(this,this._state),this.root._oncreate.push(()=>{(function(){const t=a;this.store.set({interval:t}),setTimeout(t=>t.fire("init"),200,this),r=setInterval(i,t.ms,this)}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var e=Object(s.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(s.r),this._mount(t.target,t.anchor),Object(s.h)(this._oncreate)}}Object(s.e)(O.prototype,s.z),Object(s.e)(O.prototype,o),e.a=O}]]);