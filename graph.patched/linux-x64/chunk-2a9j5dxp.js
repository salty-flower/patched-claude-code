// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fdatg9ax.js";import{c1,Zse,cme,w9,Pkn}from"./chunk-newmssf8.js";async function zxt(g,r){let[o,s]=await Promise.allSettled([w9(void 0,g,r),Pkn(void 0,r)]),i=o.status==="rejected"?l(o.reason):null,d=o.status==="fulfilled"?o.value:[],a=s.status==="fulfilled"?s.value:[],t=[...d,...a],e=cme(),u=e.ignoredUntrustedPool??null;if(e.id!==void 0&&Zse(e.id)&&!t.some((n)=>c1(n)===e.id))t.push({kind:"self_hosted_pool",pool_id:e.id,name:e.id,created_at:"",alive_runner_count:0});if(t.length===0)return{availableTargets:[],selectedTarget:null,selectedTargetSource:null,environmentsError:i,ignoredUntrustedPool:u};let c=d.find((n)=>n.kind!=="bridge")??a[0]??t[0],f=null;if(e.id!==void 0){let n=t.find((m)=>c1(m)===e.id);if(n)c=n,f=e.source??null}return{availableTargets:t,selectedTarget:c,selectedTargetSource:f,environmentsError:i,ignoredUntrustedPool:u}}
export{zxt};
