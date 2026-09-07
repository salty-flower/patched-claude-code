// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{Ht}from"./chunk-ns5b1f8h.js";import{rC}from"./chunk-y3swhsrk.js";import{ZPt}from"./chunk-zsqd37q6.js";import{G4}from"./chunk-q9p84r4e.js";import{s,sK,k,c,Ne}from"./chunk-krs3sfpb.js";var n="",u="",JPt="mcp";var p=m(()=>c({}).passthrough()),Gen=m(()=>Ne([s(),k(c({type:s()}).passthrough()),sK()]).describe("MCP tool execution result")),U4=Ht({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:JPt,maxResultSizeChars:1e5,async description(){return u},async prompt(){return n},get inputSchema(){return p()},get outputSchema(){return Gen()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return ZPt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return rC(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&rC(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:G4(e)}}});
export{JPt,Gen,U4};
