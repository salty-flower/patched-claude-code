// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{J}from"./chunk-54xe5s81.js";import{Ype}from"./chunk-qsk4xjs1.js";import{oa}from"./chunk-gqh7gqyg.js";import{po,bc}from"./chunk-nsdbpz9m.js";function Dkr(o,e){if(o.type!=="pending")return!1;let n=po(o.name);return!e.some((t)=>bc(t,o.name,n))}async function Lkr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await J(l);let r=o();if(s?.(r)||!i(r))return}}function Y_o(o){return o.some(Fwe)}function Fwe(o){return"role"in o.config&&o.config.role==="comms"}function xct(o){return o.mcpInfo?.role==="comms"}function iie(o){if(oa())return o.filter((e)=>!xct(e));return o}async function S9e(o){if(!oa())return;await Lkr(o,(e,n)=>Dkr(e,n.tools)&&!Fwe(e),{maxWaitMs:Ype})}
export{Dkr,Lkr,Y_o,Fwe,xct,iie,S9e};
