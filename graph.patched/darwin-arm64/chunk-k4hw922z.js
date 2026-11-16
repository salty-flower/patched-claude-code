// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{fe}from"./chunk-c63g0fmv.js";var n=fe({scale:void 0},(e)=>{e.scale=void 0});function l2e(){let e=i.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP??1;if(typeof Bun<"u"&&typeof Bun.unsafe.setJITPolicy==="function")Bun.unsafe.setJITPolicy(e),n.scale=e;return e}function Z9s(){return n.scale}
export{l2e,Z9s};
