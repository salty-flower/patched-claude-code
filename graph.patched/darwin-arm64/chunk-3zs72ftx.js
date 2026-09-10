// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{yR,_R}from"./chunk-cet8na02.js";import{ms}from"./chunk-1qb0n0qf.js";import{$i}from"./chunk-qymratxs.js";import{AA,_e}from"./chunk-ja8knfm8.js";import{qCe,uZn,WSn,Uw,g6,ud,bm}from"./chunk-tavwd3sq.js";import{Nkn,AZe}from"./chunk-f2pbqezq.js";import{xd,Tb,Fc}from"./chunk-508cw63b.js";var a=WSn.filter((e)=>e!=="userSettings");function hce(e){if(Nkn())return!1;if(AZe())return!0;return(e??AOt()).length>0}function AOt(e=COt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${$i()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(Tb())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Fc(s)&&!u(t,s.url);if(s.source==="settings")return Fc(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!xd(`${n.name}@${t}`));return!1})}function u(e,r){let o=ms();if(a.some((t)=>o.includes(t)&&Object.hasOwn(_e(t)?.extraKnownMarketplaces??{},e)))return!0;return uZn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Uw(),e)}function i(e){if(_R()||bm())return!1;let{servers:r}=ud(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&qCe(o)==="rejected")&&g6(o,t))}function COt(){if(yR())return[];let e=ms(),r=e.includes("localSettings")?_e("localSettings"):null,o=[];if(e.includes("projectSettings")&&!AA()&&c(_e("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{hce,AOt,COt};
