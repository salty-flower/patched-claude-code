// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{l}from"./chunk-hs50vfa7.js";import{t}from"./chunk-3wz0srxw.js";import{x}from"./chunk-er6f56rj.js";import{u$e,i$r}from"./chunk-ynzbfvqw.js";import{mc,COr}from"./chunk-jfbsd9e8.js";import{$ce}from"./chunk-cze9e8qh.js";import{fwt}from"./chunk-ke9qjmxk.js";function msr(){if(!COr())return"off";try{return x("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=$ce(),{status:r,meetsLevel:n,configException:i}=i$r(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function dwe(e){let o=msr();return o==="off"?void 0:{mode:o,...s(u$e(e))}}function D0e(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function _3t(){let e=dwe("UNSPECIFIED");return{attestation:e,heldBack:D0e(e)}}function Weo(e){try{e?.(fwt,mc["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${fwt}: ${l(o)}`,{level:"error"})}}
export{msr,dwe,D0e,_3t,Weo};
