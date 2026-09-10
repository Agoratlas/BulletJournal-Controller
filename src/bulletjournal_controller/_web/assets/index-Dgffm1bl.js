function cp(o,c){for(var s=0;s<c.length;s++){const d=c[s];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(o,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function s(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=s(p);fetch(p.href,h)}})();function Gc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var La={exports:{}},xl={},Ta={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function dp(){if(Nc)return ce;Nc=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),S=Symbol.iterator;function D(v){return v===null||typeof v!="object"?null:(v=S&&v[S]||v["@@iterator"],typeof v=="function"?v:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function M(v,R,se){this.props=v,this.context=R,this.refs=A,this.updater=se||O}M.prototype.isReactComponent={},M.prototype.setState=function(v,R){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,R,"setState")},M.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ae(){}ae.prototype=M.prototype;function ue(v,R,se){this.props=v,this.context=R,this.refs=A,this.updater=se||O}var ie=ue.prototype=new ae;ie.constructor=ue,I(ie,M.prototype),ie.isPureReactComponent=!0;var G=Array.isArray,Z=Object.prototype.hasOwnProperty,xe={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function we(v,R,se){var oe,fe={},pe=null,ve=null;if(R!=null)for(oe in R.ref!==void 0&&(ve=R.ref),R.key!==void 0&&(pe=""+R.key),R)Z.call(R,oe)&&!Re.hasOwnProperty(oe)&&(fe[oe]=R[oe]);var he=arguments.length-2;if(he===1)fe.children=se;else if(1<he){for(var ke=Array(he),We=0;We<he;We++)ke[We]=arguments[We+2];fe.children=ke}if(v&&v.defaultProps)for(oe in he=v.defaultProps,he)fe[oe]===void 0&&(fe[oe]=he[oe]);return{$$typeof:o,type:v,key:pe,ref:ve,props:fe,_owner:xe.current}}function ut(v,R){return{$$typeof:o,type:v.type,key:R,ref:v.ref,props:v.props,_owner:v._owner}}function $e(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function gt(v){var R={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(se){return R[se]})}var Qe=/\/+/g;function W(v,R){return typeof v=="object"&&v!==null&&v.key!=null?gt(""+v.key):R.toString(36)}function ne(v,R,se,oe,fe){var pe=typeof v;(pe==="undefined"||pe==="boolean")&&(v=null);var ve=!1;if(v===null)ve=!0;else switch(pe){case"string":case"number":ve=!0;break;case"object":switch(v.$$typeof){case o:case c:ve=!0}}if(ve)return ve=v,fe=fe(ve),v=oe===""?"."+W(ve,0):oe,G(fe)?(se="",v!=null&&(se=v.replace(Qe,"$&/")+"/"),ne(fe,R,se,"",function(We){return We})):fe!=null&&($e(fe)&&(fe=ut(fe,se+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(Qe,"$&/")+"/")+v)),R.push(fe)),1;if(ve=0,oe=oe===""?".":oe+":",G(v))for(var he=0;he<v.length;he++){pe=v[he];var ke=oe+W(pe,he);ve+=ne(pe,R,se,ke,fe)}else if(ke=D(v),typeof ke=="function")for(v=ke.call(v),he=0;!(pe=v.next()).done;)pe=pe.value,ke=oe+W(pe,he++),ve+=ne(pe,R,se,ke,fe);else if(pe==="object")throw R=String(v),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ve}function X(v,R,se){if(v==null)return v;var oe=[],fe=0;return ne(v,oe,"","",function(pe){return R.call(se,pe,fe++)}),oe}function q(v){if(v._status===-1){var R=v._result;R=R(),R.then(function(se){(v._status===0||v._status===-1)&&(v._status=1,v._result=se)},function(se){(v._status===0||v._status===-1)&&(v._status=2,v._result=se)}),v._status===-1&&(v._status=0,v._result=R)}if(v._status===1)return v._result.default;throw v._result}var re={current:null},U={transition:null},H={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:U,ReactCurrentOwner:xe};function B(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:X,forEach:function(v,R,se){X(v,function(){R.apply(this,arguments)},se)},count:function(v){var R=0;return X(v,function(){R++}),R},toArray:function(v){return X(v,function(R){return R})||[]},only:function(v){if(!$e(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ce.Component=M,ce.Fragment=s,ce.Profiler=p,ce.PureComponent=ue,ce.StrictMode=d,ce.Suspense=j,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ce.act=B,ce.cloneElement=function(v,R,se){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var oe=I({},v.props),fe=v.key,pe=v.ref,ve=v._owner;if(R!=null){if(R.ref!==void 0&&(pe=R.ref,ve=xe.current),R.key!==void 0&&(fe=""+R.key),v.type&&v.type.defaultProps)var he=v.type.defaultProps;for(ke in R)Z.call(R,ke)&&!Re.hasOwnProperty(ke)&&(oe[ke]=R[ke]===void 0&&he!==void 0?he[ke]:R[ke])}var ke=arguments.length-2;if(ke===1)oe.children=se;else if(1<ke){he=Array(ke);for(var We=0;We<ke;We++)he[We]=arguments[We+2];oe.children=he}return{$$typeof:o,type:v.type,key:fe,ref:pe,props:oe,_owner:ve}},ce.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:h,_context:v},v.Consumer=v},ce.createElement=we,ce.createFactory=function(v){var R=we.bind(null,v);return R.type=v,R},ce.createRef=function(){return{current:null}},ce.forwardRef=function(v){return{$$typeof:b,render:v}},ce.isValidElement=$e,ce.lazy=function(v){return{$$typeof:C,_payload:{_status:-1,_result:v},_init:q}},ce.memo=function(v,R){return{$$typeof:P,type:v,compare:R===void 0?null:R}},ce.startTransition=function(v){var R=U.transition;U.transition={};try{v()}finally{U.transition=R}},ce.unstable_act=B,ce.useCallback=function(v,R){return re.current.useCallback(v,R)},ce.useContext=function(v){return re.current.useContext(v)},ce.useDebugValue=function(){},ce.useDeferredValue=function(v){return re.current.useDeferredValue(v)},ce.useEffect=function(v,R){return re.current.useEffect(v,R)},ce.useId=function(){return re.current.useId()},ce.useImperativeHandle=function(v,R,se){return re.current.useImperativeHandle(v,R,se)},ce.useInsertionEffect=function(v,R){return re.current.useInsertionEffect(v,R)},ce.useLayoutEffect=function(v,R){return re.current.useLayoutEffect(v,R)},ce.useMemo=function(v,R){return re.current.useMemo(v,R)},ce.useReducer=function(v,R,se){return re.current.useReducer(v,R,se)},ce.useRef=function(v){return re.current.useRef(v)},ce.useState=function(v){return re.current.useState(v)},ce.useSyncExternalStore=function(v,R,se){return re.current.useSyncExternalStore(v,R,se)},ce.useTransition=function(){return re.current.useTransition()},ce.version="18.3.1",ce}var Ec;function Ha(){return Ec||(Ec=1,Ta.exports=dp()),Ta.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc;function fp(){if(Cc)return xl;Cc=1;var o=Ha(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function y(b,j,P){var C,S={},D=null,O=null;P!==void 0&&(D=""+P),j.key!==void 0&&(D=""+j.key),j.ref!==void 0&&(O=j.ref);for(C in j)d.call(j,C)&&!h.hasOwnProperty(C)&&(S[C]=j[C]);if(b&&b.defaultProps)for(C in j=b.defaultProps,j)S[C]===void 0&&(S[C]=j[C]);return{$$typeof:c,type:b,key:D,ref:O,props:S,_owner:p.current}}return xl.Fragment=s,xl.jsx=y,xl.jsxs=y,xl}var Pc;function pp(){return Pc||(Pc=1,La.exports=fp()),La.exports}var a=pp(),w=Ha();const Qi=Gc(w),mp=cp({__proto__:null,default:Qi},[w]);var Ui={},za={exports:{}},at={},Ma={exports:{}},Oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function hp(){return Rc||(Rc=1,(function(o){function c(U,H){var B=U.length;U.push(H);e:for(;0<B;){var v=B-1>>>1,R=U[v];if(0<p(R,H))U[v]=H,U[B]=R,B=v;else break e}}function s(U){return U.length===0?null:U[0]}function d(U){if(U.length===0)return null;var H=U[0],B=U.pop();if(B!==H){U[0]=B;e:for(var v=0,R=U.length,se=R>>>1;v<se;){var oe=2*(v+1)-1,fe=U[oe],pe=oe+1,ve=U[pe];if(0>p(fe,B))pe<R&&0>p(ve,fe)?(U[v]=ve,U[pe]=B,v=pe):(U[v]=fe,U[oe]=B,v=oe);else if(pe<R&&0>p(ve,B))U[v]=ve,U[pe]=B,v=pe;else break e}}return H}function p(U,H){var B=U.sortIndex-H.sortIndex;return B!==0?B:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var y=Date,b=y.now();o.unstable_now=function(){return y.now()-b}}var j=[],P=[],C=1,S=null,D=3,O=!1,I=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(U){for(var H=s(P);H!==null;){if(H.callback===null)d(P);else if(H.startTime<=U)d(P),H.sortIndex=H.expirationTime,c(j,H);else break;H=s(P)}}function G(U){if(A=!1,ie(U),!I)if(s(j)!==null)I=!0,q(Z);else{var H=s(P);H!==null&&re(G,H.startTime-U)}}function Z(U,H){I=!1,A&&(A=!1,ae(we),we=-1),O=!0;var B=D;try{for(ie(H),S=s(j);S!==null&&(!(S.expirationTime>H)||U&&!gt());){var v=S.callback;if(typeof v=="function"){S.callback=null,D=S.priorityLevel;var R=v(S.expirationTime<=H);H=o.unstable_now(),typeof R=="function"?S.callback=R:S===s(j)&&d(j),ie(H)}else d(j);S=s(j)}if(S!==null)var se=!0;else{var oe=s(P);oe!==null&&re(G,oe.startTime-H),se=!1}return se}finally{S=null,D=B,O=!1}}var xe=!1,Re=null,we=-1,ut=5,$e=-1;function gt(){return!(o.unstable_now()-$e<ut)}function Qe(){if(Re!==null){var U=o.unstable_now();$e=U;var H=!0;try{H=Re(!0,U)}finally{H?W():(xe=!1,Re=null)}}else xe=!1}var W;if(typeof ue=="function")W=function(){ue(Qe)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,X=ne.port2;ne.port1.onmessage=Qe,W=function(){X.postMessage(null)}}else W=function(){M(Qe,0)};function q(U){Re=U,xe||(xe=!0,W())}function re(U,H){we=M(function(){U(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){I||O||(I=!0,q(Z))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return D},o.unstable_getFirstCallbackNode=function(){return s(j)},o.unstable_next=function(U){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var B=D;D=H;try{return U()}finally{D=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=D;D=U;try{return H()}finally{D=B}},o.unstable_scheduleCallback=function(U,H,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,U){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,U={id:C++,callback:H,priorityLevel:U,startTime:B,expirationTime:R,sortIndex:-1},B>v?(U.sortIndex=B,c(P,U),s(j)===null&&U===s(P)&&(A?(ae(we),we=-1):A=!0,re(G,B-v))):(U.sortIndex=R,c(j,U),I||O||(I=!0,q(Z))),U},o.unstable_shouldYield=gt,o.unstable_wrapCallback=function(U){var H=D;return function(){var B=D;D=H;try{return U.apply(this,arguments)}finally{D=B}}}})(Oa)),Oa}var Lc;function gp(){return Lc||(Lc=1,Ma.exports=hp()),Ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function vp(){if(Tc)return at;Tc=1;var o=Ha(),c=gp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},S={};function D(e){return j.call(S,e)?!0:j.call(C,e)?!1:P.test(e)?S[e]=!0:(C[e]=!0,!1)}function O(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||O(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ae,ue);M[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ae,ue);M[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ae,ue);M[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,n,r){var l=M.hasOwnProperty(t)?M[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,l,r)&&(n=null),r||l===null?D(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var G=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),xe=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),$e=Symbol.for("react.provider"),gt=Symbol.for("react.context"),Qe=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),U=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function R(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var se=!1;function oe(e,t){if(!e||se)return"";se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),i=r.stack.split(`
`),u=l.length-1,f=i.length-1;1<=u&&0<=f&&l[u]!==i[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==i[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==i[f]){var m=`
`+l[u].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=u&&0<=f);break}}}finally{se=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function fe(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case xe:return"Portal";case ut:return"Profiler";case we:return"StrictMode";case W:return"Suspense";case ne:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gt:return(e.displayName||"Context")+".Consumer";case $e:return(e._context.displayName||"Context")+".Provider";case Qe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=We(e))}function Jn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function et(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kn(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=he(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ct(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Gn(e,t){ct(e,t);var n=he(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cr(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cr(e,t,n){(t!=="number"||Tt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var St=Array.isArray;function tt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+he(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function en(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(St(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:he(n)}}function Rr(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function At(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?At(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rn,Lr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rn=Rn||document.createElement("div"),Rn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ln=["Webkit","ms","Moz","O"];Object.keys(tn).forEach(function(e){Ln.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tn[t]=tn[e]})});function El(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tn.hasOwnProperty(e)&&tn[e]?(""+t).trim():t+"px"}function Cl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=El(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ki=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tr(e,t){if(t){if(Ki[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function zr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mr=null;function Or(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,nn=null,zt=null;function Pl(e){if(e=ll(e)){if(typeof Fr!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Zl(t),Fr(e.stateNode,e.type,t))}}function de(e){nn?zt?zt.push(e):zt=[e]:nn=e}function rn(){if(nn){var e=nn,t=zt;if(zt=nn=null,Pl(e),t)for(e=0;e<t.length;e++)Pl(t[e])}}function De(e,t){return e(t)}function Rl(){}var Dr=!1;function Ll(e,t,n){if(Dr)return e(t,n);Dr=!0;try{return De(e,t,n)}finally{Dr=!1,(nn!==null||zt!==null)&&(Rl(),rn())}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ur=!1;if(b)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{Ur=!1}function $t(e,t,n,r,l,i,u,f,m){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(T){this.onError(T)}}var Tn=!1,qn=null,Mt=!1,Ir=null,Gi={onError:function(e){Tn=!0,qn=e}};function N(e,t,n,r,l,i,u,f,m){Tn=!1,qn=null,$t.apply(Gi,arguments)}function E(e,t,n,r,l,i,u,f,m){if(N.apply(this,arguments),Tn){if(Tn){var _=qn;Tn=!1,qn=null}else throw Error(s(198));Mt||(Mt=!0,Ir=_)}}function K(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _e(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Je(e){if(K(e)!==e)throw Error(s(188))}function dt(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Je(l),e;if(i===r)return Je(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var u=!1,f=l.child;f;){if(f===n){u=!0,n=l,r=i;break}if(f===r){u=!0,r=l,n=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===n){u=!0,n=i,r=l;break}if(f===r){u=!0,r=i,n=l;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Wt(e){return e=dt(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tl(e);if(t!==null)return t;e=e.sibling}return null}var Za=c.unstable_scheduleCallback,es=c.unstable_cancelCallback,wd=c.unstable_shouldYield,kd=c.unstable_requestPaint,Le=c.unstable_now,jd=c.unstable_getCurrentPriorityLevel,Yi=c.unstable_ImmediatePriority,ts=c.unstable_UserBlockingPriority,zl=c.unstable_NormalPriority,_d=c.unstable_LowPriority,ns=c.unstable_IdlePriority,Ml=null,Ot=null;function Sd(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ed,bd=Math.log,Nd=Math.LN2;function Ed(e){return e>>>=0,e===0?32:31-(bd(e)/Nd|0)|0}var Ol=64,Fl=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~l;f!==0?r=Ar(f):(i&=u,i!==0&&(r=Ar(i)))}else u=n&~l,u!==0?r=Ar(u):i!==0&&(r=Ar(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),l=1<<n,r|=e[n],t&=~l;return r}function Cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-bt(i),f=1<<u,m=l[u];m===-1?((f&n)===0||(f&r)!==0)&&(l[u]=Cd(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rs(){var e=Ol;return Ol<<=1,(Ol&4194240)===0&&(Ol=64),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-bt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ye=0;function ls(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var is,eo,os,as,ss,to=!1,Ul=[],on=null,an=null,sn=null,$r=new Map,Wr=new Map,un=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function us(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Vr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ll(t),t!==null&&eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Td(e,t,n,r,l){switch(t){case"focusin":return on=Vr(on,e,t,n,r,l),!0;case"dragenter":return an=Vr(an,e,t,n,r,l),!0;case"mouseover":return sn=Vr(sn,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return $r.set(i,Vr($r.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wr.set(i,Vr(Wr.get(i)||null,e,t,n,r,l)),!0}return!1}function cs(e){var t=zn(e.target);if(t!==null){var n=K(t);if(n!==null){if(t=n.tag,t===13){if(t=_e(n),t!==null){e.blockedOn=t,ss(e.priority,function(){os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mr=r,n.target.dispatchEvent(r),Mr=null}else return t=ll(n),t!==null&&eo(t),e.blockedOn=n,!1;t.shift()}return!0}function ds(e,t,n){Il(e)&&n.delete(t)}function zd(){to=!1,on!==null&&Il(on)&&(on=null),an!==null&&Il(an)&&(an=null),sn!==null&&Il(sn)&&(sn=null),$r.forEach(ds),Wr.forEach(ds)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,zd)))}function Qr(e){function t(l){return Hr(l,e)}if(0<Ul.length){Hr(Ul[0],e);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Hr(on,e),an!==null&&Hr(an,e),sn!==null&&Hr(sn,e),$r.forEach(t),Wr.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)cs(n),n.blockedOn===null&&un.shift()}var Zn=G.ReactCurrentBatchConfig,Al=!0;function Md(e,t,n,r){var l=ye,i=Zn.transition;Zn.transition=null;try{ye=1,no(e,t,n,r)}finally{ye=l,Zn.transition=i}}function Od(e,t,n,r){var l=ye,i=Zn.transition;Zn.transition=null;try{ye=4,no(e,t,n,r)}finally{ye=l,Zn.transition=i}}function no(e,t,n,r){if(Al){var l=ro(e,t,n,r);if(l===null)ko(e,t,r,Bl,n),us(e,r);else if(Td(l,e,t,n,r))r.stopPropagation();else if(us(e,r),t&4&&-1<Ld.indexOf(e)){for(;l!==null;){var i=ll(l);if(i!==null&&is(i),i=ro(e,t,n,r),i===null&&ko(e,t,r,Bl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ko(e,t,r,null,n)}}var Bl=null;function ro(e,t,n,r){if(Bl=null,e=Or(r),e=zn(e),e!==null)if(t=K(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_e(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bl=e,null}function fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jd()){case Yi:return 1;case ts:return 4;case zl:case _d:return 16;case ns:return 536870912;default:return 16}default:return 16}}var cn=null,lo=null,$l=null;function ps(){if($l)return $l;var e,t=lo,n=t.length,r,l="value"in cn?cn.value:cn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[i-r];r++);return $l=l.slice(e,1<r?1-r:void 0)}function Wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function ms(){return!1}function ft(e){function t(n,r,l,i,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vl:ms,this.isPropagationStopped=ms,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=ft(er),Jr=B({},er,{view:0,detail:0}),Fd=ft(Jr),oo,ao,Kr,Hl=B({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(oo=e.screenX-Kr.screenX,ao=e.screenY-Kr.screenY):ao=oo=0,Kr=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),hs=ft(Hl),Dd=B({},Hl,{dataTransfer:0}),Ud=ft(Dd),Id=B({},Jr,{relatedTarget:0}),so=ft(Id),Ad=B({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=ft(Ad),$d=B({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=ft($d),Vd=B({},er,{data:0}),gs=ft(Vd),Hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jd[e])?!!t[e]:!1}function uo(){return Kd}var Gd=B({},Jr,{key:function(e){if(e.key){var t=Hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yd=ft(Gd),Xd=B({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vs=ft(Xd),qd=B({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),Zd=ft(qd),ef=B({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=ft(ef),nf=B({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=ft(nf),lf=[9,13,27,32],co=b&&"CompositionEvent"in window,Gr=null;b&&"documentMode"in document&&(Gr=document.documentMode);var of=b&&"TextEvent"in window&&!Gr,ys=b&&(!co||Gr&&8<Gr&&11>=Gr),xs=" ",ws=!1;function ks(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function af(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(ws=!0,xs);case"textInput":return e=t.data,e===xs&&ws?null:e;default:return null}}function sf(e,t){if(tr)return e==="compositionend"||!co&&ks(e,t)?(e=ps(),$l=lo=cn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ys&&t.locale!=="ko"?null:t.data;default:return null}}var uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uf[e.type]:t==="textarea"}function Ss(e,t,n,r){de(r),t=Yl(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,Xr=null;function cf(e){$s(e,0)}function Ql(e){var t=or(e);if(Jn(t))return e}function df(e,t){if(e==="change")return t}var bs=!1;if(b){var fo;if(b){var po="oninput"in document;if(!po){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),po=typeof Ns.oninput=="function"}fo=po}else fo=!1;bs=fo&&(!document.documentMode||9<document.documentMode)}function Es(){Yr&&(Yr.detachEvent("onpropertychange",Cs),Xr=Yr=null)}function Cs(e){if(e.propertyName==="value"&&Ql(Xr)){var t=[];Ss(t,Xr,e,Or(e)),Ll(cf,t)}}function ff(e,t,n){e==="focusin"?(Es(),Yr=t,Xr=n,Yr.attachEvent("onpropertychange",Cs)):e==="focusout"&&Es()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Xr)}function mf(e,t){if(e==="click")return Ql(t)}function hf(e,t){if(e==="input"||e==="change")return Ql(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:gf;function qr(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!j.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function Ls(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ls(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ts(){for(var e=window,t=Tt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tt(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vf(e){var t=Ts(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ls(n.ownerDocument.documentElement,n)){if(r!==null&&mo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Rs(n,i);var u=Rs(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=b&&"documentMode"in document&&11>=document.documentMode,nr=null,ho=null,Zr=null,go=!1;function zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||nr==null||nr!==Tt(r)||(r=nr,"selectionStart"in r&&mo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&qr(Zr,r)||(Zr=r,r=Yl(ho,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function Jl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},vo={},Ms={};b&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Kl(e){if(vo[e])return vo[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ms)return vo[e]=t[n];return e}var Os=Kl("animationend"),Fs=Kl("animationiteration"),Ds=Kl("animationstart"),Us=Kl("transitionend"),Is=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Is.set(e,t),h(t,[e])}for(var yo=0;yo<As.length;yo++){var xo=As[yo],xf=xo.toLowerCase(),wf=xo[0].toUpperCase()+xo.slice(1);dn(xf,"on"+wf)}dn(Os,"onAnimationEnd"),dn(Fs,"onAnimationIteration"),dn(Ds,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Us,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(el));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E(r,t,void 0,e),e.currentTarget=null}function $s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],m=f.instance,_=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break e;Bs(l,f,_),i=m}else for(u=0;u<r.length;u++){if(f=r[u],m=f.instance,_=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break e;Bs(l,f,_),i=m}}}if(Mt)throw e=Ir,Mt=!1,Ir=null,e}function Se(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Ws(t,e,2,!1),n.add(r))}function wo(e,t,n){var r=0;t&&(r|=4),Ws(n,e,r,t)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function tl(e){if(!e[Gl]){e[Gl]=!0,d.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||wo(n,!1,e),wo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gl]||(t[Gl]=!0,wo("selectionchange",!1,t))}}function Ws(e,t,n,r){switch(fs(t)){case 1:var l=Md;break;case 4:l=Od;break;default:l=no}n=l.bind(null,t,n,e),l=void 0,!Ur||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ko(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;u=u.return}for(;f!==null;){if(u=zn(f),u===null)return;if(m=u.tag,m===5||m===6){r=i=u;continue e}f=f.parentNode}}r=r.return}Ll(function(){var _=i,T=Or(n),z=[];e:{var L=Is.get(e);if(L!==void 0){var $=io,Q=e;switch(e){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":$=Yd;break;case"focusin":Q="focus",$=so;break;case"focusout":Q="blur",$=so;break;case"beforeblur":case"afterblur":$=so;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Zd;break;case Os:case Fs:case Ds:$=Bd;break;case Us:$=tf;break;case"scroll":$=Fd;break;case"wheel":$=rf;break;case"copy":case"cut":case"paste":$=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=vs}var J=(t&4)!==0,Te=!J&&e==="scroll",x=J?L!==null?L+"Capture":null:L;J=[];for(var g=_,k;g!==null;){k=g;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,x!==null&&(F=ln(g,x),F!=null&&J.push(nl(g,F,k)))),Te)break;g=g.return}0<J.length&&(L=new $(L,Q,null,n,T),z.push({event:L,listeners:J}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",L&&n!==Mr&&(Q=n.relatedTarget||n.fromElement)&&(zn(Q)||Q[Vt]))break e;if(($||L)&&(L=T.window===T?T:(L=T.ownerDocument)?L.defaultView||L.parentWindow:window,$?(Q=n.relatedTarget||n.toElement,$=_,Q=Q?zn(Q):null,Q!==null&&(Te=K(Q),Q!==Te||Q.tag!==5&&Q.tag!==6)&&(Q=null)):($=null,Q=_),$!==Q)){if(J=hs,F="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=vs,F="onPointerLeave",x="onPointerEnter",g="pointer"),Te=$==null?L:or($),k=Q==null?L:or(Q),L=new J(F,g+"leave",$,n,T),L.target=Te,L.relatedTarget=k,F=null,zn(T)===_&&(J=new J(x,g+"enter",Q,n,T),J.target=k,J.relatedTarget=Te,F=J),Te=F,$&&Q)t:{for(J=$,x=Q,g=0,k=J;k;k=lr(k))g++;for(k=0,F=x;F;F=lr(F))k++;for(;0<g-k;)J=lr(J),g--;for(;0<k-g;)x=lr(x),k--;for(;g--;){if(J===x||x!==null&&J===x.alternate)break t;J=lr(J),x=lr(x)}J=null}else J=null;$!==null&&Vs(z,L,$,J,!1),Q!==null&&Te!==null&&Vs(z,Te,Q,J,!0)}}e:{if(L=_?or(_):window,$=L.nodeName&&L.nodeName.toLowerCase(),$==="select"||$==="input"&&L.type==="file")var Y=df;else if(_s(L))if(bs)Y=hf;else{Y=pf;var ee=ff}else($=L.nodeName)&&$.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Y=mf);if(Y&&(Y=Y(e,_))){Ss(z,Y,n,T);break e}ee&&ee(e,L,_),e==="focusout"&&(ee=L._wrapperState)&&ee.controlled&&L.type==="number"&&Cr(L,"number",L.value)}switch(ee=_?or(_):window,e){case"focusin":(_s(ee)||ee.contentEditable==="true")&&(nr=ee,ho=_,Zr=null);break;case"focusout":Zr=ho=nr=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,zs(z,n,T);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":zs(z,n,T)}var te;if(co)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else tr?ks(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(ys&&n.locale!=="ko"&&(tr||le!=="onCompositionStart"?le==="onCompositionEnd"&&tr&&(te=ps()):(cn=T,lo="value"in cn?cn.value:cn.textContent,tr=!0)),ee=Yl(_,le),0<ee.length&&(le=new gs(le,e,null,n,T),z.push({event:le,listeners:ee}),te?le.data=te:(te=js(n),te!==null&&(le.data=te)))),(te=of?af(e,n):sf(e,n))&&(_=Yl(_,"onBeforeInput"),0<_.length&&(T=new gs("onBeforeInput","beforeinput",null,n,T),z.push({event:T,listeners:_}),T.data=te))}$s(z,t)})}function nl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ln(e,n),i!=null&&r.unshift(nl(e,i,l)),i=ln(e,t),i!=null&&r.push(nl(e,i,l))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,t,n,r,l){for(var i=t._reactName,u=[];n!==null&&n!==r;){var f=n,m=f.alternate,_=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&_!==null&&(f=_,l?(m=ln(n,i),m!=null&&u.unshift(nl(n,m,f))):l||(m=ln(n,i),m!=null&&u.push(nl(n,m,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var jf=/\r\n?/g,_f=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(jf,`
`).replace(_f,"")}function Xl(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(s(425))}function ql(){}var jo=null,_o=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Sf=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(Nf)}:bo;function Nf(e){setTimeout(function(){throw e})}function No(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qr(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),Ft="__reactFiber$"+ir,rl="__reactProps$"+ir,Vt="__reactContainer$"+ir,Eo="__reactEvents$"+ir,Ef="__reactListeners$"+ir,Cf="__reactHandles$"+ir;function zn(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Js(e);e!==null;){if(n=e[Ft])return n;e=Js(e)}return t}e=n,n=e.parentNode}return null}function ll(e){return e=e[Ft]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Zl(e){return e[rl]||null}var Co=[],ar=-1;function pn(e){return{current:e}}function be(e){0>ar||(e.current=Co[ar],Co[ar]=null,ar--)}function je(e,t){ar++,Co[ar]=e.current,e.current=t}var mn={},Ke=pn(mn),nt=pn(!1),Mn=mn;function sr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function ei(){be(nt),be(Ke)}function Ks(e,t,n){if(Ke.current!==mn)throw Error(s(168));je(Ke,t),je(nt,n)}function Gs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ve(e)||"Unknown",l));return B({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Mn=Ke.current,je(Ke,e),je(nt,nt.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Gs(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,be(nt),be(Ke),je(Ke,e)):be(nt),je(nt,n)}var Ht=null,ni=!1,Po=!1;function Xs(e){Ht===null?Ht=[e]:Ht.push(e)}function Pf(e){ni=!0,Xs(e)}function hn(){if(!Po&&Ht!==null){Po=!0;var e=0,t=ye;try{var n=Ht;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,ni=!1}catch(l){throw Ht!==null&&(Ht=Ht.slice(e+1)),Za(Yi,hn),l}finally{ye=t,Po=!1}}return null}var ur=[],cr=0,ri=null,li=0,yt=[],xt=0,On=null,Qt=1,Jt="";function Fn(e,t){ur[cr++]=li,ur[cr++]=ri,ri=e,li=t}function qs(e,t,n){yt[xt++]=Qt,yt[xt++]=Jt,yt[xt++]=On,On=e;var r=Qt;e=Jt;var l=32-bt(r)-1;r&=~(1<<l),n+=1;var i=32-bt(t)+l;if(30<i){var u=l-l%5;i=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Qt=1<<32-bt(t)+l|n<<l|r,Jt=i+e}else Qt=1<<i|n<<l|r,Jt=e}function Ro(e){e.return!==null&&(Fn(e,1),qs(e,1,0))}function Lo(e){for(;e===ri;)ri=ur[--cr],ur[cr]=null,li=ur[--cr],ur[cr]=null;for(;e===On;)On=yt[--xt],yt[xt]=null,Jt=yt[--xt],yt[xt]=null,Qt=yt[--xt],yt[xt]=null}var pt=null,mt=null,Ne=!1,Et=null;function Zs(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,mt=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:Qt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,mt=null,!0):!1;default:return!1}}function To(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(Ne){var t=mt;if(t){var n=t;if(!eu(e,t)){if(To(e))throw Error(s(418));t=fn(n.nextSibling);var r=pt;t&&eu(e,t)?Zs(r,n):(e.flags=e.flags&-4097|2,Ne=!1,pt=e)}}else{if(To(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ne=!1,pt=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ii(e){if(e!==pt)return!1;if(!Ne)return tu(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=mt)){if(To(e))throw nu(),Error(s(418));for(;t;)Zs(e,t),t=fn(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=pt?fn(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=mt;e;)e=fn(e.nextSibling)}function dr(){mt=pt=null,Ne=!1}function Mo(e){Et===null?Et=[e]:Et.push(e)}var Rf=G.ReactCurrentBatchConfig;function il(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var f=l.refs;u===null?delete f[i]:f[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ru(e){var t=e._init;return t(e._payload)}function lu(e){function t(x,g){if(e){var k=x.deletions;k===null?(x.deletions=[g],x.flags|=16):k.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function l(x,g){return x=_n(x,g),x.index=0,x.sibling=null,x}function i(x,g,k){return x.index=k,e?(k=x.alternate,k!==null?(k=k.index,k<g?(x.flags|=2,g):k):(x.flags|=2,g)):(x.flags|=1048576,g)}function u(x){return e&&x.alternate===null&&(x.flags|=2),x}function f(x,g,k,F){return g===null||g.tag!==6?(g=ba(k,x.mode,F),g.return=x,g):(g=l(g,k),g.return=x,g)}function m(x,g,k,F){var Y=k.type;return Y===Re?T(x,g,k.props.children,F,k.key):g!==null&&(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===q&&ru(Y)===g.type)?(F=l(g,k.props),F.ref=il(x,g,k),F.return=x,F):(F=Ri(k.type,k.key,k.props,null,x.mode,F),F.ref=il(x,g,k),F.return=x,F)}function _(x,g,k,F){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Na(k,x.mode,F),g.return=x,g):(g=l(g,k.children||[]),g.return=x,g)}function T(x,g,k,F,Y){return g===null||g.tag!==7?(g=Vn(k,x.mode,F,Y),g.return=x,g):(g=l(g,k),g.return=x,g)}function z(x,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ba(""+g,x.mode,k),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return k=Ri(g.type,g.key,g.props,null,x.mode,k),k.ref=il(x,null,g),k.return=x,k;case xe:return g=Na(g,x.mode,k),g.return=x,g;case q:var F=g._init;return z(x,F(g._payload),k)}if(St(g)||H(g))return g=Vn(g,x.mode,k,null),g.return=x,g;oi(x,g)}return null}function L(x,g,k,F){var Y=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return Y!==null?null:f(x,g,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:return k.key===Y?m(x,g,k,F):null;case xe:return k.key===Y?_(x,g,k,F):null;case q:return Y=k._init,L(x,g,Y(k._payload),F)}if(St(k)||H(k))return Y!==null?null:T(x,g,k,F,null);oi(x,k)}return null}function $(x,g,k,F,Y){if(typeof F=="string"&&F!==""||typeof F=="number")return x=x.get(k)||null,f(g,x,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Z:return x=x.get(F.key===null?k:F.key)||null,m(g,x,F,Y);case xe:return x=x.get(F.key===null?k:F.key)||null,_(g,x,F,Y);case q:var ee=F._init;return $(x,g,k,ee(F._payload),Y)}if(St(F)||H(F))return x=x.get(k)||null,T(g,x,F,Y,null);oi(g,F)}return null}function Q(x,g,k,F){for(var Y=null,ee=null,te=g,le=g=0,Ae=null;te!==null&&le<k.length;le++){te.index>le?(Ae=te,te=null):Ae=te.sibling;var ge=L(x,te,k[le],F);if(ge===null){te===null&&(te=Ae);break}e&&te&&ge.alternate===null&&t(x,te),g=i(ge,g,le),ee===null?Y=ge:ee.sibling=ge,ee=ge,te=Ae}if(le===k.length)return n(x,te),Ne&&Fn(x,le),Y;if(te===null){for(;le<k.length;le++)te=z(x,k[le],F),te!==null&&(g=i(te,g,le),ee===null?Y=te:ee.sibling=te,ee=te);return Ne&&Fn(x,le),Y}for(te=r(x,te);le<k.length;le++)Ae=$(te,x,le,k[le],F),Ae!==null&&(e&&Ae.alternate!==null&&te.delete(Ae.key===null?le:Ae.key),g=i(Ae,g,le),ee===null?Y=Ae:ee.sibling=Ae,ee=Ae);return e&&te.forEach(function(Sn){return t(x,Sn)}),Ne&&Fn(x,le),Y}function J(x,g,k,F){var Y=H(k);if(typeof Y!="function")throw Error(s(150));if(k=Y.call(k),k==null)throw Error(s(151));for(var ee=Y=null,te=g,le=g=0,Ae=null,ge=k.next();te!==null&&!ge.done;le++,ge=k.next()){te.index>le?(Ae=te,te=null):Ae=te.sibling;var Sn=L(x,te,ge.value,F);if(Sn===null){te===null&&(te=Ae);break}e&&te&&Sn.alternate===null&&t(x,te),g=i(Sn,g,le),ee===null?Y=Sn:ee.sibling=Sn,ee=Sn,te=Ae}if(ge.done)return n(x,te),Ne&&Fn(x,le),Y;if(te===null){for(;!ge.done;le++,ge=k.next())ge=z(x,ge.value,F),ge!==null&&(g=i(ge,g,le),ee===null?Y=ge:ee.sibling=ge,ee=ge);return Ne&&Fn(x,le),Y}for(te=r(x,te);!ge.done;le++,ge=k.next())ge=$(te,x,le,ge.value,F),ge!==null&&(e&&ge.alternate!==null&&te.delete(ge.key===null?le:ge.key),g=i(ge,g,le),ee===null?Y=ge:ee.sibling=ge,ee=ge);return e&&te.forEach(function(up){return t(x,up)}),Ne&&Fn(x,le),Y}function Te(x,g,k,F){if(typeof k=="object"&&k!==null&&k.type===Re&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:e:{for(var Y=k.key,ee=g;ee!==null;){if(ee.key===Y){if(Y=k.type,Y===Re){if(ee.tag===7){n(x,ee.sibling),g=l(ee,k.props.children),g.return=x,x=g;break e}}else if(ee.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===q&&ru(Y)===ee.type){n(x,ee.sibling),g=l(ee,k.props),g.ref=il(x,ee,k),g.return=x,x=g;break e}n(x,ee);break}else t(x,ee);ee=ee.sibling}k.type===Re?(g=Vn(k.props.children,x.mode,F,k.key),g.return=x,x=g):(F=Ri(k.type,k.key,k.props,null,x.mode,F),F.ref=il(x,g,k),F.return=x,x=F)}return u(x);case xe:e:{for(ee=k.key;g!==null;){if(g.key===ee)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(x,g.sibling),g=l(g,k.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Na(k,x.mode,F),g.return=x,x=g}return u(x);case q:return ee=k._init,Te(x,g,ee(k._payload),F)}if(St(k))return Q(x,g,k,F);if(H(k))return J(x,g,k,F);oi(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(x,g.sibling),g=l(g,k),g.return=x,x=g):(n(x,g),g=ba(k,x.mode,F),g.return=x,x=g),u(x)):n(x,g)}return Te}var fr=lu(!0),iu=lu(!1),ai=pn(null),si=null,pr=null,Oo=null;function Fo(){Oo=pr=si=null}function Do(e){var t=ai.current;be(ai),e._currentValue=t}function Uo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){si=e,Oo=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(si===null)throw Error(s(308));pr=e,si.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Dn=null;function Io(e){Dn===null?Dn=[e]:Dn.push(e)}function ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Io(t)):(n.next=l.next,l.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function Ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Kt(e,n)}return l=r.interleaved,l===null?(t.next=t,Io(r)):(t.next=l.next,l.next=t),r.interleaved=t,Kt(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ci(e,t,n,r){var l=e.updateQueue;gn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,_=m.next;m.next=null,u===null?i=_:u.next=_,u=m;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==u&&(f===null?T.firstBaseUpdate=_:f.next=_,T.lastBaseUpdate=m))}if(i!==null){var z=l.baseState;u=0,T=_=m=null,f=i;do{var L=f.lane,$=f.eventTime;if((r&L)===L){T!==null&&(T=T.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Q=e,J=f;switch(L=t,$=n,J.tag){case 1:if(Q=J.payload,typeof Q=="function"){z=Q.call($,z,L);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,L=typeof Q=="function"?Q.call($,z,L):Q,L==null)break e;z=B({},z,L);break e;case 2:gn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[f]:L.push(f))}else $={eventTime:$,lane:L,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(_=T=$,m=z):T=T.next=$,u|=L;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;L=f,f=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(T===null&&(m=z),l.baseState=m,l.firstBaseUpdate=_,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);An|=u,e.lanes=u,e.memoizedState=z}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var ol={},Dt=pn(ol),al=pn(ol),sl=pn(ol);function Un(e){if(e===ol)throw Error(s(174));return e}function Bo(e,t){switch(je(sl,t),je(al,e),je(Dt,ol),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}be(Dt),je(Dt,t)}function hr(){be(Dt),be(al),be(sl)}function cu(e){Un(sl.current);var t=Un(Dt.current),n=Xn(t,e.type);t!==n&&(je(al,e),je(Dt,n))}function $o(e){al.current===e&&(be(Dt),be(al))}var Ee=pn(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=[];function Vo(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var fi=G.ReactCurrentDispatcher,Ho=G.ReactCurrentBatchConfig,In=0,Ce=null,Oe=null,Ue=null,pi=!1,ul=!1,cl=0,Lf=0;function Ge(){throw Error(s(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,l,i){if(In=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?Of:Ff,e=n(r,l),ul){i=0;do{if(ul=!1,cl=0,25<=i)throw Error(s(301));i+=1,Ue=Oe=null,t.updateQueue=null,fi.current=Df,e=n(r,l)}while(ul)}if(fi.current=gi,t=Oe!==null&&Oe.next!==null,In=0,Ue=Oe=Ce=null,pi=!1,t)throw Error(s(300));return e}function Ko(){var e=cl!==0;return cl=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ce.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function kt(){if(Oe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ue===null?Ce.memoizedState:Ue.next;if(t!==null)Ue=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?Ce.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function dl(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Oe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=u=null,m=null,_=i;do{var T=_.lane;if((In&T)===T)m!==null&&(m=m.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var z={lane:T,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};m===null?(f=m=z,u=r):m=m.next=z,Ce.lanes|=T,An|=T}_=_.next}while(_!==null&&_!==i);m===null?u=r:m.next=f,Nt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Ce.lanes|=i,An|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Nt(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function du(){}function fu(e,t){var n=Ce,r=kt(),l=t(),i=!Nt(r.memoizedState,l);if(i&&(r.memoizedState=l,lt=!0),r=r.queue,Xo(hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,fl(9,mu.bind(null,n,r,l,t),void 0,null),Ie===null)throw Error(s(349));(In&30)!==0||pu(n,t,l)}return l}function pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&vu(e)}function hu(e,t,n){return n(function(){gu(t)&&vu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function vu(e){var t=Kt(e,1);t!==null&&Lt(t,e,1,-1)}function yu(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:e},t.queue=e,e=e.dispatch=Mf.bind(null,Ce,e),[t.memoizedState,e]}function fl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xu(){return kt().memoizedState}function mi(e,t,n,r){var l=Ut();Ce.flags|=e,l.memoizedState=fl(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var l=kt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var u=Oe.memoizedState;if(i=u.destroy,r!==null&&Qo(r,u.deps)){l.memoizedState=fl(t,n,i,r);return}}Ce.flags|=e,l.memoizedState=fl(1|t,n,i,r)}function wu(e,t){return mi(8390656,8,e,t)}function Xo(e,t){return hi(2048,8,e,t)}function ku(e,t){return hi(4,2,e,t)}function ju(e,t){return hi(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,_u.bind(null,t,e),n)}function qo(){}function bu(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nu(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(Nt(n,t)||(n=rs(),Ce.lanes|=n,An|=n,e.baseState=!0),t)}function Tf(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{ye=n,Ho.transition=r}}function Cu(){return kt().memoizedState}function zf(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Ru(t,n);else if(n=ou(e,t,n,r),n!==null){var l=Ze();Lt(n,e,r,l),Lu(n,t,r)}}function Mf(e,t,n){var r=kn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Ru(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,f=i(u,n);if(l.hasEagerState=!0,l.eagerState=f,Nt(f,u)){var m=t.interleaved;m===null?(l.next=l,Io(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}n=ou(e,t,l,r),n!==null&&(l=Ze(),Lt(n,e,r,l),Lu(n,t,r))}}function Pu(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Ru(e,t){ul=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var gi={readContext:wt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Of={readContext:wt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mi(4194308,4,_u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zf.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:qo,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=Tf.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,l=Ut();if(Ne){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ie===null)throw Error(s(349));(In&30)!==0||pu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,wu(hu.bind(null,r,i,e),[e]),r.flags|=2048,fl(9,mu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Ie.identifierPrefix;if(Ne){var n=Jt,r=Qt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:wt,useCallback:bu,useContext:wt,useEffect:Xo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:ju,useMemo:Nu,useReducer:Go,useRef:xu,useState:function(){return Go(dl)},useDebugValue:qo,useDeferredValue:function(e){var t=kt();return Eu(t,Oe.memoizedState,e)},useTransition:function(){var e=Go(dl)[0],t=kt().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1},Df={readContext:wt,useCallback:bu,useContext:wt,useEffect:Xo,useImperativeHandle:Su,useInsertionEffect:ku,useLayoutEffect:ju,useMemo:Nu,useReducer:Yo,useRef:xu,useState:function(){return Yo(dl)},useDebugValue:qo,useDeferredValue:function(e){var t=kt();return Oe===null?t.memoizedState=e:Eu(t,Oe.memoizedState,e)},useTransition:function(){var e=Yo(dl)[0],t=kt().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?K(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=kn(e),i=Gt(r,l);i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,l),t!==null&&(Lt(t,e,l,r),ui(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=kn(e),i=Gt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vn(e,i,l),t!==null&&(Lt(t,e,l,r),ui(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=kn(e),l=Gt(n,r);l.tag=2,t!=null&&(l.callback=t),t=vn(e,l,r),t!==null&&(Lt(t,e,r,n),ui(t,e,r))}};function Tu(e,t,n,r,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,u):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(l,i):!0}function zu(e,t,n){var r=!1,l=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(l=rt(t)?Mn:Ke.current,r=t.contextTypes,i=(r=r!=null)?sr(e,l):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function ea(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ao(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=wt(i):(i=rt(t)?Mn:Ke.current,l.context=sr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vi.enqueueReplaceState(l,l.state,null),ci(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=fe(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,va=r),na(e,t)},n}function Fu(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){na(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var If=G.ReactCurrentOwner,lt=!1;function qe(e,t,n,r){t.child=e===null?iu(t,null,n,r):fr(t,e.child,n,r)}function Au(e,t,n,r,l){n=n.render;var i=t.ref;return mr(t,l),r=Jo(e,t,n,r,i,l),n=Ko(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Ne&&n&&Ro(t),t.flags|=1,qe(e,t,r,l),t.child)}function Bu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Sa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$u(e,t,i,r,l)):(e=Ri(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(u,r)&&e.ref===t.ref)return Yt(e,t,l)}return t.flags|=1,e=_n(i,r),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qr(i,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Yt(e,t,l)}return ra(e,t,n,r,l)}function Wu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(yr,ht),ht|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(yr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(yr,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,je(yr,ht),ht|=r;return qe(e,t,l,n),t.child}function Vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,l){var i=rt(n)?Mn:Ke.current;return i=sr(t,i),mr(t,l),n=Jo(e,t,n,r,i,l),r=Ko(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Yt(e,t,l)):(Ne&&r&&Ro(t),t.flags|=1,qe(e,t,n,l),t.child)}function Hu(e,t,n,r,l){if(rt(n)){var i=!0;ti(t)}else i=!1;if(mr(t,l),t.stateNode===null)xi(e,t),zu(t,n,r),ea(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var m=u.context,_=n.contextType;typeof _=="object"&&_!==null?_=wt(_):(_=rt(n)?Mn:Ke.current,_=sr(t,_));var T=n.getDerivedStateFromProps,z=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function";z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||m!==_)&&Mu(t,u,r,_),gn=!1;var L=t.memoizedState;u.state=L,ci(t,r,u,l),m=t.memoizedState,f!==r||L!==m||nt.current||gn?(typeof T=="function"&&(Zo(t,n,T,r),m=t.memoizedState),(f=gn||Tu(t,n,f,r,L,m,_))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),u.props=r,u.state=m,u.context=_,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,au(e,t),f=t.memoizedProps,_=t.type===t.elementType?f:Ct(t.type,f),u.props=_,z=t.pendingProps,L=u.context,m=n.contextType,typeof m=="object"&&m!==null?m=wt(m):(m=rt(n)?Mn:Ke.current,m=sr(t,m));var $=n.getDerivedStateFromProps;(T=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==z||L!==m)&&Mu(t,u,r,m),gn=!1,L=t.memoizedState,u.state=L,ci(t,r,u,l);var Q=t.memoizedState;f!==z||L!==Q||nt.current||gn?(typeof $=="function"&&(Zo(t,n,$,r),Q=t.memoizedState),(_=gn||Tu(t,n,_,r,L,Q,m)||!1)?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,Q,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,Q,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Q),u.props=r,u.state=Q,u.context=m,r=_):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return la(e,t,n,r,i,l)}function la(e,t,n,r,l,i){Vu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&Ys(t,n,!1),Yt(e,t,i);r=t.stateNode,If.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=fr(t,e.child,null,i),t.child=fr(t,null,f,i)):qe(e,t,f,i),t.memoizedState=r.state,l&&Ys(t,n,!0),t.child}function Qu(e){var t=e.stateNode;t.pendingContext?Ks(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ks(e,t.context,!1),Bo(e,t.containerInfo)}function Ju(e,t,n,r,l){return dr(),Mo(l),t.flags|=256,qe(e,t,n,r),t.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,l=Ee.current,i=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),je(Ee,l&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,i?(r=t.mode,i=t.child,u={mode:"hidden",children:u},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=Li(u,r,0,null),e=Vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=oa(n),t.memoizedState=ia,e):aa(t,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return Af(e,t,u,r,f,l,n);if(i){i=r.fallback,u=t.mode,l=e.child,f=l.sibling;var m={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=_n(l,m),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=_n(f,i):(i=Vn(i,u,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,u=e.child.memoizedState,u=u===null?oa(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~n,t.memoizedState=ia,r}return i=e.child,e=i.sibling,r=_n(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function aa(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&Mo(r),fr(t,e.child,null,n),e=aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Af(e,t,n,r,l,i,u){if(n)return t.flags&256?(t.flags&=-257,r=ta(Error(s(422))),yi(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Li({mode:"visible",children:r.children},l,0,null),i=Vn(i,l,u,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&fr(t,e.child,null,u),t.child.memoizedState=oa(u),t.memoizedState=ia,i);if((t.mode&1)===0)return yi(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(s(419)),r=ta(i,r,void 0),yi(e,t,u,r)}if(f=(u&e.childLanes)!==0,lt||f){if(r=Ie,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Kt(e,l),Lt(r,e,l,-1))}return _a(),r=ta(Error(s(421))),yi(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Zf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,mt=fn(l.nextSibling),pt=t,Ne=!0,Et=null,e!==null&&(yt[xt++]=Qt,yt[xt++]=Jt,yt[xt++]=On,Qt=e.id,Jt=e.overflow,On=t),t=aa(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uo(e.return,t,n)}function sa(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Yu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),sa(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&di(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}sa(t,!0,n,null,i);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Qu(t),dr();break;case 5:cu(t);break;case 1:rt(t.type)&&ti(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;je(ai,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ku(e,t,n):(je(Ee,Ee.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);je(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Yu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,n)}return Yt(e,t,n)}var Xu,ua,qu,Zu;Xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ua=function(){},qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Un(Dt.current);var i=null;switch(n){case"input":l=et(e,l),r=et(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=en(e,l),r=en(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ql)}Tr(n,r);var u;n=null;for(_ in l)if(!r.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var f=l[_];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(p.hasOwnProperty(_)?i||(i=[]):(i=i||[]).push(_,null));for(_ in r){var m=r[_];if(f=l!=null?l[_]:void 0,r.hasOwnProperty(_)&&m!==f&&(m!=null||f!=null))if(_==="style")if(f){for(u in f)!f.hasOwnProperty(u)||m&&m.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in m)m.hasOwnProperty(u)&&f[u]!==m[u]&&(n||(n={}),n[u]=m[u])}else n||(i||(i=[]),i.push(_,n)),n=m;else _==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(i=i||[]).push(_,m)):_==="children"?typeof m!="string"&&typeof m!="number"||(i=i||[]).push(_,""+m):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(p.hasOwnProperty(_)?(m!=null&&_==="onScroll"&&Se("scroll",e),i||f===m||(i=[])):(i=i||[]).push(_,m))}n&&(i=i||[]).push("style",n);var _=i;(t.updateQueue=_)&&(t.flags|=4)}},Zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pl(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $f(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&ei(),Ye(t),null;case 3:return r=t.stateNode,hr(),be(nt),be(Ke),Vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(wa(Et),Et=null))),ua(e,t),Ye(t),null;case 5:$o(t);var l=Un(sl.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ye(t),null}if(e=Un(Dt.current),ii(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ft]=t,r[rl]=i,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(l=0;l<el.length;l++)Se(el[l],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Kn(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":Pr(r,i),Se("invalid",r)}Tr(n,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var f=i[u];u==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Se("scroll",r)}switch(n){case"input":Pn(r),Nl(r,i,!0);break;case"textarea":Pn(r),Yn(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ql)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=At(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Ft]=t,e[rl]=r,Xu(e,t,!1,!1),t.stateNode=e;e:{switch(u=zr(n,r),n){case"dialog":Se("cancel",e),Se("close",e),l=r;break;case"iframe":case"object":case"embed":Se("load",e),l=r;break;case"video":case"audio":for(l=0;l<el.length;l++)Se(el[l],e);l=r;break;case"source":Se("error",e),l=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),l=r;break;case"details":Se("toggle",e),l=r;break;case"input":Kn(e,r),l=et(e,r),Se("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Pr(e,r),l=en(e,r),Se("invalid",e);break;default:l=r}Tr(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var m=f[i];i==="style"?Cl(e,m):i==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Lr(e,m)):i==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&vt(e,m):typeof m=="number"&&vt(e,""+m):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?m!=null&&i==="onScroll"&&Se("scroll",e):m!=null&&ie(e,i,m,u))}switch(n){case"input":Pn(e),Nl(e,r,!1);break;case"textarea":Pn(e),Yn(e);break;case"option":r.value!=null&&e.setAttribute("value",""+he(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=Un(sl.current),Un(Dt.current),ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(i=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Xl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return Ye(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)nu(),dr(),t.flags|=98560,i=!1;else if(i=ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ft]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),i=!1}else Et!==null&&(wa(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Fe===0&&(Fe=3):_a())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return hr(),ua(e,t),e===null&&tl(t.stateNode.containerInfo),Ye(t),null;case 10:return Do(t.type._context),Ye(t),null;case 17:return rt(t.type)&&ei(),Ye(t),null;case 19:if(be(Ee),i=t.memoizedState,i===null)return Ye(t),null;if(r=(t.flags&128)!==0,u=i.rendering,u===null)if(r)pl(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=di(e),u!==null){for(t.flags|=128,pl(i,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Le()>xr&&(t.flags|=128,r=!0,pl(i,!1),t.lanes=4194304)}else{if(!r)if(e=di(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ne)return Ye(t),null}else 2*Le()-i.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,pl(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(n=i.last,n!==null?n.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Le(),t.sibling=null,n=Ee.current,je(Ee,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Wf(e,t){switch(Lo(t),t.tag){case 1:return rt(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),be(nt),be(Ke),Vo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $o(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return hr(),null;case 10:return Do(t.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var wi=!1,Xe=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,V=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function ca(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var ec=!1;function Hf(e,t){if(jo=Al,e=Ts(),mo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,f=-1,m=-1,_=0,T=0,z=e,L=null;t:for(;;){for(var $;z!==n||l!==0&&z.nodeType!==3||(f=u+l),z!==i||r!==0&&z.nodeType!==3||(m=u+r),z.nodeType===3&&(u+=z.nodeValue.length),($=z.firstChild)!==null;)L=z,z=$;for(;;){if(z===e)break t;if(L===n&&++_===l&&(f=u),L===i&&++T===r&&(m=u),($=z.nextSibling)!==null)break;z=L,L=z.parentNode}z=$}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Al=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var J=Q.memoizedProps,Te=Q.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?J:Ct(t.type,J),Te);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Pe(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return Q=ec,ec=!1,Q}function ml(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ca(t,n,i)}l=l.next}while(l!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[rl],delete t[Eo],delete t[Ef],delete t[Cf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ql));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}var Ve=null,Pt=!1;function yn(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Xe||vr(n,t);case 6:var r=Ve,l=Pt;Ve=null,yn(e,t,n),Ve=r,Pt=l,Ve!==null&&(Pt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Pt?(e=Ve,n=n.stateNode,e.nodeType===8?No(e.parentNode,n):e.nodeType===1&&No(e,n),Qr(e)):No(Ve,n.stateNode));break;case 4:r=Ve,l=Pt,Ve=n.stateNode.containerInfo,Pt=!0,yn(e,t,n),Ve=r,Pt=l;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&ca(n,t,u),l=l.next}while(l!==r)}yn(e,t,n);break;case 1:if(!Xe&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Pe(n,t,f)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,yn(e,t,n),Xe=r):yn(e,t,n);break;default:yn(e,t,n)}}function ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vf),t.forEach(function(r){var l=ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:Ve=f.stateNode,Pt=!1;break e;case 3:Ve=f.stateNode.containerInfo,Pt=!0;break e;case 4:Ve=f.stateNode.containerInfo,Pt=!0;break e}f=f.return}if(Ve===null)throw Error(s(160));lc(i,u,l),Ve=null,Pt=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(_){Pe(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oc(t,e),t=t.sibling}function oc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),It(e),r&4){try{ml(3,e,e.return),ki(3,e)}catch(J){Pe(e,e.return,J)}try{ml(5,e,e.return)}catch(J){Pe(e,e.return,J)}}break;case 1:Rt(t,e),It(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(Rt(t,e),It(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var l=e.stateNode;try{vt(l,"")}catch(J){Pe(e,e.return,J)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=n!==null?n.memoizedProps:i,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&ct(l,i),zr(f,u);var _=zr(f,i);for(u=0;u<m.length;u+=2){var T=m[u],z=m[u+1];T==="style"?Cl(l,z):T==="dangerouslySetInnerHTML"?Lr(l,z):T==="children"?vt(l,z):ie(l,T,z,_)}switch(f){case"input":Gn(l,i);break;case"textarea":Rr(l,i);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?tt(l,!!i.multiple,$,!1):L!==!!i.multiple&&(i.defaultValue!=null?tt(l,!!i.multiple,i.defaultValue,!0):tt(l,!!i.multiple,i.multiple?[]:"",!1))}l[rl]=i}catch(J){Pe(e,e.return,J)}}break;case 6:if(Rt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(J){Pe(e,e.return,J)}}break;case 3:if(Rt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(J){Pe(e,e.return,J)}break;case 4:Rt(t,e),It(e);break;case 13:Rt(t,e),It(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ga=Le())),r&4&&ic(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(_=Xe)||T,Rt(t,e),Xe=_):Rt(t,e),It(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!T&&(e.mode&1)!==0)for(V=e,T=e.child;T!==null;){for(z=V=T;V!==null;){switch(L=V,$=L.child,L.tag){case 0:case 11:case 14:case 15:ml(4,L,L.return);break;case 1:vr(L,L.return);var Q=L.stateNode;if(typeof Q.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch(J){Pe(r,n,J)}}break;case 5:vr(L,L.return);break;case 22:if(L.memoizedState!==null){uc(z);continue}}$!==null?($.return=L,V=$):uc(z)}T=T.sibling}e:for(T=null,z=e;;){if(z.tag===5){if(T===null){T=z;try{l=z.stateNode,_?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=z.stateNode,m=z.memoizedProps.style,u=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=El("display",u))}catch(J){Pe(e,e.return,J)}}}else if(z.tag===6){if(T===null)try{z.stateNode.nodeValue=_?"":z.memoizedProps}catch(J){Pe(e,e.return,J)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;T===z&&(T=null),z=z.return}T===z&&(T=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Rt(t,e),It(e),r&4&&ic(e);break;case 21:break;default:Rt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(vt(l,""),r.flags&=-33);var i=rc(e);pa(e,i,l);break;case 3:case 4:var u=r.stateNode.containerInfo,f=rc(e);fa(e,f,u);break;default:throw Error(s(161))}}catch(m){Pe(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qf(e,t,n){V=e,ac(e)}function ac(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var l=V,i=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||wi;if(!u){var f=l.alternate,m=f!==null&&f.memoizedState!==null||Xe;f=wi;var _=Xe;if(wi=u,(Xe=m)&&!_)for(V=l;V!==null;)u=V,m=u.child,u.tag===22&&u.memoizedState!==null?cc(l):m!==null?(m.return=u,V=m):cc(l);for(;i!==null;)V=i,ac(i),i=i.sibling;V=l,wi=f,Xe=_}sc(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,V=i):sc(e)}}function sc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uu(t,i,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var T=_.memoizedState;if(T!==null){var z=T.dehydrated;z!==null&&Qr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Xe||t.flags&512&&da(t)}catch(L){Pe(t,t.return,L)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function uc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function cc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(m){Pe(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(m){Pe(t,l,m)}}var i=t.return;try{da(t)}catch(m){Pe(t,i,m)}break;case 5:var u=t.return;try{da(t)}catch(m){Pe(t,u,m)}}}catch(m){Pe(t,t.return,m)}if(t===e){V=null;break}var f=t.sibling;if(f!==null){f.return=t.return,V=f;break}V=t.return}}var Jf=Math.ceil,ji=G.ReactCurrentDispatcher,ma=G.ReactCurrentOwner,jt=G.ReactCurrentBatchConfig,me=0,Ie=null,Me=null,He=0,ht=0,yr=pn(0),Fe=0,hl=null,An=0,_i=0,ha=0,gl=null,it=null,ga=0,xr=1/0,Xt=null,Si=!1,va=null,xn=null,bi=!1,wn=null,Ni=0,vl=0,ya=null,Ei=-1,Ci=0;function Ze(){return(me&6)!==0?Le():Ei!==-1?Ei:Ei=Le()}function kn(e){return(e.mode&1)===0?1:(me&2)!==0&&He!==0?He&-He:Rf.transition!==null?(Ci===0&&(Ci=rs()),Ci):(e=ye,e!==0||(e=window.event,e=e===void 0?16:fs(e.type)),e)}function Lt(e,t,n,r){if(50<vl)throw vl=0,ya=null,Error(s(185));Br(e,n,r),((me&2)===0||e!==Ie)&&(e===Ie&&((me&2)===0&&(_i|=n),Fe===4&&jn(e,He)),ot(e,r),n===1&&me===0&&(t.mode&1)===0&&(xr=Le()+500,ni&&hn()))}function ot(e,t){var n=e.callbackNode;Pd(e,t);var r=Dl(e,e===Ie?He:0);if(r===0)n!==null&&es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&es(n),t===1)e.tag===0?Pf(fc.bind(null,e)):Xs(fc.bind(null,e)),bf(function(){(me&6)===0&&hn()}),n=null;else{switch(ls(r)){case 1:n=Yi;break;case 4:n=ts;break;case 16:n=zl;break;case 536870912:n=ns;break;default:n=zl}n=wc(n,dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dc(e,t){if(Ei=-1,Ci=0,(me&6)!==0)throw Error(s(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Dl(e,e===Ie?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Pi(e,r);else{t=r;var l=me;me|=2;var i=mc();(Ie!==e||He!==t)&&(Xt=null,xr=Le()+500,$n(e,t));do try{Yf();break}catch(f){pc(e,f)}while(!0);Fo(),ji.current=i,me=l,Me!==null?t=0:(Ie=null,He=0,t=Fe)}if(t!==0){if(t===2&&(l=Xi(e),l!==0&&(r=l,t=xa(e,l))),t===1)throw n=hl,$n(e,0),jn(e,r),ot(e,Le()),n;if(t===6)jn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Kf(l)&&(t=Pi(e,r),t===2&&(i=Xi(e),i!==0&&(r=i,t=xa(e,i))),t===1))throw n=hl,$n(e,0),jn(e,r),ot(e,Le()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Wn(e,it,Xt);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=ga+500-Le(),10<t)){if(Dl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bo(Wn.bind(null,e,it,Xt),t);break}Wn(e,it,Xt);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-bt(r);i=1<<u,u=t[u],u>l&&(l=u),r&=~i}if(r=l,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jf(r/1960))-r,10<r){e.timeoutHandle=bo(Wn.bind(null,e,it,Xt),r);break}Wn(e,it,Xt);break;case 5:Wn(e,it,Xt);break;default:throw Error(s(329))}}}return ot(e,Le()),e.callbackNode===n?dc.bind(null,e):null}function xa(e,t){var n=gl;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=Pi(e,t),e!==2&&(t=it,it=n,t!==null&&wa(t)),e}function wa(e){it===null?it=e:it.push.apply(it,e)}function Kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Nt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~ha,t&=~_i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if((me&6)!==0)throw Error(s(327));wr();var t=Dl(e,0);if((t&1)===0)return ot(e,Le()),null;var n=Pi(e,t);if(e.tag!==0&&n===2){var r=Xi(e);r!==0&&(t=r,n=xa(e,r))}if(n===1)throw n=hl,$n(e,0),jn(e,t),ot(e,Le()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,it,Xt),ot(e,Le()),null}function ka(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(xr=Le()+500,ni&&hn())}}function Bn(e){wn!==null&&wn.tag===0&&(me&6)===0&&wr();var t=me;me|=1;var n=jt.transition,r=ye;try{if(jt.transition=null,ye=1,e)return e()}finally{ye=r,jt.transition=n,me=t,(me&6)===0&&hn()}}function ja(){ht=yr.current,be(yr)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sf(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:hr(),be(nt),be(Ke),Vo();break;case 5:$o(r);break;case 4:hr();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:Do(r.type._context);break;case 22:case 23:ja()}n=n.return}if(Ie=e,Me=e=_n(e.current,null),He=ht=t,Fe=0,hl=null,ha=_i=An=0,it=gl=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var u=i.next;i.next=l,r.next=u}n.pending=r}Dn=null}return e}function pc(e,t){do{var n=Me;try{if(Fo(),fi.current=gi,pi){for(var r=Ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}pi=!1}if(In=0,Ue=Oe=Ce=null,ul=!1,cl=0,ma.current=null,n===null||n.return===null){Fe=1,hl=t,Me=null;break}e:{var i=e,u=n.return,f=n,m=t;if(t=He,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var _=m,T=f,z=T.tag;if((T.mode&1)===0&&(z===0||z===11||z===15)){var L=T.alternate;L?(T.updateQueue=L.updateQueue,T.memoizedState=L.memoizedState,T.lanes=L.lanes):(T.updateQueue=null,T.memoizedState=null)}var $=Uu(u);if($!==null){$.flags&=-257,Iu($,u,f,i,t),$.mode&1&&Du(i,_,t),t=$,m=_;var Q=t.updateQueue;if(Q===null){var J=new Set;J.add(m),t.updateQueue=J}else Q.add(m);break e}else{if((t&1)===0){Du(i,_,t),_a();break e}m=Error(s(426))}}else if(Ne&&f.mode&1){var Te=Uu(u);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),Iu(Te,u,f,i,t),Mo(gr(m,f));break e}}i=m=gr(m,f),Fe!==4&&(Fe=2),gl===null?gl=[i]:gl.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=Ou(i,m,t);su(i,x);break e;case 1:f=m;var g=i.type,k=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(xn===null||!xn.has(k)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=Fu(i,f,t);su(i,F);break e}}i=i.return}while(i!==null)}gc(n)}catch(Y){t=Y,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function mc(){var e=ji.current;return ji.current=gi,e===null?gi:e}function _a(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ie===null||(An&268435455)===0&&(_i&268435455)===0||jn(Ie,He)}function Pi(e,t){var n=me;me|=2;var r=mc();(Ie!==e||He!==t)&&(Xt=null,$n(e,t));do try{Gf();break}catch(l){pc(e,l)}while(!0);if(Fo(),me=n,ji.current=r,Me!==null)throw Error(s(261));return Ie=null,He=0,Fe}function Gf(){for(;Me!==null;)hc(Me)}function Yf(){for(;Me!==null&&!wd();)hc(Me)}function hc(e){var t=xc(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?gc(e):Me=t,ma.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=$f(n,t,ht),n!==null){Me=n;return}}else{if(n=Wf(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Fe===0&&(Fe=5)}function Wn(e,t,n){var r=ye,l=jt.transition;try{jt.transition=null,ye=1,Xf(e,t,n,r)}finally{jt.transition=l,ye=r}return null}function Xf(e,t,n,r){do wr();while(wn!==null);if((me&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Rd(e,i),e===Ie&&(Me=Ie=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bi||(bi=!0,wc(zl,function(){return wr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=jt.transition,jt.transition=null;var u=ye;ye=1;var f=me;me|=4,ma.current=null,Hf(e,n),oc(n,e),vf(_o),Al=!!jo,_o=jo=null,e.current=n,Qf(n),kd(),me=f,ye=u,jt.transition=i}else e.current=n;if(bi&&(bi=!1,wn=e,Ni=l),i=e.pendingLanes,i===0&&(xn=null),Sd(n.stateNode),ot(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Si)throw Si=!1,e=va,va=null,e;return(Ni&1)!==0&&e.tag!==0&&wr(),i=e.pendingLanes,(i&1)!==0?e===ya?vl++:(vl=0,ya=e):vl=0,hn(),null}function wr(){if(wn!==null){var e=ls(Ni),t=jt.transition,n=ye;try{if(jt.transition=null,ye=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ni=0,(me&6)!==0)throw Error(s(331));var l=me;for(me|=4,V=e.current;V!==null;){var i=V,u=i.child;if((V.flags&16)!==0){var f=i.deletions;if(f!==null){for(var m=0;m<f.length;m++){var _=f[m];for(V=_;V!==null;){var T=V;switch(T.tag){case 0:case 11:case 15:ml(8,T,i)}var z=T.child;if(z!==null)z.return=T,V=z;else for(;V!==null;){T=V;var L=T.sibling,$=T.return;if(tc(T),T===_){V=null;break}if(L!==null){L.return=$,V=L;break}V=$}}}var Q=i.alternate;if(Q!==null){var J=Q.child;if(J!==null){Q.child=null;do{var Te=J.sibling;J.sibling=null,J=Te}while(J!==null)}}V=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,V=u;else e:for(;V!==null;){if(i=V,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ml(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,V=x;break e}V=i.return}}var g=e.current;for(V=g;V!==null;){u=V;var k=u.child;if((u.subtreeFlags&2064)!==0&&k!==null)k.return=u,V=k;else e:for(u=g;V!==null;){if(f=V,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ki(9,f)}}catch(Y){Pe(f,f.return,Y)}if(f===u){V=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,V=F;break e}V=f.return}}if(me=l,hn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{ye=n,jt.transition=t}}return!1}function vc(e,t,n){t=gr(n,t),t=Ou(e,t,1),e=vn(e,t,1),t=Ze(),e!==null&&(Br(e,1,t),ot(e,t))}function Pe(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=gr(n,e),e=Fu(t,e,1),t=vn(t,e,1),e=Ze(),t!==null&&(Br(t,1,e),ot(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(He&n)===n&&(Fe===4||Fe===3&&(He&130023424)===He&&500>Le()-ga?$n(e,0):ha|=n),ot(e,t)}function yc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fl,Fl<<=1,(Fl&130023424)===0&&(Fl=4194304)));var n=Ze();e=Kt(e,t),e!==null&&(Br(e,t,n),ot(e,n))}function Zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),yc(e,n)}var xc;xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Bf(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Ne&&(t.flags&1048576)!==0&&qs(t,li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var l=sr(t,Ke.current);mr(t,n),l=Jo(null,t,r,e,l,n);var i=Ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,ti(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ao(t),l.updater=vi,t.stateNode=l,l._reactInternals=t,ea(t,r,e,n),t=la(null,t,r,!0,i,n)):(t.tag=0,Ne&&i&&Ro(t),qe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=np(r),e=Ct(r,e),l){case 0:t=ra(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=Bu(null,t,r,Ct(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),ra(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),Hu(e,t,r,l,n);case 3:e:{if(Qu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,au(e,t),ci(t,r,null,n);var u=t.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=gr(Error(s(423)),t),t=Ju(e,t,r,n,l);break e}else if(r!==l){l=gr(Error(s(424)),t),t=Ju(e,t,r,n,l);break e}else for(mt=fn(t.stateNode.containerInfo.firstChild),pt=t,Ne=!0,Et=null,n=iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===l){t=Yt(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&zo(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,So(r,l)?u=null:i!==null&&So(r,i)&&(t.flags|=32),Vu(e,t),qe(e,t,u,n),t.child;case 6:return e===null&&zo(t),null;case 13:return Ku(e,t,n);case 4:return Bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),Au(e,t,r,l,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,je(ai,r._currentValue),r._currentValue=u,i!==null)if(Nt(i.value,u)){if(i.children===l.children&&!nt.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){u=i.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(i.tag===1){m=Gt(-1,n&-n),m.tag=2;var _=i.updateQueue;if(_!==null){_=_.shared;var T=_.pending;T===null?m.next=m:(m.next=T.next,T.next=m),_.pending=m}}i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),Uo(i.return,n,t),f.lanes|=n;break}m=m.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(s(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Uo(u,n,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}qe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,mr(t,n),l=wt(l),r=r(l),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,l=Ct(r,t.pendingProps),l=Ct(r.type,l),Bu(e,t,r,l,n);case 15:return $u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),xi(e,t),t.tag=1,rt(r)?(e=!0,ti(t)):e=!1,mr(t,n),zu(t,r,l),ea(t,r,l,n),la(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return Wu(e,t,n)}throw Error(s(156,t.tag))};function wc(e,t){return Za(e,t)}function tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new tp(e,t,n,r)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function np(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qe)return 11;if(e===X)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,l,i){var u=2;if(r=e,typeof e=="function")Sa(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Re:return Vn(n.children,l,i,t);case we:u=8,l|=8;break;case ut:return e=_t(12,n,t,l|2),e.elementType=ut,e.lanes=i,e;case W:return e=_t(13,n,t,l),e.elementType=W,e.lanes=i,e;case ne:return e=_t(19,n,t,l),e.elementType=ne,e.lanes=i,e;case re:return Li(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $e:u=10;break e;case gt:u=9;break e;case Qe:u=11;break e;case X:u=14;break e;case q:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=_t(u,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Vn(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function Li(e,t,n,r){return e=_t(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function ba(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function Na(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,l,i,u,f,m){return e=new rp(e,t,n,f,m),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ao(i),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return mn;e=e._reactInternals;e:{if(K(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(rt(n))return Gs(e,n,t)}return t}function jc(e,t,n,r,l,i,u,f,m){return e=Ea(n,r,!0,e,l,i,u,f,m),e.context=kc(null),n=e.current,r=Ze(),l=kn(n),i=Gt(r,l),i.callback=t??null,vn(n,i,l),e.current.lanes=l,Br(e,l,r),ot(e,r),e}function Ti(e,t,n,r){var l=t.current,i=Ze(),u=kn(l);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(l,t,u),e!==null&&(Lt(e,l,u,i),ui(e,l,u)),u}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function ip(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}Mi.prototype.render=Pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ti(e,t,null,null)},Mi.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){Ti(null,e,null,null)}),t[Vt]=null}};function Mi(e){this._internalRoot=e}Mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=as();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&cs(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bc(){}function op(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var _=zi(u);i.call(_)}}var u=jc(t,r,e,0,null,!1,!1,"",bc);return e._reactRootContainer=u,e[Vt]=u.current,tl(e.nodeType===8?e.parentNode:e),Bn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var _=zi(m);f.call(_)}}var m=Ea(e,0,!1,null,null,!1,!1,"",bc);return e._reactRootContainer=m,e[Vt]=m.current,tl(e.nodeType===8?e.parentNode:e),Bn(function(){Ti(t,m,n,r)}),m}function Fi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var f=l;l=function(){var m=zi(u);f.call(m)}}Ti(t,u,e,l)}else u=op(n,t,e,l,r);return zi(u)}is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Zi(t,n|1),ot(t,Le()),(me&6)===0&&(xr=Le()+500,hn()))}break;case 13:Bn(function(){var r=Kt(e,1);if(r!==null){var l=Ze();Lt(r,e,1,l)}}),Ca(e,1)}},eo=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Ze();Lt(t,e,134217728,n)}Ca(e,134217728)}},os=function(e){if(e.tag===13){var t=kn(e),n=Kt(e,t);if(n!==null){var r=Ze();Lt(n,e,t,r)}Ca(e,t)}},as=function(){return ye},ss=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}},Fr=function(e,t,n){switch(t){case"input":if(Gn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Zl(r);if(!l)throw Error(s(90));Jn(r),Gn(r,l)}}}break;case"textarea":Rr(e,n);break;case"select":t=n.value,t!=null&&tt(e,!!n.multiple,t,!1)}},De=ka,Rl=Bn;var ap={usingClientEntryPoint:!1,Events:[ll,or,Zl,de,rn,ka]},yl={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sp={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wt(e),e===null?null:e.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Ml=Di.inject(sp),Ot=Di}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(s(200));return lp(e,t,null,n)},at.createRoot=function(e,t){if(!Ra(e))throw Error(s(299));var n=!1,r="",l=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,l),e[Vt]=t.current,tl(e.nodeType===8?e.parentNode:e),new Pa(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Wt(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return Bn(e)},at.hydrate=function(e,t,n){if(!Oi(t))throw Error(s(200));return Fi(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",u=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=jc(t,null,e,1,n??null,l,!1,i,u),e[Vt]=t.current,tl(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Mi(t)},at.render=function(e,t,n){if(!Oi(t))throw Error(s(200));return Fi(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(s(40));return e._reactRootContainer?(Bn(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},at.unstable_batchedUpdates=ka,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Fi(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var zc;function Yc(){if(zc)return za.exports;zc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),za.exports=vp(),za.exports}var Mc;function yp(){if(Mc)return Ui;Mc=1;var o=Yc();return Ui.createRoot=o.createRoot,Ui.hydrateRoot=o.hydrateRoot,Ui}var xp=yp();const wp=Gc(xp);Yc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},Sl.apply(this,arguments)}var bn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(bn||(bn={}));const Oc="popstate";function kp(o){o===void 0&&(o={});function c(d,p){let{pathname:h,search:y,hash:b}=d.location;return Ia("",{pathname:h,search:y,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(d,p){return typeof p=="string"?p:Bi(p)}return _p(c,s,null,o)}function ze(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function Qa(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function jp(){return Math.random().toString(36).substr(2,8)}function Fc(o,c){return{usr:o.state,key:o.key,idx:c}}function Ia(o,c,s,d){return s===void 0&&(s=null),Sl({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof c=="string"?br(c):c,{state:s,key:c&&c.key||d||jp()})}function Bi(o){let{pathname:c="/",search:s="",hash:d=""}=o;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function br(o){let c={};if(o){let s=o.indexOf("#");s>=0&&(c.hash=o.substr(s),o=o.substr(0,s));let d=o.indexOf("?");d>=0&&(c.search=o.substr(d),o=o.substr(0,d)),o&&(c.pathname=o)}return c}function _p(o,c,s,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,y=p.history,b=bn.Pop,j=null,P=C();P==null&&(P=0,y.replaceState(Sl({},y.state,{idx:P}),""));function C(){return(y.state||{idx:null}).idx}function S(){b=bn.Pop;let M=C(),ae=M==null?null:M-P;P=M,j&&j({action:b,location:A.location,delta:ae})}function D(M,ae){b=bn.Push;let ue=Ia(A.location,M,ae);P=C()+1;let ie=Fc(ue,P),G=A.createHref(ue);try{y.pushState(ie,"",G)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;p.location.assign(G)}h&&j&&j({action:b,location:A.location,delta:1})}function O(M,ae){b=bn.Replace;let ue=Ia(A.location,M,ae);P=C();let ie=Fc(ue,P),G=A.createHref(ue);y.replaceState(ie,"",G),h&&j&&j({action:b,location:A.location,delta:0})}function I(M){let ae=p.location.origin!=="null"?p.location.origin:p.location.href,ue=typeof M=="string"?M:Bi(M);return ue=ue.replace(/ $/,"%20"),ze(ae,"No window.location.(origin|href) available to create URL for href: "+ue),new URL(ue,ae)}let A={get action(){return b},get location(){return o(p,y)},listen(M){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(Oc,S),j=M,()=>{p.removeEventListener(Oc,S),j=null}},createHref(M){return c(p,M)},createURL:I,encodeLocation(M){let ae=I(M);return{pathname:ae.pathname,search:ae.search,hash:ae.hash}},push:D,replace:O,go(M){return y.go(M)}};return A}var Dc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Dc||(Dc={}));function Sp(o,c,s){return s===void 0&&(s="/"),bp(o,c,s)}function bp(o,c,s,d){let p=typeof c=="string"?br(c):c,h=Ja(p.pathname||"/",s);if(h==null)return null;let y=Xc(o);Np(y);let b=null;for(let j=0;b==null&&j<y.length;++j){let P=Up(h);b=Op(y[j],P)}return b}function Xc(o,c,s,d){c===void 0&&(c=[]),s===void 0&&(s=[]),d===void 0&&(d="");let p=(h,y,b)=>{let j={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};j.relativePath.startsWith("/")&&(ze(j.relativePath.startsWith(d),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(d.length));let P=Nn([d,j.relativePath]),C=s.concat(j);h.children&&h.children.length>0&&(ze(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+P+'".')),Xc(h.children,c,C,P)),!(h.path==null&&!h.index)&&c.push({path:P,score:zp(P,h.index),routesMeta:C})};return o.forEach((h,y)=>{var b;if(h.path===""||!((b=h.path)!=null&&b.includes("?")))p(h,y);else for(let j of qc(h.path))p(h,y,j)}),c}function qc(o){let c=o.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),h=s.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let y=qc(d.join("/")),b=[];return b.push(...y.map(j=>j===""?h:[h,j].join("/"))),p&&b.push(...y),b.map(j=>o.startsWith("/")&&j===""?"/":j)}function Np(o){o.sort((c,s)=>c.score!==s.score?s.score-c.score:Mp(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const Ep=/^:[\w-]+$/,Cp=3,Pp=2,Rp=1,Lp=10,Tp=-2,Uc=o=>o==="*";function zp(o,c){let s=o.split("/"),d=s.length;return s.some(Uc)&&(d+=Tp),c&&(d+=Pp),s.filter(p=>!Uc(p)).reduce((p,h)=>p+(Ep.test(h)?Cp:h===""?Rp:Lp),d)}function Mp(o,c){return o.length===c.length&&o.slice(0,-1).every((d,p)=>d===c[p])?o[o.length-1]-c[c.length-1]:0}function Op(o,c,s){let{routesMeta:d}=o,p={},h="/",y=[];for(let b=0;b<d.length;++b){let j=d[b],P=b===d.length-1,C=h==="/"?c:c.slice(h.length)||"/",S=Fp({path:j.relativePath,caseSensitive:j.caseSensitive,end:P},C),D=j.route;if(!S)return null;Object.assign(p,S.params),y.push({params:p,pathname:Nn([h,S.pathname]),pathnameBase:Wp(Nn([h,S.pathnameBase])),route:D}),S.pathnameBase!=="/"&&(h=Nn([h,S.pathnameBase]))}return y}function Fp(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,d]=Dp(o.path,o.caseSensitive,o.end),p=c.match(s);if(!p)return null;let h=p[0],y=h.replace(/(.)\/+$/,"$1"),b=p.slice(1);return{params:d.reduce((P,C,S)=>{let{paramName:D,isOptional:O}=C;if(D==="*"){let A=b[S]||"";y=h.slice(0,h.length-A.length).replace(/(.)\/+$/,"$1")}const I=b[S];return O&&!I?P[D]=void 0:P[D]=(I||"").replace(/%2F/g,"/"),P},{}),pathname:h,pathnameBase:y,pattern:o}}function Dp(o,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),Qa(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,j)=>(d.push({paramName:b,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function Up(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Qa(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),o}}function Ja(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=o.charAt(s);return d&&d!=="/"?null:o.slice(s)||"/"}const Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ap=o=>Ip.test(o);function Bp(o,c){c===void 0&&(c="/");let{pathname:s,search:d="",hash:p=""}=typeof o=="string"?br(o):o,h;if(s)if(Ap(s))h=s;else{if(s.includes("//")){let y=s;s=s.replace(/\/\/+/g,"/"),Qa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(y+" -> "+s))}s.startsWith("/")?h=Ic(s.substring(1),"/"):h=Ic(s,c)}else h=c;return{pathname:h,search:Vp(d),hash:Hp(p)}}function Ic(o,c){let s=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function Fa(o,c,s,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(o){return o.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Ka(o,c){let s=$p(o);return c?s.map((d,p)=>p===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function Ga(o,c,s,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=br(o):(p=Sl({},o),ze(!p.pathname||!p.pathname.includes("?"),Fa("?","pathname","search",p)),ze(!p.pathname||!p.pathname.includes("#"),Fa("#","pathname","hash",p)),ze(!p.search||!p.search.includes("#"),Fa("#","search","hash",p)));let h=o===""||p.pathname==="",y=h?"/":p.pathname,b;if(y==null)b=s;else{let S=c.length-1;if(!d&&y.startsWith("..")){let D=y.split("/");for(;D[0]==="..";)D.shift(),S-=1;p.pathname=D.join("/")}b=S>=0?c[S]:"/"}let j=Bp(p,b),P=y&&y!=="/"&&y.endsWith("/"),C=(h||y===".")&&s.endsWith("/");return!j.pathname.endsWith("/")&&(P||C)&&(j.pathname+="/"),j}const Nn=o=>o.join("/").replace(/\/\/+/g,"/"),Wp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Hp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Qp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Zc=["post","put","patch","delete"];new Set(Zc);const Jp=["get",...Zc];new Set(Jp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},bl.apply(this,arguments)}const Ya=w.createContext(null),Kp=w.createContext(null),En=w.createContext(null),Ji=w.createContext(null),qt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=w.createContext(null);function Gp(o,c){let{relative:s}=c===void 0?{}:c;Nr()||ze(!1);let{basename:d,navigator:p}=w.useContext(En),{hash:h,pathname:y,search:b}=nd(o,{relative:s}),j=y;return d!=="/"&&(j=y==="/"?d:Nn([d,y])),p.createHref({pathname:j,search:b,hash:h})}function Nr(){return w.useContext(Ji)!=null}function Zt(){return Nr()||ze(!1),w.useContext(Ji).location}function td(o){w.useContext(En).static||w.useLayoutEffect(o)}function Cn(){let{isDataRoute:o}=w.useContext(qt);return o?um():Yp()}function Yp(){Nr()||ze(!1);let o=w.useContext(Ya),{basename:c,future:s,navigator:d}=w.useContext(En),{matches:p}=w.useContext(qt),{pathname:h}=Zt(),y=JSON.stringify(Ka(p,s.v7_relativeSplatPath)),b=w.useRef(!1);return td(()=>{b.current=!0}),w.useCallback(function(P,C){if(C===void 0&&(C={}),!b.current)return;if(typeof P=="number"){d.go(P);return}let S=Ga(P,JSON.parse(y),h,C.relative==="path");o==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:Nn([c,S.pathname])),(C.replace?d.replace:d.push)(S,C.state,C)},[c,d,y,h,o])}function Xp(){let{matches:o}=w.useContext(qt),c=o[o.length-1];return c?c.params:{}}function nd(o,c){let{relative:s}=c===void 0?{}:c,{future:d}=w.useContext(En),{matches:p}=w.useContext(qt),{pathname:h}=Zt(),y=JSON.stringify(Ka(p,d.v7_relativeSplatPath));return w.useMemo(()=>Ga(o,JSON.parse(y),h,s==="path"),[o,y,h,s])}function qp(o,c){return Zp(o,c)}function Zp(o,c,s,d){Nr()||ze(!1);let{navigator:p}=w.useContext(En),{matches:h}=w.useContext(qt),y=h[h.length-1],b=y?y.params:{};y&&y.pathname;let j=y?y.pathnameBase:"/";y&&y.route;let P=Zt(),C;if(c){var S;let M=typeof c=="string"?br(c):c;j==="/"||(S=M.pathname)!=null&&S.startsWith(j)||ze(!1),C=M}else C=P;let D=C.pathname||"/",O=D;if(j!=="/"){let M=j.replace(/^\//,"").split("/");O="/"+D.replace(/^\//,"").split("/").slice(M.length).join("/")}let I=Sp(o,{pathname:O}),A=lm(I&&I.map(M=>Object.assign({},M,{params:Object.assign({},b,M.params),pathname:Nn([j,p.encodeLocation?p.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?j:Nn([j,p.encodeLocation?p.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),h,s,d);return c&&A?w.createElement(Ji.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:bn.Pop}},A):A}function em(){let o=sm(),c=Qp(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},c),s?w.createElement("pre",{style:p},s):null,null)}const tm=w.createElement(em,null);class nm extends w.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?w.createElement(qt.Provider,{value:this.props.routeContext},w.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(o){let{routeContext:c,match:s,children:d}=o,p=w.useContext(Ya);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(qt.Provider,{value:c},d)}function lm(o,c,s,d){var p;if(c===void 0&&(c=[]),s===void 0&&(s=null),d===void 0&&(d=null),o==null){var h;if(!s)return null;if(s.errors)o=s.matches;else if((h=d)!=null&&h.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let y=o,b=(p=s)==null?void 0:p.errors;if(b!=null){let C=y.findIndex(S=>S.route.id&&(b==null?void 0:b[S.route.id])!==void 0);C>=0||ze(!1),y=y.slice(0,Math.min(y.length,C+1))}let j=!1,P=-1;if(s&&d&&d.v7_partialHydration)for(let C=0;C<y.length;C++){let S=y[C];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(P=C),S.route.id){let{loaderData:D,errors:O}=s,I=S.route.loader&&D[S.route.id]===void 0&&(!O||O[S.route.id]===void 0);if(S.route.lazy||I){j=!0,P>=0?y=y.slice(0,P+1):y=[y[0]];break}}}return y.reduceRight((C,S,D)=>{let O,I=!1,A=null,M=null;s&&(O=b&&S.route.id?b[S.route.id]:void 0,A=S.route.errorElement||tm,j&&(P<0&&D===0?(cm("route-fallback"),I=!0,M=null):P===D&&(I=!0,M=S.route.hydrateFallbackElement||null)));let ae=c.concat(y.slice(0,D+1)),ue=()=>{let ie;return O?ie=A:I?ie=M:S.route.Component?ie=w.createElement(S.route.Component,null):S.route.element?ie=S.route.element:ie=C,w.createElement(rm,{match:S,routeContext:{outlet:C,matches:ae,isDataRoute:s!=null},children:ie})};return s&&(S.route.ErrorBoundary||S.route.errorElement||D===0)?w.createElement(nm,{location:s.location,revalidation:s.revalidation,component:A,error:O,children:ue(),routeContext:{outlet:null,matches:ae,isDataRoute:!0}}):ue()},null)}var rd=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(rd||{}),ld=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(ld||{});function im(o){let c=w.useContext(Ya);return c||ze(!1),c}function om(o){let c=w.useContext(Kp);return c||ze(!1),c}function am(o){let c=w.useContext(qt);return c||ze(!1),c}function id(o){let c=am(),s=c.matches[c.matches.length-1];return s.route.id||ze(!1),s.route.id}function sm(){var o;let c=w.useContext(ed),s=om(),d=id();return c!==void 0?c:(o=s.errors)==null?void 0:o[d]}function um(){let{router:o}=im(rd.UseNavigateStable),c=id(ld.UseNavigateStable),s=w.useRef(!1);return td(()=>{s.current=!0}),w.useCallback(function(p,h){h===void 0&&(h={}),s.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,bl({fromRouteId:c},h)))},[o,c])}const Ac={};function cm(o,c,s){Ac[o]||(Ac[o]=!0)}function dm(o,c){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function od(o){let{to:c,replace:s,state:d,relative:p}=o;Nr()||ze(!1);let{future:h,static:y}=w.useContext(En),{matches:b}=w.useContext(qt),{pathname:j}=Zt(),P=Cn(),C=Ga(c,Ka(b,h.v7_relativeSplatPath),j,p==="path"),S=JSON.stringify(C);return w.useEffect(()=>P(JSON.parse(S),{replace:s,state:d,relative:p}),[P,S,p,s,d]),null}function kl(o){ze(!1)}function fm(o){let{basename:c="/",children:s=null,location:d,navigationType:p=bn.Pop,navigator:h,static:y=!1,future:b}=o;Nr()&&ze(!1);let j=c.replace(/^\/*/,"/"),P=w.useMemo(()=>({basename:j,navigator:h,static:y,future:bl({v7_relativeSplatPath:!1},b)}),[j,b,h,y]);typeof d=="string"&&(d=br(d));let{pathname:C="/",search:S="",hash:D="",state:O=null,key:I="default"}=d,A=w.useMemo(()=>{let M=Ja(C,j);return M==null?null:{location:{pathname:M,search:S,hash:D,state:O,key:I},navigationType:p}},[j,C,S,D,O,I,p]);return A==null?null:w.createElement(En.Provider,{value:P},w.createElement(Ji.Provider,{children:s,value:A}))}function pm(o){let{children:c,location:s}=o;return qp(Aa(c),s)}new Promise(()=>{});function Aa(o,c){c===void 0&&(c=[]);let s=[];return w.Children.forEach(o,(d,p)=>{if(!w.isValidElement(d))return;let h=[...c,p];if(d.type===w.Fragment){s.push.apply(s,Aa(d.props.children,h));return}d.type!==kl&&ze(!1),!d.props.index||!d.props.children||ze(!1);let y={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=Aa(d.props.children,h)),s.push(y)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},Ba.apply(this,arguments)}function mm(o,c){if(o==null)return{};var s={},d=Object.keys(o),p,h;for(h=0;h<d.length;h++)p=d[h],!(c.indexOf(p)>=0)&&(s[p]=o[p]);return s}function hm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function gm(o,c){return o.button===0&&(!c||c==="_self")&&!hm(o)}const vm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const xm="startTransition",Bc=mp[xm];function wm(o){let{basename:c,children:s,future:d,window:p}=o,h=w.useRef();h.current==null&&(h.current=kp({window:p,v5Compat:!0}));let y=h.current,[b,j]=w.useState({action:y.action,location:y.location}),{v7_startTransition:P}=d||{},C=w.useCallback(S=>{P&&Bc?Bc(()=>j(S)):j(S)},[j,P]);return w.useLayoutEffect(()=>y.listen(C),[y,C]),w.useEffect(()=>dm(d),[d]),w.createElement(fm,{basename:c,children:s,location:b.location,navigationType:b.action,navigator:y,future:d})}const km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_m=w.forwardRef(function(c,s){let{onClick:d,relative:p,reloadDocument:h,replace:y,state:b,target:j,to:P,preventScrollReset:C,viewTransition:S}=c,D=mm(c,vm),{basename:O}=w.useContext(En),I,A=!1;if(typeof P=="string"&&jm.test(P)&&(I=P,km))try{let ie=new URL(window.location.href),G=P.startsWith("//")?new URL(ie.protocol+P):new URL(P),Z=Ja(G.pathname,O);G.origin===ie.origin&&Z!=null?P=Z+G.search+G.hash:A=!0}catch{}let M=Gp(P,{relative:p}),ae=Sm(P,{replace:y,state:b,target:j,preventScrollReset:C,relative:p,viewTransition:S});function ue(ie){d&&d(ie),ie.defaultPrevented||ae(ie)}return w.createElement("a",Ba({},D,{href:I||M,onClick:A||h?d:ue,ref:s,target:j}))});var $c;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})($c||($c={}));var Wc;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Wc||(Wc={}));function Sm(o,c){let{target:s,replace:d,state:p,preventScrollReset:h,relative:y,viewTransition:b}=c===void 0?{}:c,j=Cn(),P=Zt(),C=nd(o,{relative:y});return w.useCallback(S=>{if(gm(S,s)){S.preventDefault();let D=d!==void 0?d:Bi(P)===Bi(C);j(o,{replace:D,state:p,preventScrollReset:h,relative:y,viewTransition:b})}},[P,j,C,d,p,s,o,h,y,b])}const ad=Qi.createContext(null),Xa=document.createElement("div");Xa.id="root";document.body.appendChild(Xa);const sd=document.createElement("style");sd.textContent=`
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
`;document.head.appendChild(sd);function st(...o){return o.filter(Boolean).join(" ")}function Er(o){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o})}function bm(o){return a.jsxs(Er,{...o,children:[a.jsx("path",{d:"M12 5v14"}),a.jsx("path",{d:"M5 12h14"})]})}function ud(o){return a.jsx(Er,{...o,children:a.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function cd(o){return a.jsxs(Er,{...o,children:[a.jsx("path",{d:"m15 5 4 4"}),a.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function dd(o){return a.jsx(Er,{...o,children:a.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function Nm(o){return a.jsxs(Er,{...o,children:[a.jsx("path",{d:"M19 12H5"}),a.jsx("path",{d:"m12 5-7 7 7 7"})]})}function Em(o){return a.jsxs(Er,{...o,children:[a.jsx("path",{d:"M12 4v10"}),a.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),a.jsx("path",{d:"M4 20h16"})]})}function Cm(o){return a.jsxs("svg",{viewBox:"0 0 180 180",fill:"none","aria-hidden":"true",...o,children:[a.jsx("path",{d:"M18 84.8528 85.8822 16.9706c9.3726-9.37262 24.5688-9.37262 33.9418 0 9.372 9.3725 9.372 24.5685 0 33.9411L68.5581 102.177",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"}),a.jsx("path",{d:"m69.2652 101.47 50.5578-50.558c9.373-9.3726 24.569-9.3726 33.942 0l.353.3535c9.373 9.3726 9.373 24.5686 0 33.9411L92.7248 146.6c-3.1242 3.124-3.1242 8.189 0 11.313l12.6062 12.607",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"}),a.jsx("path",{d:"M102.853 33.9411 52.6482 84.1457c-9.3726 9.3726-9.3726 24.5683 0 33.9413 9.3726 9.372 24.5685 9.372 33.9411 0l50.2047-50.2048",stroke:"currentColor",strokeWidth:"12",strokeLinecap:"round"})]})}async function Be(o,c){const s=await fetch(o,{credentials:"include",headers:{"Content-Type":"application/json",...(c==null?void 0:c.headers)||{}},...c});if(s.status===204)return;const p=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const h=typeof p=="object"&&p!==null&&"detail"in p?String(p.detail):s.statusText;throw new Error(h||"Request failed.")}return p}function jl(o){if(!o)return"Not available";const c=new Date(o);return Number.isNaN(c.getTime())?o:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(c)}function kr(o){if(!Number.isFinite(o)||o<=0)return"0 B";const c=["B","KB","MB","GB","TB"];let s=o,d=0;for(;s>=1024&&d<c.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${c[d]}`}function fd(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1024**3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} GB`}function Pm(o){return fd(o)}function Rm(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1e3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} CPU`}function $a(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function $i(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function Wa(o){return $i(o)}function Vc(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1e3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Va(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1024**3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Hc(o){return Va(o)}function Da(o){return!Number.isFinite(o)||!o||o<=0?"":o%1===0?o.toFixed(0):o.toFixed(1)}function Ii(o){return Number.isFinite(o)?`${Number(o).toFixed(1)}%`:"-"}function _l(o){if(!o)return"-";const c=new Date(o).getTime();if(Number.isNaN(c))return"-";const s=Date.now()-c;if(s<0)return"Just now";const d=6e4,p=60*d,h=24*p;return s<p?`${Math.max(1,Math.floor(s/d))}m ago`:s<h?`${Math.floor(s/p)}h ago`:`${Math.floor(s/h)}d ago`}function jr(o){return Number.isFinite(o)?Number(o)>80?"metric-danger":Number(o)>60?"metric-warning":"metric-ok":""}function Ua(o){return Number.isFinite(o)?{"--metric-percent":Math.max(0,Math.min(100,Number(o)))}:void 0}function Wi(o,c){return!Number.isFinite(o)||!Number.isFinite(c)||!c||c<=0?null:Number(o)/Number(c)*100}function Lm(o,c){if(!o)return"Not started";const s=new Date(o).getTime(),d=c?new Date(c).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const p=Math.floor((d-s)/1e3),h=Math.floor(p/3600),y=Math.floor(p%3600/60),b=p%60;return h>0?`${h}h ${y}m ${b}s`:y>0?`${y}m ${b}s`:`${b}s`}function Tm(o,c=200){return`/api/v1/jobs/${o}/log?lines=${c}`}function zm(o){return`/api/v1/jobs/${o}/log?full=true`}function Mm(o){return o.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function Om(o){return`${[o.project_id||"controller",o.job_type,o.job_id].map(Mm).join("__")}.log`}function Fm(o){return`/api/v1/projects/${encodeURIComponent(o)}/lockfile`}function Dm(o,c){return`/api/v1/projects/${encodeURIComponent(o)}/export?mode=${encodeURIComponent(c)}`}function Um(o,c){return`bulletjournal_export_${o}_${c==="code_only"?"code":c==="code_and_data"?"code_and_data":"full"}.zip`}function Qc(o){const c=o.headers.get("content-disposition")||"",s=c.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=c.match(/filename="([^"]+)"/i);if(d)return d[1];const p=c.match(/filename=([^;]+)/i);return p?p[1].trim():null}function pd(o){return o.status==="running"&&o.runtime.container_port!==null}function Im(o){const c=Wm(o);return c?c.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function Am(o){return o?o.slice(0,12):"Not running"}function Bm(o){return o.status==="succeeded"?"state-succeeded":o.status==="running"||o.status==="queued"?"state-running":o.status==="failed"?"state-failed":""}function $m(o){return o.status.split(/[_\s]+/).filter(Boolean).map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ")}function Wm(o){return o.status==="error"&&o.status_reason||o.status==="stopped"&&o.status_reason?o.status_reason:o.status}function Vm(o){return o.has_active_job||o.status==="creating"||o.status==="installing"||o.status==="starting"||o.status==="stopping"||o.install_status==="installing"?"busy":o.status==="running"?"running":o.status==="error"||o.status_reason==="install_failed"||o.status_reason==="start_failed"||o.status_reason==="runtime_crashed"?"error":"stopped"}function md(o){return`state-${Vm(o)}`}function hd(o){const c=typeof o.metrics.cpu_percent=="number"?o.metrics.cpu_percent:null,s=Wi(o.metrics.memory_used_bytes??null,o.metrics.memory_limit_bytes??null),d=Wi(o.metrics.disk_used_bytes??null,o.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:kr(o.metrics.disk_used_bytes??0),tone:jr(d)},{label:"RAM",value:typeof o.metrics.memory_used_bytes=="number"?kr(o.metrics.memory_used_bytes):"-",tone:jr(s)},{label:"CPU",value:Ii(c),tone:jr(o.limits.cpu_limit_millis?c:null)}]}function Hm({systemInfo:o}){var y,b,j,P;const c=jr(o==null?void 0:o.metrics.cpu_percent),s=Wi(((y=o==null?void 0:o.metrics.memory)==null?void 0:y.used_bytes)??null,((b=o==null?void 0:o.metrics.memory)==null?void 0:b.total_bytes)??null),d=Wi(((j=o==null?void 0:o.metrics.disk)==null?void 0:j.used_bytes)??null,((P=o==null?void 0:o.metrics.disk)==null?void 0:P.total_bytes)??null),p=o!=null&&o.metrics.disk?`${kr(o.metrics.disk.used_bytes)} / ${kr(o.metrics.disk.total_bytes)}`:"Not available",h=o!=null&&o.metrics.memory?`${kr(o.metrics.memory.used_bytes)} / ${kr(o.metrics.memory.total_bytes)}`:"Not available";return a.jsxs("div",{className:"footer-metrics",children:[a.jsxs("span",{className:st("footer-metric","has-tooltip",jr(d)),style:Ua(d),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"Disk"}),a.jsx("strong",{children:Ii(d)}),a.jsx("span",{className:"footer-metric-tooltip",children:p})]}),a.jsxs("span",{className:st("footer-metric","has-tooltip",jr(s)),style:Ua(s),tabIndex:0,children:[a.jsx("span",{className:"muted",children:"RAM"}),a.jsx("strong",{children:Ii(s)}),a.jsx("span",{className:"footer-metric-tooltip",children:h})]}),a.jsxs("span",{className:st("footer-metric",c),style:Ua(o==null?void 0:o.metrics.cpu_percent),children:[a.jsx("span",{className:"muted",children:"CPU"}),a.jsx("strong",{children:Ii(o==null?void 0:o.metrics.cpu_percent)})]})]})}function gd(o){return o.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:o.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:o.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:o.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:o.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function vd(o,c,s){return!c||c.jobId&&!s.includes(c.jobId)||c.action==="start"&&o.status!=="stopped"&&o.status!=="error"||c.action==="stop"&&o.status!=="running"?o:{...o,status:c.action==="start"?"starting":"stopping",status_reason:null}}function _r(o){return o.last_edit_at||o.created_at}function Qm(o,c){if(o.has_active_job!==c.has_active_job)return o.has_active_job?-1:1;const s=new Date(_r(o)).getTime(),d=new Date(_r(c)).getTime(),p=Number.isNaN(s)?0:s,h=Number.isNaN(d)?0:d;return p!==h?h-p:o.project_id.localeCompare(c.project_id)}function Vi(o){return o==="queued"||o==="running"}function Sr(o){return o instanceof DOMException&&o.name==="AbortError"}function Hn(o){const c=w.useRef(o);return w.useEffect(()=>{c.current=o},[o]),c}function Jm(o,c){return o.length<=c?o:o.slice(o.length-c)}function Km({job:o,downloading:c,onDownload:s}){const[d,p]=w.useState(""),[h,y]=w.useState(0),b=Hn(o),j=w.useRef(null),P=160,C=Vi(o.status)?[o.job_id]:[],S=w.useCallback(async O=>{try{const A=await(await fetch(Tm(b.current.job_id,P),{credentials:"include",signal:O})).text();p(A.trim())}catch(I){Sr(I)||p("")}},[b]);if(w.useEffect(()=>{const O=new AbortController;return S(O.signal),()=>O.abort()},[o.job_id,S]),qa(C,w.useCallback((O,I)=>{if(O.job_id===o.job_id){if((I==null?void 0:I.type)==="job.log"){const A=typeof I.line=="string"?I.line:"";if(!A)return;p(M=>Jm([...M?M.split(`
`):[],A],P).join(`
`));return}if(!Vi(O.status)){const A=new AbortController;S(A.signal)}}},[o.job_id,S])),w.useEffect(()=>{const O=j.current;if(!O)return;const I=()=>{const M=O.scrollHeight>O.clientHeight+1?Math.max(0,O.offsetWidth-O.clientWidth):0;y(ae=>ae===M?ae:M)};if(I(),typeof ResizeObserver>"u")return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I);const A=new ResizeObserver(()=>{I()});return A.observe(O),()=>{A.disconnect()}},[d]),!d)return null;const D={"--job-log-scrollbar-width":`${h}px`};return a.jsxs("div",{className:"job-log-preview",style:D,children:[s?a.jsx("button",{className:"job-log-download",type:"button","aria-label":c?"Downloading log":"Download log",title:c?"Downloading log":"Download full log",disabled:!!c,onClick:()=>{s(o)},children:a.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 2.5v7"}),a.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),a.jsx("path",{d:"M3 13.5h10"})]})}):null,a.jsx("div",{className:"job-log-frame",children:a.jsx("pre",{ref:j,children:d})})]})}function Qn(){const o=Qi.useContext(ad);if(!o)throw new Error("App context is unavailable.");return o}function yd(o,c,s,d){const p=w.useRef(o);w.useEffect(()=>{p.current=o},[o]),w.useEffect(()=>{if(c===null)return;let h=!1,y=null,b=null,j=!1,P=!1;const C=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??c:c,S=I=>{h||I===null||I===void 0||(y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{y=null,D()},I))},D=async()=>{if(!(h||j)){j=!0,b=new AbortController;try{await p.current(b.signal),h||S(C())}catch(I){if(!h&&!Sr(I)){const A=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??c:(d==null?void 0:d.errorDelay)??c;S(A)}}finally{j=!1,b=null,!h&&P&&!document.hidden&&(P=!1,S(0))}}},O=()=>{if(!document.hidden){if(j){P=!0;return}S(0)}};return document.addEventListener("visibilitychange",O),D(),()=>{h=!0,y!==null&&window.clearTimeout(y),document.removeEventListener("visibilitychange",O),b==null||b.abort()}},s)}function qa(o,c){const s=w.useRef(c),d=w.useMemo(()=>Array.from(new Set(o)).sort().join("\0"),[o]);w.useEffect(()=>{s.current=c},[c]),w.useEffect(()=>{if(!d)return;const p=d.split("\0"),h=new Set(p),y=new AbortController;let b=!1;const j=new EventSource("/api/v1/events/jobs"),P=async()=>{const D=await Promise.allSettled(p.map(O=>Be(`/api/v1/jobs/${O}`,{signal:y.signal})));if(!b)for(const O of D)O.status==="fulfilled"&&s.current(O.value)},C=D=>{const O=D;try{const I=JSON.parse(O.data);if(!h.has(I.job_id))return;s.current({job_id:I.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:I.line})}catch{}},S=D=>{const O=D;try{const I=JSON.parse(O.data);h.has(I.job_id)&&s.current(I,{type:"job.updated"})}catch{}};return P(),j.addEventListener("job.log",C),j.addEventListener("job.updated",S),()=>{b=!0,y.abort(),j.removeEventListener("job.log",C),j.removeEventListener("job.updated",S),j.close()}},[d])}function Gm({children:o}){const[c,s]=w.useState(null),[d,p]=w.useState(!0),[h,y]=w.useState(()=>{const C=window.localStorage.getItem("bulletjournal-controller-theme");return C==="light"||C==="dark"||C==="system"?C:"system"}),b=w.useCallback(async()=>{try{const C=await Be("/api/v1/session/current",{method:"GET"});s(C)}catch{s({authenticated:!1,user:null})}finally{p(!1)}},[]),j=w.useCallback(async()=>{await Be("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);w.useEffect(()=>{b()},[b]),w.useEffect(()=>{const C=document.documentElement,S=window.matchMedia("(prefers-color-scheme: dark)");function D(){const O=h==="system"?S.matches?"dark":"light":h;C.dataset.theme=O,C.style.colorScheme=O}return D(),window.localStorage.setItem("bulletjournal-controller-theme",h),S.addEventListener("change",D),()=>S.removeEventListener("change",D)},[h]);const P=w.useMemo(()=>({session:c,sessionLoading:d,refreshSession:b,signOut:j,themeMode:h,setThemeMode:y}),[b,c,d,j,h]);return a.jsx(ad.Provider,{value:P,children:o})}function Jc({children:o}){const{session:c,sessionLoading:s}=Qn(),d=Zt();return s?a.jsx("div",{className:"loading-screen",children:a.jsxs("div",{className:"loading-card",children:[a.jsx("h2",{children:"Preparing your controller workspace"}),a.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):c!=null&&c.authenticated?a.jsx(a.Fragment,{children:o}):a.jsx(od,{to:"/login",replace:!0,state:{from:d.pathname}})}function Ym(){const{session:o,refreshSession:c}=Qn(),s=Cn(),d=Zt(),[p,h]=w.useState(""),[y,b]=w.useState(""),[j,P]=w.useState(null),[C,S]=w.useState(!1);w.useEffect(()=>{o!=null&&o.authenticated&&s("/",{replace:!0})},[s,o]);async function D(O){O.preventDefault(),S(!0),P(null);try{await Be("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:p,password:y})}),await c();const I=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(I||"/",{replace:!0})}catch(I){P(I instanceof Error?I.message:"Login failed.")}finally{S(!1)}}return a.jsx("div",{className:"login-shell",children:a.jsxs("section",{className:"login-panel",children:[a.jsx("h1",{children:"BulletJournal login"}),a.jsx("hr",{className:"login-divider"}),a.jsxs("form",{className:"layout-grid",onSubmit:D,children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsx("input",{id:"username",value:p,onChange:O=>h(O.target.value),autoComplete:"username",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx("input",{id:"password",type:"password",value:y,onChange:O=>b(O.target.value),autoComplete:"current-password",required:!0})]}),j?a.jsx("div",{className:"error-banner",children:j}):null,a.jsx("div",{className:"button-row",children:a.jsx("button",{className:"button",type:"submit",disabled:C,children:C?"Signing in...":"Login"})})]})]})})}function Xm(){const{session:o,signOut:c,themeMode:s,setThemeMode:d}=Qn();Cn();const[p,h]=w.useState(!1);return w.useEffect(()=>{if(!p)return;function y(){h(!1)}return window.addEventListener("click",y),()=>window.removeEventListener("click",y)},[p]),a.jsxs("div",{className:"footer-theme",children:[a.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":p,onClick:y=>{y.stopPropagation(),h(b=>!b)},children:a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[a.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),a.jsx("path",{d:"M7.5 10.5h.01"}),a.jsx("path",{d:"M9.5 7.5h.01"}),a.jsx("path",{d:"M14.5 7.5h.01"}),a.jsx("path",{d:"M16.5 10.5h.01"})]})}),p?a.jsx("div",{className:"theme-popover",role:"menu",onClick:y=>y.stopPropagation(),children:["light","dark","system"].map(y=>a.jsx("button",{className:st("theme-option",s===y&&"active"),type:"button",role:"menuitemradio","aria-checked":s===y,onClick:()=>{d(y),h(!1)},children:y==="light"?"Light":y==="dark"?"Dark":"System"},y))}):null]})}function Ai({children:o,footerMetrics:c=null}){var h,y,b,j;const{session:s,signOut:d}=Qn(),p=Cn();return a.jsxs("div",{className:"app-shell",children:[o,a.jsxs("footer",{className:"app-footer",children:[a.jsxs("div",{className:"footer-left",children:[a.jsxs("div",{className:"footer-session",children:[a.jsx("span",{className:"muted",children:"Signed in as"}),a.jsx("strong",{children:((h=s==null?void 0:s.user)==null?void 0:h.display_name)||((y=s==null?void 0:s.user)==null?void 0:y.username)||"Unknown user"}),a.jsxs("span",{className:"muted",children:["(",((b=s==null?void 0:s.user)==null?void 0:b.username)||"unknown",")"]}),(j=s==null?void 0:s.user)!=null&&j.is_server_admin?a.jsx("span",{className:"badge neutral",children:"Admin"}):null]}),a.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),p("/login",{replace:!0})},children:"Logout"})]}),a.jsxs("div",{className:"footer-right",children:[c,a.jsx(Xm,{})]})]})]})}function qm(){const[o,c]=w.useState([]),[s,d]=w.useState(null),[p,h]=w.useState(!0),[y,b]=w.useState(null),[j,P]=w.useState(null),[C,S]=w.useState([]),[D,O]=w.useState({}),[I,A]=w.useState({}),[M,ae]=w.useState([]),[ue,ie]=w.useState(!1),G=Cn(),Z=Zt(),{session:xe}=Qn(),Re=Hn(I),we=w.useCallback(async W=>{try{const[ne,X]=await Promise.all([Be("/api/v1/projects",{signal:W}),Be("/api/v1/system/info",{signal:W})]);c(ne),d(X),ae(q=>q.filter(re=>ne.some(U=>U.project_id===re))),b(null)}catch(ne){Sr(ne)||b(ne instanceof Error?ne.message:"Failed to load dashboard.")}finally{h(!1)}},[]);yd(W=>we(W),C.length>0?5e3:15e3,[C.length,we],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{if(!Z.state||typeof Z.state!="object")return;const W=Z.state,ne=typeof W.archivedProjectId=="string"?W.archivedProjectId:null,X=typeof W.archiveJobId=="string"?W.archiveJobId:null,q=typeof W.deletedProjectId=="string"?W.deletedProjectId:null,re=typeof W.deleteJobId=="string"?W.deleteJobId:null,U=ne||q,H=X||re,B=X?"archive":re?"delete":null;!U||!H||!B||(ae(v=>Array.from(new Set([...v,U]))),A(v=>({...v,[H]:{projectId:U,verb:B}})),S(v=>Array.from(new Set([...v,H]))),we(),G(Z.pathname,{replace:!0,state:null}))},[we,Z.pathname,Z.state,G]);const ut=w.useCallback(W=>{if(Vi(W.status)){S(X=>X.includes(W.job_id)?X:[...X,W.job_id]);return}S(X=>X.filter(q=>q!==W.job_id));const ne=Re.current[W.job_id];ne&&(A(X=>{const q={...X};return delete q[W.job_id],q}),W.status!=="succeeded"&&(ae(X=>X.filter(q=>q!==ne.projectId)),P(W.error_message||`Failed to ${ne.verb} project ${ne.projectId}.`))),we()},[we]);qa(C,ut),w.useEffect(()=>{O(W=>{const ne=Object.entries(W).filter(([,X])=>!X.jobId||C.includes(X.jobId));return ne.length===Object.keys(W).length?W:Object.fromEntries(ne)})},[C]);const $e=w.useMemo(()=>o.filter(W=>!M.includes(W.project_id)).map(W=>vd(W,D[W.project_id]||null,C)).sort(Qm),[C,M,D,o]),gt=w.useMemo(()=>{const W={Running:[],Stopped:[],Error:[]};for(const ne of $e)ne.status==="running"||ne.status==="starting"||ne.status==="stopping"?W.Running.push(ne):ne.status==="error"?W.Error.push(ne):W.Stopped.push(ne);return W},[$e]);async function Qe(W,ne){O(X=>({...X,[W]:{action:ne}}));try{P(null);const X=await Be(`/api/v1/projects/${W}/${ne}`,{method:"POST"});X.job?(O(q=>({...q,[W]:{action:ne,jobId:X.job.job_id}})),S(q=>Array.from(new Set([...q,X.job.job_id])))):O(q=>{const re={...q};return delete re[W],re}),X.already_running&&(O(q=>{const re={...q};return delete re[W],re}),P("Project is already running.")),X.already_stopped&&(O(q=>{const re={...q};return delete re[W],re}),P("Project is already stopped.")),await we()}catch(X){O(q=>{const re={...q};return delete re[W],re}),P(X instanceof Error?X.message:`Failed to ${ne} project.`)}}return a.jsxs(Ai,{footerMetrics:a.jsx(Hm,{systemInfo:s}),children:[y?a.jsx("div",{className:"error-banner",children:y}):null,j?a.jsx("div",{className:"error-banner",children:j}):null,a.jsx("div",{className:"dashboard-grid",children:a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"BulletJournal projects"}),C.length>0?a.jsxs("span",{className:"muted",children:["Watching ",C.length," active job",C.length===1?"":"s"]}):null]}),a.jsxs("button",{className:"button",type:"button",onClick:()=>ie(!0),disabled:!(xe!=null&&xe.user),children:[a.jsx(bm,{width:22,height:22}),a.jsx("span",{children:"New project"})]})]})}),a.jsxs("div",{className:"panel-body",children:[p?a.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,a.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(W=>{const ne=gt[W];return a.jsxs("section",{children:[a.jsxs("div",{className:"group-header",children:[a.jsxs("div",{className:"group-header-title",children:[a.jsx("h3",{children:W}),a.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),a.jsxs("span",{className:"muted",children:[ne.length," project",ne.length===1?"":"s"]})]}),ne.length===0?a.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):a.jsx("div",{className:"project-cards",children:ne.map(X=>{const q=gd(X),re=hd(X),U=q.label==="Start"||q.label==="Stop"||q.label==="Starting..."||q.label==="Stopping...";return a.jsxs("article",{className:st("project-card",md(X)),children:[a.jsx("div",{className:"project-card-header",children:a.jsxs("div",{className:"project-card-top",children:[a.jsx("h4",{children:X.project_id}),a.jsx("hr",{className:"project-card-divider"})]})}),a.jsxs("div",{className:"meta-grid",children:[a.jsx("div",{className:"metrics-row",children:re.map(H=>a.jsxs("div",{className:st("meta-item","metric-chip",H.tone),children:[a.jsx("span",{children:H.label}),a.jsx("strong",{children:H.value})]},H.label))}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:_l(_r(X))}),a.jsx("span",{className:"muted",children:jl(_r(X))})]})]})]}),a.jsxs("div",{className:"quick-actions",children:[pd(X)?a.jsx("a",{className:"button-open icon-action",href:`/p/${X.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(cd,{width:18,height:18})}):null,a.jsx("button",{className:st(q.className,U&&"icon-action"),type:"button",disabled:q.disabled,"aria-label":q.label,title:q.label,onClick:()=>{q.action&&Qe(X.project_id,q.action)},children:U?a.jsxs(a.Fragment,{children:[q.action==="start"||q.label==="Starting..."?a.jsx(ud,{width:18,height:18}):null,q.action==="stop"||q.label==="Stopping..."?a.jsx(dd,{width:18,height:18}):null]}):q.label}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>G(`/projects/${X.project_id}`),children:a.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},X.project_id)})})]},W)})})]})]})}),ue&&s?a.jsx(Zm,{systemInfo:s,onClose:()=>ie(!1)}):null]})}function Zm({systemInfo:o,onClose:c}){var ie;const s=Cn(),{session:d}=Qn(),p=o.gpu_supported,[h,y]=w.useState({project_id:"",custom_requirements_text:o.default_dependencies_text,cpu_limit_input:Da(o.default_cpu_limit_cpus),memory_limit_input:Da(o.default_memory_limit_gb),disk_soft_limit_input:Da(o.default_disk_soft_limit_gb),gpu_enabled:p}),[b,j]=w.useState(!1),[P,C]=w.useState(null),[S,D]=w.useState(!1),[O,I]=w.useState([]),[A,M]=w.useState({project_admins:{all_users:!1,user_ids:d!=null&&d.user?[d.user.user_id]:[]},editors:{all_users:!0,user_ids:[]}});w.useEffect(()=>{const G=new AbortController;return Be("/api/v1/users/assignable",{signal:G.signal}).then(I).catch(Z=>{Sr(Z)||C(Z instanceof Error?Z.message:"Failed to load assignable users.")}),()=>G.abort()},[(ie=d==null?void 0:d.user)==null?void 0:ie.user_id]);function ae(G,Z){M(xe=>{const Re=xe[G].user_ids.includes(Z)?xe[G].user_ids.filter(we=>we!==Z):[...xe[G].user_ids,Z];return{...xe,[G]:{...xe[G],user_ids:Re}}})}async function ue(G){G.preventDefault(),j(!0),C(null);try{const Z=await Be("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:h.project_id,custom_requirements_text:h.custom_requirements_text,cpu_limit_millis:$a(h.cpu_limit_input),memory_limit_bytes:$i(h.memory_limit_input),disk_soft_limit_bytes:Wa(h.disk_soft_limit_input),gpu_enabled:h.gpu_enabled,project_admins:Hi(A.project_admins),editors:Hi(A.editors)})});s(`/projects/${Z.project.project_id}`,{state:{createdProjectId:Z.project.project_id,createJobId:Z.job.job_id}})}catch(Z){C(Z instanceof Error?Z.message:"Failed to create project.")}finally{j(!1)}}return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{b||c()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:G=>G.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsx("div",{children:a.jsx("h2",{children:"New BulletJournal project"})}),a.jsx("button",{className:"close-button",type:"button",onClick:c,"aria-label":"Close dialog",disabled:b,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("form",{className:"layout-grid",onSubmit:ue,children:[a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),a.jsx("input",{id:"create-project-id",value:h.project_id,onChange:G=>y(Z=>({...Z,project_id:G.target.value})),placeholder:"study-a",required:!0})]}),a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),a.jsx("textarea",{id:"create-dependencies",value:h.custom_requirements_text,onChange:G=>y(Z=>({...Z,custom_requirements_text:G.target.value}))})]}),a.jsxs("div",{className:"field-full collapsible-panel",children:[a.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>D(G=>!G),children:[a.jsxs("span",{className:"status-stack",children:[a.jsx("strong",{children:"Runtime limits"}),a.jsxs("span",{className:"muted",children:["CPU ",Rm($a(h.cpu_limit_input))," · Memory ",fd($i(h.memory_limit_input))," · Disk ",Pm(Wa(h.disk_soft_limit_input))," · GPU ",h.gpu_enabled?"On":"Off"]})]}),a.jsx("span",{children:S?"Hide":"Edit"})]}),S?a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:h.cpu_limit_input,onChange:G=>y(Z=>({...Z,cpu_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:h.memory_limit_input,onChange:G=>y(Z=>({...Z,memory_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:h.disk_soft_limit_input,onChange:G=>y(Z=>({...Z,disk_soft_limit_input:G.target.value})),placeholder:"Unlimited"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:st("checkbox-row",!p&&"is-disabled"),children:[a.jsx("input",{id:"create-gpu",type:"checkbox",checked:h.gpu_enabled,onChange:G=>y(Z=>({...Z,gpu_enabled:G.target.checked})),disabled:!p}),a.jsxs("label",{htmlFor:"create-gpu",children:[a.jsx("span",{children:"Enable GPU"}),p?null:a.jsx("span",{className:"info-bubble","aria-label":"GPU not enabled on this instance","data-tooltip":"GPU not enabled on this instance",tabIndex:0,children:"i"})]})]})]})]}):null]}),a.jsx(xd,{roles:A,users:O,onChange:M,onToggleUser:ae,disabled:b})]}),P?a.jsx("div",{className:"error-banner",children:P}):null,a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button",type:"submit",disabled:b,children:b?"Queueing...":"Create Project"}),a.jsx("button",{className:"button-secondary",type:"button",onClick:c,disabled:b,children:"Cancel"})]})]})})]})})}function xd({roles:o,users:c,onChange:s,onToggleUser:d,disabled:p}){const[h,y]=w.useState(null),b=[{key:"project_admins",label:"Project admins"},{key:"editors",label:"Editors"}];return a.jsxs("div",{className:"field-full layout-grid",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Project access"}),a.jsx("p",{className:"section-copy",children:"Choose who can administer or edit this project."})]}),b.map(({key:j,label:P})=>a.jsxs("div",{className:"limits-card",children:[a.jsxs("div",{className:"panel-head-row",children:[a.jsxs("div",{children:[a.jsx("strong",{children:P}),a.jsx("div",{className:"muted",children:eh(o[j],c)})]}),a.jsx("button",{className:"button-secondary",type:"button",disabled:p,onClick:()=>y(C=>C===j?null:j),children:"Edit"})]}),h===j?a.jsxs("div",{className:"action-popover role-picker-popover",children:[a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${j}-all-users`,type:"checkbox",checked:o[j].all_users,disabled:p,onChange:C=>s(S=>({...S,[j]:{...S[j],all_users:C.target.checked}}))}),a.jsx("label",{htmlFor:`${j}-all-users`,children:"All users"})]}),o[j].all_users?null:c.map(C=>a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:`${j}-${C.user_id}`,type:"checkbox",checked:o[j].user_ids.includes(C.user_id),disabled:p,onChange:()=>d(j,C.user_id)}),a.jsxs("label",{htmlFor:`${j}-${C.user_id}`,children:[C.display_name||C.username," ",a.jsxs("span",{className:"muted",children:["(",C.username,")"]})]})]},C.user_id))]}):null]},j))]})}function Hi(o){return{all_users:o.all_users,user_ids:o.all_users?[]:o.user_ids}}function eh(o,c){if(o.all_users)return"All users";const s=o.user_ids.map(d=>c.find(p=>p.user_id===d)).filter(d=>!!d).map(d=>d.username);return s.length>0?s.join(", "):"No users selected"}function wl(o){return{project_admins:{all_users:o.project_admins.all_users,user_ids:o.project_admins.users.map(c=>c.user_id)},editors:{all_users:o.editors.all_users,user_ids:o.editors.users.map(c=>c.user_id)}}}function Kc(o){return o.all_users?"All users":o.users.length>0?o.users.map(c=>c.username).join(", "):"No users selected"}function th({kind:o,projectId:c,submitting:s,typedProjectId:d,setTypedProjectId:p,onClose:h,onConfirm:y}){const b=o==="archive",j=b?"Archive project?":"Delete project?",P=b?"This project will be moved to the archive directory and will be removed from active projects. Archived projects can only be restored via a manual operation.":"This project will be permanently removed and cannot be restored.",C=b?"Archive project":"Delete project",S=b?"button-warning":"button-danger",D=s||d!==c;return a.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{s||h()},children:a.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"archive-project-title",onClick:O=>O.stopPropagation(),children:[a.jsxs("div",{className:"modal-head",children:[a.jsxs("div",{children:[a.jsx("h2",{id:"archive-project-title",children:j}),a.jsx("p",{className:"section-copy",children:P})]}),a.jsx("button",{className:"close-button",type:"button",onClick:h,"aria-label":"Close dialog",disabled:s,children:"×"})]}),a.jsx("div",{className:"modal-body",children:a.jsxs("div",{className:"layout-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsxs("label",{htmlFor:"project-removal-confirmation",children:["Type the project ID ",a.jsx("span",{className:"inline-project-id",children:c})," to proceed"]}),a.jsx("input",{id:"project-removal-confirmation",value:d,onChange:O=>p(O.target.value),autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,disabled:s})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:S,type:"button",onClick:y,disabled:D,children:s?`${C.split(" ")[0]}ing...`:C}),a.jsx("button",{className:"button-secondary",type:"button",onClick:h,disabled:s,children:"Cancel"})]})]})})]})})}function nh(){const{projectId:c=""}=Xp(),s=Cn(),d=Zt(),{session:p}=Qn(),h=w.useRef(null),[y,b]=w.useState(null),[j,P]=w.useState(!0),[C,S]=w.useState(null),[D,O]=w.useState([]),[I,A]=w.useState(null),[M,ae]=w.useState({custom_requirements_text:"",mark_all_artifacts_stale:!0,restart_if_running:!0}),[ue,ie]=w.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[G,Z]=w.useState(!1),[xe,Re]=w.useState(!1),[we,ut]=w.useState(!1),[$e,gt]=w.useState(!1),[Qe,W]=w.useState(!1),[ne,X]=w.useState(""),[q,re]=w.useState(null),[U,H]=w.useState(!1),[B,v]=w.useState(!1),[R,se]=w.useState(!1),[oe,fe]=w.useState(null),[pe,ve]=w.useState([]),[he,ke]=w.useState(!1),[We,Pn]=w.useState(!1),[Jn,Tt]=w.useState(!1),[et,Kn]=w.useState(null),[ct,Gn]=w.useState(null),[Nl,Cr]=w.useState([]),[St,tt]=w.useState(null),[en,Pr]=w.useState(!1),[Rr,Yn]=w.useState(!1),At=!!y&&M.custom_requirements_text!==y.custom_requirements_text,Xn=Hn(c),Rn=Hn(At),Lr=Hn(We),vt=Hn(Qe),tn=Hn(Jn),Ln=w.useCallback(async N=>{try{const E=await Be(`/api/v1/projects/${Xn.current}`,{signal:N});if(vt.current)return;b(E),tt(K=>K??wl(E.roles)),!Rn.current&&!Lr.current&&ae(K=>({custom_requirements_text:E.custom_requirements_text,mark_all_artifacts_stale:K.mark_all_artifacts_stale,restart_if_running:K.restart_if_running})),tn.current||ie({cpu_limit_input:Vc(E.limits.cpu_limit_millis),memory_limit_input:Va(E.limits.memory_limit_bytes),disk_soft_limit_input:Hc(E.limits.disk_soft_limit_bytes),gpu_enabled:E.limits.gpu_enabled}),S(null)}catch(E){!Sr(E)&&!vt.current&&S(E instanceof Error?E.message:"Failed to load project.")}finally{vt.current||P(!1)}},[Rn,Lr,vt,tn,Xn]);yd(N=>Ln(N),At||We||Jn||Qe?null:D.length>0?5e3:15e3,[D.length,At,We,Ln,Qe,Jn],{hiddenDelay:6e4,errorDelay:15e3}),w.useEffect(()=>{ke(!1)},[c]),w.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const N=d.state,E=typeof N.createdProjectId=="string"?N.createdProjectId:null,K=typeof N.createJobId=="string"?N.createJobId:null;E!==c||!K||(O(_e=>Array.from(new Set([..._e,K]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,c]),w.useEffect(()=>{!(I!=null&&I.jobId)||D.includes(I.jobId)||A(null)},[D,I]),w.useEffect(()=>{if((et==null?void 0:et.tone)!=="success")return;const N=window.setTimeout(()=>{Kn(E=>(E==null?void 0:E.tone)==="success"?null:E)},3500);return()=>window.clearTimeout(N)},[et]),w.useEffect(()=>{if((ct==null?void 0:ct.tone)!=="success")return;const N=window.setTimeout(()=>{Gn(E=>(E==null?void 0:E.tone)==="success"?null:E)},3500);return()=>window.clearTimeout(N)},[ct]),w.useEffect(()=>{if(!B)return;function N(E){var K;(K=h.current)!=null&&K.contains(E.target)||v(!1)}return window.addEventListener("click",N),()=>window.removeEventListener("click",N)},[B]);const El=w.useCallback(N=>{if(Vi(N.status)){O(E=>E.includes(N.job_id)?E:[...E,N.job_id]);return}O(E=>E.filter(K=>K!==N.job_id)),Pn(!1),!vt.current&&Ln()},[Ln,vt]);qa(D,El),w.useEffect(()=>{if((y==null?void 0:y.effective_role)!=="project_admin")return;const N=new AbortController;return Promise.all([Be("/api/v1/users/assignable",{signal:N.signal}),Be(`/api/v1/projects/${c}/roles`,{signal:N.signal})]).then(([E,K])=>{Cr(E),tt(_e=>_e??wl(K))}).catch(E=>{Sr(E)||S(E instanceof Error?E.message:"Failed to load assignable users.")}),()=>N.abort()},[y==null?void 0:y.effective_role,c]);async function Cl(N){A({action:N});try{const E=await Be(`/api/v1/projects/${c}/${N}`,{method:"POST"});E.job?(A({action:N,jobId:E.job.job_id}),O(K=>Array.from(new Set([...K,E.job.job_id])))):E.already_running?(A(null),S("Project is already running.")):E.already_stopped?(A(null),S("Project is already stopped.")):A(null),await Ln()}catch(E){A(null),S(E instanceof Error?E.message:`Failed to ${N}.`)}}async function Ki(N){N.preventDefault(),Z(!0),S(null);const E=At;try{const K=await Be(`/api/v1/projects/${c}/${E?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(E?M:{restart_if_running:M.restart_if_running,mark_all_artifacts_stale:M.mark_all_artifacts_stale})});if(!K.job)throw new Error("Environment action did not return a queued job.");const _e=K.job;O(Je=>Array.from(new Set([...Je,_e.job_id]))),E&&Pn(!0),Kn({tone:"success",message:"Saved"})}catch(K){Kn(null),S(K instanceof Error?K.message:"Failed to queue environment action.")}finally{Z(!1)}}async function Tr(N){N.preventDefault(),Re(!0),S(null);try{const E=await Be(`/api/v1/projects/${c}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:$a(ue.cpu_limit_input),memory_limit_bytes:$i(ue.memory_limit_input),disk_soft_limit_bytes:Wa(ue.disk_soft_limit_input),gpu_enabled:ue.gpu_enabled})});b(E),ie({cpu_limit_input:Vc(E.limits.cpu_limit_millis),memory_limit_input:Va(E.limits.memory_limit_bytes),disk_soft_limit_input:Hc(E.limits.disk_soft_limit_bytes),gpu_enabled:E.limits.gpu_enabled}),Tt(!1),Gn({tone:"success",message:"Saved"})}catch(E){S(E instanceof Error?E.message:"Failed to update limits.")}finally{Re(!1)}}async function zr(N){if(N.preventDefault(),!!St){Pr(!0),S(null);try{const E=await Be(`/api/v1/projects/${c}/roles`,{method:"PUT",body:JSON.stringify({project_admins:Hi(St.project_admins),editors:Hi(St.editors)})});tt(wl(E)),b(K=>K&&{...K,roles:E}),Yn(!1)}catch(E){S(E instanceof Error?E.message:"Failed to update project access.")}finally{Pr(!1)}}}async function Mr(){W(!0),ut(!0);try{const N=await Be(`/api/v1/projects/${c}`,{method:"DELETE"});N.job&&O(E=>E.filter(K=>K!==N.job.job_id)),H(!1),re(null),X(""),s("/",{replace:!0,state:N.job?{deletedProjectId:c,deleteJobId:N.job.job_id}:null})}catch(N){W(!1),S(N instanceof Error?N.message:"Failed to delete project.")}finally{ut(!1)}}async function Or(){W(!0),gt(!0),S(null);try{const N=await Be(`/api/v1/projects/${c}/archive`,{method:"POST"});N.job&&O(E=>E.filter(K=>K!==N.job.job_id)),H(!1),re(null),X(""),s("/",{replace:!0,state:N.job?{archivedProjectId:c,archiveJobId:N.job.job_id}:null})}catch(N){W(!1),S(N instanceof Error?N.message:"Failed to archive project.")}finally{gt(!1)}}async function Fr(N){ve(E=>E.includes(N.job_id)?E:[...E,N.job_id]);try{const E=await fetch(zm(N.job_id),{credentials:"include"});if(!E.ok)throw new Error(`Failed to download log (${E.status}).`);const K=await E.text(),_e=new Blob([K],{type:"text/plain;charset=utf-8"}),Je=window.URL.createObjectURL(_e),dt=document.createElement("a");dt.href=Je,dt.download=Om(N),document.body.appendChild(dt),dt.click(),dt.remove(),window.URL.revokeObjectURL(Je)}catch(E){S(E instanceof Error?E.message:"Failed to download job log.")}finally{ve(E=>E.filter(K=>K!==N.job_id))}}async function nn(){S(null);try{const N=await fetch(Fm(c),{credentials:"include"});if(!N.ok){const dt=(N.headers.get("content-type")||"").includes("application/json")?await N.json():await N.text(),Wt=typeof dt=="object"&&dt!==null&&"detail"in dt?String(dt.detail):N.statusText;throw new Error(Wt||"Failed to download lockfile.")}const E=await N.blob(),K=window.URL.createObjectURL(E),_e=document.createElement("a");_e.href=K,_e.download=`${c}__uv.lock`,document.body.appendChild(_e),_e.click(),_e.remove(),window.URL.revokeObjectURL(K)}catch(N){S(N instanceof Error?N.message:"Failed to download lockfile.")}}async function zt(N){S(null),fe(N);try{const E=await fetch(Dm(c,N),{credentials:"include"});if(!E.ok){const Wt=(E.headers.get("content-type")||"").includes("application/json")?await E.json():await E.text(),Tl=typeof Wt=="object"&&Wt!==null&&"detail"in Wt?String(Wt.detail):E.statusText;throw new Error(Tl||"Failed to export project.")}const K=await E.blob(),_e=window.URL.createObjectURL(K),Je=document.createElement("a");Je.href=_e,Je.download=Qc(E)||Um(c,N),document.body.appendChild(Je),Je.click(),Je.remove(),window.URL.revokeObjectURL(_e),v(!1)}catch(E){S(E instanceof Error?E.message:"Failed to export project.")}finally{fe(null)}}async function Pl(){S(null),se(!0);try{const N=await fetch(`/api/v1/projects/${c}/mcp-config/opencode`,{credentials:"include"});if(!N.ok){const _e=await N.json().catch(()=>null);throw new Error((_e==null?void 0:_e.detail)||"Failed to download MCP configuration.")}const E=window.URL.createObjectURL(await N.blob()),K=document.createElement("a");K.href=E,K.download=Qc(N)||`${c}.zip`,document.body.appendChild(K),K.click(),K.remove(),window.URL.revokeObjectURL(E)}catch(N){S(N instanceof Error?N.message:"Failed to download MCP configuration.")}finally{se(!1)}}if(j)return a.jsx(Ai,{children:a.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!y)return a.jsx(Ai,{children:a.jsx("div",{className:"error-banner",children:C||"Project was not found."})});const de=vd(y,I,D),rn=de.effective_role==="project_admin",De=gd(de),Rl=At?"Save and reinstall":"Reinstall environment",Dr=At?"Saving and reinstalling...":"Queueing reinstall...",Ll=hd(de),ln=De.label==="Start"||De.label==="Stop"||De.label==="Starting..."||De.label==="Stopping...",Ur=de.status==="running"||de.status==="starting"?"Started at":"Stopped at",Bt=de.status==="running"||de.status==="starting"?de.runtime.runtime_started_at:de.runtime.runtime_stopped_at,$t=de.status==="running"||de.status==="starting"||de.status==="stopping",Tn=(et==null?void 0:et.tone)==="success"?"Saved":G?Dr:Rl,qn=(ct==null?void 0:ct.tone)==="success"?"Saved":xe?"Saving...":"Save limits",Mt=de.recent_jobs||[],Ir=he?Mt:Mt.slice(0,5),Gi=Mt.length>5&&!he;return a.jsxs(Ai,{children:[a.jsx("div",{className:"topbar",children:a.jsxs("div",{className:"nav-pills",children:[a.jsx(_m,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:a.jsx(Nm,{width:18,height:18})}),D.length>0?a.jsxs("span",{className:"badge",children:["Watching ",D.length," active job",D.length===1?"":"s"]}):null]})}),C?a.jsx("div",{className:"error-banner",children:C}):null,a.jsxs("div",{className:"project-detail-stack",children:[a.jsxs("section",{className:st("project-detail-card",md(de)),children:[a.jsxs("div",{className:"project-detail-header",children:[a.jsx("div",{className:"project-detail-title",children:a.jsx("h2",{children:de.project_id})}),a.jsx("div",{className:"project-detail-status",children:a.jsx("strong",{children:Im(de)})})]}),a.jsxs("div",{className:"quick-actions",children:[pd(de)?a.jsx("a",{className:"button-open icon-action",href:`/p/${de.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:a.jsx(cd,{width:18,height:18})}):null,a.jsx("button",{className:st(De.className,ln&&"icon-action"),type:"button",disabled:De.disabled,"aria-label":De.label,title:De.label,onClick:()=>{De.action&&Cl(De.action)},children:ln?a.jsxs(a.Fragment,{children:[De.action==="start"||De.label==="Starting..."?a.jsx(ud,{width:18,height:18}):null,De.action==="stop"||De.label==="Stopping..."?a.jsx(dd,{width:18,height:18}):null]}):De.label}),a.jsx("button",{className:"button-secondary icon-action mcp-action",type:"button","aria-label":R?"Downloading OpenCode MCP configuration":"Download OpenCode MCP configuration",title:R?"Downloading OpenCode MCP configuration":"Download OpenCode MCP configuration",disabled:R,onClick:()=>void Pl(),children:a.jsx(Cm,{width:20,height:20})})]}),a.jsx("div",{className:"metrics-row",children:Ll.map(N=>a.jsxs("div",{className:st("meta-item","metric-chip",N.tone),children:[a.jsx("span",{children:N.label}),a.jsx("strong",{children:N.value})]},N.label))}),a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last edit"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:_l(_r(de))}),a.jsx("span",{className:"muted",children:jl(_r(de))})]})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Last run"}),de.last_run_finished_at?a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:_l(de.last_run_finished_at)}),a.jsx("span",{className:"muted",children:jl(de.last_run_finished_at)})]}):a.jsx("strong",{children:"-"})]})]})]}),rn?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project environment"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("form",{className:"project-env-grid",onSubmit:Ki,children:[a.jsx("div",{className:"environment-overview-card",children:a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("span",{className:"detail-label",children:"Python version"}),a.jsx("div",{className:"detail-value mono-copy",children:de.python_version})]}),a.jsx("div",{className:"summary-block compact",children:a.jsxs("div",{className:"lockfile-row compact",children:[a.jsxs("div",{className:"lockfile-meta",children:[a.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),a.jsx("code",{className:"mono-copy detail-value",children:de.lock_sha256||"Not recorded yet"})]}),a.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{nn()},children:a.jsx(Em,{width:18,height:18})})]})})]})}),a.jsxs("div",{className:"field-grid",children:[a.jsxs("div",{className:"field-full",children:[a.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),a.jsx("textarea",{id:"env-custom",value:M.custom_requirements_text,onChange:N=>{ae(E=>({...E,custom_requirements_text:N.target.value}))}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Restart behavior"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-restart",type:"checkbox",checked:M.restart_if_running,onChange:N=>{ae(E=>({...E,restart_if_running:N.target.checked}))}}),a.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Artifact invalidation"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:M.mark_all_artifacts_stale,onChange:N=>{ae(E=>({...E,mark_all_artifacts_stale:N.target.checked}))}}),a.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),a.jsx("div",{className:"button-row",children:a.jsx("button",{className:st((et==null?void 0:et.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:G,children:Tn})})]})})]}):null,rn?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Container info"})}),a.jsxs("div",{className:"panel-body layout-grid",children:[a.jsxs("div",{className:"detail-meta-grid",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container name"}),a.jsx("div",{className:"detail-value mono-copy",children:de.runtime.container_name||"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Container id"}),a.jsx("div",{className:"detail-value mono-copy",children:Am(de.runtime.container_id)})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:"Host port"}),a.jsx("div",{className:"detail-value mono-copy",children:de.runtime.container_port??"Not running"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"detail-label",children:Ur}),Bt?a.jsxs("div",{className:"timestamp-pair",children:[a.jsx("strong",{children:_l(Bt)}),a.jsx("span",{className:"muted",children:jl(Bt)})]}):a.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),a.jsxs("div",{className:"limits-card",children:[a.jsx("div",{className:"limits-card-header",children:a.jsx("div",{className:"status-stack",children:a.jsx("strong",{children:"Runtime limits"})})}),a.jsxs("form",{className:"field-grid",onSubmit:Tr,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),a.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.cpu_limit_input,onChange:N=>{Tt(!0),ie(E=>({...E,cpu_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:$t})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),a.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.memory_limit_input,onChange:N=>{Tt(!0),ie(E=>({...E,memory_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:$t})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),a.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:ue.disk_soft_limit_input,onChange:N=>{Tt(!0),ie(E=>({...E,disk_soft_limit_input:N.target.value}))},placeholder:"Unlimited",disabled:$t})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"GPU access"}),a.jsxs("div",{className:"checkbox-row",children:[a.jsx("input",{id:"limits-gpu",type:"checkbox",checked:ue.gpu_enabled,onChange:N=>{Tt(!0),ie(E=>({...E,gpu_enabled:N.target.checked}))},disabled:$t}),a.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU if supported on the host"})]})]}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:st($t?"button-neutral":(ct==null?void 0:ct.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:xe||$t,children:qn}),$t?a.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}):null,a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsxs("div",{className:"panel-head-row",children:[a.jsx("h2",{children:"Project access"}),rn&&!Rr?a.jsx("button",{className:"button-secondary",type:"button",onClick:()=>{tt(wl(de.roles)),Yn(!0)},children:"Edit"}):null]})}),a.jsx("div",{className:"panel-body",children:rn&&Rr&&St?a.jsxs("form",{className:"layout-grid",onSubmit:zr,children:[a.jsx(xd,{roles:St,users:Nl,onChange:N=>tt(E=>E&&(typeof N=="function"?N(E):N)),onToggleUser:(N,E)=>tt(K=>{if(!K)return K;const _e=K[N].user_ids.includes(E)?K[N].user_ids.filter(Je=>Je!==E):[...K[N].user_ids,E];return{...K,[N]:{...K[N],user_ids:_e}}}),disabled:en}),a.jsxs("div",{className:"button-row",children:[a.jsx("button",{className:"button-open",type:"submit",disabled:en,children:en?"Saving...":"Save access"}),a.jsx("button",{className:"button-secondary",type:"button",disabled:en,onClick:()=>{tt(wl(de.roles)),Yn(!1)},children:"Cancel"})]})]}):a.jsxs("div",{className:"summary-grid",children:[a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Your access"}),a.jsx("strong",{children:de.effective_role==="project_admin"?"Project admin":"Editor"})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Project admins"}),a.jsx("strong",{children:Kc(de.roles.project_admins)})]}),a.jsxs("div",{className:"summary-block compact",children:[a.jsx("h3",{children:"Editors"}),a.jsx("strong",{children:Kc(de.roles.editors)})]})]})})]}),a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Job history"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"jobs-list",children:[Mt.length===0?a.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,Ir.map(N=>a.jsxs("article",{className:st("job-row",Bm(N)),children:[a.jsxs("div",{className:"job-row-header",children:[a.jsxs("div",{className:"job-row-top",children:[a.jsx("strong",{children:N.job_type}),a.jsx("span",{className:"muted mono-copy",children:N.job_id})]}),a.jsx("strong",{children:$m(N)})]}),a.jsxs("div",{className:"job-row-meta",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Created"}),a.jsxs("div",{className:"timestamp-row",children:[a.jsx("strong",{children:_l(N.created_at)}),a.jsx("span",{className:"muted",children:jl(N.created_at)})]})]}),a.jsxs("div",{className:"meta-item",children:[a.jsx("span",{children:"Duration"}),a.jsx("strong",{children:Lm(N.started_at||N.created_at,N.finished_at)})]})]}),N.job_type==="create_project"||N.job_type==="update_environment"||N.job_type==="reinstall_environment"?a.jsx(Km,{job:N,downloading:pe.includes(N.job_id),onDownload:N.log_path?Fr:void 0}):null,N.error_message?a.jsx("div",{className:"error-banner",children:N.error_message}):null]},N.job_id)),Gi?a.jsx("div",{className:"button-row centered jobs-list-footer",children:a.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>ke(!0),children:["Show more jobs (",Mt.length," total)"]})}):null]})})]}),rn?a.jsxs("section",{className:"panel",children:[a.jsx("div",{className:"panel-head",children:a.jsx("h2",{children:"Project actions"})}),a.jsx("div",{className:"panel-body",children:a.jsxs("div",{className:"button-row project-actions-row",children:[a.jsxs("div",{className:"action-menu",ref:h,children:[a.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":B,disabled:!!oe,onClick:N=>{N.stopPropagation(),v(E=>!E)},children:oe?"Exporting...":"Export project"}),B?a.jsxs("div",{className:"action-popover",role:"menu",onClick:N=>N.stopPropagation(),children:[a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:oe!==null,onClick:()=>{zt("code_only")},children:a.jsx("strong",{children:"Code only"})}),a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:oe!==null,onClick:()=>{zt("code_and_data")},children:a.jsx("strong",{children:"Code and data"})}),a.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:oe!==null,onClick:()=>{zt("full")},children:a.jsx("strong",{children:"Full"})})]}):null]}),a.jsx("button",{className:"button-warning",type:"button",onClick:()=>{re("archive"),X(""),H(!0)},disabled:$e||we,children:$e?"Archiving...":"Archive project"}),a.jsx("button",{className:"button-danger",type:"button",onClick:()=>{re("delete"),X(""),H(!0)},disabled:we||$e,children:we?"Deleting...":"Delete project"})]})})]}):null]}),U&&q?a.jsx(th,{kind:q,projectId:c,submitting:q==="archive"?$e:we,typedProjectId:ne,setTypedProjectId:X,onClose:()=>{H(!1),re(null),X("")},onConfirm:()=>{if(q==="archive"){Or();return}Mr()}}):null]})}function rh(){return a.jsxs(pm,{children:[a.jsx(kl,{path:"/login",element:a.jsx(Ym,{})}),a.jsx(kl,{path:"/projects/:projectId",element:a.jsx(Jc,{children:a.jsx(nh,{})})}),a.jsx(kl,{path:"/",element:a.jsx(Jc,{children:a.jsx(qm,{})})}),a.jsx(kl,{path:"*",element:a.jsx(od,{to:"/",replace:!0})})]})}function lh(){return a.jsx(wm,{children:a.jsx(Gm,{children:a.jsx(rh,{})})})}wp.createRoot(Xa).render(a.jsx(Qi.StrictMode,{children:a.jsx(lh,{})}));
