// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{CL as s,DL as c,KL as u}from"./_363.js";import{Dja as p,bpa as n,cpa as i,lja as a,mia as r,sia as m,wpa as f}from"./_444.js";import{Fpc as o,Lqc as d}from"./_668.js";import{tfd as t,yfd as g}from"./_806.js";d();g();p();m();u();f();async function k(e){if(!c())return;if(e.hasDynamicMcpConfig||!e.pluginStateReliable||await S(e.storageV5))t("[mcp-policy-cold-start] waiting on remote managed-settings load"),await s();else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible")}async function S(e){for(let l of n)if(Object.keys(i(l,{expandVars:!1}).servers).length>0)return!0;if(a())return!0;try{if((await r(e)).enabled.length>0)return!0}catch{return!0}return o()}
export{k as cF};
