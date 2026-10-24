// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{VCt}from"./chunk-cemwep0x.js";import{G0}from"./chunk-nfj5wr3f.js";import{Sp}from"./chunk-2nbdxfp7.js";import{ESe,Kkt}from"./chunk-hdf6qbgr.js";import{$0}from"./chunk-9xx8r7sg.js";import{QOe}from"./chunk-31gxg38t.js";function gBe(e,o){let n=o.map((t)=>t.mcpInfo===void 0||t.mcpInfo.scope===e.config.scope&&t.mcpInfo.pluginSource===e.config.pluginSource?t:{...t,mcpInfo:VCt(e)});return n.every((t,r)=>t===o[r])?o:n}function Jae(e,o){return e.config.scope===o.scope&&e.config.pluginSource===o.pluginSource?e:{...e,config:o}}var S=128,g=/^[a-z0-9._:-]+$/;function i(e){let o=e?.trim().toLowerCase();if(!o||o.length>S||!g.test(o))return;return o}function Pme(e,o){if(o.type!=="http"||G0(e,o)!=="dynamic")return;let n=i(ESe(o));if(n)return n;let p=Kkt.peek(U())?.read?.();return i(p?.[e])}var m=(e,o)=>({...o,scope:e.config.scope,pluginSource:e.config.pluginSource,source:G0(e.name,e.config),pluginTelemetry:void 0,...e.config.pluginSource!==void 0&&{pluginTelemetry:$0(e.config.pluginSource,Sp())},serverIdStamp:Pme(e.name,e.config)});function k7(e,o){let n=QOe(e.name,e.config),p=o.map((r)=>{if(r.mcpInfo===void 0)return r;let s=n&&r.ignoresWholeToolAllowRule?.({})!==!0?{...r,ignoresWholeToolAllowRule(){return!0},suppressesAlwaysAllowRule(){return!0},async checkPermissions(u,f){let c=await r.checkPermissions(u,f);return c.behavior==="ask"||c.behavior==="passthrough"?{...c,suggestions:[]}:c}}:r;return r.mcpInfo.scope===e.config.scope&&r.mcpInfo.pluginSource===e.config.pluginSource?s:{...s,mcpInfo:m(e,r.mcpInfo)}});return p.every((r,s)=>r===o[s])?o:p}
export{Pme,gBe,Jae,k7};
