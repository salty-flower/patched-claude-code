// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{Qt}from"./chunk-dpk0tdne.js";import{Ekn}from"./chunk-e9fygm27.js";import{Yde,m7o}from"./chunk-804kqdgp.js";import{o,VI,T,u,Fe}from"./chunk-zypddzr3.js";var r="",s="",Xor="mcp",wkn="mcp-display-only";var c=p(()=>u({}).passthrough()),a3r=p(()=>Fe([o(),T(u({type:o()}).passthrough()),VI()]).describe("MCP tool execution result"));function i(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function m(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var I0e=Qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:Xor,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return c()},get outputSchema(){return a3r()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Ekn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>m7o(i(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Yde(m(e))}}});
export{Xor,wkn,a3r,I0e};
