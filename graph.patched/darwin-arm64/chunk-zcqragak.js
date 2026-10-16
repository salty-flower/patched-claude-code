// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{mf}from"./chunk-1901fdh6.js";import{je}from"./chunk-qh32bfzk.js";var Z5r=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=mf();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>Z5r)}}}var t=je(m(),(o)=>o.setPromptMentionRunner(null));var u4s=t.runPromptMention;var p4s=t.setPromptMentionRunner;export{Z5r,u4s,p4s};
