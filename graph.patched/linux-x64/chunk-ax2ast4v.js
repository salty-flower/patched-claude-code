// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{As}from"./chunk-9155m2kg.js";import{Gr}from"./chunk-eqmywwjn.js";import{eL}from"./chunk-7f1jmyrt.js";import{jWs}from"./chunk-zkbf0zdp.js";import{NYn}from"./chunk-dzt95g1x.js";var t="(value set by your organization)";function EVe(r,e){if(e!=="managed")return r;return{...r,url:jWs(r.url)??t,...r.headers&&{headers:Gr(r.headers,()=>t)}}}function bnt(r){return r==="cached"?"pending":r}function gvn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=EVe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:bnt(e.type),config:o,scope:e.config.scope,source:eL(e.name,e.config),serverInfo:As(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:NYn(e)}})}
export{EVe,bnt,gvn};
