// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_,f,g}from"./chunk-ykrbqs98.js";import{Ze}from"./chunk-efckqwp7.js";class CS extends Error{subtype;constructor(r,e){super(`control_request '${r}' got no response after ${e/1000}s \u2014 the worker may still apply it`);this.subtype=r}}class UQ extends Error{subtype;constructor(r){super("Request was not delivered to the cloud session");this.subtype=r}}function CI(r){if(r instanceof Ze)return"aborted";if(r instanceof CS)return"timeout";if(r instanceof UQ)return"not_delivered";if(r instanceof Error&&(r.message.endsWith("Disconnected")||r.message.endsWith("Connection to remote lost")))return"disconnected";if(r instanceof Error&&(r.message.endsWith("not connected")||r.message.includes("Cannot send:")))return"not_connected";return"server_error"}async function XOn(r,e){try{let t=await e();return _(r),t}catch(t){if(t instanceof Ze)g(r,"aborted");else f(r,CI(t));throw t}}function JOn(r){if(r.subtype==="error"&&typeof r.error==="string")return Error(r.error);let e=r.subtype==="error"?"non-string error":`subtype ${typeof r.subtype==="string"?"unrecognized":typeof r.subtype}`;return Error(`Malformed control_response from worker (${e})`)}
export{CS,UQ,CI,XOn,JOn};
