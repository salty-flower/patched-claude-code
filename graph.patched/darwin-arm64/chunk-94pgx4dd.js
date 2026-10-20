// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ii}from"./chunk-q6vwcyd6.js";import{Yr}from"./chunk-kpqr86hf.js";import{DL}from"./chunk-d7eqjts1.js";import{P9s}from"./chunk-prq01t47.js";import{sXn}from"./chunk-ex8w1b3a.js";var t="(value set by your organization)";function GKe(r,e){if(e!=="managed")return r;return{...r,url:P9s(r.url)??t,...r.headers&&{headers:Yr(r.headers,()=>t)}}}function Fot(r){return r==="cached"?"pending":r}function GTn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=GKe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:Fot(e.type),config:o,scope:e.config.scope,source:DL(e.name,e.config),serverInfo:ii(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:sXn(e)}})}
export{GKe,Fot,GTn};
