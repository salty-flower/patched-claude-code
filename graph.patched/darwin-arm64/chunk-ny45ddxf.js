// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cp,qN}from"./chunk-pre7qzb2.js";import{kl,kxe,ume,dle,PC}from"./chunk-wqb2b4v0.js";function s(o,t){let c=cp(),e=kl(o),n=dle(e,t),a=PC(e,t),r=!(qN()&&!kxe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:ume(e,t)}}function RSi(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&S7o(t,n))return;t=n,o(n)},reset(){t=void 0}}}function S7o(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{RSi,S7o};
