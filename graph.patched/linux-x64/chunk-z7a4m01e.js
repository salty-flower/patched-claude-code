// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ee}from"./chunk-0mwsqxme.js";import{Use}from"./chunk-kf1mkct9.js";import{ra}from"./chunk-66cs9xf6.js";import{ps,Nc}from"./chunk-qt7wfk46.js";function itr(o,e){if(o.type!=="pending")return!1;let n=ps(o.name);return!e.some((t)=>Nc(t,o.name,n))}async function atr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await ee(l);let r=o();if(s?.(r)||!i(r))return}}function _ks(o){return o.some(Ovn)}function Ovn(o){return"role"in o.config&&o.config.role==="comms"}function rbt(o){return o.mcpInfo?.role==="comms"}function xZ(o){if(ra())return o.filter((e)=>!rbt(e));return o}async function HWe(o){if(!ra())return;await atr(o,(e,n)=>itr(e,n.tools)&&!Ovn(e),{maxWaitMs:Use})}
export{itr,atr,_ks,Ovn,rbt,xZ,HWe};
