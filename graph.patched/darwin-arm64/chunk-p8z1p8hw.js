// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{i}from"./chunk-9a41hw1t.js";import{t}from"./chunk-d7b0m8qy.js";import{vt,ue}from"./chunk-27xjmczp.js";import{BB,M0e,VA,jB}from"./chunk-0s3jtbsx.js";import{Va}from"./chunk-ny0f62md.js";var Mmr="https://clau.de/chrome/permissions",m={install:BB,reconnect:M0e,permissions:Mmr};async function Cki({mcpClients:s,atStartup:a}){let l=await jB().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ue(),r=s.some((e)=>e.name===Va&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:VA(),subscriber:vt(),wsl:i.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{Mmr,Cki};
