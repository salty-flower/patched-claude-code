// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qh}from"./chunk-wqb2b4v0.js";import{Ei}from"./chunk-m8nhymg4.js";function zMt(s){return s.type==="assistant"&&s.message.model!==Ei&&s.isMeta!==!0&&s.isVirtual!==!0}function Npr(s,t){let e=s.supersedesUuids;if(e===void 0||e.length===0)return!1;if(e.includes(t.uuid))return!0;return qh([t]).some((i)=>e.includes(i.uuid))}
export{zMt,Npr};
