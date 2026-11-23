// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dt}from"./chunk-gfn3gxth.js";import{a}from"./chunk-8c4ttmk8.js";import{Qe}from"./chunk-vbyq84t6.js";var e="claudecode/editResult",l="1";function G5o(o,t){return o===dt&&Qe(t)&&t[e]===l}async function z5o(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return a(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{G5o,z5o};
