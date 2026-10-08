// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xSo}from"./chunk-g79wjybr.js";import{sa}from"./chunk-cej8xfp1.js";function oIr(e){if(e)sa.terminalFocusGainedAt=Date.now();if(!e&&sa.terminalFocus==="blurred")return;sa.terminalFocus=e?"focused":"blurred",xSo(e),sa.terminalFocusChanged.emit()}function axe(){return sa.terminalFocus!=="blurred"}function v8(){return sa.terminalFocus}function $Io(){return sa.terminalFocusGainedAt}function sSe(e){return sa.terminalFocusChanged.subscribe(e)}
export{oIr,axe,v8,$Io,sSe};
