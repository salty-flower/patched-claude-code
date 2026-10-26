// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{O}from"./chunk-dz0rx1wn.js";import{ZCt}from"./chunk-cemwep0x.js";import{constants as t}from"fs";function Ec(){return t.O_RDONLY|JCe()}function JCe(){if(O()==="windows")return 0;return t.O_NOFOLLOW|t.O_NONBLOCK}var dKs=["aarch64-apple-darwin","x86_64-apple-darwin","aarch64-unknown-linux-musl","x86_64-unknown-linux-musl"];function o(r,e){let n=e==="arm64"?"aarch64":e==="x64"?"x86_64":void 0;if(n===void 0)return;switch(r){case"macos":return`${n}-apple-darwin`;case"linux":case"wsl":return`${n}-unknown-linux-musl`;case"windows":case"unknown":return}}var L$r=268435456;function N$r(){return o(O(),"arm64")}function r_t(r,e){if(r.endsWith(`-${e}`)){let n=r.slice(0,-(e.length+1));return ZCt.test(n)?n:void 0}if(r.endsWith(`-${e}.exe`)){let n=r.slice(0,-(e.length+5));return ZCt.test(n)?`${n}.exe`:void 0}return}
export{Ec,JCe,dKs,L$r,N$r,r_t};
