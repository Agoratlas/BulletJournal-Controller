function up(o,c){for(var s=0;s<c.length;s++){const d=c[s];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(o,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function s(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=s(p);fetch(p.href,h)}})();function Jc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ca={exports:{}},gl={},Pa={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function cp(){if(bc)return de;bc=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),S=Symbol.iterator;function D(v){return v===null||typeof v!="object"?null:(v=S&&v[S]||v["@@iterator"],typeof v=="function"?v:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function M(v,P,ae){this.props=v,this.context=P,this.refs=A,this.updater=ae||O}M.prototype.isReactComponent={},M.prototype.setState=function(v,P){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,P,"setState")},M.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function oe(){}oe.prototype=M.prototype;function ue(v,P,ae){this.props=v,this.context=P,this.refs=A,this.updater=ae||O}var ie=ue.prototype=new oe;ie.constructor=ue,I(ie,M.prototype),ie.isPureReactComponent=!0;var K=Array.isArray,q=Object.prototype.hasOwnProperty,xe={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function we(v,P,ae){var ce,fe={},pe=null,ve=null;if(P!=null)for(ce in P.ref!==void 0&&(ve=P.ref),P.key!==void 0&&(pe=""+P.key),P)q.call(P,ce)&&!Pe.hasOwnProperty(ce)&&(fe[ce]=P[ce]);var me=arguments.length-2;if(me===1)fe.children=ae;else if(1<me){for(var ke=Array(me),We=0;We<me;We++)ke[We]=arguments[We+2];fe.children=ke}if(v&&v.defaultProps)for(ce in me=v.defaultProps,me)fe[ce]===void 0&&(fe[ce]=me[ce]);return{$$typeof:o,type:v,key:pe,ref:ve,props:fe,_owner:xe.current}}function ut(v,P){return{$$typeof:o,type:v.type,key:P,ref:v.ref,props:v.props,_owner:v._owner}}function Ve(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function gt(v){var P={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ae){return P[ae]})}var Je=/\/+/g;function V(v,P){return typeof v=="object"&&v!==null&&v.key!=null?gt(""+v.key):P.toString(36)}function ne(v,P,ae,ce,fe){var pe=typeof v;(pe==="undefined"||pe==="boolean")&&(v=null);var ve=!1;if(v===null)ve=!0;else switch(pe){case"string":case"number":ve=!0;break;case"object":switch(v.$$typeof){case o:case c:ve=!0}}if(ve)return ve=v,fe=fe(ve),v=ce===""?"."+V(ve,0):ce,K(fe)?(ae="",v!=null&&(ae=v.replace(Je,"$&/")+"/"),ne(fe,P,ae,"",function(We){return We})):fe!=null&&(Ve(fe)&&(fe=ut(fe,ae+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(Je,"$&/")+"/")+v)),P.push(fe)),1;if(ve=0,ce=ce===""?".":ce+":",K(v))for(var me=0;me<v.length;me++){pe=v[me];var ke=ce+V(pe,me);ve+=ne(pe,P,ae,ke,fe)}else if(ke=D(v),typeof ke=="function")for(v=ke.call(v),me=0;!(pe=v.next()).done;)pe=pe.value,ke=ce+V(pe,me++),ve+=ne(pe,P,ae,ke,fe);else if(pe==="object")throw P=String(v),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ve}function Y(v,P,ae){if(v==null)return v;var ce=[],fe=0;return ne(v,ce,"","",function(pe){return P.call(ae,pe,fe++)}),ce}function X(v){if(v._status===-1){var P=v._result;P=P(),P.then(function(ae){(v._status===0||v._status===-1)&&(v._status=1,v._result=ae)},function(ae){(v._status===0||v._status===-1)&&(v._status=2,v._result=ae)}),v._status===-1&&(v._status=0,v._result=P)}if(v._status===1)return v._result.default;throw v._result}var re={current:null},U={transition:null},H={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:U,ReactCurrentOwner:xe};function B(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:Y,forEach:function(v,P,ae){Y(v,function(){P.apply(this,arguments)},ae)},count:function(v){var P=0;return Y(v,function(){P++}),P},toArray:function(v){return Y(v,function(P){return P})||[]},only:function(v){if(!Ve(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},de.Component=M,de.Fragment=s,de.Profiler=p,de.PureComponent=ue,de.StrictMode=d,de.Suspense=j,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,de.act=B,de.cloneElement=function(v,P,ae){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ce=I({},v.props),fe=v.key,pe=v.ref,ve=v._owner;if(P!=null){if(P.ref!==void 0&&(pe=P.ref,ve=xe.current),P.key!==void 0&&(fe=""+P.key),v.type&&v.type.defaultProps)var me=v.type.defaultProps;for(ke in P)q.call(P,ke)&&!Pe.hasOwnProperty(ke)&&(ce[ke]=P[ke]===void 0&&me!==void 0?me[ke]:P[ke])}var ke=arguments.length-2;if(ke===1)ce.children=ae;else if(1<ke){me=Array(ke);for(var We=0;We<ke;We++)me[We]=arguments[We+2];ce.children=me}return{$$typeof:o,type:v.type,key:fe,ref:pe,props:ce,_owner:ve}},de.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},de.createElement=we,de.createFactory=function(v){var P=we.bind(null,v);return P.type=v,P},de.createRef=function(){return{current:null}},de.forwardRef=function(v){return{$$typeof:b,render:v}},de.isValidElement=Ve,de.lazy=function(v){return{$$typeof:C,_payload:{_status:-1,_result:v},_init:X}},de.memo=function(v,P){return{$$typeof:R,type:v,compare:P===void 0?null:P}},de.startTransition=function(v){var P=U.transition;U.transition={};try{v()}finally{U.transition=P}},de.unstable_act=B,de.useCallback=function(v,P){return re.current.useCallback(v,P)},de.useContext=function(v){return re.current.useContext(v)},de.useDebugValue=function(){},de.useDeferredValue=function(v){return re.current.useDeferredValue(v)},de.useEffect=function(v,P){return re.current.useEffect(v,P)},de.useId=function(){return re.current.useId()},de.useImperativeHandle=function(v,P,ae){return re.current.useImperativeHandle(v,P,ae)},de.useInsertionEffect=function(v,P){return re.current.useInsertionEffect(v,P)},de.useLayoutEffect=function(v,P){return re.current.useLayoutEffect(v,P)},de.useMemo=function(v,P){return re.current.useMemo(v,P)},de.useReducer=function(v,P,ae){return re.current.useReducer(v,P,ae)},de.useRef=function(v){return re.current.useRef(v)},de.useState=function(v){return re.current.useState(v)},de.useSyncExternalStore=function(v,P,ae){return re.current.useSyncExternalStore(v,P,ae)},de.useTransition=function(){return re.current.useTransition()},de.version="18.3.1",de}var Nc;function $a(){return Nc||(Nc=1,Pa.exports=cp()),Pa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function dp(){if(Ec)return gl;Ec=1;var o=$a(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function y(b,j,R){var C,S={},D=null,O=null;R!==void 0&&(D=""+R),j.key!==void 0&&(D=""+j.key),j.ref!==void 0&&(O=j.ref);for(C in j)d.call(j,C)&&!h.hasOwnProperty(C)&&(S[C]=j[C]);if(b&&b.defaultProps)for(C in j=b.defaultProps,j)S[C]===void 0&&(S[C]=j[C]);return{$$typeof:c,type:b,key:D,ref:O,props:S,_owner:p.current}}return gl.Fragment=s,gl.jsx=y,gl.jsxs=y,gl}var Cc;function fp(){return Cc||(Cc=1,Ca.exports=dp()),Ca.exports}var a=fp(),w=$a();const Vi=Jc(w),pp=up({__proto__:null,default:Vi},[w]);var Oi={},Ra={exports:{}},at={},La={exports:{}},Ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function mp(){return Pc||(Pc=1,(function(o){function c(U,H){var B=U.length;U.push(H);e:for(;0<B;){var v=B-1>>>1,P=U[v];if(0<p(P,H))U[v]=H,U[B]=P,B=v;else break e}}function s(U){return U.length===0?null:U[0]}function d(U){if(U.length===0)return null;var H=U[0],B=U.pop();if(B!==H){U[0]=B;e:for(var v=0,P=U.length,ae=P>>>1;v<ae;){var ce=2*(v+1)-1,fe=U[ce],pe=ce+1,ve=U[pe];if(0>p(fe,B))pe<P&&0>p(ve,fe)?(U[v]=ve,U[pe]=B,v=pe):(U[v]=fe,U[ce]=B,v=ce);else if(pe<P&&0>p(ve,B))U[v]=ve,U[pe]=B,v=pe;else break e}}return H}function p(U,H){var B=U.sortIndex-H.sortIndex;return B!==0?B:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var y=Date,b=y.now();o.unstable_now=function(){return y.now()-b}}var j=[],R=[],C=1,S=null,D=3,O=!1,I=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(U){for(var H=s(R);H!==null;){if(H.callback===null)d(R);else if(H.startTime<=U)d(R),H.sortIndex=H.expirationTime,c(j,H);else break;H=s(R)}}function K(U){if(A=!1,ie(U),!I)if(s(j)!==null)I=!0,X(q);else{var H=s(R);H!==null&&re(K,H.startTime-U)}}function q(U,H){I=!1,A&&(A=!1,oe(we),we=-1),O=!0;var B=D;try{for(ie(H),S=s(j);S!==null&&(!(S.expirationTime>H)||U&&!gt());){var v=S.callback;if(typeof v=="function"){S.callback=null,D=S.priorityLevel;var P=v(S.expirationTime<=H);H=o.unstable_now(),typeof P=="function"?S.callback=P:S===s(j)&&d(j),ie(H)}else d(j);S=s(j)}if(S!==null)var ae=!0;else{var ce=s(R);ce!==null&&re(K,ce.startTime-H),ae=!1}return ae}finally{S=null,D=B,O=!1}}var xe=!1,Pe=null,we=-1,ut=5,Ve=-1;function gt(){return!(o.unstable_now()-Ve<ut)}function Je(){if(Pe!==null){var U=o.unstable_now();Ve=U;var H=!0;try{H=Pe(!0,U)}finally{H?V():(xe=!1,Pe=null)}}else xe=!1}var V;if(typeof ue=="function")V=function(){ue(Je)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Y=ne.port2;ne.port1.onmessage=Je,V=function(){Y.postMessage(null)}}else V=function(){M(Je,0)};function X(U){Pe=U,xe||(xe=!0,V())}function re(U,H){we=M(function(){U(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){I||O||(I=!0,X(q))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return D},o.unstable_getFirstCallbackNode=function(){return s(j)},o.unstable_next=function(U){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var B=D;D=H;try{return U()}finally{D=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=D;D=U;try{return H()}finally{D=B}},o.unstable_scheduleCallback=function(U,H,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,U){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=B+P,U={id:C++,callback:H,priorityLevel:U,startTime:B,expirationTime:P,sortIndex:-1},B>v?(U.sortIndex=B,c(R,U),s(j)===null&&U===s(R)&&(A?(oe(we),we=-1):A=!0,re(K,B-v))):(U.sortIndex=P,c(j,U),I||O||(I=!0,X(q))),U},o.unstable_shouldYield=gt,o.unstable_wrapCallback=function(U){var H=D;return function(){var B=D;D=H;try{return U.apply(this,arguments)}finally{D=B}}}})(Ta)),Ta}var Rc;function hp(){return Rc||(Rc=1,La.exports=mp()),La.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function gp(){if(Lc)return at;Lc=1;var o=$a(),c=hp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},S={};function D(e){return j.call(S,e)?!0:j.call(C,e)?!1:R.test(e)?S[e]=!0:(C[e]=!0,!1)}function O(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||O(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,ue);M[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,ue);M[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,ue);M[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,n,r){var l=M.hasOwnProperty(t)?M[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,l,r)&&(n=null),r||l===null?D(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var K=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),xe=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),gt=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),U=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function P(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var ae=!1;function ce(e,t){if(!e||ae)return"";ae=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),i=r.stack.split(`
`),u=l.length-1,f=i.length-1;1<=u&&0<=f&&l[u]!==i[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==i[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==i[f]){var m=`
`+l[u].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=u&&0<=f);break}}}finally{ae=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function fe(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case xe:return"Portal";case ut:return"Profiler";case we:return"StrictMode";case V:return"Suspense";case ne:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gt:return(e.displayName||"Context")+".Consumer";case Ve:return(e._context.displayName||"Context")+".Provider";case Je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=We(e))}function ct(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tt(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function br(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _l(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Nr(e,t){_l(e,t);var n=me(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?St(e,t.type,n):t.hasOwnProperty("defaultValue")&&St(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tn(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function St(e,t,n){(t!=="number"||en(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ot=Array.isArray;function Bt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Hn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Ot(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function $t(e,t){var n=me(t.value),r=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Er(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bt,Pr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bt=bt||document.createElement("div"),bt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Hi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function Sl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function bl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Sl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qi=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rr(e,t){if(t){if(Qi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Lr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tr=null;function zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var En=null,se=null,vt=null;function Ue(e){if(e=tl(e)){if(typeof En!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Yl(t),En(e.stateNode,e.type,t))}}function Nl(e){se?vt?vt.push(e):vt=[e]:se=e}function El(){if(se){var e=se,t=vt;if(vt=se=null,Ue(e),t)for(e=0;e<t.length;e++)Ue(t[e])}}function Cl(e,t){return e(t)}function Mr(){}var Or=!1;function Kn(e,t,n){if(Or)return e(t,n);Or=!0;try{return Cl(e,t,n)}finally{Or=!1,(se!==null||vt!==null)&&(Mr(),El())}}function dt(e,t){var n=e.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Fr=!1;if(b)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Fr=!1}function Pn(e,t,n,r,l,i,u,f,m){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(T){this.onError(T)}}var Rn=!1,Gn=null,N=!1,E=null,te={onError:function(e){Rn=!0,Gn=e}};function ze(e,t,n,r,l,i,u,f,m){Rn=!1,Gn=null,Pn.apply(te,arguments)}function qe(e,t,n,r,l,i,u,f,m){if(ze.apply(this,arguments),Rn){if(Rn){var _=Gn;Rn=!1,Gn=null}else throw Error(s(198));N||(N=!0,E=_)}}function Oe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pl(e){if(Oe(e)!==e)throw Error(s(188))}function yd(e){var t=e.alternate;if(!t){if(t=Oe(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Pl(l),e;if(i===r)return Pl(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var u=!1,f=l.child;f;){if(f===n){u=!0,n=l,r=i;break}if(f===r){u=!0,r=l,n=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===n){u=!0,n=i,r=l;break}if(f===r){u=!0,r=i,n=l;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Ya(e){return e=yd(e),e!==null?Xa(e):null}function Xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xa(e);if(t!==null)return t;e=e.sibling}return null}var qa=c.unstable_scheduleCallback,Za=c.unstable_cancelCallback,xd=c.unstable_shouldYield,wd=c.unstable_requestPaint,Re=c.unstable_now,kd=c.unstable_getCurrentPriorityLevel,Ji=c.unstable_ImmediatePriority,es=c.unstable_UserBlockingPriority,Rl=c.unstable_NormalPriority,jd=c.unstable_LowPriority,ts=c.unstable_IdlePriority,Ll=null,Ft=null;function _d(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Nd,Sd=Math.log,bd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(Sd(e)/bd|0)|0}var Tl=64,zl=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~l;f!==0?r=Dr(f):(i&=u,i!==0&&(r=Dr(i)))}else u=n&~l,u!==0?r=Dr(u):i!==0&&(r=Dr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),l=1<<n,r|=e[n],t&=~l;return r}function Ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-Et(i),f=1<<u,m=l[u];m===-1?((f&n)===0||(f&r)!==0)&&(l[u]=Ed(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ns(){var e=Tl;return Tl<<=1,(Tl&4194240)===0&&(Tl=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Et(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ye=0;function rs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ls,Xi,is,os,as,qi=!1,Ol=[],nn=null,rn=null,ln=null,Ir=new Map,Ar=new Map,on=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ss(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function Br(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tl(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ld(e,t,n,r,l){switch(t){case"focusin":return nn=Br(nn,e,t,n,r,l),!0;case"dragenter":return rn=Br(rn,e,t,n,r,l),!0;case"mouseover":return ln=Br(ln,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Ir.set(i,Br(Ir.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ar.set(i,Br(Ar.get(i)||null,e,t,n,r,l)),!0}return!1}function us(e){var t=Ln(e.target);if(t!==null){var n=Oe(t);if(n!==null){if(t=n.tag,t===13){if(t=Vt(n),t!==null){e.blockedOn=t,as(e.priority,function(){is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tr=r,n.target.dispatchEvent(r),Tr=null}else return t=tl(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Fl(e)&&n.delete(t)}function Td(){qi=!1,nn!==null&&Fl(nn)&&(nn=null),rn!==null&&Fl(rn)&&(rn=null),ln!==null&&Fl(ln)&&(ln=null),Ir.forEach(cs),Ar.forEach(cs)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,qi||(qi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Td)))}function Vr(e){function t(l){return $r(l,e)}if(0<Ol.length){$r(Ol[0],e);for(var n=1;n<Ol.length;n++){var r=Ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&$r(nn,e),rn!==null&&$r(rn,e),ln!==null&&$r(ln,e),Ir.forEach(t),Ar.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)us(n),n.blockedOn===null&&on.shift()}var Yn=K.ReactCurrentBatchConfig,Dl=!0;function zd(e,t,n,r){var l=ye,i=Yn.transition;Yn.transition=null;try{ye=1,Zi(e,t,n,r)}finally{ye=l,Yn.transition=i}}function Md(e,t,n,r){var l=ye,i=Yn.transition;Yn.transition=null;try{ye=4,Zi(e,t,n,r)}finally{ye=l,Yn.transition=i}}function Zi(e,t,n,r){if(Dl){var l=eo(e,t,n,r);if(l===null)yo(e,t,r,Ul,n),ss(e,r);else if(Ld(l,e,t,n,r))r.stopPropagation();else if(ss(e,r),t&4&&-1<Rd.indexOf(e)){for(;l!==null;){var i=tl(l);if(i!==null&&ls(i),i=eo(e,t,n,r),i===null&&yo(e,t,r,Ul,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else yo(e,t,r,null,n)}}var Ul=null;function eo(e,t,n,r){if(Ul=null,e=zr(r),e=Ln(e),e!==null)if(t=Oe(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ul=e,null}function ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case Ji:return 1;case es:return 4;case Rl:case jd:return 16;case ts:return 536870912;default:return 16}default:return 16}}var an=null,to=null,Il=null;function fs(){if(Il)return Il;var e,t=to,n=t.length,r,l="value"in an?an.value:an.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[i-r];r++);return Il=l.slice(e,1<r?1-r:void 0)}function Al(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function ps(){return!1}function ft(e){function t(n,r,l,i,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bl:ps,this.isPropagationStopped=ps,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=ft(Xn),Wr=B({},Xn,{view:0,detail:0}),Od=ft(Wr),ro,lo,Hr,$l=B({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(ro=e.screenX-Hr.screenX,lo=e.screenY-Hr.screenY):lo=ro=0,Hr=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),ms=ft($l),Fd=B({},$l,{dataTransfer:0}),Dd=ft(Fd),Ud=B({},Wr,{relatedTarget:0}),io=ft(Ud),Id=B({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ad=ft(Id),Bd=B({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=ft(Bd),Vd=B({},Xn,{data:0}),hs=ft(Vd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qd[e])?!!t[e]:!1}function oo(){return Jd}var Kd=B({},Wr,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=ft(Kd),Yd=B({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=ft(Yd),Xd=B({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),qd=ft(Xd),Zd=B({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=ft(Zd),tf=B({},$l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=ft(tf),rf=[9,13,27,32],ao=b&&"CompositionEvent"in window,Qr=null;b&&"documentMode"in document&&(Qr=document.documentMode);var lf=b&&"TextEvent"in window&&!Qr,vs=b&&(!ao||Qr&&8<Qr&&11>=Qr),ys=" ",xs=!1;function ws(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function of(e,t){switch(e){case"compositionend":return ks(t);case"keypress":return t.which!==32?null:(xs=!0,ys);case"textInput":return e=t.data,e===ys&&xs?null:e;default:return null}}function af(e,t){if(qn)return e==="compositionend"||!ao&&ws(e,t)?(e=fs(),Il=to=an=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vs&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function _s(e,t,n,r){Nl(r),t=Jl(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,Kr=null;function uf(e){Bs(e,0)}function Vl(e){var t=rr(e);if(ct(t))return e}function cf(e,t){if(e==="change")return t}var Ss=!1;if(b){var so;if(b){var uo="oninput"in document;if(!uo){var bs=document.createElement("div");bs.setAttribute("oninput","return;"),uo=typeof bs.oninput=="function"}so=uo}else so=!1;Ss=so&&(!document.documentMode||9<document.documentMode)}function Ns(){Jr&&(Jr.detachEvent("onpropertychange",Es),Kr=Jr=null)}function Es(e){if(e.propertyName==="value"&&Vl(Kr)){var t=[];_s(t,Kr,e,zr(e)),Kn(uf,t)}}function df(e,t,n){e==="focusin"?(Ns(),Jr=t,Kr=n,Jr.attachEvent("onpropertychange",Es)):e==="focusout"&&Ns()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vl(Kr)}function pf(e,t){if(e==="click")return Vl(t)}function mf(e,t){if(e==="input"||e==="change")return Vl(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:hf;function Gr(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!j.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var n=Cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function Rs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ls(){for(var e=window,t=en();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=en(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gf(e){var t=Ls(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rs(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ps(n,i);var u=Ps(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=b&&"documentMode"in document&&11>=document.documentMode,Zn=null,fo=null,Yr=null,po=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||Zn==null||Zn!==en(r)||(r=Zn,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&Gr(Yr,r)||(Yr=r,r=Jl(fo,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function Wl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},mo={},zs={};b&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Hl(e){if(mo[e])return mo[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zs)return mo[e]=t[n];return e}var Ms=Hl("animationend"),Os=Hl("animationiteration"),Fs=Hl("animationstart"),Ds=Hl("transitionend"),Us=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Us.set(e,t),h(t,[e])}for(var ho=0;ho<Is.length;ho++){var go=Is[ho],yf=go.toLowerCase(),xf=go[0].toUpperCase()+go.slice(1);sn(yf,"on"+xf)}sn(Ms,"onAnimationEnd"),sn(Os,"onAnimationIteration"),sn(Fs,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Ds,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function As(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qe(r,t,void 0,e),e.currentTarget=null}function Bs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],m=f.instance,_=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break e;As(l,f,_),i=m}else for(u=0;u<r.length;u++){if(f=r[u],m=f.instance,_=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break e;As(l,f,_),i=m}}}if(N)throw e=E,N=!1,E=null,e}function _e(e,t){var n=t[So];n===void 0&&(n=t[So]=new Set);var r=e+"__bubble";n.has(r)||($s(t,e,2,!1),n.add(r))}function vo(e,t,n){var r=0;t&&(r|=4),$s(n,e,r,t)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Ql]){e[Ql]=!0,d.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||vo(n,!1,e),vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ql]||(t[Ql]=!0,vo("selectionchange",!1,t))}}function $s(e,t,n,r){switch(ds(t)){case 1:var l=zd;break;case 4:l=Md;break;default:l=Zi}n=l.bind(null,t,n,e),l=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function yo(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;u=u.return}for(;f!==null;){if(u=Ln(f),u===null)return;if(m=u.tag,m===5||m===6){r=i=u;continue e}f=f.parentNode}}r=r.return}Kn(function(){var _=i,T=zr(n),z=[];e:{var L=Us.get(e);if(L!==void 0){var $=no,Q=e;switch(e){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":$=Gd;break;case"focusin":Q="focus",$=io;break;case"focusout":Q="blur",$=io;break;case"beforeblur":case"afterblur":$=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=qd;break;case Ms:case Os:case Fs:$=Ad;break;case Ds:$=ef;break;case"scroll":$=Od;break;case"wheel":$=nf;break;case"copy":case"cut":case"paste":$=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=gs}var J=(t&4)!==0,Le=!J&&e==="scroll",x=J?L!==null?L+"Capture":null:L;J=[];for(var g=_,k;g!==null;){k=g;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,x!==null&&(F=dt(g,x),F!=null&&J.push(Zr(g,F,k)))),Le)break;g=g.return}0<J.length&&(L=new $(L,Q,null,n,T),z.push({event:L,listeners:J}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&n!==Tr&&(Q=n.relatedTarget||n.fromElement)&&(Ln(Q)||Q[Wt]))break e;if(($||L)&&(L=T.window===T?T:(L=T.ownerDocument)?L.defaultView||L.parentWindow:window,$?(Q=n.relatedTarget||n.toElement,$=_,Q=Q?Ln(Q):null,Q!==null&&(Le=Oe(Q),Q!==Le||Q.tag!==5&&Q.tag!==6)&&(Q=null)):($=null,Q=_),$!==Q)){if(J=ms,F="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=gs,F="onPointerLeave",x="onPointerEnter",g="pointer"),Le=$==null?L:rr($),k=Q==null?L:rr(Q),L=new J(F,g+"leave",$,n,T),L.target=Le,L.relatedTarget=k,F=null,Ln(T)===_&&(J=new J(x,g+"enter",Q,n,T),J.target=k,J.relatedTarget=Le,F=J),Le=F,$&&Q)t:{for(J=$,x=Q,g=0,k=J;k;k=tr(k))g++;for(k=0,F=x;F;F=tr(F))k++;for(;0<g-k;)J=tr(J),g--;for(;0<k-g;)x=tr(x),k--;for(;g--;){if(J===x||x!==null&&J===x.alternate)break t;J=tr(J),x=tr(x)}J=null}else J=null;$!==null&&Vs(z,L,$,J,!1),Q!==null&&Le!==null&&Vs(z,Le,Q,J,!0)}}e:{if(L=_?rr(_):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var G=cf;else if(js(L))if(Ss)G=mf;else{G=ff;var Z=df}else($=L.nodeName)&&$.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(G=pf);if(G&&(G=G(e,_))){_s(z,G,n,T);break e}Z&&Z(e,L,_),e==="focusout"&&(Z=L._wrapperState)&&Z.controlled&&L.type==="number"&&St(L,"number",L.value)}switch(Z=_?rr(_):window,e){case"focusin":(js(Z)||Z.contentEditable==="true")&&(Zn=Z,fo=_,Yr=null);break;case"focusout":Yr=fo=Zn=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,Ts(z,n,T);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":Ts(z,n,T)}var ee;if(ao)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else qn?ws(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(vs&&n.locale!=="ko"&&(qn||le!=="onCompositionStart"?le==="onCompositionEnd"&&qn&&(ee=fs()):(an=T,to="value"in an?an.value:an.textContent,qn=!0)),Z=Jl(_,le),0<Z.length&&(le=new hs(le,e,null,n,T),z.push({event:le,listeners:Z}),ee?le.data=ee:(ee=ks(n),ee!==null&&(le.data=ee)))),(ee=lf?of(e,n):af(e,n))&&(_=Jl(_,"onBeforeInput"),0<_.length&&(T=new hs("onBeforeInput","beforeinput",null,n,T),z.push({event:T,listeners:_}),T.data=ee))}Bs(z,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=dt(e,n),i!=null&&r.unshift(Zr(e,i,l)),i=dt(e,t),i!=null&&r.push(Zr(e,i,l))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,t,n,r,l){for(var i=t._reactName,u=[];n!==null&&n!==r;){var f=n,m=f.alternate,_=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&_!==null&&(f=_,l?(m=dt(n,i),m!=null&&u.unshift(Zr(n,m,f))):l||(m=dt(n,i),m!=null&&u.push(Zr(n,m,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var kf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(jf,"")}function Kl(e,t,n){if(t=Ws(t),Ws(e)!==t&&n)throw Error(s(425))}function Gl(){}var xo=null,wo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0,Hs=typeof Promise=="function"?Promise:void 0,Sf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hs<"u"?function(e){return Hs.resolve(null).then(e).catch(bf)}:jo;function bf(e){setTimeout(function(){throw e})}function _o(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+nr,el="__reactProps$"+nr,Wt="__reactContainer$"+nr,So="__reactEvents$"+nr,Nf="__reactListeners$"+nr,Ef="__reactHandles$"+nr;function Ln(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[Dt])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function tl(e){return e=e[Dt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Yl(e){return e[el]||null}var bo=[],lr=-1;function cn(e){return{current:e}}function Se(e){0>lr||(e.current=bo[lr],bo[lr]=null,lr--)}function je(e,t){lr++,bo[lr]=e.current,e.current=t}var dn={},Ke=cn(dn),nt=cn(!1),Tn=dn;function ir(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function Xl(){Se(nt),Se(Ke)}function Js(e,t,n){if(Ke.current!==dn)throw Error(s(168));je(Ke,t),je(nt,n)}function Ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ve(e)||"Unknown",l));return B({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Tn=Ke.current,je(Ke,e),je(nt,nt.current),!0}function Gs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Ks(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(Ke),je(Ke,e)):Se(nt),je(nt,n)}var Ht=null,Zl=!1,No=!1;function Ys(e){Ht===null?Ht=[e]:Ht.push(e)}function Cf(e){Zl=!0,Ys(e)}function fn(){if(!No&&Ht!==null){No=!0;var e=0,t=ye;try{var n=Ht;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,Zl=!1}catch(l){throw Ht!==null&&(Ht=Ht.slice(e+1)),qa(Ji,fn),l}finally{ye=t,No=!1}}return null}var or=[],ar=0,ei=null,ti=0,yt=[],xt=0,zn=null,Qt=1,Jt="";function Mn(e,t){or[ar++]=ti,or[ar++]=ei,ei=e,ti=t}function Xs(e,t,n){yt[xt++]=Qt,yt[xt++]=Jt,yt[xt++]=zn,zn=e;var r=Qt;e=Jt;var l=32-Et(r)-1;r&=~(1<<l),n+=1;var i=32-Et(t)+l;if(30<i){var u=l-l%5;i=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Qt=1<<32-Et(t)+l|n<<l|r,Jt=i+e}else Qt=1<<i|n<<l|r,Jt=e}function Eo(e){e.return!==null&&(Mn(e,1),Xs(e,1,0))}function Co(e){for(;e===ei;)ei=or[--ar],or[ar]=null,ti=or[--ar],or[ar]=null;for(;e===zn;)zn=yt[--xt],yt[xt]=null,Jt=yt[--xt],yt[xt]=null,Qt=yt[--xt],yt[xt]=null}var pt=null,mt=null,be=!1,Pt=null;function qs(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,mt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Qt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,mt=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(be){var t=mt;if(t){var n=t;if(!Zs(e,t)){if(Po(e))throw Error(s(418));t=un(n.nextSibling);var r=pt;t&&Zs(e,t)?qs(r,n):(e.flags=e.flags&-4097|2,be=!1,pt=e)}}else{if(Po(e))throw Error(s(418));e.flags=e.flags&-4097|2,be=!1,pt=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ni(e){if(e!==pt)return!1;if(!be)return eu(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=mt)){if(Po(e))throw tu(),Error(s(418));for(;t;)qs(e,t),t=un(t.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=pt?un(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=mt;e;)e=un(e.nextSibling)}function sr(){mt=pt=null,be=!1}function Lo(e){Pt===null?Pt=[e]:Pt.push(e)}var Pf=K.ReactCurrentBatchConfig;function nl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var f=l.refs;u===null?delete f[i]:f[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nu(e){var t=e._init;return t(e._payload)}function ru(e){function t(x,g){if(e){var k=x.deletions;k===null?(x.deletions=[g],x.flags|=16):k.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function l(x,g){return x=wn(x,g),x.index=0,x.sibling=null,x}function i(x,g,k){return x.index=k,e?(k=x.alternate,k!==null?(k=k.index,k<g?(x.flags|=2,g):k):(x.flags|=2,g)):(x.flags|=1048576,g)}function u(x){return e&&x.alternate===null&&(x.flags|=2),x}function f(x,g,k,F){return g===null||g.tag!==6?(g=ja(k,x.mode,F),g.return=x,g):(g=l(g,k),g.return=x,g)}function m(x,g,k,F){var G=k.type;return G===Pe?T(x,g,k.props.children,F,k.key):g!==null&&(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===X&&nu(G)===g.type)?(F=l(g,k.props),F.ref=nl(x,g,k),F.return=x,F):(F=Ei(k.type,k.key,k.props,null,x.mode,F),F.ref=nl(x,g,k),F.return=x,F)}function _(x,g,k,F){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=_a(k,x.mode,F),g.return=x,g):(g=l(g,k.children||[]),g.return=x,g)}function T(x,g,k,F,G){return g===null||g.tag!==7?(g=$n(k,x.mode,F,G),g.return=x,g):(g=l(g,k),g.return=x,g)}function z(x,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ja(""+g,x.mode,k),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case q:return k=Ei(g.type,g.key,g.props,null,x.mode,k),k.ref=nl(x,null,g),k.return=x,k;case xe:return g=_a(g,x.mode,k),g.return=x,g;case X:var F=g._init;return z(x,F(g._payload),k)}if(Ot(g)||H(g))return g=$n(g,x.mode,k,null),g.return=x,g;ri(x,g)}return null}function L(x,g,k,F){var G=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return G!==null?null:f(x,g,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case q:return k.key===G?m(x,g,k,F):null;case xe:return k.key===G?_(x,g,k,F):null;case X:return G=k._init,L(x,g,G(k._payload),F)}if(Ot(k)||H(k))return G!==null?null:T(x,g,k,F,null);ri(x,k)}return null}function $(x,g,k,F,G){if(typeof F=="string"&&F!==""||typeof F=="number")return x=x.get(k)||null,f(g,x,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case q:return x=x.get(F.key===null?k:F.key)||null,m(g,x,F,G);case xe:return x=x.get(F.key===null?k:F.key)||null,_(g,x,F,G);case X:var Z=F._init;return $(x,g,k,Z(F._payload),G)}if(Ot(F)||H(F))return x=x.get(k)||null,T(g,x,F,G,null);ri(g,F)}return null}function Q(x,g,k,F){for(var G=null,Z=null,ee=g,le=g=0,Be=null;ee!==null&&le<k.length;le++){ee.index>le?(Be=ee,ee=null):Be=ee.sibling;var ge=L(x,ee,k[le],F);if(ge===null){ee===null&&(ee=Be);break}e&&ee&&ge.alternate===null&&t(x,ee),g=i(ge,g,le),Z===null?G=ge:Z.sibling=ge,Z=ge,ee=Be}if(le===k.length)return n(x,ee),be&&Mn(x,le),G;if(ee===null){for(;le<k.length;le++)ee=z(x,k[le],F),ee!==null&&(g=i(ee,g,le),Z===null?G=ee:Z.sibling=ee,Z=ee);return be&&Mn(x,le),G}for(ee=r(x,ee);le<k.length;le++)Be=$(ee,x,le,k[le],F),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?le:Be.key),g=i(Be,g,le),Z===null?G=Be:Z.sibling=Be,Z=Be);return e&&ee.forEach(function(kn){return t(x,kn)}),be&&Mn(x,le),G}function J(x,g,k,F){var G=H(k);if(typeof G!="function")throw Error(s(150));if(k=G.call(k),k==null)throw Error(s(151));for(var Z=G=null,ee=g,le=g=0,Be=null,ge=k.next();ee!==null&&!ge.done;le++,ge=k.next()){ee.index>le?(Be=ee,ee=null):Be=ee.sibling;var kn=L(x,ee,ge.value,F);if(kn===null){ee===null&&(ee=Be);break}e&&ee&&kn.alternate===null&&t(x,ee),g=i(kn,g,le),Z===null?G=kn:Z.sibling=kn,Z=kn,ee=Be}if(ge.done)return n(x,ee),be&&Mn(x,le),G;if(ee===null){for(;!ge.done;le++,ge=k.next())ge=z(x,ge.value,F),ge!==null&&(g=i(ge,g,le),Z===null?G=ge:Z.sibling=ge,Z=ge);return be&&Mn(x,le),G}for(ee=r(x,ee);!ge.done;le++,ge=k.next())ge=$(ee,x,le,ge.value,F),ge!==null&&(e&&ge.alternate!==null&&ee.delete(ge.key===null?le:ge.key),g=i(ge,g,le),Z===null?G=ge:Z.sibling=ge,Z=ge);return e&&ee.forEach(function(sp){return t(x,sp)}),be&&Mn(x,le),G}function Le(x,g,k,F){if(typeof k=="object"&&k!==null&&k.type===Pe&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case q:e:{for(var G=k.key,Z=g;Z!==null;){if(Z.key===G){if(G=k.type,G===Pe){if(Z.tag===7){n(x,Z.sibling),g=l(Z,k.props.children),g.return=x,x=g;break e}}else if(Z.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===X&&nu(G)===Z.type){n(x,Z.sibling),g=l(Z,k.props),g.ref=nl(x,Z,k),g.return=x,x=g;break e}n(x,Z);break}else t(x,Z);Z=Z.sibling}k.type===Pe?(g=$n(k.props.children,x.mode,F,k.key),g.return=x,x=g):(F=Ei(k.type,k.key,k.props,null,x.mode,F),F.ref=nl(x,g,k),F.return=x,x=F)}return u(x);case xe:e:{for(Z=k.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(x,g.sibling),g=l(g,k.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=_a(k,x.mode,F),g.return=x,x=g}return u(x);case X:return Z=k._init,Le(x,g,Z(k._payload),F)}if(Ot(k))return Q(x,g,k,F);if(H(k))return J(x,g,k,F);ri(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(x,g.sibling),g=l(g,k),g.return=x,x=g):(n(x,g),g=ja(k,x.mode,F),g.return=x,x=g),u(x)):n(x,g)}return Le}var ur=ru(!0),lu=ru(!1),li=cn(null),ii=null,cr=null,To=null;function zo(){To=cr=ii=null}function Mo(e){var t=li.current;Se(li),e._currentValue=t}function Oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){ii=e,To=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(ii===null)throw Error(s(308));cr=e,ii.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var On=null;function Fo(e){On===null?On=[e]:On.push(e)}function iu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Kt(e,n)}return l=r.interleaved,l===null?(t.next=t,Fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Kt(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,r){var l=e.updateQueue;pn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,_=m.next;m.next=null,u===null?i=_:u.next=_,u=m;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==u&&(f===null?T.firstBaseUpdate=_:f.next=_,T.lastBaseUpdate=m))}if(i!==null){var z=l.baseState;u=0,T=_=m=null,f=i;do{var L=f.lane,$=f.eventTime;if((r&L)===L){T!==null&&(T=T.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Q=e,J=f;switch(L=t,$=n,J.tag){case 1:if(Q=J.payload,typeof Q=="function"){z=Q.call($,z,L);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,L=typeof Q=="function"?Q.call($,z,L):Q,L==null)break e;z=B({},z,L);break e;case 2:pn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[f]:L.push(f))}else $={eventTime:$,lane:L,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(_=T=$,m=z):T=T.next=$,u|=L;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;L=f,f=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(T===null&&(m=z),l.baseState=m,l.firstBaseUpdate=_,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Un|=u,e.lanes=u,e.memoizedState=z}}function su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var rl={},Ut=cn(rl),ll=cn(rl),il=cn(rl);function Fn(e){if(e===rl)throw Error(s(174));return e}function Uo(e,t){switch(je(il,t),je(ll,e),je(Ut,rl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jn(t,e)}Se(Ut),je(Ut,t)}function fr(){Se(Ut),Se(ll),Se(il)}function uu(e){Fn(il.current);var t=Fn(Ut.current),n=Jn(t,e.type);t!==n&&(je(ll,e),je(Ut,n))}function Io(e){ll.current===e&&(Se(Ut),Se(ll))}var Ne=cn(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function Bo(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var ui=K.ReactCurrentDispatcher,$o=K.ReactCurrentBatchConfig,Dn=0,Ee=null,Fe=null,Ie=null,ci=!1,ol=!1,al=0,Rf=0;function Ge(){throw Error(s(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Wo(e,t,n,r,l,i){if(Dn=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ui.current=e===null||e.memoizedState===null?Mf:Of,e=n(r,l),ol){i=0;do{if(ol=!1,al=0,25<=i)throw Error(s(301));i+=1,Ie=Fe=null,t.updateQueue=null,ui.current=Ff,e=n(r,l)}while(ol)}if(ui.current=pi,t=Fe!==null&&Fe.next!==null,Dn=0,Ie=Fe=Ee=null,ci=!1,t)throw Error(s(300));return e}function Ho(){var e=al!==0;return al=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ee.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function kt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ie===null?Ee.memoizedState:Ie.next;if(t!==null)Ie=t,Fe=e;else{if(e===null)throw Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ie===null?Ee.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function sl(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Fe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=u=null,m=null,_=i;do{var T=_.lane;if((Dn&T)===T)m!==null&&(m=m.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var z={lane:T,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};m===null?(f=m=z,u=r):m=m.next=z,Ee.lanes|=T,Un|=T}_=_.next}while(_!==null&&_!==i);m===null?u=r:m.next=f,Ct(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Ee.lanes|=i,Un|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Ct(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cu(){}function du(e,t){var n=Ee,r=kt(),l=t(),i=!Ct(r.memoizedState,l);if(i&&(r.memoizedState=l,lt=!0),r=r.queue,Ko(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,ul(9,pu.bind(null,n,r,l,t),void 0,null),Ae===null)throw Error(s(349));(Dn&30)!==0||fu(n,t,l)}return l}function fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pu(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&gu(e)}function mu(e,t,n){return n(function(){hu(t)&&gu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function gu(e){var t=Kt(e,1);t!==null&&zt(t,e,1,-1)}function vu(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:e},t.queue=e,e=e.dispatch=zf.bind(null,Ee,e),[t.memoizedState,e]}function ul(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return kt().memoizedState}function di(e,t,n,r){var l=It();Ee.flags|=e,l.memoizedState=ul(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var l=kt();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var u=Fe.memoizedState;if(i=u.destroy,r!==null&&Vo(r,u.deps)){l.memoizedState=ul(t,n,i,r);return}}Ee.flags|=e,l.memoizedState=ul(1|t,n,i,r)}function xu(e,t){return di(8390656,8,e,t)}function Ko(e,t){return fi(2048,8,e,t)}function wu(e,t){return fi(4,2,e,t)}function ku(e,t){return fi(4,4,e,t)}function ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,ju.bind(null,t,e),n)}function Go(){}function Su(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bu(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return(Dn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(Ct(n,t)||(n=ns(),Ee.lanes|=n,Un|=n,e.baseState=!0),t)}function Lf(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=$o.transition;$o.transition={};try{e(!1),t()}finally{ye=n,$o.transition=r}}function Eu(){return kt().memoizedState}function Tf(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e))Pu(t,n);else if(n=iu(e,t,n,r),n!==null){var l=et();zt(n,e,r,l),Ru(n,t,r)}}function zf(e,t,n){var r=yn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Pu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,n);if(l.hasEagerState=!0,l.eagerState=f,Ct(f,u)){var m=t.interleaved;m===null?(l.next=l,Fo(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}n=iu(e,t,l,r),n!==null&&(l=et(),zt(n,e,r,l),Ru(n,t,r))}}function Cu(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Pu(e,t){ol=ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ru(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}var pi={readContext:wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Mf={readContext:wt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tf.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:Go,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Lf.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=It();if(be){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ae===null)throw Error(s(349));(Dn&30)!==0||fu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,xu(mu.bind(null,r,i,e),[e]),r.flags|=2048,ul(9,pu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=It(),t=Ae.identifierPrefix;if(be){var n=Jt,r=Qt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=al++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Of={readContext:wt,useCallback:Su,useContext:wt,useEffect:Ko,useImperativeHandle:_u,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:bu,useReducer:Qo,useRef:yu,useState:function(){return Qo(sl)},useDebugValue:Go,useDeferredValue:function(e){var t=kt();return Nu(t,Fe.memoizedState,e)},useTransition:function(){var e=Qo(sl)[0],t=kt().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Eu,unstable_isNewReconciler:!1},Ff={readContext:wt,useCallback:Su,useContext:wt,useEffect:Ko,useImperativeHandle:_u,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:bu,useReducer:Jo,useRef:yu,useState:function(){return Jo(sl)},useDebugValue:Go,useDeferredValue:function(e){var t=kt();return Fe===null?t.memoizedState=e:Nu(t,Fe.memoizedState,e)},useTransition:function(){var e=Jo(sl)[0],t=kt().memoizedState;return[e,t]},useMutableSource:cu,useSyncExternalStore:du,useId:Eu,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mi={isMounted:function(e){return(e=e._reactInternals)?Oe(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),l=yn(e),i=Gt(r,l);i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,l),t!==null&&(zt(t,e,l,r),oi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),l=yn(e),i=Gt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mn(e,i,l),t!==null&&(zt(t,e,l,r),oi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=yn(e),l=Gt(n,r);l.tag=2,t!=null&&(l.callback=t),t=mn(e,l,r),t!==null&&(zt(t,e,r,n),oi(t,e,r))}};function Lu(e,t,n,r,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,u):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(l,i):!0}function Tu(e,t,n){var r=!1,l=dn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(l=rt(t)?Tn:Ke.current,r=t.contextTypes,i=(r=r!=null)?ir(e,l):dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function Xo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Do(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=wt(i):(i=rt(t)?Tn:Ke.current,l.context=ir(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&mi.enqueueReplaceState(l,l.state,null),ai(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pr(e,t){try{var n="",r=t;do n+=fe(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Df=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ki||(ki=!0,ma=r),Zo(e,t)},n}function Ou(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Zo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zo(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Df;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Xf.bind(null,e,t,n),t.then(e,e))}function Du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Uf=K.ReactCurrentOwner,lt=!1;function Ze(e,t,n,r){t.child=e===null?lu(t,null,n,r):ur(t,e.child,n,r)}function Iu(e,t,n,r,l){n=n.render;var i=t.ref;return dr(t,l),r=Wo(e,t,n,r,i,l),n=Ho(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(be&&n&&Eo(t),t.flags|=1,Ze(e,t,r,l),t.child)}function Au(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bu(e,t,i,r,l)):(e=Ei(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(u,r)&&e.ref===t.ref)return Yt(e,t,l)}return t.flags|=1,e=wn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Bu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Yt(e,t,l)}return ea(e,t,n,r,l)}function $u(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(hr,ht),ht|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(hr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(hr,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,je(hr,ht),ht|=r;return Ze(e,t,l,n),t.child}function Vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,l){var i=rt(n)?Tn:Ke.current;return i=ir(t,i),dr(t,l),n=Wo(e,t,n,r,i,l),r=Ho(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(be&&r&&Eo(t),t.flags|=1,Ze(e,t,n,l),t.child)}function Wu(e,t,n,r,l){if(rt(n)){var i=!0;ql(t)}else i=!1;if(dr(t,l),t.stateNode===null)gi(e,t),Tu(t,n,r),Xo(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var m=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=wt(_):(_=rt(n)?Tn:Ke.current,_=ir(t,_));var T=n.getDerivedStateFromProps,z=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function";z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||m!==_)&&zu(t,u,r,_),pn=!1;var L=t.memoizedState;u.state=L,ai(t,r,u,l),m=t.memoizedState,f!==r||L!==m||nt.current||pn?(typeof T=="function"&&(Yo(t,n,T,r),m=t.memoizedState),(f=pn||Lu(t,n,f,r,L,m,_))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),u.props=r,u.state=m,u.context=_,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,ou(e,t),f=t.memoizedProps,_=t.type===t.elementType?f:Rt(t.type,f),u.props=_,z=t.pendingProps,L=u.context,m=n.contextType,typeof m=="object"&&m!==null?m=wt(m):(m=rt(n)?Tn:Ke.current,m=ir(t,m));var $=n.getDerivedStateFromProps;(T=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==z||L!==m)&&zu(t,u,r,m),pn=!1,L=t.memoizedState,u.state=L,ai(t,r,u,l);var Q=t.memoizedState;f!==z||L!==Q||nt.current||pn?(typeof $=="function"&&(Yo(t,n,$,r),Q=t.memoizedState),(_=pn||Lu(t,n,_,r,L,Q,m)||!1)?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,Q,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,Q,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Q),u.props=r,u.state=Q,u.context=m,r=_):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,i,l)}function ta(e,t,n,r,l,i){Vu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&Gs(t,n,!1),Yt(e,t,i);r=t.stateNode,Uf.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=ur(t,e.child,null,i),t.child=ur(t,null,f,i)):Ze(e,t,f,i),t.memoizedState=r.state,l&&Gs(t,n,!0),t.child}function Hu(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Uo(e,t.containerInfo)}function Qu(e,t,n,r,l){return sr(),Lo(l),t.flags|=256,Ze(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,t,n){var r=t.pendingProps,l=Ne.current,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),je(Ne,l&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,i?(r=t.mode,i=t.child,u={mode:"hidden",children:u},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=Ci(u,r,0,null),e=$n(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ra(n),t.memoizedState=na,e):la(t,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return If(e,t,u,r,f,l,n);if(i){i=r.fallback,u=t.mode,l=e.child,f=l.sibling;var m={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=wn(l,m),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=wn(f,i):(i=$n(i,u,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,u=e.child.memoizedState,u=u===null?ra(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~n,t.memoizedState=na,r}return i=e.child,e=i.sibling,r=wn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,r){return r!==null&&Lo(r),ur(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function If(e,t,n,r,l,i,u){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(s(422))),hi(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ci({mode:"visible",children:r.children},l,0,null),i=$n(i,l,u,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&ur(t,e.child,null,u),t.child.memoizedState=ra(u),t.memoizedState=na,i);if((t.mode&1)===0)return hi(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(s(419)),r=qo(i,r,void 0),hi(e,t,u,r)}if(f=(u&e.childLanes)!==0,lt||f){if(r=Ae,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Kt(e,l),zt(r,e,l,-1))}return wa(),r=qo(Error(s(421))),hi(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=qf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,mt=un(l.nextSibling),pt=t,be=!0,Pt=null,e!==null&&(yt[xt++]=Qt,yt[xt++]=Jt,yt[xt++]=zn,Qt=e.id,Jt=e.overflow,zn=t),t=la(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oo(e.return,t,n)}function ia(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Gu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ze(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ia(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&si(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ia(t,!0,n,null,i);break;case"together":ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Af(e,t,n){switch(t.tag){case 3:Hu(t),sr();break;case 5:uu(t);break;case 1:rt(t.type)&&ql(t);break;case 4:Uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;je(li,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ju(e,t,n):(je(Ne,Ne.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);je(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return Yt(e,t,n)}var Yu,oa,Xu,qu;Yu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oa=function(){},Xu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Fn(Ut.current);var i=null;switch(n){case"input":l=tt(e,l),r=tt(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=Hn(e,l),r=Hn(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gl)}Rr(n,r);var u;n=null;for(_ in l)if(!r.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var f=l[_];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(p.hasOwnProperty(_)?i||(i=[]):(i=i||[]).push(_,null));for(_ in r){var m=r[_];if(f=l!=null?l[_]:void 0,r.hasOwnProperty(_)&&m!==f&&(m!=null||f!=null))if(_==="style")if(f){for(u in f)!f.hasOwnProperty(u)||m&&m.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in m)m.hasOwnProperty(u)&&f[u]!==m[u]&&(n||(n={}),n[u]=m[u])}else n||(i||(i=[]),i.push(_,n)),n=m;else _==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(i=i||[]).push(_,m)):_==="children"?typeof m!="string"&&typeof m!="number"||(i=i||[]).push(_,""+m):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(p.hasOwnProperty(_)?(m!=null&&_==="onScroll"&&_e("scroll",e),i||f===m||(i=[])):(i=i||[]).push(_,m))}n&&(i=i||[]).push("style",n);var _=i;(t.updateQueue=_)&&(t.flags|=4)}},qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function cl(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&Xl(),Ye(t),null;case 3:return r=t.stateNode,fr(),Se(nt),Se(Ke),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(va(Pt),Pt=null))),oa(e,t),Ye(t),null;case 5:Io(t);var l=Fn(il.current);if(n=t.type,e!==null&&t.stateNode!=null)Xu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ye(t),null}if(e=Fn(Ut.current),ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Dt]=t,r[el]=i,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(l=0;l<Xr.length;l++)_e(Xr[l],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":br(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":Qn(r,i),_e("invalid",r)}Rr(n,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];u==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&Kl(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Kl(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&_e("scroll",r)}switch(n){case"input":Mt(r),tn(r,i,!0);break;case"textarea":Mt(r),Er(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Dt]=t,e[el]=r,Yu(e,t,!1,!1),t.stateNode=e;e:{switch(u=Lr(n,r),n){case"dialog":_e("cancel",e),_e("close",e),l=r;break;case"iframe":case"object":case"embed":_e("load",e),l=r;break;case"video":case"audio":for(l=0;l<Xr.length;l++)_e(Xr[l],e);l=r;break;case"source":_e("error",e),l=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=r;break;case"details":_e("toggle",e),l=r;break;case"input":br(e,r),l=tt(e,r),_e("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),_e("invalid",e);break;case"textarea":Qn(e,r),l=Hn(e,r),_e("invalid",e);break;default:l=r}Rr(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var m=f[i];i==="style"?bl(e,m):i==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Pr(e,m)):i==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&Nt(e,m):typeof m=="number"&&Nt(e,""+m):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?m!=null&&i==="onScroll"&&_e("scroll",e):m!=null&&ie(e,i,m,u))}switch(n){case"input":Mt(e),tn(e,r,!1);break;case"textarea":Mt(e),Er(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=Fn(il.current),Fn(Ut.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(i=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Kl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Ye(t),null;case 13:if(Se(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)tu(),sr(),t.flags|=98560,i=!1;else if(i=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Dt]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else Pt!==null&&(va(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?De===0&&(De=3):wa())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return fr(),oa(e,t),e===null&&qr(t.stateNode.containerInfo),Ye(t),null;case 10:return Mo(t.type._context),Ye(t),null;case 17:return rt(t.type)&&Xl(),Ye(t),null;case 19:if(Se(Ne),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,u=i.rendering,u===null)if(r)cl(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=si(e),u!==null){for(t.flags|=128,cl(i,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Ne,Ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&Re()>gr&&(t.flags|=128,r=!0,cl(i,!1),t.lanes=4194304)}else{if(!r)if(e=si(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!be)return Ye(t),null}else 2*Re()-i.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,cl(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(n=i.last,n!==null?n.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Re(),t.sibling=null,n=Ne.current,je(Ne,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function $f(e,t){switch(Co(t),t.tag){case 1:return rt(t.type)&&Xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),Se(nt),Se(Ke),Bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Io(t),null;case 13:if(Se(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ne),null;case 4:return fr(),null;case 10:return Mo(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var vi=!1,Xe=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,W=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function aa(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Zu=!1;function Wf(e,t){if(xo=Dl,e=Ls(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,f=-1,m=-1,_=0,T=0,z=e,L=null;t:for(;;){for(var $;z!==n||l!==0&&z.nodeType!==3||(f=u+l),z!==i||r!==0&&z.nodeType!==3||(m=u+r),z.nodeType===3&&(u+=z.nodeValue.length),($=z.firstChild)!==null;)L=z,z=$;for(;;){if(z===e)break t;if(L===n&&++_===l&&(f=u),L===i&&++T===r&&(m=u),($=z.nextSibling)!==null)break;z=L,L=z.parentNode}z=$}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},Dl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var J=Q.memoizedProps,Le=Q.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?J:Rt(t.type,J),Le);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Ce(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return Q=Zu,Zu=!1,Q}function dl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&aa(t,n,i)}l=l.next}while(l!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ec(e){var t=e.alternate;t!==null&&(e.alternate=null,ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[el],delete t[So],delete t[Nf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gl));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}var He=null,Lt=!1;function hn(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:Xe||mr(n,t);case 6:var r=He,l=Lt;He=null,hn(e,t,n),He=r,Lt=l,He!==null&&(Lt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Lt?(e=He,n=n.stateNode,e.nodeType===8?_o(e.parentNode,n):e.nodeType===1&&_o(e,n),Vr(e)):_o(He,n.stateNode));break;case 4:r=He,l=Lt,He=n.stateNode.containerInfo,Lt=!0,hn(e,t,n),He=r,Lt=l;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&aa(n,t,u),l=l.next}while(l!==r)}hn(e,t,n);break;case 1:if(!Xe&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ce(n,t,f)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,hn(e,t,n),Xe=r):hn(e,t,n);break;default:hn(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var l=Zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:He=f.stateNode,Lt=!1;break e;case 3:He=f.stateNode.containerInfo,Lt=!0;break e;case 4:He=f.stateNode.containerInfo,Lt=!0;break e}f=f.return}if(He===null)throw Error(s(160));rc(i,u,l),He=null,Lt=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(_){Ce(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ic(t,e),t=t.sibling}function ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),At(e),r&4){try{dl(3,e,e.return),yi(3,e)}catch(J){Ce(e,e.return,J)}try{dl(5,e,e.return)}catch(J){Ce(e,e.return,J)}}break;case 1:Tt(t,e),At(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(Tt(t,e),At(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var l=e.stateNode;try{Nt(l,"")}catch(J){Ce(e,e.return,J)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=n!==null?n.memoizedProps:i,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&_l(l,i),Lr(f,u);var _=Lr(f,i);for(u=0;u<m.length;u+=2){var T=m[u],z=m[u+1];T==="style"?bl(l,z):T==="dangerouslySetInnerHTML"?Pr(l,z):T==="children"?Nt(l,z):ie(l,T,z,_)}switch(f){case"input":Nr(l,i);break;case"textarea":$t(l,i);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?Bt(l,!!i.multiple,$,!1):L!==!!i.multiple&&(i.defaultValue!=null?Bt(l,!!i.multiple,i.defaultValue,!0):Bt(l,!!i.multiple,i.multiple?[]:"",!1))}l[el]=i}catch(J){Ce(e,e.return,J)}}break;case 6:if(Tt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(J){Ce(e,e.return,J)}}break;case 3:if(Tt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(J){Ce(e,e.return,J)}break;case 4:Tt(t,e),At(e);break;case 13:Tt(t,e),At(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(pa=Re())),r&4&&lc(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(_=Xe)||T,Tt(t,e),Xe=_):Tt(t,e),At(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!T&&(e.mode&1)!==0)for(W=e,T=e.child;T!==null;){for(z=W=T;W!==null;){switch(L=W,$=L.child,L.tag){case 0:case 11:case 14:case 15:dl(4,L,L.return);break;case 1:mr(L,L.return);var Q=L.stateNode;if(typeof Q.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(J){Ce(r,n,J)}}break;case 5:mr(L,L.return);break;case 22:if(L.memoizedState!==null){sc(z);continue}}$!==null?($.return=L,W=$):sc(z)}T=T.sibling}e:for(T=null,z=e;;){if(z.tag===5){if(T===null){T=z;try{l=z.stateNode,_?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=z.stateNode,m=z.memoizedProps.style,u=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Sl("display",u))}catch(J){Ce(e,e.return,J)}}}else if(z.tag===6){if(T===null)try{z.stateNode.nodeValue=_?"":z.memoizedProps}catch(J){Ce(e,e.return,J)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;T===z&&(T=null),z=z.return}T===z&&(T=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Tt(t,e),At(e),r&4&&lc(e);break;case 21:break;default:Tt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tc(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Nt(l,""),r.flags&=-33);var i=nc(e);ca(e,i,l);break;case 3:case 4:var u=r.stateNode.containerInfo,f=nc(e);ua(e,f,u);break;default:throw Error(s(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e,t,n){W=e,oc(e)}function oc(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var l=W,i=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||vi;if(!u){var f=l.alternate,m=f!==null&&f.memoizedState!==null||Xe;f=vi;var _=Xe;if(vi=u,(Xe=m)&&!_)for(W=l;W!==null;)u=W,m=u.child,u.tag===22&&u.memoizedState!==null?uc(l):m!==null?(m.return=u,W=m):uc(l);for(;i!==null;)W=i,oc(i),i=i.sibling;W=l,vi=f,Xe=_}ac(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,W=i):ac(e)}}function ac(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&su(t,i,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}su(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var T=_.memoizedState;if(T!==null){var z=T.dehydrated;z!==null&&Vr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Xe||t.flags&512&&sa(t)}catch(L){Ce(t,t.return,L)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function sc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function uc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(m){Ce(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(m){Ce(t,l,m)}}var i=t.return;try{sa(t)}catch(m){Ce(t,i,m)}break;case 5:var u=t.return;try{sa(t)}catch(m){Ce(t,u,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){W=null;break}var f=t.sibling;if(f!==null){f.return=t.return,W=f;break}W=t.return}}var Qf=Math.ceil,xi=K.ReactCurrentDispatcher,da=K.ReactCurrentOwner,jt=K.ReactCurrentBatchConfig,he=0,Ae=null,Me=null,Qe=0,ht=0,hr=cn(0),De=0,fl=null,Un=0,wi=0,fa=0,pl=null,it=null,pa=0,gr=1/0,Xt=null,ki=!1,ma=null,gn=null,ji=!1,vn=null,_i=0,ml=0,ha=null,Si=-1,bi=0;function et(){return(he&6)!==0?Re():Si!==-1?Si:Si=Re()}function yn(e){return(e.mode&1)===0?1:(he&2)!==0&&Qe!==0?Qe&-Qe:Pf.transition!==null?(bi===0&&(bi=ns()),bi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:ds(e.type)),e)}function zt(e,t,n,r){if(50<ml)throw ml=0,ha=null,Error(s(185));Ur(e,n,r),((he&2)===0||e!==Ae)&&(e===Ae&&((he&2)===0&&(wi|=n),De===4&&xn(e,Qe)),ot(e,r),n===1&&he===0&&(t.mode&1)===0&&(gr=Re()+500,Zl&&fn()))}function ot(e,t){var n=e.callbackNode;Cd(e,t);var r=Ml(e,e===Ae?Qe:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?Cf(dc.bind(null,e)):Ys(dc.bind(null,e)),Sf(function(){(he&6)===0&&fn()}),n=null;else{switch(rs(r)){case 1:n=Ji;break;case 4:n=es;break;case 16:n=Rl;break;case 536870912:n=ts;break;default:n=Rl}n=xc(n,cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cc(e,t){if(Si=-1,bi=0,(he&6)!==0)throw Error(s(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ml(e,e===Ae?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ni(e,r);else{t=r;var l=he;he|=2;var i=pc();(Ae!==e||Qe!==t)&&(Xt=null,gr=Re()+500,An(e,t));do try{Gf();break}catch(f){fc(e,f)}while(!0);zo(),xi.current=i,he=l,Me!==null?t=0:(Ae=null,Qe=0,t=De)}if(t!==0){if(t===2&&(l=Ki(e),l!==0&&(r=l,t=ga(e,l))),t===1)throw n=fl,An(e,0),xn(e,r),ot(e,Re()),n;if(t===6)xn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Jf(l)&&(t=Ni(e,r),t===2&&(i=Ki(e),i!==0&&(r=i,t=ga(e,i))),t===1))throw n=fl,An(e,0),xn(e,r),ot(e,Re()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Bn(e,it,Xt);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=pa+500-Re(),10<t)){if(Ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(Bn.bind(null,e,it,Xt),t);break}Bn(e,it,Xt);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-Et(r);i=1<<u,u=t[u],u>l&&(l=u),r&=~i}if(r=l,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qf(r/1960))-r,10<r){e.timeoutHandle=jo(Bn.bind(null,e,it,Xt),r);break}Bn(e,it,Xt);break;case 5:Bn(e,it,Xt);break;default:throw Error(s(329))}}}return ot(e,Re()),e.callbackNode===n?cc.bind(null,e):null}function ga(e,t){var n=pl;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=it,it=n,t!==null&&va(t)),e}function va(e){it===null?it=e:it.push.apply(it,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ct(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~fa,t&=~wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function dc(e){if((he&6)!==0)throw Error(s(327));vr();var t=Ml(e,0);if((t&1)===0)return ot(e,Re()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=Ki(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=fl,An(e,0),xn(e,t),ot(e,Re()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,it,Xt),ot(e,Re()),null}function ya(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(gr=Re()+500,Zl&&fn())}}function In(e){vn!==null&&vn.tag===0&&(he&6)===0&&vr();var t=he;he|=1;var n=jt.transition,r=ye;try{if(jt.transition=null,ye=1,e)return e()}finally{ye=r,jt.transition=n,he=t,(he&6)===0&&fn()}}function xa(){ht=hr.current,Se(hr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_f(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:fr(),Se(nt),Se(Ke),Bo();break;case 5:Io(r);break;case 4:fr();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:Mo(r.type._context);break;case 22:case 23:xa()}n=n.return}if(Ae=e,Me=e=wn(e.current,null),Qe=ht=t,De=0,fl=null,fa=wi=Un=0,it=pl=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var u=i.next;i.next=l,r.next=u}n.pending=r}On=null}return e}function fc(e,t){do{var n=Me;try{if(zo(),ui.current=pi,ci){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ci=!1}if(Dn=0,Ie=Fe=Ee=null,ol=!1,al=0,da.current=null,n===null||n.return===null){De=1,fl=t,Me=null;break}e:{var i=e,u=n.return,f=n,m=t;if(t=Qe,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var _=m,T=f,z=T.tag;if((T.mode&1)===0&&(z===0||z===11||z===15)){var L=T.alternate;L?(T.updateQueue=L.updateQueue,T.memoizedState=L.memoizedState,T.lanes=L.lanes):(T.updateQueue=null,T.memoizedState=null)}var $=Du(u);if($!==null){$.flags&=-257,Uu($,u,f,i,t),$.mode&1&&Fu(i,_,t),t=$,m=_;var Q=t.updateQueue;if(Q===null){var J=new Set;J.add(m),t.updateQueue=J}else Q.add(m);break e}else{if((t&1)===0){Fu(i,_,t),wa();break e}m=Error(s(426))}}else if(be&&f.mode&1){var Le=Du(u);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Uu(Le,u,f,i,t),Lo(pr(m,f));break e}}i=m=pr(m,f),De!==4&&(De=2),pl===null?pl=[i]:pl.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=Mu(i,m,t);au(i,x);break e;case 1:f=m;var g=i.type,k=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(gn===null||!gn.has(k)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=Ou(i,f,t);au(i,F);break e}}i=i.return}while(i!==null)}hc(n)}catch(G){t=G,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function pc(){var e=xi.current;return xi.current=pi,e===null?pi:e}function wa(){(De===0||De===3||De===2)&&(De=4),Ae===null||(Un&268435455)===0&&(wi&268435455)===0||xn(Ae,Qe)}function Ni(e,t){var n=he;he|=2;var r=pc();(Ae!==e||Qe!==t)&&(Xt=null,An(e,t));do try{Kf();break}catch(l){fc(e,l)}while(!0);if(zo(),he=n,xi.current=r,Me!==null)throw Error(s(261));return Ae=null,Qe=0,De}function Kf(){for(;Me!==null;)mc(Me)}function Gf(){for(;Me!==null&&!xd();)mc(Me)}function mc(e){var t=yc(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?hc(e):Me=t,da.current=null}function hc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Bf(n,t,ht),n!==null){Me=n;return}}else{if(n=$f(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);De===0&&(De=5)}function Bn(e,t,n){var r=ye,l=jt.transition;try{jt.transition=null,ye=1,Yf(e,t,n,r)}finally{jt.transition=l,ye=r}return null}function Yf(e,t,n,r){do vr();while(vn!==null);if((he&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pd(e,i),e===Ae&&(Me=Ae=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ji||(ji=!0,xc(Rl,function(){return vr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=jt.transition,jt.transition=null;var u=ye;ye=1;var f=he;he|=4,da.current=null,Wf(e,n),ic(n,e),gf(wo),Dl=!!xo,wo=xo=null,e.current=n,Hf(n),wd(),he=f,ye=u,jt.transition=i}else e.current=n;if(ji&&(ji=!1,vn=e,_i=l),i=e.pendingLanes,i===0&&(gn=null),_d(n.stateNode),ot(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ki)throw ki=!1,e=ma,ma=null,e;return(_i&1)!==0&&e.tag!==0&&vr(),i=e.pendingLanes,(i&1)!==0?e===ha?ml++:(ml=0,ha=e):ml=0,fn(),null}function vr(){if(vn!==null){var e=rs(_i),t=jt.transition,n=ye;try{if(jt.transition=null,ye=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,_i=0,(he&6)!==0)throw Error(s(331));var l=he;for(he|=4,W=e.current;W!==null;){var i=W,u=i.child;if((W.flags&16)!==0){var f=i.deletions;if(f!==null){for(var m=0;m<f.length;m++){var _=f[m];for(W=_;W!==null;){var T=W;switch(T.tag){case 0:case 11:case 15:dl(8,T,i)}var z=T.child;if(z!==null)z.return=T,W=z;else for(;W!==null;){T=W;var L=T.sibling,$=T.return;if(ec(T),T===_){W=null;break}if(L!==null){L.return=$,W=L;break}W=$}}}var Q=i.alternate;if(Q!==null){var J=Q.child;if(J!==null){Q.child=null;do{var Le=J.sibling;J.sibling=null,J=Le}while(J!==null)}}W=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,W=u;else e:for(;W!==null;){if(i=W,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:dl(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,W=x;break e}W=i.return}}var g=e.current;for(W=g;W!==null;){u=W;var k=u.child;if((u.subtreeFlags&2064)!==0&&k!==null)k.return=u,W=k;else e:for(u=g;W!==null;){if(f=W,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:yi(9,f)}}catch(G){Ce(f,f.return,G)}if(f===u){W=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,W=F;break e}W=f.return}}if(he=l,fn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{ye=n,jt.transition=t}}return!1}function gc(e,t,n){t=pr(n,t),t=Mu(e,t,1),e=mn(e,t,1),t=et(),e!==null&&(Ur(e,1,t),ot(e,t))}function Ce(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=pr(n,e),e=Ou(t,e,1),t=mn(t,e,1),e=et(),t!==null&&(Ur(t,1,e),ot(t,e));break}}t=t.return}}function Xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Qe&n)===n&&(De===4||De===3&&(Qe&130023424)===Qe&&500>Re()-pa?An(e,0):fa|=n),ot(e,t)}function vc(e,t){t===0&&((e.mode&1)===0?t=1:(t=zl,zl<<=1,(zl&130023424)===0&&(zl=4194304)));var n=et();e=Kt(e,t),e!==null&&(Ur(e,t,n),ot(e,n))}function qf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function Zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),vc(e,n)}var yc;yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Af(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,be&&(t.flags&1048576)!==0&&Xs(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gi(e,t),e=t.pendingProps;var l=ir(t,Ke.current);dr(t,n),l=Wo(null,t,r,e,l,n);var i=Ho();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,ql(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=mi,t.stateNode=l,l._reactInternals=t,Xo(t,r,e,n),t=ta(null,t,r,!0,i,n)):(t.tag=0,be&&i&&Eo(t),Ze(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gi(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=tp(r),e=Rt(r,e),l){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=Iu(null,t,r,e,n);break e;case 14:t=Au(null,t,r,Rt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rt(r,l),ea(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rt(r,l),Wu(e,t,r,l,n);case 3:e:{if(Hu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ou(e,t),ai(t,r,null,n);var u=t.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pr(Error(s(423)),t),t=Qu(e,t,r,n,l);break e}else if(r!==l){l=pr(Error(s(424)),t),t=Qu(e,t,r,n,l);break e}else for(mt=un(t.stateNode.containerInfo.firstChild),pt=t,be=!0,Pt=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===l){t=Yt(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return uu(t),e===null&&Ro(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,ko(r,l)?u=null:i!==null&&ko(r,i)&&(t.flags|=32),Vu(e,t),Ze(e,t,u,n),t.child;case 6:return e===null&&Ro(t),null;case 13:return Ju(e,t,n);case 4:return Uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rt(r,l),Iu(e,t,r,l,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,je(li,r._currentValue),r._currentValue=u,i!==null)if(Ct(i.value,u)){if(i.children===l.children&&!nt.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){u=i.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(i.tag===1){m=Gt(-1,n&-n),m.tag=2;var _=i.updateQueue;if(_!==null){_=_.shared;var T=_.pending;T===null?m.next=m:(m.next=T.next,T.next=m),_.pending=m}}i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),Oo(i.return,n,t),f.lanes|=n;break}m=m.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(s(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Oo(u,n,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}Ze(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,dr(t,n),l=wt(l),r=r(l),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,l=Rt(r,t.pendingProps),l=Rt(r.type,l),Au(e,t,r,l,n);case 15:return Bu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rt(r,l),gi(e,t),t.tag=1,rt(r)?(e=!0,ql(t)):e=!1,dr(t,n),Tu(t,r,l),Xo(t,r,l,n),ta(null,t,r,!0,e,n);case 19:return Gu(e,t,n);case 22:return $u(e,t,n)}throw Error(s(156,t.tag))};function xc(e,t){return qa(e,t)}function ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new ep(e,t,n,r)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tp(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Je)return 11;if(e===Y)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,l,i){var u=2;if(r=e,typeof e=="function")ka(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Pe:return $n(n.children,l,i,t);case we:u=8,l|=8;break;case ut:return e=_t(12,n,t,l|2),e.elementType=ut,e.lanes=i,e;case V:return e=_t(13,n,t,l),e.elementType=V,e.lanes=i,e;case ne:return e=_t(19,n,t,l),e.elementType=ne,e.lanes=i,e;case re:return Ci(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:u=10;break e;case gt:u=9;break e;case Je:u=11;break e;case Y:u=14;break e;case X:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=_t(u,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function $n(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=_t(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function _a(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function np(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,l,i,u,f,m){return e=new np(e,t,n,f,m),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(i),e}function rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wc(e){if(!e)return dn;e=e._reactInternals;e:{if(Oe(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(rt(n))return Ks(e,n,t)}return t}function kc(e,t,n,r,l,i,u,f,m){return e=Sa(n,r,!0,e,l,i,u,f,m),e.context=wc(null),n=e.current,r=et(),l=yn(n),i=Gt(r,l),i.callback=t??null,mn(n,i,l),e.current.lanes=l,Ur(e,l,r),ot(e,r),e}function Pi(e,t,n,r){var l=t.current,i=et(),u=yn(l);return n=wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(l,t,u),e!==null&&(zt(e,l,u,i),oi(e,l,u)),u}function Ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ba(e,t){jc(e,t),(e=e.alternate)&&jc(e,t)}function lp(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Na(e){this._internalRoot=e}Li.prototype.render=Na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Pi(e,t,null,null)},Li.prototype.unmount=Na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){Pi(null,e,null,null)}),t[Wt]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&us(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sc(){}function ip(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var _=Ri(u);i.call(_)}}var u=kc(t,r,e,0,null,!1,!1,"",Sc);return e._reactRootContainer=u,e[Wt]=u.current,qr(e.nodeType===8?e.parentNode:e),In(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var _=Ri(m);f.call(_)}}var m=Sa(e,0,!1,null,null,!1,!1,"",Sc);return e._reactRootContainer=m,e[Wt]=m.current,qr(e.nodeType===8?e.parentNode:e),In(function(){Pi(t,m,n,r)}),m}function zi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var f=l;l=function(){var m=Ri(u);f.call(m)}}Pi(t,u,e,l)}else u=ip(n,t,e,l,r);return Ri(u)}ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(Yi(t,n|1),ot(t,Re()),(he&6)===0&&(gr=Re()+500,fn()))}break;case 13:In(function(){var r=Kt(e,1);if(r!==null){var l=et();zt(r,e,1,l)}}),ba(e,1)}},Xi=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=et();zt(t,e,134217728,n)}ba(e,134217728)}},is=function(e){if(e.tag===13){var t=yn(e),n=Kt(e,t);if(n!==null){var r=et();zt(n,e,t,r)}ba(e,t)}},os=function(){return ye},as=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}},En=function(e,t,n){switch(t){case"input":if(Nr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Yl(r);if(!l)throw Error(s(90));ct(r),Nr(r,l)}}}break;case"textarea":$t(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},Cl=ya,Mr=In;var op={usingClientEntryPoint:!1,Events:[tl,rr,Yl,Nl,El,ya]},hl={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ap={bundleType:hl.bundleType,version:hl.version,rendererPackageName:hl.rendererPackageName,rendererConfig:hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ya(e),e===null?null:e.stateNode},findFiberByHostInstance:hl.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Ll=Mi.inject(ap),Ft=Mi}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(s(200));return rp(e,t,null,n)},at.createRoot=function(e,t){if(!Ea(e))throw Error(s(299));var n=!1,r="",l=_c;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,l),e[Wt]=t.current,qr(e.nodeType===8?e.parentNode:e),new Na(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ya(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return In(e)},at.hydrate=function(e,t,n){if(!Ti(t))throw Error(s(200));return zi(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",u=_c;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=kc(t,null,e,1,n??null,l,!1,i,u),e[Wt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Li(t)},at.render=function(e,t,n){if(!Ti(t))throw Error(s(200));return zi(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(s(40));return e._reactRootContainer?(In(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},at.unstable_batchedUpdates=ya,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ti(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return zi(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var Tc;function Kc(){if(Tc)return Ra.exports;Tc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Ra.exports=gp(),Ra.exports}var zc;function vp(){if(zc)return Oi;zc=1;var o=Kc();return Oi.createRoot=o.createRoot,Oi.hydrateRoot=o.hydrateRoot,Oi}var yp=vp();const xp=Jc(yp);Kc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},kl.apply(this,arguments)}var jn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(jn||(jn={}));const Mc="popstate";function wp(o){o===void 0&&(o={});function c(d,p){let{pathname:h,search:y,hash:b}=d.location;return Fa("",{pathname:h,search:y,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(d,p){return typeof p=="string"?p:Ui(p)}return jp(c,s,null,o)}function Te(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function Va(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function Oc(o,c){return{usr:o.state,key:o.key,idx:c}}function Fa(o,c,s,d){return s===void 0&&(s=null),kl({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof c=="string"?jr(c):c,{state:s,key:c&&c.key||d||kp()})}function Ui(o){let{pathname:c="/",search:s="",hash:d=""}=o;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function jr(o){let c={};if(o){let s=o.indexOf("#");s>=0&&(c.hash=o.substr(s),o=o.substr(0,s));let d=o.indexOf("?");d>=0&&(c.search=o.substr(d),o=o.substr(0,d)),o&&(c.pathname=o)}return c}function jp(o,c,s,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,y=p.history,b=jn.Pop,j=null,R=C();R==null&&(R=0,y.replaceState(kl({},y.state,{idx:R}),""));function C(){return(y.state||{idx:null}).idx}function S(){b=jn.Pop;let M=C(),oe=M==null?null:M-R;R=M,j&&j({action:b,location:A.location,delta:oe})}function D(M,oe){b=jn.Push;let ue=Fa(A.location,M,oe);R=C()+1;let ie=Oc(ue,R),K=A.createHref(ue);try{y.pushState(ie,"",K)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;p.location.assign(K)}h&&j&&j({action:b,location:A.location,delta:1})}function O(M,oe){b=jn.Replace;let ue=Fa(A.location,M,oe);R=C();let ie=Oc(ue,R),K=A.createHref(ue);y.replaceState(ie,"",K),h&&j&&j({action:b,location:A.location,delta:0})}function I(M){let oe=p.location.origin!=="null"?p.location.origin:p.location.href,ue=typeof M=="string"?M:Ui(M);return ue=ue.replace(/ $/,"%20"),Te(oe,"No window.location.(origin|href) available to create URL for href: "+ue),new URL(ue,oe)}let A={get action(){return b},get location(){return o(p,y)},listen(M){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(Mc,S),j=M,()=>{p.removeEventListener(Mc,S),j=null}},createHref(M){return c(p,M)},createURL:I,encodeLocation(M){let oe=I(M);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:D,replace:O,go(M){return y.go(M)}};return A}var Fc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Fc||(Fc={}));function _p(o,c,s){return s===void 0&&(s="/"),Sp(o,c,s)}function Sp(o,c,s,d){let p=typeof c=="string"?jr(c):c,h=Wa(p.pathname||"/",s);if(h==null)return null;let y=Gc(o);bp(y);let b=null;for(let j=0;b==null&&j<y.length;++j){let R=Dp(h);b=Mp(y[j],R)}return b}function Gc(o,c,s,d){c===void 0&&(c=[]),s===void 0&&(s=[]),d===void 0&&(d="");let p=(h,y,b)=>{let j={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};j.relativePath.startsWith("/")&&(Te(j.relativePath.startsWith(d),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(d.length));let R=_n([d,j.relativePath]),C=s.concat(j);h.children&&h.children.length>0&&(Te(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+R+'".')),Gc(h.children,c,C,R)),!(h.path==null&&!h.index)&&c.push({path:R,score:Tp(R,h.index),routesMeta:C})};return o.forEach((h,y)=>{var b;if(h.path===""||!((b=h.path)!=null&&b.includes("?")))p(h,y);else for(let j of Yc(h.path))p(h,y,j)}),c}function Yc(o){let c=o.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),h=s.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let y=Yc(d.join("/")),b=[];return b.push(...y.map(j=>j===""?h:[h,j].join("/"))),p&&b.push(...y),b.map(j=>o.startsWith("/")&&j===""?"/":j)}function bp(o){o.sort((c,s)=>c.score!==s.score?s.score-c.score:zp(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const Np=/^:[\w-]+$/,Ep=3,Cp=2,Pp=1,Rp=10,Lp=-2,Dc=o=>o==="*";function Tp(o,c){let s=o.split("/"),d=s.length;return s.some(Dc)&&(d+=Lp),c&&(d+=Cp),s.filter(p=>!Dc(p)).reduce((p,h)=>p+(Np.test(h)?Ep:h===""?Pp:Rp),d)}function zp(o,c){return o.length===c.length&&o.slice(0,-1).every((d,p)=>d===c[p])?o[o.length-1]-c[c.length-1]:0}function Mp(o,c,s){let{routesMeta:d}=o,p={},h="/",y=[];for(let b=0;b<d.length;++b){let j=d[b],R=b===d.length-1,C=h==="/"?c:c.slice(h.length)||"/",S=Op({path:j.relativePath,caseSensitive:j.caseSensitive,end:R},C),D=j.route;if(!S)return null;Object.assign(p,S.params),y.push({params:p,pathname:_n([h,S.pathname]),pathnameBase:$p(_n([h,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(h=_n([h,S.pathnameBase]))}return y}function Op(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,d]=Fp(o.path,o.caseSensitive,o.end),p=c.match(s);if(!p)return null;let h=p[0],y=h.replace(/(.)\/+$/,"$1"),b=p.slice(1);return{params:d.reduce((R,C,S)=>{let{paramName:D,isOptional:O}=C;if(D==="*"){let A=b[S]||"";y=h.slice(0,h.length-A.length).replace(/(.)\/+$/,"$1")}const I=b[S];return O&&!I?R[D]=void 0:R[D]=(I||"").replace(/%2F/g,"/"),R},{}),pathname:h,pathnameBase:y,pattern:o}}function Fp(o,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),Va(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,j)=>(d.push({paramName:b,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function Dp(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Va(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),o}}function Wa(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=o.charAt(s);return d&&d!=="/"?null:o.slice(s)||"/"}const Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ip=o=>Up.test(o);function Ap(o,c){c===void 0&&(c="/");let{pathname:s,search:d="",hash:p=""}=typeof o=="string"?jr(o):o,h;if(s)if(Ip(s))h=s;else{if(s.includes("//")){let y=s;s=s.replace(/\/\/+/g,"/"),Va(!1,"Pathnames cannot have embedded double slashes - normalizing "+(y+" -> "+s))}s.startsWith("/")?h=Uc(s.substring(1),"/"):h=Uc(s,c)}else h=c;return{pathname:h,search:Vp(d),hash:Wp(p)}}function Uc(o,c){let s=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function za(o,c,s,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(o){return o.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Ha(o,c){let s=Bp(o);return c?s.map((d,p)=>p===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function Qa(o,c,s,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=jr(o):(p=kl({},o),Te(!p.pathname||!p.pathname.includes("?"),za("?","pathname","search",p)),Te(!p.pathname||!p.pathname.includes("#"),za("#","pathname","hash",p)),Te(!p.search||!p.search.includes("#"),za("#","search","hash",p)));let h=o===""||p.pathname==="",y=h?"/":p.pathname,b;if(y==null)b=s;else{let S=c.length-1;if(!d&&y.startsWith("..")){let D=y.split("/");for(;D[0]==="..";)D.shift(),S-=1;p.pathname=D.join("/")}b=S>=0?c[S]:"/"}let j=Ap(p,b),R=y&&y!=="/"&&y.endsWith("/"),C=(h||y===".")&&s.endsWith("/");return!j.pathname.endsWith("/")&&(R||C)&&(j.pathname+="/"),j}const _n=o=>o.join("/").replace(/\/\/+/g,"/"),$p=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Wp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Hp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Xc=["post","put","patch","delete"];new Set(Xc);const Qp=["get",...Xc];new Set(Qp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},jl.apply(this,arguments)}const Ja=w.createContext(null),Jp=w.createContext(null),Sn=w.createContext(null),Wi=w.createContext(null),qt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),qc=w.createContext(null);function Kp(o,c){let{relative:s}=c===void 0?{}:c;_r()||Te(!1);let{basename:d,navigator:p}=w.useContext(Sn),{hash:h,pathname:y,search:b}=ed(o,{relative:s}),j=y;return d!=="/"&&(j=y==="/"?d:_n([d,y])),p.createHref({pathname:j,search:b,hash:h})}function _r(){return w.useContext(Wi)!=null}function Zt(){return _r()||Te(!1),w.useContext(Wi).location}function Zc(o){w.useContext(Sn).static||w.useLayoutEffect(o)}function bn(){let{isDataRoute:o}=w.useContext(qt);return o?sm():Gp()}function Gp(){_r()||Te(!1);let o=w.useContext(Ja),{basename:c,future:s,navigator:d}=w.useContext(Sn),{matches:p}=w.useContext(qt),{pathname:h}=Zt(),y=JSON.stringify(Ha(p,s.v7_relativeSplatPath)),b=w.useRef(!1);return Zc(()=>{b.current=!0}),w.useCallback(function(R,C){if(C===void 0&&(C={}),!b.current)return;if(typeof R=="number"){d.go(R);return}let S=Qa(R,JSON.parse(y),h,C.relative==="path");o==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:_n([c,S.pathname])),(C.replace?d.replace:d.push)(S,C.state,C)},[c,d,y,h,o])}function Yp(){let{matches:o}=w.useContext(qt),c=o[o.length-1];return c?c.params:{}}function ed(o,c){let{relative:s}=c===void 0?{}:c,{future:d}=w.useContext(Sn),{matches:p}=w.useContext(qt),{pathname:h}=Zt(),y=JSON.stringify(Ha(p,d.v7_relativeSplatPath));return w.useMemo(()=>Qa(o,JSON.parse(y),h,s==="path"),[o,y,h,s])}function Xp(o,c){return qp(o,c)}function qp(o,c,s,d){_r()||Te(!1);let{navigator:p}=w.useContext(Sn),{matches:h}=w.useContext(qt),y=h[h.length-1],b=y?y.params:{};y&&y.pathname;let j=y?y.pathnameBase:"/";y&&y.route;let R=Zt(),C;if(c){var S;let M=typeof c=="string"?jr(c):c;j==="/"||(S=M.pathname)!=null&&S.startsWith(j)||Te(!1),C=M}else C=R;let D=C.pathname||"/",O=D;if(j!=="/"){let M=j.replace(/^\//,"").split("/");O="/"+D.replace(/^\//,"").split("/").slice(M.length).join("/")}let I=_p(o,{pathname:O}),A=rm(I&&I.map(M=>Object.assign({},M,{params:Object.assign({},b,M.params),pathname:_n([j,p.encodeLocation?p.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?j:_n([j,p.encodeLocation?p.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),h,s,d);return c&&A?w.createElement(Wi.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:jn.Pop}},A):A}function Zp(){let o=am(),c=Hp(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},c),s?w.createElement("pre",{style:p},s):null,null)}const em=w.createElement(Zp,null);class tm extends w.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?w.createElement(qt.Provider,{value:this.props.routeContext},w.createElement(qc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nm(o){let{routeContext:c,match:s,children:d}=o,p=w.useContext(Ja);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(qt.Provider,{value:c},d)}function rm(o,c,s,d){var p;if(c===void 0&&(c=[]),s===void 0&&(s=null),d===void 0&&(d=null),o==null){var h;if(!s)return null;if(s.errors)o=s.matches;else if((h=d)!=null&&h.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let y=o,b=(p=s)==null?void 0:p.errors;if(b!=null){let C=y.findIndex(S=>S.route.id&&(b==null?void 0:b[S.route.id])!==void 0);C>=0||Te(!1),y=y.slice(0,Math.min(y.length,C+1))}let j=!1,R=-1;if(s&&d&&d.v7_partialHydration)for(let C=0;C<y.length;C++){let S=y[C];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(R=C),S.route.id){let{loaderData:D,errors:O}=s,I=S.route.loader&&D[S.route.id]===void 0&&(!O||O[S.route.id]===void 0);if(S.route.lazy||I){j=!0,R>=0?y=y.slice(0,R+1):y=[y[0]];break}}}return y.reduceRight((C,S,D)=>{let O,I=!1,A=null,M=null;s&&(O=b&&S.route.id?b[S.route.id]:void 0,A=S.route.errorElement||em,j&&(R<0&&D===0?(um("route-fallback"),I=!0,M=null):R===D&&(I=!0,M=S.route.hydrateFallbackElement||null)));let oe=c.concat(y.slice(0,D+1)),ue=()=>{let ie;return O?ie=A:I?ie=M:S.route.Component?ie=w.createElement(S.route.Component,null):S.route.element?ie=S.route.element:ie=C,w.createElement(nm,{match:S,routeContext:{outlet:C,matches:oe,isDataRoute:s!=null},children:ie})};return s&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?w.createElement(tm,{location:s.location,revalidation:s.revalidation,component:A,error:O,children:ue(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):ue()},null)}var td=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(td||{}),nd=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(nd||{});function lm(o){let c=w.useContext(Ja);return c||Te(!1),c}function im(o){let c=w.useContext(Jp);return c||Te(!1),c}function om(o){let c=w.useContext(qt);return c||Te(!1),c}function rd(o){let c=om(),s=c.matches[c.matches.length-1];return s.route.id||Te(!1),s.route.id}function am(){var o;let c=w.useContext(qc),s=im(),d=rd();return c!==void 0?c:(o=s.errors)==null?void 0:o[d]}function sm(){let{router:o}=lm(td.UseNavigateStable),c=rd(nd.UseNavigateStable),s=w.useRef(!1);return Zc(()=>{s.current=!0}),w.useCallback(function(p,h){h===void 0&&(h={}),s.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,jl({fromRouteId:c},h)))},[o,c])}const Ic={};function um(o,c,s){Ic[o]||(Ic[o]=!0)}function cm(o,c){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function ld(o){let{to:c,replace:s,state:d,relative:p}=o;_r()||Te(!1);let{future:h,static:y}=w.useContext(Sn),{matches:b}=w.useContext(qt),{pathname:j}=Zt(),R=bn(),C=Qa(c,Ha(b,h.v7_relativeSplatPath),j,p==="path"),S=JSON.stringify(C);return w.useEffect(()=>R(JSON.parse(S),{replace:s,state:d,relative:p}),[R,S,p,s,d]),null}function yl(o){Te(!1)}function dm(o){let{basename:c="/",children:s=null,location:d,navigationType:p=jn.Pop,navigator:h,static:y=!1,future:b}=o;_r()&&Te(!1);let j=c.replace(/^\/*/,"/"),R=w.useMemo(()=>({basename:j,navigator:h,static:y,future:jl({v7_relativeSplatPath:!1},b)}),[j,b,h,y]);typeof d=="string"&&(d=jr(d));let{pathname:C="/",search:S="",hash:D="",state:O=null,key:I="default"}=d,A=w.useMemo(()=>{let M=Wa(C,j);return M==null?null:{location:{pathname:M,search:S,hash:D,state:O,key:I},navigationType:p}},[j,C,S,D,O,I,p]);return A==null?null:w.createElement(Sn.Provider,{value:R},w.createElement(Wi.Provider,{children:s,value:A}))}function fm(o){let{children:c,location:s}=o;return Xp(Da(c),s)}new Promise(()=>{});function Da(o,c){c===void 0&&(c=[]);let s=[];return w.Children.forEach(o,(d,p)=>{if(!w.isValidElement(d))return;let h=[...c,p];if(d.type===w.Fragment){s.push.apply(s,Da(d.props.children,h));return}d.type!==yl&&Te(!1),!d.props.index||!d.props.children||Te(!1);let y={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=Da(d.props.children,h)),s.push(y)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},Ua.apply(this,arguments)}function pm(o,c){if(o==null)return{};var s={},d=Object.keys(o),p,h;for(h=0;h<d.length;h++)p=d[h],!(c.indexOf(p)>=0)&&(s[p]=o[p]);return s}function mm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function hm(o,c){return o.button===0&&(!c||c==="_self")&&!mm(o)}const gm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vm="6";try{window.__reactRouterVersion=vm}catch{}const ym="startTransition",Ac=pp[ym];function xm(o){let{basename:c,children:s,future:d,window:p}=o,h=w.useRef();h.current==null&&(h.current=wp({window:p,v5Compat:!0}));let y=h.current,[b,j]=w.useState({action:y.action,location:y.location}),{v7_startTransition:R}=d||{},C=w.useCallback(S=>{R&&Ac?Ac(()=>j(S)):j(S)},[j,R]);return w.useLayoutEffect(()=>y.listen(C),[y,C]),w.useEffect(()=>cm(d),[d]),w.createElement(dm,{basename:c,children:s,location:b.location,navigationType:b.action,navigator:y,future:d})}const wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=w.forwardRef(function(c,s){let{onClick:d,relative:p,reloadDocument:h,replace:y,state:b,target:j,to:R,preventScrollReset:C,viewTransition:S}=c,D=pm(c,gm),{basename:O}=w.useContext(Sn),I,A=!1;if(typeof R=="string"&&km.test(R)&&(I=R,wm))try{let ie=new URL(window.location.href),K=R.startsWith("//")?new URL(ie.protocol+R):new URL(R),q=Wa(K.pathname,O);K.origin===ie.origin&&q!=null?R=q+K.search+K.hash:A=!0}catch{}let M=Kp(R,{relative:p}),oe=_m(R,{replace:y,state:b,target:j,preventScrollReset:C,relative:p,viewTransition:S});function ue(ie){d&&d(ie),ie.defaultPrevented||oe(ie)}return w.createElement("a",Ua({},D,{href:I||M,onClick:A||h?d:ue,ref:s,target:j}))});var Bc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Bc||(Bc={}));var $c;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})($c||($c={}));function _m(o,c){let{target:s,replace:d,state:p,preventScrollReset:h,relative:y,viewTransition:b}=c===void 0?{}:c,j=bn(),R=Zt(),C=ed(o,{relative:y});return w.useCallback(S=>{if(hm(S,s)){S.preventDefault();let D=d!==void 0?d:Ui(R)===Ui(C);j(o,{replace:D,state:p,preventScrollReset:h,relative:y,viewTransition:b})}},[R,j,C,d,p,s,o,h,y,b])}const id=Vi.createContext(null),Ka=document.createElement("div");Ka.id="root";document.body.appendChild(Ka);const od=document.createElement("style");od.textContent=`
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
    display: grid;
    gap: 14px;
  }
  .project-card h4 {
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
`;document.head.appendChild(od);function st(...o){return o.filter(Boolean).join(" ")}function Sr(o){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o})}function Sm(o){return a.jsxs(Sr,{...o,children:[a.jsx("path",{d:"M12 5v14"}),a.jsx("path",{d:"M5 12h14"})]})}function ad(o){return a.jsx(Sr,{...o,children:a.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function sd(o){return a.jsxs(Sr,{...o,children:[a.jsx("path",{d:"m15 5 4 4"}),a.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function ud(o){return a.jsx(Sr,{...o,children:a.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function bm(o){return a.jsxs(Sr,{...o,children:[a.jsx("path",{d:"M19 12H5"}),a.jsx("path",{d:"m12 5-7 7 7 7"})]})}function Nm(o){return a.jsxs(Sr,{...o,children:[a.jsx("path",{d:"M12 4v10"}),a.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),a.jsx("path",{d:"M4 20h16"})]})}async function $e(o,c){const s=await fetch(o,{credentials:"include",headers:{"Content-Type":"application/json",...(c==null?void 0:c.headers)||{}},...c});if(s.status===204)return;const p=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const h=typeof p=="object"&&p!==null&&"detail"in p?String(p.detail):s.statusText;throw new Error(h||"Request failed.")}return p}function xl(o){if(!o)return"Not available";const c=new Date(o);return Number.isNaN(c.getTime())?o:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(c)}function yr(o){if(!Number.isFinite(o)||o<=0)return"0 B";const c=["B","KB","MB","GB","TB"];let s=o,d=0;for(;s>=1024&&d<c.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${c[d]}`}function cd(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1024**3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} GB`}function Em(o){return cd(o)}function Cm(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1e3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} CPU`}function Ia(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function Ii(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function Aa(o){return Ii(o)}function Vc(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1e3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Ba(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1024**3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Wc(o){return Ba(o)}function Ma(o){return!Number.isFinite(o)||!o||o<=0?"":o%1===0?o.toFixed(0):o.toFixed(1)}function Fi(o){return Number.isFinite(o)?`${Number(o).toFixed(1)}%`:"-"}function wl(o){if(!o)return"-";const c=new Date(o).getTime();if(Number.isNaN(c))return"-";const s=Date.now()-c;if(s<0)return"Just now";const d=6e4,p=60*d,h=24*p;return s<p?`${Math.max(1,Math.floor(s/d))}m ago`:s<h?`${Math.floor(s/p)}h ago`:`${Math.floor(s/h)}d ago`}function xr(o){return Number.isFinite(o)?Number(o)>80?"metric-danger":Number(o)>60?"metric-warning":"metric-ok":""}function Oa(o){return Number.isFinite(o)?{"--metric-percent":Math.max(0,Math.min(100,Number(o)))}:void 0}function Ai(o,c){return!Number.isFinite(o)||!Number.isFinite(c)||!c||c<=0?null:Number(o)/Number(c)*100}function Pm(o,c){if(!o)return"Not started";const s=new Date(o).getTime(),d=c?new Date(c).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const p=Math.floor((d-s)/1e3),h=Math.floor(p/3600),y=Math.floor(p%3600/60),b=p%60;return h>0?`${h}h ${y}m ${b}s`:y>0?`${y}m ${b}s`:`${b}s`}function Rm(o,c=200){return`/api/v1/jobs/${o}/log?lines=${c}`}function Lm(o){return`/api/v1/jobs/${o}/log?full=true`}function Tm(o){return o.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function zm(o){return`${[o.project_id||"controller",o.job_type,o.job_id].map(Tm).join("__")}.log`}function Mm(o){return`/api/v1/projects/${encodeURIComponent(o)}/lockfile`}function Om(o,c){return`/api/v1/projects/${encodeURIComponent(o)}/export?mode=${encodeURIComponent(c)}`}function Fm(o,c){return`bulletjournal_export_${o}_${c==="code_only"?"code":c==="code_and_data"?"code_and_data":"full"}.zip`}function Dm(o){const c=o.headers.get("content-disposition")||"",s=c.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=c.match(/filename="([^"]+)"/i);if(d)return d[1];const p=c.match(/filename=([^;]+)/i);return p?p[1].trim():null}function dd(o){return o.status==="running"&&o.runtime.container_port!==null}function Um(o){const c=$m(o);return c?c.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function Im(o){return o?o.slice(0,12):"Not running"}function Am(o){return o.status==="succeeded"?"state-succeeded":o.status==="running"||o.status==="queued"?"state-running":o.status==="failed"?"state-failed":""}function Bm(o){return o.status.split(/[_\s]+/).filter(Boolean).map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ")}function $m(o){return o.status==="error"&&o.status_reason||o.status==="stopped"&&o.status_reason?o.status_reason:o.status}function Vm(o){return o.has_active_job||o.status==="creating"||o.status==="installing"||o.status==="starting"||o.status==="stopping"||o.install_status==="installing"?"busy":o.status==="running"?"running":o.status==="error"||o.status_reason==="install_failed"||o.status_reason==="start_failed"||o.status_reason==="runtime_crashed"?"error":"stopped"}function fd(o){return`state-${Vm(o)}`}function pd(o){const c=typeof o.metrics.cpu_percent=="number"?o.metrics.cpu_percent:null,s=Ai(o.metrics.memory_used_bytes??null,o.metrics.memory_limit_bytes??null),d=Ai(o.metrics.disk_used_bytes??null,o.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:yr(o.metrics.disk_used_bytes??0),tone:xr(d)},{label:"RAM",value:typeof o.metrics.memory_used_bytes=="number"?yr(o.metrics.memory_used_bytes):"-",tone:xr(s)},{label:"CPU",value:Fi(c),tone:xr(o.limits.cpu_limit_millis?c:null)}]}function Wm({systemInfo:o}){var y,b,j,R;const c=xr(o==null?void 0:o.metrics.cpu_percent),s=Ai(((y=o==null?void 0:o.metrics.memory)==null?void 0:y.used_bytes)??null,((b=o==null?void 0:o.metrics.memory)==null?void 0:b.total_bytes)??null),d=Ai(((j=o==null?void 0:o.metrics.disk)==null?void 0:j.used_bytes)??null,((R=o==null?void 0:o.metrics.disk)==null?void 0:R.total_bytes)??null),p=o!=null&&o.metrics.disk?`${yr(o.metrics.disk.used_bytes)} / ${yr(o.metrics.disk.total_bytes)}`:"Not available",h=o!=null&&o.metrics.memory?`${yr(o.metrics.memory.used_bytes)} / ${yr(o.metrics.memory.total_bytes)}`:"Not available";return a.jsxs("div",{className:"footer-metrics",children:[a.jsxs("span",{className:st("footer-metric","has-tooltip",xr(d)),style:Oa(d),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"Disk"}),a.jsx("strong",{children:Fi(d)}),a.jsx("span",{className:"footer-metric-tooltip",children:p})]}),a.jsxs("span",{className:st("footer-metric","has-tooltip",xr(s)),style:Oa(s),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"RAM"}),a.jsx("strong",{children:Fi(s)}),a.jsx("span",{className:"footer-metric-tooltip",children:h})]}),a.jsxs("span",{className:st("footer-metric",c),style:Oa(o==null?void 0:o.metrics.cpu_percent),children:[a.jsx("span",{className:"muted",children:"CPU"}),a.jsx("strong",{children:Fi(o==null?void 0:o.metrics.cpu_percent)})]})]})}function md(o){return o.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:o.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:o.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:o.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:o.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function hd(o,c,s){return!c||c.jobId&&!s.includes(c.jobId)||c.action==="start"&&o.status!=="stopped"&&o.status!=="error"||c.action==="stop"&&o.status!=="running"?o:{...o,status:c.action==="start"?"starting":"stopping",status_reason:null}}function wr(o){return o.last_edit_at||o.created_at}function Hm(o,c){if(o.has_active_job!==c.has_active_job)return o.has_active_job?-1:1;const s=new Date(wr(o)).getTime(),d=new Date(wr(c)).getTime(),p=Number.isNaN(s)?0:s,h=Number.isNaN(d)?0:d;return p!==h?h-p:o.project_id.localeCompare(c.project_id)}function Bi(o){return o==="queued"||o==="running"}function kr(o){return o instanceof DOMException&&o.name==="AbortError"}function Vn(o){const c=w.useRef(o);return w.useEffect(()=>{c.current=o},[o]),c}function Qm(o,c){return o.length<=c?o:o.slice(o.length-c)}function Jm({job:o,downloading:c,onDownload:s}){const[d,p]=w.useState(""),[h,y]=w.useState(0),b=Vn(o),j=w.useRef(null),R=160,C=Bi(o.status)?[o.job_id]:[],S=w.useCallback(async O=>{try{const A=await(await fetch(Rm(b.current.job_id,R),{credentials:"include",signal:O})).text();p(A.trim())}catch(I){kr(I)||p("")}},[b]);if(w.useEffect(()=>{const O=new AbortController;return S(O.signal),()=>O.abort()},[o.job_id,S]),Ga(C,w.useCallback((O,I)=>{if(O.job_id===o.job_id){if((I==null?void 0:I.type)==="job.log"){const A=typeof I.line=="string"?I.line:"";if(!A)return;p(M=>Qm([...M?M.split(`
`):[],A],R).join(`
`));return}if(!Bi(O.status)){const A=new AbortController;S(A.signal)}}},[o.job_id,S])),w.useEffect(()=>{const O=j.current;if(!O)return;const I=()=>{const M=O.scrollHeight>O.clientHeight+1?Math.max(0,O.offsetWidth-O.clientWidth):0;y(oe=>oe===M?oe:M)};if(I(),typeof ResizeObserver>"u")return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I);const A=new ResizeObserver(()=>{I()});return A.observe(O),()=>{A.disconnect()}},[d]),!d)return null;const D={"--job-log-scrollbar-width":`${h}px`};return a.jsxs("div",{className:"job-log-preview",style:D,children:[s?a.jsx("button",{className:"job-log-download",type:"button","aria-label":c?"Downloading log":"Download log",title:c?"Downloading log":"Download full log",disabled:!!c,onClick:()=>{s(o)},children:a.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 2.5v7"}),a.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),a.jsx("path",{d:"M3 13.5h10"})]})}):null,a.jsx("div",{className:"job-log-frame",children:a.jsx("pre",{ref:j,children:d})})]})}function Wn(){const o=Vi.useContext(id);if(!o)throw new Error("App context is unavailable.");return o}function gd(o,c,s,d){const p=w.useRef(o);w.useEffect(()=>{p.current=o},[o]),w.useEffect(()=>{if(c===null)return;let h=!1,y=null,b=null,j=!1,R=!1;const C=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??c:c,S=I=>{h||I===null||I===void 0||(y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{y=null,D()},I))},D=async()=>{if(!(h||j)){j=!0,b=new AbortController;try{await p.current(b.signal),h||S(C())}catch(I){if(!h&&!kr(I)){const A=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??c:(d==null?void 0:d.errorDelay)??c;S(A)}}finally{j=!1,b=null,!h&&R&&!document.hidden&&(R=!1,S(0))}}},O=()=>{if(!document.hidden){if(j){R=!0;return}S(0)}};return document.addEventListener("visibilitychange",O),D(),()=>{h=!0,y!==null&&window.clearTimeout(y),document.removeEventListener("visibilitychange",O),b==null||b.abort()}},s)}function Ga(o,c){const s=w.useRef(c),d=w.useMemo(()=>Array.from(new Set(o)).sort().join("\0"),[o]);w.useEffect(()=>{s.current=c},[c]),w.useEffect(()=>{if(!d)return;const p=d.split("\0"),h=new Set(p),y=new AbortController;let b=!1;const j=new EventSource("/api/v1/events/jobs"),R=async()=>{const D=await Promise.allSettled(p.map(O=>$e(`/api/v1/jobs/${O}`,{signal:y.signal})));if(!b)for(const O of D)O.status==="fulfilled"&&s.current(O.value)},C=D=>{const O=D;try{const I=JSON.parse(O.data);if(!h.has(I.job_id))return;s.current({job_id:I.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:I.line})}catch{}},S=D=>{const O=D;try{const I=JSON.parse(O.data);h.has(I.job_id)&&s.current(I,{type:"job.updated"})}catch{}};return R(),j.addEventListener("job.log",C),j.addEventListener("job.updated",S),()=>{b=!0,y.abort(),j.removeEventListener("job.log",C),j.removeEventListener("job.updated",S),j.close()}},[d])}function Km({children:o}){const[c,s]=w.useState(null),[d,p]=w.useState(!0),[h,y]=w.useState(()=>{const C=window.localStorage.getItem("bulletjournal-controller-theme");return C==="light"||C==="dark"||C==="system"?C:"system"}),b=w.useCallback(async()=>{try{const C=await $e("/api/v1/session/current",{method:"GET"});s(C)}catch{s({authenticated:!1,user:null})}finally{p(!1)}},[]),j=w.useCallback(async()=>{await $e("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);w.useEffect(()=>{b()},[b]),w.useEffect(()=>{const C=document.documentElement,S=window.matchMedia("(prefers-color-scheme: dark)");function D(){const O=h==="system"?S.matches?"dark":"light":h;C.dataset.theme=O,C.style.colorScheme=O}return D(),window.localStorage.setItem("bulletjournal-controller-theme",h),S.addEventListener("change",D),()=>S.removeEventListener("change",D)},[h]);const R=w.useMemo(()=>({session:c,sessionLoading:d,refreshSession:b,signOut:j,themeMode:h,setThemeMode:y}),[b,c,d,j,h]);return a.jsx(id.Provider,{value:R,children:o})}function Hc({children:o}){const{session:c,sessionLoading:s}=Wn(),d=Zt();return s?a.jsx("div",{className:"loading-screen",children:a.jsxs("div",{className:"loading-card",children:[a.jsx("h2",{children:"Preparing your controller workspace"}),a.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):c!=null&&c.authenticated?a.jsx(a.Fragment,{children:o}):a.jsx(ld,{to:"/login",replace:!0,state:{from:d.pathname}})}function Gm(){const{session:o,refreshSession:c}=Wn(),s=bn(),d=Zt(),[p,h]=w.useState(""),[y,b]=w.useState(""),[j,R]=w.useState(null),[C,S]=w.useState(!1);w.useEffect(()=>{o!=null&&o.authenticated&&s("/",{replace:!0})},[s,o]);async function D(O){O.preventDefault(),S(!0),R(null);try{await $e("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:p,password:y})}),await c();const I=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(I||"/",{replace:!0})}catch(I){R(I instanceof Error?I.message:"Login failed.")}finally{S(!1)}}return a.jsx("div",{className:"login-shell",children:a.jsxs("section",{className:"login-panel",children:[a.jsx("h1",{children:"BulletJournal login"}),a.jsx("hr",{className:"login-divider"}),a.jsxs("form",{className:"layout-grid",onSubmit:D,children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsx("input",{id:"username",value:p,onChange:O=>h(O.target.value),autoComplete:"username",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx("input",{id:"password",type:"password",value:y,onChange:O=>b(O.target.value),autoComplete:"current-password",required:!0})]}),j?a.jsx("div",{className:"error-banner",children:j}):null,a.jsx("div",{className:"button-row",children:a.jsx("button",{className:"button",type:"submit",disabled:C,children:C?"Signing in...":"Login"})})]})]})})}function Ym(){const{session:o,signOut:c,themeMode:s,setThemeMode:d}=Wn();bn();const[p,h]=w.useState(!1);return w.useEffect(()=>{if(!p)return;function y(){h(!1)}return window.addEventListener("click",y),()=>window.removeEventListener("click",y)},[p]),a.jsxs("div",{className:"footer-theme",children:[a.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":p,onClick:y=>{y.stopPropagation(),h(b=>!b)},children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[a.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),a.jsx("path",{d:"M7.5 10.5h.01"}),a.jsx("path",{d:"M9.5 7.5h.01"}),a.jsx("path",{d:"M14.5 7.5h.01"}),a.jsx("path",{d:"M16.5 10.5h.01"})]})}),p?a.jsx("div",{className:"theme-popover",role:"menu",onClick:y=>y.stopPropagation(),children:["light","dark","system"].map(y=>a.jsx("button",{className:st("theme-option",s===y&&"active"),type:"button",role:"menuitemradio","aria-checked":s===y,onClick:()=>{d(y),h(!1)},children:y==="light"?"Light":y==="dark"?"Dark":"System"},y))}):null]})}function Di({children:o,footerMetrics:c=null}){var h,y,b,j;const{session:s,signOut:d}=Wn(),p=bn();return a.jsxs("div",{className:"app-shell",children:[o,a.jsxs("footer",{className:"app-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsxs("div",{className:"footer-session",children:[a.jsx("span",{className:"muted",children:"Signed in as"}),a.jsx("strong",{children:((h=s==null?void 0:s.user)==null?void 0:h.display_name)||((y=s==null?void 0:s.user)==null?void 0:y.username)||"Unknown user"}),a.jsxs("span",{className:"muted",children:["(",((b=s==null?void 0:s.user)==null?void 0:b.username)||"unknown",")"]}),(j=s==null?void 0:s.user)!=null&&j.is_server_admin?a.jsx("span",{className:"badge neutral",children:"Admin"}):null]}),a.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),p("/login",{replace:!0})},children:"Logout"})]}),a.jsxs("div",{className:"footer-right",children:[c,a.jsx(Ym,{})]})]})]})}function Xm(){const[o,c]=w.useState([]),[s,d]=w.useState(null),[p,h]=w.useState(!0),[y,b]=w.useState(null),[j,R]=w.useState(null),[C,S]=w.useState([]),[D,O]=w.useState({}),[I,A]=w.useState({}),[M,oe]=w.useState([]),[ue,ie]=w.useState(!1),K=bn(),q=Zt(),{session:xe}=Wn(),Pe=Vn(I),we=w.useCallback(async V=>{try{const[ne,Y]=await Promise.all([$e("/api/v1/projects",{signal:V}),$e("/api/v1/system/info",{signal:V})]);c(ne),d(Y),oe(X=>X.filter(re=>ne.some(U=>U.project_id===re))),b(null)}catch(ne){kr(ne)||b(ne instanceof Error?ne.message:"Failed to load dashboard.")}finally{h(!1)}},[]);gd(V=>we(V),C.length>0?5e3:15e3,[C.length,we],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{if(!q.state||typeof q.state!="object")return;const V=q.state,ne=typeof V.archivedProjectId=="string"?V.archivedProjectId:null,Y=typeof V.archiveJobId=="string"?V.archiveJobId:null,X=typeof V.deletedProjectId=="string"?V.deletedProjectId:null,re=typeof V.deleteJobId=="string"?V.deleteJobId:null,U=ne||X,H=Y||re,B=Y?"archive":re?"delete":null;!U||!H||!B||(oe(v=>Array.from(new Set([...v,U]))),A(v=>({...v,[H]:{projectId:U,verb:B}})),S(v=>Array.from(new Set([...v,H]))),we(),K(q.pathname,{replace:!0,state:null}))},[we,q.pathname,q.state,K]);const ut=w.useCallback(V=>{if(Bi(V.status)){S(Y=>Y.includes(V.job_id)?Y:[...Y,V.job_id]);return}S(Y=>Y.filter(X=>X!==V.job_id));const ne=Pe.current[V.job_id];ne&&(A(Y=>{const X={...Y};return delete X[V.job_id],X}),V.status!=="succeeded"&&(oe(Y=>Y.filter(X=>X!==ne.projectId)),R(V.error_message||`Failed to ${ne.verb} project ${ne.projectId}.`))),we()},[we]);Ga(C,ut),w.useEffect(()=>{O(V=>{const ne=Object.entries(V).filter(([,Y])=>!Y.jobId||C.includes(Y.jobId));return ne.length===Object.keys(V).length?V:Object.fromEntries(ne)})},[C]);const Ve=w.useMemo(()=>o.filter(V=>!M.includes(V.project_id)).map(V=>hd(V,D[V.project_id]||null,C)).sort(Hm),[C,M,D,o]),gt=w.useMemo(()=>{const V={Running:[],Stopped:[],Error:[]};for(const ne of Ve)ne.status==="running"||ne.status==="starting"||ne.status==="stopping"?V.Running.push(ne):ne.status==="error"?V.Error.push(ne):V.Stopped.push(ne);return V},[Ve]);async function Je(V,ne){O(Y=>({...Y,[V]:{action:ne}}));try{R(null);const Y=await $e(`/api/v1/projects/${V}/${ne}`,{method:"POST"});Y.job?(O(X=>({...X,[V]:{action:ne,jobId:Y.job.job_id}})),S(X=>Array.from(new Set([...X,Y.job.job_id])))):O(X=>{const re={...X};return delete re[V],re}),Y.already_running&&(O(X=>{const re={...X};return delete re[V],re}),R("Project is already running.")),Y.already_stopped&&(O(X=>{const re={...X};return delete re[V],re}),R("Project is already stopped.")),await we()}catch(Y){O(X=>{const re={...X};return delete re[V],re}),R(Y instanceof Error?Y.message:`Failed to ${ne} project.`)}}return a.jsxs(Di,{footerMetrics:a.jsx(Wm,{systemInfo:s}),children:[y?a.jsx("div",{className:"error-banner",children:y}):null,j?a.jsx("div",{className:"error-banner",children:j}):null,a.jsx("div",{className:"dashboard-grid",children:a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"BulletJournal projects"}),C.length>0?a.jsxs("span",{className:"muted",children:["Watching ",C.length," active job",C.length===1?"":"s"]}):null]}),a.jsxs("button",{className:"button",type:"button",onClick:()=>ie(!0),disabled:!(xe!=null&&xe.user),children:[a.jsx(Sm,{width:22,height:22}),a.jsx("span",{children:"New project"})]})]})}),a.jsxs("div",{className:"panel-body",children:[p?a.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,a.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(V=>{const ne=gt[V];return a.jsxs("section",{children:[a.jsxs("div",{className:"group-header",children:[a.jsxs("div",{className:"group-header-title",children:[a.jsx("h3",{children:V}),a.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),a.jsxs("span",{className:"muted",children:[ne.length," project",ne.length===1?"":"s"]})]}),ne.length===0?a.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):a.jsx("div",{className:"project-cards",children:ne.map(Y=>{const X=md(Y),re=pd(Y),U=X.label==="Start"||X.label==="Stop"||X.label==="Starting..."||X.label==="Stopping...";return a.jsxs("article",{className:st("project-card",fd(Y)),children:[a.jsx("div",{className:"project-card-header",children:a.jsxs("div",{className:"project-card-top",children:[a.jsx("h4",{children:Y.project_id}),a.jsx("hr",{className:"project-card-divider"})]})}),a.jsxs("div",{className:"meta-grid",children:[a.jsx("div",{className:"metrics-row",children:re.map(H=>a.jsxs("div",{className:st("meta-item","metric-chip",H.tone),children:[a.jsx("span",{children:H.label}),a.jsx("strong",{children:H.value})]},H.label))}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:wl(wr(Y))}),a.jsx("span",{className:"muted",children:xl(wr(Y))})]})]})]}),a.jsxs("div",{className:"quick-actions",children:[dd(Y)?a.jsx("a",{className:"button-open icon-action",href:`/p/${Y.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(sd,{width:18,height:18})}):null,a.jsx("button",{className:st(X.className,U&&"icon-action"),type:"button",disabled:X.disabled,"aria-label":X.label,title:X.label,onClick:()=>{X.action&&Je(Y.project_id,X.action)},children:U?a.jsxs(a.Fragment,{children:[X.action==="start"||X.label==="Starting..."?a.jsx(ad,{width:18,height:18}):null,X.action==="stop"||X.label==="Stopping..."?a.jsx(ud,{width:18,height:18}):null]}):X.label}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>K(`/projects/${Y.project_id}`),children:a.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},Y.project_id)})})]},V)})})]})]})}),ue&&s?a.jsx(qm,{systemInfo:s,onClose:()=>ie(!1)}):null]})}function qm({systemInfo:o,onClose:c}){var ie;const s=bn(),{session:d}=Wn(),p=o.gpu_supported,[h,y]=w.useState({project_id:"",custom_requirements_text:o.default_dependencies_text,cpu_limit_input:Ma(o.default_cpu_limit_cpus),memory_limit_input:Ma(o.default_memory_limit_gb),disk_soft_limit_input:Ma(o.default_disk_soft_limit_gb),gpu_enabled:p}),[b,j]=w.useState(!1),[R,C]=w.useState(null),[S,D]=w.useState(!1),[O,I]=w.useState([]),[A,M]=w.useState({project_admins:{all_users:!1,user_ids:d!=null&&d.user?[d.user.user_id]:[]},editors:{all_users:!0,user_ids:[]}});w.useEffect(()=>{const K=new AbortController;return $e("/api/v1/users/assignable",{signal:K.signal}).then(I).catch(q=>{kr(q)||C(q instanceof Error?q.message:"Failed to load assignable users.")}),()=>K.abort()},[(ie=d==null?void 0:d.user)==null?void 0:ie.user_id]);function oe(K,q){M(xe=>{const Pe=xe[K].user_ids.includes(q)?xe[K].user_ids.filter(we=>we!==q):[...xe[K].user_ids,q];return{...xe,[K]:{...xe[K],user_ids:Pe}}})}async function ue(K){K.preventDefault(),j(!0),C(null);try{const q=await $e("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:h.project_id,custom_requirements_text:h.custom_requirements_text,cpu_limit_millis:Ia(h.cpu_limit_input),memory_limit_bytes:Ii(h.memory_limit_input),disk_soft_limit_bytes:Aa(h.disk_soft_limit_input),gpu_enabled:h.gpu_enabled,project_admins:$i(A.project_admins),editors:$i(A.editors)})});s(`/projects/${q.project.project_id}`,{state:{createdProjectId:q.project.project_id,createJobId:q.job.job_id}})}catch(q){C(q instanceof Error?q.message:"Failed to create project.")}finally{j(!1)}}return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{b||c()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:K=>K.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("div",{children:a.jsx("h2",{children:"New BulletJournal project"})}),a.jsx("button",{className:"close-button",type:"button",onClick:c,"aria-label":"Close dialog",disabled:b,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("form",{className:"layout-grid",onSubmit:ue,children:[a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),a.jsx("input",{id:"create-project-id",value:h.project_id,onChange:K=>y(q=>({...q,project_id:K.target.value})),placeholder:"study-a",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),a.jsx("textarea",{id:"create-dependencies",value:h.custom_requirements_text,onChange:K=>y(q=>({...q,custom_requirements_text:K.target.value}))})]}),a.jsxs("div",{className:"field-full collapsible-panel",children:[a.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>D(K=>!K),children:[a.jsxs("span",{className:"status-stack",children:[a.jsx("strong",{children:"Runtime limits"}),a.jsxs("span",{className:"muted",children:["CPU ",Cm(Ia(h.cpu_limit_input))," · Memory ",cd(Ii(h.memory_limit_input))," · Disk ",Em(Aa(h.disk_soft_limit_input))," · GPU ",h.gpu_enabled?"On":"Off"]})]}),a.jsx("span",{children:S?"Hide":"Edit"})]}),S?a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:h.cpu_limit_input,onChange:K=>y(q=>({...q,cpu_limit_input:K.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:h.memory_limit_input,onChange:K=>y(q=>({...q,memory_limit_input:K.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:h.disk_soft_limit_input,onChange:K=>y(q=>({...q,disk_soft_limit_input:K.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:st("checkbox-row",!p&&"is-disabled"),children:[a.jsx("input",{id:"create-gpu",type:"checkbox",checked:h.gpu_enabled,onChange:K=>y(q=>({...q,gpu_enabled:K.target.checked})),disabled:!p}),a.jsxs("label",{htmlFor:"create-gpu",children:[a.jsx("span",{children:"Enable GPU"}),p?null:a.jsx("span",{className:"info-bubble","aria-label":"GPU not enabled on this instance","data-tooltip":"GPU not enabled on this instance",tabIndex:0,children:"i"})]})]})]})]}):null]}),a.jsx(vd,{roles:A,users:O,onChange:M,onToggleUser:oe,disabled:b})]}),R?a.jsx("div",{className:"error-banner",children:R}):null,a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button",type:"submit",disabled:b,children:b?"Queueing...":"Create Project"}),a.jsx("button",{className:"button-secondary",type:"button",onClick:c,disabled:b,children:"Cancel"})]})]})})]})})}function vd({roles:o,users:c,onChange:s,onToggleUser:d,disabled:p}){const[h,y]=w.useState(null),b=[{key:"project_admins",label:"Project admins"},{key:"editors",label:"Editors"}];return a.jsxs("div",{className:"field-full layout-grid",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Project access"}),a.jsx("p",{className:"section-copy",children:"Choose who can administer or edit this project."})]}),b.map(({key:j,label:R})=>a.jsxs("div",{className:"limits-card",children:[a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("strong",{children:R}),a.jsx("div",{className:"muted",children:Zm(o[j],c)})]}),a.jsx("button",{className:"button-secondary",type:"button",disabled:p,onClick:()=>y(C=>C===j?null:j),children:"Edit"})]}),h===j?a.jsxs("div",{className:"action-popover role-picker-popover",children:[a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${j}-all-users`,type:"checkbox",checked:o[j].all_users,disabled:p,onChange:C=>s(S=>({...S,[j]:{...S[j],all_users:C.target.checked}}))}),a.jsx("label",{htmlFor:`${j}-all-users`,children:"All users"})]}),o[j].all_users?null:c.map(C=>a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${j}-${C.user_id}`,type:"checkbox",checked:o[j].user_ids.includes(C.user_id),disabled:p,onChange:()=>d(j,C.user_id)}),a.jsxs("label",{htmlFor:`${j}-${C.user_id}`,children:[C.display_name||C.username," ",a.jsxs("span",{className:"muted",children:["(",C.username,")"]})]})]},C.user_id))]}):null]},j))]})}function $i(o){return{all_users:o.all_users,user_ids:o.all_users?[]:o.user_ids}}function Zm(o,c){if(o.all_users)return"All users";const s=o.user_ids.map(d=>c.find(p=>p.user_id===d)).filter(d=>!!d).map(d=>d.username);return s.length>0?s.join(", "):"No users selected"}function vl(o){return{project_admins:{all_users:o.project_admins.all_users,user_ids:o.project_admins.users.map(c=>c.user_id)},editors:{all_users:o.editors.all_users,user_ids:o.editors.users.map(c=>c.user_id)}}}function Qc(o){return o.all_users?"All users":o.users.length>0?o.users.map(c=>c.username).join(", "):"No users selected"}function eh({kind:o,projectId:c,submitting:s,typedProjectId:d,setTypedProjectId:p,onClose:h,onConfirm:y}){const b=o==="archive",j=b?"Archive project?":"Delete project?",R=b?"This project will be moved to the archive directory and will be removed from active projects. Archived projects can only be restored via a manual operation.":"This project will be permanently removed and cannot be restored.",C=b?"Archive project":"Delete project",S=b?"button-warning":"button-danger",D=s||d!==c;return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{s||h()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"archive-project-title",onClick:O=>O.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsxs("div",{children:[a.jsx("h2",{id:"archive-project-title",children:j}),a.jsx("p",{className:"section-copy",children:R})]}),a.jsx("button",{className:"close-button",type:"button",onClick:h,"aria-label":"Close dialog",disabled:s,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("div",{className:"layout-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsxs("label",{htmlFor:"project-removal-confirmation",children:["Type the project ID ",a.jsx("span",{className:"inline-project-id",children:c})," to proceed"]}),a.jsx("input",{id:"project-removal-confirmation",value:d,onChange:O=>p(O.target.value),autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,disabled:s})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:S,type:"button",onClick:y,disabled:D,children:s?`${C.split(" ")[0]}ing...`:C}),a.jsx("button",{className:"button-secondary",type:"button",onClick:h,disabled:s,children:"Cancel"})]})]})})]})})}function th(){const{projectId:c=""}=Yp(),s=bn(),d=Zt(),{session:p}=Wn(),h=w.useRef(null),[y,b]=w.useState(null),[j,R]=w.useState(!0),[C,S]=w.useState(null),[D,O]=w.useState([]),[I,A]=w.useState(null),[M,oe]=w.useState({custom_requirements_text:"",mark_all_artifacts_stale:!0,restart_if_running:!0}),[ue,ie]=w.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[K,q]=w.useState(!1),[xe,Pe]=w.useState(!1),[we,ut]=w.useState(!1),[Ve,gt]=w.useState(!1),[Je,V]=w.useState(!1),[ne,Y]=w.useState(""),[X,re]=w.useState(null),[U,H]=w.useState(!1),[B,v]=w.useState(!1),[P,ae]=w.useState(null),[ce,fe]=w.useState([]),[pe,ve]=w.useState(!1),[me,ke]=w.useState(!1),[We,Mt]=w.useState(!1),[ct,en]=w.useState(null),[tt,br]=w.useState(null),[_l,Nr]=w.useState([]),[tn,St]=w.useState(null),[Ot,Bt]=w.useState(!1),[Hn,Qn]=w.useState(!1),$t=!!y&&M.custom_requirements_text!==y.custom_requirements_text,Er=Vn(c),Cr=Vn($t),Jn=Vn(me),bt=Vn(Je),Pr=Vn(We),Nt=w.useCallback(async N=>{try{const E=await $e(`/api/v1/projects/${Er.current}`,{signal:N});if(bt.current)return;b(E),St(te=>te??vl(E.roles)),!Cr.current&&!Jn.current&&oe(te=>({custom_requirements_text:E.custom_requirements_text,mark_all_artifacts_stale:te.mark_all_artifacts_stale,restart_if_running:te.restart_if_running})),Pr.current||ie({cpu_limit_input:Vc(E.limits.cpu_limit_millis),memory_limit_input:Ba(E.limits.memory_limit_bytes),disk_soft_limit_input:Wc(E.limits.disk_soft_limit_bytes),gpu_enabled:E.limits.gpu_enabled}),S(null)}catch(E){!kr(E)&&!bt.current&&S(E instanceof Error?E.message:"Failed to load project.")}finally{bt.current||R(!1)}},[Cr,Jn,bt,Pr,Er]);gd(N=>Nt(N),$t||me||We||Je?null:D.length>0?5e3:15e3,[D.length,$t,me,Nt,Je,We],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{ve(!1)},[c]),w.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const N=d.state,E=typeof N.createdProjectId=="string"?N.createdProjectId:null,te=typeof N.createJobId=="string"?N.createJobId:null;E!==c||!te||(O(ze=>Array.from(new Set([...ze,te]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,c]),w.useEffect(()=>{!(I!=null&&I.jobId)||D.includes(I.jobId)||A(null)},[D,I]),w.useEffect(()=>{if((ct==null?void 0:ct.tone)!=="success")return;const N=window.setTimeout(()=>{en(E=>(E==null?void 0:E.tone)==="success"?null:E)},3500);return()=>window.clearTimeout(N)},[ct]),w.useEffect(()=>{if((tt==null?void 0:tt.tone)!=="success")return;const N=window.setTimeout(()=>{br(E=>(E==null?void 0:E.tone)==="success"?null:E)},3500);return()=>window.clearTimeout(N)},[tt]),w.useEffect(()=>{if(!B)return;function N(E){var te;(te=h.current)!=null&&te.contains(E.target)||v(!1)}return window.addEventListener("click",N),()=>window.removeEventListener("click",N)},[B]);const Nn=w.useCallback(N=>{if(Bi(N.status)){O(E=>E.includes(N.job_id)?E:[...E,N.job_id]);return}O(E=>E.filter(te=>te!==N.job_id)),ke(!1),!bt.current&&Nt()},[Nt,bt]);Ga(D,Nn),w.useEffect(()=>{if((y==null?void 0:y.effective_role)!=="project_admin")return;const N=new AbortController;return Promise.all([$e("/api/v1/users/assignable",{signal:N.signal}),$e(`/api/v1/projects/${c}/roles`,{signal:N.signal})]).then(([E,te])=>{Nr(E),St(ze=>ze??vl(te))}).catch(E=>{kr(E)||S(E instanceof Error?E.message:"Failed to load assignable users.")}),()=>N.abort()},[y==null?void 0:y.effective_role,c]);async function Hi(N){A({action:N});try{const E=await $e(`/api/v1/projects/${c}/${N}`,{method:"POST"});E.job?(A({action:N,jobId:E.job.job_id}),O(te=>Array.from(new Set([...te,E.job.job_id])))):E.already_running?(A(null),S("Project is already running.")):E.already_stopped?(A(null),S("Project is already stopped.")):A(null),await Nt()}catch(E){A(null),S(E instanceof Error?E.message:`Failed to ${N}.`)}}async function Sl(N){N.preventDefault(),q(!0),S(null);const E=$t;try{const te=await $e(`/api/v1/projects/${c}/${E?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(E?M:{restart_if_running:M.restart_if_running,mark_all_artifacts_stale:M.mark_all_artifacts_stale})});if(!te.job)throw new Error("Environment action did not return a queued job.");const ze=te.job;O(qe=>Array.from(new Set([...qe,ze.job_id]))),E&&ke(!0),en({tone:"success",message:"Saved"})}catch(te){en(null),S(te instanceof Error?te.message:"Failed to queue environment action.")}finally{q(!1)}}async function bl(N){N.preventDefault(),Pe(!0),S(null);try{const E=await $e(`/api/v1/projects/${c}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:Ia(ue.cpu_limit_input),memory_limit_bytes:Ii(ue.memory_limit_input),disk_soft_limit_bytes:Aa(ue.disk_soft_limit_input),gpu_enabled:ue.gpu_enabled})});b(E),ie({cpu_limit_input:Vc(E.limits.cpu_limit_millis),memory_limit_input:Ba(E.limits.memory_limit_bytes),disk_soft_limit_input:Wc(E.limits.disk_soft_limit_bytes),gpu_enabled:E.limits.gpu_enabled}),Mt(!1),br({tone:"success",message:"Saved"})}catch(E){S(E instanceof Error?E.message:"Failed to update limits.")}finally{Pe(!1)}}async function Qi(N){if(N.preventDefault(),!!tn){Bt(!0),S(null);try{const E=await $e(`/api/v1/projects/${c}/roles`,{method:"PUT",body:JSON.stringify({project_admins:$i(tn.project_admins),editors:$i(tn.editors)})});St(vl(E)),b(te=>te&&{...te,roles:E}),Qn(!1)}catch(E){S(E instanceof Error?E.message:"Failed to update project access.")}finally{Bt(!1)}}}async function Rr(){V(!0),ut(!0);try{const N=await $e(`/api/v1/projects/${c}`,{method:"DELETE"});N.job&&O(E=>E.filter(te=>te!==N.job.job_id)),H(!1),re(null),Y(""),s("/",{replace:!0,state:N.job?{deletedProjectId:c,deleteJobId:N.job.job_id}:null})}catch(N){V(!1),S(N instanceof Error?N.message:"Failed to delete project.")}finally{ut(!1)}}async function Lr(){V(!0),gt(!0),S(null);try{const N=await $e(`/api/v1/projects/${c}/archive`,{method:"POST"});N.job&&O(E=>E.filter(te=>te!==N.job.job_id)),H(!1),re(null),Y(""),s("/",{replace:!0,state:N.job?{archivedProjectId:c,archiveJobId:N.job.job_id}:null})}catch(N){V(!1),S(N instanceof Error?N.message:"Failed to archive project.")}finally{gt(!1)}}async function Tr(N){fe(E=>E.includes(N.job_id)?E:[...E,N.job_id]);try{const E=await fetch(Lm(N.job_id),{credentials:"include"});if(!E.ok)throw new Error(`Failed to download log (${E.status}).`);const te=await E.text(),ze=new Blob([te],{type:"text/plain;charset=utf-8"}),qe=window.URL.createObjectURL(ze),Oe=document.createElement("a");Oe.href=qe,Oe.download=zm(N),document.body.appendChild(Oe),Oe.click(),Oe.remove(),window.URL.revokeObjectURL(qe)}catch(E){S(E instanceof Error?E.message:"Failed to download job log.")}finally{fe(E=>E.filter(te=>te!==N.job_id))}}async function zr(){S(null);try{const N=await fetch(Mm(c),{credentials:"include"});if(!N.ok){const Oe=(N.headers.get("content-type")||"").includes("application/json")?await N.json():await N.text(),Vt=typeof Oe=="object"&&Oe!==null&&"detail"in Oe?String(Oe.detail):N.statusText;throw new Error(Vt||"Failed to download lockfile.")}const E=await N.blob(),te=window.URL.createObjectURL(E),ze=document.createElement("a");ze.href=te,ze.download=`${c}__uv.lock`,document.body.appendChild(ze),ze.click(),ze.remove(),window.URL.revokeObjectURL(te)}catch(N){S(N instanceof Error?N.message:"Failed to download lockfile.")}}async function En(N){S(null),ae(N);try{const E=await fetch(Om(c,N),{credentials:"include"});if(!E.ok){const Vt=(E.headers.get("content-type")||"").includes("application/json")?await E.json():await E.text(),Pl=typeof Vt=="object"&&Vt!==null&&"detail"in Vt?String(Vt.detail):E.statusText;throw new Error(Pl||"Failed to export project.")}const te=await E.blob(),ze=window.URL.createObjectURL(te),qe=document.createElement("a");qe.href=ze,qe.download=Dm(E)||Fm(c,N),document.body.appendChild(qe),qe.click(),qe.remove(),window.URL.revokeObjectURL(ze),v(!1)}catch(E){S(E instanceof Error?E.message:"Failed to export project.")}finally{ae(null)}}if(j)return a.jsx(Di,{children:a.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!y)return a.jsx(Di,{children:a.jsx("div",{className:"error-banner",children:C||"Project was not found."})});const se=hd(y,I,D),vt=se.effective_role==="project_admin",Ue=md(se),Nl=$t?"Save and reinstall":"Reinstall environment",El=$t?"Saving and reinstalling...":"Queueing reinstall...",Cl=pd(se),Mr=Ue.label==="Start"||Ue.label==="Stop"||Ue.label==="Starting..."||Ue.label==="Stopping...",Or=se.status==="running"||se.status==="starting"?"Started at":"Stopped at",Kn=se.status==="running"||se.status==="starting"?se.runtime.runtime_started_at:se.runtime.runtime_stopped_at,dt=se.status==="running"||se.status==="starting"||se.status==="stopping",Fr=(ct==null?void 0:ct.tone)==="success"?"Saved":K?El:Nl,Cn=(tt==null?void 0:tt.tone)==="success"?"Saved":xe?"Saving...":"Save limits",Pn=se.recent_jobs||[],Rn=pe?Pn:Pn.slice(0,5),Gn=Pn.length>5&&!pe;return a.jsxs(Di,{children:[a.jsx("div",{className:"topbar",children:a.jsxs("div",{className:"nav-pills",children:[a.jsx(jm,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:a.jsx(bm,{width:18,height:18})}),D.length>0?a.jsxs("span",{className:"badge",children:["Watching ",D.length," active job",D.length===1?"":"s"]}):null]})}),C?a.jsx("div",{className:"error-banner",children:C}):null,a.jsxs("div",{className:"project-detail-stack",children:[a.jsxs("section",{className:st("project-detail-card",fd(se)),children:[a.jsxs("div",{className:"project-detail-header",children:[a.jsx("div",{className:"project-detail-title",children:a.jsx("h2",{children:se.project_id})}),a.jsx("div",{className:"project-detail-status",children:a.jsx("strong",{children:Um(se)})})]}),a.jsxs("div",{className:"quick-actions",children:[dd(se)?a.jsx("a",{className:"button-open icon-action",href:`/p/${se.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(sd,{width:18,height:18})}):null,a.jsx("button",{className:st(Ue.className,Mr&&"icon-action"),type:"button",disabled:Ue.disabled,"aria-label":Ue.label,title:Ue.label,onClick:()=>{Ue.action&&Hi(Ue.action)},children:Mr?a.jsxs(a.Fragment,{children:[Ue.action==="start"||Ue.label==="Starting..."?a.jsx(ad,{width:18,height:18}):null,Ue.action==="stop"||Ue.label==="Stopping..."?a.jsx(ud,{width:18,height:18}):null]}):Ue.label})]}),a.jsx("div",{className:"metrics-row",children:Cl.map(N=>a.jsxs("div",{className:st("meta-item","metric-chip",N.tone),children:[a.jsx("span",{children:N.label}),a.jsx("strong",{children:N.value})]},N.label))}),a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:wl(wr(se))}),a.jsx("span",{className:"muted",children:xl(wr(se))})]})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last run"}),se.last_run_finished_at?a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:wl(se.last_run_finished_at)}),a.jsx("span",{className:"muted",children:xl(se.last_run_finished_at)})]}):a.jsx("strong",{children:"-"})]})]})]}),vt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project environment"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("form",{className:"project-env-grid",onSubmit:Sl,children:[a.jsx("div",{className:"environment-overview-card",children:a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("span",{className:"detail-label",children:"Python version"}),a.jsx("div",{className:"detail-value mono-copy",children:se.python_version})]}),a.jsx("div",{className:"summary-block compact",children:a.jsxs("div",{className:"lockfile-row compact",children:[a.jsxs("div",{className:"lockfile-meta",children:[a.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),a.jsx("code",{className:"mono-copy detail-value",children:se.lock_sha256||"Not recorded yet"})]}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{zr()},children:a.jsx(Nm,{width:18,height:18})})]})})]})}),a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),a.jsx("textarea",{id:"env-custom",value:M.custom_requirements_text,onChange:N=>{oe(E=>({...E,custom_requirements_text:N.target.value}))}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Restart behavior"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-restart",type:"checkbox",checked:M.restart_if_running,onChange:N=>{oe(E=>({...E,restart_if_running:N.target.checked}))}}),a.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Artifact invalidation"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:M.mark_all_artifacts_stale,onChange:N=>{oe(E=>({...E,mark_all_artifacts_stale:N.target.checked}))}}),a.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),a.jsx("div",{className:"button-row",children:a.jsx("button",{className:st((ct==null?void 0:ct.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:K,children:Fr})})]})})]}):null,vt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Container info"})}),a.jsxs("div",{className:"panel-body layout-grid",children:[a.jsxs("div",{className:"detail-meta-grid",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container name"}),a.jsx("div",{className:"detail-value mono-copy",children:se.runtime.container_name||"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container id"}),a.jsx("div",{className:"detail-value mono-copy",children:Im(se.runtime.container_id)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Host port"}),a.jsx("div",{className:"detail-value mono-copy",children:se.runtime.container_port??"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:Or}),Kn?a.jsxs("div",{className:"timestamp-pair",children:[a.jsx("strong",{children:wl(Kn)}),a.jsx("span",{className:"muted",children:xl(Kn)})]}):a.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),a.jsxs("div",{className:"limits-card",children:[a.jsx("div",{className:"limits-card-header",children:a.jsx("div",{className:"status-stack",children:a.jsx("strong",{children:"Runtime limits"})})}),a.jsxs("form",{className:"field-grid",onSubmit:bl,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.cpu_limit_input,onChange:N=>{Mt(!0),ie(E=>({...E,cpu_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:dt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.memory_limit_input,onChange:N=>{Mt(!0),ie(E=>({...E,memory_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:dt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.disk_soft_limit_input,onChange:N=>{Mt(!0),ie(E=>({...E,disk_soft_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:dt})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"limits-gpu",type:"checkbox",checked:ue.gpu_enabled,onChange:N=>{Mt(!0),ie(E=>({...E,gpu_enabled:N.target.checked}))},disabled:dt}),a.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU if supported on the host"})]})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:st(dt?"button-neutral":(tt==null?void 0:tt.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:xe||dt,children:Cn}),dt?a.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}):null,a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsx("h2",{children:"Project access"}),vt&&!Hn?a.jsx("button",{className:"button-secondary",type:"button",onClick:()=>{St(vl(se.roles)),Qn(!0)},children:"Edit"}):null]})}),a.jsx("div",{className:"panel-body",children:vt&&Hn&&tn?a.jsxs("form",{className:"layout-grid",onSubmit:Qi,children:[a.jsx(vd,{roles:tn,users:_l,onChange:N=>St(E=>E&&(typeof N=="function"?N(E):N)),onToggleUser:(N,E)=>St(te=>{if(!te)return te;const ze=te[N].user_ids.includes(E)?te[N].user_ids.filter(qe=>qe!==E):[...te[N].user_ids,E];return{...te,[N]:{...te[N],user_ids:ze}}}),disabled:Ot}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button-open",type:"submit",disabled:Ot,children:Ot?"Saving...":"Save access"}),a.jsx("button",{className:"button-secondary",type:"button",disabled:Ot,onClick:()=>{St(vl(se.roles)),Qn(!1)},children:"Cancel"})]})]}):a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Your access"}),a.jsx("strong",{children:se.effective_role==="project_admin"?"Project admin":"Editor"})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Project admins"}),a.jsx("strong",{children:Qc(se.roles.project_admins)})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Editors"}),a.jsx("strong",{children:Qc(se.roles.editors)})]})]})})]}),a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Job history"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"jobs-list",children:[Pn.length===0?a.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,Rn.map(N=>a.jsxs("article",{className:st("job-row",Am(N)),children:[a.jsxs("div",{className:"job-row-header",children:[a.jsxs("div",{className:"job-row-top",children:[a.jsx("strong",{children:N.job_type}),a.jsx("span",{className:"muted mono-copy",children:N.job_id})]}),a.jsx("strong",{children:Bm(N)})]}),a.jsxs("div",{className:"job-row-meta",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Created"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:wl(N.created_at)}),a.jsx("span",{className:"muted",children:xl(N.created_at)})]})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Duration"}),a.jsx("strong",{children:Pm(N.started_at||N.created_at,N.finished_at)})]})]}),N.job_type==="create_project"||N.job_type==="update_environment"||N.job_type==="reinstall_environment"?a.jsx(Jm,{job:N,downloading:ce.includes(N.job_id),onDownload:N.log_path?Tr:void 0}):null,N.error_message?a.jsx("div",{className:"error-banner",children:N.error_message}):null]},N.job_id)),Gn?a.jsx("div",{className:"button-row centered jobs-list-footer",children:a.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>ve(!0),children:["Show more jobs (",Pn.length," total)"]})}):null]})})]}),vt?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project actions"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"button-row project-actions-row",children:[a.jsxs("div",{className:"action-menu",ref:h,children:[a.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":B,disabled:!!P,onClick:N=>{N.stopPropagation(),v(E=>!E)},children:P?"Exporting...":"Export project"}),B?a.jsxs("div",{className:"action-popover",role:"menu",onClick:N=>N.stopPropagation(),children:[a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:P!==null,onClick:()=>{En("code_only")},children:a.jsx("strong",{children:"Code only"})}),a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:P!==null,onClick:()=>{En("code_and_data")},children:a.jsx("strong",{children:"Code and data"})}),a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:P!==null,onClick:()=>{En("full")},children:a.jsx("strong",{children:"Full"})})]}):null]}),a.jsx("button",{className:"button-warning",type:"button",onClick:()=>{re("archive"),Y(""),H(!0)},disabled:Ve||we,children:Ve?"Archiving...":"Archive project"}),a.jsx("button",{className:"button-danger",type:"button",onClick:()=>{re("delete"),Y(""),H(!0)},disabled:we||Ve,children:we?"Deleting...":"Delete project"})]})})]}):null]}),U&&X?a.jsx(eh,{kind:X,projectId:c,submitting:X==="archive"?Ve:we,typedProjectId:ne,setTypedProjectId:Y,onClose:()=>{H(!1),re(null),Y("")},onConfirm:()=>{if(X==="archive"){Lr();return}Rr()}}):null]})}function nh(){return a.jsxs(fm,{children:[a.jsx(yl,{path:"/login",element:a.jsx(Gm,{})}),a.jsx(yl,{path:"/projects/:projectId",element:a.jsx(Hc,{children:a.jsx(th,{})})}),a.jsx(yl,{path:"/",element:a.jsx(Hc,{children:a.jsx(Xm,{})})}),a.jsx(yl,{path:"*",element:a.jsx(ld,{to:"/",replace:!0})})]})}function rh(){return a.jsx(xm,{children:a.jsx(Km,{children:a.jsx(nh,{})})})}xp.createRoot(Ka).render(a.jsx(Vi.StrictMode,{children:a.jsx(rh,{})}));
