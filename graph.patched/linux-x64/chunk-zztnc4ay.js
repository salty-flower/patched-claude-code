// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-cmg3b5hg.js";import{Jx}from"./chunk-ce4ppmnp.js";import{Sfe,I7,Te}from"./chunk-2byjyg85.js";import{Ps}from"./chunk-7d1jtnwx.js";function Q1t(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:Sfe(a.messages,r)}))}function u5e(e,r,s,a){let n=s.get(e);if(!n||Ps(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:Sfe(m.messages,Te({content:r,origin:a}))}))}function xdn(e,r,s){let a=I7(Jx(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Q1t,u5e,xdn};
