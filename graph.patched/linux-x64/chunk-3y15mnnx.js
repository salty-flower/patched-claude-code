// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";class AQn{#o=!1;#e=!1;#n=!1;#t=null;#i=!1;#r=void 0;#a=void 0;#s=!1;get active(){return this.#o}get flagCli(){return this.#e}get circuitBroken(){return this.#n}get fastModeBreakerReason(){return this.#t}get fromFallback(){return this.#i}get provisionalStartupMode(){return this.#r}get envOnboardingEligible(){return this.#a}get envOnboardingShownLogged(){return this.#s}setActive(o){this.#o=o}setFlagCli(o){this.#e=o}setCircuitBroken(o){this.#n=o}setFastModeBreakerReason(o){this.#t=o}setFromFallback(o){this.#i=o}setProvisionalStartupMode(o){this.#r=o}setEnvOnboardingEligible(o){this.#a=o}setEnvOnboardingShownLogged(o){this.#s=o}reset(){this.#o=!1,this.#e=!1,this.#n=!1,this.#t=null,this.#i=!1,this.#r=void 0,this.#a=void 0,this.#s=!1}}var h_r=new J(()=>new AQn);function jM(){return h_r.of(W().host)}function dv(o){jM().setActive(o)}function sH(){return jM().active}function b_t(o){return o.mode==="auto"||o.mode==="plan"&&sH()&&!o.isBypassPermissionsModeAvailable}function J_(o){return o==="auto"||o==="plan"&&sH()}function myn(o){jM().setFlagCli(o)}function gyn(){return jM().flagCli}function S_t(o){jM().setCircuitBroken(o)}function P3e(){return jM().circuitBroken}function hyn(o){jM().setFastModeBreakerReason(o)}function yyn(){return jM().fastModeBreakerReason}function xGt(o){jM().setFromFallback(o)}function r2(){return jM().fromFallback}function M$e(o){jM().setProvisionalStartupMode(o)}function _yn(){return jM().provisionalStartupMode}function H_t(){return jM().envOnboardingEligible}function D3e(o){jM().setEnvOnboardingEligible(o)}function LGt(){return jM().envOnboardingShownLogged}function PGt(o){jM().setEnvOnboardingShownLogged(o)}
export{AQn,h_r,jM,dv,sH,b_t,J_,myn,gyn,S_t,P3e,hyn,yyn,xGt,r2,M$e,_yn,H_t,D3e,LGt,PGt};
