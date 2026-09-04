// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{t}from"./chunk-84crg0gy.js";import{Ix}from"./chunk-vtwn1md5.js";import{Xde,DY,xe}from"./chunk-5e9qk3ys.js";import{Ti}from"./chunk-4c39ep6f.js";function pFt(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:Xde(a.messages,r)}))}function p4e(e,r,s,a){let n=s.get(e);if(!n||Ti(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:Xde(m.messages,xe({content:r,origin:a}))}))}function Dan(e,r,s){let a=DY(Ix(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{pFt,p4e,Dan};
