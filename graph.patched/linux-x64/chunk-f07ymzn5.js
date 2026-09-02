// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ct}from"./chunk-aqwdkmxp.js";import{m}from"./chunk-asme1eq2.js";import{JT}from"./chunk-h6btyxas.js";import{iPt}from"./chunk-v065hbqm.js";import{DK}from"./chunk-x04cky9q.js";import{i,nq,I,p,dt}from"./chunk-kjzc23zf.js";var s="",n="",rPt="mcp";var u=m(()=>p({}).passthrough()),RQt=m(()=>dt([i(),I(p({type:i()}).passthrough()),nq()]).describe("MCP tool execution result")),xK=Ct({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:rPt,maxResultSizeChars:1e5,async description(){return n},async prompt(){return s},get inputSchema(){return u()},get outputSchema(){return RQt()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return iPt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return JT(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&JT(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:DK(e)}}});
export{rPt,RQt,xK};
