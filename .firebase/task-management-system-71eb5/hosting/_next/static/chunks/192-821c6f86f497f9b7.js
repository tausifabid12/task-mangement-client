(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{23300:function(){},88357:function(t,e,r){"use strict";r.d(e,{w_:function(){return l}});var s=r(67294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=s.createContext&&s.createContext(n),u=function(){return(u=Object.assign||function(t){for(var e,r=1,s=arguments.length;r<s;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},o=function(t,e){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&0>e.indexOf(s)&&(r[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)0>e.indexOf(s[n])&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};function l(t){return function(e){return s.createElement(c,u({attr:u({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return s.createElement(e.tag,u({key:r},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var r,n=t.attr,i=t.size,l=t.title,c=o(t,["attr","size","title"]),a=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),s.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,c,{className:r,style:u(u({color:t.color||e.color},e.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),t.children)};return void 0!==i?s.createElement(i.Consumer,null,function(t){return e(t)}):e(n)}},53250:function(t,e,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(67294),n="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},i=s.useState,u=s.useEffect,o=s.useLayoutEffect,l=s.useDebugValue;function c(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!n(t,r)}catch(s){return!0}}var a="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),s=i({inst:{value:r,getSnapshot:e}}),n=s[0].inst,a=s[1];return o(function(){n.value=r,n.getSnapshot=e,c(n)&&a({inst:n})},[t,r,e]),u(function(){return c(n)&&a({inst:n}),t(function(){c(n)&&a({inst:n})})},[t]),l(r),r};e.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:a},61688:function(t,e,r){"use strict";t.exports=r(53250)},77837:function(t,e,r){"use strict";let s;r.d(e,{a:function(){return x}});var n=r(32161),i=r(30081),u=r(15761),o=r(33989),l=r(72379);class c extends o.l{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),a(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return h(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let i=this.hasListeners();i&&d(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(e),i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let u=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(t){let e=this.client.getQueryCache().build(this.client,t);return this.createResult(e,t)}getCurrentResult(){return this.currentResult}trackResult(t){let e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){let e=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(n.ZT)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),n.sk||this.currentResult.isStale||!(0,n.PN)(this.options.staleTime))return;let t=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t+1)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){let r;let s=this.currentQuery,i=this.options,u=this.currentResult,o=this.currentResultState,c=this.currentResultOptions,h=t!==s,f=h?t.state:this.currentQueryInitialState,y=h?this.currentResult:this.previousQueryResult,{state:v}=t,{dataUpdatedAt:R,error:m,errorUpdatedAt:b,fetchStatus:S,status:g}=v,E=!1,O=!1;if(e._optimisticResults){let Q=this.hasListeners(),C=!Q&&a(t,e),I=Q&&d(t,s,e,i);(C||I)&&(S=(0,l.Kw)(t.options.networkMode)?"fetching":"paused",R||(g="loading")),"isRestoring"===e._optimisticResults&&(S="idle")}if(e.keepPreviousData&&!v.dataUpdatedAt&&null!=y&&y.isSuccess&&"error"!==g)r=y.data,R=y.dataUpdatedAt,g=y.status,E=!0;else if(e.select&&void 0!==v.data){if(u&&v.data===(null==o?void 0:o.data)&&e.select===this.selectFn)r=this.selectResult;else try{this.selectFn=e.select,r=e.select(v.data),r=(0,n.oE)(null==u?void 0:u.data,r,e),this.selectResult=r,this.selectError=null}catch(w){this.selectError=w}}else r=v.data;if(void 0!==e.placeholderData&&void 0===r&&"loading"===g){let T;if(null!=u&&u.isPlaceholderData&&e.placeholderData===(null==c?void 0:c.placeholderData))T=u.data;else if(T="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==T)try{T=e.select(T),this.selectError=null}catch(x){this.selectError=x}void 0!==T&&(g="success",r=(0,n.oE)(null==u?void 0:u.data,T,e),O=!0)}this.selectError&&(m=this.selectError,r=this.selectResult,b=Date.now(),g="error");let k="fetching"===S,F="loading"===g,U="error"===g,P={status:g,fetchStatus:S,isLoading:F,isSuccess:"success"===g,isError:U,isInitialLoading:F&&k,data:r,dataUpdatedAt:R,error:m,errorUpdatedAt:b,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>f.dataUpdateCount||v.errorUpdateCount>f.errorUpdateCount,isFetching:k,isRefetching:k&&!F,isLoadingError:U&&0===v.dataUpdatedAt,isPaused:"paused"===S,isPlaceholderData:O,isPreviousData:E,isRefetchError:U&&0!==v.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove};return P}updateResult(t){let e=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,n.VS)(r,e))return;this.currentResult=r;let s={cache:!0};(null==t?void 0:t.listeners)!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options;if("all"===t||!t&&!this.trackedProps.size)return!0;let r=new Set(null!=t?t:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some(t=>{let s=this.currentResult[t]!==e[t];return s&&r.has(t)})})()&&(s.listeners=!0),this.notify({...s,...t})}updateQuery(){let t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;let e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){let e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||(0,l.DV)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){i.V.batch(()=>{var e,r,s,n,i,u,o,l;t.onSuccess?(null==(e=(r=this.options).onSuccess)||e.call(r,this.currentResult.data),null==(s=(n=this.options).onSettled)||s.call(n,this.currentResult.data,null)):t.onError&&(null==(i=(u=this.options).onError)||i.call(u,this.currentResult.error),null==(o=(l=this.options).onSettled)||o.call(l,void 0,this.currentResult.error)),t.listeners&&this.listeners.forEach(t=>{t(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function a(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)||t.state.dataUpdatedAt>0&&h(t,e,e.refetchOnMount)}function h(t,e,r){if(!1!==e.enabled){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&p(t,e)}return!1}function d(t,e,r,s){return!1!==r.enabled&&(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}var f=r(67294),y=r(61688);let v=y.useSyncExternalStore,R=f.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),m=()=>f.useContext(R);var b=r(85945);let S=f.createContext(!1),g=()=>f.useContext(S);S.Provider;let E=(t,e)=>{(t.suspense||t.useErrorBoundary)&&!e.isReset()&&(t.retryOnMount=!1)},O=t=>{f.useEffect(()=>{t.clearReset()},[t])},Q=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>{var n;return t.isError&&!e.isReset()&&!t.isFetching&&(n=[t.error,s],"function"==typeof r?r(...n):!!r)},C=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},I=(t,e)=>t.isLoading&&t.isFetching&&!e,w=(t,e,r)=>(null==t?void 0:t.suspense)&&I(e,r),T=(t,e,r)=>e.fetchOptimistic(t).then(({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)}).catch(e=>{r.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)});function x(t,e,r){let s=(0,n._v)(t,e,r);return function(t,e){let r=(0,b.NL)({context:t.context}),s=g(),n=m(),u=r.defaultQueryOptions(t);u._optimisticResults=s?"isRestoring":"optimistic",u.onError&&(u.onError=i.V.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=i.V.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=i.V.batchCalls(u.onSettled)),C(u),E(u,n),O(n);let[o]=f.useState(()=>new e(r,u)),l=o.getOptimisticResult(u);if(v(f.useCallback(t=>s?()=>void 0:o.subscribe(i.V.batchCalls(t)),[o,s]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),f.useEffect(()=>{o.setOptions(u,{listeners:!1})},[u,o]),w(u,l,s))throw T(u,o,n);if(Q({result:l,errorResetBoundary:n,useErrorBoundary:u.useErrorBoundary,query:o.getCurrentQuery()}))throw l.error;return u.notifyOnChangeProps?l:o.trackResult(l)}(s,c)}}}]);