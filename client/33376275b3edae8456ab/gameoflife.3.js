(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7:function(t,e,s){"use strict";s.r(e);var i=s(0),o=s(3),n=s(4),r=s(2);var c={next(){console.log("next");const{run:t}=this.get(),{field:e,statecolors:{length:s},fieldtype:i,x:o,y:n}=this.store.get();this.store.set({field:Object(r.d)(t(o,n)(Object(r.g)(e)))})},init(t,e){console.log("iniiit");const{statecolors:{length:s},fieldtype:i}=this.store.get(),o=Object(r.e)(i)(t,e,s,r.i);this.store.set({field:o})}};function a(t){var e,s,c,a,h,l,d,f,u,p;if(Object(i.v)(this,t),this._state=Object(i.e)(this.store._init(["algorithm","fieldtype","x","y"]),t.data),this.store._add(this,["algorithm","fieldtype","x","y"]),this._recompute({$algorithm:1,$fieldtype:1},this._state),this._intro=!0,this._handlers.destroy=[i.B],document.getElementById("svelte-vsvcuh-style")||((e=Object(i.m)("style")).id="svelte-vsvcuh-style",e.textContent=".container.svelte-vsvcuh{width:100%}",Object(i.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(s=this,c=this._state,f={id:"1",type:c.type},u=new o.a({root:s.root,data:f}),(p=new n.a({root:s.root,slots:{default:Object(i.n)()}})).on("next",function(t){s.next()}),p.on("init",function(t){s.init(c.$x,c.$y)}),{c(){a=Object(i.p)("\n\n"),h=Object(i.m)("div"),l=Object(i.p)("\n    "),u._fragment.c(),d=Object(i.p)("\n  "),p._fragment.c(),this.h()},l(t){a=Object(i.k)(t,"\n\n"),h=Object(i.j)(t,"DIV",{class:!0},!1);var e=Object(i.i)(h);l=Object(i.k)(t,"\n    "),u._fragment.l(t),d=Object(i.k)(t,"\n  "),p._fragment.l(e),e.forEach(i.r),this.h()},h(){document.title="Game of Life",h.className="container svelte-vsvcuh"},m(t,e){Object(i.w)(a,t,e),Object(i.w)(h,t,e),Object(i.d)(l,p._slotted.default),u._mount(p._slotted.default,null),Object(i.d)(d,p._slotted.default),p._mount(h,null)},p(t,e){c=e;var s={};t.type&&(s.type=c.type),u._set(s)},d(t){t&&(Object(i.r)(a),Object(i.r)(h)),u.destroy(),p.destroy()}}),this.root._oncreate.push(()=>{(function(){const{algorithm:t,fieldtype:e,name:s,statecolors:i,stati:o}=r.a;this.store.set({algorithm:t,fieldtype:e,statecolors:i,stati:o,name:s})}).call(this),this.fire("update",{changed:Object(i.f)({},this._state),current:this._state})}),t.target){var _=Object(i.i)(t.target);t.hydrate?this._fragment.l(_):this._fragment.c(),_.forEach(i.r),this._mount(t.target,t.anchor),this._lock=!0,Object(i.h)(this._beforecreate),Object(i.h)(this._oncreate),Object(i.h)(this._aftercreate),this._lock=!1}}Object(i.e)(a.prototype,i.z),Object(i.e)(a.prototype,c),a.prototype._recompute=function(t,e){t.$algorithm&&this._differs(e.type,e.type=function({$algorithm:t}){return t&&t.name||""}(e))&&(t.type=!0),(t.$algorithm||t.$fieldtype)&&this._differs(e.run,e.run=function({$algorithm:t,$fieldtype:e}){return t&&t.run[e]}(e))&&(t.run=!0)},e.default=a}}]);