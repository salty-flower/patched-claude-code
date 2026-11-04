// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
function r(n){return n}function S(n){return r(n)}function p(n){return r(n)}function ce(n){return n==null?void 0:r(n)}function mo(n){return r(String(n))}function h9(n){return n==null?void 0:r(String(n))}function mf(...n){return r(n.join(""))}function xLr(n){return r(n.join(","))}function ha(n){return r([...n].sort().join(","))}function _E(n,e){return r(n.join(e??","))}function Yn(n){return r(n)}function jk(n,e){return e?Yn(n):void 0}function VBs(n,e){return n!==void 0&&e.includes(n)&&/^[a-z0-9-]{1,64}$/.test(n)?Yn(n):S("none")}function Zie(n,e){return e?Yn(n):S("custom")}function Fbe(n){return Zie(n.agentType,n.source==="built-in")}function fAo(n,e){return e?Yn(n):S("third-party")}
export{S,p,ce,mo,h9,mf,xLr,ha,_E,Yn,jk,VBs,Zie,Fbe,fAo};
