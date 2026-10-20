// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{RP,Yw}from"./chunk-kpqr86hf.js";import{Fo}from"./chunk-58pv6r0f.js";import{pm,MI,nu}from"./chunk-xw74sg2f.js";import{Uy}from"./chunk-h422gpw8.js";import{dh,me}from"./chunk-qwytg6a7.js";import{Wlt,jCs,kkr,iE,XU,Lf,wy}from"./chunk-na9nw575.js";import{GIo,ean}from"./chunk-y573qe02.js";var a=kkr.filter((e)=>e!=="userSettings");function MKe(e){if(GIo())return!1;if(ean())return!0;return(e??dCt()).length>0}function dCt(e=Iar()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Uy()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(MI())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&nu(s)&&!u(t,s.url);if(s.source==="settings")return nu(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!pm(`${n.name}@${t}`));return!1})}function u(e,r){let o=Fo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return jCs({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(iE(),e)}function i(e){if(Yw()||wy())return!1;let{servers:r}=Lf(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&Wlt(o)==="rejected")&&XU(o,t))}function Iar(){if(RP())return[];let e=Fo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!dh()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{MKe,dCt,Iar};
