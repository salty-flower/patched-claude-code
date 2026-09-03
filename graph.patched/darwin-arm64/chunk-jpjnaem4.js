// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{t}from"./chunk-t2jwg94b.js";import{$Be,aIn}from"./chunk-kzyd0fd4.js";import{Zwt,jrr,at,mzt,SJe,c$e,Vzt,d$e,L_,P,P$e}from"./chunk-h6md7820.js";var f="tengu_log_datadog_events";function tBn(){if(c$e("datadog"))return!1;try{return P(f,!1)}catch{return!1}}function s(e){try{Zwt(at())}catch{}return jrr(e)}function d(e,n,a){let o=s(n),r=a!==null?{...o,sample_rate:a}:o;if(tBn())P$e(e,$Be(r));d$e(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=Vzt(e);if(a===0)return;if(mzt()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};SJe().then(o,o)}finally{i=!1}}async function u(e,n){let a=Vzt(e);if(a===0)return;if(!mzt())await SJe();let o=s(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(tBn())l.push(P$e(e,$Be(r)));l.push(L_(e,r)),await Promise.all(l)}function uF(){aIn({logEvent:m,logEventAsync:u})}
export{tBn,uF};
