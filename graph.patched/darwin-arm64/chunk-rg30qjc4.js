// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Fu,e$}from"./chunk-xtgancv8.js";import{tc,UEe,vle,Fne,EM}from"./chunk-0x9x817t.js";function s(o,t){let c=Fu(),e=tc(o),n=Fne(e,t),a=EM(e,t),r=!(e$()&&!UEe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:vle(e,t)}}function b2s(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&xxo(t,n))return;t=n,o(n)},reset(){t=void 0}}}function xxo(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{b2s,xxo};
