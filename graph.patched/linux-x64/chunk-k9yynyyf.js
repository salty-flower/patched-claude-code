// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fr}from"./chunk-cxjvwxsa.js";import{a}from"./chunk-rptge3r8.js";import{MYe}from"./chunk-5v4f7g5r.js";import{_o}from"./chunk-946598ze.js";var jao=25000,Wao=128;class I0e extends Error{tokenCount;maxTokens;constructor(e,t){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function zao(e,t){n.set(e,t)}function Ids(e){return n.get(e)}function r(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function Lj(){let e=_o();return e.defaultFileReadingLimits??={maxSizeBytes:MYe,maxTokens:r()??jao},e.defaultFileReadingLimits}function Hot(){return Fr("tengu_tab_read_sep",!1)}
export{jao,Wao,I0e,zao,Ids,Lj,Hot};
