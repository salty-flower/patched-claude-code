// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{d}from"./chunk-sktwb66b.js";import{t}from"./chunk-5nh49npx.js";import{P}from"./chunk-drmqng8t.js";import{qre,VD}from"./chunk-ttn8czdr.js";var e={disabled:"The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",missing:"The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."};function Krr(n){return n?.seclogon==="disabled"||n?.seclogon==="missing"?e[n.seclogon]:void 0}async function qrr(){if(P()!=="windows")return;let n=await qre({srtWin:VD()}).catch((o)=>{t(`[sandbox] could not read the sandbox status: ${d(o)}`,{level:"error"});return});return Krr(n?.user)}
export{Krr,qrr};
