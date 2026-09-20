// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{$e}from"./chunk-gj513b2z.js";import{G,W}from"./chunk-txfrkyzp.js";import{Y}from"./chunk-npxb682s.js";var s=new Set(["hipaa"]);class r{latched=new Set;latchedTaints=[];taints=[];current=[];changed=$e();verdict=void 0;replaceTaints(t){this.current=Y(t).sort();for(let n of t)if(s.has(n))this.latched.add(n);if(this.latched.size!==this.latchedTaints.length)this.latchedTaints=Array.from(this.latched).sort();let i=Y([...this.latchedTaints,...t]).sort();if(i.length===this.taints.length&&i.every((n,o)=>n===this.taints[o]))return!1;return this.taints=i,this.changed.emit(this.taints),!0}registerVerdict(t){this.verdict=t}resetForTesting(){this.latched.clear(),this.latchedTaints=[],this.taints=[],this.current=[]}}var a=new G(()=>new r);function e(){return a.of(W().host)}function Fmn(t){return e().replaceTaints(t)}function Lg(t){return e().taints.includes(t)}function cL(){return e().taints}function hme(){return e().current}function Umn(){return e().latchedTaints}function WNe(t){return e().changed.subscribe(t)}function w1r(){e().resetForTesting()}function v1r(t){e().registerVerdict(t)}function NO(t){return e().verdict?.isPolicyAllowed(t)??!1}function E1r(t){try{return e().verdict?.commandPolicyGateAllows(t)??!1}catch{return!1}}function M8(t){let i=e().verdict;if(!i)return"unregistered";return i.policyDenyKind(t)}function hse(t,i,n){return e().verdict?.policyDeniedReason(t,i,n)??null}function a9n(){return e().verdict?.complianceTaintsSettled()??!1}
export{Fmn,Lg,cL,hme,Umn,WNe,w1r,v1r,NO,E1r,M8,hse,a9n};
