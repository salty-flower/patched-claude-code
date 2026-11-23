// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{l}from"./chunk-hs29jdk6.js";import{$6r,j6r,vOa}from"./chunk-bj5dxabz.js";import{Ui}from"./chunk-374g520d.js";import{fe}from"./chunk-c63g0fmv.js";var i=fe({noted:new WeakMap},(t)=>{t.noted=new WeakMap});function Xht(t){let e=[];for(let r of t){if(!Ui(r))continue;let{config:n}=r,o=n&&typeof n==="object"&&"url"in n&&typeof n.url==="string"?n.url:null;if(o!==null&&vOa(o))s(n);if(o!==null&&j6r(o))e.push(r)}return e.length===1?e[0]:null}function s(t){let e=$6r();if(i.noted.get(t)===e)return;i.noted.set(t,e),l("tengu_mcp_meta_name_hash_unfit",{lifted:e})}
export{Xht};
