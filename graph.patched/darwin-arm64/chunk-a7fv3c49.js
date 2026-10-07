// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{NTt,puo}from"./chunk-qbf9wv32.js";import{CPn,Gns,rt,Rdr,H4t,MCt,Xdr,DCt,OC,k}from"./chunk-s46qgfx7.js";import{wEt}from"./chunk-wa4cw3a0.js";var u="tengu_log_datadog_events";function c(){if(MCt("datadog"))return!1;try{return k(u,!1)}catch{return!1}}function f(e){try{CPn(rt())}catch{}return Gns(e)}function d(e,o,a,n){let i=f(o),r=a!==null?{...i,sample_rate:a}:i;if(n())wEt(e,NTt(r));DCt(e,r)}var l=!1;function m(e,o,a){if(l){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}l=!0;try{let n=Xdr(e);if(n===0)return;if(Rdr()){d(e,o,n,a);return}let i=()=>{l=!0;try{d(e,o,n,a)}finally{l=!1}};H4t().then(i,i)}finally{l=!1}}async function p(e,o,a){let n=Xdr(e);if(n===0)return;if(!Rdr())await H4t();let i=f(o),r=n!==null?{...i,sample_rate:n}:i,s=[];if(a())s.push(wEt(e,NTt(r)));s.push(OC(e,r)),await Promise.all(s)}function c2(){puo(g(c))}function g(e){return{logEvent:(o,a)=>m(o,a,e),logEventAsync:(o,a)=>p(o,a,e)}}
export{c2};
