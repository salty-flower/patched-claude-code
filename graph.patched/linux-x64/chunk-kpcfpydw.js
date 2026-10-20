// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{L}from"./chunk-z7qmen4d.js";var Cn="SendMessage",nmn="ccd_session_mgmt",Rbt=200,k1r=["type","recipient","recipient_kind","content","request_id","approve"];function mjo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function ujt(e){if(!L(e)||!mjo(e)||!k1r.some((n)=>(n in e)))return;let o={...e};for(let n of k1r)delete o[n];return o}
export{Cn,nmn,Rbt,k1r,mjo,ujt};
