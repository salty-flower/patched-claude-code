// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{X}from"./chunk-3rgses43.js";import{br,ic}from"./chunk-6816fcvc.js";import{Ore}from"./chunk-vbmnp0x3.js";import{ba}from"./chunk-k1s7182d.js";function qdn(o,e){if(o.type!=="pending")return!1;let n=br(o.name);return!e.some((t)=>ic(t,o.name,n))}async function Kdn(o,e,n){let{maxWaitMs:t,until:s}=n,i=(r)=>r.clients.some((p)=>e(p,r));if(!i(o()))return;let c=Date.now()+t;while(Date.now()<c){await X(50);let r=o();if(s?.(r)||!i(r))return}}function x$s(o){return o.some(XUe)}function XUe(o){return"role"in o.config&&o.config.role==="comms"}function Jjt(o){return o.mcpInfo?.role==="comms"}function JUe(o){if(ba())return o.filter((e)=>!Jjt(e));return o}async function kwt(o){if(!ba())return;await Kdn(o,(e,n)=>qdn(e,n.tools)&&!XUe(e),{maxWaitMs:Ore})}
export{qdn,Kdn,x$s,XUe,Jjt,JUe,kwt};
