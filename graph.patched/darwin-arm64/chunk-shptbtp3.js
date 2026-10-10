// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import{c}from"./chunk-gsnbskq4.js";import"./chunk-gyf58rwf.js";import"./chunk-nqc6v990.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import{ht}from"./chunk-r2vtj1kh.js";import{sr}from"./chunk-nnctmda1.js";var e="claudecode/editResult",l="1";function i(o,t){return o===ht&&sr(t)&&t[e]===l}async function m(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return c(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}export{i as asksForEditResult,m as withEditResult};
