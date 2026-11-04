function fp(i,u){for(var s=0;s<u.length;s++){const d=u[s];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in i)){const m=Object.getOwnPropertyDescriptor(d,p);m&&Object.defineProperty(i,p,m.get?m:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function s(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=s(p);fetch(p.href,m)}})();function Gc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ta={exports:{}},bl={},Ma={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function pp(){if(Ec)return fe;Ec=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),_=Symbol.iterator;function M(y){return y===null||typeof y!="object"?null:(y=_&&y[_]||y["@@iterator"],typeof y=="function"?y:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,A={};function O(y,R,ue){this.props=y,this.context=R,this.refs=A,this.updater=ue||z}O.prototype.isReactComponent={},O.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},O.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function re(){}re.prototype=O.prototype;function oe(y,R,ue){this.props=y,this.context=R,this.refs=A,this.updater=ue||z}var ae=oe.prototype=new re;ae.constructor=oe,U(ae,O.prototype),ae.isPureReactComponent=!0;var G=Array.isArray,Z=Object.prototype.hasOwnProperty,we={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function ke(y,R,ue){var ce,pe={},me=null,ye=null;if(R!=null)for(ce in R.ref!==void 0&&(ye=R.ref),R.key!==void 0&&(me=""+R.key),R)Z.call(R,ce)&&!Re.hasOwnProperty(ce)&&(pe[ce]=R[ce]);var ve=arguments.length-2;if(ve===1)pe.children=ue;else if(1<ve){for(var je=Array(ve),Ge=0;Ge<ve;Ge++)je[Ge]=arguments[Ge+2];pe.children=je}if(y&&y.defaultProps)for(ce in ve=y.defaultProps,ve)pe[ce]===void 0&&(pe[ce]=ve[ce]);return{$$typeof:i,type:y,key:me,ref:ye,props:pe,_owner:we.current}}function st(y,R){return{$$typeof:i,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Ve(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function ht(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ue){return R[ue]})}var Ke=/\/+/g;function V(y,R){return typeof y=="object"&&y!==null&&y.key!=null?ht(""+y.key):R.toString(36)}function ne(y,R,ue,ce,pe){var me=typeof y;(me==="undefined"||me==="boolean")&&(y=null);var ye=!1;if(y===null)ye=!0;else switch(me){case"string":case"number":ye=!0;break;case"object":switch(y.$$typeof){case i:case u:ye=!0}}if(ye)return ye=y,pe=pe(ye),y=ce===""?"."+V(ye,0):ce,G(pe)?(ue="",y!=null&&(ue=y.replace(Ke,"$&/")+"/"),ne(pe,R,ue,"",function(Ge){return Ge})):pe!=null&&(Ve(pe)&&(pe=st(pe,ue+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(Ke,"$&/")+"/")+y)),R.push(pe)),1;if(ye=0,ce=ce===""?".":ce+":",G(y))for(var ve=0;ve<y.length;ve++){me=y[ve];var je=ce+V(me,ve);ye+=ne(me,R,ue,je,pe)}else if(je=M(y),typeof je=="function")for(y=je.call(y),ve=0;!(me=y.next()).done;)me=me.value,je=ce+V(me,ve++),ye+=ne(me,R,ue,je,pe);else if(me==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ye}function X(y,R,ue){if(y==null)return y;var ce=[],pe=0;return ne(y,ce,"","",function(me){return R.call(ue,me,pe++)}),ce}function q(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(ue){(y._status===0||y._status===-1)&&(y._status=1,y._result=ue)},function(ue){(y._status===0||y._status===-1)&&(y._status=2,y._result=ue)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var le={current:null},I={transition:null},Q={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:I,ReactCurrentOwner:we};function B(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:X,forEach:function(y,R,ue){X(y,function(){R.apply(this,arguments)},ue)},count:function(y){var R=0;return X(y,function(){R++}),R},toArray:function(y){return X(y,function(R){return R})||[]},only:function(y){if(!Ve(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},fe.Component=O,fe.Fragment=s,fe.Profiler=p,fe.PureComponent=oe,fe.StrictMode=d,fe.Suspense=x,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,fe.act=B,fe.cloneElement=function(y,R,ue){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ce=U({},y.props),pe=y.key,me=y.ref,ye=y._owner;if(R!=null){if(R.ref!==void 0&&(me=R.ref,ye=we.current),R.key!==void 0&&(pe=""+R.key),y.type&&y.type.defaultProps)var ve=y.type.defaultProps;for(je in R)Z.call(R,je)&&!Re.hasOwnProperty(je)&&(ce[je]=R[je]===void 0&&ve!==void 0?ve[je]:R[je])}var je=arguments.length-2;if(je===1)ce.children=ue;else if(1<je){ve=Array(je);for(var Ge=0;Ge<je;Ge++)ve[Ge]=arguments[Ge+2];ce.children=ve}return{$$typeof:i,type:y.type,key:pe,ref:me,props:ce,_owner:ye}},fe.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:m,_context:y},y.Consumer=y},fe.createElement=ke,fe.createFactory=function(y){var R=ke.bind(null,y);return R.type=y,R},fe.createRef=function(){return{current:null}},fe.forwardRef=function(y){return{$$typeof:j,render:y}},fe.isValidElement=Ve,fe.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:q}},fe.memo=function(y,R){return{$$typeof:P,type:y,compare:R===void 0?null:R}},fe.startTransition=function(y){var R=I.transition;I.transition={};try{y()}finally{I.transition=R}},fe.unstable_act=B,fe.useCallback=function(y,R){return le.current.useCallback(y,R)},fe.useContext=function(y){return le.current.useContext(y)},fe.useDebugValue=function(){},fe.useDeferredValue=function(y){return le.current.useDeferredValue(y)},fe.useEffect=function(y,R){return le.current.useEffect(y,R)},fe.useId=function(){return le.current.useId()},fe.useImperativeHandle=function(y,R,ue){return le.current.useImperativeHandle(y,R,ue)},fe.useInsertionEffect=function(y,R){return le.current.useInsertionEffect(y,R)},fe.useLayoutEffect=function(y,R){return le.current.useLayoutEffect(y,R)},fe.useMemo=function(y,R){return le.current.useMemo(y,R)},fe.useReducer=function(y,R,ue){return le.current.useReducer(y,R,ue)},fe.useRef=function(y){return le.current.useRef(y)},fe.useState=function(y){return le.current.useState(y)},fe.useSyncExternalStore=function(y,R,ue){return le.current.useSyncExternalStore(y,R,ue)},fe.useTransition=function(){return le.current.useTransition()},fe.version="18.3.1",fe}var Cc;function Ka(){return Cc||(Cc=1,Ma.exports=pp()),Ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function mp(){if(Pc)return bl;Pc=1;var i=Ka(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function g(j,x,P){var E,_={},M=null,z=null;P!==void 0&&(M=""+P),x.key!==void 0&&(M=""+x.key),x.ref!==void 0&&(z=x.ref);for(E in x)d.call(x,E)&&!m.hasOwnProperty(E)&&(_[E]=x[E]);if(j&&j.defaultProps)for(E in x=j.defaultProps,x)_[E]===void 0&&(_[E]=x[E]);return{$$typeof:u,type:j,key:M,ref:z,props:_,_owner:p.current}}return bl.Fragment=s,bl.jsx=g,bl.jsxs=g,bl}var Rc;function hp(){return Rc||(Rc=1,Ta.exports=mp()),Ta.exports}var a=hp(),w=Ka();const Ji=Gc(w),gp=fp({__proto__:null,default:Ji},[w]);var Ai={},Oa={exports:{}},at={},Fa={exports:{}},Da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function vp(){return Lc||(Lc=1,(function(i){function u(I,Q){var B=I.length;I.push(Q);e:for(;0<B;){var y=B-1>>>1,R=I[y];if(0<p(R,Q))I[y]=Q,I[B]=R,B=y;else break e}}function s(I){return I.length===0?null:I[0]}function d(I){if(I.length===0)return null;var Q=I[0],B=I.pop();if(B!==Q){I[0]=B;e:for(var y=0,R=I.length,ue=R>>>1;y<ue;){var ce=2*(y+1)-1,pe=I[ce],me=ce+1,ye=I[me];if(0>p(pe,B))me<R&&0>p(ye,pe)?(I[y]=ye,I[me]=B,y=me):(I[y]=pe,I[ce]=B,y=ce);else if(me<R&&0>p(ye,B))I[y]=ye,I[me]=B,y=me;else break e}}return Q}function p(I,Q){var B=I.sortIndex-Q.sortIndex;return B!==0?B:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var g=Date,j=g.now();i.unstable_now=function(){return g.now()-j}}var x=[],P=[],E=1,_=null,M=3,z=!1,U=!1,A=!1,O=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(I){for(var Q=s(P);Q!==null;){if(Q.callback===null)d(P);else if(Q.startTime<=I)d(P),Q.sortIndex=Q.expirationTime,u(x,Q);else break;Q=s(P)}}function G(I){if(A=!1,ae(I),!U)if(s(x)!==null)U=!0,q(Z);else{var Q=s(P);Q!==null&&le(G,Q.startTime-I)}}function Z(I,Q){U=!1,A&&(A=!1,re(ke),ke=-1),z=!0;var B=M;try{for(ae(Q),_=s(x);_!==null&&(!(_.expirationTime>Q)||I&&!ht());){var y=_.callback;if(typeof y=="function"){_.callback=null,M=_.priorityLevel;var R=y(_.expirationTime<=Q);Q=i.unstable_now(),typeof R=="function"?_.callback=R:_===s(x)&&d(x),ae(Q)}else d(x);_=s(x)}if(_!==null)var ue=!0;else{var ce=s(P);ce!==null&&le(G,ce.startTime-Q),ue=!1}return ue}finally{_=null,M=B,z=!1}}var we=!1,Re=null,ke=-1,st=5,Ve=-1;function ht(){return!(i.unstable_now()-Ve<st)}function Ke(){if(Re!==null){var I=i.unstable_now();Ve=I;var Q=!0;try{Q=Re(!0,I)}finally{Q?V():(we=!1,Re=null)}}else we=!1}var V;if(typeof oe=="function")V=function(){oe(Ke)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,X=ne.port2;ne.port1.onmessage=Ke,V=function(){X.postMessage(null)}}else V=function(){O(Ke,0)};function q(I){Re=I,we||(we=!0,V())}function le(I,Q){ke=O(function(){I(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){U||z||(U=!0,q(Z))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return s(x)},i.unstable_next=function(I){switch(M){case 1:case 2:case 3:var Q=3;break;default:Q=M}var B=M;M=Q;try{return I()}finally{M=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=M;M=I;try{return Q()}finally{M=B}},i.unstable_scheduleCallback=function(I,Q,B){var y=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?y+B:y):B=y,I){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,I={id:E++,callback:Q,priorityLevel:I,startTime:B,expirationTime:R,sortIndex:-1},B>y?(I.sortIndex=B,u(P,I),s(x)===null&&I===s(P)&&(A?(re(ke),ke=-1):A=!0,le(G,B-y))):(I.sortIndex=R,u(x,I),U||z||(U=!0,q(Z))),I},i.unstable_shouldYield=ht,i.unstable_wrapCallback=function(I){var Q=M;return function(){var B=M;M=Q;try{return I.apply(this,arguments)}finally{M=B}}}})(Da)),Da}var zc;function yp(){return zc||(zc=1,Fa.exports=vp()),Fa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function xp(){if(Tc)return at;Tc=1;var i=Ka(),u=yp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},_={};function M(e){return x.call(_,e)?!0:x.call(E,e)?!1:P.test(e)?_[e]=!0:(E[e]=!0,!1)}function z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,n,r){if(t===null||typeof t>"u"||z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,o,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=c}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(re,oe);O[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(re,oe);O[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(re,oe);O[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,t,n,r){var l=O.hasOwnProperty(t)?O[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,n,l,r)&&(n=null),r||l===null?M(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var G=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),we=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),ht=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),I=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,y;function R(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var ue=!1;function ce(e,t){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var r=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){r=N}e.call(t.prototype)}else{try{throw Error()}catch(N){r=N}e()}}catch(N){if(N&&r&&typeof N.stack=="string"){for(var l=N.stack.split(`
`),o=r.stack.split(`
`),c=l.length-1,f=o.length-1;1<=c&&0<=f&&l[c]!==o[f];)f--;for(;1<=c&&0<=f;c--,f--)if(l[c]!==o[f]){if(c!==1||f!==1)do if(c--,f--,0>f||l[c]!==o[f]){var h=`
`+l[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=f);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function pe(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case we:return"Portal";case st:return"Profiler";case ke:return"StrictMode";case V:return"Suspense";case ne:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ht:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=je(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){r=""+c,o.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=Ge(e))}function tr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=je(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ln(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yt(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ve(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ut(e,t){t=t.checked,t!=null&&ae(e,"checked",t,!1)}function zn(e,t){ut(e,t);var n=ve(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nr(e,t.type,n):t.hasOwnProperty("defaultValue")&&nr(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ct(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nr(e,t,n){(t!=="number"||Rn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function Xt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ve(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ut(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lt(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Tn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ve(n)}}function Mn(e,t){var n=ve(t.value),r=ve(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function On(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _t,Or=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_t=_t||document.createElement("div"),_t.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_t.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){en.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]})});function Fr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function tn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Fr(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Gi=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dr(e,t){if(t){if(Gi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ur(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ir=null;function Ar(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,nn=null,rn=null;function Ll(e){if(e=ul(e)){if(typeof Br!="function")throw Error(s(280));var t=e.stateNode;t&&(t=ti(t),Br(e.stateNode,e.type,t))}}function $r(e){nn?rn?rn.push(e):rn=[e]:nn=e}function zl(){if(nn){var e=nn,t=rn;if(rn=nn=null,Ll(e),t)for(e=0;e<t.length;e++)Ll(t[e])}}function Tl(e,t){return e(t)}function de(){}var zt=!1;function Ae(e,t,n){if(zt)return e(t,n);zt=!0;try{return Tl(e,t,n)}finally{zt=!1,(nn!==null||rn!==null)&&(de(),zl())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Wr=!1;if(j)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Wr=!1}function Ml(e,t,n,r,l,o,c,f,h){var N=Array.prototype.slice.call(arguments,3);try{t.apply(n,N)}catch(T){this.onError(T)}}var Un=!1,ln=null,gt=!1,Vr=null,Yi={onError:function(e){Un=!0,ln=e}};function In(e,t,n,r,l,o,c,f,h){Un=!1,ln=null,Ml.apply(Yi,arguments)}function Xi(e,t,n,r,l,o,c,f,h){if(In.apply(this,arguments),Un){if(Un){var N=ln;Un=!1,ln=null}else throw Error(s(198));gt||(gt=!0,Vr=N)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(It(e)!==e)throw Error(s(188))}function W(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return C(l),e;if(o===r)return C(l),t;o=o.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=o;else{for(var c=!1,f=l.child;f;){if(f===n){c=!0,n=l,r=o;break}if(f===r){c=!0,r=l,n=o;break}f=f.sibling}if(!c){for(f=o.child;f;){if(f===n){c=!0,n=o,r=l;break}if(f===r){c=!0,r=o,n=l;break}f=f.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function se(e){return e=W(e),e!==null?Le(e):null}function Le(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Le(e);if(t!==null)return t;e=e.sibling}return null}var ze=u.unstable_scheduleCallback,An=u.unstable_cancelCallback,jd=u.unstable_shouldYield,_d=u.unstable_requestPaint,Te=u.unstable_now,bd=u.unstable_getCurrentPriorityLevel,qi=u.unstable_ImmediatePriority,ns=u.unstable_UserBlockingPriority,Ol=u.unstable_NormalPriority,Sd=u.unstable_LowPriority,rs=u.unstable_IdlePriority,Fl=null,Tt=null;function Nd(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Pd,Ed=Math.log,Cd=Math.LN2;function Pd(e){return e>>>=0,e===0?32:31-(Ed(e)/Cd|0)|0}var Dl=64,Ul=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var f=c&~l;f!==0?r=Hr(f):(o&=c,o!==0&&(r=Hr(o)))}else c=n&~l,c!==0?r=Hr(c):o!==0&&(r=Hr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),l=1<<n,r|=e[n],t&=~l;return r}function Rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-bt(o),f=1<<c,h=l[c];h===-1?((f&n)===0||(f&r)!==0)&&(l[c]=Rd(f,t)):h<=t&&(e.expiredLanes|=f),o&=~f}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=Dl;return Dl<<=1,(Dl&4194240)===0&&(Dl=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-bt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var xe=0;function is(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var os,no,as,ss,us,ro=!1,Al=[],on=null,an=null,sn=null,Jr=new Map,Kr=new Map,un=[],Td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function Gr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ul(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Md(e,t,n,r,l){switch(t){case"focusin":return on=Gr(on,e,t,n,r,l),!0;case"dragenter":return an=Gr(an,e,t,n,r,l),!0;case"mouseover":return sn=Gr(sn,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Jr.set(o,Gr(Jr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Kr.set(o,Gr(Kr.get(o)||null,e,t,n,r,l)),!0}return!1}function ds(e){var t=Bn(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=S(n),t!==null){e.blockedOn=t,us(e.priority,function(){as(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=io(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ir=r,n.target.dispatchEvent(r),Ir=null}else return t=ul(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function fs(e,t,n){Bl(e)&&n.delete(t)}function Od(){ro=!1,on!==null&&Bl(on)&&(on=null),an!==null&&Bl(an)&&(an=null),sn!==null&&Bl(sn)&&(sn=null),Jr.forEach(fs),Kr.forEach(fs)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ro||(ro=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Od)))}function Xr(e){function t(l){return Yr(l,e)}if(0<Al.length){Yr(Al[0],e);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Yr(on,e),an!==null&&Yr(an,e),sn!==null&&Yr(sn,e),Jr.forEach(t),Kr.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)ds(n),n.blockedOn===null&&un.shift()}var rr=G.ReactCurrentBatchConfig,$l=!0;function Fd(e,t,n,r){var l=xe,o=rr.transition;rr.transition=null;try{xe=1,lo(e,t,n,r)}finally{xe=l,rr.transition=o}}function Dd(e,t,n,r){var l=xe,o=rr.transition;rr.transition=null;try{xe=4,lo(e,t,n,r)}finally{xe=l,rr.transition=o}}function lo(e,t,n,r){if($l){var l=io(e,t,n,r);if(l===null)_o(e,t,r,Wl,n),cs(e,r);else if(Md(l,e,t,n,r))r.stopPropagation();else if(cs(e,r),t&4&&-1<Td.indexOf(e)){for(;l!==null;){var o=ul(l);if(o!==null&&os(o),o=io(e,t,n,r),o===null&&_o(e,t,r,Wl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else _o(e,t,r,null,n)}}var Wl=null;function io(e,t,n,r){if(Wl=null,e=Ar(r),e=Bn(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=S(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wl=e,null}function ps(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bd()){case qi:return 1;case ns:return 4;case Ol:case Sd:return 16;case rs:return 536870912;default:return 16}default:return 16}}var cn=null,oo=null,Vl=null;function ms(){if(Vl)return Vl;var e,t=oo,n=t.length,r,l="value"in cn?cn.value:cn.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===l[o-r];r++);return Vl=l.slice(e,1<r?1-r:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function hs(){return!1}function dt(e){function t(n,r,l,o,c){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ql:hs,this.isPropagationStopped=hs,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=dt(lr),qr=B({},lr,{view:0,detail:0}),Ud=dt(qr),so,uo,Zr,Jl=B({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(so=e.screenX-Zr.screenX,uo=e.screenY-Zr.screenY):uo=so=0,Zr=e),so)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),gs=dt(Jl),Id=B({},Jl,{dataTransfer:0}),Ad=dt(Id),Bd=B({},qr,{relatedTarget:0}),co=dt(Bd),$d=B({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=dt($d),Vd=B({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hd=dt(Vd),Qd=B({},lr,{data:0}),vs=dt(Qd),Jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gd[e])?!!t[e]:!1}function fo(){return Yd}var Xd=B({},qr,{key:function(e){if(e.key){var t=Jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qd=dt(Xd),Zd=B({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=dt(Zd),ef=B({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),tf=dt(ef),nf=B({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rf=dt(nf),lf=B({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),of=dt(lf),af=[9,13,27,32],po=j&&"CompositionEvent"in window,el=null;j&&"documentMode"in document&&(el=document.documentMode);var sf=j&&"TextEvent"in window&&!el,xs=j&&(!po||el&&8<el&&11>=el),ws=" ",ks=!1;function js(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function uf(e,t){switch(e){case"compositionend":return _s(t);case"keypress":return t.which!==32?null:(ks=!0,ws);case"textInput":return e=t.data,e===ws&&ks?null:e;default:return null}}function cf(e,t){if(ir)return e==="compositionend"||!po&&js(e,t)?(e=ms(),Vl=oo=cn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xs&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function Ss(e,t,n,r){$r(r),t=ql(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tl=null,nl=null;function ff(e){Ws(e,0)}function Kl(e){var t=cr(e);if(tr(t))return e}function pf(e,t){if(e==="change")return t}var Ns=!1;if(j){var mo;if(j){var ho="oninput"in document;if(!ho){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),ho=typeof Es.oninput=="function"}mo=ho}else mo=!1;Ns=mo&&(!document.documentMode||9<document.documentMode)}function Cs(){tl&&(tl.detachEvent("onpropertychange",Ps),nl=tl=null)}function Ps(e){if(e.propertyName==="value"&&Kl(nl)){var t=[];Ss(t,nl,e,Ar(e)),Ae(ff,t)}}function mf(e,t,n){e==="focusin"?(Cs(),tl=t,nl=n,tl.attachEvent("onpropertychange",Ps)):e==="focusout"&&Cs()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(nl)}function gf(e,t){if(e==="click")return Kl(t)}function vf(e,t){if(e==="input"||e==="change")return Kl(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:yf;function rl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!x.call(t,l)||!St(e[l],t[l]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=Rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rn(e.document)}return t}function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zs(n.ownerDocument.documentElement,n)){if(r!==null&&go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ls(n,o);var c=Ls(n,r);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wf=j&&"documentMode"in document&&11>=document.documentMode,or=null,vo=null,ll=null,yo=!1;function Ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||or==null||or!==Rn(r)||(r=or,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ll&&rl(ll,r)||(ll=r,r=ql(vo,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function Gl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},xo={},Os={};j&&(Os=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Yl(e){if(xo[e])return xo[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Os)return xo[e]=t[n];return e}var Fs=Yl("animationend"),Ds=Yl("animationiteration"),Us=Yl("animationstart"),Is=Yl("transitionend"),As=new Map,Bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){As.set(e,t),m(t,[e])}for(var wo=0;wo<Bs.length;wo++){var ko=Bs[wo],kf=ko.toLowerCase(),jf=ko[0].toUpperCase()+ko.slice(1);dn(kf,"on"+jf)}dn(Fs,"onAnimationEnd"),dn(Ds,"onAnimationIteration"),dn(Us,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Is,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function $s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xi(r,t,void 0,e),e.currentTarget=null}function Ws(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var c=r.length-1;0<=c;c--){var f=r[c],h=f.instance,N=f.currentTarget;if(f=f.listener,h!==o&&l.isPropagationStopped())break e;$s(l,f,N),o=h}else for(c=0;c<r.length;c++){if(f=r[c],h=f.instance,N=f.currentTarget,f=f.listener,h!==o&&l.isPropagationStopped())break e;$s(l,f,N),o=h}}}if(gt)throw e=Vr,gt=!1,Vr=null,e}function be(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(Vs(t,e,2,!1),n.add(r))}function jo(e,t,n){var r=0;t&&(r|=4),Vs(n,e,r,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function ol(e){if(!e[Xl]){e[Xl]=!0,d.forEach(function(n){n!=="selectionchange"&&(_f.has(n)||jo(n,!1,e),jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,jo("selectionchange",!1,t))}}function Vs(e,t,n,r){switch(ps(t)){case 1:var l=Fd;break;case 4:l=Dd;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!Wr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function _o(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(c===4)for(c=r.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;c=c.return}for(;f!==null;){if(c=Bn(f),c===null)return;if(h=c.tag,h===5||h===6){r=o=c;continue e}f=f.parentNode}}r=r.return}Ae(function(){var N=o,T=Ar(n),F=[];e:{var L=As.get(e);if(L!==void 0){var $=ao,J=e;switch(e){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":$=qd;break;case"focusin":J="focus",$=co;break;case"focusout":J="blur",$=co;break;case"beforeblur":case"afterblur":$=co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=tf;break;case Fs:case Ds:case Us:$=Wd;break;case Is:$=rf;break;case"scroll":$=Ud;break;case"wheel":$=of;break;case"copy":case"cut":case"paste":$=Hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=ys}var K=(t&4)!==0,Me=!K&&e==="scroll",k=K?L!==null?L+"Capture":null:L;K=[];for(var v=N,b;v!==null;){b=v;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,k!==null&&(D=Fn(v,k),D!=null&&K.push(al(v,D,b)))),Me)break;v=v.return}0<K.length&&(L=new $(L,J,null,n,T),F.push({event:L,listeners:K}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&n!==Ir&&(J=n.relatedTarget||n.fromElement)&&(Bn(J)||J[At]))break e;if(($||L)&&(L=T.window===T?T:(L=T.ownerDocument)?L.defaultView||L.parentWindow:window,$?(J=n.relatedTarget||n.toElement,$=N,J=J?Bn(J):null,J!==null&&(Me=It(J),J!==Me||J.tag!==5&&J.tag!==6)&&(J=null)):($=null,J=N),$!==J)){if(K=gs,D="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(K=ys,D="onPointerLeave",k="onPointerEnter",v="pointer"),Me=$==null?L:cr($),b=J==null?L:cr(J),L=new K(D,v+"leave",$,n,T),L.target=Me,L.relatedTarget=b,D=null,Bn(T)===N&&(K=new K(k,v+"enter",J,n,T),K.target=b,K.relatedTarget=Me,D=K),Me=D,$&&J)t:{for(K=$,k=J,v=0,b=K;b;b=sr(b))v++;for(b=0,D=k;D;D=sr(D))b++;for(;0<v-b;)K=sr(K),v--;for(;0<b-v;)k=sr(k),b--;for(;v--;){if(K===k||k!==null&&K===k.alternate)break t;K=sr(K),k=sr(k)}K=null}else K=null;$!==null&&Hs(F,L,$,K,!1),J!==null&&Me!==null&&Hs(F,Me,J,K,!0)}}e:{if(L=N?cr(N):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var Y=pf;else if(bs(L))if(Ns)Y=vf;else{Y=hf;var ee=mf}else($=L.nodeName)&&$.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Y=gf);if(Y&&(Y=Y(e,N))){Ss(F,Y,n,T);break e}ee&&ee(e,L,N),e==="focusout"&&(ee=L._wrapperState)&&ee.controlled&&L.type==="number"&&nr(L,"number",L.value)}switch(ee=N?cr(N):window,e){case"focusin":(bs(ee)||ee.contentEditable==="true")&&(or=ee,vo=N,ll=null);break;case"focusout":ll=vo=or=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Ms(F,n,T);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":Ms(F,n,T)}var te;if(po)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else ir?js(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(xs&&n.locale!=="ko"&&(ir||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ir&&(te=ms()):(cn=T,oo="value"in cn?cn.value:cn.textContent,ir=!0)),ee=ql(N,ie),0<ee.length&&(ie=new vs(ie,e,null,n,T),F.push({event:ie,listeners:ee}),te?ie.data=te:(te=_s(n),te!==null&&(ie.data=te)))),(te=sf?uf(e,n):cf(e,n))&&(N=ql(N,"onBeforeInput"),0<N.length&&(T=new vs("onBeforeInput","beforeinput",null,n,T),F.push({event:T,listeners:N}),T.data=te))}Ws(F,t)})}function al(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ql(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(al(e,o,l)),o=Fn(e,t),o!=null&&r.push(al(e,o,l))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,t,n,r,l){for(var o=t._reactName,c=[];n!==null&&n!==r;){var f=n,h=f.alternate,N=f.stateNode;if(h!==null&&h===r)break;f.tag===5&&N!==null&&(f=N,l?(h=Fn(n,o),h!=null&&c.unshift(al(n,h,f))):l||(h=Fn(n,o),h!=null&&c.push(al(n,h,f)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var bf=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(bf,`
`).replace(Sf,"")}function Zl(e,t,n){if(t=Qs(t),Qs(e)!==t&&n)throw Error(s(425))}function ei(){}var bo=null,So=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eo=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0,Js=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Js<"u"?function(e){return Js.resolve(null).then(e).catch(Cf)}:Eo;function Cf(e){setTimeout(function(){throw e})}function Co(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xr(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),Mt="__reactFiber$"+ur,sl="__reactProps$"+ur,At="__reactContainer$"+ur,Po="__reactEvents$"+ur,Pf="__reactListeners$"+ur,Rf="__reactHandles$"+ur;function Bn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[Mt])return n;e=Ks(e)}return t}e=n,n=e.parentNode}return null}function ul(e){return e=e[Mt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ti(e){return e[sl]||null}var Ro=[],dr=-1;function pn(e){return{current:e}}function Se(e){0>dr||(e.current=Ro[dr],Ro[dr]=null,dr--)}function _e(e,t){dr++,Ro[dr]=e.current,e.current=t}var mn={},Ye=pn(mn),nt=pn(!1),$n=mn;function fr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function ni(){Se(nt),Se(Ye)}function Gs(e,t,n){if(Ye.current!==mn)throw Error(s(168));_e(Ye,t),_e(nt,n)}function Ys(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ye(e)||"Unknown",l));return B({},n,r)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,$n=Ye.current,_e(Ye,e),_e(nt,nt.current),!0}function Xs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Ys(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(Ye),_e(Ye,e)):Se(nt),_e(nt,n)}var Bt=null,li=!1,Lo=!1;function qs(e){Bt===null?Bt=[e]:Bt.push(e)}function Lf(e){li=!0,qs(e)}function hn(){if(!Lo&&Bt!==null){Lo=!0;var e=0,t=xe;try{var n=Bt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,li=!1}catch(l){throw Bt!==null&&(Bt=Bt.slice(e+1)),ze(qi,hn),l}finally{xe=t,Lo=!1}}return null}var pr=[],mr=0,ii=null,oi=0,vt=[],yt=0,Wn=null,$t=1,Wt="";function Vn(e,t){pr[mr++]=oi,pr[mr++]=ii,ii=e,oi=t}function Zs(e,t,n){vt[yt++]=$t,vt[yt++]=Wt,vt[yt++]=Wn,Wn=e;var r=$t;e=Wt;var l=32-bt(r)-1;r&=~(1<<l),n+=1;var o=32-bt(t)+l;if(30<o){var c=l-l%5;o=(r&(1<<c)-1).toString(32),r>>=c,l-=c,$t=1<<32-bt(t)+l|n<<l|r,Wt=o+e}else $t=1<<o|n<<l|r,Wt=e}function zo(e){e.return!==null&&(Vn(e,1),Zs(e,1,0))}function To(e){for(;e===ii;)ii=pr[--mr],pr[mr]=null,oi=pr[--mr],pr[mr]=null;for(;e===Wn;)Wn=vt[--yt],vt[yt]=null,Wt=vt[--yt],vt[yt]=null,$t=vt[--yt],vt[yt]=null}var ft=null,pt=null,Ne=!1,Nt=null;function eu(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,pt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:$t,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,pt=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(Ne){var t=pt;if(t){var n=t;if(!tu(e,t)){if(Mo(e))throw Error(s(418));t=fn(n.nextSibling);var r=ft;t&&tu(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,Ne=!1,ft=e)}}else{if(Mo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ne=!1,ft=e}}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ai(e){if(e!==ft)return!1;if(!Ne)return nu(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=pt)){if(Mo(e))throw ru(),Error(s(418));for(;t;)eu(e,t),t=fn(t.nextSibling)}if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ft?fn(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=pt;e;)e=fn(e.nextSibling)}function hr(){pt=ft=null,Ne=!1}function Fo(e){Nt===null?Nt=[e]:Nt.push(e)}var zf=G.ReactCurrentBatchConfig;function cl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(c){var f=l.refs;c===null?delete f[o]:f[o]=c},t._stringRef=o,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function si(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function iu(e){function t(k,v){if(e){var b=k.deletions;b===null?(k.deletions=[v],k.flags|=16):b.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function r(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function l(k,v){return k=_n(k,v),k.index=0,k.sibling=null,k}function o(k,v,b){return k.index=b,e?(b=k.alternate,b!==null?(b=b.index,b<v?(k.flags|=2,v):b):(k.flags|=2,v)):(k.flags|=1048576,v)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function f(k,v,b,D){return v===null||v.tag!==6?(v=Ea(b,k.mode,D),v.return=k,v):(v=l(v,b),v.return=k,v)}function h(k,v,b,D){var Y=b.type;return Y===Re?T(k,v,b.props.children,D,b.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===q&&lu(Y)===v.type)?(D=l(v,b.props),D.ref=cl(k,v,b),D.return=k,D):(D=zi(b.type,b.key,b.props,null,k.mode,D),D.ref=cl(k,v,b),D.return=k,D)}function N(k,v,b,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=Ca(b,k.mode,D),v.return=k,v):(v=l(v,b.children||[]),v.return=k,v)}function T(k,v,b,D,Y){return v===null||v.tag!==7?(v=qn(b,k.mode,D,Y),v.return=k,v):(v=l(v,b),v.return=k,v)}function F(k,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ea(""+v,k.mode,b),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return b=zi(v.type,v.key,v.props,null,k.mode,b),b.ref=cl(k,null,v),b.return=k,b;case we:return v=Ca(v,k.mode,b),v.return=k,v;case q:var D=v._init;return F(k,D(v._payload),b)}if(Tn(v)||Q(v))return v=qn(v,k.mode,b,null),v.return=k,v;si(k,v)}return null}function L(k,v,b,D){var Y=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Y!==null?null:f(k,v,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Z:return b.key===Y?h(k,v,b,D):null;case we:return b.key===Y?N(k,v,b,D):null;case q:return Y=b._init,L(k,v,Y(b._payload),D)}if(Tn(b)||Q(b))return Y!==null?null:T(k,v,b,D,null);si(k,b)}return null}function $(k,v,b,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number")return k=k.get(b)||null,f(v,k,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Z:return k=k.get(D.key===null?b:D.key)||null,h(v,k,D,Y);case we:return k=k.get(D.key===null?b:D.key)||null,N(v,k,D,Y);case q:var ee=D._init;return $(k,v,b,ee(D._payload),Y)}if(Tn(D)||Q(D))return k=k.get(b)||null,T(v,k,D,Y,null);si(v,D)}return null}function J(k,v,b,D){for(var Y=null,ee=null,te=v,ie=v=0,We=null;te!==null&&ie<b.length;ie++){te.index>ie?(We=te,te=null):We=te.sibling;var ge=L(k,te,b[ie],D);if(ge===null){te===null&&(te=We);break}e&&te&&ge.alternate===null&&t(k,te),v=o(ge,v,ie),ee===null?Y=ge:ee.sibling=ge,ee=ge,te=We}if(ie===b.length)return n(k,te),Ne&&Vn(k,ie),Y;if(te===null){for(;ie<b.length;ie++)te=F(k,b[ie],D),te!==null&&(v=o(te,v,ie),ee===null?Y=te:ee.sibling=te,ee=te);return Ne&&Vn(k,ie),Y}for(te=r(k,te);ie<b.length;ie++)We=$(te,k,ie,b[ie],D),We!==null&&(e&&We.alternate!==null&&te.delete(We.key===null?ie:We.key),v=o(We,v,ie),ee===null?Y=We:ee.sibling=We,ee=We);return e&&te.forEach(function(bn){return t(k,bn)}),Ne&&Vn(k,ie),Y}function K(k,v,b,D){var Y=Q(b);if(typeof Y!="function")throw Error(s(150));if(b=Y.call(b),b==null)throw Error(s(151));for(var ee=Y=null,te=v,ie=v=0,We=null,ge=b.next();te!==null&&!ge.done;ie++,ge=b.next()){te.index>ie?(We=te,te=null):We=te.sibling;var bn=L(k,te,ge.value,D);if(bn===null){te===null&&(te=We);break}e&&te&&bn.alternate===null&&t(k,te),v=o(bn,v,ie),ee===null?Y=bn:ee.sibling=bn,ee=bn,te=We}if(ge.done)return n(k,te),Ne&&Vn(k,ie),Y;if(te===null){for(;!ge.done;ie++,ge=b.next())ge=F(k,ge.value,D),ge!==null&&(v=o(ge,v,ie),ee===null?Y=ge:ee.sibling=ge,ee=ge);return Ne&&Vn(k,ie),Y}for(te=r(k,te);!ge.done;ie++,ge=b.next())ge=$(te,k,ie,ge.value,D),ge!==null&&(e&&ge.alternate!==null&&te.delete(ge.key===null?ie:ge.key),v=o(ge,v,ie),ee===null?Y=ge:ee.sibling=ge,ee=ge);return e&&te.forEach(function(dp){return t(k,dp)}),Ne&&Vn(k,ie),Y}function Me(k,v,b,D){if(typeof b=="object"&&b!==null&&b.type===Re&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Z:e:{for(var Y=b.key,ee=v;ee!==null;){if(ee.key===Y){if(Y=b.type,Y===Re){if(ee.tag===7){n(k,ee.sibling),v=l(ee,b.props.children),v.return=k,k=v;break e}}else if(ee.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===q&&lu(Y)===ee.type){n(k,ee.sibling),v=l(ee,b.props),v.ref=cl(k,ee,b),v.return=k,k=v;break e}n(k,ee);break}else t(k,ee);ee=ee.sibling}b.type===Re?(v=qn(b.props.children,k.mode,D,b.key),v.return=k,k=v):(D=zi(b.type,b.key,b.props,null,k.mode,D),D.ref=cl(k,v,b),D.return=k,k=D)}return c(k);case we:e:{for(ee=b.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(k,v.sibling),v=l(v,b.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=Ca(b,k.mode,D),v.return=k,k=v}return c(k);case q:return ee=b._init,Me(k,v,ee(b._payload),D)}if(Tn(b))return J(k,v,b,D);if(Q(b))return K(k,v,b,D);si(k,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(k,v.sibling),v=l(v,b),v.return=k,k=v):(n(k,v),v=Ea(b,k.mode,D),v.return=k,k=v),c(k)):n(k,v)}return Me}var gr=iu(!0),ou=iu(!1),ui=pn(null),ci=null,vr=null,Do=null;function Uo(){Do=vr=ci=null}function Io(e){var t=ui.current;Se(ui),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ci=e,Do=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(ci===null)throw Error(s(308));vr=e,ci.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Hn=null;function Bo(e){Hn===null?Hn=[e]:Hn.push(e)}function au(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Vt(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Vt(e,n)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var l=e.updateQueue;gn=!1;var o=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var h=f,N=h.next;h.next=null,c===null?o=N:c.next=N,c=h;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==c&&(f===null?T.firstBaseUpdate=N:f.next=N,T.lastBaseUpdate=h))}if(o!==null){var F=l.baseState;c=0,T=N=h=null,f=o;do{var L=f.lane,$=f.eventTime;if((r&L)===L){T!==null&&(T=T.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var J=e,K=f;switch(L=t,$=n,K.tag){case 1:if(J=K.payload,typeof J=="function"){F=J.call($,F,L);break e}F=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=K.payload,L=typeof J=="function"?J.call($,F,L):J,L==null)break e;F=B({},F,L);break e;case 2:gn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[f]:L.push(f))}else $={eventTime:$,lane:L,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(N=T=$,h=F):T=T.next=$,c|=L;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;L=f,f=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(T===null&&(h=F),l.baseState=h,l.firstBaseUpdate=N,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Kn|=c,e.lanes=c,e.memoizedState=F}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var dl={},Ot=pn(dl),fl=pn(dl),pl=pn(dl);function Qn(e){if(e===dl)throw Error(s(174));return e}function Wo(e,t){switch(_e(pl,t),_e(fl,e),_e(Ot,dl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:On(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=On(t,e)}Se(Ot),_e(Ot,t)}function xr(){Se(Ot),Se(fl),Se(pl)}function du(e){Qn(pl.current);var t=Qn(Ot.current),n=On(t,e.type);t!==n&&(_e(fl,e),_e(Ot,n))}function Vo(e){fl.current===e&&(Se(Ot),Se(fl))}var Ee=pn(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function Qo(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var mi=G.ReactCurrentDispatcher,Jo=G.ReactCurrentBatchConfig,Jn=0,Ce=null,Ue=null,Be=null,hi=!1,ml=!1,hl=0,Tf=0;function Xe(){throw Error(s(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,l,o){if(Jn=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?Df:Uf,e=n(r,l),ml){o=0;do{if(ml=!1,hl=0,25<=o)throw Error(s(301));o+=1,Be=Ue=null,t.updateQueue=null,mi.current=If,e=n(r,l)}while(ml)}if(mi.current=yi,t=Ue!==null&&Ue.next!==null,Jn=0,Be=Ue=Ce=null,hi=!1,t)throw Error(s(300));return e}function Yo(){var e=hl!==0;return hl=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ce.memoizedState=Be=e:Be=Be.next=e,Be}function wt(){if(Ue===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Be===null?Ce.memoizedState:Be.next;if(t!==null)Be=t,Ue=e;else{if(e===null)throw Error(s(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Be===null?Ce.memoizedState=Be=e:Be=Be.next=e}return Be}function gl(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=wt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Ue,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var c=l.next;l.next=o.next,o.next=c}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var f=c=null,h=null,N=o;do{var T=N.lane;if((Jn&T)===T)h!==null&&(h=h.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),r=N.hasEagerState?N.eagerState:e(r,N.action);else{var F={lane:T,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};h===null?(f=h=F,c=r):h=h.next=F,Ce.lanes|=T,Kn|=T}N=N.next}while(N!==null&&N!==o);h===null?c=r:h.next=f,St(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Ce.lanes|=o,Kn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=wt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do o=e(o,c.action),c=c.next;while(c!==l);St(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function pu(e,t){var n=Ce,r=wt(),l=t(),o=!St(r.memoizedState,l);if(o&&(r.memoizedState=l,lt=!0),r=r.queue,Zo(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,vl(9,hu.bind(null,n,r,l,t),void 0,null),$e===null)throw Error(s(349));(Jn&30)!==0||mu(n,t,l)}return l}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function gu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function yu(e){var t=Vt(e,1);t!==null&&Rt(t,e,1,-1)}function xu(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:e},t.queue=e,e=e.dispatch=Ff.bind(null,Ce,e),[t.memoizedState,e]}function vl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return wt().memoizedState}function gi(e,t,n,r){var l=Ft();Ce.flags|=e,l.memoizedState=vl(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var l=wt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var c=Ue.memoizedState;if(o=c.destroy,r!==null&&Ko(r,c.deps)){l.memoizedState=vl(t,n,o,r);return}}Ce.flags|=e,l.memoizedState=vl(1|t,n,o,r)}function ku(e,t){return gi(8390656,8,e,t)}function Zo(e,t){return vi(2048,8,e,t)}function ju(e,t){return vi(4,2,e,t)}function _u(e,t){return vi(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,4,bu.bind(null,t,e),n)}function ea(){}function Nu(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cu(e,t,n){return(Jn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(St(n,t)||(n=ls(),Ce.lanes|=n,Kn|=n,e.baseState=!0),t)}function Mf(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Jo.transition;Jo.transition={};try{e(!1),t()}finally{xe=n,Jo.transition=r}}function Pu(){return wt().memoizedState}function Of(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ru(e))Lu(t,n);else if(n=au(e,t,n,r),n!==null){var l=tt();Rt(n,e,r,l),zu(n,t,r)}}function Ff(e,t,n){var r=kn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Lu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,f=o(c,n);if(l.hasEagerState=!0,l.eagerState=f,St(f,c)){var h=t.interleaved;h===null?(l.next=l,Bo(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=au(e,t,l,r),n!==null&&(l=tt(),Rt(n,e,r,l),zu(n,t,r))}}function Ru(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Lu(e,t){ml=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var yi={readContext:xt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Df={readContext:xt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Of.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:ea,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=Mf.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,l=Ft();if(Ne){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),$e===null)throw Error(s(349));(Jn&30)!==0||mu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ku(gu.bind(null,r,o,e),[e]),r.flags|=2048,vl(9,hu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ft(),t=$e.identifierPrefix;if(Ne){var n=Wt,r=$t;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:xt,useCallback:Nu,useContext:xt,useEffect:Zo,useImperativeHandle:Su,useInsertionEffect:ju,useLayoutEffect:_u,useMemo:Eu,useReducer:Xo,useRef:wu,useState:function(){return Xo(gl)},useDebugValue:ea,useDeferredValue:function(e){var t=wt();return Cu(t,Ue.memoizedState,e)},useTransition:function(){var e=Xo(gl)[0],t=wt().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:Pu,unstable_isNewReconciler:!1},If={readContext:xt,useCallback:Nu,useContext:xt,useEffect:Zo,useImperativeHandle:Su,useInsertionEffect:ju,useLayoutEffect:_u,useMemo:Eu,useReducer:qo,useRef:wu,useState:function(){return qo(gl)},useDebugValue:ea,useDeferredValue:function(e){var t=wt();return Ue===null?t.memoizedState=e:Cu(t,Ue.memoizedState,e)},useTransition:function(){var e=qo(gl)[0],t=wt().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:Pu,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ta(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),l=kn(e),o=Ht(r,l);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,l),t!==null&&(Rt(t,e,l,r),di(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),l=kn(e),o=Ht(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,l),t!==null&&(Rt(t,e,l,r),di(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=kn(e),l=Ht(n,r);l.tag=2,t!=null&&(l.callback=t),t=vn(e,l,r),t!==null&&(Rt(t,e,r,n),di(t,e,r))}};function Tu(e,t,n,r,l,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,c):t.prototype&&t.prototype.isPureReactComponent?!rl(n,r)||!rl(l,o):!0}function Mu(e,t,n){var r=!1,l=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(l=rt(t)?$n:Ye.current,r=t.contextTypes,o=(r=r!=null)?fr(e,l):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function na(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},$o(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=xt(o):(o=rt(t)?$n:Ye.current,l.context=fr(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ta(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&xi.enqueueReplaceState(l,l.state,null),fi(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var n="",r=t;do n+=pe(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function Fu(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,xa=r),la(e,t)},n}function Du(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){la(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ep.bind(null,e,t,n),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Bf=G.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?ou(t,null,n,r):gr(t,e.child,n,r)}function Bu(e,t,n,r,l){n=n.render;var o=t.ref;return yr(t,l),r=Go(e,t,n,r,o,l),n=Yo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(Ne&&n&&zo(t),t.flags|=1,et(e,t,r,l),t.child)}function $u(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Na(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wu(e,t,o,r,l)):(e=zi(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(c,r)&&e.ref===t.ref)return Qt(e,t,l)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(rl(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Qt(e,t,l)}return ia(e,t,n,r,l)}function Vu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(jr,mt),mt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(jr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(jr,mt),mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(jr,mt),mt|=r;return et(e,t,l,n),t.child}function Hu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ia(e,t,n,r,l){var o=rt(n)?$n:Ye.current;return o=fr(t,o),yr(t,l),n=Go(e,t,n,r,o,l),r=Yo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(Ne&&r&&zo(t),t.flags|=1,et(e,t,n,l),t.child)}function Qu(e,t,n,r,l){if(rt(n)){var o=!0;ri(t)}else o=!1;if(yr(t,l),t.stateNode===null)ki(e,t),Mu(t,n,r),na(t,n,r,l),r=!0;else if(e===null){var c=t.stateNode,f=t.memoizedProps;c.props=f;var h=c.context,N=n.contextType;typeof N=="object"&&N!==null?N=xt(N):(N=rt(n)?$n:Ye.current,N=fr(t,N));var T=n.getDerivedStateFromProps,F=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function";F||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==r||h!==N)&&Ou(t,c,r,N),gn=!1;var L=t.memoizedState;c.state=L,fi(t,r,c,l),h=t.memoizedState,f!==r||L!==h||nt.current||gn?(typeof T=="function"&&(ta(t,n,T,r),h=t.memoizedState),(f=gn||Tu(t,n,f,r,L,h,N))?(F||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),c.props=r,c.state=h,c.context=N,r=f):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,su(e,t),f=t.memoizedProps,N=t.type===t.elementType?f:Et(t.type,f),c.props=N,F=t.pendingProps,L=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=xt(h):(h=rt(n)?$n:Ye.current,h=fr(t,h));var $=n.getDerivedStateFromProps;(T=typeof $=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==F||L!==h)&&Ou(t,c,r,h),gn=!1,L=t.memoizedState,c.state=L,fi(t,r,c,l);var J=t.memoizedState;f!==F||L!==J||nt.current||gn?(typeof $=="function"&&(ta(t,n,$,r),J=t.memoizedState),(N=gn||Tu(t,n,N,r,L,J,h)||!1)?(T||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,J,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,J,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=J),c.props=r,c.state=J,c.context=h,r=N):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return oa(e,t,n,r,o,l)}function oa(e,t,n,r,l,o){Hu(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return l&&Xs(t,n,!1),Qt(e,t,o);r=t.stateNode,Bf.current=t;var f=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,f,o)):et(e,t,f,o),t.memoizedState=r.state,l&&Xs(t,n,!0),t.child}function Ju(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),Wo(e,t.containerInfo)}function Ku(e,t,n,r,l){return hr(),Fo(l),t.flags|=256,et(e,t,n,r),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,t,n){var r=t.pendingProps,l=Ee.current,o=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),_e(Ee,l&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,o?(r=t.mode,o=t.child,c={mode:"hidden",children:c},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=c):o=Ti(c,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sa(n),t.memoizedState=aa,e):ua(t,c));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return $f(e,t,c,r,f,l,n);if(o){o=r.fallback,c=t.mode,l=e.child,f=l.sibling;var h={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=_n(l,h),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?o=_n(f,o):(o=qn(o,c,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,c=e.child.memoizedState,c=c===null?sa(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,t.memoizedState=aa,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&Fo(r),gr(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,l,o,c){if(n)return t.flags&256?(t.flags&=-257,r=ra(Error(s(422))),wi(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ti({mode:"visible",children:r.children},l,0,null),o=qn(o,l,c,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&gr(t,e.child,null,c),t.child.memoizedState=sa(c),t.memoizedState=aa,o);if((t.mode&1)===0)return wi(e,t,c,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,o=Error(s(419)),r=ra(o,r,void 0),wi(e,t,c,r)}if(f=(c&e.childLanes)!==0,lt||f){if(r=$e,r!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|c))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Vt(e,l),Rt(r,e,l,-1))}return Sa(),r=ra(Error(s(421))),wi(e,t,c,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,pt=fn(l.nextSibling),ft=t,Ne=!0,Nt=null,e!==null&&(vt[yt++]=$t,vt[yt++]=Wt,vt[yt++]=Wn,$t=e.id,Wt=e.overflow,Wn=t),t=ua(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function ca(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Xu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ca(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ca(t,!0,n,null,o);break;case"together":ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wf(e,t,n){switch(t.tag){case 3:Ju(t),hr();break;case 5:du(t);break;case 1:rt(t.type)&&ri(t);break;case 4:Wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;_e(ui,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gu(e,t,n):(_e(Ee,Ee.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);_e(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_e(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Vu(e,t,n)}return Qt(e,t,n)}var qu,da,Zu,ec;qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},da=function(){},Zu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Qn(Ot.current);var o=null;switch(n){case"input":l=Ln(e,l),r=Ln(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=Ut(e,l),r=Ut(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}Dr(n,r);var c;n=null;for(N in l)if(!r.hasOwnProperty(N)&&l.hasOwnProperty(N)&&l[N]!=null)if(N==="style"){var f=l[N];for(c in f)f.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(p.hasOwnProperty(N)?o||(o=[]):(o=o||[]).push(N,null));for(N in r){var h=r[N];if(f=l!=null?l[N]:void 0,r.hasOwnProperty(N)&&h!==f&&(h!=null||f!=null))if(N==="style")if(f){for(c in f)!f.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&f[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(o||(o=[]),o.push(N,n)),n=h;else N==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(o=o||[]).push(N,h)):N==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(N,""+h):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(p.hasOwnProperty(N)?(h!=null&&N==="onScroll"&&be("scroll",e),o||f===h||(o=[])):(o=o||[]).push(N,h))}n&&(o=o||[]).push("style",n);var N=o;(t.updateQueue=N)&&(t.flags|=4)}},ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function yl(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(To(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return rt(t.type)&&ni(),qe(t),null;case 3:return r=t.stateNode,xr(),Se(nt),Se(Ye),Qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(ja(Nt),Nt=null))),da(e,t),qe(t),null;case 5:Vo(t);var l=Qn(pl.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return qe(t),null}if(e=Qn(Ot.current),ai(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[sl]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(l=0;l<il.length;l++)be(il[l],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Yt(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Lt(r,o),be("invalid",r)}Dr(n,o),l=null;for(var c in o)if(o.hasOwnProperty(c)){var f=o[c];c==="children"?typeof f=="string"?r.textContent!==f&&(o.suppressHydrationWarning!==!0&&Zl(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&Zl(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&be("scroll",r)}switch(n){case"input":Pn(r),ct(r,o,!0);break;case"textarea":Pn(r),Tr(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ei)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Mt]=t,e[sl]=r,qu(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ur(n,r),n){case"dialog":be("cancel",e),be("close",e),l=r;break;case"iframe":case"object":case"embed":be("load",e),l=r;break;case"video":case"audio":for(l=0;l<il.length;l++)be(il[l],e);l=r;break;case"source":be("error",e),l=r;break;case"img":case"image":case"link":be("error",e),be("load",e),l=r;break;case"details":be("toggle",e),l=r;break;case"input":Yt(e,r),l=Ln(e,r),be("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),be("invalid",e);break;case"textarea":Lt(e,r),l=Ut(e,r),be("invalid",e);break;default:l=r}Dr(n,l),f=l;for(o in f)if(f.hasOwnProperty(o)){var h=f[o];o==="style"?tn(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Or(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&qt(e,h):typeof h=="number"&&qt(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(p.hasOwnProperty(o)?h!=null&&o==="onScroll"&&be("scroll",e):h!=null&&ae(e,o,h,c))}switch(n){case"input":Pn(e),ct(e,r,!1);break;case"textarea":Pn(e),Tr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ve(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=Qn(pl.current),Qn(Ot.current),ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Zl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return qe(t),null;case 13:if(Se(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ru(),hr(),t.flags|=98560,o=!1;else if(o=ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Mt]=t}else hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),o=!1}else Nt!==null&&(ja(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ie===0&&(Ie=3):Sa())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return xr(),da(e,t),e===null&&ol(t.stateNode.containerInfo),qe(t),null;case 10:return Io(t.type._context),qe(t),null;case 17:return rt(t.type)&&ni(),qe(t),null;case 19:if(Se(Ee),o=t.memoizedState,o===null)return qe(t),null;if(r=(t.flags&128)!==0,c=o.rendering,c===null)if(r)yl(o,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=pi(e),c!==null){for(t.flags|=128,yl(o,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>_r&&(t.flags|=128,r=!0,yl(o,!1),t.lanes=4194304)}else{if(!r)if(e=pi(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!Ne)return qe(t),null}else 2*Te()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,yl(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(n=o.last,n!==null?n.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Ee.current,_e(Ee,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(mt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Hf(e,t){switch(To(t),t.tag){case 1:return rt(t.type)&&ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),Se(nt),Se(Ye),Qo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vo(t),null;case 13:if(Se(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return xr(),null;case 10:return Io(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var ji=!1,Ze=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,H=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function fa(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var tc=!1;function Jf(e,t){if(bo=$l,e=Ts(),go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,f=-1,h=-1,N=0,T=0,F=e,L=null;t:for(;;){for(var $;F!==n||l!==0&&F.nodeType!==3||(f=c+l),F!==o||r!==0&&F.nodeType!==3||(h=c+r),F.nodeType===3&&(c+=F.nodeValue.length),($=F.firstChild)!==null;)L=F,F=$;for(;;){if(F===e)break t;if(L===n&&++N===l&&(f=c),L===o&&++T===r&&(h=c),($=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=$}n=f===-1||h===-1?null:{start:f,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},$l=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var J=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var K=J.memoizedProps,Me=J.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?K:Et(t.type,K),Me);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(D){Pe(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return J=tc,tc=!1,J}function xl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&fa(t,n,o)}l=l.next}while(l!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[sl],delete t[Po],delete t[Pf],delete t[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rc(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var He=null,Ct=!1;function yn(e,t,n){for(n=n.child;n!==null;)ic(e,t,n),n=n.sibling}function ic(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Ze||kr(n,t);case 6:var r=He,l=Ct;He=null,yn(e,t,n),He=r,Ct=l,He!==null&&(Ct?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ct?(e=He,n=n.stateNode,e.nodeType===8?Co(e.parentNode,n):e.nodeType===1&&Co(e,n),Xr(e)):Co(He,n.stateNode));break;case 4:r=He,l=Ct,He=n.stateNode.containerInfo,Ct=!0,yn(e,t,n),He=r,Ct=l;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,c=o.destroy;o=o.tag,c!==void 0&&((o&2)!==0||(o&4)!==0)&&fa(n,t,c),l=l.next}while(l!==r)}yn(e,t,n);break;case 1:if(!Ze&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Pe(n,t,f)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,yn(e,t,n),Ze=r):yn(e,t,n);break;default:yn(e,t,n)}}function oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qf),t.forEach(function(r){var l=np.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 5:He=f.stateNode,Ct=!1;break e;case 3:He=f.stateNode.containerInfo,Ct=!0;break e;case 4:He=f.stateNode.containerInfo,Ct=!0;break e}f=f.return}if(He===null)throw Error(s(160));ic(o,c,l),He=null,Ct=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(N){Pe(l,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ac(t,e),t=t.sibling}function ac(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Dt(e),r&4){try{xl(3,e,e.return),_i(3,e)}catch(K){Pe(e,e.return,K)}try{xl(5,e,e.return)}catch(K){Pe(e,e.return,K)}}break;case 1:Pt(t,e),Dt(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(Pt(t,e),Dt(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var l=e.stateNode;try{qt(l,"")}catch(K){Pe(e,e.return,K)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&ut(l,o),Ur(f,c);var N=Ur(f,o);for(c=0;c<h.length;c+=2){var T=h[c],F=h[c+1];T==="style"?tn(l,F):T==="dangerouslySetInnerHTML"?Or(l,F):T==="children"?qt(l,F):ae(l,T,F,N)}switch(f){case"input":zn(l,o);break;case"textarea":Mn(l,o);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var $=o.value;$!=null?Xt(l,!!o.multiple,$,!1):L!==!!o.multiple&&(o.defaultValue!=null?Xt(l,!!o.multiple,o.defaultValue,!0):Xt(l,!!o.multiple,o.multiple?[]:"",!1))}l[sl]=o}catch(K){Pe(e,e.return,K)}}break;case 6:if(Pt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(K){Pe(e,e.return,K)}}break;case 3:if(Pt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(K){Pe(e,e.return,K)}break;case 4:Pt(t,e),Dt(e);break;case 13:Pt(t,e),Dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ya=Te())),r&4&&oc(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(N=Ze)||T,Pt(t,e),Ze=N):Pt(t,e),Dt(e),r&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!T&&(e.mode&1)!==0)for(H=e,T=e.child;T!==null;){for(F=H=T;H!==null;){switch(L=H,$=L.child,L.tag){case 0:case 11:case 14:case 15:xl(4,L,L.return);break;case 1:kr(L,L.return);var J=L.stateNode;if(typeof J.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(K){Pe(r,n,K)}}break;case 5:kr(L,L.return);break;case 22:if(L.memoizedState!==null){cc(F);continue}}$!==null?($.return=L,H=$):cc(F)}T=T.sibling}e:for(T=null,F=e;;){if(F.tag===5){if(T===null){T=F;try{l=F.stateNode,N?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=F.stateNode,h=F.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=Fr("display",c))}catch(K){Pe(e,e.return,K)}}}else if(F.tag===6){if(T===null)try{F.stateNode.nodeValue=N?"":F.memoizedProps}catch(K){Pe(e,e.return,K)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;T===F&&(T=null),F=F.return}T===F&&(T=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Pt(t,e),Dt(e),r&4&&oc(e);break;case 21:break;default:Pt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rc(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qt(l,""),r.flags&=-33);var o=lc(e);ha(e,o,l);break;case 3:case 4:var c=r.stateNode.containerInfo,f=lc(e);ma(e,f,c);break;default:throw Error(s(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){H=e,sc(e)}function sc(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var l=H,o=l.child;if(l.tag===22&&r){var c=l.memoizedState!==null||ji;if(!c){var f=l.alternate,h=f!==null&&f.memoizedState!==null||Ze;f=ji;var N=Ze;if(ji=c,(Ze=h)&&!N)for(H=l;H!==null;)c=H,h=c.child,c.tag===22&&c.memoizedState!==null?dc(l):h!==null?(h.return=c,H=h):dc(l);for(;o!==null;)H=o,sc(o),o=o.sibling;H=l,ji=f,Ze=N}uc(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,H=o):uc(e)}}function uc(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cu(t,o,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,c,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var T=N.memoizedState;if(T!==null){var F=T.dehydrated;F!==null&&Xr(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ze||t.flags&512&&pa(t)}catch(L){Pe(t,t.return,L)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function cc(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function dc(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(h){Pe(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(h){Pe(t,l,h)}}var o=t.return;try{pa(t)}catch(h){Pe(t,o,h)}break;case 5:var c=t.return;try{pa(t)}catch(h){Pe(t,c,h)}}}catch(h){Pe(t,t.return,h)}if(t===e){H=null;break}var f=t.sibling;if(f!==null){f.return=t.return,H=f;break}H=t.return}}var Gf=Math.ceil,bi=G.ReactCurrentDispatcher,ga=G.ReactCurrentOwner,kt=G.ReactCurrentBatchConfig,he=0,$e=null,Fe=null,Qe=0,mt=0,jr=pn(0),Ie=0,wl=null,Kn=0,Si=0,va=0,kl=null,it=null,ya=0,_r=1/0,Jt=null,Ni=!1,xa=null,xn=null,Ei=!1,wn=null,Ci=0,jl=0,wa=null,Pi=-1,Ri=0;function tt(){return(he&6)!==0?Te():Pi!==-1?Pi:Pi=Te()}function kn(e){return(e.mode&1)===0?1:(he&2)!==0&&Qe!==0?Qe&-Qe:zf.transition!==null?(Ri===0&&(Ri=ls()),Ri):(e=xe,e!==0||(e=window.event,e=e===void 0?16:ps(e.type)),e)}function Rt(e,t,n,r){if(50<jl)throw jl=0,wa=null,Error(s(185));Qr(e,n,r),((he&2)===0||e!==$e)&&(e===$e&&((he&2)===0&&(Si|=n),Ie===4&&jn(e,Qe)),ot(e,r),n===1&&he===0&&(t.mode&1)===0&&(_r=Te()+500,li&&hn()))}function ot(e,t){var n=e.callbackNode;Ld(e,t);var r=Il(e,e===$e?Qe:0);if(r===0)n!==null&&An(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&An(n),t===1)e.tag===0?Lf(pc.bind(null,e)):qs(pc.bind(null,e)),Ef(function(){(he&6)===0&&hn()}),n=null;else{switch(is(r)){case 1:n=qi;break;case 4:n=ns;break;case 16:n=Ol;break;case 536870912:n=rs;break;default:n=Ol}n=kc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Pi=-1,Ri=0,(he&6)!==0)throw Error(s(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=Il(e,e===$e?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Li(e,r);else{t=r;var l=he;he|=2;var o=hc();($e!==e||Qe!==t)&&(Jt=null,_r=Te()+500,Yn(e,t));do try{qf();break}catch(f){mc(e,f)}while(!0);Uo(),bi.current=o,he=l,Fe!==null?t=0:($e=null,Qe=0,t=Ie)}if(t!==0){if(t===2&&(l=Zi(e),l!==0&&(r=l,t=ka(e,l))),t===1)throw n=wl,Yn(e,0),jn(e,r),ot(e,Te()),n;if(t===6)jn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Yf(l)&&(t=Li(e,r),t===2&&(o=Zi(e),o!==0&&(r=o,t=ka(e,o))),t===1))throw n=wl,Yn(e,0),jn(e,r),ot(e,Te()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Xn(e,it,Jt);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=ya+500-Te(),10<t)){if(Il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Eo(Xn.bind(null,e,it,Jt),t);break}Xn(e,it,Jt);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var c=31-bt(r);o=1<<c,c=t[c],c>l&&(l=c),r&=~o}if(r=l,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gf(r/1960))-r,10<r){e.timeoutHandle=Eo(Xn.bind(null,e,it,Jt),r);break}Xn(e,it,Jt);break;case 5:Xn(e,it,Jt);break;default:throw Error(s(329))}}}return ot(e,Te()),e.callbackNode===n?fc.bind(null,e):null}function ka(e,t){var n=kl;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=it,it=n,t!==null&&ja(t)),e}function ja(e){it===null?it=e:it.push.apply(it,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!St(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~va,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if((he&6)!==0)throw Error(s(327));br();var t=Il(e,0);if((t&1)===0)return ot(e,Te()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=Zi(e);r!==0&&(t=r,n=ka(e,r))}if(n===1)throw n=wl,Yn(e,0),jn(e,t),ot(e,Te()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,it,Jt),ot(e,Te()),null}function _a(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(_r=Te()+500,li&&hn())}}function Gn(e){wn!==null&&wn.tag===0&&(he&6)===0&&br();var t=he;he|=1;var n=kt.transition,r=xe;try{if(kt.transition=null,xe=1,e)return e()}finally{xe=r,kt.transition=n,he=t,(he&6)===0&&hn()}}function ba(){mt=jr.current,Se(jr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nf(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(To(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:xr(),Se(nt),Se(Ye),Qo();break;case 5:Vo(r);break;case 4:xr();break;case 13:Se(Ee);break;case 19:Se(Ee);break;case 10:Io(r.type._context);break;case 22:case 23:ba()}n=n.return}if($e=e,Fe=e=_n(e.current,null),Qe=mt=t,Ie=0,wl=null,va=Si=Kn=0,it=kl=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var c=o.next;o.next=l,r.next=c}n.pending=r}Hn=null}return e}function mc(e,t){do{var n=Fe;try{if(Uo(),mi.current=yi,hi){for(var r=Ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}hi=!1}if(Jn=0,Be=Ue=Ce=null,ml=!1,hl=0,ga.current=null,n===null||n.return===null){Ie=1,wl=t,Fe=null;break}e:{var o=e,c=n.return,f=n,h=t;if(t=Qe,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var N=h,T=f,F=T.tag;if((T.mode&1)===0&&(F===0||F===11||F===15)){var L=T.alternate;L?(T.updateQueue=L.updateQueue,T.memoizedState=L.memoizedState,T.lanes=L.lanes):(T.updateQueue=null,T.memoizedState=null)}var $=Iu(c);if($!==null){$.flags&=-257,Au($,c,f,o,t),$.mode&1&&Uu(o,N,t),t=$,h=N;var J=t.updateQueue;if(J===null){var K=new Set;K.add(h),t.updateQueue=K}else J.add(h);break e}else{if((t&1)===0){Uu(o,N,t),Sa();break e}h=Error(s(426))}}else if(Ne&&f.mode&1){var Me=Iu(c);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),Au(Me,c,f,o,t),Fo(wr(h,f));break e}}o=h=wr(h,f),Ie!==4&&(Ie=2),kl===null?kl=[o]:kl.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var k=Fu(o,h,t);uu(o,k);break e;case 1:f=h;var v=o.type,b=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(xn===null||!xn.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var D=Du(o,f,t);uu(o,D);break e}}o=o.return}while(o!==null)}vc(n)}catch(Y){t=Y,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function hc(){var e=bi.current;return bi.current=yi,e===null?yi:e}function Sa(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),$e===null||(Kn&268435455)===0&&(Si&268435455)===0||jn($e,Qe)}function Li(e,t){var n=he;he|=2;var r=hc();($e!==e||Qe!==t)&&(Jt=null,Yn(e,t));do try{Xf();break}catch(l){mc(e,l)}while(!0);if(Uo(),he=n,bi.current=r,Fe!==null)throw Error(s(261));return $e=null,Qe=0,Ie}function Xf(){for(;Fe!==null;)gc(Fe)}function qf(){for(;Fe!==null&&!jd();)gc(Fe)}function gc(e){var t=wc(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?vc(e):Fe=t,ga.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vf(n,t,mt),n!==null){Fe=n;return}}else{if(n=Hf(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ie===0&&(Ie=5)}function Xn(e,t,n){var r=xe,l=kt.transition;try{kt.transition=null,xe=1,Zf(e,t,n,r)}finally{kt.transition=l,xe=r}return null}function Zf(e,t,n,r){do br();while(wn!==null);if((he&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zd(e,o),e===$e&&(Fe=$e=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ei||(Ei=!0,kc(Ol,function(){return br(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=kt.transition,kt.transition=null;var c=xe;xe=1;var f=he;he|=4,ga.current=null,Jf(e,n),ac(n,e),xf(So),$l=!!bo,So=bo=null,e.current=n,Kf(n),_d(),he=f,xe=c,kt.transition=o}else e.current=n;if(Ei&&(Ei=!1,wn=e,Ci=l),o=e.pendingLanes,o===0&&(xn=null),Nd(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ni)throw Ni=!1,e=xa,xa=null,e;return(Ci&1)!==0&&e.tag!==0&&br(),o=e.pendingLanes,(o&1)!==0?e===wa?jl++:(jl=0,wa=e):jl=0,hn(),null}function br(){if(wn!==null){var e=is(Ci),t=kt.transition,n=xe;try{if(kt.transition=null,xe=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ci=0,(he&6)!==0)throw Error(s(331));var l=he;for(he|=4,H=e.current;H!==null;){var o=H,c=o.child;if((H.flags&16)!==0){var f=o.deletions;if(f!==null){for(var h=0;h<f.length;h++){var N=f[h];for(H=N;H!==null;){var T=H;switch(T.tag){case 0:case 11:case 15:xl(8,T,o)}var F=T.child;if(F!==null)F.return=T,H=F;else for(;H!==null;){T=H;var L=T.sibling,$=T.return;if(nc(T),T===N){H=null;break}if(L!==null){L.return=$,H=L;break}H=$}}}var J=o.alternate;if(J!==null){var K=J.child;if(K!==null){J.child=null;do{var Me=K.sibling;K.sibling=null,K=Me}while(K!==null)}}H=o}}if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,H=c;else e:for(;H!==null;){if(o=H,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:xl(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,H=k;break e}H=o.return}}var v=e.current;for(H=v;H!==null;){c=H;var b=c.child;if((c.subtreeFlags&2064)!==0&&b!==null)b.return=c,H=b;else e:for(c=v;H!==null;){if(f=H,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:_i(9,f)}}catch(Y){Pe(f,f.return,Y)}if(f===c){H=null;break e}var D=f.sibling;if(D!==null){D.return=f.return,H=D;break e}H=f.return}}if(he=l,hn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{xe=n,kt.transition=t}}return!1}function yc(e,t,n){t=wr(n,t),t=Fu(e,t,1),e=vn(e,t,1),t=tt(),e!==null&&(Qr(e,1,t),ot(e,t))}function Pe(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=wr(n,e),e=Du(t,e,1),t=vn(t,e,1),e=tt(),t!==null&&(Qr(t,1,e),ot(t,e));break}}t=t.return}}function ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Qe&n)===n&&(Ie===4||Ie===3&&(Qe&130023424)===Qe&&500>Te()-ya?Yn(e,0):va|=n),ot(e,t)}function xc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ul,Ul<<=1,(Ul&130023424)===0&&(Ul=4194304)));var n=tt();e=Vt(e,t),e!==null&&(Qr(e,t,n),ot(e,n))}function tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xc(e,n)}function np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),xc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Wf(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Ne&&(t.flags&1048576)!==0&&Zs(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var l=fr(t,Ye.current);yr(t,n),l=Go(null,t,r,e,l,n);var o=Yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,ri(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$o(t),l.updater=xi,t.stateNode=l,l._reactInternals=t,na(t,r,e,n),t=oa(null,t,r,!0,o,n)):(t.tag=0,Ne&&o&&zo(t),et(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=lp(r),e=Et(r,e),l){case 0:t=ia(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,Et(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),ia(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),Qu(e,t,r,l,n);case 3:e:{if(Ju(t),e===null)throw Error(s(387));r=t.pendingProps,o=t.memoizedState,l=o.element,su(e,t),fi(t,r,null,n);var c=t.memoizedState;if(r=c.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=wr(Error(s(423)),t),t=Ku(e,t,r,n,l);break e}else if(r!==l){l=wr(Error(s(424)),t),t=Ku(e,t,r,n,l);break e}else for(pt=fn(t.stateNode.containerInfo.firstChild),ft=t,Ne=!0,Nt=null,n=ou(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===l){t=Qt(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&Oo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,c=l.children,No(r,l)?c=null:o!==null&&No(r,o)&&(t.flags|=32),Hu(e,t),et(e,t,c,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return Gu(e,t,n);case 4:return Wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),Bu(e,t,r,l,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,c=l.value,_e(ui,r._currentValue),r._currentValue=c,o!==null)if(St(o.value,c)){if(o.children===l.children&&!nt.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){c=o.child;for(var h=f.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=Ht(-1,n&-n),h.tag=2;var N=o.updateQueue;if(N!==null){N=N.shared;var T=N.pending;T===null?h.next=h:(h.next=T.next,T.next=h),N.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Ao(o.return,n,t),f.lanes|=n;break}h=h.next}}else if(o.tag===10)c=o.type===t.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(s(341));c.lanes|=n,f=c.alternate,f!==null&&(f.lanes|=n),Ao(c,n,t),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===t){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}et(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,yr(t,n),l=xt(l),r=r(l),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,l=Et(r,t.pendingProps),l=Et(r.type,l),$u(e,t,r,l,n);case 15:return Wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),ki(e,t),t.tag=1,rt(r)?(e=!0,ri(t)):e=!1,yr(t,n),Mu(t,r,l),na(t,r,l,n),oa(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return Vu(e,t,n)}throw Error(s(156,t.tag))};function kc(e,t){return ze(e,t)}function rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new rp(e,t,n,r)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lp(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===X)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,l,o){var c=2;if(r=e,typeof e=="function")Na(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Re:return qn(n.children,l,o,t);case ke:c=8,l|=8;break;case st:return e=jt(12,n,t,l|2),e.elementType=st,e.lanes=o,e;case V:return e=jt(13,n,t,l),e.elementType=V,e.lanes=o,e;case ne:return e=jt(19,n,t,l),e.elementType=ne,e.lanes=o,e;case le:return Ti(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:c=10;break e;case ht:c=9;break e;case Ke:c=11;break e;case X:c=14;break e;case q:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=jt(c,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=jt(22,e,r,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function Ea(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ip(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pa(e,t,n,r,l,o,c,f,h){return e=new ip(e,t,n,f,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(o),e}function op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return mn;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(rt(n))return Ys(e,n,t)}return t}function _c(e,t,n,r,l,o,c,f,h){return e=Pa(n,r,!0,e,l,o,c,f,h),e.context=jc(null),n=e.current,r=tt(),l=kn(n),o=Ht(r,l),o.callback=t??null,vn(n,o,l),e.current.lanes=l,Qr(e,l,r),ot(e,r),e}function Mi(e,t,n,r){var l=t.current,o=tt(),c=kn(l);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(o,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(l,t,c),e!==null&&(Rt(e,l,c,o),di(e,l,c)),c}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){bc(e,t),(e=e.alternate)&&bc(e,t)}function ap(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}Fi.prototype.render=La.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Mi(e,t,null,null)},Fi.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Mi(null,e,null,null)}),t[At]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ss();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&ds(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function sp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var N=Oi(c);o.call(N)}}var c=_c(t,r,e,0,null,!1,!1,"",Nc);return e._reactRootContainer=c,e[At]=c.current,ol(e.nodeType===8?e.parentNode:e),Gn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var N=Oi(h);f.call(N)}}var h=Pa(e,0,!1,null,null,!1,!1,"",Nc);return e._reactRootContainer=h,e[At]=h.current,ol(e.nodeType===8?e.parentNode:e),Gn(function(){Mi(t,h,n,r)}),h}function Ui(e,t,n,r,l){var o=n._reactRootContainer;if(o){var c=o;if(typeof l=="function"){var f=l;l=function(){var h=Oi(c);f.call(h)}}Mi(t,c,e,l)}else c=sp(n,t,e,l,r);return Oi(c)}os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(to(t,n|1),ot(t,Te()),(he&6)===0&&(_r=Te()+500,hn()))}break;case 13:Gn(function(){var r=Vt(e,1);if(r!==null){var l=tt();Rt(r,e,1,l)}}),Ra(e,1)}},no=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=tt();Rt(t,e,134217728,n)}Ra(e,134217728)}},as=function(e){if(e.tag===13){var t=kn(e),n=Vt(e,t);if(n!==null){var r=tt();Rt(n,e,t,r)}Ra(e,t)}},ss=function(){return xe},us=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},Br=function(e,t,n){switch(t){case"input":if(zn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ti(r);if(!l)throw Error(s(90));tr(r),zn(r,l)}}}break;case"textarea":Mn(e,n);break;case"select":t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}},Tl=_a,de=Gn;var up={usingClientEntryPoint:!1,Events:[ul,cr,ti,$r,zl,_a]},_l={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=se(e),e===null?null:e.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Fl=Ii.inject(cp),Tt=Ii}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(t))throw Error(s(200));return op(e,t,null,n)},at.createRoot=function(e,t){if(!za(e))throw Error(s(299));var n=!1,r="",l=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pa(e,1,!1,null,null,n,!1,r,l),e[At]=t.current,ol(e.nodeType===8?e.parentNode:e),new La(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=se(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return Gn(e)},at.hydrate=function(e,t,n){if(!Di(t))throw Error(s(200));return Ui(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!za(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",c=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=_c(t,null,e,1,n??null,l,!1,o,c),e[At]=t.current,ol(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Fi(t)},at.render=function(e,t,n){if(!Di(t))throw Error(s(200));return Ui(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!Di(e))throw Error(s(40));return e._reactRootContainer?(Gn(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},at.unstable_batchedUpdates=_a,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Di(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ui(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var Mc;function Yc(){if(Mc)return Oa.exports;Mc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Oa.exports=xp(),Oa.exports}var Oc;function wp(){if(Oc)return Ai;Oc=1;var i=Yc();return Ai.createRoot=i.createRoot,Ai.hydrateRoot=i.hydrateRoot,Ai}var kp=wp();const jp=Gc(kp);var _p=Yc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(i){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},Pl.apply(this,arguments)}var Sn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Sn||(Sn={}));const Fc="popstate";function bp(i){i===void 0&&(i={});function u(d,p){let{pathname:m,search:g,hash:j}=d.location;return $a("",{pathname:m,search:g,hash:j},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(d,p){return typeof p=="string"?p:Wi(p)}return Np(u,s,null,i)}function Oe(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ga(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Sp(){return Math.random().toString(36).substr(2,8)}function Dc(i,u){return{usr:i.state,key:i.key,idx:u}}function $a(i,u,s,d){return s===void 0&&(s=null),Pl({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof u=="string"?Rr(u):u,{state:s,key:u&&u.key||d||Sp()})}function Wi(i){let{pathname:u="/",search:s="",hash:d=""}=i;return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function Rr(i){let u={};if(i){let s=i.indexOf("#");s>=0&&(u.hash=i.substr(s),i=i.substr(0,s));let d=i.indexOf("?");d>=0&&(u.search=i.substr(d),i=i.substr(0,d)),i&&(u.pathname=i)}return u}function Np(i,u,s,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:m=!1}=d,g=p.history,j=Sn.Pop,x=null,P=E();P==null&&(P=0,g.replaceState(Pl({},g.state,{idx:P}),""));function E(){return(g.state||{idx:null}).idx}function _(){j=Sn.Pop;let O=E(),re=O==null?null:O-P;P=O,x&&x({action:j,location:A.location,delta:re})}function M(O,re){j=Sn.Push;let oe=$a(A.location,O,re);P=E()+1;let ae=Dc(oe,P),G=A.createHref(oe);try{g.pushState(ae,"",G)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;p.location.assign(G)}m&&x&&x({action:j,location:A.location,delta:1})}function z(O,re){j=Sn.Replace;let oe=$a(A.location,O,re);P=E();let ae=Dc(oe,P),G=A.createHref(oe);g.replaceState(ae,"",G),m&&x&&x({action:j,location:A.location,delta:0})}function U(O){let re=p.location.origin!=="null"?p.location.origin:p.location.href,oe=typeof O=="string"?O:Wi(O);return oe=oe.replace(/ $/,"%20"),Oe(re,"No window.location.(origin|href) available to create URL for href: "+oe),new URL(oe,re)}let A={get action(){return j},get location(){return i(p,g)},listen(O){if(x)throw new Error("A history only accepts one active listener");return p.addEventListener(Fc,_),x=O,()=>{p.removeEventListener(Fc,_),x=null}},createHref(O){return u(p,O)},createURL:U,encodeLocation(O){let re=U(O);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:M,replace:z,go(O){return g.go(O)}};return A}var Uc;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Uc||(Uc={}));function Ep(i,u,s){return s===void 0&&(s="/"),Cp(i,u,s)}function Cp(i,u,s,d){let p=typeof u=="string"?Rr(u):u,m=Ya(p.pathname||"/",s);if(m==null)return null;let g=Xc(i);Pp(g);let j=null;for(let x=0;j==null&&x<g.length;++x){let P=Bp(m);j=Up(g[x],P)}return j}function Xc(i,u,s,d){u===void 0&&(u=[]),s===void 0&&(s=[]),d===void 0&&(d="");let p=(m,g,j)=>{let x={relativePath:j===void 0?m.path||"":j,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};x.relativePath.startsWith("/")&&(Oe(x.relativePath.startsWith(d),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(d.length));let P=Nn([d,x.relativePath]),E=s.concat(x);m.children&&m.children.length>0&&(Oe(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+P+'".')),Xc(m.children,u,E,P)),!(m.path==null&&!m.index)&&u.push({path:P,score:Fp(P,m.index),routesMeta:E})};return i.forEach((m,g)=>{var j;if(m.path===""||!((j=m.path)!=null&&j.includes("?")))p(m,g);else for(let x of qc(m.path))p(m,g,x)}),u}function qc(i){let u=i.split("/");if(u.length===0)return[];let[s,...d]=u,p=s.endsWith("?"),m=s.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let g=qc(d.join("/")),j=[];return j.push(...g.map(x=>x===""?m:[m,x].join("/"))),p&&j.push(...g),j.map(x=>i.startsWith("/")&&x===""?"/":x)}function Pp(i){i.sort((u,s)=>u.score!==s.score?s.score-u.score:Dp(u.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const Rp=/^:[\w-]+$/,Lp=3,zp=2,Tp=1,Mp=10,Op=-2,Ic=i=>i==="*";function Fp(i,u){let s=i.split("/"),d=s.length;return s.some(Ic)&&(d+=Op),u&&(d+=zp),s.filter(p=>!Ic(p)).reduce((p,m)=>p+(Rp.test(m)?Lp:m===""?Tp:Mp),d)}function Dp(i,u){return i.length===u.length&&i.slice(0,-1).every((d,p)=>d===u[p])?i[i.length-1]-u[u.length-1]:0}function Up(i,u,s){let{routesMeta:d}=i,p={},m="/",g=[];for(let j=0;j<d.length;++j){let x=d[j],P=j===d.length-1,E=m==="/"?u:u.slice(m.length)||"/",_=Ip({path:x.relativePath,caseSensitive:x.caseSensitive,end:P},E),M=x.route;if(!_)return null;Object.assign(p,_.params),g.push({params:p,pathname:Nn([m,_.pathname]),pathnameBase:Qp(Nn([m,_.pathnameBase])),route:M}),_.pathnameBase!=="/"&&(m=Nn([m,_.pathnameBase]))}return g}function Ip(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,d]=Ap(i.path,i.caseSensitive,i.end),p=u.match(s);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),j=p.slice(1);return{params:d.reduce((P,E,_)=>{let{paramName:M,isOptional:z}=E;if(M==="*"){let A=j[_]||"";g=m.slice(0,m.length-A.length).replace(/(.)\/+$/,"$1")}const U=j[_];return z&&!U?P[M]=void 0:P[M]=(U||"").replace(/%2F/g,"/"),P},{}),pathname:m,pathnameBase:g,pattern:i}}function Ap(i,u,s){u===void 0&&(u=!1),s===void 0&&(s=!0),Ga(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let d=[],p="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,x)=>(d.push({paramName:j,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(d.push({paramName:"*"}),p+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":i!==""&&i!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),d]}function Bp(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ga(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+u+").")),i}}function Ya(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,d=i.charAt(s);return d&&d!=="/"?null:i.slice(s)||"/"}const $p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wp=i=>$p.test(i);function Vp(i,u){u===void 0&&(u="/");let{pathname:s,search:d="",hash:p=""}=typeof i=="string"?Rr(i):i,m;if(s)if(Wp(s))m=s;else{if(s.includes("//")){let g=s;s=s.replace(/\/\/+/g,"/"),Ga(!1,"Pathnames cannot have embedded double slashes - normalizing "+(g+" -> "+s))}s.startsWith("/")?m=Ac(s.substring(1),"/"):m=Ac(s,u)}else m=u;return{pathname:m,search:Jp(d),hash:Kp(p)}}function Ac(i,u){let s=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function Ua(i,u,s,d){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+u+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hp(i){return i.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Xa(i,u){let s=Hp(i);return u?s.map((d,p)=>p===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function qa(i,u,s,d){d===void 0&&(d=!1);let p;typeof i=="string"?p=Rr(i):(p=Pl({},i),Oe(!p.pathname||!p.pathname.includes("?"),Ua("?","pathname","search",p)),Oe(!p.pathname||!p.pathname.includes("#"),Ua("#","pathname","hash",p)),Oe(!p.search||!p.search.includes("#"),Ua("#","search","hash",p)));let m=i===""||p.pathname==="",g=m?"/":p.pathname,j;if(g==null)j=s;else{let _=u.length-1;if(!d&&g.startsWith("..")){let M=g.split("/");for(;M[0]==="..";)M.shift(),_-=1;p.pathname=M.join("/")}j=_>=0?u[_]:"/"}let x=Vp(p,j),P=g&&g!=="/"&&g.endsWith("/"),E=(m||g===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(P||E)&&(x.pathname+="/"),x}const Nn=i=>i.join("/").replace(/\/\/+/g,"/"),Qp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Jp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Kp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Gp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Zc=["post","put","patch","delete"];new Set(Zc);const Yp=["get",...Zc];new Set(Yp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(i){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},Rl.apply(this,arguments)}const Za=w.createContext(null),Xp=w.createContext(null),En=w.createContext(null),Ki=w.createContext(null),Kt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=w.createContext(null);function qp(i,u){let{relative:s}=u===void 0?{}:u;Lr()||Oe(!1);let{basename:d,navigator:p}=w.useContext(En),{hash:m,pathname:g,search:j}=nd(i,{relative:s}),x=g;return d!=="/"&&(x=g==="/"?d:Nn([d,g])),p.createHref({pathname:x,search:j,hash:m})}function Lr(){return w.useContext(Ki)!=null}function Gt(){return Lr()||Oe(!1),w.useContext(Ki).location}function td(i){w.useContext(En).static||w.useLayoutEffect(i)}function Cn(){let{isDataRoute:i}=w.useContext(Kt);return i?fm():Zp()}function Zp(){Lr()||Oe(!1);let i=w.useContext(Za),{basename:u,future:s,navigator:d}=w.useContext(En),{matches:p}=w.useContext(Kt),{pathname:m}=Gt(),g=JSON.stringify(Xa(p,s.v7_relativeSplatPath)),j=w.useRef(!1);return td(()=>{j.current=!0}),w.useCallback(function(P,E){if(E===void 0&&(E={}),!j.current)return;if(typeof P=="number"){d.go(P);return}let _=qa(P,JSON.parse(g),m,E.relative==="path");i==null&&u!=="/"&&(_.pathname=_.pathname==="/"?u:Nn([u,_.pathname])),(E.replace?d.replace:d.push)(_,E.state,E)},[u,d,g,m,i])}function em(){let{matches:i}=w.useContext(Kt),u=i[i.length-1];return u?u.params:{}}function nd(i,u){let{relative:s}=u===void 0?{}:u,{future:d}=w.useContext(En),{matches:p}=w.useContext(Kt),{pathname:m}=Gt(),g=JSON.stringify(Xa(p,d.v7_relativeSplatPath));return w.useMemo(()=>qa(i,JSON.parse(g),m,s==="path"),[i,g,m,s])}function tm(i,u){return nm(i,u)}function nm(i,u,s,d){Lr()||Oe(!1);let{navigator:p}=w.useContext(En),{matches:m}=w.useContext(Kt),g=m[m.length-1],j=g?g.params:{};g&&g.pathname;let x=g?g.pathnameBase:"/";g&&g.route;let P=Gt(),E;if(u){var _;let O=typeof u=="string"?Rr(u):u;x==="/"||(_=O.pathname)!=null&&_.startsWith(x)||Oe(!1),E=O}else E=P;let M=E.pathname||"/",z=M;if(x!=="/"){let O=x.replace(/^\//,"").split("/");z="/"+M.replace(/^\//,"").split("/").slice(O.length).join("/")}let U=Ep(i,{pathname:z}),A=am(U&&U.map(O=>Object.assign({},O,{params:Object.assign({},j,O.params),pathname:Nn([x,p.encodeLocation?p.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?x:Nn([x,p.encodeLocation?p.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),m,s,d);return u&&A?w.createElement(Ki.Provider,{value:{location:Rl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Sn.Pop}},A):A}function rm(){let i=dm(),u=Gp(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},u),s?w.createElement("pre",{style:p},s):null,null)}const lm=w.createElement(rm,null);class im extends w.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){console.error("React Router caught the following error during render",u,s)}render(){return this.state.error!==void 0?w.createElement(Kt.Provider,{value:this.props.routeContext},w.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function om(i){let{routeContext:u,match:s,children:d}=i,p=w.useContext(Za);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(Kt.Provider,{value:u},d)}function am(i,u,s,d){var p;if(u===void 0&&(u=[]),s===void 0&&(s=null),d===void 0&&(d=null),i==null){var m;if(!s)return null;if(s.errors)i=s.matches;else if((m=d)!=null&&m.v7_partialHydration&&u.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let g=i,j=(p=s)==null?void 0:p.errors;if(j!=null){let E=g.findIndex(_=>_.route.id&&(j==null?void 0:j[_.route.id])!==void 0);E>=0||Oe(!1),g=g.slice(0,Math.min(g.length,E+1))}let x=!1,P=-1;if(s&&d&&d.v7_partialHydration)for(let E=0;E<g.length;E++){let _=g[E];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(P=E),_.route.id){let{loaderData:M,errors:z}=s,U=_.route.loader&&M[_.route.id]===void 0&&(!z||z[_.route.id]===void 0);if(_.route.lazy||U){x=!0,P>=0?g=g.slice(0,P+1):g=[g[0]];break}}}return g.reduceRight((E,_,M)=>{let z,U=!1,A=null,O=null;s&&(z=j&&_.route.id?j[_.route.id]:void 0,A=_.route.errorElement||lm,x&&(P<0&&M===0?(pm("route-fallback"),U=!0,O=null):P===M&&(U=!0,O=_.route.hydrateFallbackElement||null)));let re=u.concat(g.slice(0,M+1)),oe=()=>{let ae;return z?ae=A:U?ae=O:_.route.Component?ae=w.createElement(_.route.Component,null):_.route.element?ae=_.route.element:ae=E,w.createElement(om,{match:_,routeContext:{outlet:E,matches:re,isDataRoute:s!=null},children:ae})};return s&&(_.route.ErrorBoundary||_.route.errorElement||M===0)?w.createElement(im,{location:s.location,revalidation:s.revalidation,component:A,error:z,children:oe(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):oe()},null)}var rd=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(rd||{}),ld=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(ld||{});function sm(i){let u=w.useContext(Za);return u||Oe(!1),u}function um(i){let u=w.useContext(Xp);return u||Oe(!1),u}function cm(i){let u=w.useContext(Kt);return u||Oe(!1),u}function id(i){let u=cm(),s=u.matches[u.matches.length-1];return s.route.id||Oe(!1),s.route.id}function dm(){var i;let u=w.useContext(ed),s=um(),d=id();return u!==void 0?u:(i=s.errors)==null?void 0:i[d]}function fm(){let{router:i}=sm(rd.UseNavigateStable),u=id(ld.UseNavigateStable),s=w.useRef(!1);return td(()=>{s.current=!0}),w.useCallback(function(p,m){m===void 0&&(m={}),s.current&&(typeof p=="number"?i.navigate(p):i.navigate(p,Rl({fromRouteId:u},m)))},[i,u])}const Bc={};function pm(i,u,s){Bc[i]||(Bc[i]=!0)}function mm(i,u){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function od(i){let{to:u,replace:s,state:d,relative:p}=i;Lr()||Oe(!1);let{future:m,static:g}=w.useContext(En),{matches:j}=w.useContext(Kt),{pathname:x}=Gt(),P=Cn(),E=qa(u,Xa(j,m.v7_relativeSplatPath),x,p==="path"),_=JSON.stringify(E);return w.useEffect(()=>P(JSON.parse(_),{replace:s,state:d,relative:p}),[P,_,p,s,d]),null}function Nl(i){Oe(!1)}function hm(i){let{basename:u="/",children:s=null,location:d,navigationType:p=Sn.Pop,navigator:m,static:g=!1,future:j}=i;Lr()&&Oe(!1);let x=u.replace(/^\/*/,"/"),P=w.useMemo(()=>({basename:x,navigator:m,static:g,future:Rl({v7_relativeSplatPath:!1},j)}),[x,j,m,g]);typeof d=="string"&&(d=Rr(d));let{pathname:E="/",search:_="",hash:M="",state:z=null,key:U="default"}=d,A=w.useMemo(()=>{let O=Ya(E,x);return O==null?null:{location:{pathname:O,search:_,hash:M,state:z,key:U},navigationType:p}},[x,E,_,M,z,U,p]);return A==null?null:w.createElement(En.Provider,{value:P},w.createElement(Ki.Provider,{children:s,value:A}))}function gm(i){let{children:u,location:s}=i;return tm(Wa(u),s)}new Promise(()=>{});function Wa(i,u){u===void 0&&(u=[]);let s=[];return w.Children.forEach(i,(d,p)=>{if(!w.isValidElement(d))return;let m=[...u,p];if(d.type===w.Fragment){s.push.apply(s,Wa(d.props.children,m));return}d.type!==Nl&&Oe(!1),!d.props.index||!d.props.children||Oe(!1);let g={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=Wa(d.props.children,m)),s.push(g)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(i){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},Va.apply(this,arguments)}function vm(i,u){if(i==null)return{};var s={},d=Object.keys(i),p,m;for(m=0;m<d.length;m++)p=d[m],!(u.indexOf(p)>=0)&&(s[p]=i[p]);return s}function ym(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function xm(i,u){return i.button===0&&(!u||u==="_self")&&!ym(i)}const wm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],km="6";try{window.__reactRouterVersion=km}catch{}const jm="startTransition",$c=gp[jm];function _m(i){let{basename:u,children:s,future:d,window:p}=i,m=w.useRef();m.current==null&&(m.current=bp({window:p,v5Compat:!0}));let g=m.current,[j,x]=w.useState({action:g.action,location:g.location}),{v7_startTransition:P}=d||{},E=w.useCallback(_=>{P&&$c?$c(()=>x(_)):x(_)},[x,P]);return w.useLayoutEffect(()=>g.listen(E),[g,E]),w.useEffect(()=>mm(d),[d]),w.createElement(hm,{basename:u,children:s,location:j.location,navigationType:j.action,navigator:g,future:d})}const bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nm=w.forwardRef(function(u,s){let{onClick:d,relative:p,reloadDocument:m,replace:g,state:j,target:x,to:P,preventScrollReset:E,viewTransition:_}=u,M=vm(u,wm),{basename:z}=w.useContext(En),U,A=!1;if(typeof P=="string"&&Sm.test(P)&&(U=P,bm))try{let ae=new URL(window.location.href),G=P.startsWith("//")?new URL(ae.protocol+P):new URL(P),Z=Ya(G.pathname,z);G.origin===ae.origin&&Z!=null?P=Z+G.search+G.hash:A=!0}catch{}let O=qp(P,{relative:p}),re=Em(P,{replace:g,state:j,target:x,preventScrollReset:E,relative:p,viewTransition:_});function oe(ae){d&&d(ae),ae.defaultPrevented||re(ae)}return w.createElement("a",Va({},M,{href:U||O,onClick:A||m?d:oe,ref:s,target:x}))});var Wc;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Wc||(Wc={}));var Vc;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Vc||(Vc={}));function Em(i,u){let{target:s,replace:d,state:p,preventScrollReset:m,relative:g,viewTransition:j}=u===void 0?{}:u,x=Cn(),P=Gt(),E=nd(i,{relative:g});return w.useCallback(_=>{if(xm(_,s)){_.preventDefault();let M=d!==void 0?d:Wi(P)===Wi(E);x(i,{replace:M,state:p,preventScrollReset:m,relative:g,viewTransition:j})}},[P,x,E,d,p,s,i,m,g,j])}const ad=Ji.createContext(null),es=document.createElement("div");es.id="root";document.body.appendChild(es);const sd=document.createElement("style");sd.textContent=`
  :root {
    --bg: #f4efdf;
    --bg-2: #e9ddc0;
    --paper: rgba(255, 251, 243, 0.88);
    --paper-strong: rgba(255, 251, 243, 0.96);
    --paper-faint: rgba(255, 255, 255, 0.56);
    --ink: #1f2929;
    --muted: #61716d;
    --accent: #1d7b6c;
    --accent-soft: rgba(29, 123, 108, 0.12);
    --accent-strong: #228f47;
    --warm: #b86435;
    --warm-soft: rgba(184, 100, 53, 0.12);
    --danger: #b23a33;
    --danger-soft: rgba(178, 58, 51, 0.12);
    --warning: #c87418;
    --warning-soft: rgba(200, 116, 24, 0.14);
    --warning-bg: rgba(226, 150, 65, 0.82);
    --danger-bg: rgba(222, 92, 86, 0.82);
    --info: #246bca;
    --info-soft: rgba(36, 107, 202, 0.14);
    --info-strong: #1f6ff0;
    --success-bg: rgba(113, 214, 170, 0.86);
    --stopped-bg: rgba(170, 178, 176, 0.54);
    --error-bg: rgba(239, 131, 123, 0.84);
    --line: rgba(31, 41, 41, 0.12);
    --shadow: 0 18px 54px rgba(39, 42, 40, 0.12);
    --editor-grid: 20px;
    --radius-xl: 28px;
    --radius-lg: 20px;
    --radius-md: 14px;
  }
  :root[data-theme='dark'] {
    --bg: #171714;
    --bg-2: #21211d;
    --paper: rgba(32, 33, 29, 0.88);
    --paper-strong: rgba(28, 29, 26, 0.96);
    --paper-faint: rgba(255, 255, 255, 0.06);
    --ink: #efe7d8;
    --muted: #b7afa2;
    --accent: #63c4b2;
    --accent-soft: rgba(99, 196, 178, 0.14);
    --accent-strong: #34b85a;
    --warm: #d89063;
    --warm-soft: rgba(216, 144, 99, 0.16);
    --danger: #ef8a7f;
    --danger-soft: rgba(239, 138, 127, 0.14);
    --warning: #d88a34;
    --warning-soft: rgba(239, 179, 95, 0.16);
    --warning-bg: rgba(190, 124, 43, 0.82);
    --danger-bg: rgba(196, 83, 76, 0.82);
    --info: #7cb0ff;
    --info-soft: rgba(124, 176, 255, 0.16);
    --info-strong: #5f96ff;
    --success-bg: rgba(32, 143, 118, 0.82);
    --stopped-bg: rgba(98, 108, 108, 0.42);
    --error-bg: rgba(173, 68, 61, 0.82);
    --line: rgba(239, 231, 216, 0.12);
    --shadow: 0 18px 54px rgba(0, 0, 0, 0.28);
  }
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body {
    margin: 0;
    color: var(--ink);
    font-family: Georgia, 'Iowan Old Style', serif;
    background:
      radial-gradient(circle, rgba(24, 53, 43, 0.24) 1.1px, transparent 1.3px) 0 0 / var(--editor-grid) var(--editor-grid),
      linear-gradient(180deg, #faf6ed 0%, var(--bg) 100%);
  }
  :root[data-theme='dark'] body {
    background:
      radial-gradient(circle, rgba(236, 229, 213, 0.16) 1.1px, transparent 1.3px) 0 0 / var(--editor-grid) var(--editor-grid),
      linear-gradient(180deg, #1f1d1a 0%, var(--bg) 100%);
  }
  button, input, textarea, select {
    font: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .app-shell {
    max-width: 1240px;
    margin: 0 auto;
    padding: 28px 18px 132px;
  }
  .muted {
    color: var(--muted);
  }
  .nav-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }
  .pill-link,
  .pill-button,
  .button,
  .button-saved,
  .button-open,
  .button-neutral,
  .button-status-start,
  .button-status-stop,
  .button-secondary,
  .button-warning,
  .button-danger,
  .theme-option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 42px;
    padding: 0 15px;
    border-radius: 999px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease;
  }
  .icon-action {
    width: 42px;
    min-height: 42px;
    padding: 0;
  }
  .icon-action svg {
    width: 18px;
    height: 18px;
    display: block;
    transform: translateY(0);
  }
  .button-secondary.icon-action {
    width: 42px;
    min-height: 42px;
    padding: 0;
    border-radius: 999px;
  }
  .mcp-action svg {
    width: 21px;
    height: 21px;
  }
  .button-back {
    min-width: 42px;
    padding: 0;
  }
  .info-glyph {
    font-size: 20px;
    line-height: 1;
    font-style: italic;
    font-weight: 600;
    font-family: Georgia, 'Iowan Old Style', serif;
    display: inline-block;
    transform: translateY(0.5px);
  }
  .pill-link,
  .button-secondary {
    background: rgba(255, 255, 255, 0.58);
    border-color: var(--line);
    color: var(--ink);
  }
  .pill-link.active {
    background: var(--accent-soft);
    color: var(--accent);
    border-color: rgba(29, 123, 108, 0.25);
  }
  :root[data-theme='dark'] .pill-link.active {
    border-color: rgba(99, 196, 178, 0.3);
  }
  .button,
  .pill-button {
    background: var(--accent-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-open {
    background: var(--info-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(31, 111, 240, 0.22);
  }
  .button-saved {
    background: var(--accent-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-neutral,
  .button-status-start,
  .button-status-stop {
    color: white;
  }
  .button-status-start {
    background: var(--accent-strong);
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-status-stop {
    background: #de5c56;
    box-shadow: 0 12px 28px rgba(222, 92, 86, 0.22);
  }
  .button-neutral {
    background: rgba(98, 108, 108, 0.18);
    border-color: var(--line);
    color: var(--muted);
    box-shadow: none;
  }
  .button-danger {
    background: #d13c36;
    color: white;
    box-shadow: 0 12px 28px rgba(209, 60, 54, 0.24);
  }
  .button-warning {
    background: var(--warning);
    color: white;
    box-shadow: 0 12px 28px rgba(195, 126, 44, 0.24);
  }
  .button-warning:disabled,
  .button-danger:disabled {
    background: color-mix(in srgb, var(--muted) 78%, white 22%);
    color: rgba(255, 255, 255, 0.82);
    border-color: transparent;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
    opacity: 1;
  }
  :root[data-theme='dark'] .button-warning:disabled,
  :root[data-theme='dark'] .button-danger:disabled {
    background: color-mix(in srgb, var(--muted) 72%, #252522 28%);
    color: rgba(239, 231, 216, 0.74);
  }
  .pill-link:hover,
  .pill-button:hover,
  .button:hover,
  .button-secondary:hover,
  .button-warning:hover,
  .button-danger:hover {
    transform: translateY(-1px);
  }
  .layout-grid {
    display: grid;
    gap: 20px;
  }
  .dashboard-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr);
  }
  .panel {
    border-radius: var(--radius-xl);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
    overflow: visible;
  }
  .panel-head {
    padding: 22px 24px 0;
  }
  .panel-head-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .panel-body {
    padding: 22px 24px 24px;
  }
  .panel-head h2,
  .panel-head h3,
  .panel-body h2,
  .panel-body h3 {
    margin: 0 0 6px;
    font-size: 1.5rem;
  }
  .section-copy {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }
  .inline-project-id {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 8px;
    background: rgba(98, 108, 108, 0.16);
    color: var(--ink);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.95em;
  }
  :root[data-theme='dark'] .inline-project-id {
    background: rgba(255, 255, 255, 0.12);
  }
  .group-list {
    display: grid;
    gap: 18px;
  }
  .group-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .group-header-title {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    flex: 1;
  }
  .group-header-divider {
    height: 1px;
    flex: 1;
    min-width: 28px;
    background: var(--line);
  }
  .group-header h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  .project-cards {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .project-card {
    min-width: 0;
    grid-template-columns: minmax(0, 1fr);
    display: grid;
    gap: 14px;
    padding: 0 18px 18px;
    border-radius: var(--radius-lg);
    background: var(--paper-faint);
    border: 1px solid var(--line);
    overflow: hidden;
  }
  .project-card-header {
    padding: 16px 18px 0;
    margin: 0 -18px;
  }
  .project-card.state-running .project-card-header {
    background: var(--success-bg);
  }
  .project-card.state-busy .project-card-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .project-card.state-stopped .project-card-header {
    background: var(--stopped-bg);
  }
  .project-card.state-error .project-card-header {
    background: var(--error-bg);
  }
  .project-card-top {
    min-width: 0;
    grid-template-columns: minmax(0, 1fr);
    display: grid;
    gap: 14px;
  }
  .project-card h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    margin: 0;
    font-size: 1.2rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .project-card-divider {
    border: 0;
    border-top: 1px solid var(--line);
    width: calc(100% + 36px);
    margin: 0 -18px;
  }
  .project-title-container { min-width: 0; overflow: hidden; }
  .tooltip-target { min-width: 0; }
  .tooltip-target:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 12px; }
  .portal-tooltip {
    position: fixed;
    z-index: 10000;
    max-width: calc(100vw - 20px);
    padding: 8px 10px;
    border-radius: 10px;
    background: var(--ink);
    color: var(--paper);
    font-size: 0.78rem;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
  .disk-metric { position: relative; overflow: hidden; height: 100%; padding-bottom: 20px; }
  .disk-breakdown { position: absolute; bottom: 0; left: 0; right: 0; height: 8px; display: flex; }
  .disk-metric.metric-warning .disk-breakdown,
  .disk-metric.metric-danger .disk-breakdown {
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.22);
  }
  .disk-breakdown-segment { min-width: 0; }
  .disk-tooltip-line { display: flex; align-items: center; gap: 8px; white-space: nowrap; }
  .disk-tooltip-line + .disk-tooltip-line { margin-top: 5px; }
  .disk-tooltip-dot { width: 8px; height: 8px; border-radius: 50%; flex: none; }
  .disk-tooltip { background: var(--paper-strong); color: var(--ink); border: 1px solid var(--line); font-size: 1.014rem; }
  .disk-tooltip-value { margin-left: auto; font-variant-numeric: tabular-nums; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
  .export-job-actions { display: flex; justify-content: center; }
  .export-download:disabled { opacity: 0.4; cursor: not-allowed; }
  .job-row-header { flex-wrap: wrap; }
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    background: rgba(31, 41, 41, 0.06);
    color: var(--ink);
  }
  .badge.running { background: rgba(29, 123, 108, 0.14); color: var(--accent); }
  .badge.stopped { background: rgba(96, 112, 109, 0.14); color: #536260; }
  .badge.error { background: rgba(184, 100, 53, 0.14); color: var(--warm); }
  .badge.install-ready { background: rgba(29, 123, 108, 0.12); color: var(--accent); }
  .badge.install-failed { background: rgba(184, 100, 53, 0.14); color: var(--warm); }
  .badge.neutral { background: rgba(98, 108, 108, 0.14); color: var(--muted); }
  .meta-grid {
    display: grid;
    gap: 12px;
    margin-top: 0;
  }
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
  .meta-item {
    display: grid;
    gap: 6px;
  }
  .metrics-row .meta-item {
    text-align: center;
    justify-items: center;
  }
  .metrics-row .metric-chip {
    font-variant-numeric: tabular-nums;
  }
  .meta-item strong {
    line-height: 1.2;
  }
  .metrics-row .meta-item strong {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .meta-item span:first-child {
    color: var(--muted);
    font-size: 0.85rem;
  }
  .metric-chip {
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: rgba(31, 41, 41, 0.05);
  }
  .metric-chip.metric-warning {
    background: var(--warning-bg);
    border-color: rgba(200, 116, 24, 0.2);
  }
  .metric-chip.metric-danger {
    background: var(--danger-bg);
    border-color: rgba(178, 58, 51, 0.24);
  }
  .timestamp-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timestamp-row strong {
    font-size: 0.95rem;
  }
  .quick-actions,
  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .action-menu {
    position: relative;
  }
  .action-popover {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    z-index: 20;
    min-width: 180px;
    width: max-content;
    max-width: min(260px, calc(100vw - 48px));
    display: grid;
    gap: 8px;
    padding: 10px;
    border-radius: 16px;
    border: 1px solid rgba(31, 41, 41, 0.14);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
  }
  .role-picker-popover {
    position: relative;
    inset: auto;
    width: 100%;
    max-width: none;
    margin-top: 12px;
    max-height: 320px;
    overflow: auto;
  }
  .action-option {
    width: 100%;
    display: grid;
    gap: 4px;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(31, 41, 41, 0.12);
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }
  .action-option:hover:not(:disabled) {
    border-color: rgba(29, 123, 108, 0.22);
    background: var(--accent-soft);
  }
  .action-option:disabled {
    opacity: 0.6;
    cursor: wait;
  }
  .action-option strong {
    font-size: 0.95rem;
  }
  .action-option span {
    color: var(--muted);
    font-size: 0.86rem;
    line-height: 1.4;
  }
  @media (max-width: 640px) {
    .action-popover {
      left: 0;
      right: auto;
      max-width: calc(100vw - 48px);
    }
  }
  .project-actions-row {
    justify-content: flex-start;
    align-items: center;
  }
  .button-row.centered {
    justify-content: center;
  }
  .jobs-list-footer {
    margin-bottom: -12px;
  }
  .quick-actions {
    margin-top: 0;
  }
  .inline-feedback {
    display: inline-flex;
    align-items: center;
    min-height: 42px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 0.92rem;
    transition: opacity 160ms ease;
  }
  .inline-feedback.pending {
    background: var(--accent-soft);
    border-color: rgba(29, 123, 108, 0.18);
    color: var(--accent);
    animation: pulse 1.2s ease-in-out infinite;
  }
  .inline-feedback.success {
    background: rgba(29, 123, 108, 0.1);
    border-color: rgba(29, 123, 108, 0.14);
    color: #145b50;
  }
  .inline-feedback.subtle {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: var(--muted);
    font-size: 0.9rem;
  }
  .field-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .field,
  .field-full {
    display: grid;
    gap: 8px;
  }
  .field-full {
    grid-column: 1 / -1;
  }
  label {
    font-size: 0.9rem;
    color: var(--muted);
  }
  .field label,
  .field-full label,
  .meta-item > span:first-child,
  .detail-label,
  .lockfile-label {
    font-weight: 600;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(31, 41, 41, 0.16);
    background: rgba(255, 255, 255, 0.78);
    color: var(--ink);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  :root[data-theme='dark'] input,
  :root[data-theme='dark'] textarea,
  :root[data-theme='dark'] select,
  :root[data-theme='dark'] .checkbox-row,
  :root[data-theme='dark'] .close-button,
  :root[data-theme='dark'] .pill-link,
  :root[data-theme='dark'] .button-secondary,
  :root[data-theme='dark'] .button-neutral,
  :root[data-theme='dark'] .project-card:not(.state-running):not(.state-error),
  :root[data-theme='dark'] .metric-chip:not(.metric-warning):not(.metric-danger),
  :root[data-theme='dark'] .job-row,
  :root[data-theme='dark'] .summary-block,
  :root[data-theme='dark'] .detail-row,
  :root[data-theme='dark'] .lockfile-row,
  :root[data-theme='dark'] .limits-card,
  :root[data-theme='dark'] .hero-note,
  :root[data-theme='dark'] .empty-state {
    background: rgba(255, 255, 255, 0.06);
    color: var(--ink);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .project-detail-card {
    background: var(--paper);
    color: var(--ink);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .action-popover {
    background: rgba(10, 10, 12, 0.98);
    border-color: var(--line);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
  }
  :root[data-theme='dark'] .action-option {
    border-color: var(--line);
    background: rgba(255, 255, 255, 0.02);
  }
  textarea {
    min-height: 180px;
    resize: vertical;
    line-height: 1.45;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid rgba(29, 123, 108, 0.22);
    border-color: rgba(29, 123, 108, 0.38);
  }
  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 48px;
    padding: 0 14px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(31, 41, 41, 0.16);
    background: rgba(255, 255, 255, 0.78);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .checkbox-row label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 1 auto;
  }
  .checkbox-row.is-disabled {
    color: var(--muted);
    background: rgba(255, 255, 255, 0.5);
    border-style: dashed;
  }
  :root[data-theme='dark'] .checkbox-row.is-disabled {
    background: rgba(255, 255, 255, 0.03);
  }
  .checkbox-row input {
    width: auto;
    margin: 0;
  }
  .checkbox-row input:disabled {
    cursor: not-allowed;
  }
  .info-bubble {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    border: 1px solid currentColor;
    color: var(--muted);
    font-size: 0.72rem;
    font-weight: 700;
    cursor: help;
    flex: 0 0 auto;
    position: relative;
  }
  .info-bubble::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);
    padding: 8px 10px;
    border-radius: 10px;
    background: rgba(20, 24, 24, 0.96);
    color: #f7f3eb;
    white-space: nowrap;
    font-size: 0.72rem;
    line-height: 1.2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 80ms ease-out;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
    z-index: 10;
  }
  .info-bubble:hover::after,
  .info-bubble:focus-visible::after {
    opacity: 1;
  }
  :root[data-theme='dark'] .info-bubble::after {
    background: rgba(243, 237, 225, 0.96);
    color: #1f2929;
  }
  .notice,
  .error-banner,
  .success-banner {
    padding: 12px 14px;
    border-radius: 16px;
    line-height: 1.45;
  }
  .notice {
    background: rgba(29, 123, 108, 0.09);
    color: var(--accent);
  }
  .error-banner {
    background: rgba(184, 100, 53, 0.12);
    color: #8f4824;
  }
  .success-banner {
    background: rgba(29, 123, 108, 0.1);
    color: #145b50;
  }
  .empty-state {
    padding: 20px;
    border-radius: var(--radius-lg);
    border: 1px dashed rgba(31, 41, 41, 0.18);
    color: var(--muted);
    background: rgba(255, 255, 255, 0.38);
  }
  .jobs-list {
    display: grid;
    gap: 12px;
    align-content: start;
  }
  .job-row {
    display: grid;
    gap: 8px;
    padding: 0 16px 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
    overflow: hidden;
  }
  .job-row-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 16px 12px;
    margin: 0 -16px;
  }
  .job-row.state-succeeded .job-row-header {
    background: var(--success-bg);
  }
  .job-row.state-running .job-row-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .job-row.state-failed .job-row-header {
    background: var(--error-bg);
  }
  .job-row-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .job-row-meta {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .job-row-meta .meta-item:last-child {
    justify-items: end;
    text-align: right;
  }
  .detail-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: start;
  }
  .project-detail-stack {
    display: grid;
    gap: 20px;
  }
  .summary-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .summary-block {
    padding: 18px;
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
  }
  .summary-block h3 {
    margin: 0 0 12px;
    font-size: 1.12rem;
  }
  .summary-block.compact {
    display: grid;
    gap: 6px;
  }
  .project-detail-card {
    display: grid;
    gap: 18px;
    padding: 0 18px 18px;
    border-radius: var(--radius-xl);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .project-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 18px 18px 16px;
    margin: 0 -18px;
  }
  .project-detail-card.state-running .project-detail-header {
    background: var(--success-bg);
  }
  .project-detail-card.state-busy .project-detail-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .project-detail-card.state-stopped .project-detail-header {
    background: var(--stopped-bg);
  }
  .project-detail-card.state-error .project-detail-header {
    background: var(--error-bg);
  }
  .project-detail-title,
  .project-detail-status {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  .project-detail-title h2,
  .project-detail-status strong {
    margin: 0;
  }
  .project-detail-title h2 {
    font-size: 1.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .project-detail-status {
    justify-items: end;
    text-align: right;
  }
  .detail-meta-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .detail-row {
    display: grid;
    gap: 6px;
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.52);
  }
  .detail-label,
  .lockfile-label {
    color: var(--muted);
    font-size: 0.85rem;
  }
  .detail-value {
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }
  .project-env-grid {
    display: grid;
    gap: 16px;
  }
  .environment-overview-card {
    display: grid;
    gap: 14px;
  }
  .environment-overview-card .summary-grid {
    gap: 14px;
    grid-template-columns: minmax(0, 0.25fr) minmax(0, 0.75fr);
  }
  .lockfile-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.52);
  }
  .lockfile-meta {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  .lockfile-row.compact {
    padding: 0;
    border: 0;
    background: transparent;
    align-items: end;
    box-shadow: none;
  }
  .lockfile-meta code {
    overflow-wrap: anywhere;
  }
  .limits-card {
    display: grid;
    gap: 16px;
    padding: 16px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.48);
  }
  .limits-card-header {
    display: grid;
    gap: 6px;
  }
  .mono-copy {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.88rem;
  }
  .timestamp-pair {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timestamp-pair strong,
  .timestamp-pair .detail-value {
    font-size: 0.95rem;
  }
  .modal-backdrop {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 18px;
    background: rgba(30, 35, 34, 0.34);
    backdrop-filter: blur(10px);
    z-index: 50;
  }
  .modal {
    width: min(920px, 100%);
    max-height: min(92vh, 980px);
    overflow: auto;
    border-radius: 28px;
    background: var(--paper-strong);
    border: 1px solid var(--line);
    box-shadow: 0 28px 70px rgba(28, 33, 31, 0.22);
  }
  .modal-head,
  .modal-body {
    padding: 22px 24px;
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 16px;
    border-bottom: 1px solid var(--line);
  }
  .modal-head h2 {
    margin: 10px 0 6px;
    font-size: 1.8rem;
  }
  .close-button {
    min-width: 42px;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.75);
    cursor: pointer;
  }
  .login-shell {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
  }
  .login-panel {
    width: min(420px, 100%);
    display: grid;
    gap: 20px;
    padding: 26px;
    border-radius: 28px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .login-panel h1 {
    margin: 12px 0 10px;
  }
  .login-panel h1 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
  }
  .login-divider {
    margin: 2px 0 0;
    border: 0;
    border-top: 1px solid var(--line);
  }
  .loading-screen {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
  }
  .loading-card {
    padding: 26px 28px;
    border-radius: 24px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .theme-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    border: 0;
    background: inherit;
    box-shadow: none;
    cursor: pointer;
    color: var(--ink);
  }
  .footer-theme {
    position: relative;
    display: flex;
    align-items: stretch;
    align-self: stretch;
    background: transparent;
  }
  .theme-popover {
    position: absolute;
    right: 0;
    bottom: calc(100% + 10px);
    width: 180px;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--paper-strong);
    box-shadow: var(--shadow);
    display: grid;
    gap: 6px;
  }
  .theme-option {
    width: 100%;
    justify-content: flex-start;
    min-height: 38px;
    padding: 0 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  .theme-option.active {
    background: var(--accent-soft);
    color: var(--accent);
  }
  .app-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    padding: 0 0 0 18px;
    border-top: 1px solid var(--line);
    background: var(--paper-strong);
    box-shadow: var(--shadow);
    backdrop-filter: blur(16px);
    min-height: 48px;
  }
  .footer-left,
  .footer-right {
    display: flex;
    align-items: center;
    gap: 0;
    min-width: 0;
    align-self: stretch;
  }
  .footer-session {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    flex-wrap: wrap;
  }
  .footer-session strong,
  .footer-session span {
    overflow-wrap: anywhere;
  }
  .footer-left {
    gap: 18px;
  }
  .logout-link {
    color: var(--danger);
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
  .footer-metrics {
    display: flex;
    align-items: stretch;
    gap: 0;
    justify-content: flex-end;
    align-self: stretch;
  }
  .footer-metric {
    display: inline-flex;
    position: relative;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    padding: 0 12px;
    border: 0;
    background: transparent;
    white-space: nowrap;
    overflow: hidden;
    isolation: isolate;
  }
  .footer-metric > * {
    position: relative;
    z-index: 1;
  }
  .footer-metric.has-tooltip {
    overflow: visible;
  }
  .footer-metric-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);
    padding: 8px 10px;
    border-radius: 10px;
    background: rgba(20, 24, 24, 0.96);
    color: #f7f3eb;
    white-space: nowrap;
    font-size: 0.72rem;
    line-height: 1.2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 80ms ease-out;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
    z-index: 5;
  }
  .footer-metric.has-tooltip:hover .footer-metric-tooltip,
  .footer-metric.has-tooltip:focus-visible .footer-metric-tooltip {
    opacity: 1;
  }
  :root[data-theme='dark'] .footer-metric-tooltip {
    background: rgba(243, 237, 225, 0.96);
    color: #1f2929;
  }
  .footer-metric::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--metric-percent, 0) * 1%);
    background: var(--metric-fill, transparent);
    pointer-events: none;
    z-index: 0;
  }
  .footer-metric.metric-ok {
    --metric-fill: var(--success-bg);
  }
  .footer-metric::before,
  .footer-theme::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--line);
    pointer-events: none;
  }
  .footer-metric.metric-warning {
    --metric-fill: var(--warning-bg);
  }
  .footer-metric.metric-danger {
    --metric-fill: var(--danger-bg);
  }
  .collapsible-panel {
    display: grid;
    gap: 16px;
  }
  .section-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.45);
  }
  .section-toggle strong {
    display: block;
  }
  .loading-inline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .spinner {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    border: 2px solid rgba(29, 123, 108, 0.18);
    border-top-color: var(--accent);
    animation: spin 1s linear infinite;
  }
  .spinner.large {
    width: 48px;
    height: 48px;
    border-width: 4px;
    margin: 0 auto;
  }
  .status-stack {
    display: grid;
    gap: 6px;
    justify-items: start;
    text-align: left;
  }
  .job-log-preview {
    position: relative;
    --job-log-scrollbar-width: 0px;
  }
  .job-log-frame {
    border-radius: var(--radius-md);
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.4);
    overflow: hidden;
  }
  .job-log-preview pre {
    margin: 0;
    padding: 12px 14px;
    background: transparent;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    line-height: 1.45;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 260px;
    overflow: auto;
    scrollbar-color: rgba(31, 41, 41, 0.28) rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  .job-log-preview pre::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar-thumb {
    background: rgba(31, 41, 41, 0.28);
    border-radius: 999px;
    border: 3px solid rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.4);
  }
  .job-log-download {
    position: absolute;
    top: 10px;
    right: calc(10px + var(--job-log-scrollbar-width));
    display: inline-grid;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255, 251, 243, 0.98);
    color: rgba(31, 41, 41, 0.96);
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(39, 42, 40, 0.22);
    transition: transform 120ms ease, background 120ms ease, box-shadow 120ms ease;
    z-index: 1;
  }
  .job-log-download:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255, 251, 243, 1);
    box-shadow: 0 12px 24px rgba(39, 42, 40, 0.28);
  }
  .job-log-download:disabled {
    cursor: progress;
    opacity: 0.72;
  }
  .job-log-download svg {
    width: 16px;
    height: 16px;
    display: block;
    transform: translateY(0.5px);
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.78; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-1px); }
  }
  :root[data-theme='dark'] .section-toggle,
  :root[data-theme='dark'] .job-log-download,
  :root[data-theme='dark'] .footer-metric:not(.metric-ok):not(.metric-warning):not(.metric-danger) {
    background: rgba(24, 27, 25, 0.92);
    color: rgba(239, 231, 216, 0.96);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .job-log-frame {
    background: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre {
    scrollbar-color: rgba(239, 231, 216, 0.24) #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-track {
    background: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-thumb {
    background: rgba(239, 231, 216, 0.24);
    border-color: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-corner {
    background: #000;
  }
  :root[data-theme='dark'] .lockfile-row.compact {
    background: transparent;
    border-color: transparent;
  }
  :root[data-theme='dark'] .theme-trigger {
    color: rgba(239, 231, 216, 0.96);
  }
  .subtle-link {
    color: var(--warm);
  }
  @media (max-width: 1040px) {
    .detail-grid,
    .project-cards {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 761px) and (max-width: 1160px) {
    .project-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 760px) {
    .topbar,
    .group-header,
    .job-row-top,
    .modal-head {
      grid-template-columns: 1fr;
      display: grid;
    }
    .panel-head-row,
    .group-header-title {
      display: grid;
      gap: 8px;
    }
    .group-header-divider {
      width: 100%;
    }
    .field-grid,
    .summary-grid,
    .meta-grid,
    .metrics-row,
    .detail-meta-grid {
      grid-template-columns: 1fr;
    }
    .app-shell {
      padding: 18px 14px 170px;
    }
    .app-footer {
      display: grid;
      justify-content: stretch;
    }
    .footer-left,
    .footer-right {
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .footer-right {
      align-items: flex-end;
    }
  }
`;document.head.appendChild(sd);function Je(...i){return i.filter(Boolean).join(" ")}function zr(i){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...i})}function Cm(i){return a.jsxs(zr,{...i,children:[a.jsx("path",{d:"M12 5v14"}),a.jsx("path",{d:"M5 12h14"})]})}function ud(i){return a.jsx(zr,{...i,children:a.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function cd(i){return a.jsxs(zr,{...i,children:[a.jsx("path",{d:"m15 5 4 4"}),a.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function dd(i){return a.jsx(zr,{...i,children:a.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function Pm(i){return a.jsxs(zr,{...i,children:[a.jsx("path",{d:"M19 12H5"}),a.jsx("path",{d:"m12 5-7 7 7 7"})]})}function Rm(i){return a.jsxs(zr,{...i,children:[a.jsx("path",{d:"M12 4v10"}),a.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),a.jsx("path",{d:"M4 20h16"})]})}function Lm(i){return a.jsxs("svg",{viewBox:"0 0 180 180",fill:"none","aria-hidden":"true",...i,children:[a.jsx("path",{d:"M18 84.8528 85.8822 16.9706c9.3726-9.37262 24.5688-9.37262 33.9418 0 9.372 9.3725 9.372 24.5685 0 33.9411L68.5581 102.177",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"}),a.jsx("path",{d:"m69.2652 101.47 50.5578-50.558c9.373-9.3726 24.569-9.3726 33.942 0l.353.3535c9.373 9.3726 9.373 24.5686 0 33.9411L92.7248 146.6c-3.1242 3.124-3.1242 8.189 0 11.313l12.6062 12.607",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"}),a.jsx("path",{d:"M102.853 33.9411 52.6482 84.1457c-9.3726 9.3726-9.3726 24.5683 0 33.9413 9.3726 9.372 24.5685 9.372 33.9411 0l50.2047-50.2048",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"})]})}async function De(i,u){const s=await fetch(i,{credentials:"include",headers:{"Content-Type":"application/json",...(u==null?void 0:u.headers)||{}},...u});if(s.status===204)return;const p=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const m=typeof p=="object"&&p!==null&&"detail"in p?String(p.detail):s.statusText;throw new Error(m||"Request failed.")}return p}function El(i){if(!i)return"Not available";const u=new Date(i);return Number.isNaN(u.getTime())?i:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(u)}function Sr(i){if(!Number.isFinite(i)||i<=0)return"0 B";const u=["B","KB","MB","GB","TB"];let s=i,d=0;for(;s>=1024&&d<u.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${u[d]}`}function fd(i){if(!Number.isFinite(i)||!i||i<=0)return"No limit";const u=i/1024**3;return`${u%1===0?u.toFixed(0):u.toFixed(1)} GB`}function zm(i){return fd(i)}function Tm(i){if(!Number.isFinite(i)||!i||i<=0)return"No limit";const u=i/1e3;return`${u%1===0?u.toFixed(0):u.toFixed(1)} CPU`}function Ha(i){const u=i.trim();if(!u)return null;const s=Number(u);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function Vi(i){const u=i.trim();if(!u)return null;const s=Number(u);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function Qa(i){return Vi(i)}function Hc(i){if(!Number.isFinite(i)||!i||i<=0)return"";const u=i/1e3;return u%1===0?u.toFixed(0):u.toFixed(1)}function Ja(i){if(!Number.isFinite(i)||!i||i<=0)return"";const u=i/1024**3;return u%1===0?u.toFixed(0):u.toFixed(1)}function Qc(i){return Ja(i)}function Ia(i){return!Number.isFinite(i)||!i||i<=0?"":i%1===0?i.toFixed(0):i.toFixed(1)}function Bi(i){return Number.isFinite(i)?`${Number(i).toFixed(1)}%`:"-"}function Cl(i){if(!i)return"-";const u=new Date(i).getTime();if(Number.isNaN(u))return"-";const s=Date.now()-u;if(s<0)return"Just now";const d=6e4,p=60*d,m=24*p;return s<p?`${Math.max(1,Math.floor(s/d))}m ago`:s<m?`${Math.floor(s/p)}h ago`:`${Math.floor(s/m)}d ago`}function Nr(i){return Number.isFinite(i)?Number(i)>80?"metric-danger":Number(i)>60?"metric-warning":"metric-ok":""}function Aa(i){return Number.isFinite(i)?{"--metric-percent":Math.max(0,Math.min(100,Number(i)))}:void 0}function Hi(i,u){return!Number.isFinite(i)||!Number.isFinite(u)||!u||u<=0?null:Number(i)/Number(u)*100}function Mm(i,u){if(!i)return"Not started";const s=new Date(i).getTime(),d=u?new Date(u).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const p=Math.floor((d-s)/1e3),m=Math.floor(p/3600),g=Math.floor(p%3600/60),j=p%60;return m>0?`${m}h ${g}m ${j}s`:g>0?`${g}m ${j}s`:`${j}s`}function Om(i,u=200){return`/api/v1/jobs/${i}/log?lines=${u}`}function Fm(i){return`/api/v1/jobs/${i}/log?full=true`}function Dm(i){return i.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function Um(i){return`${[i.project_id||"controller",i.job_type,i.job_id].map(Dm).join("__")}.log`}function Im(i){return`/api/v1/projects/${encodeURIComponent(i)}/lockfile`}function Am(i){const u=i.headers.get("content-disposition")||"",s=u.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=u.match(/filename="([^"]+)"/i);if(d)return d[1];const p=u.match(/filename=([^;]+)/i);return p?p[1].trim():null}function pd(i){return i.status==="running"&&i.runtime.container_port!==null}function Bm(i){const u=Hm(i);return u?u.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function $m(i){return i?i.slice(0,12):"Not running"}function Wm(i){return i.status==="succeeded"?"state-succeeded":i.status==="running"||i.status==="queued"?"state-running":i.status==="failed"?"state-failed":""}function Vm(i){return i.status.split(/[_\s]+/).filter(Boolean).map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ")}function Hm(i){return i.status==="error"&&i.status_reason||i.status==="stopped"&&i.status_reason?i.status_reason:i.status}function Qm(i){return i.has_active_job||i.status==="creating"||i.status==="installing"||i.status==="starting"||i.status==="stopping"||i.install_status==="installing"?"busy":i.status==="running"?"running":i.status==="error"||i.status_reason==="install_failed"||i.status_reason==="start_failed"||i.status_reason==="runtime_crashed"?"error":"stopped"}function md(i){return`state-${Qm(i)}`}function hd(i){const u=typeof i.metrics.cpu_percent=="number"?i.metrics.cpu_percent:null,s=Hi(i.metrics.memory_used_bytes??null,i.metrics.memory_limit_bytes??null),d=Hi(i.metrics.disk_used_bytes??null,i.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:Sr(i.metrics.disk_used_bytes??0),tone:Nr(d)},{label:"RAM",value:typeof i.metrics.memory_used_bytes=="number"?Sr(i.metrics.memory_used_bytes):"-",tone:Nr(s)},{label:"CPU",value:Bi(u),tone:Nr(i.limits.cpu_limit_millis?u:null)}]}function gd({content:i,children:u,focusable:s=!0,placement:d="above",className:p}){const m=w.useId(),g=w.useRef(null),j=w.useRef(null),[x,P]=w.useState(!1),[E,_]=w.useState({visibility:"hidden"});return w.useLayoutEffect(()=>{if(!x)return;function M(){if(!g.current||!j.current)return;const z=g.current.getBoundingClientRect(),U=j.current.getBoundingClientRect(),A=Math.max(10,Math.min(z.left+(z.width-U.width)/2,window.innerWidth-U.width-10)),O=z.top-U.height-8,re=d==="below"?z.bottom+8:O>=10?O:z.bottom+8,oe=Math.max(10,Math.min(re,window.innerHeight-U.height-10));_({left:A,top:oe,visibility:"visible"})}return M(),window.addEventListener("resize",M),window.addEventListener("scroll",M,!0),()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",M,!0)}},[x,i,d]),a.jsxs("div",{ref:g,className:"tooltip-target",tabIndex:s?0:void 0,"aria-describedby":x?m:void 0,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onFocus:()=>P(!0),onBlur:()=>P(!1),onKeyDown:M=>{M.key==="Escape"&&P(!1)},children:[u,x?_p.createPortal(a.jsx("div",{ref:j,id:m,role:"tooltip",className:Je("portal-tooltip",p),style:E,children:i}),document.body):null]})}const Ba=[{key:"python_env",label:"Python env",color:"#ef4444"},{key:"uv_cache",label:"uv cache",color:"#f97316"},{key:"objects",label:"Objects",color:"#eab308"},{key:"database",label:"Database",color:"#22c55e"},{key:"others",label:"Others",color:"#3b82f6"}];function Jm({project:i,metric:u}){const s=i.metrics.disk_breakdown_bytes,d=Ba.map(g=>Math.max(0,(s==null?void 0:s[g.key])??0)),p=d.reduce((g,j)=>g+j,0),m=s?Ba.map((g,j)=>{const x=d[j],P=x>=1024**3?`${(x/1024**3).toFixed(1)} GB`:`${(x/1024**2).toFixed(1)} MB`;return a.jsxs("div",{className:"disk-tooltip-line",children:[a.jsx("span",{className:"disk-tooltip-dot",style:{background:g.color}}),a.jsx("span",{children:g.label}),a.jsx("span",{className:"disk-tooltip-value",children:P})]},g.key)}):"Disk breakdown is not available yet.";return a.jsx(gd,{content:m,placement:"below",className:"disk-tooltip",children:a.jsxs("div",{className:Je("meta-item","metric-chip","disk-metric",u.tone),children:[a.jsx("span",{children:u.label}),a.jsx("strong",{children:u.value}),s&&p>0?a.jsx("div",{className:"disk-breakdown","aria-hidden":"true",children:Ba.map((g,j)=>a.jsx("div",{className:"disk-breakdown-segment",style:{background:g.color,flex:`${d[j]} 1 0%`}},g.key))}):null]})})}function Km({name:i}){const u=w.useRef(null),s=w.useRef(null);return w.useLayoutEffect(()=>{let d=!1,p=-1,m=0;function g(P=!1){var O;const E=s.current,_=((O=u.current)==null?void 0:O.clientWidth)??0;if(!E||!_||!P&&_===p)return;p=_,E.style.fontSize="1.2rem";const M=parseFloat(window.getComputedStyle(E).fontSize),z=document.createRange();if(z.selectNodeContents(E),z.getBoundingClientRect().width<=_&&E.scrollWidth<=_)return;let U=M/2,A=M;if(E.style.fontSize=`${U}px`,!(z.getBoundingClientRect().width>_||E.scrollWidth>_)){for(let re=0;re<9;re++){const oe=(U+A)/2;E.style.fontSize=`${oe}px`,z.getBoundingClientRect().width<=_&&E.scrollWidth<=_?U=oe:A=oe}E.style.fontSize=`${U}px`}}g(!0);function j(){window.cancelAnimationFrame(m),m=window.requestAnimationFrame(()=>g(!0))}const x=typeof ResizeObserver<"u"?new ResizeObserver(j):null;return u.current&&(x==null||x.observe(u.current)),window.addEventListener("resize",j),document.fonts.ready.then(()=>{d||j()}),()=>{d=!0,window.cancelAnimationFrame(m),x==null||x.disconnect(),window.removeEventListener("resize",j)}},[i]),a.jsx("div",{ref:u,className:"project-title-container",children:a.jsx("h4",{ref:s,title:i,children:i})})}function vd(i){var u;switch((u=i.download)==null?void 0:u.unavailable_reason){case"expired":return"Export expired after 24 hours.";case"missing":return"Export file is no longer available.";case"job_failed":return"Export did not complete successfully.";default:return"Export is still being prepared."}}function Gm({job:i,preparing:u,onDownload:s}){var P,E;const[d,p]=w.useState(Date.now),m=(P=i.download)!=null&&P.expires_at?new Date(i.download.expires_at).getTime():null;w.useEffect(()=>{if(p(Date.now()),m===null||!Number.isFinite(m))return;const _=window.setTimeout(()=>p(Date.now()),Math.min(2147483647,Math.max(0,m-Date.now()+1)));return()=>window.clearTimeout(_)},[m]);const g=m!==null&&Number.isFinite(m)&&m<=d,j=!!((E=i.download)!=null&&E.available)&&!g,x=g?"Export expired after 24 hours.":j?"Download ZIP (available for 24 hours).":vd(i);return a.jsx("div",{className:"export-job-actions",children:a.jsx(gd,{content:x,focusable:!j||u,children:a.jsx("button",{type:"button",className:Je(j?"button-open":"button-secondary","export-download"),disabled:!j||u,onClick:()=>s(i),children:u?"Preparing download...":"Download export"})})})}function Ym({systemInfo:i}){var g,j,x,P;const u=Nr(i==null?void 0:i.metrics.cpu_percent),s=Hi(((g=i==null?void 0:i.metrics.memory)==null?void 0:g.used_bytes)??null,((j=i==null?void 0:i.metrics.memory)==null?void 0:j.total_bytes)??null),d=Hi(((x=i==null?void 0:i.metrics.disk)==null?void 0:x.used_bytes)??null,((P=i==null?void 0:i.metrics.disk)==null?void 0:P.total_bytes)??null),p=i!=null&&i.metrics.disk?`${Sr(i.metrics.disk.used_bytes)} / ${Sr(i.metrics.disk.total_bytes)}`:"Not available",m=i!=null&&i.metrics.memory?`${Sr(i.metrics.memory.used_bytes)} / ${Sr(i.metrics.memory.total_bytes)}`:"Not available";return a.jsxs("div",{className:"footer-metrics",children:[a.jsxs("span",{className:Je("footer-metric","has-tooltip",Nr(d)),style:Aa(d),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"Disk"}),a.jsx("strong",{children:Bi(d)}),a.jsx("span",{className:"footer-metric-tooltip",children:p})]}),a.jsxs("span",{className:Je("footer-metric","has-tooltip",Nr(s)),style:Aa(s),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"RAM"}),a.jsx("strong",{children:Bi(s)}),a.jsx("span",{className:"footer-metric-tooltip",children:m})]}),a.jsxs("span",{className:Je("footer-metric",u),style:Aa(i==null?void 0:i.metrics.cpu_percent),children:[a.jsx("span",{className:"muted",children:"CPU"}),a.jsx("strong",{children:Bi(i==null?void 0:i.metrics.cpu_percent)})]})]})}function yd(i){return i.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:i.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:i.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:i.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:i.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function xd(i,u,s){return!u||u.jobId&&!s.includes(u.jobId)||u.action==="start"&&i.status!=="stopped"&&i.status!=="error"||u.action==="stop"&&i.status!=="running"?i:{...i,status:u.action==="start"?"starting":"stopping",status_reason:null}}function Cr(i){return i.last_edit_at||i.created_at}function Xm(i,u){if(i.has_active_job!==u.has_active_job)return i.has_active_job?-1:1;const s=new Date(Cr(i)).getTime(),d=new Date(Cr(u)).getTime(),p=Number.isNaN(s)?0:s,m=Number.isNaN(d)?0:d;return p!==m?m-p:i.project_id.localeCompare(u.project_id)}function Er(i){return i==="queued"||i==="running"}function Pr(i){return i instanceof DOMException&&i.name==="AbortError"}function Zn(i){const u=w.useRef(i);return w.useEffect(()=>{u.current=i},[i]),u}function qm(i,u){return i.length<=u?i:i.slice(i.length-u)}function Zm({job:i,downloading:u,onDownload:s}){const[d,p]=w.useState(""),[m,g]=w.useState(0),j=Zn(i),x=w.useRef(null),P=160,E=Er(i.status)?[i.job_id]:[],_=w.useCallback(async z=>{try{const A=await(await fetch(Om(j.current.job_id,P),{credentials:"include",signal:z})).text();p(A.trim())}catch(U){Pr(U)||p("")}},[j]);if(w.useEffect(()=>{const z=new AbortController;return _(z.signal),()=>z.abort()},[i.job_id,_]),ts(E,w.useCallback((z,U)=>{if(z.job_id===i.job_id){if((U==null?void 0:U.type)==="job.log"){const A=typeof U.line=="string"?U.line:"";if(!A)return;p(O=>qm([...O?O.split(`
`):[],A],P).join(`
`));return}if(!Er(z.status)){const A=new AbortController;_(A.signal)}}},[i.job_id,_])),w.useEffect(()=>{const z=x.current;if(!z)return;const U=()=>{const O=z.scrollHeight>z.clientHeight+1?Math.max(0,z.offsetWidth-z.clientWidth):0;g(re=>re===O?re:O)};if(U(),typeof ResizeObserver>"u")return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U);const A=new ResizeObserver(()=>{U()});return A.observe(z),()=>{A.disconnect()}},[d]),!d)return null;const M={"--job-log-scrollbar-width":`${m}px`};return a.jsxs("div",{className:"job-log-preview",style:M,children:[s?a.jsx("button",{className:"job-log-download",type:"button","aria-label":u?"Downloading log":"Download log",title:u?"Downloading log":"Download full log",disabled:!!u,onClick:()=>{s(i)},children:a.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 2.5v7"}),a.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),a.jsx("path",{d:"M3 13.5h10"})]})}):null,a.jsx("div",{className:"job-log-frame",children:a.jsx("pre",{ref:x,children:d})})]})}function er(){const i=Ji.useContext(ad);if(!i)throw new Error("App context is unavailable.");return i}function wd(i,u,s,d){const p=w.useRef(i);w.useEffect(()=>{p.current=i},[i]),w.useEffect(()=>{if(u===null)return;let m=!1,g=null,j=null,x=!1,P=!1;const E=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??u:u,_=U=>{m||U===null||U===void 0||(g!==null&&window.clearTimeout(g),g=window.setTimeout(()=>{g=null,M()},U))},M=async()=>{if(!(m||x)){x=!0,j=new AbortController;try{await p.current(j.signal),m||_(E())}catch(U){if(!m&&!Pr(U)){const A=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??u:(d==null?void 0:d.errorDelay)??u;_(A)}}finally{x=!1,j=null,!m&&P&&!document.hidden&&(P=!1,_(0))}}},z=()=>{if(!document.hidden){if(x){P=!0;return}_(0)}};return document.addEventListener("visibilitychange",z),M(),()=>{m=!0,g!==null&&window.clearTimeout(g),document.removeEventListener("visibilitychange",z),j==null||j.abort()}},s)}function ts(i,u){const s=w.useRef(u),d=w.useMemo(()=>Array.from(new Set(i)).sort().join("\0"),[i]);w.useEffect(()=>{s.current=u},[u]),w.useEffect(()=>{if(!d)return;const p=d.split("\0"),m=new Set(p),g=new AbortController;let j=!1;const x=new EventSource("/api/v1/events/jobs"),P=async()=>{const M=await Promise.allSettled(p.map(z=>De(`/api/v1/jobs/${z}`,{signal:g.signal})));if(!j)for(const z of M)z.status==="fulfilled"&&s.current(z.value)},E=M=>{const z=M;try{const U=JSON.parse(z.data);if(!m.has(U.job_id))return;s.current({job_id:U.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:U.line})}catch{}},_=M=>{const z=M;try{const U=JSON.parse(z.data);m.has(U.job_id)&&s.current(U,{type:"job.updated"})}catch{}};return P(),x.addEventListener("job.log",E),x.addEventListener("job.updated",_),()=>{j=!0,g.abort(),x.removeEventListener("job.log",E),x.removeEventListener("job.updated",_),x.close()}},[d])}function eh({children:i}){const[u,s]=w.useState(null),[d,p]=w.useState(!0),[m,g]=w.useState(()=>{const E=window.localStorage.getItem("bulletjournal-controller-theme");return E==="light"||E==="dark"||E==="system"?E:"system"}),j=w.useCallback(async()=>{try{const E=await De("/api/v1/session/current",{method:"GET"});s(E)}catch{s({authenticated:!1,user:null})}finally{p(!1)}},[]),x=w.useCallback(async()=>{await De("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);w.useEffect(()=>{j()},[j]),w.useEffect(()=>{const E=document.documentElement,_=window.matchMedia("(prefers-color-scheme: dark)");function M(){const z=m==="system"?_.matches?"dark":"light":m;E.dataset.theme=z,E.style.colorScheme=z}return M(),window.localStorage.setItem("bulletjournal-controller-theme",m),_.addEventListener("change",M),()=>_.removeEventListener("change",M)},[m]);const P=w.useMemo(()=>({session:u,sessionLoading:d,refreshSession:j,signOut:x,themeMode:m,setThemeMode:g}),[j,u,d,x,m]);return a.jsx(ad.Provider,{value:P,children:i})}function Jc({children:i}){const{session:u,sessionLoading:s}=er(),d=Gt();return s?a.jsx("div",{className:"loading-screen",children:a.jsxs("div",{className:"loading-card",children:[a.jsx("h2",{children:"Preparing your controller workspace"}),a.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):u!=null&&u.authenticated?a.jsx(a.Fragment,{children:i}):a.jsx(od,{to:"/login",replace:!0,state:{from:d.pathname}})}function th(){const{session:i,refreshSession:u}=er(),s=Cn(),d=Gt(),[p,m]=w.useState(""),[g,j]=w.useState(""),[x,P]=w.useState(null),[E,_]=w.useState(!1);w.useEffect(()=>{i!=null&&i.authenticated&&s("/",{replace:!0})},[s,i]);async function M(z){z.preventDefault(),_(!0),P(null);try{await De("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:p,password:g})}),await u();const U=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(U||"/",{replace:!0})}catch(U){P(U instanceof Error?U.message:"Login failed.")}finally{_(!1)}}return a.jsx("div",{className:"login-shell",children:a.jsxs("section",{className:"login-panel",children:[a.jsx("h1",{children:"BulletJournal login"}),a.jsx("hr",{className:"login-divider"}),a.jsxs("form",{className:"layout-grid",onSubmit:M,children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsx("input",{id:"username",value:p,onChange:z=>m(z.target.value),autoComplete:"username",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx("input",{id:"password",type:"password",value:g,onChange:z=>j(z.target.value),autoComplete:"current-password",required:!0})]}),x?a.jsx("div",{className:"error-banner",children:x}):null,a.jsx("div",{className:"button-row",children:a.jsx("button",{className:"button",type:"submit",disabled:E,children:E?"Signing in...":"Login"})})]})]})})}function nh(){const{session:i,signOut:u,themeMode:s,setThemeMode:d}=er();Cn();const[p,m]=w.useState(!1);return w.useEffect(()=>{if(!p)return;function g(){m(!1)}return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[p]),a.jsxs("div",{className:"footer-theme",children:[a.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":p,onClick:g=>{g.stopPropagation(),m(j=>!j)},children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[a.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),a.jsx("path",{d:"M7.5 10.5h.01"}),a.jsx("path",{d:"M9.5 7.5h.01"}),a.jsx("path",{d:"M14.5 7.5h.01"}),a.jsx("path",{d:"M16.5 10.5h.01"})]})}),p?a.jsx("div",{className:"theme-popover",role:"menu",onClick:g=>g.stopPropagation(),children:["light","dark","system"].map(g=>a.jsx("button",{className:Je("theme-option",s===g&&"active"),type:"button",role:"menuitemradio","aria-checked":s===g,onClick:()=>{d(g),m(!1)},children:g==="light"?"Light":g==="dark"?"Dark":"System"},g))}):null]})}function $i({children:i,footerMetrics:u=null}){var m,g,j,x;const{session:s,signOut:d}=er(),p=Cn();return a.jsxs("div",{className:"app-shell",children:[i,a.jsxs("footer",{className:"app-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsxs("div",{className:"footer-session",children:[a.jsx("span",{className:"muted",children:"Signed in as"}),a.jsx("strong",{children:((m=s==null?void 0:s.user)==null?void 0:m.display_name)||((g=s==null?void 0:s.user)==null?void 0:g.username)||"Unknown user"}),a.jsxs("span",{className:"muted",children:["(",((j=s==null?void 0:s.user)==null?void 0:j.username)||"unknown",")"]}),(x=s==null?void 0:s.user)!=null&&x.is_server_admin?a.jsx("span",{className:"badge neutral",children:"Admin"}):null]}),a.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),p("/login",{replace:!0})},children:"Logout"})]}),a.jsxs("div",{className:"footer-right",children:[u,a.jsx(nh,{})]})]})]})}function rh(){const[i,u]=w.useState([]),[s,d]=w.useState(null),[p,m]=w.useState(!0),[g,j]=w.useState(null),[x,P]=w.useState(null),[E,_]=w.useState([]),[M,z]=w.useState({}),[U,A]=w.useState({}),[O,re]=w.useState([]),[oe,ae]=w.useState(!1),G=Cn(),Z=Gt(),{session:we}=er(),Re=Zn(U),ke=w.useCallback(async V=>{try{const[ne,X]=await Promise.all([De("/api/v1/projects",{signal:V}),De("/api/v1/system/info",{signal:V})]);u(ne),d(X),re(q=>q.filter(le=>ne.some(I=>I.project_id===le))),j(null)}catch(ne){Pr(ne)||j(ne instanceof Error?ne.message:"Failed to load dashboard.")}finally{m(!1)}},[]);wd(V=>ke(V),E.length>0?5e3:15e3,[E.length,ke],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{if(!Z.state||typeof Z.state!="object")return;const V=Z.state,ne=typeof V.archivedProjectId=="string"?V.archivedProjectId:null,X=typeof V.archiveJobId=="string"?V.archiveJobId:null,q=typeof V.deletedProjectId=="string"?V.deletedProjectId:null,le=typeof V.deleteJobId=="string"?V.deleteJobId:null,I=ne||q,Q=X||le,B=X?"archive":le?"delete":null;!I||!Q||!B||(re(y=>Array.from(new Set([...y,I]))),A(y=>({...y,[Q]:{projectId:I,verb:B}})),_(y=>Array.from(new Set([...y,Q]))),ke(),G(Z.pathname,{replace:!0,state:null}))},[ke,Z.pathname,Z.state,G]);const st=w.useCallback(V=>{if(Er(V.status)){_(X=>X.includes(V.job_id)?X:[...X,V.job_id]);return}_(X=>X.filter(q=>q!==V.job_id));const ne=Re.current[V.job_id];ne&&(A(X=>{const q={...X};return delete q[V.job_id],q}),V.status!=="succeeded"&&(re(X=>X.filter(q=>q!==ne.projectId)),P(V.error_message||`Failed to ${ne.verb} project ${ne.projectId}.`))),ke()},[ke]);ts(E,st),w.useEffect(()=>{z(V=>{const ne=Object.entries(V).filter(([,X])=>!X.jobId||E.includes(X.jobId));return ne.length===Object.keys(V).length?V:Object.fromEntries(ne)})},[E]);const Ve=w.useMemo(()=>i.filter(V=>!O.includes(V.project_id)).map(V=>xd(V,M[V.project_id]||null,E)).sort(Xm),[E,O,M,i]),ht=w.useMemo(()=>{const V={Running:[],Stopped:[],Error:[]};for(const ne of Ve)ne.status==="running"||ne.status==="starting"||ne.status==="stopping"?V.Running.push(ne):ne.status==="error"?V.Error.push(ne):V.Stopped.push(ne);return V},[Ve]);async function Ke(V,ne){z(X=>({...X,[V]:{action:ne}}));try{P(null);const X=await De(`/api/v1/projects/${V}/${ne}`,{method:"POST"});X.job?(z(q=>({...q,[V]:{action:ne,jobId:X.job.job_id}})),_(q=>Array.from(new Set([...q,X.job.job_id])))):z(q=>{const le={...q};return delete le[V],le}),X.already_running&&(z(q=>{const le={...q};return delete le[V],le}),P("Project is already running.")),X.already_stopped&&(z(q=>{const le={...q};return delete le[V],le}),P("Project is already stopped.")),await ke()}catch(X){z(q=>{const le={...q};return delete le[V],le}),P(X instanceof Error?X.message:`Failed to ${ne} project.`)}}return a.jsxs($i,{footerMetrics:a.jsx(Ym,{systemInfo:s}),children:[g?a.jsx("div",{className:"error-banner",children:g}):null,x?a.jsx("div",{className:"error-banner",children:x}):null,a.jsx("div",{className:"dashboard-grid",children:a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"BulletJournal projects"}),E.length>0?a.jsxs("span",{className:"muted",children:["Watching ",E.length," active job",E.length===1?"":"s"]}):null]}),a.jsxs("button",{className:"button",type:"button",onClick:()=>ae(!0),disabled:!(we!=null&&we.user),children:[a.jsx(Cm,{width:22,height:22}),a.jsx("span",{children:"New project"})]})]})}),a.jsxs("div",{className:"panel-body",children:[p?a.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,a.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(V=>{const ne=ht[V];return a.jsxs("section",{children:[a.jsxs("div",{className:"group-header",children:[a.jsxs("div",{className:"group-header-title",children:[a.jsx("h3",{children:V}),a.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),a.jsxs("span",{className:"muted",children:[ne.length," project",ne.length===1?"":"s"]})]}),ne.length===0?a.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):a.jsx("div",{className:"project-cards",children:ne.map(X=>{const q=yd(X),le=hd(X),I=q.label==="Start"||q.label==="Stop"||q.label==="Starting..."||q.label==="Stopping...";return a.jsxs("article",{className:Je("project-card",md(X)),children:[a.jsx("div",{className:"project-card-header",children:a.jsxs("div",{className:"project-card-top",children:[a.jsx(Km,{name:X.project_id}),a.jsx("hr",{className:"project-card-divider"})]})}),a.jsxs("div",{className:"meta-grid",children:[a.jsx("div",{className:"metrics-row",children:le.map(Q=>a.jsxs("div",{className:Je("meta-item","metric-chip",Q.tone),children:[a.jsx("span",{children:Q.label}),a.jsx("strong",{children:Q.value})]},Q.label))}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:Cl(Cr(X))}),a.jsx("span",{className:"muted",children:El(Cr(X))})]})]})]}),a.jsxs("div",{className:"quick-actions",children:[pd(X)?a.jsx("a",{className:"button-open icon-action",href:`/p/${X.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(cd,{width:18,height:18})}):null,a.jsx("button",{className:Je(q.className,I&&"icon-action"),type:"button",disabled:q.disabled,"aria-label":q.label,title:q.label,onClick:()=>{q.action&&Ke(X.project_id,q.action)},children:I?a.jsxs(a.Fragment,{children:[q.action==="start"||q.label==="Starting..."?a.jsx(ud,{width:18,height:18}):null,q.action==="stop"||q.label==="Stopping..."?a.jsx(dd,{width:18,height:18}):null]}):q.label}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>G(`/projects/${X.project_id}`),children:a.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},X.project_id)})})]},V)})})]})]})}),oe&&s?a.jsx(lh,{systemInfo:s,onClose:()=>ae(!1)}):null]})}function lh({systemInfo:i,onClose:u}){var ae;const s=Cn(),{session:d}=er(),p=i.gpu_supported,[m,g]=w.useState({project_id:"",custom_requirements_text:i.default_dependencies_text,cpu_limit_input:Ia(i.default_cpu_limit_cpus),memory_limit_input:Ia(i.default_memory_limit_gb),disk_soft_limit_input:Ia(i.default_disk_soft_limit_gb),gpu_enabled:p}),[j,x]=w.useState(!1),[P,E]=w.useState(null),[_,M]=w.useState(!1),[z,U]=w.useState([]),[A,O]=w.useState({project_admins:{all_users:!1,user_ids:d!=null&&d.user?[d.user.user_id]:[]},editors:{all_users:!0,user_ids:[]}});w.useEffect(()=>{const G=new AbortController;return De("/api/v1/users/assignable",{signal:G.signal}).then(U).catch(Z=>{Pr(Z)||E(Z instanceof Error?Z.message:"Failed to load assignable users.")}),()=>G.abort()},[(ae=d==null?void 0:d.user)==null?void 0:ae.user_id]);function re(G,Z){O(we=>{const Re=we[G].user_ids.includes(Z)?we[G].user_ids.filter(ke=>ke!==Z):[...we[G].user_ids,Z];return{...we,[G]:{...we[G],user_ids:Re}}})}async function oe(G){G.preventDefault(),x(!0),E(null);try{const Z=await De("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:m.project_id,custom_requirements_text:m.custom_requirements_text,cpu_limit_millis:Ha(m.cpu_limit_input),memory_limit_bytes:Vi(m.memory_limit_input),disk_soft_limit_bytes:Qa(m.disk_soft_limit_input),gpu_enabled:m.gpu_enabled,project_admins:Qi(A.project_admins),editors:Qi(A.editors)})});s(`/projects/${Z.project.project_id}`,{state:{createdProjectId:Z.project.project_id,createJobId:Z.job.job_id}})}catch(Z){E(Z instanceof Error?Z.message:"Failed to create project.")}finally{x(!1)}}return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{j||u()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:G=>G.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("div",{children:a.jsx("h2",{children:"New BulletJournal project"})}),a.jsx("button",{className:"close-button",type:"button",onClick:u,"aria-label":"Close dialog",disabled:j,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("form",{className:"layout-grid",onSubmit:oe,children:[a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),a.jsx("input",{id:"create-project-id",value:m.project_id,onChange:G=>g(Z=>({...Z,project_id:G.target.value})),placeholder:"study-a",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),a.jsx("textarea",{id:"create-dependencies",value:m.custom_requirements_text,onChange:G=>g(Z=>({...Z,custom_requirements_text:G.target.value}))})]}),a.jsxs("div",{className:"field-full collapsible-panel",children:[a.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>M(G=>!G),children:[a.jsxs("span",{className:"status-stack",children:[a.jsx("strong",{children:"Runtime limits"}),a.jsxs("span",{className:"muted",children:["CPU ",Tm(Ha(m.cpu_limit_input))," · Memory ",fd(Vi(m.memory_limit_input))," · Disk ",zm(Qa(m.disk_soft_limit_input))," · GPU ",m.gpu_enabled?"On":"Off"]})]}),a.jsx("span",{children:_?"Hide":"Edit"})]}),_?a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:m.cpu_limit_input,onChange:G=>g(Z=>({...Z,cpu_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:m.memory_limit_input,onChange:G=>g(Z=>({...Z,memory_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:m.disk_soft_limit_input,onChange:G=>g(Z=>({...Z,disk_soft_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:Je("checkbox-row",!p&&"is-disabled"),children:[a.jsx("input",{id:"create-gpu",type:"checkbox",checked:m.gpu_enabled,onChange:G=>g(Z=>({...Z,gpu_enabled:G.target.checked})),disabled:!p}),a.jsxs("label",{htmlFor:"create-gpu",children:[a.jsx("span",{children:"Enable GPU"}),p?null:a.jsx("span",{className:"info-bubble","aria-label":"GPU not enabled on this instance","data-tooltip":"GPU not enabled on this instance",tabIndex:0,children:"i"})]})]})]})]}):null]}),a.jsx(kd,{roles:A,users:z,onChange:O,onToggleUser:re,disabled:j})]}),P?a.jsx("div",{className:"error-banner",children:P}):null,a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button",type:"submit",disabled:j,children:j?"Queueing...":"Create Project"}),a.jsx("button",{className:"button-secondary",type:"button",onClick:u,disabled:j,children:"Cancel"})]})]})})]})})}function kd({roles:i,users:u,onChange:s,onToggleUser:d,disabled:p}){const[m,g]=w.useState(null),j=[{key:"project_admins",label:"Project admins"},{key:"editors",label:"Editors"}];return a.jsxs("div",{className:"field-full layout-grid",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Project access"}),a.jsx("p",{className:"section-copy",children:"Choose who can administer or edit this project."})]}),j.map(({key:x,label:P})=>a.jsxs("div",{className:"limits-card",children:[a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("strong",{children:P}),a.jsx("div",{className:"muted",children:ih(i[x],u)})]}),a.jsx("button",{className:"button-secondary",type:"button",disabled:p,onClick:()=>g(E=>E===x?null:x),children:"Edit"})]}),m===x?a.jsxs("div",{className:"action-popover role-picker-popover",children:[a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${x}-all-users`,type:"checkbox",checked:i[x].all_users,disabled:p,onChange:E=>s(_=>({..._,[x]:{..._[x],all_users:E.target.checked}}))}),a.jsx("label",{htmlFor:`${x}-all-users`,children:"All users"})]}),i[x].all_users?null:u.map(E=>a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${x}-${E.user_id}`,type:"checkbox",checked:i[x].user_ids.includes(E.user_id),disabled:p,onChange:()=>d(x,E.user_id)}),a.jsxs("label",{htmlFor:`${x}-${E.user_id}`,children:[E.display_name||E.username," ",a.jsxs("span",{className:"muted",children:["(",E.username,")"]})]})]},E.user_id))]}):null]},x))]})}function Qi(i){return{all_users:i.all_users,user_ids:i.all_users?[]:i.user_ids}}function ih(i,u){if(i.all_users)return"All users";const s=i.user_ids.map(d=>u.find(p=>p.user_id===d)).filter(d=>!!d).map(d=>d.username);return s.length>0?s.join(", "):"No users selected"}function Sl(i){return{project_admins:{all_users:i.project_admins.all_users,user_ids:i.project_admins.users.map(u=>u.user_id)},editors:{all_users:i.editors.all_users,user_ids:i.editors.users.map(u=>u.user_id)}}}function Kc(i){return i.all_users?"All users":i.users.length>0?i.users.map(u=>u.username).join(", "):"No users selected"}function oh({kind:i,projectId:u,submitting:s,typedProjectId:d,setTypedProjectId:p,onClose:m,onConfirm:g}){const j=i==="archive",x=j?"Archive project?":"Delete project?",P=j?"This project will be moved to the archive directory and will be removed from active projects. Archived projects can only be restored via a manual operation.":"This project will be permanently removed and cannot be restored.",E=j?"Archive project":"Delete project",_=j?"button-warning":"button-danger",M=s||d!==u;return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{s||m()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"archive-project-title",onClick:z=>z.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsxs("div",{children:[a.jsx("h2",{id:"archive-project-title",children:x}),a.jsx("p",{className:"section-copy",children:P})]}),a.jsx("button",{className:"close-button",type:"button",onClick:m,"aria-label":"Close dialog",disabled:s,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("div",{className:"layout-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsxs("label",{htmlFor:"project-removal-confirmation",children:["Type the project ID ",a.jsx("span",{className:"inline-project-id",children:u})," to proceed"]}),a.jsx("input",{id:"project-removal-confirmation",value:d,onChange:z=>p(z.target.value),autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,disabled:s})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:_,type:"button",onClick:g,disabled:M,children:s?`${E.split(" ")[0]}ing...`:E}),a.jsx("button",{className:"button-secondary",type:"button",onClick:m,disabled:s,children:"Cancel"})]})]})})]})})}function ah(){const{projectId:u=""}=em(),s=Cn(),d=Gt(),{session:p}=er(),m=w.useRef(null),[g,j]=w.useState(null),[x,P]=w.useState(!0),[E,_]=w.useState(null),[M,z]=w.useState([]),[U,A]=w.useState(null),[O,re]=w.useState({custom_requirements_text:"",mark_all_artifacts_stale:!1,restart_if_running:!0}),[oe,ae]=w.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[G,Z]=w.useState(!1),[we,Re]=w.useState(!1),[ke,st]=w.useState(!1),[Ve,ht]=w.useState(!1),[Ke,V]=w.useState(!1),[ne,X]=w.useState(""),[q,le]=w.useState(null),[I,Q]=w.useState(!1),[B,y]=w.useState(!1),[R,ue]=w.useState(!1),[ce,pe]=w.useState(null),[me,ye]=w.useState([]),[ve,je]=w.useState([]),[Ge,Pn]=w.useState(!1),[tr,Rn]=w.useState(!1),[Ln,Yt]=w.useState(!1),[ut,zn]=w.useState(null),[ct,nr]=w.useState(null),[Tn,Xt]=w.useState([]),[Ut,Lt]=w.useState(null),[Mn,Tr]=w.useState(!1),[Mr,On]=w.useState(!1),_t=!!g&&O.custom_requirements_text!==g.custom_requirements_text,Or=Zn(u),qt=Zn(_t),Zt=Zn(tr),en=Zn(Ke),Fr=Zn(Ln),tn=w.useCallback(async S=>{try{const C=await De(`/api/v1/projects/${Or.current}`,{signal:S});if(en.current)return;j(C),z(W=>Array.from(new Set([...W.filter(se=>{var Le;return!((Le=C.recent_jobs)!=null&&Le.some(ze=>ze.job_id===se&&!Er(ze.status)))}),...(C.recent_jobs??[]).filter(se=>Er(se.status)).map(se=>se.job_id)]))),Lt(W=>W??Sl(C.roles)),!qt.current&&!Zt.current&&re(W=>({custom_requirements_text:C.custom_requirements_text,mark_all_artifacts_stale:W.mark_all_artifacts_stale,restart_if_running:W.restart_if_running})),Fr.current||ae({cpu_limit_input:Hc(C.limits.cpu_limit_millis),memory_limit_input:Ja(C.limits.memory_limit_bytes),disk_soft_limit_input:Qc(C.limits.disk_soft_limit_bytes),gpu_enabled:C.limits.gpu_enabled}),_(null)}catch(C){!Pr(C)&&!en.current&&_(C instanceof Error?C.message:"Failed to load project.")}finally{en.current||P(!1)}},[qt,Zt,en,Fr,Or]);wd(S=>tn(S),_t||tr||Ln||Ke?null:M.length>0?5e3:15e3,[M.length,_t,tr,tn,Ke,Ln],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{Pn(!1)},[u]),w.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const S=d.state,C=typeof S.createdProjectId=="string"?S.createdProjectId:null,W=typeof S.createJobId=="string"?S.createJobId:null;C!==u||!W||(z(se=>Array.from(new Set([...se,W]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,u]),w.useEffect(()=>{!(U!=null&&U.jobId)||M.includes(U.jobId)||A(null)},[M,U]),w.useEffect(()=>{if((ut==null?void 0:ut.tone)!=="success")return;const S=window.setTimeout(()=>{zn(C=>(C==null?void 0:C.tone)==="success"?null:C)},3500);return()=>window.clearTimeout(S)},[ut]),w.useEffect(()=>{if((ct==null?void 0:ct.tone)!=="success")return;const S=window.setTimeout(()=>{nr(C=>(C==null?void 0:C.tone)==="success"?null:C)},3500);return()=>window.clearTimeout(S)},[ct]),w.useEffect(()=>{if(!B)return;function S(C){var W;(W=m.current)!=null&&W.contains(C.target)||y(!1)}return window.addEventListener("click",S),()=>window.removeEventListener("click",S)},[B]);const Gi=w.useCallback(S=>{if(S.job_type&&j(C=>C&&{...C,recent_jobs:(C.recent_jobs??[]).map(W=>W.job_id===S.job_id?S:W)}),Er(S.status)){z(C=>C.includes(S.job_id)?C:[...C,S.job_id]);return}z(C=>C.filter(W=>W!==S.job_id)),Rn(!1),!en.current&&tn()},[tn,en]);ts(M,Gi),w.useEffect(()=>{if((g==null?void 0:g.effective_role)!=="project_admin")return;const S=new AbortController;return Promise.all([De("/api/v1/users/assignable",{signal:S.signal}),De(`/api/v1/projects/${u}/roles`,{signal:S.signal})]).then(([C,W])=>{Xt(C),Lt(se=>se??Sl(W))}).catch(C=>{Pr(C)||_(C instanceof Error?C.message:"Failed to load assignable users.")}),()=>S.abort()},[g==null?void 0:g.effective_role,u]);async function Dr(S){A({action:S});try{const C=await De(`/api/v1/projects/${u}/${S}`,{method:"POST"});C.job?(A({action:S,jobId:C.job.job_id}),z(W=>Array.from(new Set([...W,C.job.job_id])))):C.already_running?(A(null),_("Project is already running.")):C.already_stopped?(A(null),_("Project is already stopped.")):A(null),await tn()}catch(C){A(null),_(C instanceof Error?C.message:`Failed to ${S}.`)}}async function Ur(S){S.preventDefault(),Z(!0),_(null);const C=_t;try{const W=await De(`/api/v1/projects/${u}/${C?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(C?O:{restart_if_running:O.restart_if_running,mark_all_artifacts_stale:O.mark_all_artifacts_stale})});if(!W.job)throw new Error("Environment action did not return a queued job.");const se=W.job;z(Le=>Array.from(new Set([...Le,se.job_id]))),C&&Rn(!0),zn({tone:"success",message:"Saved"})}catch(W){zn(null),_(W instanceof Error?W.message:"Failed to queue environment action.")}finally{Z(!1)}}async function Ir(S){S.preventDefault(),Re(!0),_(null);try{const C=await De(`/api/v1/projects/${u}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:Ha(oe.cpu_limit_input),memory_limit_bytes:Vi(oe.memory_limit_input),disk_soft_limit_bytes:Qa(oe.disk_soft_limit_input),gpu_enabled:oe.gpu_enabled})});j(C),ae({cpu_limit_input:Hc(C.limits.cpu_limit_millis),memory_limit_input:Ja(C.limits.memory_limit_bytes),disk_soft_limit_input:Qc(C.limits.disk_soft_limit_bytes),gpu_enabled:C.limits.gpu_enabled}),Yt(!1),nr({tone:"success",message:"Saved"})}catch(C){_(C instanceof Error?C.message:"Failed to update limits.")}finally{Re(!1)}}async function Ar(S){if(S.preventDefault(),!!Ut){Tr(!0),_(null);try{const C=await De(`/api/v1/projects/${u}/roles`,{method:"PUT",body:JSON.stringify({project_admins:Qi(Ut.project_admins),editors:Qi(Ut.editors)})});Lt(Sl(C)),j(W=>W&&{...W,roles:C}),On(!1)}catch(C){_(C instanceof Error?C.message:"Failed to update project access.")}finally{Tr(!1)}}}async function Br(){V(!0),st(!0);try{const S=await De(`/api/v1/projects/${u}`,{method:"DELETE"});S.job&&z(C=>C.filter(W=>W!==S.job.job_id)),Q(!1),le(null),X(""),s("/",{replace:!0,state:S.job?{deletedProjectId:u,deleteJobId:S.job.job_id}:null})}catch(S){V(!1),_(S instanceof Error?S.message:"Failed to delete project.")}finally{st(!1)}}async function nn(){V(!0),ht(!0),_(null);try{const S=await De(`/api/v1/projects/${u}/archive`,{method:"POST"});S.job&&z(C=>C.filter(W=>W!==S.job.job_id)),Q(!1),le(null),X(""),s("/",{replace:!0,state:S.job?{archivedProjectId:u,archiveJobId:S.job.job_id}:null})}catch(S){V(!1),_(S instanceof Error?S.message:"Failed to archive project.")}finally{ht(!1)}}async function rn(S){je(C=>C.includes(S.job_id)?C:[...C,S.job_id]);try{const C=await fetch(Fm(S.job_id),{credentials:"include"});if(!C.ok)throw new Error(`Failed to download log (${C.status}).`);const W=await C.text(),se=new Blob([W],{type:"text/plain;charset=utf-8"}),Le=window.URL.createObjectURL(se),ze=document.createElement("a");ze.href=Le,ze.download=Um(S),document.body.appendChild(ze),ze.click(),ze.remove(),window.URL.revokeObjectURL(Le)}catch(C){_(C instanceof Error?C.message:"Failed to download job log.")}finally{je(C=>C.filter(W=>W!==S.job_id))}}async function Ll(){_(null);try{const S=await fetch(Im(u),{credentials:"include"});if(!S.ok){const ze=(S.headers.get("content-type")||"").includes("application/json")?await S.json():await S.text(),An=typeof ze=="object"&&ze!==null&&"detail"in ze?String(ze.detail):S.statusText;throw new Error(An||"Failed to download lockfile.")}const C=await S.blob(),W=window.URL.createObjectURL(C),se=document.createElement("a");se.href=W,se.download=`${u}__uv.lock`,document.body.appendChild(se),se.click(),se.remove(),window.URL.revokeObjectURL(W)}catch(S){_(S instanceof Error?S.message:"Failed to download lockfile.")}}async function $r(S){_(null),pe(S);try{const C=await De(`/api/v1/projects/${encodeURIComponent(u)}/export`,{method:"POST",body:JSON.stringify({mode:S})});j(W=>W&&{...W,has_active_job:!0,recent_jobs:[C.job,...W.recent_jobs??[]]}),z(W=>Array.from(new Set([...W,C.job.job_id]))),y(!1)}catch(C){_(C instanceof Error?C.message:"Failed to export project.")}finally{pe(null)}}async function zl(S){var C,W;if((C=S.download)!=null&&C.available){ye(se=>[...se,S.job_id]),_(null);try{const se=await De(`/api/v1/jobs/${S.job_id}`);if(j(ze=>ze&&{...ze,recent_jobs:(ze.recent_jobs??[]).map(An=>An.job_id===se.job_id?se:An)}),!((W=se.download)!=null&&W.available)||!se.download.url)throw new Error(vd(se));const Le=document.createElement("a");Le.href=se.download.url,Le.download=se.download.filename||"project.zip",document.body.appendChild(Le),Le.click(),Le.remove()}catch(se){_(se instanceof Error?se.message:"Failed to download export.")}finally{ye(se=>se.filter(Le=>Le!==S.job_id))}}}async function Tl(){_(null),ue(!0);try{const S=await fetch(`/api/v1/projects/${u}/mcp-config/opencode`,{credentials:"include"});if(!S.ok){const se=await S.json().catch(()=>null);throw new Error((se==null?void 0:se.detail)||"Failed to download MCP configuration.")}const C=window.URL.createObjectURL(await S.blob()),W=document.createElement("a");W.href=C,W.download=Am(S)||`${u}.zip`,document.body.appendChild(W),W.click(),W.remove(),window.URL.revokeObjectURL(C)}catch(S){_(S instanceof Error?S.message:"Failed to download MCP configuration.")}finally{ue(!1)}}if(x)return a.jsx($i,{children:a.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!g)return a.jsx($i,{children:a.jsx("div",{className:"error-banner",children:E||"Project was not found."})});const de=xd(g,U,M),zt=de.effective_role==="project_admin",Ae=yd(de),Fn=_t?"Save and reinstall":"Reinstall environment",Wr=_t?"Saving and reinstalling...":"Queueing reinstall...",Dn=hd(de),Ml=Ae.label==="Start"||Ae.label==="Stop"||Ae.label==="Starting..."||Ae.label==="Stopping...",Un=de.status==="running"||de.status==="starting"?"Started at":"Stopped at",ln=de.status==="running"||de.status==="starting"?de.runtime.runtime_started_at:de.runtime.runtime_stopped_at,gt=de.status==="running"||de.status==="starting"||de.status==="stopping",Vr=(ut==null?void 0:ut.tone)==="success"?"Saved":G?Wr:Fn,Yi=(ct==null?void 0:ct.tone)==="success"?"Saved":we?"Saving...":"Save limits",In=de.recent_jobs||[],Xi=Ge?In:In.slice(0,5),It=In.length>5&&!Ge;return a.jsxs($i,{children:[a.jsx("div",{className:"topbar",children:a.jsxs("div",{className:"nav-pills",children:[a.jsx(Nm,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:a.jsx(Pm,{width:18,height:18})}),M.length>0?a.jsxs("span",{className:"badge",children:["Watching ",M.length," active job",M.length===1?"":"s"]}):null]})}),E?a.jsx("div",{className:"error-banner",children:E}):null,a.jsxs("div",{className:"project-detail-stack",children:[a.jsxs("section",{className:Je("project-detail-card",md(de)),children:[a.jsxs("div",{className:"project-detail-header",children:[a.jsx("div",{className:"project-detail-title",children:a.jsx("h2",{children:de.project_id})}),a.jsx("div",{className:"project-detail-status",children:a.jsx("strong",{children:Bm(de)})})]}),a.jsxs("div",{className:"quick-actions",children:[pd(de)?a.jsx("a",{className:"button-open icon-action",href:`/p/${de.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(cd,{width:18,height:18})}):null,a.jsx("button",{className:Je(Ae.className,Ml&&"icon-action"),type:"button",disabled:Ae.disabled,"aria-label":Ae.label,title:Ae.label,onClick:()=>{Ae.action&&Dr(Ae.action)},children:Ml?a.jsxs(a.Fragment,{children:[Ae.action==="start"||Ae.label==="Starting..."?a.jsx(ud,{width:18,height:18}):null,Ae.action==="stop"||Ae.label==="Stopping..."?a.jsx(dd,{width:18,height:18}):null]}):Ae.label}),a.jsx("button",{className:"button-secondary icon-action mcp-action",type:"button","aria-label":R?"Downloading OpenCode MCP configuration":"Download OpenCode MCP configuration",title:R?"Downloading OpenCode MCP configuration":"Download OpenCode MCP configuration",disabled:R,onClick:()=>void Tl(),children:a.jsx(Lm,{width:20,height:20})})]}),a.jsx("div",{className:"metrics-row",children:Dn.map(S=>S.label==="Disk"?a.jsx(Jm,{project:de,metric:S},S.label):a.jsxs("div",{className:Je("meta-item","metric-chip",S.tone),children:[a.jsx("span",{children:S.label}),a.jsx("strong",{children:S.value})]},S.label))}),a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:Cl(Cr(de))}),a.jsx("span",{className:"muted",children:El(Cr(de))})]})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last run"}),de.last_run_finished_at?a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:Cl(de.last_run_finished_at)}),a.jsx("span",{className:"muted",children:El(de.last_run_finished_at)})]}):a.jsx("strong",{children:"-"})]})]})]}),zt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project environment"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("form",{className:"project-env-grid",onSubmit:Ur,children:[a.jsx("div",{className:"environment-overview-card",children:a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("span",{className:"detail-label",children:"Python version"}),a.jsx("div",{className:"detail-value mono-copy",children:de.python_version})]}),a.jsx("div",{className:"summary-block compact",children:a.jsxs("div",{className:"lockfile-row compact",children:[a.jsxs("div",{className:"lockfile-meta",children:[a.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),a.jsx("code",{className:"mono-copy detail-value",children:de.lock_sha256||"Not recorded yet"})]}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{Ll()},children:a.jsx(Rm,{width:18,height:18})})]})})]})}),a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),a.jsx("textarea",{id:"env-custom",value:O.custom_requirements_text,onChange:S=>{re(C=>({...C,custom_requirements_text:S.target.value}))}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Restart behavior"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-restart",type:"checkbox",checked:O.restart_if_running,onChange:S=>{re(C=>({...C,restart_if_running:S.target.checked}))}}),a.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Artifact invalidation"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:O.mark_all_artifacts_stale,onChange:S=>{re(C=>({...C,mark_all_artifacts_stale:S.target.checked}))}}),a.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),a.jsx("div",{className:"button-row",children:a.jsx("button",{className:Je((ut==null?void 0:ut.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:G,children:Vr})})]})})]}):null,zt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Container info"})}),a.jsxs("div",{className:"panel-body layout-grid",children:[a.jsxs("div",{className:"detail-meta-grid",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container name"}),a.jsx("div",{className:"detail-value mono-copy",children:de.runtime.container_name||"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container id"}),a.jsx("div",{className:"detail-value mono-copy",children:$m(de.runtime.container_id)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Host port"}),a.jsx("div",{className:"detail-value mono-copy",children:de.runtime.container_port??"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:Un}),ln?a.jsxs("div",{className:"timestamp-pair",children:[a.jsx("strong",{children:Cl(ln)}),a.jsx("span",{className:"muted",children:El(ln)})]}):a.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),a.jsxs("div",{className:"limits-card",children:[a.jsx("div",{className:"limits-card-header",children:a.jsx("div",{className:"status-stack",children:a.jsx("strong",{children:"Runtime limits"})})}),a.jsxs("form",{className:"field-grid",onSubmit:Ir,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:oe.cpu_limit_input,onChange:S=>{Yt(!0),ae(C=>({...C,cpu_limit_input:S.target.value}))},placeholder:"Unlimited",disabled:gt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:oe.memory_limit_input,onChange:S=>{Yt(!0),ae(C=>({...C,memory_limit_input:S.target.value}))},placeholder:"Unlimited",disabled:gt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:oe.disk_soft_limit_input,onChange:S=>{Yt(!0),ae(C=>({...C,disk_soft_limit_input:S.target.value}))},placeholder:"Unlimited",disabled:gt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"limits-gpu",type:"checkbox",checked:oe.gpu_enabled,onChange:S=>{Yt(!0),ae(C=>({...C,gpu_enabled:S.target.checked}))},disabled:gt}),a.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU"})]})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:Je(gt?"button-neutral":(ct==null?void 0:ct.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:we||gt,children:Yi}),gt?a.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}):null,a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsx("h2",{children:"Project access"}),zt&&!Mr?a.jsx("button",{className:"button-secondary",type:"button",onClick:()=>{Lt(Sl(de.roles)),On(!0)},children:"Edit"}):null]})}),a.jsx("div",{className:"panel-body",children:zt&&Mr&&Ut?a.jsxs("form",{className:"layout-grid",onSubmit:Ar,children:[a.jsx(kd,{roles:Ut,users:Tn,onChange:S=>Lt(C=>C&&(typeof S=="function"?S(C):S)),onToggleUser:(S,C)=>Lt(W=>{if(!W)return W;const se=W[S].user_ids.includes(C)?W[S].user_ids.filter(Le=>Le!==C):[...W[S].user_ids,C];return{...W,[S]:{...W[S],user_ids:se}}}),disabled:Mn}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button-open",type:"submit",disabled:Mn,children:Mn?"Saving...":"Save access"}),a.jsx("button",{className:"button-secondary",type:"button",disabled:Mn,onClick:()=>{Lt(Sl(de.roles)),On(!1)},children:"Cancel"})]})]}):a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Your access"}),a.jsx("strong",{children:de.effective_role==="project_admin"?"Project admin":"Editor"})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Project admins"}),a.jsx("strong",{children:Kc(de.roles.project_admins)})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Editors"}),a.jsx("strong",{children:Kc(de.roles.editors)})]})]})})]}),a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Job history"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"jobs-list",children:[In.length===0?a.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,Xi.map(S=>a.jsxs("article",{className:Je("job-row",Wm(S)),children:[a.jsxs("div",{className:"job-row-header",children:[a.jsxs("div",{className:"job-row-top",children:[a.jsx("strong",{children:S.job_type}),a.jsx("span",{className:"muted mono-copy",children:S.job_id})]}),a.jsx("strong",{children:Vm(S)})]}),a.jsxs("div",{className:"job-row-meta",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Created"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:Cl(S.created_at)}),a.jsx("span",{className:"muted",children:El(S.created_at)})]})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Duration"}),a.jsx("strong",{children:Mm(S.started_at||S.created_at,S.finished_at)})]})]}),S.job_type==="create_project"||S.job_type==="update_environment"||S.job_type==="reinstall_environment"?a.jsx(Zm,{job:S,downloading:ve.includes(S.job_id),onDownload:S.log_path?rn:void 0}):null,S.job_type==="export_project"&&zt?a.jsx(Gm,{job:S,preparing:me.includes(S.job_id),onDownload:C=>void zl(C)}):null,S.error_message?a.jsx("div",{className:"error-banner",children:S.error_message}):null]},S.job_id)),It?a.jsx("div",{className:"button-row centered jobs-list-footer",children:a.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>Pn(!0),children:["Show more jobs (",In.length," total)"]})}):null]})})]}),zt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project actions"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"button-row project-actions-row",children:[a.jsxs("div",{className:"action-menu",ref:m,children:[a.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":B,disabled:!!ce||de.has_active_job,onClick:S=>{S.stopPropagation(),y(C=>!C)},children:ce?"Queueing export...":"Export project"}),B?a.jsxs("div",{className:"action-popover",role:"menu",onClick:S=>S.stopPropagation(),children:[a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:ce!==null||de.has_active_job,onClick:()=>{$r("code_and_constants")},children:a.jsx("strong",{children:"Code and constants"})}),a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:ce!==null||de.has_active_job,onClick:()=>{$r("snapshot")},children:a.jsx("strong",{children:"Full snapshot"})})]}):null]}),a.jsx("button",{className:"button-warning",type:"button",onClick:()=>{le("archive"),X(""),Q(!0)},disabled:Ve||ke,children:Ve?"Archiving...":"Archive project"}),a.jsx("button",{className:"button-danger",type:"button",onClick:()=>{le("delete"),X(""),Q(!0)},disabled:ke||Ve,children:ke?"Deleting...":"Delete project"})]})})]}):null]}),I&&q?a.jsx(oh,{kind:q,projectId:u,submitting:q==="archive"?Ve:ke,typedProjectId:ne,setTypedProjectId:X,onClose:()=>{Q(!1),le(null),X("")},onConfirm:()=>{if(q==="archive"){nn();return}Br()}}):null]})}function sh(){return a.jsxs(gm,{children:[a.jsx(Nl,{path:"/login",element:a.jsx(th,{})}),a.jsx(Nl,{path:"/projects/:projectId",element:a.jsx(Jc,{children:a.jsx(ah,{})})}),a.jsx(Nl,{path:"/",element:a.jsx(Jc,{children:a.jsx(rh,{})})}),a.jsx(Nl,{path:"*",element:a.jsx(od,{to:"/",replace:!0})})]})}function uh(){return a.jsx(_m,{children:a.jsx(eh,{children:a.jsx(sh,{})})})}jp.createRoot(es).render(a.jsx(Ji.StrictMode,{children:a.jsx(uh,{})}));
