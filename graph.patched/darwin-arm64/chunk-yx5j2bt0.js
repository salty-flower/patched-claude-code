// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ZC}from"./chunk-8mvda08c.js";import{vr}from"./chunk-xbg4a11x.js";import{EA,vA,Po}from"./chunk-y0b3kvx1.js";import{Syo}from"./chunk-kbd38why.js";import{m0}from"./chunk-839nx504.js";import{Nr}from"./chunk-1csct632.js";function B_r(e,r){return Syo(r.scope)&&!Po(e)}function sNe(e,r){return B_r(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-ta625h42.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function j_r(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(EA(),Nr(e,j_r))}async function sKe({storageV5:e}={}){if(ZC()||vr())return EA();await m0();let{servers:r}=await vA({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{B_r,sNe,j_r,sKe};
