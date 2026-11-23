// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{P}from"./chunk-8txsa0tf.js";var xn="SendMessage",VJn="ccd_session_mgmt",Eqt=200,zGo=["type","recipient","recipient_kind","content","request_id","approve"];function Kti(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function Ebn(e){if(!P(e)||!Kti(e)||!zGo.some((n)=>(n in e)))return;let o={...e};for(let n of zGo)delete o[n];return o}
export{xn,VJn,Eqt,zGo,Kti,Ebn};
