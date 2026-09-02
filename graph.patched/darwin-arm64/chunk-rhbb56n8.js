// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{wR,rx}from"./chunk-38213y7h.js";import{Ls}from"./chunk-w3k8bej2.js";import{FT,ye}from"./chunk-cx07awjk.js";import{xi}from"./chunk-8c6qx8qp.js";import{ESe,$Gn,Kln,VA,p9,Rp,th}from"./chunk-fy12d89p.js";import{Phn,iKe}from"./chunk-9e2ns8ty.js";import{Ud,$S,Ip}from"./chunk-fys1x60x.js";var a=Kln.filter((e)=>e!=="userSettings");function Rie(e){if(Phn())return!1;if(iKe())return!0;return(e??Xvt()).length>0}function Xvt(e=Yvt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Ls()} (local-scope MCP servers for this project)`);return r}function c(e,r){if($S())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Ip(s)&&!u(t,s.url);if(s.source==="settings")return Ip(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Ud(`${n.name}@${t}`));return!1})}function u(e,r){let o=xi();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return $Gn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(VA(),e)}function i(e){if(rx()||th())return!1;let{servers:r}=Rp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&ESe(o)==="rejected")&&p9(o,t))}function Yvt(){if(wR())return[];let e=xi(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!FT()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Rie,Xvt,Yvt};
