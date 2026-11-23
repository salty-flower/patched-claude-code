// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{$c}from"./chunk-e44qnbvj.js";import{fe}from"./chunk-c63g0fmv.js";var mls=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=$c();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>mls)}}}var t=fe(m(),(o)=>o.setPromptMentionRunner(null));var F2a=t.runPromptMention;var $2a=t.setPromptMentionRunner;export{mls,F2a,$2a};
