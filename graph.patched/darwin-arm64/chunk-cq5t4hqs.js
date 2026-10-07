// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{l}from"./chunk-fqsygynq.js";import{t}from"./chunk-f8eqwxpt.js";import{k}from"./chunk-s46qgfx7.js";import{uHe,WKt}from"./chunk-00ftxe0n.js";import{tKr,Ui}from"./chunk-2s6nnhcv.js";import{age}from"./chunk-4fmpekzs.js";import{xOt}from"./chunk-e2zcy4qp.js";function yCr(){if(!tKr())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=age(),{status:r,meetsLevel:n,configException:i}=WKt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function oTe(e){let o=yCr();return o==="off"?void 0:{mode:o,...s(uHe(e))}}function PFe(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function snn(){let e=oTe("UNSPECIFIED");return{attestation:e,heldBack:PFe(e)}}function Dvo(e){try{e?.(xOt,Ui["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${xOt}: ${l(o)}`,{level:"error"})}}
export{yCr,oTe,PFe,snn,Dvo};
