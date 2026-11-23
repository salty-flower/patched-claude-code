// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{l}from"./chunk-mfxenhbr.js";import{cKr,pKr,u0a}from"./chunk-vvssthvc.js";import{Bi}from"./chunk-gywtf5sd.js";import{fe}from"./chunk-c63g0fmv.js";var i=fe({noted:new WeakMap},(t)=>{t.noted=new WeakMap});function Yht(t){let e=[];for(let r of t){if(!Bi(r))continue;let{config:n}=r,o=n&&typeof n==="object"&&"url"in n&&typeof n.url==="string"?n.url:null;if(o!==null&&u0a(o))s(n);if(o!==null&&pKr(o))e.push(r)}return e.length===1?e[0]:null}function s(t){let e=cKr();if(i.noted.get(t)===e)return;i.noted.set(t,e),l("tengu_mcp_meta_name_hash_unfit",{lifted:e})}
export{Yht};
