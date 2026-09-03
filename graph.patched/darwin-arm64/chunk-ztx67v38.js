// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Be}from"./chunk-5e3knf27.js";import{X,G}from"./chunk-hdbxv3pp.js";class n{taints=[];changed=Be();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((r)=>this.taints.includes(r)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new X(()=>new n);function e(){return o.of(G().host)}function jsr(i){e().replaceTaints(i)}function Cg(i){return e().taints.includes(i)}function Rx(){return e().taints}function dRe(i){return e().changed.subscribe(i)}function Wsr(i){e().registerVerdict(i)}function U$e(i){return e().verdict?.isPolicyAllowed(i)??!1}function pRe(i){let r=e().verdict;if(!r)return"unregistered";return r.policyDenyKind(i)}function Gsr(i,r,t){return e().verdict?.policyDeniedReason(i,r,t)??null}function qsr(){return e().verdict?.complianceTaintsSettled()??!1}
export{jsr,Cg,Rx,dRe,Wsr,U$e,pRe,Gsr,qsr};
