// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Tt}from"./chunk-tm6zne0x.js";import{h}from"./chunk-s0y4aasp.js";import{WT}from"./chunk-hrvkymct.js";import{Q0t}from"./chunk-vd0ex9b6.js";import{mW}from"./chunk-023pjg9z.js";import{i,Q4,H,m,lt}from"./chunk-kfr3f08h.js";var s="",n="",X0t="mcp";var u=h(()=>m({}).passthrough()),z8t=h(()=>lt([i(),H(m({type:i()}).passthrough()),Q4()]).describe("MCP tool execution result")),dW=Tt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:X0t,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return z8t()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return Q0t(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return WT(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&WT(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:mW(e)}}});
export{X0t,z8t,dW};
