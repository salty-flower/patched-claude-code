// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{k}from"./chunk-27xjmczp.js";import{AAe,Zwt}from"./chunk-ndznw7va.js";import{TAe}from"./chunk-q95yt0s4.js";import{W0o,vi,tdn}from"./chunk-0s3jtbsx.js";function woo(){if(!W0o())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=TAe(),{status:r,meetsLevel:n,configException:i}=Zwt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function Wfe(e){let o=woo();return o==="off"?void 0:{mode:o,...s(AAe(e))}}function Ywe(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function POn(){let e=Wfe("UNSPECIFIED");return{attestation:e,heldBack:Ywe(e)}}function Ems(e){try{e?.(tdn,vi["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${tdn}: ${d(o)}`,{level:"error"})}}
export{woo,Wfe,Ywe,POn,Ems};
