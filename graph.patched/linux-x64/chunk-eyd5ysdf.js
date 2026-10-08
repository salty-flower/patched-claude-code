// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{hT}from"./chunk-g79wjybr.js";import{br}from"./chunk-4z5wz91m.js";import{QA,ZA,Ho}from"./chunk-g263vvvn.js";import{rTo}from"./chunk-s9mzvz4t.js";import{WM}from"./chunk-cv8kvz35.js";import{zr}from"./chunk-vyx0nxv6.js";function hTr(e,r){return rTo(r.scope)&&!Ho(e)}function aFe(e,r){return hTr(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-fw94rtj6.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function yTr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(QA(),zr(e,yTr))}async function X6e({storageV5:e}={}){if(hT()||br())return QA();await WM();let{servers:r}=await ZA({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{hTr,aFe,yTr,X6e};
