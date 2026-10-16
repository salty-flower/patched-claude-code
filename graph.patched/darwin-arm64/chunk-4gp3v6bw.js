// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{Qt}from"./chunk-dxfmgtda.js";import{Vkn}from"./chunk-71ahk3j0.js";import{nce,eZo}from"./chunk-s16z8zmd.js";import{o,XI,C,u,$e}from"./chunk-82bgdty3.js";var r="",s="",wsr="mcp",Gkn="mcp-display-only";var p=f(()=>u({}).passthrough()),U9r=f(()=>$e([o(),C(u({type:o()}).passthrough()),XI()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var BDe=Qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:wsr,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return U9r()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Vkn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>eZo(c(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:nce(i(e))}}});
export{wsr,Gkn,U9r,BDe};
