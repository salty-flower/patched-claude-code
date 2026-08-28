// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{hA,k1}from"./chunk-g4zaymy2.js";import{vs}from"./chunk-bn8q5mbz.js";import{qv,_e}from"./chunk-jz0pchtb.js";import{yi}from"./chunk-mmj3hbz2.js";import{B$n,ctn,utn,dge,t3,np,Th}from"./chunk-j5h9ds58.js";import{zun,Wze}from"./chunk-syw51z9w.js";import{md,d_,ip}from"./chunk-5p27pq72.js";var a=ctn.filter((e)=>e!=="userSettings");function lre(e){if(zun())return!1;if(Wze())return!0;return(e??Mwt()).length>0}function Mwt(e=Nwt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${vs()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(d_())return!1;let s=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(s,t))return!1;let o=l.source;if(o.source==="url")return!!o.headersHelper&&/^https:\/\//i.test(o.url)&&ip(o)&&!u(t,o.url);if(o.source==="settings")return ip(o)&&!p(t)&&o.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!md(`${n.name}@${t}`));return!1})}function u(e,r){let s=yi();if(a.some((t)=>s.includes(t)&&Object.hasOwn(_e(t)?.extraKnownMarketplaces??{},e)))return!0;return B$n({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(utn(),e)}function i(e){if(k1()||Th())return!1;let{servers:r}=np(e,{expandVars:!1});return Object.entries(r).some(([s,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&dge(s)==="rejected")&&t3(s,t))}function Nwt(){if(hA())return[];let e=yi(),r=e.includes("localSettings")?_e("localSettings"):null,s=[];if(e.includes("projectSettings")&&!qv()&&c(_e("projectSettings"),r))s.push(".claude/settings.json");if(c(r))s.push(".claude/settings.local.json");return s}
export{lre,Mwt,Nwt};
