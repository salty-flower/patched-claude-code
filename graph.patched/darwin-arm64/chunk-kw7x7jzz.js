// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{c}from"./chunk-g9zw99sb.js";import{i}from"./chunk-aykv0zbt.js";import{gIo}from"./chunk-jfbsd9e8.js";import{hm}from"./chunk-acxm6dhx.js";function C2e(){return hm()||gIo()}function aYr(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function z6t(e,o){i("tengu_remote_attach_record_lookup",{outcome:c(e),entry_point:c(o)})}
export{C2e,aYr,z6t};
