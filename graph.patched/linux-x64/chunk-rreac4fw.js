// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bp}from"./chunk-cd1a8ced.js";import{nKo}from"./chunk-65s1xpd0.js";function $Po(n,e){let o=bp()?nKo(n):void 0;if(!o)return;let{tls:s,...t}=e??{},d=e?.proxy===void 0&&e?.unix===void 0?t:e;return(r)=>o.fetch(r,d)}function vVn(n,e,o){let s=e.proxy===void 0&&o?.()?$Po("ccr",e):void 0;return s?s(n):fetch(n,e)}
export{$Po,vVn};
