// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{kt}from"./chunk-vb9my8xr.js";import{m}from"./chunk-asme1eq2.js";import{ZR}from"./chunk-fy12d89p.js";import{pxt}from"./chunk-59ppvyfr.js";import{Nq}from"./chunk-1fsp1n10.js";import{i,i4,H,f,dt}from"./chunk-skrj2yn0.js";var s="",n="",uxt="mcp";var u=m(()=>f({}).passthrough()),rQt=m(()=>dt([i(),H(f({type:i()}).passthrough()),i4()]).describe("MCP tool execution result")),Oq=kt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:uxt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return rQt()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return pxt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return ZR(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&ZR(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Nq(e)}}});
export{uxt,rQt,Oq};
