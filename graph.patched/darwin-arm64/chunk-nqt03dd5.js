// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{DR,A0}from"./chunk-zhtwayh2.js";import{ds}from"./chunk-sxccpdbg.js";import{ki}from"./chunk-dq2s4wjn.js";import{PT,he}from"./chunk-pe4nmbcg.js";import{Lwe,A2,Vu,jm,YVn,Qpn,QA}from"./chunk-1692k4g5.js";import{Pd,LS,pd}from"./chunk-j5bqrd6w.js";import{_wn,dXe}from"./chunk-fqv2c0zc.js";var a=Qpn.filter((e)=>e!=="userSettings");function Kie(e){if(_wn())return!1;if(dXe())return!0;return(e??Cxt()).length>0}function Cxt(e=vxt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${ki()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(LS())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&pd(s)&&!u(t,s.url);if(s.source==="settings")return pd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Pd(`${n.name}@${t}`));return!1})}function u(e,r){let o=ds();if(a.some((t)=>o.includes(t)&&Object.hasOwn(he(t)?.extraKnownMarketplaces??{},e)))return!0;return YVn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(QA(),e)}function i(e){if(A0()||jm())return!1;let{servers:r}=Vu(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&Lwe(o)==="rejected")&&A2(o,t))}function vxt(){if(DR())return[];let e=ds(),r=e.includes("localSettings")?he("localSettings"):null,o=[];if(e.includes("projectSettings")&&!PT()&&c(he("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Kie,Cxt,vxt};
