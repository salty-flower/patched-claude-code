// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";class s8n{#o=!1;#e=!1;#n=!1;#t=!1;#i=void 0;#r=!1;get active(){return this.#o}get flagCli(){return this.#e}get circuitBroken(){return this.#n}get fromFallback(){return this.#t}get envOnboardingEligible(){return this.#i}get envOnboardingShownLogged(){return this.#r}setActive(o){this.#o=o}setFlagCli(o){this.#e=o}setCircuitBroken(o){this.#n=o}setFromFallback(o){this.#t=o}setEnvOnboardingEligible(o){this.#i=o}setEnvOnboardingShownLogged(o){this.#r=o}reset(){this.#o=!1,this.#e=!1,this.#n=!1,this.#t=!1,this.#i=void 0,this.#r=!1}}var bur=new K(()=>new s8n);function aq(){return bur.of(z().host)}function tE(o){aq().setActive(o)}function bv(){return aq().active}function Lmt(o){return o.mode==="auto"||o.mode==="plan"&&bv()&&!o.isBypassPermissionsModeAvailable}function zk(o){return o==="auto"||o==="plan"&&bv()}function xdn(o){aq().setFlagCli(o)}function Idn(){return aq().flagCli}function Dmt(o){aq().setCircuitBroken(o)}function bVe(){return aq().circuitBroken}function Rdn(o){aq().setFromFallback(o)}function dU(){return aq().fromFallback}function Pmt(){return aq().envOnboardingEligible}function _Ve(o){aq().setEnvOnboardingEligible(o)}function SBt(){return aq().envOnboardingShownLogged}function wBt(o){aq().setEnvOnboardingShownLogged(o)}
export{s8n,bur,aq,tE,bv,Lmt,zk,xdn,Idn,Dmt,bVe,Rdn,dU,Pmt,_Ve,SBt,wBt};
