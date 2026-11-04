// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{De}from"./chunk-w5484khd.js";import{i}from"./chunk-n1cpnz94.js";var o=null;function N$i(n){o=n}function xy(){return i.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG===!0||De(o?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG)}var t=300;function UZt(){let n=o?.(),e=(n===void 0?i.CLAUDE_CODE_PERSONAL_CONFIG_FIX:n.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();if(e===void 0||e===""||e.length>t||/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return;return e}function F$i(){let n=o?.(),e=(n===void 0?i.CLAUDE_CODE_PERSONAL_HOOKS_OFF:n.CLAUDE_CODE_PERSONAL_HOOKS_OFF)?.trim().toLowerCase();switch(e){case void 0:case"":case"none":case"0":case"false":case"no":case"off":return;case"retry":case"fix":case"launch":return e;default:return"host"}}
export{N$i,xy,UZt,F$i};
