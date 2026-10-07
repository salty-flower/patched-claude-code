// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xr}from"./chunk-m0sj7y8g.js";import{a}from"./chunk-869zfth6.js";import{Hqe}from"./chunk-dcpaq2kj.js";import{So}from"./chunk-gsz4ykfe.js";var MZr=25000,HZr=128;class SHe extends Error{tokenCount;maxTokens;constructor(e,t){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function DZr(e,t){n.set(e,t)}function Ges(e){return n.get(e)}function r(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function k6(){let e=So();return e.defaultFileReadingLimits??={maxSizeBytes:Hqe,maxTokens:r()??MZr},e.defaultFileReadingLimits}function htt(){return xr("tengu_tab_read_sep",!1)}
export{MZr,HZr,SHe,DZr,Ges,k6,htt};
