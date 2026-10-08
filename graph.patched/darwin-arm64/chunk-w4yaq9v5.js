// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Hu}from"./chunk-x6r0vttx.js";import{PP}from"./chunk-jr3n4w5s.js";import{oN}from"./chunk-nwqfvmza.js";function ise(o,e){return o.config.scope===e.scope&&o.config.pluginSource===e.pluginSource?o:{...o,config:e}}var c=(o,e)=>({...e,scope:o.config.scope,pluginSource:o.config.pluginSource,source:oN(o.name,o.config),pluginTelemetry:void 0,...o.config.pluginSource!==void 0&&{pluginTelemetry:PP(o.config.pluginSource,Hu())}});function H3(o,e){let n=e.map((r)=>{if(r.mcpInfo===void 0)return r;return r.mcpInfo.scope===o.config.scope&&r.mcpInfo.pluginSource===o.config.pluginSource?r:{...r,mcpInfo:c(o,r.mcpInfo)}});return n.every((r,p)=>r===e[p])?e:n}
export{ise,H3};
