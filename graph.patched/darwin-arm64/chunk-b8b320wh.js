// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{k}from"./chunk-27xjmczp.js";import{DMs,LMs}from"./chunk-31gxg38t.js";import{os}from"./chunk-98em9746.js";import{Eu}from"./chunk-k395ayhm.js";var qae=os({kind:"mcp_url_elicitation",payload:f(()=>Eu((e)=>typeof e==="object"&&e!==null&&("serverName"in e)&&("params"in e))),result:f(()=>Eu((e)=>typeof e==="object"&&e!==null)),default:{action:"cancel"}});function uve(){if(LMs())return;let e=!1,t;DMs(()=>{if(!e)e=!0,t=k("tengu_mcp_discovery_cache_enable",null)??void 0;return t})}
export{qae,uve};
