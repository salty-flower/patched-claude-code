// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ef,$E}from"./chunk-s46qgfx7.js";import{ig}from"./chunk-pey4mmsy.js";import{re}from"./chunk-fqzh3zpr.js";import{Uu,nf,f0n}from"./chunk-6pm26t04.js";import{lp}from"./chunk-qmgtg38c.js";var g="claudecode/agentId",p="claudecode/agentType",c="claudecode/isObserver",d=128,f=64;function nxr(r){let{name:n,config:e}=r;if(n!==Uu)return!1;return nf(e)||e.scope==="dynamic"&&"url"in e&&typeof e.url==="string"&&f0n(e.url)}function isn(r,n){let{agentId:e,agentContext:t}=n;if(e===void 0||!nxr(r))return{};if($E(t)&&t.isMainSession===!0&&t.agentId===e)return{};let o=re(ig(n.agentType??""),d);return{[g]:e,...o!==""&&{[p]:o},...u(e,n)&&{[c]:!0}}}function u(r,{agentContext:n,taskRegistry:e}){let t=[r],o=new Set;for(let i=t.pop();i!==void 0;i=t.pop()){if(o.has(i))continue;if(o.size>=f)return!0;o.add(i);let s=e.get(i);if(s!==void 0&&lp(s))return!0;if(s!==void 0&&"parentAgentId"in s&&typeof s.parentAgentId==="string")t.push(s.parentAgentId);if(!ef(n)){let a=i===n.agentId?n.parentAgentId:i===r?n.agentId:void 0;if(a!==void 0)t.push(a)}}return!1}
export{nxr,isn};
