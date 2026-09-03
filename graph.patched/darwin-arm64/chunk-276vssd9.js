// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Qe,zt,dt,jn,fc,Gt}from"./chunk-h6md7820.js";import{yt}from"./chunk-rjwwgcjh.js";var r=null,s=null,n=null,e={name:import.meta.require("./chunk-yy8wvz3d.js").ARTIFACT_TOOL_NAME,names:import.meta.require("./chunk-yy8wvz3d.js"),ui:import.meta.require("./chunk-g0w812rx.js")},M=[yt,Qe,zt,jn,dt,fc,Gt,...r?[r.name]:[],...s?[s.name]:[],...n?[n.name]:[],...e?[e.name,e.names.ARTIFACT_COMMENTS_TOOL_NAME,e.names.ARTIFACT_DATA_TOOL_NAME,e.names.ARTIFACT_CHECK_TOOL_NAME]:[]],T={get[yt](){return import.meta.require("./chunk-qyk6gfnx.js").renderToolUseMessage},get[Qe](){return import.meta.require("./chunk-r7gngvgx.js").renderToolUseMessage},get[zt](){return import.meta.require("./chunk-h56x7jkn.js").renderToolUseMessage},get[jn](){return import.meta.require("./chunk-xfppbtee.js").renderToolUseMessage},get[dt](){return import.meta.require("./chunk-08k2enqg.js").renderToolUseMessage},get[fc](){return import.meta.require("./chunk-qx457f5p.js").renderToolUseMessage},get[Gt](){return import.meta.require("./chunk-rb95r3cs.js").renderToolUseMessage},...r&&{[r.name]:r.ui.renderToolUseMessage},...s&&{[s.name]:s.ui.renderToolUseMessage},...n&&{[n.name]:n.ui.renderToolUseMessage},...e&&{[e.name]:e.ui.renderToolUseMessage,[e.names.ARTIFACT_COMMENTS_TOOL_NAME]:e.ui.renderCommentsToolUseMessage,[e.names.ARTIFACT_DATA_TOOL_NAME]:e.ui.renderDataToolUseMessage,[e.names.ARTIFACT_CHECK_TOOL_NAME]:e.ui.renderCheckToolUseMessage}};function F_e(o,t,l){if(o.renderToolUseMessage)return o.renderToolUseMessage(t,l);return CHe(o.name,t,l)}function CHe(o,t,l){if(Object.hasOwn(T,o))return T[o]?.(t,l);return null}
export{F_e,CHe};
