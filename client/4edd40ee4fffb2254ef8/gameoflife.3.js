(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7:function(t,e,s){"use strict";s.r(e);var i=s(0),o=s(3),r=s(4),n=s(2);var c={next(){console.log("next");const{run:t}=this.get(),{field:e,statecolors:{length:s},fieldtype:i,x:o,y:r}=this.store.get();this.store.set({field:Object(n.d)(t(o,r)(Object(n.g)(e)))})},init(t,e){console.log("iniiit");const{statecolors:{length:s},fieldtype:i}=this.store.get(),o=Object(n.e)(i)(t,e,s,n.i);this.store.set({field:o})}};function a(t){if(Object(i.v)(this,t),this._state=Object(i.e)(this.store._init(["algorithm","fieldtype","x","y"]),t.data),this.store._add(this,["algorithm","fieldtype","x","y"]),this._recompute({$algorithm:1,$fieldtype:1},this._state),this._intro=!0,this._handlers.destroy=[i.B],document.getElementById("svelte-vsvcuh-style")||function(){var t=Object(i.m)("style");t.id="svelte-vsvcuh-style",t.textContent=".container.svelte-vsvcuh{width:100%}",Object(i.d)(t,document.head)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var s,n,c,a,h={id:"1",type:e.type},l=new o.a({root:t.root,store:t.store,data:h}),d=new r.a({root:t.root,store:t.store,slots:{default:Object(i.n)()}});return d.on("next",function(e){t.next()}),d.on("init",function(s){t.init(e.$x,e.$y)}),{c(){s=Object(i.p)("\n\n"),n=Object(i.m)("div"),c=Object(i.p)("\n    "),l._fragment.c(),a=Object(i.p)("\n  "),d._fragment.c(),this.h()},l(t){s=Object(i.k)(t,"\n\n"),n=Object(i.j)(t,"DIV",{class:!0},!1);var e=Object(i.i)(n);c=Object(i.k)(t,"\n    "),l._fragment.l(t),a=Object(i.k)(t,"\n  "),d._fragment.l(e),e.forEach(i.r),this.h()},h(){document.title="Game of Life",n.className="container svelte-vsvcuh"},m(t,e){Object(i.w)(s,t,e),Object(i.w)(n,t,e),Object(i.d)(c,d._slotted.default),l._mount(d._slotted.default,null),Object(i.d)(a,d._slotted.default),d._mount(n,null)},p(t,s){e=s;var i={};t.type&&(i.type=e.type),l._set(i)},d(t){t&&(Object(i.r)(s),Object(i.r)(n)),l.destroy(),d.destroy()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){const{algorithm:t,fieldtype:e,name:s,statecolors:i,stati:o}=n.a;this.store.set({algorithm:t,fieldtype:e,statecolors:i,stati:o,name:s})}).call(this),this.fire("update",{changed:Object(i.f)({},this._state),current:this._state})}),t.target){var e=Object(i.i)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(i.r),this._mount(t.target,t.anchor),this._lock=!0,Object(i.h)(this._beforecreate),Object(i.h)(this._oncreate),Object(i.h)(this._aftercreate),this._lock=!1}}Object(i.e)(a.prototype,i.z),Object(i.e)(a.prototype,c),a.prototype._recompute=function(t,e){t.$algorithm&&this._differs(e.type,e.type=function({$algorithm:t}){return t&&t.name||""}(e))&&(t.type=!0),(t.$algorithm||t.$fieldtype)&&this._differs(e.run,e.run=function({$algorithm:t,$fieldtype:e}){return t&&t.run[e]}(e))&&(t.run=!0)},e.default=a}}]);