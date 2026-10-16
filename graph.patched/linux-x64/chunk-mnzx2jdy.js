// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{k}from"./chunk-k16gymf7.js";import{aEe,imt}from"./chunk-m7wd19ka.js";import{sEe}from"./chunk-4c6aam5v.js";import{EGt}from"./chunk-mfc50jr1.js";import{$yo,si}from"./chunk-7f1jmyrt.js";function nVr(){if(!$yo())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=sEe(),{status:r,meetsLevel:n,configException:i}=imt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function Tde(e){let o=nVr();return o==="off"?void 0:{mode:o,...s(aEe(e))}}function Aye(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function Fbn(){let e=Tde("UNSPECIFIED");return{attestation:e,heldBack:Aye(e)}}function D6o(e){try{e?.(EGt,si["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${EGt}: ${d(o)}`,{level:"error"})}}
export{nVr,Tde,Aye,Fbn,D6o};
