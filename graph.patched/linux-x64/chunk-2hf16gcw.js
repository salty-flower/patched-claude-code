// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{UC,hT}from"./chunk-g79wjybr.js";import{Wo}from"./chunk-8ky01sys.js";import{Cl}from"./chunk-rptge3r8.js";import{Jy,me}from"./chunk-gsa86a2x.js";import{r7e,j6o,ftr,lS,eG,Rp,p_}from"./chunk-g263vvvn.js";import{rf,LR,gd}from"./chunk-0avs5kwj.js";import{Kto,UYt}from"./chunk-bx1nhgzb.js";var a=ftr.filter((e)=>e!=="userSettings");function UUe(e){if(Kto())return!1;if(UYt())return!0;return(e??Cut()).length>0}function Cut(e=e2n()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Cl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(LR())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&gd(s)&&!u(t,s.url);if(s.source==="settings")return gd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!rf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Wo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(me(t)?.extraKnownMarketplaces??{},e)))return!0;return j6o({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(lS(),e)}function i(e){if(hT()||p_())return!1;let{servers:r}=Rp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&r7e(o)==="rejected")&&eG(o,t))}function e2n(){if(UC())return[];let e=Wo(),r=e.includes("localSettings")?me("localSettings"):null,o=[];if(e.includes("projectSettings")&&!Jy()&&c(me("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{UUe,Cut,e2n};
