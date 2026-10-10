// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Q}from"./chunk-yjc18bey.js";import{Tce}from"./chunk-qdcqm5pj.js";import{xa}from"./chunk-vvj0cwgx.js";import{Bo,rd}from"./chunk-g9z2s3cs.js";function Rfr(o,e){if(o.type!=="pending")return!1;let n=Bo(o.name);return!e.some((t)=>rd(t,o.name,n))}async function xfr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Q(l);let r=o();if(s?.(r)||!i(r))return}}function VWs(o){return o.some(u0n)}function u0n(o){return"role"in o.config&&o.config.role==="comms"}function HCt(o){return o.mcpInfo?.role==="comms"}function ire(o){if(xa())return o.filter((e)=>!HCt(e));return o}async function Sqe(o){if(!xa())return;await xfr(o,(e,n)=>Rfr(e,n.tools)&&!u0n(e),{maxWaitMs:Tce})}
export{Rfr,xfr,VWs,u0n,HCt,ire,Sqe};
