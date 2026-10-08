// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Wn}from"./chunk-gcyvvtkw.js";import{d}from"./chunk-eak61y8v.js";import{We}from"./chunk-9exgg8sx.js";import{a}from"./chunk-70qqbqq4.js";import{t}from"./chunk-b5feae42.js";import{i}from"./chunk-ne43gjnt.js";class f{latched=void 0;latch(e){this.latched=e}reset(){this.latched=void 0}}var u=We(new f,(e)=>e.reset());function FR(){{if(u.latched!==void 0)return u.latched;let e=a.MCP_SDK_GENERATION,o=e==="v1"||e==="v2"?e:void 0;if(e!==void 0&&o===void 0)t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`,{level:"warn"});let n=o===void 0?Wn("tengu_brindle_causeway",!0):void 0,r=o??(n?.value===!1?"v1":"v2"),c=n===void 0?"env":n.source==="disabled"||n.source==="fallback"?"default":"growthbook";return u.latch(r),t(`mcp runtime arm: ${r} (source: ${c})`),i("tengu_mcp_sdk_generation",{generation:d(r),source:d(c)}),r}return"v1"}
export{FR};
