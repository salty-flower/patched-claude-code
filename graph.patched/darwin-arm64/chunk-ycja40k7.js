// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{l}from"./chunk-e666gr8q.js";import{dt}from"./chunk-1jaxs49d.js";import{Gn}from"./chunk-rjxv46at.js";var e="claudecode/editResult",u="1";function QBr(o,t){return o===dt&&Gn(t)&&t[e]===u}async function ZBr(o,t){if(o.isError===!0||t.subagentFrameResult===void 0)return o;try{if(await t.subagentFrameResultHolds?.()===!1)return o}catch(r){return l(r),o}return{...o,_meta:{...o._meta,[e]:t.subagentFrameResult}}}
export{QBr,ZBr};
