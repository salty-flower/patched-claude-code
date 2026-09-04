// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Qe,Kt,dt,Wn,bc,Gt}from"./chunk-vtwn1md5.js";import{yt}from"./chunk-9wxzwpym.js";var r=null,s=null,n=null,e={name:import.meta.require("./chunk-dq060y7j.js").ARTIFACT_TOOL_NAME,names:import.meta.require("./chunk-dq060y7j.js"),ui:import.meta.require("./chunk-580fb071.js")},M=[yt,Qe,Kt,Wn,dt,bc,Gt,...r?[r.name]:[],...s?[s.name]:[],...n?[n.name]:[],...e?[e.name,e.names.ARTIFACT_COMMENTS_TOOL_NAME,e.names.ARTIFACT_DATA_TOOL_NAME,e.names.ARTIFACT_CHECK_TOOL_NAME]:[]],T={get[yt](){return import.meta.require("./chunk-fjk3nhw0.js").renderToolUseMessage},get[Qe](){return import.meta.require("./chunk-q6rg5x26.js").renderToolUseMessage},get[Kt](){return import.meta.require("./chunk-g2892yb1.js").renderToolUseMessage},get[Wn](){return import.meta.require("./chunk-prdyrp70.js").renderToolUseMessage},get[dt](){return import.meta.require("./chunk-ng9gxxks.js").renderToolUseMessage},get[bc](){return import.meta.require("./chunk-ts41vm5p.js").renderToolUseMessage},get[Gt](){return import.meta.require("./chunk-430avnsk.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage},...e&&{[e.name]:e.ui.renderToolUseMessage,[e.names.ARTIFACT_COMMENTS_TOOL_NAME]:e.ui.renderCommentsToolUseMessage,[e.names.ARTIFACT_DATA_TOOL_NAME]:e.ui.renderDataToolUseMessage,[e.names.ARTIFACT_CHECK_TOOL_NAME]:e.ui.renderCheckToolUseMessage}};function qye(o,t,l){if(o.renderToolUseMessage)return o.renderToolUseMessage(t,l);return eIe(o.name,t,l)}function eIe(o,t,l){if(Object.hasOwn(T,o))return T[o]?.(t,l);return null}
export{qye,eIe};
