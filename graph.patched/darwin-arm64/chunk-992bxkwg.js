// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t}from"./chunk-qmm87fyw.js";import{R8e,eZn}from"./chunk-jxv3x25k.js";import{rBt,YMr,tt,nfn,Wft,n9e,s9e,zfn,i9e,AS,P}from"./chunk-g4c6ggz4.js";var u="tengu_log_datadog_events";function s(){if(s9e("datadog"))return!1;try{return P(u,!1)}catch{return!1}}function f(e){try{rBt(tt())}catch{}return YMr(e)}function d(e,n,a){let o=f(n),r=a!==null?{...o,sample_rate:a}:o;if(s())n9e(e,R8e(r));i9e(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=zfn(e);if(a===0)return;if(nfn()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};Wft().then(o,o)}finally{i=!1}}async function c(e,n){let a=zfn(e);if(a===0)return;if(!nfn())await Wft();let o=f(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(s())l.push(n9e(e,R8e(r)));l.push(AS(e,r)),await Promise.all(l)}function ZD(){eZn({logEvent:m,logEventAsync:c})}
export{ZD};
