// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{PR,WP}from"./chunk-sgyvc67j.js";import{zo}from"./chunk-ysx7ez10.js";import{Wi}from"./chunk-dv6tepz3.js";import{BA,ye}from"./chunk-yyyfew8j.js";import{oTe,Tnr,TEn,Qw,F6,md,kg}from"./chunk-e55d0yhx.js";import{yHn,ntt}from"./chunk-06mxd1fp.js";import{Id,Mb,Wc}from"./chunk-my1f3y0m.js";var a=TEn.filter((e)=>e!=="userSettings");function lue(e){if(yHn())return!1;if(ntt())return!0;return(e??TLt()).length>0}function TLt(e=kLt()){let r=[...e];if(i("project"))r.push(".mcp.json");if(i("local"))r.push(`${Wi()} (local-scope MCP servers for this project)`);return r}function c(e,r){if(Mb())return!1;let o=r?.extraKnownMarketplaces??{};return Object.entries(e?.extraKnownMarketplaces??{}).some(([t,l])=>{if(Object.hasOwn(o,t))return!1;let s=l.source;if(s.source==="url")return!!s.headersHelper&&/^https:\/\//i.test(s.url)&&Wc(s)&&!u(t,s.url);if(s.source==="settings")return Wc(s)&&!p(t)&&s.plugins.some((n)=>!!n.headersHelper&&typeof n.source==="object"&&n.source.source==="archive"&&!Id(`${n.name}@${t}`));return!1})}function u(e,r){let o=zo();if(a.some((t)=>o.includes(t)&&Object.hasOwn(ye(t)?.extraKnownMarketplaces??{},e)))return!0;return Tnr({source:"url",url:r},e)!==void 0}function p(e){return Object.hasOwn(Qw(),e)}function i(e){if(WP()||kg())return!1;let{servers:r}=md(e,{expandVars:!1});return Object.entries(r).some(([o,t])=>("headersHelper"in t)&&!!t.headersHelper&&!(e==="project"&&oTe(o)==="rejected")&&F6(o,t))}function kLt(){if(PR())return[];let e=zo(),r=e.includes("localSettings")?ye("localSettings"):null,o=[];if(e.includes("projectSettings")&&!BA()&&c(ye("projectSettings"),r))o.push(".claude/settings.json");if(c(r))o.push(".claude/settings.local.json");return o}
export{lue,TLt,kLt};
