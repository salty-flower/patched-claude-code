// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{wt,ac}from"./chunk-ns0ekkj0.js";import{ft}from"./chunk-q5qa3gps.js";import{tn,er}from"./chunk-hv8krsvd.js";import{Xe,$t}from"./chunk-cgqfw4fr.js";var r=null,o=null,s=null,n={name:import.meta.require("./chunk-smd84enr.js").ARTIFACT_TOOL_NAME,ui:import.meta.require("./chunk-hq7kv9qh.js")},f=[ft,Xe,tn,er,wt,ac,$t,...r?[r.name]:[],...o?[o.name]:[],...s?[s.name]:[],...n?[n.name]:[]],i={get[ft](){return import.meta.require("./chunk-sf5gsxnf.js").renderToolUseMessage},get[Xe](){return import.meta.require("./chunk-6z81sht0.js").renderToolUseMessage},get[tn](){return import.meta.require("./chunk-c4xz3jyc.js").renderToolUseMessage},get[er](){return import.meta.require("./chunk-4q6ytfs7.js").renderToolUseMessage},get[wt](){return import.meta.require("./chunk-4vx0b5ja.js").renderToolUseMessage},get[ac](){return import.meta.require("./chunk-0t2gjnyc.js").renderToolUseMessage},get[$t](){return import.meta.require("./chunk-gt4keqav.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...o&&{[o.name]:o.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage}};function ppe(e,t,l){if(e.renderToolUseMessage)return e.renderToolUseMessage(t,l);return FAe(e.name,t,l)}function FAe(e,t,l){if(Object.hasOwn(i,e))return i[e]?.(t,l);return null}
export{ppe,FAe};
