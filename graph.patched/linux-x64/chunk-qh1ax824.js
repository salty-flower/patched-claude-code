// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{CT,dx}from"./chunk-bj7g1p32.js";import{ds}from"./chunk-qyjj7h0q.js";import{Ci}from"./chunk-td8fcebs.js";import{xw,he}from"./chunk-33bqb969.js";import{kHe,gj,Vu,Um,_5n,Tfn,XA}from"./chunk-y3swhsrk.js";import{Ld,Db,dd}from"./chunk-xab6507j.js";import{jSn,YYe}from"./chunk-dvx5jhmp.js";var a=Tfn.filter((e)=>e!=="userSettings");function Uie(e){if(jSn())return!1;if(YYe())return!0;return(e??lIt()).length>0}function lIt(e=cIt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Ci()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(Db())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&dd(s)&&!u(t,s.url);if(s.source==="settings")return dd(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Ld(`${n.name}@${t}`));return!1})}function u(e,r){let o=ds();if(a.some((t)=>o.includes(t)&&Object.hasOwn(he(t)?.extraKnownMarketplaces??{},e)))return!0;return _5n({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(XA(),e)}function i(e){if(dx()||Um())return!1;let{servers:r}=Vu(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&kHe(o)==="rejected")&&gj(o,t))}function cIt(){if(CT())return[];let e=ds(),r=e.includes("localSettings")?he("localSettings"):null,o=[];if(e.includes("projectSettings")&&!xw()&&c(he("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Uie,lIt,cIt};
