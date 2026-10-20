// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{uf,iv}from"./chunk-bvn0epzr.js";import{Pf}from"./chunk-tdxkq523.js";import{re}from"./chunk-42txhxmf.js";import{zd}from"./chunk-jdf15pat.js";import{Kp,l7n}from"./chunk-prq01t47.js";import{op}from"./chunk-wapchjag.js";var g="claudecode/agentId",p="claudecode/agentType",c="claudecode/isObserver",d=128,f=64;function UYt(r){let{name:n,config:e}=r;if(n!==zd)return!1;return Kp(e)||e.scope==="dynamic"&&"url"in e&&typeof e.url==="string"&&l7n(e.url)}function eHn(r,n){let{agentId:e,agentContext:t}=n;if(e===void 0||!UYt(r))return{};if(iv(t)&&t.isMainSession===!0&&t.agentId===e)return{};let o=re(Pf(n.agentType??""),d);return{[g]:e,...o!==""&&{[p]:o},...u(e,n)&&{[c]:!0}}}function u(r,{agentContext:n,taskRegistry:e}){let t=[r],o=new Set;for(let i=t.pop();i!==void 0;i=t.pop()){if(o.has(i))continue;if(o.size>=f)return!0;o.add(i);let s=e.get(i);if(s!==void 0&&op(s))return!0;if(s!==void 0&&"parentAgentId"in s&&typeof s.parentAgentId==="string")t.push(s.parentAgentId);if(!uf(n)){let a=i===n.agentId?n.parentAgentId:i===r?n.agentId:void 0;if(a!==void 0)t.push(a)}}return!1}
export{UYt,eHn};
