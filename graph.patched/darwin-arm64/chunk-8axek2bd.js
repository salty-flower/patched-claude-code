// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-wkh5syvr.js";import{t}from"./chunk-bnfhb7sj.js";import{k}from"./chunk-1901fdh6.js";import{cve,tmt}from"./chunk-fxava8k6.js";import{lve}from"./chunk-x0gv55zh.js";import{DGt}from"./chunk-x9svnsqx.js";import{f_o,si}from"./chunk-dvmwj6gj.js";function $6r(){if(!f_o())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=lve(),{status:r,meetsLevel:n,configException:i}=tmt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function Ode(e){let o=$6r();return o==="off"?void 0:{mode:o,...s(cve(e))}}function Oye(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function dbn(){let e=Ode("UNSPECIFIED");return{attestation:e,heldBack:Oye(e)}}function v5o(e){try{e?.(DGt,si["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${DGt}: ${d(o)}`,{level:"error"})}}
export{$6r,Ode,Oye,dbn,v5o};
