// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{itt}from"./chunk-vtrgktb7.js";import{xc,T4e}from"./chunk-amq2nck9.js";import{Sn,Pf}from"./chunk-hg1f9dgc.js";import{fe}from"./chunk-9172rx1h.js";import{xp}from"./chunk-6qm6xb2a.js";import{Rbe}from"./chunk-mzc1zmw9.js";var n=[Sn,Pf].flatMap((o)=>[o,...T4e(o)]);function l(o){let e=[...Object.entries(o.options.toolAliases??{}),...Object.entries(fe(o).toolAliases??{})],s=e.flatMap(([t,i])=>[...n.includes(i)?[t]:[],...n.includes(t)?[i]:[]]),r=e.flatMap(([t,i])=>s.includes(i)?[t]:[]);return[...n,...s,...r]}function a(o,e){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((s)=>s.trim()).some((s)=>e.includes(s)||e.includes(xc(s)));try{let s=new RegExp(o);return e.some((r)=>s.test(r))}catch{return!0}}function p(o){return xp("classic.PreToolUse",void 0,itt())||o.some((e)=>xp("tool.call",{tool:e})||xp("tool.check",{tool:e}))}function eYe(o){try{let e=l(o);if(p(e))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return Rbe("PreToolUse").some((s)=>a(s.matcher,e)&&s.hooks.some((r)=>!(r.type==="callback"&&r.internal===!0)))}catch{return!0}}
export{eYe};
