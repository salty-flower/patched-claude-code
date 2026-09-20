// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Z}from"./chunk-d3xvzk7s.js";import{yKe}from"./chunk-brstd4tz.js";import{_i}from"./chunk-3xtazbfr.js";import{bi,uc}from"./chunk-er8eeww9.js";function han(o,e){if(o.type!=="pending")return!1;let n=bi(o.name);return!e.some((t)=>uc(t,o.name,n))}async function yan(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function W6r(o){return o.some(PNt)}function PNt(o){return"role"in o.config&&o.config.role==="comms"}function hKe(o){return o.mcpInfo?.role==="comms"}function $V(o){if(_i())return o.filter((e)=>!hKe(e));return o}async function rve(o){if(!_i())return;await yan(o,(e,n)=>han(e,n.tools)&&!PNt(e),{maxWaitMs:yKe})}
export{han,yan,W6r,PNt,hKe,$V,rve};
