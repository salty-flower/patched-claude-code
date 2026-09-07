// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{We,Ut,rt,xn,$l,Bt}from"./chunk-3e93vkg3.js";import{mt}from"./chunk-rxtj2zqt.js";var r=null,s=null,n=null,e={name:import.meta.require("./chunk-dwmrx9qf.js").ARTIFACT_TOOL_NAME,names:import.meta.require("./chunk-dwmrx9qf.js"),ui:import.meta.require("./chunk-tz555gwt.js")},M=[mt,We,Ut,xn,rt,$l,Bt,...r?[r.name]:[],...s?[s.name]:[],...n?[n.name]:[],...e?[e.name,e.names.ARTIFACT_COMMENTS_TOOL_NAME,e.names.ARTIFACT_DATA_TOOL_NAME,e.names.ARTIFACT_CHECK_TOOL_NAME]:[]],T={get[mt](){return import.meta.require("./chunk-7fjdqk00.js").renderToolUseMessage},get[We](){return import.meta.require("./chunk-0ne90vev.js").renderToolUseMessage},get[Ut](){return import.meta.require("./chunk-asnxn2f7.js").renderToolUseMessage},get[xn](){return import.meta.require("./chunk-s8xw6rsr.js").renderToolUseMessage},get[rt](){return import.meta.require("./chunk-azjrggqf.js").renderToolUseMessage},get[$l](){return import.meta.require("./chunk-79asr92v.js").renderToolUseMessage},get[Bt](){return import.meta.require("./chunk-pepqztgs.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage},...e&&{[e.name]:e.ui.renderToolUseMessage,[e.names.ARTIFACT_COMMENTS_TOOL_NAME]:e.ui.renderCommentsToolUseMessage,[e.names.ARTIFACT_DATA_TOOL_NAME]:e.ui.renderDataToolUseMessage,[e.names.ARTIFACT_CHECK_TOOL_NAME]:e.ui.renderCheckToolUseMessage}};function Eye(o,t,l){if(o.renderToolUseMessage)return o.renderToolUseMessage(t,l);return VIe(o.name,t,l)}function VIe(o,t,l){if(Object.hasOwn(T,o))return T[o]?.(t,l);return null}
export{Eye,VIe};
