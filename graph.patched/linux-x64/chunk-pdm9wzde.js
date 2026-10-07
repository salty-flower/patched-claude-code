// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{sp,Yf,uq,yoe,umt,z4,Vxe}from"./chunk-9wqh5j7s.js";function s(o,t){let c=Yf(),e=sp(o),n=z4(e,t),a=Vxe(e,t),r=!(uq()&&!yoe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:umt(e,t)}}function Dyo(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&obr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function obr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{Dyo,obr};
