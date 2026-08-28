// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-cmkfpkth.js";import{nDe,AUt,oDe,Bg,x,vDe}from"./chunk-ghnc2x4f.js";import{h1e,Rvn}from"./chunk-3jdapt8v.js";var l="tengu_log_datadog_events";function JIn(){if(nDe("datadog"))return!1;try{return x(l,!1)}catch{return!1}}var i=!1;function s(t,o){if(i){n(`logEvent reentered while collecting metadata \u2014 dropped ${t}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let e=AUt(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o;if(JIn())vDe(t,h1e(a));oDe(t,a)}finally{i=!1}}async function d(t,o){let e=AUt(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o,r=[];if(JIn())r.push(vDe(t,h1e(a)));r.push(Bg(t,a)),await Promise.all(r)}function W1(){Rvn({logEvent:s,logEventAsync:d})}
export{JIn,W1};
