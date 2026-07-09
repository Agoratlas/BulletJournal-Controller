function ip(o,c){for(var s=0;s<c.length;s++){const d=c[s];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in o)){const g=Object.getOwnPropertyDescriptor(d,p);g&&Object.defineProperty(o,p,g.get?g:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function s(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(p){if(p.ep)return;p.ep=!0;const g=s(p);fetch(p.href,g)}})();function Bc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var wa={exports:{}},ll={},ka={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function op(){if(xc)return ie;xc=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),b=Symbol.iterator;function U(v){return v===null||typeof v!="object"?null:(v=b&&v[b]||v["@@iterator"],typeof v=="function"?v:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,A={};function I(v,L,ne){this.props=v,this.context=L,this.refs=A,this.updater=ne||P}I.prototype.isReactComponent={},I.prototype.setState=function(v,L){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,L,"setState")},I.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function te(){}te.prototype=I.prototype;function ae(v,L,ne){this.props=v,this.context=L,this.refs=A,this.updater=ne||P}var oe=ae.prototype=new te;oe.constructor=ae,O(oe,I.prototype),oe.isPureReactComponent=!0;var de=Array.isArray,xe=Object.prototype.hasOwnProperty,Te={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function Ae(v,L,ne){var re,se={},ue=null,ve=null;if(L!=null)for(re in L.ref!==void 0&&(ve=L.ref),L.key!==void 0&&(ue=""+L.key),L)xe.call(L,re)&&!ke.hasOwnProperty(re)&&(se[re]=L[re]);var he=arguments.length-2;if(he===1)se.children=ne;else if(1<he){for(var we=Array(he),Me=0;Me<he;Me++)we[Me]=arguments[Me+2];se.children=we}if(v&&v.defaultProps)for(re in he=v.defaultProps,he)se[re]===void 0&&(se[re]=he[re]);return{$$typeof:o,type:v,key:ue,ref:ve,props:se,_owner:Te.current}}function Qe(v,L){return{$$typeof:o,type:v.type,key:L,ref:v.ref,props:v.props,_owner:v._owner}}function tt(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function dt(v){var L={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ne){return L[ne]})}var W=/\/+/g;function Z(v,L){return typeof v=="object"&&v!==null&&v.key!=null?dt(""+v.key):L.toString(36)}function K(v,L,ne,re,se){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var ve=!1;if(v===null)ve=!0;else switch(ue){case"string":case"number":ve=!0;break;case"object":switch(v.$$typeof){case o:case c:ve=!0}}if(ve)return ve=v,se=se(ve),v=re===""?"."+Z(ve,0):re,de(se)?(ne="",v!=null&&(ne=v.replace(W,"$&/")+"/"),K(se,L,ne,"",function(Me){return Me})):se!=null&&(tt(se)&&(se=Qe(se,ne+(!se.key||ve&&ve.key===se.key?"":(""+se.key).replace(W,"$&/")+"/")+v)),L.push(se)),1;if(ve=0,re=re===""?".":re+":",de(v))for(var he=0;he<v.length;he++){ue=v[he];var we=re+Z(ue,he);ve+=K(ue,L,ne,we,se)}else if(we=U(v),typeof we=="function")for(v=we.call(v),he=0;!(ue=v.next()).done;)ue=ue.value,we=re+Z(ue,he++),ve+=K(ue,L,ne,we,se);else if(ue==="object")throw L=String(v),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ve}function Y(v,L,ne){if(v==null)return v;var re=[],se=0;return K(v,re,"","",function(ue){return L.call(ne,ue,se++)}),re}function le(v){if(v._status===-1){var L=v._result;L=L(),L.then(function(ne){(v._status===0||v._status===-1)&&(v._status=1,v._result=ne)},function(ne){(v._status===0||v._status===-1)&&(v._status=2,v._result=ne)}),v._status===-1&&(v._status=0,v._result=L)}if(v._status===1)return v._result.default;throw v._result}var fe={current:null},D={transition:null},G={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:D,ReactCurrentOwner:Te};function B(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Y,forEach:function(v,L,ne){Y(v,function(){L.apply(this,arguments)},ne)},count:function(v){var L=0;return Y(v,function(){L++}),L},toArray:function(v){return Y(v,function(L){return L})||[]},only:function(v){if(!tt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ie.Component=I,ie.Fragment=s,ie.Profiler=p,ie.PureComponent=ae,ie.StrictMode=d,ie.Suspense=_,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ie.act=B,ie.cloneElement=function(v,L,ne){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var re=O({},v.props),se=v.key,ue=v.ref,ve=v._owner;if(L!=null){if(L.ref!==void 0&&(ue=L.ref,ve=Te.current),L.key!==void 0&&(se=""+L.key),v.type&&v.type.defaultProps)var he=v.type.defaultProps;for(we in L)xe.call(L,we)&&!ke.hasOwnProperty(we)&&(re[we]=L[we]===void 0&&he!==void 0?he[we]:L[we])}var we=arguments.length-2;if(we===1)re.children=ne;else if(1<we){he=Array(we);for(var Me=0;Me<we;Me++)he[Me]=arguments[Me+2];re.children=he}return{$$typeof:o,type:v.type,key:se,ref:ue,props:re,_owner:ve}},ie.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},ie.createElement=Ae,ie.createFactory=function(v){var L=Ae.bind(null,v);return L.type=v,L},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:S,render:v}},ie.isValidElement=tt,ie.lazy=function(v){return{$$typeof:N,_payload:{_status:-1,_result:v},_init:le}},ie.memo=function(v,L){return{$$typeof:C,type:v,compare:L===void 0?null:L}},ie.startTransition=function(v){var L=D.transition;D.transition={};try{v()}finally{D.transition=L}},ie.unstable_act=B,ie.useCallback=function(v,L){return fe.current.useCallback(v,L)},ie.useContext=function(v){return fe.current.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v){return fe.current.useDeferredValue(v)},ie.useEffect=function(v,L){return fe.current.useEffect(v,L)},ie.useId=function(){return fe.current.useId()},ie.useImperativeHandle=function(v,L,ne){return fe.current.useImperativeHandle(v,L,ne)},ie.useInsertionEffect=function(v,L){return fe.current.useInsertionEffect(v,L)},ie.useLayoutEffect=function(v,L){return fe.current.useLayoutEffect(v,L)},ie.useMemo=function(v,L){return fe.current.useMemo(v,L)},ie.useReducer=function(v,L,ne){return fe.current.useReducer(v,L,ne)},ie.useRef=function(v){return fe.current.useRef(v)},ie.useState=function(v){return fe.current.useState(v)},ie.useSyncExternalStore=function(v,L,ne){return fe.current.useSyncExternalStore(v,L,ne)},ie.useTransition=function(){return fe.current.useTransition()},ie.version="18.3.1",ie}var wc;function Ma(){return wc||(wc=1,ka.exports=op()),ka.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function ap(){if(kc)return ll;kc=1;var o=Ma(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function y(S,_,C){var N,b={},U=null,P=null;C!==void 0&&(U=""+C),_.key!==void 0&&(U=""+_.key),_.ref!==void 0&&(P=_.ref);for(N in _)d.call(_,N)&&!g.hasOwnProperty(N)&&(b[N]=_[N]);if(S&&S.defaultProps)for(N in _=S.defaultProps,_)b[N]===void 0&&(b[N]=_[N]);return{$$typeof:c,type:S,key:U,ref:P,props:b,_owner:p.current}}return ll.Fragment=s,ll.jsx=y,ll.jsxs=y,ll}var jc;function sp(){return jc||(jc=1,wa.exports=ap()),wa.exports}var u=sp(),k=Ma();const zi=Bc(k),up=ip({__proto__:null,default:zi},[k]);var Ni={},ja={exports:{}},st={},_a={exports:{}},Sa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function cp(){return _c||(_c=1,(function(o){function c(D,G){var B=D.length;D.push(G);e:for(;0<B;){var v=B-1>>>1,L=D[v];if(0<p(L,G))D[v]=G,D[B]=L,B=v;else break e}}function s(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var G=D[0],B=D.pop();if(B!==G){D[0]=B;e:for(var v=0,L=D.length,ne=L>>>1;v<ne;){var re=2*(v+1)-1,se=D[re],ue=re+1,ve=D[ue];if(0>p(se,B))ue<L&&0>p(ve,se)?(D[v]=ve,D[ue]=B,v=ue):(D[v]=se,D[re]=B,v=re);else if(ue<L&&0>p(ve,B))D[v]=ve,D[ue]=B,v=ue;else break e}}return G}function p(D,G){var B=D.sortIndex-G.sortIndex;return B!==0?B:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var y=Date,S=y.now();o.unstable_now=function(){return y.now()-S}}var _=[],C=[],N=1,b=null,U=3,P=!1,O=!1,A=!1,I=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(D){for(var G=s(C);G!==null;){if(G.callback===null)d(C);else if(G.startTime<=D)d(C),G.sortIndex=G.expirationTime,c(_,G);else break;G=s(C)}}function de(D){if(A=!1,oe(D),!O)if(s(_)!==null)O=!0,le(xe);else{var G=s(C);G!==null&&fe(de,G.startTime-D)}}function xe(D,G){O=!1,A&&(A=!1,te(Ae),Ae=-1),P=!0;var B=U;try{for(oe(G),b=s(_);b!==null&&(!(b.expirationTime>G)||D&&!dt());){var v=b.callback;if(typeof v=="function"){b.callback=null,U=b.priorityLevel;var L=v(b.expirationTime<=G);G=o.unstable_now(),typeof L=="function"?b.callback=L:b===s(_)&&d(_),oe(G)}else d(_);b=s(_)}if(b!==null)var ne=!0;else{var re=s(C);re!==null&&fe(de,re.startTime-G),ne=!1}return ne}finally{b=null,U=B,P=!1}}var Te=!1,ke=null,Ae=-1,Qe=5,tt=-1;function dt(){return!(o.unstable_now()-tt<Qe)}function W(){if(ke!==null){var D=o.unstable_now();tt=D;var G=!0;try{G=ke(!0,D)}finally{G?Z():(Te=!1,ke=null)}}else Te=!1}var Z;if(typeof ae=="function")Z=function(){ae(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Y=K.port2;K.port1.onmessage=W,Z=function(){Y.postMessage(null)}}else Z=function(){I(W,0)};function le(D){ke=D,Te||(Te=!0,Z())}function fe(D,G){Ae=I(function(){D(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){O||P||(O=!0,le(xe))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_getFirstCallbackNode=function(){return s(_)},o.unstable_next=function(D){switch(U){case 1:case 2:case 3:var G=3;break;default:G=U}var B=U;U=G;try{return D()}finally{U=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=U;U=D;try{return G()}finally{U=B}},o.unstable_scheduleCallback=function(D,G,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,D){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=B+L,D={id:N++,callback:G,priorityLevel:D,startTime:B,expirationTime:L,sortIndex:-1},B>v?(D.sortIndex=B,c(C,D),s(_)===null&&D===s(C)&&(A?(te(Ae),Ae=-1):A=!0,fe(de,B-v))):(D.sortIndex=L,c(_,D),O||P||(O=!0,le(xe))),D},o.unstable_shouldYield=dt,o.unstable_wrapCallback=function(D){var G=U;return function(){var B=U;U=G;try{return D.apply(this,arguments)}finally{U=B}}}})(Sa)),Sa}var Sc;function dp(){return Sc||(Sc=1,_a.exports=cp()),_a.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function fp(){if(bc)return st;bc=1;var o=Ma(),c=dp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function g(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},b={};function U(e){return _.call(b,e)?!0:_.call(N,e)?!1:C.test(e)?b[e]=!0:(N[e]=!0,!1)}function P(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O(e,t,n,r){if(t===null||typeof t>"u"||P(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,ae);I[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,ae);I[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,ae);I[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,n,r){var l=I.hasOwnProperty(t)?I[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O(t,n,l,r)&&(n=null),r||l===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),Te=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),dt=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function L(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var ne=!1;function re(e,t){if(!e||ne)return"";ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var r=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){r=j}e.call(t.prototype)}else{try{throw Error()}catch(j){r=j}e()}}catch(j){if(j&&r&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,f=i.length-1;1<=a&&0<=f&&l[a]!==i[f];)f--;for(;1<=a&&0<=f;a--,f--)if(l[a]!==i[f]){if(a!==1||f!==1)do if(a--,f--,0>f||l[a]!==i[f]){var m=`
`+l[a].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=a&&0<=f);break}}}finally{ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function se(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case Te:return"Portal";case Qe:return"Profiler";case Ae:return"StrictMode";case Z:return"Suspense";case K:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dt:return(e.displayName||"Context")+".Consumer";case tt:return(e._context.displayName||"Context")+".Provider";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===Ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Me(e){var t=we(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xe(e){e._valueTracker||(e._valueTracker=Me(e))}function In(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=we(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bn(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function It(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=he(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yr(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function An(e,t){yr(e,t);var n=he(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tt(e,t,n){(t!=="number"||qe(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xt=Array.isArray;function gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+he(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function wr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Xt(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:he(n)}}function dl(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $n,ml=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(e){$e.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});function hl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function gl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=hl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Di=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vn(e,t){if(t){if(Di[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function jr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _n=null;function St(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,qt=null,vt=null;function vl(e){if(e=Vr(e)){if(typeof _r!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Al(t),_r(e.stateNode,e.type,t))}}function yl(e){qt?vt?vt.push(e):vt=[e]:qt=e}function E(){if(qt){var e=qt,t=vt;if(vt=qt=null,vl(e),t)for(e=0;e<t.length;e++)vl(t[e])}}function T(e,t){return e(t)}function ce(){}var De=!1;function nt(e,t,n){if(De)return e(t,n);De=!0;try{return T(e,t,n)}finally{De=!1,(qt!==null||vt!==null)&&(ce(),E())}}function Ve(e,t){var n=e.stateNode;if(n===null)return null;var r=Al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var zt=!1;if(S)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){zt=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{zt=!1}function cd(e,t,n,r,l,i,a,f,m){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(z){this.onError(z)}}var Sr=!1,xl=null,wl=!1,Ui=null,dd={onError:function(e){Sr=!0,xl=e}};function fd(e,t,n,r,l,i,a,f,m){Sr=!1,xl=null,cd.apply(dd,arguments)}function pd(e,t,n,r,l,i,a,f,m){if(fd.apply(this,arguments),Sr){if(Sr){var j=xl;Sr=!1,xl=null}else throw Error(s(198));wl||(wl=!0,Ui=j)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Va(e){if(bn(e)!==e)throw Error(s(188))}function md(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Va(l),e;if(i===r)return Va(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,f=l.child;f;){if(f===n){a=!0,n=l,r=i;break}if(f===r){a=!0,r=l,n=i;break}f=f.sibling}if(!a){for(f=i.child;f;){if(f===n){a=!0,n=i,r=l;break}if(f===r){a=!0,r=i,n=l;break}f=f.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Wa(e){return e=md(e),e!==null?Ha(e):null}function Ha(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ha(e);if(t!==null)return t;e=e.sibling}return null}var Qa=c.unstable_scheduleCallback,Ja=c.unstable_cancelCallback,hd=c.unstable_shouldYield,gd=c.unstable_requestPaint,Pe=c.unstable_now,vd=c.unstable_getCurrentPriorityLevel,Ii=c.unstable_ImmediatePriority,Ka=c.unstable_UserBlockingPriority,kl=c.unstable_NormalPriority,yd=c.unstable_LowPriority,Ga=c.unstable_IdlePriority,jl=null,Mt=null;function xd(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(jl,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:jd,wd=Math.log,kd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(wd(e)/kd|0)|0}var _l=64,Sl=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var f=a&~l;f!==0?r=br(f):(i&=a,i!==0&&(r=br(i)))}else a=n&~l,a!==0?r=br(a):i!==0&&(r=br(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),l=1<<n,r|=e[n],t&=~l;return r}function _d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-bt(i),f=1<<a,m=l[a];m===-1?((f&n)===0||(f&r)!==0)&&(l[a]=_d(f,t)):m<=t&&(e.expiredLanes|=f),i&=~f}}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ya(){var e=_l;return _l<<=1,(_l&4194240)===0&&(_l=64),e}function Ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-bt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function $i(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ye=0;function Xa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qa,Vi,Za,es,ts,Wi=!1,Nl=[],Zt=null,en=null,tn=null,Er=new Map,Cr=new Map,nn=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ns(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Pr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Vr(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ed(e,t,n,r,l){switch(t){case"focusin":return Zt=Pr(Zt,e,t,n,r,l),!0;case"dragenter":return en=Pr(en,e,t,n,r,l),!0;case"mouseover":return tn=Pr(tn,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Er.set(i,Pr(Er.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Cr.set(i,Pr(Cr.get(i)||null,e,t,n,r,l)),!0}return!1}function rs(e){var t=Nn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=$a(n),t!==null){e.blockedOn=t,ts(e.priority,function(){Za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function El(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_n=r,n.target.dispatchEvent(r),_n=null}else return t=Vr(n),t!==null&&Vi(t),e.blockedOn=n,!1;t.shift()}return!0}function ls(e,t,n){El(e)&&n.delete(t)}function Cd(){Wi=!1,Zt!==null&&El(Zt)&&(Zt=null),en!==null&&El(en)&&(en=null),tn!==null&&El(tn)&&(tn=null),Er.forEach(ls),Cr.forEach(ls)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Cd)))}function Rr(e){function t(l){return Lr(l,e)}if(0<Nl.length){Lr(Nl[0],e);for(var n=1;n<Nl.length;n++){var r=Nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Lr(Zt,e),en!==null&&Lr(en,e),tn!==null&&Lr(tn,e),Er.forEach(t),Cr.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)rs(n),n.blockedOn===null&&nn.shift()}var Wn=de.ReactCurrentBatchConfig,Cl=!0;function Pd(e,t,n,r){var l=ye,i=Wn.transition;Wn.transition=null;try{ye=1,Hi(e,t,n,r)}finally{ye=l,Wn.transition=i}}function Ld(e,t,n,r){var l=ye,i=Wn.transition;Wn.transition=null;try{ye=4,Hi(e,t,n,r)}finally{ye=l,Wn.transition=i}}function Hi(e,t,n,r){if(Cl){var l=Qi(e,t,n,r);if(l===null)uo(e,t,r,Pl,n),ns(e,r);else if(Ed(l,e,t,n,r))r.stopPropagation();else if(ns(e,r),t&4&&-1<Nd.indexOf(e)){for(;l!==null;){var i=Vr(l);if(i!==null&&qa(i),i=Qi(e,t,n,r),i===null&&uo(e,t,r,Pl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else uo(e,t,r,null,n)}}var Pl=null;function Qi(e,t,n,r){if(Pl=null,e=St(r),e=Nn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pl=e,null}function is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vd()){case Ii:return 1;case Ka:return 4;case kl:case yd:return 16;case Ga:return 536870912;default:return 16}default:return 16}}var rn=null,Ji=null,Ll=null;function os(){if(Ll)return Ll;var e,t=Ji,n=t.length,r,l="value"in rn?rn.value:rn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Ll=l.slice(e,1<r?1-r:void 0)}function Rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function as(){return!1}function ft(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tl:as,this.isPropagationStopped=as,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=ft(Hn),Tr=B({},Hn,{view:0,detail:0}),Rd=ft(Tr),Gi,Yi,zr,zl=B({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Gi=e.screenX-zr.screenX,Yi=e.screenY-zr.screenY):Yi=Gi=0,zr=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),ss=ft(zl),Td=B({},zl,{dataTransfer:0}),zd=ft(Td),Md=B({},Tr,{relatedTarget:0}),Xi=ft(Md),Od=B({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=ft(Od),Dd=B({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=ft(Dd),Id=B({},Hn,{data:0}),us=ft(Id),Bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$d[e])?!!t[e]:!1}function qi(){return Vd}var Wd=B({},Tr,{key:function(e){if(e.key){var t=Bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ad[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=ft(Wd),Qd=B({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=ft(Qd),Jd=B({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),Kd=ft(Jd),Gd=B({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=ft(Gd),Xd=B({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qd=ft(Xd),Zd=[9,13,27,32],Zi=S&&"CompositionEvent"in window,Mr=null;S&&"documentMode"in document&&(Mr=document.documentMode);var ef=S&&"TextEvent"in window&&!Mr,ds=S&&(!Zi||Mr&&8<Mr&&11>=Mr),fs=" ",ps=!1;function ms(e,t){switch(e){case"keyup":return Zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function tf(e,t){switch(e){case"compositionend":return hs(t);case"keypress":return t.which!==32?null:(ps=!0,fs);case"textInput":return e=t.data,e===fs&&ps?null:e;default:return null}}function nf(e,t){if(Qn)return e==="compositionend"||!Zi&&ms(e,t)?(e=os(),Ll=Ji=rn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ds&&t.locale!=="ko"?null:t.data;default:return null}}var rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rf[e.type]:t==="textarea"}function vs(e,t,n,r){yl(r),t=Ul(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Fr=null;function lf(e){Os(e,0)}function Ml(e){var t=Xn(e);if(In(t))return e}function of(e,t){if(e==="change")return t}var ys=!1;if(S){var eo;if(S){var to="oninput"in document;if(!to){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),to=typeof xs.oninput=="function"}eo=to}else eo=!1;ys=eo&&(!document.documentMode||9<document.documentMode)}function ws(){Or&&(Or.detachEvent("onpropertychange",ks),Fr=Or=null)}function ks(e){if(e.propertyName==="value"&&Ml(Fr)){var t=[];vs(t,Fr,e,St(e)),nt(lf,t)}}function af(e,t,n){e==="focusin"?(ws(),Or=t,Fr=n,Or.attachEvent("onpropertychange",ks)):e==="focusout"&&ws()}function sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(Fr)}function uf(e,t){if(e==="click")return Ml(t)}function cf(e,t){if(e==="input"||e==="change")return Ml(t)}function df(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:df;function Dr(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!_.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=js(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function Ss(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ss(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bs(){for(var e=window,t=qe();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qe(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ff(e){var t=bs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ss(n.ownerDocument.documentElement,n)){if(r!==null&&no(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_s(n,i);var a=_s(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pf=S&&"documentMode"in document&&11>=document.documentMode,Jn=null,ro=null,Ur=null,lo=!1;function Ns(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||Jn==null||Jn!==qe(r)||(r=Jn,"selectionStart"in r&&no(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Dr(Ur,r)||(Ur=r,r=Ul(ro,"onSelect"),0<r.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Ol(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},io={},Es={};S&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Fl(e){if(io[e])return io[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Es)return io[e]=t[n];return e}var Cs=Fl("animationend"),Ps=Fl("animationiteration"),Ls=Fl("animationstart"),Rs=Fl("transitionend"),Ts=new Map,zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Ts.set(e,t),g(t,[e])}for(var oo=0;oo<zs.length;oo++){var ao=zs[oo],mf=ao.toLowerCase(),hf=ao[0].toUpperCase()+ao.slice(1);ln(mf,"on"+hf)}ln(Cs,"onAnimationEnd"),ln(Ps,"onAnimationIteration"),ln(Ls,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(Rs,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pd(r,t,void 0,e),e.currentTarget=null}function Os(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var f=r[a],m=f.instance,j=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break e;Ms(l,f,j),i=m}else for(a=0;a<r.length;a++){if(f=r[a],m=f.instance,j=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break e;Ms(l,f,j),i=m}}}if(wl)throw e=Ui,wl=!1,Ui=null,e}function _e(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Fs(t,e,2,!1),n.add(r))}function so(e,t,n){var r=0;t&&(r|=4),Fs(n,e,r,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Dl]){e[Dl]=!0,d.forEach(function(n){n!=="selectionchange"&&(gf.has(n)||so(n,!1,e),so(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,so("selectionchange",!1,t))}}function Fs(e,t,n,r){switch(is(t)){case 1:var l=Pd;break;case 4:l=Ld;break;default:l=Hi}n=l.bind(null,t,n,e),l=void 0,!zt||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function uo(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var m=a.tag;if((m===3||m===4)&&(m=a.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;a=a.return}for(;f!==null;){if(a=Nn(f),a===null)return;if(m=a.tag,m===5||m===6){r=i=a;continue e}f=f.parentNode}}r=r.return}nt(function(){var j=i,z=St(n),M=[];e:{var R=Ts.get(e);if(R!==void 0){var $=Ki,H=e;switch(e){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":$=Hd;break;case"focusin":H="focus",$=Xi;break;case"focusout":H="blur",$=Xi;break;case"beforeblur":case"afterblur":$=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Kd;break;case Cs:case Ps:case Ls:$=Fd;break;case Rs:$=Yd;break;case"scroll":$=Rd;break;case"wheel":$=qd;break;case"copy":case"cut":case"paste":$=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=cs}var Q=(t&4)!==0,Le=!Q&&e==="scroll",x=Q?R!==null?R+"Capture":null:R;Q=[];for(var h=j,w;h!==null;){w=h;var F=w.stateNode;if(w.tag===5&&F!==null&&(w=F,x!==null&&(F=Ve(h,x),F!=null&&Q.push(Ar(h,F,w)))),Le)break;h=h.return}0<Q.length&&(R=new $(R,H,null,n,z),M.push({event:R,listeners:Q}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",R&&n!==_n&&(H=n.relatedTarget||n.fromElement)&&(Nn(H)||H[At]))break e;if(($||R)&&(R=z.window===z?z:(R=z.ownerDocument)?R.defaultView||R.parentWindow:window,$?(H=n.relatedTarget||n.toElement,$=j,H=H?Nn(H):null,H!==null&&(Le=bn(H),H!==Le||H.tag!==5&&H.tag!==6)&&(H=null)):($=null,H=j),$!==H)){if(Q=ss,F="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Q=cs,F="onPointerLeave",x="onPointerEnter",h="pointer"),Le=$==null?R:Xn($),w=H==null?R:Xn(H),R=new Q(F,h+"leave",$,n,z),R.target=Le,R.relatedTarget=w,F=null,Nn(z)===j&&(Q=new Q(x,h+"enter",H,n,z),Q.target=w,Q.relatedTarget=Le,F=Q),Le=F,$&&H)t:{for(Q=$,x=H,h=0,w=Q;w;w=Gn(w))h++;for(w=0,F=x;F;F=Gn(F))w++;for(;0<h-w;)Q=Gn(Q),h--;for(;0<w-h;)x=Gn(x),w--;for(;h--;){if(Q===x||x!==null&&Q===x.alternate)break t;Q=Gn(Q),x=Gn(x)}Q=null}else Q=null;$!==null&&Ds(M,R,$,Q,!1),H!==null&&Le!==null&&Ds(M,Le,H,Q,!0)}}e:{if(R=j?Xn(j):window,$=R.nodeName&&R.nodeName.toLowerCase(),$==="select"||$==="input"&&R.type==="file")var J=of;else if(gs(R))if(ys)J=cf;else{J=sf;var X=af}else($=R.nodeName)&&$.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(J=uf);if(J&&(J=J(e,j))){vs(M,J,n,z);break e}X&&X(e,R,j),e==="focusout"&&(X=R._wrapperState)&&X.controlled&&R.type==="number"&&Tt(R,"number",R.value)}switch(X=j?Xn(j):window,e){case"focusin":(gs(X)||X.contentEditable==="true")&&(Jn=X,ro=j,Ur=null);break;case"focusout":Ur=ro=Jn=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Ns(M,n,z);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":Ns(M,n,z)}var q;if(Zi)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Qn?ms(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(ds&&n.locale!=="ko"&&(Qn||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Qn&&(q=os()):(rn=z,Ji="value"in rn?rn.value:rn.textContent,Qn=!0)),X=Ul(j,ee),0<X.length&&(ee=new us(ee,e,null,n,z),M.push({event:ee,listeners:X}),q?ee.data=q:(q=hs(n),q!==null&&(ee.data=q)))),(q=ef?tf(e,n):nf(e,n))&&(j=Ul(j,"onBeforeInput"),0<j.length&&(z=new us("onBeforeInput","beforeinput",null,n,z),M.push({event:z,listeners:j}),z.data=q))}Os(M,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ve(e,n),i!=null&&r.unshift(Ar(e,i,l)),i=Ve(e,t),i!=null&&r.push(Ar(e,i,l))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ds(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var f=n,m=f.alternate,j=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&j!==null&&(f=j,l?(m=Ve(n,i),m!=null&&a.unshift(Ar(n,m,f))):l||(m=Ve(n,i),m!=null&&a.push(Ar(n,m,f)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function Us(e){return(typeof e=="string"?e:""+e).replace(vf,`
`).replace(yf,"")}function Il(e,t,n){if(t=Us(t),Us(e)!==t&&n)throw Error(s(425))}function Bl(){}var co=null,fo=null;function po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,xf=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(kf)}:mo;function kf(e){setTimeout(function(){throw e})}function ho(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Rr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Yn,$r="__reactProps$"+Yn,At="__reactContainer$"+Yn,go="__reactEvents$"+Yn,jf="__reactListeners$"+Yn,_f="__reactHandles$"+Yn;function Nn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bs(e);e!==null;){if(n=e[Ot])return n;e=Bs(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Ot]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Al(e){return e[$r]||null}var vo=[],qn=-1;function an(e){return{current:e}}function Se(e){0>qn||(e.current=vo[qn],vo[qn]=null,qn--)}function je(e,t){qn++,vo[qn]=e.current,e.current=t}var sn={},Je=an(sn),rt=an(!1),En=sn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function lt(e){return e=e.childContextTypes,e!=null}function $l(){Se(rt),Se(Je)}function As(e,t,n){if(Je.current!==sn)throw Error(s(168));je(Je,t),je(rt,n)}function $s(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ve(e)||"Unknown",l));return B({},n,r)}function Vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,En=Je.current,je(Je,e),je(rt,rt.current),!0}function Vs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=$s(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,Se(rt),Se(Je),je(Je,e)):Se(rt),je(rt,n)}var $t=null,Wl=!1,yo=!1;function Ws(e){$t===null?$t=[e]:$t.push(e)}function Sf(e){Wl=!0,Ws(e)}function un(){if(!yo&&$t!==null){yo=!0;var e=0,t=ye;try{var n=$t;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Wl=!1}catch(l){throw $t!==null&&($t=$t.slice(e+1)),Qa(Ii,un),l}finally{ye=t,yo=!1}}return null}var er=[],tr=0,Hl=null,Ql=0,yt=[],xt=0,Cn=null,Vt=1,Wt="";function Pn(e,t){er[tr++]=Ql,er[tr++]=Hl,Hl=e,Ql=t}function Hs(e,t,n){yt[xt++]=Vt,yt[xt++]=Wt,yt[xt++]=Cn,Cn=e;var r=Vt;e=Wt;var l=32-bt(r)-1;r&=~(1<<l),n+=1;var i=32-bt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Vt=1<<32-bt(t)+l|n<<l|r,Wt=i+e}else Vt=1<<i|n<<l|r,Wt=e}function xo(e){e.return!==null&&(Pn(e,1),Hs(e,1,0))}function wo(e){for(;e===Hl;)Hl=er[--tr],er[tr]=null,Ql=er[--tr],er[tr]=null;for(;e===Cn;)Cn=yt[--xt],yt[xt]=null,Wt=yt[--xt],yt[xt]=null,Vt=yt[--xt],yt[xt]=null}var pt=null,mt=null,be=!1,Et=null;function Qs(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,mt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Vt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,mt=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(be){var t=mt;if(t){var n=t;if(!Js(e,t)){if(ko(e))throw Error(s(418));t=on(n.nextSibling);var r=pt;t&&Js(e,t)?Qs(r,n):(e.flags=e.flags&-4097|2,be=!1,pt=e)}}else{if(ko(e))throw Error(s(418));e.flags=e.flags&-4097|2,be=!1,pt=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function Jl(e){if(e!==pt)return!1;if(!be)return Ks(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!po(e.type,e.memoizedProps)),t&&(t=mt)){if(ko(e))throw Gs(),Error(s(418));for(;t;)Qs(e,t),t=on(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=pt?on(e.stateNode.nextSibling):null;return!0}function Gs(){for(var e=mt;e;)e=on(e.nextSibling)}function nr(){mt=pt=null,be=!1}function _o(e){Et===null?Et=[e]:Et.push(e)}var bf=de.ReactCurrentBatchConfig;function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var f=l.refs;a===null?delete f[i]:f[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Kl(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function Xs(e){function t(x,h){if(e){var w=x.deletions;w===null?(x.deletions=[h],x.flags|=16):w.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function l(x,h){return x=vn(x,h),x.index=0,x.sibling=null,x}function i(x,h,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<h?(x.flags|=2,h):w):(x.flags|=2,h)):(x.flags|=1048576,h)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function f(x,h,w,F){return h===null||h.tag!==6?(h=ma(w,x.mode,F),h.return=x,h):(h=l(h,w),h.return=x,h)}function m(x,h,w,F){var J=w.type;return J===ke?z(x,h,w.props.children,F,w.key):h!==null&&(h.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Ys(J)===h.type)?(F=l(h,w.props),F.ref=Wr(x,h,w),F.return=x,F):(F=yi(w.type,w.key,w.props,null,x.mode,F),F.ref=Wr(x,h,w),F.return=x,F)}function j(x,h,w,F){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=ha(w,x.mode,F),h.return=x,h):(h=l(h,w.children||[]),h.return=x,h)}function z(x,h,w,F,J){return h===null||h.tag!==7?(h=Dn(w,x.mode,F,J),h.return=x,h):(h=l(h,w),h.return=x,h)}function M(x,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ma(""+h,x.mode,w),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xe:return w=yi(h.type,h.key,h.props,null,x.mode,w),w.ref=Wr(x,null,h),w.return=x,w;case Te:return h=ha(h,x.mode,w),h.return=x,h;case le:var F=h._init;return M(x,F(h._payload),w)}if(Xt(h)||G(h))return h=Dn(h,x.mode,w,null),h.return=x,h;Kl(x,h)}return null}function R(x,h,w,F){var J=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return J!==null?null:f(x,h,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xe:return w.key===J?m(x,h,w,F):null;case Te:return w.key===J?j(x,h,w,F):null;case le:return J=w._init,R(x,h,J(w._payload),F)}if(Xt(w)||G(w))return J!==null?null:z(x,h,w,F,null);Kl(x,w)}return null}function $(x,h,w,F,J){if(typeof F=="string"&&F!==""||typeof F=="number")return x=x.get(w)||null,f(h,x,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case xe:return x=x.get(F.key===null?w:F.key)||null,m(h,x,F,J);case Te:return x=x.get(F.key===null?w:F.key)||null,j(h,x,F,J);case le:var X=F._init;return $(x,h,w,X(F._payload),J)}if(Xt(F)||G(F))return x=x.get(w)||null,z(h,x,F,J,null);Kl(h,F)}return null}function H(x,h,w,F){for(var J=null,X=null,q=h,ee=h=0,Be=null;q!==null&&ee<w.length;ee++){q.index>ee?(Be=q,q=null):Be=q.sibling;var ge=R(x,q,w[ee],F);if(ge===null){q===null&&(q=Be);break}e&&q&&ge.alternate===null&&t(x,q),h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge,q=Be}if(ee===w.length)return n(x,q),be&&Pn(x,ee),J;if(q===null){for(;ee<w.length;ee++)q=M(x,w[ee],F),q!==null&&(h=i(q,h,ee),X===null?J=q:X.sibling=q,X=q);return be&&Pn(x,ee),J}for(q=r(x,q);ee<w.length;ee++)Be=$(q,x,ee,w[ee],F),Be!==null&&(e&&Be.alternate!==null&&q.delete(Be.key===null?ee:Be.key),h=i(Be,h,ee),X===null?J=Be:X.sibling=Be,X=Be);return e&&q.forEach(function(yn){return t(x,yn)}),be&&Pn(x,ee),J}function Q(x,h,w,F){var J=G(w);if(typeof J!="function")throw Error(s(150));if(w=J.call(w),w==null)throw Error(s(151));for(var X=J=null,q=h,ee=h=0,Be=null,ge=w.next();q!==null&&!ge.done;ee++,ge=w.next()){q.index>ee?(Be=q,q=null):Be=q.sibling;var yn=R(x,q,ge.value,F);if(yn===null){q===null&&(q=Be);break}e&&q&&yn.alternate===null&&t(x,q),h=i(yn,h,ee),X===null?J=yn:X.sibling=yn,X=yn,q=Be}if(ge.done)return n(x,q),be&&Pn(x,ee),J;if(q===null){for(;!ge.done;ee++,ge=w.next())ge=M(x,ge.value,F),ge!==null&&(h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge);return be&&Pn(x,ee),J}for(q=r(x,q);!ge.done;ee++,ge=w.next())ge=$(q,x,ee,ge.value,F),ge!==null&&(e&&ge.alternate!==null&&q.delete(ge.key===null?ee:ge.key),h=i(ge,h,ee),X===null?J=ge:X.sibling=ge,X=ge);return e&&q.forEach(function(lp){return t(x,lp)}),be&&Pn(x,ee),J}function Le(x,h,w,F){if(typeof w=="object"&&w!==null&&w.type===ke&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case xe:e:{for(var J=w.key,X=h;X!==null;){if(X.key===J){if(J=w.type,J===ke){if(X.tag===7){n(x,X.sibling),h=l(X,w.props.children),h.return=x,x=h;break e}}else if(X.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===le&&Ys(J)===X.type){n(x,X.sibling),h=l(X,w.props),h.ref=Wr(x,X,w),h.return=x,x=h;break e}n(x,X);break}else t(x,X);X=X.sibling}w.type===ke?(h=Dn(w.props.children,x.mode,F,w.key),h.return=x,x=h):(F=yi(w.type,w.key,w.props,null,x.mode,F),F.ref=Wr(x,h,w),F.return=x,x=F)}return a(x);case Te:e:{for(X=w.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(x,h.sibling),h=l(h,w.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=ha(w,x.mode,F),h.return=x,x=h}return a(x);case le:return X=w._init,Le(x,h,X(w._payload),F)}if(Xt(w))return H(x,h,w,F);if(G(w))return Q(x,h,w,F);Kl(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(x,h.sibling),h=l(h,w),h.return=x,x=h):(n(x,h),h=ma(w,x.mode,F),h.return=x,x=h),a(x)):n(x,h)}return Le}var rr=Xs(!0),qs=Xs(!1),Gl=an(null),Yl=null,lr=null,So=null;function bo(){So=lr=Yl=null}function No(e){var t=Gl.current;Se(Gl),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Yl=e,So=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Yl===null)throw Error(s(308));lr=e,Yl.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ln=null;function Co(e){Ln===null?Ln=[e]:Ln.push(e)}function Zs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ht(e,n)}return l=r.interleaved,l===null?(t.next=t,Co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ht(e,n)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}function tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ql(e,t,n,r){var l=e.updateQueue;cn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,j=m.next;m.next=null,a===null?i=j:a.next=j,a=m;var z=e.alternate;z!==null&&(z=z.updateQueue,f=z.lastBaseUpdate,f!==a&&(f===null?z.firstBaseUpdate=j:f.next=j,z.lastBaseUpdate=m))}if(i!==null){var M=l.baseState;a=0,z=j=m=null,f=i;do{var R=f.lane,$=f.eventTime;if((r&R)===R){z!==null&&(z=z.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var H=e,Q=f;switch(R=t,$=n,Q.tag){case 1:if(H=Q.payload,typeof H=="function"){M=H.call($,M,R);break e}M=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,R=typeof H=="function"?H.call($,M,R):H,R==null)break e;M=B({},M,R);break e;case 2:cn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,R=l.effects,R===null?l.effects=[f]:R.push(f))}else $={eventTime:$,lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},z===null?(j=z=$,m=M):z=z.next=$,a|=R;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;R=f,f=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);if(z===null&&(m=M),l.baseState=m,l.firstBaseUpdate=j,l.lastBaseUpdate=z,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zn|=a,e.lanes=a,e.memoizedState=M}}function nu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var Hr={},Ft=an(Hr),Qr=an(Hr),Jr=an(Hr);function Rn(e){if(e===Hr)throw Error(s(174));return e}function Lo(e,t){switch(je(Jr,t),je(Qr,e),je(Ft,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kr(t,e)}Se(Ft),je(Ft,t)}function or(){Se(Ft),Se(Qr),Se(Jr)}function ru(e){Rn(Jr.current);var t=Rn(Ft.current),n=kr(t,e.type);t!==n&&(je(Qr,e),je(Ft,n))}function Ro(e){Qr.current===e&&(Se(Ft),Se(Qr))}var Ne=an(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function zo(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var ei=de.ReactCurrentDispatcher,Mo=de.ReactCurrentBatchConfig,Tn=0,Ee=null,Oe=null,Ue=null,ti=!1,Kr=!1,Gr=0,Nf=0;function Ke(){throw Error(s(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,l,i){if(Tn=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ei.current=e===null||e.memoizedState===null?Lf:Rf,e=n(r,l),Kr){i=0;do{if(Kr=!1,Gr=0,25<=i)throw Error(s(301));i+=1,Ue=Oe=null,t.updateQueue=null,ei.current=Tf,e=n(r,l)}while(Kr)}if(ei.current=li,t=Oe!==null&&Oe.next!==null,Tn=0,Ue=Oe=Ee=null,ti=!1,t)throw Error(s(300));return e}function Do(){var e=Gr!==0;return Gr=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function kt(){if(Oe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ue===null?Ee.memoizedState:Ue.next;if(t!==null)Ue=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?Ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Yr(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Oe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var f=a=null,m=null,j=i;do{var z=j.lane;if((Tn&z)===z)m!==null&&(m=m.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),r=j.hasEagerState?j.eagerState:e(r,j.action);else{var M={lane:z,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};m===null?(f=m=M,a=r):m=m.next=M,Ee.lanes|=z,zn|=z}j=j.next}while(j!==null&&j!==i);m===null?a=r:m.next=f,Nt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Ee.lanes|=i,zn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Io(e){var t=kt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Nt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function lu(){}function iu(e,t){var n=Ee,r=kt(),l=t(),i=!Nt(r.memoizedState,l);if(i&&(r.memoizedState=l,it=!0),r=r.queue,Bo(su.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Xr(9,au.bind(null,n,r,l,t),void 0,null),Ie===null)throw Error(s(349));(Tn&30)!==0||ou(n,t,l)}return l}function ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function au(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&cu(e)}function su(e,t,n){return n(function(){uu(t)&&cu(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function cu(e){var t=Ht(e,1);t!==null&&Rt(t,e,1,-1)}function du(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pf.bind(null,Ee,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fu(){return kt().memoizedState}function ni(e,t,n,r){var l=Dt();Ee.flags|=e,l.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function ri(e,t,n,r){var l=kt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var a=Oe.memoizedState;if(i=a.destroy,r!==null&&Oo(r,a.deps)){l.memoizedState=Xr(t,n,i,r);return}}Ee.flags|=e,l.memoizedState=Xr(1|t,n,i,r)}function pu(e,t){return ni(8390656,8,e,t)}function Bo(e,t){return ri(2048,8,e,t)}function mu(e,t){return ri(4,2,e,t)}function hu(e,t){return ri(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){return n=n!=null?n.concat([e]):null,ri(4,4,gu.bind(null,t,e),n)}function Ao(){}function yu(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xu(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wu(e,t,n){return(Tn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(Nt(n,t)||(n=Ya(),Ee.lanes|=n,zn|=n,e.baseState=!0),t)}function Ef(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=Mo.transition;Mo.transition={};try{e(!1),t()}finally{ye=n,Mo.transition=r}}function ku(){return kt().memoizedState}function Cf(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e))_u(t,n);else if(n=Zs(e,t,n,r),n!==null){var l=et();Rt(n,e,r,l),Su(n,t,r)}}function Pf(e,t,n){var r=hn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))_u(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,f=i(a,n);if(l.hasEagerState=!0,l.eagerState=f,Nt(f,a)){var m=t.interleaved;m===null?(l.next=l,Co(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}n=Zs(e,t,l,r),n!==null&&(l=et(),Rt(n,e,r,l),Su(n,t,r))}}function ju(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function _u(e,t){Kr=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Su(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$i(e,n)}}var li={readContext:wt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Lf={readContext:wt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:pu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cf.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:du,useDebugValue:Ao,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=du(!1),t=e[0];return e=Ef.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=Dt();if(be){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ie===null)throw Error(s(349));(Tn&30)!==0||ou(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,pu(su.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,au.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Ie.identifierPrefix;if(be){var n=Wt,r=Vt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rf={readContext:wt,useCallback:yu,useContext:wt,useEffect:Bo,useImperativeHandle:vu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:xu,useReducer:Uo,useRef:fu,useState:function(){return Uo(Yr)},useDebugValue:Ao,useDeferredValue:function(e){var t=kt();return wu(t,Oe.memoizedState,e)},useTransition:function(){var e=Uo(Yr)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:iu,useId:ku,unstable_isNewReconciler:!1},Tf={readContext:wt,useCallback:yu,useContext:wt,useEffect:Bo,useImperativeHandle:vu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:xu,useReducer:Io,useRef:fu,useState:function(){return Io(Yr)},useDebugValue:Ao,useDeferredValue:function(e){var t=kt();return Oe===null?t.memoizedState=e:wu(t,Oe.memoizedState,e)},useTransition:function(){var e=Io(Yr)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:iu,useId:ku,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $o(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ii={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),l=hn(e),i=Qt(r,l);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,l),t!==null&&(Rt(t,e,l,r),Xl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),l=hn(e),i=Qt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,l),t!==null&&(Rt(t,e,l,r),Xl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=hn(e),l=Qt(n,r);l.tag=2,t!=null&&(l.callback=t),t=dn(e,l,r),t!==null&&(Rt(t,e,r,n),Xl(t,e,r))}};function bu(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(l,i):!0}function Nu(e,t,n){var r=!1,l=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(l=lt(t)?En:Je.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,l):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ii.enqueueReplaceState(t,t.state,null)}function Vo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=wt(i):(i=lt(t)?En:Je.current,l.context=Zn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($o(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ii.enqueueReplaceState(l,l.state,null),ql(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=se(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zf=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fi||(fi=!0,oa=r),Ho(e,t)},n}function Pu(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ho(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Jf.bind(null,e,t,n),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Mf=de.ReactCurrentOwner,it=!1;function Ze(e,t,n,r){t.child=e===null?qs(t,null,n,r):rr(t,e.child,n,r)}function zu(e,t,n,r,l){n=n.render;var i=t.ref;return ir(t,l),r=Fo(e,t,n,r,i,l),n=Do(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Jt(e,t,l)):(be&&n&&xo(t),t.flags|=1,Ze(e,t,r,l),t.child)}function Mu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!pa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ou(e,t,i,r,l)):(e=yi(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(a,r)&&e.ref===t.ref)return Jt(e,t,l)}return t.flags|=1,e=vn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Dr(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Jt(e,t,l)}return Qo(e,t,n,r,l)}function Fu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ur,ht),ht|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(ur,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(ur,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,je(ur,ht),ht|=r;return Ze(e,t,l,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,n,r,l){var i=lt(n)?En:Je.current;return i=Zn(t,i),ir(t,l),n=Fo(e,t,n,r,i,l),r=Do(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Jt(e,t,l)):(be&&r&&xo(t),t.flags|=1,Ze(e,t,n,l),t.child)}function Uu(e,t,n,r,l){if(lt(n)){var i=!0;Vl(t)}else i=!1;if(ir(t,l),t.stateNode===null)ai(e,t),Nu(t,n,r),Vo(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,f=t.memoizedProps;a.props=f;var m=a.context,j=n.contextType;typeof j=="object"&&j!==null?j=wt(j):(j=lt(n)?En:Je.current,j=Zn(t,j));var z=n.getDerivedStateFromProps,M=typeof z=="function"||typeof a.getSnapshotBeforeUpdate=="function";M||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==r||m!==j)&&Eu(t,a,r,j),cn=!1;var R=t.memoizedState;a.state=R,ql(t,r,a,l),m=t.memoizedState,f!==r||R!==m||rt.current||cn?(typeof z=="function"&&($o(t,n,z,r),m=t.memoizedState),(f=cn||bu(t,n,f,r,R,m,j))?(M||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=j,r=f):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,eu(e,t),f=t.memoizedProps,j=t.type===t.elementType?f:Ct(t.type,f),a.props=j,M=t.pendingProps,R=a.context,m=n.contextType,typeof m=="object"&&m!==null?m=wt(m):(m=lt(n)?En:Je.current,m=Zn(t,m));var $=n.getDerivedStateFromProps;(z=typeof $=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(f!==M||R!==m)&&Eu(t,a,r,m),cn=!1,R=t.memoizedState,a.state=R,ql(t,r,a,l);var H=t.memoizedState;f!==M||R!==H||rt.current||cn?(typeof $=="function"&&($o(t,n,$,r),H=t.memoizedState),(j=cn||bu(t,n,j,r,R,H,m)||!1)?(z||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,H,m),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,H,m)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),a.props=r,a.state=H,a.context=m,r=j):(typeof a.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return Jo(e,t,n,r,i,l)}function Jo(e,t,n,r,l,i){Du(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Vs(t,n,!1),Jt(e,t,i);r=t.stateNode,Mf.current=t;var f=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,f,i)):Ze(e,t,f,i),t.memoizedState=r.state,l&&Vs(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),Lo(e,t.containerInfo)}function Bu(e,t,n,r,l){return nr(),_o(l),t.flags|=256,Ze(e,t,n,r),t.child}var Ko={dehydrated:null,treeContext:null,retryLane:0};function Go(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=Ne.current,i=!1,a=(t.flags&128)!==0,f;if((f=a)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),je(Ne,l&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=xi(a,r,0,null),e=Dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Go(n),t.memoizedState=Ko,e):Yo(t,a));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return Of(e,t,a,r,f,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,f=l.sibling;var m={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=vn(l,m),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?i=vn(f,i):(i=Dn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Go(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ko,r}return i=e.child,e=i.sibling,r=vn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yo(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&_o(r),rr(t,e.child,null,n),e=Yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Wo(Error(s(422))),oi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=xi({mode:"visible",children:r.children},l,0,null),i=Dn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&rr(t,e.child,null,a),t.child.memoizedState=Go(a),t.memoizedState=Ko,i);if((t.mode&1)===0)return oi(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,i=Error(s(419)),r=Wo(i,r,void 0),oi(e,t,a,r)}if(f=(a&e.childLanes)!==0,it||f){if(r=Ie,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ht(e,l),Rt(r,e,l,-1))}return fa(),r=Wo(Error(s(421))),oi(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Kf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,mt=on(l.nextSibling),pt=t,be=!0,Et=null,e!==null&&(yt[xt++]=Vt,yt[xt++]=Wt,yt[xt++]=Cn,Vt=e.id,Wt=e.overflow,Cn=t),t=Yo(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function Xo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Vu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ze(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Xo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Xo(t,!0,n,null,i);break;case"together":Xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ff(e,t,n){switch(t.tag){case 3:Iu(t),nr();break;case 5:ru(t);break;case 1:lt(t.type)&&Vl(t);break;case 4:Lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;je(Gl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Au(e,t,n):(je(Ne,Ne.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);je(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Vu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),je(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,n)}return Jt(e,t,n)}var Wu,qo,Hu,Qu;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},qo=function(){},Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Rn(Ft.current);var i=null;switch(n){case"input":l=Bn(e,l),r=Bn(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=wr(e,l),r=wr(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bl)}Vn(n,r);var a;n=null;for(j in l)if(!r.hasOwnProperty(j)&&l.hasOwnProperty(j)&&l[j]!=null)if(j==="style"){var f=l[j];for(a in f)f.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(p.hasOwnProperty(j)?i||(i=[]):(i=i||[]).push(j,null));for(j in r){var m=r[j];if(f=l!=null?l[j]:void 0,r.hasOwnProperty(j)&&m!==f&&(m!=null||f!=null))if(j==="style")if(f){for(a in f)!f.hasOwnProperty(a)||m&&m.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in m)m.hasOwnProperty(a)&&f[a]!==m[a]&&(n||(n={}),n[a]=m[a])}else n||(i||(i=[]),i.push(j,n)),n=m;else j==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(i=i||[]).push(j,m)):j==="children"?typeof m!="string"&&typeof m!="number"||(i=i||[]).push(j,""+m):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(p.hasOwnProperty(j)?(m!=null&&j==="onScroll"&&_e("scroll",e),i||f===m||(i=[])):(i=i||[]).push(j,m))}n&&(i=i||[]).push("style",n);var j=i;(t.updateQueue=j)&&(t.flags|=4)}},Qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Df(e,t,n){var r=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return lt(t.type)&&$l(),Ge(t),null;case 3:return r=t.stateNode,or(),Se(rt),Se(Je),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(ua(Et),Et=null))),qo(e,t),Ge(t),null;case 5:Ro(t);var l=Rn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ge(t),null}if(e=Rn(Ft.current),Jl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(l=0;l<Ir.length;l++)_e(Ir[l],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":It(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":cl(r,i),_e("invalid",r)}Vn(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var f=i[a];a==="children"?typeof f=="string"?r.textContent!==f&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(a)&&f!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":Xe(r),xr(r,i,!0);break;case"textarea":Xe(r),fl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ot]=t,e[$r]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(a=jr(n,r),n){case"dialog":_e("cancel",e),_e("close",e),l=r;break;case"iframe":case"object":case"embed":_e("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ir.length;l++)_e(Ir[l],e);l=r;break;case"source":_e("error",e),l=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),l=r;break;case"details":_e("toggle",e),l=r;break;case"input":It(e,r),l=Bn(e,r),_e("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),_e("invalid",e);break;case"textarea":cl(e,r),l=wr(e,r),_e("invalid",e);break;default:l=r}Vn(n,l),f=l;for(i in f)if(f.hasOwnProperty(i)){var m=f[i];i==="style"?gl(e,m):i==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&ml(e,m)):i==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&Bt(e,m):typeof m=="number"&&Bt(e,""+m):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?m!=null&&i==="onScroll"&&_e("scroll",e):m!=null&&oe(e,i,m,a))}switch(n){case"input":Xe(e),xr(e,r,!1);break;case"textarea":Xe(e),fl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+he(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)Qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=Rn(Jr.current),Rn(Ft.current),Jl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Ge(t),null;case 13:if(Se(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gs(),nr(),t.flags|=98560,i=!1;else if(i=Jl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ot]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),i=!1}else Et!==null&&(ua(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Fe===0&&(Fe=3):fa())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return or(),qo(e,t),e===null&&Br(t.stateNode.containerInfo),Ge(t),null;case 10:return No(t.type._context),Ge(t),null;case 17:return lt(t.type)&&$l(),Ge(t),null;case 19:if(Se(Ne),i=t.memoizedState,i===null)return Ge(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)qr(i,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Zl(e),a!==null){for(t.flags|=128,qr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Ne,Ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&Pe()>cr&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Ge(t),null}else 2*Pe()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,qr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Pe(),t.sibling=null,n=Ne.current,je(Ne,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ht&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Uf(e,t){switch(wo(t),t.tag){case 1:return lt(t.type)&&$l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),Se(rt),Se(Je),zo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(Se(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ne),null;case 4:return or(),null;case 10:return No(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var si=!1,Ye=!1,If=typeof WeakSet=="function"?WeakSet:Set,V=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Zo(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Ju=!1;function Bf(e,t){if(co=Cl,e=bs(),no(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,f=-1,m=-1,j=0,z=0,M=e,R=null;t:for(;;){for(var $;M!==n||l!==0&&M.nodeType!==3||(f=a+l),M!==i||r!==0&&M.nodeType!==3||(m=a+r),M.nodeType===3&&(a+=M.nodeValue.length),($=M.firstChild)!==null;)R=M,M=$;for(;;){if(M===e)break t;if(R===n&&++j===l&&(f=a),R===i&&++z===r&&(m=a),($=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=$}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(fo={focusedElem:e,selectionRange:n},Cl=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var Q=H.memoizedProps,Le=H.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?Q:Ct(t.type,Q),Le);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(F){Ce(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return H=Ju,Ju=!1,H}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Zo(t,n,i)}l=l.next}while(l!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ku(e){var t=e.alternate;t!==null&&(e.alternate=null,Ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[$r],delete t[go],delete t[jf],delete t[_f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bl));else if(r!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}var We=null,Pt=!1;function fn(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Ye||sr(n,t);case 6:var r=We,l=Pt;We=null,fn(e,t,n),We=r,Pt=l,We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?ho(e.parentNode,n):e.nodeType===1&&ho(e,n),Rr(e)):ho(We,n.stateNode));break;case 4:r=We,l=Pt,We=n.stateNode.containerInfo,Pt=!0,fn(e,t,n),We=r,Pt=l;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Zo(n,t,a),l=l.next}while(l!==r)}fn(e,t,n);break;case 1:if(!Ye&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ce(n,t,f)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,fn(e,t,n),Ye=r):fn(e,t,n);break;default:fn(e,t,n)}}function qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new If),t.forEach(function(r){var l=Gf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,f=a;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,Pt=!1;break e;case 3:We=f.stateNode.containerInfo,Pt=!0;break e;case 4:We=f.stateNode.containerInfo,Pt=!0;break e}f=f.return}if(We===null)throw Error(s(160));Xu(i,a,l),We=null,Pt=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(j){Ce(l,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Ut(e),r&4){try{Zr(3,e,e.return),ui(3,e)}catch(Q){Ce(e,e.return,Q)}try{Zr(5,e,e.return)}catch(Q){Ce(e,e.return,Q)}}break;case 1:Lt(t,e),Ut(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(Lt(t,e),Ut(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var l=e.stateNode;try{Bt(l,"")}catch(Q){Ce(e,e.return,Q)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&i.type==="radio"&&i.name!=null&&yr(l,i),jr(f,a);var j=jr(f,i);for(a=0;a<m.length;a+=2){var z=m[a],M=m[a+1];z==="style"?gl(l,M):z==="dangerouslySetInnerHTML"?ml(l,M):z==="children"?Bt(l,M):oe(l,z,M,j)}switch(f){case"input":An(l,i);break;case"textarea":dl(l,i);break;case"select":var R=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?gt(l,!!i.multiple,$,!1):R!==!!i.multiple&&(i.defaultValue!=null?gt(l,!!i.multiple,i.defaultValue,!0):gt(l,!!i.multiple,i.multiple?[]:"",!1))}l[$r]=i}catch(Q){Ce(e,e.return,Q)}}break;case 6:if(Lt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(Q){Ce(e,e.return,Q)}}break;case 3:if(Lt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(Q){Ce(e,e.return,Q)}break;case 4:Lt(t,e),Ut(e);break;case 13:Lt(t,e),Ut(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ia=Pe())),r&4&&qu(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(j=Ye)||z,Lt(t,e),Ye=j):Lt(t,e),Ut(e),r&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!z&&(e.mode&1)!==0)for(V=e,z=e.child;z!==null;){for(M=V=z;V!==null;){switch(R=V,$=R.child,R.tag){case 0:case 11:case 14:case 15:Zr(4,R,R.return);break;case 1:sr(R,R.return);var H=R.stateNode;if(typeof H.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(Q){Ce(r,n,Q)}}break;case 5:sr(R,R.return);break;case 22:if(R.memoizedState!==null){nc(M);continue}}$!==null?($.return=R,V=$):nc(M)}z=z.sibling}e:for(z=null,M=e;;){if(M.tag===5){if(z===null){z=M;try{l=M.stateNode,j?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(f=M.stateNode,m=M.memoizedProps.style,a=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=hl("display",a))}catch(Q){Ce(e,e.return,Q)}}}else if(M.tag===6){if(z===null)try{M.stateNode.nodeValue=j?"":M.memoizedProps}catch(Q){Ce(e,e.return,Q)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;z===M&&(z=null),M=M.return}z===M&&(z=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Lt(t,e),Ut(e),r&4&&qu(e);break;case 21:break;default:Lt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bt(l,""),r.flags&=-33);var i=Yu(e);na(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,f=Yu(e);ta(e,f,a);break;default:throw Error(s(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e,t,n){V=e,ec(e)}function ec(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var l=V,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||si;if(!a){var f=l.alternate,m=f!==null&&f.memoizedState!==null||Ye;f=si;var j=Ye;if(si=a,(Ye=m)&&!j)for(V=l;V!==null;)a=V,m=a.child,a.tag===22&&a.memoizedState!==null?rc(l):m!==null?(m.return=a,V=m):rc(l);for(;i!==null;)V=i,ec(i),i=i.sibling;V=l,si=f,Ye=j}tc(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,V=i):tc(e)}}function tc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nu(t,a,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var z=j.memoizedState;if(z!==null){var M=z.dehydrated;M!==null&&Rr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ye||t.flags&512&&ea(t)}catch(R){Ce(t,t.return,R)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function nc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function rc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(m){Ce(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(m){Ce(t,l,m)}}var i=t.return;try{ea(t)}catch(m){Ce(t,i,m)}break;case 5:var a=t.return;try{ea(t)}catch(m){Ce(t,a,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){V=null;break}var f=t.sibling;if(f!==null){f.return=t.return,V=f;break}V=t.return}}var $f=Math.ceil,ci=de.ReactCurrentDispatcher,ra=de.ReactCurrentOwner,jt=de.ReactCurrentBatchConfig,me=0,Ie=null,ze=null,He=0,ht=0,ur=an(0),Fe=0,el=null,zn=0,di=0,la=0,tl=null,ot=null,ia=0,cr=1/0,Kt=null,fi=!1,oa=null,pn=null,pi=!1,mn=null,mi=0,nl=0,aa=null,hi=-1,gi=0;function et(){return(me&6)!==0?Pe():hi!==-1?hi:hi=Pe()}function hn(e){return(e.mode&1)===0?1:(me&2)!==0&&He!==0?He&-He:bf.transition!==null?(gi===0&&(gi=Ya()),gi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:is(e.type)),e)}function Rt(e,t,n,r){if(50<nl)throw nl=0,aa=null,Error(s(185));Nr(e,n,r),((me&2)===0||e!==Ie)&&(e===Ie&&((me&2)===0&&(di|=n),Fe===4&&gn(e,He)),at(e,r),n===1&&me===0&&(t.mode&1)===0&&(cr=Pe()+500,Wl&&un()))}function at(e,t){var n=e.callbackNode;Sd(e,t);var r=bl(e,e===Ie?He:0);if(r===0)n!==null&&Ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ja(n),t===1)e.tag===0?Sf(ic.bind(null,e)):Ws(ic.bind(null,e)),wf(function(){(me&6)===0&&un()}),n=null;else{switch(Xa(r)){case 1:n=Ii;break;case 4:n=Ka;break;case 16:n=kl;break;case 536870912:n=Ga;break;default:n=kl}n=pc(n,lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lc(e,t){if(hi=-1,gi=0,(me&6)!==0)throw Error(s(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=bl(e,e===Ie?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=vi(e,r);else{t=r;var l=me;me|=2;var i=ac();(Ie!==e||He!==t)&&(Kt=null,cr=Pe()+500,On(e,t));do try{Hf();break}catch(f){oc(e,f)}while(!0);bo(),ci.current=i,me=l,ze!==null?t=0:(Ie=null,He=0,t=Fe)}if(t!==0){if(t===2&&(l=Bi(e),l!==0&&(r=l,t=sa(e,l))),t===1)throw n=el,On(e,0),gn(e,r),at(e,Pe()),n;if(t===6)gn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Vf(l)&&(t=vi(e,r),t===2&&(i=Bi(e),i!==0&&(r=i,t=sa(e,i))),t===1))throw n=el,On(e,0),gn(e,r),at(e,Pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:Fn(e,ot,Kt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=ia+500-Pe(),10<t)){if(bl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=mo(Fn.bind(null,e,ot,Kt),t);break}Fn(e,ot,Kt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-bt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$f(r/1960))-r,10<r){e.timeoutHandle=mo(Fn.bind(null,e,ot,Kt),r);break}Fn(e,ot,Kt);break;case 5:Fn(e,ot,Kt);break;default:throw Error(s(329))}}}return at(e,Pe()),e.callbackNode===n?lc.bind(null,e):null}function sa(e,t){var n=tl;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=vi(e,t),e!==2&&(t=ot,ot=n,t!==null&&ua(t)),e}function ua(e){ot===null?ot=e:ot.push.apply(ot,e)}function Vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Nt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~la,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function ic(e){if((me&6)!==0)throw Error(s(327));dr();var t=bl(e,0);if((t&1)===0)return at(e,Pe()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=Bi(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=el,On(e,0),gn(e,t),at(e,Pe()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,ot,Kt),at(e,Pe()),null}function ca(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(cr=Pe()+500,Wl&&un())}}function Mn(e){mn!==null&&mn.tag===0&&(me&6)===0&&dr();var t=me;me|=1;var n=jt.transition,r=ye;try{if(jt.transition=null,ye=1,e)return e()}finally{ye=r,jt.transition=n,me=t,(me&6)===0&&un()}}function da(){ht=ur.current,Se(ur)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xf(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:or(),Se(rt),Se(Je),zo();break;case 5:Ro(r);break;case 4:or();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:No(r.type._context);break;case 22:case 23:da()}n=n.return}if(Ie=e,ze=e=vn(e.current,null),He=ht=t,Fe=0,el=null,la=di=zn=0,ot=tl=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Ln=null}return e}function oc(e,t){do{var n=ze;try{if(bo(),ei.current=li,ti){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ti=!1}if(Tn=0,Ue=Oe=Ee=null,Kr=!1,Gr=0,ra.current=null,n===null||n.return===null){Fe=1,el=t,ze=null;break}e:{var i=e,a=n.return,f=n,m=t;if(t=He,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var j=m,z=f,M=z.tag;if((z.mode&1)===0&&(M===0||M===11||M===15)){var R=z.alternate;R?(z.updateQueue=R.updateQueue,z.memoizedState=R.memoizedState,z.lanes=R.lanes):(z.updateQueue=null,z.memoizedState=null)}var $=Ru(a);if($!==null){$.flags&=-257,Tu($,a,f,i,t),$.mode&1&&Lu(i,j,t),t=$,m=j;var H=t.updateQueue;if(H===null){var Q=new Set;Q.add(m),t.updateQueue=Q}else H.add(m);break e}else{if((t&1)===0){Lu(i,j,t),fa();break e}m=Error(s(426))}}else if(be&&f.mode&1){var Le=Ru(a);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Tu(Le,a,f,i,t),_o(ar(m,f));break e}}i=m=ar(m,f),Fe!==4&&(Fe=2),tl===null?tl=[i]:tl.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=Cu(i,m,t);tu(i,x);break e;case 1:f=m;var h=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(pn===null||!pn.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var F=Pu(i,f,t);tu(i,F);break e}}i=i.return}while(i!==null)}uc(n)}catch(J){t=J,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function ac(){var e=ci.current;return ci.current=li,e===null?li:e}function fa(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ie===null||(zn&268435455)===0&&(di&268435455)===0||gn(Ie,He)}function vi(e,t){var n=me;me|=2;var r=ac();(Ie!==e||He!==t)&&(Kt=null,On(e,t));do try{Wf();break}catch(l){oc(e,l)}while(!0);if(bo(),me=n,ci.current=r,ze!==null)throw Error(s(261));return Ie=null,He=0,Fe}function Wf(){for(;ze!==null;)sc(ze)}function Hf(){for(;ze!==null&&!hd();)sc(ze)}function sc(e){var t=fc(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?uc(e):ze=t,ra.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Df(n,t,ht),n!==null){ze=n;return}}else{if(n=Uf(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,ze=null;return}}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Fe===0&&(Fe=5)}function Fn(e,t,n){var r=ye,l=jt.transition;try{jt.transition=null,ye=1,Qf(e,t,n,r)}finally{jt.transition=l,ye=r}return null}function Qf(e,t,n,r){do dr();while(mn!==null);if((me&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(bd(e,i),e===Ie&&(ze=Ie=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||pi||(pi=!0,pc(kl,function(){return dr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=jt.transition,jt.transition=null;var a=ye;ye=1;var f=me;me|=4,ra.current=null,Bf(e,n),Zu(n,e),ff(fo),Cl=!!co,fo=co=null,e.current=n,Af(n),gd(),me=f,ye=a,jt.transition=i}else e.current=n;if(pi&&(pi=!1,mn=e,mi=l),i=e.pendingLanes,i===0&&(pn=null),xd(n.stateNode),at(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fi)throw fi=!1,e=oa,oa=null,e;return(mi&1)!==0&&e.tag!==0&&dr(),i=e.pendingLanes,(i&1)!==0?e===aa?nl++:(nl=0,aa=e):nl=0,un(),null}function dr(){if(mn!==null){var e=Xa(mi),t=jt.transition,n=ye;try{if(jt.transition=null,ye=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,mi=0,(me&6)!==0)throw Error(s(331));var l=me;for(me|=4,V=e.current;V!==null;){var i=V,a=i.child;if((V.flags&16)!==0){var f=i.deletions;if(f!==null){for(var m=0;m<f.length;m++){var j=f[m];for(V=j;V!==null;){var z=V;switch(z.tag){case 0:case 11:case 15:Zr(8,z,i)}var M=z.child;if(M!==null)M.return=z,V=M;else for(;V!==null;){z=V;var R=z.sibling,$=z.return;if(Ku(z),z===j){V=null;break}if(R!==null){R.return=$,V=R;break}V=$}}}var H=i.alternate;if(H!==null){var Q=H.child;if(Q!==null){H.child=null;do{var Le=Q.sibling;Q.sibling=null,Q=Le}while(Q!==null)}}V=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Zr(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,V=x;break e}V=i.return}}var h=e.current;for(V=h;V!==null;){a=V;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,V=w;else e:for(a=h;V!==null;){if(f=V,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ui(9,f)}}catch(J){Ce(f,f.return,J)}if(f===a){V=null;break e}var F=f.sibling;if(F!==null){F.return=f.return,V=F;break e}V=f.return}}if(me=l,un(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(jl,e)}catch{}r=!0}return r}finally{ye=n,jt.transition=t}}return!1}function cc(e,t,n){t=ar(n,t),t=Cu(e,t,1),e=dn(e,t,1),t=et(),e!==null&&(Nr(e,1,t),at(e,t))}function Ce(e,t,n){if(e.tag===3)cc(e,e,n);else for(;t!==null;){if(t.tag===3){cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=ar(n,e),e=Pu(t,e,1),t=dn(t,e,1),e=et(),t!==null&&(Nr(t,1,e),at(t,e));break}}t=t.return}}function Jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(He&n)===n&&(Fe===4||Fe===3&&(He&130023424)===He&&500>Pe()-ia?On(e,0):la|=n),at(e,t)}function dc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Sl,Sl<<=1,(Sl&130023424)===0&&(Sl=4194304)));var n=et();e=Ht(e,t),e!==null&&(Nr(e,t,n),at(e,n))}function Kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Gf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),dc(e,n)}var fc;fc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,Ff(e,t,n);it=(e.flags&131072)!==0}else it=!1,be&&(t.flags&1048576)!==0&&Hs(t,Ql,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var l=Zn(t,Je.current);ir(t,n),l=Fo(null,t,r,e,l,n);var i=Do();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(i=!0,Vl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Po(t),l.updater=ii,t.stateNode=l,l._reactInternals=t,Vo(t,r,e,n),t=Jo(null,t,r,!0,i,n)):(t.tag=0,be&&i&&xo(t),Ze(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Xf(r),e=Ct(r,e),l){case 0:t=Qo(null,t,r,e,n);break e;case 1:t=Uu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Mu(null,t,r,Ct(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),Qo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),Uu(e,t,r,l,n);case 3:e:{if(Iu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,eu(e,t),ql(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ar(Error(s(423)),t),t=Bu(e,t,r,n,l);break e}else if(r!==l){l=ar(Error(s(424)),t),t=Bu(e,t,r,n,l);break e}else for(mt=on(t.stateNode.containerInfo.firstChild),pt=t,be=!0,Et=null,n=qs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===l){t=Jt(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return ru(t),e===null&&jo(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,po(r,l)?a=null:i!==null&&po(r,i)&&(t.flags|=32),Du(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&jo(t),null;case 13:return Au(e,t,n);case 4:return Lo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),zu(e,t,r,l,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,je(Gl,r._currentValue),r._currentValue=a,i!==null)if(Nt(i.value,a)){if(i.children===l.children&&!rt.current){t=Jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var f=i.dependencies;if(f!==null){a=i.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(i.tag===1){m=Qt(-1,n&-n),m.tag=2;var j=i.updateQueue;if(j!==null){j=j.shared;var z=j.pending;z===null?m.next=m:(m.next=z.next,z.next=m),j.pending=m}}i.lanes|=n,m=i.alternate,m!==null&&(m.lanes|=n),Eo(i.return,n,t),f.lanes|=n;break}m=m.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),Eo(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ze(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ir(t,n),l=wt(l),r=r(l),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,l=Ct(r,t.pendingProps),l=Ct(r.type,l),Mu(e,t,r,l,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ct(r,l),ai(e,t),t.tag=1,lt(r)?(e=!0,Vl(t)):e=!1,ir(t,n),Nu(t,r,l),Vo(t,r,l,n),Jo(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Fu(e,t,n)}throw Error(s(156,t.tag))};function pc(e,t){return Qa(e,t)}function Yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new Yf(e,t,n,r)}function pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===W)return 11;if(e===Y)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yi(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")pa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ke:return Dn(n.children,l,i,t);case Ae:a=8,l|=8;break;case Qe:return e=_t(12,n,t,l|2),e.elementType=Qe,e.lanes=i,e;case Z:return e=_t(13,n,t,l),e.elementType=Z,e.lanes=i,e;case K:return e=_t(19,n,t,l),e.elementType=K,e.lanes=i,e;case fe:return xi(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tt:a=10;break e;case dt:a=9;break e;case W:a=11;break e;case Y:a=14;break e;case le:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=_t(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Dn(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=_t(22,e,r,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function ha(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ga(e,t,n,r,l,i,a,f,m){return e=new qf(e,t,n,f,m),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Po(i),e}function Zf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return sn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(lt(n))return $s(e,n,t)}return t}function hc(e,t,n,r,l,i,a,f,m){return e=ga(n,r,!0,e,l,i,a,f,m),e.context=mc(null),n=e.current,r=et(),l=hn(n),i=Qt(r,l),i.callback=t??null,dn(n,i,l),e.current.lanes=l,Nr(e,l,r),at(e,r),e}function wi(e,t,n,r){var l=t.current,i=et(),a=hn(l);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(l,t,a),e!==null&&(Rt(e,l,a,i),Xl(e,l,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function ep(){return null}var vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}ji.prototype.render=ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));wi(e,t,null,null)},ji.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){wi(null,e,null,null)}),t[At]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=es();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&rs(e)}};function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function tp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var j=ki(a);i.call(j)}}var a=hc(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=a,e[At]=a.current,Br(e.nodeType===8?e.parentNode:e),Mn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var j=ki(m);f.call(j)}}var m=ga(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=m,e[At]=m.current,Br(e.nodeType===8?e.parentNode:e),Mn(function(){wi(t,m,n,r)}),m}function Si(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var f=l;l=function(){var m=ki(a);f.call(m)}}wi(t,a,e,l)}else a=tp(n,t,e,l,r);return ki(a)}qa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&($i(t,n|1),at(t,Pe()),(me&6)===0&&(cr=Pe()+500,un()))}break;case 13:Mn(function(){var r=Ht(e,1);if(r!==null){var l=et();Rt(r,e,1,l)}}),va(e,1)}},Vi=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=et();Rt(t,e,134217728,n)}va(e,134217728)}},Za=function(e){if(e.tag===13){var t=hn(e),n=Ht(e,t);if(n!==null){var r=et();Rt(n,e,t,r)}va(e,t)}},es=function(){return ye},ts=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}},_r=function(e,t,n){switch(t){case"input":if(An(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Al(r);if(!l)throw Error(s(90));In(r),An(r,l)}}}break;case"textarea":dl(e,n);break;case"select":t=n.value,t!=null&&gt(e,!!n.multiple,t,!1)}},T=ca,ce=Mn;var np={usingClientEntryPoint:!1,Events:[Vr,Xn,Al,yl,E,ca]},rl={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rp={bundleType:rl.bundleType,version:rl.version,rendererPackageName:rl.rendererPackageName,rendererConfig:rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wa(e),e===null?null:e.stateNode},findFiberByHostInstance:rl.findFiberByHostInstance||ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{jl=bi.inject(rp),Mt=bi}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np,st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xa(t))throw Error(s(200));return Zf(e,t,null,n)},st.createRoot=function(e,t){if(!xa(e))throw Error(s(299));var n=!1,r="",l=vc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ga(e,1,!1,null,null,n,!1,r,l),e[At]=t.current,Br(e.nodeType===8?e.parentNode:e),new ya(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Wa(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return Mn(e)},st.hydrate=function(e,t,n){if(!_i(t))throw Error(s(200));return Si(null,e,t,!0,n)},st.hydrateRoot=function(e,t,n){if(!xa(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=vc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hc(t,null,e,1,n??null,l,!1,i,a),e[At]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ji(t)},st.render=function(e,t,n){if(!_i(t))throw Error(s(200));return Si(null,e,t,!1,n)},st.unmountComponentAtNode=function(e){if(!_i(e))throw Error(s(40));return e._reactRootContainer?(Mn(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},st.unstable_batchedUpdates=ca,st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Si(e,t,n,!1,r)},st.version="18.3.1-next-f1338f8080-20240426",st}var Nc;function Ac(){if(Nc)return ja.exports;Nc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),ja.exports=fp(),ja.exports}var Ec;function pp(){if(Ec)return Ni;Ec=1;var o=Ac();return Ni.createRoot=o.createRoot,Ni.hydrateRoot=o.hydrateRoot,Ni}var mp=pp();const hp=Bc(mp);Ac();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},sl.apply(this,arguments)}var xn;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(xn||(xn={}));const Cc="popstate";function gp(o){o===void 0&&(o={});function c(d,p){let{pathname:g,search:y,hash:S}=d.location;return Ca("",{pathname:g,search:y,hash:S},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function s(d,p){return typeof p=="string"?p:Pi(p)}return yp(c,s,null,o)}function Re(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function Oa(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function vp(){return Math.random().toString(36).substr(2,8)}function Pc(o,c){return{usr:o.state,key:o.key,idx:c}}function Ca(o,c,s,d){return s===void 0&&(s=null),sl({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof c=="string"?hr(c):c,{state:s,key:c&&c.key||d||vp()})}function Pi(o){let{pathname:c="/",search:s="",hash:d=""}=o;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function hr(o){let c={};if(o){let s=o.indexOf("#");s>=0&&(c.hash=o.substr(s),o=o.substr(0,s));let d=o.indexOf("?");d>=0&&(c.search=o.substr(d),o=o.substr(0,d)),o&&(c.pathname=o)}return c}function yp(o,c,s,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:g=!1}=d,y=p.history,S=xn.Pop,_=null,C=N();C==null&&(C=0,y.replaceState(sl({},y.state,{idx:C}),""));function N(){return(y.state||{idx:null}).idx}function b(){S=xn.Pop;let I=N(),te=I==null?null:I-C;C=I,_&&_({action:S,location:A.location,delta:te})}function U(I,te){S=xn.Push;let ae=Ca(A.location,I,te);C=N()+1;let oe=Pc(ae,C),de=A.createHref(ae);try{y.pushState(oe,"",de)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;p.location.assign(de)}g&&_&&_({action:S,location:A.location,delta:1})}function P(I,te){S=xn.Replace;let ae=Ca(A.location,I,te);C=N();let oe=Pc(ae,C),de=A.createHref(ae);y.replaceState(oe,"",de),g&&_&&_({action:S,location:A.location,delta:0})}function O(I){let te=p.location.origin!=="null"?p.location.origin:p.location.href,ae=typeof I=="string"?I:Pi(I);return ae=ae.replace(/ $/,"%20"),Re(te,"No window.location.(origin|href) available to create URL for href: "+ae),new URL(ae,te)}let A={get action(){return S},get location(){return o(p,y)},listen(I){if(_)throw new Error("A history only accepts one active listener");return p.addEventListener(Cc,b),_=I,()=>{p.removeEventListener(Cc,b),_=null}},createHref(I){return c(p,I)},createURL:O,encodeLocation(I){let te=O(I);return{pathname:te.pathname,search:te.search,hash:te.hash}},push:U,replace:P,go(I){return y.go(I)}};return A}var Lc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Lc||(Lc={}));function xp(o,c,s){return s===void 0&&(s="/"),wp(o,c,s)}function wp(o,c,s,d){let p=typeof c=="string"?hr(c):c,g=Fa(p.pathname||"/",s);if(g==null)return null;let y=$c(o);kp(y);let S=null;for(let _=0;S==null&&_<y.length;++_){let C=zp(g);S=Lp(y[_],C)}return S}function $c(o,c,s,d){c===void 0&&(c=[]),s===void 0&&(s=[]),d===void 0&&(d="");let p=(g,y,S)=>{let _={relativePath:S===void 0?g.path||"":S,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};_.relativePath.startsWith("/")&&(Re(_.relativePath.startsWith(d),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(d.length));let C=wn([d,_.relativePath]),N=s.concat(_);g.children&&g.children.length>0&&(Re(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+C+'".')),$c(g.children,c,N,C)),!(g.path==null&&!g.index)&&c.push({path:C,score:Cp(C,g.index),routesMeta:N})};return o.forEach((g,y)=>{var S;if(g.path===""||!((S=g.path)!=null&&S.includes("?")))p(g,y);else for(let _ of Vc(g.path))p(g,y,_)}),c}function Vc(o){let c=o.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),g=s.replace(/\?$/,"");if(d.length===0)return p?[g,""]:[g];let y=Vc(d.join("/")),S=[];return S.push(...y.map(_=>_===""?g:[g,_].join("/"))),p&&S.push(...y),S.map(_=>o.startsWith("/")&&_===""?"/":_)}function kp(o){o.sort((c,s)=>c.score!==s.score?s.score-c.score:Pp(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}const jp=/^:[\w-]+$/,_p=3,Sp=2,bp=1,Np=10,Ep=-2,Rc=o=>o==="*";function Cp(o,c){let s=o.split("/"),d=s.length;return s.some(Rc)&&(d+=Ep),c&&(d+=Sp),s.filter(p=>!Rc(p)).reduce((p,g)=>p+(jp.test(g)?_p:g===""?bp:Np),d)}function Pp(o,c){return o.length===c.length&&o.slice(0,-1).every((d,p)=>d===c[p])?o[o.length-1]-c[c.length-1]:0}function Lp(o,c,s){let{routesMeta:d}=o,p={},g="/",y=[];for(let S=0;S<d.length;++S){let _=d[S],C=S===d.length-1,N=g==="/"?c:c.slice(g.length)||"/",b=Rp({path:_.relativePath,caseSensitive:_.caseSensitive,end:C},N),U=_.route;if(!b)return null;Object.assign(p,b.params),y.push({params:p,pathname:wn([g,b.pathname]),pathnameBase:Up(wn([g,b.pathnameBase])),route:U}),b.pathnameBase!=="/"&&(g=wn([g,b.pathnameBase]))}return y}function Rp(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,d]=Tp(o.path,o.caseSensitive,o.end),p=c.match(s);if(!p)return null;let g=p[0],y=g.replace(/(.)\/+$/,"$1"),S=p.slice(1);return{params:d.reduce((C,N,b)=>{let{paramName:U,isOptional:P}=N;if(U==="*"){let A=S[b]||"";y=g.slice(0,g.length-A.length).replace(/(.)\/+$/,"$1")}const O=S[b];return P&&!O?C[U]=void 0:C[U]=(O||"").replace(/%2F/g,"/"),C},{}),pathname:g,pathnameBase:y,pattern:o}}function Tp(o,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),Oa(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let d=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,S,_)=>(d.push({paramName:S,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(d.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function zp(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Oa(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),o}}function Fa(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=o.charAt(s);return d&&d!=="/"?null:o.slice(s)||"/"}const Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Op=o=>Mp.test(o);function Fp(o,c){c===void 0&&(c="/");let{pathname:s,search:d="",hash:p=""}=typeof o=="string"?hr(o):o,g;if(s)if(Op(s))g=s;else{if(s.includes("//")){let y=s;s=s.replace(/\/\/+/g,"/"),Oa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(y+" -> "+s))}s.startsWith("/")?g=Tc(s.substring(1),"/"):g=Tc(s,c)}else g=c;return{pathname:g,search:Ip(d),hash:Bp(p)}}function Tc(o,c){let s=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function ba(o,c,s,d){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dp(o){return o.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Da(o,c){let s=Dp(o);return c?s.map((d,p)=>p===s.length-1?d.pathname:d.pathnameBase):s.map(d=>d.pathnameBase)}function Ua(o,c,s,d){d===void 0&&(d=!1);let p;typeof o=="string"?p=hr(o):(p=sl({},o),Re(!p.pathname||!p.pathname.includes("?"),ba("?","pathname","search",p)),Re(!p.pathname||!p.pathname.includes("#"),ba("#","pathname","hash",p)),Re(!p.search||!p.search.includes("#"),ba("#","search","hash",p)));let g=o===""||p.pathname==="",y=g?"/":p.pathname,S;if(y==null)S=s;else{let b=c.length-1;if(!d&&y.startsWith("..")){let U=y.split("/");for(;U[0]==="..";)U.shift(),b-=1;p.pathname=U.join("/")}S=b>=0?c[b]:"/"}let _=Fp(p,S),C=y&&y!=="/"&&y.endsWith("/"),N=(g||y===".")&&s.endsWith("/");return!_.pathname.endsWith("/")&&(C||N)&&(_.pathname+="/"),_}const wn=o=>o.join("/").replace(/\/\/+/g,"/"),Up=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ip=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Bp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Ap(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const Wc=["post","put","patch","delete"];new Set(Wc);const $p=["get",...Wc];new Set($p);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},ul.apply(this,arguments)}const Ia=k.createContext(null),Vp=k.createContext(null),kn=k.createContext(null),Mi=k.createContext(null),Gt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=k.createContext(null);function Wp(o,c){let{relative:s}=c===void 0?{}:c;gr()||Re(!1);let{basename:d,navigator:p}=k.useContext(kn),{hash:g,pathname:y,search:S}=Jc(o,{relative:s}),_=y;return d!=="/"&&(_=y==="/"?d:wn([d,y])),p.createHref({pathname:_,search:S,hash:g})}function gr(){return k.useContext(Mi)!=null}function Yt(){return gr()||Re(!1),k.useContext(Mi).location}function Qc(o){k.useContext(kn).static||k.useLayoutEffect(o)}function jn(){let{isDataRoute:o}=k.useContext(Gt);return o?lm():Hp()}function Hp(){gr()||Re(!1);let o=k.useContext(Ia),{basename:c,future:s,navigator:d}=k.useContext(kn),{matches:p}=k.useContext(Gt),{pathname:g}=Yt(),y=JSON.stringify(Da(p,s.v7_relativeSplatPath)),S=k.useRef(!1);return Qc(()=>{S.current=!0}),k.useCallback(function(C,N){if(N===void 0&&(N={}),!S.current)return;if(typeof C=="number"){d.go(C);return}let b=Ua(C,JSON.parse(y),g,N.relative==="path");o==null&&c!=="/"&&(b.pathname=b.pathname==="/"?c:wn([c,b.pathname])),(N.replace?d.replace:d.push)(b,N.state,N)},[c,d,y,g,o])}function Qp(){let{matches:o}=k.useContext(Gt),c=o[o.length-1];return c?c.params:{}}function Jc(o,c){let{relative:s}=c===void 0?{}:c,{future:d}=k.useContext(kn),{matches:p}=k.useContext(Gt),{pathname:g}=Yt(),y=JSON.stringify(Da(p,d.v7_relativeSplatPath));return k.useMemo(()=>Ua(o,JSON.parse(y),g,s==="path"),[o,y,g,s])}function Jp(o,c){return Kp(o,c)}function Kp(o,c,s,d){gr()||Re(!1);let{navigator:p}=k.useContext(kn),{matches:g}=k.useContext(Gt),y=g[g.length-1],S=y?y.params:{};y&&y.pathname;let _=y?y.pathnameBase:"/";y&&y.route;let C=Yt(),N;if(c){var b;let I=typeof c=="string"?hr(c):c;_==="/"||(b=I.pathname)!=null&&b.startsWith(_)||Re(!1),N=I}else N=C;let U=N.pathname||"/",P=U;if(_!=="/"){let I=_.replace(/^\//,"").split("/");P="/"+U.replace(/^\//,"").split("/").slice(I.length).join("/")}let O=xp(o,{pathname:P}),A=Zp(O&&O.map(I=>Object.assign({},I,{params:Object.assign({},S,I.params),pathname:wn([_,p.encodeLocation?p.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?_:wn([_,p.encodeLocation?p.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),g,s,d);return c&&A?k.createElement(Mi.Provider,{value:{location:ul({pathname:"/",search:"",hash:"",state:null,key:"default"},N),navigationType:xn.Pop}},A):A}function Gp(){let o=rm(),c=Ap(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},c),s?k.createElement("pre",{style:p},s):null,null)}const Yp=k.createElement(Gp,null);class Xp extends k.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?k.createElement(Gt.Provider,{value:this.props.routeContext},k.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qp(o){let{routeContext:c,match:s,children:d}=o,p=k.useContext(Ia);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),k.createElement(Gt.Provider,{value:c},d)}function Zp(o,c,s,d){var p;if(c===void 0&&(c=[]),s===void 0&&(s=null),d===void 0&&(d=null),o==null){var g;if(!s)return null;if(s.errors)o=s.matches;else if((g=d)!=null&&g.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)o=s.matches;else return null}let y=o,S=(p=s)==null?void 0:p.errors;if(S!=null){let N=y.findIndex(b=>b.route.id&&(S==null?void 0:S[b.route.id])!==void 0);N>=0||Re(!1),y=y.slice(0,Math.min(y.length,N+1))}let _=!1,C=-1;if(s&&d&&d.v7_partialHydration)for(let N=0;N<y.length;N++){let b=y[N];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(C=N),b.route.id){let{loaderData:U,errors:P}=s,O=b.route.loader&&U[b.route.id]===void 0&&(!P||P[b.route.id]===void 0);if(b.route.lazy||O){_=!0,C>=0?y=y.slice(0,C+1):y=[y[0]];break}}}return y.reduceRight((N,b,U)=>{let P,O=!1,A=null,I=null;s&&(P=S&&b.route.id?S[b.route.id]:void 0,A=b.route.errorElement||Yp,_&&(C<0&&U===0?(im("route-fallback"),O=!0,I=null):C===U&&(O=!0,I=b.route.hydrateFallbackElement||null)));let te=c.concat(y.slice(0,U+1)),ae=()=>{let oe;return P?oe=A:O?oe=I:b.route.Component?oe=k.createElement(b.route.Component,null):b.route.element?oe=b.route.element:oe=N,k.createElement(qp,{match:b,routeContext:{outlet:N,matches:te,isDataRoute:s!=null},children:oe})};return s&&(b.route.ErrorBoundary||b.route.errorElement||U===0)?k.createElement(Xp,{location:s.location,revalidation:s.revalidation,component:A,error:P,children:ae(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):ae()},null)}var Kc=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(Kc||{}),Gc=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(Gc||{});function em(o){let c=k.useContext(Ia);return c||Re(!1),c}function tm(o){let c=k.useContext(Vp);return c||Re(!1),c}function nm(o){let c=k.useContext(Gt);return c||Re(!1),c}function Yc(o){let c=nm(),s=c.matches[c.matches.length-1];return s.route.id||Re(!1),s.route.id}function rm(){var o;let c=k.useContext(Hc),s=tm(),d=Yc();return c!==void 0?c:(o=s.errors)==null?void 0:o[d]}function lm(){let{router:o}=em(Kc.UseNavigateStable),c=Yc(Gc.UseNavigateStable),s=k.useRef(!1);return Qc(()=>{s.current=!0}),k.useCallback(function(p,g){g===void 0&&(g={}),s.current&&(typeof p=="number"?o.navigate(p):o.navigate(p,ul({fromRouteId:c},g)))},[o,c])}const zc={};function im(o,c,s){zc[o]||(zc[o]=!0)}function om(o,c){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Xc(o){let{to:c,replace:s,state:d,relative:p}=o;gr()||Re(!1);let{future:g,static:y}=k.useContext(kn),{matches:S}=k.useContext(Gt),{pathname:_}=Yt(),C=jn(),N=Ua(c,Da(S,g.v7_relativeSplatPath),_,p==="path"),b=JSON.stringify(N);return k.useEffect(()=>C(JSON.parse(b),{replace:s,state:d,relative:p}),[C,b,p,s,d]),null}function il(o){Re(!1)}function am(o){let{basename:c="/",children:s=null,location:d,navigationType:p=xn.Pop,navigator:g,static:y=!1,future:S}=o;gr()&&Re(!1);let _=c.replace(/^\/*/,"/"),C=k.useMemo(()=>({basename:_,navigator:g,static:y,future:ul({v7_relativeSplatPath:!1},S)}),[_,S,g,y]);typeof d=="string"&&(d=hr(d));let{pathname:N="/",search:b="",hash:U="",state:P=null,key:O="default"}=d,A=k.useMemo(()=>{let I=Fa(N,_);return I==null?null:{location:{pathname:I,search:b,hash:U,state:P,key:O},navigationType:p}},[_,N,b,U,P,O,p]);return A==null?null:k.createElement(kn.Provider,{value:C},k.createElement(Mi.Provider,{children:s,value:A}))}function sm(o){let{children:c,location:s}=o;return Jp(Pa(c),s)}new Promise(()=>{});function Pa(o,c){c===void 0&&(c=[]);let s=[];return k.Children.forEach(o,(d,p)=>{if(!k.isValidElement(d))return;let g=[...c,p];if(d.type===k.Fragment){s.push.apply(s,Pa(d.props.children,g));return}d.type!==il&&Re(!1),!d.props.index||!d.props.children||Re(!1);let y={id:d.props.id||g.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(y.children=Pa(d.props.children,g)),s.push(y)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},La.apply(this,arguments)}function um(o,c){if(o==null)return{};var s={},d=Object.keys(o),p,g;for(g=0;g<d.length;g++)p=d[g],!(c.indexOf(p)>=0)&&(s[p]=o[p]);return s}function cm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function dm(o,c){return o.button===0&&(!c||c==="_self")&&!cm(o)}const fm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],pm="6";try{window.__reactRouterVersion=pm}catch{}const mm="startTransition",Mc=up[mm];function hm(o){let{basename:c,children:s,future:d,window:p}=o,g=k.useRef();g.current==null&&(g.current=gp({window:p,v5Compat:!0}));let y=g.current,[S,_]=k.useState({action:y.action,location:y.location}),{v7_startTransition:C}=d||{},N=k.useCallback(b=>{C&&Mc?Mc(()=>_(b)):_(b)},[_,C]);return k.useLayoutEffect(()=>y.listen(N),[y,N]),k.useEffect(()=>om(d),[d]),k.createElement(am,{basename:c,children:s,location:S.location,navigationType:S.action,navigator:y,future:d})}const gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ym=k.forwardRef(function(c,s){let{onClick:d,relative:p,reloadDocument:g,replace:y,state:S,target:_,to:C,preventScrollReset:N,viewTransition:b}=c,U=um(c,fm),{basename:P}=k.useContext(kn),O,A=!1;if(typeof C=="string"&&vm.test(C)&&(O=C,gm))try{let oe=new URL(window.location.href),de=C.startsWith("//")?new URL(oe.protocol+C):new URL(C),xe=Fa(de.pathname,P);de.origin===oe.origin&&xe!=null?C=xe+de.search+de.hash:A=!0}catch{}let I=Wp(C,{relative:p}),te=xm(C,{replace:y,state:S,target:_,preventScrollReset:N,relative:p,viewTransition:b});function ae(oe){d&&d(oe),oe.defaultPrevented||te(oe)}return k.createElement("a",La({},U,{href:O||I,onClick:A||g?d:ae,ref:s,target:_}))});var Oc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Oc||(Oc={}));var Fc;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Fc||(Fc={}));function xm(o,c){let{target:s,replace:d,state:p,preventScrollReset:g,relative:y,viewTransition:S}=c===void 0?{}:c,_=jn(),C=Yt(),N=Jc(o,{relative:y});return k.useCallback(b=>{if(dm(b,s)){b.preventDefault();let U=d!==void 0?d:Pi(C)===Pi(N);_(o,{replace:U,state:p,preventScrollReset:g,relative:y,viewTransition:S})}},[C,_,N,d,p,s,o,g,y,S])}const qc=zi.createContext(null),Ba=document.createElement("div");Ba.id="root";document.body.appendChild(Ba);const Zc=document.createElement("style");Zc.textContent=`
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
`;document.head.appendChild(Zc);function ut(...o){return o.filter(Boolean).join(" ")}function vr(o){return u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o})}function wm(o){return u.jsxs(vr,{...o,children:[u.jsx("path",{d:"M12 5v14"}),u.jsx("path",{d:"M5 12h14"})]})}function ed(o){return u.jsx(vr,{...o,children:u.jsx("path",{d:"M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function td(o){return u.jsxs(vr,{...o,children:[u.jsx("path",{d:"m15 5 4 4"}),u.jsx("path",{d:"M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z"})]})}function nd(o){return u.jsx(vr,{...o,children:u.jsx("rect",{x:"6.25",y:"6.25",width:"11.5",height:"11.5",rx:"1.5",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.5"})})}function km(o){return u.jsxs(vr,{...o,children:[u.jsx("path",{d:"M19 12H5"}),u.jsx("path",{d:"m12 5-7 7 7 7"})]})}function jm(o){return u.jsxs(vr,{...o,children:[u.jsx("path",{d:"M12 4v10"}),u.jsx("path",{d:"m7.5 10.5 4.5 4.5 4.5-4.5"}),u.jsx("path",{d:"M4 20h16"})]})}async function ct(o,c){const s=await fetch(o,{credentials:"include",headers:{"Content-Type":"application/json",...(c==null?void 0:c.headers)||{}},...c});if(s.status===204)return;const p=(s.headers.get("content-type")||"").includes("application/json")?await s.json():await s.text();if(!s.ok){const g=typeof p=="object"&&p!==null&&"detail"in p?String(p.detail):s.statusText;throw new Error(g||"Request failed.")}return p}function ol(o){if(!o)return"Not available";const c=new Date(o);return Number.isNaN(c.getTime())?o:new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(c)}function fr(o){if(!Number.isFinite(o)||o<=0)return"0 B";const c=["B","KB","MB","GB","TB"];let s=o,d=0;for(;s>=1024&&d<c.length-1;)s/=1024,d+=1;return`${s.toFixed(s>=10||d===0?0:1)} ${c[d]}`}function rd(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1024**3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} GB`}function _m(o){return rd(o)}function Sm(o){if(!Number.isFinite(o)||!o||o<=0)return"No limit";const c=o/1e3;return`${c%1===0?c.toFixed(0):c.toFixed(1)} CPU`}function Ra(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1e3)}function Li(o){const c=o.trim();if(!c)return null;const s=Number(c);return!Number.isFinite(s)||s<=0?null:Math.round(s*1024**3)}function Ta(o){return Li(o)}function Dc(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1e3;return c%1===0?c.toFixed(0):c.toFixed(1)}function za(o){if(!Number.isFinite(o)||!o||o<=0)return"";const c=o/1024**3;return c%1===0?c.toFixed(0):c.toFixed(1)}function Uc(o){return za(o)}function Na(o){return!Number.isFinite(o)||!o||o<=0?"":o%1===0?o.toFixed(0):o.toFixed(1)}function Ei(o){return Number.isFinite(o)?`${Number(o).toFixed(1)}%`:"-"}function al(o){if(!o)return"-";const c=new Date(o).getTime();if(Number.isNaN(c))return"-";const s=Date.now()-c;if(s<0)return"Just now";const d=6e4,p=60*d,g=24*p;return s<p?`${Math.max(1,Math.floor(s/d))}m ago`:s<g?`${Math.floor(s/p)}h ago`:`${Math.floor(s/g)}d ago`}function pr(o){return Number.isFinite(o)?Number(o)>80?"metric-danger":Number(o)>60?"metric-warning":"metric-ok":""}function Ea(o){return Number.isFinite(o)?{"--metric-percent":Math.max(0,Math.min(100,Number(o)))}:void 0}function Ri(o,c){return!Number.isFinite(o)||!Number.isFinite(c)||!c||c<=0?null:Number(o)/Number(c)*100}function bm(o,c){if(!o)return"Not started";const s=new Date(o).getTime(),d=c?new Date(c).getTime():Date.now();if(Number.isNaN(s)||Number.isNaN(d)||d<s)return"Not available";const p=Math.floor((d-s)/1e3),g=Math.floor(p/3600),y=Math.floor(p%3600/60),S=p%60;return g>0?`${g}h ${y}m ${S}s`:y>0?`${y}m ${S}s`:`${S}s`}function Nm(o,c=200){return`/api/v1/jobs/${o}/log?lines=${c}`}function Em(o){return`/api/v1/jobs/${o}/log?full=true`}function Cm(o){return o.trim().replace(/[^a-zA-Z0-9._-]+/g,"-").replace(/^-+|-+$/g,"")||"job"}function Pm(o){return`${[o.project_id||"controller",o.job_type,o.job_id].map(Cm).join("__")}.log`}function Lm(o){return`/api/v1/projects/${encodeURIComponent(o)}/lockfile`}function Rm(o,c){return`/api/v1/projects/${encodeURIComponent(o)}/export?mode=${encodeURIComponent(c)}`}function Tm(o,c){return`bulletjournal_export_${o}_${c==="code_only"?"code":c==="code_and_data"?"code_and_data":"full"}.zip`}function zm(o){const c=o.headers.get("content-disposition")||"",s=c.match(/filename\*=UTF-8''([^;]+)/i);if(s)try{return decodeURIComponent(s[1])}catch{return s[1]}const d=c.match(/filename="([^"]+)"/i);if(d)return d[1];const p=c.match(/filename=([^;]+)/i);return p?p[1].trim():null}function ld(o){return o.status==="running"&&o.runtime.container_port!==null}function Mm(o){const c=Um(o);return c?c.split(/[_\s]+/).filter(Boolean).map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Unknown"}function Om(o){return o?o.slice(0,12):"Not running"}function Fm(o){return o.status==="succeeded"?"state-succeeded":o.status==="running"||o.status==="queued"?"state-running":o.status==="failed"?"state-failed":""}function Dm(o){return o.status.split(/[_\s]+/).filter(Boolean).map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ")}function Um(o){return o.status==="error"&&o.status_reason||o.status==="stopped"&&o.status_reason?o.status_reason:o.status}function Im(o){return o.has_active_job||o.status==="creating"||o.status==="installing"||o.status==="starting"||o.status==="stopping"||o.install_status==="installing"?"busy":o.status==="running"?"running":o.status==="error"||o.status_reason==="install_failed"||o.status_reason==="start_failed"||o.status_reason==="runtime_crashed"?"error":"stopped"}function id(o){return`state-${Im(o)}`}function od(o){const c=typeof o.metrics.cpu_percent=="number"?o.metrics.cpu_percent:null,s=Ri(o.metrics.memory_used_bytes??null,o.metrics.memory_limit_bytes??null),d=Ri(o.metrics.disk_used_bytes??null,o.limits.disk_soft_limit_bytes??null);return[{label:"Disk",value:fr(o.metrics.disk_used_bytes??0),tone:pr(d)},{label:"RAM",value:typeof o.metrics.memory_used_bytes=="number"?fr(o.metrics.memory_used_bytes):"-",tone:pr(s)},{label:"CPU",value:Ei(c),tone:pr(o.limits.cpu_limit_millis?c:null)}]}function Bm({systemInfo:o}){var y,S,_,C;const c=pr(o==null?void 0:o.metrics.cpu_percent),s=Ri(((y=o==null?void 0:o.metrics.memory)==null?void 0:y.used_bytes)??null,((S=o==null?void 0:o.metrics.memory)==null?void 0:S.total_bytes)??null),d=Ri(((_=o==null?void 0:o.metrics.disk)==null?void 0:_.used_bytes)??null,((C=o==null?void 0:o.metrics.disk)==null?void 0:C.total_bytes)??null),p=o!=null&&o.metrics.disk?`${fr(o.metrics.disk.used_bytes)} / ${fr(o.metrics.disk.total_bytes)}`:"Not available",g=o!=null&&o.metrics.memory?`${fr(o.metrics.memory.used_bytes)} / ${fr(o.metrics.memory.total_bytes)}`:"Not available";return u.jsxs("div",{className:"footer-metrics",children:[u.jsxs("span",{className:ut("footer-metric","has-tooltip",pr(d)),style:Ea(d),tabIndex:0,children:[u.jsx("span",{className:"muted",children:"Disk"}),u.jsx("strong",{children:Ei(d)}),u.jsx("span",{className:"footer-metric-tooltip",children:p})]}),u.jsxs("span",{className:ut("footer-metric","has-tooltip",pr(s)),style:Ea(s),tabIndex:0,children:[u.jsx("span",{className:"muted",children:"RAM"}),u.jsx("strong",{children:Ei(s)}),u.jsx("span",{className:"footer-metric-tooltip",children:g})]}),u.jsxs("span",{className:ut("footer-metric",c),style:Ea(o==null?void 0:o.metrics.cpu_percent),children:[u.jsx("span",{className:"muted",children:"CPU"}),u.jsx("strong",{children:Ei(o==null?void 0:o.metrics.cpu_percent)})]})]})}function ad(o){return o.status==="running"?{label:"Stop",action:"stop",className:"button-status-stop",disabled:!1}:o.status==="creating"?{label:"Creating...",action:null,className:"button-neutral",disabled:!0}:o.status==="installing"?{label:"Installing...",action:null,className:"button-neutral",disabled:!0}:o.status==="starting"?{label:"Starting...",action:null,className:"button-neutral",disabled:!0}:o.status==="stopping"?{label:"Stopping...",action:null,className:"button-neutral",disabled:!0}:{label:"Start",action:"start",className:"button-status-start",disabled:!1}}function sd(o,c,s){return!c||c.jobId&&!s.includes(c.jobId)||c.action==="start"&&o.status!=="stopped"&&o.status!=="error"||c.action==="stop"&&o.status!=="running"?o:{...o,status:c.action==="start"?"starting":"stopping",status_reason:null}}function mr(o){return o.last_edit_at||o.created_at}function Am(o,c){if(o.has_active_job!==c.has_active_job)return o.has_active_job?-1:1;const s=new Date(mr(o)).getTime(),d=new Date(mr(c)).getTime(),p=Number.isNaN(s)?0:s,g=Number.isNaN(d)?0:d;return p!==g?g-p:o.project_id.localeCompare(c.project_id)}function Ti(o){return o==="queued"||o==="running"}function Oi(o){return o instanceof DOMException&&o.name==="AbortError"}function Un(o){const c=k.useRef(o);return k.useEffect(()=>{c.current=o},[o]),c}function $m(o,c){return o.length<=c?o:o.slice(o.length-c)}function Vm({job:o,downloading:c,onDownload:s}){const[d,p]=k.useState(""),[g,y]=k.useState(0),S=Un(o),_=k.useRef(null),C=160,N=Ti(o.status)?[o.job_id]:[],b=k.useCallback(async P=>{try{const A=await(await fetch(Nm(S.current.job_id,C),{credentials:"include",signal:P})).text();p(A.trim())}catch(O){Oi(O)||p("")}},[S]);if(k.useEffect(()=>{const P=new AbortController;return b(P.signal),()=>P.abort()},[o.job_id,b]),Aa(N,k.useCallback((P,O)=>{if(P.job_id===o.job_id){if((O==null?void 0:O.type)==="job.log"){const A=typeof O.line=="string"?O.line:"";if(!A)return;p(I=>$m([...I?I.split(`
`):[],A],C).join(`
`));return}if(!Ti(P.status)){const A=new AbortController;b(A.signal)}}},[o.job_id,b])),k.useEffect(()=>{const P=_.current;if(!P)return;const O=()=>{const I=P.scrollHeight>P.clientHeight+1?Math.max(0,P.offsetWidth-P.clientWidth):0;y(te=>te===I?te:I)};if(O(),typeof ResizeObserver>"u")return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O);const A=new ResizeObserver(()=>{O()});return A.observe(P),()=>{A.disconnect()}},[d]),!d)return null;const U={"--job-log-scrollbar-width":`${g}px`};return u.jsxs("div",{className:"job-log-preview",style:U,children:[s?u.jsx("button",{className:"job-log-download",type:"button","aria-label":c?"Downloading log":"Download log",title:c?"Downloading log":"Download full log",disabled:!!c,onClick:()=>{s(o)},children:u.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M8 2.5v7"}),u.jsx("path",{d:"m5.25 7.75 2.75 2.75 2.75-2.75"}),u.jsx("path",{d:"M3 13.5h10"})]})}):null,u.jsx("div",{className:"job-log-frame",children:u.jsx("pre",{ref:_,children:d})})]})}function Fi(){const o=zi.useContext(qc);if(!o)throw new Error("App context is unavailable.");return o}function ud(o,c,s,d){const p=k.useRef(o);k.useEffect(()=>{p.current=o},[o]),k.useEffect(()=>{if(c===null)return;let g=!1,y=null,S=null,_=!1,C=!1;const N=()=>document.hidden?(d==null?void 0:d.hiddenDelay)??c:c,b=O=>{g||O===null||O===void 0||(y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{y=null,U()},O))},U=async()=>{if(!(g||_)){_=!0,S=new AbortController;try{await p.current(S.signal),g||b(N())}catch(O){if(!g&&!Oi(O)){const A=document.hidden?(d==null?void 0:d.hiddenDelay)??(d==null?void 0:d.errorDelay)??c:(d==null?void 0:d.errorDelay)??c;b(A)}}finally{_=!1,S=null,!g&&C&&!document.hidden&&(C=!1,b(0))}}},P=()=>{if(!document.hidden){if(_){C=!0;return}b(0)}};return document.addEventListener("visibilitychange",P),U(),()=>{g=!0,y!==null&&window.clearTimeout(y),document.removeEventListener("visibilitychange",P),S==null||S.abort()}},s)}function Aa(o,c){const s=k.useRef(c),d=k.useMemo(()=>Array.from(new Set(o)).sort().join("\0"),[o]);k.useEffect(()=>{s.current=c},[c]),k.useEffect(()=>{if(!d)return;const p=d.split("\0"),g=new Set(p),y=new AbortController;let S=!1;const _=new EventSource("/api/v1/events/jobs"),C=async()=>{const U=await Promise.allSettled(p.map(P=>ct(`/api/v1/jobs/${P}`,{signal:y.signal})));if(!S)for(const P of U)P.status==="fulfilled"&&s.current(P.value)},N=U=>{const P=U;try{const O=JSON.parse(P.data);if(!g.has(O.job_id))return;s.current({job_id:O.job_id,project_id:null,job_type:"",status:"running",requested_by_user_id:"",payload_json:"",result_json:null,log_path:"",created_at:"",started_at:null,finished_at:null,error_message:null},{type:"job.log",line:O.line})}catch{}},b=U=>{const P=U;try{const O=JSON.parse(P.data);g.has(O.job_id)&&s.current(O,{type:"job.updated"})}catch{}};return C(),_.addEventListener("job.log",N),_.addEventListener("job.updated",b),()=>{S=!0,y.abort(),_.removeEventListener("job.log",N),_.removeEventListener("job.updated",b),_.close()}},[d])}function Wm({children:o}){const[c,s]=k.useState(null),[d,p]=k.useState(!0),[g,y]=k.useState(()=>{const N=window.localStorage.getItem("bulletjournal-controller-theme");return N==="light"||N==="dark"||N==="system"?N:"system"}),S=k.useCallback(async()=>{try{const N=await ct("/api/v1/session/current",{method:"GET"});s(N)}catch{s({authenticated:!1,user:null})}finally{p(!1)}},[]),_=k.useCallback(async()=>{await ct("/api/v1/session/logout",{method:"POST"}),s({authenticated:!1,user:null})},[]);k.useEffect(()=>{S()},[S]),k.useEffect(()=>{const N=document.documentElement,b=window.matchMedia("(prefers-color-scheme: dark)");function U(){const P=g==="system"?b.matches?"dark":"light":g;N.dataset.theme=P,N.style.colorScheme=P}return U(),window.localStorage.setItem("bulletjournal-controller-theme",g),b.addEventListener("change",U),()=>b.removeEventListener("change",U)},[g]);const C=k.useMemo(()=>({session:c,sessionLoading:d,refreshSession:S,signOut:_,themeMode:g,setThemeMode:y}),[S,c,d,_,g]);return u.jsx(qc.Provider,{value:C,children:o})}function Ic({children:o}){const{session:c,sessionLoading:s}=Fi(),d=Yt();return s?u.jsx("div",{className:"loading-screen",children:u.jsxs("div",{className:"loading-card",children:[u.jsx("h2",{children:"Preparing your controller workspace"}),u.jsx("p",{className:"section-copy",children:"Checking authentication and restoring the current controller session."})]})}):c!=null&&c.authenticated?u.jsx(u.Fragment,{children:o}):u.jsx(Xc,{to:"/login",replace:!0,state:{from:d.pathname}})}function Hm(){const{session:o,refreshSession:c}=Fi(),s=jn(),d=Yt(),[p,g]=k.useState(""),[y,S]=k.useState(""),[_,C]=k.useState(null),[N,b]=k.useState(!1);k.useEffect(()=>{o!=null&&o.authenticated&&s("/",{replace:!0})},[s,o]);async function U(P){P.preventDefault(),b(!0),C(null);try{await ct("/api/v1/session/login",{method:"POST",body:JSON.stringify({username:p,password:y})}),await c();const O=typeof d.state=="object"&&d.state&&"from"in d.state?String(d.state.from||"/"):"/";s(O||"/",{replace:!0})}catch(O){C(O instanceof Error?O.message:"Login failed.")}finally{b(!1)}}return u.jsx("div",{className:"login-shell",children:u.jsxs("section",{className:"login-panel",children:[u.jsx("h1",{children:"BulletJournal login"}),u.jsx("hr",{className:"login-divider"}),u.jsxs("form",{className:"layout-grid",onSubmit:U,children:[u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"username",children:"Username"}),u.jsx("input",{id:"username",value:p,onChange:P=>g(P.target.value),autoComplete:"username",required:!0})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"password",children:"Password"}),u.jsx("input",{id:"password",type:"password",value:y,onChange:P=>S(P.target.value),autoComplete:"current-password",required:!0})]}),_?u.jsx("div",{className:"error-banner",children:_}):null,u.jsx("div",{className:"button-row",children:u.jsx("button",{className:"button",type:"submit",disabled:N,children:N?"Signing in...":"Login"})})]})]})})}function Qm(){const{session:o,signOut:c,themeMode:s,setThemeMode:d}=Fi();jn();const[p,g]=k.useState(!1);return k.useEffect(()=>{if(!p)return;function y(){g(!1)}return window.addEventListener("click",y),()=>window.removeEventListener("click",y)},[p]),u.jsxs("div",{className:"footer-theme",children:[u.jsx("button",{className:"theme-trigger",type:"button","aria-label":"Switch theme","aria-haspopup":"menu","aria-expanded":p,onClick:y=>{y.stopPropagation(),g(S=>!S)},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",width:"18",height:"18",children:[u.jsx("path",{d:"M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"}),u.jsx("path",{d:"M7.5 10.5h.01"}),u.jsx("path",{d:"M9.5 7.5h.01"}),u.jsx("path",{d:"M14.5 7.5h.01"}),u.jsx("path",{d:"M16.5 10.5h.01"})]})}),p?u.jsx("div",{className:"theme-popover",role:"menu",onClick:y=>y.stopPropagation(),children:["light","dark","system"].map(y=>u.jsx("button",{className:ut("theme-option",s===y&&"active"),type:"button",role:"menuitemradio","aria-checked":s===y,onClick:()=>{d(y),g(!1)},children:y==="light"?"Light":y==="dark"?"Dark":"System"},y))}):null]})}function Ci({children:o,footerMetrics:c=null}){var g,y,S;const{session:s,signOut:d}=Fi(),p=jn();return u.jsxs("div",{className:"app-shell",children:[o,u.jsxs("footer",{className:"app-footer",children:[u.jsxs("div",{className:"footer-left",children:[u.jsxs("div",{className:"footer-session",children:[u.jsx("span",{className:"muted",children:"Signed in as"}),u.jsx("strong",{children:((g=s==null?void 0:s.user)==null?void 0:g.display_name)||((y=s==null?void 0:s.user)==null?void 0:y.username)||"Unknown user"}),u.jsxs("span",{className:"muted",children:["(",((S=s==null?void 0:s.user)==null?void 0:S.username)||"unknown",")"]})]}),u.jsx("button",{className:"logout-link",type:"button",onClick:async()=>{await d(),p("/login",{replace:!0})},children:"Logout"})]}),u.jsxs("div",{className:"footer-right",children:[c,u.jsx(Qm,{})]})]})]})}function Jm(){const[o,c]=k.useState([]),[s,d]=k.useState(null),[p,g]=k.useState(!0),[y,S]=k.useState(null),[_,C]=k.useState(null),[N,b]=k.useState([]),[U,P]=k.useState({}),[O,A]=k.useState({}),[I,te]=k.useState([]),[ae,oe]=k.useState(!1),de=jn(),xe=Yt(),Te=Un(O),ke=k.useCallback(async W=>{try{const[Z,K]=await Promise.all([ct("/api/v1/projects",{signal:W}),ct("/api/v1/system/info",{signal:W})]);c(Z),d(K),te(Y=>Y.filter(le=>Z.some(fe=>fe.project_id===le))),S(null)}catch(Z){Oi(Z)||S(Z instanceof Error?Z.message:"Failed to load dashboard.")}finally{g(!1)}},[]);ud(W=>ke(W),N.length>0?5e3:15e3,[N.length,ke],{hiddenDelay:6e4,errorDelay:15e3}),k.useEffect(()=>{if(!xe.state||typeof xe.state!="object")return;const W=xe.state,Z=typeof W.archivedProjectId=="string"?W.archivedProjectId:null,K=typeof W.archiveJobId=="string"?W.archiveJobId:null,Y=typeof W.deletedProjectId=="string"?W.deletedProjectId:null,le=typeof W.deleteJobId=="string"?W.deleteJobId:null,fe=Z||Y,D=K||le,G=K?"archive":le?"delete":null;!fe||!D||!G||(te(B=>Array.from(new Set([...B,fe]))),A(B=>({...B,[D]:{projectId:fe,verb:G}})),b(B=>Array.from(new Set([...B,D]))),ke(),de(xe.pathname,{replace:!0,state:null}))},[ke,xe.pathname,xe.state,de]);const Ae=k.useCallback(W=>{if(Ti(W.status)){b(K=>K.includes(W.job_id)?K:[...K,W.job_id]);return}b(K=>K.filter(Y=>Y!==W.job_id));const Z=Te.current[W.job_id];Z&&(A(K=>{const Y={...K};return delete Y[W.job_id],Y}),W.status!=="succeeded"&&(te(K=>K.filter(Y=>Y!==Z.projectId)),C(W.error_message||`Failed to ${Z.verb} project ${Z.projectId}.`))),ke()},[ke]);Aa(N,Ae),k.useEffect(()=>{P(W=>{const Z=Object.entries(W).filter(([,K])=>!K.jobId||N.includes(K.jobId));return Z.length===Object.keys(W).length?W:Object.fromEntries(Z)})},[N]);const Qe=k.useMemo(()=>o.filter(W=>!I.includes(W.project_id)).map(W=>sd(W,U[W.project_id]||null,N)).sort(Am),[N,I,U,o]),tt=k.useMemo(()=>{const W={Running:[],Stopped:[],Error:[]};for(const Z of Qe)Z.status==="running"||Z.status==="starting"||Z.status==="stopping"?W.Running.push(Z):Z.status==="error"?W.Error.push(Z):W.Stopped.push(Z);return W},[Qe]);async function dt(W,Z){P(K=>({...K,[W]:{action:Z}}));try{C(null);const K=await ct(`/api/v1/projects/${W}/${Z}`,{method:"POST"});K.job?(P(Y=>({...Y,[W]:{action:Z,jobId:K.job.job_id}})),b(Y=>Array.from(new Set([...Y,K.job.job_id])))):P(Y=>{const le={...Y};return delete le[W],le}),K.already_running&&(P(Y=>{const le={...Y};return delete le[W],le}),C("Project is already running.")),K.already_stopped&&(P(Y=>{const le={...Y};return delete le[W],le}),C("Project is already stopped.")),await ke()}catch(K){P(Y=>{const le={...Y};return delete le[W],le}),C(K instanceof Error?K.message:`Failed to ${Z} project.`)}}return u.jsxs(Ci,{footerMetrics:u.jsx(Bm,{systemInfo:s}),children:[y?u.jsx("div",{className:"error-banner",children:y}):null,_?u.jsx("div",{className:"error-banner",children:_}):null,u.jsx("div",{className:"dashboard-grid",children:u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsxs("div",{className:"panel-head-row",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"BulletJournal projects"}),N.length>0?u.jsxs("span",{className:"muted",children:["Watching ",N.length," active job",N.length===1?"":"s"]}):null]}),u.jsxs("button",{className:"button",type:"button",onClick:()=>oe(!0),children:[u.jsx(wm,{width:22,height:22}),u.jsx("span",{children:"New project"})]})]})}),u.jsxs("div",{className:"panel-body",children:[p?u.jsx("div",{className:"empty-state",children:"Loading projects..."}):null,u.jsx("div",{className:"group-list",children:["Running","Stopped","Error"].map(W=>{const Z=tt[W];return u.jsxs("section",{children:[u.jsxs("div",{className:"group-header",children:[u.jsxs("div",{className:"group-header-title",children:[u.jsx("h3",{children:W}),u.jsx("div",{className:"group-header-divider","aria-hidden":"true"})]}),u.jsxs("span",{className:"muted",children:[Z.length," project",Z.length===1?"":"s"]})]}),Z.length===0?u.jsx("div",{className:"empty-state",children:"No projects currently in this group."}):u.jsx("div",{className:"project-cards",children:Z.map(K=>{const Y=ad(K),le=od(K),fe=Y.label==="Start"||Y.label==="Stop"||Y.label==="Starting..."||Y.label==="Stopping...";return u.jsxs("article",{className:ut("project-card",id(K)),children:[u.jsx("div",{className:"project-card-header",children:u.jsxs("div",{className:"project-card-top",children:[u.jsx("h4",{children:K.project_id}),u.jsx("hr",{className:"project-card-divider"})]})}),u.jsxs("div",{className:"meta-grid",children:[u.jsx("div",{className:"metrics-row",children:le.map(D=>u.jsxs("div",{className:ut("meta-item","metric-chip",D.tone),children:[u.jsx("span",{children:D.label}),u.jsx("strong",{children:D.value})]},D.label))}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Last edit"}),u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:al(mr(K))}),u.jsx("span",{className:"muted",children:ol(mr(K))})]})]})]}),u.jsxs("div",{className:"quick-actions",children:[ld(K)?u.jsx("a",{className:"button-open icon-action",href:`/p/${K.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:u.jsx(td,{width:18,height:18})}):null,u.jsx("button",{className:ut(Y.className,fe&&"icon-action"),type:"button",disabled:Y.disabled,"aria-label":Y.label,title:Y.label,onClick:()=>{Y.action&&dt(K.project_id,Y.action)},children:fe?u.jsxs(u.Fragment,{children:[Y.action==="start"||Y.label==="Starting..."?u.jsx(ed,{width:18,height:18}):null,Y.action==="stop"||Y.label==="Stopping..."?u.jsx(nd,{width:18,height:18}):null]}):Y.label}),u.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Project details",title:"Project details",onClick:()=>de(`/projects/${K.project_id}`),children:u.jsx("span",{className:"info-glyph","aria-hidden":"true",children:"i"})})]})]},K.project_id)})})]},W)})})]})]})}),ae&&s?u.jsx(Km,{systemInfo:s,onClose:()=>oe(!1)}):null]})}function Km({systemInfo:o,onClose:c}){const s=jn(),d=o.gpu_supported,[p,g]=k.useState({project_id:"",custom_requirements_text:o.default_dependencies_text,cpu_limit_input:Na(o.default_cpu_limit_cpus),memory_limit_input:Na(o.default_memory_limit_gb),disk_soft_limit_input:Na(o.default_disk_soft_limit_gb),gpu_enabled:d}),[y,S]=k.useState(!1),[_,C]=k.useState(null),[N,b]=k.useState(!1);async function U(P){P.preventDefault(),S(!0),C(null);try{const O=await ct("/api/v1/projects",{method:"POST",body:JSON.stringify({project_id:p.project_id,custom_requirements_text:p.custom_requirements_text,cpu_limit_millis:Ra(p.cpu_limit_input),memory_limit_bytes:Li(p.memory_limit_input),disk_soft_limit_bytes:Ta(p.disk_soft_limit_input),gpu_enabled:p.gpu_enabled})});s(`/projects/${O.project.project_id}`,{state:{createdProjectId:O.project.project_id,createJobId:O.job.job_id}})}catch(O){C(O instanceof Error?O.message:"Failed to create project.")}finally{S(!1)}}return u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{y||c()},children:u.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true",onClick:P=>P.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("div",{children:u.jsx("h2",{children:"New BulletJournal project"})}),u.jsx("button",{className:"close-button",type:"button",onClick:c,"aria-label":"Close dialog",disabled:y,children:"×"})]}),u.jsx("div",{className:"modal-body",children:u.jsxs("form",{className:"layout-grid",onSubmit:U,children:[u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-project-id",children:"Project id"}),u.jsx("input",{id:"create-project-id",value:p.project_id,onChange:P=>g(O=>({...O,project_id:P.target.value})),placeholder:"study-a",required:!0})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"create-dependencies",children:"Dependency text"}),u.jsx("textarea",{id:"create-dependencies",value:p.custom_requirements_text,onChange:P=>g(O=>({...O,custom_requirements_text:P.target.value}))})]}),u.jsxs("div",{className:"field-full collapsible-panel",children:[u.jsxs("button",{className:"button-secondary section-toggle",type:"button",onClick:()=>b(P=>!P),children:[u.jsxs("span",{className:"status-stack",children:[u.jsx("strong",{children:"Runtime limits"}),u.jsxs("span",{className:"muted",children:["CPU ",Sm(Ra(p.cpu_limit_input))," · Memory ",rd(Li(p.memory_limit_input))," · Disk ",_m(Ta(p.disk_soft_limit_input))," · GPU ",p.gpu_enabled?"On":"Off"]})]}),u.jsx("span",{children:N?"Hide":"Edit"})]}),N?u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-cpu",children:"CPU limit (CPUs)"}),u.jsx("input",{id:"create-cpu",type:"number",min:0,step:"0.1",value:p.cpu_limit_input,onChange:P=>g(O=>({...O,cpu_limit_input:P.target.value})),placeholder:"Unlimited"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-memory",children:"Memory limit (GB)"}),u.jsx("input",{id:"create-memory",type:"number",min:0,step:"0.1",value:p.memory_limit_input,onChange:P=>g(O=>({...O,memory_limit_input:P.target.value})),placeholder:"Unlimited"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"create-disk",children:"Disk soft limit (GB)"}),u.jsx("input",{id:"create-disk",type:"number",min:0,step:"0.1",value:p.disk_soft_limit_input,onChange:P=>g(O=>({...O,disk_soft_limit_input:P.target.value})),placeholder:"Unlimited"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"GPU access"}),u.jsxs("div",{className:ut("checkbox-row",!d&&"is-disabled"),children:[u.jsx("input",{id:"create-gpu",type:"checkbox",checked:p.gpu_enabled,onChange:P=>g(O=>({...O,gpu_enabled:P.target.checked})),disabled:!d}),u.jsxs("label",{htmlFor:"create-gpu",children:[u.jsx("span",{children:"Enable GPU"}),d?null:u.jsx("span",{className:"info-bubble","aria-label":"GPU not enabled on this instance","data-tooltip":"GPU not enabled on this instance",tabIndex:0,children:"i"})]})]})]})]}):null]})]}),_?u.jsx("div",{className:"error-banner",children:_}):null,u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:"button",type:"submit",disabled:y,children:y?"Queueing...":"Create Project"}),u.jsx("button",{className:"button-secondary",type:"button",onClick:c,disabled:y,children:"Cancel"})]})]})})]})})}function Gm({kind:o,projectId:c,submitting:s,typedProjectId:d,setTypedProjectId:p,onClose:g,onConfirm:y}){const S=o==="archive",_=S?"Archive project?":"Delete project?",C=S?"This project will be moved to the archive directory and will be removed from active projects. Archived projects can only be restored via a manual operation.":"This project will be permanently removed and cannot be restored.",N=S?"Archive project":"Delete project",b=S?"button-warning":"button-danger",U=s||d!==c;return u.jsx("div",{className:"modal-backdrop",role:"presentation",onClick:()=>{s||g()},children:u.jsxs("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"archive-project-title",onClick:P=>P.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsxs("div",{children:[u.jsx("h2",{id:"archive-project-title",children:_}),u.jsx("p",{className:"section-copy",children:C})]}),u.jsx("button",{className:"close-button",type:"button",onClick:g,"aria-label":"Close dialog",disabled:s,children:"×"})]}),u.jsx("div",{className:"modal-body",children:u.jsxs("div",{className:"layout-grid",children:[u.jsxs("div",{className:"field-full",children:[u.jsxs("label",{htmlFor:"project-removal-confirmation",children:["Type the project ID ",u.jsx("span",{className:"inline-project-id",children:c})," to proceed"]}),u.jsx("input",{id:"project-removal-confirmation",value:d,onChange:P=>p(P.target.value),autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,disabled:s})]}),u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:b,type:"button",onClick:y,disabled:U,children:s?`${N.split(" ")[0]}ing...`:N}),u.jsx("button",{className:"button-secondary",type:"button",onClick:g,disabled:s,children:"Cancel"})]})]})})]})})}function Ym(){const{projectId:c=""}=Qp(),s=jn(),d=Yt(),p=k.useRef(null),[g,y]=k.useState(null),[S,_]=k.useState(!0),[C,N]=k.useState(null),[b,U]=k.useState([]),[P,O]=k.useState(null),[A,I]=k.useState({custom_requirements_text:"",mark_all_artifacts_stale:!0,restart_if_running:!0}),[te,ae]=k.useState({cpu_limit_input:"",memory_limit_input:"",disk_soft_limit_input:"",gpu_enabled:!1}),[oe,de]=k.useState(!1),[xe,Te]=k.useState(!1),[ke,Ae]=k.useState(!1),[Qe,tt]=k.useState(!1),[dt,W]=k.useState(!1),[Z,K]=k.useState(""),[Y,le]=k.useState(null),[fe,D]=k.useState(!1),[G,B]=k.useState(!1),[v,L]=k.useState(null),[ne,re]=k.useState([]),[se,ue]=k.useState(!1),[ve,he]=k.useState(!1),[we,Me]=k.useState(!1),[Xe,In]=k.useState(null),[qe,Bn]=k.useState(null),It=!!g&&A.custom_requirements_text!==g.custom_requirements_text,yr=Un(c),An=Un(It),xr=Un(ve),Tt=Un(dt),Xt=Un(we),gt=k.useCallback(async E=>{try{const T=await ct(`/api/v1/projects/${yr.current}`,{signal:E});if(Tt.current)return;y(T),!An.current&&!xr.current&&I(ce=>({custom_requirements_text:T.custom_requirements_text,mark_all_artifacts_stale:ce.mark_all_artifacts_stale,restart_if_running:ce.restart_if_running})),Xt.current||ae({cpu_limit_input:Dc(T.limits.cpu_limit_millis),memory_limit_input:za(T.limits.memory_limit_bytes),disk_soft_limit_input:Uc(T.limits.disk_soft_limit_bytes),gpu_enabled:T.limits.gpu_enabled}),N(null)}catch(T){!Oi(T)&&!Tt.current&&N(T instanceof Error?T.message:"Failed to load project.")}finally{Tt.current||_(!1)}},[An,xr,Tt,Xt,yr]);ud(E=>gt(E),It||ve||we||dt?null:b.length>0?5e3:15e3,[b.length,It,ve,gt,dt,we],{hiddenDelay:6e4,errorDelay:15e3}),k.useEffect(()=>{ue(!1)},[c]),k.useEffect(()=>{if(!d.state||typeof d.state!="object")return;const E=d.state,T=typeof E.createdProjectId=="string"?E.createdProjectId:null,ce=typeof E.createJobId=="string"?E.createJobId:null;T!==c||!ce||(U(De=>Array.from(new Set([...De,ce]))),s(d.pathname,{replace:!0,state:null}))},[d.pathname,d.state,s,c]),k.useEffect(()=>{!(P!=null&&P.jobId)||b.includes(P.jobId)||O(null)},[b,P]),k.useEffect(()=>{if((Xe==null?void 0:Xe.tone)!=="success")return;const E=window.setTimeout(()=>{In(T=>(T==null?void 0:T.tone)==="success"?null:T)},3500);return()=>window.clearTimeout(E)},[Xe]),k.useEffect(()=>{if((qe==null?void 0:qe.tone)!=="success")return;const E=window.setTimeout(()=>{Bn(T=>(T==null?void 0:T.tone)==="success"?null:T)},3500);return()=>window.clearTimeout(E)},[qe]),k.useEffect(()=>{if(!G)return;function E(T){var ce;(ce=p.current)!=null&&ce.contains(T.target)||B(!1)}return window.addEventListener("click",E),()=>window.removeEventListener("click",E)},[G]);const wr=k.useCallback(E=>{if(Ti(E.status)){U(T=>T.includes(E.job_id)?T:[...T,E.job_id]);return}U(T=>T.filter(ce=>ce!==E.job_id)),he(!1),!Tt.current&&gt()},[gt,Tt]);Aa(b,wr);async function cl(E){O({action:E});try{const T=await ct(`/api/v1/projects/${c}/${E}`,{method:"POST"});T.job?(O({action:E,jobId:T.job.job_id}),U(ce=>Array.from(new Set([...ce,T.job.job_id])))):T.already_running?(O(null),N("Project is already running.")):T.already_stopped?(O(null),N("Project is already stopped.")):O(null),await gt()}catch(T){O(null),N(T instanceof Error?T.message:`Failed to ${E}.`)}}async function dl(E){E.preventDefault(),de(!0),N(null);const T=It;try{const ce=await ct(`/api/v1/projects/${c}/${T?"update-environment":"reinstall-environment"}`,{method:"POST",body:JSON.stringify(T?A:{restart_if_running:A.restart_if_running,mark_all_artifacts_stale:A.mark_all_artifacts_stale})});if(!ce.job)throw new Error("Environment action did not return a queued job.");const De=ce.job;U(nt=>Array.from(new Set([...nt,De.job_id]))),T&&he(!0),In({tone:"success",message:"Saved"})}catch(ce){In(null),N(ce instanceof Error?ce.message:"Failed to queue environment action.")}finally{de(!1)}}async function fl(E){E.preventDefault(),Te(!0),N(null);try{const T=await ct(`/api/v1/projects/${c}/limits`,{method:"POST",body:JSON.stringify({cpu_limit_millis:Ra(te.cpu_limit_input),memory_limit_bytes:Li(te.memory_limit_input),disk_soft_limit_bytes:Ta(te.disk_soft_limit_input),gpu_enabled:te.gpu_enabled})});y(T),ae({cpu_limit_input:Dc(T.limits.cpu_limit_millis),memory_limit_input:za(T.limits.memory_limit_bytes),disk_soft_limit_input:Uc(T.limits.disk_soft_limit_bytes),gpu_enabled:T.limits.gpu_enabled}),Me(!1),Bn({tone:"success",message:"Saved"})}catch(T){N(T instanceof Error?T.message:"Failed to update limits.")}finally{Te(!1)}}async function pl(){W(!0),Ae(!0);try{const E=await ct(`/api/v1/projects/${c}`,{method:"DELETE"});E.job&&U(T=>T.filter(ce=>ce!==E.job.job_id)),D(!1),le(null),K(""),s("/",{replace:!0,state:E.job?{deletedProjectId:c,deleteJobId:E.job.job_id}:null})}catch(E){W(!1),N(E instanceof Error?E.message:"Failed to delete project.")}finally{Ae(!1)}}async function kr(){W(!0),tt(!0),N(null);try{const E=await ct(`/api/v1/projects/${c}/archive`,{method:"POST"});E.job&&U(T=>T.filter(ce=>ce!==E.job.job_id)),D(!1),le(null),K(""),s("/",{replace:!0,state:E.job?{archivedProjectId:c,archiveJobId:E.job.job_id}:null})}catch(E){W(!1),N(E instanceof Error?E.message:"Failed to archive project.")}finally{tt(!1)}}async function $n(E){re(T=>T.includes(E.job_id)?T:[...T,E.job_id]);try{const T=await fetch(Em(E.job_id),{credentials:"include"});if(!T.ok)throw new Error(`Failed to download log (${T.status}).`);const ce=await T.text(),De=new Blob([ce],{type:"text/plain;charset=utf-8"}),nt=window.URL.createObjectURL(De),Ve=document.createElement("a");Ve.href=nt,Ve.download=Pm(E),document.body.appendChild(Ve),Ve.click(),Ve.remove(),window.URL.revokeObjectURL(nt)}catch(T){N(T instanceof Error?T.message:"Failed to download job log.")}finally{re(T=>T.filter(ce=>ce!==E.job_id))}}async function ml(){N(null);try{const E=await fetch(Lm(c),{credentials:"include"});if(!E.ok){const Ve=(E.headers.get("content-type")||"").includes("application/json")?await E.json():await E.text(),zt=typeof Ve=="object"&&Ve!==null&&"detail"in Ve?String(Ve.detail):E.statusText;throw new Error(zt||"Failed to download lockfile.")}const T=await E.blob(),ce=window.URL.createObjectURL(T),De=document.createElement("a");De.href=ce,De.download=`${c}__uv.lock`,document.body.appendChild(De),De.click(),De.remove(),window.URL.revokeObjectURL(ce)}catch(E){N(E instanceof Error?E.message:"Failed to download lockfile.")}}async function Bt(E){N(null),L(E);try{const T=await fetch(Rm(c,E),{credentials:"include"});if(!T.ok){const zt=(T.headers.get("content-type")||"").includes("application/json")?await T.json():await T.text(),Sn=typeof zt=="object"&&zt!==null&&"detail"in zt?String(zt.detail):T.statusText;throw new Error(Sn||"Failed to export project.")}const ce=await T.blob(),De=window.URL.createObjectURL(ce),nt=document.createElement("a");nt.href=De,nt.download=zm(T)||Tm(c,E),document.body.appendChild(nt),nt.click(),nt.remove(),window.URL.revokeObjectURL(De),B(!1)}catch(T){N(T instanceof Error?T.message:"Failed to export project.")}finally{L(null)}}if(S)return u.jsx(Ci,{children:u.jsx("div",{className:"empty-state",children:"Loading project details..."})});if(!g)return u.jsx(Ci,{children:u.jsx("div",{className:"error-banner",children:C||"Project was not found."})});const pe=sd(g,P,b),$e=ad(pe),hl=It?"Save and reinstall":"Reinstall environment",gl=It?"Saving and reinstalling...":"Queueing reinstall...",Di=od(pe),Vn=$e.label==="Start"||$e.label==="Stop"||$e.label==="Starting..."||$e.label==="Stopping...",jr=pe.status==="running"||pe.status==="starting"?"Started at":"Stopped at",_n=pe.status==="running"||pe.status==="starting"?pe.runtime.runtime_started_at:pe.runtime.runtime_stopped_at,St=pe.status==="running"||pe.status==="starting"||pe.status==="stopping",_r=(Xe==null?void 0:Xe.tone)==="success"?"Saved":oe?gl:hl,qt=(qe==null?void 0:qe.tone)==="success"?"Saved":xe?"Saving...":"Save limits",vt=pe.recent_jobs||[],vl=se?vt:vt.slice(0,5),yl=vt.length>5&&!se;return u.jsxs(Ci,{children:[u.jsx("div",{className:"topbar",children:u.jsxs("div",{className:"nav-pills",children:[u.jsx(ym,{className:"pill-link button-back",to:"/","aria-label":"Back to dashboard",title:"Back to dashboard",children:u.jsx(km,{width:18,height:18})}),b.length>0?u.jsxs("span",{className:"badge",children:["Watching ",b.length," active job",b.length===1?"":"s"]}):null]})}),C?u.jsx("div",{className:"error-banner",children:C}):null,u.jsxs("div",{className:"project-detail-stack",children:[u.jsxs("section",{className:ut("project-detail-card",id(pe)),children:[u.jsxs("div",{className:"project-detail-header",children:[u.jsx("div",{className:"project-detail-title",children:u.jsx("h2",{children:pe.project_id})}),u.jsx("div",{className:"project-detail-status",children:u.jsx("strong",{children:Mm(pe)})})]}),u.jsxs("div",{className:"quick-actions",children:[ld(pe)?u.jsx("a",{className:"button-open icon-action",href:`/p/${pe.project_id}/`,target:"_blank",rel:"noreferrer","aria-label":"Open project",title:"Open project",children:u.jsx(td,{width:18,height:18})}):null,u.jsx("button",{className:ut($e.className,Vn&&"icon-action"),type:"button",disabled:$e.disabled,"aria-label":$e.label,title:$e.label,onClick:()=>{$e.action&&cl($e.action)},children:Vn?u.jsxs(u.Fragment,{children:[$e.action==="start"||$e.label==="Starting..."?u.jsx(ed,{width:18,height:18}):null,$e.action==="stop"||$e.label==="Stopping..."?u.jsx(nd,{width:18,height:18}):null]}):$e.label})]}),u.jsx("div",{className:"metrics-row",children:Di.map(E=>u.jsxs("div",{className:ut("meta-item","metric-chip",E.tone),children:[u.jsx("span",{children:E.label}),u.jsx("strong",{children:E.value})]},E.label))}),u.jsxs("div",{className:"summary-grid",children:[u.jsxs("div",{className:"summary-block compact",children:[u.jsx("h3",{children:"Last edit"}),u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:al(mr(pe))}),u.jsx("span",{className:"muted",children:ol(mr(pe))})]})]}),u.jsxs("div",{className:"summary-block compact",children:[u.jsx("h3",{children:"Last run"}),pe.last_run_finished_at?u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:al(pe.last_run_finished_at)}),u.jsx("span",{className:"muted",children:ol(pe.last_run_finished_at)})]}):u.jsx("strong",{children:"-"})]})]})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Project environment"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("form",{className:"project-env-grid",onSubmit:dl,children:[u.jsx("div",{className:"environment-overview-card",children:u.jsxs("div",{className:"summary-grid",children:[u.jsxs("div",{className:"summary-block compact",children:[u.jsx("span",{className:"detail-label",children:"Python version"}),u.jsx("div",{className:"detail-value mono-copy",children:pe.python_version})]}),u.jsx("div",{className:"summary-block compact",children:u.jsxs("div",{className:"lockfile-row compact",children:[u.jsxs("div",{className:"lockfile-meta",children:[u.jsx("span",{className:"lockfile-label",children:"Current lockfile SHA"}),u.jsx("code",{className:"mono-copy detail-value",children:pe.lock_sha256||"Not recorded yet"})]}),u.jsx("button",{className:"button-secondary icon-action",type:"button","aria-label":"Download lockfile",title:"Download lockfile",onClick:()=>{ml()},children:u.jsx(jm,{width:18,height:18})})]})})]})}),u.jsxs("div",{className:"field-grid",children:[u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"env-custom",children:"Requirements"}),u.jsx("textarea",{id:"env-custom",value:A.custom_requirements_text,onChange:E=>{I(T=>({...T,custom_requirements_text:E.target.value}))}})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Restart behavior"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"env-restart",type:"checkbox",checked:A.restart_if_running,onChange:E=>{I(T=>({...T,restart_if_running:E.target.checked}))}}),u.jsx("label",{htmlFor:"env-restart",children:"Restart if currently running"})]})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"Artifact invalidation"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"env-mark-stale",type:"checkbox",checked:A.mark_all_artifacts_stale,onChange:E=>{I(T=>({...T,mark_all_artifacts_stale:E.target.checked}))}}),u.jsx("label",{htmlFor:"env-mark-stale",children:"Mark artifacts stale after reinstall"})]})]})]}),u.jsx("div",{className:"button-row",children:u.jsx("button",{className:ut((Xe==null?void 0:Xe.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:oe,children:_r})})]})})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Container info"})}),u.jsxs("div",{className:"panel-body layout-grid",children:[u.jsxs("div",{className:"detail-meta-grid",children:[u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Container name"}),u.jsx("div",{className:"detail-value mono-copy",children:pe.runtime.container_name||"Not running"})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Container id"}),u.jsx("div",{className:"detail-value mono-copy",children:Om(pe.runtime.container_id)})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:"Host port"}),u.jsx("div",{className:"detail-value mono-copy",children:pe.runtime.container_port??"Not running"})]}),u.jsxs("div",{className:"detail-row",children:[u.jsx("span",{className:"detail-label",children:jr}),_n?u.jsxs("div",{className:"timestamp-pair",children:[u.jsx("strong",{children:al(_n)}),u.jsx("span",{className:"muted",children:ol(_n)})]}):u.jsx("div",{className:"detail-value mono-copy",children:"-"})]})]}),u.jsxs("div",{className:"limits-card",children:[u.jsx("div",{className:"limits-card-header",children:u.jsx("div",{className:"status-stack",children:u.jsx("strong",{children:"Runtime limits"})})}),u.jsxs("form",{className:"field-grid",onSubmit:fl,children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-cpu",children:"CPU limit (CPUs)"}),u.jsx("input",{id:"limits-cpu",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.cpu_limit_input,onChange:E=>{Me(!0),ae(T=>({...T,cpu_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:St})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-memory",children:"Memory limit (GB)"}),u.jsx("input",{id:"limits-memory",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.memory_limit_input,onChange:E=>{Me(!0),ae(T=>({...T,memory_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:St})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"limits-disk",children:"Disk soft limit (GB)"}),u.jsx("input",{id:"limits-disk",className:"mono-copy",type:"number",min:0,step:"0.1",value:te.disk_soft_limit_input,onChange:E=>{Me(!0),ae(T=>({...T,disk_soft_limit_input:E.target.value}))},placeholder:"Unlimited",disabled:St})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{children:"GPU access"}),u.jsxs("div",{className:"checkbox-row",children:[u.jsx("input",{id:"limits-gpu",type:"checkbox",checked:te.gpu_enabled,onChange:E=>{Me(!0),ae(T=>({...T,gpu_enabled:E.target.checked}))},disabled:St}),u.jsx("label",{htmlFor:"limits-gpu",children:"Enable GPU if supported on the host"})]})]}),u.jsxs("div",{className:"button-row",children:[u.jsx("button",{className:ut(St?"button-neutral":(qe==null?void 0:qe.tone)==="success"?"button-saved":"button-open"),type:"submit",disabled:xe||St,children:qt}),St?u.jsx("span",{className:"inline-feedback subtle",children:"Runtime must be stopped before limits can change."}):null]})]})]})]})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Job history"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("div",{className:"jobs-list",children:[vt.length===0?u.jsx("div",{className:"empty-state",children:"No recent jobs recorded for this project yet."}):null,vl.map(E=>u.jsxs("article",{className:ut("job-row",Fm(E)),children:[u.jsxs("div",{className:"job-row-header",children:[u.jsxs("div",{className:"job-row-top",children:[u.jsx("strong",{children:E.job_type}),u.jsx("span",{className:"muted mono-copy",children:E.job_id})]}),u.jsx("strong",{children:Dm(E)})]}),u.jsxs("div",{className:"job-row-meta",children:[u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Created"}),u.jsxs("div",{className:"timestamp-row",children:[u.jsx("strong",{children:al(E.created_at)}),u.jsx("span",{className:"muted",children:ol(E.created_at)})]})]}),u.jsxs("div",{className:"meta-item",children:[u.jsx("span",{children:"Duration"}),u.jsx("strong",{children:bm(E.started_at||E.created_at,E.finished_at)})]})]}),E.job_type==="create_project"||E.job_type==="update_environment"||E.job_type==="reinstall_environment"?u.jsx(Vm,{job:E,downloading:ne.includes(E.job_id),onDownload:E.log_path?$n:void 0}):null,E.error_message?u.jsx("div",{className:"error-banner",children:E.error_message}):null]},E.job_id)),yl?u.jsx("div",{className:"button-row centered jobs-list-footer",children:u.jsxs("button",{className:"button-secondary",type:"button",onClick:()=>ue(!0),children:["Show more jobs (",vt.length," total)"]})}):null]})})]}),u.jsxs("section",{className:"panel",children:[u.jsx("div",{className:"panel-head",children:u.jsx("h2",{children:"Project actions"})}),u.jsx("div",{className:"panel-body",children:u.jsxs("div",{className:"button-row project-actions-row",children:[u.jsxs("div",{className:"action-menu",ref:p,children:[u.jsx("button",{className:"button-open",type:"button","aria-haspopup":"menu","aria-expanded":G,disabled:!!v,onClick:E=>{E.stopPropagation(),B(T=>!T)},children:v?"Exporting...":"Export project"}),G?u.jsxs("div",{className:"action-popover",role:"menu",onClick:E=>E.stopPropagation(),children:[u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:v!==null,onClick:()=>{Bt("code_only")},children:u.jsx("strong",{children:"Code only"})}),u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:v!==null,onClick:()=>{Bt("code_and_data")},children:u.jsx("strong",{children:"Code and data"})}),u.jsx("button",{className:"action-option",type:"button",role:"menuitem",disabled:v!==null,onClick:()=>{Bt("full")},children:u.jsx("strong",{children:"Full"})})]}):null]}),u.jsx("button",{className:"button-warning",type:"button",onClick:()=>{le("archive"),K(""),D(!0)},disabled:Qe||ke,children:Qe?"Archiving...":"Archive project"}),u.jsx("button",{className:"button-danger",type:"button",onClick:()=>{le("delete"),K(""),D(!0)},disabled:ke||Qe,children:ke?"Deleting...":"Delete project"})]})})]})]}),fe&&Y?u.jsx(Gm,{kind:Y,projectId:c,submitting:Y==="archive"?Qe:ke,typedProjectId:Z,setTypedProjectId:K,onClose:()=>{D(!1),le(null),K("")},onConfirm:()=>{if(Y==="archive"){kr();return}pl()}}):null]})}function Xm(){return u.jsxs(sm,{children:[u.jsx(il,{path:"/login",element:u.jsx(Hm,{})}),u.jsx(il,{path:"/projects/:projectId",element:u.jsx(Ic,{children:u.jsx(Ym,{})})}),u.jsx(il,{path:"/",element:u.jsx(Ic,{children:u.jsx(Jm,{})})}),u.jsx(il,{path:"*",element:u.jsx(Xc,{to:"/",replace:!0})})]})}function qm(){return u.jsx(hm,{children:u.jsx(Wm,{children:u.jsx(Xm,{})})})}hp.createRoot(Ba).render(u.jsx(zi.StrictMode,{children:u.jsx(qm,{})}));
