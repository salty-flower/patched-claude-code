// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";var rZt="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";function Z_r(){let{columns:r,rows:e}=process.stdout;if(!r||!e)return{};return{[rZt]:`${r}x${e}`}}function UNi(){let r=i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(delete process.env[rZt],r===void 0||!process.stdout.isTTY)return;let e=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);if(!e)return;process.stdout.columns||=Number(e[1]),process.stdout.rows||=Number(e[2])}
export{rZt,Z_r,UNi};
