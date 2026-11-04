// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Nf,pE}from"./chunk-3e6pdcy8.js";import{Ci}from"./chunk-km6bp290.js";import{I1e}from"./chunk-0x9x817t.js";var i="tengu_hazel_sluice";function tNo(){return(Nf()||pE())&&I1e(i)==="on"}function nNo(e,o,s){if(o.mcpInfo===void 0||s.length===0||!tNo())return;let t=Ci(o);if(!s.some((n)=>n.type==="addRules"&&n.behavior==="allow"&&n.destination==="session"&&n.rules.some((r)=>r.toolName===t&&r.ruleContent===void 0)))return;e.setSessionToolPermissionContext((n)=>n.alwaysAllowRules.session?.includes(t)!==!0||n.connectorCardAllows?.has(t)===!0?n:{...n,connectorCardAllows:new Set([...n.connectorCardAllows??[],t])})}function h5s(e){let o=xfn(e.toolPermissionContext);return o===e.toolPermissionContext?e:{...e,toolPermissionContext:o}}function xfn(e,o){let s=e.connectorCardAllows;if(s===void 0||o!==void 0&&!s.has(o))return e;let t=new Set(o===void 0?[]:s);if(o!==void 0)t.delete(o);return{...e,connectorCardAllows:t.size===0?void 0:t}}
export{tNo,nNo,h5s,xfn};
