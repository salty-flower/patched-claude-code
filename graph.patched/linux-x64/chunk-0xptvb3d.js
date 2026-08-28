// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{ose,m9,Re}from"./chunk-hrvkymct.js";import{X$}from"./chunk-b2ayc3xb.js";import{Ls}from"./chunk-xgwksxfs.js";function Sxt(e,a,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(t)=>({...t,messages:ose(t.messages,a)}))}function m2e(e,a,s,t){let m=s.get(e);if(!m||Ls(m.status)){n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);return}s.update(e,(r)=>({...r,pendingUserMessages:[...r.pendingUserMessages,{text:a,origin:t}]})),s.updateTranscript(e,(r)=>({...r,messages:ose(r.messages,Re({content:a,origin:t}))}))}function eXt(e,a,s){let t=m9(X$(a,s),e);if(t?.status==="running")t.retryWake?.emit()}
export{Sxt,m2e,eXt};
