// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G}from"./chunk-m8nhymg4.js";import{md}from"./chunk-x875pyqe.js";import{$Ho}from"./chunk-yn8kqmwp.js";import{BBe}from"./chunk-jrzzk4bn.js";import{Ht,RW}from"./chunk-w4v6hkg1.js";import{ZTr,ya,AE}from"./chunk-wqb2b4v0.js";function UV(r){if(BBe())$Ho(ZTr(r).map(([,t])=>Sms(t)),()=>AE(ya(G())))}function Sms(r){let t=md(r.url);return{url:r.url,title:r.title,favicon:r.favicon,type_id:t===null?void 0:RW(Ht(t)),kind:"frame",updated_at:new Date(r.updatedAt).toISOString()}}
export{UV,Sms};
