// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{pv}from"./chunk-a7cah040.js";import{fo}from"./chunk-h1eby6n2.js";import{tT,$C,To}from"./chunk-59zy4j10.js";import{k8r}from"./chunk-zsw8kmds.js";import{FP}from"./chunk-whf74ea8.js";import{Wr}from"./chunk-b8ghx04f.js";function zQn(e,r){return k8r(r.scope)&&!To(e)}function iIe(e,r){return zQn(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-bz9m3m46.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function VQn(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(tT(),Wr(e,VQn))}async function w2e({storageV5:e}={}){if(pv()||fo())return tT();await FP();let{servers:r}=await $C({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{zQn,iIe,VQn,w2e};
