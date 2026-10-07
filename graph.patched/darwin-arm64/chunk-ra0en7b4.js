// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{DI,o3}from"./chunk-y0b3kvx1.js";import{Xn}from"./chunk-861a7whf.js";function $J(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function Q$e(){let e=Xn()?.outputStyle??DI;if(e===DI)return"repl_main_thread";return Object.hasOwn(o3,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{$J,Q$e};
