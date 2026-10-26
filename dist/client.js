/* dsh-workspace-graph | MIT | React Flow (MIT) */
window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;"use strict";var vu=Object.create;var Nn=Object.defineProperty;var ku=Object.getOwnPropertyDescriptor;var _u=Object.getOwnPropertyNames;var Su=Object.getPrototypeOf,Eu=Object.prototype.hasOwnProperty;var Cn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Nu=(e,t)=>{for(var n in t)Nn(e,n,{get:t[n],enumerable:!0})},Gr=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of _u(t))!Eu.call(e,r)&&r!==n&&Nn(e,r,{get:()=>t[r],enumerable:!(o=ku(t,r))||o.enumerable});return e};var ct=(e,t,n)=>(n=e!=null?vu(Su(e)):{},Gr(t||!e||!e.__esModule?Nn(n,"default",{value:e,enumerable:!0}):n,e)),Cu=e=>Gr(Nn({},"__esModule",{value:!0}),e);var Aa=Cn(za=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt=require("react");function kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _p=typeof Object.is=="function"?Object.is:kp,Sp=Vt.useState,Ep=Vt.useEffect,Np=Vt.useLayoutEffect,Cp=Vt.useDebugValue;function Mp(e,t){var n=t(),o=Sp({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return Np(function(){r.value=n,r.getSnapshot=t,Sr(r)&&i({inst:r})},[e,n,t]),Ep(function(){return Sr(r)&&i({inst:r}),e(function(){Sr(r)&&i({inst:r})})},[e]),Cp(n),n}function Sr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_p(e,n)}catch{return!0}}function Ip(e,t){return t()}var Pp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ip:Mp;za.useSyncExternalStore=Vt.useSyncExternalStore!==void 0?Vt.useSyncExternalStore:Pp});var Ta=Cn((gv,Da)=>{"use strict";Da.exports=Aa()});var La=Cn(Oa=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=require("react"),zp=Ta();function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dp=typeof Object.is=="function"?Object.is:Ap,Tp=zp.useSyncExternalStore,Op=bo.useRef,Lp=bo.useEffect,$p=bo.useMemo,Hp=bo.useDebugValue;Oa.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=Op(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=$p(function(){function c(p){if(!u){if(u=!0,d=p,p=o(p),r!==void 0&&s.hasValue){var h=s.value;if(r(h,p))return l=h}return l=p}if(h=l,Dp(d,p))return h;var g=o(p);return r!==void 0&&r(h,g)?(d=p,h):(d=p,l=g)}var u=!1,d,l,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var a=Tp(e,i[0],i[1]);return Lp(function(){s.hasValue=!0,s.value=a},[a]),Hp(a),a}});var Ha=Cn((mv,$a)=>{"use strict";$a.exports=La()});var bm={};Nu(bm,{apply:()=>wm,inject:()=>xm});module.exports=Cu(bm);var st=ct(require("react"),1);var E=ct(require("react"),1);var T=require("react/jsx-runtime"),O=require("react");function fe(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=fe(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Mu={value:()=>{}};function Kr(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Mn(n)}function Mn(e){this._=e}function Iu(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Mn.prototype=Kr.prototype={constructor:Mn,on:function(e,t){var n=this._,o=Iu(e+"",n),r,i=-1,s=o.length;if(arguments.length<2){for(;++i<s;)if((r=(e=o[i]).type)&&(r=Pu(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=o[i]).type)n[r]=Ur(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Ur(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Mn(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Pu(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Ur(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Mu,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var lt=Kr;var In="http://www.w3.org/1999/xhtml",$o={svg:"http://www.w3.org/2000/svg",xhtml:In,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Fe(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),$o.hasOwnProperty(t)?{space:$o[t],local:e}:e}function zu(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===In&&t.documentElement.namespaceURI===In?t.createElement(e):t.createElementNS(n,e)}}function Au(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Pn(e){var t=Fe(e);return(t.local?Au:zu)(t)}function Du(){}function ut(e){return e==null?Du:function(){return this.querySelector(e)}}function jr(e){typeof e!="function"&&(e=ut(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=new Array(s),c,u,d=0;d<s;++d)(c=i[d])&&(u=e.call(c,c.__data__,d,i))&&("__data__"in c&&(u.__data__=c.__data__),a[d]=u);return new pe(o,this._parents)}function Ho(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Tu(){return[]}function Xt(e){return e==null?Tu:function(){return this.querySelectorAll(e)}}function Ou(e){return function(){return Ho(e.apply(this,arguments))}}function Qr(e){typeof e=="function"?e=Ou(e):e=Xt(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var s=t[i],a=s.length,c,u=0;u<a;++u)(c=s[u])&&(o.push(e.call(c,c.__data__,u,s)),r.push(c));return new pe(o,r)}function Yt(e){return function(){return this.matches(e)}}function zn(e){return function(t){return t.matches(e)}}var Lu=Array.prototype.find;function $u(e){return function(){return Lu.call(this.children,e)}}function Hu(){return this.firstElementChild}function Jr(e){return this.select(e==null?Hu:$u(typeof e=="function"?e:zn(e)))}var Bu=Array.prototype.filter;function Vu(){return Array.from(this.children)}function Ru(e){return function(){return Bu.call(this.children,e)}}function ei(e){return this.selectAll(e==null?Vu:Ru(typeof e=="function"?e:zn(e)))}function ti(e){typeof e!="function"&&(e=Yt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,u=0;u<s;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&a.push(c);return new pe(o,this._parents)}function An(e){return new Array(e.length)}function ni(){return new pe(this._enter||this._groups.map(An),this._parents)}function Zt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Zt.prototype={constructor:Zt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function oi(e){return function(){return e}}function Fu(e,t,n,o,r,i){for(var s=0,a,c=t.length,u=i.length;s<u;++s)(a=t[s])?(a.__data__=i[s],o[s]=a):n[s]=new Zt(e,i[s]);for(;s<c;++s)(a=t[s])&&(r[s]=a)}function Wu(e,t,n,o,r,i,s){var a,c,u=new Map,d=t.length,l=i.length,f=new Array(d),p;for(a=0;a<d;++a)(c=t[a])&&(f[a]=p=s.call(c,c.__data__,a,t)+"",u.has(p)?r[a]=c:u.set(p,c));for(a=0;a<l;++a)p=s.call(e,i[a],a,i)+"",(c=u.get(p))?(o[a]=c,c.__data__=i[a],u.delete(p)):n[a]=new Zt(e,i[a]);for(a=0;a<d;++a)(c=t[a])&&u.get(f[a])===c&&(r[a]=c)}function qu(e){return e.__data__}function ri(e,t){if(!arguments.length)return Array.from(this,qu);var n=t?Wu:Fu,o=this._parents,r=this._groups;typeof e!="function"&&(e=oi(e));for(var i=r.length,s=new Array(i),a=new Array(i),c=new Array(i),u=0;u<i;++u){var d=o[u],l=r[u],f=l.length,p=Xu(e.call(d,d&&d.__data__,u,o)),h=p.length,g=a[u]=new Array(h),w=s[u]=new Array(h),x=c[u]=new Array(f);n(d,l,g,w,x,p,t);for(var v=0,y=0,b,k;v<h;++v)if(b=g[v]){for(v>=y&&(y=v+1);!(k=w[y])&&++y<h;);b._next=k||null}}return s=new pe(s,o),s._enter=a,s._exit=c,s}function Xu(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ii(){return new pe(this._exit||this._groups.map(An),this._parents)}function si(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function ai(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,s=Math.min(r,i),a=new Array(r),c=0;c<s;++c)for(var u=n[c],d=o[c],l=u.length,f=a[c]=new Array(l),p,h=0;h<l;++h)(p=u[h]||d[h])&&(f[h]=p);for(;c<r;++c)a[c]=n[c];return new pe(a,this._parents)}function ci(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],s;--r>=0;)(s=o[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function li(e){e||(e=Yu);function t(l,f){return l&&f?e(l.__data__,f.__data__):!l-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s=n[i],a=s.length,c=r[i]=new Array(a),u,d=0;d<a;++d)(u=s[d])&&(c[d]=u);c.sort(t)}return new pe(r,this._parents).order()}function Yu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ui(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function di(){return Array.from(this)}function fi(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null}function pi(){let e=0;for(let t of this)++e;return e}function gi(){return!this.node()}function hi(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,s=r.length,a;i<s;++i)(a=r[i])&&e.call(a,a.__data__,i,r);return this}function Zu(e){return function(){this.removeAttribute(e)}}function Gu(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Uu(e,t){return function(){this.setAttribute(e,t)}}function Ku(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function ju(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Qu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function mi(e,t){var n=Fe(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?Gu:Zu:typeof t=="function"?n.local?Qu:ju:n.local?Ku:Uu)(n,t))}function Dn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Ju(e){return function(){this.style.removeProperty(e)}}function ed(e,t,n){return function(){this.style.setProperty(e,t,n)}}function td(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function yi(e,t,n){return arguments.length>1?this.each((t==null?Ju:typeof t=="function"?td:ed)(e,t,n??"")):Ue(this.node(),e)}function Ue(e,t){return e.style.getPropertyValue(t)||Dn(e).getComputedStyle(e,null).getPropertyValue(t)}function nd(e){return function(){delete this[e]}}function od(e,t){return function(){this[e]=t}}function rd(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function xi(e,t){return arguments.length>1?this.each((t==null?nd:typeof t=="function"?rd:od)(e,t)):this.node()[e]}function wi(e){return e.trim().split(/^|\s+/)}function Bo(e){return e.classList||new bi(e)}function bi(e){this._node=e,this._names=wi(e.getAttribute("class")||"")}bi.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function vi(e,t){for(var n=Bo(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ki(e,t){for(var n=Bo(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function id(e){return function(){vi(this,e)}}function sd(e){return function(){ki(this,e)}}function ad(e,t){return function(){(t.apply(this,arguments)?vi:ki)(this,e)}}function _i(e,t){var n=wi(e+"");if(arguments.length<2){for(var o=Bo(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?ad:t?id:sd)(n,t))}function cd(){this.textContent=""}function ld(e){return function(){this.textContent=e}}function ud(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Si(e){return arguments.length?this.each(e==null?cd:(typeof e=="function"?ud:ld)(e)):this.node().textContent}function dd(){this.innerHTML=""}function fd(e){return function(){this.innerHTML=e}}function pd(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Ei(e){return arguments.length?this.each(e==null?dd:(typeof e=="function"?pd:fd)(e)):this.node().innerHTML}function gd(){this.nextSibling&&this.parentNode.appendChild(this)}function Ni(){return this.each(gd)}function hd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ci(){return this.each(hd)}function Mi(e){var t=typeof e=="function"?e:Pn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function md(){return null}function Ii(e,t){var n=typeof e=="function"?e:Pn(e),o=t==null?md:typeof t=="function"?t:ut(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function yd(){var e=this.parentNode;e&&e.removeChild(this)}function Pi(){return this.each(yd)}function xd(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function wd(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function zi(e){return this.select(e?wd:xd)}function Ai(e){return arguments.length?this.property("__data__",e):this.node().__data__}function bd(e){return function(t){e.call(this,t,this.__data__)}}function vd(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function kd(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function _d(e,t,n){return function(){var o=this.__on,r,i=bd(t);if(o){for(var s=0,a=o.length;s<a;++s)if((r=o[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Di(e,t,n){var o=vd(e+""),r,i=o.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,u=a.length,d;c<u;++c)for(r=0,d=a[c];r<i;++r)if((s=o[r]).type===d.type&&s.name===d.name)return d.value}return}for(a=t?_d:kd,r=0;r<i;++r)this.each(a(o[r],t,n));return this}function Ti(e,t,n){var o=Dn(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Sd(e,t){return function(){return Ti(this,e,t)}}function Ed(e,t){return function(){return Ti(this,e,t.apply(this,arguments))}}function Oi(e,t){return this.each((typeof t=="function"?Ed:Sd)(e,t))}function*Li(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,s;r<i;++r)(s=o[r])&&(yield s)}var Vo=[null];function pe(e,t){this._groups=e,this._parents=t}function $i(){return new pe([[document.documentElement]],Vo)}function Nd(){return this}pe.prototype=$i.prototype={constructor:pe,select:jr,selectAll:Qr,selectChild:Jr,selectChildren:ei,filter:ti,data:ri,enter:ni,exit:ii,join:si,merge:ai,selection:Nd,order:ci,sort:li,call:ui,nodes:di,node:fi,size:pi,empty:gi,each:hi,attr:mi,style:yi,property:xi,classed:_i,text:Si,html:Ei,raise:Ni,lower:Ci,append:Mi,insert:Ii,remove:Pi,clone:zi,datum:Ai,on:Di,dispatch:Oi,[Symbol.iterator]:Li};var We=$i;function xe(e){return typeof e=="string"?new pe([[document.querySelector(e)]],[document.documentElement]):new pe([[e]],Vo)}function Hi(e){let t;for(;t=e.sourceEvent;)e=t;return e}function be(e,t){if(e=Hi(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var Bi={passive:!1},dt={capture:!0,passive:!1};function Tn(e){e.stopImmediatePropagation()}function Ke(e){e.preventDefault(),e.stopImmediatePropagation()}function Gt(e){var t=e.document.documentElement,n=xe(e).on("dragstart.drag",Ke,dt);"onselectstart"in t?n.on("selectstart.drag",Ke,dt):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Ut(e,t){var n=e.document.documentElement,o=xe(e).on("dragstart.drag",null);t&&(o.on("click.drag",Ke,dt),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Kt=e=>()=>e;function jt(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:s,y:a,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}jt.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Cd(e){return!e.ctrlKey&&!e.button}function Md(){return this.parentNode}function Id(e,t){return t??{x:e.x,y:e.y}}function Pd(){return navigator.maxTouchPoints||"ontouchstart"in this}function On(){var e=Cd,t=Md,n=Id,o=Pd,r={},i=lt("start","drag","end"),s=0,a,c,u,d,l=0;function f(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",x,Bi).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,k){if(!(d||!e.call(this,b,k))){var _=y(this,t.call(this,b,k),b,k,"mouse");_&&(xe(b.view).on("mousemove.drag",h,dt).on("mouseup.drag",g,dt),Gt(b.view),Tn(b),u=!1,a=b.clientX,c=b.clientY,_("start",b))}}function h(b){if(Ke(b),!u){var k=b.clientX-a,_=b.clientY-c;u=k*k+_*_>l}r.mouse("drag",b)}function g(b){xe(b.view).on("mousemove.drag mouseup.drag",null),Ut(b.view,u),Ke(b),r.mouse("end",b)}function w(b,k){if(e.call(this,b,k)){var _=b.changedTouches,N=t.call(this,b,k),I=_.length,M,R;for(M=0;M<I;++M)(R=y(this,N,b,k,_[M].identifier,_[M]))&&(Tn(b),R("start",b,_[M]))}}function x(b){var k=b.changedTouches,_=k.length,N,I;for(N=0;N<_;++N)(I=r[k[N].identifier])&&(Ke(b),I("drag",b,k[N]))}function v(b){var k=b.changedTouches,_=k.length,N,I;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),N=0;N<_;++N)(I=r[k[N].identifier])&&(Tn(b),I("end",b,k[N]))}function y(b,k,_,N,I,M){var R=i.copy(),$=be(M||_,k),F,B,m;if((m=n.call(b,new jt("beforestart",{sourceEvent:_,target:f,identifier:I,active:s,x:$[0],y:$[1],dx:0,dy:0,dispatch:R}),N))!=null)return F=m.x-$[0]||0,B=m.y-$[1]||0,function S(C,P,A){var D=$,V;switch(C){case"start":r[I]=S,V=s++;break;case"end":delete r[I],--s;case"drag":$=be(A||P,k),V=s;break}R.call(C,b,new jt(C,{sourceEvent:P,subject:m,target:f,identifier:I,active:V,x:$[0]+F,y:$[1]+B,dx:$[0]-D[0],dy:$[1]-D[1],dispatch:R}),N)}}return f.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Kt(!!b),f):e},f.container=function(b){return arguments.length?(t=typeof b=="function"?b:Kt(b),f):t},f.subject=function(b){return arguments.length?(n=typeof b=="function"?b:Kt(b),f):n},f.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Kt(!!b),f):o},f.on=function(){var b=i.on.apply(i,arguments);return b===i?f:b},f.clickDistance=function(b){return arguments.length?(l=(b=+b)*b,f):Math.sqrt(l)},f}function Ln(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Ro(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function en(){}var Qt=.7,Bn=1/Qt,Nt="\\s*([+-]?\\d+)\\s*",Jt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",$e="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",zd=/^#([0-9a-f]{3,8})$/,Ad=new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`),Dd=new RegExp(`^rgb\\(${$e},${$e},${$e}\\)$`),Td=new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${Jt}\\)$`),Od=new RegExp(`^rgba\\(${$e},${$e},${$e},${Jt}\\)$`),Ld=new RegExp(`^hsl\\(${Jt},${$e},${$e}\\)$`),$d=new RegExp(`^hsla\\(${Jt},${$e},${$e},${Jt}\\)$`),Vi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ln(en,De,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Ri,formatHex:Ri,formatHex8:Hd,formatHsl:Bd,formatRgb:Fi,toString:Fi});function Ri(){return this.rgb().formatHex()}function Hd(){return this.rgb().formatHex8()}function Bd(){return Gi(this).formatHsl()}function Fi(){return this.rgb().formatRgb()}function De(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=zd.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Wi(t):n===3?new Ee(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?$n(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?$n(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ad.exec(e))?new Ee(t[1],t[2],t[3],1):(t=Dd.exec(e))?new Ee(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Td.exec(e))?$n(t[1],t[2],t[3],t[4]):(t=Od.exec(e))?$n(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ld.exec(e))?Yi(t[1],t[2]/100,t[3]/100,1):(t=$d.exec(e))?Yi(t[1],t[2]/100,t[3]/100,t[4]):Vi.hasOwnProperty(e)?Wi(Vi[e]):e==="transparent"?new Ee(NaN,NaN,NaN,0):null}function Wi(e){return new Ee(e>>16&255,e>>8&255,e&255,1)}function $n(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ee(e,t,n,o)}function Vd(e){return e instanceof en||(e=De(e)),e?(e=e.rgb(),new Ee(e.r,e.g,e.b,e.opacity)):new Ee}function Ct(e,t,n,o){return arguments.length===1?Vd(e):new Ee(e,t,n,o??1)}function Ee(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Ln(Ee,Ct,Ro(en,{brighter(e){return e=e==null?Bn:Math.pow(Bn,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ee(pt(this.r),pt(this.g),pt(this.b),Vn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qi,formatHex:qi,formatHex8:Rd,formatRgb:Xi,toString:Xi}));function qi(){return`#${ft(this.r)}${ft(this.g)}${ft(this.b)}`}function Rd(){return`#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity)?1:this.opacity)*255)}`}function Xi(){let e=Vn(this.opacity);return`${e===1?"rgb(":"rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${e===1?")":`, ${e})`}`}function Vn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function pt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ft(e){return e=pt(e),(e<16?"0":"")+e.toString(16)}function Yi(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ae(e,t,n,o)}function Gi(e){if(e instanceof Ae)return new Ae(e.h,e.s,e.l,e.opacity);if(e instanceof en||(e=De(e)),!e)return new Ae;if(e instanceof Ae)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),s=NaN,a=i-r,c=(i+r)/2;return a?(t===i?s=(n-o)/a+(n<o)*6:n===i?s=(o-t)/a+2:s=(t-n)/a+4,a/=c<.5?i+r:2-i-r,s*=60):a=c>0&&c<1?0:s,new Ae(s,a,c,e.opacity)}function Ui(e,t,n,o){return arguments.length===1?Gi(e):new Ae(e,t,n,o??1)}function Ae(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Ln(Ae,Ui,Ro(en,{brighter(e){return e=e==null?Bn:Math.pow(Bn,e),new Ae(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Qt:Math.pow(Qt,e),new Ae(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Ee(Fo(e>=240?e-240:e+120,r,o),Fo(e,r,o),Fo(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new Ae(Zi(this.h),Hn(this.s),Hn(this.l),Vn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Vn(this.opacity);return`${e===1?"hsl(":"hsla("}${Zi(this.h)}, ${Hn(this.s)*100}%, ${Hn(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Zi(e){return e=(e||0)%360,e<0?e+360:e}function Hn(e){return Math.max(0,Math.min(1,e||0))}function Fo(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function Wo(e,t,n,o,r){var i=e*e,s=i*e;return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*o+s*r)/6}function Ki(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],s=o>0?e[o-1]:2*r-i,a=o<t-1?e[o+2]:2*i-r;return Wo((n-o/t)*t,s,r,i,a)}}function ji(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],s=e[(o+1)%t],a=e[(o+2)%t];return Wo((n-o/t)*t,r,i,s,a)}}var tn=e=>()=>e;function Fd(e,t){return function(n){return e+n*t}}function Wd(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Qi(e){return(e=+e)==1?Rn:function(t,n){return n-t?Wd(t,n,e):tn(isNaN(t)?n:t)}}function Rn(e,t){var n=t-e;return n?Fd(e,n):tn(isNaN(e)?t:e)}var gt=(function e(t){var n=Qi(t);function o(r,i){var s=n((r=Ct(r)).r,(i=Ct(i)).r),a=n(r.g,i.g),c=n(r.b,i.b),u=Rn(r.opacity,i.opacity);return function(d){return r.r=s(d),r.g=a(d),r.b=c(d),r.opacity=u(d),r+""}}return o.gamma=e,o})(1);function Ji(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),s,a;for(s=0;s<n;++s)a=Ct(t[s]),o[s]=a.r||0,r[s]=a.g||0,i[s]=a.b||0;return o=e(o),r=e(r),i=e(i),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=i(c),a+""}}}var qd=Ji(Ki),Xd=Ji(ji);function es(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function ts(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ns(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),s;for(s=0;s<o;++s)r[s]=qe(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(a){for(s=0;s<o;++s)i[s]=r[s](a);return i}}function os(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ve(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function rs(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=qe(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Xo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qo=new RegExp(Xo.source,"g");function Yd(e){return function(){return e}}function Zd(e){return function(t){return e(t)+""}}function nn(e,t){var n=Xo.lastIndex=qo.lastIndex=0,o,r,i,s=-1,a=[],c=[];for(e=e+"",t=t+"";(o=Xo.exec(e))&&(r=qo.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),a[s]?a[s]+=i:a[++s]=i),(o=o[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,c.push({i:s,x:ve(o,r)})),n=qo.lastIndex;return n<t.length&&(i=t.slice(n),a[s]?a[s]+=i:a[++s]=i),a.length<2?c[0]?Zd(c[0].x):Yd(t):(t=c.length,function(u){for(var d=0,l;d<t;++d)a[(l=c[d]).i]=l.x(u);return a.join("")})}function qe(e,t){var n=typeof t,o;return t==null||n==="boolean"?tn(t):(n==="number"?ve:n==="string"?(o=De(t))?(t=o,gt):nn:t instanceof De?gt:t instanceof Date?os:ts(t)?es:Array.isArray(t)?ns:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?rs:ve)(e,t)}var is=180/Math.PI,Fn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Yo(e,t,n,o,r,i){var s,a,c;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*is,skewX:Math.atan(c)*is,scaleX:s,scaleY:a}}var Wn;function ss(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Fn:Yo(t.a,t.b,t.c,t.d,t.e,t.f)}function as(e){return e==null?Fn:(Wn||(Wn=document.createElementNS("http://www.w3.org/2000/svg","g")),Wn.setAttribute("transform",e),(e=Wn.transform.baseVal.consolidate())?(e=e.matrix,Yo(e.a,e.b,e.c,e.d,e.e,e.f)):Fn)}function cs(e,t,n,o){function r(u){return u.length?u.pop()+" ":""}function i(u,d,l,f,p,h){if(u!==l||d!==f){var g=p.push("translate(",null,t,null,n);h.push({i:g-4,x:ve(u,l)},{i:g-2,x:ve(d,f)})}else(l||f)&&p.push("translate("+l+t+f+n)}function s(u,d,l,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:l.push(r(l)+"rotate(",null,o)-2,x:ve(u,d)})):d&&l.push(r(l)+"rotate("+d+o)}function a(u,d,l,f){u!==d?f.push({i:l.push(r(l)+"skewX(",null,o)-2,x:ve(u,d)}):d&&l.push(r(l)+"skewX("+d+o)}function c(u,d,l,f,p,h){if(u!==l||d!==f){var g=p.push(r(p)+"scale(",null,",",null,")");h.push({i:g-4,x:ve(u,l)},{i:g-2,x:ve(d,f)})}else(l!==1||f!==1)&&p.push(r(p)+"scale("+l+","+f+")")}return function(u,d){var l=[],f=[];return u=e(u),d=e(d),i(u.translateX,u.translateY,d.translateX,d.translateY,l,f),s(u.rotate,d.rotate,l,f),a(u.skewX,d.skewX,l,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,l,f),u=d=null,function(p){for(var h=-1,g=f.length,w;++h<g;)l[(w=f[h]).i]=w.x(p);return l.join("")}}}var Zo=cs(ss,"px, ","px)","deg)"),Go=cs(as,", ",")",")");var Gd=1e-12;function ls(e){return((e=Math.exp(e))+1/e)/2}function Ud(e){return((e=Math.exp(e))-1/e)/2}function Kd(e){return((e=Math.exp(2*e))-1)/(e+1)}var ht=(function e(t,n,o){function r(i,s){var a=i[0],c=i[1],u=i[2],d=s[0],l=s[1],f=s[2],p=d-a,h=l-c,g=p*p+h*h,w,x;if(g<Gd)x=Math.log(f/u)/t,w=function(N){return[a+N*p,c+N*h,u*Math.exp(t*N*x)]};else{var v=Math.sqrt(g),y=(f*f-u*u+o*g)/(2*u*n*v),b=(f*f-u*u-o*g)/(2*f*n*v),k=Math.log(Math.sqrt(y*y+1)-y),_=Math.log(Math.sqrt(b*b+1)-b);x=(_-k)/t,w=function(N){var I=N*x,M=ls(k),R=u/(n*v)*(M*Kd(t*I+k)-Ud(k));return[a+R*p,c+R*h,u*M/ls(t*I+k)]}}return w.duration=x*1e3*t/Math.SQRT2,w}return r.rho=function(i){var s=Math.max(.001,+i),a=s*s,c=a*a;return e(s,a,c)},r})(Math.SQRT2,2,4);var Mt=0,rn=0,on=0,ds=1e3,qn,sn,Xn=0,mt=0,Yn=0,an=typeof performance=="object"&&performance.now?performance:Date,fs=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ln(){return mt||(fs(jd),mt=an.now()+Yn)}function jd(){mt=0}function cn(){this._call=this._time=this._next=null}cn.prototype=Zn.prototype={constructor:cn,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?ln():+n)+(t==null?0:+t),!this._next&&sn!==this&&(sn?sn._next=this:qn=this,sn=this),this._call=e,this._time=n,Uo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Uo())}};function Zn(e,t,n){var o=new cn;return o.restart(e,t,n),o}function ps(){ln(),++Mt;for(var e=qn,t;e;)(t=mt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Mt}function us(){mt=(Xn=an.now())+Yn,Mt=rn=0;try{ps()}finally{Mt=0,Jd(),mt=0}}function Qd(){var e=an.now(),t=e-Xn;t>ds&&(Yn-=t,Xn=e)}function Jd(){for(var e,t=qn,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:qn=n);sn=e,Uo(o)}function Uo(e){if(!Mt){rn&&(rn=clearTimeout(rn));var t=e-mt;t>24?(e<1/0&&(rn=setTimeout(us,e-an.now()-Yn)),on&&(on=clearInterval(on))):(on||(Xn=an.now(),on=setInterval(Qd,ds)),Mt=1,fs(us))}}function Gn(e,t,n){var o=new cn;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}var ef=lt("start","end","cancel","interrupt"),tf=[],ms=0,gs=1,Kn=2,Un=3,hs=4,jn=5,un=6;function je(e,t,n,o,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;nf(e,n,{name:t,index:o,group:r,on:ef,tween:tf,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:ms})}function dn(e,t){var n=ye(e,t);if(n.state>ms)throw new Error("too late; already scheduled");return n}function we(e,t){var n=ye(e,t);if(n.state>Un)throw new Error("too late; already running");return n}function ye(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function nf(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Zn(i,0,n.time);function i(u){n.state=gs,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var d,l,f,p;if(n.state!==gs)return c();for(d in o)if(p=o[d],p.name===n.name){if(p.state===Un)return Gn(s);p.state===hs?(p.state=un,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=un,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(Gn(function(){n.state===Un&&(n.state=hs,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Kn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Kn){for(n.state=Un,r=new Array(f=n.tween.length),d=0,l=-1;d<f;++d)(p=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++l]=p);r.length=l+1}}function a(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=jn,1),l=-1,f=r.length;++l<f;)r[l].call(e,d);n.state===jn&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=un,n.timer.stop(),delete o[t];for(var u in o)return;delete e.__transition}}function yt(e,t){var n=e.__transition,o,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((o=n[s]).name!==t){i=!1;continue}r=o.state>Kn&&o.state<jn,o.state=un,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[s]}i&&delete e.__transition}}function ys(e){return this.each(function(){yt(this,e)})}function of(e,t){var n,o;return function(){var r=we(this,e),i=r.tween;if(i!==n){o=n=i;for(var s=0,a=o.length;s<a;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}r.tween=o}}function rf(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=we(this,e),s=i.tween;if(s!==o){r=(o=s).slice();for(var a={name:t,value:n},c=0,u=r.length;c<u;++c)if(r[c].name===t){r[c]=a;break}c===u&&r.push(a)}i.tween=r}}function xs(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ye(this.node(),n).tween,r=0,i=o.length,s;r<i;++r)if((s=o[r]).name===e)return s.value;return null}return this.each((t==null?of:rf)(n,e,t))}function It(e,t,n){var o=e._id;return e.each(function(){var r=we(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ye(r,o).value[t]}}function Qn(e,t){var n;return(typeof t=="number"?ve:t instanceof De?gt:(n=De(t))?(t=n,gt):nn)(e,t)}function sf(e){return function(){this.removeAttribute(e)}}function af(e){return function(){this.removeAttributeNS(e.space,e.local)}}function cf(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===o?i:i=t(o=s,n)}}function lf(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===o?i:i=t(o=s,n)}}function uf(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function df(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function ws(e,t){var n=Fe(e),o=n==="transform"?Go:Qn;return this.attrTween(e,typeof t=="function"?(n.local?df:uf)(n,o,It(this,"attr."+e,t)):t==null?(n.local?af:sf)(n):(n.local?lf:cf)(n,o,t))}function ff(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function pf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function gf(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&pf(e,i)),n}return r._value=t,r}function hf(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&ff(e,i)),n}return r._value=t,r}function bs(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Fe(e);return this.tween(n,(o.local?gf:hf)(o,t))}function mf(e,t){return function(){dn(this,e).delay=+t.apply(this,arguments)}}function yf(e,t){return t=+t,function(){dn(this,e).delay=t}}function vs(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?mf:yf)(t,e)):ye(this.node(),t).delay}function xf(e,t){return function(){we(this,e).duration=+t.apply(this,arguments)}}function wf(e,t){return t=+t,function(){we(this,e).duration=t}}function ks(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?xf:wf)(t,e)):ye(this.node(),t).duration}function bf(e,t){if(typeof t!="function")throw new Error;return function(){we(this,e).ease=t}}function _s(e){var t=this._id;return arguments.length?this.each(bf(t,e)):ye(this.node(),t).ease}function vf(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;we(this,e).ease=n}}function Ss(e){if(typeof e!="function")throw new Error;return this.each(vf(this._id,e))}function Es(e){typeof e!="function"&&(e=Yt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,u=0;u<s;++u)(c=i[u])&&e.call(c,c.__data__,u,i)&&a.push(c);return new ke(o,this._parents,this._name,this._id)}function Ns(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),s=new Array(o),a=0;a<i;++a)for(var c=t[a],u=n[a],d=c.length,l=s[a]=new Array(d),f,p=0;p<d;++p)(f=c[p]||u[p])&&(l[p]=f);for(;a<o;++a)s[a]=t[a];return new ke(s,this._parents,this._name,this._id)}function kf(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function _f(e,t,n){var o,r,i=kf(t)?dn:we;return function(){var s=i(this,e),a=s.on;a!==o&&(r=(o=a).copy()).on(t,n),s.on=r}}function Cs(e,t){var n=this._id;return arguments.length<2?ye(this.node(),n).on.on(e):this.each(_f(n,e,t))}function Sf(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Ms(){return this.on("end.remove",Sf(this._id))}function Is(e){var t=this._name,n=this._id;typeof e!="function"&&(e=ut(e));for(var o=this._groups,r=o.length,i=new Array(r),s=0;s<r;++s)for(var a=o[s],c=a.length,u=i[s]=new Array(c),d,l,f=0;f<c;++f)(d=a[f])&&(l=e.call(d,d.__data__,f,a))&&("__data__"in d&&(l.__data__=d.__data__),u[f]=l,je(u[f],t,n,f,u,ye(d,n)));return new ke(i,this._parents,t,n)}function Ps(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Xt(e));for(var o=this._groups,r=o.length,i=[],s=[],a=0;a<r;++a)for(var c=o[a],u=c.length,d,l=0;l<u;++l)if(d=c[l]){for(var f=e.call(d,d.__data__,l,c),p,h=ye(d,n),g=0,w=f.length;g<w;++g)(p=f[g])&&je(p,t,n,g,f,h);i.push(f),s.push(d)}return new ke(i,s,t,n)}var Ef=We.prototype.constructor;function zs(){return new Ef(this._groups,this._parents)}function Nf(e,t){var n,o,r;return function(){var i=Ue(this,e),s=(this.style.removeProperty(e),Ue(this,e));return i===s?null:i===n&&s===o?r:r=t(n=i,o=s)}}function As(e){return function(){this.style.removeProperty(e)}}function Cf(e,t,n){var o,r=n+"",i;return function(){var s=Ue(this,e);return s===r?null:s===o?i:i=t(o=s,n)}}function Mf(e,t,n){var o,r,i;return function(){var s=Ue(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),Ue(this,e))),s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a))}}function If(e,t){var n,o,r,i="style."+t,s="end."+i,a;return function(){var c=we(this,e),u=c.on,d=c.value[i]==null?a||(a=As(t)):void 0;(u!==n||r!==d)&&(o=(n=u).copy()).on(s,r=d),c.on=o}}function Ds(e,t,n){var o=(e+="")=="transform"?Zo:Qn;return t==null?this.styleTween(e,Nf(e,o)).on("end.style."+e,As(e)):typeof t=="function"?this.styleTween(e,Mf(e,o,It(this,"style."+e,t))).each(If(this._id,e)):this.styleTween(e,Cf(e,o,t),n).on("end.style."+e,null)}function Pf(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function zf(e,t,n){var o,r;function i(){var s=t.apply(this,arguments);return s!==r&&(o=(r=s)&&Pf(e,s,n)),o}return i._value=t,i}function Ts(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,zf(e,t,n??""))}function Af(e){return function(){this.textContent=e}}function Df(e){return function(){var t=e(this);this.textContent=t??""}}function Os(e){return this.tween("text",typeof e=="function"?Df(It(this,"text",e)):Af(e==null?"":e+""))}function Tf(e){return function(t){this.textContent=e.call(this,t)}}function Of(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Tf(r)),t}return o._value=e,o}function Ls(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Of(e))}function $s(){for(var e=this._name,t=this._id,n=Jn(),o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,u=0;u<a;++u)if(c=s[u]){var d=ye(c,t);je(c,e,n,u,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new ke(o,this._parents,e,n)}function Hs(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,s){var a={value:s},c={value:function(){--r===0&&i()}};n.each(function(){var u=we(this,o),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),u.on=t}),r===0&&i()})}var Lf=0;function ke(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function Bs(e){return We().transition(e)}function Jn(){return++Lf}var Xe=We.prototype;ke.prototype=Bs.prototype={constructor:ke,select:Is,selectAll:Ps,selectChild:Xe.selectChild,selectChildren:Xe.selectChildren,filter:Es,merge:Ns,selection:zs,transition:$s,call:Xe.call,nodes:Xe.nodes,node:Xe.node,size:Xe.size,empty:Xe.empty,each:Xe.each,on:Cs,attr:ws,attrTween:bs,style:Ds,styleTween:Ts,text:Os,textTween:Ls,remove:Ms,tween:xs,delay:vs,duration:ks,ease:_s,easeVarying:Ss,end:Hs,[Symbol.iterator]:Xe[Symbol.iterator]};function eo(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var $f={time:null,delay:0,duration:250,ease:eo};function Hf(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Vs(e){var t,n;e instanceof ke?(t=e._id,e=e._name):(t=Jn(),(n=$f).time=ln(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,u=0;u<a;++u)(c=s[u])&&je(c,e,t,u,s,n||Hf(c,t));return new ke(o,this._parents,e,t)}We.prototype.interrupt=ys;We.prototype.transition=Vs;var fn=e=>()=>e;function Ko(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Te(e,t,n){this.k=e,this.x=t,this.y=n}Te.prototype={constructor:Te,scale:function(e){return e===1?this:new Te(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Te(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var xt=new Te(1,0,0);pn.prototype=Te.prototype;function pn(e){for(;!e.__zoom;)if(!(e=e.parentNode))return xt;return e.__zoom}function to(e){e.stopImmediatePropagation()}function Pt(e){e.preventDefault(),e.stopImmediatePropagation()}function Bf(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Vf(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Rs(){return this.__zoom||xt}function Rf(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Ff(){return navigator.maxTouchPoints||"ontouchstart"in this}function Wf(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}function no(){var e=Bf,t=Vf,n=Wf,o=Rf,r=Ff,i=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,c=ht,u=lt("start","zoom","end"),d,l,f,p=500,h=150,g=0,w=10;function x(m){m.property("__zoom",Rs).on("wheel.zoom",I,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",$).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(m,S,C,P){var A=m.selection?m.selection():m;A.property("__zoom",Rs),m!==A?k(m,S,C,P):A.interrupt().each(function(){_(this,arguments).event(P).start().zoom(null,typeof S=="function"?S.apply(this,arguments):S).end()})},x.scaleBy=function(m,S,C,P){x.scaleTo(m,function(){var A=this.__zoom.k,D=typeof S=="function"?S.apply(this,arguments):S;return A*D},C,P)},x.scaleTo=function(m,S,C,P){x.transform(m,function(){var A=t.apply(this,arguments),D=this.__zoom,V=C==null?b(A):typeof C=="function"?C.apply(this,arguments):C,H=D.invert(V),q=typeof S=="function"?S.apply(this,arguments):S;return n(y(v(D,q),V,H),A,s)},C,P)},x.translateBy=function(m,S,C,P){x.transform(m,function(){return n(this.__zoom.translate(typeof S=="function"?S.apply(this,arguments):S,typeof C=="function"?C.apply(this,arguments):C),t.apply(this,arguments),s)},null,P)},x.translateTo=function(m,S,C,P,A){x.transform(m,function(){var D=t.apply(this,arguments),V=this.__zoom,H=P==null?b(D):typeof P=="function"?P.apply(this,arguments):P;return n(xt.translate(H[0],H[1]).scale(V.k).translate(typeof S=="function"?-S.apply(this,arguments):-S,typeof C=="function"?-C.apply(this,arguments):-C),D,s)},P,A)};function v(m,S){return S=Math.max(i[0],Math.min(i[1],S)),S===m.k?m:new Te(S,m.x,m.y)}function y(m,S,C){var P=S[0]-C[0]*m.k,A=S[1]-C[1]*m.k;return P===m.x&&A===m.y?m:new Te(m.k,P,A)}function b(m){return[(+m[0][0]+ +m[1][0])/2,(+m[0][1]+ +m[1][1])/2]}function k(m,S,C,P){m.on("start.zoom",function(){_(this,arguments).event(P).start()}).on("interrupt.zoom end.zoom",function(){_(this,arguments).event(P).end()}).tween("zoom",function(){var A=this,D=arguments,V=_(A,D).event(P),H=t.apply(A,D),q=C==null?b(H):typeof C=="function"?C.apply(A,D):C,G=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),Y=A.__zoom,J=typeof S=="function"?S.apply(A,D):S,ne=c(Y.invert(q).concat(G/Y.k),J.invert(q).concat(G/J.k));return function(X){if(X===1)X=J;else{var L=ne(X),Z=G/L[2];X=new Te(Z,q[0]-L[0]*Z,q[1]-L[1]*Z)}V.zoom(null,X)}})}function _(m,S,C){return!C&&m.__zooming||new N(m,S)}function N(m,S){this.that=m,this.args=S,this.active=0,this.sourceEvent=null,this.extent=t.apply(m,S),this.taps=0}N.prototype={event:function(m){return m&&(this.sourceEvent=m),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(m,S){return this.mouse&&m!=="mouse"&&(this.mouse[1]=S.invert(this.mouse[0])),this.touch0&&m!=="touch"&&(this.touch0[1]=S.invert(this.touch0[0])),this.touch1&&m!=="touch"&&(this.touch1[1]=S.invert(this.touch1[0])),this.that.__zoom=S,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(m){var S=xe(this.that).datum();u.call(m,this.that,new Ko(m,{sourceEvent:this.sourceEvent,target:x,type:m,transform:this.that.__zoom,dispatch:u}),S)}};function I(m,...S){if(!e.apply(this,arguments))return;var C=_(this,S).event(m),P=this.__zoom,A=Math.max(i[0],Math.min(i[1],P.k*Math.pow(2,o.apply(this,arguments)))),D=be(m);if(C.wheel)(C.mouse[0][0]!==D[0]||C.mouse[0][1]!==D[1])&&(C.mouse[1]=P.invert(C.mouse[0]=D)),clearTimeout(C.wheel);else{if(P.k===A)return;C.mouse=[D,P.invert(D)],yt(this),C.start()}Pt(m),C.wheel=setTimeout(V,h),C.zoom("mouse",n(y(v(P,A),C.mouse[0],C.mouse[1]),C.extent,s));function V(){C.wheel=null,C.end()}}function M(m,...S){if(f||!e.apply(this,arguments))return;var C=m.currentTarget,P=_(this,S,!0).event(m),A=xe(m.view).on("mousemove.zoom",q,!0).on("mouseup.zoom",G,!0),D=be(m,C),V=m.clientX,H=m.clientY;Gt(m.view),to(m),P.mouse=[D,this.__zoom.invert(D)],yt(this),P.start();function q(Y){if(Pt(Y),!P.moved){var J=Y.clientX-V,ne=Y.clientY-H;P.moved=J*J+ne*ne>g}P.event(Y).zoom("mouse",n(y(P.that.__zoom,P.mouse[0]=be(Y,C),P.mouse[1]),P.extent,s))}function G(Y){A.on("mousemove.zoom mouseup.zoom",null),Ut(Y.view,P.moved),Pt(Y),P.event(Y).end()}}function R(m,...S){if(e.apply(this,arguments)){var C=this.__zoom,P=be(m.changedTouches?m.changedTouches[0]:m,this),A=C.invert(P),D=C.k*(m.shiftKey?.5:2),V=n(y(v(C,D),P,A),t.apply(this,S),s);Pt(m),a>0?xe(this).transition().duration(a).call(k,V,P,m):xe(this).call(x.transform,V,P,m)}}function $(m,...S){if(e.apply(this,arguments)){var C=m.touches,P=C.length,A=_(this,S,m.changedTouches.length===P).event(m),D,V,H,q;for(to(m),V=0;V<P;++V)H=C[V],q=be(H,this),q=[q,this.__zoom.invert(q),H.identifier],A.touch0?!A.touch1&&A.touch0[2]!==q[2]&&(A.touch1=q,A.taps=0):(A.touch0=q,D=!0,A.taps=1+!!d);d&&(d=clearTimeout(d)),D&&(A.taps<2&&(l=q[0],d=setTimeout(function(){d=null},p)),yt(this),A.start())}}function F(m,...S){if(this.__zooming){var C=_(this,S).event(m),P=m.changedTouches,A=P.length,D,V,H,q;for(Pt(m),D=0;D<A;++D)V=P[D],H=be(V,this),C.touch0&&C.touch0[2]===V.identifier?C.touch0[0]=H:C.touch1&&C.touch1[2]===V.identifier&&(C.touch1[0]=H);if(V=C.that.__zoom,C.touch1){var G=C.touch0[0],Y=C.touch0[1],J=C.touch1[0],ne=C.touch1[1],X=(X=J[0]-G[0])*X+(X=J[1]-G[1])*X,L=(L=ne[0]-Y[0])*L+(L=ne[1]-Y[1])*L;V=v(V,Math.sqrt(X/L)),H=[(G[0]+J[0])/2,(G[1]+J[1])/2],q=[(Y[0]+ne[0])/2,(Y[1]+ne[1])/2]}else if(C.touch0)H=C.touch0[0],q=C.touch0[1];else return;C.zoom("touch",n(y(V,H,q),C.extent,s))}}function B(m,...S){if(this.__zooming){var C=_(this,S).event(m),P=m.changedTouches,A=P.length,D,V;for(to(m),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<A;++D)V=P[D],C.touch0&&C.touch0[2]===V.identifier?delete C.touch0:C.touch1&&C.touch1[2]===V.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(V=be(V,this),Math.hypot(l[0]-V[0],l[1]-V[1])<w)){var H=xe(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return x.wheelDelta=function(m){return arguments.length?(o=typeof m=="function"?m:fn(+m),x):o},x.filter=function(m){return arguments.length?(e=typeof m=="function"?m:fn(!!m),x):e},x.touchable=function(m){return arguments.length?(r=typeof m=="function"?m:fn(!!m),x):r},x.extent=function(m){return arguments.length?(t=typeof m=="function"?m:fn([[+m[0][0],+m[0][1]],[+m[1][0],+m[1][1]]]),x):t},x.scaleExtent=function(m){return arguments.length?(i[0]=+m[0],i[1]=+m[1],x):[i[0],i[1]]},x.translateExtent=function(m){return arguments.length?(s[0][0]=+m[0][0],s[1][0]=+m[1][0],s[0][1]=+m[0][1],s[1][1]=+m[1][1],x):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},x.constrain=function(m){return arguments.length?(n=m,x):n},x.duration=function(m){return arguments.length?(a=+m,x):a},x.interpolate=function(m){return arguments.length?(c=m,x):c},x.on=function(){var m=u.on.apply(u,arguments);return m===u?x:m},x.clickDistance=function(m){return arguments.length?(g=(m=+m)*m,x):Math.sqrt(g)},x.tapDistance=function(m){return arguments.length?(w=+m,x):w},x}var Ne={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Tt=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],tr=["Enter"," ","Escape"],nr={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},tt;(function(e){e.Strict="strict",e.Loose="loose"})(tt||(tt={}));var Ye;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ye||(Ye={}));var wt;(function(e){e.Partial="partial",e.Full="full"})(wt||(wt={}));var or={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},He;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(He||(He={}));var At;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(At||(At={}));var U;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(U||(U={}));var Fs={[U.Left]:U.Right,[U.Right]:U.Left,[U.Top]:U.Bottom,[U.Bottom]:U.Top},rr=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,ta=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),ir=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var hn=(e,t=[0,0])=>{let{width:n,height:o}=Pe(e),r=e.origin??t,i=n*r[0],s=o*r[1];return{x:e.position.x-i,y:e.position.y-s}},sr=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=!1,o=e.reduce((r,i)=>{let s=typeof i=="string",a=!t.nodeLookup&&!s?i:void 0;return t.nodeLookup&&(a=s?t.nodeLookup.get(i):ir(i)?i:t.nodeLookup.get(i.id)),a?(n=!0,co(r,io(a,t.nodeOrigin))):r},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return n?lo(o):{x:0,y:0,width:0,height:0}},Ot=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=co(n,io(r)),o=!0)}),o?lo(n):{x:0,y:0,width:0,height:0}},so=(e,t,[n,o,r]=[0,0,1],i=!1,s=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,u=t.width/r,d=t.height/r,l=[];for(let f of e.values()){let{measured:p,selectable:h=!0,hidden:g=!1}=f;if(s&&!h||g)continue;let w=p.width??f.width??f.initialWidth??0,x=p.height??f.height??f.initialHeight??0,{x:v,y}=f.internals.positionAbsolute,b=sa(a,c,u,d,v,y,w,x),k=w*x,_=i&&b>0;(!f.internals.handleBounds||_||b>=k||f.dragging)&&l.push(f)}return l},na=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function qf(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:s,height:a}=Pe(r);i=s>0&&a>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function oa({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},s){if(e.size===0)return!0;let a=qf(e,s),c=Ot(a),u=yn(c,t,n,s?.minZoom??r,s?.maxZoom??i,s?.padding??.1);return await o.setViewport(u,{duration:s?.duration,ease:s?.ease,interpolate:s?.interpolate}),!0}function ar({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let s=n.get(e),a=s.parentId?n.get(s.parentId):void 0,{x:c,y:u}=a?a.internals.positionAbsolute:{x:0,y:0},d=s.origin??o,l=s.extent||r;if(s.extent==="parent"&&!s.expandParent)if(!a)i?.("005",Ne.error005());else{let{width:p,height:h}=Pe(a);p&&h&&(l=[[c,u],[c+p,u+h]])}else a&&kt(s.extent)&&(l=[[s.extent[0][0]+c,s.extent[0][1]+u],[s.extent[1][0]+c,s.extent[1][1]+u]]);let f=kt(l)?bt(t,l,s.measured):t;return(s.measured.width===void 0||s.measured.height===void 0)&&i?.("015",Ne.error015()),{position:{x:f.x-c+(s.measured.width??0)*d[0],y:f.y-u+(s.measured.height??0)*d[1]},positionAbsolute:f}}async function ra({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),s=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),h=!p&&f.parentId&&s.find(g=>g.id===f.parentId);(p||h)&&s.push(f)}let a=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),d=na(s,c);for(let f of c)a.has(f.id)&&!d.find(h=>h.id===f.id)&&d.push(f);if(!r)return{edges:d,nodes:s};let l=await r({nodes:s,edges:d});return typeof l=="boolean"?l?{edges:d,nodes:s}:{edges:[],nodes:[]}:l}var Dt=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),bt=(e={x:0,y:0},t,n)=>({x:Dt(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Dt(e.y,t[0][1],t[1][1]-(n?.height??0))});function ia(e,t,n){let{width:o,height:r}=Pe(n),{x:i,y:s}=n.internals.positionAbsolute;return bt(e,[[i,s],[i+o,s+r]],t)}var Ws=(e,t,n)=>e<t?Dt(Math.abs(e-t),1,t)/t:e>n?-Dt(Math.abs(e-n),1,t)/t:0,ao=(e,t,n=15,o=40)=>{let r=Ws(e.x,o,t.width-o)*n,i=Ws(e.y,o,t.height-o)*n;return[r,i]},co=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),er=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),lo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Lt=(e,t=[0,0])=>{let{x:n,y:o}=ir(e)?e.internals.positionAbsolute:hn(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},io=(e,t=[0,0])=>{let{x:n,y:o}=ir(e)?e.internals.positionAbsolute:hn(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},cr=(e,t)=>lo(co(er(e),er(t))),sa=(e,t,n,o,r,i,s,a)=>{let c=Math.max(0,Math.min(e+n,r+s)-Math.max(e,r)),u=Math.max(0,Math.min(t+o,i+a)-Math.max(t,i));return Math.ceil(c*u)},mn=(e,t)=>sa(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),lr=e=>Me(e.width)&&Me(e.height)&&Me(e.x)&&Me(e.y),Me=e=>!isNaN(e)&&isFinite(e),ur=(e,t)=>(n,o)=>{},$t=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Ht=({x:e,y:t},[n,o,r],i=!1,s=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return i?$t(a,s):a},vt=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function zt(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Xf(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=zt(e,n),r=zt(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=zt(e.top??e.y??0,n),r=zt(e.bottom??e.y??0,n),i=zt(e.left??e.x??0,t),s=zt(e.right??e.x??0,t);return{top:o,right:s,bottom:r,left:i,x:i+s,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Yf(e,t,n,o,r,i){let{x:s,y:a}=vt(e,[t,n,o]),{x:c,y:u}=vt({x:e.x+e.width,y:e.y+e.height},[t,n,o]),d=r-c,l=i-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(d),bottom:Math.floor(l)}}var yn=(e,t,n,o,r,i)=>{let s=Xf(i,t,n),a=(t-s.x)/e.width,c=(n-s.y)/e.height,u=Math.min(a,c),d=Dt(u,o,r),l=e.x+e.width/2,f=e.y+e.height/2,p=t/2-l*d,h=n/2-f*d,g=Yf(e,p,h,d,t,n),w={left:Math.min(g.left-s.left,0),top:Math.min(g.top-s.top,0),right:Math.min(g.right-s.right,0),bottom:Math.min(g.bottom-s.bottom,0)};return{x:p-w.left+w.right,y:h-w.top+w.bottom,zoom:d}},Bt=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function kt(e){return e!=null&&e!=="parent"}function Pe(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function dr(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function fr(e,t={width:0,height:0},n,o,r){let i={...e},s=o.get(n);if(s){let a=s.origin||r;i.x+=s.internals.positionAbsolute.x-(t.width??0)*a[0],i.y+=s.internals.positionAbsolute.y-(t.height??0)*a[1]}return i}function pr(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function aa(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function ca(e){return{...nr,...e||{}}}function gr(e){return e===null?null:e?"valid":"invalid"}function gn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:s}=Ie(e),a=Ht({x:i-(r?.left??0),y:s-(r?.top??0)},o),{x:c,y:u}=n?$t(a,t):a;return{xSnapped:c,ySnapped:u,...a}}var uo=e=>({width:e.offsetWidth,height:e.offsetHeight}),hr=e=>e?.getRootNode?.()||window?.document,Zf=["INPUT","SELECT","TEXTAREA"];function mr(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Zf.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var yr=e=>"clientX"in e,Ie=(e,t)=>{let n=yr(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},qs=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(s=>{let a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...uo(s)}})};function fo({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:s,targetControlY:a}){let c=e*.125+r*.375+s*.375+n*.125,u=t*.125+i*.375+a*.375+o*.125,d=Math.abs(c-e),l=Math.abs(u-t);return[c,u,d,l]}function oo(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Xs({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case U.Left:return[t-oo(t-o,i),n];case U.Right:return[t+oo(o-t,i),n];case U.Top:return[t,n-oo(n-r,i)];case U.Bottom:return[t,n+oo(r-n,i)]}}function po({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,curvature:s=.25}){let[a,c]=Xs({pos:n,x1:e,y1:t,x2:o,y2:r,c:s}),[u,d]=Xs({pos:i,x1:o,y1:r,x2:e,y2:t,c:s}),[l,f,p,h]=fo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:u,targetControlY:d});return[`M${e},${t} C${a},${c} ${u},${d} ${o},${r}`,l,f,p,h]}function xr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,s=Math.abs(o-t)/2,a=o<t?o+s:o-s;return[i,a,r,s]}function la({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let s=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return s+a}function ua({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=co(io(e),io(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let s={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return mn(s,lo(i))>0}var Gf=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Uf=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),da=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Ne.error006()),t;let o=n.getEdgeId||Gf,r;return rr(e)?r={...e}:r={...e,id:o(e)},Uf(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function go({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,s,a]=xr({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,s,a]}var Ys={[U.Left]:{x:-1,y:0},[U.Right]:{x:1,y:0},[U.Top]:{x:0,y:-1},[U.Bottom]:{x:0,y:1}},Kf=({source:e,sourcePosition:t=U.Bottom,target:n})=>t===U.Left||t===U.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Zs=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function jf({source:e,sourcePosition:t=U.Bottom,target:n,targetPosition:o=U.Top,center:r,offset:i,stepPosition:s}){let a=Ys[t],c=Ys[o],u={x:e.x+a.x*i,y:e.y+a.y*i},d={x:n.x+c.x*i,y:n.y+c.y*i},l=Kf({source:u,sourcePosition:t,target:d}),f=l.x!==0?"x":"y",p=l[f],h=[],g,w,x={x:0,y:0},v={x:0,y:0},[,,y,b]=xr({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[f]*c[f]===-1){f==="x"?(g=r.x??u.x+(d.x-u.x)*s,w=r.y??(u.y+d.y)/2):(g=r.x??(u.x+d.x)/2,w=r.y??u.y+(d.y-u.y)*s);let I=[{x:g,y:u.y},{x:g,y:d.y}],M=[{x:u.x,y:w},{x:d.x,y:w}];a[f]===p?h=f==="x"?I:M:h=f==="x"?M:I}else{let I=[{x:u.x,y:d.y}],M=[{x:d.x,y:u.y}];if(f==="x"?h=a.x===p?M:I:h=a.y===p?I:M,t===o){let m=Math.abs(e[f]-n[f]);if(m<=i){let S=Math.min(i-1,i-m);a[f]===p?x[f]=(u[f]>e[f]?-1:1)*S:v[f]=(d[f]>n[f]?-1:1)*S}}if(t!==o){let m=f==="x"?"y":"x",S=a[f]===c[m],C=u[m]>d[m],P=u[m]<d[m];(a[f]===1&&(!S&&C||S&&P)||a[f]!==1&&(!S&&P||S&&C))&&(h=f==="x"?I:M)}let R={x:u.x+x.x,y:u.y+x.y},$={x:d.x+v.x,y:d.y+v.y},F=Math.max(Math.abs(R.x-h[0].x),Math.abs($.x-h[0].x)),B=Math.max(Math.abs(R.y-h[0].y),Math.abs($.y-h[0].y));F>=B?(g=(R.x+$.x)/2,w=h[0].y):(g=h[0].x,w=(R.y+$.y)/2)}let k={x:u.x+x.x,y:u.y+x.y},_={x:d.x+v.x,y:d.y+v.y};return[[e,...k.x!==h[0].x||k.y!==h[0].y?[k]:[],...h,..._.x!==h[h.length-1].x||_.y!==h[h.length-1].y?[_]:[],n],g,w,y,b]}function Qf(e,t,n,o){let r=Math.min(Zs(e,t)/2,Zs(t,n)/2,o),{x:i,y:s}=t;if(e.x===i&&i===n.x||e.y===s&&s===n.y)return`L${i} ${s}`;if(e.y===s){let u=e.x<n.x?-1:1,d=e.y<n.y?1:-1;return`L ${i+r*u},${s}Q ${i},${s} ${i},${s+r*d}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${s+r*c}Q ${i},${s} ${i+r*a},${s}`}function xn({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,borderRadius:s=5,centerX:a,centerY:c,offset:u=20,stepPosition:d=.5}){let[l,f,p,h,g]=jf({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:a,y:c},offset:u,stepPosition:d}),w=`M${l[0].x} ${l[0].y}`;for(let x=1;x<l.length-1;x++)w+=Qf(l[x-1],l[x],l[x+1],s);return w+=`L${l[l.length-1].x} ${l[l.length-1].y}`,[w,f,p,h,g]}function Gs(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function fa(e){let{sourceNode:t,targetNode:n}=e;if(!Gs(t)||!Gs(n))return null;let o=t.internals.handleBounds||Us(t.handles),r=n.internals.handleBounds||Us(n.handles),i=Ks(o?.source??[],e.sourceHandle),s=Ks(e.connectionMode===tt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!s)return e.onError?.("008",Ne.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=i?.position||U.Bottom,c=s?.position||U.Top,u=nt(t,i,a),d=nt(n,s,c);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:a,targetPosition:c}}function Us(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function nt(e,t,n=U.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:s,height:a}=t??Pe(e);if(o)return{x:r+s/2,y:i+a/2};switch(t?.position??n){case U.Top:return{x:r+s/2,y:i};case U.Right:return{x:r+s,y:i+a/2};case U.Bottom:return{x:r+s/2,y:i+a};case U.Left:return{x:r,y:i+a/2}}}function Ks(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function ho(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function pa(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((s,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let u=ho(c,t);i.has(u)||(s.push({id:u,color:c.color||n,...c}),i.add(u))}}),s),[]).sort((s,a)=>s.id.localeCompare(a.id))}var ga=1e3,Jf=10,wr={nodeOrigin:[0,0],nodeExtent:Tt,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},ep={...wr,checkEquality:!0};function br(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function ha(e,t,n){let o=br(wr,n);for(let r of e.values())if(r.parentId)kr(r,e,t,o);else{let i=hn(r,o.nodeOrigin),s=kt(r.extent)?r.extent:o.nodeExtent,a=bt(i,s,Pe(r));r.internals.positionAbsolute=a}}function tp(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function vr(e){return e==="manual"}function mo(e,t,n,o={}){let r=br(ep,o),i={i:0},s=new Map(t),a=r?.elevateNodesOnSelect&&!vr(r.zIndexMode)?ga:0,c=e.length>0,u=!1;t.clear(),n.clear();for(let d of e){let l=s.get(d.id);if(r.checkEquality&&d===l?.internals.userNode)t.set(d.id,l);else{let f=hn(d,r.nodeOrigin),p=kt(d.extent)?d.extent:r.nodeExtent,h=bt(f,p,Pe(d));l={...r.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:tp(d,l),z:ma(d,a,r.zIndexMode),userNode:d}},t.set(d.id,l)}(l.measured===void 0||l.measured.width===void 0||l.measured.height===void 0)&&!l.hidden&&(c=!1),d.parentId&&kr(l,t,n,o,i),u||=d.selected??!1}return{nodesInitialized:c,hasSelectedNodes:u}}function np(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function kr(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:s,nodeExtent:a,zIndexMode:c}=br(wr,o),u=e.parentId,d=t.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}np(e,n),r&&!d.parentId&&d.internals.rootParentIndex===void 0&&c==="auto"&&(d.internals.rootParentIndex=++r.i,d.internals.z=d.internals.z+r.i*Jf),r&&d.internals.rootParentIndex!==void 0&&(r.i=d.internals.rootParentIndex);let l=i&&!vr(c)?ga:0,{x:f,y:p,z:h}=op(e,d,s,a,l,c),{positionAbsolute:g}=e.internals,w=f!==g.x||p!==g.y;(w||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:f,y:p}:g,z:h}})}function ma(e,t,n){let o=Me(e.zIndex)?e.zIndex:0;return vr(n)?o:o+(e.selected?t:0)}function op(e,t,n,o,r,i){let{x:s,y:a}=t.internals.positionAbsolute,c=Pe(e),u=hn(e,n),d=kt(e.extent)?bt(u,e.extent,c):u,l=bt({x:s+d.x,y:a+d.y},o,c);e.extent==="parent"&&(l=ia(l,c,t));let f=ma(e,r,i),p=t.internals.z??0;return{x:l.x,y:l.y,z:p>=f?p+1:f}}function yo(e,t,n,o=[0,0]){let r=[],i=new Map;for(let s of e){let a=t.get(s.parentId);if(!a)continue;let c=i.get(s.parentId)?.expandedRect??Lt(a),u=cr(c,s.rect);i.set(s.parentId,{expandedRect:u,parent:a})}return i.size>0&&i.forEach(({expandedRect:s,parent:a},c)=>{let u=a.internals.positionAbsolute,d=Pe(a),l=a.origin??o,f=s.x<u.x?Math.round(Math.abs(u.x-s.x)):0,p=s.y<u.y?Math.round(Math.abs(u.y-s.y)):0,h=Math.max(d.width,Math.round(s.width)),g=Math.max(d.height,Math.round(s.height)),w=(h-d.width)*l[0],x=(g-d.height)*l[1];(f>0||p>0||w||x)&&(r.push({id:c,type:"position",position:{x:a.position.x-f+w,y:a.position.y-p+x}}),n.get(c)?.forEach(v=>{e.some(y=>y.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(d.width<s.width||d.height<s.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(f?l[0]*f-w:0),height:g+(p?l[1]*p-x:0)}})}),r}function ya(e,t,n,o,r,i,s){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let u=[],d=window.getComputedStyle(a),{m22:l}=new window.DOMMatrixReadOnly(d.transform),f=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let g=uo(p.nodeElement),w=h.measured.width!==g.width||h.measured.height!==g.height;if(!!(g.width&&g.height&&(w||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),y=kt(h.extent)?h.extent:i,{positionAbsolute:b}=h.internals;if(h.parentId&&h.extent==="parent"){let _=t.get(h.parentId);_&&(b=ia(b,g,_))}else y&&(b=bt(b,y,g));let k={...h,measured:g,internals:{...h.internals,positionAbsolute:b,handleBounds:{source:qs("source",p.nodeElement,v,l,h.id),target:qs("target",p.nodeElement,v,l,h.id)}}};t.set(h.id,k),h.parentId&&kr(k,t,n,{nodeOrigin:r,zIndexMode:s}),c=!0,w&&(u.push({id:h.id,type:"dimensions",dimensions:g}),h.expandParent&&h.parentId&&f.push({id:h.id,parentId:h.parentId,rect:Lt(k,r)}))}}if(f.length>0){let p=yo(f,t,n,r);u.push(...p)}return{changes:u,updatedInternals:c}}async function xa({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let s=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!s&&(s.x!==n[0]||s.y!==n[1]||s.k!==n[2])}function js(e,t,n,o,r,i){let s=r,a=o.get(s)||new Map;o.set(s,a.set(n,t)),s=`${r}-${e}`;let c=o.get(s)||new Map;if(o.set(s,c.set(n,t)),i){s=`${r}-${e}-${i}`;let u=o.get(s)||new Map;o.set(s,u.set(n,t))}}function _r(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:s=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${i}-${a}`,d=`${i}-${a}--${r}-${s}`;js("source",c,d,e,r,s),js("target",c,u,e,i,a),t.set(o.id,o)}}function wa(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:wa(n,t):!1}function Qs(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function rp(e,t,n,o){let r=new Map;for(let[i,s]of e)if((s.selected||s.id===o)&&(!s.parentId||!wa(s,e))&&(s.draggable||t&&typeof s.draggable>"u")){let a=e.get(i);a&&r.set(i,{id:i,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function jo({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[s,a]of t){let c=n.get(s)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function ip({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},s=$t(i,t);return{x:s.x-i.x,y:s.y-i.y}}function ba({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},s=0,a=new Map,c=!1,u={x:0,y:0},d=null,l=!1,f=null,p=!1,h=!1,g=null;function w({noDragClassName:v,handleSelector:y,domNode:b,isSelectable:k,nodeId:_,nodeClickDistance:N=0}){f=xe(b);function I({x:F,y:B}){let{nodeLookup:m,nodeExtent:S,snapGrid:C,snapToGrid:P,nodeOrigin:A,onNodeDrag:D,onSelectionDrag:V,onError:H,updateNodePositions:q}=t();i={x:F,y:B};let G=!1,Y=a.size>1,J=Y&&S?er(Ot(a)):null,ne=Y&&P?ip({dragItems:a,snapGrid:C,x:F,y:B}):null;for(let[X,L]of a){if(!m.has(X))continue;let Z={x:F-L.distance.x,y:B-L.distance.y};P&&(Z=ne?{x:Math.round(Z.x+ne.x),y:Math.round(Z.y+ne.y)}:$t(Z,C));let K=null;if(Y&&S&&!L.extent&&J){let{positionAbsolute:te}=L.internals,re=te.x-J.x+S[0][0],ie=te.x+L.measured.width-J.x2+S[1][0],se=te.y-J.y+S[0][1],me=te.y+L.measured.height-J.y2+S[1][1];K=[[re,se],[ie,me]]}let{position:ee,positionAbsolute:j}=ar({nodeId:X,nextPosition:Z,nodeLookup:m,nodeExtent:K||S,nodeOrigin:A,onError:H});G=G||L.position.x!==ee.x||L.position.y!==ee.y,L.position=ee,L.internals.positionAbsolute=j}if(h=h||G,!!G&&(q(a,!0),g&&(o||D||!_&&V))){let[X,L]=jo({nodeId:_,dragItems:a,nodeLookup:m});o?.(g,a,X,L),D?.(g,X,L),_||V?.(g,L)}}async function M(){if(!d)return;let{transform:F,panBy:B,autoPanSpeed:m,autoPanOnNodeDrag:S}=t();if(!S){c=!1,cancelAnimationFrame(s);return}let[C,P]=ao(u,d,m);(C!==0||P!==0)&&(i.x=(i.x??0)-C/F[2],i.y=(i.y??0)-P/F[2],await B({x:C,y:P})&&I(i)),s=requestAnimationFrame(M)}function R(F){let{nodeLookup:B,multiSelectionActive:m,nodesDraggable:S,transform:C,snapGrid:P,snapToGrid:A,selectNodesOnDrag:D,onNodeDragStart:V,onSelectionDragStart:H,unselectNodesAndEdges:q}=t();l=!0,(!D||!k)&&!m&&_&&(B.get(_)?.selected||q()),k&&D&&_&&e?.(_);let G=gn(F.sourceEvent,{transform:C,snapGrid:P,snapToGrid:A,containerBounds:d});if(i=G,a=rp(B,S,G,_),a.size>0&&(n||V||!_&&H)){let[Y,J]=jo({nodeId:_,dragItems:a,nodeLookup:B});n?.(F.sourceEvent,a,Y,J),V?.(F.sourceEvent,Y,J),_||H?.(F.sourceEvent,J)}}let $=On().clickDistance(N).on("start",F=>{let{domNode:B,nodeDragThreshold:m,transform:S,snapGrid:C,snapToGrid:P}=t();d=B?.getBoundingClientRect()||null,p=!1,h=!1,g=F.sourceEvent,m===0&&R(F),i=gn(F.sourceEvent,{transform:S,snapGrid:C,snapToGrid:P,containerBounds:d}),u=Ie(F.sourceEvent,d)}).on("drag",F=>{let{autoPanOnNodeDrag:B,transform:m,snapGrid:S,snapToGrid:C,nodeDragThreshold:P,nodeLookup:A}=t(),D=gn(F.sourceEvent,{transform:m,snapGrid:S,snapToGrid:C,containerBounds:d});if(g=F.sourceEvent,(F.sourceEvent.type==="touchmove"&&F.sourceEvent.touches.length>1||_&&!A.has(_))&&(p=!0),!p){if(!c&&B&&l&&(c=!0,M()),!l){let V=Ie(F.sourceEvent,d),H=V.x-u.x,q=V.y-u.y;Math.sqrt(H*H+q*q)>P&&R(F)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&a&&l&&(u=Ie(F.sourceEvent,d),I(D))}}).on("end",F=>{if(!l||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,l=!1,cancelAnimationFrame(s),a.size>0){let{nodeLookup:B,updateNodePositions:m,onNodeDragStop:S,onSelectionDragStop:C}=t();if(h&&(m(a,!1),h=!1),r||S||!_&&C){let[P,A]=jo({nodeId:_,dragItems:a,nodeLookup:B,dragging:!1});r?.(F.sourceEvent,a,P,A),S?.(F.sourceEvent,P,A),_||C?.(F.sourceEvent,A)}}}).filter(F=>{let B=F.target;return!F.button&&(!v||!Qs(B,`.${v}`,b))&&(!y||Qs(B,y,b))});f.call($)}function x(){f?.on(".drag",null)}return{update:w,destroy:x}}function sp(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())mn(r,Lt(i))>0&&o.push(i);return o}var ap=250;function cp(e,t,n,o){let r=[],i=1/0,s=sp(e,n,t+ap);for(let a of s){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let u of c){if(o.nodeId===u.nodeId&&o.type===u.type&&o.id===u.id)continue;let{x:d,y:l}=nt(a,u,u.position,!0),f=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(l-e.y,2));f>t||(f<i?(r=[{...u,x:d,y:l}],i=f):f===i&&r.push({...u,x:d,y:l}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function va(e,t,n,o,r,i=!1){let s=o.get(e);if(!s)return null;let a=r==="strict"?s.internals.handleBounds?.[t]:[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]],c=(n?a?.find(u=>u.id===n):a?.[0])??null;return c&&i?{...c,...nt(s,c,c.position,!0)}:c}function ka(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function lp(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var _a=()=>!0;function up(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:s,domNode:a,nodeLookup:c,lib:u,autoPanOnConnect:d,flowId:l,panBy:f,cancelConnection:p,onConnectStart:h,onConnect:g,onConnectEnd:w,isValidConnection:x=_a,onReconnectEnd:v,updateConnection:y,getTransform:b,getFromHandle:k,autoPanSpeed:_,dragThreshold:N=1,handleDomNode:I}){let M=hr(e.target),R=0,$,{x:F,y:B}=Ie(e),m=ka(i,I),S=a?.getBoundingClientRect(),C=!1;if(!S||!m)return;let P=va(r,m,o,c,t);if(!P)return;let A=Ie(e,S),D=!1,V=null,H=!1,q=null;function G(){if(!d||!S)return;let[ee,j]=ao(A,S,_);f({x:ee,y:j}),R=requestAnimationFrame(G)}let Y={...P,nodeId:r,type:m,position:P.position},J=c.get(r),X={inProgress:!0,isValid:null,from:nt(J,Y,U.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:J,to:A,toHandle:null,toPosition:Fs[Y.position],toNode:null,pointer:A};function L(){C=!0,y(X),h?.(e,{nodeId:r,handleId:o,handleType:m})}N===0&&L();function Z(ee){if(!C){let{x:me,y:oe}=Ie(ee),Ce=me-F,_e=oe-B;if(!(Ce*Ce+_e*_e>N*N))return;L()}if(!k()||!Y){K(ee);return}let j=b();A=Ie(ee,S),$=cp(Ht(A,j,!1,[1,1]),n,c,Y),D||(G(),D=!0);let te=Sa(ee,{handle:$,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:s?"target":"source",isValidConnection:x,doc:M,lib:u,flowId:l,nodeLookup:c});q=te.handleDomNode,V=te.connection,H=lp(!!$,te.isValid);let re=c.get(r),ie=re?nt(re,Y,U.Left,!0):X.from,se={...X,from:ie,isValid:H,to:te.toHandle&&H?vt({x:te.toHandle.x,y:te.toHandle.y},j):A,toHandle:te.toHandle,toPosition:H&&te.toHandle?te.toHandle.position:Fs[Y.position],toNode:te.toHandle?c.get(te.toHandle.nodeId):null,pointer:A};y(se),X=se}function K(ee){if(!("touches"in ee&&ee.touches.length>0)){if(C){($||q)&&V&&H&&g?.(V);let{inProgress:j,...te}=X,re={...te,toPosition:X.toHandle?X.toPosition:null};w?.(ee,re),i&&v?.(ee,re)}p(),cancelAnimationFrame(R),D=!1,H=!1,V=null,q=null,M.removeEventListener("mousemove",Z),M.removeEventListener("mouseup",K),M.removeEventListener("touchmove",Z),M.removeEventListener("touchend",K)}}M.addEventListener("mousemove",Z),M.addEventListener("mouseup",K),M.addEventListener("touchmove",Z),M.addEventListener("touchend",K)}function Sa(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:s,lib:a,flowId:c,isValidConnection:u=_a,nodeLookup:d}){let l=i==="target",f=t?s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=Ie(e),g=s.elementFromPoint(p,h),w=g?.classList.contains(`${a}-flow__handle`)?g:f,x={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let v=ka(void 0,w),y=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),k=w.classList.contains("connectable"),_=w.classList.contains("connectableend");if(!y||!v)return x;let N={source:l?y:o,sourceHandle:l?b:r,target:l?o:y,targetHandle:l?r:b};x.connection=N;let M=k&&_&&(n===tt.Strict?l&&v==="source"||!l&&v==="target":y!==o||b!==r);x.isValid=M&&u(N),x.toHandle=va(y,v,b,d,n,!0)}return x}var xo={onPointerDown:up,isValid:Sa};function Ea({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=xe(e);function i({translateExtent:a,width:c,height:u,zoomStep:d=1,pannable:l=!0,zoomable:f=!0,inversePan:p=!1}){let h=y=>{if(y.sourceEvent.type!=="wheel"||!t)return;let b=n(),k=y.sourceEvent.ctrlKey&&Bt()?10:1,_=-y.sourceEvent.deltaY*(y.sourceEvent.deltaMode===1?.05:y.sourceEvent.deltaMode?1:.002)*d,N=b[2]*Math.pow(2,_*k);t.scaleTo(N)},g=[0,0],w=y=>{(y.sourceEvent.type==="mousedown"||y.sourceEvent.type==="touchstart")&&(g=[y.sourceEvent.clientX??y.sourceEvent.touches[0].clientX,y.sourceEvent.clientY??y.sourceEvent.touches[0].clientY])},x=y=>{let b=n();if(y.sourceEvent.type!=="mousemove"&&y.sourceEvent.type!=="touchmove"||!t)return;let k=[y.sourceEvent.clientX??y.sourceEvent.touches[0].clientX,y.sourceEvent.clientY??y.sourceEvent.touches[0].clientY],_=[k[0]-g[0],k[1]-g[1]];g=k;let N=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),I={x:b[0]-_[0]*N,y:b[1]-_[1]*N},M=[[0,0],[c,u]];t.setViewportConstrained({x:I.x,y:I.y,zoom:b[2]},M,a)},v=no().on("start",w).on("zoom",l?x:null).on("zoom.wheel",f?h:null);r.call(v,{})}function s(){r.on("zoom",null)}return{update:i,destroy:s,pointer:be}}var wo=e=>({x:e.x,y:e.y,zoom:e.k}),Qo=({x:e,y:t,zoom:n})=>xt.translate(e,t).scale(n),et=(e,t)=>e.target.closest(`.${t}`),Na=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),dp=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Jo=(e,t=0,n=dp,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Ca=e=>{let t=e.ctrlKey&&Bt()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function fp({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:s,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:u}){return d=>{if(et(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let l=n.property("__zoom").k||1;if(d.ctrlKey&&s){let w=be(d),x=Ca(d),v=l*Math.pow(2,x);o.scaleTo(n,v,w,d);return}let f=d.deltaMode===1?20:1,p=r===Ye.Vertical?0:d.deltaX*f,h=r===Ye.Horizontal?0:d.deltaY*f;!Bt()&&d.shiftKey&&r!==Ye.Vertical&&(p=d.deltaY*f,h=0),o.translateBy(n,-(p/l)*i,-(h/l)*i,{internal:!0});let g=wo(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(d,g):(e.isPanScrolling=!0,a?.(d,g)),e.panScrollTimeout=setTimeout(()=>{u?.(d,g),e.isPanScrolling=!1},150)}}function pp({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",s=!t&&i&&!o.ctrlKey,a=et(o,e);if(o.ctrlKey&&i&&a&&o.preventDefault(),s||a)return null;o.preventDefault(),n.call(this,o,r)}}function gp({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=wo(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function hp({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&Na(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,wo(i.transform))}}function mp({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return s=>{if(!s.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&Na(t,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&i(s.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=wo(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(s.sourceEvent,a)},n?150:0)}}}function yp({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:n,zoomOnPinch:o,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:s,userSelectionActive:a,noWheelClassName:c,noPanClassName:u,lib:d,connectionInProgress:l}){return f=>{let p=t||n,h=o&&f.ctrlKey,g=f.type==="wheel";if(f.button===1&&f.type==="mousedown"&&(et(f,`${d}-flow__node`)||et(f,`${d}-flow__edge`)||et(f,`${d}-flow__selection`)||et(f,`${d}-flow__nodesselection`)))return!0;if(!r&&!p&&!i&&!s&&!o||a||l&&!g||et(f,c)&&g||et(f,u)&&(!g||i&&g&&!t)||!o&&f.ctrlKey&&g)return!1;if(!o&&f.type==="touchstart"&&f.touches?.length>1)return f.preventDefault(),!1;if(!p&&!i&&!h&&g||!r&&(f.type==="mousedown"||f.type==="touchstart")||Array.isArray(r)&&!r.includes(f.button)&&f.type==="mousedown")return!1;let w=Array.isArray(r)&&r.includes(f.button)||!f.button||f.button<=1;return(!f.ctrlKey||g||e)&&w}}function Ma({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:s,onPanZoomEnd:a,onDraggingChange:c}){let u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),l=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(B=>{let m=B[0];m&&(l=[[0,0],[m.contentRect.width,m.contentRect.height]])}):null)?.observe(e);let p=no().extent(()=>l).scaleExtent([t,n]).translateExtent(o),h=xe(e).call(p);b({x:r.x,y:r.y,zoom:Dt(r.zoom,t,n)},[[0,0],[d.width,d.height]],o);let g=h.on("wheel.zoom"),w=h.on("dblclick.zoom");p.wheelDelta(Ca);async function x(B,m){return h?new Promise(S=>{p?.interpolate(m?.interpolate==="linear"?qe:ht).transform(Jo(h,m?.duration,m?.ease,()=>S(!0)),B)}):!1}function v({noWheelClassName:B,noPanClassName:m,onPaneContextMenu:S,userSelectionActive:C,panOnScroll:P,panOnDrag:A,panOnScrollMode:D,panOnScrollSpeed:V,preventScrolling:H,zoomOnPinch:q,zoomOnScroll:G,zoomOnDoubleClick:Y,panActivationKeyPressed:J=!1,zoomActivationKeyPressed:ne,lib:X,onTransformChange:L,connectionInProgress:Z,paneClickDistance:K,selectionOnDrag:ee}){C&&!u.isZoomingOrPanning&&y();let j=P&&!ne&&!C;p.clickDistance(ee?1/0:!Me(K)||K<0?0:K);let te=j?fp({zoomPanValues:u,noWheelClassName:B,d3Selection:h,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:V,zoomOnPinch:q,onPanZoomStart:s,onPanZoom:i,onPanZoomEnd:a}):pp({noWheelClassName:B,preventScrolling:H,d3ZoomHandler:g});h.on("wheel.zoom",te,{passive:!1});let re=gp({zoomPanValues:u,onDraggingChange:c,onPanZoomStart:s});p.on("start",re);let ie=hp({zoomPanValues:u,panOnDrag:A,onPaneContextMenu:!!S,onPanZoom:i,onTransformChange:L});p.on("zoom",ie);let se=mp({zoomPanValues:u,panOnDrag:A,panOnScroll:P,onPaneContextMenu:S,onPanZoomEnd:a,onDraggingChange:c});p.on("end",se);let me=yp({panActivationKeyPressed:J,zoomActivationKeyPressed:ne,panOnDrag:A,zoomOnScroll:G,panOnScroll:P,zoomOnDoubleClick:Y,zoomOnPinch:q,userSelectionActive:C,noPanClassName:m,noWheelClassName:B,lib:X,connectionInProgress:Z});p.filter(me),Y?h.on("dblclick.zoom",w):h.on("dblclick.zoom",null)}function y(){p.on("zoom",null)}async function b(B,m,S){let C=Qo(B),P=p?.constrain()(C,m,S);return P&&await x(P),P}async function k(B,m){let S=Qo(B);return await x(S,m),S}function _(B){if(h){let m=Qo(B),S=h.property("__zoom");(S.k!==B.zoom||S.x!==B.x||S.y!==B.y)&&p?.transform(h,m,null,{sync:!0})}}function N(){let B=h?pn(h.node()):{x:0,y:0,k:1};return{x:B.x,y:B.y,zoom:B.k}}async function I(B,m){return h?new Promise(S=>{p?.interpolate(m?.interpolate==="linear"?qe:ht).scaleTo(Jo(h,m?.duration,m?.ease,()=>S(!0)),B)}):!1}async function M(B,m){return h?new Promise(S=>{p?.interpolate(m?.interpolate==="linear"?qe:ht).scaleBy(Jo(h,m?.duration,m?.ease,()=>S(!0)),B)}):!1}function R(B){p?.scaleExtent(B)}function $(B){p?.translateExtent(B)}function F(B){let m=!Me(B)||B<0?0:B;p?.clickDistance(m)}return{update:v,destroy:y,setViewport:k,setViewportConstrained:b,getViewport:N,scaleTo:I,scaleBy:M,setScaleExtent:R,setTranslateExtent:$,syncViewport:_,setClickDistance:F}}var ot;(function(e){e.Line="line",e.Handle="handle"})(ot||(ot={}));function xp({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let s=e-t,a=n-o,c=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(c[0]=c[0]*-1),a&&i&&(c[1]=c[1]*-1),c}function Js(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Qe(e,t){return Math.max(0,t-e)}function Je(e,t){return Math.max(0,e-t)}function ro(e,t,n){return Math.max(0,t-e,e-n)}function ea(e,t){return e?!t:t}function wp(e,t,n,o,r,i,s,a){let{affectsX:c,affectsY:u}=t,{isHorizontal:d,isVertical:l}=t,f=d&&l,{xSnapped:p,ySnapped:h}=n,{minWidth:g,maxWidth:w,minHeight:x,maxHeight:v}=o,{x:y,y:b,width:k,height:_,aspectRatio:N}=e,I=Math.floor(d?p-e.pointerX:0),M=Math.floor(l?h-e.pointerY:0),R=k+(c?-I:I),$=_+(u?-M:M),F=-i[0]*k,B=-i[1]*_,m=ro(R,g,w),S=ro($,x,v);if(s){let A=0,D=0;c&&I<0?A=Qe(y+I+F,s[0][0]):!c&&I>0&&(A=Je(y+R+F,s[1][0])),u&&M<0?D=Qe(b+M+B,s[0][1]):!u&&M>0&&(D=Je(b+$+B,s[1][1])),m=Math.max(m,A),S=Math.max(S,D)}if(a){let A=0,D=0;c&&I>0?A=Je(y+I,a[0][0]):!c&&I<0&&(A=Qe(y+R,a[1][0])),u&&M>0?D=Je(b+M,a[0][1]):!u&&M<0&&(D=Qe(b+$,a[1][1])),m=Math.max(m,A),S=Math.max(S,D)}if(r){if(d){let A=ro(R/N,x,v)*N;if(m=Math.max(m,A),s){let D=0;!c&&!u||c&&!u&&f?D=Je(b+B+R/N,s[1][1])*N:D=Qe(b+B+(c?I:-I)/N,s[0][1])*N,m=Math.max(m,D)}if(a){let D=0;!c&&!u||c&&!u&&f?D=Qe(b+R/N,a[1][1])*N:D=Je(b+(c?I:-I)/N,a[0][1])*N,m=Math.max(m,D)}}if(l){let A=ro($*N,g,w)/N;if(S=Math.max(S,A),s){let D=0;!c&&!u||u&&!c&&f?D=Je(y+$*N+F,s[1][0])/N:D=Qe(y+(u?M:-M)*N+F,s[0][0])/N,S=Math.max(S,D)}if(a){let D=0;!c&&!u||u&&!c&&f?D=Qe(y+$*N,a[1][0])/N:D=Je(y+(u?M:-M)*N,a[0][0])/N,S=Math.max(S,D)}}}M=M+(M<0?S:-S),I=I+(I<0?m:-m),r&&(f?R>$*N?M=(ea(c,u)?-I:I)/N:I=(ea(c,u)?-M:M)*N:d?(M=I/N,u=c):(I=M*N,c=u));let C=c?y+I:y,P=u?b+M:b;return{width:k+(c?-I:I),height:_+(u?-M:M),x:i[0]*I*(c?-1:1)+C,y:i[1]*M*(u?-1:1)+P}}var Ia={width:0,height:0,x:0,y:0},bp={...Ia,pointerX:0,pointerY:0,aspectRatio:1};function vp(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,s=e.measured.height??0,a=n[0]*i,c=n[1]*s;return[[o-a,r-c],[o+i-a,r+s-c]]}function Pa({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=xe(e),s={controlDirection:Js("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:u,boundaries:d,keepAspectRatio:l,resizeDirection:f,onResizeStart:p,onResize:h,onResizeEnd:g,shouldResize:w}){let x={...Ia},v={...bp};s={boundaries:d,resizeDirection:f,keepAspectRatio:l,controlDirection:Js(u)};let y,b=null,k=[],_,N,I,M=On().on("start",R=>{let{nodeLookup:$,transform:F,snapGrid:B,snapToGrid:m,nodeOrigin:S,paneDomNode:C}=n();if(y=$.get(t),!y)return;b=C?.getBoundingClientRect()??null;let{xSnapped:P,ySnapped:A}=gn(R.sourceEvent,{transform:F,snapGrid:B,snapToGrid:m,containerBounds:b});x={width:y.measured.width??0,height:y.measured.height??0,x:y.position.x??0,y:y.position.y??0},v={...x,pointerX:P,pointerY:A,aspectRatio:x.width/x.height},_=void 0,N=kt(y.extent)?y.extent:void 0,y.parentId&&(y.extent==="parent"||y.expandParent)&&(_=$.get(y.parentId)),_&&y.extent==="parent"&&(N=[[0,0],[_.measured.width,_.measured.height]]),k=[],I=void 0;for(let[D,V]of $)if(V.parentId===t&&(k.push({id:D,position:{...V.position},extent:V.extent}),V.extent==="parent"||V.expandParent)){let H=vp(V,y,V.origin??S);I?I=[[Math.min(H[0][0],I[0][0]),Math.min(H[0][1],I[0][1])],[Math.max(H[1][0],I[1][0]),Math.max(H[1][1],I[1][1])]]:I=H}p?.(R,{...x})}).on("drag",R=>{let{transform:$,snapGrid:F,snapToGrid:B,nodeOrigin:m}=n(),S=gn(R.sourceEvent,{transform:$,snapGrid:F,snapToGrid:B,containerBounds:b}),C=[];if(!y)return;let{x:P,y:A,width:D,height:V}=x,H={},q=y.origin??m,{width:G,height:Y,x:J,y:ne}=wp(v,s.controlDirection,S,s.boundaries,s.keepAspectRatio,q,N,I),X=G!==D,L=Y!==V,Z=J!==P&&X,K=ne!==A&&L;if(!Z&&!K&&!X&&!L)return;let ee={prevValues:{...x},startX:v.x,startY:v.y,childNodes:k.map(ie=>({...ie,position:{...ie.position}}))};if((Z||K||q[0]===1||q[1]===1)&&(H.x=Z?J:x.x,H.y=K?ne:x.y,x.x=H.x,x.y=H.y,k.length>0)){let ie=J-P,se=ne-A;for(let me of k)me.position={x:me.position.x-ie+q[0]*(G-D),y:me.position.y-se+q[1]*(Y-V)},C.push(me)}if((X||L)&&(H.width=X&&(!s.resizeDirection||s.resizeDirection==="horizontal")?G:x.width,H.height=L&&(!s.resizeDirection||s.resizeDirection==="vertical")?Y:x.height,x.width=H.width,x.height=H.height),_&&y.expandParent){let ie=q[0]*(H.width??0);H.x&&H.x<ie&&(x.x=ie,v.x=v.x-(H.x-ie));let se=q[1]*(H.height??0);H.y&&H.y<se&&(x.y=se,v.y=v.y-(H.y-se))}let j=xp({width:x.width,prevWidth:D,height:x.height,prevHeight:V,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),te={...x,direction:j};if(w?.(R,te)===!1){x=ee.prevValues,v.x=ee.startX,v.y=ee.startY,k.forEach((ie,se)=>{ie.position=ee.childNodes[se].position});return}h?.(R,te),o(H,C)}).on("end",R=>{g?.(R,{...x}),r?.({...x})});i.call(M)}function c(){i.on(".drag",null)}return{update:a,destroy:c}}var Wa=ct(require("react"),1),qa=ct(Ha(),1);var Va={},Ba=e=>{let t,n=new Set,o=(d,l)=>{let f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){let p=t;t=l??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Va.env?Va.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(o,r,c);return c},Ra=e=>e?Ba(e):Ba;var{useDebugValue:Bp}=Wa.default,{useSyncExternalStoreWithSelector:Vp}=qa.default,Rp=e=>e;function Er(e,t=Rp,n){let o=Vp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Bp(o),o}var Fa=(e,t)=>{let n=Ra(e),o=(r,i=t)=>Er(n,r,i);return Object.assign(o,n),o},Xa=(e,t)=>e?Fa(e,t):Fa;function le(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var Fp=require("react-dom"),So=(0,O.createContext)(null),Wp=So.Provider,xc=Ne.error001("react");function ae(e,t){let n=(0,O.useContext)(So);if(n===null)throw new Error(xc);return Er(n,e,t)}function ue(){let e=(0,O.useContext)(So);if(e===null)throw new Error(xc);return(0,O.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var Ya={display:"none"},qp={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},wc="react-flow__node-desc",bc="react-flow__edge-desc",Xp="react-flow__aria-live",Yp=e=>e.ariaLiveMessage,Zp=e=>e.ariaLabelConfig;function Gp({rfId:e}){let t=ae(Yp);return(0,T.jsx)("div",{id:`${Xp}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:qp,children:t})}function Up({rfId:e,disableKeyboardA11y:t}){let n=ae(Zp);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{id:`${wc}-${e}`,style:Ya,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,T.jsx)("div",{id:`${bc}-${e}`,style:Ya,children:n["edge.a11yDescription.default"]}),!t&&(0,T.jsx)(Gp,{rfId:e})]})}var Eo=(0,O.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let s=`${e}`.split("-");return(0,T.jsx)("div",{className:fe(["react-flow__panel",n,...s]),style:o,ref:i,...r,children:t})});Eo.displayName="Panel";var Za="https://reactflow.dev?utm_source=attribution";function Kp({proOptions:e,position:t="bottom-right"}){return(0,O.useEffect)(()=>{},[]),e?.hideAttribution?null:(0,T.jsx)(Eo,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Za}`,children:(0,T.jsx)("a",{href:Za,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var jp=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},vo=e=>e.id;function Qp(e,t){return le(e.selectedNodes.map(vo),t.selectedNodes.map(vo))&&le(e.selectedEdges.map(vo),t.selectedEdges.map(vo))}function Jp({onSelectionChange:e}){let t=ue(),{selectedNodes:n,selectedEdges:o}=ae(jp,Qp);return(0,O.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var eg=e=>!!e.onSelectionChangeHandlers;function tg({onSelectionChange:e}){let t=ae(eg);return e||t?(0,T.jsx)(Jp,{onSelectionChange:e}):null}var vc=[0,0],ng={x:0,y:0,zoom:1},og=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Ga=[...og,"rfId"],rg=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Ua={translateExtent:Tt,nodeOrigin:vc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function ig(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:s,reset:a,setDefaultNodesAndEdges:c}=ae(rg,le),u=ue();(0,O.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{d.current=Ua,a()}),[]);let d=(0,O.useRef)(Ua);return(0,O.useEffect)(()=>{for(let l of Ga){let f=e[l],p=d.current[l];f!==p&&(typeof e[l]>"u"||(l==="nodes"?t(f):l==="edges"?n(f):l==="minZoom"?o(f):l==="maxZoom"?r(f):l==="translateExtent"?i(f):l==="nodeExtent"?s(f):l==="ariaLabelConfig"?u.setState({ariaLabelConfig:ca(f)}):l==="fitView"?u.setState({fitViewQueued:f}):l==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[l]:f})))}d.current=e},Ga.map(l=>e[l])),null}function Ka(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function sg(e){let[t,n]=(0,O.useState)(e==="system"?null:e);return(0,O.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Ka(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Ka()?.matches?"dark":"light"}var ja=typeof document<"u"?document:null;function wn(e=null,t={target:ja,actInsideInputWithModifier:!0}){let[n,o]=(0,O.useState)(!1),r=(0,O.useRef)(!1),i=(0,O.useRef)(new Set([])),[s,a]=(0,O.useMemo)(()=>{if(e!==null){let u=(Array.isArray(e)?e:[e]).filter(l=>typeof l=="string").map(l=>l.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((l,f)=>l.concat(...f),[]);return[u,d]}return[[],[]]},[e]);return(0,O.useEffect)(()=>{let c=t?.target??ja,u=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!u)&&mr(p))return!1;let g=Ja(p.code,a);if(i.current.add(p[g]),Qa(s,i.current,!1)){let w=p.composedPath?.()?.[0]||p.target,x=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(r.current||!x)&&p.preventDefault(),o(!0)}},l=p=>{let h=Ja(p.code,a);Qa(s,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",d),c?.addEventListener("keyup",l),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",d),c?.removeEventListener("keyup",l),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function Qa(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Ja(e,t){return t.includes(e)?"code":"key"}var ag=()=>{let e=ue();return(0,O.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:s}=e.getState();return s?(await s.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:s,panZoom:a}=e.getState(),c=yn(t,o,r,i,s,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:s}=e.getState();if(!s)return t;let{x:a,y:c}=s.getBoundingClientRect(),u={x:t.x-a,y:t.y-c},d=n.snapGrid??r,l=n.snapToGrid??i;return Ht(u,o,l,d)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),s=vt(t,n);return{x:s.x+r,y:s.y+i}}}),[])};function kc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let s=o.get(i.id);s?s.push(i):o.set(i.id,[i])}for(let i of t){let s=o.get(i.id);if(!s){n.push(i);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){n.push({...s[0].item});continue}let a={...i};for(let c of s)cg(c,a);n.push(a)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function cg(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Ir(e,t){return kc(e,t)}function lg(e,t){return kc(e,t)}function _t(e,t){return{id:e,type:"select",selected:t}}function Rt(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let s=t.has(r);!(i.selected===void 0&&!s)&&i.selected!==s&&(n&&(i.selected=s),o.push(_t(i.id,s)))}return o}function ec({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let s=t.get(i.id),a=s?.internals?.userNode??s;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:"replace"}),a===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function tc(e){return{id:e.id,type:"remove"}}var ug=ur("React Flow","https://reactflow.dev/");function dg(e,t,n={}){return da(e,t,{...n,onError:n.onError??ug})}var nc=e=>ta(e),fg=e=>rr(e);function _c(e){return(0,O.forwardRef)(e)}var Sc=typeof window<"u"?O.useLayoutEffect:O.useEffect;function oc(e){let[t,n]=(0,O.useState)(BigInt(0)),[o]=(0,O.useState)(()=>pg(()=>n(r=>r+BigInt(1))));return Sc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function pg(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Ec=(0,O.createContext)(null);function gg({children:e}){let t=ue(),n=(0,O.useCallback)(a=>{let{nodes:c=[],setNodes:u,hasDefaultNodes:d,onNodesChange:l,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),g=c;for(let x of a)g=typeof x=="function"?x(g):x;let w=ec({items:g,lookup:f});for(let x of h.values())w=x(w);d&&u(g),w.length>0?l?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:x,nodes:v,setNodes:y}=t.getState();x&&y(v)})},[]),o=oc(n),r=(0,O.useCallback)(a=>{let{edges:c=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:l,edgeLookup:f}=t.getState(),p=c;for(let h of a)p=typeof h=="function"?h(p):h;d?u(p):l&&l(ec({items:p,lookup:f}))},[]),i=oc(r),s=(0,O.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,T.jsx)(Ec.Provider,{value:s,children:e})}function hg(){let e=(0,O.useContext)(Ec);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var mg=e=>!!e.panZoom;function bn(){let e=ag(),t=ue(),n=hg(),o=ae(mg),r=(0,O.useMemo)(()=>{let i=l=>t.getState().nodeLookup.get(l),s=l=>{n.nodeQueue.push(l)},a=l=>{n.edgeQueue.push(l)},c=l=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),h=nc(l)?l:f.get(l.id),g=h.parentId?fr(h.position,h.measured,h.parentId,f,p):h.position,w={...h,position:g,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Lt(w)},u=(l,f,p={replace:!1})=>{s(h=>h.map(g=>{if(g.id===l){let w=typeof f=="function"?f(g):f;return p.replace&&nc(w)?w:{...g,...w}}return g}))},d=(l,f,p={replace:!1})=>{a(h=>h.map(g=>{if(g.id===l){let w=typeof f=="function"?f(g):f;return p.replace&&fg(w)?w:{...g,...w}}return g}))};return{getNodes:()=>t.getState().nodes.map(l=>({...l})),getNode:l=>i(l)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:l=[]}=t.getState();return l.map(f=>({...f}))},getEdge:l=>t.getState().edgeLookup.get(l),setNodes:s,setEdges:a,addNodes:l=>{let f=Array.isArray(l)?l:[l];n.nodeQueue.push(p=>[...p,...f])},addEdges:l=>{let f=Array.isArray(l)?l:[l];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:l=[],edges:f=[],transform:p}=t.getState(),[h,g,w]=p;return{nodes:l.map(x=>({...x})),edges:f.map(x=>({...x})),viewport:{x:h,y:g,zoom:w}}},deleteElements:async({nodes:l=[],edges:f=[]})=>{let{nodes:p,edges:h,onNodesDelete:g,onEdgesDelete:w,triggerNodeChanges:x,triggerEdgeChanges:v,onDelete:y,onBeforeDelete:b}=t.getState(),{nodes:k,edges:_}=await ra({nodesToRemove:l,edgesToRemove:f,nodes:p,edges:h,onBeforeDelete:b}),N=_.length>0,I=k.length>0;if(N){let M=_.map(tc);w?.(_),v(M)}if(I){let M=k.map(tc);g?.(k),x(M)}return(I||N)&&y?.({nodes:k,edges:_}),{deletedNodes:k,deletedEdges:_}},getIntersectingNodes:(l,f=!0,p)=>{let h=lr(l),g=h?l:c(l),w=p!==void 0;return g?(p||t.getState().nodes).filter(x=>{let v=t.getState().nodeLookup.get(x.id);if(v&&!h&&(x.id===l.id||!v.internals.positionAbsolute))return!1;let y=Lt(w?x:v),b=mn(y,g);return f&&b>0||b>=y.width*y.height||b>=g.width*g.height}):[]},isNodeIntersecting:(l,f,p=!0)=>{let g=lr(l)?l:c(l);if(!g)return!1;let w=mn(g,f);return p&&w>0||w>=f.width*f.height||w>=g.width*g.height},updateNode:u,updateNodeData:(l,f,p={replace:!1})=>{u(l,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},updateEdge:d,updateEdgeData:(l,f,p={replace:!1})=>{d(l,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},getNodesBounds:l=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return sr(l,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:l,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${l}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:l,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${l?f?`-${l}-${f}`:`-${l}`:""}`)?.values()??[]),fitView:async l=>{let f=t.getState().fitViewResolver??aa();return t.setState({fitViewQueued:!0,fitViewOptions:l,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,O.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var rc=e=>e.selected,yg=typeof window<"u"?window:void 0;function xg({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=ue(),{deleteElements:o}=bn(),r=wn(e,{actInsideInputWithModifier:!1}),i=wn(t,{target:yg});(0,O.useEffect)(()=>{if(r){let{edges:s,nodes:a}=n.getState();o({nodes:a.filter(rc),edges:s.filter(rc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,O.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function wg(e){let t=ue();(0,O.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=uo(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ne.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var No={position:"absolute",width:"100%",height:"100%",top:0,left:0},bg=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function vg({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panActivationKeyPressed:r,panOnScrollSpeed:i=.5,panOnScrollMode:s=Ye.Free,zoomOnDoubleClick:a=!0,panOnDrag:c=!0,defaultViewport:u,translateExtent:d,minZoom:l,maxZoom:f,zoomActivationKeyCode:p,preventScrolling:h=!0,children:g,noWheelClassName:w,noPanClassName:x,onViewportChange:v,isControlledViewport:y,paneClickDistance:b,selectionOnDrag:k}){let _=ue(),N=(0,O.useRef)(null),{userSelectionActive:I,lib:M,connectionInProgress:R}=ae(bg,le),$=wn(p),F=(0,O.useRef)();wg(N);let B=(0,O.useCallback)(m=>{v?.({x:m[0],y:m[1],zoom:m[2]}),y||_.setState({transform:m})},[v,y]);return(0,O.useEffect)(()=>{if(N.current){F.current=Ma({domNode:N.current,minZoom:l,maxZoom:f,translateExtent:d,viewport:u,onDraggingChange:P=>_.setState(A=>A.paneDragging===P?A:{paneDragging:P}),onPanZoomStart:(P,A)=>{let{onViewportChangeStart:D,onMoveStart:V}=_.getState();V?.(P,A),D?.(A)},onPanZoom:(P,A)=>{let{onViewportChange:D,onMove:V}=_.getState();V?.(P,A),D?.(A)},onPanZoomEnd:(P,A)=>{let{onViewportChangeEnd:D,onMoveEnd:V}=_.getState();V?.(P,A),D?.(A)}});let{x:m,y:S,zoom:C}=F.current.getViewport();return _.setState({panZoom:F.current,transform:[m,S,C],domNode:N.current.closest(".react-flow")}),()=>{F.current?.destroy()}}},[]),(0,O.useEffect)(()=>{F.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panActivationKeyPressed:r,panOnScrollSpeed:i,panOnScrollMode:s,zoomOnDoubleClick:a,panOnDrag:c,zoomActivationKeyPressed:$,preventScrolling:h,noPanClassName:x,userSelectionActive:I,noWheelClassName:w,lib:M,onTransformChange:B,connectionInProgress:R,selectionOnDrag:k,paneClickDistance:b})},[e,t,n,o,r,i,s,a,c,$,h,x,I,w,M,B,R,k,b]),(0,T.jsx)("div",{className:"react-flow__renderer",ref:N,style:No,children:g})}var kg=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function _g(){let{userSelectionActive:e,userSelectionRect:t}=ae(kg,le);return e&&t?(0,T.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Nr=(e,t)=>n=>{n.target===t.current&&e?.(n)},Sg=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Eg({isSelecting:e,selectionKeyPressed:t,selectionMode:n=wt.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:s,onSelectionStart:a,onSelectionEnd:c,onPaneClick:u,onPaneContextMenu:d,onPaneScroll:l,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:h,children:g}){let w=(0,O.useRef)(0),x=ue(),{userSelectionActive:v,elementsSelectable:y,dragging:b,panBy:k,autoPanSpeed:_}=ae(Sg,le),N=y&&(e||v),I=(0,O.useRef)(null),M=(0,O.useRef)(),R=(0,O.useRef)(new Set),$=(0,O.useRef)(new Set),F=(0,O.useRef)(!1),B=(0,O.useRef)(!1),m=(0,O.useRef)({x:0,y:0}),S=(0,O.useRef)(!1),C=L=>{if(B.current||F.current||x.getState().connection.inProgress){B.current=!1,F.current=!1;return}u?.(L),x.getState().resetSelectedElements(),x.setState({nodesSelectionActive:!1})},P=L=>{if(Array.isArray(o)&&o?.includes(2)){L.preventDefault();return}d?.(L)},A=l?L=>l(L):void 0,D=L=>{B.current&&(L.stopPropagation(),B.current=!1)},V=L=>{if(L.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:Z,transform:K}=x.getState();if(M.current=Z?.getBoundingClientRect(),!M.current)return;let ee=L.target===I.current;if(!ee&&!!L.target.closest(".nokey")||!e||!(s&&ee||t)||L.button!==0||!L.isPrimary)return;L.target?.setPointerCapture?.(L.pointerId),B.current=!1;let{x:re,y:ie}=Ie(L.nativeEvent,M.current),se=Ht({x:re,y:ie},K);x.setState({userSelectionRect:{width:0,height:0,startX:se.x,startY:se.y,x:re,y:ie}}),ee||(L.stopPropagation(),L.preventDefault())};function H(L,Z){let{userSelectionRect:K}=x.getState();if(!K)return;let{transform:ee,nodeLookup:j,edgeLookup:te,connectionLookup:re,triggerNodeChanges:ie,triggerEdgeChanges:se,defaultEdgeOptions:me}=x.getState(),oe={x:K.startX,y:K.startY},{x:Ce,y:_e}=vt(oe,ee),Se={startX:oe.x,startY:oe.y,x:L<Ce?L:Ce,y:Z<_e?Z:_e,width:Math.abs(L-Ce),height:Math.abs(Z-_e)},ze=R.current,z=$.current;R.current=new Set(so(j,Se,ee,n===wt.Partial,!0).map(Q=>Q.id)),$.current=new Set;let W=me?.selectable??!0;for(let Q of R.current){let ce=re.get(Q);if(ce)for(let{edgeId:ge}of ce.values()){let Oe=te.get(ge);Oe&&(Oe.selectable??W)&&$.current.add(ge)}}if(!pr(ze,R.current)){let Q=Rt(j,R.current,!0);ie(Q)}if(!pr(z,$.current)){let Q=Rt(te,$.current);se(Q)}x.setState({userSelectionRect:Se,userSelectionActive:!0,nodesSelectionActive:!1})}function q(){if(!r||!M.current)return;let[L,Z]=ao(m.current,M.current,_);k({x:L,y:Z}).then(K=>{if(!B.current||!K){w.current=requestAnimationFrame(q);return}let{x:ee,y:j}=m.current;H(ee,j),w.current=requestAnimationFrame(q)})}let G=()=>{cancelAnimationFrame(w.current),w.current=0,S.current=!1};(0,O.useEffect)(()=>()=>G(),[]);let Y=L=>{let{userSelectionRect:Z,transform:K,resetSelectedElements:ee}=x.getState();if(!M.current||!Z)return;let{x:j,y:te}=Ie(L.nativeEvent,M.current);m.current={x:j,y:te};let re=vt({x:Z.startX,y:Z.startY},K);if(!B.current){let ie=t?0:i;if(Math.hypot(j-re.x,te-re.y)<=ie)return;ee(),a?.(L)}B.current=!0,S.current||(q(),S.current=!0),H(j,te)},J=L=>{if(!N){L.target===I.current&&x.getState().connection.inProgress&&(F.current=!0);return}L.button===0&&(L.target?.releasePointerCapture?.(L.pointerId),!v&&L.target===I.current&&x.getState().userSelectionRect&&C?.(L),x.setState({userSelectionActive:!1,userSelectionRect:null}),B.current&&(c?.(L),x.setState({nodesSelectionActive:R.current.size>0})),G())},ne=L=>{L.target?.releasePointerCapture?.(L.pointerId),G()},X=o===!0||Array.isArray(o)&&o.includes(0);return(0,T.jsxs)("div",{className:fe(["react-flow__pane",{draggable:X,dragging:b,selection:e}]),onClick:N?void 0:Nr(C,I),onContextMenu:Nr(P,I),onWheel:Nr(A,I),onPointerEnter:N?void 0:f,onPointerMove:N?Y:p,onPointerUp:J,onPointerCancel:N?ne:void 0,onPointerDownCapture:N?V:void 0,onClickCapture:N?D:void 0,onPointerLeave:h,ref:I,style:No,children:[g,(0,T.jsx)(_g,{})]})}function Mr({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:s,nodeLookup:a,onError:c}=t.getState(),u=a.get(e);if(!u){c?.("012",Ne.error012(e));return}t.setState({nodesSelectionActive:!1}),u.selected?(n||u.selected&&s)&&(i({nodes:[u],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Nc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:s}){let a=ue(),[c,u]=(0,O.useState)(!1),d=(0,O.useRef)();return(0,O.useEffect)(()=>{if(!t)return d.current=ba({getStoreItems:()=>a.getState(),onNodeMouseDown:l=>{Mr({id:l,store:a,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,a,e]),(0,O.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:s})},[n,o,t,i,e,r,s]),c}var Ng=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Cc(){let e=ue();return(0,O.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:s,onError:a,updateNodePositions:c,nodeLookup:u,nodeOrigin:d}=e.getState(),l=new Map,f=Ng(s),p=r?i[0]:5,h=r?i[1]:5,g=n.direction.x*p*n.factor,w=n.direction.y*h*n.factor;for(let[,x]of u){if(!f(x))continue;let v={x:x.internals.positionAbsolute.x+g,y:x.internals.positionAbsolute.y+w};r&&(v=$t(v,i));let{position:y,positionAbsolute:b}=ar({nodeId:x.id,nextPosition:v,nodeLookup:u,nodeExtent:o,nodeOrigin:d,onError:a});x.position=y,x.internals.positionAbsolute=b,l.set(x.id,x)}c(l)},[])}var Pr=(0,O.createContext)(null),Cg=Pr.Provider;Pr.Consumer;var Mc=()=>(0,O.useContext)(Pr),Mg=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Ic=(0,O.createContext)(null);function Ig({children:e}){let t=ae(Mg,le);return(0,T.jsx)(Ic.Provider,{value:t,children:e})}function Pg(){let e=(0,O.useContext)(Ic);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var zg={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Ag=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:s}=o,{fromHandle:a,toHandle:c,isValid:u}=s;if(!a&&!r)return zg;let d=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:d,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===tt.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:d&&u}};function Dg({type:e="source",position:t=U.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:s,onConnect:a,children:c,className:u,onMouseDown:d,onTouchStart:l,...f},p){let h=s||null,g=e==="target",w=ue(),x=Mc(),{connectOnClick:v,noPanClassName:y,rfId:b}=Pg(),{connectingFrom:k,connectingTo:_,clickConnecting:N,isPossibleEndHandle:I,connectionInProcess:M,clickConnectionInProcess:R,valid:$}=ae(Ag(x,h,e),le);x||w.getState().onError?.("010",Ne.error010());let F=S=>{let{defaultEdgeOptions:C,onConnect:P,hasDefaultEdges:A}=w.getState(),D={...C,...S};if(A){let{edges:V,setEdges:H,onError:q}=w.getState();H(dg(D,V,{onError:q}))}P?.(D),a?.(D)},B=S=>{if(!x)return;let C=yr(S.nativeEvent);if(r&&(C&&S.button===0||!C)){let P=w.getState();xo.onPointerDown(S.nativeEvent,{handleDomNode:S.currentTarget,autoPanOnConnect:P.autoPanOnConnect,connectionMode:P.connectionMode,connectionRadius:P.connectionRadius,domNode:P.domNode,nodeLookup:P.nodeLookup,lib:P.lib,isTarget:g,handleId:h,nodeId:x,flowId:P.rfId,panBy:P.panBy,cancelConnection:P.cancelConnection,onConnectStart:P.onConnectStart,onConnectEnd:(...A)=>w.getState().onConnectEnd?.(...A),updateConnection:P.updateConnection,onConnect:F,isValidConnection:n||((...A)=>w.getState().isValidConnection?.(...A)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:P.autoPanSpeed,dragThreshold:P.connectionDragThreshold})}C?d?.(S):l?.(S)},m=S=>{let{onClickConnectStart:C,onClickConnectEnd:P,connectionClickStartHandle:A,connectionMode:D,isValidConnection:V,lib:H,rfId:q,nodeLookup:G,connection:Y}=w.getState();if(!x||!A&&!r)return;if(!A){C?.(S.nativeEvent,{nodeId:x,handleId:h,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:x,type:e,id:h}});return}let J=hr(S.target),ne=n||V,{connection:X,isValid:L}=xo.isValid(S.nativeEvent,{handle:{nodeId:x,id:h,type:e},connectionMode:D,fromNodeId:A.nodeId,fromHandleId:A.id||null,fromType:A.type,isValidConnection:ne,flowId:q,doc:J,lib:H,nodeLookup:G});L&&X&&F(X);let Z=structuredClone(Y);delete Z.inProgress,Z.toPosition=Z.toHandle?Z.toHandle.position:null,P?.(S,Z),w.setState({connectionClickStartHandle:null})};return(0,T.jsx)("div",{"data-handleid":h,"data-nodeid":x,"data-handlepos":t,"data-id":`${b}-${x}-${h}-${e}`,className:fe(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",y,u,{source:!g,target:g,connectable:o,connectablestart:r,connectableend:i,clickconnecting:N,connectingfrom:k,connectingto:_,valid:$,connectionindicator:o&&(!M||I)&&(M||R?i:r)}]),onMouseDown:B,onTouchStart:B,onClick:v?m:void 0,ref:p,...f,children:c})}var Ze=(0,O.memo)(_c(Dg));function Tg({data:e,isConnectable:t,sourcePosition:n=U.Bottom}){return(0,T.jsxs)(T.Fragment,{children:[e?.label,(0,T.jsx)(Ze,{type:"source",position:n,isConnectable:t})]})}function Og({data:e,isConnectable:t,targetPosition:n=U.Top,sourcePosition:o=U.Bottom}){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ze,{type:"target",position:n,isConnectable:t}),e?.label,(0,T.jsx)(Ze,{type:"source",position:o,isConnectable:t})]})}function Lg(){return null}function $g({data:e,isConnectable:t,targetPosition:n=U.Top}){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ze,{type:"target",position:n,isConnectable:t}),e?.label]})}var _o={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},ic={input:Tg,default:Og,output:$g,group:Lg};function Hg(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Bg=e=>{let{width:t,height:n,x:o,y:r}=Ot(e.nodeLookup,{filter:i=>!!i.selected});return{width:Me(t)?t:null,height:Me(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Vg({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=ue(),{width:r,height:i,transformString:s,userSelectionActive:a}=ae(Bg,le),c=Cc(),u=(0,O.useRef)(null);(0,O.useEffect)(()=>{n||u.current?.focus({preventScroll:!0})},[n]);let d=!a&&r!==null&&i!==null;if(Nc({nodeRef:u,disabled:!d}),!d)return null;let l=e?p=>{let h=o.getState().nodes.filter(g=>g.selected);e(p,h)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(_o,p.key)&&(p.preventDefault(),c({direction:_o[p.key],factor:p.shiftKey?4:1}))};return(0,T.jsx)("div",{className:fe(["react-flow__nodesselection","react-flow__container",t]),style:{transform:s},children:(0,T.jsx)("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:l,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var sc=typeof window<"u"?window:void 0,Rg=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function Pc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:u,selectionOnDrag:d,selectionMode:l,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:g,zoomActivationKeyCode:w,elementsSelectable:x,zoomOnScroll:v,zoomOnPinch:y,panOnScroll:b,panOnScrollSpeed:k,panOnScrollMode:_,zoomOnDoubleClick:N,panOnDrag:I,autoPanOnSelection:M,defaultViewport:R,translateExtent:$,minZoom:F,maxZoom:B,preventScrolling:m,onSelectionContextMenu:S,noWheelClassName:C,noPanClassName:P,disableKeyboardA11y:A,onViewportChange:D,isControlledViewport:V}){let{nodesSelectionActive:H,userSelectionActive:q}=ae(Rg,le),G=wn(u,{target:sc}),Y=wn(g,{target:sc}),J=Y||I,ne=Y||b,X=d&&J!==!0,L=G||q||X;return xg({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,T.jsx)(vg,{onPaneContextMenu:i,elementsSelectable:x,zoomOnScroll:v,zoomOnPinch:y,panOnScroll:ne,panActivationKeyPressed:Y,panOnScrollSpeed:k,panOnScrollMode:_,zoomOnDoubleClick:N,panOnDrag:!G&&J,defaultViewport:R,translateExtent:$,minZoom:F,maxZoom:B,zoomActivationKeyCode:w,preventScrolling:m,noWheelClassName:C,noPanClassName:P,onViewportChange:D,isControlledViewport:V,paneClickDistance:a,selectionOnDrag:X,children:(0,T.jsxs)(Eg,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,panOnDrag:J,autoPanOnSelection:M,isSelecting:!!L,selectionMode:l,selectionKeyPressed:G,paneClickDistance:a,selectionOnDrag:X,children:[e,H&&(0,T.jsx)(Vg,{onSelectionContextMenu:S,noPanClassName:P,disableKeyboardA11y:A})]})})}Pc.displayName="FlowRenderer";var Fg=(0,O.memo)(Pc),Wg=e=>t=>e?so(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function qg(e){return ae((0,O.useCallback)(Wg(e),[e]),le)}var Xg=e=>e.updateNodeInternals;function Yg(){let e=ae(Xg),[t]=(0,O.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,O.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Zg({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=ue(),i=(0,O.useRef)(null),s=(0,O.useRef)(null),a=(0,O.useRef)(e.sourcePosition),c=(0,O.useRef)(e.targetPosition),u=(0,O.useRef)(t),d=n&&!!e.internals.handleBounds;return(0,O.useEffect)(()=>{i.current&&!e.hidden&&(!d||s.current!==i.current)&&(s.current&&o?.unobserve(s.current),o?.observe(i.current),s.current=i.current)},[d,e.hidden]),(0,O.useEffect)(()=>()=>{s.current&&(o?.unobserve(s.current),s.current=null)},[]),(0,O.useEffect)(()=>{if(i.current){let l=u.current!==t,f=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(l||f||p)&&(u.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function Gg({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:s,nodesDraggable:a,elementsSelectable:c,nodesConnectable:u,nodesFocusable:d,resizeObserver:l,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:h,rfId:g,nodeTypes:w,nodeClickDistance:x,onError:v}){let{node:y,internals:b,isParent:k}=ae(L=>{let Z=L.nodeLookup.get(e),K=L.parentLookup.has(e);return{node:Z,internals:Z.internals,isParent:K}},le),_=y.type||"default",N=w?.[_]||ic[_];N===void 0&&(v?.("003",Ne.error003(_)),_="default",N=w?.default||ic.default);let I=!!(y.draggable||a&&typeof y.draggable>"u"),M=!!(y.selectable||c&&typeof y.selectable>"u"),R=!!(y.connectable||u&&typeof y.connectable>"u"),$=!!(y.focusable||d&&typeof y.focusable>"u"),F=ue(),B=dr(y),m=Zg({node:y,nodeType:_,hasDimensions:B,resizeObserver:l}),S=Nc({nodeRef:m,disabled:y.hidden||!I,noDragClassName:f,handleSelector:y.dragHandle,nodeId:e,isSelectable:M,nodeClickDistance:x}),C=Cc();if(y.hidden)return null;let P=Pe(y),A=Hg(y),D=M||I||t||n||o||r,V=n?L=>n(L,{...b.userNode}):void 0,H=o?L=>o(L,{...b.userNode}):void 0,q=r?L=>r(L,{...b.userNode}):void 0,G=i?L=>i(L,{...b.userNode}):void 0,Y=s?L=>s(L,{...b.userNode}):void 0,J=L=>{let{selectNodesOnDrag:Z,nodeDragThreshold:K}=F.getState();M&&(!Z||!I||K>0)&&Mr({id:e,store:F,nodeRef:m}),t&&t(L,{...b.userNode})},ne=L=>{if(!(mr(L.nativeEvent)||h)){if(tr.includes(L.key)&&M){let Z=L.key==="Escape";Mr({id:e,store:F,unselect:Z,nodeRef:m})}else if(I&&y.selected&&Object.prototype.hasOwnProperty.call(_o,L.key)){L.preventDefault();let{ariaLabelConfig:Z}=F.getState();F.setState({ariaLiveMessage:Z["node.a11yDescription.ariaLiveMessage"]({direction:L.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),C({direction:_o[L.key],factor:L.shiftKey?4:1})}}},X=()=>{if(h||!m.current?.matches(":focus-visible"))return;let{transform:L,width:Z,height:K,autoPanOnNodeFocus:ee,setCenter:j}=F.getState();if(!ee)return;so(new Map([[e,y]]),{x:0,y:0,width:Z,height:K},L,!0).length>0||j(y.position.x+P.width/2,y.position.y+P.height/2,{zoom:L[2]})};return(0,T.jsx)("div",{className:fe(["react-flow__node",`react-flow__node-${_}`,{[p]:I},y.className,{selected:y.selected,selectable:M,parent:k,draggable:I,dragging:S}]),ref:m,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:B?"visible":"hidden",...y.style,...A},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:V,onMouseMove:H,onMouseLeave:q,onContextMenu:G,onClick:J,onDoubleClick:Y,onKeyDown:$?ne:void 0,tabIndex:$?0:void 0,onFocus:$?X:void 0,role:y.ariaRole??($?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${wc}-${g}`,"aria-label":y.ariaLabel,...y.domAttributes,children:(0,T.jsx)(Cg,{value:e,children:(0,T.jsx)(N,{id:e,data:y.data,type:_,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:y.selected??!1,selectable:M,draggable:I,deletable:y.deletable??!0,isConnectable:R,sourcePosition:y.sourcePosition,targetPosition:y.targetPosition,dragging:S,dragHandle:y.dragHandle,zIndex:b.z,parentId:y.parentId,...P})})})}var Ug=(0,O.memo)(Gg),Kg=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function zc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ae(Kg,le),i=qg(e.onlyRenderVisibleElements),s=Yg();return(0,T.jsx)("div",{className:"react-flow__nodes",style:No,children:i.map(a=>(0,T.jsx)(Ug,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:s,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}zc.displayName="NodeRenderer";var jg=(0,O.memo)(zc);function Qg(e){return ae((0,O.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),s=n.nodeLookup.get(r.target);i&&s&&ua({sourceNode:i,targetNode:s,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),le)}var Jg=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,T.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},eh=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,T.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},ac={[At.Arrow]:Jg,[At.ArrowClosed]:eh};function th(e){let t=ue();return(0,O.useMemo)(()=>Object.prototype.hasOwnProperty.call(ac,e)?ac[e]:(t.getState().onError?.("009",Ne.error009(e)),null),[e])}var nh=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:s,orient:a="auto-start-reverse"})=>{let c=th(t);return c?(0,T.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:a,refX:"0",refY:"0",children:(0,T.jsx)(c,{color:n,strokeWidth:s})}):null},Ac=({defaultColor:e,rfId:t})=>{let n=ae(i=>i.edges),o=ae(i=>i.defaultEdgeOptions),r=(0,O.useMemo)(()=>pa(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,T.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,T.jsx)("defs",{children:r.map(i=>(0,T.jsx)(nh,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Ac.displayName="MarkerDefinitions";var oh=(0,O.memo)(Ac);function Dc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:s=[2,4],labelBgBorderRadius:a=2,children:c,className:u,...d}){let[l,f]=(0,O.useState)({x:1,y:0,width:0,height:0}),p=fe(["react-flow__edge-textwrapper",u]),h=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(h.current){let g=h.current.getBBox();f({x:g.x,y:g.y,width:g.width,height:g.height})}},[n]),n?(0,T.jsxs)("g",{transform:`translate(${e-l.width/2} ${t-l.height/2})`,className:p,visibility:l.width?"visible":"hidden",...d,children:[r&&(0,T.jsx)("rect",{width:l.width+2*s[0],x:-s[0],y:-s[1],height:l.height+2*s[1],className:"react-flow__edge-textbg",style:i,rx:a,ry:a}),(0,T.jsx)("text",{className:"react-flow__edge-text",y:l.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}Dc.displayName="EdgeText";var rh=(0,O.memo)(Dc);function Ft({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:u=20,...d}){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("path",{...d,d:e,fill:"none",className:fe(["react-flow__edge-path",d.className])}),u?(0,T.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,o&&Me(t)&&Me(n)?(0,T.jsx)(rh,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function cc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===U.Left||e===U.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Tc({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top}){let[s,a]=cc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,u]=cc({pos:i,x1:o,y1:r,x2:e,y2:t}),[d,l,f,p]=fo({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:a,targetControlX:c,targetControlY:u});return[`M${e},${t} C${s},${a} ${c},${u} ${o},${r}`,d,l,f,p]}function Oc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s,targetPosition:a,label:c,labelStyle:u,labelShowBg:d,labelBgStyle:l,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:w,interactionWidth:x})=>{let[v,y,b]=Tc({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a}),k=e.isInternal?void 0:t;return(0,T.jsx)(Ft,{id:k,path:v,labelX:y,labelY:b,label:c,labelStyle:u,labelShowBg:d,labelBgStyle:l,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:w,interactionWidth:x})})}var ih=Oc({isInternal:!1}),Lc=Oc({isInternal:!0});ih.displayName="SimpleBezierEdge";Lc.displayName="SimpleBezierEdgeInternal";function $c(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:l,style:f,sourcePosition:p=U.Bottom,targetPosition:h=U.Top,markerEnd:g,markerStart:w,pathOptions:x,interactionWidth:v})=>{let[y,b,k]=xn({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:x?.borderRadius,offset:x?.offset,stepPosition:x?.stepPosition}),_=e.isInternal?void 0:t;return(0,T.jsx)(Ft,{id:_,path:y,labelX:b,labelY:k,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:l,style:f,markerEnd:g,markerStart:w,interactionWidth:v})})}var Hc=$c({isInternal:!1}),Bc=$c({isInternal:!0});Hc.displayName="SmoothStepEdge";Bc.displayName="SmoothStepEdgeInternal";function Vc(e){return(0,O.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,T.jsx)(Hc,{...n,id:o,pathOptions:(0,O.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var sh=Vc({isInternal:!1}),Rc=Vc({isInternal:!0});sh.displayName="StepEdge";Rc.displayName="StepEdgeInternal";function Fc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:l,style:f,markerEnd:p,markerStart:h,interactionWidth:g})=>{let[w,x,v]=go({sourceX:n,sourceY:o,targetX:r,targetY:i}),y=e.isInternal?void 0:t;return(0,T.jsx)(Ft,{id:y,path:w,labelX:x,labelY:v,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:l,style:f,markerEnd:p,markerStart:h,interactionWidth:g})})}var ah=Fc({isInternal:!1}),Wc=Fc({isInternal:!0});ah.displayName="StraightEdge";Wc.displayName="StraightEdgeInternal";function qc(e){return(0,O.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s=U.Bottom,targetPosition:a=U.Top,label:c,labelStyle:u,labelShowBg:d,labelBgStyle:l,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:w,pathOptions:x,interactionWidth:v})=>{let[y,b,k]=po({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a,curvature:x?.curvature}),_=e.isInternal?void 0:t;return(0,T.jsx)(Ft,{id:_,path:y,labelX:b,labelY:k,label:c,labelStyle:u,labelShowBg:d,labelBgStyle:l,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:w,interactionWidth:v})})}var ch=qc({isInternal:!1}),Xc=qc({isInternal:!0});ch.displayName="BezierEdge";Xc.displayName="BezierEdgeInternal";var lc={default:Xc,straight:Wc,step:Rc,smoothstep:Bc,simplebezier:Lc},uc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},lh=(e,t,n)=>n===U.Left?e-t:n===U.Right?e+t:e,uh=(e,t,n)=>n===U.Top?e-t:n===U.Bottom?e+t:e,dc="react-flow__edgeupdater";function fc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:s,type:a}){return(0,T.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:s,className:fe([dc,`${dc}-${a}`]),cx:lh(t,o,e),cy:uh(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function dh({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:s,sourcePosition:a,targetPosition:c,onReconnect:u,onReconnectStart:d,onReconnectEnd:l,setReconnecting:f,setUpdateHover:p}){let h=ue(),g=(b,k)=>{if(b.button!==0)return;let{autoPanOnConnect:_,domNode:N,connectionMode:I,connectionRadius:M,lib:R,onConnectStart:$,cancelConnection:F,nodeLookup:B,rfId:m,panBy:S,updateConnection:C}=h.getState(),P=k.type==="target",A=(H,q)=>{f(!1),l?.(H,n,k.type,q)},D=H=>u?.(n,H),V=(H,q)=>{f(!0),d?.(b,n,k.type),$?.(H,q)};xo.onPointerDown(b.nativeEvent,{autoPanOnConnect:_,connectionMode:I,connectionRadius:M,domNode:N,handleId:k.id,nodeId:k.nodeId,nodeLookup:B,isTarget:P,edgeUpdaterType:k.type,lib:R,flowId:m,cancelConnection:F,panBy:S,isValidConnection:(...H)=>h.getState().isValidConnection?.(...H)??!0,onConnect:D,onConnectStart:V,onConnectEnd:(...H)=>h.getState().onConnectEnd?.(...H),onReconnectEnd:A,updateConnection:C,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>g(b,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),x=b=>g(b,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),y=()=>p(!1);return(0,T.jsxs)(T.Fragment,{children:[(e===!0||e==="source")&&(0,T.jsx)(fc,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:w,onMouseEnter:v,onMouseOut:y,type:"source"}),(e===!0||e==="target")&&(0,T.jsx)(fc,{position:c,centerX:i,centerY:s,radius:t,onMouseDown:x,onMouseEnter:v,onMouseOut:y,type:"target"})]})}function fh({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:u,reconnectRadius:d,onReconnect:l,onReconnectStart:f,onReconnectEnd:p,rfId:h,edgeTypes:g,noPanClassName:w,onError:x,disableKeyboardA11y:v}){let y=ae(j=>j.edgeLookup.get(e)),b=ae(j=>j.defaultEdgeOptions);y=b?{...b,...y}:y;let k=y.type||"default",_=g?.[k]||lc[k];_===void 0&&(x?.("011",Ne.error011(k)),k="default",_=g?.default||lc.default);let N=!!(y.focusable||t&&typeof y.focusable>"u"),I=typeof l<"u"&&(y.reconnectable||n&&typeof y.reconnectable>"u"),M=!!(y.selectable||o&&typeof y.selectable>"u"),R=(0,O.useRef)(null),[$,F]=(0,O.useState)(!1),[B,m]=(0,O.useState)(!1),S=ue(),{zIndex:C=y.zIndex,sourceX:P,sourceY:A,targetX:D,targetY:V,sourcePosition:H,targetPosition:q}=ae((0,O.useCallback)(j=>{let te=j.nodeLookup.get(y.source),re=j.nodeLookup.get(y.target);if(!te||!re)return uc;let ie=fa({id:e,sourceNode:te,targetNode:re,sourceHandle:y.sourceHandle||null,targetHandle:y.targetHandle||null,connectionMode:j.connectionMode,onError:x}),se=la({selected:y.selected,zIndex:y.zIndex,sourceNode:te,targetNode:re,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...ie||uc,zIndex:se}},[y.source,y.target,y.sourceHandle,y.targetHandle,y.selected,y.zIndex,x]),le),G=(0,O.useMemo)(()=>y.markerStart?`url('#${ho(y.markerStart,h)}')`:void 0,[y.markerStart,h]),Y=(0,O.useMemo)(()=>y.markerEnd?`url('#${ho(y.markerEnd,h)}')`:void 0,[y.markerEnd,h]);if(y.hidden||P===null||A===null||D===null||V===null)return null;let J=j=>{let{addSelectedEdges:te,unselectNodesAndEdges:re,multiSelectionActive:ie}=S.getState();M&&(S.setState({nodesSelectionActive:!1}),y.selected&&ie?(re({nodes:[],edges:[y]}),R.current?.blur()):te([e])),r&&r(j,y)},ne=i?j=>{i(j,{...y})}:void 0,X=s?j=>{s(j,{...y})}:void 0,L=a?j=>{a(j,{...y})}:void 0,Z=c?j=>{c(j,{...y})}:void 0,K=u?j=>{u(j,{...y})}:void 0,ee=j=>{if(!v&&tr.includes(j.key)&&M){let{unselectNodesAndEdges:te,addSelectedEdges:re}=S.getState();j.key==="Escape"?(R.current?.blur(),te({edges:[y]})):re([e])}};return(0,T.jsx)("svg",{style:{zIndex:C},children:(0,T.jsxs)("g",{className:fe(["react-flow__edge",`react-flow__edge-${k}`,y.className,w,{selected:y.selected,animated:y.animated,inactive:!M&&!r,updating:$,selectable:M}]),onClick:J,onDoubleClick:ne,onContextMenu:X,onMouseEnter:L,onMouseMove:Z,onMouseLeave:K,onKeyDown:N?ee:void 0,tabIndex:N?0:void 0,role:y.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":y.ariaLabel===null?void 0:y.ariaLabel||`Edge from ${y.source} to ${y.target}`,"aria-describedby":N?`${bc}-${h}`:void 0,ref:R,...y.domAttributes,children:[!B&&(0,T.jsx)(_,{id:e,source:y.source,target:y.target,type:y.type,selected:y.selected,animated:y.animated,selectable:M,deletable:y.deletable??!0,label:y.label,labelStyle:y.labelStyle,labelShowBg:y.labelShowBg,labelBgStyle:y.labelBgStyle,labelBgPadding:y.labelBgPadding,labelBgBorderRadius:y.labelBgBorderRadius,sourceX:P,sourceY:A,targetX:D,targetY:V,sourcePosition:H,targetPosition:q,data:y.data,style:y.style,sourceHandleId:y.sourceHandle,targetHandleId:y.targetHandle,markerStart:G,markerEnd:Y,pathOptions:"pathOptions"in y?y.pathOptions:void 0,interactionWidth:y.interactionWidth}),I&&(0,T.jsx)(dh,{edge:y,isReconnectable:I,reconnectRadius:d,onReconnect:l,onReconnectStart:f,onReconnectEnd:p,sourceX:P,sourceY:A,targetX:D,targetY:V,sourcePosition:H,targetPosition:q,setUpdateHover:F,setReconnecting:m})]})})}var ph=(0,O.memo)(fh),gh=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function Yc({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:s,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:l,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:g}){let{edgesFocusable:w,edgesReconnectable:x,elementsSelectable:v,onError:y}=ae(gh,le),b=Qg(t);return(0,T.jsxs)("div",{className:"react-flow__edges",children:[(0,T.jsx)(oh,{defaultColor:e,rfId:n}),b.map(k=>(0,T.jsx)(ph,{id:k,edgesFocusable:w,edgesReconnectable:x,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:u,onClick:d,reconnectRadius:l,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:y,edgeTypes:o,disableKeyboardA11y:g},k))]})}Yc.displayName="EdgeRenderer";var hh=(0,O.memo)(Yc),pc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function mh({children:e}){let t=ue(),n=(0,O.useRef)(null),[o]=(0,O.useState)(()=>t.getState().transform);return Sc(()=>{let r=null,i=()=>{let s=t.getState().transform;r&&s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]||(r=s,n.current&&(n.current.style.transform=pc(s)))};return i(),t.subscribe(i)},[t]),(0,T.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:pc(o)},children:e})}function yh(e){let t=bn(),n=(0,O.useRef)(!1);(0,O.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var xh=e=>e.panZoom?.syncViewport;function wh(e){let t=ae(xh),n=ue();return(0,O.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function gc(e){return e.connection.inProgress?{...e.connection,to:Ht(e.connection.to,e.transform)}:{...e.connection}}function bh(e){return e?n=>{let o=gc(n);return e(o)}:gc}function vh(e){let t=bh(e);return ae(t,le)}var kh=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function _h({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:s,isValid:a,inProgress:c}=ae(kh,le);return!(i&&r&&c)?null:(0,T.jsx)("svg",{style:e,width:i,height:s,className:"react-flow__connectionline react-flow__container",children:(0,T.jsx)("g",{className:fe(["react-flow__connection",gr(a)]),children:(0,T.jsx)(Zc,{style:t,type:n,CustomComponent:o,isValid:a})})})}var Zc=({style:e,type:t=He.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:s,fromHandle:a,fromPosition:c,to:u,toNode:d,toHandle:l,toPosition:f,pointer:p}=vh();if(!r)return;if(n)return(0,T.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:s,fromHandle:a,fromX:i.x,fromY:i.y,toX:u.x,toY:u.y,fromPosition:c,toPosition:f,connectionStatus:gr(o),toNode:d,toHandle:l,pointer:p});let h="",g={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:u.x,targetY:u.y,targetPosition:f};switch(t){case He.Bezier:[h]=po(g);break;case He.SimpleBezier:[h]=Tc(g);break;case He.Step:[h]=xn({...g,borderRadius:0});break;case He.SmoothStep:[h]=xn(g);break;default:[h]=go(g)}return(0,T.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Zc.displayName="ConnectionLine";var Sh={};function hc(e=Sh){let t=(0,O.useRef)(e),n=ue();(0,O.useEffect)(()=>{},[e])}function Eh(){let e=ue(),t=(0,O.useRef)(!1);(0,O.useEffect)(()=>{},[])}function Gc({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:l,onSelectionStart:f,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:g,connectionLineComponent:w,connectionLineContainerStyle:x,selectionKeyCode:v,selectionOnDrag:y,selectionMode:b,multiSelectionKeyCode:k,panActivationKeyCode:_,zoomActivationKeyCode:N,deleteKeyCode:I,onlyRenderVisibleElements:M,elementsSelectable:R,defaultViewport:$,translateExtent:F,minZoom:B,maxZoom:m,preventScrolling:S,defaultMarkerColor:C,zoomOnScroll:P,zoomOnPinch:A,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:H,zoomOnDoubleClick:q,panOnDrag:G,autoPanOnSelection:Y,onPaneClick:J,onPaneMouseEnter:ne,onPaneMouseMove:X,onPaneMouseLeave:L,onPaneScroll:Z,onPaneContextMenu:K,paneClickDistance:ee,nodeClickDistance:j,onEdgeContextMenu:te,onEdgeMouseEnter:re,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:me,onReconnect:oe,onReconnectStart:Ce,onReconnectEnd:_e,noDragClassName:Se,noWheelClassName:ze,noPanClassName:z,disableKeyboardA11y:W,nodeExtent:Q,rfId:ce,viewport:ge,onViewportChange:Oe,nodesDraggable:Et}){return hc(e),hc(t),Eh(),yh(n),wh(ge),(0,T.jsx)(Fg,{onPaneClick:J,onPaneMouseEnter:ne,onPaneMouseMove:X,onPaneMouseLeave:L,onPaneContextMenu:K,onPaneScroll:Z,paneClickDistance:ee,deleteKeyCode:I,selectionKeyCode:v,selectionOnDrag:y,selectionMode:b,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:k,panActivationKeyCode:_,zoomActivationKeyCode:N,elementsSelectable:R,zoomOnScroll:P,zoomOnPinch:A,zoomOnDoubleClick:q,panOnScroll:D,panOnScrollSpeed:V,panOnScrollMode:H,panOnDrag:G,autoPanOnSelection:Y,defaultViewport:$,translateExtent:F,minZoom:B,maxZoom:m,onSelectionContextMenu:l,preventScrolling:S,noDragClassName:Se,noWheelClassName:ze,noPanClassName:z,disableKeyboardA11y:W,onViewportChange:Oe,isControlledViewport:!!ge,children:(0,T.jsxs)(mh,{children:[(0,T.jsx)(hh,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:s,onReconnect:oe,onReconnectStart:Ce,onReconnectEnd:_e,onlyRenderVisibleElements:M,onEdgeContextMenu:te,onEdgeMouseEnter:re,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:me,defaultMarkerColor:C,noPanClassName:z,disableKeyboardA11y:W,rfId:ce}),(0,T.jsx)(_h,{style:g,type:h,component:w,containerStyle:x}),(0,T.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,T.jsx)(jg,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:j,onlyRenderVisibleElements:M,noPanClassName:z,noDragClassName:Se,disableKeyboardA11y:W,nodeExtent:Q,rfId:ce,nodesDraggable:Et}),(0,T.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Gc.displayName="GraphView";var Nh=(0,O.memo)(Gc),Ch=ur("React Flow","https://reactflow.dev/"),mc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:l,zIndexMode:f="basic"}={})=>{let p=new Map,h=new Map,g=new Map,w=new Map,x=o??t??[],v=n??e??[],y=d??[0,0],b=l??Tt;_r(g,w,x);let{nodesInitialized:k}=mo(v,p,h,{nodeOrigin:y,nodeExtent:b,zIndexMode:f}),_=[0,0,1];if(s&&r&&i){let N=Ot(p,{filter:$=>!!(($.width||$.initialWidth)&&($.height||$.initialHeight))}),{x:I,y:M,zoom:R}=yn(N,r,i,c,u,a?.padding??.1);_=[I,M,R]}return{rfId:"1",width:r??0,height:i??0,transform:_,nodes:v,nodesInitialized:k,nodeLookup:p,parentLookup:h,edges:x,edgeLookup:w,connectionLookup:g,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:u,translateExtent:Tt,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:tt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:y,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:a,fitViewResolver:null,connection:{...or},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Ch,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:nr,zIndexMode:f,defaultEdgeOptions:void 0,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map,onNodesDelete:void 0,onEdgesDelete:void 0,onDelete:void 0,onBeforeDelete:void 0,onViewportChangeStart:void 0,onViewportChange:void 0,onViewportChangeEnd:void 0,onNodeDragStart:void 0,onNodeDrag:void 0,onNodeDragStop:void 0,onSelectionDragStart:void 0,onSelectionDrag:void 0,onSelectionDragStop:void 0,onMoveStart:void 0,onMove:void 0,onMoveEnd:void 0,onConnect:void 0,onConnectStart:void 0,onConnectEnd:void 0,onClickConnectStart:void 0,onClickConnectEnd:void 0}},Mh=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:u,nodeOrigin:d,nodeExtent:l,zIndexMode:f})=>Xa((p,h)=>{async function g(){let{nodeLookup:w,panZoom:x,fitViewOptions:v,fitViewResolver:y,width:b,height:k,minZoom:_,maxZoom:N}=h();x&&(await oa({nodes:w,width:b,height:k,panZoom:x,minZoom:_,maxZoom:N},v),y?.resolve(!0),p({fitViewResolver:null}))}return{...mc({nodes:e,edges:t,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:u,nodeOrigin:d,nodeExtent:l,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:w=>{let{nodeLookup:x,parentLookup:v,nodeOrigin:y,nodeExtent:b,elevateNodesOnSelect:k,fitViewQueued:_,zIndexMode:N,nodesSelectionActive:I}=h(),{nodesInitialized:M,hasSelectedNodes:R}=mo(w,x,v,{nodeOrigin:y,nodeExtent:b,elevateNodesOnSelect:k,checkEquality:!0,zIndexMode:N}),$=I&&R;_&&M?(g(),p({nodes:w,nodesInitialized:M,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:$})):p({nodes:w,nodesInitialized:M,nodesSelectionActive:$})},setEdges:w=>{let{connectionLookup:x,edgeLookup:v}=h();_r(x,v,w),p({edges:w})},setDefaultNodesAndEdges:(w,x)=>{if(w){let{setNodes:v}=h();v(w),p({hasDefaultNodes:!0})}if(x){let{setEdges:v}=h();v(x),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:x,nodeLookup:v,parentLookup:y,domNode:b,nodeOrigin:k,nodeExtent:_,debug:N,fitViewQueued:I,zIndexMode:M}=h(),{changes:R,updatedInternals:$}=ya(w,v,y,b,k,_,M);$&&(ha(v,y,{nodeOrigin:k,nodeExtent:_,zIndexMode:M}),I?(g(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),R?.length>0&&(N&&console.log("React Flow: trigger node changes",R),x?.(R)))},updateNodePositions:(w,x=!1)=>{let v=[],y=[],{nodeLookup:b,triggerNodeChanges:k,connection:_,updateConnection:N,onNodesChangeMiddlewareMap:I}=h();for(let[M,R]of w){let $=b.get(M),F=!!($?.expandParent&&$?.parentId&&R?.position),B={id:M,type:"position",position:F?{x:Math.max(0,R.position.x),y:Math.max(0,R.position.y)}:R.position,dragging:x};if($&&_.inProgress&&_.fromNode.id===$.id){let m=nt($,_.fromHandle,U.Left,!0);N({..._,from:m})}F&&$.parentId&&v.push({id:M,parentId:$.parentId,rect:{...R.internals.positionAbsolute,width:R.measured.width??0,height:R.measured.height??0}}),y.push(B)}if(v.length>0){let{parentLookup:M,nodeOrigin:R}=h(),$=yo(v,b,M,R);y.push(...$)}for(let M of I.values())y=M(y);k(y)},triggerNodeChanges:w=>{let{onNodesChange:x,setNodes:v,nodes:y,hasDefaultNodes:b,debug:k}=h();if(w?.length){if(b){let _=Ir(w,y);v(_)}k&&console.log("React Flow: trigger node changes",w),x?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:x,setEdges:v,edges:y,hasDefaultEdges:b,debug:k}=h();if(w?.length){if(b){let _=lg(w,y);v(_)}k&&console.log("React Flow: trigger edge changes",w),x?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:x,edgeLookup:v,nodeLookup:y,triggerNodeChanges:b,triggerEdgeChanges:k}=h();if(x){let _=w.map(N=>_t(N,!0));b(_);return}b(Rt(y,new Set([...w]),!0)),k(Rt(v))},addSelectedEdges:w=>{let{multiSelectionActive:x,edgeLookup:v,nodeLookup:y,triggerNodeChanges:b,triggerEdgeChanges:k}=h();if(x){let _=w.map(N=>_t(N,!0));k(_);return}k(Rt(v,new Set([...w]))),b(Rt(y,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:x}={})=>{let{edges:v,nodes:y,nodeLookup:b,triggerNodeChanges:k,triggerEdgeChanges:_}=h(),N=w||y,I=x||v,M=[];for(let $ of N){if(!$.selected)continue;let F=b.get($.id);F&&(F.selected=!1),M.push(_t($.id,!1))}let R=[];for(let $ of I)$.selected&&R.push(_t($.id,!1));k(M),_(R)},setMinZoom:w=>{let{panZoom:x,maxZoom:v}=h();x?.setScaleExtent([w,v]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:x,minZoom:v}=h();x?.setScaleExtent([v,w]),p({maxZoom:w})},setTranslateExtent:w=>{h().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:x,triggerNodeChanges:v,triggerEdgeChanges:y,elementsSelectable:b}=h();if(!b)return;let k=x.reduce((N,I)=>I.selected?[...N,_t(I.id,!1)]:N,[]),_=w.reduce((N,I)=>I.selected?[...N,_t(I.id,!1)]:N,[]);v(k),y(_)},setNodeExtent:w=>{let{nodes:x,nodeLookup:v,parentLookup:y,nodeOrigin:b,elevateNodesOnSelect:k,nodeExtent:_,zIndexMode:N}=h();w[0][0]===_[0][0]&&w[0][1]===_[0][1]&&w[1][0]===_[1][0]&&w[1][1]===_[1][1]||(mo(x,v,y,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:k,checkEquality:!1,zIndexMode:N}),p({nodeExtent:w}))},panBy:w=>{let{transform:x,width:v,height:y,panZoom:b,translateExtent:k}=h();return xa({delta:w,panZoom:b,transform:x,translateExtent:k,width:v,height:y})},setCenter:async(w,x,v)=>{let{width:y,height:b,maxZoom:k,panZoom:_}=h();if(!_)return!1;let N=typeof v?.zoom<"u"?v.zoom:k;return await _.setViewport({x:y/2-w*N,y:b/2-x*N,zoom:N},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...or}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...mc()})}},Object.is);function zr({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:s,initialMaxZoom:a,initialFitViewOptions:c,fitView:u,nodeOrigin:d,nodeExtent:l,zIndexMode:f,children:p}){let[h]=(0,O.useState)(()=>Mh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:u,minZoom:s,maxZoom:a,fitViewOptions:c,nodeOrigin:d,nodeExtent:l,zIndexMode:f}));return(0,T.jsx)(Wp,{value:h,children:(0,T.jsx)(gg,{children:(0,T.jsx)(Ig,{children:p})})})}function Ih({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:s,fitView:a,fitViewOptions:c,minZoom:u,maxZoom:d,nodeOrigin:l,nodeExtent:f,zIndexMode:p}){return(0,O.useContext)(So)?(0,T.jsx)(T.Fragment,{children:e}):(0,T.jsx)(zr,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:s,fitView:a,initialFitViewOptions:c,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:l,nodeExtent:f,zIndexMode:p,children:e})}var Ph={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function zh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:s,onNodeClick:a,onEdgeClick:c,onInit:u,onMove:d,onMoveStart:l,onMoveEnd:f,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:w,onClickConnectEnd:x,onNodeMouseEnter:v,onNodeMouseMove:y,onNodeMouseLeave:b,onNodeContextMenu:k,onNodeDoubleClick:_,onNodeDragStart:N,onNodeDrag:I,onNodeDragStop:M,onNodesDelete:R,onEdgesDelete:$,onDelete:F,onSelectionChange:B,onSelectionDragStart:m,onSelectionDrag:S,onSelectionDragStop:C,onSelectionContextMenu:P,onSelectionStart:A,onSelectionEnd:D,onBeforeDelete:V,connectionMode:H,connectionLineType:q=He.Bezier,connectionLineStyle:G,connectionLineComponent:Y,connectionLineContainerStyle:J,deleteKeyCode:ne="Backspace",selectionKeyCode:X="Shift",selectionOnDrag:L=!1,selectionMode:Z=wt.Full,panActivationKeyCode:K="Space",multiSelectionKeyCode:ee=Bt()?"Meta":"Control",zoomActivationKeyCode:j=Bt()?"Meta":"Control",snapToGrid:te,snapGrid:re,onlyRenderVisibleElements:ie=!1,selectNodesOnDrag:se,nodesDraggable:me,autoPanOnNodeFocus:oe,nodesConnectable:Ce,nodesFocusable:_e,nodeOrigin:Se=vc,edgesFocusable:ze,edgesReconnectable:z,elementsSelectable:W=!0,defaultViewport:Q=ng,minZoom:ce=.5,maxZoom:ge=2,translateExtent:Oe=Tt,preventScrolling:Et=!0,nodeExtent:Le,defaultMarkerColor:at="#b1b1b7",zoomOnScroll:wl=!0,zoomOnPinch:bl=!0,panOnScroll:vl=!1,panOnScrollSpeed:kl=.5,panOnScrollMode:_l=Ye.Free,zoomOnDoubleClick:Sl=!0,panOnDrag:El=!0,onPaneClick:Nl,onPaneMouseEnter:Cl,onPaneMouseMove:Ml,onPaneMouseLeave:Il,onPaneScroll:Pl,onPaneContextMenu:zl,paneClickDistance:Al=1,nodeClickDistance:Dl=0,children:Tl,onReconnect:Ol,onReconnectStart:Ll,onReconnectEnd:$l,onEdgeContextMenu:Hl,onEdgeDoubleClick:Bl,onEdgeMouseEnter:Vl,onEdgeMouseMove:Rl,onEdgeMouseLeave:Fl,reconnectRadius:Wl=10,onNodesChange:ql,onEdgesChange:Xl,noDragClassName:Yl="nodrag",noWheelClassName:Zl="nowheel",noPanClassName:Vr="nopan",fitView:Rr,fitViewOptions:Fr,connectOnClick:Gl,attributionPosition:Ul,proOptions:Kl,defaultEdgeOptions:jl,elevateNodesOnSelect:Ql=!0,elevateEdgesOnSelect:Jl=!1,disableKeyboardA11y:Wr=!1,autoPanOnConnect:eu,autoPanOnNodeDrag:tu,autoPanOnSelection:nu=!0,autoPanSpeed:ou,connectionRadius:ru,isValidConnection:iu,onError:su,style:au,id:qr,nodeDragThreshold:cu,connectionDragThreshold:lu,viewport:uu,onViewportChange:du,width:fu,height:pu,colorMode:gu="light",debug:hu,onScroll:Xr,ariaLabelConfig:mu,zIndexMode:Yr="basic",...yu},xu){let Lo=qr||"1",wu=sg(gu),bu=(0,O.useCallback)(Zr=>{Zr.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Xr?.(Zr)},[Xr]);return(0,T.jsx)("div",{"data-testid":"rf__wrapper",...yu,onScroll:bu,style:{...au,...Ph},ref:xu,className:fe(["react-flow",r,wu]),id:qr,role:"application",children:(0,T.jsxs)(Ih,{nodes:e,edges:t,width:fu,height:pu,fitView:Rr,fitViewOptions:Fr,minZoom:ce,maxZoom:ge,nodeOrigin:Se,nodeExtent:Le,zIndexMode:Yr,children:[(0,T.jsx)(ig,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:w,onClickConnectEnd:x,nodesDraggable:me,autoPanOnNodeFocus:oe,nodesConnectable:Ce,nodesFocusable:_e,edgesFocusable:ze,edgesReconnectable:z,elementsSelectable:W,elevateNodesOnSelect:Ql,elevateEdgesOnSelect:Jl,minZoom:ce,maxZoom:ge,nodeExtent:Le,onNodesChange:ql,onEdgesChange:Xl,snapToGrid:te,snapGrid:re,connectionMode:H,translateExtent:Oe,connectOnClick:Gl,defaultEdgeOptions:jl,fitView:Rr,fitViewOptions:Fr,onNodesDelete:R,onEdgesDelete:$,onDelete:F,onNodeDragStart:N,onNodeDrag:I,onNodeDragStop:M,onSelectionDrag:S,onSelectionDragStart:m,onSelectionDragStop:C,onMove:d,onMoveStart:l,onMoveEnd:f,noPanClassName:Vr,nodeOrigin:Se,rfId:Lo,autoPanOnConnect:eu,autoPanOnNodeDrag:tu,autoPanSpeed:ou,onError:su,connectionRadius:ru,isValidConnection:iu,selectNodesOnDrag:se,nodeDragThreshold:cu,connectionDragThreshold:lu,onBeforeDelete:V,debug:hu,ariaLabelConfig:mu,zIndexMode:Yr}),(0,T.jsx)(Nh,{onInit:u,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:y,onNodeMouseLeave:b,onNodeContextMenu:k,onNodeDoubleClick:_,nodeTypes:i,edgeTypes:s,connectionLineType:q,connectionLineStyle:G,connectionLineComponent:Y,connectionLineContainerStyle:J,selectionKeyCode:X,selectionOnDrag:L,selectionMode:Z,deleteKeyCode:ne,multiSelectionKeyCode:ee,panActivationKeyCode:K,zoomActivationKeyCode:j,onlyRenderVisibleElements:ie,defaultViewport:Q,translateExtent:Oe,minZoom:ce,maxZoom:ge,preventScrolling:Et,zoomOnScroll:wl,zoomOnPinch:bl,zoomOnDoubleClick:Sl,panOnScroll:vl,panOnScrollSpeed:kl,panOnScrollMode:_l,panOnDrag:El,autoPanOnSelection:nu,onPaneClick:Nl,onPaneMouseEnter:Cl,onPaneMouseMove:Ml,onPaneMouseLeave:Il,onPaneScroll:Pl,onPaneContextMenu:zl,paneClickDistance:Al,nodeClickDistance:Dl,onSelectionContextMenu:P,onSelectionStart:A,onSelectionEnd:D,onReconnect:Ol,onReconnectStart:Ll,onReconnectEnd:$l,onEdgeContextMenu:Hl,onEdgeDoubleClick:Bl,onEdgeMouseEnter:Vl,onEdgeMouseMove:Rl,onEdgeMouseLeave:Fl,reconnectRadius:Wl,defaultMarkerColor:at,noDragClassName:Yl,noWheelClassName:Zl,noPanClassName:Vr,rfId:Lo,disableKeyboardA11y:Wr,nodeExtent:Le,viewport:uu,onViewportChange:du,nodesDraggable:me}),(0,T.jsx)(tg,{onSelectionChange:B}),Tl,(0,T.jsx)(Kp,{proOptions:Kl,position:Ul}),(0,T.jsx)(Up,{rfId:Lo,disableKeyboardA11y:Wr})]})})}var Uc=_c(zh);var Lv=Ne.error014();function Ar(e){return ae((0,O.useCallback)(n=>n.nodeLookup.get(e),[e]),le)}function Ah({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,T.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:fe(["react-flow__background-pattern",n,o])})}function Dh({radius:e,className:t}){return(0,T.jsx)("circle",{cx:e,cy:e,r:e,className:fe(["react-flow__background-pattern","dots",t])})}var Be;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Be||(Be={}));var Th={[Be.Dots]:1,[Be.Lines]:1,[Be.Cross]:6},Oh=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Kc({id:e,variant:t=Be.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:s,bgColor:a,style:c,className:u,patternClassName:d}){let l=(0,O.useRef)(null),{transform:f,patternId:p}=ae(Oh,le),h=o||Th[t],g=t===Be.Dots,w=t===Be.Cross,x=Array.isArray(n)?n:[n,n],v=[x[0]*f[2]||1,x[1]*f[2]||1],y=h*f[2],b=Array.isArray(i)?i:[i,i],k=w?[y,y]:v,_=[b[0]*f[2]+k[0]/2,b[1]*f[2]+k[1]/2],N=`${p}${e||""}`;return(0,T.jsxs)("svg",{className:fe(["react-flow__background",u]),style:{...c,...No,"--xy-background-color-props":a,"--xy-background-pattern-color-props":s},ref:l,"data-testid":"rf__background",children:[(0,T.jsx)("pattern",{id:N,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${_[0]},-${_[1]})`,children:g?(0,T.jsx)(Dh,{radius:y/2,className:d}):(0,T.jsx)(Ah,{dimensions:k,lineWidth:r,variant:t,className:d})}),(0,T.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}Kc.displayName="Background";var jc=(0,O.memo)(Kc);function Lh(){return(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,T.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function $h(){return(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,T.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Hh(){return(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,T.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Bh(){return(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,T.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Vh(){return(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,T.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function ko({children:e,className:t,...n}){return(0,T.jsx)("button",{type:"button",className:fe(["react-flow__controls-button",t]),...n,children:e})}var Rh=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Qc({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:s,onFitView:a,onInteractiveChange:c,className:u,children:d,position:l="bottom-left",orientation:f="vertical","aria-label":p}){let h=ue(),{isInteractive:g,minZoomReached:w,maxZoomReached:x,ariaLabelConfig:v}=ae(Rh,le),{zoomIn:y,zoomOut:b,fitView:k}=bn(),_=()=>{y(),i?.()},N=()=>{b(),s?.()},I=()=>{k(r),a?.()},M=()=>{h.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),c?.(!g)};return(0,T.jsxs)(Eo,{className:fe(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",u]),position:l,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ko,{onClick:_,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:x,children:(0,T.jsx)(Lh,{})}),(0,T.jsx)(ko,{onClick:N,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:w,children:(0,T.jsx)($h,{})})]}),n&&(0,T.jsx)(ko,{className:"react-flow__controls-fitview",onClick:I,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,T.jsx)(Hh,{})}),o&&(0,T.jsx)(ko,{className:"react-flow__controls-interactive",onClick:M,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:g?(0,T.jsx)(Vh,{}):(0,T.jsx)(Bh,{})}),d]})}Qc.displayName="Controls";var Jc=(0,O.memo)(Qc);function Fh({id:e,x:t,y:n,width:o,height:r,style:i,color:s,strokeColor:a,strokeWidth:c,className:u,borderRadius:d,shapeRendering:l,selected:f,onClick:p}){let{background:h,backgroundColor:g}=i||{},w=s||h||g;return(0,T.jsx)("rect",{className:fe(["react-flow__minimap-node",{selected:f},u]),x:t,y:n,rx:d,ry:d,width:o,height:r,style:{fill:w,stroke:a,strokeWidth:c},shapeRendering:l,onClick:p?x=>p(x,e):void 0})}var Wh=(0,O.memo)(Fh),qh=e=>e.nodes.map(t=>t.id),Cr=e=>e instanceof Function?e:()=>e;function Xh({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Wh,onClick:s}){let a=ae(qh,le),c=Cr(t),u=Cr(e),d=Cr(n),l=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,T.jsx)(T.Fragment,{children:a.map(f=>(0,T.jsx)(Zh,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:s,shapeRendering:l},f))})}function Yh({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:s,NodeComponent:a,onClick:c}){let{node:u,x:d,y:l,width:f,height:p}=ae(h=>{let g=h.nodeLookup.get(e);if(!g)return{node:void 0,x:0,y:0,width:0,height:0};let w=g.internals.userNode,{x,y:v}=g.internals.positionAbsolute,{width:y,height:b}=Pe(w);return{node:w,x,y:v,width:y,height:b}},le);return!u||u.hidden||!dr(u)?null:(0,T.jsx)(a,{x:d,y:l,width:f,height:p,style:u.style,selected:!!u.selected,className:o(u),color:t(u),borderRadius:r,strokeColor:n(u),strokeWidth:i,shapeRendering:s,onClick:c,id:u.id})}var Zh=(0,O.memo)(Yh),Gh=(0,O.memo)(Xh),Uh=200,Kh=150,jh=e=>!e.hidden,Qh=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]},n=!1;for(let o of e.nodeLookup.values())if(!o.hidden){n=!0;break}return{viewBB:t,boundingRect:n?cr(Ot(e.nodeLookup,{filter:jh}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},yc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Jh=(e,t)=>yc(e.viewBB,t.viewBB)&&yc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,em="react-flow__minimap-desc";function el({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:s,nodeComponent:a,bgColor:c,maskColor:u,maskStrokeColor:d,maskStrokeWidth:l,position:f="bottom-right",onClick:p,onNodeClick:h,pannable:g=!1,zoomable:w=!1,ariaLabel:x,inversePan:v,zoomStep:y=1,offsetScale:b=5}){let k=ue(),_=(0,O.useRef)(null),{boundingRect:N,panZoom:I,viewBB:M,rfId:R,translateExtent:$,flowWidth:F,flowHeight:B,ariaLabelConfig:m}=ae(Qh,Jh),S=e?.width??Uh,C=e?.height??Kh,P=N.width/S,A=N.height/C,D=Math.max(P,A),V=D*S,H=D*C,q=b*D,G=N.x-(V-N.width)/2-q,Y=N.y-(H-N.height)/2-q,J=V+q*2,ne=H+q*2,X=`${em}-${R}`,L=(0,O.useRef)(0),Z=(0,O.useRef)();L.current=D,(0,O.useEffect)(()=>{let re=k.getState().panZoom;if(_.current&&re)return Z.current=Ea({domNode:_.current,panZoom:re,getTransform:()=>k.getState().transform,getViewScale:()=>L.current}),()=>{Z.current?.destroy()}},[I]),(0,O.useEffect)(()=>{Z.current?.update({translateExtent:$,width:F,height:B,inversePan:v,pannable:g,zoomStep:y,zoomable:w})},[g,w,v,y,$,F,B]);let K=p?re=>{let[ie,se]=Z.current?.pointer(re)||[0,0];p(re,{x:ie,y:se})}:void 0,ee=(0,O.useCallback)((re,ie)=>{let se=k.getState().nodeLookup.get(ie).internals.userNode;h?.(re,se)},[h]),j=h?ee:void 0,te=x??m["minimap.ariaLabel"];return(0,T.jsx)(Eo,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof l=="number"?l*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:fe(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,T.jsxs)("svg",{width:S,height:C,viewBox:`${G} ${Y} ${J} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":X,ref:_,onClick:K,children:[te&&(0,T.jsx)("title",{id:X,children:te}),(0,T.jsx)(Gh,{onClick:j,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:s,nodeComponent:a}),(0,T.jsx)("path",{className:"react-flow__minimap-mask",d:`M${G-q},${Y-q}h${J+q*2}v${ne+q*2}h${-J-q*2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}el.displayName="MiniMap";var $v=(0,O.memo)(el),tm=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,nm={[ot.Line]:"right",[ot.Handle]:"bottom-right"};function om({nodeId:e,position:t,variant:n=ot.Handle,className:o,style:r=void 0,children:i,color:s,minWidth:a=10,minHeight:c=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:l=!1,resizeDirection:f,autoScale:p=!0,shouldResize:h,onResizeStart:g,onResize:w,onResizeEnd:x}){let v=Mc(),y=typeof e=="string"?e:v,b=ue(),k=(0,O.useRef)(null),_=n===ot.Handle,N=ae((0,O.useCallback)(tm(_&&p),[_,p]),le),I=(0,O.useRef)(null),M=t??nm[n];(0,O.useEffect)(()=>{if(!(!k.current||!y))return I.current||(I.current=Pa({domNode:k.current,nodeId:y,getStoreItems:()=>{let{nodeLookup:$,transform:F,snapGrid:B,snapToGrid:m,nodeOrigin:S,domNode:C}=b.getState();return{nodeLookup:$,transform:F,snapGrid:B,snapToGrid:m,nodeOrigin:S,paneDomNode:C}},onChange:($,F)=>{let{triggerNodeChanges:B,nodeLookup:m,parentLookup:S,nodeOrigin:C}=b.getState(),P=[],A={x:$.x,y:$.y},D=m.get(y);if(D&&D.expandParent&&D.parentId){let V=D.origin??C,H=$.width??D.measured.width??0,q=$.height??D.measured.height??0,G={id:D.id,parentId:D.parentId,rect:{width:H,height:q,...fr({x:$.x??D.position.x,y:$.y??D.position.y},{width:H,height:q},D.parentId,m,V)}},Y=yo([G],m,S,C);P.push(...Y),A.x=$.x?Math.max(V[0]*H,$.x):void 0,A.y=$.y?Math.max(V[1]*q,$.y):void 0}if(A.x!==void 0&&A.y!==void 0){let V={id:y,type:"position",position:{...A}};P.push(V)}if($.width!==void 0&&$.height!==void 0){let H={id:y,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:$.width,height:$.height}};P.push(H)}for(let V of F){let H={...V,type:"position"};P.push(H)}B(P)},onEnd:({width:$,height:F})=>{let B={id:y,type:"dimensions",resizing:!1,dimensions:{width:$,height:F}};b.getState().triggerNodeChanges([B])}})),I.current.update({controlPosition:M,boundaries:{minWidth:a,minHeight:c,maxWidth:u,maxHeight:d},keepAspectRatio:l,resizeDirection:f,onResizeStart:g,onResize:w,onResizeEnd:x,shouldResize:h}),()=>{I.current?.destroy()}},[M,a,c,u,d,l,g,w,x,h]);let R=M.split("-");return(0,T.jsx)("div",{className:fe(["react-flow__resize-control","nodrag",...R,n,o]),ref:k,style:{...r,scale:N,...s&&{[_?"backgroundColor":"borderColor"]:s}},children:i})}var Hv=(0,O.memo)(om);var St={recency:"recent",workspace:"all",status:"all",kind:"all",archived:!1,query:""};var rm=e=>(/^[A-Za-z]:[/\\]/.test(e)||e.startsWith("\\\\")?e.replaceAll("\\","/"):e).replace(/\/+$/,"");function vn(e){let t=e.map(o=>({id:o.id,path:rm(o.path)})),n=new Map;for(let o of t){let r=-1;for(let i of t)i.id!==o.id&&i.path.length>r&&o.path!==i.path&&o.path.startsWith(i.path+"/")&&(n.set(o.id,i.id),r=i.path.length)}return n}function kn(e){let t=new Map(e.map(o=>[o.id,o])),n=new Map;for(let o of e){if(!o.parentId||!t.has(o.parentId))continue;let r=new Set([o.id]),i=o.parentId;for(;i&&t.has(i)&&!r.has(i);)r.add(i),i=t.get(i).parentId;(!i||!r.has(i))&&n.set(o.id,o.parentId)}return n}function Co(e,t,n){let o=new Map;for(let[s,a]of vn(e.workspaces))o.set("workspace:"+s,"workspace:"+a);for(let s of e.workspaces)for(let a of s.sessionIds)o.has("session:"+a)||o.set("session:"+a,"workspace:"+s.id);for(let s of e.sessions)o.has("session:"+s.id)||o.set("session:"+s.id,"workspace:__ungrouped__");for(let[s,a]of kn(e.sessions))o.set("session:"+s,"session:"+a);let r={...n},i=s=>{if(r[s])return r[s];let a=t[s],c=o.get(s);if(!a||!c)return a;let u=t[c],d=i(c);return!u||!d?a:r[s]={x:a.x+d.x-u.x,y:a.y+d.y-u.y}};for(let s of o.keys())t[s]&&i(s);return r}function Wt(e){let t=e==="workspace"?53:37;return{offset:{x:72,y:t},radius:t}}function tl(e,t){let n=t.x-e.x,o=t.y-e.y,r=Math.hypot(n,o),i=r>1e-9?n/r:1,s=r>1e-9?o/r:0;return{source:{x:e.x+i*e.radius,y:e.y+s*e.radius},target:{x:t.x-i*t.radius,y:t.y-s*t.radius}}}function im(e){let t=new Map,n=new Map,o=new Map;for(let l of[...e.workspaces].sort((f,p)=>f.id.localeCompare(p.id))){n.set("workspace:"+l.id,"workspace");for(let f of l.sessionIds)o.has(f)||o.set(f,l.id)}for(let[l,f]of vn(e.workspaces))t.set("workspace:"+l,"workspace:"+f);let r=kn(e.sessions);for(let l of e.sessions){let f="session:"+l.id;n.set(f,"session");let p=o.get(l.id)??"__ungrouped__";p==="__ungrouped__"&&n.set("workspace:__ungrouped__","workspace"),t.set(f,r.has(l.id)?"session:"+r.get(l.id):"workspace:"+p)}let i=new Map;for(let l of n.keys()){let f=t.get(l);!f||!n.has(f)||(i.has(f)||i.set(f,[]),i.get(f).push(l))}for(let l of i.values())l.sort();let s=new Map,a=l=>{if(s.has(l))return s.get(l);let f=Math.max(1,(i.get(l)??[]).reduce((p,h)=>p+a(h),0));return s.set(l,f),f},c={},u=280,d=[...n.keys()].filter(l=>!t.has(l)||!n.has(t.get(l))).sort();for(let l of d){let f=new Map,p=(w,x,v,y,b)=>{f.set(w,{x,y:v});let k=i.get(w)??[],_=k.reduce((M,R)=>M+a(R),0),N=Math.max(225,_*165/b),I=y-b/2;for(let M of k){let R=b*a(M)/_,$=I+R/2;p(M,x+Math.cos($)*N,v+Math.sin($)*N,$,Math.min(Math.PI*.8,R)),I+=R}};p(l,0,0,-Math.PI/2,2*Math.PI);let h=Math.min(...[...f.values()].map(w=>w.x)),g=Math.max(...[...f.values()].map(w=>w.x));for(let[w,x]of f){let v=Wt(n.get(w));c[w]={x:x.x-h+u-v.offset.x,y:x.y+290-v.offset.y}}u+=g-h+360}return c}function Mo(e,t){let n=im(e);return{...n,...Co(e,n,t)}}function nl(e,t,n=Date.now()){let o={...e};for(let r of t)Object.hasOwn(o,r)||Object.defineProperty(o,r,{value:{since:n,visits:[]},enumerable:!0,writable:!0,configurable:!0});return o}function Dr(e,t=Date.now()){return!Number.isFinite(e)||e<=0||e>t+6e4?"unknown":t-e<=7*864e5?"recent":"early"}function Tr(e,t=Date.now()){return e?e.visits.filter(o=>o>=t-30*864e5&&o<=t).length>=5?"frequent":t-e.since>=30*864e5?"infrequent":"accumulating":"accumulating"}function ol(e,t=Date.now()){let n=(e?.visits??[]).filter(o=>o>=t-2592e6&&o<=t);return(!n.length||t-n[n.length-1]>=30*6e4)&&n.push(t),{since:e?.since??t,visits:n}}var Io={recent:"\u8FD1\u671F",early:"\u65E9\u671F",unknown:"\u65F6\u95F4\u672A\u77E5"},Po={frequent:"\u5E38\u7528",infrequent:"\u4E0D\u5E38\u7528",accumulating:"\u4F7F\u7528\u8BB0\u5F55\u79EF\u7D2F\u4E2D"};function Or(e){return e.pending?"waiting":e.running===!0?"running":e.unread?"unread":e.running===!1?"idle":"unknown"}function Lr(e,t,n,o={},r=new Set,i=Date.now()){let s=vn(e.workspaces),a=new Set(e.currentSessionIds??(e.currentSessionId?[e.currentSessionId]:[])),c=m=>a.has(m.id)||m.running===!0||m.pending===!0,u=kn(e.sessions),d=new Map(e.sessions.map(m=>[m.id,m])),l=new Set(e.archivedSessionIds),f=e.sessions.filter(m=>c(m)||!m.blank&&m.origin!=="subagent"&&(t.archived||!l.has(m.id))),p=new Map(f.map(m=>[m.id,m])),h=new Set(e.workspaces.flatMap(m=>[...m.sessionIds])),g=f.filter(m=>!h.has(m.id)),w=[...e.workspaces];(g.length||[...u.values()].some(m=>!h.has(m)))&&w.push({id:"__ungrouped__",title:"\u672A\u5206\u7EC4",path:"",sessionIds:g.map(m=>m.id),virtual:!0});let x=[],v=[],y=t.query.trim().toLocaleLowerCase(),b=t.statuses??(t.status==="all"?[]:[t.status]),k=0,_=new Set,N=new Set,I=new Map;for(let m of w)for(let S of m.sessionIds)I.has(S)||I.set(S,m.id);let M=new Map(w.map(m=>[m.id,m])),R=Mo(e,n.positions),$=m=>n.positions["workspace:"+m]??R["workspace:"+m]??{x:280,y:290},F=m=>n.positions["session:"+m.id]??R["session:"+m.id]??{x:280,y:290},B=(m,S=!1)=>({id:"session:"+m.id,type:"bubble",position:F(m),data:{kind:"session",entityId:m.id,title:m.title,status:Or(m),path:m.cwd,workspaceId:I.get(m.id)??"__ungrouped__",parentSessionId:u.get(m.id),context:S,archived:l.has(m.id),updatedAt:m.updatedAt,current:a.has(m.id),working:m.running===!0,pinned:n.settings?.pinned?.includes(m.id),recency:Dr(m.updatedAt,i),frequency:Tr(n.settings?.usage?.[m.id],i)}});w.forEach(m=>{let S=m.id;for(;S&&S!==t.workspace;)S=s.get(S);let C=t.workspace==="all"||S===t.workspace,P=[...new Set(m.sessionIds)].flatMap(X=>p.has(X)&&I.get(X)===m.id?[p.get(X)]:[]),A=!y||(m.title+" "+m.path).toLocaleLowerCase().includes(y),D=P.filter(X=>C&&(A||X.title.toLocaleLowerCase().includes(y))&&(!b.length||b.includes(Or(X)))&&(!t.recency||t.recency==="all"||Dr(X.updatedAt,i)===t.recency)&&(!t.frequency||t.frequency==="all"||Tr(n.settings?.usage?.[X.id],i)===t.frequency)).sort((X,L)=>Number(n.settings?.pinned?.includes(L.id)??!1)-Number(n.settings?.pinned?.includes(X.id)??!1)),V=P.map(Or),H=["waiting","running","unread","idle"].find(X=>V.includes(X))??"unknown",q="workspace:"+m.id,G=!r.has(m.id);x.push({id:q,type:"bubble",position:$(m.id),data:{kind:"workspace",entityId:m.id,title:m.title,path:m.path,status:H,count:D.length,total:P.length,virtual:m.virtual,parentWorkspaceId:s.get(m.id),childWorkspaceCount:w.filter(X=>s.get(X.id)===m.id).length,collapsed:G,current:P.some(X=>a.has(X.id)),working:P.some(X=>X.running===!0)}});let Y=s.get(m.id);Y&&v.push({id:"workspace:"+Y+"->"+q,source:"workspace:"+Y,target:q}),k+=D.length;for(let X of D)_.add(X.id);let J=o[m.id]??20,ne=G||t.kind==="workspace"?[]:D.slice(0,J);for(let X of P.filter(c))ne.some(L=>L.id===X.id)||ne.push(X);ne.forEach(X=>{N.has(X.id)||(N.add(X.id),x.push(B(X)))})});for(let m of N){let S=u.get(m);S&&!N.has(S)&&(N.add(S),x.push(B(d.get(S),!0)))}for(let m of N){let S=u.get(m),C=S?"session:"+S:"workspace:"+(I.get(m)??"__ungrouped__"),P="session:"+m;v.push({id:C+"->"+P,source:C,target:P,...S?{sourceHandle:"branch-source",targetHandle:"branch-target"}:{}})}return{nodes:x,edges:v,matched:k,total:f.length,hidden:[..._].filter(m=>!N.has(m)).length}}var Ge="#6aabff";function _n(e){if(typeof e!="string")return;let t=e.trim().toLowerCase();if(/^#[\da-f]{6}$/.test(t))return t;if(/^#[\da-f]{3}$/.test(t))return"#"+[...t.slice(1)].map(n=>n+n).join("")}var rl=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),zo=(e,t,n)=>"#"+rl(e).map((o,r)=>Math.round(o*(1-n)+rl(t)[r]*n).toString(16).padStart(2,"0")).join("");function il(e){let t=_n(e)??Ge;return{workspace:zo(t,"#243247",.8),expanded:zo(t,"#080d17",.94),session:zo(t,"#ffffff",.82),text:"#ffffff",sessionText:"#111827",accent:zo(t,"#ffffff",.55)}}var Sn=()=>({schemaVersion:1,revision:0,positions:{},collapsed:[],views:{}}),qt=e=>!["__proto__","prototype","constructor"].includes(e)&&e.length<1e3,Ve=e=>!!e&&typeof e=="object"&&!Array.isArray(e),sl=e=>Ve(e)&&typeof e.x=="number"&&typeof e.y=="number"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Math.abs(e.x)<1e8&&Math.abs(e.y)<1e8;function sm(e){return Ve(e)&&typeof e.workspace=="string"&&(e.recency===void 0||["all","recent","early","unknown"].includes(String(e.recency)))&&(e.frequency===void 0||["all","frequent","infrequent","accumulating"].includes(String(e.frequency)))&&(e.statuses===void 0||Array.isArray(e.statuses)&&e.statuses.every(t=>["running","waiting","unread","idle","unknown"].includes(t)))&&["all","running","waiting","unread","idle","unknown"].includes(String(e.status))&&["all","workspace","session"].includes(String(e.kind))&&typeof e.archived=="boolean"&&typeof e.query=="string"}function al(e){if(!Ve(e)||e.schemaVersion!==1||!Number.isSafeInteger(e.revision)||Number(e.revision)<0||!Ve(e.positions)||!Array.isArray(e.collapsed)||!Ve(e.views))throw new Error("Invalid layout format or unsupported version");for(let[t,n]of Object.entries(e.positions))if(!qt(t)||!sl(n))throw new Error("Invalid layout position");if(!e.collapsed.every(t=>typeof t=="string"&&qt(t)))throw new Error("Invalid layout collapse state");for(let[t,n]of Object.entries(e.views)){if(!qt(t)||!Ve(n))throw new Error("Invalid layout view");if(n.viewport!==void 0&&(!sl(n.viewport)||typeof n.viewport.zoom!="number"||!Number.isFinite(n.viewport.zoom)||n.viewport.zoom<.1||n.viewport.zoom>3))throw new Error("Invalid layout viewport");if(n.filters!==void 0&&!sm(n.filters))throw new Error("Invalid layout filters")}}var Ao=class{positions={};viewports={};revision=0;storedRevision;storage;key;constructor(t,n){this.storage=t,this.key=n}loadStored(){let t=this.storage.getItem(this.key);if(t===null)return Sn();let n;try{n=JSON.parse(t)}catch{throw new Error("Invalid layout JSON")}al(n);let o=Ve(n.settings)?n.settings:{},r=Object.fromEntries(Object.entries(Ve(o.manualSummaries)?o.manualSummaries:{}).filter(([s,a])=>qt(s)&&typeof a=="string").map(([s,a])=>[s,a.slice(0,4e3)])),i=Object.fromEntries(Object.entries(Ve(o.usage)?o.usage:{}).filter(([s,a])=>qt(s)&&Ve(a)&&Number.isFinite(a.since)&&Number(a.since)>=0&&Array.isArray(a.visits)&&a.visits.every(c=>typeof c=="number"&&Number.isFinite(c)&&c>=0)).map(([s,a])=>[s,{since:a.since,visits:a.visits.slice(-2e3).sort((c,u)=>c-u)}]));return n.settings={theme:_n(o.theme)??Ge,reducedMotion:o.reducedMotion===!0,pinned:Array.isArray(o.pinned)?o.pinned.filter(s=>typeof s=="string"&&qt(s)):[],usage:i,manualSummaries:r},n}load(){let t=this.loadStored();this.storedRevision!==void 0&&t.revision!==this.storedRevision&&this.revision++,this.storedRevision=t.revision;let n=Object.fromEntries(Object.entries(t.views).map(([o,r])=>[o,{filters:r.filters}]));for(let[o,r]of Object.entries(this.viewports))n[o]={...n[o],...r};return{...t,revision:this.revision,positions:this.positions,views:n}}initializePositions(t){let n=this.load(),o=Object.fromEntries(Object.entries(t).filter(([r])=>!n.positions[r]));return Object.keys(o).length?this.savePatch({positions:o},n.revision):n}reset(t){if(this.storage.getItem(this.key)!==t)throw new Error("Layout conflict: another window changed the saved layout");let n=Sn();return this.storage.setItem(this.key,JSON.stringify(n)),this.positions={},this.viewports={},this.revision=0,this.storedRevision=0,n}savePatch(t,n){let o=this.load(),r=t.settings!==void 0||t.collapsed!==void 0||Object.values(t.views??{}).some(a=>a.filters!==void 0);if(r&&o.revision!==n)throw new Error("Layout conflict: another window saved a newer layout");let i={...o.views};for(let[a,c]of Object.entries(t.views??{}))i[a]={...i[a],...c};let s={schemaVersion:1,revision:o.revision+1,positions:{...o.positions,...t.positions},collapsed:t.collapsed??o.collapsed,views:i,settings:{theme:Ge,reducedMotion:!1,...o.settings,...t.settings}};if(al(s),r){let a={...s,revision:(this.storedRevision??0)+1,positions:{},views:Object.fromEntries(Object.entries(i).map(([c,u])=>[c,{filters:u.filters}]))};this.storage.setItem(this.key,JSON.stringify(a)),this.storedRevision=a.revision}return this.positions=s.positions,this.viewports=Object.fromEntries(Object.entries(i).filter(([,a])=>a.viewport).map(([a,c])=>[a,{viewport:c.viewport}])),this.revision=s.revision,s}};var he=ct(require("react"),1);function cl({color:e,reduced:t,onColor:n,onReduced:o}){let[r,i]=(0,he.useState)(e),[s,a]=(0,he.useState)(!1),[c,u]=(0,he.useState)(t);(0,he.useEffect)(()=>u(t),[t]),(0,he.useEffect)(()=>{i(e),a(!1)},[e]);let d=()=>{let l=_n(r);a(!l),l&&n(l)};return he.default.createElement("details",{className:"wg-theme"},he.default.createElement("summary",null,"\u4E3B\u9898\u4E0E\u52A8\u6001\u6548\u679C"),he.default.createElement("div",{className:"wg-theme-controls"},he.default.createElement("label",null,"\u4E3B\u9898\u8272"," ",he.default.createElement("input",{type:"color","aria-label":"\u4E3B\u9898\u8272",value:e,onChange:l=>n(l.target.value)})),he.default.createElement("input",{"aria-label":"\u4E3B\u9898 HEX",value:r,onChange:l=>i(l.target.value),onBlur:d,onKeyDown:l=>{l.key==="Enter"&&d()},"aria-invalid":s}),he.default.createElement("button",{onClick:d},"\u5E94\u7528\u989C\u8272"),["#6aabff","#c084fc","#2dd4bf","#fb923c"].map(l=>he.default.createElement("button",{key:l,"aria-label":"\u914D\u8272 "+l,onClick:()=>n(l),style:{borderColor:l}},"\u25CF")),he.default.createElement("button",{onClick:()=>n(Ge)},"\u6062\u590D\u9ED8\u8BA4\u8272"),s&&he.default.createElement("span",{role:"alert"},"\u8BF7\u8F93\u5165\u6709\u6548\u7684 HEX \u8272\u503C\uFF0C\u4F8B\u5982 #6aabff"),he.default.createElement("label",{className:"wg-check"},he.default.createElement("input",{type:"checkbox",checked:c,onChange:l=>{u(l.target.checked),o(l.target.checked)}}),"\u51CF\u5C11\u52A8\u6001\u6548\u679C\uFF08\u4E5F\u9075\u5FAA\u7CFB\u7EDF\u8BBE\u7F6E\uFF09")))}var de=require("react");var Do=.86*1.25,To=1.25,rt=1.2,it=e=>Math.max(-99800,Math.min(99800,e)),En=(e,t)=>JSON.stringify([e,t]),Oo=class{bodies=new Map;links=[];active=!1;reduced=!1;contactScale=To;dragging;mode="elastic";idle=0;hardening=rt;quiet=0;recovery;inputs=new Map;groups=[];groupIndex=new Map;ordered=[];originals=new Map;sync(t,n,o=!1,r){let i=new Set(this.bodies.keys()),s=new Set(t.map(g=>g.id)),a=new Map(t.map(g=>[g.id,g])),c=new Map(n.map(g=>[g.target,g.source])),u=i.size!==s.size;for(let g of i)s.has(g)||(this.bodies.delete(g),this.inputs.delete(g),u=!0);let d=new Set;for(let g of t){let{offset:w,radius:x}=Wt(g.data.kind),v=it(g.position.x)+w.x,y=it(g.position.y)+w.y,b=this.bodies.get(g.id),k=this.inputs.get(g.id),_=o||!r?.has(g.position)&&(!k||Math.hypot(k.x-g.position.x,k.y-g.position.y)>.1);this.inputs.set(g.id,{...g.position}),b?_&&!b.pin&&Math.hypot(b.x-v,b.y-y)>.1&&(Object.assign(b,{x:v,y,vx:0,vy:0}),delete b.opening,u=!0,d.add(g.id)):(this.bodies.set(g.id,{id:g.id,x:v,y,vx:0,vy:0,radius:x,offset:w}),u=!0)}let l=new Map(this.links.map(g=>[En(g.source,g.target),g]));this.links=n.filter(g=>s.has(g.source)&&s.has(g.target)).map(g=>{let w=l.get(En(g.source,g.target));if(w&&!o&&!d.has(g.source)&&!d.has(g.target))return w;let x=this.bodies.get(g.source),v=this.bodies.get(g.target);return{...g,restLength:Math.hypot(v.x-x.x,v.y-x.y),restVector:{x:v.x-x.x,y:v.y-x.y},stiffness:1}}),(this.links.length!==l.size||this.links.some(g=>!l.has(En(g.source,g.target))))&&(u=!0);let f=new Set,p=g=>{if(f.has(g))return;f.add(g);let w=c.get(g);if(w&&s.has(w)&&p(w),i.has(g)||!i.size||this.reduced||o)return;let x=this.bodies.get(g),v=w?this.bodies.get(w):void 0,y=w?a.get(w):void 0;if(!v||!y)return;let b=x.x-y.position.x-v.offset.x,k=x.y-y.position.y-v.offset.y,_=Math.hypot(b,k),N=Math.min(1,(v.radius+x.radius+2)*To/(_||1));x.opening={parent:v.id,dx:b,dy:k,elapsed:0,start:N},x.x=v.x+b*N,x.y=v.y+k*N};for(let g of s)p(g);let h=new Map;for(let g of this.links)for(let[w,x]of[[g.source,g.target],[g.target,g.source]])h.has(w)||h.set(w,[]),h.get(w).push(x);this.groups=[],this.groupIndex.clear();for(let g of s)if(!this.groupIndex.has(g)){let w=this.groups.length,x=[],v=[g];this.groupIndex.set(g,w);for(let y=0;y<v.length;y++){let b=v[y];x.push(this.bodies.get(b));for(let k of h.get(b)??[])this.groupIndex.has(k)||(this.groupIndex.set(k,w),v.push(k))}this.groups.push(x)}return this.dragging&&!s.has(this.dragging)&&(this.dragging=void 0,this.mode="elastic",this.hardening=0),this.recovery&&!s.has(this.recovery.id)&&(this.recovery=void 0),o&&(this.recovery=void 0,this.hardening=rt,this.originals.clear()),this.orderLinks(),u&&this.wake(),u}wake(){this.active=!0,this.quiet=0}pin(t,n){let o=this.bodies.get(t);o&&(o.pin={x:it(n.x)+o.offset.x,y:it(n.y)+o.offset.y},o.x=o.pin.x,o.y=o.pin.y,o.vx=o.vy=0,delete o.opening,this.orderLinks(),this.wake())}unpin(t){let n=this.bodies.get(t);n?.pin&&(delete n.pin,this.orderLinks(),this.wake())}capture(){this.originals.clear();for(let t of this.links){let n=this.bodies.get(t.source),o=this.bodies.get(t.target);t.restVector={x:o.x-n.x,y:o.y-n.y},t.restLength=Math.hypot(t.restVector.x,t.restVector.y),this.originals.set(En(t.source,t.target),{...t.restVector})}}beginDrag(t,n="elastic"){if(this.bodies.has(t)){this.dragging=t,this.mode=n,this.recovery=void 0,this.idle=0,this.hardening=0,this.contactScale=Do,this.capture(),this.orderLinks();for(let o of this.bodies.values())o.vx=o.vy=0;this.wake()}}drag(t,n,o="elastic"){let r=this.bodies.get(t);if(!r)return;this.dragging!==t?this.beginDrag(t,o):this.mode!==o&&(this.mode=o,this.capture(),this.orderLinks());let i=it(n.x)+r.offset.x,s=it(n.y)+r.offset.y,a=i-r.x,c=s-r.y;Math.hypot(a,c)>.05&&(this.idle=0,this.hardening=0,this.contactScale=Do),delete r.opening;let u=Math.max(1,Math.ceil(Math.hypot(a,c)/18)),d={x:r.x,y:r.y};for(let l=1;l<=u;l++)r.x=d.x+a*l/u,r.y=d.y+c*l/u,r.pin={x:r.x,y:r.y},this.contacts(!0);r.vx=r.vy=0,this.wake()}release(t){if(this.dragging===t){let n=this.bodies.get(t);if(n&&this.mode==="elastic"){this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0};let o=this.groupIndex.get(t);for(let r of this.links)if(this.groupIndex.get(r.source)===o){let i=this.bodies.get(r.source),s=this.bodies.get(r.target),a=this.originals.get(En(r.source,r.target))??r.restVector;r.restVector={x:a.x*.8+(s.x-i.x)*.2,y:a.y*.8+(s.y-i.y)*.2},r.restLength=Math.hypot(r.restVector.x,r.restVector.y)}}else this.capture(),n&&(this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0});this.dragging=void 0,this.idle=0}this.unpin(t),this.orderLinks(),this.wake()}ropeState(t,n){let o=this.links.find(s=>s.source===t&&s.target===n),r=this.bodies.get(t),i=this.bodies.get(n);return{softness:1-this.hardening/rt,stretch:o&&r&&i?Math.max(0,Math.hypot(i.x-r.x,i.y-r.y)-o.restLength):0}}positions(){return Object.fromEntries([...this.bodies.values()].map(t=>[t.id,{x:t.x-t.offset.x,y:t.y-t.offset.y}]))}orderLinks(){this.ordered=[];let t=new Set,n=this.dragging??this.recovery?.id??[...this.bodies.values()].find(i=>i.pin)?.id,o=[...n?[n]:[],...this.bodies.keys()],r=new Map;for(let i of this.links)for(let s of[i.source,i.target])r.has(s)||r.set(s,[]),r.get(s).push(i);for(let i of o)if(!t.has(i)){let s=[i];t.add(i);for(let a=0;a<s.length;a++)for(let c of r.get(s[a])??[]){let u=s[a],d=c.source===u?c.target:c.source;t.has(d)||(t.add(d),s.push(d),this.ordered.push({link:c,from:u,to:d,sign:c.source===u?1:-1,rate:c.source===u?7:10}))}}}contacts(t=!1){let n=[...this.bodies.values()],o=106*To+8,r=new Map;for(let a of n){let c=Math.floor(a.x/o)+":"+Math.floor(a.y/o);r.has(c)||r.set(c,[]),r.get(c).push(a)}let i=new Set;if(this.mode!=="free")for(let a of n)(a.pin||a.id===this.recovery?.id)&&i.add(this.groupIndex.get(a.id));let s=0;for(let a=0;a<n.length;a++){let c=n[a],u=Math.floor(c.x/o),d=Math.floor(c.y/o);for(let l=u-1;l<=u+1;l++)for(let f=d-1;f<=d+1;f++)for(let p of r.get(l+":"+f)??[]){if(c.id>=p.id||c.pin&&p.pin)continue;let h=this.groupIndex.get(c.id),g=this.groupIndex.get(p.id),w=p.x-c.x,x=p.y-c.y,v=Math.hypot(w,x),y=(c.radius+p.radius+(h===g?2:4))*this.contactScale;if(v>=y)continue;let b=y-v;s=Math.max(s,b);let k=v>1e-6?w/v:Math.cos(a*2.39996),_=v>1e-6?x/v:Math.sin(a*2.39996),N=h!==g&&this.mode!=="free",I=N?i.has(h):!!c.pin||c.id===this.recovery?.id,M=N?i.has(g):!!p.pin||p.id===this.recovery?.id;if(I&&M)continue;let R=I||M?1:.5,$=(F,B,m)=>{for(let S of N?this.groups[B]:[F])S.x+=k*b*R*m,S.y+=_*b*R*m,!t&&!this.reduced&&!this.dragging&&b>2&&(S.vx+=k*m*Math.min(8,b*.1),S.vy+=_*m*Math.min(8,b*.1))};I||$(c,h,-1),M||$(p,g,1)}}return s}step(t){if(!this.active)return!1;let n=Math.min(Math.max(t,0),1/30),o=Math.max(1,Math.ceil(n*120)),r=n/o,i=this.positions();this.idle+=n,this.reduced?this.hardening=rt:(!this.dragging||this.idle>.12)&&(this.hardening=Math.min(rt,this.hardening+n)),this.contactScale=Do+(To-Do)*(this.hardening/rt),this.recovery&&(this.recovery.elapsed+=n);for(let c=0;c<o;c++){for(let l of this.bodies.values()){if(l.pin){l.x=l.pin.x,l.y=l.pin.y,l.vx=l.vy=0;continue}this.reduced&&(l.vx=l.vy=0),l.vx*=Math.exp(-12*r),l.vy*=Math.exp(-12*r),l.x+=l.vx*r,l.y+=l.vy*r,l.id===this.recovery?.id&&(l.x=this.recovery.point.x,l.y=this.recovery.point.y,l.vx=l.vy=0)}let u=this.mode!=="free"&&(!!this.dragging||!!this.recovery);for(let l of this.ordered){let{link:f,from:p,to:h,sign:g,rate:w}=l,x=this.bodies.get(p),v=this.bodies.get(h);if(this.mode==="free"&&(this.dragging||this.recovery)||x.opening||v.opening)continue;let y=Math.hypot(v.x-x.x,v.y-x.y);if(!u){let k=Math.max(280,f.restLength);if(y<=k||!y)continue;let _=(y-k)/y*(1-Math.exp(-5*r)),N=(v.x-x.x)*_,I=(v.y-x.y)*_;x.pin||(x.x+=N*.5,x.y+=I*.5),v.pin||(v.x-=N*.5,v.y-=I*.5);continue}if(this.dragging&&this.groupIndex.get(p)!==this.groupIndex.get(this.dragging)||v.pin||v.id===this.recovery?.id)continue;f.stiffness=.3+.7*this.hardening/rt;let b=1-Math.exp(-(this.reduced?35:w*(.55+f.stiffness))*r);v.x+=(x.x+f.restVector.x*g-v.x)*b,v.y+=(x.y+f.restVector.y*g-v.y)*b}for(let l of this.bodies.values())if(l.opening){let f=l.opening,p=this.bodies.get(f.parent);if(!p){delete l.opening;continue}f.elapsed+=r;let h=Math.min(1,f.elapsed/.24),g=f.start+(1-f.start)*(1-(1-h)**3);l.x=p.x+f.dx*g,l.y=p.y+f.dy*g,h===1&&delete l.opening}let d=0;for(let l=0;l<4;l++)d=Math.max(d,this.contacts());if(!u&&!this.dragging&&d>.1)for(let l of this.links){let f=this.bodies.get(l.source),p=this.bodies.get(l.target);l.restLength=Math.max(l.restLength,Math.hypot(p.x-f.x,p.y-f.y))}for(let l of this.bodies.values())l.pin||(l.x=it(l.x-l.offset.x)+l.offset.x,l.y=it(l.y-l.offset.y)+l.offset.y)}this.recovery&&(this.reduced||this.recovery.elapsed>2.4)&&(this.capture(),this.recovery=void 0,this.mode="elastic",this.orderLinks());let s=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.x-c.offset.x-i[c.id].x,c.y-c.offset.y-i[c.id].y))),a=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.vx,c.vy)));if(this.quiet=this.hardening>=rt&&!this.recovery&&![...this.bodies.values()].some(c=>c.opening)&&s<.035&&a<.2?this.quiet+n:0,this.quiet>.22){this.active=!1;for(let c of this.bodies.values())c.vx=c.vy=0}return this.active}};function ll(e,t,n){let[o,r]=(0,de.useState)([]),[i,s]=(0,de.useState)({}),a=(0,de.useRef)(new Oo),c=(0,de.useRef)(),u=(0,de.useRef)(0),d=(0,de.useRef)(n),l=(0,de.useRef)(),f=(0,de.useRef)(),p=(0,de.useRef)(!1),h=(0,de.useRef)(new WeakSet);d.current=n;let g=(0,de.useCallback)(()=>{let k=a.current.positions();for(let _ of Object.values(k))h.current.add(_);d.current(k)},[]),w=(0,de.useCallback)(()=>{let k=a.current.positions();s(Object.fromEntries(a.current.links.map(_=>[JSON.stringify([_.source,_.target]),a.current.ropeState(_.source,_.target)]))),r(_=>_.map(N=>{let I=k[N.id];return I&&(I.x!==N.position.x||I.y!==N.position.y)?{...N,position:I}:N}))},[]),x=(0,de.useCallback)(()=>{if(c.current!==void 0)return;u.current=performance.now();let k=_=>{a.current.step((_-u.current)/1e3),u.current=_,w(),a.current.active?c.current=requestAnimationFrame(k):(c.current=void 0,g())};c.current=requestAnimationFrame(k)},[w,g]);(0,de.useEffect)(()=>{a.current.reduced=t},[t]),(0,de.useEffect)(()=>{let k=a.current.sync(e.nodes,e.edges,p.current,h.current);p.current=!1;let _=a.current.positions();r(N=>{let I=new Map(N.map(M=>[M.id,M]));return e.nodes.map(M=>({...I.get(M.id),...M,position:_[M.id]??M.position}))}),k&&x()},[e,x]),(0,de.useEffect)(()=>()=>{c.current!==void 0&&cancelAnimationFrame(c.current)},[]);let v=(0,de.useCallback)(k=>{if(f.current&&f.current!==l.current&&a.current.unpin(f.current),f.current=k,k&&!l.current){let _=a.current.positions()[k];_&&a.current.pin(k,_)}a.current.active&&x()},[x]),y=(0,de.useCallback)((k,_,N="elastic")=>{v(),l.current=k,a.current.drag(k,_,N),w(),x()},[v,w,x]),b=(0,de.useCallback)(k=>{a.current.release(k),l.current=void 0,g(),x()},[g,x]);return(0,de.useEffect)(()=>{let k=N=>{let I=l.current;if(!I||N.key!=="Control")return;let M=a.current.positions()[I];M&&y(I,M,N.type==="keydown"?"free":"elastic")},_=()=>{l.current&&b(l.current)};return window.addEventListener("keydown",k),window.addEventListener("keyup",k),window.addEventListener("blur",_),window.addEventListener("pointercancel",_),()=>{window.removeEventListener("keydown",k),window.removeEventListener("keyup",k),window.removeEventListener("blur",_),window.removeEventListener("pointercancel",_)}},[y,b]),{nodes:o,ropes:i,setNodes:r,drag:y,release:b,hover:v,world:a.current,forceNextSync:()=>{p.current=!0}}}var ul=ct(require("react"),1);function dl({id:e,source:t,target:n,style:o,data:r}){let i=Ar(t),s=Ar(n);if(!i||!s)return null;let a=w=>{let x=Wt(w.data.kind),v=w.internals.positionAbsolute;return{x:v.x+x.offset.x,y:v.y+x.offset.y,radius:x.radius}},c=tl(a(i),a(s)),u=c.target.x-c.source.x,d=c.target.y-c.source.y,l=Math.hypot(u,d),f=Number(r?.softness??0),p=Math.min(48,l*.15)*f,h=(c.source.x+c.target.x)/2-(l?d/l:0)*p,g=(c.source.y+c.target.y)/2+(l?u/l:0)*p;return ul.default.createElement(Ft,{id:e,path:`M ${c.source.x},${c.source.y} Q ${h},${g} ${c.target.x},${c.target.y}`,style:o})}var Re=ct(require("react"),1);function fl(e){return[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(t=>t.segment)}function pl({value:e,onSave:t}){let[n,o]=(0,Re.useState)(e);return(0,Re.useEffect)(()=>o(e),[e]),Re.default.createElement("form",{className:"wg-summary-editor",onSubmit:r=>{r.preventDefault(),t(n.trim())}},Re.default.createElement("label",null,"\u624B\u52A8\u77ED\u6982\u62EC",Re.default.createElement("textarea",{"aria-label":"\u624B\u52A8\u77ED\u6982\u62EC",value:n,onChange:r=>o(r.target.value),maxLength:4e3,placeholder:"\u5EFA\u8BAE 12\u201324 \u5B57\uFF1B\u7559\u7A7A\u4F7F\u7528\u63D2\u4EF6\u6458\u8981\u6216\u539F\u6807\u9898"})),Re.default.createElement("p",{className:"wg-small-note"},fl(n).length," \u4E2A\u5B57\u7B26 \xB7 \u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668"),Re.default.createElement("button",null,"\u4FDD\u5B58\u6982\u62EC"))}var $r={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"},Hr={running:"#6aabff",waiting:"#ffc56c",unread:"#5fe0b4",idle:"#9aaac5",unknown:"#748099"};function am({data:e,selected:t}){let n=e.kind==="workspace";return E.default.createElement("div",{className:"wg-bubble "+(n?"is-workspace":"is-session")+(t?" is-selected":"")+(e.collapsed===!1?" is-expanded":"")+(e.current?" is-current":"")+(e.working?" is-working":"")+(e.archived?" is-archived":""),style:{"--bubble-color":Hr[e.status]},title:e.title+(e.path?" \xB7 "+e.path:"")},E.default.createElement(Ze,{type:"target",position:U.Top,isConnectable:!1}),E.default.createElement("div",{className:"wg-orb"},E.default.createElement("span",{className:"wg-orb-symbol"},n?"\u25C8":"\u2726"),n&&E.default.createElement("span",{className:"wg-orb-count"},e.total," \u4E2A\u4F1A\u8BDD"),n&&!!e.childWorkspaceCount&&E.default.createElement("span",{className:"wg-orb-count"},e.childWorkspaceCount," \u4E2A\u5B50\u5DE5\u4F5C\u533A")),E.default.createElement("div",{className:"wg-node-title"},e.title),E.default.createElement("div",{className:"wg-node-badges"},e.current&&E.default.createElement("span",null,"\u5F53\u524D"),e.working&&E.default.createElement("strong",null,"\u25B6 \u5DE5\u4F5C\u4E2D"),e.parentWorkspaceId&&E.default.createElement("span",null,"\u5B50\u5DE5\u4F5C\u533A"),e.parentSessionId&&E.default.createElement("span",null,"\u5206\u652F"),e.context&&E.default.createElement("span",null,"\u6765\u6E90")),!n&&E.default.createElement("div",{className:"wg-activity"},e.pinned?"\u2605 ":"",e.recency&&Io[e.recency]," \xB7"," ",e.frequency&&Po[e.frequency]),E.default.createElement("div",{className:"wg-node-meta"},E.default.createElement("i",null),n?e.collapsed?"\u5DF2\u6536\u8D77":"\u5DE5\u4F5C\u533A":e.archived?"\u5DF2\u5F52\u6863":$r[e.status]),E.default.createElement(Ze,{type:"source",position:U.Bottom,isConnectable:!1}),!n&&E.default.createElement(E.default.Fragment,null,E.default.createElement(Ze,{id:"branch-source",type:"source",position:U.Top,isConnectable:!1}),E.default.createElement(Ze,{id:"branch-target",type:"target",position:U.Bottom,isConnectable:!1})))}var cm={bubble:E.default.memo(am)},lm={rope:E.default.memo(dl)};function um(e){return(0,E.useState)(()=>{try{return{layout:e.load(),error:""}}catch(t){return{layout:Sn(),error:"\u65E0\u6CD5\u8BFB\u53D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF1A"+String(t)}}})[0]}function gl(e){return E.default.createElement(zr,null,E.default.createElement(dm,{...e}))}function dm({catalog:e,actions:t,repository:n,demo:o,access:r}){let i=um(n),[s,a]=(0,E.useState)(i.layout),c=(0,E.useRef)(s),[u,d]=(0,E.useState)(i.error),[l,f]=(0,E.useState)(!1),[p,h]=(0,E.useState)(""),[g,w]=(0,E.useState)(()=>({...St,...i.layout.views.all?.filters})),[x,v]=(0,E.useState)(),[y,b]=(0,E.useState)(()=>new Set),[k,_]=(0,E.useState)({}),[N,I]=(0,E.useState)(!0),[M,R]=(0,E.useState)(),[$,F]=(0,E.useState)(),[B,m]=(0,E.useState)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),S=!!s.settings?.reducedMotion||B,[C,P]=(0,E.useState)(Date.now),A=bn(),D=(0,E.useRef)(null),V=(0,E.useCallback)(()=>{let z=D.current;if(!z||!A.getNodes().length)return;let W=z.getBoundingClientRect(),Q=z.querySelector(".wg-dock")?.getBoundingClientRect(),ce=W.width>850?(Q?.width??0)+45:20,ge=W.width<=850?(Q?.height??0)+35:35,Oe=Math.max(180,W.width-ce-35),Et=Math.max(120,W.height-ge-40),Le=A.getNodesBounds(A.getNodes()),at=Math.max(.1,Math.min(1,Oe/(Le.width+100),Et/(Le.height+100)));A.setViewport({x:ce+(Oe-Le.width*at)/2-Le.x*at,y:20+(Et-Le.height*at)/2-Le.y*at,zoom:at})},[A]),H=(0,E.useRef)(!0),q=(0,E.useRef)(Promise.resolve()),G=(0,E.useRef)(!!i.error),Y=(0,E.useRef)(0),J=(0,E.useRef)(0),ne=(0,E.useRef)(),X=(0,E.useRef)(g);X.current=g;let L=(0,E.useMemo)(()=>Lr(e,g,s,k,y,C),[e,g,s,k,y,C]),Z=(0,E.useCallback)(z=>{c.current=z,a(z)},[]),K=(0,E.useCallback)((z,W=!1)=>{G.current||(Y.current++,W&&J.current++,q.current=q.current.then(async()=>{if(!H.current||G.current)return;let Q=()=>{if(!H.current||G.current)return;let ce=c.current.revision,ge=W?n.initializePositions(z.positions??{}):n.savePatch(z,ce);Z(ge),h(z.settings?"\u8BBE\u7F6E\u5DF2\u4FDD\u5B58":"\u5E03\u5C40\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559")};navigator.locks?await navigator.locks.request(n.key,Q):Q()}).catch(Q=>{G.current=!0,H.current&&d("\u5E03\u5C40\u672A\u4FDD\u5B58\uFF1A"+String(Q))}).finally(()=>{Y.current--,W&&J.current--}))},[n,Z]),ee=ll(L,S,z=>{let W=c.current.positions;Object.entries(z).some(([ce,ge])=>!W[ce]||Math.hypot(ge.x-W[ce].x,ge.y-W[ce].y)>.1)&&K({positions:Co(e,W,z)})}),{nodes:j,setNodes:te}=ee,re=(0,E.useMemo)(()=>L.edges.map(z=>({...z,type:"rope",data:ee.ropes[JSON.stringify([z.source,z.target])],style:{stroke:"#47719a",strokeWidth:1.25,opacity:.56}})),[L.edges,ee.ropes]);(0,E.useEffect)(()=>{if(e.loading||G.current)return;let z=c.current.settings?.usage??{},W=e.sessions.map(Q=>Q.id);W.some(Q=>!Object.hasOwn(z,Q))&&K({settings:{usage:nl(z,W)}})},[e.sessions,e.loading,s.settings?.usage,K]),(0,E.useEffect)(()=>{let z=setInterval(()=>P(Date.now()),6e4);return()=>clearInterval(z)},[]),(0,E.useEffect)(()=>{let z=window.matchMedia("(prefers-reduced-motion: reduce)"),W=()=>m(z.matches);return z.addEventListener("change",W),()=>z.removeEventListener("change",W)},[]),(0,E.useEffect)(()=>(H.current=!0,()=>{H.current=!1,clearTimeout(ne.current)}),[]),(0,E.useEffect)(()=>{te(z=>z.map(W=>({...W,selected:W.id===x})))},[x,te]),(0,E.useEffect)(()=>{let z=W=>{if(W.key===n.key)try{let Q=n.load();Z(Q),h("\u8BBE\u7F6E\u5DF2\u4ECE\u53E6\u4E00\u7A97\u53E3\u540C\u6B65")}catch(Q){G.current=!0,d("\u65E0\u6CD5\u540C\u6B65\u5E03\u5C40\uFF1A"+String(Q))}};return window.addEventListener("storage",z),()=>window.removeEventListener("storage",z)},[n,Z]),(0,E.useEffect)(()=>{if(e.loading)return;let z=c.current.views[g.workspace]?.viewport,W=setTimeout(()=>{z?A.setViewport(z):V()},60);return()=>clearTimeout(W)},[g.workspace,e.loading,A,V]),(0,E.useEffect)(()=>{if(e.loading||G.current)return;let z=Object.entries(Mo(e,c.current.positions)).filter(([W])=>!c.current.positions[W]);z.length&&K({positions:Object.fromEntries(z)},!0)},[e.loading,L,K]),(0,E.useEffect)(()=>{if(!p)return;let z=setTimeout(()=>h(""),2400);return()=>clearTimeout(z)},[p]);let ie=async z=>{f(!0),G.current||d("");try{if(clearTimeout(ne.current),K({views:{[X.current.workspace]:{viewport:A.getViewport()}}}),await q.current,!H.current)return;await z()}catch(W){d("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF1A"+String(W))}finally{H.current&&f(!1)}},se=z=>{let W={...X.current,...z};w(W),K({views:{all:{filters:W}}})},me=z=>{clearTimeout(ne.current);let W=X.current.workspace;K({views:{[W]:{viewport:A.getViewport()},all:{...W==="all"?{viewport:A.getViewport()}:{},filters:{...X.current,workspace:z}}}}),w(Q=>({...Q,workspace:z})),v(void 0)},oe=L.nodes.find(z=>z.id===x),Ce=()=>{ee.forceNextSync();let z=Lr(e,g,Sn(),k,y),W=Object.fromEntries(j.map(Q=>[Q.id,Q.position]));R(W),K({positions:Object.fromEntries(z.nodes.map(Q=>[Q.id,Q.position]))}),setTimeout(()=>A.fitView({padding:.12,maxZoom:1}),70)},_e=z=>ie(async()=>{if(z.data.kind==="workspace"){z.data.virtual||await t.openWorkspace(z.data.entityId);return}if(z.data.archived)throw new Error("\u8BF7\u5148\u6062\u590D\u8FD9\u4E2A\u5F52\u6863\u4F1A\u8BDD");let W=z.data.entityId;K({settings:{usage:{...c.current.settings?.usage,[W]:ol(c.current.settings?.usage?.[W])}}}),await q.current,H.current&&await t.openSession(W)}),Se=g.query||!!g.statuses?.length||g.recency&&g.recency!=="all"||g.frequency&&g.frequency!=="all"||g.status!=="all"||g.kind!=="all"||g.workspace!=="all"||g.archived,ze=il(s.settings?.theme??Ge);return E.default.createElement("section",{className:"wg-root"+(s.settings?.reducedMotion?" wg-reduced":""),style:{"--wg-workspace":ze.workspace,"--wg-expanded":ze.expanded,"--wg-session":ze.session,"--wg-session-text":ze.sessionText,"--wg-accent":ze.accent},"aria-label":"\u5DE5\u4F5C\u533A\u56FE\u8C31"},E.default.createElement("header",{className:"wg-header"},E.default.createElement("div",{className:"wg-brand"},E.default.createElement("span",{className:"wg-logo"},"\u25C8"),E.default.createElement("div",null,E.default.createElement("h1",null,"\u5DE5\u4F5C\u533A\u56FE\u8C31",E.default.createElement("span",null,"WORKSPACE ATLAS")),E.default.createElement("p",null,e.workspaces.length," \u4E2A\u5DE5\u4F5C\u533A \xB7 ",L.total," \u4E2A\u4F1A\u8BDD",o?" \xB7 \u6F14\u793A\u6570\u636E":""))),E.default.createElement("div",{className:"wg-top-actions"},E.default.createElement("label",{className:"wg-search"},E.default.createElement("span",null,"\u2315"),E.default.createElement("input",{"aria-label":"\u641C\u7D22\u5DE5\u4F5C\u533A\u548C\u4F1A\u8BDD",placeholder:"\u641C\u7D22\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u2026",value:g.query,onChange:z=>se({query:z.target.value})})),E.default.createElement("button",{onClick:V},"\u9002\u5E94\u753B\u5E03"),E.default.createElement("button",{onClick:Ce},"\u91CD\u7F6E\u5E03\u5C40"))),(u||e.error)&&E.default.createElement("div",{className:"wg-alert",role:"alert"},E.default.createElement("span",null,u||e.error),G.current&&E.default.createElement(E.default.Fragment,null,E.default.createElement("button",{onClick:()=>location.reload()},"\u91CD\u65B0\u8F7D\u5165"),E.default.createElement("button",{onClick:()=>{try{F({raw:n.storage.getItem(n.key)})}catch(z){d(String(z))}}},"\u91CD\u7F6E\u672C\u5730\u5E03\u5C40"),E.default.createElement("button",{onClick:()=>{try{let z=n.storage.getItem(n.key),W=URL.createObjectURL(new Blob([z??""],{type:"text/plain"})),Q=document.createElement("a");Q.href=W,Q.download="workspace-graph-layout-backup.txt",Q.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}catch(z){d(String(z))}}},"\u5BFC\u51FA\u5DF2\u4FDD\u5B58\u539F\u6587")),E.default.createElement("button",{onClick:()=>{let z=new Blob([JSON.stringify({...c.current,positions:{...c.current.positions,...Object.fromEntries(j.map(ce=>[ce.id,ce.position]))}},null,2)],{type:"application/json"}),W=URL.createObjectURL(z),Q=document.createElement("a");Q.href=W,Q.download="workspace-graph-layout.json",Q.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}},"\u5BFC\u51FA\u5F53\u524D\u5E03\u5C40")),$&&E.default.createElement("div",{className:"wg-alert",role:"alert"},E.default.createElement("span",null,"\u8FD9\u4F1A\u6E05\u9664\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u56FE\u8C31\u4F4D\u7F6E\u548C\u7B5B\u9009\u3002\u53EF\u5148\u5BFC\u51FA\u5907\u4EFD\u3002"),E.default.createElement("button",{onClick:()=>{try{let z=n.reset($.raw);G.current=!1,Z(z),d(""),w(St),F(void 0)}catch(z){d("\u65E0\u6CD5\u91CD\u7F6E\uFF1A"+String(z))}}},"\u786E\u8BA4\u91CD\u7F6E"),E.default.createElement("button",{onClick:()=>F(void 0)},"\u53D6\u6D88")),o&&E.default.createElement("div",{className:"wg-demo-label"},"\u4EA4\u4E92\u6F14\u793A \xB7 \u6570\u636E\u4EC5\u7528\u4E8E\u9884\u89C8"),E.default.createElement("div",{className:"wg-canvas",ref:D,onKeyDown:z=>{if(z.key!=="Enter"&&z.key!==" ")return;let W=z.target.closest(".react-flow__node")?.getAttribute("data-id"),Q=j.find(ce=>ce.id===W);Q?.data.kind==="workspace"&&(z.preventDefault(),v(Q.id),b(ce=>{let ge=new Set(ce);return ge.has(Q.data.entityId)?ge.delete(Q.data.entityId):ge.add(Q.data.entityId),ge}))}},E.default.createElement(Uc,{nodes:j,edges:re,nodeTypes:cm,edgeTypes:lm,onNodesChange:z=>te(W=>Ir(z,W)),onNodeDragStart:(z,W)=>{ee.drag(W.id,W.position,z.ctrlKey?"free":"elastic")},onNodeDrag:(z,W)=>ee.drag(W.id,W.position,z.ctrlKey?"free":"elastic"),onNodeDragStop:(z,W)=>{ee.drag(W.id,W.position,z.ctrlKey?"free":"elastic"),ee.release(W.id)},autoPanOnNodeFocus:!1,autoPanOnNodeDrag:!1,zoomOnDoubleClick:!1,nodeDragThreshold:5,onNodeClick:(z,W)=>{v(W.id),W.data.kind==="workspace"&&b(Q=>{let ce=new Set(Q);return ce.has(W.data.entityId)?ce.delete(W.data.entityId):ce.add(W.data.entityId),ce})},onNodeDoubleClick:(z,W)=>{_e(W)},onPaneClick:()=>v(void 0),onMoveEnd:(z,W)=>{clearTimeout(ne.current);let Q=X.current.workspace;ne.current=setTimeout(()=>K({views:{[Q]:{viewport:W}}}),180)},minZoom:.1,maxZoom:3,nodesConnectable:!1,edgesReconnectable:!1,deleteKeyCode:null,selectionOnDrag:!1,multiSelectionKeyCode:null,selectionKeyCode:null,proOptions:{hideAttribution:!1},defaultViewport:s.views[g.workspace]?.viewport},E.default.createElement(jc,{variant:Be.Dots,gap:26,size:1,color:"#284061"}),E.default.createElement(Jc,{position:"bottom-right",showInteractive:!1})),e.loading&&E.default.createElement("div",{className:"wg-empty",role:"status"},E.default.createElement("span",{className:"wg-empty-orb"},"\u25C8"),E.default.createElement("h2",null,"\u6B63\u5728\u8FDE\u63A5\u5DE5\u4F5C\u533A"),E.default.createElement("p",null,"\u8BFB\u53D6 Harness \u7684\u5DE5\u4F5C\u533A\u4E0E\u4F1A\u8BDD\u2026")),!e.loading&&Se&&L.matched===0&&E.default.createElement("div",{className:"wg-no-match",role:"status"},"\u6CA1\u6709\u5339\u914D\u7684\u4F1A\u8BDD\uFF1B\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u4F1A\u8BDD\u4ECD\u4FDD\u7559\u3002"),!e.loading&&!L.nodes.length&&E.default.createElement("div",{className:"wg-empty"},E.default.createElement("span",{className:"wg-empty-orb"},"\u2315"),E.default.createElement("h2",null,Se?"\u6CA1\u6709\u5339\u914D\u7684\u8282\u70B9":"\u4ECE\u4E00\u4E2A\u5DE5\u4F5C\u533A\u5F00\u59CB"),E.default.createElement("p",null,Se?"\u8C03\u6574\u5DE6\u4E0B\u89D2\u7684\u9009\u62E9\u6216\u6E05\u9664\u641C\u7D22\u3002":"\u5728 Harness \u4FA7\u680F\u6DFB\u52A0\u5DE5\u4F5C\u533A\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u663E\u793A\u3002"),Se&&E.default.createElement("button",{onClick:()=>{w(St),K({views:{all:{filters:St}}})}},"\u6E05\u9664\u7B5B\u9009")),E.default.createElement("div",{className:"wg-dock "+(N?"":"is-folded")},E.default.createElement("button",{className:"wg-dock-heading",onClick:()=>I(!N),"aria-expanded":N},E.default.createElement("span",null,"\u2637\u3000\u89C6\u56FE\u4E0E\u7B5B\u9009"),E.default.createElement("span",null,N?"\u2212":"+")),N&&E.default.createElement(E.default.Fragment,null,E.default.createElement("label",{className:"wg-field"},E.default.createElement("span",null,"\u5DE5\u4F5C\u533A"),E.default.createElement("select",{"aria-label":"\u9009\u62E9\u5DE5\u4F5C\u533A",value:g.workspace,onChange:z=>me(z.target.value)},E.default.createElement("option",{value:"all"},"\u5168\u90E8\u5DE5\u4F5C\u533A"),e.workspaces.map(z=>E.default.createElement("option",{key:z.id,value:z.id},z.title," \xB7"," ",z.path.split(/[\/]/).filter(Boolean).slice(-2).join("/"))),E.default.createElement("option",{value:"__ungrouped__"},"\u672A\u5206\u7EC4"))),E.default.createElement("div",{className:"wg-filter-row"},E.default.createElement("span",null,"\u72B6\u6001"),E.default.createElement("div",{className:"wg-chips"},["all","running","waiting","unread","idle","unknown"].map(z=>E.default.createElement("button",{key:z,className:(z==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(z))?"active":"","aria-pressed":z==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(z),onClick:()=>{let W=g.statuses??(g.status==="all"?[]:[g.status]);se({status:"all",statuses:z==="all"?[]:W.includes(z)?W.filter(Q=>Q!==z):[...W,z]})}},z!=="all"&&E.default.createElement("i",{style:{background:Hr[z]}}),z==="all"?"\u5168\u90E8":$r[z])))),E.default.createElement("div",{className:"wg-filter-row"},E.default.createElement("span",null,"\u663E\u793A"),E.default.createElement("div",{className:"wg-chips"},["all","workspace","session"].map(z=>E.default.createElement("button",{key:z,className:g.kind===z?"active":"","aria-pressed":g.kind===z,onClick:()=>se({kind:z})},z==="all"?"\u5168\u90E8":z==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD")),E.default.createElement("label",{className:"wg-check"},E.default.createElement("input",{type:"checkbox",checked:g.archived,onChange:z=>se({archived:z.target.checked})}),"\u5F52\u6863"))),E.default.createElement(cl,{color:s.settings?.theme??Ge,reduced:!!s.settings?.reducedMotion,onColor:z=>K({settings:{theme:z}}),onReduced:z=>K({settings:{reducedMotion:z}})}),E.default.createElement("div",{className:"wg-dock-foot"},E.default.createElement("label",null,"\u65F6\u95F4"," ",E.default.createElement("select",{"aria-label":"\u65F6\u95F4\u5206\u7C7B",value:g.recency??"all",onChange:z=>se({recency:z.target.value})},E.default.createElement("option",{value:"all"},"\u5168\u90E8\u65F6\u95F4"),Object.entries(Io).map(([z,W])=>E.default.createElement("option",{value:z,key:z},W)))),E.default.createElement("label",null,"\u9891\u7387"," ",E.default.createElement("select",{"aria-label":"\u9891\u7387\u5206\u7C7B",value:g.frequency??"all",onChange:z=>se({frequency:z.target.value})},E.default.createElement("option",{value:"all"},"\u5168\u90E8\u9891\u7387"),Object.entries(Po).map(([z,W])=>E.default.createElement("option",{value:z,key:z},W)))),E.default.createElement("span",{className:"wg-small-note"},"\u5E38\u7528\u6309\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\u8BA1\u6570\uFF1B30 \u5929\u5185 5 \u6B21\uFF0C\u95F4\u9694 30 \u5206\u949F\u3002\u5386\u53F2\u8BB0\u5F55\u4ECE\u672C\u7248\u672C\u5F00\u59CB\u7D2F\u8BA1\u3002"),E.default.createElement("span",null,L.nodes.length," \u4E2A\u53EF\u89C1\u8282\u70B9",L.hidden>0?" \xB7 "+L.hidden+" \u4E2A\u4F1A\u8BDD\u672A\u5C55\u5F00":""),E.default.createElement("button",{onClick:()=>{w(St),K({views:{all:{filters:St}}})}},"\u6E05\u9664\u7B5B\u9009")))),oe&&E.default.createElement("aside",{className:"wg-details","aria-label":"\u8282\u70B9\u8BE6\u60C5"},E.default.createElement("div",{className:"wg-detail-heading"},E.default.createElement("span",null,oe.data.kind==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD"),E.default.createElement("button",{"aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>v(void 0)},"\xD7")),E.default.createElement("h2",null,oe.data.title),E.default.createElement("div",{className:"wg-status",style:{color:Hr[oe.data.status]}},"\u25CF ",$r[oe.data.status],oe.data.archived?" \xB7 \u5DF2\u5F52\u6863":""),E.default.createElement("dl",null,oe.data.kind==="session"&&E.default.createElement(E.default.Fragment,null,E.default.createElement("dt",null,"\u5206\u7C7B"),E.default.createElement("dd",null,oe.data.recency&&Io[oe.data.recency]," ","\xB7"," ",oe.data.frequency&&Po[oe.data.frequency]),E.default.createElement("dt",null,"\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\uFF08\u8FD1 30 \u5929\uFF09"),E.default.createElement("dd",null,s.settings?.usage?.[oe.data.entityId]?.visits.filter(z=>z>=Date.now()-30*864e5).length??"\u8BB0\u5F55\u79EF\u7D2F\u4E2D")),E.default.createElement("dt",null,"\u8DEF\u5F84"),E.default.createElement("dd",null,oe.data.path||"\u672A\u8BB0\u5F55\u76EE\u5F55"),E.default.createElement("dt",null,"\u6807\u8BC6"),E.default.createElement("dd",null,oe.data.entityId),oe.data.updatedAt&&E.default.createElement(E.default.Fragment,null,E.default.createElement("dt",null,"\u6700\u8FD1\u66F4\u65B0"),E.default.createElement("dd",null,new Date(oe.data.updatedAt).toLocaleString()))),oe.data.kind==="session"&&E.default.createElement("button",{onClick:()=>{let z=c.current.settings?.pinned??[];K({settings:{pinned:z.includes(oe.data.entityId)?z.filter(W=>W!==oe.data.entityId):[...z,oe.data.entityId]}})}},oe.data.pinned?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876\u4F1A\u8BDD"),oe.data.kind==="session"&&E.default.createElement(pl,{key:"summary:"+oe.id,value:s.settings?.manualSummaries?.[oe.data.entityId]??"",onSave:z=>K({settings:{manualSummaries:{...c.current.settings?.manualSummaries,[oe.data.entityId]:z}}})}),oe.data.kind==="workspace"?E.default.createElement(fm,{key:oe.id,node:oe,actions:t,access:r,busy:l,perform:ie,open:()=>{_e(oe)},collapse:()=>b(z=>{let W=new Set(z);return W.has(oe.data.entityId)?W.delete(oe.data.entityId):W.add(oe.data.entityId),W}),more:()=>_(z=>({...z,[oe.data.entityId]:(z[oe.data.entityId]??20)+20}))}):E.default.createElement(pm,{key:oe.id,node:oe,actions:t,access:r,busy:l,perform:ie,open:()=>{_e(oe)}})),E.default.createElement("div",{className:"wg-canvas-hint"},"\u62D6\u52A8\u67D4\u6027\u7275\u5F15 \xB7 Ctrl \u81EA\u7531\u62D6\u52A8 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53CC\u51FB\u6253\u5F00"),E.default.createElement("div",{className:"wg-save-status",role:"status"},p),M&&E.default.createElement("div",{className:"wg-undo"},"\u5DF2\u91CD\u6392\u5F53\u524D\u89C6\u56FE",E.default.createElement("button",{onClick:()=>{ee.forceNextSync(),K({positions:M}),R(void 0)}},"\u64A4\u9500"),E.default.createElement("button",{onClick:()=>R(void 0),"aria-label":"\u5173\u95ED\u64A4\u9500\u63D0\u793A"},"\xD7"))))}function fm({node:e,actions:t,access:n,busy:o,perform:r,open:i,collapse:s,more:a}){let[c,u]=(0,E.useState)(!1),[d,l]=(0,E.useState)(e.data.title),f=n?.useCreate()??!0,p=n?.useWorkspace(e.data.entityId,"workspace/rename")??!0;return E.default.createElement("div",{className:"wg-detail-actions"},!e.data.virtual&&E.default.createElement(E.default.Fragment,null,E.default.createElement("button",{className:"wg-primary",disabled:o||!f,onClick:i},"\u6253\u5F00\u5DE5\u4F5C\u533A \u2197"),E.default.createElement("button",{disabled:o||!f,onClick:()=>{r(()=>t.newSession(e.data.entityId))}},"\u65B0\u5EFA\u4F1A\u8BDD"),p&&E.default.createElement("button",{disabled:o,onClick:()=>u(!c)},"\u91CD\u547D\u540D\u5DE5\u4F5C\u533A")),c&&E.default.createElement("form",{onSubmit:h=>{h.preventDefault(),d.trim()&&r(async()=>{await t.renameWorkspace(e.data.entityId,d.trim()),u(!1)})}},E.default.createElement("input",{"aria-label":"\u5DE5\u4F5C\u533A\u65B0\u540D\u79F0",value:d,onChange:h=>l(h.target.value)}),E.default.createElement("button",{disabled:o||!d.trim()},"\u4FDD\u5B58\u540D\u79F0")),E.default.createElement("button",{onClick:s},e.data.collapsed?"\u5C55\u5F00\u4F1A\u8BDD":"\u6536\u8D77\u4F1A\u8BDD"),!e.data.collapsed&&E.default.createElement("button",{onClick:a},"\u518D\u663E\u793A 20 \u4E2A\u4F1A\u8BDD"))}function pm({node:e,actions:t,access:n,busy:o,perform:r,open:i}){let s=n?.useSession(e.data.entityId,"workspace/archiveSession")??!0,a=n?.useSession(e.data.entityId,"workspace/unarchiveSession")??!0;return E.default.createElement("div",{className:"wg-detail-actions"},e.data.archived?E.default.createElement("button",{className:"wg-primary",disabled:o||!a,onClick:()=>{r(()=>t.restore(e.data.entityId))}},"\u6062\u590D\u4F1A\u8BDD"):E.default.createElement(E.default.Fragment,null,E.default.createElement("button",{className:"wg-primary",disabled:o,onClick:i},"\u6253\u5F00\u4F1A\u8BDD \u2197"),E.default.createElement("button",{disabled:o||!s,onClick:()=>{r(()=>t.archive(e.data.entityId))}},"\u5F52\u6863\u4F1A\u8BDD")),E.default.createElement("p",{className:"wg-small-note"},"\u4F4D\u7F6E\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559\uFF0C\u91CD\u542F\u6062\u590D\u9ED8\u8BA4\u3002\u6D3B\u52A8\u4F1A\u8BDD\u4FDD\u7559\u663E\u793A\u3002\u62D6\u52A8\u4E0D\u4F1A\u6539\u53D8\u4F1A\u8BDD\u6240\u5C5E\u3002"))}function hl(e,t,n){let o=e,r=t,i=n,s=Object.values(r?.byId??{}).filter(c=>(c.retainedBy?.mainView??0)>0).map(c=>c.id);return{currentSessionId:s[0],currentSessionIds:s,loading:o?.phase!=="ready"||r?.phase!=="ready",error:o?.error?.message,workspaces:(o?.items??[]).map(c=>({id:c.workspaceId,title:c.title,path:c.path,sessionIds:c.sessionIds})),archivedSessionIds:[...o?.archivedSessionIds??[]],sessions:[...new Set([...r?.ids??[],...s])].flatMap(c=>{let u=r?.byId[c];if(!u)return[];let d=i?.get(c);return[{id:c,title:u.title||u.displayTitle||"\u672A\u547D\u540D\u4F1A\u8BDD",cwd:u.cwd,parentId:u.parentId,updatedAt:u.updatedAt,running:r?.phase==="ready"?d?d.running:u.running:void 0,pending:!!d?.pendingInteraction,unread:d?.completionUnread,blank:u.blank,origin:u.origin}]})}}var ml=`.wg-root {\r
  height: 100%;\r
  min-height: 380px;\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  background: #080f1e;\r
  color: #e6edf9;\r
  font:\r
    14px/1.5 -apple-system,\r
    BlinkMacSystemFont,\r
    "Segoe UI",\r
    "Microsoft YaHei",\r
    sans-serif;\r
  isolation: isolate;\r
  --wg-line: rgba(154, 186, 229, 0.14);\r
}\r
.wg-root * {\r
  box-sizing: border-box;\r
}\r
.wg-root button,\r
.wg-root input,\r
.wg-root select {\r
  font: inherit;\r
}\r
.wg-root button {\r
  cursor: pointer;\r
  border: 1px solid var(--wg-line);\r
  background: #16243b;\r
  color: #dce8fa;\r
  border-radius: 9px;\r
  padding: 7px 12px;\r
  transition:\r
    background 0.15s,\r
    border-color 0.15s;\r
}\r
.wg-root button:hover {\r
  background: #20344f;\r
  border-color: #5380b2;\r
}\r
.wg-root button:disabled {\r
  opacity: 0.4;\r
  cursor: not-allowed;\r
}\r
.wg-root button:focus-visible,\r
.wg-root input:focus-visible,\r
.wg-root select:focus-visible {\r
  outline: 2px solid #8bb7ff;\r
  outline-offset: 3px;\r
}\r
.wg-root input,\r
.wg-root select {\r
  color: #e3ebf7;\r
  background: #101b2e;\r
  border: 1px solid var(--wg-line);\r
  border-radius: 8px;\r
  padding: 8px 10px;\r
}\r
.wg-header {\r
  z-index: 5;\r
  min-height: 98px;\r
  padding: 23px 30px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 20px;\r
  border-bottom: 1px solid var(--wg-line);\r
  background: #0c1425;\r
}\r
.wg-brand {\r
  display: flex;\r
  align-items: center;\r
  gap: 13px;\r
  white-space: nowrap;\r
}\r
.wg-logo {\r
  display: grid;\r
  place-items: center;\r
  width: 42px;\r
  height: 42px;\r
  border: 1px solid #365b8a;\r
  border-radius: 13px;\r
  color: #a9c8ff;\r
  background: linear-gradient(140deg, #1f385c, #18283f);\r
  font-size: 27px;\r
}\r
.wg-header h1 {\r
  font-size: 19px;\r
  margin: 0;\r
  font-weight: 650;\r
  letter-spacing: 1px;\r
}\r
.wg-header h1 span {\r
  font-size: 9px;\r
  letter-spacing: 2.2px;\r
  display: block;\r
  color: #7089b0;\r
  margin-top: 2px;\r
}\r
.wg-header p {\r
  font-size: 11px;\r
  margin: 4px 0 0;\r
  color: #8e9db6;\r
}\r
.wg-top-actions {\r
  display: flex;\r
  align-items: center;\r
  gap: 9px;\r
}\r
.wg-top-actions button {\r
  font-size: 12px;\r
  white-space: nowrap;\r
  background: #121e32;\r
}\r
.wg-search {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  color: #7897c1;\r
  background: #101c30;\r
  border: 1px solid var(--wg-line);\r
  border-radius: 9px;\r
  padding: 0 11px;\r
}\r
.wg-search span {\r
  font-size: 23px;\r
  line-height: 1;\r
}\r
.wg-search input {\r
  width: 200px;\r
  border: 0;\r
  background: none;\r
  padding: 8px 0;\r
  font-size: 12px;\r
}\r
.wg-search input::placeholder {\r
  color: #6e819f;\r
}\r
.wg-canvas {\r
  position: relative;\r
  flex: 1;\r
  min-height: 0;\r
  background: radial-gradient(\r
    ellipse at 37% 40%,\r
    #10233e 0%,\r
    #0b172b 40%,\r
    #080f1e 85%\r
  );\r
}\r
.wg-root .react-flow__node-bubble {\r
  border: none;\r
  background: none;\r
  width: 144px;\r
  box-shadow: none;\r
}\r
.wg-root .react-flow__node:focus-visible {\r
  outline: 2px solid #8bb7ff;\r
  border-radius: 30px;\r
}\r
.wg-bubble {\r
  position: relative;\r
  width: 144px;\r
  text-align: center;\r
  --bubble-color: #6aabff;\r
  user-select: none;\r
}\r
.wg-orb {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 2px;\r
  width: 74px;\r
  height: 74px;\r
  margin: 0 auto 12px;\r
  border-radius: 50%;\r
  background: radial-gradient(circle at 30% 22%, #283c59, #16263c 65%);\r
  border: 1px solid #547194;\r
  box-shadow:\r
    0 0 0 7px rgba(94, 139, 196, 0.025),\r
    0 8px 20px #0004;\r
  transition:\r
    box-shadow 0.2s,\r
    border-color 0.2s;\r
}\r
.wg-orb-symbol {\r
  font-size: 24px;\r
  color: #adc9ed;\r
  font-weight: 300;\r
}\r
.is-workspace .wg-orb {\r
  width: 106px;\r
  height: 106px;\r
  margin-bottom: 14px;\r
  border: 1px solid #6b96c7;\r
  background: radial-gradient(circle at 32% 20%, #355478, #1a304f 70%);\r
  box-shadow:\r
    0 0 0 9px #6aabff05,\r
    0 0 0 19px #6aabff03,\r
    0 8px 22px #0004;\r
}\r
.is-workspace .wg-orb-symbol {\r
  font-size: 31px;\r
  line-height: 1.1;\r
}\r
.wg-orb-count {\r
  font-size: 10px;\r
  letter-spacing: 0.3px;\r
  color: #97b1d1;\r
}\r
.wg-node-title {\r
  font-size: 15px;\r
  color: #e4edfb;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  padding: 0 2px;\r
  max-width: 144px;\r
}\r
.is-workspace .wg-node-title {\r
  font-size: 17px;\r
  font-weight: 600;\r
}\r
.wg-node-meta {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 5px;\r
  font-size: 10px;\r
  color: #8396b2;\r
  margin-top: 5px;\r
  letter-spacing: 0.6px;\r
}\r
.wg-node-meta i {\r
  width: 5px;\r
  height: 5px;\r
  border-radius: 50%;\r
  background: var(--bubble-color);\r
}\r
.wg-bubble.is-selected .wg-orb {\r
  border-color: #9cc7ff;\r
  box-shadow:\r
    0 0 0 4px #82b6ff20,\r
    0 0 34px #599bff33;\r
}\r
.wg-bubble:hover .wg-orb {\r
  border-color: #a8c6ee;\r
}\r
.wg-bubble.is-archived {\r
  opacity: 0.55;\r
}\r
.wg-root .react-flow__handle {\r
  opacity: 0;\r
  pointer-events: none;\r
}\r
.wg-root .react-flow__controls {\r
  box-shadow: none;\r
  border: 1px solid var(--wg-line);\r
  border-radius: 10px;\r
  overflow: hidden;\r
  bottom: 25px;\r
  right: 24px;\r
}\r
.wg-root .react-flow__controls button {\r
  border: 0;\r
  border-bottom: 1px solid #25374e;\r
  background: #122038;\r
  border-radius: 0;\r
  color: #bbcee8;\r
  width: 32px;\r
  height: 32px;\r
  padding: 8px;\r
}\r
.wg-root .react-flow__controls svg {\r
  fill: currentColor;\r
}\r
.wg-root .react-flow__attribution {\r
  background: transparent;\r
  color: #6983a7;\r
  font-size: 9px;\r
}\r
.wg-root .react-flow__attribution a {\r
  color: inherit;\r
}\r
.wg-dock {\r
  position: absolute;\r
  bottom: 28px;\r
  left: 28px;\r
  width: 410px;\r
  border: 1px solid #314b6b88;\r
  border-radius: 14px;\r
  background: #101d33eb;\r
  backdrop-filter: blur(14px);\r
  box-shadow: 0 12px 40px #0004;\r
  z-index: 4;\r
  padding: 0 18px 13px;\r
}\r
.wg-dock.is-folded {\r
  width: 190px;\r
  padding-bottom: 0;\r
}\r
.wg-dock-heading {\r
  display: flex;\r
  justify-content: space-between;\r
  width: 100%;\r
  padding: 14px 0 !important;\r
  border: 0 !important;\r
  background: none !important;\r
  text-align: left;\r
  font-size: 12px !important;\r
  letter-spacing: 0.7px;\r
}\r
.wg-dock-heading span:last-child {\r
  color: #7b9ac3;\r
}\r
.wg-field {\r
  display: flex;\r
  align-items: center;\r
  gap: 16px;\r
  margin: 3px 0 15px;\r
  font-size: 11px;\r
  color: #8fa1bc;\r
}\r
.wg-field select {\r
  flex: 1;\r
  min-width: 0;\r
  padding: 7px 10px;\r
  font-size: 12px;\r
  background: #192940;\r
}\r
.wg-filter-row {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 16px;\r
  margin: 12px 0;\r
  font-size: 11px;\r
  color: #8fa1bc;\r
}\r
.wg-filter-row > span {\r
  padding-top: 5px;\r
  white-space: nowrap;\r
}\r
.wg-chips {\r
  display: flex;\r
  gap: 6px;\r
  flex-wrap: wrap;\r
  align-items: center;\r
}\r
.wg-chips button {\r
  font-size: 10px;\r
  padding: 4px 9px;\r
  border-radius: 6px;\r
  color: #91a6c4;\r
  background: #17273e;\r
  border-color: transparent;\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
}\r
.wg-chips button.active {\r
  background: #28486f;\r
  color: #e5f0ff;\r
  border-color: #416da0;\r
}\r
.wg-chips i {\r
  display: inline-block;\r
  width: 5px;\r
  height: 5px;\r
  border-radius: 50%;\r
}\r
.wg-check {\r
  display: flex;\r
  align-items: center;\r
  gap: 3px;\r
  cursor: pointer;\r
  font-size: 11px;\r
}\r
.wg-check input {\r
  accent-color: #7caef9;\r
}\r
.wg-dock-foot {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  border-top: 1px solid var(--wg-line);\r
  padding-top: 10px;\r
  margin-top: 14px;\r
  color: #7286a4;\r
  font-size: 10px;\r
}\r
.wg-dock-foot button {\r
  border: 0;\r
  padding: 0;\r
  font-size: 10px;\r
  color: #9bbbe6;\r
  background: none;\r
}\r
.wg-details {\r
  position: absolute;\r
  right: 24px;\r
  top: 24px;\r
  width: 268px;\r
  max-height: calc(100% - 135px);\r
  overflow: auto;\r
  border: 1px solid #314b6b88;\r
  border-radius: 14px;\r
  background: #101c30f5;\r
  backdrop-filter: blur(12px);\r
  padding: 18px 20px;\r
  box-shadow: 0 12px 40px #0005;\r
  z-index: 5;\r
}\r
.wg-detail-heading {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  color: #8fa8c8;\r
  font-size: 11px;\r
  letter-spacing: 1px;\r
}\r
.wg-detail-heading button {\r
  background: none;\r
  border: 0;\r
  padding: 0 4px;\r
  font-size: 21px;\r
  color: #8da1be;\r
}\r
.wg-details h2 {\r
  font-size: 18px;\r
  margin: 15px 0 8px;\r
  overflow-wrap: anywhere;\r
}\r
.wg-status {\r
  font-size: 11px;\r
}\r
.wg-details dl {\r
  margin: 20px 0;\r
  font-size: 11px;\r
}\r
.wg-details dt {\r
  color: #6e87a8;\r
  margin-top: 12px;\r
  font-size: 10px;\r
}\r
.wg-details dd {\r
  margin: 4px 0;\r
  color: #b5c6df;\r
  overflow-wrap: anywhere;\r
}\r
.wg-detail-actions {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
.wg-detail-actions button {\r
  font-size: 12px;\r
  text-align: left;\r
  padding: 8px 12px;\r
}\r
.wg-root .wg-primary {\r
  background: #315987;\r
  border-color: #416d9f;\r
  color: #ecf4ff;\r
}\r
.wg-small-note {\r
  font-size: 10px;\r
  line-height: 1.8;\r
  color: #758cae;\r
  margin: 7px 0 0;\r
}\r
.wg-detail-actions input {\r
  width: 100%;\r
  margin-bottom: 7px;\r
  font-size: 12px;\r
}\r
.wg-alert {\r
  padding: 10px 20px;\r
  background: #482e25;\r
  color: #ffd2b3;\r
  z-index: 8;\r
  font-size: 12px;\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
.wg-alert span {\r
  flex: 1;\r
}\r
.wg-alert button {\r
  font-size: 11px;\r
  background: #5f3b2c;\r
  border-color: #ae775a;\r
}\r
.wg-empty {\r
  position: absolute;\r
  left: 50%;\r
  top: 40%;\r
  transform: translate(-50%, -50%);\r
  text-align: center;\r
  pointer-events: none;\r
  width: 80%;\r
  color: #92a7c7;\r
}\r
.wg-empty h2 {\r
  color: #d1dff1;\r
  font-size: 20px;\r
  font-weight: 500;\r
  margin: 12px 0 8px;\r
}\r
.wg-empty p {\r
  font-size: 12px;\r
}\r
.wg-empty button {\r
  pointer-events: auto;\r
  margin-top: 10px;\r
}\r
.wg-empty-orb {\r
  font-size: 44px;\r
  color: #658bb9;\r
}\r
.wg-canvas-hint {\r
  position: absolute;\r
  top: 22px;\r
  left: 28px;\r
  font-size: 10px;\r
  color: #5f7899;\r
  pointer-events: none;\r
  letter-spacing: 1px;\r
}\r
.wg-save-status {\r
  position: absolute;\r
  bottom: 14px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  color: #82a3c5;\r
  font-size: 10px;\r
  pointer-events: none;\r
}\r
.wg-demo-label {\r
  z-index: 3;\r
  position: absolute;\r
  top: 111px;\r
  right: 27px;\r
  color: #9bafce;\r
  font-size: 10px;\r
  background: #192d48;\r
  border: 1px solid #355174;\r
  padding: 4px 10px;\r
  border-radius: 20px;\r
}\r
.wg-undo {\r
  position: absolute;\r
  bottom: 28px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  padding: 10px 14px;\r
  border: 1px solid #3e5c85;\r
  border-radius: 10px;\r
  background: #182b46;\r
  z-index: 6;\r
  font-size: 11px;\r
  white-space: nowrap;\r
}\r
.wg-undo button {\r
  margin-left: 10px;\r
  font-size: 11px;\r
  padding: 2px 8px;\r
}\r
@media (max-width: 1050px) {\r
  .wg-header {\r
    padding: 18px;\r
    min-height: 90px;\r
  }\r
  .wg-header h1 {\r
    font-size: 16px;\r
  }\r
  .wg-search input {\r
    width: 130px;\r
  }\r
  .wg-top-actions {\r
    gap: 6px;\r
  }\r
  .wg-top-actions button {\r
    padding: 6px 8px;\r
    font-size: 11px;\r
  }\r
  .wg-details {\r
    width: 235px;\r
    right: 16px;\r
  }\r
  .wg-dock {\r
    left: 18px;\r
    bottom: 22px;\r
    width: 370px;\r
  }\r
  .wg-canvas-hint {\r
    left: 18px;\r
  }\r
}\r
@media (max-width: 700px) {\r
  .wg-header {\r
    flex-wrap: wrap;\r
    gap: 12px;\r
    padding: 14px 16px;\r
  }\r
  .wg-top-actions {\r
    width: 100%;\r
  }\r
  .wg-search {\r
    flex: 1;\r
  }\r
  .wg-search input {\r
    width: 100%;\r
    min-width: 50px;\r
  }\r
  .wg-dock {\r
    width: calc(100% - 36px);\r
    bottom: 20px;\r
  }\r
  .wg-details {\r
    top: 16px;\r
    max-height: 42%;\r
    width: 220px;\r
  }\r
  .wg-canvas-hint {\r
    display: none;\r
  }\r
  .wg-demo-label {\r
    display: none;\r
  }\r
  .wg-root .react-flow__controls {\r
    bottom: 260px;\r
    right: 16px;\r
  }\r
  .wg-header h1 span {\r
    display: inline;\r
    margin-left: 10px;\r
  }\r
  .wg-logo {\r
    height: 35px;\r
    width: 35px;\r
  }\r
  .wg-dock-heading {\r
    padding: 10px 0 !important;\r
  }\r
}\r
@media (prefers-reduced-motion: reduce) {\r
  .wg-root * {\r
    transition: none !important;\r
  }\r
}\r
.wg-root .is-workspace .wg-orb {\r
  background: var(--wg-workspace);\r
  color: #fff;\r
  border: 2px solid var(--wg-accent);\r
}\r
.wg-root .is-workspace.is-expanded .wg-orb {\r
  background: var(--wg-expanded);\r
  border-style: double;\r
  border-width: 4px;\r
}\r
.wg-root .is-workspace .wg-orb-symbol,\r
.wg-root .is-workspace .wg-orb-count {\r
  color: #fff;\r
}\r
.wg-root .is-session .wg-orb {\r
  background: var(--wg-session);\r
  border: 2px solid var(--wg-accent);\r
}\r
.wg-root .is-session .wg-orb-symbol {\r
  color: var(--wg-session-text);\r
}\r
.wg-root .is-current .wg-orb {\r
  outline: 3px solid #fff;\r
  outline-offset: 6px;\r
}\r
.wg-root .is-working .wg-orb {\r
  border: 3px dashed #ffdd85;\r
  box-shadow: 0 0 0 3px #ffdd8520;\r
  animation: wg-breathe 2.6s ease-in-out infinite;\r
}\r
.wg-node-badges {\r
  display: flex;\r
  justify-content: center;\r
  flex-wrap: wrap;\r
  gap: 4px;\r
  font-size: 12px;\r
  color: #fff;\r
}\r
.wg-node-badges span,\r
.wg-node-badges strong {\r
  padding: 1px 5px;\r
  border-radius: 5px;\r
  background: #263d5b;\r
}\r
.wg-node-badges strong {\r
  color: #ffe6a3;\r
  background: #473914;\r
}\r
.wg-root .wg-node-meta,\r
.wg-root .wg-small-note,\r
.wg-root .wg-filter-row,\r
.wg-root .wg-dock-foot {\r
  font-size: 12px;\r
  color: #bdcce0;\r
}\r
.wg-root .wg-chips button {\r
  font-size: 12px;\r
  color: #c1d2e9;\r
}\r
.wg-dock {\r
  max-height: calc(100% - 70px);\r
  overflow: auto;\r
}\r
.wg-theme {\r
  margin: 12px 0;\r
  font-size: 12px;\r
  color: #bdcce0;\r
}\r
.wg-theme summary {\r
  cursor: pointer;\r
  padding: 6px 0;\r
}\r
.wg-theme-controls {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
  align-items: center;\r
  padding-top: 8px;\r
}\r
.wg-theme-controls input[type="color"] {\r
  padding: 2px;\r
  width: 40px;\r
  height: 30px;\r
  vertical-align: middle;\r
}\r
.wg-theme-controls input[aria-label="\u4E3B\u9898 HEX"] {\r
  width: 100px;\r
}\r
.wg-theme-controls button {\r
  padding: 4px 8px;\r
  font-size: 12px;\r
}\r
.wg-no-match {\r
  position: absolute;\r
  left: 24px;\r
  top: 48px;\r
  background: #182b46;\r
  padding: 8px 12px;\r
  border-radius: 8px;\r
  font-size: 12px;\r
  pointer-events: none;\r
}\r
.wg-activity {\r
  font-size: 12px;\r
  color: #bdcce0;\r
  margin-top: 3px;\r
}\r
.wg-summary-overlay {\r
  position: absolute;\r
  width: 0;\r
  height: 0;\r
  z-index: 12;\r
  pointer-events: none;\r
}\r
.wg-ring-hit {\r
  position: absolute;\r
  overflow: visible;\r
  pointer-events: none;\r
}\r
.wg-ring-hit circle {\r
  pointer-events: stroke;\r
  cursor: help;\r
}\r
.wg-ring-orbit {\r
  position: absolute;\r
  width: 0;\r
  height: 0;\r
  animation: wg-orbit var(--wg-orbit-duration) linear infinite;\r
}\r
.wg-ring-slot {\r
  position: absolute;\r
  width: 0;\r
  height: 0;\r
}\r
.wg-ring-glyph {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 18px;\r
  height: 22px;\r
  margin-left: -9px;\r
  margin-top: -11px;\r
  font-size: 12px;\r
  line-height: 22px;\r
  background: #0c1425;\r
  color: #fff;\r
  border-radius: 5px;\r
  animation: wg-counter var(--wg-orbit-duration) linear infinite;\r
}\r
.wg-summary-readable {\r
  position: absolute;\r
  left: -125px;\r
  width: 250px;\r
  max-height: 120px;\r
  overflow: auto;\r
  border: 1px solid #86a5cd;\r
  border-radius: 10px;\r
  background: #101c30;\r
  padding: 10px 14px;\r
  pointer-events: auto;\r
  user-select: text;\r
  font-size: 12px;\r
  color: #fff;\r
}\r
.wg-summary-readable span {\r
  color: #becde2;\r
}\r
.wg-summary-readable p {\r
  margin: 4px 0 0;\r
  overflow-wrap: anywhere;\r
}\r
.wg-summary-editor {\r
  margin: 14px 0;\r
  font-size: 12px;\r
}\r
.wg-summary-editor textarea {\r
  display: block;\r
  width: 100%;\r
  min-height: 70px;\r
  background: #101b2e;\r
  color: #fff;\r
  border: 1px solid #6683aa;\r
  padding: 8px;\r
  margin: 6px 0;\r
  border-radius: 8px;\r
  font: inherit;\r
  resize: vertical;\r
}\r
.wg-demo-tools {\r
  position: fixed;\r
  z-index: 20;\r
  top: 2px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  font-size: 11px;\r
  background: #122038;\r
  color: #fff;\r
  border-radius: 5px;\r
  padding: 2px 8px;\r
  display: flex;\r
  gap: 10px;\r
}\r
.wg-summary-overlay.is-static .wg-ring-orbit,\r
.wg-summary-overlay.is-static .wg-ring-glyph {\r
  animation: none;\r
}\r
@keyframes wg-orbit {\r
  to {\r
    transform: rotate(360deg);\r
  }\r
}\r
@keyframes wg-counter {\r
  to {\r
    transform: rotate(-360deg);\r
  }\r
}\r
.wg-root .wg-dock-foot {\r
  flex-wrap: wrap;\r
  gap: 10px;\r
}\r
.wg-dock-foot label {\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
}\r
.wg-dock-foot .wg-small-note {\r
  flex-basis: 100%;\r
}\r
@keyframes wg-breathe {\r
  50% {\r
    box-shadow: 0 0 0 7px #ffdd8540;\r
  }\r
}\r
.wg-reduced *,\r
.wg-reduced *::before {\r
  animation: none !important;\r
  transition: none !important;\r
}\r
@media (prefers-reduced-motion: reduce) {\r
  .wg-root *,\r
  .wg-root *::before {\r
    animation: none !important;\r
  }\r
}\r
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
`;var xl="workspace-graph",Br=e=>e;function mm(e){let t=e.useWorkspaces(Br),n=e.useSessions(Br),o=e.useSessionStatus(Br),r=st.default.useMemo(()=>hl(t,n,o),[t,n,o]);return st.default.createElement(gl,{catalog:r,actions:e.actions,repository:e.repository,access:{useCreate:()=>e.useRemoteAccess("session/create"),useWorkspace:(i,s)=>e.useWorkspaceAccess(i,s),useSession:(i,s)=>e.useSessionAccess(i,s)}})}function ym({size:e=18}){return st.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},st.default.createElement("path",{d:"m7 8 5 7m0 0 7-7M7 8h12"}),st.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),st.default.createElement("circle",{cx:"19",cy:"6",r:"3"}),st.default.createElement("circle",{cx:"12",cy:"18",r:"3"}))}var xm=["slots","uiWorkspace","uiSession","workspaces","sessions"];function wm(e){let t;try{t=window.localStorage}catch{t={getItem(){throw new Error("Browser storage is unavailable")},setItem(){throw new Error("Browser storage is unavailable")}}}let n=new Ao(t,"dsh-workspace-graph:v1"),o={openSession:r=>e.uiWorkspace.openSession(r),openWorkspace:r=>e.uiWorkspace.openWorkspace(r),newSession:r=>e.uiWorkspace.startSession(r),archive:r=>e.uiWorkspace.archiveSession(r),restore:r=>e.uiWorkspace.unarchiveSession(r),renameWorkspace:async(r,i)=>{await e.workspaces.rename(r,i)}};e.effect(()=>{let r=document.createElement("style");return r.dataset.plugin="dsh-workspace-graph",r.textContent="@scope (.wg-root) { "+yl+" }"+ml,document.head.append(r),()=>r.remove()}),e.slots.inject("main",()=>e.slots.register({name:"main",key:xl,inject:()=>({actions:o,repository:n})},mm)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:xl,order:85,label:"\u5DE5\u4F5C\u533A\u56FE\u8C31"},ym))}
;return module.exports;}});