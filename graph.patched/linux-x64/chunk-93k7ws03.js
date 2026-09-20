// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t}from"./chunk-847hpqqs.js";import{uH}from"./chunk-30p0nwys.js";import{qbe,Dne,Ae}from"./chunk-v4zgc4qd.js";import{oi}from"./chunk-e82fscam.js";function Q9t(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:qbe(a.messages,r)}))}function Ret(e,r,s,a){let n=s.get(e);if(!n||oi(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:qbe(m.messages,Ae({content:r,origin:a}))}))}function Vxn(e,r,s){let a=Dne(uH(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Q9t,Ret,Vxn};
