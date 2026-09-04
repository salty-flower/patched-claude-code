// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Be}from"./chunk-h4q6j5r2.js";import{z,q}from"./chunk-yhfssb7x.js";class n{taints=[];changed=Be();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((r)=>this.taints.includes(r)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new z(()=>new n);function e(){return o.of(q().host)}function uur(i){e().replaceTaints(i)}function xg(i){return e().taints.includes(i)}function $x(){return e().taints}function Rke(i){return e().changed.subscribe(i)}function dur(i){e().registerVerdict(i)}function SBe(i){return e().verdict?.isPolicyAllowed(i)??!1}function kke(i){let r=e().verdict;if(!r)return"unregistered";return r.policyDenyKind(i)}function pur(i,r,t){return e().verdict?.policyDeniedReason(i,r,t)??null}function fur(){return e().verdict?.complianceTaintsSettled()??!1}
export{uur,xg,$x,Rke,dur,SBe,kke,pur,fur};
