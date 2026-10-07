// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{gl,mle}from"./chunk-peyxry7r.js";import{dn,tg}from"./chunk-p7dmh6b6.js";import{de}from"./chunk-3vptmsnb.js";import{gY,W_t}from"./chunk-yg07k3w8.js";import{hY}from"./chunk-arfywx4x.js";import{Mc}from"./chunk-6ehd82p6.js";var l=[dn,tg].flatMap((o)=>[o,...mle(o)]);function a(o,s){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(de(o).toolAliases??{})],t=e.flatMap(([n,i])=>[...s.includes(i)?[n]:[],...s.includes(n)?[i]:[]]),r=e.flatMap(([n,i])=>t.includes(i)?[n]:[]);return[...s,...t,...r]}function c(o,s){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e)||s.includes(gl(e)));try{let e=new RegExp(o);return s.some((t)=>e.test(t))}catch{return!0}}function p(o,s){let e=hY("tool.call"),t=hY("tool.check");return Mc("classic.PreToolUse",void 0,hY("classic.PreToolUse"))||o.some((r)=>Mc("tool.call",{tool:r},e)||Mc("tool.check",s?{tool:r}:W_t({name:r}),t))}function AOr(o,s){try{let e=s===void 0?l:[...l,s,...mle(s)],t=a(o,e);if(p(t,t.length>e.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return gY("PreToolUse").some((r)=>c(r.matcher,t)&&r.hooks.some((n)=>!(n.type==="callback"&&n.internal===!0)))}catch{return!0}}
export{AOr};
