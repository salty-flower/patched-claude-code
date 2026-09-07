// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{$e}from"./chunk-mnk1rjxv.js";import{G,U}from"./chunk-bj7g1p32.js";class n{taints=[];changed=$e();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((r)=>this.taints.includes(r)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new G(()=>new n);function e(){return o.of(U().host)}function frr(i){e().replaceTaints(i)}function Wh(i){return e().taints.includes(i)}function tI(){return e().taints}function $ke(i){return e().changed.subscribe(i)}function prr(i){e().registerVerdict(i)}function BO(i){return e().verdict?.isPolicyAllowed(i)??!1}function Mke(i){let r=e().verdict;if(!r)return"unregistered";return r.policyDenyKind(i)}function Oke(i,r,t){return e().verdict?.policyDeniedReason(i,r,t)??null}function mrr(){return e().verdict?.complianceTaintsSettled()??!1}
export{frr,Wh,tI,$ke,prr,BO,Mke,Oke,mrr};
