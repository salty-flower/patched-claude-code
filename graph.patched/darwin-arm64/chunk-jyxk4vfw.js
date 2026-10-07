// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{qt}from"./chunk-ax2crbgp.js";import{ssn}from"./chunk-ja9hsfzn.js";import{_de}from"./chunk-ghb3tk60.js";import{o,hle,T,u,$e}from"./chunk-seb9y51t.js";var r="",s="",x2n="mcp",rsn="mcp-display-only";var p=f(()=>u({}).passthrough()),txr=f(()=>$e([o(),T(u({type:o()}).passthrough()),hle()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var DTe=qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:x2n,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return txr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return ssn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:c,mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:_de(i(e))}}});
export{x2n,rsn,txr,DTe};
