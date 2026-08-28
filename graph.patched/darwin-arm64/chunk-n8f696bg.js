// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$ad as s,Zad as n}from"./_800.js";import{Omd as o,Pmd as t,krd as a}from"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_825.js";import{Exd as m}from"./_839.js";var f=async(d,r)=>{let e=!o();return t(e),r.sessionState?.notifyInternalMetadataChanged({memory_toggled_off:e?!0:null}),n("tengu_memory_toggled",{toggled_off:e}),{type:"text",value:e?`Memory paused for this session \xB7 this conversation will not write or read new memories, and previously-loaded memory content should not be referenced.

Run /pause-memory again to resume.`:"Memory resumed \xB7 memory content may be referenced and new memories can be saved."}};var l=m(()=>{a();s()});l();export{f as call};
