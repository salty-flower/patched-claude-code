// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ac,Yde}from"./chunk-paax7ahr.js";import{ct,Yt}from"./chunk-ex8w1b3a.js";import{dn,Ag}from"./chunk-rvawj5kr.js";import{ce}from"./chunk-waw2sr63.js";import{Aae,Uzn,Sme,xft}from"./chunk-we8d14zg.js";import{Fx}from"./chunk-3sgr9mv1.js";import{Aa}from"./chunk-npmba379.js";import{Xj}from"./chunk-a5y31q5f.js";import{sb}from"./chunk-p5ebdgw7.js";var a=[dn,Ag].flatMap((o)=>[o,...Yde(o)]);function c(o,t){let r=[...Object.entries(o.options.toolAliases??{}),...Object.entries(ce(o).toolAliases??{})],e=r.flatMap(([n,i])=>[...t.includes(i)?[n]:[],...t.includes(n)?[i]:[]]),s=r.flatMap(([n,i])=>e.includes(i)?[n]:[]);return[...t,...e,...s]}function u(o){return o.hooks.some((t)=>!xft({hook:t}))}function f(o,t,r=!0){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>t.includes(e)||t.includes(ac(e)));try{let e=Uzn(o);return t.some((s)=>e.test(s))}catch(e){return r||e instanceof Aae}}function l(o,t,r=()=>!1){let e=Fx("tool.call").filter((n)=>!r(n)),s=Fx("tool.check");return Aa("classic.PreToolUse",void 0,Fx("classic.PreToolUse"))||o.some((n)=>Aa("tool.call",{tool:n},e)||Aa("tool.check",t?{tool:n}:Sme({name:n}),s))}function Cio(o,t){try{let r=t.flatMap((s)=>[s,...Yde(s)]),e=c(o,r);return l(e,e.length>r.length,sb)}catch{return!0}}function Tio(o,t){try{let r=t===void 0?a:[...a,t,...Yde(t)],e=c(o,r);if(l(e,e.length>r.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return Xj("PreToolUse").some((s)=>f(s.matcher,e)&&u(s))}catch{return!0}}var d=[ct,Yt].flatMap((o)=>[o,...Yde(o)]);function Aio(){return l(d,!1,sb)||Xj("PreToolUse").some((o)=>f(o.matcher,d,!1)&&u(o))}
export{Cio,Tio,Aio};
