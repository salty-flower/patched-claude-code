// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Nm}from"./chunk-v2tkmkax.js";import{fg}from"./chunk-jngjxeh6.js";import{Fn}from"./chunk-xsncbnja.js";import{AX}from"./chunk-z2ha67nv.js";import{cTt}from"./chunk-texg8kwc.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function qhn(e){o.register(e)}function Bpe(){if(Nm("hipaa"))return!1;if(AX())return!0;return fg()&&Fn()&&o.read()}function ikr(e){if(!cTt.includes(e))return!0;return Bpe()}
export{qhn,Bpe,ikr};
