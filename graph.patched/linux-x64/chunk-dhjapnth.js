// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{a}from"./chunk-rptge3r8.js";import{t}from"./chunk-p46wpkfz.js";import{_t,ce}from"./chunk-cxjvwxsa.js";import{SN,FEe,ER,wN}from"./chunk-aqh2c7wz.js";import{Ya}from"./chunk-4b6c7fgt.js";var VWn="https://clau.de/chrome/permissions",m={install:SN,reconnect:FEe,permissions:VWn};async function LPs({mcpClients:s,atStartup:i}){let l=await wN().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===Ya&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:ER(),subscriber:_t(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{VWn,LPs};
