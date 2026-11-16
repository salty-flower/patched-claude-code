// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var uL=8;function Ypo(t,n){let o=[],e="",r=0;for(let s of t){let u=c(s);if(r+u>n&&e!=="")o.push(e),e="",r=0;e+=s,r+=u}return o.push(e),o}function c(t){return t.length===1&&t<"\x80"?1:2}function XQe(t){let n=0;for(let o of t)n+=c(o);return n}
export{uL,Ypo,XQe};
