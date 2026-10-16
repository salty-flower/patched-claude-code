// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{zp,CL}from"./chunk-1kmjytm1.js";import{Gd,hue,Yoe,K8,L2}from"./chunk-996thspe.js";function s(o,t){let c=zp(),e=Gd(o),n=K8(e,t),a=L2(e,t),r=!(CL()&&!hue(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:Yoe(e,t)}}function pVo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&HWr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function HWr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{pVo,HWr};
