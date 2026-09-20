// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{BZn}from"./chunk-txfrkyzp.js";import{yi}from"./chunk-8r7kydsp.js";function Kkn(e){if(e)yi.terminalFocusGainedAt=Date.now();if(!e&&yi.terminalFocus==="blurred")return;yi.terminalFocus=e?"focused":"blurred",BZn(e),yi.terminalFocusChanged.emit()}function Pae(){return yi.terminalFocus!=="blurred"}function OM(){return yi.terminalFocus}function $lr(){return yi.terminalFocusGainedAt}function o3(e){return yi.terminalFocusChanged.subscribe(e)}
export{Kkn,Pae,OM,$lr,o3};
