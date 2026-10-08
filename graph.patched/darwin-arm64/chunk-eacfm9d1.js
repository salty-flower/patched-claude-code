// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-eak61y8v.js";import{i}from"./chunk-ne43gjnt.js";import{Vie}from"./chunk-zwe9vtev.js";import{lf}from"./chunk-aac4dd33.js";function t5e(){return lf()||Vie()}function kCo(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function Utn(e,o){i("tengu_remote_attach_record_lookup",{outcome:d(e),entry_point:d(o)})}
export{t5e,kCo,Utn};
