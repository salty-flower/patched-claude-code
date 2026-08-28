// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{LPc as a,fPc as t}from"./_714.js";import{fbd as o,lbd as s}from"./_801.js";import{Exd as u}from"./_839.js";import{constants as i}from"fs";function m(){return i.O_RDONLY|d()}function d(){if(o()==="windows")return 0;return i.O_NOFOLLOW|i.O_NONBLOCK}function f(r,e){let n=e==="arm64"?"aarch64":e==="x64"?"x86_64":void 0;if(n===void 0)return;switch(r){case"macos":return`${n}-apple-darwin`;case"linux":case"wsl":return`${n}-unknown-linux-musl`;case"windows":case"unknown":return}}function g(){return f(o(),"arm64")}function _(r,e){if(r.endsWith(`-${e}`)){let n=r.slice(0,-(e.length+1));return t.test(n)?n:void 0}if(r.endsWith(`-${e}.exe`)){let n=r.slice(0,-(e.length+5));return t.test(n)?`${n}.exe`:void 0}return}var w;var l=u(()=>{s();a();w=["aarch64-apple-darwin","x86_64-apple-darwin","aarch64-unknown-linux-musl","x86_64-unknown-linux-musl"]});
export{m as S1b,d as T1b,w as U1b,g as V1b,_ as W1b,l as X1b};
