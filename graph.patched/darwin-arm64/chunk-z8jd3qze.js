// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{D}from"./chunk-6rnejvk7.js";var Mn="SendMessage",bwn="ccd_session_mgmt",Ykt=200,I4r=["type","recipient","recipient_kind","content","request_id","approve"];function C8o(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function XVt(e){if(!D(e)||!C8o(e)||!I4r.some((n)=>(n in e)))return;let o={...e};for(let n of I4r)delete o[n];return o}
export{Mn,bwn,Ykt,I4r,C8o,XVt};
