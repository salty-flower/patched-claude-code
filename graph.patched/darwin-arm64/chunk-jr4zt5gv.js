// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{l}from"./chunk-886tf6ja.js";import{t}from"./chunk-gyf58rwf.js";import{k}from"./chunk-bk5ct2gw.js";import{yFe,qJt}from"./chunk-b51chbpg.js";import{_Se}from"./chunk-bw56p3n4.js";import{F$t}from"./chunk-nbvdgwj8.js";import{Dno,Ni}from"./chunk-n3ykh62m.js";function QLr(){if(!Dno())return"off";try{return k("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=_Se(),{status:r,meetsLevel:n,configException:i}=qJt(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function zIe(e){let o=QLr();return o==="off"?void 0:{mode:o,...s(yFe(e))}}function Fje(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function Nun(){let e=zIe("UNSPECIFIED");return{attestation:e,heldBack:Fje(e)}}function D$o(e){try{e?.(F$t,Ni["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${F$t}: ${l(o)}`,{level:"error"})}}
export{QLr,zIe,Fje,Nun,D$o};
