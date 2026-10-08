// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-5g6j8x8p.js";import{t}from"./chunk-p46wpkfz.js";import{T}from"./chunk-cxjvwxsa.js";import{m0e,x5t}from"./chunk-factn9sc.js";import{fXr,qi}from"./chunk-aqh2c7wz.js";import{Ghe}from"./chunk-hq9p3vge.js";import{n0t}from"./chunk-t6kckq7k.js";function JPr(){if(!fXr())return"off";try{return T("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=Ghe(),{status:r,meetsLevel:n,configException:i}=x5t(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function oxe(e){let o=JPr();return o==="off"?void 0:{mode:o,...s(m0e(e))}}function $Ue(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function ain(){let e=oxe("UNSPECIFIED");return{attestation:e,heldBack:$Ue(e)}}function wIo(e){try{e?.(n0t,qi["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${n0t}: ${l(o)}`,{level:"error"})}}
export{JPr,oxe,$Ue,ain,wIo};
