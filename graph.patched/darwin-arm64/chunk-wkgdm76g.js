// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ne}from"./chunk-ax7r0qj7.js";function GWr(n){if(n===null||typeof n!=="object")return;let o=n.protocols;if(!Array.isArray(o))return;let t=o.filter((r)=>typeof r==="string");return t.length>0?t:void 0}function z6o(n){let o=GWr(n);if(o===void 0)return"";return` (subprotocols: ${o.map((t)=>`"${t}"`).join(", ")})`}var $7n=4,e=48;function p2t(n){let o=n.slice(0,$7n).map((r)=>r.length>e?`${ne(r,e)}\u2026`:r),t=n.length-o.length;return`${o.map((r)=>`"${r}"`).join(", ")}${t>0?` (+${t} more)`:""}`}
export{GWr,z6o,$7n,p2t};
