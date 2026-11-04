/* dsh-workspace-graph | MIT | React Flow (MIT) */
window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;"use strict";var nu=Object.create;var Bn=Object.defineProperty;var ou=Object.getOwnPropertyDescriptor;var ru=Object.getOwnPropertyNames;var iu=Object.getPrototypeOf,su=Object.prototype.hasOwnProperty;var Hn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},au=(e,t)=>{for(var n in t)Bn(e,n,{get:t[n],enumerable:!0})},Mi=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ru(t))!su.call(e,r)&&r!==n&&Bn(e,r,{get:()=>t[r],enumerable:!(o=ou(t,r))||o.enumerable});return e};var Ve=(e,t,n)=>(n=e!=null?nu(iu(e)):{},Mi(t||!e||!e.__esModule?Bn(n,"default",{value:e,enumerable:!0}):n,e)),cu=e=>Mi(Bn({},"__esModule",{value:!0}),e);var Sa=Hn(_a=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var en=require("react");function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Eg=typeof Object.is=="function"?Object.is:Sg,Ng=en.useState,Cg=en.useEffect,Mg=en.useLayoutEffect,Ig=en.useDebugValue;function Pg(e,t){var n=t(),o=Ng({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Mg(function(){r.value=n,r.getSnapshot=t,si(r)&&i({inst:r})},[e,n,t]),Cg(function(){return si(r)&&i({inst:r}),e(function(){si(r)&&i({inst:r})})},[e]),Ig(n),n}function si(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Eg(e,n)}catch{return!0}}function zg(e,t){return t()}var Ag=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zg:Pg;_a.useSyncExternalStore=en.useSyncExternalStore!==void 0?en.useSyncExternalStore:Ag});var Na=Hn((C0,Ea)=>{"use strict";Ea.exports=Sa()});var Ma=Hn(Ca=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=require("react"),Dg=Na();function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lg=typeof Object.is=="function"?Object.is:Og,Tg=Dg.useSyncExternalStore,$g=Co.useRef,Bg=Co.useEffect,Hg=Co.useMemo,Vg=Co.useDebugValue;Ca.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=$g(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Hg(function(){function c(p){if(!l){if(l=!0,d=p,p=o(p),r!==void 0&&s.hasValue){var h=s.value;if(r(h,p))return f=h}return f=p}if(h=f,Lg(d,p))return h;var y=o(p);return r!==void 0&&r(h,y)?(d=p,h):(d=p,f=y)}var l=!1,d,f,u=n===void 0?null:n;return[function(){return c(t())},u===null?void 0:function(){return c(u())}]},[t,n,o,r]);var a=Tg(e,i[0],i[1]);return Bg(function(){s.hasValue=!0,s.value=a},[a]),Vg(a),a}});var Pa=Hn((I0,Ia)=>{"use strict";Ia.exports=Ma()});var ky={};au(ky,{apply:()=>vy,inject:()=>by});module.exports=cu(ky);var xt=Ve(require("react"),1);var _=Ve(require("react"),1);var O=require("react/jsx-runtime"),L=require("react");function he(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=he(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var lu={value:()=>{}};function _t(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Vn(n)}function Vn(e){this._=e}function uu(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Vn.prototype=_t.prototype={constructor:Vn,on:function(e,t){var n=this._,o=uu(e+"",n),r,i=-1,s=o.length;if(arguments.length<2){for(;++i<s;)if((r=(e=o[i]).type)&&(r=du(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=o[i]).type)n[r]=Ii(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Ii(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Vn(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function du(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Ii(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=lu,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var jo="http://www.w3.org/1999/xhtml",Pi={svg:"http://www.w3.org/2000/svg",xhtml:jo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function un(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Pi.hasOwnProperty(t)?{space:Pi[t],local:e}:e}function fu(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===jo&&t.documentElement.namespaceURI===jo?t.createElement(e):t.createElementNS(n,e)}}function pu(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function zi(e){var t=un(e);return(t.local?pu:fu)(t)}function gu(){}function Rn(e){return e==null?gu:function(){return this.querySelector(e)}}function hu(e){typeof e!="function"&&(e=Rn(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=new Array(s),c,l,d=0;d<s;++d)(c=i[d])&&(l=e.call(c,c.__data__,d,i))&&("__data__"in c&&(l.__data__=c.__data__),a[d]=l);return new ze(o,this._parents)}function mu(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function yu(){return[]}function Qo(e){return e==null?yu:function(){return this.querySelectorAll(e)}}function wu(e){return function(){return mu(e.apply(this,arguments))}}function xu(e){typeof e=="function"?e=wu(e):e=Qo(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var s=t[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&(o.push(e.call(c,c.__data__,l,s)),r.push(c));return new ze(o,r)}function Jo(e){return function(){return this.matches(e)}}function Ai(e){return function(t){return t.matches(e)}}var bu=Array.prototype.find;function vu(e){return function(){return bu.call(this.children,e)}}function ku(){return this.firstElementChild}function _u(e){return this.select(e==null?ku:vu(typeof e=="function"?e:Ai(e)))}var Su=Array.prototype.filter;function Eu(){return Array.from(this.children)}function Nu(e){return function(){return Su.call(this.children,e)}}function Cu(e){return this.selectAll(e==null?Eu:Nu(typeof e=="function"?e:Ai(e)))}function Mu(e){typeof e!="function"&&(e=Jo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new ze(o,this._parents)}function Di(e){return new Array(e.length)}function Iu(){return new ze(this._enter||this._groups.map(Di),this._parents)}function Fn(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Fn.prototype={constructor:Fn,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Pu(e){return function(){return e}}function zu(e,t,n,o,r,i){for(var s=0,a,c=t.length,l=i.length;s<l;++s)(a=t[s])?(a.__data__=i[s],o[s]=a):n[s]=new Fn(e,i[s]);for(;s<c;++s)(a=t[s])&&(r[s]=a)}function Au(e,t,n,o,r,i,s){var a,c,l=new Map,d=t.length,f=i.length,u=new Array(d),p;for(a=0;a<d;++a)(c=t[a])&&(u[a]=p=s.call(c,c.__data__,a,t)+"",l.has(p)?r[a]=c:l.set(p,c));for(a=0;a<f;++a)p=s.call(e,i[a],a,i)+"",(c=l.get(p))?(o[a]=c,c.__data__=i[a],l.delete(p)):n[a]=new Fn(e,i[a]);for(a=0;a<d;++a)(c=t[a])&&l.get(u[a])===c&&(r[a]=c)}function Du(e){return e.__data__}function Ou(e,t){if(!arguments.length)return Array.from(this,Du);var n=t?Au:zu,o=this._parents,r=this._groups;typeof e!="function"&&(e=Pu(e));for(var i=r.length,s=new Array(i),a=new Array(i),c=new Array(i),l=0;l<i;++l){var d=o[l],f=r[l],u=f.length,p=Lu(e.call(d,d&&d.__data__,l,o)),h=p.length,y=a[l]=new Array(h),w=s[l]=new Array(h),g=c[l]=new Array(u);n(d,f,y,w,g,p,t);for(var v=0,m=0,x,S;v<h;++v)if(x=y[v]){for(v>=m&&(m=v+1);!(S=w[m])&&++m<h;);x._next=S||null}}return s=new ze(s,o),s._enter=a,s._exit=c,s}function Lu(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Tu(){return new ze(this._exit||this._groups.map(Di),this._parents)}function $u(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Bu(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,s=Math.min(r,i),a=new Array(r),c=0;c<s;++c)for(var l=n[c],d=o[c],f=l.length,u=a[c]=new Array(f),p,h=0;h<f;++h)(p=l[h]||d[h])&&(u[h]=p);for(;c<r;++c)a[c]=n[c];return new ze(a,this._parents)}function Hu(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],s;--r>=0;)(s=o[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function Vu(e){e||(e=Fu);function t(f,u){return f&&u?e(f.__data__,u.__data__):!f-!u}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s=n[i],a=s.length,c=r[i]=new Array(a),l,d=0;d<a;++d)(l=s[d])&&(c[d]=l);c.sort(t)}return new ze(r,this._parents).order()}function Fu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ru(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Wu(){return Array.from(this)}function qu(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null}function Xu(){let e=0;for(let t of this)++e;return e}function Yu(){return!this.node()}function Zu(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,s=r.length,a;i<s;++i)(a=r[i])&&e.call(a,a.__data__,i,r);return this}function Gu(e){return function(){this.removeAttribute(e)}}function Uu(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ju(e,t){return function(){this.setAttribute(e,t)}}function Ku(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Qu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Ju(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ed(e,t){var n=un(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Uu:Gu:typeof t=="function"?n.local?Ju:Qu:n.local?Ku:ju)(n,t))}function Oi(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function td(e){return function(){this.style.removeProperty(e)}}function nd(e,t,n){return function(){this.style.setProperty(e,t,n)}}function od(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function rd(e,t,n){return arguments.length>1?this.each((t==null?td:typeof t=="function"?od:nd)(e,t,n??"")):St(this.node(),e)}function St(e,t){return e.style.getPropertyValue(t)||Oi(e).getComputedStyle(e,null).getPropertyValue(t)}function id(e){return function(){delete this[e]}}function sd(e,t){return function(){this[e]=t}}function ad(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function cd(e,t){return arguments.length>1?this.each((t==null?id:typeof t=="function"?ad:sd)(e,t)):this.node()[e]}function Li(e){return e.trim().split(/^|\s+/)}function er(e){return e.classList||new Ti(e)}function Ti(e){this._node=e,this._names=Li(e.getAttribute("class")||"")}Ti.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function $i(e,t){for(var n=er(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Bi(e,t){for(var n=er(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function ld(e){return function(){$i(this,e)}}function ud(e){return function(){Bi(this,e)}}function dd(e,t){return function(){(t.apply(this,arguments)?$i:Bi)(this,e)}}function fd(e,t){var n=Li(e+"");if(arguments.length<2){for(var o=er(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?dd:t?ld:ud)(n,t))}function pd(){this.textContent=""}function gd(e){return function(){this.textContent=e}}function hd(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function md(e){return arguments.length?this.each(e==null?pd:(typeof e=="function"?hd:gd)(e)):this.node().textContent}function yd(){this.innerHTML=""}function wd(e){return function(){this.innerHTML=e}}function xd(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function bd(e){return arguments.length?this.each(e==null?yd:(typeof e=="function"?xd:wd)(e)):this.node().innerHTML}function vd(){this.nextSibling&&this.parentNode.appendChild(this)}function kd(){return this.each(vd)}function _d(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Sd(){return this.each(_d)}function Ed(e){var t=typeof e=="function"?e:zi(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Nd(){return null}function Cd(e,t){var n=typeof e=="function"?e:zi(e),o=t==null?Nd:typeof t=="function"?t:Rn(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Md(){var e=this.parentNode;e&&e.removeChild(this)}function Id(){return this.each(Md)}function Pd(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function zd(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ad(e){return this.select(e?zd:Pd)}function Dd(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Od(e){return function(t){e.call(this,t,this.__data__)}}function Ld(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Td(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function $d(e,t,n){return function(){var o=this.__on,r,i=Od(t);if(o){for(var s=0,a=o.length;s<a;++s)if((r=o[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Bd(e,t,n){var o=Ld(e+""),r,i=o.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,d;c<l;++c)for(r=0,d=a[c];r<i;++r)if((s=o[r]).type===d.type&&s.name===d.name)return d.value}return}for(a=t?$d:Td,r=0;r<i;++r)this.each(a(o[r],t,n));return this}function Hi(e,t,n){var o=Oi(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Hd(e,t){return function(){return Hi(this,e,t)}}function Vd(e,t){return function(){return Hi(this,e,t.apply(this,arguments))}}function Fd(e,t){return this.each((typeof t=="function"?Vd:Hd)(e,t))}function*Rd(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,s;r<i;++r)(s=o[r])&&(yield s)}var Vi=[null];function ze(e,t){this._groups=e,this._parents=t}function Et(){return new ze([[document.documentElement]],Vi)}function Wd(){return this}ze.prototype=Et.prototype={constructor:ze,select:hu,selectAll:xu,selectChild:_u,selectChildren:Cu,filter:Mu,data:Ou,enter:Iu,exit:Tu,join:$u,merge:Bu,selection:Wd,order:Hu,sort:Vu,call:Ru,nodes:Wu,node:qu,size:Xu,empty:Yu,each:Zu,attr:ed,style:rd,property:cd,classed:fd,text:md,html:bd,raise:kd,lower:Sd,append:Ed,insert:Cd,remove:Id,clone:Ad,datum:Dd,on:Bd,dispatch:Fd,[Symbol.iterator]:Rd};function Ee(e){return typeof e=="string"?new ze([[document.querySelector(e)]],[document.documentElement]):new ze([[e]],Vi)}var qd=0;function Xd(){return new Ko}function Ko(){this._="@"+(++qd).toString(36)}Ko.prototype=Xd.prototype={constructor:Ko,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function Yd(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ie(e,t){if(e=Yd(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Zd={passive:!1},dn={capture:!0,passive:!1};function tr(e){e.stopImmediatePropagation()}function $t(e){e.preventDefault(),e.stopImmediatePropagation()}function or(e){var t=e.document.documentElement,n=Ee(e).on("dragstart.drag",$t,dn);"onselectstart"in t?n.on("selectstart.drag",$t,dn):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function rr(e,t){var n=e.document.documentElement,o=Ee(e).on("dragstart.drag",null);t&&(o.on("click.drag",$t,dn),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Wn=e=>()=>e;function nr(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:s,y:a,dx:c,dy:l,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:d}})}nr.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Gd(e){return!e.ctrlKey&&!e.button}function Ud(){return this.parentNode}function jd(e,t){return t??{x:e.x,y:e.y}}function Kd(){return navigator.maxTouchPoints||"ontouchstart"in this}function ir(){var e=Gd,t=Ud,n=jd,o=Kd,r={},i=_t("start","drag","end"),s=0,a,c,l,d,f=0;function u(x){x.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",g,Zd).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,S){if(!(d||!e.call(this,x,S))){var E=m(this,t.call(this,x,S),x,S,"mouse");E&&(Ee(x.view).on("mousemove.drag",h,dn).on("mouseup.drag",y,dn),or(x.view),tr(x),l=!1,a=x.clientX,c=x.clientY,E("start",x))}}function h(x){if($t(x),!l){var S=x.clientX-a,E=x.clientY-c;l=S*S+E*E>f}r.mouse("drag",x)}function y(x){Ee(x.view).on("mousemove.drag mouseup.drag",null),rr(x.view,l),$t(x),r.mouse("end",x)}function w(x,S){if(e.call(this,x,S)){var E=x.changedTouches,N=t.call(this,x,S),z=E.length,P,R;for(P=0;P<z;++P)(R=m(this,N,x,S,E[P].identifier,E[P]))&&(tr(x),R("start",x,E[P]))}}function g(x){var S=x.changedTouches,E=S.length,N,z;for(N=0;N<E;++N)(z=r[S[N].identifier])&&($t(x),z("drag",x,S[N]))}function v(x){var S=x.changedTouches,E=S.length,N,z;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),N=0;N<E;++N)(z=r[S[N].identifier])&&(tr(x),z("end",x,S[N]))}function m(x,S,E,N,z,P){var R=i.copy(),T=Ie(P||E,S),W,B,b;if((b=n.call(x,new nr("beforestart",{sourceEvent:E,target:u,identifier:z,active:s,x:T[0],y:T[1],dx:0,dy:0,dispatch:R}),N))!=null)return W=b.x-T[0]||0,B=b.y-T[1]||0,function C(k,I,D){var A=T,F;switch(k){case"start":r[z]=C,F=s++;break;case"end":delete r[z],--s;case"drag":T=Ie(D||I,S),F=s;break}R.call(k,x,new nr(k,{sourceEvent:I,subject:b,target:u,identifier:z,active:F,x:T[0]+W,y:T[1]+B,dx:T[0]-A[0],dy:T[1]-A[1],dispatch:R}),N)}}return u.filter=function(x){return arguments.length?(e=typeof x=="function"?x:Wn(!!x),u):e},u.container=function(x){return arguments.length?(t=typeof x=="function"?x:Wn(x),u):t},u.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Wn(x),u):n},u.touchable=function(x){return arguments.length?(o=typeof x=="function"?x:Wn(!!x),u):o},u.on=function(){var x=i.on.apply(i,arguments);return x===i?u:x},u.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,u):Math.sqrt(f)},u}function Ft(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function gn(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function at(){}var It=.7,Vt=1/It,Bt="\\s*([+-]?\\d+)\\s*",fn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fe="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Qd=/^#([0-9a-f]{3,8})$/,Jd=new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`),ef=new RegExp(`^rgb\\(${Fe},${Fe},${Fe}\\)$`),tf=new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${fn}\\)$`),nf=new RegExp(`^rgba\\(${Fe},${Fe},${Fe},${fn}\\)$`),of=new RegExp(`^hsl\\(${fn},${Fe},${Fe}\\)$`),rf=new RegExp(`^hsla\\(${fn},${Fe},${Fe},${fn}\\)$`),Fi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ft(at,Ke,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ri,formatHex:Ri,formatHex8:sf,formatHsl:af,formatRgb:Wi,toString:Wi});function Ri(){return this.rgb().formatHex()}function sf(){return this.rgb().formatHex8()}function af(){return Qi(this).formatHsl()}function Wi(){return this.rgb().formatRgb()}function Ke(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Qd.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?qi(t):n===3?new ke(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?qn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?qn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Jd.exec(e))?new ke(t[1],t[2],t[3],1):(t=ef.exec(e))?new ke(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=tf.exec(e))?qn(t[1],t[2],t[3],t[4]):(t=nf.exec(e))?qn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=of.exec(e))?Zi(t[1],t[2]/100,t[3]/100,1):(t=rf.exec(e))?Zi(t[1],t[2]/100,t[3]/100,t[4]):Fi.hasOwnProperty(e)?qi(Fi[e]):e==="transparent"?new ke(NaN,NaN,NaN,0):null}function qi(e){return new ke(e>>16&255,e>>8&255,e&255,1)}function qn(e,t,n,o){return o<=0&&(e=t=n=NaN),new ke(e,t,n,o)}function dr(e){return e instanceof at||(e=Ke(e)),e?(e=e.rgb(),new ke(e.r,e.g,e.b,e.opacity)):new ke}function hn(e,t,n,o){return arguments.length===1?dr(e):new ke(e,t,n,o??1)}function ke(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Ft(ke,hn,gn(at,{brighter(e){return e=e==null?Vt:Math.pow(Vt,e),new ke(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?It:Math.pow(It,e),new ke(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ke(Ct(this.r),Ct(this.g),Ct(this.b),Yn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xi,formatHex:Xi,formatHex8:cf,formatRgb:Yi,toString:Yi}));function Xi(){return`#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`}function cf(){return`#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity)?1:this.opacity)*255)}`}function Yi(){let e=Yn(this.opacity);return`${e===1?"rgb(":"rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${e===1?")":`, ${e})`}`}function Yn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ct(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Nt(e){return e=Ct(e),(e<16?"0":"")+e.toString(16)}function Zi(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Te(e,t,n,o)}function Qi(e){if(e instanceof Te)return new Te(e.h,e.s,e.l,e.opacity);if(e instanceof at||(e=Ke(e)),!e)return new Te;if(e instanceof Te)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),s=NaN,a=i-r,c=(i+r)/2;return a?(t===i?s=(n-o)/a+(n<o)*6:n===i?s=(o-t)/a+2:s=(t-n)/a+4,a/=c<.5?i+r:2-i-r,s*=60):a=c>0&&c<1?0:s,new Te(s,a,c,e.opacity)}function Gn(e,t,n,o){return arguments.length===1?Qi(e):new Te(e,t,n,o??1)}function Te(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Ft(Te,Gn,gn(at,{brighter(e){return e=e==null?Vt:Math.pow(Vt,e),new Te(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?It:Math.pow(It,e),new Te(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new ke(sr(e>=240?e-240:e+120,r,o),sr(e,r,o),sr(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new Te(Gi(this.h),Xn(this.s),Xn(this.l),Yn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Yn(this.opacity);return`${e===1?"hsl(":"hsla("}${Gi(this.h)}, ${Xn(this.s)*100}%, ${Xn(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Gi(e){return e=(e||0)%360,e<0?e+360:e}function Xn(e){return Math.max(0,Math.min(1,e||0))}function sr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Ji=Math.PI/180,es=180/Math.PI,Zn=18,ts=.96422,ns=1,os=.82521,rs=4/29,Ht=6/29,is=3*Ht*Ht,lf=Ht*Ht*Ht;function ss(e){if(e instanceof Re)return new Re(e.l,e.a,e.b,e.opacity);if(e instanceof je)return cs(e);e instanceof ke||(e=dr(e));var t=ur(e.r),n=ur(e.g),o=ur(e.b),r=ar((.2225045*t+.7168786*n+.0606169*o)/ns),i,s;return t===n&&n===o?i=s=r:(i=ar((.4360747*t+.3850649*n+.1430804*o)/ts),s=ar((.0139322*t+.0971045*n+.7141733*o)/os)),new Re(116*r-16,500*(i-r),200*(r-s),e.opacity)}function as(e,t,n,o){return arguments.length===1?ss(e):new Re(e,t,n,o??1)}function Re(e,t,n,o){this.l=+e,this.a=+t,this.b=+n,this.opacity=+o}Ft(Re,as,gn(at,{brighter(e){return new Re(this.l+Zn*(e??1),this.a,this.b,this.opacity)},darker(e){return new Re(this.l-Zn*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=ts*cr(t),e=ns*cr(e),n=os*cr(n),new ke(lr(3.1338561*t-1.6168667*e-.4906146*n),lr(-.9787684*t+1.9161415*e+.033454*n),lr(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function ar(e){return e>lf?Math.pow(e,1/3):e/is+rs}function cr(e){return e>Ht?e*e*e:is*(e-rs)}function lr(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function ur(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function uf(e){if(e instanceof je)return new je(e.h,e.c,e.l,e.opacity);if(e instanceof Re||(e=ss(e)),e.a===0&&e.b===0)return new je(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*es;return new je(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Un(e,t,n,o){return arguments.length===1?uf(e):new je(e,t,n,o??1)}function je(e,t,n,o){this.h=+e,this.c=+t,this.l=+n,this.opacity=+o}function cs(e){if(isNaN(e.h))return new Re(e.l,0,0,e.opacity);var t=e.h*Ji;return new Re(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}Ft(je,Un,gn(at,{brighter(e){return new je(this.h,this.c,this.l+Zn*(e??1),this.opacity)},darker(e){return new je(this.h,this.c,this.l-Zn*(e??1),this.opacity)},rgb(){return cs(this).rgb()}}));var ls=-.14861,fr=1.78277,pr=-.29227,jn=-.90649,pn=1.97294,Ui=pn*jn,ji=pn*fr,Ki=fr*pr-jn*ls;function df(e){if(e instanceof Mt)return new Mt(e.h,e.s,e.l,e.opacity);e instanceof ke||(e=dr(e));var t=e.r/255,n=e.g/255,o=e.b/255,r=(Ki*o+Ui*t-ji*n)/(Ki+Ui-ji),i=o-r,s=(pn*(n-r)-pr*i)/jn,a=Math.sqrt(s*s+i*i)/(pn*r*(1-r)),c=a?Math.atan2(s,i)*es-120:NaN;return new Mt(c<0?c+360:c,a,r,e.opacity)}function Kn(e,t,n,o){return arguments.length===1?df(e):new Mt(e,t,n,o??1)}function Mt(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Ft(Mt,Kn,gn(at,{brighter(e){return e=e==null?Vt:Math.pow(Vt,e),new Mt(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?It:Math.pow(It,e),new Mt(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*Ji,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),o=Math.cos(e),r=Math.sin(e);return new ke(255*(t+n*(ls*o+fr*r)),255*(t+n*(pr*o+jn*r)),255*(t+n*(pn*o)),this.opacity)}}));function fs(e,t,n,o,r){var i=e*e,s=i*e;return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*o+s*r)/6}function ff(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],s=o>0?e[o-1]:2*r-i,a=o<t-1?e[o+2]:2*i-r;return fs((n-o/t)*t,s,r,i,a)}}function pf(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],s=e[(o+1)%t],a=e[(o+2)%t];return fs((n-o/t)*t,r,i,s,a)}}var Jn=e=>()=>e;function ps(e,t){return function(n){return e+n*t}}function gf(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function yr(e,t){var n=t-e;return n?ps(e,n>180||n<-180?n-360*Math.round(n/360):n):Jn(isNaN(e)?t:e)}function hf(e){return(e=+e)==1?Pe:function(t,n){return n-t?gf(t,n,e):Jn(isNaN(t)?n:t)}}function Pe(e,t){var n=t-e;return n?ps(e,n):Jn(isNaN(e)?t:e)}var mn=(function e(t){var n=hf(t);function o(r,i){var s=n((r=hn(r)).r,(i=hn(i)).r),a=n(r.g,i.g),c=n(r.b,i.b),l=Pe(r.opacity,i.opacity);return function(d){return r.r=s(d),r.g=a(d),r.b=c(d),r.opacity=l(d),r+""}}return o.gamma=e,o})(1);function gs(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),s,a;for(s=0;s<n;++s)a=hn(t[s]),o[s]=a.r||0,r[s]=a.g||0,i[s]=a.b||0;return o=e(o),r=e(r),i=e(i),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=i(c),a+""}}}var Ay=gs(ff),Dy=gs(pf);function mf(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function yf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function wf(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),s;for(s=0;s<o;++s)r[s]=Rt(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(a){for(s=0;s<o;++s)i[s]=r[s](a);return i}}function xf(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function $e(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function bf(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Rt(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var hr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gr=new RegExp(hr.source,"g");function vf(e){return function(){return e}}function kf(e){return function(t){return e(t)+""}}function wr(e,t){var n=hr.lastIndex=gr.lastIndex=0,o,r,i,s=-1,a=[],c=[];for(e=e+"",t=t+"";(o=hr.exec(e))&&(r=gr.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),a[s]?a[s]+=i:a[++s]=i),(o=o[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,c.push({i:s,x:$e(o,r)})),n=gr.lastIndex;return n<t.length&&(i=t.slice(n),a[s]?a[s]+=i:a[++s]=i),a.length<2?c[0]?kf(c[0].x):vf(t):(t=c.length,function(l){for(var d=0,f;d<t;++d)a[(f=c[d]).i]=f.x(l);return a.join("")})}function Rt(e,t){var n=typeof t,o;return t==null||n==="boolean"?Jn(t):(n==="number"?$e:n==="string"?(o=Ke(t))?(t=o,mn):wr:t instanceof Ke?mn:t instanceof Date?xf:yf(t)?mf:Array.isArray(t)?wf:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?bf:$e)(e,t)}var us=180/Math.PI,mr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function hs(e,t,n,o,r,i){var s,a,c;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*us,skewX:Math.atan(c)*us,scaleX:s,scaleY:a}}var Qn;function _f(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?mr:hs(t.a,t.b,t.c,t.d,t.e,t.f)}function Sf(e){return e==null||(Qn||(Qn=document.createElementNS("http://www.w3.org/2000/svg","g")),Qn.setAttribute("transform",e),!(e=Qn.transform.baseVal.consolidate()))?mr:(e=e.matrix,hs(e.a,e.b,e.c,e.d,e.e,e.f))}function ms(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,d,f,u,p,h){if(l!==f||d!==u){var y=p.push("translate(",null,t,null,n);h.push({i:y-4,x:$e(l,f)},{i:y-2,x:$e(d,u)})}else(f||u)&&p.push("translate("+f+t+u+n)}function s(l,d,f,u){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),u.push({i:f.push(r(f)+"rotate(",null,o)-2,x:$e(l,d)})):d&&f.push(r(f)+"rotate("+d+o)}function a(l,d,f,u){l!==d?u.push({i:f.push(r(f)+"skewX(",null,o)-2,x:$e(l,d)}):d&&f.push(r(f)+"skewX("+d+o)}function c(l,d,f,u,p,h){if(l!==f||d!==u){var y=p.push(r(p)+"scale(",null,",",null,")");h.push({i:y-4,x:$e(l,f)},{i:y-2,x:$e(d,u)})}else(f!==1||u!==1)&&p.push(r(p)+"scale("+f+","+u+")")}return function(l,d){var f=[],u=[];return l=e(l),d=e(d),i(l.translateX,l.translateY,d.translateX,d.translateY,f,u),s(l.rotate,d.rotate,f,u),a(l.skewX,d.skewX,f,u),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,f,u),l=d=null,function(p){for(var h=-1,y=u.length,w;++h<y;)f[(w=u[h]).i]=w.x(p);return f.join("")}}}var ys=ms(_f,"px, ","px)","deg)"),ws=ms(Sf,", ",")",")"),Ef=1e-12;function ds(e){return((e=Math.exp(e))+1/e)/2}function Nf(e){return((e=Math.exp(e))-1/e)/2}function Cf(e){return((e=Math.exp(2*e))-1)/(e+1)}var Wt=(function e(t,n,o){function r(i,s){var a=i[0],c=i[1],l=i[2],d=s[0],f=s[1],u=s[2],p=d-a,h=f-c,y=p*p+h*h,w,g;if(y<Ef)g=Math.log(u/l)/t,w=function(N){return[a+N*p,c+N*h,l*Math.exp(t*N*g)]};else{var v=Math.sqrt(y),m=(u*u-l*l+o*y)/(2*l*n*v),x=(u*u-l*l-o*y)/(2*u*n*v),S=Math.log(Math.sqrt(m*m+1)-m),E=Math.log(Math.sqrt(x*x+1)-x);g=(E-S)/t,w=function(N){var z=N*g,P=ds(S),R=l/(n*v)*(P*Cf(t*z+S)-Nf(S));return[a+R*p,c+R*h,l*P/ds(t*z+S)]}}return w.duration=Math.abs(g)*1e3*t/Math.SQRT2,w}return r.rho=function(i){var s=Math.max(.001,+i),a=s*s,c=a*a;return e(s,a,c)},r})(Math.SQRT2,2,4);function xs(e){return function(t,n){var o=e((t=Gn(t)).h,(n=Gn(n)).h),r=Pe(t.s,n.s),i=Pe(t.l,n.l),s=Pe(t.opacity,n.opacity);return function(a){return t.h=o(a),t.s=r(a),t.l=i(a),t.opacity=s(a),t+""}}}var Oy=xs(yr),Ly=xs(Pe);function bs(e){return function(t,n){var o=e((t=Un(t)).h,(n=Un(n)).h),r=Pe(t.c,n.c),i=Pe(t.l,n.l),s=Pe(t.opacity,n.opacity);return function(a){return t.h=o(a),t.c=r(a),t.l=i(a),t.opacity=s(a),t+""}}}var Ty=bs(yr),$y=bs(Pe);function vs(e){return(function t(n){n=+n;function o(r,i){var s=e((r=Kn(r)).h,(i=Kn(i)).h),a=Pe(r.s,i.s),c=Pe(r.l,i.l),l=Pe(r.opacity,i.opacity);return function(d){return r.h=s(d),r.s=a(d),r.l=c(Math.pow(d,n)),r.opacity=l(d),r+""}}return o.gamma=t,o})(1)}var By=vs(yr),Hy=vs(Pe);var qt=0,wn=0,yn=0,_s=1e3,eo,xn,to=0,Pt=0,oo=0,bn=typeof performance=="object"&&performance.now?performance:Date,Ss=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ro(){return Pt||(Ss(Mf),Pt=bn.now()+oo)}function Mf(){Pt=0}function no(){this._call=this._time=this._next=null}no.prototype=br.prototype={constructor:no,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?ro():+n)+(t==null?0:+t),!this._next&&xn!==this&&(xn?xn._next=this:eo=this,xn=this),this._call=e,this._time=n,xr()},stop:function(){this._call&&(this._call=null,this._time=1/0,xr())}};function br(e,t,n){var o=new no;return o.restart(e,t,n),o}function If(){ro(),++qt;for(var e=eo,t;e;)(t=Pt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--qt}function ks(){Pt=(to=bn.now())+oo,qt=wn=0;try{If()}finally{qt=0,zf(),Pt=0}}function Pf(){var e=bn.now(),t=e-to;t>_s&&(oo-=t,to=e)}function zf(){for(var e,t=eo,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:eo=n);xn=e,xr(o)}function xr(e){if(!qt){wn&&(wn=clearTimeout(wn));var t=e-Pt;t>24?(e<1/0&&(wn=setTimeout(ks,Math.ceil(e-bn.now()-oo)+1)),yn&&(yn=clearInterval(yn))):(yn||(to=bn.now(),yn=setInterval(Pf,_s)),qt=1,Ss(ks))}}function vr(e,t,n){var o=new no;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}function Ns(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var kr=3,Ry=(function e(t){t=+t;function n(o){return Math.pow(o,t)}return n.exponent=e,n})(kr),Wy=(function e(t){t=+t;function n(o){return 1-Math.pow(1-o,t)}return n.exponent=e,n})(kr),qy=(function e(t){t=+t;function n(o){return((o*=2)<=1?Math.pow(o,t):2-Math.pow(2-o,t))/2}return n.exponent=e,n})(kr),Af=Math.PI,Xy=Af/2;function io(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Es=4/11,Yy=6/11,Zy=8/11,Gy=3/4,Uy=9/11,jy=10/11,Ky=15/16,Qy=21/22,Jy=63/64,e0=1/Es/Es;var _r=1.70158,t0=(function e(t){t=+t;function n(o){return(o=+o)*o*(t*(o-1)+o)}return n.overshoot=e,n})(_r),n0=(function e(t){t=+t;function n(o){return--o*o*((o+1)*t+o)+1}return n.overshoot=e,n})(_r),o0=(function e(t){t=+t;function n(o){return((o*=2)<1?o*o*((t+1)*o-t):(o-=2)*o*((t+1)*o+t)+2)/2}return n.overshoot=e,n})(_r),Xt=2*Math.PI,Sr=1,Er=.3,r0=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Xt);function r(i){return t*io(- --i)*Math.sin((o-i)/n)}return r.amplitude=function(i){return e(i,n*Xt)},r.period=function(i){return e(t,i)},r})(Sr,Er),i0=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Xt);function r(i){return 1-t*io(i=+i)*Math.sin((i+o)/n)}return r.amplitude=function(i){return e(i,n*Xt)},r.period=function(i){return e(t,i)},r})(Sr,Er),s0=(function e(t,n){var o=Math.asin(1/(t=Math.max(1,t)))*(n/=Xt);function r(i){return((i=i*2-1)<0?t*io(-i)*Math.sin((o-i)/n):2-t*io(i)*Math.sin((o+i)/n))/2}return r.amplitude=function(i){return e(i,n*Xt)},r.period=function(i){return e(t,i)},r})(Sr,Er);var Df=_t("start","end","cancel","interrupt"),Of=[],Is=0,Cs=1,Nr=2,so=3,Ms=4,Cr=5,ao=6;function co(e,t,n,o,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;Lf(e,n,{name:t,index:o,group:r,on:Df,tween:Of,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Is})}function Mr(e,t){var n=Be(e,t);if(n.state>Is)throw new Error("too late; already scheduled");return n}function We(e,t){var n=Be(e,t);if(n.state>so)throw new Error("too late; already running");return n}function Be(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Lf(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=br(i,0,n.time);function i(l){n.state=Cs,n.timer.restart(s,n.delay,n.time),n.delay<=l&&s(l-n.delay)}function s(l){var d,f,u,p;if(n.state!==Cs)return c();for(d in o)if(p=o[d],p.name===n.name){if(p.state===so)return vr(s);p.state===Ms?(p.state=ao,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=ao,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(vr(function(){n.state===so&&(n.state=Ms,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=Nr,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Nr){for(n.state=so,r=new Array(u=n.tween.length),d=0,f=-1;d<u;++d)(p=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++f]=p);r.length=f+1}}function a(l){for(var d=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=Cr,1),f=-1,u=r.length;++f<u;)r[f].call(e,d);n.state===Cr&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ao,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function vn(e,t){var n=e.__transition,o,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((o=n[s]).name!==t){i=!1;continue}r=o.state>Nr&&o.state<Cr,o.state=ao,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[s]}i&&delete e.__transition}}function Tf(e){return this.each(function(){vn(this,e)})}function $f(e,t){var n,o;return function(){var r=We(this,e),i=r.tween;if(i!==n){o=n=i;for(var s=0,a=o.length;s<a;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}r.tween=o}}function Bf(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=We(this,e),s=i.tween;if(s!==o){r=(o=s).slice();for(var a={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}i.tween=r}}function Hf(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=Be(this.node(),n).tween,r=0,i=o.length,s;r<i;++r)if((s=o[r]).name===e)return s.value;return null}return this.each((t==null?$f:Bf)(n,e,t))}function Ir(e,t,n){var o=e._id;return e.each(function(){var r=We(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return Be(r,o).value[t]}}function Ps(e,t){var n;return(typeof t=="number"?$e:t instanceof Ke?mn:(n=Ke(t))?(t=n,mn):wr)(e,t)}function Vf(e){return function(){this.removeAttribute(e)}}function Ff(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Rf(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===o?i:i=t(o=s,n)}}function Wf(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===o?i:i=t(o=s,n)}}function qf(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function Xf(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function Yf(e,t){var n=un(e),o=n==="transform"?ws:Ps;return this.attrTween(e,typeof t=="function"?(n.local?Xf:qf)(n,o,Ir(this,"attr."+e,t)):t==null?(n.local?Ff:Vf)(n):(n.local?Wf:Rf)(n,o,t))}function Zf(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Gf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Uf(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Gf(e,i)),n}return r._value=t,r}function jf(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Zf(e,i)),n}return r._value=t,r}function Kf(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=un(e);return this.tween(n,(o.local?Uf:jf)(o,t))}function Qf(e,t){return function(){Mr(this,e).delay=+t.apply(this,arguments)}}function Jf(e,t){return t=+t,function(){Mr(this,e).delay=t}}function ep(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Qf:Jf)(t,e)):Be(this.node(),t).delay}function tp(e,t){return function(){We(this,e).duration=+t.apply(this,arguments)}}function np(e,t){return t=+t,function(){We(this,e).duration=t}}function op(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?tp:np)(t,e)):Be(this.node(),t).duration}function rp(e,t){if(typeof t!="function")throw new Error;return function(){We(this,e).ease=t}}function ip(e){var t=this._id;return arguments.length?this.each(rp(t,e)):Be(this.node(),t).ease}function sp(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;We(this,e).ease=n}}function ap(e){if(typeof e!="function")throw new Error;return this.each(sp(this._id,e))}function cp(e){typeof e!="function"&&(e=Jo(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new Je(o,this._parents,this._name,this._id)}function lp(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),s=new Array(o),a=0;a<i;++a)for(var c=t[a],l=n[a],d=c.length,f=s[a]=new Array(d),u,p=0;p<d;++p)(u=c[p]||l[p])&&(f[p]=u);for(;a<o;++a)s[a]=t[a];return new Je(s,this._parents,this._name,this._id)}function up(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function dp(e,t,n){var o,r,i=up(t)?Mr:We;return function(){var s=i(this,e),a=s.on;a!==o&&(r=(o=a).copy()).on(t,n),s.on=r}}function fp(e,t){var n=this._id;return arguments.length<2?Be(this.node(),n).on.on(e):this.each(dp(n,e,t))}function pp(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function gp(){return this.on("end.remove",pp(this._id))}function hp(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Rn(e));for(var o=this._groups,r=o.length,i=new Array(r),s=0;s<r;++s)for(var a=o[s],c=a.length,l=i[s]=new Array(c),d,f,u=0;u<c;++u)(d=a[u])&&(f=e.call(d,d.__data__,u,a))&&("__data__"in d&&(f.__data__=d.__data__),l[u]=f,co(l[u],t,n,u,l,Be(d,n)));return new Je(i,this._parents,t,n)}function mp(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Qo(e));for(var o=this._groups,r=o.length,i=[],s=[],a=0;a<r;++a)for(var c=o[a],l=c.length,d,f=0;f<l;++f)if(d=c[f]){for(var u=e.call(d,d.__data__,f,c),p,h=Be(d,n),y=0,w=u.length;y<w;++y)(p=u[y])&&co(p,t,n,y,u,h);i.push(u),s.push(d)}return new Je(i,s,t,n)}var yp=Et.prototype.constructor;function wp(){return new yp(this._groups,this._parents)}function xp(e,t){var n,o,r;return function(){var i=St(this,e),s=(this.style.removeProperty(e),St(this,e));return i===s?null:i===n&&s===o?r:r=t(n=i,o=s)}}function zs(e){return function(){this.style.removeProperty(e)}}function bp(e,t,n){var o,r=n+"",i;return function(){var s=St(this,e);return s===r?null:s===o?i:i=t(o=s,n)}}function vp(e,t,n){var o,r,i;return function(){var s=St(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),St(this,e))),s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a))}}function kp(e,t){var n,o,r,i="style."+t,s="end."+i,a;return function(){var c=We(this,e),l=c.on,d=c.value[i]==null?a||(a=zs(t)):void 0;(l!==n||r!==d)&&(o=(n=l).copy()).on(s,r=d),c.on=o}}function _p(e,t,n){var o=(e+="")=="transform"?ys:Ps;return t==null?this.styleTween(e,xp(e,o)).on("end.style."+e,zs(e)):typeof t=="function"?this.styleTween(e,vp(e,o,Ir(this,"style."+e,t))).each(kp(this._id,e)):this.styleTween(e,bp(e,o,t),n).on("end.style."+e,null)}function Sp(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Ep(e,t,n){var o,r;function i(){var s=t.apply(this,arguments);return s!==r&&(o=(r=s)&&Sp(e,s,n)),o}return i._value=t,i}function Np(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Ep(e,t,n??""))}function Cp(e){return function(){this.textContent=e}}function Mp(e){return function(){var t=e(this);this.textContent=t??""}}function Ip(e){return this.tween("text",typeof e=="function"?Mp(Ir(this,"text",e)):Cp(e==null?"":e+""))}function Pp(e){return function(t){this.textContent=e.call(this,t)}}function zp(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Pp(r)),t}return o._value=e,o}function Ap(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,zp(e))}function Dp(){for(var e=this._name,t=this._id,n=As(),o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)if(c=s[l]){var d=Be(c,t);co(c,e,n,l,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Je(o,this._parents,e,n)}function Op(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,s){var a={value:s},c={value:function(){--r===0&&i()}};n.each(function(){var l=We(this,o),d=l.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&i()})}var Lp=0;function Je(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function Tp(e){return Et().transition(e)}function As(){return++Lp}var Qe=Et.prototype;Je.prototype=Tp.prototype={constructor:Je,select:hp,selectAll:mp,selectChild:Qe.selectChild,selectChildren:Qe.selectChildren,filter:cp,merge:lp,selection:wp,transition:Dp,call:Qe.call,nodes:Qe.nodes,node:Qe.node,size:Qe.size,empty:Qe.empty,each:Qe.each,on:fp,attr:Yf,attrTween:Kf,style:_p,styleTween:Np,text:Ip,textTween:Ap,remove:gp,tween:Hf,delay:ep,duration:op,ease:ip,easeVarying:ap,end:Op,[Symbol.iterator]:Qe[Symbol.iterator]};var $p={time:null,delay:0,duration:250,ease:Ns};function Bp(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Hp(e){var t,n;e instanceof Je?(t=e._id,e=e._name):(t=As(),(n=$p).time=ro(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&co(c,e,t,l,s,n||Bp(c,t));return new Je(o,this._parents,e,t)}Et.prototype.interrupt=Tf;Et.prototype.transition=Hp;var lo=e=>()=>e;function Vp(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function et(e,t,n){this.k=e,this.x=t,this.y=n}et.prototype={constructor:et,scale:function(e){return e===1?this:new et(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new et(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var _n=new et(1,0,0);zr.prototype=et.prototype;function zr(e){for(;!e.__zoom;)if(!(e=e.parentNode))return _n;return e.__zoom}function Pr(e){e.stopImmediatePropagation()}function kn(e){e.preventDefault(),e.stopImmediatePropagation()}function Fp(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Rp(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Ds(){return this.__zoom||_n}function Wp(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function qp(){return navigator.maxTouchPoints||"ontouchstart"in this}function Xp(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}function Ar(){var e=Fp,t=Rp,n=Xp,o=Wp,r=qp,i=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,c=Wt,l=_t("start","zoom","end"),d,f,u,p=500,h=150,y=0,w=10;function g(b){b.property("__zoom",Ds).on("wheel.zoom",z,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",T).on("touchmove.zoom",W).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(b,C,k,I){var D=b.selection?b.selection():b;D.property("__zoom",Ds),b!==D?S(b,C,k,I):D.interrupt().each(function(){E(this,arguments).event(I).start().zoom(null,typeof C=="function"?C.apply(this,arguments):C).end()})},g.scaleBy=function(b,C,k,I){g.scaleTo(b,function(){var D=this.__zoom.k,A=typeof C=="function"?C.apply(this,arguments):C;return D*A},k,I)},g.scaleTo=function(b,C,k,I){g.transform(b,function(){var D=t.apply(this,arguments),A=this.__zoom,F=k==null?x(D):typeof k=="function"?k.apply(this,arguments):k,H=A.invert(F),X=typeof C=="function"?C.apply(this,arguments):C;return n(m(v(A,X),F,H),D,s)},k,I)},g.translateBy=function(b,C,k,I){g.transform(b,function(){return n(this.__zoom.translate(typeof C=="function"?C.apply(this,arguments):C,typeof k=="function"?k.apply(this,arguments):k),t.apply(this,arguments),s)},null,I)},g.translateTo=function(b,C,k,I,D){g.transform(b,function(){var A=t.apply(this,arguments),F=this.__zoom,H=I==null?x(A):typeof I=="function"?I.apply(this,arguments):I;return n(_n.translate(H[0],H[1]).scale(F.k).translate(typeof C=="function"?-C.apply(this,arguments):-C,typeof k=="function"?-k.apply(this,arguments):-k),A,s)},I,D)};function v(b,C){return C=Math.max(i[0],Math.min(i[1],C)),C===b.k?b:new et(C,b.x,b.y)}function m(b,C,k){var I=C[0]-k[0]*b.k,D=C[1]-k[1]*b.k;return I===b.x&&D===b.y?b:new et(b.k,I,D)}function x(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function S(b,C,k,I){b.on("start.zoom",function(){E(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){E(this,arguments).event(I).end()}).tween("zoom",function(){var D=this,A=arguments,F=E(D,A).event(I),H=t.apply(D,A),X=k==null?x(H):typeof k=="function"?k.apply(D,A):k,j=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),Y=D.__zoom,Q=typeof C=="function"?C.apply(D,A):C,re=c(Y.invert(X).concat(j/Y.k),Q.invert(X).concat(j/Q.k));return function(G){if(G===1)G=Q;else{var $=re(G),V=j/$[2];G=new et(V,X[0]-$[0]*V,X[1]-$[1]*V)}F.zoom(null,G)}})}function E(b,C,k){return!k&&b.__zooming||new N(b,C)}function N(b,C){this.that=b,this.args=C,this.active=0,this.sourceEvent=null,this.extent=t.apply(b,C),this.taps=0}N.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,C){return this.mouse&&b!=="mouse"&&(this.mouse[1]=C.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=C.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=C.invert(this.touch1[0])),this.that.__zoom=C,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var C=Ee(this.that).datum();l.call(b,this.that,new Vp(b,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:l}),C)}};function z(b,...C){if(!e.apply(this,arguments))return;var k=E(this,C).event(b),I=this.__zoom,D=Math.max(i[0],Math.min(i[1],I.k*Math.pow(2,o.apply(this,arguments)))),A=Ie(b);if(k.wheel)(k.mouse[0][0]!==A[0]||k.mouse[0][1]!==A[1])&&(k.mouse[1]=I.invert(k.mouse[0]=A)),clearTimeout(k.wheel);else{if(I.k===D)return;k.mouse=[A,I.invert(A)],vn(this),k.start()}kn(b),k.wheel=setTimeout(F,h),k.zoom("mouse",n(m(v(I,D),k.mouse[0],k.mouse[1]),k.extent,s));function F(){k.wheel=null,k.end()}}function P(b,...C){if(u||!e.apply(this,arguments))return;var k=b.currentTarget,I=E(this,C,!0).event(b),D=Ee(b.view).on("mousemove.zoom",X,!0).on("mouseup.zoom",j,!0),A=Ie(b,k),F=b.clientX,H=b.clientY;or(b.view),Pr(b),I.mouse=[A,this.__zoom.invert(A)],vn(this),I.start();function X(Y){if(kn(Y),!I.moved){var Q=Y.clientX-F,re=Y.clientY-H;I.moved=Q*Q+re*re>y}I.event(Y).zoom("mouse",n(m(I.that.__zoom,I.mouse[0]=Ie(Y,k),I.mouse[1]),I.extent,s))}function j(Y){D.on("mousemove.zoom mouseup.zoom",null),rr(Y.view,I.moved),kn(Y),I.event(Y).end()}}function R(b,...C){if(e.apply(this,arguments)){var k=this.__zoom,I=Ie(b.changedTouches?b.changedTouches[0]:b,this),D=k.invert(I),A=k.k*(b.shiftKey?.5:2),F=n(m(v(k,A),I,D),t.apply(this,C),s);kn(b),a>0?Ee(this).transition().duration(a).call(S,F,I,b):Ee(this).call(g.transform,F,I,b)}}function T(b,...C){if(e.apply(this,arguments)){var k=b.touches,I=k.length,D=E(this,C,b.changedTouches.length===I).event(b),A,F,H,X;for(Pr(b),F=0;F<I;++F)H=k[F],X=Ie(H,this),X=[X,this.__zoom.invert(X),H.identifier],D.touch0?!D.touch1&&D.touch0[2]!==X[2]&&(D.touch1=X,D.taps=0):(D.touch0=X,A=!0,D.taps=1+!!d);d&&(d=clearTimeout(d)),A&&(D.taps<2&&(f=X[0],d=setTimeout(function(){d=null},p)),vn(this),D.start())}}function W(b,...C){if(this.__zooming){var k=E(this,C).event(b),I=b.changedTouches,D=I.length,A,F,H,X;for(kn(b),A=0;A<D;++A)F=I[A],H=Ie(F,this),k.touch0&&k.touch0[2]===F.identifier?k.touch0[0]=H:k.touch1&&k.touch1[2]===F.identifier&&(k.touch1[0]=H);if(F=k.that.__zoom,k.touch1){var j=k.touch0[0],Y=k.touch0[1],Q=k.touch1[0],re=k.touch1[1],G=(G=Q[0]-j[0])*G+(G=Q[1]-j[1])*G,$=($=re[0]-Y[0])*$+($=re[1]-Y[1])*$;F=v(F,Math.sqrt(G/$)),H=[(j[0]+Q[0])/2,(j[1]+Q[1])/2],X=[(Y[0]+re[0])/2,(Y[1]+re[1])/2]}else if(k.touch0)H=k.touch0[0],X=k.touch0[1];else return;k.zoom("touch",n(m(F,H,X),k.extent,s))}}function B(b,...C){if(this.__zooming){var k=E(this,C).event(b),I=b.changedTouches,D=I.length,A,F;for(Pr(b),u&&clearTimeout(u),u=setTimeout(function(){u=null},p),A=0;A<D;++A)F=I[A],k.touch0&&k.touch0[2]===F.identifier?delete k.touch0:k.touch1&&k.touch1[2]===F.identifier&&delete k.touch1;if(k.touch1&&!k.touch0&&(k.touch0=k.touch1,delete k.touch1),k.touch0)k.touch0[1]=this.__zoom.invert(k.touch0[0]);else if(k.end(),k.taps===2&&(F=Ie(F,this),Math.hypot(f[0]-F[0],f[1]-F[1])<w)){var H=Ee(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return g.wheelDelta=function(b){return arguments.length?(o=typeof b=="function"?b:lo(+b),g):o},g.filter=function(b){return arguments.length?(e=typeof b=="function"?b:lo(!!b),g):e},g.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:lo(!!b),g):r},g.extent=function(b){return arguments.length?(t=typeof b=="function"?b:lo([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),g):t},g.scaleExtent=function(b){return arguments.length?(i[0]=+b[0],i[1]=+b[1],g):[i[0],i[1]]},g.translateExtent=function(b){return arguments.length?(s[0][0]=+b[0][0],s[1][0]=+b[1][0],s[0][1]=+b[0][1],s[1][1]=+b[1][1],g):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},g.constrain=function(b){return arguments.length?(n=b,g):n},g.duration=function(b){return arguments.length?(a=+b,g):a},g.interpolate=function(b){return arguments.length?(c=b,g):c},g.on=function(){var b=l.on.apply(l,arguments);return b===l?g:b},g.clickDistance=function(b){return arguments.length?(y=(b=+b)*b,g):Math.sqrt(y)},g.tapDistance=function(b){return arguments.length?(w=+b,g):w},g}var Ae={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Gt=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],$r=["Enter"," ","Escape"],Br={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},dt;(function(e){e.Strict="strict",e.Loose="loose"})(dt||(dt={}));var tt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(tt||(tt={}));var zt;(function(e){e.Partial="partial",e.Full="full"})(zt||(zt={}));var Hr={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},qe;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(qe||(qe={}));var ft;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(ft||(ft={}));var Z;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(Z||(Z={}));var Os={[Z.Left]:Z.Right,[Z.Right]:Z.Left,[Z.Top]:Z.Bottom,[Z.Bottom]:Z.Top},Vr=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Zs=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Fr=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var En=(e,t=[0,0])=>{let{width:n,height:o}=Le(e),r=e.origin??t,i=n*r[0],s=o*r[1];return{x:e.position.x-i,y:e.position.y-s}},Rr=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=!1,o=e.reduce((r,i)=>{let s=typeof i=="string",a=!t.nodeLookup&&!s?i:void 0;return t.nodeLookup&&(a=s?t.nodeLookup.get(i):Fr(i)?i:t.nodeLookup.get(i.id)),a?(n=!0,mo(r,po(a,t.nodeOrigin))):r},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return n?yo(o):{x:0,y:0,width:0,height:0}},Ut=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=mo(n,po(r)),o=!0)}),o?yo(n):{x:0,y:0,width:0,height:0}},go=(e,t,[n,o,r]=[0,0,1],i=!1,s=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,d=t.height/r,f=[];for(let u of e.values()){let{measured:p,selectable:h=!0,hidden:y=!1}=u;if(s&&!h||y)continue;let w=p.width??u.width??u.initialWidth??0,g=p.height??u.height??u.initialHeight??0,{x:v,y:m}=u.internals.positionAbsolute,x=Qs(a,c,l,d,v,m,w,g),S=w*g,E=i&&x>0;(!u.internals.handleBounds||E||x>=S||u.dragging)&&f.push(u)}return f},Gs=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function Yp(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:s,height:a}=Le(r);i=s>0&&a>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Us({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},s){if(e.size===0)return!0;let a=Yp(e,s),c=Ut(a),l=Cn(c,t,n,s?.minZoom??r,s?.maxZoom??i,s?.padding??.1);return await o.setViewport(l,{duration:s?.duration,ease:s?.ease,interpolate:s?.interpolate}),!0}function Wr({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let s=n.get(e),a=s.parentId?n.get(s.parentId):void 0,{x:c,y:l}=a?a.internals.positionAbsolute:{x:0,y:0},d=s.origin??o,f=s.extent||r;if(s.extent==="parent"&&!s.expandParent)if(!a)i?.("005",Ae.error005());else{let{width:p,height:h}=Le(a);p&&h&&(f=[[c,l],[c+p,l+h]])}else a&&Ot(s.extent)&&(f=[[s.extent[0][0]+c,s.extent[0][1]+l],[s.extent[1][0]+c,s.extent[1][1]+l]]);let u=Ot(f)?At(t,f,s.measured):t;return(s.measured.width===void 0||s.measured.height===void 0)&&i?.("015",Ae.error015()),{position:{x:u.x-c+(s.measured.width??0)*d[0],y:u.y-l+(s.measured.height??0)*d[1]},positionAbsolute:u}}async function js({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(u=>u.id)),s=[];for(let u of n){if(u.deletable===!1)continue;let p=i.has(u.id),h=!p&&u.parentId&&s.find(y=>y.id===u.parentId);(p||h)&&s.push(u)}let a=new Set(t.map(u=>u.id)),c=o.filter(u=>u.deletable!==!1),d=Gs(s,c);for(let u of c)a.has(u.id)&&!d.find(h=>h.id===u.id)&&d.push(u);if(!r)return{edges:d,nodes:s};let f=await r({nodes:s,edges:d});return typeof f=="boolean"?f?{edges:d,nodes:s}:{edges:[],nodes:[]}:f}var Zt=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),At=(e={x:0,y:0},t,n)=>({x:Zt(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Zt(e.y,t[0][1],t[1][1]-(n?.height??0))});function Ks(e,t,n){let{width:o,height:r}=Le(n),{x:i,y:s}=n.internals.positionAbsolute;return At(e,[[i,s],[i+o,s+r]],t)}var Ls=(e,t,n)=>e<t?Zt(Math.abs(e-t),1,t)/t:e>n?-Zt(Math.abs(e-n),1,t)/t:0,ho=(e,t,n=15,o=40)=>{let r=Ls(e.x,o,t.width-o)*n,i=Ls(e.y,o,t.height-o)*n;return[r,i]},mo=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Tr=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),yo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),jt=(e,t=[0,0])=>{let{x:n,y:o}=Fr(e)?e.internals.positionAbsolute:En(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},po=(e,t=[0,0])=>{let{x:n,y:o}=Fr(e)?e.internals.positionAbsolute:En(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},qr=(e,t)=>yo(mo(Tr(e),Tr(t))),Qs=(e,t,n,o,r,i,s,a)=>{let c=Math.max(0,Math.min(e+n,r+s)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+a)-Math.max(t,i));return Math.ceil(c*l)},Nn=(e,t)=>Qs(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Xr=e=>De(e.width)&&De(e.height)&&De(e.x)&&De(e.y),De=e=>!isNaN(e)&&isFinite(e),Yr=(e,t)=>(n,o)=>{},Kt=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Qt=({x:e,y:t},[n,o,r],i=!1,s=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return i?Kt(a,s):a},Dt=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Yt(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Zp(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Yt(e,n),r=Yt(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Yt(e.top??e.y??0,n),r=Yt(e.bottom??e.y??0,n),i=Yt(e.left??e.x??0,t),s=Yt(e.right??e.x??0,t);return{top:o,right:s,bottom:r,left:i,x:i+s,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Gp(e,t,n,o,r,i){let{x:s,y:a}=Dt(e,[t,n,o]),{x:c,y:l}=Dt({x:e.x+e.width,y:e.y+e.height},[t,n,o]),d=r-c,f=i-l;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(d),bottom:Math.floor(f)}}var Cn=(e,t,n,o,r,i)=>{let s=Zp(i,t,n),a=(t-s.x)/e.width,c=(n-s.y)/e.height,l=Math.min(a,c),d=Zt(l,o,r),f=e.x+e.width/2,u=e.y+e.height/2,p=t/2-f*d,h=n/2-u*d,y=Gp(e,p,h,d,t,n),w={left:Math.min(y.left-s.left,0),top:Math.min(y.top-s.top,0),right:Math.min(y.right-s.right,0),bottom:Math.min(y.bottom-s.bottom,0)};return{x:p-w.left+w.right,y:h-w.top+w.bottom,zoom:d}},Jt=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function Ot(e){return e!=null&&e!=="parent"}function Le(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Zr(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Gr(e,t={width:0,height:0},n,o,r){let i={...e},s=o.get(n);if(s){let a=s.origin||r;i.x+=s.internals.positionAbsolute.x-(t.width??0)*a[0],i.y+=s.internals.positionAbsolute.y-(t.height??0)*a[1]}return i}function Ur(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Js(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function ea(e){return{...Br,...e||{}}}function jr(e){return e===null?null:e?"valid":"invalid"}function Sn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:s}=Oe(e),a=Qt({x:i-(r?.left??0),y:s-(r?.top??0)},o),{x:c,y:l}=n?Kt(a,t):a;return{xSnapped:c,ySnapped:l,...a}}var wo=e=>({width:e.offsetWidth,height:e.offsetHeight}),Kr=e=>e?.getRootNode?.()||window?.document,Up=["INPUT","SELECT","TEXTAREA"];function Qr(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Up.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Jr=e=>"clientX"in e,Oe=(e,t)=>{let n=Jr(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ts=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(s=>{let a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...wo(s)}})};function xo({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:s,targetControlY:a}){let c=e*.125+r*.375+s*.375+n*.125,l=t*.125+i*.375+a*.375+o*.125,d=Math.abs(c-e),f=Math.abs(l-t);return[c,l,d,f]}function uo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function $s({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case Z.Left:return[t-uo(t-o,i),n];case Z.Right:return[t+uo(o-t,i),n];case Z.Top:return[t,n-uo(n-r,i)];case Z.Bottom:return[t,n+uo(r-n,i)]}}function bo({sourceX:e,sourceY:t,sourcePosition:n=Z.Bottom,targetX:o,targetY:r,targetPosition:i=Z.Top,curvature:s=.25}){let[a,c]=$s({pos:n,x1:e,y1:t,x2:o,y2:r,c:s}),[l,d]=$s({pos:i,x1:o,y1:r,x2:e,y2:t,c:s}),[f,u,p,h]=xo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:l,targetControlY:d});return[`M${e},${t} C${a},${c} ${l},${d} ${o},${r}`,f,u,p,h]}function ei({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,s=Math.abs(o-t)/2,a=o<t?o+s:o-s;return[i,a,r,s]}function ta({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let s=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return s+a}function na({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=mo(po(e),po(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let s={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return Nn(s,yo(i))>0}var jp=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Kp=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),oa=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Ae.error006()),t;let o=n.getEdgeId||jp,r;return Vr(e)?r={...e}:r={...e,id:o(e)},Kp(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function vo({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,s,a]=ei({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,s,a]}var Bs={[Z.Left]:{x:-1,y:0},[Z.Right]:{x:1,y:0},[Z.Top]:{x:0,y:-1},[Z.Bottom]:{x:0,y:1}},Qp=({source:e,sourcePosition:t=Z.Bottom,target:n})=>t===Z.Left||t===Z.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Hs=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Jp({source:e,sourcePosition:t=Z.Bottom,target:n,targetPosition:o=Z.Top,center:r,offset:i,stepPosition:s}){let a=Bs[t],c=Bs[o],l={x:e.x+a.x*i,y:e.y+a.y*i},d={x:n.x+c.x*i,y:n.y+c.y*i},f=Qp({source:l,sourcePosition:t,target:d}),u=f.x!==0?"x":"y",p=f[u],h=[],y,w,g={x:0,y:0},v={x:0,y:0},[,,m,x]=ei({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[u]*c[u]===-1){u==="x"?(y=r.x??l.x+(d.x-l.x)*s,w=r.y??(l.y+d.y)/2):(y=r.x??(l.x+d.x)/2,w=r.y??l.y+(d.y-l.y)*s);let z=[{x:y,y:l.y},{x:y,y:d.y}],P=[{x:l.x,y:w},{x:d.x,y:w}];a[u]===p?h=u==="x"?z:P:h=u==="x"?P:z}else{let z=[{x:l.x,y:d.y}],P=[{x:d.x,y:l.y}];if(u==="x"?h=a.x===p?P:z:h=a.y===p?z:P,t===o){let b=Math.abs(e[u]-n[u]);if(b<=i){let C=Math.min(i-1,i-b);a[u]===p?g[u]=(l[u]>e[u]?-1:1)*C:v[u]=(d[u]>n[u]?-1:1)*C}}if(t!==o){let b=u==="x"?"y":"x",C=a[u]===c[b],k=l[b]>d[b],I=l[b]<d[b];(a[u]===1&&(!C&&k||C&&I)||a[u]!==1&&(!C&&I||C&&k))&&(h=u==="x"?z:P)}let R={x:l.x+g.x,y:l.y+g.y},T={x:d.x+v.x,y:d.y+v.y},W=Math.max(Math.abs(R.x-h[0].x),Math.abs(T.x-h[0].x)),B=Math.max(Math.abs(R.y-h[0].y),Math.abs(T.y-h[0].y));W>=B?(y=(R.x+T.x)/2,w=h[0].y):(y=h[0].x,w=(R.y+T.y)/2)}let S={x:l.x+g.x,y:l.y+g.y},E={x:d.x+v.x,y:d.y+v.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...E.x!==h[h.length-1].x||E.y!==h[h.length-1].y?[E]:[],n],y,w,m,x]}function eg(e,t,n,o){let r=Math.min(Hs(e,t)/2,Hs(t,n)/2,o),{x:i,y:s}=t;if(e.x===i&&i===n.x||e.y===s&&s===n.y)return`L${i} ${s}`;if(e.y===s){let l=e.x<n.x?-1:1,d=e.y<n.y?1:-1;return`L ${i+r*l},${s}Q ${i},${s} ${i},${s+r*d}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${s+r*c}Q ${i},${s} ${i+r*a},${s}`}function Mn({sourceX:e,sourceY:t,sourcePosition:n=Z.Bottom,targetX:o,targetY:r,targetPosition:i=Z.Top,borderRadius:s=5,centerX:a,centerY:c,offset:l=20,stepPosition:d=.5}){let[f,u,p,h,y]=Jp({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:a,y:c},offset:l,stepPosition:d}),w=`M${f[0].x} ${f[0].y}`;for(let g=1;g<f.length-1;g++)w+=eg(f[g-1],f[g],f[g+1],s);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,u,p,h,y]}function Vs(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function ra(e){let{sourceNode:t,targetNode:n}=e;if(!Vs(t)||!Vs(n))return null;let o=t.internals.handleBounds||Fs(t.handles),r=n.internals.handleBounds||Fs(n.handles),i=Rs(o?.source??[],e.sourceHandle),s=Rs(e.connectionMode===dt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!s)return e.onError?.("008",Ae.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=i?.position||Z.Bottom,c=s?.position||Z.Top,l=pt(t,i,a),d=pt(n,s,c);return{sourceX:l.x,sourceY:l.y,targetX:d.x,targetY:d.y,sourcePosition:a,targetPosition:c}}function Fs(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function pt(e,t,n=Z.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:s,height:a}=t??Le(e);if(o)return{x:r+s/2,y:i+a/2};switch(t?.position??n){case Z.Top:return{x:r+s/2,y:i};case Z.Right:return{x:r+s,y:i+a/2};case Z.Bottom:return{x:r+s/2,y:i+a};case Z.Left:return{x:r,y:i+a/2}}}function Rs(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function ko(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function ia(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((s,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=ko(c,t);i.has(l)||(s.push({id:l,color:c.color||n,...c}),i.add(l))}}),s),[]).sort((s,a)=>s.id.localeCompare(a.id))}var sa=1e3,tg=10,ti={nodeOrigin:[0,0],nodeExtent:Gt,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},ng={...ti,checkEquality:!0};function ni(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function aa(e,t,n){let o=ni(ti,n);for(let r of e.values())if(r.parentId)ri(r,e,t,o);else{let i=En(r,o.nodeOrigin),s=Ot(r.extent)?r.extent:o.nodeExtent,a=At(i,s,Le(r));r.internals.positionAbsolute=a}}function og(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function oi(e){return e==="manual"}function _o(e,t,n,o={}){let r=ni(ng,o),i={i:0},s=new Map(t),a=r?.elevateNodesOnSelect&&!oi(r.zIndexMode)?sa:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let d of e){let f=s.get(d.id);if(r.checkEquality&&d===f?.internals.userNode)t.set(d.id,f);else{let u=En(d,r.nodeOrigin),p=Ot(d.extent)?d.extent:r.nodeExtent,h=At(u,p,Le(d));f={...r.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:og(d,f),z:ca(d,a,r.zIndexMode),userNode:d}},t.set(d.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(c=!1),d.parentId&&ri(f,t,n,o,i),l||=d.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function rg(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function ri(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:s,nodeExtent:a,zIndexMode:c}=ni(ti,o),l=e.parentId,d=t.get(l);if(!d){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}rg(e,n),r&&!d.parentId&&d.internals.rootParentIndex===void 0&&c==="auto"&&(d.internals.rootParentIndex=++r.i,d.internals.z=d.internals.z+r.i*tg),r&&d.internals.rootParentIndex!==void 0&&(r.i=d.internals.rootParentIndex);let f=i&&!oi(c)?sa:0,{x:u,y:p,z:h}=ig(e,d,s,a,f,c),{positionAbsolute:y}=e.internals,w=u!==y.x||p!==y.y;(w||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:u,y:p}:y,z:h}})}function ca(e,t,n){let o=De(e.zIndex)?e.zIndex:0;return oi(n)?o:o+(e.selected?t:0)}function ig(e,t,n,o,r,i){let{x:s,y:a}=t.internals.positionAbsolute,c=Le(e),l=En(e,n),d=Ot(e.extent)?At(l,e.extent,c):l,f=At({x:s+d.x,y:a+d.y},o,c);e.extent==="parent"&&(f=Ks(f,c,t));let u=ca(e,r,i),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=u?p+1:u}}function So(e,t,n,o=[0,0]){let r=[],i=new Map;for(let s of e){let a=t.get(s.parentId);if(!a)continue;let c=i.get(s.parentId)?.expandedRect??jt(a),l=qr(c,s.rect);i.set(s.parentId,{expandedRect:l,parent:a})}return i.size>0&&i.forEach(({expandedRect:s,parent:a},c)=>{let l=a.internals.positionAbsolute,d=Le(a),f=a.origin??o,u=s.x<l.x?Math.round(Math.abs(l.x-s.x)):0,p=s.y<l.y?Math.round(Math.abs(l.y-s.y)):0,h=Math.max(d.width,Math.round(s.width)),y=Math.max(d.height,Math.round(s.height)),w=(h-d.width)*f[0],g=(y-d.height)*f[1];(u>0||p>0||w||g)&&(r.push({id:c,type:"position",position:{x:a.position.x-u+w,y:a.position.y-p+g}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+u,y:v.position.y+p}})})),(d.width<s.width||d.height<s.height||u||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(u?f[0]*u-w:0),height:y+(p?f[1]*p-g:0)}})}),r}function la(e,t,n,o,r,i,s){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let l=[],d=window.getComputedStyle(a),{m22:f}=new window.DOMMatrixReadOnly(d.transform),u=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let y=wo(p.nodeElement),w=h.measured.width!==y.width||h.measured.height!==y.height;if(!!(y.width&&y.height&&(w||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=Ot(h.extent)?h.extent:i,{positionAbsolute:x}=h.internals;if(h.parentId&&h.extent==="parent"){let E=t.get(h.parentId);E&&(x=Ks(x,y,E))}else m&&(x=At(x,m,y));let S={...h,measured:y,internals:{...h.internals,positionAbsolute:x,handleBounds:{source:Ts("source",p.nodeElement,v,f,h.id),target:Ts("target",p.nodeElement,v,f,h.id)}}};t.set(h.id,S),h.parentId&&ri(S,t,n,{nodeOrigin:r,zIndexMode:s}),c=!0,w&&(l.push({id:h.id,type:"dimensions",dimensions:y}),h.expandParent&&h.parentId&&u.push({id:h.id,parentId:h.parentId,rect:jt(S,r)}))}}if(u.length>0){let p=So(u,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function ua({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let s=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!s&&(s.x!==n[0]||s.y!==n[1]||s.k!==n[2])}function Ws(e,t,n,o,r,i){let s=r,a=o.get(s)||new Map;o.set(s,a.set(n,t)),s=`${r}-${e}`;let c=o.get(s)||new Map;if(o.set(s,c.set(n,t)),i){s=`${r}-${e}-${i}`;let l=o.get(s)||new Map;o.set(s,l.set(n,t))}}function ii(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:s=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:s,targetHandle:a},l=`${r}-${s}--${i}-${a}`,d=`${i}-${a}--${r}-${s}`;Ws("source",c,d,e,r,s),Ws("target",c,l,e,i,a),t.set(o.id,o)}}function da(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:da(n,t):!1}function qs(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function sg(e,t,n,o){let r=new Map;for(let[i,s]of e)if((s.selected||s.id===o)&&(!s.parentId||!da(s,e))&&(s.draggable||t&&typeof s.draggable>"u")){let a=e.get(i);a&&r.set(i,{id:i,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function Dr({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[s,a]of t){let c=n.get(s)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function ag({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},s=Kt(i,t);return{x:s.x-i.x,y:s.y-i.y}}function fa({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},s=0,a=new Map,c=!1,l={x:0,y:0},d=null,f=!1,u=null,p=!1,h=!1,y=null;function w({noDragClassName:v,handleSelector:m,domNode:x,isSelectable:S,nodeId:E,nodeClickDistance:N=0}){u=Ee(x);function z({x:W,y:B}){let{nodeLookup:b,nodeExtent:C,snapGrid:k,snapToGrid:I,nodeOrigin:D,onNodeDrag:A,onSelectionDrag:F,onError:H,updateNodePositions:X}=t();i={x:W,y:B};let j=!1,Y=a.size>1,Q=Y&&C?Tr(Ut(a)):null,re=Y&&I?ag({dragItems:a,snapGrid:k,x:W,y:B}):null;for(let[G,$]of a){if(!b.has(G))continue;let V={x:W-$.distance.x,y:B-$.distance.y};I&&(V=re?{x:Math.round(V.x+re.x),y:Math.round(V.y+re.y)}:Kt(V,k));let J=null;if(Y&&C&&!$.extent&&Q){let{positionAbsolute:K}=$.internals,oe=K.x-Q.x+C[0][0],te=K.x+$.measured.width-Q.x2+C[1][0],ae=K.y-Q.y+C[0][1],ye=K.y+$.measured.height-Q.y2+C[1][1];J=[[oe,ae],[te,ye]]}let{position:ne,positionAbsolute:U}=Wr({nodeId:G,nextPosition:V,nodeLookup:b,nodeExtent:J||C,nodeOrigin:D,onError:H});j=j||$.position.x!==ne.x||$.position.y!==ne.y,$.position=ne,$.internals.positionAbsolute=U}if(h=h||j,!!j&&(X(a,!0),y&&(o||A||!E&&F))){let[G,$]=Dr({nodeId:E,dragItems:a,nodeLookup:b});o?.(y,a,G,$),A?.(y,G,$),E||F?.(y,$)}}async function P(){if(!d)return;let{transform:W,panBy:B,autoPanSpeed:b,autoPanOnNodeDrag:C}=t();if(!C){c=!1,cancelAnimationFrame(s);return}let[k,I]=ho(l,d,b);(k!==0||I!==0)&&(i.x=(i.x??0)-k/W[2],i.y=(i.y??0)-I/W[2],await B({x:k,y:I})&&z(i)),s=requestAnimationFrame(P)}function R(W){let{nodeLookup:B,multiSelectionActive:b,nodesDraggable:C,transform:k,snapGrid:I,snapToGrid:D,selectNodesOnDrag:A,onNodeDragStart:F,onSelectionDragStart:H,unselectNodesAndEdges:X}=t();f=!0,(!A||!S)&&!b&&E&&(B.get(E)?.selected||X()),S&&A&&E&&e?.(E);let j=Sn(W.sourceEvent,{transform:k,snapGrid:I,snapToGrid:D,containerBounds:d});if(i=j,a=sg(B,C,j,E),a.size>0&&(n||F||!E&&H)){let[Y,Q]=Dr({nodeId:E,dragItems:a,nodeLookup:B});n?.(W.sourceEvent,a,Y,Q),F?.(W.sourceEvent,Y,Q),E||H?.(W.sourceEvent,Q)}}let T=ir().clickDistance(N).on("start",W=>{let{domNode:B,nodeDragThreshold:b,transform:C,snapGrid:k,snapToGrid:I}=t();d=B?.getBoundingClientRect()||null,p=!1,h=!1,y=W.sourceEvent,b===0&&R(W),i=Sn(W.sourceEvent,{transform:C,snapGrid:k,snapToGrid:I,containerBounds:d}),l=Oe(W.sourceEvent,d)}).on("drag",W=>{let{autoPanOnNodeDrag:B,transform:b,snapGrid:C,snapToGrid:k,nodeDragThreshold:I,nodeLookup:D}=t(),A=Sn(W.sourceEvent,{transform:b,snapGrid:C,snapToGrid:k,containerBounds:d});if(y=W.sourceEvent,(W.sourceEvent.type==="touchmove"&&W.sourceEvent.touches.length>1||E&&!D.has(E))&&(p=!0),!p){if(!c&&B&&f&&(c=!0,P()),!f){let F=Oe(W.sourceEvent,d),H=F.x-l.x,X=F.y-l.y;Math.sqrt(H*H+X*X)>I&&R(W)}(i.x!==A.xSnapped||i.y!==A.ySnapped)&&a&&f&&(l=Oe(W.sourceEvent,d),z(A))}}).on("end",W=>{if(!f||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,f=!1,cancelAnimationFrame(s),a.size>0){let{nodeLookup:B,updateNodePositions:b,onNodeDragStop:C,onSelectionDragStop:k}=t();if(h&&(b(a,!1),h=!1),r||C||!E&&k){let[I,D]=Dr({nodeId:E,dragItems:a,nodeLookup:B,dragging:!1});r?.(W.sourceEvent,a,I,D),C?.(W.sourceEvent,I,D),E||k?.(W.sourceEvent,D)}}}).filter(W=>{let B=W.target;return!W.button&&(!v||!qs(B,`.${v}`,x))&&(!m||qs(B,m,x))});u.call(T)}function g(){u?.on(".drag",null)}return{update:w,destroy:g}}function cg(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())Nn(r,jt(i))>0&&o.push(i);return o}var lg=250;function ug(e,t,n,o){let r=[],i=1/0,s=cg(e,n,t+lg);for(let a of s){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:d,y:f}=pt(a,l,l.position,!0),u=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(f-e.y,2));u>t||(u<i?(r=[{...l,x:d,y:f}],i=u):u===i&&r.push({...l,x:d,y:f}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function pa(e,t,n,o,r,i=!1){let s=o.get(e);if(!s)return null;let a=r==="strict"?s.internals.handleBounds?.[t]:[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]],c=(n?a?.find(l=>l.id===n):a?.[0])??null;return c&&i?{...c,...pt(s,c,c.position,!0)}:c}function ga(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function dg(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var ha=()=>!0;function fg(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:s,domNode:a,nodeLookup:c,lib:l,autoPanOnConnect:d,flowId:f,panBy:u,cancelConnection:p,onConnectStart:h,onConnect:y,onConnectEnd:w,isValidConnection:g=ha,onReconnectEnd:v,updateConnection:m,getTransform:x,getFromHandle:S,autoPanSpeed:E,dragThreshold:N=1,handleDomNode:z}){let P=Kr(e.target),R=0,T,{x:W,y:B}=Oe(e),b=ga(i,z),C=a?.getBoundingClientRect(),k=!1;if(!C||!b)return;let I=pa(r,b,o,c,t);if(!I)return;let D=Oe(e,C),A=!1,F=null,H=!1,X=null;function j(){if(!d||!C)return;let[ne,U]=ho(D,C,E);u({x:ne,y:U}),R=requestAnimationFrame(j)}let Y={...I,nodeId:r,type:b,position:I.position},Q=c.get(r),G={inProgress:!0,isValid:null,from:pt(Q,Y,Z.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:Q,to:D,toHandle:null,toPosition:Os[Y.position],toNode:null,pointer:D};function $(){k=!0,m(G),h?.(e,{nodeId:r,handleId:o,handleType:b})}N===0&&$();function V(ne){if(!k){let{x:ye,y:Me}=Oe(ne),_e=ye-W,we=Me-B;if(!(_e*_e+we*we>N*N))return;$()}if(!S()||!Y){J(ne);return}let U=x();D=Oe(ne,C),T=ug(Qt(D,U,!1,[1,1]),n,c,Y),A||(j(),A=!0);let K=ma(ne,{handle:T,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:s?"target":"source",isValidConnection:g,doc:P,lib:l,flowId:f,nodeLookup:c});X=K.handleDomNode,F=K.connection,H=dg(!!T,K.isValid);let oe=c.get(r),te=oe?pt(oe,Y,Z.Left,!0):G.from,ae={...G,from:te,isValid:H,to:K.toHandle&&H?Dt({x:K.toHandle.x,y:K.toHandle.y},U):D,toHandle:K.toHandle,toPosition:H&&K.toHandle?K.toHandle.position:Os[Y.position],toNode:K.toHandle?c.get(K.toHandle.nodeId):null,pointer:D};m(ae),G=ae}function J(ne){if(!("touches"in ne&&ne.touches.length>0)){if(k){(T||X)&&F&&H&&y?.(F);let{inProgress:U,...K}=G,oe={...K,toPosition:G.toHandle?G.toPosition:null};w?.(ne,oe),i&&v?.(ne,oe)}p(),cancelAnimationFrame(R),A=!1,H=!1,F=null,X=null,P.removeEventListener("mousemove",V),P.removeEventListener("mouseup",J),P.removeEventListener("touchmove",V),P.removeEventListener("touchend",J)}}P.addEventListener("mousemove",V),P.addEventListener("mouseup",J),P.addEventListener("touchmove",V),P.addEventListener("touchend",J)}function ma(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:s,lib:a,flowId:c,isValidConnection:l=ha,nodeLookup:d}){let f=i==="target",u=t?s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=Oe(e),y=s.elementFromPoint(p,h),w=y?.classList.contains(`${a}-flow__handle`)?y:u,g={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let v=ga(void 0,w),m=w.getAttribute("data-nodeid"),x=w.getAttribute("data-handleid"),S=w.classList.contains("connectable"),E=w.classList.contains("connectableend");if(!m||!v)return g;let N={source:f?m:o,sourceHandle:f?x:r,target:f?o:m,targetHandle:f?r:x};g.connection=N;let P=S&&E&&(n===dt.Strict?f&&v==="source"||!f&&v==="target":m!==o||x!==r);g.isValid=P&&l(N),g.toHandle=pa(m,v,x,d,n,!0)}return g}var Eo={onPointerDown:fg,isValid:ma};function ya({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=Ee(e);function i({translateExtent:a,width:c,height:l,zoomStep:d=1,pannable:f=!0,zoomable:u=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let x=n(),S=m.sourceEvent.ctrlKey&&Jt()?10:1,E=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,N=x[2]*Math.pow(2,E*S);t.scaleTo(N)},y=[0,0],w=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(y=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},g=m=>{let x=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],E=[S[0]-y[0],S[1]-y[1]];y=S;let N=o()*Math.max(x[2],Math.log(x[2]))*(p?-1:1),z={x:x[0]-E[0]*N,y:x[1]-E[1]*N},P=[[0,0],[c,l]];t.setViewportConstrained({x:z.x,y:z.y,zoom:x[2]},P,a)},v=Ar().on("start",w).on("zoom",f?g:null).on("zoom.wheel",u?h:null);r.call(v,{})}function s(){r.on("zoom",null)}return{update:i,destroy:s,pointer:Ie}}var No=e=>({x:e.x,y:e.y,zoom:e.k}),Or=({x:e,y:t,zoom:n})=>_n.translate(e,t).scale(n),ut=(e,t)=>e.target.closest(`.${t}`),wa=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),pg=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Lr=(e,t=0,n=pg,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},xa=e=>{let t=e.ctrlKey&&Jt()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function gg({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:s,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:l}){return d=>{if(ut(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let f=n.property("__zoom").k||1;if(d.ctrlKey&&s){let w=Ie(d),g=xa(d),v=f*Math.pow(2,g);o.scaleTo(n,v,w,d);return}let u=d.deltaMode===1?20:1,p=r===tt.Vertical?0:d.deltaX*u,h=r===tt.Horizontal?0:d.deltaY*u;!Jt()&&d.shiftKey&&r!==tt.Vertical&&(p=d.deltaY*u,h=0),o.translateBy(n,-(p/f)*i,-(h/f)*i,{internal:!0});let y=No(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(d,y):(e.isPanScrolling=!0,a?.(d,y)),e.panScrollTimeout=setTimeout(()=>{l?.(d,y),e.isPanScrolling=!1},150)}}function hg({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",s=!t&&i&&!o.ctrlKey,a=ut(o,e);if(o.ctrlKey&&i&&a&&o.preventDefault(),s||a)return null;o.preventDefault(),n.call(this,o,r)}}function mg({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=No(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function yg({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&wa(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,No(i.transform))}}function wg({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return s=>{if(!s.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&wa(t,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&i(s.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=No(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(s.sourceEvent,a)},n?150:0)}}}function xg({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:n,zoomOnPinch:o,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:s,userSelectionActive:a,noWheelClassName:c,noPanClassName:l,lib:d,connectionInProgress:f}){return u=>{let p=t||n,h=o&&u.ctrlKey,y=u.type==="wheel";if(u.button===1&&u.type==="mousedown"&&(ut(u,`${d}-flow__node`)||ut(u,`${d}-flow__edge`)||ut(u,`${d}-flow__selection`)||ut(u,`${d}-flow__nodesselection`)))return!0;if(!r&&!p&&!i&&!s&&!o||a||f&&!y||ut(u,c)&&y||ut(u,l)&&(!y||i&&y&&!t)||!o&&u.ctrlKey&&y)return!1;if(!o&&u.type==="touchstart"&&u.touches?.length>1)return u.preventDefault(),!1;if(!p&&!i&&!h&&y||!r&&(u.type==="mousedown"||u.type==="touchstart")||Array.isArray(r)&&!r.includes(u.button)&&u.type==="mousedown")return!1;let w=Array.isArray(r)&&r.includes(u.button)||!u.button||u.button<=1;return(!u.ctrlKey||y||e)&&w}}function ba({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:s,onPanZoomEnd:a,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),f=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(B=>{let b=B[0];b&&(f=[[0,0],[b.contentRect.width,b.contentRect.height]])}):null)?.observe(e);let p=Ar().extent(()=>f).scaleExtent([t,n]).translateExtent(o),h=Ee(e).call(p);x({x:r.x,y:r.y,zoom:Zt(r.zoom,t,n)},[[0,0],[d.width,d.height]],o);let y=h.on("wheel.zoom"),w=h.on("dblclick.zoom");p.wheelDelta(xa);async function g(B,b){return h?new Promise(C=>{p?.interpolate(b?.interpolate==="linear"?Rt:Wt).transform(Lr(h,b?.duration,b?.ease,()=>C(!0)),B)}):!1}function v({noWheelClassName:B,noPanClassName:b,onPaneContextMenu:C,userSelectionActive:k,panOnScroll:I,panOnDrag:D,panOnScrollMode:A,panOnScrollSpeed:F,preventScrolling:H,zoomOnPinch:X,zoomOnScroll:j,zoomOnDoubleClick:Y,panActivationKeyPressed:Q=!1,zoomActivationKeyPressed:re,lib:G,onTransformChange:$,connectionInProgress:V,paneClickDistance:J,selectionOnDrag:ne}){k&&!l.isZoomingOrPanning&&m();let U=I&&!re&&!k;p.clickDistance(ne?1/0:!De(J)||J<0?0:J);let K=U?gg({zoomPanValues:l,noWheelClassName:B,d3Selection:h,d3Zoom:p,panOnScrollMode:A,panOnScrollSpeed:F,zoomOnPinch:X,onPanZoomStart:s,onPanZoom:i,onPanZoomEnd:a}):hg({noWheelClassName:B,preventScrolling:H,d3ZoomHandler:y});h.on("wheel.zoom",K,{passive:!1});let oe=mg({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:s});p.on("start",oe);let te=yg({zoomPanValues:l,panOnDrag:D,onPaneContextMenu:!!C,onPanZoom:i,onTransformChange:$});p.on("zoom",te);let ae=wg({zoomPanValues:l,panOnDrag:D,panOnScroll:I,onPaneContextMenu:C,onPanZoomEnd:a,onDraggingChange:c});p.on("end",ae);let ye=xg({panActivationKeyPressed:Q,zoomActivationKeyPressed:re,panOnDrag:D,zoomOnScroll:j,panOnScroll:I,zoomOnDoubleClick:Y,zoomOnPinch:X,userSelectionActive:k,noPanClassName:b,noWheelClassName:B,lib:G,connectionInProgress:V});p.filter(ye),Y?h.on("dblclick.zoom",w):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function x(B,b,C){let k=Or(B),I=p?.constrain()(k,b,C);return I&&await g(I),I}async function S(B,b){let C=Or(B);return await g(C,b),C}function E(B){if(h){let b=Or(B),C=h.property("__zoom");(C.k!==B.zoom||C.x!==B.x||C.y!==B.y)&&p?.transform(h,b,null,{sync:!0})}}function N(){let B=h?zr(h.node()):{x:0,y:0,k:1};return{x:B.x,y:B.y,zoom:B.k}}async function z(B,b){return h?new Promise(C=>{p?.interpolate(b?.interpolate==="linear"?Rt:Wt).scaleTo(Lr(h,b?.duration,b?.ease,()=>C(!0)),B)}):!1}async function P(B,b){return h?new Promise(C=>{p?.interpolate(b?.interpolate==="linear"?Rt:Wt).scaleBy(Lr(h,b?.duration,b?.ease,()=>C(!0)),B)}):!1}function R(B){p?.scaleExtent(B)}function T(B){p?.translateExtent(B)}function W(B){let b=!De(B)||B<0?0:B;p?.clickDistance(b)}return{update:v,destroy:m,setViewport:S,setViewportConstrained:x,getViewport:N,scaleTo:z,scaleBy:P,setScaleExtent:R,setTranslateExtent:T,syncViewport:E,setClickDistance:W}}var gt;(function(e){e.Line="line",e.Handle="handle"})(gt||(gt={}));function bg({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let s=e-t,a=n-o,c=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(c[0]=c[0]*-1),a&&i&&(c[1]=c[1]*-1),c}function Xs(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function ct(e,t){return Math.max(0,t-e)}function lt(e,t){return Math.max(0,e-t)}function fo(e,t,n){return Math.max(0,t-e,e-n)}function Ys(e,t){return e?!t:t}function vg(e,t,n,o,r,i,s,a){let{affectsX:c,affectsY:l}=t,{isHorizontal:d,isVertical:f}=t,u=d&&f,{xSnapped:p,ySnapped:h}=n,{minWidth:y,maxWidth:w,minHeight:g,maxHeight:v}=o,{x:m,y:x,width:S,height:E,aspectRatio:N}=e,z=Math.floor(d?p-e.pointerX:0),P=Math.floor(f?h-e.pointerY:0),R=S+(c?-z:z),T=E+(l?-P:P),W=-i[0]*S,B=-i[1]*E,b=fo(R,y,w),C=fo(T,g,v);if(s){let D=0,A=0;c&&z<0?D=ct(m+z+W,s[0][0]):!c&&z>0&&(D=lt(m+R+W,s[1][0])),l&&P<0?A=ct(x+P+B,s[0][1]):!l&&P>0&&(A=lt(x+T+B,s[1][1])),b=Math.max(b,D),C=Math.max(C,A)}if(a){let D=0,A=0;c&&z>0?D=lt(m+z,a[0][0]):!c&&z<0&&(D=ct(m+R,a[1][0])),l&&P>0?A=lt(x+P,a[0][1]):!l&&P<0&&(A=ct(x+T,a[1][1])),b=Math.max(b,D),C=Math.max(C,A)}if(r){if(d){let D=fo(R/N,g,v)*N;if(b=Math.max(b,D),s){let A=0;!c&&!l||c&&!l&&u?A=lt(x+B+R/N,s[1][1])*N:A=ct(x+B+(c?z:-z)/N,s[0][1])*N,b=Math.max(b,A)}if(a){let A=0;!c&&!l||c&&!l&&u?A=ct(x+R/N,a[1][1])*N:A=lt(x+(c?z:-z)/N,a[0][1])*N,b=Math.max(b,A)}}if(f){let D=fo(T*N,y,w)/N;if(C=Math.max(C,D),s){let A=0;!c&&!l||l&&!c&&u?A=lt(m+T*N+W,s[1][0])/N:A=ct(m+(l?P:-P)*N+W,s[0][0])/N,C=Math.max(C,A)}if(a){let A=0;!c&&!l||l&&!c&&u?A=ct(m+T*N,a[1][0])/N:A=lt(m+(l?P:-P)*N,a[0][0])/N,C=Math.max(C,A)}}}P=P+(P<0?C:-C),z=z+(z<0?b:-b),r&&(u?R>T*N?P=(Ys(c,l)?-z:z)/N:z=(Ys(c,l)?-P:P)*N:d?(P=z/N,l=c):(z=P*N,c=l));let k=c?m+z:m,I=l?x+P:x;return{width:S+(c?-z:z),height:E+(l?-P:P),x:i[0]*z*(c?-1:1)+k,y:i[1]*P*(l?-1:1)+I}}var va={width:0,height:0,x:0,y:0},kg={...va,pointerX:0,pointerY:0,aspectRatio:1};function _g(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,s=e.measured.height??0,a=n[0]*i,c=n[1]*s;return[[o-a,r-c],[o+i-a,r+s-c]]}function ka({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=Ee(e),s={controlDirection:Xs("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:l,boundaries:d,keepAspectRatio:f,resizeDirection:u,onResizeStart:p,onResize:h,onResizeEnd:y,shouldResize:w}){let g={...va},v={...kg};s={boundaries:d,resizeDirection:u,keepAspectRatio:f,controlDirection:Xs(l)};let m,x=null,S=[],E,N,z,P=ir().on("start",R=>{let{nodeLookup:T,transform:W,snapGrid:B,snapToGrid:b,nodeOrigin:C,paneDomNode:k}=n();if(m=T.get(t),!m)return;x=k?.getBoundingClientRect()??null;let{xSnapped:I,ySnapped:D}=Sn(R.sourceEvent,{transform:W,snapGrid:B,snapToGrid:b,containerBounds:x});g={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...g,pointerX:I,pointerY:D,aspectRatio:g.width/g.height},E=void 0,N=Ot(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(E=T.get(m.parentId)),E&&m.extent==="parent"&&(N=[[0,0],[E.measured.width,E.measured.height]]),S=[],z=void 0;for(let[A,F]of T)if(F.parentId===t&&(S.push({id:A,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){let H=_g(F,m,F.origin??C);z?z=[[Math.min(H[0][0],z[0][0]),Math.min(H[0][1],z[0][1])],[Math.max(H[1][0],z[1][0]),Math.max(H[1][1],z[1][1])]]:z=H}p?.(R,{...g})}).on("drag",R=>{let{transform:T,snapGrid:W,snapToGrid:B,nodeOrigin:b}=n(),C=Sn(R.sourceEvent,{transform:T,snapGrid:W,snapToGrid:B,containerBounds:x}),k=[];if(!m)return;let{x:I,y:D,width:A,height:F}=g,H={},X=m.origin??b,{width:j,height:Y,x:Q,y:re}=vg(v,s.controlDirection,C,s.boundaries,s.keepAspectRatio,X,N,z),G=j!==A,$=Y!==F,V=Q!==I&&G,J=re!==D&&$;if(!V&&!J&&!G&&!$)return;let ne={prevValues:{...g},startX:v.x,startY:v.y,childNodes:S.map(te=>({...te,position:{...te.position}}))};if((V||J||X[0]===1||X[1]===1)&&(H.x=V?Q:g.x,H.y=J?re:g.y,g.x=H.x,g.y=H.y,S.length>0)){let te=Q-I,ae=re-D;for(let ye of S)ye.position={x:ye.position.x-te+X[0]*(j-A),y:ye.position.y-ae+X[1]*(Y-F)},k.push(ye)}if((G||$)&&(H.width=G&&(!s.resizeDirection||s.resizeDirection==="horizontal")?j:g.width,H.height=$&&(!s.resizeDirection||s.resizeDirection==="vertical")?Y:g.height,g.width=H.width,g.height=H.height),E&&m.expandParent){let te=X[0]*(H.width??0);H.x&&H.x<te&&(g.x=te,v.x=v.x-(H.x-te));let ae=X[1]*(H.height??0);H.y&&H.y<ae&&(g.y=ae,v.y=v.y-(H.y-ae))}let U=bg({width:g.width,prevWidth:A,height:g.height,prevHeight:F,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),K={...g,direction:U};if(w?.(R,K)===!1){g=ne.prevValues,v.x=ne.startX,v.y=ne.startY,S.forEach((te,ae)=>{te.position=ne.childNodes[ae].position});return}h?.(R,K),o(H,k)}).on("end",R=>{y?.(R,{...g}),r?.({...g})});i.call(P)}function c(){i.on(".drag",null)}return{update:a,destroy:c}}var La=Ve(require("react"),1),Ta=Ve(Pa(),1);var Aa={},za=e=>{let t,n=new Set,o=(d,f)=>{let u=typeof d=="function"?d(t):d;if(!Object.is(u,t)){let p=t;t=f??(typeof u!="object"||u===null)?u:Object.assign({},t,u),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Aa.env?Aa.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},Da=e=>e?za(e):za;var{useDebugValue:Fg}=La.default,{useSyncExternalStoreWithSelector:Rg}=Ta.default,Wg=e=>e;function ai(e,t=Wg,n){let o=Rg(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Fg(o),o}var Oa=(e,t)=>{let n=Da(e),o=(r,i=t)=>ai(n,r,i);return Object.assign(o,n),o},$a=(e,t)=>e?Oa(e,t):Oa;function fe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var qg=require("react-dom"),zo=(0,L.createContext)(null),Xg=zo.Provider,uc=Ae.error001("react");function se(e,t){let n=(0,L.useContext)(zo);if(n===null)throw new Error(uc);return ai(n,e,t)}function pe(){let e=(0,L.useContext)(zo);if(e===null)throw new Error(uc);return(0,L.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Ba={display:"none"},Yg={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},dc="react-flow__node-desc",fc="react-flow__edge-desc",Zg="react-flow__aria-live",Gg=e=>e.ariaLiveMessage,Ug=e=>e.ariaLabelConfig;function jg({rfId:e}){let t=se(Gg);return(0,O.jsx)("div",{id:`${Zg}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:Yg,children:t})}function Kg({rfId:e,disableKeyboardA11y:t}){let n=se(Ug);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{id:`${dc}-${e}`,style:Ba,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,O.jsx)("div",{id:`${fc}-${e}`,style:Ba,children:n["edge.a11yDescription.default"]}),!t&&(0,O.jsx)(jg,{rfId:e})]})}var Ao=(0,L.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let s=`${e}`.split("-");return(0,O.jsx)("div",{className:he(["react-flow__panel",n,...s]),style:o,ref:i,...r,children:t})});Ao.displayName="Panel";var Ha="https://reactflow.dev?utm_source=attribution";function Qg({proOptions:e,position:t="bottom-right"}){return(0,L.useEffect)(()=>{},[]),e?.hideAttribution?null:(0,O.jsx)(Ao,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Ha}`,children:(0,O.jsx)("a",{href:Ha,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var Jg=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Mo=e=>e.id;function eh(e,t){return fe(e.selectedNodes.map(Mo),t.selectedNodes.map(Mo))&&fe(e.selectedEdges.map(Mo),t.selectedEdges.map(Mo))}function th({onSelectionChange:e}){let t=pe(),{selectedNodes:n,selectedEdges:o}=se(Jg,eh);return(0,L.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var nh=e=>!!e.onSelectionChangeHandlers;function oh({onSelectionChange:e}){let t=se(nh);return e||t?(0,O.jsx)(th,{onSelectionChange:e}):null}var pc=[0,0],rh={x:0,y:0,zoom:1},ih=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Va=[...ih,"rfId"],sh=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Fa={translateExtent:Gt,nodeOrigin:pc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function ah(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:s,reset:a,setDefaultNodesAndEdges:c}=se(sh,fe),l=pe();(0,L.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{d.current=Fa,a()}),[]);let d=(0,L.useRef)(Fa);return(0,L.useEffect)(()=>{for(let f of Va){let u=e[f],p=d.current[f];u!==p&&(typeof e[f]>"u"||(f==="nodes"?t(u):f==="edges"?n(u):f==="minZoom"?o(u):f==="maxZoom"?r(u):f==="translateExtent"?i(u):f==="nodeExtent"?s(u):f==="ariaLabelConfig"?l.setState({ariaLabelConfig:ea(u)}):f==="fitView"?l.setState({fitViewQueued:u}):f==="fitViewOptions"?l.setState({fitViewOptions:u}):l.setState({[f]:u})))}d.current=e},Va.map(f=>e[f])),null}function Ra(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function ch(e){let[t,n]=(0,L.useState)(e==="system"?null:e);return(0,L.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Ra(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Ra()?.matches?"dark":"light"}var Wa=typeof document<"u"?document:null;function In(e=null,t={target:Wa,actInsideInputWithModifier:!0}){let[n,o]=(0,L.useState)(!1),r=(0,L.useRef)(!1),i=(0,L.useRef)(new Set([])),[s,a]=(0,L.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=l.reduce((f,u)=>f.concat(...u),[]);return[l,d]}return[[],[]]},[e]);return(0,L.useEffect)(()=>{let c=t?.target??Wa,l=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Qr(p))return!1;let y=Xa(p.code,a);if(i.current.add(p[y]),qa(s,i.current,!1)){let w=p.composedPath?.()?.[0]||p.target,g=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(r.current||!g)&&p.preventDefault(),o(!0)}},f=p=>{let h=Xa(p.code,a);qa(s,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},u=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",d),c?.addEventListener("keyup",f),window.addEventListener("blur",u),window.addEventListener("contextmenu",u),()=>{c?.removeEventListener("keydown",d),c?.removeEventListener("keyup",f),window.removeEventListener("blur",u),window.removeEventListener("contextmenu",u)}}},[e,o]),n}function qa(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Xa(e,t){return t.includes(e)?"code":"key"}var lh=()=>{let e=pe();return(0,L.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:s}=e.getState();return s?(await s.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:s,panZoom:a}=e.getState(),c=Cn(t,o,r,i,s,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:s}=e.getState();if(!s)return t;let{x:a,y:c}=s.getBoundingClientRect(),l={x:t.x-a,y:t.y-c},d=n.snapGrid??r,f=n.snapToGrid??i;return Qt(l,o,f,d)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),s=Dt(t,n);return{x:s.x+r,y:s.y+i}}}),[])};function gc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let s=o.get(i.id);s?s.push(i):o.set(i.id,[i])}for(let i of t){let s=o.get(i.id);if(!s){n.push(i);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){n.push({...s[0].item});continue}let a={...i};for(let c of s)uh(c,a);n.push(a)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function uh(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function di(e,t){return gc(e,t)}function dh(e,t){return gc(e,t)}function Lt(e,t){return{id:e,type:"select",selected:t}}function tn(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let s=t.has(r);!(i.selected===void 0&&!s)&&i.selected!==s&&(n&&(i.selected=s),o.push(Lt(i.id,s)))}return o}function Ya({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let s=t.get(i.id),a=s?.internals?.userNode??s;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:"replace"}),a===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Za(e){return{id:e.id,type:"remove"}}var fh=Yr("React Flow","https://reactflow.dev/");function ph(e,t,n={}){return oa(e,t,{...n,onError:n.onError??fh})}var Ga=e=>Zs(e),gh=e=>Vr(e);function hc(e){return(0,L.forwardRef)(e)}var mc=typeof window<"u"?L.useLayoutEffect:L.useEffect;function Ua(e){let[t,n]=(0,L.useState)(BigInt(0)),[o]=(0,L.useState)(()=>hh(()=>n(r=>r+BigInt(1))));return mc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function hh(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var yc=(0,L.createContext)(null);function mh({children:e}){let t=pe(),n=(0,L.useCallback)(a=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:d,onNodesChange:f,nodeLookup:u,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),y=c;for(let g of a)y=typeof g=="function"?g(y):g;let w=Ya({items:y,lookup:u});for(let g of h.values())w=g(w);d&&l(y),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:g,nodes:v,setNodes:m}=t.getState();g&&m(v)})},[]),o=Ua(n),r=(0,L.useCallback)(a=>{let{edges:c=[],setEdges:l,hasDefaultEdges:d,onEdgesChange:f,edgeLookup:u}=t.getState(),p=c;for(let h of a)p=typeof h=="function"?h(p):h;d?l(p):f&&f(Ya({items:p,lookup:u}))},[]),i=Ua(r),s=(0,L.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,O.jsx)(yc.Provider,{value:s,children:e})}function yh(){let e=(0,L.useContext)(yc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var wh=e=>!!e.panZoom;function Pn(){let e=lh(),t=pe(),n=yh(),o=se(wh),r=(0,L.useMemo)(()=>{let i=f=>t.getState().nodeLookup.get(f),s=f=>{n.nodeQueue.push(f)},a=f=>{n.edgeQueue.push(f)},c=f=>{let{nodeLookup:u,nodeOrigin:p}=t.getState(),h=Ga(f)?f:u.get(f.id),y=h.parentId?Gr(h.position,h.measured,h.parentId,u,p):h.position,w={...h,position:y,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return jt(w)},l=(f,u,p={replace:!1})=>{s(h=>h.map(y=>{if(y.id===f){let w=typeof u=="function"?u(y):u;return p.replace&&Ga(w)?w:{...y,...w}}return y}))},d=(f,u,p={replace:!1})=>{a(h=>h.map(y=>{if(y.id===f){let w=typeof u=="function"?u(y):u;return p.replace&&gh(w)?w:{...y,...w}}return y}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>i(f)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(u=>({...u}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:s,setEdges:a,addNodes:f=>{let u=Array.isArray(f)?f:[f];n.nodeQueue.push(p=>[...p,...u])},addEdges:f=>{let u=Array.isArray(f)?f:[f];n.edgeQueue.push(p=>[...p,...u])},toObject:()=>{let{nodes:f=[],edges:u=[],transform:p}=t.getState(),[h,y,w]=p;return{nodes:f.map(g=>({...g})),edges:u.map(g=>({...g})),viewport:{x:h,y,zoom:w}}},deleteElements:async({nodes:f=[],edges:u=[]})=>{let{nodes:p,edges:h,onNodesDelete:y,onEdgesDelete:w,triggerNodeChanges:g,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:x}=t.getState(),{nodes:S,edges:E}=await js({nodesToRemove:f,edgesToRemove:u,nodes:p,edges:h,onBeforeDelete:x}),N=E.length>0,z=S.length>0;if(N){let P=E.map(Za);w?.(E),v(P)}if(z){let P=S.map(Za);y?.(S),g(P)}return(z||N)&&m?.({nodes:S,edges:E}),{deletedNodes:S,deletedEdges:E}},getIntersectingNodes:(f,u=!0,p)=>{let h=Xr(f),y=h?f:c(f),w=p!==void 0;return y?(p||t.getState().nodes).filter(g=>{let v=t.getState().nodeLookup.get(g.id);if(v&&!h&&(g.id===f.id||!v.internals.positionAbsolute))return!1;let m=jt(w?g:v),x=Nn(m,y);return u&&x>0||x>=m.width*m.height||x>=y.width*y.height}):[]},isNodeIntersecting:(f,u,p=!0)=>{let y=Xr(f)?f:c(f);if(!y)return!1;let w=Nn(y,u);return p&&w>0||w>=u.width*u.height||w>=y.width*y.height},updateNode:l,updateNodeData:(f,u,p={replace:!1})=>{l(f,h=>{let y=typeof u=="function"?u(h):u;return p.replace?{...h,data:y}:{...h,data:{...h.data,...y}}},p)},updateEdge:d,updateEdgeData:(f,u,p={replace:!1})=>{d(f,h=>{let y=typeof u=="function"?u(h):u;return p.replace?{...h,data:y}:{...h,data:{...h.data,...y}}},p)},getNodesBounds:f=>{let{nodeLookup:u,nodeOrigin:p}=t.getState();return Rr(f,{nodeLookup:u,nodeOrigin:p})},getHandleConnections:({type:f,id:u,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${u?`-${u}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:u,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?u?`-${f}-${u}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let u=t.getState().fitViewResolver??Js();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:u}),n.nodeQueue.push(p=>[...p]),u.promise}}},[]);return(0,L.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var ja=e=>e.selected,xh=typeof window<"u"?window:void 0;function bh({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=pe(),{deleteElements:o}=Pn(),r=In(e,{actInsideInputWithModifier:!1}),i=In(t,{target:xh});(0,L.useEffect)(()=>{if(r){let{edges:s,nodes:a}=n.getState();o({nodes:a.filter(ja),edges:s.filter(ja)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,L.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function vh(e){let t=pe();(0,L.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=wo(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ae.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var Do={position:"absolute",width:"100%",height:"100%",top:0,left:0},kh=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function _h({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panActivationKeyPressed:r,panOnScrollSpeed:i=.5,panOnScrollMode:s=tt.Free,zoomOnDoubleClick:a=!0,panOnDrag:c=!0,defaultViewport:l,translateExtent:d,minZoom:f,maxZoom:u,zoomActivationKeyCode:p,preventScrolling:h=!0,children:y,noWheelClassName:w,noPanClassName:g,onViewportChange:v,isControlledViewport:m,paneClickDistance:x,selectionOnDrag:S}){let E=pe(),N=(0,L.useRef)(null),{userSelectionActive:z,lib:P,connectionInProgress:R}=se(kh,fe),T=In(p),W=(0,L.useRef)();vh(N);let B=(0,L.useCallback)(b=>{v?.({x:b[0],y:b[1],zoom:b[2]}),m||E.setState({transform:b})},[v,m]);return(0,L.useEffect)(()=>{if(N.current){W.current=ba({domNode:N.current,minZoom:f,maxZoom:u,translateExtent:d,viewport:l,onDraggingChange:I=>E.setState(D=>D.paneDragging===I?D:{paneDragging:I}),onPanZoomStart:(I,D)=>{let{onViewportChangeStart:A,onMoveStart:F}=E.getState();F?.(I,D),A?.(D)},onPanZoom:(I,D)=>{let{onViewportChange:A,onMove:F}=E.getState();F?.(I,D),A?.(D)},onPanZoomEnd:(I,D)=>{let{onViewportChangeEnd:A,onMoveEnd:F}=E.getState();F?.(I,D),A?.(D)}});let{x:b,y:C,zoom:k}=W.current.getViewport();return E.setState({panZoom:W.current,transform:[b,C,k],domNode:N.current.closest(".react-flow")}),()=>{W.current?.destroy()}}},[]),(0,L.useEffect)(()=>{W.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panActivationKeyPressed:r,panOnScrollSpeed:i,panOnScrollMode:s,zoomOnDoubleClick:a,panOnDrag:c,zoomActivationKeyPressed:T,preventScrolling:h,noPanClassName:g,userSelectionActive:z,noWheelClassName:w,lib:P,onTransformChange:B,connectionInProgress:R,selectionOnDrag:S,paneClickDistance:x})},[e,t,n,o,r,i,s,a,c,T,h,g,z,w,P,B,R,S,x]),(0,O.jsx)("div",{className:"react-flow__renderer",ref:N,style:Do,children:y})}var Sh=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Eh(){let{userSelectionActive:e,userSelectionRect:t}=se(Sh,fe);return e&&t?(0,O.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ci=(e,t)=>n=>{n.target===t.current&&e?.(n)},Nh=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Ch({isSelecting:e,selectionKeyPressed:t,selectionMode:n=zt.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:s,onSelectionStart:a,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:d,onPaneScroll:f,onPaneMouseEnter:u,onPaneMouseMove:p,onPaneMouseLeave:h,children:y}){let w=(0,L.useRef)(0),g=pe(),{userSelectionActive:v,elementsSelectable:m,dragging:x,panBy:S,autoPanSpeed:E}=se(Nh,fe),N=m&&(e||v),z=(0,L.useRef)(null),P=(0,L.useRef)(),R=(0,L.useRef)(new Set),T=(0,L.useRef)(new Set),W=(0,L.useRef)(!1),B=(0,L.useRef)(!1),b=(0,L.useRef)({x:0,y:0}),C=(0,L.useRef)(!1),k=$=>{if(B.current||W.current||g.getState().connection.inProgress){B.current=!1,W.current=!1;return}l?.($),g.getState().resetSelectedElements(),g.setState({nodesSelectionActive:!1})},I=$=>{if(Array.isArray(o)&&o?.includes(2)){$.preventDefault();return}d?.($)},D=f?$=>f($):void 0,A=$=>{B.current&&($.stopPropagation(),B.current=!1)},F=$=>{if($.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:V,transform:J}=g.getState();if(P.current=V?.getBoundingClientRect(),!P.current)return;let ne=$.target===z.current;if(!ne&&!!$.target.closest(".nokey")||!e||!(s&&ne||t)||$.button!==0||!$.isPrimary)return;$.target?.setPointerCapture?.($.pointerId),B.current=!1;let{x:oe,y:te}=Oe($.nativeEvent,P.current),ae=Qt({x:oe,y:te},J);g.setState({userSelectionRect:{width:0,height:0,startX:ae.x,startY:ae.y,x:oe,y:te}}),ne||($.stopPropagation(),$.preventDefault())};function H($,V){let{userSelectionRect:J}=g.getState();if(!J)return;let{transform:ne,nodeLookup:U,edgeLookup:K,connectionLookup:oe,triggerNodeChanges:te,triggerEdgeChanges:ae,defaultEdgeOptions:ye}=g.getState(),Me={x:J.startX,y:J.startY},{x:_e,y:we}=Dt(Me,ne),de={startX:Me.x,startY:Me.y,x:$<_e?$:_e,y:V<we?V:we,width:Math.abs($-_e),height:Math.abs(V-we)},He=R.current,Ge=T.current;R.current=new Set(go(U,de,ne,n===zt.Partial,!0).map(ve=>ve.id)),T.current=new Set;let Ue=ye?.selectable??!0;for(let ve of R.current){let le=oe.get(ve);if(le)for(let{edgeId:xe}of le.values()){let Se=K.get(xe);Se&&(Se.selectable??Ue)&&T.current.add(xe)}}if(!Ur(He,R.current)){let ve=tn(U,R.current,!0);te(ve)}if(!Ur(Ge,T.current)){let ve=tn(K,T.current);ae(ve)}g.setState({userSelectionRect:de,userSelectionActive:!0,nodesSelectionActive:!1})}function X(){if(!r||!P.current)return;let[$,V]=ho(b.current,P.current,E);S({x:$,y:V}).then(J=>{if(!B.current||!J){w.current=requestAnimationFrame(X);return}let{x:ne,y:U}=b.current;H(ne,U),w.current=requestAnimationFrame(X)})}let j=()=>{cancelAnimationFrame(w.current),w.current=0,C.current=!1};(0,L.useEffect)(()=>()=>j(),[]);let Y=$=>{let{userSelectionRect:V,transform:J,resetSelectedElements:ne}=g.getState();if(!P.current||!V)return;let{x:U,y:K}=Oe($.nativeEvent,P.current);b.current={x:U,y:K};let oe=Dt({x:V.startX,y:V.startY},J);if(!B.current){let te=t?0:i;if(Math.hypot(U-oe.x,K-oe.y)<=te)return;ne(),a?.($)}B.current=!0,C.current||(X(),C.current=!0),H(U,K)},Q=$=>{if(!N){$.target===z.current&&g.getState().connection.inProgress&&(W.current=!0);return}$.button===0&&($.target?.releasePointerCapture?.($.pointerId),!v&&$.target===z.current&&g.getState().userSelectionRect&&k?.($),g.setState({userSelectionActive:!1,userSelectionRect:null}),B.current&&(c?.($),g.setState({nodesSelectionActive:R.current.size>0})),j())},re=$=>{$.target?.releasePointerCapture?.($.pointerId),j()},G=o===!0||Array.isArray(o)&&o.includes(0);return(0,O.jsxs)("div",{className:he(["react-flow__pane",{draggable:G,dragging:x,selection:e}]),onClick:N?void 0:ci(k,z),onContextMenu:ci(I,z),onWheel:ci(D,z),onPointerEnter:N?void 0:u,onPointerMove:N?Y:p,onPointerUp:Q,onPointerCancel:N?re:void 0,onPointerDownCapture:N?F:void 0,onClickCapture:N?A:void 0,onPointerLeave:h,ref:z,style:Do,children:[y,(0,O.jsx)(Eh,{})]})}function ui({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:s,nodeLookup:a,onError:c}=t.getState(),l=a.get(e);if(!l){c?.("012",Ae.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&s)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function wc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:s}){let a=pe(),[c,l]=(0,L.useState)(!1),d=(0,L.useRef)();return(0,L.useEffect)(()=>{if(!t)return d.current=fa({getStoreItems:()=>a.getState(),onNodeMouseDown:f=>{ui({id:f,store:a,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,a,e]),(0,L.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:s})},[n,o,t,i,e,r,s]),c}var Mh=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function xc(){let e=pe();return(0,L.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:s,onError:a,updateNodePositions:c,nodeLookup:l,nodeOrigin:d}=e.getState(),f=new Map,u=Mh(s),p=r?i[0]:5,h=r?i[1]:5,y=n.direction.x*p*n.factor,w=n.direction.y*h*n.factor;for(let[,g]of l){if(!u(g))continue;let v={x:g.internals.positionAbsolute.x+y,y:g.internals.positionAbsolute.y+w};r&&(v=Kt(v,i));let{position:m,positionAbsolute:x}=Wr({nodeId:g.id,nextPosition:v,nodeLookup:l,nodeExtent:o,nodeOrigin:d,onError:a});g.position=m,g.internals.positionAbsolute=x,f.set(g.id,g)}c(f)},[])}var fi=(0,L.createContext)(null),Ih=fi.Provider;fi.Consumer;var bc=()=>(0,L.useContext)(fi),Ph=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),vc=(0,L.createContext)(null);function zh({children:e}){let t=se(Ph,fe);return(0,O.jsx)(vc.Provider,{value:t,children:e})}function Ah(){let e=(0,L.useContext)(vc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var Dh={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Oh=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:s}=o,{fromHandle:a,toHandle:c,isValid:l}=s;if(!a&&!r)return Dh;let d=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:d,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===dt.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:d&&l}};function Lh({type:e="source",position:t=Z.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:s,onConnect:a,children:c,className:l,onMouseDown:d,onTouchStart:f,...u},p){let h=s||null,y=e==="target",w=pe(),g=bc(),{connectOnClick:v,noPanClassName:m,rfId:x}=Ah(),{connectingFrom:S,connectingTo:E,clickConnecting:N,isPossibleEndHandle:z,connectionInProcess:P,clickConnectionInProcess:R,valid:T}=se(Oh(g,h,e),fe);g||w.getState().onError?.("010",Ae.error010());let W=C=>{let{defaultEdgeOptions:k,onConnect:I,hasDefaultEdges:D}=w.getState(),A={...k,...C};if(D){let{edges:F,setEdges:H,onError:X}=w.getState();H(ph(A,F,{onError:X}))}I?.(A),a?.(A)},B=C=>{if(!g)return;let k=Jr(C.nativeEvent);if(r&&(k&&C.button===0||!k)){let I=w.getState();Eo.onPointerDown(C.nativeEvent,{handleDomNode:C.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:y,handleId:h,nodeId:g,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...D)=>w.getState().onConnectEnd?.(...D),updateConnection:I.updateConnection,onConnect:W,isValidConnection:n||((...D)=>w.getState().isValidConnection?.(...D)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}k?d?.(C):f?.(C)},b=C=>{let{onClickConnectStart:k,onClickConnectEnd:I,connectionClickStartHandle:D,connectionMode:A,isValidConnection:F,lib:H,rfId:X,nodeLookup:j,connection:Y}=w.getState();if(!g||!D&&!r)return;if(!D){k?.(C.nativeEvent,{nodeId:g,handleId:h,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:g,type:e,id:h}});return}let Q=Kr(C.target),re=n||F,{connection:G,isValid:$}=Eo.isValid(C.nativeEvent,{handle:{nodeId:g,id:h,type:e},connectionMode:A,fromNodeId:D.nodeId,fromHandleId:D.id||null,fromType:D.type,isValidConnection:re,flowId:X,doc:Q,lib:H,nodeLookup:j});$&&G&&W(G);let V=structuredClone(Y);delete V.inProgress,V.toPosition=V.toHandle?V.toHandle.position:null,I?.(C,V),w.setState({connectionClickStartHandle:null})};return(0,O.jsx)("div",{"data-handleid":h,"data-nodeid":g,"data-handlepos":t,"data-id":`${x}-${g}-${h}-${e}`,className:he(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,l,{source:!y,target:y,connectable:o,connectablestart:r,connectableend:i,clickconnecting:N,connectingfrom:S,connectingto:E,valid:T,connectionindicator:o&&(!P||z)&&(P||R?i:r)}]),onMouseDown:B,onTouchStart:B,onClick:v?b:void 0,ref:p,...u,children:c})}var nt=(0,L.memo)(hc(Lh));function Th({data:e,isConnectable:t,sourcePosition:n=Z.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[e?.label,(0,O.jsx)(nt,{type:"source",position:n,isConnectable:t})]})}function $h({data:e,isConnectable:t,targetPosition:n=Z.Top,sourcePosition:o=Z.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(nt,{type:"target",position:n,isConnectable:t}),e?.label,(0,O.jsx)(nt,{type:"source",position:o,isConnectable:t})]})}function Bh(){return null}function Hh({data:e,isConnectable:t,targetPosition:n=Z.Top}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(nt,{type:"target",position:n,isConnectable:t}),e?.label]})}var Po={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Ka={input:Th,default:$h,output:Hh,group:Bh};function Vh(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Fh=e=>{let{width:t,height:n,x:o,y:r}=Ut(e.nodeLookup,{filter:i=>!!i.selected});return{width:De(t)?t:null,height:De(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Rh({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=pe(),{width:r,height:i,transformString:s,userSelectionActive:a}=se(Fh,fe),c=xc(),l=(0,L.useRef)(null);(0,L.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let d=!a&&r!==null&&i!==null;if(wc({nodeRef:l,disabled:!d}),!d)return null;let f=e?p=>{let h=o.getState().nodes.filter(y=>y.selected);e(p,h)}:void 0,u=p=>{Object.prototype.hasOwnProperty.call(Po,p.key)&&(p.preventDefault(),c({direction:Po[p.key],factor:p.shiftKey?4:1}))};return(0,O.jsx)("div",{className:he(["react-flow__nodesselection","react-flow__container",t]),style:{transform:s},children:(0,O.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:n?void 0:-1,onKeyDown:n?void 0:u,style:{width:r,height:i}})})}var Qa=typeof window<"u"?window:void 0,Wh=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function kc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:d,selectionMode:f,onSelectionStart:u,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:y,zoomActivationKeyCode:w,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:x,panOnScrollSpeed:S,panOnScrollMode:E,zoomOnDoubleClick:N,panOnDrag:z,autoPanOnSelection:P,defaultViewport:R,translateExtent:T,minZoom:W,maxZoom:B,preventScrolling:b,onSelectionContextMenu:C,noWheelClassName:k,noPanClassName:I,disableKeyboardA11y:D,onViewportChange:A,isControlledViewport:F}){let{nodesSelectionActive:H,userSelectionActive:X}=se(Wh,fe),j=In(l,{target:Qa}),Y=In(y,{target:Qa}),Q=Y||z,re=Y||x,G=d&&Q!==!0,$=j||X||G;return bh({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,O.jsx)(_h,{onPaneContextMenu:i,elementsSelectable:g,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:re,panActivationKeyPressed:Y,panOnScrollSpeed:S,panOnScrollMode:E,zoomOnDoubleClick:N,panOnDrag:!j&&Q,defaultViewport:R,translateExtent:T,minZoom:W,maxZoom:B,zoomActivationKeyCode:w,preventScrolling:b,noWheelClassName:k,noPanClassName:I,onViewportChange:A,isControlledViewport:F,paneClickDistance:a,selectionOnDrag:G,children:(0,O.jsxs)(Ch,{onSelectionStart:u,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,panOnDrag:Q,autoPanOnSelection:P,isSelecting:!!$,selectionMode:f,selectionKeyPressed:j,paneClickDistance:a,selectionOnDrag:G,children:[e,H&&(0,O.jsx)(Rh,{onSelectionContextMenu:C,noPanClassName:I,disableKeyboardA11y:D})]})})}kc.displayName="FlowRenderer";var qh=(0,L.memo)(kc),Xh=e=>t=>e?go(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Yh(e){return se((0,L.useCallback)(Xh(e),[e]),fe)}var Zh=e=>e.updateNodeInternals;function Gh(){let e=se(Zh),[t]=(0,L.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,L.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Uh({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=pe(),i=(0,L.useRef)(null),s=(0,L.useRef)(null),a=(0,L.useRef)(e.sourcePosition),c=(0,L.useRef)(e.targetPosition),l=(0,L.useRef)(t),d=n&&!!e.internals.handleBounds;return(0,L.useEffect)(()=>{i.current&&!e.hidden&&(!d||s.current!==i.current)&&(s.current&&o?.unobserve(s.current),o?.observe(i.current),s.current=i.current)},[d,e.hidden]),(0,L.useEffect)(()=>()=>{s.current&&(o?.unobserve(s.current),s.current=null)},[]),(0,L.useEffect)(()=>{if(i.current){let f=l.current!==t,u=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(f||u||p)&&(l.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function jh({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:s,nodesDraggable:a,elementsSelectable:c,nodesConnectable:l,nodesFocusable:d,resizeObserver:f,noDragClassName:u,noPanClassName:p,disableKeyboardA11y:h,rfId:y,nodeTypes:w,nodeClickDistance:g,onError:v}){let{node:m,internals:x,isParent:S}=se($=>{let V=$.nodeLookup.get(e),J=$.parentLookup.has(e);return{node:V,internals:V.internals,isParent:J}},fe),E=m.type||"default",N=w?.[E]||Ka[E];N===void 0&&(v?.("003",Ae.error003(E)),E="default",N=w?.default||Ka.default);let z=!!(m.draggable||a&&typeof m.draggable>"u"),P=!!(m.selectable||c&&typeof m.selectable>"u"),R=!!(m.connectable||l&&typeof m.connectable>"u"),T=!!(m.focusable||d&&typeof m.focusable>"u"),W=pe(),B=Zr(m),b=Uh({node:m,nodeType:E,hasDimensions:B,resizeObserver:f}),C=wc({nodeRef:b,disabled:m.hidden||!z,noDragClassName:u,handleSelector:m.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:g}),k=xc();if(m.hidden)return null;let I=Le(m),D=Vh(m),A=P||z||t||n||o||r,F=n?$=>n($,{...x.userNode}):void 0,H=o?$=>o($,{...x.userNode}):void 0,X=r?$=>r($,{...x.userNode}):void 0,j=i?$=>i($,{...x.userNode}):void 0,Y=s?$=>s($,{...x.userNode}):void 0,Q=$=>{let{selectNodesOnDrag:V,nodeDragThreshold:J}=W.getState();P&&(!V||!z||J>0)&&ui({id:e,store:W,nodeRef:b}),t&&t($,{...x.userNode})},re=$=>{if(!(Qr($.nativeEvent)||h)){if($r.includes($.key)&&P){let V=$.key==="Escape";ui({id:e,store:W,unselect:V,nodeRef:b})}else if(z&&m.selected&&Object.prototype.hasOwnProperty.call(Po,$.key)){$.preventDefault();let{ariaLabelConfig:V}=W.getState();W.setState({ariaLiveMessage:V["node.a11yDescription.ariaLiveMessage"]({direction:$.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),k({direction:Po[$.key],factor:$.shiftKey?4:1})}}},G=()=>{if(h||!b.current?.matches(":focus-visible"))return;let{transform:$,width:V,height:J,autoPanOnNodeFocus:ne,setCenter:U}=W.getState();if(!ne)return;go(new Map([[e,m]]),{x:0,y:0,width:V,height:J},$,!0).length>0||U(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:$[2]})};return(0,O.jsx)("div",{className:he(["react-flow__node",`react-flow__node-${E}`,{[p]:z},m.className,{selected:m.selected,selectable:P,parent:S,draggable:z,dragging:C}]),ref:b,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:B?"visible":"hidden",...m.style,...D},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:F,onMouseMove:H,onMouseLeave:X,onContextMenu:j,onClick:Q,onDoubleClick:Y,onKeyDown:T?re:void 0,tabIndex:T?0:void 0,onFocus:T?G:void 0,role:m.ariaRole??(T?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${dc}-${y}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,O.jsx)(Ih,{value:e,children:(0,O.jsx)(N,{id:e,data:m.data,type:E,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:m.selected??!1,selectable:P,draggable:z,deletable:m.deletable??!0,isConnectable:R,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:C,dragHandle:m.dragHandle,zIndex:x.z,parentId:m.parentId,...I})})})}var Kh=(0,L.memo)(jh),Qh=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function _c(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=se(Qh,fe),i=Yh(e.onlyRenderVisibleElements),s=Gh();return(0,O.jsx)("div",{className:"react-flow__nodes",style:Do,children:i.map(a=>(0,O.jsx)(Kh,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:s,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}_c.displayName="NodeRenderer";var Jh=(0,L.memo)(_c);function em(e){return se((0,L.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),s=n.nodeLookup.get(r.target);i&&s&&na({sourceNode:i,targetNode:s,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),fe)}var tm=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,O.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},nm=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,O.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Ja={[ft.Arrow]:tm,[ft.ArrowClosed]:nm};function om(e){let t=pe();return(0,L.useMemo)(()=>Object.prototype.hasOwnProperty.call(Ja,e)?Ja[e]:(t.getState().onError?.("009",Ae.error009(e)),null),[e])}var rm=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:s,orient:a="auto-start-reverse"})=>{let c=om(t);return c?(0,O.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:a,refX:"0",refY:"0",children:(0,O.jsx)(c,{color:n,strokeWidth:s})}):null},Sc=({defaultColor:e,rfId:t})=>{let n=se(i=>i.edges),o=se(i=>i.defaultEdgeOptions),r=(0,L.useMemo)(()=>ia(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,O.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,O.jsx)("defs",{children:r.map(i=>(0,O.jsx)(rm,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Sc.displayName="MarkerDefinitions";var im=(0,L.memo)(Sc);function Ec({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:s=[2,4],labelBgBorderRadius:a=2,children:c,className:l,...d}){let[f,u]=(0,L.useState)({x:1,y:0,width:0,height:0}),p=he(["react-flow__edge-textwrapper",l]),h=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(h.current){let y=h.current.getBBox();u({x:y.x,y:y.y,width:y.width,height:y.height})}},[n]),n?(0,O.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...d,children:[r&&(0,O.jsx)("rect",{width:f.width+2*s[0],x:-s[0],y:-s[1],height:f.height+2*s[1],className:"react-flow__edge-textbg",style:i,rx:a,ry:a}),(0,O.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}Ec.displayName="EdgeText";var sm=(0,L.memo)(Ec);function nn({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:l=20,...d}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("path",{...d,d:e,fill:"none",className:he(["react-flow__edge-path",d.className])}),l?(0,O.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&De(t)&&De(n)?(0,O.jsx)(sm,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function ec({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===Z.Left||e===Z.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Nc({sourceX:e,sourceY:t,sourcePosition:n=Z.Bottom,targetX:o,targetY:r,targetPosition:i=Z.Top}){let[s,a]=ec({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=ec({pos:i,x1:o,y1:r,x2:e,y2:t}),[d,f,u,p]=xo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:a,targetControlX:c,targetControlY:l});return[`M${e},${t} C${s},${a} ${c},${l} ${o},${r}`,d,f,u,p]}function Cc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s,targetPosition:a,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:f,labelBgPadding:u,labelBgBorderRadius:p,style:h,markerEnd:y,markerStart:w,interactionWidth:g})=>{let[v,m,x]=Nc({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a}),S=e.isInternal?void 0:t;return(0,O.jsx)(nn,{id:S,path:v,labelX:m,labelY:x,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:f,labelBgPadding:u,labelBgBorderRadius:p,style:h,markerEnd:y,markerStart:w,interactionWidth:g})})}var am=Cc({isInternal:!1}),Mc=Cc({isInternal:!0});am.displayName="SimpleBezierEdge";Mc.displayName="SimpleBezierEdgeInternal";function Ic(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:f,style:u,sourcePosition:p=Z.Bottom,targetPosition:h=Z.Top,markerEnd:y,markerStart:w,pathOptions:g,interactionWidth:v})=>{let[m,x,S]=Mn({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:g?.borderRadius,offset:g?.offset,stepPosition:g?.stepPosition}),E=e.isInternal?void 0:t;return(0,O.jsx)(nn,{id:E,path:m,labelX:x,labelY:S,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:f,style:u,markerEnd:y,markerStart:w,interactionWidth:v})})}var Pc=Ic({isInternal:!1}),zc=Ic({isInternal:!0});Pc.displayName="SmoothStepEdge";zc.displayName="SmoothStepEdgeInternal";function Ac(e){return(0,L.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,O.jsx)(Pc,{...n,id:o,pathOptions:(0,L.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var cm=Ac({isInternal:!1}),Dc=Ac({isInternal:!0});cm.displayName="StepEdge";Dc.displayName="StepEdgeInternal";function Oc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:f,style:u,markerEnd:p,markerStart:h,interactionWidth:y})=>{let[w,g,v]=vo({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,O.jsx)(nn,{id:m,path:w,labelX:g,labelY:v,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:f,style:u,markerEnd:p,markerStart:h,interactionWidth:y})})}var lm=Oc({isInternal:!1}),Lc=Oc({isInternal:!0});lm.displayName="StraightEdge";Lc.displayName="StraightEdgeInternal";function Tc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s=Z.Bottom,targetPosition:a=Z.Top,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:f,labelBgPadding:u,labelBgBorderRadius:p,style:h,markerEnd:y,markerStart:w,pathOptions:g,interactionWidth:v})=>{let[m,x,S]=bo({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a,curvature:g?.curvature}),E=e.isInternal?void 0:t;return(0,O.jsx)(nn,{id:E,path:m,labelX:x,labelY:S,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:f,labelBgPadding:u,labelBgBorderRadius:p,style:h,markerEnd:y,markerStart:w,interactionWidth:v})})}var um=Tc({isInternal:!1}),$c=Tc({isInternal:!0});um.displayName="BezierEdge";$c.displayName="BezierEdgeInternal";var tc={default:$c,straight:Lc,step:Dc,smoothstep:zc,simplebezier:Mc},nc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},dm=(e,t,n)=>n===Z.Left?e-t:n===Z.Right?e+t:e,fm=(e,t,n)=>n===Z.Top?e-t:n===Z.Bottom?e+t:e,oc="react-flow__edgeupdater";function rc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:s,type:a}){return(0,O.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:s,className:he([oc,`${oc}-${a}`]),cx:dm(t,o,e),cy:fm(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function pm({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:s,sourcePosition:a,targetPosition:c,onReconnect:l,onReconnectStart:d,onReconnectEnd:f,setReconnecting:u,setUpdateHover:p}){let h=pe(),y=(x,S)=>{if(x.button!==0)return;let{autoPanOnConnect:E,domNode:N,connectionMode:z,connectionRadius:P,lib:R,onConnectStart:T,cancelConnection:W,nodeLookup:B,rfId:b,panBy:C,updateConnection:k}=h.getState(),I=S.type==="target",D=(H,X)=>{u(!1),f?.(H,n,S.type,X)},A=H=>l?.(n,H),F=(H,X)=>{u(!0),d?.(x,n,S.type),T?.(H,X)};Eo.onPointerDown(x.nativeEvent,{autoPanOnConnect:E,connectionMode:z,connectionRadius:P,domNode:N,handleId:S.id,nodeId:S.nodeId,nodeLookup:B,isTarget:I,edgeUpdaterType:S.type,lib:R,flowId:b,cancelConnection:W,panBy:C,isValidConnection:(...H)=>h.getState().isValidConnection?.(...H)??!0,onConnect:A,onConnectStart:F,onConnectEnd:(...H)=>h.getState().onConnectEnd?.(...H),onReconnectEnd:D,updateConnection:k,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},w=x=>y(x,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),g=x=>y(x,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,O.jsxs)(O.Fragment,{children:[(e===!0||e==="source")&&(0,O.jsx)(rc,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:w,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,O.jsx)(rc,{position:c,centerX:i,centerY:s,radius:t,onMouseDown:g,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function gm({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,reconnectRadius:d,onReconnect:f,onReconnectStart:u,onReconnectEnd:p,rfId:h,edgeTypes:y,noPanClassName:w,onError:g,disableKeyboardA11y:v}){let m=se(U=>U.edgeLookup.get(e)),x=se(U=>U.defaultEdgeOptions);m=x?{...x,...m}:m;let S=m.type||"default",E=y?.[S]||tc[S];E===void 0&&(g?.("011",Ae.error011(S)),S="default",E=y?.default||tc.default);let N=!!(m.focusable||t&&typeof m.focusable>"u"),z=typeof f<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),P=!!(m.selectable||o&&typeof m.selectable>"u"),R=(0,L.useRef)(null),[T,W]=(0,L.useState)(!1),[B,b]=(0,L.useState)(!1),C=pe(),{zIndex:k=m.zIndex,sourceX:I,sourceY:D,targetX:A,targetY:F,sourcePosition:H,targetPosition:X}=se((0,L.useCallback)(U=>{let K=U.nodeLookup.get(m.source),oe=U.nodeLookup.get(m.target);if(!K||!oe)return nc;let te=ra({id:e,sourceNode:K,targetNode:oe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:U.connectionMode,onError:g}),ae=ta({selected:m.selected,zIndex:m.zIndex,sourceNode:K,targetNode:oe,elevateOnSelect:U.elevateEdgesOnSelect,zIndexMode:U.zIndexMode});return{...te||nc,zIndex:ae}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,g]),fe),j=(0,L.useMemo)(()=>m.markerStart?`url('#${ko(m.markerStart,h)}')`:void 0,[m.markerStart,h]),Y=(0,L.useMemo)(()=>m.markerEnd?`url('#${ko(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||I===null||D===null||A===null||F===null)return null;let Q=U=>{let{addSelectedEdges:K,unselectNodesAndEdges:oe,multiSelectionActive:te}=C.getState();P&&(C.setState({nodesSelectionActive:!1}),m.selected&&te?(oe({nodes:[],edges:[m]}),R.current?.blur()):K([e])),r&&r(U,m)},re=i?U=>{i(U,{...m})}:void 0,G=s?U=>{s(U,{...m})}:void 0,$=a?U=>{a(U,{...m})}:void 0,V=c?U=>{c(U,{...m})}:void 0,J=l?U=>{l(U,{...m})}:void 0,ne=U=>{if(!v&&$r.includes(U.key)&&P){let{unselectNodesAndEdges:K,addSelectedEdges:oe}=C.getState();U.key==="Escape"?(R.current?.blur(),K({edges:[m]})):oe([e])}};return(0,O.jsx)("svg",{style:{zIndex:k},children:(0,O.jsxs)("g",{className:he(["react-flow__edge",`react-flow__edge-${S}`,m.className,w,{selected:m.selected,animated:m.animated,inactive:!P&&!r,updating:T,selectable:P}]),onClick:Q,onDoubleClick:re,onContextMenu:G,onMouseEnter:$,onMouseMove:V,onMouseLeave:J,onKeyDown:N?ne:void 0,tabIndex:N?0:void 0,role:m.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":N?`${fc}-${h}`:void 0,ref:R,...m.domAttributes,children:[!B&&(0,O.jsx)(E,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:P,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:D,targetX:A,targetY:F,sourcePosition:H,targetPosition:X,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:j,markerEnd:Y,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),z&&(0,O.jsx)(pm,{edge:m,isReconnectable:z,reconnectRadius:d,onReconnect:f,onReconnectStart:u,onReconnectEnd:p,sourceX:I,sourceY:D,targetX:A,targetY:F,sourcePosition:H,targetPosition:X,setUpdateHover:W,setReconnecting:b})]})})}var hm=(0,L.memo)(gm),mm=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Bc({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:s,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:d,reconnectRadius:f,onEdgeDoubleClick:u,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:y}){let{edgesFocusable:w,edgesReconnectable:g,elementsSelectable:v,onError:m}=se(mm,fe),x=em(t);return(0,O.jsxs)("div",{className:"react-flow__edges",children:[(0,O.jsx)(im,{defaultColor:e,rfId:n}),x.map(S=>(0,O.jsx)(hm,{id:S,edgesFocusable:w,edgesReconnectable:g,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,onClick:d,reconnectRadius:f,onDoubleClick:u,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:y},S))]})}Bc.displayName="EdgeRenderer";var ym=(0,L.memo)(Bc),ic=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function wm({children:e}){let t=pe(),n=(0,L.useRef)(null),[o]=(0,L.useState)(()=>t.getState().transform);return mc(()=>{let r=null,i=()=>{let s=t.getState().transform;r&&s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]||(r=s,n.current&&(n.current.style.transform=ic(s)))};return i(),t.subscribe(i)},[t]),(0,O.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:ic(o)},children:e})}function xm(e){let t=Pn(),n=(0,L.useRef)(!1);(0,L.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var bm=e=>e.panZoom?.syncViewport;function vm(e){let t=se(bm),n=pe();return(0,L.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function sc(e){return e.connection.inProgress?{...e.connection,to:Qt(e.connection.to,e.transform)}:{...e.connection}}function km(e){return e?n=>{let o=sc(n);return e(o)}:sc}function _m(e){let t=km(e);return se(t,fe)}var Sm=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Em({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:s,isValid:a,inProgress:c}=se(Sm,fe);return!(i&&r&&c)?null:(0,O.jsx)("svg",{style:e,width:i,height:s,className:"react-flow__connectionline react-flow__container",children:(0,O.jsx)("g",{className:he(["react-flow__connection",jr(a)]),children:(0,O.jsx)(Hc,{style:t,type:n,CustomComponent:o,isValid:a})})})}var Hc=({style:e,type:t=qe.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:s,fromHandle:a,fromPosition:c,to:l,toNode:d,toHandle:f,toPosition:u,pointer:p}=_m();if(!r)return;if(n)return(0,O.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:s,fromHandle:a,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:u,connectionStatus:jr(o),toNode:d,toHandle:f,pointer:p});let h="",y={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:u};switch(t){case qe.Bezier:[h]=bo(y);break;case qe.SimpleBezier:[h]=Nc(y);break;case qe.Step:[h]=Mn({...y,borderRadius:0});break;case qe.SmoothStep:[h]=Mn(y);break;default:[h]=vo(y)}return(0,O.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Hc.displayName="ConnectionLine";var Nm={};function ac(e=Nm){let t=(0,L.useRef)(e),n=pe();(0,L.useEffect)(()=>{},[e])}function Cm(){let e=pe(),t=(0,L.useRef)(!1);(0,L.useEffect)(()=>{},[])}function Vc({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:d,onSelectionContextMenu:f,onSelectionStart:u,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:y,connectionLineComponent:w,connectionLineContainerStyle:g,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,multiSelectionKeyCode:S,panActivationKeyCode:E,zoomActivationKeyCode:N,deleteKeyCode:z,onlyRenderVisibleElements:P,elementsSelectable:R,defaultViewport:T,translateExtent:W,minZoom:B,maxZoom:b,preventScrolling:C,defaultMarkerColor:k,zoomOnScroll:I,zoomOnPinch:D,panOnScroll:A,panOnScrollSpeed:F,panOnScrollMode:H,zoomOnDoubleClick:X,panOnDrag:j,autoPanOnSelection:Y,onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:G,onPaneMouseLeave:$,onPaneScroll:V,onPaneContextMenu:J,paneClickDistance:ne,nodeClickDistance:U,onEdgeContextMenu:K,onEdgeMouseEnter:oe,onEdgeMouseMove:te,onEdgeMouseLeave:ae,reconnectRadius:ye,onReconnect:Me,onReconnectStart:_e,onReconnectEnd:we,noDragClassName:de,noWheelClassName:He,noPanClassName:Ge,disableKeyboardA11y:Ue,nodeExtent:ve,rfId:le,viewport:xe,onViewportChange:Se,nodesDraggable:bt}){return ac(e),ac(t),Cm(),xm(n),vm(xe),(0,O.jsx)(qh,{onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:G,onPaneMouseLeave:$,onPaneContextMenu:J,onPaneScroll:V,paneClickDistance:ne,deleteKeyCode:z,selectionKeyCode:v,selectionOnDrag:m,selectionMode:x,onSelectionStart:u,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:E,zoomActivationKeyCode:N,elementsSelectable:R,zoomOnScroll:I,zoomOnPinch:D,zoomOnDoubleClick:X,panOnScroll:A,panOnScrollSpeed:F,panOnScrollMode:H,panOnDrag:j,autoPanOnSelection:Y,defaultViewport:T,translateExtent:W,minZoom:B,maxZoom:b,onSelectionContextMenu:f,preventScrolling:C,noDragClassName:de,noWheelClassName:He,noPanClassName:Ge,disableKeyboardA11y:Ue,onViewportChange:Se,isControlledViewport:!!xe,children:(0,O.jsxs)(wm,{children:[(0,O.jsx)(ym,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:s,onReconnect:Me,onReconnectStart:_e,onReconnectEnd:we,onlyRenderVisibleElements:P,onEdgeContextMenu:K,onEdgeMouseEnter:oe,onEdgeMouseMove:te,onEdgeMouseLeave:ae,reconnectRadius:ye,defaultMarkerColor:k,noPanClassName:Ge,disableKeyboardA11y:Ue,rfId:le}),(0,O.jsx)(Em,{style:y,type:h,component:w,containerStyle:g}),(0,O.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,O.jsx)(Jh,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:d,nodeClickDistance:U,onlyRenderVisibleElements:P,noPanClassName:Ge,noDragClassName:de,disableKeyboardA11y:Ue,nodeExtent:ve,rfId:le,nodesDraggable:bt}),(0,O.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Vc.displayName="GraphView";var Mm=(0,L.memo)(Vc),Im=Yr("React Flow","https://reactflow.dev/"),cc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c=.5,maxZoom:l=2,nodeOrigin:d,nodeExtent:f,zIndexMode:u="basic"}={})=>{let p=new Map,h=new Map,y=new Map,w=new Map,g=o??t??[],v=n??e??[],m=d??[0,0],x=f??Gt;ii(y,w,g);let{nodesInitialized:S}=_o(v,p,h,{nodeOrigin:m,nodeExtent:x,zIndexMode:u}),E=[0,0,1];if(s&&r&&i){let N=Ut(p,{filter:T=>!!((T.width||T.initialWidth)&&(T.height||T.initialHeight))}),{x:z,y:P,zoom:R}=Cn(N,r,i,c,l,a?.padding??.1);E=[z,P,R]}return{rfId:"1",width:r??0,height:i??0,transform:E,nodes:v,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:g,edgeLookup:w,connectionLookup:y,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:Gt,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:dt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:a,fitViewResolver:null,connection:{...Hr},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Im,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Br,zIndexMode:u,defaultEdgeOptions:void 0,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map,onNodesDelete:void 0,onEdgesDelete:void 0,onDelete:void 0,onBeforeDelete:void 0,onViewportChangeStart:void 0,onViewportChange:void 0,onViewportChangeEnd:void 0,onNodeDragStart:void 0,onNodeDrag:void 0,onNodeDragStop:void 0,onSelectionDragStart:void 0,onSelectionDrag:void 0,onSelectionDragStop:void 0,onMoveStart:void 0,onMove:void 0,onMoveEnd:void 0,onConnect:void 0,onConnectStart:void 0,onConnectEnd:void 0,onClickConnectStart:void 0,onClickConnectEnd:void 0}},Pm=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:d,nodeExtent:f,zIndexMode:u})=>$a((p,h)=>{async function y(){let{nodeLookup:w,panZoom:g,fitViewOptions:v,fitViewResolver:m,width:x,height:S,minZoom:E,maxZoom:N}=h();g&&(await Us({nodes:w,width:x,height:S,panZoom:g,minZoom:E,maxZoom:N},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...cc({nodes:e,edges:t,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:d,nodeExtent:f,defaultNodes:n,defaultEdges:o,zIndexMode:u}),setNodes:w=>{let{nodeLookup:g,parentLookup:v,nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,fitViewQueued:E,zIndexMode:N,nodesSelectionActive:z}=h(),{nodesInitialized:P,hasSelectedNodes:R}=_o(w,g,v,{nodeOrigin:m,nodeExtent:x,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:N}),T=z&&R;E&&P?(y(),p({nodes:w,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:T})):p({nodes:w,nodesInitialized:P,nodesSelectionActive:T})},setEdges:w=>{let{connectionLookup:g,edgeLookup:v}=h();ii(g,v,w),p({edges:w})},setDefaultNodesAndEdges:(w,g)=>{if(w){let{setNodes:v}=h();v(w),p({hasDefaultNodes:!0})}if(g){let{setEdges:v}=h();v(g),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:g,nodeLookup:v,parentLookup:m,domNode:x,nodeOrigin:S,nodeExtent:E,debug:N,fitViewQueued:z,zIndexMode:P}=h(),{changes:R,updatedInternals:T}=la(w,v,m,x,S,E,P);T&&(aa(v,m,{nodeOrigin:S,nodeExtent:E,zIndexMode:P}),z?(y(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),R?.length>0&&(N&&console.log("React Flow: trigger node changes",R),g?.(R)))},updateNodePositions:(w,g=!1)=>{let v=[],m=[],{nodeLookup:x,triggerNodeChanges:S,connection:E,updateConnection:N,onNodesChangeMiddlewareMap:z}=h();for(let[P,R]of w){let T=x.get(P),W=!!(T?.expandParent&&T?.parentId&&R?.position),B={id:P,type:"position",position:W?{x:Math.max(0,R.position.x),y:Math.max(0,R.position.y)}:R.position,dragging:g};if(T&&E.inProgress&&E.fromNode.id===T.id){let b=pt(T,E.fromHandle,Z.Left,!0);N({...E,from:b})}W&&T.parentId&&v.push({id:P,parentId:T.parentId,rect:{...R.internals.positionAbsolute,width:R.measured.width??0,height:R.measured.height??0}}),m.push(B)}if(v.length>0){let{parentLookup:P,nodeOrigin:R}=h(),T=So(v,x,P,R);m.push(...T)}for(let P of z.values())m=P(m);S(m)},triggerNodeChanges:w=>{let{onNodesChange:g,setNodes:v,nodes:m,hasDefaultNodes:x,debug:S}=h();if(w?.length){if(x){let E=di(w,m);v(E)}S&&console.log("React Flow: trigger node changes",w),g?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:g,setEdges:v,edges:m,hasDefaultEdges:x,debug:S}=h();if(w?.length){if(x){let E=dh(w,m);v(E)}S&&console.log("React Flow: trigger edge changes",w),g?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let E=w.map(N=>Lt(N,!0));x(E);return}x(tn(m,new Set([...w]),!0)),S(tn(v))},addSelectedEdges:w=>{let{multiSelectionActive:g,edgeLookup:v,nodeLookup:m,triggerNodeChanges:x,triggerEdgeChanges:S}=h();if(g){let E=w.map(N=>Lt(N,!0));S(E);return}S(tn(v,new Set([...w]))),x(tn(m,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:g}={})=>{let{edges:v,nodes:m,nodeLookup:x,triggerNodeChanges:S,triggerEdgeChanges:E}=h(),N=w||m,z=g||v,P=[];for(let T of N){if(!T.selected)continue;let W=x.get(T.id);W&&(W.selected=!1),P.push(Lt(T.id,!1))}let R=[];for(let T of z)T.selected&&R.push(Lt(T.id,!1));S(P),E(R)},setMinZoom:w=>{let{panZoom:g,maxZoom:v}=h();g?.setScaleExtent([w,v]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:g,minZoom:v}=h();g?.setScaleExtent([v,w]),p({maxZoom:w})},setTranslateExtent:w=>{h().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:g,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:x}=h();if(!x)return;let S=g.reduce((N,z)=>z.selected?[...N,Lt(z.id,!1)]:N,[]),E=w.reduce((N,z)=>z.selected?[...N,Lt(z.id,!1)]:N,[]);v(S),m(E)},setNodeExtent:w=>{let{nodes:g,nodeLookup:v,parentLookup:m,nodeOrigin:x,elevateNodesOnSelect:S,nodeExtent:E,zIndexMode:N}=h();w[0][0]===E[0][0]&&w[0][1]===E[0][1]&&w[1][0]===E[1][0]&&w[1][1]===E[1][1]||(_o(g,v,m,{nodeOrigin:x,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:N}),p({nodeExtent:w}))},panBy:w=>{let{transform:g,width:v,height:m,panZoom:x,translateExtent:S}=h();return ua({delta:w,panZoom:x,transform:g,translateExtent:S,width:v,height:m})},setCenter:async(w,g,v)=>{let{width:m,height:x,maxZoom:S,panZoom:E}=h();if(!E)return!1;let N=typeof v?.zoom<"u"?v.zoom:S;return await E.setViewport({x:m/2-w*N,y:x/2-g*N,zoom:N},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Hr}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...cc()})}},Object.is);function pi({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:s,initialMaxZoom:a,initialFitViewOptions:c,fitView:l,nodeOrigin:d,nodeExtent:f,zIndexMode:u,children:p}){let[h]=(0,L.useState)(()=>Pm({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:s,maxZoom:a,fitViewOptions:c,nodeOrigin:d,nodeExtent:f,zIndexMode:u}));return(0,O.jsx)(Xg,{value:h,children:(0,O.jsx)(mh,{children:(0,O.jsx)(zh,{children:p})})})}function zm({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:s,fitView:a,fitViewOptions:c,minZoom:l,maxZoom:d,nodeOrigin:f,nodeExtent:u,zIndexMode:p}){return(0,L.useContext)(zo)?(0,O.jsx)(O.Fragment,{children:e}):(0,O.jsx)(pi,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:s,fitView:a,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:d,nodeOrigin:f,nodeExtent:u,zIndexMode:p,children:e})}var Am={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function Dm({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:s,onNodeClick:a,onEdgeClick:c,onInit:l,onMove:d,onMoveStart:f,onMoveEnd:u,onConnect:p,onConnectStart:h,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:g,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:E,onNodeDragStart:N,onNodeDrag:z,onNodeDragStop:P,onNodesDelete:R,onEdgesDelete:T,onDelete:W,onSelectionChange:B,onSelectionDragStart:b,onSelectionDrag:C,onSelectionDragStop:k,onSelectionContextMenu:I,onSelectionStart:D,onSelectionEnd:A,onBeforeDelete:F,connectionMode:H,connectionLineType:X=qe.Bezier,connectionLineStyle:j,connectionLineComponent:Y,connectionLineContainerStyle:Q,deleteKeyCode:re="Backspace",selectionKeyCode:G="Shift",selectionOnDrag:$=!1,selectionMode:V=zt.Full,panActivationKeyCode:J="Space",multiSelectionKeyCode:ne=Jt()?"Meta":"Control",zoomActivationKeyCode:U=Jt()?"Meta":"Control",snapToGrid:K,snapGrid:oe,onlyRenderVisibleElements:te=!1,selectNodesOnDrag:ae,nodesDraggable:ye,autoPanOnNodeFocus:Me,nodesConnectable:_e,nodesFocusable:we,nodeOrigin:de=pc,edgesFocusable:He,edgesReconnectable:Ge,elementsSelectable:Ue=!0,defaultViewport:ve=rh,minZoom:le=.5,maxZoom:xe=2,translateExtent:Se=Gt,preventScrolling:bt=!0,nodeExtent:rt,defaultMarkerColor:Xo="#b1b1b7",zoomOnScroll:Yo=!0,zoomOnPinch:an=!0,panOnScroll:it=!1,panOnScrollSpeed:cn=.5,panOnScrollMode:Zo=tt.Free,zoomOnDoubleClick:ie=!0,panOnDrag:Go=!0,onPaneClick:ln,onPaneMouseEnter:Tt,onPaneMouseMove:vt,onPaneMouseLeave:M,onPaneScroll:q,onPaneContextMenu:ee,paneClickDistance:ce=1,nodeClickDistance:me=0,children:Tn,onReconnect:$n,onReconnectStart:st,onReconnectEnd:kt,onEdgeContextMenu:xl,onEdgeDoubleClick:bl,onEdgeMouseEnter:vl,onEdgeMouseMove:kl,onEdgeMouseLeave:_l,reconnectRadius:Sl=10,onNodesChange:El,onEdgesChange:Nl,noDragClassName:Cl="nodrag",noWheelClassName:Ml="nowheel",noPanClassName:bi="nopan",fitView:vi,fitViewOptions:ki,connectOnClick:Il,attributionPosition:Pl,proOptions:zl,defaultEdgeOptions:Al,elevateNodesOnSelect:Dl=!0,elevateEdgesOnSelect:Ol=!1,disableKeyboardA11y:_i=!1,autoPanOnConnect:Ll,autoPanOnNodeDrag:Tl,autoPanOnSelection:$l=!0,autoPanSpeed:Bl,connectionRadius:Hl,isValidConnection:Vl,onError:Fl,style:Rl,id:Si,nodeDragThreshold:Wl,connectionDragThreshold:ql,viewport:Xl,onViewportChange:Yl,width:Zl,height:Gl,colorMode:Ul="light",debug:jl,onScroll:Ei,ariaLabelConfig:Kl,zIndexMode:Ni="basic",...Ql},Jl){let Uo=Si||"1",eu=ch(Ul),tu=(0,L.useCallback)(Ci=>{Ci.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Ei?.(Ci)},[Ei]);return(0,O.jsx)("div",{"data-testid":"rf__wrapper",...Ql,onScroll:tu,style:{...Rl,...Am},ref:Jl,className:he(["react-flow",r,eu]),id:Si,role:"application",children:(0,O.jsxs)(zm,{nodes:e,edges:t,width:Zl,height:Gl,fitView:vi,fitViewOptions:ki,minZoom:le,maxZoom:xe,nodeOrigin:de,nodeExtent:rt,zIndexMode:Ni,children:[(0,O.jsx)(ah,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:y,onClickConnectStart:w,onClickConnectEnd:g,nodesDraggable:ye,autoPanOnNodeFocus:Me,nodesConnectable:_e,nodesFocusable:we,edgesFocusable:He,edgesReconnectable:Ge,elementsSelectable:Ue,elevateNodesOnSelect:Dl,elevateEdgesOnSelect:Ol,minZoom:le,maxZoom:xe,nodeExtent:rt,onNodesChange:El,onEdgesChange:Nl,snapToGrid:K,snapGrid:oe,connectionMode:H,translateExtent:Se,connectOnClick:Il,defaultEdgeOptions:Al,fitView:vi,fitViewOptions:ki,onNodesDelete:R,onEdgesDelete:T,onDelete:W,onNodeDragStart:N,onNodeDrag:z,onNodeDragStop:P,onSelectionDrag:C,onSelectionDragStart:b,onSelectionDragStop:k,onMove:d,onMoveStart:f,onMoveEnd:u,noPanClassName:bi,nodeOrigin:de,rfId:Uo,autoPanOnConnect:Ll,autoPanOnNodeDrag:Tl,autoPanSpeed:Bl,onError:Fl,connectionRadius:Hl,isValidConnection:Vl,selectNodesOnDrag:ae,nodeDragThreshold:Wl,connectionDragThreshold:ql,onBeforeDelete:F,debug:jl,ariaLabelConfig:Kl,zIndexMode:Ni}),(0,O.jsx)(Mm,{onInit:l,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:x,onNodeContextMenu:S,onNodeDoubleClick:E,nodeTypes:i,edgeTypes:s,connectionLineType:X,connectionLineStyle:j,connectionLineComponent:Y,connectionLineContainerStyle:Q,selectionKeyCode:G,selectionOnDrag:$,selectionMode:V,deleteKeyCode:re,multiSelectionKeyCode:ne,panActivationKeyCode:J,zoomActivationKeyCode:U,onlyRenderVisibleElements:te,defaultViewport:ve,translateExtent:Se,minZoom:le,maxZoom:xe,preventScrolling:bt,zoomOnScroll:Yo,zoomOnPinch:an,zoomOnDoubleClick:ie,panOnScroll:it,panOnScrollSpeed:cn,panOnScrollMode:Zo,panOnDrag:Go,autoPanOnSelection:$l,onPaneClick:ln,onPaneMouseEnter:Tt,onPaneMouseMove:vt,onPaneMouseLeave:M,onPaneScroll:q,onPaneContextMenu:ee,paneClickDistance:ce,nodeClickDistance:me,onSelectionContextMenu:I,onSelectionStart:D,onSelectionEnd:A,onReconnect:$n,onReconnectStart:st,onReconnectEnd:kt,onEdgeContextMenu:xl,onEdgeDoubleClick:bl,onEdgeMouseEnter:vl,onEdgeMouseMove:kl,onEdgeMouseLeave:_l,reconnectRadius:Sl,defaultMarkerColor:Xo,noDragClassName:Cl,noWheelClassName:Ml,noPanClassName:bi,rfId:Uo,disableKeyboardA11y:_i,nodeExtent:rt,viewport:Xl,onViewportChange:Yl,nodesDraggable:ye}),(0,O.jsx)(oh,{onSelectionChange:B}),Tn,(0,O.jsx)(Qg,{proOptions:zl,position:Pl}),(0,O.jsx)(Kg,{rfId:Uo,disableKeyboardA11y:_i})]})})}var Fc=hc(Dm);var U0=Ae.error014();function gi(e){return se((0,L.useCallback)(n=>n.nodeLookup.get(e),[e]),fe)}function Om({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,O.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:he(["react-flow__background-pattern",n,o])})}function Lm({radius:e,className:t}){return(0,O.jsx)("circle",{cx:e,cy:e,r:e,className:he(["react-flow__background-pattern","dots",t])})}var Xe;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Xe||(Xe={}));var Tm={[Xe.Dots]:1,[Xe.Lines]:1,[Xe.Cross]:6},$m=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Rc({id:e,variant:t=Xe.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:s,bgColor:a,style:c,className:l,patternClassName:d}){let f=(0,L.useRef)(null),{transform:u,patternId:p}=se($m,fe),h=o||Tm[t],y=t===Xe.Dots,w=t===Xe.Cross,g=Array.isArray(n)?n:[n,n],v=[g[0]*u[2]||1,g[1]*u[2]||1],m=h*u[2],x=Array.isArray(i)?i:[i,i],S=w?[m,m]:v,E=[x[0]*u[2]+S[0]/2,x[1]*u[2]+S[1]/2],N=`${p}${e||""}`;return(0,O.jsxs)("svg",{className:he(["react-flow__background",l]),style:{...c,...Do,"--xy-background-color-props":a,"--xy-background-pattern-color-props":s},ref:f,"data-testid":"rf__background",children:[(0,O.jsx)("pattern",{id:N,x:u[0]%v[0],y:u[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${E[0]},-${E[1]})`,children:y?(0,O.jsx)(Lm,{radius:m/2,className:d}):(0,O.jsx)(Om,{dimensions:S,lineWidth:r,variant:t,className:d})}),(0,O.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}Rc.displayName="Background";var Wc=(0,L.memo)(Rc);function Bm(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,O.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Hm(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,O.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Vm(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,O.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Fm(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Rm(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Io({children:e,className:t,...n}){return(0,O.jsx)("button",{type:"button",className:he(["react-flow__controls-button",t]),...n,children:e})}var Wm=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function qc({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:s,onFitView:a,onInteractiveChange:c,className:l,children:d,position:f="bottom-left",orientation:u="vertical","aria-label":p}){let h=pe(),{isInteractive:y,minZoomReached:w,maxZoomReached:g,ariaLabelConfig:v}=se(Wm,fe),{zoomIn:m,zoomOut:x,fitView:S}=Pn(),E=()=>{m(),i?.()},N=()=>{x(),s?.()},z=()=>{S(r),a?.()},P=()=>{h.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),c?.(!y)};return(0,O.jsxs)(Ao,{className:he(["react-flow__controls",u==="horizontal"?"horizontal":"vertical",l]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Io,{onClick:E,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:g,children:(0,O.jsx)(Bm,{})}),(0,O.jsx)(Io,{onClick:N,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:w,children:(0,O.jsx)(Hm,{})})]}),n&&(0,O.jsx)(Io,{className:"react-flow__controls-fitview",onClick:z,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,O.jsx)(Vm,{})}),o&&(0,O.jsx)(Io,{className:"react-flow__controls-interactive",onClick:P,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:y?(0,O.jsx)(Rm,{}):(0,O.jsx)(Fm,{})}),d]})}qc.displayName="Controls";var Xc=(0,L.memo)(qc);function qm({id:e,x:t,y:n,width:o,height:r,style:i,color:s,strokeColor:a,strokeWidth:c,className:l,borderRadius:d,shapeRendering:f,selected:u,onClick:p}){let{background:h,backgroundColor:y}=i||{},w=s||h||y;return(0,O.jsx)("rect",{className:he(["react-flow__minimap-node",{selected:u},l]),x:t,y:n,rx:d,ry:d,width:o,height:r,style:{fill:w,stroke:a,strokeWidth:c},shapeRendering:f,onClick:p?g=>p(g,e):void 0})}var Xm=(0,L.memo)(qm),Ym=e=>e.nodes.map(t=>t.id),li=e=>e instanceof Function?e:()=>e;function Zm({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Xm,onClick:s}){let a=se(Ym,fe),c=li(t),l=li(e),d=li(n),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,O.jsx)(O.Fragment,{children:a.map(u=>(0,O.jsx)(Um,{id:u,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:s,shapeRendering:f},u))})}function Gm({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:s,NodeComponent:a,onClick:c}){let{node:l,x:d,y:f,width:u,height:p}=se(h=>{let y=h.nodeLookup.get(e);if(!y)return{node:void 0,x:0,y:0,width:0,height:0};let w=y.internals.userNode,{x:g,y:v}=y.internals.positionAbsolute,{width:m,height:x}=Le(w);return{node:w,x:g,y:v,width:m,height:x}},fe);return!l||l.hidden||!Zr(l)?null:(0,O.jsx)(a,{x:d,y:f,width:u,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:s,onClick:c,id:l.id})}var Um=(0,L.memo)(Gm),jm=(0,L.memo)(Zm),Km=200,Qm=150,Jm=e=>!e.hidden,ey=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]},n=!1;for(let o of e.nodeLookup.values())if(!o.hidden){n=!0;break}return{viewBB:t,boundingRect:n?qr(Ut(e.nodeLookup,{filter:Jm}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},lc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,ty=(e,t)=>lc(e.viewBB,t.viewBB)&&lc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,ny="react-flow__minimap-desc";function Yc({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:s,nodeComponent:a,bgColor:c,maskColor:l,maskStrokeColor:d,maskStrokeWidth:f,position:u="bottom-right",onClick:p,onNodeClick:h,pannable:y=!1,zoomable:w=!1,ariaLabel:g,inversePan:v,zoomStep:m=1,offsetScale:x=5}){let S=pe(),E=(0,L.useRef)(null),{boundingRect:N,panZoom:z,viewBB:P,rfId:R,translateExtent:T,flowWidth:W,flowHeight:B,ariaLabelConfig:b}=se(ey,ty),C=e?.width??Km,k=e?.height??Qm,I=N.width/C,D=N.height/k,A=Math.max(I,D),F=A*C,H=A*k,X=x*A,j=N.x-(F-N.width)/2-X,Y=N.y-(H-N.height)/2-X,Q=F+X*2,re=H+X*2,G=`${ny}-${R}`,$=(0,L.useRef)(0),V=(0,L.useRef)();$.current=A,(0,L.useEffect)(()=>{let oe=S.getState().panZoom;if(E.current&&oe)return V.current=ya({domNode:E.current,panZoom:oe,getTransform:()=>S.getState().transform,getViewScale:()=>$.current}),()=>{V.current?.destroy()}},[z]),(0,L.useEffect)(()=>{V.current?.update({translateExtent:T,width:W,height:B,inversePan:v,pannable:y,zoomStep:m,zoomable:w})},[y,w,v,m,T,W,B]);let J=p?oe=>{let[te,ae]=V.current?.pointer(oe)||[0,0];p(oe,{x:te,y:ae})}:void 0,ne=(0,L.useCallback)((oe,te)=>{let ae=S.getState().nodeLookup.get(te).internals.userNode;h?.(oe,ae)},[h]),U=h?ne:void 0,K=g??b["minimap.ariaLabel"];return(0,O.jsx)(Ao,{position:u,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:he(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,O.jsxs)("svg",{width:C,height:k,viewBox:`${j} ${Y} ${Q} ${re}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":G,ref:E,onClick:J,children:[K&&(0,O.jsx)("title",{id:G,children:K}),(0,O.jsx)(jm,{onClick:U,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:s,nodeComponent:a}),(0,O.jsx)("path",{className:"react-flow__minimap-mask",d:`M${j-X},${Y-X}h${Q+X*2}v${re+X*2}h${-Q-X*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Yc.displayName="MiniMap";var j0=(0,L.memo)(Yc),oy=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,ry={[gt.Line]:"right",[gt.Handle]:"bottom-right"};function iy({nodeId:e,position:t,variant:n=gt.Handle,className:o,style:r=void 0,children:i,color:s,minWidth:a=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:u,autoScale:p=!0,shouldResize:h,onResizeStart:y,onResize:w,onResizeEnd:g}){let v=bc(),m=typeof e=="string"?e:v,x=pe(),S=(0,L.useRef)(null),E=n===gt.Handle,N=se((0,L.useCallback)(oy(E&&p),[E,p]),fe),z=(0,L.useRef)(null),P=t??ry[n];(0,L.useEffect)(()=>{if(!(!S.current||!m))return z.current||(z.current=ka({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:T,transform:W,snapGrid:B,snapToGrid:b,nodeOrigin:C,domNode:k}=x.getState();return{nodeLookup:T,transform:W,snapGrid:B,snapToGrid:b,nodeOrigin:C,paneDomNode:k}},onChange:(T,W)=>{let{triggerNodeChanges:B,nodeLookup:b,parentLookup:C,nodeOrigin:k}=x.getState(),I=[],D={x:T.x,y:T.y},A=b.get(m);if(A&&A.expandParent&&A.parentId){let F=A.origin??k,H=T.width??A.measured.width??0,X=T.height??A.measured.height??0,j={id:A.id,parentId:A.parentId,rect:{width:H,height:X,...Gr({x:T.x??A.position.x,y:T.y??A.position.y},{width:H,height:X},A.parentId,b,F)}},Y=So([j],b,C,k);I.push(...Y),D.x=T.x?Math.max(F[0]*H,T.x):void 0,D.y=T.y?Math.max(F[1]*X,T.y):void 0}if(D.x!==void 0&&D.y!==void 0){let F={id:m,type:"position",position:{...D}};I.push(F)}if(T.width!==void 0&&T.height!==void 0){let H={id:m,type:"dimensions",resizing:!0,setAttributes:u?u==="horizontal"?"width":"height":!0,dimensions:{width:T.width,height:T.height}};I.push(H)}for(let F of W){let H={...F,type:"position"};I.push(H)}B(I)},onEnd:({width:T,height:W})=>{let B={id:m,type:"dimensions",resizing:!1,dimensions:{width:T,height:W}};x.getState().triggerNodeChanges([B])}})),z.current.update({controlPosition:P,boundaries:{minWidth:a,minHeight:c,maxWidth:l,maxHeight:d},keepAspectRatio:f,resizeDirection:u,onResizeStart:y,onResize:w,onResizeEnd:g,shouldResize:h}),()=>{z.current?.destroy()}},[P,a,c,l,d,f,y,w,g,h]);let R=P.split("-");return(0,O.jsx)("div",{className:he(["react-flow__resize-control","nodrag",...R,n,o]),ref:S,style:{...r,scale:N,...s&&{[E?"backgroundColor":"borderColor"]:s}},children:i})}var K0=(0,L.memo)(iy);var on={recency:"recent",workspace:"all",status:"all",kind:"all",archived:!1,query:""},Oo={...on,recency:"all",frequency:"all",statuses:[]};var sy=e=>(/^[A-Za-z]:[/\\]/.test(e)||e.startsWith("\\\\")?e.replaceAll("\\","/"):e).replace(/\/+$/,"");function zn(e){let t=e.map(o=>({id:o.id,path:sy(o.path)})),n=new Map;for(let o of t){let r=-1;for(let i of t)i.id!==o.id&&i.path.length>r&&o.path!==i.path&&o.path.startsWith(i.path+"/")&&(n.set(o.id,i.id),r=i.path.length)}return n}function An(e){let t=new Map(e.map(o=>[o.id,o])),n=new Map;for(let o of e){if(!o.parentId||!t.has(o.parentId))continue;let r=new Set([o.id]),i=o.parentId;for(;i&&t.has(i)&&!r.has(i);)r.add(i),i=t.get(i).parentId;(!i||!r.has(i))&&n.set(o.id,o.parentId)}return n}function Lo(e,t,n){let o=new Map;for(let[s,a]of zn(e.workspaces))o.set("workspace:"+s,"workspace:"+a);for(let s of e.workspaces)for(let a of s.sessionIds)o.has("session:"+a)||o.set("session:"+a,"workspace:"+s.id);for(let s of e.sessions)o.has("session:"+s.id)||o.set("session:"+s.id,"workspace:__ungrouped__");for(let[s,a]of An(e.sessions))o.set("session:"+s,"session:"+a);let r={...n},i=s=>{if(r[s])return r[s];let a=t[s],c=o.get(s);if(!a||!c)return a;let l=t[c],d=i(c);return!l||!d?a:r[s]={x:a.x+d.x-l.x,y:a.y+d.y-l.y}};for(let s of o.keys())t[s]&&i(s);return r}function ht(e){let t=e==="workspace"?53:37;return{offset:{x:72,y:t},radius:t}}function Zc(e,t){let n=t.x-e.x,o=t.y-e.y,r=Math.hypot(n,o),i=r>1e-9?n/r:1,s=r>1e-9?o/r:0;return{source:{x:e.x+i*e.radius,y:e.y+s*e.radius},target:{x:t.x-i*t.radius,y:t.y-s*t.radius}}}var Gc=new WeakMap;function ay(e){let t=Gc.get(e);if(t)return t;let n=new Map,o=new Map,r=new Map;for(let u of[...e.workspaces].sort((p,h)=>p.id.localeCompare(h.id))){o.set("workspace:"+u.id,"workspace");for(let p of u.sessionIds)r.has(p)||r.set(p,u.id)}for(let[u,p]of zn(e.workspaces))n.set("workspace:"+u,"workspace:"+p);let i=An(e.sessions);for(let u of e.sessions){let p="session:"+u.id;o.set(p,"session");let h=r.get(u.id)??"__ungrouped__";h==="__ungrouped__"&&o.set("workspace:__ungrouped__","workspace"),n.set(p,i.has(u.id)?"session:"+i.get(u.id):"workspace:"+h)}let s=new Map;for(let u of o.keys()){let p=n.get(u);!p||!o.has(p)||(s.has(p)||s.set(p,[]),s.get(p).push(u))}for(let u of s.values())u.sort();let a=new Map,c=u=>{if(a.has(u))return a.get(u);let p=Math.max(1,(s.get(u)??[]).reduce((h,y)=>h+c(y),0));return a.set(u,p),p},l={},d=280,f=[...o.keys()].filter(u=>!n.has(u)||!o.has(n.get(u))).sort();for(let u of f){let p=new Map,h=(g,v,m,x,S)=>{p.set(g,{x:v,y:m});let E=s.get(g)??[],N=E.reduce((R,T)=>R+c(T),0),z=Math.max(225,N*165/S),P=x-S/2;for(let R of E){let T=S*c(R)/N,W=P+T/2;h(R,v+Math.cos(W)*z,m+Math.sin(W)*z,W,Math.min(Math.PI*.8,T)),P+=T}};h(u,0,0,-Math.PI/2,2*Math.PI);let y=Math.min(...[...p.values()].map(g=>g.x)),w=Math.max(...[...p.values()].map(g=>g.x));for(let[g,v]of p){let m=ht(o.get(g));l[g]={x:v.x-y+d-m.offset.x,y:v.y+290-m.offset.y}}d+=w-y+360}for(let u of Object.values(l))Object.freeze(u);return Object.freeze(l),Gc.set(e,l),l}function To(e,t){let n=ay(e);return{...n,...Lo(e,n,t)}}function Uc(e,t,n=Date.now()){let o={...e};for(let r of t)Object.hasOwn(o,r)||Object.defineProperty(o,r,{value:{since:n,visits:[]},enumerable:!0,writable:!0,configurable:!0});return o}function hi(e,t=Date.now()){return!Number.isFinite(e)||e<=0||e>t+6e4?"unknown":t-e<=7*864e5?"recent":"early"}function mi(e,t=Date.now()){return e?e.visits.filter(o=>o>=t-30*864e5&&o<=t).length>=5?"frequent":t-e.since>=30*864e5?"infrequent":"accumulating":"accumulating"}function jc(e,t=Date.now()){let n=(e?.visits??[]).filter(o=>o>=t-2592e6&&o<=t);return(!n.length||t-n[n.length-1]>=30*6e4)&&n.push(t),{since:e?.since??t,visits:n}}var $o={recent:"\u8FD1\u671F",early:"\u65E9\u671F",unknown:"\u65F6\u95F4\u672A\u77E5"},Bo={frequent:"\u5E38\u7528",infrequent:"\u4E0D\u5E38\u7528",accumulating:"\u4F7F\u7528\u8BB0\u5F55\u79EF\u7D2F\u4E2D"};function yi(e){return e.pending?"waiting":e.running===!0?"running":e.unread?"unread":e.running===!1?"idle":"unknown"}function Ho(e,t,n,o={},r=new Set,i=Date.now(),s){let a=zn(e.workspaces),c=new Set(e.currentSessionIds??(e.currentSessionId?[e.currentSessionId]:[])),l=k=>c.has(k.id)||k.running===!0||k.pending===!0,d=An(e.sessions),f=new Map(e.sessions.map(k=>[k.id,k])),u=new Set(e.archivedSessionIds),p=e.sessions.filter(k=>l(k)||!k.blank&&k.origin!=="subagent"&&(t.archived||!u.has(k.id))),h=new Map(p.map(k=>[k.id,k])),y=new Set(e.workspaces.flatMap(k=>[...k.sessionIds])),w=p.filter(k=>!y.has(k.id)),g=[...e.workspaces];(w.length||[...d.values()].some(k=>!y.has(k)))&&g.push({id:"__ungrouped__",title:"\u672A\u5206\u7EC4",path:"",sessionIds:w.map(k=>k.id),virtual:!0});let v=[],m=[],x=[],S=t.query.trim().toLocaleLowerCase(),E=t.statuses??(t.status==="all"?[]:[t.status]),N=0,z=new Set,P=new Set,R=new Map;for(let k of g)for(let I of k.sessionIds)R.has(I)||R.set(I,k.id);let T=new Map(g.map(k=>[k.id,k])),W=To(e,n.positions),B=k=>n.positions["workspace:"+k]??W["workspace:"+k]??{x:280,y:290},b=k=>n.positions["session:"+k.id]??W["session:"+k.id]??{x:280,y:290},C=(k,I=!1)=>({id:"session:"+k.id,type:"bubble",position:b(k),data:{kind:"session",entityId:k.id,title:k.title,status:yi(k),path:k.cwd,workspaceId:R.get(k.id)??"__ungrouped__",parentSessionId:d.get(k.id),context:I,archived:u.has(k.id),updatedAt:k.updatedAt,current:c.has(k.id),working:k.running===!0,pinned:n.settings?.pinned?.includes(k.id),recency:hi(k.updatedAt,i),frequency:mi(n.settings?.usage?.[k.id],i)}});g.forEach(k=>{let I=k.id;for(;I&&I!==t.workspace;)I=a.get(I);let D=t.workspace==="all"||I===t.workspace,A=[...new Set(k.sessionIds)].flatMap(V=>h.has(V)&&R.get(V)===k.id?[h.get(V)]:[]),F=!S||(k.title+" "+k.path).toLocaleLowerCase().includes(S),H=A.filter(V=>D&&(F||(V.title+" "+(V.cwd??"")+" "+(n.settings?.manualSummaries?.[V.id]??"")).toLocaleLowerCase().includes(S))&&(!E.length||E.includes(yi(V)))&&(!t.recency||t.recency==="all"||hi(V.updatedAt,i)===t.recency)&&(!t.frequency||t.frequency==="all"||mi(n.settings?.usage?.[V.id],i)===t.frequency)).sort((V,J)=>Number(n.settings?.pinned?.includes(J.id)??!1)-Number(n.settings?.pinned?.includes(V.id)??!1)),X=A.map(yi),j=["waiting","running","unread","idle"].find(V=>X.includes(V))??"unknown",Y="workspace:"+k.id,Q=!r.has(k.id);v.push({id:Y,type:"bubble",position:B(k.id),data:{kind:"workspace",entityId:k.id,title:k.title,path:k.path,status:j,count:H.length,total:A.length,virtual:k.virtual,parentWorkspaceId:a.get(k.id),childWorkspaceCount:g.filter(V=>a.get(V.id)===k.id).length,collapsed:Q,current:A.some(V=>c.has(V.id)),working:A.some(V=>V.running===!0)}});let re=a.get(k.id);re&&m.push({id:"workspace:"+re+"->"+Y,source:"workspace:"+re,target:Y}),N+=H.length;for(let V of H)z.add(V.id),x.push(C(V));let G=o[k.id]??20,$=Q||t.kind==="workspace"?[]:H.slice(0,G);for(let V of A.filter(J=>l(J)||J.id===s))$.some(J=>J.id===V.id)||$.push(V);$.forEach(V=>{if(P.has(V.id))return;P.add(V.id);let J=C(V);J.data.outsideFilters=!z.has(V.id),v.push(J)})});for(let k of P){let I=d.get(k);I&&!P.has(I)&&(P.add(I),v.push(C(f.get(I),!0)))}for(let k of P){let I=d.get(k),D=I?"session:"+I:"workspace:"+(R.get(k)??"__ungrouped__"),A="session:"+k;m.push({id:D+"->"+A,source:D,target:A,...I?{sourceHandle:"branch-source",targetHandle:"branch-target"}:{}})}return{matches:x,nodes:v,edges:m,matched:N,total:p.length,hidden:[...z].filter(k=>!P.has(k)).length}}var ot="#6aabff";function Dn(e){if(typeof e!="string")return;let t=e.trim().toLowerCase();if(/^#[\da-f]{6}$/.test(t))return t;if(/^#[\da-f]{3}$/.test(t))return"#"+[...t.slice(1)].map(n=>n+n).join("")}var Kc=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),Vo=(e,t,n)=>"#"+Kc(e).map((o,r)=>Math.round(o*(1-n)+Kc(t)[r]*n).toString(16).padStart(2,"0")).join("");function Qc(e){let t=Dn(e)??ot;return{workspace:Vo(t,"#243247",.8),expanded:Vo(t,"#080d17",.94),session:Vo(t,"#ffffff",.82),text:"#ffffff",sessionText:"#111827",accent:Vo(t,"#ffffff",.55)}}var sn=()=>({schemaVersion:1,revision:0,positions:{},collapsed:[],views:{}}),rn=e=>!["__proto__","prototype","constructor"].includes(e)&&e.length<1e3,Ye=e=>!!e&&typeof e=="object"&&!Array.isArray(e),Jc=e=>Ye(e)&&typeof e.x=="number"&&typeof e.y=="number"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Math.abs(e.x)<1e8&&Math.abs(e.y)<1e8;function cy(e){return Ye(e)&&typeof e.workspace=="string"&&(e.recency===void 0||["all","recent","early","unknown"].includes(String(e.recency)))&&(e.frequency===void 0||["all","frequent","infrequent","accumulating"].includes(String(e.frequency)))&&(e.statuses===void 0||Array.isArray(e.statuses)&&e.statuses.every(t=>["running","waiting","unread","idle","unknown"].includes(t)))&&["all","running","waiting","unread","idle","unknown"].includes(String(e.status))&&["all","workspace","session"].includes(String(e.kind))&&typeof e.archived=="boolean"&&typeof e.query=="string"}function el(e){if(!Ye(e)||e.schemaVersion!==1||!Number.isSafeInteger(e.revision)||Number(e.revision)<0||!Ye(e.positions)||!Array.isArray(e.collapsed)||!Ye(e.views))throw new Error("Invalid layout format or unsupported version");for(let[t,n]of Object.entries(e.positions))if(!rn(t)||!Jc(n))throw new Error("Invalid layout position");if(!e.collapsed.every(t=>typeof t=="string"&&rn(t)))throw new Error("Invalid layout collapse state");for(let[t,n]of Object.entries(e.views)){if(!rn(t)||!Ye(n))throw new Error("Invalid layout view");if(n.viewport!==void 0&&(!Jc(n.viewport)||typeof n.viewport.zoom!="number"||!Number.isFinite(n.viewport.zoom)||n.viewport.zoom<.1||n.viewport.zoom>3))throw new Error("Invalid layout viewport");if(n.filters!==void 0&&!cy(n.filters))throw new Error("Invalid layout filters")}}var Fo=class e{positions={};viewports={};revision=0;storedRevision;storage;key;constructor(t,n){this.storage=t,this.key=n}loadStored(){let t=this.storage.getItem(this.key);if(t===null)return sn();let n;try{n=JSON.parse(t)}catch{throw new Error("Invalid layout JSON")}el(n);let o=Ye(n.settings)?n.settings:{},r=Object.fromEntries(Object.entries(Ye(o.manualSummaries)?o.manualSummaries:{}).filter(([s,a])=>rn(s)&&typeof a=="string").map(([s,a])=>[s,a.slice(0,4e3)])),i=Object.fromEntries(Object.entries(Ye(o.usage)?o.usage:{}).filter(([s,a])=>rn(s)&&Ye(a)&&Number.isFinite(a.since)&&Number(a.since)>=0&&Array.isArray(a.visits)&&a.visits.every(c=>typeof c=="number"&&Number.isFinite(c)&&c>=0)).map(([s,a])=>[s,{since:a.since,visits:a.visits.slice(-2e3).sort((c,l)=>c-l)}]));return n.settings={theme:Dn(o.theme)??ot,reducedMotion:o.reducedMotion===!0,pinned:Array.isArray(o.pinned)?o.pinned.filter(s=>typeof s=="string"&&rn(s)):[],usage:i,manualSummaries:r},n}load(){let t=this.loadStored();this.storedRevision!==void 0&&t.revision!==this.storedRevision&&this.revision++,this.storedRevision=t.revision;let n=Object.fromEntries(Object.entries(t.views).map(([o,r])=>[o,{filters:r.filters}]));for(let[o,r]of Object.entries(this.viewports))n[o]={...n[o],...r};return{...t,revision:this.revision,positions:this.positions,views:n}}initializePositions(t){let n=this.load(),o=Object.fromEntries(Object.entries(t).filter(([r])=>!n.positions[r]));return Object.keys(o).length?this.savePatch({positions:o},n.revision):n}reset(t){if(this.storage.getItem(this.key)!==t)throw new Error("Layout conflict: another window changed the saved layout");let n=sn();return this.storage.setItem(this.key,JSON.stringify(n)),this.positions={},this.viewports={},this.revision=0,this.storedRevision=0,n}previewBackup(t){if(t.length>5*1024*1024)throw new Error("\u5907\u4EFD\u8D85\u8FC7 5 MB");return new e({getItem:()=>t,setItem(){}},this.key).loadStored()}importBackup(t,n){let o=this.previewBackup(t);if(this.storage.getItem(this.key)!==n)throw new Error("Layout conflict: another window changed the saved layout");let r=this.storedRevision??0;try{r=Math.max(r,this.loadStored().revision)}catch{}let i=r+1;return this.storage.setItem(this.key,JSON.stringify({...o,revision:i,positions:{},views:Object.fromEntries(Object.entries(o.views).map(([s,a])=>[s,{filters:a.filters}]))})),this.positions=o.positions,this.viewports=Object.fromEntries(Object.entries(o.views).filter(([,s])=>s.viewport).map(([s,a])=>[s,{viewport:a.viewport}])),this.storedRevision=i,this.revision++,this.load()}savePatch(t,n){let o=this.load(),r=t.settings!==void 0||t.collapsed!==void 0||Object.values(t.views??{}).some(a=>a.filters!==void 0);if(r&&o.revision!==n)throw new Error("Layout conflict: another window saved a newer layout");let i={...o.views};for(let[a,c]of Object.entries(t.views??{}))i[a]={...i[a],...c};let s={schemaVersion:1,revision:o.revision+1,positions:{...o.positions,...t.positions},collapsed:t.collapsed??o.collapsed,views:i,settings:{theme:ot,reducedMotion:!1,...o.settings,...t.settings}};if(el(s),r){let a={...s,revision:(this.storedRevision??0)+1,positions:{},views:Object.fromEntries(Object.entries(i).map(([c,l])=>[c,{filters:l.filters}]))};this.storage.setItem(this.key,JSON.stringify(a)),this.storedRevision=a.revision}return this.positions=s.positions,this.viewports=Object.fromEntries(Object.entries(i).filter(([,a])=>a.viewport).map(([a,c])=>[a,{viewport:c.viewport}])),this.revision=s.revision,s}};var be=Ve(require("react"),1);function tl({color:e,reduced:t,onColor:n,onReduced:o}){let[r,i]=(0,be.useState)(e),[s,a]=(0,be.useState)(!1),[c,l]=(0,be.useState)(t);(0,be.useEffect)(()=>l(t),[t]),(0,be.useEffect)(()=>{i(e),a(!1)},[e]);let d=()=>{let f=Dn(r);a(!f),f&&n(f)};return be.default.createElement("details",{className:"wg-theme"},be.default.createElement("summary",null,"\u4E3B\u9898\u4E0E\u52A8\u6001\u6548\u679C"),be.default.createElement("div",{className:"wg-theme-controls"},be.default.createElement("label",null,"\u4E3B\u9898\u8272"," ",be.default.createElement("input",{type:"color","aria-label":"\u4E3B\u9898\u8272",value:e,onChange:f=>n(f.target.value)})),be.default.createElement("input",{"aria-label":"\u4E3B\u9898 HEX",value:r,onChange:f=>i(f.target.value),onBlur:d,onKeyDown:f=>{f.key==="Enter"&&d()},"aria-invalid":s}),be.default.createElement("button",{onClick:d},"\u5E94\u7528\u989C\u8272"),["#6aabff","#c084fc","#2dd4bf","#fb923c"].map(f=>be.default.createElement("button",{key:f,"aria-label":"\u914D\u8272 "+f,onClick:()=>n(f),style:{borderColor:f}},"\u25CF")),be.default.createElement("button",{onClick:()=>n(ot)},"\u6062\u590D\u9ED8\u8BA4\u8272"),s&&be.default.createElement("span",{role:"alert"},"\u8BF7\u8F93\u5165\u6709\u6548\u7684 HEX \u8272\u503C\uFF0C\u4F8B\u5982 #6aabff"),be.default.createElement("label",{className:"wg-check"},be.default.createElement("input",{type:"checkbox",checked:c,onChange:f=>{l(f.target.checked),o(f.target.checked)}}),"\u51CF\u5C11\u52A8\u6001\u6548\u679C\uFF08\u4E5F\u9075\u5FAA\u7CFB\u7EDF\u8BBE\u7F6E\uFF09")))}var ge=require("react");var Ro=.86*1.25,Wo=1.25,mt=1.2,yt=e=>Math.max(-99800,Math.min(99800,e)),On=(e,t)=>JSON.stringify([e,t]),qo=class{bodies=new Map;links=[];active=!1;reduced=!1;contactScale=Wo;dragging;mode="elastic";idle=0;hardening=mt;quiet=0;recovery;inputs=new Map;groups=[];groupIndex=new Map;ordered=[];originals=new Map;sync(t,n,o=!1,r){let i=new Set(this.bodies.keys()),s=new Set(t.map(y=>y.id)),a=new Map(t.map(y=>[y.id,y])),c=new Map(n.map(y=>[y.target,y.source])),l=i.size!==s.size;for(let y of i)s.has(y)||(this.bodies.delete(y),this.inputs.delete(y),l=!0);let d=new Set;for(let y of t){let{offset:w,radius:g}=ht(y.data.kind),v=yt(y.position.x)+w.x,m=yt(y.position.y)+w.y,x=this.bodies.get(y.id),S=this.inputs.get(y.id),E=o||!r?.has(y.position)&&(!S||Math.hypot(S.x-y.position.x,S.y-y.position.y)>.1);this.inputs.set(y.id,{...y.position}),x?E&&!x.pin&&Math.hypot(x.x-v,x.y-m)>.1&&(Object.assign(x,{x:v,y:m,vx:0,vy:0}),delete x.opening,l=!0,d.add(y.id)):(this.bodies.set(y.id,{id:y.id,x:v,y:m,vx:0,vy:0,radius:g,offset:w}),l=!0)}let f=new Map(this.links.map(y=>[On(y.source,y.target),y]));this.links=n.filter(y=>s.has(y.source)&&s.has(y.target)).map(y=>{let w=f.get(On(y.source,y.target));if(w&&!o&&!d.has(y.source)&&!d.has(y.target))return w;let g=this.bodies.get(y.source),v=this.bodies.get(y.target);return{...y,restLength:Math.hypot(v.x-g.x,v.y-g.y),restVector:{x:v.x-g.x,y:v.y-g.y},stiffness:1}}),(this.links.length!==f.size||this.links.some(y=>!f.has(On(y.source,y.target))))&&(l=!0);let u=new Set,p=y=>{if(u.has(y))return;u.add(y);let w=c.get(y);if(w&&s.has(w)&&p(w),i.has(y)||!i.size||this.reduced||o)return;let g=this.bodies.get(y),v=w?this.bodies.get(w):void 0,m=w?a.get(w):void 0;if(!v||!m)return;let x=g.x-m.position.x-v.offset.x,S=g.y-m.position.y-v.offset.y,E=Math.hypot(x,S),N=Math.min(1,(v.radius+g.radius+2)*Wo/(E||1));g.opening={parent:v.id,dx:x,dy:S,elapsed:0,start:N},g.x=v.x+x*N,g.y=v.y+S*N};for(let y of s)p(y);let h=new Map;for(let y of this.links)for(let[w,g]of[[y.source,y.target],[y.target,y.source]])h.has(w)||h.set(w,[]),h.get(w).push(g);this.groups=[],this.groupIndex.clear();for(let y of s)if(!this.groupIndex.has(y)){let w=this.groups.length,g=[],v=[y];this.groupIndex.set(y,w);for(let m=0;m<v.length;m++){let x=v[m];g.push(this.bodies.get(x));for(let S of h.get(x)??[])this.groupIndex.has(S)||(this.groupIndex.set(S,w),v.push(S))}this.groups.push(g)}return this.dragging&&!s.has(this.dragging)&&(this.dragging=void 0,this.mode="elastic",this.hardening=0),this.recovery&&!s.has(this.recovery.id)&&(this.recovery=void 0),o&&(this.recovery=void 0,this.hardening=mt,this.originals.clear()),this.orderLinks(),l&&this.wake(),l}wake(){this.active=!0,this.quiet=0}pin(t,n){let o=this.bodies.get(t);o&&(o.pin={x:yt(n.x)+o.offset.x,y:yt(n.y)+o.offset.y},o.x=o.pin.x,o.y=o.pin.y,o.vx=o.vy=0,delete o.opening,this.orderLinks(),this.wake())}unpin(t){let n=this.bodies.get(t);n?.pin&&(delete n.pin,this.orderLinks(),this.wake())}capture(){this.originals.clear();for(let t of this.links){let n=this.bodies.get(t.source),o=this.bodies.get(t.target);t.restVector={x:o.x-n.x,y:o.y-n.y},t.restLength=Math.hypot(t.restVector.x,t.restVector.y),this.originals.set(On(t.source,t.target),{...t.restVector})}}beginDrag(t,n="elastic"){if(this.bodies.has(t)){this.dragging=t,this.mode=n,this.recovery=void 0,this.idle=0,this.hardening=0,this.contactScale=Ro,this.capture(),this.orderLinks();for(let o of this.bodies.values())o.vx=o.vy=0;this.wake()}}drag(t,n,o="elastic"){let r=this.bodies.get(t);if(!r)return;this.dragging!==t?this.beginDrag(t,o):this.mode!==o&&(this.mode=o,this.capture(),this.orderLinks());let i=yt(n.x)+r.offset.x,s=yt(n.y)+r.offset.y,a=i-r.x,c=s-r.y;Math.hypot(a,c)>.05&&(this.idle=0,this.hardening=0,this.contactScale=Ro),delete r.opening;let l=Math.max(1,Math.ceil(Math.hypot(a,c)/18)),d={x:r.x,y:r.y};for(let f=1;f<=l;f++)r.x=d.x+a*f/l,r.y=d.y+c*f/l,r.pin={x:r.x,y:r.y},this.contacts(!0);r.vx=r.vy=0,this.wake()}release(t){if(this.dragging===t){let n=this.bodies.get(t);if(n&&this.mode==="elastic"){this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0};let o=this.groupIndex.get(t);for(let r of this.links)if(this.groupIndex.get(r.source)===o){let i=this.bodies.get(r.source),s=this.bodies.get(r.target),a=this.originals.get(On(r.source,r.target))??r.restVector,c=s.x-i.x-a.x,l=s.y-i.y-a.y,d=.2*Math.min(1,Math.hypot(a.x,a.y)/(Math.hypot(c,l)||1));r.restVector={x:a.x+c*d,y:a.y+l*d},r.restLength=Math.hypot(r.restVector.x,r.restVector.y)}}else this.capture(),n&&(this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0});this.dragging=void 0,this.idle=0}this.unpin(t),this.orderLinks(),this.wake()}ropeState(t,n){let o=this.links.find(s=>s.source===t&&s.target===n),r=this.bodies.get(t),i=this.bodies.get(n);return{softness:1-this.hardening/mt,stretch:o&&r&&i?Math.max(0,Math.hypot(i.x-r.x,i.y-r.y)-o.restLength):0}}positions(){return Object.fromEntries([...this.bodies.values()].map(t=>[t.id,{x:t.x-t.offset.x,y:t.y-t.offset.y}]))}orderLinks(){this.ordered=[];let t=new Set,n=this.dragging??this.recovery?.id??[...this.bodies.values()].find(i=>i.pin)?.id,o=[...n?[n]:[],...this.bodies.keys()],r=new Map;for(let i of this.links)for(let s of[i.source,i.target])r.has(s)||r.set(s,[]),r.get(s).push(i);for(let i of o)if(!t.has(i)){let s=[i];t.add(i);for(let a=0;a<s.length;a++)for(let c of r.get(s[a])??[]){let l=s[a],d=c.source===l?c.target:c.source;t.has(d)||(t.add(d),s.push(d),this.ordered.push({link:c,from:l,to:d,sign:c.source===l?1:-1,rate:c.source===l?7:10}))}}}contacts(t=!1){let n=[...this.bodies.values()],o=106*Wo+8,r=new Map;for(let a of n){let c=Math.floor(a.x/o)+":"+Math.floor(a.y/o);r.has(c)||r.set(c,[]),r.get(c).push(a)}let i=new Set;if(this.mode!=="free")for(let a of n)(a.pin||a.id===this.recovery?.id)&&i.add(this.groupIndex.get(a.id));let s=0;for(let a=0;a<n.length;a++){let c=n[a],l=Math.floor(c.x/o),d=Math.floor(c.y/o);for(let f=l-1;f<=l+1;f++)for(let u=d-1;u<=d+1;u++)for(let p of r.get(f+":"+u)??[]){if(c.id>=p.id||c.pin&&p.pin)continue;let h=this.groupIndex.get(c.id),y=this.groupIndex.get(p.id),w=p.x-c.x,g=p.y-c.y,v=Math.hypot(w,g),m=(c.radius+p.radius+(h===y?2:4))*this.contactScale;if(v>=m)continue;let x=m-v;s=Math.max(s,x);let S=v>1e-6?w/v:Math.cos(a*2.39996),E=v>1e-6?g/v:Math.sin(a*2.39996),N=h!==y&&this.mode!=="free",z=N?i.has(h):!!c.pin||c.id===this.recovery?.id,P=N?i.has(y):!!p.pin||p.id===this.recovery?.id;if(z&&P)continue;let R=z||P?1:.5,T=(W,B,b)=>{for(let C of N?this.groups[B]:[W])C.x+=S*x*R*b,C.y+=E*x*R*b,!t&&!this.reduced&&!this.dragging&&x>2&&(C.vx+=S*b*Math.min(8,x*.1),C.vy+=E*b*Math.min(8,x*.1))};z||T(c,h,-1),P||T(p,y,1)}}return s}step(t){if(!this.active)return!1;let n=Math.min(Math.max(t,0),1/30),o=Math.max(1,Math.ceil(n*120)),r=n/o,i=this.positions();this.idle+=n,this.reduced?this.hardening=mt:(!this.dragging||this.idle>.12)&&(this.hardening=Math.min(mt,this.hardening+n)),this.contactScale=Ro+(Wo-Ro)*(this.hardening/mt),this.recovery&&(this.recovery.elapsed+=n);for(let c=0;c<o;c++){for(let f of this.bodies.values()){if(f.pin){f.x=f.pin.x,f.y=f.pin.y,f.vx=f.vy=0;continue}this.reduced&&(f.vx=f.vy=0),f.vx*=Math.exp(-12*r),f.vy*=Math.exp(-12*r),f.x+=f.vx*r,f.y+=f.vy*r,f.id===this.recovery?.id&&(f.x=this.recovery.point.x,f.y=this.recovery.point.y,f.vx=f.vy=0)}let l=this.mode!=="free"&&(!!this.dragging||!!this.recovery);for(let f of this.ordered){let{link:u,from:p,to:h,sign:y,rate:w}=f,g=this.bodies.get(p),v=this.bodies.get(h);if(this.mode==="free"&&(this.dragging||this.recovery)||g.opening||v.opening)continue;let m=Math.hypot(v.x-g.x,v.y-g.y);if(!l){let S=Math.max(280,u.restLength);if(m<=S||!m)continue;let E=(m-S)/m*(1-Math.exp(-5*r)),N=(v.x-g.x)*E,z=(v.y-g.y)*E;g.pin||(g.x+=N*.5,g.y+=z*.5),v.pin||(v.x-=N*.5,v.y-=z*.5);continue}if(this.dragging&&this.groupIndex.get(p)!==this.groupIndex.get(this.dragging)||v.pin||v.id===this.recovery?.id)continue;u.stiffness=.3+.7*this.hardening/mt;let x=1-Math.exp(-(this.reduced?35:w*(.55+u.stiffness))*r);v.x+=(g.x+u.restVector.x*y-v.x)*x,v.y+=(g.y+u.restVector.y*y-v.y)*x}for(let f of this.bodies.values())if(f.opening){let u=f.opening,p=this.bodies.get(u.parent);if(!p){delete f.opening;continue}u.elapsed+=r;let h=Math.min(1,u.elapsed/.24),y=u.start+(1-u.start)*(1-(1-h)**3);f.x=p.x+u.dx*y,f.y=p.y+u.dy*y,h===1&&delete f.opening}let d=0;for(let f=0;f<4;f++)d=Math.max(d,this.contacts());if(!l&&!this.dragging&&d>.1)for(let f of this.links){let u=this.bodies.get(f.source),p=this.bodies.get(f.target);f.restLength=Math.max(f.restLength,Math.hypot(p.x-u.x,p.y-u.y))}for(let f of this.bodies.values())f.pin||(f.x=yt(f.x-f.offset.x)+f.offset.x,f.y=yt(f.y-f.offset.y)+f.offset.y)}this.recovery&&(this.reduced||this.recovery.elapsed>2.4)&&(this.capture(),this.recovery=void 0,this.mode="elastic",this.orderLinks());let s=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.x-c.offset.x-i[c.id].x,c.y-c.offset.y-i[c.id].y))),a=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.vx,c.vy)));if(this.quiet=this.hardening>=mt&&!this.recovery&&![...this.bodies.values()].some(c=>c.opening)&&s<.035&&a<.2?this.quiet+n:0,this.quiet>.22){this.active=!1;for(let c of this.bodies.values())c.vx=c.vy=0}return this.active}};function nl(e,t,n){let[o,r]=(0,ge.useState)([]),[i,s]=(0,ge.useState)({}),a=(0,ge.useRef)(new qo),c=(0,ge.useRef)(),l=(0,ge.useRef)(0),d=(0,ge.useRef)(n),f=(0,ge.useRef)(),u=(0,ge.useRef)(),p=(0,ge.useRef)(!1),h=(0,ge.useRef)(new WeakSet);d.current=n;let y=(0,ge.useCallback)(()=>{let S=a.current.positions();for(let E of Object.values(S))h.current.add(E);d.current(S)},[]),w=(0,ge.useCallback)(()=>{let S=a.current.positions();s(Object.fromEntries(a.current.links.map(E=>[JSON.stringify([E.source,E.target]),a.current.ropeState(E.source,E.target)]))),r(E=>E.map(N=>{let z=S[N.id];return z&&(z.x!==N.position.x||z.y!==N.position.y)?{...N,position:z}:N}))},[]),g=(0,ge.useCallback)(()=>{if(c.current!==void 0)return;l.current=performance.now();let S=E=>{a.current.step((E-l.current)/1e3),l.current=E,w(),a.current.active?c.current=requestAnimationFrame(S):(c.current=void 0,y())};c.current=requestAnimationFrame(S)},[w,y]);(0,ge.useEffect)(()=>{a.current.reduced=t},[t]),(0,ge.useEffect)(()=>{let S=a.current.sync(e.nodes,e.edges,p.current,h.current);p.current=!1;let E=a.current.positions();r(N=>{let z=new Map(N.map(P=>[P.id,P]));return e.nodes.map(P=>({...z.get(P.id),...P,position:E[P.id]??P.position}))}),S&&g()},[e,g]),(0,ge.useEffect)(()=>()=>{c.current!==void 0&&cancelAnimationFrame(c.current)},[]);let v=(0,ge.useCallback)(S=>{if(u.current&&u.current!==f.current&&a.current.unpin(u.current),u.current=S,S&&!f.current){let E=a.current.positions()[S];E&&a.current.pin(S,E)}a.current.active&&g()},[g]),m=(0,ge.useCallback)((S,E,N="elastic")=>{v(),f.current=S,a.current.drag(S,E,N),w(),g()},[v,w,g]),x=(0,ge.useCallback)(S=>{a.current.release(S),f.current=void 0,y(),g()},[y,g]);return(0,ge.useEffect)(()=>{let S=N=>{let z=f.current;if(!z||N.key!=="Control")return;let P=a.current.positions()[z];P&&m(z,P,N.type==="keydown"?"free":"elastic")},E=()=>{f.current&&x(f.current)};return window.addEventListener("keydown",S),window.addEventListener("keyup",S),window.addEventListener("blur",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("keydown",S),window.removeEventListener("keyup",S),window.removeEventListener("blur",E),window.removeEventListener("pointercancel",E)}},[m,x]),{nodes:o,ropes:i,setNodes:r,drag:m,release:x,hover:v,world:a.current,forceNextSync:()=>{p.current=!0}}}var ol=Ve(require("react"),1);function rl({id:e,source:t,target:n,style:o,data:r,markerEnd:i}){let s=gi(t),a=gi(n);if(!s||!a)return null;let c=g=>{let v=ht(g.data.kind),m=g.internals.positionAbsolute;return{x:m.x+v.offset.x,y:m.y+v.offset.y,radius:v.radius}},l=Zc(c(s),c(a)),d=l.target.x-l.source.x,f=l.target.y-l.source.y,u=Math.hypot(d,f),p=Number(r?.softness??0),h=Math.min(48,u*.15)*p,y=(l.source.x+l.target.x)/2-(u?f/u:0)*h,w=(l.source.y+l.target.y)/2+(u?d/u:0)*h;return ol.default.createElement(nn,{id:e,path:`M ${l.source.x},${l.source.y} Q ${y},${w} ${l.target.x},${l.target.y}`,style:o,markerEnd:i})}var Ze=Ve(require("react"),1);function il(e){return[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(t=>t.segment)}function sl({value:e,onSave:t}){let[n,o]=(0,Ze.useState)(e);return(0,Ze.useEffect)(()=>o(e),[e]),Ze.default.createElement("form",{className:"wg-summary-editor",onSubmit:r=>{r.preventDefault(),t(n.trim())}},Ze.default.createElement("label",null,"\u624B\u52A8\u77ED\u6982\u62EC",Ze.default.createElement("textarea",{"aria-label":"\u624B\u52A8\u77ED\u6982\u62EC",value:n,onChange:r=>o(r.target.value),maxLength:4e3,placeholder:"\u5EFA\u8BAE 12\u201324 \u5B57\uFF1B\u7559\u7A7A\u4F7F\u7528\u63D2\u4EF6\u6458\u8981\u6216\u539F\u6807\u9898"})),Ze.default.createElement("p",{className:"wg-small-note"},il(n).length," \u4E2A\u5B57\u7B26 \xB7 \u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668"),Ze.default.createElement("button",null,"\u4FDD\u5B58\u6982\u62EC"))}var Ne=Ve(require("react"),1);function al({repository:e,snapshot:t,prepareImport:n,onImport:o,onError:r}){let[i,s]=(0,Ne.useState)(!1),[a,c]=(0,Ne.useState)(!1),[l,d]=(0,Ne.useState)();return Ne.default.createElement("div",{className:"wg-backup"},Ne.default.createElement("button",{onClick:()=>s(!i),"aria-expanded":i},"\u5907\u4EFD\u4E0E\u6062\u590D"),i&&Ne.default.createElement("div",{className:"wg-backup-panel",role:"region","aria-label":"\u5907\u4EFD\u4E0E\u6062\u590D"},Ne.default.createElement("p",null,"\u5907\u4EFD\u5305\u542B\u6982\u62EC\u3001\u7F6E\u9876\u3001\u4E3B\u9898\u3001\u4F7F\u7528\u8BB0\u5F55\u3001\u7B5B\u9009\u548C\u5F53\u524D\u5E03\u5C40\u3002"),Ne.default.createElement("button",{onClick:()=>{let f=URL.createObjectURL(new Blob([JSON.stringify(t(),null,2)],{type:"application/json"})),u=document.createElement("a");u.href=f,u.download="workspace-graph-backup.json",u.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},"\u5BFC\u51FA\u56FE\u8C31\u5907\u4EFD"),Ne.default.createElement("label",{className:"wg-backup-file"},"\u5BFC\u5165\u5907\u4EFD\uFF08JSON\uFF0C\u6700\u591A 5 MB\uFF09",Ne.default.createElement("input",{type:"file",accept:".json,application/json","aria-label":"\u9009\u62E9\u56FE\u8C31\u5907\u4EFD",disabled:a,onChange:async f=>{let u=f.target.files?.[0];if(f.target.value="",d(void 0),!!u){c(!0);try{if(u.size>5*1024*1024)throw new Error("\u5907\u4EFD\u8D85\u8FC7 5 MB");let p=await u.text(),h=e.previewBackup(p),y=await n();d({raw:p,doc:h,expected:y})}catch(p){r("\u65E0\u6CD5\u8BFB\u53D6\u5907\u4EFD\uFF1A"+String(p))}finally{c(!1)}}}})),l&&Ne.default.createElement("div",{role:"status"},Ne.default.createElement("p",null,"\u5C06\u66FF\u6362\u672C\u5730\u8BBE\u7F6E\uFF1A",Object.keys(l.doc.settings?.manualSummaries??{}).length," ","\u6761\u6982\u62EC\u3001",l.doc.settings?.pinned?.length??0," ","\u4E2A\u7F6E\u9876\u3002\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5F53\u524D\u5907\u4EFD\u3002\u5BFC\u5165\u7684\u4F4D\u7F6E\u4EC5\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559\u3002"),Ne.default.createElement("button",{disabled:a,onClick:async()=>{c(!0);try{await o(l.raw,l.expected),d(void 0)}catch(f){r("\u5BFC\u5165\u672A\u5B8C\u6210\uFF1A"+String(f))}finally{c(!1)}}},"\u786E\u8BA4\u5BFC\u5165\u5907\u4EFD"),Ne.default.createElement("button",{disabled:a,onClick:()=>d(void 0)},"\u53D6\u6D88\u5BFC\u5165"))))}var Ce=Ve(require("react"),1);function cl({rows:e,title:t,onLocate:n}){let[o,r]=(0,Ce.useState)(50),s=(0,Ce.useMemo)(()=>e.slice(0,o),[e,o]),a={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"};return Ce.default.createElement("section",{className:"wg-navigation","aria-label":"\u4F1A\u8BDD\u5BFC\u822A"},Ce.default.createElement("h2",null,t," ",Ce.default.createElement("span",null,e.length," \u4E2A\u4F1A\u8BDD")),!e.length&&Ce.default.createElement("p",null,"\u6CA1\u6709\u5339\u914D\u4F1A\u8BDD\uFF0C\u53EF\u8C03\u6574\u65F6\u95F4\u3001\u72B6\u6001\u6216\u641C\u7D22\u6761\u4EF6\u3002"),Ce.default.createElement("div",{className:"wg-result-list"},s.map(c=>Ce.default.createElement("button",{key:c.id,"aria-label":"\u5B9A\u4F4D "+c.data.title,onClick:()=>n(c.data.entityId)},Ce.default.createElement("strong",null,c.data.pinned?"\u2605 ":"",c.data.title),Ce.default.createElement("span",null,a[c.data.status],c.data.current?" \xB7 \u5F53\u524D":""),c.data.path&&Ce.default.createElement("small",null,c.data.path)))),e.length>o&&Ce.default.createElement("button",{onClick:()=>r(o+50)},"\u518D\u663E\u793A 50 \u6761\u7ED3\u679C"))}var ue=Ve(require("react"),1);function ll({workspaceId:e,workspaces:t,provider:n,snapshot:o,loading:r,refresh:i}){let[s,a]=(0,ue.useState)(),c=(0,ue.useRef)(void 0);(0,ue.useEffect)(()=>()=>c.current?.abort(),[]);let l=new Map(t.map(u=>[u.id,u.title])),d=o?.items.filter(u=>u.workspaceId===e)??[],f=o?.links.filter(u=>u.readerId===e||u.sourceId===e)??[];return ue.default.createElement("section",{className:"wg-memory-details","aria-label":"\u5DE5\u4F5C\u533A\u8BB0\u5FC6"},ue.default.createElement("div",{className:"wg-memory-heading"},ue.default.createElement("h3",null,"\u5DE5\u4F5C\u533A\u8BB0\u5FC6"),ue.default.createElement("button",{disabled:!n||r,onClick:i},"\u5237\u65B0\u8BB0\u5FC6")),n?o?o.status!=="available"?ue.default.createElement("p",{role:"status"},o.message):ue.default.createElement(ue.default.Fragment,null,ue.default.createElement("p",{className:"wg-small-note"},"\u7D2B\u8272\u7BAD\u5934\uFF1A\u8BFB\u53D6\u65B9 \u2192 \u8BB0\u5FC6\u6765\u6E90\u65B9\u3002\u53EA\u7EDF\u8BA1\u6309 ID \u6253\u5F00\u7684\u6B63\u6587\uFF0C\u7D22\u5F15\u6CE8\u5165\u4E0D\u8FDE\u7EBF\u3002\u5173\u7CFB\u6309\u73B0\u6709\u6765\u6E90\u4E0E\u7D2F\u8BA1\u8BB0\u5F55\u89E3\u6790\uFF0C\u65E0\u6CD5\u8FD8\u539F\u6765\u6E90\u53D8\u66F4\u524D\u7684\u5B8C\u6574\u5386\u53F2\u3002"),f.map(u=>ue.default.createElement("p",{className:"wg-memory-relation",key:JSON.stringify([u.readerId,u.sourceId])},l.get(u.readerId)," \u2192 ",l.get(u.sourceId)," \xB7"," ",u.count," \u6B21\u8BFB\u53D6 \xB7 ",u.memoryIds.length," \u6761\u8BB0\u5FC6")),!d.length&&ue.default.createElement("p",null,"\u6B64\u5DE5\u4F5C\u533A\u5C1A\u65E0\u53EF\u89C1\u8BB0\u5FC6\u3002"),d.map(u=>ue.default.createElement("article",{key:u.id,className:"wg-memory-item"},ue.default.createElement("strong",null,u.title),ue.default.createElement("p",null,u.description),ue.default.createElement("small",null,u.scope==="global"?"\u5168\u5C40\u5171\u4EAB":"\u5DE5\u4F5C\u533A"," \xB7 ",u.type," ","\xB7 \u6765\u6E90\uFF1A",u.sourceWorkspaceId?l.get(u.sourceWorkspaceId)??"\u672A\u77E5":"\u672A\u8BB0\u5F55"),ue.default.createElement("small",null,"\u6B63\u6587\u8BFB\u53D6 ",u.useCount," \u6B21",u.lastUsedAt?" \xB7 \u6700\u8FD1 "+new Date(u.lastUsedAt).toLocaleString():""),ue.default.createElement("button",{"aria-label":"\u67E5\u770B\u6B63\u6587\uFF1A"+u.title,onClick:async()=>{c.current?.abort();let p=new AbortController;c.current=p,a({id:u.id,text:"\u6B63\u5728\u8BFB\u53D6\u2026"});try{let h=await n.body(e,u.id,p.signal);p.signal.aborted||a({id:u.id,text:h})}catch{p.signal.aborted||a({id:u.id,text:"\u6B63\u6587\u6682\u4E0D\u53EF\u7528\uFF0C\u8BF7\u91CD\u8BD5\u3002"})}}},"\u67E5\u770B\u6B63\u6587"),s?.id===u.id&&ue.default.createElement("pre",{className:"wg-memory-body"},s.text)))):ue.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u2026"):ue.default.createElement("p",null,"\u6B64\u5BBF\u4E3B\u672A\u63D0\u4F9B\u8BB0\u5FC6\u8FDE\u63A5\u3002"))}function ul(e,t){let n=new Set(t.map(o=>o.id));return(e?.links??[]).filter(o=>n.has("workspace:"+o.readerId)&&n.has("workspace:"+o.sourceId))}var wt=require("react");function dl(e){let[t,n]=(0,wt.useState)(),[o,r]=(0,wt.useState)(!1),[i,s]=(0,wt.useState)(0),a=(0,wt.useCallback)(()=>s(c=>c+1),[]);return(0,wt.useEffect)(()=>{if(!e){n(void 0);return}let c=new AbortController,l,d=async()=>{r(!0);try{let f=await e.snapshot(c.signal);c.signal.aborted||n(f)}catch{c.signal.aborted||n({status:"error",message:"\u8BB0\u5FC6\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002",items:[],links:[]})}finally{c.signal.aborted||(r(!1),l=setTimeout(()=>{d()},15e3))}};return d(),()=>{c.abort(),clearTimeout(l)}},[e,i]),{snapshot:t,loading:o,refresh:a}}var Ln={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"},wi={running:"#6aabff",waiting:"#ffc56c",unread:"#5fe0b4",idle:"#9aaac5",unknown:"#748099"};function ly({data:e,selected:t}){let n=e.kind==="workspace";return _.default.createElement("div",{className:"wg-bubble "+(n?"is-workspace":"is-session")+" is-status-"+e.status+(t?" is-selected":"")+(e.collapsed===!1?" is-expanded":"")+(e.current?" is-current":"")+(e.working?" is-working":"")+(e.archived?" is-archived":""),style:{"--bubble-color":wi[e.status]},title:e.title+(e.path?" \xB7 "+e.path:"")},_.default.createElement(nt,{type:"target",position:Z.Top,isConnectable:!1}),_.default.createElement("div",{className:"wg-orb"},_.default.createElement("span",{className:"wg-orb-symbol"},n?"\u25C8":"\u2726"),n&&_.default.createElement("span",{className:"wg-orb-count"},e.total," \u4E2A\u4F1A\u8BDD"),n&&!!e.childWorkspaceCount&&_.default.createElement("span",{className:"wg-orb-count"},e.childWorkspaceCount," \u4E2A\u5B50\u5DE5\u4F5C\u533A")),_.default.createElement("div",{className:"wg-node-title"},e.title),_.default.createElement("div",{className:"wg-node-badges"},e.current&&_.default.createElement("span",null,"\u5F53\u524D"),e.working&&_.default.createElement("strong",null,"\u25B6 \u5DE5\u4F5C\u4E2D"),e.parentWorkspaceId&&_.default.createElement("span",null,"\u5B50\u5DE5\u4F5C\u533A"),e.parentSessionId&&_.default.createElement("span",null,"\u5206\u652F"),e.context&&_.default.createElement("span",null,"\u6765\u6E90"),e.outsideFilters&&_.default.createElement("span",null,e.current||e.working||e.status==="waiting"?"\u7B5B\u9009\u5916\u6D3B\u52A8":"\u4E34\u65F6\u5B9A\u4F4D")),!n&&_.default.createElement("div",{className:"wg-activity"},e.pinned?"\u2605 ":"",e.recency&&$o[e.recency]," \xB7"," ",e.frequency&&Bo[e.frequency]),_.default.createElement("div",{className:"wg-node-meta"},_.default.createElement("i",null),n?e.collapsed?"\u5DF2\u6536\u8D77":"\u5DE5\u4F5C\u533A":e.archived?"\u5DF2\u5F52\u6863":Ln[e.status]),_.default.createElement(nt,{type:"source",position:Z.Bottom,isConnectable:!1}),!n&&_.default.createElement(_.default.Fragment,null,_.default.createElement(nt,{id:"branch-source",type:"source",position:Z.Top,isConnectable:!1}),_.default.createElement(nt,{id:"branch-target",type:"target",position:Z.Bottom,isConnectable:!1})))}var uy={bubble:_.default.memo(ly)},dy={rope:_.default.memo(rl)};function fy(e){return(0,_.useState)(()=>{try{return{layout:e.load(),error:""}}catch(t){return{layout:sn(),error:"\u65E0\u6CD5\u8BFB\u53D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF1A"+String(t)}}})[0]}function fl(e){return _.default.createElement(pi,null,_.default.createElement(py,{...e}))}function py({catalog:e,memoryProvider:t,actions:n,repository:o,demo:r,access:i}){let s=dl(t),a=fy(o),[c,l]=(0,_.useState)(a.layout),d=(0,_.useRef)(c),[f,u]=(0,_.useState)(a.error),[p,h]=(0,_.useState)(!1),[y,w]=(0,_.useState)(""),[g,v]=(0,_.useState)(()=>({...on,...a.layout.views.all?.filters})),[m,x]=(0,_.useState)(),[S,E]=(0,_.useState)(()=>new Set),[N,z]=(0,_.useState)({}),[P,R]=(0,_.useState)(!0),[T,W]=(0,_.useState)(),[B,b]=(0,_.useState)(),[C,k]=(0,_.useState)(!1),[I,D]=(0,_.useState)(),[A,F]=(0,_.useState)(!1),H=(0,_.useRef)(),[X,j]=(0,_.useState)(),[Y,Q]=(0,_.useState)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),re=!!c.settings?.reducedMotion||Y,[G,$]=(0,_.useState)(Date.now),V=Pn(),J=(0,_.useRef)(null),ne=(0,_.useRef)(!1),U=(0,_.useCallback)(()=>{let M=J.current;if(!M||!V.getNodes().length)return;let q=M.getBoundingClientRect(),ee=M.querySelector(".wg-dock")?.getBoundingClientRect(),ce=q.width>850?(ee?.width??0)+45:20,me=q.width<=850?(ee?.height??0)+35:35,Tn=Math.max(180,q.width-ce-35),$n=Math.max(120,q.height-me-40),st=V.getNodesBounds(V.getNodes()),kt=Math.max(.1,Math.min(1,Tn/(st.width+100),$n/(st.height+100)));V.setViewport({x:ce+(Tn-st.width*kt)/2-st.x*kt,y:20+($n-st.height*kt)/2-st.y*kt,zoom:kt})},[V]),K=(0,_.useRef)(!0),oe=(0,_.useRef)(Promise.resolve()),te=(0,_.useRef)(!!a.error),ae=(0,_.useRef)(0),ye=(0,_.useRef)(0),Me=(0,_.useRef)(),_e=(0,_.useRef)(),we=(0,_.useRef)(g);we.current=g;let de=(0,_.useMemo)(()=>Ho(e,g,c,N,S,G,B),[e,g,c,N,S,G,B]),He=(0,_.useMemo)(()=>Ho(e,Oo,{...sn(),settings:c.settings},{},new Set,G).matches,[e,c.settings,G]),Ge=(0,_.useMemo)(()=>Object.fromEntries(["waiting","running","unread"].map(M=>[M,He.filter(q=>q.data.status===M).length])),[He]),Ue=(0,_.useMemo)(()=>I?He.filter(M=>M.data.status===I):de.matches,[I,He,de.matches]),ve=(0,_.useCallback)(M=>{d.current=M,l(M)},[]),le=(0,_.useCallback)((M,q=!1)=>{te.current||(ae.current++,q&&ye.current++,oe.current=oe.current.then(async()=>{if(!K.current||te.current)return;let ee=()=>{if(!K.current||te.current)return;let ce=d.current.revision,me=q?o.initializePositions(M.positions??{}):o.savePatch(M,ce);ve(me),w(M.settings?"\u8BBE\u7F6E\u5DF2\u4FDD\u5B58":"\u5E03\u5C40\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559")};navigator.locks?await navigator.locks.request(o.key,ee):ee()}).catch(ee=>{te.current=!0,K.current&&u("\u5E03\u5C40\u672A\u4FDD\u5B58\uFF1A"+String(ee))}).finally(()=>{ae.current--,q&&ye.current--}))},[o,ve]),xe=nl(de,re,M=>{let q=d.current.positions;Object.entries(M).some(([ce,me])=>!q[ce]||Math.hypot(me.x-q[ce].x,me.y-q[ce].y)>.1)&&le({positions:Lo(e,q,M)})}),{nodes:Se,setNodes:bt}=xe,rt=(0,_.useRef)();(0,_.useEffect)(()=>{let M=Se.find(q=>q.id===rt.current);M&&(rt.current=void 0,V.fitView({nodes:[M],padding:.8,maxZoom:1}))},[Se,V]);let Xo=M=>{H.current??=V.getViewport(),rt.current="session:"+M,b(M),x("session:"+M);let q=Se.find(ee=>ee.id==="session:"+M);q&&(rt.current=void 0,V.fitView({nodes:[q],padding:.8,maxZoom:1}))},Yo=(0,_.useMemo)(()=>[...de.edges.map(M=>({...M,type:"rope",data:xe.ropes[JSON.stringify([M.source,M.target])],style:{stroke:"#47719a",strokeWidth:1.25,opacity:.56}})),...ul(s.snapshot,de.nodes).map(M=>({id:"memory:"+JSON.stringify([M.readerId,M.sourceId]),source:"workspace:"+M.readerId,target:"workspace:"+M.sourceId,type:"rope",className:"wg-memory-edge",markerEnd:{type:ft.ArrowClosed,color:"#d6a2ff",width:18,height:18},data:{memory:!0,softness:1,label:`\u8BFB\u53D6\u8BB0\u5FC6 ${M.count} \u6B21`},style:{stroke:"#d6a2ff",strokeWidth:2.5,opacity:.95,strokeDasharray:"8 6"}}))],[de.edges,de.nodes,xe.ropes,s.snapshot]);(0,_.useEffect)(()=>{if(e.loading||te.current)return;let M=d.current.settings?.usage??{},q=e.sessions.map(ee=>ee.id);q.some(ee=>!Object.hasOwn(M,ee))&&le({settings:{usage:Uc(M,q)}})},[e.sessions,e.loading,c.settings?.usage,le]),(0,_.useEffect)(()=>{let M=setInterval(()=>$(Date.now()),6e4);return()=>clearInterval(M)},[]),(0,_.useEffect)(()=>{let M=window.matchMedia("(prefers-reduced-motion: reduce)"),q=()=>Q(M.matches);return M.addEventListener("change",q),()=>M.removeEventListener("change",q)},[]),(0,_.useEffect)(()=>(K.current=!0,()=>{K.current=!1,clearTimeout(_e.current),clearTimeout(Me.current)}),[]),(0,_.useEffect)(()=>{bt(M=>M.map(q=>({...q,selected:q.id===m})))},[m,bt]),(0,_.useEffect)(()=>{let M=q=>{if(q.key===o.key)try{let ee=o.load();ve(ee),w("\u8BBE\u7F6E\u5DF2\u4ECE\u53E6\u4E00\u7A97\u53E3\u540C\u6B65")}catch(ee){te.current=!0,u("\u65E0\u6CD5\u540C\u6B65\u5E03\u5C40\uFF1A"+String(ee))}};return window.addEventListener("storage",M),()=>window.removeEventListener("storage",M)},[o,ve]),(0,_.useEffect)(()=>{if(e.loading)return;let M=d.current.views[g.workspace]?.viewport,q=setTimeout(()=>{if(M)V.setViewport(M);else{let ee=e.currentSessionId??e.currentSessionIds?.[0],ce=!ne.current&&ee?V.getNodes().find(me=>me.id==="session:"+ee):void 0;if(ce){let{offset:me}=ht("session");V.setCenter(ce.position.x+me.x,ce.position.y+me.y,{zoom:1})}else U()}ne.current=!0},60);return()=>clearTimeout(q)},[g.workspace,e.loading,V,U]),(0,_.useEffect)(()=>{if(e.loading||te.current)return;let M=Object.entries(To(e,d.current.positions)).filter(([q])=>!d.current.positions[q]);M.length&&le({positions:Object.fromEntries(M)},!0)},[e.loading,de,le]),(0,_.useEffect)(()=>{if(!y)return;let M=setTimeout(()=>w(""),2400);return()=>clearTimeout(M)},[y]);let an=async M=>{h(!0),te.current||u("");try{if(clearTimeout(_e.current),le({views:{[we.current.workspace]:{viewport:V.getViewport()}}}),await oe.current,!K.current)return;await M()}catch(q){u("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF1A"+String(q))}finally{K.current&&h(!1)}},it=M=>{let q={...we.current,...M};v(q),M.query===void 0&&le({views:{all:{filters:q}}})};(0,_.useEffect)(()=>(Me.current=setTimeout(()=>le({views:{all:{filters:we.current}}}),250),()=>clearTimeout(Me.current)),[g.query,le]);let cn=M=>{b(void 0),D(void 0),x(void 0),v({...M}),le({views:{all:{filters:{...M}}}})},Zo=M=>{clearTimeout(_e.current);let q=we.current.workspace;le({views:{[q]:{viewport:V.getViewport()},all:{...q==="all"?{viewport:V.getViewport()}:{},filters:{...we.current,workspace:M}}}}),v(ee=>({...ee,workspace:M})),x(void 0)},ie=de.nodes.find(M=>M.id===m),Go=()=>{xe.forceNextSync();let M=Ho(e,g,sn(),N,S),q=Object.fromEntries(Se.map(ee=>[ee.id,ee.position]));W(q),le({positions:Object.fromEntries(M.nodes.map(ee=>[ee.id,ee.position]))}),setTimeout(()=>V.fitView({padding:.12,maxZoom:1}),70)},ln=M=>an(async()=>{if(M.data.kind==="workspace"){M.data.virtual||await n.openWorkspace(M.data.entityId);return}if(M.data.archived)throw new Error("\u8BF7\u5148\u6062\u590D\u8FD9\u4E2A\u5F52\u6863\u4F1A\u8BDD");let q=M.data.entityId;le({settings:{usage:{...d.current.settings?.usage,[q]:jc(d.current.settings?.usage?.[q])}}}),await oe.current,K.current&&await n.openSession(q)}),Tt=g.query||!!g.statuses?.length||g.recency&&g.recency!=="all"||g.frequency&&g.frequency!=="all"||g.status!=="all"||g.kind!=="all"||g.workspace!=="all"||g.archived,vt=Qc(c.settings?.theme??ot);return _.default.createElement("section",{className:"wg-root"+(c.settings?.reducedMotion?" wg-reduced":""),style:{"--wg-workspace":vt.workspace,"--wg-expanded":vt.expanded,"--wg-session":vt.session,"--wg-session-text":vt.sessionText,"--wg-accent":vt.accent},"aria-label":"\u5DE5\u4F5C\u533A\u56FE\u8C31"},_.default.createElement("header",{className:"wg-header"},_.default.createElement("div",{className:"wg-brand"},_.default.createElement("span",{className:"wg-logo"},"\u25C8"),_.default.createElement("div",null,_.default.createElement("h1",null,"\u5DE5\u4F5C\u533A\u56FE\u8C31",_.default.createElement("span",null,"WORKSPACE ATLAS")),_.default.createElement("p",null,e.workspaces.length," \u4E2A\u5DE5\u4F5C\u533A \xB7 ",de.total," \u4E2A\u4F1A\u8BDD",r?" \xB7 \u6F14\u793A\u6570\u636E":"",t&&_.default.createElement("span",{className:"wg-memory-legend"}," ","\xB7 \u7D2B\u8272\u865A\u7EBF\uFF1A\u8BFB\u53D6\u65B9 \u2192 \u8BB0\u5FC6\u6765\u6E90\u65B9\uFF08",s.snapshot?.links.length??0,"\uFF09")))),_.default.createElement("div",{className:"wg-top-actions"},_.default.createElement("button",{"aria-pressed":C,onClick:()=>k(!C)},C?"\u56FE\u8C31\u89C6\u56FE":"\u5217\u8868\u89C6\u56FE"),_.default.createElement(al,{repository:o,snapshot:()=>({...d.current,views:{...d.current.views,all:{...d.current.views.all,filters:we.current}},positions:{...d.current.positions,...Object.fromEntries(Se.map(M=>[M.id,M.position]))}}),prepareImport:async()=>(clearTimeout(Me.current),le({views:{all:{filters:we.current}}}),await oe.current,o.storage.getItem(o.key)),onError:u,onImport:async(M,q)=>{await oe.current;let ee=()=>{let ce=o.importBackup(M,q);xe.forceNextSync(),te.current=!1,ve(ce),u(""),v({...on,...ce.views.all?.filters}),b(void 0),x(void 0),w("\u5907\u4EFD\u5DF2\u5BFC\u5165");let me=ce.views[ce.views.all?.filters?.workspace??"all"]?.viewport;me&&V.setViewport(me)};navigator.locks?await navigator.locks.request(o.key,ee):ee()}}),_.default.createElement("label",{className:"wg-search"},_.default.createElement("span",null,"\u2315"),_.default.createElement("input",{"aria-label":"\u641C\u7D22\u5DE5\u4F5C\u533A\u548C\u4F1A\u8BDD",placeholder:"\u641C\u7D22\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u2026",value:g.query,onChange:M=>{D(void 0),it({query:M.target.value})}})),_.default.createElement("button",{onClick:U},"\u9002\u5E94\u753B\u5E03"),_.default.createElement("button",{onClick:Go},"\u91CD\u7F6E\u5E03\u5C40"))),(f||e.error)&&_.default.createElement("div",{className:"wg-alert",role:"alert"},_.default.createElement("span",null,f||e.error),te.current&&_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{onClick:()=>location.reload()},"\u91CD\u65B0\u8F7D\u5165"),_.default.createElement("button",{onClick:()=>{try{j({raw:o.storage.getItem(o.key)})}catch(M){u(String(M))}}},"\u6E05\u9664\u5168\u90E8\u672C\u5730\u6570\u636E"),_.default.createElement("button",{onClick:()=>{try{let M=o.storage.getItem(o.key),q=URL.createObjectURL(new Blob([M??""],{type:"text/plain"})),ee=document.createElement("a");ee.href=q,ee.download="workspace-graph-layout-backup.txt",ee.click(),setTimeout(()=>URL.revokeObjectURL(q),1e3)}catch(M){u(String(M))}}},"\u5BFC\u51FA\u5DF2\u4FDD\u5B58\u539F\u6587")),_.default.createElement("button",{onClick:()=>{let M=new Blob([JSON.stringify({...d.current,positions:{...d.current.positions,...Object.fromEntries(Se.map(ce=>[ce.id,ce.position]))}},null,2)],{type:"application/json"}),q=URL.createObjectURL(M),ee=document.createElement("a");ee.href=q,ee.download="workspace-graph-layout.json",ee.click(),setTimeout(()=>URL.revokeObjectURL(q),1e3)}},"\u5BFC\u51FA\u5F53\u524D\u5E03\u5C40")),X&&_.default.createElement("div",{className:"wg-alert",role:"alert"},_.default.createElement("span",null,"\u8FD9\u4F1A\u6E05\u9664\u5168\u90E8\u56FE\u8C31\u672C\u5730\u6570\u636E\uFF0C\u5305\u62EC\u624B\u52A8\u6982\u62EC\u3001\u7F6E\u9876\u3001\u4E3B\u9898\u3001\u4F7F\u7528\u8BB0\u5F55\u3001\u7B5B\u9009\u548C\u5E03\u5C40\u3002\u8BF7\u5148\u5BFC\u51FA\u5907\u4EFD\u3002"),_.default.createElement("button",{onClick:()=>{try{let M=o.reset(X.raw);te.current=!1,ve(M),u(""),v(on),j(void 0)}catch(M){u("\u65E0\u6CD5\u91CD\u7F6E\uFF1A"+String(M))}}},"\u786E\u8BA4\u6E05\u9664\u5168\u90E8\u6570\u636E"),_.default.createElement("button",{onClick:()=>j(void 0)},"\u53D6\u6D88")),r&&_.default.createElement("div",{className:"wg-demo-label"},"\u4EA4\u4E92\u6F14\u793A \xB7 \u6570\u636E\u4EC5\u7528\u4E8E\u9884\u89C8"),_.default.createElement("div",{className:"wg-canvas"+(A?" wg-compact":"")+(C?" wg-list-view":"")+(ie?" wg-has-details":""),ref:J,onKeyDown:M=>{if(M.key!=="Enter"&&M.key!==" ")return;let q=M.target.closest(".react-flow__node")?.getAttribute("data-id"),ee=Se.find(ce=>ce.id===q);ee?.data.kind==="workspace"&&(M.preventDefault(),x(ee.id),E(ce=>{let me=new Set(ce);return me.has(ee.data.entityId)?me.delete(ee.data.entityId):me.add(ee.data.entityId),me}))}},_.default.createElement(Fc,{nodes:Se,edges:Yo,nodeTypes:uy,edgeTypes:dy,onNodesChange:M=>bt(q=>di(M,q)),onNodeDragStart:(M,q)=>{xe.drag(q.id,q.position,M.ctrlKey?"free":"elastic")},onNodeDrag:(M,q)=>xe.drag(q.id,q.position,M.ctrlKey?"free":"elastic"),onNodeDragStop:(M,q)=>{xe.drag(q.id,q.position,M.ctrlKey?"free":"elastic"),xe.release(q.id)},autoPanOnNodeFocus:!1,autoPanOnNodeDrag:!1,zoomOnDoubleClick:!1,nodeDragThreshold:5,onNodeClick:(M,q)=>{x(q.id),q.data.kind==="workspace"&&E(ee=>{let ce=new Set(ee);return ce.has(q.data.entityId)?ce.delete(q.data.entityId):ce.add(q.data.entityId),ce})},onNodeDoubleClick:(M,q)=>{ln(q)},onPaneClick:()=>x(void 0),onMoveEnd:(M,q)=>{F(q.zoom<.55),clearTimeout(_e.current);let ee=we.current.workspace;_e.current=setTimeout(()=>le({views:{[ee]:{viewport:q}}}),180)},minZoom:.1,maxZoom:3,nodesConnectable:!1,edgesReconnectable:!1,deleteKeyCode:null,selectionOnDrag:!1,multiSelectionKeyCode:null,selectionKeyCode:null,proOptions:{hideAttribution:!1},defaultViewport:c.views[g.workspace]?.viewport,onViewportChange:M=>F(M.zoom<.55)},_.default.createElement(Wc,{variant:Xe.Dots,gap:26,size:1,color:"#284061"}),_.default.createElement(Xc,{position:"bottom-right",showInteractive:!1})),_.default.createElement("div",{className:"wg-attention","aria-label":"\u5168\u5C40\u4F1A\u8BDD\u72B6\u6001"},_.default.createElement("div",{className:"wg-canvas-hint"},"\u62D6\u52A8\u67D4\u6027\u7275\u5F15 \xB7 Ctrl \u81EA\u7531\u62D6\u52A8 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53CC\u51FB\u6253\u5F00"),["waiting","running","unread"].map(M=>_.default.createElement("button",{key:M,"aria-pressed":I===M,onClick:()=>D(I===M?void 0:M)},Ln[M]," ",Ge[M]??0)),I&&_.default.createElement("button",{onClick:()=>D(void 0)},"\u8FD4\u56DE\u5168\u90E8\u4F1A\u8BDD"),H.current&&_.default.createElement("button",{onClick:()=>{V.setViewport(H.current),H.current=void 0,b(void 0),x(void 0)}},"\u8FD4\u56DE\u5B9A\u4F4D\u524D\u89C6\u89D2")),(C||g.query.trim()||I)&&_.default.createElement(cl,{key:I??g.query,rows:Ue,title:I?"\u5168\u5C40"+Ln[I]:g.query.trim()?"\u641C\u7D22\u7ED3\u679C":"\u5339\u914D\u4F1A\u8BDD",onLocate:Xo}),e.loading&&_.default.createElement("div",{className:"wg-empty",role:"status"},_.default.createElement("span",{className:"wg-empty-orb"},"\u25C8"),_.default.createElement("h2",null,"\u6B63\u5728\u8FDE\u63A5\u5DE5\u4F5C\u533A"),_.default.createElement("p",null,"\u8BFB\u53D6 Harness \u7684\u5DE5\u4F5C\u533A\u4E0E\u4F1A\u8BDD\u2026")),!e.loading&&Tt&&de.matched===0&&_.default.createElement("div",{className:"wg-no-match",role:"status"},"\u6CA1\u6709\u5339\u914D\u7684\u4F1A\u8BDD\uFF1B\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u4F1A\u8BDD\u4ECD\u4FDD\u7559\u3002"),!e.loading&&!de.nodes.length&&_.default.createElement("div",{className:"wg-empty"},_.default.createElement("span",{className:"wg-empty-orb"},"\u2315"),_.default.createElement("h2",null,Tt?"\u6CA1\u6709\u5339\u914D\u7684\u8282\u70B9":"\u4ECE\u4E00\u4E2A\u5DE5\u4F5C\u533A\u5F00\u59CB"),_.default.createElement("p",null,Tt?"\u8C03\u6574\u5DE6\u4E0B\u89D2\u7684\u9009\u62E9\u6216\u6E05\u9664\u641C\u7D22\u3002":"\u5728 Harness \u4FA7\u680F\u6DFB\u52A0\u5DE5\u4F5C\u533A\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u663E\u793A\u3002"),Tt&&_.default.createElement("button",{onClick:()=>{cn(Oo)}},"\u6E05\u9664\u7B5B\u9009")),_.default.createElement("div",{className:"wg-dock "+(P?"":"is-folded")},_.default.createElement("button",{className:"wg-dock-heading",onClick:()=>R(!P),"aria-expanded":P},_.default.createElement("span",null,"\u2637\u3000\u89C6\u56FE\u4E0E\u7B5B\u9009"),_.default.createElement("span",null,P?"\u2212":"+")),P&&_.default.createElement(_.default.Fragment,null,_.default.createElement("label",{className:"wg-field"},_.default.createElement("span",null,"\u5DE5\u4F5C\u533A"),_.default.createElement("select",{"aria-label":"\u9009\u62E9\u5DE5\u4F5C\u533A",value:g.workspace,onChange:M=>Zo(M.target.value)},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u5DE5\u4F5C\u533A"),e.workspaces.map(M=>_.default.createElement("option",{key:M.id,value:M.id},M.title," \xB7"," ",M.path.split(/[\/]/).filter(Boolean).slice(-2).join("/"))),_.default.createElement("option",{value:"__ungrouped__"},"\u672A\u5206\u7EC4"))),_.default.createElement("div",{className:"wg-filter-row"},_.default.createElement("span",null,"\u72B6\u6001"),_.default.createElement("div",{className:"wg-chips"},["all","running","waiting","unread","idle","unknown"].map(M=>_.default.createElement("button",{key:M,className:(M==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(M))?"active":"","aria-pressed":M==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(M),onClick:()=>{let q=g.statuses??(g.status==="all"?[]:[g.status]);it({status:"all",statuses:M==="all"?[]:q.includes(M)?q.filter(ee=>ee!==M):[...q,M]})}},M!=="all"&&_.default.createElement("i",{style:{background:wi[M]}}),M==="all"?"\u5168\u90E8":Ln[M])))),_.default.createElement("div",{className:"wg-filter-row"},_.default.createElement("span",null,"\u663E\u793A"),_.default.createElement("div",{className:"wg-chips"},["all","workspace","session"].map(M=>_.default.createElement("button",{key:M,className:g.kind===M?"active":"","aria-pressed":g.kind===M,onClick:()=>it({kind:M})},M==="all"?"\u5168\u90E8":M==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD")),_.default.createElement("label",{className:"wg-check"},_.default.createElement("input",{type:"checkbox",checked:g.archived,onChange:M=>it({archived:M.target.checked})}),"\u5F52\u6863"))),_.default.createElement(tl,{color:c.settings?.theme??ot,reduced:!!c.settings?.reducedMotion,onColor:M=>le({settings:{theme:M}}),onReduced:M=>le({settings:{reducedMotion:M}})}),_.default.createElement("div",{className:"wg-dock-foot"},_.default.createElement("label",null,"\u65F6\u95F4"," ",_.default.createElement("select",{"aria-label":"\u65F6\u95F4\u5206\u7C7B",value:g.recency??"all",onChange:M=>it({recency:M.target.value})},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u65F6\u95F4"),Object.entries($o).map(([M,q])=>_.default.createElement("option",{value:M,key:M},q)))),_.default.createElement("label",null,"\u9891\u7387"," ",_.default.createElement("select",{"aria-label":"\u9891\u7387\u5206\u7C7B",value:g.frequency??"all",onChange:M=>it({frequency:M.target.value})},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u9891\u7387"),Object.entries(Bo).map(([M,q])=>_.default.createElement("option",{value:M,key:M},q)))),_.default.createElement("span",{className:"wg-small-note"},"\u5E38\u7528\u6309\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\u8BA1\u6570\uFF1B30 \u5929\u5185 5 \u6B21\uFF0C\u95F4\u9694 30 \u5206\u949F\u3002\u5386\u53F2\u8BB0\u5F55\u4ECE\u672C\u7248\u672C\u5F00\u59CB\u7D2F\u8BA1\u3002"),_.default.createElement("span",null,de.nodes.length," \u4E2A\u53EF\u89C1\u8282\u70B9",de.hidden>0?" \xB7 "+de.hidden+" \u4E2A\u4F1A\u8BDD\u672A\u5C55\u5F00":""),_.default.createElement("button",{onClick:()=>{cn(Oo)}},"\u6E05\u9664\u7B5B\u9009"),_.default.createElement("button",{onClick:()=>{E(new Set),z({}),cn(on)}},"\u6062\u590D\u9ED8\u8BA4\u89C6\u56FE")))),ie&&_.default.createElement("aside",{className:"wg-details","aria-label":"\u8282\u70B9\u8BE6\u60C5"},_.default.createElement("div",{className:"wg-detail-heading"},_.default.createElement("span",null,ie.data.kind==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD"),_.default.createElement("button",{"aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>x(void 0)},"\xD7")),_.default.createElement("h2",null,ie.data.title),_.default.createElement("div",{className:"wg-status",style:{color:wi[ie.data.status]}},"\u25CF ",Ln[ie.data.status],ie.data.archived?" \xB7 \u5DF2\u5F52\u6863":""),_.default.createElement("dl",null,ie.data.kind==="session"&&_.default.createElement(_.default.Fragment,null,_.default.createElement("dt",null,"\u5206\u7C7B"),_.default.createElement("dd",null,ie.data.recency&&$o[ie.data.recency]," ","\xB7"," ",ie.data.frequency&&Bo[ie.data.frequency]),_.default.createElement("dt",null,"\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\uFF08\u8FD1 30 \u5929\uFF09"),_.default.createElement("dd",null,c.settings?.usage?.[ie.data.entityId]?.visits.filter(M=>M>=Date.now()-30*864e5).length??"\u8BB0\u5F55\u79EF\u7D2F\u4E2D")),_.default.createElement("dt",null,"\u8DEF\u5F84"),_.default.createElement("dd",null,ie.data.path||"\u672A\u8BB0\u5F55\u76EE\u5F55"),_.default.createElement("dt",null,"\u6807\u8BC6"),_.default.createElement("dd",null,ie.data.entityId),ie.data.updatedAt&&_.default.createElement(_.default.Fragment,null,_.default.createElement("dt",null,"\u6700\u8FD1\u66F4\u65B0"),_.default.createElement("dd",null,new Date(ie.data.updatedAt).toLocaleString()))),ie.data.kind==="workspace"&&_.default.createElement(ll,{key:"memory:"+ie.id,workspaceId:ie.data.entityId,workspaces:e.workspaces,provider:t,snapshot:s.snapshot,loading:s.loading,refresh:s.refresh}),ie.data.kind==="session"&&_.default.createElement("button",{onClick:()=>{let M=d.current.settings?.pinned??[];le({settings:{pinned:M.includes(ie.data.entityId)?M.filter(q=>q!==ie.data.entityId):[...M,ie.data.entityId]}})}},ie.data.pinned?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876\u4F1A\u8BDD"),ie.data.kind==="session"&&_.default.createElement(sl,{key:"summary:"+ie.id,value:c.settings?.manualSummaries?.[ie.data.entityId]??"",onSave:M=>le({settings:{manualSummaries:{...d.current.settings?.manualSummaries,[ie.data.entityId]:M}}})}),ie.data.kind==="workspace"?_.default.createElement(gy,{key:ie.id,node:ie,actions:n,access:i,busy:p,perform:an,open:()=>{ln(ie)},collapse:()=>E(M=>{let q=new Set(M);return q.has(ie.data.entityId)?q.delete(ie.data.entityId):q.add(ie.data.entityId),q}),more:()=>z(M=>({...M,[ie.data.entityId]:(M[ie.data.entityId]??20)+20}))}):_.default.createElement(hy,{key:ie.id,node:ie,actions:n,access:i,busy:p,perform:an,open:()=>{ln(ie)}})),_.default.createElement("div",{className:"wg-save-status",role:"status"},y),T&&_.default.createElement("div",{className:"wg-undo"},"\u5DF2\u91CD\u6392\u5F53\u524D\u89C6\u56FE",_.default.createElement("button",{onClick:()=>{xe.forceNextSync(),le({positions:T}),W(void 0)}},"\u64A4\u9500"),_.default.createElement("button",{onClick:()=>W(void 0),"aria-label":"\u5173\u95ED\u64A4\u9500\u63D0\u793A"},"\xD7"))))}function gy({node:e,actions:t,access:n,busy:o,perform:r,open:i,collapse:s,more:a}){let[c,l]=(0,_.useState)(!1),[d,f]=(0,_.useState)(e.data.title),u=n?.useCreate()??!0,p=n?.useWorkspace(e.data.entityId,"workspace/rename")??!0;return _.default.createElement("div",{className:"wg-detail-actions"},!e.data.virtual&&_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{className:"wg-primary",disabled:o||!u,onClick:i},"\u6253\u5F00\u5DE5\u4F5C\u533A \u2197"),_.default.createElement("button",{disabled:o||!u,onClick:()=>{r(()=>t.newSession(e.data.entityId))}},"\u65B0\u5EFA\u4F1A\u8BDD"),p&&_.default.createElement("button",{disabled:o,onClick:()=>l(!c)},"\u91CD\u547D\u540D\u5DE5\u4F5C\u533A")),c&&_.default.createElement("form",{onSubmit:h=>{h.preventDefault(),d.trim()&&r(async()=>{await t.renameWorkspace(e.data.entityId,d.trim()),l(!1)})}},_.default.createElement("input",{"aria-label":"\u5DE5\u4F5C\u533A\u65B0\u540D\u79F0",value:d,onChange:h=>f(h.target.value)}),_.default.createElement("button",{disabled:o||!d.trim()},"\u4FDD\u5B58\u540D\u79F0")),_.default.createElement("button",{onClick:s},e.data.collapsed?"\u5C55\u5F00\u4F1A\u8BDD":"\u6536\u8D77\u4F1A\u8BDD"),!e.data.collapsed&&_.default.createElement("button",{onClick:a},"\u518D\u663E\u793A 20 \u4E2A\u4F1A\u8BDD"))}function hy({node:e,actions:t,access:n,busy:o,perform:r,open:i}){let s=n?.useSession(e.data.entityId,"workspace/archiveSession")??!0,a=n?.useSession(e.data.entityId,"workspace/unarchiveSession")??!0;return _.default.createElement("div",{className:"wg-detail-actions"},e.data.archived?_.default.createElement("button",{className:"wg-primary",disabled:o||!a,onClick:()=>{r(()=>t.restore(e.data.entityId))}},"\u6062\u590D\u4F1A\u8BDD"):_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{className:"wg-primary",disabled:o,onClick:i},"\u6253\u5F00\u4F1A\u8BDD \u2197"),_.default.createElement("button",{disabled:o||!s,onClick:()=>{r(()=>t.archive(e.data.entityId))}},"\u5F52\u6863\u4F1A\u8BDD")),_.default.createElement("p",{className:"wg-small-note"},"\u4F4D\u7F6E\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559\uFF0C\u91CD\u542F\u6062\u590D\u9ED8\u8BA4\u3002\u6D3B\u52A8\u4F1A\u8BDD\u4FDD\u7559\u663E\u793A\u3002\u62D6\u52A8\u4E0D\u4F1A\u6539\u53D8\u4F1A\u8BDD\u6240\u5C5E\u3002"))}function pl(e,t,n){let o=e,r=t,i=n,s=Object.values(r?.byId??{}).filter(c=>(c.retainedBy?.mainView??0)>0).map(c=>c.id);return{currentSessionId:s[0],currentSessionIds:s,loading:o?.phase!=="ready"||r?.phase!=="ready",error:o?.error?.message,workspaces:(o?.items??[]).map(c=>({id:c.workspaceId,title:c.title,path:c.path,sessionIds:c.sessionIds})),archivedSessionIds:[...o?.archivedSessionIds??[]],sessions:[...new Set([...r?.ids??[],...s])].flatMap(c=>{let l=r?.byId[c];if(!l)return[];let d=i?.get(c);return[{id:c,title:l.title||l.displayTitle||"\u672A\u547D\u540D\u4F1A\u8BDD",cwd:l.cwd,parentId:l.parentId,updatedAt:l.updatedAt,running:r?.phase==="ready"?d?d.running:l.running:void 0,pending:!!d?.pendingInteraction,unread:d?.completionUnread,blank:l.blank,origin:l.origin}]})}}var gl="/api",hl="workspaceGraphMemory";var ml=`.wg-root {
  height: 100%;
  min-height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #080f1e;
  color: #e6edf9;
  font:
    14px/1.5 -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Microsoft YaHei",
    sans-serif;
  isolation: isolate;
  --wg-line: rgba(154, 186, 229, 0.14);
}
.wg-root * {
  box-sizing: border-box;
}
.wg-root button,
.wg-root input,
.wg-root select {
  font: inherit;
}
.wg-root button {
  cursor: pointer;
  border: 1px solid var(--wg-line);
  background: #16243b;
  color: #dce8fa;
  border-radius: 9px;
  padding: 7px 12px;
  transition:
    background 0.15s,
    border-color 0.15s;
}
.wg-root button:hover {
  background: #20344f;
  border-color: #5380b2;
}
.wg-root button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.wg-root button:focus-visible,
.wg-root input:focus-visible,
.wg-root select:focus-visible {
  outline: 2px solid #8bb7ff;
  outline-offset: 3px;
}
.wg-root input,
.wg-root select {
  color: #e3ebf7;
  background: #101b2e;
  border: 1px solid var(--wg-line);
  border-radius: 8px;
  padding: 8px 10px;
}
.wg-header {
  flex-shrink: 0;
  z-index: 5;
  min-height: 98px;
  padding: 23px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--wg-line);
  background: #0c1425;
}
.wg-brand {
  display: flex;
  align-items: center;
  gap: 13px;
  white-space: nowrap;
}
.wg-logo {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #365b8a;
  border-radius: 13px;
  color: #a9c8ff;
  background: linear-gradient(140deg, #1f385c, #18283f);
  font-size: 27px;
}
.wg-header h1 {
  font-size: 19px;
  margin: 0;
  font-weight: 650;
  letter-spacing: 1px;
}
.wg-header h1 span {
  font-size: 9px;
  letter-spacing: 2.2px;
  display: block;
  color: #7089b0;
  margin-top: 2px;
}
.wg-header p {
  font-size: 11px;
  margin: 4px 0 0;
  color: #8e9db6;
}
.wg-top-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}
.wg-top-actions button {
  font-size: 12px;
  white-space: nowrap;
  background: #121e32;
}
.wg-search {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7897c1;
  background: #101c30;
  border: 1px solid var(--wg-line);
  border-radius: 9px;
  padding: 0 11px;
}
.wg-search span {
  font-size: 23px;
  line-height: 1;
}
.wg-search input {
  width: 200px;
  border: 0;
  background: none;
  padding: 8px 0;
  font-size: 12px;
}
.wg-search input::placeholder {
  color: #6e819f;
}
.wg-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  background: radial-gradient(
    ellipse at 37% 40%,
    #10233e 0%,
    #0b172b 40%,
    #080f1e 85%
  );
}
.wg-root .react-flow__node-bubble {
  border: none;
  background: none;
  width: 144px;
  box-shadow: none;
}
.wg-root .react-flow__node:focus-visible {
  outline: 2px solid #8bb7ff;
  border-radius: 30px;
}
.wg-bubble {
  position: relative;
  isolation: isolate;
  width: 144px;
  text-align: center;
  --bubble-color: #6aabff;
  user-select: none;
}
.wg-orb {
  isolation: isolate;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 74px;
  height: 74px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 22%, #283c59, #16263c 65%);
  border: 1px solid #547194;
  box-shadow:
    0 0 0 7px rgba(94, 139, 196, 0.025),
    0 8px 20px #0004;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.wg-orb-symbol {
  font-size: 24px;
  color: #adc9ed;
  font-weight: 300;
}
.is-workspace .wg-orb {
  width: 106px;
  height: 106px;
  margin-bottom: 14px;
  border: 1px solid #6b96c7;
  background: radial-gradient(circle at 32% 20%, #355478, #1a304f 70%);
  box-shadow:
    0 0 0 9px #6aabff05,
    0 0 0 19px #6aabff03,
    0 8px 22px #0004;
}
.is-workspace .wg-orb-symbol {
  font-size: 31px;
  line-height: 1.1;
}
.wg-orb-count {
  font-size: 10px;
  letter-spacing: 0.3px;
  color: #97b1d1;
}
.wg-node-title {
  font-size: 15px;
  color: #e4edfb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 2px;
  max-width: 144px;
}
.is-workspace .wg-node-title {
  font-size: 17px;
  font-weight: 600;
}
.wg-node-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: #8396b2;
  margin-top: 5px;
  letter-spacing: 0.6px;
}
.wg-node-meta i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bubble-color);
}
.wg-bubble.is-selected .wg-orb {
  border-color: #9cc7ff;
  box-shadow:
    0 0 0 4px #82b6ff20,
    0 0 34px #599bff33;
}
.wg-bubble:hover .wg-orb {
  border-color: #a8c6ee;
}
.wg-bubble.is-archived {
  opacity: 0.55;
}
.wg-root .react-flow__handle {
  opacity: 0;
  pointer-events: none;
}
.wg-root .react-flow__controls {
  box-shadow: none;
  border: 1px solid var(--wg-line);
  border-radius: 10px;
  overflow: hidden;
  bottom: 25px;
  right: 24px;
}
.wg-root .react-flow__controls button {
  border: 0;
  border-bottom: 1px solid #25374e;
  background: #122038;
  border-radius: 0;
  color: #bbcee8;
  width: 32px;
  height: 32px;
  padding: 8px;
}
.wg-root .react-flow__controls svg {
  fill: currentColor;
}
.wg-root .react-flow__attribution {
  background: transparent;
  color: #6983a7;
  font-size: 9px;
}
.wg-root .react-flow__attribution a {
  color: inherit;
}
.wg-dock {
  position: absolute;
  bottom: 28px;
  left: 28px;
  width: 410px;
  border: 1px solid #314b6b88;
  border-radius: 14px;
  background: #101d33eb;
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 40px #0004;
  z-index: 4;
  padding: 0 18px 13px;
}
.wg-dock.is-folded {
  width: 190px;
  padding-bottom: 0;
}
.wg-dock-heading {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0 !important;
  border: 0 !important;
  background: none !important;
  text-align: left;
  font-size: 12px !important;
  letter-spacing: 0.7px;
}
.wg-dock-heading span:last-child {
  color: #7b9ac3;
}
.wg-field {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 3px 0 15px;
  font-size: 11px;
  color: #8fa1bc;
}
.wg-field select {
  flex: 1;
  min-width: 0;
  padding: 7px 10px;
  font-size: 12px;
  background: #192940;
}
.wg-filter-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin: 12px 0;
  font-size: 11px;
  color: #8fa1bc;
}
.wg-filter-row > span {
  padding-top: 5px;
  white-space: nowrap;
}
.wg-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
}
.wg-chips button {
  font-size: 10px;
  padding: 4px 9px;
  border-radius: 6px;
  color: #91a6c4;
  background: #17273e;
  border-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
}
.wg-chips button.active {
  background: #28486f;
  color: #e5f0ff;
  border-color: #416da0;
}
.wg-chips i {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
.wg-check {
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  font-size: 11px;
}
.wg-check input {
  accent-color: #7caef9;
}
.wg-dock-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--wg-line);
  padding-top: 10px;
  margin-top: 14px;
  color: #7286a4;
  font-size: 10px;
}
.wg-dock-foot button {
  border: 0;
  padding: 0;
  font-size: 10px;
  color: #9bbbe6;
  background: none;
}
.wg-details {
  position: absolute;
  right: 24px;
  top: 24px;
  width: 268px;
  max-height: calc(100% - 135px);
  overflow: auto;
  border: 1px solid #314b6b88;
  border-radius: 14px;
  background: #101c30f5;
  backdrop-filter: blur(12px);
  padding: 18px 20px;
  box-shadow: 0 12px 40px #0005;
  z-index: 5;
}
.wg-detail-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8fa8c8;
  font-size: 11px;
  letter-spacing: 1px;
}
.wg-detail-heading button {
  background: none;
  border: 0;
  padding: 0 4px;
  font-size: 21px;
  color: #8da1be;
}
.wg-details h2 {
  font-size: 18px;
  margin: 15px 0 8px;
  overflow-wrap: anywhere;
}
.wg-status {
  font-size: 11px;
}
.wg-details dl {
  margin: 20px 0;
  font-size: 11px;
}
.wg-details dt {
  color: #6e87a8;
  margin-top: 12px;
  font-size: 10px;
}
.wg-details dd {
  margin: 4px 0;
  color: #b5c6df;
  overflow-wrap: anywhere;
}
.wg-detail-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.wg-detail-actions button {
  font-size: 12px;
  text-align: left;
  padding: 8px 12px;
}
.wg-root .wg-primary {
  background: #315987;
  border-color: #416d9f;
  color: #ecf4ff;
}
.wg-small-note {
  font-size: 10px;
  line-height: 1.8;
  color: #758cae;
  margin: 7px 0 0;
}
.wg-detail-actions input {
  width: 100%;
  margin-bottom: 7px;
  font-size: 12px;
}
.wg-alert {
  padding: 10px 20px;
  background: #482e25;
  color: #ffd2b3;
  z-index: 8;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.wg-alert span {
  flex: 1;
}
.wg-alert button {
  font-size: 11px;
  background: #5f3b2c;
  border-color: #ae775a;
}
.wg-empty {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
  width: 80%;
  color: #92a7c7;
}
.wg-empty h2 {
  color: #d1dff1;
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0 8px;
}
.wg-empty p {
  font-size: 12px;
}
.wg-empty button {
  pointer-events: auto;
  margin-top: 10px;
}
.wg-empty-orb {
  font-size: 44px;
  color: #658bb9;
}
.wg-canvas-hint {
  order: 1;
  flex-basis: 100%;
  text-align: left;
  font-size: 10px;
  color: #5f7899;
  pointer-events: none;
  letter-spacing: 1px;
}
.wg-save-status {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  color: #82a3c5;
  font-size: 10px;
  pointer-events: none;
}
.wg-demo-label {
  z-index: 3;
  position: absolute;
  top: 111px;
  right: 27px;
  color: #9bafce;
  font-size: 10px;
  background: #192d48;
  border: 1px solid #355174;
  padding: 4px 10px;
  border-radius: 20px;
}
.wg-undo {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 14px;
  border: 1px solid #3e5c85;
  border-radius: 10px;
  background: #182b46;
  z-index: 6;
  font-size: 11px;
  white-space: nowrap;
}
.wg-undo button {
  margin-left: 10px;
  font-size: 11px;
  padding: 2px 8px;
}
@media (max-width: 1050px) {
  .wg-header {
    padding: 18px;
    min-height: 90px;
  }
  .wg-header h1 {
    font-size: 16px;
  }
  .wg-search input {
    width: 130px;
  }
  .wg-top-actions {
    gap: 6px;
  }
  .wg-top-actions button {
    padding: 6px 8px;
    font-size: 11px;
  }
  .wg-details {
    width: 235px;
    right: 16px;
  }
  .wg-dock {
    left: 18px;
    bottom: 22px;
    width: 370px;
  }
  .wg-canvas-hint {
    left: 18px;
  }
}
@media (max-width: 700px) {
  .wg-header {
    flex-wrap: wrap;
    gap: 12px;
    padding: 14px 16px;
  }
  .wg-top-actions {
    width: 100%;
  }
  .wg-search {
    flex: 1;
  }
  .wg-search input {
    width: 100%;
    min-width: 50px;
  }
  .wg-dock {
    width: calc(100% - 36px);
    bottom: 20px;
  }
  .wg-details {
    top: 16px;
    max-height: 42%;
    width: 220px;
  }
  .wg-canvas-hint {
    display: none;
  }
  .wg-demo-label {
    display: none;
  }
  .wg-root .react-flow__controls {
    bottom: 260px;
    right: 16px;
  }
  .wg-header h1 span {
    display: inline;
    margin-left: 10px;
  }
  .wg-logo {
    height: 35px;
    width: 35px;
  }
  .wg-dock-heading {
    padding: 10px 0 !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .wg-root * {
    transition: none !important;
  }
}
.wg-root .is-workspace .wg-orb {
  background: var(--wg-workspace);
  color: #fff;
  border: 2px solid var(--wg-accent);
}
.wg-root .is-workspace.is-expanded .wg-orb {
  background: var(--wg-expanded);
  border-style: double;
  border-width: 4px;
}
.wg-root .is-workspace .wg-orb-symbol,
.wg-root .is-workspace .wg-orb-count {
  color: #fff;
}
.wg-root .is-session .wg-orb {
  background: var(--wg-session);
  border: 2px solid var(--wg-accent);
}
.wg-root .is-session .wg-orb-symbol {
  color: var(--wg-session-text);
}
.wg-root .is-current .wg-orb {
  outline: 3px solid #fff;
  outline-offset: 6px;
}
.wg-root .wg-bubble {
  --wg-glow-color: var(--bubble-color);
}
.wg-root
  .wg-bubble.is-current:not(
    :is(.is-status-running, .is-status-waiting, .is-status-unread)
  ) {
  --wg-glow-color: #a8ccff;
}
/* A separate layer keeps the glow behind the orb, leaving text and edges crisp. */
.wg-root
  .wg-bubble:is(
    .is-current,
    .is-status-running,
    .is-status-waiting,
    .is-status-unread
  )
  .wg-orb::before {
  content: "";
  position: absolute;
  inset: -5px;
  z-index: -1;
  border-radius: 50%;
  pointer-events: none;
  opacity: 1;
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--wg-glow-color) 70%, transparent),
    0 0 18px 6px color-mix(in srgb, var(--wg-glow-color) 68%, transparent),
    0 0 40px 14px color-mix(in srgb, var(--wg-glow-color) 36%, transparent);
}
.wg-root .wg-bubble.is-current .wg-orb::before {
  inset: -8px;
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--wg-glow-color) 85%, transparent),
    0 0 22px 8px color-mix(in srgb, var(--wg-glow-color) 78%, transparent),
    0 0 48px 18px color-mix(in srgb, var(--wg-glow-color) 42%, transparent);
}
.wg-root .wg-bubble:is(.is-status-running, .is-status-waiting) .wg-orb::before {
  animation: wg-glow-breathe 3.6s ease-in-out infinite;
}
.wg-root .wg-bubble:is(.is-status-running, .is-status-waiting) .wg-orb::before {
  inset: -8px;
  background: radial-gradient(
    circle,
    transparent 48%,
    color-mix(in srgb, var(--wg-glow-color) 70%, white) 70%,
    transparent 74%
  );
  box-shadow:
    0 0 4px 4px color-mix(in srgb, var(--wg-glow-color) 45%, white),
    0 0 18px 12px var(--wg-glow-color),
    0 0 38px 22px color-mix(in srgb, var(--wg-glow-color) 90%, transparent),
    0 0 64px 32px color-mix(in srgb, var(--wg-glow-color) 65%, transparent);
}
.wg-root .is-working .wg-orb {
  border: 3px dashed #ffdd85;
  box-shadow: 0 0 0 3px #ffdd8520;
}
.wg-memory-legend {
  color: #ddb5ff;
}
.wg-memory-details {
  border-top: 1px solid #795a99;
  margin-top: 18px;
  padding-top: 12px;
}
.wg-memory-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.wg-memory-heading h3 {
  margin: 0;
}
.wg-memory-item {
  padding: 12px 0;
  border-top: 1px solid #33455f;
}
.wg-memory-item p {
  margin: 6px 0;
  overflow-wrap: anywhere;
}
.wg-memory-item small {
  display: block;
  color: #b9c7dc;
  margin: 6px 0;
}
.wg-memory-body {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  max-height: 320px;
  overflow: auto;
  background: #091321;
  padding: 10px;
  border-radius: 8px;
  font: inherit;
}
.wg-memory-relation {
  color: #ddb5ff;
}
.wg-node-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 12px;
  color: #fff;
}
.wg-node-badges span,
.wg-node-badges strong {
  padding: 1px 5px;
  border-radius: 5px;
  background: #263d5b;
}
.wg-node-badges strong {
  color: #ffe6a3;
  background: #473914;
}
.wg-root .wg-node-meta,
.wg-root .wg-small-note,
.wg-root .wg-filter-row,
.wg-root .wg-dock-foot {
  font-size: 12px;
  color: #bdcce0;
}
.wg-root .wg-chips button {
  font-size: 12px;
  color: #c1d2e9;
}
.wg-dock {
  max-height: calc(100% - 70px);
  overflow: auto;
}
.wg-theme {
  margin: 12px 0;
  font-size: 12px;
  color: #bdcce0;
}
.wg-theme summary {
  cursor: pointer;
  padding: 6px 0;
}
.wg-theme-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding-top: 8px;
}
.wg-theme-controls input[type="color"] {
  padding: 2px;
  width: 40px;
  height: 30px;
  vertical-align: middle;
}
.wg-theme-controls input[aria-label="\u4E3B\u9898 HEX"] {
  width: 100px;
}
.wg-theme-controls button {
  padding: 4px 8px;
  font-size: 12px;
}
.wg-no-match {
  position: absolute;
  left: 24px;
  top: 48px;
  background: #182b46;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  pointer-events: none;
}
.wg-activity {
  font-size: 12px;
  color: #bdcce0;
  margin-top: 3px;
}
.wg-summary-overlay {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 12;
  pointer-events: none;
}
.wg-ring-hit {
  position: absolute;
  overflow: visible;
  pointer-events: none;
}
.wg-ring-hit circle {
  pointer-events: stroke;
  cursor: help;
}
.wg-ring-orbit {
  position: absolute;
  width: 0;
  height: 0;
  animation: wg-orbit var(--wg-orbit-duration) linear infinite;
}
.wg-ring-slot {
  position: absolute;
  width: 0;
  height: 0;
}
.wg-ring-glyph {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 22px;
  margin-left: -9px;
  margin-top: -11px;
  font-size: 12px;
  line-height: 22px;
  background: #0c1425;
  color: #fff;
  border-radius: 5px;
  animation: wg-counter var(--wg-orbit-duration) linear infinite;
}
.wg-summary-readable {
  position: absolute;
  left: -125px;
  width: 250px;
  max-height: 120px;
  overflow: auto;
  border: 1px solid #86a5cd;
  border-radius: 10px;
  background: #101c30;
  padding: 10px 14px;
  pointer-events: auto;
  user-select: text;
  font-size: 12px;
  color: #fff;
}
.wg-summary-readable span {
  color: #becde2;
}
.wg-summary-readable p {
  margin: 4px 0 0;
  overflow-wrap: anywhere;
}
.wg-summary-editor {
  margin: 14px 0;
  font-size: 12px;
}
.wg-summary-editor textarea {
  display: block;
  width: 100%;
  min-height: 70px;
  background: #101b2e;
  color: #fff;
  border: 1px solid #6683aa;
  padding: 8px;
  margin: 6px 0;
  border-radius: 8px;
  font: inherit;
  resize: vertical;
}
.wg-demo-tools {
  position: fixed;
  z-index: 20;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  background: #122038;
  color: #fff;
  border-radius: 5px;
  padding: 2px 8px;
  display: flex;
  gap: 10px;
}
.wg-summary-overlay.is-static .wg-ring-orbit,
.wg-summary-overlay.is-static .wg-ring-glyph {
  animation: none;
}
@keyframes wg-orbit {
  to {
    transform: rotate(360deg);
  }
}
@keyframes wg-counter {
  to {
    transform: rotate(-360deg);
  }
}
.wg-root .wg-dock-foot {
  flex-wrap: wrap;
  gap: 10px;
}
.wg-dock-foot label {
  display: flex;
  align-items: center;
  gap: 7px;
}
.wg-dock-foot .wg-small-note {
  flex-basis: 100%;
}
@keyframes wg-glow-breathe {
  0%,
  100% {
    opacity: 0.94;
  }
  50% {
    opacity: 1;
  }
}
.wg-reduced *,
.wg-reduced *::before {
  animation: none !important;
  transition: none !important;
}
@media (prefers-reduced-motion: reduce) {
  .wg-root *,
  .wg-root *::before {
    animation: none !important;
  }
}
.wg-backup {
  position: relative;
}
.wg-backup-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: min(360px, 85vw);
  max-height: 70vh;
  overflow: auto;
  padding: 16px;
  background: #101c30;
  border: 1px solid #486b93;
  border-radius: 12px;
  box-shadow: 0 12px 40px #0008;
  z-index: 12;
  white-space: normal;
}
.wg-backup-panel p {
  margin: 0 0 12px;
}
.wg-backup-file {
  display: block;
  margin-top: 16px;
}
.wg-backup-file input {
  display: block;
  width: 100%;
  margin-top: 8px;
}
.wg-attention {
  pointer-events: none;
  position: absolute;
  top: 12px;
  left: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: calc(100% - 48px);
  z-index: 4;
}
.wg-attention button {
  pointer-events: auto;
}
.wg-attention button[aria-pressed="true"] {
  border-color: #8bb7ff;
  background: #263e5d;
}
.wg-navigation {
  position: absolute;
  top: 96px;
  right: 24px;
  width: 310px;
  max-height: calc(100% - 145px);
  overflow: auto;
  padding: 14px;
  border: 1px solid #486b9388;
  border-radius: 12px;
  background: #101c30f5;
  z-index: 4;
}
.wg-has-details .wg-navigation {
  right: 310px;
}
.wg-navigation h2 {
  margin: 0 0 12px;
  font-size: 15px;
}
.wg-navigation h2 span {
  font-size: 12px;
  color: #9eb3cd;
}
.wg-result-list {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
.wg-result-list button {
  text-align: left;
  display: grid;
  gap: 4px;
  width: 100%;
  overflow-wrap: anywhere;
}
.wg-result-list span,
.wg-result-list small {
  font-size: 12px;
  color: #a9bdd6;
}
.wg-list-view .wg-navigation {
  left: 24px;
  right: 24px;
  width: auto;
  bottom: 80px;
  max-height: none;
}
.wg-list-view.wg-has-details .wg-navigation {
  right: 310px;
}
.wg-list-view .wg-result-list {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
.wg-list-view .wg-dock {
  display: none;
}
.wg-list-view .react-flow {
  visibility: hidden;
}
.wg-compact .wg-activity,
.wg-compact .wg-orb-count,
.wg-compact .wg-node-badges {
  display: none;
}
.wg-compact .wg-node-title {
  font-size: 16px;
}
.wg-top-actions {
  flex-wrap: wrap;
  justify-content: flex-end;
}
@media (max-width: 850px) {
  .wg-attention {
    left: 12px;
    top: 8px;
  }
  .wg-attention button {
    padding: 4px 8px;
    font-size: 12px;
  }
  .wg-navigation,
  .wg-has-details .wg-navigation {
    top: 86px;
    right: 12px;
    width: min(310px, calc(100% - 24px));
    max-height: 40%;
  }
  .wg-list-view .wg-navigation,
  .wg-list-view.wg-has-details .wg-navigation {
    left: 12px;
    right: 12px;
    bottom: 40px;
    width: auto;
    max-height: none;
  }
  .wg-list-view.wg-has-details .wg-navigation {
    bottom: 52%;
  }
  .wg-list-view.wg-has-details .wg-details {
    top: 50%;
    bottom: 40px;
    max-height: none;
    left: 12px;
    right: 12px;
    width: auto;
  }
}
`;var yl=`/* this gets exported as style.css and can be used for the default theming */
/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */
.react-flow {
  direction: ltr;

  --xy-edge-stroke-default: #b1b1b7;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #555;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);

  --xy-minimap-background-color-default: #fff;
  --xy-minimap-mask-background-color-default: rgba(240, 240, 240, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #e2e2e2;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: transparent;
  --xy-background-pattern-dots-color-default: #91919a;
  --xy-background-pattern-lines-color-default: #eee;
  --xy-background-pattern-cross-color-default: #e2e2e2;
  background-color: var(--xy-background-color, var(--xy-background-color-default));
  --xy-node-color-default: inherit;
  --xy-node-border-default: 1px solid #1a192b;
  --xy-node-background-color-default: #fff;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;
  --xy-node-border-radius-default: 3px;

  --xy-handle-background-color-default: #1a192b;
  --xy-handle-border-color-default: #fff;

  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);

  --xy-controls-button-background-color-default: #fefefe;
  --xy-controls-button-background-color-hover-default: #f4f4f4;
  --xy-controls-button-color-default: inherit;
  --xy-controls-button-color-hover-default: inherit;
  --xy-controls-button-border-color-default: #eee;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #ffffff;
  --xy-edge-label-color-default: inherit;
  --xy-resize-background-color-default: #3367d9;
}
.react-flow.dark {
  --xy-edge-stroke-default: #3e3e3e;
  --xy-edge-stroke-width-default: 1;
  --xy-edge-stroke-selected-default: #727272;

  --xy-connectionline-stroke-default: #b1b1b7;
  --xy-connectionline-stroke-width-default: 1;

  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);

  --xy-minimap-background-color-default: #141414;
  --xy-minimap-mask-background-color-default: rgba(60, 60, 60, 0.6);
  --xy-minimap-mask-stroke-color-default: transparent;
  --xy-minimap-mask-stroke-width-default: 1;
  --xy-minimap-node-background-color-default: #2b2b2b;
  --xy-minimap-node-stroke-color-default: transparent;
  --xy-minimap-node-stroke-width-default: 2;

  --xy-background-color-default: #141414;
  --xy-background-pattern-dots-color-default: #555;
  --xy-background-pattern-lines-color-default: #333;
  --xy-background-pattern-cross-color-default: #333;
  --xy-node-color-default: #f8f8f8;
  --xy-node-border-default: 1px solid #3c3c3c;
  --xy-node-background-color-default: #1e1e1e;
  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);
  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);
  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;

  --xy-handle-background-color-default: #bebebe;
  --xy-handle-border-color-default: #1e1e1e;

  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);
  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);

  --xy-controls-button-background-color-default: #2b2b2b;
  --xy-controls-button-background-color-hover-default: #3e3e3e;
  --xy-controls-button-color-default: #f8f8f8;
  --xy-controls-button-color-hover-default: #fff;
  --xy-controls-button-border-color-default: #5b5b5b;
  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);

  --xy-edge-label-background-color-default: #141414;
  --xy-edge-label-color-default: #f8f8f8;
}
.react-flow__background {
  background-color: var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));
  pointer-events: none;
  z-index: -1;
}
.react-flow__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.react-flow__pane {
  z-index: 1;
  touch-action: none;
}
.react-flow__pane.draggable {
    cursor: grab;
  }
.react-flow__pane.dragging {
    cursor: grabbing;
  }
.react-flow__pane.selection {
    cursor: pointer;
  }
.react-flow__viewport {
  transform-origin: 0 0;
  z-index: 2;
  pointer-events: none;
}
.react-flow__renderer {
  z-index: 4;
}
.react-flow__selection {
  z-index: 6;
}
.react-flow__nodesselection-rect:focus,
.react-flow__nodesselection-rect:focus-visible {
  outline: none;
}
.react-flow__edge-path {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));
  fill: none;
}
.react-flow__connection-path {
  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));
  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));
  fill: none;
}
.react-flow .react-flow__edges {
  position: absolute;
}
.react-flow .react-flow__edges svg {
    overflow: visible;
    position: absolute;
    pointer-events: none;
  }
.react-flow__edge {
  pointer-events: visibleStroke;
}
.react-flow__edge.selectable {
    cursor: pointer;
  }
.react-flow__edge.animated path {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
.react-flow__edge.animated path.react-flow__edge-interaction {
    stroke-dasharray: none;
    animation: none;
  }
.react-flow__edge.inactive {
    pointer-events: none;
  }
.react-flow__edge.selected,
  .react-flow__edge:focus,
  .react-flow__edge:focus-visible {
    outline: none;
  }
.react-flow__edge.selected .react-flow__edge-path,
  .react-flow__edge.selectable:focus .react-flow__edge-path,
  .react-flow__edge.selectable:focus-visible .react-flow__edge-path {
    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));
  }
.react-flow__edge-textwrapper {
    pointer-events: all;
  }
.react-flow__edge .react-flow__edge-text {
    pointer-events: none;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
/* Arrowhead marker styles - use CSS custom properties as default */
.react-flow__arrowhead polyline {
  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__arrowhead polyline.arrowclosed {
  fill: var(--xy-edge-stroke, var(--xy-edge-stroke-default));
}
.react-flow__connection {
  pointer-events: none;
}
.react-flow__connection .animated {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }
svg.react-flow__connectionline {
  z-index: 1001;
  overflow: visible;
  position: absolute;
}
.react-flow__nodes {
  pointer-events: none;
  transform-origin: 0 0;
}
.react-flow__node {
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  pointer-events: all;
  transform-origin: 0 0;
  box-sizing: border-box;
  cursor: default;
}
.react-flow__node.selectable {
    cursor: pointer;
  }
.react-flow__node.draggable {
    cursor: grab;
    pointer-events: all;
  }
.react-flow__node.draggable.dragging {
      cursor: grabbing;
    }
.react-flow__nodesselection {
  z-index: 3;
  transform-origin: left top;
  pointer-events: none;
}
.react-flow__nodesselection-rect {
    position: absolute;
    pointer-events: all;
    cursor: grab;
  }
.react-flow__handle {
  position: absolute;
  pointer-events: none;
  min-width: 5px;
  min-height: 5px;
  width: 6px;
  height: 6px;
  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));
  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));
  border-radius: 100%;
}
.react-flow__handle.connectingfrom {
    pointer-events: all;
  }
.react-flow__handle.connectionindicator {
    pointer-events: all;
    cursor: crosshair;
  }
.react-flow__handle-bottom {
    top: auto;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
.react-flow__handle-top {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
.react-flow__handle-right {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
.react-flow__edgeupdater {
  cursor: move;
  pointer-events: all;
}
.react-flow__pane.selection .react-flow__panel {
  pointer-events: none;
}
.react-flow__panel {
  position: absolute;
  z-index: 5;
  margin: 15px;
}
.react-flow__panel.top {
    top: 0;
  }
.react-flow__panel.bottom {
    bottom: 0;
  }
.react-flow__panel.top.center, .react-flow__panel.bottom.center {
      left: 50%;
      transform: translateX(-15px) translateX(-50%);
    }
.react-flow__panel.left {
    left: 0;
  }
.react-flow__panel.right {
    right: 0;
  }
.react-flow__panel.left.center, .react-flow__panel.right.center {
      top: 50%;
      transform: translateY(-15px) translateY(-50%);
    }
.react-flow__attribution {
  font-size: 10px;
  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));
  padding: 2px 3px;
  margin: 0;
}
.react-flow__attribution a {
    text-decoration: none;
    color: #999;
  }
@keyframes dashdraw {
  from {
    stroke-dashoffset: 10;
  }
}
.react-flow__edgelabel-renderer {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  left: 0;
  top: 0;
}
.react-flow__viewport-portal {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.react-flow__minimap {
  background: var(
    --xy-minimap-background-color-props,
    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))
  );
}
.react-flow__minimap-svg {
    display: block;
  }
.react-flow__minimap-mask {
    fill: var(
      --xy-minimap-mask-background-color-props,
      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))
    );
    stroke: var(
      --xy-minimap-mask-stroke-color-props,
      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-mask-stroke-width-props,
      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))
    );
  }
.react-flow__minimap-node {
    fill: var(
      --xy-minimap-node-background-color-props,
      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))
    );
    stroke: var(
      --xy-minimap-node-stroke-color-props,
      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))
    );
    stroke-width: var(
      --xy-minimap-node-stroke-width-props,
      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))
    );
  }
.react-flow__background-pattern.dots {
    fill: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))
    );
  }
.react-flow__background-pattern.lines {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))
    );
  }
.react-flow__background-pattern.cross {
    stroke: var(
      --xy-background-pattern-color-props,
      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))
    );
  }
.react-flow__controls {
  display: flex;
  flex-direction: column;
  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));
}
.react-flow__controls.horizontal {
    flex-direction: row;
  }
.react-flow__controls-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    padding: 4px;
    border: none;
    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));
    border-bottom: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
    color: var(
      --xy-controls-button-color-props,
      var(--xy-controls-button-color, var(--xy-controls-button-color-default))
    );
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
  }
.react-flow__controls-button svg {
      width: 100%;
      max-width: 12px;
      max-height: 12px;
      fill: currentColor;
    }
.react-flow__edge.updating .react-flow__edge-path {
      stroke: #777;
    }
.react-flow__edge-text {
    font-size: 10px;
  }
.react-flow__node.selectable:focus,
  .react-flow__node.selectable:focus-visible {
    outline: none;
  }
.react-flow__node-input,
.react-flow__node-default,
.react-flow__node-output,
.react-flow__node-group {
  padding: 10px;
  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));
  width: 150px;
  font-size: 12px;
  color: var(--xy-node-color, var(--xy-node-color-default));
  text-align: center;
  border: var(--xy-node-border, var(--xy-node-border-default));
  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));
}
.react-flow__node-input.selectable:hover, .react-flow__node-default.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {
      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));
    }
.react-flow__node-input.selectable.selected,
    .react-flow__node-input.selectable:focus,
    .react-flow__node-input.selectable:focus-visible,
    .react-flow__node-default.selectable.selected,
    .react-flow__node-default.selectable:focus,
    .react-flow__node-default.selectable:focus-visible,
    .react-flow__node-output.selectable.selected,
    .react-flow__node-output.selectable:focus,
    .react-flow__node-output.selectable:focus-visible,
    .react-flow__node-group.selectable.selected,
    .react-flow__node-group.selectable:focus,
    .react-flow__node-group.selectable:focus-visible {
      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));
    }
.react-flow__node-group {
  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));
}
.react-flow__nodesselection-rect,
.react-flow__selection {
  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));
  border: var(--xy-selection-border, var(--xy-selection-border-default));
}
.react-flow__nodesselection-rect:focus,
  .react-flow__nodesselection-rect:focus-visible,
  .react-flow__selection:focus,
  .react-flow__selection:focus-visible {
    outline: none;
  }
.react-flow__controls-button:hover {
      background: var(
        --xy-controls-button-background-color-hover-props,
        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))
      );
      color: var(
        --xy-controls-button-color-hover-props,
        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))
      );
    }
.react-flow__controls-button:disabled {
      pointer-events: none;
    }
.react-flow__controls-button:disabled svg {
        fill-opacity: 0.4;
      }
.react-flow__controls-button:last-child {
    border-bottom: none;
  }
.react-flow__controls.horizontal .react-flow__controls-button {
    border-bottom: none;
    border-right: 1px solid
      var(
        --xy-controls-button-border-color-props,
        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))
      );
  }
.react-flow__controls.horizontal .react-flow__controls-button:last-child {
    border-right: none;
  }
.react-flow__resize-control {
  position: absolute;
}
.react-flow__resize-control.left,
.react-flow__resize-control.right {
  cursor: ew-resize;
}
.react-flow__resize-control.top,
.react-flow__resize-control.bottom {
  cursor: ns-resize;
}
.react-flow__resize-control.top.left,
.react-flow__resize-control.bottom.right {
  cursor: nwse-resize;
}
.react-flow__resize-control.bottom.left,
.react-flow__resize-control.top.right {
  cursor: nesw-resize;
}
/* handle styles */
.react-flow__resize-control.handle {
  width: 5px;
  height: 5px;
  border: 1px solid #fff;
  border-radius: 1px;
  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  translate: -50% -50%;
}
.react-flow__resize-control.handle.left {
  left: 0;
  top: 50%;
}
.react-flow__resize-control.handle.right {
  left: 100%;
  top: 50%;
}
.react-flow__resize-control.handle.top {
  left: 50%;
  top: 0;
}
.react-flow__resize-control.handle.bottom {
  left: 50%;
  top: 100%;
}
.react-flow__resize-control.handle.top.left {
  left: 0;
}
.react-flow__resize-control.handle.bottom.left {
  left: 0;
}
.react-flow__resize-control.handle.top.right {
  left: 100%;
}
.react-flow__resize-control.handle.bottom.right {
  left: 100%;
}
/* line styles */
.react-flow__resize-control.line {
  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));
  border-width: 0;
  border-style: solid;
}
.react-flow__resize-control.line.left,
.react-flow__resize-control.line.right {
  width: 1px;
  transform: translate(-50%, 0);
  top: 0;
  height: 100%;
}
.react-flow__resize-control.line.left {
  left: 0;
  border-left-width: 1px;
}
.react-flow__resize-control.line.right {
  left: 100%;
  border-right-width: 1px;
}
.react-flow__resize-control.line.top,
.react-flow__resize-control.line.bottom {
  height: 1px;
  transform: translate(0, -50%);
  left: 0;
  width: 100%;
}
.react-flow__resize-control.line.top {
  top: 0;
  border-top-width: 1px;
}
.react-flow__resize-control.line.bottom {
  border-bottom-width: 1px;
  top: 100%;
}
.react-flow__edge-textbg {
  fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));
}
.react-flow__edge-text {
  fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));
}
`;var wl="workspace-graph",xi=e=>e;function wy(e){let t=e.useWorkspaces(xi),n=e.useSessions(xi),o=e.useSessionStatus(xi),r=xt.default.useMemo(()=>pl(t,n,o),[t,n,o]);return xt.default.createElement(fl,{catalog:r,memoryProvider:e.memoryProvider,actions:e.actions,repository:e.repository,access:{useCreate:()=>e.useRemoteAccess("session/create"),useWorkspace:(i,s)=>e.useWorkspaceAccess(i,s),useSession:(i,s)=>e.useSessionAccess(i,s)}})}function xy({size:e=18}){return xt.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},xt.default.createElement("path",{d:"m7 8 5 7m0 0 7-7M7 8h12"}),xt.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),xt.default.createElement("circle",{cx:"19",cy:"6",r:"3"}),xt.default.createElement("circle",{cx:"12",cy:"18",r:"3"}))}var by=["slots","uiWorkspace","uiSession","workspaces","sessions","connection"];function vy(e){let t=e.connection,n=async(a,c,l)=>{let d=await t.rpc.call(gl,hl+"/"+a,{args:c},l);if(!d.ok)throw new Error(d.error?.message??"\u8BB0\u5FC6\u8FDE\u63A5\u4E0D\u53EF\u7528");return d.value},o={snapshot:a=>n("snapshot",{},a),body:(a,c,l)=>n("body",{workspaceId:a,id:c},l)},r;try{r=window.localStorage}catch{r={getItem(){throw new Error("Browser storage is unavailable")},setItem(){throw new Error("Browser storage is unavailable")}}}let i=new Fo(r,"dsh-workspace-graph:v1"),s={openSession:a=>e.uiWorkspace.openSession(a),openWorkspace:a=>e.uiWorkspace.openWorkspace(a),newSession:a=>e.uiWorkspace.startSession(a),archive:a=>e.uiWorkspace.archiveSession(a),restore:a=>e.uiWorkspace.unarchiveSession(a),renameWorkspace:async(a,c)=>{await e.workspaces.rename(a,c)}};e.effect(()=>{let a=document.createElement("style");return a.dataset.plugin="dsh-workspace-graph",a.textContent="@scope (.wg-root) { "+yl+" }"+ml,document.head.append(a),()=>a.remove()}),e.slots.inject("main",()=>e.slots.register({name:"main",key:wl,inject:()=>({actions:s,repository:i,memoryProvider:o})},wy)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:wl,order:85,label:"\u5DE5\u4F5C\u533A\u56FE\u8C31"},xy))}
;return module.exports;}});