// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ju}from"./chunk-hv4n1akt.js";var d$t="usage limit",qdn=` (after ${d$t})`;function vLr(e,t=!1){let r=Ju(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=vLr(e);return t===void 0?d$t:`${d$t} ${t}`}function uNo(e){return`Paused \xB7 ${n(e)}`}function ELr(e){return[["paused",n(e)],["paused",d$t],["paused"]]}
export{d$t,qdn,vLr,uNo,ELr};
