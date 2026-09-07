// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{wt}from"./chunk-3hs7jdtb.js";import{ck}from"./chunk-1692k4g5.js";import{uOt}from"./chunk-y4nmzt6t.js";import{Y4}from"./chunk-rz5x1h69.js";import{s,mq,v,c,$e}from"./chunk-zd09sacr.js";var n="",u="",lOt="mcp";var p=m(()=>c({}).passthrough()),dtn=m(()=>$e([s(),v(c({type:s()}).passthrough()),mq()]).describe("MCP tool execution result")),X4=wt({isMcp:!0,isOpenWorld(){return!1},name:"mcp",uiTableKey:lOt,maxResultSizeChars:1e5,async description(){return u},async prompt(){return n},get inputSchema(){return p()},get outputSchema(){return dtn()},async call(){return{data:""}},async checkPermissions(){return{behavior:"passthrough",message:"MCPTool requires permission."}},renderToolUseMessage(e,{verbose:t}){return uOt(e,{verbose:t})},userFacingName:()=>"mcp",isResultTruncated(e,t){let o=t?.columns;if(typeof e==="string")return ck(e,o);if(Array.isArray(e))return e.some((r)=>r.type==="text"&&ck(r.text,o));return!1},mapToolResultToToolResultBlockParam(e,t){return{tool_use_id:t,type:"tool_result",content:Y4(e)}}});
export{lOt,dtn,X4};
