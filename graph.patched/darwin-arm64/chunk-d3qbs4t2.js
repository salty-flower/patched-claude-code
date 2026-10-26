// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{tn}from"./chunk-epan1q4y.js";import{Kft}from"./chunk-31gxg38t.js";import{zme,kPs}from"./chunk-15bj870x.js";import{o,RM,C,u,Fe}from"./chunk-k395ayhm.js";var r="",s="",nTr="mcp",S1n="mcp-display-only";var p=f(()=>u({}).passthrough()),VSo=f(()=>Fe([o(),C(u({type:o()}).passthrough()),RM()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var fBe=tn({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:nTr,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return VSo()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Kft(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>kPs(c(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:zme(i(e))}}});
export{nTr,S1n,VSo,fBe};
