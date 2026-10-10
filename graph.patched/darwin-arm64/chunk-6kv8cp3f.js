// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Bl,gpe}from"./chunk-z6p21rxk.js";import{gn,Ig}from"./chunk-phm7wwmz.js";import{de}from"./chunk-p46ep603.js";import{lJ,lOn,rCt}from"./chunk-r9b1bf0c.js";import{Vz}from"./chunk-5bsa5x75.js";import{Jl}from"./chunk-stnaz0rq.js";var l=[gn,Ig].flatMap((o)=>[o,...gpe(o)]);function a(o,s){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(de(o).toolAliases??{})],t=e.flatMap(([n,i])=>[...s.includes(i)?[n]:[],...s.includes(n)?[i]:[]]),r=e.flatMap(([n,i])=>t.includes(i)?[n]:[]);return[...s,...t,...r]}function c(o,s){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e)||s.includes(Bl(e)));try{let e=lOn(o);return s.some((t)=>e.test(t))}catch{return!0}}function p(o,s){let e=Vz("tool.call"),t=Vz("tool.check");return Jl("classic.PreToolUse",void 0,Vz("classic.PreToolUse"))||o.some((r)=>Jl("tool.call",{tool:r},e)||Jl("tool.check",s?{tool:r}:rCt({name:r}),t))}function oGr(o,s){try{let e=s===void 0?l:[...l,s,...gpe(s)],t=a(o,e);if(p(t,t.length>e.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return lJ("PreToolUse").some((r)=>c(r.matcher,t)&&r.hooks.some((n)=>!(n.type==="callback"&&n.internal===!0)))}catch{return!0}}
export{oGr};
