// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Et}from"./chunk-5cn3fpmq.js";import{m}from"./chunk-ffgkv432.js";import{Ck}from"./chunk-darxmw8c.js";import{kOt}from"./chunk-tex1czbg.js";import{cz}from"./chunk-z90t2xke.js";import{i,wq,R,c,We}from"./chunk-rwtwjs93.js";var s="",n="",vOt="mcp";var u=m(()=>c({}).passthrough()),Ftn=m(()=>We([i(),R(c({type:i()}).passthrough()),wq()]).describe("MCP tool execution result")),lz=Et({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:vOt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return Ftn()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return kOt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return Ck(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&Ck(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:cz(e)}}});
export{vOt,Ftn,lz};
