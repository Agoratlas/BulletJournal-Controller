function rp(o,u){for(var s=0;s<u.length;s++){const d=u[s];if(typeof d!="string"&&!Array.isArray(d)){for(const m in d)if(m!=="default"&&!(m in o)){const v=Object.getOwnPropertyDescriptor(d,m);v&&Object.defineProperty(o,m,v.get?v:{enumerable:!0,get:()=>d[m]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const v of m)if(v.type==="childList")for(const x of v.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function s(m){const v={};return m.integrity&&(v.integrity=m.integrity),m.referrerPolicy&&(v.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?v.credentials="include":m.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function d(m){if(m.ep)return;m.ep=!0;const v=s(m);fetch(m.href,v)}})();function Uc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pa={exports:{}},qr={},ma={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function lp(){if(vc)return ie;vc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),E=Symbol.iterator;function M(g){return g===null||typeof g!="object"?null:(g=E&&g[E]||g["@@iterator"],typeof g=="function"?g:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,B={};function D(g,b,ee){this.props=g,this.context=b,this.refs=B,this.updater=ee||L}D.prototype.isReactComponent={},D.prototype.setState=function(g,b){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,b,"setState")},D.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ne(){}ne.prototype=D.prototype;function ae(g,b,ee){this.props=g,this.context=b,this.refs=B,this.updater=ee||L}var oe=ae.prototype=new ne;oe.constructor=ae,I(oe,D.prototype),oe.isPureReactComponent=!0;var ue=Array.isArray,xe=Object.prototype.hasOwnProperty,ze={current:null},je={key:!0,ref:!0,__self:!0,__source:!0};function $e(g,b,ee){var re,le={},se=null,ge=null;if(b!=null)for(re in b.ref!==void 0&&(ge=b.ref),b.key!==void 0&&(se=""+b.key),b)xe.call(b,re)&&!je.hasOwnProperty(re)&&(le[re]=b[re]);var fe=arguments.length-2;if(fe===1)le.children=ee;else if(1<fe){for(var we=Array(fe),Oe=0;Oe<fe;Oe++)we[Oe]=arguments[Oe+2];le.children=we}if(g&&g.defaultProps)for(re in fe=g.defaultProps,fe)le[re]===void 0&&(le[re]=fe[re]);return{$$typeof:o,type:g,key:se,ref:ge,props:le,_owner:ze.current}}function He(g,b){return{$$typeof:o,type:g.type,key:b,ref:g.ref,props:g.props,_owner:g._owner}}function Ye(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Xe(g){var b={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return b[ee]})}var J=/\/+/g;function Z(g,b){return typeof g=="object"&&g!==null&&g.key!=null?Xe(""+g.key):b.toString(36)}function K(g,b,ee,re,le){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var ge=!1;if(g===null)ge=!0;else switch(se){case"string":case"number":ge=!0;break;case"object":switch(g.$$typeof){case o:case u:ge=!0}}if(ge)return ge=g,le=le(ge),g=re===""?"."+Z(ge,0):re,ue(le)?(ee="",g!=null&&(ee=g.replace(J,"$&/")+"/"),K(le,b,ee,"",function(Oe){return Oe})):le!=null&&(Ye(le)&&(le=He(le,ee+(!le.key||ge&&ge.key===le.key?"":(""+le.key).replace(J,"$&/")+"/")+g)),b.push(le)),1;if(ge=0,re=re===""?".":re+":",ue(g))for(var fe=0;fe<g.length;fe++){se=g[fe];var we=re+Z(se,fe);ge+=K(se,b,ee,we,le)}else if(we=M(g),typeof we=="function")for(g=we.call(g),fe=0;!(se=g.next()).done;)se=se.value,we=re+Z(se,fe++),ge+=K(se,b,ee,we,le);else if(se==="object")throw b=String(g),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ge}function G(g,b,ee){if(g==null)return g;var re=[],le=0;return K(g,re,"","",function(se){return b.call(ee,se,le++)}),re}function ce(g){if(g._status===-1){var b=g._result;b=b(),b.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=b)}if(g._status===1)return g._result.default;throw g._result}var he={current:null},U={transition:null},Y={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:U,ReactCurrentOwner:ze};function A(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:G,forEach:function(g,b,ee){G(g,function(){b.apply(this,arguments)},ee)},count:function(g){var b=0;return G(g,function(){b++}),b},toArray:function(g){return G(g,function(b){return b})||[]},only:function(g){if(!Ye(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ie.Component=D,ie.Fragment=s,ie.Profiler=m,ie.PureComponent=ae,ie.StrictMode=d,ie.Suspense=_,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ie.act=A,ie.cloneElement=function(g,b,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var re=I({},g.props),le=g.key,se=g.ref,ge=g._owner;if(b!=null){if(b.ref!==void 0&&(se=b.ref,ge=ze.current),b.key!==void 0&&(le=""+b.key),g.type&&g.type.defaultProps)var fe=g.type.defaultProps;for(we in b)xe.call(b,we)&&!je.hasOwnProperty(we)&&(re[we]=b[we]===void 0&&fe!==void 0?fe[we]:b[we])}var we=arguments.length-2;if(we===1)re.children=ee;else if(1<we){fe=Array(we);for(var Oe=0;Oe<we;Oe++)fe[Oe]=arguments[Oe+2];re.children=fe}return{$$typeof:o,type:g.type,key:le,ref:se,props:re,_owner:ge}},ie.createContext=function(g){return g={$$typeof:x,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:v,_context:g},g.Consumer=g},ie.createElement=$e,ie.createFactory=function(g){var b=$e.bind(null,g);return b.type=g,b},ie.createRef=function(){return{current:null}},ie.forwardRef=function(g){return{$$typeof:S,render:g}},ie.isValidElement=Ye,ie.lazy=function(g){return{$$typeof:N,_payload:{_status:-1,_result:g},_init:ce}},ie.memo=function(g,b){return{$$typeof:T,type:g,compare:b===void 0?null:b}},ie.startTransition=function(g){var b=U.transition;U.transition={};try{g()}finally{U.transition=b}},ie.unstable_act=A,ie.useCallback=function(g,b){return he.current.useCallback(g,b)},ie.useContext=function(g){return he.current.useContext(g)},ie.useDebugValue=function(){},ie.useDeferredValue=function(g){return he.current.useDeferredValue(g)},ie.useEffect=function(g,b){return he.current.useEffect(g,b)},ie.useId=function(){return he.current.useId()},ie.useImperativeHandle=function(g,b,ee){return he.current.useImperativeHandle(g,b,ee)},ie.useInsertionEffect=function(g,b){return he.current.useInsertionEffect(g,b)},ie.useLayoutEffect=function(g,b){return he.current.useLayoutEffect(g,b)},ie.useMemo=function(g,b){return he.current.useMemo(g,b)},ie.useReducer=function(g,b,ee){return he.current.useReducer(g,b,ee)},ie.useRef=function(g){return he.current.useRef(g)},ie.useState=function(g){return he.current.useState(g)},ie.useSyncExternalStore=function(g,b,ee){return he.current.useSyncExternalStore(g,b,ee)},ie.useTransition=function(){return he.current.useTransition()},ie.version="18.3.1",ie}var yc;function Na(){return yc||(yc=1,ma.exports=lp()),ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function ip(){if(xc)return qr;xc=1;var o=Na(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(S,_,T){var N,E={},M=null,L=null;T!==void 0&&(M=""+T),_.key!==void 0&&(M=""+_.key),_.ref!==void 0&&(L=_.ref);for(N in _)d.call(_,N)&&!v.hasOwnProperty(N)&&(E[N]=_[N]);if(S&&S.defaultProps)for(N in _=S.defaultProps,_)E[N]===void 0&&(E[N]=_[N]);return{$$typeof:u,type:S,key:M,ref:L,props:E,_owner:m.current}}return qr.Fragment=s,qr.jsx=x,qr.jsxs=x,qr}var wc;function op(){return wc||(wc=1,pa.exports=ip()),pa.exports}var c=op(),j=Na();const Si=Uc(j),ap=rp({__proto__:null,default:Si},[j]);var vi={},ha={exports:{}},at={},ga={exports:{}},va={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function sp(){return kc||(kc=1,(function(o){function u(U,Y){var A=U.length;U.push(Y);e:for(;0<A;){var g=A-1>>>1,b=U[g];if(0<m(b,Y))U[g]=Y,U[A]=b,A=g;else break e}}function s(U){return U.length===0?null:U[0]}function d(U){if(U.length===0)return null;var Y=U[0],A=U.pop();if(A!==Y){U[0]=A;e:for(var g=0,b=U.length,ee=b>>>1;g<ee;){var re=2*(g+1)-1,le=U[re],se=re+1,ge=U[se];if(0>m(le,A))se<b&&0>m(ge,le)?(U[g]=ge,U[se]=A,g=se):(U[g]=le,U[re]=A,g=re);else if(se<b&&0>m(ge,A))U[g]=ge,U[se]=A,g=se;else break e}}return Y}function m(U,Y){var A=U.sortIndex-Y.sortIndex;return A!==0?A:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;o.unstable_now=function(){return v.now()}}else{var x=Date,S=x.now();o.unstable_now=function(){return x.now()-S}}var _=[],T=[],N=1,E=null,M=3,L=!1,I=!1,B=!1,D=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(U){for(var Y=s(T);Y!==null;){if(Y.callback===null)d(T);else if(Y.startTime<=U)d(T),Y.sortIndex=Y.expirationTime,u(_,Y);else break;Y=s(T)}}function ue(U){if(B=!1,oe(U),!I)if(s(_)!==null)I=!0,ce(xe);else{var Y=s(T);Y!==null&&he(ue,Y.startTime-U)}}function xe(U,Y){I=!1,B&&(B=!1,ne($e),$e=-1),L=!0;var A=M;try{for(oe(Y),E=s(_);E!==null&&(!(E.expirationTime>Y)||U&&!Xe());){var g=E.callback;if(typeof g=="function"){E.callback=null,M=E.priorityLevel;var b=g(E.expirationTime<=Y);Y=o.unstable_now(),typeof b=="function"?E.callback=b:E===s(_)&&d(_),oe(Y)}else d(_);E=s(_)}if(E!==null)var ee=!0;else{var re=s(T);re!==null&&he(ue,re.startTime-Y),ee=!1}return ee}finally{E=null,M=A,L=!1}}var ze=!1,je=null,$e=-1,He=5,Ye=-1;function Xe(){return!(o.unstable_now()-Ye<He)}function J(){if(je!==null){var U=o.unstable_now();Ye=U;var Y=!0;try{Y=je(!0,U)}finally{Y?Z():(ze=!1,je=null)}}else ze=!1}var Z;if(typeof ae=="function")Z=function(){ae(J)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,G=K.port2;K.port1.onmessage=J,Z=function(){G.postMessage(null)}}else Z=function(){D(J,0)};function ce(U){je=U,ze||(ze=!0,Z())}function he(U,Y){$e=D(function(){U(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){I||L||(I=!0,ce(xe))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return s(_)},o.unstable_next=function(U){switch(M){case 1:case 2:case 3:var Y=3;break;default:Y=M}var A=M;M=Y;try{return U()}finally{M=A}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var A=M;M=U;try{return Y()}finally{M=A}},o.unstable_scheduleCallback=function(U,Y,A){var g=o.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?g+A:g):A=g,U){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=A+b,U={id:N++,callback:Y,priorityLevel:U,startTime:A,expirationTime:b,sortIndex:-1},A>g?(U.sortIndex=A,u(T,U),s(_)===null&&U===s(T)&&(B?(ne($e),$e=-1):B=!0,he(ue,A-g))):(U.sortIndex=b,u(_,U),I||L||(I=!0,ce(xe))),U},o.unstable_shouldYield=Xe,o.unstable_wrapCallback=function(U){var Y=M;return function(){var A=M;M=Y;try{return U.apply(this,arguments)}finally{M=A}}}})(va)),va}var jc;function up(){return jc||(jc=1,ga.exports=sp()),ga.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function cp(){if(_c)return at;_c=1;var o=Na(),u=up();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function v(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(m[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},E={};function M(e){return _.call(E,e)?!0:_.call(N,e)?!1:T.test(e)?E[e]=!0:(N[e]=!0,!1)}function L(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||L(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ne,ae);D[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ne,ae);D[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ne,ae);D[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,n,r){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,l,r)&&(n=null),r||l===null?M(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ue=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),ze=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Ye=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),U=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,g;function b(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var ee=!1;function re(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,f=i.length-1;1<=a&&0<=f&&l[a]!==i[f];)f--;for(;1<=a&&0<=f;a--,f--)if(l[a]!==i[f]){if(a!==1||f!==1)do if(a--,f--,0>f||l[a]!==i[f]){var p=`
`+l[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=f);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function le(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case je:return"Fragment";case ze:return"Portal";case He:return"Profiler";case $e:return"StrictMode";case Z:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xe:return(e.displayName||"Context")+".Consumer";case Ye:return(e._context.displayName||"Context")+".Provider";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oe(e){var t=we(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ln(e){e._valueTracker||(e._valueTracker=Oe(e))}function ll(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=we(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dr(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function il(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ol(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function fr(e,t){ol(e,t);var n=fe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pe(e,t.type,n):t.hasOwnProperty("defaultValue")&&pe(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tn(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pe(e,t,n){(t!=="number"||Rn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pe=Array.isArray;function Ht(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function pr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Pe(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function mr(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,ul=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ci=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(e){Ci.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gn[t]=gn[e]})});function P(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gn.hasOwnProperty(e)&&gn[e]?(""+t).trim():t+"px"}function z(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=P(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var ve=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(ve[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function qe(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ze=null;function Pt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,On=null,Fn=null;function Ma(e){if(e=Dr(e)){if(typeof hr!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Tl(t),hr(e.stateNode,e.type,t))}}function Oa(e){On?Fn?Fn.push(e):Fn=[e]:On=e}function Fa(){if(On){var e=On,t=Fn;if(Fn=On=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function Da(e,t){return e(t)}function Ua(){}var Pi=!1;function Ia(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return Da(e,t,n)}finally{Pi=!1,(On!==null||Fn!==null)&&(Ua(),Fa())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Li=!1;if(S)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Li=!1}function sd(e,t,n,r,l,i,a,f,p){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(R){this.onError(R)}}var yr=!1,cl=null,dl=!1,Ri=null,ud={onError:function(e){yr=!0,cl=e}};function cd(e,t,n,r,l,i,a,f,p){yr=!1,cl=null,sd.apply(ud,arguments)}function dd(e,t,n,r,l,i,a,f,p){if(cd.apply(this,arguments),yr){if(yr){var k=cl;yr=!1,cl=null}else throw Error(s(198));dl||(dl=!0,Ri=k)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(vn(e)!==e)throw Error(s(188))}function fd(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Aa(l),e;if(i===r)return Aa(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,f=l.child;f;){if(f===n){a=!0,n=l,r=i;break}if(f===r){a=!0,r=l,n=i;break}f=f.sibling}if(!a){for(f=i.child;f;){if(f===n){a=!0,n=i,r=l;break}if(f===r){a=!0,r=i,n=l;break}f=f.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function $a(e){return e=fd(e),e!==null?Wa(e):null}function Wa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wa(e);if(t!==null)return t;e=e.sibling}return null}var Va=u.unstable_scheduleCallback,Ha=u.unstable_cancelCallback,pd=u.unstable_shouldYield,md=u.unstable_requestPaint,Le=u.unstable_now,hd=u.unstable_getCurrentPriorityLevel,Ti=u.unstable_ImmediatePriority,Qa=u.unstable_UserBlockingPriority,fl=u.unstable_NormalPriority,gd=u.unstable_LowPriority,Ja=u.unstable_IdlePriority,pl=null,Lt=null;function vd(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:wd,yd=Math.log,xd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(yd(e)/xd|0)|0}var ml=64,hl=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var f=a&~l;f!==0?r=xr(f):(i&=a,i!==0&&(r=xr(i)))}else a=n&~l,a!==0?r=xr(a):i!==0&&(r=xr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),l=1<<n,r|=e[n],t&=~l;return r}function kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-jt(i),f=1<<a,p=l[a];p===-1?((f&n)===0||(f&r)!==0)&&(l[a]=kd(f,t)):p<=t&&(e.expiredLanes|=f),i&=~f}}function zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ka(){var e=ml;return ml<<=1,(ml&4194240)===0&&(ml=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function _d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-jt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Oi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ye=0;function Ga(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ya,Fi,Xa,qa,Za,Di=!1,vl=[],Qt=null,Jt=null,Kt=null,kr=new Map,jr=new Map,Gt=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function _r(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Dr(t),t!==null&&Fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ed(e,t,n,r,l){switch(t){case"focusin":return Qt=_r(Qt,e,t,n,r,l),!0;case"dragenter":return Jt=_r(Jt,e,t,n,r,l),!0;case"mouseover":return Kt=_r(Kt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return kr.set(i,_r(kr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,jr.set(i,_r(jr.get(i)||null,e,t,n,r,l)),!0}return!1}function ts(e){var t=yn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ba(n),t!==null){e.blockedOn=t,Za(e.priority,function(){Xa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ze=r,n.target.dispatchEvent(r),Ze=null}else return t=Dr(n),t!==null&&Fi(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){yl(e)&&n.delete(t)}function Nd(){Di=!1,Qt!==null&&yl(Qt)&&(Qt=null),Jt!==null&&yl(Jt)&&(Jt=null),Kt!==null&&yl(Kt)&&(Kt=null),kr.forEach(ns),jr.forEach(ns)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Nd)))}function Er(e){function t(l){return Sr(l,e)}if(0<vl.length){Sr(vl[0],e);for(var n=1;n<vl.length;n++){var r=vl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Sr(Qt,e),Jt!==null&&Sr(Jt,e),Kt!==null&&Sr(Kt,e),kr.forEach(t),jr.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)ts(n),n.blockedOn===null&&Gt.shift()}var Dn=ue.ReactCurrentBatchConfig,xl=!0;function bd(e,t,n,r){var l=ye,i=Dn.transition;Dn.transition=null;try{ye=1,Ui(e,t,n,r)}finally{ye=l,Dn.transition=i}}function Cd(e,t,n,r){var l=ye,i=Dn.transition;Dn.transition=null;try{ye=4,Ui(e,t,n,r)}finally{ye=l,Dn.transition=i}}function Ui(e,t,n,r){if(xl){var l=Ii(e,t,n,r);if(l===null)no(e,t,r,wl,n),es(e,r);else if(Ed(l,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<Sd.indexOf(e)){for(;l!==null;){var i=Dr(l);if(i!==null&&Ya(i),i=Ii(e,t,n,r),i===null&&no(e,t,r,wl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else no(e,t,r,null,n)}}var wl=null;function Ii(e,t,n,r){if(wl=null,e=Pt(r),e=yn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wl=e,null}function rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case Ti:return 1;case Qa:return 4;case fl:case gd:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var Yt=null,Bi=null,kl=null;function ls(){if(kl)return kl;var e,t=Bi,n=t.length,r,l="value"in Yt?Yt.value:Yt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return kl=l.slice(e,1<r?1-r:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function is(){return!1}function st(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_l:is,this.isPropagationStopped=is,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=st(Un),Nr=A({},Un,{view:0,detail:0}),Pd=st(Nr),$i,Wi,br,Sl=A({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?($i=e.screenX-br.screenX,Wi=e.screenY-br.screenY):Wi=$i=0,br=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Wi}}),os=st(Sl),Ld=A({},Sl,{dataTransfer:0}),Rd=st(Ld),Td=A({},Nr,{relatedTarget:0}),Vi=st(Td),zd=A({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=st(zd),Od=A({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=st(Od),Dd=A({},Un,{data:0}),as=st(Dd),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bd[e])?!!t[e]:!1}function Hi(){return Ad}var $d=A({},Nr,{key:function(e){if(e.key){var t=Ud[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hi,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=st($d),Vd=A({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=st(Vd),Hd=A({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hi}),Qd=st(Hd),Jd=A({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=st(Jd),Gd=A({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=st(Gd),Xd=[9,13,27,32],Qi=S&&"CompositionEvent"in window,Cr=null;S&&"documentMode"in document&&(Cr=document.documentMode);var qd=S&&"TextEvent"in window&&!Cr,us=S&&(!Qi||Cr&&8<Cr&&11>=Cr),cs=" ",ds=!1;function fs(e,t){switch(e){case"keyup":return Xd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Zd(e,t){switch(e){case"compositionend":return ps(t);case"keypress":return t.which!==32?null:(ds=!0,cs);case"textInput":return e=t.data,e===cs&&ds?null:e;default:return null}}function ef(e,t){if(In)return e==="compositionend"||!Qi&&fs(e,t)?(e=ls(),kl=Bi=Yt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tf[e.type]:t==="textarea"}function hs(e,t,n,r){Oa(r),t=Pl(t,"onChange"),0<t.length&&(n=new Ai("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Lr=null;function nf(e){zs(e,0)}function El(e){var t=Vn(e);if(ll(t))return e}function rf(e,t){if(e==="change")return t}var gs=!1;if(S){var Ji;if(S){var Ki="oninput"in document;if(!Ki){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Ki=typeof vs.oninput=="function"}Ji=Ki}else Ji=!1;gs=Ji&&(!document.documentMode||9<document.documentMode)}function ys(){Pr&&(Pr.detachEvent("onpropertychange",xs),Lr=Pr=null)}function xs(e){if(e.propertyName==="value"&&El(Lr)){var t=[];hs(t,Lr,e,Pt(e)),Ia(nf,t)}}function lf(e,t,n){e==="focusin"?(ys(),Pr=t,Lr=n,Pr.attachEvent("onpropertychange",xs)):e==="focusout"&&ys()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Lr)}function af(e,t){if(e==="click")return El(t)}function sf(e,t){if(e==="input"||e==="change")return El(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:uf;function Rr(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!_.call(t,l)||!_t(e[l],t[l]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ws(n)}}function js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _s(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rn(e.document)}return t}function Gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cf(e){var t=_s(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&js(n.ownerDocument.documentElement,n)){if(r!==null&&Gi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ks(n,i);var a=ks(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=S&&"documentMode"in document&&11>=document.documentMode,Bn=null,Yi=null,Tr=null,Xi=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||Bn==null||Bn!==Rn(r)||(r=Bn,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Rr(Tr,r)||(Tr=r,r=Pl(Yi,"onSelect"),0<r.length&&(t=new Ai("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},qi={},Es={};S&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function bl(e){if(qi[e])return qi[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Es)return qi[e]=t[n];return e}var Ns=bl("animationend"),bs=bl("animationiteration"),Cs=bl("animationstart"),Ps=bl("transitionend"),Ls=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Ls.set(e,t),v(t,[e])}for(var Zi=0;Zi<Rs.length;Zi++){var eo=Rs[Zi],ff=eo.toLowerCase(),pf=eo[0].toUpperCase()+eo.slice(1);Xt(ff,"on"+pf)}Xt(Ns,"onAnimationEnd"),Xt(bs,"onAnimationIteration"),Xt(Cs,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Ps,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dd(r,t,void 0,e),e.currentTarget=null}function zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var f=r[a],p=f.instance,k=f.currentTarget;if(f=f.listener,p!==i&&l.isPropagationStopped())break e;Ts(l,f,k),i=p}else for(a=0;a<r.length;a++){if(f=r[a],p=f.instance,k=f.currentTarget,f=f.listener,p!==i&&l.isPropagationStopped())break e;Ts(l,f,k),i=p}}}if(dl)throw e=Ri,dl=!1,Ri=null,e}function _e(e,t){var n=t[so];n===void 0&&(n=t[so]=new Set);var r=e+"__bubble";n.has(r)||(Ms(t,e,2,!1),n.add(r))}function to(e,t,n){var r=0;t&&(r|=4),Ms(n,e,r,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[Cl]){e[Cl]=!0,d.forEach(function(n){n!=="selectionchange"&&(mf.has(n)||to(n,!1,e),to(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,to("selectionchange",!1,t))}}function Ms(e,t,n,r){switch(rs(t)){case 1:var l=bd;break;case 4:l=Cd;break;default:l=Ui}n=l.bind(null,t,n,e),l=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function no(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;a=a.return}for(;f!==null;){if(a=yn(f),a===null)return;if(p=a.tag,p===5||p===6){r=i=a;continue e}f=f.parentNode}}r=r.return}Ia(function(){var k=i,R=Pt(n),O=[];e:{var C=Ls.get(e);if(C!==void 0){var $=Ai,V=e;switch(e){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":$=Wd;break;case"focusin":V="focus",$=Vi;break;case"focusout":V="blur",$=Vi;break;case"beforeblur":case"afterblur":$=Vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Qd;break;case Ns:case bs:case Cs:$=Md;break;case Ps:$=Kd;break;case"scroll":$=Pd;break;case"wheel":$=Yd;break;case"copy":case"cut":case"paste":$=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=ss}var H=(t&4)!==0,Re=!H&&e==="scroll",y=H?C!==null?C+"Capture":null:C;H=[];for(var h=k,w;h!==null;){w=h;var F=w.stateNode;if(w.tag===5&&F!==null&&(w=F,y!==null&&(F=gr(h,y),F!=null&&H.push(Or(h,F,w)))),Re)break;h=h.return}0<H.length&&(C=new $(C,V,null,n,R),O.push({event:C,listeners:H}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",C&&n!==Ze&&(V=n.relatedTarget||n.fromElement)&&(yn(V)||V[Ot]))break e;if(($||C)&&(C=R.window===R?R:(C=R.ownerDocument)?C.defaultView||C.parentWindow:window,$?(V=n.relatedTarget||n.toElement,$=k,V=V?yn(V):null,V!==null&&(Re=vn(V),V!==Re||V.tag!==5&&V.tag!==6)&&(V=null)):($=null,V=k),$!==V)){if(H=os,F="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(H=ss,F="onPointerLeave",y="onPointerEnter",h="pointer"),Re=$==null?C:Vn($),w=V==null?C:Vn(V),C=new H(F,h+"leave",$,n,R),C.target=Re,C.relatedTarget=w,F=null,yn(R)===k&&(H=new H(y,h+"enter",V,n,R),H.target=w,H.relatedTarget=Re,F=H),Re=F,$&&V)t:{for(H=$,y=V,h=0,w=H;w;w=$n(w))h++;for(w=0,F=y;F;F=$n(F))w++;for(;0<h-w;)H=$n(H),h--;for(;0<w-h;)y=$n(y),w--;for(;h--;){if(H===y||y!==null&&H===y.alternate)break t;H=$n(H),y=$n(y)}H=null}else H=null;$!==null&&Os(O,C,$,H,!1),V!==null&&Re!==null&&Os(O,Re,V,H,!0)}}e:{if(C=k?Vn(k):window,$=C.nodeName&&C.nodeName.toLowerCase(),$==="select"||$==="input"&&C.type==="file")var Q=rf;else if(ms(C))if(gs)Q=sf;else{Q=of;var X=lf}else($=C.nodeName)&&$.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(Q=af);if(Q&&(Q=Q(e,k))){hs(O,Q,n,R);break e}X&&X(e,C,k),e==="focusout"&&(X=C._wrapperState)&&X.controlled&&C.type==="number"&&pe(C,"number",C.value)}switch(X=k?Vn(k):window,e){case"focusin":(ms(X)||X.contentEditable==="true")&&(Bn=X,Yi=k,Tr=null);break;case"focusout":Tr=Yi=Bn=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Ss(O,n,R);break;case"selectionchange":if(df)break;case"keydown":case"keyup":Ss(O,n,R)}var q;if(Qi)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else In?fs(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(us&&n.locale!=="ko"&&(In||te!=="onCompositionStart"?te==="onCompositionEnd"&&In&&(q=ls()):(Yt=R,Bi="value"in Yt?Yt.value:Yt.textContent,In=!0)),X=Pl(k,te),0<X.length&&(te=new as(te,e,null,n,R),O.push({event:te,listeners:X}),q?te.data=q:(q=ps(n),q!==null&&(te.data=q)))),(q=qd?Zd(e,n):ef(e,n))&&(k=Pl(k,"onBeforeInput"),0<k.length&&(R=new as("onBeforeInput","beforeinput",null,n,R),O.push({event:R,listeners:k}),R.data=q))}zs(O,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=gr(e,n),i!=null&&r.unshift(Or(e,i,l)),i=gr(e,t),i!=null&&r.push(Or(e,i,l))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var f=n,p=f.alternate,k=f.stateNode;if(p!==null&&p===r)break;f.tag===5&&k!==null&&(f=k,l?(p=gr(n,i),p!=null&&a.unshift(Or(n,p,f))):l||(p=gr(n,i),p!=null&&a.push(Or(n,p,f)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(gf,"")}function Ll(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(s(425))}function Rl(){}var ro=null,lo=null;function io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oo=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(xf)}:oo;function xf(e){setTimeout(function(){throw e})}function ao(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Er(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Wn,Fr="__reactProps$"+Wn,Ot="__reactContainer$"+Wn,so="__reactEvents$"+Wn,wf="__reactListeners$"+Wn,kf="__reactHandles$"+Wn;function yn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Us(e);e!==null;){if(n=e[Rt])return n;e=Us(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[Rt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Tl(e){return e[Fr]||null}var uo=[],Hn=-1;function Zt(e){return{current:e}}function Se(e){0>Hn||(e.current=uo[Hn],uo[Hn]=null,Hn--)}function ke(e,t){Hn++,uo[Hn]=e.current,e.current=t}var en={},Qe=Zt(en),nt=Zt(!1),xn=en;function Qn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function zl(){Se(nt),Se(Qe)}function Is(e,t,n){if(Qe.current!==en)throw Error(s(168));ke(Qe,t),ke(nt,n)}function Bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ge(e)||"Unknown",l));return A({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,xn=Qe.current,ke(Qe,e),ke(nt,nt.current),!0}function As(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Bs(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(Qe),ke(Qe,e)):Se(nt),ke(nt,n)}var Ft=null,Ol=!1,co=!1;function $s(e){Ft===null?Ft=[e]:Ft.push(e)}function jf(e){Ol=!0,$s(e)}function tn(){if(!co&&Ft!==null){co=!0;var e=0,t=ye;try{var n=Ft;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ol=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),Va(Ti,tn),l}finally{ye=t,co=!1}}return null}var Jn=[],Kn=0,Fl=null,Dl=0,mt=[],ht=0,wn=null,Dt=1,Ut="";function kn(e,t){Jn[Kn++]=Dl,Jn[Kn++]=Fl,Fl=e,Dl=t}function Ws(e,t,n){mt[ht++]=Dt,mt[ht++]=Ut,mt[ht++]=wn,wn=e;var r=Dt;e=Ut;var l=32-jt(r)-1;r&=~(1<<l),n+=1;var i=32-jt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Dt=1<<32-jt(t)+l|n<<l|r,Ut=i+e}else Dt=1<<i|n<<l|r,Ut=e}function fo(e){e.return!==null&&(kn(e,1),Ws(e,1,0))}function po(e){for(;e===Fl;)Fl=Jn[--Kn],Jn[Kn]=null,Dl=Jn[--Kn],Jn[Kn]=null;for(;e===wn;)wn=mt[--ht],mt[ht]=null,Ut=mt[--ht],mt[ht]=null,Dt=mt[--ht],mt[ht]=null}var ut=null,ct=null,Ee=!1,St=null;function Vs(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Dt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ho(e){if(Ee){var t=ct;if(t){var n=t;if(!Hs(e,t)){if(mo(e))throw Error(s(418));t=qt(n.nextSibling);var r=ut;t&&Hs(e,t)?Vs(r,n):(e.flags=e.flags&-4097|2,Ee=!1,ut=e)}}else{if(mo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ee=!1,ut=e}}}function Qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Ul(e){if(e!==ut)return!1;if(!Ee)return Qs(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!io(e.type,e.memoizedProps)),t&&(t=ct)){if(mo(e))throw Js(),Error(s(418));for(;t;)Vs(e,t),t=qt(t.nextSibling)}if(Qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?qt(e.stateNode.nextSibling):null;return!0}function Js(){for(var e=ct;e;)e=qt(e.nextSibling)}function Gn(){ct=ut=null,Ee=!1}function go(e){St===null?St=[e]:St.push(e)}var _f=ue.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var f=l.refs;a===null?delete f[i]:f[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Il(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ks(e){var t=e._init;return t(e._payload)}function Gs(e){function t(y,h){if(e){var w=y.deletions;w===null?(y.deletions=[h],y.flags|=16):w.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function l(y,h){return y=cn(y,h),y.index=0,y.sibling=null,y}function i(y,h,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<h?(y.flags|=2,h):w):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,h,w,F){return h===null||h.tag!==6?(h=aa(w,y.mode,F),h.return=y,h):(h=l(h,w),h.return=y,h)}function p(y,h,w,F){var Q=w.type;return Q===je?R(y,h,w.props.children,F,w.key):h!==null&&(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ce&&Ks(Q)===h.type)?(F=l(h,w.props),F.ref=Ur(y,h,w),F.return=y,F):(F=ui(w.type,w.key,w.props,null,y.mode,F),F.ref=Ur(y,h,w),F.return=y,F)}function k(y,h,w,F){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=sa(w,y.mode,F),h.return=y,h):(h=l(h,w.children||[]),h.return=y,h)}function R(y,h,w,F,Q){return h===null||h.tag!==7?(h=Pn(w,y.mode,F,Q),h.return=y,h):(h=l(h,w),h.return=y,h)}function O(y,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=aa(""+h,y.mode,w),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xe:return w=ui(h.type,h.key,h.props,null,y.mode,w),w.ref=Ur(y,null,h),w.return=y,w;case ze:return h=sa(h,y.mode,w),h.return=y,h;case ce:var F=h._init;return O(y,F(h._payload),w)}if(Pe(h)||Y(h))return h=Pn(h,y.mode,w,null),h.return=y,h;Il(y,h)}return null}function C(y,h,w,F){var Q=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return Q!==null?null:f(y,h,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xe:return w.key===Q?p(y,h,w,F):null;case ze:return w.key===Q?k(y,h,w,F):null;case ce:return Q=w._init,C(y,h,Q(w._payload),F)}if(Pe(w)||Y(w))return Q!==null?null:R(y,h,w,F,null);Il(y,w)}return null}function $(y,h,w,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return y=y.get(w)||null,f(h,y,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case xe:return y=y.get(F.key===null?w:F.key)||null,p(h,y,F,Q);case ze:return y=y.get(F.key===null?w:F.key)||null,k(h,y,F,Q);case ce:var X=F._init;return $(y,h,w,X(F._payload),Q)}if(Pe(F)||Y(F))return y=y.get(w)||null,R(h,y,F,Q,null);Il(h,F)}return null}function V(y,h,w,F){for(var Q=null,X=null,q=h,te=h=0,Ae=null;q!==null&&te<w.length;te++){q.index>te?(Ae=q,q=null):Ae=q.sibling;var me=C(y,q,w[te],F);if(me===null){q===null&&(q=Ae);break}e&&q&&me.alternate===null&&t(y,q),h=i(me,h,te),X===null?Q=me:X.sibling=me,X=me,q=Ae}if(te===w.length)return n(y,q),Ee&&kn(y,te),Q;if(q===null){for(;te<w.length;te++)q=O(y,w[te],F),q!==null&&(h=i(q,h,te),X===null?Q=q:X.sibling=q,X=q);return Ee&&kn(y,te),Q}for(q=r(y,q);te<w.length;te++)Ae=$(q,y,te,w[te],F),Ae!==null&&(e&&Ae.alternate!==null&&q.delete(Ae.key===null?te:Ae.key),h=i(Ae,h,te),X===null?Q=Ae:X.sibling=Ae,X=Ae);return e&&q.forEach(function(dn){return t(y,dn)}),Ee&&kn(y,te),Q}function H(y,h,w,F){var Q=Y(w);if(typeof Q!="function")throw Error(s(150));if(w=Q.call(w),w==null)throw Error(s(151));for(var X=Q=null,q=h,te=h=0,Ae=null,me=w.next();q!==null&&!me.done;te++,me=w.next()){q.index>te?(Ae=q,q=null):Ae=q.sibling;var dn=C(y,q,me.value,F);if(dn===null){q===null&&(q=Ae);break}e&&q&&dn.alternate===null&&t(y,q),h=i(dn,h,te),X===null?Q=dn:X.sibling=dn,X=dn,q=Ae}if(me.done)return n(y,q),Ee&&kn(y,te),Q;if(q===null){for(;!me.done;te++,me=w.next())me=O(y,me.value,F),me!==null&&(h=i(me,h,te),X===null?Q=me:X.sibling=me,X=me);return Ee&&kn(y,te),Q}for(q=r(y,q);!me.done;te++,me=w.next())me=$(q,y,te,me.value,F),me!==null&&(e&&me.alternate!==null&&q.delete(me.key===null?te:me.key),h=i(me,h,te),X===null?Q=me:X.sibling=me,X=me);return e&&q.forEach(function(np){return t(y,np)}),Ee&&kn(y,te),Q}function Re(y,h,w,F){if(typeof w=="object"&&w!==null&&w.type===je&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case xe:e:{for(var Q=w.key,X=h;X!==null;){if(X.key===Q){if(Q=w.type,Q===je){if(X.tag===7){n(y,X.sibling),h=l(X,w.props.children),h.return=y,y=h;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ce&&Ks(Q)===X.type){n(y,X.sibling),h=l(X,w.props),h.ref=Ur(y,X,w),h.return=y,y=h;break e}n(y,X);break}else t(y,X);X=X.sibling}w.type===je?(h=Pn(w.props.children,y.mode,F,w.key),h.return=y,y=h):(F=ui(w.type,w.key,w.props,null,y.mode,F),F.ref=Ur(y,h,w),F.return=y,y=F)}return a(y);case ze:e:{for(X=w.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(y,h.sibling),h=l(h,w.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=sa(w,y.mode,F),h.return=y,y=h}return a(y);case ce:return X=w._init,Re(y,h,X(w._payload),F)}if(Pe(w))return V(y,h,w,F);if(Y(w))return H(y,h,w,F);Il(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(y,h.sibling),h=l(h,w),h.return=y,y=h):(n(y,h),h=aa(w,y.mode,F),h.return=y,y=h),a(y)):n(y,h)}return Re}var Yn=Gs(!0),Ys=Gs(!1),Bl=Zt(null),Al=null,Xn=null,vo=null;function yo(){vo=Xn=Al=null}function xo(e){var t=Bl.current;Se(Bl),e._currentValue=t}function wo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){Al=e,vo=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(vo!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Al===null)throw Error(s(308));Xn=e,Al.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var jn=null;function ko(e){jn===null?jn=[e]:jn.push(e)}function Xs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ko(t)):(n.next=l.next,l.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,It(e,n)}return l=r.interleaved,l===null?(t.next=t,ko(r)):(t.next=l.next,l.next=t),r.interleaved=t,It(e,n)}function $l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}function Zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var l=e.updateQueue;nn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var p=f,k=p.next;p.next=null,a===null?i=k:a.next=k,a=p;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==a&&(f===null?R.firstBaseUpdate=k:f.next=k,R.lastBaseUpdate=p))}if(i!==null){var O=l.baseState;a=0,R=k=p=null,f=i;do{var C=f.lane,$=f.eventTime;if((r&C)===C){R!==null&&(R=R.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var V=e,H=f;switch(C=t,$=n,H.tag){case 1:if(V=H.payload,typeof V=="function"){O=V.call($,O,C);break e}O=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=H.payload,C=typeof V=="function"?V.call($,O,C):V,C==null)break e;O=A({},O,C);break e;case 2:nn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[f]:C.push(f))}else $={eventTime:$,lane:C,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(k=R=$,p=O):R=R.next=$,a|=C;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;C=f,f=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);if(R===null&&(p=O),l.baseState=p,l.firstBaseUpdate=k,l.lastBaseUpdate=R,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);En|=a,e.lanes=a,e.memoizedState=O}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var Ir={},Tt=Zt(Ir),Br=Zt(Ir),Ar=Zt(Ir);function _n(e){if(e===Ir)throw Error(s(174));return e}function _o(e,t){switch(ke(Ar,t),ke(Br,e),ke(Tt,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wt(t,e)}Se(Tt),ke(Tt,t)}function Zn(){Se(Tt),Se(Br),Se(Ar)}function tu(e){_n(Ar.current);var t=_n(Tt.current),n=wt(t,e.type);t!==n&&(ke(Br,e),ke(Tt,n))}function So(e){Br.current===e&&(Se(Tt),Se(Br))}var Ne=Zt(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function No(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var Hl=ue.ReactCurrentDispatcher,bo=ue.ReactCurrentBatchConfig,Sn=0,be=null,Fe=null,Ie=null,Ql=!1,$r=!1,Wr=0,Sf=0;function Je(){throw Error(s(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Po(e,t,n,r,l,i){if(Sn=i,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hl.current=e===null||e.memoizedState===null?Cf:Pf,e=n(r,l),$r){i=0;do{if($r=!1,Wr=0,25<=i)throw Error(s(301));i+=1,Ie=Fe=null,t.updateQueue=null,Hl.current=Lf,e=n(r,l)}while($r)}if(Hl.current=Gl,t=Fe!==null&&Fe.next!==null,Sn=0,Ie=Fe=be=null,Ql=!1,t)throw Error(s(300));return e}function Lo(){var e=Wr!==0;return Wr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function vt(){if(Fe===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ie===null?be.memoizedState:Ie.next;if(t!==null)Ie=t,Fe=e;else{if(e===null)throw Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ie===null?be.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Vr(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Fe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=a=null,p=null,k=i;do{var R=k.lane;if((Sn&R)===R)p!==null&&(p=p.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var O={lane:R,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};p===null?(f=p=O,a=r):p=p.next=O,be.lanes|=R,En|=R}k=k.next}while(k!==null&&k!==i);p===null?a=r:p.next=f,_t(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,be.lanes|=i,En|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function To(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);_t(i,t.memoizedState)||(lt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nu(){}function ru(e,t){var n=be,r=vt(),l=t(),i=!_t(r.memoizedState,l);if(i&&(r.memoizedState=l,lt=!0),r=r.queue,zo(ou.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Hr(9,iu.bind(null,n,r,l,t),void 0,null),Be===null)throw Error(s(349));(Sn&30)!==0||lu(n,t,l)}return l}function lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function iu(e,t,n,r){t.value=n,t.getSnapshot=r,au(t)&&su(e)}function ou(e,t,n){return n(function(){au(t)&&su(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function su(e){var t=It(e,1);t!==null&&Ct(t,e,1,-1)}function uu(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,be,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cu(){return vt().memoizedState}function Jl(e,t,n,r){var l=zt();be.flags|=e,l.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var l=vt();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var a=Fe.memoizedState;if(i=a.destroy,r!==null&&Co(r,a.deps)){l.memoizedState=Hr(t,n,i,r);return}}be.flags|=e,l.memoizedState=Hr(1|t,n,i,r)}function du(e,t){return Jl(8390656,8,e,t)}function zo(e,t){return Kl(2048,8,e,t)}function fu(e,t){return Kl(4,2,e,t)}function pu(e,t){return Kl(4,4,e,t)}function mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,mu.bind(null,t,e),n)}function Mo(){}function gu(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yu(e,t,n){return(Sn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(_t(n,t)||(n=Ka(),be.lanes|=n,En|=n,e.baseState=!0),t)}function Ef(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=bo.transition;bo.transition={};try{e(!1),t()}finally{ye=n,bo.transition=r}}function xu(){return vt().memoizedState}function Nf(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e))ku(t,n);else if(n=Xs(e,t,n,r),n!==null){var l=tt();Ct(n,e,r,l),ju(n,t,r)}}function bf(e,t,n){var r=sn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))ku(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,f=i(a,n);if(l.hasEagerState=!0,l.eagerState=f,_t(f,a)){var p=t.interleaved;p===null?(l.next=l,ko(t)):(l.next=p.next,p.next=l),t.interleaved=l;return}}catch{}finally{}n=Xs(e,t,l,r),n!==null&&(l=tt(),Ct(n,e,r,l),ju(n,t,r))}}function wu(e){var t=e.alternate;return e===be||t!==null&&t===be}function ku(e,t){$r=Ql=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ju(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oi(e,n)}}var Gl={readContext:gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Cf={readContext:gt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jl(4194308,4,mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jl(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nf.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Mo,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=Ef.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,l=zt();if(Ee){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Be===null)throw Error(s(349));(Sn&30)!==0||lu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,du(ou.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,iu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=zt(),t=Be.identifierPrefix;if(Ee){var n=Ut,r=Dt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pf={readContext:gt,useCallback:gu,useContext:gt,useEffect:zo,useImperativeHandle:hu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:vu,useReducer:Ro,useRef:cu,useState:function(){return Ro(Vr)},useDebugValue:Mo,useDeferredValue:function(e){var t=vt();return yu(t,Fe.memoizedState,e)},useTransition:function(){var e=Ro(Vr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1},Lf={readContext:gt,useCallback:gu,useContext:gt,useEffect:zo,useImperativeHandle:hu,useInsertionEffect:fu,useLayoutEffect:pu,useMemo:vu,useReducer:To,useRef:cu,useState:function(){return To(Vr)},useDebugValue:Mo,useDeferredValue:function(e){var t=vt();return Fe===null?t.memoizedState=e:yu(t,Fe.memoizedState,e)},useTransition:function(){var e=To(Vr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yl={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),l=sn(e),i=Bt(r,l);i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,l),t!==null&&(Ct(t,e,l,r),$l(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),l=sn(e),i=Bt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,l),t!==null&&(Ct(t,e,l,r),$l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=sn(e),l=Bt(n,r);l.tag=2,t!=null&&(l.callback=t),t=rn(e,l,r),t!==null&&(Ct(t,e,r,n),$l(t,e,r))}};function _u(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(l,i):!0}function Su(e,t,n){var r=!1,l=en,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(l=rt(t)?xn:Qe.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,l):en),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function Fo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},jo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=gt(i):(i=rt(t)?xn:Qe.current,l.context=Qn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Yl.enqueueReplaceState(l,l.state,null),Wl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var n="",r=t;do n+=le(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Do(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ri||(ri=!0,Zo=r),Uo(e,t)},n}function bu(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Uo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Hf.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Tf=ue.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?Ys(t,null,n,r):Yn(t,e.child,n,r)}function Ru(e,t,n,r,l){n=n.render;var i=t.ref;return qn(t,l),r=Po(e,t,n,r,i,l),n=Lo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,At(e,t,l)):(Ee&&n&&fo(t),t.flags|=1,et(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!oa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zu(e,t,i,r,l)):(e=ui(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(a,r)&&e.ref===t.ref)return At(e,t,l)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,At(e,t,l)}return Io(e,t,n,r,l)}function Mu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(nr,dt),dt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(nr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ke(nr,dt),dt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ke(nr,dt),dt|=r;return et(e,t,l,n),t.child}function Ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Io(e,t,n,r,l){var i=rt(n)?xn:Qe.current;return i=Qn(t,i),qn(t,l),n=Po(e,t,n,r,i,l),r=Lo(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,At(e,t,l)):(Ee&&r&&fo(t),t.flags|=1,et(e,t,n,l),t.child)}function Fu(e,t,n,r,l){if(rt(n)){var i=!0;Ml(t)}else i=!1;if(qn(t,l),t.stateNode===null)ql(e,t),Su(t,n,r),Fo(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,f=t.memoizedProps;a.props=f;var p=a.context,k=n.contextType;typeof k=="object"&&k!==null?k=gt(k):(k=rt(n)?xn:Qe.current,k=Qn(t,k));var R=n.getDerivedStateFromProps,O=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function";O||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==r||p!==k)&&Eu(t,a,r,k),nn=!1;var C=t.memoizedState;a.state=C,Wl(t,r,a,l),p=t.memoizedState,f!==r||C!==p||nt.current||nn?(typeof R=="function"&&(Oo(t,n,R,r),p=t.memoizedState),(f=nn||_u(t,n,f,r,C,p,k))?(O||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=k,r=f):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qs(e,t),f=t.memoizedProps,k=t.type===t.elementType?f:Et(t.type,f),a.props=k,O=t.pendingProps,C=a.context,p=n.contextType,typeof p=="object"&&p!==null?p=gt(p):(p=rt(n)?xn:Qe.current,p=Qn(t,p));var $=n.getDerivedStateFromProps;(R=typeof $=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==O||C!==p)&&Eu(t,a,r,p),nn=!1,C=t.memoizedState,a.state=C,Wl(t,r,a,l);var V=t.memoizedState;f!==O||C!==V||nt.current||nn?(typeof $=="function"&&(Oo(t,n,$,r),V=t.memoizedState),(k=nn||_u(t,n,k,r,C,V,p)||!1)?(R||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,V,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,V,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),a.props=r,a.state=V,a.context=p,r=k):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Bo(e,t,n,r,i,l)}function Bo(e,t,n,r,l,i){Ou(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&As(t,n,!1),At(e,t,i);r=t.stateNode,Tf.current=t;var f=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yn(t,e.child,null,i),t.child=Yn(t,null,f,i)):et(e,t,f,i),t.memoizedState=r.state,l&&As(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?Is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Is(e,t.context,!1),_o(e,t.containerInfo)}function Uu(e,t,n,r,l){return Gn(),go(l),t.flags|=256,et(e,t,n,r),t.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,n){var r=t.pendingProps,l=Ne.current,i=!1,a=(t.flags&128)!==0,f;if((f=a)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ke(Ne,l&1),e===null)return ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ci(a,r,0,null),e=Pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$o(n),t.memoizedState=Ao,e):Wo(t,a));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return zf(e,t,a,r,f,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,f=l.sibling;var p={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=cn(l,p),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=cn(f,i):(i=Pn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?$o(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ao,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xl(e,t,n,r){return r!==null&&go(r),Yn(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Do(Error(s(422))),Xl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ci({mode:"visible",children:r.children},l,0,null),i=Pn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Yn(t,e.child,null,a),t.child.memoizedState=$o(a),t.memoizedState=Ao,i);if((t.mode&1)===0)return Xl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(s(419)),r=Do(i,r,void 0),Xl(e,t,a,r)}if(f=(a&e.childLanes)!==0,lt||f){if(r=Be,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,It(e,l),Ct(r,e,l,-1))}return ia(),r=Do(Error(s(421))),Xl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ct=qt(l.nextSibling),ut=t,Ee=!0,St=null,e!==null&&(mt[ht++]=Dt,mt[ht++]=Ut,mt[ht++]=wn,Dt=e.id,Ut=e.overflow,wn=t),t=Wo(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wo(e.return,t,n)}function Vo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Au(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(et(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vo(t,!0,n,null,i);break;case"together":Vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mf(e,t,n){switch(t.tag){case 3:Du(t),Gn();break;case 5:tu(t);break;case 1:rt(t.type)&&Ml(t);break;case 4:_o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ke(Bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Iu(e,t,n):(ke(Ne,Ne.current&1),e=At(e,t,n),e!==null?e.sibling:null);ke(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Au(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ke(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return At(e,t,n)}var $u,Ho,Wu,Vu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ho=function(){},Wu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_n(Tt.current);var i=null;switch(n){case"input":l=dr(e,l),r=dr(e,r),i=[];break;case"select":l=A({},l,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":l=pr(e,l),r=pr(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rl)}Ue(n,r);var a;n=null;for(k in l)if(!r.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var f=l[k];for(a in f)f.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(m.hasOwnProperty(k)?i||(i=[]):(i=i||[]).push(k,null));for(k in r){var p=r[k];if(f=l!=null?l[k]:void 0,r.hasOwnProperty(k)&&p!==f&&(p!=null||f!=null))if(k==="style")if(f){for(a in f)!f.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in p)p.hasOwnProperty(a)&&f[a]!==p[a]&&(n||(n={}),n[a]=p[a])}else n||(i||(i=[]),i.push(k,n)),n=p;else k==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,f=f?f.__html:void 0,p!=null&&f!==p&&(i=i||[]).push(k,p)):k==="children"?typeof p!="string"&&typeof p!="number"||(i=i||[]).push(k,""+p):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(m.hasOwnProperty(k)?(p!=null&&k==="onScroll"&&_e("scroll",e),i||f===p||(i=[])):(i=i||[]).push(k,p))}n&&(i=i||[]).push("style",n);var k=i;(t.updateQueue=k)&&(t.flags|=4)}},Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Of(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return rt(t.type)&&zl(),Ke(t),null;case 3:return r=t.stateNode,Zn(),Se(nt),Se(Qe),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ul(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(na(St),St=null))),Ho(e,t),Ke(t),null;case 5:So(t);var l=_n(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(e=_n(Tt.current),Ul(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Rt]=t,r[Fr]=i,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(l=0;l<zr.length;l++)_e(zr[l],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":il(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":al(r,i),_e("invalid",r)}Ue(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var f=i[a];a==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&Ll(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Ll(r.textContent,f,e),l=["children",""+f]):m.hasOwnProperty(a)&&f!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ln(r),Tn(r,i,!0);break;case"textarea":Ln(r),sl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Rl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rt]=t,e[Fr]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(a=qe(n,r),n){case"dialog":_e("cancel",e),_e("close",e),l=r;break;case"iframe":case"object":case"embed":_e("load",e),l=r;break;case"video":case"audio":for(l=0;l<zr.length;l++)_e(zr[l],e);l=r;break;case"source":_e("error",e),l=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=r;break;case"details":_e("toggle",e),l=r;break;case"input":il(e,r),l=dr(e,r),_e("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=A({},r,{value:void 0}),_e("invalid",e);break;case"textarea":al(e,r),l=pr(e,r),_e("invalid",e);break;default:l=r}Ue(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var p=f[i];i==="style"?z(e,p):i==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ul(e,p)):i==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&kt(e,p):typeof p=="number"&&kt(e,""+p):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(m.hasOwnProperty(i)?p!=null&&i==="onScroll"&&_e("scroll",e):p!=null&&oe(e,i,p,a))}switch(n){case"input":Ln(e),Tn(e,r,!1);break;case"textarea":Ln(e),sl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fe(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ht(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=_n(Ar.current),_n(Tt.current),Ul(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(i=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Ke(t),null;case 13:if(Se(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Js(),Gn(),t.flags|=98560,i=!1;else if(i=Ul(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Rt]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else St!==null&&(na(St),St=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?De===0&&(De=3):ia())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Zn(),Ho(e,t),e===null&&Mr(t.stateNode.containerInfo),Ke(t),null;case 10:return xo(t.type._context),Ke(t),null;case 17:return rt(t.type)&&zl(),Ke(t),null;case 19:if(Se(Ne),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Qr(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Vl(e),a!==null){for(t.flags|=128,Qr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ne,Ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&Le()>rr&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Ee)return Ke(t),null}else 2*Le()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Le(),t.sibling=null,n=Ne.current,ke(Ne,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return la(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Ff(e,t){switch(po(t),t.tag){case 1:return rt(t.type)&&zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),Se(nt),Se(Qe),No(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(Se(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ne),null;case 4:return Zn(),null;case 10:return xo(t.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Zl=!1,Ge=!1,Df=typeof WeakSet=="function"?WeakSet:Set,W=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Hu=!1;function Uf(e,t){if(ro=xl,e=_s(),Gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,f=-1,p=-1,k=0,R=0,O=e,C=null;t:for(;;){for(var $;O!==n||l!==0&&O.nodeType!==3||(f=a+l),O!==i||r!==0&&O.nodeType!==3||(p=a+r),O.nodeType===3&&(a+=O.nodeValue.length),($=O.firstChild)!==null;)C=O,O=$;for(;;){if(O===e)break t;if(C===n&&++k===l&&(f=a),C===i&&++R===r&&(p=a),($=O.nextSibling)!==null)break;O=C,C=O.parentNode}O=$}n=f===-1||p===-1?null:{start:f,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(lo={focusedElem:e,selectionRange:n},xl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var H=V.memoizedProps,Re=V.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?H:Et(t.type,H),Re);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Ce(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return V=Hu,Hu=!1,V}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Qo(t,n,i)}l=l.next}while(l!==r)}}function ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Fr],delete t[so],delete t[wf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rl));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}var We=null,Nt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Gu(e,t,n),n=n.sibling}function Gu(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:Ge||tr(n,t);case 6:var r=We,l=Nt;We=null,ln(e,t,n),We=r,Nt=l,We!==null&&(Nt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Nt?(e=We,n=n.stateNode,e.nodeType===8?ao(e.parentNode,n):e.nodeType===1&&ao(e,n),Er(e)):ao(We,n.stateNode));break;case 4:r=We,l=Nt,We=n.stateNode.containerInfo,Nt=!0,ln(e,t,n),We=r,Nt=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Qo(n,t,a),l=l.next}while(l!==r)}ln(e,t,n);break;case 1:if(!Ge&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ce(n,t,f)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,ln(e,t,n),Ge=r):ln(e,t,n);break;default:ln(e,t,n)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Df),t.forEach(function(r){var l=Jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,f=a;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,Nt=!1;break e;case 3:We=f.stateNode.containerInfo,Nt=!0;break e;case 4:We=f.stateNode.containerInfo,Nt=!0;break e}f=f.return}if(We===null)throw Error(s(160));Gu(i,a,l),We=null,Nt=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(k){Ce(l,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Mt(e),r&4){try{Jr(3,e,e.return),ei(3,e)}catch(H){Ce(e,e.return,H)}try{Jr(5,e,e.return)}catch(H){Ce(e,e.return,H)}}break;case 1:bt(t,e),Mt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(bt(t,e),Mt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var l=e.stateNode;try{kt(l,"")}catch(H){Ce(e,e.return,H)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,f=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&ol(l,i),qe(f,a);var k=qe(f,i);for(a=0;a<p.length;a+=2){var R=p[a],O=p[a+1];R==="style"?z(l,O):R==="dangerouslySetInnerHTML"?ul(l,O):R==="children"?kt(l,O):oe(l,R,O,k)}switch(f){case"input":fr(l,i);break;case"textarea":mr(l,i);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?Ht(l,!!i.multiple,$,!1):C!==!!i.multiple&&(i.defaultValue!=null?Ht(l,!!i.multiple,i.defaultValue,!0):Ht(l,!!i.multiple,i.multiple?[]:"",!1))}l[Fr]=i}catch(H){Ce(e,e.return,H)}}break;case 6:if(bt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(H){Ce(e,e.return,H)}}break;case 3:if(bt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(H){Ce(e,e.return,H)}break;case 4:bt(t,e),Mt(e);break;case 13:bt(t,e),Mt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(qo=Le())),r&4&&Yu(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(k=Ge)||R,bt(t,e),Ge=k):bt(t,e),Mt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!R&&(e.mode&1)!==0)for(W=e,R=e.child;R!==null;){for(O=W=R;W!==null;){switch(C=W,$=C.child,C.tag){case 0:case 11:case 14:case 15:Jr(4,C,C.return);break;case 1:tr(C,C.return);var V=C.stateNode;if(typeof V.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(H){Ce(r,n,H)}}break;case 5:tr(C,C.return);break;case 22:if(C.memoizedState!==null){ec(O);continue}}$!==null?($.return=C,W=$):ec(O)}R=R.sibling}e:for(R=null,O=e;;){if(O.tag===5){if(R===null){R=O;try{l=O.stateNode,k?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=O.stateNode,p=O.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,f.style.display=P("display",a))}catch(H){Ce(e,e.return,H)}}}else if(O.tag===6){if(R===null)try{O.stateNode.nodeValue=k?"":O.memoizedProps}catch(H){Ce(e,e.return,H)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;R===O&&(R=null),O=O.return}R===O&&(R=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:bt(t,e),Mt(e),r&4&&Yu(e);break;case 21:break;default:bt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ju(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(kt(l,""),r.flags&=-33);var i=Ku(e);Go(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,f=Ku(e);Ko(e,f,a);break;default:throw Error(s(161))}}catch(p){Ce(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function If(e,t,n){W=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var l=W,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Zl;if(!a){var f=l.alternate,p=f!==null&&f.memoizedState!==null||Ge;f=Zl;var k=Ge;if(Zl=a,(Ge=p)&&!k)for(W=l;W!==null;)a=W,p=a.child,a.tag===22&&a.memoizedState!==null?tc(l):p!==null?(p.return=a,W=p):tc(l);for(;i!==null;)W=i,qu(i),i=i.sibling;W=l,Zl=f,Ge=k}Zu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,W=i):Zu(e)}}function Zu(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,a,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var R=k.memoizedState;if(R!==null){var O=R.dehydrated;O!==null&&Er(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ge||t.flags&512&&Jo(t)}catch(C){Ce(t,t.return,C)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function ec(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function tc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ei(4,t)}catch(p){Ce(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(p){Ce(t,l,p)}}var i=t.return;try{Jo(t)}catch(p){Ce(t,i,p)}break;case 5:var a=t.return;try{Jo(t)}catch(p){Ce(t,a,p)}}}catch(p){Ce(t,t.return,p)}if(t===e){W=null;break}var f=t.sibling;if(f!==null){f.return=t.return,W=f;break}W=t.return}}var Bf=Math.ceil,ti=ue.ReactCurrentDispatcher,Yo=ue.ReactCurrentOwner,yt=ue.ReactCurrentBatchConfig,de=0,Be=null,Me=null,Ve=0,dt=0,nr=Zt(0),De=0,Kr=null,En=0,ni=0,Xo=0,Gr=null,it=null,qo=0,rr=1/0,$t=null,ri=!1,Zo=null,on=null,li=!1,an=null,ii=0,Yr=0,ea=null,oi=-1,ai=0;function tt(){return(de&6)!==0?Le():oi!==-1?oi:oi=Le()}function sn(e){return(e.mode&1)===0?1:(de&2)!==0&&Ve!==0?Ve&-Ve:_f.transition!==null?(ai===0&&(ai=Ka()),ai):(e=ye,e!==0||(e=window.event,e=e===void 0?16:rs(e.type)),e)}function Ct(e,t,n,r){if(50<Yr)throw Yr=0,ea=null,Error(s(185));wr(e,n,r),((de&2)===0||e!==Be)&&(e===Be&&((de&2)===0&&(ni|=n),De===4&&un(e,Ve)),ot(e,r),n===1&&de===0&&(t.mode&1)===0&&(rr=Le()+500,Ol&&tn()))}function ot(e,t){var n=e.callbackNode;jd(e,t);var r=gl(e,e===Be?Ve:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?jf(rc.bind(null,e)):$s(rc.bind(null,e)),yf(function(){(de&6)===0&&tn()}),n=null;else{switch(Ga(r)){case 1:n=Ti;break;case 4:n=Qa;break;case 16:n=fl;break;case 536870912:n=Ja;break;default:n=fl}n=dc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(oi=-1,ai=0,(de&6)!==0)throw Error(s(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=gl(e,e===Be?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=si(e,r);else{t=r;var l=de;de|=2;var i=ic();(Be!==e||Ve!==t)&&($t=null,rr=Le()+500,bn(e,t));do try{Wf();break}catch(f){lc(e,f)}while(!0);yo(),ti.current=i,de=l,Me!==null?t=0:(Be=null,Ve=0,t=De)}if(t!==0){if(t===2&&(l=zi(e),l!==0&&(r=l,t=ta(e,l))),t===1)throw n=Kr,bn(e,0),un(e,r),ot(e,Le()),n;if(t===6)un(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Af(l)&&(t=si(e,r),t===2&&(i=zi(e),i!==0&&(r=i,t=ta(e,i))),t===1))throw n=Kr,bn(e,0),un(e,r),ot(e,Le()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Cn(e,it,$t);break;case 3:if(un(e,r),(r&130023424)===r&&(t=qo+500-Le(),10<t)){if(gl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oo(Cn.bind(null,e,it,$t),t);break}Cn(e,it,$t);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-jt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bf(r/1960))-r,10<r){e.timeoutHandle=oo(Cn.bind(null,e,it,$t),r);break}Cn(e,it,$t);break;case 5:Cn(e,it,$t);break;default:throw Error(s(329))}}}return ot(e,Le()),e.callbackNode===n?nc.bind(null,e):null}function ta(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=si(e,t),e!==2&&(t=it,it=n,t!==null&&na(t)),e}function na(e){it===null?it=e:it.push.apply(it,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!_t(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Xo,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if((de&6)!==0)throw Error(s(327));lr();var t=gl(e,0);if((t&1)===0)return ot(e,Le()),null;var n=si(e,t);if(e.tag!==0&&n===2){var r=zi(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=Kr,bn(e,0),un(e,t),ot(e,Le()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,it,$t),ot(e,Le()),null}function ra(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(rr=Le()+500,Ol&&tn())}}function Nn(e){an!==null&&an.tag===0&&(de&6)===0&&lr();var t=de;de|=1;var n=yt.transition,r=ye;try{if(yt.transition=null,ye=1,e)return e()}finally{ye=r,yt.transition=n,de=t,(de&6)===0&&tn()}}function la(){dt=nr.current,Se(nr)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vf(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Zn(),Se(nt),Se(Qe),No();break;case 5:So(r);break;case 4:Zn();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:xo(r.type._context);break;case 22:case 23:la()}n=n.return}if(Be=e,Me=e=cn(e.current,null),Ve=dt=t,De=0,Kr=null,Xo=ni=En=0,it=Gr=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}jn=null}return e}function lc(e,t){do{var n=Me;try{if(yo(),Hl.current=Gl,Ql){for(var r=be.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ql=!1}if(Sn=0,Ie=Fe=be=null,$r=!1,Wr=0,Yo.current=null,n===null||n.return===null){De=1,Kr=t,Me=null;break}e:{var i=e,a=n.return,f=n,p=t;if(t=Ve,f.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var k=p,R=f,O=R.tag;if((R.mode&1)===0&&(O===0||O===11||O===15)){var C=R.alternate;C?(R.updateQueue=C.updateQueue,R.memoizedState=C.memoizedState,R.lanes=C.lanes):(R.updateQueue=null,R.memoizedState=null)}var $=Pu(a);if($!==null){$.flags&=-257,Lu($,a,f,i,t),$.mode&1&&Cu(i,k,t),t=$,p=k;var V=t.updateQueue;if(V===null){var H=new Set;H.add(p),t.updateQueue=H}else V.add(p);break e}else{if((t&1)===0){Cu(i,k,t),ia();break e}p=Error(s(426))}}else if(Ee&&f.mode&1){var Re=Pu(a);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Lu(Re,a,f,i,t),go(er(p,f));break e}}i=p=er(p,f),De!==4&&(De=2),Gr===null?Gr=[i]:Gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Nu(i,p,t);Zs(i,y);break e;case 1:f=p;var h=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(on===null||!on.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=bu(i,f,t);Zs(i,F);break e}}i=i.return}while(i!==null)}ac(n)}catch(Q){t=Q,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function ic(){var e=ti.current;return ti.current=Gl,e===null?Gl:e}function ia(){(De===0||De===3||De===2)&&(De=4),Be===null||(En&268435455)===0&&(ni&268435455)===0||un(Be,Ve)}function si(e,t){var n=de;de|=2;var r=ic();(Be!==e||Ve!==t)&&($t=null,bn(e,t));do try{$f();break}catch(l){lc(e,l)}while(!0);if(yo(),de=n,ti.current=r,Me!==null)throw Error(s(261));return Be=null,Ve=0,De}function $f(){for(;Me!==null;)oc(Me)}function Wf(){for(;Me!==null&&!pd();)oc(Me)}function oc(e){var t=cc(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?ac(e):Me=t,Yo.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Of(n,t,dt),n!==null){Me=n;return}}else{if(n=Ff(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);De===0&&(De=5)}function Cn(e,t,n){var r=ye,l=yt.transition;try{yt.transition=null,ye=1,Vf(e,t,n,r)}finally{yt.transition=l,ye=r}return null}function Vf(e,t,n,r){do lr();while(an!==null);if((de&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(_d(e,i),e===Be&&(Me=Be=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||li||(li=!0,dc(fl,function(){return lr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=yt.transition,yt.transition=null;var a=ye;ye=1;var f=de;de|=4,Yo.current=null,Uf(e,n),Xu(n,e),cf(lo),xl=!!ro,lo=ro=null,e.current=n,If(n),md(),de=f,ye=a,yt.transition=i}else e.current=n;if(li&&(li=!1,an=e,ii=l),i=e.pendingLanes,i===0&&(on=null),vd(n.stateNode),ot(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ri)throw ri=!1,e=Zo,Zo=null,e;return(ii&1)!==0&&e.tag!==0&&lr(),i=e.pendingLanes,(i&1)!==0?e===ea?Yr++:(Yr=0,ea=e):Yr=0,tn(),null}function lr(){if(an!==null){var e=Ga(ii),t=yt.transition,n=ye;try{if(yt.transition=null,ye=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,ii=0,(de&6)!==0)throw Error(s(331));var l=de;for(de|=4,W=e.current;W!==null;){var i=W,a=i.child;if((W.flags&16)!==0){var f=i.deletions;if(f!==null){for(var p=0;p<f.length;p++){var k=f[p];for(W=k;W!==null;){var R=W;switch(R.tag){case 0:case 11:case 15:Jr(8,R,i)}var O=R.child;if(O!==null)O.return=R,W=O;else for(;W!==null;){R=W;var C=R.sibling,$=R.return;if(Qu(R),R===k){W=null;break}if(C!==null){C.return=$,W=C;break}W=$}}}var V=i.alternate;if(V!==null){var H=V.child;if(H!==null){V.child=null;do{var Re=H.sibling;H.sibling=null,H=Re}while(H!==null)}}W=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,W=a;else e:for(;W!==null;){if(i=W,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Jr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,W=y;break e}W=i.return}}var h=e.current;for(W=h;W!==null;){a=W;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,W=w;else e:for(a=h;W!==null;){if(f=W,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ei(9,f)}}catch(Q){Ce(f,f.return,Q)}if(f===a){W=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,W=F;break e}W=f.return}}if(de=l,tn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{ye=n,yt.transition=t}}return!1}function sc(e,t,n){t=er(n,t),t=Nu(e,t,1),e=rn(e,t,1),t=tt(),e!==null&&(wr(e,1,t),ot(e,t))}function Ce(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=er(n,e),e=bu(t,e,1),t=rn(t,e,1),e=tt(),t!==null&&(wr(t,1,e),ot(t,e));break}}t=t.return}}function Hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ve&n)===n&&(De===4||De===3&&(Ve&130023424)===Ve&&500>Le()-qo?bn(e,0):Xo|=n),ot(e,t)}function uc(e,t){t===0&&((e.mode&1)===0?t=1:(t=hl,hl<<=1,(hl&130023424)===0&&(hl=4194304)));var n=tt();e=It(e,t),e!==null&&(wr(e,t,n),ot(e,n))}function Qf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uc(e,n)}function Jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),uc(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,Mf(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Ee&&(t.flags&1048576)!==0&&Ws(t,Dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ql(e,t),e=t.pendingProps;var l=Qn(t,Qe.current);qn(t,n),l=Po(null,t,r,e,l,n);var i=Lo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(i=!0,Ml(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,jo(t),l.updater=Yl,t.stateNode=l,l._reactInternals=t,Fo(t,r,e,n),t=Bo(null,t,r,!0,i,n)):(t.tag=0,Ee&&i&&fo(t),et(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ql(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gf(r),e=Et(r,e),l){case 0:t=Io(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Et(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),Io(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),Fu(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,qs(e,t),Wl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=er(Error(s(423)),t),t=Uu(e,t,r,n,l);break e}else if(r!==l){l=er(Error(s(424)),t),t=Uu(e,t,r,n,l);break e}else for(ct=qt(t.stateNode.containerInfo.firstChild),ut=t,Ee=!0,St=null,n=Ys(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===l){t=At(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return tu(t),e===null&&ho(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,io(r,l)?a=null:i!==null&&io(r,i)&&(t.flags|=32),Ou(e,t),et(e,t,a,n),t.child;case 6:return e===null&&ho(t),null;case 13:return Iu(e,t,n);case 4:return _o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),Ru(e,t,r,l,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,ke(Bl,r._currentValue),r._currentValue=a,i!==null)if(_t(i.value,a)){if(i.children===l.children&&!nt.current){t=At(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){a=i.child;for(var p=f.firstContext;p!==null;){if(p.context===r){if(i.tag===1){p=Bt(-1,n&-n),p.tag=2;var k=i.updateQueue;if(k!==null){k=k.shared;var R=k.pending;R===null?p.next=p:(p.next=R.next,R.next=p),k.pending=p}}i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),wo(i.return,n,t),f.lanes|=n;break}p=p.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),wo(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}et(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,qn(t,n),l=gt(l),r=r(l),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,l=Et(r,t.pendingProps),l=Et(r.type,l),Tu(e,t,r,l,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Et(r,l),ql(e,t),t.tag=1,rt(r)?(e=!0,Ml(t)):e=!1,qn(t,n),Su(t,r,l),Fo(t,r,l,n),Bo(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Mu(e,t,n)}throw Error(s(156,t.tag))};function dc(e,t){return Va(e,t)}function Kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Kf(e,t,n,r)}function oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===G)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")oa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case je:return Pn(n.children,l,i,t);case $e:a=8,l|=8;break;case He:return e=xt(12,n,t,l|2),e.elementType=He,e.lanes=i,e;case Z:return e=xt(13,n,t,l),e.elementType=Z,e.lanes=i,e;case K:return e=xt(19,n,t,l),e.elementType=K,e.lanes=i,e;case he:return ci(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ye:a=10;break e;case Xe:a=9;break e;case J:a=11;break e;case G:a=14;break e;case ce:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=xt(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Pn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=xt(22,e,r,t),e.elementType=he,e.lanes=n,e.stateNode={isHidden:!1},e}function aa(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function sa(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ua(e,t,n,r,l,i,a,f,p){return e=new Yf(e,t,n,f,p),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function Xf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fc(e){if(!e)return en;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(rt(n))return Bs(e,n,t)}return t}function pc(e,t,n,r,l,i,a,f,p){return e=ua(n,r,!0,e,l,i,a,f,p),e.context=fc(null),n=e.current,r=tt(),l=sn(n),i=Bt(r,l),i.callback=t??null,rn(n,i,l),e.current.lanes=l,wr(e,l,r),ot(e,r),e}function di(e,t,n,r){var l=t.current,i=tt(),a=sn(l);return n=fc(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(l,t,a),e!==null&&(Ct(e,l,a,i),$l(e,l,a)),a}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ca(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function qf(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function da(e){this._internalRoot=e}pi.prototype.render=da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));di(e,t,null,null)},pi.prototype.unmount=da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){di(null,e,null,null)}),t[Ot]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&ts(e)}};function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function Zf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var k=fi(a);i.call(k)}}var a=pc(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=a,e[Ot]=a.current,Mr(e.nodeType===8?e.parentNode:e),Nn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var k=fi(p);f.call(k)}}var p=ua(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=p,e[Ot]=p.current,Mr(e.nodeType===8?e.parentNode:e),Nn(function(){di(t,p,n,r)}),p}function hi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var f=l;l=function(){var p=fi(a);f.call(p)}}di(t,a,e,l)}else a=Zf(n,t,e,l,r);return fi(a)}Ya=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(Oi(t,n|1),ot(t,Le()),(de&6)===0&&(rr=Le()+500,tn()))}break;case 13:Nn(function(){var r=It(e,1);if(r!==null){var l=tt();Ct(r,e,1,l)}}),ca(e,1)}},Fi=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=tt();Ct(t,e,134217728,n)}ca(e,134217728)}},Xa=function(e){if(e.tag===13){var t=sn(e),n=It(e,t);if(n!==null){var r=tt();Ct(n,e,t,r)}ca(e,t)}},qa=function(){return ye},Za=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}},hr=function(e,t,n){switch(t){case"input":if(fr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Tl(r);if(!l)throw Error(s(90));ll(r),fr(r,l)}}}break;case"textarea":mr(e,n);break;case"select":t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}},Da=ra,Ua=Nn;var ep={usingClientEntryPoint:!1,Events:[Dr,Vn,Tl,Oa,Fa,ra]},Xr={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tp={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$a(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{pl=gi.inject(tp),Lt=gi}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(t))throw Error(s(200));return Xf(e,t,null,n)},at.createRoot=function(e,t){if(!fa(e))throw Error(s(299));var n=!1,r="",l=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ua(e,1,!1,null,null,n,!1,r,l),e[Ot]=t.current,Mr(e.nodeType===8?e.parentNode:e),new da(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=$a(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return Nn(e)},at.hydrate=function(e,t,n){if(!mi(t))throw Error(s(200));return hi(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!fa(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=hc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pc(t,null,e,1,n??null,l,!1,i,a),e[Ot]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pi(t)},at.render=function(e,t,n){if(!mi(t))throw Error(s(200));return hi(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!mi(e))throw Error(s(40));return e._reactRootContainer?(Nn(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},at.unstable_batchedUpdates=ra,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return hi(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var Sc;function Ic(){if(Sc)return ha.exports;Sc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),ha.exports=cp(),ha.exports}var Ec;function dp(){if(Ec)return vi;Ec=1;var o=Ic();return vi.createRoot=o.createRoot,vi.hydrateRoot=o.hydrateRoot,vi}var fp=dp();const pp=Uc(fp);Ic();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},nl.apply(this,arguments)}var fn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(fn||(fn={}));const Nc="popstate";function mp(o){o===void 0&&(o={});function u(d,m){let{pathname:v,search:x,hash:S}=d.location;return wa("",{pathname:v,search:x,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(d,m){return typeof m=="string"?m:wi(m)}return gp(u,s,null,o)}function Te(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function ba(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function hp(){return Math.random().toString(36).substr(2,8)}function bc(o,u){return{usr:o.state,key:o.key,idx:u}}function wa(o,u,s,d){return s===void 0&&(s=null),nl({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof u=="string"?sr(u):u,{state:s,key:u&&u.key||d||hp()})}function wi(o){let{pathname:u="/",search:s="",hash:d=""}=o;return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function sr(o){let u={};if(o){let s=o.indexOf("#");s>=0&&(u.hash=o.substr(s),o=o.substr(0,s));let d=o.indexOf("?");d>=0&&(u.search=o.substr(d),o=o.substr(0,d)),o&&(u.pathname=o)}return u}function gp(o,u,s,d){d===void 0&&(d={});let{window:m=document.defaultView,v5Compat:v=!1}=d,x=m.history,S=fn.Pop,_=null,T=N();T==null&&(T=0,x.replaceState(nl({},x.state,{idx:T}),""));function N(){return(x.state||{idx:null}).idx}function E(){S=fn.Pop;let D=N(),ne=D==null?null:D-T;T=D,_&&_({action:S,location:B.location,delta:ne})}function M(D,ne){S=fn.Push;let ae=wa(B.location,D,ne);T=N()+1;let oe=bc(ae,T),ue=B.createHref(ae);try{x.pushState(oe,"",ue)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;m.location.assign(ue)}v&&_&&_({action:S,location:B.location,delta:1})}function L(D,ne){S=fn.Replace;let ae=wa(B.location,D,ne);T=N();let oe=bc(ae,T),ue=B.createHref(ae);x.replaceState(oe,"",ue),v&&_&&_({action:S,location:B.location,delta:0})}function I(D){let ne=m.location.origin!=="null"?m.location.origin:m.location.href,ae=typeof D=="string"?D:wi(D);return ae=ae.replace(/ $/,"%20"),Te(ne,"No window.location.(origin|href) available to create URL for href: "+ae),new URL(ae,ne)}let B={get action(){return S},get location(){return o(m,x)},listen(D){if(_)throw new Error("A history only accepts one active listener");return m.addEventListener(Nc,E),_=D,()=>{m.removeEventListener(Nc,E),_=null}},createHref(D){return u(m,D)},createURL:I,encodeLocation(D){let ne=I(D);return{pathname:ne.pathname,search:ne.search,hash:ne.hash}},push:M,replace:L,go(D){return x.go(D)}};return B}var Cc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Cc||(Cc={}));function vp(o,u,s){return s===void 0&&(s="/"),yp(o,u,s)}function yp(o,u,s,d){let m=typeof u=="string"?sr(u):u,v=Ca(m.pathname||"/",s);if(v==null)return null;let x=Bc(o);xp(x);let S=null;for(let _=0;S==null&&_<x.length;++_){let T=Rp(v);S=Cp(x[_],T)}return S}function Bc(o,u,s,d){u===void 0&&(u=[]),s===void 0&&(s=[]),d===void 0&&(d="");let m=(v,x,S)=>{let _={relativePath:S===void 0?v.path||"":S,caseSensitive:v.caseSensitive===!0,childrenIndex:x,route:v};_.relativePath.startsWith("/")&&(Te(_.relativePath.startsWith(d),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(d.length));let T=pn([d,_.relativePath]),N=s.concat(_);v.children&&v.children.length>0&&(Te(v.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+T+'".')),Bc(v.children,u,N,T)),!(v.path==null&&!v.index)&&u.push({path:T,score:Np(T,v.index),routesMeta:N})};return o.forEach((v,x)=>{var S;if(v.path===""||!((S=v.path)!=null&&S.includes("?")))m(v,x);else for(let _ of Ac(v.path))m(v,x,_)}),u}function Ac(o){let u=o.split("/");if(u.length===0)return[];let[s,...d]=u,m=s.endsWith("?"),v=s.replace(/\?$/,"");if(d.length===0)return m?[v,""]:[v];let x=Ac(d.join("/")),S=[];return S.push(...x.map(_=>_===""?v:[v,_].join("/"))),m&&S.push(...x),S.map(_=>o.startsWith("/")&&_===""?"/":_)}function xp(o){o.sort((u,s)=>u.score!==s.score?s.score-u.score:bp(u.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const wp=/^:[\w-]+$/,kp=3,jp=2,_p=1,Sp=10,Ep=-2,Pc=o=>o==="*";function Np(o,u){let s=o.split("/"),d=s.length;return s.some(Pc)&&(d+=Ep),u&&(d+=jp),s.filter(m=>!Pc(m)).reduce((m,v)=>m+(wp.test(v)?kp:v===""?_p:Sp),d)}function bp(o,u){return o.length===u.length&&o.slice(0,-1).every((d,m)=>d===u[m])?o[o.length-1]-u[u.length-1]:0}function Cp(o,u,s){let{routesMeta:d}=o,m={},v="/",x=[];for(let S=0;S<d.length;++S){let _=d[S],T=S===d.length-1,N=v==="/"?u:u.slice(v.length)||"/",E=Pp({path:_.relativePath,caseSensitive:_.caseSensitive,end:T},N),M=_.route;if(!E)return null;Object.assign(m,E.params),x.push({params:m,pathname:pn([v,E.pathname]),pathnameBase:Fp(pn([v,E.pathnameBase])),route:M}),E.pathnameBase!=="/"&&(v=pn([v,E.pathnameBase]))}return x}function Pp(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,d]=Lp(o.path,o.caseSensitive,o.end),m=u.match(s);if(!m)return null;let v=m[0],x=v.replace(/(.)\/+$/,"$1"),S=m.slice(1);return{params:d.reduce((T,N,E)=>{let{paramName:M,isOptional:L}=N;if(M==="*"){let B=S[E]||"";x=v.slice(0,v.length-B.length).replace(/(.)\/+$/,"$1")}const I=S[E];return L&&!I?T[M]=void 0:T[M]=(I||"").replace(/%2F/g,"/"),T},{}),pathname:v,pathnameBase:x,pattern:o}}function Lp(o,u,s){u===void 0&&(u=!1),s===void 0&&(s=!0),ba(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,S,_)=>(d.push({paramName:S,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,u?void 0:"i"),d]}function Rp(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return ba(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+u+").")),o}}function Ca(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,d=o.charAt(s);return d&&d!=="/"?null:o.slice(s)||"/"}const Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zp=o=>Tp.test(o);function Mp(o,u){u===void 0&&(u="/");let{pathname:s,search:d="",hash:m=""}=typeof o=="string"?sr(o):o,v;if(s)if(zp(s))v=s;else{if(s.includes("//")){let x=s;s=s.replace(/\/\/+/g,"/"),ba(!1,"Pathnames cannot have embedded double slashes - normalizing "+(x+" -> "+s))}s.startsWith("/")?v=Lc(s.substring(1),"/"):v=Lc(s,u)}else v=u;return{pathname:v,search:Dp(d),hash:Up(m)}}function Lc(o,u){let s=u.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?s.length>1&&s.pop():m!=="."&&s.push(m)}),s.length>1?s.join("/"):"/"}function ya(o,u,s,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+u+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Op(o){return o.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Pa(o,u){let s=Op(o);return u?s.map((d,m)=>m===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function La(o,u,s,d){d===void 0&&(d=!1);let m;typeof o=="string"?m=sr(o):(m=nl({},o),Te(!m.pathname||!m.pathname.includes("?"),ya("?","pathname","search",m)),Te(!m.pathname||!m.pathname.includes("#"),ya("#","pathname","hash",m)),Te(!m.search||!m.search.includes("#"),ya("#","search","hash",m)));let v=o===""||m.pathname==="",x=v?"/":m.pathname,S;if(x==null)S=s;else{let E=u.length-1;if(!d&&x.startsWith("..")){let M=x.split("/");for(;M[0]==="..";)M.shift(),E-=1;m.pathname=M.join("/")}S=E>=0?u[E]:"/"}let _=Mp(m,S),T=x&&x!=="/"&&x.endsWith("/"),N=(v||x===".")&&s.endsWith("/");return!_.pathname.endsWith("/")&&(T||N)&&(_.pathname+="/"),_}const pn=o=>o.join("/").replace(/\/\/+/g,"/"),Fp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Dp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Up=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ip(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const $c=["post","put","patch","delete"];new Set($c);const Bp=["get",...$c];new Set(Bp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},rl.apply(this,arguments)}const Ra=j.createContext(null),Ap=j.createContext(null),mn=j.createContext(null),Ei=j.createContext(null),Wt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Wc=j.createContext(null);function $p(o,u){let{relative:s}=u===void 0?{}:u;ur()||Te(!1);let{basename:d,navigator:m}=j.useContext(mn),{hash:v,pathname:x,search:S}=Hc(o,{relative:s}),_=x;return d!=="/"&&(_=x==="/"?d:pn([d,x])),m.createHref({pathname:_,search:S,hash:v})}function ur(){return j.useContext(Ei)!=null}function Vt(){return ur()||Te(!1),j.useContext(Ei).location}function Vc(o){j.useContext(mn).static||j.useLayoutEffect(o)}function hn(){let{isDataRoute:o}=j.useContext(Wt);return o?nm():Wp()}function Wp(){ur()||Te(!1);let o=j.useContext(Ra),{basename:u,future:s,navigator:d}=j.useContext(mn),{matches:m}=j.useContext(Wt),{pathname:v}=Vt(),x=JSON.stringify(Pa(m,s.v7_relativeSplatPath)),S=j.useRef(!1);return Vc(()=>{S.current=!0}),j.useCallback(function(T,N){if(N===void 0&&(N={}),!S.current)return;if(typeof T=="number"){d.go(T);return}let E=La(T,JSON.parse(x),v,N.relative==="path");o==null&&u!=="/"&&(E.pathname=E.pathname==="/"?u:pn([u,E.pathname])),(N.replace?d.replace:d.push)(E,N.state,N)},[u,d,x,v,o])}function Vp(){let{matches:o}=j.useContext(Wt),u=o[o.length-1];return u?u.params:{}}function Hc(o,u){let{relative:s}=u===void 0?{}:u,{future:d}=j.useContext(mn),{matches:m}=j.useContext(Wt),{pathname:v}=Vt(),x=JSON.stringify(Pa(m,d.v7_relativeSplatPath));return j.useMemo(()=>La(o,JSON.parse(x),v,s==="path"),[o,x,v,s])}function Hp(o,u){return Qp(o,u)}function Qp(o,u,s,d){ur()||Te(!1);let{navigator:m}=j.useContext(mn),{matches:v}=j.useContext(Wt),x=v[v.length-1],S=x?x.params:{};x&&x.pathname;let _=x?x.pathnameBase:"/";x&&x.route;let T=Vt(),N;if(u){var E;let D=typeof u=="string"?sr(u):u;_==="/"||(E=D.pathname)!=null&&E.startsWith(_)||Te(!1),N=D}else N=T;let M=N.pathname||"/",L=M;if(_!=="/"){let D=_.replace(/^\//,"").split("/");L="/"+M.replace(/^\//,"").split("/").slice(D.length).join("/")}let I=vp(o,{pathname:L}),B=Xp(I&&I.map(D=>Object.assign({},D,{params:Object.assign({},S,D.params),pathname:pn([_,m.encodeLocation?m.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?_:pn([_,m.encodeLocation?m.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),v,s,d);return u&&B?j.createElement(Ei.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:fn.Pop}},B):B}function Jp(){let o=tm(),u=Ip(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},u),s?j.createElement("pre",{style:m},s):null,null)}const Kp=j.createElement(Jp,null);class Gp extends j.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){console.error("React Router caught the following error during render",u,s)}render(){return this.state.error!==void 0?j.createElement(Wt.Provider,{value:this.props.routeContext},j.createElement(Wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yp(o){let{routeContext:u,match:s,children:d}=o,m=j.useContext(Ra);return m&&m.static&&m.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=s.route.id),j.createElement(Wt.Provider,{value:u},d)}function Xp(o,u,s,d){var m;if(u===void 0&&(u=[]),s===void 0&&(s=null),d===void 0&&(d=null),o==null){var v;if(!s)return null;if(s.errors)o=s.matches;else if((v=d)!=null&&v.v7_partialHydration&&u.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let x=o,S=(m=s)==null?void 0:m.errors;if(S!=null){let N=x.findIndex(E=>E.route.id&&(S==null?void 0:S[E.route.id])!==void 0);N>=0||Te(!1),x=x.slice(0,Math.min(x.length,N+1))}let _=!1,T=-1;if(s&&d&&d.v7_partialHydration)for(let N=0;N<x.length;N++){let E=x[N];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(T=N),E.route.id){let{loaderData:M,errors:L}=s,I=E.route.loader&&M[E.route.id]===void 0&&(!L||L[E.route.id]===void 0);if(E.route.lazy||I){_=!0,T>=0?x=x.slice(0,T+1):x=[x[0]];break}}}return x.reduceRight((N,E,M)=>{let L,I=!1,B=null,D=null;s&&(L=S&&E.route.id?S[E.route.id]:void 0,B=E.route.errorElement||Kp,_&&(T<0&&M===0?(rm("route-fallback"),I=!0,D=null):T===M&&(I=!0,D=E.route.hydrateFallbackElement||null)));let ne=u.concat(x.slice(0,M+1)),ae=()=>{let oe;return L?oe=B:I?oe=D:E.route.Component?oe=j.createElement(E.route.Component,null):E.route.element?oe=E.route.element:oe=N,j.createElement(Yp,{match:E,routeContext:{outlet:N,matches:ne,isDataRoute:s!=null},children:oe})};return s&&(E.route.ErrorBoundary||E.route.errorElement||M===0)?j.createElement(Gp,{location:s.location,revalidation:s.revalidation,component:B,error:L,children:ae(),routeContext:{outlet:null,matches:ne,isDataRoute:!0}}):ae()},null)}var Qc=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(Qc||{}),Jc=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(Jc||{});function qp(o){let u=j.useContext(Ra);return u||Te(!1),u}function Zp(o){let u=j.useContext(Ap);return u||Te(!1),u}function em(o){let u=j.useContext(Wt);return u||Te(!1),u}function Kc(o){let u=em(),s=u.matches[u.matches.length-1];return s.route.id||Te(!1),s.route.id}function tm(){var o;let u=j.useContext(Wc),s=Zp(),d=Kc();return u!==void 0?u:(o=s.errors)==null?void 0:o[d]}function nm(){let{router:o}=qp(Qc.UseNavigateStable),u=Kc(Jc.UseNavigateStable),s=j.useRef(!1);return Vc(()=>{s.current=!0}),j.useCallback(function(m,v){v===void 0&&(v={}),s.current&&(typeof m=="number"?o.navigate(m):o.navigate(m,rl({fromRouteId:u},v)))},[o,u])}const Rc={};function rm(o,u,s){Rc[o]||(Rc[o]=!0)}function lm(o,u){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Gc(o){let{to:u,replace:s,state:d,relative:m}=o;ur()||Te(!1);let{future:v,static:x}=j.useContext(mn),{matches:S}=j.useContext(Wt),{pathname:_}=Vt(),T=hn(),N=La(u,Pa(S,v.v7_relativeSplatPath),_,m==="path"),E=JSON.stringify(N);return j.useEffect(()=>T(JSON.parse(E),{replace:s,state:d,relative:m}),[T,E,m,s,d]),null}function Zr(o){Te(!1)}function im(o){let{basename:u="/",children:s=null,location:d,navigationType:m=fn.Pop,navigator:v,static:x=!1,future:S}=o;ur()&&Te(!1);let _=u.replace(/^\/*/,"/"),T=j.useMemo(()=>({basename:_,navigator:v,static:x,future:rl({v7_relativeSplatPath:!1},S)}),[_,S,v,x]);typeof d=="string"&&(d=sr(d));let{pathname:N="/",search:E="",hash:M="",state:L=null,key:I="default"}=d,B=j.useMemo(()=>{let D=Ca(N,_);return D==null?null:{location:{pathname:D,search:E,hash:M,state:L,key:I},navigationType:m}},[_,N,E,M,L,I,m]);return B==null?null:j.createElement(mn.Provider,{value:T},j.createElement(Ei.Provider,{children:s,value:B}))}function om(o){let{children:u,location:s}=o;return Hp(ka(u),s)}new Promise(()=>{});function ka(o,u){u===void 0&&(u=[]);let s=[];return j.Children.forEach(o,(d,m)=>{if(!j.isValidElement(d))return;let v=[...u,m];if(d.type===j.Fragment){s.push.apply(s,ka(d.props.children,v));return}d.type!==Zr&&Te(!1),!d.props.index||!d.props.children||Te(!1);let x={id:d.props.id||v.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(x.children=ka(d.props.children,v)),s.push(x)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},ja.apply(this,arguments)}function am(o,u){if(o==null)return{};var s={},d=Object.keys(o),m,v;for(v=0;v<d.length;v++)m=d[v],!(u.indexOf(m)>=0)&&(s[m]=o[m]);return s}function sm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function um(o,u){return o.button===0&&(!u||u==="_self")&&!sm(o)}const cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dm="6";try{window.__reactRouterVersion=dm}catch{}const fm="startTransition",Tc=ap[fm];function pm(o){let{basename:u,children:s,future:d,window:m}=o,v=j.useRef();v.current==null&&(v.current=mp({window:m,v5Compat:!0}));let x=v.current,[S,_]=j.useState({action:x.action,location:x.location}),{v7_startTransition:T}=d||{},N=j.useCallback(E=>{T&&Tc?Tc(()=>_(E)):_(E)},[_,T]);return j.useLayoutEffect(()=>x.listen(N),[x,N]),j.useEffect(()=>lm(d),[d]),j.createElement(im,{basename:u,children:s,location:S.location,navigationType:S.action,navigator:x,future:d})}const mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gm=j.forwardRef(function(u,s){let{onClick:d,relative:m,reloadDocument:v,replace:x,state:S,target:_,to:T,preventScrollReset:N,viewTransition:E}=u,M=am(u,cm),{basename:L}=j.useContext(mn),I,B=!1;if(typeof T=="string"&&hm.test(T)&&(I=T,mm))try{let oe=new URL(window.location.href),ue=T.startsWith("//")?new URL(oe.protocol+T):new URL(T),xe=Ca(ue.pathname,L);ue.origin===oe.origin&&xe!=null?T=xe+ue.search+ue.hash:B=!0}catch{}let D=$p(T,{relative:m}),ne=vm(T,{replace:x,state:S,target:_,preventScrollReset:N,relative:m,viewTransition:E});function ae(oe){d&&d(oe),oe.defaultPrevented||ne(oe)}return j.createElement("a",ja({},M,{href:I||D,onClick:B||v?d:ae,ref:s,target:_}))});var zc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(zc||(zc={}));var Mc;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function vm(o,u){let{target:s,replace:d,state:m,preventScrollReset:v,relative:x,viewTransition:S}=u===void 0?{}:u,_=hn(),T=Vt(),N=Hc(o,{relative:x});return j.useCallback(E=>{if(um(E,s)){E.preventDefault();let M=d!==void 0?d:wi(T)===wi(N);_(o,{replace:M,state:m,preventScrollReset:v,relative:x,viewTransition:S})}},[T,_,N,d,m,s,o,v,x,S])}const Yc=Si.createContext(null),Ta=document.createElement("div");Ta.id="root";document.body.appendChild(Ta);const Xc=document.createElement("style");Xc.textContent=`
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
    --warning: #efb35f;
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
  .pill-link:hover,
  .pill-button:hover,
  .button:hover,
  .button-secondary:hover,
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
`;document.head.appendChild(Xc);function ft(...o){return o.filter(Boolean).join(" ")}function cr(o){return c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o})}function ym(o){return c.jsxs(cr,{...o,children:[c.jsx("path",{d:"M12 5v14"}),c.jsx("path",{d:"M5 12h14"})]})}function qc(o){return c.jsx(cr,{...o,children:c.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function Zc(o){return c.jsxs(cr,{...o,children:[c.jsx("path",{d:"m15 5 4 4"}),c.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function ed(o){return c.jsx(cr,{...o,children:c.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function xm(o){return c.jsxs(cr,{...o,children:[c.jsx("path",{d:"M19 12H5"}),c.jsx("path",{d:"m12 5-7 7 7 7"})]})}function wm(o){return c.jsxs(cr,{...o,children:[c.jsx("path",{d:"M12 4v10"}),c.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),c.jsx("path",{d:"M4 20h16"})]})}async function pt(o,u){const s=await fetch(o,{credentials:"include",headers:{"Content-Type":"application/json",...(u==null?void 0:u.headers)||{}},...u});if(s.status===204)return;const m=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const v=typeof m=="object"&&m!==null&&"detail"in m?String(m.detail):s.statusText;throw new Error(v||"Request failed.")}return m}function el(o){if(!o)return"Not available";const u=new Date(o);return Number.isNaN(u.getTime())?o:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(u)}function ir(o){if(!Number.isFinite(o)||o<=0)return"0 B";const u=["B","KB","MB","GB","TB"];let s=o,d=0;for(;s>=1024&&d<u.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${u[d]}`}function td(o){return!Number.isFinite(o)||!o||o<=0?"No limit":`${(o/1024**3).toFixed(o>=10*1024**3?0:1)} GB`}function km(o){return td(o)}function jm(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const u=o/1e3;return`${u%1===0?u.toFixed(0):u.toFixed(1)} CPU`}function _a(o){const u=o.trim();if(!u)return null;const s=Number(u);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function ki(o){const u=o.trim();if(!u)return null;const s=Number(u);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function Sa(o){return ki(o)}function Oc(o){if(!Number.isFinite(o)||!o||o<=0)return"";const u=o/1e3;return u%1===0?u.toFixed(0):u.toFixed(1)}function Ea(o){if(!Number.isFinite(o)||!o||o<=0)return"";const u=o/1024**3;return u>=10||u%1===0?u.toFixed(0):u.toFixed(1)}function Fc(o){return Ea(o)}function yi(o){return Number.isFinite(o)?`${Number(o).toFixed(1)}%`:"-"}function tl(o){if(!o)return"-";const u=new Date(o).getTime();if(Number.isNaN(u))return"-";const s=Date.now()-u;if(s<0)return"Just now";const d=6e4,m=60*d,v=24*m;return s<m?`${Math.max(1,Math.floor(s/d))}m ago`:s<v?`${Math.floor(s/m)}h ago`:`${Math.floor(s/v)}d ago`}function ar(o){return Number.isFinite(o)?Number(o)>80?"metric-danger":Number(o)>60?"metric-warning":"metric-ok":""}function xa(o){return Number.isFinite(o)?{"--metric-percent":Math.max(0,Math.min(100,Number(o)))}:void 0}function ji(o,u){return!Number.isFinite(o)||!Number.isFinite(u)||!u||u<=0?null:Number(o)/Number(u)*100}function _m(o,u){if(!o)return"Not started";const s=new Date(o).getTime(),d=u?new Date(u).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const m=Math.floor((d-s)/1e3),v=Math.floor(m/3600),x=Math.floor(m%3600/60),S=m%60;return v>0?`${v}h ${x}m ${S}s`:x>0?`${x}m ${S}s`:`${S}s`}function Sm(o,u=200){return`/api/v1/jobs/${o}/log?lines=${u}`}function Em(o){return`/api/v1/jobs/${o}/log?full=true`}function Nm(o){return o.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function bm(o){return`${[o.project_id||"controller",o.job_type,o.job_id].map(Nm).join("__")}.log`}function Cm(o){return`/api/v1/projects/${encodeURIComponent(o)}/lockfile`}function Pm(o,u){return`/api/v1/projects/${encodeURIComponent(o)}/export?mode=${encodeURIComponent(u)}`}function Lm(o,u){return`bulletjournal_export_${o}_${u==="code_only"?"code":u==="code_and_data"?"code_and_data":"full"}.zip`}function Rm(o){const u=o.headers.get("content-disposition")||"",s=u.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=u.match(/filename="([^"]+)"/i);if(d)return d[1];const m=u.match(/filename=([^;]+)/i);return m?m[1].trim():null}function nd(o){return o.status==="running"&&o.runtime.container_port!==null}function Tm(o){const u=Fm(o);return u?u.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function zm(o){return o?o.slice(0,12):"Not running"}function Mm(o){return o.status==="succeeded"?"state-succeeded":o.status==="running"||o.status==="queued"?"state-running":o.status==="failed"?"state-failed":""}function Om(o){return o.status.split(/[_\s]+/).filter(Boolean).map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ")}function Fm(o){return o.status==="error"&&o.status_reason||o.status==="stopped"&&o.status_reason?o.status_reason:o.status}function Dm(o){return o.has_active_job||o.status==="creating"||o.status==="installing"||o.status==="starting"||o.status==="stopping"||o.install_status==="installing"?"busy":o.status==="running"?"running":o.status==="error"||o.status_reason==="install_failed"||o.status_reason==="start_failed"||o.status_reason==="runtime_crashed"?"error":"stopped"}function rd(o){return`state-${Dm(o)}`}function ld(o){const u=typeof o.metrics.cpu_percent=="number"?o.metrics.cpu_percent:null,s=ji(o.metrics.memory_used_bytes??null,o.metrics.memory_limit_bytes??null),d=ji(o.metrics.disk_used_bytes??null,o.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:ir(o.metrics.disk_used_bytes??0),tone:ar(d)},{label:"RAM",value:typeof o.metrics.memory_used_bytes=="number"?ir(o.metrics.memory_used_bytes):"-",tone:ar(s)},{label:"CPU",value:yi(u),tone:ar(o.limits.cpu_limit_millis?u:null)}]}function Um({systemInfo:o}){var m,v,x,S;const u=ar(o==null?void 0:o.metrics.cpu_percent),s=ji(((m=o==null?void 0:o.metrics.memory)==null?void 0:m.used_bytes)??null,((v=o==null?void 0:o.metrics.memory)==null?void 0:v.total_bytes)??null),d=ji(((x=o==null?void 0:o.metrics.disk)==null?void 0:x.used_bytes)??null,((S=o==null?void 0:o.metrics.disk)==null?void 0:S.total_bytes)??null);return c.jsxs("div",{className:"footer-metrics",children:[c.jsxs("span",{className:ft("footer-metric",ar(d)),style:xa(d),title:o!=null&&o.metrics.disk?`${ir(o.metrics.disk.used_bytes)} / ${ir(o.metrics.disk.total_bytes)}`:"Not available",children:[c.jsx("span",{className:"muted",children:"Disk"}),c.jsx("strong",{children:yi(d)})]}),c.jsxs("span",{className:ft("footer-metric",ar(s)),style:xa(s),title:o!=null&&o.metrics.memory?`${ir(o.metrics.memory.used_bytes)} / ${ir(o.metrics.memory.total_bytes)}`:"Not available",children:[c.jsx("span",{className:"muted",children:"RAM"}),c.jsx("strong",{children:yi(s)})]}),c.jsxs("span",{className:ft("footer-metric",u),style:xa(o==null?void 0:o.metrics.cpu_percent),children:[c.jsx("span",{className:"muted",children:"CPU"}),c.jsx("strong",{children:yi(o==null?void 0:o.metrics.cpu_percent)})]})]})}function id(o){return o.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:o.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:o.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:o.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:o.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function od(o,u,s){return!u||u.jobId&&!s.includes(u.jobId)||u.action==="start"&&o.status!=="stopped"&&o.status!=="error"||u.action==="stop"&&o.status!=="running"?o:{...o,status:u.action==="start"?"starting":"stopping",status_reason:null}}function _i(o){return o==="queued"||o==="running"}function Ni(o){return o instanceof DOMException&&o.name==="AbortError"}function or(o){const u=j.useRef(o);return j.useEffect(()=>{u.current=o},[o]),u}function Im(o,u){return o.length<=u?o:o.slice(o.length-u)}function Bm({job:o,downloading:u,onDownload:s}){const[d,m]=j.useState(""),[v,x]=j.useState(0),S=or(o),_=j.useRef(null),T=160,N=_i(o.status)?[o.job_id]:[],E=j.useCallback(async L=>{try{const B=await(await fetch(Sm(S.current.job_id,T),{credentials:"include",signal:L})).text();m(B.trim())}catch(I){Ni(I)||m("")}},[S]);if(j.useEffect(()=>{const L=new AbortController;return E(L.signal),()=>L.abort()},[o.job_id,E]),za(N,j.useCallback((L,I)=>{if(L.job_id===o.job_id){if((I==null?void 0:I.type)==="job.log"){const B=typeof I.line=="string"?I.line:"";if(!B)return;m(D=>Im([...D?D.split(`
`):[],B],T).join(`
`));return}if(!_i(L.status)){const B=new AbortController;E(B.signal)}}},[o.job_id,E])),j.useEffect(()=>{const L=_.current;if(!L)return;const I=()=>{const D=L.scrollHeight>L.clientHeight+1?Math.max(0,L.offsetWidth-L.clientWidth):0;x(ne=>ne===D?ne:D)};if(I(),typeof ResizeObserver>"u")return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I);const B=new ResizeObserver(()=>{I()});return B.observe(L),()=>{B.disconnect()}},[d]),!d)return null;const M={"--job-log-scrollbar-width":`${v}px`};return c.jsxs("div",{className:"job-log-preview",style:M,children:[s?c.jsx("button",{className:"job-log-download",type:"button","aria-label":u?"Downloading log":"Download log",title:u?"Downloading log":"Download full log",disabled:!!u,onClick:()=>{s(o)},children:c.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M8 2.5v7"}),c.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),c.jsx("path",{d:"M3 13.5h10"})]})}):null,c.jsx("div",{className:"job-log-frame",children:c.jsx("pre",{ref:_,children:d})})]})}function bi(){const o=Si.useContext(Yc);if(!o)throw new Error("App context is unavailable.");return o}function ad(o,u,s,d){const m=j.useRef(o);j.useEffect(()=>{m.current=o},[o]),j.useEffect(()=>{if(u===null)return;let v=!1,x=null,S=null,_=!1,T=!1;const N=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??u:u,E=I=>{v||I===null||I===void 0||(x!==null&&window.clearTimeout(x),x=window.setTimeout(()=>{x=null,M()},I))},M=async()=>{if(!(v||_)){_=!0,S=new AbortController;try{await m.current(S.signal),v||E(N())}catch(I){if(!v&&!Ni(I)){const B=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??u:(d==null?void 0:d.errorDelay)??u;E(B)}}finally{_=!1,S=null,!v&&T&&!document.hidden&&(T=!1,E(0))}}},L=()=>{if(!document.hidden){if(_){T=!0;return}E(0)}};return document.addEventListener("visibilitychange",L),M(),()=>{v=!0,x!==null&&window.clearTimeout(x),document.removeEventListener("visibilitychange",L),S==null||S.abort()}},s)}function za(o,u){const s=j.useRef(u),d=j.useMemo(()=>Array.from(new Set(o)).sort().join("\0"),[o]);j.useEffect(()=>{s.current=u},[u]),j.useEffect(()=>{if(!d)return;const m=d.split("\0"),v=new Set(m),x=new AbortController;let S=!1;const _=new EventSource("/api/v1/events/jobs"),T=async()=>{const M=await Promise.allSettled(m.map(L=>pt(`/api/v1/jobs/${L}`,{signal:x.signal})));if(!S)for(const L of M)L.status==="fulfilled"&&s.current(L.value)},N=M=>{const L=M;try{const I=JSON.parse(L.data);if(!v.has(I.job_id))return;s.current({job_id:I.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:I.line})}catch{}},E=M=>{const L=M;try{const I=JSON.parse(L.data);v.has(I.job_id)&&s.current(I,{type:"job.updated"})}catch{}};return T(),_.addEventListener("job.log",N),_.addEventListener("job.updated",E),()=>{S=!0,x.abort(),_.removeEventListener("job.log",N),_.removeEventListener("job.updated",E),_.close()}},[d])}function Am({children:o}){const[u,s]=j.useState(null),[d,m]=j.useState(!0),[v,x]=j.useState(()=>{const N=window.localStorage.getItem("bulletjournal-controller-theme");return N==="light"||N==="dark"||N==="system"?N:"system"}),S=j.useCallback(async()=>{try{const N=await pt("/api/v1/session/current",{method:"GET"});s(N)}catch{s({authenticated:!1,user:null})}finally{m(!1)}},[]),_=j.useCallback(async()=>{await pt("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);j.useEffect(()=>{S()},[S]),j.useEffect(()=>{const N=document.documentElement,E=window.matchMedia("(prefers-color-scheme: dark)");function M(){const L=v==="system"?E.matches?"dark":"light":v;N.dataset.theme=L,N.style.colorScheme=L}return M(),window.localStorage.setItem("bulletjournal-controller-theme",v),E.addEventListener("change",M),()=>E.removeEventListener("change",M)},[v]);const T=j.useMemo(()=>({session:u,sessionLoading:d,refreshSession:S,signOut:_,themeMode:v,setThemeMode:x}),[S,u,d,_,v]);return c.jsx(Yc.Provider,{value:T,children:o})}function Dc({children:o}){const{session:u,sessionLoading:s}=bi(),d=Vt();return s?c.jsx("div",{className:"loading-screen",children:c.jsxs("div",{className:"loading-card",children:[c.jsx("h2",{children:"Preparing your controller workspace"}),c.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):u!=null&&u.authenticated?c.jsx(c.Fragment,{children:o}):c.jsx(Gc,{to:"/login",replace:!0,state:{from:d.pathname}})}function $m(){const{session:o,refreshSession:u}=bi(),s=hn(),d=Vt(),[m,v]=j.useState(""),[x,S]=j.useState(""),[_,T]=j.useState(null),[N,E]=j.useState(!1);j.useEffect(()=>{o!=null&&o.authenticated&&s("/",{replace:!0})},[s,o]);async function M(L){L.preventDefault(),E(!0),T(null);try{await pt("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:m,password:x})}),await u();const I=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(I||"/",{replace:!0})}catch(I){T(I instanceof Error?I.message:"Login failed.")}finally{E(!1)}}return c.jsx("div",{className:"login-shell",children:c.jsxs("section",{className:"login-panel",children:[c.jsx("h1",{children:"BulletJournal login"}),c.jsx("hr",{className:"login-divider"}),c.jsxs("form",{className:"layout-grid",onSubmit:M,children:[c.jsxs("div",{className:"field-full",children:[c.jsx("label",{htmlFor:"username",children:"Username"}),c.jsx("input",{id:"username",value:m,onChange:L=>v(L.target.value),autoComplete:"username",required:!0})]}),c.jsxs("div",{className:"field-full",children:[c.jsx("label",{htmlFor:"password",children:"Password"}),c.jsx("input",{id:"password",type:"password",value:x,onChange:L=>S(L.target.value),autoComplete:"current-password",required:!0})]}),_?c.jsx("div",{className:"error-banner",children:_}):null,c.jsx("div",{className:"button-row",children:c.jsx("button",{className:"button",type:"submit",disabled:N,children:N?"Signing in...":"Login"})})]})]})})}function Wm(){const{session:o,signOut:u,themeMode:s,setThemeMode:d}=bi();hn();const[m,v]=j.useState(!1);return j.useEffect(()=>{if(!m)return;function x(){v(!1)}return window.addEventListener("click",x),()=>window.removeEventListener("click",x)},[m]),c.jsxs("div",{className:"footer-theme",children:[c.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":m,onClick:x=>{x.stopPropagation(),v(S=>!S)},children:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[c.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),c.jsx("path",{d:"M7.5 10.5h.01"}),c.jsx("path",{d:"M9.5 7.5h.01"}),c.jsx("path",{d:"M14.5 7.5h.01"}),c.jsx("path",{d:"M16.5 10.5h.01"})]})}),m?c.jsx("div",{className:"theme-popover",role:"menu",onClick:x=>x.stopPropagation(),children:["light","dark","system"].map(x=>c.jsx("button",{className:ft("theme-option",s===x&&"active"),type:"button",role:"menuitemradio","aria-checked":s===x,onClick:()=>{d(x),v(!1)},children:x==="light"?"Light":x==="dark"?"Dark":"System"},x))}):null]})}function xi({children:o,footerMetrics:u=null}){var v,x,S;const{session:s,signOut:d}=bi(),m=hn();return c.jsxs("div",{className:"app-shell",children:[o,c.jsxs("footer",{className:"app-footer",children:[c.jsxs("div",{className:"footer-left",children:[c.jsxs("div",{className:"footer-session",children:[c.jsx("span",{className:"muted",children:"Signed in as"}),c.jsx("strong",{children:((v=s==null?void 0:s.user)==null?void 0:v.display_name)||((x=s==null?void 0:s.user)==null?void 0:x.username)||"Unknown user"}),c.jsxs("span",{className:"muted",children:["(",((S=s==null?void 0:s.user)==null?void 0:S.username)||"unknown",")"]})]}),c.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),m("/login",{replace:!0})},children:"Logout"})]}),c.jsxs("div",{className:"footer-right",children:[u,c.jsx(Wm,{})]})]})]})}function Vm(){const[o,u]=j.useState([]),[s,d]=j.useState(null),[m,v]=j.useState(!0),[x,S]=j.useState(null),[_,T]=j.useState(null),[N,E]=j.useState([]),[M,L]=j.useState({}),[I,B]=j.useState({}),[D,ne]=j.useState([]),[ae,oe]=j.useState(!1),ue=hn(),xe=Vt(),ze=or(I),je=j.useCallback(async J=>{try{const[Z,K]=await Promise.all([pt("/api/v1/projects",{signal:J}),pt("/api/v1/system/info",{signal:J})]);u(Z),d(K),ne(G=>G.filter(ce=>Z.some(he=>he.project_id===ce))),S(null)}catch(Z){Ni(Z)||S(Z instanceof Error?Z.message:"Failed to load dashboard.")}finally{v(!1)}},[]);ad(J=>je(J),N.length>0?5e3:15e3,[N.length,je],{hiddenDelay:6e4,errorDelay:15e3}),j.useEffect(()=>{if(!xe.state||typeof xe.state!="object")return;const J=xe.state,Z=typeof J.deletedProjectId=="string"?J.deletedProjectId:null,K=typeof J.deleteJobId=="string"?J.deleteJobId:null;!Z||!K||(ne(G=>Array.from(new Set([...G,Z]))),B(G=>({...G,[K]:Z})),E(G=>Array.from(new Set([...G,K]))),je(),ue(xe.pathname,{replace:!0,state:null}))},[je,xe.pathname,xe.state,ue]);const $e=j.useCallback(J=>{if(_i(J.status)){E(K=>K.includes(J.job_id)?K:[...K,J.job_id]);return}E(K=>K.filter(G=>G!==J.job_id));const Z=ze.current[J.job_id];Z&&(B(K=>{const G={...K};return delete G[J.job_id],G}),J.status!=="succeeded"&&(ne(K=>K.filter(G=>G!==Z)),T(J.error_message||`Failed to delete project ${Z}.`))),je()},[je]);za(N,$e),j.useEffect(()=>{L(J=>{const Z=Object.entries(J).filter(([,K])=>!K.jobId||N.includes(K.jobId));return Z.length===Object.keys(J).length?J:Object.fromEntries(Z)})},[N]);const He=j.useMemo(()=>o.filter(J=>!D.includes(J.project_id)).map(J=>od(J,M[J.project_id]||null,N)),[N,D,M,o]),Ye=j.useMemo(()=>{const J={Running:[],Stopped:[],Error:[]};for(const Z of He)Z.status==="running"||Z.status==="starting"||Z.status==="stopping"?J.Running.push(Z):Z.status==="error"?J.Error.push(Z):J.Stopped.push(Z);return J},[He]);async function Xe(J,Z){L(K=>({...K,[J]:{action:Z}}));try{T(null);const K=await pt(`/api/v1/projects/${J}/${Z}`,{method:"POST"});K.job?(L(G=>({...G,[J]:{action:Z,jobId:K.job.job_id}})),E(G=>Array.from(new Set([...G,K.job.job_id])))):L(G=>{const ce={...G};return delete ce[J],ce}),K.already_running&&(L(G=>{const ce={...G};return delete ce[J],ce}),T("Project is already running.")),K.already_stopped&&(L(G=>{const ce={...G};return delete ce[J],ce}),T("Project is already stopped.")),await je()}catch(K){L(G=>{const ce={...G};return delete ce[J],ce}),T(K instanceof Error?K.message:`Failed to ${Z} project.`)}}return c.jsxs(xi,{footerMetrics:c.jsx(Um,{systemInfo:s}),children:[x?c.jsx("div",{className:"error-banner",children:x}):null,_?c.jsx("div",{className:"error-banner",children:_}):null,c.jsx("div",{className:"dashboard-grid",children:c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"panel-head",children:c.jsxs("div",{className:"panel-head-row",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"BulletJournal projects"}),N.length>0?c.jsxs("span",{className:"muted",children:["Watching ",N.length," active job",N.length===1?"":"s"]}):null]}),c.jsxs("button",{className:"button",type:"button",onClick:()=>oe(!0),children:[c.jsx(ym,{width:22,height:22}),c.jsx("span",{children:"New project"})]})]})}),c.jsxs("div",{className:"panel-body",children:[m?c.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,c.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(J=>{const Z=Ye[J];return c.jsxs("section",{children:[c.jsxs("div",{className:"group-header",children:[c.jsxs("div",{className:"group-header-title",children:[c.jsx("h3",{children:J}),c.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),c.jsxs("span",{className:"muted",children:[Z.length," project",Z.length===1?"":"s"]})]}),Z.length===0?c.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):c.jsx("div",{className:"project-cards",children:Z.map(K=>{const G=id(K),ce=ld(K),he=G.label==="Start"||G.label==="Stop"||G.label==="Starting..."||G.label==="Stopping...";return c.jsxs("article",{className:ft("project-card",rd(K)),children:[c.jsx("div",{className:"project-card-header",children:c.jsxs("div",{className:"project-card-top",children:[c.jsx("h4",{children:K.project_id}),c.jsx("hr",{className:"project-card-divider"})]})}),c.jsxs("div",{className:"meta-grid",children:[c.jsx("div",{className:"metrics-row",children:ce.map(U=>c.jsxs("div",{className:ft("meta-item","metric-chip",U.tone),children:[c.jsx("span",{children:U.label}),c.jsx("strong",{children:U.value})]},U.label))}),c.jsxs("div",{className:"meta-item",children:[c.jsx("span",{children:"Last edit"}),K.last_edit_at?c.jsxs("div",{className:"timestamp-row",children:[c.jsx("strong",{children:tl(K.last_edit_at)}),c.jsx("span",{className:"muted",children:el(K.last_edit_at)})]}):c.jsx("strong",{children:"-"})]})]}),c.jsxs("div",{className:"quick-actions",children:[nd(K)?c.jsx("a",{className:"button-open icon-action",href:`/p/${K.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:c.jsx(Zc,{width:18,height:18})}):null,c.jsx("button",{className:ft(G.className,he&&"icon-action"),type:"button",disabled:G.disabled,"aria-label":G.label,title:G.label,onClick:()=>{G.action&&Xe(K.project_id,G.action)},children:he?c.jsxs(c.Fragment,{children:[G.action==="start"||G.label==="Starting..."?c.jsx(qc,{width:18,height:18}):null,G.action==="stop"||G.label==="Stopping..."?c.jsx(ed,{width:18,height:18}):null]}):G.label}),c.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>ue(`/projects/${K.project_id}`),children:c.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},K.project_id)})})]},J)})})]})]})}),ae&&s?c.jsx(Hm,{systemInfo:s,onClose:()=>oe(!1)}):null]})}function Hm({systemInfo:o,onClose:u}){const s=hn(),[d,m]=j.useState({project_id:"",custom_requirements_text:o.default_dependencies_text,cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!0}),[v,x]=j.useState(!1),[S,_]=j.useState(null),[T,N]=j.useState(!1);async function E(M){M.preventDefault(),x(!0),_(null);try{const L=await pt("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:d.project_id,custom_requirements_text:d.custom_requirements_text,cpu_limit_millis:_a(d.cpu_limit_input),memory_limit_bytes:ki(d.memory_limit_input),disk_soft_limit_bytes:Sa(d.disk_soft_limit_input),gpu_enabled:d.gpu_enabled})});s(`/projects/${L.project.project_id}`,{state:{createdProjectId:L.project.project_id,createJobId:L.job.job_id}})}catch(L){_(L instanceof Error?L.message:"Failed to create project.")}finally{x(!1)}}return c.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{v||u()},children:c.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:M=>M.stopPropagation(),children:[c.jsxs("div",{className:"modal-head",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Provision a managed BulletJournal runtime"}),c.jsx("p",{className:"section-copy",children:"Project ids become both filesystem roots and runtime identifiers. Creation installs dependencies and starts the container in the background after the project record is created."})]}),c.jsx("button",{className:"close-button",type:"button",onClick:u,"aria-label":"Close dialog",disabled:v,children:"×"})]}),c.jsx("div",{className:"modal-body",children:c.jsxs("form",{className:"layout-grid",onSubmit:E,children:[c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),c.jsx("input",{id:"create-project-id",value:d.project_id,onChange:M=>m(L=>({...L,project_id:M.target.value})),placeholder:"study-a",required:!0})]}),c.jsxs("div",{className:"field-full",children:[c.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),c.jsx("textarea",{id:"create-dependencies",value:d.custom_requirements_text,onChange:M=>m(L=>({...L,custom_requirements_text:M.target.value}))}),c.jsx("span",{className:"muted",children:"The dependency text starts from the controller defaults. Edit the BulletJournal line there if you want a different package source or pinned version."})]}),c.jsxs("div",{className:"field-full collapsible-panel",children:[c.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>N(M=>!M),children:[c.jsxs("span",{className:"status-stack",children:[c.jsx("strong",{children:"Runtime limits"}),c.jsxs("span",{className:"muted",children:["CPU ",jm(_a(d.cpu_limit_input))," · Memory ",td(ki(d.memory_limit_input))," · Disk ",km(Sa(d.disk_soft_limit_input))," · GPU ",d.gpu_enabled?"On":"Off"]})]}),c.jsx("span",{children:T?"Hide":"Edit"})]}),T?c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),c.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:d.cpu_limit_input,onChange:M=>m(L=>({...L,cpu_limit_input:M.target.value})),placeholder:"Unlimited"}),c.jsx("span",{className:"muted",children:"Leave blank for no CPU limit."})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),c.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:d.memory_limit_input,onChange:M=>m(L=>({...L,memory_limit_input:M.target.value})),placeholder:"Unlimited"}),c.jsx("span",{className:"muted",children:"Leave blank for no memory limit."})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),c.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:d.disk_soft_limit_input,onChange:M=>m(L=>({...L,disk_soft_limit_input:M.target.value})),placeholder:"Unlimited"}),c.jsx("span",{className:"muted",children:"Used for UI warnings only. It does not enforce a real container disk cap."})]}),c.jsxs("div",{className:"field-full",children:[c.jsx("label",{children:"GPU access"}),c.jsxs("div",{className:"checkbox-row",children:[c.jsx("input",{id:"create-gpu",type:"checkbox",checked:d.gpu_enabled,onChange:M=>m(L=>({...L,gpu_enabled:M.target.checked}))}),c.jsx("label",{htmlFor:"create-gpu",children:"Enable GPU if supported on the host"})]})]})]}):null]})]}),S?c.jsx("div",{className:"error-banner",children:S}):null,c.jsxs("div",{className:"button-row",children:[c.jsx("button",{className:"button",type:"submit",disabled:v,children:v?"Queueing...":"Create Project"}),c.jsx("button",{className:"button-secondary",type:"button",onClick:u,disabled:v,children:"Cancel"})]})]})})]})})}function Qm(){const{projectId:u=""}=Vp(),s=hn(),d=Vt(),m=j.useRef(null),[v,x]=j.useState(null),[S,_]=j.useState(!0),[T,N]=j.useState(null),[E,M]=j.useState([]),[L,I]=j.useState(null),[B,D]=j.useState({custom_requirements_text:"",mark_all_artifacts_stale:!0,restart_if_running:!0}),[ne,ae]=j.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[oe,ue]=j.useState(!1),[xe,ze]=j.useState(!1),[je,$e]=j.useState(!1),[He,Ye]=j.useState(!1),[Xe,J]=j.useState(null),[Z,K]=j.useState([]),[G,ce]=j.useState(!1),[he,U]=j.useState(!1),[Y,A]=j.useState(!1),[g,b]=j.useState(null),[ee,re]=j.useState(null),le=!!v&&B.custom_requirements_text!==v.custom_requirements_text,se=or(u),ge=or(le),fe=or(he),we=or(Y),Oe=j.useCallback(async P=>{try{const z=await pt(`/api/v1/projects/${se.current}`,{signal:P});x(z),!ge.current&&!fe.current&&D(ve=>({custom_requirements_text:z.custom_requirements_text,mark_all_artifacts_stale:ve.mark_all_artifacts_stale,restart_if_running:ve.restart_if_running})),we.current||ae({cpu_limit_input:Oc(z.limits.cpu_limit_millis),memory_limit_input:Ea(z.limits.memory_limit_bytes),disk_soft_limit_input:Fc(z.limits.disk_soft_limit_bytes),gpu_enabled:z.limits.gpu_enabled}),N(null)}catch(z){Ni(z)||N(z instanceof Error?z.message:"Failed to load project.")}finally{_(!1)}},[ge,fe,we,se]);ad(P=>Oe(P),le||he||Y?null:E.length>0?5e3:15e3,[E.length,le,he,Oe,Y],{hiddenDelay:6e4,errorDelay:15e3}),j.useEffect(()=>{ce(!1)},[u]),j.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const P=d.state,z=typeof P.createdProjectId=="string"?P.createdProjectId:null,ve=typeof P.createJobId=="string"?P.createJobId:null;z!==u||!ve||(M(Ue=>Array.from(new Set([...Ue,ve]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,u]),j.useEffect(()=>{!(L!=null&&L.jobId)||E.includes(L.jobId)||I(null)},[E,L]),j.useEffect(()=>{if((g==null?void 0:g.tone)!=="success")return;const P=window.setTimeout(()=>{b(z=>(z==null?void 0:z.tone)==="success"?null:z)},3500);return()=>window.clearTimeout(P)},[g]),j.useEffect(()=>{if((ee==null?void 0:ee.tone)!=="success")return;const P=window.setTimeout(()=>{re(z=>(z==null?void 0:z.tone)==="success"?null:z)},3500);return()=>window.clearTimeout(P)},[ee]),j.useEffect(()=>{if(!He)return;function P(z){var ve;(ve=m.current)!=null&&ve.contains(z.target)||Ye(!1)}return window.addEventListener("click",P),()=>window.removeEventListener("click",P)},[He]);const Ln=j.useCallback(P=>{if(_i(P.status)){M(z=>z.includes(P.job_id)?z:[...z,P.job_id]);return}M(z=>z.filter(ve=>ve!==P.job_id)),U(!1),Oe()},[Oe]);za(E,Ln);async function ll(P){I({action:P});try{const z=await pt(`/api/v1/projects/${u}/${P}`,{method:"POST"});z.job?(I({action:P,jobId:z.job.job_id}),M(ve=>Array.from(new Set([...ve,z.job.job_id])))):z.already_running?(I(null),N("Project is already running.")):z.already_stopped?(I(null),N("Project is already stopped.")):I(null),await Oe()}catch(z){I(null),N(z instanceof Error?z.message:`Failed to ${P}.`)}}async function Rn(P){P.preventDefault(),ue(!0),N(null);const z=le;try{const ve=await pt(`/api/v1/projects/${u}/${z?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(z?B:{restart_if_running:B.restart_if_running,mark_all_artifacts_stale:B.mark_all_artifacts_stale})});if(!ve.job)throw new Error("Environment action did not return a queued job.");const Ue=ve.job;M(qe=>Array.from(new Set([...qe,Ue.job_id]))),z&&U(!0),b({tone:"success",message:"Saved"})}catch(ve){b(null),N(ve instanceof Error?ve.message:"Failed to queue environment action.")}finally{ue(!1)}}async function dr(P){P.preventDefault(),ze(!0),N(null);try{const z=await pt(`/api/v1/projects/${u}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:_a(ne.cpu_limit_input),memory_limit_bytes:ki(ne.memory_limit_input),disk_soft_limit_bytes:Sa(ne.disk_soft_limit_input),gpu_enabled:ne.gpu_enabled})});x(z),ae({cpu_limit_input:Oc(z.limits.cpu_limit_millis),memory_limit_input:Ea(z.limits.memory_limit_bytes),disk_soft_limit_input:Fc(z.limits.disk_soft_limit_bytes),gpu_enabled:z.limits.gpu_enabled}),A(!1),re({tone:"success",message:"Saved"})}catch(z){N(z instanceof Error?z.message:"Failed to update limits.")}finally{ze(!1)}}async function il(){if(window.confirm(`Delete project ${u}? This removes controller metadata and the project root from disk.`)){$e(!0);try{const P=await pt(`/api/v1/projects/${u}`,{method:"DELETE"});P.job&&M(z=>Array.from(new Set([...z,P.job.job_id]))),s("/",{replace:!0,state:P.job?{deletedProjectId:u,deleteJobId:P.job.job_id}:null})}catch(P){N(P instanceof Error?P.message:"Failed to delete project.")}finally{$e(!1)}}}async function ol(P){K(z=>z.includes(P.job_id)?z:[...z,P.job_id]);try{const z=await fetch(Em(P.job_id),{credentials:"include"});if(!z.ok)throw new Error(`Failed to download log (${z.status}).`);const ve=await z.text(),Ue=new Blob([ve],{type:"text/plain;charset=utf-8"}),qe=window.URL.createObjectURL(Ue),Ze=document.createElement("a");Ze.href=qe,Ze.download=bm(P),document.body.appendChild(Ze),Ze.click(),Ze.remove(),window.URL.revokeObjectURL(qe)}catch(z){N(z instanceof Error?z.message:"Failed to download job log.")}finally{K(z=>z.filter(ve=>ve!==P.job_id))}}async function fr(){N(null);try{const P=await fetch(Cm(u),{credentials:"include"});if(!P.ok){const Ze=(P.headers.get("content-type")||"").includes("application/json")?await P.json():await P.text(),Pt=typeof Ze=="object"&&Ze!==null&&"detail"in Ze?String(Ze.detail):P.statusText;throw new Error(Pt||"Failed to download lockfile.")}const z=await P.blob(),ve=window.URL.createObjectURL(z),Ue=document.createElement("a");Ue.href=ve,Ue.download=`${u}__uv.lock`,document.body.appendChild(Ue),Ue.click(),Ue.remove(),window.URL.revokeObjectURL(ve)}catch(P){N(P instanceof Error?P.message:"Failed to download lockfile.")}}async function Tn(P){N(null),J(P);try{const z=await fetch(Pm(u,P),{credentials:"include"});if(!z.ok){const Pt=(z.headers.get("content-type")||"").includes("application/json")?await z.json():await z.text(),hr=typeof Pt=="object"&&Pt!==null&&"detail"in Pt?String(Pt.detail):z.statusText;throw new Error(hr||"Failed to export project.")}const ve=await z.blob(),Ue=window.URL.createObjectURL(ve),qe=document.createElement("a");qe.href=Ue,qe.download=Rm(z)||Lm(u,P),document.body.appendChild(qe),qe.click(),qe.remove(),window.URL.revokeObjectURL(Ue),Ye(!1)}catch(z){N(z instanceof Error?z.message:"Failed to export project.")}finally{J(null)}}if(S)return c.jsx(xi,{children:c.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!v)return c.jsx(xi,{children:c.jsx("div",{className:"error-banner",children:T||"Project was not found."})});const pe=od(v,L,E),Pe=id(pe),Ht=le?"Save and reinstall":"Reinstall environment",pr=le?"Saving and reinstalling...":"Queueing reinstall...",al=ld(pe),mr=Pe.label==="Start"||Pe.label==="Stop"||Pe.label==="Starting..."||Pe.label==="Stopping...",sl=pe.status==="running"||pe.status==="starting"?"Started at":"Stopped at",zn=pe.status==="running"||pe.status==="starting"?pe.runtime.runtime_started_at:pe.runtime.runtime_stopped_at,wt=pe.status==="running"||pe.status==="starting"||pe.status==="stopping",Mn=(g==null?void 0:g.tone)==="success"?"Saved":oe?pr:Ht,ul=(ee==null?void 0:ee.tone)==="success"?"Saved":xe?"Saving...":"Save limits",kt=pe.recent_jobs||[],gn=G?kt:kt.slice(0,5),Ci=kt.length>5&&!G;return c.jsxs(xi,{children:[c.jsx("div",{className:"topbar",children:c.jsxs("div",{className:"nav-pills",children:[c.jsx(gm,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:c.jsx(xm,{width:18,height:18})}),E.length>0?c.jsxs("span",{className:"badge",children:["Watching ",E.length," active job",E.length===1?"":"s"]}):null]})}),T?c.jsx("div",{className:"error-banner",children:T}):null,c.jsxs("div",{className:"project-detail-stack",children:[c.jsxs("section",{className:ft("project-detail-card",rd(pe)),children:[c.jsxs("div",{className:"project-detail-header",children:[c.jsx("div",{className:"project-detail-title",children:c.jsx("h2",{children:pe.project_id})}),c.jsx("div",{className:"project-detail-status",children:c.jsx("strong",{children:Tm(pe)})})]}),c.jsxs("div",{className:"quick-actions",children:[nd(pe)?c.jsx("a",{className:"button-open icon-action",href:`/p/${pe.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:c.jsx(Zc,{width:18,height:18})}):null,c.jsx("button",{className:ft(Pe.className,mr&&"icon-action"),type:"button",disabled:Pe.disabled,"aria-label":Pe.label,title:Pe.label,onClick:()=>{Pe.action&&ll(Pe.action)},children:mr?c.jsxs(c.Fragment,{children:[Pe.action==="start"||Pe.label==="Starting..."?c.jsx(qc,{width:18,height:18}):null,Pe.action==="stop"||Pe.label==="Stopping..."?c.jsx(ed,{width:18,height:18}):null]}):Pe.label})]}),c.jsx("div",{className:"metrics-row",children:al.map(P=>c.jsxs("div",{className:ft("meta-item","metric-chip",P.tone),children:[c.jsx("span",{children:P.label}),c.jsx("strong",{children:P.value})]},P.label))}),c.jsxs("div",{className:"summary-grid",children:[c.jsxs("div",{className:"summary-block compact",children:[c.jsx("h3",{children:"Last edit"}),pe.last_edit_at?c.jsxs("div",{className:"timestamp-row",children:[c.jsx("strong",{children:tl(pe.last_edit_at)}),c.jsx("span",{className:"muted",children:el(pe.last_edit_at)})]}):c.jsx("strong",{children:"-"})]}),c.jsxs("div",{className:"summary-block compact",children:[c.jsx("h3",{children:"Last run"}),pe.last_run_finished_at?c.jsxs("div",{className:"timestamp-row",children:[c.jsx("strong",{children:tl(pe.last_run_finished_at)}),c.jsx("span",{className:"muted",children:el(pe.last_run_finished_at)})]}):c.jsx("strong",{children:"-"})]})]})]}),c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"panel-head",children:c.jsx("h2",{children:"Project environment"})}),c.jsx("div",{className:"panel-body",children:c.jsxs("form",{className:"project-env-grid",onSubmit:Rn,children:[c.jsx("div",{className:"environment-overview-card",children:c.jsxs("div",{className:"summary-grid",children:[c.jsxs("div",{className:"summary-block compact",children:[c.jsx("span",{className:"detail-label",children:"Python version"}),c.jsx("div",{className:"detail-value mono-copy",children:pe.python_version})]}),c.jsx("div",{className:"summary-block compact",children:c.jsxs("div",{className:"lockfile-row compact",children:[c.jsxs("div",{className:"lockfile-meta",children:[c.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),c.jsx("code",{className:"mono-copy detail-value",children:pe.lock_sha256||"Not recorded yet"})]}),c.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{fr()},children:c.jsx(wm,{width:18,height:18})})]})})]})}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field-full",children:[c.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),c.jsx("textarea",{id:"env-custom",value:B.custom_requirements_text,onChange:P=>{D(z=>({...z,custom_requirements_text:P.target.value}))}})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Restart behavior"}),c.jsxs("div",{className:"checkbox-row",children:[c.jsx("input",{id:"env-restart",type:"checkbox",checked:B.restart_if_running,onChange:P=>{D(z=>({...z,restart_if_running:P.target.checked}))}}),c.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Artifact invalidation"}),c.jsxs("div",{className:"checkbox-row",children:[c.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:B.mark_all_artifacts_stale,onChange:P=>{D(z=>({...z,mark_all_artifacts_stale:P.target.checked}))}}),c.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),c.jsx("div",{className:"button-row",children:c.jsx("button",{className:ft((g==null?void 0:g.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:oe,children:Mn})})]})})]}),c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"panel-head",children:c.jsx("h2",{children:"Container info"})}),c.jsxs("div",{className:"panel-body layout-grid",children:[c.jsxs("div",{className:"detail-meta-grid",children:[c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container name"}),c.jsx("div",{className:"detail-value mono-copy",children:pe.runtime.container_name||"Not running"})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Container id"}),c.jsx("div",{className:"detail-value mono-copy",children:zm(pe.runtime.container_id)})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:"Host port"}),c.jsx("div",{className:"detail-value mono-copy",children:pe.runtime.container_port??"Not running"})]}),c.jsxs("div",{className:"detail-row",children:[c.jsx("span",{className:"detail-label",children:sl}),zn?c.jsxs("div",{className:"timestamp-pair",children:[c.jsx("strong",{children:tl(zn)}),c.jsx("span",{className:"muted",children:el(zn)})]}):c.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),c.jsxs("div",{className:"limits-card",children:[c.jsx("div",{className:"limits-card-header",children:c.jsx("div",{className:"status-stack",children:c.jsx("strong",{children:"Runtime limits"})})}),c.jsxs("form",{className:"field-grid",onSubmit:dr,children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),c.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:ne.cpu_limit_input,onChange:P=>{A(!0),ae(z=>({...z,cpu_limit_input:P.target.value}))},placeholder:"Unlimited",disabled:wt})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),c.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:ne.memory_limit_input,onChange:P=>{A(!0),ae(z=>({...z,memory_limit_input:P.target.value}))},placeholder:"Unlimited",disabled:wt})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),c.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:ne.disk_soft_limit_input,onChange:P=>{A(!0),ae(z=>({...z,disk_soft_limit_input:P.target.value}))},placeholder:"Unlimited",disabled:wt})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"GPU access"}),c.jsxs("div",{className:"checkbox-row",children:[c.jsx("input",{id:"limits-gpu",type:"checkbox",checked:ne.gpu_enabled,onChange:P=>{A(!0),ae(z=>({...z,gpu_enabled:P.target.checked}))},disabled:wt}),c.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU if supported on the host"})]})]}),c.jsxs("div",{className:"button-row",children:[c.jsx("button",{className:ft(wt?"button-neutral":(ee==null?void 0:ee.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:xe||wt,children:ul}),wt?c.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}),c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"panel-head",children:c.jsx("h2",{children:"Job history"})}),c.jsx("div",{className:"panel-body",children:c.jsxs("div",{className:"jobs-list",children:[kt.length===0?c.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,gn.map(P=>c.jsxs("article",{className:ft("job-row",Mm(P)),children:[c.jsxs("div",{className:"job-row-header",children:[c.jsxs("div",{className:"job-row-top",children:[c.jsx("strong",{children:P.job_type}),c.jsx("span",{className:"muted mono-copy",children:P.job_id})]}),c.jsx("strong",{children:Om(P)})]}),c.jsxs("div",{className:"job-row-meta",children:[c.jsxs("div",{className:"meta-item",children:[c.jsx("span",{children:"Created"}),c.jsxs("div",{className:"timestamp-row",children:[c.jsx("strong",{children:tl(P.created_at)}),c.jsx("span",{className:"muted",children:el(P.created_at)})]})]}),c.jsxs("div",{className:"meta-item",children:[c.jsx("span",{children:"Duration"}),c.jsx("strong",{children:_m(P.started_at||P.created_at,P.finished_at)})]})]}),P.job_type==="create_project"||P.job_type==="update_environment"||P.job_type==="reinstall_environment"?c.jsx(Bm,{job:P,downloading:Z.includes(P.job_id),onDownload:P.log_path?ol:void 0}):null,P.error_message?c.jsx("div",{className:"error-banner",children:P.error_message}):null]},P.job_id)),Ci?c.jsx("div",{className:"button-row centered jobs-list-footer",children:c.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>ce(!0),children:["Show more jobs (",kt.length," total)"]})}):null]})})]}),c.jsxs("section",{className:"panel",children:[c.jsx("div",{className:"panel-head",children:c.jsx("h2",{children:"Project actions"})}),c.jsx("div",{className:"panel-body",children:c.jsxs("div",{className:"button-row project-actions-row",children:[c.jsxs("div",{className:"action-menu",ref:m,children:[c.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":He,disabled:!!Xe,onClick:P=>{P.stopPropagation(),Ye(z=>!z)},children:Xe?"Exporting...":"Export project"}),He?c.jsxs("div",{className:"action-popover",role:"menu",onClick:P=>P.stopPropagation(),children:[c.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:Xe!==null,onClick:()=>{Tn("code_only")},children:c.jsx("strong",{children:"Code only"})}),c.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:Xe!==null,onClick:()=>{Tn("code_and_data")},children:c.jsx("strong",{children:"Code and data"})}),c.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:Xe!==null,onClick:()=>{Tn("full")},children:c.jsx("strong",{children:"Full"})})]}):null]}),c.jsx("button",{className:"button-danger",type:"button",onClick:il,disabled:je,children:je?"Deleting...":"Delete project"})]})})]})]})]})}function Jm(){return c.jsxs(om,{children:[c.jsx(Zr,{path:"/login",element:c.jsx($m,{})}),c.jsx(Zr,{path:"/projects/:projectId",element:c.jsx(Dc,{children:c.jsx(Qm,{})})}),c.jsx(Zr,{path:"/",element:c.jsx(Dc,{children:c.jsx(Vm,{})})}),c.jsx(Zr,{path:"*",element:c.jsx(Gc,{to:"/",replace:!0})})]})}function Km(){return c.jsx(pm,{children:c.jsx(Am,{children:c.jsx(Jm,{})})})}pp.createRoot(Ta).render(c.jsx(Si.StrictMode,{children:c.jsx(Km,{})}));
