// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{X}from"./chunk-3kevgx4j.js";import{io,jc}from"./chunk-9m893g74.js";import{Eye}from"./chunk-xbqn04a1.js";import{Ia}from"./chunk-a331t11a.js";function R1r(o,e){if(o.type!=="pending")return!1;let n=io(o.name);return!e.some((t)=>jc(t,o.name,n))}async function x1r(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await X(l);let r=o();if(s?.(r)||!i(r))return}}function $$o(o){return o.some(uTe)}function uTe(o){return"role"in o.config&&o.config.role==="comms"}function V_t(o){return o.mcpInfo?.role==="comms"}function Zde(o){if(Ia())return o.filter((e)=>!V_t(e));return o}async function CZe(o){if(!Ia())return;await x1r(o,(e,n)=>R1r(e,n.tools)&&!uTe(e),{maxWaitMs:Eye})}
export{R1r,x1r,$$o,uTe,V_t,Zde,CZe};
