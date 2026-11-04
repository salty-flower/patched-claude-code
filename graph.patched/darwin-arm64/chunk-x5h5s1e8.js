// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{homedir as s}from"os";import{join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??i.HOME??s()}}function R$i(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function x$i(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function g7e(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function Dft(e){return o(g7e(e),"claude","versions")}function FZ(e){let{home:n}=r(e);return o(n,".local","bin")}
export{R$i,x$i,g7e,Dft,FZ};
