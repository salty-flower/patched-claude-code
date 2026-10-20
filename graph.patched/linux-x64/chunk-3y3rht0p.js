// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{si}from"./chunk-m7gr14b0.js";import{GXn}from"./chunk-7gz0pfve.js";function jYe(t){let r=[];for(let o of t){if(!si(o))continue;let{config:e}=o,n=e&&typeof e==="object"&&"url"in e&&typeof e.url==="string"?e.url:null;if(n!==null&&GXn(n))r.push(o)}return r.length===1?r[0]:null}
export{jYe};
