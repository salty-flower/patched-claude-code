// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c}from"./chunk-fr28a3he.js";import{i}from"./chunk-h723y8sa.js";import{Jf}from"./chunk-aaax33vk.js";import{kpe}from"./chunk-7f1jmyrt.js";function jZe(){return Jf()||kpe()}function $2o(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function Ogn(e,o){i("tengu_remote_attach_record_lookup",{outcome:c(e),entry_point:c(o)})}
export{jZe,$2o,Ogn};
