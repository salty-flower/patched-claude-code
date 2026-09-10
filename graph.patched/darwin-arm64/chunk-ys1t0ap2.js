// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{t}from"./chunk-w930ag8r.js";import{Z6e,KMn}from"./chunk-mx473n83.js";import{Okt,Ecr,et,TYt,mtt,z2e,o7t,G2e,By,H,fje}from"./chunk-vryy7b5x.js";var m="tengu_log_datadog_events";function s(){if(z2e("datadog"))return!1;try{return H(m,!1)}catch{return!1}}function f(e){try{Okt(et())}catch{}return Ecr(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())fje(e,Z6e(r));G2e(e,r)}var i=!1;function u(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=o7t(e);if(a===0)return;if(TYt()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};mtt().then(o,o)}finally{i=!1}}async function g(e,n){let a=o7t(e);if(a===0)return;if(!TYt())await mtt();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(fje(e,Z6e(r)));l.push(By(e,r)),await Promise.all(l)}function A$(){KMn({logEvent:u,logEventAsync:g})}
export{A$};
