// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{$ra as d,Eua as f,Rra as r,Tra as s,Yra as p,Zra as u,_ra as i}from"./_444.js";f();function l(t,e){let n=r(),c=i(t,e),o=d(t,e),a=!(s()&&!p(t,e));return{enabled:n,effectiveWindow:c,threshold:o,enforced:a,source:u(t,e)}}function A(t){let e;return{notify(n,c){let o=l(n,c);if(e!==void 0&&m(e,o))return;e=o,t(o)},reset(){e=void 0}}}function m(t,e){return t.enabled===e.enabled&&t.effectiveWindow===e.effectiveWindow&&t.threshold===e.threshold&&t.enforced===e.enforced&&t.source===e.source}
export{A as Hd,m as Id};
