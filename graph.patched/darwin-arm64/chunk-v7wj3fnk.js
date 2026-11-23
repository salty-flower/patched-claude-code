// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var gGs=/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;var t=new RegExp(`${gGs.source}|\\p{Cs}`,"u"),s=new RegExp(t.source,"gu");function HA(n){return t.test(n)}function sBe(n,e){return n.split(/\r?\n/).some(HA)?`${e} is not shown here because it holds hidden or control characters`:n}function Zx(n){return HA(n)?"a path not shown here because it holds hidden or control characters":n}
export{gGs,HA,sBe,Zx};
