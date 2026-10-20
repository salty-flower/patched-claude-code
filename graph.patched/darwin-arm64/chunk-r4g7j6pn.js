// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ir}from"./chunk-bvn0epzr.js";import{a}from"./chunk-h422gpw8.js";import{jet}from"./chunk-c2wcenam.js";import{Ro}from"./chunk-gr9e4jde.js";import{Qe,mhe}from"./chunk-7nh1172a.js";var KNo=25000,tVs=` To read it anyway, up to what still fits in your context, call ${Qe} again with ${mhe}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,qNo=` Even with ${mhe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,nVs=` ${mhe} is not available where this read runs; read it in parts with offset and limit.`,YNo=128;class zle extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function XNo(e,t){n.set(e,t)}function u9n(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function U1(){let e=Ro();return e.defaultFileReadingLimits??={maxSizeBytes:jet,maxTokens:i()??KNo},e.defaultFileReadingLimits}function mJe(){return ir("tengu_tab_read_sep",!1)}
export{KNo,tVs,qNo,nVs,YNo,zle,XNo,u9n,U1,mJe};
