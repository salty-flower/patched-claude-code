// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-r3adsed5.js";import{md}from"./chunk-ykf94k84.js";import{cHo}from"./chunk-vprtz9tr.js";import{FBe}from"./chunk-jspmyf04.js";import{Ht,A2}from"./chunk-2x4zmrns.js";import{wTr,ya,Av}from"./chunk-zaxe68t4.js";function Nq(r){if(FBe())cHo(wTr(r).map(([,t])=>Vps(t)),()=>Av(ya(G())))}function Vps(r){let t=md(r.url);return{url:r.url,title:r.title,favicon:r.favicon,type_id:t===null?void 0:A2(Ht(t)),kind:"frame",updated_at:new Date(r.updatedAt).toISOString()}}
export{Nq,Vps};
