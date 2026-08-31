// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-ynzt0fm1.js";import{Vk}from"./chunk-bsdtxcdc.js";import{xle,C7,xe}from"./chunk-fy12d89p.js";import{Xs}from"./chunk-3kxn5jvk.js";function zDt(e,a,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(t)=>({...t,messages:xle(t.messages,a)}))}function fWe(e,a,s,t){let m=s.get(e);if(!m||Xs(m.status)){n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);return}s.update(e,(r)=>({...r,pendingUserMessages:[...r.pendingUserMessages,{text:a,origin:t}]})),s.updateTranscript(e,(r)=>({...r,messages:xle(r.messages,xe({content:a,origin:t}))}))}function Stn(e,a,s){let t=C7(Vk(a,s),e);if(t?.status==="running")t.retryWake?.emit()}
export{zDt,fWe,Stn};
