// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{a}from"./chunk-3a4khaz5.js";import{t}from"./chunk-wvb0gwjm.js";import{pt,le}from"./chunk-twxt3h9y.js";import{VI,ape,IH,qI}from"./chunk-etkg2s89.js";import{Np}from"./chunk-y7za98f7.js";var AUt="https://clau.de/chrome/permissions",l={install:VI,reconnect:ape,permissions:AUt};async function LDo({mcpClients:s}){let i=await qI().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=le(),r=s.some((e)=>e.name===Np&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:IH(),subscriber:pt(),wsl:a.isWslEnvironment(),installed:i,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,urls:{...l}}}
export{AUt,LDo};
