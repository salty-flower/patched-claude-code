// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{c}from"./chunk-ydpbzmt4.js";import{a}from"./chunk-wq923bwc.js";import{Gm}from"./chunk-7h9djjg2.js";import{oTe}from"./chunk-g3fvp4ce.js";function iat(){return Gm()||oTe()}function Nas(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function OAn(e,o){a("tengu_remote_attach_record_lookup",{outcome:c(e),entry_point:c(o)})}
export{iat,Nas,OAn};
