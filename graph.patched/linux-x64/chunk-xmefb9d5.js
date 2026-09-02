// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Be}from"./chunk-7s3c5qqq.js";import{J,W}from"./chunk-30zk17wm.js";class n{taints=[];changed=Be();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((e)=>this.taints.includes(e)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new J(()=>new n);function r(){return o.of(W().host)}function Brr(i){r().replaceTaints(i)}function yh(i){return r().taints.includes(i)}function lT(){return r().taints}function kfe(i){return r().changed.subscribe(i)}function Urr(i){r().registerVerdict(i)}function PAe(i){return r().verdict?.isPolicyAllowed(i)??!1}function DAe(i){let e=r().verdict;if(!e)return"unregistered";return e.policyDenyKind(i)}function jrr(i,e,t){return r().verdict?.policyDeniedReason(i,e,t)??null}
export{Brr,yh,lT,kfe,Urr,PAe,DAe,jrr};
