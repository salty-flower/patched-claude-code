// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{L}from"./chunk-mfn0g94q.js";var nr="SendMessage",R7t="ccd_session_mgmt",Kit=200,dSr=["type","recipient","recipient_kind","content","request_id","approve"];function xfo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function fxt(e){if(!L(e)||!xfo(e)||!dSr.some((n)=>(n in e)))return;let o={...e};for(let n of dSr)delete o[n];return o}
export{nr,R7t,Kit,dSr,xfo,fxt};
