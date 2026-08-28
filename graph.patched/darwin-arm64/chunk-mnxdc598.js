// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";class d8n{#o=!1;#e=!1;#n=!1;#t=!1;#i=void 0;#r=!1;get active(){return this.#o}get flagCli(){return this.#e}get circuitBroken(){return this.#n}get fromFallback(){return this.#t}get envOnboardingEligible(){return this.#i}get envOnboardingShownLogged(){return this.#r}setActive(o){this.#o=o}setFlagCli(o){this.#e=o}setCircuitBroken(o){this.#n=o}setFromFallback(o){this.#t=o}setEnvOnboardingEligible(o){this.#i=o}setEnvOnboardingShownLogged(o){this.#r=o}reset(){this.#o=!1,this.#e=!1,this.#n=!1,this.#t=!1,this.#i=void 0,this.#r=!1}}var Aur=new K(()=>new d8n);function uz(){return Aur.of(W().host)}function tT(o){uz().setActive(o)}function bS(){return uz().active}function Hmt(o){return o.mode==="auto"||o.mode==="plan"&&bS()&&!o.isBypassPermissionsModeAvailable}function qC(o){return o==="auto"||o==="plan"&&bS()}function Pdn(o){uz().setFlagCli(o)}function Odn(){return uz().flagCli}function Dmt(o){uz().setCircuitBroken(o)}function bqe(){return uz().circuitBroken}function Hdn(o){uz().setFromFallback(o)}function mB(){return uz().fromFallback}function Lmt(){return uz().envOnboardingEligible}function Sqe(o){uz().setEnvOnboardingEligible(o)}function w2t(){return uz().envOnboardingShownLogged}function T2t(o){uz().setEnvOnboardingShownLogged(o)}
export{d8n,Aur,uz,tT,bS,Hmt,qC,Pdn,Odn,Dmt,bqe,Hdn,mB,Lmt,Sqe,w2t,T2t};
