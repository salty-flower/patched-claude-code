// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{g0,x5}from"./chunk-sfn1dbxq.js";import{Qn}from"./chunk-x0dc37w9.js";function lte(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function mWe(){let e=Qn()?.outputStyle??g0;if(e===g0)return"repl_main_thread";return Object.hasOwn(x5,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{lte,mWe};
