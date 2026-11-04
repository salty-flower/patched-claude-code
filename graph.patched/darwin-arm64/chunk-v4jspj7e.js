// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{p}from"./chunk-h58p4vvs.js";import{l}from"./chunk-hm8vbfs0.js";import{Sh}from"./chunk-s10xkfhm.js";import{b0e}from"./chunk-8nfed8kj.js";function YSt(){return Sh()||b0e()}function xWs(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function Pzn(e,o){l("tengu_remote_attach_record_lookup",{outcome:p(e),entry_point:p(o)})}
export{YSt,xWs,Pzn};
