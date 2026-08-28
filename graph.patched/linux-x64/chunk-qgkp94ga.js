// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{xwn}from"./chunk-2vv5hpw3.js";import{Si}from"./chunk-qb1h8t4n.js";function Pcn(e){if(e)Si.terminalFocusGainedAt=Date.now();Si.terminalFocus=e?"focused":"blurred",xwn(e),Si.terminalFocusChanged.emit()}function XZ(){return Si.terminalFocus!=="blurred"}function l1(){return Si.terminalFocus}function uVn(){return Si.terminalFocusGainedAt}function SK(e){return Si.terminalFocusChanged.subscribe(e)}
export{Pcn,XZ,l1,uVn,SK};
