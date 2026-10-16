// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Aw}from"./chunk-eqmywwjn.js";import{tw,ST,xo}from"./chunk-38nf1dnm.js";import{br}from"./chunk-c61xdsy8.js";import{$s}from"./chunk-4dcbf4v7.js";import{Y2o}from"./chunk-xgw546mz.js";import{CP}from"./chunk-hf22xqgr.js";function bjr(e,r){return Y2o(r.scope)&&!xo(e)}function AGe(e,r){return bjr(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-r3h55pc4.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function Sjr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(tw(),$s(e,Sjr))}async function zZe({storageV5:e}={}){if(Aw()||br())return tw();await CP();let{servers:r}=await ST({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{bjr,AGe,Sjr,zZe};
