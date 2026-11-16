// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";import{R}from"./chunk-shjgbbk7.js";import{wde,nF}from"./chunk-rsqzfbnr.js";var e={disabled:"The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",missing:"The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."};function Avr(n){return n?.seclogon==="disabled"||n?.seclogon==="missing"?e[n.seclogon]:void 0}async function Rvr(){if(R()!=="windows")return;let n=await wde({srtWin:nF()}).catch((o)=>{t(`[sandbox] could not read the sandbox status: ${d(o)}`,{level:"error"});return});return Avr(n?.user)}
export{Avr,Rvr};
