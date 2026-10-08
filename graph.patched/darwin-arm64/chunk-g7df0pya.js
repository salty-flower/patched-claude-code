// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Tl,Jce}from"./chunk-havdj21n.js";import{pn,hg}from"./chunk-rh7py0tc.js";import{de}from"./chunk-b8sdr56e.js";import{OX,gEt}from"./chunk-pbbgrqcq.js";import{vG}from"./chunk-h5c36281.js";import{zl}from"./chunk-b0n7jg2p.js";var l=[pn,hg].flatMap((o)=>[o,...Jce(o)]);function a(o,s){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(de(o).toolAliases??{})],t=e.flatMap(([n,i])=>[...s.includes(i)?[n]:[],...s.includes(n)?[i]:[]]),r=e.flatMap(([n,i])=>t.includes(i)?[n]:[]);return[...s,...t,...r]}function c(o,s){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e)||s.includes(Tl(e)));try{let e=new RegExp(o);return s.some((t)=>e.test(t))}catch{return!0}}function p(o,s){let e=vG("tool.call"),t=vG("tool.check");return zl("classic.PreToolUse",void 0,vG("classic.PreToolUse"))||o.some((r)=>zl("tool.call",{tool:r},e)||zl("tool.check",s?{tool:r}:gEt({name:r}),t))}function JFr(o,s){try{let e=s===void 0?l:[...l,s,...Jce(s)],t=a(o,e);if(p(t,t.length>e.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return OX("PreToolUse").some((r)=>c(r.matcher,t)&&r.hooks.some((n)=>!(n.type==="callback"&&n.internal===!0)))}catch{return!0}}
export{JFr};
