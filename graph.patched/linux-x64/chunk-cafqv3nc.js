// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{k}from"./chunk-7p6jp6kj.js";import{Cke,zht}from"./chunk-hs9r6q26.js";import{Ake}from"./chunk-vm7y8s48.js";import{HEo,Ti,Unn}from"./chunk-2gh4h0fv.js";function h8r(){if(!HEo())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=Ake(),{status:r,meetsLevel:n,configException:i}=zht(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function tue(e){let o=h8r();return o==="off"?void 0:{mode:o,...s(Cke(e))}}function X_e(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function dTn(){let e=tue("UNSPECIFIED");return{attestation:e,heldBack:X_e(e)}}function Hes(e){try{e?.(Unn,Ti["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${Unn}: ${d(o)}`,{level:"error"})}}
export{h8r,tue,X_e,dTn,Hes};
