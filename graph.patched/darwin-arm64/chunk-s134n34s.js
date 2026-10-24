// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Wn}from"./chunk-27xjmczp.js";import{i}from"./chunk-9a41hw1t.js";import{VTt}from"./chunk-fmbx25g2.js";import{Lo}from"./chunk-j350yvzv.js";import{qe,cSe}from"./chunk-djgw0xdn.js";var lKo=25000,Pei=` To read it anyway, up to what still fits in your context, call ${qe} again with ${cSe}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,dKo=` Even with ${cSe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,Iei=` ${cSe} is not available where this read runs; read it in parts with offset and limit.`,cKo=128;class pue extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function uKo(e,t){n.set(e,t)}function Ker(e){return n.get(e)}function o(){let e=i.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function Cj(){let e=Lo();return e.defaultFileReadingLimits??={maxSizeBytes:VTt,maxTokens:o()??lKo},e.defaultFileReadingLimits}function snt(){return Wn("tengu_tab_read_sep",!1)}
export{lKo,Pei,dKo,Iei,cKo,pue,uKo,Ker,Cj,snt};
