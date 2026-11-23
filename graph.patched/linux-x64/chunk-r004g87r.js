// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fe}from"./chunk-tc9kswgq.js";import{rn,ve,J,j}from"./chunk-mp0bjfh5.js";import{F7n}from"./chunk-24q2e8x1.js";j();var mN=rn(null),Cto=rn(null),Rto=rn(null);function ERn(){let e=ve(Rto);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var xto=rn(null);function zX(){let e=ve(xto);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Kv(){let e=ve(Cto);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=ve(mN);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function q(e){let n=t();return Fe(n,e)}function kr(){return t().setState}function fQo(){let e=t();return J(()=>F7n(e.setState),[e])}function fo(){return t()}function ys(e){return Fe(ve(mN),e)}
export{mN,Cto,Rto,ERn,xto,zX,Kv,q,kr,fQo,fo,ys};
