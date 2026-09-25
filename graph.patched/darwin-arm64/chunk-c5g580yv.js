// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Dt}from"./chunk-mvgykbex.js";import{f}from"./chunk-1y7zyxh8.js";import{p6t}from"./chunk-ta2nsg9r.js";import{ine}from"./chunk-znk11jqb.js";import{o,iee,T,d,$e}from"./chunk-rvnav1yx.js";var r="",s="",V_n="mcp",d6t="mcp-display-only";var p=f(()=>d({}).passthrough()),uJn=f(()=>$e([o(),T(d({type:o()}).passthrough()),iee()]).describe("MCP tool execution result")),Fye=Dt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:V_n,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return uJn()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return p6t(e,{verbose:t})},userFacingName:()=>"mcp",mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:ine(e)}}});
export{V_n,d6t,uJn,Fye};
