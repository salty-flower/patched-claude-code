// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{SC}from"./chunk-vd0a9d2s.js";import{yr}from"./chunk-ce4b81xm.js";import{tT,nT,Mo}from"./chunk-nwqfvmza.js";import{HCo}from"./chunk-tc9y4mm0.js";import{q0}from"./chunk-mktak3h8.js";import{Gr}from"./chunk-rgvsr2fj.js";function $Cr(e,r){return HCo(r.scope)&&!Mo(e)}function g$e(e,r){return $Cr(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-v2tfe2cy.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function UCr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(tT(),Gr(e,UCr))}async function n5e({storageV5:e}={}){if(SC()||yr())return tT();await q0();let{servers:r}=await nT({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{$Cr,g$e,UCr,n5e};
