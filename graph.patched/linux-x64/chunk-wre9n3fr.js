// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{$Oe}from"./chunk-gvnjrkx9.js";import{dt}from"./chunk-ch29rnqb.js";import{Jc,V8e}from"./chunk-2an23fcc.js";import{wn,Lm}from"./chunk-2n66rk9w.js";import{me}from"./chunk-cjnj9xh3.js";import{A_,Owe,wde}from"./chunk-necd073b.js";var n=[wn,Lm].flatMap((e)=>[e,...V8e(e)]);function l(e){let o=[...Object.entries(e.options.toolAliases??{}),...Object.entries(me(e).toolAliases??{})],s=o.flatMap(([t,i])=>[...n.includes(i)?[t]:[],...n.includes(t)?[i]:[]]),r=o.flatMap(([t,i])=>s.includes(i)?[t]:[]);return[...n,...s,...r]}function a(e,o){if(!e||e==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(e))return e.split(/[|,]/).map((s)=>s.trim()).some((s)=>o.includes(s)||o.includes(Jc(s)));try{let s=new RegExp(e);return o.some((r)=>s.test(r))}catch{return!0}}function u(){return dt().loadedModules.filter((e)=>!(e.name===$Oe&&wde(e)))}function d(e){return A_("classic.PreToolUse",void 0,u())||e.some((o)=>A_("tool.call",{tool:o})||A_("tool.check",{tool:o}))}function NTt(e){try{let o=l(e);if(d(o))return!0;if(e.sessionHooksRegistry.has(e.agentId??e.session.id,"PreToolUse"))return!0;return Owe("PreToolUse").some((s)=>a(s.matcher,o)&&s.hooks.some((r)=>!(r.type==="callback"&&r.internal===!0)))}catch{return!0}}
export{NTt};
