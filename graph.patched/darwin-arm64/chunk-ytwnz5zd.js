// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{m}from"./chunk-7tpgnqqk.js";import{wt}from"./chunk-4sa61azs.js";import{VR}from"./chunk-tavwd3sq.js";import{hFt}from"./chunk-5c8t25mn.js";import{J9}from"./chunk-976zsk0h.js";import{s,mq,T,c,Ne}from"./chunk-5vjkaf25.js";var n="",u="",mFt="mcp";var p=m(()=>c({}).passthrough()),oan=m(()=>Ne([s(),T(c({type:s()}).passthrough()),mq()]).describe("MCP tool execution result")),q9=wt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:mFt,maxResultSizeChars:1e5,async description(){return u},async prompt(){return n},get inputSchema(){return p()},get outputSchema(){return oan()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return hFt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return VR(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&VR(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:J9(e)}}});
export{mFt,oan,q9};
