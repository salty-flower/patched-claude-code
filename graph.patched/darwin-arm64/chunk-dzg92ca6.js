// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{vt}from"./chunk-qe3f6kd6.js";import{f}from"./chunk-67jj8qay.js";import{KKt}from"./chunk-b2w886g3.js";import{XY}from"./chunk-n5yebsy6.js";import{qx}from"./chunk-1gty88gv.js";import{o,g8,k,u,$e}from"./chunk-s6d8yza1.js";var n="",p="",VKt="mcp";var a=f(()=>u({}).passthrough()),ZTn=f(()=>$e([o(),k(u({type:o()}).passthrough()),g8()]).describe("MCP tool execution result")),qY=vt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:VKt,maxResultSizeChars:1e5,async description(){return p},async prompt(){return n},get inputSchema(){return a()},get outputSchema(){return ZTn()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return KKt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let r=t?.columns;if(typeof e==="string")return qx(e,r);if(Array.isArray(e))return e.some((s)=>s.type==="text"&&qx(s.text,r));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:XY(e)}}});
export{VKt,ZTn,qY};
