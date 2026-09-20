// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{nc}from"./chunk-d6f1t6sb.js";var Yet="usage limit",aRt=` (after ${Yet})`;function VIn(e,t=!1){let r=nc(e,t);if(r===void 0)return;return/^\d/.test(r)?`resets at ${r}`:`resets ${r}`}function n(e){let t=VIn(e);return t===void 0?Yet:`${Yet} ${t}`}function mmr(e){return`Paused \xB7 ${n(e)}`}function gmr(e){return[["paused",n(e)],["paused",Yet],["paused"]]}
export{Yet,aRt,VIn,mmr,gmr};
