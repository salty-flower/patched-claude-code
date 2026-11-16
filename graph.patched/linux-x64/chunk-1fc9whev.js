// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{t}from"./chunk-ray9kegj.js";import{R}from"./chunk-xezjycv8.js";import{pde,QN}from"./chunk-e9s6zz9d.js";var e={disabled:"The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",missing:"The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."};function Yvr(n){return n?.seclogon==="disabled"||n?.seclogon==="missing"?e[n.seclogon]:void 0}async function Xvr(){if(R()!=="windows")return;let n=await pde({srtWin:QN()}).catch((o)=>{t(`[sandbox] could not read the sandbox status: ${d(o)}`,{level:"error"});return});return Yvr(n?.user)}
export{Yvr,Xvr};
