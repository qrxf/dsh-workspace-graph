/* dsh-workspace-graph | MIT | React Flow (MIT) */
window.__ModuleLoader__.load({id:"dsh-workspace-graph",factory:function(require){var module={exports:{}};var exports=module.exports;"use strict";var Fl=Object.create;var ln=Object.defineProperty;var Wl=Object.getOwnPropertyDescriptor;var Xl=Object.getOwnPropertyNames;var Yl=Object.getPrototypeOf,Zl=Object.prototype.hasOwnProperty;var un=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},ql=(e,t)=>{for(var n in t)ln(e,n,{get:t[n],enumerable:!0})},Er=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Xl(t))!Zl.call(e,r)&&r!==n&&ln(e,r,{get:()=>t[r],enumerable:!(o=Wl(t,r))||o.enumerable});return e};var dn=(e,t,n)=>(n=e!=null?Fl(Yl(e)):{},Er(t||!e||!e.__esModule?ln(n,"default",{value:e,enumerable:!0}):n,e)),Gl=e=>Er(ln({},"__esModule",{value:!0}),e);var la=un(ca=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mt=require("react");function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xf=typeof Object.is=="function"?Object.is:Wf,Yf=Mt.useState,Zf=Mt.useEffect,qf=Mt.useLayoutEffect,Gf=Mt.useDebugValue;function Kf(e,t){var n=t(),o=Yf({inst:{value:n,getSnapshot:t}}),r=o[0].inst,i=o[1];return qf(function(){r.value=n,r.getSnapshot=t,or(r)&&i({inst:r})},[e,n,t]),Zf(function(){return or(r)&&i({inst:r}),e(function(){or(r)&&i({inst:r})})},[e]),Gf(n),n}function or(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xf(e,n)}catch{return!0}}function Uf(e,t){return t()}var Qf=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Uf:Kf;ca.useSyncExternalStore=Mt.useSyncExternalStore!==void 0?Mt.useSyncExternalStore:Qf});var da=un((Ab,ua)=>{"use strict";ua.exports=la()});var pa=un(fa=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=require("react"),jf=da();function Jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ep=typeof Object.is=="function"?Object.is:Jf,tp=jf.useSyncExternalStore,np=oo.useRef,op=oo.useEffect,rp=oo.useMemo,ip=oo.useDebugValue;fa.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var i=np(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=rp(function(){function c(p){if(!l){if(l=!0,u=p,p=o(p),r!==void 0&&s.hasValue){var h=s.value;if(r(h,p))return f=h}return f=p}if(h=f,ep(u,p))return h;var m=o(p);return r!==void 0&&r(h,m)?(u=p,h):(u=p,f=m)}var l=!1,u,f,d=n===void 0?null:n;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,n,o,r]);var a=tp(e,i[0],i[1]);return op(function(){s.hasValue=!0,s.value=a},[a]),ip(a),a}});var ga=un((Tb,ha)=>{"use strict";ha.exports=pa()});var Hg={};ql(Hg,{apply:()=>$g,inject:()=>Lg});module.exports=Gl(Hg);var qe=dn(require("react"),1);var M=dn(require("react"),1);var z=require("react/jsx-runtime"),D=require("react");function se(e){if(typeof e=="string"||typeof e=="number")return""+e;let t="";if(Array.isArray(e))for(let n=0,o;n<e.length;n++)(o=se(e[n]))!==""&&(t+=(t&&" ")+o);else for(let n in e)e[n]&&(t+=(t&&" ")+n);return t}var Kl={value:()=>{}};function Cr(){for(var e=0,t=arguments.length,n={},o;e<t;++e){if(!(o=arguments[e]+"")||o in n||/[\s.]/.test(o))throw new Error("illegal type: "+o);n[o]=[]}return new fn(n)}function fn(e){this._=e}function Ul(e,t){return e.trim().split(/^|\s+/).map(function(n){var o="",r=n.indexOf(".");if(r>=0&&(o=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:o}})}fn.prototype=Cr.prototype={constructor:fn,on:function(e,t){var n=this._,o=Ul(e+"",n),r,i=-1,s=o.length;if(arguments.length<2){for(;++i<s;)if((r=(e=o[i]).type)&&(r=Ql(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=o[i]).type)n[r]=Nr(n[r],e.name,t);else if(t==null)for(r in n)n[r]=Nr(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new fn(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),o=0,r,i;o<r;++o)n[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],o=0,r=i.length;o<r;++o)i[o].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)}};function Ql(e,t){for(var n=0,o=e.length,r;n<o;++n)if((r=e[n]).name===t)return r.value}function Nr(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=Kl,e=e.slice(0,o).concat(e.slice(o+1));break}return n!=null&&e.push({name:t,value:n}),e}var Qe=Cr;var pn="http://www.w3.org/1999/xhtml",mo={svg:"http://www.w3.org/2000/svg",xhtml:pn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function De(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),mo.hasOwnProperty(t)?{space:mo[t],local:e}:e}function jl(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===pn&&t.documentElement.namespaceURI===pn?t.createElement(e):t.createElementNS(n,e)}}function Jl(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function hn(e){var t=De(e);return(t.local?Jl:jl)(t)}function eu(){}function je(e){return e==null?eu:function(){return this.querySelector(e)}}function Mr(e){typeof e!="function"&&(e=je(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=new Array(s),c,l,u=0;u<s;++u)(c=i[u])&&(l=e.call(c,c.__data__,u,i))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new ae(o,this._parents)}function xo(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function tu(){return[]}function At(e){return e==null?tu:function(){return this.querySelectorAll(e)}}function nu(e){return function(){return xo(e.apply(this,arguments))}}function Ir(e){typeof e=="function"?e=nu(e):e=At(e);for(var t=this._groups,n=t.length,o=[],r=[],i=0;i<n;++i)for(var s=t[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&(o.push(e.call(c,c.__data__,l,s)),r.push(c));return new ae(o,r)}function Dt(e){return function(){return this.matches(e)}}function gn(e){return function(t){return t.matches(e)}}var ou=Array.prototype.find;function ru(e){return function(){return ou.call(this.children,e)}}function iu(){return this.firstElementChild}function Pr(e){return this.select(e==null?iu:ru(typeof e=="function"?e:gn(e)))}var su=Array.prototype.filter;function au(){return Array.from(this.children)}function cu(e){return function(){return su.call(this.children,e)}}function zr(e){return this.selectAll(e==null?au:cu(typeof e=="function"?e:gn(e)))}function Ar(e){typeof e!="function"&&(e=Dt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new ae(o,this._parents)}function mn(e){return new Array(e.length)}function Dr(){return new ae(this._enter||this._groups.map(mn),this._parents)}function Tt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Tt.prototype={constructor:Tt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Tr(e){return function(){return e}}function lu(e,t,n,o,r,i){for(var s=0,a,c=t.length,l=i.length;s<l;++s)(a=t[s])?(a.__data__=i[s],o[s]=a):n[s]=new Tt(e,i[s]);for(;s<c;++s)(a=t[s])&&(r[s]=a)}function uu(e,t,n,o,r,i,s){var a,c,l=new Map,u=t.length,f=i.length,d=new Array(u),p;for(a=0;a<u;++a)(c=t[a])&&(d[a]=p=s.call(c,c.__data__,a,t)+"",l.has(p)?r[a]=c:l.set(p,c));for(a=0;a<f;++a)p=s.call(e,i[a],a,i)+"",(c=l.get(p))?(o[a]=c,c.__data__=i[a],l.delete(p)):n[a]=new Tt(e,i[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(d[a])===c&&(r[a]=c)}function du(e){return e.__data__}function Or(e,t){if(!arguments.length)return Array.from(this,du);var n=t?uu:lu,o=this._parents,r=this._groups;typeof e!="function"&&(e=Tr(e));for(var i=r.length,s=new Array(i),a=new Array(i),c=new Array(i),l=0;l<i;++l){var u=o[l],f=r[l],d=f.length,p=fu(e.call(u,u&&u.__data__,l,o)),h=p.length,m=a[l]=new Array(h),w=s[l]=new Array(h),x=c[l]=new Array(d);n(u,f,m,w,x,p,t);for(var v=0,g=0,b,E;v<h;++v)if(b=m[v]){for(v>=g&&(g=v+1);!(E=w[g])&&++g<h;);b._next=E||null}}return s=new ae(s,o),s._enter=a,s._exit=c,s}function fu(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Lr(){return new ae(this._exit||this._groups.map(mn),this._parents)}function $r(e,t,n){var o=this.enter(),r=this,i=this.exit();return typeof e=="function"?(o=e(o),o&&(o=o.selection())):o=o.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),o&&r?o.merge(r).order():r}function Hr(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,i=o.length,s=Math.min(r,i),a=new Array(r),c=0;c<s;++c)for(var l=n[c],u=o[c],f=l.length,d=a[c]=new Array(f),p,h=0;h<f;++h)(p=l[h]||u[h])&&(d[h]=p);for(;c<r;++c)a[c]=n[c];return new ae(a,this._parents)}function Br(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o=e[t],r=o.length-1,i=o[r],s;--r>=0;)(s=o[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function Vr(e){e||(e=pu);function t(f,d){return f&&d?e(f.__data__,d.__data__):!f-!d}for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s=n[i],a=s.length,c=r[i]=new Array(a),l,u=0;u<a;++u)(l=s[u])&&(c[u]=l);c.sort(t)}return new ae(r,this._parents).order()}function pu(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Rr(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Fr(){return Array.from(this)}function Wr(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null}function Xr(){let e=0;for(let t of this)++e;return e}function Yr(){return!this.node()}function Zr(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r=t[n],i=0,s=r.length,a;i<s;++i)(a=r[i])&&e.call(a,a.__data__,i,r);return this}function hu(e){return function(){this.removeAttribute(e)}}function gu(e){return function(){this.removeAttributeNS(e.space,e.local)}}function mu(e,t){return function(){this.setAttribute(e,t)}}function xu(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function yu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function wu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function qr(e,t){var n=De(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((t==null?n.local?gu:hu:typeof t=="function"?n.local?wu:yu:n.local?xu:mu)(n,t))}function xn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function bu(e){return function(){this.style.removeProperty(e)}}function vu(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _u(e,t,n){return function(){var o=t.apply(this,arguments);o==null?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Gr(e,t,n){return arguments.length>1?this.each((t==null?bu:typeof t=="function"?_u:vu)(e,t,n??"")):He(this.node(),e)}function He(e,t){return e.style.getPropertyValue(t)||xn(e).getComputedStyle(e,null).getPropertyValue(t)}function ku(e){return function(){delete this[e]}}function Su(e,t){return function(){this[e]=t}}function Eu(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Kr(e,t){return arguments.length>1?this.each((t==null?ku:typeof t=="function"?Eu:Su)(e,t)):this.node()[e]}function Ur(e){return e.trim().split(/^|\s+/)}function yo(e){return e.classList||new Qr(e)}function Qr(e){this._node=e,this._names=Ur(e.getAttribute("class")||"")}Qr.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function jr(e,t){for(var n=yo(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function Jr(e,t){for(var n=yo(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function Nu(e){return function(){jr(this,e)}}function Cu(e){return function(){Jr(this,e)}}function Mu(e,t){return function(){(t.apply(this,arguments)?jr:Jr)(this,e)}}function ei(e,t){var n=Ur(e+"");if(arguments.length<2){for(var o=yo(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?Mu:t?Nu:Cu)(n,t))}function Iu(){this.textContent=""}function Pu(e){return function(){this.textContent=e}}function zu(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function ti(e){return arguments.length?this.each(e==null?Iu:(typeof e=="function"?zu:Pu)(e)):this.node().textContent}function Au(){this.innerHTML=""}function Du(e){return function(){this.innerHTML=e}}function Tu(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function ni(e){return arguments.length?this.each(e==null?Au:(typeof e=="function"?Tu:Du)(e)):this.node().innerHTML}function Ou(){this.nextSibling&&this.parentNode.appendChild(this)}function oi(){return this.each(Ou)}function Lu(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ri(){return this.each(Lu)}function ii(e){var t=typeof e=="function"?e:hn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function $u(){return null}function si(e,t){var n=typeof e=="function"?e:hn(e),o=t==null?$u:typeof t=="function"?t:je(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})}function Hu(){var e=this.parentNode;e&&e.removeChild(this)}function ai(){return this.each(Hu)}function Bu(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Vu(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ci(e){return this.select(e?Vu:Bu)}function li(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Ru(e){return function(t){e.call(this,t,this.__data__)}}function Fu(e){return e.trim().split(/^|\s+/).map(function(t){var n="",o=t.indexOf(".");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{type:t,name:n}})}function Wu(e){return function(){var t=this.__on;if(t){for(var n=0,o=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++o]=i;++o?t.length=o:delete this.__on}}}function Xu(e,t,n){return function(){var o=this.__on,r,i=Ru(t);if(o){for(var s=0,a=o.length;s<a;++s)if((r=o[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},o?o.push(r):this.__on=[r]}}function ui(e,t,n){var o=Fu(e+""),r,i=o.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<i;++r)if((s=o[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=t?Xu:Wu,r=0;r<i;++r)this.each(a(o[r],t,n));return this}function di(e,t,n){var o=xn(e),r=o.CustomEvent;typeof r=="function"?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function Yu(e,t){return function(){return di(this,e,t)}}function Zu(e,t){return function(){return di(this,e,t.apply(this,arguments))}}function fi(e,t){return this.each((typeof t=="function"?Zu:Yu)(e,t))}function*pi(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,i=o.length,s;r<i;++r)(s=o[r])&&(yield s)}var wo=[null];function ae(e,t){this._groups=e,this._parents=t}function hi(){return new ae([[document.documentElement]],wo)}function qu(){return this}ae.prototype=hi.prototype={constructor:ae,select:Mr,selectAll:Ir,selectChild:Pr,selectChildren:zr,filter:Ar,data:Or,enter:Dr,exit:Lr,join:$r,merge:Hr,selection:qu,order:Br,sort:Vr,call:Rr,nodes:Fr,node:Wr,size:Xr,empty:Yr,each:Zr,attr:qr,style:Gr,property:Kr,classed:ei,text:ti,html:ni,raise:oi,lower:ri,append:ii,insert:si,remove:ai,clone:ci,datum:li,on:ui,dispatch:fi,[Symbol.iterator]:pi};var Te=hi;function le(e){return typeof e=="string"?new ae([[document.querySelector(e)]],[document.documentElement]):new ae([[e]],wo)}function gi(e){let t;for(;t=e.sourceEvent;)e=t;return e}function fe(e,t){if(e=gi(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,o=o.matrixTransform(t.getScreenCTM().inverse()),[o.x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}var mi={passive:!1},Je={capture:!0,passive:!1};function yn(e){e.stopImmediatePropagation()}function Be(e){e.preventDefault(),e.stopImmediatePropagation()}function Ot(e){var t=e.document.documentElement,n=le(e).on("dragstart.drag",Be,Je);"onselectstart"in t?n.on("selectstart.drag",Be,Je):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Lt(e,t){var n=e.document.documentElement,o=le(e).on("dragstart.drag",null);t&&(o.on("click.drag",Be,Je),setTimeout(function(){o.on("click.drag",null)},0)),"onselectstart"in n?o.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var $t=e=>()=>e;function Ht(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:i,x:s,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:i,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Ht.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Gu(e){return!e.ctrlKey&&!e.button}function Ku(){return this.parentNode}function Uu(e,t){return t??{x:e.x,y:e.y}}function Qu(){return navigator.maxTouchPoints||"ontouchstart"in this}function wn(){var e=Gu,t=Ku,n=Uu,o=Qu,r={},i=Qe("start","drag","end"),s=0,a,c,l,u,f=0;function d(b){b.on("mousedown.drag",p).filter(o).on("touchstart.drag",w).on("touchmove.drag",x,mi).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(b,E){if(!(u||!e.call(this,b,E))){var S=g(this,t.call(this,b,E),b,E,"mouse");S&&(le(b.view).on("mousemove.drag",h,Je).on("mouseup.drag",m,Je),Ot(b.view),yn(b),l=!1,a=b.clientX,c=b.clientY,S("start",b))}}function h(b){if(Be(b),!l){var E=b.clientX-a,S=b.clientY-c;l=E*E+S*S>f}r.mouse("drag",b)}function m(b){le(b.view).on("mousemove.drag mouseup.drag",null),Lt(b.view,l),Be(b),r.mouse("end",b)}function w(b,E){if(e.call(this,b,E)){var S=b.changedTouches,N=t.call(this,b,E),P=S.length,I,F;for(I=0;I<P;++I)(F=g(this,N,b,E,S[I].identifier,S[I]))&&(yn(b),F("start",b,S[I]))}}function x(b){var E=b.changedTouches,S=E.length,N,P;for(N=0;N<S;++N)(P=r[E[N].identifier])&&(Be(b),P("drag",b,E[N]))}function v(b){var E=b.changedTouches,S=E.length,N,P;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),N=0;N<S;++N)(P=r[E[N].identifier])&&(yn(b),P("end",b,E[N]))}function g(b,E,S,N,P,I){var F=i.copy(),L=fe(I||S,E),B,$,y;if((y=n.call(b,new Ht("beforestart",{sourceEvent:S,target:d,identifier:P,active:s,x:L[0],y:L[1],dx:0,dy:0,dispatch:F}),N))!=null)return B=y.x-L[0]||0,$=y.y-L[1]||0,function _(k,C,T){var A=L,R;switch(k){case"start":r[P]=_,R=s++;break;case"end":delete r[P],--s;case"drag":L=fe(T||C,E),R=s;break}F.call(k,b,new Ht(k,{sourceEvent:C,subject:y,target:d,identifier:P,active:R,x:L[0]+B,y:L[1]+$,dx:L[0]-A[0],dy:L[1]-A[1],dispatch:F}),N)}}return d.filter=function(b){return arguments.length?(e=typeof b=="function"?b:$t(!!b),d):e},d.container=function(b){return arguments.length?(t=typeof b=="function"?b:$t(b),d):t},d.subject=function(b){return arguments.length?(n=typeof b=="function"?b:$t(b),d):n},d.touchable=function(b){return arguments.length?(o=typeof b=="function"?b:$t(!!b),d):o},d.on=function(){var b=i.on.apply(i,arguments);return b===i?d:b},d.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,d):Math.sqrt(f)},d}function bn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function bo(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function Rt(){}var Bt=.7,kn=1/Bt,ht="\\s*([+-]?\\d+)\\s*",Vt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ne="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ju=/^#([0-9a-f]{3,8})$/,Ju=new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`),ed=new RegExp(`^rgb\\(${Ne},${Ne},${Ne}\\)$`),td=new RegExp(`^rgba\\(${ht},${ht},${ht},${Vt}\\)$`),nd=new RegExp(`^rgba\\(${Ne},${Ne},${Ne},${Vt}\\)$`),od=new RegExp(`^hsl\\(${Vt},${Ne},${Ne}\\)$`),rd=new RegExp(`^hsla\\(${Vt},${Ne},${Ne},${Vt}\\)$`),xi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};bn(Rt,_e,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:yi,formatHex:yi,formatHex8:id,formatHsl:sd,formatRgb:wi,toString:wi});function yi(){return this.rgb().formatHex()}function id(){return this.rgb().formatHex8()}function sd(){return Ei(this).formatHsl()}function wi(){return this.rgb().formatRgb()}function _e(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=ju.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?bi(t):n===3?new ge(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?vn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?vn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ju.exec(e))?new ge(t[1],t[2],t[3],1):(t=ed.exec(e))?new ge(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=td.exec(e))?vn(t[1],t[2],t[3],t[4]):(t=nd.exec(e))?vn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=od.exec(e))?ki(t[1],t[2]/100,t[3]/100,1):(t=rd.exec(e))?ki(t[1],t[2]/100,t[3]/100,t[4]):xi.hasOwnProperty(e)?bi(xi[e]):e==="transparent"?new ge(NaN,NaN,NaN,0):null}function bi(e){return new ge(e>>16&255,e>>8&255,e&255,1)}function vn(e,t,n,o){return o<=0&&(e=t=n=NaN),new ge(e,t,n,o)}function ad(e){return e instanceof Rt||(e=_e(e)),e?(e=e.rgb(),new ge(e.r,e.g,e.b,e.opacity)):new ge}function gt(e,t,n,o){return arguments.length===1?ad(e):new ge(e,t,n,o??1)}function ge(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}bn(ge,gt,bo(Rt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new ge(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bt:Math.pow(Bt,e),new ge(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ge(tt(this.r),tt(this.g),tt(this.b),Sn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vi,formatHex:vi,formatHex8:cd,formatRgb:_i,toString:_i}));function vi(){return`#${et(this.r)}${et(this.g)}${et(this.b)}`}function cd(){return`#${et(this.r)}${et(this.g)}${et(this.b)}${et((isNaN(this.opacity)?1:this.opacity)*255)}`}function _i(){let e=Sn(this.opacity);return`${e===1?"rgb(":"rgba("}${tt(this.r)}, ${tt(this.g)}, ${tt(this.b)}${e===1?")":`, ${e})`}`}function Sn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function tt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function et(e){return e=tt(e),(e<16?"0":"")+e.toString(16)}function ki(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new ve(e,t,n,o)}function Ei(e){if(e instanceof ve)return new ve(e.h,e.s,e.l,e.opacity);if(e instanceof Rt||(e=_e(e)),!e)return new ve;if(e instanceof ve)return e;e=e.rgb();var t=e.r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),i=Math.max(t,n,o),s=NaN,a=i-r,c=(i+r)/2;return a?(t===i?s=(n-o)/a+(n<o)*6:n===i?s=(o-t)/a+2:s=(t-n)/a+4,a/=c<.5?i+r:2-i-r,s*=60):a=c>0&&c<1?0:s,new ve(s,a,c,e.opacity)}function Ni(e,t,n,o){return arguments.length===1?Ei(e):new ve(e,t,n,o??1)}function ve(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}bn(ve,Ni,bo(Rt,{brighter(e){return e=e==null?kn:Math.pow(kn,e),new ve(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bt:Math.pow(Bt,e),new ve(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new ge(vo(e>=240?e-240:e+120,r,o),vo(e,r,o),vo(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new ve(Si(this.h),_n(this.s),_n(this.l),Sn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Sn(this.opacity);return`${e===1?"hsl(":"hsla("}${Si(this.h)}, ${_n(this.s)*100}%, ${_n(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Si(e){return e=(e||0)%360,e<0?e+360:e}function _n(e){return Math.max(0,Math.min(1,e||0))}function vo(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function _o(e,t,n,o,r){var i=e*e,s=i*e;return((1-3*e+3*i-s)*t+(4-6*i+3*s)*n+(1+3*e+3*i-3*s)*o+s*r)/6}function Ci(e){var t=e.length-1;return function(n){var o=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),r=e[o],i=e[o+1],s=o>0?e[o-1]:2*r-i,a=o<t-1?e[o+2]:2*i-r;return _o((n-o/t)*t,s,r,i,a)}}function Mi(e){var t=e.length;return function(n){var o=Math.floor(((n%=1)<0?++n:n)*t),r=e[(o+t-1)%t],i=e[o%t],s=e[(o+1)%t],a=e[(o+2)%t];return _o((n-o/t)*t,r,i,s,a)}}var Ft=e=>()=>e;function ld(e,t){return function(n){return e+n*t}}function ud(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}function Ii(e){return(e=+e)==1?En:function(t,n){return n-t?ud(t,n,e):Ft(isNaN(t)?n:t)}}function En(e,t){var n=t-e;return n?ld(e,n):Ft(isNaN(e)?t:e)}var nt=(function e(t){var n=Ii(t);function o(r,i){var s=n((r=gt(r)).r,(i=gt(i)).r),a=n(r.g,i.g),c=n(r.b,i.b),l=En(r.opacity,i.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return o.gamma=e,o})(1);function Pi(e){return function(t){var n=t.length,o=new Array(n),r=new Array(n),i=new Array(n),s,a;for(s=0;s<n;++s)a=gt(t[s]),o[s]=a.r||0,r[s]=a.g||0,i[s]=a.b||0;return o=e(o),r=e(r),i=e(i),a.opacity=1,function(c){return a.r=o(c),a.g=r(c),a.b=i(c),a+""}}}var dd=Pi(Ci),fd=Pi(Mi);function zi(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,o=t.slice(),r;return function(i){for(r=0;r<n;++r)o[r]=e[r]*(1-i)+t[r]*i;return o}}function Ai(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Di(e,t){var n=t?t.length:0,o=e?Math.min(n,e.length):0,r=new Array(o),i=new Array(n),s;for(s=0;s<o;++s)r[s]=Oe(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(a){for(s=0;s<o;++s)i[s]=r[s](a);return i}}function Ti(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function pe(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Oi(e,t){var n={},o={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=Oe(e[r],t[r]):o[r]=t[r];return function(i){for(r in n)o[r]=n[r](i);return o}}var So=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ko=new RegExp(So.source,"g");function pd(e){return function(){return e}}function hd(e){return function(t){return e(t)+""}}function Wt(e,t){var n=So.lastIndex=ko.lastIndex=0,o,r,i,s=-1,a=[],c=[];for(e=e+"",t=t+"";(o=So.exec(e))&&(r=ko.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),a[s]?a[s]+=i:a[++s]=i),(o=o[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,c.push({i:s,x:pe(o,r)})),n=ko.lastIndex;return n<t.length&&(i=t.slice(n),a[s]?a[s]+=i:a[++s]=i),a.length<2?c[0]?hd(c[0].x):pd(t):(t=c.length,function(l){for(var u=0,f;u<t;++u)a[(f=c[u]).i]=f.x(l);return a.join("")})}function Oe(e,t){var n=typeof t,o;return t==null||n==="boolean"?Ft(t):(n==="number"?pe:n==="string"?(o=_e(t))?(t=o,nt):Wt:t instanceof _e?nt:t instanceof Date?Ti:Ai(t)?zi:Array.isArray(t)?Di:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Oi:pe)(e,t)}var Li=180/Math.PI,Nn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Eo(e,t,n,o,r,i){var s,a,c;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(c=e*n+t*o)&&(n-=e*c,o-=t*c),(a=Math.sqrt(n*n+o*o))&&(n/=a,o/=a,c/=a),e*o<t*n&&(e=-e,t=-t,c=-c,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*Li,skewX:Math.atan(c)*Li,scaleX:s,scaleY:a}}var Cn;function $i(e){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Nn:Eo(t.a,t.b,t.c,t.d,t.e,t.f)}function Hi(e){return e==null?Nn:(Cn||(Cn=document.createElementNS("http://www.w3.org/2000/svg","g")),Cn.setAttribute("transform",e),(e=Cn.transform.baseVal.consolidate())?(e=e.matrix,Eo(e.a,e.b,e.c,e.d,e.e,e.f)):Nn)}function Bi(e,t,n,o){function r(l){return l.length?l.pop()+" ":""}function i(l,u,f,d,p,h){if(l!==f||u!==d){var m=p.push("translate(",null,t,null,n);h.push({i:m-4,x:pe(l,f)},{i:m-2,x:pe(u,d)})}else(f||d)&&p.push("translate("+f+t+d+n)}function s(l,u,f,d){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),d.push({i:f.push(r(f)+"rotate(",null,o)-2,x:pe(l,u)})):u&&f.push(r(f)+"rotate("+u+o)}function a(l,u,f,d){l!==u?d.push({i:f.push(r(f)+"skewX(",null,o)-2,x:pe(l,u)}):u&&f.push(r(f)+"skewX("+u+o)}function c(l,u,f,d,p,h){if(l!==f||u!==d){var m=p.push(r(p)+"scale(",null,",",null,")");h.push({i:m-4,x:pe(l,f)},{i:m-2,x:pe(u,d)})}else(f!==1||d!==1)&&p.push(r(p)+"scale("+f+","+d+")")}return function(l,u){var f=[],d=[];return l=e(l),u=e(u),i(l.translateX,l.translateY,u.translateX,u.translateY,f,d),s(l.rotate,u.rotate,f,d),a(l.skewX,u.skewX,f,d),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,f,d),l=u=null,function(p){for(var h=-1,m=d.length,w;++h<m;)f[(w=d[h]).i]=w.x(p);return f.join("")}}}var No=Bi($i,"px, ","px)","deg)"),Co=Bi(Hi,", ",")",")");var gd=1e-12;function Vi(e){return((e=Math.exp(e))+1/e)/2}function md(e){return((e=Math.exp(e))-1/e)/2}function xd(e){return((e=Math.exp(2*e))-1)/(e+1)}var ot=(function e(t,n,o){function r(i,s){var a=i[0],c=i[1],l=i[2],u=s[0],f=s[1],d=s[2],p=u-a,h=f-c,m=p*p+h*h,w,x;if(m<gd)x=Math.log(d/l)/t,w=function(N){return[a+N*p,c+N*h,l*Math.exp(t*N*x)]};else{var v=Math.sqrt(m),g=(d*d-l*l+o*m)/(2*l*n*v),b=(d*d-l*l-o*m)/(2*d*n*v),E=Math.log(Math.sqrt(g*g+1)-g),S=Math.log(Math.sqrt(b*b+1)-b);x=(S-E)/t,w=function(N){var P=N*x,I=Vi(E),F=l/(n*v)*(I*xd(t*P+E)-md(E));return[a+F*p,c+F*h,l*I/Vi(t*P+E)]}}return w.duration=x*1e3*t/Math.SQRT2,w}return r.rho=function(i){var s=Math.max(.001,+i),a=s*s,c=a*a;return e(s,a,c)},r})(Math.SQRT2,2,4);var mt=0,Yt=0,Xt=0,Fi=1e3,Mn,Zt,In=0,rt=0,Pn=0,qt=typeof performance=="object"&&performance.now?performance:Date,Wi=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Kt(){return rt||(Wi(yd),rt=qt.now()+Pn)}function yd(){rt=0}function Gt(){this._call=this._time=this._next=null}Gt.prototype=zn.prototype={constructor:Gt,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Kt():+n)+(t==null?0:+t),!this._next&&Zt!==this&&(Zt?Zt._next=this:Mn=this,Zt=this),this._call=e,this._time=n,Mo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Mo())}};function zn(e,t,n){var o=new Gt;return o.restart(e,t,n),o}function Xi(){Kt(),++mt;for(var e=Mn,t;e;)(t=rt-e._time)>=0&&e._call.call(void 0,t),e=e._next;--mt}function Ri(){rt=(In=qt.now())+Pn,mt=Yt=0;try{Xi()}finally{mt=0,bd(),rt=0}}function wd(){var e=qt.now(),t=e-In;t>Fi&&(Pn-=t,In=e)}function bd(){for(var e,t=Mn,n,o=1/0;t;)t._call?(o>t._time&&(o=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Mn=n);Zt=e,Mo(o)}function Mo(e){if(!mt){Yt&&(Yt=clearTimeout(Yt));var t=e-rt;t>24?(e<1/0&&(Yt=setTimeout(Ri,e-qt.now()-Pn)),Xt&&(Xt=clearInterval(Xt))):(Xt||(In=qt.now(),Xt=setInterval(wd,Fi)),mt=1,Wi(Ri))}}function An(e,t,n){var o=new Gt;return t=t==null?0:+t,o.restart(r=>{o.stop(),e(r+t)},t,n),o}var vd=Qe("start","end","cancel","interrupt"),_d=[],qi=0,Yi=1,Tn=2,Dn=3,Zi=4,On=5,Ut=6;function Ve(e,t,n,o,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;kd(e,n,{name:t,index:o,group:r,on:vd,tween:_d,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:qi})}function Qt(e,t){var n=ce(e,t);if(n.state>qi)throw new Error("too late; already scheduled");return n}function de(e,t){var n=ce(e,t);if(n.state>Dn)throw new Error("too late; already running");return n}function ce(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function kd(e,t,n){var o=e.__transition,r;o[t]=n,n.timer=zn(i,0,n.time);function i(l){n.state=Yi,n.timer.restart(s,n.delay,n.time),n.delay<=l&&s(l-n.delay)}function s(l){var u,f,d,p;if(n.state!==Yi)return c();for(u in o)if(p=o[u],p.name===n.name){if(p.state===Dn)return An(s);p.state===Zi?(p.state=Ut,p.timer.stop(),p.on.call("interrupt",e,e.__data__,p.index,p.group),delete o[u]):+u<t&&(p.state=Ut,p.timer.stop(),p.on.call("cancel",e,e.__data__,p.index,p.group),delete o[u])}if(An(function(){n.state===Dn&&(n.state=Zi,n.timer.restart(a,n.delay,n.time),a(l))}),n.state=Tn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Tn){for(n.state=Dn,r=new Array(d=n.tween.length),u=0,f=-1;u<d;++u)(p=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++f]=p);r.length=f+1}}function a(l){for(var u=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(c),n.state=On,1),f=-1,d=r.length;++f<d;)r[f].call(e,u);n.state===On&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Ut,n.timer.stop(),delete o[t];for(var l in o)return;delete e.__transition}}function it(e,t){var n=e.__transition,o,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((o=n[s]).name!==t){i=!1;continue}r=o.state>Tn&&o.state<On,o.state=Ut,o.timer.stop(),o.on.call(r?"interrupt":"cancel",e,e.__data__,o.index,o.group),delete n[s]}i&&delete e.__transition}}function Gi(e){return this.each(function(){it(this,e)})}function Sd(e,t){var n,o;return function(){var r=de(this,e),i=r.tween;if(i!==n){o=n=i;for(var s=0,a=o.length;s<a;++s)if(o[s].name===t){o=o.slice(),o.splice(s,1);break}}r.tween=o}}function Ed(e,t,n){var o,r;if(typeof n!="function")throw new Error;return function(){var i=de(this,e),s=i.tween;if(s!==o){r=(o=s).slice();for(var a={name:t,value:n},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}i.tween=r}}function Ki(e,t){var n=this._id;if(e+="",arguments.length<2){for(var o=ce(this.node(),n).tween,r=0,i=o.length,s;r<i;++r)if((s=o[r]).name===e)return s.value;return null}return this.each((t==null?Sd:Ed)(n,e,t))}function xt(e,t,n){var o=e._id;return e.each(function(){var r=de(this,o);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ce(r,o).value[t]}}function Ln(e,t){var n;return(typeof t=="number"?pe:t instanceof _e?nt:(n=_e(t))?(t=n,nt):Wt)(e,t)}function Nd(e){return function(){this.removeAttribute(e)}}function Cd(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Md(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===o?i:i=t(o=s,n)}}function Id(e,t,n){var o,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===o?i:i=t(o=s,n)}}function Pd(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function zd(e,t,n){var o,r,i;return function(){var s,a=n(this),c;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),c=a+"",s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a)))}}function Ui(e,t){var n=De(e),o=n==="transform"?Co:Ln;return this.attrTween(e,typeof t=="function"?(n.local?zd:Pd)(n,o,xt(this,"attr."+e,t)):t==null?(n.local?Cd:Nd)(n):(n.local?Id:Md)(n,o,t))}function Ad(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Dd(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Td(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Dd(e,i)),n}return r._value=t,r}function Od(e,t){var n,o;function r(){var i=t.apply(this,arguments);return i!==o&&(n=(o=i)&&Ad(e,i)),n}return r._value=t,r}function Qi(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var o=De(e);return this.tween(n,(o.local?Td:Od)(o,t))}function Ld(e,t){return function(){Qt(this,e).delay=+t.apply(this,arguments)}}function $d(e,t){return t=+t,function(){Qt(this,e).delay=t}}function ji(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ld:$d)(t,e)):ce(this.node(),t).delay}function Hd(e,t){return function(){de(this,e).duration=+t.apply(this,arguments)}}function Bd(e,t){return t=+t,function(){de(this,e).duration=t}}function Ji(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Hd:Bd)(t,e)):ce(this.node(),t).duration}function Vd(e,t){if(typeof t!="function")throw new Error;return function(){de(this,e).ease=t}}function es(e){var t=this._id;return arguments.length?this.each(Vd(t,e)):ce(this.node(),t).ease}function Rd(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;de(this,e).ease=n}}function ts(e){if(typeof e!="function")throw new Error;return this.each(Rd(this._id,e))}function ns(e){typeof e!="function"&&(e=Dt(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,a=o[r]=[],c,l=0;l<s;++l)(c=i[l])&&e.call(c,c.__data__,l,i)&&a.push(c);return new he(o,this._parents,this._name,this._id)}function os(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,o=t.length,r=n.length,i=Math.min(o,r),s=new Array(o),a=0;a<i;++a)for(var c=t[a],l=n[a],u=c.length,f=s[a]=new Array(u),d,p=0;p<u;++p)(d=c[p]||l[p])&&(f[p]=d);for(;a<o;++a)s[a]=t[a];return new he(s,this._parents,this._name,this._id)}function Fd(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Wd(e,t,n){var o,r,i=Fd(t)?Qt:de;return function(){var s=i(this,e),a=s.on;a!==o&&(r=(o=a).copy()).on(t,n),s.on=r}}function rs(e,t){var n=this._id;return arguments.length<2?ce(this.node(),n).on.on(e):this.each(Wd(n,e,t))}function Xd(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function is(){return this.on("end.remove",Xd(this._id))}function ss(e){var t=this._name,n=this._id;typeof e!="function"&&(e=je(e));for(var o=this._groups,r=o.length,i=new Array(r),s=0;s<r;++s)for(var a=o[s],c=a.length,l=i[s]=new Array(c),u,f,d=0;d<c;++d)(u=a[d])&&(f=e.call(u,u.__data__,d,a))&&("__data__"in u&&(f.__data__=u.__data__),l[d]=f,Ve(l[d],t,n,d,l,ce(u,n)));return new he(i,this._parents,t,n)}function as(e){var t=this._name,n=this._id;typeof e!="function"&&(e=At(e));for(var o=this._groups,r=o.length,i=[],s=[],a=0;a<r;++a)for(var c=o[a],l=c.length,u,f=0;f<l;++f)if(u=c[f]){for(var d=e.call(u,u.__data__,f,c),p,h=ce(u,n),m=0,w=d.length;m<w;++m)(p=d[m])&&Ve(p,t,n,m,d,h);i.push(d),s.push(u)}return new he(i,s,t,n)}var Yd=Te.prototype.constructor;function cs(){return new Yd(this._groups,this._parents)}function Zd(e,t){var n,o,r;return function(){var i=He(this,e),s=(this.style.removeProperty(e),He(this,e));return i===s?null:i===n&&s===o?r:r=t(n=i,o=s)}}function ls(e){return function(){this.style.removeProperty(e)}}function qd(e,t,n){var o,r=n+"",i;return function(){var s=He(this,e);return s===r?null:s===o?i:i=t(o=s,n)}}function Gd(e,t,n){var o,r,i;return function(){var s=He(this,e),a=n(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(e),He(this,e))),s===c?null:s===o&&c===r?i:(r=c,i=t(o=s,a))}}function Kd(e,t){var n,o,r,i="style."+t,s="end."+i,a;return function(){var c=de(this,e),l=c.on,u=c.value[i]==null?a||(a=ls(t)):void 0;(l!==n||r!==u)&&(o=(n=l).copy()).on(s,r=u),c.on=o}}function us(e,t,n){var o=(e+="")=="transform"?No:Ln;return t==null?this.styleTween(e,Zd(e,o)).on("end.style."+e,ls(e)):typeof t=="function"?this.styleTween(e,Gd(e,o,xt(this,"style."+e,t))).each(Kd(this._id,e)):this.styleTween(e,qd(e,o,t),n).on("end.style."+e,null)}function Ud(e,t,n){return function(o){this.style.setProperty(e,t.call(this,o),n)}}function Qd(e,t,n){var o,r;function i(){var s=t.apply(this,arguments);return s!==r&&(o=(r=s)&&Ud(e,s,n)),o}return i._value=t,i}function ds(e,t,n){var o="style."+(e+="");if(arguments.length<2)return(o=this.tween(o))&&o._value;if(t==null)return this.tween(o,null);if(typeof t!="function")throw new Error;return this.tween(o,Qd(e,t,n??""))}function jd(e){return function(){this.textContent=e}}function Jd(e){return function(){var t=e(this);this.textContent=t??""}}function fs(e){return this.tween("text",typeof e=="function"?Jd(xt(this,"text",e)):jd(e==null?"":e+""))}function ef(e){return function(t){this.textContent=e.call(this,t)}}function tf(e){var t,n;function o(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&ef(r)),t}return o._value=e,o}function ps(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,tf(e))}function hs(){for(var e=this._name,t=this._id,n=$n(),o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)if(c=s[l]){var u=ce(c,t);Ve(c,e,n,l,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new he(o,this._parents,e,n)}function gs(){var e,t,n=this,o=n._id,r=n.size();return new Promise(function(i,s){var a={value:s},c={value:function(){--r===0&&i()}};n.each(function(){var l=de(this,o),u=l.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&i()})}var nf=0;function he(e,t,n,o){this._groups=e,this._parents=t,this._name=n,this._id=o}function ms(e){return Te().transition(e)}function $n(){return++nf}var Le=Te.prototype;he.prototype=ms.prototype={constructor:he,select:ss,selectAll:as,selectChild:Le.selectChild,selectChildren:Le.selectChildren,filter:ns,merge:os,selection:cs,transition:hs,call:Le.call,nodes:Le.nodes,node:Le.node,size:Le.size,empty:Le.empty,each:Le.each,on:rs,attr:Ui,attrTween:Qi,style:us,styleTween:ds,text:fs,textTween:ps,remove:is,tween:Ki,delay:ji,duration:Ji,ease:es,easeVarying:ts,end:gs,[Symbol.iterator]:Le[Symbol.iterator]};function Hn(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var of={time:null,delay:0,duration:250,ease:Hn};function rf(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function xs(e){var t,n;e instanceof he?(t=e._id,e=e._name):(t=$n(),(n=of).time=Kt(),e=e==null?null:e+"");for(var o=this._groups,r=o.length,i=0;i<r;++i)for(var s=o[i],a=s.length,c,l=0;l<a;++l)(c=s[l])&&Ve(c,e,t,l,s,n||rf(c,t));return new he(o,this._parents,e,t)}Te.prototype.interrupt=Gi;Te.prototype.transition=xs;var jt=e=>()=>e;function Io(e,{sourceEvent:t,target:n,transform:o,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:o,enumerable:!0,configurable:!0},_:{value:r}})}function ke(e,t,n){this.k=e,this.x=t,this.y=n}ke.prototype={constructor:ke,scale:function(e){return e===1?this:new ke(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new ke(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var st=new ke(1,0,0);Jt.prototype=ke.prototype;function Jt(e){for(;!e.__zoom;)if(!(e=e.parentNode))return st;return e.__zoom}function Bn(e){e.stopImmediatePropagation()}function yt(e){e.preventDefault(),e.stopImmediatePropagation()}function sf(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function af(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function ys(){return this.__zoom||st}function cf(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function lf(){return navigator.maxTouchPoints||"ontouchstart"in this}function uf(e,t,n){var o=e.invertX(t[0][0])-n[0][0],r=e.invertX(t[1][0])-n[1][0],i=e.invertY(t[0][1])-n[0][1],s=e.invertY(t[1][1])-n[1][1];return e.translate(r>o?(o+r)/2:Math.min(0,o)||Math.max(0,r),s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s))}function Vn(){var e=sf,t=af,n=uf,o=cf,r=lf,i=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,c=ot,l=Qe("start","zoom","end"),u,f,d,p=500,h=150,m=0,w=10;function x(y){y.property("__zoom",ys).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",F).filter(r).on("touchstart.zoom",L).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",$).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(y,_,k,C){var T=y.selection?y.selection():y;T.property("__zoom",ys),y!==T?E(y,_,k,C):T.interrupt().each(function(){S(this,arguments).event(C).start().zoom(null,typeof _=="function"?_.apply(this,arguments):_).end()})},x.scaleBy=function(y,_,k,C){x.scaleTo(y,function(){var T=this.__zoom.k,A=typeof _=="function"?_.apply(this,arguments):_;return T*A},k,C)},x.scaleTo=function(y,_,k,C){x.transform(y,function(){var T=t.apply(this,arguments),A=this.__zoom,R=k==null?b(T):typeof k=="function"?k.apply(this,arguments):k,H=A.invert(R),X=typeof _=="function"?_.apply(this,arguments):_;return n(g(v(A,X),R,H),T,s)},k,C)},x.translateBy=function(y,_,k,C){x.transform(y,function(){return n(this.__zoom.translate(typeof _=="function"?_.apply(this,arguments):_,typeof k=="function"?k.apply(this,arguments):k),t.apply(this,arguments),s)},null,C)},x.translateTo=function(y,_,k,C,T){x.transform(y,function(){var A=t.apply(this,arguments),R=this.__zoom,H=C==null?b(A):typeof C=="function"?C.apply(this,arguments):C;return n(st.translate(H[0],H[1]).scale(R.k).translate(typeof _=="function"?-_.apply(this,arguments):-_,typeof k=="function"?-k.apply(this,arguments):-k),A,s)},C,T)};function v(y,_){return _=Math.max(i[0],Math.min(i[1],_)),_===y.k?y:new ke(_,y.x,y.y)}function g(y,_,k){var C=_[0]-k[0]*y.k,T=_[1]-k[1]*y.k;return C===y.x&&T===y.y?y:new ke(y.k,C,T)}function b(y){return[(+y[0][0]+ +y[1][0])/2,(+y[0][1]+ +y[1][1])/2]}function E(y,_,k,C){y.on("start.zoom",function(){S(this,arguments).event(C).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(C).end()}).tween("zoom",function(){var T=this,A=arguments,R=S(T,A).event(C),H=t.apply(T,A),X=k==null?b(H):typeof k=="function"?k.apply(T,A):k,G=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),q=T.__zoom,Q=typeof _=="function"?_.apply(T,A):_,ee=c(q.invert(X).concat(G/q.k),Q.invert(X).concat(G/Q.k));return function(Z){if(Z===1)Z=Q;else{var V=ee(Z),K=G/V[2];Z=new ke(K,X[0]-V[0]*K,X[1]-V[1]*K)}R.zoom(null,Z)}})}function S(y,_,k){return!k&&y.__zooming||new N(y,_)}function N(y,_){this.that=y,this.args=_,this.active=0,this.sourceEvent=null,this.extent=t.apply(y,_),this.taps=0}N.prototype={event:function(y){return y&&(this.sourceEvent=y),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(y,_){return this.mouse&&y!=="mouse"&&(this.mouse[1]=_.invert(this.mouse[0])),this.touch0&&y!=="touch"&&(this.touch0[1]=_.invert(this.touch0[0])),this.touch1&&y!=="touch"&&(this.touch1[1]=_.invert(this.touch1[0])),this.that.__zoom=_,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(y){var _=le(this.that).datum();l.call(y,this.that,new Io(y,{sourceEvent:this.sourceEvent,target:x,type:y,transform:this.that.__zoom,dispatch:l}),_)}};function P(y,..._){if(!e.apply(this,arguments))return;var k=S(this,_).event(y),C=this.__zoom,T=Math.max(i[0],Math.min(i[1],C.k*Math.pow(2,o.apply(this,arguments)))),A=fe(y);if(k.wheel)(k.mouse[0][0]!==A[0]||k.mouse[0][1]!==A[1])&&(k.mouse[1]=C.invert(k.mouse[0]=A)),clearTimeout(k.wheel);else{if(C.k===T)return;k.mouse=[A,C.invert(A)],it(this),k.start()}yt(y),k.wheel=setTimeout(R,h),k.zoom("mouse",n(g(v(C,T),k.mouse[0],k.mouse[1]),k.extent,s));function R(){k.wheel=null,k.end()}}function I(y,..._){if(d||!e.apply(this,arguments))return;var k=y.currentTarget,C=S(this,_,!0).event(y),T=le(y.view).on("mousemove.zoom",X,!0).on("mouseup.zoom",G,!0),A=fe(y,k),R=y.clientX,H=y.clientY;Ot(y.view),Bn(y),C.mouse=[A,this.__zoom.invert(A)],it(this),C.start();function X(q){if(yt(q),!C.moved){var Q=q.clientX-R,ee=q.clientY-H;C.moved=Q*Q+ee*ee>m}C.event(q).zoom("mouse",n(g(C.that.__zoom,C.mouse[0]=fe(q,k),C.mouse[1]),C.extent,s))}function G(q){T.on("mousemove.zoom mouseup.zoom",null),Lt(q.view,C.moved),yt(q),C.event(q).end()}}function F(y,..._){if(e.apply(this,arguments)){var k=this.__zoom,C=fe(y.changedTouches?y.changedTouches[0]:y,this),T=k.invert(C),A=k.k*(y.shiftKey?.5:2),R=n(g(v(k,A),C,T),t.apply(this,_),s);yt(y),a>0?le(this).transition().duration(a).call(E,R,C,y):le(this).call(x.transform,R,C,y)}}function L(y,..._){if(e.apply(this,arguments)){var k=y.touches,C=k.length,T=S(this,_,y.changedTouches.length===C).event(y),A,R,H,X;for(Bn(y),R=0;R<C;++R)H=k[R],X=fe(H,this),X=[X,this.__zoom.invert(X),H.identifier],T.touch0?!T.touch1&&T.touch0[2]!==X[2]&&(T.touch1=X,T.taps=0):(T.touch0=X,A=!0,T.taps=1+!!u);u&&(u=clearTimeout(u)),A&&(T.taps<2&&(f=X[0],u=setTimeout(function(){u=null},p)),it(this),T.start())}}function B(y,..._){if(this.__zooming){var k=S(this,_).event(y),C=y.changedTouches,T=C.length,A,R,H,X;for(yt(y),A=0;A<T;++A)R=C[A],H=fe(R,this),k.touch0&&k.touch0[2]===R.identifier?k.touch0[0]=H:k.touch1&&k.touch1[2]===R.identifier&&(k.touch1[0]=H);if(R=k.that.__zoom,k.touch1){var G=k.touch0[0],q=k.touch0[1],Q=k.touch1[0],ee=k.touch1[1],Z=(Z=Q[0]-G[0])*Z+(Z=Q[1]-G[1])*Z,V=(V=ee[0]-q[0])*V+(V=ee[1]-q[1])*V;R=v(R,Math.sqrt(Z/V)),H=[(G[0]+Q[0])/2,(G[1]+Q[1])/2],X=[(q[0]+ee[0])/2,(q[1]+ee[1])/2]}else if(k.touch0)H=k.touch0[0],X=k.touch0[1];else return;k.zoom("touch",n(g(R,H,X),k.extent,s))}}function $(y,..._){if(this.__zooming){var k=S(this,_).event(y),C=y.changedTouches,T=C.length,A,R;for(Bn(y),d&&clearTimeout(d),d=setTimeout(function(){d=null},p),A=0;A<T;++A)R=C[A],k.touch0&&k.touch0[2]===R.identifier?delete k.touch0:k.touch1&&k.touch1[2]===R.identifier&&delete k.touch1;if(k.touch1&&!k.touch0&&(k.touch0=k.touch1,delete k.touch1),k.touch0)k.touch0[1]=this.__zoom.invert(k.touch0[0]);else if(k.end(),k.taps===2&&(R=fe(R,this),Math.hypot(f[0]-R[0],f[1]-R[1])<w)){var H=le(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return x.wheelDelta=function(y){return arguments.length?(o=typeof y=="function"?y:jt(+y),x):o},x.filter=function(y){return arguments.length?(e=typeof y=="function"?y:jt(!!y),x):e},x.touchable=function(y){return arguments.length?(r=typeof y=="function"?y:jt(!!y),x):r},x.extent=function(y){return arguments.length?(t=typeof y=="function"?y:jt([[+y[0][0],+y[0][1]],[+y[1][0],+y[1][1]]]),x):t},x.scaleExtent=function(y){return arguments.length?(i[0]=+y[0],i[1]=+y[1],x):[i[0],i[1]]},x.translateExtent=function(y){return arguments.length?(s[0][0]=+y[0][0],s[1][0]=+y[1][0],s[0][1]=+y[0][1],s[1][1]=+y[1][1],x):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},x.constrain=function(y){return arguments.length?(n=y,x):n},x.duration=function(y){return arguments.length?(a=+y,x):a},x.interpolate=function(y){return arguments.length?(c=y,x):c},x.on=function(){var y=l.on.apply(l,arguments);return y===l?x:y},x.clickDistance=function(y){return arguments.length?(m=(y=+y)*y,x):Math.sqrt(m)},x.tapDistance=function(y){return arguments.length?(w=+y,x):w},x}var me={error001:(e="react")=>`Seems like you have not used ${e==="svelte"?"SvelteFlowProvider":"ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:o})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:o}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:e=>`Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},_t=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],To=["Enter"," ","Escape"],Oo={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"},Xe;(function(e){e.Strict="strict",e.Loose="loose"})(Xe||(Xe={}));var $e;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})($e||($e={}));var at;(function(e){e.Partial="partial",e.Full="full"})(at||(at={}));var Lo={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null},Ce;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Ce||(Ce={}));var bt;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(bt||(bt={}));var U;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(U||(U={}));var ws={[U.Left]:U.Right,[U.Right]:U.Left,[U.Top]:U.Bottom,[U.Bottom]:U.Top},$o=e=>!!e&&typeof e=="object"&&"id"in e&&"source"in e&&"target"in e,As=e=>!!e&&typeof e=="object"&&"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Ho=e=>!!e&&typeof e=="object"&&"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e);var tn=(e,t=[0,0])=>{let{width:n,height:o}=we(e),r=e.origin??t,i=n*r[0],s=o*r[1];return{x:e.position.x-i,y:e.position.y-s}},Bo=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};let n=!1,o=e.reduce((r,i)=>{let s=typeof i=="string",a=!t.nodeLookup&&!s?i:void 0;return t.nodeLookup&&(a=s?t.nodeLookup.get(i):Ho(i)?i:t.nodeLookup.get(i.id)),a?(n=!0,Zn(r,Wn(a,t.nodeOrigin))):r},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return n?qn(o):{x:0,y:0,width:0,height:0}},kt=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},o=!1;return e.forEach(r=>{(t.filter===void 0||t.filter(r))&&(n=Zn(n,Wn(r)),o=!0)}),o?qn(n):{x:0,y:0,width:0,height:0}},Xn=(e,t,[n,o,r]=[0,0,1],i=!1,s=!1)=>{let a=(t.x-n)/r,c=(t.y-o)/r,l=t.width/r,u=t.height/r,f=[];for(let d of e.values()){let{measured:p,selectable:h=!0,hidden:m=!1}=d;if(s&&!h||m)continue;let w=p.width??d.width??d.initialWidth??0,x=p.height??d.height??d.initialHeight??0,{x:v,y:g}=d.internals.positionAbsolute,b=$s(a,c,l,u,v,g,w,x),E=w*x,S=i&&b>0;(!d.internals.handleBounds||S||b>=E||d.dragging)&&f.push(d)}return f},Ds=(e,t)=>{let n=new Set;return e.forEach(o=>{n.add(o.id)}),t.filter(o=>n.has(o.source)||n.has(o.target))};function df(e,t){let n=new Map,o=t?.nodes?new Set(t.nodes.map(r=>r.id)):null;return e.forEach(r=>{let i;if(t?.includeHiddenNodes){let{width:s,height:a}=we(r);i=s>0&&a>0}else i=!!(r.measured.width&&r.measured.height&&!r.hidden);i&&(!o||o.has(r.id))&&n.set(r.id,r)}),n}async function Ts({nodes:e,width:t,height:n,panZoom:o,minZoom:r,maxZoom:i},s){if(e.size===0)return!0;let a=df(e,s),c=kt(a),l=on(c,t,n,s?.minZoom??r,s?.maxZoom??i,s?.padding??.1);return await o.setViewport(l,{duration:s?.duration,ease:s?.ease,interpolate:s?.interpolate}),!0}function Vo({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:o=[0,0],nodeExtent:r,onError:i}){let s=n.get(e),a=s.parentId?n.get(s.parentId):void 0,{x:c,y:l}=a?a.internals.positionAbsolute:{x:0,y:0},u=s.origin??o,f=s.extent||r;if(s.extent==="parent"&&!s.expandParent)if(!a)i?.("005",me.error005());else{let{width:p,height:h}=we(a);p&&h&&(f=[[c,l],[c+p,l+h]])}else a&&ut(s.extent)&&(f=[[s.extent[0][0]+c,s.extent[0][1]+l],[s.extent[1][0]+c,s.extent[1][1]+l]]);let d=ut(f)?ct(t,f,s.measured):t;return(s.measured.width===void 0||s.measured.height===void 0)&&i?.("015",me.error015()),{position:{x:d.x-c+(s.measured.width??0)*u[0],y:d.y-l+(s.measured.height??0)*u[1]},positionAbsolute:d}}async function Os({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:o,onBeforeDelete:r}){let i=new Set(e.map(d=>d.id)),s=[];for(let d of n){if(d.deletable===!1)continue;let p=i.has(d.id),h=!p&&d.parentId&&s.find(m=>m.id===d.parentId);(p||h)&&s.push(d)}let a=new Set(t.map(d=>d.id)),c=o.filter(d=>d.deletable!==!1),u=Ds(s,c);for(let d of c)a.has(d.id)&&!u.find(h=>h.id===d.id)&&u.push(d);if(!r)return{edges:u,nodes:s};let f=await r({nodes:s,edges:u});return typeof f=="boolean"?f?{edges:u,nodes:s}:{edges:[],nodes:[]}:f}var vt=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),ct=(e={x:0,y:0},t,n)=>({x:vt(e.x,t[0][0],t[1][0]-(n?.width??0)),y:vt(e.y,t[0][1],t[1][1]-(n?.height??0))});function Ls(e,t,n){let{width:o,height:r}=we(n),{x:i,y:s}=n.internals.positionAbsolute;return ct(e,[[i,s],[i+o,s+r]],t)}var bs=(e,t,n)=>e<t?vt(Math.abs(e-t),1,t)/t:e>n?-vt(Math.abs(e-n),1,t)/t:0,Yn=(e,t,n=15,o=40)=>{let r=bs(e.x,o,t.width-o)*n,i=bs(e.y,o,t.height-o)*n;return[r,i]},Zn=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Do=({x:e,y:t,width:n,height:o})=>({x:e,y:t,x2:e+n,y2:t+o}),qn=({x:e,y:t,x2:n,y2:o})=>({x:e,y:t,width:n-e,height:o-t}),St=(e,t=[0,0])=>{let{x:n,y:o}=Ho(e)?e.internals.positionAbsolute:tn(e,t);return{x:n,y:o,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},Wn=(e,t=[0,0])=>{let{x:n,y:o}=Ho(e)?e.internals.positionAbsolute:tn(e,t);return{x:n,y:o,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:o+(e.measured?.height??e.height??e.initialHeight??0)}},Ro=(e,t)=>qn(Zn(Do(e),Do(t))),$s=(e,t,n,o,r,i,s,a)=>{let c=Math.max(0,Math.min(e+n,r+s)-Math.max(e,r)),l=Math.max(0,Math.min(t+o,i+a)-Math.max(t,i));return Math.ceil(c*l)},nn=(e,t)=>$s(e.x,e.y,e.width,e.height,t.x,t.y,t.width,t.height),Fo=e=>xe(e.width)&&xe(e.height)&&xe(e.x)&&xe(e.y),xe=e=>!isNaN(e)&&isFinite(e),Wo=(e,t)=>(n,o)=>{},Et=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),Nt=({x:e,y:t},[n,o,r],i=!1,s=[1,1])=>{let a={x:(e-n)/r,y:(t-o)/r};return i?Et(a,s):a},lt=({x:e,y:t},[n,o,r])=>({x:e*r+n,y:t*r+o});function wt(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){let n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function ff(e,t,n){if(typeof e=="string"||typeof e=="number"){let o=wt(e,n),r=wt(e,t);return{top:o,right:r,bottom:o,left:r,x:r*2,y:o*2}}if(typeof e=="object"){let o=wt(e.top??e.y??0,n),r=wt(e.bottom??e.y??0,n),i=wt(e.left??e.x??0,t),s=wt(e.right??e.x??0,t);return{top:o,right:s,bottom:r,left:i,x:i+s,y:o+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function pf(e,t,n,o,r,i){let{x:s,y:a}=lt(e,[t,n,o]),{x:c,y:l}=lt({x:e.x+e.width,y:e.y+e.height},[t,n,o]),u=r-c,f=i-l;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(u),bottom:Math.floor(f)}}var on=(e,t,n,o,r,i)=>{let s=ff(i,t,n),a=(t-s.x)/e.width,c=(n-s.y)/e.height,l=Math.min(a,c),u=vt(l,o,r),f=e.x+e.width/2,d=e.y+e.height/2,p=t/2-f*u,h=n/2-d*u,m=pf(e,p,h,u,t,n),w={left:Math.min(m.left-s.left,0),top:Math.min(m.top-s.top,0),right:Math.min(m.right-s.right,0),bottom:Math.min(m.bottom-s.bottom,0)};return{x:p-w.left+w.right,y:h-w.top+w.bottom,zoom:u}},Ct=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function ut(e){return e!=null&&e!=="parent"}function we(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function Xo(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function Yo(e,t={width:0,height:0},n,o,r){let i={...e},s=o.get(n);if(s){let a=s.origin||r;i.x+=s.internals.positionAbsolute.x-(t.width??0)*a[0],i.y+=s.internals.positionAbsolute.y-(t.height??0)*a[1]}return i}function Zo(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Hs(){let e,t;return{promise:new Promise((o,r)=>{e=o,t=r}),resolve:e,reject:t}}function Bs(e){return{...Oo,...e||{}}}function qo(e){return e===null?null:e?"valid":"invalid"}function en(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:o,containerBounds:r}){let{x:i,y:s}=ye(e),a=Nt({x:i-(r?.left??0),y:s-(r?.top??0)},o),{x:c,y:l}=n?Et(a,t):a;return{xSnapped:c,ySnapped:l,...a}}var Gn=e=>({width:e.offsetWidth,height:e.offsetHeight}),Go=e=>e?.getRootNode?.()||window?.document,hf=["INPUT","SELECT","TEXTAREA"];function Ko(e){let t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:hf.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}var Uo=e=>"clientX"in e,ye=(e,t)=>{let n=Uo(e),o=n?e.clientX:e.touches?.[0].clientX,r=n?e.clientY:e.touches?.[0].clientY;return{x:o-(t?.left??0),y:r-(t?.top??0)}},vs=(e,t,n,o,r)=>{let i=t.querySelectorAll(`.${e}`);return!i||!i.length?null:Array.from(i).map(s=>{let a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/o,y:(a.top-n.top)/o,...Gn(s)}})};function Kn({sourceX:e,sourceY:t,targetX:n,targetY:o,sourceControlX:r,sourceControlY:i,targetControlX:s,targetControlY:a}){let c=e*.125+r*.375+s*.375+n*.125,l=t*.125+i*.375+a*.375+o*.125,u=Math.abs(c-e),f=Math.abs(l-t);return[c,l,u,f]}function Rn(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function _s({pos:e,x1:t,y1:n,x2:o,y2:r,c:i}){switch(e){case U.Left:return[t-Rn(t-o,i),n];case U.Right:return[t+Rn(o-t,i),n];case U.Top:return[t,n-Rn(n-r,i)];case U.Bottom:return[t,n+Rn(r-n,i)]}}function Un({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,curvature:s=.25}){let[a,c]=_s({pos:n,x1:e,y1:t,x2:o,y2:r,c:s}),[l,u]=_s({pos:i,x1:o,y1:r,x2:e,y2:t,c:s}),[f,d,p,h]=Kn({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:a,sourceControlY:c,targetControlX:l,targetControlY:u});return[`M${e},${t} C${a},${c} ${l},${u} ${o},${r}`,f,d,p,h]}function Qo({sourceX:e,sourceY:t,targetX:n,targetY:o}){let r=Math.abs(n-e)/2,i=n<e?n+r:n-r,s=Math.abs(o-t)/2,a=o<t?o+s:o-s;return[i,a,r,s]}function Vs({sourceNode:e,targetNode:t,selected:n=!1,zIndex:o=0,elevateOnSelect:r=!1,zIndexMode:i="basic"}){if(i==="manual")return o;let s=r&&n?o+1e3:o,a=Math.max(e.parentId||r&&e.selected?e.internals.z:0,t.parentId||r&&t.selected?t.internals.z:0);return s+a}function Rs({sourceNode:e,targetNode:t,width:n,height:o,transform:r}){let i=Zn(Wn(e),Wn(t));i.x===i.x2&&(i.x2+=1),i.y===i.y2&&(i.y2+=1);let s={x:-r[0]/r[2],y:-r[1]/r[2],width:n/r[2],height:o/r[2]};return nn(s,qn(i))>0}var gf=({source:e,sourceHandle:t,target:n,targetHandle:o})=>`xy-edge__${e}${t||""}-${n}${o||""}`,mf=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),Fs=(e,t,n={})=>{if(!e.source||!e.target)return n.onError?.("006",me.error006()),t;let o=n.getEdgeId||gf,r;return $o(e)?r={...e}:r={...e,id:o(e)},mf(r,t)?t:(r.sourceHandle===null&&delete r.sourceHandle,r.targetHandle===null&&delete r.targetHandle,t.concat(r))};function Qn({sourceX:e,sourceY:t,targetX:n,targetY:o}){let[r,i,s,a]=Qo({sourceX:e,sourceY:t,targetX:n,targetY:o});return[`M ${e},${t}L ${n},${o}`,r,i,s,a]}var ks={[U.Left]:{x:-1,y:0},[U.Right]:{x:1,y:0},[U.Top]:{x:0,y:-1},[U.Bottom]:{x:0,y:1}},xf=({source:e,sourcePosition:t=U.Bottom,target:n})=>t===U.Left||t===U.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Ss=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function yf({source:e,sourcePosition:t=U.Bottom,target:n,targetPosition:o=U.Top,center:r,offset:i,stepPosition:s}){let a=ks[t],c=ks[o],l={x:e.x+a.x*i,y:e.y+a.y*i},u={x:n.x+c.x*i,y:n.y+c.y*i},f=xf({source:l,sourcePosition:t,target:u}),d=f.x!==0?"x":"y",p=f[d],h=[],m,w,x={x:0,y:0},v={x:0,y:0},[,,g,b]=Qo({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(a[d]*c[d]===-1){d==="x"?(m=r.x??l.x+(u.x-l.x)*s,w=r.y??(l.y+u.y)/2):(m=r.x??(l.x+u.x)/2,w=r.y??l.y+(u.y-l.y)*s);let P=[{x:m,y:l.y},{x:m,y:u.y}],I=[{x:l.x,y:w},{x:u.x,y:w}];a[d]===p?h=d==="x"?P:I:h=d==="x"?I:P}else{let P=[{x:l.x,y:u.y}],I=[{x:u.x,y:l.y}];if(d==="x"?h=a.x===p?I:P:h=a.y===p?P:I,t===o){let y=Math.abs(e[d]-n[d]);if(y<=i){let _=Math.min(i-1,i-y);a[d]===p?x[d]=(l[d]>e[d]?-1:1)*_:v[d]=(u[d]>n[d]?-1:1)*_}}if(t!==o){let y=d==="x"?"y":"x",_=a[d]===c[y],k=l[y]>u[y],C=l[y]<u[y];(a[d]===1&&(!_&&k||_&&C)||a[d]!==1&&(!_&&C||_&&k))&&(h=d==="x"?P:I)}let F={x:l.x+x.x,y:l.y+x.y},L={x:u.x+v.x,y:u.y+v.y},B=Math.max(Math.abs(F.x-h[0].x),Math.abs(L.x-h[0].x)),$=Math.max(Math.abs(F.y-h[0].y),Math.abs(L.y-h[0].y));B>=$?(m=(F.x+L.x)/2,w=h[0].y):(m=h[0].x,w=(F.y+L.y)/2)}let E={x:l.x+x.x,y:l.y+x.y},S={x:u.x+v.x,y:u.y+v.y};return[[e,...E.x!==h[0].x||E.y!==h[0].y?[E]:[],...h,...S.x!==h[h.length-1].x||S.y!==h[h.length-1].y?[S]:[],n],m,w,g,b]}function wf(e,t,n,o){let r=Math.min(Ss(e,t)/2,Ss(t,n)/2,o),{x:i,y:s}=t;if(e.x===i&&i===n.x||e.y===s&&s===n.y)return`L${i} ${s}`;if(e.y===s){let l=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${i+r*l},${s}Q ${i},${s} ${i},${s+r*u}`}let a=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${i},${s+r*c}Q ${i},${s} ${i+r*a},${s}`}function rn({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top,borderRadius:s=5,centerX:a,centerY:c,offset:l=20,stepPosition:u=.5}){let[f,d,p,h,m]=yf({source:{x:e,y:t},sourcePosition:n,target:{x:o,y:r},targetPosition:i,center:{x:a,y:c},offset:l,stepPosition:u}),w=`M${f[0].x} ${f[0].y}`;for(let x=1;x<f.length-1;x++)w+=wf(f[x-1],f[x],f[x+1],s);return w+=`L${f[f.length-1].x} ${f[f.length-1].y}`,[w,d,p,h,m]}function Es(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Ws(e){let{sourceNode:t,targetNode:n}=e;if(!Es(t)||!Es(n))return null;let o=t.internals.handleBounds||Ns(t.handles),r=n.internals.handleBounds||Ns(n.handles),i=Cs(o?.source??[],e.sourceHandle),s=Cs(e.connectionMode===Xe.Strict?r?.target??[]:(r?.target??[]).concat(r?.source??[]),e.targetHandle);if(!i||!s)return e.onError?.("008",me.error008(i?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;let a=i?.position||U.Bottom,c=s?.position||U.Top,l=Ye(t,i,a),u=Ye(n,s,c);return{sourceX:l.x,sourceY:l.y,targetX:u.x,targetY:u.y,sourcePosition:a,targetPosition:c}}function Ns(e){if(!e)return null;let t=[],n=[];for(let o of e)o.width=o.width??1,o.height=o.height??1,o.type==="source"?t.push(o):o.type==="target"&&n.push(o);return{source:t,target:n}}function Ye(e,t,n=U.Left,o=!1){let r=(t?.x??0)+e.internals.positionAbsolute.x,i=(t?.y??0)+e.internals.positionAbsolute.y,{width:s,height:a}=t??we(e);if(o)return{x:r+s/2,y:i+a/2};switch(t?.position??n){case U.Top:return{x:r+s/2,y:i};case U.Right:return{x:r+s,y:i+a/2};case U.Bottom:return{x:r+s/2,y:i+a};case U.Left:return{x:r,y:i+a/2}}}function Cs(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function jn(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(o=>`${o}=${e[o]}`).join("&")}`:""}function Xs(e,{id:t,defaultColor:n,defaultMarkerStart:o,defaultMarkerEnd:r}){let i=new Set;return e.reduce((s,a)=>([a.markerStart||o,a.markerEnd||r].forEach(c=>{if(c&&typeof c=="object"){let l=jn(c,t);i.has(l)||(s.push({id:l,color:c.color||n,...c}),i.add(l))}}),s),[]).sort((s,a)=>s.id.localeCompare(a.id))}var Ys=1e3,bf=10,jo={nodeOrigin:[0,0],nodeExtent:_t,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},vf={...jo,checkEquality:!0};function Jo(e,t){let n={...e};for(let o in t)t[o]!==void 0&&(n[o]=t[o]);return n}function Zs(e,t,n){let o=Jo(jo,n);for(let r of e.values())if(r.parentId)tr(r,e,t,o);else{let i=tn(r,o.nodeOrigin),s=ut(r.extent)?r.extent:o.nodeExtent,a=ct(i,s,we(r));r.internals.positionAbsolute=a}}function _f(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;let n=[],o=[];for(let r of e.handles){let i={id:r.id,width:r.width??1,height:r.height??1,nodeId:e.id,x:r.x,y:r.y,position:r.position,type:r.type};r.type==="source"?n.push(i):r.type==="target"&&o.push(i)}return{source:n,target:o}}function er(e){return e==="manual"}function Jn(e,t,n,o={}){let r=Jo(vf,o),i={i:0},s=new Map(t),a=r?.elevateNodesOnSelect&&!er(r.zIndexMode)?Ys:0,c=e.length>0,l=!1;t.clear(),n.clear();for(let u of e){let f=s.get(u.id);if(r.checkEquality&&u===f?.internals.userNode)t.set(u.id,f);else{let d=tn(u,r.nodeOrigin),p=ut(u.extent)?u.extent:r.nodeExtent,h=ct(d,p,we(u));f={...r.defaults,...u,measured:{width:u.measured?.width,height:u.measured?.height},internals:{positionAbsolute:h,handleBounds:_f(u,f),z:qs(u,a,r.zIndexMode),userNode:u}},t.set(u.id,f)}(f.measured===void 0||f.measured.width===void 0||f.measured.height===void 0)&&!f.hidden&&(c=!1),u.parentId&&tr(f,t,n,o,i),l||=u.selected??!1}return{nodesInitialized:c,hasSelectedNodes:l}}function kf(e,t){if(!e.parentId)return;let n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function tr(e,t,n,o,r){let{elevateNodesOnSelect:i,nodeOrigin:s,nodeExtent:a,zIndexMode:c}=Jo(jo,o),l=e.parentId,u=t.get(l);if(!u){console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}kf(e,n),r&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++r.i,u.internals.z=u.internals.z+r.i*bf),r&&u.internals.rootParentIndex!==void 0&&(r.i=u.internals.rootParentIndex);let f=i&&!er(c)?Ys:0,{x:d,y:p,z:h}=Sf(e,u,s,a,f,c),{positionAbsolute:m}=e.internals,w=d!==m.x||p!==m.y;(w||h!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:d,y:p}:m,z:h}})}function qs(e,t,n){let o=xe(e.zIndex)?e.zIndex:0;return er(n)?o:o+(e.selected?t:0)}function Sf(e,t,n,o,r,i){let{x:s,y:a}=t.internals.positionAbsolute,c=we(e),l=tn(e,n),u=ut(e.extent)?ct(l,e.extent,c):l,f=ct({x:s+u.x,y:a+u.y},o,c);e.extent==="parent"&&(f=Ls(f,c,t));let d=qs(e,r,i),p=t.internals.z??0;return{x:f.x,y:f.y,z:p>=d?p+1:d}}function eo(e,t,n,o=[0,0]){let r=[],i=new Map;for(let s of e){let a=t.get(s.parentId);if(!a)continue;let c=i.get(s.parentId)?.expandedRect??St(a),l=Ro(c,s.rect);i.set(s.parentId,{expandedRect:l,parent:a})}return i.size>0&&i.forEach(({expandedRect:s,parent:a},c)=>{let l=a.internals.positionAbsolute,u=we(a),f=a.origin??o,d=s.x<l.x?Math.round(Math.abs(l.x-s.x)):0,p=s.y<l.y?Math.round(Math.abs(l.y-s.y)):0,h=Math.max(u.width,Math.round(s.width)),m=Math.max(u.height,Math.round(s.height)),w=(h-u.width)*f[0],x=(m-u.height)*f[1];(d>0||p>0||w||x)&&(r.push({id:c,type:"position",position:{x:a.position.x-d+w,y:a.position.y-p+x}}),n.get(c)?.forEach(v=>{e.some(g=>g.id===v.id)||r.push({id:v.id,type:"position",position:{x:v.position.x+d,y:v.position.y+p}})})),(u.width<s.width||u.height<s.height||d||p)&&r.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:h+(d?f[0]*d-w:0),height:m+(p?f[1]*p-x:0)}})}),r}function Gs(e,t,n,o,r,i,s){let a=o?.querySelector(".xyflow__viewport"),c=!1;if(!a)return{changes:[],updatedInternals:c};let l=[],u=window.getComputedStyle(a),{m22:f}=new window.DOMMatrixReadOnly(u.transform),d=[];for(let p of e.values()){let h=t.get(p.id);if(!h)continue;if(h.hidden){t.set(h.id,{...h,internals:{...h.internals,handleBounds:void 0}}),c=!0;continue}let m=Gn(p.nodeElement),w=h.measured.width!==m.width||h.measured.height!==m.height;if(!!(m.width&&m.height&&(w||!h.internals.handleBounds||p.force))){let v=p.nodeElement.getBoundingClientRect(),g=ut(h.extent)?h.extent:i,{positionAbsolute:b}=h.internals;if(h.parentId&&h.extent==="parent"){let S=t.get(h.parentId);S&&(b=Ls(b,m,S))}else g&&(b=ct(b,g,m));let E={...h,measured:m,internals:{...h.internals,positionAbsolute:b,handleBounds:{source:vs("source",p.nodeElement,v,f,h.id),target:vs("target",p.nodeElement,v,f,h.id)}}};t.set(h.id,E),h.parentId&&tr(E,t,n,{nodeOrigin:r,zIndexMode:s}),c=!0,w&&(l.push({id:h.id,type:"dimensions",dimensions:m}),h.expandParent&&h.parentId&&d.push({id:h.id,parentId:h.parentId,rect:St(E,r)}))}}if(d.length>0){let p=eo(d,t,n,r);l.push(...p)}return{changes:l,updatedInternals:c}}async function Ks({delta:e,panZoom:t,transform:n,translateExtent:o,width:r,height:i}){if(!t||!e.x&&!e.y)return!1;let s=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[r,i]],o);return!!s&&(s.x!==n[0]||s.y!==n[1]||s.k!==n[2])}function Ms(e,t,n,o,r,i){let s=r,a=o.get(s)||new Map;o.set(s,a.set(n,t)),s=`${r}-${e}`;let c=o.get(s)||new Map;if(o.set(s,c.set(n,t)),i){s=`${r}-${e}-${i}`;let l=o.get(s)||new Map;o.set(s,l.set(n,t))}}function nr(e,t,n){e.clear(),t.clear();for(let o of n){let{source:r,target:i,sourceHandle:s=null,targetHandle:a=null}=o,c={edgeId:o.id,source:r,target:i,sourceHandle:s,targetHandle:a},l=`${r}-${s}--${i}-${a}`,u=`${i}-${a}--${r}-${s}`;Ms("source",c,u,e,r,s),Ms("target",c,l,e,i,a),t.set(o.id,o)}}function Us(e,t){if(!e.parentId)return!1;let n=t.get(e.parentId);return n?n.selected?!0:Us(n,t):!1}function Is(e,t,n){let o=e;do{if(o?.matches?.(t))return!0;if(o===n)return!1;o=o?.parentElement}while(o);return!1}function Ef(e,t,n,o){let r=new Map;for(let[i,s]of e)if((s.selected||s.id===o)&&(!s.parentId||!Us(s,e))&&(s.draggable||t&&typeof s.draggable>"u")){let a=e.get(i);a&&r.set(i,{id:i,position:a.position||{x:0,y:0},distance:{x:n.x-a.internals.positionAbsolute.x,y:n.y-a.internals.positionAbsolute.y},extent:a.extent,parentId:a.parentId,origin:a.origin,expandParent:a.expandParent,internals:{positionAbsolute:a.internals.positionAbsolute||{x:0,y:0}},measured:{width:a.measured.width??0,height:a.measured.height??0}})}return r}function Po({nodeId:e,dragItems:t,nodeLookup:n,dragging:o=!0}){let r=[];for(let[s,a]of t){let c=n.get(s)?.internals.userNode;c&&r.push({...c,position:a.position,dragging:o})}if(!e)return[r[0],r];let i=n.get(e)?.internals.userNode;return[i?{...i,position:t.get(e)?.position||i.position,dragging:o}:r[0],r]}function Nf({dragItems:e,snapGrid:t,x:n,y:o}){let r=e.values().next().value;if(!r)return null;let i={x:n-r.distance.x,y:o-r.distance.y},s=Et(i,t);return{x:s.x-i.x,y:s.y-i.y}}function Qs({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:o,onDragStop:r}){let i={x:null,y:null},s=0,a=new Map,c=!1,l={x:0,y:0},u=null,f=!1,d=null,p=!1,h=!1,m=null;function w({noDragClassName:v,handleSelector:g,domNode:b,isSelectable:E,nodeId:S,nodeClickDistance:N=0}){d=le(b);function P({x:B,y:$}){let{nodeLookup:y,nodeExtent:_,snapGrid:k,snapToGrid:C,nodeOrigin:T,onNodeDrag:A,onSelectionDrag:R,onError:H,updateNodePositions:X}=t();i={x:B,y:$};let G=!1,q=a.size>1,Q=q&&_?Do(kt(a)):null,ee=q&&C?Nf({dragItems:a,snapGrid:k,x:B,y:$}):null;for(let[Z,V]of a){if(!y.has(Z))continue;let K={x:B-V.distance.x,y:$-V.distance.y};C&&(K=ee?{x:Math.round(K.x+ee.x),y:Math.round(K.y+ee.y)}:Et(K,k));let J=null;if(q&&_&&!V.extent&&Q){let{positionAbsolute:Y}=V.internals,j=Y.x-Q.x+_[0][0],te=Y.x+V.measured.width-Q.x2+_[1][0],oe=Y.y-Q.y+_[0][1],ue=Y.y+V.measured.height-Q.y2+_[1][1];J=[[j,oe],[te,ue]]}let{position:O,positionAbsolute:W}=Vo({nodeId:Z,nextPosition:K,nodeLookup:y,nodeExtent:J||_,nodeOrigin:T,onError:H});G=G||V.position.x!==O.x||V.position.y!==O.y,V.position=O,V.internals.positionAbsolute=W}if(h=h||G,!!G&&(X(a,!0),m&&(o||A||!S&&R))){let[Z,V]=Po({nodeId:S,dragItems:a,nodeLookup:y});o?.(m,a,Z,V),A?.(m,Z,V),S||R?.(m,V)}}async function I(){if(!u)return;let{transform:B,panBy:$,autoPanSpeed:y,autoPanOnNodeDrag:_}=t();if(!_){c=!1,cancelAnimationFrame(s);return}let[k,C]=Yn(l,u,y);(k!==0||C!==0)&&(i.x=(i.x??0)-k/B[2],i.y=(i.y??0)-C/B[2],await $({x:k,y:C})&&P(i)),s=requestAnimationFrame(I)}function F(B){let{nodeLookup:$,multiSelectionActive:y,nodesDraggable:_,transform:k,snapGrid:C,snapToGrid:T,selectNodesOnDrag:A,onNodeDragStart:R,onSelectionDragStart:H,unselectNodesAndEdges:X}=t();f=!0,(!A||!E)&&!y&&S&&($.get(S)?.selected||X()),E&&A&&S&&e?.(S);let G=en(B.sourceEvent,{transform:k,snapGrid:C,snapToGrid:T,containerBounds:u});if(i=G,a=Ef($,_,G,S),a.size>0&&(n||R||!S&&H)){let[q,Q]=Po({nodeId:S,dragItems:a,nodeLookup:$});n?.(B.sourceEvent,a,q,Q),R?.(B.sourceEvent,q,Q),S||H?.(B.sourceEvent,Q)}}let L=wn().clickDistance(N).on("start",B=>{let{domNode:$,nodeDragThreshold:y,transform:_,snapGrid:k,snapToGrid:C}=t();u=$?.getBoundingClientRect()||null,p=!1,h=!1,m=B.sourceEvent,y===0&&F(B),i=en(B.sourceEvent,{transform:_,snapGrid:k,snapToGrid:C,containerBounds:u}),l=ye(B.sourceEvent,u)}).on("drag",B=>{let{autoPanOnNodeDrag:$,transform:y,snapGrid:_,snapToGrid:k,nodeDragThreshold:C,nodeLookup:T}=t(),A=en(B.sourceEvent,{transform:y,snapGrid:_,snapToGrid:k,containerBounds:u});if(m=B.sourceEvent,(B.sourceEvent.type==="touchmove"&&B.sourceEvent.touches.length>1||S&&!T.has(S))&&(p=!0),!p){if(!c&&$&&f&&(c=!0,I()),!f){let R=ye(B.sourceEvent,u),H=R.x-l.x,X=R.y-l.y;Math.sqrt(H*H+X*X)>C&&F(B)}(i.x!==A.xSnapped||i.y!==A.ySnapped)&&a&&f&&(l=ye(B.sourceEvent,u),P(A))}}).on("end",B=>{if(!f||p){p&&a.size>0&&t().updateNodePositions(a,!1);return}if(c=!1,f=!1,cancelAnimationFrame(s),a.size>0){let{nodeLookup:$,updateNodePositions:y,onNodeDragStop:_,onSelectionDragStop:k}=t();if(h&&(y(a,!1),h=!1),r||_||!S&&k){let[C,T]=Po({nodeId:S,dragItems:a,nodeLookup:$,dragging:!1});r?.(B.sourceEvent,a,C,T),_?.(B.sourceEvent,C,T),S||k?.(B.sourceEvent,T)}}}).filter(B=>{let $=B.target;return!B.button&&(!v||!Is($,`.${v}`,b))&&(!g||Is($,g,b))});d.call(L)}function x(){d?.on(".drag",null)}return{update:w,destroy:x}}function Cf(e,t,n){let o=[],r={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(let i of t.values())nn(r,St(i))>0&&o.push(i);return o}var Mf=250;function If(e,t,n,o){let r=[],i=1/0,s=Cf(e,n,t+Mf);for(let a of s){let c=[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]];for(let l of c){if(o.nodeId===l.nodeId&&o.type===l.type&&o.id===l.id)continue;let{x:u,y:f}=Ye(a,l,l.position,!0),d=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(f-e.y,2));d>t||(d<i?(r=[{...l,x:u,y:f}],i=d):d===i&&r.push({...l,x:u,y:f}))}}if(!r.length)return null;if(r.length>1){let a=o.type==="source"?"target":"source";return r.find(c=>c.type===a)??r[0]}return r[0]}function js(e,t,n,o,r,i=!1){let s=o.get(e);if(!s)return null;let a=r==="strict"?s.internals.handleBounds?.[t]:[...s.internals.handleBounds?.source??[],...s.internals.handleBounds?.target??[]],c=(n?a?.find(l=>l.id===n):a?.[0])??null;return c&&i?{...c,...Ye(s,c,c.position,!0)}:c}function Js(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function Pf(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}var ea=()=>!0;function zf(e,{connectionMode:t,connectionRadius:n,handleId:o,nodeId:r,edgeUpdaterType:i,isTarget:s,domNode:a,nodeLookup:c,lib:l,autoPanOnConnect:u,flowId:f,panBy:d,cancelConnection:p,onConnectStart:h,onConnect:m,onConnectEnd:w,isValidConnection:x=ea,onReconnectEnd:v,updateConnection:g,getTransform:b,getFromHandle:E,autoPanSpeed:S,dragThreshold:N=1,handleDomNode:P}){let I=Go(e.target),F=0,L,{x:B,y:$}=ye(e),y=Js(i,P),_=a?.getBoundingClientRect(),k=!1;if(!_||!y)return;let C=js(r,y,o,c,t);if(!C)return;let T=ye(e,_),A=!1,R=null,H=!1,X=null;function G(){if(!u||!_)return;let[O,W]=Yn(T,_,S);d({x:O,y:W}),F=requestAnimationFrame(G)}let q={...C,nodeId:r,type:y,position:C.position},Q=c.get(r),Z={inProgress:!0,isValid:null,from:Ye(Q,q,U.Left,!0),fromHandle:q,fromPosition:q.position,fromNode:Q,to:T,toHandle:null,toPosition:ws[q.position],toNode:null,pointer:T};function V(){k=!0,g(Z),h?.(e,{nodeId:r,handleId:o,handleType:y})}N===0&&V();function K(O){if(!k){let{x:ue,y:Ie}=ye(O),Se=ue-B,Ee=Ie-$;if(!(Se*Se+Ee*Ee>N*N))return;V()}if(!E()||!q){J(O);return}let W=b();T=ye(O,_),L=If(Nt(T,W,!1,[1,1]),n,c,q),A||(G(),A=!0);let Y=ta(O,{handle:L,connectionMode:t,fromNodeId:r,fromHandleId:o,fromType:s?"target":"source",isValidConnection:x,doc:I,lib:l,flowId:f,nodeLookup:c});X=Y.handleDomNode,R=Y.connection,H=Pf(!!L,Y.isValid);let j=c.get(r),te=j?Ye(j,q,U.Left,!0):Z.from,oe={...Z,from:te,isValid:H,to:Y.toHandle&&H?lt({x:Y.toHandle.x,y:Y.toHandle.y},W):T,toHandle:Y.toHandle,toPosition:H&&Y.toHandle?Y.toHandle.position:ws[q.position],toNode:Y.toHandle?c.get(Y.toHandle.nodeId):null,pointer:T};g(oe),Z=oe}function J(O){if(!("touches"in O&&O.touches.length>0)){if(k){(L||X)&&R&&H&&m?.(R);let{inProgress:W,...Y}=Z,j={...Y,toPosition:Z.toHandle?Z.toPosition:null};w?.(O,j),i&&v?.(O,j)}p(),cancelAnimationFrame(F),A=!1,H=!1,R=null,X=null,I.removeEventListener("mousemove",K),I.removeEventListener("mouseup",J),I.removeEventListener("touchmove",K),I.removeEventListener("touchend",J)}}I.addEventListener("mousemove",K),I.addEventListener("mouseup",J),I.addEventListener("touchmove",K),I.addEventListener("touchend",J)}function ta(e,{handle:t,connectionMode:n,fromNodeId:o,fromHandleId:r,fromType:i,doc:s,lib:a,flowId:c,isValidConnection:l=ea,nodeLookup:u}){let f=i==="target",d=t?s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:p,y:h}=ye(e),m=s.elementFromPoint(p,h),w=m?.classList.contains(`${a}-flow__handle`)?m:d,x={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){let v=Js(void 0,w),g=w.getAttribute("data-nodeid"),b=w.getAttribute("data-handleid"),E=w.classList.contains("connectable"),S=w.classList.contains("connectableend");if(!g||!v)return x;let N={source:f?g:o,sourceHandle:f?b:r,target:f?o:g,targetHandle:f?r:b};x.connection=N;let I=E&&S&&(n===Xe.Strict?f&&v==="source"||!f&&v==="target":g!==o||b!==r);x.isValid=I&&l(N),x.toHandle=js(g,v,b,u,n,!0)}return x}var to={onPointerDown:zf,isValid:ta};function na({domNode:e,panZoom:t,getTransform:n,getViewScale:o}){let r=le(e);function i({translateExtent:a,width:c,height:l,zoomStep:u=1,pannable:f=!0,zoomable:d=!0,inversePan:p=!1}){let h=g=>{if(g.sourceEvent.type!=="wheel"||!t)return;let b=n(),E=g.sourceEvent.ctrlKey&&Ct()?10:1,S=-g.sourceEvent.deltaY*(g.sourceEvent.deltaMode===1?.05:g.sourceEvent.deltaMode?1:.002)*u,N=b[2]*Math.pow(2,S*E);t.scaleTo(N)},m=[0,0],w=g=>{(g.sourceEvent.type==="mousedown"||g.sourceEvent.type==="touchstart")&&(m=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY])},x=g=>{let b=n();if(g.sourceEvent.type!=="mousemove"&&g.sourceEvent.type!=="touchmove"||!t)return;let E=[g.sourceEvent.clientX??g.sourceEvent.touches[0].clientX,g.sourceEvent.clientY??g.sourceEvent.touches[0].clientY],S=[E[0]-m[0],E[1]-m[1]];m=E;let N=o()*Math.max(b[2],Math.log(b[2]))*(p?-1:1),P={x:b[0]-S[0]*N,y:b[1]-S[1]*N},I=[[0,0],[c,l]];t.setViewportConstrained({x:P.x,y:P.y,zoom:b[2]},I,a)},v=Vn().on("start",w).on("zoom",f?x:null).on("zoom.wheel",d?h:null);r.call(v,{})}function s(){r.on("zoom",null)}return{update:i,destroy:s,pointer:fe}}var no=e=>({x:e.x,y:e.y,zoom:e.k}),zo=({x:e,y:t,zoom:n})=>st.translate(e,t).scale(n),We=(e,t)=>e.target.closest(`.${t}`),oa=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Af=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ao=(e,t=0,n=Af,o=()=>{})=>{let r=typeof t=="number"&&t>0;return r||o(),r?e.transition().duration(t).ease(n).on("end",o):e},ra=e=>{let t=e.ctrlKey&&Ct()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Df({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:o,panOnScrollMode:r,panOnScrollSpeed:i,zoomOnPinch:s,onPanZoomStart:a,onPanZoom:c,onPanZoomEnd:l}){return u=>{if(We(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();let f=n.property("__zoom").k||1;if(u.ctrlKey&&s){let w=fe(u),x=ra(u),v=f*Math.pow(2,x);o.scaleTo(n,v,w,u);return}let d=u.deltaMode===1?20:1,p=r===$e.Vertical?0:u.deltaX*d,h=r===$e.Horizontal?0:u.deltaY*d;!Ct()&&u.shiftKey&&r!==$e.Vertical&&(p=u.deltaY*d,h=0),o.translateBy(n,-(p/f)*i,-(h/f)*i,{internal:!0});let m=no(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?c?.(u,m):(e.isPanScrolling=!0,a?.(u,m)),e.panScrollTimeout=setTimeout(()=>{l?.(u,m),e.isPanScrolling=!1},150)}}function Tf({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(o,r){let i=o.type==="wheel",s=!t&&i&&!o.ctrlKey,a=We(o,e);if(o.ctrlKey&&i&&a&&o.preventDefault(),s||a)return null;o.preventDefault(),n.call(this,o,r)}}function Of({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return o=>{if(o.sourceEvent?.internal)return;let r=no(o.transform);e.mouseButton=o.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=r,o.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(o.sourceEvent,r)}}function Lf({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:o,onPanZoom:r}){return i=>{e.usedRightMouseButton=!!(n&&oa(t,e.mouseButton??0)),i.sourceEvent?.sync||o([i.transform.x,i.transform.y,i.transform.k]),r&&!i.sourceEvent?.internal&&r?.(i.sourceEvent,no(i.transform))}}function $f({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:o,onPanZoomEnd:r,onPaneContextMenu:i}){return s=>{if(!s.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,i&&oa(t,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&i(s.sourceEvent),e.usedRightMouseButton=!1,o(!1),r)){let a=no(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{r?.(s.sourceEvent,a)},n?150:0)}}}function Hf({panActivationKeyPressed:e,zoomActivationKeyPressed:t,zoomOnScroll:n,zoomOnPinch:o,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:s,userSelectionActive:a,noWheelClassName:c,noPanClassName:l,lib:u,connectionInProgress:f}){return d=>{let p=t||n,h=o&&d.ctrlKey,m=d.type==="wheel";if(d.button===1&&d.type==="mousedown"&&(We(d,`${u}-flow__node`)||We(d,`${u}-flow__edge`)||We(d,`${u}-flow__selection`)||We(d,`${u}-flow__nodesselection`)))return!0;if(!r&&!p&&!i&&!s&&!o||a||f&&!m||We(d,c)&&m||We(d,l)&&(!m||i&&m&&!t)||!o&&d.ctrlKey&&m)return!1;if(!o&&d.type==="touchstart"&&d.touches?.length>1)return d.preventDefault(),!1;if(!p&&!i&&!h&&m||!r&&(d.type==="mousedown"||d.type==="touchstart")||Array.isArray(r)&&!r.includes(d.button)&&d.type==="mousedown")return!1;let w=Array.isArray(r)&&r.includes(d.button)||!d.button||d.button<=1;return(!d.ctrlKey||m||e)&&w}}function ia({domNode:e,minZoom:t,maxZoom:n,translateExtent:o,viewport:r,onPanZoom:i,onPanZoomStart:s,onPanZoomEnd:a,onDraggingChange:c}){let l={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),f=[[0,0],[u.width,u.height]];(typeof ResizeObserver<"u"?new ResizeObserver($=>{let y=$[0];y&&(f=[[0,0],[y.contentRect.width,y.contentRect.height]])}):null)?.observe(e);let p=Vn().extent(()=>f).scaleExtent([t,n]).translateExtent(o),h=le(e).call(p);b({x:r.x,y:r.y,zoom:vt(r.zoom,t,n)},[[0,0],[u.width,u.height]],o);let m=h.on("wheel.zoom"),w=h.on("dblclick.zoom");p.wheelDelta(ra);async function x($,y){return h?new Promise(_=>{p?.interpolate(y?.interpolate==="linear"?Oe:ot).transform(Ao(h,y?.duration,y?.ease,()=>_(!0)),$)}):!1}function v({noWheelClassName:$,noPanClassName:y,onPaneContextMenu:_,userSelectionActive:k,panOnScroll:C,panOnDrag:T,panOnScrollMode:A,panOnScrollSpeed:R,preventScrolling:H,zoomOnPinch:X,zoomOnScroll:G,zoomOnDoubleClick:q,panActivationKeyPressed:Q=!1,zoomActivationKeyPressed:ee,lib:Z,onTransformChange:V,connectionInProgress:K,paneClickDistance:J,selectionOnDrag:O}){k&&!l.isZoomingOrPanning&&g();let W=C&&!ee&&!k;p.clickDistance(O?1/0:!xe(J)||J<0?0:J);let Y=W?Df({zoomPanValues:l,noWheelClassName:$,d3Selection:h,d3Zoom:p,panOnScrollMode:A,panOnScrollSpeed:R,zoomOnPinch:X,onPanZoomStart:s,onPanZoom:i,onPanZoomEnd:a}):Tf({noWheelClassName:$,preventScrolling:H,d3ZoomHandler:m});h.on("wheel.zoom",Y,{passive:!1});let j=Of({zoomPanValues:l,onDraggingChange:c,onPanZoomStart:s});p.on("start",j);let te=Lf({zoomPanValues:l,panOnDrag:T,onPaneContextMenu:!!_,onPanZoom:i,onTransformChange:V});p.on("zoom",te);let oe=$f({zoomPanValues:l,panOnDrag:T,panOnScroll:C,onPaneContextMenu:_,onPanZoomEnd:a,onDraggingChange:c});p.on("end",oe);let ue=Hf({panActivationKeyPressed:Q,zoomActivationKeyPressed:ee,panOnDrag:T,zoomOnScroll:G,panOnScroll:C,zoomOnDoubleClick:q,zoomOnPinch:X,userSelectionActive:k,noPanClassName:y,noWheelClassName:$,lib:Z,connectionInProgress:K});p.filter(ue),q?h.on("dblclick.zoom",w):h.on("dblclick.zoom",null)}function g(){p.on("zoom",null)}async function b($,y,_){let k=zo($),C=p?.constrain()(k,y,_);return C&&await x(C),C}async function E($,y){let _=zo($);return await x(_,y),_}function S($){if(h){let y=zo($),_=h.property("__zoom");(_.k!==$.zoom||_.x!==$.x||_.y!==$.y)&&p?.transform(h,y,null,{sync:!0})}}function N(){let $=h?Jt(h.node()):{x:0,y:0,k:1};return{x:$.x,y:$.y,zoom:$.k}}async function P($,y){return h?new Promise(_=>{p?.interpolate(y?.interpolate==="linear"?Oe:ot).scaleTo(Ao(h,y?.duration,y?.ease,()=>_(!0)),$)}):!1}async function I($,y){return h?new Promise(_=>{p?.interpolate(y?.interpolate==="linear"?Oe:ot).scaleBy(Ao(h,y?.duration,y?.ease,()=>_(!0)),$)}):!1}function F($){p?.scaleExtent($)}function L($){p?.translateExtent($)}function B($){let y=!xe($)||$<0?0:$;p?.clickDistance(y)}return{update:v,destroy:g,setViewport:E,setViewportConstrained:b,getViewport:N,scaleTo:P,scaleBy:I,setScaleExtent:F,setTranslateExtent:L,syncViewport:S,setClickDistance:B}}var Ze;(function(e){e.Line="line",e.Handle="handle"})(Ze||(Ze={}));function Bf({width:e,prevWidth:t,height:n,prevHeight:o,affectsX:r,affectsY:i}){let s=e-t,a=n-o,c=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(c[0]=c[0]*-1),a&&i&&(c[1]=c[1]*-1),c}function Ps(e){let t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),o=e.includes("left"),r=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:o,affectsY:r}}function Re(e,t){return Math.max(0,t-e)}function Fe(e,t){return Math.max(0,e-t)}function Fn(e,t,n){return Math.max(0,t-e,e-n)}function zs(e,t){return e?!t:t}function Vf(e,t,n,o,r,i,s,a){let{affectsX:c,affectsY:l}=t,{isHorizontal:u,isVertical:f}=t,d=u&&f,{xSnapped:p,ySnapped:h}=n,{minWidth:m,maxWidth:w,minHeight:x,maxHeight:v}=o,{x:g,y:b,width:E,height:S,aspectRatio:N}=e,P=Math.floor(u?p-e.pointerX:0),I=Math.floor(f?h-e.pointerY:0),F=E+(c?-P:P),L=S+(l?-I:I),B=-i[0]*E,$=-i[1]*S,y=Fn(F,m,w),_=Fn(L,x,v);if(s){let T=0,A=0;c&&P<0?T=Re(g+P+B,s[0][0]):!c&&P>0&&(T=Fe(g+F+B,s[1][0])),l&&I<0?A=Re(b+I+$,s[0][1]):!l&&I>0&&(A=Fe(b+L+$,s[1][1])),y=Math.max(y,T),_=Math.max(_,A)}if(a){let T=0,A=0;c&&P>0?T=Fe(g+P,a[0][0]):!c&&P<0&&(T=Re(g+F,a[1][0])),l&&I>0?A=Fe(b+I,a[0][1]):!l&&I<0&&(A=Re(b+L,a[1][1])),y=Math.max(y,T),_=Math.max(_,A)}if(r){if(u){let T=Fn(F/N,x,v)*N;if(y=Math.max(y,T),s){let A=0;!c&&!l||c&&!l&&d?A=Fe(b+$+F/N,s[1][1])*N:A=Re(b+$+(c?P:-P)/N,s[0][1])*N,y=Math.max(y,A)}if(a){let A=0;!c&&!l||c&&!l&&d?A=Re(b+F/N,a[1][1])*N:A=Fe(b+(c?P:-P)/N,a[0][1])*N,y=Math.max(y,A)}}if(f){let T=Fn(L*N,m,w)/N;if(_=Math.max(_,T),s){let A=0;!c&&!l||l&&!c&&d?A=Fe(g+L*N+B,s[1][0])/N:A=Re(g+(l?I:-I)*N+B,s[0][0])/N,_=Math.max(_,A)}if(a){let A=0;!c&&!l||l&&!c&&d?A=Re(g+L*N,a[1][0])/N:A=Fe(g+(l?I:-I)*N,a[0][0])/N,_=Math.max(_,A)}}}I=I+(I<0?_:-_),P=P+(P<0?y:-y),r&&(d?F>L*N?I=(zs(c,l)?-P:P)/N:P=(zs(c,l)?-I:I)*N:u?(I=P/N,l=c):(P=I*N,c=l));let k=c?g+P:g,C=l?b+I:b;return{width:E+(c?-P:P),height:S+(l?-I:I),x:i[0]*P*(c?-1:1)+k,y:i[1]*I*(l?-1:1)+C}}var sa={width:0,height:0,x:0,y:0},Rf={...sa,pointerX:0,pointerY:0,aspectRatio:1};function Ff(e,t,n){let o=t.position.x+e.position.x,r=t.position.y+e.position.y,i=e.measured.width??0,s=e.measured.height??0,a=n[0]*i,c=n[1]*s;return[[o-a,r-c],[o+i-a,r+s-c]]}function aa({domNode:e,nodeId:t,getStoreItems:n,onChange:o,onEnd:r}){let i=le(e),s={controlDirection:Ps("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function a({controlPosition:l,boundaries:u,keepAspectRatio:f,resizeDirection:d,onResizeStart:p,onResize:h,onResizeEnd:m,shouldResize:w}){let x={...sa},v={...Rf};s={boundaries:u,resizeDirection:d,keepAspectRatio:f,controlDirection:Ps(l)};let g,b=null,E=[],S,N,P,I=wn().on("start",F=>{let{nodeLookup:L,transform:B,snapGrid:$,snapToGrid:y,nodeOrigin:_,paneDomNode:k}=n();if(g=L.get(t),!g)return;b=k?.getBoundingClientRect()??null;let{xSnapped:C,ySnapped:T}=en(F.sourceEvent,{transform:B,snapGrid:$,snapToGrid:y,containerBounds:b});x={width:g.measured.width??0,height:g.measured.height??0,x:g.position.x??0,y:g.position.y??0},v={...x,pointerX:C,pointerY:T,aspectRatio:x.width/x.height},S=void 0,N=ut(g.extent)?g.extent:void 0,g.parentId&&(g.extent==="parent"||g.expandParent)&&(S=L.get(g.parentId)),S&&g.extent==="parent"&&(N=[[0,0],[S.measured.width,S.measured.height]]),E=[],P=void 0;for(let[A,R]of L)if(R.parentId===t&&(E.push({id:A,position:{...R.position},extent:R.extent}),R.extent==="parent"||R.expandParent)){let H=Ff(R,g,R.origin??_);P?P=[[Math.min(H[0][0],P[0][0]),Math.min(H[0][1],P[0][1])],[Math.max(H[1][0],P[1][0]),Math.max(H[1][1],P[1][1])]]:P=H}p?.(F,{...x})}).on("drag",F=>{let{transform:L,snapGrid:B,snapToGrid:$,nodeOrigin:y}=n(),_=en(F.sourceEvent,{transform:L,snapGrid:B,snapToGrid:$,containerBounds:b}),k=[];if(!g)return;let{x:C,y:T,width:A,height:R}=x,H={},X=g.origin??y,{width:G,height:q,x:Q,y:ee}=Vf(v,s.controlDirection,_,s.boundaries,s.keepAspectRatio,X,N,P),Z=G!==A,V=q!==R,K=Q!==C&&Z,J=ee!==T&&V;if(!K&&!J&&!Z&&!V)return;let O={prevValues:{...x},startX:v.x,startY:v.y,childNodes:E.map(te=>({...te,position:{...te.position}}))};if((K||J||X[0]===1||X[1]===1)&&(H.x=K?Q:x.x,H.y=J?ee:x.y,x.x=H.x,x.y=H.y,E.length>0)){let te=Q-C,oe=ee-T;for(let ue of E)ue.position={x:ue.position.x-te+X[0]*(G-A),y:ue.position.y-oe+X[1]*(q-R)},k.push(ue)}if((Z||V)&&(H.width=Z&&(!s.resizeDirection||s.resizeDirection==="horizontal")?G:x.width,H.height=V&&(!s.resizeDirection||s.resizeDirection==="vertical")?q:x.height,x.width=H.width,x.height=H.height),S&&g.expandParent){let te=X[0]*(H.width??0);H.x&&H.x<te&&(x.x=te,v.x=v.x-(H.x-te));let oe=X[1]*(H.height??0);H.y&&H.y<oe&&(x.y=oe,v.y=v.y-(H.y-oe))}let W=Bf({width:x.width,prevWidth:A,height:x.height,prevHeight:R,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),Y={...x,direction:W};if(w?.(F,Y)===!1){x=O.prevValues,v.x=O.startX,v.y=O.startY,E.forEach((te,oe)=>{te.position=O.childNodes[oe].position});return}h?.(F,Y),o(H,k)}).on("end",F=>{m?.(F,{...x}),r?.({...x})});i.call(I)}function c(){i.on(".drag",null)}return{update:a,destroy:c}}var ba=dn(require("react"),1),va=dn(ga(),1);var xa={},ma=e=>{let t,n=new Set,o=(u,f)=>{let d=typeof u=="function"?u(t):u;if(!Object.is(d,t)){let p=t;t=f??(typeof d!="object"||d===null)?d:Object.assign({},t,d),n.forEach(h=>h(t,p))}},r=()=>t,c={setState:o,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(xa.env?xa.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=t=e(o,r,c);return c},ya=e=>e?ma(e):ma;var{useDebugValue:sp}=ba.default,{useSyncExternalStoreWithSelector:ap}=va.default,cp=e=>e;function rr(e,t=cp,n){let o=ap(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return sp(o),o}var wa=(e,t)=>{let n=ya(e),o=(r,i=t)=>rr(n,r,i);return Object.assign(o,n),o},_a=(e,t)=>e?wa(e,t):wa;function ie(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[o,r]of e)if(!Object.is(r,t.get(o)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let o of e)if(!t.has(o))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||!Object.is(e[o],t[o]))return!1;return!0}var lp=require("react-dom"),ao=(0,D.createContext)(null),up=ao.Provider,Ka=me.error001("react");function ne(e,t){let n=(0,D.useContext)(ao);if(n===null)throw new Error(Ka);return rr(n,e,t)}function re(){let e=(0,D.useContext)(ao);if(e===null)throw new Error(Ka);return(0,D.useMemo)(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}var ka={display:"none"},dp={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Ua="react-flow__node-desc",Qa="react-flow__edge-desc",fp="react-flow__aria-live",pp=e=>e.ariaLiveMessage,hp=e=>e.ariaLabelConfig;function gp({rfId:e}){let t=ne(pp);return(0,z.jsx)("div",{id:`${fp}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:dp,children:t})}function mp({rfId:e,disableKeyboardA11y:t}){let n=ne(hp);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{id:`${Ua}-${e}`,style:ka,children:t?n["node.a11yDescription.default"]:n["node.a11yDescription.keyboardDisabled"]}),(0,z.jsx)("div",{id:`${Qa}-${e}`,style:ka,children:n["edge.a11yDescription.default"]}),!t&&(0,z.jsx)(gp,{rfId:e})]})}var co=(0,D.forwardRef)(({position:e="top-left",children:t,className:n,style:o,...r},i)=>{let s=`${e}`.split("-");return(0,z.jsx)("div",{className:se(["react-flow__panel",n,...s]),style:o,ref:i,...r,children:t})});co.displayName="Panel";var Sa="https://reactflow.dev?utm_source=attribution";function xp({proOptions:e,position:t="bottom-right"}){return(0,D.useEffect)(()=>{},[]),e?.hideAttribution?null:(0,z.jsx)(co,{position:t,className:"react-flow__attribution","data-message":`Please only hide this attribution when you are subscribed to React Flow Pro: ${Sa}`,children:(0,z.jsx)("a",{href:Sa,target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}var yp=e=>{let t=[],n=[];for(let[,o]of e.nodeLookup)o.selected&&t.push(o.internals.userNode);for(let[,o]of e.edgeLookup)o.selected&&n.push(o);return{selectedNodes:t,selectedEdges:n}},ro=e=>e.id;function wp(e,t){return ie(e.selectedNodes.map(ro),t.selectedNodes.map(ro))&&ie(e.selectedEdges.map(ro),t.selectedEdges.map(ro))}function bp({onSelectionChange:e}){let t=re(),{selectedNodes:n,selectedEdges:o}=ne(yp,wp);return(0,D.useEffect)(()=>{let r={nodes:n,edges:o};e?.(r),t.getState().onSelectionChangeHandlers.forEach(i=>i(r))},[n,o,e]),null}var vp=e=>!!e.onSelectionChangeHandlers;function _p({onSelectionChange:e}){let t=ne(vp);return e||t?(0,z.jsx)(bp,{onSelectionChange:e}):null}var ja=[0,0],kp={x:0,y:0,zoom:1},Sp=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Ea=[...Sp,"rfId"],Ep=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Na={translateExtent:_t,nodeOrigin:ja,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function Np(e){let{setNodes:t,setEdges:n,setMinZoom:o,setMaxZoom:r,setTranslateExtent:i,setNodeExtent:s,reset:a,setDefaultNodesAndEdges:c}=ne(Ep,ie),l=re();(0,D.useEffect)(()=>(c(e.defaultNodes,e.defaultEdges),()=>{u.current=Na,a()}),[]);let u=(0,D.useRef)(Na);return(0,D.useEffect)(()=>{for(let f of Ea){let d=e[f],p=u.current[f];d!==p&&(typeof e[f]>"u"||(f==="nodes"?t(d):f==="edges"?n(d):f==="minZoom"?o(d):f==="maxZoom"?r(d):f==="translateExtent"?i(d):f==="nodeExtent"?s(d):f==="ariaLabelConfig"?l.setState({ariaLabelConfig:Bs(d)}):f==="fitView"?l.setState({fitViewQueued:d}):f==="fitViewOptions"?l.setState({fitViewOptions:d}):l.setState({[f]:d})))}u.current=e},Ea.map(f=>e[f])),null}function Ca(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function Cp(e){let[t,n]=(0,D.useState)(e==="system"?null:e);return(0,D.useEffect)(()=>{if(e!=="system"){n(e);return}let o=Ca(),r=()=>n(o?.matches?"dark":"light");return r(),o?.addEventListener("change",r),()=>{o?.removeEventListener("change",r)}},[e]),t!==null?t:Ca()?.matches?"dark":"light"}var Ma=typeof document<"u"?document:null;function sn(e=null,t={target:Ma,actInsideInputWithModifier:!0}){let[n,o]=(0,D.useState)(!1),r=(0,D.useRef)(!1),i=(0,D.useRef)(new Set([])),[s,a]=(0,D.useMemo)(()=>{if(e!==null){let l=(Array.isArray(e)?e:[e]).filter(f=>typeof f=="string").map(f=>f.replace(/\+/g,`
`).replace(`

`,`
+`).split(`
`)),u=l.reduce((f,d)=>f.concat(...d),[]);return[l,u]}return[[],[]]},[e]);return(0,D.useEffect)(()=>{let c=t?.target??Ma,l=t?.actInsideInputWithModifier??!0;if(e!==null){let u=p=>{if(r.current=p.ctrlKey||p.metaKey||p.shiftKey||p.altKey,(!r.current||r.current&&!l)&&Ko(p))return!1;let m=Pa(p.code,a);if(i.current.add(p[m]),Ia(s,i.current,!1)){let w=p.composedPath?.()?.[0]||p.target,x=w?.nodeName==="BUTTON"||w?.nodeName==="A";t.preventDefault!==!1&&(r.current||!x)&&p.preventDefault(),o(!0)}},f=p=>{let h=Pa(p.code,a);Ia(s,i.current,!0)?(o(!1),i.current.clear()):i.current.delete(p[h]),p.key==="Meta"&&i.current.clear(),r.current=!1},d=()=>{i.current.clear(),o(!1)};return c?.addEventListener("keydown",u),c?.addEventListener("keyup",f),window.addEventListener("blur",d),window.addEventListener("contextmenu",d),()=>{c?.removeEventListener("keydown",u),c?.removeEventListener("keyup",f),window.removeEventListener("blur",d),window.removeEventListener("contextmenu",d)}}},[e,o]),n}function Ia(e,t,n){return e.filter(o=>n||o.length===t.size).some(o=>o.every(r=>t.has(r)))}function Pa(e,t){return t.includes(e)?"code":"key"}var Mp=()=>{let e=re();return(0,D.useMemo)(()=>({zoomIn:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1.2,t):!1},zoomOut:async t=>{let{panZoom:n}=e.getState();return n?n.scaleBy(1/1.2,t):!1},zoomTo:async(t,n)=>{let{panZoom:o}=e.getState();return o?o.scaleTo(t,n):!1},getZoom:()=>e.getState().transform[2],setViewport:async(t,n)=>{let{transform:[o,r,i],panZoom:s}=e.getState();return s?(await s.setViewport({x:t.x??o,y:t.y??r,zoom:t.zoom??i},n),!0):!1},getViewport:()=>{let[t,n,o]=e.getState().transform;return{x:t,y:n,zoom:o}},setCenter:async(t,n,o)=>e.getState().setCenter(t,n,o),fitBounds:async(t,n)=>{let{width:o,height:r,minZoom:i,maxZoom:s,panZoom:a}=e.getState(),c=on(t,o,r,i,s,n?.padding??.1);return a?(await a.setViewport(c,{duration:n?.duration,ease:n?.ease,interpolate:n?.interpolate}),!0):!1},screenToFlowPosition:(t,n={})=>{let{transform:o,snapGrid:r,snapToGrid:i,domNode:s}=e.getState();if(!s)return t;let{x:a,y:c}=s.getBoundingClientRect(),l={x:t.x-a,y:t.y-c},u=n.snapGrid??r,f=n.snapToGrid??i;return Nt(l,o,f,u)},flowToScreenPosition:t=>{let{transform:n,domNode:o}=e.getState();if(!o)return t;let{x:r,y:i}=o.getBoundingClientRect(),s=lt(t,n);return{x:s.x+r,y:s.y+i}}}),[])};function Ja(e,t){let n=[],o=new Map,r=[];for(let i of e)if(i.type==="add"){r.push(i);continue}else if(i.type==="remove"||i.type==="replace")o.set(i.id,[i]);else{let s=o.get(i.id);s?s.push(i):o.set(i.id,[i])}for(let i of t){let s=o.get(i.id);if(!s){n.push(i);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){n.push({...s[0].item});continue}let a={...i};for(let c of s)Ip(c,a);n.push(a)}return r.length&&r.forEach(i=>{i.index!==void 0?n.splice(i.index,0,{...i.item}):n.push({...i.item})}),n}function Ip(e,t){switch(e.type){case"select":{t.selected=e.selected;break}case"position":{typeof e.position<"u"&&(t.position=e.position),typeof e.dragging<"u"&&(t.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(t.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(t.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(t.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(t.resizing=e.resizing);break}}}function cr(e,t){return Ja(e,t)}function Pp(e,t){return Ja(e,t)}function dt(e,t){return{id:e,type:"select",selected:t}}function It(e,t=new Set,n=!1){let o=[];for(let[r,i]of e){let s=t.has(r);!(i.selected===void 0&&!s)&&i.selected!==s&&(n&&(i.selected=s),o.push(dt(i.id,s)))}return o}function za({items:e=[],lookup:t}){let n=[],o=new Map(e.map(r=>[r.id,r]));for(let[r,i]of e.entries()){let s=t.get(i.id),a=s?.internals?.userNode??s;a!==void 0&&a!==i&&n.push({id:i.id,item:i,type:"replace"}),a===void 0&&n.push({item:i,type:"add",index:r})}for(let[r]of t)o.get(r)===void 0&&n.push({id:r,type:"remove"});return n}function Aa(e){return{id:e.id,type:"remove"}}var zp=Wo("React Flow","https://reactflow.dev/");function Ap(e,t,n={}){return Fs(e,t,{...n,onError:n.onError??zp})}var Da=e=>As(e),Dp=e=>$o(e);function ec(e){return(0,D.forwardRef)(e)}var tc=typeof window<"u"?D.useLayoutEffect:D.useEffect;function Ta(e){let[t,n]=(0,D.useState)(BigInt(0)),[o]=(0,D.useState)(()=>Tp(()=>n(r=>r+BigInt(1))));return tc(()=>{let r=o.get();r.length&&(e(r),o.reset())},[t]),o}function Tp(e){let t=[];return{get:()=>t,reset:()=>{t=[]},push:n=>{t.push(n),e()}}}var nc=(0,D.createContext)(null);function Op({children:e}){let t=re(),n=(0,D.useCallback)(a=>{let{nodes:c=[],setNodes:l,hasDefaultNodes:u,onNodesChange:f,nodeLookup:d,fitViewQueued:p,onNodesChangeMiddlewareMap:h}=t.getState(),m=c;for(let x of a)m=typeof x=="function"?x(m):x;let w=za({items:m,lookup:d});for(let x of h.values())w=x(w);u&&l(m),w.length>0?f?.(w):p&&window.requestAnimationFrame(()=>{let{fitViewQueued:x,nodes:v,setNodes:g}=t.getState();x&&g(v)})},[]),o=Ta(n),r=(0,D.useCallback)(a=>{let{edges:c=[],setEdges:l,hasDefaultEdges:u,onEdgesChange:f,edgeLookup:d}=t.getState(),p=c;for(let h of a)p=typeof h=="function"?h(p):h;u?l(p):f&&f(za({items:p,lookup:d}))},[]),i=Ta(r),s=(0,D.useMemo)(()=>({nodeQueue:o,edgeQueue:i}),[]);return(0,z.jsx)(nc.Provider,{value:s,children:e})}function Lp(){let e=(0,D.useContext)(nc);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}var $p=e=>!!e.panZoom;function an(){let e=Mp(),t=re(),n=Lp(),o=ne($p),r=(0,D.useMemo)(()=>{let i=f=>t.getState().nodeLookup.get(f),s=f=>{n.nodeQueue.push(f)},a=f=>{n.edgeQueue.push(f)},c=f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState(),h=Da(f)?f:d.get(f.id),m=h.parentId?Yo(h.position,h.measured,h.parentId,d,p):h.position,w={...h,position:m,width:h.measured?.width??h.width,height:h.measured?.height??h.height};return St(w)},l=(f,d,p={replace:!1})=>{s(h=>h.map(m=>{if(m.id===f){let w=typeof d=="function"?d(m):d;return p.replace&&Da(w)?w:{...m,...w}}return m}))},u=(f,d,p={replace:!1})=>{a(h=>h.map(m=>{if(m.id===f){let w=typeof d=="function"?d(m):d;return p.replace&&Dp(w)?w:{...m,...w}}return m}))};return{getNodes:()=>t.getState().nodes.map(f=>({...f})),getNode:f=>i(f)?.internals.userNode,getInternalNode:i,getEdges:()=>{let{edges:f=[]}=t.getState();return f.map(d=>({...d}))},getEdge:f=>t.getState().edgeLookup.get(f),setNodes:s,setEdges:a,addNodes:f=>{let d=Array.isArray(f)?f:[f];n.nodeQueue.push(p=>[...p,...d])},addEdges:f=>{let d=Array.isArray(f)?f:[f];n.edgeQueue.push(p=>[...p,...d])},toObject:()=>{let{nodes:f=[],edges:d=[],transform:p}=t.getState(),[h,m,w]=p;return{nodes:f.map(x=>({...x})),edges:d.map(x=>({...x})),viewport:{x:h,y:m,zoom:w}}},deleteElements:async({nodes:f=[],edges:d=[]})=>{let{nodes:p,edges:h,onNodesDelete:m,onEdgesDelete:w,triggerNodeChanges:x,triggerEdgeChanges:v,onDelete:g,onBeforeDelete:b}=t.getState(),{nodes:E,edges:S}=await Os({nodesToRemove:f,edgesToRemove:d,nodes:p,edges:h,onBeforeDelete:b}),N=S.length>0,P=E.length>0;if(N){let I=S.map(Aa);w?.(S),v(I)}if(P){let I=E.map(Aa);m?.(E),x(I)}return(P||N)&&g?.({nodes:E,edges:S}),{deletedNodes:E,deletedEdges:S}},getIntersectingNodes:(f,d=!0,p)=>{let h=Fo(f),m=h?f:c(f),w=p!==void 0;return m?(p||t.getState().nodes).filter(x=>{let v=t.getState().nodeLookup.get(x.id);if(v&&!h&&(x.id===f.id||!v.internals.positionAbsolute))return!1;let g=St(w?x:v),b=nn(g,m);return d&&b>0||b>=g.width*g.height||b>=m.width*m.height}):[]},isNodeIntersecting:(f,d,p=!0)=>{let m=Fo(f)?f:c(f);if(!m)return!1;let w=nn(m,d);return p&&w>0||w>=d.width*d.height||w>=m.width*m.height},updateNode:l,updateNodeData:(f,d,p={replace:!1})=>{l(f,h=>{let m=typeof d=="function"?d(h):d;return p.replace?{...h,data:m}:{...h,data:{...h.data,...m}}},p)},updateEdge:u,updateEdgeData:(f,d,p={replace:!1})=>{u(f,h=>{let m=typeof d=="function"?d(h):d;return p.replace?{...h,data:m}:{...h,data:{...h.data,...m}}},p)},getNodesBounds:f=>{let{nodeLookup:d,nodeOrigin:p}=t.getState();return Bo(f,{nodeLookup:d,nodeOrigin:p})},getHandleConnections:({type:f,id:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}-${f}${d?`-${d}`:""}`)?.values()??[]),getNodeConnections:({type:f,handleId:d,nodeId:p})=>Array.from(t.getState().connectionLookup.get(`${p}${f?d?`-${f}-${d}`:`-${f}`:""}`)?.values()??[]),fitView:async f=>{let d=t.getState().fitViewResolver??Hs();return t.setState({fitViewQueued:!0,fitViewOptions:f,fitViewResolver:d}),n.nodeQueue.push(p=>[...p]),d.promise}}},[]);return(0,D.useMemo)(()=>({...r,...e,viewportInitialized:o}),[o])}var Oa=e=>e.selected,Hp=typeof window<"u"?window:void 0;function Bp({deleteKeyCode:e,multiSelectionKeyCode:t}){let n=re(),{deleteElements:o}=an(),r=sn(e,{actInsideInputWithModifier:!1}),i=sn(t,{target:Hp});(0,D.useEffect)(()=>{if(r){let{edges:s,nodes:a}=n.getState();o({nodes:a.filter(Oa),edges:s.filter(Oa)}),n.setState({nodesSelectionActive:!1})}},[r]),(0,D.useEffect)(()=>{n.setState({multiSelectionActive:i})},[i])}function Vp(e){let t=re();(0,D.useEffect)(()=>{let n=()=>{if(!e.current||!(e.current.checkVisibility?.()??!0))return!1;let o=Gn(e.current);(o.height===0||o.width===0)&&t.getState().onError?.("004",me.error004()),t.setState({width:o.width||500,height:o.height||500})};if(e.current){n(),window.addEventListener("resize",n);let o=new ResizeObserver(()=>n());return o.observe(e.current),()=>{window.removeEventListener("resize",n),o&&e.current&&o.unobserve(e.current)}}},[])}var lo={position:"absolute",width:"100%",height:"100%",top:0,left:0},Rp=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function Fp({onPaneContextMenu:e,zoomOnScroll:t=!0,zoomOnPinch:n=!0,panOnScroll:o=!1,panActivationKeyPressed:r,panOnScrollSpeed:i=.5,panOnScrollMode:s=$e.Free,zoomOnDoubleClick:a=!0,panOnDrag:c=!0,defaultViewport:l,translateExtent:u,minZoom:f,maxZoom:d,zoomActivationKeyCode:p,preventScrolling:h=!0,children:m,noWheelClassName:w,noPanClassName:x,onViewportChange:v,isControlledViewport:g,paneClickDistance:b,selectionOnDrag:E}){let S=re(),N=(0,D.useRef)(null),{userSelectionActive:P,lib:I,connectionInProgress:F}=ne(Rp,ie),L=sn(p),B=(0,D.useRef)();Vp(N);let $=(0,D.useCallback)(y=>{v?.({x:y[0],y:y[1],zoom:y[2]}),g||S.setState({transform:y})},[v,g]);return(0,D.useEffect)(()=>{if(N.current){B.current=ia({domNode:N.current,minZoom:f,maxZoom:d,translateExtent:u,viewport:l,onDraggingChange:C=>S.setState(T=>T.paneDragging===C?T:{paneDragging:C}),onPanZoomStart:(C,T)=>{let{onViewportChangeStart:A,onMoveStart:R}=S.getState();R?.(C,T),A?.(T)},onPanZoom:(C,T)=>{let{onViewportChange:A,onMove:R}=S.getState();R?.(C,T),A?.(T)},onPanZoomEnd:(C,T)=>{let{onViewportChangeEnd:A,onMoveEnd:R}=S.getState();R?.(C,T),A?.(T)}});let{x:y,y:_,zoom:k}=B.current.getViewport();return S.setState({panZoom:B.current,transform:[y,_,k],domNode:N.current.closest(".react-flow")}),()=>{B.current?.destroy()}}},[]),(0,D.useEffect)(()=>{B.current?.update({onPaneContextMenu:e,zoomOnScroll:t,zoomOnPinch:n,panOnScroll:o,panActivationKeyPressed:r,panOnScrollSpeed:i,panOnScrollMode:s,zoomOnDoubleClick:a,panOnDrag:c,zoomActivationKeyPressed:L,preventScrolling:h,noPanClassName:x,userSelectionActive:P,noWheelClassName:w,lib:I,onTransformChange:$,connectionInProgress:F,selectionOnDrag:E,paneClickDistance:b})},[e,t,n,o,r,i,s,a,c,L,h,x,P,w,I,$,F,E,b]),(0,z.jsx)("div",{className:"react-flow__renderer",ref:N,style:lo,children:m})}var Wp=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function Xp(){let{userSelectionActive:e,userSelectionRect:t}=ne(Wp,ie);return e&&t?(0,z.jsx)("div",{className:"react-flow__selection react-flow__container",style:{width:t.width,height:t.height,transform:`translate(${t.x}px, ${t.y}px)`}}):null}var ir=(e,t)=>n=>{n.target===t.current&&e?.(n)},Yp=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,dragging:e.paneDragging,panBy:e.panBy,autoPanSpeed:e.autoPanSpeed});function Zp({isSelecting:e,selectionKeyPressed:t,selectionMode:n=at.Full,panOnDrag:o,autoPanOnSelection:r,paneClickDistance:i,selectionOnDrag:s,onSelectionStart:a,onSelectionEnd:c,onPaneClick:l,onPaneContextMenu:u,onPaneScroll:f,onPaneMouseEnter:d,onPaneMouseMove:p,onPaneMouseLeave:h,children:m}){let w=(0,D.useRef)(0),x=re(),{userSelectionActive:v,elementsSelectable:g,dragging:b,panBy:E,autoPanSpeed:S}=ne(Yp,ie),N=g&&(e||v),P=(0,D.useRef)(null),I=(0,D.useRef)(),F=(0,D.useRef)(new Set),L=(0,D.useRef)(new Set),B=(0,D.useRef)(!1),$=(0,D.useRef)(!1),y=(0,D.useRef)({x:0,y:0}),_=(0,D.useRef)(!1),k=V=>{if($.current||B.current||x.getState().connection.inProgress){$.current=!1,B.current=!1;return}l?.(V),x.getState().resetSelectedElements(),x.setState({nodesSelectionActive:!1})},C=V=>{if(Array.isArray(o)&&o?.includes(2)){V.preventDefault();return}u?.(V)},T=f?V=>f(V):void 0,A=V=>{$.current&&(V.stopPropagation(),$.current=!1)},R=V=>{if(V.pointerType==="touch"&&o!==!1&&!t)return;let{domNode:K,transform:J}=x.getState();if(I.current=K?.getBoundingClientRect(),!I.current)return;let O=V.target===P.current;if(!O&&!!V.target.closest(".nokey")||!e||!(s&&O||t)||V.button!==0||!V.isPrimary)return;V.target?.setPointerCapture?.(V.pointerId),$.current=!1;let{x:j,y:te}=ye(V.nativeEvent,I.current),oe=Nt({x:j,y:te},J);x.setState({userSelectionRect:{width:0,height:0,startX:oe.x,startY:oe.y,x:j,y:te}}),O||(V.stopPropagation(),V.preventDefault())};function H(V,K){let{userSelectionRect:J}=x.getState();if(!J)return;let{transform:O,nodeLookup:W,edgeLookup:Y,connectionLookup:j,triggerNodeChanges:te,triggerEdgeChanges:oe,defaultEdgeOptions:ue}=x.getState(),Ie={x:J.startX,y:J.startY},{x:Se,y:Ee}=lt(Ie,O),Pe={startX:Ie.x,startY:Ie.y,x:V<Se?V:Se,y:K<Ee?K:Ee,width:Math.abs(V-Se),height:Math.abs(K-Ee)},zt=F.current,Ge=L.current;F.current=new Set(Xn(W,Pe,O,n===at.Partial,!0).map(be=>be.id)),L.current=new Set;let Ke=ue?.selectable??!0;for(let be of F.current){let ze=j.get(be);if(ze)for(let{edgeId:Ae}of ze.values()){let Ue=Y.get(Ae);Ue&&(Ue.selectable??Ke)&&L.current.add(Ae)}}if(!Zo(zt,F.current)){let be=It(W,F.current,!0);te(be)}if(!Zo(Ge,L.current)){let be=It(Y,L.current);oe(be)}x.setState({userSelectionRect:Pe,userSelectionActive:!0,nodesSelectionActive:!1})}function X(){if(!r||!I.current)return;let[V,K]=Yn(y.current,I.current,S);E({x:V,y:K}).then(J=>{if(!$.current||!J){w.current=requestAnimationFrame(X);return}let{x:O,y:W}=y.current;H(O,W),w.current=requestAnimationFrame(X)})}let G=()=>{cancelAnimationFrame(w.current),w.current=0,_.current=!1};(0,D.useEffect)(()=>()=>G(),[]);let q=V=>{let{userSelectionRect:K,transform:J,resetSelectedElements:O}=x.getState();if(!I.current||!K)return;let{x:W,y:Y}=ye(V.nativeEvent,I.current);y.current={x:W,y:Y};let j=lt({x:K.startX,y:K.startY},J);if(!$.current){let te=t?0:i;if(Math.hypot(W-j.x,Y-j.y)<=te)return;O(),a?.(V)}$.current=!0,_.current||(X(),_.current=!0),H(W,Y)},Q=V=>{if(!N){V.target===P.current&&x.getState().connection.inProgress&&(B.current=!0);return}V.button===0&&(V.target?.releasePointerCapture?.(V.pointerId),!v&&V.target===P.current&&x.getState().userSelectionRect&&k?.(V),x.setState({userSelectionActive:!1,userSelectionRect:null}),$.current&&(c?.(V),x.setState({nodesSelectionActive:F.current.size>0})),G())},ee=V=>{V.target?.releasePointerCapture?.(V.pointerId),G()},Z=o===!0||Array.isArray(o)&&o.includes(0);return(0,z.jsxs)("div",{className:se(["react-flow__pane",{draggable:Z,dragging:b,selection:e}]),onClick:N?void 0:ir(k,P),onContextMenu:ir(C,P),onWheel:ir(T,P),onPointerEnter:N?void 0:d,onPointerMove:N?q:p,onPointerUp:Q,onPointerCancel:N?ee:void 0,onPointerDownCapture:N?R:void 0,onClickCapture:N?A:void 0,onPointerLeave:h,ref:P,style:lo,children:[m,(0,z.jsx)(Xp,{})]})}function ar({id:e,store:t,unselect:n=!1,nodeRef:o}){let{addSelectedNodes:r,unselectNodesAndEdges:i,multiSelectionActive:s,nodeLookup:a,onError:c}=t.getState(),l=a.get(e);if(!l){c?.("012",me.error012(e));return}t.setState({nodesSelectionActive:!1}),l.selected?(n||l.selected&&s)&&(i({nodes:[l],edges:[]}),requestAnimationFrame(()=>o?.current?.blur())):r([e])}function oc({nodeRef:e,disabled:t=!1,noDragClassName:n,handleSelector:o,nodeId:r,isSelectable:i,nodeClickDistance:s}){let a=re(),[c,l]=(0,D.useState)(!1),u=(0,D.useRef)();return(0,D.useEffect)(()=>{if(!t)return u.current=Qs({getStoreItems:()=>a.getState(),onNodeMouseDown:f=>{ar({id:f,store:a,nodeRef:e})},onDragStart:()=>{l(!0)},onDragStop:()=>{l(!1)}}),()=>{u.current?.destroy(),u.current=void 0}},[t,a,e]),(0,D.useEffect)(()=>{t||!e.current||!u.current||u.current.update({noDragClassName:n,handleSelector:o,domNode:e.current,isSelectable:i,nodeId:r,nodeClickDistance:s})},[n,o,t,i,e,r,s]),c}var qp=e=>t=>t.selected&&(t.draggable||e&&typeof t.draggable>"u");function rc(){let e=re();return(0,D.useCallback)(n=>{let{nodeExtent:o,snapToGrid:r,snapGrid:i,nodesDraggable:s,onError:a,updateNodePositions:c,nodeLookup:l,nodeOrigin:u}=e.getState(),f=new Map,d=qp(s),p=r?i[0]:5,h=r?i[1]:5,m=n.direction.x*p*n.factor,w=n.direction.y*h*n.factor;for(let[,x]of l){if(!d(x))continue;let v={x:x.internals.positionAbsolute.x+m,y:x.internals.positionAbsolute.y+w};r&&(v=Et(v,i));let{position:g,positionAbsolute:b}=Vo({nodeId:x.id,nextPosition:v,nodeLookup:l,nodeExtent:o,nodeOrigin:u,onError:a});x.position=g,x.internals.positionAbsolute=b,f.set(x.id,x)}c(f)},[])}var lr=(0,D.createContext)(null),Gp=lr.Provider;lr.Consumer;var ic=()=>(0,D.useContext)(lr),Kp=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),sc=(0,D.createContext)(null);function Up({children:e}){let t=ne(Kp,ie);return(0,z.jsx)(sc.Provider,{value:t,children:e})}function Qp(){let e=(0,D.useContext)(sc);if(!e)throw new Error("useHandleConfig must be used within a HandleConfigProvider");return e}var jp={connectingFrom:!1,connectingTo:!1,clickConnecting:!1,isPossibleEndHandle:!0,connectionInProcess:!1,clickConnectionInProcess:!1,valid:!1},Jp=(e,t,n)=>o=>{let{connectionClickStartHandle:r,connectionMode:i,connection:s}=o,{fromHandle:a,toHandle:c,isValid:l}=s;if(!a&&!r)return jp;let u=c?.nodeId===e&&c?.id===t&&c?.type===n;return{connectingFrom:a?.nodeId===e&&a?.id===t&&a?.type===n,connectingTo:u,clickConnecting:r?.nodeId===e&&r?.id===t&&r?.type===n,isPossibleEndHandle:i===Xe.Strict?a?.type!==n:e!==a?.nodeId||t!==a?.id,connectionInProcess:!!a,clickConnectionInProcess:!!r,valid:u&&l}};function eh({type:e="source",position:t=U.Top,isValidConnection:n,isConnectable:o=!0,isConnectableStart:r=!0,isConnectableEnd:i=!0,id:s,onConnect:a,children:c,className:l,onMouseDown:u,onTouchStart:f,...d},p){let h=s||null,m=e==="target",w=re(),x=ic(),{connectOnClick:v,noPanClassName:g,rfId:b}=Qp(),{connectingFrom:E,connectingTo:S,clickConnecting:N,isPossibleEndHandle:P,connectionInProcess:I,clickConnectionInProcess:F,valid:L}=ne(Jp(x,h,e),ie);x||w.getState().onError?.("010",me.error010());let B=_=>{let{defaultEdgeOptions:k,onConnect:C,hasDefaultEdges:T}=w.getState(),A={...k,..._};if(T){let{edges:R,setEdges:H,onError:X}=w.getState();H(Ap(A,R,{onError:X}))}C?.(A),a?.(A)},$=_=>{if(!x)return;let k=Uo(_.nativeEvent);if(r&&(k&&_.button===0||!k)){let C=w.getState();to.onPointerDown(_.nativeEvent,{handleDomNode:_.currentTarget,autoPanOnConnect:C.autoPanOnConnect,connectionMode:C.connectionMode,connectionRadius:C.connectionRadius,domNode:C.domNode,nodeLookup:C.nodeLookup,lib:C.lib,isTarget:m,handleId:h,nodeId:x,flowId:C.rfId,panBy:C.panBy,cancelConnection:C.cancelConnection,onConnectStart:C.onConnectStart,onConnectEnd:(...T)=>w.getState().onConnectEnd?.(...T),updateConnection:C.updateConnection,onConnect:B,isValidConnection:n||((...T)=>w.getState().isValidConnection?.(...T)??!0),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:C.autoPanSpeed,dragThreshold:C.connectionDragThreshold})}k?u?.(_):f?.(_)},y=_=>{let{onClickConnectStart:k,onClickConnectEnd:C,connectionClickStartHandle:T,connectionMode:A,isValidConnection:R,lib:H,rfId:X,nodeLookup:G,connection:q}=w.getState();if(!x||!T&&!r)return;if(!T){k?.(_.nativeEvent,{nodeId:x,handleId:h,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:x,type:e,id:h}});return}let Q=Go(_.target),ee=n||R,{connection:Z,isValid:V}=to.isValid(_.nativeEvent,{handle:{nodeId:x,id:h,type:e},connectionMode:A,fromNodeId:T.nodeId,fromHandleId:T.id||null,fromType:T.type,isValidConnection:ee,flowId:X,doc:Q,lib:H,nodeLookup:G});V&&Z&&B(Z);let K=structuredClone(q);delete K.inProgress,K.toPosition=K.toHandle?K.toHandle.position:null,C?.(_,K),w.setState({connectionClickStartHandle:null})};return(0,z.jsx)("div",{"data-handleid":h,"data-nodeid":x,"data-handlepos":t,"data-id":`${b}-${x}-${h}-${e}`,className:se(["react-flow__handle",`react-flow__handle-${t}`,"nodrag",g,l,{source:!m,target:m,connectable:o,connectablestart:r,connectableend:i,clickconnecting:N,connectingfrom:E,connectingto:S,valid:L,connectionindicator:o&&(!I||P)&&(I||F?i:r)}]),onMouseDown:$,onTouchStart:$,onClick:v?y:void 0,ref:p,...d,children:c})}var ft=(0,D.memo)(ec(eh));function th({data:e,isConnectable:t,sourcePosition:n=U.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[e?.label,(0,z.jsx)(ft,{type:"source",position:n,isConnectable:t})]})}function nh({data:e,isConnectable:t,targetPosition:n=U.Top,sourcePosition:o=U.Bottom}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ft,{type:"target",position:n,isConnectable:t}),e?.label,(0,z.jsx)(ft,{type:"source",position:o,isConnectable:t})]})}function oh(){return null}function rh({data:e,isConnectable:t,targetPosition:n=U.Top}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ft,{type:"target",position:n,isConnectable:t}),e?.label]})}var so={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},La={input:th,default:nh,output:rh,group:oh};function ih(e){return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??e.style?.width,height:e.height??e.initialHeight??e.style?.height}:{width:e.width??e.style?.width,height:e.height??e.style?.height}}var sh=e=>{let{width:t,height:n,x:o,y:r}=kt(e.nodeLookup,{filter:i=>!!i.selected});return{width:xe(t)?t:null,height:xe(n)?n:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${r}px)`}};function ah({onSelectionContextMenu:e,noPanClassName:t,disableKeyboardA11y:n}){let o=re(),{width:r,height:i,transformString:s,userSelectionActive:a}=ne(sh,ie),c=rc(),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{n||l.current?.focus({preventScroll:!0})},[n]);let u=!a&&r!==null&&i!==null;if(oc({nodeRef:l,disabled:!u}),!u)return null;let f=e?p=>{let h=o.getState().nodes.filter(m=>m.selected);e(p,h)}:void 0,d=p=>{Object.prototype.hasOwnProperty.call(so,p.key)&&(p.preventDefault(),c({direction:so[p.key],factor:p.shiftKey?4:1}))};return(0,z.jsx)("div",{className:se(["react-flow__nodesselection","react-flow__container",t]),style:{transform:s},children:(0,z.jsx)("div",{ref:l,className:"react-flow__nodesselection-rect",onContextMenu:f,tabIndex:n?void 0:-1,onKeyDown:n?void 0:d,style:{width:r,height:i}})})}var $a=typeof window<"u"?window:void 0,ch=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function ac({children:e,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,paneClickDistance:a,deleteKeyCode:c,selectionKeyCode:l,selectionOnDrag:u,selectionMode:f,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:h,panActivationKeyCode:m,zoomActivationKeyCode:w,elementsSelectable:x,zoomOnScroll:v,zoomOnPinch:g,panOnScroll:b,panOnScrollSpeed:E,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:P,autoPanOnSelection:I,defaultViewport:F,translateExtent:L,minZoom:B,maxZoom:$,preventScrolling:y,onSelectionContextMenu:_,noWheelClassName:k,noPanClassName:C,disableKeyboardA11y:T,onViewportChange:A,isControlledViewport:R}){let{nodesSelectionActive:H,userSelectionActive:X}=ne(ch,ie),G=sn(l,{target:$a}),q=sn(m,{target:$a}),Q=q||P,ee=q||b,Z=u&&Q!==!0,V=G||X||Z;return Bp({deleteKeyCode:c,multiSelectionKeyCode:h}),(0,z.jsx)(Fp,{onPaneContextMenu:i,elementsSelectable:x,zoomOnScroll:v,zoomOnPinch:g,panOnScroll:ee,panActivationKeyPressed:q,panOnScrollSpeed:E,panOnScrollMode:S,zoomOnDoubleClick:N,panOnDrag:!G&&Q,defaultViewport:F,translateExtent:L,minZoom:B,maxZoom:$,zoomActivationKeyCode:w,preventScrolling:y,noWheelClassName:k,noPanClassName:C,onViewportChange:A,isControlledViewport:R,paneClickDistance:a,selectionOnDrag:Z,children:(0,z.jsxs)(Zp,{onSelectionStart:d,onSelectionEnd:p,onPaneClick:t,onPaneMouseEnter:n,onPaneMouseMove:o,onPaneMouseLeave:r,onPaneContextMenu:i,onPaneScroll:s,panOnDrag:Q,autoPanOnSelection:I,isSelecting:!!V,selectionMode:f,selectionKeyPressed:G,paneClickDistance:a,selectionOnDrag:Z,children:[e,H&&(0,z.jsx)(ah,{onSelectionContextMenu:_,noPanClassName:C,disableKeyboardA11y:T})]})})}ac.displayName="FlowRenderer";var lh=(0,D.memo)(ac),uh=e=>t=>e?Xn(t.nodeLookup,{x:0,y:0,width:t.width,height:t.height},t.transform,!0).map(n=>n.id):Array.from(t.nodeLookup.keys());function dh(e){return ne((0,D.useCallback)(uh(e),[e]),ie)}var fh=e=>e.updateNodeInternals;function ph(){let e=ne(fh),[t]=(0,D.useState)(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(n=>{let o=new Map;n.forEach(r=>{let i=r.target.getAttribute("data-id");o.set(i,{id:i,nodeElement:r.target,force:!0})}),e(o)}));return(0,D.useEffect)(()=>()=>{t?.disconnect()},[t]),t}function hh({node:e,nodeType:t,hasDimensions:n,resizeObserver:o}){let r=re(),i=(0,D.useRef)(null),s=(0,D.useRef)(null),a=(0,D.useRef)(e.sourcePosition),c=(0,D.useRef)(e.targetPosition),l=(0,D.useRef)(t),u=n&&!!e.internals.handleBounds;return(0,D.useEffect)(()=>{i.current&&!e.hidden&&(!u||s.current!==i.current)&&(s.current&&o?.unobserve(s.current),o?.observe(i.current),s.current=i.current)},[u,e.hidden]),(0,D.useEffect)(()=>()=>{s.current&&(o?.unobserve(s.current),s.current=null)},[]),(0,D.useEffect)(()=>{if(i.current){let f=l.current!==t,d=a.current!==e.sourcePosition,p=c.current!==e.targetPosition;(f||d||p)&&(l.current=t,a.current=e.sourcePosition,c.current=e.targetPosition,r.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:i.current,force:!0}]])))}},[e.id,t,e.sourcePosition,e.targetPosition]),i}function gh({id:e,onClick:t,onMouseEnter:n,onMouseMove:o,onMouseLeave:r,onContextMenu:i,onDoubleClick:s,nodesDraggable:a,elementsSelectable:c,nodesConnectable:l,nodesFocusable:u,resizeObserver:f,noDragClassName:d,noPanClassName:p,disableKeyboardA11y:h,rfId:m,nodeTypes:w,nodeClickDistance:x,onError:v}){let{node:g,internals:b,isParent:E}=ne(V=>{let K=V.nodeLookup.get(e),J=V.parentLookup.has(e);return{node:K,internals:K.internals,isParent:J}},ie),S=g.type||"default",N=w?.[S]||La[S];N===void 0&&(v?.("003",me.error003(S)),S="default",N=w?.default||La.default);let P=!!(g.draggable||a&&typeof g.draggable>"u"),I=!!(g.selectable||c&&typeof g.selectable>"u"),F=!!(g.connectable||l&&typeof g.connectable>"u"),L=!!(g.focusable||u&&typeof g.focusable>"u"),B=re(),$=Xo(g),y=hh({node:g,nodeType:S,hasDimensions:$,resizeObserver:f}),_=oc({nodeRef:y,disabled:g.hidden||!P,noDragClassName:d,handleSelector:g.dragHandle,nodeId:e,isSelectable:I,nodeClickDistance:x}),k=rc();if(g.hidden)return null;let C=we(g),T=ih(g),A=I||P||t||n||o||r,R=n?V=>n(V,{...b.userNode}):void 0,H=o?V=>o(V,{...b.userNode}):void 0,X=r?V=>r(V,{...b.userNode}):void 0,G=i?V=>i(V,{...b.userNode}):void 0,q=s?V=>s(V,{...b.userNode}):void 0,Q=V=>{let{selectNodesOnDrag:K,nodeDragThreshold:J}=B.getState();I&&(!K||!P||J>0)&&ar({id:e,store:B,nodeRef:y}),t&&t(V,{...b.userNode})},ee=V=>{if(!(Ko(V.nativeEvent)||h)){if(To.includes(V.key)&&I){let K=V.key==="Escape";ar({id:e,store:B,unselect:K,nodeRef:y})}else if(P&&g.selected&&Object.prototype.hasOwnProperty.call(so,V.key)){V.preventDefault();let{ariaLabelConfig:K}=B.getState();B.setState({ariaLiveMessage:K["node.a11yDescription.ariaLiveMessage"]({direction:V.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),k({direction:so[V.key],factor:V.shiftKey?4:1})}}},Z=()=>{if(h||!y.current?.matches(":focus-visible"))return;let{transform:V,width:K,height:J,autoPanOnNodeFocus:O,setCenter:W}=B.getState();if(!O)return;Xn(new Map([[e,g]]),{x:0,y:0,width:K,height:J},V,!0).length>0||W(g.position.x+C.width/2,g.position.y+C.height/2,{zoom:V[2]})};return(0,z.jsx)("div",{className:se(["react-flow__node",`react-flow__node-${S}`,{[p]:P},g.className,{selected:g.selected,selectable:I,parent:E,draggable:P,dragging:_}]),ref:y,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:$?"visible":"hidden",...g.style,...T},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:R,onMouseMove:H,onMouseLeave:X,onContextMenu:G,onClick:Q,onDoubleClick:q,onKeyDown:L?ee:void 0,tabIndex:L?0:void 0,onFocus:L?Z:void 0,role:g.ariaRole??(L?"group":void 0),"aria-roledescription":"node","aria-describedby":h?void 0:`${Ua}-${m}`,"aria-label":g.ariaLabel,...g.domAttributes,children:(0,z.jsx)(Gp,{value:e,children:(0,z.jsx)(N,{id:e,data:g.data,type:S,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:g.selected??!1,selectable:I,draggable:P,deletable:g.deletable??!0,isConnectable:F,sourcePosition:g.sourcePosition,targetPosition:g.targetPosition,dragging:_,dragHandle:g.dragHandle,zIndex:b.z,parentId:g.parentId,...C})})})}var mh=(0,D.memo)(gh),xh=e=>({nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function cc(e){let{nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,onError:r}=ne(xh,ie),i=dh(e.onlyRenderVisibleElements),s=ph();return(0,z.jsx)("div",{className:"react-flow__nodes",style:lo,children:i.map(a=>(0,z.jsx)(mh,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:s,nodesDraggable:e.nodesDraggable??!0,nodesConnectable:t,nodesFocusable:n,elementsSelectable:o,nodeClickDistance:e.nodeClickDistance,onError:r},a))})}cc.displayName="NodeRenderer";var yh=(0,D.memo)(cc);function wh(e){return ne((0,D.useCallback)(n=>{if(!e)return n.edges.map(r=>r.id);let o=[];if(n.width&&n.height)for(let r of n.edges){let i=n.nodeLookup.get(r.source),s=n.nodeLookup.get(r.target);i&&s&&Rs({sourceNode:i,targetNode:s,width:n.width,height:n.height,transform:n.transform})&&o.push(r.id)}return o},[e]),ie)}var bh=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e}};return(0,z.jsx)("polyline",{className:"arrow",style:n,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},vh=({color:e="none",strokeWidth:t=1})=>{let n={strokeWidth:t,...e&&{stroke:e,fill:e}};return(0,z.jsx)("polyline",{className:"arrowclosed",style:n,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Ha={[bt.Arrow]:bh,[bt.ArrowClosed]:vh};function _h(e){let t=re();return(0,D.useMemo)(()=>Object.prototype.hasOwnProperty.call(Ha,e)?Ha[e]:(t.getState().onError?.("009",me.error009(e)),null),[e])}var kh=({id:e,type:t,color:n,width:o=12.5,height:r=12.5,markerUnits:i="strokeWidth",strokeWidth:s,orient:a="auto-start-reverse"})=>{let c=_h(t);return c?(0,z.jsx)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${o}`,markerHeight:`${r}`,viewBox:"-10 -10 20 20",markerUnits:i,orient:a,refX:"0",refY:"0",children:(0,z.jsx)(c,{color:n,strokeWidth:s})}):null},lc=({defaultColor:e,rfId:t})=>{let n=ne(i=>i.edges),o=ne(i=>i.defaultEdgeOptions),r=(0,D.useMemo)(()=>Xs(n,{id:t,defaultColor:e,defaultMarkerStart:o?.markerStart,defaultMarkerEnd:o?.markerEnd}),[n,o,t,e]);return r.length?(0,z.jsx)("svg",{className:"react-flow__marker","aria-hidden":"true",children:(0,z.jsx)("defs",{children:r.map(i=>(0,z.jsx)(kh,{id:i.id,type:i.type,color:i.color,width:i.width,height:i.height,markerUnits:i.markerUnits,strokeWidth:i.strokeWidth,orient:i.orient},i.id))})}):null};lc.displayName="MarkerDefinitions";var Sh=(0,D.memo)(lc);function uc({x:e,y:t,label:n,labelStyle:o,labelShowBg:r=!0,labelBgStyle:i,labelBgPadding:s=[2,4],labelBgBorderRadius:a=2,children:c,className:l,...u}){let[f,d]=(0,D.useState)({x:1,y:0,width:0,height:0}),p=se(["react-flow__edge-textwrapper",l]),h=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(h.current){let m=h.current.getBBox();d({x:m.x,y:m.y,width:m.width,height:m.height})}},[n]),n?(0,z.jsxs)("g",{transform:`translate(${e-f.width/2} ${t-f.height/2})`,className:p,visibility:f.width?"visible":"hidden",...u,children:[r&&(0,z.jsx)("rect",{width:f.width+2*s[0],x:-s[0],y:-s[1],height:f.height+2*s[1],className:"react-flow__edge-textbg",style:i,rx:a,ry:a}),(0,z.jsx)("text",{className:"react-flow__edge-text",y:f.height/2,dy:"0.3em",ref:h,style:o,children:n}),c]}):null}uc.displayName="EdgeText";var Eh=(0,D.memo)(uc);function uo({path:e,labelX:t,labelY:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c,interactionWidth:l=20,...u}){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("path",{...u,d:e,fill:"none",className:se(["react-flow__edge-path",u.className])}),l?(0,z.jsx)("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:l,className:"react-flow__edge-interaction"}):null,o&&xe(t)&&xe(n)?(0,z.jsx)(Eh,{x:t,y:n,label:o,labelStyle:r,labelShowBg:i,labelBgStyle:s,labelBgPadding:a,labelBgBorderRadius:c}):null]})}function Ba({pos:e,x1:t,y1:n,x2:o,y2:r}){return e===U.Left||e===U.Right?[.5*(t+o),n]:[t,.5*(n+r)]}function dc({sourceX:e,sourceY:t,sourcePosition:n=U.Bottom,targetX:o,targetY:r,targetPosition:i=U.Top}){let[s,a]=Ba({pos:n,x1:e,y1:t,x2:o,y2:r}),[c,l]=Ba({pos:i,x1:o,y1:r,x2:e,y2:t}),[u,f,d,p]=Kn({sourceX:e,sourceY:t,targetX:o,targetY:r,sourceControlX:s,sourceControlY:a,targetControlX:c,targetControlY:l});return[`M${e},${t} C${s},${a} ${c},${l} ${o},${r}`,u,f,d,p]}function fc(e){return(0,D.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s,targetPosition:a,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:w,interactionWidth:x})=>{let[v,g,b]=dc({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a}),E=e.isInternal?void 0:t;return(0,z.jsx)(uo,{id:E,path:v,labelX:g,labelY:b,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:w,interactionWidth:x})})}var Nh=fc({isInternal:!1}),pc=fc({isInternal:!0});Nh.displayName="SimpleBezierEdge";pc.displayName="SimpleBezierEdgeInternal";function hc(e){return(0,D.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:f,style:d,sourcePosition:p=U.Bottom,targetPosition:h=U.Top,markerEnd:m,markerStart:w,pathOptions:x,interactionWidth:v})=>{let[g,b,E]=rn({sourceX:n,sourceY:o,sourcePosition:p,targetX:r,targetY:i,targetPosition:h,borderRadius:x?.borderRadius,offset:x?.offset,stepPosition:x?.stepPosition}),S=e.isInternal?void 0:t;return(0,z.jsx)(uo,{id:S,path:g,labelX:b,labelY:E,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:f,style:d,markerEnd:m,markerStart:w,interactionWidth:v})})}var gc=hc({isInternal:!1}),mc=hc({isInternal:!0});gc.displayName="SmoothStepEdge";mc.displayName="SmoothStepEdgeInternal";function xc(e){return(0,D.memo)(({id:t,...n})=>{let o=e.isInternal?void 0:t;return(0,z.jsx)(gc,{...n,id:o,pathOptions:(0,D.useMemo)(()=>({borderRadius:0,offset:n.pathOptions?.offset}),[n.pathOptions?.offset])})})}var Ch=xc({isInternal:!1}),yc=xc({isInternal:!0});Ch.displayName="StepEdge";yc.displayName="StepEdgeInternal";function wc(e){return(0,D.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:h,interactionWidth:m})=>{let[w,x,v]=Qn({sourceX:n,sourceY:o,targetX:r,targetY:i}),g=e.isInternal?void 0:t;return(0,z.jsx)(uo,{id:g,path:w,labelX:x,labelY:v,label:s,labelStyle:a,labelShowBg:c,labelBgStyle:l,labelBgPadding:u,labelBgBorderRadius:f,style:d,markerEnd:p,markerStart:h,interactionWidth:m})})}var Mh=wc({isInternal:!1}),bc=wc({isInternal:!0});Mh.displayName="StraightEdge";bc.displayName="StraightEdgeInternal";function vc(e){return(0,D.memo)(({id:t,sourceX:n,sourceY:o,targetX:r,targetY:i,sourcePosition:s=U.Bottom,targetPosition:a=U.Top,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:w,pathOptions:x,interactionWidth:v})=>{let[g,b,E]=Un({sourceX:n,sourceY:o,sourcePosition:s,targetX:r,targetY:i,targetPosition:a,curvature:x?.curvature}),S=e.isInternal?void 0:t;return(0,z.jsx)(uo,{id:S,path:g,labelX:b,labelY:E,label:c,labelStyle:l,labelShowBg:u,labelBgStyle:f,labelBgPadding:d,labelBgBorderRadius:p,style:h,markerEnd:m,markerStart:w,interactionWidth:v})})}var Ih=vc({isInternal:!1}),_c=vc({isInternal:!0});Ih.displayName="BezierEdge";_c.displayName="BezierEdgeInternal";var Va={default:_c,straight:bc,step:yc,smoothstep:mc,simplebezier:pc},Ra={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null,zIndex:void 0},Ph=(e,t,n)=>n===U.Left?e-t:n===U.Right?e+t:e,zh=(e,t,n)=>n===U.Top?e-t:n===U.Bottom?e+t:e,Fa="react-flow__edgeupdater";function Wa({position:e,centerX:t,centerY:n,radius:o=10,onMouseDown:r,onMouseEnter:i,onMouseOut:s,type:a}){return(0,z.jsx)("circle",{onMouseDown:r,onMouseEnter:i,onMouseOut:s,className:se([Fa,`${Fa}-${a}`]),cx:Ph(t,o,e),cy:zh(n,o,e),r:o,stroke:"transparent",fill:"transparent"})}function Ah({isReconnectable:e,reconnectRadius:t,edge:n,sourceX:o,sourceY:r,targetX:i,targetY:s,sourcePosition:a,targetPosition:c,onReconnect:l,onReconnectStart:u,onReconnectEnd:f,setReconnecting:d,setUpdateHover:p}){let h=re(),m=(b,E)=>{if(b.button!==0)return;let{autoPanOnConnect:S,domNode:N,connectionMode:P,connectionRadius:I,lib:F,onConnectStart:L,cancelConnection:B,nodeLookup:$,rfId:y,panBy:_,updateConnection:k}=h.getState(),C=E.type==="target",T=(H,X)=>{d(!1),f?.(H,n,E.type,X)},A=H=>l?.(n,H),R=(H,X)=>{d(!0),u?.(b,n,E.type),L?.(H,X)};to.onPointerDown(b.nativeEvent,{autoPanOnConnect:S,connectionMode:P,connectionRadius:I,domNode:N,handleId:E.id,nodeId:E.nodeId,nodeLookup:$,isTarget:C,edgeUpdaterType:E.type,lib:F,flowId:y,cancelConnection:B,panBy:_,isValidConnection:(...H)=>h.getState().isValidConnection?.(...H)??!0,onConnect:A,onConnectStart:R,onConnectEnd:(...H)=>h.getState().onConnectEnd?.(...H),onReconnectEnd:T,updateConnection:k,getTransform:()=>h.getState().transform,getFromHandle:()=>h.getState().connection.fromHandle,dragThreshold:h.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},w=b=>m(b,{nodeId:n.target,id:n.targetHandle??null,type:"target"}),x=b=>m(b,{nodeId:n.source,id:n.sourceHandle??null,type:"source"}),v=()=>p(!0),g=()=>p(!1);return(0,z.jsxs)(z.Fragment,{children:[(e===!0||e==="source")&&(0,z.jsx)(Wa,{position:a,centerX:o,centerY:r,radius:t,onMouseDown:w,onMouseEnter:v,onMouseOut:g,type:"source"}),(e===!0||e==="target")&&(0,z.jsx)(Wa,{position:c,centerX:i,centerY:s,radius:t,onMouseDown:x,onMouseEnter:v,onMouseOut:g,type:"target"})]})}function Dh({id:e,edgesFocusable:t,edgesReconnectable:n,elementsSelectable:o,onClick:r,onDoubleClick:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,reconnectRadius:u,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,rfId:h,edgeTypes:m,noPanClassName:w,onError:x,disableKeyboardA11y:v}){let g=ne(W=>W.edgeLookup.get(e)),b=ne(W=>W.defaultEdgeOptions);g=b?{...b,...g}:g;let E=g.type||"default",S=m?.[E]||Va[E];S===void 0&&(x?.("011",me.error011(E)),E="default",S=m?.default||Va.default);let N=!!(g.focusable||t&&typeof g.focusable>"u"),P=typeof f<"u"&&(g.reconnectable||n&&typeof g.reconnectable>"u"),I=!!(g.selectable||o&&typeof g.selectable>"u"),F=(0,D.useRef)(null),[L,B]=(0,D.useState)(!1),[$,y]=(0,D.useState)(!1),_=re(),{zIndex:k=g.zIndex,sourceX:C,sourceY:T,targetX:A,targetY:R,sourcePosition:H,targetPosition:X}=ne((0,D.useCallback)(W=>{let Y=W.nodeLookup.get(g.source),j=W.nodeLookup.get(g.target);if(!Y||!j)return Ra;let te=Ws({id:e,sourceNode:Y,targetNode:j,sourceHandle:g.sourceHandle||null,targetHandle:g.targetHandle||null,connectionMode:W.connectionMode,onError:x}),oe=Vs({selected:g.selected,zIndex:g.zIndex,sourceNode:Y,targetNode:j,elevateOnSelect:W.elevateEdgesOnSelect,zIndexMode:W.zIndexMode});return{...te||Ra,zIndex:oe}},[g.source,g.target,g.sourceHandle,g.targetHandle,g.selected,g.zIndex,x]),ie),G=(0,D.useMemo)(()=>g.markerStart?`url('#${jn(g.markerStart,h)}')`:void 0,[g.markerStart,h]),q=(0,D.useMemo)(()=>g.markerEnd?`url('#${jn(g.markerEnd,h)}')`:void 0,[g.markerEnd,h]);if(g.hidden||C===null||T===null||A===null||R===null)return null;let Q=W=>{let{addSelectedEdges:Y,unselectNodesAndEdges:j,multiSelectionActive:te}=_.getState();I&&(_.setState({nodesSelectionActive:!1}),g.selected&&te?(j({nodes:[],edges:[g]}),F.current?.blur()):Y([e])),r&&r(W,g)},ee=i?W=>{i(W,{...g})}:void 0,Z=s?W=>{s(W,{...g})}:void 0,V=a?W=>{a(W,{...g})}:void 0,K=c?W=>{c(W,{...g})}:void 0,J=l?W=>{l(W,{...g})}:void 0,O=W=>{if(!v&&To.includes(W.key)&&I){let{unselectNodesAndEdges:Y,addSelectedEdges:j}=_.getState();W.key==="Escape"?(F.current?.blur(),Y({edges:[g]})):j([e])}};return(0,z.jsx)("svg",{style:{zIndex:k},children:(0,z.jsxs)("g",{className:se(["react-flow__edge",`react-flow__edge-${E}`,g.className,w,{selected:g.selected,animated:g.animated,inactive:!I&&!r,updating:L,selectable:I}]),onClick:Q,onDoubleClick:ee,onContextMenu:Z,onMouseEnter:V,onMouseMove:K,onMouseLeave:J,onKeyDown:N?O:void 0,tabIndex:N?0:void 0,role:g.ariaRole??(N?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":g.ariaLabel===null?void 0:g.ariaLabel||`Edge from ${g.source} to ${g.target}`,"aria-describedby":N?`${Qa}-${h}`:void 0,ref:F,...g.domAttributes,children:[!$&&(0,z.jsx)(S,{id:e,source:g.source,target:g.target,type:g.type,selected:g.selected,animated:g.animated,selectable:I,deletable:g.deletable??!0,label:g.label,labelStyle:g.labelStyle,labelShowBg:g.labelShowBg,labelBgStyle:g.labelBgStyle,labelBgPadding:g.labelBgPadding,labelBgBorderRadius:g.labelBgBorderRadius,sourceX:C,sourceY:T,targetX:A,targetY:R,sourcePosition:H,targetPosition:X,data:g.data,style:g.style,sourceHandleId:g.sourceHandle,targetHandleId:g.targetHandle,markerStart:G,markerEnd:q,pathOptions:"pathOptions"in g?g.pathOptions:void 0,interactionWidth:g.interactionWidth}),P&&(0,z.jsx)(Ah,{edge:g,isReconnectable:P,reconnectRadius:u,onReconnect:f,onReconnectStart:d,onReconnectEnd:p,sourceX:C,sourceY:T,targetX:A,targetY:R,sourcePosition:H,targetPosition:X,setUpdateHover:B,setReconnecting:y})]})})}var Th=(0,D.memo)(Dh),Oh=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function kc({defaultMarkerColor:e,onlyRenderVisibleElements:t,rfId:n,edgeTypes:o,noPanClassName:r,onReconnect:i,onEdgeContextMenu:s,onEdgeMouseEnter:a,onEdgeMouseMove:c,onEdgeMouseLeave:l,onEdgeClick:u,reconnectRadius:f,onEdgeDoubleClick:d,onReconnectStart:p,onReconnectEnd:h,disableKeyboardA11y:m}){let{edgesFocusable:w,edgesReconnectable:x,elementsSelectable:v,onError:g}=ne(Oh,ie),b=wh(t);return(0,z.jsxs)("div",{className:"react-flow__edges",children:[(0,z.jsx)(Sh,{defaultColor:e,rfId:n}),b.map(E=>(0,z.jsx)(Th,{id:E,edgesFocusable:w,edgesReconnectable:x,elementsSelectable:v,noPanClassName:r,onReconnect:i,onContextMenu:s,onMouseEnter:a,onMouseMove:c,onMouseLeave:l,onClick:u,reconnectRadius:f,onDoubleClick:d,onReconnectStart:p,onReconnectEnd:h,rfId:n,onError:g,edgeTypes:o,disableKeyboardA11y:m},E))]})}kc.displayName="EdgeRenderer";var Lh=(0,D.memo)(kc),Xa=e=>`translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;function $h({children:e}){let t=re(),n=(0,D.useRef)(null),[o]=(0,D.useState)(()=>t.getState().transform);return tc(()=>{let r=null,i=()=>{let s=t.getState().transform;r&&s[0]===r[0]&&s[1]===r[1]&&s[2]===r[2]||(r=s,n.current&&(n.current.style.transform=Xa(s)))};return i(),t.subscribe(i)},[t]),(0,z.jsx)("div",{ref:n,className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:Xa(o)},children:e})}function Hh(e){let t=an(),n=(0,D.useRef)(!1);(0,D.useEffect)(()=>{!n.current&&t.viewportInitialized&&e&&(setTimeout(()=>e(t),1),n.current=!0)},[e,t.viewportInitialized])}var Bh=e=>e.panZoom?.syncViewport;function Vh(e){let t=ne(Bh),n=re();return(0,D.useEffect)(()=>{e&&(t?.(e),n.setState({transform:[e.x,e.y,e.zoom]}))},[e,t]),null}function Ya(e){return e.connection.inProgress?{...e.connection,to:Nt(e.connection.to,e.transform)}:{...e.connection}}function Rh(e){return e?n=>{let o=Ya(n);return e(o)}:Ya}function Fh(e){let t=Rh(e);return ne(t,ie)}var Wh=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function Xh({containerStyle:e,style:t,type:n,component:o}){let{nodesConnectable:r,width:i,height:s,isValid:a,inProgress:c}=ne(Wh,ie);return!(i&&r&&c)?null:(0,z.jsx)("svg",{style:e,width:i,height:s,className:"react-flow__connectionline react-flow__container",children:(0,z.jsx)("g",{className:se(["react-flow__connection",qo(a)]),children:(0,z.jsx)(Sc,{style:t,type:n,CustomComponent:o,isValid:a})})})}var Sc=({style:e,type:t=Ce.Bezier,CustomComponent:n,isValid:o})=>{let{inProgress:r,from:i,fromNode:s,fromHandle:a,fromPosition:c,to:l,toNode:u,toHandle:f,toPosition:d,pointer:p}=Fh();if(!r)return;if(n)return(0,z.jsx)(n,{connectionLineType:t,connectionLineStyle:e,fromNode:s,fromHandle:a,fromX:i.x,fromY:i.y,toX:l.x,toY:l.y,fromPosition:c,toPosition:d,connectionStatus:qo(o),toNode:u,toHandle:f,pointer:p});let h="",m={sourceX:i.x,sourceY:i.y,sourcePosition:c,targetX:l.x,targetY:l.y,targetPosition:d};switch(t){case Ce.Bezier:[h]=Un(m);break;case Ce.SimpleBezier:[h]=dc(m);break;case Ce.Step:[h]=rn({...m,borderRadius:0});break;case Ce.SmoothStep:[h]=rn(m);break;default:[h]=Qn(m)}return(0,z.jsx)("path",{d:h,fill:"none",className:"react-flow__connection-path",style:e})};Sc.displayName="ConnectionLine";var Yh={};function Za(e=Yh){let t=(0,D.useRef)(e),n=re();(0,D.useEffect)(()=>{},[e])}function Zh(){let e=re(),t=(0,D.useRef)(!1);(0,D.useEffect)(()=>{},[])}function Ec({nodeTypes:e,edgeTypes:t,onInit:n,onNodeClick:o,onEdgeClick:r,onNodeDoubleClick:i,onEdgeDoubleClick:s,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,onSelectionContextMenu:f,onSelectionStart:d,onSelectionEnd:p,connectionLineType:h,connectionLineStyle:m,connectionLineComponent:w,connectionLineContainerStyle:x,selectionKeyCode:v,selectionOnDrag:g,selectionMode:b,multiSelectionKeyCode:E,panActivationKeyCode:S,zoomActivationKeyCode:N,deleteKeyCode:P,onlyRenderVisibleElements:I,elementsSelectable:F,defaultViewport:L,translateExtent:B,minZoom:$,maxZoom:y,preventScrolling:_,defaultMarkerColor:k,zoomOnScroll:C,zoomOnPinch:T,panOnScroll:A,panOnScrollSpeed:R,panOnScrollMode:H,zoomOnDoubleClick:X,panOnDrag:G,autoPanOnSelection:q,onPaneClick:Q,onPaneMouseEnter:ee,onPaneMouseMove:Z,onPaneMouseLeave:V,onPaneScroll:K,onPaneContextMenu:J,paneClickDistance:O,nodeClickDistance:W,onEdgeContextMenu:Y,onEdgeMouseEnter:j,onEdgeMouseMove:te,onEdgeMouseLeave:oe,reconnectRadius:ue,onReconnect:Ie,onReconnectStart:Se,onReconnectEnd:Ee,noDragClassName:Pe,noWheelClassName:zt,noPanClassName:Ge,disableKeyboardA11y:Ke,nodeExtent:be,rfId:ze,viewport:Ae,onViewportChange:Ue,nodesDraggable:po}){return Za(e),Za(t),Zh(),Hh(n),Vh(Ae),(0,z.jsx)(lh,{onPaneClick:Q,onPaneMouseEnter:ee,onPaneMouseMove:Z,onPaneMouseLeave:V,onPaneContextMenu:J,onPaneScroll:K,paneClickDistance:O,deleteKeyCode:P,selectionKeyCode:v,selectionOnDrag:g,selectionMode:b,onSelectionStart:d,onSelectionEnd:p,multiSelectionKeyCode:E,panActivationKeyCode:S,zoomActivationKeyCode:N,elementsSelectable:F,zoomOnScroll:C,zoomOnPinch:T,zoomOnDoubleClick:X,panOnScroll:A,panOnScrollSpeed:R,panOnScrollMode:H,panOnDrag:G,autoPanOnSelection:q,defaultViewport:L,translateExtent:B,minZoom:$,maxZoom:y,onSelectionContextMenu:f,preventScrolling:_,noDragClassName:Pe,noWheelClassName:zt,noPanClassName:Ge,disableKeyboardA11y:Ke,onViewportChange:Ue,isControlledViewport:!!Ae,children:(0,z.jsxs)($h,{children:[(0,z.jsx)(Lh,{edgeTypes:t,onEdgeClick:r,onEdgeDoubleClick:s,onReconnect:Ie,onReconnectStart:Se,onReconnectEnd:Ee,onlyRenderVisibleElements:I,onEdgeContextMenu:Y,onEdgeMouseEnter:j,onEdgeMouseMove:te,onEdgeMouseLeave:oe,reconnectRadius:ue,defaultMarkerColor:k,noPanClassName:Ge,disableKeyboardA11y:Ke,rfId:ze}),(0,z.jsx)(Xh,{style:m,type:h,component:w,containerStyle:x}),(0,z.jsx)("div",{className:"react-flow__edgelabel-renderer"}),(0,z.jsx)(yh,{nodeTypes:e,onNodeClick:o,onNodeDoubleClick:i,onNodeMouseEnter:a,onNodeMouseMove:c,onNodeMouseLeave:l,onNodeContextMenu:u,nodeClickDistance:W,onlyRenderVisibleElements:I,noPanClassName:Ge,noDragClassName:Pe,disableKeyboardA11y:Ke,nodeExtent:be,rfId:ze,nodesDraggable:po}),(0,z.jsx)("div",{className:"react-flow__viewport-portal"})]})})}Ec.displayName="GraphView";var qh=(0,D.memo)(Ec),Gh=Wo("React Flow","https://reactflow.dev/"),qa=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c=.5,maxZoom:l=2,nodeOrigin:u,nodeExtent:f,zIndexMode:d="basic"}={})=>{let p=new Map,h=new Map,m=new Map,w=new Map,x=o??t??[],v=n??e??[],g=u??[0,0],b=f??_t;nr(m,w,x);let{nodesInitialized:E}=Jn(v,p,h,{nodeOrigin:g,nodeExtent:b,zIndexMode:d}),S=[0,0,1];if(s&&r&&i){let N=kt(p,{filter:L=>!!((L.width||L.initialWidth)&&(L.height||L.initialHeight))}),{x:P,y:I,zoom:F}=on(N,r,i,c,l,a?.padding??.1);S=[P,I,F]}return{rfId:"1",width:r??0,height:i??0,transform:S,nodes:v,nodesInitialized:E,nodeLookup:p,parentLookup:h,edges:x,edgeLookup:w,connectionLookup:m,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:n!==void 0,hasDefaultEdges:o!==void 0,panZoom:null,minZoom:c,maxZoom:l,translateExtent:_t,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Xe.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:g,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:a,fitViewResolver:null,connection:{...Lo},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:Gh,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Oo,zIndexMode:d,defaultEdgeOptions:void 0,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map,onNodesDelete:void 0,onEdgesDelete:void 0,onDelete:void 0,onBeforeDelete:void 0,onViewportChangeStart:void 0,onViewportChange:void 0,onViewportChangeEnd:void 0,onNodeDragStart:void 0,onNodeDrag:void 0,onNodeDragStop:void 0,onSelectionDragStart:void 0,onSelectionDrag:void 0,onSelectionDragStop:void 0,onMoveStart:void 0,onMove:void 0,onMoveEnd:void 0,onConnect:void 0,onConnectStart:void 0,onConnectEnd:void 0,onClickConnectStart:void 0,onClickConnectEnd:void 0}},Kh=({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:f,zIndexMode:d})=>_a((p,h)=>{async function m(){let{nodeLookup:w,panZoom:x,fitViewOptions:v,fitViewResolver:g,width:b,height:E,minZoom:S,maxZoom:N}=h();x&&(await Ts({nodes:w,width:b,height:E,panZoom:x,minZoom:S,maxZoom:N},v),g?.resolve(!0),p({fitViewResolver:null}))}return{...qa({nodes:e,edges:t,width:r,height:i,fitView:s,fitViewOptions:a,minZoom:c,maxZoom:l,nodeOrigin:u,nodeExtent:f,defaultNodes:n,defaultEdges:o,zIndexMode:d}),setNodes:w=>{let{nodeLookup:x,parentLookup:v,nodeOrigin:g,nodeExtent:b,elevateNodesOnSelect:E,fitViewQueued:S,zIndexMode:N,nodesSelectionActive:P}=h(),{nodesInitialized:I,hasSelectedNodes:F}=Jn(w,x,v,{nodeOrigin:g,nodeExtent:b,elevateNodesOnSelect:E,checkEquality:!0,zIndexMode:N}),L=P&&F;S&&I?(m(),p({nodes:w,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:L})):p({nodes:w,nodesInitialized:I,nodesSelectionActive:L})},setEdges:w=>{let{connectionLookup:x,edgeLookup:v}=h();nr(x,v,w),p({edges:w})},setDefaultNodesAndEdges:(w,x)=>{if(w){let{setNodes:v}=h();v(w),p({hasDefaultNodes:!0})}if(x){let{setEdges:v}=h();v(x),p({hasDefaultEdges:!0})}},updateNodeInternals:w=>{let{triggerNodeChanges:x,nodeLookup:v,parentLookup:g,domNode:b,nodeOrigin:E,nodeExtent:S,debug:N,fitViewQueued:P,zIndexMode:I}=h(),{changes:F,updatedInternals:L}=Gs(w,v,g,b,E,S,I);L&&(Zs(v,g,{nodeOrigin:E,nodeExtent:S,zIndexMode:I}),P?(m(),p({fitViewQueued:!1,fitViewOptions:void 0})):p({}),F?.length>0&&(N&&console.log("React Flow: trigger node changes",F),x?.(F)))},updateNodePositions:(w,x=!1)=>{let v=[],g=[],{nodeLookup:b,triggerNodeChanges:E,connection:S,updateConnection:N,onNodesChangeMiddlewareMap:P}=h();for(let[I,F]of w){let L=b.get(I),B=!!(L?.expandParent&&L?.parentId&&F?.position),$={id:I,type:"position",position:B?{x:Math.max(0,F.position.x),y:Math.max(0,F.position.y)}:F.position,dragging:x};if(L&&S.inProgress&&S.fromNode.id===L.id){let y=Ye(L,S.fromHandle,U.Left,!0);N({...S,from:y})}B&&L.parentId&&v.push({id:I,parentId:L.parentId,rect:{...F.internals.positionAbsolute,width:F.measured.width??0,height:F.measured.height??0}}),g.push($)}if(v.length>0){let{parentLookup:I,nodeOrigin:F}=h(),L=eo(v,b,I,F);g.push(...L)}for(let I of P.values())g=I(g);E(g)},triggerNodeChanges:w=>{let{onNodesChange:x,setNodes:v,nodes:g,hasDefaultNodes:b,debug:E}=h();if(w?.length){if(b){let S=cr(w,g);v(S)}E&&console.log("React Flow: trigger node changes",w),x?.(w)}},triggerEdgeChanges:w=>{let{onEdgesChange:x,setEdges:v,edges:g,hasDefaultEdges:b,debug:E}=h();if(w?.length){if(b){let S=Pp(w,g);v(S)}E&&console.log("React Flow: trigger edge changes",w),x?.(w)}},addSelectedNodes:w=>{let{multiSelectionActive:x,edgeLookup:v,nodeLookup:g,triggerNodeChanges:b,triggerEdgeChanges:E}=h();if(x){let S=w.map(N=>dt(N,!0));b(S);return}b(It(g,new Set([...w]),!0)),E(It(v))},addSelectedEdges:w=>{let{multiSelectionActive:x,edgeLookup:v,nodeLookup:g,triggerNodeChanges:b,triggerEdgeChanges:E}=h();if(x){let S=w.map(N=>dt(N,!0));E(S);return}E(It(v,new Set([...w]))),b(It(g,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:x}={})=>{let{edges:v,nodes:g,nodeLookup:b,triggerNodeChanges:E,triggerEdgeChanges:S}=h(),N=w||g,P=x||v,I=[];for(let L of N){if(!L.selected)continue;let B=b.get(L.id);B&&(B.selected=!1),I.push(dt(L.id,!1))}let F=[];for(let L of P)L.selected&&F.push(dt(L.id,!1));E(I),S(F)},setMinZoom:w=>{let{panZoom:x,maxZoom:v}=h();x?.setScaleExtent([w,v]),p({minZoom:w})},setMaxZoom:w=>{let{panZoom:x,minZoom:v}=h();x?.setScaleExtent([v,w]),p({maxZoom:w})},setTranslateExtent:w=>{h().panZoom?.setTranslateExtent(w),p({translateExtent:w})},resetSelectedElements:()=>{let{edges:w,nodes:x,triggerNodeChanges:v,triggerEdgeChanges:g,elementsSelectable:b}=h();if(!b)return;let E=x.reduce((N,P)=>P.selected?[...N,dt(P.id,!1)]:N,[]),S=w.reduce((N,P)=>P.selected?[...N,dt(P.id,!1)]:N,[]);v(E),g(S)},setNodeExtent:w=>{let{nodes:x,nodeLookup:v,parentLookup:g,nodeOrigin:b,elevateNodesOnSelect:E,nodeExtent:S,zIndexMode:N}=h();w[0][0]===S[0][0]&&w[0][1]===S[0][1]&&w[1][0]===S[1][0]&&w[1][1]===S[1][1]||(Jn(x,v,g,{nodeOrigin:b,nodeExtent:w,elevateNodesOnSelect:E,checkEquality:!1,zIndexMode:N}),p({nodeExtent:w}))},panBy:w=>{let{transform:x,width:v,height:g,panZoom:b,translateExtent:E}=h();return Ks({delta:w,panZoom:b,transform:x,translateExtent:E,width:v,height:g})},setCenter:async(w,x,v)=>{let{width:g,height:b,maxZoom:E,panZoom:S}=h();if(!S)return!1;let N=typeof v?.zoom<"u"?v.zoom:E;return await S.setViewport({x:g/2-w*N,y:b/2-x*N,zoom:N},{duration:v?.duration,ease:v?.ease,interpolate:v?.interpolate}),!0},cancelConnection:()=>{p({connection:{...Lo}})},updateConnection:w=>{p({connection:w})},reset:()=>p({...qa()})}},Object.is);function ur({initialNodes:e,initialEdges:t,defaultNodes:n,defaultEdges:o,initialWidth:r,initialHeight:i,initialMinZoom:s,initialMaxZoom:a,initialFitViewOptions:c,fitView:l,nodeOrigin:u,nodeExtent:f,zIndexMode:d,children:p}){let[h]=(0,D.useState)(()=>Kh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,width:r,height:i,fitView:l,minZoom:s,maxZoom:a,fitViewOptions:c,nodeOrigin:u,nodeExtent:f,zIndexMode:d}));return(0,z.jsx)(up,{value:h,children:(0,z.jsx)(Op,{children:(0,z.jsx)(Up,{children:p})})})}function Uh({children:e,nodes:t,edges:n,defaultNodes:o,defaultEdges:r,width:i,height:s,fitView:a,fitViewOptions:c,minZoom:l,maxZoom:u,nodeOrigin:f,nodeExtent:d,zIndexMode:p}){return(0,D.useContext)(ao)?(0,z.jsx)(z.Fragment,{children:e}):(0,z.jsx)(ur,{initialNodes:t,initialEdges:n,defaultNodes:o,defaultEdges:r,initialWidth:i,initialHeight:s,fitView:a,initialFitViewOptions:c,initialMinZoom:l,initialMaxZoom:u,nodeOrigin:f,nodeExtent:d,zIndexMode:p,children:e})}var Qh={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function jh({nodes:e,edges:t,defaultNodes:n,defaultEdges:o,className:r,nodeTypes:i,edgeTypes:s,onNodeClick:a,onEdgeClick:c,onInit:l,onMove:u,onMoveStart:f,onMoveEnd:d,onConnect:p,onConnectStart:h,onConnectEnd:m,onClickConnectStart:w,onClickConnectEnd:x,onNodeMouseEnter:v,onNodeMouseMove:g,onNodeMouseLeave:b,onNodeContextMenu:E,onNodeDoubleClick:S,onNodeDragStart:N,onNodeDrag:P,onNodeDragStop:I,onNodesDelete:F,onEdgesDelete:L,onDelete:B,onSelectionChange:$,onSelectionDragStart:y,onSelectionDrag:_,onSelectionDragStop:k,onSelectionContextMenu:C,onSelectionStart:T,onSelectionEnd:A,onBeforeDelete:R,connectionMode:H,connectionLineType:X=Ce.Bezier,connectionLineStyle:G,connectionLineComponent:q,connectionLineContainerStyle:Q,deleteKeyCode:ee="Backspace",selectionKeyCode:Z="Shift",selectionOnDrag:V=!1,selectionMode:K=at.Full,panActivationKeyCode:J="Space",multiSelectionKeyCode:O=Ct()?"Meta":"Control",zoomActivationKeyCode:W=Ct()?"Meta":"Control",snapToGrid:Y,snapGrid:j,onlyRenderVisibleElements:te=!1,selectNodesOnDrag:oe,nodesDraggable:ue,autoPanOnNodeFocus:Ie,nodesConnectable:Se,nodesFocusable:Ee,nodeOrigin:Pe=ja,edgesFocusable:zt,edgesReconnectable:Ge,elementsSelectable:Ke=!0,defaultViewport:be=kp,minZoom:ze=.5,maxZoom:Ae=2,translateExtent:Ue=_t,preventScrolling:po=!0,nodeExtent:ho,defaultMarkerColor:Bc="#b1b1b7",zoomOnScroll:Vc=!0,zoomOnPinch:Rc=!0,panOnScroll:Fc=!1,panOnScrollSpeed:Wc=.5,panOnScrollMode:Xc=$e.Free,zoomOnDoubleClick:Yc=!0,panOnDrag:Zc=!0,onPaneClick:qc,onPaneMouseEnter:Gc,onPaneMouseMove:Kc,onPaneMouseLeave:Uc,onPaneScroll:Qc,onPaneContextMenu:jc,paneClickDistance:Jc=1,nodeClickDistance:el=0,children:tl,onReconnect:nl,onReconnectStart:ol,onReconnectEnd:rl,onEdgeContextMenu:il,onEdgeDoubleClick:sl,onEdgeMouseEnter:al,onEdgeMouseMove:cl,onEdgeMouseLeave:ll,reconnectRadius:ul=10,onNodesChange:dl,onEdgesChange:fl,noDragClassName:pl="nodrag",noWheelClassName:hl="nowheel",noPanClassName:xr="nopan",fitView:yr,fitViewOptions:wr,connectOnClick:gl,attributionPosition:ml,proOptions:xl,defaultEdgeOptions:yl,elevateNodesOnSelect:wl=!0,elevateEdgesOnSelect:bl=!1,disableKeyboardA11y:br=!1,autoPanOnConnect:vl,autoPanOnNodeDrag:_l,autoPanOnSelection:kl=!0,autoPanSpeed:Sl,connectionRadius:El,isValidConnection:Nl,onError:Cl,style:Ml,id:vr,nodeDragThreshold:Il,connectionDragThreshold:Pl,viewport:zl,onViewportChange:Al,width:Dl,height:Tl,colorMode:Ol="light",debug:Ll,onScroll:_r,ariaLabelConfig:$l,zIndexMode:kr="basic",...Hl},Bl){let go=vr||"1",Vl=Cp(Ol),Rl=(0,D.useCallback)(Sr=>{Sr.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),_r?.(Sr)},[_r]);return(0,z.jsx)("div",{"data-testid":"rf__wrapper",...Hl,onScroll:Rl,style:{...Ml,...Qh},ref:Bl,className:se(["react-flow",r,Vl]),id:vr,role:"application",children:(0,z.jsxs)(Uh,{nodes:e,edges:t,width:Dl,height:Tl,fitView:yr,fitViewOptions:wr,minZoom:ze,maxZoom:Ae,nodeOrigin:Pe,nodeExtent:ho,zIndexMode:kr,children:[(0,z.jsx)(Np,{nodes:e,edges:t,defaultNodes:n,defaultEdges:o,onConnect:p,onConnectStart:h,onConnectEnd:m,onClickConnectStart:w,onClickConnectEnd:x,nodesDraggable:ue,autoPanOnNodeFocus:Ie,nodesConnectable:Se,nodesFocusable:Ee,edgesFocusable:zt,edgesReconnectable:Ge,elementsSelectable:Ke,elevateNodesOnSelect:wl,elevateEdgesOnSelect:bl,minZoom:ze,maxZoom:Ae,nodeExtent:ho,onNodesChange:dl,onEdgesChange:fl,snapToGrid:Y,snapGrid:j,connectionMode:H,translateExtent:Ue,connectOnClick:gl,defaultEdgeOptions:yl,fitView:yr,fitViewOptions:wr,onNodesDelete:F,onEdgesDelete:L,onDelete:B,onNodeDragStart:N,onNodeDrag:P,onNodeDragStop:I,onSelectionDrag:_,onSelectionDragStart:y,onSelectionDragStop:k,onMove:u,onMoveStart:f,onMoveEnd:d,noPanClassName:xr,nodeOrigin:Pe,rfId:go,autoPanOnConnect:vl,autoPanOnNodeDrag:_l,autoPanSpeed:Sl,onError:Cl,connectionRadius:El,isValidConnection:Nl,selectNodesOnDrag:oe,nodeDragThreshold:Il,connectionDragThreshold:Pl,onBeforeDelete:R,debug:Ll,ariaLabelConfig:$l,zIndexMode:kr}),(0,z.jsx)(qh,{onInit:l,onNodeClick:a,onEdgeClick:c,onNodeMouseEnter:v,onNodeMouseMove:g,onNodeMouseLeave:b,onNodeContextMenu:E,onNodeDoubleClick:S,nodeTypes:i,edgeTypes:s,connectionLineType:X,connectionLineStyle:G,connectionLineComponent:q,connectionLineContainerStyle:Q,selectionKeyCode:Z,selectionOnDrag:V,selectionMode:K,deleteKeyCode:ee,multiSelectionKeyCode:O,panActivationKeyCode:J,zoomActivationKeyCode:W,onlyRenderVisibleElements:te,defaultViewport:be,translateExtent:Ue,minZoom:ze,maxZoom:Ae,preventScrolling:po,zoomOnScroll:Vc,zoomOnPinch:Rc,zoomOnDoubleClick:Yc,panOnScroll:Fc,panOnScrollSpeed:Wc,panOnScrollMode:Xc,panOnDrag:Zc,autoPanOnSelection:kl,onPaneClick:qc,onPaneMouseEnter:Gc,onPaneMouseMove:Kc,onPaneMouseLeave:Uc,onPaneScroll:Qc,onPaneContextMenu:jc,paneClickDistance:Jc,nodeClickDistance:el,onSelectionContextMenu:C,onSelectionStart:T,onSelectionEnd:A,onReconnect:nl,onReconnectStart:ol,onReconnectEnd:rl,onEdgeContextMenu:il,onEdgeDoubleClick:sl,onEdgeMouseEnter:al,onEdgeMouseMove:cl,onEdgeMouseLeave:ll,reconnectRadius:ul,defaultMarkerColor:Bc,noDragClassName:pl,noWheelClassName:hl,noPanClassName:xr,rfId:go,disableKeyboardA11y:br,nodeExtent:ho,viewport:zl,onViewportChange:Al,nodesDraggable:ue}),(0,z.jsx)(_p,{onSelectionChange:$}),tl,(0,z.jsx)(xp,{proOptions:xl,position:ml}),(0,z.jsx)(mp,{rfId:go,disableKeyboardA11y:br})]})})}var Nc=ec(jh);var ev=me.error014();function Jh({dimensions:e,lineWidth:t,variant:n,className:o}){return(0,z.jsx)("path",{strokeWidth:t,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:se(["react-flow__background-pattern",n,o])})}function eg({radius:e,className:t}){return(0,z.jsx)("circle",{cx:e,cy:e,r:e,className:se(["react-flow__background-pattern","dots",t])})}var Me;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Me||(Me={}));var tg={[Me.Dots]:1,[Me.Lines]:1,[Me.Cross]:6},ng=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function Cc({id:e,variant:t=Me.Dots,gap:n=20,size:o,lineWidth:r=1,offset:i=0,color:s,bgColor:a,style:c,className:l,patternClassName:u}){let f=(0,D.useRef)(null),{transform:d,patternId:p}=ne(ng,ie),h=o||tg[t],m=t===Me.Dots,w=t===Me.Cross,x=Array.isArray(n)?n:[n,n],v=[x[0]*d[2]||1,x[1]*d[2]||1],g=h*d[2],b=Array.isArray(i)?i:[i,i],E=w?[g,g]:v,S=[b[0]*d[2]+E[0]/2,b[1]*d[2]+E[1]/2],N=`${p}${e||""}`;return(0,z.jsxs)("svg",{className:se(["react-flow__background",l]),style:{...c,...lo,"--xy-background-color-props":a,"--xy-background-pattern-color-props":s},ref:f,"data-testid":"rf__background",children:[(0,z.jsx)("pattern",{id:N,x:d[0]%v[0],y:d[1]%v[1],width:v[0],height:v[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:m?(0,z.jsx)(eg,{radius:g/2,className:u}):(0,z.jsx)(Jh,{dimensions:E,lineWidth:r,variant:t,className:u})}),(0,z.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${N})`})]})}Cc.displayName="Background";var Mc=(0,D.memo)(Cc);function og(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,z.jsx)("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function rg(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:(0,z.jsx)("path",{d:"M0 0h32v4.2H0z"})})}function ig(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:(0,z.jsx)("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function sg(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function ag(){return(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:(0,z.jsx)("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function io({children:e,className:t,...n}){return(0,z.jsx)("button",{type:"button",className:se(["react-flow__controls-button",t]),...n,children:e})}var cg=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function Ic({style:e,showZoom:t=!0,showFitView:n=!0,showInteractive:o=!0,fitViewOptions:r,onZoomIn:i,onZoomOut:s,onFitView:a,onInteractiveChange:c,className:l,children:u,position:f="bottom-left",orientation:d="vertical","aria-label":p}){let h=re(),{isInteractive:m,minZoomReached:w,maxZoomReached:x,ariaLabelConfig:v}=ne(cg,ie),{zoomIn:g,zoomOut:b,fitView:E}=an(),S=()=>{g(),i?.()},N=()=>{b(),s?.()},P=()=>{E(r),a?.()},I=()=>{h.setState({nodesDraggable:!m,nodesConnectable:!m,elementsSelectable:!m}),c?.(!m)};return(0,z.jsxs)(co,{className:se(["react-flow__controls",d==="horizontal"?"horizontal":"vertical",l]),position:f,style:e,"data-testid":"rf__controls","aria-label":p??v["controls.ariaLabel"],children:[t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(io,{onClick:S,className:"react-flow__controls-zoomin",title:v["controls.zoomIn.ariaLabel"],"aria-label":v["controls.zoomIn.ariaLabel"],disabled:x,children:(0,z.jsx)(og,{})}),(0,z.jsx)(io,{onClick:N,className:"react-flow__controls-zoomout",title:v["controls.zoomOut.ariaLabel"],"aria-label":v["controls.zoomOut.ariaLabel"],disabled:w,children:(0,z.jsx)(rg,{})})]}),n&&(0,z.jsx)(io,{className:"react-flow__controls-fitview",onClick:P,title:v["controls.fitView.ariaLabel"],"aria-label":v["controls.fitView.ariaLabel"],children:(0,z.jsx)(ig,{})}),o&&(0,z.jsx)(io,{className:"react-flow__controls-interactive",onClick:I,title:v["controls.interactive.ariaLabel"],"aria-label":v["controls.interactive.ariaLabel"],children:m?(0,z.jsx)(ag,{}):(0,z.jsx)(sg,{})}),u]})}Ic.displayName="Controls";var Pc=(0,D.memo)(Ic);function lg({id:e,x:t,y:n,width:o,height:r,style:i,color:s,strokeColor:a,strokeWidth:c,className:l,borderRadius:u,shapeRendering:f,selected:d,onClick:p}){let{background:h,backgroundColor:m}=i||{},w=s||h||m;return(0,z.jsx)("rect",{className:se(["react-flow__minimap-node",{selected:d},l]),x:t,y:n,rx:u,ry:u,width:o,height:r,style:{fill:w,stroke:a,strokeWidth:c},shapeRendering:f,onClick:p?x=>p(x,e):void 0})}var ug=(0,D.memo)(lg),dg=e=>e.nodes.map(t=>t.id),sr=e=>e instanceof Function?e:()=>e;function fg({nodeStrokeColor:e,nodeColor:t,nodeClassName:n="",nodeBorderRadius:o=5,nodeStrokeWidth:r,nodeComponent:i=ug,onClick:s}){let a=ne(dg,ie),c=sr(t),l=sr(e),u=sr(n),f=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return(0,z.jsx)(z.Fragment,{children:a.map(d=>(0,z.jsx)(hg,{id:d,nodeColorFunc:c,nodeStrokeColorFunc:l,nodeClassNameFunc:u,nodeBorderRadius:o,nodeStrokeWidth:r,NodeComponent:i,onClick:s,shapeRendering:f},d))})}function pg({id:e,nodeColorFunc:t,nodeStrokeColorFunc:n,nodeClassNameFunc:o,nodeBorderRadius:r,nodeStrokeWidth:i,shapeRendering:s,NodeComponent:a,onClick:c}){let{node:l,x:u,y:f,width:d,height:p}=ne(h=>{let m=h.nodeLookup.get(e);if(!m)return{node:void 0,x:0,y:0,width:0,height:0};let w=m.internals.userNode,{x,y:v}=m.internals.positionAbsolute,{width:g,height:b}=we(w);return{node:w,x,y:v,width:g,height:b}},ie);return!l||l.hidden||!Xo(l)?null:(0,z.jsx)(a,{x:u,y:f,width:d,height:p,style:l.style,selected:!!l.selected,className:o(l),color:t(l),borderRadius:r,strokeColor:n(l),strokeWidth:i,shapeRendering:s,onClick:c,id:l.id})}var hg=(0,D.memo)(pg),gg=(0,D.memo)(fg),mg=200,xg=150,yg=e=>!e.hidden,wg=e=>{let t={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]},n=!1;for(let o of e.nodeLookup.values())if(!o.hidden){n=!0;break}return{viewBB:t,boundingRect:n?Ro(kt(e.nodeLookup,{filter:yg}),t):t,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},Ga=(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,bg=(e,t)=>Ga(e.viewBB,t.viewBB)&&Ga(e.boundingRect,t.boundingRect)&&e.rfId===t.rfId&&e.panZoom===t.panZoom&&e.translateExtent===t.translateExtent&&e.flowWidth===t.flowWidth&&e.flowHeight===t.flowHeight&&e.ariaLabelConfig===t.ariaLabelConfig,vg="react-flow__minimap-desc";function zc({style:e,className:t,nodeStrokeColor:n,nodeColor:o,nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:s,nodeComponent:a,bgColor:c,maskColor:l,maskStrokeColor:u,maskStrokeWidth:f,position:d="bottom-right",onClick:p,onNodeClick:h,pannable:m=!1,zoomable:w=!1,ariaLabel:x,inversePan:v,zoomStep:g=1,offsetScale:b=5}){let E=re(),S=(0,D.useRef)(null),{boundingRect:N,panZoom:P,viewBB:I,rfId:F,translateExtent:L,flowWidth:B,flowHeight:$,ariaLabelConfig:y}=ne(wg,bg),_=e?.width??mg,k=e?.height??xg,C=N.width/_,T=N.height/k,A=Math.max(C,T),R=A*_,H=A*k,X=b*A,G=N.x-(R-N.width)/2-X,q=N.y-(H-N.height)/2-X,Q=R+X*2,ee=H+X*2,Z=`${vg}-${F}`,V=(0,D.useRef)(0),K=(0,D.useRef)();V.current=A,(0,D.useEffect)(()=>{let j=E.getState().panZoom;if(S.current&&j)return K.current=na({domNode:S.current,panZoom:j,getTransform:()=>E.getState().transform,getViewScale:()=>V.current}),()=>{K.current?.destroy()}},[P]),(0,D.useEffect)(()=>{K.current?.update({translateExtent:L,width:B,height:$,inversePan:v,pannable:m,zoomStep:g,zoomable:w})},[m,w,v,g,L,B,$]);let J=p?j=>{let[te,oe]=K.current?.pointer(j)||[0,0];p(j,{x:te,y:oe})}:void 0,O=(0,D.useCallback)((j,te)=>{let oe=E.getState().nodeLookup.get(te).internals.userNode;h?.(j,oe)},[h]),W=h?O:void 0,Y=x??y["minimap.ariaLabel"];return(0,z.jsx)(co,{position:d,style:{...e,"--xy-minimap-background-color-props":typeof c=="string"?c:void 0,"--xy-minimap-mask-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-mask-stroke-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-width-props":typeof f=="number"?f*A:void 0,"--xy-minimap-node-background-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-color-props":typeof n=="string"?n:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:se(["react-flow__minimap",t]),"data-testid":"rf__minimap",children:(0,z.jsxs)("svg",{width:_,height:k,viewBox:`${G} ${q} ${Q} ${ee}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":Z,ref:S,onClick:J,children:[Y&&(0,z.jsx)("title",{id:Z,children:Y}),(0,z.jsx)(gg,{onClick:W,nodeColor:o,nodeStrokeColor:n,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:s,nodeComponent:a}),(0,z.jsx)("path",{className:"react-flow__minimap-mask",d:`M${G-X},${q-X}h${Q+X*2}v${ee+X*2}h${-Q-X*2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}zc.displayName="MiniMap";var tv=(0,D.memo)(zc),_g=e=>t=>e?`${Math.max(1/t.transform[2],1)}`:void 0,kg={[Ze.Line]:"right",[Ze.Handle]:"bottom-right"};function Sg({nodeId:e,position:t,variant:n=Ze.Handle,className:o,style:r=void 0,children:i,color:s,minWidth:a=10,minHeight:c=10,maxWidth:l=Number.MAX_VALUE,maxHeight:u=Number.MAX_VALUE,keepAspectRatio:f=!1,resizeDirection:d,autoScale:p=!0,shouldResize:h,onResizeStart:m,onResize:w,onResizeEnd:x}){let v=ic(),g=typeof e=="string"?e:v,b=re(),E=(0,D.useRef)(null),S=n===Ze.Handle,N=ne((0,D.useCallback)(_g(S&&p),[S,p]),ie),P=(0,D.useRef)(null),I=t??kg[n];(0,D.useEffect)(()=>{if(!(!E.current||!g))return P.current||(P.current=aa({domNode:E.current,nodeId:g,getStoreItems:()=>{let{nodeLookup:L,transform:B,snapGrid:$,snapToGrid:y,nodeOrigin:_,domNode:k}=b.getState();return{nodeLookup:L,transform:B,snapGrid:$,snapToGrid:y,nodeOrigin:_,paneDomNode:k}},onChange:(L,B)=>{let{triggerNodeChanges:$,nodeLookup:y,parentLookup:_,nodeOrigin:k}=b.getState(),C=[],T={x:L.x,y:L.y},A=y.get(g);if(A&&A.expandParent&&A.parentId){let R=A.origin??k,H=L.width??A.measured.width??0,X=L.height??A.measured.height??0,G={id:A.id,parentId:A.parentId,rect:{width:H,height:X,...Yo({x:L.x??A.position.x,y:L.y??A.position.y},{width:H,height:X},A.parentId,y,R)}},q=eo([G],y,_,k);C.push(...q),T.x=L.x?Math.max(R[0]*H,L.x):void 0,T.y=L.y?Math.max(R[1]*X,L.y):void 0}if(T.x!==void 0&&T.y!==void 0){let R={id:g,type:"position",position:{...T}};C.push(R)}if(L.width!==void 0&&L.height!==void 0){let H={id:g,type:"dimensions",resizing:!0,setAttributes:d?d==="horizontal"?"width":"height":!0,dimensions:{width:L.width,height:L.height}};C.push(H)}for(let R of B){let H={...R,type:"position"};C.push(H)}$(C)},onEnd:({width:L,height:B})=>{let $={id:g,type:"dimensions",resizing:!1,dimensions:{width:L,height:B}};b.getState().triggerNodeChanges([$])}})),P.current.update({controlPosition:I,boundaries:{minWidth:a,minHeight:c,maxWidth:l,maxHeight:u},keepAspectRatio:f,resizeDirection:d,onResizeStart:m,onResize:w,onResizeEnd:x,shouldResize:h}),()=>{P.current?.destroy()}},[I,a,c,l,u,f,m,w,x,h]);let F=I.split("-");return(0,z.jsx)("div",{className:se(["react-flow__resize-control","nodrag",...F,n,o]),ref:E,style:{...r,scale:N,...s&&{[S?"backgroundColor":"borderColor"]:s}},children:i})}var nv=(0,D.memo)(Sg);var pt={workspace:"all",status:"all",kind:"all",archived:!1,query:""};function dr(e){return e.pending?"waiting":e.running===!0?"running":e.unread?"unread":e.running===!1?"idle":"unknown"}function fr(e,t,n,o={}){let r=new Set(e.archivedSessionIds),i=e.sessions.filter(m=>!m.blank&&m.origin!=="subagent"&&(t.archived||!r.has(m.id))),s=new Map(i.map(m=>[m.id,m])),a=new Set(e.workspaces.flatMap(m=>[...m.sessionIds])),c=i.filter(m=>!a.has(m.id)),l=[...e.workspaces];c.length&&l.push({id:"__ungrouped__",title:"\u672A\u5206\u7EC4",path:"",sessionIds:c.map(m=>m.id),virtual:!0});let u=[],f=[],d=t.query.trim().toLocaleLowerCase(),p=0,h=0;return l.forEach((m,w)=>{if(t.workspace!=="all"&&t.workspace!==m.id)return;let x=m.sessionIds.flatMap(B=>s.has(B)?[s.get(B)]:[]),v=!d||(m.title+" "+m.path).toLocaleLowerCase().includes(d),g=x.filter(B=>(v||B.title.toLocaleLowerCase().includes(d))&&(t.status==="all"||dr(B)===t.status)),b=x.map(dr),E=["waiting","running","unread","idle"].find(B=>b.includes(B))??"unknown",S=v&&(t.status==="all"||E===t.status);if(!g.length&&!S)return;let N="workspace:"+m.id,P={x:w%3*540+280,y:Math.floor(w/3)*620+290},I=n.collapsed.includes(m.id);if(t.kind!=="session"&&u.push({id:N,type:"bubble",position:n.positions[N]??P,data:{kind:"workspace",entityId:m.id,title:m.title,path:m.path,status:E,count:g.length,total:x.length,virtual:m.virtual,collapsed:I}}),t.kind==="workspace")return;p+=g.length;let F=o[m.id]??20,L=I?[]:g.slice(0,F);h+=g.length-L.length,L.forEach(B=>{let $=m.sessionIds.indexOf(B.id),y=Math.floor($/12),_=$*2.399963229728653-Math.PI/2,k=185+y*120,C="session:"+B.id;u.push({id:C,type:"bubble",position:n.positions[C]??{x:P.x+Math.cos(_)*k+14,y:P.y+Math.sin(_)*k+14},data:{kind:"session",entityId:B.id,title:B.title,status:dr(B),path:B.cwd,workspaceId:m.id,archived:r.has(B.id),updatedAt:B.updatedAt}}),t.kind!=="session"&&f.push({id:N+"->"+C,source:N,target:C})})}),{nodes:u,edges:f,matched:p,total:i.length,hidden:h}}var cn=()=>({schemaVersion:1,revision:0,positions:{},collapsed:[],views:{}}),pr=e=>!["__proto__","prototype","constructor"].includes(e)&&e.length<1e3,Pt=e=>!!e&&typeof e=="object"&&!Array.isArray(e),Ac=e=>Pt(e)&&typeof e.x=="number"&&typeof e.y=="number"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Math.abs(e.x)<1e8&&Math.abs(e.y)<1e8;function Eg(e){return Pt(e)&&typeof e.workspace=="string"&&["all","running","waiting","unread","idle","unknown"].includes(String(e.status))&&["all","workspace","session"].includes(String(e.kind))&&typeof e.archived=="boolean"&&typeof e.query=="string"}function Dc(e){if(!Pt(e)||e.schemaVersion!==1||!Number.isSafeInteger(e.revision)||Number(e.revision)<0||!Pt(e.positions)||!Array.isArray(e.collapsed)||!Pt(e.views))throw new Error("Invalid layout format or unsupported version");for(let[t,n]of Object.entries(e.positions))if(!pr(t)||!Ac(n))throw new Error("Invalid layout position");if(!e.collapsed.every(t=>typeof t=="string"&&pr(t)))throw new Error("Invalid layout collapse state");for(let[t,n]of Object.entries(e.views)){if(!pr(t)||!Pt(n))throw new Error("Invalid layout view");if(n.viewport!==void 0&&(!Ac(n.viewport)||typeof n.viewport.zoom!="number"||!Number.isFinite(n.viewport.zoom)||n.viewport.zoom<.1||n.viewport.zoom>3))throw new Error("Invalid layout viewport");if(n.filters!==void 0&&!Eg(n.filters))throw new Error("Invalid layout filters")}}var fo=class{storage;key;constructor(t,n){this.storage=t,this.key=n}load(){let t=this.storage.getItem(this.key);if(t===null)return cn();let n;try{n=JSON.parse(t)}catch{throw new Error("Invalid layout JSON")}return Dc(n),n}initializePositions(t){let n=this.load(),o=Object.fromEntries(Object.entries(t).filter(([r])=>!n.positions[r]));return Object.keys(o).length?this.savePatch({positions:o},n.revision):n}reset(t){if(this.storage.getItem(this.key)!==t)throw new Error("Layout conflict: another window changed the saved layout");let n=cn();return this.storage.setItem(this.key,JSON.stringify(n)),n}savePatch(t,n){let o=this.load();if(o.revision!==n)throw new Error("Layout conflict: another window saved a newer layout");let r={...o.views};for(let[s,a]of Object.entries(t.views??{}))r[s]={...r[s],...a};let i={schemaVersion:1,revision:o.revision+1,positions:{...o.positions,...t.positions},collapsed:t.collapsed??o.collapsed,views:r};return Dc(i),this.storage.setItem(this.key,JSON.stringify(i)),i}};var hr={running:"\u8FD0\u884C\u4E2D",waiting:"\u7B49\u5F85\u56DE\u5E94",unread:"\u65B0\u7ED3\u679C",idle:"\u7A7A\u95F2",unknown:"\u672A\u77E5"},gr={running:"#6aabff",waiting:"#ffc56c",unread:"#5fe0b4",idle:"#9aaac5",unknown:"#748099"};function Ng({data:e,selected:t}){let n=e.kind==="workspace";return M.default.createElement("div",{className:"wg-bubble "+(n?"is-workspace":"is-session")+(t?" is-selected":"")+(e.archived?" is-archived":""),style:{"--bubble-color":gr[e.status]},title:e.title+(e.path?" \xB7 "+e.path:"")},M.default.createElement(ft,{type:"target",position:U.Top,isConnectable:!1}),M.default.createElement("div",{className:"wg-orb"},M.default.createElement("span",{className:"wg-orb-symbol"},n?"\u25C8":"\u2726"),n&&M.default.createElement("span",{className:"wg-orb-count"},e.total," \u4E2A\u4F1A\u8BDD")),M.default.createElement("div",{className:"wg-node-title"},e.title),M.default.createElement("div",{className:"wg-node-meta"},M.default.createElement("i",null),n?e.collapsed?"\u5DF2\u6536\u8D77":"\u5DE5\u4F5C\u533A":e.archived?"\u5DF2\u5F52\u6863":hr[e.status]),M.default.createElement(ft,{type:"source",position:U.Bottom,isConnectable:!1}))}var Cg={bubble:M.default.memo(Ng)};function Mg(e){return(0,M.useState)(()=>{try{return{layout:e.load(),error:""}}catch(t){return{layout:cn(),error:"\u65E0\u6CD5\u8BFB\u53D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF1A"+String(t)}}})[0]}function Tc(e){return M.default.createElement(ur,null,M.default.createElement(Ig,{...e}))}function Ig({catalog:e,actions:t,repository:n,demo:o,access:r}){let i=Mg(n),[s,a]=(0,M.useState)(i.layout),c=(0,M.useRef)(s),[l,u]=(0,M.useState)(i.error),[f,d]=(0,M.useState)(!1),[p,h]=(0,M.useState)(""),[m,w]=(0,M.useState)(()=>({...pt,...i.layout.views.all?.filters})),[x,v]=(0,M.useState)(),[g,b]=(0,M.useState)({}),[E,S]=(0,M.useState)(!0),[N,P]=(0,M.useState)(),[I,F]=(0,M.useState)(),[L,B]=(0,M.useState)([]),$=an(),y=(0,M.useRef)(!0),_=(0,M.useRef)(Promise.resolve()),k=(0,M.useRef)(!!i.error),C=(0,M.useRef)(0),T=(0,M.useRef)(0),A=(0,M.useRef)(),R=(0,M.useRef)(m);R.current=m;let H=(0,M.useMemo)(()=>fr(e,m,s,g),[e,m,s,g]),X=(0,M.useCallback)(O=>{c.current=O,a(O)},[]),G=(0,M.useCallback)((O,W=!1)=>{k.current||(C.current++,W&&T.current++,_.current=_.current.then(async()=>{if(!y.current||k.current)return;let Y=c.current.revision,j=()=>{if(!y.current||k.current)return;let te=W?n.initializePositions(O.positions??{}):n.savePatch(O,Y);X(te),h("\u5E03\u5C40\u5DF2\u4FDD\u5B58")};navigator.locks?await navigator.locks.request(n.key,j):j()}).catch(Y=>{k.current=!0,y.current&&u("\u5E03\u5C40\u672A\u4FDD\u5B58\uFF1A"+String(Y))}).finally(()=>{C.current--,W&&T.current--}))},[n,X]);(0,M.useEffect)(()=>(y.current=!0,()=>{y.current=!1,clearTimeout(A.current)}),[]),(0,M.useEffect)(()=>{B(O=>H.nodes.map(W=>{let Y=O.find(j=>j.id===W.id);return{...W,selected:W.id===x,position:Y?.dragging?Y.position:W.position}}))},[H,x]),(0,M.useEffect)(()=>{let O=W=>{if(W.key===n.key){if(C.current>T.current){k.current=!0,u("\u53E6\u4E00\u4E2A\u7A97\u53E3\u4FEE\u6539\u4E86\u5E03\u5C40\u3002\u8BF7\u91CD\u65B0\u8F7D\u5165\uFF0C\u518D\u7EE7\u7EED\u62D6\u52A8\u3002");return}try{let Y=n.load();X(Y),h("\u5E03\u5C40\u5DF2\u4ECE\u53E6\u4E00\u7A97\u53E3\u540C\u6B65")}catch(Y){k.current=!0,u("\u65E0\u6CD5\u540C\u6B65\u5E03\u5C40\uFF1A"+String(Y))}}};return window.addEventListener("storage",O),()=>window.removeEventListener("storage",O)},[n,X]),(0,M.useEffect)(()=>{if(e.loading)return;let O=c.current.views[m.workspace]?.viewport,W=setTimeout(()=>{O?$.setViewport(O):$.fitView({padding:.12,maxZoom:1})},60);return()=>clearTimeout(W)},[m.workspace,e.loading,$]),(0,M.useEffect)(()=>{if(e.loading||k.current)return;let O=H.nodes.filter(W=>!c.current.positions[W.id]);O.length&&G({positions:Object.fromEntries(O.map(W=>[W.id,W.position]))},!0)},[e.loading,H,G]),(0,M.useEffect)(()=>{if(!p)return;let O=setTimeout(()=>h(""),2400);return()=>clearTimeout(O)},[p]);let q=async O=>{d(!0),k.current||u("");try{if(clearTimeout(A.current),G({views:{[R.current.workspace]:{viewport:$.getViewport()}}}),await _.current,!y.current)return;await O()}catch(W){u("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF1A"+String(W))}finally{y.current&&d(!1)}},Q=O=>{let W={...R.current,...O};w(W),G({views:{all:{filters:W}}})},ee=O=>{clearTimeout(A.current);let W=R.current.workspace;G({views:{[W]:{viewport:$.getViewport()},all:{...W==="all"?{viewport:$.getViewport()}:{},filters:{...R.current,workspace:O}}}}),w(Y=>({...Y,workspace:O})),v(void 0)},Z=H.nodes.find(O=>O.id===x),V=()=>{let O=fr(e,m,cn(),g),W=Object.fromEntries(L.map(Y=>[Y.id,Y.position]));P(W),G({positions:Object.fromEntries(O.nodes.map(Y=>[Y.id,Y.position]))}),setTimeout(()=>$.fitView({padding:.12,maxZoom:1}),70)},K=O=>q(()=>O.data.kind==="workspace"?O.data.virtual?void 0:t.openWorkspace(O.data.entityId):O.data.archived?Promise.reject(new Error("\u8BF7\u5148\u6062\u590D\u8FD9\u4E2A\u5F52\u6863\u4F1A\u8BDD")):t.openSession(O.data.entityId)),J=m.query||m.status!=="all"||m.kind!=="all"||m.workspace!=="all"||m.archived;return M.default.createElement("section",{className:"wg-root","aria-label":"\u5DE5\u4F5C\u533A\u56FE\u8C31"},M.default.createElement("header",{className:"wg-header"},M.default.createElement("div",{className:"wg-brand"},M.default.createElement("span",{className:"wg-logo"},"\u25C8"),M.default.createElement("div",null,M.default.createElement("h1",null,"\u5DE5\u4F5C\u533A\u56FE\u8C31",M.default.createElement("span",null,"WORKSPACE ATLAS")),M.default.createElement("p",null,e.workspaces.length," \u4E2A\u5DE5\u4F5C\u533A \xB7 ",H.total," \u4E2A\u4F1A\u8BDD",o?" \xB7 \u6F14\u793A\u6570\u636E":""))),M.default.createElement("div",{className:"wg-top-actions"},M.default.createElement("label",{className:"wg-search"},M.default.createElement("span",null,"\u2315"),M.default.createElement("input",{"aria-label":"\u641C\u7D22\u5DE5\u4F5C\u533A\u548C\u4F1A\u8BDD",placeholder:"\u641C\u7D22\u5DE5\u4F5C\u533A\u6216\u4F1A\u8BDD\u2026",value:m.query,onChange:O=>Q({query:O.target.value})})),M.default.createElement("button",{onClick:()=>$.fitView({padding:.12,maxZoom:1})},"\u9002\u5E94\u753B\u5E03"),M.default.createElement("button",{onClick:V},"\u91CD\u7F6E\u5E03\u5C40"))),(l||e.error)&&M.default.createElement("div",{className:"wg-alert",role:"alert"},M.default.createElement("span",null,l||e.error),k.current&&M.default.createElement(M.default.Fragment,null,M.default.createElement("button",{onClick:()=>location.reload()},"\u91CD\u65B0\u8F7D\u5165"),M.default.createElement("button",{onClick:()=>{try{F({raw:n.storage.getItem(n.key)})}catch(O){u(String(O))}}},"\u91CD\u7F6E\u672C\u5730\u5E03\u5C40"),M.default.createElement("button",{onClick:()=>{try{let O=n.storage.getItem(n.key),W=URL.createObjectURL(new Blob([O??""],{type:"text/plain"})),Y=document.createElement("a");Y.href=W,Y.download="workspace-graph-layout-backup.txt",Y.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}catch(O){u(String(O))}}},"\u5BFC\u51FA\u5DF2\u4FDD\u5B58\u539F\u6587")),M.default.createElement("button",{onClick:()=>{let O=new Blob([JSON.stringify({...c.current,positions:{...c.current.positions,...Object.fromEntries(L.map(j=>[j.id,j.position]))}},null,2)],{type:"application/json"}),W=URL.createObjectURL(O),Y=document.createElement("a");Y.href=W,Y.download="workspace-graph-layout.json",Y.click(),setTimeout(()=>URL.revokeObjectURL(W),1e3)}},"\u5BFC\u51FA\u5F53\u524D\u5E03\u5C40")),I&&M.default.createElement("div",{className:"wg-alert",role:"alert"},M.default.createElement("span",null,"\u8FD9\u4F1A\u6E05\u9664\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u56FE\u8C31\u4F4D\u7F6E\u548C\u7B5B\u9009\u3002\u53EF\u5148\u5BFC\u51FA\u5907\u4EFD\u3002"),M.default.createElement("button",{onClick:()=>{try{let O=n.reset(I.raw);k.current=!1,X(O),u(""),w(pt),F(void 0)}catch(O){u("\u65E0\u6CD5\u91CD\u7F6E\uFF1A"+String(O))}}},"\u786E\u8BA4\u91CD\u7F6E"),M.default.createElement("button",{onClick:()=>F(void 0)},"\u53D6\u6D88")),o&&M.default.createElement("div",{className:"wg-demo-label"},"\u4EA4\u4E92\u6F14\u793A \xB7 \u6570\u636E\u4EC5\u7528\u4E8E\u9884\u89C8"),M.default.createElement("div",{className:"wg-canvas"},M.default.createElement(Nc,{nodes:L,edges:H.edges.map(O=>({...O,type:"straight",style:{stroke:"#47719a",strokeWidth:1.25,opacity:.56}})),nodeTypes:Cg,onNodesChange:O=>B(W=>cr(O,W)),onNodeDragStop:(O,W,Y)=>G({positions:Object.fromEntries((Y?.length?Y:[W]).map(j=>[j.id,j.position]))}),onNodeClick:(O,W)=>v(W.id),onNodeDoubleClick:(O,W)=>{K(W)},onPaneClick:()=>v(void 0),onMoveEnd:(O,W)=>{clearTimeout(A.current);let Y=R.current.workspace;A.current=setTimeout(()=>G({views:{[Y]:{viewport:W}}}),180)},minZoom:.1,maxZoom:3,nodesConnectable:!1,edgesReconnectable:!1,deleteKeyCode:null,selectionOnDrag:!1,proOptions:{hideAttribution:!1},defaultViewport:s.views[m.workspace]?.viewport},M.default.createElement(Mc,{variant:Me.Dots,gap:26,size:1,color:"#284061"}),M.default.createElement(Pc,{position:"bottom-right",showInteractive:!1})),e.loading&&M.default.createElement("div",{className:"wg-empty",role:"status"},M.default.createElement("span",{className:"wg-empty-orb"},"\u25C8"),M.default.createElement("h2",null,"\u6B63\u5728\u8FDE\u63A5\u5DE5\u4F5C\u533A"),M.default.createElement("p",null,"\u8BFB\u53D6 Harness \u7684\u5DE5\u4F5C\u533A\u4E0E\u4F1A\u8BDD\u2026")),!e.loading&&!H.nodes.length&&M.default.createElement("div",{className:"wg-empty"},M.default.createElement("span",{className:"wg-empty-orb"},"\u2315"),M.default.createElement("h2",null,J?"\u6CA1\u6709\u5339\u914D\u7684\u8282\u70B9":"\u4ECE\u4E00\u4E2A\u5DE5\u4F5C\u533A\u5F00\u59CB"),M.default.createElement("p",null,J?"\u8C03\u6574\u5DE6\u4E0B\u89D2\u7684\u9009\u62E9\u6216\u6E05\u9664\u641C\u7D22\u3002":"\u5728 Harness \u4FA7\u680F\u6DFB\u52A0\u5DE5\u4F5C\u533A\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u663E\u793A\u3002"),J&&M.default.createElement("button",{onClick:()=>{w(pt),G({views:{all:{filters:pt}}})}},"\u6E05\u9664\u7B5B\u9009")),M.default.createElement("div",{className:"wg-dock "+(E?"":"is-folded")},M.default.createElement("button",{className:"wg-dock-heading",onClick:()=>S(!E),"aria-expanded":E},M.default.createElement("span",null,"\u2637\u3000\u89C6\u56FE\u4E0E\u7B5B\u9009"),M.default.createElement("span",null,E?"\u2212":"+")),E&&M.default.createElement(M.default.Fragment,null,M.default.createElement("label",{className:"wg-field"},M.default.createElement("span",null,"\u5DE5\u4F5C\u533A"),M.default.createElement("select",{"aria-label":"\u9009\u62E9\u5DE5\u4F5C\u533A",value:m.workspace,onChange:O=>ee(O.target.value)},M.default.createElement("option",{value:"all"},"\u5168\u90E8\u5DE5\u4F5C\u533A"),e.workspaces.map(O=>M.default.createElement("option",{key:O.id,value:O.id},O.title," \xB7"," ",O.path.split(/[\/]/).filter(Boolean).slice(-2).join("/"))),M.default.createElement("option",{value:"__ungrouped__"},"\u672A\u5206\u7EC4"))),M.default.createElement("div",{className:"wg-filter-row"},M.default.createElement("span",null,"\u72B6\u6001"),M.default.createElement("div",{className:"wg-chips"},["all","running","waiting","unread","idle","unknown"].map(O=>M.default.createElement("button",{key:O,className:m.status===O?"active":"","aria-pressed":m.status===O,onClick:()=>Q({status:O})},O!=="all"&&M.default.createElement("i",{style:{background:gr[O]}}),O==="all"?"\u5168\u90E8":hr[O])))),M.default.createElement("div",{className:"wg-filter-row"},M.default.createElement("span",null,"\u663E\u793A"),M.default.createElement("div",{className:"wg-chips"},["all","workspace","session"].map(O=>M.default.createElement("button",{key:O,className:m.kind===O?"active":"","aria-pressed":m.kind===O,onClick:()=>Q({kind:O})},O==="all"?"\u5168\u90E8":O==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD")),M.default.createElement("label",{className:"wg-check"},M.default.createElement("input",{type:"checkbox",checked:m.archived,onChange:O=>Q({archived:O.target.checked})}),"\u5F52\u6863"))),M.default.createElement("div",{className:"wg-dock-foot"},M.default.createElement("span",null,H.nodes.length," \u4E2A\u53EF\u89C1\u8282\u70B9",H.hidden>0?" \xB7 "+H.hidden+" \u4E2A\u4F1A\u8BDD\u672A\u5C55\u5F00":""),M.default.createElement("button",{onClick:()=>{w(pt),G({views:{all:{filters:pt}}})}},"\u6E05\u9664\u7B5B\u9009")))),Z&&M.default.createElement("aside",{className:"wg-details","aria-label":"\u8282\u70B9\u8BE6\u60C5"},M.default.createElement("div",{className:"wg-detail-heading"},M.default.createElement("span",null,Z.data.kind==="workspace"?"\u5DE5\u4F5C\u533A":"\u4F1A\u8BDD"),M.default.createElement("button",{"aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>v(void 0)},"\xD7")),M.default.createElement("h2",null,Z.data.title),M.default.createElement("div",{className:"wg-status",style:{color:gr[Z.data.status]}},"\u25CF ",hr[Z.data.status],Z.data.archived?" \xB7 \u5DF2\u5F52\u6863":""),M.default.createElement("dl",null,M.default.createElement("dt",null,"\u8DEF\u5F84"),M.default.createElement("dd",null,Z.data.path||"\u672A\u8BB0\u5F55\u76EE\u5F55"),M.default.createElement("dt",null,"\u6807\u8BC6"),M.default.createElement("dd",null,Z.data.entityId),Z.data.updatedAt&&M.default.createElement(M.default.Fragment,null,M.default.createElement("dt",null,"\u6700\u8FD1\u66F4\u65B0"),M.default.createElement("dd",null,new Date(Z.data.updatedAt).toLocaleString()))),Z.data.kind==="workspace"?M.default.createElement(Pg,{key:Z.id,node:Z,actions:t,access:r,busy:f,perform:q,open:()=>{K(Z)},collapse:()=>G({collapsed:Z.data.collapsed?s.collapsed.filter(O=>O!==Z.data.entityId):[...s.collapsed,Z.data.entityId]}),more:()=>b(O=>({...O,[Z.data.entityId]:(O[Z.data.entityId]??20)+20}))}):M.default.createElement(zg,{key:Z.id,node:Z,actions:t,access:r,busy:f,perform:q,open:()=>{K(Z)}})),M.default.createElement("div",{className:"wg-canvas-hint"},"\u62D6\u52A8\u6C14\u6CE1\u6574\u7406 \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53CC\u51FB\u6253\u5F00"),M.default.createElement("div",{className:"wg-save-status",role:"status"},p),N&&M.default.createElement("div",{className:"wg-undo"},"\u5DF2\u91CD\u6392\u5F53\u524D\u89C6\u56FE",M.default.createElement("button",{onClick:()=>{G({positions:N}),P(void 0)}},"\u64A4\u9500"),M.default.createElement("button",{onClick:()=>P(void 0),"aria-label":"\u5173\u95ED\u64A4\u9500\u63D0\u793A"},"\xD7"))))}function Pg({node:e,actions:t,access:n,busy:o,perform:r,open:i,collapse:s,more:a}){let[c,l]=(0,M.useState)(!1),[u,f]=(0,M.useState)(e.data.title),d=n?.useCreate()??!0,p=n?.useWorkspace(e.data.entityId,"workspace/rename")??!0;return M.default.createElement("div",{className:"wg-detail-actions"},!e.data.virtual&&M.default.createElement(M.default.Fragment,null,M.default.createElement("button",{className:"wg-primary",disabled:o||!d,onClick:i},"\u6253\u5F00\u5DE5\u4F5C\u533A \u2197"),M.default.createElement("button",{disabled:o||!d,onClick:()=>{r(()=>t.newSession(e.data.entityId))}},"\u65B0\u5EFA\u4F1A\u8BDD"),p&&M.default.createElement("button",{disabled:o,onClick:()=>l(!c)},"\u91CD\u547D\u540D\u5DE5\u4F5C\u533A")),c&&M.default.createElement("form",{onSubmit:h=>{h.preventDefault(),u.trim()&&r(async()=>{await t.renameWorkspace(e.data.entityId,u.trim()),l(!1)})}},M.default.createElement("input",{"aria-label":"\u5DE5\u4F5C\u533A\u65B0\u540D\u79F0",value:u,onChange:h=>f(h.target.value)}),M.default.createElement("button",{disabled:o||!u.trim()},"\u4FDD\u5B58\u540D\u79F0")),M.default.createElement("button",{onClick:s},e.data.collapsed?"\u5C55\u5F00\u4F1A\u8BDD":"\u6536\u8D77\u4F1A\u8BDD"),!e.data.collapsed&&M.default.createElement("button",{onClick:a},"\u518D\u663E\u793A 20 \u4E2A\u4F1A\u8BDD"))}function zg({node:e,actions:t,access:n,busy:o,perform:r,open:i}){let s=n?.useSession(e.data.entityId,"workspace/archiveSession")??!0,a=n?.useSession(e.data.entityId,"workspace/unarchiveSession")??!0;return M.default.createElement("div",{className:"wg-detail-actions"},e.data.archived?M.default.createElement("button",{className:"wg-primary",disabled:o||!a,onClick:()=>{r(()=>t.restore(e.data.entityId))}},"\u6062\u590D\u4F1A\u8BDD"):M.default.createElement(M.default.Fragment,null,M.default.createElement("button",{className:"wg-primary",disabled:o,onClick:i},"\u6253\u5F00\u4F1A\u8BDD \u2197"),M.default.createElement("button",{disabled:o||!s,onClick:()=>{r(()=>t.archive(e.data.entityId))}},"\u5F52\u6863\u4F1A\u8BDD")),M.default.createElement("p",{className:"wg-small-note"},"\u4F4D\u7F6E\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002\u62D6\u52A8\u4E0D\u4F1A\u6539\u53D8\u4F1A\u8BDD\u6240\u5C5E\u3002"))}function Oc(e,t,n){let o=e,r=t,i=n;return{loading:o?.phase!=="ready"||r?.phase!=="ready",error:o?.error?.message,workspaces:(o?.items??[]).map(s=>({id:s.workspaceId,title:s.title,path:s.path,sessionIds:s.sessionIds})),archivedSessionIds:[...o?.archivedSessionIds??[]],sessions:(r?.ids??[]).flatMap(s=>{let a=r?.byId[s];if(!a)return[];let c=i?.get(s);return[{id:s,title:a.title||a.displayTitle||"\u672A\u547D\u540D\u4F1A\u8BDD",cwd:a.cwd,updatedAt:a.updatedAt,running:c?.running??a.running,pending:!!c?.pendingInteraction,unread:c?.completionUnread,blank:a.blank,origin:a.origin}]})}}var Lc=`.wg-root {
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
`;var $c=`/* this gets exported as style.css and can be used for the default theming */
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
`;var Hc="workspace-graph",mr=e=>e;function Tg(e){let t=e.useWorkspaces(mr),n=e.useSessions(mr),o=e.useSessionStatus(mr),r=qe.default.useMemo(()=>Oc(t,n,o),[t,n,o]);return qe.default.createElement(Tc,{catalog:r,actions:e.actions,repository:e.repository,access:{useCreate:()=>e.useRemoteAccess("session/create"),useWorkspace:(i,s)=>e.useWorkspaceAccess(i,s),useSession:(i,s)=>e.useSessionAccess(i,s)}})}function Og({size:e=18}){return qe.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},qe.default.createElement("path",{d:"m7 8 5 7m0 0 7-7M7 8h12"}),qe.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),qe.default.createElement("circle",{cx:"19",cy:"6",r:"3"}),qe.default.createElement("circle",{cx:"12",cy:"18",r:"3"}))}var Lg=["slots","uiWorkspace","uiSession","workspaces","sessions"];function $g(e){let t;try{t=window.localStorage}catch{t={getItem(){throw new Error("Browser storage is unavailable")},setItem(){throw new Error("Browser storage is unavailable")}}}let n=new fo(t,"dsh-workspace-graph:v1"),o={openSession:r=>e.uiWorkspace.openSession(r),openWorkspace:r=>e.uiWorkspace.openWorkspace(r),newSession:r=>e.uiWorkspace.startSession(r),archive:r=>e.uiWorkspace.archiveSession(r),restore:r=>e.uiWorkspace.unarchiveSession(r),renameWorkspace:async(r,i)=>{await e.workspaces.rename(r,i)}};e.effect(()=>{let r=document.createElement("style");return r.dataset.plugin="dsh-workspace-graph",r.textContent="@scope (.wg-root) { "+$c+" }"+Lc,document.head.append(r),()=>r.remove()}),e.slots.inject("main",()=>e.slots.register({name:"main",key:Hc,inject:()=>({actions:o,repository:n})},Tg)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Hc,order:85,label:"\u5DE5\u4F5C\u533A\u56FE\u8C31"},Og))}
;return module.exports;}});