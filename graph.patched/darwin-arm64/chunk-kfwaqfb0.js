// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{TA,pv}from"./chunk-a7cah040.js";import{as}from"./chunk-vratfdfe.js";import{Fa}from"./chunk-1fpwxv0g.js";import{ov,ge}from"./chunk-e561d543.js";import{Zze,fwo,sTr,Fv,UU,vu,Nh}from"./chunk-59zy4j10.js";import{ef,ST,ku}from"./chunk-xrbxbnf2.js";import{OMr,QMt}from"./chunk-9add1rv0.js";var a=sTr.filter((e)=>e!=="userSettings");function tHe(e){if(OMr())return!1;if(QMt())return!0;return(e??zZe()).length>0}function zZe(e=Qkn()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Fa()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(ST())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&ku(s)&&!u(t,s.url);if(s.source==="settings")return ku(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!ef(`${n.name}@${t}`));return!1})}function u(e,r){let o=as();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ge(t)?.extraKnownMarketplaces??{},e)))return!0;return fwo({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Fv(),e)}function i(e){if(pv()||Nh())return!1;let{servers:r}=vu(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&Zze(o)==="rejected")&&UU(o,t))}function Qkn(){if(TA())return[];let e=as(),r=e.includes("localSettings")?ge("localSettings"):null,o=[];if(e.includes("projectSettings")&&!ov()&&c(ge("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{tHe,zZe,Qkn};
