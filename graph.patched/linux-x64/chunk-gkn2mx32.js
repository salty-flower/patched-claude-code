// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Le}from"./chunk-d8qjp6nk.js";import{z,B}from"./chunk-6n7yk222.js";import{K}from"./chunk-kse90n8m.js";var s=new Set(["hipaa"]);class r{latched=new Set;latchedTaints=[];taints=[];current=[];changed=Le();verdict=void 0;replaceTaints(t){this.current=K(t).sort();for(let n of t)if(s.has(n))this.latched.add(n);if(this.latched.size!==this.latchedTaints.length)this.latchedTaints=Array.from(this.latched).sort();let i=K([...this.latchedTaints,...t]).sort();if(i.length===this.taints.length&&i.every((n,o)=>n===this.taints[o]))return!1;return this.taints=i,this.changed.emit(this.taints),!0}registerVerdict(t){this.verdict=t}resetForTesting(){this.latched.clear(),this.latchedTaints=[],this.taints=[],this.current=[]}}var a=new z(()=>new r);function e(){return a.of(B().host)}function Agr(t){return e().replaceTaints(t)}function qg(t){return e().taints.includes(t)}function K1(){return e().taints}function _le(){return e().current}function F7t(){return e().latchedTaints}function YIe(t){return e().changed.subscribe(t)}function Tgr(){e().resetForTesting()}function Cgr(t){e().registerVerdict(t)}function lH(t){return e().verdict?.isPolicyAllowed(t)??!1}function ble(t){let i=e().verdict;if(!i)return"unregistered";return i.policyDenyKind(t)}function aee(t,i,n){return e().verdict?.policyDeniedReason(t,i,n)??null}function Rgr(){return e().verdict?.complianceTaintsSettled()??!1}
export{Agr,qg,K1,_le,F7t,YIe,Tgr,Cgr,lH,ble,aee,Rgr};
