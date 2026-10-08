// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{qt}from"./chunk-q21zbtsq.js";import{Hcn}from"./chunk-qr18b77s.js";import{rpe}from"./chunk-14jnkjxp.js";import{o,$F,A,u,$e}from"./chunk-hcyr0654.js";var r="",s="",kqn="mcp",Icn="mcp-display-only";var p=f(()=>u({}).passthrough()),RDr=f(()=>$e([o(),A(u({type:o()}).passthrough()),$F()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var jxe=qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:kqn,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return RDr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Hcn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:c,mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:rpe(i(e))}}});
export{kqn,Icn,RDr,jxe};
