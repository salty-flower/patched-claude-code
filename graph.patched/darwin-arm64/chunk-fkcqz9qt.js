// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{a}from"./chunk-1fpwxv0g.js";import{t}from"./chunk-3wz0srxw.js";import{ut,ce}from"./chunk-er6f56rj.js";import{AH,Fhe,TH,kH}from"./chunk-jfbsd9e8.js";import{Uc}from"./chunk-cqee0cy4.js";var DVt="https://clau.de/chrome/permissions",l={install:AH,reconnect:Fhe,permissions:DVt};async function S9o({mcpClients:s}){let i=await kH().catch((e)=>(t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error?e.message:String(e)}`,{level:"error"}),!1)),o=ce(),r=s.some((e)=>e.name===Uc&&e.type==="connected"),n=o.chromeExtension?.pairedDeviceName;return{allowed:TH(),subscriber:ut(),wsl:a.isWslEnvironment(),installed:i,connected:r,...r&&n&&{paired_browser:n},enabled_by_default:o.claudeInChromeDefaultEnabled??!1,urls:{...l}}}
export{DVt,S9o};
