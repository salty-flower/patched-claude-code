// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{Qt}from"./chunk-h3dn4j2q.js";import{kHn}from"./chunk-1zezrrsj.js";import{spe,Qgs}from"./chunk-gp7q9ckp.js";import{o,gO,T,u,Ue}from"./chunk-mqaa2rrp.js";var r="",s="",Vgr="mcp",vHn="mcp-display-only";var c=p(()=>u({}).passthrough()),rlo=p(()=>Ue([o(),T(u({type:o()}).passthrough()),gO()]).describe("MCP tool execution result"));function i(e){if(!Array.isArray(e)||!e.some(a))return e;return e.map((t)=>a(t)?{...t,source:{...t.source,data:""}}:t)}function m(e){return Array.isArray(e)&&e.some(n)?e.filter((t)=>!n(t)):e}function n(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data===""}function a(e){return e?.type==="document"&&e.source?.type==="base64"&&e.source.data!==""}var x$e=Qt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:Vgr,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return c()},get outputSchema(){return rlo()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return kHn(e,{verbose:t})},userFacingName:()=>"mcp",stripForCreation:(e)=>Qgs(i(e)),mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:spe(m(e))}}});
export{Vgr,vHn,rlo,x$e};
