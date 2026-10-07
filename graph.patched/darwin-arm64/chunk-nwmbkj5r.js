// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{mT,ZC}from"./chunk-8mvda08c.js";import{Fo}from"./chunk-9s9xt61j.js";import{hl}from"./chunk-j77txbjn.js";import{xy,me}from"./chunk-861a7whf.js";import{dXe,fWo,vXn,JS,eW,bp,zy}from"./chunk-y0b3kvx1.js";import{zp,hR,id}from"./chunk-qdb771kt.js";import{SYr,Yzt}from"./chunk-j8zs3xhh.js";var a=vXn.filter((e)=>e!=="userSettings");function OFe(e){if(SYr())return!1;if(Yzt())return!0;return(e??Elt()).length>0}function Elt(e=LUn()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${hl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(hR())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&id(s)&&!u(t,s.url);if(s.source==="settings")return id(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!zp(`${n.name}@${t}`));return!1})}function u(e,r){let o=Fo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return fWo({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(JS(),e)}function i(e){if(ZC()||zy())return!1;let{servers:r}=bp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&dXe(o)==="rejected")&&eW(o,t))}function LUn(){if(mT())return[];let e=Fo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!xy()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{OFe,Elt,LUn};
