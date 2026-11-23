// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{t}from"./chunk-bdfv2ky4.js";import{Dt,pe}from"./chunk-e44qnbvj.js";import{Gj,c3e,YI,c4}from"./chunk-zhvxfbcg.js";import{Ri}from"./chunk-n75e8dzn.js";var Oeo="https://clau.de/chrome/permissions",m={install:Gj,reconnect:c3e,permissions:Oeo};async function Bqa({mcpClients:s,atStartup:a}){let l=await c4().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=pe(),r=s.some((e)=>e.name===Ri&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:YI(),subscriber:Dt(),wsl:i.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{Oeo,Bqa};
