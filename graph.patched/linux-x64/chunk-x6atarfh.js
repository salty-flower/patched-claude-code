// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Im,_s}from"./chunk-zbp1935s.js";var t=["default"];function q1t(r){let e=r.toLowerCase();if(!t.includes(e))return null;return e}function Qx(r,e){let n=Im(e);return r.filter((o)=>{if(_s(e,o,n))return!1;if(o.underlyingV1ToolName&&_s(e,{name:o.underlyingV1ToolName},n))return!1;return o.mcpInfo?.effectiveMaxPermission!=="blocked"})}
export{q1t,Qx};
