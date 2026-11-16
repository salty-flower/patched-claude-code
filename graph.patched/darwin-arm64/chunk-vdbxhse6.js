// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{X}from"./chunk-0cvfymxt.js";import{Sr,ic}from"./chunk-s0ve5p66.js";import{Bre}from"./chunk-mw7bxj9q.js";import{Sa}from"./chunk-r75nz0eq.js";function fcn(o,e){if(o.type!=="pending")return!1;let n=Sr(o.name);return!e.some((t)=>ic(t,o.name,n))}async function pcn(o,e,n){let{maxWaitMs:t,until:s}=n,i=(r)=>r.clients.some((p)=>e(p,r));if(!i(o()))return;let c=Date.now()+t;while(Date.now()<c){await X(50);let r=o();if(s?.(r)||!i(r))return}}function p$s(o){return o.some(eUe)}function eUe(o){return"role"in o.config&&o.config.role==="comms"}function ijt(o){return o.mcpInfo?.role==="comms"}function tUe(o){if(Sa())return o.filter((e)=>!ijt(e));return o}async function Pwt(o){if(!Sa())return;await pcn(o,(e,n)=>fcn(e,n.tools)&&!eUe(e),{maxWaitMs:Bre})}
export{fcn,pcn,p$s,eUe,ijt,tUe,Pwt};
