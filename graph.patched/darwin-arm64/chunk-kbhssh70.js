// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{yn}from"./chunk-axsjfnwn.js";import{p}from"./chunk-h58p4vvs.js";import{i}from"./chunk-n1cpnz94.js";import{t}from"./chunk-5nh49npx.js";import{l}from"./chunk-hm8vbfs0.js";import{ge}from"./chunk-77hsvag5.js";class u{latched=void 0;latch(e){this.latched=e}reset(){this.latched=void 0}}var d=ge(new u,(e)=>e.reset());function qD(){{if(d.latched!==void 0)return d.latched;let e=i.MCP_SDK_GENERATION,o=e==="v1"||e==="v2"?e:void 0;if(e!==void 0&&o===void 0)t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`,{level:"warn"});let n=o===void 0?yn("tengu_brindle_causeway",!0):void 0,r=o??(n?.value===!1?"v1":"v2"),a=n===void 0?"env":n.source==="disabled"||n.source==="fallback"?"default":"growthbook";return d.latch(r),t(`mcp runtime arm: ${r} (source: ${a})`),l("tengu_mcp_sdk_generation",{generation:p(r),source:p(a)}),r}return"v1"}
export{qD};
