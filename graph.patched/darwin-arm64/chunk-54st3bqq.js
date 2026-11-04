// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Qi}from"./chunk-h21zbzen.js";import{TVi}from"./chunk-rkvzpxg7.js";import{_I}from"./chunk-m3xkkr56.js";import{fxr}from"./chunk-nxc9btm2.js";import{xr}from"./chunk-h8k3zz44.js";var t="(value set by your organization)";function Ert(r,e){if(e!=="managed")return r;return{...r,url:TVi(r.url)??t,...r.headers&&{headers:xr(r.headers,()=>t)}}}function OEt(r){return r==="cached"?"pending":r}function D5n(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Ert({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:OEt(e.type),config:o,scope:e.config.scope,source:_I(e.name,e.config),serverInfo:Qi(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:fxr(e)}})}
export{Ert,OEt,D5n};
