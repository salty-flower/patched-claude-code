// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-ekgz6skk.js";import{cB,Jee,tXe,EEe,uB,QKn}from"./chunk-qsa68zk2.js";async function oKt(f,r){let[o,l]=await Promise.allSettled([uB(void 0,f,r),QKn(void 0,r)]),s=o.status==="rejected"?d(o.reason):null,i=o.status==="fulfilled"?o.value:[],a=l.status==="fulfilled"?l.value:[],t=[...i,...a],e=EEe(),u=e.ignoredUntrustedPool??null;if(e.id!==void 0&&Jee(e.id)&&!t.some((n)=>cB(n)===e.id))t.push({kind:"self_hosted_pool",pool_id:e.id,name:e.id,created_at:"",alive_runner_count:0});if(t.length===0)return{availableTargets:[],selectedTarget:null,selectedTargetSource:null,environmentsError:s,ignoredUntrustedPool:u};let c=tXe(i,(n)=>n.kind!=="bridge")??a[0]??t[0],g=null;if(e.id!==void 0){let n=t.find((m)=>cB(m)===e.id);if(n)c=n,g=e.source??null}return{availableTargets:t,selectedTarget:c,selectedTargetSource:g,environmentsError:s,ignoredUntrustedPool:u}}
export{oKt};
