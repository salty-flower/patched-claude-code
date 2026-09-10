// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-wbbe5mtc.js";import{oH}from"./chunk-e02s7cks.js";import{Rfe,FJ,Te}from"./chunk-e55d0yhx.js";import{Ps}from"./chunk-j227jy4h.js";function g2t(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:Rfe(a.messages,r)}))}function AKe(e,r,s,a){let n=s.get(e);if(!n||Ps(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:Rfe(m.messages,Te({content:r,origin:a}))}))}function Zdn(e,r,s){let a=FJ(oH(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{g2t,AKe,Zdn};
