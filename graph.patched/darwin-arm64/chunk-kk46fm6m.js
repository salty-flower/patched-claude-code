// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{P}from"./chunk-drmqng8t.js";import{f$t}from"./chunk-h21zbzen.js";import{constants as t}from"fs";function ou(){return t.O_RDONLY|a4()}function a4(){if(P()==="windows")return 0;return t.O_NOFOLLOW|t.O_NONBLOCK}var NRi=["aarch64-apple-darwin","x86_64-apple-darwin","aarch64-unknown-linux-musl","x86_64-unknown-linux-musl"];function o(r,e){let n=e==="arm64"?"aarch64":e==="x64"?"x86_64":void 0;if(n===void 0)return;switch(r){case"macos":return`${n}-apple-darwin`;case"linux":case"wsl":return`${n}-unknown-linux-musl`;case"windows":case"unknown":return}}var Kso=268435456;function qso(){return o(P(),"arm64")}function dIt(r,e){if(r.endsWith(`-${e}`)){let n=r.slice(0,-(e.length+1));return f$t.test(n)?n:void 0}if(r.endsWith(`-${e}.exe`)){let n=r.slice(0,-(e.length+5));return f$t.test(n)?`${n}.exe`:void 0}return}
export{ou,a4,NRi,Kso,qso,dIt};
