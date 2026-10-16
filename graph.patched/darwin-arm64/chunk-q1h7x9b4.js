// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ad,ine}from"./chunk-zw6exh70.js";import{dt,qt}from"./chunk-1jaxs49d.js";import{un,cg}from"./chunk-b39hwker.js";import{le}from"./chunk-d1sth4tv.js";import{afe,Ijn,QUe,_ut}from"./chunk-tmyxac3a.js";import{CU}from"./chunk-2vj7p8x3.js";import{Xa}from"./chunk-a1afqgfa.js";import{hj}from"./chunk-k3mbgdfp.js";import{PE}from"./chunk-wsf8fmk0.js";var a=[un,cg].flatMap((o)=>[o,...ine(o)]);function c(o,t){let r=[...Object.entries(o.options.toolAliases??{}),...Object.entries(le(o).toolAliases??{})],e=r.flatMap(([n,i])=>[...t.includes(i)?[n]:[],...t.includes(n)?[i]:[]]),s=r.flatMap(([n,i])=>e.includes(i)?[n]:[]);return[...t,...e,...s]}function u(o){return o.hooks.some((t)=>!_ut({hook:t}))}function f(o,t,r=!0){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>t.includes(e)||t.includes(ad(e)));try{let e=Ijn(o);return t.some((s)=>e.test(s))}catch(e){return r||e instanceof afe}}function l(o,t,r=()=>!1){let e=CU("tool.call").filter((n)=>!r(n)),s=CU("tool.check");return Xa("classic.PreToolUse",void 0,CU("classic.PreToolUse"))||o.some((n)=>Xa("tool.call",{tool:n},e)||Xa("tool.check",t?{tool:n}:QUe({name:n}),s))}function Oeo(o,t){try{let r=t.flatMap((s)=>[s,...ine(s)]),e=c(o,r);return l(e,e.length>r.length,PE)}catch{return!0}}function Heo(o,t){try{let r=t===void 0?a:[...a,t,...ine(t)],e=c(o,r);if(l(e,e.length>r.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return hj("PreToolUse").some((s)=>f(s.matcher,e)&&u(s))}catch{return!0}}var d=[dt,qt].flatMap((o)=>[o,...ine(o)]);function Meo(){return l(d,!1,PE)||hj("PreToolUse").some((o)=>f(o.matcher,d,!1)&&u(o))}
export{Oeo,Heo,Meo};
