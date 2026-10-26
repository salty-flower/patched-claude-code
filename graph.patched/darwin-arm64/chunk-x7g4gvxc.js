// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{xns}from"./chunk-ersar6wn.js";import{Da}from"./chunk-ce3zw0qt.js";function voo(e){if(e)Da.terminalFocusGainedAt=Date.now();if(!e&&Da.terminalFocus==="blurred")return;Da.terminalFocus=e?"focused":"blurred",xns(e),Da.terminalFocusChanged.emit()}function MUe(){return Da.terminalFocus!=="blurred"}function tte(){return Da.terminalFocus}function Cms(){return Da.terminalFocusGainedAt}function JPe(e){return Da.terminalFocusChanged.subscribe(e)}
export{voo,MUe,tte,Cms,JPe};
