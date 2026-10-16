// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{L}from"./chunk-d1aw40vc.js";var Rn="SendMessage",$dn="ccd_session_mgmt",zht=200,pLr=["type","recipient","recipient_kind","content","request_id","approve"];function zDo(e){return"to"in e&&(("message"in e)||("notify_when_idle"in e))}function oUt(e){if(!L(e)||!zDo(e)||!pLr.some((n)=>(n in e)))return;let o={...e};for(let n of pLr)delete o[n];return o}
export{Rn,$dn,zht,pLr,zDo,oUt};
