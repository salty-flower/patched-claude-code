// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{ge}from"./chunk-77hsvag5.js";var n=ge({scale:void 0},(e)=>{e.scale=void 0});function omt(){let e=i.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP??1;if(typeof Bun<"u"&&typeof Bun.unsafe.setJITPolicy==="function")Bun.unsafe.setJITPolicy(e),n.scale=e;return e}function xws(){return n.scale}
export{omt,xws};
