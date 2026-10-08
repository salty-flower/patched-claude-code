// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Z}from"./chunk-670y7hd9.js";import{Sae}from"./chunk-cbyv8c54.js";import{ua}from"./chunk-8hjxbbs2.js";import{ns,Zc}from"./chunk-zk0yxkwh.js";function Har(o,e){if(o.type!=="pending")return!1;let n=ns(o.name);return!e.some((t)=>Zc(t,o.name,n))}async function Dar(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function EHs(o){return o.some(SCn)}function SCn(o){return"role"in o.config&&o.config.role==="comms"}function xvt(o){return o.mcpInfo?.role==="comms"}function tte(o){if(ua())return o.filter((e)=>!xvt(e));return o}async function d2e(o){if(!ua())return;await Dar(o,(e,n)=>Har(e,n.tools)&&!SCn(e),{maxWaitMs:Sae})}
export{Har,Dar,EHs,SCn,xvt,tte,d2e};
