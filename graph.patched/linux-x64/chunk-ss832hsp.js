// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{Vt}from"./chunk-1xqd80pz.js";import{Uon}from"./chunk-2hmgj4fz.js";import{ude}from"./chunk-krpbqfy8.js";import{o,fle,C,u,Fe}from"./chunk-6kgnb6mn.js";var r="",s="",lWn="mcp",$on="mcp-display-only";var p=f(()=>u({}).passthrough()),CRr=f(()=>Fe([o(),C(u({type:o()}).passthrough()),fle()]).describe("MCP tool execution result"));function c(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function i(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var CCe=Vt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:lWn,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return p()},get outputSchema(){return CRr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return Uon(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:c,mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:ude(i(e))}}});
export{lWn,$on,CRr,CCe};
