// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ae}from"./chunk-s8xs8s76.js";import{t}from"./chunk-wvb0gwjm.js";import{Op}from"./chunk-twxt3h9y.js";import{v0e}from"./chunk-e7se9tpg.js";import{AP}from"./chunk-ybw003aj.js";import{uJe,jor,zi,e2,Qu}from"./chunk-h3bc7dkc.js";import{kst}from"./chunk-gdsspstx.js";import{bfe,jFn}from"./chunk-4hpgbf9j.js";import{ace,vYe,NXn,K1e,jyn}from"./chunk-y0yywfb7.js";async function PO(o){let r=performance.now(),i=!1,e=K1e(),n=!1;if(jyn())t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"),await vYe(),i=!0,n=!0;else if(!e&&!bfe());else if(o.hasDynamicMcpConfig||!o.pluginStateReliable||Ae()||await s(o.storageV5)){if(e)t("[mcp-policy-cold-start] waiting on remote managed-settings load"),await ace(),i=!0;n=!0}else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");if(kst("settings",()=>!i?"not_awaited":NXn()?"timed_out":"completed",{since:i?r:void 0}),n&&bfe()){if(t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"),await jFn()==="timed_out")t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it")}}async function s(o){for(let r of e2)if(Object.keys(Qu(r,{expandVars:!1}).servers).length>0)return!0;if(v0e())return!0;try{for(let{record:e}of jor(uJe()))for(let[n,a]of Object.entries(e??{}))if((a===!0||Array.isArray(a))&&!AP(n))return!0;let{enabled:r,errors:i}=await zi(o);if(i.length>0)return!0;for(let e of r)if(!e.isBuiltin||e.mcpServers!==void 0&&Object.keys(e.mcpServers).length>0)return!0}catch{return!0}return Op()}
export{PO};
