// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{f}from"./chunk-2hb5361r.js";import{p}from"./chunk-fdwn5gdv.js";import{PNe,XLn,JLn}from"./chunk-zssv4668.js";import{t}from"./chunk-gyf58rwf.js";import{mt}from"./chunk-68wmv4pr.js";import{sr}from"./chunk-nnctmda1.js";import{o,oe,u}from"./chunk-9cmjz7j9.js";var d="anthropic/toolHostInterface";function zin(){return PNe}function t1s(){let e=zin();return{experimental:e===void 0?{}:{[d]:e}}}var _=100;function n1s(e,a){let i=sr(a)?a[d]:void 0;if(i===void 0)return;let n=zin();if(n===void 0)return;let r=typeof i==="string"&&i.length<=_?XLn(mt(i,!1)):void 0,s=r===void 0?"unreadable":{peer_too_old:"session_too_old",self_too_old:"daemon_too_old",agreed:void 0}[JLn(n,r).kind];if(s===void 0)return;let l=`${e} was not run: ${r===void 0?"this server could not read the version of the interface that its caller stated with the call":s==="session_too_old"?`this session speaks version ${r.version} of the interface to this server, which works with version ${n.min_version} or later`:`this session works with version ${r.min_version} or later of the interface to this server, which speaks version ${n.version}`}. Retrying won't help: tell the user.`;return t(`MCP server: ${l}`,{level:"warn"}),f("mcp_serve_tool_output",`caller_interface_${s}`),{isError:!0,content:[{type:"text",text:l}],_meta:{[d]:{refused:s,range:n}}}}var V=p(()=>u({refused:o(),range:oe().optional()}));export{zin,t1s,n1s};
