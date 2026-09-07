// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ge,Bt,rt,In,Ll,Ut}from"./chunk-n495pc0t.js";import{mt}from"./chunk-9jpezf9c.js";var r=null,s=null,n=null,e={name:import.meta.require("./chunk-h3v3ba7a.js").ARTIFACT_TOOL_NAME,names:import.meta.require("./chunk-h3v3ba7a.js"),ui:import.meta.require("./chunk-drdjedr4.js")},M=[mt,Ge,Bt,In,rt,Ll,Ut,...r?[r.name]:[],...s?[s.name]:[],...n?[n.name]:[],...e?[e.name,e.names.ARTIFACT_COMMENTS_TOOL_NAME,e.names.ARTIFACT_DATA_TOOL_NAME,e.names.ARTIFACT_CHECK_TOOL_NAME]:[]],T={get[mt](){return import.meta.require("./chunk-8ha99qz7.js").renderToolUseMessage},get[Ge](){return import.meta.require("./chunk-80faarsr.js").renderToolUseMessage},get[Bt](){return import.meta.require("./chunk-8h2tcmqx.js").renderToolUseMessage},get[In](){return import.meta.require("./chunk-f2ehzaaz.js").renderToolUseMessage},get[rt](){return import.meta.require("./chunk-0gbaejn1.js").renderToolUseMessage},get[Ll](){return import.meta.require("./chunk-svgtfneg.js").renderToolUseMessage},get[Ut](){return import.meta.require("./chunk-cdnnweay.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage},...e&&{[e.name]:e.ui.renderToolUseMessage,[e.names.ARTIFACT_COMMENTS_TOOL_NAME]:e.ui.renderCommentsToolUseMessage,[e.names.ARTIFACT_DATA_TOOL_NAME]:e.ui.renderDataToolUseMessage,[e.names.ARTIFACT_CHECK_TOOL_NAME]:e.ui.renderCheckToolUseMessage}};function A_e(o,t,l){if(o.renderToolUseMessage)return o.renderToolUseMessage(t,l);return Kxe(o.name,t,l)}function Kxe(o,t,l){if(Object.hasOwn(T,o))return T[o]?.(t,l);return null}
export{A_e,Kxe};
