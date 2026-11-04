// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ep}from"./chunk-axsjfnwn.js";import{ge}from"./chunk-77hsvag5.js";var $1o=Object.freeze({isKept:!0,isDenied:!1,context:Object.freeze([])});function m(){let o=ep();return{setPromptMentionRunner:o.set,runPromptMention:(r)=>{let e=o.get();return e?e(r):r.read(r.raised,"unhooked").then(()=>$1o)}}}var t=ge(m(),(o)=>o.setPromptMentionRunner(null));var k7i=t.runPromptMention;var v7i=t.setPromptMentionRunner;export{$1o,k7i,v7i};
