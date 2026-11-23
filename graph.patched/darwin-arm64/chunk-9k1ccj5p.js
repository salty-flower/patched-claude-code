// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";var mZt="CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";function Ayr(){let{columns:r,rows:e}=process.stdout;if(!r||!e)return{};return{[mZt]:`${r}x${e}`}}function yFi(){let r=i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;if(delete process.env[mZt],r===void 0||!process.stdout.isTTY)return;let e=/^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(r);if(!e)return;process.stdout.columns||=Number(e[1]),process.stdout.rows||=Number(e[2])}
export{mZt,Ayr,yFi};
