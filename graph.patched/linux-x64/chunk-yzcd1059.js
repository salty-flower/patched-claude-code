// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l}from"./chunk-7h2h1m4y.js";import{n}from"./chunk-akz0cj0f.js";import{y}from"./chunk-v1ap59a1.js";import{Nt}from"./chunk-pws3zj07.js";import{mo,hrn,Hw}from"./chunk-hrvkymct.js";function o(e){if(e.kind!=="resolved"||!mo())return;let t=Hw(),i=t.lastResolvedAccountToken;if(t.lastResolvedAccountToken=e.token,i===void 0||i===e.token)return;Nt().identityEpoch+=1,jFe(),d()}function d(){let e=Nt();if(!e.identityTrippedHandler){e.identityTripUnowned=!0;return}queueMicrotask(()=>{let t=Nt().identityTrippedHandler;if(!t){Nt().identityTripUnowned=!0;return}try{t()}catch(i){n(`MCP identity-change handler failed: ${l(i)}`,{level:"warn"})}})}function Tet(e){let t=Nt();return t.identityTrippedHandler=e,()=>{if(t.identityTrippedHandler===e)t.identityTrippedHandler=null}}function Het(){let e=Nt(),t=e.identityTripUnowned;return e.identityTripUnowned=!1,t}function r(){if(!mo())return;o(hrn())}function fW(){let e=hrn();return o(e),e}function Vn(){return r(),Nt().identityEpoch}function UFe(){let e=Nt();if(!mo())return e.identityEpoch;return e.identityEpoch+=1,e.identityEpoch}var c="baseline:rearmed";function OIn(){if(!mo())return;UFe(),Hw().lastResolvedAccountToken=c}function fw(e){return r(),e===Nt().identityEpoch}function jFe(){let e=Nt();if(e.identityChangedThisProcess)return;e.identityChangedThisProcess=!0,y("mcp_discovery_cache","identity_changed")}function $In(){return r(),Nt().identityChangedThisProcess}
export{Tet,Het,fW,Vn,UFe,OIn,fw,jFe,$In};
