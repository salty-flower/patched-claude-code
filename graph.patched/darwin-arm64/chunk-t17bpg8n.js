// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l}from"./chunk-e5bq01yj.js";import{n}from"./chunk-cmkfpkth.js";import{y}from"./chunk-wx0zfkp2.js";import{Ft}from"./chunk-5frxw1j3.js";import{mo,yrn,kw}from"./chunk-j5h9ds58.js";function o(e){if(e.kind!=="resolved"||!mo())return;let t=kw(),i=t.lastResolvedAccountToken;if(t.lastResolvedAccountToken=e.token,i===void 0||i===e.token)return;Ft().identityEpoch+=1,A$e(),d()}function d(){let e=Ft();if(!e.identityTrippedHandler){e.identityTripUnowned=!0;return}queueMicrotask(()=>{let t=Ft().identityTrippedHandler;if(!t){Ft().identityTripUnowned=!0;return}try{t()}catch(i){n(`MCP identity-change handler failed: ${l(i)}`,{level:"warn"})}})}function XZe(e){let t=Ft();return t.identityTrippedHandler=e,()=>{if(t.identityTrippedHandler===e)t.identityTrippedHandler=null}}function JZe(){let e=Ft(),t=e.identityTripUnowned;return e.identityTripUnowned=!1,t}function r(){if(!mo())return;o(yrn())}function g5(){let e=yrn();return o(e),e}function Vn(){return r(),Ft().identityEpoch}function C$e(){let e=Ft();if(!mo())return e.identityEpoch;return e.identityEpoch+=1,e.identityEpoch}var c="baseline:rearmed";function $In(){if(!mo())return;C$e(),kw().lastResolvedAccountToken=c}function fw(e){return r(),e===Ft().identityEpoch}function A$e(){let e=Ft();if(e.identityChangedThisProcess)return;e.identityChangedThisProcess=!0,y("mcp_discovery_cache","identity_changed")}function BIn(){return r(),Ft().identityChangedThisProcess}
export{XZe,JZe,g5,Vn,C$e,$In,fw,A$e,BIn};
