// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{kM,qne}from"./chunk-0x9x817t.js";import{Sr}from"./chunk-gbez09mv.js";function Dme(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function _ot(){let e=Sr()?.outputStyle??kM;if(e===kM)return"repl_main_thread";return Object.hasOwn(qne,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{Dme,_ot};
