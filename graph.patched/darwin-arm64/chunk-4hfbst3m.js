// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{GR,KE}from"./chunk-4bw62nzm.js";import{Lo}from"./chunk-wtch2p0g.js";import{jl}from"./chunk-yvnhkg35.js";import{w_,fe}from"./chunk-x0dc37w9.js";import{xtt,Mes,Rar,Fb,Rz,qp,L_}from"./chunk-sfn1dbxq.js";import{kf,Kx,Cd}from"./chunk-s9zkj3fw.js";import{fco,$Yt}from"./chunk-2bcyxj9q.js";var a=Rar.filter((e)=>e!=="userSettings");function Gje(e){if(fco())return!1;if($Yt())return!0;return(e??Rgt()).length>0}function Rgt(e=f5n()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${jl()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(Kx())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Cd(s)&&!u(t,s.url);if(s.source==="settings")return Cd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!kf(`${n.name}@${t}`));return!1})}function u(e,r){let o=Lo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(fe(t)?.extraKnownMarketplaces??{},e)))return!0;return Mes({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Fb(),e)}function i(e){if(KE()||L_())return!1;let{servers:r}=qp(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&xtt(o)==="rejected")&&Rz(o,t))}function f5n(){if(GR())return[];let e=Lo(),r=e.includes("localSettings")?fe("localSettings"):null,o=[];if(e.includes("projectSettings")&&!w_()&&c(fe("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Gje,Rgt,f5n};
