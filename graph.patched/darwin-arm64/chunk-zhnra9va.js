// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{__}from"./chunk-kpqr86hf.js";import{te}from"./chunk-eb6svdsk.js";import{n6}from"./chunk-gn7avpe5.js";import{a}from"./chunk-h422gpw8.js";import{CIe}from"./chunk-d7eqjts1.js";import{kp}from"./chunk-7rq9x9a7.js";import{g5t}from"./chunk-cd9wkgew.js";function m(e){let t=f();if(t===null)return!1;let r=t.wire.MCP_ROW_TOOL_NAMES;if(!e.some((n)=>n.mcpInfo?.serverName===n6&&!r.includes(n.mcpInfo.toolName)))return!1;return l(t)}function f(){return null}function l(e){return(__()??[]).some((t)=>t.type==="connected"&&t.name===n6&&e.entry.isArtifactsMcpLaptopEntry(t.config))}function eAn(e,t=e){let r=f();if(r===null)return[...e];let n=r.wire.MCP_ROW_TOOL_NAMES,i=t.filter((o)=>o.mcpInfo?.serverName===n6);if(i.length===0||i.some((o)=>!n.includes(o.mcpInfo?.toolName??""))||!l(r))return[...e];return e.filter((o)=>o.mcpInfo?.serverName!==n6)}function Vrs(e,t){if(!kp()){if(!m(t))return[...e];let r=te();r.builtInArtifactHiddenForMcp=!0,r.autoReact.enabledMemo=!1,g5t(r.live),((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-s6k7t23b.js").clearCommandMemoizationCaches()}return s(e)}function Krs(e){return kp()?s(e):[...e]}function b7r(e){if(CIe(e))return!0;let t=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-pz72t2mw.js").APPIFACT_REPL_TOOL_NAME;return t!==void 0&&e.mcpInfo===void 0&&e.name===t}function s(e){return e.filter((t)=>!b7r(t))}
export{eAn,Vrs,Krs,b7r};
