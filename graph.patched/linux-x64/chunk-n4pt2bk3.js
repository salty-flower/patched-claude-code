// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{PI,pM}from"./chunk-txfrkyzp.js";import{Yo}from"./chunk-h4q23q42.js";import{ma}from"./chunk-q2vrcqny.js";import{PA,ye}from"./chunk-ggjhe3cp.js";import{xPe,fRr,jBn,BE,bV,td,Cg}from"./chunk-v4zgc4qd.js";import{uVn,fdt}from"./chunk-0h2z9cza.js";import{mp,bv,Du}from"./chunk-dbac4y1a.js";var a=jBn.filter((e)=>e!=="userSettings");function the(e){if(uVn())return!1;if(fdt())return!0;return(e??dqt()).length>0}function dqt(e=pqt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${ma()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(bv())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Du(s)&&!u(t,s.url);if(s.source==="settings")return Du(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!mp(`${n.name}@${t}`));return!1})}function u(e,r){let o=Yo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return fRr({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(BE(),e)}function i(e){if(pM()||Cg())return!1;let{servers:r}=td(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&xPe(o)==="rejected")&&bV(o,t))}function pqt(){if(PI())return[];let e=Yo(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!PA()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{the,dqt,pqt};
