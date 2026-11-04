// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{d}from"./chunk-sktwb66b.js";import{f$,cW,B0e,m4,uW,P_r}from"./chunk-p5rgm6ms.js";async function Yrt(f,r){let[o,l]=await Promise.allSettled([uW(void 0,f,r),P_r(void 0,r)]),s=o.status==="rejected"?d(o.reason):null,i=o.status==="fulfilled"?o.value:[],a=l.status==="fulfilled"?l.value:[],t=[...i,...a],e=m4(),u=e.ignoredUntrustedPool??null;if(e.id!==void 0&&cW(e.id)&&!t.some((n)=>f$(n)===e.id))t.push({kind:"self_hosted_pool",pool_id:e.id,name:e.id,created_at:"",alive_runner_count:0});if(t.length===0)return{availableTargets:[],selectedTarget:null,selectedTargetSource:null,environmentsError:s,ignoredUntrustedPool:u};let c=B0e(i,(n)=>n.kind!=="bridge")??a[0]??t[0],g=null;if(e.id!==void 0){let n=t.find((m)=>f$(m)===e.id);if(n)c=n,g=e.source??null}return{availableTargets:t,selectedTarget:c,selectedTargetSource:g,environmentsError:s,ignoredUntrustedPool:u}}
export{Yrt};
