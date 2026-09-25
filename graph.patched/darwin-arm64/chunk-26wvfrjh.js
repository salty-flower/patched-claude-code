// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{bC,XP}from"./chunk-s8xs8s76.js";import{us}from"./chunk-aneqvevx.js";import{sa}from"./chunk-3a4khaz5.js";import{$P,ye}from"./chunk-je0c1kfp.js";import{M2e,Ano,our,ME,F5,Qu,Rh}from"./chunk-h3bc7dkc.js";import{Jp,rA,rp}from"./chunk-8v03cpg7.js";import{Jwr,Kxt}from"./chunk-n321ny0e.js";var a=our.filter((e)=>e!=="userSettings");function mTe(e){if(Jwr())return!1;if(Kxt())return!0;return(e??nmn()).length>0}function nmn(e=rmn()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${sa()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(rA())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&rp(s)&&!u(t,s.url);if(s.source==="settings")return rp(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Jp(`${n.name}@${t}`));return!1})}function u(e,r){let o=us();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return Ano({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(ME(),e)}function i(e){if(XP()||Rh())return!1;let{servers:r}=Qu(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&M2e(o)==="rejected")&&F5(o,t))}function rmn(){if(bC())return[];let e=us(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!$P()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{mTe,nmn,rmn};
