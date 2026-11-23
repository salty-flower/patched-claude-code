// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fL,cle}from"./chunk-zaxe68t4.js";import{Pr}from"./chunk-4rkc6f3s.js";function NSe(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function Fmt(){let e=Pr()?.outputStyle??fL;if(e===fL)return"repl_main_thread";return Object.hasOwn(cle,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{NSe,Fmt};
