// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fdatg9ax.js";import{t}from"./chunk-gvn18sr5.js";import{T}from"./chunk-m0sj7y8g.js";import{rHe,C4t}from"./chunk-z9exfcre.js";import{QKr,Ui}from"./chunk-0fybab08.js";import{tge}from"./chunk-hm226kaq.js";import{fOt}from"./chunk-rncbay9n.js";function REr(){if(!QKr())return"off";try{return T("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=tge(),{status:r,meetsLevel:n,configException:i}=C4t(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function JAe(e){let o=REr();return o==="off"?void 0:{mode:o,...s(rHe(e))}}function b$e(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function Mtn(){let e=JAe("UNSPECIFIED");return{attestation:e,heldBack:b$e(e)}}function Fvo(e){try{e?.(fOt,Ui["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${fOt}: ${l(o)}`,{level:"error"})}}
export{REr,JAe,b$e,Mtn,Fvo};
