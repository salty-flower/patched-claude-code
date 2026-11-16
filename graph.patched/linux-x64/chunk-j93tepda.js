// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var LGs=/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;var t=new RegExp(`${LGs.source}|\\p{Cs}`,"u"),s=new RegExp(t.source,"gu");function DC(n){return t.test(n)}function nBe(n,e){return n.split(/\r?\n/).some(DC)?`${e} is not shown here because it holds hidden or control characters`:n}function Jx(n){return DC(n)?"a path not shown here because it holds hidden or control characters":n}
export{LGs,DC,nBe,Jx};
