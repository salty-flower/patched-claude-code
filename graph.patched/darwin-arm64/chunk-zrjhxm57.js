// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{RN}from"./chunk-590ye0ab.js";import{Re}from"./chunk-y0b3kvx1.js";import{GBe}from"./chunk-qmgtg38c.js";import{P_e}from"./chunk-n7q4tr5r.js";import{js}from"./chunk-xz126qex.js";function d2n(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:GBe(a.messages,r)}))}function pHt(e,r,s,a){let n=s.get(e);if(!n||js(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:GBe(m.messages,Re({content:r,origin:a}))}))}function _Rr(e,r,s){let a=P_e(RN(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{d2n,pHt,_Rr};
