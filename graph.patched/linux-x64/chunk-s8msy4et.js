// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l}from"./chunk-efckqwp7.js";import{n}from"./chunk-d0cr5d2v.js";import{g}from"./chunk-ykrbqs98.js";import{zt}from"./chunk-0me3rg21.js";import{Io,_ln,bE}from"./chunk-h6btyxas.js";function o(e){if(e.kind!=="resolved"||!Io())return;let t=bE(),i=t.lastResolvedAccountToken;if(t.lastResolvedAccountToken=e.token,i===void 0||i===e.token)return;zt().identityEpoch+=1,$2e(),d()}function d(){let e=zt();if(!e.identityTrippedHandler){e.identityTripUnowned=!0;return}queueMicrotask(()=>{let t=zt().identityTrippedHandler;if(!t){zt().identityTripUnowned=!0;return}try{t()}catch(i){n(`MCP identity-change handler failed: ${l(i)}`,{level:"warn"})}})}function Uot(e){let t=zt();return t.identityTrippedHandler=e,()=>{if(t.identityTrippedHandler===e)t.identityTrippedHandler=null}}function jot(){let e=zt(),t=e.identityTripUnowned;return e.identityTripUnowned=!1,t}function r(){if(!Io())return;o(_ln())}function PK(){let e=_ln();return o(e),e}function lr(){return r(),zt().identityEpoch}function D2e(){let e=zt();if(!Io())return e.identityEpoch;return e.identityEpoch+=1,e.identityEpoch}var c="baseline:rearmed";function TNn(){if(!Io())return;D2e(),bE().lastResolvedAccountToken=c}function iE(e){return r(),e===zt().identityEpoch}function $2e(){let e=zt();if(e.identityChangedThisProcess)return;e.identityChangedThisProcess=!0,g("mcp_discovery_cache","identity_changed")}function CNn(){return r(),zt().identityChangedThisProcess}
export{Uot,jot,PK,lr,D2e,TNn,iE,$2e,CNn};
