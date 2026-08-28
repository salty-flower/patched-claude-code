// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-cmkfpkth.js";import{lse,_V,Pe}from"./chunk-j5h9ds58.js";import{JM}from"./chunk-k7g7zf27.js";import{Os}from"./chunk-mh3etk8y.js";function Axt(e,a,s){if(s.get(e)?.status!=="running")return;s.updateTranscript(e,(t)=>({...t,messages:lse(t.messages,a)}))}function bUe(e,a,s,t){let m=s.get(e);if(!m||Os(m.status)){n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);return}s.update(e,(r)=>({...r,pendingUserMessages:[...r.pendingUserMessages,{text:a,origin:t}]})),s.updateTranscript(e,(r)=>({...r,messages:lse(r.messages,Pe({content:a,origin:t}))}))}function aXt(e,a,s){let t=_V(JM(a,s),e);if(t?.status==="running")t.retryWake?.emit()}
export{Axt,bUe,aXt};
