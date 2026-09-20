// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Z}from"./chunk-q2h0fawe.js";import{HVe}from"./chunk-9r1wzbbk.js";import{_i}from"./chunk-w5bpjyb2.js";import{Si,pc}from"./chunk-kmhka96v.js";function Man(o,e){if(o.type!=="pending")return!1;let n=Si(o.name);return!e.some((t)=>pc(t,o.name,n))}async function Nan(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function x9r(o){return o.some(KNt)}function KNt(o){return"role"in o.config&&o.config.role==="comms"}function xVe(o){return o.mcpInfo?.role==="comms"}function G3(o){if(_i())return o.filter((e)=>!xVe(e));return o}async function pEe(o){if(!_i())return;await Nan(o,(e,n)=>Man(e,n.tools)&&!KNt(e),{maxWaitMs:HVe})}
export{Man,Nan,x9r,KNt,xVe,G3,pEe};
