// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Rf,BN,x6,Jot,x2,zHe}from"./chunk-v4zgc4qd.js";function r(t,e){let n=Rf(),c=x2(t,e),o=zHe(t,e),a=!(BN()&&!x6(t,e));return{enabled:n,effectiveWindow:c,threshold:o,enforced:a,source:Jot(t,e)}}function ror(t){let e;return{notify(n,c){let o=r(n,c);if(e!==void 0&&gSn(e,o))return;e=o,t(o)},reset(){e=void 0}}}function gSn(t,e){return t.enabled===e.enabled&&t.effectiveWindow===e.effectiveWindow&&t.threshold===e.threshold&&t.enforced===e.enforced&&t.source===e.source}
export{ror,gSn};
