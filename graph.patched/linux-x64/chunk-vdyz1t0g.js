// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{L}from"./chunk-m55q213p.js";function IMa(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",a6t="Per your organization's policy, some features are limited",C3r="HIPAA configured",o=new Set(["hipaa","zdr"]);function hJn(n){return o.has(n)||!1}function gJn(n){let e=L(n),i=e.filter(hJn);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function gye(n){return L(n).filter((e)=>a.has(e))}
export{IMa,a6t,C3r,hJn,gJn,gye};
