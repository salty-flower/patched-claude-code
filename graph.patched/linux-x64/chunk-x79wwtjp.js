// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{id,Zte}from"./chunk-d3cqnp4r.js";import{dt,Kt}from"./chunk-dzt95g1x.js";import{un,dg}from"./chunk-8g5pckzs.js";import{le}from"./chunk-439tptzw.js";import{tfe,ujn,jUe,cut}from"./chunk-tmx06y1m.js";import{_U}from"./chunk-g1w01sh7.js";import{Ya}from"./chunk-8prxqv50.js";import{ij}from"./chunk-g2qk7vh6.js";import{xv}from"./chunk-zr9522zy.js";var a=[un,dg].flatMap((o)=>[o,...Zte(o)]);function c(o,t){let r=[...Object.entries(o.options.toolAliases??{}),...Object.entries(le(o).toolAliases??{})],e=r.flatMap(([n,i])=>[...t.includes(i)?[n]:[],...t.includes(n)?[i]:[]]),s=r.flatMap(([n,i])=>e.includes(i)?[n]:[]);return[...t,...e,...s]}function u(o){return o.hooks.some((t)=>!cut({hook:t}))}function f(o,t,r=!0){if(!o||o==="*")return!0;if(/^[a-zA-Z0-9_|, -]+$/.test(o))return o.split(/[|,]/).map((e)=>e.trim()).some((e)=>t.includes(e)||t.includes(id(e)));try{let e=ujn(o);return t.some((s)=>e.test(s))}catch(e){return r||e instanceof tfe}}function l(o,t,r=()=>!1){let e=_U("tool.call").filter((n)=>!r(n)),s=_U("tool.check");return Ya("classic.PreToolUse",void 0,_U("classic.PreToolUse"))||o.some((n)=>Ya("tool.call",{tool:n},e)||Ya("tool.check",t?{tool:n}:jUe({name:n}),s))}function WZr(o,t){try{let r=t.flatMap((s)=>[s,...Zte(s)]),e=c(o,r);return l(e,e.length>r.length,xv)}catch{return!0}}function zZr(o,t){try{let r=t===void 0?a:[...a,t,...Zte(t)],e=c(o,r);if(l(e,e.length>r.length))return!0;if(o.sessionHooksRegistry.has(o.agentId??o.session.id,"PreToolUse"))return!0;return ij("PreToolUse").some((s)=>f(s.matcher,e)&&u(s))}catch{return!0}}var d=[dt,Kt].flatMap((o)=>[o,...Zte(o)]);function GZr(){return l(d,!1,xv)||ij("PreToolUse").some((o)=>f(o.matcher,d,!1)&&u(o))}
export{WZr,zZr,GZr};
