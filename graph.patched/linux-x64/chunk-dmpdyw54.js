// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{WC}from"./chunk-1e5y3pjf.js";import{Tle,wY,Re}from"./chunk-h6btyxas.js";import{Ys}from"./chunk-ctzahqyh.js";function rDt(e,a,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(t)=>({...t,messages:Tle(t.messages,a)}))}function _Ge(e,a,s,t){let m=s.get(e);if(!m||Ys(m.status)){n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);return}s.update(e,(r)=>({...r,pendingUserMessages:[...r.pendingUserMessages,{text:a,origin:t}]})),s.updateTranscript(e,(r)=>({...r,messages:Tle(r.messages,Re({content:a,origin:t}))}))}function Ctn(e,a,s){let t=wY(WC(a,s),e);if(t?.status==="running")t.retryWake?.emit()}
export{rDt,_Ge,Ctn};
