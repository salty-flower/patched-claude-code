// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Hbt}from"./chunk-q6vwcyd6.js";import{j}from"./chunk-kpqr86hf.js";import{Cp}from"./chunk-53cx5fek.js";import{Ahe,HSt}from"./chunk-gn7avpe5.js";import{AM}from"./chunk-z3na6jb1.js";import{DL}from"./chunk-d7eqjts1.js";function jFe(e,o){let n=o.map((r)=>r.mcpInfo===void 0||r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?r:{...r,mcpInfo:Hbt(e)});return n.every((r,p)=>r===o[p])?o:n}function xse(e,o){return e.config.scope===o.scope&&e.config.pluginSource===o.pluginSource?e:{...e,config:o}}var c=128,m=/^[a-z0-9._:-]+$/;function i(e){let o=e?.trim().toLowerCase();if(!o||o.length>c||!m.test(o))return;return o}function kxe(e,o){if(o.type!=="http"||DL(e,o)!=="dynamic")return;let n=i(Ahe(o));if(n)return n;let t=HSt.peek(j())?.read?.();return i(t?.[e])}var s=(e,o)=>({...o,scope:e.config.scope,pluginSource:e.config.pluginSource,source:DL(e.name,e.config),pluginTelemetry:void 0,...e.config.pluginSource!==void 0&&{pluginTelemetry:AM(e.config.pluginSource,Cp())},serverIdStamp:kxe(e.name,e.config)});function CY(e,o){let n=o.map((r)=>{if(r.mcpInfo===void 0)return r;return r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?r:{...r,mcpInfo:s(e,r.mcpInfo)}});return n.every((r,p)=>r===o[p])?o:n}
export{kxe,jFe,xse,CY};
