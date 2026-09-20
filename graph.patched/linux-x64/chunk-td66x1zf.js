// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Et}from"./chunk-3bn1z6rt.js";import{f}from"./chunk-67jj8qay.js";import{H6t}from"./chunk-cpm0xwhv.js";import{qY}from"./chunk-jrr22ynp.js";import{jx}from"./chunk-xa5vhhb8.js";import{o,a9,C,u,Fe}from"./chunk-ehsmc9ae.js";var n="",p="",I6t="mcp";var a=f(()=>u({}).passthrough()),PTn=f(()=>Fe([o(),C(u({type:o()}).passthrough()),a9()]).describe("MCP tool execution result")),BY=Et({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:I6t,maxResultSizeChars:1e5,async description(){return p},async prompt(){return n},get inputSchema(){return a()},get outputSchema(){return PTn()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return H6t(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let r=t?.columns;if(typeof e==="string")return jx(e,r);if(Array.isArray(e))return e.some((s)=>s.type==="text"&&jx(s.text,r));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:qY(e)}}});
export{I6t,PTn,BY};
