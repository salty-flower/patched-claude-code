// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function r(n){return n}function S(n){return r(n)}function f(n){return r(n)}function de(n){return n==null?void 0:r(n)}function Jo(n){return r(String(n))}function DSe(n){return n==null?void 0:r(String(n))}function Sm(...n){return r(n.join(""))}function jXr(n){return r(n.join(","))}function ma(n){return r([...n].sort().join(","))}function jv(n,e){return r(n.join(e??","))}function sr(n){return r(n)}function XD(n,e){return e?sr(n):void 0}function wgi(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?sr(n):S("none")}function Ffe(n,e){return e?sr(n):S("custom")}function Kie(n){return Ffe(n.agentType,n.source==="built-in")}function z5o(n,e){return e?sr(n):S("third-party")}
export{S,f,de,Jo,DSe,Sm,jXr,ma,jv,sr,XD,wgi,Ffe,Kie,z5o};
