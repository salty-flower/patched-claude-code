// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-cd1a8ced.js";import{t}from"./chunk-n5v91jc3.js";import{kt,ue}from"./chunk-7p6jp6kj.js";import{nB,yIe,KA,rB}from"./chunk-2gh4h0fv.js";import{za}from"./chunk-4y5ka0b5.js";var Zor="https://clau.de/chrome/permissions",m={install:nB,reconnect:yIe,permissions:Zor};async function cli({mcpClients:s,atStartup:i}){let l=await rB().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ue(),r=s.some((e)=>e.name===za&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:KA(),subscriber:kt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{Zor,cli};
