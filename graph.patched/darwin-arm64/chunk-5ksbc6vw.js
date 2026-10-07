// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ee}from"./chunk-ws170zqm.js";import{Vse}from"./chunk-2yxypstk.js";import{ra}from"./chunk-w98r1prf.js";import{ps,Fc}from"./chunk-qs7t29dk.js";function Ttr(o,e){if(o.type!=="pending")return!1;let n=ps(o.name);return!e.some((t)=>Fc(t,o.name,n))}async function Rtr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await ee(l);let r=o();if(s?.(r)||!i(r))return}}function nks(o){return o.some(XEn)}function XEn(o){return"role"in o.config&&o.config.role==="comms"}function mSt(o){return o.mcpInfo?.role==="comms"}function LZ(o){if(ra())return o.filter((e)=>!mSt(e));return o}async function j2e(o){if(!ra())return;await Rtr(o,(e,n)=>Ttr(e,n.tools)&&!XEn(e),{maxWaitMs:Vse})}
export{Ttr,Rtr,nks,XEn,mSt,LZ,j2e};
