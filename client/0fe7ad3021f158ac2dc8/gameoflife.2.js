(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{6:function(t,e,i){"use strict";i.r(e);var o=i(0),s=i(2),n=i(3),r=i(4);var a={next(){console.log("next");const{run:t}=this.get(),{field:e,statecolors:{length:i},fieldtype:o,x:n,y:r}=this.store.get();this.store.set({field:Object(s.d)(t(n,r)(Object(s.g)(e)))})},init(t,e){console.log("iniiit");const{statecolors:{length:i},fieldtype:o}=this.store.get(),n=Object(s.e)(o)(t,e,i,s.j);this.store.set({field:n})}};function h(t){var e,i,a,h,c;if(Object(o.v)(this,t),this._state=Object(o.e)(this.store._init(["algorithm","fieldtype","x","y"]),t.data),this.store._add(this,["algorithm","fieldtype","x","y"]),this._recompute({$algorithm:1,$fieldtype:1},this._state),this._intro=!0,this._handlers.destroy=[o.B],this._fragment=(e=this,i=this._state,h=new n.a({root:e.root,store:e.store}),(c=new r.a({root:e.root,store:e.store,slots:{default:Object(o.m)()}})).on("next",function(t){e.next()}),c.on("init",function(t){e.init(i.$x,i.$y)}),{c(){a=Object(o.o)("\n\n"),h._fragment.c(),c._fragment.c(),this.h()},l(t){a=Object(o.j)(t,"\n\n"),h._fragment.l(t),c._fragment.l(t),this.h()},h(){document.title="Game of Life"},m(t,e){Object(o.w)(t,a,e),h._mount(c._slotted.default,null),c._mount(t,e)},p(t,e){i=e},d(t){t&&Object(o.q)(a),h.destroy(),c.destroy(t)}}),this.root._oncreate.push(()=>{(function(){const{algorithm:t,fieldtypes:e,name:i,statecolors:o,stati:n}=s.a,r=e(),{fieldtype:a}=r.next();this.store.set({algorithm:t,fieldtype:a,fieldtypes:r,statecolors:o,stati:n,name:i})}).call(this),this.fire("update",{changed:Object(o.f)({},this._state),current:this._state})}),t.target){var l=Object(o.h)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(o.q),this._mount(t.target,t.anchor),Object(o.s)(this)}}Object(o.e)(h.prototype,o.z),Object(o.e)(h.prototype,a),h.prototype._recompute=function(t,e){(t.$algorithm||t.$fieldtype)&&this._differs(e.run,e.run=function({$algorithm:t,$fieldtype:e}){return t&&t.run[e]}(e))&&(t.run=!0)},e.default=h}}]);