// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{t}from"./chunk-1tk5haqn.js";import{cUe,TRn}from"./chunk-skkcgpsw.js";import{vwt,fer,nt,E4t,xJe,JFe,n9t,QFe,py,x,SBe}from"./chunk-3e93vkg3.js";var m="tengu_log_datadog_events";function s(){if(JFe("datadog"))return!1;try{return x(m,!1)}catch{return!1}}function f(e){try{vwt(nt())}catch{}return fer(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())SBe(e,cUe(r));QFe(e,r)}var i=!1;function u(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=n9t(e);if(a===0)return;if(E4t()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};xJe().then(o,o)}finally{i=!1}}async function g(e,n){let a=n9t(e);if(a===0)return;if(!E4t())await xJe();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(SBe(e,cUe(r)));l.push(py(e,r)),await Promise.all(l)}function F4(){TRn({logEvent:u,logEventAsync:g})}
export{F4};
