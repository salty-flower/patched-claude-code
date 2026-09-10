// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-cmg3b5hg.js";import{TGe,XFn}from"./chunk-nx6yj2w6.js";import{QRt,Vdr,et,nJt,Int,nze,DJt,rze,Wy,I,Cze}from"./chunk-ce4ppmnp.js";var m="tengu_log_datadog_events";function s(){if(nze("datadog"))return!1;try{return I(m,!1)}catch{return!1}}function f(e){try{QRt(et())}catch{}return Vdr(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())Cze(e,TGe(r));rze(e,r)}var i=!1;function u(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=DJt(e);if(a===0)return;if(nJt()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};Int().then(o,o)}finally{i=!1}}async function g(e,n){let a=DJt(e);if(a===0)return;if(!nJt())await Int();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(Cze(e,TGe(r)));l.push(Wy(e,r)),await Promise.all(l)}function t5(){XFn({logEvent:u,logEventAsync:g})}
export{t5};
