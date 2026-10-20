// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ir}from"./chunk-7p6jp6kj.js";import{a}from"./chunk-cd1a8ced.js";import{Det}from"./chunk-bjv5j0w5.js";import{Ro}from"./chunk-q5je0w38.js";import{Qe,ahe}from"./chunk-71nhcy1n.js";var _No=25000,hKs=` To read it anyway, up to what still fits in your context, call ${Qe} again with ${ahe}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,bNo=` Even with ${ahe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,yKs=` ${ahe} is not available where this read runs; read it in parts with offset and limit.`,SNo=128;class Fle extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function wNo(e,t){n.set(e,t)}function V5n(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function MB(){let e=Ro();return e.defaultFileReadingLimits??={maxSizeBytes:Det,maxTokens:i()??_No},e.defaultFileReadingLimits}function aQe(){return ir("tengu_tab_read_sep",!1)}
export{_No,hKs,bNo,yKs,SNo,Fle,wNo,V5n,MB,aQe};
