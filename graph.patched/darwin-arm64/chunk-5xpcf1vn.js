// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{k}from"./chunk-bvn0epzr.js";import{Pke,$ht}from"./chunk-sdewbs7c.js";import{xke}from"./chunk-bdgd86dw.js";import{lko,Ci,Znn}from"./chunk-d7eqjts1.js";function g8r(){if(!lko())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=xke(),{status:r,meetsLevel:n,configException:i}=$ht(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function lue(e){let o=g8r();return o==="off"?void 0:{mode:o,...s(Pke(e))}}function Q_e(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function pCn(){let e=lue("UNSPECIFIED");return{attestation:e,heldBack:Q_e(e)}}function Ges(e){try{e?.(Znn,Ci["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${Znn}: ${d(o)}`,{level:"error"})}}
export{g8r,lue,Q_e,pCn,Ges};
