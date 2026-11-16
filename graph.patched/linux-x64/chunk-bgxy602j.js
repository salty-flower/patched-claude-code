// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{up,GN}from"./chunk-8bxnk0gb.js";import{El,bxe,rme,tle,CA}from"./chunk-zaxe68t4.js";function s(o,t){let c=up(),e=El(o),n=tle(e,t),a=CA(e,t),r=!(GN()&&!bxe(e,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:rme(e,t)}}function Yyi(o){let t;return{notify(c,e){let n=s(c,e);if(t!==void 0&&z9o(t,n))return;t=n,o(n)},reset(){t=void 0}}}function z9o(o,t){return o.enabled===t.enabled&&o.effectiveWindow===t.effectiveWindow&&o.threshold===t.threshold&&o.enforced===t.enforced&&o.source===t.source}
export{Yyi,z9o};
