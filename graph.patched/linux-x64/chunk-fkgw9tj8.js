// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Al,Vce}from"./chunk-tfrn9jh8.js";import{pn,hg}from"./chunk-571ddenq.js";import{de}from"./chunk-ewp5gvgt.js";import{AX,ovt}from"./chunk-47cp25kj.js";import{pG}from"./chunk-hsq7swsk.js";import{Gl}from"./chunk-40x8rjxy.js";var l=[pn,hg].flatMap((o)=>[o,...Vce(o)]);function a(o,s){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(de(o).toolAliases??{})],t=e.flatMap(([n,i])=>[...s.includes(i)?[n]:[],...s.includes(n)?[i]:[]]),r=e.flatMap(([n,i])=>t.includes(i)?[n]:[]);return[...s,...t,...r]}function c(o,s){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e)||s.includes(Al(e)));try{let e=new RegExp(o);return s.some((t)=>e.test(t))}catch{return!0}}function p(o,s){let e=pG("tool.call"),t=pG("tool.check");return Gl("classic.PreToolUse",void 0,pG("classic.PreToolUse"))||o.some((r)=>Gl("tool.call",{tool:r},e)||Gl("tool.check",s?{tool:r}:ovt({name:r}),t))}function v$r(o,s){try{let e=s===void 0?l:[...l,s,...Vce(s)],t=a(o,e);if(p(t,t.length>e.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return AX("PreToolUse").some((r)=>c(r.matcher,t)&&r.hooks.some((n)=>!(n.type==="callback"&&n.internal===!0)))}catch{return!0}}
export{v$r};
