// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-h422gpw8.js";import{t}from"./chunk-tdxkq523.js";import{kt,ue}from"./chunk-bvn0epzr.js";import{l1,kIe,YT,d1}from"./chunk-d7eqjts1.js";import{Va}from"./chunk-6wcw8b1j.js";var osr="https://clau.de/chrome/permissions",m={install:l1,reconnect:kIe,permissions:osr};async function Vli({mcpClients:s,atStartup:i}){let l=await d1().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ue(),r=s.some((e)=>e.name===Va&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:YT(),subscriber:kt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{osr,Vli};
