// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{wX}from"./chunk-v6w3kx9c.js";import{cg,ys}from"./chunk-t0yzptsk.js";var s=["default"];function Bjt(r){let e=r.toLowerCase();if(!s.includes(e))return null;return e}function fL(r,e){let o=cg(e);return r.filter((n)=>{if(ys(e,n,o))return!1;if(n.underlyingV1ToolName&&ys(e,{name:n.underlyingV1ToolName},o))return!1;if(n.mcpInfo===void 0){let t=wX(n.name);if(t!==void 0&&ys(e,t,o)&&t.isEnabled())return!1}return n.mcpInfo?.effectiveMaxPermission!=="blocked"})}
export{Bjt,fL};
