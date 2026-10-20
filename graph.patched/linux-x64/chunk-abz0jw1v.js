// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{kP,qw}from"./chunk-dxktn51d.js";import{$o}from"./chunk-4v4w26w4.js";import{pm,CI,tu}from"./chunk-n6s5n8rn.js";import{Fy}from"./chunk-cd1a8ced.js";import{dh,me}from"./chunk-merbp8kx.js";import{Dlt,rTs,rkr,sv,GU,Lf,Sy}from"./chunk-rncrmfyt.js";import{gIo,Fin}from"./chunk-gzxd3rp1.js";var a=rkr.filter((e)=>e!=="userSettings");function Aqe(e){if(gIo())return!1;if(Fin())return!0;return(e??rTt()).length>0}function rTt(e=far()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Fy()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(CI())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&tu(s)&&!u(t,s.url);if(s.source==="settings")return tu(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!pm(`${n.name}@${t}`));return!1})}function u(e,r){let o=$o();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return rTs({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(sv(),e)}function i(e){if(qw()||Sy())return!1;let{servers:r}=Lf(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&Dlt(o)==="rejected")&&GU(o,t))}function far(){if(kP())return[];let e=$o(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!dh()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Aqe,rTt,far};
