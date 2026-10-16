// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Tw}from"./chunk-xzypj06m.js";import{nw,vC,xo}from"./chunk-996thspe.js";import{gr}from"./chunk-6dw7xt0q.js";import{$s}from"./chunk-65qd2bnn.js";import{A6o}from"./chunk-y079hpeg.js";import{IP}from"./chunk-2550pwwj.js";function Wjr(e,r){return A6o(r.scope)&&!xo(e)}function MGe(e,r){return Wjr(e,r)&&!o(r)}function o(e){return ((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-n94rne6y.js").mcpClientModule().isFirstPartyDesignServerConfig(e)}function Gjr(e){switch(e.type){case void 0:case"stdio":case"http":case"sse":case"ws":return!0;case"sdk":case"sse-ide":case"ws-ide":case"claudeai-proxy":return!1}}function t(e){return Object.assign(nw(),$s(e,Gjr))}async function XZe({storageV5:e}={}){if(Tw()||gr())return nw();await IP();let{servers:r}=await vC({},{purpose:"deviceBridge",storageV5:e});return t(r)}
export{Wjr,MGe,Gjr,XZe};
