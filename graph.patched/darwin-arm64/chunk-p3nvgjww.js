// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{zr}from"./chunk-bk5ct2gw.js";import{a}from"./chunk-yvnhkg35.js";import{n8e}from"./chunk-f606a53w.js";import{wo}from"./chunk-75xzrg6e.js";import{rt,vue}from"./chunk-1d8w1b0d.js";var gho=25000,uEs=` To read it anyway, up to what still fits in your context, call ${rt} again with ${vue}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,hho=` Even with ${vue}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,pEs=` ${vue} is not available where this read runs; read it in parts with offset and limit.`,yho=128;class zde extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function _ho(e,t){n.set(e,t)}function mUn(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function sW(){let e=wo();return e.defaultFileReadingLimits??={maxSizeBytes:n8e,maxTokens:i()??gho},e.defaultFileReadingLimits}function Z3e(){return zr("tengu_tab_read_sep",!1)}
export{gho,uEs,hho,pEs,yho,zde,_ho,mUn,sW,Z3e};
