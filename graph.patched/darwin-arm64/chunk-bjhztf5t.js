// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{t}from"./chunk-3wz0srxw.js";import{rht,Vqr}from"./chunk-aykv0zbt.js";import{xfn,ONo,rt,X4n,r1t,Dft,S5n,Mft,JE,x}from"./chunk-er6f56rj.js";import{xut}from"./chunk-rttrg04m.js";var u="tengu_log_datadog_events";function s(){if(Dft("datadog"))return!1;try{return x(u,!1)}catch{return!1}}function f(e){try{xfn(rt())}catch{}return ONo(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())xut(e,rht(r));Mft(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=S5n(e);if(a===0)return;if(X4n()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};r1t().then(o,o)}finally{i=!1}}async function c(e,n){let a=S5n(e);if(a===0)return;if(!X4n())await r1t();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(xut(e,rht(r)));l.push(JE(e,r)),await Promise.all(l)}function iU(){Vqr({logEvent:m,logEventAsync:c})}
export{iU};
