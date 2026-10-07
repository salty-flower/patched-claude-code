// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Yh}from"./chunk-s46qgfx7.js";import{qe}from"./chunk-5qeme8w3.js";var PRr=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=Yh();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>PRr)}}}var t=qe(m(),(o)=>o.setPromptMentionRunner(null));var Lms=t.runPromptMention;var Nms=t.setPromptMentionRunner;export{PRr,Lms,Nms};
