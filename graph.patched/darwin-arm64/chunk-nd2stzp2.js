// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,G}from"./chunk-38213y7h.js";class NQn{#o=!1;#e=!1;#n=!1;#t=null;#i=!1;#r=void 0;#a=void 0;#s=!1;get active(){return this.#o}get flagCli(){return this.#e}get circuitBroken(){return this.#n}get fastModeBreakerReason(){return this.#t}get fromFallback(){return this.#i}get provisionalStartupMode(){return this.#r}get envOnboardingEligible(){return this.#a}get envOnboardingShownLogged(){return this.#s}setActive(o){this.#o=o}setFlagCli(o){this.#e=o}setCircuitBroken(o){this.#n=o}setFastModeBreakerReason(o){this.#t=o}setFromFallback(o){this.#i=o}setProvisionalStartupMode(o){this.#r=o}setEnvOnboardingEligible(o){this.#a=o}setEnvOnboardingShownLogged(o){this.#s=o}reset(){this.#o=!1,this.#e=!1,this.#n=!1,this.#t=null,this.#i=!1,this.#r=void 0,this.#a=void 0,this.#s=!1}}var Eyr=new J(()=>new NQn);function WM(){return Eyr.of(G().host)}function pC(o){WM().setActive(o)}function sw(){return WM().active}function Tyt(o){return o.mode==="auto"||o.mode==="plan"&&sw()&&!o.isBypassPermissionsModeAvailable}function Jy(o){return o==="auto"||o==="plan"&&sw()}function __n(o){WM().setFlagCli(o)}function y_n(){return WM().flagCli}function Eyt(o){WM().setCircuitBroken(o)}function LKe(){return WM().circuitBroken}function S_n(o){WM().setFastModeBreakerReason(o)}function b_n(){return WM().fastModeBreakerReason}function IWt(o){WM().setFromFallback(o)}function s6(){return WM().fromFallback}function FLe(o){WM().setProvisionalStartupMode(o)}function w_n(){return WM().provisionalStartupMode}function Ayt(){return WM().envOnboardingEligible}function MKe(o){WM().setEnvOnboardingEligible(o)}function PWt(){return WM().envOnboardingShownLogged}function DWt(o){WM().setEnvOnboardingShownLogged(o)}
export{NQn,Eyr,WM,pC,sw,Tyt,Jy,__n,y_n,Eyt,LKe,S_n,b_n,IWt,s6,FLe,w_n,Ayt,MKe,PWt,DWt};
