// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Me}from"./chunk-8yfx63va.js";import{W,B}from"./chunk-sgyvc67j.js";import{K}from"./chunk-3rs4ng0x.js";var s=new Set(["hipaa"]);class r{latched=new Set;latchedTaints=[];taints=[];current=[];changed=Me();verdict=void 0;replaceTaints(t){this.current=K(t).sort();for(let n of t)if(s.has(n))this.latched.add(n);if(this.latched.size!==this.latchedTaints.length)this.latchedTaints=Array.from(this.latched).sort();let i=K([...this.latchedTaints,...t]).sort();if(i.length===this.taints.length&&i.every((n,o)=>n===this.taints[o]))return!1;return this.taints=i,this.changed.emit(this.taints),!0}registerVerdict(t){this.verdict=t}resetForTesting(){this.latched.clear(),this.latchedTaints=[],this.taints=[],this.current=[]}}var a=new W(()=>new r);function e(){return a.of(B().host)}function chr(t){return e().replaceTaints(t)}function Nm(t){return e().taints.includes(t)}function r2(){return e().taints}function Cle(){return e().current}function sQt(){return e().latchedTaints}function o0e(t){return e().changed.subscribe(t)}function uhr(){e().resetForTesting()}function dhr(t){e().registerVerdict(t)}function SP(t){return e().verdict?.isPolicyAllowed(t)??!1}function Tle(t){let i=e().verdict;if(!i)return"unregistered";return i.policyDenyKind(t)}function mee(t,i,n){return e().verdict?.policyDeniedReason(t,i,n)??null}function phr(){return e().verdict?.complianceTaintsSettled()??!1}
export{chr,Nm,r2,Cle,sQt,o0e,uhr,dhr,SP,Tle,mee,phr};
