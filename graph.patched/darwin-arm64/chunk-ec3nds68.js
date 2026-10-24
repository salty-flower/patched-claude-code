// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{gc,Dse}from"./chunk-ykcv164t.js";import{at,qt}from"./chunk-j2d407c1.js";import{Lt,Su}from"./chunk-hxm5yqk0.js";import{ae}from"./chunk-hx3hkv7r.js";import{Kde,k9n,qB,S_t}from"./chunk-hrffy2zs.js";import{Lv}from"./chunk-emh9bc9e.js";import{Ni}from"./chunk-gqevy7zx.js";import{B2}from"./chunk-tcdz2w3z.js";import{Db}from"./chunk-b6n7b0tm.js";var a=[Lt,Su].flatMap((o)=>[o,...Dse(o)]);function c(o,t){let r=[...Object.entries(o.options.toolAliases??{}),...Object.entries(ae(o).toolAliases??{})],e=r.flatMap(([n,i])=>[...t.includes(i)?[n]:[],...t.includes(n)?[i]:[]]),s=r.flatMap(([n,i])=>e.includes(i)?[n]:[]);return[...t,...e,...s]}function u(o){return o.hooks.some((t)=>!S_t({hook:t}))}function f(o,t,r=!0){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>t.includes(e)||t.includes(gc(e)));try{let e=k9n(o);return t.some((s)=>e.test(s))}catch(e){return r||e instanceof Kde}}function l(o,t,r=()=>!1){let e=Lv("tool.call").filter((n)=>!r(n)),s=Lv("tool.check");return Ni("classic.PreToolUse",void 0,Lv("classic.PreToolUse"))||o.some((n)=>Ni("tool.call",{tool:n},e)||Ni("tool.check",t?{tool:n}:qB({name:n}),s))}function Qyo(o,t){try{let r=t.flatMap((s)=>[s,...Dse(s)]),e=c(o,r);return l(e,e.length>r.length,Db)}catch{return!0}}function Zyo(o,t){try{let r=t===void 0?a:[...a,t,...Dse(t)],e=c(o,r);if(l(e,e.length>r.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return B2("PreToolUse").some((s)=>f(s.matcher,e)&&u(s))}catch{return!0}}var d=[at,qt].flatMap((o)=>[o,...Dse(o)]);function e_o(){return l(d,!1,Db)||B2("PreToolUse").some((o)=>f(o.matcher,d,!1)&&u(o))}
export{Qyo,Zyo,e_o};
