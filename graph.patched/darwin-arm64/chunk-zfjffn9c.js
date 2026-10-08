// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{GT,SC}from"./chunk-vd0a9d2s.js";import{Wo}from"./chunk-2r0ph8pf.js";import{Rl}from"./chunk-70qqbqq4.js";import{Qy,me}from"./chunk-48by85wp.js";import{uQe,A5o,Mtr,cb,uG,Rp,f_}from"./chunk-nwqfvmza.js";import{rf,UR,hd}from"./chunk-gt8bh0pr.js";import{Eno,t4t}from"./chunk-3k2bwt52.js";var a=Mtr.filter((e)=>e!=="userSettings");function q1e(e){if(Eno())return!1;if(t4t())return!0;return(e??Hut()).length>0}function Hut(e=y6n()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Rl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(UR())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&hd(s)&&!u(t,s.url);if(s.source==="settings")return hd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!rf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Wo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return A5o({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(cb(),e)}function i(e){if(SC()||f_())return!1;let{servers:r}=Rp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&uQe(o)==="rejected")&&uG(o,t))}function y6n(){if(GT())return[];let e=Wo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!Qy()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{q1e,Hut,y6n};
