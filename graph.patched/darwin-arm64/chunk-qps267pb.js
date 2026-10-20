// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{i}from"./chunk-dj0gyv94.js";import{ym}from"./chunk-70q8tq1z.js";import{TEe}from"./chunk-d7eqjts1.js";function cnt(){return ym()||TEe()}function pYo(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function hbn(e,o){i("tengu_remote_attach_record_lookup",{outcome:c(e),entry_point:c(o)})}
export{cnt,pYo,hbn};
