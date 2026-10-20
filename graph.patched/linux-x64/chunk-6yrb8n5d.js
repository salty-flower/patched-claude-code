// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fe}from"./chunk-8nra9hkj.js";import{a}from"./chunk-cd1a8ced.js";var t=null;function Nzs(e){t=e}function ry(){return a.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG===!0||Fe(t?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG)}var o=300;function DFt(){let e=t?.(),n=(e===void 0?a.CLAUDE_CODE_PERSONAL_CONFIG_FIX:e.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();if(n===void 0||n===""||n.length>o||/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(n))return;return n}
export{Nzs,ry,DFt};
