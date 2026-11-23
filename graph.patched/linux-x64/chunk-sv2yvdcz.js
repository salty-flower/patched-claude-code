// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{f}from"./chunk-zt4gdxqw.js";import{l}from"./chunk-hs29jdk6.js";import{gg}from"./chunk-ce810mk8.js";import{BUe}from"./chunk-tgxztf9f.js";function UIt(){return gg()||BUe()}function syi(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function Yor(e,o){l("tengu_remote_attach_record_lookup",{outcome:f(e),entry_point:f(o)})}
export{UIt,syi,Yor};
