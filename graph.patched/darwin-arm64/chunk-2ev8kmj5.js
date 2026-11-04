// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{t}from"./chunk-5nh49npx.js";import{kt,pe}from"./chunk-axsjfnwn.js";import{LG,ZBe,_P,HG}from"./chunk-nfbft0th.js";import{qa}from"./chunk-jncb2bh3.js";var U$r="https://clau.de/chrome/permissions",m={install:LG,reconnect:ZBe,permissions:U$r};async function rsa({mcpClients:s,atStartup:a}){let l=await HG().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=pe(),r=s.some((e)=>e.name===qa&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:_P(),subscriber:kt(),wsl:i.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{U$r,rsa};
