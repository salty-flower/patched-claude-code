// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Tr}from"./chunk-1901fdh6.js";import{a}from"./chunk-k4g6y57j.js";import{CQe}from"./chunk-wrzcmmn0.js";import{Ao}from"./chunk-ge9ewwa2.js";import{Je,tge}from"./chunk-1rc6bk2z.js";var $Po=25000,s$s=` To read it anyway, up to what still fits in your context, call ${Je} again with ${tge}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,UPo=` Even with ${tge}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,i$s=` ${tge} is not available where this read runs; read it in parts with offset and limit.`,BPo=128;class Dae extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function jPo(e,t){n.set(e,t)}function uqn(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function JU(){let e=Ao();return e.defaultFileReadingLimits??={maxSizeBytes:CQe,maxTokens:i()??$Po},e.defaultFileReadingLimits}function lXe(){return Tr("tengu_tab_read_sep",!1)}
export{$Po,s$s,UPo,i$s,BPo,Dae,jPo,uqn,JU,lXe};
