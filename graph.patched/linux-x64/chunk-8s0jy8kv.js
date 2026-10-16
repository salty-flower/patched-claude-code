// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{J}from"./chunk-r2xfgg0x.js";import{zpe}from"./chunk-3m5gqwry.js";import{ra}from"./chunk-wkfn8zyx.js";import{po,Sc}from"./chunk-peqw4kvv.js";function mkr(o,e){if(o.type!=="pending")return!1;let n=po(o.name);return!e.some((t)=>Sc(t,o.name,n))}async function gkr(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await J(l);let r=o();if(s?.(r)||!i(r))return}}function S_o(o){return o.some(Owe)}function Owe(o){return"role"in o.config&&o.config.role==="comms"}function wct(o){return o.mcpInfo?.role==="comms"}function Zse(o){if(ra())return o.filter((e)=>!wct(e));return o}async function u3e(o){if(!ra())return;await gkr(o,(e,n)=>mkr(e,n.tools)&&!Owe(e),{maxWaitMs:zpe})}
export{mkr,gkr,S_o,Owe,wct,Zse,u3e};
