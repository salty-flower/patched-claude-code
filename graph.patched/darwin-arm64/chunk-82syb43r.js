// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Me}from"./chunk-3k7pa7mk.js";import{j,B}from"./chunk-cet8na02.js";class n{taints=[];changed=Me();verdict=void 0;replaceTaints(i){if(i.length===this.taints.length&&i.every((r)=>this.taints.includes(r)))return;this.taints=i,this.changed.emit(this.taints)}registerVerdict(i){this.verdict=i}}var o=new j(()=>new n);function e(){return o.of(B().host)}function Dpr(i){e().replaceTaints(i)}function Yp(i){return e().taints.includes(i)}function Yx(){return e().taints}function qxe(i){return e().changed.subscribe(i)}function Lpr(i){e().registerVerdict(i)}function A1(i){return e().verdict?.isPolicyAllowed(i)??!1}function Kxe(i){let r=e().verdict;if(!r)return"unregistered";return r.policyDenyKind(i)}function Yxe(i,r,t){return e().verdict?.policyDeniedReason(i,r,t)??null}function Mpr(){return e().verdict?.complianceTaintsSettled()??!1}
export{Dpr,Yp,Yx,qxe,Lpr,A1,Kxe,Yxe,Mpr};
