// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{op}from"./chunk-xwn0mfnc.js";import{bFo}from"./chunk-0nwsa03d.js";function VSo(n,e){let o=op()?bFo(n):void 0;if(!o)return;let{tls:s,...t}=e??{},d=e?.proxy===void 0&&e?.unix===void 0?t:e;return(r)=>o.fetch(r,d)}function Mjn(n,e,o){let s=e.proxy===void 0&&o?.()?VSo("ccr",e):void 0;return s?s(n):fetch(n,e)}
export{VSo,Mjn};
