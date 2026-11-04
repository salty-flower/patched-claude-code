// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{lt}from"./chunk-6qcfjjmw.js";import{a}from"./chunk-87y2sp93.js";import{Vt}from"./chunk-bntxxajt.js";var e="claudecode/editResult",l="1";function QAo(o,t){return o===lt&&Vt(t)&&t[e]===l}async function ZAo(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return a(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{QAo,ZAo};
