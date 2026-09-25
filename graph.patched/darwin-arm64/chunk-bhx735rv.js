// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{na}from"./chunk-twxt3h9y.js";import{a}from"./chunk-3a4khaz5.js";import{jMe}from"./chunk-742ky2cp.js";import{jo}from"./chunk-9fsgjz11.js";var ZAr=25000,ekr=128;class kve extends Error{tokenCount;maxTokens;constructor(e,t){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function g_o(e,t){n.set(e,t)}function h_o(e){return n.get(e)}function r(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function I8(){let e=jo();return e.defaultFileReadingLimits??={maxSizeBytes:jMe,maxTokens:r()??ZAr},e.defaultFileReadingLimits}function i3e(){return na("tengu_tab_read_sep",!1)}
export{ZAr,ekr,kve,g_o,h_o,I8,i3e};
