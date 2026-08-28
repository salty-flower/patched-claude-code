// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{wt,ac}from"./chunk-ghnc2x4f.js";import{ft}from"./chunk-4ww39vfb.js";import{tn,er}from"./chunk-w23nsh7n.js";import{Xe,Nt}from"./chunk-cgpv4wh0.js";var r=null,o=null,s=null,n={name:import.meta.require("./chunk-9wfa3273.js").ARTIFACT_TOOL_NAME,ui:import.meta.require("./chunk-pckj7caj.js")},f=[ft,Xe,tn,er,wt,ac,Nt,...r?[r.name]:[],...o?[o.name]:[],...s?[s.name]:[],...n?[n.name]:[]],i={get[ft](){return import.meta.require("./chunk-gdxyygn8.js").renderToolUseMessage},get[Xe](){return import.meta.require("./chunk-n14yqc2w.js").renderToolUseMessage},get[tn](){return import.meta.require("./chunk-ymrfwamg.js").renderToolUseMessage},get[er](){return import.meta.require("./chunk-jbh03z12.js").renderToolUseMessage},get[wt](){return import.meta.require("./chunk-68zdzde8.js").renderToolUseMessage},get[ac](){return import.meta.require("./chunk-br7hecv5.js").renderToolUseMessage},get[Nt](){return import.meta.require("./chunk-v824egxg.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...o&&{[o.name]:o.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage}};function vpe(e,t,l){if(e.renderToolUseMessage)return e.renderToolUseMessage(t,l);return KEe(e.name,t,l)}function KEe(e,t,l){if(Object.hasOwn(i,e))return i[e]?.(t,l);return null}
export{vpe,KEe};
