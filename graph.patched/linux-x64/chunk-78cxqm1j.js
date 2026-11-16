// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
class bNe extends Error{timeoutMs;constructor(e,r){super(`${e} timed out after ${r}ms`);this.timeoutMs=r;this.name="BoundedTimeoutError"}}async function kl(e,r,n){let t,o=new Promise((c,i)=>{t=setTimeout((s,u,m)=>s(new bNe(u,m)),Math.min(r,2147483647),i,n,r)});try{return await Promise.race([e,o])}finally{if(t)clearTimeout(t);e.catch(()=>{})}}var zZt=5000;function Iw(e,r){return kl(e,zZt,`[runner:stuck] fs op '${r}' (check TMPDIR mount health)`)}
export{bNe,kl,zZt,Iw};
