// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{L}from"./chunk-mfn0g94q.js";var nr="SendMessage",pJt="ccd_session_mgmt",Fit=200,W_r=["type","recipient","recipient_kind","content","request_id","approve"];function tfo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function nxt(e){if(!L(e)||!tfo(e)||!W_r.some((n)=>(n in e)))return;let o={...e};for(let n of W_r)delete o[n];return o}
export{nr,pJt,Fit,W_r,tfo,nxt};
