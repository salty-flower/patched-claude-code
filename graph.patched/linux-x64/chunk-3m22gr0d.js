// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Aoe}from"./chunk-yfhfp9nd.js";import{swt}from"./chunk-zsbykcbx.js";import{ZUe}from"./chunk-f1d0bkme.js";import{DNe,UHt}from"./chunk-63qwrpk1.js";import{$Ht}from"./chunk-s2gpjdck.js";import{dk}from"./chunk-6npbjrmy.js";function oHn(e){if(swt(e.client,e.name)!==void 0)return"file_reference";if($Ht(e.meta)!==void 0&&ZUe.some((t)=>Aoe(e.client,t)))return"listed_mark";if(dk(e.client.config)===void 0)return;let{marked:r,unfilled:n,everyCall:i}=DNe(e.schema);return r.length>0||n.length>0||i||UHt(e.schema).length>0?"schema_mark":void 0}
export{oHn};
