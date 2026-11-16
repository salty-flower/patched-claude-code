// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{hL,yle}from"./chunk-wqb2b4v0.js";import{Pr}from"./chunk-x4r54n7x.js";function zbe(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function Gmt(){let e=Pr()?.outputStyle??hL;if(e===hL)return"repl_main_thread";return Object.hasOwn(yle,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{zbe,Gmt};
