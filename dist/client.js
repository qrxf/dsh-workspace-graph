/* dsh-workspace-graph | MIT | React Flow (MIT) */
window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;"use strict";var Cu=Object.create;var qn=Object.defineProperty;var Mu=Object.getOwnPropertyDescriptor;var Iu=Object.getOwnPropertyNames;var Pu=Object.getPrototypeOf,zu=Object.prototype.hasOwnProperty;var Xn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Au=(e,t)=>{for(var n in t)qn(e,n,{get:t[n],enumerable:!0})},gi=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Iu(t))!zu.call(e,r)&&r!==n&&qn(e,r,{get:()=>t[r],enumerable:!(o=Mu(t,r))||o.enumerable});return e};var Ge=(e,t,n)=>(n=e!=null?Cu(Pu(e)):{},gi(t||!e||!e.__esModule?qn(n,"default",{value:e,enumerable:!0}):n,e)),Du=e=>gi(qn({},"__esModule",{value:!0}),e);var Qa=Xn(Ka=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=require("react");function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ip=typeof Object.is=="function"?Object.is:Mp,Pp=jt.useState,zp=jt.useEffect,Ap=jt.useLayoutEffect,Dp=jt.useDebugValue;function Op(e,t){var n=t(),o=Pp({inst:{value:n,getSnapshot:t}}),r=o[0].inst,s=o[1];return Ap(function(){r.value=n,r.getSnapshot=t,Yr(r)&&s({inst:r})},[e,n,t]),zp(function(){return Yr(r)&&s({inst:r}),e(function(){Yr(r)&&s({inst:r})})},[e]),Dp(n),n}function Yr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ip(e,n)}catch{return!0}}function Tp(e,t){return t()}var Lp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Tp:Op;Ka.useSyncExternalStore=jt.useSyncExternalStore!==void 0?jt.useSyncExternalStore:Lp});var ec=Xn((bv,Ja)=>{"use strict";Ja.exports=Qa()});var nc=Xn(tc=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=require("react"),$p=ec();function Hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bp=typeof Object.is=="function"?Object.is:Hp,Vp=$p.useSyncExternalStore,Fp=Ho.useRef,Rp=Ho.useEffect,Wp=Ho.useMemo,qp=Ho.useDebugValue;tc.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var s=Fp(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=Wp(function(){function c(p){if(!l){if(l=!0,d=p,p=o(p),r!==void 0&&i.hasValue){var h=i.value;if(r(h,p))return u=h}return u=p}if(h=u,Bp(d,p))return h;var g=o(p);return r!==void 0&&r(h,g)?(d=p,h):(d=p,u=g)}var l=!1,d,u,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,o,r]);var a=Vp(e,s[0],s[1]);return Rp(function(){i.hasValue=!0,i.value=a},[a]),qp(a),a}});var rc=Xn((kv,oc)=>{"use strict";oc.exports=nc()});var Nm={};Au(Nm,{apply:()=>Em,inject:()=>Sm});module.exports=Du(Nm);var mt=Ge(require("react"),1);var _=Ge(require("react"),1);var O=require("react/jsx-runtime"),T=require("react");function me(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=me(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Ou={value:()=>{}};function mi(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new Yn(n)}function Yn(e){this._=e}function Tu(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}Yn.prototype=mi.prototype={constructor:Yn,on:function(e,t){var n=this._,o=Tu(e+"",n),r,s=-1,i=o.length;if(arguments.length<2){for(;++s<i;)if((r=(e=o[s]).type)&&(r=Lu(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<i;)if(r=(e=o[s]).type)n[r]=hi(n[r],e.name,t);else if(t==null)for(r in n)n[r]=hi(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Yn(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,s;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],o=0,r=s.length;o<r;++o)s[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,s=o.length;r<s;++r)o[r].value.apply(t,n)}};function Lu(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function hi(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Ou,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var bt=mi;var Zn="http://www.w3.org/1999/xhtml",ir={svg:"http://www.w3.org/2000/svg",xhtml:Zn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ue(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),ir.hasOwnProperty(t)?{space:ir[t],local:e}:e}function $u(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Zn&&t.documentElement.namespaceURI===Zn?t.createElement(e):t.createElementNS(n,e)}}function Hu(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Gn(e){var t=Ue(e);return(t.local?Hu:$u)(t)}function Bu(){}function vt(e){return e==null?Bu:function(){return this.querySelector(e)}}function yi(e){typeof e!="function"&&(e=vt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var s=t[r],i=s.length,a=o[r]=new Array(i),c,l,d=0;d<i;++d)(c=s[d])&&(l=e.call(c,c.__data__,d,s))&&("__data__"in c&&(l.__data__=c.__data__),a[d]=l);return new ye(o,this._parents)}function sr(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Vu(){return[]}function cn(e){return e==null?Vu:function(){return this.querySelectorAll(e)}}function Fu(e){return function(){return sr(e.apply(this,arguments))}}function xi(e){typeof e=="function"?e=Fu(e):e=cn(e);for(var t=this._groups,n=t.length,o=[],r=[],s=0;s<n;++s)for(var i=t[s],a=i.length,c,l=0;l<a;++l)(c=i[l])&&(o.push(e.call(c,c.__data__,l,i)),r.push(c));return new ye(o,r)}function ln(e){return function(){return this.matches(e)}}function Un(e){return function(t){return t.matches(e)}}var Ru=Array.prototype.find;function Wu(e){return function(){return Ru.call(this.children,e)}}function qu(){return this.firstElementChild}function wi(e){return this.select(e==null?qu:Wu(typeof e=="function"?e:Un(e)))}var Xu=Array.prototype.filter;function Yu(){return Array.from(this.children)}function Zu(e){return function(){return Xu.call(this.children,e)}}function bi(e){return this.selectAll(e==null?Yu:Zu(typeof e=="function"?e:Un(e)))}function vi(e){typeof e!="function"&&(e=ln(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var s=t[r],i=s.length,a=o[r]=[],c,l=0;l<i;++l)(c=s[l])&&e.call(c,c.__data__,l,s)&&a.push(c);return new ye(o,this._parents)}function jn(e){return new Array(e.length)}function ki(){return new ye(this._enter||this._groups.map(jn),this._parents)}function un(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}un.prototype={constructor:un,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function _i(e){return function(){return e}}function Gu(e,t,n,o,r,s){for(var i=0,a,c=t.length,l=s.length;i<l;++i)(a=t[i])?(a.__data__=s[i],o[i]=a):n[i]=new un(e,s[i]);for(;i<c;++i)(a=t[i])&&(r[i]=a)}function Uu(e,t,n,o,r,s,i){var a,c,l=new Map,d=t.length,u=s.length,f=new Array(d),p;for(a=0;a<d;++a)(c=t[a])&&(f[a]=p=i.call(c,c.__data__,a,t)+"",l.has(p)?r[a]=c:l.set(p,c));for(a=0;a<u;++a)p=i.call(e,s[a],a,s)+"",(c=l.get(p))?(o[a]=c,c.__data__=s[a],l.delete(p)):n[a]=new un(e,s[a]);for(a=0;a<d;++a)(c=t[a])&&l.get(f[a])===c&&(r[a]=c)}function ju(e){return e.__data__}function Si(e,t){if(!arguments.length)return Array.from(this,ju);var n=t?Uu:Gu,o=this._parents,r=this._groups;typeof e!="function"&&(e=_i(e));for(var s=r.length,i=new Array(s),a=new Array(s),c=new Array(s),l=0;l<s;++l){var d=o[l],u=r[l],f=u.length,p=Ku(e.call(d,d&&d.__data__,l,o)),h=p.length,g=a[l]=new Array(h),x=i[l]=new Array(h),y=c[l]=new Array(f);n(d,u,g,x,y,p,t);for(var v=0,m=0,w,S;v<h;++v)if(w=g[v]){for(v>=m&&(m=v+1);!(S=x[m])&&++m<h;);w._next=S||null}}return i=new ye(i,o),i._enter=a,i._exit=c,i}function Ku(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Ei(){return new ye(this._exit||this._groups.map(jn),this._parents)}function Ni(e,t,n){var o=this.enter(),r=this,s=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?s.remove():n(s),o&&r?o.merge(r).order():r}function Ci(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,s=o.length,i=Math.min(r,s),a=new Array(r),c=0;c<i;++c)for(var l=n[c],d=o[c],u=l.length,f=a[c]=new Array(u),p,h=0;h<u;++h)(p=l[h]||d[h])&&(f[h]=p);for(;c<r;++c)a[c]=n[c];return new ye(a,this._parents)}function Mi(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,s=o[r],i;--r>=0;)(i=o[r])&&(s&&i.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(i,s),s=i);return this}function Ii(e){e||(e=Qu);function t(u,f){return u&&f?e(u.__data__,f.__data__):!u-!f}for(var n=this._groups,o=n.length,r=new Array(o),s=0;s<o;++s){for(var i=n[s],a=i.length,c=r[s]=new Array(a),l,d=0;d<a;++d)(l=i[d])&&(c[d]=l);c.sort(t)}return new ye(r,this._parents).order()}function Qu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Pi(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function zi(){return Array.from(this)}function Ai(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,s=o.length;r<s;++r){var i=o[r];if(i)return i}return null}function Di(){let e=0;for(let t of this)++e;return e}function Oi(){return!this.node()}function Ti(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],s=0,i=r.length,a;s<i;++s)(a=r[s])&&e.call(a,a.__data__,s,r);return this}function Ju(e){return function(){this.removeAttribute(e)}}function ed(e){return function(){this.removeAttributeNS(e.space,e.local)}}function td(e,t){return function(){this.setAttribute(e,t)}}function nd(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function od(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function rd(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Li(e,t){var n=Ue(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?ed:Ju:typeof t=="function"?n.local?rd:od:n.local?nd:td)(n,t))}function Kn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function id(e){return function(){this.style.removeProperty(e)}}function sd(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ad(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function $i(e,t,n){return arguments.length>1?this.each((t==null?id:typeof t=="function"?ad:sd)(e,t,n??"")):rt(this.node(),e)}function rt(e,t){return e.style.getPropertyValue(t)||Kn(e).getComputedStyle(e,null).getPropertyValue(t)}function cd(e){return function(){delete this[e]}}function ld(e,t){return function(){this[e]=t}}function ud(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Hi(e,t){return arguments.length>1?this.each((t==null?cd:typeof t=="function"?ud:ld)(e,t)):this.node()[e]}function Bi(e){return e.trim().split(/^|\s+/)}function ar(e){return e.classList||new Vi(e)}function Vi(e){this._node=e,this._names=Bi(e.getAttribute("class")||"")}Vi.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Fi(e,t){for(var n=ar(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Ri(e,t){for(var n=ar(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function dd(e){return function(){Fi(this,e)}}function fd(e){return function(){Ri(this,e)}}function pd(e,t){return function(){(t.apply(this,arguments)?Fi:Ri)(this,e)}}function Wi(e,t){var n=Bi(e+"");if(arguments.length<2){for(var o=ar(this.node()),r=-1,s=n.length;++r<s;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?pd:t?dd:fd)(n,t))}function gd(){this.textContent=""}function hd(e){return function(){this.textContent=e}}function md(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function qi(e){return arguments.length?this.each(e==null?gd:(typeof e=="function"?md:hd)(e)):this.node().textContent}function yd(){this.innerHTML=""}function xd(e){return function(){this.innerHTML=e}}function wd(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Xi(e){return arguments.length?this.each(e==null?yd:(typeof e=="function"?wd:xd)(e)):this.node().innerHTML}function bd(){this.nextSibling&&this.parentNode.appendChild(this)}function Yi(){return this.each(bd)}function vd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Zi(){return this.each(vd)}function Gi(e){var t=typeof e=="function"?e:Gn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function kd(){return null}function Ui(e,t){var n=typeof e=="function"?e:Gn(e),o=t==null?kd:typeof t=="function"?t:vt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function _d(){var e=this.parentNode;e&&e.removeChild(this)}function ji(){return this.each(_d)}function Sd(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ed(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ki(e){return this.select(e?Ed:Sd)}function Qi(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Nd(e){return function(t){e.call(this,t,this.__data__)}}function Cd(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Md(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,s;n<r;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++o]=s;++o?t.length=o:delete this.__on}}}function Id(e,t,n){return function(){var o=this.__on,r,s=Nd(t);if(o){for(var i=0,a=o.length;i<a;++i)if((r=o[i]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=t;return}}this.addEventListener(e.type,s,n),r={type:e.type,name:e.name,value:t,listener:s,options:n},o?o.push(r):this.__on=[r]}}function Ji(e,t,n){var o=Cd(e+""),r,s=o.length,i;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,d;c<l;++c)for(r=0,d=a[c];r<s;++r)if((i=o[r]).type===d.type&&i.name===d.name)return d.value}return}for(a=t?Id:Md,r=0;r<s;++r)this.each(a(o[r],t,n));return this}function es(e,t,n){var o=Kn(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Pd(e,t){return function(){return es(this,e,t)}}function zd(e,t){return function(){return es(this,e,t.apply(this,arguments))}}function ts(e,t){return this.each((typeof t=="function"?zd:Pd)(e,t))}function*ns(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,s=o.length,i;r<s;++r)(i=o[r])&&(yield i)}var cr=[null];function ye(e,t){this._groups=e,this._parents=t}function os(){return new ye([[document.documentElement]],cr)}function Ad(){return this}ye.prototype=os.prototype={constructor:ye,select:yi,selectAll:xi,selectChild:wi,selectChildren:bi,filter:vi,data:Si,enter:ki,exit:Ei,join:Ni,merge:Ci,selection:Ad,order:Mi,sort:Ii,call:Pi,nodes:zi,node:Ai,size:Di,empty:Oi,each:Ti,attr:Li,style:$i,property:Hi,classed:Wi,text:qi,html:Xi,raise:Yi,lower:Zi,append:Gi,insert:Ui,remove:ji,clone:Ki,datum:Qi,on:Ji,dispatch:ts,[Symbol.iterator]:ns};var je=os;function _e(e){return typeof e=="string"?new ye([[document.querySelector(e)]],[document.documentElement]):new ye([[e]],cr)}function rs(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Ce(e,t){if(e=rs(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var is={passive:!1},kt={capture:!0,passive:!1};function Qn(e){e.stopImmediatePropagation()}function it(e){e.preventDefault(),e.stopImmediatePropagation()}function dn(e){var t=e.document.documentElement,n=_e(e).on("dragstart.drag",it,kt);"onselectstart"in t?n.on("selectstart.drag",it,kt):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function fn(e,t){var n=e.document.documentElement,o=_e(e).on("dragstart.drag",null);t&&(o.on("click.drag",it,kt),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var pn=e=>()=>e;function gn(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:s,x:i,y:a,dx:c,dy:l,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:i,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:d}})}gn.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Dd(e){return!e.ctrlKey&&!e.button}function Od(){return this.parentNode}function Td(e,t){return t??{x:e.x,y:e.y}}function Ld(){return navigator.maxTouchPoints||"ontouchstart"in this}function Jn(){var e=Dd,t=Od,n=Td,o=Ld,r={},s=bt("start","drag","end"),i=0,a,c,l,d,u=0;function f(w){w.on("mousedown.drag",p).filter(o).on("touchstart.drag",x).on("touchmove.drag",y,is).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(w,S){if(!(d||!e.call(this,w,S))){var E=m(this,t.call(this,w,S),w,S,"mouse");E&&(_e(w.view).on("mousemove.drag",h,kt).on("mouseup.drag",g,kt),dn(w.view),Qn(w),l=!1,a=w.clientX,c=w.clientY,E("start",w))}}function h(w){if(it(w),!l){var S=w.clientX-a,E=w.clientY-c;l=S*S+E*E>u}r.mouse("drag",w)}function g(w){_e(w.view).on("mousemove.drag mouseup.drag",null),fn(w.view,l),it(w),r.mouse("end",w)}function x(w,S){if(e.call(this,w,S)){var E=w.changedTouches,C=t.call(this,w,S),z=E.length,P,V;for(P=0;P<z;++P)(V=m(this,C,w,S,E[P].identifier,E[P]))&&(Qn(w),V("start",w,E[P]))}}function y(w){var S=w.changedTouches,E=S.length,C,z;for(C=0;C<E;++C)(z=r[S[C].identifier])&&(it(w),z("drag",w,S[C]))}function v(w){var S=w.changedTouches,E=S.length,C,z;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),C=0;C<E;++C)(z=r[S[C].identifier])&&(Qn(w),z("end",w,S[C]))}function m(w,S,E,C,z,P){var V=s.copy(),L=Ce(P||E,S),F,H,b;if((b=n.call(w,new gn("beforestart",{sourceEvent:E,target:f,identifier:z,active:i,x:L[0],y:L[1],dx:0,dy:0,dispatch:V}),C))!=null)return F=b.x-L[0]||0,H=b.y-L[1]||0,function N(k,I,D){var A=L,R;switch(k){case"start":r[z]=N,R=i++;break;case"end":delete r[z],--i;case"drag":L=Ce(D||I,S),R=i;break}V.call(k,w,new gn(k,{sourceEvent:I,subject:b,target:f,identifier:z,active:R,x:L[0]+F,y:L[1]+H,dx:L[0]-A[0],dy:L[1]-A[1],dispatch:V}),C)}}return f.filter=function(w){return arguments.length?(e=typeof w=="function"?w:pn(!!w),f):e},f.container=function(w){return arguments.length?(t=typeof w=="function"?w:pn(w),f):t},f.subject=function(w){return arguments.length?(n=typeof w=="function"?w:pn(w),f):n},f.touchable=function(w){return arguments.length?(o=typeof w=="function"?w:pn(!!w),f):o},f.on=function(){var w=s.on.apply(s,arguments);return w===s?f:w},f.clickDistance=function(w){return arguments.length?(u=(w=+w)*w,f):Math.sqrt(u)},f}function eo(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function lr(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function yn(){}var hn=.7,oo=1/hn,Lt="\\s*([+-]?\\d+)\\s*",mn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",We="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$d=/^#([0-9a-f]{3,8})$/,Hd=new RegExp(`^rgb\\(${Lt},${Lt},${Lt}\\)$`),Bd=new RegExp(`^rgb\\(${We},${We},${We}\\)$`),Vd=new RegExp(`^rgba\\(${Lt},${Lt},${Lt},${mn}\\)$`),Fd=new RegExp(`^rgba\\(${We},${We},${We},${mn}\\)$`),Rd=new RegExp(`^hsl\\(${mn},${We},${We}\\)$`),Wd=new RegExp(`^hsla\\(${mn},${We},${We},${mn}\\)$`),ss={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};eo(yn,Fe,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:as,formatHex:as,formatHex8:qd,formatHsl:Xd,formatRgb:cs,toString:cs});function as(){return this.rgb().formatHex()}function qd(){return this.rgb().formatHex8()}function Xd(){return gs(this).formatHsl()}function cs(){return this.rgb().formatRgb()}function Fe(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=$d.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ls(t):n===3?new Ae(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?to(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?to(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Hd.exec(e))?new Ae(t[1],t[2],t[3],1):(t=Bd.exec(e))?new Ae(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Vd.exec(e))?to(t[1],t[2],t[3],t[4]):(t=Fd.exec(e))?to(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Rd.exec(e))?fs(t[1],t[2]/100,t[3]/100,1):(t=Wd.exec(e))?fs(t[1],t[2]/100,t[3]/100,t[4]):ss.hasOwnProperty(e)?ls(ss[e]):e==="transparent"?new Ae(NaN,NaN,NaN,0):null}function ls(e){return new Ae(e>>16&255,e>>8&255,e&255,1)}function to(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ae(e,t,n,o)}function Yd(e){return e instanceof yn||(e=Fe(e)),e?(e=e.rgb(),new Ae(e.r,e.g,e.b,e.opacity)):new Ae}function $t(e,t,n,o){return arguments.length===1?Yd(e):new Ae(e,t,n,o??1)}function Ae(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}eo(Ae,$t,lr(yn,{brighter(e){return e=e==null?oo:Math.pow(oo,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?hn:Math.pow(hn,e),new Ae(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ae(St(this.r),St(this.g),St(this.b),ro(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:us,formatHex:us,formatHex8:Zd,formatRgb:ds,toString:ds}));function us(){return`#${_t(this.r)}${_t(this.g)}${_t(this.b)}`}function Zd(){return`#${_t(this.r)}${_t(this.g)}${_t(this.b)}${_t((isNaN(this.opacity)?1:this.opacity)*255)}`}function ds(){let e=ro(this.opacity);return`${e===1?"rgb(":"rgba("}${St(this.r)}, ${St(this.g)}, ${St(this.b)}${e===1?")":`, ${e})`}`}function ro(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function St(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function _t(e){return e=St(e),(e<16?"0":"")+e.toString(16)}function fs(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ve(e,t,n,o)}function gs(e){if(e instanceof Ve)return new Ve(e.h,e.s,e.l,e.opacity);if(e instanceof yn||(e=Fe(e)),!e)return new Ve;if(e instanceof Ve)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),s=Math.max(t,n,o),i=NaN,a=s-r,c=(s+r)/2;return a?(t===s?i=(n-o)/a+(n<o)*6:n===s?i=(o-t)/a+2:i=(t-n)/a+4,a/=c<.5?s+r:2-s-r,i*=60):a=c>0&&c<1?0:i,new Ve(i,a,c,e.opacity)}function hs(e,t,n,o){return arguments.length===1?gs(e):new Ve(e,t,n,o??1)}function Ve(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}eo(Ve,hs,lr(yn,{brighter(e){return e=e==null?oo:Math.pow(oo,e),new Ve(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?hn:Math.pow(hn,e),new Ve(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Ae(ur(e>=240?e-240:e+120,r,o),ur(e,r,o),ur(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new Ve(ps(this.h),no(this.s),no(this.l),ro(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=ro(this.opacity);return`${e===1?"hsl(":"hsla("}${ps(this.h)}, ${no(this.s)*100}%, ${no(this.l)*100}%${e===1?")":`, ${e})`}`}}));function ps(e){return e=(e||0)%360,e<0?e+360:e}function no(e){return Math.max(0,Math.min(1,e||0))}function ur(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function dr(e,t,n,o,r){var s=e*e,i=s*e;return((1-3*e+3*s-i)*t+(4-6*s+3*i)*n+(1+3*e+3*s-3*i)*o+i*r)/6}function ms(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],s=e[o+1],i=o>0?e[o-1]:2*r-s,a=o<t-1?e[o+2]:2*s-r;return dr((n-o/t)*t,i,r,s,a)}}function ys(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],s=e[o%t],i=e[(o+1)%t],a=e[(o+2)%t];return dr((n-o/t)*t,r,s,i,a)}}var xn=e=>()=>e;function Gd(e,t){return function(n){return e+n*t}}function Ud(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function xs(e){return(e=+e)==1?io:function(t,n){return n-t?Ud(t,n,e):xn(isNaN(t)?n:t)}}function io(e,t){var n=t-e;return n?Gd(e,n):xn(isNaN(e)?t:e)}var Et=(function e(t){var n=xs(t);function o(r,s){var i=n((r=$t(r)).r,(s=$t(s)).r),a=n(r.g,s.g),c=n(r.b,s.b),l=io(r.opacity,s.opacity);return function(d){return r.r=i(d),r.g=a(d),r.b=c(d),r.opacity=l(d),r+""}}return o.gamma=e,o})(1);function ws(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),s=new Array(n),i,a;for(i=0;i<n;++i)a=$t(t[i]),o[i]=a.r||0,r[i]=a.g||0,s[i]=a.b||0;return o=e(o),r=e(r),s=e(s),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=s(c),a+""}}}var jd=ws(ms),Kd=ws(ys);function bs(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(s){for(r=0;r<n;++r)o[r]=e[r]*(1-s)+t[r]*s;return o}}function vs(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ks(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),s=new Array(n),i;for(i=0;i<o;++i)r[i]=Ke(e[i],t[i]);for(;i<n;++i)s[i]=t[i];return function(a){for(i=0;i<o;++i)s[i]=r[i](a);return s}}function _s(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function Me(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Ss(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Ke(e[r],t[r]):o[r]=t[r];return function(s){for(r in n)o[r]=n[r](s);return o}}var pr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fr=new RegExp(pr.source,"g");function Qd(e){return function(){return e}}function Jd(e){return function(t){return e(t)+""}}function wn(e,t){var n=pr.lastIndex=fr.lastIndex=0,o,r,s,i=-1,a=[],c=[];for(e=e+"",t=t+"";(o=pr.exec(e))&&(r=fr.exec(t));)(s=r.index)>n&&(s=t.slice(n,s),a[i]?a[i]+=s:a[++i]=s),(o=o[0])===(r=r[0])?a[i]?a[i]+=r:a[++i]=r:(a[++i]=null,c.push({i,x:Me(o,r)})),n=fr.lastIndex;return n<t.length&&(s=t.slice(n),a[i]?a[i]+=s:a[++i]=s),a.length<2?c[0]?Jd(c[0].x):Qd(t):(t=c.length,function(l){for(var d=0,u;d<t;++d)a[(u=c[d]).i]=u.x(l);return a.join("")})}function Ke(e,t){var n=typeof t,o;return t==null||n==="boolean"?xn(t):(n==="number"?Me:n==="string"?(o=Fe(t))?(t=o,Et):wn:t instanceof Fe?Et:t instanceof Date?_s:vs(t)?bs:Array.isArray(t)?ks:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ss:Me)(e,t)}var Es=180/Math.PI,so={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function gr(e,t,n,o,r,s){var i,a,c;return(i=Math.sqrt(e*e+t*t))&&(e/=i,t/=i),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,i=-i),{translateX:r,translateY:s,rotate:Math.atan2(t,e)*Es,skewX:Math.atan(c)*Es,scaleX:i,scaleY:a}}var ao;function Ns(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?so:gr(t.a,t.b,t.c,t.d,t.e,t.f)}function Cs(e){return e==null?so:(ao||(ao=document.createElementNS("http://www.w3.org/2000/svg","g")),ao.setAttribute("transform",e),(e=ao.transform.baseVal.consolidate())?(e=e.matrix,gr(e.a,e.b,e.c,e.d,e.e,e.f)):so)}function Ms(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function s(l,d,u,f,p,h){if(l!==u||d!==f){var g=p.push("translate(",null,t,null,n);h.push({i:g-4,x:Me(l,u)},{i:g-2,x:Me(d,f)})}else(u||f)&&p.push("translate("+u+t+f+n)}function i(l,d,u,f){l!==d?(l-d>180?d+=360:d-l>180&&(l+=360),f.push({i:u.push(r(u)+"rotate(",null,o)-2,x:Me(l,d)})):d&&u.push(r(u)+"rotate("+d+o)}function a(l,d,u,f){l!==d?f.push({i:u.push(r(u)+"skewX(",null,o)-2,x:Me(l,d)}):d&&u.push(r(u)+"skewX("+d+o)}function c(l,d,u,f,p,h){if(l!==u||d!==f){var g=p.push(r(p)+"scale(",null,",",null,")");h.push({i:g-4,x:Me(l,u)},{i:g-2,x:Me(d,f)})}else(u!==1||f!==1)&&p.push(r(p)+"scale("+u+","+f+")")}return function(l,d){var u=[],f=[];return l=e(l),d=e(d),s(l.translateX,l.translateY,d.translateX,d.translateY,u,f),i(l.rotate,d.rotate,u,f),a(l.skewX,d.skewX,u,f),c(l.scaleX,l.scaleY,d.scaleX,d.scaleY,u,f),l=d=null,function(p){for(var h=-1,g=f.length,x;++h<g;)u[(x=f[h]).i]=x.x(p);return u.join("")}}}var hr=Ms(Ns,"px, ","px)","deg)"),mr=Ms(Cs,", ",")",")");var ef=1e-12;function Is(e){return((e=Math.exp(e))+1/e)/2}function tf(e){return((e=Math.exp(e))-1/e)/2}function nf(e){return((e=Math.exp(2*e))-1)/(e+1)}var Nt=(function e(t,n,o){function r(s,i){var a=s[0],c=s[1],l=s[2],d=i[0],u=i[1],f=i[2],p=d-a,h=u-c,g=p*p+h*h,x,y;if(g<ef)y=Math.log(f/l)/t,x=function(C){return[a+C*p,c+C*h,l*Math.exp(t*C*y)]};else{var v=Math.sqrt(g),m=(f*f-l*l+o*g)/(2*l*n*v),w=(f*f-l*l-o*g)/(2*f*n*v),S=Math.log(Math.sqrt(m*m+1)-m),E=Math.log(Math.sqrt(w*w+1)-w);y=(E-S)/t,x=function(C){var z=C*y,P=Is(S),V=l/(n*v)*(P*nf(t*z+S)-tf(S));return[a+V*p,c+V*h,l*P/Is(t*z+S)]}}return x.duration=y*1e3*t/Math.SQRT2,x}return r.rho=function(s){var i=Math.max(.001,+s),a=i*i,c=a*a;return e(i,a,c)},r})(Math.SQRT2,2,4);var Ht=0,vn=0,bn=0,zs=1e3,co,kn,lo=0,Ct=0,uo=0,_n=typeof performance=="object"&&performance.now?performance:Date,As=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function En(){return Ct||(As(of),Ct=_n.now()+uo)}function of(){Ct=0}function Sn(){this._call=this._time=this._next=null}Sn.prototype=fo.prototype={constructor:Sn,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?En():+n)+(t==null?0:+t),!this._next&&kn!==this&&(kn?kn._next=this:co=this,kn=this),this._call=e,this._time=n,yr()},stop:function(){this._call&&(this._call=null,this._time=1/0,yr())}};function fo(e,t,n){var o=new Sn;return o.restart(e,t,n),o}function Ds(){En(),++Ht;for(var e=co,t;e;)(t=Ct-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ht}function Ps(){Ct=(lo=_n.now())+uo,Ht=vn=0;try{Ds()}finally{Ht=0,sf(),Ct=0}}function rf(){var e=_n.now(),t=e-lo;t>zs&&(uo-=t,lo=e)}function sf(){for(var e,t=co,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:co=n);kn=e,yr(o)}function yr(e){if(!Ht){vn&&(vn=clearTimeout(vn));var t=e-Ct;t>24?(e<1/0&&(vn=setTimeout(Ps,e-_n.now()-uo)),bn&&(bn=clearInterval(bn))):(bn||(lo=_n.now(),bn=setInterval(rf,zs)),Ht=1,As(Ps))}}function po(e,t,n){var o=new Sn;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}var af=bt("start","end","cancel","interrupt"),cf=[],Ls=0,Os=1,ho=2,go=3,Ts=4,mo=5,Nn=6;function st(e,t,n,o,r,s){var i=e.__transition;if(!i)e.__transition={};else if(n in i)return;lf(e,n,{name:t,index:o,group:r,on:af,tween:cf,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Ls})}function Cn(e,t){var n=ve(e,t);if(n.state>Ls)throw new Error("too late; already scheduled");return n}function Se(e,t){var n=ve(e,t);if(n.state>go)throw new Error("too late; already running");return n}function ve(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function lf(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=fo(s,0,n.time);function s(l){n.state=Os,n.timer.restart(i,n.delay,n.time),n.delay<=l&&i(l-n.delay)}function i(l){var d,u,f,p;if(n.state!==Os)return c();for(d in o)if(p=o[d],p.name===n.name){if(p.state===go)return po(i);p.state===Ts?(p.state=Nn,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[d]):+d<t&&(p.state=Nn,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[d])}if(po(function(){n.state===go&&(n.state=Ts,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=ho,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ho){for(n.state=go,r=new Array(f=n.tween.length),d=0,u=-1;d<f;++d)(p=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(r[++u]=p);r.length=u+1}}function a(l){for(var d=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=mo,1),u=-1,f=r.length;++u<f;)r[u].call(e,d);n.state===mo&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Nn,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function Mt(e,t){var n=e.__transition,o,r,s=!0,i;if(n){t=t==null?null:t+"";for(i in n){if((o=n[i]).name!==t){s=!1;continue}r=o.state>ho&&o.state<mo,o.state=Nn,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[i]}s&&delete e.__transition}}function $s(e){return this.each(function(){Mt(this,e)})}function uf(e,t){var n,o;return function(){var r=Se(this,e),s=r.tween;if(s!==n){o=n=s;for(var i=0,a=o.length;i<a;++i)if(o[i].name===t){o=o.slice(),o.splice(i,1);break}}r.tween=o}}function df(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var s=Se(this,e),i=s.tween;if(i!==o){r=(o=i).slice();for(var a={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}s.tween=r}}function Hs(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ve(this.node(),n).tween,r=0,s=o.length,i;r<s;++r)if((i=o[r]).name===e)return i.value;return null}return this.each((t==null?uf:df)(n,e,t))}function Bt(e,t,n){var o=e._id;return e.each(function(){var r=Se(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ve(r,o).value[t]}}function yo(e,t){var n;return(typeof t=="number"?Me:t instanceof Fe?Et:(n=Fe(t))?(t=n,Et):wn)(e,t)}function ff(e){return function(){this.removeAttribute(e)}}function pf(e){return function(){this.removeAttributeNS(e.space,e.local)}}function gf(e,t,n){var o,r=n+"",s;return function(){var i=this.getAttribute(e);return i===r?null:i===o?s:s=t(o=i,n)}}function hf(e,t,n){var o,r=n+"",s;return function(){var i=this.getAttributeNS(e.space,e.local);return i===r?null:i===o?s:s=t(o=i,n)}}function mf(e,t,n){var o,r,s;return function(){var i,a=n(this),c;return a==null?void this.removeAttribute(e):(i=this.getAttribute(e),c=a+"",i===c?null:i===o&&c===r?s:(r=c,s=t(o=i,a)))}}function yf(e,t,n){var o,r,s;return function(){var i,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(i=this.getAttributeNS(e.space,e.local),c=a+"",i===c?null:i===o&&c===r?s:(r=c,s=t(o=i,a)))}}function Bs(e,t){var n=Ue(e),o=n==="transform"?mr:yo;return this.attrTween(e,typeof t=="function"?(n.local?yf:mf)(n,o,Bt(this,"attr."+e,t)):t==null?(n.local?pf:ff)(n):(n.local?hf:gf)(n,o,t))}function xf(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function wf(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function bf(e,t){var n,o;function r(){var s=t.apply(this,arguments);return s!==o&&(n=(o=s)&&wf(e,s)),n}return r._value=t,r}function vf(e,t){var n,o;function r(){var s=t.apply(this,arguments);return s!==o&&(n=(o=s)&&xf(e,s)),n}return r._value=t,r}function Vs(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=Ue(e);return this.tween(n,(o.local?bf:vf)(o,t))}function kf(e,t){return function(){Cn(this,e).delay=+t.apply(this,arguments)}}function _f(e,t){return t=+t,function(){Cn(this,e).delay=t}}function Fs(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?kf:_f)(t,e)):ve(this.node(),t).delay}function Sf(e,t){return function(){Se(this,e).duration=+t.apply(this,arguments)}}function Ef(e,t){return t=+t,function(){Se(this,e).duration=t}}function Rs(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Sf:Ef)(t,e)):ve(this.node(),t).duration}function Nf(e,t){if(typeof t!="function")throw new Error;return function(){Se(this,e).ease=t}}function Ws(e){var t=this._id;return arguments.length?this.each(Nf(t,e)):ve(this.node(),t).ease}function Cf(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Se(this,e).ease=n}}function qs(e){if(typeof e!="function")throw new Error;return this.each(Cf(this._id,e))}function Xs(e){typeof e!="function"&&(e=ln(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var s=t[r],i=s.length,a=o[r]=[],c,l=0;l<i;++l)(c=s[l])&&e.call(c,c.__data__,l,s)&&a.push(c);return new Ie(o,this._parents,this._name,this._id)}function Ys(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,s=Math.min(o,r),i=new Array(o),a=0;a<s;++a)for(var c=t[a],l=n[a],d=c.length,u=i[a]=new Array(d),f,p=0;p<d;++p)(f=c[p]||l[p])&&(u[p]=f);for(;a<o;++a)i[a]=t[a];return new Ie(i,this._parents,this._name,this._id)}function Mf(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function If(e,t,n){var o,r,s=Mf(t)?Cn:Se;return function(){var i=s(this,e),a=i.on;a!==o&&(r=(o=a).copy()).on(t,n),i.on=r}}function Zs(e,t){var n=this._id;return arguments.length<2?ve(this.node(),n).on.on(e):this.each(If(n,e,t))}function Pf(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Gs(){return this.on("end.remove",Pf(this._id))}function Us(e){var t=this._name,n=this._id;typeof e!="function"&&(e=vt(e));for(var o=this._groups,r=o.length,s=new Array(r),i=0;i<r;++i)for(var a=o[i],c=a.length,l=s[i]=new Array(c),d,u,f=0;f<c;++f)(d=a[f])&&(u=e.call(d,d.__data__,f,a))&&("__data__"in d&&(u.__data__=d.__data__),l[f]=u,st(l[f],t,n,f,l,ve(d,n)));return new Ie(s,this._parents,t,n)}function js(e){var t=this._name,n=this._id;typeof e!="function"&&(e=cn(e));for(var o=this._groups,r=o.length,s=[],i=[],a=0;a<r;++a)for(var c=o[a],l=c.length,d,u=0;u<l;++u)if(d=c[u]){for(var f=e.call(d,d.__data__,u,c),p,h=ve(d,n),g=0,x=f.length;g<x;++g)(p=f[g])&&st(p,t,n,g,f,h);s.push(f),i.push(d)}return new Ie(s,i,t,n)}var zf=je.prototype.constructor;function Ks(){return new zf(this._groups,this._parents)}function Af(e,t){var n,o,r;return function(){var s=rt(this,e),i=(this.style.removeProperty(e),rt(this,e));return s===i?null:s===n&&i===o?r:r=t(n=s,o=i)}}function Qs(e){return function(){this.style.removeProperty(e)}}function Df(e,t,n){var o,r=n+"",s;return function(){var i=rt(this,e);return i===r?null:i===o?s:s=t(o=i,n)}}function Of(e,t,n){var o,r,s;return function(){var i=rt(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),rt(this,e))),i===c?null:i===o&&c===r?s:(r=c,s=t(o=i,a))}}function Tf(e,t){var n,o,r,s="style."+t,i="end."+s,a;return function(){var c=Se(this,e),l=c.on,d=c.value[s]==null?a||(a=Qs(t)):void 0;(l!==n||r!==d)&&(o=(n=l).copy()).on(i,r=d),c.on=o}}function Js(e,t,n){var o=(e+="")=="transform"?hr:yo;return t==null?this.styleTween(e,Af(e,o)).on("end.style."+e,Qs(e)):typeof t=="function"?this.styleTween(e,Of(e,o,Bt(this,"style."+e,t))).each(Tf(this._id,e)):this.styleTween(e,Df(e,o,t),n).on("end.style."+e,null)}function Lf(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function $f(e,t,n){var o,r;function s(){var i=t.apply(this,arguments);return i!==r&&(o=(r=i)&&Lf(e,i,n)),o}return s._value=t,s}function ea(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,$f(e,t,n??""))}function Hf(e){return function(){this.textContent=e}}function Bf(e){return function(){var t=e(this);this.textContent=t??""}}function ta(e){return this.tween("text",typeof e=="function"?Bf(Bt(this,"text",e)):Hf(e==null?"":e+""))}function Vf(e){return function(t){this.textContent=e.call(this,t)}}function Ff(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Vf(r)),t}return o._value=e,o}function na(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Ff(e))}function oa(){for(var e=this._name,t=this._id,n=xo(),o=this._groups,r=o.length,s=0;s<r;++s)for(var i=o[s],a=i.length,c,l=0;l<a;++l)if(c=i[l]){var d=ve(c,t);st(c,e,n,l,i,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ie(o,this._parents,e,n)}function ra(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(s,i){var a={value:i},c={value:function(){--r===0&&s()}};n.each(function(){var l=Se(this,o),d=l.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&s()})}var Rf=0;function Ie(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function ia(e){return je().transition(e)}function xo(){return++Rf}var Qe=je.prototype;Ie.prototype=ia.prototype={constructor:Ie,select:Us,selectAll:js,selectChild:Qe.selectChild,selectChildren:Qe.selectChildren,filter:Xs,merge:Ys,selection:Ks,transition:oa,call:Qe.call,nodes:Qe.nodes,node:Qe.node,size:Qe.size,empty:Qe.empty,each:Qe.each,on:Zs,attr:Bs,attrTween:Vs,style:Js,styleTween:ea,text:ta,textTween:na,remove:Gs,tween:Hs,delay:Fs,duration:Rs,ease:Ws,easeVarying:qs,end:ra,[Symbol.iterator]:Qe[Symbol.iterator]};function wo(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Wf={time:null,delay:0,duration:250,ease:wo};function qf(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function sa(e){var t,n;e instanceof Ie?(t=e._id,e=e._name):(t=xo(),(n=Wf).time=En(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,s=0;s<r;++s)for(var i=o[s],a=i.length,c,l=0;l<a;++l)(c=i[l])&&st(c,e,t,l,i,n||qf(c,t));return new Ie(o,this._parents,e,t)}je.prototype.interrupt=$s;je.prototype.transition=sa;var Mn=e=>()=>e;function xr(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function Re(e,t,n){this.k=e,this.x=t,this.y=n}Re.prototype={constructor:Re,scale:function(e){return e===1?this:new Re(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Re(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var It=new Re(1,0,0);In.prototype=Re.prototype;function In(e){for(;!e.__zoom;)if(!(e=e.parentNode))return It;return e.__zoom}function bo(e){e.stopImmediatePropagation()}function Vt(e){e.preventDefault(),e.stopImmediatePropagation()}function Xf(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Yf(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function aa(){return this.__zoom||It}function Zf(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Gf(){return navigator.maxTouchPoints||"ontouchstart"in this}function Uf(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],i=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),i>s?(s+i)/2:Math.min(0,s)||Math.max(0,i))}function vo(){var e=Xf,t=Yf,n=Uf,o=Zf,r=Gf,s=[0,1/0],i=[[-1/0,-1/0],[1/0,1/0]],a=250,c=Nt,l=bt("start","zoom","end"),d,u,f,p=500,h=150,g=0,x=10;function y(b){b.property("__zoom",aa).on("wheel.zoom",z,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",V).filter(r).on("touchstart.zoom",L).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}y.transform=function(b,N,k,I){var D=b.selection?b.selection():b;D.property("__zoom",aa),b!==D?S(b,N,k,I):D.interrupt().each(function(){E(this,arguments).event(I).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},y.scaleBy=function(b,N,k,I){y.scaleTo(b,function(){var D=this.__zoom.k,A=typeof N=="function"?N.apply(this,arguments):N;return D*A},k,I)},y.scaleTo=function(b,N,k,I){y.transform(b,function(){var D=t.apply(this,arguments),A=this.__zoom,R=k==null?w(D):typeof k=="function"?k.apply(this,arguments):k,B=A.invert(R),X=typeof N=="function"?N.apply(this,arguments):N;return n(m(v(A,X),R,B),D,i)},k,I)},y.translateBy=function(b,N,k,I){y.transform(b,function(){return n(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof k=="function"?k.apply(this,arguments):k),t.apply(this,arguments),i)},null,I)},y.translateTo=function(b,N,k,I,D){y.transform(b,function(){var A=t.apply(this,arguments),R=this.__zoom,B=I==null?w(A):typeof I=="function"?I.apply(this,arguments):I;return n(It.translate(B[0],B[1]).scale(R.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof k=="function"?-k.apply(this,arguments):-k),A,i)},I,D)};function v(b,N){return N=Math.max(s[0],Math.min(s[1],N)),N===b.k?b:new Re(N,b.x,b.y)}function m(b,N,k){var I=N[0]-k[0]*b.k,D=N[1]-k[1]*b.k;return I===b.x&&D===b.y?b:new Re(b.k,I,D)}function w(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function S(b,N,k,I){b.on("start.zoom",function(){E(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){E(this,arguments).event(I).end()}).tween("zoom",function(){var D=this,A=arguments,R=E(D,A).event(I),B=t.apply(D,A),X=k==null?w(B):typeof k=="function"?k.apply(D,A):k,Q=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),Z=D.__zoom,K=typeof N=="function"?N.apply(D,A):N,ne=c(Z.invert(X).concat(Q/Z.k),K.invert(X).concat(Q/K.k));return function(Y){if(Y===1)Y=K;else{var $=ne(Y),q=Q/$[2];Y=new Re(q,X[0]-$[0]*q,X[1]-$[1]*q)}R.zoom(null,Y)}})}function E(b,N,k){return!k&&b.__zooming||new C(b,N)}function C(b,N){this.that=b,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(b,N),this.taps=0}C.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,N){return this.mouse&&b!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var N=_e(this.that).datum();l.call(b,this.that,new xr(b,{sourceEvent:this.sourceEvent,target:y,type:b,transform:this.that.__zoom,dispatch:l}),N)}};function z(b,...N){if(!e.apply(this,arguments))return;var k=E(this,N).event(b),I=this.__zoom,D=Math.max(s[0],Math.min(s[1],I.k*Math.pow(2,o.apply(this,arguments)))),A=Ce(b);if(k.wheel)(k.mouse[0][0]!==A[0]||k.mouse[0][1]!==A[1])&&(k.mouse[1]=I.invert(k.mouse[0]=A)),clearTimeout(k.wheel);else{if(I.k===D)return;k.mouse=[A,I.invert(A)],Mt(this),k.start()}Vt(b),k.wheel=setTimeout(R,h),k.zoom("mouse",n(m(v(I,D),k.mouse[0],k.mouse[1]),k.extent,i));function R(){k.wheel=null,k.end()}}function P(b,...N){if(f||!e.apply(this,arguments))return;var k=b.currentTarget,I=E(this,N,!0).event(b),D=_e(b.view).on("mousemove.zoom",X,!0).on("mouseup.zoom",Q,!0),A=Ce(b,k),R=b.clientX,B=b.clientY;dn(b.view),bo(b),I.mouse=[A,this.__zoom.invert(A)],Mt(this),I.start();function X(Z){if(Vt(Z),!I.moved){var K=Z.clientX-R,ne=Z.clientY-B;I.moved=K*K+ne*ne>g}I.event(Z).zoom("mouse",n(m(I.that.__zoom,I.mouse[0]=Ce(Z,k),I.mouse[1]),I.extent,i))}function Q(Z){D.on("mousemove.zoom mouseup.zoom",null),fn(Z.view,I.moved),Vt(Z),I.event(Z).end()}}function V(b,...N){if(e.apply(this,arguments)){var k=this.__zoom,I=Ce(b.changedTouches?b.changedTouches[0]:b,this),D=k.invert(I),A=k.k*(b.shiftKey?.5:2),R=n(m(v(k,A),I,D),t.apply(this,N),i);Vt(b),a>0?_e(this).transition().duration(a).call(S,R,I,b):_e(this).call(y.transform,R,I,b)}}function L(b,...N){if(e.apply(this,arguments)){var k=b.touches,I=k.length,D=E(this,N,b.changedTouches.length===I).event(b),A,R,B,X;for(bo(b),R=0;R<I;++R)B=k[R],X=Ce(B,this),X=[X,this.__zoom.invert(X),B.identifier],D.touch0?!D.touch1&&D.touch0[2]!==X[2]&&(D.touch1=X,D.taps=0):(D.touch0=X,A=!0,D.taps=1+!!d);d&&(d=clearTimeout(d)),A&&(D.taps<2&&(u=X[0],d=setTimeout(function(){d=null},p)),Mt(this),D.start())}}function F(b,...N){if(this.__zooming){var k=E(this,N).event(b),I=b.changedTouches,D=I.length,A,R,B,X;for(Vt(b),A=0;A<D;++A)R=I[A],B=Ce(R,this),k.touch0&&k.touch0[2]===R.identifier?k.touch0[0]=B:k.touch1&&k.touch1[2]===R.identifier&&(k.touch1[0]=B);if(R=k.that.__zoom,k.touch1){var Q=k.touch0[0],Z=k.touch0[1],K=k.touch1[0],ne=k.touch1[1],Y=(Y=K[0]-Q[0])*Y+(Y=K[1]-Q[1])*Y,$=($=ne[0]-Z[0])*$+($=ne[1]-Z[1])*$;R=v(R,Math.sqrt(Y/$)),B=[(Q[0]+K[0])/2,(Q[1]+K[1])/2],X=[(Z[0]+ne[0])/2,(Z[1]+ne[1])/2]}else if(k.touch0)B=k.touch0[0],X=k.touch0[1];else return;k.zoom("touch",n(m(R,B,X),k.extent,i))}}function H(b,...N){if(this.__zooming){var k=E(this,N).event(b),I=b.changedTouches,D=I.length,A,R;for(bo(b),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),A=0;A<D;++A)R=I[A],k.touch0&&k.touch0[2]===R.identifier?delete k.touch0:k.touch1&&k.touch1[2]===R.identifier&&delete k.touch1;if(k.touch1&&!k.touch0&&(k.touch0=k.touch1,delete k.touch1),k.touch0)k.touch0[1]=this.__zoom.invert(k.touch0[0]);else if(k.end(),k.taps===2&&(R=Ce(R,this),Math.hypot(u[0]-R[0],u[1]-R[1])<x)){var B=_e(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return y.wheelDelta=function(b){return arguments.length?(o=typeof b=="function"?b:Mn(+b),y):o},y.filter=function(b){return arguments.length?(e=typeof b=="function"?b:Mn(!!b),y):e},y.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:Mn(!!b),y):r},y.extent=function(b){return arguments.length?(t=typeof b=="function"?b:Mn([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),y):t},y.scaleExtent=function(b){return arguments.length?(s[0]=+b[0],s[1]=+b[1],y):[s[0],s[1]]},y.translateExtent=function(b){return arguments.length?(i[0][0]=+b[0][0],i[1][0]=+b[1][0],i[0][1]=+b[0][1],i[1][1]=+b[1][1],y):[[i[0][0],i[0][1]],[i[1][0],i[1][1]]]},y.constrain=function(b){return arguments.length?(n=b,y):n},y.duration=function(b){return arguments.length?(a=+b,y):a},y.interpolate=function(b){return arguments.length?(c=b,y):c},y.on=function(){var b=l.on.apply(l,arguments);return b===l?y:b},y.clickDistance=function(b){return arguments.length?(g=(b=+b)*b,y):Math.sqrt(g)},y.tapDistance=function(b){return arguments.length?(x=+b,y):x},y}var Oe={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},qt=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],_r=["Enter"," ","Escape"],Sr={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},ut;(function(e){e.Strict="strict",e.Loose="loose"})(ut||(ut={}));var Je;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Je||(Je={}));var Pt;(function(e){e.Partial="partial",e.Full="full"})(Pt||(Pt={}));var Er={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},qe;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(qe||(qe={}));var Rt;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Rt||(Rt={}));var U;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(U||(U={}));var ca={[U.Left]:U.Right,[U.Right]:U.Left,[U.Top]:U.Bottom,[U.Bottom]:U.Top},Nr=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,va=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Cr=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var zn=(e,t=[0,0])=>{let{width:n,height:o}=He(e),r=e.origin??t,s=n*r[0],i=o*r[1];return{x:e.position.x-s,y:e.position.y-i}},Mr=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=!1,o=e.reduce((r,s)=>{let i=typeof s=="string",a=!t.nodeLookup&&!i?s:void 0;return t.nodeLookup&&(a=i?t.nodeLookup.get(s):Cr(s)?s:t.nodeLookup.get(s.id)),a?(n=!0,Co(r,So(a,t.nodeOrigin))):r},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return n?Mo(o):{x:0,y:0,width:0,height:0}},Xt=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Co(n,So(r)),o=!0)}),o?Mo(n):{x:0,y:0,width:0,height:0}},Eo=(e,t,[n,o,r]=[0,0,1],s=!1,i=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,d=t.height/r,u=[];for(let f of e.values()){let{measured:p,selectable:h=!0,hidden:g=!1}=f;if(i&&!h||g)continue;let x=p.width??f.width??f.initialWidth??0,y=p.height??f.height??f.initialHeight??0,{x:v,y:m}=f.internals.positionAbsolute,w=Na(a,c,l,d,v,m,x,y),S=x*y,E=s&&w>0;(!f.internals.handleBounds||E||w>=S||f.dragging)&&u.push(f)}return u},ka=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function jf(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let s;if(t?.includeHiddenNodes){let{width:i,height:a}=He(r);s=i>0&&a>0}else s=!!(r.measured.width&&r.measured.height&&!r.hidden);s&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function _a({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:s},i){if(e.size===0)return!0;let a=jf(e,i),c=Xt(a),l=Dn(c,t,n,i?.minZoom??r,i?.maxZoom??s,i?.padding??.1);return await o.setViewport(l,{duration:i?.duration,ease:i?.ease,interpolate:i?.interpolate}),!0}function Ir({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:s}){let i=n.get(e),a=i.parentId?n.get(i.parentId):void 0,{x:c,y:l}=a?a.internals.positionAbsolute:{x:0,y:0},d=i.origin??o,u=i.extent||r;if(i.extent==="parent"&&!i.expandParent)if(!a)s?.("005",Oe.error005());else{let{width:p,height:h}=He(a);p&&h&&(u=[[c,l],[c+p,l+h]])}else a&&Dt(i.extent)&&(u=[[i.extent[0][0]+c,i.extent[0][1]+l],[i.extent[1][0]+c,i.extent[1][1]+l]]);let f=Dt(u)?zt(t,u,i.measured):t;return(i.measured.width===void 0||i.measured.height===void 0)&&s?.("015",Oe.error015()),{position:{x:f.x-c+(i.measured.width??0)*d[0],y:f.y-l+(i.measured.height??0)*d[1]},positionAbsolute:f}}async function Sa({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let s=new Set(e.map(f=>f.id)),i=[];for(let f of n){if(f.deletable===!1)continue;let p=s.has(f.id),h=!p&&f.parentId&&i.find(g=>g.id===f.parentId);(p||h)&&i.push(f)}let a=new Set(t.map(f=>f.id)),c=o.filter(f=>f.deletable!==!1),d=ka(i,c);for(let f of c)a.has(f.id)&&!d.find(h=>h.id===f.id)&&d.push(f);if(!r)return{edges:d,nodes:i};let u=await r({nodes:i,edges:d});return typeof u=="boolean"?u?{edges:d,nodes:i}:{edges:[],nodes:[]}:u}var Wt=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),zt=(e={x:0,y:0},t,n)=>({x:Wt(e.x,t[0][0],t[1][0]-(n?.width??0)),y:Wt(e.y,t[0][1],t[1][1]-(n?.height??0))});function Ea(e,t,n){let{width:o,height:r}=He(n),{x:s,y:i}=n.internals.positionAbsolute;return zt(e,[[s,i],[s+o,i+r]],t)}var la=(e,t,n)=>e<t?Wt(Math.abs(e-t),1,t)/t:e>n?-Wt(Math.abs(e-n),1,t)/t:0,No=(e,t,n=15,o=40)=>{let r=la(e.x,o,t.width-o)*n,s=la(e.y,o,t.height-o)*n;return[r,s]},Co=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),kr=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),Mo=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),Yt=(e,t=[0,0])=>{let{x:n,y:o}=Cr(e)?e.internals.positionAbsolute:zn(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},So=(e,t=[0,0])=>{let{x:n,y:o}=Cr(e)?e.internals.positionAbsolute:zn(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Pr=(e,t)=>Mo(Co(kr(e),kr(t))),Na=(e,t,n,o,r,s,i,a)=>{let c=Math.max(0,Math.min(e+n,r+i)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,s+a)-Math.max(t,s));return Math.ceil(c*l)},An=(e,t)=>Na(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),zr=e=>Le(e.width)&&Le(e.height)&&Le(e.x)&&Le(e.y),Le=e=>!isNaN(e)&&isFinite(e),Ar=(e,t)=>(n,o)=>{},Zt=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Gt=({x:e,y:t},[n,o,r],s=!1,i=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return s?Zt(a,i):a},At=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function Ft(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function Kf(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=Ft(e,n),r=Ft(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=Ft(e.top??e.y??0,n),r=Ft(e.bottom??e.y??0,n),s=Ft(e.left??e.x??0,t),i=Ft(e.right??e.x??0,t);return{top:o,right:i,bottom:r,left:s,x:s+i,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function Qf(e,t,n,o,r,s){let{x:i,y:a}=At(e,[t,n,o]),{x:c,y:l}=At({x:e.x+e.width,y:e.y+e.height},[t,n,o]),d=r-c,u=s-l;return{left:Math.floor(i),top:Math.floor(a),right:Math.floor(d),bottom:Math.floor(u)}}var Dn=(e,t,n,o,r,s)=>{let i=Kf(s,t,n),a=(t-i.x)/e.width,c=(n-i.y)/e.height,l=Math.min(a,c),d=Wt(l,o,r),u=e.x+e.width/2,f=e.y+e.height/2,p=t/2-u*d,h=n/2-f*d,g=Qf(e,p,h,d,t,n),x={left:Math.min(g.left-i.left,0),top:Math.min(g.top-i.top,0),right:Math.min(g.right-i.right,0),bottom:Math.min(g.bottom-i.bottom,0)};return{x:p-x.left+x.right,y:h-x.top+x.bottom,zoom:d}},Ut=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function Dt(e){return e!=null&&e!=="parent"}function He(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Dr(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Or(e,t={width:0,height:0},n,o,r){let s={...e},i=o.get(n);if(i){let a=i.origin||r;s.x+=i.internals.positionAbsolute.x-(t.width??0)*a[0],s.y+=i.internals.positionAbsolute.y-(t.height??0)*a[1]}return s}function Tr(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Ca(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Ma(e){return{...Sr,...e||{}}}function Lr(e){return e===null?null:e?"valid":"invalid"}function Pn(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:s,y:i}=$e(e),a=Gt({x:s-(r?.left??0),y:i-(r?.top??0)},o),{x:c,y:l}=n?Zt(a,t):a;return{xSnapped:c,ySnapped:l,...a}}var Io=e=>({width:e.offsetWidth,height:e.offsetHeight}),$r=e=>e?.getRootNode?.()||window?.document,Jf=["INPUT","SELECT","TEXTAREA"];function Hr(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:Jf.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Br=e=>"clientX"in e,$e=(e,t)=>{let n=Br(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},ua=(e,t,n,o,r)=>{let s=t.querySelectorAll(`.${e}`);return!s||!s.length?null:Array.from(s).map(i=>{let a=i.getBoundingClientRect();return{id:i.getAttribute("data-handleid"),type:e,nodeId:r,position:i.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...Io(i)}})};function Po({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:s,targetControlX:i,targetControlY:a}){let c=e*.125+r*.375+i*.375+n*.125,l=t*.125+s*.375+a*.375+o*.125,d=Math.abs(c-e),u=Math.abs(l-t);return[c,l,d,u]}function ko(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function da({pos:e,x1:t,y1:n,x2:o,y2:r,c:s}){switch(e){case U.Left:return[t-ko(t-o,s),n];case U.Right:return[t+ko(o-t,s),n];case U.Top:return[t,n-ko(n-r,s)];case U.Bottom:return[t,n+ko(r-n,s)]}}function zo({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:s=U.Top,curvature:i=.25}){let[a,c]=da({pos:n,x1:e,y1:t,x2:o,y2:r,c:i}),[l,d]=da({pos:s,x1:o,y1:r,x2:e,y2:t,c:i}),[u,f,p,h]=Po({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:l,targetControlY:d});return[`M${e},${t} C${a},${c} ${l},${d} ${o},${r}`,u,f,p,h]}function Vr({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,s=n<e?n+r:n-r,i=Math.abs(o-t)/2,a=o<t?o+i:o-i;return[s,a,r,i]}function Ia({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:s="basic"}){if(s==="manual")return o;let i=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return i+a}function Pa({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let s=Co(So(e),So(t));s.x===s.x2&&(s.x2+=1),s.y===s.y2&&(s.y2+=1);let i={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return An(i,Mo(s))>0}var ep=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,tp=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),za=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",Oe.error006()),t;let o=n.getEdgeId||ep,r;return Nr(e)?r={...e}:r={...e,id:o(e)},tp(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function Ao({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,s,i,a]=Vr({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,s,i,a]}var fa={[U.Left]:{x:-1,y:0},[U.Right]:{x:1,y:0},[U.Top]:{x:0,y:-1},[U.Bottom]:{x:0,y:1}},np=({source:e,sourcePosition:t=U.Bottom,target:n})=>t===U.Left||t===U.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},pa=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function op({source:e,sourcePosition:t=U.Bottom,target:n,targetPosition:o=U.Top,center:r,offset:s,stepPosition:i}){let a=fa[t],c=fa[o],l={x:e.x+a.x*s,y:e.y+a.y*s},d={x:n.x+c.x*s,y:n.y+c.y*s},u=np({source:l,sourcePosition:t,target:d}),f=u.x!==0?"x":"y",p=u[f],h=[],g,x,y={x:0,y:0},v={x:0,y:0},[,,m,w]=Vr({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[f]*c[f]===-1){f==="x"?(g=r.x??l.x+(d.x-l.x)*i,x=r.y??(l.y+d.y)/2):(g=r.x??(l.x+d.x)/2,x=r.y??l.y+(d.y-l.y)*i);let z=[{x:g,y:l.y},{x:g,y:d.y}],P=[{x:l.x,y:x},{x:d.x,y:x}];a[f]===p?h=f==="x"?z:P:h=f==="x"?P:z}else{let z=[{x:l.x,y:d.y}],P=[{x:d.x,y:l.y}];if(f==="x"?h=a.x===p?P:z:h=a.y===p?z:P,t===o){let b=Math.abs(e[f]-n[f]);if(b<=s){let N=Math.min(s-1,s-b);a[f]===p?y[f]=(l[f]>e[f]?-1:1)*N:v[f]=(d[f]>n[f]?-1:1)*N}}if(t!==o){let b=f==="x"?"y":"x",N=a[f]===c[b],k=l[b]>d[b],I=l[b]<d[b];(a[f]===1&&(!N&&k||N&&I)||a[f]!==1&&(!N&&I||N&&k))&&(h=f==="x"?z:P)}let V={x:l.x+y.x,y:l.y+y.y},L={x:d.x+v.x,y:d.y+v.y},F=Math.max(Math.abs(V.x-h[0].x),Math.abs(L.x-h[0].x)),H=Math.max(Math.abs(V.y-h[0].y),Math.abs(L.y-h[0].y));F>=H?(g=(V.x+L.x)/2,x=h[0].y):(g=h[0].x,x=(V.y+L.y)/2)}let S={x:l.x+y.x,y:l.y+y.y},E={x:d.x+v.x,y:d.y+v.y};return[[e,...S.x!==h[0].x||S.y!==h[0].y?[S]:[],...h,...E.x!==h[h.length-1].x||E.y!==h[h.length-1].y?[E]:[],n],g,x,m,w]}function rp(e,t,n,o){let r=Math.min(pa(e,t)/2,pa(t,n)/2,o),{x:s,y:i}=t;if(e.x===s&&s===n.x||e.y===i&&i===n.y)return`L${s} ${i}`;if(e.y===i){let l=e.x<n.x?-1:1,d=e.y<n.y?1:-1;return`L ${s+r*l},${i}Q ${s},${i} ${s},${i+r*d}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${s},${i+r*c}Q ${s},${i} ${s+r*a},${i}`}function On({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:s=U.Top,borderRadius:i=5,centerX:a,centerY:c,offset:l=20,stepPosition:d=.5}){let[u,f,p,h,g]=op({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:s,center:{x:a,y:c},offset:l,stepPosition:d}),x=`M${u[0].x} ${u[0].y}`;for(let y=1;y<u.length-1;y++)x+=rp(u[y-1],u[y],u[y+1],i);return x+=`L${u[u.length-1].x} ${u[u.length-1].y}`,[x,f,p,h,g]}function ga(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Aa(e){let{sourceNode:t,targetNode:n}=e;if(!ga(t)||!ga(n))return null;let o=t.internals.handleBounds||ha(t.handles),r=n.internals.handleBounds||ha(n.handles),s=ma(o?.source??[],e.sourceHandle),i=ma(e.connectionMode===ut.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!s||!i)return e.onError?.("008",Oe.error008(s?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=s?.position||U.Bottom,c=i?.position||U.Top,l=dt(t,s,a),d=dt(n,i,c);return{sourceX:l.x,sourceY:l.y,targetX:d.x,targetY:d.y,sourcePosition:a,targetPosition:c}}function ha(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function dt(e,t,n=U.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,s=(t?.y??0)+e.internals.positionAbsolute.y,{width:i,height:a}=t??He(e);if(o)return{x:r+i/2,y:s+a/2};switch(t?.position??n){case U.Top:return{x:r+i/2,y:s};case U.Right:return{x:r+i,y:s+a/2};case U.Bottom:return{x:r+i/2,y:s+a};case U.Left:return{x:r,y:s+a/2}}}function ma(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function Do(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Da(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let s=new Set;return e.reduce((i,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=Do(c,t);s.has(l)||(i.push({id:l,color:c.color||n,...c}),s.add(l))}}),i),[]).sort((i,a)=>i.id.localeCompare(a.id))}var Oa=1e3,ip=10,Fr={nodeOrigin:[0,0],nodeExtent:qt,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},sp={...Fr,checkEquality:!0};function Rr(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Ta(e,t,n){let o=Rr(Fr,n);for(let r of e.values())if(r.parentId)qr(r,e,t,o);else{let s=zn(r,o.nodeOrigin),i=Dt(r.extent)?r.extent:o.nodeExtent,a=zt(s,i,He(r));r.internals.positionAbsolute=a}}function ap(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let s={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(s):r.type==="target"&&o.push(s)}return{source:n,target:o}}function Wr(e){return e==="manual"}function Oo(e,t,n,o={}){let r=Rr(sp,o),s={i:0},i=new Map(t),a=r?.elevateNodesOnSelect&&!Wr(r.zIndexMode)?Oa:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let d of e){let u=i.get(d.id);if(r.checkEquality&&d===u?.internals.userNode)t.set(d.id,u);else{let f=zn(d,r.nodeOrigin),p=Dt(d.extent)?d.extent:r.nodeExtent,h=zt(f,p,He(d));u={...r.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:ap(d,u),z:La(d,a,r.zIndexMode),userNode:d}},t.set(d.id,u)}(u.measured===void 0||u.measured.width===void 0||u.measured.height===void 0)&&!u.hidden&&(c=!1),d.parentId&&qr(u,t,n,o,s),l||=d.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function cp(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function qr(e,t,n,o,r){let{elevateNodesOnSelect:s,nodeOrigin:i,nodeExtent:a,zIndexMode:c}=Rr(Fr,o),l=e.parentId,d=t.get(l);if(!d){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}cp(e,n),r&&!d.parentId&&d.internals.rootParentIndex===void 0&&c==="auto"&&(d.internals.rootParentIndex=++r.i,d.internals.z=d.internals.z+r.i*ip),r&&d.internals.rootParentIndex!==void 0&&(r.i=d.internals.rootParentIndex);let u=s&&!Wr(c)?Oa:0,{x:f,y:p,z:h}=lp(e,d,i,a,u,c),{positionAbsolute:g}=e.internals,x=f!==g.x||p!==g.y;(x||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:x?{x:f,y:p}:g,z:h}})}function La(e,t,n){let o=Le(e.zIndex)?e.zIndex:0;return Wr(n)?o:o+(e.selected?t:0)}function lp(e,t,n,o,r,s){let{x:i,y:a}=t.internals.positionAbsolute,c=He(e),l=zn(e,n),d=Dt(e.extent)?zt(l,e.extent,c):l,u=zt({x:i+d.x,y:a+d.y},o,c);e.extent==="parent"&&(u=Ea(u,c,t));let f=La(e,r,s),p=t.internals.z??0;return{x:u.x,y:u.y,z:p>=f?p+1:f}}function To(e,t,n,o=[0,0]){let r=[],s=new Map;for(let i of e){let a=t.get(i.parentId);if(!a)continue;let c=s.get(i.parentId)?.expandedRect??Yt(a),l=Pr(c,i.rect);s.set(i.parentId,{expandedRect:l,parent:a})}return s.size>0&&s.forEach(({expandedRect:i,parent:a},c)=>{let l=a.internals.positionAbsolute,d=He(a),u=a.origin??o,f=i.x<l.x?Math.round(Math.abs(l.x-i.x)):0,p=i.y<l.y?Math.round(Math.abs(l.y-i.y)):0,h=Math.max(d.width,Math.round(i.width)),g=Math.max(d.height,Math.round(i.height)),x=(h-d.width)*u[0],y=(g-d.height)*u[1];(f>0||p>0||x||y)&&(r.push({id:c,type:"position",position:{x:a.position.x-f+x,y:a.position.y-p+y}}),n.get(c)?.forEach(v=>{e.some(m=>m.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+f,y:v.position.y+p}})})),(d.width<i.width||d.height<i.height||f||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(f?u[0]*f-x:0),height:g+(p?u[1]*p-y:0)}})}),r}function $a(e,t,n,o,r,s,i){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let l=[],d=window.getComputedStyle(a),{m22:u}=new window.DOMMatrixReadOnly(d.transform),f=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let g=Io(p.nodeElement),x=h.measured.width!==g.width||h.measured.height!==g.height;if(!!(g.width&&g.height&&(x||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),m=Dt(h.extent)?h.extent:s,{positionAbsolute:w}=h.internals;if(h.parentId&&h.extent==="parent"){let E=t.get(h.parentId);E&&(w=Ea(w,g,E))}else m&&(w=zt(w,m,g));let S={...h,measured:g,internals:{...h.internals,positionAbsolute:w,handleBounds:{source:ua("source",p.nodeElement,v,u,h.id),target:ua("target",p.nodeElement,v,u,h.id)}}};t.set(h.id,S),h.parentId&&qr(S,t,n,{nodeOrigin:r,zIndexMode:i}),c=!0,x&&(l.push({id:h.id,type:"dimensions",dimensions:g}),h.expandParent&&h.parentId&&f.push({id:h.id,parentId:h.parentId,rect:Yt(S,r)}))}}if(f.length>0){let p=To(f,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function Ha({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:s}){if(!t||!e.x&&!e.y)return!1;let i=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,s]],o);return!!i&&(i.x!==n[0]||i.y!==n[1]||i.k!==n[2])}function ya(e,t,n,o,r,s){let i=r,a=o.get(i)||new Map;o.set(i,a.set(n,t)),i=`${r}-${e}`;let c=o.get(i)||new Map;if(o.set(i,c.set(n,t)),s){i=`${r}-${e}-${s}`;let l=o.get(i)||new Map;o.set(i,l.set(n,t))}}function Xr(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:s,sourceHandle:i=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:s,sourceHandle:i,targetHandle:a},l=`${r}-${i}--${s}-${a}`,d=`${s}-${a}--${r}-${i}`;ya("source",c,d,e,r,i),ya("target",c,l,e,s,a),t.set(o.id,o)}}function Ba(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Ba(n,t):!1}function xa(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function up(e,t,n,o){let r=new Map;for(let[s,i]of e)if((i.selected||i.id===o)&&(!i.parentId||!Ba(i,e))&&(i.draggable||t&&typeof i.draggable>"u")){let a=e.get(s);a&&r.set(s,{id:s,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function wr({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[i,a]of t){let c=n.get(i)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let s=n.get(e)?.internals.userNode;return[s?{...s,position:t.get(e)?.position||s.position,dragging:o}:r[0],r]}function dp({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let s={x:n-r.distance.x,y:o-r.distance.y},i=Zt(s,t);return{x:i.x-s.x,y:i.y-s.y}}function Va({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let s={x:null,y:null},i=0,a=new Map,c=!1,l={x:0,y:0},d=null,u=!1,f=null,p=!1,h=!1,g=null;function x({noDragClassName:v,handleSelector:m,domNode:w,isSelectable:S,nodeId:E,nodeClickDistance:C=0}){f=_e(w);function z({x:F,y:H}){let{nodeLookup:b,nodeExtent:N,snapGrid:k,snapToGrid:I,nodeOrigin:D,onNodeDrag:A,onSelectionDrag:R,onError:B,updateNodePositions:X}=t();s={x:F,y:H};let Q=!1,Z=a.size>1,K=Z&&N?kr(Xt(a)):null,ne=Z&&I?dp({dragItems:a,snapGrid:k,x:F,y:H}):null;for(let[Y,$]of a){if(!b.has(Y))continue;let q={x:F-$.distance.x,y:H-$.distance.y};I&&(q=ne?{x:Math.round(q.x+ne.x),y:Math.round(q.y+ne.y)}:Zt(q,k));let J=null;if(Z&&N&&!$.extent&&K){let{positionAbsolute:j}=$.internals,oe=j.x-K.x+N[0][0],ie=j.x+$.measured.width-K.x2+N[1][0],se=j.y-K.y+N[0][1],ge=j.y+$.measured.height-K.y2+N[1][1];J=[[oe,se],[ie,ge]]}let{position:te,positionAbsolute:G}=Ir({nodeId:Y,nextPosition:q,nodeLookup:b,nodeExtent:J||N,nodeOrigin:D,onError:B});Q=Q||$.position.x!==te.x||$.position.y!==te.y,$.position=te,$.internals.positionAbsolute=G}if(h=h||Q,!!Q&&(X(a,!0),g&&(o||A||!E&&R))){let[Y,$]=wr({nodeId:E,dragItems:a,nodeLookup:b});o?.(g,a,Y,$),A?.(g,Y,$),E||R?.(g,$)}}async function P(){if(!d)return;let{transform:F,panBy:H,autoPanSpeed:b,autoPanOnNodeDrag:N}=t();if(!N){c=!1,cancelAnimationFrame(i);return}let[k,I]=No(l,d,b);(k!==0||I!==0)&&(s.x=(s.x??0)-k/F[2],s.y=(s.y??0)-I/F[2],await H({x:k,y:I})&&z(s)),i=requestAnimationFrame(P)}function V(F){let{nodeLookup:H,multiSelectionActive:b,nodesDraggable:N,transform:k,snapGrid:I,snapToGrid:D,selectNodesOnDrag:A,onNodeDragStart:R,onSelectionDragStart:B,unselectNodesAndEdges:X}=t();u=!0,(!A||!S)&&!b&&E&&(H.get(E)?.selected||X()),S&&A&&E&&e?.(E);let Q=Pn(F.sourceEvent,{transform:k,snapGrid:I,snapToGrid:D,containerBounds:d});if(s=Q,a=up(H,N,Q,E),a.size>0&&(n||R||!E&&B)){let[Z,K]=wr({nodeId:E,dragItems:a,nodeLookup:H});n?.(F.sourceEvent,a,Z,K),R?.(F.sourceEvent,Z,K),E||B?.(F.sourceEvent,K)}}let L=Jn().clickDistance(C).on("start",F=>{let{domNode:H,nodeDragThreshold:b,transform:N,snapGrid:k,snapToGrid:I}=t();d=H?.getBoundingClientRect()||null,p=!1,h=!1,g=F.sourceEvent,b===0&&V(F),s=Pn(F.sourceEvent,{transform:N,snapGrid:k,snapToGrid:I,containerBounds:d}),l=$e(F.sourceEvent,d)}).on("drag",F=>{let{autoPanOnNodeDrag:H,transform:b,snapGrid:N,snapToGrid:k,nodeDragThreshold:I,nodeLookup:D}=t(),A=Pn(F.sourceEvent,{transform:b,snapGrid:N,snapToGrid:k,containerBounds:d});if(g=F.sourceEvent,(F.sourceEvent.type==="touchmove"&&F.sourceEvent.touches.length>1||E&&!D.has(E))&&(p=!0),!p){if(!c&&H&&u&&(c=!0,P()),!u){let R=$e(F.sourceEvent,d),B=R.x-l.x,X=R.y-l.y;Math.sqrt(B*B+X*X)>I&&V(F)}(s.x!==A.xSnapped||s.y!==A.ySnapped)&&a&&u&&(l=$e(F.sourceEvent,d),z(A))}}).on("end",F=>{if(!u||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,u=!1,cancelAnimationFrame(i),a.size>0){let{nodeLookup:H,updateNodePositions:b,onNodeDragStop:N,onSelectionDragStop:k}=t();if(h&&(b(a,!1),h=!1),r||N||!E&&k){let[I,D]=wr({nodeId:E,dragItems:a,nodeLookup:H,dragging:!1});r?.(F.sourceEvent,a,I,D),N?.(F.sourceEvent,I,D),E||k?.(F.sourceEvent,D)}}}).filter(F=>{let H=F.target;return!F.button&&(!v||!xa(H,`.${v}`,w))&&(!m||xa(H,m,w))});f.call(L)}function y(){f?.on(".drag",null)}return{update:x,destroy:y}}function fp(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let s of t.values())An(r,Yt(s))>0&&o.push(s);return o}var pp=250;function gp(e,t,n,o){let r=[],s=1/0,i=fp(e,n,t+pp);for(let a of i){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:d,y:u}=dt(a,l,l.position,!0),f=Math.sqrt(Math.pow(d-e.x,2)+Math.pow(u-e.y,2));f>t||(f<s?(r=[{...l,x:d,y:u}],s=f):f===s&&r.push({...l,x:d,y:u}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function Fa(e,t,n,o,r,s=!1){let i=o.get(e);if(!i)return null;let a=r==="strict"?i.internals.handleBounds?.[t]:[...i.internals.handleBounds?.source??[],...i.internals.handleBounds?.target??[]],c=(n?a?.find(l=>l.id===n):a?.[0])??null;return c&&s?{...c,...dt(i,c,c.position,!0)}:c}function Ra(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function hp(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var Wa=()=>!0;function mp(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:s,isTarget:i,domNode:a,nodeLookup:c,lib:l,autoPanOnConnect:d,flowId:u,panBy:f,cancelConnection:p,onConnectStart:h,onConnect:g,onConnectEnd:x,isValidConnection:y=Wa,onReconnectEnd:v,updateConnection:m,getTransform:w,getFromHandle:S,autoPanSpeed:E,dragThreshold:C=1,handleDomNode:z}){let P=$r(e.target),V=0,L,{x:F,y:H}=$e(e),b=Ra(s,z),N=a?.getBoundingClientRect(),k=!1;if(!N||!b)return;let I=Fa(r,b,o,c,t);if(!I)return;let D=$e(e,N),A=!1,R=null,B=!1,X=null;function Q(){if(!d||!N)return;let[te,G]=No(D,N,E);f({x:te,y:G}),V=requestAnimationFrame(Q)}let Z={...I,nodeId:r,type:b,position:I.position},K=c.get(r),Y={inProgress:!0,isValid:null,from:dt(K,Z,U.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:K,to:D,toHandle:null,toPosition:ca[Z.position],toNode:null,pointer:D};function $(){k=!0,m(Y),h?.(e,{nodeId:r,handleId:o,handleType:b})}C===0&&$();function q(te){if(!k){let{x:ge,y:be}=$e(te),fe=ge-F,Ne=be-H;if(!(fe*fe+Ne*Ne>C*C))return;$()}if(!S()||!Z){J(te);return}let G=w();D=$e(te,N),L=gp(Gt(D,G,!1,[1,1]),n,c,Z),A||(Q(),A=!0);let j=qa(te,{handle:L,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:i?"target":"source",isValidConnection:y,doc:P,lib:l,flowId:u,nodeLookup:c});X=j.handleDomNode,R=j.connection,B=hp(!!L,j.isValid);let oe=c.get(r),ie=oe?dt(oe,Z,U.Left,!0):Y.from,se={...Y,from:ie,isValid:B,to:j.toHandle&&B?At({x:j.toHandle.x,y:j.toHandle.y},G):D,toHandle:j.toHandle,toPosition:B&&j.toHandle?j.toHandle.position:ca[Z.position],toNode:j.toHandle?c.get(j.toHandle.nodeId):null,pointer:D};m(se),Y=se}function J(te){if(!("touches"in te&&te.touches.length>0)){if(k){(L||X)&&R&&B&&g?.(R);let{inProgress:G,...j}=Y,oe={...j,toPosition:Y.toHandle?Y.toPosition:null};x?.(te,oe),s&&v?.(te,oe)}p(),cancelAnimationFrame(V),A=!1,B=!1,R=null,X=null,P.removeEventListener("mousemove",q),P.removeEventListener("mouseup",J),P.removeEventListener("touchmove",q),P.removeEventListener("touchend",J)}}P.addEventListener("mousemove",q),P.addEventListener("mouseup",J),P.addEventListener("touchmove",q),P.addEventListener("touchend",J)}function qa(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:s,doc:i,lib:a,flowId:c,isValidConnection:l=Wa,nodeLookup:d}){let u=s==="target",f=t?i.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=$e(e),g=i.elementFromPoint(p,h),x=g?.classList.contains(`${a}-flow__handle`)?g:f,y={handleDomNode:x,isValid:!1,connection:null,toHandle:null};if(x){let v=Ra(void 0,x),m=x.getAttribute("data-nodeid"),w=x.getAttribute("data-handleid"),S=x.classList.contains("connectable"),E=x.classList.contains("connectableend");if(!m||!v)return y;let C={source:u?m:o,sourceHandle:u?w:r,target:u?o:m,targetHandle:u?r:w};y.connection=C;let P=S&&E&&(n===ut.Strict?u&&v==="source"||!u&&v==="target":m!==o||w!==r);y.isValid=P&&l(C),y.toHandle=Fa(m,v,w,d,n,!0)}return y}var Lo={onPointerDown:mp,isValid:qa};function Xa({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=_e(e);function s({translateExtent:a,width:c,height:l,zoomStep:d=1,pannable:u=!0,zoomable:f=!0,inversePan:p=!1}){let h=m=>{if(m.sourceEvent.type!=="wheel"||!t)return;let w=n(),S=m.sourceEvent.ctrlKey&&Ut()?10:1,E=-m.sourceEvent.deltaY*(m.sourceEvent.deltaMode===1?.05:m.sourceEvent.deltaMode?1:.002)*d,C=w[2]*Math.pow(2,E*S);t.scaleTo(C)},g=[0,0],x=m=>{(m.sourceEvent.type==="mousedown"||m.sourceEvent.type==="touchstart")&&(g=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY])},y=m=>{let w=n();if(m.sourceEvent.type!=="mousemove"&&m.sourceEvent.type!=="touchmove"||!t)return;let S=[m.sourceEvent.clientX??m.sourceEvent.touches[0].clientX,m.sourceEvent.clientY??m.sourceEvent.touches[0].clientY],E=[S[0]-g[0],S[1]-g[1]];g=S;let C=o()*Math.max(w[2],Math.log(w[2]))*(p?-1:1),z={x:w[0]-E[0]*C,y:w[1]-E[1]*C},P=[[0,0],[c,l]];t.setViewportConstrained({x:z.x,y:z.y,zoom:w[2]},P,a)},v=vo().on("start",x).on("zoom",u?y:null).on("zoom.wheel",f?h:null);r.call(v,{})}function i(){r.on("zoom",null)}return{update:s,destroy:i,pointer:Ce}}var $o=e=>({x:e.x,y:e.y,zoom:e.k}),br=({x:e,y:t,zoom:n})=>It.translate(e,t).scale(n),lt=(e,t)=>e.target.closest(`.${t}`),Ya=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),yp=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,vr=(e,t=0,n=yp,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},Za=e=>{let t=e.ctrlKey&&Ut()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function xp({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:s,zoomOnPinch:i,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:l}){return d=>{if(lt(d,t))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();let u=n.property("__zoom").k||1;if(d.ctrlKey&&i){let x=Ce(d),y=Za(d),v=u*Math.pow(2,y);o.scaleTo(n,v,x,d);return}let f=d.deltaMode===1?20:1,p=r===Je.Vertical?0:d.deltaX*f,h=r===Je.Horizontal?0:d.deltaY*f;!Ut()&&d.shiftKey&&r!==Je.Vertical&&(p=d.deltaY*f,h=0),o.translateBy(n,-(p/u)*s,-(h/u)*s,{internal:!0});let g=$o(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(d,g):(e.isPanScrolling=!0,a?.(d,g)),e.panScrollTimeout=setTimeout(()=>{l?.(d,g),e.isPanScrolling=!1},150)}}function wp({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let s=o.type==="wheel",i=!t&&s&&!o.ctrlKey,a=lt(o,e);if(o.ctrlKey&&s&&a&&o.preventDefault(),i||a)return null;o.preventDefault(),n.call(this,o,r)}}function bp({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=$o(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function vp({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return s=>{e.usedRightMouseButton=!!(n&&Ya(t,e.mouseButton??0)),s.sourceEvent?.sync||o([s.transform.x,s.transform.y,s.transform.k]),r&&!s.sourceEvent?.internal&&r?.(s.sourceEvent,$o(s.transform))}}function kp({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:s}){return i=>{if(!i.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,s&&Ya(t,e.mouseButton??0)&&!e.usedRightMouseButton&&i.sourceEvent&&s(i.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=$o(i.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(i.sourceEvent,a)},n?150:0)}}}function _p({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:n,zoomOnPinch:o,panOnDrag:r,panOnScroll:s,zoomOnDoubleClick:i,userSelectionActive:a,noWheelClassName:c,noPanClassName:l,lib:d,connectionInProgress:u}){return f=>{let p=t||n,h=o&&f.ctrlKey,g=f.type==="wheel";if(f.button===1&&f.type==="mousedown"&&(lt(f,`${d}-flow__node`)||lt(f,`${d}-flow__edge`)||lt(f,`${d}-flow__selection`)||lt(f,`${d}-flow__nodesselection`)))return!0;if(!r&&!p&&!s&&!i&&!o||a||u&&!g||lt(f,c)&&g||lt(f,l)&&(!g||s&&g&&!t)||!o&&f.ctrlKey&&g)return!1;if(!o&&f.type==="touchstart"&&f.touches?.length>1)return f.preventDefault(),!1;if(!p&&!s&&!h&&g||!r&&(f.type==="mousedown"||f.type==="touchstart")||Array.isArray(r)&&!r.includes(f.button)&&f.type==="mousedown")return!1;let x=Array.isArray(r)&&r.includes(f.button)||!f.button||f.button<=1;return(!f.ctrlKey||g||e)&&x}}function Ga({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:s,onPanZoomStart:i,onPanZoomEnd:a,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),u=[[0,0],[d.width,d.height]];(typeof ResizeObserver<"u"?new ResizeObserver(H=>{let b=H[0];b&&(u=[[0,0],[b.contentRect.width,b.contentRect.height]])}):null)?.observe(e);let p=vo().extent(()=>u).scaleExtent([t,n]).translateExtent(o),h=_e(e).call(p);w({x:r.x,y:r.y,zoom:Wt(r.zoom,t,n)},[[0,0],[d.width,d.height]],o);let g=h.on("wheel.zoom"),x=h.on("dblclick.zoom");p.wheelDelta(Za);async function y(H,b){return h?new Promise(N=>{p?.interpolate(b?.interpolate==="linear"?Ke:Nt).transform(vr(h,b?.duration,b?.ease,()=>N(!0)),H)}):!1}function v({noWheelClassName:H,noPanClassName:b,onPaneContextMenu:N,userSelectionActive:k,panOnScroll:I,panOnDrag:D,panOnScrollMode:A,panOnScrollSpeed:R,preventScrolling:B,zoomOnPinch:X,zoomOnScroll:Q,zoomOnDoubleClick:Z,panActivationKeyPressed:K=!1,zoomActivationKeyPressed:ne,lib:Y,onTransformChange:$,connectionInProgress:q,paneClickDistance:J,selectionOnDrag:te}){k&&!l.isZoomingOrPanning&&m();let G=I&&!ne&&!k;p.clickDistance(te?1/0:!Le(J)||J<0?0:J);let j=G?xp({zoomPanValues:l,noWheelClassName:H,d3Selection:h,d3Zoom:p,panOnScrollMode:A,panOnScrollSpeed:R,zoomOnPinch:X,onPanZoomStart:i,onPanZoom:s,onPanZoomEnd:a}):wp({noWheelClassName:H,preventScrolling:B,d3ZoomHandler:g});h.on("wheel.zoom",j,{passive:!1});let oe=bp({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:i});p.on("start",oe);let ie=vp({zoomPanValues:l,panOnDrag:D,onPaneContextMenu:!!N,onPanZoom:s,onTransformChange:$});p.on("zoom",ie);let se=kp({zoomPanValues:l,panOnDrag:D,panOnScroll:I,onPaneContextMenu:N,onPanZoomEnd:a,onDraggingChange:c});p.on("end",se);let ge=_p({panActivationKeyPressed:K,zoomActivationKeyPressed:ne,panOnDrag:D,zoomOnScroll:Q,panOnScroll:I,zoomOnDoubleClick:Z,zoomOnPinch:X,userSelectionActive:k,noPanClassName:b,noWheelClassName:H,lib:Y,connectionInProgress:q});p.filter(ge),Z?h.on("dblclick.zoom",x):h.on("dblclick.zoom",null)}function m(){p.on("zoom",null)}async function w(H,b,N){let k=br(H),I=p?.constrain()(k,b,N);return I&&await y(I),I}async function S(H,b){let N=br(H);return await y(N,b),N}function E(H){if(h){let b=br(H),N=h.property("__zoom");(N.k!==H.zoom||N.x!==H.x||N.y!==H.y)&&p?.transform(h,b,null,{sync:!0})}}function C(){let H=h?In(h.node()):{x:0,y:0,k:1};return{x:H.x,y:H.y,zoom:H.k}}async function z(H,b){return h?new Promise(N=>{p?.interpolate(b?.interpolate==="linear"?Ke:Nt).scaleTo(vr(h,b?.duration,b?.ease,()=>N(!0)),H)}):!1}async function P(H,b){return h?new Promise(N=>{p?.interpolate(b?.interpolate==="linear"?Ke:Nt).scaleBy(vr(h,b?.duration,b?.ease,()=>N(!0)),H)}):!1}function V(H){p?.scaleExtent(H)}function L(H){p?.translateExtent(H)}function F(H){let b=!Le(H)||H<0?0:H;p?.clickDistance(b)}return{update:v,destroy:m,setViewport:S,setViewportConstrained:w,getViewport:C,scaleTo:z,scaleBy:P,setScaleExtent:V,setTranslateExtent:L,syncViewport:E,setClickDistance:F}}var ft;(function(e){e.Line="line",e.Handle="handle"})(ft||(ft={}));function Sp({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:s}){let i=e-t,a=n-o,c=[i>0?1:i<0?-1:0,a>0?1:a<0?-1:0];return i&&r&&(c[0]=c[0]*-1),a&&s&&(c[1]=c[1]*-1),c}function wa(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function at(e,t){return Math.max(0,t-e)}function ct(e,t){return Math.max(0,e-t)}function _o(e,t,n){return Math.max(0,t-e,e-n)}function ba(e,t){return e?!t:t}function Ep(e,t,n,o,r,s,i,a){let{affectsX:c,affectsY:l}=t,{isHorizontal:d,isVertical:u}=t,f=d&&u,{xSnapped:p,ySnapped:h}=n,{minWidth:g,maxWidth:x,minHeight:y,maxHeight:v}=o,{x:m,y:w,width:S,height:E,aspectRatio:C}=e,z=Math.floor(d?p-e.pointerX:0),P=Math.floor(u?h-e.pointerY:0),V=S+(c?-z:z),L=E+(l?-P:P),F=-s[0]*S,H=-s[1]*E,b=_o(V,g,x),N=_o(L,y,v);if(i){let D=0,A=0;c&&z<0?D=at(m+z+F,i[0][0]):!c&&z>0&&(D=ct(m+V+F,i[1][0])),l&&P<0?A=at(w+P+H,i[0][1]):!l&&P>0&&(A=ct(w+L+H,i[1][1])),b=Math.max(b,D),N=Math.max(N,A)}if(a){let D=0,A=0;c&&z>0?D=ct(m+z,a[0][0]):!c&&z<0&&(D=at(m+V,a[1][0])),l&&P>0?A=ct(w+P,a[0][1]):!l&&P<0&&(A=at(w+L,a[1][1])),b=Math.max(b,D),N=Math.max(N,A)}if(r){if(d){let D=_o(V/C,y,v)*C;if(b=Math.max(b,D),i){let A=0;!c&&!l||c&&!l&&f?A=ct(w+H+V/C,i[1][1])*C:A=at(w+H+(c?z:-z)/C,i[0][1])*C,b=Math.max(b,A)}if(a){let A=0;!c&&!l||c&&!l&&f?A=at(w+V/C,a[1][1])*C:A=ct(w+(c?z:-z)/C,a[0][1])*C,b=Math.max(b,A)}}if(u){let D=_o(L*C,g,x)/C;if(N=Math.max(N,D),i){let A=0;!c&&!l||l&&!c&&f?A=ct(m+L*C+F,i[1][0])/C:A=at(m+(l?P:-P)*C+F,i[0][0])/C,N=Math.max(N,A)}if(a){let A=0;!c&&!l||l&&!c&&f?A=at(m+L*C,a[1][0])/C:A=ct(m+(l?P:-P)*C,a[0][0])/C,N=Math.max(N,A)}}}P=P+(P<0?N:-N),z=z+(z<0?b:-b),r&&(f?V>L*C?P=(ba(c,l)?-z:z)/C:z=(ba(c,l)?-P:P)*C:d?(P=z/C,l=c):(z=P*C,c=l));let k=c?m+z:m,I=l?w+P:w;return{width:S+(c?-z:z),height:E+(l?-P:P),x:s[0]*z*(c?-1:1)+k,y:s[1]*P*(l?-1:1)+I}}var Ua={width:0,height:0,x:0,y:0},Np={...Ua,pointerX:0,pointerY:0,aspectRatio:1};function Cp(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,s=e.measured.width??0,i=e.measured.height??0,a=n[0]*s,c=n[1]*i;return[[o-a,r-c],[o+s-a,r+i-c]]}function ja({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let s=_e(e),i={controlDirection:wa("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:l,boundaries:d,keepAspectRatio:u,resizeDirection:f,onResizeStart:p,onResize:h,onResizeEnd:g,shouldResize:x}){let y={...Ua},v={...Np};i={boundaries:d,resizeDirection:f,keepAspectRatio:u,controlDirection:wa(l)};let m,w=null,S=[],E,C,z,P=Jn().on("start",V=>{let{nodeLookup:L,transform:F,snapGrid:H,snapToGrid:b,nodeOrigin:N,paneDomNode:k}=n();if(m=L.get(t),!m)return;w=k?.getBoundingClientRect()??null;let{xSnapped:I,ySnapped:D}=Pn(V.sourceEvent,{transform:F,snapGrid:H,snapToGrid:b,containerBounds:w});y={width:m.measured.width??0,height:m.measured.height??0,x:m.position.x??0,y:m.position.y??0},v={...y,pointerX:I,pointerY:D,aspectRatio:y.width/y.height},E=void 0,C=Dt(m.extent)?m.extent:void 0,m.parentId&&(m.extent==="parent"||m.expandParent)&&(E=L.get(m.parentId)),E&&m.extent==="parent"&&(C=[[0,0],[E.measured.width,E.measured.height]]),S=[],z=void 0;for(let[A,R]of L)if(R.parentId===t&&(S.push({id:A,position:{...R.position},extent:R.extent}),R.extent==="parent"||R.expandParent)){let B=Cp(R,m,R.origin??N);z?z=[[Math.min(B[0][0],z[0][0]),Math.min(B[0][1],z[0][1])],[Math.max(B[1][0],z[1][0]),Math.max(B[1][1],z[1][1])]]:z=B}p?.(V,{...y})}).on("drag",V=>{let{transform:L,snapGrid:F,snapToGrid:H,nodeOrigin:b}=n(),N=Pn(V.sourceEvent,{transform:L,snapGrid:F,snapToGrid:H,containerBounds:w}),k=[];if(!m)return;let{x:I,y:D,width:A,height:R}=y,B={},X=m.origin??b,{width:Q,height:Z,x:K,y:ne}=Ep(v,i.controlDirection,N,i.boundaries,i.keepAspectRatio,X,C,z),Y=Q!==A,$=Z!==R,q=K!==I&&Y,J=ne!==D&&$;if(!q&&!J&&!Y&&!$)return;let te={prevValues:{...y},startX:v.x,startY:v.y,childNodes:S.map(ie=>({...ie,position:{...ie.position}}))};if((q||J||X[0]===1||X[1]===1)&&(B.x=q?K:y.x,B.y=J?ne:y.y,y.x=B.x,y.y=B.y,S.length>0)){let ie=K-I,se=ne-D;for(let ge of S)ge.position={x:ge.position.x-ie+X[0]*(Q-A),y:ge.position.y-se+X[1]*(Z-R)},k.push(ge)}if((Y||$)&&(B.width=Y&&(!i.resizeDirection||i.resizeDirection==="horizontal")?Q:y.width,B.height=$&&(!i.resizeDirection||i.resizeDirection==="vertical")?Z:y.height,y.width=B.width,y.height=B.height),E&&m.expandParent){let ie=X[0]*(B.width??0);B.x&&B.x<ie&&(y.x=ie,v.x=v.x-(B.x-ie));let se=X[1]*(B.height??0);B.y&&B.y<se&&(y.y=se,v.y=v.y-(B.y-se))}let G=Sp({width:y.width,prevWidth:A,height:y.height,prevHeight:R,affectsX:i.controlDirection.affectsX,affectsY:i.controlDirection.affectsY}),j={...y,direction:G};if(x?.(V,j)===!1){y=te.prevValues,v.x=te.startX,v.y=te.startY,S.forEach((ie,se)=>{ie.position=te.childNodes[se].position});return}h?.(V,j),o(B,k)}).on("end",V=>{g?.(V,{...y}),r?.({...y})});s.call(P)}function c(){s.on(".drag",null)}return{update:a,destroy:c}}var lc=Ge(require("react"),1),uc=Ge(rc(),1);var sc={},ic=e=>{let t,n=new Set,o=(d,u)=>{let f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){let p=t;t=u??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(sc.env?sc.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},ac=e=>e?ic(e):ic;var{useDebugValue:Xp}=lc.default,{useSyncExternalStoreWithSelector:Yp}=uc.default,Zp=e=>e;function Zr(e,t=Zp,n){let o=Yp(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Xp(o),o}var cc=(e,t)=>{let n=ac(e),o=(r,s=t)=>Zr(n,r,s);return Object.assign(o,n),o},dc=(e,t)=>e?cc(e,t):cc;function ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var Gp=require("react-dom"),Ro=(0,T.createContext)(null),Up=Ro.Provider,Hc=Oe.error001("react");function ae(e,t){let n=(0,T.useContext)(Ro);if(n===null)throw new Error(Hc);return Zr(n,e,t)}function de(){let e=(0,T.useContext)(Ro);if(e===null)throw new Error(Hc);return(0,T.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var fc={display:"none"},jp={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Bc="react-flow__node-desc",Vc="react-flow__edge-desc",Kp="react-flow__aria-live",Qp=e=>e.ariaLiveMessage,Jp=e=>e.ariaLabelConfig;function eg({rfId:e}){let t=ae(Qp);return(0,O.jsx)("div",{id:`${Kp}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:jp,children:t})}function tg({rfId:e,disableKeyboardA11y:t}){let n=ae(Jp);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{id:`${Bc}-${e}`,style:fc,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,O.jsx)("div",{id:`${Vc}-${e}`,style:fc,children:n["edge.a11yDescription.default"]}),!t&&(0,O.jsx)(eg,{rfId:e})]})}var Wo=(0,T.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},s)=>{let i=`${e}`.split("-");return(0,O.jsx)("div",{className:me(["react-flow__panel",n,...i]),style:o,ref:s,...r,children:t})});Wo.displayName="Panel";var pc="https://reactflow.dev?utm_source=attribution";function ng({proOptions:e,position:t="bottom-right"}){return(0,T.useEffect)(()=>{},[]),e?.hideAttribution?null:(0,O.jsx)(Wo,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${pc}`,children:(0,O.jsx)("a",{href:pc,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var og=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},Bo=e=>e.id;function rg(e,t){return ue(e.selectedNodes.map(Bo),t.selectedNodes.map(Bo))&&ue(e.selectedEdges.map(Bo),t.selectedEdges.map(Bo))}function ig({onSelectionChange:e}){let t=de(),{selectedNodes:n,selectedEdges:o}=ae(og,rg);return(0,T.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(s=>s(r))},[n,o,e]),null}var sg=e=>!!e.onSelectionChangeHandlers;function ag({onSelectionChange:e}){let t=ae(sg);return e||t?(0,O.jsx)(ig,{onSelectionChange:e}):null}var Fc=[0,0],cg={x:0,y:0,zoom:1},lg=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],gc=[...lg,"rfId"],ug=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),hc={translateExtent:qt,nodeOrigin:Fc,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function dg(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:s,setNodeExtent:i,reset:a,setDefaultNodesAndEdges:c}=ae(ug,ue),l=de();(0,T.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{d.current=hc,a()}),[]);let d=(0,T.useRef)(hc);return(0,T.useEffect)(()=>{for(let u of gc){let f=e[u],p=d.current[u];f!==p&&(typeof e[u]>"u"||(u==="nodes"?t(f):u==="edges"?n(f):u==="minZoom"?o(f):u==="maxZoom"?r(f):u==="translateExtent"?s(f):u==="nodeExtent"?i(f):u==="ariaLabelConfig"?l.setState({ariaLabelConfig:Ma(f)}):u==="fitView"?l.setState({fitViewQueued:f}):u==="fitViewOptions"?l.setState({fitViewOptions:f}):l.setState({[u]:f})))}d.current=e},gc.map(u=>e[u])),null}function mc(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function fg(e){let[t,n]=(0,T.useState)(e==="system"?null:e);return(0,T.useEffect)(()=>{if(e!=="system"){n(e);return}let o=mc(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:mc()?.matches?"dark":"light"}var yc=typeof document<"u"?document:null;function Tn(e=null,t={target:yc,actInsideInputWithModifier:!0}){let[n,o]=(0,T.useState)(!1),r=(0,T.useRef)(!1),s=(0,T.useRef)(new Set([])),[i,a]=(0,T.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(u=>typeof u=="string").map(u=>u.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),d=l.reduce((u,f)=>u.concat(...f),[]);return[l,d]}return[[],[]]},[e]);return(0,T.useEffect)(()=>{let c=t?.target??yc,l=t?.actInsideInputWithModifier??!0;if(e!==null){let d=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Hr(p))return!1;let g=wc(p.code,a);if(s.current.add(p[g]),xc(i,s.current,!1)){let x=p.composedPath?.()?.[0]||p.target,y=x?.nodeName==="BUTTON"||x?.nodeName==="A";t.preventDefault!==!1&&(r.current||!y)&&p.preventDefault(),o(!0)}},u=p=>{let h=wc(p.code,a);xc(i,s.current,!0)?(o(!1),s.current.clear()):s.current.delete(p[h]),p.key==="Meta"&&s.current.clear(),r.current=!1},f=()=>{s.current.clear(),o(!1)};return c?.addEventListener("keydown",d),c?.addEventListener("keyup",u),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{c?.removeEventListener("keydown",d),c?.removeEventListener("keyup",u),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,o]),n}function xc(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function wc(e,t){return t.includes(e)?"code":"key"}var pg=()=>{let e=de();return(0,T.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,s],panZoom:i}=e.getState();return i?(await i.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??s},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:s,maxZoom:i,panZoom:a}=e.getState(),c=Dn(t,o,r,s,i,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:s,domNode:i}=e.getState();if(!i)return t;let{x:a,y:c}=i.getBoundingClientRect(),l={x:t.x-a,y:t.y-c},d=n.snapGrid??r,u=n.snapToGrid??s;return Gt(l,o,u,d)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:s}=o.getBoundingClientRect(),i=At(t,n);return{x:i.x+r,y:i.y+s}}}),[])};function Rc(e,t){let n=[],o=new Map,r=[];for(let s of e)if(s.type==="add"){r.push(s);continue}else if(s.type==="remove"||s.type==="replace")o.set(s.id,[s]);else{let i=o.get(s.id);i?i.push(s):o.set(s.id,[s])}for(let s of t){let i=o.get(s.id);if(!i){n.push(s);continue}if(i[0].type==="remove")continue;if(i[0].type==="replace"){n.push({...i[0].item});continue}let a={...s};for(let c of i)gg(c,a);n.push(a)}return r.length&&r.forEach(s=>{s.index!==void 0?n.splice(s.index,0,{...s.item}):n.push({...s.item})}),n}function gg(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function Kr(e,t){return Rc(e,t)}function hg(e,t){return Rc(e,t)}function Ot(e,t){return{id:e,type:"select",selected:t}}function Kt(e,t=new Set,n=!1){let o=[];for(let[r,s]of e){let i=t.has(r);!(s.selected===void 0&&!i)&&s.selected!==i&&(n&&(s.selected=i),o.push(Ot(s.id,i)))}return o}function bc({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,s]of e.entries()){let i=t.get(s.id),a=i?.internals?.userNode??i;a!==void 0&&a!==s&&n.push({id:s.id,item:s,type:"replace"}),a===void 0&&n.push({item:s,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function vc(e){return{id:e.id,type:"remove"}}var mg=Ar("React Flow","https://reactflow.dev/");function yg(e,t,n={}){return za(e,t,{...n,onError:n.onError??mg})}var kc=e=>va(e),xg=e=>Nr(e);function Wc(e){return(0,T.forwardRef)(e)}var qc=typeof window<"u"?T.useLayoutEffect:T.useEffect;function _c(e){let[t,n]=(0,T.useState)(BigInt(0)),[o]=(0,T.useState)(()=>wg(()=>n(r=>r+BigInt(1))));return qc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function wg(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var Xc=(0,T.createContext)(null);function bg({children:e}){let t=de(),n=(0,T.useCallback)(a=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:d,onNodesChange:u,nodeLookup:f,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),g=c;for(let y of a)g=typeof y=="function"?y(g):y;let x=bc({items:g,lookup:f});for(let y of h.values())x=y(x);d&&l(g),x.length>0?u?.(x):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:y,nodes:v,setNodes:m}=t.getState();y&&m(v)})},[]),o=_c(n),r=(0,T.useCallback)(a=>{let{edges:c=[],setEdges:l,hasDefaultEdges:d,onEdgesChange:u,edgeLookup:f}=t.getState(),p=c;for(let h of a)p=typeof h=="function"?h(p):h;d?l(p):u&&u(bc({items:p,lookup:f}))},[]),s=_c(r),i=(0,T.useMemo)(()=>({nodeQueue:o,edgeQueue:s}),[]);return(0,O.jsx)(Xc.Provider,{value:i,children:e})}function vg(){let e=(0,T.useContext)(Xc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var kg=e=>!!e.panZoom;function Ln(){let e=pg(),t=de(),n=vg(),o=ae(kg),r=(0,T.useMemo)(()=>{let s=u=>t.getState().nodeLookup.get(u),i=u=>{n.nodeQueue.push(u)},a=u=>{n.edgeQueue.push(u)},c=u=>{let{nodeLookup:f,nodeOrigin:p}=t.getState(),h=kc(u)?u:f.get(u.id),g=h.parentId?Or(h.position,h.measured,h.parentId,f,p):h.position,x={...h,position:g,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return Yt(x)},l=(u,f,p={replace:!1})=>{i(h=>h.map(g=>{if(g.id===u){let x=typeof f=="function"?f(g):f;return p.replace&&kc(x)?x:{...g,...x}}return g}))},d=(u,f,p={replace:!1})=>{a(h=>h.map(g=>{if(g.id===u){let x=typeof f=="function"?f(g):f;return p.replace&&xg(x)?x:{...g,...x}}return g}))};return{getNodes:()=>t.getState().nodes.map(u=>({...u})),getNode:u=>s(u)?.internals.userNode,getInternalNode:s,getEdges:()=>{let{edges:u=[]}=t.getState();return u.map(f=>({...f}))},getEdge:u=>t.getState().edgeLookup.get(u),setNodes:i,setEdges:a,addNodes:u=>{let f=Array.isArray(u)?u:[u];n.nodeQueue.push(p=>[...p,...f])},addEdges:u=>{let f=Array.isArray(u)?u:[u];n.edgeQueue.push(p=>[...p,...f])},toObject:()=>{let{nodes:u=[],edges:f=[],transform:p}=t.getState(),[h,g,x]=p;return{nodes:u.map(y=>({...y})),edges:f.map(y=>({...y})),viewport:{x:h,y:g,zoom:x}}},deleteElements:async({nodes:u=[],edges:f=[]})=>{let{nodes:p,edges:h,onNodesDelete:g,onEdgesDelete:x,triggerNodeChanges:y,triggerEdgeChanges:v,onDelete:m,onBeforeDelete:w}=t.getState(),{nodes:S,edges:E}=await Sa({nodesToRemove:u,edgesToRemove:f,nodes:p,edges:h,onBeforeDelete:w}),C=E.length>0,z=S.length>0;if(C){let P=E.map(vc);x?.(E),v(P)}if(z){let P=S.map(vc);g?.(S),y(P)}return(z||C)&&m?.({nodes:S,edges:E}),{deletedNodes:S,deletedEdges:E}},getIntersectingNodes:(u,f=!0,p)=>{let h=zr(u),g=h?u:c(u),x=p!==void 0;return g?(p||t.getState().nodes).filter(y=>{let v=t.getState().nodeLookup.get(y.id);if(v&&!h&&(y.id===u.id||!v.internals.positionAbsolute))return!1;let m=Yt(x?y:v),w=An(m,g);return f&&w>0||w>=m.width*m.height||w>=g.width*g.height}):[]},isNodeIntersecting:(u,f,p=!0)=>{let g=zr(u)?u:c(u);if(!g)return!1;let x=An(g,f);return p&&x>0||x>=f.width*f.height||x>=g.width*g.height},updateNode:l,updateNodeData:(u,f,p={replace:!1})=>{l(u,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},updateEdge:d,updateEdgeData:(u,f,p={replace:!1})=>{d(u,h=>{let g=typeof f=="function"?f(h):f;return p.replace?{...h,data:g}:{...h,data:{...h.data,...g}}},p)},getNodesBounds:u=>{let{nodeLookup:f,nodeOrigin:p}=t.getState();return Mr(u,{nodeLookup:f,nodeOrigin:p})},getHandleConnections:({type:u,id:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${u}${f?`-${f}`:""}`)?.values()??[]),getNodeConnections:({type:u,handleId:f,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${u?f?`-${u}-${f}`:`-${u}`:""}`)?.values()??[]),fitView:async u=>{let f=t.getState().fitViewResolver??Ca();return t.setState({fitViewQueued:!0,fitViewOptions:u,fitViewResolver:f}),n.nodeQueue.push(p=>[...p]),f.promise}}},[]);return(0,T.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Sc=e=>e.selected,_g=typeof window<"u"?window:void 0;function Sg({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=de(),{deleteElements:o}=Ln(),r=Tn(e,{actInsideInputWithModifier:!1}),s=Tn(t,{target:_g});(0,T.useEffect)(()=>{if(r){let{edges:i,nodes:a}=n.getState();o({nodes:a.filter(Sc),edges:i.filter(Sc)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,T.useEffect)(()=>{n.setState({multiSelectionActive:s})},[s])}function Eg(e){let t=de();(0,T.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Io(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",Oe.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var qo={position:"absolute",width:"100%",height:"100%",top:0,left:0},Ng=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Cg({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panActivationKeyPressed:r,panOnScrollSpeed:s=.5,panOnScrollMode:i=Je.Free,zoomOnDoubleClick:a=!0,panOnDrag:c=!0,defaultViewport:l,translateExtent:d,minZoom:u,maxZoom:f,zoomActivationKeyCode:p,preventScrolling:h=!0,children:g,noWheelClassName:x,noPanClassName:y,onViewportChange:v,isControlledViewport:m,paneClickDistance:w,selectionOnDrag:S}){let E=de(),C=(0,T.useRef)(null),{userSelectionActive:z,lib:P,connectionInProgress:V}=ae(Ng,ue),L=Tn(p),F=(0,T.useRef)();Eg(C);let H=(0,T.useCallback)(b=>{v?.({x:b[0],y:b[1],zoom:b[2]}),m||E.setState({transform:b})},[v,m]);return(0,T.useEffect)(()=>{if(C.current){F.current=Ga({domNode:C.current,minZoom:u,maxZoom:f,translateExtent:d,viewport:l,onDraggingChange:I=>E.setState(D=>D.paneDragging===I?D:{paneDragging:I}),onPanZoomStart:(I,D)=>{let{onViewportChangeStart:A,onMoveStart:R}=E.getState();R?.(I,D),A?.(D)},onPanZoom:(I,D)=>{let{onViewportChange:A,onMove:R}=E.getState();R?.(I,D),A?.(D)},onPanZoomEnd:(I,D)=>{let{onViewportChangeEnd:A,onMoveEnd:R}=E.getState();R?.(I,D),A?.(D)}});let{x:b,y:N,zoom:k}=F.current.getViewport();return E.setState({panZoom:F.current,transform:[b,N,k],domNode:C.current.closest(".react-flow")}),()=>{F.current?.destroy()}}},[]),(0,T.useEffect)(()=>{F.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panActivationKeyPressed:r,panOnScrollSpeed:s,panOnScrollMode:i,zoomOnDoubleClick:a,panOnDrag:c,zoomActivationKeyPressed:L,preventScrolling:h,noPanClassName:y,userSelectionActive:z,noWheelClassName:x,lib:P,onTransformChange:H,connectionInProgress:V,selectionOnDrag:S,paneClickDistance:w})},[e,t,n,o,r,s,i,a,c,L,h,y,z,x,P,H,V,S,w]),(0,O.jsx)("div",{className:"react-flow__renderer",ref:C,style:qo,children:g})}var Mg=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Ig(){let{userSelectionActive:e,userSelectionRect:t}=ae(Mg,ue);return e&&t?(0,O.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var Gr=(e,t)=>n=>{n.target===t.current&&e?.(n)},Pg=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function zg({isSelecting:e,selectionKeyPressed:t,selectionMode:n=Pt.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:s,selectionOnDrag:i,onSelectionStart:a,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:d,onPaneScroll:u,onPaneMouseEnter:f,onPaneMouseMove:p,onPaneMouseLeave:h,children:g}){let x=(0,T.useRef)(0),y=de(),{userSelectionActive:v,elementsSelectable:m,dragging:w,panBy:S,autoPanSpeed:E}=ae(Pg,ue),C=m&&(e||v),z=(0,T.useRef)(null),P=(0,T.useRef)(),V=(0,T.useRef)(new Set),L=(0,T.useRef)(new Set),F=(0,T.useRef)(!1),H=(0,T.useRef)(!1),b=(0,T.useRef)({x:0,y:0}),N=(0,T.useRef)(!1),k=$=>{if(H.current||F.current||y.getState().connection.inProgress){H.current=!1,F.current=!1;return}l?.($),y.getState().resetSelectedElements(),y.setState({nodesSelectionActive:!1})},I=$=>{if(Array.isArray(o)&&o?.includes(2)){$.preventDefault();return}d?.($)},D=u?$=>u($):void 0,A=$=>{H.current&&($.stopPropagation(),H.current=!1)},R=$=>{if($.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:q,transform:J}=y.getState();if(P.current=q?.getBoundingClientRect(),!P.current)return;let te=$.target===z.current;if(!te&&!!$.target.closest(".nokey")||!e||!(i&&te||t)||$.button!==0||!$.isPrimary)return;$.target?.setPointerCapture?.($.pointerId),H.current=!1;let{x:oe,y:ie}=$e($.nativeEvent,P.current),se=Gt({x:oe,y:ie},J);y.setState({userSelectionRect:{width:0,height:0,startX:se.x,startY:se.y,x:oe,y:ie}}),te||($.stopPropagation(),$.preventDefault())};function B($,q){let{userSelectionRect:J}=y.getState();if(!J)return;let{transform:te,nodeLookup:G,edgeLookup:j,connectionLookup:oe,triggerNodeChanges:ie,triggerEdgeChanges:se,defaultEdgeOptions:ge}=y.getState(),be={x:J.startX,y:J.startY},{x:fe,y:Ne}=At(be,te),Be={startX:be.x,startY:be.y,x:$<fe?$:fe,y:q<Ne?q:Ne,width:Math.abs($-fe),height:Math.abs(q-Ne)},yt=V.current,ze=L.current;V.current=new Set(Eo(G,Be,te,n===Pt.Partial,!0).map(he=>he.id)),L.current=new Set;let le=ge?.selectable??!0;for(let he of V.current){let ke=oe.get(he);if(ke)for(let{edgeId:De}of ke.values()){let Te=j.get(De);Te&&(Te.selectable??le)&&L.current.add(De)}}if(!Tr(yt,V.current)){let he=Kt(G,V.current,!0);ie(he)}if(!Tr(ze,L.current)){let he=Kt(j,L.current);se(he)}y.setState({userSelectionRect:Be,userSelectionActive:!0,nodesSelectionActive:!1})}function X(){if(!r||!P.current)return;let[$,q]=No(b.current,P.current,E);S({x:$,y:q}).then(J=>{if(!H.current||!J){x.current=requestAnimationFrame(X);return}let{x:te,y:G}=b.current;B(te,G),x.current=requestAnimationFrame(X)})}let Q=()=>{cancelAnimationFrame(x.current),x.current=0,N.current=!1};(0,T.useEffect)(()=>()=>Q(),[]);let Z=$=>{let{userSelectionRect:q,transform:J,resetSelectedElements:te}=y.getState();if(!P.current||!q)return;let{x:G,y:j}=$e($.nativeEvent,P.current);b.current={x:G,y:j};let oe=At({x:q.startX,y:q.startY},J);if(!H.current){let ie=t?0:s;if(Math.hypot(G-oe.x,j-oe.y)<=ie)return;te(),a?.($)}H.current=!0,N.current||(X(),N.current=!0),B(G,j)},K=$=>{if(!C){$.target===z.current&&y.getState().connection.inProgress&&(F.current=!0);return}$.button===0&&($.target?.releasePointerCapture?.($.pointerId),!v&&$.target===z.current&&y.getState().userSelectionRect&&k?.($),y.setState({userSelectionActive:!1,userSelectionRect:null}),H.current&&(c?.($),y.setState({nodesSelectionActive:V.current.size>0})),Q())},ne=$=>{$.target?.releasePointerCapture?.($.pointerId),Q()},Y=o===!0||Array.isArray(o)&&o.includes(0);return(0,O.jsxs)("div",{className:me(["react-flow__pane",{draggable:Y,dragging:w,selection:e}]),onClick:C?void 0:Gr(k,z),onContextMenu:Gr(I,z),onWheel:Gr(D,z),onPointerEnter:C?void 0:f,onPointerMove:C?Z:p,onPointerUp:K,onPointerCancel:C?ne:void 0,onPointerDownCapture:C?R:void 0,onClickCapture:C?A:void 0,onPointerLeave:h,ref:z,style:qo,children:[g,(0,O.jsx)(Ig,{})]})}function jr({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:s,multiSelectionActive:i,nodeLookup:a,onError:c}=t.getState(),l=a.get(e);if(!l){c?.("012",Oe.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&i)&&(s({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function Yc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:s,nodeClickDistance:i}){let a=de(),[c,l]=(0,T.useState)(!1),d=(0,T.useRef)();return(0,T.useEffect)(()=>{if(!t)return d.current=Va({getStoreItems:()=>a.getState(),onNodeMouseDown:u=>{jr({id:u,store:a,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{d.current?.destroy(),d.current=void 0}},[t,a,e]),(0,T.useEffect)(()=>{t||!e.current||!d.current||d.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:s,nodeId:r,nodeClickDistance:i})},[n,o,t,s,e,r,i]),c}var Ag=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function Zc(){let e=de();return(0,T.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:s,nodesDraggable:i,onError:a,updateNodePositions:c,nodeLookup:l,nodeOrigin:d}=e.getState(),u=new Map,f=Ag(i),p=r?s[0]:5,h=r?s[1]:5,g=n.direction.x*p*n.factor,x=n.direction.y*h*n.factor;for(let[,y]of l){if(!f(y))continue;let v={x:y.internals.positionAbsolute.x+g,y:y.internals.positionAbsolute.y+x};r&&(v=Zt(v,s));let{position:m,positionAbsolute:w}=Ir({nodeId:y.id,nextPosition:v,nodeLookup:l,nodeExtent:o,nodeOrigin:d,onError:a});y.position=m,y.internals.positionAbsolute=w,u.set(y.id,y)}c(u)},[])}var Qr=(0,T.createContext)(null),Dg=Qr.Provider;Qr.Consumer;var Gc=()=>(0,T.useContext)(Qr),Og=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),Uc=(0,T.createContext)(null);function Tg({children:e}){let t=ae(Og,ue);return(0,O.jsx)(Uc.Provider,{value:t,children:e})}function Lg(){let e=(0,T.useContext)(Uc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var $g={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Hg=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:s,connection:i}=o,{fromHandle:a,toHandle:c,isValid:l}=i;if(!a&&!r)return $g;let d=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:d,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:s===ut.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:d&&l}};function Bg({type:e="source",position:t=U.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:s=!0,id:i,onConnect:a,children:c,className:l,onMouseDown:d,onTouchStart:u,...f},p){let h=i||null,g=e==="target",x=de(),y=Gc(),{connectOnClick:v,noPanClassName:m,rfId:w}=Lg(),{connectingFrom:S,connectingTo:E,clickConnecting:C,isPossibleEndHandle:z,connectionInProcess:P,clickConnectionInProcess:V,valid:L}=ae(Hg(y,h,e),ue);y||x.getState().onError?.("010",Oe.error010());let F=N=>{let{defaultEdgeOptions:k,onConnect:I,hasDefaultEdges:D}=x.getState(),A={...k,...N};if(D){let{edges:R,setEdges:B,onError:X}=x.getState();B(yg(A,R,{onError:X}))}I?.(A),a?.(A)},H=N=>{if(!y)return;let k=Br(N.nativeEvent);if(r&&(k&&N.button===0||!k)){let I=x.getState();Lo.onPointerDown(N.nativeEvent,{handleDomNode:N.currentTarget,autoPanOnConnect:I.autoPanOnConnect,connectionMode:I.connectionMode,connectionRadius:I.connectionRadius,domNode:I.domNode,nodeLookup:I.nodeLookup,lib:I.lib,isTarget:g,handleId:h,nodeId:y,flowId:I.rfId,panBy:I.panBy,cancelConnection:I.cancelConnection,onConnectStart:I.onConnectStart,onConnectEnd:(...D)=>x.getState().onConnectEnd?.(...D),updateConnection:I.updateConnection,onConnect:F,isValidConnection:n||((...D)=>x.getState().isValidConnection?.(...D)??!0),getTransform:()=>x.getState().transform,getFromHandle:()=>x.getState().connection.fromHandle,autoPanSpeed:I.autoPanSpeed,dragThreshold:I.connectionDragThreshold})}k?d?.(N):u?.(N)},b=N=>{let{onClickConnectStart:k,onClickConnectEnd:I,connectionClickStartHandle:D,connectionMode:A,isValidConnection:R,lib:B,rfId:X,nodeLookup:Q,connection:Z}=x.getState();if(!y||!D&&!r)return;if(!D){k?.(N.nativeEvent,{nodeId:y,handleId:h,handleType:e}),x.setState({connectionClickStartHandle:{nodeId:y,type:e,id:h}});return}let K=$r(N.target),ne=n||R,{connection:Y,isValid:$}=Lo.isValid(N.nativeEvent,{handle:{nodeId:y,id:h,type:e},connectionMode:A,fromNodeId:D.nodeId,fromHandleId:D.id||null,fromType:D.type,isValidConnection:ne,flowId:X,doc:K,lib:B,nodeLookup:Q});$&&Y&&F(Y);let q=structuredClone(Z);delete q.inProgress,q.toPosition=q.toHandle?q.toHandle.position:null,I?.(N,q),x.setState({connectionClickStartHandle:null})};return(0,O.jsx)("div",{"data-handleid":h,"data-nodeid":y,"data-handlepos":t,"data-id":`${w}-${y}-${h}-${e}`,className:me(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",m,l,{source:!g,target:g,connectable:o,connectablestart:r,connectableend:s,clickconnecting:C,connectingfrom:S,connectingto:E,valid:L,connectionindicator:o&&(!P||z)&&(P||V?s:r)}]),onMouseDown:H,onTouchStart:H,onClick:v?b:void 0,ref:p,...f,children:c})}var et=(0,T.memo)(Wc(Bg));function Vg({data:e,isConnectable:t,sourcePosition:n=U.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[e?.label,(0,O.jsx)(et,{type:"source",position:n,isConnectable:t})]})}function Fg({data:e,isConnectable:t,targetPosition:n=U.Top,sourcePosition:o=U.Bottom}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(et,{type:"target",position:n,isConnectable:t}),e?.label,(0,O.jsx)(et,{type:"source",position:o,isConnectable:t})]})}function Rg(){return null}function Wg({data:e,isConnectable:t,targetPosition:n=U.Top}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(et,{type:"target",position:n,isConnectable:t}),e?.label]})}var Fo={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Ec={input:Vg,default:Fg,output:Wg,group:Rg};function qg(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var Xg=e=>{let{width:t,height:n,x:o,y:r}=Xt(e.nodeLookup,{filter:s=>!!s.selected});return{width:Le(t)?t:null,height:Le(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function Yg({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=de(),{width:r,height:s,transformString:i,userSelectionActive:a}=ae(Xg,ue),c=Zc(),l=(0,T.useRef)(null);(0,T.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let d=!a&&r!==null&&s!==null;if(Yc({nodeRef:l,disabled:!d}),!d)return null;let u=e?p=>{let h=o.getState().nodes.filter(g=>g.selected);e(p,h)}:void 0,f=p=>{Object.prototype.hasOwnProperty.call(Fo,p.key)&&(p.preventDefault(),c({direction:Fo[p.key],factor:p.shiftKey?4:1}))};return(0,O.jsx)("div",{className:me(["react-flow__nodesselection","react-flow__container",t]),style:{transform:i},children:(0,O.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:u,tabIndex:n?void 0:-1,onKeyDown:n?void 0:f,style:{width:r,height:s}})})}var Nc=typeof window<"u"?window:void 0,Zg=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function jc({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:s,onPaneScroll:i,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:d,selectionMode:u,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:g,zoomActivationKeyCode:x,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:w,panOnScrollSpeed:S,panOnScrollMode:E,zoomOnDoubleClick:C,panOnDrag:z,autoPanOnSelection:P,defaultViewport:V,translateExtent:L,minZoom:F,maxZoom:H,preventScrolling:b,onSelectionContextMenu:N,noWheelClassName:k,noPanClassName:I,disableKeyboardA11y:D,onViewportChange:A,isControlledViewport:R}){let{nodesSelectionActive:B,userSelectionActive:X}=ae(Zg,ue),Q=Tn(l,{target:Nc}),Z=Tn(g,{target:Nc}),K=Z||z,ne=Z||w,Y=d&&K!==!0,$=Q||X||Y;return Sg({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,O.jsx)(Cg,{onPaneContextMenu:s,elementsSelectable:y,zoomOnScroll:v,zoomOnPinch:m,panOnScroll:ne,panActivationKeyPressed:Z,panOnScrollSpeed:S,panOnScrollMode:E,zoomOnDoubleClick:C,panOnDrag:!Q&&K,defaultViewport:V,translateExtent:L,minZoom:F,maxZoom:H,zoomActivationKeyCode:x,preventScrolling:b,noWheelClassName:k,noPanClassName:I,onViewportChange:A,isControlledViewport:R,paneClickDistance:a,selectionOnDrag:Y,children:(0,O.jsxs)(zg,{onSelectionStart:f,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:s,onPaneScroll:i,panOnDrag:K,autoPanOnSelection:P,isSelecting:!!$,selectionMode:u,selectionKeyPressed:Q,paneClickDistance:a,selectionOnDrag:Y,children:[e,B&&(0,O.jsx)(Yg,{onSelectionContextMenu:N,noPanClassName:I,disableKeyboardA11y:D})]})})}jc.displayName="FlowRenderer";var Gg=(0,T.memo)(jc),Ug=e=>t=>e?Eo(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function jg(e){return ae((0,T.useCallback)(Ug(e),[e]),ue)}var Kg=e=>e.updateNodeInternals;function Qg(){let e=ae(Kg),[t]=(0,T.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let s=r.target.getAttribute("data-id");o.set(s,{id:s,nodeElement:r.target,force:!0})}),e(o)}));return(0,T.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function Jg({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=de(),s=(0,T.useRef)(null),i=(0,T.useRef)(null),a=(0,T.useRef)(e.sourcePosition),c=(0,T.useRef)(e.targetPosition),l=(0,T.useRef)(t),d=n&&!!e.internals.handleBounds;return(0,T.useEffect)(()=>{s.current&&!e.hidden&&(!d||i.current!==s.current)&&(i.current&&o?.unobserve(i.current),o?.observe(s.current),i.current=s.current)},[d,e.hidden]),(0,T.useEffect)(()=>()=>{i.current&&(o?.unobserve(i.current),i.current=null)},[]),(0,T.useEffect)(()=>{if(s.current){let u=l.current!==t,f=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(u||f||p)&&(l.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:s.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),s}function eh({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:s,onDoubleClick:i,nodesDraggable:a,elementsSelectable:c,nodesConnectable:l,nodesFocusable:d,resizeObserver:u,noDragClassName:f,noPanClassName:p,disableKeyboardA11y:h,rfId:g,nodeTypes:x,nodeClickDistance:y,onError:v}){let{node:m,internals:w,isParent:S}=ae($=>{let q=$.nodeLookup.get(e),J=$.parentLookup.has(e);return{node:q,internals:q.internals,isParent:J}},ue),E=m.type||"default",C=x?.[E]||Ec[E];C===void 0&&(v?.("003",Oe.error003(E)),E="default",C=x?.default||Ec.default);let z=!!(m.draggable||a&&typeof m.draggable>"u"),P=!!(m.selectable||c&&typeof m.selectable>"u"),V=!!(m.connectable||l&&typeof m.connectable>"u"),L=!!(m.focusable||d&&typeof m.focusable>"u"),F=de(),H=Dr(m),b=Jg({node:m,nodeType:E,hasDimensions:H,resizeObserver:u}),N=Yc({nodeRef:b,disabled:m.hidden||!z,noDragClassName:f,handleSelector:m.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:y}),k=Zc();if(m.hidden)return null;let I=He(m),D=qg(m),A=P||z||t||n||o||r,R=n?$=>n($,{...w.userNode}):void 0,B=o?$=>o($,{...w.userNode}):void 0,X=r?$=>r($,{...w.userNode}):void 0,Q=s?$=>s($,{...w.userNode}):void 0,Z=i?$=>i($,{...w.userNode}):void 0,K=$=>{let{selectNodesOnDrag:q,nodeDragThreshold:J}=F.getState();P&&(!q||!z||J>0)&&jr({id:e,store:F,nodeRef:b}),t&&t($,{...w.userNode})},ne=$=>{if(!(Hr($.nativeEvent)||h)){if(_r.includes($.key)&&P){let q=$.key==="Escape";jr({id:e,store:F,unselect:q,nodeRef:b})}else if(z&&m.selected&&Object.prototype.hasOwnProperty.call(Fo,$.key)){$.preventDefault();let{ariaLabelConfig:q}=F.getState();F.setState({ariaLiveMessage:q["node.a11yDescription.ariaLiveMessage"]({direction:$.key.replace("Arrow","").toLowerCase(),x:~~w.positionAbsolute.x,y:~~w.positionAbsolute.y})}),k({direction:Fo[$.key],factor:$.shiftKey?4:1})}}},Y=()=>{if(h||!b.current?.matches(":focus-visible"))return;let{transform:$,width:q,height:J,autoPanOnNodeFocus:te,setCenter:G}=F.getState();if(!te)return;Eo(new Map([[e,m]]),{x:0,y:0,width:q,height:J},$,!0).length>0||G(m.position.x+I.width/2,m.position.y+I.height/2,{zoom:$[2]})};return(0,O.jsx)("div",{className:me(["react-flow__node",`react-flow__node-${E}`,{[p]:z},m.className,{selected:m.selected,selectable:P,parent:S,draggable:z,dragging:N}]),ref:b,style:{zIndex:w.z,transform:`translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:H?"visible":"hidden",...m.style,...D},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:R,onMouseMove:B,onMouseLeave:X,onContextMenu:Q,onClick:K,onDoubleClick:Z,onKeyDown:L?ne:void 0,tabIndex:L?0:void 0,onFocus:L?Y:void 0,role:m.ariaRole??(L?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${Bc}-${g}`,"aria-label":m.ariaLabel,...m.domAttributes,children:(0,O.jsx)(Dg,{value:e,children:(0,O.jsx)(C,{id:e,data:m.data,type:E,positionAbsoluteX:w.positionAbsolute.x,positionAbsoluteY:w.positionAbsolute.y,selected:m.selected??!1,selectable:P,draggable:z,deletable:m.deletable??!0,isConnectable:V,sourcePosition:m.sourcePosition,targetPosition:m.targetPosition,dragging:N,dragHandle:m.dragHandle,zIndex:w.z,parentId:m.parentId,...I})})})}var th=(0,T.memo)(eh),nh=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Kc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ae(nh,ue),s=jg(e.onlyRenderVisibleElements),i=Qg();return(0,O.jsx)("div",{className:"react-flow__nodes",style:qo,children:s.map(a=>(0,O.jsx)(th,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:i,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}Kc.displayName="NodeRenderer";var oh=(0,T.memo)(Kc);function rh(e){return ae((0,T.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let s=n.nodeLookup.get(r.source),i=n.nodeLookup.get(r.target);s&&i&&Pa({sourceNode:s,targetNode:i,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ue)}var ih=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,O.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},sh=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,O.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Cc={[Rt.Arrow]:ih,[Rt.ArrowClosed]:sh};function ah(e){let t=de();return(0,T.useMemo)(()=>Object.prototype.hasOwnProperty.call(Cc,e)?Cc[e]:(t.getState().onError?.("009",Oe.error009(e)),null),[e])}var ch=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:s="strokeWidth",strokeWidth:i,orient:a="auto-start-reverse"})=>{let c=ah(t);return c?(0,O.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:s,orient:a,refX:"0",refY:"0",children:(0,O.jsx)(c,{color:n,strokeWidth:i})}):null},Qc=({defaultColor:e,rfId:t})=>{let n=ae(s=>s.edges),o=ae(s=>s.defaultEdgeOptions),r=(0,T.useMemo)(()=>Da(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,O.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,O.jsx)("defs",{children:r.map(s=>(0,O.jsx)(ch,{id:s.id,type:s.type,color:s.color,width:s.width,height:s.height,markerUnits:s.markerUnits,strokeWidth:s.strokeWidth,orient:s.orient},s.id))})}):null};Qc.displayName="MarkerDefinitions";var lh=(0,T.memo)(Qc);function Jc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:s,labelBgPadding:i=[2,4],labelBgBorderRadius:a=2,children:c,className:l,...d}){let[u,f]=(0,T.useState)({x:1,y:0,width:0,height:0}),p=me(["react-flow__edge-textwrapper",l]),h=(0,T.useRef)(null);return(0,T.useEffect)(()=>{if(h.current){let g=h.current.getBBox();f({x:g.x,y:g.y,width:g.width,height:g.height})}},[n]),n?(0,O.jsxs)("g",{transform:`translate(${e-u.width/2} ${t-u.height/2})`,className:p,visibility:u.width?"visible":"hidden",...d,children:[r&&(0,O.jsx)("rect",{width:u.width+2*i[0],x:-i[0],y:-i[1],height:u.height+2*i[1],className:"react-flow__edge-textbg",style:s,rx:a,ry:a}),(0,O.jsx)("text",{className:"react-flow__edge-text",y:u.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}Jc.displayName="EdgeText";var uh=(0,T.memo)(Jc);function Qt({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:s,labelBgStyle:i,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:l=20,...d}){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("path",{...d,d:e,fill:"none",className:me(["react-flow__edge-path",d.className])}),l?(0,O.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&Le(t)&&Le(n)?(0,O.jsx)(uh,{x:t,y:n,label:o,labelStyle:r,labelShowBg:s,labelBgStyle:i,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function Mc({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===U.Left||e===U.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function el({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:s=U.Top}){let[i,a]=Mc({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=Mc({pos:s,x1:o,y1:r,x2:e,y2:t}),[d,u,f,p]=Po({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:i,sourceControlY:a,targetControlX:c,targetControlY:l});return[`M${e},${t} C${i},${a} ${c},${l} ${o},${r}`,d,u,f,p]}function tl(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:s,sourcePosition:i,targetPosition:a,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:y})=>{let[v,m,w]=el({sourceX:n,sourceY:o,sourcePosition:i,targetX:r,targetY:s,targetPosition:a}),S=e.isInternal?void 0:t;return(0,O.jsx)(Qt,{id:S,path:v,labelX:m,labelY:w,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:y})})}var dh=tl({isInternal:!1}),nl=tl({isInternal:!0});dh.displayName="SimpleBezierEdge";nl.displayName="SimpleBezierEdgeInternal";function ol(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:s,label:i,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:u,style:f,sourcePosition:p=U.Bottom,targetPosition:h=U.Top,markerEnd:g,markerStart:x,pathOptions:y,interactionWidth:v})=>{let[m,w,S]=On({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:s,targetPosition:h,borderRadius:y?.borderRadius,offset:y?.offset,stepPosition:y?.stepPosition}),E=e.isInternal?void 0:t;return(0,O.jsx)(Qt,{id:E,path:m,labelX:w,labelY:S,label:i,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:u,style:f,markerEnd:g,markerStart:x,interactionWidth:v})})}var rl=ol({isInternal:!1}),il=ol({isInternal:!0});rl.displayName="SmoothStepEdge";il.displayName="SmoothStepEdgeInternal";function sl(e){return(0,T.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,O.jsx)(rl,{...n,id:o,pathOptions:(0,T.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var fh=sl({isInternal:!1}),al=sl({isInternal:!0});fh.displayName="StepEdge";al.displayName="StepEdgeInternal";function cl(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:s,label:i,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:u,style:f,markerEnd:p,markerStart:h,interactionWidth:g})=>{let[x,y,v]=Ao({sourceX:n,sourceY:o,targetX:r,targetY:s}),m=e.isInternal?void 0:t;return(0,O.jsx)(Qt,{id:m,path:x,labelX:y,labelY:v,label:i,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:d,labelBgBorderRadius:u,style:f,markerEnd:p,markerStart:h,interactionWidth:g})})}var ph=cl({isInternal:!1}),ll=cl({isInternal:!0});ph.displayName="StraightEdge";ll.displayName="StraightEdgeInternal";function ul(e){return(0,T.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:s,sourcePosition:i=U.Bottom,targetPosition:a=U.Top,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,pathOptions:y,interactionWidth:v})=>{let[m,w,S]=zo({sourceX:n,sourceY:o,sourcePosition:i,targetX:r,targetY:s,targetPosition:a,curvature:y?.curvature}),E=e.isInternal?void 0:t;return(0,O.jsx)(Qt,{id:E,path:m,labelX:w,labelY:S,label:c,labelStyle:l,labelShowBg:d,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,style:h,markerEnd:g,markerStart:x,interactionWidth:v})})}var gh=ul({isInternal:!1}),dl=ul({isInternal:!0});gh.displayName="BezierEdge";dl.displayName="BezierEdgeInternal";var Ic={default:dl,straight:ll,step:al,smoothstep:il,simplebezier:nl},Pc={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},hh=(e,t,n)=>n===U.Left?e-t:n===U.Right?e+t:e,mh=(e,t,n)=>n===U.Top?e-t:n===U.Bottom?e+t:e,zc="react-flow__edgeupdater";function Ac({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:s,onMouseOut:i,type:a}){return(0,O.jsx)("circle",{onMouseDown:r,onMouseEnter:s,onMouseOut:i,className:me([zc,`${zc}-${a}`]),cx:hh(t,o,e),cy:mh(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function yh({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:s,targetY:i,sourcePosition:a,targetPosition:c,onReconnect:l,onReconnectStart:d,onReconnectEnd:u,setReconnecting:f,setUpdateHover:p}){let h=de(),g=(w,S)=>{if(w.button!==0)return;let{autoPanOnConnect:E,domNode:C,connectionMode:z,connectionRadius:P,lib:V,onConnectStart:L,cancelConnection:F,nodeLookup:H,rfId:b,panBy:N,updateConnection:k}=h.getState(),I=S.type==="target",D=(B,X)=>{f(!1),u?.(B,n,S.type,X)},A=B=>l?.(n,B),R=(B,X)=>{f(!0),d?.(w,n,S.type),L?.(B,X)};Lo.onPointerDown(w.nativeEvent,{autoPanOnConnect:E,connectionMode:z,connectionRadius:P,domNode:C,handleId:S.id,nodeId:S.nodeId,nodeLookup:H,isTarget:I,edgeUpdaterType:S.type,lib:V,flowId:b,cancelConnection:F,panBy:N,isValidConnection:(...B)=>h.getState().isValidConnection?.(...B)??!0,onConnect:A,onConnectStart:R,onConnectEnd:(...B)=>h.getState().onConnectEnd?.(...B),onReconnectEnd:D,updateConnection:k,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:w.currentTarget})},x=w=>g(w,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),y=w=>g(w,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),m=()=>p(!1);return(0,O.jsxs)(O.Fragment,{children:[(e===!0||e==="source")&&(0,O.jsx)(Ac,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:x,onMouseEnter:v,onMouseOut:m,type:"source"}),(e===!0||e==="target")&&(0,O.jsx)(Ac,{position:c,centerX:s,centerY:i,radius:t,onMouseDown:y,onMouseEnter:v,onMouseOut:m,type:"target"})]})}function xh({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:s,onContextMenu:i,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,reconnectRadius:d,onReconnect:u,onReconnectStart:f,onReconnectEnd:p,rfId:h,edgeTypes:g,noPanClassName:x,onError:y,disableKeyboardA11y:v}){let m=ae(G=>G.edgeLookup.get(e)),w=ae(G=>G.defaultEdgeOptions);m=w?{...w,...m}:m;let S=m.type||"default",E=g?.[S]||Ic[S];E===void 0&&(y?.("011",Oe.error011(S)),S="default",E=g?.default||Ic.default);let C=!!(m.focusable||t&&typeof m.focusable>"u"),z=typeof u<"u"&&(m.reconnectable||n&&typeof m.reconnectable>"u"),P=!!(m.selectable||o&&typeof m.selectable>"u"),V=(0,T.useRef)(null),[L,F]=(0,T.useState)(!1),[H,b]=(0,T.useState)(!1),N=de(),{zIndex:k=m.zIndex,sourceX:I,sourceY:D,targetX:A,targetY:R,sourcePosition:B,targetPosition:X}=ae((0,T.useCallback)(G=>{let j=G.nodeLookup.get(m.source),oe=G.nodeLookup.get(m.target);if(!j||!oe)return Pc;let ie=Aa({id:e,sourceNode:j,targetNode:oe,sourceHandle:m.sourceHandle||null,targetHandle:m.targetHandle||null,connectionMode:G.connectionMode,onError:y}),se=Ia({selected:m.selected,zIndex:m.zIndex,sourceNode:j,targetNode:oe,elevateOnSelect:G.elevateEdgesOnSelect,zIndexMode:G.zIndexMode});return{...ie||Pc,zIndex:se}},[m.source,m.target,m.sourceHandle,m.targetHandle,m.selected,m.zIndex,y]),ue),Q=(0,T.useMemo)(()=>m.markerStart?`url('#${Do(m.markerStart,h)}')`:void 0,[m.markerStart,h]),Z=(0,T.useMemo)(()=>m.markerEnd?`url('#${Do(m.markerEnd,h)}')`:void 0,[m.markerEnd,h]);if(m.hidden||I===null||D===null||A===null||R===null)return null;let K=G=>{let{addSelectedEdges:j,unselectNodesAndEdges:oe,multiSelectionActive:ie}=N.getState();P&&(N.setState({nodesSelectionActive:!1}),m.selected&&ie?(oe({nodes:[],edges:[m]}),V.current?.blur()):j([e])),r&&r(G,m)},ne=s?G=>{s(G,{...m})}:void 0,Y=i?G=>{i(G,{...m})}:void 0,$=a?G=>{a(G,{...m})}:void 0,q=c?G=>{c(G,{...m})}:void 0,J=l?G=>{l(G,{...m})}:void 0,te=G=>{if(!v&&_r.includes(G.key)&&P){let{unselectNodesAndEdges:j,addSelectedEdges:oe}=N.getState();G.key==="Escape"?(V.current?.blur(),j({edges:[m]})):oe([e])}};return(0,O.jsx)("svg",{style:{zIndex:k},children:(0,O.jsxs)("g",{className:me(["react-flow__edge",`react-flow__edge-${S}`,m.className,x,{selected:m.selected,animated:m.animated,inactive:!P&&!r,updating:L,selectable:P}]),onClick:K,onDoubleClick:ne,onContextMenu:Y,onMouseEnter:$,onMouseMove:q,onMouseLeave:J,onKeyDown:C?te:void 0,tabIndex:C?0:void 0,role:m.ariaRole??(C?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":m.ariaLabel===null?void 0:m.ariaLabel||`Edge from ${m.source} to ${m.target}`,"aria-describedby":C?`${Vc}-${h}`:void 0,ref:V,...m.domAttributes,children:[!H&&(0,O.jsx)(E,{id:e,source:m.source,target:m.target,type:m.type,selected:m.selected,animated:m.animated,selectable:P,deletable:m.deletable??!0,label:m.label,labelStyle:m.labelStyle,labelShowBg:m.labelShowBg,labelBgStyle:m.labelBgStyle,labelBgPadding:m.labelBgPadding,labelBgBorderRadius:m.labelBgBorderRadius,sourceX:I,sourceY:D,targetX:A,targetY:R,sourcePosition:B,targetPosition:X,data:m.data,style:m.style,sourceHandleId:m.sourceHandle,targetHandleId:m.targetHandle,markerStart:Q,markerEnd:Z,pathOptions:"pathOptions"in m?m.pathOptions:void 0,interactionWidth:m.interactionWidth}),z&&(0,O.jsx)(yh,{edge:m,isReconnectable:z,reconnectRadius:d,onReconnect:u,onReconnectStart:f,onReconnectEnd:p,sourceX:I,sourceY:D,targetX:A,targetY:R,sourcePosition:B,targetPosition:X,setUpdateHover:F,setReconnecting:b})]})})}var wh=(0,T.memo)(xh),bh=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function fl({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:s,onEdgeContextMenu:i,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:d,reconnectRadius:u,onEdgeDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:g}){let{edgesFocusable:x,edgesReconnectable:y,elementsSelectable:v,onError:m}=ae(bh,ue),w=rh(t);return(0,O.jsxs)("div",{className:"react-flow__edges",children:[(0,O.jsx)(lh,{defaultColor:e,rfId:n}),w.map(S=>(0,O.jsx)(wh,{id:S,edgesFocusable:x,edgesReconnectable:y,elementsSelectable:v,noPanClassName:r,onReconnect:s,onContextMenu:i,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,onClick:d,reconnectRadius:u,onDoubleClick:f,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:m,edgeTypes:o,disableKeyboardA11y:g},S))]})}fl.displayName="EdgeRenderer";var vh=(0,T.memo)(fl),Dc=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function kh({children:e}){let t=de(),n=(0,T.useRef)(null),[o]=(0,T.useState)(()=>t.getState().transform);return qc(()=>{let r=null,s=()=>{let i=t.getState().transform;r&&i[0]===r[0]&&i[1]===r[1]&&i[2]===r[2]||(r=i,n.current&&(n.current.style.transform=Dc(i)))};return s(),t.subscribe(s)},[t]),(0,O.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Dc(o)},children:e})}function _h(e){let t=Ln(),n=(0,T.useRef)(!1);(0,T.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Sh=e=>e.panZoom?.syncViewport;function Eh(e){let t=ae(Sh),n=de();return(0,T.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Oc(e){return e.connection.inProgress?{...e.connection,to:Gt(e.connection.to,e.transform)}:{...e.connection}}function Nh(e){return e?n=>{let o=Oc(n);return e(o)}:Oc}function Ch(e){let t=Nh(e);return ae(t,ue)}var Mh=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Ih({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:s,height:i,isValid:a,inProgress:c}=ae(Mh,ue);return!(s&&r&&c)?null:(0,O.jsx)("svg",{style:e,width:s,height:i,className:"react-flow__connectionline react-flow__container",children:(0,O.jsx)("g",{className:me(["react-flow__connection",Lr(a)]),children:(0,O.jsx)(pl,{style:t,type:n,CustomComponent:o,isValid:a})})})}var pl=({style:e,type:t=qe.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:s,fromNode:i,fromHandle:a,fromPosition:c,to:l,toNode:d,toHandle:u,toPosition:f,pointer:p}=Ch();if(!r)return;if(n)return(0,O.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:i,fromHandle:a,fromX:s.x,fromY:s.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:f,connectionStatus:Lr(o),toNode:d,toHandle:u,pointer:p});let h="",g={sourceX:s.x,sourceY:s.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:f};switch(t){case qe.Bezier:[h]=zo(g);break;case qe.SimpleBezier:[h]=el(g);break;case qe.Step:[h]=On({...g,borderRadius:0});break;case qe.SmoothStep:[h]=On(g);break;default:[h]=Ao(g)}return(0,O.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};pl.displayName="ConnectionLine";var Ph={};function Tc(e=Ph){let t=(0,T.useRef)(e),n=de();(0,T.useEffect)(()=>{},[e])}function zh(){let e=de(),t=(0,T.useRef)(!1);(0,T.useEffect)(()=>{},[])}function gl({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:s,onEdgeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:d,onSelectionContextMenu:u,onSelectionStart:f,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:g,connectionLineComponent:x,connectionLineContainerStyle:y,selectionKeyCode:v,selectionOnDrag:m,selectionMode:w,multiSelectionKeyCode:S,panActivationKeyCode:E,zoomActivationKeyCode:C,deleteKeyCode:z,onlyRenderVisibleElements:P,elementsSelectable:V,defaultViewport:L,translateExtent:F,minZoom:H,maxZoom:b,preventScrolling:N,defaultMarkerColor:k,zoomOnScroll:I,zoomOnPinch:D,panOnScroll:A,panOnScrollSpeed:R,panOnScrollMode:B,zoomOnDoubleClick:X,panOnDrag:Q,autoPanOnSelection:Z,onPaneClick:K,onPaneMouseEnter:ne,onPaneMouseMove:Y,onPaneMouseLeave:$,onPaneScroll:q,onPaneContextMenu:J,paneClickDistance:te,nodeClickDistance:G,onEdgeContextMenu:j,onEdgeMouseEnter:oe,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:ge,onReconnect:be,onReconnectStart:fe,onReconnectEnd:Ne,noDragClassName:Be,noWheelClassName:yt,noPanClassName:ze,disableKeyboardA11y:le,nodeExtent:he,rfId:ke,viewport:De,onViewportChange:Te,nodesDraggable:nn}){return Tc(e),Tc(t),zh(),_h(n),Eh(De),(0,O.jsx)(Gg,{onPaneClick:K,onPaneMouseEnter:ne,onPaneMouseMove:Y,onPaneMouseLeave:$,onPaneContextMenu:J,onPaneScroll:q,paneClickDistance:te,deleteKeyCode:z,selectionKeyCode:v,selectionOnDrag:m,selectionMode:w,onSelectionStart:f,onSelectionEnd:p,multiSelectionKeyCode:S,panActivationKeyCode:E,zoomActivationKeyCode:C,elementsSelectable:V,zoomOnScroll:I,zoomOnPinch:D,zoomOnDoubleClick:X,panOnScroll:A,panOnScrollSpeed:R,panOnScrollMode:B,panOnDrag:Q,autoPanOnSelection:Z,defaultViewport:L,translateExtent:F,minZoom:H,maxZoom:b,onSelectionContextMenu:u,preventScrolling:N,noDragClassName:Be,noWheelClassName:yt,noPanClassName:ze,disableKeyboardA11y:le,onViewportChange:Te,isControlledViewport:!!De,children:(0,O.jsxs)(kh,{children:[(0,O.jsx)(vh,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:i,onReconnect:be,onReconnectStart:fe,onReconnectEnd:Ne,onlyRenderVisibleElements:P,onEdgeContextMenu:j,onEdgeMouseEnter:oe,onEdgeMouseMove:ie,onEdgeMouseLeave:se,reconnectRadius:ge,defaultMarkerColor:k,noPanClassName:ze,disableKeyboardA11y:le,rfId:ke}),(0,O.jsx)(Ih,{style:g,type:h,component:x,containerStyle:y}),(0,O.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,O.jsx)(oh,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:d,nodeClickDistance:G,onlyRenderVisibleElements:P,noPanClassName:ze,noDragClassName:Be,disableKeyboardA11y:le,nodeExtent:he,rfId:ke,nodesDraggable:nn}),(0,O.jsx)("div",{className:"react-flow__viewport-portal"})]})})}gl.displayName="GraphView";var Ah=(0,T.memo)(gl),Dh=Ar("React Flow","https://reactflow.dev/"),Lc=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:s,fitView:i,fitViewOptions:a,minZoom:c=.5,maxZoom:l=2,nodeOrigin:d,nodeExtent:u,zIndexMode:f="basic"}={})=>{let p=new Map,h=new Map,g=new Map,x=new Map,y=o??t??[],v=n??e??[],m=d??[0,0],w=u??qt;Xr(g,x,y);let{nodesInitialized:S}=Oo(v,p,h,{nodeOrigin:m,nodeExtent:w,zIndexMode:f}),E=[0,0,1];if(i&&r&&s){let C=Xt(p,{filter:L=>!!((L.width||L.initialWidth)&&(L.height||L.initialHeight))}),{x:z,y:P,zoom:V}=Dn(C,r,s,c,l,a?.padding??.1);E=[z,P,V]}return{rfId:"1",width:r??0,height:s??0,transform:E,nodes:v,nodesInitialized:S,nodeLookup:p,parentLookup:h,edges:y,edgeLookup:x,connectionLookup:g,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:qt,nodeExtent:w,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ut.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:m,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:i??!1,fitViewOptions:a,fitViewResolver:null,connection:{...Er},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Dh,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Sr,zIndexMode:f,defaultEdgeOptions:void 0,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map,onNodesDelete:void 0,onEdgesDelete:void 0,onDelete:void 0,onBeforeDelete:void 0,onViewportChangeStart:void 0,onViewportChange:void 0,onViewportChangeEnd:void 0,onNodeDragStart:void 0,onNodeDrag:void 0,onNodeDragStop:void 0,onSelectionDragStart:void 0,onSelectionDrag:void 0,onSelectionDragStop:void 0,onMoveStart:void 0,onMove:void 0,onMoveEnd:void 0,onConnect:void 0,onConnectStart:void 0,onConnectEnd:void 0,onClickConnectStart:void 0,onClickConnectEnd:void 0}},Oh=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:s,fitView:i,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:d,nodeExtent:u,zIndexMode:f})=>dc((p,h)=>{async function g(){let{nodeLookup:x,panZoom:y,fitViewOptions:v,fitViewResolver:m,width:w,height:S,minZoom:E,maxZoom:C}=h();y&&(await _a({nodes:x,width:w,height:S,panZoom:y,minZoom:E,maxZoom:C},v),m?.resolve(!0),p({fitViewResolver:null}))}return{...Lc({nodes:e,edges:t,width:r,height:s,fitView:i,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:d,nodeExtent:u,defaultNodes:n,defaultEdges:o,zIndexMode:f}),setNodes:x=>{let{nodeLookup:y,parentLookup:v,nodeOrigin:m,nodeExtent:w,elevateNodesOnSelect:S,fitViewQueued:E,zIndexMode:C,nodesSelectionActive:z}=h(),{nodesInitialized:P,hasSelectedNodes:V}=Oo(x,y,v,{nodeOrigin:m,nodeExtent:w,elevateNodesOnSelect:S,checkEquality:!0,zIndexMode:C}),L=z&&V;E&&P?(g(),p({nodes:x,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:x,nodesInitialized:P,nodesSelectionActive:L})},setEdges:x=>{let{connectionLookup:y,edgeLookup:v}=h();Xr(y,v,x),p({edges:x})},setDefaultNodesAndEdges:(x,y)=>{if(x){let{setNodes:v}=h();v(x),p({hasDefaultNodes:!0})}if(y){let{setEdges:v}=h();v(y),p({hasDefaultEdges:!0})}},updateNodeInternals:x=>{let{triggerNodeChanges:y,nodeLookup:v,parentLookup:m,domNode:w,nodeOrigin:S,nodeExtent:E,debug:C,fitViewQueued:z,zIndexMode:P}=h(),{changes:V,updatedInternals:L}=$a(x,v,m,w,S,E,P);L&&(Ta(v,m,{nodeOrigin:S,nodeExtent:E,zIndexMode:P}),z?(g(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),V?.length>0&&(C&&console.log("React Flow: trigger node changes",V),y?.(V)))},updateNodePositions:(x,y=!1)=>{let v=[],m=[],{nodeLookup:w,triggerNodeChanges:S,connection:E,updateConnection:C,onNodesChangeMiddlewareMap:z}=h();for(let[P,V]of x){let L=w.get(P),F=!!(L?.expandParent&&L?.parentId&&V?.position),H={id:P,type:"position",position:F?{x:Math.max(0,V.position.x),y:Math.max(0,V.position.y)}:V.position,dragging:y};if(L&&E.inProgress&&E.fromNode.id===L.id){let b=dt(L,E.fromHandle,U.Left,!0);C({...E,from:b})}F&&L.parentId&&v.push({id:P,parentId:L.parentId,rect:{...V.internals.positionAbsolute,width:V.measured.width??0,height:V.measured.height??0}}),m.push(H)}if(v.length>0){let{parentLookup:P,nodeOrigin:V}=h(),L=To(v,w,P,V);m.push(...L)}for(let P of z.values())m=P(m);S(m)},triggerNodeChanges:x=>{let{onNodesChange:y,setNodes:v,nodes:m,hasDefaultNodes:w,debug:S}=h();if(x?.length){if(w){let E=Kr(x,m);v(E)}S&&console.log("React Flow: trigger node changes",x),y?.(x)}},triggerEdgeChanges:x=>{let{onEdgesChange:y,setEdges:v,edges:m,hasDefaultEdges:w,debug:S}=h();if(x?.length){if(w){let E=hg(x,m);v(E)}S&&console.log("React Flow: trigger edge changes",x),y?.(x)}},addSelectedNodes:x=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:w,triggerEdgeChanges:S}=h();if(y){let E=x.map(C=>Ot(C,!0));w(E);return}w(Kt(m,new Set([...x]),!0)),S(Kt(v))},addSelectedEdges:x=>{let{multiSelectionActive:y,edgeLookup:v,nodeLookup:m,triggerNodeChanges:w,triggerEdgeChanges:S}=h();if(y){let E=x.map(C=>Ot(C,!0));S(E);return}S(Kt(v,new Set([...x]))),w(Kt(m,new Set,!0))},unselectNodesAndEdges:({nodes:x,edges:y}={})=>{let{edges:v,nodes:m,nodeLookup:w,triggerNodeChanges:S,triggerEdgeChanges:E}=h(),C=x||m,z=y||v,P=[];for(let L of C){if(!L.selected)continue;let F=w.get(L.id);F&&(F.selected=!1),P.push(Ot(L.id,!1))}let V=[];for(let L of z)L.selected&&V.push(Ot(L.id,!1));S(P),E(V)},setMinZoom:x=>{let{panZoom:y,maxZoom:v}=h();y?.setScaleExtent([x,v]),p({minZoom:x})},setMaxZoom:x=>{let{panZoom:y,minZoom:v}=h();y?.setScaleExtent([v,x]),p({maxZoom:x})},setTranslateExtent:x=>{h().panZoom?.setTranslateExtent(x),p({translateExtent:x})},resetSelectedElements:()=>{let{edges:x,nodes:y,triggerNodeChanges:v,triggerEdgeChanges:m,elementsSelectable:w}=h();if(!w)return;let S=y.reduce((C,z)=>z.selected?[...C,Ot(z.id,!1)]:C,[]),E=x.reduce((C,z)=>z.selected?[...C,Ot(z.id,!1)]:C,[]);v(S),m(E)},setNodeExtent:x=>{let{nodes:y,nodeLookup:v,parentLookup:m,nodeOrigin:w,elevateNodesOnSelect:S,nodeExtent:E,zIndexMode:C}=h();x[0][0]===E[0][0]&&x[0][1]===E[0][1]&&x[1][0]===E[1][0]&&x[1][1]===E[1][1]||(Oo(y,v,m,{nodeOrigin:w,nodeExtent:x,elevateNodesOnSelect:S,checkEquality:!1,zIndexMode:C}),p({nodeExtent:x}))},panBy:x=>{let{transform:y,width:v,height:m,panZoom:w,translateExtent:S}=h();return Ha({delta:x,panZoom:w,transform:y,translateExtent:S,width:v,height:m})},setCenter:async(x,y,v)=>{let{width:m,height:w,maxZoom:S,panZoom:E}=h();if(!E)return!1;let C=typeof v?.zoom<"u"?v.zoom:S;return await E.setViewport({x:m/2-x*C,y:w/2-y*C,zoom:C},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Er}})},updateConnection:x=>{p({connection:x})},reset:()=>p({...Lc()})}},Object.is);function Jr({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:s,initialMinZoom:i,initialMaxZoom:a,initialFitViewOptions:c,fitView:l,nodeOrigin:d,nodeExtent:u,zIndexMode:f,children:p}){let[h]=(0,T.useState)(()=>Oh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:s,fitView:l,minZoom:i,maxZoom:a,fitViewOptions:c,nodeOrigin:d,nodeExtent:u,zIndexMode:f}));return(0,O.jsx)(Up,{value:h,children:(0,O.jsx)(bg,{children:(0,O.jsx)(Tg,{children:p})})})}function Th({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:s,height:i,fitView:a,fitViewOptions:c,minZoom:l,maxZoom:d,nodeOrigin:u,nodeExtent:f,zIndexMode:p}){return(0,T.useContext)(Ro)?(0,O.jsx)(O.Fragment,{children:e}):(0,O.jsx)(Jr,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:s,initialHeight:i,fitView:a,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:d,nodeOrigin:u,nodeExtent:f,zIndexMode:p,children:e})}var Lh={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function $h({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:s,edgeTypes:i,onNodeClick:a,onEdgeClick:c,onInit:l,onMove:d,onMoveStart:u,onMoveEnd:f,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:y,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:E,onNodeDragStart:C,onNodeDrag:z,onNodeDragStop:P,onNodesDelete:V,onEdgesDelete:L,onDelete:F,onSelectionChange:H,onSelectionDragStart:b,onSelectionDrag:N,onSelectionDragStop:k,onSelectionContextMenu:I,onSelectionStart:D,onSelectionEnd:A,onBeforeDelete:R,connectionMode:B,connectionLineType:X=qe.Bezier,connectionLineStyle:Q,connectionLineComponent:Z,connectionLineContainerStyle:K,deleteKeyCode:ne="Backspace",selectionKeyCode:Y="Shift",selectionOnDrag:$=!1,selectionMode:q=Pt.Full,panActivationKeyCode:J="Space",multiSelectionKeyCode:te=Ut()?"Meta":"Control",zoomActivationKeyCode:G=Ut()?"Meta":"Control",snapToGrid:j,snapGrid:oe,onlyRenderVisibleElements:ie=!1,selectNodesOnDrag:se,nodesDraggable:ge,autoPanOnNodeFocus:be,nodesConnectable:fe,nodesFocusable:Ne,nodeOrigin:Be=Fc,edgesFocusable:yt,edgesReconnectable:ze,elementsSelectable:le=!0,defaultViewport:he=cg,minZoom:ke=.5,maxZoom:De=2,translateExtent:Te=qt,preventScrolling:nn=!0,nodeExtent:on,defaultMarkerColor:rn="#b1b1b7",zoomOnScroll:nt=!0,zoomOnPinch:sn=!0,panOnScroll:nr=!1,panOnScrollSpeed:re=.5,panOnScrollMode:or=Je.Free,zoomOnDoubleClick:an=!0,panOnDrag:Tt=!0,onPaneClick:xt,onPaneMouseEnter:M,onPaneMouseMove:W,onPaneMouseLeave:ee,onPaneScroll:ce,onPaneContextMenu:xe,paneClickDistance:Rn=1,nodeClickDistance:Wn=0,children:ot,onReconnect:wt,onReconnectStart:Rl,onReconnectEnd:Wl,onEdgeContextMenu:ql,onEdgeDoubleClick:Xl,onEdgeMouseEnter:Yl,onEdgeMouseMove:Zl,onEdgeMouseLeave:Gl,reconnectRadius:Ul=10,onNodesChange:jl,onEdgesChange:Kl,noDragClassName:Ql="nodrag",noWheelClassName:Jl="nowheel",noPanClassName:si="nopan",fitView:ai,fitViewOptions:ci,connectOnClick:eu,attributionPosition:tu,proOptions:nu,defaultEdgeOptions:ou,elevateNodesOnSelect:ru=!0,elevateEdgesOnSelect:iu=!1,disableKeyboardA11y:li=!1,autoPanOnConnect:su,autoPanOnNodeDrag:au,autoPanOnSelection:cu=!0,autoPanSpeed:lu,connectionRadius:uu,isValidConnection:du,onError:fu,style:pu,id:ui,nodeDragThreshold:gu,connectionDragThreshold:hu,viewport:mu,onViewportChange:yu,width:xu,height:wu,colorMode:bu="light",debug:vu,onScroll:di,ariaLabelConfig:ku,zIndexMode:fi="basic",..._u},Su){let rr=ui||"1",Eu=fg(bu),Nu=(0,T.useCallback)(pi=>{pi.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),di?.(pi)},[di]);return(0,O.jsx)("div",{"data-testid":"rf__wrapper",..._u,onScroll:Nu,style:{...pu,...Lh},ref:Su,className:me(["react-flow",r,Eu]),id:ui,role:"application",children:(0,O.jsxs)(Th,{nodes:e,edges:t,width:xu,height:wu,fitView:ai,fitViewOptions:ci,minZoom:ke,maxZoom:De,nodeOrigin:Be,nodeExtent:on,zIndexMode:fi,children:[(0,O.jsx)(dg,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:g,onClickConnectStart:x,onClickConnectEnd:y,nodesDraggable:ge,autoPanOnNodeFocus:be,nodesConnectable:fe,nodesFocusable:Ne,edgesFocusable:yt,edgesReconnectable:ze,elementsSelectable:le,elevateNodesOnSelect:ru,elevateEdgesOnSelect:iu,minZoom:ke,maxZoom:De,nodeExtent:on,onNodesChange:jl,onEdgesChange:Kl,snapToGrid:j,snapGrid:oe,connectionMode:B,translateExtent:Te,connectOnClick:eu,defaultEdgeOptions:ou,fitView:ai,fitViewOptions:ci,onNodesDelete:V,onEdgesDelete:L,onDelete:F,onNodeDragStart:C,onNodeDrag:z,onNodeDragStop:P,onSelectionDrag:N,onSelectionDragStart:b,onSelectionDragStop:k,onMove:d,onMoveStart:u,onMoveEnd:f,noPanClassName:si,nodeOrigin:Be,rfId:rr,autoPanOnConnect:su,autoPanOnNodeDrag:au,autoPanSpeed:lu,onError:fu,connectionRadius:uu,isValidConnection:du,selectNodesOnDrag:se,nodeDragThreshold:gu,connectionDragThreshold:hu,onBeforeDelete:R,debug:vu,ariaLabelConfig:ku,zIndexMode:fi}),(0,O.jsx)(Ah,{onInit:l,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:m,onNodeMouseLeave:w,onNodeContextMenu:S,onNodeDoubleClick:E,nodeTypes:s,edgeTypes:i,connectionLineType:X,connectionLineStyle:Q,connectionLineComponent:Z,connectionLineContainerStyle:K,selectionKeyCode:Y,selectionOnDrag:$,selectionMode:q,deleteKeyCode:ne,multiSelectionKeyCode:te,panActivationKeyCode:J,zoomActivationKeyCode:G,onlyRenderVisibleElements:ie,defaultViewport:he,translateExtent:Te,minZoom:ke,maxZoom:De,preventScrolling:nn,zoomOnScroll:nt,zoomOnPinch:sn,zoomOnDoubleClick:an,panOnScroll:nr,panOnScrollSpeed:re,panOnScrollMode:or,panOnDrag:Tt,autoPanOnSelection:cu,onPaneClick:xt,onPaneMouseEnter:M,onPaneMouseMove:W,onPaneMouseLeave:ee,onPaneScroll:ce,onPaneContextMenu:xe,paneClickDistance:Rn,nodeClickDistance:Wn,onSelectionContextMenu:I,onSelectionStart:D,onSelectionEnd:A,onReconnect:wt,onReconnectStart:Rl,onReconnectEnd:Wl,onEdgeContextMenu:ql,onEdgeDoubleClick:Xl,onEdgeMouseEnter:Yl,onEdgeMouseMove:Zl,onEdgeMouseLeave:Gl,reconnectRadius:Ul,defaultMarkerColor:rn,noDragClassName:Ql,noWheelClassName:Jl,noPanClassName:si,rfId:rr,disableKeyboardA11y:li,nodeExtent:on,viewport:mu,onViewportChange:yu,nodesDraggable:ge}),(0,O.jsx)(ag,{onSelectionChange:H}),ot,(0,O.jsx)(ng,{proOptions:nu,position:tu}),(0,O.jsx)(tg,{rfId:rr,disableKeyboardA11y:li})]})})}var hl=Wc($h);var Rv=Oe.error014();function ei(e){return ae((0,T.useCallback)(n=>n.nodeLookup.get(e),[e]),ue)}function Hh({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,O.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:me(["react-flow__background-pattern",n,o])})}function Bh({radius:e,className:t}){return(0,O.jsx)("circle",{cx:e,cy:e,r:e,className:me(["react-flow__background-pattern","dots",t])})}var Xe;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Xe||(Xe={}));var Vh={[Xe.Dots]:1,[Xe.Lines]:1,[Xe.Cross]:6},Fh=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function ml({id:e,variant:t=Xe.Dots,gap:n=20,size:o,lineWidth:r=1,offset:s=0,color:i,bgColor:a,style:c,className:l,patternClassName:d}){let u=(0,T.useRef)(null),{transform:f,patternId:p}=ae(Fh,ue),h=o||Vh[t],g=t===Xe.Dots,x=t===Xe.Cross,y=Array.isArray(n)?n:[n,n],v=[y[0]*f[2]||1,y[1]*f[2]||1],m=h*f[2],w=Array.isArray(s)?s:[s,s],S=x?[m,m]:v,E=[w[0]*f[2]+S[0]/2,w[1]*f[2]+S[1]/2],C=`${p}${e||""}`;return(0,O.jsxs)("svg",{className:me(["react-flow__background",l]),style:{...c,...qo,"--xy-background-color-props":a,"--xy-background-pattern-color-props":i},ref:u,"data-testid":"rf__background",children:[(0,O.jsx)("pattern",{id:C,x:f[0]%v[0],y:f[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${E[0]},-${E[1]})`,children:g?(0,O.jsx)(Bh,{radius:m/2,className:d}):(0,O.jsx)(Hh,{dimensions:S,lineWidth:r,variant:t,className:d})}),(0,O.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${C})`})]})}ml.displayName="Background";var yl=(0,T.memo)(ml);function Rh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,O.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function Wh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,O.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function qh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,O.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function Xh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function Yh(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,O.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Vo({children:e,className:t,...n}){return(0,O.jsx)("button",{type:"button",className:me(["react-flow__controls-button",t]),...n,children:e})}var Zh=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function xl({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:s,onZoomOut:i,onFitView:a,onInteractiveChange:c,className:l,children:d,position:u="bottom-left",orientation:f="vertical","aria-label":p}){let h=de(),{isInteractive:g,minZoomReached:x,maxZoomReached:y,ariaLabelConfig:v}=ae(Zh,ue),{zoomIn:m,zoomOut:w,fitView:S}=Ln(),E=()=>{m(),s?.()},C=()=>{w(),i?.()},z=()=>{S(r),a?.()},P=()=>{h.setState({nodesDraggable:!g,nodesConnectable:!g,elementsSelectable:!g}),c?.(!g)};return(0,O.jsxs)(Wo,{className:me(["react-flow__controls",f==="horizontal"?"horizontal":"vertical",l]),position:u,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Vo,{onClick:E,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:y,children:(0,O.jsx)(Rh,{})}),(0,O.jsx)(Vo,{onClick:C,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:x,children:(0,O.jsx)(Wh,{})})]}),n&&(0,O.jsx)(Vo,{className:"react-flow__controls-fitview",onClick:z,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,O.jsx)(qh,{})}),o&&(0,O.jsx)(Vo,{className:"react-flow__controls-interactive",onClick:P,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:g?(0,O.jsx)(Yh,{}):(0,O.jsx)(Xh,{})}),d]})}xl.displayName="Controls";var wl=(0,T.memo)(xl);function Gh({id:e,x:t,y:n,width:o,height:r,style:s,color:i,strokeColor:a,strokeWidth:c,className:l,borderRadius:d,shapeRendering:u,selected:f,onClick:p}){let{background:h,backgroundColor:g}=s||{},x=i||h||g;return(0,O.jsx)("rect",{className:me(["react-flow__minimap-node",{selected:f},l]),x:t,y:n,rx:d,ry:d,width:o,height:r,style:{fill:x,stroke:a,strokeWidth:c},shapeRendering:u,onClick:p?y=>p(y,e):void 0})}var Uh=(0,T.memo)(Gh),jh=e=>e.nodes.map(t=>t.id),Ur=e=>e instanceof Function?e:()=>e;function Kh({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:s=Uh,onClick:i}){let a=ae(jh,ue),c=Ur(t),l=Ur(e),d=Ur(n),u=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,O.jsx)(O.Fragment,{children:a.map(f=>(0,O.jsx)(Jh,{id:f,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:d,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:s,onClick:i,shapeRendering:u},f))})}function Qh({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:s,shapeRendering:i,NodeComponent:a,onClick:c}){let{node:l,x:d,y:u,width:f,height:p}=ae(h=>{let g=h.nodeLookup.get(e);if(!g)return{node:void 0,x:0,y:0,width:0,height:0};let x=g.internals.userNode,{x:y,y:v}=g.internals.positionAbsolute,{width:m,height:w}=He(x);return{node:x,x:y,y:v,width:m,height:w}},ue);return!l||l.hidden||!Dr(l)?null:(0,O.jsx)(a,{x:d,y:u,width:f,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:s,shapeRendering:i,onClick:c,id:l.id})}var Jh=(0,T.memo)(Qh),em=(0,T.memo)(Kh),tm=200,nm=150,om=e=>!e.hidden,rm=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]},n=!1;for(let o of e.nodeLookup.values())if(!o.hidden){n=!0;break}return{viewBB:t,boundingRect:n?Pr(Xt(e.nodeLookup,{filter:om}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},$c=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,im=(e,t)=>$c(e.viewBB,t.viewBB)&&$c(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,sm="react-flow__minimap-desc";function bl({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:s=5,nodeStrokeWidth:i,nodeComponent:a,bgColor:c,maskColor:l,maskStrokeColor:d,maskStrokeWidth:u,position:f="bottom-right",onClick:p,onNodeClick:h,pannable:g=!1,zoomable:x=!1,ariaLabel:y,inversePan:v,zoomStep:m=1,offsetScale:w=5}){let S=de(),E=(0,T.useRef)(null),{boundingRect:C,panZoom:z,viewBB:P,rfId:V,translateExtent:L,flowWidth:F,flowHeight:H,ariaLabelConfig:b}=ae(rm,im),N=e?.width??tm,k=e?.height??nm,I=C.width/N,D=C.height/k,A=Math.max(I,D),R=A*N,B=A*k,X=w*A,Q=C.x-(R-C.width)/2-X,Z=C.y-(B-C.height)/2-X,K=R+X*2,ne=B+X*2,Y=`${sm}-${V}`,$=(0,T.useRef)(0),q=(0,T.useRef)();$.current=A,(0,T.useEffect)(()=>{let oe=S.getState().panZoom;if(E.current&&oe)return q.current=Xa({domNode:E.current,panZoom:oe,getTransform:()=>S.getState().transform,getViewScale:()=>$.current}),()=>{q.current?.destroy()}},[z]),(0,T.useEffect)(()=>{q.current?.update({translateExtent:L,width:F,height:H,inversePan:v,pannable:g,zoomStep:m,zoomable:x})},[g,x,v,m,L,F,H]);let J=p?oe=>{let[ie,se]=q.current?.pointer(oe)||[0,0];p(oe,{x:ie,y:se})}:void 0,te=(0,T.useCallback)((oe,ie)=>{let se=S.getState().nodeLookup.get(ie).internals.userNode;h?.(oe,se)},[h]),G=h?te:void 0,j=y??b["minimap.ariaLabel"];return(0,O.jsx)(Wo,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof u=="number"?u*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof i=="number"?i:void 0},className:me(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,O.jsxs)("svg",{width:N,height:k,viewBox:`${Q} ${Z} ${K} ${ne}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":Y,ref:E,onClick:J,children:[j&&(0,O.jsx)("title",{id:Y,children:j}),(0,O.jsx)(em,{onClick:G,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:s,nodeClassName:r,nodeStrokeWidth:i,nodeComponent:a}),(0,O.jsx)("path",{className:"react-flow__minimap-mask",d:`M${Q-X},${Z-X}h${K+X*2}v${ne+X*2}h${-K-X*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}bl.displayName="MiniMap";var Wv=(0,T.memo)(bl),am=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,cm={[ft.Line]:"right",[ft.Handle]:"bottom-right"};function lm({nodeId:e,position:t,variant:n=ft.Handle,className:o,style:r=void 0,children:s,color:i,minWidth:a=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:u=!1,resizeDirection:f,autoScale:p=!0,shouldResize:h,onResizeStart:g,onResize:x,onResizeEnd:y}){let v=Gc(),m=typeof e=="string"?e:v,w=de(),S=(0,T.useRef)(null),E=n===ft.Handle,C=ae((0,T.useCallback)(am(E&&p),[E,p]),ue),z=(0,T.useRef)(null),P=t??cm[n];(0,T.useEffect)(()=>{if(!(!S.current||!m))return z.current||(z.current=ja({domNode:S.current,nodeId:m,getStoreItems:()=>{let{nodeLookup:L,transform:F,snapGrid:H,snapToGrid:b,nodeOrigin:N,domNode:k}=w.getState();return{nodeLookup:L,transform:F,snapGrid:H,snapToGrid:b,nodeOrigin:N,paneDomNode:k}},onChange:(L,F)=>{let{triggerNodeChanges:H,nodeLookup:b,parentLookup:N,nodeOrigin:k}=w.getState(),I=[],D={x:L.x,y:L.y},A=b.get(m);if(A&&A.expandParent&&A.parentId){let R=A.origin??k,B=L.width??A.measured.width??0,X=L.height??A.measured.height??0,Q={id:A.id,parentId:A.parentId,rect:{width:B,height:X,...Or({x:L.x??A.position.x,y:L.y??A.position.y},{width:B,height:X},A.parentId,b,R)}},Z=To([Q],b,N,k);I.push(...Z),D.x=L.x?Math.max(R[0]*B,L.x):void 0,D.y=L.y?Math.max(R[1]*X,L.y):void 0}if(D.x!==void 0&&D.y!==void 0){let R={id:m,type:"position",position:{...D}};I.push(R)}if(L.width!==void 0&&L.height!==void 0){let B={id:m,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:L.width,height:L.height}};I.push(B)}for(let R of F){let B={...R,type:"position"};I.push(B)}H(I)},onEnd:({width:L,height:F})=>{let H={id:m,type:"dimensions",resizing:!1,dimensions:{width:L,height:F}};w.getState().triggerNodeChanges([H])}})),z.current.update({controlPosition:P,boundaries:{minWidth:a,minHeight:c,maxWidth:l,maxHeight:d},keepAspectRatio:u,resizeDirection:f,onResizeStart:g,onResize:x,onResizeEnd:y,shouldResize:h}),()=>{z.current?.destroy()}},[P,a,c,l,d,u,g,x,y,h]);let V=P.split("-");return(0,O.jsx)("div",{className:me(["react-flow__resize-control","nodrag",...V,n,o]),ref:S,style:{...r,scale:C,...i&&{[E?"backgroundColor":"borderColor"]:i}},children:s})}var qv=(0,T.memo)(lm);var Jt={recency:"recent",workspace:"all",status:"all",kind:"all",archived:!1,query:""},Xo={...Jt,recency:"all",frequency:"all",statuses:[]};var um=e=>(/^[A-Za-z]:[/\\]/.test(e)||e.startsWith("\\\\")?e.replaceAll("\\","/"):e).replace(/\/+$/,"");function $n(e){let t=e.map(o=>({id:o.id,path:um(o.path)})),n=new Map;for(let o of t){let r=-1;for(let s of t)s.id!==o.id&&s.path.length>r&&o.path!==s.path&&o.path.startsWith(s.path+"/")&&(n.set(o.id,s.id),r=s.path.length)}return n}function Hn(e){let t=new Map(e.map(o=>[o.id,o])),n=new Map;for(let o of e){if(!o.parentId||!t.has(o.parentId))continue;let r=new Set([o.id]),s=o.parentId;for(;s&&t.has(s)&&!r.has(s);)r.add(s),s=t.get(s).parentId;(!s||!r.has(s))&&n.set(o.id,o.parentId)}return n}function Yo(e,t,n){let o=new Map;for(let[i,a]of $n(e.workspaces))o.set("workspace:"+i,"workspace:"+a);for(let i of e.workspaces)for(let a of i.sessionIds)o.has("session:"+a)||o.set("session:"+a,"workspace:"+i.id);for(let i of e.sessions)o.has("session:"+i.id)||o.set("session:"+i.id,"workspace:__ungrouped__");for(let[i,a]of Hn(e.sessions))o.set("session:"+i,"session:"+a);let r={...n},s=i=>{if(r[i])return r[i];let a=t[i],c=o.get(i);if(!a||!c)return a;let l=t[c],d=s(c);return!l||!d?a:r[i]={x:a.x+d.x-l.x,y:a.y+d.y-l.y}};for(let i of o.keys())t[i]&&s(i);return r}function pt(e){let t=e==="workspace"?53:37;return{offset:{x:72,y:t},radius:t}}function vl(e,t){let n=t.x-e.x,o=t.y-e.y,r=Math.hypot(n,o),s=r>1e-9?n/r:1,i=r>1e-9?o/r:0;return{source:{x:e.x+s*e.radius,y:e.y+i*e.radius},target:{x:t.x-s*t.radius,y:t.y-i*t.radius}}}var kl=new WeakMap;function dm(e){let t=kl.get(e);if(t)return t;let n=new Map,o=new Map,r=new Map;for(let f of[...e.workspaces].sort((p,h)=>p.id.localeCompare(h.id))){o.set("workspace:"+f.id,"workspace");for(let p of f.sessionIds)r.has(p)||r.set(p,f.id)}for(let[f,p]of $n(e.workspaces))n.set("workspace:"+f,"workspace:"+p);let s=Hn(e.sessions);for(let f of e.sessions){let p="session:"+f.id;o.set(p,"session");let h=r.get(f.id)??"__ungrouped__";h==="__ungrouped__"&&o.set("workspace:__ungrouped__","workspace"),n.set(p,s.has(f.id)?"session:"+s.get(f.id):"workspace:"+h)}let i=new Map;for(let f of o.keys()){let p=n.get(f);!p||!o.has(p)||(i.has(p)||i.set(p,[]),i.get(p).push(f))}for(let f of i.values())f.sort();let a=new Map,c=f=>{if(a.has(f))return a.get(f);let p=Math.max(1,(i.get(f)??[]).reduce((h,g)=>h+c(g),0));return a.set(f,p),p},l={},d=280,u=[...o.keys()].filter(f=>!n.has(f)||!o.has(n.get(f))).sort();for(let f of u){let p=new Map,h=(y,v,m,w,S)=>{p.set(y,{x:v,y:m});let E=i.get(y)??[],C=E.reduce((V,L)=>V+c(L),0),z=Math.max(225,C*165/S),P=w-S/2;for(let V of E){let L=S*c(V)/C,F=P+L/2;h(V,v+Math.cos(F)*z,m+Math.sin(F)*z,F,Math.min(Math.PI*.8,L)),P+=L}};h(f,0,0,-Math.PI/2,2*Math.PI);let g=Math.min(...[...p.values()].map(y=>y.x)),x=Math.max(...[...p.values()].map(y=>y.x));for(let[y,v]of p){let m=pt(o.get(y));l[y]={x:v.x-g+d-m.offset.x,y:v.y+290-m.offset.y}}d+=x-g+360}for(let f of Object.values(l))Object.freeze(f);return Object.freeze(l),kl.set(e,l),l}function Zo(e,t){let n=dm(e);return{...n,...Yo(e,n,t)}}function _l(e,t,n=Date.now()){let o={...e};for(let r of t)Object.hasOwn(o,r)||Object.defineProperty(o,r,{value:{since:n,visits:[]},enumerable:!0,writable:!0,configurable:!0});return o}function ti(e,t=Date.now()){return!Number.isFinite(e)||e<=0||e>t+6e4?"unknown":t-e<=7*864e5?"recent":"early"}function ni(e,t=Date.now()){return e?e.visits.filter(o=>o>=t-30*864e5&&o<=t).length>=5?"frequent":t-e.since>=30*864e5?"infrequent":"accumulating":"accumulating"}function Sl(e,t=Date.now()){let n=(e?.visits??[]).filter(o=>o>=t-2592e6&&o<=t);return(!n.length||t-n[n.length-1]>=30*6e4)&&n.push(t),{since:e?.since??t,visits:n}}var Go={recent:"\u8FD1\u671F",early:"\u65E9\u671F",unknown:"\u65F6\u95F4\u672A\u77E5"},Uo={frequent:"\u5E38\u7528",infrequent:"\u4E0D\u5E38\u7528",accumulating:"\u4F7F\u7528\u8BB0\u5F55\u79EF\u7D2F\u4E2D"};function oi(e){return e.pending?"waiting":e.running===!0?"running":e.unread?"unread":e.running===!1?"idle":"unknown"}function jo(e,t,n,o={},r=new Set,s=Date.now(),i){let a=$n(e.workspaces),c=new Set(e.currentSessionIds??(e.currentSessionId?[e.currentSessionId]:[])),l=k=>c.has(k.id)||k.running===!0||k.pending===!0,d=Hn(e.sessions),u=new Map(e.sessions.map(k=>[k.id,k])),f=new Set(e.archivedSessionIds),p=e.sessions.filter(k=>l(k)||!k.blank&&k.origin!=="subagent"&&(t.archived||!f.has(k.id))),h=new Map(p.map(k=>[k.id,k])),g=new Set(e.workspaces.flatMap(k=>[...k.sessionIds])),x=p.filter(k=>!g.has(k.id)),y=[...e.workspaces];(x.length||[...d.values()].some(k=>!g.has(k)))&&y.push({id:"__ungrouped__",title:"\u672A\u5206\u7EC4",path:"",sessionIds:x.map(k=>k.id),virtual:!0});let v=[],m=[],w=[],S=t.query.trim().toLocaleLowerCase(),E=t.statuses??(t.status==="all"?[]:[t.status]),C=0,z=new Set,P=new Set,V=new Map;for(let k of y)for(let I of k.sessionIds)V.has(I)||V.set(I,k.id);let L=new Map(y.map(k=>[k.id,k])),F=Zo(e,n.positions),H=k=>n.positions["workspace:"+k]??F["workspace:"+k]??{x:280,y:290},b=k=>n.positions["session:"+k.id]??F["session:"+k.id]??{x:280,y:290},N=(k,I=!1)=>({id:"session:"+k.id,type:"bubble",position:b(k),data:{kind:"session",entityId:k.id,title:k.title,status:oi(k),path:k.cwd,workspaceId:V.get(k.id)??"__ungrouped__",parentSessionId:d.get(k.id),context:I,archived:f.has(k.id),updatedAt:k.updatedAt,current:c.has(k.id),working:k.running===!0,pinned:n.settings?.pinned?.includes(k.id),recency:ti(k.updatedAt,s),frequency:ni(n.settings?.usage?.[k.id],s)}});y.forEach(k=>{let I=k.id;for(;I&&I!==t.workspace;)I=a.get(I);let D=t.workspace==="all"||I===t.workspace,A=[...new Set(k.sessionIds)].flatMap(q=>h.has(q)&&V.get(q)===k.id?[h.get(q)]:[]),R=!S||(k.title+" "+k.path).toLocaleLowerCase().includes(S),B=A.filter(q=>D&&(R||(q.title+" "+(q.cwd??"")+" "+(n.settings?.manualSummaries?.[q.id]??"")).toLocaleLowerCase().includes(S))&&(!E.length||E.includes(oi(q)))&&(!t.recency||t.recency==="all"||ti(q.updatedAt,s)===t.recency)&&(!t.frequency||t.frequency==="all"||ni(n.settings?.usage?.[q.id],s)===t.frequency)).sort((q,J)=>Number(n.settings?.pinned?.includes(J.id)??!1)-Number(n.settings?.pinned?.includes(q.id)??!1)),X=A.map(oi),Q=["waiting","running","unread","idle"].find(q=>X.includes(q))??"unknown",Z="workspace:"+k.id,K=!r.has(k.id);v.push({id:Z,type:"bubble",position:H(k.id),data:{kind:"workspace",entityId:k.id,title:k.title,path:k.path,status:Q,count:B.length,total:A.length,virtual:k.virtual,parentWorkspaceId:a.get(k.id),childWorkspaceCount:y.filter(q=>a.get(q.id)===k.id).length,collapsed:K,current:A.some(q=>c.has(q.id)),working:A.some(q=>q.running===!0)}});let ne=a.get(k.id);ne&&m.push({id:"workspace:"+ne+"->"+Z,source:"workspace:"+ne,target:Z}),C+=B.length;for(let q of B)z.add(q.id),w.push(N(q));let Y=o[k.id]??20,$=K||t.kind==="workspace"?[]:B.slice(0,Y);for(let q of A.filter(J=>l(J)||J.id===i))$.some(J=>J.id===q.id)||$.push(q);$.forEach(q=>{if(P.has(q.id))return;P.add(q.id);let J=N(q);J.data.outsideFilters=!z.has(q.id),v.push(J)})});for(let k of P){let I=d.get(k);I&&!P.has(I)&&(P.add(I),v.push(N(u.get(I),!0)))}for(let k of P){let I=d.get(k),D=I?"session:"+I:"workspace:"+(V.get(k)??"__ungrouped__"),A="session:"+k;m.push({id:D+"->"+A,source:D,target:A,...I?{sourceHandle:"branch-source",targetHandle:"branch-target"}:{}})}return{matches:w,nodes:v,edges:m,matched:C,total:p.length,hidden:[...z].filter(k=>!P.has(k)).length}}var tt="#6aabff";function Bn(e){if(typeof e!="string")return;let t=e.trim().toLowerCase();if(/^#[\da-f]{6}$/.test(t))return t;if(/^#[\da-f]{3}$/.test(t))return"#"+[...t.slice(1)].map(n=>n+n).join("")}var El=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),Ko=(e,t,n)=>"#"+El(e).map((o,r)=>Math.round(o*(1-n)+El(t)[r]*n).toString(16).padStart(2,"0")).join("");function Nl(e){let t=Bn(e)??tt;return{workspace:Ko(t,"#243247",.8),expanded:Ko(t,"#080d17",.94),session:Ko(t,"#ffffff",.82),text:"#ffffff",sessionText:"#111827",accent:Ko(t,"#ffffff",.55)}}var tn=()=>({schemaVersion:1,revision:0,positions:{},collapsed:[],views:{}}),en=e=>!["__proto__","prototype","constructor"].includes(e)&&e.length<1e3,Ye=e=>!!e&&typeof e=="object"&&!Array.isArray(e),Cl=e=>Ye(e)&&typeof e.x=="number"&&typeof e.y=="number"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Math.abs(e.x)<1e8&&Math.abs(e.y)<1e8;function fm(e){return Ye(e)&&typeof e.workspace=="string"&&(e.recency===void 0||["all","recent","early","unknown"].includes(String(e.recency)))&&(e.frequency===void 0||["all","frequent","infrequent","accumulating"].includes(String(e.frequency)))&&(e.statuses===void 0||Array.isArray(e.statuses)&&e.statuses.every(t=>["running","waiting","unread","idle","unknown"].includes(t)))&&["all","running","waiting","unread","idle","unknown"].includes(String(e.status))&&["all","workspace","session"].includes(String(e.kind))&&typeof e.archived=="boolean"&&typeof e.query=="string"}function Ml(e){if(!Ye(e)||e.schemaVersion!==1||!Number.isSafeInteger(e.revision)||Number(e.revision)<0||!Ye(e.positions)||!Array.isArray(e.collapsed)||!Ye(e.views))throw new Error("Invalid layout format or unsupported version");for(let[t,n]of Object.entries(e.positions))if(!en(t)||!Cl(n))throw new Error("Invalid layout position");if(!e.collapsed.every(t=>typeof t=="string"&&en(t)))throw new Error("Invalid layout collapse state");for(let[t,n]of Object.entries(e.views)){if(!en(t)||!Ye(n))throw new Error("Invalid layout view");if(n.viewport!==void 0&&(!Cl(n.viewport)||typeof n.viewport.zoom!="number"||!Number.isFinite(n.viewport.zoom)||n.viewport.zoom<.1||n.viewport.zoom>3))throw new Error("Invalid layout viewport");if(n.filters!==void 0&&!fm(n.filters))throw new Error("Invalid layout filters")}}var Qo=class e{positions={};viewports={};revision=0;storedRevision;storage;key;constructor(t,n){this.storage=t,this.key=n}loadStored(){let t=this.storage.getItem(this.key);if(t===null)return tn();let n;try{n=JSON.parse(t)}catch{throw new Error("Invalid layout JSON")}Ml(n);let o=Ye(n.settings)?n.settings:{},r=Object.fromEntries(Object.entries(Ye(o.manualSummaries)?o.manualSummaries:{}).filter(([i,a])=>en(i)&&typeof a=="string").map(([i,a])=>[i,a.slice(0,4e3)])),s=Object.fromEntries(Object.entries(Ye(o.usage)?o.usage:{}).filter(([i,a])=>en(i)&&Ye(a)&&Number.isFinite(a.since)&&Number(a.since)>=0&&Array.isArray(a.visits)&&a.visits.every(c=>typeof c=="number"&&Number.isFinite(c)&&c>=0)).map(([i,a])=>[i,{since:a.since,visits:a.visits.slice(-2e3).sort((c,l)=>c-l)}]));return n.settings={theme:Bn(o.theme)??tt,reducedMotion:o.reducedMotion===!0,pinned:Array.isArray(o.pinned)?o.pinned.filter(i=>typeof i=="string"&&en(i)):[],usage:s,manualSummaries:r},n}load(){let t=this.loadStored();this.storedRevision!==void 0&&t.revision!==this.storedRevision&&this.revision++,this.storedRevision=t.revision;let n=Object.fromEntries(Object.entries(t.views).map(([o,r])=>[o,{filters:r.filters}]));for(let[o,r]of Object.entries(this.viewports))n[o]={...n[o],...r};return{...t,revision:this.revision,positions:this.positions,views:n}}initializePositions(t){let n=this.load(),o=Object.fromEntries(Object.entries(t).filter(([r])=>!n.positions[r]));return Object.keys(o).length?this.savePatch({positions:o},n.revision):n}reset(t){if(this.storage.getItem(this.key)!==t)throw new Error("Layout conflict: another window changed the saved layout");let n=tn();return this.storage.setItem(this.key,JSON.stringify(n)),this.positions={},this.viewports={},this.revision=0,this.storedRevision=0,n}previewBackup(t){if(t.length>5*1024*1024)throw new Error("\u5907\u4EFD\u8D85\u8FC7 5 MB");return new e({getItem:()=>t,setItem(){}},this.key).loadStored()}importBackup(t,n){let o=this.previewBackup(t);if(this.storage.getItem(this.key)!==n)throw new Error("Layout conflict: another window changed the saved layout");let r=this.storedRevision??0;try{r=Math.max(r,this.loadStored().revision)}catch{}let s=r+1;return this.storage.setItem(this.key,JSON.stringify({...o,revision:s,positions:{},views:Object.fromEntries(Object.entries(o.views).map(([i,a])=>[i,{filters:a.filters}]))})),this.positions=o.positions,this.viewports=Object.fromEntries(Object.entries(o.views).filter(([,i])=>i.viewport).map(([i,a])=>[i,{viewport:a.viewport}])),this.storedRevision=s,this.revision++,this.load()}savePatch(t,n){let o=this.load(),r=t.settings!==void 0||t.collapsed!==void 0||Object.values(t.views??{}).some(a=>a.filters!==void 0);if(r&&o.revision!==n)throw new Error("Layout conflict: another window saved a newer layout");let s={...o.views};for(let[a,c]of Object.entries(t.views??{}))s[a]={...s[a],...c};let i={schemaVersion:1,revision:o.revision+1,positions:{...o.positions,...t.positions},collapsed:t.collapsed??o.collapsed,views:s,settings:{theme:tt,reducedMotion:!1,...o.settings,...t.settings}};if(Ml(i),r){let a={...i,revision:(this.storedRevision??0)+1,positions:{},views:Object.fromEntries(Object.entries(s).map(([c,l])=>[c,{filters:l.filters}]))};this.storage.setItem(this.key,JSON.stringify(a)),this.storedRevision=a.revision}return this.positions=i.positions,this.viewports=Object.fromEntries(Object.entries(s).filter(([,a])=>a.viewport).map(([a,c])=>[a,{viewport:c.viewport}])),this.revision=i.revision,i}};var we=Ge(require("react"),1);function Il({color:e,reduced:t,onColor:n,onReduced:o}){let[r,s]=(0,we.useState)(e),[i,a]=(0,we.useState)(!1),[c,l]=(0,we.useState)(t);(0,we.useEffect)(()=>l(t),[t]),(0,we.useEffect)(()=>{s(e),a(!1)},[e]);let d=()=>{let u=Bn(r);a(!u),u&&n(u)};return we.default.createElement("details",{className:"wg-theme"},we.default.createElement("summary",null,"\u4E3B\u9898\u4E0E\u52A8\u6001\u6548\u679C"),we.default.createElement("div",{className:"wg-theme-controls"},we.default.createElement("label",null,"\u4E3B\u9898\u8272"," ",we.default.createElement("input",{type:"color","aria-label":"\u4E3B\u9898\u8272",value:e,onChange:u=>n(u.target.value)})),we.default.createElement("input",{"aria-label":"\u4E3B\u9898 HEX",value:r,onChange:u=>s(u.target.value),onBlur:d,onKeyDown:u=>{u.key==="Enter"&&d()},"aria-invalid":i}),we.default.createElement("button",{onClick:d},"\u5E94\u7528\u989C\u8272"),["#6aabff","#c084fc","#2dd4bf","#fb923c"].map(u=>we.default.createElement("button",{key:u,"aria-label":"\u914D\u8272 "+u,onClick:()=>n(u),style:{borderColor:u}},"\u25CF")),we.default.createElement("button",{onClick:()=>n(tt)},"\u6062\u590D\u9ED8\u8BA4\u8272"),i&&we.default.createElement("span",{role:"alert"},"\u8BF7\u8F93\u5165\u6709\u6548\u7684 HEX \u8272\u503C\uFF0C\u4F8B\u5982 #6aabff"),we.default.createElement("label",{className:"wg-check"},we.default.createElement("input",{type:"checkbox",checked:c,onChange:u=>{l(u.target.checked),o(u.target.checked)}}),"\u51CF\u5C11\u52A8\u6001\u6548\u679C\uFF08\u4E5F\u9075\u5FAA\u7CFB\u7EDF\u8BBE\u7F6E\uFF09")))}var pe=require("react");var Jo=.86*1.25,er=1.25,gt=1.2,ht=e=>Math.max(-99800,Math.min(99800,e)),Vn=(e,t)=>JSON.stringify([e,t]),tr=class{bodies=new Map;links=[];active=!1;reduced=!1;contactScale=er;dragging;mode="elastic";idle=0;hardening=gt;quiet=0;recovery;inputs=new Map;groups=[];groupIndex=new Map;ordered=[];originals=new Map;sync(t,n,o=!1,r){let s=new Set(this.bodies.keys()),i=new Set(t.map(g=>g.id)),a=new Map(t.map(g=>[g.id,g])),c=new Map(n.map(g=>[g.target,g.source])),l=s.size!==i.size;for(let g of s)i.has(g)||(this.bodies.delete(g),this.inputs.delete(g),l=!0);let d=new Set;for(let g of t){let{offset:x,radius:y}=pt(g.data.kind),v=ht(g.position.x)+x.x,m=ht(g.position.y)+x.y,w=this.bodies.get(g.id),S=this.inputs.get(g.id),E=o||!r?.has(g.position)&&(!S||Math.hypot(S.x-g.position.x,S.y-g.position.y)>.1);this.inputs.set(g.id,{...g.position}),w?E&&!w.pin&&Math.hypot(w.x-v,w.y-m)>.1&&(Object.assign(w,{x:v,y:m,vx:0,vy:0}),delete w.opening,l=!0,d.add(g.id)):(this.bodies.set(g.id,{id:g.id,x:v,y:m,vx:0,vy:0,radius:y,offset:x}),l=!0)}let u=new Map(this.links.map(g=>[Vn(g.source,g.target),g]));this.links=n.filter(g=>i.has(g.source)&&i.has(g.target)).map(g=>{let x=u.get(Vn(g.source,g.target));if(x&&!o&&!d.has(g.source)&&!d.has(g.target))return x;let y=this.bodies.get(g.source),v=this.bodies.get(g.target);return{...g,restLength:Math.hypot(v.x-y.x,v.y-y.y),restVector:{x:v.x-y.x,y:v.y-y.y},stiffness:1}}),(this.links.length!==u.size||this.links.some(g=>!u.has(Vn(g.source,g.target))))&&(l=!0);let f=new Set,p=g=>{if(f.has(g))return;f.add(g);let x=c.get(g);if(x&&i.has(x)&&p(x),s.has(g)||!s.size||this.reduced||o)return;let y=this.bodies.get(g),v=x?this.bodies.get(x):void 0,m=x?a.get(x):void 0;if(!v||!m)return;let w=y.x-m.position.x-v.offset.x,S=y.y-m.position.y-v.offset.y,E=Math.hypot(w,S),C=Math.min(1,(v.radius+y.radius+2)*er/(E||1));y.opening={parent:v.id,dx:w,dy:S,elapsed:0,start:C},y.x=v.x+w*C,y.y=v.y+S*C};for(let g of i)p(g);let h=new Map;for(let g of this.links)for(let[x,y]of[[g.source,g.target],[g.target,g.source]])h.has(x)||h.set(x,[]),h.get(x).push(y);this.groups=[],this.groupIndex.clear();for(let g of i)if(!this.groupIndex.has(g)){let x=this.groups.length,y=[],v=[g];this.groupIndex.set(g,x);for(let m=0;m<v.length;m++){let w=v[m];y.push(this.bodies.get(w));for(let S of h.get(w)??[])this.groupIndex.has(S)||(this.groupIndex.set(S,x),v.push(S))}this.groups.push(y)}return this.dragging&&!i.has(this.dragging)&&(this.dragging=void 0,this.mode="elastic",this.hardening=0),this.recovery&&!i.has(this.recovery.id)&&(this.recovery=void 0),o&&(this.recovery=void 0,this.hardening=gt,this.originals.clear()),this.orderLinks(),l&&this.wake(),l}wake(){this.active=!0,this.quiet=0}pin(t,n){let o=this.bodies.get(t);o&&(o.pin={x:ht(n.x)+o.offset.x,y:ht(n.y)+o.offset.y},o.x=o.pin.x,o.y=o.pin.y,o.vx=o.vy=0,delete o.opening,this.orderLinks(),this.wake())}unpin(t){let n=this.bodies.get(t);n?.pin&&(delete n.pin,this.orderLinks(),this.wake())}capture(){this.originals.clear();for(let t of this.links){let n=this.bodies.get(t.source),o=this.bodies.get(t.target);t.restVector={x:o.x-n.x,y:o.y-n.y},t.restLength=Math.hypot(t.restVector.x,t.restVector.y),this.originals.set(Vn(t.source,t.target),{...t.restVector})}}beginDrag(t,n="elastic"){if(this.bodies.has(t)){this.dragging=t,this.mode=n,this.recovery=void 0,this.idle=0,this.hardening=0,this.contactScale=Jo,this.capture(),this.orderLinks();for(let o of this.bodies.values())o.vx=o.vy=0;this.wake()}}drag(t,n,o="elastic"){let r=this.bodies.get(t);if(!r)return;this.dragging!==t?this.beginDrag(t,o):this.mode!==o&&(this.mode=o,this.capture(),this.orderLinks());let s=ht(n.x)+r.offset.x,i=ht(n.y)+r.offset.y,a=s-r.x,c=i-r.y;Math.hypot(a,c)>.05&&(this.idle=0,this.hardening=0,this.contactScale=Jo),delete r.opening;let l=Math.max(1,Math.ceil(Math.hypot(a,c)/18)),d={x:r.x,y:r.y};for(let u=1;u<=l;u++)r.x=d.x+a*u/l,r.y=d.y+c*u/l,r.pin={x:r.x,y:r.y},this.contacts(!0);r.vx=r.vy=0,this.wake()}release(t){if(this.dragging===t){let n=this.bodies.get(t);if(n&&this.mode==="elastic"){this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0};let o=this.groupIndex.get(t);for(let r of this.links)if(this.groupIndex.get(r.source)===o){let s=this.bodies.get(r.source),i=this.bodies.get(r.target),a=this.originals.get(Vn(r.source,r.target))??r.restVector,c=i.x-s.x-a.x,l=i.y-s.y-a.y,d=.2*Math.min(1,Math.hypot(a.x,a.y)/(Math.hypot(c,l)||1));r.restVector={x:a.x+c*d,y:a.y+l*d},r.restLength=Math.hypot(r.restVector.x,r.restVector.y)}}else this.capture(),n&&(this.recovery={id:t,point:{x:n.x,y:n.y},elapsed:0});this.dragging=void 0,this.idle=0}this.unpin(t),this.orderLinks(),this.wake()}ropeState(t,n){let o=this.links.find(i=>i.source===t&&i.target===n),r=this.bodies.get(t),s=this.bodies.get(n);return{softness:1-this.hardening/gt,stretch:o&&r&&s?Math.max(0,Math.hypot(s.x-r.x,s.y-r.y)-o.restLength):0}}positions(){return Object.fromEntries([...this.bodies.values()].map(t=>[t.id,{x:t.x-t.offset.x,y:t.y-t.offset.y}]))}orderLinks(){this.ordered=[];let t=new Set,n=this.dragging??this.recovery?.id??[...this.bodies.values()].find(s=>s.pin)?.id,o=[...n?[n]:[],...this.bodies.keys()],r=new Map;for(let s of this.links)for(let i of[s.source,s.target])r.has(i)||r.set(i,[]),r.get(i).push(s);for(let s of o)if(!t.has(s)){let i=[s];t.add(s);for(let a=0;a<i.length;a++)for(let c of r.get(i[a])??[]){let l=i[a],d=c.source===l?c.target:c.source;t.has(d)||(t.add(d),i.push(d),this.ordered.push({link:c,from:l,to:d,sign:c.source===l?1:-1,rate:c.source===l?7:10}))}}}contacts(t=!1){let n=[...this.bodies.values()],o=106*er+8,r=new Map;for(let a of n){let c=Math.floor(a.x/o)+":"+Math.floor(a.y/o);r.has(c)||r.set(c,[]),r.get(c).push(a)}let s=new Set;if(this.mode!=="free")for(let a of n)(a.pin||a.id===this.recovery?.id)&&s.add(this.groupIndex.get(a.id));let i=0;for(let a=0;a<n.length;a++){let c=n[a],l=Math.floor(c.x/o),d=Math.floor(c.y/o);for(let u=l-1;u<=l+1;u++)for(let f=d-1;f<=d+1;f++)for(let p of r.get(u+":"+f)??[]){if(c.id>=p.id||c.pin&&p.pin)continue;let h=this.groupIndex.get(c.id),g=this.groupIndex.get(p.id),x=p.x-c.x,y=p.y-c.y,v=Math.hypot(x,y),m=(c.radius+p.radius+(h===g?2:4))*this.contactScale;if(v>=m)continue;let w=m-v;i=Math.max(i,w);let S=v>1e-6?x/v:Math.cos(a*2.39996),E=v>1e-6?y/v:Math.sin(a*2.39996),C=h!==g&&this.mode!=="free",z=C?s.has(h):!!c.pin||c.id===this.recovery?.id,P=C?s.has(g):!!p.pin||p.id===this.recovery?.id;if(z&&P)continue;let V=z||P?1:.5,L=(F,H,b)=>{for(let N of C?this.groups[H]:[F])N.x+=S*w*V*b,N.y+=E*w*V*b,!t&&!this.reduced&&!this.dragging&&w>2&&(N.vx+=S*b*Math.min(8,w*.1),N.vy+=E*b*Math.min(8,w*.1))};z||L(c,h,-1),P||L(p,g,1)}}return i}step(t){if(!this.active)return!1;let n=Math.min(Math.max(t,0),1/30),o=Math.max(1,Math.ceil(n*120)),r=n/o,s=this.positions();this.idle+=n,this.reduced?this.hardening=gt:(!this.dragging||this.idle>.12)&&(this.hardening=Math.min(gt,this.hardening+n)),this.contactScale=Jo+(er-Jo)*(this.hardening/gt),this.recovery&&(this.recovery.elapsed+=n);for(let c=0;c<o;c++){for(let u of this.bodies.values()){if(u.pin){u.x=u.pin.x,u.y=u.pin.y,u.vx=u.vy=0;continue}this.reduced&&(u.vx=u.vy=0),u.vx*=Math.exp(-12*r),u.vy*=Math.exp(-12*r),u.x+=u.vx*r,u.y+=u.vy*r,u.id===this.recovery?.id&&(u.x=this.recovery.point.x,u.y=this.recovery.point.y,u.vx=u.vy=0)}let l=this.mode!=="free"&&(!!this.dragging||!!this.recovery);for(let u of this.ordered){let{link:f,from:p,to:h,sign:g,rate:x}=u,y=this.bodies.get(p),v=this.bodies.get(h);if(this.mode==="free"&&(this.dragging||this.recovery)||y.opening||v.opening)continue;let m=Math.hypot(v.x-y.x,v.y-y.y);if(!l){let S=Math.max(280,f.restLength);if(m<=S||!m)continue;let E=(m-S)/m*(1-Math.exp(-5*r)),C=(v.x-y.x)*E,z=(v.y-y.y)*E;y.pin||(y.x+=C*.5,y.y+=z*.5),v.pin||(v.x-=C*.5,v.y-=z*.5);continue}if(this.dragging&&this.groupIndex.get(p)!==this.groupIndex.get(this.dragging)||v.pin||v.id===this.recovery?.id)continue;f.stiffness=.3+.7*this.hardening/gt;let w=1-Math.exp(-(this.reduced?35:x*(.55+f.stiffness))*r);v.x+=(y.x+f.restVector.x*g-v.x)*w,v.y+=(y.y+f.restVector.y*g-v.y)*w}for(let u of this.bodies.values())if(u.opening){let f=u.opening,p=this.bodies.get(f.parent);if(!p){delete u.opening;continue}f.elapsed+=r;let h=Math.min(1,f.elapsed/.24),g=f.start+(1-f.start)*(1-(1-h)**3);u.x=p.x+f.dx*g,u.y=p.y+f.dy*g,h===1&&delete u.opening}let d=0;for(let u=0;u<4;u++)d=Math.max(d,this.contacts());if(!l&&!this.dragging&&d>.1)for(let u of this.links){let f=this.bodies.get(u.source),p=this.bodies.get(u.target);u.restLength=Math.max(u.restLength,Math.hypot(p.x-f.x,p.y-f.y))}for(let u of this.bodies.values())u.pin||(u.x=ht(u.x-u.offset.x)+u.offset.x,u.y=ht(u.y-u.offset.y)+u.offset.y)}this.recovery&&(this.reduced||this.recovery.elapsed>2.4)&&(this.capture(),this.recovery=void 0,this.mode="elastic",this.orderLinks());let i=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.x-c.offset.x-s[c.id].x,c.y-c.offset.y-s[c.id].y))),a=Math.max(0,...[...this.bodies.values()].map(c=>Math.hypot(c.vx,c.vy)));if(this.quiet=this.hardening>=gt&&!this.recovery&&![...this.bodies.values()].some(c=>c.opening)&&i<.035&&a<.2?this.quiet+n:0,this.quiet>.22){this.active=!1;for(let c of this.bodies.values())c.vx=c.vy=0}return this.active}};function Pl(e,t,n){let[o,r]=(0,pe.useState)([]),[s,i]=(0,pe.useState)({}),a=(0,pe.useRef)(new tr),c=(0,pe.useRef)(),l=(0,pe.useRef)(0),d=(0,pe.useRef)(n),u=(0,pe.useRef)(),f=(0,pe.useRef)(),p=(0,pe.useRef)(!1),h=(0,pe.useRef)(new WeakSet);d.current=n;let g=(0,pe.useCallback)(()=>{let S=a.current.positions();for(let E of Object.values(S))h.current.add(E);d.current(S)},[]),x=(0,pe.useCallback)(()=>{let S=a.current.positions();i(Object.fromEntries(a.current.links.map(E=>[JSON.stringify([E.source,E.target]),a.current.ropeState(E.source,E.target)]))),r(E=>E.map(C=>{let z=S[C.id];return z&&(z.x!==C.position.x||z.y!==C.position.y)?{...C,position:z}:C}))},[]),y=(0,pe.useCallback)(()=>{if(c.current!==void 0)return;l.current=performance.now();let S=E=>{a.current.step((E-l.current)/1e3),l.current=E,x(),a.current.active?c.current=requestAnimationFrame(S):(c.current=void 0,g())};c.current=requestAnimationFrame(S)},[x,g]);(0,pe.useEffect)(()=>{a.current.reduced=t},[t]),(0,pe.useEffect)(()=>{let S=a.current.sync(e.nodes,e.edges,p.current,h.current);p.current=!1;let E=a.current.positions();r(C=>{let z=new Map(C.map(P=>[P.id,P]));return e.nodes.map(P=>({...z.get(P.id),...P,position:E[P.id]??P.position}))}),S&&y()},[e,y]),(0,pe.useEffect)(()=>()=>{c.current!==void 0&&cancelAnimationFrame(c.current)},[]);let v=(0,pe.useCallback)(S=>{if(f.current&&f.current!==u.current&&a.current.unpin(f.current),f.current=S,S&&!u.current){let E=a.current.positions()[S];E&&a.current.pin(S,E)}a.current.active&&y()},[y]),m=(0,pe.useCallback)((S,E,C="elastic")=>{v(),u.current=S,a.current.drag(S,E,C),x(),y()},[v,x,y]),w=(0,pe.useCallback)(S=>{a.current.release(S),u.current=void 0,g(),y()},[g,y]);return(0,pe.useEffect)(()=>{let S=C=>{let z=u.current;if(!z||C.key!=="Control")return;let P=a.current.positions()[z];P&&m(z,P,C.type==="keydown"?"free":"elastic")},E=()=>{u.current&&w(u.current)};return window.addEventListener("keydown",S),window.addEventListener("keyup",S),window.addEventListener("blur",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("keydown",S),window.removeEventListener("keyup",S),window.removeEventListener("blur",E),window.removeEventListener("pointercancel",E)}},[m,w]),{nodes:o,ropes:s,setNodes:r,drag:m,release:w,hover:v,world:a.current,forceNextSync:()=>{p.current=!0}}}var zl=Ge(require("react"),1);function Al({id:e,source:t,target:n,style:o,data:r}){let s=ei(t),i=ei(n);if(!s||!i)return null;let a=x=>{let y=pt(x.data.kind),v=x.internals.positionAbsolute;return{x:v.x+y.offset.x,y:v.y+y.offset.y,radius:y.radius}},c=vl(a(s),a(i)),l=c.target.x-c.source.x,d=c.target.y-c.source.y,u=Math.hypot(l,d),f=Number(r?.softness??0),p=Math.min(48,u*.15)*f,h=(c.source.x+c.target.x)/2-(u?d/u:0)*p,g=(c.source.y+c.target.y)/2+(u?l/u:0)*p;return zl.default.createElement(Qt,{id:e,path:`M ${c.source.x},${c.source.y} Q ${h},${g} ${c.target.x},${c.target.y}`,style:o})}var Ze=Ge(require("react"),1);function Dl(e){return[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(t=>t.segment)}function Ol({value:e,onSave:t}){let[n,o]=(0,Ze.useState)(e);return(0,Ze.useEffect)(()=>o(e),[e]),Ze.default.createElement("form",{className:"wg-summary-editor",onSubmit:r=>{r.preventDefault(),t(n.trim())}},Ze.default.createElement("label",null,"\u624B\u52A8\u77ED\u6982\u62EC",Ze.default.createElement("textarea",{"aria-label":"\u624B\u52A8\u77ED\u6982\u62EC",value:n,onChange:r=>o(r.target.value),maxLength:4e3,placeholder:"\u5EFA\u8BAE 12\u201324 \u5B57\uFF1B\u7559\u7A7A\u4F7F\u7528\u63D2\u4EF6\u6458\u8981\u6216\u539F\u6807\u9898"})),Ze.default.createElement("p",{className:"wg-small-note"},Dl(n).length," \u4E2A\u5B57\u7B26 \xB7 \u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668"),Ze.default.createElement("button",null,"\u4FDD\u5B58\u6982\u62EC"))}var Ee=Ge(require("react"),1);function Tl({repository:e,snapshot:t,prepareImport:n,onImport:o,onError:r}){let[s,i]=(0,Ee.useState)(!1),[a,c]=(0,Ee.useState)(!1),[l,d]=(0,Ee.useState)();return Ee.default.createElement("div",{className:"wg-backup"},Ee.default.createElement("button",{onClick:()=>i(!s),"aria-expanded":s},"\u5907\u4EFD\u4E0E\u6062\u590D"),s&&Ee.default.createElement("div",{className:"wg-backup-panel",role:"region","aria-label":"\u5907\u4EFD\u4E0E\u6062\u590D"},Ee.default.createElement("p",null,"\u5907\u4EFD\u5305\u542B\u6982\u62EC\u3001\u7F6E\u9876\u3001\u4E3B\u9898\u3001\u4F7F\u7528\u8BB0\u5F55\u3001\u7B5B\u9009\u548C\u5F53\u524D\u5E03\u5C40\u3002"),Ee.default.createElement("button",{onClick:()=>{let u=URL.createObjectURL(new Blob([JSON.stringify(t(),null,2)],{type:"application/json"})),f=document.createElement("a");f.href=u,f.download="workspace-graph-backup.json",f.click(),setTimeout(()=>URL.revokeObjectURL(u),1e3)}},"\u5BFC\u51FA\u56FE\u8C31\u5907\u4EFD"),Ee.default.createElement("label",{className:"wg-backup-file"},"\u5BFC\u5165\u5907\u4EFD\uFF08JSON\uFF0C\u6700\u591A 5 MB\uFF09",Ee.default.createElement("input",{type:"file",accept:".json,application/json","aria-label":"\u9009\u62E9\u56FE\u8C31\u5907\u4EFD",disabled:a,onChange:async u=>{let f=u.target.files?.[0];if(u.target.value="",d(void 0),!!f){c(!0);try{if(f.size>5*1024*1024)throw new Error("\u5907\u4EFD\u8D85\u8FC7 5 MB");let p=await f.text(),h=e.previewBackup(p),g=await n();d({raw:p,doc:h,expected:g})}catch(p){r("\u65E0\u6CD5\u8BFB\u53D6\u5907\u4EFD\uFF1A"+String(p))}finally{c(!1)}}}})),l&&Ee.default.createElement("div",{role:"status"},Ee.default.createElement("p",null,"\u5C06\u66FF\u6362\u672C\u5730\u8BBE\u7F6E\uFF1A",Object.keys(l.doc.settings?.manualSummaries??{}).length," ","\u6761\u6982\u62EC\u3001",l.doc.settings?.pinned?.length??0," ","\u4E2A\u7F6E\u9876\u3002\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5F53\u524D\u5907\u4EFD\u3002\u5BFC\u5165\u7684\u4F4D\u7F6E\u4EC5\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559\u3002"),Ee.default.createElement("button",{disabled:a,onClick:async()=>{c(!0);try{await o(l.raw,l.expected),d(void 0)}catch(u){r("\u5BFC\u5165\u672A\u5B8C\u6210\uFF1A"+String(u))}finally{c(!1)}}},"\u786E\u8BA4\u5BFC\u5165\u5907\u4EFD"),Ee.default.createElement("button",{disabled:a,onClick:()=>d(void 0)},"\u53D6\u6D88\u5BFC\u5165"))))}var Pe=Ge(require("react"),1);function Ll({rows:e,title:t,onLocate:n}){let[o,r]=(0,Pe.useState)(50),i=(0,Pe.useMemo)(()=>e.slice(0,o),[e,o]),a={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"};return Pe.default.createElement("section",{className:"wg-navigation","aria-label":"\u4F1A\u8BDD\u5BFC\u822A"},Pe.default.createElement("h2",null,t," ",Pe.default.createElement("span",null,e.length," \u4E2A\u4F1A\u8BDD")),!e.length&&Pe.default.createElement("p",null,"\u6CA1\u6709\u5339\u914D\u4F1A\u8BDD\uFF0C\u53EF\u8C03\u6574\u65F6\u95F4\u3001\u72B6\u6001\u6216\u641C\u7D22\u6761\u4EF6\u3002"),Pe.default.createElement("div",{className:"wg-result-list"},i.map(c=>Pe.default.createElement("button",{key:c.id,"aria-label":"\u5B9A\u4F4D "+c.data.title,onClick:()=>n(c.data.entityId)},Pe.default.createElement("strong",null,c.data.pinned?"\u2605 ":"",c.data.title),Pe.default.createElement("span",null,a[c.data.status],c.data.current?" \xB7 \u5F53\u524D":""),c.data.path&&Pe.default.createElement("small",null,c.data.path)))),e.length>o&&Pe.default.createElement("button",{onClick:()=>r(o+50)},"\u518D\u663E\u793A 50 \u6761\u7ED3\u679C"))}var Fn={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"},ri={running:"#6aabff",waiting:"#ffc56c",unread:"#5fe0b4",idle:"#9aaac5",unknown:"#748099"};function pm({data:e,selected:t}){let n=e.kind==="workspace";return _.default.createElement("div",{className:"wg-bubble "+(n?"is-workspace":"is-session")+" is-status-"+e.status+(t?" is-selected":"")+(e.collapsed===!1?" is-expanded":"")+(e.current?" is-current":"")+(e.working?" is-working":"")+(e.archived?" is-archived":""),style:{"--bubble-color":ri[e.status]},title:e.title+(e.path?" \xB7 "+e.path:"")},_.default.createElement(et,{type:"target",position:U.Top,isConnectable:!1}),_.default.createElement("div",{className:"wg-orb"},_.default.createElement("span",{className:"wg-orb-symbol"},n?"\u25C8":"\u2726"),n&&_.default.createElement("span",{className:"wg-orb-count"},e.total," \u4E2A\u4F1A\u8BDD"),n&&!!e.childWorkspaceCount&&_.default.createElement("span",{className:"wg-orb-count"},e.childWorkspaceCount," \u4E2A\u5B50\u5DE5\u4F5C\u533A")),_.default.createElement("div",{className:"wg-node-title"},e.title),_.default.createElement("div",{className:"wg-node-badges"},e.current&&_.default.createElement("span",null,"\u5F53\u524D"),e.working&&_.default.createElement("strong",null,"\u25B6 \u5DE5\u4F5C\u4E2D"),e.parentWorkspaceId&&_.default.createElement("span",null,"\u5B50\u5DE5\u4F5C\u533A"),e.parentSessionId&&_.default.createElement("span",null,"\u5206\u652F"),e.context&&_.default.createElement("span",null,"\u6765\u6E90"),e.outsideFilters&&_.default.createElement("span",null,e.current||e.working||e.status==="waiting"?"\u7B5B\u9009\u5916\u6D3B\u52A8":"\u4E34\u65F6\u5B9A\u4F4D")),!n&&_.default.createElement("div",{className:"wg-activity"},e.pinned?"\u2605 ":"",e.recency&&Go[e.recency]," \xB7"," ",e.frequency&&Uo[e.frequency]),_.default.createElement("div",{className:"wg-node-meta"},_.default.createElement("i",null),n?e.collapsed?"\u5DF2\u6536\u8D77":"\u5DE5\u4F5C\u533A":e.archived?"\u5DF2\u5F52\u6863":Fn[e.status]),_.default.createElement(et,{type:"source",position:U.Bottom,isConnectable:!1}),!n&&_.default.createElement(_.default.Fragment,null,_.default.createElement(et,{id:"branch-source",type:"source",position:U.Top,isConnectable:!1}),_.default.createElement(et,{id:"branch-target",type:"target",position:U.Bottom,isConnectable:!1})))}var gm={bubble:_.default.memo(pm)},hm={rope:_.default.memo(Al)};function mm(e){return(0,_.useState)(()=>{try{return{layout:e.load(),error:""}}catch(t){return{layout:tn(),error:"\u65E0\u6CD5\u8BFB\u53D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF1A"+String(t)}}})[0]}function $l(e){return _.default.createElement(Jr,null,_.default.createElement(ym,{...e}))}function ym({catalog:e,actions:t,repository:n,demo:o,access:r}){let s=mm(n),[i,a]=(0,_.useState)(s.layout),c=(0,_.useRef)(i),[l,d]=(0,_.useState)(s.error),[u,f]=(0,_.useState)(!1),[p,h]=(0,_.useState)(""),[g,x]=(0,_.useState)(()=>({...Jt,...s.layout.views.all?.filters})),[y,v]=(0,_.useState)(),[m,w]=(0,_.useState)(()=>new Set),[S,E]=(0,_.useState)({}),[C,z]=(0,_.useState)(!0),[P,V]=(0,_.useState)(),[L,F]=(0,_.useState)(),[H,b]=(0,_.useState)(!1),[N,k]=(0,_.useState)(),[I,D]=(0,_.useState)(!1),A=(0,_.useRef)(),[R,B]=(0,_.useState)(),[X,Q]=(0,_.useState)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),Z=!!i.settings?.reducedMotion||X,[K,ne]=(0,_.useState)(Date.now),Y=Ln(),$=(0,_.useRef)(null),q=(0,_.useRef)(!1),J=(0,_.useCallback)(()=>{let M=$.current;if(!M||!Y.getNodes().length)return;let W=M.getBoundingClientRect(),ee=M.querySelector(".wg-dock")?.getBoundingClientRect(),ce=W.width>850?(ee?.width??0)+45:20,xe=W.width<=850?(ee?.height??0)+35:35,Rn=Math.max(180,W.width-ce-35),Wn=Math.max(120,W.height-xe-40),ot=Y.getNodesBounds(Y.getNodes()),wt=Math.max(.1,Math.min(1,Rn/(ot.width+100),Wn/(ot.height+100)));Y.setViewport({x:ce+(Rn-ot.width*wt)/2-ot.x*wt,y:20+(Wn-ot.height*wt)/2-ot.y*wt,zoom:wt})},[Y]),te=(0,_.useRef)(!0),G=(0,_.useRef)(Promise.resolve()),j=(0,_.useRef)(!!s.error),oe=(0,_.useRef)(0),ie=(0,_.useRef)(0),se=(0,_.useRef)(),ge=(0,_.useRef)(),be=(0,_.useRef)(g);be.current=g;let fe=(0,_.useMemo)(()=>jo(e,g,i,S,m,K,L),[e,g,i,S,m,K,L]),Ne=(0,_.useMemo)(()=>jo(e,Xo,{...tn(),settings:i.settings},{},new Set,K).matches,[e,i.settings,K]),Be=(0,_.useMemo)(()=>Object.fromEntries(["waiting","running","unread"].map(M=>[M,Ne.filter(W=>W.data.status===M).length])),[Ne]),yt=(0,_.useMemo)(()=>N?Ne.filter(M=>M.data.status===N):fe.matches,[N,Ne,fe.matches]),ze=(0,_.useCallback)(M=>{c.current=M,a(M)},[]),le=(0,_.useCallback)((M,W=!1)=>{j.current||(oe.current++,W&&ie.current++,G.current=G.current.then(async()=>{if(!te.current||j.current)return;let ee=()=>{if(!te.current||j.current)return;let ce=c.current.revision,xe=W?n.initializePositions(M.positions??{}):n.savePatch(M,ce);ze(xe),h(M.settings?"\u8BBE\u7F6E\u5DF2\u4FDD\u5B58":"\u5E03\u5C40\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559")};navigator.locks?await navigator.locks.request(n.key,ee):ee()}).catch(ee=>{j.current=!0,te.current&&d("\u5E03\u5C40\u672A\u4FDD\u5B58\uFF1A"+String(ee))}).finally(()=>{oe.current--,W&&ie.current--}))},[n,ze]),he=Pl(fe,Z,M=>{let W=c.current.positions;Object.entries(M).some(([ce,xe])=>!W[ce]||Math.hypot(xe.x-W[ce].x,xe.y-W[ce].y)>.1)&&le({positions:Yo(e,W,M)})}),{nodes:ke,setNodes:De}=he,Te=(0,_.useRef)();(0,_.useEffect)(()=>{let M=ke.find(W=>W.id===Te.current);M&&(Te.current=void 0,Y.fitView({nodes:[M],padding:.8,maxZoom:1}))},[ke,Y]);let nn=M=>{A.current??=Y.getViewport(),Te.current="session:"+M,F(M),v("session:"+M);let W=ke.find(ee=>ee.id==="session:"+M);W&&(Te.current=void 0,Y.fitView({nodes:[W],padding:.8,maxZoom:1}))},on=(0,_.useMemo)(()=>fe.edges.map(M=>({...M,type:"rope",data:he.ropes[JSON.stringify([M.source,M.target])],style:{stroke:"#47719a",strokeWidth:1.25,opacity:.56}})),[fe.edges,he.ropes]);(0,_.useEffect)(()=>{if(e.loading||j.current)return;let M=c.current.settings?.usage??{},W=e.sessions.map(ee=>ee.id);W.some(ee=>!Object.hasOwn(M,ee))&&le({settings:{usage:_l(M,W)}})},[e.sessions,e.loading,i.settings?.usage,le]),(0,_.useEffect)(()=>{let M=setInterval(()=>ne(Date.now()),6e4);return()=>clearInterval(M)},[]),(0,_.useEffect)(()=>{let M=window.matchMedia("(prefers-reduced-motion: reduce)"),W=()=>Q(M.matches);return M.addEventListener("change",W),()=>M.removeEventListener("change",W)},[]),(0,_.useEffect)(()=>(te.current=!0,()=>{te.current=!1,clearTimeout(ge.current),clearTimeout(se.current)}),[]),(0,_.useEffect)(()=>{De(M=>M.map(W=>({...W,selected:W.id===y})))},[y,De]),(0,_.useEffect)(()=>{let M=W=>{if(W.key===n.key)try{let ee=n.load();ze(ee),h("\u8BBE\u7F6E\u5DF2\u4ECE\u53E6\u4E00\u7A97\u53E3\u540C\u6B65")}catch(ee){j.current=!0,d("\u65E0\u6CD5\u540C\u6B65\u5E03\u5C40\uFF1A"+String(ee))}};return window.addEventListener("storage",M),()=>window.removeEventListener("storage",M)},[n,ze]),(0,_.useEffect)(()=>{if(e.loading)return;let M=c.current.views[g.workspace]?.viewport,W=setTimeout(()=>{if(M)Y.setViewport(M);else{let ee=e.currentSessionId??e.currentSessionIds?.[0],ce=!q.current&&ee?Y.getNodes().find(xe=>xe.id==="session:"+ee):void 0;if(ce){let{offset:xe}=pt("session");Y.setCenter(ce.position.x+xe.x,ce.position.y+xe.y,{zoom:1})}else J()}q.current=!0},60);return()=>clearTimeout(W)},[g.workspace,e.loading,Y,J]),(0,_.useEffect)(()=>{if(e.loading||j.current)return;let M=Object.entries(Zo(e,c.current.positions)).filter(([W])=>!c.current.positions[W]);M.length&&le({positions:Object.fromEntries(M)},!0)},[e.loading,fe,le]),(0,_.useEffect)(()=>{if(!p)return;let M=setTimeout(()=>h(""),2400);return()=>clearTimeout(M)},[p]);let rn=async M=>{f(!0),j.current||d("");try{if(clearTimeout(ge.current),le({views:{[be.current.workspace]:{viewport:Y.getViewport()}}}),await G.current,!te.current)return;await M()}catch(W){d("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF1A"+String(W))}finally{te.current&&f(!1)}},nt=M=>{let W={...be.current,...M};x(W),M.query===void 0&&le({views:{all:{filters:W}}})};(0,_.useEffect)(()=>(se.current=setTimeout(()=>le({views:{all:{filters:be.current}}}),250),()=>clearTimeout(se.current)),[g.query,le]);let sn=M=>{F(void 0),k(void 0),v(void 0),x({...M}),le({views:{all:{filters:{...M}}}})},nr=M=>{clearTimeout(ge.current);let W=be.current.workspace;le({views:{[W]:{viewport:Y.getViewport()},all:{...W==="all"?{viewport:Y.getViewport()}:{},filters:{...be.current,workspace:M}}}}),x(ee=>({...ee,workspace:M})),v(void 0)},re=fe.nodes.find(M=>M.id===y),or=()=>{he.forceNextSync();let M=jo(e,g,tn(),S,m),W=Object.fromEntries(ke.map(ee=>[ee.id,ee.position]));V(W),le({positions:Object.fromEntries(M.nodes.map(ee=>[ee.id,ee.position]))}),setTimeout(()=>Y.fitView({padding:.12,maxZoom:1}),70)},an=M=>rn(async()=>{if(M.data.kind==="workspace"){M.data.virtual||await t.openWorkspace(M.data.entityId);return}if(M.data.archived)throw new Error("\u8BF7\u5148\u6062\u590D\u8FD9\u4E2A\u5F52\u6863\u4F1A\u8BDD");let W=M.data.entityId;le({settings:{usage:{...c.current.settings?.usage,[W]:Sl(c.current.settings?.usage?.[W])}}}),await G.current,te.current&&await t.openSession(W)}),Tt=g.query||!!g.statuses?.length||g.recency&&g.recency!=="all"||g.frequency&&g.frequency!=="all"||g.status!=="all"||g.kind!=="all"||g.workspace!=="all"||g.archived,xt=Nl(i.settings?.theme??tt);return _.default.createElement("section",{className:"wg-root"+(i.settings?.reducedMotion?" wg-reduced":""),style:{"--wg-workspace":xt.workspace,"--wg-expanded":xt.expanded,"--wg-session":xt.session,"--wg-session-text":xt.sessionText,"--wg-accent":xt.accent},"aria-label":"\u5DE5\u4F5C\u533A\u56FE\u8C31"},_.default.createElement("header",{className:"wg-header"},_.default.createElement("div",{className:"wg-brand"},_.default.createElement("span",{className:"wg-logo"},"\u25C8"),_.default.createElement("div",null,_.default.createElement("h1",null,"\u5DE5\u4F5C\u533A\u56FE\u8C31",_.default.createElement("span",null,"WORKSPACE ATLAS")),_.default.createElement("p",null,e.workspaces.length," \u4E2A\u5DE5\u4F5C\u533A \xB7 ",fe.total," \u4E2A\u4F1A\u8BDD",o?" \xB7 \u6F14\u793A\u6570\u636E":""))),_.default.createElement("div",{className:"wg-top-actions"},_.default.createElement("button",{"aria-pressed":H,onClick:()=>b(!H)},H?"\u56FE\u8C31\u89C6\u56FE":"\u5217\u8868\u89C6\u56FE"),_.default.createElement(Tl,{repository:n,snapshot:()=>({...c.current,views:{...c.current.views,all:{...c.current.views.all,filters:be.current}},positions:{...c.current.positions,...Object.fromEntries(ke.map(M=>[M.id,M.position]))}}),prepareImport:async()=>(clearTimeout(se.current),le({views:{all:{filters:be.current}}}),await G.current,n.storage.getItem(n.key)),onError:d,onImport:async(M,W)=>{await G.current;let ee=()=>{let ce=n.importBackup(M,W);he.forceNextSync(),j.current=!1,ze(ce),d(""),x({...Jt,...ce.views.all?.filters}),F(void 0),v(void 0),h("\u5907\u4EFD\u5DF2\u5BFC\u5165");let xe=ce.views[ce.views.all?.filters?.workspace??"all"]?.viewport;xe&&Y.setViewport(xe)};navigator.locks?await navigator.locks.request(n.key,ee):ee()}}),_.default.createElement("label",{className:"wg-search"},_.default.createElement("span",null,"\u2315"),_.default.createElement("input",{"aria-label":"\u641C\u7D22\u5DE5\u4F5C\u533A\u548C\u4F1A\u8BDD",placeholder:"\u641C\u7D22\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u2026",value:g.query,onChange:M=>{k(void 0),nt({query:M.target.value})}})),_.default.createElement("button",{onClick:J},"\u9002\u5E94\u753B\u5E03"),_.default.createElement("button",{onClick:or},"\u91CD\u7F6E\u5E03\u5C40"))),(l||e.error)&&_.default.createElement("div",{className:"wg-alert",role:"alert"},_.default.createElement("span",null,l||e.error),j.current&&_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{onClick:()=>location.reload()},"\u91CD\u65B0\u8F7D\u5165"),_.default.createElement("button",{onClick:()=>{try{B({raw:n.storage.getItem(n.key)})}catch(M){d(String(M))}}},"\u6E05\u9664\u5168\u90E8\u672C\u5730\u6570\u636E"),_.default.createElement("button",{onClick:()=>{try{let M=n.storage.getItem(n.key),W=URL.createObjectURL(new Blob([M??""],{type:"text/plain"})),ee=document.createElement("a");ee.href=W,ee.download="workspace-graph-layout-backup.txt",ee.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}catch(M){d(String(M))}}},"\u5BFC\u51FA\u5DF2\u4FDD\u5B58\u539F\u6587")),_.default.createElement("button",{onClick:()=>{let M=new Blob([JSON.stringify({...c.current,positions:{...c.current.positions,...Object.fromEntries(ke.map(ce=>[ce.id,ce.position]))}},null,2)],{type:"application/json"}),W=URL.createObjectURL(M),ee=document.createElement("a");ee.href=W,ee.download="workspace-graph-layout.json",ee.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}},"\u5BFC\u51FA\u5F53\u524D\u5E03\u5C40")),R&&_.default.createElement("div",{className:"wg-alert",role:"alert"},_.default.createElement("span",null,"\u8FD9\u4F1A\u6E05\u9664\u5168\u90E8\u56FE\u8C31\u672C\u5730\u6570\u636E\uFF0C\u5305\u62EC\u624B\u52A8\u6982\u62EC\u3001\u7F6E\u9876\u3001\u4E3B\u9898\u3001\u4F7F\u7528\u8BB0\u5F55\u3001\u7B5B\u9009\u548C\u5E03\u5C40\u3002\u8BF7\u5148\u5BFC\u51FA\u5907\u4EFD\u3002"),_.default.createElement("button",{onClick:()=>{try{let M=n.reset(R.raw);j.current=!1,ze(M),d(""),x(Jt),B(void 0)}catch(M){d("\u65E0\u6CD5\u91CD\u7F6E\uFF1A"+String(M))}}},"\u786E\u8BA4\u6E05\u9664\u5168\u90E8\u6570\u636E"),_.default.createElement("button",{onClick:()=>B(void 0)},"\u53D6\u6D88")),o&&_.default.createElement("div",{className:"wg-demo-label"},"\u4EA4\u4E92\u6F14\u793A \xB7 \u6570\u636E\u4EC5\u7528\u4E8E\u9884\u89C8"),_.default.createElement("div",{className:"wg-canvas"+(I?" wg-compact":"")+(H?" wg-list-view":"")+(re?" wg-has-details":""),ref:$,onKeyDown:M=>{if(M.key!=="Enter"&&M.key!==" ")return;let W=M.target.closest(".react-flow__node")?.getAttribute("data-id"),ee=ke.find(ce=>ce.id===W);ee?.data.kind==="workspace"&&(M.preventDefault(),v(ee.id),w(ce=>{let xe=new Set(ce);return xe.has(ee.data.entityId)?xe.delete(ee.data.entityId):xe.add(ee.data.entityId),xe}))}},_.default.createElement(hl,{nodes:ke,edges:on,nodeTypes:gm,edgeTypes:hm,onNodesChange:M=>De(W=>Kr(M,W)),onNodeDragStart:(M,W)=>{he.drag(W.id,W.position,M.ctrlKey?"free":"elastic")},onNodeDrag:(M,W)=>he.drag(W.id,W.position,M.ctrlKey?"free":"elastic"),onNodeDragStop:(M,W)=>{he.drag(W.id,W.position,M.ctrlKey?"free":"elastic"),he.release(W.id)},autoPanOnNodeFocus:!1,autoPanOnNodeDrag:!1,zoomOnDoubleClick:!1,nodeDragThreshold:5,onNodeClick:(M,W)=>{v(W.id),W.data.kind==="workspace"&&w(ee=>{let ce=new Set(ee);return ce.has(W.data.entityId)?ce.delete(W.data.entityId):ce.add(W.data.entityId),ce})},onNodeDoubleClick:(M,W)=>{an(W)},onPaneClick:()=>v(void 0),onMoveEnd:(M,W)=>{D(W.zoom<.55),clearTimeout(ge.current);let ee=be.current.workspace;ge.current=setTimeout(()=>le({views:{[ee]:{viewport:W}}}),180)},minZoom:.1,maxZoom:3,nodesConnectable:!1,edgesReconnectable:!1,deleteKeyCode:null,selectionOnDrag:!1,multiSelectionKeyCode:null,selectionKeyCode:null,proOptions:{hideAttribution:!1},defaultViewport:i.views[g.workspace]?.viewport,onViewportChange:M=>D(M.zoom<.55)},_.default.createElement(yl,{variant:Xe.Dots,gap:26,size:1,color:"#284061"}),_.default.createElement(wl,{position:"bottom-right",showInteractive:!1})),_.default.createElement("div",{className:"wg-attention","aria-label":"\u5168\u5C40\u4F1A\u8BDD\u72B6\u6001"},["waiting","running","unread"].map(M=>_.default.createElement("button",{key:M,"aria-pressed":N===M,onClick:()=>k(N===M?void 0:M)},Fn[M]," ",Be[M]??0)),N&&_.default.createElement("button",{onClick:()=>k(void 0)},"\u8FD4\u56DE\u5168\u90E8\u4F1A\u8BDD"),A.current&&_.default.createElement("button",{onClick:()=>{Y.setViewport(A.current),A.current=void 0,F(void 0),v(void 0)}},"\u8FD4\u56DE\u5B9A\u4F4D\u524D\u89C6\u89D2")),(H||g.query.trim()||N)&&_.default.createElement(Ll,{key:N??g.query,rows:yt,title:N?"\u5168\u5C40"+Fn[N]:g.query.trim()?"\u641C\u7D22\u7ED3\u679C":"\u5339\u914D\u4F1A\u8BDD",onLocate:nn}),e.loading&&_.default.createElement("div",{className:"wg-empty",role:"status"},_.default.createElement("span",{className:"wg-empty-orb"},"\u25C8"),_.default.createElement("h2",null,"\u6B63\u5728\u8FDE\u63A5\u5DE5\u4F5C\u533A"),_.default.createElement("p",null,"\u8BFB\u53D6 Harness \u7684\u5DE5\u4F5C\u533A\u4E0E\u4F1A\u8BDD\u2026")),!e.loading&&Tt&&fe.matched===0&&_.default.createElement("div",{className:"wg-no-match",role:"status"},"\u6CA1\u6709\u5339\u914D\u7684\u4F1A\u8BDD\uFF1B\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u4F1A\u8BDD\u4ECD\u4FDD\u7559\u3002"),!e.loading&&!fe.nodes.length&&_.default.createElement("div",{className:"wg-empty"},_.default.createElement("span",{className:"wg-empty-orb"},"\u2315"),_.default.createElement("h2",null,Tt?"\u6CA1\u6709\u5339\u914D\u7684\u8282\u70B9":"\u4ECE\u4E00\u4E2A\u5DE5\u4F5C\u533A\u5F00\u59CB"),_.default.createElement("p",null,Tt?"\u8C03\u6574\u5DE6\u4E0B\u89D2\u7684\u9009\u62E9\u6216\u6E05\u9664\u641C\u7D22\u3002":"\u5728 Harness \u4FA7\u680F\u6DFB\u52A0\u5DE5\u4F5C\u533A\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u663E\u793A\u3002"),Tt&&_.default.createElement("button",{onClick:()=>{sn(Xo)}},"\u6E05\u9664\u7B5B\u9009")),_.default.createElement("div",{className:"wg-dock "+(C?"":"is-folded")},_.default.createElement("button",{className:"wg-dock-heading",onClick:()=>z(!C),"aria-expanded":C},_.default.createElement("span",null,"\u2637\u3000\u89C6\u56FE\u4E0E\u7B5B\u9009"),_.default.createElement("span",null,C?"\u2212":"+")),C&&_.default.createElement(_.default.Fragment,null,_.default.createElement("label",{className:"wg-field"},_.default.createElement("span",null,"\u5DE5\u4F5C\u533A"),_.default.createElement("select",{"aria-label":"\u9009\u62E9\u5DE5\u4F5C\u533A",value:g.workspace,onChange:M=>nr(M.target.value)},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u5DE5\u4F5C\u533A"),e.workspaces.map(M=>_.default.createElement("option",{key:M.id,value:M.id},M.title," \xB7"," ",M.path.split(/[\/]/).filter(Boolean).slice(-2).join("/"))),_.default.createElement("option",{value:"__ungrouped__"},"\u672A\u5206\u7EC4"))),_.default.createElement("div",{className:"wg-filter-row"},_.default.createElement("span",null,"\u72B6\u6001"),_.default.createElement("div",{className:"wg-chips"},["all","running","waiting","unread","idle","unknown"].map(M=>_.default.createElement("button",{key:M,className:(M==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(M))?"active":"","aria-pressed":M==="all"?!(g.statuses??(g.status==="all"?[]:[g.status])).length:(g.statuses??[g.status]).includes(M),onClick:()=>{let W=g.statuses??(g.status==="all"?[]:[g.status]);nt({status:"all",statuses:M==="all"?[]:W.includes(M)?W.filter(ee=>ee!==M):[...W,M]})}},M!=="all"&&_.default.createElement("i",{style:{background:ri[M]}}),M==="all"?"\u5168\u90E8":Fn[M])))),_.default.createElement("div",{className:"wg-filter-row"},_.default.createElement("span",null,"\u663E\u793A"),_.default.createElement("div",{className:"wg-chips"},["all","workspace","session"].map(M=>_.default.createElement("button",{key:M,className:g.kind===M?"active":"","aria-pressed":g.kind===M,onClick:()=>nt({kind:M})},M==="all"?"\u5168\u90E8":M==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD")),_.default.createElement("label",{className:"wg-check"},_.default.createElement("input",{type:"checkbox",checked:g.archived,onChange:M=>nt({archived:M.target.checked})}),"\u5F52\u6863"))),_.default.createElement(Il,{color:i.settings?.theme??tt,reduced:!!i.settings?.reducedMotion,onColor:M=>le({settings:{theme:M}}),onReduced:M=>le({settings:{reducedMotion:M}})}),_.default.createElement("div",{className:"wg-dock-foot"},_.default.createElement("label",null,"\u65F6\u95F4"," ",_.default.createElement("select",{"aria-label":"\u65F6\u95F4\u5206\u7C7B",value:g.recency??"all",onChange:M=>nt({recency:M.target.value})},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u65F6\u95F4"),Object.entries(Go).map(([M,W])=>_.default.createElement("option",{value:M,key:M},W)))),_.default.createElement("label",null,"\u9891\u7387"," ",_.default.createElement("select",{"aria-label":"\u9891\u7387\u5206\u7C7B",value:g.frequency??"all",onChange:M=>nt({frequency:M.target.value})},_.default.createElement("option",{value:"all"},"\u5168\u90E8\u9891\u7387"),Object.entries(Uo).map(([M,W])=>_.default.createElement("option",{value:M,key:M},W)))),_.default.createElement("span",{className:"wg-small-note"},"\u5E38\u7528\u6309\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\u8BA1\u6570\uFF1B30 \u5929\u5185 5 \u6B21\uFF0C\u95F4\u9694 30 \u5206\u949F\u3002\u5386\u53F2\u8BB0\u5F55\u4ECE\u672C\u7248\u672C\u5F00\u59CB\u7D2F\u8BA1\u3002"),_.default.createElement("span",null,fe.nodes.length," \u4E2A\u53EF\u89C1\u8282\u70B9",fe.hidden>0?" \xB7 "+fe.hidden+" \u4E2A\u4F1A\u8BDD\u672A\u5C55\u5F00":""),_.default.createElement("button",{onClick:()=>{sn(Xo)}},"\u6E05\u9664\u7B5B\u9009"),_.default.createElement("button",{onClick:()=>{w(new Set),E({}),sn(Jt)}},"\u6062\u590D\u9ED8\u8BA4\u89C6\u56FE")))),re&&_.default.createElement("aside",{className:"wg-details","aria-label":"\u8282\u70B9\u8BE6\u60C5"},_.default.createElement("div",{className:"wg-detail-heading"},_.default.createElement("span",null,re.data.kind==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD"),_.default.createElement("button",{"aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>v(void 0)},"\xD7")),_.default.createElement("h2",null,re.data.title),_.default.createElement("div",{className:"wg-status",style:{color:ri[re.data.status]}},"\u25CF ",Fn[re.data.status],re.data.archived?" \xB7 \u5DF2\u5F52\u6863":""),_.default.createElement("dl",null,re.data.kind==="session"&&_.default.createElement(_.default.Fragment,null,_.default.createElement("dt",null,"\u5206\u7C7B"),_.default.createElement("dd",null,re.data.recency&&Go[re.data.recency]," ","\xB7"," ",re.data.frequency&&Uo[re.data.frequency]),_.default.createElement("dt",null,"\u56FE\u8C31\u4E3B\u52A8\u6253\u5F00\uFF08\u8FD1 30 \u5929\uFF09"),_.default.createElement("dd",null,i.settings?.usage?.[re.data.entityId]?.visits.filter(M=>M>=Date.now()-30*864e5).length??"\u8BB0\u5F55\u79EF\u7D2F\u4E2D")),_.default.createElement("dt",null,"\u8DEF\u5F84"),_.default.createElement("dd",null,re.data.path||"\u672A\u8BB0\u5F55\u76EE\u5F55"),_.default.createElement("dt",null,"\u6807\u8BC6"),_.default.createElement("dd",null,re.data.entityId),re.data.updatedAt&&_.default.createElement(_.default.Fragment,null,_.default.createElement("dt",null,"\u6700\u8FD1\u66F4\u65B0"),_.default.createElement("dd",null,new Date(re.data.updatedAt).toLocaleString()))),re.data.kind==="session"&&_.default.createElement("button",{onClick:()=>{let M=c.current.settings?.pinned??[];le({settings:{pinned:M.includes(re.data.entityId)?M.filter(W=>W!==re.data.entityId):[...M,re.data.entityId]}})}},re.data.pinned?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876\u4F1A\u8BDD"),re.data.kind==="session"&&_.default.createElement(Ol,{key:"summary:"+re.id,value:i.settings?.manualSummaries?.[re.data.entityId]??"",onSave:M=>le({settings:{manualSummaries:{...c.current.settings?.manualSummaries,[re.data.entityId]:M}}})}),re.data.kind==="workspace"?_.default.createElement(xm,{key:re.id,node:re,actions:t,access:r,busy:u,perform:rn,open:()=>{an(re)},collapse:()=>w(M=>{let W=new Set(M);return W.has(re.data.entityId)?W.delete(re.data.entityId):W.add(re.data.entityId),W}),more:()=>E(M=>({...M,[re.data.entityId]:(M[re.data.entityId]??20)+20}))}):_.default.createElement(wm,{key:re.id,node:re,actions:t,access:r,busy:u,perform:rn,open:()=>{an(re)}})),_.default.createElement("div",{className:"wg-canvas-hint"},"\u62D6\u52A8\u67D4\u6027\u7275\u5F15 \xB7 Ctrl \u81EA\u7531\u62D6\u52A8 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53CC\u51FB\u6253\u5F00"),_.default.createElement("div",{className:"wg-save-status",role:"status"},p),P&&_.default.createElement("div",{className:"wg-undo"},"\u5DF2\u91CD\u6392\u5F53\u524D\u89C6\u56FE",_.default.createElement("button",{onClick:()=>{he.forceNextSync(),le({positions:P}),V(void 0)}},"\u64A4\u9500"),_.default.createElement("button",{onClick:()=>V(void 0),"aria-label":"\u5173\u95ED\u64A4\u9500\u63D0\u793A"},"\xD7"))))}function xm({node:e,actions:t,access:n,busy:o,perform:r,open:s,collapse:i,more:a}){let[c,l]=(0,_.useState)(!1),[d,u]=(0,_.useState)(e.data.title),f=n?.useCreate()??!0,p=n?.useWorkspace(e.data.entityId,"workspace/rename")??!0;return _.default.createElement("div",{className:"wg-detail-actions"},!e.data.virtual&&_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{className:"wg-primary",disabled:o||!f,onClick:s},"\u6253\u5F00\u5DE5\u4F5C\u533A \u2197"),_.default.createElement("button",{disabled:o||!f,onClick:()=>{r(()=>t.newSession(e.data.entityId))}},"\u65B0\u5EFA\u4F1A\u8BDD"),p&&_.default.createElement("button",{disabled:o,onClick:()=>l(!c)},"\u91CD\u547D\u540D\u5DE5\u4F5C\u533A")),c&&_.default.createElement("form",{onSubmit:h=>{h.preventDefault(),d.trim()&&r(async()=>{await t.renameWorkspace(e.data.entityId,d.trim()),l(!1)})}},_.default.createElement("input",{"aria-label":"\u5DE5\u4F5C\u533A\u65B0\u540D\u79F0",value:d,onChange:h=>u(h.target.value)}),_.default.createElement("button",{disabled:o||!d.trim()},"\u4FDD\u5B58\u540D\u79F0")),_.default.createElement("button",{onClick:i},e.data.collapsed?"\u5C55\u5F00\u4F1A\u8BDD":"\u6536\u8D77\u4F1A\u8BDD"),!e.data.collapsed&&_.default.createElement("button",{onClick:a},"\u518D\u663E\u793A 20 \u4E2A\u4F1A\u8BDD"))}function wm({node:e,actions:t,access:n,busy:o,perform:r,open:s}){let i=n?.useSession(e.data.entityId,"workspace/archiveSession")??!0,a=n?.useSession(e.data.entityId,"workspace/unarchiveSession")??!0;return _.default.createElement("div",{className:"wg-detail-actions"},e.data.archived?_.default.createElement("button",{className:"wg-primary",disabled:o||!a,onClick:()=>{r(()=>t.restore(e.data.entityId))}},"\u6062\u590D\u4F1A\u8BDD"):_.default.createElement(_.default.Fragment,null,_.default.createElement("button",{className:"wg-primary",disabled:o,onClick:s},"\u6253\u5F00\u4F1A\u8BDD \u2197"),_.default.createElement("button",{disabled:o||!i,onClick:()=>{r(()=>t.archive(e.data.entityId))}},"\u5F52\u6863\u4F1A\u8BDD")),_.default.createElement("p",{className:"wg-small-note"},"\u4F4D\u7F6E\u5728\u672C\u6B21\u8FD0\u884C\u4FDD\u7559\uFF0C\u91CD\u542F\u6062\u590D\u9ED8\u8BA4\u3002\u6D3B\u52A8\u4F1A\u8BDD\u4FDD\u7559\u663E\u793A\u3002\u62D6\u52A8\u4E0D\u4F1A\u6539\u53D8\u4F1A\u8BDD\u6240\u5C5E\u3002"))}function Hl(e,t,n){let o=e,r=t,s=n,i=Object.values(r?.byId??{}).filter(c=>(c.retainedBy?.mainView??0)>0).map(c=>c.id);return{currentSessionId:i[0],currentSessionIds:i,loading:o?.phase!=="ready"||r?.phase!=="ready",error:o?.error?.message,workspaces:(o?.items??[]).map(c=>({id:c.workspaceId,title:c.title,path:c.path,sessionIds:c.sessionIds})),archivedSessionIds:[...o?.archivedSessionIds??[]],sessions:[...new Set([...r?.ids??[],...i])].flatMap(c=>{let l=r?.byId[c];if(!l)return[];let d=s?.get(c);return[{id:c,title:l.title||l.displayTitle||"\u672A\u547D\u540D\u4F1A\u8BDD",cwd:l.cwd,parentId:l.parentId,updatedAt:l.updatedAt,running:r?.phase==="ready"?d?d.running:l.running:void 0,pending:!!d?.pendingInteraction,unread:d?.completionUnread,blank:l.blank,origin:l.origin}]})}}var Bl=`.wg-root {
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
  isolation: isolate;
  width: 144px;
  text-align: center;
  --bubble-color: #6aabff;
  user-select: none;
}
.wg-orb {
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
.wg-root .wg-bubble {
  --wg-glow-color: var(--bubble-color);
}
.wg-root .wg-bubble.is-current {
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
  opacity: 0.78;
  box-shadow:
    0 0 10px 2px color-mix(in srgb, var(--wg-glow-color) 48%, transparent),
    0 0 26px 7px color-mix(in srgb, var(--wg-glow-color) 22%, transparent);
}
.wg-root .wg-bubble.is-current .wg-orb::before {
  inset: -8px;
  box-shadow:
    0 0 12px 3px color-mix(in srgb, var(--wg-glow-color) 58%, transparent),
    0 0 30px 8px color-mix(in srgb, var(--wg-glow-color) 26%, transparent);
}
.wg-root .wg-bubble:is(.is-status-running, .is-status-waiting) .wg-orb::before {
  animation: wg-glow-breathe 3.6s ease-in-out infinite;
}
.wg-root .is-working .wg-orb {
  border: 3px dashed #ffdd85;
  box-shadow: 0 0 0 3px #ffdd8520;
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
    opacity: 0.58;
  }
  50% {
    opacity: 0.92;
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
  position: absolute;
  top: 12px;
  left: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: calc(100% - 48px);
  z-index: 4;
}
.wg-attention button[aria-pressed="true"] {
  border-color: #8bb7ff;
  background: #263e5d;
}
.wg-navigation {
  position: absolute;
  top: 64px;
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
`;var Vl=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Fl="workspace-graph",ii=e=>e;function km(e){let t=e.useWorkspaces(ii),n=e.useSessions(ii),o=e.useSessionStatus(ii),r=mt.default.useMemo(()=>Hl(t,n,o),[t,n,o]);return mt.default.createElement($l,{catalog:r,actions:e.actions,repository:e.repository,access:{useCreate:()=>e.useRemoteAccess("session/create"),useWorkspace:(s,i)=>e.useWorkspaceAccess(s,i),useSession:(s,i)=>e.useSessionAccess(s,i)}})}function _m({size:e=18}){return mt.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},mt.default.createElement("path",{d:"m7 8 5 7m0 0 7-7M7 8h12"}),mt.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),mt.default.createElement("circle",{cx:"19",cy:"6",r:"3"}),mt.default.createElement("circle",{cx:"12",cy:"18",r:"3"}))}var Sm=["slots","uiWorkspace","uiSession","workspaces","sessions"];function Em(e){let t;try{t=window.localStorage}catch{t={getItem(){throw new Error("Browser storage is unavailable")},setItem(){throw new Error("Browser storage is unavailable")}}}let n=new Qo(t,"dsh-workspace-graph:v1"),o={openSession:r=>e.uiWorkspace.openSession(r),openWorkspace:r=>e.uiWorkspace.openWorkspace(r),newSession:r=>e.uiWorkspace.startSession(r),archive:r=>e.uiWorkspace.archiveSession(r),restore:r=>e.uiWorkspace.unarchiveSession(r),renameWorkspace:async(r,s)=>{await e.workspaces.rename(r,s)}};e.effect(()=>{let r=document.createElement("style");return r.dataset.plugin="dsh-workspace-graph",r.textContent="@scope (.wg-root) { "+Vl+" }"+Bl,document.head.append(r),()=>r.remove()}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Fl,inject:()=>({actions:o,repository:n})},km)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Fl,order:85,label:"\u5DE5\u4F5C\u533A\u56FE\u8C31"},_m))}
;return module.exports;}});