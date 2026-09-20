// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{F0,AD}from"./chunk-sgamszzq.js";import{Yo}from"./chunk-a38xyc22.js";import{ma}from"./chunk-wkhfcbsj.js";import{OC,ye}from"./chunk-k515hq0v.js";import{$He,YRr,m2n,zv,T3,td,xg}from"./chunk-nq62bgfy.js";import{F3n,Tdt}from"./chunk-tk9shsyf.js";import{hp,wE,Lu}from"./chunk-668vktqp.js";var a=m2n.filter((e)=>e!=="userSettings");function fhe(e){if(F3n())return!1;if(Tdt())return!0;return(e??e3t()).length>0}function e3t(e=t3t()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${ma()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(wE())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Lu(s)&&!u(t,s.url);if(s.source==="settings")return Lu(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!hp(`${n.name}@${t}`));return!1})}function u(e,r){let o=Yo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return YRr({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(zv(),e)}function i(e){if(AD()||xg())return!1;let{servers:r}=td(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&$He(o)==="rejected")&&T3(o,t))}function t3t(){if(F0())return[];let e=Yo(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!OC()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{fhe,e3t,t3t};
