// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Kp,Gk}from"./chunk-1901fdh6.js";import{Uu}from"./chunk-bnfhb7sj.js";import{ne}from"./chunk-btnsqe7h.js";import{Ud}from"./chunk-tx0fhcwf.js";import{Ip,i5n}from"./chunk-718k5xe7.js";import{Ku}from"./chunk-9gxhswjq.js";var g="claudecode/agentId",p="claudecode/agentType",c="claudecode/isObserver",d=128,f=64;function GVt(r){let{name:n,config:e}=r;if(n!==Ud)return!1;return Ip(e)||e.scope==="dynamic"&&"url"in e&&typeof e.url==="string"&&i5n(e.url)}function Xkn(r,n){let{agentId:e,agentContext:t}=n;if(e===void 0||!GVt(r))return{};if(Gk(t)&&t.isMainSession===!0&&t.agentId===e)return{};let o=ne(Uu(n.agentType??""),d);return{[g]:e,...o!==""&&{[p]:o},...u(e,n)&&{[c]:!0}}}function u(r,{agentContext:n,taskRegistry:e}){let t=[r],o=new Set;for(let i=t.pop();i!==void 0;i=t.pop()){if(o.has(i))continue;if(o.size>=f)return!0;o.add(i);let s=e.get(i);if(s!==void 0&&Ku(s))return!0;if(s!==void 0&&"parentAgentId"in s&&typeof s.parentAgentId==="string")t.push(s.parentAgentId);if(!Kp(n)){let a=i===n.agentId?n.parentAgentId:i===r?n.agentId:void 0;if(a!==void 0)t.push(a)}}return!1}
export{GVt,Xkn};
