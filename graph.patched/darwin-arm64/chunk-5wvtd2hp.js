// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{wi}from"./chunk-cemwep0x.js";import{Ir}from"./chunk-qnvapa9t.js";import{G0}from"./chunk-nfj5wr3f.js";import{oai}from"./chunk-fewhvqt5.js";import{tor}from"./chunk-j2d407c1.js";var t="(value set by your organization)";function n9e(r,e){if(e!=="managed")return r;return{...r,url:oai(r.url)??t,...r.headers&&{headers:Ir(r.headers,()=>t)}}}function Hdt(r){return r==="cached"?"pending":r}function g0n(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=n9e({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:Hdt(e.type),config:o,scope:e.config.scope,source:G0(e.name,e.config),serverInfo:wi(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:tor(e)}})}
export{n9e,Hdt,g0n};
