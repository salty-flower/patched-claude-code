// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ui}from"./chunk-374g520d.js";import{Q0}from"./chunk-yfhfp9nd.js";import{ROa}from"./chunk-bj5dxabz.js";import{o6r}from"./chunk-5z5dtbrz.js";import{Sr}from"./chunk-edn7ezmf.js";var t="(value set by your organization)";function Mpt(r,e){if(e!=="managed")return r;return{...r,url:ROa(r.url)??t,...r.headers&&{headers:Sr(r.headers,()=>t)}}}function E0t(r){return r==="cached"?"pending":r}function Zur(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Mpt({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:E0t(e.type),config:o,scope:e.config.scope,source:Q0(e.name,e.config),serverInfo:Ui(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:o6r(e)}})}
export{Mpt,E0t,Zur};
