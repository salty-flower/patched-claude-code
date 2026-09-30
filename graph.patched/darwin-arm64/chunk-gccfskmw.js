// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Z}from"./chunk-jm8r4kd0.js";import{Zi}from"./chunk-rvych24x.js";import{gte}from"./chunk-bfqb6kr7.js";import{Us,Ic}from"./chunk-tn1j6vmr.js";function ojn(o,e){if(o.type!=="pending")return!1;let n=Us(o.name);return!e.some((t)=>Ic(t,o.name,n))}async function sjn(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function zXo(o){return o.some(sin)}function sin(o){return"role"in o.config&&o.config.role==="comms"}function jat(o){return o.mcpInfo?.role==="comms"}function vX(o){if(Zi())return o.filter((e)=>!jat(e));return o}async function jLe(o){if(!Zi())return;await sjn(o,(e,n)=>ojn(e,n.tools)&&!sin(e),{maxWaitMs:gte})}
export{ojn,sjn,zXo,sin,jat,vX,jLe};
