// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Rt}from"./chunk-ajb75vkj.js";import{m}from"./chunk-55w4bsdv.js";import{Uk}from"./chunk-5e9qk3ys.js";import{KLt}from"./chunk-fd5x3v8x.js";import{Yz}from"./chunk-tva4g4bh.js";import{i,e4,R,c,We}from"./chunk-7a4adv8j.js";var s="",n="",zLt="mcp";var u=m(()=>c({}).passthrough()),Hon=m(()=>We([i(),R(c({type:i()}).passthrough()),e4()]).describe("MCP tool execution result")),Xz=Rt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:zLt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return Hon()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return KLt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return Uk(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&Uk(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Yz(e)}}});
export{zLt,Hon,Xz};
