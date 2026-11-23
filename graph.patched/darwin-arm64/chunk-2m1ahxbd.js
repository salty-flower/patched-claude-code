// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Bi}from"./chunk-gywtf5sd.js";import{eD}from"./chunk-bkcxqeq8.js";import{_0a}from"./chunk-vvssthvc.js";import{xqr}from"./chunk-29cd2nzs.js";import{br}from"./chunk-sk365049.js";var t="(value set by your organization)";function Bpt(r,e){if(e!=="managed")return r;return{...r,url:_0a(r.url)??t,...r.headers&&{headers:br(r.headers,()=>t)}}}function OMt(r){return r==="cached"?"pending":r}function Ofr(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Bpt({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:OMt(e.type),config:o,scope:e.config.scope,source:eD(e.name,e.config),serverInfo:Bi(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:xqr(e)}})}
export{Bpt,OMt,Ofr};
