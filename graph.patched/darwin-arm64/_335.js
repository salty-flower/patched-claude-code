// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{bad as s}from"./_797.js";import{xad as t}from"./_798.js";import{Exd as n}from"./_839.js";function u(){let{columns:r,rows:e}=process.stdout;if(!r||!e)return{};return{[o]:`${r}x${e}`}}function E(){let r=t.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(delete process.env[o],r===void 0||!process.stdout.isTTY)return;let e=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);if(!e)return;process.stdout.columns||=Number(e[1]),process.stdout.rows||=Number(e[2])}var o="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";var c=n(()=>{s()});
export{o as FI,u as GI,E as HI,c as II};
