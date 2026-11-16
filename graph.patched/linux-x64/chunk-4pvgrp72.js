// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{homedir as s}from"os";import{isAbsolute as c,join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??i.HOME??s()}}function iva(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function m(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function Bst(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function YBe(e){return o(Bst(e),"claude","versions")}function u5n(e){let n=m(e),{home:t}=r(e);return o(c(n)?n:o(t,".cache"),"claude","staging")}function Doe(e){let{home:n}=r(e);return o(n,".local","bin")}
export{iva,Bst,YBe,u5n,Doe};
