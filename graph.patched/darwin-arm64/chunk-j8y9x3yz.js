// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{L}from"./chunk-zqmjz0gj.js";function bMa(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",_qt="Per your organization's policy, some features are limited",QKr="HIPAA configured",o=new Set(["hipaa","zdr"]);function FJn(n){return o.has(n)||!1}function $Jn(n){let e=L(n),i=e.filter(FJn);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function vye(n){return L(n).filter((e)=>a.has(e))}
export{bMa,_qt,QKr,FJn,$Jn,vye};
