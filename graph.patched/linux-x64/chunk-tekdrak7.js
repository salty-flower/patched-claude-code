// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{dC,Xk}from"./chunk-aywwjcwq.js";import{$o}from"./chunk-06vaaw45.js";import{gl}from"./chunk-869zfth6.js";import{Ry,me}from"./chunk-2c0pkjse.js";import{nXe,xWo,nXn,Xb,WW,Sp,zy}from"./chunk-9wqh5j7s.js";import{Gp,pR,sd}from"./chunk-x35ssz7t.js";import{G8r,Hqt}from"./chunk-vy7fk9eg.js";var a=nXn.filter((e)=>e!=="userSettings");function T$e(e){if(G8r())return!1;if(Hqt())return!0;return(e??glt()).length>0}function glt(e=bBn()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${gl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(pR())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&sd(s)&&!u(t,s.url);if(s.source==="settings")return sd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Gp(`${n.name}@${t}`));return!1})}function u(e,r){let o=$o();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return xWo({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Xb(),e)}function i(e){if(Xk()||zy())return!1;let{servers:r}=Sp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&nXe(o)==="rejected")&&WW(o,t))}function bBn(){if(dC())return[];let e=$o(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!Ry()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{T$e,glt,bBn};
