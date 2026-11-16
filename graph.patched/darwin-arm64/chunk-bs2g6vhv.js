// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dt}from"./chunk-42sx5v11.js";import{a}from"./chunk-mddke2ke.js";import{Qe}from"./chunk-cy76pm9m.js";var e="claudecode/editResult",l="1";function L9o(o,t){return o===dt&&Qe(t)&&t[e]===l}async function H9o(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return a(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{L9o,H9o};
