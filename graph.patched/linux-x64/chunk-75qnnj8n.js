// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Yh}from"./chunk-m0sj7y8g.js";import{Ve}from"./chunk-gf0t3nd9.js";var pRr=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=Yh();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>pRr)}}}var t=Ve(m(),(o)=>o.setPromptMentionRunner(null));var tms=t.runPromptMention;var nms=t.setPromptMentionRunner;export{pRr,tms,nms};
