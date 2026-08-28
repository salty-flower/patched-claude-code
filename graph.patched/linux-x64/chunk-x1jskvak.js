// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{b,f,y}from"./chunk-v1ap59a1.js";import{Je}from"./chunk-7h2h1m4y.js";class xE extends Error{subtype;constructor(r,e){super(`control_request '${r}' got no response after ${e/1000}s \u2014 the worker may still apply it`);this.subtype=r}}class z7 extends Error{subtype;constructor(r){super("Request was not delivered to the cloud session");this.subtype=r}}function AH(r){if(r instanceof Je)return"aborted";if(r instanceof xE)return"timeout";if(r instanceof z7)return"not_delivered";if(r instanceof Error&&(r.message.endsWith("Disconnected")||r.message.endsWith("Connection to remote lost")))return"disconnected";if(r instanceof Error&&(r.message.endsWith("not connected")||r.message.includes("Cannot send:")))return"not_connected";return"server_error"}async function $Cn(r,e){try{let t=await e();return b(r),t}catch(t){if(t instanceof Je)y(r,"aborted");else f(r,AH(t));throw t}}function NCn(r){if(r.subtype==="error"&&typeof r.error==="string")return Error(r.error);let e=r.subtype==="error"?"non-string error":`subtype ${typeof r.subtype==="string"?"unrecognized":typeof r.subtype}`;return Error(`Malformed control_response from worker (${e})`)}
export{xE,z7,AH,$Cn,NCn};
