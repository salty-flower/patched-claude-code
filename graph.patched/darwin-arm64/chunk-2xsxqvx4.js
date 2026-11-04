// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{D}from"./chunk-zhh3qac9.js";var Tn="SendMessage",i1n="ccd_session_mgmt",CFt=200,ewo=["type","recipient","recipient_kind","content","request_id","approve"];function Hxs(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function hon(e){if(!D(e)||!Hxs(e)||!ewo.some((n)=>(n in e)))return;let o={...e};for(let n of ewo)delete o[n];return o}
export{Tn,i1n,CFt,ewo,Hxs,hon};
