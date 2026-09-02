// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l}from"./chunk-qr1avfxy.js";import{n}from"./chunk-ynzt0fm1.js";import{g}from"./chunk-xtqqhw5t.js";import{qt}from"./chunk-pdpxsvxg.js";import{Ho,bln,SE}from"./chunk-fy12d89p.js";function o(e){if(e.kind!=="resolved"||!Ho())return;let t=SE(),i=t.lastResolvedAccountToken;if(t.lastResolvedAccountToken=e.token,i===void 0||i===e.token)return;qt().identityEpoch+=1,S6e(),d()}function d(){let e=qt();if(!e.identityTrippedHandler){e.identityTripUnowned=!0;return}queueMicrotask(()=>{let t=qt().identityTrippedHandler;if(!t){qt().identityTripUnowned=!0;return}try{t()}catch(i){n(`MCP identity-change handler failed: ${l(i)}`,{level:"warn"})}})}function mot(e){let t=qt();return t.identityTrippedHandler=e,()=>{if(t.identityTrippedHandler===e)t.identityTrippedHandler=null}}function got(){let e=qt(),t=e.identityTripUnowned;return e.identityTripUnowned=!1,t}function r(){if(!Ho())return;o(bln())}function Mq(){let e=bln();return o(e),e}function lr(){return r(),qt().identityEpoch}function y6e(){let e=qt();if(!Ho())return e.identityEpoch;return e.identityEpoch+=1,e.identityEpoch}var c="baseline:rearmed";function H1n(){if(!Ho())return;y6e(),SE().lastResolvedAccountToken=c}function iE(e){return r(),e===qt().identityEpoch}function S6e(){let e=qt();if(e.identityChangedThisProcess)return;e.identityChangedThisProcess=!0,g("mcp_discovery_cache","identity_changed")}function x1n(){return r(),qt().identityChangedThisProcess}
export{mot,got,Mq,lr,y6e,H1n,iE,S6e,x1n};
