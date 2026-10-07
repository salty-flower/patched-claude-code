// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{wq}from"./chunk-vrsbmck5.js";import{S,wa}from"./chunk-f8eqwxpt.js";var d=/[\x7f-\x9f]/g,t=(e)=>e.replace(d,(r)=>`\\u${r.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function osn(e){return e.replace(c,"")}function ssn(e,{verbose:r}){if(Object.keys(e).length===0)return"";let n=wq(e);if(n!==null)return n;return Object.entries(e).map(([o,i])=>{let s=t(S(i));return`${t(wa(o).slice(1,-1))}: ${s}`}).join(", ")}
export{osn,ssn};
