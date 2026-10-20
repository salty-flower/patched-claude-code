// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Y}from"./chunk-2ckwvz0j.js";import{mme}from"./chunk-fagaehp9.js";import{Sa}from"./chunk-z4v7p2x5.js";import{to,Tc}from"./chunk-8365qjaj.js";function FPr(o,e){if(o.type!=="pending")return!1;let n=to(o.name);return!e.some((t)=>Tc(t,o.name,n))}async function $Pr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Y(l);let r=o();if(s?.(r)||!i(r))return}}function tAo(o){return o.some(ave)}function ave(o){return"role"in o.config&&o.config.role==="comms"}function aft(o){return o.mcpInfo?.role==="comms"}function _ae(o){if(Sa())return o.filter((e)=>!aft(e));return o}async function vYe(o){if(!Sa())return;await $Pr(o,(e,n)=>FPr(e,n.tools)&&!ave(e),{maxWaitMs:mme})}
export{FPr,$Pr,tAo,ave,aft,_ae,vYe};
