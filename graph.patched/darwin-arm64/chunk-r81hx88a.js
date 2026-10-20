// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{Qt}from"./chunk-f4yykyp9.js";import{X0n}from"./chunk-s7cabppm.js";import{cpe,$hs}from"./chunk-hybdbh2c.js";import{o,bO,C,u,Ue}from"./chunk-xv841za9.js";var r="",s="",khr="mcp",q0n="mcp-display-only";var p=f(()=>u({}).passthrough()),$lo=f(()=>Ue([o(),C(u({type:o()}).passthrough()),bO()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var UFe=Qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:khr,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return $lo()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return X0n(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>$hs(c(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:cpe(i(e))}}});
export{khr,q0n,$lo,UFe};
