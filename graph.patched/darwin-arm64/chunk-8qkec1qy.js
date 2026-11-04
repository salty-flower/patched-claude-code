// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var EPn=/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;function hso(n){return EPn.test(n)}var o=/\p{Cs}/u;function Nre(n){return hso(n)||o.test(n)}function Pct(n,t){return n.split(/\r?\n/).some(Nre)?`${t} is not shown here because it holds hidden or control characters`:n}function F1(n){return Nre(n)?"a path not shown here because it holds hidden or control characters":n}
export{EPn,hso,Nre,Pct,F1};
