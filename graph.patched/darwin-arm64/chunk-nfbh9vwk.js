// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-70qqbqq4.js";import{t}from"./chunk-b5feae42.js";import{_t,ce}from"./chunk-gcyvvtkw.js";import{CN,qve,TR,AN}from"./chunk-zwe9vtev.js";import{Xa}from"./chunk-08brm20q.js";var dWn="https://clau.de/chrome/permissions",m={install:CN,reconnect:qve,permissions:dWn};async function SIs({mcpClients:s,atStartup:i}){let l=await AN().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===Xa&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:TR(),subscriber:_t(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{dWn,SIs};
