// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{xat,Rhs,L_r,$w,sU,bf,Jh}from"./chunk-996thspe.js";import{nP,Tw}from"./chunk-xzypj06m.js";import{Bo}from"./chunk-jybqja29.js";import{hy}from"./chunk-k4g6y57j.js";import{mS,me}from"./chunk-61p68esv.js";import{Kf,dI,Wc}from"./chunk-chdmy0ef.js";import{wvo,Wnn}from"./chunk-krmqqdbm.js";var a=L_r.filter((e)=>e!=="userSettings");function h6e(e){if(wvo())return!1;if(Wnn())return!0;return(e??_Et()).length>0}function _Et(e=Vtr()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${hy()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(dI())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Wc(s)&&!u(t,s.url);if(s.source==="settings")return Wc(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Kf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Bo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return Rhs({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn($w(),e)}function i(e){if(Tw()||Jh())return!1;let{servers:r}=bf(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&xat(o)==="rejected")&&sU(o,t))}function Vtr(){if(nP())return[];let e=Bo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!mS()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{h6e,_Et,Vtr};
