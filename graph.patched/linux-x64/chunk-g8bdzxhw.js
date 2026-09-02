// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{x}from"./chunk-1e5y3pjf.js";import{a}from"./chunk-m9gbfvns.js";import{c}from"./chunk-r1b219q3.js";import{n}from"./chunk-d0cr5d2v.js";import{s}from"./chunk-yqfv1yd3.js";class u{latched=void 0;latch(e){this.latched=e}reset(){this.latched=void 0}}var o=new u;function vw(){{if(o.latched!==void 0)return o.latched;let e=a.MCP_SDK_GENERATION,t=e==="v1"||e==="v2"?e:void 0;if(e!==void 0&&t===void 0)n(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`,{level:"warn"});let i=t===void 0&&x("tengu_brindle_causeway",!1)===!0,r=t??(i?"v2":"v1"),d=t!==void 0?"env":i?"growthbook":"default";return o.latch(r),n(`mcp runtime arm: ${r} (source: ${d})`),s("tengu_mcp_sdk_generation",{generation:c(r),source:c(d)}),r}return"v1"}
export{vw};
