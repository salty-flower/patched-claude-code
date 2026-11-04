// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{L}from"./chunk-v07jm9dp.js";function aKi(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",yFt="Per your organization's policy, some features are limited",NPr="HIPAA configured",o=new Set(["hipaa","zdr"]);function ZUn(n){return o.has(n)||!1}function e1n(n){let e=L(n),i=e.filter(ZUn);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function ipe(n){return L(n).filter((e)=>a.has(e))}
export{aKi,yFt,NPr,ZUn,e1n,ipe};
