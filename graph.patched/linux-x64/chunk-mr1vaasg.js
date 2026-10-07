// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-gvn18sr5.js";import{TCt,Ldo}from"./chunk-s90w5q15.js";import{iPn,ins,rt,adr,y6t,Ekt,xdr,kkt,xk,T}from"./chunk-m0sj7y8g.js";import{dvt}from"./chunk-6fefb1et.js";var u="tengu_log_datadog_events";function c(){if(Ekt("datadog"))return!1;try{return T(u,!1)}catch{return!1}}function f(e){try{iPn(rt())}catch{}return ins(e)}function d(e,o,a,n){let i=f(o),r=a!==null?{...i,sample_rate:a}:i;if(n())dvt(e,TCt(r));kkt(e,r)}var l=!1;function m(e,o,a){if(l){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}l=!0;try{let n=xdr(e);if(n===0)return;if(adr()){d(e,o,n,a);return}let i=()=>{l=!0;try{d(e,o,n,a)}finally{l=!1}};y6t().then(i,i)}finally{l=!1}}async function p(e,o,a){let n=xdr(e);if(n===0)return;if(!adr())await y6t();let i=f(o),r=n!==null?{...i,sample_rate:n}:i,s=[];if(a())s.push(dvt(e,TCt(r)));s.push(xk(e,r)),await Promise.all(s)}function w5(){Ldo(g(c))}function g(e){return{logEvent:(o,a)=>m(o,a,e),logEventAsync:(o,a)=>p(o,a,e)}}
export{w5};
