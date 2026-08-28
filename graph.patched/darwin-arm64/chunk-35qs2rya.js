// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{At}from"./chunk-p24f2xe3.js";import{h}from"./chunk-s0y4aasp.js";import{VA}from"./chunk-j5h9ds58.js";import{lAt}from"./chunk-efnsf1em.js";import{y5}from"./chunk-qhzzftxt.js";import{i,tj,k,m,lt}from"./chunk-ca00k0wg.js";var s="",n="",sAt="mcp";var u=h(()=>m({}).passthrough()),g8t=h(()=>lt([i(),k(m({type:i()}).passthrough()),tj()]).describe("MCP tool execution result")),m5=At({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:sAt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return g8t()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return lAt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return VA(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&VA(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:y5(e)}}});
export{sAt,g8t,m5};
