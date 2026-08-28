// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{$e}from"./chunk-vpkz5m05.js";import{K,W}from"./chunk-g4zaymy2.js";class n{taints=[];changed=$e();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((e)=>this.taints.includes(e)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new K(()=>new n);function r(){return o.of(W().host)}function WYn(i){r().replaceTaints(i)}function Nh(i){return r().taints.includes(i)}function F4(){return r().taints}function Yce(i){return r().changed.subscribe(i)}function zYn(i){r().registerVerdict(i)}function Dve(i){return r().verdict?.isPolicyAllowed(i)??!1}function Lve(i){let e=r().verdict;if(!e)return"unregistered";return e.policyDenyKind(i)}function qYn(i,e,t){return r().verdict?.policyDeniedReason(i,e,t)??null}
export{WYn,Nh,F4,Yce,zYn,Dve,Lve,qYn};
