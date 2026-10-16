// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{t}from"./chunk-cwsn6mdf.js";import{kt,ue}from"./chunk-k16gymf7.js";import{fU,mPe,_A,mU}from"./chunk-7f1jmyrt.js";import{La}from"./chunk-pgz2gr65.js";var iZn="https://clau.de/chrome/permissions",m={install:fU,reconnect:mPe,permissions:iZn};async function wQs({mcpClients:s,atStartup:i}){let l=await mU().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ue(),r=s.some((e)=>e.name===La&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:_A(),subscriber:kt(),wsl:a.isWslEnvironment(),installed:l,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,at_startup:await i(o.claudeInChromeDefaultEnabled===!0),urls:{...m}}}
export{iZn,wQs};
