// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Y}from"./chunk-wk0rbc8w.js";import{dme}from"./chunk-3sg1dxk4.js";import{ba}from"./chunk-34h5dcqq.js";import{to,Ac}from"./chunk-08y6ag9s.js";function mPr(o,e){if(o.type!=="pending")return!1;let n=to(o.name);return!e.some((t)=>Ac(t,o.name,n))}async function gPr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Y(l);let r=o();if(s?.(r)||!i(r))return}}function EAo(o){return o.some(eEe)}function eEe(o){return"role"in o.config&&o.config.role==="comms"}function Zpt(o){return o.mcpInfo?.role==="comms"}function uae(o){if(ba())return o.filter((e)=>!Zpt(e));return o}async function g9e(o){if(!ba())return;await gPr(o,(e,n)=>mPr(e,n.tools)&&!eEe(e),{maxWaitMs:dme})}
export{mPr,gPr,EAo,eEe,Zpt,uae,g9e};
