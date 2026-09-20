// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Rf,QN,MK,ust,Nj,ZPe}from"./chunk-nq62bgfy.js";function r(t,e){let n=Rf(),c=Nj(t,e),o=ZPe(t,e),a=!(QN()&&!MK(t,e));return{enabled:n,effectiveWindow:c,threshold:o,enforced:a,source:ust(t,e)}}function Rsr(t){let e;return{notify(n,c){let o=r(n,c);if(e!==void 0&&awn(e,o))return;e=o,t(o)},reset(){e=void 0}}}function awn(t,e){return t.enabled===e.enabled&&t.effectiveWindow===e.effectiveWindow&&t.threshold===e.threshold&&t.enforced===e.enforced&&t.source===e.source}
export{Rsr,awn};
