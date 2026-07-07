function rp(o,c){for(var s=0;s<c.length;s++){const d=c[s];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const g=Object.getOwnPropertyDescriptor(d,p);g&&Object.defineProperty(o,p,g.get?g:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function s(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(p){if(p.ep)return;p.ep=!0;const g=s(p);fetch(p.href,g)}})();function Uc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xa={exports:{}},il={},wa={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function lp(){if(vc)return ie;vc=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),b=Symbol.iterator;function T(v){return v===null||typeof v!="object"?null:(v=b&&v[b]||v["@@iterator"],typeof v=="function"?v:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function U(v,P,ne){this.props=v,this.context=P,this.refs=A,this.updater=ne||C}U.prototype.isReactComponent={},U.prototype.setState=function(v,P){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,P,"setState")},U.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function te(){}te.prototype=U.prototype;function ue(v,P,ne){this.props=v,this.context=P,this.refs=A,this.updater=ne||C}var oe=ue.prototype=new te;oe.constructor=ue,I(oe,U.prototype),oe.isPureReactComponent=!0;var pe=Array.isArray,we=Object.prototype.hasOwnProperty,Te={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function Be(v,P,ne){var re,se={},ce=null,ve=null;if(P!=null)for(re in P.ref!==void 0&&(ve=P.ref),P.key!==void 0&&(ce=""+P.key),P)we.call(P,re)&&!ke.hasOwnProperty(re)&&(se[re]=P[re]);var de=arguments.length-2;if(de===1)se.children=ne;else if(1<de){for(var fe=Array(de),Ae=0;Ae<de;Ae++)fe[Ae]=arguments[Ae+2];se.children=fe}if(v&&v.defaultProps)for(re in de=v.defaultProps,de)se[re]===void 0&&(se[re]=de[re]);return{$$typeof:o,type:v,key:ce,ref:ve,props:se,_owner:Te.current}}function He(v,P){return{$$typeof:o,type:v.type,key:P,ref:v.ref,props:v.props,_owner:v._owner}}function Ze(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function wt(v){var P={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ne){return P[ne]})}var W=/\/+/g;function Y(v,P){return typeof v=="object"&&v!==null&&v.key!=null?wt(""+v.key):P.toString(36)}function K(v,P,ne,re,se){var ce=typeof v;(ce==="undefined"||ce==="boolean")&&(v=null);var ve=!1;if(v===null)ve=!0;else switch(ce){case"string":case"number":ve=!0;break;case"object":switch(v.$$typeof){case o:case c:ve=!0}}if(ve)return ve=v,se=se(ve),v=re===""?"."+Y(ve,0):re,pe(se)?(ne="",v!=null&&(ne=v.replace(W,"$&/")+"/"),K(se,P,ne,"",function(Ae){return Ae})):se!=null&&(Ze(se)&&(se=He(se,ne+(!se.key||ve&&ve.key===se.key?"":(""+se.key).replace(W,"$&/")+"/")+v)),P.push(se)),1;if(ve=0,re=re===""?".":re+":",pe(v))for(var de=0;de<v.length;de++){ce=v[de];var fe=re+Y(ce,de);ve+=K(ce,P,ne,fe,se)}else if(fe=T(v),typeof fe=="function")for(v=fe.call(v),de=0;!(ce=v.next()).done;)ce=ce.value,fe=re+Y(ce,de++),ve+=K(ce,P,ne,fe,se);else if(ce==="object")throw P=String(v),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ve}function Z(v,P,ne){if(v==null)return v;var re=[],se=0;return K(v,re,"","",function(ce){return P.call(ne,ce,se++)}),re}function le(v){if(v._status===-1){var P=v._result;P=P(),P.then(function(ne){(v._status===0||v._status===-1)&&(v._status=1,v._result=ne)},function(ne){(v._status===0||v._status===-1)&&(v._status=2,v._result=ne)}),v._status===-1&&(v._status=0,v._result=P)}if(v._status===1)return v._result.default;throw v._result}var ae={current:null},D={transition:null},G={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:D,ReactCurrentOwner:Te};function B(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Z,forEach:function(v,P,ne){Z(v,function(){P.apply(this,arguments)},ne)},count:function(v){var P=0;return Z(v,function(){P++}),P},toArray:function(v){return Z(v,function(P){return P})||[]},only:function(v){if(!Ze(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ie.Component=U,ie.Fragment=s,ie.Profiler=p,ie.PureComponent=ue,ie.StrictMode=d,ie.Suspense=_,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ie.act=B,ie.cloneElement=function(v,P,ne){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var re=I({},v.props),se=v.key,ce=v.ref,ve=v._owner;if(P!=null){if(P.ref!==void 0&&(ce=P.ref,ve=Te.current),P.key!==void 0&&(se=""+P.key),v.type&&v.type.defaultProps)var de=v.type.defaultProps;for(fe in P)we.call(P,fe)&&!ke.hasOwnProperty(fe)&&(re[fe]=P[fe]===void 0&&de!==void 0?de[fe]:P[fe])}var fe=arguments.length-2;if(fe===1)re.children=ne;else if(1<fe){de=Array(fe);for(var Ae=0;Ae<fe;Ae++)de[Ae]=arguments[Ae+2];re.children=de}return{$$typeof:o,type:v.type,key:se,ref:ce,props:re,_owner:ve}},ie.createContext=function(v){return v={$$typeof:x,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},ie.createElement=Be,ie.createFactory=function(v){var P=Be.bind(null,v);return P.type=v,P},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:S,render:v}},ie.isValidElement=Ze,ie.lazy=function(v){return{$$typeof:N,_payload:{_status:-1,_result:v},_init:le}},ie.memo=function(v,P){return{$$typeof:R,type:v,compare:P===void 0?null:P}},ie.startTransition=function(v){var P=D.transition;D.transition={};try{v()}finally{D.transition=P}},ie.unstable_act=B,ie.useCallback=function(v,P){return ae.current.useCallback(v,P)},ie.useContext=function(v){return ae.current.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v){return ae.current.useDeferredValue(v)},ie.useEffect=function(v,P){return ae.current.useEffect(v,P)},ie.useId=function(){return ae.current.useId()},ie.useImperativeHandle=function(v,P,ne){return ae.current.useImperativeHandle(v,P,ne)},ie.useInsertionEffect=function(v,P){return ae.current.useInsertionEffect(v,P)},ie.useLayoutEffect=function(v,P){return ae.current.useLayoutEffect(v,P)},ie.useMemo=function(v,P){return ae.current.useMemo(v,P)},ie.useReducer=function(v,P,ne){return ae.current.useReducer(v,P,ne)},ie.useRef=function(v){return ae.current.useRef(v)},ie.useState=function(v){return ae.current.useState(v)},ie.useSyncExternalStore=function(v,P,ne){return ae.current.useSyncExternalStore(v,P,ne)},ie.useTransition=function(){return ae.current.useTransition()},ie.version="18.3.1",ie}var yc;function Ta(){return yc||(yc=1,wa.exports=lp()),wa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function ip(){if(xc)return il;xc=1;var o=Ta(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function x(S,_,R){var N,b={},T=null,C=null;R!==void 0&&(T=""+R),_.key!==void 0&&(T=""+_.key),_.ref!==void 0&&(C=_.ref);for(N in _)d.call(_,N)&&!g.hasOwnProperty(N)&&(b[N]=_[N]);if(S&&S.defaultProps)for(N in _=S.defaultProps,_)b[N]===void 0&&(b[N]=_[N]);return{$$typeof:c,type:S,key:T,ref:C,props:b,_owner:p.current}}return il.Fragment=s,il.jsx=x,il.jsxs=x,il}var wc;function op(){return wc||(wc=1,xa.exports=ip()),xa.exports}var u=op(),k=Ta();const Ri=Uc(k),ap=rp({__proto__:null,default:Ri},[k]);var Si={},ka={exports:{}},at={},ja={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function sp(){return kc||(kc=1,(function(o){function c(D,G){var B=D.length;D.push(G);e:for(;0<B;){var v=B-1>>>1,P=D[v];if(0<p(P,G))D[v]=G,D[B]=P,B=v;else break e}}function s(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var G=D[0],B=D.pop();if(B!==G){D[0]=B;e:for(var v=0,P=D.length,ne=P>>>1;v<ne;){var re=2*(v+1)-1,se=D[re],ce=re+1,ve=D[ce];if(0>p(se,B))ce<P&&0>p(ve,se)?(D[v]=ve,D[ce]=B,v=ce):(D[v]=se,D[re]=B,v=re);else if(ce<P&&0>p(ve,B))D[v]=ve,D[ce]=B,v=ce;else break e}}return G}function p(D,G){var B=D.sortIndex-G.sortIndex;return B!==0?B:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var x=Date,S=x.now();o.unstable_now=function(){return x.now()-S}}var _=[],R=[],N=1,b=null,T=3,C=!1,I=!1,A=!1,U=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(D){for(var G=s(R);G!==null;){if(G.callback===null)d(R);else if(G.startTime<=D)d(R),G.sortIndex=G.expirationTime,c(_,G);else break;G=s(R)}}function pe(D){if(A=!1,oe(D),!I)if(s(_)!==null)I=!0,le(we);else{var G=s(R);G!==null&&ae(pe,G.startTime-D)}}function we(D,G){I=!1,A&&(A=!1,te(Be),Be=-1),C=!0;var B=T;try{for(oe(G),b=s(_);b!==null&&(!(b.expirationTime>G)||D&&!wt());){var v=b.callback;if(typeof v=="function"){b.callback=null,T=b.priorityLevel;var P=v(b.expirationTime<=G);G=o.unstable_now(),typeof P=="function"?b.callback=P:b===s(_)&&d(_),oe(G)}else d(_);b=s(_)}if(b!==null)var ne=!0;else{var re=s(R);re!==null&&ae(pe,re.startTime-G),ne=!1}return ne}finally{b=null,T=B,C=!1}}var Te=!1,ke=null,Be=-1,He=5,Ze=-1;function wt(){return!(o.unstable_now()-Ze<He)}function W(){if(ke!==null){var D=o.unstable_now();Ze=D;var G=!0;try{G=ke(!0,D)}finally{G?Y():(Te=!1,ke=null)}}else Te=!1}var Y;if(typeof ue=="function")Y=function(){ue(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=W,Y=function(){Z.postMessage(null)}}else Y=function(){U(W,0)};function le(D){ke=D,Te||(Te=!0,Y())}function ae(D,G){Be=U(function(){D(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){I||C||(I=!0,le(we))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_getFirstCallbackNode=function(){return s(_)},o.unstable_next=function(D){switch(T){case 1:case 2:case 3:var G=3;break;default:G=T}var B=T;T=G;try{return D()}finally{T=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=T;T=D;try{return G()}finally{T=B}},o.unstable_scheduleCallback=function(D,G,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,D){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=B+P,D={id:N++,callback:G,priorityLevel:D,startTime:B,expirationTime:P,sortIndex:-1},B>v?(D.sortIndex=B,c(R,D),s(_)===null&&D===s(R)&&(A?(te(Be),Be=-1):A=!0,ae(pe,B-v))):(D.sortIndex=P,c(_,D),I||C||(I=!0,le(we))),D},o.unstable_shouldYield=wt,o.unstable_wrapCallback=function(D){var G=T;return function(){var B=T;T=G;try{return D.apply(this,arguments)}finally{T=B}}}})(_a)),_a}var jc;function up(){return jc||(jc=1,ja.exports=sp()),ja.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function cp(){if(_c)return at;_c=1;var o=Ta(),c=up();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function g(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},b={};function T(e){return _.call(b,e)?!0:_.call(N,e)?!1:R.test(e)?b[e]=!0:(N[e]=!0,!1)}function C(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||C(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,ue);U[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,ue);U[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,ue);U[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,n,r){var l=U.hasOwnProperty(t)?U[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,l,r)&&(n=null),r||l===null?T(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pe=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),Te=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Ze=Symbol.for("react.provider"),wt=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function P(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var ne=!1;function re(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var r=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){r=j}e.call(t.prototype)}else{try{throw Error()}catch(j){r=j}e()}}catch(j){if(j&&r&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,f=i.length-1;1<=a&&0<=f&&l[a]!==i[f];)f--;for(;1<=a&&0<=f;a--,f--)if(l[a]!==i[f]){if(a!==1||f!==1)do if(a--,f--,0>f||l[a]!==i[f]){var m=`
`+l[a].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=a&&0<=f);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function se(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case Te:return"Portal";case He:return"Profiler";case Be:return"StrictMode";case Y:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wt:return(e.displayName||"Context")+".Consumer";case Ze:return(e._context.displayName||"Context")+".Provider";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ye(e){e._valueTracker||(e._valueTracker=Ae(e))}function pr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dn(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mr(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hr(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function Un(e,t){hr(e,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gr(e,t.type,n):t.hasOwnProperty("defaultValue")&&gr(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gr(e,t,n){(t!=="number"||kt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function vr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(wn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function fl(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var me,Fe=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Oi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function yr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function hl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=yr(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var xr=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jt(e,t){if(t){if(xr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function wr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kr=null;function Ft(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jr=null,Gt=null,E=null;function z(e){if(e=Vr(e)){if(typeof jr!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Il(t),jr(e.stateNode,e.type,t))}}function ye(e){Gt?E?E.push(e):E=[e]:Gt=e}function $e(){if(Gt){var e=Gt,t=E;if(E=Gt=null,z(e),t)for(e=0;e<t.length;e++)z(t[e])}}function et(e,t){return e(t)}function tt(){}var Lt=!1;function gl(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return et(e,t,n)}finally{Lt=!1,(Gt!==null||E!==null)&&(tt(),$e())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Fi=!1;if(S)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{Fi=!1}function sd(e,t,n,r,l,i,a,f,m){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(M){this.onError(M)}}var br=!1,vl=null,yl=!1,Di=null,ud={onError:function(e){br=!0,vl=e}};function cd(e,t,n,r,l,i,a,f,m){br=!1,vl=null,sd.apply(ud,arguments)}function dd(e,t,n,r,l,i,a,f,m){if(cd.apply(this,arguments),br){if(br){var j=vl;br=!1,vl=null}else throw Error(s(198));yl||(yl=!0,Di=j)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(Sn(e)!==e)throw Error(s(188))}function fd(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Aa(l),e;if(i===r)return Aa(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,f=l.child;f;){if(f===n){a=!0,n=l,r=i;break}if(f===r){a=!0,r=l,n=i;break}f=f.sibling}if(!a){for(f=i.child;f;){if(f===n){a=!0,n=i,r=l;break}if(f===r){a=!0,r=i,n=l;break}f=f.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function $a(e){return e=fd(e),e!==null?Wa(e):null}function Wa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wa(e);if(t!==null)return t;e=e.sibling}return null}var Va=c.unstable_scheduleCallback,Ha=c.unstable_cancelCallback,pd=c.unstable_shouldYield,md=c.unstable_requestPaint,Pe=c.unstable_now,hd=c.unstable_getCurrentPriorityLevel,Ui=c.unstable_ImmediatePriority,Qa=c.unstable_UserBlockingPriority,xl=c.unstable_NormalPriority,gd=c.unstable_LowPriority,Ja=c.unstable_IdlePriority,wl=null,Rt=null;function vd(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:wd,yd=Math.log,xd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(yd(e)/xd|0)|0}var kl=64,jl=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var f=a&~l;f!==0?r=Nr(f):(i&=a,i!==0&&(r=Nr(i)))}else a=n&~l,a!==0?r=Nr(a):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),l=1<<n,r|=e[n],t&=~l;return r}function kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-_t(i),f=1<<a,m=l[a];m===-1?((f&n)===0||(f&r)!==0)&&(l[a]=kd(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ka(){var e=kl;return kl<<=1,(kl&4194240)===0&&(kl=64),e}function Bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function _d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_t(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ai(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var xe=0;function Ga(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ya,$i,Xa,qa,Za,Wi=!1,Sl=[],Yt=null,Xt=null,qt=null,Cr=new Map,Pr=new Map,Zt=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function Lr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Vr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bd(e,t,n,r,l){switch(t){case"focusin":return Yt=Lr(Yt,e,t,n,r,l),!0;case"dragenter":return Xt=Lr(Xt,e,t,n,r,l),!0;case"mouseover":return qt=Lr(qt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Cr.set(i,Lr(Cr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Pr.set(i,Lr(Pr.get(i)||null,e,t,n,r,l)),!0}return!1}function ts(e){var t=bn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ba(n),t!==null){e.blockedOn=t,Za(e.priority,function(){Xa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kr=r,n.target.dispatchEvent(r),kr=null}else return t=Vr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){bl(e)&&n.delete(t)}function Nd(){Wi=!1,Yt!==null&&bl(Yt)&&(Yt=null),Xt!==null&&bl(Xt)&&(Xt=null),qt!==null&&bl(qt)&&(qt=null),Cr.forEach(ns),Pr.forEach(ns)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Nd)))}function Tr(e){function t(l){return Rr(l,e)}if(0<Sl.length){Rr(Sl[0],e);for(var n=1;n<Sl.length;n++){var r=Sl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&Rr(Yt,e),Xt!==null&&Rr(Xt,e),qt!==null&&Rr(qt,e),Cr.forEach(t),Pr.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)ts(n),n.blockedOn===null&&Zt.shift()}var In=pe.ReactCurrentBatchConfig,Nl=!0;function Ed(e,t,n,r){var l=xe,i=In.transition;In.transition=null;try{xe=1,Vi(e,t,n,r)}finally{xe=l,In.transition=i}}function Cd(e,t,n,r){var l=xe,i=In.transition;In.transition=null;try{xe=4,Vi(e,t,n,r)}finally{xe=l,In.transition=i}}function Vi(e,t,n,r){if(Nl){var l=Hi(e,t,n,r);if(l===null)so(e,t,r,El,n),es(e,r);else if(bd(l,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<Sd.indexOf(e)){for(;l!==null;){var i=Vr(l);if(i!==null&&Ya(i),i=Hi(e,t,n,r),i===null&&so(e,t,r,El,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var El=null;function Hi(e,t,n,r){if(El=null,e=Ft(r),e=bn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case Ui:return 1;case Qa:return 4;case xl:case gd:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var en=null,Qi=null,Cl=null;function ls(){if(Cl)return Cl;var e,t=Qi,n=t.length,r,l="value"in en?en.value:en.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Cl=l.slice(e,1<r?1-r:void 0)}function Pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function is(){return!1}function ut(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ll:is,this.isPropagationStopped=is,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=ut(Bn),zr=B({},Bn,{view:0,detail:0}),Pd=ut(zr),Ki,Gi,Mr,Rl=B({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Ki=e.screenX-Mr.screenX,Gi=e.screenY-Mr.screenY):Gi=Ki=0,Mr=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),os=ut(Rl),Ld=B({},Rl,{dataTransfer:0}),Rd=ut(Ld),Td=B({},zr,{relatedTarget:0}),Yi=ut(Td),zd=B({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=ut(zd),Od=B({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=ut(Od),Dd=B({},Bn,{data:0}),as=ut(Dd),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bd[e])?!!t[e]:!1}function Xi(){return Ad}var $d=B({},zr,{key:function(e){if(e.key){var t=Ud[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=ut($d),Vd=B({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=ut(Vd),Hd=B({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),Qd=ut(Hd),Jd=B({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=ut(Jd),Gd=B({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=ut(Gd),Xd=[9,13,27,32],qi=S&&"CompositionEvent"in window,Or=null;S&&"documentMode"in document&&(Or=document.documentMode);var qd=S&&"TextEvent"in window&&!Or,us=S&&(!qi||Or&&8<Or&&11>=Or),cs=" ",ds=!1;function fs(e,t){switch(e){case"keyup":return Xd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Zd(e,t){switch(e){case"compositionend":return ps(t);case"keypress":return t.which!==32?null:(ds=!0,cs);case"textInput":return e=t.data,e===cs&&ds?null:e;default:return null}}function ef(e,t){if(An)return e==="compositionend"||!qi&&fs(e,t)?(e=ls(),Cl=Qi=en=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tf[e.type]:t==="textarea"}function hs(e,t,n,r){ye(r),t=Fl(t,"onChange"),0<t.length&&(n=new Ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Dr=null;function nf(e){zs(e,0)}function Tl(e){var t=Qn(e);if(pr(t))return e}function rf(e,t){if(e==="change")return t}var gs=!1;if(S){var Zi;if(S){var eo="oninput"in document;if(!eo){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),eo=typeof vs.oninput=="function"}Zi=eo}else Zi=!1;gs=Zi&&(!document.documentMode||9<document.documentMode)}function ys(){Fr&&(Fr.detachEvent("onpropertychange",xs),Dr=Fr=null)}function xs(e){if(e.propertyName==="value"&&Tl(Dr)){var t=[];hs(t,Dr,e,Ft(e)),gl(nf,t)}}function lf(e,t,n){e==="focusin"?(ys(),Fr=t,Dr=n,Fr.attachEvent("onpropertychange",xs)):e==="focusout"&&ys()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(Dr)}function af(e,t){if(e==="click")return Tl(t)}function sf(e,t){if(e==="input"||e==="change")return Tl(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:uf;function Ur(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!_.call(t,l)||!St(e[l],t[l]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ws(n)}}function js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _s(){for(var e=window,t=kt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kt(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cf(e){var t=_s(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&js(n.ownerDocument.documentElement,n)){if(r!==null&&to(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ks(n,i);var a=ks(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=S&&"documentMode"in document&&11>=document.documentMode,$n=null,no=null,Ir=null,ro=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ro||$n==null||$n!==kt(r)||(r=$n,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Ur(Ir,r)||(Ir=r,r=Fl(no,"onSelect"),0<r.length&&(t=new Ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function zl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},lo={},bs={};S&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function Ml(e){if(lo[e])return lo[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bs)return lo[e]=t[n];return e}var Ns=Ml("animationend"),Es=Ml("animationiteration"),Cs=Ml("animationstart"),Ps=Ml("transitionend"),Ls=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Ls.set(e,t),g(t,[e])}for(var io=0;io<Rs.length;io++){var oo=Rs[io],ff=oo.toLowerCase(),pf=oo[0].toUpperCase()+oo.slice(1);tn(ff,"on"+pf)}tn(Ns,"onAnimationEnd"),tn(Es,"onAnimationIteration"),tn(Cs,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Ps,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dd(r,t,void 0,e),e.currentTarget=null}function zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var f=r[a],m=f.instance,j=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break e;Ts(l,f,j),i=m}else for(a=0;a<r.length;a++){if(f=r[a],m=f.instance,j=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break e;Ts(l,f,j),i=m}}}if(yl)throw e=Di,yl=!1,Di=null,e}function _e(e,t){var n=t[ho];n===void 0&&(n=t[ho]=new Set);var r=e+"__bubble";n.has(r)||(Ms(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),Ms(n,e,r,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[Ol]){e[Ol]=!0,d.forEach(function(n){n!=="selectionchange"&&(mf.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,ao("selectionchange",!1,t))}}function Ms(e,t,n,r){switch(rs(t)){case 1:var l=Ed;break;case 4:l=Cd;break;default:l=Vi}n=l.bind(null,t,n,e),l=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function so(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var m=a.tag;if((m===3||m===4)&&(m=a.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;a=a.return}for(;f!==null;){if(a=bn(f),a===null)return;if(m=a.tag,m===5||m===6){r=i=a;continue e}f=f.parentNode}}r=r.return}gl(function(){var j=i,M=Ft(n),O=[];e:{var L=Ls.get(e);if(L!==void 0){var $=Ji,H=e;switch(e){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":$=Wd;break;case"focusin":H="focus",$=Yi;break;case"focusout":H="blur",$=Yi;break;case"beforeblur":case"afterblur":$=Yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Qd;break;case Ns:case Es:case Cs:$=Md;break;case Ps:$=Kd;break;case"scroll":$=Pd;break;case"wheel":$=Yd;break;case"copy":case"cut":case"paste":$=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=ss}var Q=(t&4)!==0,Le=!Q&&e==="scroll",y=Q?L!==null?L+"Capture":null:L;Q=[];for(var h=j,w;h!==null;){w=h;var F=w.stateNode;if(w.tag===5&&F!==null&&(w=F,y!==null&&(F=_r(h,y),F!=null&&Q.push($r(h,F,w)))),Le)break;h=h.return}0<Q.length&&(L=new $(L,H,null,n,M),O.push({event:L,listeners:Q}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&n!==kr&&(H=n.relatedTarget||n.fromElement)&&(bn(H)||H[Dt]))break e;if(($||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,$?(H=n.relatedTarget||n.toElement,$=j,H=H?bn(H):null,H!==null&&(Le=Sn(H),H!==Le||H.tag!==5&&H.tag!==6)&&(H=null)):($=null,H=j),$!==H)){if(Q=os,F="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Q=ss,F="onPointerLeave",y="onPointerEnter",h="pointer"),Le=$==null?L:Qn($),w=H==null?L:Qn(H),L=new Q(F,h+"leave",$,n,M),L.target=Le,L.relatedTarget=w,F=null,bn(M)===j&&(Q=new Q(y,h+"enter",H,n,M),Q.target=w,Q.relatedTarget=Le,F=Q),Le=F,$&&H)t:{for(Q=$,y=H,h=0,w=Q;w;w=Vn(w))h++;for(w=0,F=y;F;F=Vn(F))w++;for(;0<h-w;)Q=Vn(Q),h--;for(;0<w-h;)y=Vn(y),w--;for(;h--;){if(Q===y||y!==null&&Q===y.alternate)break t;Q=Vn(Q),y=Vn(y)}Q=null}else Q=null;$!==null&&Os(O,L,$,Q,!1),H!==null&&Le!==null&&Os(O,Le,H,Q,!0)}}e:{if(L=j?Qn(j):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var J=rf;else if(ms(L))if(gs)J=sf;else{J=of;var X=lf}else($=L.nodeName)&&$.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(J=af);if(J&&(J=J(e,j))){hs(O,J,n,M);break e}X&&X(e,L,j),e==="focusout"&&(X=L._wrapperState)&&X.controlled&&L.type==="number"&&gr(L,"number",L.value)}switch(X=j?Qn(j):window,e){case"focusin":(ms(X)||X.contentEditable==="true")&&($n=X,no=j,Ir=null);break;case"focusout":Ir=no=$n=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,Ss(O,n,M);break;case"selectionchange":if(df)break;case"keydown":case"keyup":Ss(O,n,M)}var q;if(qi)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else An?fs(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(us&&n.locale!=="ko"&&(An||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&An&&(q=ls()):(en=M,Qi="value"in en?en.value:en.textContent,An=!0)),X=Fl(j,ee),0<X.length&&(ee=new as(ee,e,null,n,M),O.push({event:ee,listeners:X}),q?ee.data=q:(q=ps(n),q!==null&&(ee.data=q)))),(q=qd?Zd(e,n):ef(e,n))&&(j=Fl(j,"onBeforeInput"),0<j.length&&(M=new as("onBeforeInput","beforeinput",null,n,M),O.push({event:M,listeners:j}),M.data=q))}zs(O,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=_r(e,n),i!=null&&r.unshift($r(e,i,l)),i=_r(e,t),i!=null&&r.push($r(e,i,l))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var f=n,m=f.alternate,j=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&j!==null&&(f=j,l?(m=_r(n,i),m!=null&&a.unshift($r(n,m,f))):l||(m=_r(n,i),m!=null&&a.push($r(n,m,f)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(gf,"")}function Dl(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(s(425))}function Ul(){}var uo=null,co=null;function fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var po=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(xf)}:po;function xf(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Tr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Hn,Wr="__reactProps$"+Hn,Dt="__reactContainer$"+Hn,ho="__reactEvents$"+Hn,wf="__reactListeners$"+Hn,kf="__reactHandles$"+Hn;function bn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Us(e);e!==null;){if(n=e[Tt])return n;e=Us(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Tt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Il(e){return e[Wr]||null}var go=[],Jn=-1;function rn(e){return{current:e}}function Se(e){0>Jn||(e.current=go[Jn],go[Jn]=null,Jn--)}function je(e,t){Jn++,go[Jn]=e.current,e.current=t}var ln={},Qe=rn(ln),nt=rn(!1),Nn=ln;function Kn(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function Bl(){Se(nt),Se(Qe)}function Is(e,t,n){if(Qe.current!==ln)throw Error(s(168));je(Qe,t),je(nt,n)}function Bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ve(e)||"Unknown",l));return B({},n,r)}function Al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Nn=Qe.current,je(Qe,e),je(nt,nt.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Bs(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(Qe),je(Qe,e)):Se(nt),je(nt,n)}var Ut=null,$l=!1,vo=!1;function $s(e){Ut===null?Ut=[e]:Ut.push(e)}function jf(e){$l=!0,$s(e)}function on(){if(!vo&&Ut!==null){vo=!0;var e=0,t=xe;try{var n=Ut;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,$l=!1}catch(l){throw Ut!==null&&(Ut=Ut.slice(e+1)),Va(Ui,on),l}finally{xe=t,vo=!1}}return null}var Gn=[],Yn=0,Wl=null,Vl=0,mt=[],ht=0,En=null,It=1,Bt="";function Cn(e,t){Gn[Yn++]=Vl,Gn[Yn++]=Wl,Wl=e,Vl=t}function Ws(e,t,n){mt[ht++]=It,mt[ht++]=Bt,mt[ht++]=En,En=e;var r=It;e=Bt;var l=32-_t(r)-1;r&=~(1<<l),n+=1;var i=32-_t(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,It=1<<32-_t(t)+l|n<<l|r,Bt=i+e}else It=1<<i|n<<l|r,Bt=e}function yo(e){e.return!==null&&(Cn(e,1),Ws(e,1,0))}function xo(e){for(;e===Wl;)Wl=Gn[--Yn],Gn[Yn]=null,Vl=Gn[--Yn],Gn[Yn]=null;for(;e===En;)En=mt[--ht],mt[ht]=null,Bt=mt[--ht],mt[ht]=null,It=mt[--ht],mt[ht]=null}var ct=null,dt=null,be=!1,bt=null;function Vs(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:It,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,dt=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(be){var t=dt;if(t){var n=t;if(!Hs(e,t)){if(wo(e))throw Error(s(418));t=nn(n.nextSibling);var r=ct;t&&Hs(e,t)?Vs(r,n):(e.flags=e.flags&-4097|2,be=!1,ct=e)}}else{if(wo(e))throw Error(s(418));e.flags=e.flags&-4097|2,be=!1,ct=e}}}function Qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Hl(e){if(e!==ct)return!1;if(!be)return Qs(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fo(e.type,e.memoizedProps)),t&&(t=dt)){if(wo(e))throw Js(),Error(s(418));for(;t;)Vs(e,t),t=nn(t.nextSibling)}if(Qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?nn(e.stateNode.nextSibling):null;return!0}function Js(){for(var e=dt;e;)e=nn(e.nextSibling)}function Xn(){dt=ct=null,be=!1}function jo(e){bt===null?bt=[e]:bt.push(e)}var _f=pe.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var f=l.refs;a===null?delete f[i]:f[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Ql(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ks(e){var t=e._init;return t(e._payload)}function Gs(e){function t(y,h){if(e){var w=y.deletions;w===null?(y.deletions=[h],y.flags|=16):w.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function l(y,h){return y=mn(y,h),y.index=0,y.sibling=null,y}function i(y,h,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<h?(y.flags|=2,h):w):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,h,w,F){return h===null||h.tag!==6?(h=pa(w,y.mode,F),h.return=y,h):(h=l(h,w),h.return=y,h)}function m(y,h,w,F){var J=w.type;return J===ke?M(y,h,w.props.children,F,w.key):h!==null&&(h.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Ks(J)===h.type)?(F=l(h,w.props),F.ref=Hr(y,h,w),F.return=y,F):(F=gi(w.type,w.key,w.props,null,y.mode,F),F.ref=Hr(y,h,w),F.return=y,F)}function j(y,h,w,F){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=ma(w,y.mode,F),h.return=y,h):(h=l(h,w.children||[]),h.return=y,h)}function M(y,h,w,F,J){return h===null||h.tag!==7?(h=Fn(w,y.mode,F,J),h.return=y,h):(h=l(h,w),h.return=y,h)}function O(y,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pa(""+h,y.mode,w),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case we:return w=gi(h.type,h.key,h.props,null,y.mode,w),w.ref=Hr(y,null,h),w.return=y,w;case Te:return h=ma(h,y.mode,w),h.return=y,h;case le:var F=h._init;return O(y,F(h._payload),w)}if(wn(h)||G(h))return h=Fn(h,y.mode,w,null),h.return=y,h;Ql(y,h)}return null}function L(y,h,w,F){var J=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return J!==null?null:f(y,h,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case we:return w.key===J?m(y,h,w,F):null;case Te:return w.key===J?j(y,h,w,F):null;case le:return J=w._init,L(y,h,J(w._payload),F)}if(wn(w)||G(w))return J!==null?null:M(y,h,w,F,null);Ql(y,w)}return null}function $(y,h,w,F,J){if(typeof F=="string"&&F!==""||typeof F=="number")return y=y.get(w)||null,f(h,y,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case we:return y=y.get(F.key===null?w:F.key)||null,m(h,y,F,J);case Te:return y=y.get(F.key===null?w:F.key)||null,j(h,y,F,J);case le:var X=F._init;return $(y,h,w,X(F._payload),J)}if(wn(F)||G(F))return y=y.get(w)||null,M(h,y,F,J,null);Ql(h,F)}return null}function H(y,h,w,F){for(var J=null,X=null,q=h,ee=h=0,Ie=null;q!==null&&ee<w.length;ee++){q.index>ee?(Ie=q,q=null):Ie=q.sibling;var ge=L(y,q,w[ee],F);if(ge===null){q===null&&(q=Ie);break}e&&q&&ge.alternate===null&&t(y,q),h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge,q=Ie}if(ee===w.length)return n(y,q),be&&Cn(y,ee),J;if(q===null){for(;ee<w.length;ee++)q=O(y,w[ee],F),q!==null&&(h=i(q,h,ee),X===null?J=q:X.sibling=q,X=q);return be&&Cn(y,ee),J}for(q=r(y,q);ee<w.length;ee++)Ie=$(q,y,ee,w[ee],F),Ie!==null&&(e&&Ie.alternate!==null&&q.delete(Ie.key===null?ee:Ie.key),h=i(Ie,h,ee),X===null?J=Ie:X.sibling=Ie,X=Ie);return e&&q.forEach(function(hn){return t(y,hn)}),be&&Cn(y,ee),J}function Q(y,h,w,F){var J=G(w);if(typeof J!="function")throw Error(s(150));if(w=J.call(w),w==null)throw Error(s(151));for(var X=J=null,q=h,ee=h=0,Ie=null,ge=w.next();q!==null&&!ge.done;ee++,ge=w.next()){q.index>ee?(Ie=q,q=null):Ie=q.sibling;var hn=L(y,q,ge.value,F);if(hn===null){q===null&&(q=Ie);break}e&&q&&hn.alternate===null&&t(y,q),h=i(hn,h,ee),X===null?J=hn:X.sibling=hn,X=hn,q=Ie}if(ge.done)return n(y,q),be&&Cn(y,ee),J;if(q===null){for(;!ge.done;ee++,ge=w.next())ge=O(y,ge.value,F),ge!==null&&(h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge);return be&&Cn(y,ee),J}for(q=r(y,q);!ge.done;ee++,ge=w.next())ge=$(q,y,ee,ge.value,F),ge!==null&&(e&&ge.alternate!==null&&q.delete(ge.key===null?ee:ge.key),h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge);return e&&q.forEach(function(np){return t(y,np)}),be&&Cn(y,ee),J}function Le(y,h,w,F){if(typeof w=="object"&&w!==null&&w.type===ke&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case we:e:{for(var J=w.key,X=h;X!==null;){if(X.key===J){if(J=w.type,J===ke){if(X.tag===7){n(y,X.sibling),h=l(X,w.props.children),h.return=y,y=h;break e}}else if(X.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Ks(J)===X.type){n(y,X.sibling),h=l(X,w.props),h.ref=Hr(y,X,w),h.return=y,y=h;break e}n(y,X);break}else t(y,X);X=X.sibling}w.type===ke?(h=Fn(w.props.children,y.mode,F,w.key),h.return=y,y=h):(F=gi(w.type,w.key,w.props,null,y.mode,F),F.ref=Hr(y,h,w),F.return=y,y=F)}return a(y);case Te:e:{for(X=w.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(y,h.sibling),h=l(h,w.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=ma(w,y.mode,F),h.return=y,y=h}return a(y);case le:return X=w._init,Le(y,h,X(w._payload),F)}if(wn(w))return H(y,h,w,F);if(G(w))return Q(y,h,w,F);Ql(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(y,h.sibling),h=l(h,w),h.return=y,y=h):(n(y,h),h=pa(w,y.mode,F),h.return=y,y=h),a(y)):n(y,h)}return Le}var qn=Gs(!0),Ys=Gs(!1),Jl=rn(null),Kl=null,Zn=null,_o=null;function So(){_o=Zn=Kl=null}function bo(e){var t=Jl.current;Se(Jl),e._currentValue=t}function No(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){Kl=e,_o=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Kl===null)throw Error(s(308));Zn=e,Kl.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Pn=null;function Eo(e){Pn===null?Pn=[e]:Pn.push(e)}function Xs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Eo(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,Eo(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function Gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}function Zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yl(e,t,n,r){var l=e.updateQueue;an=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,j=m.next;m.next=null,a===null?i=j:a.next=j,a=m;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==a&&(f===null?M.firstBaseUpdate=j:f.next=j,M.lastBaseUpdate=m))}if(i!==null){var O=l.baseState;a=0,M=j=m=null,f=i;do{var L=f.lane,$=f.eventTime;if((r&L)===L){M!==null&&(M=M.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var H=e,Q=f;switch(L=t,$=n,Q.tag){case 1:if(H=Q.payload,typeof H=="function"){O=H.call($,O,L);break e}O=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,L=typeof H=="function"?H.call($,O,L):H,L==null)break e;O=B({},O,L);break e;case 2:an=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[f]:L.push(f))}else $={eventTime:$,lane:L,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(j=M=$,m=O):M=M.next=$,a|=L;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;L=f,f=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(M===null&&(m=O),l.baseState=m,l.firstBaseUpdate=j,l.lastBaseUpdate=M,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Tn|=a,e.lanes=a,e.memoizedState=O}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var Qr={},zt=rn(Qr),Jr=rn(Qr),Kr=rn(Qr);function Ln(e){if(e===Qr)throw Error(s(174));return e}function Po(e,t){switch(je(Kr,t),je(Jr,e),je(zt,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kn(t,e)}Se(zt),je(zt,t)}function tr(){Se(zt),Se(Jr),Se(Kr)}function tu(e){Ln(Kr.current);var t=Ln(zt.current),n=kn(t,e.type);t!==n&&(je(Jr,e),je(zt,n))}function Lo(e){Jr.current===e&&(Se(zt),Se(Jr))}var Ne=rn(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=[];function To(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var ql=pe.ReactCurrentDispatcher,zo=pe.ReactCurrentBatchConfig,Rn=0,Ee=null,Me=null,De=null,Zl=!1,Gr=!1,Yr=0,Sf=0;function Je(){throw Error(s(321))}function Mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,l,i){if(Rn=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ql.current=e===null||e.memoizedState===null?Cf:Pf,e=n(r,l),Gr){i=0;do{if(Gr=!1,Yr=0,25<=i)throw Error(s(301));i+=1,De=Me=null,t.updateQueue=null,ql.current=Lf,e=n(r,l)}while(Gr)}if(ql.current=ni,t=Me!==null&&Me.next!==null,Rn=0,De=Me=Ee=null,Zl=!1,t)throw Error(s(300));return e}function Fo(){var e=Yr!==0;return Yr=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function vt(){if(Me===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=De===null?Ee.memoizedState:De.next;if(t!==null)De=t,Me=e;else{if(e===null)throw Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function Xr(e,t){return typeof t=="function"?t(e):t}function Do(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Me,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=a=null,m=null,j=i;do{var M=j.lane;if((Rn&M)===M)m!==null&&(m=m.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),r=j.hasEagerState?j.eagerState:e(r,j.action);else{var O={lane:M,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};m===null?(f=m=O,a=r):m=m.next=O,Ee.lanes|=M,Tn|=M}j=j.next}while(j!==null&&j!==i);m===null?a=r:m.next=f,St(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Ee.lanes|=i,Tn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uo(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);St(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nu(){}function ru(e,t){var n=Ee,r=vt(),l=t(),i=!St(r.memoizedState,l);if(i&&(r.memoizedState=l,lt=!0),r=r.queue,Io(ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,qr(9,iu.bind(null,n,r,l,t),void 0,null),Ue===null)throw Error(s(349));(Rn&30)!==0||lu(n,t,l)}return l}function lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function iu(e,t,n,r){t.value=n,t.getSnapshot=r,au(t)&&su(e)}function ou(e,t,n){return n(function(){au(t)&&su(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function su(e){var t=At(e,1);t!==null&&Pt(t,e,1,-1)}function uu(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,Ee,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cu(){return vt().memoizedState}function ei(e,t,n,r){var l=Mt();Ee.flags|=e,l.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function ti(e,t,n,r){var l=vt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Mo(r,a.deps)){l.memoizedState=qr(t,n,i,r);return}}Ee.flags|=e,l.memoizedState=qr(1|t,n,i,r)}function du(e,t){return ei(8390656,8,e,t)}function Io(e,t){return ti(2048,8,e,t)}function fu(e,t){return ti(4,2,e,t)}function pu(e,t){return ti(4,4,e,t)}function mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){return n=n!=null?n.concat([e]):null,ti(4,4,mu.bind(null,t,e),n)}function Bo(){}function gu(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yu(e,t,n){return(Rn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(St(n,t)||(n=Ka(),Ee.lanes|=n,Tn|=n,e.baseState=!0),t)}function bf(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=zo.transition;zo.transition={};try{e(!1),t()}finally{xe=n,zo.transition=r}}function xu(){return vt().memoizedState}function Nf(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e))ku(t,n);else if(n=Xs(e,t,n,r),n!==null){var l=qe();Pt(n,e,r,l),ju(n,t,r)}}function Ef(e,t,n){var r=fn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))ku(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,f=i(a,n);if(l.hasEagerState=!0,l.eagerState=f,St(f,a)){var m=t.interleaved;m===null?(l.next=l,Eo(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}n=Xs(e,t,l,r),n!==null&&(l=qe(),Pt(n,e,r,l),ju(n,t,r))}}function wu(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function ku(e,t){Gr=Zl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ju(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ai(e,n)}}var ni={readContext:gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Cf={readContext:gt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nf.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Bo,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=bf.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=Mt();if(be){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ue===null)throw Error(s(349));(Rn&30)!==0||lu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,du(ou.bind(null,r,i,e),[e]),r.flags|=2048,qr(9,iu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Ue.identifierPrefix;if(be){var n=Bt,r=It;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pf={readContext:gt,useCallback:gu,useContext:gt,useEffect:Io,useImperativeHandle:hu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:vu,useReducer:Do,useRef:cu,useState:function(){return Do(Xr)},useDebugValue:Bo,useDeferredValue:function(e){var t=vt();return yu(t,Me.memoizedState,e)},useTransition:function(){var e=Do(Xr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1},Lf={readContext:gt,useCallback:gu,useContext:gt,useEffect:Io,useImperativeHandle:hu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:vu,useReducer:Uo,useRef:cu,useState:function(){return Uo(Xr)},useDebugValue:Bo,useDeferredValue:function(e){var t=vt();return Me===null?t.memoizedState=e:yu(t,Me.memoizedState,e)},useTransition:function(){var e=Uo(Xr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ao(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ri={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),l=fn(e),i=$t(r,l);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,l),t!==null&&(Pt(t,e,l,r),Gl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),l=fn(e),i=$t(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,l),t!==null&&(Pt(t,e,l,r),Gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=fn(e),l=$t(n,r);l.tag=2,t!=null&&(l.callback=t),t=sn(e,l,r),t!==null&&(Pt(t,e,r,n),Gl(t,e,r))}};function _u(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(l,i):!0}function Su(e,t,n){var r=!1,l=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(l=rt(t)?Nn:Qe.current,r=t.contextTypes,i=(r=r!=null)?Kn(e,l):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function $o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Co(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=gt(i):(i=rt(t)?Nn:Qe.current,l.context=Kn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ao(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ri.enqueueReplaceState(l,l.state,null),Yl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=se(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,ia=r),Vo(e,t)},n}function Eu(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Vo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vo(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Hf.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Tf=pe.ReactCurrentOwner,lt=!1;function Xe(e,t,n,r){t.child=e===null?Ys(t,null,n,r):qn(t,e.child,n,r)}function Ru(e,t,n,r,l){n=n.render;var i=t.ref;return er(t,l),r=Oo(e,t,n,r,i,l),n=Fo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(be&&n&&yo(t),t.flags|=1,Xe(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!fa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zu(e,t,i,r,l)):(e=gi(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(a,r)&&e.ref===t.ref)return Wt(e,t,l)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Ur(i,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Wt(e,t,l)}return Ho(e,t,n,r,l)}function Mu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(lr,ft),ft|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(lr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(lr,ft),ft|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,je(lr,ft),ft|=r;return Xe(e,t,l,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ho(e,t,n,r,l){var i=rt(n)?Nn:Qe.current;return i=Kn(t,i),er(t,l),n=Oo(e,t,n,r,i,l),r=Fo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(be&&r&&yo(t),t.flags|=1,Xe(e,t,n,l),t.child)}function Fu(e,t,n,r,l){if(rt(n)){var i=!0;Al(t)}else i=!1;if(er(t,l),t.stateNode===null)ii(e,t),Su(t,n,r),$o(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,f=t.memoizedProps;a.props=f;var m=a.context,j=n.contextType;typeof j=="object"&&j!==null?j=gt(j):(j=rt(n)?Nn:Qe.current,j=Kn(t,j));var M=n.getDerivedStateFromProps,O=typeof M=="function"||typeof a.getSnapshotBeforeUpdate=="function";O||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==r||m!==j)&&bu(t,a,r,j),an=!1;var L=t.memoizedState;a.state=L,Yl(t,r,a,l),m=t.memoizedState,f!==r||L!==m||nt.current||an?(typeof M=="function"&&(Ao(t,n,M,r),m=t.memoizedState),(f=an||_u(t,n,f,r,L,m,j))?(O||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=j,r=f):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qs(e,t),f=t.memoizedProps,j=t.type===t.elementType?f:Nt(t.type,f),a.props=j,O=t.pendingProps,L=a.context,m=n.contextType,typeof m=="object"&&m!==null?m=gt(m):(m=rt(n)?Nn:Qe.current,m=Kn(t,m));var $=n.getDerivedStateFromProps;(M=typeof $=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==O||L!==m)&&bu(t,a,r,m),an=!1,L=t.memoizedState,a.state=L,Yl(t,r,a,l);var H=t.memoizedState;f!==O||L!==H||nt.current||an?(typeof $=="function"&&(Ao(t,n,$,r),H=t.memoizedState),(j=an||_u(t,n,j,r,L,H,m)||!1)?(M||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,H,m),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,H,m)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),a.props=r,a.state=H,a.context=m,r=j):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return Qo(e,t,n,r,i,l)}function Qo(e,t,n,r,l,i){Ou(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&As(t,n,!1),Wt(e,t,i);r=t.stateNode,Tf.current=t;var f=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qn(t,e.child,null,i),t.child=qn(t,null,f,i)):Xe(e,t,f,i),t.memoizedState=r.state,l&&As(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?Is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Is(e,t.context,!1),Po(e,t.containerInfo)}function Uu(e,t,n,r,l){return Xn(),jo(l),t.flags|=256,Xe(e,t,n,r),t.child}var Jo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,n){var r=t.pendingProps,l=Ne.current,i=!1,a=(t.flags&128)!==0,f;if((f=a)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),je(Ne,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=vi(a,r,0,null),e=Fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ko(n),t.memoizedState=Jo,e):Go(t,a));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return zf(e,t,a,r,f,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,f=l.sibling;var m={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=mn(l,m),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=mn(f,i):(i=Fn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ko(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Jo,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Go(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function li(e,t,n,r){return r!==null&&jo(r),qn(t,e.child,null,n),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Wo(Error(s(422))),li(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vi({mode:"visible",children:r.children},l,0,null),i=Fn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&qn(t,e.child,null,a),t.child.memoizedState=Ko(a),t.memoizedState=Jo,i);if((t.mode&1)===0)return li(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(s(419)),r=Wo(i,r,void 0),li(e,t,a,r)}if(f=(a&e.childLanes)!==0,lt||f){if(r=Ue,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,At(e,l),Pt(r,e,l,-1))}return da(),r=Wo(Error(s(421))),li(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,dt=nn(l.nextSibling),ct=t,be=!0,bt=null,e!==null&&(mt[ht++]=It,mt[ht++]=Bt,mt[ht++]=En,It=e.id,Bt=e.overflow,En=t),t=Go(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),No(e.return,t,n)}function Yo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Au(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yo(t,!0,n,null,i);break;case"together":Yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mf(e,t,n){switch(t.tag){case 3:Du(t),Xn();break;case 5:tu(t);break;case 1:rt(t.type)&&Al(t);break;case 4:Po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;je(Jl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Iu(e,t,n):(je(Ne,Ne.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);je(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Au(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return Wt(e,t,n)}var $u,Xo,Wu,Vu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Xo=function(){},Wu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ln(zt.current);var i=null;switch(n){case"input":l=Dn(e,l),r=Dn(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=vr(e,l),r=vr(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ul)}jt(n,r);var a;n=null;for(j in l)if(!r.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var f=l[j];for(a in f)f.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(p.hasOwnProperty(j)?i||(i=[]):(i=i||[]).push(j,null));for(j in r){var m=r[j];if(f=l!=null?l[j]:void 0,r.hasOwnProperty(j)&&m!==f&&(m!=null||f!=null))if(j==="style")if(f){for(a in f)!f.hasOwnProperty(a)||m&&m.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in m)m.hasOwnProperty(a)&&f[a]!==m[a]&&(n||(n={}),n[a]=m[a])}else n||(i||(i=[]),i.push(j,n)),n=m;else j==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(i=i||[]).push(j,m)):j==="children"?typeof m!="string"&&typeof m!="number"||(i=i||[]).push(j,""+m):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(p.hasOwnProperty(j)?(m!=null&&j==="onScroll"&&_e("scroll",e),i||f===m||(i=[])):(i=i||[]).push(j,m))}n&&(i=i||[]).push("style",n);var j=i;(t.updateQueue=j)&&(t.flags|=4)}},Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Of(e,t,n){var r=t.pendingProps;switch(xo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return rt(t.type)&&Bl(),Ke(t),null;case 3:return r=t.stateNode,tr(),Se(nt),Se(Qe),To(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(sa(bt),bt=null))),Xo(e,t),Ke(t),null;case 5:Lo(t);var l=Ln(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(e=Ln(zt.current),Hl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Tt]=t,r[Wr]=i,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(l=0;l<Br.length;l++)_e(Br[l],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":mr(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":dl(r,i),_e("invalid",r)}jt(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var f=i[a];a==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(a)&&f!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ye(r),Jt(r,i,!0);break;case"textarea":Ye(r),pl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ul)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ml(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Tt]=t,e[Wr]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(a=wr(n,r),n){case"dialog":_e("cancel",e),_e("close",e),l=r;break;case"iframe":case"object":case"embed":_e("load",e),l=r;break;case"video":case"audio":for(l=0;l<Br.length;l++)_e(Br[l],e);l=r;break;case"source":_e("error",e),l=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=r;break;case"details":_e("toggle",e),l=r;break;case"input":mr(e,r),l=Dn(e,r),_e("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),_e("invalid",e);break;case"textarea":dl(e,r),l=vr(e,r),_e("invalid",e);break;default:l=r}jt(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var m=f[i];i==="style"?hl(e,m):i==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Fe(e,m)):i==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&jn(e,m):typeof m=="number"&&jn(e,""+m):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?m!=null&&i==="onScroll"&&_e("scroll",e):m!=null&&oe(e,i,m,a))}switch(n){case"input":Ye(e),Jt(e,r,!1);break;case"textarea":Ye(e),pl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=Ln(Kr.current),Ln(zt.current),Hl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(i=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Dl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Ke(t),null;case 13:if(Se(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Js(),Xn(),t.flags|=98560,i=!1;else if(i=Hl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Tt]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else bt!==null&&(sa(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Oe===0&&(Oe=3):da())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return tr(),Xo(e,t),e===null&&Ar(t.stateNode.containerInfo),Ke(t),null;case 10:return bo(t.type._context),Ke(t),null;case 17:return rt(t.type)&&Bl(),Ke(t),null;case 19:if(Se(Ne),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Zr(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Xl(e),a!==null){for(t.flags|=128,Zr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Ne,Ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&Pe()>ir&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Ke(t),null}else 2*Pe()-i.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Pe(),t.sibling=null,n=Ne.current,je(Ne,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ca(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Ff(e,t){switch(xo(t),t.tag){case 1:return rt(t.type)&&Bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),Se(nt),Se(Qe),To(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Lo(t),null;case 13:if(Se(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ne),null;case 4:return tr(),null;case 10:return bo(t.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var oi=!1,Ge=!1,Df=typeof WeakSet=="function"?WeakSet:Set,V=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function qo(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Hu=!1;function Uf(e,t){if(uo=Nl,e=_s(),to(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,f=-1,m=-1,j=0,M=0,O=e,L=null;t:for(;;){for(var $;O!==n||l!==0&&O.nodeType!==3||(f=a+l),O!==i||r!==0&&O.nodeType!==3||(m=a+r),O.nodeType===3&&(a+=O.nodeValue.length),($=O.firstChild)!==null;)L=O,O=$;for(;;){if(O===e)break t;if(L===n&&++j===l&&(f=a),L===i&&++M===r&&(m=a),($=O.nextSibling)!==null)break;O=L,L=O.parentNode}O=$}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(co={focusedElem:e,selectionRange:n},Nl=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var Q=H.memoizedProps,Le=H.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?Q:Nt(t.type,Q),Le);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Ce(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return H=Hu,Hu=!1,H}function el(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&qo(t,n,i)}l=l.next}while(l!==r)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Wr],delete t[ho],delete t[wf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ul));else if(r!==4&&(e=e.child,e!==null))for(ea(e,t,n),e=e.sibling;e!==null;)ea(e,t,n),e=e.sibling}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}var We=null,Et=!1;function un(e,t,n){for(n=n.child;n!==null;)Gu(e,t,n),n=n.sibling}function Gu(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Ge||rr(n,t);case 6:var r=We,l=Et;We=null,un(e,t,n),We=r,Et=l,We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),Tr(e)):mo(We,n.stateNode));break;case 4:r=We,l=Et,We=n.stateNode.containerInfo,Et=!0,un(e,t,n),We=r,Et=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&qo(n,t,a),l=l.next}while(l!==r)}un(e,t,n);break;case 1:if(!Ge&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ce(n,t,f)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,un(e,t,n),Ge=r):un(e,t,n);break;default:un(e,t,n)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Df),t.forEach(function(r){var l=Jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,f=a;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,Et=!1;break e;case 3:We=f.stateNode.containerInfo,Et=!0;break e;case 4:We=f.stateNode.containerInfo,Et=!0;break e}f=f.return}if(We===null)throw Error(s(160));Gu(i,a,l),We=null,Et=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(j){Ce(l,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Ot(e),r&4){try{el(3,e,e.return),ai(3,e)}catch(Q){Ce(e,e.return,Q)}try{el(5,e,e.return)}catch(Q){Ce(e,e.return,Q)}}break;case 1:Ct(t,e),Ot(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Ct(t,e),Ot(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var l=e.stateNode;try{jn(l,"")}catch(Q){Ce(e,e.return,Q)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&hr(l,i),wr(f,a);var j=wr(f,i);for(a=0;a<m.length;a+=2){var M=m[a],O=m[a+1];M==="style"?hl(l,O):M==="dangerouslySetInnerHTML"?Fe(l,O):M==="children"?jn(l,O):oe(l,M,O,j)}switch(f){case"input":Un(l,i);break;case"textarea":fl(l,i);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?Kt(l,!!i.multiple,$,!1):L!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wr]=i}catch(Q){Ce(e,e.return,Q)}}break;case 6:if(Ct(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(Q){Ce(e,e.return,Q)}}break;case 3:if(Ct(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(Q){Ce(e,e.return,Q)}break;case 4:Ct(t,e),Ot(e);break;case 13:Ct(t,e),Ot(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(la=Pe())),r&4&&Yu(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(j=Ge)||M,Ct(t,e),Ge=j):Ct(t,e),Ot(e),r&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!M&&(e.mode&1)!==0)for(V=e,M=e.child;M!==null;){for(O=V=M;V!==null;){switch(L=V,$=L.child,L.tag){case 0:case 11:case 14:case 15:el(4,L,L.return);break;case 1:rr(L,L.return);var H=L.stateNode;if(typeof H.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(Q){Ce(r,n,Q)}}break;case 5:rr(L,L.return);break;case 22:if(L.memoizedState!==null){ec(O);continue}}$!==null?($.return=L,V=$):ec(O)}M=M.sibling}e:for(M=null,O=e;;){if(O.tag===5){if(M===null){M=O;try{l=O.stateNode,j?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=O.stateNode,m=O.memoizedProps.style,a=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=yr("display",a))}catch(Q){Ce(e,e.return,Q)}}}else if(O.tag===6){if(M===null)try{O.stateNode.nodeValue=j?"":O.memoizedProps}catch(Q){Ce(e,e.return,Q)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;M===O&&(M=null),O=O.return}M===O&&(M=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Ct(t,e),Ot(e),r&4&&Yu(e);break;case 21:break;default:Ct(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ju(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jn(l,""),r.flags&=-33);var i=Ku(e);ta(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,f=Ku(e);ea(e,f,a);break;default:throw Error(s(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function If(e,t,n){V=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var l=V,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||oi;if(!a){var f=l.alternate,m=f!==null&&f.memoizedState!==null||Ge;f=oi;var j=Ge;if(oi=a,(Ge=m)&&!j)for(V=l;V!==null;)a=V,m=a.child,a.tag===22&&a.memoizedState!==null?tc(l):m!==null?(m.return=a,V=m):tc(l);for(;i!==null;)V=i,qu(i),i=i.sibling;V=l,oi=f,Ge=j}Zu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,V=i):Zu(e)}}function Zu(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,a,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var M=j.memoizedState;if(M!==null){var O=M.dehydrated;O!==null&&Tr(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ge||t.flags&512&&Zo(t)}catch(L){Ce(t,t.return,L)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function ec(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function tc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ai(4,t)}catch(m){Ce(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(m){Ce(t,l,m)}}var i=t.return;try{Zo(t)}catch(m){Ce(t,i,m)}break;case 5:var a=t.return;try{Zo(t)}catch(m){Ce(t,a,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){V=null;break}var f=t.sibling;if(f!==null){f.return=t.return,V=f;break}V=t.return}}var Bf=Math.ceil,si=pe.ReactCurrentDispatcher,na=pe.ReactCurrentOwner,yt=pe.ReactCurrentBatchConfig,he=0,Ue=null,ze=null,Ve=0,ft=0,lr=rn(0),Oe=0,tl=null,Tn=0,ui=0,ra=0,nl=null,it=null,la=0,ir=1/0,Vt=null,ci=!1,ia=null,cn=null,di=!1,dn=null,fi=0,rl=0,oa=null,pi=-1,mi=0;function qe(){return(he&6)!==0?Pe():pi!==-1?pi:pi=Pe()}function fn(e){return(e.mode&1)===0?1:(he&2)!==0&&Ve!==0?Ve&-Ve:_f.transition!==null?(mi===0&&(mi=Ka()),mi):(e=xe,e!==0||(e=window.event,e=e===void 0?16:rs(e.type)),e)}function Pt(e,t,n,r){if(50<rl)throw rl=0,oa=null,Error(s(185));Er(e,n,r),((he&2)===0||e!==Ue)&&(e===Ue&&((he&2)===0&&(ui|=n),Oe===4&&pn(e,Ve)),ot(e,r),n===1&&he===0&&(t.mode&1)===0&&(ir=Pe()+500,$l&&on()))}function ot(e,t){var n=e.callbackNode;jd(e,t);var r=_l(e,e===Ue?Ve:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?jf(rc.bind(null,e)):$s(rc.bind(null,e)),yf(function(){(he&6)===0&&on()}),n=null;else{switch(Ga(r)){case 1:n=Ui;break;case 4:n=Qa;break;case 16:n=xl;break;case 536870912:n=Ja;break;default:n=xl}n=dc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(pi=-1,mi=0,(he&6)!==0)throw Error(s(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=_l(e,e===Ue?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=hi(e,r);else{t=r;var l=he;he|=2;var i=ic();(Ue!==e||Ve!==t)&&(Vt=null,ir=Pe()+500,Mn(e,t));do try{Wf();break}catch(f){lc(e,f)}while(!0);So(),si.current=i,he=l,ze!==null?t=0:(Ue=null,Ve=0,t=Oe)}if(t!==0){if(t===2&&(l=Ii(e),l!==0&&(r=l,t=aa(e,l))),t===1)throw n=tl,Mn(e,0),pn(e,r),ot(e,Pe()),n;if(t===6)pn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Af(l)&&(t=hi(e,r),t===2&&(i=Ii(e),i!==0&&(r=i,t=aa(e,i))),t===1))throw n=tl,Mn(e,0),pn(e,r),ot(e,Pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:On(e,it,Vt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=la+500-Pe(),10<t)){if(_l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=po(On.bind(null,e,it,Vt),t);break}On(e,it,Vt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-_t(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bf(r/1960))-r,10<r){e.timeoutHandle=po(On.bind(null,e,it,Vt),r);break}On(e,it,Vt);break;case 5:On(e,it,Vt);break;default:throw Error(s(329))}}}return ot(e,Pe()),e.callbackNode===n?nc.bind(null,e):null}function aa(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=hi(e,t),e!==2&&(t=it,it=n,t!==null&&sa(t)),e}function sa(e){it===null?it=e:it.push.apply(it,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!St(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~ra,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if((he&6)!==0)throw Error(s(327));or();var t=_l(e,0);if((t&1)===0)return ot(e,Pe()),null;var n=hi(e,t);if(e.tag!==0&&n===2){var r=Ii(e);r!==0&&(t=r,n=aa(e,r))}if(n===1)throw n=tl,Mn(e,0),pn(e,t),ot(e,Pe()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,it,Vt),ot(e,Pe()),null}function ua(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(ir=Pe()+500,$l&&on())}}function zn(e){dn!==null&&dn.tag===0&&(he&6)===0&&or();var t=he;he|=1;var n=yt.transition,r=xe;try{if(yt.transition=null,xe=1,e)return e()}finally{xe=r,yt.transition=n,he=t,(he&6)===0&&on()}}function ca(){ft=lr.current,Se(lr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vf(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(xo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:tr(),Se(nt),Se(Qe),To();break;case 5:Lo(r);break;case 4:tr();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:bo(r.type._context);break;case 22:case 23:ca()}n=n.return}if(Ue=e,ze=e=mn(e.current,null),Ve=ft=t,Oe=0,tl=null,ra=ui=Tn=0,it=nl=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Pn=null}return e}function lc(e,t){do{var n=ze;try{if(So(),ql.current=ni,Zl){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zl=!1}if(Rn=0,De=Me=Ee=null,Gr=!1,Yr=0,na.current=null,n===null||n.return===null){Oe=1,tl=t,ze=null;break}e:{var i=e,a=n.return,f=n,m=t;if(t=Ve,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var j=m,M=f,O=M.tag;if((M.mode&1)===0&&(O===0||O===11||O===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var $=Pu(a);if($!==null){$.flags&=-257,Lu($,a,f,i,t),$.mode&1&&Cu(i,j,t),t=$,m=j;var H=t.updateQueue;if(H===null){var Q=new Set;Q.add(m),t.updateQueue=Q}else H.add(m);break e}else{if((t&1)===0){Cu(i,j,t),da();break e}m=Error(s(426))}}else if(be&&f.mode&1){var Le=Pu(a);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Lu(Le,a,f,i,t),jo(nr(m,f));break e}}i=m=nr(m,f),Oe!==4&&(Oe=2),nl===null?nl=[i]:nl.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Nu(i,m,t);Zs(i,y);break e;case 1:f=m;var h=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(cn===null||!cn.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=Eu(i,f,t);Zs(i,F);break e}}i=i.return}while(i!==null)}ac(n)}catch(J){t=J,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function ic(){var e=si.current;return si.current=ni,e===null?ni:e}function da(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||(Tn&268435455)===0&&(ui&268435455)===0||pn(Ue,Ve)}function hi(e,t){var n=he;he|=2;var r=ic();(Ue!==e||Ve!==t)&&(Vt=null,Mn(e,t));do try{$f();break}catch(l){lc(e,l)}while(!0);if(So(),he=n,si.current=r,ze!==null)throw Error(s(261));return Ue=null,Ve=0,Oe}function $f(){for(;ze!==null;)oc(ze)}function Wf(){for(;ze!==null&&!pd();)oc(ze)}function oc(e){var t=cc(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?ac(e):ze=t,na.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Of(n,t,ft),n!==null){ze=n;return}}else{if(n=Ff(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Oe===0&&(Oe=5)}function On(e,t,n){var r=xe,l=yt.transition;try{yt.transition=null,xe=1,Vf(e,t,n,r)}finally{yt.transition=l,xe=r}return null}function Vf(e,t,n,r){do or();while(dn!==null);if((he&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(_d(e,i),e===Ue&&(ze=Ue=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||di||(di=!0,dc(xl,function(){return or(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=yt.transition,yt.transition=null;var a=xe;xe=1;var f=he;he|=4,na.current=null,Uf(e,n),Xu(n,e),cf(co),Nl=!!uo,co=uo=null,e.current=n,If(n),md(),he=f,xe=a,yt.transition=i}else e.current=n;if(di&&(di=!1,dn=e,fi=l),i=e.pendingLanes,i===0&&(cn=null),vd(n.stateNode),ot(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ci)throw ci=!1,e=ia,ia=null,e;return(fi&1)!==0&&e.tag!==0&&or(),i=e.pendingLanes,(i&1)!==0?e===oa?rl++:(rl=0,oa=e):rl=0,on(),null}function or(){if(dn!==null){var e=Ga(fi),t=yt.transition,n=xe;try{if(yt.transition=null,xe=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,fi=0,(he&6)!==0)throw Error(s(331));var l=he;for(he|=4,V=e.current;V!==null;){var i=V,a=i.child;if((V.flags&16)!==0){var f=i.deletions;if(f!==null){for(var m=0;m<f.length;m++){var j=f[m];for(V=j;V!==null;){var M=V;switch(M.tag){case 0:case 11:case 15:el(8,M,i)}var O=M.child;if(O!==null)O.return=M,V=O;else for(;V!==null;){M=V;var L=M.sibling,$=M.return;if(Qu(M),M===j){V=null;break}if(L!==null){L.return=$,V=L;break}V=$}}}var H=i.alternate;if(H!==null){var Q=H.child;if(Q!==null){H.child=null;do{var Le=Q.sibling;Q.sibling=null,Q=Le}while(Q!==null)}}V=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:el(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,V=y;break e}V=i.return}}var h=e.current;for(V=h;V!==null;){a=V;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,V=w;else e:for(a=h;V!==null;){if(f=V,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ai(9,f)}}catch(J){Ce(f,f.return,J)}if(f===a){V=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,V=F;break e}V=f.return}}if(he=l,on(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{xe=n,yt.transition=t}}return!1}function sc(e,t,n){t=nr(n,t),t=Nu(e,t,1),e=sn(e,t,1),t=qe(),e!==null&&(Er(e,1,t),ot(e,t))}function Ce(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=nr(n,e),e=Eu(t,e,1),t=sn(t,e,1),e=qe(),t!==null&&(Er(t,1,e),ot(t,e));break}}t=t.return}}function Hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ve&n)===n&&(Oe===4||Oe===3&&(Ve&130023424)===Ve&&500>Pe()-la?Mn(e,0):ra|=n),ot(e,t)}function uc(e,t){t===0&&((e.mode&1)===0?t=1:(t=jl,jl<<=1,(jl&130023424)===0&&(jl=4194304)));var n=qe();e=At(e,t),e!==null&&(Er(e,t,n),ot(e,n))}function Qf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uc(e,n)}function Jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),uc(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Mf(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,be&&(t.flags&1048576)!==0&&Ws(t,Vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var l=Kn(t,Qe.current);er(t,n),l=Oo(null,t,r,e,l,n);var i=Fo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Al(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Co(t),l.updater=ri,t.stateNode=l,l._reactInternals=t,$o(t,r,e,n),t=Qo(null,t,r,!0,i,n)):(t.tag=0,be&&i&&yo(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gf(r),e=Nt(r,e),l){case 0:t=Ho(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Nt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Ho(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Fu(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,qs(e,t),Yl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nr(Error(s(423)),t),t=Uu(e,t,r,n,l);break e}else if(r!==l){l=nr(Error(s(424)),t),t=Uu(e,t,r,n,l);break e}else for(dt=nn(t.stateNode.containerInfo.firstChild),ct=t,be=!0,bt=null,n=Ys(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===l){t=Wt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return tu(t),e===null&&ko(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,fo(r,l)?a=null:i!==null&&fo(r,i)&&(t.flags|=32),Ou(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&ko(t),null;case 13:return Iu(e,t,n);case 4:return Po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Ru(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,je(Jl,r._currentValue),r._currentValue=a,i!==null)if(St(i.value,a)){if(i.children===l.children&&!nt.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){a=i.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(i.tag===1){m=$t(-1,n&-n),m.tag=2;var j=i.updateQueue;if(j!==null){j=j.shared;var M=j.pending;M===null?m.next=m:(m.next=M.next,M.next=m),j.pending=m}}i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),No(i.return,n,t),f.lanes|=n;break}m=m.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),No(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,er(t,n),l=gt(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=Nt(r,t.pendingProps),l=Nt(r.type,l),Tu(e,t,r,l,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),ii(e,t),t.tag=1,rt(r)?(e=!0,Al(t)):e=!1,er(t,n),Su(t,r,l),$o(t,r,l,n),Qo(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Mu(e,t,n)}throw Error(s(156,t.tag))};function dc(e,t){return Va(e,t)}function Kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Kf(e,t,n,r)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W)return 11;if(e===Z)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")fa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ke:return Fn(n.children,l,i,t);case Be:a=8,l|=8;break;case He:return e=xt(12,n,t,l|2),e.elementType=He,e.lanes=i,e;case Y:return e=xt(13,n,t,l),e.elementType=Y,e.lanes=i,e;case K:return e=xt(19,n,t,l),e.elementType=K,e.lanes=i,e;case ae:return vi(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ze:a=10;break e;case wt:a=9;break e;case W:a=11;break e;case Z:a=14;break e;case le:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=xt(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Fn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=xt(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function pa(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ha(e,t,n,r,l,i,a,f,m){return e=new Yf(e,t,n,f,m),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(i),e}function Xf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fc(e){if(!e)return ln;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(rt(n))return Bs(e,n,t)}return t}function pc(e,t,n,r,l,i,a,f,m){return e=ha(n,r,!0,e,l,i,a,f,m),e.context=fc(null),n=e.current,r=qe(),l=fn(n),i=$t(r,l),i.callback=t??null,sn(n,i,l),e.current.lanes=l,Er(e,l,r),ot(e,r),e}function yi(e,t,n,r){var l=t.current,i=qe(),a=fn(l);return n=fc(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(l,t,a),e!==null&&(Pt(e,l,a,i),Gl(e,l,a)),a}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ga(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function qf(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function va(e){this._internalRoot=e}wi.prototype.render=va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));yi(e,t,null,null)},wi.prototype.unmount=va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){yi(null,e,null,null)}),t[Dt]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&ts(e)}};function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function Zf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var j=xi(a);i.call(j)}}var a=pc(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=a,e[Dt]=a.current,Ar(e.nodeType===8?e.parentNode:e),zn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var j=xi(m);f.call(j)}}var m=ha(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=m,e[Dt]=m.current,Ar(e.nodeType===8?e.parentNode:e),zn(function(){yi(t,m,n,r)}),m}function ji(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var f=l;l=function(){var m=xi(a);f.call(m)}}yi(t,a,e,l)}else a=Zf(n,t,e,l,r);return xi(a)}Ya=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Ai(t,n|1),ot(t,Pe()),(he&6)===0&&(ir=Pe()+500,on()))}break;case 13:zn(function(){var r=At(e,1);if(r!==null){var l=qe();Pt(r,e,1,l)}}),ga(e,1)}},$i=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=qe();Pt(t,e,134217728,n)}ga(e,134217728)}},Xa=function(e){if(e.tag===13){var t=fn(e),n=At(e,t);if(n!==null){var r=qe();Pt(n,e,t,r)}ga(e,t)}},qa=function(){return xe},Za=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},jr=function(e,t,n){switch(t){case"input":if(Un(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Il(r);if(!l)throw Error(s(90));pr(r),Un(r,l)}}}break;case"textarea":fl(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}},et=ua,tt=zn;var ep={usingClientEntryPoint:!1,Events:[Vr,Qn,Il,ye,$e,ua]},ll={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tp={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$a(e),e===null?null:e.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{wl=_i.inject(tp),Rt=_i}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(t))throw Error(s(200));return Xf(e,t,null,n)},at.createRoot=function(e,t){if(!ya(e))throw Error(s(299));var n=!1,r="",l=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ha(e,1,!1,null,null,n,!1,r,l),e[Dt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new va(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=$a(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return zn(e)},at.hydrate=function(e,t,n){if(!ki(t))throw Error(s(200));return ji(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!ya(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=hc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pc(t,null,e,1,n??null,l,!1,i,a),e[Dt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new wi(t)},at.render=function(e,t,n){if(!ki(t))throw Error(s(200));return ji(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!ki(e))throw Error(s(40));return e._reactRootContainer?(zn(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},at.unstable_batchedUpdates=ua,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ki(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ji(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var Sc;function Ic(){if(Sc)return ka.exports;Sc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),ka.exports=cp(),ka.exports}var bc;function dp(){if(bc)return Si;bc=1;var o=Ic();return Si.createRoot=o.createRoot,Si.hydrateRoot=o.hydrateRoot,Si}var fp=dp();const pp=Uc(fp);Ic();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},ul.apply(this,arguments)}var gn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(gn||(gn={}));const Nc="popstate";function mp(o){o===void 0&&(o={});function c(d,p){let{pathname:g,search:x,hash:S}=d.location;return Na("",{pathname:g,search:x,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(d,p){return typeof p=="string"?p:Ei(p)}return gp(c,s,null,o)}function Re(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function za(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function hp(){return Math.random().toString(36).substr(2,8)}function Ec(o,c){return{usr:o.state,key:o.key,idx:c}}function Na(o,c,s,d){return s===void 0&&(s=null),ul({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof c=="string"?cr(c):c,{state:s,key:c&&c.key||d||hp()})}function Ei(o){let{pathname:c="/",search:s="",hash:d=""}=o;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function cr(o){let c={};if(o){let s=o.indexOf("#");s>=0&&(c.hash=o.substr(s),o=o.substr(0,s));let d=o.indexOf("?");d>=0&&(c.search=o.substr(d),o=o.substr(0,d)),o&&(c.pathname=o)}return c}function gp(o,c,s,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:g=!1}=d,x=p.history,S=gn.Pop,_=null,R=N();R==null&&(R=0,x.replaceState(ul({},x.state,{idx:R}),""));function N(){return(x.state||{idx:null}).idx}function b(){S=gn.Pop;let U=N(),te=U==null?null:U-R;R=U,_&&_({action:S,location:A.location,delta:te})}function T(U,te){S=gn.Push;let ue=Na(A.location,U,te);R=N()+1;let oe=Ec(ue,R),pe=A.createHref(ue);try{x.pushState(oe,"",pe)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;p.location.assign(pe)}g&&_&&_({action:S,location:A.location,delta:1})}function C(U,te){S=gn.Replace;let ue=Na(A.location,U,te);R=N();let oe=Ec(ue,R),pe=A.createHref(ue);x.replaceState(oe,"",pe),g&&_&&_({action:S,location:A.location,delta:0})}function I(U){let te=p.location.origin!=="null"?p.location.origin:p.location.href,ue=typeof U=="string"?U:Ei(U);return ue=ue.replace(/ $/,"%20"),Re(te,"No window.location.(origin|href) available to create URL for href: "+ue),new URL(ue,te)}let A={get action(){return S},get location(){return o(p,x)},listen(U){if(_)throw new Error("A history only accepts one active listener");return p.addEventListener(Nc,b),_=U,()=>{p.removeEventListener(Nc,b),_=null}},createHref(U){return c(p,U)},createURL:I,encodeLocation(U){let te=I(U);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:T,replace:C,go(U){return x.go(U)}};return A}var Cc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Cc||(Cc={}));function vp(o,c,s){return s===void 0&&(s="/"),yp(o,c,s)}function yp(o,c,s,d){let p=typeof c=="string"?cr(c):c,g=Ma(p.pathname||"/",s);if(g==null)return null;let x=Bc(o);xp(x);let S=null;for(let _=0;S==null&&_<x.length;++_){let R=Rp(g);S=Cp(x[_],R)}return S}function Bc(o,c,s,d){c===void 0&&(c=[]),s===void 0&&(s=[]),d===void 0&&(d="");let p=(g,x,S)=>{let _={relativePath:S===void 0?g.path||"":S,caseSensitive:g.caseSensitive===!0,childrenIndex:x,route:g};_.relativePath.startsWith("/")&&(Re(_.relativePath.startsWith(d),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(d.length));let R=vn([d,_.relativePath]),N=s.concat(_);g.children&&g.children.length>0&&(Re(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+R+'".')),Bc(g.children,c,N,R)),!(g.path==null&&!g.index)&&c.push({path:R,score:Np(R,g.index),routesMeta:N})};return o.forEach((g,x)=>{var S;if(g.path===""||!((S=g.path)!=null&&S.includes("?")))p(g,x);else for(let _ of Ac(g.path))p(g,x,_)}),c}function Ac(o){let c=o.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),g=s.replace(/\?$/,"");if(d.length===0)return p?[g,""]:[g];let x=Ac(d.join("/")),S=[];return S.push(...x.map(_=>_===""?g:[g,_].join("/"))),p&&S.push(...x),S.map(_=>o.startsWith("/")&&_===""?"/":_)}function xp(o){o.sort((c,s)=>c.score!==s.score?s.score-c.score:Ep(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const wp=/^:[\w-]+$/,kp=3,jp=2,_p=1,Sp=10,bp=-2,Pc=o=>o==="*";function Np(o,c){let s=o.split("/"),d=s.length;return s.some(Pc)&&(d+=bp),c&&(d+=jp),s.filter(p=>!Pc(p)).reduce((p,g)=>p+(wp.test(g)?kp:g===""?_p:Sp),d)}function Ep(o,c){return o.length===c.length&&o.slice(0,-1).every((d,p)=>d===c[p])?o[o.length-1]-c[c.length-1]:0}function Cp(o,c,s){let{routesMeta:d}=o,p={},g="/",x=[];for(let S=0;S<d.length;++S){let _=d[S],R=S===d.length-1,N=g==="/"?c:c.slice(g.length)||"/",b=Pp({path:_.relativePath,caseSensitive:_.caseSensitive,end:R},N),T=_.route;if(!b)return null;Object.assign(p,b.params),x.push({params:p,pathname:vn([g,b.pathname]),pathnameBase:Fp(vn([g,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(g=vn([g,b.pathnameBase]))}return x}function Pp(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,d]=Lp(o.path,o.caseSensitive,o.end),p=c.match(s);if(!p)return null;let g=p[0],x=g.replace(/(.)\/+$/,"$1"),S=p.slice(1);return{params:d.reduce((R,N,b)=>{let{paramName:T,isOptional:C}=N;if(T==="*"){let A=S[b]||"";x=g.slice(0,g.length-A.length).replace(/(.)\/+$/,"$1")}const I=S[b];return C&&!I?R[T]=void 0:R[T]=(I||"").replace(/%2F/g,"/"),R},{}),pathname:g,pathnameBase:x,pattern:o}}function Lp(o,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),za(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,S,_)=>(d.push({paramName:S,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function Rp(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return za(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),o}}function Ma(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=o.charAt(s);return d&&d!=="/"?null:o.slice(s)||"/"}const Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zp=o=>Tp.test(o);function Mp(o,c){c===void 0&&(c="/");let{pathname:s,search:d="",hash:p=""}=typeof o=="string"?cr(o):o,g;if(s)if(zp(s))g=s;else{if(s.includes("//")){let x=s;s=s.replace(/\/\/+/g,"/"),za(!1,"Pathnames cannot have embedded double slashes - normalizing "+(x+" -> "+s))}s.startsWith("/")?g=Lc(s.substring(1),"/"):g=Lc(s,c)}else g=c;return{pathname:g,search:Dp(d),hash:Up(p)}}function Lc(o,c){let s=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function Sa(o,c,s,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Op(o){return o.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Oa(o,c){let s=Op(o);return c?s.map((d,p)=>p===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function Fa(o,c,s,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=cr(o):(p=ul({},o),Re(!p.pathname||!p.pathname.includes("?"),Sa("?","pathname","search",p)),Re(!p.pathname||!p.pathname.includes("#"),Sa("#","pathname","hash",p)),Re(!p.search||!p.search.includes("#"),Sa("#","search","hash",p)));let g=o===""||p.pathname==="",x=g?"/":p.pathname,S;if(x==null)S=s;else{let b=c.length-1;if(!d&&x.startsWith("..")){let T=x.split("/");for(;T[0]==="..";)T.shift(),b-=1;p.pathname=T.join("/")}S=b>=0?c[b]:"/"}let _=Mp(p,S),R=x&&x!=="/"&&x.endsWith("/"),N=(g||x===".")&&s.endsWith("/");return!_.pathname.endsWith("/")&&(R||N)&&(_.pathname+="/"),_}const vn=o=>o.join("/").replace(/\/\/+/g,"/"),Fp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Dp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Up=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ip(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const $c=["post","put","patch","delete"];new Set($c);const Bp=["get",...$c];new Set(Bp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},cl.apply(this,arguments)}const Da=k.createContext(null),Ap=k.createContext(null),yn=k.createContext(null),Ti=k.createContext(null),Ht=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Wc=k.createContext(null);function $p(o,c){let{relative:s}=c===void 0?{}:c;dr()||Re(!1);let{basename:d,navigator:p}=k.useContext(yn),{hash:g,pathname:x,search:S}=Hc(o,{relative:s}),_=x;return d!=="/"&&(_=x==="/"?d:vn([d,x])),p.createHref({pathname:_,search:S,hash:g})}function dr(){return k.useContext(Ti)!=null}function Qt(){return dr()||Re(!1),k.useContext(Ti).location}function Vc(o){k.useContext(yn).static||k.useLayoutEffect(o)}function xn(){let{isDataRoute:o}=k.useContext(Ht);return o?nm():Wp()}function Wp(){dr()||Re(!1);let o=k.useContext(Da),{basename:c,future:s,navigator:d}=k.useContext(yn),{matches:p}=k.useContext(Ht),{pathname:g}=Qt(),x=JSON.stringify(Oa(p,s.v7_relativeSplatPath)),S=k.useRef(!1);return Vc(()=>{S.current=!0}),k.useCallback(function(R,N){if(N===void 0&&(N={}),!S.current)return;if(typeof R=="number"){d.go(R);return}let b=Fa(R,JSON.parse(x),g,N.relative==="path");o==null&&c!=="/"&&(b.pathname=b.pathname==="/"?c:vn([c,b.pathname])),(N.replace?d.replace:d.push)(b,N.state,N)},[c,d,x,g,o])}function Vp(){let{matches:o}=k.useContext(Ht),c=o[o.length-1];return c?c.params:{}}function Hc(o,c){let{relative:s}=c===void 0?{}:c,{future:d}=k.useContext(yn),{matches:p}=k.useContext(Ht),{pathname:g}=Qt(),x=JSON.stringify(Oa(p,d.v7_relativeSplatPath));return k.useMemo(()=>Fa(o,JSON.parse(x),g,s==="path"),[o,x,g,s])}function Hp(o,c){return Qp(o,c)}function Qp(o,c,s,d){dr()||Re(!1);let{navigator:p}=k.useContext(yn),{matches:g}=k.useContext(Ht),x=g[g.length-1],S=x?x.params:{};x&&x.pathname;let _=x?x.pathnameBase:"/";x&&x.route;let R=Qt(),N;if(c){var b;let U=typeof c=="string"?cr(c):c;_==="/"||(b=U.pathname)!=null&&b.startsWith(_)||Re(!1),N=U}else N=R;let T=N.pathname||"/",C=T;if(_!=="/"){let U=_.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(U.length).join("/")}let I=vp(o,{pathname:C}),A=Xp(I&&I.map(U=>Object.assign({},U,{params:Object.assign({},S,U.params),pathname:vn([_,p.encodeLocation?p.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?_:vn([_,p.encodeLocation?p.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,s,d);return c&&A?k.createElement(Ti.Provider,{value:{location:cl({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:gn.Pop}},A):A}function Jp(){let o=tm(),c=Ip(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},c),s?k.createElement("pre",{style:p},s):null,null)}const Kp=k.createElement(Jp,null);class Gp extends k.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?k.createElement(Ht.Provider,{value:this.props.routeContext},k.createElement(Wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yp(o){let{routeContext:c,match:s,children:d}=o,p=k.useContext(Da);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),k.createElement(Ht.Provider,{value:c},d)}function Xp(o,c,s,d){var p;if(c===void 0&&(c=[]),s===void 0&&(s=null),d===void 0&&(d=null),o==null){var g;if(!s)return null;if(s.errors)o=s.matches;else if((g=d)!=null&&g.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let x=o,S=(p=s)==null?void 0:p.errors;if(S!=null){let N=x.findIndex(b=>b.route.id&&(S==null?void 0:S[b.route.id])!==void 0);N>=0||Re(!1),x=x.slice(0,Math.min(x.length,N+1))}let _=!1,R=-1;if(s&&d&&d.v7_partialHydration)for(let N=0;N<x.length;N++){let b=x[N];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(R=N),b.route.id){let{loaderData:T,errors:C}=s,I=b.route.loader&&T[b.route.id]===void 0&&(!C||C[b.route.id]===void 0);if(b.route.lazy||I){_=!0,R>=0?x=x.slice(0,R+1):x=[x[0]];break}}}return x.reduceRight((N,b,T)=>{let C,I=!1,A=null,U=null;s&&(C=S&&b.route.id?S[b.route.id]:void 0,A=b.route.errorElement||Kp,_&&(R<0&&T===0?(rm("route-fallback"),I=!0,U=null):R===T&&(I=!0,U=b.route.hydrateFallbackElement||null)));let te=c.concat(x.slice(0,T+1)),ue=()=>{let oe;return C?oe=A:I?oe=U:b.route.Component?oe=k.createElement(b.route.Component,null):b.route.element?oe=b.route.element:oe=N,k.createElement(Yp,{match:b,routeContext:{outlet:N,matches:te,isDataRoute:s!=null},children:oe})};return s&&(b.route.ErrorBoundary||b.route.errorElement||T===0)?k.createElement(Gp,{location:s.location,revalidation:s.revalidation,component:A,error:C,children:ue(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ue()},null)}var Qc=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(Qc||{}),Jc=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(Jc||{});function qp(o){let c=k.useContext(Da);return c||Re(!1),c}function Zp(o){let c=k.useContext(Ap);return c||Re(!1),c}function em(o){let c=k.useContext(Ht);return c||Re(!1),c}function Kc(o){let c=em(),s=c.matches[c.matches.length-1];return s.route.id||Re(!1),s.route.id}function tm(){var o;let c=k.useContext(Wc),s=Zp(),d=Kc();return c!==void 0?c:(o=s.errors)==null?void 0:o[d]}function nm(){let{router:o}=qp(Qc.UseNavigateStable),c=Kc(Jc.UseNavigateStable),s=k.useRef(!1);return Vc(()=>{s.current=!0}),k.useCallback(function(p,g){g===void 0&&(g={}),s.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,cl({fromRouteId:c},g)))},[o,c])}const Rc={};function rm(o,c,s){Rc[o]||(Rc[o]=!0)}function lm(o,c){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Gc(o){let{to:c,replace:s,state:d,relative:p}=o;dr()||Re(!1);let{future:g,static:x}=k.useContext(yn),{matches:S}=k.useContext(Ht),{pathname:_}=Qt(),R=xn(),N=Fa(c,Oa(S,g.v7_relativeSplatPath),_,p==="path"),b=JSON.stringify(N);return k.useEffect(()=>R(JSON.parse(b),{replace:s,state:d,relative:p}),[R,b,p,s,d]),null}function ol(o){Re(!1)}function im(o){let{basename:c="/",children:s=null,location:d,navigationType:p=gn.Pop,navigator:g,static:x=!1,future:S}=o;dr()&&Re(!1);let _=c.replace(/^\/*/,"/"),R=k.useMemo(()=>({basename:_,navigator:g,static:x,future:cl({v7_relativeSplatPath:!1},S)}),[_,S,g,x]);typeof d=="string"&&(d=cr(d));let{pathname:N="/",search:b="",hash:T="",state:C=null,key:I="default"}=d,A=k.useMemo(()=>{let U=Ma(N,_);return U==null?null:{location:{pathname:U,search:b,hash:T,state:C,key:I},navigationType:p}},[_,N,b,T,C,I,p]);return A==null?null:k.createElement(yn.Provider,{value:R},k.createElement(Ti.Provider,{children:s,value:A}))}function om(o){let{children:c,location:s}=o;return Hp(Ea(c),s)}new Promise(()=>{});function Ea(o,c){c===void 0&&(c=[]);let s=[];return k.Children.forEach(o,(d,p)=>{if(!k.isValidElement(d))return;let g=[...c,p];if(d.type===k.Fragment){s.push.apply(s,Ea(d.props.children,g));return}d.type!==ol&&Re(!1),!d.props.index||!d.props.children||Re(!1);let x={id:d.props.id||g.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(x.children=Ea(d.props.children,g)),s.push(x)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},Ca.apply(this,arguments)}function am(o,c){if(o==null)return{};var s={},d=Object.keys(o),p,g;for(g=0;g<d.length;g++)p=d[g],!(c.indexOf(p)>=0)&&(s[p]=o[p]);return s}function sm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function um(o,c){return o.button===0&&(!c||c==="_self")&&!sm(o)}const cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dm="6";try{window.__reactRouterVersion=dm}catch{}const fm="startTransition",Tc=ap[fm];function pm(o){let{basename:c,children:s,future:d,window:p}=o,g=k.useRef();g.current==null&&(g.current=mp({window:p,v5Compat:!0}));let x=g.current,[S,_]=k.useState({action:x.action,location:x.location}),{v7_startTransition:R}=d||{},N=k.useCallback(b=>{R&&Tc?Tc(()=>_(b)):_(b)},[_,R]);return k.useLayoutEffect(()=>x.listen(N),[x,N]),k.useEffect(()=>lm(d),[d]),k.createElement(im,{basename:c,children:s,location:S.location,navigationType:S.action,navigator:x,future:d})}const mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gm=k.forwardRef(function(c,s){let{onClick:d,relative:p,reloadDocument:g,replace:x,state:S,target:_,to:R,preventScrollReset:N,viewTransition:b}=c,T=am(c,cm),{basename:C}=k.useContext(yn),I,A=!1;if(typeof R=="string"&&hm.test(R)&&(I=R,mm))try{let oe=new URL(window.location.href),pe=R.startsWith("//")?new URL(oe.protocol+R):new URL(R),we=Ma(pe.pathname,C);pe.origin===oe.origin&&we!=null?R=we+pe.search+pe.hash:A=!0}catch{}let U=$p(R,{relative:p}),te=vm(R,{replace:x,state:S,target:_,preventScrollReset:N,relative:p,viewTransition:b});function ue(oe){d&&d(oe),oe.defaultPrevented||te(oe)}return k.createElement("a",Ca({},T,{href:I||U,onClick:A||g?d:ue,ref:s,target:_}))});var zc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(zc||(zc={}));var Mc;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function vm(o,c){let{target:s,replace:d,state:p,preventScrollReset:g,relative:x,viewTransition:S}=c===void 0?{}:c,_=xn(),R=Qt(),N=Hc(o,{relative:x});return k.useCallback(b=>{if(um(b,s)){b.preventDefault();let T=d!==void 0?d:Ei(R)===Ei(N);_(o,{replace:T,state:p,preventScrollReset:g,relative:x,viewTransition:S})}},[R,_,N,d,p,s,o,g,x,S])}const Yc=Ri.createContext(null),Ua=document.createElement("div");Ua.id="root";document.body.appendChild(Ua);const Xc=document.createElement("style");Xc.textContent=`
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
  .checkbox-row input {
    width: auto;
    margin: 0;
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
`;document.head.appendChild(Xc);function pt(...o){return o.filter(Boolean).join(" ")}function fr(o){return u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o})}function ym(o){return u.jsxs(fr,{...o,children:[u.jsx("path",{d:"M12 5v14"}),u.jsx("path",{d:"M5 12h14"})]})}function qc(o){return u.jsx(fr,{...o,children:u.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function Zc(o){return u.jsxs(fr,{...o,children:[u.jsx("path",{d:"m15 5 4 4"}),u.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function ed(o){return u.jsx(fr,{...o,children:u.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function xm(o){return u.jsxs(fr,{...o,children:[u.jsx("path",{d:"M19 12H5"}),u.jsx("path",{d:"m12 5-7 7 7 7"})]})}function wm(o){return u.jsxs(fr,{...o,children:[u.jsx("path",{d:"M12 4v10"}),u.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),u.jsx("path",{d:"M4 20h16"})]})}async function st(o,c){const s=await fetch(o,{credentials:"include",headers:{"Content-Type":"application/json",...(c==null?void 0:c.headers)||{}},...c});if(s.status===204)return;const p=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const g=typeof p=="object"&&p!==null&&"detail"in p?String(p.detail):s.statusText;throw new Error(g||"Request failed.")}return p}function al(o){if(!o)return"Not available";const c=new Date(o);return Number.isNaN(c.getTime())?o:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(c)}function ar(o){if(!Number.isFinite(o)||o<=0)return"0 B";const c=["B","KB","MB","GB","TB"];let s=o,d=0;for(;s>=1024&&d<c.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${c[d]}`}function td(o){return!Number.isFinite(o)||!o||o<=0?"No limit":`${(o/1024**3).toFixed(o>=10*1024**3?0:1)} GB`}function km(o){return td(o)}function jm(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1e3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} CPU`}function Pa(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function Ci(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function La(o){return Ci(o)}function Oc(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1e3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Ra(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1024**3;return c>=10||c%1===0?c.toFixed(0):c.toFixed(1)}function Fc(o){return Ra(o)}function bi(o){return Number.isFinite(o)?`${Number(o).toFixed(1)}%`:"-"}function sl(o){if(!o)return"-";const c=new Date(o).getTime();if(Number.isNaN(c))return"-";const s=Date.now()-c;if(s<0)return"Just now";const d=6e4,p=60*d,g=24*p;return s<p?`${Math.max(1,Math.floor(s/d))}m ago`:s<g?`${Math.floor(s/p)}h ago`:`${Math.floor(s/g)}d ago`}function ur(o){return Number.isFinite(o)?Number(o)>80?"metric-danger":Number(o)>60?"metric-warning":"metric-ok":""}function ba(o){return Number.isFinite(o)?{"--metric-percent":Math.max(0,Math.min(100,Number(o)))}:void 0}function Pi(o,c){return!Number.isFinite(o)||!Number.isFinite(c)||!c||c<=0?null:Number(o)/Number(c)*100}function _m(o,c){if(!o)return"Not started";const s=new Date(o).getTime(),d=c?new Date(c).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const p=Math.floor((d-s)/1e3),g=Math.floor(p/3600),x=Math.floor(p%3600/60),S=p%60;return g>0?`${g}h ${x}m ${S}s`:x>0?`${x}m ${S}s`:`${S}s`}function Sm(o,c=200){return`/api/v1/jobs/${o}/log?lines=${c}`}function bm(o){return`/api/v1/jobs/${o}/log?full=true`}function Nm(o){return o.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function Em(o){return`${[o.project_id||"controller",o.job_type,o.job_id].map(Nm).join("__")}.log`}function Cm(o){return`/api/v1/projects/${encodeURIComponent(o)}/lockfile`}function Pm(o,c){return`/api/v1/projects/${encodeURIComponent(o)}/export?mode=${encodeURIComponent(c)}`}function Lm(o,c){return`bulletjournal_export_${o}_${c==="code_only"?"code":c==="code_and_data"?"code_and_data":"full"}.zip`}function Rm(o){const c=o.headers.get("content-disposition")||"",s=c.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=c.match(/filename="([^"]+)"/i);if(d)return d[1];const p=c.match(/filename=([^;]+)/i);return p?p[1].trim():null}function nd(o){return o.status==="running"&&o.runtime.container_port!==null}function Tm(o){const c=Fm(o);return c?c.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function zm(o){return o?o.slice(0,12):"Not running"}function Mm(o){return o.status==="succeeded"?"state-succeeded":o.status==="running"||o.status==="queued"?"state-running":o.status==="failed"?"state-failed":""}function Om(o){return o.status.split(/[_\s]+/).filter(Boolean).map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ")}function Fm(o){return o.status==="error"&&o.status_reason||o.status==="stopped"&&o.status_reason?o.status_reason:o.status}function Dm(o){return o.has_active_job||o.status==="creating"||o.status==="installing"||o.status==="starting"||o.status==="stopping"||o.install_status==="installing"?"busy":o.status==="running"?"running":o.status==="error"||o.status_reason==="install_failed"||o.status_reason==="start_failed"||o.status_reason==="runtime_crashed"?"error":"stopped"}function rd(o){return`state-${Dm(o)}`}function ld(o){const c=typeof o.metrics.cpu_percent=="number"?o.metrics.cpu_percent:null,s=Pi(o.metrics.memory_used_bytes??null,o.metrics.memory_limit_bytes??null),d=Pi(o.metrics.disk_used_bytes??null,o.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:ar(o.metrics.disk_used_bytes??0),tone:ur(d)},{label:"RAM",value:typeof o.metrics.memory_used_bytes=="number"?ar(o.metrics.memory_used_bytes):"-",tone:ur(s)},{label:"CPU",value:bi(c),tone:ur(o.limits.cpu_limit_millis?c:null)}]}function Um({systemInfo:o}){var p,g,x,S;const c=ur(o==null?void 0:o.metrics.cpu_percent),s=Pi(((p=o==null?void 0:o.metrics.memory)==null?void 0:p.used_bytes)??null,((g=o==null?void 0:o.metrics.memory)==null?void 0:g.total_bytes)??null),d=Pi(((x=o==null?void 0:o.metrics.disk)==null?void 0:x.used_bytes)??null,((S=o==null?void 0:o.metrics.disk)==null?void 0:S.total_bytes)??null);return u.jsxs("div",{className:"footer-metrics",children:[u.jsxs("span",{className:pt("footer-metric",ur(d)),style:ba(d),title:o!=null&&o.metrics.disk?`${ar(o.metrics.disk.used_bytes)} / ${ar(o.metrics.disk.total_bytes)}`:"Not available",children:[u.jsx("span",{className:"muted",children:"Disk"}),u.jsx("strong",{children:bi(d)})]}),u.jsxs("span",{className:pt("footer-metric",ur(s)),style:ba(s),title:o!=null&&o.metrics.memory?`${ar(o.metrics.memory.used_bytes)} / ${ar(o.metrics.memory.total_bytes)}`:"Not available",children:[u.jsx("span",{className:"muted",children:"RAM"}),u.jsx("strong",{children:bi(s)})]}),u.jsxs("span",{className:pt("footer-metric",c),style:ba(o==null?void 0:o.metrics.cpu_percent),children:[u.jsx("span",{className:"muted",children:"CPU"}),u.jsx("strong",{children:bi(o==null?void 0:o.metrics.cpu_percent)})]})]})}function id(o){return o.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:o.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:o.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:o.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:o.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function od(o,c,s){return!c||c.jobId&&!s.includes(c.jobId)||c.action==="start"&&o.status!=="stopped"&&o.status!=="error"||c.action==="stop"&&o.status!=="running"?o:{...o,status:c.action==="start"?"starting":"stopping",status_reason:null}}function Li(o){return o==="queued"||o==="running"}function zi(o){return o instanceof DOMException&&o.name==="AbortError"}function sr(o){const c=k.useRef(o);return k.useEffect(()=>{c.current=o},[o]),c}function Im(o,c){return o.length<=c?o:o.slice(o.length-c)}function Bm({job:o,downloading:c,onDownload:s}){const[d,p]=k.useState(""),[g,x]=k.useState(0),S=sr(o),_=k.useRef(null),R=160,N=Li(o.status)?[o.job_id]:[],b=k.useCallback(async C=>{try{const A=await(await fetch(Sm(S.current.job_id,R),{credentials:"include",signal:C})).text();p(A.trim())}catch(I){zi(I)||p("")}},[S]);if(k.useEffect(()=>{const C=new AbortController;return b(C.signal),()=>C.abort()},[o.job_id,b]),Ia(N,k.useCallback((C,I)=>{if(C.job_id===o.job_id){if((I==null?void 0:I.type)==="job.log"){const A=typeof I.line=="string"?I.line:"";if(!A)return;p(U=>Im([...U?U.split(`
`):[],A],R).join(`
`));return}if(!Li(C.status)){const A=new AbortController;b(A.signal)}}},[o.job_id,b])),k.useEffect(()=>{const C=_.current;if(!C)return;const I=()=>{const U=C.scrollHeight>C.clientHeight+1?Math.max(0,C.offsetWidth-C.clientWidth):0;x(te=>te===U?te:U)};if(I(),typeof ResizeObserver>"u")return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I);const A=new ResizeObserver(()=>{I()});return A.observe(C),()=>{A.disconnect()}},[d]),!d)return null;const T={"--job-log-scrollbar-width":`${g}px`};return u.jsxs("div",{className:"job-log-preview",style:T,children:[s?u.jsx("button",{className:"job-log-download",type:"button","aria-label":c?"Downloading log":"Download log",title:c?"Downloading log":"Download full log",disabled:!!c,onClick:()=>{s(o)},children:u.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M8 2.5v7"}),u.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),u.jsx("path",{d:"M3 13.5h10"})]})}):null,u.jsx("div",{className:"job-log-frame",children:u.jsx("pre",{ref:_,children:d})})]})}function Mi(){const o=Ri.useContext(Yc);if(!o)throw new Error("App context is unavailable.");return o}function ad(o,c,s,d){const p=k.useRef(o);k.useEffect(()=>{p.current=o},[o]),k.useEffect(()=>{if(c===null)return;let g=!1,x=null,S=null,_=!1,R=!1;const N=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??c:c,b=I=>{g||I===null||I===void 0||(x!==null&&window.clearTimeout(x),x=window.setTimeout(()=>{x=null,T()},I))},T=async()=>{if(!(g||_)){_=!0,S=new AbortController;try{await p.current(S.signal),g||b(N())}catch(I){if(!g&&!zi(I)){const A=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??c:(d==null?void 0:d.errorDelay)??c;b(A)}}finally{_=!1,S=null,!g&&R&&!document.hidden&&(R=!1,b(0))}}},C=()=>{if(!document.hidden){if(_){R=!0;return}b(0)}};return document.addEventListener("visibilitychange",C),T(),()=>{g=!0,x!==null&&window.clearTimeout(x),document.removeEventListener("visibilitychange",C),S==null||S.abort()}},s)}function Ia(o,c){const s=k.useRef(c),d=k.useMemo(()=>Array.from(new Set(o)).sort().join("\0"),[o]);k.useEffect(()=>{s.current=c},[c]),k.useEffect(()=>{if(!d)return;const p=d.split("\0"),g=new Set(p),x=new AbortController;let S=!1;const _=new EventSource("/api/v1/events/jobs"),R=async()=>{const T=await Promise.allSettled(p.map(C=>st(`/api/v1/jobs/${C}`,{signal:x.signal})));if(!S)for(const C of T)C.status==="fulfilled"&&s.current(C.value)},N=T=>{const C=T;try{const I=JSON.parse(C.data);if(!g.has(I.job_id))return;s.current({job_id:I.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:I.line})}catch{}},b=T=>{const C=T;try{const I=JSON.parse(C.data);g.has(I.job_id)&&s.current(I,{type:"job.updated"})}catch{}};return R(),_.addEventListener("job.log",N),_.addEventListener("job.updated",b),()=>{S=!0,x.abort(),_.removeEventListener("job.log",N),_.removeEventListener("job.updated",b),_.close()}},[d])}function Am({children:o}){const[c,s]=k.useState(null),[d,p]=k.useState(!0),[g,x]=k.useState(()=>{const N=window.localStorage.getItem("bulletjournal-controller-theme");return N==="light"||N==="dark"||N==="system"?N:"system"}),S=k.useCallback(async()=>{try{const N=await st("/api/v1/session/current",{method:"GET"});s(N)}catch{s({authenticated:!1,user:null})}finally{p(!1)}},[]),_=k.useCallback(async()=>{await st("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);k.useEffect(()=>{S()},[S]),k.useEffect(()=>{const N=document.documentElement,b=window.matchMedia("(prefers-color-scheme: dark)");function T(){const C=g==="system"?b.matches?"dark":"light":g;N.dataset.theme=C,N.style.colorScheme=C}return T(),window.localStorage.setItem("bulletjournal-controller-theme",g),b.addEventListener("change",T),()=>b.removeEventListener("change",T)},[g]);const R=k.useMemo(()=>({session:c,sessionLoading:d,refreshSession:S,signOut:_,themeMode:g,setThemeMode:x}),[S,c,d,_,g]);return u.jsx(Yc.Provider,{value:R,children:o})}function Dc({children:o}){const{session:c,sessionLoading:s}=Mi(),d=Qt();return s?u.jsx("div",{className:"loading-screen",children:u.jsxs("div",{className:"loading-card",children:[u.jsx("h2",{children:"Preparing your controller workspace"}),u.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):c!=null&&c.authenticated?u.jsx(u.Fragment,{children:o}):u.jsx(Gc,{to:"/login",replace:!0,state:{from:d.pathname}})}function $m(){const{session:o,refreshSession:c}=Mi(),s=xn(),d=Qt(),[p,g]=k.useState(""),[x,S]=k.useState(""),[_,R]=k.useState(null),[N,b]=k.useState(!1);k.useEffect(()=>{o!=null&&o.authenticated&&s("/",{replace:!0})},[s,o]);async function T(C){C.preventDefault(),b(!0),R(null);try{await st("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:p,password:x})}),await c();const I=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(I||"/",{replace:!0})}catch(I){R(I instanceof Error?I.message:"Login failed.")}finally{b(!1)}}return u.jsx("div",{className:"login-shell",children:u.jsxs("section",{className:"login-panel",children:[u.jsx("h1",{children:"BulletJournal login"}),u.jsx("hr",{className:"login-divider"}),u.jsxs("form",{className:"layout-grid",onSubmit:T,children:[u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"username",children:"Username"}),u.jsx("input",{id:"username",value:p,onChange:C=>g(C.target.value),autoComplete:"username",required:!0})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"password",children:"Password"}),u.jsx("input",{id:"password",type:"password",value:x,onChange:C=>S(C.target.value),autoComplete:"current-password",required:!0})]}),_?u.jsx("div",{className:"error-banner",children:_}):null,u.jsx("div",{className:"button-row",children:u.jsx("button",{className:"button",type:"submit",disabled:N,children:N?"Signing in...":"Login"})})]})]})})}function Wm(){const{session:o,signOut:c,themeMode:s,setThemeMode:d}=Mi();xn();const[p,g]=k.useState(!1);return k.useEffect(()=>{if(!p)return;function x(){g(!1)}return window.addEventListener("click",x),()=>window.removeEventListener("click",x)},[p]),u.jsxs("div",{className:"footer-theme",children:[u.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":p,onClick:x=>{x.stopPropagation(),g(S=>!S)},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[u.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),u.jsx("path",{d:"M7.5 10.5h.01"}),u.jsx("path",{d:"M9.5 7.5h.01"}),u.jsx("path",{d:"M14.5 7.5h.01"}),u.jsx("path",{d:"M16.5 10.5h.01"})]})}),p?u.jsx("div",{className:"theme-popover",role:"menu",onClick:x=>x.stopPropagation(),children:["light","dark","system"].map(x=>u.jsx("button",{className:pt("theme-option",s===x&&"active"),type:"button",role:"menuitemradio","aria-checked":s===x,onClick:()=>{d(x),g(!1)},children:x==="light"?"Light":x==="dark"?"Dark":"System"},x))}):null]})}function Ni({children:o,footerMetrics:c=null}){var g,x,S;const{session:s,signOut:d}=Mi(),p=xn();return u.jsxs("div",{className:"app-shell",children:[o,u.jsxs("footer",{className:"app-footer",children:[u.jsxs("div",{className:"footer-left",children:[u.jsxs("div",{className:"footer-session",children:[u.jsx("span",{className:"muted",children:"Signed in as"}),u.jsx("strong",{children:((g=s==null?void 0:s.user)==null?void 0:g.display_name)||((x=s==null?void 0:s.user)==null?void 0:x.username)||"Unknown user"}),u.jsxs("span",{className:"muted",children:["(",((S=s==null?void 0:s.user)==null?void 0:S.username)||"unknown",")"]})]}),u.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),p("/login",{replace:!0})},children:"Logout"})]}),u.jsxs("div",{className:"footer-right",children:[c,u.jsx(Wm,{})]})]})]})}function Vm(){const[o,c]=k.useState([]),[s,d]=k.useState(null),[p,g]=k.useState(!0),[x,S]=k.useState(null),[_,R]=k.useState(null),[N,b]=k.useState([]),[T,C]=k.useState({}),[I,A]=k.useState({}),[U,te]=k.useState([]),[ue,oe]=k.useState(!1),pe=xn(),we=Qt(),Te=sr(I),ke=k.useCallback(async W=>{try{const[Y,K]=await Promise.all([st("/api/v1/projects",{signal:W}),st("/api/v1/system/info",{signal:W})]);c(Y),d(K),te(Z=>Z.filter(le=>Y.some(ae=>ae.project_id===le))),S(null)}catch(Y){zi(Y)||S(Y instanceof Error?Y.message:"Failed to load dashboard.")}finally{g(!1)}},[]);ad(W=>ke(W),N.length>0?5e3:15e3,[N.length,ke],{hiddenDelay:6e4,errorDelay:15e3}),k.useEffect(()=>{if(!we.state||typeof we.state!="object")return;const W=we.state,Y=typeof W.archivedProjectId=="string"?W.archivedProjectId:null,K=typeof W.archiveJobId=="string"?W.archiveJobId:null,Z=typeof W.deletedProjectId=="string"?W.deletedProjectId:null,le=typeof W.deleteJobId=="string"?W.deleteJobId:null,ae=Y||Z,D=K||le,G=K?"archive":le?"delete":null;!ae||!D||!G||(te(B=>Array.from(new Set([...B,ae]))),A(B=>({...B,[D]:{projectId:ae,verb:G}})),b(B=>Array.from(new Set([...B,D]))),ke(),pe(we.pathname,{replace:!0,state:null}))},[ke,we.pathname,we.state,pe]);const Be=k.useCallback(W=>{if(Li(W.status)){b(K=>K.includes(W.job_id)?K:[...K,W.job_id]);return}b(K=>K.filter(Z=>Z!==W.job_id));const Y=Te.current[W.job_id];Y&&(A(K=>{const Z={...K};return delete Z[W.job_id],Z}),W.status!=="succeeded"&&(te(K=>K.filter(Z=>Z!==Y.projectId)),R(W.error_message||`Failed to ${Y.verb} project ${Y.projectId}.`))),ke()},[ke]);Ia(N,Be),k.useEffect(()=>{C(W=>{const Y=Object.entries(W).filter(([,K])=>!K.jobId||N.includes(K.jobId));return Y.length===Object.keys(W).length?W:Object.fromEntries(Y)})},[N]);const He=k.useMemo(()=>o.filter(W=>!U.includes(W.project_id)).map(W=>od(W,T[W.project_id]||null,N)),[N,U,T,o]),Ze=k.useMemo(()=>{const W={Running:[],Stopped:[],Error:[]};for(const Y of He)Y.status==="running"||Y.status==="starting"||Y.status==="stopping"?W.Running.push(Y):Y.status==="error"?W.Error.push(Y):W.Stopped.push(Y);return W},[He]);async function wt(W,Y){C(K=>({...K,[W]:{action:Y}}));try{R(null);const K=await st(`/api/v1/projects/${W}/${Y}`,{method:"POST"});K.job?(C(Z=>({...Z,[W]:{action:Y,jobId:K.job.job_id}})),b(Z=>Array.from(new Set([...Z,K.job.job_id])))):C(Z=>{const le={...Z};return delete le[W],le}),K.already_running&&(C(Z=>{const le={...Z};return delete le[W],le}),R("Project is already running.")),K.already_stopped&&(C(Z=>{const le={...Z};return delete le[W],le}),R("Project is already stopped.")),await ke()}catch(K){C(Z=>{const le={...Z};return delete le[W],le}),R(K instanceof Error?K.message:`Failed to ${Y} project.`)}}return u.jsxs(Ni,{footerMetrics:u.jsx(Um,{systemInfo:s}),children:[x?u.jsx("div",{className:"error-banner",children:x}):null,_?u.jsx("div",{className:"error-banner",children:_}):null,u.jsx("div",{className:"dashboard-grid",children:u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsxs("div",{className:"panel-head-row",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"BulletJournal projects"}),N.length>0?u.jsxs("span",{className:"muted",children:["Watching ",N.length," active job",N.length===1?"":"s"]}):null]}),u.jsxs("button",{className:"button",type:"button",onClick:()=>oe(!0),children:[u.jsx(ym,{width:22,height:22}),u.jsx("span",{children:"New project"})]})]})}),u.jsxs("div",{className:"panel-body",children:[p?u.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,u.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(W=>{const Y=Ze[W];return u.jsxs("section",{children:[u.jsxs("div",{className:"group-header",children:[u.jsxs("div",{className:"group-header-title",children:[u.jsx("h3",{children:W}),u.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),u.jsxs("span",{className:"muted",children:[Y.length," project",Y.length===1?"":"s"]})]}),Y.length===0?u.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):u.jsx("div",{className:"project-cards",children:Y.map(K=>{const Z=id(K),le=ld(K),ae=Z.label==="Start"||Z.label==="Stop"||Z.label==="Starting..."||Z.label==="Stopping...";return u.jsxs("article",{className:pt("project-card",rd(K)),children:[u.jsx("div",{className:"project-card-header",children:u.jsxs("div",{className:"project-card-top",children:[u.jsx("h4",{children:K.project_id}),u.jsx("hr",{className:"project-card-divider"})]})}),u.jsxs("div",{className:"meta-grid",children:[u.jsx("div",{className:"metrics-row",children:le.map(D=>u.jsxs("div",{className:pt("meta-item","metric-chip",D.tone),children:[u.jsx("span",{children:D.label}),u.jsx("strong",{children:D.value})]},D.label))}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Last edit"}),K.last_edit_at?u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:sl(K.last_edit_at)}),u.jsx("span",{className:"muted",children:al(K.last_edit_at)})]}):u.jsx("strong",{children:"-"})]})]}),u.jsxs("div",{className:"quick-actions",children:[nd(K)?u.jsx("a",{className:"button-open icon-action",href:`/p/${K.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:u.jsx(Zc,{width:18,height:18})}):null,u.jsx("button",{className:pt(Z.className,ae&&"icon-action"),type:"button",disabled:Z.disabled,"aria-label":Z.label,title:Z.label,onClick:()=>{Z.action&&wt(K.project_id,Z.action)},children:ae?u.jsxs(u.Fragment,{children:[Z.action==="start"||Z.label==="Starting..."?u.jsx(qc,{width:18,height:18}):null,Z.action==="stop"||Z.label==="Stopping..."?u.jsx(ed,{width:18,height:18}):null]}):Z.label}),u.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>pe(`/projects/${K.project_id}`),children:u.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},K.project_id)})})]},W)})})]})]})}),ue&&s?u.jsx(Hm,{systemInfo:s,onClose:()=>oe(!1)}):null]})}function Hm({systemInfo:o,onClose:c}){const s=xn(),[d,p]=k.useState({project_id:"",custom_requirements_text:o.default_dependencies_text,cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!0}),[g,x]=k.useState(!1),[S,_]=k.useState(null),[R,N]=k.useState(!1);async function b(T){T.preventDefault(),x(!0),_(null);try{const C=await st("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:d.project_id,custom_requirements_text:d.custom_requirements_text,cpu_limit_millis:Pa(d.cpu_limit_input),memory_limit_bytes:Ci(d.memory_limit_input),disk_soft_limit_bytes:La(d.disk_soft_limit_input),gpu_enabled:d.gpu_enabled})});s(`/projects/${C.project.project_id}`,{state:{createdProjectId:C.project.project_id,createJobId:C.job.job_id}})}catch(C){_(C instanceof Error?C.message:"Failed to create project.")}finally{x(!1)}}return u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{g||c()},children:u.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:T=>T.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"Provision a managed BulletJournal runtime"}),u.jsx("p",{className:"section-copy",children:"Project ids become both filesystem roots and runtime identifiers. Creation installs dependencies and starts the container in the background after the project record is created."})]}),u.jsx("button",{className:"close-button",type:"button",onClick:c,"aria-label":"Close dialog",disabled:g,children:"×"})]}),u.jsx("div",{className:"modal-body",children:u.jsxs("form",{className:"layout-grid",onSubmit:b,children:[u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),u.jsx("input",{id:"create-project-id",value:d.project_id,onChange:T=>p(C=>({...C,project_id:T.target.value})),placeholder:"study-a",required:!0})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),u.jsx("textarea",{id:"create-dependencies",value:d.custom_requirements_text,onChange:T=>p(C=>({...C,custom_requirements_text:T.target.value}))}),u.jsx("span",{className:"muted",children:"The dependency text starts from the controller defaults. Edit the BulletJournal line there if you want a different package source or pinned version."})]}),u.jsxs("div",{className:"field-full collapsible-panel",children:[u.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>N(T=>!T),children:[u.jsxs("span",{className:"status-stack",children:[u.jsx("strong",{children:"Runtime limits"}),u.jsxs("span",{className:"muted",children:["CPU ",jm(Pa(d.cpu_limit_input))," · Memory ",td(Ci(d.memory_limit_input))," · Disk ",km(La(d.disk_soft_limit_input))," · GPU ",d.gpu_enabled?"On":"Off"]})]}),u.jsx("span",{children:R?"Hide":"Edit"})]}),R?u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),u.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:d.cpu_limit_input,onChange:T=>p(C=>({...C,cpu_limit_input:T.target.value})),placeholder:"Unlimited"}),u.jsx("span",{className:"muted",children:"Leave blank for no CPU limit."})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),u.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:d.memory_limit_input,onChange:T=>p(C=>({...C,memory_limit_input:T.target.value})),placeholder:"Unlimited"}),u.jsx("span",{className:"muted",children:"Leave blank for no memory limit."})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),u.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:d.disk_soft_limit_input,onChange:T=>p(C=>({...C,disk_soft_limit_input:T.target.value})),placeholder:"Unlimited"}),u.jsx("span",{className:"muted",children:"Used for UI warnings only. It does not enforce a real container disk cap."})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{children:"GPU access"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"create-gpu",type:"checkbox",checked:d.gpu_enabled,onChange:T=>p(C=>({...C,gpu_enabled:T.target.checked}))}),u.jsx("label",{htmlFor:"create-gpu",children:"Enable GPU if supported on the host"})]})]})]}):null]})]}),S?u.jsx("div",{className:"error-banner",children:S}):null,u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:"button",type:"submit",disabled:g,children:g?"Queueing...":"Create Project"}),u.jsx("button",{className:"button-secondary",type:"button",onClick:c,disabled:g,children:"Cancel"})]})]})})]})})}function Qm({kind:o,projectId:c,submitting:s,typedProjectId:d,setTypedProjectId:p,onClose:g,onConfirm:x}){const S=o==="archive",_=S?"Archive project?":"Delete project?",R=S?"This project will be moved to the archive directory and will be removed from active projects. Archived projects can only be restored via a manual operation.":"This project will be permanently removed and cannot be restored.",N=S?"Archive project":"Delete project",b=S?"button-warning":"button-danger",T=s||d!==c;return u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{s||g()},children:u.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"archive-project-title",onClick:C=>C.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsxs("div",{children:[u.jsx("h2",{id:"archive-project-title",children:_}),u.jsx("p",{className:"section-copy",children:R})]}),u.jsx("button",{className:"close-button",type:"button",onClick:g,"aria-label":"Close dialog",disabled:s,children:"×"})]}),u.jsx("div",{className:"modal-body",children:u.jsxs("div",{className:"layout-grid",children:[u.jsxs("div",{className:"field-full",children:[u.jsxs("label",{htmlFor:"project-removal-confirmation",children:["Type the project ID ",u.jsx("span",{className:"inline-project-id",children:c})," to proceed"]}),u.jsx("input",{id:"project-removal-confirmation",value:d,onChange:C=>p(C.target.value),autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,disabled:s})]}),u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:b,type:"button",onClick:x,disabled:T,children:s?`${N.split(" ")[0]}ing...`:N}),u.jsx("button",{className:"button-secondary",type:"button",onClick:g,disabled:s,children:"Cancel"})]})]})})]})})}function Jm(){const{projectId:c=""}=Vp(),s=xn(),d=Qt(),p=k.useRef(null),[g,x]=k.useState(null),[S,_]=k.useState(!0),[R,N]=k.useState(null),[b,T]=k.useState([]),[C,I]=k.useState(null),[A,U]=k.useState({custom_requirements_text:"",mark_all_artifacts_stale:!0,restart_if_running:!0}),[te,ue]=k.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[oe,pe]=k.useState(!1),[we,Te]=k.useState(!1),[ke,Be]=k.useState(!1),[He,Ze]=k.useState(!1),[wt,W]=k.useState(""),[Y,K]=k.useState(null),[Z,le]=k.useState(!1),[ae,D]=k.useState(!1),[G,B]=k.useState(null),[v,P]=k.useState([]),[ne,re]=k.useState(!1),[se,ce]=k.useState(!1),[ve,de]=k.useState(!1),[fe,Ae]=k.useState(null),[Ye,pr]=k.useState(null),kt=!!g&&A.custom_requirements_text!==g.custom_requirements_text,Dn=sr(c),mr=sr(kt),hr=sr(se),Un=sr(ve),Jt=k.useCallback(async E=>{try{const z=await st(`/api/v1/projects/${Dn.current}`,{signal:E});x(z),!mr.current&&!hr.current&&U(ye=>({custom_requirements_text:z.custom_requirements_text,mark_all_artifacts_stale:ye.mark_all_artifacts_stale,restart_if_running:ye.restart_if_running})),Un.current||ue({cpu_limit_input:Oc(z.limits.cpu_limit_millis),memory_limit_input:Ra(z.limits.memory_limit_bytes),disk_soft_limit_input:Fc(z.limits.disk_soft_limit_bytes),gpu_enabled:z.limits.gpu_enabled}),N(null)}catch(z){zi(z)||N(z instanceof Error?z.message:"Failed to load project.")}finally{_(!1)}},[mr,hr,Un,Dn]);ad(E=>Jt(E),kt||se||ve?null:b.length>0?5e3:15e3,[b.length,kt,se,Jt,ve],{hiddenDelay:6e4,errorDelay:15e3}),k.useEffect(()=>{re(!1)},[c]),k.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const E=d.state,z=typeof E.createdProjectId=="string"?E.createdProjectId:null,ye=typeof E.createJobId=="string"?E.createJobId:null;z!==c||!ye||(T($e=>Array.from(new Set([...$e,ye]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,c]),k.useEffect(()=>{!(C!=null&&C.jobId)||b.includes(C.jobId)||I(null)},[b,C]),k.useEffect(()=>{if((fe==null?void 0:fe.tone)!=="success")return;const E=window.setTimeout(()=>{Ae(z=>(z==null?void 0:z.tone)==="success"?null:z)},3500);return()=>window.clearTimeout(E)},[fe]),k.useEffect(()=>{if((Ye==null?void 0:Ye.tone)!=="success")return;const E=window.setTimeout(()=>{pr(z=>(z==null?void 0:z.tone)==="success"?null:z)},3500);return()=>window.clearTimeout(E)},[Ye]),k.useEffect(()=>{if(!ae)return;function E(z){var ye;(ye=p.current)!=null&&ye.contains(z.target)||D(!1)}return window.addEventListener("click",E),()=>window.removeEventListener("click",E)},[ae]);const gr=k.useCallback(E=>{if(Li(E.status)){T(z=>z.includes(E.job_id)?z:[...z,E.job_id]);return}T(z=>z.filter(ye=>ye!==E.job_id)),ce(!1),Jt()},[Jt]);Ia(b,gr);async function wn(E){I({action:E});try{const z=await st(`/api/v1/projects/${c}/${E}`,{method:"POST"});z.job?(I({action:E,jobId:z.job.job_id}),T(ye=>Array.from(new Set([...ye,z.job.job_id])))):z.already_running?(I(null),N("Project is already running.")):z.already_stopped?(I(null),N("Project is already stopped.")):I(null),await Jt()}catch(z){I(null),N(z instanceof Error?z.message:`Failed to ${E}.`)}}async function Kt(E){E.preventDefault(),pe(!0),N(null);const z=kt;try{const ye=await st(`/api/v1/projects/${c}/${z?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(z?A:{restart_if_running:A.restart_if_running,mark_all_artifacts_stale:A.mark_all_artifacts_stale})});if(!ye.job)throw new Error("Environment action did not return a queued job.");const $e=ye.job;T(et=>Array.from(new Set([...et,$e.job_id]))),z&&ce(!0),Ae({tone:"success",message:"Saved"})}catch(ye){Ae(null),N(ye instanceof Error?ye.message:"Failed to queue environment action.")}finally{pe(!1)}}async function vr(E){E.preventDefault(),Te(!0),N(null);try{const z=await st(`/api/v1/projects/${c}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:Pa(te.cpu_limit_input),memory_limit_bytes:Ci(te.memory_limit_input),disk_soft_limit_bytes:La(te.disk_soft_limit_input),gpu_enabled:te.gpu_enabled})});x(z),ue({cpu_limit_input:Oc(z.limits.cpu_limit_millis),memory_limit_input:Ra(z.limits.memory_limit_bytes),disk_soft_limit_input:Fc(z.limits.disk_soft_limit_bytes),gpu_enabled:z.limits.gpu_enabled}),de(!1),pr({tone:"success",message:"Saved"})}catch(z){N(z instanceof Error?z.message:"Failed to update limits.")}finally{Te(!1)}}async function dl(){Be(!0);try{const E=await st(`/api/v1/projects/${c}`,{method:"DELETE"});E.job&&T(z=>Array.from(new Set([...z,E.job.job_id]))),le(!1),K(null),W(""),s("/",{replace:!0,state:E.job?{deletedProjectId:c,deleteJobId:E.job.job_id}:null})}catch(E){N(E instanceof Error?E.message:"Failed to delete project.")}finally{Be(!1)}}async function fl(){Ze(!0),N(null);try{const E=await st(`/api/v1/projects/${c}/archive`,{method:"POST"});E.job&&T(z=>Array.from(new Set([...z,E.job.job_id]))),le(!1),K(null),W(""),s("/",{replace:!0,state:E.job?{archivedProjectId:c,archiveJobId:E.job.job_id}:null})}catch(E){N(E instanceof Error?E.message:"Failed to archive project.")}finally{Ze(!1)}}async function pl(E){P(z=>z.includes(E.job_id)?z:[...z,E.job_id]);try{const z=await fetch(bm(E.job_id),{credentials:"include"});if(!z.ok)throw new Error(`Failed to download log (${z.status}).`);const ye=await z.text(),$e=new Blob([ye],{type:"text/plain;charset=utf-8"}),et=window.URL.createObjectURL($e),tt=document.createElement("a");tt.href=et,tt.download=Em(E),document.body.appendChild(tt),tt.click(),tt.remove(),window.URL.revokeObjectURL(et)}catch(z){N(z instanceof Error?z.message:"Failed to download job log.")}finally{P(z=>z.filter(ye=>ye!==E.job_id))}}async function ml(){N(null);try{const E=await fetch(Cm(c),{credentials:"include"});if(!E.ok){const tt=(E.headers.get("content-type")||"").includes("application/json")?await E.json():await E.text(),Lt=typeof tt=="object"&&tt!==null&&"detail"in tt?String(tt.detail):E.statusText;throw new Error(Lt||"Failed to download lockfile.")}const z=await E.blob(),ye=window.URL.createObjectURL(z),$e=document.createElement("a");$e.href=ye,$e.download=`${c}__uv.lock`,document.body.appendChild($e),$e.click(),$e.remove(),window.URL.revokeObjectURL(ye)}catch(E){N(E instanceof Error?E.message:"Failed to download lockfile.")}}async function kn(E){N(null),B(E);try{const z=await fetch(Pm(c,E),{credentials:"include"});if(!z.ok){const Lt=(z.headers.get("content-type")||"").includes("application/json")?await z.json():await z.text(),gl=typeof Lt=="object"&&Lt!==null&&"detail"in Lt?String(Lt.detail):z.statusText;throw new Error(gl||"Failed to export project.")}const ye=await z.blob(),$e=window.URL.createObjectURL(ye),et=document.createElement("a");et.href=$e,et.download=Rm(z)||Lm(c,E),document.body.appendChild(et),et.click(),et.remove(),window.URL.revokeObjectURL($e),D(!1)}catch(z){N(z instanceof Error?z.message:"Failed to export project.")}finally{B(null)}}if(S)return u.jsx(Ni,{children:u.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!g)return u.jsx(Ni,{children:u.jsx("div",{className:"error-banner",children:R||"Project was not found."})});const me=od(g,C,b),Fe=id(me),jn=kt?"Save and reinstall":"Reinstall environment",_n=kt?"Saving and reinstalling...":"Queueing reinstall...",Oi=ld(me),yr=Fe.label==="Start"||Fe.label==="Stop"||Fe.label==="Starting..."||Fe.label==="Stopping...",hl=me.status==="running"||me.status==="starting"?"Started at":"Stopped at",xr=me.status==="running"||me.status==="starting"?me.runtime.runtime_started_at:me.runtime.runtime_stopped_at,jt=me.status==="running"||me.status==="starting"||me.status==="stopping",wr=(fe==null?void 0:fe.tone)==="success"?"Saved":oe?_n:jn,kr=(Ye==null?void 0:Ye.tone)==="success"?"Saved":we?"Saving...":"Save limits",Ft=me.recent_jobs||[],jr=ne?Ft:Ft.slice(0,5),Gt=Ft.length>5&&!ne;return u.jsxs(Ni,{children:[u.jsx("div",{className:"topbar",children:u.jsxs("div",{className:"nav-pills",children:[u.jsx(gm,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:u.jsx(xm,{width:18,height:18})}),b.length>0?u.jsxs("span",{className:"badge",children:["Watching ",b.length," active job",b.length===1?"":"s"]}):null]})}),R?u.jsx("div",{className:"error-banner",children:R}):null,u.jsxs("div",{className:"project-detail-stack",children:[u.jsxs("section",{className:pt("project-detail-card",rd(me)),children:[u.jsxs("div",{className:"project-detail-header",children:[u.jsx("div",{className:"project-detail-title",children:u.jsx("h2",{children:me.project_id})}),u.jsx("div",{className:"project-detail-status",children:u.jsx("strong",{children:Tm(me)})})]}),u.jsxs("div",{className:"quick-actions",children:[nd(me)?u.jsx("a",{className:"button-open icon-action",href:`/p/${me.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:u.jsx(Zc,{width:18,height:18})}):null,u.jsx("button",{className:pt(Fe.className,yr&&"icon-action"),type:"button",disabled:Fe.disabled,"aria-label":Fe.label,title:Fe.label,onClick:()=>{Fe.action&&wn(Fe.action)},children:yr?u.jsxs(u.Fragment,{children:[Fe.action==="start"||Fe.label==="Starting..."?u.jsx(qc,{width:18,height:18}):null,Fe.action==="stop"||Fe.label==="Stopping..."?u.jsx(ed,{width:18,height:18}):null]}):Fe.label})]}),u.jsx("div",{className:"metrics-row",children:Oi.map(E=>u.jsxs("div",{className:pt("meta-item","metric-chip",E.tone),children:[u.jsx("span",{children:E.label}),u.jsx("strong",{children:E.value})]},E.label))}),u.jsxs("div",{className:"summary-grid",children:[u.jsxs("div",{className:"summary-block compact",children:[u.jsx("h3",{children:"Last edit"}),me.last_edit_at?u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:sl(me.last_edit_at)}),u.jsx("span",{className:"muted",children:al(me.last_edit_at)})]}):u.jsx("strong",{children:"-"})]}),u.jsxs("div",{className:"summary-block compact",children:[u.jsx("h3",{children:"Last run"}),me.last_run_finished_at?u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:sl(me.last_run_finished_at)}),u.jsx("span",{className:"muted",children:al(me.last_run_finished_at)})]}):u.jsx("strong",{children:"-"})]})]})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Project environment"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("form",{className:"project-env-grid",onSubmit:Kt,children:[u.jsx("div",{className:"environment-overview-card",children:u.jsxs("div",{className:"summary-grid",children:[u.jsxs("div",{className:"summary-block compact",children:[u.jsx("span",{className:"detail-label",children:"Python version"}),u.jsx("div",{className:"detail-value mono-copy",children:me.python_version})]}),u.jsx("div",{className:"summary-block compact",children:u.jsxs("div",{className:"lockfile-row compact",children:[u.jsxs("div",{className:"lockfile-meta",children:[u.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),u.jsx("code",{className:"mono-copy detail-value",children:me.lock_sha256||"Not recorded yet"})]}),u.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{ml()},children:u.jsx(wm,{width:18,height:18})})]})})]})}),u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),u.jsx("textarea",{id:"env-custom",value:A.custom_requirements_text,onChange:E=>{U(z=>({...z,custom_requirements_text:E.target.value}))}})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Restart behavior"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"env-restart",type:"checkbox",checked:A.restart_if_running,onChange:E=>{U(z=>({...z,restart_if_running:E.target.checked}))}}),u.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Artifact invalidation"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:A.mark_all_artifacts_stale,onChange:E=>{U(z=>({...z,mark_all_artifacts_stale:E.target.checked}))}}),u.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),u.jsx("div",{className:"button-row",children:u.jsx("button",{className:pt((fe==null?void 0:fe.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:oe,children:wr})})]})})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Container info"})}),u.jsxs("div",{className:"panel-body layout-grid",children:[u.jsxs("div",{className:"detail-meta-grid",children:[u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Container name"}),u.jsx("div",{className:"detail-value mono-copy",children:me.runtime.container_name||"Not running"})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Container id"}),u.jsx("div",{className:"detail-value mono-copy",children:zm(me.runtime.container_id)})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Host port"}),u.jsx("div",{className:"detail-value mono-copy",children:me.runtime.container_port??"Not running"})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:hl}),xr?u.jsxs("div",{className:"timestamp-pair",children:[u.jsx("strong",{children:sl(xr)}),u.jsx("span",{className:"muted",children:al(xr)})]}):u.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),u.jsxs("div",{className:"limits-card",children:[u.jsx("div",{className:"limits-card-header",children:u.jsx("div",{className:"status-stack",children:u.jsx("strong",{children:"Runtime limits"})})}),u.jsxs("form",{className:"field-grid",onSubmit:vr,children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),u.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.cpu_limit_input,onChange:E=>{de(!0),ue(z=>({...z,cpu_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:jt})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),u.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.memory_limit_input,onChange:E=>{de(!0),ue(z=>({...z,memory_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:jt})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),u.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.disk_soft_limit_input,onChange:E=>{de(!0),ue(z=>({...z,disk_soft_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:jt})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"GPU access"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"limits-gpu",type:"checkbox",checked:te.gpu_enabled,onChange:E=>{de(!0),ue(z=>({...z,gpu_enabled:E.target.checked}))},disabled:jt}),u.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU if supported on the host"})]})]}),u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:pt(jt?"button-neutral":(Ye==null?void 0:Ye.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:we||jt,children:kr}),jt?u.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Job history"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("div",{className:"jobs-list",children:[Ft.length===0?u.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,jr.map(E=>u.jsxs("article",{className:pt("job-row",Mm(E)),children:[u.jsxs("div",{className:"job-row-header",children:[u.jsxs("div",{className:"job-row-top",children:[u.jsx("strong",{children:E.job_type}),u.jsx("span",{className:"muted mono-copy",children:E.job_id})]}),u.jsx("strong",{children:Om(E)})]}),u.jsxs("div",{className:"job-row-meta",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Created"}),u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:sl(E.created_at)}),u.jsx("span",{className:"muted",children:al(E.created_at)})]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Duration"}),u.jsx("strong",{children:_m(E.started_at||E.created_at,E.finished_at)})]})]}),E.job_type==="create_project"||E.job_type==="update_environment"||E.job_type==="reinstall_environment"?u.jsx(Bm,{job:E,downloading:v.includes(E.job_id),onDownload:E.log_path?pl:void 0}):null,E.error_message?u.jsx("div",{className:"error-banner",children:E.error_message}):null]},E.job_id)),Gt?u.jsx("div",{className:"button-row centered jobs-list-footer",children:u.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>re(!0),children:["Show more jobs (",Ft.length," total)"]})}):null]})})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Project actions"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("div",{className:"button-row project-actions-row",children:[u.jsxs("div",{className:"action-menu",ref:p,children:[u.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":ae,disabled:!!G,onClick:E=>{E.stopPropagation(),D(z=>!z)},children:G?"Exporting...":"Export project"}),ae?u.jsxs("div",{className:"action-popover",role:"menu",onClick:E=>E.stopPropagation(),children:[u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:G!==null,onClick:()=>{kn("code_only")},children:u.jsx("strong",{children:"Code only"})}),u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:G!==null,onClick:()=>{kn("code_and_data")},children:u.jsx("strong",{children:"Code and data"})}),u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:G!==null,onClick:()=>{kn("full")},children:u.jsx("strong",{children:"Full"})})]}):null]}),u.jsx("button",{className:"button-warning",type:"button",onClick:()=>{K("archive"),W(""),le(!0)},disabled:He||ke,children:He?"Archiving...":"Archive project"}),u.jsx("button",{className:"button-danger",type:"button",onClick:()=>{K("delete"),W(""),le(!0)},disabled:ke||He,children:ke?"Deleting...":"Delete project"})]})})]})]}),Z&&Y?u.jsx(Qm,{kind:Y,projectId:c,submitting:Y==="archive"?He:ke,typedProjectId:wt,setTypedProjectId:W,onClose:()=>{le(!1),K(null),W("")},onConfirm:()=>{if(Y==="archive"){fl();return}dl()}}):null]})}function Km(){return u.jsxs(om,{children:[u.jsx(ol,{path:"/login",element:u.jsx($m,{})}),u.jsx(ol,{path:"/projects/:projectId",element:u.jsx(Dc,{children:u.jsx(Jm,{})})}),u.jsx(ol,{path:"/",element:u.jsx(Dc,{children:u.jsx(Vm,{})})}),u.jsx(ol,{path:"*",element:u.jsx(Gc,{to:"/",replace:!0})})]})}function Gm(){return u.jsx(pm,{children:u.jsx(Am,{children:u.jsx(Km,{})})})}pp.createRoot(Ua).render(u.jsx(Ri.StrictMode,{children:u.jsx(Gm,{})}));
