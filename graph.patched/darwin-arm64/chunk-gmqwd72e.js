// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{Kt}from"./chunk-hwpb27as.js";import{Pgn}from"./chunk-mjw19wmh.js";import{jie,xGo}from"./chunk-jbg84wzq.js";import{o,MP,A,u,Ue}from"./chunk-9cmjz7j9.js";var r="",s="",PYn="mcp",Rgn="mcp-display-only";var c=p(()=>u({}).passthrough()),jBr=p(()=>Ue([o(),A(u({type:o()}).passthrough()),MP()]).describe("MCP tool execution result"));function i(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function m(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var kOe=Kt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:PYn,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return c()},get outputSchema(){return jBr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Pgn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>xGo(i(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:jie(m(e))}}});
export{PYn,Rgn,jBr,kOe};
