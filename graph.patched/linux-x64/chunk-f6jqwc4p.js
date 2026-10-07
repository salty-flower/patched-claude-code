// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ds}from"./chunk-p72qafcy.js";import{pL}from"./chunk-9wqh5j7s.js";import{Xr}from"./chunk-aywwjcwq.js";import{Yis}from"./chunk-jnystawq.js";import{zIn}from"./chunk-0wqb5n04.js";var t="(value set by your organization)";function N$e(r,e){if(e!=="managed")return r;return{...r,url:Yis(r.url)??t,...r.headers&&{headers:Xr(r.headers,()=>t)}}}function S6e(r){return r==="cached"?"pending":r}function crn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=N$e({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:S6e(e.type),config:o,scope:e.config.scope,source:pL(e.name,e.config),serverInfo:Ds(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:zIn(e)}})}
export{N$e,S6e,crn};
