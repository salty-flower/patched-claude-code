// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function r(n){return n}function b(n){return r(n)}function f(n){return r(n)}function de(n){return n==null?void 0:r(n)}function Jo(n){return r(String(n))}function Abe(n){return n==null?void 0:r(String(n))}function ym(...n){return r(n.join(""))}function bXr(n){return r(n.join(","))}function ma(n){return r([...n].sort().join(","))}function Uk(n,e){return r(n.join(e??","))}function or(n){return r(n)}function qD(n,e){return e?or(n):void 0}function Bhi(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?or(n):b("none")}function Pfe(n,e){return e?or(n):b("custom")}function Uie(n){return Pfe(n.agentType,n.source==="built-in")}function _5o(n,e){return e?or(n):b("third-party")}
export{b,f,de,Jo,Abe,ym,bXr,ma,Uk,or,qD,Bhi,Pfe,Uie,_5o};
