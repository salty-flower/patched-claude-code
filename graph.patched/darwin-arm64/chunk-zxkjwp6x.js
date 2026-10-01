// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Lo}from"./chunk-er6f56rj.js";import{a}from"./chunk-1fpwxv0g.js";import{GUe}from"./chunk-dn2273cv.js";import{ko}from"./chunk-610gtpa9.js";var A1r=25000,T1r=128;class Uke extends Error{tokenCount;maxTokens;constructor(e,t){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function k1r(e,t){n.set(e,t)}function ALo(e){return n.get(e)}function r(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function N7(){let e=ko();return e.defaultFileReadingLimits??={maxSizeBytes:GUe,maxTokens:r()??A1r},e.defaultFileReadingLimits}function H9e(){return Lo("tengu_tab_read_sep",!1)}
export{A1r,T1r,Uke,k1r,ALo,N7,H9e};
