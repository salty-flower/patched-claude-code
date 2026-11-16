// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{f}from"./chunk-v8gz5b0e.js";import{l}from"./chunk-mfxenhbr.js";import{gg}from"./chunk-mnxqh9yf.js";import{z$e}from"./chunk-pkv3k7g0.js";function WOt(){return gg()||z$e()}function xyi(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function usr(e,o){l("tengu_remote_attach_record_lookup",{outcome:f(e),entry_point:f(o)})}
export{WOt,xyi,usr};
