// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ai}from"./chunk-718k5xe7.js";import{so,Rr}from"./chunk-1901fdh6.js";import{dt,qt,We,It}from"./chunk-1jaxs49d.js";import{zse}from"./chunk-91bgpz7f.js";import{vd}from"./chunk-xn98vn34.js";import{Je}from"./chunk-1rc6bk2z.js";var _8=ai,S8=new Set([We,It,Je,qt,dt,so,Rr]),Oes="device_bash",gTe=new Set(["sync_files"]);function Hes(r){return r.filter((o)=>{if(o.mcpInfo?.serverName!==_8)return!0;let e=o.mcpInfo.toolName,t=zse(e);return!S8.has(e)&&e!==vd&&(t===void 0||!S8.has(t))})}function Mes(r){return r.filter((o)=>o.mcpInfo?.serverName!==_8||!gTe.has(o.mcpInfo.toolName))}
export{_8,S8,Oes,gTe,Hes,Mes};
