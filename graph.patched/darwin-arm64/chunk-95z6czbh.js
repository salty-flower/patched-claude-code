// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"./chunk-yvnhkg35.js";import{t}from"./chunk-gyf58rwf.js";import{wt,ce}from"./chunk-bk5ct2gw.js";import{LF,rCe,Dx,NF}from"./chunk-n3ykh62m.js";import{ka}from"./chunk-c1r4rm9h.js";var KKn="https://clau.de/chrome/permissions",m={install:LF,reconnect:rCe,permissions:KKn};async function X1s({mcpClients:s,atStartup:i}){let l=await NF().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===ka&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:Dx(),subscriber:wt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{KKn,X1s};
