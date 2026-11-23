// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{homedir as s}from"os";import{isAbsolute as c,join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??i.HOME??s()}}function YEa(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function m(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function Jst(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function QBe(e){return o(Jst(e),"claude","versions")}function D5n(e){let n=m(e),{home:t}=r(e);return o(c(n)?n:o(t,".cache"),"claude","staging")}function joe(e){let{home:n}=r(e);return o(n,".local","bin")}
export{YEa,Jst,QBe,D5n,joe};
