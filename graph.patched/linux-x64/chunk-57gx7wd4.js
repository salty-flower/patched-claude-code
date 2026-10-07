// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-yffha6me.js";import{i}from"./chunk-s90w5q15.js";import{SVo}from"./chunk-0fybab08.js";import{up}from"./chunk-hfcd16gw.js";function QKe(){return up()||SVo()}function Hho(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function mQt(e,o){i("tengu_remote_attach_record_lookup",{outcome:d(e),entry_point:d(o)})}
export{QKe,Hho,mQt};
