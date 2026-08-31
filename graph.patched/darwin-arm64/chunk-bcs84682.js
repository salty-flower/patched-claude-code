// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ue}from"./chunk-5b2g0bc6.js";import{J,G}from"./chunk-38213y7h.js";class n{taints=[];changed=Ue();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((e)=>this.taints.includes(e)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new J(()=>new n);function r(){return o.of(G().host)}function qrr(i){r().replaceTaints(i)}function _h(i){return r().taints.includes(i)}function uR(){return r().taints}function Rpe(i){return r().changed.subscribe(i)}function Grr(i){r().registerVerdict(i)}function MAe(i){return r().verdict?.isPolicyAllowed(i)??!1}function NAe(i){let e=r().verdict;if(!e)return"unregistered";return e.policyDenyKind(i)}function zrr(i,e,t){return r().verdict?.policyDeniedReason(i,e,t)??null}
export{qrr,_h,uR,Rpe,Grr,MAe,NAe,zrr};
