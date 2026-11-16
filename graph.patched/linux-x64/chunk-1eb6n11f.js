// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{t}from"./chunk-ray9kegj.js";import{Dt,pe}from"./chunk-a5a37ds7.js";import{BW,s4e,VO,aK}from"./chunk-xynrjax8.js";import{Ci}from"./chunk-ajq0ymrp.js";var geo="https://clau.de/chrome/permissions",m={install:BW,reconnect:s4e,permissions:geo};async function e6a({mcpClients:s,atStartup:a}){let l=await aK().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=pe(),r=s.some((e)=>e.name===Ci&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:VO(),subscriber:Dt(),wsl:i.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await a(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{geo,e6a};
