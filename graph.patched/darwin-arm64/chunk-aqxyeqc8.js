// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ms}from"./chunk-nqb0d8cm.js";import{yL}from"./chunk-y0b3kvx1.js";import{Xr}from"./chunk-8mvda08c.js";import{Has}from"./chunk-6pm26t04.js";import{lOn}from"./chunk-ma17m27h.js";var t="(value set by your organization)";function BFe(r,e){if(e!=="managed")return r;return{...r,url:Has(r.url)??t,...r.headers&&{headers:Xr(r.headers,()=>t)}}}function C4e(r){return r==="cached"?"pending":r}function vrn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=BFe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:C4e(e.type),config:o,scope:e.config.scope,source:yL(e.name,e.config),serverInfo:Ms(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:lOn(e)}})}
export{BFe,C4e,vrn};
