// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-wbbe5mtc.js";import{Mze,w$n}from"./chunk-z0p50v56.js";import{gxt,Hpr,et,AXt,Gnt,m6e,tJt,g6e,qy,H,$6e}from"./chunk-e02s7cks.js";var m="tengu_log_datadog_events";function s(){if(m6e("datadog"))return!1;try{return H(m,!1)}catch{return!1}}function f(e){try{gxt(et())}catch{}return Hpr(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())$6e(e,Mze(r));g6e(e,r)}var i=!1;function u(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=tJt(e);if(a===0)return;if(AXt()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};Gnt().then(o,o)}finally{i=!1}}async function g(e,n){let a=tJt(e);if(a===0)return;if(!AXt())await Gnt();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push($6e(e,Mze(r)));l.push(qy(e,r)),await Promise.all(l)}function W$(){w$n({logEvent:u,logEventAsync:g})}
export{W$};
