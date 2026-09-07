// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{t}from"./chunk-5q90j22t.js";import{bBe,a0n}from"./chunk-vtd04czk.js";import{jTt,Yer,nt,j4t,qYe,c$e,bzt,u$e,h_,I,P$e}from"./chunk-n495pc0t.js";var m="tengu_log_datadog_events";function s(){if(c$e("datadog"))return!1;try{return I(m,!1)}catch{return!1}}function f(e){try{jTt(nt())}catch{}return Yer(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())P$e(e,bBe(r));u$e(e,r)}var i=!1;function u(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=bzt(e);if(a===0)return;if(j4t()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};qYe().then(o,o)}finally{i=!1}}async function g(e,n){let a=bzt(e);if(a===0)return;if(!j4t())await qYe();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(P$e(e,bBe(r)));l.push(h_(e,r)),await Promise.all(l)}function q1(){a0n({logEvent:u,logEventAsync:g})}
export{q1};
