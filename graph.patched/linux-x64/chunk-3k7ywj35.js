// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ne}from"./chunk-gqqx2ybk.js";import{K,z}from"./chunk-2vv5hpw3.js";class n{taints=[];changed=Ne();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((e)=>this.taints.includes(e)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new K(()=>new n);function r(){return o.of(z().host)}function F7n(i){r().replaceTaints(i)}function $h(i){return r().taints.includes(i)}function M4(){return r().taints}function Wce(i){return r().changed.subscribe(i)}function B7n(i){r().registerVerdict(i)}function LSe(i){return r().verdict?.isPolicyAllowed(i)??!1}function DSe(i){let e=r().verdict;if(!e)return"unregistered";return e.policyDenyKind(i)}function U7n(i,e,t){return r().verdict?.policyDeniedReason(i,e,t)??null}
export{F7n,$h,M4,Wce,B7n,LSe,DSe,U7n};
