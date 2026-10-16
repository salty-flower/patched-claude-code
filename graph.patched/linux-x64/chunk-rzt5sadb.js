// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{dp}from"./chunk-t30p3a9r.js";import{age,Lht}from"./chunk-zkbf0zdp.js";import{tM}from"./chunk-nazzqhcs.js";import{eL}from"./chunk-7f1jmyrt.js";function Qre(e,o){return e.config.scope===o.scope&&e.config.pluginSource===o.pluginSource?e:{...e,config:o}}var s=128,m=/^[a-z0-9._:-]+$/;function i(e){let o=e?.trim().toLowerCase();if(!o||o.length>s||!m.test(o))return;return o}function wCe(e,o){if(o.type!=="http"||eL(e,o)!=="dynamic")return;let n=i(age(o));if(n)return n;let t=Lht.peek(j())?.read?.();return i(t?.[e])}var c=(e,o)=>({...o,scope:e.config.scope,pluginSource:e.config.pluginSource,source:eL(e.name,e.config),pluginTelemetry:void 0,...e.config.pluginSource!==void 0&&{pluginTelemetry:tM(e.config.pluginSource,dp())},serverIdStamp:wCe(e.name,e.config)});function m8(e,o){let n=o.map((r)=>{if(r.mcpInfo===void 0)return r;return r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?r:{...r,mcpInfo:c(e,r.mcpInfo)}});return n.every((r,p)=>r===o[p])?o:n}
export{wCe,Qre,m8};
