// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l}from"./chunk-tnh13g2g.js";import{t}from"./chunk-b5feae42.js";import{C}from"./chunk-gcyvvtkw.js";import{vDe,z9t}from"./chunk-r6e659kz.js";import{d7r,Vi}from"./chunk-zwe9vtev.js";import{Jhe}from"./chunk-y04vywab.js";import{cDt}from"./chunk-2czda3wy.js";function ZPr(){if(!d7r())return"off";try{return C("tengu_vast_tulip",!1)===!0?"enforce":"observe"}catch{return t("tool host attestation: reading tengu_vast_tulip threw; observing",{level:"warn"}),"observe"}}function s(e){let o=Jhe(),{status:r,meetsLevel:n,configException:i}=z9t(e,o,{isCloudWorker:!1});return{status:r,verdict:!o.enforce?"not_policed":n?"pass":i?"config_exception":"below_floor"}}function pxe(e){let o=ZPr();return o==="off"?void 0:{mode:o,...s(vDe(e))}}function B1e(e){return e?.mode==="enforce"&&e.verdict==="below_floor"}function din(){let e=pxe("UNSPECIFIED");return{attestation:e,heldBack:B1e(e)}}function xIo(e){try{e?.(cDt,Vi["repository_trust.served_calls.unattested"])}catch(o){t(`[remote-tools] the notice sink threw on ${cDt}: ${l(o)}`,{level:"error"})}}
export{ZPr,pxe,B1e,din,xIo};
