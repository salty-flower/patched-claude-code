// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{vx,JY}from"./chunk-na9nw575.js";import{dr}from"./chunk-qwytg6a7.js";function ise(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function Pqe(){let e=dr()?.outputStyle??vx;if(e===vx)return"repl_main_thread";return Object.hasOwn(JY,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{ise,Pqe};
