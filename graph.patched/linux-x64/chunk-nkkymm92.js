// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{wat,Wgs,g_r,$w,ZF,Sf,Xh}from"./chunk-38nf1dnm.js";import{Qx,Aw}from"./chunk-eqmywwjn.js";import{Bo}from"./chunk-9t95885m.js";import{gy}from"./chunk-xwn0mfnc.js";import{fb,me}from"./chunk-a502zyxr.js";import{qf,sI,Bc}from"./chunk-5745m8g4.js";import{Vvo,Rnn}from"./chunk-6qewndbd.js";var a=g_r.filter((e)=>e!=="userSettings");function X2e(e){if(Vvo())return!1;if(Rnn())return!0;return(e??Dwt()).length>0}function Dwt(e=ver()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${gy()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(sI())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Bc(s)&&!u(t,s.url);if(s.source==="settings")return Bc(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!qf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Bo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return Wgs({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn($w(),e)}function i(e){if(Aw()||Xh())return!1;let{servers:r}=Sf(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&wat(o)==="rejected")&&ZF(o,t))}function ver(){if(Qx())return[];let e=Bo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!fb()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{X2e,Dwt,ver};
