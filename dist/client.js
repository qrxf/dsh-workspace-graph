/* dsh-workspace-graph | MIT | React Flow (MIT) */
window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;"use strict";var du=Object.create;var bn=Object.defineProperty;var fu=Object.getOwnPropertyDescriptor;var pu=Object.getOwnPropertyNames;var gu=Object.getPrototypeOf,hu=Object.prototype.hasOwnProperty;var vn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},mu=(e,t)=>{for(var n in t)bn(e,n,{get:t[n],enumerable:!0})},Vr=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of pu(t))!hu.call(e,r)&&r!==n&&bn(e,r,{get:()=>t[r],enumerable:!(o=fu(t,r))||o.enumerable});return e};var St=(e,t,n)=>(n=e!=null?du(gu(e)):{},Vr(t||!e||!e.__esModule?bn(n,"default",{value:e,enumerable:!0}):n,e)),yu=e=>Vr(bn({},"__esModule",{value:!0}),e);var Sa=vn(ka=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt=require("react");function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pp=typeof Object.is=="function"?Object.is:fp,gp=Bt.useState,hp=Bt.useEffect,mp=Bt.useLayoutEffect,yp=Bt.useDebugValue;function xp(e,t){var n=t(),o=gp({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return mp(function(){r.value=n,r.getSnapshot=t,hr(r)&&i({inst:r})},[e,n,t]),hp(function(){return hr(r)&&i({inst:r}),e(function(){hr(r)&&i({inst:r})})},[e]),yp(n),n}function hr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pp(e,n)}catch{return!0}}function wp(e,t){return t()}var bp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wp:xp;ka.useSyncExternalStore=Bt.useSyncExternalStore!==void 0?Bt.useSyncExternalStore:bp});var Na=vn((nv,Ea)=>{"use strict";Ea.exports=Sa()});var Ma=vn(Ca=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=require("react"),vp=Na();function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kp=typeof Object.is=="function"?Object.is:_p,Sp=vp.useSyncExternalStore,Ep=go.useRef,Np=go.useEffect,Cp=go.useMemo,Mp=go.useDebugValue;Ca.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=Ep(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Cp(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&s.hasValue){var h=s.value;if(r(h,p))return d=h}return d=p}if(h=d,kp(u,p))return h;var g=o(p);return r!==void 0&&r(h,g)?(u=p,h):(u=p,d=g)}var l=!1,u,d,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var a=Sp(e,i[0],i[1]);return Np(function(){s.hasValue=!0,s.value=a},[a]),Mp(a),a}});var Pa=vn((rv,Ia)=>{"use strict";Ia.exports=Ma()});var cm={};mu(cm,{apply:()=>am,inject:()=>sm});module.exports=yu(cm);var it=St(require("react"),1);var k=St(require("react"),1);var O=require("react/jsx-runtime"),L=require("react");function de(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=de(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var xu={value:()=>{}};function Rr(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new _n(n)}function _n(e){this._=e}function wu(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}_n.prototype=Rr.prototype={constructor:_n,on:function(e,t){var n=this._,o=wu(e+"",n),r,i=-1,s=o.length;if(arguments.length<2){for(;++i<s;)if((r=(e=o[i]).type)&&(r=bu(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=o[i]).type)n[r]=Fr(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Fr(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new _n(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function bu(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Fr(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=xu,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var at=Rr;var kn="http://www.w3.org/1999/xhtml",Mo={svg:"http://www.w3.org/2000/svg",xhtml:kn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Re(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Mo.hasOwnProperty(t)?{space:Mo[t],local:e}:e}function vu(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===kn&&t.documentElement.namespaceURI===kn?t.createElement(e):t.createElementNS(n,e)}}function _u(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Sn(e){var t=Re(e);return(t.local?_u:vu)(t)}function ku(){}function ct(e){return e==null?ku:function(){return this.querySelector(e)}}function Wr(e){typeof e!="function"&&(e=ct(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=new Array(s),c,l,u=0;u<s;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new fe(o,this._parents)}function Io(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Su(){return[]}function Rt(e){return e==null?Su:function(){return this.querySelectorAll(e)}}function Eu(e){return function(){return Io(e.apply(this,arguments))}}function qr(e){typeof e=="function"?e=Eu(e):e=Rt(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var s=t[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&(o.push(e.call(c,c.__data__,l,s)),r.push(c));return new fe(o,r)}function Wt(e){return function(){return this.matches(e)}}function En(e){return function(t){return t.matches(e)}}var Nu=Array.prototype.find;function Cu(e){return function(){return Nu.call(this.children,e)}}function Mu(){return this.firstElementChild}function Xr(e){return this.select(e==null?Mu:Cu(typeof e=="function"?e:En(e)))}var Iu=Array.prototype.filter;function Pu(){return Array.from(this.children)}function zu(e){return function(){return Iu.call(this.children,e)}}function Yr(e){return this.selectAll(e==null?Pu:zu(typeof e=="function"?e:En(e)))}function Zr(e){typeof e!="function"&&(e=Wt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new fe(o,this._parents)}function Nn(e){return new Array(e.length)}function Gr(){return new fe(this._enter||this._groups.map(Nn),this._parents)}function qt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}qt.prototype={constructor:qt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Ur(e){return function(){return e}}function Au(e,t,n,o,r,i){for(var s=0,a,c=t.length,l=i.length;s<l;++s)(a=t[s])?(a.__data__=i[s],o[s]=a):n[s]=new qt(e,i[s]);for(;s<c;++s)(a=t[s])&&(r[s]=a)}function Du(e,t,n,o,r,i,s){var a,c,l=new Map,u=t.length,d=i.length,f=new Array(u),p;for(a=0;a<u;++a)(c=t[a])&&(f[a]=p=s.call(c,c.__data__,a,t)+"",l.has(p)?r[a]=c:l.set(p,c));for(a=0;a<d;++a)p=s.call(e,i[a],a,i)+"",(c=l.get(p))?(o[a]=c,c.__data__=i[a],l.delete(p)):n[a]=new qt(e,i[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(f[a])===c&&(r[a]=c)}function Tu(e){return e.__data__}function Kr(e,t){if(!arguments.length)return Array.from(this,Tu);var n=t?Du:Au,o=this._parents,r=this._groups;typeof e!="function"&&(e=Ur(e));for(var i=r.length,s=new Array(i),a=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],d=r[l],f=d.length,p=Ou(e.call(u,u&&u.__data__,l,o)),h=p.length,g=a[l]=new Array(h),x=s[l]=new Array(h),y=c[l]=new Array(f);n(u,d,g,x,y,p,t);for(var v=0,m=0,b,S;v<h;++v)if(b=g[v]){for(v>=m&&(m=v+1);!(S=x[m])&&++m<h;);b._next=S||null}}return s=new fe(s,o),s._enter=a,s._exit=c,s}function Ou(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function jr(){return new fe(this._exit||this._groups.map(Nn),this._parents)}function Qr(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Jr(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,s=Math.min(r,i),a=new Array(r),c=0;c<s;++c)for(var l=n[c],u=o[c],d=l.length,f=a[c]=new Array(d),p,h=0;h<d;++h)(p=l[h]||u[h])&&(f[h]=p);for(;c<r;++c)a[c]=n[c];return new fe(a,this._parents)}function ei(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],s;--r>=0;)(s=o[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function ti(e){e||(e=Lu);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s=n[i],a=s.length,c=r[i]=new Array(a),l,u=0;u<a;++u)(l=s[u])&&(c[u]=l);c.sort(t)}return new fe(r,this._parents).order()}function Lu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ni(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function oi(){return Array.from(this)}function ri(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null}function ii(){let e=0;for(let t of this)++e;return e}function si(){return!this.node()}function ai(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,s=r.length,a;i<s;++i)(a=r[i])&&e.call(a,a.__data__,i,r);return this}function Hu(e){return function(){this.removeAttribute(e)}}function $u(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Bu(e,t){return function(){this.setAttribute(e,t)}}function Vu(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Fu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Ru(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ci(e,t){var n=Re(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?$u:Hu:typeof t=="function"?n.local?Ru:Fu:n.local?Vu:Bu)(n,t))}function Cn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Wu(e){return function(){this.style.removeProperty(e)}}function qu(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Xu(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function li(e,t,n){return arguments.length>1?this.each((t==null?Wu:typeof t=="function"?Xu:qu)(e,t,n??"")):Ue(this.node(),e)}function Ue(e,t){return e.style.getPropertyValue(t)||Cn(e).getComputedStyle(e,null).getPropertyValue(t)}function Yu(e){return function(){delete this[e]}}function Zu(e,t){return function(){this[e]=t}}function Gu(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function ui(e,t){return arguments.length>1?this.each((t==null?Yu:typeof t=="function"?Gu:Zu)(e,t)):this.node()[e]}function di(e){return e.trim().split(/^|\s+/)}function Po(e){return e.classList||new fi(e)}function fi(e){this._node=e,this._names=di(e.getAttribute("class")||"")}fi.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function pi(e,t){for(var n=Po(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function gi(e,t){for(var n=Po(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Uu(e){return function(){pi(this,e)}}function Ku(e){return function(){gi(this,e)}}function ju(e,t){return function(){(t.apply(this,arguments)?pi:gi)(this,e)}}function hi(e,t){var n=di(e+"");if(arguments.length<2){for(var o=Po(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?ju:t?Uu:Ku)(n,t))}function Qu(){this.textContent=""}function Ju(e){return function(){this.textContent=e}}function ed(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function mi(e){return arguments.length?this.each(e==null?Qu:(typeof e=="function"?ed:Ju)(e)):this.node().textContent}function td(){this.innerHTML=""}function nd(e){return function(){this.innerHTML=e}}function od(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function yi(e){return arguments.length?this.each(e==null?td:(typeof e=="function"?od:nd)(e)):this.node().innerHTML}function rd(){this.nextSibling&&this.parentNode.appendChild(this)}function xi(){return this.each(rd)}function id(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function wi(){return this.each(id)}function bi(e){var t=typeof e=="function"?e:Sn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function sd(){return null}function vi(e,t){var n=typeof e=="function"?e:Sn(e),o=t==null?sd:typeof t=="function"?t:ct(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function ad(){var e=this.parentNode;e&&e.removeChild(this)}function _i(){return this.each(ad)}function cd(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ld(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ki(e){return this.select(e?ld:cd)}function Si(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ud(e){return function(t){e.call(this,t,this.__data__)}}function dd(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function fd(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function pd(e,t,n){return function(){var o=this.__on,r,i=ud(t);if(o){for(var s=0,a=o.length;s<a;++s)if((r=o[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function Ei(e,t,n){var o=dd(e+""),r,i=o.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<i;++r)if((s=o[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=t?pd:fd,r=0;r<i;++r)this.each(a(o[r],t,n));return this}function Ni(e,t,n){var o=Cn(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function gd(e,t){return function(){return Ni(this,e,t)}}function hd(e,t){return function(){return Ni(this,e,t.apply(this,arguments))}}function Ci(e,t){return this.each((typeof t=="function"?hd:gd)(e,t))}function*Mi(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,s;r<i;++r)(s=o[r])&&(yield s)}var zo=[null];function fe(e,t){this._groups=e,this._parents=t}function Ii(){return new fe([[document.documentElement]],zo)}function md(){return this}fe.prototype=Ii.prototype={constructor:fe,select:Wr,selectAll:qr,selectChild:Xr,selectChildren:Yr,filter:Zr,data:Kr,enter:Gr,exit:jr,join:Qr,merge:Jr,selection:md,order:ei,sort:ti,call:ni,nodes:oi,node:ri,size:ii,empty:si,each:ai,attr:ci,style:li,property:ui,classed:hi,text:mi,html:yi,raise:xi,lower:wi,append:bi,insert:vi,remove:_i,clone:ki,datum:Si,on:Ei,dispatch:Ci,[Symbol.iterator]:Mi};var We=Ii;function xe(e){return typeof e=="string"?new fe([[document.querySelector(e)]],[document.documentElement]):new fe([[e]],zo)}function Pi(e){let t;for(;t=e.sourceEvent;)e=t;return e}function be(e,t){if(e=Pi(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var zi={passive:!1},lt={capture:!0,passive:!1};function Mn(e){e.stopImmediatePropagation()}function Ke(e){e.preventDefault(),e.stopImmediatePropagation()}function Xt(e){var t=e.document.documentElement,n=xe(e).on("dragstart.drag",Ke,lt);"onselectstart"in t?n.on("selectstart.drag",Ke,lt):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Yt(e,t){var n=e.document.documentElement,o=xe(e).on("dragstart.drag",null);t&&(o.on("click.drag",Ke,lt),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Zt=e=>()=>e;function Gt(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:s,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Gt.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function yd(e){return!e.ctrlKey&&!e.button}function xd(){return this.parentNode}function wd(e,t){return t??{x:e.x,y:e.y}}function bd(){return navigator.maxTouchPoints||"ontouchstart"in this}function In(){var e=yd,t=xd,n=wd,o=bd,r={},i=at("start","drag","end"),s=0,a,c,l,u,d=0;function f(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",x).on("touchmove.drag",y,zi).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,S){if(!(u||!e.call(this,b,S))){var C=m(this,t.call(this,b,S),b,S,"mouse");C&&(xe(b.view).on("mousemove.drag",h,lt).on("mouseup.drag",g,lt),Xt(b.view),Mn(b),l=!1,a=b.clientX,c=b.clientY,C("start",b))}}function h(b){if(Ke(b),!l){var S=b.clientX-a,C=b.clientY-c;l=S*S+C*C>d}r.mouse("drag",b)}function g(b){xe(b.view).on("mousemove.drag mouseup.drag",null),Yt(b.view,l),Ke(b),r.mouse("end",b)}function x(b,S){if(e.call(this,b,S)){var C=b.changedTouches,I=t.call(this,b,S),T=C.length,z,R;for(z=0;z<T;++z)(R=m(this,I,b,S,C[z].identifier,C[z]))&&(Mn(b),R("start",b,C[z]))}}function y(b){var S=b.changedTouches,C=S.length,I,T;for(I=0;I<C;++I)(T=r[S[I].identifier])&&(Ke(b),T("drag",b,S[I]))}function v(b){var S=b.changedTouches,C=S.length,I,T;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),I=0;I<C;++I)(T=r[S[I].identifier])&&(Mn(b),T("end",b,S[I]))}function m(b,S,C,I,T,z){var R=i.copy(),H=be(z||C,S),F,_,w;if((w=n.call(b,new Gt("beforestart",{sourceEvent:C,target:f,identifier:T,active:s,x:H[0],y:H[1],dx:0,dy:0,dispatch:R}),I))!=null)return F=w.x-H[0]||0,_=w.y-H[1]||0,function E(N,M,P){var D=H,B;switch(N){case"start":r[T]=E,B=s++;break;case"end":delete r[T],--s;case"drag":H=be(P||M,S),B=s;break}R.call(N,b,new Gt(N,{sourceEvent:M,subject:w,target:f,identifier:T,active:B,x:H[0]+F,y:H[1]+_,dx:H[0]-D[0],dy:H[1]-D[1],dispatch:R}),I)}}return f.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Zt(!!b),f):e},f.container=function(b){return arguments.length?(t=typeof b=="function"?b:Zt(b),f):t},f.subject=function(b){return arguments.length?(n=typeof b=="function"?b:Zt(b),f):n},f.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:Zt(!!b),f):o},f.on=function(){var b=i.on.apply(i,arguments);return b===i?f:b},f.clickDistance=function(b){return arguments.length?(d=(b=+b)*b,f):Math.sqrt(d)},f}function Pn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Ao(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function jt(){}var Ut=.7,Dn=1/Ut,Et="\\s*([+-]?\\d+)\\s*",Kt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",He="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",vd=/^#([0-9a-f]{3,8})$/,_d=new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`),kd=new RegExp(`^rgb\\(${He},${He},${He}\\)$`),Sd=new RegExp(`^rgba\\(${Et},${Et},${Et},${Kt}\\)$`),Ed=new RegExp(`^rgba\\(${He},${He},${He},${Kt}\\)$`),Nd=new RegExp(`^hsl\\(${Kt},${He},${He}\\)$`),Cd=new RegExp(`^hsla\\(${Kt},${He},${He},${Kt}\\)$`),Ai={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Pn(jt,De,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Di,formatHex:Di,formatHex8:Md,formatHsl:Id,formatRgb:Ti,toString:Ti});function Di(){return this.rgb().formatHex()}function Md(){return this.rgb().formatHex8()}function Id(){return Vi(this).formatHsl()}function Ti(){return this.rgb().formatRgb()}function De(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=vd.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Oi(t):n===3?new Ee(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?zn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?zn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=_d.exec(e))?new Ee(t[1],t[2],t[3],1):(t=kd.exec(e))?new Ee(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Sd.exec(e))?zn(t[1],t[2],t[3],t[4]):(t=Ed.exec(e))?zn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Nd.exec(e))?$i(t[1],t[2]/100,t[3]/100,1):(t=Cd.exec(e))?$i(t[1],t[2]/100,t[3]/100,t[4]):Ai.hasOwnProperty(e)?Oi(Ai[e]):e==="transparent"?new Ee(NaN,NaN,NaN,0):null}function Oi(e){return new Ee(e>>16&255,e>>8&255,e&255,1)}function zn(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ee(e,t,n,o)}function Pd(e){return e instanceof jt||(e=De(e)),e?(e=e.rgb(),new Ee(e.r,e.g,e.b,e.opacity)):new Ee}function Nt(e,t,n,o){return arguments.length===1?Pd(e):new Ee(e,t,n,o??1)}function Ee(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}Pn(Ee,Nt,Ao(jt,{brighter(e){return e=e==null?Dn:Math.pow(Dn,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ut:Math.pow(Ut,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ee(dt(this.r),dt(this.g),dt(this.b),Tn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Li,formatHex:Li,formatHex8:zd,formatRgb:Hi,toString:Hi}));function Li(){return`#${ut(this.r)}${ut(this.g)}${ut(this.b)}`}function zd(){return`#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hi(){let e=Tn(this.opacity);return`${e===1?"rgb(":"rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${e===1?")":`, ${e})`}`}function Tn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function dt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ut(e){return e=dt(e),(e<16?"0":"")+e.toString(16)}function $i(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ae(e,t,n,o)}function Vi(e){if(e instanceof Ae)return new Ae(e.h,e.s,e.l,e.opacity);if(e instanceof jt||(e=De(e)),!e)return new Ae;if(e instanceof Ae)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),s=NaN,a=i-r,c=(i+r)/2;return a?(t===i?s=(n-o)/a+(n<o)*6:n===i?s=(o-t)/a+2:s=(t-n)/a+4,a/=c<.5?i+r:2-i-r,s*=60):a=c>0&&c<1?0:s,new Ae(s,a,c,e.opacity)}function Fi(e,t,n,o){return arguments.length===1?Vi(e):new Ae(e,t,n,o??1)}function Ae(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}Pn(Ae,Fi,Ao(jt,{brighter(e){return e=e==null?Dn:Math.pow(Dn,e),new Ae(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ut:Math.pow(Ut,e),new Ae(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Ee(Do(e>=240?e-240:e+120,r,o),Do(e,r,o),Do(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new Ae(Bi(this.h),An(this.s),An(this.l),Tn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Tn(this.opacity);return`${e===1?"hsl(":"hsla("}${Bi(this.h)}, ${An(this.s)*100}%, ${An(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Bi(e){return e=(e||0)%360,e<0?e+360:e}function An(e){return Math.max(0,Math.min(1,e||0))}function Do(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function To(e,t,n,o,r){var i=e*e,s=i*e;return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*o+s*r)/6}function Ri(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],s=o>0?e[o-1]:2*r-i,a=o<t-1?e[o+2]:2*i-r;return To((n-o/t)*t,s,r,i,a)}}function Wi(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],s=e[(o+1)%t],a=e[(o+2)%t];return To((n-o/t)*t,r,i,s,a)}}var Qt=e=>()=>e;function Ad(e,t){return function(n){return e+n*t}}function Dd(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function qi(e){return(e=+e)==1?On:function(t,n){return n-t?Dd(t,n,e):Qt(isNaN(t)?n:t)}}function On(e,t){var n=t-e;return n?Ad(e,n):Qt(isNaN(e)?t:e)}var ft=(function e(t){var n=qi(t);function o(r,i){var s=n((r=Nt(r)).r,(i=Nt(i)).r),a=n(r.g,i.g),c=n(r.b,i.b),l=On(r.opacity,i.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function Xi(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),s,a;for(s=0;s<n;++s)a=Nt(t[s]),o[s]=a.r||0,r[s]=a.g||0,i[s]=a.b||0;return o=e(o),r=e(r),i=e(i),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=i(c),a+""}}}var Td=Xi(Ri),Od=Xi(Wi);function Yi(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Zi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Gi(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),s;for(s=0;s<o;++s)r[s]=qe(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(a){for(s=0;s<o;++s)i[s]=r[s](a);return i}}function Ui(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ve(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Ki(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=qe(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var Lo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Oo=new RegExp(Lo.source,"g");function Ld(e){return function(){return e}}function Hd(e){return function(t){return e(t)+""}}function Jt(e,t){var n=Lo.lastIndex=Oo.lastIndex=0,o,r,i,s=-1,a=[],c=[];for(e=e+"",t=t+"";(o=Lo.exec(e))&&(r=Oo.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),a[s]?a[s]+=i:a[++s]=i),(o=o[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,c.push({i:s,x:ve(o,r)})),n=Oo.lastIndex;return n<t.length&&(i=t.slice(n),a[s]?a[s]+=i:a[++s]=i),a.length<2?c[0]?Hd(c[0].x):Ld(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}function qe(e,t){var n=typeof t,o;return t==null||n==="boolean"?Qt(t):(n==="number"?ve:n==="string"?(o=De(t))?(t=o,ft):Jt:t instanceof De?ft:t instanceof Date?Ui:Zi(t)?Yi:Array.isArray(t)?Gi:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ki:ve)(e,t)}var ji=180/Math.PI,Ln={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ho(e,t,n,o,r,i){var s,a,c;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*ji,skewX:Math.atan(c)*ji,scaleX:s,scaleY:a}}var Hn;function Qi(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ln:Ho(t.a,t.b,t.c,t.d,t.e,t.f)}function Ji(e){return e==null?Ln:(Hn||(Hn=document.createElementNS("http://www.w3.org/2000/svg","g")),Hn.setAttribute("transform",e),(e=Hn.transform.baseVal.consolidate())?(e=e.matrix,Ho(e.a,e.b,e.c,e.d,e.e,e.f)):Ln)}function es(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,d,f,p,h){if(l!==d||u!==f){var g=p.push("translate(",null,t,null,n);h.push({i:g-4,x:ve(l,d)},{i:g-2,x:ve(u,f)})}else(d||f)&&p.push("translate("+d+t+f+n)}function s(l,u,d,f){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),f.push({i:d.push(r(d)+"rotate(",null,o)-2,x:ve(l,u)})):u&&d.push(r(d)+"rotate("+u+o)}function a(l,u,d,f){l!==u?f.push({i:d.push(r(d)+"skewX(",null,o)-2,x:ve(l,u)}):u&&d.push(r(d)+"skewX("+u+o)}function c(l,u,d,f,p,h){if(l!==d||u!==f){var g=p.push(r(p)+"scale(",null,",",null,")");h.push({i:g-4,x:ve(l,d)},{i:g-2,x:ve(u,f)})}else(d!==1||f!==1)&&p.push(r(p)+"scale("+d+","+f+")")}return function(l,u){var d=[],f=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,d,f),s(l.rotate,u.rotate,d,f),a(l.skewX,u.skewX,d,f),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,f),l=u=null,function(p){for(var h=-1,g=f.length,x;++h<g;)d[(x=f[h]).i]=x.x(p);return d.join("")}}}var $o=es(Qi,"px, ","px)","deg)"),Bo=es(Ji,", ",")",")");var $d=1e-12;function ts(e){return((e=Math.exp(e))+1/e)/2}function Bd(e){return((e=Math.exp(e))-1/e)/2}function Vd(e){return((e=Math.exp(2*e))-1)/(e+1)}var pt=(function e(t,n,o){function r(i,s){var a=i[0],c=i[1],l=i[2],u=s[0],d=s[1],f=s[2],p=u-a,h=d-c,g=p*p+h*h,x,y;if(g<$d)y=Math.log(f/l)/t,x=function(I){return[a+I*p,c+I*h,l*Math.exp(t*I*y)]};else{var v=Math.sqrt(g),m=(f*f-l*l+o*g)/(2*l*n*v),b=(f*f-l*l-o*g)/(2*f*n*v),S=Math.log(Math.sqrt(m*m+1)-m),C=Math.log(Math.sqrt(b*b+1)-b);y=(C-S)/t,x=function(I){var T=I*y,z=ts(S),R=l/(n*v)*(z*Vd(t*T+S)-Bd(S));return[a+R*p,c+R*h,l*z/ts(t*T+S)]}}return x.duration=y*1e3*t/Math.SQRT2,x}return r.rho=function(i){var s=Math.max(.001,+i),a=s*s,c=a*a;return e(s,a,c)},r})(Math.SQRT2,2,4);var Ct=0,tn=0,en=0,os=1e3,$n,nn,Bn=0,gt=0,Vn=0,on=typeof performance=="object"&&performance.now?performance:Date,rs=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function sn(){return gt||(rs(Fd),gt=on.now()+Vn)}function Fd(){gt=0}function rn(){this._call=this._time=this._next=null}rn.prototype=Fn.prototype={constructor:rn,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?sn():+n)+(t==null?0:+t),!this._next&&nn!==this&&(nn?nn._next=this:$n=this,nn=this),this._call=e,this._time=n,Vo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Vo())}};function Fn(e,t,n){var o=new rn;return o.restart(e,t,n),o}function is(){sn(),++Ct;for(var e=$n,t;e;)(t=gt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ct}function ns(){gt=(Bn=on.now())+Vn,Ct=tn=0;try{is()}finally{Ct=0,Wd(),gt=0}}function Rd(){var e=on.now(),t=e-Bn;t>os&&(Vn-=t,Bn=e)}function Wd(){for(var e,t=$n,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:$n=n);nn=e,Vo(o)}function Vo(e){if(!Ct){tn&&(tn=clearTimeout(tn));var t=e-gt;t>24?(e<1/0&&(tn=setTimeout(ns,e-on.now()-Vn)),en&&(en=clearInterval(en))):(en||(Bn=on.now(),en=setInterval(Rd,os)),Ct=1,rs(ns))}}function Rn(e,t,n){var o=new rn;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}var qd=at("start","end","cancel","interrupt"),Xd=[],cs=0,ss=1,qn=2,Wn=3,as=4,Xn=5,an=6;function je(e,t,n,o,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;Yd(e,n,{name:t,index:o,group:r,on:qd,tween:Xd,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:cs})}function cn(e,t){var n=ye(e,t);if(n.state>cs)throw new Error("too late; already scheduled");return n}function we(e,t){var n=ye(e,t);if(n.state>Wn)throw new Error("too late; already running");return n}function ye(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Yd(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=Fn(i,0,n.time);function i(l){n.state=ss,n.timer.restart(s,n.delay,n.time),n.delay<=l&&s(l-n.delay)}function s(l){var u,d,f,p;if(n.state!==ss)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===Wn)return Rn(s);p.state===as?(p.state=an,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=an,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(Rn(function(){n.state===Wn&&(n.state=as,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=qn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===qn){for(n.state=Wn,r=new Array(f=n.tween.length),u=0,d=-1;u<f;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=p);r.length=d+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=Xn,1),d=-1,f=r.length;++d<f;)r[d].call(e,u);n.state===Xn&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=an,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function ht(e,t){var n=e.__transition,o,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((o=n[s]).name!==t){i=!1;continue}r=o.state>qn&&o.state<Xn,o.state=an,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[s]}i&&delete e.__transition}}function ls(e){return this.each(function(){ht(this,e)})}function Zd(e,t){var n,o;return function(){var r=we(this,e),i=r.tween;if(i!==n){o=n=i;for(var s=0,a=o.length;s<a;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}r.tween=o}}function Gd(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=we(this,e),s=i.tween;if(s!==o){r=(o=s).slice();for(var a={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}i.tween=r}}function us(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ye(this.node(),n).tween,r=0,i=o.length,s;r<i;++r)if((s=o[r]).name===e)return s.value;return null}return this.each((t==null?Zd:Gd)(n,e,t))}function Mt(e,t,n){var o=e._id;return e.each(function(){var r=we(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ye(r,o).value[t]}}function Yn(e,t){var n;return(typeof t=="number"?ve:t instanceof De?ft:(n=De(t))?(t=n,ft):Jt)(e,t)}function Ud(e){return function(){this.removeAttribute(e)}}function Kd(e){return function(){this.removeAttributeNS(e.space,e.local)}}function jd(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===o?i:i=t(o=s,n)}}function Qd(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===o?i:i=t(o=s,n)}}function Jd(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function ef(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function ds(e,t){var n=Re(e),o=n==="transform"?Bo:Yn;return this.attrTween(e,typeof t=="function"?(n.local?ef:Jd)(n,o,Mt(this,"attr."+e,t)):t==null?(n.local?Kd:Ud)(n):(n.local?Qd:jd)(n,o,t))}function tf(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function nf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function of(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&nf(e,i)),n}return r._value=t,r}function rf(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&tf(e,i)),n}return r._value=t,r}function fs(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Re(e);return this.tween(n,(o.local?of:rf)(o,t))}function sf(e,t){return function(){cn(this,e).delay=+t.apply(this,arguments)}}function af(e,t){return t=+t,function(){cn(this,e).delay=t}}function ps(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?sf:af)(t,e)):ye(this.node(),t).delay}function cf(e,t){return function(){we(this,e).duration=+t.apply(this,arguments)}}function lf(e,t){return t=+t,function(){we(this,e).duration=t}}function gs(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?cf:lf)(t,e)):ye(this.node(),t).duration}function uf(e,t){if(typeof t!="function")throw new Error;return function(){we(this,e).ease=t}}function hs(e){var t=this._id;return arguments.length?this.each(uf(t,e)):ye(this.node(),t).ease}function df(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;we(this,e).ease=n}}function ms(e){if(typeof e!="function")throw new Error;return this.each(df(this._id,e))}function ys(e){typeof e!="function"&&(e=Wt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new _e(o,this._parents,this._name,this._id)}function xs(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),s=new Array(o),a=0;a<i;++a)for(var c=t[a],l=n[a],u=c.length,d=s[a]=new Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;a<o;++a)s[a]=t[a];return new _e(s,this._parents,this._name,this._id)}function ff(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function pf(e,t,n){var o,r,i=ff(t)?cn:we;return function(){var s=i(this,e),a=s.on;a!==o&&(r=(o=a).copy()).on(t,n),s.on=r}}function ws(e,t){var n=this._id;return arguments.length<2?ye(this.node(),n).on.on(e):this.each(pf(n,e,t))}function gf(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function bs(){return this.on("end.remove",gf(this._id))}function vs(e){var t=this._name,n=this._id;typeof e!="function"&&(e=ct(e));for(var o=this._groups,r=o.length,i=new Array(r),s=0;s<r;++s)for(var a=o[s],c=a.length,l=i[s]=new Array(c),u,d,f=0;f<c;++f)(u=a[f])&&(d=e.call(u,u.__data__,f,a))&&("__data__"in u&&(d.__data__=u.__data__),l[f]=d,je(l[f],t,n,f,l,ye(u,n)));return new _e(i,this._parents,t,n)}function _s(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Rt(e));for(var o=this._groups,r=o.length,i=[],s=[],a=0;a<r;++a)for(var c=o[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,h=ye(u,n),g=0,x=f.length;g<x;++g)(p=f[g])&&je(p,t,n,g,f,h);i.push(f),s.push(u)}return new _e(i,s,t,n)}var hf=We.prototype.constructor;function ks(){return new hf(this._groups,this._parents)}function mf(e,t){var n,o,r;return function(){var i=Ue(this,e),s=(this.style.removeProperty(e),Ue(this,e));return i===s?null:i===n&&s===o?r:r=t(n=i,o=s)}}function Ss(e){return function(){this.style.removeProperty(e)}}function yf(e,t,n){var o,r=n+"",i;return function(){var s=Ue(this,e);return s===r?null:s===o?i:i=t(o=s,n)}}function xf(e,t,n){var o,r,i;return function(){var s=Ue(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),Ue(this,e))),s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a))}}function wf(e,t){var n,o,r,i="style."+t,s="end."+i,a;return function(){var c=we(this,e),l=c.on,u=c.value[i]==null?a||(a=Ss(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(s,r=u),c.on=o}}function Es(e,t,n){var o=(e+="")=="transform"?$o:Yn;return t==null?this.styleTween(e,mf(e,o)).on("end.style."+e,Ss(e)):typeof t=="function"?this.styleTween(e,xf(e,o,Mt(this,"style."+e,t))).each(wf(this._id,e)):this.styleTween(e,yf(e,o,t),n).on("end.style."+e,null)}function bf(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function vf(e,t,n){var o,r;function i(){var s=t.apply(this,arguments);return s!==r&&(o=(r=s)&&bf(e,s,n)),o}return i._value=t,i}function Ns(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,vf(e,t,n??""))}function _f(e){return function(){this.textContent=e}}function kf(e){return function(){var t=e(this);this.textContent=t??""}}function Cs(e){return this.tween("text",typeof e=="function"?kf(Mt(this,"text",e)):_f(e==null?"":e+""))}function Sf(e){return function(t){this.textContent=e.call(this,t)}}function Ef(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Sf(r)),t}return o._value=e,o}function Ms(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Ef(e))}function Is(){for(var e=this._name,t=this._id,n=Zn(),o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)if(c=s[l]){var u=ye(c,t);je(c,e,n,l,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new _e(o,this._parents,e,n)}function Ps(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,s){var a={value:s},c={value:function(){--r===0&&i()}};n.each(function(){var l=we(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&i()})}var Nf=0;function _e(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function zs(e){return We().transition(e)}function Zn(){return++Nf}var Xe=We.prototype;_e.prototype=zs.prototype={constructor:_e,select:vs,selectAll:_s,selectChild:Xe.selectChild,selectChildren:Xe.selectChildren,filter:ys,merge:xs,selection:ks,transition:Is,call:Xe.call,nodes:Xe.nodes,node:Xe.node,size:Xe.size,empty:Xe.empty,each:Xe.each,on:ws,attr:ds,attrTween:fs,style:Es,styleTween:Ns,text:Cs,textTween:Ms,remove:bs,tween:us,delay:ps,duration:gs,ease:hs,easeVarying:ms,end:Ps,[Symbol.iterator]:Xe[Symbol.iterator]};function Gn(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Cf={time:null,delay:0,duration:250,ease:Gn};function Mf(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function As(e){var t,n;e instanceof _e?(t=e._id,e=e._name):(t=Zn(),(n=Cf).time=sn(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&je(c,e,t,l,s,n||Mf(c,t));return new _e(o,this._parents,e,t)}We.prototype.interrupt=ls;We.prototype.transition=As;var ln=e=>()=>e;function Fo(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Te(e,t,n){this.k=e,this.x=t,this.y=n}Te.prototype={constructor:Te,scale:function(e){return e===1?this:new Te(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Te(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var mt=new Te(1,0,0);un.prototype=Te.prototype;function un(e){for(;!e.__zoom;)if(!(e=e.parentNode))return mt;return e.__zoom}function Un(e){e.stopImmediatePropagation()}function It(e){e.preventDefault(),e.stopImmediatePropagation()}function If(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Pf(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Ds(){return this.__zoom||mt}function zf(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Af(){return navigator.maxTouchPoints||"ontouchstart"in this}function Df(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}function Kn(){var e=If,t=Pf,n=Df,o=zf,r=Af,i=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,c=pt,l=at("start","zoom","end"),u,d,f,p=500,h=150,g=0,x=10;function y(w){w.property("__zoom",Ds).on("wheel.zoom",T,{passive:!1}).on("mousedown.zoom",z).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",H).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",_).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}y.transform=function(w,E,N,M){var P=w.selection?w.selection():w;P.property("__zoom",Ds),w!==P?S(w,E,N,M):P.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},y.scaleBy=function(w,E,N,M){y.scaleTo(w,function(){var P=this.__zoom.k,D=typeof E=="function"?E.apply(this,arguments):E;return P*D},N,M)},y.scaleTo=function(w,E,N,M){y.transform(w,function(){var P=t.apply(this,arguments),D=this.__zoom,B=N==null?b(P):typeof N=="function"?N.apply(this,arguments):N,V=D.invert(B),q=typeof E=="function"?E.apply(this,arguments):E;return n(m(v(D,q),B,V),P,s)},N,M)},y.translateBy=function(w,E,N,M){y.transform(w,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof N=="function"?N.apply(this,arguments):N),t.apply(this,arguments),s)},null,M)},y.translateTo=function(w,E,N,M,P){y.transform(w,function(){var D=t.apply(this,arguments),B=this.__zoom,V=M==null?b(D):typeof M=="function"?M.apply(this,arguments):M;return n(mt.translate(V[0],V[1]).scale(B.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof N=="function"?-N.apply(this,arguments):-N),D,s)},M,P)};function v(w,E){return E=Math.max(i[0],Math.min(i[1],E)),E===w.k?w:new Te(E,w.x,w.y)}function m(w,E,N){var M=E[0]-N[0]*w.k,P=E[1]-N[1]*w.k;return M===w.x&&P===w.y?w:new Te(w.k,M,P)}function b(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function S(w,E,N,M){w.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var P=this,D=arguments,B=C(P,D).event(M),V=t.apply(P,D),q=N==null?b(V):typeof N=="function"?N.apply(P,D):N,Y=Math.max(V[1][0]-V[0][0],V[1][1]-V[0][1]),Z=P.__zoom,Q=typeof E=="function"?E.apply(P,D):E,ne=c(Z.invert(q).concat(Y/Z.k),Q.invert(q).concat(Y/Q.k));return function(X){if(X===1)X=Q;else{var $=ne(X),G=Y/$[2];X=new Te(G,q[0]-$[0]*G,q[1]-$[1]*G)}B.zoom(null,X)}})}function C(w,E,N){return!N&&w.__zooming||new I(w,E)}function I(w,E){this.that=w,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,E),this.taps=0}I.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,E){return this.mouse&&w!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var E=xe(this.that).datum();l.call(w,this.that,new Fo(w,{sourceEvent:this.sourceEvent,target:y,type:w,transform:this.that.__zoom,dispatch:l}),E)}};function T(w,...E){if(!e.apply(this,arguments))return;var N=C(this,E).event(w),M=this.__zoom,P=Math.max(i[0],Math.min(i[1],M.k*Math.pow(2,o.apply(this,arguments)))),D=be(w);if(N.wheel)(N.mouse[0][0]!==D[0]||N.mouse[0][1]!==D[1])&&(N.mouse[1]=M.invert(N.mouse[0]=D)),clearTimeout(N.wheel);else{if(M.k===P)return;N.mouse=[D,M.invert(D)],ht(this),N.start()}It(w),N.wheel=setTimeout(B,h),N.zoom("mouse",n(m(v(M,P),N.mouse[0],N.mouse[1]),N.extent,s));function B(){N.wheel=null,N.end()}}function z(w,...E){if(f||!e.apply(this,arguments))return;var N=w.currentTarget,M=C(this,E,!0).event(w),P=xe(w.view).on("mousemove.zoom",q,!0).on("mouseup.zoom",Y,!0),D=be(w,N),B=w.clientX,V=w.clientY;Xt(w.view),Un(w),M.mouse=[D,this.__zoom.invert(D)],ht(this),M.start();function q(Z){if(It(Z),!M.moved){var Q=Z.clientX-B,ne=Z.clientY-V;M.moved=Q*Q+ne*ne>g}M.event(Z).zoom("mouse",n(m(M.that.__zoom,M.mouse[0]=be(Z,N),M.mouse[1]),M.extent,s))}function Y(Z){P.on("mousemove.zoom mouseup.zoom",null),Yt(Z.view,M.moved),It(Z),M.event(Z).end()}}function R(w,...E){if(e.apply(this,arguments)){var N=this.__zoom,M=be(w.changedTouches?w.changedTouches[0]:w,this),P=N.invert(M),D=N.k*(w.shiftKey?.5:2),B=n(m(v(N,D),M,P),t.apply(this,E),s);It(w),a>0?xe(this).transition().duration(a).call(S,B,M,w):xe(this).call(y.transform,B,M,w)}}function H(w,...E){if(e.apply(this,arguments)){var N=w.touches,M=N.length,P=C(this,E,w.changedTouches.length===M).event(w),D,B,V,q;for(Un(w),B=0;B<M;++B)V=N[B],q=be(V,this),q=[q,this.__zoom.invert(q),V.identifier],P.touch0?!P.touch1&&P.touch0[2]!==q[2]&&(P.touch1=q,P.taps=0):(P.touch0=q,D=!0,P.taps=1+!!u);u&&(u=clearTimeout(u)),D&&(P.taps<2&&(d=q[0],u=setTimeout(function(){u=null},p)),ht(this),P.start())}}function F(w,...E){if(this.__zooming){var N=C(this,E).event(w),M=w.changedTouches,P=M.length,D,B,V,q;for(It(w),D=0;D<P;++D)B=M[D],V=be(B,this),N.touch0&&N.touch0[2]===B.identifier?N.touch0[0]=V:N.touch1&&N.touch1[2]===B.identifier&&(N.touch1[0]=V);if(B=N.that.__zoom,N.touch1){var Y=N.touch0[0],Z=N.touch0[1],Q=N.touch1[0],ne=N.touch1[1],X=(X=Q[0]-Y[0])*X+(X=Q[1]-Y[1])*X,$=($=ne[0]-Z[0])*$+($=ne[1]-Z[1])*$;B=v(B,Math.sqrt(X/$)),V=[(Y[0]+Q[0])/2,(Y[1]+Q[1])/2],q=[(Z[0]+ne[0])/2,(Z[1]+ne[1])/2]}else if(N.touch0)V=N.touch0[0],q=N.touch0[1];else return;N.zoom("touch",n(m(B,V,q),N.extent,s))}}function _(w,...E){if(this.__zooming){var N=C(this,E).event(w),M=w.changedTouches,P=M.length,D,B;for(Un(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),D=0;D<P;++D)B=M[D],N.touch0&&N.touch0[2]===B.identifier?delete N.touch0:N.touch1&&N.touch1[2]===B.identifier&&delete N.touch1;if(N.touch1&&!N.touch0&&(N.touch0=N.touch1,delete N.touch1),N.touch0)N.touch0[1]=this.__zoom.invert(N.touch0[0]);else if(N.end(),N.taps===2&&(B=be(B,this),Math.hypot(d[0]-B[0],d[1]-B[1])<x)){var V=xe(this).on("dblclick.zoom");V&&V.apply(this,arguments)}}}return y.wheelDelta=function(w){return arguments.length?(o=typeof w=="function"?w:ln(+w),y):o},y.filter=function(w){return arguments.length?(e=typeof w=="function"?w:ln(!!w),y):e},y.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:ln(!!w),y):r},y.extent=function(w){return arguments.length?(t=typeof w=="function"?w:ln([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),y):t},y.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],y):[i[0],i[1]]},y.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],y):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},y.constrain=function(w){return arguments.length?(n=w,y):n},y.duration=function(w){return arguments.length?(a=+w,y):a},y.interpolate=function(w){return arguments.length?(c=w,y):c},y.on=function(){var w=l.on.apply(l,arguments);return w===l?y:w},y.clickDistance=function(w){return arguments.length?(g=(w=+w)*w,y):Math.sqrt(g)},y.tapDistance=function(w){return arguments.length?(x=+w,y):x},y}var Ne={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},Dt=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Yo=["Enter"," ","Escape"],Zo={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},tt;(function(e){e.Strict="strict",e.Loose="loose"})(tt||(tt={}));var Ye;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Ye||(Ye={}));var yt;(function(e){e.Partial="partial",e.Full="full"})(yt||(yt={}));var Go={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},$e;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})($e||($e={}));var zt;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(zt||(zt={}));var U;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(U||(U={}));var Ts={[U.Left]:U.Right,[U.Right]:U.Left,[U.Top]:U.Bottom,[U.Bottom]:U.Top},Uo=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,Zs=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ko=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var fn=(e,t=[0,0])=>{let{width:n,height:o}=Pe(e),r=e.origin??t,i=n*r[0],s=o*r[1];return{x:e.position.x-i,y:e.position.y-s}},jo=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=!1,o=e.reduce((r,i)=>{let s=typeof i=="string",a=!t.nodeLookup&&!s?i:void 0;return t.nodeLookup&&(a=s?t.nodeLookup.get(i):Ko(i)?i:t.nodeLookup.get(i.id)),a?(n=!0,no(r,Jn(a,t.nodeOrigin))):r},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return n?oo(o):{x:0,y:0,width:0,height:0}},Tt=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=no(n,Jn(r)),o=!0)}),o?oo(n):{x:0,y:0,width:0,height:0}},eo=(e,t,[n,o,r]=[0,0,1],i=!1,s=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,d=[];for(let f of e.values()){let{measured:p,selectable:h=!0,hidden:g=!1}=f;if(s&&!h||g)continue;let x=p.width??f.width??f.initialWidth??0,y=p.height??f.height??f.initialHeight??0,{x:v,y:m}=f.internals.positionAbsolute,b=Qs(a,c,l,u,v,m,x,y),S=x*y,C=i&&b>0;(!f.internals.handleBounds||C||b>=S||f.dragging)&&d.push(f)}return d},Gs=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function Tf(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:s,height:a}=Pe(r);i=s>0&&a>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Us({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},s){if(e.size===0)return!0;let a=Tf(e,s),c=Tt(a),l=gn(c,t,n,s?.minZoom??r,s?.maxZoom??i,s?.padding??.1);return await o.setViewport(l,{duration:s?.duration,ease:s?.ease,interpolate:s?.interpolate}),!0}function Qo({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let s=n.get(e),a=s.parentId?n.get(s.parentId):void 0,{x:c,y:l}=a?a.internals.positionAbsolute:{x:0,y:0},u=s.origin??o,d=s.extent||r;if(s.extent==="parent"&&!s.expandParent)if(!a)i?.("005",Ne.error005());else{let{width:p,height:h}=Pe(a);p&&h&&(d=[[c,l],[c+p,l+h]])}else a&&bt(s.extent)&&(d=[[s.extent[0][0]+c,s.extent[0][1]+l],[s.extent[1][0]+c,s.extent[1][1]+l]]);let f=bt(d)?xt(t,d,s.measured):t;return(s.measured.width===void 0||s.measured.height===void 0)&&i?.("015",Ne.error015()),{position:{x:f.x-c+(s.measured.width??0)*u[0],y:f.y-l+(s.measured.height??0)*u[1]},positionAbsolute:f}}async function Ks({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(f=>f.id)),s=[];for(let f of n){if(f.deletable===!1)continue;let p=i.has(f.id),h=!p&&f.parentId&&s.find(g=>g.id===f.parentId);(p||h)&&s.push(f)}let a=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),u=Gs(s,c);for(let f of c)a.has(f.id)&&!u.find(h=>h.id===f.id)&&u.push(f);if(!r)return{edges:u,nodes:s};let d=await r({nodes:s,edges:u});return typeof d=="boolean"?d?{edges:u,nodes:s}:{edges:[],nodes:[]}:d}var At=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),xt=(e={x:0,y:0},t,n)=>({x:At(e.x,t[0][0],t[1][0]-(n?.width??0)),y:At(e.y,t[0][1],t[1][1]-(n?.height??0))});function js(e,t,n){let{width:o,height:r}=Pe(n),{x:i,y:s}=n.internals.positionAbsolute;return xt(e,[[i,s],[i+o,s+r]],t)}var Os=(e,t,n)=>e<t?At(Math.abs(e-t),1,t)/t:e>n?-At(Math.abs(e-n),1,t)/t:0,to=(e,t,n=15,o=40)=>{let r=Os(e.x,o,t.width-o)*n,i=Os(e.y,o,t.height-o)*n;return[r,i]},no=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Xo=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),oo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Ot=(e,t=[0,0])=>{let{x:n,y:o}=Ko(e)?e.internals.positionAbsolute:fn(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Jn=(e,t=[0,0])=>{let{x:n,y:o}=Ko(e)?e.internals.positionAbsolute:fn(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Jo=(e,t)=>oo(no(Xo(e),Xo(t))),Qs=(e,t,n,o,r,i,s,a)=>{let c=Math.max(0,Math.min(e+n,r+s)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+a)-Math.max(t,i));return Math.ceil(c*l)},pn=(e,t)=>Qs(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),er=e=>Me(e.width)&&Me(e.height)&&Me(e.x)&&Me(e.y),Me=e=>!isNaN(e)&&isFinite(e),tr=(e,t)=>(n,o)=>{},Lt=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Ht=({x:e,y:t},[n,o,r],i=!1,s=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return i?Lt(a,s):a},wt=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Pt(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Of(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Pt(e,n),r=Pt(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Pt(e.top??e.y??0,n),r=Pt(e.bottom??e.y??0,n),i=Pt(e.left??e.x??0,t),s=Pt(e.right??e.x??0,t);return{top:o,right:s,bottom:r,left:i,x:i+s,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Lf(e,t,n,o,r,i){let{x:s,y:a}=wt(e,[t,n,o]),{x:c,y:l}=wt({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,d=i-l;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(u),bottom:Math.floor(d)}}var gn=(e,t,n,o,r,i)=>{let s=Of(i,t,n),a=(t-s.x)/e.width,c=(n-s.y)/e.height,l=Math.min(a,c),u=At(l,o,r),d=e.x+e.width/2,f=e.y+e.height/2,p=t/2-d*u,h=n/2-f*u,g=Lf(e,p,h,u,t,n),x={left:Math.min(g.left-s.left,0),top:Math.min(g.top-s.top,0),right:Math.min(g.right-s.right,0),bottom:Math.min(g.bottom-s.bottom,0)};return{x:p-x.left+x.right,y:h-x.top+x.bottom,zoom:u}},$t=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function bt(e){return e!=null&&e!=="parent"}function Pe(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function nr(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function or(e,t={width:0,height:0},n,o,r){let i={...e},s=o.get(n);if(s){let a=s.origin||r;i.x+=s.internals.positionAbsolute.x-(t.width??0)*a[0],i.y+=s.internals.positionAbsolute.y-(t.height??0)*a[1]}return i}function rr(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Js(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function ea(e){return{...Zo,...e||{}}}function ir(e){return e===null?null:e?"valid":"invalid"}function dn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:s}=Ie(e),a=Ht({x:i-(r?.left??0),y:s-(r?.top??0)},o),{x:c,y:l}=n?Lt(a,t):a;return{xSnapped:c,ySnapped:l,...a}}var ro=e=>({width:e.offsetWidth,height:e.offsetHeight}),sr=e=>e?.getRootNode?.()||window?.document,Hf=["INPUT","SELECT","TEXTAREA"];function ar(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Hf.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var cr=e=>"clientX"in e,Ie=(e,t)=>{let n=cr(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},Ls=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(s=>{let a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...ro(s)}})};function io({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:s,targetControlY:a}){let c=e*.125+r*.375+s*.375+n*.125,l=t*.125+i*.375+a*.375+o*.125,u=Math.abs(c-e),d=Math.abs(l-t);return[c,l,u,d]}function jn(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Hs({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case U.Left:return[t-jn(t-o,i),n];case U.Right:return[t+jn(o-t,i),n];case U.Top:return[t,n-jn(n-r,i)];case U.Bottom:return[t,n+jn(r-n,i)]}}function so({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,curvature:s=.25}){let[a,c]=Hs({pos:n,x1:e,y1:t,x2:o,y2:r,c:s}),[l,u]=Hs({pos:i,x1:o,y1:r,x2:e,y2:t,c:s}),[d,f,p,h]=io({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${a},${c} ${l},${u} ${o},${r}`,d,f,p,h]}function lr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,s=Math.abs(o-t)/2,a=o<t?o+s:o-s;return[i,a,r,s]}function ta({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let s=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return s+a}function na({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=no(Jn(e),Jn(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let s={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return pn(s,oo(i))>0}var $f=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,Bf=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),oa=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Ne.error006()),t;let o=n.getEdgeId||$f,r;return Uo(e)?r={...e}:r={...e,id:o(e)},Bf(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function ao({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,s,a]=lr({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,s,a]}var $s={[U.Left]:{x:-1,y:0},[U.Right]:{x:1,y:0},[U.Top]:{x:0,y:-1},[U.Bottom]:{x:0,y:1}},Vf=({source:e,sourcePosition:t=U.Bottom,target:n})=>t===U.Left||t===U.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Bs=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Ff({source:e,sourcePosition:t=U.Bottom,target:n,targetPosition:o=U.Top,center:r,offset:i,stepPosition:s}){let a=$s[t],c=$s[o],l={x:e.x+a.x*i,y:e.y+a.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},d=Vf({source:l,sourcePosition:t,target:u}),f=d.x!==0?"x":"y",p=d[f],h=[],g,x,y={x:0,y:0},v={x:0,y:0},[,,m,b]=lr({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[f]*c[f]===-1){f==="x"?(g=r.x??l.x+(u.x-l.x)*s,x=r.y??(l.y+u.y)/2):(g=r.x??(l.x+u.x)/2,x=r.y??l.y+(u.y-l.y)*s);let T=[{x:g,y:l.y},{x:g,y:u.y}],z=[{x:l.x,y:x},{x:u.x,y:x}];a[f]===p?h=f==="x"?T:z:h=f==="x"?z:T}else{let T=[{x:l.x,y:u.y}],z=[{x:u.x,y:l.y}];if(f==="x"?h=a.x===p?z:T:h=a.y===p?T:z,t===o){let w=Math.abs(e[f]-n[f]);if(w<=i){let E=Math.min(i-1,i-w);a[f]===p?y[f]=(l[f]>e[f]?-1:1)*E:v[f]=(u[f]>n[f]?-1:1)*E}}if(t!==o){let w=f==="x"?"y":"x",E=a[f]===c[w],N=l[w]>u[w],M=l[w]<u[w];(a[f]===1&&(!E&&N||E&&M)||a[f]!==1&&(!E&&M||E&&N))&&(h=f==="x"?T:z)}let R={x:l.x+y.x,y:l.y+y.y},H={x:u.x+v.x,y:u.y+v.y},F=Math.max(Math.abs(R.x-h[0].x),Math.abs(H.x-h[0].x)),_=Math.max(Math.abs(R.y-h[0].y),Math.abs(H.y-h[0].y));F>=_?(g=(R.x+H.x)/2,x=h[0].y):(g=h[0].x,x=(R.y+H.y)/2)}let S={x:l.x+y.x,y:l.y+y.y},C={x:u.x+v.x,y:u.y+v.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...C.x!==h[h.length-1].x||C.y!==h[h.length-1].y?[C]:[],n],g,x,m,b]}function Rf(e,t,n,o){let r=Math.min(Bs(e,t)/2,Bs(t,n)/2,o),{x:i,y:s}=t;if(e.x===i&&i===n.x||e.y===s&&s===n.y)return`L${i} ${s}`;if(e.y===s){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${s}Q ${i},${s} ${i},${s+r*u}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${s+r*c}Q ${i},${s} ${i+r*a},${s}`}function hn({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,borderRadius:s=5,centerX:a,centerY:c,offset:l=20,stepPosition:u=.5}){let[d,f,p,h,g]=Ff({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:a,y:c},offset:l,stepPosition:u}),x=`M${d[0].x} ${d[0].y}`;for(let y=1;y<d.length-1;y++)x+=Rf(d[y-1],d[y],d[y+1],s);return x+=`L${d[d.length-1].x} ${d[d.length-1].y}`,[x,f,p,h,g]}function Vs(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function ra(e){let{sourceNode:t,targetNode:n}=e;if(!Vs(t)||!Vs(n))return null;let o=t.internals.handleBounds||Fs(t.handles),r=n.internals.handleBounds||Fs(n.handles),i=Rs(o?.source??[],e.sourceHandle),s=Rs(e.connectionMode===tt.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!s)return e.onError?.("008",Ne.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=i?.position||U.Bottom,c=s?.position||U.Top,l=nt(t,i,a),u=nt(n,s,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:a,targetPosition:c}}function Fs(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function nt(e,t,n=U.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:s,height:a}=t??Pe(e);if(o)return{x:r+s/2,y:i+a/2};switch(t?.position??n){case U.Top:return{x:r+s/2,y:i};case U.Right:return{x:r+s,y:i+a/2};case U.Bottom:return{x:r+s/2,y:i+a};case U.Left:return{x:r,y:i+a/2}}}function Rs(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function co(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function ia(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((s,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=co(c,t);i.has(l)||(s.push({id:l,color:c.color||n,...c}),i.add(l))}}),s),[]).sort((s,a)=>s.id.localeCompare(a.id))}var sa=1e3,Wf=10,ur={nodeOrigin:[0,0],nodeExtent:Dt,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},qf={...ur,checkEquality:!0};function dr(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function aa(e,t,n){let o=dr(ur,n);for(let r of e.values())if(r.parentId)pr(r,e,t,o);else{let i=fn(r,o.nodeOrigin),s=bt(r.extent)?r.extent:o.nodeExtent,a=xt(i,s,Pe(r));r.internals.positionAbsolute=a}}function Xf(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function fr(e){return e==="manual"}function lo(e,t,n,o={}){let r=dr(qf,o),i={i:0},s=new Map(t),a=r?.elevateNodesOnSelect&&!fr(r.zIndexMode)?sa:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let d=s.get(u.id);if(r.checkEquality&&u===d?.internals.userNode)t.set(u.id,d);else{let f=fn(u,r.nodeOrigin),p=bt(u.extent)?u.extent:r.nodeExtent,h=xt(f,p,Pe(u));d={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:h,handleBounds:Xf(u,d),z:ca(u,a,r.zIndexMode),userNode:u}},t.set(u.id,d)}(d.measured===void 0||d.measured.width===void 0||d.measured.height===void 0)&&!d.hidden&&(c=!1),u.parentId&&pr(d,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function Yf(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function pr(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:s,nodeExtent:a,zIndexMode:c}=dr(ur,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Yf(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*Wf),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let d=i&&!fr(c)?sa:0,{x:f,y:p,z:h}=Zf(e,u,s,a,d,c),{positionAbsolute:g}=e.internals,x=f!==g.x||p!==g.y;(x||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:x?{x:f,y:p}:g,z:h}})}function ca(e,t,n){let o=Me(e.zIndex)?e.zIndex:0;return fr(n)?o:o+(e.selected?t:0)}function Zf(e,t,n,o,r,i){let{x:s,y:a}=t.internals.positionAbsolute,c=Pe(e),l=fn(e,n),u=bt(e.extent)?xt(l,e.extent,c):l,d=xt({x:s+u.x,y:a+u.y},o,c);e.extent==="parent"&&(d=js(d,c,t));let f=ca(e,r,i),p=t.internals.z??0;return{x:d.x,y:d.y,z:p>=f?p+1:f}}function uo(e,t,n,o=[0,0]){let r=[],i=new Map;for(let s of e){let a=t.get(s.parentId);if(!a)continue;let c=i.get(s.parentId)?.expandedRect??Ot(a),l=Jo(c,s.rect);i.set(s.parentId,{expandedRect:l,parent:a})}return i.size>0&&i.forEach(({expandedRect:s,parent:a},c)=>{let l=a.internals.positionAbsolute,u=Pe(a),d=a.origin??o,f=s.x<l.x?Math.round(Math.abs(l.x-s.x)):0,p=s.y<l.y?Math.round(Math.abs(l.y-s.y)):0,h=Math.max(u.width,Math.round(s.width)),g=Math.max(u.height,Math.round(s.height)),x=(h-u.width)*d[0],y=(g-u.height)*d[1];(f>0||p>0||x||y)&&(r.push({id:c,type:"position",position:{x:a.position.x-f+x,y:a.position.y-p+y}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(u.width<s.width||u.height<s.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(f?d[0]*f-x:0),height:g+(p?d[1]*p-y:0)}})}),r}function la(e,t,n,o,r,i,s){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(a),{m22:d}=new window.DOMMatrixReadOnly(u.transform),f=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let g=ro(p.nodeElement),x=h.measured.width!==g.width||h.measured.height!==g.height;if(!!(g.width&&g.height&&(x||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=bt(h.extent)?h.extent:i,{positionAbsolute:b}=h.internals;if(h.parentId&&h.extent==="parent"){let C=t.get(h.parentId);C&&(b=js(b,g,C))}else m&&(b=xt(b,m,g));let S={...h,measured:g,internals:{...h.internals,positionAbsolute:b,handleBounds:{source:Ls("source",p.nodeElement,v,d,h.id),target:Ls("target",p.nodeElement,v,d,h.id)}}};t.set(h.id,S),h.parentId&&pr(S,t,n,{nodeOrigin:r,zIndexMode:s}),c=!0,x&&(l.push({id:h.id,type:"dimensions",dimensions:g}),h.expandParent&&h.parentId&&f.push({id:h.id,parentId:h.parentId,rect:Ot(S,r)}))}}if(f.length>0){let p=uo(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function ua({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let s=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!s&&(s.x!==n[0]||s.y!==n[1]||s.k!==n[2])}function Ws(e,t,n,o,r,i){let s=r,a=o.get(s)||new Map;o.set(s,a.set(n,t)),s=`${r}-${e}`;let c=o.get(s)||new Map;if(o.set(s,c.set(n,t)),i){s=`${r}-${e}-${i}`;let l=o.get(s)||new Map;o.set(s,l.set(n,t))}}function gr(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:s=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:s,targetHandle:a},l=`${r}-${s}--${i}-${a}`,u=`${i}-${a}--${r}-${s}`;Ws("source",c,u,e,r,s),Ws("target",c,l,e,i,a),t.set(o.id,o)}}function da(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:da(n,t):!1}function qs(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Gf(e,t,n,o){let r=new Map;for(let[i,s]of e)if((s.selected||s.id===o)&&(!s.parentId||!da(s,e))&&(s.draggable||t&&typeof s.draggable>"u")){let a=e.get(i);a&&r.set(i,{id:i,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function Ro({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[s,a]of t){let c=n.get(s)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Uf({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},s=Lt(i,t);return{x:s.x-i.x,y:s.y-i.y}}function fa({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},s=0,a=new Map,c=!1,l={x:0,y:0},u=null,d=!1,f=null,p=!1,h=!1,g=null;function x({noDragClassName:v,handleSelector:m,domNode:b,isSelectable:S,nodeId:C,nodeClickDistance:I=0}){f=xe(b);function T({x:F,y:_}){let{nodeLookup:w,nodeExtent:E,snapGrid:N,snapToGrid:M,nodeOrigin:P,onNodeDrag:D,onSelectionDrag:B,onError:V,updateNodePositions:q}=t();i={x:F,y:_};let Y=!1,Z=a.size>1,Q=Z&&E?Xo(Tt(a)):null,ne=Z&&M?Uf({dragItems:a,snapGrid:N,x:F,y:_}):null;for(let[X,$]of a){if(!w.has(X))continue;let G={x:F-$.distance.x,y:_-$.distance.y};M&&(G=ne?{x:Math.round(G.x+ne.x),y:Math.round(G.y+ne.y)}:Lt(G,N));let K=null;if(Z&&E&&!$.extent&&Q){let{positionAbsolute:te}=$.internals,re=te.x-Q.x+E[0][0],ie=te.x+$.measured.width-Q.x2+E[1][0],se=te.y-Q.y+E[0][1],me=te.y+$.measured.height-Q.y2+E[1][1];K=[[re,se],[ie,me]]}let{position:ee,positionAbsolute:j}=Qo({nodeId:X,nextPosition:G,nodeLookup:w,nodeExtent:K||E,nodeOrigin:P,onError:V});Y=Y||$.position.x!==ee.x||$.position.y!==ee.y,$.position=ee,$.internals.positionAbsolute=j}if(h=h||Y,!!Y&&(q(a,!0),g&&(o||D||!C&&B))){let[X,$]=Ro({nodeId:C,dragItems:a,nodeLookup:w});o?.(g,a,X,$),D?.(g,X,$),C||B?.(g,$)}}async function z(){if(!u)return;let{transform:F,panBy:_,autoPanSpeed:w,autoPanOnNodeDrag:E}=t();if(!E){c=!1,cancelAnimationFrame(s);return}let[N,M]=to(l,u,w);(N!==0||M!==0)&&(i.x=(i.x??0)-N/F[2],i.y=(i.y??0)-M/F[2],await _({x:N,y:M})&&T(i)),s=requestAnimationFrame(z)}function R(F){let{nodeLookup:_,multiSelectionActive:w,nodesDraggable:E,transform:N,snapGrid:M,snapToGrid:P,selectNodesOnDrag:D,onNodeDragStart:B,onSelectionDragStart:V,unselectNodesAndEdges:q}=t();d=!0,(!D||!S)&&!w&&C&&(_.get(C)?.selected||q()),S&&D&&C&&e?.(C);let Y=dn(F.sourceEvent,{transform:N,snapGrid:M,snapToGrid:P,containerBounds:u});if(i=Y,a=Gf(_,E,Y,C),a.size>0&&(n||B||!C&&V)){let[Z,Q]=Ro({nodeId:C,dragItems:a,nodeLookup:_});n?.(F.sourceEvent,a,Z,Q),B?.(F.sourceEvent,Z,Q),C||V?.(F.sourceEvent,Q)}}let H=In().clickDistance(I).on("start",F=>{let{domNode:_,nodeDragThreshold:w,transform:E,snapGrid:N,snapToGrid:M}=t();u=_?.getBoundingClientRect()||null,p=!1,h=!1,g=F.sourceEvent,w===0&&R(F),i=dn(F.sourceEvent,{transform:E,snapGrid:N,snapToGrid:M,containerBounds:u}),l=Ie(F.sourceEvent,u)}).on("drag",F=>{let{autoPanOnNodeDrag:_,transform:w,snapGrid:E,snapToGrid:N,nodeDragThreshold:M,nodeLookup:P}=t(),D=dn(F.sourceEvent,{transform:w,snapGrid:E,snapToGrid:N,containerBounds:u});if(g=F.sourceEvent,(F.sourceEvent.type==="touchmove"&&F.sourceEvent.touches.length>1||C&&!P.has(C))&&(p=!0),!p){if(!c&&_&&d&&(c=!0,z()),!d){let B=Ie(F.sourceEvent,u),V=B.x-l.x,q=B.y-l.y;Math.sqrt(V*V+q*q)>M&&R(F)}(i.x!==D.xSnapped||i.y!==D.ySnapped)&&a&&d&&(l=Ie(F.sourceEvent,u),T(D))}}).on("end",F=>{if(!d||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,d=!1,cancelAnimationFrame(s),a.size>0){let{nodeLookup:_,updateNodePositions:w,onNodeDragStop:E,onSelectionDragStop:N}=t();if(h&&(w(a,!1),h=!1),r||E||!C&&N){let[M,P]=Ro({nodeId:C,dragItems:a,nodeLookup:_,dragging:!1});r?.(F.sourceEvent,a,M,P),E?.(F.sourceEvent,M,P),C||N?.(F.sourceEvent,P)}}}).filter(F=>{let _=F.target;return!F.button&&(!v||!qs(_,`.${v}`,b))&&(!m||qs(_,m,b))});f.call(H)}function y(){f?.on(".drag",null)}return{update:x,destroy:y}}function Kf(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())pn(r,Ot(i))>0&&o.push(i);return o}var jf=250;function Qf(e,t,n,o){let r=[],i=1/0,s=Kf(e,n,t+jf);for(let a of s){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:d}=nt(a,l,l.position,!0),f=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(d-e.y,2));f>t||(f<i?(r=[{...l,x:u,y:d}],i=f):f===i&&r.push({...l,x:u,y:d}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function pa(e,t,n,o,r,i=!1){let s=o.get(e);if(!s)return null;let a=r==="strict"?s.internals.handleBounds?.[t]:[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]],c=(n?a?.find(l=>l.id===n):a?.[0])??null;return c&&i?{...c,...nt(s,c,c.position,!0)}:c}function ga(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Jf(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var ha=()=>!0;function ep(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:s,domNode:a,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:d,panBy:f,cancelConnection:p,onConnectStart:h,onConnect:g,onConnectEnd:x,isValidConnection:y=ha,onReconnectEnd:v,updateConnection:m,getTransform:b,getFromHandle:S,autoPanSpeed:C,dragThreshold:I=1,handleDomNode:T}){let z=sr(e.target),R=0,H,{x:F,y:_}=Ie(e),w=ga(i,T),E=a?.getBoundingClientRect(),N=!1;if(!E||!w)return;let M=pa(r,w,o,c,t);if(!M)return;let P=Ie(e,E),D=!1,B=null,V=!1,q=null;function Y(){if(!u||!E)return;let[ee,j]=to(P,E,C);f({x:ee,y:j}),R=requestAnimationFrame(Y)}let Z={...M,nodeId:r,type:w,position:M.position},Q=c.get(r),X={inProgress:!0,isValid:null,from:nt(Q,Z,U.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:Q,to:P,toHandle:null,toPosition:Ts[Z.position],toNode:null,pointer:P};function $(){N=!0,m(X),h?.(e,{nodeId:r,handleId:o,handleType:w})}I===0&&$();function G(ee){if(!N){let{x:me,y:oe}=Ie(ee),Ce=me-F,ke=oe-_;if(!(Ce*Ce+ke*ke>I*I))return;$()}if(!S()||!Z){K(ee);return}let j=b();P=Ie(ee,E),H=Qf(Ht(P,j,!1,[1,1]),n,c,Z),D||(Y(),D=!0);let te=ma(ee,{handle:H,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:s?"target":"source",isValidConnection:y,doc:z,lib:l,flowId:d,nodeLookup:c});q=te.handleDomNode,B=te.connection,V=Jf(!!H,te.isValid);let re=c.get(r),ie=re?nt(re,Z,U.Left,!0):X.from,se={...X,from:ie,isValid:V,to:te.toHandle&&V?wt({x:te.toHandle.x,y:te.toHandle.y},j):P,toHandle:te.toHandle,toPosition:V&&te.toHandle?te.toHandle.position:Ts[Z.position],toNode:te.toHandle?c.get(te.toHandle.nodeId):null,pointer:P};m(se),X=se}function K(ee){if(!("touches"in ee&&ee.touches.length>0)){if(N){(H||q)&&B&&V&&g?.(B);let{inProgress:j,...te}=X,re={...te,toPosition:X.toHandle?X.toPosition:null};x?.(ee,re),i&&v?.(ee,re)}p(),cancelAnimationFrame(R),D=!1,V=!1,B=null,q=null,z.removeEventListener("mousemove",G),z.removeEventListener("mouseup",K),z.removeEventListener("touchmove",G),z.removeEventListener("touchend",K)}}z.addEventListener("mousemove",G),z.addEventListener("mouseup",K),z.addEventListener("touchmove",G),z.addEventListener("touchend",K)}function ma(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:s,lib:a,flowId:c,isValidConnection:l=ha,nodeLookup:u}){let d=i==="target",f=t?s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=Ie(e),g=s.elementFromPoint(p,h),x=g?.classList.contains(`${a}-flow__handle`)?g:f,y={handleDomNode:x,isValid:!1,connection:null,toHandle:null};if(x){let v=ga(void 0,x),m=x.getAttribute("data-nodeid"),b=x.getAttribute("data-handleid"),S=x.classList.contains("connectable"),C=x.classList.contains("connectableend");if(!m||!v)return y;let I={source:d?m:o,sourceHandle:d?b:r,target:d?o:m,targetHandle:d?r:b};y.connection=I;let z=S&&C&&(n===tt.Strict?d&&v==="source"||!d&&v==="target":m!==o||b!==r);y.isValid=z&&l(I),y.toHandle=pa(m,v,b,u,n,!0)}return y}var fo={onPointerDown:ep,isValid:ma};function ya({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=xe(e);function i({translateExtent:a,width:c,height:l,zoomStep:u=1,pannable:d=!0,zoomable:f=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let b=n(),S=m.sourceEvent.ctrlKey&&$t()?10:1,C=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*u,I=b[2]*Math.pow(2,C*S);t.scaleTo(I)},g=[0,0],x=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(g=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},y=m=>{let b=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],C=[S[0]-g[0],S[1]-g[1]];g=S;let I=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),T={x:b[0]-C[0]*I,y:b[1]-C[1]*I},z=[[0,0],[c,l]];t.setViewportConstrained({x:T.x,y:T.y,zoom:b[2]},z,a)},v=Kn().on("start",x).on("zoom",d?y:null).on("zoom.wheel",f?h:null);r.call(v,{})}function s(){r.on("zoom",null)}return{update:i,destroy:s,pointer:be}}var po=e=>({x:e.x,y:e.y,zoom:e.k}),Wo=({x:e,y:t,zoom:n})=>mt.translate(e,t).scale(n),et=(e,t)=>e.target.closest(`.${t}`),xa=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),tp=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,qo=(e,t=0,n=tp,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},wa=e=>{let t=e.ctrlKey&&$t()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function np({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:s,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(et(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let d=n.property("__zoom").k||1;if(u.ctrlKey&&s){let x=be(u),y=wa(u),v=d*Math.pow(2,y);o.scaleTo(n,v,x,u);return}let f=u.deltaMode===1?20:1,p=r===Ye.Vertical?0:u.deltaX*f,h=r===Ye.Horizontal?0:u.deltaY*f;!$t()&&u.shiftKey&&r!==Ye.Vertical&&(p=u.deltaY*f,h=0),o.translateBy(n,-(p/d)*i,-(h/d)*i,{internal:!0});let g=po(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,g):(e.isPanScrolling=!0,a?.(u,g)),e.panScrollTimeout=setTimeout(()=>{l?.(u,g),e.isPanScrolling=!1},150)}}function op({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",s=!t&&i&&!o.ctrlKey,a=et(o,e);if(o.ctrlKey&&i&&a&&o.preventDefault(),s||a)return null;o.preventDefault(),n.call(this,o,r)}}function rp({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=po(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function ip({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&xa(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,po(i.transform))}}function sp({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return s=>{if(!s.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&xa(t,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&i(s.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=po(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(s.sourceEvent,a)},n?150:0)}}}function ap({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:n,zoomOnPinch:o,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:s,userSelectionActive:a,noWheelClassName:c,noPanClassName:l,lib:u,connectionInProgress:d}){return f=>{let p=t||n,h=o&&f.ctrlKey,g=f.type==="wheel";if(f.button===1&&f.type==="mousedown"&&(et(f,`${u}-flow__node`)||et(f,`${u}-flow__edge`)||et(f,`${u}-flow__selection`)||et(f,`${u}-flow__nodesselection`)))return!0;if(!r&&!p&&!i&&!s&&!o||a||d&&!g||et(f,c)&&g||et(f,l)&&(!g||i&&g&&!t)||!o&&f.ctrlKey&&g)return!1;if(!o&&f.type==="touchstart"&&f.touches?.length>1)return f.preventDefault(),!1;if(!p&&!i&&!h&&g||!r&&(f.type==="mousedown"||f.type==="touchstart")||Array.isArray(r)&&!r.includes(f.button)&&f.type==="mousedown")return!1;let x=Array.isArray(r)&&r.includes(f.button)||!f.button||f.button<=1;return(!f.ctrlKey||g||e)&&x}}function ba({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:s,onPanZoomEnd:a,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),d=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver(_=>{let w=_[0];w&&(d=[[0,0],[w.contentRect.width,w.contentRect.height]])}):null)?.observe(e);let p=Kn().extent(()=>d).scaleExtent([t,n]).translateExtent(o),h=xe(e).call(p);b({x:r.x,y:r.y,zoom:At(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let g=h.on("wheel.zoom"),x=h.on("dblclick.zoom");p.wheelDelta(wa);async function y(_,w){return h?new Promise(E=>{p?.interpolate(w?.interpolate==="linear"?qe:pt).transform(qo(h,w?.duration,w?.ease,()=>E(!0)),_)}):!1}function v({noWheelClassName:_,noPanClassName:w,onPaneContextMenu:E,userSelectionActive:N,panOnScroll:M,panOnDrag:P,panOnScrollMode:D,panOnScrollSpeed:B,preventScrolling:V,zoomOnPinch:q,zoomOnScroll:Y,zoomOnDoubleClick:Z,panActivationKeyPressed:Q=!1,zoomActivationKeyPressed:ne,lib:X,onTransformChange:$,connectionInProgress:G,paneClickDistance:K,selectionOnDrag:ee}){N&&!l.isZoomingOrPanning&&m();let j=M&&!ne&&!N;p.clickDistance(ee?1/0:!Me(K)||K<0?0:K);let te=j?np({zoomPanValues:l,noWheelClassName:_,d3Selection:h,d3Zoom:p,panOnScrollMode:D,panOnScrollSpeed:B,zoomOnPinch:q,onPanZoomStart:s,onPanZoom:i,onPanZoomEnd:a}):op({noWheelClassName:_,preventScrolling:V,d3ZoomHandler:g});h.on("wheel.zoom",te,{passive:!1});let re=rp({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:s});p.on("start",re);let ie=ip({zoomPanValues:l,panOnDrag:P,onPaneContextMenu:!!E,onPanZoom:i,onTransformChange:$});p.on("zoom",ie);let se=sp({zoomPanValues:l,panOnDrag:P,panOnScroll:M,onPaneContextMenu:E,onPanZoomEnd:a,onDraggingChange:c});p.on("end",se);let me=ap({panActivationKeyPressed:Q,zoomActivationKeyPressed:ne,panOnDrag:P,zoomOnScroll:Y,panOnScroll:M,zoomOnDoubleClick:Z,zoomOnPinch:q,userSelectionActive:N,noPanClassName:w,noWheelClassName:_,lib:X,connectionInProgress:G});p.filter(me),Z?h.on("dblclick.zoom",x):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function b(_,w,E){let N=Wo(_),M=p?.constrain()(N,w,E);return M&&await y(M),M}async function S(_,w){let E=Wo(_);return await y(E,w),E}function C(_){if(h){let w=Wo(_),E=h.property("__zoom");(E.k!==_.zoom||E.x!==_.x||E.y!==_.y)&&p?.transform(h,w,null,{sync:!0})}}function I(){let _=h?un(h.node()):{x:0,y:0,k:1};return{x:_.x,y:_.y,zoom:_.k}}async function T(_,w){return h?new Promise(E=>{p?.interpolate(w?.interpolate==="linear"?qe:pt).scaleTo(qo(h,w?.duration,w?.ease,()=>E(!0)),_)}):!1}async function z(_,w){return h?new Promise(E=>{p?.interpolate(w?.interpolate==="linear"?qe:pt).scaleBy(qo(h,w?.duration,w?.ease,()=>E(!0)),_)}):!1}function R(_){p?.scaleExtent(_)}function H(_){p?.translateExtent(_)}function F(_){let w=!Me(_)||_<0?0:_;p?.clickDistance(w)}return{update:v,destroy:m,setViewport:S,setViewportConstrained:b,getViewport:I,scaleTo:T,scaleBy:z,setScaleExtent:R,setTranslateExtent:H,syncViewport:C,setClickDistance:F}}var ot;(function(e){e.Line="line",e.Handle="handle"})(ot||(ot={}));function cp({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let s=e-t,a=n-o,c=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(c[0]=c[0]*-1),a&&i&&(c[1]=c[1]*-1),c}function Xs(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Qe(e,t){return Math.max(0,t-e)}function Je(e,t){return Math.max(0,e-t)}function Qn(e,t,n){return Math.max(0,t-e,e-n)}function Ys(e,t){return e?!t:t}function lp(e,t,n,o,r,i,s,a){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:d}=t,f=u&&d,{xSnapped:p,ySnapped:h}=n,{minWidth:g,maxWidth:x,minHeight:y,maxHeight:v}=o,{x:m,y:b,width:S,height:C,aspectRatio:I}=e,T=Math.floor(u?p-e.pointerX:0),z=Math.floor(d?h-e.pointerY:0),R=S+(c?-T:T),H=C+(l?-z:z),F=-i[0]*S,_=-i[1]*C,w=Qn(R,g,x),E=Qn(H,y,v);if(s){let P=0,D=0;c&&T<0?P=Qe(m+T+F,s[0][0]):!c&&T>0&&(P=Je(m+R+F,s[1][0])),l&&z<0?D=Qe(b+z+_,s[0][1]):!l&&z>0&&(D=Je(b+H+_,s[1][1])),w=Math.max(w,P),E=Math.max(E,D)}if(a){let P=0,D=0;c&&T>0?P=Je(m+T,a[0][0]):!c&&T<0&&(P=Qe(m+R,a[1][0])),l&&z>0?D=Je(b+z,a[0][1]):!l&&z<0&&(D=Qe(b+H,a[1][1])),w=Math.max(w,P),E=Math.max(E,D)}if(r){if(u){let P=Qn(R/I,y,v)*I;if(w=Math.max(w,P),s){let D=0;!c&&!l||c&&!l&&f?D=Je(b+_+R/I,s[1][1])*I:D=Qe(b+_+(c?T:-T)/I,s[0][1])*I,w=Math.max(w,D)}if(a){let D=0;!c&&!l||c&&!l&&f?D=Qe(b+R/I,a[1][1])*I:D=Je(b+(c?T:-T)/I,a[0][1])*I,w=Math.max(w,D)}}if(d){let P=Qn(H*I,g,x)/I;if(E=Math.max(E,P),s){let D=0;!c&&!l||l&&!c&&f?D=Je(m+H*I+F,s[1][0])/I:D=Qe(m+(l?z:-z)*I+F,s[0][0])/I,E=Math.max(E,D)}if(a){let D=0;!c&&!l||l&&!c&&f?D=Qe(m+H*I,a[1][0])/I:D=Je(m+(l?z:-z)*I,a[0][0])/I,E=Math.max(E,D)}}}z=z+(z<0?E:-E),T=T+(T<0?w:-w),r&&(f?R>H*I?z=(Ys(c,l)?-T:T)/I:T=(Ys(c,l)?-z:z)*I:u?(z=T/I,l=c):(T=z*I,c=l));let N=c?m+T:m,M=l?b+z:b;return{width:S+(c?-T:T),height:C+(l?-z:z),x:i[0]*T*(c?-1:1)+N,y:i[1]*z*(l?-1:1)+M}}var va={width:0,height:0,x:0,y:0},up={...va,pointerX:0,pointerY:0,aspectRatio:1};function dp(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,s=e.measured.height??0,a=n[0]*i,c=n[1]*s;return[[o-a,r-c],[o+i-a,r+s-c]]}function _a({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=xe(e),s={controlDirection:Xs("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:l,boundaries:u,keepAspectRatio:d,resizeDirection:f,onResizeStart:p,onResize:h,onResizeEnd:g,shouldResize:x}){let y={...va},v={...up};s={boundaries:u,resizeDirection:f,keepAspectRatio:d,controlDirection:Xs(l)};let m,b=null,S=[],C,I,T,z=In().on("start",R=>{let{nodeLookup:H,transform:F,snapGrid:_,snapToGrid:w,nodeOrigin:E,paneDomNode:N}=n();if(m=H.get(t),!m)return;b=N?.getBoundingClientRect()??null;let{xSnapped:M,ySnapped:P}=dn(R.sourceEvent,{transform:F,snapGrid:_,snapToGrid:w,containerBounds:b});y={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...y,pointerX:M,pointerY:P,aspectRatio:y.width/y.height},C=void 0,I=bt(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(C=H.get(m.parentId)),C&&m.extent==="parent"&&(I=[[0,0],[C.measured.width,C.measured.height]]),S=[],T=void 0;for(let[D,B]of H)if(B.parentId===t&&(S.push({id:D,position:{...B.position},extent:B.extent}),B.extent==="parent"||B.expandParent)){let V=dp(B,m,B.origin??E);T?T=[[Math.min(V[0][0],T[0][0]),Math.min(V[0][1],T[0][1])],[Math.max(V[1][0],T[1][0]),Math.max(V[1][1],T[1][1])]]:T=V}p?.(R,{...y})}).on("drag",R=>{let{transform:H,snapGrid:F,snapToGrid:_,nodeOrigin:w}=n(),E=dn(R.sourceEvent,{transform:H,snapGrid:F,snapToGrid:_,containerBounds:b}),N=[];if(!m)return;let{x:M,y:P,width:D,height:B}=y,V={},q=m.origin??w,{width:Y,height:Z,x:Q,y:ne}=lp(v,s.controlDirection,E,s.boundaries,s.keepAspectRatio,q,I,T),X=Y!==D,$=Z!==B,G=Q!==M&&X,K=ne!==P&&$;if(!G&&!K&&!X&&!$)return;let ee={prevValues:{...y},startX:v.x,startY:v.y,childNodes:S.map(ie=>({...ie,position:{...ie.position}}))};if((G||K||q[0]===1||q[1]===1)&&(V.x=G?Q:y.x,V.y=K?ne:y.y,y.x=V.x,y.y=V.y,S.length>0)){let ie=Q-M,se=ne-P;for(let me of S)me.position={x:me.position.x-ie+q[0]*(Y-D),y:me.position.y-se+q[1]*(Z-B)},N.push(me)}if((X||$)&&(V.width=X&&(!s.resizeDirection||s.resizeDirection==="horizontal")?Y:y.width,V.height=$&&(!s.resizeDirection||s.resizeDirection==="vertical")?Z:y.height,y.width=V.width,y.height=V.height),C&&m.expandParent){let ie=q[0]*(V.width??0);V.x&&V.x<ie&&(y.x=ie,v.x=v.x-(V.x-ie));let se=q[1]*(V.height??0);V.y&&V.y<se&&(y.y=se,v.y=v.y-(V.y-se))}let j=cp({width:y.width,prevWidth:D,height:y.height,prevHeight:B,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),te={...y,direction:j};if(x?.(R,te)===!1){y=ee.prevValues,v.x=ee.startX,v.y=ee.startY,S.forEach((ie,se)=>{ie.position=ee.childNodes[se].position});return}h?.(R,te),o(V,N)}).on("end",R=>{g?.(R,{...y}),r?.({...y})});i.call(z)}function c(){i.on(".drag",null)}return{update:a,destroy:c}}var Oa=St(require("react"),1),La=St(Pa(),1);var Aa={},za=e=>{let t,n=new Set,o=(u,d)=>{let f=typeof u=="function"?u(t):u;if(!Object.is(f,t)){let p=t;t=d??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(Aa.env?Aa.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},Da=e=>e?za(e):za;var{useDebugValue:Ip}=Oa.default,{useSyncExternalStoreWithSelector:Pp}=La.default,zp=e=>e;function mr(e,t=zp,n){let o=Pp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Ip(o),o}var Ta=(e,t)=>{let n=Da(e),o=(r,i=t)=>mr(n,r,i);return Object.assign(o,n),o},Ha=(e,t)=>e?Ta(e,t):Ta;function ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var Ap=require("react-dom"),xo=(0,L.createContext)(null),Dp=xo.Provider,uc=Ne.error001("react");function ae(e,t){let n=(0,L.useContext)(xo);if(n===null)throw new Error(uc);return mr(n,e,t)}function le(){let e=(0,L.useContext)(xo);if(e===null)throw new Error(uc);return(0,L.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var $a={display:"none"},Tp={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},dc="react-flow__node-desc",fc="react-flow__edge-desc",Op="react-flow__aria-live",Lp=e=>e.ariaLiveMessage,Hp=e=>e.ariaLabelConfig;function $p({rfId:e}){let t=ae(Lp);return(0,O.jsx)("div",{id:`${Op}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:Tp,children:t})}function Bp({rfId:e,disableKeyboardA11y:t}){let n=ae(Hp);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{id:`${dc}-${e}`,style:$a,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,O.jsx)("div",{id:`${fc}-${e}`,style:$a,children:n["edge.a11yDescription.default"]}),!t&&(0,O.jsx)($p,{rfId:e})]})}var wo=(0,L.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let s=`${e}`.split("-");return(0,O.jsx)("div",{className:de(["react-flow__panel",n,...s]),style:o,ref:i,...r,children:t})});wo.displayName="Panel";var Ba="https://reactflow.dev?utm_source=attribution";function Vp({proOptions:e,position:t="bottom-right"}){return(0,L.useEffect)(()=>{},[]),e?.hideAttribution?null:(0,O.jsx)(wo,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Ba}`,children:(0,O.jsx)("a",{href:Ba,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var Fp=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},ho=e=>e.id;function Rp(e,t){return ue(e.selectedNodes.map(ho),t.selectedNodes.map(ho))&&ue(e.selectedEdges.map(ho),t.selectedEdges.map(ho))}function Wp({onSelectionChange:e}){let t=le(),{selectedNodes:n,selectedEdges:o}=ae(Fp,Rp);return(0,L.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var qp=e=>!!e.onSelectionChangeHandlers;function Xp({onSelectionChange:e}){let t=ae(qp);return e||t?(0,O.jsx)(Wp,{onSelectionChange:e}):null}var pc=[0,0],Yp={x:0,y:0,zoom:1},Zp=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Va=[...Zp,"rfId"],Gp=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Fa={translateExtent:Dt,nodeOrigin:pc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function Up(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:s,reset:a,setDefaultNodesAndEdges:c}=ae(Gp,ue),l=le();(0,L.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=Fa,a()}),[]);let u=(0,L.useRef)(Fa);return(0,L.useEffect)(()=>{for(let d of Va){let f=e[d],p=u.current[d];f!==p&&(typeof e[d]>"u"||(d==="nodes"?t(f):d==="edges"?n(f):d==="minZoom"?o(f):d==="maxZoom"?r(f):d==="translateExtent"?i(f):d==="nodeExtent"?s(f):d==="ariaLabelConfig"?l.setState({ariaLabelConfig:ea(f)}):d==="fitView"?l.setState({fitViewQueued:f}):d==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[d]:f})))}u.current=e},Va.map(d=>e[d])),null}function Ra(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function Kp(e){let[t,n]=(0,L.useState)(e==="system"?null:e);return(0,L.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Ra(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Ra()?.matches?"dark":"light"}var Wa=typeof document<"u"?document:null;function mn(e=null,t={target:Wa,actInsideInputWithModifier:!0}){let[n,o]=(0,L.useState)(!1),r=(0,L.useRef)(!1),i=(0,L.useRef)(new Set([])),[s,a]=(0,L.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(d=>typeof d=="string").map(d=>d.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((d,f)=>d.concat(...f),[]);return[l,u]}return[[],[]]},[e]);return(0,L.useEffect)(()=>{let c=t?.target??Wa,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&ar(p))return!1;let g=Xa(p.code,a);if(i.current.add(p[g]),qa(s,i.current,!1)){let x=p.composedPath?.()?.[0]||p.target,y=x?.nodeName==="BUTTON"||x?.nodeName==="A";t.preventDefault!==!1&&(r.current||!y)&&p.preventDefault(),o(!0)}},d=p=>{let h=Xa(p.code,a);qa(s,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},f=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",d),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",d),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function qa(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Xa(e,t){return t.includes(e)?"code":"key"}var jp=()=>{let e=le();return(0,L.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:s}=e.getState();return s?(await s.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:s,panZoom:a}=e.getState(),c=gn(t,o,r,i,s,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:s}=e.getState();if(!s)return t;let{x:a,y:c}=s.getBoundingClientRect(),l={x:t.x-a,y:t.y-c},u=n.snapGrid??r,d=n.snapToGrid??i;return Ht(l,o,d,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),s=wt(t,n);return{x:s.x+r,y:s.y+i}}}),[])};function gc(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let s=o.get(i.id);s?s.push(i):o.set(i.id,[i])}for(let i of t){let s=o.get(i.id);if(!s){n.push(i);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){n.push({...s[0].item});continue}let a={...i};for(let c of s)Qp(c,a);n.push(a)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function Qp(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function br(e,t){return gc(e,t)}function Jp(e,t){return gc(e,t)}function vt(e,t){return{id:e,type:"select",selected:t}}function Vt(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let s=t.has(r);!(i.selected===void 0&&!s)&&i.selected!==s&&(n&&(i.selected=s),o.push(vt(i.id,s)))}return o}function Ya({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let s=t.get(i.id),a=s?.internals?.userNode??s;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:"replace"}),a===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Za(e){return{id:e.id,type:"remove"}}var eg=tr("React Flow","https://reactflow.dev/");function tg(e,t,n={}){return oa(e,t,{...n,onError:n.onError??eg})}var Ga=e=>Zs(e),ng=e=>Uo(e);function hc(e){return(0,L.forwardRef)(e)}var mc=typeof window<"u"?L.useLayoutEffect:L.useEffect;function Ua(e){let[t,n]=(0,L.useState)(BigInt(0)),[o]=(0,L.useState)(()=>og(()=>n(r=>r+BigInt(1))));return mc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function og(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var yc=(0,L.createContext)(null);function rg({children:e}){let t=le(),n=(0,L.useCallback)(a=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:d,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),g=c;for(let y of a)g=typeof y=="function"?y(g):y;let x=Ya({items:g,lookup:f});for(let y of h.values())x=y(x);u&&l(g),x.length>0?d?.(x):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:y,nodes:v,setNodes:m}=t.getState();y&&m(v)})},[]),o=Ua(n),r=(0,L.useCallback)(a=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:d,edgeLookup:f}=t.getState(),p=c;for(let h of a)p=typeof h=="function"?h(p):h;u?l(p):d&&d(Ya({items:p,lookup:f}))},[]),i=Ua(r),s=(0,L.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,O.jsx)(yc.Provider,{value:s,children:e})}function ig(){let e=(0,L.useContext)(yc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var sg=e=>!!e.panZoom;function yn(){let e=jp(),t=le(),n=ig(),o=ae(sg),r=(0,L.useMemo)(()=>{let i=d=>t.getState().nodeLookup.get(d),s=d=>{n.nodeQueue.push(d)},a=d=>{n.edgeQueue.push(d)},c=d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),h=Ga(d)?d:f.get(d.id),g=h.parentId?or(h.position,h.measured,h.parentId,f,p):h.position,x={...h,position:g,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Ot(x)},l=(d,f,p={replace:!1})=>{s(h=>h.map(g=>{if(g.id===d){let x=typeof f=="function"?f(g):f;return p.replace&&Ga(x)?x:{...g,...x}}return g}))},u=(d,f,p={replace:!1})=>{a(h=>h.map(g=>{if(g.id===d){let x=typeof f=="function"?f(g):f;return p.replace&&ng(x)?x:{...g,...x}}return g}))};return{getNodes:()=>t.getState().nodes.map(d=>({...d})),getNode:d=>i(d)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:d=[]}=t.getState();return d.map(f=>({...f}))},getEdge:d=>t.getState().edgeLookup.get(d),setNodes:s,setEdges:a,addNodes:d=>{let f=Array.isArray(d)?d:[d];n.nodeQueue.push(p=>[...p,...f])},addEdges:d=>{let f=Array.isArray(d)?d:[d];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:d=[],edges:f=[],transform:p}=t.getState(),[h,g,x]=p;return{nodes:d.map(y=>({...y})),edges:f.map(y=>({...y})),viewport:{x:h,y:g,zoom:x}}},deleteElements:async({nodes:d=[],edges:f=[]})=>{let{nodes:p,edges:h,onNodesDelete:g,onEdgesDelete:x,triggerNodeChanges:y,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:b}=t.getState(),{nodes:S,edges:C}=await Ks({nodesToRemove:d,edgesToRemove:f,nodes:p,edges:h,onBeforeDelete:b}),I=C.length>0,T=S.length>0;if(I){let z=C.map(Za);x?.(C),v(z)}if(T){let z=S.map(Za);g?.(S),y(z)}return(T||I)&&m?.({nodes:S,edges:C}),{deletedNodes:S,deletedEdges:C}},getIntersectingNodes:(d,f=!0,p)=>{let h=er(d),g=h?d:c(d),x=p!==void 0;return g?(p||t.getState().nodes).filter(y=>{let v=t.getState().nodeLookup.get(y.id);if(v&&!h&&(y.id===d.id||!v.internals.positionAbsolute))return!1;let m=Ot(x?y:v),b=pn(m,g);return f&&b>0||b>=m.width*m.height||b>=g.width*g.height}):[]},isNodeIntersecting:(d,f,p=!0)=>{let g=er(d)?d:c(d);if(!g)return!1;let x=pn(g,f);return p&&x>0||x>=f.width*f.height||x>=g.width*g.height},updateNode:l,updateNodeData:(d,f,p={replace:!1})=>{l(d,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},updateEdge:u,updateEdgeData:(d,f,p={replace:!1})=>{u(d,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},getNodesBounds:d=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return jo(d,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:d,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${d}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:d,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${d?f?`-${d}-${f}`:`-${d}`:""}`)?.values()??[]),fitView:async d=>{let f=t.getState().fitViewResolver??Js();return t.setState({fitViewQueued:!0,fitViewOptions:d,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,L.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Ka=e=>e.selected,ag=typeof window<"u"?window:void 0;function cg({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=le(),{deleteElements:o}=yn(),r=mn(e,{actInsideInputWithModifier:!1}),i=mn(t,{target:ag});(0,L.useEffect)(()=>{if(r){let{edges:s,nodes:a}=n.getState();o({nodes:a.filter(Ka),edges:s.filter(Ka)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,L.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function lg(e){let t=le();(0,L.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=ro(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Ne.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var bo={position:"absolute",width:"100%",height:"100%",top:0,left:0},ug=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function dg({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panActivationKeyPressed:r,panOnScrollSpeed:i=.5,panOnScrollMode:s=Ye.Free,zoomOnDoubleClick:a=!0,panOnDrag:c=!0,defaultViewport:l,translateExtent:u,minZoom:d,maxZoom:f,zoomActivationKeyCode:p,preventScrolling:h=!0,children:g,noWheelClassName:x,noPanClassName:y,onViewportChange:v,isControlledViewport:m,paneClickDistance:b,selectionOnDrag:S}){let C=le(),I=(0,L.useRef)(null),{userSelectionActive:T,lib:z,connectionInProgress:R}=ae(ug,ue),H=mn(p),F=(0,L.useRef)();lg(I);let _=(0,L.useCallback)(w=>{v?.({x:w[0],y:w[1],zoom:w[2]}),m||C.setState({transform:w})},[v,m]);return(0,L.useEffect)(()=>{if(I.current){F.current=ba({domNode:I.current,minZoom:d,maxZoom:f,translateExtent:u,viewport:l,onDraggingChange:M=>C.setState(P=>P.paneDragging===M?P:{paneDragging:M}),onPanZoomStart:(M,P)=>{let{onViewportChangeStart:D,onMoveStart:B}=C.getState();B?.(M,P),D?.(P)},onPanZoom:(M,P)=>{let{onViewportChange:D,onMove:B}=C.getState();B?.(M,P),D?.(P)},onPanZoomEnd:(M,P)=>{let{onViewportChangeEnd:D,onMoveEnd:B}=C.getState();B?.(M,P),D?.(P)}});let{x:w,y:E,zoom:N}=F.current.getViewport();return C.setState({panZoom:F.current,transform:[w,E,N],domNode:I.current.closest(".react-flow")}),()=>{F.current?.destroy()}}},[]),(0,L.useEffect)(()=>{F.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panActivationKeyPressed:r,panOnScrollSpeed:i,panOnScrollMode:s,zoomOnDoubleClick:a,panOnDrag:c,zoomActivationKeyPressed:H,preventScrolling:h,noPanClassName:y,userSelectionActive:T,noWheelClassName:x,lib:z,onTransformChange:_,connectionInProgress:R,selectionOnDrag:S,paneClickDistance:b})},[e,t,n,o,r,i,s,a,c,H,h,y,T,x,z,_,R,S,b]),(0,O.jsx)("div",{className:"react-flow__renderer",ref:I,style:bo,children:g})}var fg=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function pg(){let{userSelectionActive:e,userSelectionRect:t}=ae(fg,ue);return e&&t?(0,O.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var yr=(e,t)=>n=>{n.target===t.current&&e?.(n)},gg=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function hg({isSelecting:e,selectionKeyPressed:t,selectionMode:n=yt.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:s,onSelectionStart:a,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:h,children:g}){let x=(0,L.useRef)(0),y=le(),{userSelectionActive:v,elementsSelectable:m,dragging:b,panBy:S,autoPanSpeed:C}=ae(gg,ue),I=m&&(e||v),T=(0,L.useRef)(null),z=(0,L.useRef)(),R=(0,L.useRef)(new Set),H=(0,L.useRef)(new Set),F=(0,L.useRef)(!1),_=(0,L.useRef)(!1),w=(0,L.useRef)({x:0,y:0}),E=(0,L.useRef)(!1),N=$=>{if(_.current||F.current||y.getState().connection.inProgress){_.current=!1,F.current=!1;return}l?.($),y.getState().resetSelectedElements(),y.setState({nodesSelectionActive:!1})},M=$=>{if(Array.isArray(o)&&o?.includes(2)){$.preventDefault();return}u?.($)},P=d?$=>d($):void 0,D=$=>{_.current&&($.stopPropagation(),_.current=!1)},B=$=>{if($.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:G,transform:K}=y.getState();if(z.current=G?.getBoundingClientRect(),!z.current)return;let ee=$.target===T.current;if(!ee&&!!$.target.closest(".nokey")||!e||!(s&&ee||t)||$.button!==0||!$.isPrimary)return;$.target?.setPointerCapture?.($.pointerId),_.current=!1;let{x:re,y:ie}=Ie($.nativeEvent,z.current),se=Ht({x:re,y:ie},K);y.setState({userSelectionRect:{width:0,height:0,startX:se.x,startY:se.y,x:re,y:ie}}),ee||($.stopPropagation(),$.preventDefault())};function V($,G){let{userSelectionRect:K}=y.getState();if(!K)return;let{transform:ee,nodeLookup:j,edgeLookup:te,connectionLookup:re,triggerNodeChanges:ie,triggerEdgeChanges:se,defaultEdgeOptions:me}=y.getState(),oe={x:K.startX,y:K.startY},{x:Ce,y:ke}=wt(oe,ee),Se={startX:oe.x,startY:oe.y,x:$<Ce?$:Ce,y:G<ke?G:ke,width:Math.abs($-Ce),height:Math.abs(G-ke)},ze=R.current,A=H.current;R.current=new Set(eo(j,Se,ee,n===yt.Partial,!0).map(J=>J.id)),H.current=new Set;let W=me?.selectable??!0;for(let J of R.current){let ce=re.get(J);if(ce)for(let{edgeId:pe}of ce.values()){let Oe=te.get(pe);Oe&&(Oe.selectable??W)&&H.current.add(pe)}}if(!rr(ze,R.current)){let J=Vt(j,R.current,!0);ie(J)}if(!rr(A,H.current)){let J=Vt(te,H.current);se(J)}y.setState({userSelectionRect:Se,userSelectionActive:!0,nodesSelectionActive:!1})}function q(){if(!r||!z.current)return;let[$,G]=to(w.current,z.current,C);S({x:$,y:G}).then(K=>{if(!_.current||!K){x.current=requestAnimationFrame(q);return}let{x:ee,y:j}=w.current;V(ee,j),x.current=requestAnimationFrame(q)})}let Y=()=>{cancelAnimationFrame(x.current),x.current=0,E.current=!1};(0,L.useEffect)(()=>()=>Y(),[]);let Z=$=>{let{userSelectionRect:G,transform:K,resetSelectedElements:ee}=y.getState();if(!z.current||!G)return;let{x:j,y:te}=Ie($.nativeEvent,z.current);w.current={x:j,y:te};let re=wt({x:G.startX,y:G.startY},K);if(!_.current){let ie=t?0:i;if(Math.hypot(j-re.x,te-re.y)<=ie)return;ee(),a?.($)}_.current=!0,E.current||(q(),E.current=!0),V(j,te)},Q=$=>{if(!I){$.target===T.current&&y.getState().connection.inProgress&&(F.current=!0);return}$.button===0&&($.target?.releasePointerCapture?.($.pointerId),!v&&$.target===T.current&&y.getState().userSelectionRect&&N?.($),y.setState({userSelectionActive:!1,userSelectionRect:null}),_.current&&(c?.($),y.setState({nodesSelectionActive:R.current.size>0})),Y())},ne=$=>{$.target?.releasePointerCapture?.($.pointerId),Y()},X=o===!0||Array.isArray(o)&&o.includes(0);return(0,O.jsxs)("div",{className:de(["react-flow__pane",{draggable:X,dragging:b,selection:e}]),onClick:I?void 0:yr(N,T),onContextMenu:yr(M,T),onWheel:yr(P,T),onPointerEnter:I?void 0:f,onPointerMove:I?Z:p,onPointerUp:Q,onPointerCancel:I?ne:void 0,onPointerDownCapture:I?B:void 0,onClickCapture:I?D:void 0,onPointerLeave:h,ref:T,style:bo,children:[g,(0,O.jsx)(pg,{})]})}function wr({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:s,nodeLookup:a,onError:c}=t.getState(),l=a.get(e);if(!l){c?.("012",Ne.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&s)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function xc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:s}){let a=le(),[c,l]=(0,L.useState)(!1),u=(0,L.useRef)();return(0,L.useEffect)(()=>{if(!t)return u.current=fa({getStoreItems:()=>a.getState(),onNodeMouseDown:d=>{wr({id:d,store:a,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,a,e]),(0,L.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:s})},[n,o,t,i,e,r,s]),c}var mg=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function wc(){let e=le();return(0,L.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:s,onError:a,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),d=new Map,f=mg(s),p=r?i[0]:5,h=r?i[1]:5,g=n.direction.x*p*n.factor,x=n.direction.y*h*n.factor;for(let[,y]of l){if(!f(y))continue;let v={x:y.internals.positionAbsolute.x+g,y:y.internals.positionAbsolute.y+x};r&&(v=Lt(v,i));let{position:m,positionAbsolute:b}=Qo({nodeId:y.id,nextPosition:v,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:a});y.position=m,y.internals.positionAbsolute=b,d.set(y.id,y)}c(d)},[])}var vr=(0,L.createContext)(null),yg=vr.Provider;vr.Consumer;var bc=()=>(0,L.useContext)(vr),xg=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),vc=(0,L.createContext)(null);function wg({children:e}){let t=ae(xg,ue);return(0,O.jsx)(vc.Provider,{value:t,children:e})}function bg(){let e=(0,L.useContext)(vc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var vg={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},_g=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:s}=o,{fromHandle:a,toHandle:c,isValid:l}=s;if(!a&&!r)return vg;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===tt.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:u&&l}};function kg({type:e="source",position:t=U.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:s,onConnect:a,children:c,className:l,onMouseDown:u,onTouchStart:d,...f},p){let h=s||null,g=e==="target",x=le(),y=bc(),{connectOnClick:v,noPanClassName:m,rfId:b}=bg(),{connectingFrom:S,connectingTo:C,clickConnecting:I,isPossibleEndHandle:T,connectionInProcess:z,clickConnectionInProcess:R,valid:H}=ae(_g(y,h,e),ue);y||x.getState().onError?.("010",Ne.error010());let F=E=>{let{defaultEdgeOptions:N,onConnect:M,hasDefaultEdges:P}=x.getState(),D={...N,...E};if(P){let{edges:B,setEdges:V,onError:q}=x.getState();V(tg(D,B,{onError:q}))}M?.(D),a?.(D)},_=E=>{if(!y)return;let N=cr(E.nativeEvent);if(r&&(N&&E.button===0||!N)){let M=x.getState();fo.onPointerDown(E.nativeEvent,{handleDomNode:E.currentTarget,autoPanOnConnect:M.autoPanOnConnect,connectionMode:M.connectionMode,connectionRadius:M.connectionRadius,domNode:M.domNode,nodeLookup:M.nodeLookup,lib:M.lib,isTarget:g,handleId:h,nodeId:y,flowId:M.rfId,panBy:M.panBy,cancelConnection:M.cancelConnection,onConnectStart:M.onConnectStart,onConnectEnd:(...P)=>x.getState().onConnectEnd?.(...P),updateConnection:M.updateConnection,onConnect:F,isValidConnection:n||((...P)=>x.getState().isValidConnection?.(...P)??!0),getTransform:()=>x.getState().transform,getFromHandle:()=>x.getState().connection.fromHandle,autoPanSpeed:M.autoPanSpeed,dragThreshold:M.connectionDragThreshold})}N?u?.(E):d?.(E)},w=E=>{let{onClickConnectStart:N,onClickConnectEnd:M,connectionClickStartHandle:P,connectionMode:D,isValidConnection:B,lib:V,rfId:q,nodeLookup:Y,connection:Z}=x.getState();if(!y||!P&&!r)return;if(!P){N?.(E.nativeEvent,{nodeId:y,handleId:h,handleType:e}),x.setState({connectionClickStartHandle:{nodeId:y,type:e,id:h}});return}let Q=sr(E.target),ne=n||B,{connection:X,isValid:$}=fo.isValid(E.nativeEvent,{handle:{nodeId:y,id:h,type:e},connectionMode:D,fromNodeId:P.nodeId,fromHandleId:P.id||null,fromType:P.type,isValidConnection:ne,flowId:q,doc:Q,lib:V,nodeLookup:Y});$&&X&&F(X);let G=structuredClone(Z);delete G.inProgress,G.toPosition=G.toHandle?G.toHandle.position:null,M?.(E,G),x.setState({connectionClickStartHandle:null})};return(0,O.jsx)("div",{"data-handleid":h,"data-nodeid":y,"data-handlepos":t,"data-id":`${b}-${y}-${h}-${e}`,className:de(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,l,{source:!g,target:g,connectable:o,connectablestart:r,connectableend:i,clickconnecting:I,connectingfrom:S,connectingto:C,valid:H,connectionindicator:o&&(!z||T)&&(z||R?i:r)}]),onMouseDown:_,onTouchStart:_,onClick:v?w:void 0,ref:p,...f,children:c})}var Ze=(0,L.memo)(hc(kg));function Sg({data:e,isConnectable:t,sourcePosition:n=U.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[e?.label,(0,O.jsx)(Ze,{type:"source",position:n,isConnectable:t})]})}function Eg({data:e,isConnectable:t,targetPosition:n=U.Top,sourcePosition:o=U.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Ze,{type:"target",position:n,isConnectable:t}),e?.label,(0,O.jsx)(Ze,{type:"source",position:o,isConnectable:t})]})}function Ng(){return null}function Cg({data:e,isConnectable:t,targetPosition:n=U.Top}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Ze,{type:"target",position:n,isConnectable:t}),e?.label]})}var yo={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},ja={input:Sg,default:Eg,output:Cg,group:Ng};function Mg(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Ig=e=>{let{width:t,height:n,x:o,y:r}=Tt(e.nodeLookup,{filter:i=>!!i.selected});return{width:Me(t)?t:null,height:Me(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Pg({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=le(),{width:r,height:i,transformString:s,userSelectionActive:a}=ae(Ig,ue),c=wc(),l=(0,L.useRef)(null);(0,L.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!a&&r!==null&&i!==null;if(xc({nodeRef:l,disabled:!u}),!u)return null;let d=e?p=>{let h=o.getState().nodes.filter(g=>g.selected);e(p,h)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(yo,p.key)&&(p.preventDefault(),c({direction:yo[p.key],factor:p.shiftKey?4:1}))};return(0,O.jsx)("div",{className:de(["react-flow__nodesselection","react-flow__container",t]),style:{transform:s},children:(0,O.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:d,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:i}})})}var Qa=typeof window<"u"?window:void 0,zg=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function _c({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:d,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:g,zoomActivationKeyCode:x,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:b,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:I,panOnDrag:T,autoPanOnSelection:z,defaultViewport:R,translateExtent:H,minZoom:F,maxZoom:_,preventScrolling:w,onSelectionContextMenu:E,noWheelClassName:N,noPanClassName:M,disableKeyboardA11y:P,onViewportChange:D,isControlledViewport:B}){let{nodesSelectionActive:V,userSelectionActive:q}=ae(zg,ue),Y=mn(l,{target:Qa}),Z=mn(g,{target:Qa}),Q=Z||T,ne=Z||b,X=u&&Q!==!0,$=Y||q||X;return cg({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,O.jsx)(dg,{onPaneContextMenu:i,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:Z,panOnScrollSpeed:S,panOnScrollMode:C,zoomOnDoubleClick:I,panOnDrag:!Y&&Q,defaultViewport:R,translateExtent:H,minZoom:F,maxZoom:_,zoomActivationKeyCode:x,preventScrolling:w,noWheelClassName:N,noPanClassName:M,onViewportChange:D,isControlledViewport:B,paneClickDistance:a,selectionOnDrag:X,children:(0,O.jsxs)(hg,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,panOnDrag:Q,autoPanOnSelection:z,isSelecting:!!$,selectionMode:d,selectionKeyPressed:Y,paneClickDistance:a,selectionOnDrag:X,children:[e,V&&(0,O.jsx)(Pg,{onSelectionContextMenu:E,noPanClassName:M,disableKeyboardA11y:P})]})})}_c.displayName="FlowRenderer";var Ag=(0,L.memo)(_c),Dg=e=>t=>e?eo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function Tg(e){return ae((0,L.useCallback)(Dg(e),[e]),ue)}var Og=e=>e.updateNodeInternals;function Lg(){let e=ae(Og),[t]=(0,L.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,L.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Hg({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=le(),i=(0,L.useRef)(null),s=(0,L.useRef)(null),a=(0,L.useRef)(e.sourcePosition),c=(0,L.useRef)(e.targetPosition),l=(0,L.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,L.useEffect)(()=>{i.current&&!e.hidden&&(!u||s.current!==i.current)&&(s.current&&o?.unobserve(s.current),o?.observe(i.current),s.current=i.current)},[u,e.hidden]),(0,L.useEffect)(()=>()=>{s.current&&(o?.unobserve(s.current),s.current=null)},[]),(0,L.useEffect)(()=>{if(i.current){let d=l.current!==t,f=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(d||f||p)&&(l.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function $g({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:s,nodesDraggable:a,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:d,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:h,rfId:g,nodeTypes:x,nodeClickDistance:y,onError:v}){let{node:m,internals:b,isParent:S}=ae($=>{let G=$.nodeLookup.get(e),K=$.parentLookup.has(e);return{node:G,internals:G.internals,isParent:K}},ue),C=m.type||"default",I=x?.[C]||ja[C];I===void 0&&(v?.("003",Ne.error003(C)),C="default",I=x?.default||ja.default);let T=!!(m.draggable||a&&typeof m.draggable>"u"),z=!!(m.selectable||c&&typeof m.selectable>"u"),R=!!(m.connectable||l&&typeof m.connectable>"u"),H=!!(m.focusable||u&&typeof m.focusable>"u"),F=le(),_=nr(m),w=Hg({node:m,nodeType:C,hasDimensions:_,resizeObserver:d}),E=xc({nodeRef:w,disabled:m.hidden||!T,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:z,nodeClickDistance:y}),N=wc();if(m.hidden)return null;let M=Pe(m),P=Mg(m),D=z||T||t||n||o||r,B=n?$=>n($,{...b.userNode}):void 0,V=o?$=>o($,{...b.userNode}):void 0,q=r?$=>r($,{...b.userNode}):void 0,Y=i?$=>i($,{...b.userNode}):void 0,Z=s?$=>s($,{...b.userNode}):void 0,Q=$=>{let{selectNodesOnDrag:G,nodeDragThreshold:K}=F.getState();z&&(!G||!T||K>0)&&wr({id:e,store:F,nodeRef:w}),t&&t($,{...b.userNode})},ne=$=>{if(!(ar($.nativeEvent)||h)){if(Yo.includes($.key)&&z){let G=$.key==="Escape";wr({id:e,store:F,unselect:G,nodeRef:w})}else if(T&&m.selected&&Object.prototype.hasOwnProperty.call(yo,$.key)){$.preventDefault();let{ariaLabelConfig:G}=F.getState();F.setState({ariaLiveMessage:G["node.a11yDescription.ariaLiveMessage"]({direction:$.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),N({direction:yo[$.key],factor:$.shiftKey?4:1})}}},X=()=>{if(h||!w.current?.matches(":focus-visible"))return;let{transform:$,width:G,height:K,autoPanOnNodeFocus:ee,setCenter:j}=F.getState();if(!ee)return;eo(new Map([[e,m]]),{x:0,y:0,width:G,height:K},$,!0).length>0||j(m.position.x+M.width/2,m.position.y+M.height/2,{zoom:$[2]})};return(0,O.jsx)("div",{className:de(["react-flow__node",`react-flow__node-${C}`,{[p]:T},m.className,{selected:m.selected,selectable:z,parent:S,draggable:T,dragging:E}]),ref:w,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:D?"all":"none",visibility:_?"visible":"hidden",...m.style,...P},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:B,onMouseMove:V,onMouseLeave:q,onContextMenu:Y,onClick:Q,onDoubleClick:Z,onKeyDown:H?ne:void 0,tabIndex:H?0:void 0,onFocus:H?X:void 0,role:m.ariaRole??(H?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${dc}-${g}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,O.jsx)(yg,{value:e,children:(0,O.jsx)(I,{id:e,data:m.data,type:C,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:m.selected??!1,selectable:z,draggable:T,deletable:m.deletable??!0,isConnectable:R,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:E,dragHandle:m.dragHandle,zIndex:b.z,parentId:m.parentId,...M})})})}var Bg=(0,L.memo)($g),Vg=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function kc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ae(Vg,ue),i=Tg(e.onlyRenderVisibleElements),s=Lg();return(0,O.jsx)("div",{className:"react-flow__nodes",style:bo,children:i.map(a=>(0,O.jsx)(Bg,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:s,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}kc.displayName="NodeRenderer";var Fg=(0,L.memo)(kc);function Rg(e){return ae((0,L.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),s=n.nodeLookup.get(r.target);i&&s&&na({sourceNode:i,targetNode:s,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ue)}var Wg=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,O.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},qg=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,O.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Ja={[zt.Arrow]:Wg,[zt.ArrowClosed]:qg};function Xg(e){let t=le();return(0,L.useMemo)(()=>Object.prototype.hasOwnProperty.call(Ja,e)?Ja[e]:(t.getState().onError?.("009",Ne.error009(e)),null),[e])}var Yg=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:s,orient:a="auto-start-reverse"})=>{let c=Xg(t);return c?(0,O.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:a,refX:"0",refY:"0",children:(0,O.jsx)(c,{color:n,strokeWidth:s})}):null},Sc=({defaultColor:e,rfId:t})=>{let n=ae(i=>i.edges),o=ae(i=>i.defaultEdgeOptions),r=(0,L.useMemo)(()=>ia(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,O.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,O.jsx)("defs",{children:r.map(i=>(0,O.jsx)(Yg,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};Sc.displayName="MarkerDefinitions";var Zg=(0,L.memo)(Sc);function Ec({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:s=[2,4],labelBgBorderRadius:a=2,children:c,className:l,...u}){let[d,f]=(0,L.useState)({x:1,y:0,width:0,height:0}),p=de(["react-flow__edge-textwrapper",l]),h=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(h.current){let g=h.current.getBBox();f({x:g.x,y:g.y,width:g.width,height:g.height})}},[n]),n?(0,O.jsxs)("g",{transform:`translate(${e-d.width/2} ${t-d.height/2})`,className:p,visibility:d.width?"visible":"hidden",...u,children:[r&&(0,O.jsx)("rect",{width:d.width+2*s[0],x:-s[0],y:-s[1],height:d.height+2*s[1],className:"react-flow__edge-textbg",style:i,rx:a,ry:a}),(0,O.jsx)("text",{className:"react-flow__edge-text",y:d.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}Ec.displayName="EdgeText";var Gg=(0,L.memo)(Ec);function vo({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("path",{...u,d:e,fill:"none",className:de(["react-flow__edge-path",u.className])}),l?(0,O.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&Me(t)&&Me(n)?(0,O.jsx)(Gg,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function ec({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===U.Left||e===U.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function Nc({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top}){let[s,a]=ec({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=ec({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,d,f,p]=io({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:a,targetControlX:c,targetControlY:l});return[`M${e},${t} C${s},${a} ${c},${l} ${o},${r}`,u,d,f,p]}function Cc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s,targetPosition:a,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:y})=>{let[v,m,b]=Nc({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a}),S=e.isInternal?void 0:t;return(0,O.jsx)(vo,{id:S,path:v,labelX:m,labelY:b,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:y})})}var Ug=Cc({isInternal:!1}),Mc=Cc({isInternal:!0});Ug.displayName="SimpleBezierEdge";Mc.displayName="SimpleBezierEdgeInternal";function Ic(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,sourcePosition:p=U.Bottom,targetPosition:h=U.Top,markerEnd:g,markerStart:x,pathOptions:y,interactionWidth:v})=>{let[m,b,S]=hn({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:y?.borderRadius,offset:y?.offset,stepPosition:y?.stepPosition}),C=e.isInternal?void 0:t;return(0,O.jsx)(vo,{id:C,path:m,labelX:b,labelY:S,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:g,markerStart:x,interactionWidth:v})})}var Pc=Ic({isInternal:!1}),zc=Ic({isInternal:!0});Pc.displayName="SmoothStepEdge";zc.displayName="SmoothStepEdgeInternal";function Ac(e){return(0,L.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,O.jsx)(Pc,{...n,id:o,pathOptions:(0,L.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Kg=Ac({isInternal:!1}),Dc=Ac({isInternal:!0});Kg.displayName="StepEdge";Dc.displayName="StepEdgeInternal";function Tc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:g})=>{let[x,y,v]=ao({sourceX:n,sourceY:o,targetX:r,targetY:i}),m=e.isInternal?void 0:t;return(0,O.jsx)(vo,{id:m,path:x,labelX:y,labelY:v,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:d,style:f,markerEnd:p,markerStart:h,interactionWidth:g})})}var jg=Tc({isInternal:!1}),Oc=Tc({isInternal:!0});jg.displayName="StraightEdge";Oc.displayName="StraightEdgeInternal";function Lc(e){return(0,L.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s=U.Bottom,targetPosition:a=U.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,pathOptions:y,interactionWidth:v})=>{let[m,b,S]=so({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a,curvature:y?.curvature}),C=e.isInternal?void 0:t;return(0,O.jsx)(vo,{id:C,path:m,labelX:b,labelY:S,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:d,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:v})})}var Qg=Lc({isInternal:!1}),Hc=Lc({isInternal:!0});Qg.displayName="BezierEdge";Hc.displayName="BezierEdgeInternal";var tc={default:Hc,straight:Oc,step:Dc,smoothstep:zc,simplebezier:Mc},nc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Jg=(e,t,n)=>n===U.Left?e-t:n===U.Right?e+t:e,eh=(e,t,n)=>n===U.Top?e-t:n===U.Bottom?e+t:e,oc="react-flow__edgeupdater";function rc({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:s,type:a}){return(0,O.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:s,className:de([oc,`${oc}-${a}`]),cx:Jg(t,o,e),cy:eh(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function th({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:s,sourcePosition:a,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:d,setReconnecting:f,setUpdateHover:p}){let h=le(),g=(b,S)=>{if(b.button!==0)return;let{autoPanOnConnect:C,domNode:I,connectionMode:T,connectionRadius:z,lib:R,onConnectStart:H,cancelConnection:F,nodeLookup:_,rfId:w,panBy:E,updateConnection:N}=h.getState(),M=S.type==="target",P=(V,q)=>{f(!1),d?.(V,n,S.type,q)},D=V=>l?.(n,V),B=(V,q)=>{f(!0),u?.(b,n,S.type),H?.(V,q)};fo.onPointerDown(b.nativeEvent,{autoPanOnConnect:C,connectionMode:T,connectionRadius:z,domNode:I,handleId:S.id,nodeId:S.nodeId,nodeLookup:_,isTarget:M,edgeUpdaterType:S.type,lib:R,flowId:w,cancelConnection:F,panBy:E,isValidConnection:(...V)=>h.getState().isValidConnection?.(...V)??!0,onConnect:D,onConnectStart:B,onConnectEnd:(...V)=>h.getState().onConnectEnd?.(...V),onReconnectEnd:P,updateConnection:N,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},x=b=>g(b,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),y=b=>g(b,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,O.jsxs)(O.Fragment,{children:[(e===!0||e==="source")&&(0,O.jsx)(rc,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:x,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,O.jsx)(rc,{position:c,centerX:i,centerY:s,radius:t,onMouseDown:y,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function nh({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,rfId:h,edgeTypes:g,noPanClassName:x,onError:y,disableKeyboardA11y:v}){let m=ae(j=>j.edgeLookup.get(e)),b=ae(j=>j.defaultEdgeOptions);m=b?{...b,...m}:m;let S=m.type||"default",C=g?.[S]||tc[S];C===void 0&&(y?.("011",Ne.error011(S)),S="default",C=g?.default||tc.default);let I=!!(m.focusable||t&&typeof m.focusable>"u"),T=typeof d<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),z=!!(m.selectable||o&&typeof m.selectable>"u"),R=(0,L.useRef)(null),[H,F]=(0,L.useState)(!1),[_,w]=(0,L.useState)(!1),E=le(),{zIndex:N=m.zIndex,sourceX:M,sourceY:P,targetX:D,targetY:B,sourcePosition:V,targetPosition:q}=ae((0,L.useCallback)(j=>{let te=j.nodeLookup.get(m.source),re=j.nodeLookup.get(m.target);if(!te||!re)return nc;let ie=ra({id:e,sourceNode:te,targetNode:re,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:j.connectionMode,onError:y}),se=ta({selected:m.selected,zIndex:m.zIndex,sourceNode:te,targetNode:re,elevateOnSelect:j.elevateEdgesOnSelect,zIndexMode:j.zIndexMode});return{...ie||nc,zIndex:se}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,y]),ue),Y=(0,L.useMemo)(()=>m.markerStart?`url('#${co(m.markerStart,h)}')`:void 0,[m.markerStart,h]),Z=(0,L.useMemo)(()=>m.markerEnd?`url('#${co(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||M===null||P===null||D===null||B===null)return null;let Q=j=>{let{addSelectedEdges:te,unselectNodesAndEdges:re,multiSelectionActive:ie}=E.getState();z&&(E.setState({nodesSelectionActive:!1}),m.selected&&ie?(re({nodes:[],edges:[m]}),R.current?.blur()):te([e])),r&&r(j,m)},ne=i?j=>{i(j,{...m})}:void 0,X=s?j=>{s(j,{...m})}:void 0,$=a?j=>{a(j,{...m})}:void 0,G=c?j=>{c(j,{...m})}:void 0,K=l?j=>{l(j,{...m})}:void 0,ee=j=>{if(!v&&Yo.includes(j.key)&&z){let{unselectNodesAndEdges:te,addSelectedEdges:re}=E.getState();j.key==="Escape"?(R.current?.blur(),te({edges:[m]})):re([e])}};return(0,O.jsx)("svg",{style:{zIndex:N},children:(0,O.jsxs)("g",{className:de(["react-flow__edge",`react-flow__edge-${S}`,m.className,x,{selected:m.selected,animated:m.animated,inactive:!z&&!r,updating:H,selectable:z}]),onClick:Q,onDoubleClick:ne,onContextMenu:X,onMouseEnter:$,onMouseMove:G,onMouseLeave:K,onKeyDown:I?ee:void 0,tabIndex:I?0:void 0,role:m.ariaRole??(I?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":I?`${fc}-${h}`:void 0,ref:R,...m.domAttributes,children:[!_&&(0,O.jsx)(C,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:z,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:M,sourceY:P,targetX:D,targetY:B,sourcePosition:V,targetPosition:q,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Y,markerEnd:Z,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),T&&(0,O.jsx)(th,{edge:m,isReconnectable:T,reconnectRadius:u,onReconnect:d,onReconnectStart:f,onReconnectEnd:p,sourceX:M,sourceY:P,targetX:D,targetY:B,sourcePosition:V,targetPosition:q,setUpdateHover:F,setReconnecting:w})]})})}var oh=(0,L.memo)(nh),rh=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function $c({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:s,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:d,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:g}){let{edgesFocusable:x,edgesReconnectable:y,elementsSelectable:v,onError:m}=ae(rh,ue),b=Rg(t);return(0,O.jsxs)("div",{className:"react-flow__edges",children:[(0,O.jsx)(Zg,{defaultColor:e,rfId:n}),b.map(S=>(0,O.jsx)(oh,{id:S,edgesFocusable:x,edgesReconnectable:y,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:d,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:g},S))]})}$c.displayName="EdgeRenderer";var ih=(0,L.memo)($c),ic=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function sh({children:e}){let t=le(),n=(0,L.useRef)(null),[o]=(0,L.useState)(()=>t.getState().transform);return mc(()=>{let r=null,i=()=>{let s=t.getState().transform;r&&s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]||(r=s,n.current&&(n.current.style.transform=ic(s)))};return i(),t.subscribe(i)},[t]),(0,O.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:ic(o)},children:e})}function ah(e){let t=yn(),n=(0,L.useRef)(!1);(0,L.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var ch=e=>e.panZoom?.syncViewport;function lh(e){let t=ae(ch),n=le();return(0,L.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function sc(e){return e.connection.inProgress?{...e.connection,to:Ht(e.connection.to,e.transform)}:{...e.connection}}function uh(e){return e?n=>{let o=sc(n);return e(o)}:sc}function dh(e){let t=uh(e);return ae(t,ue)}var fh=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function ph({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:s,isValid:a,inProgress:c}=ae(fh,ue);return!(i&&r&&c)?null:(0,O.jsx)("svg",{style:e,width:i,height:s,className:"react-flow__connectionline react-flow__container",children:(0,O.jsx)("g",{className:de(["react-flow__connection",ir(a)]),children:(0,O.jsx)(Bc,{style:t,type:n,CustomComponent:o,isValid:a})})})}var Bc=({style:e,type:t=$e.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:s,fromHandle:a,fromPosition:c,to:l,toNode:u,toHandle:d,toPosition:f,pointer:p}=dh();if(!r)return;if(n)return(0,O.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:s,fromHandle:a,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:ir(o),toNode:u,toHandle:d,pointer:p});let h="",g={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case $e.Bezier:[h]=so(g);break;case $e.SimpleBezier:[h]=Nc(g);break;case $e.Step:[h]=hn({...g,borderRadius:0});break;case $e.SmoothStep:[h]=hn(g);break;default:[h]=ao(g)}return(0,O.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Bc.displayName="ConnectionLine";var gh={};function ac(e=gh){let t=(0,L.useRef)(e),n=le();(0,L.useEffect)(()=>{},[e])}function hh(){let e=le(),t=(0,L.useRef)(!1);(0,L.useEffect)(()=>{},[])}function Vc({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:d,onSelectionStart:f,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:g,connectionLineComponent:x,connectionLineContainerStyle:y,selectionKeyCode:v,selectionOnDrag:m,selectionMode:b,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:I,deleteKeyCode:T,onlyRenderVisibleElements:z,elementsSelectable:R,defaultViewport:H,translateExtent:F,minZoom:_,maxZoom:w,preventScrolling:E,defaultMarkerColor:N,zoomOnScroll:M,zoomOnPinch:P,panOnScroll:D,panOnScrollSpeed:B,panOnScrollMode:V,zoomOnDoubleClick:q,panOnDrag:Y,autoPanOnSelection:Z,onPaneClick:Q,onPaneMouseEnter:ne,onPaneMouseMove:X,onPaneMouseLeave:$,onPaneScroll:G,onPaneContextMenu:K,paneClickDistance:ee,nodeClickDistance:j,onEdgeContextMenu:te,onEdgeMouseEnter:re,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:me,onReconnect:oe,onReconnectStart:Ce,onReconnectEnd:ke,noDragClassName:Se,noWheelClassName:ze,noPanClassName:A,disableKeyboardA11y:W,nodeExtent:J,rfId:ce,viewport:pe,onViewportChange:Oe,nodesDraggable:kt}){return ac(e),ac(t),hh(),ah(n),lh(pe),(0,O.jsx)(Ag,{onPaneClick:Q,onPaneMouseEnter:ne,onPaneMouseMove:X,onPaneMouseLeave:$,onPaneContextMenu:K,onPaneScroll:G,paneClickDistance:ee,deleteKeyCode:T,selectionKeyCode:v,selectionOnDrag:m,selectionMode:b,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:C,zoomActivationKeyCode:I,elementsSelectable:R,zoomOnScroll:M,zoomOnPinch:P,zoomOnDoubleClick:q,panOnScroll:D,panOnScrollSpeed:B,panOnScrollMode:V,panOnDrag:Y,autoPanOnSelection:Z,defaultViewport:H,translateExtent:F,minZoom:_,maxZoom:w,onSelectionContextMenu:d,preventScrolling:E,noDragClassName:Se,noWheelClassName:ze,noPanClassName:A,disableKeyboardA11y:W,onViewportChange:Oe,isControlledViewport:!!pe,children:(0,O.jsxs)(sh,{children:[(0,O.jsx)(ih,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:s,onReconnect:oe,onReconnectStart:Ce,onReconnectEnd:ke,onlyRenderVisibleElements:z,onEdgeContextMenu:te,onEdgeMouseEnter:re,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:me,defaultMarkerColor:N,noPanClassName:A,disableKeyboardA11y:W,rfId:ce}),(0,O.jsx)(ph,{style:g,type:h,component:x,containerStyle:y}),(0,O.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,O.jsx)(Fg,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:j,onlyRenderVisibleElements:z,noPanClassName:A,noDragClassName:Se,disableKeyboardA11y:W,nodeExtent:J,rfId:ce,nodesDraggable:kt}),(0,O.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Vc.displayName="GraphView";var mh=(0,L.memo)(Vc),yh=tr("React Flow","https://reactflow.dev/"),cc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:d,zIndexMode:f="basic"}={})=>{let p=new Map,h=new Map,g=new Map,x=new Map,y=o??t??[],v=n??e??[],m=u??[0,0],b=d??Dt;gr(g,x,y);let{nodesInitialized:S}=lo(v,p,h,{nodeOrigin:m,nodeExtent:b,zIndexMode:f}),C=[0,0,1];if(s&&r&&i){let I=Tt(p,{filter:H=>!!((H.width||H.initialWidth)&&(H.height||H.initialHeight))}),{x:T,y:z,zoom:R}=gn(I,r,i,c,l,a?.padding??.1);C=[T,z,R]}return{rfId:"1",width:r??0,height:i??0,transform:C,nodes:v,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:y,edgeLookup:x,connectionLookup:g,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:Dt,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:tt.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:a,fitViewResolver:null,connection:{...Go},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:yh,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Zo,zIndexMode:f,defaultEdgeOptions:void 0,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map,onNodesDelete:void 0,onEdgesDelete:void 0,onDelete:void 0,onBeforeDelete:void 0,onViewportChangeStart:void 0,onViewportChange:void 0,onViewportChangeEnd:void 0,onNodeDragStart:void 0,onNodeDrag:void 0,onNodeDragStop:void 0,onSelectionDragStart:void 0,onSelectionDrag:void 0,onSelectionDragStop:void 0,onMoveStart:void 0,onMove:void 0,onMoveEnd:void 0,onConnect:void 0,onConnectStart:void 0,onConnectEnd:void 0,onClickConnectStart:void 0,onClickConnectEnd:void 0}},xh=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f})=>Ha((p,h)=>{async function g(){let{nodeLookup:x,panZoom:y,fitViewOptions:v,fitViewResolver:m,width:b,height:S,minZoom:C,maxZoom:I}=h();y&&(await Us({nodes:x,width:b,height:S,panZoom:y,minZoom:C,maxZoom:I},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...cc({nodes:e,edges:t,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:d,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:x=>{let{nodeLookup:y,parentLookup:v,nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,fitViewQueued:C,zIndexMode:I,nodesSelectionActive:T}=h(),{nodesInitialized:z,hasSelectedNodes:R}=lo(x,y,v,{nodeOrigin:m,nodeExtent:b,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:I}),H=T&&R;C&&z?(g(),p({nodes:x,nodesInitialized:z,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:H})):p({nodes:x,nodesInitialized:z,nodesSelectionActive:H})},setEdges:x=>{let{connectionLookup:y,edgeLookup:v}=h();gr(y,v,x),p({edges:x})},setDefaultNodesAndEdges:(x,y)=>{if(x){let{setNodes:v}=h();v(x),p({hasDefaultNodes:!0})}if(y){let{setEdges:v}=h();v(y),p({hasDefaultEdges:!0})}},updateNodeInternals:x=>{let{triggerNodeChanges:y,nodeLookup:v,parentLookup:m,domNode:b,nodeOrigin:S,nodeExtent:C,debug:I,fitViewQueued:T,zIndexMode:z}=h(),{changes:R,updatedInternals:H}=la(x,v,m,b,S,C,z);H&&(aa(v,m,{nodeOrigin:S,nodeExtent:C,zIndexMode:z}),T?(g(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),R?.length>0&&(I&&console.log("React Flow: trigger node changes",R),y?.(R)))},updateNodePositions:(x,y=!1)=>{let v=[],m=[],{nodeLookup:b,triggerNodeChanges:S,connection:C,updateConnection:I,onNodesChangeMiddlewareMap:T}=h();for(let[z,R]of x){let H=b.get(z),F=!!(H?.expandParent&&H?.parentId&&R?.position),_={id:z,type:"position",position:F?{x:Math.max(0,R.position.x),y:Math.max(0,R.position.y)}:R.position,dragging:y};if(H&&C.inProgress&&C.fromNode.id===H.id){let w=nt(H,C.fromHandle,U.Left,!0);I({...C,from:w})}F&&H.parentId&&v.push({id:z,parentId:H.parentId,rect:{...R.internals.positionAbsolute,width:R.measured.width??0,height:R.measured.height??0}}),m.push(_)}if(v.length>0){let{parentLookup:z,nodeOrigin:R}=h(),H=uo(v,b,z,R);m.push(...H)}for(let z of T.values())m=z(m);S(m)},triggerNodeChanges:x=>{let{onNodesChange:y,setNodes:v,nodes:m,hasDefaultNodes:b,debug:S}=h();if(x?.length){if(b){let C=br(x,m);v(C)}S&&console.log("React Flow: trigger node changes",x),y?.(x)}},triggerEdgeChanges:x=>{let{onEdgesChange:y,setEdges:v,edges:m,hasDefaultEdges:b,debug:S}=h();if(x?.length){if(b){let C=Jp(x,m);v(C)}S&&console.log("React Flow: trigger edge changes",x),y?.(x)}},addSelectedNodes:x=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=h();if(y){let C=x.map(I=>vt(I,!0));b(C);return}b(Vt(m,new Set([...x]),!0)),S(Vt(v))},addSelectedEdges:x=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:b,triggerEdgeChanges:S}=h();if(y){let C=x.map(I=>vt(I,!0));S(C);return}S(Vt(v,new Set([...x]))),b(Vt(m,new Set,!0))},unselectNodesAndEdges:({nodes:x,edges:y}={})=>{let{edges:v,nodes:m,nodeLookup:b,triggerNodeChanges:S,triggerEdgeChanges:C}=h(),I=x||m,T=y||v,z=[];for(let H of I){if(!H.selected)continue;let F=b.get(H.id);F&&(F.selected=!1),z.push(vt(H.id,!1))}let R=[];for(let H of T)H.selected&&R.push(vt(H.id,!1));S(z),C(R)},setMinZoom:x=>{let{panZoom:y,maxZoom:v}=h();y?.setScaleExtent([x,v]),p({minZoom:x})},setMaxZoom:x=>{let{panZoom:y,minZoom:v}=h();y?.setScaleExtent([v,x]),p({maxZoom:x})},setTranslateExtent:x=>{h().panZoom?.setTranslateExtent(x),p({translateExtent:x})},resetSelectedElements:()=>{let{edges:x,nodes:y,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:b}=h();if(!b)return;let S=y.reduce((I,T)=>T.selected?[...I,vt(T.id,!1)]:I,[]),C=x.reduce((I,T)=>T.selected?[...I,vt(T.id,!1)]:I,[]);v(S),m(C)},setNodeExtent:x=>{let{nodes:y,nodeLookup:v,parentLookup:m,nodeOrigin:b,elevateNodesOnSelect:S,nodeExtent:C,zIndexMode:I}=h();x[0][0]===C[0][0]&&x[0][1]===C[0][1]&&x[1][0]===C[1][0]&&x[1][1]===C[1][1]||(lo(y,v,m,{nodeOrigin:b,nodeExtent:x,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:I}),p({nodeExtent:x}))},panBy:x=>{let{transform:y,width:v,height:m,panZoom:b,translateExtent:S}=h();return ua({delta:x,panZoom:b,transform:y,translateExtent:S,width:v,height:m})},setCenter:async(x,y,v)=>{let{width:m,height:b,maxZoom:S,panZoom:C}=h();if(!C)return!1;let I=typeof v?.zoom<"u"?v.zoom:S;return await C.setViewport({x:m/2-x*I,y:b/2-y*I,zoom:I},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Go}})},updateConnection:x=>{p({connection:x})},reset:()=>p({...cc()})}},Object.is);function _r({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:s,initialMaxZoom:a,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:d,zIndexMode:f,children:p}){let[h]=(0,L.useState)(()=>xh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:s,maxZoom:a,fitViewOptions:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}));return(0,O.jsx)(Dp,{value:h,children:(0,O.jsx)(rg,{children:(0,O.jsx)(wg,{children:p})})})}function wh({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:s,fitView:a,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p}){return(0,L.useContext)(xo)?(0,O.jsx)(O.Fragment,{children:e}):(0,O.jsx)(_r,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:s,fitView:a,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:d,nodeExtent:f,zIndexMode:p,children:e})}var bh={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function vh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:s,onNodeClick:a,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:d,onMoveEnd:f,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:y,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,onNodeDragStart:I,onNodeDrag:T,onNodeDragStop:z,onNodesDelete:R,onEdgesDelete:H,onDelete:F,onSelectionChange:_,onSelectionDragStart:w,onSelectionDrag:E,onSelectionDragStop:N,onSelectionContextMenu:M,onSelectionStart:P,onSelectionEnd:D,onBeforeDelete:B,connectionMode:V,connectionLineType:q=$e.Bezier,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,deleteKeyCode:ne="Backspace",selectionKeyCode:X="Shift",selectionOnDrag:$=!1,selectionMode:G=yt.Full,panActivationKeyCode:K="Space",multiSelectionKeyCode:ee=$t()?"Meta":"Control",zoomActivationKeyCode:j=$t()?"Meta":"Control",snapToGrid:te,snapGrid:re,onlyRenderVisibleElements:ie=!1,selectNodesOnDrag:se,nodesDraggable:me,autoPanOnNodeFocus:oe,nodesConnectable:Ce,nodesFocusable:ke,nodeOrigin:Se=pc,edgesFocusable:ze,edgesReconnectable:A,elementsSelectable:W=!0,defaultViewport:J=Yp,minZoom:ce=.5,maxZoom:pe=2,translateExtent:Oe=Dt,preventScrolling:kt=!0,nodeExtent:Le,defaultMarkerColor:st="#b1b1b7",zoomOnScroll:ll=!0,zoomOnPinch:ul=!0,panOnScroll:dl=!1,panOnScrollSpeed:fl=.5,panOnScrollMode:pl=Ye.Free,zoomOnDoubleClick:gl=!0,panOnDrag:hl=!0,onPaneClick:ml,onPaneMouseEnter:yl,onPaneMouseMove:xl,onPaneMouseLeave:wl,onPaneScroll:bl,onPaneContextMenu:vl,paneClickDistance:_l=1,nodeClickDistance:kl=0,children:Sl,onReconnect:El,onReconnectStart:Nl,onReconnectEnd:Cl,onEdgeContextMenu:Ml,onEdgeDoubleClick:Il,onEdgeMouseEnter:Pl,onEdgeMouseMove:zl,onEdgeMouseLeave:Al,reconnectRadius:Dl=10,onNodesChange:Tl,onEdgesChange:Ol,noDragClassName:Ll="nodrag",noWheelClassName:Hl="nowheel",noPanClassName:Ar="nopan",fitView:Dr,fitViewOptions:Tr,connectOnClick:$l,attributionPosition:Bl,proOptions:Vl,defaultEdgeOptions:Fl,elevateNodesOnSelect:Rl=!0,elevateEdgesOnSelect:Wl=!1,disableKeyboardA11y:Or=!1,autoPanOnConnect:ql,autoPanOnNodeDrag:Xl,autoPanOnSelection:Yl=!0,autoPanSpeed:Zl,connectionRadius:Gl,isValidConnection:Ul,onError:Kl,style:jl,id:Lr,nodeDragThreshold:Ql,connectionDragThreshold:Jl,viewport:eu,onViewportChange:tu,width:nu,height:ou,colorMode:ru="light",debug:iu,onScroll:Hr,ariaLabelConfig:su,zIndexMode:$r="basic",...au},cu){let Co=Lr||"1",lu=Kp(ru),uu=(0,L.useCallback)(Br=>{Br.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Hr?.(Br)},[Hr]);return(0,O.jsx)("div",{"data-testid":"rf__wrapper",...au,onScroll:uu,style:{...jl,...bh},ref:cu,className:de(["react-flow",r,lu]),id:Lr,role:"application",children:(0,O.jsxs)(wh,{nodes:e,edges:t,width:nu,height:ou,fitView:Dr,fitViewOptions:Tr,minZoom:ce,maxZoom:pe,nodeOrigin:Se,nodeExtent:Le,zIndexMode:$r,children:[(0,O.jsx)(Up,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:y,nodesDraggable:me,autoPanOnNodeFocus:oe,nodesConnectable:Ce,nodesFocusable:ke,edgesFocusable:ze,edgesReconnectable:A,elementsSelectable:W,elevateNodesOnSelect:Rl,elevateEdgesOnSelect:Wl,minZoom:ce,maxZoom:pe,nodeExtent:Le,onNodesChange:Tl,onEdgesChange:Ol,snapToGrid:te,snapGrid:re,connectionMode:V,translateExtent:Oe,connectOnClick:$l,defaultEdgeOptions:Fl,fitView:Dr,fitViewOptions:Tr,onNodesDelete:R,onEdgesDelete:H,onDelete:F,onNodeDragStart:I,onNodeDrag:T,onNodeDragStop:z,onSelectionDrag:E,onSelectionDragStart:w,onSelectionDragStop:N,onMove:u,onMoveStart:d,onMoveEnd:f,noPanClassName:Ar,nodeOrigin:Se,rfId:Co,autoPanOnConnect:ql,autoPanOnNodeDrag:Xl,autoPanSpeed:Zl,onError:Kl,connectionRadius:Gl,isValidConnection:Ul,selectNodesOnDrag:se,nodeDragThreshold:Ql,connectionDragThreshold:Jl,onBeforeDelete:B,debug:iu,ariaLabelConfig:su,zIndexMode:$r}),(0,O.jsx)(mh,{onInit:l,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:b,onNodeContextMenu:S,onNodeDoubleClick:C,nodeTypes:i,edgeTypes:s,connectionLineType:q,connectionLineStyle:Y,connectionLineComponent:Z,connectionLineContainerStyle:Q,selectionKeyCode:X,selectionOnDrag:$,selectionMode:G,deleteKeyCode:ne,multiSelectionKeyCode:ee,panActivationKeyCode:K,zoomActivationKeyCode:j,onlyRenderVisibleElements:ie,defaultViewport:J,translateExtent:Oe,minZoom:ce,maxZoom:pe,preventScrolling:kt,zoomOnScroll:ll,zoomOnPinch:ul,zoomOnDoubleClick:gl,panOnScroll:dl,panOnScrollSpeed:fl,panOnScrollMode:pl,panOnDrag:hl,autoPanOnSelection:Yl,onPaneClick:ml,onPaneMouseEnter:yl,onPaneMouseMove:xl,onPaneMouseLeave:wl,onPaneScroll:bl,onPaneContextMenu:vl,paneClickDistance:_l,nodeClickDistance:kl,onSelectionContextMenu:M,onSelectionStart:P,onSelectionEnd:D,onReconnect:El,onReconnectStart:Nl,onReconnectEnd:Cl,onEdgeContextMenu:Ml,onEdgeDoubleClick:Il,onEdgeMouseEnter:Pl,onEdgeMouseMove:zl,onEdgeMouseLeave:Al,reconnectRadius:Dl,defaultMarkerColor:st,noDragClassName:Ll,noWheelClassName:Hl,noPanClassName:Ar,rfId:Co,disableKeyboardA11y:Or,nodeExtent:Le,viewport:eu,onViewportChange:tu,nodesDraggable:me}),(0,O.jsx)(Xp,{onSelectionChange:_}),Sl,(0,O.jsx)(Vp,{proOptions:Vl,position:Bl}),(0,O.jsx)(Bp,{rfId:Co,disableKeyboardA11y:Or})]})})}var Fc=hc(vh);var Sv=Ne.error014();function _h({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,O.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:de(["react-flow__background-pattern",n,o])})}function kh({radius:e,className:t}){return(0,O.jsx)("circle",{cx:e,cy:e,r:e,className:de(["react-flow__background-pattern","dots",t])})}var Be;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Be||(Be={}));var Sh={[Be.Dots]:1,[Be.Lines]:1,[Be.Cross]:6},Eh=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Rc({id:e,variant:t=Be.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:s,bgColor:a,style:c,className:l,patternClassName:u}){let d=(0,L.useRef)(null),{transform:f,patternId:p}=ae(Eh,ue),h=o||Sh[t],g=t===Be.Dots,x=t===Be.Cross,y=Array.isArray(n)?n:[n,n],v=[y[0]*f[2]||1,y[1]*f[2]||1],m=h*f[2],b=Array.isArray(i)?i:[i,i],S=x?[m,m]:v,C=[b[0]*f[2]+S[0]/2,b[1]*f[2]+S[1]/2],I=`${p}${e||""}`;return(0,O.jsxs)("svg",{className:de(["react-flow__background",l]),style:{...c,...bo,"--xy-background-color-props":a,"--xy-background-pattern-color-props":s},ref:d,"data-testid":"rf__background",children:[(0,O.jsx)("pattern",{id:I,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${C[0]},-${C[1]})`,children:g?(0,O.jsx)(kh,{radius:m/2,className:u}):(0,O.jsx)(_h,{dimensions:S,lineWidth:r,variant:t,className:u})}),(0,O.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${I})`})]})}Rc.displayName="Background";var Wc=(0,L.memo)(Rc);function Nh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,O.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Ch(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,O.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function Mh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,O.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Ih(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Ph(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function mo({children:e,className:t,...n}){return(0,O.jsx)("button",{type:"button",className:de(["react-flow__controls-button",t]),...n,children:e})}var zh=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function qc({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:s,onFitView:a,onInteractiveChange:c,className:l,children:u,position:d="bottom-left",orientation:f="vertical","aria-label":p}){let h=le(),{isInteractive:g,minZoomReached:x,maxZoomReached:y,ariaLabelConfig:v}=ae(zh,ue),{zoomIn:m,zoomOut:b,fitView:S}=yn(),C=()=>{m(),i?.()},I=()=>{b(),s?.()},T=()=>{S(r),a?.()},z=()=>{h.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),c?.(!g)};return(0,O.jsxs)(wo,{className:de(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:d,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(mo,{onClick:C,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:y,children:(0,O.jsx)(Nh,{})}),(0,O.jsx)(mo,{onClick:I,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:x,children:(0,O.jsx)(Ch,{})})]}),n&&(0,O.jsx)(mo,{className:"react-flow__controls-fitview",onClick:T,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,O.jsx)(Mh,{})}),o&&(0,O.jsx)(mo,{className:"react-flow__controls-interactive",onClick:z,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:g?(0,O.jsx)(Ph,{}):(0,O.jsx)(Ih,{})}),u]})}qc.displayName="Controls";var Xc=(0,L.memo)(qc);function Ah({id:e,x:t,y:n,width:o,height:r,style:i,color:s,strokeColor:a,strokeWidth:c,className:l,borderRadius:u,shapeRendering:d,selected:f,onClick:p}){let{background:h,backgroundColor:g}=i||{},x=s||h||g;return(0,O.jsx)("rect",{className:de(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:x,stroke:a,strokeWidth:c},shapeRendering:d,onClick:p?y=>p(y,e):void 0})}var Dh=(0,L.memo)(Ah),Th=e=>e.nodes.map(t=>t.id),xr=e=>e instanceof Function?e:()=>e;function Oh({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=Dh,onClick:s}){let a=ae(Th,ue),c=xr(t),l=xr(e),u=xr(n),d=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,O.jsx)(O.Fragment,{children:a.map(f=>(0,O.jsx)(Hh,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:s,shapeRendering:d},f))})}function Lh({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:s,NodeComponent:a,onClick:c}){let{node:l,x:u,y:d,width:f,height:p}=ae(h=>{let g=h.nodeLookup.get(e);if(!g)return{node:void 0,x:0,y:0,width:0,height:0};let x=g.internals.userNode,{x:y,y:v}=g.internals.positionAbsolute,{width:m,height:b}=Pe(x);return{node:x,x:y,y:v,width:m,height:b}},ue);return!l||l.hidden||!nr(l)?null:(0,O.jsx)(a,{x:u,y:d,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:s,onClick:c,id:l.id})}var Hh=(0,L.memo)(Lh),$h=(0,L.memo)(Oh),Bh=200,Vh=150,Fh=e=>!e.hidden,Rh=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]},n=!1;for(let o of e.nodeLookup.values())if(!o.hidden){n=!0;break}return{viewBB:t,boundingRect:n?Jo(Tt(e.nodeLookup,{filter:Fh}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},lc=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,Wh=(e,t)=>lc(e.viewBB,t.viewBB)&&lc(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,qh="react-flow__minimap-desc";function Yc({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:s,nodeComponent:a,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:d,position:f="bottom-right",onClick:p,onNodeClick:h,pannable:g=!1,zoomable:x=!1,ariaLabel:y,inversePan:v,zoomStep:m=1,offsetScale:b=5}){let S=le(),C=(0,L.useRef)(null),{boundingRect:I,panZoom:T,viewBB:z,rfId:R,translateExtent:H,flowWidth:F,flowHeight:_,ariaLabelConfig:w}=ae(Rh,Wh),E=e?.width??Bh,N=e?.height??Vh,M=I.width/E,P=I.height/N,D=Math.max(M,P),B=D*E,V=D*N,q=b*D,Y=I.x-(B-I.width)/2-q,Z=I.y-(V-I.height)/2-q,Q=B+q*2,ne=V+q*2,X=`${qh}-${R}`,$=(0,L.useRef)(0),G=(0,L.useRef)();$.current=D,(0,L.useEffect)(()=>{let re=S.getState().panZoom;if(C.current&&re)return G.current=ya({domNode:C.current,panZoom:re,getTransform:()=>S.getState().transform,getViewScale:()=>$.current}),()=>{G.current?.destroy()}},[T]),(0,L.useEffect)(()=>{G.current?.update({translateExtent:H,width:F,height:_,inversePan:v,pannable:g,zoomStep:m,zoomable:x})},[g,x,v,m,H,F,_]);let K=p?re=>{let[ie,se]=G.current?.pointer(re)||[0,0];p(re,{x:ie,y:se})}:void 0,ee=(0,L.useCallback)((re,ie)=>{let se=S.getState().nodeLookup.get(ie).internals.userNode;h?.(re,se)},[h]),j=h?ee:void 0,te=y??w["minimap.ariaLabel"];return(0,O.jsx)(wo,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof d=="number"?d*D:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:de(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,O.jsxs)("svg",{width:E,height:N,viewBox:`${Y} ${Z} ${Q} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":X,ref:C,onClick:K,children:[te&&(0,O.jsx)("title",{id:X,children:te}),(0,O.jsx)($h,{onClick:j,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:s,nodeComponent:a}),(0,O.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Y-q},${Z-q}h${Q+q*2}v${ne+q*2}h${-Q-q*2}z
        M${z.x},${z.y}h${z.width}v${z.height}h${-z.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Yc.displayName="MiniMap";var Ev=(0,L.memo)(Yc),Xh=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,Yh={[ot.Line]:"right",[ot.Handle]:"bottom-right"};function Zh({nodeId:e,position:t,variant:n=ot.Handle,className:o,style:r=void 0,children:i,color:s,minWidth:a=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:d=!1,resizeDirection:f,autoScale:p=!0,shouldResize:h,onResizeStart:g,onResize:x,onResizeEnd:y}){let v=bc(),m=typeof e=="string"?e:v,b=le(),S=(0,L.useRef)(null),C=n===ot.Handle,I=ae((0,L.useCallback)(Xh(C&&p),[C,p]),ue),T=(0,L.useRef)(null),z=t??Yh[n];(0,L.useEffect)(()=>{if(!(!S.current||!m))return T.current||(T.current=_a({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:H,transform:F,snapGrid:_,snapToGrid:w,nodeOrigin:E,domNode:N}=b.getState();return{nodeLookup:H,transform:F,snapGrid:_,snapToGrid:w,nodeOrigin:E,paneDomNode:N}},onChange:(H,F)=>{let{triggerNodeChanges:_,nodeLookup:w,parentLookup:E,nodeOrigin:N}=b.getState(),M=[],P={x:H.x,y:H.y},D=w.get(m);if(D&&D.expandParent&&D.parentId){let B=D.origin??N,V=H.width??D.measured.width??0,q=H.height??D.measured.height??0,Y={id:D.id,parentId:D.parentId,rect:{width:V,height:q,...or({x:H.x??D.position.x,y:H.y??D.position.y},{width:V,height:q},D.parentId,w,B)}},Z=uo([Y],w,E,N);M.push(...Z),P.x=H.x?Math.max(B[0]*V,H.x):void 0,P.y=H.y?Math.max(B[1]*q,H.y):void 0}if(P.x!==void 0&&P.y!==void 0){let B={id:m,type:"position",position:{...P}};M.push(B)}if(H.width!==void 0&&H.height!==void 0){let V={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:H.width,height:H.height}};M.push(V)}for(let B of F){let V={...B,type:"position"};M.push(V)}_(M)},onEnd:({width:H,height:F})=>{let _={id:m,type:"dimensions",resizing:!1,dimensions:{width:H,height:F}};b.getState().triggerNodeChanges([_])}})),T.current.update({controlPosition:z,boundaries:{minWidth:a,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:d,resizeDirection:f,onResizeStart:g,onResize:x,onResizeEnd:y,shouldResize:h}),()=>{T.current?.destroy()}},[z,a,c,l,u,d,g,x,y,h]);let R=z.split("-");return(0,O.jsx)("div",{className:de(["react-flow__resize-control","nodrag",...R,n,o]),ref:S,style:{...r,scale:I,...s&&{[C?"backgroundColor":"borderColor"]:s}},children:i})}var Nv=(0,L.memo)(Zh);var _t={recency:"recent",workspace:"all",status:"all",kind:"all",archived:!1,query:""};function Zc(e,t,n=Date.now()){let o={...e};for(let r of t)Object.hasOwn(o,r)||Object.defineProperty(o,r,{value:{since:n,visits:[]},enumerable:!0,writable:!0,configurable:!0});return o}function kr(e,t=Date.now()){return!Number.isFinite(e)||e<=0||e>t+6e4?"unknown":t-e<=7*864e5?"recent":"early"}function Sr(e,t=Date.now()){return e?e.visits.filter(o=>o>=t-30*864e5&&o<=t).length>=5?"frequent":t-e.since>=30*864e5?"infrequent":"accumulating":"accumulating"}function Gc(e,t=Date.now()){let n=(e?.visits??[]).filter(o=>o>=t-2592e6&&o<=t);return(!n.length||t-n[n.length-1]>=30*6e4)&&n.push(t),{since:e?.since??t,visits:n}}var _o={recent:"\u8FD1\u671F",early:"\u65E9\u671F",unknown:"\u65F6\u95F4\u672A\u77E5"},ko={frequent:"\u5E38\u7528",infrequent:"\u4E0D\u5E38\u7528",accumulating:"\u4F7F\u7528\u8BB0\u5F55\u79EF\u7D2F\u4E2D"};var Gh=e=>(/^[A-Za-z]:[/\\]/.test(e)||e.startsWith("\\\\")?e.replaceAll("\\","/"):e).replace(/\/+$/,"");function Er(e){let t=e.map(o=>({id:o.id,path:Gh(o.path)})),n=new Map;for(let o of t){let r=-1;for(let i of t)i.id!==o.id&&i.path.length>r&&o.path!==i.path&&o.path.startsWith(i.path+"/")&&(n.set(o.id,i.id),r=i.path.length)}return n}function Nr(e){let t=new Map(e.map(o=>[o.id,o])),n=new Map;for(let o of e){if(!o.parentId||!t.has(o.parentId))continue;let r=new Set([o.id]),i=o.parentId;for(;i&&t.has(i)&&!r.has(i);)r.add(i),i=t.get(i).parentId;(!i||!r.has(i))&&n.set(o.id,o.parentId)}return n}function Uc(e,t,n){let o=new Map;for(let[s,a]of Er(e.workspaces))o.set("workspace:"+s,"workspace:"+a);for(let s of e.workspaces)for(let a of s.sessionIds)o.has("session:"+a)||o.set("session:"+a,"workspace:"+s.id);for(let[s,a]of Nr(e.sessions))o.set("session:"+s,"session:"+a);let r={...n},i=s=>{if(r[s])return r[s];let a=t[s],c=o.get(s);if(!a||!c)return a;let l=t[c],u=i(c);return!l||!u?a:r[s]={x:a.x+u.x-l.x,y:a.y+u.y-l.y}};for(let s of o.keys())t[s]&&i(s);return r}function Cr(e){return e.pending?"waiting":e.running===!0?"running":e.unread?"unread":e.running===!1?"idle":"unknown"}function Mr(e,t,n,o={},r=new Set,i=Date.now()){let s=Er(e.workspaces),a=Nr(e.sessions),c=new Map(e.sessions.map(_=>[_.id,_])),l=new Set(e.archivedSessionIds),u=e.sessions.filter(_=>_.id===e.currentSessionId||!_.blank&&_.origin!=="subagent"&&(t.archived||!l.has(_.id))),d=new Map(u.map(_=>[_.id,_])),f=new Set(e.workspaces.flatMap(_=>[..._.sessionIds])),p=u.filter(_=>!f.has(_.id)),h=[...e.workspaces];(p.length||[...a.values()].some(_=>!f.has(_)))&&h.push({id:"__ungrouped__",title:"\u672A\u5206\u7EC4",path:"",sessionIds:p.map(_=>_.id),virtual:!0});let g=[],x=[],y=t.query.trim().toLocaleLowerCase(),v=t.statuses??(t.status==="all"?[]:[t.status]),m=0,b=new Set,S=new Set,C=new Map;for(let _ of h)for(let w of _.sessionIds)C.has(w)||C.set(w,_.id);let I=new Map(h.map(_=>[_.id,_])),T=new Map,z=_=>{let w=n.positions["workspace:"+_]??T.get(_);if(w)return w;let E=s.get(_),N=h.findIndex(P=>P.id===_),M;if(E){let P=z(E),D=h.filter(B=>s.get(B.id)===E).findIndex(B=>B.id===_);M={x:P.x+300,y:P.y+180+D*240}}else M={x:N%3*540+280,y:Math.floor(N/3)*620+290};return T.set(_,M),M},R=new Map,H=_=>{let w=n.positions["session:"+_.id]??R.get(_.id);if(w)return w;let E=a.get(_.id),N;if(E){let M=H(c.get(E)),P=e.sessions.filter(B=>a.get(B.id)===E).findIndex(B=>B.id===_.id),D=P===0?0:Math.ceil(P/2)*(P%2?-1:1);N={x:M.x+D*150,y:M.y-190-Math.floor(P/6)*130}}else{let M=C.get(_.id)??"__ungrouped__",P=z(M),D=Math.max(0,I.get(M)?.sessionIds.indexOf(_.id)??0),B=185+Math.floor(D/12)*120,V=D*2.399963229728653-Math.PI/2;N={x:P.x+Math.cos(V)*B+14,y:P.y+Math.sin(V)*B+14}}return R.set(_.id,N),N},F=(_,w=!1)=>({id:"session:"+_.id,type:"bubble",position:H(_),data:{kind:"session",entityId:_.id,title:_.title,status:Cr(_),path:_.cwd,workspaceId:C.get(_.id)??"__ungrouped__",parentSessionId:a.get(_.id),context:w,archived:l.has(_.id),updatedAt:_.updatedAt,current:_.id===e.currentSessionId,working:_.running===!0,pinned:n.settings?.pinned?.includes(_.id),recency:kr(_.updatedAt,i),frequency:Sr(n.settings?.usage?.[_.id],i)}});h.forEach(_=>{let w=_.id;for(;w&&w!==t.workspace;)w=s.get(w);let E=t.workspace==="all"||w===t.workspace,N=[...new Set(_.sessionIds)].flatMap(X=>d.has(X)&&C.get(X)===_.id?[d.get(X)]:[]),M=!y||(_.title+" "+_.path).toLocaleLowerCase().includes(y),P=N.filter(X=>E&&(M||X.title.toLocaleLowerCase().includes(y))&&(!v.length||v.includes(Cr(X)))&&(!t.recency||t.recency==="all"||kr(X.updatedAt,i)===t.recency)&&(!t.frequency||t.frequency==="all"||Sr(n.settings?.usage?.[X.id],i)===t.frequency)).sort((X,$)=>Number(n.settings?.pinned?.includes($.id)??!1)-Number(n.settings?.pinned?.includes(X.id)??!1)),D=N.map(Cr),B=["waiting","running","unread","idle"].find(X=>D.includes(X))??"unknown",V="workspace:"+_.id,q=!r.has(_.id);g.push({id:V,type:"bubble",position:z(_.id),data:{kind:"workspace",entityId:_.id,title:_.title,path:_.path,status:B,count:P.length,total:N.length,virtual:_.virtual,parentWorkspaceId:s.get(_.id),childWorkspaceCount:h.filter(X=>s.get(X.id)===_.id).length,collapsed:q,working:N.some(X=>X.running===!0)}});let Y=s.get(_.id);Y&&x.push({id:"workspace:"+Y+"->"+V,source:"workspace:"+Y,target:V}),m+=P.length;for(let X of P)b.add(X.id);let Z=o[_.id]??20,Q=q||t.kind==="workspace"?[]:P.slice(0,Z),ne=N.find(X=>X.id===e.currentSessionId);ne&&!Q.some(X=>X.id===ne.id)&&Q.push(ne),Q.forEach(X=>{S.has(X.id)||(S.add(X.id),g.push(F(X)))})});for(let _ of S){let w=a.get(_);w&&!S.has(w)&&(S.add(w),g.push(F(c.get(w),!0)))}for(let _ of S){let w=a.get(_),E=w?"session:"+w:"workspace:"+(C.get(_)??"__ungrouped__"),N="session:"+_;x.push({id:E+"->"+N,source:E,target:N,...w?{sourceHandle:"branch-source",targetHandle:"branch-target"}:{}})}return{nodes:g,edges:x,matched:m,total:u.length,hidden:[...b].filter(_=>!S.has(_)).length}}var Ge="#6aabff";function xn(e){if(typeof e!="string")return;let t=e.trim().toLowerCase();if(/^#[\da-f]{6}$/.test(t))return t;if(/^#[\da-f]{3}$/.test(t))return"#"+[...t.slice(1)].map(n=>n+n).join("")}var Kc=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),So=(e,t,n)=>"#"+Kc(e).map((o,r)=>Math.round(o*(1-n)+Kc(t)[r]*n).toString(16).padStart(2,"0")).join("");function jc(e){let t=xn(e)??Ge;return{workspace:So(t,"#243247",.8),expanded:So(t,"#080d17",.94),session:So(t,"#ffffff",.82),text:"#ffffff",sessionText:"#111827",accent:So(t,"#ffffff",.55)}}var wn=()=>({schemaVersion:1,revision:0,positions:{},collapsed:[],views:{}}),Ft=e=>!["__proto__","prototype","constructor"].includes(e)&&e.length<1e3,Ve=e=>!!e&&typeof e=="object"&&!Array.isArray(e),Qc=e=>Ve(e)&&typeof e.x=="number"&&typeof e.y=="number"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Math.abs(e.x)<1e8&&Math.abs(e.y)<1e8;function Uh(e){return Ve(e)&&typeof e.workspace=="string"&&(e.recency===void 0||["all","recent","early","unknown"].includes(String(e.recency)))&&(e.frequency===void 0||["all","frequent","infrequent","accumulating"].includes(String(e.frequency)))&&(e.statuses===void 0||Array.isArray(e.statuses)&&e.statuses.every(t=>["running","waiting","unread","idle","unknown"].includes(t)))&&["all","running","waiting","unread","idle","unknown"].includes(String(e.status))&&["all","workspace","session"].includes(String(e.kind))&&typeof e.archived=="boolean"&&typeof e.query=="string"}function Jc(e){if(!Ve(e)||e.schemaVersion!==1||!Number.isSafeInteger(e.revision)||Number(e.revision)<0||!Ve(e.positions)||!Array.isArray(e.collapsed)||!Ve(e.views))throw new Error("Invalid layout format or unsupported version");for(let[t,n]of Object.entries(e.positions))if(!Ft(t)||!Qc(n))throw new Error("Invalid layout position");if(!e.collapsed.every(t=>typeof t=="string"&&Ft(t)))throw new Error("Invalid layout collapse state");for(let[t,n]of Object.entries(e.views)){if(!Ft(t)||!Ve(n))throw new Error("Invalid layout view");if(n.viewport!==void 0&&(!Qc(n.viewport)||typeof n.viewport.zoom!="number"||!Number.isFinite(n.viewport.zoom)||n.viewport.zoom<.1||n.viewport.zoom>3))throw new Error("Invalid layout viewport");if(n.filters!==void 0&&!Uh(n.filters))throw new Error("Invalid layout filters")}}var Eo=class{storage;key;constructor(t,n){this.storage=t,this.key=n}load(){let t=this.storage.getItem(this.key);if(t===null)return wn();let n;try{n=JSON.parse(t)}catch{throw new Error("Invalid layout JSON")}Jc(n);let o=Ve(n.settings)?n.settings:{},r=Object.fromEntries(Object.entries(Ve(o.manualSummaries)?o.manualSummaries:{}).filter(([s,a])=>Ft(s)&&typeof a=="string").map(([s,a])=>[s,a.slice(0,4e3)])),i=Object.fromEntries(Object.entries(Ve(o.usage)?o.usage:{}).filter(([s,a])=>Ft(s)&&Ve(a)&&Number.isFinite(a.since)&&Number(a.since)>=0&&Array.isArray(a.visits)&&a.visits.every(c=>typeof c=="number"&&Number.isFinite(c)&&c>=0)).map(([s,a])=>[s,{since:a.since,visits:a.visits.slice(-2e3).sort((c,l)=>c-l)}]));return n.settings={theme:xn(o.theme)??Ge,reducedMotion:o.reducedMotion===!0,pinned:Array.isArray(o.pinned)?o.pinned.filter(s=>typeof s=="string"&&Ft(s)):[],usage:i,manualSummaries:r},n}initializePositions(t){let n=this.load(),o=Object.fromEntries(Object.entries(t).filter(([r])=>!n.positions[r]));return Object.keys(o).length?this.savePatch({positions:o},n.revision):n}reset(t){if(this.storage.getItem(this.key)!==t)throw new Error("Layout conflict: another window changed the saved layout");let n=wn();return this.storage.setItem(this.key,JSON.stringify(n)),n}savePatch(t,n){let o=this.load();if(o.revision!==n)throw new Error("Layout conflict: another window saved a newer layout");let r={...o.views};for(let[s,a]of Object.entries(t.views??{}))r[s]={...r[s],...a};let i={schemaVersion:1,revision:o.revision+1,positions:{...o.positions,...t.positions},collapsed:t.collapsed??o.collapsed,views:r,settings:{theme:Ge,reducedMotion:!1,...o.settings,...t.settings}};return Jc(i),this.storage.setItem(this.key,JSON.stringify(i)),i}};var ge=St(require("react"),1);function el({color:e,reduced:t,onColor:n,onReduced:o}){let[r,i]=(0,ge.useState)(e),[s,a]=(0,ge.useState)(!1),[c,l]=(0,ge.useState)(t);(0,ge.useEffect)(()=>l(t),[t]),(0,ge.useEffect)(()=>{i(e),a(!1)},[e]);let u=()=>{let d=xn(r);a(!d),d&&n(d)};return ge.default.createElement("details",{className:"wg-theme"},ge.default.createElement("summary",null,"\u4E3B\u9898\u4E0E\u52A8\u6001\u6548\u679C"),ge.default.createElement("div",{className:"wg-theme-controls"},ge.default.createElement("label",null,"\u4E3B\u9898\u8272"," ",ge.default.createElement("input",{type:"color","aria-label":"\u4E3B\u9898\u8272",value:e,onChange:d=>n(d.target.value)})),ge.default.createElement("input",{"aria-label":"\u4E3B\u9898 HEX",value:r,onChange:d=>i(d.target.value),onBlur:u,onKeyDown:d=>{d.key==="Enter"&&u()},"aria-invalid":s}),ge.default.createElement("button",{onClick:u},"\u5E94\u7528\u989C\u8272"),["#6aabff","#c084fc","#2dd4bf","#fb923c"].map(d=>ge.default.createElement("button",{key:d,"aria-label":"\u914D\u8272 "+d,onClick:()=>n(d),style:{borderColor:d}},"\u25CF")),ge.default.createElement("button",{onClick:()=>n(Ge)},"\u6062\u590D\u9ED8\u8BA4\u8272"),s&&ge.default.createElement("span",{role:"alert"},"\u8BF7\u8F93\u5165\u6709\u6548\u7684 HEX \u8272\u503C\uFF0C\u4F8B\u5982 #6aabff"),ge.default.createElement("label",{className:"wg-check"},ge.default.createElement("input",{type:"checkbox",checked:c,onChange:d=>{l(d.target.checked),o(d.target.checked)}}),"\u51CF\u5C11\u52A8\u6001\u6548\u679C\uFF08\u4E5F\u9075\u5FAA\u7CFB\u7EDF\u8BBE\u7F6E\uFF09")))}var he=require("react");var rt=e=>Math.max(-99800,Math.min(99800,e)),No=class{bodies=new Map;links=[];active=!1;reduced=!1;contactScale=1;dragging;followers=new Map;groupIndex=new Map;quiet=0;inputs=new Map;groups=[];ordered=[];sync(t,n,o=!1){let r=new Set(t.map(g=>g.id)),i=new Set(this.bodies.keys()),s=new Map(t.map(g=>[g.id,g])),a=new Map(n.map(g=>[g.target,g.source])),c=this.bodies.size!==r.size;for(let g of this.bodies.keys())r.has(g)||(this.bodies.delete(g),this.inputs.delete(g),c=!0);for(let g of t){let x={x:72,y:g.data.kind==="workspace"?53:37},y=rt(g.position.x)+x.x,v=rt(g.position.y)+x.y,m=this.bodies.get(g.id),b=this.inputs.get(g.id),S=o||!b||Math.hypot(b.x-g.position.x,b.y-g.position.y)>.1;this.inputs.set(g.id,{...g.position}),m?S&&!m.pin&&Math.hypot(m.x-y,m.y-v)>.1&&(m.x=y,m.y=v,m.vx=m.vy=0,delete m.opening,c=!0):(this.bodies.set(g.id,{id:g.id,x:y,y:v,vx:0,vy:0,radius:g.data.kind==="workspace"?53:37,offset:x}),c=!0)}let l=n.filter(g=>r.has(g.source)&&r.has(g.target));JSON.stringify(l)!==JSON.stringify(this.links)&&(c=!0),this.links=l,this.ordered=[];let u=new Set,d=g=>{if(u.has(g))return;u.add(g);let x=a.get(g);x&&r.has(x)&&d(x);let y=this.bodies.get(g);if(this.ordered.push(y),i.has(g)||!i.size||this.reduced||o)return;let v=x?this.bodies.get(x):void 0,m=x?s.get(x):void 0;!v||!m||(y.opening={parent:v.id,dx:y.x-m.position.x-v.offset.x,dy:y.y-m.position.y-v.offset.y,elapsed:0},y.x=v.x,y.y=v.y)};for(let g of r)d(g);let f=new Map([...r].map(g=>[g,g])),p=g=>{let x=f.get(g);if(x===g)return g;let y=p(x);return f.set(g,y),y};for(let g of l)f.set(p(g.target),p(g.source));let h=new Map;for(let g of this.bodies.values()){let x=p(g.id);h.has(x)||h.set(x,[]),h.get(x).push(g)}if(this.groups=[...h.values()],this.groupIndex=new Map,this.groups.forEach((g,x)=>{for(let y of g)this.groupIndex.set(y.id,x)}),this.dragging){let g=this.bodies.get(this.dragging);if(!g)this.dragging=void 0,this.followers.clear(),this.contactScale=1;else{let x=this.groups[this.groupIndex.get(this.dragging)??-1]??[g],y=new Set(x.map(m=>m.id)),v=this.descendantIds(this.dragging);for(let m of this.followers.keys())y.has(m)||this.followers.delete(m);for(let m of x)m!==g&&!m.pin&&!this.followers.has(m.id)&&this.followers.set(m.id,{x:m.x-g.x,y:m.y-g.y,rate:v.has(m.id)?7:10})}}return c&&this.wake(),c}wake(){this.active=!0,this.quiet=0}pin(t,n){let o=this.bodies.get(t);o&&(o.pin={x:rt(n.x)+o.offset.x,y:rt(n.y)+o.offset.y},o.x=o.pin.x,o.y=o.pin.y,o.vx=o.vy=0,delete o.opening,this.wake())}unpin(t){let n=this.bodies.get(t);n?.pin&&(delete n.pin,this.wake())}beginDrag(t){let n=this.bodies.get(t);if(!n)return;this.dragging=t,this.contactScale=.86,this.followers.clear();let o=this.groups[this.groupIndex.get(t)??-1]??[n],r=this.descendantIds(t);for(let i of o)i===n||i.pin||this.followers.set(i.id,{x:i.x-n.x,y:i.y-n.y,rate:r.has(i.id)?7:10});for(let i of this.bodies.values())i.vx=i.vy=0;this.wake()}descendantIds(t){let n=new Map;for(let i of this.links)n.has(i.source)||n.set(i.source,[]),n.get(i.source).push(i.target);let o=new Set,r=[t];for(;r.length;)for(let i of n.get(r.pop())??[])i===t||o.has(i)||(o.add(i),r.push(i));return o}drag(t,n){let o=this.bodies.get(t);if(!o)return;this.dragging!==t&&this.beginDrag(t);let r=rt(n.x)+o.offset.x,i=rt(n.y)+o.offset.y;o.pin={x:r,y:i},o.x=r,o.y=i,o.vx=o.vy=0,delete o.opening,this.wake()}release(t){this.dragging===t&&(this.dragging=void 0,this.followers.clear()),this.unpin(t),this.wake()}positions(){return Object.fromEntries([...this.bodies.values()].map(t=>[t.id,{x:t.x-t.offset.x,y:t.y-t.offset.y}]))}relaxInternalContacts(t){let n=1-Math.exp(-14*t),o=0;for(let r of this.groups){if(r.length<2)continue;let i=Math.max(...r.map(c=>c.radius))*2,s=new Map,a=r.map((c,l)=>{let u=Math.floor(c.x/i),d=Math.floor(c.y/i),f=u+":"+d;return s.has(f)||s.set(f,[]),s.get(f).push(l),{x:u,y:d}});for(let c=0;c<r.length;c++){let l=r[c],u=a[c];if(!l.opening)for(let d=u.x-1;d<=u.x+1;d++)for(let f=u.y-1;f<=u.y+1;f++)for(let p of s.get(d+":"+f)??[]){if(p<=c)continue;let h=r[p];if(h.opening||l.pin&&h.pin)continue;let g=h.x-l.x,x=h.y-l.y,y=(l.radius+h.radius+2)*this.contactScale;if(g*g+x*x>=y*y)continue;let v=Math.hypot(g,x);o=Math.max(o,y-v);let m=v>1e-6?g/v:Math.cos((c+p)*2.39996),b=v>1e-6?x/v:Math.sin((c+p)*2.39996),S=(y-v)*n*(l.pin||h.pin?1:.5);l.pin||(l.x-=m*S,l.y-=b*S),h.pin||(h.x+=m*S,h.y+=b*S)}}}return o}step(t){if(!this.active)return!1;let n=Math.min(Math.max(t,0),1/30),o=Math.max(1,Math.ceil(n*120)),r=n/o;this.dragging||(this.reduced?this.contactScale=1:this.contactScale<1&&(this.contactScale=Math.min(1,this.contactScale+n*(1-.86)/1.2)));let i=this.ordered,s=0,a=new Map(i.map(d=>[d.id,{x:d.x,y:d.y}])),c=new Map;for(let d of this.links)c.set(d.source,(c.get(d.source)??0)+1),c.set(d.target,(c.get(d.target)??0)+1);for(let d=0;d<o;d++){let f=this.dragging?this.bodies.get(this.dragging):void 0;f?.pin&&(f.x=f.pin.x,f.y=f.pin.y,f.vx=f.vy=0);for(let p of i){if(p.pin){p.x=p.pin.x,p.y=p.pin.y,p.vx=p.vy=0;continue}if(this.dragging){let h=this.followers.get(p.id);if(f&&h){let g=1-Math.exp(-h.rate*r);p.x+=(f.x+h.x-p.x)*g,p.y+=(f.y+h.y-p.y)*g}p.vx=p.vy=0;continue}this.reduced&&(p.vx=p.vy=0),p.vx*=Math.exp(-10*r),p.vy*=Math.exp(-10*r),p.x+=p.vx*r,p.y+=p.vy*r}if(this.dragging)s=0;else{for(let p of this.links){let h=this.bodies.get(p.source),g=this.bodies.get(p.target);if(h.opening||g.opening)continue;let x=g.x-h.x,y=g.y-h.y,v=Math.hypot(x,y),m=280+Math.max(0,Math.sqrt(Math.max(c.get(h.id)??0,c.get(g.id)??0))-2)*90;if(v<=m||!v)continue;let b=Math.min(v-m,1800)*(1-Math.exp(-(this.reduced?18:5)*r));x=x/v*b,y=y/v*b;let S=!h.pin&&!g.pin?.5:1;h.pin||(h.x+=x*(g.pin?1:S),h.y+=y*(g.pin?1:S)),g.pin||(g.x-=x*(h.pin?1:S),g.y-=y*(h.pin?1:S))}for(let p of i){let h=p.opening;if(!h)continue;let g=this.bodies.get(h.parent);if(!g){delete p.opening;continue}h.elapsed+=r;let x=this.reduced?1:Math.min(1,h.elapsed/.24),y=1-(1-x)**3;p.x=g.x+h.dx*y,p.y=g.y+h.dy*y,x===1&&delete p.opening}s=this.relaxInternalContacts(r)}for(let p=0;p<3;p++){let h=this.groups.map(g=>({left:Math.min(...g.map(x=>x.x-x.radius)),right:Math.max(...g.map(x=>x.x+x.radius)),top:Math.min(...g.map(x=>x.y-x.radius)),bottom:Math.max(...g.map(x=>x.y+x.radius)),pinned:g.some(x=>!!x.pin)}));for(let g=0;g<this.groups.length;g++)for(let x=g+1;x<this.groups.length;x++){let y=h[g],v=h[x];if(y.pinned&&v.pinned||y.right+4<v.left||v.right+4<y.left||y.bottom+4<v.top||v.bottom+4<y.top)continue;let m=0,b=0,S=0;for(let z of this.groups[g])for(let R of this.groups[x]){let H=R.x-z.x,F=R.y-z.y,_=(z.radius+R.radius+4)*this.contactScale;if(Math.abs(H)>=_||Math.abs(F)>=_)continue;let w=Math.hypot(H,F);_-w<=m||(m=_-w,b=w>1e-6?H/w:Math.cos((g+x)*2.39996),S=w>1e-6?F/w:Math.sin((g+x)*2.39996))}if(!m)continue;let C=y.pinned||v.pinned?1:.5,I=!p&&!this.reduced&&!this.dragging&&this.contactScale>=1&&m>2?Math.min(8,m*.15):0,T=(z,R)=>{let H=h[z];if(H.pinned)return;let F=R*b*m*C,_=R*S*m*C;for(let w of this.groups[z])w.x+=F,w.y+=_,w.vx+=R*b*I,w.vy+=R*S*I;H.left+=F,H.right+=F,H.top+=_,H.bottom+=_};T(g,-1),T(x,1)}}for(let p of i)p.pin||(p.x=rt(p.x-p.offset.x)+p.offset.x,p.y=rt(p.y-p.offset.y)+p.offset.y)}let l=Math.max(0,...i.map(d=>Math.hypot(d.x-a.get(d.id).x,d.y-a.get(d.id).y))),u=Math.max(0,...i.map(d=>Math.hypot(d.vx,d.vy)));if(this.quiet=(this.dragging||this.contactScale>=1&&!i.some(d=>d.opening))&&s<.1&&l<.035&&u<.2?this.quiet+n:0,this.quiet>.22){this.active=!1;for(let d of i)d.vx=d.vy=0}return this.active}};function tl(e,t,n){let[o,r]=(0,he.useState)([]),i=(0,he.useRef)(new No),s=(0,he.useRef)(),a=(0,he.useRef)(0),c=(0,he.useRef)(n),l=(0,he.useRef)(),u=(0,he.useRef)(),d=(0,he.useRef)(!1);c.current=n;let f=(0,he.useCallback)(()=>{let y=i.current.positions();r(v=>v.map(m=>{let b=y[m.id];return b&&(b.x!==m.position.x||b.y!==m.position.y)?{...m,position:b}:m}))},[]),p=(0,he.useCallback)(()=>{if(s.current!==void 0)return;a.current=performance.now();let y=v=>{i.current.step((v-a.current)/1e3),a.current=v,f(),i.current.active?s.current=requestAnimationFrame(y):(s.current=void 0,c.current(i.current.positions()))};s.current=requestAnimationFrame(y)},[f]);(0,he.useEffect)(()=>{i.current.reduced=t},[t]),(0,he.useEffect)(()=>{let y=i.current.sync(e.nodes,e.edges,d.current);d.current=!1;let v=i.current.positions();r(m=>{let b=new Map(m.map(S=>[S.id,S]));return e.nodes.map(S=>({...b.get(S.id),...S,position:v[S.id]??S.position}))}),y&&p()},[e,p]),(0,he.useEffect)(()=>()=>{s.current!==void 0&&cancelAnimationFrame(s.current)},[]);let h=(0,he.useCallback)(y=>{if(u.current&&u.current!==l.current&&i.current.unpin(u.current),u.current=y,y&&!l.current){let v=i.current.positions()[y];v&&i.current.pin(y,v)}i.current.active&&p()},[p]),g=(0,he.useCallback)((y,v)=>{h(),l.current=y,i.current.drag(y,v),f(),p()},[h,f,p]),x=(0,he.useCallback)(y=>{i.current.release(y),l.current=void 0,c.current(i.current.positions()),p()},[p]);return{nodes:o,setNodes:r,drag:g,release:x,hover:h,world:i.current,forceNextSync:()=>{d.current=!0}}}var Fe=St(require("react"),1);function nl(e){return[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(t=>t.segment)}function ol({value:e,onSave:t}){let[n,o]=(0,Fe.useState)(e);return(0,Fe.useEffect)(()=>o(e),[e]),Fe.default.createElement("form",{className:"wg-summary-editor",onSubmit:r=>{r.preventDefault(),t(n.trim())}},Fe.default.createElement("label",null,"\u624B\u52A8\u77ED\u6982\u62EC",Fe.default.createElement("textarea",{"aria-label":"\u624B\u52A8\u77ED\u6982\u62EC",value:n,onChange:r=>o(r.target.value),maxLength:4e3,placeholder:"\u5EFA\u8BAE 12\u201324 \u5B57\uFF1B\u7559\u7A7A\u4F7F\u7528\u63D2\u4EF6\u6458\u8981\u6216\u539F\u6807\u9898"})),Fe.default.createElement("p",{className:"wg-small-note"},nl(n).length," \u4E2A\u5B57\u7B26 \xB7 \u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668"),Fe.default.createElement("button",null,"\u4FDD\u5B58\u6982\u62EC"))}var Ir={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"},Pr={running:"#6aabff",waiting:"#ffc56c",unread:"#5fe0b4",idle:"#9aaac5",unknown:"#748099"};function Kh({data:e,selected:t}){let n=e.kind==="workspace";return k.default.createElement("div",{className:"wg-bubble "+(n?"is-workspace":"is-session")+(t?" is-selected":"")+(e.collapsed===!1?" is-expanded":"")+(e.current?" is-current":"")+(e.working?" is-working":"")+(e.archived?" is-archived":""),style:{"--bubble-color":Pr[e.status]},title:e.title+(e.path?" \xB7 "+e.path:"")},k.default.createElement(Ze,{type:"target",position:U.Top,isConnectable:!1}),k.default.createElement("div",{className:"wg-orb"},k.default.createElement("span",{className:"wg-orb-symbol"},n?"\u25C8":"\u2726"),n&&k.default.createElement("span",{className:"wg-orb-count"},e.total," \u4E2A\u4F1A\u8BDD"),n&&!!e.childWorkspaceCount&&k.default.createElement("span",{className:"wg-orb-count"},e.childWorkspaceCount," \u4E2A\u5B50\u5DE5\u4F5C\u533A")),k.default.createElement("div",{className:"wg-node-title"},e.title),k.default.createElement("div",{className:"wg-node-badges"},e.current&&k.default.createElement("span",null,"\u5F53\u524D"),e.working&&k.default.createElement("strong",null,"\u25B6 \u5DE5\u4F5C\u4E2D"),e.parentWorkspaceId&&k.default.createElement("span",null,"\u5B50\u5DE5\u4F5C\u533A"),e.parentSessionId&&k.default.createElement("span",null,"\u5206\u652F"),e.context&&k.default.createElement("span",null,"\u6765\u6E90")),!n&&k.default.createElement("div",{className:"wg-activity"},e.pinned?"\u2605 ":"",e.recency&&_o[e.recency]," \xB7"," ",e.frequency&&ko[e.frequency]),k.default.createElement("div",{className:"wg-node-meta"},k.default.createElement("i",null),n?e.collapsed?"\u5DF2\u6536\u8D77":"\u5DE5\u4F5C\u533A":e.archived?"\u5DF2\u5F52\u6863":Ir[e.status]),k.default.createElement(Ze,{type:"source",position:U.Bottom,isConnectable:!1}),!n&&k.default.createElement(k.default.Fragment,null,k.default.createElement(Ze,{id:"branch-source",type:"source",position:U.Top,isConnectable:!1}),k.default.createElement(Ze,{id:"branch-target",type:"target",position:U.Bottom,isConnectable:!1})))}var jh={bubble:k.default.memo(Kh)};function Qh(e){return(0,k.useState)(()=>{try{return{layout:e.load(),error:""}}catch(t){return{layout:wn(),error:"\u65E0\u6CD5\u8BFB\u53D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF1A"+String(t)}}})[0]}function rl(e){return k.default.createElement(_r,null,k.default.createElement(Jh,{...e}))}function Jh({catalog:e,actions:t,repository:n,demo:o,access:r}){let i=Qh(n),[s,a]=(0,k.useState)(i.layout),c=(0,k.useRef)(s),[l,u]=(0,k.useState)(i.error),[d,f]=(0,k.useState)(!1),[p,h]=(0,k.useState)(""),[g,x]=(0,k.useState)(()=>({..._t,...i.layout.views.all?.filters})),[y,v]=(0,k.useState)(),[m,b]=(0,k.useState)(()=>new Set),[S,C]=(0,k.useState)({}),[I,T]=(0,k.useState)(!0),[z,R]=(0,k.useState)(),[H,F]=(0,k.useState)(),[_,w]=(0,k.useState)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),E=!!s.settings?.reducedMotion||_,[N,M]=(0,k.useState)(Date.now),P=yn(),D=(0,k.useRef)(null),B=(0,k.useCallback)(()=>{let A=D.current;if(!A||!P.getNodes().length)return;let W=A.getBoundingClientRect(),J=A.querySelector(".wg-dock")?.getBoundingClientRect(),ce=W.width>850?(J?.width??0)+45:20,pe=W.width<=850?(J?.height??0)+35:35,Oe=Math.max(180,W.width-ce-35),kt=Math.max(120,W.height-pe-40),Le=P.getNodesBounds(P.getNodes()),st=Math.max(.1,Math.min(1,Oe/(Le.width+100),kt/(Le.height+100)));P.setViewport({x:ce+(Oe-Le.width*st)/2-Le.x*st,y:20+(kt-Le.height*st)/2-Le.y*st,zoom:st})},[P]),V=(0,k.useRef)(!0),q=(0,k.useRef)(Promise.resolve()),Y=(0,k.useRef)(!!i.error),Z=(0,k.useRef)(0),Q=(0,k.useRef)(0),ne=(0,k.useRef)(),X=(0,k.useRef)(g);X.current=g;let $=(0,k.useMemo)(()=>Mr(e,g,s,S,m,N),[e,g,s,S,m,N]),G=(0,k.useCallback)(A=>{c.current=A,a(A)},[]),K=(0,k.useCallback)((A,W=!1)=>{Y.current||(Z.current++,W&&Q.current++,q.current=q.current.then(async()=>{if(!V.current||Y.current)return;let J=c.current.revision,ce=()=>{if(!V.current||Y.current)return;let pe=W?n.initializePositions(A.positions??{}):n.savePatch(A,J);G(pe),h("\u5E03\u5C40\u5DF2\u4FDD\u5B58")};navigator.locks?await navigator.locks.request(n.key,ce):ce()}).catch(J=>{Y.current=!0,V.current&&u("\u5E03\u5C40\u672A\u4FDD\u5B58\uFF1A"+String(J))}).finally(()=>{Z.current--,W&&Q.current--}))},[n,G]),ee=tl($,E,A=>{let W=c.current.positions;Object.entries(A).some(([ce,pe])=>!W[ce]||Math.hypot(pe.x-W[ce].x,pe.y-W[ce].y)>.1)&&K({positions:Uc(e,W,A)})}),{nodes:j,setNodes:te}=ee,re=(0,k.useMemo)(()=>$.edges.map(A=>({...A,type:"straight",style:{stroke:"#47719a",strokeWidth:1.25,opacity:.56}})),[$.edges]);(0,k.useEffect)(()=>{if(e.loading||Y.current)return;let A=c.current.settings?.usage??{},W=e.sessions.map(J=>J.id);W.some(J=>!Object.hasOwn(A,J))&&K({settings:{usage:Zc(A,W)}})},[e.sessions,e.loading,s.settings?.usage,K]),(0,k.useEffect)(()=>{let A=setInterval(()=>M(Date.now()),6e4);return()=>clearInterval(A)},[]),(0,k.useEffect)(()=>{let A=window.matchMedia("(prefers-reduced-motion: reduce)"),W=()=>w(A.matches);return A.addEventListener("change",W),()=>A.removeEventListener("change",W)},[]),(0,k.useEffect)(()=>(V.current=!0,()=>{V.current=!1,clearTimeout(ne.current)}),[]),(0,k.useEffect)(()=>{te(A=>A.map(W=>({...W,selected:W.id===y})))},[y,te]),(0,k.useEffect)(()=>{let A=W=>{if(W.key===n.key){if(Z.current>Q.current){Y.current=!0,u("\u53E6\u4E00\u4E2A\u7A97\u53E3\u4FEE\u6539\u4E86\u5E03\u5C40\u3002\u8BF7\u91CD\u65B0\u8F7D\u5165\uFF0C\u518D\u7EE7\u7EED\u62D6\u52A8\u3002");return}try{let J=n.load();G(J),h("\u5E03\u5C40\u5DF2\u4ECE\u53E6\u4E00\u7A97\u53E3\u540C\u6B65")}catch(J){Y.current=!0,u("\u65E0\u6CD5\u540C\u6B65\u5E03\u5C40\uFF1A"+String(J))}}};return window.addEventListener("storage",A),()=>window.removeEventListener("storage",A)},[n,G]),(0,k.useEffect)(()=>{if(e.loading)return;let A=c.current.views[g.workspace]?.viewport,W=setTimeout(()=>{A?P.setViewport(A):B()},60);return()=>clearTimeout(W)},[g.workspace,e.loading,P,B]),(0,k.useEffect)(()=>{if(e.loading||Y.current)return;let A=$.nodes.filter(W=>!c.current.positions[W.id]);A.length&&K({positions:Object.fromEntries(A.map(W=>[W.id,W.position]))},!0)},[e.loading,$,K]),(0,k.useEffect)(()=>{if(!p)return;let A=setTimeout(()=>h(""),2400);return()=>clearTimeout(A)},[p]);let ie=async A=>{f(!0),Y.current||u("");try{if(clearTimeout(ne.current),K({views:{[X.current.workspace]:{viewport:P.getViewport()}}}),await q.current,!V.current)return;await A()}catch(W){u("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF1A"+String(W))}finally{V.current&&f(!1)}},se=A=>{let W={...X.current,...A};x(W),K({views:{all:{filters:W}}})},me=A=>{clearTimeout(ne.current);let W=X.current.workspace;K({views:{[W]:{viewport:P.getViewport()},all:{...W==="all"?{viewport:P.getViewport()}:{},filters:{...X.current,workspace:A}}}}),x(J=>({...J,workspace:A})),v(void 0)},oe=$.nodes.find(A=>A.id===y),Ce=()=>{ee.forceNextSync();let A=Mr(e,g,wn(),S,m),W=Object.fromEntries(j.map(J=>[J.id,J.position]));R(W),K({positions:Object.fromEntries(A.nodes.map(J=>[J.id,J.position]))}),setTimeout(()=>P.fitView({padding:.12,maxZoom:1}),70)},ke=A=>ie(async()=>{if(A.data.kind==="workspace"){A.data.virtual||await t.openWorkspace(A.data.entityId);return}if(A.data.archived)throw new Error("\u8BF7\u5148\u6062\u590D\u8FD9\u4E2A\u5F52\u6863\u4F1A\u8BDD");let W=A.data.entityId;K({settings:{usage:{...c.current.settings?.usage,[W]:Gc(c.current.settings?.usage?.[W])}}}),await q.current,V.current&&await t.openSession(W)}),Se=g.query||!!g.statuses?.length||g.recency&&g.recency!=="all"||g.frequency&&g.frequency!=="all"||g.status!=="all"||g.kind!=="all"||g.workspace!=="all"||g.archived,ze=jc(s.settings?.theme??Ge);return k.default.createElement("section",{className:"wg-root"+(s.settings?.reducedMotion?" wg-reduced":""),style:{"--wg-workspace":ze.workspace,"--wg-expanded":ze.expanded,"--wg-session":ze.session,"--wg-session-text":ze.sessionText,"--wg-accent":ze.accent},"aria-label":"\u5DE5\u4F5C\u533A\u56FE\u8C31"},k.default.createElement("header",{className:"wg-header"},k.default.createElement("div",{className:"wg-brand"},k.default.createElement("span",{className:"wg-logo"},"\u25C8"),k.default.createElement("div",null,k.default.createElement("h1",null,"\u5DE5\u4F5C\u533A\u56FE\u8C31",k.default.createElement("span",null,"WORKSPACE ATLAS")),k.default.createElement("p",null,e.workspaces.length," \u4E2A\u5DE5\u4F5C\u533A \xB7 ",$.total," \u4E2A\u4F1A\u8BDD",o?" \xB7 \u6F14\u793A\u6570\u636E":""))),k.default.createElement("div",{className:"wg-top-actions"},k.default.createElement("label",{className:"wg-search"},k.default.createElement("span",null,"\u2315"),k.default.createElement("input",{"aria-label":"\u641C\u7D22\u5DE5\u4F5C\u533A\u548C\u4F1A\u8BDD",placeholder:"\u641C\u7D22\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u2026",value:g.query,onChange:A=>se({query:A.target.value})})),k.default.createElement("button",{onClick:B},"\u9002\u5E94\u753B\u5E03"),k.default.createElement("button",{onClick:Ce},"\u91CD\u7F6E\u5E03\u5C40"))),(l||e.error)&&k.default.createElement("div",{className:"wg-alert",role:"alert"},k.default.createElement("span",null,l||e.error),Y.current&&k.default.createElement(k.default.Fragment,null,k.default.createElement("button",{onClick:()=>location.reload()},"\u91CD\u65B0\u8F7D\u5165"),k.default.createElement("button",{onClick:()=>{try{F({raw:n.storage.getItem(n.key)})}catch(A){u(String(A))}}},"\u91CD\u7F6E\u672C\u5730\u5E03\u5C40"),k.default.createElement("button",{onClick:()=>{try{let A=n.storage.getItem(n.key),W=URL.createObjectURL(new Blob([A??""],{type:"text/plain"})),J=document.createElement("a");J.href=W,J.download="workspace-graph-layout-backup.txt",J.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}catch(A){u(String(A))}}},"\u5BFC\u51FA\u5DF2\u4FDD\u5B58\u539F\u6587")),k.default.createElement("button",{onClick:()=>{let A=new Blob([JSON.stringify({...c.current,positions:{...c.current.positions,...Object.fromEntries(j.map(ce=>[ce.id,ce.position]))}},null,2)],{type:"application/json"}),W=URL.createObjectURL(A),J=document.createElement("a");J.href=W,J.download="workspace-graph-layout.json",J.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}},"\u5BFC\u51FA\u5F53\u524D\u5E03\u5C40")),H&&k.default.createElement("div",{className:"wg-alert",role:"alert"},k.default.createElement("span",null,"\u8FD9\u4F1A\u6E05\u9664\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u56FE\u8C31\u4F4D\u7F6E\u548C\u7B5B\u9009\u3002\u53EF\u5148\u5BFC\u51FA\u5907\u4EFD\u3002"),k.default.createElement("button",{onClick:()=>{try{let A=n.reset(H.raw);Y.current=!1,G(A),u(""),x(_t),F(void 0)}catch(A){u("\u65E0\u6CD5\u91CD\u7F6E\uFF1A"+String(A))}}},"\u786E\u8BA4\u91CD\u7F6E"),k.default.createElement("button",{onClick:()=>F(void 0)},"\u53D6\u6D88")),o&&k.default.createElement("div",{className:"wg-demo-label"},"\u4EA4\u4E92\u6F14\u793A \xB7 \u6570\u636E\u4EC5\u7528\u4E8E\u9884\u89C8"),k.default.createElement("div",{className:"wg-canvas",ref:D,onKeyDown:A=>{if(A.key!=="Enter"&&A.key!==" ")return;let W=A.target.closest(".react-flow__node")?.getAttribute("data-id"),J=j.find(ce=>ce.id===W);J?.data.kind==="workspace"&&(A.preventDefault(),v(J.id),b(ce=>{let pe=new Set(ce);return pe.has(J.data.entityId)?pe.delete(J.data.entityId):pe.add(J.data.entityId),pe}))}},k.default.createElement(Fc,{nodes:j,edges:re,nodeTypes:jh,onNodesChange:A=>te(W=>br(A,W)),onNodeDragStart:(A,W)=>{ee.drag(W.id,W.position)},onNodeDrag:(A,W)=>ee.drag(W.id,W.position),onNodeDragStop:(A,W)=>{ee.drag(W.id,W.position),ee.release(W.id)},autoPanOnNodeFocus:!1,autoPanOnNodeDrag:!1,zoomOnDoubleClick:!1,nodeDragThreshold:5,onNodeClick:(A,W)=>{v(W.id),W.data.kind==="workspace"&&b(J=>{let ce=new Set(J);return ce.has(W.data.entityId)?ce.delete(W.data.entityId):ce.add(W.data.entityId),ce})},onNodeDoubleClick:(A,W)=>{ke(W)},onPaneClick:()=>v(void 0),onMoveEnd:(A,W)=>{clearTimeout(ne.current);let J=X.current.workspace;ne.current=setTimeout(()=>K({views:{[J]:{viewport:W}}}),180)},minZoom:.1,maxZoom:3,nodesConnectable:!1,edgesReconnectable:!1,deleteKeyCode:null,selectionOnDrag:!1,multiSelectionKeyCode:null,selectionKeyCode:null,proOptions:{hideAttribution:!1},defaultViewport:s.views[g.workspace]?.viewport},k.default.createElement(Wc,{variant:Be.Dots,gap:26,size:1,color:"#284061"}),k.default.createElement(Xc,{position:"bottom-right",showInteractive:!1})),e.loading&&k.default.createElement("div",{className:"wg-empty",role:"status"},k.default.createElement("span",{className:"wg-empty-orb"},"\u25C8"),k.default.createElement("h2",null,"\u6B63\u5728\u8FDE\u63A5\u5DE5\u4F5C\u533A"),k.default.createElement("p",null,"\u8BFB\u53D6 Harness \u7684\u5DE5\u4F5C\u533A\u4E0E\u4F1A\u8BDD\u2026")),!e.loading&&Se&&$.matched===0&&k.default.createElement("div",{className:"wg-no-match",role:"status"},"\u6CA1\u6709\u5339\u914D\u7684\u4F1A\u8BDD\uFF1B\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u4F1A\u8BDD\u4ECD\u4FDD\u7559\u3002"),!e.loading&&!$.nodes.length&&k.default.createElement("div",{className:"wg-empty"},k.default.createElement("span",{className:"wg-empty-orb"},"\u2315"),k.default.createElement("h2",null,Se?"\u6CA1\u6709\u5339\u914D\u7684\u8282\u70B9":"\u4ECE\u4E00\u4E2A\u5DE5\u4F5C\u533A\u5F00\u59CB"),k.default.createElement("p",null,Se?"\u8C03\u6574\u5DE6\u4E0B\u89D2\u7684\u9009\u62E9\u6216\u6E05\u9664\u641C\u7D22\u3002":"\u5728 Harness \u4FA7\u680F\u6DFB\u52A0\u5DE5\u4F5C\u533A\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u663E\u793A\u3002"),Se&&k.default.createElement("button",{onClick:()=>{x(_t),K({views:{all:{filters:_t}}})}},"\u6E05\u9664\u7B5B\u9009")),k.default.createElement("div",{className:"wg-dock "+(I?"":"is-folded")},k.default.createElement("button",{className:"wg-dock-heading",onClick:()=>T(!I),"aria-expanded":I},k.default.createElement("span",null,"\u2637\u3000\u89C6\u56FE\u4E0E\u7B5B\u9009"),k.default.createElement("span",null,I?"\u2212":"+")),I&&k.default.createElement(k.default.Fragment,null,k.default.createElement("label",{className:"wg-field"},k.default.createElement("span",null,"\u5DE5\u4F5C\u533A"),k.default.createElement("select",{"aria-label":"\u9009\u62E9\u5DE5\u4F5C\u533A",value:g.workspace,onChange:A=>me(A.target.value)},k.default.createElement("option",{value:"all"},"\u5168\u90E8\u5DE5\u4F5C\u533A"),e.workspaces.map(A=>k.default.createElement("option",{key:A.id,value:A.id},A.title," \xB7"," ",A.path.split(/[\/]/).filter(Boolean).slice(-2).join("/"))),k.default.createElement("option",{value:"__ungrouped__"},"\u672A\u5206\u7EC4"))),k.default.createElement("div",{className:"wg-filter-row"},k.default.createElement("span",null,"\u72B6\u6001"),k.default.createElement("div",{className:"wg-chips"},["all","running","waiting","unread","idle","unknown"].map(A=>k.default.createElement("button",{key:A,className:(A==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(A))?"active":"","aria-pressed":A==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(A),onClick:()=>{let W=g.statuses??(g.status==="all"?[]:[g.status]);se({status:"all",statuses:A==="all"?[]:W.includes(A)?W.filter(J=>J!==A):[...W,A]})}},A!=="all"&&k.default.createElement("i",{style:{background:Pr[A]}}),A==="all"?"\u5168\u90E8":Ir[A])))),k.default.createElement("div",{className:"wg-filter-row"},k.default.createElement("span",null,"\u663E\u793A"),k.default.createElement("div",{className:"wg-chips"},["all","workspace","session"].map(A=>k.default.createElement("button",{key:A,className:g.kind===A?"active":"","aria-pressed":g.kind===A,onClick:()=>se({kind:A})},A==="all"?"\u5168\u90E8":A==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD")),k.default.createElement("label",{className:"wg-check"},k.default.createElement("input",{type:"checkbox",checked:g.archived,onChange:A=>se({archived:A.target.checked})}),"\u5F52\u6863"))),k.default.createElement(el,{color:s.settings?.theme??Ge,reduced:!!s.settings?.reducedMotion,onColor:A=>K({settings:{theme:A}}),onReduced:A=>K({settings:{reducedMotion:A}})}),k.default.createElement("div",{className:"wg-dock-foot"},k.default.createElement("label",null,"\u65F6\u95F4"," ",k.default.createElement("select",{"aria-label":"\u65F6\u95F4\u5206\u7C7B",value:g.recency??"all",onChange:A=>se({recency:A.target.value})},k.default.createElement("option",{value:"all"},"\u5168\u90E8\u65F6\u95F4"),Object.entries(_o).map(([A,W])=>k.default.createElement("option",{value:A,key:A},W)))),k.default.createElement("label",null,"\u9891\u7387"," ",k.default.createElement("select",{"aria-label":"\u9891\u7387\u5206\u7C7B",value:g.frequency??"all",onChange:A=>se({frequency:A.target.value})},k.default.createElement("option",{value:"all"},"\u5168\u90E8\u9891\u7387"),Object.entries(ko).map(([A,W])=>k.default.createElement("option",{value:A,key:A},W)))),k.default.createElement("span",{className:"wg-small-note"},"\u5E38\u7528\u6309\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\u8BA1\u6570\uFF1B30 \u5929\u5185 5 \u6B21\uFF0C\u95F4\u9694 30 \u5206\u949F\u3002\u5386\u53F2\u8BB0\u5F55\u4ECE\u672C\u7248\u672C\u5F00\u59CB\u7D2F\u8BA1\u3002"),k.default.createElement("span",null,$.nodes.length," \u4E2A\u53EF\u89C1\u8282\u70B9",$.hidden>0?" \xB7 "+$.hidden+" \u4E2A\u4F1A\u8BDD\u672A\u5C55\u5F00":""),k.default.createElement("button",{onClick:()=>{x(_t),K({views:{all:{filters:_t}}})}},"\u6E05\u9664\u7B5B\u9009")))),oe&&k.default.createElement("aside",{className:"wg-details","aria-label":"\u8282\u70B9\u8BE6\u60C5"},k.default.createElement("div",{className:"wg-detail-heading"},k.default.createElement("span",null,oe.data.kind==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD"),k.default.createElement("button",{"aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>v(void 0)},"\xD7")),k.default.createElement("h2",null,oe.data.title),k.default.createElement("div",{className:"wg-status",style:{color:Pr[oe.data.status]}},"\u25CF ",Ir[oe.data.status],oe.data.archived?" \xB7 \u5DF2\u5F52\u6863":""),k.default.createElement("dl",null,oe.data.kind==="session"&&k.default.createElement(k.default.Fragment,null,k.default.createElement("dt",null,"\u5206\u7C7B"),k.default.createElement("dd",null,oe.data.recency&&_o[oe.data.recency]," ","\xB7"," ",oe.data.frequency&&ko[oe.data.frequency]),k.default.createElement("dt",null,"\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\uFF08\u8FD1 30 \u5929\uFF09"),k.default.createElement("dd",null,s.settings?.usage?.[oe.data.entityId]?.visits.filter(A=>A>=Date.now()-30*864e5).length??"\u8BB0\u5F55\u79EF\u7D2F\u4E2D")),k.default.createElement("dt",null,"\u8DEF\u5F84"),k.default.createElement("dd",null,oe.data.path||"\u672A\u8BB0\u5F55\u76EE\u5F55"),k.default.createElement("dt",null,"\u6807\u8BC6"),k.default.createElement("dd",null,oe.data.entityId),oe.data.updatedAt&&k.default.createElement(k.default.Fragment,null,k.default.createElement("dt",null,"\u6700\u8FD1\u66F4\u65B0"),k.default.createElement("dd",null,new Date(oe.data.updatedAt).toLocaleString()))),oe.data.kind==="session"&&k.default.createElement("button",{onClick:()=>{let A=c.current.settings?.pinned??[];K({settings:{pinned:A.includes(oe.data.entityId)?A.filter(W=>W!==oe.data.entityId):[...A,oe.data.entityId]}})}},oe.data.pinned?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876\u4F1A\u8BDD"),oe.data.kind==="session"&&k.default.createElement(ol,{key:"summary:"+oe.id,value:s.settings?.manualSummaries?.[oe.data.entityId]??"",onSave:A=>K({settings:{manualSummaries:{...c.current.settings?.manualSummaries,[oe.data.entityId]:A}}})}),oe.data.kind==="workspace"?k.default.createElement(em,{key:oe.id,node:oe,actions:t,access:r,busy:d,perform:ie,open:()=>{ke(oe)},collapse:()=>b(A=>{let W=new Set(A);return W.has(oe.data.entityId)?W.delete(oe.data.entityId):W.add(oe.data.entityId),W}),more:()=>C(A=>({...A,[oe.data.entityId]:(A[oe.data.entityId]??20)+20}))}):k.default.createElement(tm,{key:oe.id,node:oe,actions:t,access:r,busy:d,perform:ie,open:()=>{ke(oe)}})),k.default.createElement("div",{className:"wg-canvas-hint"},"\u62D6\u52A8\u6C14\u6CE1\u6574\u7406 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53CC\u51FB\u6253\u5F00"),k.default.createElement("div",{className:"wg-save-status",role:"status"},p),z&&k.default.createElement("div",{className:"wg-undo"},"\u5DF2\u91CD\u6392\u5F53\u524D\u89C6\u56FE",k.default.createElement("button",{onClick:()=>{ee.forceNextSync(),K({positions:z}),R(void 0)}},"\u64A4\u9500"),k.default.createElement("button",{onClick:()=>R(void 0),"aria-label":"\u5173\u95ED\u64A4\u9500\u63D0\u793A"},"\xD7"))))}function em({node:e,actions:t,access:n,busy:o,perform:r,open:i,collapse:s,more:a}){let[c,l]=(0,k.useState)(!1),[u,d]=(0,k.useState)(e.data.title),f=n?.useCreate()??!0,p=n?.useWorkspace(e.data.entityId,"workspace/rename")??!0;return k.default.createElement("div",{className:"wg-detail-actions"},!e.data.virtual&&k.default.createElement(k.default.Fragment,null,k.default.createElement("button",{className:"wg-primary",disabled:o||!f,onClick:i},"\u6253\u5F00\u5DE5\u4F5C\u533A \u2197"),k.default.createElement("button",{disabled:o||!f,onClick:()=>{r(()=>t.newSession(e.data.entityId))}},"\u65B0\u5EFA\u4F1A\u8BDD"),p&&k.default.createElement("button",{disabled:o,onClick:()=>l(!c)},"\u91CD\u547D\u540D\u5DE5\u4F5C\u533A")),c&&k.default.createElement("form",{onSubmit:h=>{h.preventDefault(),u.trim()&&r(async()=>{await t.renameWorkspace(e.data.entityId,u.trim()),l(!1)})}},k.default.createElement("input",{"aria-label":"\u5DE5\u4F5C\u533A\u65B0\u540D\u79F0",value:u,onChange:h=>d(h.target.value)}),k.default.createElement("button",{disabled:o||!u.trim()},"\u4FDD\u5B58\u540D\u79F0")),k.default.createElement("button",{onClick:s},e.data.collapsed?"\u5C55\u5F00\u4F1A\u8BDD":"\u6536\u8D77\u4F1A\u8BDD"),!e.data.collapsed&&k.default.createElement("button",{onClick:a},"\u518D\u663E\u793A 20 \u4E2A\u4F1A\u8BDD"))}function tm({node:e,actions:t,access:n,busy:o,perform:r,open:i}){let s=n?.useSession(e.data.entityId,"workspace/archiveSession")??!0,a=n?.useSession(e.data.entityId,"workspace/unarchiveSession")??!0;return k.default.createElement("div",{className:"wg-detail-actions"},e.data.archived?k.default.createElement("button",{className:"wg-primary",disabled:o||!a,onClick:()=>{r(()=>t.restore(e.data.entityId))}},"\u6062\u590D\u4F1A\u8BDD"):k.default.createElement(k.default.Fragment,null,k.default.createElement("button",{className:"wg-primary",disabled:o,onClick:i},"\u6253\u5F00\u4F1A\u8BDD \u2197"),k.default.createElement("button",{disabled:o||!s,onClick:()=>{r(()=>t.archive(e.data.entityId))}},"\u5F52\u6863\u4F1A\u8BDD")),k.default.createElement("p",{className:"wg-small-note"},"\u4F4D\u7F6E\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002\u62D6\u52A8\u4E0D\u4F1A\u6539\u53D8\u4F1A\u8BDD\u6240\u5C5E\u3002"))}function il(e,t,n){let o=e,r=t,i=n,s=Object.values(r?.byId??{}).find(a=>(a.retainedBy?.mainView??0)>0)?.id;return{currentSessionId:s,loading:o?.phase!=="ready"||r?.phase!=="ready",error:o?.error?.message,workspaces:(o?.items??[]).map(a=>({id:a.workspaceId,title:a.title,path:a.path,sessionIds:a.sessionIds})),archivedSessionIds:[...o?.archivedSessionIds??[]],sessions:[...new Set([...r?.ids??[],...s?[s]:[]])].flatMap(a=>{let c=r?.byId[a];if(!c)return[];let l=i?.get(a);return[{id:a,title:c.title||c.displayTitle||"\u672A\u547D\u540D\u4F1A\u8BDD",cwd:c.cwd,parentId:c.parentId,updatedAt:c.updatedAt,running:r?.phase==="ready"?l?l.running:c.running:void 0,pending:!!l?.pendingInteraction,unread:l?.completionUnread,blank:c.blank,origin:c.origin}]})}}var sl=`.wg-root {
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
  width: 144px;
  text-align: center;
  --bubble-color: #6aabff;
  user-select: none;
}
.wg-orb {
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
  position: absolute;
  top: 22px;
  left: 28px;
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
.wg-root .is-working .wg-orb {
  border: 3px dashed #ffdd85;
  box-shadow: 0 0 0 3px #ffdd8520;
  animation: wg-breathe 2.6s ease-in-out infinite;
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
@keyframes wg-breathe {
  50% {
    box-shadow: 0 0 0 7px #ffdd8540;
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
`;var al=`/* this gets exported as style.css and can be used for the default theming */
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
`;var cl="workspace-graph",zr=e=>e;function rm(e){let t=e.useWorkspaces(zr),n=e.useSessions(zr),o=e.useSessionStatus(zr),r=it.default.useMemo(()=>il(t,n,o),[t,n,o]);return it.default.createElement(rl,{catalog:r,actions:e.actions,repository:e.repository,access:{useCreate:()=>e.useRemoteAccess("session/create"),useWorkspace:(i,s)=>e.useWorkspaceAccess(i,s),useSession:(i,s)=>e.useSessionAccess(i,s)}})}function im({size:e=18}){return it.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},it.default.createElement("path",{d:"m7 8 5 7m0 0 7-7M7 8h12"}),it.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),it.default.createElement("circle",{cx:"19",cy:"6",r:"3"}),it.default.createElement("circle",{cx:"12",cy:"18",r:"3"}))}var sm=["slots","uiWorkspace","uiSession","workspaces","sessions"];function am(e){let t;try{t=window.localStorage}catch{t={getItem(){throw new Error("Browser storage is unavailable")},setItem(){throw new Error("Browser storage is unavailable")}}}let n=new Eo(t,"dsh-workspace-graph:v1"),o={openSession:r=>e.uiWorkspace.openSession(r),openWorkspace:r=>e.uiWorkspace.openWorkspace(r),newSession:r=>e.uiWorkspace.startSession(r),archive:r=>e.uiWorkspace.archiveSession(r),restore:r=>e.uiWorkspace.unarchiveSession(r),renameWorkspace:async(r,i)=>{await e.workspaces.rename(r,i)}};e.effect(()=>{let r=document.createElement("style");return r.dataset.plugin="dsh-workspace-graph",r.textContent="@scope (.wg-root) { "+al+" }"+sl,document.head.append(r),()=>r.remove()}),e.slots.inject("main",()=>e.slots.register({name:"main",key:cl,inject:()=>({actions:o,repository:n})},rm)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:cl,order:85,label:"\u5DE5\u4F5C\u533A\u56FE\u8C31"},im))}
;return module.exports;}});