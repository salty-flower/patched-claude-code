// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";var jzt="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";function V7n(){let{columns:r,rows:e}=process.stdout;if(!r||!e)return{};return{[jzt]:`${r}x${e}`}}function Qei(){let r=i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(delete process.env[jzt],r===void 0||!process.stdout.isTTY)return;let e=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);if(!e)return;process.stdout.columns||=Number(e[1]),process.stdout.rows||=Number(e[2])}
export{jzt,V7n,Qei};
