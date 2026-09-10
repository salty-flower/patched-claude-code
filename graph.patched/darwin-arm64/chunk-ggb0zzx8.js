// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{bt}from"./chunk-b9rrx1k4.js";import{sx}from"./chunk-e55d0yhx.js";import{h$t}from"./chunk-fbjxrefp.js";import{gK}from"./chunk-bmzb6f68.js";import{s,Nq,T,c,Ne}from"./chunk-asdfkk3x.js";var n="",u="",m$t="mcp";var p=m(()=>c({}).passthrough()),ycn=m(()=>Ne([s(),T(c({type:s()}).passthrough()),Nq()]).describe("MCP tool execution result")),dK=bt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:m$t,maxResultSizeChars:1e5,async description(){return u},async prompt(){return n},get inputSchema(){return p()},get outputSchema(){return ycn()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return h$t(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return sx(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&sx(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:gK(e)}}});
export{m$t,ycn,dK};
