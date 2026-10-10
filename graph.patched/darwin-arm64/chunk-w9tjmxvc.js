// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{KE}from"./chunk-4bw62nzm.js";import{pr}from"./chunk-nqc6v990.js";import{yA,bk,Ao}from"./chunk-sfn1dbxq.js";import{kHo}from"./chunk-zekxzqvp.js";import{yx}from"./chunk-dsas2xqf.js";import{Eo}from"./chunk-t2x9eyac.js";function TOr(e,r){return kHo(r.scope)&&!Ao(e)}function dBe(e,r){return TOr(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-dj5t4hnw.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function ROr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(yA(),Eo(e,ROr))}async function EYe({storageV5:e}={}){if(KE()||pr())return yA();await yx();let{servers:r}=await bk({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{TOr,dBe,ROr,EYe};
