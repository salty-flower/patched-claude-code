// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sx,j9}from"./chunk-rncrmfyt.js";import{dr}from"./chunk-merbp8kx.js";function Zoe(t,e){if(e)return t?`agent:builtin:${t}`:"agent:default";return t?`agent:custom:${t}`:"agent:custom"}function v4e(){let e=dr()?.outputStyle??Sx;if(e===Sx)return"repl_main_thread";return Object.hasOwn(j9,e)?`repl_main_thread:outputStyle:${e}`:"repl_main_thread:outputStyle:custom"}
export{Zoe,v4e};
