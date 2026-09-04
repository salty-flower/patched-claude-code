// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{t}from"./chunk-84crg0gy.js";import{b6e,lDn}from"./chunk-v5cr82c7.js";import{BAt,dar,at,vKt,XQe,BUe,r5t,WUe,j_,P,uBe}from"./chunk-vtwn1md5.js";var f="tengu_log_datadog_events";function _jn(){if(BUe("datadog"))return!1;try{return P(f,!1)}catch{return!1}}function s(e){try{BAt(at())}catch{}return dar(e)}function d(e,n,a){let o=s(n),r=a!==null?{...o,sample_rate:a}:o;if(_jn())uBe(e,b6e(r));WUe(e,r)}var i=!1;function m(e,n){if(i){t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let a=r5t(e);if(a===0)return;if(vKt()){d(e,n,a);return}let o=()=>{i=!0;try{d(e,n,a)}finally{i=!1}};XQe().then(o,o)}finally{i=!1}}async function u(e,n){let a=r5t(e);if(a===0)return;if(!vKt())await XQe();let o=s(n),r=a!==null?{...o,sample_rate:a}:o,l=[];if(_jn())l.push(uBe(e,b6e(r)));l.push(j_(e,r)),await Promise.all(l)}function kF(){lDn({logEvent:m,logEventAsync:u})}
export{_jn,kF};
