// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{t}from"./chunk-1tk5haqn.js";import{YC}from"./chunk-3e93vkg3.js";import{Vce,fX,Te}from"./chunk-y3swhsrk.js";import{ks}from"./chunk-axc6wfft.js";function Y$t(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:Vce(a.messages,r)}))}function xVe(e,r,s,a){let n=s.get(e);if(!n||ks(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:Vce(m.messages,Te({content:r,origin:a}))}))}function _rn(e,r,s){let a=fX(YC(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Y$t,xVe,_rn};
