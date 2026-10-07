// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{D}from"./chunk-n6jrzhpg.js";function Pis(n){switch(n){case"hipaa":return"HIPAA";case"zdr":return"ZDR (Zero Data Retention)";default:return t(`Unknown compliance_taint '${n}' from policyLimits`,{level:"warn"}),r}}var r="Organization policy",ert="Per your organization's policy, some features are limited",MOn="HIPAA configured",o=new Set(["hipaa","zdr"]);function J5t(n){return o.has(n)||!1}function Q5t(n){let e=D(n),i=e.filter(J5t);if(i.length===e.length)return i;return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`,{level:"warn"}),[...i,r]}var a=new Set(["hipaa"]);function ahe(n){return D(n).filter((e)=>a.has(e))}
export{Pis,ert,MOn,J5t,Q5t,ahe};
