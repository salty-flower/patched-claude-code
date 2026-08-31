// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-ynzt0fm1.js";import{ZMe,t4t,tNe,C_,I,_Ne}from"./chunk-bsdtxcdc.js";import{yFe,ZRn}from"./chunk-qw5jhqey.js";var l="tengu_log_datadog_events";function q1n(){if(ZMe("datadog"))return!1;try{return I(l,!1)}catch{return!1}}var i=!1;function s(t,o){if(i){n(`logEvent reentered while collecting metadata \u2014 dropped ${t}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,{level:"error"});return}i=!0;try{let e=t4t(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o;if(q1n())_Ne(t,yFe(a));tNe(t,a)}finally{i=!1}}async function d(t,o){let e=t4t(t);if(e===0)return;let a=e!==null?{...o,sample_rate:e}:o,r=[];if(q1n())r.push(_Ne(t,yFe(a)));r.push(C_(t,a)),await Promise.all(r)}function S1(){ZRn({logEvent:s,logEventAsync:d})}
export{q1n,S1};
