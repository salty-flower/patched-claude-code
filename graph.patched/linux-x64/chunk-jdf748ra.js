// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ac,jde}from"./chunk-7fdn9j0a.js";import{ct,Yt}from"./chunk-4qs43hr1.js";import{dn,Cg}from"./chunk-293nkhh0.js";import{ce}from"./chunk-gwrkawm1.js";import{wae,L2n,mme,Mft}from"./chunk-9cvav3vj.js";import{Dx}from"./chunk-v7aynt7y.js";import{Ca}from"./chunk-f6v4sk7j.js";import{Bj}from"./chunk-a9v6e7dy.js";import{oS}from"./chunk-j0r93f1t.js";var a=[dn,Cg].flatMap((o)=>[o,...jde(o)]);function c(o,t){let r=[...Object.entries(o.options.toolAliases??{}),...Object.entries(ce(o).toolAliases??{})],e=r.flatMap(([n,i])=>[...t.includes(i)?[n]:[],...t.includes(n)?[i]:[]]),s=r.flatMap(([n,i])=>e.includes(i)?[n]:[]);return[...t,...e,...s]}function u(o){return o.hooks.some((t)=>!Mft({hook:t}))}function f(o,t,r=!0){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>t.includes(e)||t.includes(ac(e)));try{let e=L2n(o);return t.some((s)=>e.test(s))}catch(e){return r||e instanceof wae}}function l(o,t,r=()=>!1){let e=Dx("tool.call").filter((n)=>!r(n)),s=Dx("tool.check");return Ca("classic.PreToolUse",void 0,Dx("classic.PreToolUse"))||o.some((n)=>Ca("tool.call",{tool:n},e)||Ca("tool.check",t?{tool:n}:mme({name:n}),s))}function tio(o,t){try{let r=t.flatMap((s)=>[s,...jde(s)]),e=c(o,r);return l(e,e.length>r.length,oS)}catch{return!0}}function nio(o,t){try{let r=t===void 0?a:[...a,t,...jde(t)],e=c(o,r);if(l(e,e.length>r.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return Bj("PreToolUse").some((s)=>f(s.matcher,e)&&u(s))}catch{return!0}}var d=[ct,Yt].flatMap((o)=>[o,...jde(o)]);function rio(){return l(d,!1,oS)||Bj("PreToolUse").some((o)=>f(o.matcher,d,!1)&&u(o))}
export{tio,nio,rio};
