// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{P}from"./chunk-vtwn1md5.js";import{a}from"./chunk-g2ngvza5.js";import{u}from"./chunk-g1553wr3.js";import{t}from"./chunk-84crg0gy.js";import{s}from"./chunk-v5cr82c7.js";import{Fb}from"./chunk-6abf03hf.js";class c{latched=void 0;latch(e){this.latched=e}reset(){this.latched=void 0}}var o=Fb(new c,(e)=>e.reset());function eE(){{if(o.latched!==void 0)return o.latched;let e=a.MCP_SDK_GENERATION,n=e==="v1"||e==="v2"?e:void 0;if(e!==void 0&&n===void 0)t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`,{level:"warn"});let i=n===void 0&&P("tengu_brindle_causeway",!1)===!0,r=n??(i?"v2":"v1"),d=n!==void 0?"env":i?"growthbook":"default";return o.latch(r),t(`mcp runtime arm: ${r} (source: ${d})`),s("tengu_mcp_sdk_generation",{generation:u(r),source:u(d)}),r}return"v1"}
export{eE};
