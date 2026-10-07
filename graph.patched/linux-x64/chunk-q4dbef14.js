// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Xk}from"./chunk-aywwjcwq.js";import{kr}from"./chunk-bpkzpttw.js";import{bA,SA,Po}from"./chunk-9wqh5j7s.js";import{Xho}from"./chunk-jyxr6bxf.js";import{dM}from"./chunk-aw0wn236.js";import{Nr}from"./chunk-q2j1pc7w.js";function b_r(e,r){return Xho(r.scope)&&!Po(e)}function JLe(e,r){return b_r(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-mp1vy66m.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function S_r(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(bA(),Nr(e,S_r))}async function ZKe({storageV5:e}={}){if(Xk()||kr())return bA();await dM();let{servers:r}=await SA({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{b_r,JLe,S_r,ZKe};
