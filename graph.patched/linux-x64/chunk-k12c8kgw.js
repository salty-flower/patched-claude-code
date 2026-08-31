// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{cve}from"./chunk-000exgr8.js";import{P}from"./chunk-edxkqkcr.js";import{constants as t}from"fs";function ea(){return t.O_RDONLY|C5e()}function C5e(){if(P()==="windows")return 0;return t.O_NOFOLLOW|t.O_NONBLOCK}var oXn=["aarch64-apple-darwin","x86_64-apple-darwin","aarch64-unknown-linux-musl","x86_64-unknown-linux-musl"];function o(r,e){let n=e==="arm64"?"aarch64":e==="x64"?"x86_64":void 0;if(n===void 0)return;switch(r){case"macos":return`${n}-apple-darwin`;case"linux":case"wsl":return`${n}-unknown-linux-musl`;case"windows":case"unknown":return}}var iXn=268435456;function sXn(){return o(P(),"x64")}function I5e(r,e){if(r.endsWith(`-${e}`)){let n=r.slice(0,-(e.length+1));return cve.test(n)?n:void 0}if(r.endsWith(`-${e}.exe`)){let n=r.slice(0,-(e.length+5));return cve.test(n)?`${n}.exe`:void 0}return}
export{ea,C5e,oXn,iXn,sXn,I5e};
