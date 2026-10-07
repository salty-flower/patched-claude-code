// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xr}from"./chunk-s46qgfx7.js";import{a}from"./chunk-j77txbjn.js";import{EVe}from"./chunk-prs2t84m.js";import{bo}from"./chunk-rdy2m4vh.js";var aeo=25000,leo=128;class RHe extends Error{tokenCount;maxTokens;constructor(e,t){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function ceo(e,t){n.set(e,t)}function xts(e){return n.get(e)}function r(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function O4(){let e=bo();return e.defaultFileReadingLimits??={maxSizeBytes:EVe,maxTokens:r()??aeo},e.defaultFileReadingLimits}function Ctt(){return xr("tengu_tab_read_sep",!1)}
export{aeo,leo,RHe,ceo,xts,O4,Ctt};
