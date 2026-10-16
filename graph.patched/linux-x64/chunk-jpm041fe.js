// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ar}from"./chunk-k16gymf7.js";import{a}from"./chunk-xwn0mfnc.js";import{_7e}from"./chunk-wz19y5sy.js";import{Ao}from"./chunk-7z1je35j.js";import{Je,qme}from"./chunk-ymemkdhw.js";var cPo=25000,S$s=` To read it anyway, up to what still fits in your context, call ${Je} again with ${qme}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,uPo=` Even with ${qme}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,w$s=` ${qme} is not available where this read runs; read it in parts with offset and limit.`,pPo=128;class xae extends Error{tokenCount;maxTokens;constructor(e,t,r=""){super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);this.tokenCount=e;this.maxTokens=t;this.name="MaxFileReadTokenExceededError"}}var n=new WeakMap;function fPo(e,t){n.set(e,t)}function KKn(e){return n.get(e)}function i(){let e=a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;return}function zU(){let e=Ao();return e.defaultFileReadingLimits??={maxSizeBytes:_7e,maxTokens:i()??cPo},e.defaultFileReadingLimits}function tXe(){return Ar("tengu_tab_read_sep",!1)}
export{cPo,S$s,uPo,w$s,pPo,xae,fPo,KKn,zU,tXe};
