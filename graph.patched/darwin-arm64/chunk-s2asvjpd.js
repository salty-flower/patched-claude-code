// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{L}from"./chunk-z7qmen4d.js";var An="SendMessage",hmn="ccd_session_mgmt",NSt=200,VBr=["type","recipient","recipient_kind","content","request_id","approve"];function Ujo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function Ejt(e){if(!L(e)||!Ujo(e)||!VBr.some((n)=>(n in e)))return;let o={...e};for(let n of VBr)delete o[n];return o}
export{An,hmn,NSt,VBr,Ujo,Ejt};
