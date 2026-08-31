// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{CX}from"./chunk-dd5488d7.js";import{cg,_s}from"./chunk-9mcb844f.js";var s=["default"];function U2t(r){let e=r.toLowerCase();if(!s.includes(e))return null;return e}function hI(r,e){let o=cg(e);return r.filter((n)=>{if(_s(e,n,o))return!1;if(n.underlyingV1ToolName&&_s(e,{name:n.underlyingV1ToolName},o))return!1;if(n.mcpInfo===void 0){let t=CX(n.name);if(t!==void 0&&_s(e,t,o)&&t.isEnabled())return!1}return n.mcpInfo?.effectiveMaxPermission!=="blocked"})}
export{U2t,hI};
