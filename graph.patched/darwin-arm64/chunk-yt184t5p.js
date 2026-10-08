// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{zs}from"./chunk-5g70wphz.js";import{oN}from"./chunk-nwqfvmza.js";import{Qr}from"./chunk-vd0a9d2s.js";import{bys}from"./chunk-630hazsp.js";import{ALn}from"./chunk-zp1a5mr6.js";var t="(value set by your organization)";function nUe(r,e){if(e!=="managed")return r;return{...r,url:bys(r.url)??t,...r.headers&&{headers:Qr(r.headers,()=>t)}}}function _8e(r){return r==="cached"?"pending":r}function Nan(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=nUe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:_8e(e.type),config:o,scope:e.config.scope,source:oN(e.name,e.config),serverInfo:zs(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:ALn(e)}})}
export{nUe,_8e,Nan};
