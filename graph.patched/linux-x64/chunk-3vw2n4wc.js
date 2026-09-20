// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{St}from"./chunk-ayzpxv7a.js";import{ne}from"./chunk-h4q23q42.js";var l=["note","lang"];function $Tt(e){if(!ne(e))return null;let r=l.filter((n)=>(n in e)),t,i;if(e.action==="call_endpoint"&&typeof e.body==="string"){let n=St(e.body,!1);if(Array.isArray(n))t="array";else if(n!==null&&typeof n==="object")t="object";i=n}if(r.length===0&&t===void 0)return null;let o={...e},s=[];for(let n of r)delete o[n],s.push(`legacy_${n}`);if(t!==void 0)o.body=i,s.push(`body_json_string_to_${t}`);return{input:o,shapeClass:s.join("+")}}
export{$Tt};
