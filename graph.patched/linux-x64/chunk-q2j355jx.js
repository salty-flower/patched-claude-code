// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-gvn18sr5.js";import{wN}from"./chunk-hdjzp1hc.js";import{Re}from"./chunk-9wqh5j7s.js";import{L1e}from"./chunk-tqr0xr8c.js";import{k_e}from"./chunk-xgq07ht4.js";import{js}from"./chunk-88wmkbh6.js";function Kjn(e,r,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(a)=>({...a,messages:L1e(a.messages,r)}))}function eHt(e,r,s,a){let n=s.get(e);if(!n||js(n.status)){t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);return}s.update(e,(m)=>({...m,pendingUserMessages:[...m.pendingUserMessages,{text:r,origin:a}]})),s.updateTranscript(e,(m)=>({...m,messages:L1e(m.messages,Re({content:r,origin:a}))}))}function tRr(e,r,s){let a=k_e(wN(r,s),e);if(a?.status==="running")a.retryWake?.emit()}
export{Kjn,eHt,tRr};
