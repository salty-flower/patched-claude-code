// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Z}from"./chunk-k2e8p61g.js";import{Aae}from"./chunk-rxhkyxxt.js";import{ua}from"./chunk-rk4y9mt1.js";import{ns,ed}from"./chunk-4hk3eh7v.js";function tlr(o,e){if(o.type!=="pending")return!1;let n=ns(o.name);return!e.some((t)=>ed(t,o.name,n))}async function nlr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function aMs(o){return o.some(FTn)}function FTn(o){return"role"in o.config&&o.config.role==="comms"}function UEt(o){return o.mcpInfo?.role==="comms"}function ate(o){if(ua())return o.filter((e)=>!UEt(e));return o}async function _6e(o){if(!ua())return;await nlr(o,(e,n)=>tlr(e,n.tools)&&!FTn(e),{maxWaitMs:Aae})}
export{tlr,nlr,aMs,FTn,UEt,ate,_6e};
