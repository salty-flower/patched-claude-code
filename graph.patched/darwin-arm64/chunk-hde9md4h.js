// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{t}from"./chunk-b5feae42.js";import{vF}from"./chunk-kbn00z3m.js";import{Re}from"./chunk-nwqfvmza.js";import{vWe}from"./chunk-c4a5qdvy.js";import{xbe}from"./chunk-w3rkhw52.js";import{$s}from"./chunk-8n1wgbzq.js";function TVn(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:vWe(a.messages,r)}))}function $Lt(e,r,s,a){let n=s.get(e);if(!n||$s(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:vWe(m.messages,Re({content:r,origin:a}))}))}function uMr(e,r,s){let a=xbe(vF(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{TVn,$Lt,uMr};
