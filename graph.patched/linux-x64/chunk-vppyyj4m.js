// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Qe,Kt,yt,ar,mc,Ut}from"./chunk-1e5y3pjf.js";import{_t}from"./chunk-b9f47e9z.js";var r=null,o=null,s=null,n={name:import.meta.require("./chunk-w2p64h8t.js").ARTIFACT_TOOL_NAME,ui:import.meta.require("./chunk-m71xvq3y.js")},f=[_t,Qe,Kt,ar,yt,mc,Ut,...r?[r.name]:[],...o?[o.name]:[],...s?[s.name]:[],...n?[n.name]:[]],i={get[_t](){return import.meta.require("./chunk-3saywqay.js").renderToolUseMessage},get[Qe](){return import.meta.require("./chunk-qa788gmv.js").renderToolUseMessage},get[Kt](){return import.meta.require("./chunk-k1417r82.js").renderToolUseMessage},get[ar](){return import.meta.require("./chunk-h6btx8qf.js").renderToolUseMessage},get[yt](){return import.meta.require("./chunk-13dk1f2q.js").renderToolUseMessage},get[mc](){return import.meta.require("./chunk-bhh1dgjj.js").renderToolUseMessage},get[Ut](){return import.meta.require("./chunk-73ygng03.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...o&&{[o.name]:o.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage}};function oge(e,t,l){if(e.renderToolUseMessage)return e.renderToolUseMessage(t,l);return NTe(e.name,t,l)}function NTe(e,t,l){if(Object.hasOwn(i,e))return i[e]?.(t,l);return null}
export{oge,NTe};
