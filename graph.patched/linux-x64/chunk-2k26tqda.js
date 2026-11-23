// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{P}from"./chunk-8txsa0tf.js";var xn="SendMessage",kJn="ccd_session_mgmt",f6t=200,yzo=["type","recipient","recipient_kind","content","request_id","approve"];function gti(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function aSn(e){if(!P(e)||!gti(e)||!yzo.some((n)=>(n in e)))return;let o={...e};for(let n of yzo)delete o[n];return o}
export{xn,kJn,f6t,yzo,gti,aSn};
