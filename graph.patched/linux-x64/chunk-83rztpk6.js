// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ASt}from"./chunk-m7gr14b0.js";import{j}from"./chunk-dxktn51d.js";import{Ap}from"./chunk-0nrx1yfa.js";import{She,Tbt}from"./chunk-65jn763j.js";import{EM}from"./chunk-166ekv9c.js";import{I0}from"./chunk-2gh4h0fv.js";function M$e(e,o){let n=o.map((r)=>r.mcpInfo===void 0||r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?r:{...r,mcpInfo:ASt(e)});return n.every((r,p)=>r===o[p])?o:n}function vse(e,o){return e.config.scope===o.scope&&e.config.pluginSource===o.pluginSource?e:{...e,config:o}}var c=128,m=/^[a-z0-9._:-]+$/;function i(e){let o=e?.trim().toLowerCase();if(!o||o.length>c||!m.test(o))return;return o}function yxe(e,o){if(o.type!=="http"||I0(e,o)!=="dynamic")return;let n=i(She(o));if(n)return n;let t=Tbt.peek(j())?.read?.();return i(t?.[e])}var s=(e,o)=>({...o,scope:e.config.scope,pluginSource:e.config.pluginSource,source:I0(e.name,e.config),pluginTelemetry:void 0,...e.config.pluginSource!==void 0&&{pluginTelemetry:EM(e.config.pluginSource,Ap())},serverIdStamp:yxe(e.name,e.config)});function h9(e,o){let n=o.map((r)=>{if(r.mcpInfo===void 0)return r;return r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?r:{...r,mcpInfo:s(e,r.mcpInfo)}});return n.every((r,p)=>r===o[p])?o:n}
export{yxe,M$e,vse,h9};
