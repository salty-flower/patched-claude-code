// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{St}from"./chunk-v87fkm5m.js";import{QR}from"./chunk-2byjyg85.js";import{jBt}from"./chunk-ynf3q90p.js";import{a5}from"./chunk-rxs6j4sd.js";import{s,N3,T,c,$e}from"./chunk-wvjc3h2t.js";var n="",u="",UBt="mcp";var p=m(()=>c({}).passthrough()),vcn=m(()=>$e([s(),T(c({type:s()}).passthrough()),N3()]).describe("MCP tool execution result")),o5=St({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:UBt,maxResultSizeChars:1e5,async description(){return u},async prompt(){return n},get inputSchema(){return p()},get outputSchema(){return vcn()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return jBt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return QR(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&QR(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:a5(e)}}});
export{UBt,vcn,o5};
