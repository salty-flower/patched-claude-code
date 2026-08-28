// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{tPe,x2t,rPe,Fg,x,vPe}from"./chunk-ns0ekkj0.js";import{mOe,vSn}from"./chunk-cvykgfry.js";var l="tengu_log_datadog_events";function zIn(){if(tPe("datadog"))return!1;try{return x(l,!1)}catch{return!1}}var i=!1;function s(t,o){if(i){n(`logEvent reentered while collecting metadata \u2014 dropped ${t}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let e=x2t(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o;if(zIn())vPe(t,mOe(a));rPe(t,a)}finally{i=!1}}async function d(t,o){let e=x2t(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o,r=[];if(zIn())r.push(vPe(t,mOe(a)));r.push(Fg(t,a)),await Promise.all(r)}function jO(){vSn({logEvent:s,logEventAsync:d})}
export{zIn,jO};
