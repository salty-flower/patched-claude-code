// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{AA,PE}from"./chunk-ersar6wn.js";import{Ro}from"./chunk-t4r22my8.js";import{$m,KO,Hu}from"./chunk-bp7z975p.js";import{E_}from"./chunk-9a41hw1t.js";import{mg,fe}from"./chunk-32v5ghb4.js";import{Yft,DFs,R0r,jE,KN,pm,wy}from"./chunk-31gxg38t.js";import{Cjo,_mn}from"./chunk-8tyz1ak6.js";var a=R0r.filter((e)=>e!=="userSettings");function z5e(e){if(Cjo())return!1;if(_mn())return!0;return(e??KPt()).length>0}function KPt(e=Xhr()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${E_()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(KO())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Hu(s)&&!u(t,s.url);if(s.source==="settings")return Hu(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!$m(`${n.name}@${t}`));return!1})}function u(e,r){let o=Ro();if(a.some((t)=>o.includes(t)&&Object.hasOwn(fe(t)?.extraKnownMarketplaces??{},e)))return!0;return DFs({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(jE(),e)}function i(e){if(PE()||wy())return!1;let{servers:r}=pm(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&Yft(o)==="rejected")&&KN(o,t))}function Xhr(){if(AA())return[];let e=Ro(),r=e.includes("localSettings")?fe("localSettings"):null,o=[];if(e.includes("projectSettings")&&!mg()&&c(fe("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{z5e,KPt,Xhr};
