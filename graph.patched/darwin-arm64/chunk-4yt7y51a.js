// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Z}from"./chunk-zr6jq9j9.js";import{kHe}from"./chunk-ebyfjb2m.js";import{vi}from"./chunk-wxegmfn6.js";import{fi,Kc}from"./chunk-apr1pmkm.js";function oDn(o,e){if(o.type!=="pending")return!1;let n=fi(o.name);return!e.some((t)=>Kc(t,o.name,n))}async function sDn(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await Z(l);let r=o();if(s?.(r)||!i(r))return}}function aFo(o){return o.some(XJt)}function XJt(o){return"role"in o.config&&o.config.role==="comms"}function Hnt(o){return o.mcpInfo?.role==="comms"}function k9(o){if(vi())return o.filter((e)=>!Hnt(e));return o}async function AHe(o){if(!vi())return;await sDn(o,(e,n)=>oDn(e,n.tools)&&!XJt(e),{maxWaitMs:kHe})}
export{oDn,sDn,aFo,XJt,Hnt,k9,AHe};
