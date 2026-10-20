// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{of,A0}from"./chunk-t61vswm2.js";import{Jd,Fpe,Zse,H9,mz}from"./chunk-rncrmfyt.js";function s(o,t){let c=of(),e=Jd(o),n=H9(e,t),a=mz(e,t),r=!(A0()&&!Fpe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:Zse(e,t)}}function E9o(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&Nqr(t,n))return;t=n,o(n)},reset(){t=void 0}}}function Nqr(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{E9o,Nqr};
