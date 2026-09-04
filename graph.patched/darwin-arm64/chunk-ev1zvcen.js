// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{ik,cI}from"./chunk-yhfssb7x.js";import{Ii}from"./chunk-v3s7w1dm.js";import{ys}from"./chunk-g2ngvza5.js";import{mE,be}from"./chunk-03hrg0m9.js";import{WEe,NJn,C_n,KC,z6,pp,fg}from"./chunk-5e9qk3ys.js";import{Yd,fb,kd}from"./chunk-e789chw0.js";import{tAn,mJe}from"./chunk-bqyfk5j4.js";var a=C_n.filter((e)=>e!=="userSettings");function fle(e){if(tAn())return!1;if(mJe())return!0;return(e??dIt()).length>0}function dIt(e=pIt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${ys()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(fb())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&kd(s)&&!u(t,s.url);if(s.source==="settings")return kd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Yd(`${n.name}@${t}`));return!1})}function u(e,r){let o=Ii();if(a.some((t)=>o.includes(t)&&Object.hasOwn(be(t)?.extraKnownMarketplaces??{},e)))return!0;return NJn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(KC(),e)}function i(e){if(cI()||fg())return!1;let{servers:r}=pp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&WEe(o)==="rejected")&&z6(o,t))}function pIt(){if(ik())return[];let e=Ii(),r=e.includes("localSettings")?be("localSettings"):null,o=[];if(e.includes("projectSettings")&&!mE()&&c(be("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{fle,dIt,pIt};
