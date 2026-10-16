// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{homedir as i}from"os";import{join as o}from"path";function r(e){return{env:e?.env??process.env,home:e?.homedir??a.HOME??i()}}function xLs(e){let{env:n,home:t}=r(e);return n.XDG_STATE_HOME??o(t,".local","state")}function PLs(e){let{env:n,home:t}=r(e);return n.XDG_CACHE_HOME??o(t,".cache")}function _1e(e){let{env:n,home:t}=r(e);return n.XDG_DATA_HOME??o(t,".local","share")}function hsn(e){return o(_1e(e),"claude","versions")}function _5(e){let{home:n}=r(e);return o(n,".local","bin")}
export{xLs,PLs,_1e,hsn,_5};
