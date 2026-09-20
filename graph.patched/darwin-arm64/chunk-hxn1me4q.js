// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Fe}from"./chunk-vx7e38ke.js";import{G,z}from"./chunk-sgamszzq.js";import{Y}from"./chunk-z31wg2vm.js";var s=new Set(["hipaa"]);class r{latched=new Set;latchedTaints=[];taints=[];current=[];changed=Fe();verdict=void 0;replaceTaints(t){this.current=Y(t).sort();for(let n of t)if(s.has(n))this.latched.add(n);if(this.latched.size!==this.latchedTaints.length)this.latchedTaints=Array.from(this.latched).sort();let i=Y([...this.latchedTaints,...t]).sort();if(i.length===this.taints.length&&i.every((n,o)=>n===this.taints[o]))return!1;return this.taints=i,this.changed.emit(this.taints),!0}registerVerdict(t){this.verdict=t}resetForTesting(){this.latched.clear(),this.latchedTaints=[],this.taints=[],this.current=[]}}var a=new G(()=>new r);function e(){return a.of(z().host)}function rgn(t){return e().replaceTaints(t)}function sm(t){return e().taints.includes(t)}function wM(){return e().taints}function vme(){return e().current}function ogn(){return e().latchedTaints}function ZNe(t){return e().changed.subscribe(t)}function nUr(){e().resetForTesting()}function rUr(t){e().registerVerdict(t)}function YO(t){return e().verdict?.isPolicyAllowed(t)??!1}function oUr(t){try{return e().verdict?.commandPolicyGateAllows(t)??!1}catch{return!1}}function j5(t){let i=e().verdict;if(!i)return"unregistered";return i.policyDenyKind(t)}function wse(t,i,n){return e().verdict?.policyDeniedReason(t,i,n)??null}function I8n(){return e().verdict?.complianceTaintsSettled()??!1}
export{rgn,sm,wM,vme,ogn,ZNe,nUr,rUr,YO,oUr,j5,wse,I8n};
