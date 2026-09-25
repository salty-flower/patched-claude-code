// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{t}from"./chunk-wvb0gwjm.js";import{Oct,uDr}from"./chunk-9cfndpw0.js";import{Nrn,dSo,it,iBn,eHt,aat,OBn,lat,Kw,x}from"./chunk-twxt3h9y.js";import{_st}from"./chunk-z3kvjkzc.js";var u="tengu_log_datadog_events";function s(){if(aat("datadog"))return!1;try{return x(u,!1)}catch{return!1}}function f(e){try{Nrn(it())}catch{}return dSo(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())_st(e,Oct(r));lat(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=OBn(e);if(a===0)return;if(iBn()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};eHt().then(o,o)}finally{i=!1}}async function c(e,n){let a=OBn(e);if(a===0)return;if(!iBn())await eHt();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(_st(e,Oct(r)));l.push(Kw(e,r)),await Promise.all(l)}function i$(){uDr({logEvent:m,logEventAsync:c})}
export{i$};
