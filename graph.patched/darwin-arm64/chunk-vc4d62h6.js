// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{J}from"./chunk-wrh0fk6w.js";import{io,Gd}from"./chunk-km6bp290.js";import{hye}from"./chunk-xxtb05ec.js";import{za}from"./chunk-vcvx8k72.js";function Iao(o,e){if(o.type!=="pending")return!1;let n=io(o.name);return!e.some((t)=>Gd(t,o.name,n))}async function Mao(o,e,n){let{maxWaitMs:t,until:s,pollMs:l=50}=n,i=(r)=>r.clients.some((c)=>e(c,r));if(!i(o()))return;let p=Date.now()+t;while(Date.now()<p){await J(l);let r=o();if(s?.(r)||!i(r))return}}function fus(o){return o.some(I0e)}function I0e(o){return"role"in o.config&&o.config.role==="comms"}function zIt(o){return o.mcpInfo?.role==="comms"}function M0e(o){if(za())return o.filter((e)=>!zIt(e));return o}async function Sut(o){if(!za())return;await Mao(o,(e,n)=>Iao(e,n.tools)&&!I0e(e),{maxWaitMs:hye})}
export{Iao,Mao,fus,I0e,zIt,M0e,Sut};
