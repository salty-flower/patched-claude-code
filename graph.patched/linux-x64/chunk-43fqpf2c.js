// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{kR,PH}from"./chunk-6n7yk222.js";import{Wo}from"./chunk-8fer6cmv.js";import{zi}from"./chunk-1bwwmttj.js";import{UE,ye}from"./chunk-sp4f0zv3.js";import{XAe,Ytr,tvn,Jw,xz,fd,Ag}from"./chunk-2byjyg85.js";import{jxn,Uet}from"./chunk-5bk908kr.js";import{Pd,DS,jc}from"./chunk-ptc1f3y2.js";var a=tvn.filter((e)=>e!=="userSettings");function eue(e){if(jxn())return!1;if(Uet())return!0;return(e??cDt()).length>0}function cDt(e=uDt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${zi()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(DS())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&jc(s)&&!u(t,s.url);if(s.source==="settings")return jc(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Pd(`${n.name}@${t}`));return!1})}function u(e,r){let o=Wo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return Ytr({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Jw(),e)}function i(e){if(PH()||Ag())return!1;let{servers:r}=fd(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&XAe(o)==="rejected")&&xz(o,t))}function uDt(){if(kR())return[];let e=Wo(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!UE()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{eue,cDt,uDt};
