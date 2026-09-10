// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{t}from"./chunk-w930ag8r.js";import{Ux}from"./chunk-vryy7b5x.js";import{Mpe,_J,ke}from"./chunk-tavwd3sq.js";import{ks}from"./chunk-rdwm4e1t.js";function mUt(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:Mpe(a.messages,r)}))}function Jqe(e,r,s,a){let n=s.get(e);if(!n||ks(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:Mpe(m.messages,ke({content:r,origin:a}))}))}function Fcn(e,r,s){let a=_J(Ux(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{mUt,Jqe,Fcn};
