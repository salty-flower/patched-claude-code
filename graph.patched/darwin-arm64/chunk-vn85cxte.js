// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{Ft}from"./chunk-q01dwdda.js";import{UXt}from"./chunk-fqea5d2s.js";import{vie}from"./chunk-aj37dw3q.js";import{o,Nre,k,d,$e}from"./chunk-g4gq2k0z.js";var r="",s="",yHn="mcp",FXt="mcp-display-only";var u=p(()=>d({}).passthrough()),Uhr=p(()=>$e([o(),k(d({type:o()}).passthrough()),Nre()]).describe("MCP tool execution result")),MEe=Ft({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:yHn,backgrounding:"self",maxResultSizeChars:1e5,async description(){return s},async prompt(){return r},get inputSchema(){return u()},get outputSchema(){return Uhr()},create(){return{async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}}}},renderToolUseMessage(e,{verbose:t}){return UXt(e,{verbose:t})},userFacingName:()=>"mcp",mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:vie(e)}}});
export{yHn,FXt,Uhr,MEe};
