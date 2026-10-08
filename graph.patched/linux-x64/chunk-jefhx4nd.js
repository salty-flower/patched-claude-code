// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{Vt}from"./chunk-vecj8twx.js";import{dcn}from"./chunk-j6z7rz3z.js";import{Jue}from"./chunk-jf9cwvp3.js";import{o,I$,A,u,Fe}from"./chunk-w8db6ytr.js";var r="",s="",ZVn="mcp",lcn="mcp-display-only";var p=f(()=>u({}).passthrough()),XDr=f(()=>Fe([o(),A(u({type:o()}).passthrough()),I$()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var Oxe=Vt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:ZVn,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return XDr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return dcn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:c,mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Jue(i(e))}}});
export{ZVn,lcn,XDr,Oxe};
