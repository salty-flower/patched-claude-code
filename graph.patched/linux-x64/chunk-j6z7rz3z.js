// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{w4}from"./chunk-9b9pp2j0.js";import{_,Ia}from"./chunk-p46wpkfz.js";var d=/[\x7f-\x9f]/g,t=(e)=>e.replace(d,(r)=>`\\u${r.charCodeAt(0).toString(16).padStart(4,"0")}`),c=/[\x00-\x1f\x7f-\x9f]/g;function ccn(e){return e.replace(c,"")}function dcn(e,{verbose:r}){if(Object.keys(e).length===0)return"";let n=w4(e);if(n!==null)return n;return Object.entries(e).map(([o,i])=>{let s=t(_(i));return`${t(Ia(o).slice(1,-1))}: ${s}`}).join(", ")}
export{ccn,dcn};
