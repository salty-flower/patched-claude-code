// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t}from"./chunk-847hpqqs.js";import{h9e,xQn}from"./chunk-5a4y4a7y.js";import{$Ut,fLr,tt,Npn,xft,W6e,V6e,Tfn,K6e,vb,P}from"./chunk-30p0nwys.js";var u="tengu_log_datadog_events";function s(){if(V6e("datadog"))return!1;try{return P(u,!1)}catch{return!1}}function f(e){try{$Ut(tt())}catch{}return fLr(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())W6e(e,h9e(r));K6e(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=Tfn(e);if(a===0)return;if(Npn()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};xft().then(o,o)}finally{i=!1}}async function c(e,n){let a=Tfn(e);if(a===0)return;if(!Npn())await xft();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(W6e(e,h9e(r)));l.push(vb(e,r)),await Promise.all(l)}function Dj(){xQn({logEvent:m,logEventAsync:c})}
export{Dj};
