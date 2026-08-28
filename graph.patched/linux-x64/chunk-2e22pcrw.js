// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fT,kO}from"./chunk-2vv5hpw3.js";import{Ss}from"./chunk-g0kfvhx3.js";import{qS,be}from"./chunk-bcez0qfh.js";import{yi}from"./chunk-8v512hc9.js";import{MFn,atn,ltn,sge,Qj,tp,Eh}from"./chunk-hrvkymct.js";import{jun,jqe}from"./chunk-ewpypgqg.js";import{pd,db,op}from"./chunk-jevd9hzp.js";var a=atn.filter((e)=>e!=="userSettings");function ore(e){if(jun())return!1;if(jqe())return!0;return(e??Mwt()).length>0}function Mwt(e=Owt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Ss()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(db())return!1;let s=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(s,t))return!1;let o=l.source;if(o.source==="url")return!!o.headersHelper&&/^https:\/\//i.test(o.url)&&op(o)&&!u(t,o.url);if(o.source==="settings")return op(o)&&!p(t)&&o.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!pd(`${n.name}@${t}`));return!1})}function u(e,r){let s=yi();if(a.some((t)=>s.includes(t)&&Object.hasOwn(be(t)?.extraKnownMarketplaces??{},e)))return!0;return MFn({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(ltn(),e)}function i(e){if(kO()||Eh())return!1;let{servers:r}=tp(e,{expandVars:!1});return Object.entries(r).some(([s,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&sge(s)==="rejected")&&Qj(s,t))}function Owt(){if(fT())return[];let e=yi(),r=e.includes("localSettings")?be("localSettings"):null,s=[];if(e.includes("projectSettings")&&!qS()&&c(be("projectSettings"),r))s.push(".claude/settings.json");if(c(r))s.push(".claude/settings.local.json");return s}
export{ore,Mwt,Owt};
