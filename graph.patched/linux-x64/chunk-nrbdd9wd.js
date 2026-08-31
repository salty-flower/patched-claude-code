// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{bT,ZR}from"./chunk-30zk17wm.js";import{$s}from"./chunk-m9gbfvns.js";import{Fw,_e}from"./chunk-30zpf1a7.js";import{Ri}from"./chunk-dkknd74f.js";import{bbe,D4n,Vln,VA,cW,Tf,th}from"./chunk-h6btyxas.js";import{Ihn,r3e}from"./chunk-e76m9cy3.js";import{Fd,jb,xf}from"./chunk-sng953xs.js";var a=Vln.filter((e)=>e!=="userSettings");function Aie(e){if(Ihn())return!1;if(r3e())return!0;return(e??Ykt()).length>0}function Ykt(e=Xkt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${$s()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(jb())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&xf(s)&&!u(t,s.url);if(s.source==="settings")return xf(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Fd(`${n.name}@${t}`));return!1})}function u(e,r){let o=Ri();if(a.some((t)=>o.includes(t)&&Object.hasOwn(_e(t)?.extraKnownMarketplaces??{},e)))return!0;return D4n({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(VA(),e)}function i(e){if(ZR()||th())return!1;let{servers:r}=Tf(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&bbe(o)==="rejected")&&cW(o,t))}function Xkt(){if(bT())return[];let e=Ri(),r=e.includes("localSettings")?_e("localSettings"):null,o=[];if(e.includes("projectSettings")&&!Fw()&&c(_e("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{Aie,Ykt,Xkt};
