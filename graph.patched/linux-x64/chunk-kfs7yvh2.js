// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{y_}from"./chunk-dxktn51d.js";import{te}from"./chunk-0vmvv2wk.js";import{K2}from"./chunk-65jn763j.js";import{a}from"./chunk-cd1a8ced.js";import{_Ie}from"./chunk-2gh4h0fv.js";import{Tp}from"./chunk-1wch6j7b.js";import{s5t}from"./chunk-q1wc7q0b.js";function m(e){let t=f();if(t===null)return!1;let r=t.wire.MCP_ROW_TOOL_NAMES;if(!e.some((n)=>n.mcpInfo?.serverName===K2&&!r.includes(n.mcpInfo.toolName)))return!1;return l(t)}function f(){return null}function l(e){return(y_()??[]).some((t)=>t.type==="connected"&&t.name===K2&&e.entry.isArtifactsMcpLaptopEntry(t.config))}function DAn(e,t=e){let r=f();if(r===null)return[...e];let n=r.wire.MCP_ROW_TOOL_NAMES,i=t.filter((o)=>o.mcpInfo?.serverName===K2);if(i.length===0||i.some((o)=>!n.includes(o.mcpInfo?.toolName??""))||!l(r))return[...e];return e.filter((o)=>o.mcpInfo?.serverName!==K2)}function crs(e,t){if(!Tp()){if(!m(t))return[...e];let r=te();r.builtInArtifactHiddenForMcp=!0,r.autoReact.enabledMemo=!1,s5t(r.live),((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-0xjt36tf.js").clearCommandMemoizationCaches()}return s(e)}function urs(e){return Tp()?s(e):[...e]}function nJr(e){if(_Ie(e))return!0;let t=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-x6h1ta93.js").APPIFACT_REPL_TOOL_NAME;return t!==void 0&&e.mcpInfo===void 0&&e.name===t}function s(e){return e.filter((t)=>!nJr(t))}
export{DAn,crs,urs,nJr};
