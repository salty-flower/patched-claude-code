// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{a}from"./chunk-869zfth6.js";import{t}from"./chunk-gvn18sr5.js";import{mt,ce}from"./chunk-m0sj7y8g.js";import{ML,Uwe,JC,HL}from"./chunk-0fybab08.js";import{sl}from"./chunk-v4w1ky6f.js";var mFn="https://clau.de/chrome/permissions",m={install:ML,reconnect:Uwe,permissions:mFn};async function ISs({mcpClients:s,atStartup:i}){let l=await HL().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===sl&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:JC(),subscriber:mt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{mFn,ISs};
