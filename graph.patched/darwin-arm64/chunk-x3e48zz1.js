// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{hs}from"./chunk-zpb414p7.js";import{Jr}from"./chunk-a7cah040.js";import{bBo}from"./chunk-fmk5eq99.js";import{CU}from"./chunk-59zy4j10.js";import{hgn}from"./chunk-q8pmvej3.js";var t="(value set by your organization)";function DIe(r,e){if(e!=="managed")return r;return{...r,url:bBo(r.url)??t,...r.headers&&{headers:Jr(r.headers,()=>t)}}}function nje(r){return r==="cached"?"pending":r}function Wzt(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=DIe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:nje(e.type),config:o,scope:e.config.scope,source:CU(e.name,e.config),serverInfo:hs(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:hgn(e)}})}
export{DIe,nje,Wzt};
