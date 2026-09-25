// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{vs}from"./chunk-ekshy3qa.js";import{os}from"./chunk-s8xs8s76.js";import{xvo}from"./chunk-emn764wn.js";import{A$}from"./chunk-h3bc7dkc.js";import{bsn}from"./chunk-n875m8bj.js";var t="(value set by your organization)";function Xke(r,e){if(e!=="managed")return r;return{...r,url:xvo(r.url)??t,...r.headers&&{headers:os(r.headers,()=>t)}}}function QFe(r){return r==="cached"?"pending":r}function a1t(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Xke({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:QFe(e.type),config:o,scope:e.config.scope,source:A$(e.name,e.config),serverInfo:vs(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:bsn(e)}})}
export{Xke,QFe,a1t};
