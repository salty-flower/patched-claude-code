// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{GR,z0}from"./chunk-hdbxv3pp.js";import{Ci}from"./chunk-tgbc60ar.js";import{_s}from"./chunk-pv906ex9.js";import{tE,be}from"./chunk-yhqjr2er.js";import{kwe,d7n,vmn,LC,A6,of,ug}from"./chunk-darxmw8c.js";import{sTn,NXe}from"./chunk-htp9pxxe.js";import{Fd,ab,Ip}from"./chunk-zwb5v6bf.js";var a=vmn.filter((e)=>e!=="userSettings");function Sae(e){if(sTn())return!1;if(NXe())return!0;return(e??dHt()).length>0}function dHt(e=pHt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${_s()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(ab())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Ip(s)&&!u(t,s.url);if(s.source==="settings")return Ip(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Fd(`${n.name}@${t}`));return!1})}function u(e,r){let o=Ci();if(a.some((t)=>o.includes(t)&&Object.hasOwn(be(t)?.extraKnownMarketplaces??{},e)))return!0;return d7n({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(LC(),e)}function i(e){if(z0()||ug())return!1;let{servers:r}=of(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&kwe(o)==="rejected")&&A6(o,t))}function pHt(){if(GR())return[];let e=Ci(),r=e.includes("localSettings")?be("localSettings"):null,o=[];if(e.includes("projectSettings")&&!tE()&&c(be("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Sae,dHt,pHt};
